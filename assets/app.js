'use strict';

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const SERVICES = [
  {
    slug: 'podnikatelske-poradenstvi',
    num: '01',
    name: 'Podnikatelské poradenství',
    img: '/img/about/charts.webp',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    shortDesc: 'Strategie, projektové financování a optimalizace stávajících úvěrů – vše pod jednou střechou.',
    perks: ['Analýza cash-flow a finanční strategie', 'Projektové financování od 50 mil. Kč', 'Refinancování a konsolidace závazků', 'Finanční plán na 3–5 let'],
    hero: 'Finanční strategie šitá na míru vašemu podnikání',
    desc: [
      'Analyzujeme vaši finanční situaci a sestavíme konkrétní strategii – od projektového financování a refinancování až po dlouhodobý finanční plán na 3–5 let.',
    ],
    steps: [
      { title: 'Úvodní konzultace', desc: 'Bezplatné setkání, kde pochopíme vaši situaci a cíle.' },
      { title: 'Finanční analýza', desc: 'Rozbor účetnictví, cash-flow, stávajících úvěrů a struktury financování.' },
      { title: 'Návrh strategie', desc: 'Konkrétní doporučení – projektové financování, refinancování nebo nová struktura.' },
      { title: 'Implementace a monitoring', desc: 'Pomáháme s realizací a průběžně vyhodnocujeme výsledky.' }
    ],
    faq: [
      { q: 'Pro koho je poradenství vhodné?', a: 'Pro OSVČ, s.r.o. i a.s. v jakékoliv fázi – od začínajících podnikatelů po zavedené firmy s obratem přes 100 mil. Kč.' },
      { q: 'Zahrnuje to i projektové financování a refinancování?', a: 'Ano, obě oblasti jsou součástí komplexního poradenství. Projektové financování řešíme od 50 mil. Kč, refinancování bez omezení výše.' },
      { q: 'Je poradenství zpoplatněno?', a: 'Prvotní konzultace je zdarma. Následná spolupráce je honorována fixní nebo výkonovou odměnou dle rozsahu.' }
    ]
  },
  {
    slug: 'financovani-nemovitosti',
    num: '02',
    name: 'Financování investičních nemovitostí',
    img: '/img/about/city.webp',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
    shortDesc: 'Úvěry na koupi, rekonstrukci nebo výstavbu bytů, domů, hal a firemních sídel.',
    perks: ['Investiční hypotéky', 'Developer loans', 'Refinancování portfolia'],
    hero: 'Nemovitosti jako investice – s naší podporou',
    desc: [
      'Pomáháme investorům a developerům získat financování pro rezidenční i komerční projekty za podmínek, které sami v bance nezískáte – nižší sazby, delší fixace, flexibilnější zajištění.',
    ],
    steps: [
      { title: 'Posouzení projektu', desc: 'Zhodnotíme investiční záměr, lokalitu a finanční parametry.' },
      { title: 'Strukturace financování', desc: 'Navrhneme optimální mix vlastního a cizího kapitálu.' },
      { title: 'Výběr a jednání s bankou', desc: 'Oslovíme relevantní instituce a vyjednáme nejlepší podmínky.' },
      { title: 'Čerpání a monitoring', desc: 'Dohlédneme na průběh čerpání a plnění podmínek úvěru.' }
    ],
    faq: [
      { q: 'Jaká je minimální výše investice?', a: 'Pracujeme s projekty od 2 mil. Kč. Pro developer projekty je minimum zpravidla 10 mil. Kč.' },
      { q: 'Pomáháte i se zahraničními investicemi?', a: 'Primárně se soustřeďujeme na český trh. Zahraniční projekty řešíme individuálně ve spolupráci s partnerskými poradci.' },
      { q: 'Jak je to s LTV?', a: 'U investičních nemovitostí banky standardně financují 60–80 % hodnoty. S naší pomocí se daří dosáhnout horní hranice i nad ni.' }
    ]
  },
  {
    slug: 'poradenstvi-svj-obce',
    num: '03',
    name: 'Poradenství pro SVJ a obce',
    img: '/img/about/meeting.webp',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
    shortDesc: 'Financování rekonstrukcí a modernizací bytových domů, obecních budov a infrastruktury.',
    perks: ['Úvěry pro SVJ', 'Dotace a granty', 'Financování obcí'],
    hero: 'Lepší podmínky pro bydlení a rozvoj komunity',
    desc: [
      'Kombinujeme bankovní úvěry s dostupnými dotacemi a provázíme SVJ i obce celým procesem – od záměru a výběru financování až po samotné čerpání.',
    ],
    steps: [
      { title: 'Definice potřeb', desc: 'Identifikujeme rozsah projektu a finanční možnosti společenství.' },
      { title: 'Dotační audit', desc: 'Prověříme dostupné dotace (IROP, SFŽP, krajské programy).' },
      { title: 'Zajištění financování', desc: 'Vyjednáme úvěr za výhodných podmínek u specializovaných bank.' },
      { title: 'Administrativa', desc: 'Pomáháme s dokumentací nutnou pro banku i dotační orgán.' }
    ],
    faq: [
      { q: 'Potřebujeme souhlas všech vlastníků?', a: 'Pro úvěr SVJ zpravidla postačí souhlas nadpoloviční většiny hlasů na shromáždění. Pomůžeme s přípravou podkladů.' },
      { q: 'Lze kombinovat úvěr a dotaci?', a: 'Ano, a je to dokonce optimální přístup. Dotace snižuje potřebnou výši úvěru a tím i celkové náklady.' },
      { q: 'Jak dlouho trvá celý proces?', a: 'Od konzultace po první čerpání zpravidla 3–6 měsíců v závislosti na dotačním programu.' }
    ]
  },
  {
    slug: 'firemni-uvery',
    num: '05',
    name: 'Firemní úvěry a investice',
    img: '/img/about/handshake.webp',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    shortDesc: 'Financování rozvoje podnikání, nákupu technologií, strojů či expanze.',
    perks: ['Bez zajištění do 5 mil. Kč', 'Splatnost až 10 let', 'Čerpání do 48 hodin'],
    hero: 'Kapitál pro váš podnikatelský rozvoj',
    desc: [
      'Srovnáváme nabídky desítek bank a vyjednáváme podmínky – typicky dosahujeme sazeb o 0,5–1,5 % nižších, než klient získá přímou žádostí.',
    ],
    steps: [
      { title: 'Analýza potřeb', desc: 'Zjistíme přesný účel, výši a požadovanou strukturu úvěru.' },
      { title: 'Příprava žádosti', desc: 'Sestavíme komplexní úvěrový záměr a sbíráme podklady.' },
      { title: 'Výběr banky', desc: 'Oslovíme vhodné instituce a porovnáme nabídky.' },
      { title: 'Čerpání', desc: 'Dovedeme proces k podpisu smlouvy a prvnímu čerpání.' }
    ],
    faq: [
      { q: 'Jak rychle lze úvěr získat?', a: 'U menších úvěrů (do 5 mil. Kč) bez zajištění i do 5 pracovních dnů. Větší transakce trvají 3–8 týdnů.' },
      { q: 'Potřebuji zajištění?', a: 'Záleží na výši a bonitě žadatele. Do 2–5 mil. Kč banky běžně půjčují bez nemovitostního zajištění.' },
      { q: 'Jaké podklady potřebujete?', a: 'Zpravidla daňová přiznání za poslední 2 roky, výpis z účtu a aktuální rozvaha. Pomůžeme s kompletací.' }
    ]
  },
  {
    slug: 'pojisteni',
    num: '07',
    name: 'Komplexní pojištění',
    img: '/img/about/office.webp',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    shortDesc: 'Pojištění pro firmy, podnikatele a organizace – majetek, odpovědnost i zaměstnanci.',
    perks: ['Pojištění majetku a odpovědnosti', 'Pojištění podnikatelských rizik', 'Pojištění zaměstnanců a benefity'],
    hero: 'Chráníme to, na čem stavíte své podnikání',
    desc: [
      'Navrhujeme komplexní pojistný program přesně pro vaše rizika – od majetku a odpovědnosti přes kybernetická rizika až po skupinové pojištění zaměstnanců.',
    ],
    steps: [
      { title: 'Riziková analýza', desc: 'Identifikujeme klíčová rizika provozu, majetku a odpovědnosti.' },
      { title: 'Návrh ochrany', desc: 'Připravíme komplexní pojistný program se správnými limity a spoluúčastmi.' },
      { title: 'Výběr pojistitele', desc: 'Porovnáme nabídky a vyjednáme nejvýhodnější podmínky.' },
      { title: 'Správa a revize', desc: 'Pravidelně revidujeme krytí, aby odpovídalo aktuální situaci firmy.' }
    ],
    faq: [
      { q: 'Pro koho je služba určena?', a: 'Pro OSVČ, malé i velké firmy, SVJ, obce a další organizace s potřebou ochrany majetku, odpovědnosti či zaměstnanců.' },
      { q: 'Jak probíhá první konzultace?', a: 'Nezávazně projdeme vaši stávající pojistnou ochranu, identifikujeme mezery a navrhneme možnosti optimalizace. Zdarma.' },
      { q: 'Kdo se mnou bude spolupracovat?', a: 'Vaším kontaktní osobou bude Aleš Muselík – specialista na komerční pojištění.' }
    ]
  },
  {
    slug: 'nemovitosti',
    num: '08',
    name: 'Nemovitosti a investice',
    img: '/img/about/city.webp',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M3 10v11h7v-6h4v6h7V10"/><path d="M2 11l10-8 10 8"/></svg>',
    shortDesc: 'Vyhledávání investičních nemovitostí, kontrola stavu, vyjednávání podmínek a správa portfolia.',
    perks: ['Vyhledávání investičních nemovitostí', 'Kontrola stavu a due diligence', 'Vyjednávání kupní ceny'],
    hero: 'Najdeme nemovitost, která dává smysl',
    desc: [
      'Vyhledáváme a prověřujeme investiční nemovitosti – technický stav, právní rámec, tržní cena i vyjednání podmínek – vše pod jednou střechou.',
    ],
    steps: [
      { title: 'Definice požadavků', desc: 'Stanovíme rozpočet, lokalitu, parametry a investiční cíl.' },
      { title: 'Vyhledání nemovitosti', desc: 'Procházíme trh včetně off-market nabídek a developerských projektů.' },
      { title: 'Due diligence', desc: 'Kontrola technického stavu, právního rámce a tržní ceny.' },
      { title: 'Vyjednání a uzavření', desc: 'Vyjednáme kupní cenu i smluvní podmínky a doprovodíme klienta až k podpisu.' }
    ],
    faq: [
      { q: 'Pro koho je služba určena?', a: 'Pro investory hledající výnosové nemovitosti i pro klienty, kteří kupují vlastní bydlení a chtějí mít po boku odborníka.' },
      { q: 'Pomáháte i s prodejem?', a: 'Ano, zajistíme prezentaci, ocenění i komunikaci se zájemci. Cílem je dosáhnout maximální tržní ceny v rozumném čase.' },
      { q: 'Kdo se mnou bude spolupracovat?', a: 'Vaším kontaktní osobou bude Marek Cifr – specialista na nemovitosti a investice.' }
    ]
  }
];

