# Utobot × Dystobot — visitor information

The three information pages for the installation *Utobot × Dystobot* in the
exhibition **Künstliche Kreativität** at the Aargauer Kunsthaus
(26 September 2026 – 10 January 2027), reached by three QR codes in the room.

- **Die Installation** — what the two voices are, and how to speak to them
- **Mitreden** — things worth saying to them
- **Hinter den Kulissen** — the diagram on the screens, explained

Each page links to the other two, so a visitor never has to scan more than one
code. German, French and English.

Live at <https://llmify.ch/installation-kunsthaus/>.

The installation itself lives in a separate, private repository; this one holds
only what is meant to be public.

## Working on it

```bash
npm install
npm run site      # → site/dist/
npm run qr        # → site/qr/  (SVG for print, PNG for slides)
```

`site/dist/` is gitignored and rebuilt by CI. Open `site/dist/index.html`
directly to preview — links are relative, so it works from `file://` too.

**All copy for all three languages lives in `site/content.js`.** Changing text
means changing that file and nothing else; `site/build.js` is assembly only.
Slugs are per-language because a printed URL gets typed by hand.

## Printing

Each document is designed to print as one A4 sheet: the palette inverts, the
navigation is replaced by the other two URLs spelled out, and the list-heavy
sections set two columns to use the sheet's full width.

*Die Installation* and *Mitreden* fit one sheet in all three languages.
*Hinter den Kulissen* currently runs to a second sheet — roughly 45 mm past
what A4 holds at a size an exhibition audience can comfortably read. Shortening
it is a copy decision, not a layout one.

## Moving to another domain

The QR codes and the URLs printed on the paper version both come from
`SITE_BASE` in `site/build.js` — they cannot disagree. To move:

1. change `SITE_BASE`,
2. `npm run qr` (or `node site/qr.js https://example.ch/` to try one out),
3. add the domain under Settings → Pages.

## Publishing

`.github/workflows/pages.yml` builds on every push to `main` that touches
`site/`, and uploads **only** `site/dist`. Requires Settings → Pages →
Source = *GitHub Actions*.
