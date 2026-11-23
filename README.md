# Petors — nettside

## Filer
- `index.html` — Forside
- `lyd-og-lys.html` — Lyd og lys
- `investeringer.html` — Investeringer (NORBIT, kriterier, Petors Estate)
- `kontakt.html` — Kontakt
- `eiendom.html` — Videresender til `investeringer.html#eiendom`
- `404.html` — Feilside (GitHub Pages bruker den automatisk)
- `styles.css` — Felles stilark
- `fonts/` — Jost og Source Serif 4, med lisens (SIL Open Font License)
- `img/` — Bilder i WebP, og `og.jpg` (delingsbilde, 1200 × 630)
- `logo.webp` — Logoen
- `mark.svg` — Sirkelmerket alene (favicon)
- `robots.txt`, `sitemap.xml` — For søkemotorer
- `kurs-api/` — Kildekoden til kurstjenesten for NORBIT (Vercel)

## Nettadresse
Delingsmetadata (Open Graph), `canonical`, strukturerte data, `robots.txt` og `sitemap.xml`
peker på `https://paalis.github.io/Petors/`. Flyttes siden til et eget domene (f.eks. petors.no),
bytt ut den adressen i alle fire HTML-filer, `robots.txt` og `sitemap.xml`.
`robots.txt` virker først når siden ligger på roten av et domene.

## Oppdatere NORBIT-tallene
Antall aksjer, eierandel og dato står ett sted i `investeringer.html`, mellom kommentarene
`NORBIT-TALL: OPPDATER HER` og `/NORBIT-TALL`. Hent tallene fra siste meldepliktige handel
fra NORBIT ASA (newsweb.oslobors.no) og oppdater alle tre: aksjer, prosent og «Per …»-datoen.

## Aksjekurs (NORBIT)
Investeringssiden henter kursen til NORBIT ASA fra `https://petors-kurs.vercel.app/api/norbit`
(Vercel-prosjektet «petors-kurs»). Kursen oppdateres hvert minutt mens siden er åpen.
Svarer ikke tjenesten, skjules kursen.

## Logo
Logoen er `logo.webp` (400 px bred). Finnes logoen som SVG, legg den inn som `logo.svg`
og bytt `logo.webp` i alle HTML-filene.

## Bilder
Bildene er WebP, maks 1000 px brede, med `width` og `height` i HTML så siden ikke hopper
mens den lastes. Nye bilder bør behandles på samme måte.

## Design
- Farger: hvit, stålgrå (#eef1f4) og logoens blå (#4a6c9b) som eneste aksent. Alle ligger som CSS-variabler øverst i `styles.css`.
- Skrift: Jost (titler, meny) og Source Serif 4 (brødtekst), lastet fra `fonts/`.
- Merket (ring + prikk) er det gjennomgående grafiske elementet.
- Forsiden har en kort intro som spilles én gang per besøk, og som slås av ved «redusert bevegelse».

## Endre stilarket
Når `styles.css` endres, øk tallet i `styles.css?v=…` i alle HTML-filene, så besøkende ikke får
gammel CSS fra nettleserens hurtigbuffer.
