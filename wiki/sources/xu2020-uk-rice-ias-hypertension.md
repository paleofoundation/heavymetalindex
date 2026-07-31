---
type: source
raw_handle: auto-fetched
cite_key: xu2020-uk-rice-ias-hypertension
title: "Exploratory study of the association in the United Kingdom between hypertension and inorganic arsenic (iAs) intake from rice and rice products"
authors: [Xu L, Polya DA]
year: 2020
publication: "Environmental Geochemistry and Health"
doi: 10.1007/s10653-020-00573-8
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0007_2020_10-1007-s10653-020-00573-8.pdf"
raw_sha256: a30a8a69ecf79698d4f72c61800acb4dc59db8b9227109e0b7f947aedab0dbbc
access_url: "https://doi.org/10.1007/s10653-020-00573-8"
metals: [iAs]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice, cereal-grain, drinking-water, dietary-intake]
jurisdictions: [GB]
near_duplicates: []
sample_n: 598
sample_population: "598 UK residents aged ≥16 years drawn from the National Diet and Nutrition Survey Rolling Programme Years 7-8 (NDNS RP 7-8; fieldwork April 2014 to August 2016), a multistage random nationally representative sample across England, Wales, Northern Ireland, and Scotland; excluded from the 2723-person parent sample were pregnant or breastfeeding women (N=0), participants under 16 (N=1074), and participants with missing dietary, blood-pressure, or covariate data (N=1051); secondary analysis of publicly available anonymized NDNS data"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-28
---

# Xu & Polya 2020 — UK rice-iAs intake and hypertension association

This cross-sectional secondary analysis quantified daily inorganic-arsenic intake from rice and rice products (E-iAs_ing,rice) in 598 UK adults using the NDNS Rolling Programme Years 7-8 (April 2014 to August 2016) and examined associations with five blood-pressure endpoints (general hypertension, SBP add 10, DBP add 10, mean arterial pressure, mean pulse pressure) via generalized linear models adjusted for established hypertension risk factors. iAs intake was estimated by multiplying food-diary rice consumption by EFSA 2014 concentration estimates and applying a cooking-loss factor of 5% for not-ready-to-eat and 0% for ready-to-eat foods; iAs was not directly measured in the food samples participants consumed. The authors report a negative but statistically non-significant association between E-iAs_ing,rice and adjusted hypertension risks, with effect modification by sex, age, ethnicity, BMI, and alcohol consumption suggesting higher risks for male, middle-aged (35-49), overweight, alcohol-consuming, and Asian or Asian British, Black or Black British, and mixed ethnic subgroups. The authors characterize the study as exploratory and the overall association as weak and inconclusive due to cross-sectional design, modest sample size in stratified subgroups, and the use of EFSA literature-derived rather than directly measured iAs concentrations.

## Key numbers

Study population (N=598, Table 2):
- General hypertension (SBP ≥140 mmHg, or DBP ≥90 mmHg, or on anti-hypertensive medication): 178 (29.8%) yes; 420 (70.2%) no
- Sex: female 347 (58.0%), male 251 (42.0%)
- Mean SBP add 10: 127 mmHg (SD 19)
- Mean DBP add 10: 75 mmHg (SD 12)
- Mean arterial pressure (AP): 92 mmHg (SD 14)
- Mean pulse pressure (meanPulse): 69 mmHg (SD 11)
- Of the parent 2723 NDNS RP 7-8 sample, 245 participants were taking anti-hypertensive medications at interview; SBP and DBP for medicated participants were adjusted upward by 10 mmHg to define SBP add 10 and DBP add 10

Daily inorganic-arsenic intake estimates (E-iAs, µg/person/day; full study sample N=598):
- E-iAs_ing,rice: mean 2.81, SD 4.73, range 0 to 41.8
- E-iAs_ing,water (drinking water): mean 0.92 (whole sample); 1.02 ± 1.10 in non-hypertensive group, 0.74 ± 0.70 in hypertensive group (Table 2)
- E-iAs_ing,grain (grain and grain-based products): mean 2.83 (whole sample); 2.89 ± 1.47 in non-hypertensive group, 2.69 ± 1.32 in hypertensive group (Table 2)

