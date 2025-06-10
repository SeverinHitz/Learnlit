import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from PIL import Image, ImageDraw
import numpy as np
from scipy.ndimage import gaussian_filter
from utils.utils import get_base_path


def zeitauswahl(df: pd.DataFrame) -> pd.DataFrame:
    """
    Filtert das DataFrame anhand einer Zeitspanne (Datum + Uhrzeit).
    Gibt ein gefiltertes DataFrame zurück.
    """
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        start_date = st.date_input(
            "Von Datum", value=pd.to_datetime(df["timestamp"]).min()
        )
    with col2:
        start_time = st.time_input(
            "Von Uhrzeit", value=pd.to_datetime(df["timestamp"]).min().time()
        )
    with col3:
        end_date = st.date_input(
            "Bis Datum", value=pd.to_datetime(df["timestamp"]).max()
        )
    with col4:
        end_time = st.time_input(
            "Bis Uhrzeit", value=pd.to_datetime(df["timestamp"]).max().time()
        )

    start_datetime = pd.to_datetime(f"{start_date} {start_time}")
    end_datetime = pd.to_datetime(f"{end_date} {end_time}")

    df_copy = df.copy()
    df_copy["timestamp_dt"] = pd.to_datetime(df_copy["timestamp"])
    filtered_df = df_copy[
        (df_copy["timestamp_dt"] >= start_datetime)
        & (df_copy["timestamp_dt"] <= end_datetime)
    ]

    return filtered_df


def show_raw_data(df: pd.DataFrame):
    """
    Zeigt das unbearbeitete DataFrame.
    """
    st.subheader("🗂️ Rohdaten")
    st.dataframe(df, use_container_width=True)


############################# Auswertungs-Funktionen für Landschaftsdetektiv ############################
def detective_auswertung(df: pd.DataFrame, scene: str):
    """
    Führt die Auswertung für das Spiel "Landschaftsdetektiv" durch.
    Zeigt verschiedene Plots und Statistiken an.
    """
    st.subheader("🔍 Auswertung der Landschaftsdetektiv-Runde")

    # Filter nach Zeitspanne (Datum + Uhrzeit)
    filtered_df = zeitauswahl(df)

    st.markdown("---")

    # Leaderboard
    plot_leaderboard(filtered_df)

    # Violinplot der Zeiten
    plot_violin_times(filtered_df)

    # Heatmap der Klickpunkte
    plot_heatmap(filtered_df, scene)

    # Bild mit allen Punkten
    plot_all_points(filtered_df, scene)

    # Rohdaten anzeigen
    show_raw_data(filtered_df)


