# Program Manual build pipeline

This directory holds the tooling that produces the bound HMTc Program Manual PDF in publication quality (Springer/Elsevier-style monograph trim, FreightText Pro body, Avenir Next display, running heads, page numbers, hyphenated justified prose, native Typst-generated table of contents).

The pipeline is **category-agnostic**. The 2026 Edition ships the Infant and Child Foods manual; the same template and converter produce Cat 2 (children's personal care), Cat 5 (beverages), or any future category by changing the content directories and metadata, not by forking the template.

## Inputs

```
data/workbench/standards-book/
├── source-documents/             # canonical operational docs (governance, lot testing, preprints, toxicology callouts)
├── front-matter/                 # title page, edition page, table of contents, how-to-read
├── parts/                        # numbered part directories with chapter files
│   ├── 01-why-hmtc-exists/
│   ├── 02-the-hmtc-program/
│   ├── 03-using-heavymetalindex-com/
│   ├── 04-the-standards/         # Part 3 — per-product chapters retemplated from briefings
│   ├── 05-the-lot-testing-schedule/
│   └── 06-methodology-and-appendices/
└── build/                        # generated outputs (.md, .typ, .html, .pdf)
```

The chapters inside `parts/04-the-standards/` are retemplated automatically from `data/workbench/briefings/*.md` by the Part 3 generator (see below). The other parts are hand-authored markdown.

## Tools

- **`build-program-manual.mjs`**: Concatenates front-matter + all part directories + back-matter into a master markdown at `data/workbench/standards-book/build/HMTc-Program-Manual-<edition>.md`. Runs a wiki/HMTc firewall lint pass that fails on engine-internal vocabulary leakage. Inlines source documents (e.g., the Lot Testing Schedule into Part 4).
- **`render-part3-chapter.mjs`**: Retemplates each `data/workbench/briefings/*.md` into a Part 3 chapter inside `parts/04-the-standards/`. Idempotent. Strips engine parameter names, shortens long section titles for TOC clarity, reduces em-dash density, and prepends a chapter-opening paragraph with cross-references to Parts 2.3, 2.4, 2.10, 4, 5.1, and 5.2.
- **`render-manual-html.mjs`**: Converts the master markdown into a styled HTML file at `build/HMTc-Program-Manual-<edition>.html`. Use for browser-based PDF export (Safari File → Export as PDF). Cheaper than Typst when you just want to read or share the manual; not publication-quality.
- **`render-manual-typst.mjs`**: Converts the master markdown into Typst at `build/HMTc-Program-Manual-<edition>.typ`, then compiles to PDF if invoked with `--pdf`. Produces the publication-quality PDF. Requires the locally-licensed FreightText Pro and Avenir Next fonts at `~/Desktop/reportify/fonts/` and the `typst` binary on `PATH` (`brew install typst`).
- **`typst-template.typ`**: The book template (page setup, fonts, heading hierarchy, table styling, running heads, footers, TOC outline directive). Parameterized: `title`, `subtitle`, `author`, `edition`, `publisher` are inputs.

## Standard build cycle (Infant and Child Foods)

```bash
cd ~/Desktop/heavy-metal-index

# 1. Regenerate Part 3 chapters from the latest briefings (only when briefings changed).
node tools/standards/render-part3-chapter.mjs --all

# 2. Assemble the master markdown and run firewall lint.
node tools/standards/build-program-manual.mjs

# 3. Render publication-quality PDF.
node tools/standards/render-manual-typst.mjs --pdf

# 4. Open the PDF.
open data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.pdf
```

## Building a different category manual

When the Cat 2 (children's personal care), Cat 5 (beverages), or other-category briefings reach publication state, building the corresponding manual requires three changes, **no template or converter modifications**:

1. **Create or rename the content directories** under `data/workbench/standards-book-<category>/` (or branch off the existing tree), mirroring the part structure.
2. **Update the title page and edition page** (`front-matter/01-title-page.md`, `02-edition-page.md`) with the new category name, edition number, and DOI.
3. **Invoke the renderer with the new title and subtitle**. The render script's `book.with(...)` call is in `render-manual-typst.mjs`:

   ```js
   #show: book.with(
     title: [Heavy Metal Tested & Certified],
     subtitle: [Children's Personal Care Program Manual],   // ← changes per category
     edition: "2026 Edition",
     ...
   )
   ```

The running heads, the TOC, and the chapter styling all derive from these inputs; the template adapts automatically.

A future iteration of `render-manual-typst.mjs` should accept a `--category <slug>` flag that reads category-specific config from `data/workbench/standards-book-<slug>/manual.config.json`. That's an obvious cleanup but not required for the current shape of work.

## Freezing a standard version (tamper-evident snapshots)

`freeze-standard-version.mjs` seals one `(standard, version)` into an immutable, self-hosted snapshot whose **date comes from a trusted third party, not from us**. A certified number becomes final when its version carries a DOI, and every material change mints a new version; freezing is what makes each version tamper-evident. It renders a version-pinned scholarly PDF of the standard from its compiled cells (`data/workbench/standards/cat1-compiled/<slug>.json`), computes the PDF's SHA-256, and requests an [RFC-3161](https://www.rfc-editor.org/rfc/rfc3161) trusted timestamp on that hash. Defensibility then rests on the frozen, dated PDF alone — no off-site hosting.

The PDF is rendered with `@react-pdf/renderer` reusing the scholarly design tokens and the vendored fonts in `tools/pdf/fonts.mjs`. It is authored in the HMTc / Institute of Contaminant Standards voice (a certification standard is certification thresholds, so it is deliberately **not** run through the Index-voiced `tools/pdf/scholarly-pdf.mjs`, whose masthead, `heavymetalindex.com` base URL, and "does not use certification thresholds as evidence" competing-interests block are wrong for a standard).

### Commands

```bash
cd ~/Desktop/heavy-metal-index

# Freeze infant-formula-powder v1 (seal + fetch the TSA CA so the snapshot self-verifies).
npm run standards:freeze -- infant-formula-powder --version 1 --effective-date 2026-08-04 --fetch-ca

# Verify a frozen snapshot (re-checks the content hash and runs openssl ts -verify).
npm run standards:freeze:verify -- infant-formula-powder --version 1

# Or invoke directly:
node tools/standards/freeze-standard-version.mjs infant-formula-powder --version 1 --fetch-ca
```

The snapshot lands at the shared-contract path `static/standards/<slug>/v<version>/`:

```
static/standards/infant-formula-powder/v1/
├── standard.pdf          # the version-pinned standard (SHA-256 in the manifest)
├── standard.pdf.tsr      # the RFC-3161 trusted-timestamp token (or .tsq if pending)
├── tsa-cacert.pem        # the TSA CA chain, so the snapshot verifies offline
└── manifest.json         # { slug, version, sha256, timestamp_utc | "pending", tsa_url, effective_date, doi, ... }
```

### Verify path (any third party, offline)

```bash
cd static/standards/infant-formula-powder/v1
openssl ts -verify -data standard.pdf -in standard.pdf.tsr -CAfile tsa-cacert.pem   # => Verification: OK
```

A one-byte change to `standard.pdf` makes this fail with `message imprint mismatch` — that is the tamper-evidence.

### Never a fabricated date

If there is no network or the TSA POST fails, the tool still writes the PDF, the hash, and the request (`standard.pdf.tsq`), and marks `manifest.timestamp_utc: "pending"` — it never invents a time. Re-running when the network returns **reuses the same PDF bytes** (same hash) and completes the seal; the frozen document is not re-rendered. `manifest.machine_clock_utc` records when the freeze was *attempted* and is explicitly **not** a trusted timestamp — only `timestamp_utc` (from the token) is. An already-sealed version is protected: freezing it again is a no-op unless `--force` is passed (which mints a genuinely new snapshot with a new hash and a new timestamp).

### TSA configuration

| Control | Default | Purpose |
| --- | --- | --- |
| `--tsa-url` / `HMTC_TSA_URL` | `https://freetsa.org/tsr` | The RFC-3161 timestamping authority endpoint. |
| `--tsa-ca <path>` / `HMTC_TSA_CA` | — | A pinned local CA chain (copied into the snapshot as `tsa-cacert.pem`). |
| `--fetch-ca` / `HMTC_TSA_CA_URL` | `https://freetsa.org/files/cacert.pem` | Fetch the CA chain over the network. Pin it in production rather than re-fetching. |
| `HMTC_TSA_TIMEOUT_MS` | `20000` | Network timeout for the POST and CA fetch. |
| `--offline` | — | Skip the POST; write a pending snapshot to complete later. |
| `--out-dir` | `static/standards` | Snapshot root (override for testing). |

Any RFC-3161 TSA works; point `HMTC_TSA_URL` at a commercial authority (DigiCert, Sectigo, etc.) for production and pin its CA with `--tsa-ca`.

## Adversarial-audit and coherence-audit history

See `data/workbench/standards-book/adversarial-audit.md` (Pre-work 6 audit findings) and `coherence-audit.md` (Pre-work 3 cross-document consistency check) for the methodology trail behind the current edition. New editions should re-run both audits before publication.
