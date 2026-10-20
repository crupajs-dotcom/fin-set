/**
 * fin-set.cz – příjem poptávek z webu (Google Apps Script, web app).
 *
 * Kopie kódu, který běží v Apps Scriptu u tabulky „Poptávky fin-set.cz“
 * (Google Disk pavlikj.03@gmail.com → tabulka → Rozšíření → Apps Script).
 * Volá ho Vercel funkce /api/poptavka (POST JSON). Skript:
 *   1) zapíše poptávku jako nový řádek do listu „Poptávky“,
 *   2) pošle upozornění na info@fin-set.cz (Odpovědět = klient).
 *
 * TOKEN musí být stejný jako proměnná POPTAVKA_TOKEN ve Vercelu
 * (v repozitáři je jen zástupný text – skutečná hodnota je v Apps Scriptu a ve Vercelu).
 * Po změně kódu: Nasadit → Spravovat nasazení → upravit → Verze: Nová verze (URL zůstane stejná).
 */
const SHEET_ID = '1T66Kggq9BkT3OZj58XpGRgVnq-pT4YqL60Q5sbS4LeA';
const SHEET_NAME = 'Poptávky';
const NOTIFY_TO = 'info@fin-set.cz';
const TOKEN = 'ZDE_TOKEN_Z_VERCELU';

const HEADERS = ['Přijato', 'Jméno', 'Telefon', 'E-mail', 'Typ poptávky', 'Zpráva', 'Stránka', 'Stav', 'Poznámka'];
const STAVY = ['Nová', 'Kontaktováno', 'V řešení', 'Uzavřeno', 'Nerelevantní'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(e) {
  try {
    const b = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (b.token !== TOKEN) return json_({ ok: false, error: 'forbidden' });

    const d = {
      name: line_(b.name, 120),
      phone: line_(b.phone, 30),
      email: line_(b.email, 200),
      type: line_(b.type, 120) || 'Neuvedeno',
      message: text_(b.message, 5000),
      page: line_(b.page, 300),
    };
    if (d.name.length < 2 || !EMAIL_RE.test(d.email)) return json_({ ok: false, error: 'validation' });

    const now = new Date();
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sh = sheet_();
      sh.appendRow([now, safe_(d.name), safe_(d.phone), safe_(d.email), safe_(d.type),
                    safe_(d.message), safe_(d.page), 'Nová', '']);
      sh.getRange(sh.getLastRow(), 1).setNumberFormat('d. M. yyyy H:mm');
    } finally {
      lock.releaseLock();
    }

    let mailed = true;
    try { notify_(d, now); } catch (err) { mailed = false; console.error('E-mail se nepodařilo poslat: ' + err); }

    return json_({ ok: true, mailed: mailed });
  } catch (err) {
    console.error('doPost: ' + err);
    return json_({ ok: false, error: 'server_error' });
  }
}

/* Kontrola, že web app běží (otevřít URL v prohlížeči). */
function doGet() {
  return json_({ ok: true, service: 'poptavky-fin-set' });
}

/* Jednorázově spustit z editoru: připraví list (hlavička, šířky, výběr stavu) a povolí oprávnění. */
function nastavit() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  ss.setSpreadsheetTimeZone('Europe/Prague');
  const sh = sheet_();
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold').setBackground('#F3EEE4');
  sh.setFrozenRows(1);
  [140, 170, 130, 210, 190, 380, 170, 120, 220].forEach((w, i) => sh.setColumnWidth(i + 1, w));
  sh.getRange('F2:F').setWrap(true);
  sh.getRange('H2:H').setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(STAVY, true).setAllowInvalid(false).build());
  MailApp.getRemainingDailyQuota(); // jen kvůli povolení oprávnění k e-mailu
}

function sheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.getSheets()[0];
    sh.setName(SHEET_NAME);
  }
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  return sh;
}

function notify_(d, now) {
  const when = Utilities.formatDate(now, 'Europe/Prague', 'd. M. yyyy H:mm');
  const rows = [
    ['Jméno', d.name], ['Telefon', d.phone || '—'], ['E-mail', d.email], ['Typ poptávky', d.type],
    ['Zpráva', d.message || '—'], ['Odesláno', when], ['Stránka', d.page || '—'],
  ];
  const url = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/edit';
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:#111">' +
    '<h2 style="margin:0 0 12px">Klient zadal poptávku na webu fin-set.cz</h2>' +
    '<table cellpadding="6" style="border-collapse:collapse">' +
    rows.map(r => '<tr><td style="color:#666;vertical-align:top;white-space:nowrap"><b>' + esc_(r[0]) +
      '</b></td><td style="white-space:pre-wrap">' + esc_(r[1]) + '</td></tr>').join('') +
    '</table><p style="color:#666;font-size:12px">Odpovědí na tento e-mail píšete přímo klientovi. ' +
    'Všechny poptávky: <a href="' + url + '">tabulka Poptávky fin-set.cz</a></p></div>';
  MailApp.sendEmail({
    to: NOTIFY_TO,
    replyTo: d.email,
    name: 'Web fin-set.cz',
    subject: 'Nová poptávka z webu: ' + d.name + ' (' + d.type + ')',
    body: 'Klient zadal poptávku na webu fin-set.cz.\n\n' + rows.map(r => r[0] + ': ' + r[1]).join('\n') +
      '\n\nVšechny poptávky: ' + url,
    htmlBody: html,
  });
}

function line_(v, max) { return text_(v, max).replace(/\s+/g, ' '); }
function text_(v, max) { return String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max); }
/* Text začínající = + - @ by tabulka brala jako vzorec → apostrof ho nechá jako text. */
function safe_(v) { return /^[=+\-@]/.test(v) ? "'" + v : v; }
function esc_(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
