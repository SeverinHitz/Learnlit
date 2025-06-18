"""utils.py – Lade-, Zeichen- und Hilfs­funktionen fürs Spiel."""

from __future__ import annotations

import os
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Iterable


import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
from PIL import Image, ImageDraw
from shapely.geometry import Polygon
from shapely.geometry.base import BaseGeometry
import streamlit as st
from shapely.affinity import scale as shp_scale
from shapely.ops import transform
from utils.utils import get_base_path

PIXEL_BUFFER = 5.0  # Pixel-Puffer für Klick-Regionen


# ────────────────────────── Session-State init ─────────────────────
def init_state() -> None:
    st.session_state.update(
        spiel_started=False,
        feedback=False,
        spielname="",
        alter=None,
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


# ────────────────────────── Scene Session State Change ──────────────
def reset_session_state_on_scene_change(scene: str) -> None:
    st.session_state.update(
        spiel_started=False,
        feedback=False,
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


# ────────────────────────── Bild-I/O ────────────────────────────────
@st.cache_resource
def load_images(scene: str) -> tuple[Image.Image, Image.Image]:
    bp = get_base_path("detective")
    return (
        Image.open(bp / f"{scene}_unverändert.png"),
        Image.open(bp / f"{scene}_verändert.png"),
    )


# ────────────────────────── Schwierigkeitstufe ──────────────────────
def show_schwierigkeitstufe(scene: str) -> int:
    dict_schwierigkeit = {
        "See": "leicht",
        "Tal": "mittel",
        "Dorf": "sehr schwer",
    }
    schwierigkkeit = dict_schwierigkeit.get(scene, None)
    if schwierigkkeit is None:
        return
    if schwierigkkeit == "leicht":
        st.success("Schwierigkeit: **leicht**", icon="✨")
    elif schwierigkkeit == "mittel":
        st.info("Schwierigkeit: **mittel**", icon="⚠️")
    elif schwierigkkeit == "sehr schwer":
        st.warning("Schwierigkeit: **sehr schwer**", icon="💪")


# ────────────────────────── Bild-Skalierung ─────────────────────────
@st.cache_data(show_spinner=False)
def get_scene_scaled(scene: str, display_w: int):
    img_orig, img_klima = load_images(scene)

    s = display_w / img_orig.width
    new_h = int(img_orig.height * s)
    size = (display_w, new_h)

    img_orig_s = img_orig.resize(size, Image.Resampling.LANCZOS)
    img_klima_s = img_klima.resize(size, Image.Resampling.LANCZOS)

    gdf_rel = parse_cvat_xml(scene)  # bereits 0-1

    return img_orig_s, img_klima_s, gdf_rel, s


# ────────────────────────── Marker-Overlay ──────────────────────────
def draw_markers_on_images(
    img1: Image.Image,
    img2: Image.Image,
    pts: list,
    gdf_rel: gpd.GeoDataFrame = None,
    gefunden: list = None,
    radius: int = 18,
    lwd_width: int = 2,
) -> tuple:
    """
    Zeichnet Markierungen (Klickpunkte und optionale Polygone) auf zwei Bilder.
    Args:
        img1 (PIL.Image.Image): Erstes Bild, auf das Markierungen gezeichnet werden.
        img2 (PIL.Image.Image): Zweites Bild, auf das Markierungen gezeichnet werden.
        pts (list): Liste von Dictionaries mit Punktkoordinaten (rel_x, rel_y) und Trefferstatus ("hit").
        gdf_rel (geopandas.GeoDataFrame, optional): GeoDataFrame mit Polygonen im relativen Koordinatensystem.
        gefunden (list, optional): Liste von Polygon-Labels, die als "gefunden" markiert und hervorgehoben werden sollen.
        radius (int, optional): Radius der Markierungskreise. Standard: 18.
        lwd_width (int, optional): Linienbreite der Markierungen. Standard: 2.
    Returns:
        tuple: Zwei PIL.Image.Image-Objekte mit den eingezeichneten Markierungen.
    """
    col_hit, col_miss = (0, 200, 0), (230, 0, 0)
    poly_fill, poly_outline = (0, 255, 0, 80), (0, 180, 0, 180)

    def _scale(x_rel, y_rel, img):
        return x_rel * img.width, y_rel * img.height

    def _with_overlay(base: Image.Image) -> Image.Image:
        base_rgba = base.convert("RGBA")
        draw = ImageDraw.Draw(base_rgba, "RGBA")

        # 1) Klickmarker
        for pt in pts:
            x, y = _scale(pt["rel_x"], pt["rel_y"], base)
            c = col_hit if pt["hit"] else col_miss
            draw.ellipse(
                (x - radius, y - radius, x + radius, y + radius),
                fill=c + (140,),
                outline=c + (255,),
                width=lwd_width,
            )

        # 2) Polygone (gefunden)
        if gdf_rel is not None and gefunden:
            overlay = Image.new("RGBA", base_rgba.size, (0, 0, 0, 0))
            draw_ov = ImageDraw.Draw(overlay, "RGBA")
            for poly_rel in gdf_rel[gdf_rel["label"].isin(gefunden)].geometry:
                exterior = [_scale(x, y, base) for x, y in poly_rel.exterior.coords]
                draw_ov.polygon(exterior, fill=poly_fill, outline=poly_outline)
            base_rgba = Image.alpha_composite(base_rgba, overlay)

        return base_rgba

    return _with_overlay(img1), _with_overlay(img2)


# ────────────────────────── CVAT-Polygone ───────────────────────────
@st.cache_resource
def parse_cvat_xml(scene: str) -> gpd.GeoDataFrame:
    """
    Gibt GeoDataFrame in RELATIVEN Koordinaten (0-1) zurück.
    """
    xml_path = get_base_path("detective") / f"{scene}.xml"
    root = ET.parse(xml_path).getroot()

    geoms, labels = [], []
    for img in root.iter("image"):
        if img.get("name") != f"{scene}_verändert.png":
            continue

        w, h = float(img.get("width")), float(img.get("height"))

        # Helper, um x/w und y/h anzuwenden
        scale_to_unit = lambda x, y, z=None: (x / w, y / h)

        for p in img.iter("polygon"):
            pts = [
                tuple(map(float, pt.split(","))) for pt in p.get("points").split(";")
            ]
            geom_px = Polygon(pts)
            geom_rel = transform(scale_to_unit, geom_px)  # → 0-1-Polygon
            geoms.append(geom_rel)
            labels.append(p.get("label"))

    return gpd.GeoDataFrame({"label": labels, "geometry": geoms})


# ────────────────────────── Lerntexte ───────────────────────────────
@st.cache_resource
def load_lerntexte(scene: str) -> dict[str, str]:
    f = (
        (get_base_path("detective") / f"{scene}_lerntexte.md")
        .read_text(encoding="utf-8")
        .splitlines()
    )
    out, key, buf = {}, None, []
    for ln in f:
        if ln.startswith("# "):
            if key:
                out[key] = "\n".join(buf).strip()
            key, buf = ln[2:].strip(), []
        else:
            buf.append(ln)
    if key:
        out[key] = "\n".join(buf).strip()
    return out


# ────────────────────────── Debug-Overlay ───────────────────────────
def scale_geometry_to_pixels(
    geom: BaseGeometry, width: int, height: int
) -> BaseGeometry:
    from shapely.affinity import scale

    return scale(geom, xfact=width, yfact=height, origin=(0, 0))


def plot_images_with_differences(
    img1: Image.Image,
    img2: Image.Image,
    gdf: gpd.GeoDataFrame,
    c1: tuple[float, float] | None = None,
    c2: tuple[float, float] | None = None,
):
    fig, ax = plt.subplots(figsize=(10, 8))
    ax.imshow(img1)
    ax.imshow(img2, alpha=0.5)

    # Geometrien (relativ) in Pixel umrechnen
    gdf_abs = gdf.copy()
    gdf_abs["geometry"] = gdf_abs["geometry"].apply(
        lambda geom: scale_geometry_to_pixels(geom, img1.width, img1.height)
    )

    gdf_abs.boundary.plot(ax=ax, color="red", linewidth=2)

    if c1:
        x1 = c1[0] * img1.width
        y1 = c1[1] * img1.height
        ax.plot(x1, y1, "bo", ms=10)
    if c2:
        x2 = c2[0] * img2.width
        y2 = c2[1] * img2.height
        ax.plot(x2, y2, "ro", ms=10)

    ax.axis("off")
    return fig, ax


# ────────────────────────── Koordinaten-Helper ──────────────────────
def convert_display_to_original_coords(
    x_disp: float, y_disp: float, img: Image.Image, display_w: int
) -> tuple[float, float]:
    """Skaliert Klick-Koord. aus Anzeige → Original­pixel."""
    scale = img.width / display_w
    return x_disp * scale, y_disp * scale
