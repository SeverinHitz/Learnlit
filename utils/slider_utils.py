import os
from pathlib import Path
from collections import defaultdict
import re
import pandas as pd
from datetime import datetime


def get_image_path(
    scene: str, s1: int, s2: int, s3: int, s4: int, image_dir: str = "data/slider"
) -> str:
    base = f"{scene}_{s1}_{s2}_{s3}_{s4}"
    for ext in [".jpg", ".png"]:
        path = Path(image_dir) / f"{base}{ext}"
        if path.exists():
            return str(path)
    raise FileNotFoundError(
        f"Kein Bild gefunden für Szene {base} (.jpg oder .png) im Verzeichnis {image_dir}"
    )


def scan_slider_ranges(
    image_dir: str = "data/slider",
) -> dict[str, dict[str, tuple[int, int]]]:
    """
    Scannt alle Dummy-Bilder und ermittelt Slider-Ranges pro Szene.
    Slider, die in einer Szene nie ≠ 0 sind, gelten als "nicht verwendet".
    """
    pattern = re.compile(
        r"^(?P<scene>.+?)_(?P<s1>\d+)_(?P<s2>\d+)_(?P<s3>\d+)_(?P<s4>\d+)\.(jpg|png)$"
    )
    image_dir = Path(image_dir)
    values_by_scene = defaultdict(
        lambda: {"S1": set(), "S2": set(), "S3": set(), "S4": set()}
    )

    for file in list(image_dir.glob("*.jpg")) + list(image_dir.glob("*.png")):
        match = pattern.match(file.name)
        if not match:
            continue
        scene = match.group("scene")
        for i, key in enumerate(["S1", "S2", "S3", "S4"]):
            val = int(match.group(f"s{i + 1}"))
            values_by_scene[scene][key].add(val)

    ranges = {}
    for scene, val_dict in values_by_scene.items():
        ranges[scene] = {}
        for k, vals in val_dict.items():
            if vals == {0}:
                ranges[scene][k] = (0, 0)  # nicht verwendet
            else:
                ranges[scene][k] = (min(vals), max(vals))

    return ranges


def create_feedback_df(
    rating: int, comment: str, selected_scene: str, image_name: str
) -> pd.DataFrame:
    return pd.DataFrame(
        [
            {
                "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "scene": selected_scene,
                "image": image_name,
                "rating": rating,
                "comment": comment,
            }
        ]
    )