Hypertension-stratified intake comparison (Table 2, Wilcoxon rank-sum):
- E-iAs_ing,rice: 2.17 (SD 3.65) µg/day in HT yes (N=178) vs 3.08 (SD 5.11) µg/day in HT no (N=420); p = 0.015
- E-iAs_ing,water: 0.74 (SD 0.70) µg/day in HT yes vs 1.02 (SD 1.10) µg/day in HT no; p < 0.001
- E-iAs_ing,grain: 2.69 (SD 1.32) µg/day in HT yes vs 2.89 (SD 1.47) µg/day in HT no; p = 0.100

E-iAs_ing,rice quartile cut-points (Table 3):
- Quartile 1: 0.00 to 0.00 µg/person/day (N=150; non-consumers within the food-diary window)
- Quartile 2: 0.00 to 0.565 µg/person/day (N=149)
- Quartile 3: 0.638 to 3.79 µg/person/day (N=149)
- Quartile 4: 3.79 to 41.8 µg/person/day (N=150)

Best-fitted GLM model comparisons with vs without E-iAs_ing,rice as a confounder (Table 6, AIC; lower is better; near-equality indicates E-iAs_ing,rice does not improve fit):
- DBP add 10: AIC 4570.8 with vs 4571.3 without
- SBP add 10: AIC 4999.0 with vs 5000.0 without
- AP: AIC 4648.7 with vs 4649.0 without
- meanPulse: AIC 4493.6 with vs 4491.6 without
- General hypertension odds-ratio model: AIC 565.5 with vs 564.1 without

Best-fitted (Model 4) continuous-measure adjusted odds ratios for an increase of 1 µg/person/day in E-iAs_ing,rice and ANOVA p-for-trend across the four intake quartiles (Tables 7-11, Model 4 row):
- DBP add 10: OR 0.99 (95% CI 0.99, 1.00); p value for trend 0.132
- SBP add 10: OR 0.99 (95% CI 0.99, 1.00); p value for trend 0.080
- AP: OR 0.99 (95% CI 0.99, 1.00); p value for trend 0.060
- meanPulse: OR 1.00 (95% CI 0.99, 1.00); p value for trend 0.913
- General hypertension odds ratio: OR 0.98 (95% CI 0.92, 1.03); p value for trend 0.413

For context, the crude (Model 1, univariate) trend p values for the same endpoints were 0.041, 0.019, 0.019, 0.661, and 0.023 respectively; trend significance attenuates substantially after full adjustment, consistent with the authors' overall negative-but-not-significant finding after adjustment for established confounders.

Best-fitted (Model 4) categorical-measure odds ratios for general hypertension by E-iAs_ing,rice quartile, referent Q1 (Table 11, Model 4 row, adjusted by age, BMI category, whgval, qual7, E-iAs_ing,grain, HessCon, region):
- Q2: OR 0.76 (95% CI 0.41, 1.28); p = 0.270
- Q3: OR 0.75 (95% CI 0.42, 1.34); p = 0.333
- Q4: OR 0.54 (95% CI 0.30, 0.98); p = 0.043

The Q4 OR of 0.54 (0.30, 0.98) is quoted in the Discussion (page 2531) verbatim as the Model 4 best-fitted value.

Individual-factor contribution to variability in hypertension (Table 4 General hypertension column, GLM contribution = 100 × null deviance minus residual deviance over null deviance):
- E-iAs_ing,rice contribution to general-hypertension odds-ratio model: 0.71%
- E-iAs_ing,water contribution: 1.60%
- E-iAs_ing,grain contribution: 0.35%
- Age contribution: 20.25% (the largest single contributor among the 28 modeled factors)
- whgval (waist-hip ratio) contribution: 10.26%
- bmival (BMI category) contribution: 5.85%
- HessCon (chronic physical or mental health condition for 12 months or more) contribution: 5.19%
- NumChild (number of children aged 0-15) contribution: 4.92%
- Diabetes.combined contribution: 3.08%

