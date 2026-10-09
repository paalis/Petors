# petors-kurs

Liten Vercel-funksjon som henter kursen til NORBIT ASA for investeringssiden.

- Endepunkt: `/api/norbit`
- Kilde: Yahoo Finance (NORBT.OL), forsinket ca. 15 minutter
- Svaret caches i 60 sekunder hos Vercel

Deploy: legg `api/norbit.js` i et Vercel-prosjekt (uten rammeverk).
