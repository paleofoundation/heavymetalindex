---
type: source
raw_handle: PCMF_in-utero-exposure-to-heavy-metals-and-trace-elemen
cite_key: zhang2021-in-utero-metals-childhood-blood-pressure
title: "In Utero Exposure to Heavy Metals and Trace Elements and Childhood Blood Pressure in a U.S. Urban, Low-Income, Minority Birth Cohort"
authors: [Zhang M, Liu T, Wang G, Buckley JP, Guallar E, Hong X, Wang MC, Wills-Karp M, Wang X, Mueller NT]
year: 2021
publication: "Environmental Health Perspectives"
doi: 10.1289/EHP8325
access_url: "https://doi.org/10.1289/EHP8325"
source_type: peer-reviewed
evidence_tier: A
license: "Public domain (NIEHS authorship; EHP open access)"
raw_path: "raw/Papers Cube Manual Fetch/In Utero Exposure to Heavy Metals and Trace Elements and Childhood Blood Pressure in a U.S. Urban, Low-Income, Minority Birth Cohort.pdf"
raw_sha256: 929846333c1020e0df3d3b5b04ed13c37b695e5983972eb5c35ae20ffa8ee32f
metals: [Pb, tHg, Cd, Se, Mn]
ingredients: []
products: []
matrices: [blood, maternal-rbc, gestational-exposure]
jurisdictions: [US]
near_duplicates: []
sample_n: 1194
sample_population: "1,194 mother–child dyads enrolled in the Boston Birth Cohort at the Boston Medical Center between November 2002 and October 2013, followed up until May 2018. 60.5% of mothers were non-Hispanic Black, 19.9% Hispanic, 4.8% non-Hispanic White, and 14.8% other (predominantly urban, low-income population). Children were measured at the most recent annual well-child visit between ages 3 and 15 years (median age 8.4, IQR 6.2–10.6 y)."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# Zhang et al. 2021 — In utero metal/trace element exposure and childhood blood pressure (Boston Birth Cohort)

## Overview

Zhang and colleagues examined the individual and joint associations of in utero exposure to two heavy metals (Pb, Hg, Cd) and two essential trace elements (Se, Mn) — measured in maternal red blood cells (RBCs) collected 24–72 h after delivery as a proxy for third-trimester exposure — with child blood pressure percentile between ages 3 and 15 in a predominantly low-income, urban, racial/ethnic minority U.S. cohort (60.5% non-Hispanic Black, 19.9% Hispanic, 4.8% non-Hispanic White, 14.8% other). The headline finding is an inverse association between maternal RBC selenium and manganese and child systolic blood pressure (SBP) percentile (−6.23 and −2.62 percentile points per doubling of exposure, respectively, in adjusted linear regression); Pb, Hg, and Cd were not individually associated with child SBP. Bayesian kernel machine regression revealed a Mn–Cd interaction whereby the protective Mn–SBP association was stronger at higher Cd levels (p-interaction = 0.04), and maternal cigarette smoking during pregnancy (a major Cd exposure source) further modified the Mn–SBP relationship, with a doubling of maternal Mn associated with a 10.09-point reduction in child SBP percentile among smokers (95% CI: −18.03, −2.15) compared with a 1.49-point reduction in non-smokers (95% CI: −4.21, 1.24; p-interaction = 0.08). No metals or trace elements were associated with child diastolic blood pressure.

## Key numbers

Maternal RBC concentrations and detection profile (Table 1, n = 1,194; values imputed at LOD/√2 for the small subset below LOD):

| Analyte | Mean (SD) | 25th / 50th / 75th percentile | LOD | n (%) < LOD |
|---|---|---|---|---|
| Pb (µg/dL) | 3.29 (3.03) | 1.65 / 2.42 / 3.68 | 0.07 | 0 (0%) |
| Hg (µg/L) | 3.15 (3.60) | 1.06 / 2.15 / 3.70 | 0.280 | 134 (11.2%) |
| Cd (µg/L) | 0.86 (0.68) | 0.46 / 0.69 / 1.04 | 0.100 | 104 (8.7%) |
| Se (µg/L) | 289.50 (60.49) | 248.00 / 278.00 / 316.00 | 24.5 | 0 (0%) |
| Mn (µg/L) | 39.57 (15.28) | 28.80 / 37.30 / 48.00 | 0.99 | 2 (0.2%) |

Adjusted linear-regression association of a doubling of each metal/trace element with child SBP percentile (Table 3; adjusted for maternal age at delivery, race/ethnicity, educational level, prepregnancy BMI, and maternal cigarette smoking history):

| Analyte | β per doubling | 95% CI | Direction |
|---|---|---|---|
| Pb (µg/dL) | +0.30 | −1.42, 2.02 | Null |
| Hg (µg/L) | −0.07 | −1.18, 1.05 | Null |
| Cd (µg/L) | +0.14 | −1.53, 1.81 | Null |
| Se (µg/L) | −6.23 | −11.51, −0.96 | Inverse, significant |
| Mn (µg/L) | −2.62 | −5.20, −0.04 | Inverse, significant |

