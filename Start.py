# Start.py

import streamlit as st
import os

st.set_page_config(page_title="Streamlit App", layout="wide")

# Willkommenstext oder Dashboard hier
st.title("Willkommen zur Streamlit App")

# Info-Text oder Einführung
st.markdown("""
## 📚 Übersicht

Diese Anwendung enthält verschiedene Seiten:

- **Landschaftsdetektiv**  
- **Landschaftsdesigner**  
- **Auswertung**

Bitte verwende die Sidebar links, um eine Seite auszuwählen.
""")

# Optional: Pfad zu Pages überprüfen
pages_dir = "pages"
if not os.path.exists(pages_dir):
    st.error(f"❌ Der Pages-Ordner '{pages_dir}' wurde nicht gefunden!")
else:
    st.sidebar.success("Seiten sind verfügbar. Bitte links auswählen.")
