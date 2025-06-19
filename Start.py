# Start.py

import streamlit as st
import os
from pathlib import Path

st.set_page_config(page_title="Start", layout="wide")

st.markdown(
    """
    ### Willkommen zu den Spielen der WKT Ebnat-Kappel!
    """
)
st.info("""
    Die Spiele finden sich in der linken Seitenleiste. Bitte wähle ein Spiel aus, um zu starten.
        """)
st.markdown("---")
st.markdown("### 📚 Informationen zu den Spielen")

# Info-Text oder Einführung
readme_path = Path(__file__).parent / "README.md"
if readme_path.exists():
    readme_content = readme_path.read_text(encoding="utf-8")
    st.markdown(readme_content)
else:
    st.warning("README.md nicht gefunden.")

# Optional: Pfad zu Pages überprüfen
pages_dir = "pages"
if not os.path.exists(pages_dir):
    st.error(f"❌ Der Pages-Ordner '{pages_dir}' wurde nicht gefunden!")
else:
    st.sidebar.success("Spiele sind verfügbar. Bitte links auswählen.")
