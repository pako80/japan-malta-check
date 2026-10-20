// Builds the guide pages (English at /<slug>.html, Maltese at /mt/<slug>.html) from guides.js,
// and rewrites sitemap.xml for the whole site. Run after build-mt.js:
//   node build-mt.js && node build-guides.js
const fs = require('fs');
const guides = require('./guides.js');

const BASE = 'https://japanmaltacheck.info';
const ADSENSE = 'ca-pub-2401669527240130';
const ECERT = 'https://ecert.jenesis-it.com/odo';
const TM = 'https://www.transport.gov.mt/news/how-to-check-if-your-car-has-been-tampered-with-5644';

const UI = {
  en: {
    lang: 'en', locale: 'en_GB', prefix: '', home: './', other: 'mt', brandAlt: 'JapanMaltaCheck home',
    privacy: 'Privacy policy', back: '← Back to the guide', related: 'More guides', ad: 'Advertisement',
    foot: 'JapanMaltaCheck · Free guide for Maltese car buyers',
    links: {
      home: 'home page', jevic: 'our guide to checking mileage on JEVIC', auction: 'guide to Japanese auction sheets',
      tampered: 'what to do if your car’s mileage was tampered with', faq: 'FAQ',
      ecert: 'JEVIC e-certificate page', tm: 'Transport Malta’s page on checking for tampering'
    }
  },
  mt: {
    lang: 'mt', locale: 'mt_MT', prefix: '../', home: './', other: 'en', brandAlt: 'JapanMaltaCheck – paġna prinċipali',
    privacy: 'Politika tal-privatezza', back: '← Lura għall-gwida', related: 'Aktar gwidi', ad: 'Riklam',
    foot: 'Kontroll tal-Kilometraġġ · Gwida b’xejn għax-xerrejja Maltin tal-karozzi',
    links: {
      home: 'paġna prinċipali', jevic: 'il-gwida tagħna dwar kif tiċċekkja l-kilometraġġ mal-JEVIC', auction: 'gwida dwar il-folja tal-irkant Ġappuniża',
      tampered: 'x’għandek tagħmel jekk il-kilometraġġ tal-karozza tiegħek ġie mmanipulat', faq: 'mistoqsijiet frekwenti',
      ecert: 'paġna tal-e-ċertifikat tal-JEVIC', tm: 'il-paġna ta’ Transport Malta dwar kif tiċċekkja'
    }
  }
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugs = { jevic: 'jevic-check-malta', auction: 'auction-sheet-japanese-car', tampered: 'tampered-mileage-malta', faq: 'faq-japanese-car-mileage-malta' };

function fill(text, ui) {
  return text.replace(/\{(\w+)\}/g, (m, k) => {
    const label = ui.links[k];
    if (!label) throw new Error('Unknown token ' + m);
    if (k === 'ecert') return `<a href="${ECERT}" target="_blank" rel="noopener">${label}</a>`;
    if (k === 'tm') return `<a href="${TM}" target="_blank" rel="noopener">${label}</a>`;
    if (k === 'home') return `<a href="${ui.home}">${label}</a>`;
    return `<a href="${slugs[k]}.html">${label}</a>`;
  });
}

function page(g, code) {
  const ui = UI[code], c = g[code];
  const path = code === 'en' ? `/${g.slug}.html` : `/mt/${g.slug}.html`;
  const enPath = `/${g.slug}.html`, mtPath = `/mt/${g.slug}.html`;
  const p = ui.prefix;

  let body = '';
  for (const s of c.sections || []) {
    body += `    <h2>${esc(s.h)}</h2>\n`;
    (s.p || []).forEach(t => body += `    <p>${fill(t, ui)}</p>\n`);
    if (s.ul) body += `    <ul class="plain">\n${s.ul.map(t => `      <li>${fill(t, ui)}</li>`).join('\n')}\n    </ul>\n`;
    if (s.ol) body += `    <ol class="plain">\n${s.ol.map(t => `      <li>${fill(t, ui)}</li>`).join('\n')}\n    </ol>\n`;
  }
  if (c.faq) c.faq.forEach(([q, a]) => body += `    <h2>${esc(q)}</h2>\n    <p>${fill(a, ui)}</p>\n`);

  const related = guides.filter(x => x.slug !== g.slug)
    .map(x => `<li><a href="${x.slug}.html">${esc(x[code].h1)}</a></li>`).join('\n      ');

  const ld = c.faq
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: ui.lang, name: c.h1,
        mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/\{\w+\}/g, '').replace(/\s+/g, ' ').trim() } })) }
    : { '@context': 'https://schema.org', '@type': 'Article', headline: c.h1, inLanguage: ui.lang, description: c.desc, mainEntityOfPage: BASE + path };

  const otherHref = code === 'en' ? `mt/${g.slug}.html` : `../${g.slug}.html`;
  const langLinks = code === 'en'
    ? `<a href="${g.slug}.html" hreflang="en" lang="en" aria-current="true">EN</a>\n        <a href="mt/${g.slug}.html" hreflang="mt" lang="mt">MT</a>`
    : `<a href="../${g.slug}.html" hreflang="en" lang="en">EN</a>\n        <a href="${g.slug}.html" hreflang="mt" lang="mt" aria-current="true">MT</a>`;

  return `<!doctype html>
<html lang="${ui.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.desc)}">
<link rel="canonical" href="${BASE}${path}">
<link rel="alternate" hreflang="en" href="${BASE}${enPath}">
<link rel="alternate" hreflang="mt" href="${BASE}${mtPath}">
<link rel="alternate" hreflang="x-default" href="${BASE}${enPath}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="JapanMaltaCheck">
<meta property="og:locale" content="${ui.locale}">
<meta property="og:url" content="${BASE}${path}">
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.desc)}">
<meta property="og:image" content="${BASE}/compare-mileage-documents.webp">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<link rel="icon" href="${p}favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" href="${p}favicon-192.png" sizes="192x192">
<link rel="apple-touch-icon" href="${p}apple-touch-icon.png">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE}"
     crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p}styles.css">
</head>
<body data-own-meta>

<header class="top">
  <div class="wrap top-inner">
    <a class="brand" href="${ui.home}" aria-label="${esc(ui.brandAlt)}">
      <img src="${p}logo.svg" alt="JMC" class="logo" width="282" height="29">
    </a>
    <div class="top-right">
      <div class="lang" role="group" aria-label="Language">
        ${langLinks}
      </div>
    </div>
  </div>
</header>

<main>
<article class="sec">
  <div class="wrap narrow policy">
    <h1>${esc(c.h1)}</h1>
    <p class="lead">${esc(c.intro)}</p>
${body}
    <aside class="ad-slot" data-slot="a" hidden aria-label="${esc(ui.ad)}"><span class="ad-label">${esc(ui.ad)}</span></aside>

    <h2>${esc(ui.related)}</h2>
    <ul class="plain">
      ${related}
    </ul>
    <p><a class="btn" href="${ui.home}">${esc(ui.back)}</a></p>
  </div>
</article>
</main>

<footer class="foot"><div class="wrap foot-inner"><span>${esc(ui.foot)}</span> <a href="privacy.html">${esc(ui.privacy)}</a></div></footer>

<script src="${p}ads.js"></script>
</body>
</html>
`;
}

fs.mkdirSync('mt', { recursive: true });
for (const g of guides) {
  fs.writeFileSync(`${g.slug}.html`, page(g, 'en'));
  fs.writeFileSync(`mt/${g.slug}.html`, page(g, 'mt'));
  console.log('built', g.slug);
}

// sitemap for the whole site
const pairs = [['/', '/mt/'], ['/privacy.html', '/mt/privacy.html'], ...guides.map(g => [`/${g.slug}.html`, `/mt/${g.slug}.html`])];
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for (const [en, mt] of pairs) {
  for (const loc of [en, mt]) {
    xml += `  <url>\n    <loc>${BASE}${loc}</loc>\n    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${en}"/>\n    <xhtml:link rel="alternate" hreflang="mt" href="${BASE}${mt}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${en}"/>\n  </url>\n`;
  }
}
xml += '</urlset>\n';
fs.writeFileSync('sitemap.xml', xml);
console.log('sitemap.xml:', pairs.length * 2, 'urls');
