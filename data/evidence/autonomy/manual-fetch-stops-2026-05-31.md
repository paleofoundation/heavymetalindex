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
- **Action taken in the first session (a12d7a2 / wu2024-heavy-metals-…):**
  Committed audit application to
  `wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo.md` only. Did NOT
  touch the parallel page or its unstaged modifications. Stopped per the
  skill's true-duplicate-conflict stop condition.
- **Action taken in the second session (f86d57f / de5ba1c / wu2024-jiaozuo-china-…):**
  This session (the "parallel" one named above) committed ingest at f86d57f
  and audit application at de5ba1c (Phase-2 subagent verdict QUARANTINE; 7
  findings applied — cereal range column-shift remapping Cr/Hg/Ni/Cu to the
  page-186 narrative order, cereal Table 7 means restated from the SD columns,
  single-factor pollution moderate bracket corrected from "Cr in peanuts" to
  "Ni in peanuts" per page 191, bogus Hg mass-balance flag removed, three
  source-internal narrative-vs-Table-7 inconsistencies surfaced; 1 finding
  rejected — `ingredients/mushrooms` slug retained since
  `wiki/ingredients/mushrooms.md` exists and routing audit resolved cleanly;
  the 2026-05-18 taxonomy snapshot is stale). Did NOT modify the first
  session's page. Stopping per this same true-duplicate-conflict condition.
- **State after both sessions:** Both source pages are committed and audited
  against their own subagent reports. Both have routing audit clean. Both
  cover the same paper. Karen's decision still required:
  1. Which cite-key wins.
  2. Whether to merge specific verification notes from the loser into the
     winner before retiring it (the column-shift correction in the second
     session and the rice-Hg back-calc / vegetable Pb max / TCR typo / Nemerow
     mung-bean clarifications in the first session may not fully overlap).
  3. Recommended workflow: read both pages side-by-side, pick the better-
     written one as the canonical, port any unique verification-notes content
     from the other, delete the loser, rebuild routing audit.
- **Upstream signal:** The autonomy/FRANK loops do not appear to lock against
  Karen-triggered `/ingest-next-manual-fetch-pdf` invocations. Either FRANK
  should respect a session-lock when Karen launches the skill manually, or
  the cite-key generation should use a stable derivation from DOI so parallel
  ingests of the same paper collide on filename rather than producing two
  distinct files. Both sessions' DOI greps ran before the other's commit
  landed, so the existing identity-check protocol cannot prevent this race
  without filesystem-level coordination.

## auto-matcha-al-product_2025_10-54536-ajlsi-v4i2-5050.pdf

- **Source folder:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`
- **Auto-fetch slug intent:** matcha × Al × product-level occurrence
- **DOI:** 10.54536/ajlsi.v4i2.5050
- **Actual paper:** Perez JTV et al., Leong-On MSG (corresponding author)
  (2025). "Antioxidant Activities of Selected Milk Teas and Fruit Teas Using
  2,2-Diphenyl-1-Picrylhydrazyl (DPPH) Assay." *American Journal of Life
  Science and Innovation* 4(2): 6–10. e-Palli Publishers. Article type:
  original research (in vitro antioxidant assay).
- **Why rejected:** Off-topic. The paper measures DPPH radical scavenging
  activity (% scavenging) of six commercial milk-tea and fruit-tea
  preparations (Matcha, Okinawa, Winter Melon, Green Apple, Kiwi, Lychee)
  plus a "pure tea" reference and ascorbic-acid positive control. There are
  zero heavy-metal measurements, zero analytical chemistry of metals, and
  zero food-occurrence data. The only mention of "aluminum" in the entire
  paper is "covered with aluminum foil for 30 minutes" — laboratory glassware
  used to keep the photosensitive DPPH reagent in the dark during incubation.
  The discover keyword matcher false-positived on the string "aluminum foil"
  in the methods, generating the misleading `matcha-al-product` slug. No
  aluminum-in-matcha occurrence data exists in this paper.
- **Action:** Moved PDF to
  `raw/manual-fetch/seasonal-geographic-variance/skipped/skip_no-heavy-metal-data/`.
  Not ingested, not committed, no wiki source page created.
- **Upstream signal:** The discover pipeline's metal-keyword matcher is
  treating "aluminum foil" (labware) as evidence of aluminum-as-analyte. A
  context-aware filter ("aluminum foil" / "aluminum block" / "aluminum
  weighing dish" appearing only in methods labware context should not score
  as Al-occurrence intent) would catch this pattern. If similar false
  positives recur — particularly from DPPH/ABTS/FRAP antioxidant-assay
  papers whose methods routinely use aluminum foil to dark-incubate the
  reagent — the scorer should be tightened. The `matcha` element of the
  slug was also misled: the paper studies *commercial milk-tea preparations
  flavored as matcha*, not matcha powder itself, so even if Al data existed
  it would not route cleanly to `ingredients/matcha`.

## auto-matcha-pb-product_2022_10-5650-jos-ess22135.pdf

- **Source folder:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`
- **Auto-fetch slug intent:** matcha × Pb × product-level occurrence
- **DOI:** 10.5650/jos.ess22135
- **Actual paper:** Shirai N (2022). "Organic Acid Analysis in Green Tea
  Leaves Using High-performance Liquid Chromatography." *Journal of Oleo
  Science* (J-STAGE Advance Publication 2022-08-15). Single-author study,
  National Food Research Institute (NARO), Tsukuba, Japan. CC BY 4.0.
