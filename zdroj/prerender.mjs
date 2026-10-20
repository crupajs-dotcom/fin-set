/**
 * Prerender – vygeneruje statické HTML pro každou routu.
 *
 * Proč: web je jednostránková aplikace (obsah skládá JS). Vyhledávače i náhledy
 * odkazů ale potřebují hotové HTML s vlastním titulkem a popiskem. Skript proto
 * spustí aplikační kód v Node, zavolá render funkci každé routy a výsledek vloží
 * do kostry stránky. Po načtení v prohlížeči převezme řízení zpět SPA.
 *
 * Spuštění:  node zdroj/prerender.mjs
 * Závislosti: žádné (jen Node 18+).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { createHash } from 'node:crypto';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://fin-set.cz';

let shell = readFileSync(join(ROOT, 'zdroj/index.html'), 'utf8');
const appJs = readFileSync(join(ROOT, 'assets/app.js'), 'utf8');
const cssTxt = readFileSync(join(ROOT, 'assets/styles.css'), 'utf8');

/* Otisk obsahu v adrese – prohlížeč si smí soubory cachovat napořád
   a po nasazení nové verze si přesto stáhne aktuální. */
const stamp = t => createHash('sha1').update(t).digest('hex').slice(0, 8);
shell = shell
  .replace('/assets/styles.css', `/assets/styles.css?v=${stamp(cssTxt)}`)
  .replace('/assets/app.js', `/assets/app.js?v=${stamp(appJs)}`);

/* ── Minimální náhrada prohlížeče, aby aplikační kód prošel ── */
const noop = () => {};
const fakeEl = { classList:{add:noop,remove:noop,toggle:noop,contains:()=>false}, style:{}, dataset:{},
  setAttribute:noop, getAttribute:()=>null, addEventListener:noop, appendChild:noop, focus:noop,
  querySelector:()=>null, querySelectorAll:()=>[], scrollIntoView:noop, closest:()=>null, remove:noop };
const doc = { title:'', addEventListener:noop, getElementById:()=>null, querySelector:()=>null,
  querySelectorAll:()=>[], createElement:()=>({...fakeEl}), documentElement:{...fakeEl}, body:{...fakeEl} };
const ctx = vm.createContext({
  document: doc,
  window: { addEventListener:noop, scrollTo:noop, matchMedia:()=>({matches:false,addEventListener:noop}), location:{} },
  location: { hash:'', pathname:'/', search:'', href:SITE },
  history: { pushState:noop, replaceState:noop },
  navigator: { userAgent:'node' },
  console, setTimeout, clearTimeout, requestAnimationFrame:noop,
  IntersectionObserver: class { observe(){} unobserve(){} disconnect(){} },
  URLSearchParams, URL, encodeURIComponent, decodeURIComponent,
});
vm.runInContext(appJs + '\nglobalThis.__EXPORT = { ROUTES, SERVICES };', ctx, { filename:'app.js' });
const { ROUTES, SERVICES } = ctx.__EXPORT;

/* ── Seznam stránek k vygenerování ── */
const PAGES = [
  '/', '/sluzby', '/srovnavac', '/o-nas', '/reference', '/kontakt', '/gdpr',
  ...SERVICES.map(s => `/sluzby/${s.slug}`),
];

const esc = t => String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

function metaFor(path) {
  for (const r of ROUTES) {
    const m = path.match(r.pattern);
    if (!m) continue;
    const meta = r.meta ? r.meta(m) : { title:r.title, desc:r.desc };
    if (meta) return { ...meta, html: r.render(m, '') };
  }
  return null;
}

const WARNING = '<!-- Generováno skriptem zdroj/prerender.mjs – ruční úpravy se při dalším buildu přepíšou.\n     Zdroj šablony: zdroj/index.html, obsah stránek: assets/app.js -->\n';

function buildPage(path) {
  const meta = metaFor(path);
  if (!meta) throw new Error('Routa bez meta dat: ' + path);
  const url = SITE + path;
  let html = shell
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${esc(meta.desc)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${esc(meta.desc)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${esc(url)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${esc(url)}$2`)
    .replace('<div id="app"></div>', `<div id="app" data-prerendered="true">${meta.html}</div>`)
    // bez JS zůstane obsah viditelný (reveal animace startuje na opacity:0)
    .replace('</head>', '<noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>\n</head>');
  return WARNING + html;
}

let count = 0;
for (const path of PAGES) {
  const file = path === '/' ? 'index.html' : path.slice(1) + '.html';
  const out = join(ROOT, file);
  mkdirSync(dirname(out), { recursive:true });
  writeFileSync(out, buildPage(path), 'utf8');
  console.log('  ✓', file.padEnd(42), (buildPage(path).length/1024).toFixed(0)+' kB');
  count++;
}

/* 404 – Vercel ji servíruje pro neznámé cesty */
const notFound = WARNING + shell
  .replace(/<title>[^<]*<\/title>/, '<title>Stránka nenalezena | fin-set.cz</title>')
  .replace('<meta name="robots" content="index,follow">', '<meta name="robots" content="noindex,follow">')
  .replace('<div id="app"></div>', '<div id="app"></div>');
writeFileSync(join(ROOT, '404.html'), notFound, 'utf8');
console.log('  ✓ 404.html');

/* sitemap.xml */
const today = new Date().toISOString().slice(0,10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(p => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${p==='/'?'1.0':p.startsWith('/sluzby')?'0.8':'0.6'}</priority></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
console.log('  ✓ sitemap.xml —', PAGES.length, 'adres');
console.log(`\nHotovo: ${count} stránek + 404 + sitemap.`);
