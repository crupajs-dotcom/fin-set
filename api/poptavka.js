/**
 * POST /api/poptavka – odešle poptávku z formuláře na info@fin-set.cz
 * a klientovi potvrzení. Posílá se přímo ze schránky info@fin-set.cz (WEDOS SMTP),
 * takže údaje klientů neprochází žádnou další službou.
 *
 * Proměnné prostředí (Vercel → Settings → Environment Variables):
 *   SMTP_PASS   heslo ke schránce info@fin-set.cz            (povinné)
 *   SMTP_USER   přihlašovací jméno, výchozí info@fin-set.cz
 *   SMTP_HOST   výchozí wes1-smtp.wedos.net
 *   SMTP_PORT   výchozí 465 (SSL); 587 = STARTTLS
 *   POPTAVKA_TO kam poptávky chodí, výchozí info@fin-set.cz
 *   POPTAVKA_POTVRZENI=0  vypne potvrzovací e-mail klientovi
 */
const nodemailer = require('nodemailer');

const USER = process.env.SMTP_USER || 'info@fin-set.cz';
const TO = process.env.POPTAVKA_TO || 'info@fin-set.cz';
const FROM = { name: 'fin-set.cz', address: USER };
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
      host: process.env.SMTP_HOST || 'wes1-smtp.wedos.net',
      port: PORT,
      secure: PORT === 465,
      auth: { user: USER, pass: process.env.SMTP_PASS },
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
  if (!process.env.SMTP_PASS) {
    console.error('[poptavka] Chybí SMTP_PASS – nastavte ho ve Vercelu.');
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
    ['E-mail', d.email],
    ['Telefon', d.phone],
    ['Typ poptávky', d.type],
    ['Zpráva', d.message || '—'],
    ['Odesláno', when],
    ['Stránka', d.page || '—'],
  ];
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:#111">' +
    '<h2 style="margin:0 0 12px">Nová poptávka z webu fin-set.cz</h2>' +
    '<table cellpadding="6" style="border-collapse:collapse">' +
    rows.map(([k, v]) =>
      `<tr><td style="color:#666;vertical-align:top;white-space:nowrap"><b>${esc(k)}</b></td>` +
      `<td style="white-space:pre-wrap">${esc(v)}</td></tr>`).join('') +
    '</table><p style="color:#666;font-size:12px">Odpovědí na tento e-mail píšete přímo klientovi.</p></div>';
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  const mailer = getTransporter();
  try {
    await mailer.sendMail({
      from: FROM,
      to: TO,
      replyTo: { name: d.name, address: d.email },
      subject: `Nová poptávka: ${d.type} – ${d.name}`,
      text,
      html,
    });
  } catch (err) {
    console.error('[poptavka] Odeslání selhalo:', err && err.message);
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }

  // Potvrzení klientovi – když selže, poptávka je přesto doručená.
  if (process.env.POPTAVKA_POTVRZENI !== '0') {
    try {
      await mailer.sendMail({
        from: FROM,
        to: { name: d.name, address: d.email },
        replyTo: TO,
        subject: 'Vaši poptávku jsme přijali – fin-set.cz',
        text:
          `Dobrý den,\n\nděkujeme za vaši poptávku (${d.type}). ` +
          `Náš specialista se vám ozve telefonicky do 24 hodin na čísle ${d.phone}.\n\n` +
          'Pokud chcete cokoli doplnit, stačí odpovědět na tento e-mail.\n\n' +
          'S pozdravem\ntým fin-set.cz\n+420 775 939 596 · info@fin-set.cz · www.fin-set.cz',
      });
    } catch (err) {
      console.warn('[poptavka] Potvrzení klientovi neodešlo:', err && err.message);
    }
  }

  return res.status(200).json({ ok: true });
};
