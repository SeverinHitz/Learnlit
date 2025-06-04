import pytest
from utils.detective_utils import (
    get_base_path,
    load_images,
    parse_cvat_xml,
    load_lerntexte,
    convert_display_to_original_coords,
    draw_markers_on_images,
    get_scene_scaled,
)
from pathlib import Path
from PIL import Image
import geopandas as gpd
from shapely.geometry import Polygon


SCENES = ["Dorf"]
DISPLAY_WIDTH = [200, 400, 800, 1200, 1600]


def pytest_generate_tests(metafunc):
    if "scene_name" in metafunc.fixturenames:
        metafunc.parametrize("scene_name", SCENES)
    if "display_width" in metafunc.fixturenames:
        metafunc.parametrize("display_width", DISPLAY_WIDTH)


@pytest.fixture
def base_path():
    return get_base_path()


def test_get_base_path(base_path):
    assert isinstance(base_path, Path)
    assert base_path.exists()


def test_load_images(scene_name):
    img1, img2 = load_images(scene_name)
    assert isinstance(img1, Image.Image)
    assert isinstance(img2, Image.Image)
    assert img1.size == img2.size


def test_parse_cvat_xml(scene_name):
    gdf = parse_cvat_xml(scene_name)
    assert isinstance(gdf, gpd.GeoDataFrame)
    assert not gdf.empty
    assert "label" in gdf.columns
    assert "geometry" in gdf.columns
    assert all(isinstance(geom, Polygon) for geom in gdf.geometry)


def test_load_lerntexte(scene_name):
    lerntexte = load_lerntexte(scene_name)
    assert isinstance(lerntexte, dict)
    assert len(lerntexte) > 0
    for key, val in lerntexte.items():
        assert isinstance(key, str)
        assert isinstance(val, str)
        assert key.strip() != ""
        assert val.strip() != ""


def test_convert_display_to_original_coords(display_width):
    img = Image.new("RGB", (1600, 1200))
    x_disp, y_disp = 400, 300
    orig_x, orig_y = convert_display_to_original_coords(
        x_disp, y_disp, img, display_width
    )

    # Prüfen, ob die Umrechnung korrekt skaliert:
    expected_x = x_disp * (img.width / display_width)
    expected_y = y_disp * (img.width / display_width)
    assert orig_x == expected_x
    assert orig_y == expected_y

    # UND: zurückskalieren und prüfen, ob wir wieder beim Start sind:
    scale = img.width / display_width
    back_x = orig_x / scale
    back_y = orig_y / scale
    assert back_x == pytest.approx(x_disp)
    assert back_y == pytest.approx(y_disp)


def test_get_scene_scaled(scene_name, display_width):
    img_orig_s, img_klima_s, gdf_s, scale = get_scene_scaled(scene_name, display_width)
    assert isinstance(img_orig_s, Image.Image)
    assert isinstance(img_klima_s, Image.Image)
    assert isinstance(gdf_s, gpd.GeoDataFrame)
    assert isinstance(scale, float)
    assert img_orig_s.width == display_width
    assert img_orig_s.size == img_klima_s.size
    assert not gdf_s.empty
    for geom in gdf_s.geometry:
        assert isinstance(geom, Polygon)


def test_draw_markers_on_images(scene_name):
    img1, img2 = load_images(scene_name)
    pts = [(100, 100, True), (200, 200, False)]
    gdf = parse_cvat_xml(scene_name)
    gefunden = [gdf["label"].iloc[0]] if not gdf.empty else []
    img1_marked, img2_marked = draw_markers_on_images(img1, img2, pts, gdf, gefunden)
    assert isinstance(img1_marked, Image.Image)
    assert isinstance(img2_marked, Image.Image)
    assert img1_marked.size == img1.size
    assert img2_marked.size == img2.size
