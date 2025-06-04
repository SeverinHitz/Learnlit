import pytest
import pandas as pd
from pathlib import Path
from utils.slider_utils import get_image_path, scan_slider_ranges, create_feedback_df


SCENES = ["Test1", "Test2", "Test3"]


def pytest_generate_tests(metafunc):
    if "scene_name" in metafunc.fixturenames:
        metafunc.parametrize("scene_name", SCENES)


def test_get_image_path(scene_name):
    path = Path(get_image_path(scene_name, 1, 2, 3, 4))
    assert path.name == f"{scene_name}_1_2_3_4.jpg"
    assert "data" in path.parts and "slider" in path.parts


def test_create_feedback_df(scene_name):
    df = create_feedback_df(5, "Great!", scene_name, f"{scene_name}_1_2_3_4.jpg")
    assert isinstance(df, pd.DataFrame)
    assert df.iloc[0]["scene"] == scene_name
    assert df.iloc[0]["image"] == f"{scene_name}_1_2_3_4.jpg"
    assert df.iloc[0]["rating"] == 5
    assert df.iloc[0]["comment"] == "Great!"


def test_scan_slider_ranges(scene_name, tmp_path):
    test_dir = tmp_path / "data" / "slider"
    test_dir.mkdir(parents=True)

    # Dummy-Dateien erstellen
    files = [
        test_dir / f"{scene_name}_1_2_0_4.jpg",
        test_dir / f"{scene_name}_3_2_0_4.jpg",
        test_dir / f"{scene_name}_1_0_0_0.jpg",
    ]
    for file in files:
        file.touch()

    result = scan_slider_ranges(str(test_dir))

    assert scene_name in result
    slider_ranges = result[scene_name]

    # S1: 1, 3, 1 → min=1, max=3
    assert slider_ranges["S1"] == (1, 3)
    # S2: 2, 2, 0 → min=0, max=2
    assert slider_ranges["S2"] == (0, 2)
    # S3: 0, 0, 0 → nur 0 → (0,0)
    assert slider_ranges["S3"] == (0, 0)
    # S4: 4, 4, 0 → min=0, max=4
    assert slider_ranges["S4"] == (0, 4)
