import streamlit as st
from utils.utils import reset_session_state_on_page_change


st.title("Landschaftsbeschützer:in Game")

reset_session_state_on_page_change("Landschaftsdesigner")

game_url = "https://severinhitz.github.io/WKT-Ebnat-Kappel-GDev/"

# Session-State für Feedback verwalten
if "spiel_geoeffnet" not in st.session_state:
    st.session_state["spiel_geoeffnet"] = False

if "feedback" not in st.session_state:
    st.session_state["feedback"] = False

# Button zum Öffnen des Spiels
if st.button("Spiel starten"):
    st.session_state["spiel_geoeffnet"] = True
    # Spiel in neuem Tab öffnen (per JavaScript)
    st.components.v1.html(
        f"""
        <script>
            window.open("{game_url}", "_blank");
        </script>
        """,
        height=0,
    )

# Feedback-Meldung und Formular
if st.session_state["spiel_geoeffnet"]:
    st.success("✅ Das Spiel wurde in einem neuen Tab geöffnet. Viel Spass!")
    if not st.session_state["feedback"]:
        from utils.utils import zeige_feedback_formular

        zeige_feedback_formular("Landschaftsbeschuetzer")
    elif st.session_state["feedback"]:
        st.success("🎉 Danke für deine Rückmeldung!")
