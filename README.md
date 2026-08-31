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

## Formulář – co je potřeba dodělat

Odesílání běží přes [EmailJS](https://emailjs.com). V `assets/app.js` nahoře jsou
čtyři konstanty s placeholdery `ZDE_…`:

```js
const EMAILJS_PUBLIC_KEY      = 'ZDE_VAS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID      = 'ZDE_SERVICE_ID';
const EMAILJS_TEMPLATE_NOTIFY = 'ZDE_TEMPLATE_NOTIFY';   // notifikace pro Jana
const EMAILJS_TEMPLATE_REPLY  = 'ZDE_TEMPLATE_REPLY';    // potvrzení klientovi
```

Dokud jsou nevyplněné, formulář **netvrdí, že poptávka odešla** — místo toho
nabídne telefon a e-mail s předvyplněnou zprávou. Po vyplnění klíčů a
přegenerování začne odesílat.

Šablona notifikace používá proměnné `from_name`, `from_email`, `phone`, `type`,
`message`, `reply_to`; šablona potvrzení `to_name`, `to_email`, `reply_to`.

## Nasazení

Repo je napojené na Vercel (Framework Preset: **Other**, žádný build command).
`vercel.json` řeší hezké adresy bez `.html`, cache hlavičky a bezpečnostní
hlavičky. Složka `zdroj/` se na produkci nenasazuje (`.vercelignore`).