const PRODUCTS = [
  { id:1, tab:'uvery', name:'KB Firemní úvěr Flexi', bank:'Komerční banka', rate:'5,9', rpsn:'6,2', maxAmount:'10 mil. Kč', subjekt:['sro','as'], perks:['Bez zajištění do 2 mil. Kč','Splatnost až 7 let','Čerpání do 48 h','Fixní i variabilní sazba'] },
  { id:2, tab:'uvery', name:'ČSOB Business Loan', bank:'ČSOB', rate:'6,2', rpsn:'6,6', maxAmount:'20 mil. Kč', subjekt:['sro','as','osvc'], featured:true, perks:['Online žádost','Osobní poradce','Bez poplatku za vedení','Odklad splátek'] },
  { id:3, tab:'uvery', name:'Raiffeisen Business Invest', bank:'Raiffeisen', rate:'6,5', rpsn:'6,9', maxAmount:'15 mil. Kč', subjekt:['sro','as'], perks:['Financování strojů a vybavení','Státní záruky ČMZRB','Bez skrytých poplatků','Rychlé schválení'] },
  { id:4, tab:'uvery', name:'UniCredit SME Express', bank:'UniCredit', rate:'7,1', rpsn:'7,5', maxAmount:'5 mil. Kč', subjekt:['sro','as','osvc'], perks:['Bez zajištění','Online celý proces','Odpověď do 24 h','Min. administrativa'] },
  { id:5, tab:'hypoteky', name:'Spořitelna Investiční hypotéka', bank:'Česká spořitelna', rate:'5,49', rpsn:'5,68', maxAmount:'50 mil. Kč', subjekt:['osvc','sro'], featured:true, perks:['LTV až 80 %','Fixace 1–10 let','Volný účel','Pojištění zdarma 1. rok'] },
  { id:6, tab:'hypoteky', name:'ČSOB Developer Finance', bank:'ČSOB', rate:'5,85', rpsn:'6,1', maxAmount:'200 mil. Kč', subjekt:['sro','as'], perks:['Developer projekty','Flexibilní čerpání','Meziúvěr v ceně','Osobní správce'] },
  { id:7, tab:'hypoteky', name:'Moneta Investment Loan', bank:'Moneta', rate:'5,99', rpsn:'6,22', maxAmount:'20 mil. Kč', subjekt:['osvc','sro'], perks:['Pronájmy i prodej','Online sjednání','Bez poplatku za vedení','Pojistné balíčky'] },
  { id:8, tab:'hypoteky', name:'mBank Investiční úvěr', bank:'mBank', rate:'6,3', rpsn:'6,55', maxAmount:'10 mil. Kč', subjekt:['osvc'], perks:['Pro OSVČ','100% online','Bez pobočky','Rychlé schválení'] },
  { id:9, tab:'refinancovani', name:'KB Refinancování Plus', bank:'Komerční banka', rate:'5,7', rpsn:'5,95', maxAmount:'30 mil. Kč', subjekt:['sro','as','osvc'], featured:true, perks:['Konsolidace až 5 úvěrů','Bez poplatku za splacení','Nové lepší podmínky','Výmaz zástavy v ceně'] },
  { id:10, tab:'refinancovani', name:'Raiffeisen Refi Business', bank:'Raiffeisen', rate:'6,0', rpsn:'6,3', maxAmount:'50 mil. Kč', subjekt:['sro','as'], perks:['Individuální sazba','Rychlé schválení','Min. dokumentace','Fixace až 5 let'] },
  { id:11, tab:'refinancovani', name:'Fio Refinanční balíček', bank:'Fio banka', rate:'6,4', rpsn:'6,7', maxAmount:'10 mil. Kč', subjekt:['sro','osvc'], perks:['Nízký poplatek','Transparentní ceník','Osobní poradce','Online správa'] },
  { id:12, tab:'refinancovani', name:'ČSOB Optimalizace závazků', bank:'ČSOB', rate:'5,85', rpsn:'6,1', maxAmount:'100 mil. Kč', subjekt:['sro','as'], perks:['Velké portfolio','Syndikát bank','Odborný tým','Custom smlouva'] },
  { id:13, tab:'svj', name:'Hypotéka pro SVJ', bank:'Česká spořitelna', rate:'4,99', rpsn:'5,15', maxAmount:'5 mil. Kč', subjekt:['svj'], featured:true, perks:['Speciálně pro SVJ','Bez ručení vlastníků','Kombinace s dotací','Splatnost 20 let'] },
  { id:14, tab:'svj', name:'Úvěr SVJ Plus', bank:'ČSOB', rate:'5,2', rpsn:'5,4', maxAmount:'10 mil. Kč', subjekt:['svj','obec'], perks:['SVJ i bytová družstva','Zateplení a opravy','Dotační asistence','Flexibilní splátky'] },
  { id:15, tab:'svj', name:'Komunální úvěr', bank:'Komerční banka', rate:'3,9', rpsn:'4,1', maxAmount:'100 mil. Kč', subjekt:['obec'], perks:['Pouze pro obce a města','Infrastruktura','Dotace EU v kombinaci','Dlouhá splatnost'] },
  { id:16, tab:'svj', name:'Raiffeisen SVJ Invest', bank:'Raiffeisen', rate:'5,35', rpsn:'5,6', maxAmount:'8 mil. Kč', subjekt:['svj'], perks:['Rychlé schválení','Bez zajištění nemovitostí','Kombinace SFŽP','Online podpis'] }
];

const REFERENCES = [
  { name:'Pan Malý', initials:'PM', type:'Hypotéka', text:'Vynikající zkušenost! S panem Klusákem jsem řešil sjednání hypotéky a vše proběhlo rychle a efektivně. Doporučuji každému, kdo hledá spolehlivého finančního poradce.', rating:5 },
  { name:'Robert Šolc', initials:'RŠ', type:'Úvěr pro SVJ', text:'V roce 2024 jsme s panem Klusákem řešili úvěr na rekonstrukci střechy našeho SVJ. Vše proběhlo korektně a následně nám pan Sedláček pomohl s čerpáním. Profesionální přístup od začátku do konce.', rating:5 },
  { name:'Miroslav Vodráško', initials:'MV', type:'Refinancování hypotéky', text:'Měl jsem hypotéku z doby, kdy byly úrokové sazby na maximu. Skvělá komunikace, rychlé jednání a hlavně reálný výsledek – ušetřil jsem tisíce měsíčně.', rating:4 },
  { name:'Petra K.', initials:'PK', type:'Firemní úvěr', text:'Potřebovali jsme financovat nákup nového stroje pro výrobu. Tým fin-set nám připravil několik variant a vyjednal podmínky, které jsme přímo v bance nedostali.', rating:5 },
  { name:'SVJ Brno-střed', initials:'SB', type:'Financování rekonstrukce', text:'Pomohli nám s financováním rekonstrukce bytového domu. Vše vysvětlili srozumitelně, poradili s dotacemi a celý proces vedli za nás.', rating:4 },
  { name:'Tomáš H.', initials:'TH', type:'Projektové financování', text:'Spolupráce s fin-set nám umožnila realizovat developerský projekt, na který bychom sami v bance nedosáhli. Velmi oceňuji jejich znalost trhu i zkušenosti.', rating:5 }
];

const TIMELINE = [
  { year:'2007', title:'Začátek v oboru', desc:'Začínáme působit ve finančním oboru. Sbíráme zkušenosti z bank i vlastního podnikání.' },
  { year:'2017', title:'Specializace na úvěry', desc:'Zaměřujeme se na úvěry pro firmy, obce a jednotlivce. Vzniká koncept, který později nese jméno fin-set.' },
  { year:'2020', title:'Spojení sil', desc:'Jan Klusák a David Sedláček spojují své zkušenosti a budují tým finančních specialistů.' },
  { year:'2024', title:'Komplexní řešení', desc:'Realizujeme stovky úvěrových případů – hypotéky, firemní úvěry, projektové financování i SVJ.' },
  { year:'2026', title:'fin-set.cz dnes', desc:'Tým finančních specialistů s 19 lety zkušeností v oboru. Pomáháme podnikatelům získat financování.' }
];

const STATS_HOME = [
  { value:19, suffix:'+', label:'let zkušeností' },
  { value:500, suffix:'+', label:'spokojených klientů' },
  { value:12, suffix:'+', label:'bankovních partnerů' },
  { value:98, suffix:'%', label:'míra doporučení' }
];

/* Bankovní partneři aktivní v podnikatelském financování v ČR.
   Loga jsou hostována lokálně z img/banks/, originální brand identity. */
const BANK_PARTNERS = [
  { id:'kb',         name:'Komerční banka',   logo:'/img/banks/kb.svg' },
  { id:'csob',       name:'ČSOB',             logo:'/img/banks/csob.svg' },
  { id:'cs',         name:'Česká spořitelna', logo:'/img/banks/cs.svg' },
  { id:'unicredit',  name:'UniCredit Bank',   logo:'/img/banks/unicredit.svg' },
  { id:'raiffeisen', name:'Raiffeisenbank',   logo:'/img/banks/raiffeisen.svg' },
  { id:'moneta',     name:'MONETA Money Bank',logo:'/img/banks/moneta.svg' },
  { id:'fio',        name:'Fio banka',        logo:'/img/banks/fio.svg' },
  { id:'air',        name:'Air Bank',         logo:'/img/banks/air.webp' },
  { id:'oberbank',   name:'Oberbank',         logo:'/img/banks/oberbank.svg' },
  { id:'ppf',        name:'PPF banka',        logo:'/img/banks/ppf.svg' }
];

/* LinkedIn pseudo-feed – ručně udržovaný seznam posledních příspěvků.
   Jakmile budete mít nový post, přidejte záznam na začátek pole. */
const LINKEDIN_AUTHORS = {
  klusak:   { name:'Jan Klusák',     initials:'JK', img:'/img/jan-klusak-sm.webp',     title:'Zakladatel & Senior poradce',   url:'https://www.linkedin.com/in/honza-klusak/' },
  sedlacek: { name:'David Sedláček', initials:'DS', img:'/img/david-sedlacek-sm.webp', title:'Zakladatel & Obchodní ředitel', url:'https://www.linkedin.com/in/david-sedl%C3%A1%C4%8Dek-85b77a18a/' }
};