# ────────────────────────── 1. Leaderboard ──────────────────────────
def plot_leaderboard(df: pd.DataFrame):
    """
    Zeigt die Top 10 Spieler:innen mit dem schnellsten Gesamtdurchlauf:
    - Top 3 als Metrics
    - Rest als DataFrame mit ProgressColumn
    """
    # Berechnung der Gesamtzeit
    zeit_cols = [
        col for col in df.columns[3:-1] if col.lower() not in ["punkte", "timestamp_dt"]
    ]
    df["Gesamtzeit"] = df[zeit_cols].max(axis=1)

    # Leaderboard erstellen
    leaderboard = (
        df.sort_values("Gesamtzeit")[["spielname", "alter", "Gesamtzeit"]]
        .head(10)
        .reset_index(drop=True)
    )

    st.subheader("🏆 Leaderboard")

    # Falls weniger als 3 Einträge: Dummy-Einträge hinzufügen
    while len(leaderboard) < 3:
        leaderboard.loc[len(leaderboard)] = ["-", "-", np.nan]

    # Top-3 als Metrics
    best_time = leaderboard.loc[0, "Gesamtzeit"]
    second_time = leaderboard.loc[1, "Gesamtzeit"]
    third_time = leaderboard.loc[2, "Gesamtzeit"]

    delta_2 = (
        second_time - best_time
        if pd.notnull(second_time) and pd.notnull(best_time)
        else None
    )
    delta_3 = (
        third_time - best_time
        if pd.notnull(third_time) and pd.notnull(best_time)
        else None
    )

    col1, col2, col3 = st.columns([1, 1, 1])
    with col1:
        st.write("")
        st.markdown(f"**🥈 {leaderboard.loc[1, 'spielname']}**")
        st.metric(
            label=f"🥈 {leaderboard.loc[1, 'spielname']}",
            value=f"{second_time:.2f} s" if pd.notnull(second_time) else "-",
            delta=f"+{delta_2:.2f} s" if delta_2 is not None else "",
            delta_color="inverse",
            label_visibility="collapsed",
        )
    with col2:
        st.markdown(f"**🥇 {leaderboard.loc[0, 'spielname']}**")
        st.metric(
            label=f"🥇 {leaderboard.loc[0, 'spielname']}",
            value=f"{best_time:.2f} s" if pd.notnull(best_time) else "-",
            delta="",
            label_visibility="collapsed",
        )
    with col3:
        st.write("")
        st.write("")
        st.markdown(f"**🥉 {leaderboard.loc[2, 'spielname']}**")
        st.metric(
            label=f"🥉 {leaderboard.loc[2, 'spielname']}",
            value=f"{third_time:.2f} s" if pd.notnull(third_time) else "-",
            delta=f"+{delta_3:.2f} s" if delta_3 is not None else "",
            delta_color="inverse",
            label_visibility="collapsed",
        )

    # DataFrame darunter mit ProgressColumn
    leaderboard_long = leaderboard.copy()
    leaderboard_long["Platz"] = leaderboard_long.index + 1
    leaderboard_long["Name"] = leaderboard_long["spielname"]
    leaderboard_long["Zeit (s)"] = leaderboard_long["Gesamtzeit"].round(2)
    leaderboard_long["Abstand (s)"] = leaderboard_long["Gesamtzeit"] - best_time
    leaderboard_long["Abstand (s)"] = leaderboard_long["Abstand (s)"].round(2)

    max_delta = leaderboard_long["Abstand (s)"].max()
    leaderboard_long["Abstand-Progress"] = leaderboard_long["Abstand (s)"]

    leaderboard_display = leaderboard_long[
        ["Platz", "Name", "Zeit (s)", "Abstand-Progress"]
    ]

    st.dataframe(
        leaderboard_display,
        column_config={
            "Abstand-Progress": st.column_config.ProgressColumn(
                label="Abstand zum 1.",
                format="%.2f s",
                min_value=0,
                max_value=max_delta if max_delta > 0 else 1,
            )
        },
        hide_index=True,
    )


# ────────────────────────── 2. Violinplot der Zeiten ──────────────────────────
def plot_violin_times(df: pd.DataFrame):
    """
    Plottet einen farbigen Violinplot der Zeiten pro Kategorie (Borke, Brand, etc.)
    mit halbtransparenten Boxplots und farbigen Punkten (unten liegend).
    """
    st.subheader("🎻 Violinplot der Zeiten pro Kategorie")

    zeit_cols = [
        col for col in df.columns[3:-1] if col.lower() not in ["punkte", "timestamp_dt"]
    ]
    times_long = df.melt(value_vars=zeit_cols, var_name="Label", value_name="Sekunden")

    fig, ax = plt.subplots(figsize=(12, 6))

    # Farbige Violinplots mit Seaborn-Palette
    palette = sns.color_palette("Set2", n_colors=len(times_long["Label"].unique()))

    # Violinplots
    sns.violinplot(
        x="Label",
        y="Sekunden",
        data=times_long,
        ax=ax,
        inner=None,
        palette=palette,
        alpha=0.6,
    )

    # Boxplots als Overlay
    sns.boxplot(
        x="Label",
        y="Sekunden",
        data=times_long,
        ax=ax,
        width=0.15,
        showcaps=True,
        boxprops={"facecolor": "white", "edgecolor": "black", "alpha": 0.5},
        whiskerprops={"color": "black"},
        capprops={"color": "black"},
        medianprops={"color": "black"},
    )

    ax.set_ylabel("Zeit (s)")

    legend = ax.get_legend()
    if legend is not None:
        legend.remove()  # optional: Legend entfernen

    st.pyplot(fig)


