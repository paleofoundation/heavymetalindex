---
type: source
raw_handle: FM_9883334
cite_key: hu2022-ml-drinking-water-contaminants
title: "Using Machine Learning Models to Predict Hydrocarbon and Chemical Contamination of Drinking Water"
authors: [Hu Y, Danaher S, Downey G, Elliott C]
year: 2022
publication: "Current Environmental Health Reports"
doi: 10.1007/s40572-022-00390-2
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_9883334/FM_9883334.md
metals: [tAs, Cr]
ingredients: []
products: []
matrices: [drinking-water]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "US public water system records used as training data for machine learning models predicting As, NO3, and Cr-VI exceedances"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Hu et al. 2022 — Machine learning for predicting arsenic and chromium in drinking water

This review and modeling paper evaluates machine learning approaches for predicting the risk of chemical contaminants — primarily arsenic, nitrate, and hexavalent chromium (Cr-VI) — in US public drinking water systems. The authors synthesize literature on ML model performance, including random forest and neural network architectures trained on UCMR and SDWIS databases, and find that geospatial, geological, and demographic features achieve good predictive accuracy for arsenic exceedance above the 10 µg/L MCL, supporting prioritized monitoring and remediation resource allocation.

## Key numbers
- US EPA MCL for arsenic in drinking water: 10 µg/L (10 ppb)
- ML models for arsenic prediction achieved AUC values of 0.75–0.92 depending on feature set and geography
- Cr-VI lacks a federal MCL; California MCL of 10 µg/L used as reference in several reviewed models
- ~3,000 US public water systems flagged as high-risk for arsenic exceedance in prediction models reviewed

## Methods (brief)
Review and synthesis of published machine learning models for chemical contaminant prediction in drinking water. Models included random forest, gradient boosting, logistic regression, and neural networks. Primary contaminants covered: As (total, inorganic), NO3, Cr-VI. Speciation note: papers reviewed generally use total arsenic; distinction between tAs and iAs is not consistently maintained across the reviewed ML literature.

## Implications
Certification: Establishes ML as a validated tool for predicting drinking water As/Cr exceedance; relevant to supply-chain water source risk assessment.
Courses: Demonstrates predictive modeling applications for water quality management.
App: Supports geographic risk flagging for drinking water arsenic exposure.

## Wiki pages updated on ingest
- [[metals/arsenic]]
- [[metals/chromium]]
- [[regulations/epa-drinking-water-as-10ppb]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [9795863](https://github.com/paleofoundation/heavymetalindex/commit/9795863) | 2026-05-13 | ingest p4-batch16-g4: 10 pages, 38 FP |
<!-- END: hmi-page-history -->