const LINKEDIN_POSTS = [
  { author:'klusak',   date:'2026-03-28', text:'Sazby firemních úvěrů znovu klesly. U projektového financování dokážeme dnes vyjednat podmínky, které byly před rokem nemyslitelné. Pokud řešíte expanzi, ozvěte se – ukážu vám, kde reálně ušetřit.', tags:['#firemniuvery','#financovani'], url:'https://www.linkedin.com/in/honza-klusak/recent-activity/' },
  { author:'sedlacek', date:'2026-03-15', text:'Refinancování hypotéky není jen o sazbě. Klient tento týden ušetřil 4 200 Kč měsíčně – ne kvůli nejlepší sazbě na trhu, ale díky správnému nastavení splatnosti a fixace. Poradenství má smysl.', tags:['#hypoteky','#refinancovani'], url:'https://www.linkedin.com/in/david-sedl%C3%A1%C4%8Dek-85b77a18a/recent-activity/' },
  { author:'klusak',   date:'2026-02-22', text:'SVJ a financování rekonstrukcí: stát i kraje letos otevírají nové dotační tituly. Kombinace dotace + úvěru může pokrýt 80–90 % projektu. Pomáháme se vším od žádosti po čerpání.', tags:['#SVJ','#dotace'], url:'https://www.linkedin.com/in/honza-klusak/recent-activity/' },
  { author:'sedlacek', date:'2026-02-05', text:'Banka vám řekla ne? V 7 z 10 případů to neznamená, že úvěr nedostanete – znamená to, že žádost nebyla správně připravená. Včera jsme schválili klienta, který měl předtím tři odmítnutí.', tags:['#hypoteky','#poradenstvi'], url:'https://www.linkedin.com/in/david-sedl%C3%A1%C4%8Dek-85b77a18a/recent-activity/' },
  { author:'klusak',   date:'2026-01-18', text:'Začátek roku je ideální čas na revizi firemních úvěrů. Projděte si fixace, zajištění a kovenanty. Často se dá vyjednat lépe – stačí vědět, kde tlačit. Rád vám s tím pomůžu.', tags:['#firemnifinance'], url:'https://www.linkedin.com/in/honza-klusak/recent-activity/' }
];

/* ══════════════════════════════════════════
   UTILS
══════════════════════════════════════════ */
const stars = (n=5) => Array(n).fill('<span class="ref-star">★</span>').join('');

function subpageHero(breadcrumbItems, h1, desc='', opts={}) {
  const bc = breadcrumbItems.map((item,i) =>
    i < breadcrumbItems.length-1
      ? `<a href="${item.href}">${item.label}</a><span class="breadcrumb-sep">›</span>`
      : `<span>${item.label}</span>`
  ).join('');
  const num = opts.num || String((breadcrumbItems.length)).padStart(2,'0');
  const eyebrow = opts.eyebrow || breadcrumbItems[breadcrumbItems.length-1].label;
  // Highlight last word as italic gold accent
  const parts = h1.trim().split(' ');
  const last = parts.pop();
  const headline = parts.length ? `${parts.join(' ')}<br><em>${last}</em>` : `<em>${last}</em>`;
  return `
  <section class="hero-dark hero-subpage">
    <div class="hero-grid-bg"></div>
    <div class="hero-gradient"></div>
    <div class="glow-orb glow-orb-1"></div>
    <div class="container" style="position:relative">
      <div class="breadcrumb">${bc}</div>
      <h1 class="display-lg" style="color:#fff;max-width:820px;margin:1.75rem 0 1.5rem">${headline}</h1>
      <span class="gold-line"></span>
      ${desc ? `<p style="font-size:1.08rem;color:var(--text-muted-dark);max-width:620px;line-height:1.7;margin-top:1.75rem">${desc}</p>` : ''}
    </div>
  </section>`;
}