- **Why rejected:** Off-topic. The paper measures the content of five
  *organic acids* — quinic, oxalic, malic, succinic, and citric — in
  Japanese green tea varieties (Sencha, Gyokuro, Matcha, Kukicha, Asatsuyu,
  Okumidori, Okuyutaka, Kanayamidori, Saeakari, Saemidori, Sofu,
  Harumidori, Yabukita) using reverse-phase HPLC with phenacyl-bromide
  derivatization and UV detection at 254 nm. There are zero heavy-metal
  measurements in the paper. No Pb, Cd, As, Hg, Ni, Al, Cr, Sn, or Sb is
  quantified, mentioned in methods, or referenced in the abstract or
  keywords. The instrument (Wakopack 5C8 HG C8 column, UV-880 detector)
  has no metal-analysis capability; there is no acid digestion, no ICP-MS,
  no AAS, no AFS, no XRF, no anodic stripping voltammetry. The reagents
  list (oxalic acid, malic acid, succinic acid, citric acid, metaphosphoric
  acid, acetone, methanol, acetonitrile, triethylamine, phenacyl bromide,
  quinic acid, butyric acid) is purely organic chemistry. Author keywords:
  green tea, oxalic acid, organic acid, quinic acid, citric acid. The
  paper measures plant secondary metabolites for tea-quality grading and
  potential bioactivity; the closest it gets to a metal-related substance
  is "metaphosphoric acid" used as a sample-extraction solvent.
- **Action:** Moved PDF to
  `raw/manual-fetch/seasonal-geographic-variance/skipped/skip_no-heavy-metal-data/`.
  Not ingested, not committed, no wiki source page created.
- **Upstream signal:** This is the second consecutive `auto-matcha-*` false
  positive from the same auto-fetched batch (after `ajlsi.v4i2.5050`
  above). Neither paper contains heavy-metal occurrence data; both were
  pulled under matcha-metal slugs by the discover scorer. The pattern
  suggests the matcha-Pb (and matcha-Al) queries hit on metadata-level
  keyword associations — perhaps a co-occurrence of "matcha" with broader
  food-chemistry / green-tea-composition language in the OpenAlex tags or
  abstract index — rather than on actual heavy-metal-occurrence content.
  Recommendation: when the discover scorer ranks candidates under a
  matcha × metal slug, prefer papers whose abstracts contain at least one
  of {Pb, lead, Cd, cadmium, As, arsenic, Hg, mercury, heavy metal,
  trace element, ICP, AAS, AFS} as an early filter. Papers whose
  abstracts contain only organic-chemistry language (HPLC + organic acids,
  catechins, flavonoids, amino acids, antioxidant assay) almost certainly
  do not carry heavy-metal occurrence data and should be deprioritized
  before download. Two consecutive false positives from the same
  auto-fetched batch is enough signal to act on.
