---
type: source
cite_key: zhang2025-metal-mixtures-ckd-nhanes
title: "Evaluating the impact of environmental metal mixtures on chronic kidney disease risk: Insights from the National Health and Nutrition Examination Survey 2011-2016"
authors: [Zhang S, Fu X]
year: 2025
publication: "The Journal of International Medical Research"
doi: 10.1177/03000605251378695
access_url: "https://doi.org/10.1177/03000605251378695"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-4
public_evidence_label: Context only
review_state: machine_extracted
claim_classes: [literature_finding]
raw_path: raw/pdf/HMI-TOPIC-0022/10.1177_03000605251378695.pdf
sha256: d9c2a1bc862eea035d3ab3c0593e3cf47ee23ff8914dda79350a4f77acb95ce7
access_date: 2026-11-04
license: "CC BY-NC"
metals: [Pb, Cd, tHg, Mn, Se, Cu, Zn]
ingredients: []
products: []
matrices: [blood, serum]
jurisdictions: [US]
sample_n: 3514
sample_population: "US adults aged 20 and older, NHANES 2011-2016"
updated: 2026-11-06
---

# Zhang and Fu 2025 -- Metal mixture and CKD risk: NHANES 2011-2016

## Overview

Cross-sectional analysis of 3,514 US adults from NHANES 2011-2016 examining seven metals (lead, cadmium, mercury, selenium, manganese in blood; copper and zinc in serum) in relation to chronic kidney disease risk, using logistic regression, restricted cubic splines, WQS, BKMR, and XGBoost machine learning.

## Key numbers

n=3,514 US adults, NHANES 2011-2016.

Mixture findings:

- WQS: metal mixture exposure positively associated with CKD (OR=1.58, 95% CI: 1.30-1.94); lead and cadmium showed the highest contribution.
- BKMR confirmed cumulative and interactive effects of the metal mixture on CKD risk.
- XGBoost model: AUC=0.801, indicating good predictive performance for CKD using metal profiles.
- Single-metal: higher lead, cadmium, and copper concentrations linked to increased CKD risk; zinc showed protective effects.
- Selenium and manganese showed negative (protective) associations with CKD in some models, partially offsetting lead and cadmium effects.

The OR of 1.58 for the overall metal mixture is a mixture-level estimate after accounting for the opposing directions of different metals; this estimate would be attenuated relative to what lead and cadmium alone would yield if protective metals were excluded.

## Evidence Fitness

Context only. Cross-sectional design. Blood metals reflect mixed recent and cumulative exposure by metal half-life. The mixture OR of 1.58 characterizes the full seven-metal mixture, including protective metals. Lead and cadmium, the two metals with positive single-metal associations, are the dominant contributors. No food concentration data.

## Methods (brief)

NHANES 2011-2016 cycles (2011-2012, 2013-2014, 2015-2016). Blood metals by ICP-MS; serum metals by ICP-MS. CKD defined by CKD-EPI eGFR below 60 mL/min/1.73 m2 or ACR at least 30 mg/g. Metal concentrations below LOD replaced with LOD divided by square root of two. WQS, BKMR, and XGBoost applied.

## Implications

Certification: WQS OR of 1.58 for the full blood metal mixture with lead and cadmium as dominant contributors is consistent with HMT&C analyte prioritization.

Courses: Useful for demonstrating how XGBoost can complement traditional epidemiological methods in mixture analysis.

App: No food concentration data.

Microbiome: Not applicable.

## Related evidence

- [[metals/lead]]
- [[metals/cadmium]]
- [[health/renal-toxicity-metals]]
- [[synthesis/combined-exposure-underprotection]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
<!-- END: hmi-page-history -->
