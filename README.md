# 🧩 Finde den Unterschied – Klimawandel erkennen

Ein interaktives Lernspiel für Kinder (3.–6. Klasse)
Entdecke, wie sich unsere Landschaft durch den Klimawandel verändert – und lerne dabei auf spielerische Weise wichtige Zusammenhänge kennen.

---

## 🎯 Ziel des Spiels

Zwei nahezu identische Bilder – doch in einem haben sich durch den Klimawandel kleine Dinge verändert. Finde die Unterschiede!

- 🔍 Klicke auf Bildbereiche mit Veränderungen
- 🧠 Lerne durch kindgerechte Erklärtexte
- ⏱️ Messe deine Reaktionszeit
- 📊 Verfolge deinen Lernfortschritt

---

## 🖼️ Beispielhafte Unterschiede

- 🌞 Solarpark auf dem Hügel
- 🌬️ Windrad im Hintergrund
- 🌳 Tote Bäume durch Borkenkäfer
- 🌡️ Vertrocknete Wiese
- 🏘️ Neubauten mit Gründach
- u.v.m.

---

## 🚀 Demo starten

### 1. Installation

pip install -r requirements.txt

### 2. Projektstruktur

📂 dein-projekt/
├── app.py                      # Hauptanwendung
├── utils.py                    # Hilfsfunktionen
├── requirements.txt            # Abhängigkeiten
├── data/
│   ├── Dorf_unverändert.png    # Ursprungsbild
│   ├── Dorf_verändert.png      # Bild mit Klimawandel-Effekten
│   ├── Dorf.xml                # Unterschiede als CVAT-Annotation
│   └── Dorf_lerntexte.md       # Kindgerechte Erklärtexte

### 3. Starten der App

streamlit run app.py

---

## 📦 Abhängigkeiten

- streamlit – Web-App Framework
- streamlit-image-coordinates – Klickpositionen aus Bildern auslesen
- streamlit-js-eval – Fensterbreite automatisch erkennen
- geopandas, shapely – Geo-Logik zur Trefferprüfung
- pandas – Fortschritts-Tracking
- matplotlib, Pillow – Bildanzeige & Overlays

👉 Alle Pakete findest du in der requirements.txt

---

## 📚 Lernziele für Kinder

Dieses Spiel wurde entwickelt für den Einsatz im Unterricht oder zu Hause:

- 🌍 Verständnis für Auswirkungen des Klimawandels in der Umgebung
- 🧠 Training von Beobachtungsgabe & Konzentration
- 📖 Vermittlung von Wissen in einfacher Sprache
- ⏱️ Motivation durch Zeit-Tracking und Fortschritt

---

## 🧑‍💻 Mitmachen & Anpassen

- Eigene Szenen lassen sich durch neue Bilder + .xml + .md-Datei leicht hinzufügen.
- Einfach neue Dateien unter data/ ablegen und Szene im Code anpassen (scene = "...").

---

## 📝 Lizenz

Dieses Projekt kann frei für Bildungszwecke genutzt und angepasst werden.

---

Viel Spaß beim Erkennen und Verstehen! 🌱
