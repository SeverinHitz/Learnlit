import streamlit as st
from utils.slider_utils import (
    get_image_path,
    scan_slider_ranges,
    map_to_emoji_level,
    load_narrative_texts,
)
from utils.google_utils import save_slider_results_to_gsheet
from utils.utils import reset_session_state_on_page_change, get_base_path

st.set_page_config("Landschafts-Spiel", layout="wide")
scene_ranges = scan_slider_ranges()
narrative_texts = load_narrative_texts()


reset_session_state_on_page_change("Landschaftsdesigner")

if "feedback" not in st.session_state:
    st.session_state["feedback"] = False

st.title("🌿 Gestalte deine Zukunftslandschaft")
st.logo(get_base_path("slider") / "icon.png", size="large")

st.markdown("---")

if st.session_state.get("image_name") and not st.session_state["feedback"]:
    from utils.utils import zeige_feedback_formular

    zeige_feedback_formular("Landschaftsdesigner")
elif st.session_state["feedback"]:
    st.success("🎉 Danke für deine Rückmeldung!")

slider_labels = {
    "S1": "🌳 Renaturierungslevel",
    "S4": "🌱 Wasserabflusslevel",
}

with st.sidebar:
    scene = st.selectbox("Wähle ein Szenario", sorted(scene_ranges.keys()))
    slider_config = scene_ranges[scene]
    slider_values = []
    normalized_values = []
    st.header("🔧 Auswahl")

    for key in ["S1", "S4"]:
        min_val, max_val = slider_config[key]
        label = slider_labels.get(key, key)
        if min_val == max_val == 0:
            st.caption(f"🔒 {label} ist in diesem Szenario nicht veränderbar.")
            slider_values.append(0)
            normalized_values.append(0.0)
        elif min_val == max_val:
            st.caption(f"ℹ️ {label} ist fest auf {min_val} gesetzt.")
            slider_values.append(min_val)
            normalized_values.append(0.0)
        else:
            val = st.slider(label, min_val, max_val, min_val)
            slider_values.append(val)
            norm = (val - min_val) / (max_val - min_val)  # → 0–1
            normalized_values.append(norm)

# Bildpfad ermitteln
image_path, kosten = get_image_path(scene.replace(" ", ""), *slider_values)

col1_header, col2_header, col3_header = st.columns(3, gap="large")

with col1_header:
    # 🌳 Renaturierungsgrad
    level_rev = map_to_emoji_level(normalized_values[0])
    st.markdown(f"#### Renaturierungsgrad: {'🌳' * level_rev}")
    st.progress(normalized_values[0])

with col2_header:
    # 💧 Wasserabflussmenge
    level_water = map_to_emoji_level(normalized_values[1])
    st.markdown(f"#### Wasserabfluss: {'💧' * level_water}")
    st.progress(normalized_values[1])

with col3_header:
    # 💸 Schadenskosten
    level_kosten = map_to_emoji_level(kosten)
    st.markdown(f"#### Schadensausmass: {'💰' * level_kosten}")
    st.progress(kosten)

# Schlüssel für die Bildbenennung
rev_level = map_to_emoji_level(normalized_values[0], steps=3)
water_level = map_to_emoji_level(normalized_values[1], steps=2)
key = f"rev{rev_level}_wat{water_level}"

text = narrative_texts.get(key)
if text:
    if water_level == 1:
        st.success(text)
    elif rev_level == 3:
        st.success(text)
    elif rev_level == 2:
        st.warning(text)
    else:
        st.error(text)
else:
    st.info("ℹ️ Kein Narrativ verfügbar.")


st.markdown("---")

col1_body, col2_body = st.columns([4, 1])

with col1_body:
    # Bild anzeigen
    st.image(
        image_path, caption="Dein gewähltes Zukunftsbild", use_container_width=True
    )
with col2_body:
    # Präferenz absenden
    if st.button("✅ Diese Variante gefällt mir am besten"):
        st.session_state["image_name"] = image_path.split("/")[-1]
        st.session_state["feedback"] = False  # Reset
        try:
            save_slider_results_to_gsheet(scene, slider_values, kosten)
            st.toast("✅ Auswahl gespeichert.")
        except Exception as e:
            st.warning(f"Fehler beim Speichern: {e}")
            print(e)
        st.rerun()
