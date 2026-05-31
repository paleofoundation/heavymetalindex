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
