# learnlit/auswertung.py

import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
from google_utils import lade_worksheet_namen, lade_worksheet

st.set_page_config(layout="wide")
st.title("📊 Auswertung der LearnLit-Spiele")

# ────────────────────────── Spiel-Definitionen ─────────────────────
spiele = {
    "🕵️ Landschaftsdetektiv:in": "Landschaftsdetektiv",
    "🎚️ Slider-Spiel": "SliderSpiel",  # Für später
}


# ────────────────────────── Landschaftsdetektiv  ──────────────────
def detective_auswertung(df: pd.DataFrame) -> None:
    pass


# ────────────────────────── Tabs pro Spiel ────────────────────────
spiel_tabs = st.tabs(list(spiele.keys()))

for i, (spiel_label, sheet_name) in enumerate(spiele.items()):
    with spiel_tabs[i]:
        worksheets = lade_worksheet_namen(sheet_name)
        if not worksheets:
            continue

        # Datentyp auswählen (z. B. Spielrunde oder Feedback)
        worksheet_name = st.selectbox(
            "🗂️ Datenblatt auswählen", worksheets, index=0, key=sheet_name
        )

        df = lade_worksheet(sheet_name, worksheet_name)
        if df.empty:
            st.info("Keine Daten verfügbar.")
            continue

        if spiel_label == "🕵️ Landschaftsdetektiv:in":
            detective_auswertung(df)

        st.dataframe(df, use_container_width=True)
