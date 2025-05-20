"""Streamlit-App  ▸  Finde den Unterschied (Klimawandel)"""

from __future__ import annotations

import time
from pathlib import Path

import pandas as pd
import streamlit as st
from shapely.geometry import Point
from streamlit_image_coordinates import streamlit_image_coordinates
from streamlit_js_eval import streamlit_js_eval
from utils import (
    get_base_path,
    convert_display_to_original_coords,
    draw_markers_on_images,
    load_images,
    load_lerntexte,
    parse_cvat_xml,
    plot_images_with_differences,
)

# ───────────────────────── UI-Setup ─────────────────────────
st.set_page_config(layout="wide")
st.title("🕵️ Landschaftsdetektiv:in")
st.logo(get_base_path() / "icon.png", size="large")


win_w = streamlit_js_eval(
    js_expressions="window.innerWidth",
    key="WIDTH",
    debounce=0,
)
if win_w is None:
    win_w = 1200
image_auto_w: int = int(win_w / 2)


# ───────────────────── Session-State init ───────────────────
def init_state() -> None:
    st.session_state.update(
        spiel_started=False,
        start_time=None,
        gefunden=[],
        all_pts=[],  # [(x, y, hit_bool), …]
        found_data=pd.DataFrame(columns=["label", "sekunden_seit_start"]),
        letzte_meldung="",
        last_click_original=(None, None),
        last_click_klima=(None, None),
        last_pt_orig=None,
        last_pt_klima=None,
        balloons_done=False,
        debug_mode=False,
    )


if "spiel_started" not in st.session_state:
    init_state()

# ────────────────────────── Sidebar ─────────────────────────
with st.sidebar:
    st.header("⚙️ Einstellungen")

    # Szenen-Auswahl
    scene = st.selectbox("📸 Szene auswählen", ["Dorf", "Wald", "Stadt"], index=0)

    # Bildbreite anpassen
    image_w = st.slider(
        "🖼️ Bildbreite (px)",
        min_value=100,
        max_value=800,
        value=image_auto_w,
        step=50,
    )

    # Zeitanzeige
    if st.session_state["spiel_started"] and st.session_state["start_time"]:
        elapsed = round(time.time() - st.session_state["start_time"], 1)
        st.markdown(f"⏱️ **Spielzeit:** {elapsed} Sekunden")
        st.markdown(f"✅ **Gefunden:** {len(st.session_state['gefunden'])}")

    # Debug-Mode
    st.session_state.debug_mode = st.checkbox(
        "🛠️ Debug-Mode", value=st.session_state.debug_mode
    )

    # Start-Button
    if not st.session_state.spiel_started:
        if st.button("▶️ Spiel starten"):
            st.session_state.spiel_started = True
            st.session_state.start_time = time.time()
            st.rerun()
        st.stop()

# ───────────────────── Daten laden ──────────────────────────
img_orig, img_klima = load_images(scene)
gdf_diff = parse_cvat_xml(scene)
lerntexte = load_lerntexte(scene)


# ───────────────────── Bilder mit Markern ───────────────────
img1_show, img2_show = draw_markers_on_images(
    img_orig,
    img_klima,
    st.session_state.all_pts,
    gdf_diff,
    st.session_state.gefunden,
    radius=20,
)

col1, col2 = st.columns(2)
with col1:
    click1 = streamlit_image_coordinates(
        img1_show, key=f"orig_{image_w}", width=image_w
    )
with col2:
    click2 = streamlit_image_coordinates(
        img2_show, key=f"klima_{image_w}", width=image_w
    )


# ───────────────────── Klick-Handler ────────────────────────
def handle_click(click: dict | None, img, key_last: str, label_side: str) -> None:
    if not click:
        return
    x_disp, y_disp = click["x"], click["y"]
    x_px, y_px = convert_display_to_original_coords(x_disp, y_disp, img, image_w)
    if (x_px, y_px) == st.session_state[key_last]:
        return  # kein neuer Klick

    # Treffer-Prüfung
    hit = not gdf_diff[gdf_diff.contains(Point(x_px, y_px))].empty
    st.session_state.all_pts.append((x_px, y_px, hit))
    st.session_state[key_last] = (x_px, y_px)
    if key_last == "last_click_original":
        st.session_state.last_pt_orig = (x_px, y_px)
    else:
        st.session_state.last_pt_klima = (x_px, y_px)

    if hit:
        label = gdf_diff[gdf_diff.contains(Point(x_px, y_px))].iloc[0]["label"]
        if label not in st.session_state.gefunden:
            st.session_state.gefunden.append(label)
            sec = round(time.time() - st.session_state.start_time, 2)
            st.session_state.found_data.loc[len(st.session_state.found_data)] = {
                "label": label,
                "sekunden_seit_start": sec,
            }
        st.session_state.letzte_meldung = lerntexte.get(
            label, "⚠️ Kein Lerntext vorhanden."
        )
    else:
        st.session_state.letzte_meldung = (
            f"❌ Kein Unterschied im {label_side} gefunden."
        )
    return True


rerun1 = handle_click(click1, img_orig, "last_click_original", "Originalbild")
rerun2 = handle_click(click2, img_klima, "last_click_klima", "Klimabild")

if rerun1 or rerun2:
    st.rerun()

# ───────────────────── Meldung & Lerntexte ─────────────────
if st.session_state.letzte_meldung.startswith("❌"):
    st.warning(st.session_state.letzte_meldung)
else:
    st.success(st.session_state.letzte_meldung)

if st.session_state.gefunden:
    st.markdown(f"## 📚 Gelerntes ({len(st.session_state.gefunden)}/{len(lerntexte)})")
    for lbl in st.session_state.gefunden:
        st.markdown(lerntexte[lbl])

# ───────────────────── Fortschritt / Zeiten ────────────────
with st.sidebar:
    st.write("Spielzeit:", round(time.time() - st.session_state.start_time, 2), "s")
    st.dataframe(st.session_state.found_data, hide_index=True)

# ───────────────────── Sieg-Animation ──────────────────────
if (
    len(st.session_state.gefunden) == len(lerntexte)
) and not st.session_state.balloons_done:
    st.balloons()
    st.session_state.balloons_done = True

# ───────────────────── Neustart ────────────────────────────
with st.sidebar:
    if st.button("🔄 Spiel neustarten"):
        init_state()
        st.rerun()

# ───────────────────── Debug-Ansicht ───────────────────────
if st.session_state.debug_mode:
    with st.expander("🛠️ Debug-Ansicht"):
        fig, ax = plot_images_with_differences(
            img_orig,
            img_klima,
            gdf_diff,
            st.session_state.last_pt_orig,
            st.session_state.last_pt_klima,
        )
        st.pyplot(fig)
