import streamlit as st

st.title("Landschaftsbeschützer:in Game")

st.write("Hier kannst du das Spiel direkt starten:")

if st.button("Spiel starten"):
    st.markdown(
        """
        <meta http-equiv="refresh" content="0; url='https://severinhitz.github.io/WKT-Ebnat-Kappel-Game/'" />
        """,
        unsafe_allow_html=True,
    )
