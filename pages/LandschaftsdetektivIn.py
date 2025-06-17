"""Streamlit-App  ▸  Finde den Unterschied (Klimawandel)"""

from __future__ import annotations

import time

import pandas as pd
import streamlit as st
from shapely.geometry import Point
from streamlit_image_coordinates import streamlit_image_coordinates
from streamlit_js_eval import streamlit_js_eval
from utils.detective_utils import (
    get_base_path,
    draw_markers_on_images,
    load_lerntexte,
    plot_images_with_differences,
    get_scene_scaled,
)
from utils.utils import reset_session_state_on_page_change

# ───────────────────────── UI-Setup ─────────────────────────
st.set_page_config(layout="wide")
st.title("🕵️ Landschaftsdetektiv:in")
st.logo(get_base_path("detective") / "icon.webp", size="large")

reset_session_state_on_page_change("Landschaftsdetektiv")


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
        feedback=False,
        spielname="",
        alter=0,
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
    scene = st.selectbox("📸 Szene auswählen", ["Tal", "Dorf", "See"], index=0)

    # Szene-Wechsel erkennen und Session-State zurücksetzen
    if "last_scene" not in st.session_state:
        st.session_state["last_scene"] = scene
    elif st.session_state["last_scene"] != scene:
        init_state()  # Session-State zurücksetzen
        st.session_state["last_scene"] = scene  # Neue Szene merken
        st.rerun()

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

    # Debug - Mode
    # st.session_state.debug_mode = st.checkbox(
    #    "🛠️ Debug-Mode", value=st.session_state.debug_mode
    # )

# ───────────────────── Spiel-Start ─────────────────────────
if not st.session_state.spiel_started:
    st.subheader("👤 Spieler:in")
    spielname = st.text_input("Spitzname oder Spielname", max_chars=20)
    alter = st.number_input("Alter", min_value=5, max_value=100, step=1)

    if st.button("▶️ Spiel starten"):
        if not spielname:
            st.warning("Bitte gib einen Spielnamen ein.")
            st.stop()
        st.session_state["spiel_started"] = True
        st.session_state["start_time"] = time.time()
        st.session_state["spielname"] = spielname
        st.session_state["alter"] = alter
        st.rerun()
    st.stop()

# ───────────────────── Daten laden ──────────────────────────
img_orig_s, img_klima_s, gdf_diff_s, scale_factor = get_scene_scaled(scene, image_w)
lerntexte = load_lerntexte(scene)


# ───────────────────── Rückmeldung ─────────────────────────────
if len(st.session_state.gefunden) == len(lerntexte):
    if st.session_state.feedback:
        st.success("🎉 Danke für deine Rückmeldung!")
    else:
        from utils.utils import zeige_feedback_formular

        zeige_feedback_formular("Landschaftsdetektiv")


# ───────────────────── Bilder mit Markern ───────────────────
img1_show, img2_show = draw_markers_on_images(
    img_orig_s,
    img_klima_s,
    st.session_state.all_pts,
    gdf_diff_s,
    st.session_state.gefunden,
    radius=20 * scale_factor,
    lwd_width=int(2 * scale_factor),
)

col1, col2 = st.columns(2)
with col1:
    st.markdown("### 2025")
    click1 = streamlit_image_coordinates(
        img1_show, key=f"orig_{image_w}", width=image_w
    )
with col2:
    st.markdown("### 2050")
    click2 = streamlit_image_coordinates(
        img2_show, key=f"klima_{image_w}", width=image_w
    )


# ───────────────────── Klick-Handler ────────────────────────
def handle_click(
    click: dict | None,
    img,
    key_last: str,
    label_side: str,
) -> None | bool:
    if not click:
        return

    # ► Display-Koordinate → relative Koordinate (0-1)
    rel_x = click["x"] / image_w
    rel_y = click["y"] / (image_w * img.height / img.width)  # weil Höhe proportional

    # ► Doppelklick‐Filter
    if (rel_x, rel_y) == st.session_state.get(key_last):
        return

    # ► Für Treffer-Prüfung
    point = Point(rel_x, rel_y)
    hit = not gdf_diff_s[gdf_diff_s.contains(point)].empty

    # ► Klick speichern (nur rel_x/rel_y + hit)
    st.session_state.all_pts.append({"rel_x": rel_x, "rel_y": rel_y, "hit": hit})
    st.session_state[key_last] = (rel_x, rel_y)  # letztes Click-Memo

    if key_last == "last_click_original":
        st.session_state.last_pt_orig = (rel_x, rel_y)
    else:
        st.session_state.last_pt_klima = (rel_x, rel_y)

    # ► Meldungen & Lerntexte
    if hit:
        label = gdf_diff_s[gdf_diff_s.contains(point)].iloc[0]["label"]
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

    return True  # signalisiert dem Aufrufer, dass ein Rerun nötig ist


rerun1 = handle_click(click1, img_orig_s, "last_click_original", "Originalbild")
rerun2 = handle_click(click2, img_klima_s, "last_click_klima", "Klimabild")

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

    # Speichern der Ergebnisse in Google Sheets
    try:
        from utils.google_utils import save_compare_results_to_gsheet

        save_compare_results_to_gsheet(
            st.session_state.found_data,
            scene,
            spielname=st.session_state.get("spielname"),
            alter=st.session_state.get("alter"),
            all_pts=st.session_state.get("all_pts"),
        )
        st.toast("✅ Ergebnisse gespeichert.")
    except Exception as e:
        st.warning(f"⚠️ Fehler beim Speichern in Google Sheets: {e}")


# ───────────────────── Neustart ────────────────────────────
if st.button("🔄 Spiel neustarten"):
    init_state()
    st.rerun()

# ───────────────────── Debug-Ansicht ───────────────────────
if st.session_state.debug_mode:
    with st.expander("🛠️ Debug-Ansicht"):
        fig, ax = plot_images_with_differences(
            img_orig_s,
            img_klima_s,
            gdf_diff_s,
            st.session_state.last_pt_orig,
            st.session_state.last_pt_klima,
        )
        st.pyplot(fig)
