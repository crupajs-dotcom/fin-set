/**
 * POST /api/poptavka – pošle na info@fin-set.cz upozornění, že klient zadal poptávku
 * (s jeho údaji, Odpovědět = odpověď klientovi). Klientovi se nic neposílá.
 * Odesílá se přes SMTP odesílací schránky (výchozí Gmail).
 *
 * Proměnné prostředí (Vercel → Settings → Environment Variables):
 *   SMTP_USER   odesílací schránka, např. Gmail adresa              (povinné)
 *   SMTP_PASS   heslo aplikace Google (16 znaků) / heslo schránky   (povinné)
 *   SMTP_HOST   výchozí smtp.gmail.com
 *   SMTP_PORT   výchozí 465 (SSL); 587 = STARTTLS
 *   POPTAVKA_TO kam upozornění chodí, výchozí info@fin-set.cz
 */
const nodemailer = require('nodemailer');

const USER = process.env.SMTP_USER;
const TO = process.env.POPTAVKA_TO || 'info@fin-set.cz';
const PORT = Number(process.env.SMTP_PORT || 465);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s()-]{9,20}$/;

const esc = s =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (v, max) => String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/\s+/g, ' ');

let transporter;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: PORT,
      secure: PORT === 465,
      auth: { user: USER, pass: String(process.env.SMTP_PASS).replace(/\s+/g, '') },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
  }
  return transporter;
}

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
  if (!USER || !process.env.SMTP_PASS) {
    console.error('[poptavka] Chybí SMTP_USER nebo SMTP_PASS – nastavte je ve Vercelu.');
    return res.status(500).json({ ok: false, error: 'not_configured' });
  }

  const b = parseBody(req);

  // Honeypot „Nevyplňujte“ – bot dostane OK, nic se neodešle.
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

  const when = new Date().toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' });
  const rows = [
    ['Jméno', d.name],
    ['Telefon', d.phone],
    ['E-mail', d.email],
    ['Typ poptávky', d.type],
    ['Zpráva', d.message || '—'],
    ['Odesláno', when],
    ['Stránka', d.page || '—'],
  ];
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:#111">' +
    '<h2 style="margin:0 0 12px">Klient zadal poptávku na webu fin-set.cz</h2>' +
    '<table cellpadding="6" style="border-collapse:collapse">' +
    rows.map(([k, v]) =>
      `<tr><td style="color:#666;vertical-align:top;white-space:nowrap"><b>${esc(k)}</b></td>` +
      `<td style="white-space:pre-wrap">${esc(v)}</td></tr>`).join('') +
    '</table><p style="color:#666;font-size:12px">Odpovědí na tento e-mail píšete přímo klientovi.</p></div>';
  const text = 'Klient zadal poptávku na webu fin-set.cz.\n\n' + rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  try {
    await getTransporter().sendMail({
      from: { name: 'Web fin-set.cz', address: USER },
      to: TO,
      replyTo: { name: d.name, address: d.email },
      subject: `Nová poptávka z webu: ${d.name} (${d.type})`,
      text,
      html,
    });
  } catch (err) {
    console.error('[poptavka] Odeslání selhalo:', err && err.message);
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }

  return res.status(200).json({ ok: true });
};
