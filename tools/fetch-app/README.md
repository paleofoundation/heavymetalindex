# tools/fetch-app — mass PDF fetch & dedupe

A local web app for mass-downloading and deduping heavy-metal PDFs by product
category / subcategory (or a freeform topic like remediation). You enter your
API/SERP keys once, build one or more queries from the canonical HMTc taxonomy,
pick which databases to search, and the app fans out, dedupes against the
existing corpus, scores for relevance, and downloads the qualifying open-access
PDFs into the manual-fetch staging folder.

It **fetches and dedupes only.** It never ingests, routes, or edits the wiki —
that stays the system's job (CLAUDE.md Part 5b). What it downloads lands where
the daemon's `ingest-manual-fetch-batch` tick already looks, so ingest happens
automatically on the next tick with no extra wiring.

## Run it

Two ways.

**Desktop app (no Terminal).** Build the double-clickable macOS app once:

```bash
npm run fetch-app:install-desktop
```

This assembles `Heavy Metal Fetch.app` on the Desktop. Double-click it: the
launcher finds Node, starts the local server if it isn't already running, and
opens the UI in a chromeless Chrome app-mode window that looks native. Double-
clicking again reuses the running server (never spawns a second). On first run,
if macOS blocks the unsigned app, right-click the icon → Open → Open (once), or
run `xattr -dr com.apple.quarantine "$HOME/Desktop/Heavy Metal Fetch.app"`.

Closing the window does not stop the server; to fully stop it, quit the
`server.mjs` entry in Activity Monitor or run `pkill -f tools/fetch-app/server.mjs`.

The app source is version-controlled under `desktop-app/` (launcher, Info.plist,
icon, build script) so it's reproducible — re-run the install command after any
change to rebuild the bundle.

**Terminal.**

```bash
npm run fetch-app
# then open http://127.0.0.1:8091
```

Local-only (binds `127.0.0.1`). Override the port with `HMI_FETCH_APP_PORT`.

## Design

The UI is ported verbatim from the microbiomemedicine.com design system
(theme-wp.css / globals.css): brand red `#cc3333` with its alpha-hex tint ramp,
white editorial ground, self-hosted Inter (body) + Lora (headings) woff2, the
site's weight-400 "no bold" rule with Lora carrying heading weight.

## Keys

Enter keys in the **API & SERP keys** panel. They're stored in
`tools/fetch-app/keys.local.json` — **gitignored, mode 0600, never committed.**
Environment variables are honored as a fallback (so existing daemon conventions
keep working):

| Field | Env fallback | Needed for |
|---|---|---|
| SerpAPI key | `SERPAPI_KEY` | SerpAPI (Google Scholar) — **required** |
| Serper.dev key | `SERPER_API_KEY` | Serper (Google `filetype:pdf`) — **required** |
| CORE API key | `CORE_API_KEY` | CORE full-text — **required** |
| NCBI API key | `NCBI_API_KEY` | PubMed/PMC — optional (raises rate limit) |
| Semantic Scholar key | `S2_API_KEY` | Semantic Scholar — optional (raises rate limit) |
| Contact email | `HMI_FETCH_MAILTO` | OpenAlex / Crossref / Unpaywall polite pools |

OpenAlex, PubMed, Crossref, and Semantic Scholar all work with **no key**
(PubMed/S2 keys only raise the rate limit). CORE, SerpAPI, and Serper are
disabled in the UI until their key is set.

## Sources

| Source | Key | Coverage |
|---|---|---|
| OpenAlex | none (email) | all-fields metadata + OA URL |
| PubMed / PMC | optional | NIH-indexed biomedical, PMC OA full text |
| Crossref | none (email) | DOI metadata (OA PDF resolved via Unpaywall) |
| Semantic Scholar | optional | all-fields, `openAccessPdf` |
| CORE | required | open-access full-text aggregator |
| SerpAPI | required | Google Scholar results with PDF resources |
| Serper | required | Google web search, `filetype:pdf` |

## How it works

1. **Query build.** Category/subcategory come from `data/taxonomy/hmtc-v2.json`
   (the single source of truth — the app hard-codes no product list). Three
   modes: product category, remediation/mitigation (appends the in-scope
   remediation lexicon), and freeform (verbatim search string).
2. **Fan-out.** The query goes to every selected source adapter
   (`lib/sources.mjs`), best-effort — an API error on one source logs and
   continues, never aborts the run.
3. **Dedup.** Every candidate is checked against the discovery corpus index
   (`data/evidence/discovery/corpus-index.json` — DOI + normalized title) and
   against PDFs already sitting in the manual-fetch staging roots, plus
   cross-source/cross-query dedup within the run. Use **Rebuild dedupe index**
   to refresh it from `wiki/sources/` before a big run.
4. **Score.** A lighter, domain-aware version of the
   `tools/wishlist/find-candidates.mjs` gates (`lib/score.mjs`): positive
   product/metal term hits, a negative-keyword penalty (sensors, materials
   science, biomonitoring, water-quality surveys), a long-form-metal-name gate,
   and a domain gate keyed to the category. The authoritative in-scope gate
   still runs downstream at ingest time; this scorer just keeps obvious noise
   out of the download set.
5. **Download.** Qualifying open-access candidates are fetched with the full
   rescue chain ported from the wishlist fetcher (`lib/pdf-fetch.mjs`): primary
   OA URL → Unpaywall direct-PDF → Europe PMC `getPdf`. Every path validates the
   actual bytes (a `%PDF-` signature) so bot-check / landing-page HTML never
   lands as a `.pdf`. Files are named `<author><year>-<title-slug>.pdf`
   (honest minting — no fabricated author).
6. **Audit.** Every candidate and its decision is written to
   `data/evidence/fetch-app/<run-id>.csv` (gitignored, local). Downloads land in
   `raw/Manual Fetch Discovery/fetch-app/` (handle prefix `MFD`), already in the
   daemon's `MANUAL_FETCH_ROOTS`.

## Relationship to the other fetch pipelines

- **`tools/wishlist/`** — daemon-fired, gap-driven, OpenAlex + PubMed only.
- **`tools/discovery/` + `/discover` skill** — Karen-triggered, multi-DB,
  topic-driven, autonomous through ingest.
- **this app** — Karen-triggered, multi-DB **plus SERP**, interactive: you pick
  the category/subcategory and databases by hand and watch the run live. Same
  dedup index, same staging destination, same downstream ingest.

## Files

```
tools/fetch-app/
├── server.mjs            node:http server (127.0.0.1:8091), SSE progress
├── keys.local.json       gitignored key store (created on first save)
├── lib/
│   ├── config.mjs        key load/save + env fallback + masked view
│   ├── taxonomy.mjs      taxonomy → query + scoring terms
│   ├── sources.mjs       the 7 source adapters
│   ├── score.mjs         domain-aware relevance gate
│   ├── dedup.mjs         corpus + staging dedup
│   ├── pdf-fetch.mjs     download + Unpaywall/Europe PMC rescue + PDF validation
│   ├── run.mjs           job engine (fan-out → dedup → score → download → audit)
│   └── util.mjs          filename minting, CSV, normalizers
├── public/               index.html · styles.css · app.js · fonts/ (Inter, Lora)
└── desktop-app/          double-click .app source
    ├── launch            hardened bash launcher (node discovery, health-checked
    │                     port reuse, browser app-mode, error dialogs)
    ├── Info.plist        bundle metadata
    ├── icon.svg          element-tile app icon
    ├── make-icon.mjs     svg → .iconset (sharp)
    └── build-desktop-app.sh   assembles ~/Desktop/Heavy Metal Fetch.app
```