# ────────────────────────── 3. Heatmap ──────────────────────────
def plot_heatmap(df: pd.DataFrame, scene: str):
    """
    Zeichnet eine echte Heatmap der Klickpunkte als Overlay über das Hintergrundbild.
    """
    st.subheader("🌡️ Heatmap der Klickpunkte")

    img_path = get_base_path("detective") / f"{scene}_verändert.png"
    img = Image.open(img_path).convert("RGB")
    width, height = img.size

    # Alle Klickpunkte aus 'punkte'-Spalte extrahieren
    heatmap_array = np.zeros((height, width))

    for pts_str in df["punkte"]:
        points = pts_str.split("; ")
        for pt in points:
            try:
                x_rel, y_rel, hit = eval(pt)
                x_px = int(x_rel * width)
                y_px = int(y_rel * height)
                if 0 <= x_px < width and 0 <= y_px < height:
                    heatmap_array[y_px, x_px] += 1
            except Exception:
                continue

    # Weiche Heatmap mit Gaussian-Filter erzeugen
    heatmap_blurred = gaussian_filter(heatmap_array, sigma=20)

    # Normieren und in RGB umwandeln
    heatmap_norm = heatmap_blurred / np.max(heatmap_blurred)
    heatmap_img = Image.fromarray(np.uint8(plt.cm.jet(heatmap_norm) * 255))
    heatmap_img = heatmap_img.convert("RGBA")

    # Transparenz anpassen (z. B. Alpha = 128)
    alpha = 128
    heatmap_img.putalpha(alpha)

    # Kombinieren: Heatmap + Hintergrundbild
    combined = Image.alpha_composite(img.convert("RGBA"), heatmap_img)

    st.image(combined, caption="Echte Heatmap aller Klickpunkte")


# ────────────────────────── 4. Punktebild ──────────────────────────
def plot_all_points(df: pd.DataFrame, scene: str):
    """
    Plottet das Bild mit allen gewählten Punkten als grün (Treffer) oder rot (Fehler).
    """
    st.subheader("📍 Alle gewählten Punkte")

    img_path = get_base_path("detective") / f"{scene}_verändert.png"
    img = Image.open(img_path).convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")

    for pts_str in df["punkte"]:
        points = pts_str.split("; ")
        for pt in points:
            try:
                x, y, hit = eval(pt)
                x_px = int(x * img.width)
                y_px = int(y * img.height)
                color = (0, 255, 0, 180) if hit else (255, 0, 0, 180)
                r = 10
                draw.ellipse((x_px - r, y_px - r, x_px + r, y_px + r), fill=color)
            except Exception:
                continue

    st.image(img, caption="Alle gewählten Punkte")


# ────────────────────────── 5. Raw DataFrame ──────────────────────────


############################# Auswertungs-Funktionen für Feedback ############################
def feedback_auswertung(df: pd.DataFrame):
    """
    Führt die Auswertung für das Feedback durch.
    """
    st.subheader(f"📣 Feedback-Auswertung")

    # Filter nach Zeitspanne (Datum + Uhrzeit)
    filtered_df = zeitauswahl(df)
    st.markdown("---")

    # Erhöhe Bewertung um 1 weil 0-4 verwendet wird
    if "bewertung" in filtered_df.columns:
        filtered_df["bewertung"] = filtered_df["bewertung"].apply(
            lambda x: x + 1 if pd.notnull(x) else x
        )

    # 1. Metriken: Ø Bewertung und Gelernt-Anteil
    plot_feedback_metrics(filtered_df)

    # 2. Boxplot der Bewertungen
    plot_feedback_boxplot(filtered_df)

    # 3. Histogramm der "Gelernt"-Spalte
    plot_feedback_gelernt_hist(filtered_df)

    # 4. Kommentaranzeige
    show_feedback_comments(filtered_df)

    # Rohdaten anzeigen
    show_raw_data(filtered_df)


