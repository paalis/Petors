# Petors — nettsideforslag (v5)

## Filer
- `index.html` — Forside (enkel, kort)
- `lyd-og-lys.html` — Underside: Petors AS
- `eiendom.html` — Underside: Petors Estate
- `kontakt.html` — Underside: Kontakt
- `styles.css` — Felles stilark
- `logo.jpg` — Originallogoen din (brukt i navigasjonen)
- `mark.svg` — Selve sirkelmerket alene (brukes i footer, klar for favicon)

## Logo
Originallogoen er nå brukt direkte i nav-baren på alle fire sider.
I footer brukes en forenklet SVG-versjon av selve sirkelmerket — det skalerer skarpt og kan farges via CSS.

Hvis du senere får en ren SVG-versjon av logoen, bytt ut `logo.jpg` med `logo.svg`
og endre `<img src="logo.jpg" ...>` til `<img src="logo.svg" ...>` i alle fire HTML-filer.

## Design
- Farger: hvit, stålgrå (#eef1f4) og logoens blå (#4a6c9b) som eneste aksent. Alle ligger som CSS-variabler øverst i styles.css.
- Skrift: Jost (titler, meny – geometrisk som logoen) og Source Serif 4 (brødtekst).
- Merket (ring + prikk) er det eneste grafiske elementet: forstørret med ringer på forsiden, og som stedsmarkør i porteføljen.
- Ingen JavaScript. Ringanimasjonen på forsiden kjører én gang og slås av ved «redusert bevegelse».

## Åpne lokalt
Dobbeltklikk index.html — sidene linker seg imellom.