Two-way interactive effects (Table 5, RERI; positive RERI indicates synergy):
- Among all 28 confounders × E-iAs_ing,rice tested across five blood-pressure outcomes, the only significant interaction was SodiummgD × E-iAs_ing,rice on meanPulse (p = 0.025; RERI = -0.02; contribution 1.86%)

## Methods (brief)

This is a secondary analysis of the UK NDNS Rolling Programme Years 7-8 (April 2014 to August 2016), a nationally representative multistage random sample of UK residents aged 1.5 years and older (parent N=2723). Daily inorganic-arsenic intake from rice and rice products (E-iAs_ing,rice, µg/person/day) was estimated as:

E-iAs_ing,rice = Σ_i RC_i × C_rice,i × (1 - LOSS_cooking)

where RC_i is each participant's average daily consumption (kg/day) of rice product i from a 3- or 4-day food diary, C_rice,i is the iAs concentration (µg/kg) for product i drawn from EFSA 2014 (Scientific opinion on dietary exposure to inorganic arsenic in the European population, EFSA Journal 12:3597-3664), and LOSS_cooking is 5% for not-ready-to-eat products (per Mwale et al. 2018) and 0% for ready-to-eat products. Parallel formulae estimated E-iAs_ing,water from food-diary drinking-water consumption (Awata et al. 2017 / EFSA 2014 water concentrations) and E-iAs_ing,grain from grain and grain-based-product diary intake.

Inorganic arsenic concentrations in the foodstuffs participants actually consumed were not directly measured; the analysis is therefore an exposure model anchored to literature-derived rice and grain concentrations rather than a measurement study.

Blood pressure was measured via the standard NDNS protocol (Omron validated meter, three readings) by trained NDNS nurses; SBP add 10 and DBP add 10 add 10 mmHg if the participant was on anti-hypertensive medication (245/2723 NDNS RP 7-8 participants were on such medication at interview, per Rahman 2002). General hypertension was defined as SBP ≥ 140 mmHg, or DBP ≥ 90 mmHg, or use of anti-hypertensive medication. Mean arterial pressure was calculated as (SBP add 10 + 2 × DBP add 10) / 3; mean pulse pressure was the mean of the three valid pulse-pressure readings.

Generalized linear models with stepwise selection in both directions, minimizing Akaike's Information Criterion (AIC), identified the best-fitted parsimonious model for each of the five blood-pressure endpoints (DBP add 10, SBP add 10, AP, meanPulse, general hypertension). Univariate, full-confounder, AIC-screened (p<0.2 in univariate), and best-fitted models (Models 1-4) were compared; nonlinear terms were tested by including higher-order polynomial E-iAs_ing,rice. Two-way interactions between E-iAs_ing,rice and 28 potential confounders were tested via the relative excess risk for interaction (RERI) framework of Chen et al. 2011. Effect modification was explored in subgroups defined by sex, age, ethnicity, BMI, waist-hip ratio, smoking, alcohol consumption, diabetes, and UK region. Sensitivity analyses excluded anti-hypertension-medication users. Statistical computation used R 3.4.3.

The 598-person analytic sample reflects exclusion of pregnant and breastfeeding women (N=0), participants under 16 (N=1074), and 1051 participants with missing data on at least one of: SBP, DBP, AP, general hypertension, meanPulse, qualifications, ethnicity, equivalized household income, smoking, alcohol consumption, BMI, waist-hip ratio, diabetes status, or salt-use frequency. Authors note that included participants were more likely than excluded ones to be middle-aged, in employment, of higher household income, and resident in England (Table S2). Ethical clearance for the parent NDNS RP 7-8 study was obtained from the Cambridge South NRES Committee (Ref. No. 13/EE/0016); the present analysis required no further ethical approval because it used only publicly available anonymized data.

