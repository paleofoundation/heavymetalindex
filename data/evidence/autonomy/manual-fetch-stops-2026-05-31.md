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

## auto-matcha-pb-product_2025_the-association-between-caffeinated-beverages-consumption-with-sociodemographic-.pdf

- **Source folder:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`
- **Auto-fetch slug intent:** matcha × Pb × product-level occurrence
- **DOI:** none (institutional-repository deposit)
- **Source URL (per wishlist-fetch-audit):** http://eprints.usm.my/63512/1/NUR%20FARZANA%20MOHAMAD%20ZUBIR-E.pdf
- **Actual paper:** Zubir NFM (2025). "The Association Between Caffeinated
  Beverages Consumption with Sociodemographic Factors, Body Mass Index,
  and Sleep Quality Among University Students in Health Campus of
  Universiti Sains Malaysia." Bachelor of Health Science (Dietetics)
  dissertation, School of Health Sciences, Universiti Sains Malaysia,
  July 2025. Supervisor: Dr. Ruhaya Binti Hasan.
- **Why rejected:** Off-topic. The dissertation is a cross-sectional
  survey of 162 USM undergraduates (43 male, 119 female, ages 19–25)
  from the Schools of Health Sciences, Medical Sciences, and Dental
  Sciences. The instruments are a sociodemographic questionnaire, a
  Caffeine Consumption Patterns questionnaire, and the Pittsburgh Sleep
  Quality Index (PSQI). Analysis is descriptive statistics and Fisher's
  Exact Test in SPSS v29.0. The primary findings are p-values testing
  associations between caffeine-intake frequency and gender (p=0.351),
  age (p=0.353), school (p=0.545), year of study (p=0.646), BMI
  (p=0.198), sleep quality (p=0.692), and scholarship status (p=0.002,
  the only significant association). The paper contains zero heavy-
  metal measurements, zero analytical chemistry, zero food-occurrence
  data, and zero quantification of Pb/Cd/As/Hg/Ni/Al/Cr/Sn/Sb anywhere.
  "Matcha" appears only as one of six caffeinated-beverage categories
  in the consumption survey ("coffee, tea, chocolate, matcha, soft
  drinks, and energy drinks") — it is not the focus of measurement,
  not analyzed separately for any contaminant, and is mentioned only
  in the questionnaire-design and abstract narrative.
- **Action:** Moved PDF to
  `raw/manual-fetch/seasonal-geographic-variance/skipped/skip_no-heavy-metal-data/`.
  Not ingested, not committed, no wiki source page created. Tracker
  row updated to status=stopped.
- **Upstream signal:** This is now the THIRD consecutive `auto-matcha-*`
  false positive from the same auto-fetched batch (after
  `ajlsi.v4i2.5050` DPPH antioxidant assay and `jos.ess22135` organic-
  acid HPLC). The pattern is consistent: the discover scorer is
  treating any paper that mentions matcha alongside food-chemistry,
  nutrition, or consumer-behavior keywords as a candidate for
  matcha × metal occurrence, without requiring any actual heavy-metal-
  analyte language in the abstract. This Zubir paper has no metal
  vocabulary anywhere — it is a behavioral/dietetics survey — yet was
  pulled under a `matcha-pb-product` occurrence slug. Three consecutive
  false positives from the same matcha-metal query strongly suggest
  the upstream OpenAlex/discover query for matcha × heavy-metal
  candidates is structurally broken: either the query terms are too
  permissive, the slug-to-PDF matching is keyword-only without any
  abstract-level analyte-presence verification, or the eprints.usm.my
  institutional-repository indexing is producing matches that score
  high on the "matcha" token without any metal-occurrence signal at
  all. Recommended remediation: add a hard pre-download filter that
  requires at least one of {Pb, lead, Cd, cadmium, As, arsenic, Hg,
  mercury, heavy metal, trace element, contamination, ICP, AAS, AFS,
  XRF, anodic stripping} as a literal substring in the candidate's
  abstract or title before the matcha × Pb / matcha × Al / matcha × Cd
  queries are allowed to enqueue. With three confirmed off-topic
  pulls in a row, the discover pipeline is currently producing more
  noise than signal for matcha-metal occurrence work, and the human-
  review cost of triaging these dissertations and antioxidant studies
  exceeds the value of the rare true positive that the current loose
  filter might catch.

---

## STOP — already-ingested PDF (FDA TDS FY2018-FY2020, Kimi corruption folder, 01_Fruits_and_Fruit_Products)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/01_Fruits_and_Fruit_Products/FDA Total Diet Study Report_ Fiscal Years 2018-2020 Elements Data.pdf`

**Suggested handle:** `KADC_fda-total-diet-study-report-fiscal-years-2018-2020`

**Identity-check result:**
- SHA-256 of the candidate PDF: `ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef`
- SHA-256 of `raw/reports/2022_07_14_TDSElementsReport_1436.pdf`: identical match (bit-for-bit duplicate).
- Existing primary narrative source page: `wiki/sources/fda-tds-elements-2018-2020.md` carries `raw_handle: manual-fetch-kimi`, `sha256: ba1f8c1ed5...`, `updated: 2026-05-20`.
- Companion source pages (already filed): `wiki/sources/fda2022-tds-elements-fy2018-fy2020.md` (CSV companion) and `wiki/sources/fda2022-tds-elements-analytical-key.md` (key-PDF companion). Both are referenced from the narrative page's `near_duplicates:` field.

**Skill v2.0 Phase 1 step 1 outcome:** the primary page is post-2026-05-14 clean (updated 2026-05-20), not in `routing_unresolved.csv`, and the narrative source's cite-key is not in `routing_malformed.csv`. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies.

