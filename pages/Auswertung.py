# learnlit/auswertung.py

import streamlit as st
import pandas as pd
from utils.google_utils import lade_worksheet_namen, lade_worksheet
from utils.utils import reset_session_state_on_page_change
from utils.auswertung_utils import detective_auswertung, feedback_auswertung

st.set_page_config(layout="wide")
st.title("📊 Auswertung der LearnLit-Spiele")

reset_session_state_on_page_change("Auswertung")

# ────────────────────────── Passwortschutz ────────────────────────
if "auth_ok" not in st.session_state:
    st.session_state["auth_ok"] = False

if not st.session_state["auth_ok"]:
    password = st.text_input("🔑 Bitte Passwort eingeben:", type="password")
    correct_password = st.secrets.auswertung.get("password")

    if password == correct_password:
        st.session_state["auth_ok"] = True
        st.rerun()  # Seite neu laden und das Passwortfeld ausblenden
    elif password:  # nur wenn was eingetippt wurde
        st.warning(
            "🚫 Falsches Passwort oder kein Passwort eingegeben. Zugriff verweigert."
        )
    st.stop()  # wenn Passwort nicht korrekt → stop

# ────────────────────────── Spiel-Definitionen ─────────────────────
spiele = {
    "🕵️ Landschaftsdetektiv:in": "Landschaftsdetektiv",
    "🎚️ Landschaftsdesigner:in": "Landschaftsdesigner",
}


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

        if worksheet_name == "Feedback":
            feedback_auswertung(df)
        elif spiel_label == "🕵️ Landschaftsdetektiv:in":
            detective_auswertung(df, worksheet_name)

        elif spiel_label == "🎚️ Landschaftsdesigner:in":
            pass
