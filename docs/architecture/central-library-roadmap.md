# Central Library — wiring status and roadmap

Status of `tools/central-library` (localhost:8092, launched by `Central Library.app`). This doc exists because the app's UI was ported from a design mockup ("Direction 1A · Corpus-first spine") whose plan lived only in a design conversation; two tabs shipped as placeholder cards containing the pitch copy verbatim, and until 2026-07-28 this file's contents existed nowhere in the repo. This is now the durable record.

## Wiring status (2026-07-28)

**Real, wired to backends:**
- **Presets tab** — `/api/presets`, `/api/matrices`, `/api/run`, `/api/run/stream`. The rebuilt MMed research tool; runs preset query groups and downloads PDFs.
- **Wishlist tab** — `/api/wishlist`, `/fulfill`, `/mark-have`, `/dismiss`, including the drop-PDFs-to-fulfill flow.
- **Library tab** — `/api/library`, wired 2026-07-28. Serves the canonical identity index (29,416 papers): real counts, real facets, real per-paper provenance.

### How /api/library resolves its source

1. **Drive SQLite** (`/Volumes/HMI-Library/library-index.sqlite`) — the rich path: journal, `raw_path`, acquisition source. Reported as `mode: "index"`.
2. **Committed snapshot** (`data/evidence/library/index-snapshot.jsonl`) — used when the drive is unplugged. Identity-only by design (the allowlist serializer drops journal/path/source), so PDF status is `null` = unknown, never a fabricated zero. Reported as `mode: "snapshot"`, and the UI shows a Snapshot banner explaining the reduced fields.
3. Neither available → `{ available: false, reason }`, rendered as an honest error, not an empty corpus.

Response is compact array rows (`fields` + `papers`) — ~5 MB for 29k papers — cached server-side against the source file's mtime, loaded lazily on first visit to the tab, and filtered client-side. The table renders 200 rows at a time with an explicit "Showing N of M" control; no silent truncation.

### What the index does NOT carry (so the UI must not claim it)

- **Build membership.** The `builds` column is empty for all 29,416 rows, so the mockup's HMI / MMed / WikiBiome facets and per-row build dots were removed rather than faked. Facets are the real columns: ingested, PDF-on-drive, has-DOI, and acquisition source.
- **Duplicates-merged count.** Dedup happens at insert time via identity resolution; the index keeps no merge tally, so that stat tile was replaced with "ingested into the wiki".
- **Full citations.** Only 2 rows have a `title` and 710 a `journal`; most carry a normalized-title dedup key or cite key. The UI labels rows honestly and says so in the footnote rather than implying a bibliography.
- Sanitizing note: two rows carry junk DOI values (`"[]"`, `"unknown"`) from upstream; `/api/library` filters anything not matching `10.*` so junk identity never reaches the UI.

**Removed stub tabs (2026-07-28)** — were placeholder cards with no screen behind them:
- **Pulls console** (concept, verbatim from the mockup): "+ New pull" composer, live pipeline (esearch → enrich → dedupe → PDF waterfall), four counters, recent-run history.
- **Coverage & gaps** (concept 1C, verbatim): per-site status (HMI categories pending evidence, MMed uncharacterized conditions, WikiBiome coverage), category × analyte heatmap, watched-topic alerts.

## Build order

1. ~~**Wire the Library tab to the canonical identity index.**~~ Done 2026-07-28.
2. **Enrich the index so the Library reads like a bibliography.** The wiring is done; the *data* is thin. `backfill-identity.mjs --deep` pdftotexts non-slug PDFs to recover titles, and `--hash` fills sha256 (currently 2 of 29,416 rows). Both are slow, per-file, and resumable. Highest-value next step: it turns dedup keys into real titles across the whole tab.
3. **Build membership (Phase 4).** Populate the `builds` column so HMI / MMed / WikiBiome facets can return as real filters instead of the removed mockup ones.
4. **Pulls console.** `/api/run` + SSE already execute pulls; the missing piece is persisted run history (the four counters per run) to list past pulls. Re-add the tab when that exists.
5. **Coverage & gaps.** Needs per-site gap data. HMI side exists (`data/evidence/cells-needing-synthesis.csv`, wishlist harvest); MMed and WikiBiome coverage sources are TBD. Largest lift; last.

Related plan: [[library-fetch-sync-plan]] (wishlist, identity index, fulltext search — the data layer the Library tab wiring builds on).
