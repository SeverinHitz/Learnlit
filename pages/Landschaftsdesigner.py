import streamlit as st
from utils.slider_utils import get_image_path, scan_slider_ranges
from utils.google_utils import save_slider_results_to_gsheet
from utils.utils import reset_session_state_on_page_change


st.set_page_config("Landschafts-Spiel", layout="wide")
scene_ranges = scan_slider_ranges()

reset_session_state_on_page_change("Landscaftsdesigner")

if "feedback" not in st.session_state:
    st.session_state["feedback"] = False

st.title("🌿 Gestalte deine Zukunftslandschaft")

slider_labels = {
    "S1": "🌳 Revitalisierungsgrad",
    "S2": "🏞️ Zugänglichkeit",
    "S3": "🏡 Bebauungsgrad",
    "S4": "🌱 Wasserabflussmenge",
}

with st.sidebar:
    scene = st.selectbox("Wähle ein Szenario", sorted(scene_ranges.keys()))
    slider_config = scene_ranges[scene]
    slider_values = []
    st.header("🔧 Auswahl")
    for label, (min_val, max_val) in slider_config.items():
        label = slider_labels.get(label, label)  # Fallback auf den Originalnamen
        if min_val == max_val == 0:
            st.caption(f"🔒 {label} ist in diesem Szenario nicht veränderbar.")
            slider_values.append(0)
        elif min_val == max_val:
            st.caption(f"ℹ️ {label} ist fest auf {min_val} gesetzt.")
            slider_values.append(min_val)
        else:
            val = st.slider(label, min_val, max_val, min_val)
            slider_values.append(val)

# Bildpfad ermitteln
image_path = get_image_path(scene.replace(" ", ""), *slider_values)

# Bild anzeigen
st.image(image_path, caption="Dein gewähltes Zukunftsbild", use_container_width=True)

# Präferenz absenden
if st.button("✅ Diese Variante gefällt mir am besten"):
    st.session_state["image_name"] = image_path.split("/")[-1]
    st.session_state["feedback"] = False  # Reset
    try:
        save_slider_results_to_gsheet(scene, slider_values)
        st.toast("✅ Auswahl gespeichert.")
    except Exception as e:
        st.warning(f"Fehler beim Speichern: {e}")
    st.rerun()

if st.session_state.get("image_name") and not st.session_state["feedback"]:
    from utils.utils import zeige_feedback_formular

    zeige_feedback_formular("Landschaftsdesigner")
elif st.session_state["feedback"]:
    st.success("🎉 Danke für deine Rückmeldung!")
