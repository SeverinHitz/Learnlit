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

PIXEL_BUFFER = 5.0  # Pixel-Puffer für Klick-Regionen


# ────────────────────────── Pfad-Utilities ──────────────────────────
def get_base_path() -> Path:
    """Basis­pfad zum *data/detective*-Ordner."""
    if "HOME" in os.environ and "streamlit" in os.environ["HOME"]:
        return Path("data/detective")
    return Path(__file__).parent.parent / "data" / "detective"


# ────────────────────────── Bild-I/O ────────────────────────────────
@st.cache_resource
def load_images(scene: str) -> tuple[Image.Image, Image.Image]:
    bp = get_base_path()
    return (
        Image.open(bp / f"{scene}_unverändert.png"),
        Image.open(bp / f"{scene}_verändert.png"),
    )


# ────────────────────────── Bild-Skalierung ─────────────────────────
@st.cache_data(show_spinner=False)
def get_scene_scaled(
    scene: str, display_w: int
) -> tuple[Image.Image, Image.Image, gpd.GeoDataFrame, float]:
    """
    Liefert:
        img_orig_s, img_klima_s – verkleinerte Bilder
        gdf_s                  – identisch verkleinertes GeoDataFrame
        s                      – Skalierungsfaktor (display_w / orig_w)
    """
    img_orig, img_klima = load_images(scene)
    # --- Skalfaktor bestimmen ---------------------------------------
    s = display_w / img_orig.width
    new_h = int(img_orig.height * s)
    size = (display_w, new_h)

    img_orig_s = img_orig.resize(size, Image.Resampling.LANCZOS)
    img_klima_s = img_klima.resize(size, Image.Resampling.LANCZOS)

    # XML nur einmal parsen und danach skalieren
    gdf = parse_cvat_xml(scene)
    gdf_s = gdf.copy()
    gdf_s["geometry"] = gdf_s["geometry"].apply(
        lambda geom: shp_scale(geom, xfact=s, yfact=s, origin=(0, 0))
    )
    return img_orig_s, img_klima_s, gdf_s, s


# ────────────────────────── Marker-Overlay ──────────────────────────
def draw_markers_on_images(
    img1: Image.Image,
    img2: Image.Image,
    pts: Iterable[tuple[float, float, bool]],
    gdf: gpd.GeoDataFrame | None = None,
    gefunden: list[str] | None = None,
    radius: int = 18,
    lwd_width: int = 2,
) -> tuple[Image.Image, Image.Image]:
    col_hit, col_miss = (0, 200, 0), (230, 0, 0)
    poly_fill = (0, 255, 0, 80)  # halb­transparent
    poly_outline = (0, 180, 0, 180)

    def _with_overlay(base: Image.Image) -> Image.Image:
        base_rgba = base.convert("RGBA")

        #   1) Marker direkt auf Basisbild
        draw_base = ImageDraw.Draw(base_rgba, "RGBA")
        for x, y, ok in pts:
            c = col_hit if ok else col_miss
            draw_base.ellipse(
                (x - radius, y - radius, x + radius, y + radius),
                fill=c + (140,),
                outline=c + (255,),
                width=lwd_width,
            )

        #   2) Polygone auf separate, leere Ebene zeichnen
        if gdf is not None and gefunden:
            overlay = Image.new("RGBA", base_rgba.size, (0, 0, 0, 0))
            draw_ov = ImageDraw.Draw(overlay, "RGBA")
            for poly in gdf[gdf["label"].isin(gefunden)].geometry:
                if isinstance(poly, Polygon):
                    draw_ov.polygon(
                        list(poly.exterior.coords), fill=poly_fill, outline=poly_outline
                    )
            #   3) Overlay mit Alpha über das Basisbild legen
            base_rgba = Image.alpha_composite(base_rgba, overlay)

        return base_rgba

    return _with_overlay(img1), _with_overlay(img2)


# ────────────────────────── CVAT-Polygone ───────────────────────────
@st.cache_resource
def parse_cvat_xml(scene: str, buffer_px: float = PIXEL_BUFFER) -> gpd.GeoDataFrame:
    """
    Lies CVAT-XML und gib GeoDataFrame zurück.
    Jedes Polygon wird optional um `buffer_px` Pixel vergrößert, damit
    die Treffer­erkennung leichter wird.
    """
    xml_path = get_base_path() / f"{scene}.xml"
    root = ET.parse(xml_path).getroot()

    geoms: list[BaseGeometry] = []
    labels: list[str] = []

    for img in root.iter("image"):
        if img.get("name") != f"{scene}_verändert.png":
            continue
        for p in img.iter("polygon"):
            pts = [
                tuple(map(float, pt.split(","))) for pt in p.get("points").split(";")
            ]
            geom = Polygon(pts)
            if buffer_px:  # kleinen Puffer auf Pixelbasis
                geom = geom.buffer(buffer_px)
            geoms.append(geom)
            labels.append(p.get("label"))

    return gpd.GeoDataFrame({"label": labels, "geometry": geoms})


# ────────────────────────── Lerntexte ───────────────────────────────
@st.cache_resource
def load_lerntexte(scene: str) -> dict[str, str]:
    f = (
        (get_base_path() / f"{scene}_lerntexte.md")
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
    gdf.boundary.plot(ax=ax, color="red", linewidth=2)
    if c1:
        ax.plot(*c1, "bo", ms=10)
    if c2:
        ax.plot(*c2, "ro", ms=10)
    ax.axis("off")
    return fig, ax


# ────────────────────────── Koordinaten-Helper ──────────────────────
def convert_display_to_original_coords(
    x_disp: float, y_disp: float, img: Image.Image, display_w: int
) -> tuple[float, float]:
    """Skaliert Klick-Koord. aus Anzeige → Original­pixel."""
    scale = img.width / display_w
    return x_disp * scale, y_disp * scale