/* ══════════════════════════════════════════
   PAGES
══════════════════════════════════════════ */
function renderHome() {

  const featuredSlugs = ['firemni-uvery','projektove-financovani','refinancovani'];
  const featured = SERVICES.filter(s => featuredSlugs.includes(s.slug));

  return `
  <!-- HERO – asymmetric editorial -->
  <section class="hero-dark" style="min-height:92vh;display:flex;align-items:center;padding:calc(var(--nav-height) + 1.25rem) 0 5rem">
    <div class="hero-grid-bg"></div>
    <div class="hero-gradient"></div>
    <div class="glow-orb glow-orb-1"></div>
    <div class="glow-orb glow-orb-2"></div>
    <div class="container" style="position:relative">
      <div class="hero-split">
        <div>
          <h1 class="display-xl" style="color:#fff;max-width:680px;margin-bottom:1.75rem;margin-top:2rem">
            Pomáháme<br>podnikatelům získat<br><em>financování.</em>
          </h1>
          <span class="gold-line"></span>
          <p style="font-size:1.1rem;color:var(--text-muted-dark);max-width:520px;line-height:1.7;margin:1.75rem 0 2.5rem">
            Od nápadu k realizaci – překládáme vaše plány do řeči bank a hledáme řešení, která šetří čas, peníze i nervy.
          </p>
          <div class="hero-cta-group" style="display:flex;flex-wrap:wrap;gap:1rem">
            <a class="btn btn-primary btn-lg" href="/kontakt">Nezávazná konzultace →</a>
          </div>
          <div class="hero-trust">
            <div class="trust-avatars">
              <div class="trust-avatar a1"><img src="/img/jan-klusak-sm.webp" alt="" width="160" height="220" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>
              <div class="trust-avatar a2"><img src="/img/david-sedlacek-sm.webp" alt="" width="160" height="189" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>
              <div class="trust-avatar a3">PM</div>
              <div class="trust-avatar a4">RŠ</div>
            </div>
            <div class="trust-text">
              <div class="trust-stars">★★★★★</div>
              <div><strong>500+</strong> spokojených klientů · 98% míra doporučení</div>
            </div>
          </div>
        </div>
        <div class="reveal delay-1">
          <div class="hero-portrait">
            <img src="/img/jan-klusak-vyrez.webp" alt="Jan Klusák, zakladatel fin-set.cz" width="900" height="1236" fetchpriority="high" decoding="async">
            <a class="hero-portrait-card" href="https://www.linkedin.com/in/honza-klusak/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profil – Jan Klusák">
              <div class="pc-icon" aria-hidden="true">in</div>
              <div>
                <div class="pc-name">Jan Klusák</div>
                <div class="pc-title">Zakladatel · 19 let v oboru</div>
              </div>
              <svg class="pc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LOGO BAR -->
  <div class="logo-bar on-light">
    <div class="container">
      <p class="logo-bar-title">Spolupracujeme s 12+ bankami a nebankovními partnery</p>
      <div class="logo-bar-logos">
        ${BANK_PARTNERS.map(b=>`<span class="logo-badge" title="${b.name}"><img src="${b.logo}" alt="${b.name} – logo" loading="lazy" decoding="async" height="28"></span>`).join('')}
      </div>
    </div>
  </div>

  <!-- EDITORIAL QUOTE / NÁŠ PŘÍSTUP -->
  <section class="section editorial-quote">
    <div class="container">
      <div class="eq-grid">
        <div class="reveal">
          <div class="eyebrow"><span class="num">02</span> Náš přístup</div>
          <p class="eq-quote">
            „Banky vám neřeknou, kde je problém. <em>My ano.</em>"
          </p>
          <div class="eq-attribution">
            <div class="eq-avatar"><img src="/img/jan-klusak-sm.webp" alt="" width="160" height="220" loading="lazy"></div>
            <div>
              <div class="eq-name">Jan Klusák</div>
              <div class="eq-role">Zakladatel fin-set.cz · 19 let v oboru</div>
            </div>
          </div>
        </div>
        <div class="eq-side reveal delay-1">
          <div class="eq-side-item">
            <div class="eq-side-num">— 01</div>
            <h3 class="eq-side-title">Nezávislost</h3>
            <p class="eq-side-desc">Pracujeme pro vás, ne pro banku. Porovnáme nabídky napříč trhem a vybereme to nejlepší řešení.</p>
          </div>
          <div class="eq-side-item">
            <div class="eq-side-num">— 02</div>
            <h3 class="eq-side-title">Rychlost</h3>
            <p class="eq-side-desc">Žádné týdny čekání. První odpověď do 24 hodin, kompletní analýza do tří pracovních dnů.</p>
          </div>
          <div class="eq-side-item">
            <div class="eq-side-num">— 03</div>
            <h3 class="eq-side-title">Zkušenost</h3>
            <p class="eq-side-desc">19 let v oboru, stovky úspěšně realizovaných případů. Víme, co banka skutečně potřebuje slyšet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED SERVICES — bento -->
  <section class="on-light section" style="background:#F4EDE0">
    <div class="container">
      <div class="section-header">
        <div>
          <div class="eyebrow"><span class="num">03</span> Co děláme nejlépe</div>
          <h2 class="display-lg" style="color:#1A1410">Služby, které <em>posouvají firmy.</em></h2>
        </div>
        <div class="sh-right">
          <p>Vyberte si z portfolia služeb, které pomohly stovkám podnikatelů získat financování za nejlepších podmínek.</p>
        </div>
      </div>
      <div class="svc-grid">
        ${SERVICES.map((s,i) => `
        <div class="svc-item reveal delay-${i%4}">
          <div class="svc-top">
            <div>
              <div class="svc-num">0${i+1}</div>
              <div class="svc-name">${s.name}</div>
            </div>
            <div class="svc-arrow">↗</div>
          </div>
          <div class="svc-desc">${s.shortDesc}</div>
          <a class="svc-link-inline" href="/sluzby/${s.slug}">Zjistit více →</a>
        </div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:3.5rem">
        <a class="btn btn-outline-blue" href="/sluzby">Nezávazná konzultace zdarma →</a>
      </div>
    </div>
  </section>

  <!-- FOUNDERS PREVIEW – jansusanka style image+text -->
  <section class="section founders-preview">
    <div class="container">
      <div class="fp-grid">
        <div class="reveal" style="position:relative">
          <div class="fp-decor"></div>
          <div class="fp-images" style="grid-template-columns:1fr;max-width:340px;margin:0 auto">
            <div class="fp-img" style="transform:none"><img src="/img/jan-klusak.webp" alt="Jan Klusák" width="900" height="1236" loading="lazy" decoding="async"></div>
          </div>
        </div>
        <div class="fp-text reveal delay-1">
          <div class="eyebrow"><span class="num">04</span> Lidé za fin-set.cz</div>
          <h2 class="display-lg" style="color:#1A1410">Jeden zakladatel.<br><em>Jasná vize.</em></h2>
          <p style="margin-top:1.5rem"><strong>Jan Klusák</strong> postavil fin-set.cz na vlastních zkušenostech z bank i podnikání. Rozumí oběma stranám stolu – a ví, kde se dá vyjednat víc.</p>
          <p>Od roku 2007 v oboru, od roku 2017 specializace na úvěry pro firmy, obce a SVJ. Stovky realizovaných případů, 50+ bankovních partnerů, 98% míra doporučení.</p>
          <div class="fp-mini-stats">
            <div class="fp-mini-stat"><div class="fp-mini-stat-num">19+</div><div class="fp-mini-stat-lab">let praxe</div></div>
            <div class="fp-mini-stat"><div class="fp-mini-stat-num">500+</div><div class="fp-mini-stat-lab">klientů</div></div>
          </div>
          <a class="btn btn-outline-blue" href="/o-nas">Poznejte tým →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY US -->
  <section class="section" style="background:var(--bg-dark)">
    <div class="container">
      <div class="section-header dark">
        <div>
          <div class="eyebrow light"><span class="num">05</span> Proč fin-set.cz</div>
          <h2 class="display-lg" style="color:#fff">Čísla, která <em>nás definují.</em></h2>
        </div>
        <div class="sh-right"><p>Devatenáct let praxe, stovky úspěšně realizovaných případů a desítky bankovních partnerů – to není marketing, to jsou fakta.</p></div>
      </div>
      <div class="grid-4">
        ${[{num:'19',lab:'let na trhu',desc:'Zkušenosti získané od roku 2007 ve všech tržních cyklech.'},
           {num:'500+',lab:'spokojených klientů',desc:'Od OSVČ po developer skupiny s miliardovými projekty.'},
           {num:'2007',lab:'rok vzniku',desc:'Jsme tu s vámi přes krize, covidová léta i boom trhu.'},
           {num:'50+',lab:'bankovních partnerů',desc:'Přístup k celému trhu, ne jen k jedné bance.'}
        ].map((item,i)=>`
        <div class="reveal delay-${i}" style="text-align:center;padding:1.5rem;background:var(--bg-card);border:1px solid var(--border-dark);border-radius:var(--radius-lg)">
          <div style="font-family:var(--font-heading);font-size:clamp(2.5rem,5vw,3.5rem);color:var(--accent-gold);line-height:1;margin-bottom:.4rem">${item.num}</div>
          <div style="font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.4rem">${item.lab}</div>
          <div style="font-size:.82rem;color:var(--text-muted-dark);line-height:1.5">${item.desc}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- REFERENCES STRIP -->
  <section class="section" style="background:var(--bg-surface)">
    <div class="container">
      <div class="section-header dark">
        <div>
          <div class="eyebrow light"><span class="num">06</span> Reference</div>
          <h2 class="display-lg" style="color:#fff">Co říkají <em>naši klienti.</em></h2>
        </div>
        <div class="sh-right"><p>Skutečné příběhy podnikatelů a SVJ, kterým jsme pomohli získat financování za výhodnějších podmínek, než nabízela banka.</p></div>
      </div>
      <div class="grid-3">
        ${REFERENCES.slice(0,3).map((r,i)=>`
        <div class="ref-card ref-card-dark reveal delay-${i}">
          <div class="ref-stars">${stars(r.rating)}</div>
          <p class="ref-text">${r.text}</p>
          <div class="ref-meta">
            <div class="ref-avatar">${r.initials}</div>
            <div>
              <div class="ref-name" style="color:#fff">${r.name}</div>
              <div class="ref-type">${r.type}</div>
            </div>
          </div>
        </div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:2rem">
        <a class="btn btn-outline" href="/reference">Všechny reference</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="cta-section">
    <div class="container">
      <h2>Potřebujete financování? Pojďme si promluvit.</h2>
      <p>Nezávazná konzultace je zdarma. Zjistěte, jak vám můžeme pomoci.</p>
      <a class="btn btn-gold btn-lg" href="/kontakt">Kontaktujte nás →</a>
    </div>
  </div>`;
}

/* ── SERVICES LIST ── */
function renderSluzby() {

  return `
  ${subpageHero([{href:'/',label:'Domů'},{href:'/sluzby',label:'Služby'}],'Co pro vás děláme.','Jeden tým. Přístup ke všem bankám. Výsledky, které mluví za vše.')}

  <section class="on-light" style="background:#FAF7F2;padding:0 0 6rem;border-top:1px solid #EDE5D8">
    <div class="container">

      <!-- Perex + stat row -->
      <div class="svc-intro-row reveal">
        <p style="font-size:1.1rem;color:#5a5560;line-height:1.75;margin:0">Od podnikatelských úvěrů přes hypotéky a financování SVJ až po správu majetku. Nezávisle, bez vazby na jednu banku.</p>
        <div class="svc-intro-stats">
          ${[['50+','bank. partnerů'],['500+','klientů'],['19+','let praxe']].map(([n,l])=>`
          <div style="text-align:right">
            <div style="font-family:var(--font-heading);font-size:2.5rem;color:var(--accent-gold);line-height:1">${n}</div>
            <div style="font-size:.78rem;color:#a09890;text-transform:uppercase;letter-spacing:.08em;margin-top:.3rem">${l}</div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Service rows — light variant -->
      <div class="svc-rows svc-rows-light">
        ${SERVICES.map((s,i)=>`
        <a class="svc-row svc-row-light reveal delay-${i%4}" href="/sluzby/${s.slug}">
          <div class="svc-row-num">${String(i+1).padStart(2,'0')}</div>
          <div class="svc-row-body">
            <div class="svc-row-name">${s.name}</div>
            <div class="svc-row-desc">${s.shortDesc}</div>
            <div class="svc-row-tags">${s.perks.slice(0,3).map(p=>`<span class="svc-row-tag">${p}</span>`).join('')}</div>
          </div>
          <div class="svc-row-arrow">↗</div>
        </a>`).join('')}
      </div>

    </div>
  </section>

  <!-- CTA — tmavá sekce na konci -->
  <section style="background:var(--bg-dark);padding:5rem 0">
    <div class="container">
      <div class="svc-cta-box reveal">
        <h2 class="display-lg" style="color:#fff;margin:0">Nenašli jste, co <em>hledáte?</em></h2>
        <p style="color:var(--text-muted-dark);font-size:1.05rem;max-width:500px;line-height:1.7;margin:0">Řešíme i nestandardní situace a projekty se specifickými podmínkami.</p>
        <a class="btn btn-gold btn-lg" href="/kontakt">Napište nám →</a>
      </div>
    </div>
  </section>`;
}

/* ── SERVICE DETAIL ── */
function renderSluzbaDetail(matches) {
  const slug = matches[1];
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return render404();

  return `
  ${subpageHero([{href:'/',label:'Domů'},{href:'/sluzby',label:'Služby'},{href:'/sluzby/'+slug,label:service.name}], service.hero, service.shortDesc)}

  <section class="on-light section" style="background:#FAF7F2;border-top:1px solid #EDE5D8;padding-top:3rem">
    <div class="container">

      ${service.img ? `<img src="${service.img}" alt="" class="detail-hero-img" width="1200" height="800" loading="lazy" decoding="async">` : ''}

      <div class="detail-grid">
        <div class="detail-body">
          <p class="detail-lead">${service.desc[0]}</p>

          <div class="detail-perks-grid">
            ${service.perks.map(p=>`
            <div class="detail-perk">
              <span class="detail-perk-check">✓</span>
              ${p}
            </div>`).join('')}
          </div>

          <h2>Jak to funguje</h2>
          <div class="detail-steps">
            ${service.steps.map((step,i)=>`
            <div class="detail-step">
              <div class="detail-step-num">${i+1}</div>
              <div class="detail-step-text">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
              </div>
            </div>`).join('')}
          </div>

          <h2>Časté otázky</h2>
          <div class="accordion">
            ${service.faq.map(item=>`
            <div class="accordion-item">
              <button class="accordion-header">${item.q}<span class="accordion-icon">+</span></button>
              <div class="accordion-body"><p>${item.a}</p></div>
            </div>`).join('')}
          </div>
        </div>

        <aside>
          <div class="sidebar-card">
            <h3>Mám zájem</h3>
            <form class="sidebar-form" id="sidebar-form" data-service="${service.name}" novalidate>
              <div class="form-group">
                <label for="sf-name" style="color:#1A1410">Jméno a příjmení</label>
                <input type="text" id="sf-name" name="name" placeholder="Jan Novák" autocomplete="name" required style="background:#FAF7F2;border-color:#D6CEBC;color:#1A1410">
                <span class="form-error-msg">Povinné pole</span>
              </div>
              <div class="form-group">
                <label for="sf-phone" style="color:#1A1410">Telefon</label>
                <input type="tel" id="sf-phone" name="phone" placeholder="+420 777 123 456" autocomplete="tel" required style="background:#FAF7F2;border-color:#D6CEBC;color:#1A1410">
                <span class="form-error-msg">Povinné pole</span>
              </div>
              <div class="form-group">
                <label for="sf-email" style="color:#1A1410">E-mail</label>
                <input type="email" id="sf-email" name="email" placeholder="jan@firma.cz" autocomplete="email" required style="background:#FAF7F2;border-color:#D6CEBC;color:#1A1410">
                <span class="form-error-msg">Zadejte platný e-mail</span>
              </div>
              <div class="form-group">
                <label for="sf-message" style="color:#1A1410">Zpráva</label>
                <textarea id="sf-message" name="message" rows="3" style="resize:vertical;background:#FAF7F2;border-color:#D6CEBC;color:#1A1410">Mám zájem o ${service.name}.</textarea>
                <span class="form-error-msg"></span>
              </div>
              <div class="form-hp" aria-hidden="true">
                <label for="sf-website">Nevyplňujte</label>
                <input type="text" id="sf-website" name="website" tabindex="-1" autocomplete="off">
              </div>
              <div class="form-checkbox" style="color:var(--text-muted)">
                <input type="checkbox" id="sf-gdpr" name="gdpr" required>
                <label for="sf-gdpr" style="color:var(--text-muted)">Souhlasím se <a href="/gdpr" style="color:var(--accent-blue)">zpracováním osobních údajů</a> za účelem odpovědi na poptávku.</label>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%">Odeslat poptávku</button>
            </form>
            <div class="form-success" id="sidebar-success">
              <div class="form-success-icon">✓</div>
              <h3>Odesláno!</h3>
              <p>Ozveme se vám do 24 hodin.</p>
            </div>
            <div class="sidebar-contact" style="border-top:1px solid #EDE5D8">
              <a href="tel:+420775939596" style="color:#1A1410">📞 +420 775 939 596</a>
              <a href="mailto:info@fin-set.cz" style="color:#1A1410">✉ info@fin-set.cz</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>`;
}

/* ── COMPARATOR ── */
function renderSrovnavac() {

  return `
  ${subpageHero([{href:'/',label:'Domů'},{href:'/srovnavac',label:'Srovnávač'}],'Srovnejte finanční produkty','Najděte nejlepší financování pro váš projekt na základě reálných nabídek.')}

  <div class="comp-panel">
    <div class="container">
      <div class="comp-panel-inner">
        <div class="comp-tabs" id="compTabs">
          <button class="comp-tab active" data-tab="uvery">Firemní úvěry</button>
          <button class="comp-tab" data-tab="hypoteky">Hypotéky</button>
          <button class="comp-tab" data-tab="refinancovani">Refinancování</button>
          <button class="comp-tab" data-tab="svj">SVJ / Obce</button>
        </div>
        <div class="comp-filter-group">
          <label>Výše: <span id="compAmountLabel" class="comp-amount-label">5 000 000 Kč</span></label>
          <input type="range" id="compAmount" min="500000" max="50000000" step="500000" value="5000000">
        </div>
        <div class="comp-filter-group">
          <label>Subjekt:</label>
          <select id="compSubjekt">
            <option value="all">Všechny</option>
            <option value="osvc">OSVČ</option>
            <option value="sro">s.r.o.</option>
            <option value="as">a.s.</option>
            <option value="svj">SVJ</option>
            <option value="obec">Obec</option>
          </select>
        </div>
        <button class="comp-reset" id="compReset">Resetovat filtry</button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="comp-grid" id="compGrid"></div>
  </div>`;
}

/* ── ABOUT ── */
function renderLinkedinFeed() {
  const fmt = (iso) => {
    const d = new Date(iso);
    const months = ['ledna','února','března','dubna','května','června','července','srpna','září','října','listopadu','prosince'];
    return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
  };
  return `<div class="li-grid">${LINKEDIN_POSTS.map(p => {
    const a = LINKEDIN_AUTHORS[p.author] || {};
    return `<a class="li-card" href="${p.url}" target="_blank" rel="noopener">
      <div class="li-head">
        <div class="li-avatar">${a.img ? `<img src="${a.img}" alt="" width="160" height="200" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:50%">` : (a.initials || '?')}</div>
        <div>
          <div class="li-author">${a.name || ''}</div>
          <div class="li-title">${a.title || ''}</div>
          <div class="li-date">${fmt(p.date)}</div>
        </div>
      </div>
      <div class="li-text">${p.text}</div>
      <div class="li-tags">${(p.tags||[]).map(t=>`<span class="li-tag">${t}</span>`).join('')}</div>
      <div class="li-foot">
        <span><span class="li-logo">in</span> &nbsp;Číst na LinkedIn</span>
        <span>→</span>
      </div>
    </a>`;
  }).join('')}</div>`;
}

function renderONas() {

  return `
  ${subpageHero([{href:'/',label:'Domů'},{href:'/o-nas',label:'O nás'}],'Jsme na vaší straně','V oboru od roku 2007. Kombinujeme praxi z bank i vlastního podnikání.')}

  <!-- STORY – split: image left, text right -->
  <section class="section" style="background:var(--bg-dark)">
    <div class="container">
      <div class="about-split-body reveal" style="max-width:780px;margin:0 auto;text-align:center">
          <div class="eyebrow light" style="justify-content:center"><span class="num">01</span> Náš příběh</div>
          <h2 class="display-lg" style="color:#fff;margin:1.25rem 0 1.5rem">Od bankovních lavic<br>k <em>vlastní praxi.</em></h2>
          <span class="gold-line" style="margin:0 auto"></span>
          <p style="color:var(--text-muted-dark);font-size:1.05rem;line-height:1.75;margin-top:1.5rem">
            Jsme tým finančních specialistů působících v oboru od roku 2007. Od roku 2017 se zaměřujeme
            především na úvěry pro firmy, obce a jednotlivce. Kombinujeme zkušenosti z bank
            s praxí vlastního podnikání — díky tomu rozumíme oběma stranám stolu a víme, co banka skutečně potřebuje slyšet.
          </p>
          <p style="color:var(--text-muted-dark);font-size:1.05rem;line-height:1.75;margin-top:1rem">
            Nepracujeme pro banku. Pracujeme pro vás — nezávisle, s jasnou provizí a bez skrytých poplatků.
          </p>
      </div>
    </div>
  </section>

  <!-- TIMELINE -->
  <section class="section" style="background:var(--bg-dark);padding-top:0">
    <div class="container">
      <div class="section-header dark" style="display:block;text-align:center;max-width:780px;margin:0 auto">
        <div class="reveal">
          <div class="eyebrow light" style="justify-content:center"><span class="num">02</span> Milníky</div>
          <h2 class="display-lg" style="color:#fff;margin-top:1.25rem">Naše <em>cesta.</em></h2>
        </div>
        <div class="reveal delay-1" style="margin-top:1.25rem"><p style="color:var(--text-muted-dark)">Od prvního bankovního schůzky v roce 2007 až k vlastní poradenské praxi s vlastními klienty.</p></div>
      </div>
      <div class="timeline">
        ${TIMELINE.map((item,i)=>`
        <div class="timeline-item reveal">
          <div class="timeline-left ${i%2===0?'':'empty'}">
            ${i%2===0?`<div class="timeline-year">${item.year}</div><div class="timeline-title">${item.title}</div><div class="timeline-desc">${item.desc}</div>`:''}
          </div>
          <div class="timeline-dot" style="margin:0 auto">●</div>
          <div class="timeline-right">
            ${i%2===1?`<div class="timeline-year">${item.year}</div><div class="timeline-title">${item.title}</div><div class="timeline-desc">${item.desc}</div>`:''}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- TEAM – editorial dark -->
  <section class="section" style="background:var(--bg-dark);border-top:1px solid var(--border-dark)">
    <div class="container">
      <div class="section-header dark" style="display:block;text-align:center;max-width:780px;margin:0 auto">
        <div class="reveal">
          <div class="eyebrow light" style="justify-content:center"><span class="num">03</span> Tým</div>
          <h2 class="display-lg" style="color:#fff;margin-top:1.25rem">Lidé za <em>fin-set.cz</em></h2>
        </div>
        <div class="reveal delay-1" style="margin-top:1.25rem"><p style="color:var(--text-muted-dark)">Tým specialistů s 35+ lety kombinované praxe v bankovnictví, hypotečním poradenství a komerčním pojištění.</p></div>
      </div>
      <div class="team-grid-editorial">
        <article class="team-card-editorial reveal">
          <div class="tce-img"><img src="/img/jan-klusak-vyrez.webp" alt="Jan Klusák" width="900" height="1236" loading="lazy" decoding="async" style="object-position:center top"></div>
          <div class="tce-overlay">
            <div class="tce-overlay-inner">
              <div class="eyebrow light"><span class="num">JK</span> Zakladatel</div>
              <h3 class="display-md" style="color:#fff;margin:1rem 0 .5rem">Jan Klusák</h3>
              <div style="color:var(--accent-gold);font-size:.95rem;margin-bottom:1.25rem">Senior poradce · 19 let v oboru</div>
              <p style="color:rgba(255,255,255,.85);line-height:1.7">V oboru financování od roku 2007. Specialista na úvěry pro firmy, SVJ a obce. Klienti oceňují jeho rychlé jednání, srozumitelnou komunikaci a schopnost najít řešení i tam, kde to v bance napoprvé nevyšlo. Dříve působil jako úvěrový specialista ve dvou velkých bankách, dnes vede tým nezávislého poradenství fin-set.cz.</p>
              <a class="btn btn-outline-blue btn-sm" style="margin-top:1.5rem" href="https://www.linkedin.com/in/honza-klusak/" target="_blank" rel="noopener" onclick="event.stopPropagation()">LinkedIn profil →</a>
            </div>
          </div>
          <div class="tce-caption">
            <div>
              <h3 class="tce-name">Jan Klusák</h3>
              <div class="tce-role">Zakladatel · Senior poradce</div>
            </div>
            <span class="tce-plus" aria-label="Zobrazit více">+</span>
          </div>
        </article>
        <article class="team-card-editorial reveal delay-1">
          <div class="tce-img"><img src="/img/david-sedlacek.webp" alt="David Sedláček" width="900" height="1064" loading="lazy" decoding="async"></div>
          <div class="tce-overlay">
            <div class="tce-overlay-inner">
              <div class="eyebrow light"><span class="num">DS</span> Zpracovatel úvěrů</div>
              <h3 class="display-md" style="color:#fff;margin:1rem 0 .5rem">David Sedláček</h3>
              <div style="color:var(--accent-gold);font-size:.95rem;margin-bottom:1.25rem">Zpracovatel úvěrů · Certifikovaný poradce ČNB</div>
              <p style="color:rgba(255,255,255,.85);line-height:1.7">Expert na hypoteční poradenství, refinancování a čerpání úvěrů pro SVJ. Vede klienty celým procesem od první kalkulace až po podpis smlouvy a následný servis. Certifikovaný poradce s registrací v ČNB, pracuje pod záštitou Broker Trust a.s.</p>
              <a class="btn btn-outline-blue btn-sm" style="margin-top:1.5rem" href="https://www.linkedin.com/in/david-sedl%C3%A1%C4%8Dek-85b77a18a/" target="_blank" rel="noopener" onclick="event.stopPropagation()">LinkedIn profil →</a>
            </div>
          </div>
          <div class="tce-caption">
            <div>
              <h3 class="tce-name">David Sedláček</h3>
              <div class="tce-role">Zpracovatel úvěrů</div>
            </div>
            <span class="tce-plus" aria-label="Zobrazit více">+</span>
          </div>
        </article>
        <article class="team-card-editorial reveal delay-2">
          <div class="tce-img"><img src="/img/marek-cifr.webp" alt="Marek Cifr" width="900" height="1350" loading="lazy" decoding="async"></div>
          <div class="tce-overlay">
            <div class="tce-overlay-inner">
              <div class="eyebrow light"><span class="num">MC</span> Specialista</div>
              <h3 class="display-md" style="color:#fff;margin:1rem 0 .5rem">Marek Cifr</h3>
              <div style="color:var(--accent-gold);font-size:.95rem;margin-bottom:1.25rem">Specialista na nemovitosti</div>
              <p style="color:rgba(255,255,255,.85);line-height:1.7">Pomáhá klientům fin-set.cz s nákupem, prodejem a investicemi do nemovitostí. Dříve vedl oddělení akvizic projektů u developera, dnes se zaměřuje na vyhledávání investičně zajímavých nemovitostí, kontrolu jejich stavu a vyjednávání podmínek. Spolupracuje s realitními investory, developery i klienty hledajícími kvalitní bydlení.</p>
            </div>
          </div>
          <div class="tce-caption">
            <div>
              <h3 class="tce-name">Marek Cifr</h3>
              <div class="tce-role">Specialista · Nemovitosti</div>
            </div>
            <span class="tce-plus" aria-label="Zobrazit více">+</span>
          </div>
        </article>
        <article class="team-card-editorial reveal delay-3">
          <div class="tce-img"><img src="/img/ales-muselik.webp" alt="Aleš Muselík" width="900" height="1353" loading="lazy" decoding="async"></div>
          <div class="tce-overlay">
            <div class="tce-overlay-inner">
              <div class="eyebrow light"><span class="num">AM</span> Specialista</div>
              <h3 class="display-md" style="color:#fff;margin:1rem 0 .5rem">Aleš Muselík</h3>
              <div style="color:var(--accent-gold);font-size:.95rem;margin-bottom:1.25rem">Specialista na komerční pojištění</div>
              <p style="color:rgba(255,255,255,.85);line-height:1.7">Stará se o pojistnou ochranu klientů fin-set.cz – pro firmy, podnikatele i organizace. Sestavuje komplexní pojistné programy zahrnující majetek, odpovědnost, přerušení provozu i kybernetická rizika. Spolupracuje s předními pojistiteli na českém trhu a navrhuje řešení šitá na míru reálné rizikové struktuře každého klienta.</p>
            </div>
          </div>
          <div class="tce-caption">
            <div>
              <h3 class="tce-name">Aleš Muselík</h3>
              <div class="tce-role">Specialista · Komerční pojištění</div>
            </div>
            <span class="tce-plus" aria-label="Zobrazit více">+</span>
          </div>
        </article>
        <article class="team-card-editorial reveal delay-4">
          <div class="tce-img"><img src="/img/jakub-trubac.webp" alt="Jakub Trubač" width="900" height="1335" loading="lazy" decoding="async"></div>
          <div class="tce-overlay">
            <div class="tce-overlay-inner">
              <div class="eyebrow light"><span class="num">JT</span> Specialista</div>
              <h3 class="display-md" style="color:#fff;margin:1rem 0 .5rem">Jakub Trubač</h3>
              <div style="color:var(--accent-gold);font-size:.95rem;margin-bottom:1.25rem">Senior specialista · Správa majetku &amp; investice</div>
              <p style="color:rgba(255,255,255,.85);line-height:1.7">Jakub je senior manažer ve HLAVA advisory, brněnské firmě zaměřené na správu majetku a investiční poradenství. Pro klienty fin-set.cz zajišťuje přesah do oblasti investic a wealth managementu – pomáhá propojit financování s dlouhodobou strategií ochrany a zhodnocení majetku.</p>
              <a href="https://www.linkedin.com/in/jakub-truba%C4%8D/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.5rem;color:var(--accent-gold);font-size:.88rem;font-weight:600;margin-top:.75rem;text-decoration:none">
                <span style="background:#0A66C2;border-radius:4px;padding:2px 6px;color:#fff;font-size:.75rem;font-weight:700">in</span> LinkedIn profil
              </a>
            </div>
          </div>
          <div class="tce-caption">
            <div>
              <h3 class="tce-name">Jakub Trubač</h3>
              <div class="tce-role">Specialista · Správa majetku</div>
            </div>
            <span class="tce-plus" aria-label="Zobrazit více">+</span>
          </div>
        </article>
      </div>
      <blockquote class="about-quote reveal">
        <div class="eyebrow light" style="justify-content:center"><span class="num">04</span> Náš přístup</div>
        <p>„Banky vám neřeknou, kde je problém. <em>My ano.</em>"</p>
      </blockquote>
    </div>
  </section>

  <!-- LINKEDIN FEED -->
  <section class="on-light section" style="background:linear-gradient(180deg,#f3f4f6 0%,#e5e7eb 100%);color:#1f2937">
    <div class="container">
      <div class="text-center" style="margin-bottom:1rem">
        <p class="section-label" style="color:#0A66C2">
          <span class="li-logo">in</span> &nbsp;Aktivita na LinkedIn
        </p>
        <h2 class="section-title" style="color:#111827">Co aktuálně sdílíme</h2>
        <p style="font-size:1rem;color:#4b5563;max-width:600px;margin:1rem auto 0">
          Sledujte naše příspěvky o úvěrech, hypotékách, sazbách a financování firem přímo na LinkedIn.
        </p>
      </div>
      ${renderLinkedinFeed()}
      <div class="text-center" style="margin-top:2.5rem">
        <a class="btn btn-primary" href="https://www.linkedin.com/in/honza-klusak/" target="_blank" rel="noopener">
          <span class="li-logo">in</span> &nbsp;Sledovat na LinkedIn
        </a>
      </div>
    </div>
  </section>

  <!-- VALUES -->
  <section class="section" style="background:var(--bg-dark)">
    <div class="container">
      <div class="text-center" style="margin-bottom:2.5rem">
        <p class="section-label">Hodnoty</p>
        <h2 class="section-title light">Na čem stavíme</h2>
      </div>
      <div class="grid-4">
        ${[{title:'Upřímnost',desc:'Říkáme pravdu, i když to není to, co chcete slyšet.'},
           {title:'Odbornost',desc:'Neustálé vzdělávání a sledování vývoje trhu.'},
           {title:'Partnerství',desc:'Váš úspěch je náš úspěch. Dlouhodobé vztahy.'},
           {title:'Výsledky',desc:'Hodnotíme se podle výsledků, ne podle počtu schůzek.'}
        ].map((v,i)=>`
        <div class="value-card reveal delay-${i}">
          <div class="value-num">${String(i+1).padStart(2,'0')}</div>
          <div class="value-title">${v.title}</div>
          <p class="value-desc">${v.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

`;
}

/* ── REFERENCES ── */
function renderReference() {

  return `
  ${subpageHero([{href:'/',label:'Domů'},{href:'/reference',label:'Reference'}],'Co o nás říkají klienti','Přečtěte si zkušenosti podnikatelů, SVJ a obcí, kterým jsme pomohli.')}

  <section class="section" style="background:var(--bg-dark)">
    <div class="container">
      <div class="grid-3">
        ${REFERENCES.map((r,i)=>`
        <div class="ref-card ref-card-dark reveal delay-${i%3}">
          <div class="ref-stars">${stars(r.rating)}</div>
          <p class="ref-text">"${r.text}"</p>
          <div class="ref-meta">
            <div class="ref-avatar">${r.initials}</div>
            <div>
              <div class="ref-name" style="color:#fff">${r.name}</div>
              <div class="ref-type">${r.type}</div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="cta-section">
    <div class="container">
      <h2>Chcete být mezi spokojenými klienty?</h2>
      <p>Kontaktujte nás a zjistěte, co pro vás můžeme udělat.</p>
      <a class="btn btn-gold btn-lg" href="/kontakt">Kontaktovat</a>
    </div>
  </div>`;
}

/* ── CONTACT ── */
function renderKontakt(m, search) {

  const params = new URLSearchParams(search || '');
  const preFill = params.get('produkt') ? `Mám zájem o produkt: ${params.get('produkt')}.` : '';

  return `
  ${subpageHero([{href:'/',label:'Domů'},{href:'/kontakt',label:'Kontakt'}],'Pojďme si promluvit.','Prvotní konzultace je zdarma a nezávazná.')}

  <section class="section" style="background:var(--bg-dark)">
    <div class="container">
      <div class="contact-grid">
        <!-- FORM -->
        <div>
          <form id="contact-form" novalidate>
            <div class="grid-2" style="gap:1rem">
              <div class="form-group">
                <label for="cf-name">Jméno a příjmení *</label>
                <input type="text" id="cf-name" name="name" placeholder="Jan Novák" autocomplete="name" required>
                <span class="form-error-msg">Povinné pole</span>
              </div>
              <div class="form-group">
                <label for="cf-email">E-mail *</label>
                <input type="email" id="cf-email" name="email" placeholder="jan@firma.cz" autocomplete="email" required>
                <span class="form-error-msg">Zadejte platný e-mail</span>
              </div>
            </div>
            <div class="grid-2" style="gap:1rem">
              <div class="form-group">
                <label for="cf-phone">Telefon *</label>
                <input type="tel" id="cf-phone" name="phone" placeholder="+420 777 123 456" autocomplete="tel" required>
                <span class="form-error-msg">Zadejte platný telefon</span>
              </div>
              <div class="form-group">
                <label for="cf-type">Typ poptávky</label>
                <select id="cf-type" name="type">
                  <option value="">Vyberte...</option>
                  <option>Firemní úvěr</option>
                  <option>Hypotéka / Investiční nemovitost</option>
                  <option>Refinancování</option>
                  <option>SVJ / Obec</option>
                  <option>Projektové financování</option>
                  <option>Jiné</option>
                </select>
                <span class="form-error-msg"></span>
              </div>
            </div>
            <div class="form-group">
              <label for="cf-message">Zpráva</label>
              <textarea id="cf-message" name="message" rows="5" placeholder="Popište váš záměr...">${preFill}</textarea>
              <span class="form-error-msg"></span>
            </div>
            <div class="form-hp" aria-hidden="true">
              <label for="cf-website">Nevyplňujte</label>
              <input type="text" id="cf-website" name="website" tabindex="-1" autocomplete="off">
            </div>
            <div class="form-checkbox">
              <input type="checkbox" id="gdpr" name="gdpr" required>
              <label for="gdpr">Souhlasím se zpracováním osobních údajů za účelem odpovězení na mou poptávku. <a href="/gdpr" style="color:var(--accent-blue)">Více informací</a></label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Odeslat poptávku →</button>
          </form>
          <div class="form-success" id="contact-success" style="background:var(--bg-card);border:1px solid var(--border-dark);border-radius:var(--radius-lg)">
            <div class="form-success-icon">✓</div>
            <h3>Poptávka odeslána!</h3>
            <p>Děkujeme za váš zájem o naše služby. Náš specialista vás bude kontaktovat telefonicky do 24 hodin.</p>
          </div>
        </div>

        <!-- INFO – editorial -->
        <div class="contact-info-panel">
          <div class="eyebrow light reveal"><span class="num">01</span> Kontakt</div>
          <h2 class="display-md reveal" style="color:#fff;margin:1rem 0 2rem">Jsme <em>nablízku.</em></h2>
          <span class="gold-line"></span>

          <div class="contact-line reveal" style="margin-top:2rem">
            <div class="cl-label">E-mail</div>
            <a class="cl-value" href="mailto:info@fin-set.cz">info@fin-set.cz</a>
          </div>
          <div class="contact-line reveal delay-1">
            <div class="cl-label">Telefon</div>
            <a class="cl-value" href="tel:+420775939596">+420 775 939 596</a>
          </div>
          <div class="contact-line reveal delay-2">
            <div class="cl-label">Sídlo</div>
            <div class="cl-value">Jan Klusák · IČO 76295958<br>Brno, Jihomoravský kraj</div>
          </div>
          <div class="contact-line reveal delay-3">
            <div class="cl-label">Pracovní doba</div>
            <div class="cl-value">
              <div>Po – Pá · 8:00 – 18:00</div>
              <div style="color:var(--text-muted-dark);font-size:.88rem;margin-top:.25rem">So – Ne · na domluvě</div>
            </div>
          </div>
        </div>
      </div>

      <!-- MAP -->
      <div class="contact-map reveal" style="margin-top:4rem">
        <div class="eyebrow light"><span class="num">02</span> Mapa sídla</div>
        <h2 class="display-md" style="color:#fff;margin:1rem 0 .75rem">Najdete nás v <em>Brně.</em></h2>
        <p style="color:var(--text-muted-dark);margin:0 0 2rem;font-size:1rem">Sídlo máme v Brně, ale pracujeme s klienty po celé České republice — osobně i online.</p>
        <div class="map-embed">
          <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=16.586%2C49.189%2C16.618%2C49.203&amp;layer=mapnik&amp;marker=49.1951%2C16.6068" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa sídla – Brno"></iframe>
          <a class="map-open" href="https://www.openstreetmap.org/?mlat=49.1951&amp;mlon=16.6068#map=15/49.1951/16.6068" target="_blank" rel="noopener">Otevřít mapu →</a>
        </div>
      </div>
    </div>
  </section>`;
}

/* ── 404 ── */
function renderGdpr() {
  return `
  ${subpageHero([{label:'Domů',href:'/'},{label:'Zpracování osobních údajů'}], 'Zpracování osobních údajů',
    'Jak nakládáme s údaji, které nám svěříte přes formulář, e-mail nebo telefon.', {num:'01', eyebrow:'GDPR'})}

  <section class="section on-light" style="background:#FAF7F2">
    <div class="container">
      <div class="legal-body">
        <p class="legal-lead">Osobní údaje zpracováváme podle nařízení (EU) 2016/679 (GDPR) a zákona č. 110/2019 Sb.
        Sbíráme jen to, co potřebujeme k tomu, abychom vám mohli odpovědět a připravit nabídku financování.</p>

        <h2>1. Kdo údaje zpracovává</h2>
        <p>Správcem je <strong>Jan Klusák</strong>, IČO 76295958, se sídlem v Brně, e-mail
        <a href="mailto:info@fin-set.cz">info@fin-set.cz</a>, telefon
        <a href="tel:+420775939596">+420 775 939 596</a>. Jako vázaný zástupce podle zákona
        č. 257/2016 Sb. působí pod společností Broker Trust, a.s., IČO 26439719.</p>

        <h2>2. Jaké údaje a odkud</h2>
        <p>Zpracováváme údaje, které nám sami předáte: jméno a příjmení, e-mail, telefon, typ poptávky
        a obsah zprávy. Při další spolupráci k nim přibývají údaje nutné pro posouzení úvěru
        (příjmy, závazky, údaje o nemovitosti) — vždy jen v rozsahu, který požaduje konkrétní banka.</p>

        <h2>3. Proč je zpracováváme</h2>
        <ul>
          <li><strong>Odpověď na poptávku a jednání o smlouvě</strong> — čl. 6 odst. 1 písm. b) GDPR.</li>
          <li><strong>Souhlas</strong> udělený odesláním formuláře, pokud jde o nezávaznou poptávku — čl. 6 odst. 1 písm. a) GDPR. Souhlas můžete kdykoli odvolat.</li>
          <li><strong>Plnění zákonných povinností</strong> — evidence podle zákona o spotřebitelském úvěru, AML a účetních předpisů — čl. 6 odst. 1 písm. c) GDPR.</li>
        </ul>

        <h2>4. Jak dlouho je uchováváme</h2>
        <p>Nevyužitou poptávku mažeme do 12 měsíců od posledního kontaktu. Pokud dojde k uzavření
        smlouvy, uchováváme dokumentaci po dobu stanovenou zákonem (zpravidla 10 let).</p>

        <h2>5. Komu je předáváme</h2>
        <p>Údaje předáváme pouze tam, kam je to nutné k vyřízení vaší poptávky: bankám a finančním
        institucím, které pro vás oslovujeme (vždy s vaším vědomím), společnosti Broker Trust, a.s.
        jako obchodníkovi, u něhož jsme registrováni, a poskytovatelům technických služeb
        (uložení poptávky a upozornění e-mailem – Google, provoz webu – Vercel). Neprodáváme je nikomu pro marketing.</p>

        <h2>6. Co web sbírá sám</h2>
        <p>Web nepoužívá analytické ani reklamní cookies a nesleduje vaše chování. Načítá ale
        písma ze služby Google Fonts a mapu z OpenStreetMap — těmto službám se přitom předá
        vaše IP adresa.</p>

        <h2>7. Vaše práva</h2>
        <p>Máte právo na přístup ke svým údajům, jejich opravu nebo výmaz, na omezení zpracování,
        na přenositelnost, právo vznést námitku a odvolat souhlas. Stačí napsat na
        <a href="mailto:info@fin-set.cz">info@fin-set.cz</a> — odpovíme do 30 dnů. Pokud s naším
        postupem nebudete spokojeni, můžete se obrátit na Úřad pro ochranu osobních údajů,
        Pplk. Sochora 27, Praha 7.</p>

        <p class="legal-updated">Účinné od 1. 1. 2026.</p>
      </div>
    </div>
  </section>`;
}

function render404() {
  return `
  <div class="not-found">
    <h1>404</h1>
    <h2>Stránka nenalezena</h2>
    <p>Stránka, kterou hledáte, neexistuje.</p>
    <a class="btn btn-primary" href="/">← Zpět na hlavní stránku</a>
  </div>`;
}

/* ══════════════════════════════════════════
   ROUTER
══════════════════════════════════════════ */
const SITE_URL = 'https://fin-set.cz';

const ROUTES = [
  { pattern: /^\/$/, render: (m,s) => renderHome(m,s),
    title: 'fin-set.cz | Finanční poradenství pro podnikatele',
    desc: 'Nezávislé finanční poradenství pro podnikatele. Firemní úvěry, projektové financování, refinancování. Sídlo Brno, působnost po celé ČR.' },
  { pattern: /^\/sluzby$/, render: (m,s) => renderSluzby(m,s),
    title: 'Služby – firemní úvěry, hypotéky a financování SVJ | fin-set.cz',
    desc: 'Od podnikatelských úvěrů přes investiční hypotéky až po financování SVJ a obcí. Nezávisle, bez vazby na jednu banku.' },
  { pattern: /^\/sluzby\/([\w-]+)$/, render: (m,s) => renderSluzbaDetail(m,s),
    meta: (m) => {
      const svc = SERVICES.find(x => x.slug === m[1]);
      if (!svc) return null;
      return { title: svc.name + ' | fin-set.cz', desc: svc.shortDesc };
    } },
  { pattern: /^\/srovnavac$/, render: (m,s) => renderSrovnavac(m,s),
    title: 'Srovnání úvěrů a sazeb | fin-set.cz',
    desc: 'Orientační srovnání nabídek firemních úvěrů a hypoték podle výše financování a typu subjektu.' },
  { pattern: /^\/o-nas$/, render: (m,s) => renderONas(m,s),
    title: 'O nás – tým finančních specialistů z Brna | fin-set.cz',
    desc: 'V oboru od roku 2007. Kombinujeme praxi z bank i vlastního podnikání – víme, co banka potřebuje slyšet.' },
  { pattern: /^\/reference$/, render: (m,s) => renderReference(m,s),
    title: 'Reference klientů | fin-set.cz',
    desc: 'Skutečné příběhy podnikatelů a SVJ, kterým jsme pomohli získat financování za výhodnějších podmínek.' },
  { pattern: /^\/kontakt$/, render: (m,s) => renderKontakt(m,s),
    title: 'Kontakt – nezávazná konzultace zdarma | fin-set.cz',
    desc: 'Napište nám nebo zavolejte na +420 775 939 596. Sídlíme v Brně, pracujeme s klienty po celé ČR.' },
  { pattern: /^\/gdpr$/, render: (m,s) => renderGdpr(m,s),
    title: 'Zpracování osobních údajů | fin-set.cz',
    desc: 'Informace o zpracování osobních údajů podle GDPR – správce, rozsah, účel, doba uchování a práva subjektu údajů.' }
];

/* Nastaví title, description, canonical a OG tagy podle aktuální routy. */
function updateMeta(pathname, route, m) {
  let meta = null;
  if (route) meta = route.meta ? route.meta(m) : { title: route.title, desc: route.desc };
  if (!meta) meta = { title: 'Stránka nenalezena | fin-set.cz', desc: 'Požadovaná stránka neexistuje. Přejděte na úvodní stránku fin-set.cz.' };

  document.title = meta.title;
  const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
  set('meta[name="description"]', 'content', meta.desc);
  set('meta[property="og:title"]', 'content', meta.title);
  set('meta[property="og:description"]', 'content', meta.desc);
  set('meta[property="og:url"]', 'content', SITE_URL + pathname);
  set('link[rel="canonical"]', 'href', SITE_URL + (pathname === '/' ? '/' : pathname));
  set('meta[name="robots"]', 'content', route ? 'index,follow' : 'noindex,follow');
}

// Hash-based routing — works in any environment (file://, preview sandboxes, subpaths)
function getCurrentPath() {
  // Zpětná kompatibilita se starými odkazy typu /#/sluzby
  const h = (location.hash || '').replace(/^#/, '');
  if (h.startsWith('/')) {
    history.replaceState({}, '', h);
    return h;
  }
  return (location.pathname || '/') + (location.search || '');
}

function navigate(path, opts = {}) {
  if (!path) path = '/';
  if (path.startsWith('#')) path = path.slice(1);
  if (path.includes('://')) return;          // externí odkaz sem nepatří
  const current = location.pathname + location.search;
  if (current === path) { dispatch(path); return; }
  history.pushState({}, '', path);
  dispatch(path);
}

function dispatch(path, opts = {}) {
  // Odřízne query string a koncové lomítko před porovnáním s routou
  const queryIdx = path.indexOf('?');
  const search = queryIdx >= 0 ? path.slice(queryIdx) : '';
  let pathname = (queryIdx >= 0 ? path.slice(0, queryIdx) : path).replace(/\/+$/, '') || '/';

  const app = document.getElementById('app');
  if (!app) return;

  let matched = null, match = null;
  for (const route of ROUTES) {
    const m = pathname.match(route.pattern);
    if (m) { matched = route; match = m; break; }
  }
  updateMeta(pathname, matched, match);

  // Stránka doručená ze serveru už obsah má – jen na ni navěsíme chování
  if (opts.prerendered) {
    initPage(pathname, { keepScroll: true });
    return;
  }

  app.classList.add('page-exit');

  setTimeout(() => {
    let html = render404();
    if (matched) {
      try { html = matched.render(match, search); } catch(e) { console.error(e); html = render404(); }
    }
    app.innerHTML = html;
    app.classList.remove('page-exit');
    app.classList.add('page-enter');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      app.classList.remove('page-enter');
      initPage(pathname);
    }));
  }, 150);
}

/* Navěsí interakce na právě zobrazenou stránku. */
function initPage(pathname, opts = {}) {
  initReveal();
  initCounters();
  initAccordions();
  initForms();
  initTeamCards();
  if (document.getElementById('compGrid')) initComp();
  updateNavActive(pathname);
  if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: 'instant' });
}

window.addEventListener('popstate', () => dispatch(location.pathname + location.search));
window.addEventListener('hashchange', () => {
  const h = (location.hash || '').replace(/^#/, '');
  if (h.startsWith('/')) { history.replaceState({}, '', h); dispatch(h); }
});

// Global click delegation – catches ALL internal links regardless of how they were injected
document.addEventListener('click', function(e) {
  const a = e.target.closest('a[href]');
  if (!a) return;
  let href = a.getAttribute('href');
  if (!href) return;
  // Skip external, mailto, tel, hash-only (to same page)
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) return;
  // Accept both "/sluzby" and "#/sluzby"
  if (href.startsWith('#')) href = href.slice(1);
  if (!href.startsWith('/')) return;
  e.preventDefault();
  e.stopPropagation();
  closeMobileMenu();
  navigate(href);
});

/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
function updateNavActive(path) {
  document.querySelectorAll('#nav .nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    const isActive = href === path || (href !== '/' && path.startsWith(href));
    a.classList.toggle('active', isActive);
  });
}

function closeMobileMenu() {
  const hb = document.getElementById('hamburger');
  hb.classList.remove('open');
  hb.setAttribute('aria-expanded', 'false');
  document.getElementById('mobileDrawer').classList.remove('open');
  const bd = document.getElementById('navBackdrop');
  if (bd) bd.classList.remove('open');
  document.body.classList.remove('nav-open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════
   COMPARATOR
══════════════════════════════════════════ */
let compState = { tab: 'uvery', amount: 5000000, subjekt: 'all' };

function renderCompWithUI() {
  const subj = document.getElementById('compSubjekt');
  if (subj) compState.subjekt = subj.value;
  const amt = document.getElementById('compAmount');
  if (amt) {
    compState.amount = parseInt(amt.value);
    const label = document.getElementById('compAmountLabel');
    if (label) label.textContent = new Intl.NumberFormat('cs-CZ').format(compState.amount) + ' Kč';
  }
  renderCompResults();
}

function renderCompResults() {
  const subjekt = document.getElementById('compSubjekt');
  if (subjekt) compState.subjekt = subjekt.value;

  const filtered = PRODUCTS.filter(p => {
    if (p.tab !== compState.tab) return false;
    if (compState.subjekt !== 'all' && !p.subjekt.includes(compState.subjekt)) return false;
    return true;
  });

  const grid = document.getElementById('compGrid');
  if (!grid) return;

  if (!filtered.length) {
    grid.innerHTML = `<div class="comp-empty">Žádné produkty neodpovídají zvoleným filtrům.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
  <div class="comp-card${p.featured?' featured':''}">
    <div class="comp-card-header">
      <div>
        <div class="comp-bank">${p.bank}</div>
        <div class="comp-name">${p.name}</div>
      </div>
      ${p.featured ? '<span class="badge-featured">Doporučujeme</span>' : ''}
    </div>
    <div class="comp-rates">
      <div class="comp-rate-item">
        <div class="comp-rate-val">${p.rate} %</div>
        <div class="comp-rate-label">Úroková sazba</div>
      </div>
      <div class="comp-rate-item">
        <div class="comp-rate-val" style="font-size:1.25rem;color:var(--text-muted-dark)">${p.rpsn} %</div>
        <div class="comp-rate-label">RPSN</div>
      </div>
    </div>
    <div class="comp-max">Max. výše: <strong>${p.maxAmount}</strong></div>
    <div class="comp-perks">
      ${p.perks.map(perk => `<div class="comp-perk">${perk}</div>`).join('')}
    </div>
    <a class="btn btn-primary" style="width:100%;justify-content:center" href="/kontakt?produkt=${encodeURIComponent(p.name)}">Chci tuto nabídku →</a>
  </div>`).join('');
}

function initComp() {
  // Tabs
  document.querySelectorAll('.comp-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.comp-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      compState.tab = btn.dataset.tab;
      renderCompWithUI();
    });
  });
  // Amount slider
  const amt = document.getElementById('compAmount');
  if (amt) amt.addEventListener('input', renderCompWithUI);
  // Subject dropdown
  const subj = document.getElementById('compSubjekt');
  if (subj) subj.addEventListener('change', renderCompWithUI);
  // Reset
  const reset = document.getElementById('compReset');
  if (reset) reset.addEventListener('click', () => {
    compState = { tab: 'uvery', amount: 5000000, subjekt: 'all' };
    if (amt) amt.value = 5000000;
    if (subj) subj.value = 'all';
    document.querySelectorAll('.comp-tab').forEach((b,i) => b.classList.toggle('active', i===0));
    const label = document.getElementById('compAmountLabel');
    if (label) label.textContent = '5 000 000 Kč';
    renderCompResults();
  });
  // Initial render
  compState = { tab: 'uvery', amount: 5000000, subjekt: 'all' };
  renderCompResults();
}

/* ══════════════════════════════════════════
   FORMS
══════════════════════════════════════════ */
function validateField(el) {
  const group = el.closest('.form-group');
  if (!group) return true;
  let err = '';
  if (el.required && !el.value.trim()) err = 'Povinné pole';
  else if (el.type === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) err = 'Zadejte platný e-mail';
  else if (el.type === 'tel' && el.value && !/^\+?[\d\s\-]{9,15}$/.test(el.value)) err = 'Zadejte platný telefon';
  group.classList.toggle('error', !!err);
  const errEl = group.querySelector('.form-error-msg');
  if (errEl) errEl.textContent = err;
  return !err;
}

/* ── Odeslání poptávky ───────────────────────────────────
   Formulář posílá data na /api/poptavka (Vercel funkce v api/poptavka.js),
   která je uloží do Google Tabulky „Poptávky fin-set.cz“ a pošle upozornění
   na info@fin-set.cz (přes Google Apps Script, viz zdroj/apps-script-poptavky.gs).
──────────────────────────────────────────────────────── */
function sendContactEmails(data) {
  const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), 20000) : null;
  return fetch('/api/poptavka', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, gdpr: true, page: location.pathname }),
    signal: ctrl ? ctrl.signal : undefined,
  })
    .then(r => r.json().catch(() => ({})).then(j => {
      if (!r.ok || !j.ok) throw new Error('Server vrátil ' + r.status + (j.error ? ' (' + j.error + ')' : ''));
      return j;
    }))
    .finally(() => { if (timer) clearTimeout(timer); });
}

function initForms() {
  wireForm(document.getElementById('contact-form'), 'contact-success');
  wireForm(document.getElementById('sidebar-form'), 'sidebar-success');
}

/* Společná logika obou formulářů: validace → odeslání → stav. */
function wireForm(form, successId) {
  if (!form || form.dataset.wired === 'true') return;
  form.dataset.wired = 'true';

  form.querySelectorAll('input,select,textarea').forEach(el => {
    el.addEventListener('blur', () => validateField(el));
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('input[required],select[required],textarea[required]').forEach(el => {
      if (el.type === 'checkbox') return;
      if (!validateField(el)) valid = false;
    });

    const gdpr = form.querySelector('input[name=gdpr]');
    if (gdpr) {
      const box = gdpr.closest('.form-checkbox');
      const ok = gdpr.checked;
      if (box) {
        box.classList.toggle('invalid', !ok);
        let msg = box.querySelector('.form-checkbox-msg');
        if (!ok && !msg) {
          msg = document.createElement('div');
          msg.className = 'form-checkbox-msg';
          msg.setAttribute('role', 'alert');
          msg.textContent = 'Bez souhlasu vám nemůžeme odpovědět.';
          box.appendChild(msg);
        } else if (ok && msg) msg.remove();
      }
      if (!ok) { valid = false; gdpr.focus(); }
    }
    if (!valid) return;

    // Honeypot – roboti vyplní skryté pole, lidé ne
    const hp = form.querySelector('input[name=website]');
    if (hp && hp.value) { showFormSuccess(form, successId); return; }

    const btn = form.querySelector('button[type=submit]');
    const btnLabel = btn ? btn.textContent : '';
    if (btn) { btn.textContent = 'Odesílám…'; btn.disabled = true; }
    form.querySelectorAll('.form-fail').forEach(el => el.remove());

    const data = {
      name:    form.querySelector('[name=name]')?.value.trim()  || '',
      email:   form.querySelector('[name=email]')?.value.trim() || '',
      phone:   form.querySelector('[name=phone]')?.value.trim() || '',
      type:    form.querySelector('[name=type]')?.value || form.dataset.service || '',
      message: form.querySelector('[name=message]')?.value.trim() || '',
    };

    sendContactEmails(data)
      .then(() => showFormSuccess(form, successId))
      .catch(err => {
        console.error('[fin-set] Odeslání poptávky selhalo:', err);
        if (btn) { btn.textContent = btnLabel; btn.disabled = false; }
        showFormFailure(form, data);
      });
  });
}

function showFormSuccess(form, successId) {
  form.style.display = 'none';
  const succ = document.getElementById(successId);
  if (succ) { succ.style.display = 'block'; succ.setAttribute('tabindex','-1'); succ.focus(); }
}

/* Když odeslání selže, nabídneme rovnou telefon, e-mail a předvyplněnou zprávu. */
function showFormFailure(form, data) {
  const subject = encodeURIComponent('Poptávka z webu – ' + (data.name || 'bez jména'));
  const body = encodeURIComponent(
    'Jméno: ' + data.name + '\nE-mail: ' + data.email + '\nTelefon: ' + data.phone +
    '\nTyp poptávky: ' + (data.type || '—') + '\n\n' + (data.message || '')
  );
  const box = document.createElement('div');
  box.className = 'form-fail';
  box.setAttribute('role', 'alert');
  box.innerHTML =
    '<strong>Odeslání se nepovedlo.</strong> Omlouváme se – ozvěte se nám prosím přímo: ' +
    '<a href="tel:+420775939596">+420 775 939 596</a> nebo ' +
    '<a href="mailto:info@fin-set.cz?subject=' + subject + '&body=' + body + '">info@fin-set.cz</a>' +
    ' (odkaz otevře e-mail s vyplněnými údaji).';
  form.appendChild(box);
  box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* Karty týmu – rozbalení klávesnicí i myší. */
function initTeamCards() {
  document.querySelectorAll('.team-card-editorial').forEach(card => {
    if (card.dataset.wired === 'true') return;
    card.dataset.wired = 'true';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');
    const toggle = () => {
      const open = card.classList.toggle('open');
      card.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    card.addEventListener('click', e => { if (!e.target.closest('a')) toggle(); });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
let revealObserver = null;
function initReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ══════════════════════════════════════════
   COUNTERS
══════════════════════════════════════════ */
function initCounters() {
  const els = document.querySelectorAll('[data-counter]');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   ACCORDION
══════════════════════════════════════════ */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const parent = item.closest('.accordion');
      parent.querySelectorAll('.accordion-item').forEach(i => i !== item && i.classList.remove('open'));
      item.classList.toggle('open');
    });
  });
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('navBackdrop');
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.classList.toggle('open', open);
    if (backdrop) backdrop.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  if (backdrop) backdrop.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileMenu(); });

  // Route – reálné URL přes History API
  const app = document.getElementById('app');
  const prerendered = app && app.dataset.prerendered === 'true';
  dispatch(getCurrentPath(), { prerendered });
  if (prerendered) delete app.dataset.prerendered;
});