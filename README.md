# Petors — nettsideforslag (v4)

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

## Palett
Monokrom (offwhite + nesten-svart) med logoens egen blå (#4a6c9b) som eneste aksent.
Alle farger ligger som CSS-variabler øverst i styles.css.

## Åpne lokalt
Dobbeltklikk index.html — sidene linker seg imellom.
