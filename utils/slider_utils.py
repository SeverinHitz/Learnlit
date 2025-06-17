import os
from pathlib import Path
from collections import defaultdict
import re
import pandas as pd
from datetime import datetime
import streamlit as st


def get_image_path(
    scene: str, s1: int, s4: int, image_dir: str = "data/slider"
) -> tuple[str, float]:
    pattern = re.compile(rf"^{scene}_{s1}_{s4}_(\d\.\d+)\.(jpg|png)$")
    image_dir = Path(image_dir)
    for file in image_dir.glob(f"{scene}_{s1}_{s4}_*.jpg"):
        match = pattern.match(file.name)
        if match:
            kosten = float(match.group(1))
            return str(file), kosten
    for file in image_dir.glob(f"{scene}_{s1}_{s4}_*.png"):
        match = pattern.match(file.name)
        if match:
            kosten = float(match.group(1))
            return str(file), kosten
    raise FileNotFoundError(
        f"Kein Bild gefunden für Szene {scene}_{s1}_{s4}_*.jpg/png im Verzeichnis {image_dir}"
    )


def scan_slider_ranges(
    image_dir: str = "data/slider",
) -> dict[str, dict[str, tuple[int, int]]]:
    """
    Scannt alle Bilder und ermittelt Slider-Ranges für S1 & S4 pro Szene.
    Erwartetes Format: Szene_S1_S4_Kosten.jpg
    """
    pattern = re.compile(
        r"^(?P<scene>.+?)_(?P<s1>\d+)_(?P<s4>\d+)_\d+\.\d+\.(jpg|png)$"
    )
    image_dir = Path(image_dir)
    values_by_scene = defaultdict(lambda: {"S1": set(), "S4": set()})

    for file in list(image_dir.glob("*.jpg")) + list(image_dir.glob("*.png")):
        match = pattern.match(file.name)
        if not match:
            continue
        scene = match.group("scene")
        s1 = int(match.group("s1"))
        s4 = int(match.group("s4"))
        values_by_scene[scene]["S1"].add(s1)
        values_by_scene[scene]["S4"].add(s4)

    ranges = {}
    for scene, val_dict in values_by_scene.items():
        ranges[scene] = {}
        for k, vals in val_dict.items():
            if vals == {0}:
                ranges[scene][k] = (0, 0)
            else:
                ranges[scene][k] = (min(vals), max(vals))

    return ranges


def map_to_emoji_level(value: float, steps: int = 5) -> int:
    """Mapped einen Normalwert [0, 1] auf diskrete Stufen (1–5)"""
    return max(1, min(steps, round(value * steps)))


@st.cache_resource
def load_narrative_texts() -> dict[str, str]:
    from utils.utils import get_base_path

    f = (
        (get_base_path("slider") / "narrative_landschaft.md")
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
