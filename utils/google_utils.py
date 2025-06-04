import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime
from pathlib import Path
import streamlit as st
import pandas as pd


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
    all_pts: list[tuple[float, float, bool]] | None = None,
):
    """Speichert eine Spielrunde als EINE Zeile mit Labels als Spalten, plus Spielname, Alter, Punkte."""
    sh = init_gsheet(sheet_name)

    try:
        ws = sh.worksheet(scene)
        existing_data = ws.get_all_records()
        existing_headers = list(existing_data[0].keys()) if existing_data else []
    except gspread.exceptions.WorksheetNotFound:
        ws = sh.add_worksheet(title=scene, rows="1000", cols="50")
        existing_data = []
        existing_headers = []

    # Alle Labels aus dem aktuellen Durchlauf
    label_to_time = dict(zip(df["label"], df["sekunden_seit_start"]))
    round_labels = sorted(label_to_time.keys())

    # Zielspalten
    fixed_columns = ["timestamp", "spielname", "alter"]
    all_columns = fixed_columns + round_labels + ["punkte"]

    # Header aktualisieren, falls sich etwas verändert hat
    if existing_headers != all_columns:
        old_rows = (
            [[row.get(h, "") for h in all_columns] for row in existing_data]
            if existing_data
            else []
        )
        ws.clear()
        ws.append_row(all_columns)
        if old_rows:
            ws.append_rows(old_rows)

    # Neue Zeile
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    zeile = [timestamp, spielname or "", alter or ""]

    # Zeitwerte passend einsortieren
    zeile += [label_to_time.get(label, "") for label in round_labels]

    # Punkte serialisieren
    pts_str = (
        "; ".join([f"({int(x)}, {int(y)}, {hit})" for x, y, hit in all_pts])
        if all_pts
        else ""
    )
    zeile.append(pts_str)

    ws.append_row(zeile)


# Landschaftsdesigner
def save_slider_results_to_gsheet(
    scene: str,
    slider_values: list[int],
    sheet_name: str = "Landschaftsdesigner",
    worksheet_name: str = "Sliderdaten",
):
    """Speichert timestamp, Szene, und Sliderwerte (S1–S4) in ein Worksheet."""
    sh = init_gsheet(sheet_name)

    try:
        ws = sh.worksheet(worksheet_name)
        existing = ws.get_all_values()
        existing_headers = existing[0] if existing else []
    except gspread.exceptions.WorksheetNotFound:
        ws = sh.add_worksheet(title=worksheet_name, rows="1000", cols="10")
        existing_headers = []

    # Zielspalten
    columns = ["timestamp", "scene", "slider1", "slider2", "slider3", "slider4"]
    if existing_headers != columns:
        ws.clear()
        ws.append_row(columns)

    # Datenzeile
    row = [
        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        scene,
        *slider_values,
    ]
    ws.append_row(row)


# ────────────────────────── Feedback ─────────────────────────────
def save_feedback_to_gsheet(
    df: pd.DataFrame,
    sheet_name: str = "Landschaftsdetektiv",
    worksheet: str = "Feedback",
):
    """Speichert einzeiliges Feedback-DF in eigenes Worksheet."""
    sh = init_gsheet(sheet_name)

    try:
        ws = sh.worksheet(worksheet)
        existing = ws.get_all_values()
        existing_rows = len(existing)
    except gspread.exceptions.WorksheetNotFound:
        ws = sh.add_worksheet(title=worksheet, rows="1000", cols="10")
        ws.append_row(df.columns.tolist())
        existing_rows = 1

    # Nur Datenzeile(n) schreiben
    ws.insert_rows(df.values.tolist(), row=existing_rows + 1)


# ────────────────────────── Daten laden ───────────────────────────
@st.cache_data
def lade_worksheet_namen(sheet_name: str) -> list[str]:
    try:
        sheet = init_gsheet(sheet_name)
        return [ws.title for ws in sheet.worksheets()]
    except Exception as e:
        st.error(f"Fehler beim Laden des Sheets '{sheet_name}': {e}")
        return []


@st.cache_data
def lade_worksheet(sheet_name: str, worksheet_name: str) -> pd.DataFrame:
    try:
        sheet = init_gsheet(sheet_name)
        ws = sheet.worksheet(worksheet_name)
        return pd.DataFrame(ws.get_all_records())
    except Exception as e:
        st.error(f"Fehler beim Laden der Daten aus '{worksheet_name}': {e}")
        return pd.DataFrame()
