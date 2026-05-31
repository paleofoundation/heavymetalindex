# Manual-fetch ingest stops — 2026-05-31

Stop reports for PDFs the autonomous ingest loop chose not to ingest. Each entry
names the PDF, the slug it was auto-fetched under, why it was rejected, and the
destination folder it was moved to.

## auto-fruit-snacks-pb-product_2025_10-3389-fnut-2025-1513343.pdf

- **Source folder:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`
- **Auto-fetch slug intent:** fruit snacks × Pb × product-level occurrence
- **DOI:** 10.3389/fnut.2025.1513343
- **Actual paper:** Shyam S, Salas-Salvadó J (2025). "The impact of investigator
  bias in nutrition research." *Frontiers in Nutrition* 12:1513343. Article type:
  **Opinion** (meta-research / research ethics).
- **Why rejected:** Off-topic. The paper is an opinion piece on cognitive and
  positional biases in nutrition research methodology. It contains zero heavy-
  metal measurements, zero analytical chemistry, zero food-occurrence data, and
  zero mention of fruit snacks. The discover keyword matcher false-positived on
  the journal name + nutrition keywords; the slug `fruit-snacks-pb-product` has
  no relationship to the paper's content.
- **Action:** Moved PDF to
  `raw/manual-fetch/seasonal-geographic-variance/skipped/skip_no-heavy-metal-data/`.
  Not ingested, not committed, no wiki source page created.
- **Upstream signal:** The auto-fetch slug-to-PDF matching logic in the discover
  pipeline produced a wrong match here. If this pattern recurs (Frontiers
  opinion pieces being grabbed under occurrence slugs), the discover scorer may
  need a filter against article-type Opinion / Editorial / Perspective for
  occurrence-intent queries.

## auto-leafy-vegetables-other-pb-product_2024_10-62051-10-62051-ijnres-v2n1-21.pdf — PARALLEL-INGEST RACE / DUPLICATE PAPER

- **Source folder:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`
- **DOI:** 10.62051/ijnres.v2n1.21
- **Paper:** Wu Z (2024). "Contamination of Heavy Metal(Loid)S in Cereals,
  Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and
  The Associated Health Risk Assessment." *International Journal of Natural
  Resources and Environmental Studies* 2(1): 180–200. Warwick Evans Publishing,
  CC BY-NC 4.0.
- **Conflict:** TWO wiki source pages now cover this same paper, ingested in
  parallel by two separate processes within minutes of each other:
  - `wiki/sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo.md`
    — commit a12d7a2 (this session, manual `/ingest-next-manual-fetch-pdf`)
    — raw_handle `AF_auto-leafy-vegetables-other-pb-product-2024-10-620`
    — fully audited by Phase-2 subagent; audit verdict REVISE; 6 of 7 findings
    applied (audit application uncommitted at the time the duplicate was
    detected — see Resolution).
  - `wiki/sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals.md`
    — commit f86d57f (parallel FRANK or autonomy_phase1_v0 process)
    — raw_handle `AF_auto-leafy-vegetables-other-pb-product-2024-10-62051-ijnres-v2n1-21`
    — also unstaged modifications present at the time of detection
- **Why this happened:** Race condition between my session's
  `/ingest-next-manual-fetch-pdf` invocation and a parallel automated ingest
  (FRANK or autonomy_phase1_v0). Both sessions performed their DOI grep before
  the other had committed. Both wrote pages with different cite-keys and
  different `raw_handle` strings (the parallel handle preserved more of the
  filename suffix). Neither's DOI grep would have caught the other.
- **Karen's decision needed:**
  1. Which cite-key wins: `wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo`
     (this session) or `wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals`
     (FRANK/autonomy)? Both are validly formed `wu2024-*` slugs since the
     pre-existing `wu2024-cd-silica-sol-water-sensor` is a different paper.
  2. The audited-revised version (this session's) has six paper-internal
     inconsistencies flagged + audit-application paragraph in verification
     notes; the other page may have different coverage of the source.
  3. Recommend retaining the audited-revised page and deleting the other
     (since the audit work is non-trivial to redo), but Karen's call.
- **Action taken in this session:** Committed audit application to
  `wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo.md` only. Did NOT
  touch the parallel page or its unstaged modifications. Stopped per the
  skill's true-duplicate-conflict stop condition.
- **Upstream signal:** The autonomy/FRANK loops do not appear to lock against
  Karen-triggered `/ingest-next-manual-fetch-pdf` invocations. Either FRANK
  should respect a session-lock when Karen launches the skill manually, or
  the cite-key generation should use a stable derivation from DOI so parallel
  ingests of the same paper collide on filename rather than producing two
  distinct files.