Quartile-based estimates (Table 3, Q4 vs Q1 adjusted): Se Q4 (318.0–624.0 µg/L) was −3.23 SBP percentile points (95% CI: −7.34, 0.89) compared with Q1 (152.4–248.0); Mn Q4 (48.2–109.8 µg/L) was −3.86 points (−7.95, 0.24) compared with Q1 (<LOD–28.8). Quartile estimates for Pb, Hg, and Cd showed no monotonic trend. BKMR exposure–response curves (Figure 2) were generally consistent with the linear regressions.

Pairwise interactions (BKMR and linear regression, Figure 3, Table S5): Mn × Cd on child SBP, p-interaction = 0.04. At low Mn levels there was a positive Cd–SBP association; the inverse Mn–SBP association was stronger at higher Cd. A doubling of both Mn and Cd was associated with +7.02 SBP percentile points (95% CI: −2.27, 16.31) versus +13.52 (95% CI: 1.01, 26.03) for a doubling of Cd alone. No other pairwise interactions reached the prespecified threshold (p < 0.10).

Effect modification by maternal cigarette smoking during pregnancy (Table 4; smoked n = 108 vs did not smoke n = 1,086):

| Analyte | β per doubling, smokers | 95% CI | β per doubling, non-smokers | 95% CI | p-interaction |
|---|---|---|---|---|---|
| Pb (µg/dL) | −3.09 | −10.43, 4.26 | +0.61 | −1.16, 2.37 | 0.11 |
| Hg (µg/L) | −0.04 | −4.42, 4.34 | +0.07 | −1.08, 1.22 | 0.18 |
| Cd (µg/L) | +2.98 | −3.05, 9.00 | −0.44 | −2.19, 1.31 | 0.33 |
| Se (µg/L) | +2.98 | −3.05, 9.00 | −5.69 | −11.14, −0.24 | 0.13 |
| Mn (µg/L) | −14.28 | −35.82, 7.26 | −1.49 | −4.21, 1.24 | 0.08 |

(Note: the Se smokers row in Table 4 appears as +2.98 [−3.05, 9.00], identical to the Cd-smokers cell; the in-text figure for the Mn–smokers BKMR estimate is −10.09 [−18.03, −2.15], somewhat tighter than the linear-regression −14.28 cell.) Median maternal Cd was 1.41 µg/L (IQR 0.93–2.37) in mothers who smoked versus 0.65 µg/L (IQR 0.43–0.96) in mothers who did not (p < 0.001), making smoking a likely upstream driver of both Cd exposure and the Mn × Cd interaction.

Mixture-as-a-whole effects: BKMR with hierarchical variable selection assigned a group posterior inclusion probability (PIP) of 0.852 to the trace-elements group (Se, Mn) versus 0.042 to the heavy-metals group (Pb, Hg, Cd) for child SBP. Within groups, Pb had the largest conditional PIP among heavy metals and Se the largest among trace elements. The overall mixture was not associated with child SBP (Figure S7) or DBP (Figure S8). No metal or trace element was clearly associated with child DBP percentile (Table S4, Figure S5); the only possible exception was an inverse Se–DBP estimate (β = −2.75 per doubling; 95% CI: −6.90, 1.40).

Subgroup heterogeneity (Table S8): the inverse Mn–SBP association was strongest at ages 3–5 y (β = −6.29; 95% CI: −11.52, −1.06) and null at ages 10–15 y (p-interaction by age group = 0.01). The Hg–SBP and Hg–DBP associations differed by maternal race/ethnicity (p-interaction = 0.05 for SBP, 0.001 for DBP), with inverse estimates among children of non-Hispanic Black mothers and positive estimates among children of Hispanic mothers. The Mn–SBP association differed between children of Hispanic mothers (β = −4.11; 95% CI: −8.98, 0.75) and non-Hispanic Black mothers (β = 0.81; 95% CI: −1.83, 3.45; p-interaction = 0.05).

## Methods (brief)

**Cohort.** Boston Birth Cohort, an ongoing prospective birth cohort at the Boston Medical Center recruiting mother–infant dyads 24–72 h after delivery of a singleton live infant without major birth defects. 1,272 mothers had blood metals measured; 1,194 were retained after excluding 78 dyads missing covariates. Compared with the excluded subset (n = 307), the analytic sample was more likely to be non-Hispanic Black, less likely to be Hispanic or to have smoked, and had lower preterm and higher child BMI; RBC metal/trace-element distributions did not differ.

