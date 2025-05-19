import streamlit as st
from shapely.geometry import Point
import time
import pandas as pd
from utils import (
    load_images,
    parse_cvat_xml,
    plot_images_with_differences,
    convert_display_to_original_coords,
)
from streamlit_image_coordinates import streamlit_image_coordinates
from streamlit_js_eval import streamlit_js_eval
from utils import load_lerntexte

# Setup der Streamlit-App
st.set_page_config(layout="wide")
st.title("🧩 Finde den Unterschied")
window_width = streamlit_js_eval(
    js_expressions="window.innerWidth",
    key="WIDTH",
    debounce=0,
)
if window_width is None:
    st.warning(
        "📏 Fensterbreite konnte noch nicht ermittelt werden – Standardwert wird verwendet."
    )
    window_width = 1600  # Fallback-Breite
image_width = int(window_width / 2 * 0.9)
st.markdown(f"📐 Automatisch gesetzte Bildbreite: `{image_width}` px")
# Timer Initialisiere Session-State bei erstem Laden
if "spiel_started" not in st.session_state:
    st.session_state["spiel_started"] = False
    st.session_state["start_time"] = None
    st.session_state["gefunden"] = []
    st.session_state["found_data"] = pd.DataFrame(
        columns=["label", "timestamp", "sekunden_seit_start"]
    )
    st.session_state["letzte_meldung"] = ""


# Lade Bilder und Unterschiede
scene = "Dorf"
img1, img2 = load_images(scene)
diff_gdf = parse_cvat_xml(scene)

# Lade Lerntexte
lerntexte = load_lerntexte(scene)
if "gefunden" not in st.session_state:
    st.session_state["gefunden"] = []


if not st.session_state["spiel_started"]:
    if st.button("▶️ Spiel starten"):
        st.session_state["spiel_started"] = True
        st.session_state["start_time"] = time.time()
        st.rerun()
    st.stop()


# Feste Anzeigebreite, damit Umrechnung funktioniert

key_original = f"original_{image_width}"
key_klima = f"klima_{image_width}"


# Zeige Bilder nebeneinander
col1, col2 = st.columns(2)

with col1:
    st.subheader("Original")
    click1 = streamlit_image_coordinates(
        img1,
        key=key_original,
        width=image_width,
    )

with col2:
    st.subheader("Klimawandel-Version")
    click2 = streamlit_image_coordinates(
        img2,
        key=key_klima,
        width=image_width,
    )

# Initialisiere Session-State für aktuelle Meldung
if "letzte_meldung" not in st.session_state:
    st.session_state["letzte_meldung"] = ""

# Zusammengefasste Klickverarbeitung (Bild 1 oder Bild 2)
x1 = y1 = x2 = y2 = None
aktueller_klick = None
quelle = ""

if click1:
    x_disp, y_disp = click1["x"], click1["y"]
    x1, y1 = convert_display_to_original_coords(x_disp, y_disp, img1, image_width)
    x, y = x1, y1
    aktueller_klick = Point(x1, y1)
    quelle = "Original"

elif click2:
    x_disp, y_disp = click2["x"], click2["y"]
    x2, y2 = convert_display_to_original_coords(x_disp, y_disp, img2, image_width)
    x, y = x2, y2
    aktueller_klick = Point(x2, y2)
    quelle = "Verändert"

# Prüfe Klick
if aktueller_klick:
    st.write(f"🖱️ Geklickt in **{quelle}**, Koordinaten: x={x:.2f}, y={y:.2f}")
    matches = diff_gdf[diff_gdf.contains(aktueller_klick)]

    if not matches.empty:
        label = matches.iloc[0]["label"]
        if label not in st.session_state["gefunden"]:
            st.session_state["gefunden"].append(label)

            zeitpunkt = time.time()
            sekunden = round(zeitpunkt - st.session_state["start_time"], 2)
            st.session_state["found_data"] = pd.concat(
                [
                    st.session_state["found_data"],
                    pd.DataFrame(
                        [
                            {
                                "label": label,
                                "timestamp": zeitpunkt,
                                "sekunden_seit_start": sekunden,
                            }
                        ]
                    ),
                ],
                ignore_index=True,
            )

        # Zeige Lerntext einmalig in grünem Kasten
        text = lerntexte.get(label, f"⚠️ Kein Lerntext für `{label}` gefunden.")
        st.session_state["letzte_meldung"] = text
    else:
        st.session_state["letzte_meldung"] = (
            "❌ Kein Unterschied an dieser Stelle gefunden."
        )

# Zeige aktuelle Meldung (immer nur die letzte)
if st.session_state["letzte_meldung"]:
    if st.session_state["letzte_meldung"].startswith("❌"):
        st.warning(st.session_state["letzte_meldung"])
    else:
        st.success(st.session_state["letzte_meldung"])

# Zeige alle bisherigen Lernergebnisse
if st.session_state["gefunden"]:
    total_diff = len(lerntexte)
    found_diff = len(st.session_state["gefunden"])

    st.markdown(f"## 📚 Gelerntes ({found_diff} von {total_diff})")
    for label in st.session_state["gefunden"]:
        if label in lerntexte:
            st.markdown(lerntexte[label])

with st.expander("⏱️ Fortschritt & Zeiten", expanded=False):
    st.write(
        "⏱️ Zeit seit Spielstart: ",
        round(time.time() - st.session_state["start_time"], 2),
        "Sekunden",
    )
    st.dataframe(st.session_state["found_data"])

if st.button("🔄 Spiel neustarten"):
    st.session_state["spiel_started"] = False
    st.session_state["start_time"] = None
    st.session_state["gefunden"] = []
    st.session_state["found_data"] = pd.DataFrame(
        columns=["label", "timestamp", "sekunden_seit_start"]
    )
    st.session_state["letzte_meldung"] = ""
    st.rerun()

# Überprüfen: zeige das Bild mit Bounding-Boxen zur Kontrolle
with st.expander("Unterschiede anzeigen", expanded=False):
    st.write(
        "Hier siehst du die Unterschiede, die in der CVAT-XML-Datei definiert sind."
    )
    st.write(
        "Die roten Umrandungen zeigen die Unterschiede an. Klicke auf die Bilder, um die Koordinaten zu sehen."
    )
    fig, ax = plot_images_with_differences(
        img1,
        img2,
        diff_gdf,
        x1 if click1 else None,
        y1 if click1 else None,
        x2 if click2 else None,
        y2 if click2 else None,
    )
    st.pyplot(fig)
