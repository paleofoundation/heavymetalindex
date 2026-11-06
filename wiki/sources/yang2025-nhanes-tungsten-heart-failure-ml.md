---
draft: false
type: source
cite_key: yang2025-nhanes-tungsten-heart-failure-ml
title: "Associations between urinary and blood heavy metal exposure and heart failure in elderly adults: Insights from an interpretable machine learning model based on NHANES (2003-2020)"
authors: [Yang Q, Shan X, Liu Y, Chen W, Zhang P, Li H]
year: 2025
publication: "International Journal of Cardiology. Cardiovascular Risk and Prevention"
doi: 10.1016/j.ijcrp.2025.200418
pmcid: PMC12146108
pmid: 40491714
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: machine_extracted
claim_classes: [literature_finding]
raw_path: raw/papers/yang2025-nhanes-tungsten-heart-failure-ml.pdf
sha256: 2dd07471baddbc4acffd3948e5937b78854a741ea930a4b0875bbb2b665251ab
access_date: 2026-11-04
access_url: https://doi.org/10.1016/j.ijcrp.2025.200418
license: public-redistribute
metals: [W, Be, Pb, Cd, Hg, As, Mo, Cs, Co, Mn, Se, Ba, Sb, Tl]
ingredients: []
products: []
matrices: [urine, blood]
jurisdictions: [US]
superseded_by: null
updated: 2026-11-06
---

# Yang and Shan 2025 -- NHANES urinary tungsten and heart failure (machine learning)

## Summary

This study used NHANES 2003-2020 data (n=6,879 adults aged 50 and older) and gradient boosted decision trees (GBDT) machine learning to identify predictors of heart failure among urinary and blood metal exposures. Urinary tungsten geometric mean was 0.06 ng/mL in both heart failure and non-heart failure groups (p=0.08 for difference). Despite the lack of significant bivariate difference, GBDT ranked urinary tungsten as the third most important metal feature (permutation importance PI=0.108), after urinary beryllium (PI=0.129) and age-adjusted variables. Individual conditional expectation (ICE) plots showed a positive partial dependence of urinary tungsten on heart failure probability across the exposure range.

## Key numbers

- Urinary tungsten geometric mean: 0.06 ng/mL in both heart failure (n=325) and no-heart failure (n=6,554) groups (p=0.08) (NHANES 2003-2020)
- GBDT permutation importance for urinary tungsten: PI=0.108 (3rd among metals, 1st of which was urinary beryllium at PI=0.129)
- ICE plots: positive partial dependence of urinary tungsten on heart failure probability
- Sample: n=6,879 adults aged 50+ in NHANES 2003-2020 with complete metal and outcome data

## Evidence Fitness

Modeled or limited evidence. Machine learning variable importance does not establish causation. The small bivariate difference in tungsten concentrations between heart failure cases and controls (p=0.08) makes the GBDT importance ranking difficult to interpret clinically. Cross-sectional design with spot urine; reverse causation possible (heart failure may alter renal excretion of tungsten). The ICE plot shape provides qualitative directional information only.

## Methods (brief)

Urinary and blood metals measured by ICP-MS in NHANES 2003-2020. Heart failure defined by self-reported physician diagnosis. GBDT with 5-fold cross-validation; SHAP values and permutation importance for feature ranking; ICE plots for visualization of dose-response relationships. Conventional logistic regression also run as a comparator. LOD/LOQ for tungsten not stated.

## Implications

- Certification: observational association study; no food concentration data; does not inform food-chain limits.
- Courses: illustrates GBDT and SHAP as modern epidemiological tools; shows tungsten as an emerging cardiometabolic biomarker of interest in population studies.
- App: no ingredient contamination profile data.
- Microbiome: not addressed.

## Provenance notes

Open access under CC BY-NC-ND. Retrieved from PMC OA S3 as PMC12146108.1. SHA-256 verified against MANIFEST.csv. No retraction flagged.

## Metal and ingredient pages

- [[metals/tungsten]]