Authors name limitations: cross-sectional design precludes causal inference; iAs concentrations in consumed foodstuffs were estimated from EFSA 2014 rather than measured directly; food-diary periods of 3 or 4 days may not represent long-term dietary patterns; casual blood pressure measurement may not represent 24-hour blood-pressure patterns; residual confounding from physical activity, fatty acid intake, hypercholesterolemia, glucose concentration, salt consumption, history of pre-eclampsia, and arsenic-methylation genetic polymorphisms (AS3MT, M235T, CYP2J2*7) was not addressed; small sample size in some stratified subgroups (e.g., 8 mixed-ethnic and 14 Black or Black British participants) limits interpretation of subgroup heterogeneity.

## Implications

- Certification (HMTc): This study contributes UK-specific dietary-iAs exposure-assessment data for adults consuming rice and rice products, framed against an estimated mean of 2.81 µg/person/day E-iAs_ing,rice in a population where rice is not a daily staple but where consumption is increasing with demographic diversification. The wiki captures this exposure-distribution observation; it does not contribute new occurrence values for the [[ingredients/rice]] contamination_profile because rice and grain iAs concentrations were drawn from the EFSA 2014 review rather than measured. Threshold work for rice-based product categories should treat this paper as cross-sectional health-outcome context, not as occurrence evidence.
- Courses: A teachable case study for the inherent statistical-power and confounding limitations of secondary cross-sectional analyses of low-level dietary iAs exposure in non-staple-rice populations. Suitable for the regulatory-affairs and exposure-science audiences.
- App: No change to [[ingredients/rice]] iAs contamination_profile values because this paper does not measure rice iAs concentrations. The paper informs the population-level intake-distribution context for the UK consumer cohort but does not change ingredient-level concentration estimates.
- Microbiome: Not addressed.

## Provenance notes

Open access under Creative Commons Attribution 4.0 International (CC BY 4.0). PDF auto-fetched by the discover/wishlist pipeline (wl-0007 lineage) and held at `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0007_2020_10-1007-s10653-020-00573-8.pdf`. Online publication date 28 April 2020; volume-paginated 2021 in Environmental Geochemistry and Health 43:2505-2538. Author affiliation: Department of Earth and Environmental Sciences and Williamson Research Centre for Molecular Environmental Science, University of Manchester, UK.

## Verification notes

- Audit subagent (2026-05-28) flagged Table 4 misattribution of HessCon and Diabetes.combined contributions and Tables 7-11 mislabeling of Model 1 (crude) trend-p values as Model 4 (best-fitted). Independent verification against Tables 4 and 7-11 in the source PDF confirmed the misattribution; the audit's specific corrected values for the Model 4 trend-p (0.035, 0.006, 0.006, 0.207, 0.429) were also wrong — re-reading the Model 4 rows directly gave 0.132 (DBP add 10), 0.080 (SBP add 10), 0.060 (AP), 0.913 (meanPulse), and 0.413 (general hypertension). Applied the actual Model 4 values, not the audit's incorrect proposals. Categorical Model 4 ORs for general hypertension corrected from the Model 2 row values to the actual Model 4 row values (Q2 0.76, Q3 0.75, Q4 0.54), cross-checked against the Discussion paragraph on page 2531 which quotes the Model 4 categorical ORs verbatim.
- Audit subagent (2026-05-28) flagged matrices vocabulary (`cereal-grain`, `drinking-water`, `dietary-intake`) as not in the four-list taxonomy snapshot but unverifiable from the snapshot alone. Matrices vocabulary is controlled separately in the system-prompt list and includes all four (rice, cereal-grain, drinking-water, dietary-intake). No change required.

## Wiki pages this source may touch

- [[ingredients/rice]] (UK exposure-assessment context; no new occurrence values)
- [[metals/arsenic-inorganic]] (UK dietary-iAs intake distribution and health-outcome context)

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [b66d1a128](https://github.com/paleofoundation/heavymetalindex/commit/b66d1a128) | 2026-05-28 | major | 1 section added; narrative text revised |
| [3efdd1dae](https://github.com/paleofoundation/heavymetalindex/commit/3efdd1dae) | 2026-05-28 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
