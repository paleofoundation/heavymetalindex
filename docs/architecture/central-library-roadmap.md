# Central Library — wiring status and roadmap

Status of `tools/central-library` (localhost:8092, launched by `Central Library.app`). This doc exists because the app's UI was ported from a design mockup ("Direction 1A · Corpus-first spine") whose plan lived only in a design conversation; two tabs shipped as placeholder cards containing the pitch copy verbatim, and until 2026-07-28 this file's contents existed nowhere in the repo. This is now the durable record.

## Wiring status (2026-07-28)

**Real, wired to backends:**
- **Presets tab** — `/api/presets`, `/api/matrices`, `/api/run`, `/api/run/stream`. The rebuilt MMed research tool; runs preset query groups and downloads PDFs.
- **Wishlist tab** — `/api/wishlist`, `/fulfill`, `/mark-have`, `/dismiss`, including the drop-PDFs-to-fulfill flow.

**Sample data (labeled "Preview" in the UI, not the default tab):**
- **Library tab** — papers list, build counts (23,412 / 9,840 / 11,260 / 4,910 / 312), and dupe flags are the mockup's hardcoded sample data. The screen is kept because it is the approved design for the real Library once wired (port-the-proof discipline); it must not be mistaken for the real corpus.

**Removed stub tabs (2026-07-28)** — were placeholder cards with no screen behind them:
- **Pulls console** (concept, verbatim from the mockup): "+ New pull" composer, live pipeline (esearch → enrich → dedupe → PDF waterfall), four counters, recent-run history.
- **Coverage & gaps** (concept 1C, verbatim): per-site status (HMI categories pending evidence, MMed uncharacterized conditions, WikiBiome coverage), category × analyte heatmap, watched-topic alerts.

## Build order (when picked up)

1. **Wire the Library tab to the canonical identity index.** Phase 1 of the identity index landed (`tools/library`, commit 28288f5d9: canonical index + committed snapshot). Needs an `/api/library` endpoint over the index, real per-build counts, and a real unfiled scan. This replaces the sample data and removes the Preview banner.
2. **Pulls console.** `/api/run` + SSE already execute pulls; the missing piece is persisted run history (the four counters per run) to list past pulls. Re-add the tab when that exists.
3. **Coverage & gaps.** Needs per-site gap data. HMI side exists (`data/evidence/cells-needing-synthesis.csv`, wishlist harvest); MMed and WikiBiome coverage sources are TBD. Largest lift; last.

Related plan: [[library-fetch-sync-plan]] (wishlist, identity index, fulltext search — the data layer the Library tab wiring builds on).
