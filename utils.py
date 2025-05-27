import streamlit as st
from datetime import datetime
import pandas as pd


def zeige_feedback_formular(sheet_name) -> None:
    st.markdown("## 📝 Und, wie war's für dich?")

    with st.form("rueckmeldung_form", clear_on_submit=False):
        st.write("#### 😊 Wie gut hat dir das Spiel gefallen?")
        bewertung = st.feedback("faces", key="bewertung_form")

        st.write("#### 📖 Hast du dabei etwas Neues gelernt?")
        gelernt = st.feedback("thumbs", key="gelernt_form")

        st.write("#### 💬 Magst du uns noch etwas sagen?")
        kommentar = st.text_area(
            "💬 Magst du uns noch etwas sagen?",
            placeholder="Z. B. Was hat dir gefallen? Oder was könnten wir besser machen?",
            key="kommentar_form",
            label_visibility="collapsed",
        )

        abgeschickt = st.form_submit_button("✔️ Abschicken")

    if abgeschickt:
        feedback_data = {
            "timestamp": [datetime.now().strftime("%Y-%m-%d %H:%M:%S")],
            "bewertung": [bewertung],
            "gelernt": [gelernt],
            "kommentar": [kommentar],
        }

        feedback_df = pd.DataFrame(feedback_data)

        try:
            from google_utils import save_feedback_to_gsheet

            save_feedback_to_gsheet(feedback_df, sheet_name)
            st.session_state.feedback = True
            st.toast("✅ Danke für dein Feedback!")
            st.rerun()
        except Exception as e:
            st.warning(f"⚠️ Leider hat das Abspeichern nicht geklappt: {e}")
