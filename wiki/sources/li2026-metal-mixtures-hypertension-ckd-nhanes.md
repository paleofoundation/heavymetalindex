---
type: source
cite_key: li2026-metal-mixtures-hypertension-ckd-nhanes
title: "Bidirectional associations of hypertension and chronic kidney disease risks under metal exposure: A mixture exposure and exploratory decomposition analysis"
authors: [Li J, Du H, Wu X, Geng W, Jiang J, Zhao Y]
year: 2026
publication: "Medicine"
doi: 10.1097/md.0000000000049306
access_url: "https://doi.org/10.1097/md.0000000000049306"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-4
public_evidence_label: Context only
review_state: machine_extracted
claim_classes: [literature_finding]
raw_path: raw/pdf/HMI-TOPIC-0022/10.1097_md.0000000000049306.pdf
sha256: e46f1f76f24e8c1ee28e198f3024d57b74656d5852587c3e4931ab2130ad1e0a
access_date: 2026-11-04
license: "CC BY-NC"
metals: [Pb, Cd, tHg, Mn, Sb, Ba, Tl, Cs, Mo, W, Se]
ingredients: []
products: []
matrices: [blood, urine]
jurisdictions: [US]
sample_n: 4776
sample_population: "US adults, NHANES 2011-2018, aged 20 and older"
updated: 2026-11-06
---

# Li et al. 2026 -- Metal mixtures, hypertension, and CKD: NHANES 2011-2018

## Overview

Cross-sectional study of 4,776 US adults from NHANES 2011 to 2018 examining single and combined effects of multiple metals on hypertension and chronic kidney disease (CKD) risk. Five statistical methods were employed: generalized linear models, restricted cubic splines, weighted quantile sum (WQS) regression, Bayesian kernel machine regression (BKMR), and quantile g-computation. An exploratory decomposition analysis was used to quantify mediation of the metal-hypertension association through renal function, and of the metal-CKD association through blood pressure. The bidirectional framing distinguishes this paper from single-direction analyses.

## Key numbers

n=4,776 US adults, NHANES 2011-2018. Blood metals (lead, cadmium, mercury, manganese, selenium) and urinary metals (barium, thallium, cesium, molybdenum, tungsten, antimony) measured.

Mixture associations:

- Blood metals mixture: positive association with both CKD and hypertension risk; lead and cadmium identified as primary contributors across all models.
- Urinary metals mixture: inverse association with both outcomes; barium and thallium identified as main contributors to the protective direction.
- Spearman correlation: strong correlation between thallium and cesium in urine (r=0.62); moderate correlation between lead and cadmium in blood (r=0.34).

Restricted cubic spline analyses revealed complex dose-response relationships including linear, U-shaped, L-shaped, and inverse U-shaped patterns by metal.

Exploratory decomposition findings: renal function had decomposition effects in the metal-hypertension pathway, and blood pressure had decomposition effects in the metal-CKD pathway. These bidirectional mediation findings indicate that the two diseases co-evolve under metal exposure rather than developing independently.

## Evidence Fitness

Context only. Cross-sectional design; temporality of metal exposure relative to disease onset cannot be established. Blood and urinary biomarkers reflect mixed recent and cumulative exposure by matrix and metal half-life. Food contamination data not reported; dietary sources not disaggregated. Findings characterize the nature and direction of metal mixture associations with cardiovascular-renal endpoints in a nationally representative US population.

## Methods (brief)

NHANES 2011-2018. Blood metals by ICP-MS; urinary metals by ICP-MS, creatinine-adjusted for dilution. CKD defined as eGFR less than 60 mL/min/1.73 m2 (CKD-EPI formula) or ACR at least 30 mg/g. Hypertension defined as SBP at least 140 mmHg, DBP at least 90 mmHg, antihypertensive use, or physician diagnosis. Values below the LOD replaced with LOD divided by the square root of two.

## Implications

Certification: Lead and cadmium as the dominant blood-metal-mixture contributors to both CKD and hypertension risk in a large US adult population is consistent with their status as HMT&C Tier-1 analytes.

Courses: Useful for demonstrating how mixture methods can reveal which metals drive effects when multiple correlated metals are present simultaneously.

App: Biomarker study; no food concentration data for contamination_profile.

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
