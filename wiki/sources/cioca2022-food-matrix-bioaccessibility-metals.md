---
type: source
raw_handle: FM_9749431
cite_key: cioca2022-food-matrix-bioaccessibility-metals
title: "Implementation of food matrix effects into chemical food contaminant risk assessment"
authors: [Cioca A-A, Langerholc T, Tusar L]
year: 2022
publication: "EFSA Journal"
doi: 10.2903/j.efsa.2022.e200905
source_type: government-report
evidence_tier: A
license: "CC BY-ND 4.0"
raw_path: raw/markdown/FM_9749431/FM_9749431.md
metals: [Cd, Pb, tHg, tAs]
ingredients: []
products: []
matrices: [dietary-intake]
jurisdictions: [EU]
near_duplicates: []
sample_n: null
sample_population: "Systematic database compilation of published bioaccessibility and bioavailability data for Cd, Pb, Hg, and As across different food matrices; EFSA EU-FORA fellowship programme, University of Maribor and Jozef Stefan Institute, Slovenia"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Cioca et al. 2022 — Food matrix effects on bioaccessibility and bioavailability of Cd, Pb, Hg, and As

This EFSA EU-FORA technical report is a two-part work program: the first part analyzed inconsistencies in the translation of the terms "hazard" and "risk" across EU member state food legislation; the second part compiled a database of published bioaccessibility and bioavailability data for cadmium (Cd), lead (Pb), mercury (Hg), and arsenic (As) across different food matrices, intended to support future statistical analysis of how the food matrix affects gastrointestinal absorption and systemic availability of these metals. The paper does not itself report original measured food concentrations but provides a structured compilation of bioaccessibility data from peer-reviewed journals, establishing the data infrastructure for improved food safety risk assessment that accounts for in-matrix absorption modulation.

## Key numbers

No original analytical measurements reported. The work products are:

1. A software comparison tool identifying translation inconsistencies in "hazard" vs "risk" terminology across all 24 official EU language versions of food regulations (WP1).

2. A structured database of bioaccessibility and bioavailability values for Cd, Pb, Hg, and As from different food matrices, built from scientific literature for use in future statistical analyses (WP2). The database structure captures: food matrix type, bioaccessibility fraction (%), bioavailability fraction (%), analytical method, study design, and original source citation.

## Methods (brief)

WP1: automated text comparison software applied to official English versions of food regulations versus national language versions across EU member states, with review by native-speaking food safety experts.

WP2: systematic literature search and data extraction from peer-reviewed journals reporting in vitro or in vivo bioaccessibility and bioavailability data for Cd, Pb, Hg, and As in food matrices. Database built as spreadsheet with standardized fields for future statistical analysis.

## Implications

Certification: documents that bioaccessibility of Cd, Pb, Hg, and As varies substantially across food matrices and that using total food concentration as a proxy for exposure without matrix correction can overestimate risk in some foods and underestimate it in others. For HMT&C purposes, the difference between "concentration in food as placed on market" and "systemically available dose" is relevant to exposure estimates and health risk characterization.

Courses: EFSA EU-FORA reference for food matrix bioaccessibility as a methodological concept in chemical risk assessment. The hazard/risk terminology analysis (WP1) is useful for courses covering regulatory language and communication.

App: bioaccessibility corrections are not currently implemented in the app model but this source documents the evidence base that should inform future uncertainty ranges.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury]]
- [[metals/arsenic]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [6edd24b](https://github.com/paleofoundation/heavymetalindex/commit/6edd24b) | 2026-05-13 | ingest p4-batch16-g2: 7 pages, 43 FP |
<!-- END: hmi-page-history -->
