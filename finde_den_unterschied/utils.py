from PIL import Image
import geopandas as gpd
import matplotlib.pyplot as plt
from shapely.geometry import Polygon
import xml.etree.ElementTree as ET
import os
from pathlib import Path


def get_base_path():
    # Wenn deployed, wird von Repo-Root aus gestartet
    if "HOME" in os.environ and "streamlit" in os.environ.get("HOME", ""):
        return Path("finde_den_unterschied/data")  # für Streamlit Cloud
    else:
        return Path(__file__).parent / "data"  # für lokalen Start aus Unterordner


def load_images(scene):
    base_path = get_base_path()
    path_1 = base_path / f"{scene}_unverändert.png"
    path_2 = base_path / f"{scene}_verändert.png"
    return Image.open(path_1), Image.open(path_2)


def parse_cvat_xml(scene):
    base_path = get_base_path()
    xml_path = base_path / f"{scene}.xml"
    image_name = f"{scene}_verändert.png"
    tree = ET.parse(xml_path)
    root = tree.getroot()

    polygons = []
    labels = []

    for image in root.findall("image"):
        if image.get("name") != image_name:
            continue  # Skip other images

        for poly in image.findall("polygon"):
            label = poly.get("label")
            points_str = poly.get("points")
            points = [tuple(map(float, p.split(","))) for p in points_str.split(";")]
            polygon = Polygon(points)

            polygons.append(polygon)
            labels.append(label)

    gdf = gpd.GeoDataFrame({"label": labels, "geometry": polygons})
    return gdf


def load_lerntexte(scene) -> dict:
    """Parst eine Markdown-Datei mit # Keys und zugehörigen Texten."""
    base_path = get_base_path()
    path = base_path / f"{scene}_lerntexte.md"
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    texte = {}
    key = None
    content = []

    for line in lines:
        if line.startswith("# "):
            if key:
                texte[key] = "".join(content).strip()
            key = line[2:].strip()
            content = []
        else:
            content.append(line)

    if key:
        texte[key] = "".join(content).strip()

    return texte


def plot_images_with_differences(
    img1, img2, gdf, click_x1=None, click_y1=None, click_x2=None, click_y2=None
):
    fig, ax = plt.subplots(figsize=(10, 8))
    ax.imshow(img1)
    ax.imshow(img2, alpha=0.5)

    gdf.boundary.plot(ax=ax, color="red", linewidth=2)

    if click_x1 is not None and click_y1 is not None:
        ax.plot(click_x1, click_y1, "bo", markersize=10)
    if click_x2 is not None and click_y2 is not None:
        ax.plot(click_x2, click_y2, "ro", markersize=10)

    ax.axis("off")
    return fig, ax


def convert_display_to_original_coords(
    display_x, display_y, original_image, display_width
):
    """
    Wandelt Koordinaten von der skalierten Anzeige (z. B. in Streamlit)
    zurück in originale Pixelkoordinaten des Bildes.
    """
    original_width, original_height = original_image.size
    scale = original_width / display_width
    return display_x * scale, display_y * scale
