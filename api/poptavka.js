/**
 * POST /api/poptavka – uloží poptávku z webu do Google Tabulky „Poptávky fin-set.cz“
 * a nechá poslat upozornění na info@fin-set.cz.
 *
 * Funkce data zkontroluje a předá Google Apps Scriptu (web app u tabulky, kód viz
 * zdroj/apps-script-poptavky.gs). Ten zapíše řádek do tabulky a pošle e-mail
 * (Odpovědět = klient). Klientovi se nic neposílá.
 *
 * Proměnné prostředí (Vercel → Settings → Environment Variables):
 *   POPTAVKA_TOKEN        tajný token – musí sedět s TOKEN v Apps Scriptu   (povinné)
 *   POPTAVKA_WEBHOOK_URL  adresa web appu (…/exec); výchozí níže           (volitelné)
 */
const WEBHOOK_URL = process.env.POPTAVKA_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbwd0uRgTjU9oRMVo1mVStTpf06V7l31BSrmgEYj7Q9It2r3O2Oq-wdy7AP9uuLbPU4brg/exec';
const TOKEN = process.env.POPTAVKA_TOKEN;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s()-]{9,20}$/;

const clean = (v, max) => String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/\s+/g, ' ');

function parseBody(req) {
  let b = req.body;
  if (typeof b === 'string') {
    try { b = JSON.parse(b); } catch { b = Object.fromEntries(new URLSearchParams(b)); }
  }
  return b && typeof b === 'object' ? b : {};
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }
  if (!TOKEN) {
    console.error('[poptavka] Chybí POPTAVKA_TOKEN – nastavte ho ve Vercelu.');
    return res.status(500).json({ ok: false, error: 'not_configured' });
  }

  const b = parseBody(req);

  // Honeypot „Nevyplňujte“ – bot dostane OK, nic se neuloží.
  if (clean(b.website, 200)) return res.status(200).json({ ok: true });

  const d = {
    name: oneLine(b.name, 120),
    email: oneLine(b.email, 200),
    phone: oneLine(b.phone, 30),
    type: oneLine(b.type, 120) || 'Neuvedeno',
    message: clean(b.message, 5000),
    page: oneLine(b.page || req.headers.referer || '', 300),
    gdpr: b.gdpr === true || b.gdpr === 'true' || b.gdpr === 'on',
  };

  const errors = {};
  if (d.name.length < 2) errors.name = 'Povinné pole';
  if (!EMAIL_RE.test(d.email)) errors.email = 'Zadejte platný e-mail';
  if (!PHONE_RE.test(d.phone)) errors.phone = 'Zadejte platný telefon';
  if (!d.gdpr) errors.gdpr = 'Chybí souhlas se zpracováním údajů';
  if (Object.keys(errors).length) return res.status(400).json({ ok: false, error: 'validation', fields: errors });

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    // Apps Script odpoví přesměrováním na výsledek – fetch ho následuje sám.
    const r = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: TOKEN, name: d.name, email: d.email, phone: d.phone,
        type: d.type, message: d.message, page: d.page,
      }),
      redirect: 'follow',
      signal: ctrl.signal,
    });
    const txt = await r.text();
    let j = {};
    try { j = JSON.parse(txt); } catch { /* např. HTML chybová stránka Googlu */ }
    if (!r.ok || !j.ok) {
      console.error('[poptavka] Uložení do tabulky selhalo:', r.status, j.error || txt.slice(0, 300));
      return res.status(502).json({ ok: false, error: 'save_failed' });
    }
    if (j.mailed === false) console.warn('[poptavka] Uloženo do tabulky, ale e-mail se neodeslal.');
  } catch (err) {
    console.error('[poptavka] Spojení s Apps Scriptem selhalo:', err && err.message);
    return res.status(502).json({ ok: false, error: 'save_failed' });
  } finally {
    clearTimeout(timer);
  }

  return res.status(200).json({ ok: true });
};
