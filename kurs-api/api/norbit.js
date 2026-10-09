// Henter kursen til NORBIT ASA (NORBT.OL) og returnerer et lite JSON-svar til nettsiden.
// Gratis kursdata fra Oslo Børs er forsinket med ca. 15 minutter.
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
  try {
    const r = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/NORBT.OL?range=1d&interval=5m', {
      headers: { 'User-Agent': 'Mozilla/5.0 (petors-kurs)' },
    });
    if (!r.ok) throw new Error('upstream ' + r.status);
    const meta = (await r.json()).chart.result[0].meta;
    const price = meta.regularMarketPrice;
    const previousClose = meta.chartPreviousClose ?? meta.previousClose;
    res.status(200).json({
      symbol: 'NORBT',
      currency: meta.currency,
      price,
      previousClose,
      change: price - previousClose,
      changePercent: ((price - previousClose) / previousClose) * 100,
      time: meta.regularMarketTime * 1000,
    });
  } catch (e) {
    console.error(e);
    res.status(502).json({ error: 'Kursen er ikke tilgjengelig akkurat nå.' });
  }
};
