// Generates the three QR codes for the exhibition — one per document, pointing
// at the German pages, which is where a visitor in Aarau starts. The language
// switcher on each page covers the rest, so three codes are enough.
//
//   node site/qr.js                       # uses SITE_BASE from build.js
//   node site/qr.js https://utobot.ch/    # regenerate for a different domain
//
// Writes SVG (for print — resolution-independent, hand it to a designer) and
// PNG (for slides or a quick proof) to site/qr/.

const { mkdirSync, writeFileSync } = require('node:fs');
const { join, resolve } = require('node:path');

const QRCode = require('qrcode');
const { PAGES, locales } = require('./content');
const { SITE_BASE } = require('./build');

const OUT = resolve(__dirname, 'qr');
const base = process.argv[2] ?? SITE_BASE;

// Error correction M (~15%) is the usual choice for print: a wall label picks up
// scuffs and fingerprints, and the extra modules cost little at poster size.
// Quiet zone stays at the spec-mandated 4 modules — cropping it is the single
// most common reason a printed code refuses to scan.
const OPTS = { errorCorrectionLevel: 'M', margin: 4, scale: 12 };

async function main() {
  mkdirSync(OUT, { recursive: true });
  const de = locales.find((l) => l.lang === 'de');

  for (const page of PAGES) {
    const path = [de.dirName, de.slugs[page]].filter(Boolean).join('/');
    const url = `${base}${path}${path ? '/' : ''}`;
    const name = page === 'home' ? 'haupt' : de.slugs[page];

    writeFileSync(join(OUT, `${name}.svg`), await QRCode.toString(url, { ...OPTS, type: 'svg' }));
    writeFileSync(join(OUT, `${name}.png`), await QRCode.toBuffer(url, OPTS));
    console.log(`${name.padEnd(20)} ${url}`);
  }
  console.log(`\n→ ${OUT}`);
}

main().catch((e) => {
  console.error('failed:', e);
  process.exit(1);
});
