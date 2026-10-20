// Builds the static Maltese pages (mt/index.html, mt/privacy.html) from the English pages
// and the Maltese strings in i18n.js. Run after editing index.html, privacy.html or i18n.js:
//   node build-mt.js
const fs = require('fs');
const path = require('path');

const BASE = 'https://japan-malta-check.pages.dev';
const src = fs.readFileSync('i18n.js', 'utf8');
const start = src.indexOf('var MT = {');
const end = src.indexOf('\n  };', start);
const MT = new Function('return ' + src.slice(start + 'var MT = '.length, end + 4))();

function build(file, opts) {
  let h = fs.readFileSync(file, 'utf8');
  const missing = new Set();

  h = h.replace('<html lang="en">', '<html lang="mt">');

  // text content: <tag ... data-i18n="key" ...>...</tag>
  h = h.replace(/<(\w+)([^>]*?)data-i18n="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g, (m, tag, a, key, b, inner) => {
    if (MT[key] === undefined) { missing.add(key); return m; }
    return `<${tag}${a}data-i18n="${key}"${b}>${MT[key]}</${tag}>`;
  });

  // alt text
  h = h.replace(/<img([^>]*?)alt="[^"]*"([^>]*?)data-i18n-alt="([^"]+)"([^>]*)>/g, (m, a, b, key, c) => {
    if (MT[key] === undefined) { missing.add(key); return m; }
    return `<img${a}alt="${MT[key].replace(/"/g, '&quot;')}"${b}data-i18n-alt="${key}"${c}>`;
  });

  // asset paths now live one folder up
  h = h.replace(/(src|href)="(?!https?:|#|\.\/|mailto:)([^"]+\.(?:css|js|svg|png|ico|webp|txt))"/g, '$1="../$2"');

  // language links
  h = h.replace(/<div class="lang"[\s\S]*?<\/div>/, opts.langLinks);

  // head: title, description, canonical, alternates, social, schema
  if (opts.title) h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${opts.title}</title>`);
  if (opts.desc) h = h.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${opts.desc}">`);
  h = h.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${BASE}${opts.path}">`);
  h = h.replace('og:locale" content="en_GB"', 'og:locale" content="mt_MT"');
  h = h.replace(/(og:url" content=")[^"]*"/, `$1${BASE}${opts.path}"`);
  if (opts.title) h = h.replace(/(og:title" content=")[^"]*"/, `$1${opts.title}"`);
  if (opts.desc) h = h.replace(/(og:description" content=")[^"]*"/, `$1${opts.desc}"`);
  h = h.replace('"inLanguage":"en"', '"inLanguage":"mt"').replace(/("description":")[^"]*"/, `$1${opts.desc || ''}"`);
  h = h.replace(/(og:image" content="[^"]*")/, '$1'); // image URLs are absolute already

  fs.mkdirSync('mt', { recursive: true });
  fs.writeFileSync(path.join('mt', file), h);
  console.log(file, '->', path.join('mt', file), missing.size ? 'no Maltese text for: ' + [...missing].join(', ') : 'ok');
}

build('index.html', {
  path: '/mt/',
  title: MT['meta.title'],
  desc: MT['meta.desc'],
  langLinks: `<div class="lang" role="group" aria-label="Language">
        <a href="../" hreflang="en" lang="en">EN</a>
        <a href="./" hreflang="mt" lang="mt" aria-current="true">MT</a>
      </div>`
});
build('privacy.html', {
  path: '/mt/privacy.html',
  title: 'Politika tal-privatezza – JapanMaltaCheck',
  desc: 'Kif dan is-sit jittratta d-data, il-cookies u r-riklamar tiegħek.',
  langLinks: `<div class="lang" role="group" aria-label="Language">
        <a href="../privacy.html" hreflang="en" lang="en">EN</a>
        <a href="privacy.html" hreflang="mt" lang="mt" aria-current="true">MT</a>
      </div>`
});
