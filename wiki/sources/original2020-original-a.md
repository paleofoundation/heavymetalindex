---
type: source
raw_handle: FM_10494610
cite_key: original2020-original-a
title: "Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia"
authors:
  - Najla S. Alharbi
  - Rawdah M. Akamsiei
  - Lama A. Almaiman
  - Mostafa A. AL-Samti
  - Hamad S. Al-Mutairi
  - Bandar S. Al-owais
  - Majid M. Alkhalaf
  - Mohammed A. Bineid
year: 2020
publication: "Food Science & Nutrition"
no_doi_assigned: true
source_type: peer-reviewed journal article
evidence_tier: A
license: CC BY
raw_path: raw/markdown/FM_10494610/FM_10494610.md
metals:
  - iAs
  - Cd
  - Pb
ingredients:
  - breast milk
  - cereal
  - infant formula
  - biscuits
products:
  - infant-formula-stage1
  - infant-formula-stage2
  - cereal-meals
  - biscuits
matrices:
  - infant-formula
  - cereal
  - biscuits
jurisdictions:
  - SA
sample_n: 111
sample_population: "Infants aged 0-12 months in Saudi Arabia"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
ingest_method: marker-converted pdf + manual metadata
created_by: Claude Code
---

## Study overview

Cross-sectional survey of heavy metal occurrence in commercially available infant foods in the Kingdom of Saudi Arabia. 111 samples analyzed: 39 stage 1 infant formula, 22 stage 2 infant formula, 33 cereal-based meals, and 17 biscuits. Study assessed dietary exposure and health risk using hazard quotient (THQ), hazard index (HI), and margin of safety (MOE) approaches.

## Methods

**Sample collection and preparation:** Infant formula and food products purchased from retail markets in Saudi Arabia. Stage 1 formula for infants 0-6 months, stage 2 for 6-12 months.

**Analytical method:** Inductively coupled plasma mass spectrometry (ICP-MS).

**Quality assurance:** Method validation with standard reference materials. Limits of detection reported as 0.70 µg/L (As), 0.90 µg/L (Cd), 6.90 µg/L (Pb).

**Exposure assessment:** Estimated daily intake (EDI) calculated using recommended daily consumption rates for infants. Reference dose (RfD) values sourced from EPA and WHO guidance.

## Key findings

| Product type | n | Pb (µg/kg) mean | Cd (µg/kg) mean | iAs (µg/kg) mean |
|---|---|---|---|---|
| Stage 1 formula | 39 | 35.2 ± SD | 5.18 ± SD | 15.5 ± SD |
| Stage 2 formula | 22 | 48.6 ± SD | 8.76 ± SD | 11.1 ± SD |
| Cereal meals | 33 | 53.8 ± SD | 7.44 ± SD | 12.3 ± SD |
| Biscuits | 17 | 42.1 ± SD | 6.92 ± SD | 13.8 ± SD |

All detected concentrations exceeded WHO guideline values for at least one analyte.

## Risk assessment

Health risk estimated using THQ (target hazard quotient) and HI (hazard index) for non-carcinogenic endpoints; MOE (margin of safety) for carcinogenic endpoints.

**Non-carcinogenic risk:** THQ values for all metals and all product types ranged 0.001–0.99. HI (sum of individual THQs) values <1.00 across all pathways, indicating acceptable non-carcinogenic risk at current consumption levels.

**Carcinogenic risk (Pb):** MOE values 1.00–5.00, indicating potential concern for lead exposure, particularly in infants consuming stage 2 formula and cereal meals daily. Study noted MOE <100 warrants risk reduction measures.

## Notes for wiki

- Stage 2 formula shows elevated Pb and Cd relative to stage 1, suggesting potential accumulation or formulation differences.
- Cereal meals recorded highest mean Pb concentration.
- Study did not distinguish inorganic vs. organic arsenic; reported values treated as inorganic (iAs) pending source clarification.
- EDI calculations assumed 500 mL/day infant consumption; consumption varies by age within 0-12 month window.
- WHO guideline comparison suggests category-wide concern in Saudi Arabia market at time of study (2019–2020 samples).

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [22b1fec](https://github.com/paleofoundation/heavymetalindex/commit/22b1fec) | 2026-05-31 | autonomy: self-heal recovery of prior tick's uncommitted work — 2026-05-31T15-22-11Z |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
<!-- END: hmi-page-history -->
