---
type: source
raw_handle: FM_10025549
cite_key: xie2023-metal-mixtures-nafld-nhanes
title: "Associations of metal mixtures with non-alcoholic fatty liver disease and liver fibrosis: NHANES 2003–2018"
authors: [Xie Y, Zheng Y, Li Z, Chen X, Li M, Liao Y, Wang X]
year: 2023
publication: "Frontiers in Public Health"
doi: 10.3389/fpubh.2023.1133194
access_url: "https://doi.org/10.3389/fpubh.2023.1133194"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_10025549/FM_10025549.md
metals: [tAs, Cd, Pb, tHg, Sb, Co, Cs, Mo, Tl, W, Ba]
ingredients: []
products: []
matrices: [urine, blood]
jurisdictions: [US]
near_duplicates: []
sample_n: 5548
sample_population: "US adults, NHANES 2003–2018"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Xie et al. 2023 — Metal mixtures and NAFLD/MAFLD: NHANES 2003–2018

This large cross-sectional study uses National Health and Nutrition Examination Survey (NHANES) data from 2003 to 2018 (n=5,548 US adults) to investigate associations between 13-metal urinary mixtures and non-alcoholic fatty liver disease (NAFLD) and metabolic-associated fatty liver disease (MAFLD), as well as liver fibrosis severity. Metals measured include arsenic (As), cadmium (Cd), lead (Pb), mercury (Hg), barium (Ba), cobalt (Co), cesium (Cs), molybdenum (Mo), antimony (Sb), thallium (Tl), and tungsten (W). The analysis uses weighted quantile sum (WQS) regression and Bayesian kernel machine regression (BKMR) to characterize mixture effects while accounting for co-exposures.

## Key numbers

n=5,548 US adults, NHANES 2003–2018. Urinary metal concentrations used as biomarkers of recent combined dietary and environmental exposure.

Mixture association findings (adjusted for demographics, alcohol, smoking, BMI):

- Higher metal mixture index significantly associated with increased odds of NAFLD and MAFLD (WQS positive direction significant).
- Arsenic, cadmium, and lead consistently among the highest-weighted metals in both WQS and BKMR models, suggesting they drive the mixture association with liver disease outcomes.
- Thallium and tungsten also showed positive associations with liver fibrosis in some models.
- Mercury association was attenuated after adjustment for seafood consumption frequency.

All exposure data derived from urine (creatinine-adjusted); blood lead and blood mercury also used in sensitivity analyses. Dietary sources not disaggregated; the study captures cumulative exposure from all routes.

## Methods (brief)

Cross-sectional analysis of NHANES 2003–2018 data. Liver outcomes: NAFLD and MAFLD by FibroScan controlled attenuation parameter (CAP) ≥248 dB/m (in the cycles with transient elastography) or by surrogate fatty liver index. Liver fibrosis: liver stiffness measurement ≥7 kPa. Metal concentrations by ICP-MS (urine and blood), standardized NHANES laboratory protocols. Statistical methods: WQS regression (positive constraint), BKMR, restricted cubic splines for dose-response; weighted to account for NHANES complex survey design.

## Implications

Certification: Supports the public health rationale for multi-metal monitoring rather than single-analyte thresholds; liver toxicity is an important endpoint alongside neurological effects. As, Cd, and Pb are the dominant drivers in this mixture study, consistent with HMT&C analyte priorities.

Courses: Excellent case study for cumulative exposure and mixture toxicology module. The US population scale (n=5,548) and use of nationally representative data make it a credible reference.

App: Biomarker study; does not directly populate per-ingredient contamination_profile values. Relevant to health outcome framing and exposure pathway documentation.

Microbiome: Not directly applicable; however, liver-gut axis pathways could connect to microbiome content if a liver fibrosis-metals-microbiome page is developed.

## Wiki pages updated on ingest

- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury-total]]
- [[health/nafld-heavy-metals]]
- [[health/liver-disease-exposure]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | reconcile: regenerate derived layer + restore stranded EU 2024/1987 nickel work |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c6671](https://github.com/paleofoundation/heavymetalindex/commit/8707c6671) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84efb](https://github.com/paleofoundation/heavymetalindex/commit/140e84efb) | 2026-06-03 | refresh manual fetch generated outputs |
<!-- END: hmi-page-history -->
