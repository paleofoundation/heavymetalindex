---
draft: false
type: source
cite_key: middleton2025-exwas-cognition-nhanes
title: "Exposome-wide association study of cognition among older adults in the National Health and Nutrition Examination Survey"
authors: [Middleton LY, Nguyen PH, Huang H, Heck JE, Langfelder P, Tseng C, et al.]
year: 2025
publication: "Exposome"
doi: 10.1093/exposome/osaf002
pmcid: PMC11805339
pmid: 39926246
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: machine_extracted
claim_classes: [literature_finding]
raw_path: raw/papers/middleton2025-exwas-cognition-nhanes.pdf
sha256: 027e2b0580f289d4f75cd9737fd75fb93617ff8a3395d479b111d0910c4aaa73
access_date: 2026-11-04
access_url: https://doi.org/10.1093/exposome/osaf002
license: public-redistribute
metals: [W, Pb, Cd, Hg, As, Mo, Cs, Co, Mn, Se, Ba, Tl, U, Sb]
ingredients: []
products: []
matrices: [urine, blood, serum]
jurisdictions: [US]
superseded_by: null
updated: 2026-11-06
---

# Middleton et al. 2025 -- ExWAS of cognition in NHANES; urinary tungsten association

## Summary

This exposome-wide association study (ExWAS) screened 147 environmental chemicals, including metals, persistent organic pollutants, and other exposures, against cognitive test scores (Digit Symbol Substitution Test, DSST; CERAD word recall) in NHANES participants aged 60 and older (n=4,982 across 1999-2000 and 2011-2014 cycles). A one-standard-deviation increase in log2-scaled urinary tungsten concentration was associated with a 1.34-point lower DSST score (95% CI: -2.11, -0.56), unadjusted p=0.002, FDR-adjusted p=0.08. Tungsten appeared prominently on the volcano plot below the p=0.01 threshold before FDR correction. A prior NHANES analysis cited by the authors found consistent associations with CERAD immediate recall (-0.38 points) and delayed recall (-0.19 points).

## Key numbers

- Beta for DSST per SD increase in log2 urinary tungsten: -1.34 points (95% CI: -2.11, -0.56) (p.1)
- Unadjusted p-value: 0.002; FDR-adjusted p-value: 0.08
- Supplemental: prior NHANES ExWAS found CERAD immediate recall -0.38 points and delayed recall -0.19 points per SD log2 urinary tungsten
- Sample: n=4,982 NHANES participants aged 60+; pooled 1999-2000 and 2011-2014 cycles
- 147 environmental chemicals screened against cognitive outcomes

## Evidence Fitness

Modeled or limited evidence. ExWAS is a hypothesis-generating screen; FDR p=0.08 indicates nominal significance without surviving multiple testing correction. The cross-sectional design prevents causal inference. Spot urine tungsten reflects recent exposure; older adults may have different historical exposure patterns. The consistency with the prior NHANES citation provides partial replication.

## Methods (brief)

Urinary metals and other environmental chemicals from NHANES biomonitoring data. DSST (digit copying speed/accuracy) as primary cognitive outcome; CERAD word recall as secondary. Linear regression with survey-weighted analysis, adjustment for age, sex, race/ethnicity, education, smoking, alcohol, and BMI. ExWAS with Bonferroni and FDR corrections for 147 exposures. LOD handling: values below LOD replaced with LOD/sqrt(2).

## Implications

- Certification: hypothesis-generating; no food concentration data.
- Courses: illustrates ExWAS methodology and positions tungsten as one of the environmental chemical associations warranting follow-up for cognitive aging research.
- App: no ingredient contamination profile data.
- Microbiome: not addressed.

## Provenance notes

Open access under CC BY-NC. Retrieved from PMC OA S3 as PMC11805339.1. SHA-256 verified against MANIFEST.csv. No retraction flagged.

## Metal and ingredient pages

- [[metals/tungsten]]
