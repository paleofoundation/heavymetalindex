---
type: source
cite_key: guo2026-heavy-metals-depression-nhanes
title: "Association between heavy metals exposure and depression: findings of the NHANES from 2003 to 2020"
authors: ["Yifei Guo", "Yitong Chen", "Hao Zhou", "Yixing Fan", "Tiantian Feng", "Zhuang Ma"]
year: 2026
publication: "European Journal of Medical Research 31:266"
doi: "10.1186/s40001-026-03850-x"
access_url: "https://doi.org/10.1186/s40001-026-03850-x"
retrieval_date: 2026-11-04
source_type: peer-reviewed
evidence_tier: A
license: "cc by-nc-nd"
raw_path: "raw/antimony-fill-2026-11/10.1186_s40001-026-03850-x.pdf"
raw_sha256: b68978c062a0426900af5aa3776456df53c2364d2e733739c91bafe76e68a5a4
metals: [Sb, Cd, Hg, Pb, W]
ingredients: []
products: []
matrices: ["urine", "blood"]
jurisdictions: [US]
evidence_fitness:
  supports: ["urinary Sb reference distribution in US adults (NHANES 2003-2020); observational associations between urinary Sb quartile and depression risk; nonlinear dose-response pattern"]
  does_not_support: ["causality; food-specific Sb source attribution; a monotonic dose-response for Sb and depression"]
audience: [regulator, educator]
sources: 0
wiki_doi: null
updated: 2026-11-05
---

# Guo et al. 2026 -- Heavy metals and depression, NHANES 2003-2020

## Summary

Cross-sectional analysis of NHANES 2003-2020 (N = 8,814; 731 with depression defined as PHQ-9 score 10 or above). Nine urinary metals and blood Cd, Hg, and Pb examined. For antimony, a statistically significant association was found at Q3 (adjusted OR 1.34, 95% CI 1.03-1.75, p = 0.029) but not Q2 or Q4, and restricted cubic spline analysis confirmed a nonlinear dose-response (p for nonlinearity less than 0.001). Urinary antimony had a Bayesian posterior inclusion probability (PIP) of 0.448, identifying it as an important variable in BKMR machine-learning analysis. Tungsten (urinary) and blood Cd were the dominant positive contributors.

## Key numbers

**Urinary Sb (microg/L, raw), NHANES 2003-2020, N = 8,814:**
- Overall mean: 0.09 +/- 0.17 microg/L (mean +/- SE format from Table 1)
- Non-depression group: 0.09 +/- 0.18 microg/L
- Depression group: 0.09 +/- 0.13 microg/L
- No significant difference between groups (p = 0.653)

**Association with depression (adjusted multivariable model):**
- Q3 vs. Q1: OR = 1.34 (95% CI 1.03-1.75), p = 0.029
- Q2 vs. Q1: OR = 1.07 (95% CI 0.83-1.39), p = 0.595 (not significant)
- Q4 vs. Q1: OR = 1.25 (95% CI 0.93-1.68), p = 0.134 (not significant)
- RCS: significant nonlinearity (p less than 0.001); non-monotonic dose-response
- BKMR PIP: 0.448 (selected as important by Bayesian model; below the 0.5 threshold conventionally used for high inclusion probability)

## Evidence Fitness

Modeled or limited evidence for Sb-depression association. The non-monotonic pattern (significant at Q3 but not Q4) is not consistent with a simple dose-dependent effect. Cross-sectional design cannot establish temporality. Single urinary measurement has high within-person variability for Sb.

## Methods (brief)

NHANES 2003-2020, 8 cycles, N = 8,814 with complete data. Depression defined as PHQ-9 score 10 or above. Urinary metals by ICP-MS. Adjusted logistic regression, restricted cubic spline, weighted quantile sum (WQS), Bayesian kernel machine regression (BKMR). Adjusted for age, sex, race/ethnicity, education, poverty-income ratio, BMI, smoking.

## Implications

- Certification: urinary Sb shows a non-monotonic statistical association with depression risk in a large US sample; insufficient for a clinical reference value.
- Courses: illustrates that multi-metal NHANES analyses frequently find weak, non-monotonic associations for Sb that do not translate to clear exposure limits.
- App: not applicable.
- Microbiome: not addressed.

## Provenance notes

Open access, CC BY-NC-ND. File from PMC OA S3 (PMC12888277).
