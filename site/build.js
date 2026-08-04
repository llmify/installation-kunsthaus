// Generates the visitor site: three documents × three languages → site/dist/.
//
//   node site/build.js
//
// Everything readable lives in content.js; this file is only assembly. There is
// no framework and no client-side JavaScript — the pages are meant to open fast
// on a phone with one bar of signal, and to print without a browser running
// anything.

const { mkdirSync, writeFileSync, copyFileSync, rmSync } = require('node:fs');
const { dirname, join, resolve } = require('node:path');

const { PAGES, locales } = require('./content');

const OUT = resolve(__dirname, 'dist');
// Printed on the paper version, where a link cannot be tapped, and encoded into
// the QR codes. This is the canonical address: the llmify.github.io project URL
// redirects here, because the organisation has llmify.ch verified for Pages.
// Pointing the codes at the redirect would cost a round trip on the kind of
// mobile signal a gallery has.
const SITE_BASE = 'https://llmify.ch/installation-kunsthaus/';

const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/gi, '&amp;').replace(/</g, '&lt;');

// Where a given (locale, page) lives, relative to the site root: '' for the
// German home page, 'fr/idees' for the French ideas page, and so on.
function pathOf(locale, page) {
  return [locale.dirName, locale.slugs[page]].filter(Boolean).join('/');
}

// Relative href from one page to another, so the site works under a project
// path (/museum/), on a custom domain, and from a local file:// preview alike.
function hrefFrom(fromLocale, fromPage, toLocale, toPage) {
  const depth = pathOf(fromLocale, fromPage).split('/').filter(Boolean).length;
  const up = '../'.repeat(depth);
  const target = pathOf(toLocale, toPage);
  return `${up}${target ? `${target}/` : ''}` || './';
}

function assetHref(locale, page) {
  const depth = pathOf(locale, page).split('/').filter(Boolean).length;
  return `${'../'.repeat(depth)}assets/style.css`;
}

// --- the diagram -------------------------------------------------------------
// Same topology and orientation as the live diagram on the screens
// (src/renderer/index.html) so a visitor recognises it: the visitor's audio
// descends into the conversation, which runs left to right into text and voice,
// with the image branching down off the text. Numbered badges key into the
// legend below it — the numbering is real here, it is the order things happen.

function diagram(d) {
  // Every dot is drawn filled. On the screens a dot fills only once its part is
  // finished, but this schematic shows the whole path at once — leaving some
  // hollow would depict one particular instant and invite the reader to work out
  // which, for no gain.
  const dot = (x, y) => `<circle class="d-dot-full" cx="${x}" cy="${y}" r="8"/>`;
  const label = (x, y, t, anchor = 'middle') =>
    `<text class="d-label" x="${x}" y="${y}" text-anchor="${anchor}">${esc(t)}</text>`;
  const down = (x, y1, y2) =>
    `<line class="d-line" x1="${x}" y1="${y1}" x2="${x}" y2="${y2 - 9}"/>` +
    `<polygon class="d-head" points="${x - 5},${y2 - 9} ${x + 5},${y2 - 9} ${x},${y2}"/>`;
  const right = (y, x1, x2) =>
    `<line class="d-line" x1="${x1}" y1="${y}" x2="${x2 - 9}" y2="${y}"/>` +
    `<polygon class="d-head" points="${x2 - 9},${y - 5} ${x2 - 9},${y + 5} ${x2},${y}"/>`;
  const badge = (x, y, n) =>
    `<circle class="d-badge" cx="${x}" cy="${y}" r="9.5"/>` +
    `<text class="d-badge-text" x="${x}" y="${y + 4}" text-anchor="middle">${n}</text>`;

  return `<svg viewBox="0 0 500 312" role="img" aria-label="${esc(d.aria)}">
  <text class="d-caption" x="80" y="12" text-anchor="middle">${esc(d.caption).toUpperCase()}</text>
  ${dot(80, 30)}${label(80, 55, d.audio)}
  ${down(80, 66, 100)}${badge(105, 84, 1)}
  ${dot(80, 116)}${label(80, 141, d.vtext)}
  ${down(80, 152, 186)}${badge(105, 170, 2)}
  ${dot(80, 202)}${label(80, 227, d.konv)}
  ${right(202, 100, 230)}${badge(165, 184, 3)}
  ${dot(250, 202)}${label(250, 227, d.text)}
  ${right(202, 270, 400)}${badge(335, 184, 4)}
  ${dot(420, 202)}${label(420, 227, d.stimme)}
  ${down(250, 238, 270)}${badge(275, 254, 5)}
  ${dot(250, 278)}${label(250, 303, d.bild)}
</svg>`;
}

// --- page bodies -------------------------------------------------------------

function homeBody(c) {
  return `
      <div class="page-head">
        <p class="eyebrow">${esc(c.eyebrow)}</p>
        <h1>${c.h1}</h1>
        <p class="lede">${esc(c.lede)}</p>
      </div>

      <section class="section">
        <h2>${esc(c.introHead)}</h2>
        <p>${esc(c.intro)}</p>
      </section>

      <section class="section">
        <p class="eyebrow">${esc(c.threadHead)}</p>
        <div class="thread">
${c.thread
  .map(
    (t) => `          <div class="turn ${t.who}">
            <span class="who">${t.who === 'utobot' ? 'Utobot' : 'Dystobot'}</span>
            <p class="said">${esc(t.text)}</p>
          </div>`,
  )
  .join('\n')}
        </div>
        <p class="aside">${esc(c.threadNote)}</p>
      </section>

      <section class="section">
        <h2>${esc(c.pressHead)}</h2>
        <div class="press">
          <div class="plinth" aria-hidden="true"><span class="knob"></span></div>
          <div>
            <ol class="steps">
${c.pressSteps.map((s) => `              <li>${esc(s)}</li>`).join('\n')}
            </ol>
            <p class="aside">${esc(c.pressNote)}</p>
          </div>
        </div>
      </section>`;
}