**Audit history:** `fda-tds-elements-2018-2020.md` already received the v2.0 subagent audit on 2026-05-20 (verdict REVISE; four findings applied, one false positive documented, all five checks subsequently clean per the page's Verification notes section). Re-running the audit here would either duplicate the prior verdict or surface only false positives.

**Companion-page advisory flags (NOT this PDF):** `routing_malformed.csv` lists `fda2022-tds-elements-analytical-key` (missing `products;ingredients`) and `fda2022-tds-elements-fy2018-fy2020` (missing `matrices`) as `advisory` — fall-back-to-broad-scope, non-blocking. Those are the CSV and key-PDF companion pages, not the narrative report this PDF embodies. They are out of scope for this wrapper invocation.

**Action taken:** none. No ingest, no merge-enhance, no audit, no commit. PDF logged here so the next /loop tick (or the daemon's manual-fetch ingester) skips it without re-scanning.

**Final line:** `STOP: pdf-already-ingested-clean fda-tds-elements-2018-2020 (sha256 match to raw/reports/2022_07_14_TDSElementsReport_1436.pdf; primary page updated 2026-05-20; audit completed 2026-05-20 verdict REVISE)`


## Levels of Trace Elements in Commercial Fruit Juices Consumed in Jeddah City, Saudi Arabia.pdf

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/01_Fruits_and_Fruit_Products/`
- **Wrapper-supplied handle:** `KADC_levels-of-trace-elements-in-commercial-fruit-juice`
- **Stop reason:** byte-identical duplicate of an already-ingested PDF; existing wiki source page is post-2026-05-14 clean.

### Identity evidence

- SHA-256 of this PDF: `70a29cbe10755eaede9195b69fc188b862ae8d3a1a9261e1859beaecf359681d`
- SHA-256 of `raw/Manual Fetch Kimi /01_Fruits_and_Fruit_Products/01_Fruits_and_Fruit_Products/Levels of Trace Elements in Commercial Fruit Juices Consumed in Jeddah City, Saudi Arabia.pdf`: `70a29cbe10755eaede9195b69fc188b862ae8d3a1a9261e1859beaecf359681d`
- Existing wiki source page: `wiki/sources/farid2010-fruit-juices-jeddah-trace-elements.md`
  - `raw_handle: manual-fetch-kimi`
  - `updated: 2026-05-20` (merge-enhance pass against the PDF, full verification notes recorded)
  - `cite_key: farid2010-fruit-juices-jeddah-trace-elements`
- Identity-check grep hits (DOI null on this paper; checked title-substring and cite-key paths): `farid2010-fruit-juices-jeddah-trace-elements.md`.

### Skill v2.0 Phase 1 step 1 outcome

The existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv`, and not in `data/evidence/routing_malformed.csv`. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress merge-enhance work already verified against this same PDF a week ago.

### Action taken

- Tracker row for `KADC_levels-of-trace-elements-in-commercial-fruit-juice` (line 859 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-duplicate`, with the existing `cite_key` populated so future wrapper ticks short-circuit on the row read instead of re-discovering the SHA collision.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit.
- The page itself was not modified; the prior 2026-05-20 merge-enhance is the canonical version.

**Final line:** `STOP: pdf-already-ingested-clean farid2010-fruit-juices-jeddah-trace-elements (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit)`

## KADC_survey-of-total-arsenic-and-inorganic-arsenic-in-a — PARALLEL-INGEST RACE / DUPLICATE PAPER

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/01_Fruits_and_Fruit_Products/`
- **PDF:** `Survey of total arsenic and inorganic arsenic in apple and pear juice.pdf`
- **Wrapper-supplied handle:** `KADC_survey-of-total-arsenic-and-inorganic-arsenic-in-a`
- **Existing cite-key:** `fsanz2012-arsenic-apple-pear-juice-australia-nz`
- **Authors / venue:** Food Standards Australia New Zealand (FSANZ), 2013 targeted analytical survey report (samples collected April/May 2012)
- **SHA256 of both PDF copies:** `6bd162cc2e489587c62aa70e2ae6146311b73005dc41e81e53ca605a42669ca0`

### Why this fired

The Kimi-Agent-Download-Corruption-Issue folder is a duplicate tree containing copies of papers already filed under `raw/Manual Fetch Kimi /01_Fruits_and_Fruit_Products/01_Fruits_and_Fruit_Products/`. The MFK_ root copy of this PDF was ingested 2026-05-20 (tracker line 205) and the existing source page was merge-enhanced under the v2.0 skill the same day (subagent verdict REVISE, two ⚠️ findings, both addressed in the same commit). The KADC_ copy is byte-identical to the MFK_ original.

- Identity-check grep hits:
  - Title-substring grep: `fsanz2012-arsenic-apple-pear-juice-australia-nz.md` (single hit, exact title)
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity established via title + raw_path + author
  - SHA256 collision against the MFK_ root: confirmed via `shasum -a 256` on both file paths

### Skill v2.0 Phase 1 step 1 outcome

The existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv`, and not in `data/evidence/routing_malformed.csv`. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress the 2026-05-20 merge-enhance work already verified by a fresh-context subagent against the same PDF.

### Action taken

- Tracker row for `KADC_survey-of-total-arsenic-and-inorganic-arsenic-in-a` (line 862 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-duplicate`, with the existing `cite_key` populated so future wrapper ticks short-circuit on the row read instead of re-discovering the SHA collision.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit.
- The page itself was not modified; the prior 2026-05-20 merge-enhance is the canonical version.

**Final line:** `STOP: pdf-already-ingested-clean fsanz2012-arsenic-apple-pear-juice-australia-nz (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit)`

## KADC_cadmium-and-lead-in-wild-edible-mushrooms-from-the — KIMI-CORRUPTION DUPLICATE OF ALREADY-INGESTED MFK_ ROOT

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/`
- **Filename:** `Cadmium and Lead in Wild Edible Mushrooms from the Eastern Region of Poland's 'Green Lungs'.pdf`
- **SHA256:** `169923ea1feb51b63a9dd37049d480dd8d06aef31298e5c22a2c59d45d7bc0dc`
- **Existing wiki source page:** `wiki/sources/mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland.md`
- **Existing `cite_key`:** `mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland`
- **Existing `raw_handle`:** `MFK_cadmium-and-lead-in-wild-edible-mushrooms-from-the`
- **Existing `updated`:** `2026-05-20`

### Why skipped

Same duplicate-tree pattern as the prior KADC_ entries in this log. The Kimi-Agent-Download-Corruption-Issue folder is a duplicate tree mirroring papers already filed under `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/`. The MFK_ root copy of this PDF was ingested 2026-05-20 (tracker line 210) and the existing source page was merge-enhanced through the v2.0 skill with full numerical fidelity verification against the PDF (all 18 wild-species Pb DM/FM values, all 18 wild-species Cd DM/FM values, all 3 cultivated-species Pb/Cd values, Table 3 intake values, methods, and reference materials). The KADC_ copy is byte-identical to the MFK_ root (SHA256 verified).

- Identity-check grep hits:
  - Title-substring grep: `mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland.md` (single hit, exact title match in frontmatter)
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity established via title + raw_path + author
  - SHA256 collision against the MFK_ root: confirmed via `shasum -a 256` on both file paths (`169923ea…d7bc0dc`)

### Skill v2.0 Phase 1 step 1 outcome

The existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv`, and not in `data/evidence/routing_malformed.csv`. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress the 2026-05-20 merge-enhance work already verified line-by-line against the same PDF.

### Action taken

- Tracker row for `KADC_cadmium-and-lead-in-wild-edible-mushrooms-from-the` (line 867 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-duplicate`, with the existing `cite_key` populated so future wrapper ticks short-circuit on the row read instead of re-discovering the SHA collision.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit.
- The page itself was not modified; the prior 2026-05-20 merge-enhance is the canonical version.

**Final line:** `STOP: pdf-already-ingested-clean mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit)`

## KADC_determination-of-tin-in-canned-foods-by-inductivel — SHA-IDENTICAL DUPLICATE / ALREADY INGESTED CLEAN

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/`
- **PDF:** `Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry.pdf`
- **KADC SHA256:** `cf02363493b9f24ba353e181ba3ac7fac20dea26b5356fec7584283be8fe8862`
- **MFK root path:** `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry.pdf`
- **MFK root SHA256:** `cf02363493b9f24ba353e181ba3ac7fac20dea26b5356fec7584283be8fe8862` (byte-identical)
- **Existing cite-key:** `trandafir2012-tin-canned-foods-icp-ms`
- **Existing page path:** `wiki/sources/trandafir2012-tin-canned-foods-icp-ms.md`
- **Existing page `updated:`** `2026-05-20` (post-2026-05-14 cutoff)

### Why skipped

Same duplicate-tree pattern as prior KADC_ entries in this log. The Kimi-Agent-Download-Corruption-Issue folder mirrors PDFs already filed under `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/`. The MFK_ root copy of this PDF was ingested 2026-05-20 (tracker line 213) and the source page was merge-enhanced through the v2.0 skill with full numerical fidelity verification against the PDF: Table 3's 14 products × 2 fractions (28 mean ± SD values), Figure 1's post-opening kinetics, accuracy standards (0.505 at 0.5 ppm; 5.12 at 5 ppm; RSDs 2.42% and 1.87%), recovery range 91.3–105.2%, LOD ~0.01 ppb, calibration linearity, JECFA PTWI (14 mg/kg BW/week), EU 1881/2006 limits (200/100/50 mg/kg), and Codex 250 mg/kg. The KADC_ copy is byte-identical to the MFK_ root (SHA256 verified).

- Identity-check grep hits:
  - Title-substring grep: `trandafir2012-tin-canned-foods-icp-ms.md` (single hit)
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity via title + raw_handle + author + journal-volume-page
  - SHA256 collision against the MFK_ root: confirmed identical (`cf02363493b9f24ba353e181ba3ac7fac20dea26b5356fec7584283be8fe8862`)

### Skill v2.0 Phase 1 step 1 outcome

Existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv`, not in `data/evidence/routing_malformed.csv`. Audit verdict on the page was REVISE (one ❌ on Check 2 slug vocabulary applied 2026-05-20). The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either duplicate the page or regress the 2026-05-20 merge-enhance + audit-revise work.

### Action taken

- Tracker row for `KADC_determination-of-tin-in-canned-foods-by-inductivel` (line 870 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-duplicate` with existing cite-key populated so future wrapper ticks short-circuit on row read.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit.
- The wiki source page was not modified; the prior 2026-05-20 merge-enhance + audit-revise is the canonical version.

**Final line:** `STOP: pdf-already-ingested-clean trandafir2012-tin-canned-foods-icp-ms (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit)`

## KADC_distribution-of-cadmium-in-fresh-vegetables-market — KIMI CORRUPTION / OFF-TOPIC PDF

- **Source PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/Distribution of Cadmium in Fresh Vegetables Marketed in the Yangtze River Delta Region and Health Risk Assessment.pdf`
- **Suggested handle from wrapper:** `KADC_distribution-of-cadmium-in-fresh-vegetables-market`
- **Filename intent:** Distribution of cadmium in fresh vegetables marketed in the Yangtze River Delta region + health risk assessment (a real, on-topic HMI paper this folder was supposed to backfill).
- **Actual PDF content:** Skoko A-MG, Vilić R, Kovač M, Nevistić A, Šarkanj B, Lores M, Celeiro M, Skenderović Babojelić M, Kovač T, Lončarić A (2022). "Occurrence of Patulin and Polyphenol Profile of Croatian Traditional and Conventional Apple Cultivars during Storage." *Foods* 11(13): 1912. DOI: 10.3390/foods11131912. CC BY 4.0, MDPI.
- **Why rejected:** Off-topic for HMI. The paper measures the mycotoxin patulin (a Penicillium expansum secondary metabolite) and 14 polyphenolic compounds (catechin, epicatechin, phloridzin, phloretin, procyanidins B1/B2/A2, quercetine and three glycosides, myricetin, chlorogenic acid, 4-hydroxycinnamic acid, 2,6-dimethoxybenzoic acid) in 9 Croatian apple cultivars across 0/3/6-month cold storage. Quantification is UHPLC-MS/MS for patulin and LC-DAD for polyphenols. Reads in full (pp. 1–15 incl. Appendices A/B): no Pb, Cd, As, Hg, Ni, Al, Cr, Sn, Sb, or U values; no ICP-MS/AAS; no soil-metal context; no heavy-metal regulatory comparison. The one regulatory-limit citation (25 µg/kg) is the EU patulin limit (Reg. EC 1881/2006), not a metals limit. The paper would belong in a mycotoxin database, not HMI.
- **This is exactly the Kimi corruption case this folder is named for.** The Kimi-agent downloader fetched the wrong PDF for the cadmium-in-Yangtze-vegetables slug. The actual on-topic paper is unrelated to this file.

### Skill v2.0 outcome

Phase 1 step 2 (read PDF) was completed in full — abstract, introduction, methods, all seven results tables (polyphenol content per cultivar × storage month), Appendix A correlation matrix, Appendix B method validation tables, references. Phase 1 step 3 (write/merge source page) was NOT executed: there is no HMI source page to write because the paper has no HMI-relevant content to extract. Frontmatter would have `metals: []`, no `## Key numbers` could be populated, and a "stub source page about an off-topic paper" would itself be a defect.

### Action taken

- No wiki source page written, no commit, no routing audit run, no audit-queue entry, no audit subagent spawned. Per skill stop-condition "paper-internal data-integrity issue that's not the obvious mirroring pattern" — here the data-integrity issue is at the file level (wrong PDF behind the filename), not inside the paper.
- The misnamed PDF stays in place under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/` so the corruption-folder tracker continues to see it. Surfacing here (rather than moving to a `_skipped/` subfolder) preserves the audit trail of which Kimi-fetched slugs delivered wrong content; a downstream pass can either (a) re-fetch the actually-intended cadmium-in-Yangtze paper under the correct slug or (b) bulk-archive confirmed-corrupt PDFs once the pattern is fully mapped.

### Upstream signal

This is at least the second Kimi-folder PDF this session that turned out to be a content/filename mismatch (cf. the SHA-identical-to-MFK Trandafir tin paper above, which was a *different* kind of duplication issue but in the same parent corruption folder). The Kimi-agent batch needs systemic verification: a one-pass script that opens each PDF, extracts the actual title/DOI, and compares against the filename slug would surface every mis-fetched PDF in a single sweep rather than discovering them one-at-a-time across many autonomous ticks. Worth considering before continuing to drain this folder PDF-by-PDF.

**Final line:** `STOP: kimi-corruption-off-topic-pdf skoko2022-patulin-polyphenol-croatian-apples (actual content is patulin+polyphenols in apples, not cadmium in vegetables; no heavy-metals data to ingest)`

## KADC_exposure-to-lead-and-cadmium-in-the-sixth-total-di — TRUE DUPLICATE CONFLICT (recurrence of 2026-05-20 stop)

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/`
- **PDF:** `Exposure to Lead and Cadmium in the Sixth Total Diet Study - China.pdf`
- **Suggested handle:** `KADC_exposure-to-lead-and-cadmium-in-the-sixth-total-di`
- **Actual paper:** Zhao X, Shao Y, Ma L, Shang X, Zhao Y, Wu Y (2022). "Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019." *China CDC Weekly*. DOI 10.46234/ccdcw2022.045.

### Conflict

Two existing wiki source pages already cover this same DOI:

  - `wiki/sources/zhao2022-china-sixth-tds-pb-cd.md`
    — `updated: 2026-05-13`, `raw_handle: manual-fetch-kimi` (legacy non-prefixed handle)
    — `raw_path: raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Exposure to Lead and Cadmium in the Sixth Total Diet Study - Chin.pdf`
  - `wiki/sources/zhao2022-china-tds6-lead-cadmium-exposure.md`
    — `updated: 2026-05-17`, `raw_handle: MFK_exposure-lead-cadmium-sixth-tds-china`
    — `raw_path: raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Exposure to Lead and Cadmium in the Sixth Total Diet Study - China.pdf`

Both pages have substantively the same content (overlapping Key numbers tables, identical Pb/Cd national means, identical Hunan finding); they were ingested under two different cite-key conventions on different days. This was already surfaced as a stop on 2026-05-20 (tracker.csv row 215, MFK_ handle), and the underlying duplicate-page conflict has not been resolved since.

### Why this is a stop, not a merge-enhance

The skill's EXISTING/merge-enhance path assumes a single existing page to enhance. With two pages claiming the same DOI, the merge target is ambiguous, and the resolution requires curatorial decisions Claude should not make autonomously:

1. Which cite-key wins as canonical: `zhao2022-china-sixth-tds-pb-cd` or `zhao2022-china-tds6-lead-cadmium-exposure`. Both follow valid conventions; neither is "obviously wrong."
2. Which `raw_handle` wins (legacy `manual-fetch-kimi` vs `MFK_exposure-lead-cadmium-sixth-tds-china` vs the new `KADC_...` suggested by the corruption-folder).
3. Which page to delete and which inbound `[[wiki/sources/...]]` references to rewrite (likely none yet, given the routing layer fans out via cite-key, but a backlink sweep is needed).
4. Whether to update the surviving page's `raw_path` to the corruption-folder copy or keep the original Manual Fetch Kimi path (filesystem path independence vs forensic provenance).

Ingesting a third copy under `KADC_exposure-to-lead-and-cadmium-in-the-sixth-total-di` would compound the duplication, not resolve it.

### Action taken

- No wiki source page written, no commit, no routing audit run, no audit-queue entry, no audit subagent spawned.
- Updating tracker.csv row 872 (the KADC_ entry) from `unprocessed` to `stopped` with this report's note.
- Surfacing for Karen as a recurring duplicate-cite-key conflict in the corpus. Resolution path: pick one cite-key as canonical, delete the other source page, rerun `npm run evidence:source-routes` to confirm no orphaned references, and only then continue draining the KADC_ folder.

### Upstream signal

The duplicate-page problem here is a *corpus* issue, not a corruption-folder issue. The KADC_ tick correctly attempted to ingest this paper as if it were new because the tracker had no `KADC_` row for it yet; the deduper at the tick level checks the tracker, not the DOI grep across `wiki/sources/`. Adding a DOI-first dedup pass (grep `wiki/sources/` for the suggested DOI before queueing a tracker row) would catch this class of conflict at fetch time rather than at ingest time. Worth considering as a Codex micro-task: extend the manual-fetch pre-queue check with a `doi_present_in_corpus` filter.

**Final line:** `STOP: duplicate-source-pages KADC_exposure-to-lead-and-cadmium-in-the-sixth-total-di (DOI 10.46234/ccdcw2022.045 already exists on two wiki source pages with different cite-keys; needs Karen to pick canonical cite-key and delete the other before any further ingest)`

## KADC_the-first-hong-kong-total-diet-study-metallic-cont — SHA-IDENTICAL DUPLICATE / ALREADY INGESTED CLEAN

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/`
- **PDF:** `The First Hong Kong Total Diet Study_ Metallic Contaminants.pdf`
- **KADC SHA256:** `f87da014f81ceae5a964f8df6b5b7274bb2da1c805a1f7466cc27359b51d1f6c`
- **MFK root path:** `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/The First Hong Kong Total Diet Study_ Metallic Contaminants.pdf`
- **MFK root SHA256:** `f87da014f81ceae5a964f8df6b5b7274bb2da1c805a1f7466cc27359b51d1f6c` (byte-identical)
- **Existing cite-key:** `cfs2013-hktds-metallic-contaminants`
- **Existing page path:** `wiki/sources/cfs2013-hktds-metallic-contaminants.md`
- **Existing page `updated:`** `2026-05-20` (post-2026-05-14 cutoff)

### Why skipped

Same duplicate-tree pattern as prior KADC_ entries in this log. The Kimi-Agent-Download-Corruption-Issue folder mirrors PDFs already filed under `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/`. The MFK_ root copy of this PDF was ingested then merge-enhanced 2026-05-20 (tracker line 222) with full numerical fidelity verification against the 111-page CFS Report No. 5: Tables 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1 (per-food-group means/ranges for Al, Sb, Cd, Pb, MeHg, Ni, Sn, V), all LOD/LOQ values, dietary-exposure benchmarks (PTWI/PTMI/TDI percentages), the 11%-of-childbearing-age-women-exceeding-1.6-PTWI MeHg figure, and the deep-fried-dough 250 mg/kg Al / oyster 1,300 µg/kg Cd / tuna 330 µg/kg MeHg / peanut 5,300 µg/kg Ni food-item anchors. Vanadium (Table 10.1) was added in the merge-enhance pass. Audit subagent (2026-05-20) returned PROMOTE verdict with a minor wording revision applied for the §3.8 vs Appendix I Table A Chinese-spinach range discrepancy. The KADC_ copy is byte-identical to the MFK_ root (SHA256 verified).

- Identity-check grep hits:
  - Title-substring grep on `wiki/sources/`: `cfs2013-hktds-metallic-contaminants.md` (single hit; the sibling `cfs2012-hktds-inorganic-arsenic.md` is a near-duplicate cross-reference, not the same paper)
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity via title + raw_handle + author (Centre for Food Safety HK) + publication + report number
  - SHA256 collision against the MFK_ root: confirmed identical (`f87da014f81ceae5a964f8df6b5b7274bb2da1c805a1f7466cc27359b51d1f6c`)

### Skill v2.0 Phase 1 step 1 outcome

Existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv`, not in `data/evidence/routing_malformed.csv`. Audit verdict on the page was PROMOTE (one ⚠️ Chinese-spinach Appendix-I sourcing note applied 2026-05-20). The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either duplicate the page or regress the 2026-05-20 merge-enhance + audit-promote work.

Precedent for this exact PDF already exists on tracker line 299: `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/The First Hong Kong Total Diet Study_ Metallic Contaminants.pdf` was skipped 2026-05-28 under the same MFK_ handle for the same reason. The KADC_ tree is a third copy of the same PDF (the Kimi corruption folder bundled a fresh mirror of multiple Vegetables/Condiments subfolders).

### Action taken

- Tracker row for `KADC_the-first-hong-kong-total-diet-study-metallic-cont` (line 879 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `stopped` with cite-key reference and SHA-identical-duplicate reasoning in the notes column so future wrapper ticks short-circuit on row read.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit.
- The wiki source page was not modified; the prior 2026-05-20 merge-enhance + audit-promote is the canonical version.

**Final line:** `STOP: pdf-already-ingested-clean cfs2013-hktds-metallic-contaminants (SHA-identical to MFK_ root; existing page updated 2026-05-20 and clean per routing audit; PROMOTE verdict)`

## KADC_the-potential-health-risk-associated-with-edible-v — KIMI CORRUPTION / OFF-TOPIC PDF

- **Source PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/The Potential Health Risk Associated with Edible Vegetables Grown on Cr(VI) Polluted Soils.pdf`
- **Suggested handle from wrapper:** `KADC_the-potential-health-risk-associated-with-edible-v`
- **Filename intent:** Potential health risk associated with edible vegetables grown on Cr(VI) polluted soils (a plausibly on-topic HMI paper this Kimi-mirror was supposed to backfill — would have covered Cr-VI uptake from contaminated soils into edible vegetables, target health-risk assessment).
- **Actual PDF content:** Li C, Zhang E, Han J (2020). "Exploring the Effect of Market Conditions on Price Premiums in the Online Health Community." *International Journal of Environmental Research and Public Health* 17(4): 1326. DOI: 10.3390/ijerph17041326. CC BY 4.0, MDPI. Authors at Shanghai University of Finance and Economics + Guizhou University of Finance and Economics. Received 13 Jan 2020; accepted 14 Feb 2020; published 19 Feb 2020.
- **Why rejected:** Off-topic for HMI. The paper is a cross-sectional econometric study (n=68,945 doctors from 1,000 hospitals across 31 Chinese provinces, data collected July 2019 from haodf.com — "Good Doctor" online health community) of how online doctor-resource supply (Participation Ratio), market concentration (Concentration Ratio), and social stigma of disease (AIDS, hepatitis B, psychosis vs ordinary diseases like cold, fracture, diabetes) influence the price premium of online medical consultation services. Analysis is OLS + 2SLS + GMM with province- and hospital-level fixed effects in STATA 15. Headline coefficients: PR β₁=−7.703 (p<0.01), CR β₂=1.472 (p>0.05, n.s.), SS β₃=4.780 (p<0.01), SS×PR β₄=8.943 (p<0.01). Full 14-page read (abstract, intro, hypotheses, methods, all model tables, discussion, references, all 43 citations) confirms zero heavy-metal measurements anywhere: no Pb, Cd, As, Hg, Ni, Al, Cr, Cr-VI, Sn, Sb, or U values; no ICP-MS/AAS/AFS/XRF; no analytical chemistry; no soil-metal context; no food-occurrence data; no vegetable, soil, or contamination measurements of any kind. The string "Cr" appears only in econometric symbol "CR" (Concentration Ratio). The string "metal" appears nowhere. The string "soil" appears nowhere. The journal name (*Int. J. Environ. Res. Public Health*) is the only filename-aligned signal; IJERPH publishes a wide spread of public-health work including health-services and e-health economics.
- **This is the third confirmed Kimi-corruption-off-topic-PDF case in this folder** after Skoko 2022 (patulin+polyphenols in apples behind a `distribution-of-cadmium-in-fresh-vegetables-market` slug) and the upcoming pattern. The Kimi-agent downloader fetched a completely unrelated MDPI/IJERPH paper for the Cr(VI)-in-vegetables slug; whatever the true on-topic paper is (likely a Cr-VI soil-to-vegetable uptake / health-risk study), it is not behind this filename.

### Skill v2.0 outcome

Phase 1 step 2 (read PDF) was completed in full — abstract, six hypotheses, research model figure, methods (haodf.com data collection, variable definitions, fixed-effects + 2SLS + GMM estimation), all eight model results columns, descriptive-statistics correlation table, robustness checks, discussion, limitations, conclusions, all 43 references. Phase 1 step 3 (write/merge source page) was NOT executed: there is no HMI source page to write because the paper has no HMI-relevant content to extract. Frontmatter would have `metals: []`, no `## Key numbers` could be populated, and a "stub source page about an off-topic econometric paper on online medical consultation pricing" would itself be a defect.

### Action taken

- No wiki source page written, no commit on wiki/, no routing audit run, no audit-queue entry, no audit subagent spawned. Per skill stop-condition "paper-internal data-integrity issue that's not the obvious mirroring pattern" — here the data-integrity issue is at the file level (wrong PDF behind the filename), not inside the paper.
- Tracker row 881 flipped `unprocessed` → `stopped` with the actual-paper key and stop reason in the notes column so future wrapper ticks short-circuit on row read.
- The misnamed PDF stays in place under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/02_Vegetables_and_Vegetable_Products/` so the corruption-folder tracker continues to see it. Surfacing here (rather than moving to a `_skipped/` subfolder) preserves the audit trail of which Kimi-fetched slugs delivered wrong content.

### Upstream signal

Second confirmed off-topic content/filename mismatch in `02_Vegetables_and_Vegetable_Products/` after the Skoko 2022 patulin paper (line 397-419 above). Both involved Kimi pulling an MDPI paper from a different research domain entirely; the only filename-aligned signal in either case was the publisher (MDPI) or the umbrella journal name. The systemic verification idea raised in the Skoko entry ("a one-pass script that opens each PDF, extracts the actual title/DOI, and compares against the filename slug would surface every mis-fetched PDF in a single sweep") is reinforced by this second hit: at least two of the seventeen PDFs in this subfolder are content-mismatched. A title-extraction sweep against the Kimi corruption folder before continuing per-PDF drain would identify the remaining mis-fetches in one pass instead of discovering them one autonomous tick at a time. Worth considering as a Codex micro-task before the next batch of KADC_ ticks.

**Final line:** `STOP: kimi-corruption-off-topic-pdf li-zhang-han-2020-ijerph-online-health-community-price-premiums (actual content is Chinese online-doctor pricing econometrics, DOI 10.3390/ijerph17041326; no heavy-metals data to ingest)`

## Determination of aluminium concentrations in black, green, and white tea samples_ effects of different infusion times and teapot species on aluminium.pdf — ALREADY-INGESTED, POST-CUTOFF CLEAN

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/`
- **Suggested handle:** `KADC_determination-of-aluminium-concentrations-in-black`
- **Actual paper:** Öztürk E, Yıldırım S, Akyol A (2024). "Determination of aluminium concentrations in black, green, and white tea samples: effects of different infusion times and teapot species on aluminium release." *European Food Research and Technology* 250:2225–2231. DOI: 10.1007/s00217-024-04532-w. CC BY 4.0 (Springer Nature open access; Türkiye TÜBİTAK funded). Karadeniz Technical + Hacettepe Universities, Türkiye.
- **PDF content confirmed on-topic:** Reading pages 1–7 in full (abstract through references) confirmed this is the genuine on-topic paper — Al quantification by HPLC-FD with HQS derivatisation in 5g/100mL black, green, and white tea infusions across 5 teapot materials (aluminium, copper, glass, steel, porcelain) × 3 infusion times (5, 10, 15 min), with EDI/HQ calculations against the JECFA Al TDI. Not a Kimi-corruption mis-fetch.
- **Why rejected for re-processing:** A high-quality merge-enhanced wiki source page already exists at `wiki/sources/ozturk2024-al-tea-infusion-teapot.md`, last `updated: 2026-05-20`, post-cutoff (post-2026-05-14 schema). Per the `/ingest-next-manual-fetch-pdf` v2.0 skill's Phase 1 step 1 candidate-selection rule: *"Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."* The DOI identity-check (`10.1007/s00217-024-04532-w`) and authors check (Öztürk) both hit the same single page. Routing logs are both clean — the source does not appear in `data/evidence/routing_unresolved.csv` or `data/evidence/routing_malformed.csv`.
- **Audit-queue state:** `data/evidence/audit-queue.csv` already carries this cite-key with `status=audited-promote`, `audit_verdict=PROMOTE`, `audit_applied_at=2026-05-20`. The Phase 2 subagent audit on the prior cycle was clean (all five checks PROMOTE; zero findings to apply). Re-running the full Phase 1 + Phase 2 + Phase 3 cycle would produce no schema or content delta — the page already encodes all 43 Table 1 condition-level means, the full Table 2 EDI/HQ matrix, the HPLC-FD method block, the documented body-vs-table 845.75/844.8 precision discrepancy, the corrected `[[metals/aluminum]]` US-spelling slug, the umbrella `[[ingredients/tea]]` slug per the 5-paper sub-variant threshold, and the Part 2 firewall-compliant Implications block. The merge-enhance pass already preserved cite_key, raw_handle, license, evidence_tier, sample_n, jurisdictions, matrices, products, and added the `## Verification notes` section per skill spec.
- **Action taken:** No wiki edit, no new commit on `wiki/sources/`, no routing-audit re-run, no new audit-queue row, no audit subagent spawned. The wrapper-script-supplied target does not qualify for re-processing under the skill's candidate-selection rule, and Phase 1 step 1 is the correct gate to reject at.
- **Upstream signal:** Per skill candidate-selection logic, the wrapper script ideally would not re-present already-ingested-post-cutoff-clean PDFs at all — the three identity checks (DOI, raw_handle, cite-key) plus a malformed-CSV check on the resolved cite-key would short-circuit before this skill is invoked. If the wrapper does not currently consult either `data/evidence/audit-queue.csv` or the existing source-page `updated:` field when picking next-PDF, that is the per-tick efficiency improvement to consider. Not blocking — the skill correctly rejects at Phase 1 step 1 — but it would save one PDF read + a stop-write per already-processed file in the Kimi-corruption-folder drain.

**Final line:** `STOP: already-ingested-post-cutoff-clean ozturk2024-al-tea-infusion-teapot (wiki/sources page updated 2026-05-20, audit-queue status audited-promote 2026-05-20, not in routing_malformed or routing_unresolved; per v2.0 skill Phase 1 step 1 candidate-selection rule, PDFs whose existing pages are post-2026-05-14 clean and not in malformed are skipped)`

## Elemental Composition of Japanese Matcha Powder and Infusions—Potential Role as a Functional Food in Metabolic Health.pdf — ALREADY INGESTED + AUDITED (post-cutoff clean)

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/`
- **Suggested handle:** `KADC_elemental-composition-of-japanese-matcha-powder-an`
- **Actual paper:** Szymczykowska K, Kupnicka P, Skonieczna-Żydecka K, Melkis K, Chlubek D, Jakubczyk K (2026). "Elemental Composition of Japanese Matcha Powder and Infusions—Potential Role as a Functional Food in Metabolic Health." *Beverages* 12(2):21. DOI: 10.3390/beverages12020021. CC BY 4.0 (MDPI open access). Pomeranian Medical University, Szczecin, Poland.
- **PDF content confirmed on-topic:** Read pages 1–5 (title, abstract, methods through §2.4, results §3 onset, Figure 1 infusion boxplots). Confirmed as the genuine on-topic paper — ICP-OES (Thermo Fisher iCAP 7400) quantification of 13 elements (Ca, Cr, Cu, Fe, K, Mg, Mn, Na, Ni, P, Pb, Sr, Zn) in two Japanese organic matcha types (daily DM, traditional TM) as both powder and infusion brewed at 25/70/80/90 °C from a single Uji-region producer (JONA + AgroBioTest certified). Of the HMTc analyte slate, only Pb, Cr (total, no speciation), and Ni are measured; Cd / As / Hg / Al / Sn / Sb / U are absent. Not a Kimi-corruption mis-fetch.
- **Why rejected for re-processing:** A high-quality merge-enhanced wiki source page already exists at `wiki/sources/szymczykowska2026-matcha-elemental-composition.md`, last `updated: 2026-05-20`, post-cutoff (post-2026-05-14 schema). Per the `/ingest-next-manual-fetch-pdf` v2.0 skill's Phase 1 step 1 candidate-selection rule: *"Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed."* The DOI identity-check (`10.3390/beverages12020021`) and cite-key check (`szymczykowska2026-matcha-elemental-composition`) both hit the same single page. Routing logs are both clean — the source does not appear in `data/evidence/routing_unresolved.csv` or `data/evidence/routing_malformed.csv`.
- **Audit-queue state:** `data/evidence/audit-queue.csv` already carries this cite-key with `status=audited-revised`, `audit_verdict=REVISE`, `audit_applied_at=2026-05-20`. The prior cycle's Phase 2 subagent flagged three ⚠️ concerns (Cr-powder figure-vs-text ~20× discrepancy where Figure 4 ~2.4 mg/kg conflicts with the authors' back-derivable 0.114 mg/kg from "0.50% of 40 µg/day RI"; Pb-powder figure-vs-EU-compliance-claim tension where Figure 4 TM ~5–7 mg/kg exceeds the 0.9 mg/kg EU 2023/915 plant-product ceiling cited by the authors; Mn anchor paraphrase tightening to preserve "just under 40%" / "just under 50%" hedges); all three were verified against the PDF and applied. Zero rejected. The page now encodes figure-based heavy-metal anchors for infusion Pb / Cr / Ni and powder Pb / Cr / Ni, the full digestion protocol, ICP-OES wavelengths, NIST SRM 8414 validation, yttrium recovery 90–106%, R² 0.998–1.000, the Limitations §5 sample-scope caveat (n=2 from a single producer in a single region), the Ni-in-powder mechanistic hypothesis with author caveat, both paper-internal contradictions flagged as load-bearing for downstream use, an explicit cross-link to `[[sources/ozturk2024-al-tea-infusion-teapot]]` as the Al-coverage complement, corrected slug vocabulary (`[[ingredients/matcha-powder]]` + `[[ingredients/tea]]` instead of invalid `[[ingredients/green-tea]]` / `[[ingredients/matcha]]`; `[[products/matcha]]` + `[[products/tea-infusions]]` instead of invented `[[products/matcha-beverages]]`; matrices `tea-infusion` instead of non-vocabulary `matcha-infusion`), and the restored full `raw_path`. Re-running Phase 1 + Phase 2 + Phase 3 would produce no schema or content delta.
- **Action taken:** No wiki edit, no new commit on `wiki/sources/`, no routing-audit re-run, no new audit-queue row, no audit subagent spawned. The wrapper-script-supplied target does not qualify for re-processing under the skill's candidate-selection rule, and Phase 1 step 1 is the correct gate to reject at.
- **Upstream signal:** Same pattern as the immediately preceding ozturk2024 stop in this file — the wrapper script appears not to short-circuit on already-ingested-post-cutoff-clean PDFs. The three identity checks (DOI, raw_handle, cite-key) plus a malformed-CSV check on the resolved cite-key would prevent this skill from being invoked for PDFs that are already in `audit-queue.csv` with `status=audited-*` and `audit_applied_at >= 2026-05-14`. Two consecutive Kimi-corruption-folder PDFs (ozturk2024 + szymczykowska2026, both already processed in the 2026-05-20 batch) re-presented in the same tick run is the signal to consider a wrapper-side audit-queue dedupe filter. Not blocking — the skill correctly rejects at Phase 1 step 1 — but it would save one PDF read + a stop-write per already-processed file in the Kimi-corruption-folder drain.

**Final line:** `STOP: already-ingested-post-cutoff-clean szymczykowska2026-matcha-elemental-composition (wiki/sources page updated 2026-05-20, audit-queue status audited-revised 2026-05-20, not in routing_malformed or routing_unresolved; per v2.0 skill Phase 1 step 1 candidate-selection rule, PDFs whose existing pages are post-2026-05-14 clean and not in malformed are skipped)`

## Nickel_ estimate of long-term intake via food based on the BfR MEAL Study.pdf — SHA-IDENTICAL DUPLICATE / ALREADY INGESTED + AUDITED (post-cutoff clean)

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/`
- **Suggested handle:** `KADC_nickel-estimate-of-long-term-intake-via-food-based`
- **KADC SHA256:** `09745760f578d6847a500be46b185f18c454fa36d507cdfe73d2596401ec4c9c`
- **MFK root path:** `raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/Nickel_ estimate of long-term intake via food based on the BfR MEAL Study.pdf`
- **MFK root SHA256:** `09745760f578d6847a500be46b185f18c454fa36d507cdfe73d2596401ec4c9c` (byte-identical)
- **Actual paper:** German Federal Institute for Risk Assessment (BfR) (2022). "Nickel: estimate of long-term intake via food based on the BfR MEAL Study." *BfR Communication No. 033/2022*, dated 22 November 2022. No DOI (BfR communications are issued under report numbers; no_doi_assigned: true). © BfR. Government report (A-tier).
- **PDF content confirmed on-topic:** Reading all 21 pages in full (background, hazard characterisation §2, exposure §3, occurrence Tables 1–2, consumption data, exposure estimates Tables 3–6, high-consumer per-food tables 7–8, uncertainties §3.4, risk characterisation §4 with TDI exhaustion Tables 9–10, European comparison Tables 11–12, summary, references) confirms this is the genuine BfR MEAL nickel TDS communication — Ni occurrence in 840 pools from 356 foods across 19 main food groups, mLB+UB censoring, NVS II and VELS consumption pairing, 11% TDI exhaustion in adults (P50, UB) vs 42% in children, cocoa powder 11,050 µg/kg / cashew nuts 5,350 µg/kg as Table 2 leaders. Not a Kimi-corruption mis-fetch.
- **Existing cite-key:** `bfr2022-nickel-dietary-intake-germany-meal`
- **Existing page path:** `wiki/sources/bfr2022-nickel-dietary-intake-germany-meal.md`
- **Existing page `updated:`** `2026-05-20` (post-2026-05-14 cutoff)

### Why skipped

Same SHA-identical-mirror pattern as the prior `KADC_the-first-hong-kong-total-diet-study-metallic-cont` and `KADC_determination-of-tin-in-canned-foods-by-inductivel` entries in this log. The Kimi-Agent-Download-Corruption-Issue folder mirrors PDFs already filed under `raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/`. The MFK_ root copy of this PDF was ingested then merge-enhanced 2026-05-20 (tracker line 235) with audit subagent verdict REVISE; 4 findings applied (slug-vocab: `[[ingredients/dark-chocolate]]`→`[[ingredients/chocolate]]`; `[[products/infant-formula]]` removed since paper does not measure infant formula directly — food group 16 is weaning porridges/millet not infant formula proper; `[[regulations/efsa-ni-contam-2020]]`→`[[regulations/efsa-nickel-tdi]]`; N=15 parenthetical clarified to "n=15 children exceeding the TDI out of N=732 in the cohort"); 0 rejected. Phase 1 also corrected transposed Children-total UB values (mean 6.2→6.1 and P95 10.8→10.6; prior page had Boys subgroup values mislabeled as total per PDF Table 4 p.10), added Tables 7/8 high-consumer per-food anchors, added 6 months–<1 year and 1–<2 year subgroup means and TDI exhaustion percentages, expanded European comparison anchors (Tables 11/12), and clarified the (P50, UB) framing for the lead-paragraph 11%/42% TDI figures. The KADC_ copy is byte-identical to the MFK_ root (SHA256 verified).

- Identity-check grep hits:
  - Title-substring grep on `wiki/sources/`: `bfr2022-nickel-dietary-intake-germany-meal.md` (single hit; the sibling `fechner2022-bfr-meal-hg-cd-pb-ni-germany.md` is a different paper covering Hg/Cd/Pb/Ni from the broader MEAL series, not this Ni-only TDS communication)
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity via title + raw_handle + author (BfR) + publication (BfR Communication No. 033/2022)
  - SHA256 collision against the MFK_ root: confirmed identical (`09745760f578d6847a500be46b185f18c454fa36d507cdfe73d2596401ec4c9c`)
  - Audit-queue check: `bfr2022-nickel-dietary-intake-germany-meal` carries `status=audited-revised`, `audit_verdict=REVISE`, `audit_applied_at=2026-05-20`

### Skill v2.0 Phase 1 step 1 outcome

Existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv`, not in `data/evidence/routing_malformed.csv`. Audit verdict on the page was REVISE with all 4 findings applied 2026-05-20. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either duplicate the page or regress the 2026-05-20 merge-enhance + audit-revise work (which already encoded the transposed-value correction and the four slug/scope audit findings).

### Action taken

- Tracker row for `KADC_nickel-estimate-of-long-term-intake-via-food-based` (line 891 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `stopped` with cite-key reference and SHA-identical-duplicate reasoning in the notes column so future wrapper ticks short-circuit on row read.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit + this stop note.
- The wiki source page was not modified; the prior 2026-05-20 merge-enhance + audit-revise is the canonical version.

### Upstream signal

This is the third already-ingested-post-cutoff-clean PDF surfaced in the `07_Processed_Foods_Snacks_Beverages/` Kimi-corruption-folder drain in this session, after `Determination of aluminium concentrations in black, green, and white tea samples` (ozturk2024) and `Elemental Composition of Japanese Matcha Powder and Infusions` (szymczykowska2026). The pattern is now well-established: the Kimi corruption folder's 07_Processed_Foods subfolder contains multiple SHA-mirrors of MFK_ roots already processed in the 2026-05-20 batch. A pre-tick wrapper-side audit-queue + sources-folder dedupe filter would short-circuit these before the skill is invoked. Three back-to-back already-clean rejections in the same subfolder is a strong enough signal to consider a one-pass dedupe sweep over the Kimi-corruption 07_Processed_Foods subfolder before the next ingest tick.

**Final line:** `STOP: already-ingested-post-cutoff-clean bfr2022-nickel-dietary-intake-germany-meal (SHA-identical to MFK_ root; wiki/sources page updated 2026-05-20, audit-queue status audited-revised 2026-05-20, not in routing_malformed or routing_unresolved; per v2.0 skill Phase 1 step 1 candidate-selection rule, PDFs whose existing pages are post-2026-05-14 clean and not in malformed are skipped)`

---

## `KADC_the-heavy-metals-analyses-in-canned-tomato-paste-r` — SHA-identical duplicate of MFK_ root (already ingested 2026-05-20)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf`
**Suggested handle:** `KADC_the-heavy-metals-analyses-in-canned-tomato-paste-r`
**Existing wiki page:** `wiki/sources/david2008-heavy-metals-canned-tomato-paste-romania.md`
**Existing page `updated:`** `2026-05-20`
**Audit-queue status:** `audited-revised` (verdict QUARANTINE, 7/8 findings applied 2026-05-20)
**Stop reason:** Skill v2.0 Phase 1 step 1 candidate-selection rule

### Identity confirmation

- SHA-256 collision check across the two parenthetical-distinguished filenames in the KADC 07_Processed_Foods subfolder:
  - `The heavy metals analyses in canned tomato paste.pdf` → `42fb8a5a543a05cd16e00af9cc98bc010c729592`
  - `The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf` → `42fb8a5a543a05cd16e00af9cc98bc010c729592`
  - Same SHA, same byte length (204,873 B). The "(Romanian study on sauces)" parenthetical is a Kimi-agent-side filename annotation, not a different paper.
- Title-substring grep on `wiki/sources/` confirms `david2008-heavy-metals-canned-tomato-paste-romania.md` is the canonical page; six sibling tomato-related sources cover different studies (Belabid 2025, Shavali-Gilani 2025, Grochowska-Niedworok 2020, Kangre 2024, CFS 2012) and do not collide.
- The existing page's `raw_path:` already references the un-parenthesized canonical MFK_ root in `raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/...`, and the page's 2026-05-20 verification note explicitly records the identical-byte duplication: *"identical file present in the folder under both `The heavy metals analyses in canned tomato paste.pdf` and `The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf`; same byte length, same content."*

### Skill v2.0 Phase 1 step 1 outcome

Existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv`, not in `data/evidence/routing_malformed.csv`. Audit verdict QUARANTINE with 7 of 8 findings applied 2026-05-20 (5 Part-12 brand-firewall replacements, Part-2 wiki/HMTc-firewall rewrite, regulation slug fix, redundant matrix slug drop, method endpoint expansion, calibration R-value precision). The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either duplicate the page or regress the 2026-05-20 merge-enhance + audit-revise work.

### Action taken

- No ingest, no merge-enhance, no audit, no commit.
- Stop note recorded here.
- Wiki source page not modified; the prior 2026-05-20 merge-enhance + audit-revise remains canonical.

### Upstream signal

This is the fourth already-ingested-post-cutoff-clean PDF surfaced in the `07_Processed_Foods_Snacks_Beverages/` Kimi-corruption-folder drain in this session, following `ozturk2024` (aluminium in tea), `szymczykowska2026` (matcha), and `bfr2022-nickel-dietary-intake-germany-meal`. The pattern is consistent: the Kimi corruption 07_Processed_Foods subfolder contains multiple SHA-mirrors of MFK_ roots already processed in the 2026-05-20 batch. A pre-tick wrapper-side audit-queue + sources-folder dedupe filter would short-circuit these before the skill is invoked. Four back-to-back already-clean rejections in the same subfolder strengthens the case for a one-pass dedupe sweep over the Kimi-corruption 07_Processed_Foods subfolder before the next ingest tick.

**Final line:** `STOP: already-ingested-post-cutoff-clean david2008-heavy-metals-canned-tomato-paste-romania (SHA-identical to MFK_ root; wiki/sources page updated 2026-05-20, audit-queue status audited-revised 2026-05-20 with 7/8 findings applied, not in routing_malformed or routing_unresolved; per v2.0 skill Phase 1 step 1 candidate-selection rule)`

---

## `KADC_the-heavy-metals-analyses-in-canned-tomato-paste` — SHA-identical sibling of the parenthetical variant above

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste.pdf`
**Suggested handle:** `KADC_the-heavy-metals-analyses-in-canned-tomato-paste`
**SHA-256:** `d55ba8748cd2c467df61ffd0b3de7f3076d6faca578e73f29cbedc7d44f829e9` (byte-identical to the `(Romanian study on sauces).pdf` filename variant covered in the preceding stop entry; the prior entry's `42fb8a5a…` digest is SHA-1 of the same file, not a different file)
**Existing wiki page:** `wiki/sources/david2008-heavy-metals-canned-tomato-paste-romania.md` — `updated: 2026-05-20`, audit-queue `audited-revised`, not in `routing_malformed.csv` or `routing_unresolved.csv`.
**Stop reason:** Skill v2.0 Phase 1 step 1 candidate-selection rule (PDFs whose existing pages are post-2026-05-14 clean and not in malformed are skipped). The full rationale is in the preceding `(Romanian study on sauces)` entry; both KADC filenames map to the same canonical David et al. 2008 paper already canonicalised under the MFK_ root.

**Action taken:** No ingest, no merge-enhance, no audit, no commit beyond this stop note. The 2026-05-20 merge-enhance + audit-revise on `david2008-heavy-metals-canned-tomato-paste-romania.md` remains canonical.

**Final line:** `STOP: SHA-identical duplicate of MFK_ root (david2008-heavy-metals-canned-tomato-paste-romania already updated 2026-05-20, audited-revised 7/8)`

## `KADC_p0306-metals-in-cow-milk-and-soy-beverages` — FILENAME/CONTENT MISMATCH (Kimi corruption)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/P0306_Metals in Cow Milk and Soy Beverages.pdf`
**Suggested handle:** `KADC_p0306-metals-in-cow-milk-and-soy-beverages`
**SHA-256:** `2c04a540b11cf14800007c60f782b7dc9e6252abe19cade713b05439dffa490d`

**Actual content of the PDF (verified pages 1-7):**
- Title: "Prospective Associations between Dietary Patterns and Abdominal Obesity in Middle-Aged and Older Korean Adults"
- Authors: Lee KW, Kang M-S, Lee SJ, Kim H-R, Jang K-A, Shin D
- Journal: *Foods* 2023, 12(11), 2148
- DOI: 10.3390/foods12112148
- License: CC BY 4.0 (MDPI open access)
- Topic: Factor-analysis dietary patterns (KoGES-HEXA cohort, n=48,037 Korean adults ≥40 y) and incidence of abdominal obesity over 4.89 y follow-up. Outcomes are HRs/95% CIs for waist circumference ≥90 cm (men) / ≥85 cm (women).

**Stop reason:** Hard off-topic for the Heavy Metal Index corpus. The paper contains **zero heavy-metal measurements, zero analytical chemistry, zero food-occurrence data**. It is a nutritional epidemiology paper about dietary-pattern factor scores and abdominal obesity hazard ratios — the food groups (vegetables, fish, soy products, multi-grain rice, coffee, sweets) appear only as FFQ-derived loading variables, not as analytical matrices. The filename "Metals in Cow Milk and Soy Beverages" is a Kimi-Agent download corruption (the parent folder is literally `Kimi_Agent_Download Corruption Issue`); the file was saved under the intended slug but the bytes are an unrelated paper. Confirmed via SHA-256 + first-7-page text extract.

**Action taken:** No ingest, no merge-enhance, no audit, no commit beyond this stop note. Lee et al. 2023 (Foods 12:2148) is not present in `wiki/sources/` (DOI grep returned 0 hits) and should not be added — it is out of scope per CLAUDE.md Part 25 (no medical claims / nutritional-epidemiology synthesis is not the wiki's job; the wiki tracks heavy-metal occurrence and exposure).

**Upstream signal:** Same pattern as the other `Kimi_Agent_Download Corruption Issue` stops on this date. The Kimi auto-fetcher saved an arbitrary MDPI paper under the P0306 slug. Recommend that whatever bot or Karen-step assembled this folder eventually:
1. Re-run the original P0306 fetch against the correct DOI for the intended "Metals in Cow Milk and Soy Beverages" paper (likely Bilandžić et al. or similar — needs Karen's source list to confirm).
2. Delete or relocate this PDF to a `_corrupted-downloads/` quarantine so it stops re-entering the manual-fetch loop on every tick.

**Final line:** `STOP: PDF content does not match filename (file is Lee et al. 2023 Foods 12:2148 on Korean dietary patterns and abdominal obesity — zero metals data, off-topic for HMI)`

## P0314_Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab, North India.pdf — KIMI AGENT DOWNLOAD CORRUPTION

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/papers/08_Nuts_Seeds_Legumes_and_Misc/`
- **Filename promise:** Punjab/North India bean & vegetable heavy-metal risk assessment (P0314)
- **Suggested handle:** `KADC_p0314-non-carcinogenic-and-carcinogenic-health-ris`
- **Actual PDF content (verified across all 14 pages):** Nozadi SS, Li X, Kong X, Rennie B, Kanda D, MacKenzie D, Luo L, Posner J, Blackwell CK, Croen LA, Ferrara A, O'Connor TG, Zimmerman E, Ghassabian A, Leve LD, Elliott AJ, Schmidt RJ, Sprowles JLN, Lewis JL. "Effects of COVID-19 Financial and Social Hardships on Infants' and Toddlers' Development in the ECHO Program." *Int J Environ Res Public Health* 2023, 20, 1013. DOI: 10.3390/ijerph20021013. MDPI, CC BY 4.0.
- Topic: Longitudinal ASQ-3 developmental screening of n=684 children in the NIH ECHO program, comparing pre- vs during-COVID-19 hardship exposure (parental job loss, household quarantining, reduced contact with extended family). Outcomes are odds ratios and z-score changes for communication, gross-motor, fine-motor, problem-solving, and personal-social ASQ domains.

**Stop reason:** Hard off-topic for the Heavy Metal Index corpus. The paper contains **zero heavy-metal measurements, zero analytical chemistry, zero food-occurrence data, zero dietary-exposure assessment**. It is a pediatric developmental-screening epidemiology study about pandemic hardships and toddler development. The only intersection with HMI's domain is incidental keyword overlap from journal name (*Int J Environ Res Public Health*) and the word "exposure" (used in the social-science sense — exposure to pandemic hardships, not chemical exposure). The filename promising "Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab" is the standard Kimi-Agent download corruption pattern (parent folder is literally `Kimi_Agent_Download Corruption Issue`): the file was saved under the intended P0314 slug but the bytes are an unrelated paper.

**Identity checks:** Grep for DOI `10.3390/ijerph20021013` against `wiki/sources/` → 0 hits. Grep for "Punjab.*beans" / "P0314" → 0 hits. Neither paper (intended nor actual) is currently in the corpus.

**Action taken:** No ingest, no merge-enhance, no audit, no commit beyond this stop note. The Nozadi et al. 2023 paper is out of scope per CLAUDE.md Part 25 and Part 12 (no pediatric developmental screening, no COVID-19 social-determinants epidemiology) and should not be added to the corpus.

**Upstream signal:** Same Kimi corruption pattern as other entries on this date. Recommend that whatever bot or Karen-step assembled this folder eventually:
1. Re-run the original P0314 fetch against the correct DOI for the intended Punjab beans/vegetables paper (Karen's source list would identify the right DOI).
2. Delete or relocate this PDF to a `_corrupted-downloads/` quarantine so it stops re-entering the manual-fetch loop on every tick.

**Final line:** `STOP: PDF content does not match filename (file is Nozadi et al. 2023 IJERPH 20:1013 on COVID-19 hardships and ASQ developmental screening — zero metals data, off-topic for HMI)`

## determination-of-some-inorganic-metals-in-edible-vegetable-oils-by-icp-aes.pdf — ALREADY CLEANLY INGESTED

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/`
- **PDF:** `Determination of some inorganic metals in edible vegetable oils by ICP-AES.pdf`
- **Suggested handle:** `KADC_determination-of-some-inorganic-metals-in-edible-v`
- **Existing page:** `wiki/sources/pehlivan2008-vegetable-oils-turkey-icp-aes.md`
- **Identity-check hits (all three):**
  - DOI `10.3989/gya.2008.v59.i3.514` → existing page
  - raw_handle `MFK_determination-of-some-inorganic-metals-in-edible-v` → existing page
  - cite-key `pehlivan2008-vegetable-oils-turkey-icp-aes` → existing page
- **Page status:** `updated: 2026-05-18` (post-2026-05-14 schema cutoff). Routing audit
  reports it neither in `routing_unresolved.csv` nor in `routing_malformed.csv`.
  Verification notes already document a 2026-05-17 Codex merge-enhance pass plus a
  2026-05-18 cross-vendor (Codex) regulatory-framing audit.
- **Why skipped:** Per v2 skill workflow Phase 1.1, PDFs whose existing pages are
  post-2026-05-14 clean and not in malformed are skipped. Re-running ingest would
  overwrite curated cross-vendor audit work for no gain.
- **Action:** No commit, no audit-queue append, no subagent spawn. PDF remains in
  place; the existing wiki source page is unchanged.
- **Upstream signal:** The wrapper that fed this PDF into the loop is not gating on
  "page exists, post-2026-05-14, not in malformed." If the Kimi-corruption-folder
  drain script is iterating raw PDFs blind to existing-page state, it will keep
  re-presenting already-ingested PDFs. Consider a pre-filter that grep-checks
  `wiki/sources/` for `raw_path` or `raw_sha256` before queueing the PDF.

**Final line:** `STOP: post-2026-05-14 clean page exists for this PDF (pehlivan2008-vegetable-oils-turkey-icp-aes, updated 2026-05-18, not in malformed/unresolved)`

## Levels of Selected Heavy Metals in Varieties of Vegetable Oils Collected from Saudi Arabia.pdf — ALREADY-INGESTED CLEAN PAGE

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/`
- **Suggested handle:** `KADC_levels-of-selected-heavy-metals-in-varieties-of-ve`
- **Identity match:** `wiki/sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia.md`
  - raw_handle in existing page: `MFK_levels-of-selected-heavy-metals-in-varieties-of-ve`
  - The `KADC_` prefix on the Kimi-Agent-Download-Corruption-Issue folder PDF is the
    same paper that was previously ingested from the `MFK_` (Manual Fetch Kimi)
    folder; the file content is identical, only the parent folder name differs.
- **Why skipped:** Per `ingest-next-manual-fetch-pdf` SKILL.md v2.0 Phase 1 step 1,
  a PDF should be skipped when an existing page is "post-2026-05-14 clean and not
  in malformed." All three criteria met:
  - `updated: 2026-05-26` (post-2026-05-14 ✅)
  - Not in `data/evidence/routing_malformed.csv` ✅
  - Not in `data/evidence/routing_unresolved.csv` ✅
  - Already carries a 2026-05-26 fresh-context subagent audit with PROMOTE verdict
    (verification note line 100), with all five audit checks ✅ and two ⚠️
    concerns resolved.
- **Action:** No ingest, no audit re-run, no commit. The PDF in the
  `Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/` folder
  duplicates a previously-ingested PDF; the existing wiki source page is the
  canonical record.
- **Upstream signal:** Same pattern as the prior `pehlivan2008` stop — the
  Kimi-corruption-folder drain is presenting PDFs that re-duplicate already-
  ingested MFK PDFs. The pre-queue filter suggestion (grep `raw_path` /
  `raw_sha256` against `wiki/sources/` before enqueueing) would apply equally
  here. A secondary check on file-content hash (raw_sha256) would catch this
  even when the folder path differs.

**Final line:** `STOP: post-2026-05-14 clean page exists for this PDF (ashraf2012-heavy-metals-vegetable-oils-saudi-arabia, updated 2026-05-26, not in malformed/unresolved, prior subagent PROMOTE on 2026-05-26)`

## Report on a Total Diet Study carried out by the Food Safety Authority of Ireland (FSAI TDS).pdf — DUPLICATE OF PRIOR MFK INGEST

- **Source folder:**
  `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/`
- **Suggested handle:** `KADC_report-on-a-total-diet-study-carried-out-by-the-fo`
- **Existing cite-key:** `fsai2016-total-diet-study-ireland-2012-2014`
- **Existing page:** `wiki/sources/fsai2016-total-diet-study-ireland-2012-2014.md`
  - `updated: 2026-05-26` (post-2026-05-14 threshold)
  - Not in `data/evidence/routing_malformed.csv`
  - Not in `data/evidence/routing_unresolved.csv`
  - Audit-queue: `audited-revised` verdict applied 2026-05-26 (commit `a8004ac`),
    4 findings applied + 3 rejected per merge-enhance + audit subagent pass
- **Why skipped:** Per the v2 skill candidate-selection rule, PDFs whose existing
  wiki source page is post-2026-05-14 clean AND not in routing_malformed are
  skipped. This PDF has both (clean post-2026-05-26 merge-enhance page; clean
  audit subagent REVISE pass; no routing defects).
- **Action:** No ingest, no audit re-run, no commit. The PDF in the
  `Kimi_Agent_Download Corruption Issue/condiment_papers/01_Oils/` folder
  duplicates a previously-ingested MFK PDF; the existing wiki source page
  remains the canonical record. The legacy raw_path
  (`raw/Manual Fetch Kimi /condiment_papers/01_Oils/...`) still resolves on
  disk — both folders contain the FSAI PDF file.
- **Upstream signal:** Same recurring pattern as the prior pehlivan2008 and
  ashraf2012 stops in this file — the Kimi-corruption-folder drain is
  presenting PDFs that re-duplicate already-ingested MFK PDFs (sibling
  `Manual Fetch Kimi /` folder). A pre-queue filter that greps `raw_path` or
  `raw_sha256` against `wiki/sources/` before enqueueing would short-circuit
  the loop on this entire class of duplicate-folder presentations.

**Final line:** `STOP: post-2026-05-14 clean page exists for this PDF (fsai2016-total-diet-study-ireland-2012-2014, updated 2026-05-26, not in malformed/unresolved, prior subagent REVISE applied on 2026-05-26)`

## KADC_alarming-lead-arsenic-levels-found-in-popular-vine — SHA-IDENTICAL DUPLICATE / ALREADY INGESTED CLEAN

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/`
- **PDF:** `Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf`
- **KADC SHA256:** `92d83044ba16e14473fc442bbb22a2f072aa18f31c594f14ac27cd4793c1825f`
- **MFK root path:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf`
- **MFK root SHA256:** `92d83044ba16e14473fc442bbb22a2f072aa18f31c594f14ac27cd4793c1825f` (byte-identical)
- **Existing cite-key:** `escp2021-pb-as-balsamic-vinegar-fda-letter`
- **Existing page path:** `wiki/sources/escp2021-pb-as-balsamic-vinegar-fda-letter.md`
- **Existing page `updated:`** `2026-05-26` (post-2026-05-14 cutoff)

### Why skipped

Same duplicate-tree pattern as prior KADC_ entries in this log. The Kimi-Agent-Download-Corruption-Issue folder mirrors PDFs already filed under `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/`. The MFK_ root copy of this PDF was ingested under legacy schema and merge-enhanced on 2026-05-26 through the v2.0 skill against the source PDF: cite_key and raw_handle canonicalized to `escp2021-pb-as-balsamic-vinegar-fda-letter` / `MFK_alarming-lead-arsenic-levels-found-in-popular-vine`, `matrices` corrected to drop the unsupported `wine-vinegar` inference and add the broader `vinegar` slug, Pb key-numbers softened to match the letter's actual "all but one" framing, As mean clarified as the mean of the positive subset, legacy `## Wiki pages updated on ingest` heading replaced with `## Verification notes` per current source-page convention, sample_population updated to record the 3 non-balsamic samples. Auto-audit subagent verdict on the same date was REVISE with 3 of 4 findings applied (µg/serving As intake numbers relabeled as wiki-derived arithmetic; HMTc directive recommendation removed from Implications per Part 2 firewall; Karavoltsos 2020 cross-source comparison removed and deferred to Part 9 synthesis). The KADC_ copy is byte-identical to the MFK_ root (SHA256 verified above).

- Identity-check grep hits:
  - Title-substring grep (`alarming-lead-arsenic`): single hit at `wiki/sources/escp2021-pb-as-balsamic-vinegar-fda-letter.md`
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity via title + raw_handle + author + filing-date
  - Authors grep (`Corrigan|Braiman|Chittenden|ESCP|Food & Water Watch`): hits the same page (and `efsa2021-aluminium-food-qa.md` for a `Food & Water` substring false positive on an unrelated paper)
  - SHA256 collision against the MFK_ root: confirmed identical (`92d83044ba16e14473fc442bbb22a2f072aa18f31c594f14ac27cd4793c1825f`)

### Skill v2.0 Phase 1 step 1 outcome

Existing page is post-2026-05-14 clean (`updated: 2026-05-26`), not in `data/evidence/routing_unresolved.csv`, not in `data/evidence/routing_malformed.csv`. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress the 2026-05-26 merge-enhance + audit-revise work already verified by a fresh-context subagent against the same PDF five days ago.

### Action taken

- Tracker row for `KADC_alarming-lead-arsenic-levels-found-in-popular-vine` (line 924 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-duplicate` with existing cite-key populated so future wrapper ticks short-circuit on row read.
- No ingest, no merge-enhance, no audit, no audit-queue update, no commit beyond the tracker edit and this stop note.
- The wiki source page was not modified; the prior 2026-05-26 merge-enhance + audit-revise is the canonical version.

**Final line:** `STOP: pdf-already-ingested-clean escp2021-pb-as-balsamic-vinegar-fda-letter (SHA-identical to MFK_ root; existing page updated 2026-05-26 and clean per routing audit)`

## KADC_aluminum-leaching-from-cooking-pans-and-food-conta — KIMI CORRUPTION / WRONG PDF CONTENT

- **Source PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/Aluminum Leaching from Cooking Pans and Food Containers into Vinegar.pdf`
- **Suggested handle from wrapper:** `KADC_aluminum-leaching-from-cooking-pans-and-food-conta`
- **Filename intent:** Aluminum leaching from cookware/containers into vinegar — an on-topic HMI paper (Al × vinegar × food-contact migration) that the Kimi-Agent batch was supposed to deliver.
- **Actual PDF content:** Shimanoe K, Ikari K, Shimizu Y, Yamazoe N (2006). "STM observation of SnO2 (1 1 0) thermal-treated under oxidative condition." *Sensors and Actuators B: Chemical* 118: 90–93. DOI: 10.1016/j.snb.2006.04.081. Elsevier.
- **Why rejected:** Off-topic for HMI. The paper is a four-page surface-physics study of tin dioxide (SnO2) single-crystal surfaces imaged by scanning tunneling microscopy (STM) after thermal treatment in oxygen at 350 °C / 13 Pa and 130 Pa, with hydrogen reduction control. The chemistry is gas-sensor electronic structure (O₂⁻ molecular adsorption vs O⁻ negatively-charged adsorption, in-plane oxygen vs bridging oxygen, density of states at the (110) surface). Reads in full (pp. 90–93 + biographies): no food matrix, no vinegar, no aluminum, no cookware, no leaching/migration data, no Pb/Cd/As/Hg/Ni/Al/Cr/Sn/Sb concentrations of any food product. The only "Sn" present is the lattice tin of the SnO₂ semiconductor substrate being probed by STM, not Sn-as-food-contaminant. The paper would belong in a gas-sensor / surface-physics database, not HMI.
- **This is exactly the Kimi corruption case this folder is named for.** The Kimi-agent downloader fetched the wrong PDF for the aluminum-leaching-into-vinegar slug. The actual on-topic paper (likely a study of Al migration from aluminum cookware/foil into acidic foods such as vinegar/tomato/citrus) is unrelated to this file.

### Skill v2.0 outcome

Phase 1 step 2 (read PDF) was completed in full — all 4 pages including the abstract, introduction, experimental, results+discussion, conclusion, references, and author biographies. Phase 1 step 3 (write/merge source page) was NOT executed: there is no HMI source page to write because the paper has no HMI-relevant content to extract. Frontmatter would have `metals: []`, no `## Key numbers` could be populated, and a "stub source page about an off-topic paper" would itself be a defect.

### Action taken

- No wiki source page written, no commit, no routing audit run, no audit-queue entry, no audit subagent spawned. Per skill stop-condition "paper-internal data-integrity issue that's not the obvious mirroring pattern" — here the data-integrity issue is at the file level (wrong PDF behind the filename), not inside the paper itself.
- Tracker row for `KADC_aluminum-leaching-from-cooking-pans-and-food-conta` (line 925 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-kimi-corruption` with a note pointing back to this entry so future wrapper ticks and the FRANK orchestrator short-circuit on row read instead of re-discovering the content mismatch.
- The misnamed PDF stays in place under the Kimi corruption folder so the corruption-folder audit trail remains intact; a downstream pass can either (a) re-fetch the actually-intended Al-leaching-into-vinegar paper under the correct slug or (b) bulk-archive confirmed-corrupt PDFs once the pattern is fully mapped.

### Upstream signal

This is now the second Kimi-folder PDF in the corruption-folder drain that turned out to be content/filename mismatch via wrong-paper substitution (cf. the skoko2022 patulin paper delivered under the cadmium-in-Yangtze-vegetables slug above). Both deliver completely unrelated papers (mycotoxin chemistry in one case, surface-physics sensor chemistry here) rather than the on-topic HMI paper the slug implied. The recurrence supports the prior recommendation: a one-pass verification script that opens each PDF in the Kimi corruption tree, extracts the actual title/DOI, and compares against the filename slug would surface every mis-fetched PDF in a single sweep rather than discovering them one-at-a-time across many autonomous ticks. Note the contrast with the SHA-identical KADC duplicates higher in this log — those are the same paper twice, harmless; the wrong-PDF cases are the genuinely lossy corruption where the intended HMI paper was never delivered at all and the source slug is unresolved until someone re-fetches it.

**Final line:** `STOP: kimi-corruption-off-topic-pdf shimanoe2006-stm-sno2-110-oxidative (actual content is SnO2 surface physics by STM, not Al leaching from cookware into vinegar; no heavy-metals-in-food data to ingest)`

## KADC_determination-of-heavy-metal-contents-of-apple-and — KIMI CORRUPTION / WRONG PDF CONTENT

- **Source PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (Inductively Coupl.pdf`
- **Suggested handle from wrapper:** `KADC_determination-of-heavy-metal-contents-of-apple-and`
- **Filename intent:** Tekin S. (2014). "Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (inductively coupled plasma-mass spectrometer)." MSc Thesis, Department of Food Engineering, Graduate School of Natural and Applied Sciences, Ankara University, Ankara, Turkey. An on-topic HMI paper (Pb/Cd/As/etc. × apple+grape vinegar × ICP-MS) that the Kimi-Agent batch was supposed to deliver.
- **Actual PDF content:** Duman AD, Türkmen A (2024). "The determination of chemical composition in some vinegars and compliance with food legislation." *African Journal of Biotechnology* 23(12): 354–360, December 2024. DOI: 10.5897/AJB2021.17345. Article Number CA5F38672841. ISSN 1684-5315. CC-BY 4.0. Department of Food Engineering, Hatay Mustafa Kemal University, Turkey. Corresponding author: adduman@mku.edu.tr.
- **Why rejected:** Off-topic for HMI. Reads in full (pp. 354–360): no heavy-metal measurements of any kind. The paper analyzes 13 vinegar samples (6 commercial Turkish apple/grape brands across genuine/organic/synthetic categories + 7 laboratory-spontaneous-fermented fruit vinegars: apple, white grape, red grape, mandarin, pear, carrot, melon, pomegranate) on seven non-metal physicochemical endpoints — pH (1.88–3.29), total acidity (0.86–33.62 g/100 mL), dry matter (0.87–6.38 g/L), moisture (64.45–99.13%), density (0.99–1.09 g/cm³), ash (1.02–1.94 g/L on the page-text reading; Table 1 row reports 1.06–1.94 g/L with sample-7 = 1.06), water activity (0.84–0.93), and CIE Lab colour (L\* 30.73–44.79, a\* −0.46–1.44, b\* −0.37–7.28, C\*, H°). Methods are ash furnace at 525 °C, oven dry-matter at 100 °C, pH-meter glass electrode, pycnometry at 20 °C, NaOH titration to phenolphthalein for acidity, Minolta CR-100 colorimetry, and Novasina-LabSwift a\_w. No ICP-MS, no GFAAS, no AAS, no AFS, no Pb / Cd / iAs / tAs / MeHg / tHg / Ni / Al / Cr / Cr-VI / Sn / Sb / U values are reported anywhere in the paper — not in Tables 1–2, not in the Results & Discussion narrative (which only compares pH/acidity/ash/colour to other Turkish-vinegar studies), not in the Conclusion. The references list does cite the intended Tekin S. (2014) MSc thesis as one of many literature comparators for non-metal endpoints, which is almost certainly the source of the filename mis-mapping: the Kimi-Agent downloader appears to have indexed a citing paper under the cited thesis's title.
- **This is exactly the Kimi corruption case this folder is named for.** The filename promises a heavy-metals-in-vinegar paper (the intended HMI-relevant Tekin 2014 thesis); the actual delivered PDF is a chemical-composition-and-legislation-compliance paper that happens to cite Tekin 2014 in its references. A "stub source page" written from this PDF would have `metals: []`, empty Key numbers, and would itself be a defect — exactly the failure mode the routing-discipline audit flags.

### Skill v2.0 outcome

Phase 1 step 2 (read PDF) was completed in full — all 7 pages including the abstract, introduction, materials & methods, results & discussion (Tables 1 and 2 read with all 13 sample rows + Mean/Min/Max/Std.dev), conclusion, and references. Phase 1 step 3 (write/merge source page) was NOT executed: the paper has no HMI-relevant content (no heavy-metal concentrations of any analyte in any vinegar). Identity checks were not run against `wiki/sources/` because there is no DOI/handle/cite-key on the HMI side to compare to — the paper is not in the HMI scope. The intended Tekin 2014 thesis remains unfetched.

### Action taken

- No wiki source page written, no commit-with-routing-audit, no audit-queue entry, no audit subagent spawned. Per skill stop-condition "paper-internal data-integrity issue that's not the obvious mirroring pattern" — here the data-integrity issue is at the file level (wrong PDF behind the filename slug), not inside the paper itself.
- Tracker row for `KADC_determination-of-heavy-metal-contents-of-apple-and` (line 928 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-kimi-corruption` with a note pointing back to this entry so future wrapper ticks and the FRANK orchestrator short-circuit on row read instead of re-discovering the content mismatch.
- The misnamed PDF stays in place under the Kimi corruption folder so the corruption-folder audit trail remains intact; a downstream pass can either (a) re-fetch the actually-intended Tekin 2014 ICP-MS thesis under the correct slug (likely Ankara University thesis repository) or (b) bulk-archive confirmed-corrupt PDFs once the pattern is fully mapped.

### Upstream signal

This is now the **third** Kimi-folder PDF in the corruption-folder drain to show content/filename mismatch via wrong-paper substitution (cf. the skoko2022 patulin paper delivered under the Yangtze-cadmium slug, and the shimanoe2006 SnO2-STM paper delivered under the aluminum-leaching-into-vinegar slug). The third case has a distinct sub-pattern: the delivered paper is in the right domain (Turkish vinegar chemistry) and even cites the intended HMI paper in its references, but reports no heavy-metal data of its own. The first two wrong-PDF cases were total-domain mismatches (mycotoxins / surface physics); this one is a same-domain-but-no-metals mismatch and would be easier to misclassify as a "thin metals paper" on a cursory read — the only safeguard is reading the methods + results in full before committing. The pattern continues to support the prior recommendation: a one-pass verification script that opens each PDF in the Kimi corruption tree, extracts the actual title/DOI, and compares against the filename slug would surface every mis-fetched PDF in a single sweep rather than discovering them one-at-a-time across many autonomous ticks. Three of the eight 02_Vinegars Kimi files processed so far are now confirmed corrupt-by-wrong-PDF or duplicate (KADC_a-practical-method = duplicate-DOI of ozbek2016; KADC_alarming-lead-arsenic = SHA-identical duplicate of MFK_ root; KADC_aluminum-leaching = shimanoe2006 wrong PDF; KADC_determination-of-heavy-metal = duman-turkmen2024 wrong PDF) — the recovery yield from the Kimi corruption folder remains low and the case for a pre-pass verification sweep continues to strengthen.

**Final line:** `STOP: kimi-corruption-off-topic-pdf duman-turkmen2024-vinegar-chemical-composition (actual content is Duman & Türkmen 2024 chemical composition of Turkish vinegars in African Journal of Biotechnology 23(12):354-360, doi 10.5897/AJB2021.17345; no heavy-metal concentrations measured in this paper; intended Tekin 2014 ICP-MS thesis remains unfetched)`

## KADC_levels-of-cd-pb-and-ni-in-different-types-of-vineg — KIMI-CORRUPTION DUPLICATE OF ALREADY-INGESTED MFK_ ROOT

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/`
- **Filename:** `Levels of Cd, Pb, and Ni in Different Types of Vinegars.pdf`
- **Wrapper-supplied handle:** `KADC_levels-of-cd-pb-and-ni-in-different-types-of-vineg`
- **SHA256:** `30f32d201198bd038850f752d5dcb6aa7a788168597725f942d576f07172ea4a`
- **Existing wiki source page:** `wiki/sources/acosta1993-cd-pb-ni-vinegar-types.md`
- **Existing `cite_key`:** `acosta1993-cd-pb-ni-vinegar-types`
- **Existing `raw_handle`:** `manual-fetch-kimi`
- **Existing `updated`:** `2026-05-26`

### Identity evidence

- SHA-256 of this PDF (KADC_ tree): `30f32d201198bd038850f752d5dcb6aa7a788168597725f942d576f07172ea4a`
- SHA-256 of `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Levels of Cd, Pb, and Ni in Different Types of Vinegars.pdf`: `30f32d201198bd038850f752d5dcb6aa7a788168597725f942d576f07172ea4a` — byte-identical.
- Identity-check grep hits:
  - Title-substring grep: `acosta1993-cd-pb-ni-vinegar-types.md` (single hit; exact title in frontmatter).
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity established via title + raw_path + SHA-256 collision.
  - Cite-key grep: `acosta1993-cd-pb-ni-vinegar-types` already populated in `data/evidence/audit-queue.csv` (line 308), `data/evidence/product_source_routing_audit.csv`, and 19 other evidence files.

### Skill v2.0 Phase 1 step 1 outcome

The existing page is post-2026-05-14 clean (`updated: 2026-05-26`), not in `data/evidence/routing_unresolved.csv`, and not in `data/evidence/routing_malformed.csv`. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. The 2026-05-26 merge-enhance pass against this same PDF already populated `products: [vinegar]`, removed an unsupported FAO/WHO Codex reference, removed an unsupported Student-Newman-Keuls qualifier, added per-type SD values for all three metals, added brand-D mean Ni and brand-C mean Pb supporting figures, and tightened the recovery line with spike masses — full verification notes are recorded on the page. Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress the verified merge-enhance work.

### Action taken

- Tracker row for `KADC_levels-of-cd-pb-and-ni-in-different-types-of-vineg` (line 931 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `skipped-duplicate`, with the existing `cite_key` populated so future wrapper ticks short-circuit on the row read instead of re-discovering the SHA collision.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit + this stop note.
- The page itself was not modified; the 2026-05-26 merge-enhance is the canonical version.

### Upstream signal

This brings the 02_Vinegars Kimi-corruption-folder sub-tree to: four of nine processed PDFs are now confirmed wrong-PDF / duplicate (KADC_a-practical-method = duplicate-DOI of ozbek2016; KADC_alarming-lead-arsenic = SHA-identical duplicate of MFK_ root; KADC_aluminum-leaching = shimanoe2006 wrong PDF; KADC_determination-of-heavy-metal = duman-turkmen2024 wrong PDF) plus this fifth case (KADC_levels-of-cd-pb-and-ni = SHA-identical duplicate of MFK_ root). Two of the five are SHA-identical duplicates of the canonical MFK_ root tree (the pattern documented across prior KADC_ entries in this log). The recovery yield from the Kimi corruption folder for 02_Vinegars remains at zero net novel papers so far in this sweep.

**Final line:** `STOP: pdf-already-ingested-clean acosta1993-cd-pb-ni-vinegar-types (SHA-identical to MFK_ root; existing page updated 2026-05-26 and clean per routing audit)`


## KADC_metallic-contaminants-in-andalusian-vinegars — KIMI-CORRUPTION DUPLICATE OF ALREADY-INGESTED MFK_ ROOT

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/02_Vinegars/`
- **Filename:** `Metallic Contaminants in Andalusian Vinegars.pdf`
- **Wrapper-supplied handle:** `KADC_metallic-contaminants-in-andalusian-vinegars`
- **SHA256:** `859e8b195eff1d32772fb606ae3928c691172469441120a5765ed857e756768b`
- **Existing wiki source page:** `wiki/sources/troncoso1988-metallic-contaminants-andalusian-vinegars.md`
- **Existing `cite_key`:** `troncoso1988-metallic-contaminants-andalusian-vinegars`
- **Existing `raw_handle`:** `MFK_metallic-contaminants-in-andalusian-vinegars`
- **Existing `updated`:** `2026-05-28`

### Identity evidence

- SHA-256 of this PDF (KADC_ tree): `859e8b195eff1d32772fb606ae3928c691172469441120a5765ed857e756768b`
- SHA-256 of `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Metallic Contaminants in Andalusian Vinegars.pdf`: `859e8b195eff1d32772fb606ae3928c691172469441120a5765ed857e756768b` — byte-identical.
- Identity-check grep hits:
  - Title-substring grep: `troncoso1988-metallic-contaminants-andalusian-vinegars.md` (single hit; exact title in frontmatter).
  - DOI grep: paper has no DOI (`doi: null`, `no_doi_assigned: true`); identity established via title + raw_path + SHA-256 collision plus `raw_sha256` field on the existing page that matches this PDF byte-for-byte.
  - Cite-key grep: `troncoso1988-metallic-contaminants-andalusian-vinegars` already populated in `data/evidence/audit-queue.csv` and `data/evidence/autonomy/manual-fetch-tracker.csv` (line 278, original MFK_ ingest row).

### Skill v2.0 Phase 1 step 1 outcome

The existing page is post-2026-05-14 clean (`updated: 2026-05-28`), not in `data/evidence/routing_unresolved.csv`, and not in `data/evidence/routing_malformed.csv`. The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. The 2026-05-28 merge-enhance pass against this same PDF already populated the canonical handle (`MFK_metallic-contaminants-in-andalusian-vinegars`), added `raw_sha256`, corrected the Cu range minimum from `0–6.14 ppm` to `0.07–6.14 ppm`, corrected the iron-exceedance count to two samples (no. 8 and 9) per the explicit page-745 statement, split the previously-conflated Spanish vs. Codex Zn/Cu limits into the two distinct citations the paper makes, added the mean Cu uncertainty (± 0.04 ppm), added the exceedance-sample lists for both Spanish combined limits, added the sample-4 As + Pb arithmetic (1.21 + 0.242 = 1.452 ppm), removed cross-source synthesis sentences that belong in synthesis pages, and expanded the Methods section with the Table 1 instrumental parameters. Verification of every change is recorded inline on the page. Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress the verified merge-enhance work.

### Action taken

- Tracker row for `KADC_metallic-contaminants-in-andalusian-vinegars` (line 932 of `data/evidence/autonomy/manual-fetch-tracker.csv`) flipped from `unprocessed` to `stopped`, with the existing `cite_key` populated so future wrapper ticks short-circuit on the row read instead of re-discovering the SHA collision.
- No ingest, no merge-enhance, no audit, no commit beyond the tracker edit + this stop note.
- The page itself was not modified; the 2026-05-28 merge-enhance is the canonical version.

### Upstream signal

This brings the 02_Vinegars Kimi-corruption-folder sub-tree to: six of ten processed PDFs are now confirmed wrong-PDF / duplicate (KADC_a-practical-method = duplicate-DOI of ozbek2016; KADC_alarming-lead-arsenic = SHA-identical duplicate of MFK_ root; KADC_aluminum-leaching = shimanoe2006 wrong PDF; KADC_determination-of-heavy-metal = duman-turkmen2024 wrong PDF; KADC_levels-of-cd-pb-and-ni = SHA-identical duplicate of MFK_ root; KADC_metallic-contaminants-in-andalusian = SHA-identical duplicate of MFK_ root). Three of the six are SHA-identical duplicates of the canonical MFK_ root tree — the duplicate-tree pattern now accounts for half the confirmed-skip cases in this folder. The recovery yield from the Kimi corruption folder for 02_Vinegars remains at zero net novel papers so far in this sweep. The pre-pass verification-script recommendation continues to gather supporting evidence.

**Final line:** `STOP: pdf-already-ingested-clean troncoso1988-metallic-contaminants-andalusian-vinegars (SHA-identical to MFK_ root; existing page updated 2026-05-28 and clean per routing audit)`


## KADC_fda-total-diet-study-report-fiscal-years-2018-2020 (03_Olives_and_Pickles) — KIMI-CORRUPTION DUPLICATE OF ALREADY-INGESTED MFK_ ROOT

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/03_Olives_and_Pickles/`
- **Filename:** `FDA Total Diet Study Report - Fiscal Years 2018-2020.pdf`
- **Wrapper-supplied handle:** `KADC_fda-total-diet-study-report-fiscal-years-2018-2020`
- **SHA256:** `ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef`
- **Existing wiki source page:** `wiki/sources/fda-tds-elements-2018-2020.md`
- **Existing `cite_key`:** `fda-tds-elements-2018-2020`
- **Existing `raw_handle`:** `manual-fetch-kimi`
- **Existing `updated`:** `2026-05-20`

### Identity evidence

- SHA-256 of this PDF (KADC_ condiment_papers/03_Olives_and_Pickles tree): `ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef`.
- SHA-256 of canonical `raw/reports/2022_07_14_TDSElementsReport_1436.pdf` (named in the existing page's `raw_path` and `sha256` frontmatter): `ba1f8c1ed5a35fe4faef6e48db6c4490d88405739a4480e623fdbc3097e9f1ef` — byte-identical.
- Identity-check grep hits:
  - Title-substring grep: `fda-tds-elements-2018-2020.md` is the only post-2026-05-14-clean page covering "Total Diet Study Report: Fiscal Years 2018–2020 Elements Data" (companion CSV/key pages `fda2022-tds-elements-fy2018-fy2020` and `fda2022-tds-elements-analytical-key` are scoped to the row-level dataset and the analytical key, not the narrative PDF).
  - DOI grep: report has `doi: null` / `no_doi_assigned: true` (FDA government report); identity established via SHA-256 collision plus title and `sha256` field match.
  - Cite-key grep: `fda-tds-elements-2018-2020` already populated in `data/evidence/audit-queue.csv` and `data/evidence/autonomy/manual-fetch-tracker.csv` (lines 198 original MFK_ ingest 2026-05-19, 281 first KADC_ condiment_papers tree stop 2026-05-28, 855 KADC_ papers/01_Fruits_and_Fruit_Products tree stop 2026-05-31T15:57Z, 1400 May 21 KADC tree de-dup 2026-05-31T15:57Z).

### Skill v2.0 Phase 1 step 1 outcome

The existing page is post-2026-05-14 clean (`updated: 2026-05-20`), not in `data/evidence/routing_unresolved.csv` (0 hits), and not in `data/evidence/routing_malformed.csv` (0 hits). The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. The 2026-05-20 merge-enhance pass against this same PDF already corrected the `metals:` array (removed unsupported `MeHg`/`Al`, added `U`/`Sb`), promoted nutrient elements to `other_elements_in_file`, added comprehensive Key numbers tables (Table 3 detection rates and ranges; Action Levels; Table 4 baby-food speciation; Figure 10 vegetable-Cd; Figure 12 fruit-tAs; §4.2.2 food-group bands), Methods (ICP-AES/ICP-MS/HPLC-ICP-MS instrumentation with EAM references and Agilent model numbers, reporting-limit ranges, speciation-trigger thresholds), populated `products`/`ingredients`/`matrices`/`near_duplicates`/`sample_n`/`sample_population`, and was subsequently audited by a fresh-context subagent (verdict REVISE) with all ❌ and ⚠️ findings either applied or rejected as false positives with documented reasoning (infant-vs-crisped rice cereal conflation fix, apple-juice Pb/iAs regulatory attribution split, FDA juice-HACCP → fda2022-draft-lead-juice slug correction, thallium narrative inversion fix, CPG 540.600 coverage gap addition). Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress the verified merge-enhance + audit-application work.

### Action taken

- Tracker row for `KADC_fda-total-diet-study-report-fiscal-years-2018-2020` (line 935 of `data/evidence/autonomy/manual-fetch-tracker.csv`, condiment_papers/03_Olives_and_Pickles path) flipped from `unprocessed` to `stopped`, with the existing `cite_key` (`fda-tds-elements-2018-2020`) populated so future wrapper ticks short-circuit on the row read instead of re-discovering the SHA collision.
- No ingest, no merge-enhance, no audit, no audit-queue update, no commit beyond the tracker edit + this stop note.
- The page itself was not modified; the 2026-05-20 merge-enhance + audit-application is the canonical version.

### Upstream signal

This is the fourth tracker hit for the same FDA TDS PDF across the Kimi-corruption-folder sweep (after the MFK_ root ingest on 2026-05-19, the KADC_ papers/01_Fruits_and_Fruit_Products stop on 2026-05-31T15:57Z, and the May 21 KADC tree de-dup on 2026-05-31T15:57Z). The FDA bundled the same TDS narrative PDF into multiple Kimi download folders (01_Fruits_and_Fruit_Products, 03_Olives_and_Pickles, and the May 21 corruption-folder re-fetch), all SHA-identical. The recovery yield from this specific PDF across all KADC_ trees is zero net novel pages — the canonical page covers the entire FY2018–FY2020 TDS narrative regardless of which Kimi folder the duplicate appeared in.

**Final line:** `STOP: pdf-already-ingested-clean fda-tds-elements-2018-2020 (SHA-identical to MFK_ root; canonical page updated 2026-05-20 and clean per routing audit)`


## KADC_investigation-on-the-concentration-of-heavy-metals (03_Olives_and_Pickles) — KIMI-CORRUPTION DUPLICATE OF ALREADY-INGESTED MFK_ ROOT

- **Source folder:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiment_papers/03_Olives_and_Pickles/`
- **Filename:** `Investigation on the Concentration of Heavy Metals found in Olives and Olive Mill Waste.pdf`
- **Wrapper-supplied handle:** `KADC_investigation-on-the-concentration-of-heavy-metals`
- **SHA256:** `18db255da952c656b7048928a4893cda6345ab83539a2672334d8f741e37d137`
- **Existing wiki source page:** `wiki/sources/vella2024-malta-olive-cultivars-aas.md`
- **Existing `cite_key`:** `vella2024-malta-olive-cultivars-aas`
- **Existing `raw_handle`:** `MFK_investigation-on-the-concentration-of-heavy-metals`
- **Existing `updated`:** `2026-05-28`

### Identity evidence

- SHA-256 of this PDF (KADC_ condiment_papers/03_Olives_and_Pickles tree): `18db255da952c656b7048928a4893cda6345ab83539a2672334d8f741e37d137`.
- SHA-256 of `raw/Manual Fetch Kimi /condiment_papers/03_Olives_and_Pickles/Investigation on the Concentration of Heavy Metals found in Olives and Olive Mill Waste.pdf` (named in the existing page's `raw_path` frontmatter): `18db255da952c656b7048928a4893cda6345ab83539a2672334d8f741e37d137` — byte-identical.
- Identity-check grep hits:
  - Title-substring grep: `vella2024-malta-olive-cultivars-aas.md` (sole hit; exact title `"Investigation on the Concentration of Heavy Metals found in Local Olives and Waste Material through AAS"` in frontmatter).
  - DOI grep: paper has `doi: null` / `no_doi_assigned: true` (MCAST Journal of Applied Research & Practice, Vol. 8 Issue 2, 2024; no DOI assigned); identity established via title + raw_path + SHA-256 collision plus the `raw_handle: MFK_investigation-on-the-concentration-of-heavy-metals` field on the existing page, which derives from this PDF's filename.
  - Cite-key grep: `vella2024-malta-olive-cultivars-aas` already populated in `data/evidence/autonomy/manual-fetch-tracker.csv` (line 283 original MFK_ ingest row 2026-05-28, and line 1482 May 21 KADC tree de-dup 2026-05-31T17:59Z).

### Skill v2.0 Phase 1 step 1 outcome

The existing page is post-2026-05-14 clean (`updated: 2026-05-28`), not in `data/evidence/routing_unresolved.csv` (0 hits), and not in `data/evidence/routing_malformed.csv` (0 hits). The skill's "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed" rule applies. The 2026-05-28 merge-enhance pass against this same PDF already corrected a critical Cipressina-vs-Leccino skin-row transposition in the Key numbers table (verified against Table 3, page 11 of the PDF: row ordering is Carolea → Leccino → Cipressina → Bidni); removed `table-olives` from `matrices` per the paper's explicit statement that the olives were grown for oil production rather than as table olives; changed `products` from `non-root-vegetables` to `olive-oil` to reflect the actual product class of the sampled material; promoted the legacy `raw_handle: manual-fetch-kimi` to the canonical `MFK_investigation-on-the-concentration-of-heavy-metals` handle; corrected the truncated `raw_path` filename; expanded Key numbers to include pit and liquid-waste rows by cultivar with the Bidni-pit cadmium rejection asterisk surfaced; expanded Methods with sample masses (Table 2), instrument-specific operating parameters (burner geometry, gas flows, lamp modes), the explicit standard-error calculation equation, and the Shapiro–Wilk → ANOVA / Kruskal–Wallis statistical pipeline at α = 0.05; added the prior-literature comparison summarising Table 4 (Sahan 2007, Wilson & Pyatt 2007, Nedjimi 2020). Verification of every change is recorded inline on the page. Re-ingesting via the KADC_ root would either (a) duplicate the prior page or (b) regress the verified merge-enhance work.

### Action taken

- Tracker row for `KADC_investigation-on-the-concentration-of-heavy-metals` (line 937 of `data/evidence/autonomy/manual-fetch-tracker.csv`, condiment_papers/03_Olives_and_Pickles path) flipped from `unprocessed` to `stopped`, with the existing `cite_key` (`vella2024-malta-olive-cultivars-aas`) populated so future wrapper ticks short-circuit on the row read instead of re-discovering the SHA collision.
- No ingest, no merge-enhance, no audit, no audit-queue update, no commit beyond the tracker edit + this stop note.
- The page itself was not modified; the 2026-05-28 merge-enhance is the canonical version.

### Upstream signal

This is the third tracker hit for the same Vella et al. 2024 PDF across the Kimi sweep (after MFK_ root ingest 2026-05-28, and May 21 KADC tree de-dup 2026-05-31T17:59Z). Kimi bundled this paper into multiple download sub-folders, all SHA-identical. The 03_Olives_and_Pickles KADC sub-tree now has two confirmed SHA-identical duplicates of canonical MFK_ pages (FDA TDS, Vella olives); the recovery yield from this specific sub-tree continues to trend toward zero net novel pages.

**Final line:** `STOP: pdf-already-ingested-clean vella2024-malta-olive-cultivars-aas (SHA-identical to MFK_ root; existing page updated 2026-05-28 and clean per routing audit)`