**Exposure assessment.** Maternal whole-blood samples collected 24–72 h after delivery were centrifuged, and red blood cells were stored at −80 °C in metal-free vials. RBC aliquots (0.5 mL) were transported on dry ice to the Public Health and Environmental Laboratories in Trenton, New Jersey, and measured by inductively coupled plasma–mass spectrometry (ICP-MS). All five elements were measured in the same run. Intra-assay coefficients of variation were ≤ 5.0%. Hg is reported as total Hg in RBCs (no MeHg/iHg speciation); the authors note that ~90% of RBC Hg is methylmercury in this U.S. coastal population. Maternal RBC concentrations are described as a proxy for third-trimester in utero exposure given the long red-cell lifespan (~120 d) and the biological half-lives of Pb, Hg, Cd in blood (2–4 months) and Mn (~40 d). Values below LOD were imputed as LOD/√2.

**Outcome.** Child blood pressure measured at the most recent annual well-child visit between ages 3 and 15 y by clinical staff using an automatic sphygmomanometer (Masimo SET) on the right brachial artery in the seated position. Child age-, sex-, and height-specific SBP and DBP percentiles were calculated using the 2017 American Academy of Pediatrics Clinical Practice Guideline (Flynn et al. 2017), which updated the 2004 Pediatric Hypertension Guideline. SBP was the primary outcome; DBP secondary. SBP z-scores and SBP ≥ 90th percentile (logistic regression) were used in sensitivity analyses.

**Covariates.** Multivariable models adjusted for maternal age at delivery (continuous), self-reported race/ethnicity (non-Hispanic Black, non-Hispanic White, Hispanic, others), educational level (middle school or below; high school graduate/some college; college graduate or above), prepregnancy BMI (continuous), and maternal cigarette smoking history (never smoked; quit smoking before pregnancy; smoked during pregnancy). Sensitivity analyses additionally adjusted for maternal fish intake, preeclampsia, diabetes mellitus, and child BMI; stabilized inverse-probability weights were applied to account for selection bias.

**Statistical analysis.** Two complementary approaches. (1) Linear regression with each metal/trace element log₂-transformed (β per doubling) and as quartiles (Q1 reference). Product terms tested pairwise metal × metal interactions on child SBP percentile (p < 0.10 threshold for effect modification, given the exploratory aim). (2) Bayesian kernel machine regression (BKMR) implemented in R package `bkmr` v0.2.0 (default parameters in the `kmbayes` function), with four parallel MCMC chains of 100,000 iterations each (50,000 burn-in) fitted via the `kmbayes_parallel` function in R package `bkmrhat` v1.0.2. Hierarchical variable selection grouped the five elements into heavy metals (Pb, Cd, Hg) versus trace elements (Mn, Se) to compute group and conditional posterior inclusion probabilities. Convergence assessed by trace plots, autocorrelation plots, density plots, and Gelman–Rubin statistics. Software: Stata 15.1 and R 3.6.3.

**Strengths and limitations (per the authors).** Strengths: prospective birth-cohort design, large (n = 1,194) sample, racially/ethnically diverse low-income population underrepresented in environmental health research, BKMR allowing nonlinear and interactive mixture effects, RBC measurement capturing transplacental transfer rather than the diluted plasma signal. Limitations: RBC collection within 24–72 h post-partum is a proxy for late pregnancy only and cannot resolve cumulative or trimester-specific exposure; only one BP measurement per child was used (the most recent visit), introducing measurement error; child metal levels in early life were not measured, so the in utero versus early-life mediator question cannot be addressed; total Hg in RBCs aggregates organic and inorganic forms whose BP effects may oppose each other.

## Implications

**Certification.** This is a maternal-biomonitoring exposure study; it does not contribute occurrence data for any HMT&C product category. Its relevance to HMT&C threshold-setting is indirect: it argues that the toxicological frame for prenatal Pb, Hg, and Cd exposure should not be restricted to neurodevelopmental endpoints, but should also consider cardiovascular outcomes in childhood — a domain currently underrepresented in the HMT&C evidence base. The Mn–Cd interaction and the smoking-modified Mn–SBP association suggest that essential trace elements (which HMT&C does not currently regulate) are co-determinants of the toxic-metal health response in pregnancy, complicating any single-analyte interpretation of cord-blood or maternal-blood biomonitoring data.

**Courses.** Useful for the perinatal-exposure module as a case study in (a) mixture modeling using BKMR vs single-analyte regression, (b) the difference between essential trace elements (Se, Mn) and toxic heavy metals in the context of pregnancy outcomes, and (c) effect modification by maternal smoking when one of the modifier's mechanisms is upstream metal-exposure co-occurrence (cigarette smoke as a Cd source).

**App.** Not applicable to ingredient-level contamination profiling (exposure measured in maternal RBC, not in foods).

**Microbiome.** Not addressed.

## Related evidence
- [[metals/lead]]
- [[metals/mercury]]
- [[metals/cadmium]]
- [[metals/manganese]]
- [[health/cardiovascular-effects]]
- [[health/vulnerable-populations]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