function ideasBody(c) {
  return `
      <div class="page-head">
        <p class="eyebrow">${esc(c.eyebrow)}</p>
        <h1>${c.h1}</h1>
        <p class="lede">${esc(c.lede)}</p>
      </div>

      <section class="section">
${c.groups
  .map(
    (g) => `        <div class="group">
          <h3>${esc(g.title)}</h3>
          <p>${esc(g.text)}</p>
          <ul class="prompts">
${g.prompts.map((p) => `            <li>${esc(p)}</li>`).join('\n')}
          </ul>
        </div>`,
  )
  .join('\n')}
        <p class="aside">${esc(c.note)}</p>
      </section>`;
}

function techBody(c) {
  return `
      <div class="page-head">
        <p class="eyebrow">${esc(c.eyebrow)}</p>
        <h1>${c.h1}</h1>
        <p class="lede">${esc(c.lede)}</p>
      </div>

      <section class="section">
        <div class="diagram">
${diagram({ ...c.diagram, aria: c.diagramAria })}
        </div>
        <p class="eyebrow legend-head">${esc(c.legendHead)}</p>
        <ol class="legend">
${c.legend
  .map(
    (l, i) => `          <li><span class="n">${i + 1}</span><span><b>${esc(l.title)}</b>${esc(l.text)}</span></li>`,
  )
  .join('\n')}
        </ol>
      </section>

      <section class="section">
        <h2>${esc(c.stackHead)}</h2>
        <dl class="rows">
${c.stack.map((r) => `          <div><dt>${esc(r.k)}</dt><dd>${esc(r.v)}</dd></div>`).join('\n')}
        </dl>
      </section>

      <section class="section">
        <h2>${esc(c.privacyHead)}</h2>
        <div class="privacy-cols">
${c.privacy.map((p) => `          <p>${esc(p)}</p>`).join('\n')}
        </div>
      </section>`;
}

const BODIES = { home: homeBody, ideas: ideasBody, tech: techBody };

// --- shell -------------------------------------------------------------------

function render(locale, page) {
  const c = locale[page];
  const title = page === 'home' ? c.title : `${c.title} — Utobot × Dystobot`;

  const nav = PAGES.map((p) => {
    const current = p === page;
    return `        <a href="${hrefFrom(locale, page, locale, p)}"${
      current ? ' aria-current="page"' : ''
    }>${esc(locale.navLabels[p])}</a>`;
  }).join('\n');

  const langs = locales
    .map(
      (l) =>
        `        <a href="${hrefFrom(locale, page, l, page)}" hreflang="${l.lang}"${
          l.lang === locale.lang ? ' aria-current="true"' : ''
        }>${l.label}</a>`,
    )
    .join('\n');

  const alternates = locales
    .map(
      (l) =>
        `    <link rel="alternate" hreflang="${l.lang}" href="${SITE_BASE}${pathOf(l, page)}${
          pathOf(l, page) ? '/' : ''
        }" />`,
    )
    .join('\n');

  // On paper the navigation is useless, so the other two pages are spelled out
  // as URLs a reader can type — on one line, without the protocol nobody types.
  const bare = SITE_BASE.replace(/^https?:\/\//, '');
  const printedLinks = PAGES.filter((p) => p !== page)
    .map((p) => `${esc(locale.navLabels[p])} — ${bare}${pathOf(locale, p)}`)
    .join(' &nbsp;·&nbsp; ');

  return `<!DOCTYPE html>
<html lang="${locale.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(c.lede)}" />
    <meta name="robots" content="index,follow" />
${alternates}
    <link rel="stylesheet" href="${assetHref(locale, page)}" />
  </head>
  <body>
    <div class="wrap">
      <header class="masthead">
        <a class="wordmark" href="${hrefFrom(locale, page, locale, 'home')}">Utobot <span class="x">×</span> Dystobot</a>
        <nav class="langs" aria-label="Sprache / langue / language">
${langs}
        </nav>
      </header>
      <nav class="site-nav" aria-label="${esc(locale.navLabels.home)}">
${nav}
      </nav>
${BODIES[page](c)}

      <footer class="colophon">
        <span class="mono">${esc(locale.colophonTitle)}</span>
        <p>${locale.credits}</p>
        <p class="print-only"><strong>${esc(locale.otherPages)}:</strong> ${printedLinks}</p>
      </footer>
    </div>
  </body>
</html>
`;
}

// --- write -------------------------------------------------------------------

function main() {
  rmSync(OUT, { recursive: true, force: true });

  let count = 0;
  for (const locale of locales) {
    for (const page of PAGES) {
      const file = join(OUT, pathOf(locale, page), 'index.html');
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, render(locale, page));
      count++;
    }
  }

  mkdirSync(join(OUT, 'assets'), { recursive: true });
  copyFileSync(join(__dirname, 'assets', 'style.css'), join(OUT, 'assets', 'style.css'));

  // Pages would otherwise run the output through Jekyll, which skips files and
  // folders beginning with an underscore. Nothing here starts with one today,
  // but the failure mode is a silently missing page.
  writeFileSync(join(OUT, '.nojekyll'), '');

  console.log(`${count} pages → ${OUT}`);
}

// qr.js imports SITE_BASE from here so the codes can never point somewhere the
// printed URLs don't. Guarded so importing it doesn't trigger a build.
if (require.main === module) main();

module.exports = { SITE_BASE, pathOf };