# ────────────────────────── 1. Feedback-Metriken ──────────────────────────
def plot_feedback_metrics(df: pd.DataFrame):
    """
    Zeigt Metriken: Durchschnittsbewertung und Anteil derer, die etwas gelernt haben.
    """
    st.subheader("🔢 Kennzahlen")

    avg_rating = df["bewertung"].mean().round(2) if not df.empty else -2
    gelernt_pct = (
        (df["gelernt"].sum() / len(df) * 100).round(1) if not df.empty else "-"
    )

    col1, col2 = st.columns(2)
    col1.metric(label="Ø Bewertung", value=f"{avg_rating} von 5")
    col2.metric(label="Anteil 'Gelernt'", value=f"{gelernt_pct} %")


# ────────────────────────── 2. Boxplot der Bewertungen ──────────────────────────
def plot_feedback_boxplot(df: pd.DataFrame):
    """
    Plottet einen Boxplot der Bewertungen.
    """
    st.subheader("🎯 Verteilung der Bewertungen")
    if df.empty:
        st.info("Keine Bewertungen im gewählten Zeitraum.")
        return

    fig, ax = plt.subplots(figsize=(8, 4))
    sns.boxplot(x="bewertung", data=df, color="skyblue", width=0.5)
    ax.set_xlim(0.5, 5.5)
    ax.set_xlabel("Bewertung (1–5)")
    ax.set_title("Boxplot der Bewertungen")
    st.pyplot(fig)


# ────────────────────────── 3. Histogramm der 'Gelernt'-Spalte ──────────────────────────
def plot_feedback_gelernt_hist(df: pd.DataFrame):
    """
    Zeigt ein Histogramm, wie oft 'gelernt' angegeben wurde.
    """
    st.subheader("🧠 Anteil 'Gelernt'")

    if df.empty:
        st.info("Keine Feedbackdaten im gewählten Zeitraum.")
        return

    gelernt_counts = df["gelernt"].value_counts().sort_index()

    labels = ["Nicht gelernt", "Gelernt"]
    counts = [gelernt_counts.get(0, 0), gelernt_counts.get(1, 0)]

    fig, ax = plt.subplots(figsize=(6, 4))
    sns.barplot(x=labels, y=counts, palette="Set2", ax=ax)
    ax.set_ylabel("Anzahl")
    ax.set_title("Anteil 'Gelernt'")
    st.pyplot(fig)


# ────────────────────────── 4. Kommentare ──────────────────────────
def show_feedback_comments(df: pd.DataFrame):
    """
    Zeigt alle Kommentare (absteigend sortiert nach Zeit).
    """
    st.subheader("📝 Kommentare")

    if df.empty:
        st.info("Keine Kommentare im gewählten Zeitraum.")
        return

    sorted_df = df.sort_values("timestamp_dt", ascending=False)
    for _, row in sorted_df.iterrows():
        kommentar = row.get("kommentar", "").strip()
        if not kommentar:
            continue  # Leere Kommentare überspringen

        timestamp = row.get("timestamp", "")
        rating = int(row.get("bewertung", 0))
        gelernt = row.get("gelernt", 0)

        # Bewertung als Sterne oder Zahl
        rating_str = "⭐️" * rating if rating > 0 else "Keine Bewertung"
        gelernt_str = "✅ Gelernt" if gelernt else "❌ Nicht gelernt"

        st.markdown(
            f"**{timestamp}**  |  {rating_str}  |  {gelernt_str}\n\n_{kommentar}_"
        )
        st.divider()
