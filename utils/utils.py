import streamlit as st
from utils.time_utils import now_utc, fmt_utc
import pandas as pd
from pathlib import Path
import os


# ────────────────────────── Pfad-Utilities ──────────────────────────
def get_base_path(game: str) -> Path:
    """Basis­pfad zum *data/detective*-Ordner."""
    if "HOME" in os.environ and "streamlit" in os.environ["HOME"]:
        return Path("data/detective")
    return Path(__file__).parent.parent / "data" / game


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
            "timestamp": [fmt_utc(now_utc())],
            "bewertung": [bewertung],
            "gelernt": [gelernt],
            "kommentar": [kommentar],
        }

        feedback_df = pd.DataFrame(feedback_data)

        try:
            from utils.google_utils import save_feedback_to_gsheet

            save_feedback_to_gsheet(feedback_df, sheet_name)
            st.session_state.feedback = True
            st.toast("✅ Danke für dein Feedback!")
            st.rerun()
        except Exception as e:
            st.warning(f"⚠️ Leider hat das Abspeichern nicht geklappt: {e}")


def reset_session_state(exclude_keys: list[str] = []) -> None:
    """
    Löscht alle Keys im session_state außer denen, die explizit geschützt werden sollen.
    """
    keys_to_delete = [
        key
        for key in st.session_state.keys()
        if key not in exclude_keys and key != "last_page"
    ]
    for key in keys_to_delete:
        del st.session_state[key]


def reset_session_state_on_page_change(
    current_page_name: str, exclude_keys: list[str] = []
) -> None:
    """
    Löscht session_state beim ersten Aufruf pro Seite (Page-Name).
    """
    last_page = st.session_state.get("last_page")
    if last_page != current_page_name:
        reset_session_state(exclude_keys)
    st.session_state["last_page"] = current_page_name
