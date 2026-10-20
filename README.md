# fin-set.cz

Statický web finančního poradenství. Vanilla HTML/CSS/JS, žádný framework,
žádné závislosti. Nasazuje se na Vercel jako statické soubory.

## Struktura

```
zdroj/index.html      kostra stránky (hlavička, nav, patička) – ZDE se edituje layout
zdroj/prerender.mjs   generátor statických stránek (Node 18+, bez závislostí)
assets/styles.css     veškerý CSS
assets/app.js         veškerý JS – data, šablony stránek, router, formuláře
img/                  fotky (WebP) a loga bank (SVG)

index.html            ─┐
sluzby.html            │  GENEROVANÉ soubory – needitovat ručně,
sluzby/*.html          │  přepíše je další build
o-nas.html …          ─┘
sitemap.xml           generovaná mapa webu
```

## Jak udělat změnu

1. Text a obsah stránek → `assets/app.js` (šablony `renderHome`, `renderSluzby`, …).
   Vzhled → `assets/styles.css`. Hlavička/patička/meta → `zdroj/index.html`.
2. Přegenerovat statické stránky:

   ```bash
   node zdroj/prerender.mjs
   ```

3. Commitnout **všechno** (zdroj i vygenerované soubory) a pushnout — Vercel
   nasadí automaticky do ~30 s.

Bez kroku 2 se změna projeví jen při klikání po webu, ne při přímém otevření
adresy — vyhledávače a náhledy odkazů čtou právě vygenerované soubory.

## Proč prerender

Web je jednostránková aplikace: obsah skládá JS podle adresy. Aby každá adresa
měla vlastní `<title>`, popisek a hotové HTML pro vyhledávače, spustí
`prerender.mjs` aplikační kód v Node, zavolá render funkci každé routy a výsledek
uloží jako statický soubor. V prohlížeči pak převezme řízení zpět SPA a další
prokliky jsou okamžité.

## Formulář

Oba formuláře (stránka Kontakt i boční formulář u služeb) posílají data na
`/api/poptavka` – Vercel funkci v `api/poptavka.js`. Ta pošle na
**info@fin-set.cz** upozornění, že klient zadal poptávku, s jeho údaji
(Odpovědět = odpověď klientovi). Klientovi se nic neposílá. Odesílá se přes
SMTP odesílací schránky (výchozí Gmail). Používá `nodemailer` (viz
`package.json`), Vercel ho nainstaluje sám.

Ve Vercelu (Settings → Environment Variables) musí být nastaveno:

| Proměnná | Hodnota |
|---|---|
| `SMTP_USER` | odesílací schránka (Gmail adresa) – povinné |
| `SMTP_PASS` | heslo aplikace Google (myaccount.google.com/apppasswords) – povinné |
| `SMTP_HOST` / `SMTP_PORT` | volitelně, výchozí `smtp.gmail.com` / `465` |
| `POPTAVKA_TO` | volitelně jiný příjemce, výchozí `info@fin-set.cz` |

Po změně proměnných je potřeba projekt znovu nasadit (Redeploy). Když odeslání
selže, formulář netvrdí, že poptávka odešla — nabídne telefon a e-mail
s předvyplněnou zprávou. Chyby jsou vidět ve Vercelu → Logs (`[poptavka]`).

## Nasazení

Repo je napojené na Vercel (Framework Preset: **Other**, žádný build command).
`vercel.json` řeší hezké adresy bez `.html`, cache hlavičky a bezpečnostní
hlavičky. Složka `zdroj/` se na produkci nenasazuje (`.vercelignore`).
