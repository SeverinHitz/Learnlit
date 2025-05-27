from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# ────────────── Einstellungen ──────────────
scene_names = ["Test1", "Test2", "Test3"]
slider_ranges = {
    "Test1": (3, 2, 0, 2),  # S3 = 0 → wird in Test1 nicht verwendet
    "Test2": (1, 3, 2, 0),  # S4 = 0 → wird in Test2 nicht verwendet
    "Test3": (0, 0, 3, 0),  # kein Slider wird verwendet
}
image_size = (800, 600)
output_dir = Path("data/slider")


# ────────────── Dummy-Bild erstellen ──────────────
def create_dummy_image(path: Path, text: str):
    img = Image.new("RGB", image_size, color=(200, 230, 250))
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default(60)

    lines = text.split("\n")
    line_height = 60
    total_height = line_height * len(lines)

    y = (image_size[1] - total_height) // 2
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        w = bbox[2] - bbox[0]
        draw.text(((image_size[0] - w) / 2, y), line, fill="black", font=font)
        y += line_height

    img.save(path)


# ────────────── Dummy-Bilder erzeugen ──────────────
output_dir.mkdir(parents=True, exist_ok=True)

for scene in scene_names:
    max_s1, max_s2, max_s3, max_s4 = slider_ranges[scene]

    s1_values = [0] if max_s1 == 0 else range(1, max_s1 + 1)
    s2_values = [0] if max_s2 == 0 else range(1, max_s2 + 1)
    s3_values = [0] if max_s3 == 0 else range(1, max_s3 + 1)
    s4_values = [0] if max_s4 == 0 else range(1, max_s4 + 1)

    for s1 in s1_values:
        for s2 in s2_values:
            for s3 in s3_values:
                for s4 in s4_values:
                    filename = f"{scene}_{s1}_{s2}_{s3}_{s4}.jpg"
                    filepath = output_dir / filename
                    label = f"{scene}\nS1={s1} S2={s2} S3={s3} S4={s4}"
                    create_dummy_image(filepath, label)
                    print(f"✔ {filename}")
