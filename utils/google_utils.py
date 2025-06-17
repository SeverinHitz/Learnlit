import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime
from pathlib import Path
import streamlit as st
import pandas as pd
from utils.time_utils import now_utc, fmt_utc


# ────────────────────────── Google Sheets ──────────────────────────
def init_gsheet(sheet_name: str) -> gspread.Spreadsheet:
    """Initialisiert Google Sheet Zugriff mit modernem google-auth Ansatz."""
    scope = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
    ]

    if "gcp_service_account" in st.secrets:
        creds_dict = st.secrets["gcp_service_account"]
        creds = Credentials.from_service_account_info(creds_dict, scopes=scope)
    else:
        credentials_path = Path(__file__).parent.parent / "credentials.json"
        creds = Credentials.from_service_account_file(
            str(credentials_path), scopes=scope
        )

    client = gspread.authorize(creds)
    return client.open(sheet_name)


# ────────────────────────── Ergebnisse speichern ───────────────────


# Landschaftsdetektiv
def save_compare_results_to_gsheet(
    df: pd.DataFrame,
    scene: str,
    sheet_name: str = "Landschaftsdetektiv",
    spielname: str | None = None,
    alter: int | None = None,
    all_pts: list[dict] | None = None,  # <- jetzt Dicts mit rel_x/rel_y/hit
):
    """Speichert eine Spielrunde als EINE Zeile (Labels = Spalten) plus Metadaten."""
    sh = init_gsheet(sheet_name)

    try:
        ws = sh.worksheet(scene)
        existing_data = ws.get_all_records()
        existing_headers = list(existing_data[0].keys()) if existing_data else []
    except gspread.exceptions.WorksheetNotFound:
        ws = sh.add_worksheet(title=scene, rows="1000", cols="50")
        existing_data, existing_headers = [], []

    # ► Alle Labels und Zeiten aus der Runde
    label_to_time = dict(zip(df["label"], df["sekunden_seit_start"]))
    round_labels = sorted(label_to_time)

    fixed_columns = ["timestamp", "spielname", "alter"]
    all_columns = fixed_columns + round_labels + ["punkte"]

    # ► Header anpassen, falls neue Labels dazugekommen sind
    if existing_headers != all_columns:
        old_rows = (
            [[row.get(h, "") for h in all_columns] for row in existing_data]
            if existing_data
            else []
        )
        ws.append_row(all_columns)
        if old_rows:
            ws.append_rows(old_rows)

    # ► Datenzeile zusammenbauen
    timestamp = timestamp = fmt_utc(now_utc())
    zeile = [timestamp, spielname or "", alter or ""]

    # Label-Zeitspalten füllen
    zeile += [label_to_time.get(lbl, "") for lbl in round_labels]

    # Klickliste serialisieren (rel_x/rel_y auf 4 Dezimalstellen)
    pts_str = ""
    if all_pts:
        pts_str = "; ".join(
            f"({p['rel_x']:.4f}, {p['rel_y']:.4f}, {p['hit']})" for p in all_pts
        )
    zeile.append(pts_str)

    ws.append_row(zeile)


# Landschaftsdesigner
def save_slider_results_to_gsheet(
    scene: str,
    slider_values: list[int],
    kosten: float,
    sheet_name: str = "Landschaftsdesigner",
    worksheet_name: str = "Sliderdaten",
):
    """Speichert timestamp, Szene, Sliderwerte (S1, S4) und Schadenskosten in ein Worksheet."""
    sh = init_gsheet(sheet_name)

    try:
        ws = sh.worksheet(worksheet_name)
        existing = ws.get_all_values()
        existing_headers = existing[0] if existing else []
    except gspread.exceptions.WorksheetNotFound:
        ws = sh.add_worksheet(title=worksheet_name, rows="1000", cols="10")
        existing_headers = []

    # Neue Zielspalten
    columns = ["timestamp", "scene", "s1", "s4", "kosten"]
    if existing_headers != columns:
        ws.append_row(columns)

    # Datenzeile speichern
    row = [
        fmt_utc(now_utc()),
        scene,
        slider_values[0],  # S1
        slider_values[1],  # S4
        round(kosten, 3),
    ]
    ws.append_row(row)


# ────────────────────────── Feedback ─────────────────────────────
def save_feedback_to_gsheet(
    df: pd.DataFrame,
    sheet_name: str = "Landschaftsdetektiv",
    worksheet: str = "Feedback",
):
    """
    Speichert einzeiliges Feedback-DataFrame in ein eigenes Worksheet.
    Fügt automatisch Spaltenheader hinzu, falls sie noch nicht existieren.
    """
    sh = init_gsheet(sheet_name)

    try:
        ws = sh.worksheet(worksheet)
        existing = ws.get_all_values()
        if not existing or df.columns.tolist() != existing[0]:
            ws.append_row(df.columns.tolist())
            existing_rows = 1
        else:
            existing_rows = len(existing)
    except gspread.exceptions.WorksheetNotFound:
        ws = sh.add_worksheet(title=worksheet, rows="1000", cols="10")
        ws.append_row(df.columns.tolist())
        existing_rows = 1

    # Feedback-Daten als Zeilen schreiben
    ws.insert_rows(df.values.tolist(), row=existing_rows + 1)


# ────────────────────────── Daten laden ───────────────────────────
@st.cache_data(ttl=20)
def lade_worksheet_namen(sheet_name: str) -> list[str]:
    try:
        sheet = init_gsheet(sheet_name)
        return [ws.title for ws in sheet.worksheets()]
    except Exception as e:
        st.error(f"Fehler beim Laden des Sheets '{sheet_name}': {e}")
        return []


@st.cache_data(ttl=20)
def lade_worksheet(sheet_name: str, worksheet_name: str) -> pd.DataFrame:
    """
    Lädt die Daten aus einem Google-Sheet-Worksheet als Pandas DataFrame.

    Diese Funktion verwendet get_all_values(), um sicherzustellen, dass
    alle Werte zunächst als Strings geladen werden (inkl. deutscher Kommas
    als Dezimaltrenner). Danach werden die Spalten (außer timestamp,
    spielname, punkte) konvertiert:

    - Alle Kommas werden durch Punkte ersetzt.
    - Danach werden die Werte in floats gewandelt.

    Das ermöglicht einen robusten Import auch für unterschiedliche
    Regional-Einstellungen in Google Sheets (z.B. Deutsch/Schweiz vs.
    Englisch/USA).

    Args:
        sheet_name (str): Der Name des Google-Sheets-Dokuments.
        worksheet_name (str): Der Name des Worksheets innerhalb des Dokuments.

    Returns:
        pd.DataFrame: Ein DataFrame mit den geladenen und konvertierten Daten.
    """
    try:
        sheet = init_gsheet(sheet_name)
        ws = sheet.worksheet(worksheet_name)
        data = ws.get_all_values()
        headers = data[0]
        rows = data[1:]
        df = pd.DataFrame(rows, columns=headers)

        print(df.head())  # Debug-Ausgabe

        for col in df.columns:
            if col.lower() in ["timestamp", "spielname", "punkte"]:
                continue
            try:
                df[col] = (
                    df[col].astype(str).str.replace(",", ".", regex=False).astype(float)
                )
            except Exception:
                pass
        return df

    except Exception as e:
        st.error(f"Fehler beim Laden der Daten aus '{worksheet_name}': {e}")
        return pd.DataFrame()
