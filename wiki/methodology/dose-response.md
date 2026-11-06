---
type: methodology
methodology_id: dose-response
title: "Dose-response assessment for dietary heavy metals"
dek: "Benchmark dose modeling, reference points, and margin of exposure calculations underpin the regulatory limits that govern heavy metals in food. This page describes the methods, their assumptions, and the reference values they produce for cadmium, inorganic arsenic, lead, and mercury."
description: "How regulators and risk assessors derive tolerable intakes and action levels for heavy metals in food using benchmark dose (BMD) modeling, NOAEL/LOAEL approaches, margin of exposure, and PBPK-informed extrapolation. Key BMDL reference points for cadmium, inorganic arsenic, lead, and organoarsenic species."
audience: [regulator, brand-legal, brand-qa, researcher, food-safety]
updated: 2026-11-06
sources: 11
status: living-document
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating methodology dose-response research context."
---

# Dose-response assessment for dietary heavy metals

## Overview

Dose-response assessment is the step in risk assessment that defines the quantitative relationship between the magnitude of exposure to a hazardous substance and the probability or severity of an adverse health effect. For heavy metals in food, the output of dose-response assessment is a reference point, a single number anchoring the boundary between exposures the evidence associates with tolerable risk and exposures associated with adverse outcomes. Regulatory limits, tolerable intakes, and margins of exposure all derive from these reference points.

Two broad families of method compete for this role. The older approach identifies a no-observed-adverse-effect level (NOAEL) or lowest-observed-adverse-effect level (LOAEL) from a dose-response study and applies uncertainty factors. The newer approach fits a mathematical model to the full dose-response curve and derives a benchmark dose (BMD) at a specified benchmark response (BMR), together with its lower confidence limit (BMDL). Since 2009, the European Food Safety Authority (EFSA) has used BMD modeling as the default for contaminants in food [[sources/efsa2024-inorganic-arsenic-update|1]], and the United States Environmental Protection Agency (US EPA) maintains dedicated software (BMDS) for the same purpose [[sources/desai2024-atsdr-simulation|2]].

This page synthesizes the dose-response methods and reference values reported in the deposited literature. It does not set or endorse any threshold; it reports what the cited studies and agency opinions derive.

## Benchmark dose modeling

Benchmark dose modeling fits a suite of mathematical dose-response functions to observed data and selects the model (or model-averaged result) that best describes the relationship between exposure and response. The BMD is the dose at which the fitted curve predicts a specified increase in response above background, expressed as the benchmark response (BMR). The BMDL is the lower bound of a one-sided 95% confidence interval on the BMD. Regulators use the BMDL as the point of departure for setting tolerable intakes or margins of exposure because it accounts for statistical uncertainty in the dose-response curve [[sources/efsa2024-inorganic-arsenic-update|1]] [[sources/satarug2025-cadmium-risk-assessment|3]].

The standard BMR for quantal (incidence) endpoints is a 5% or 10% extra risk above background (BMDL05 or BMDL10). For continuous endpoints such as urinary biomarker concentrations, the BMR is typically a 5% change in the mean response (BMDL05) or a one-standard-deviation shift [[sources/hayashi2024-urinary-cadmium-bmd|4]] [[sources/satarug2025-cadmium-risk-assessment|3]]. The choice of BMR directly affects the resulting reference point: a lower BMR yields a lower, more protective BMDL.

Model families commonly fitted include the exponential, Hill, inverse exponential, log-logistic, log-normal, log-probit, and Weibull functions. The European PROAST software, developed at RIVM, fits these families simultaneously and reports model-averaged BMD confidence intervals [[sources/satarug2025-cadmium-risk-assessment|3]]. The US EPA BMDS software and the Bayesian BMD (BBMD) tool offer comparable functionality with frequentist and Bayesian frameworks respectively [[sources/desai2024-atsdr-simulation|2]]. De Pretis and Lindgren (2025) extended the BMD framework to case-control study designs, deriving a closed-form relationship between the BMD on the odds-ratio scale and the BMD on the absolute-risk scale, enabling dose-response assessment from epidemiological data that do not directly estimate absolute risk [[sources/depretis2025-bmd-case-control|5]].

### Hybrid approach for continuous endpoints

Hayashi et al. (2024) applied an updated hybrid BMD approach to continuous renal biomarker data in a cadmium-exposed Japanese population. The hybrid method defines an abnormal response as a value exceeding a clinical cut-off (rather than a shift in the population mean) and estimates the dose at which 5% of the population crosses that cut-off. This approach is better suited to biomarkers with established clinical thresholds, such as beta-2-microglobulin for tubular proteinuria, than is a mean-shift BMR [[sources/hayashi2024-urinary-cadmium-bmd|4]].

### Simulation and PBPK integration

The Agency for Toxic Substances and Disease Registry (ATSDR) integrates physiologically based pharmacokinetic (PBPK) modeling with BMD analysis to extrapolate from animal bioassay data to human-equivalent doses and to translate between external dose metrics and internal biomarker concentrations. Desai et al. (2024) reviewed a decade of ATSDR simulation science and identified the PBPK-BMD coupling as essential for metals whose toxicokinetics differ markedly between species, including cadmium (renal half-life of 10 to 30 years in humans versus 60 to 90 days in rodents) and lead (bone-compartment dynamics) [[sources/desai2024-atsdr-simulation|2]].

## Cadmium: reference points and benchmark doses

Cadmium nephrotoxicity has been the primary endpoint for dose-response assessment since the metal's renal half-life in humans (10 to 30 years) makes the kidney the critical target organ at dietary exposure levels.

### Urinary cadmium as the dose metric

Most cadmium dose-response studies use urinary cadmium normalized to creatinine (micrograms cadmium per gram creatinine) as the internal dose metric, because urinary cadmium reflects cumulative body burden better than dietary intake estimates. The MAK Commission (2025) set a biological limit value (BLW) for occupational exposure at 2 micrograms cadmium per gram creatinine in urine, noting that recent occupational studies identified a NOEL and BMDL05 for tubular proteinuria at approximately 3 to 5 micrograms cadmium per gram creatinine in ever-smokers, with a higher threshold in never-smokers [[sources/mak2025-cadmium-addendum|6]].

### Renal tubular and glomerular BMDLs

Hayashi et al. (2024) estimated BMDLs of urinary cadmium for four renal effect markers at a BMR of 5% in residents of a cadmium-polluted area of Japan (Kakehashi River basin). For men, the BMDLs were 2.9 micrograms per gram creatinine for estimated glomerular filtration rate (eGFR), 1.8 micrograms per gram creatinine for beta-2-microglobulin, 1.8 micrograms per gram creatinine for tubular reabsorption of beta-2-microglobulin below 95%, and 3.6 micrograms per gram creatinine for tubular reabsorption below 90%. For women, the corresponding values were 3.5, 2.5, 2.6, and 3.9 micrograms per gram creatinine. The authors concluded that BMDLs for tubular effects (1.8 to 3.6 micrograms per gram creatinine) and glomerular effects (2.9 to 3.5 micrograms per gram creatinine) are not far above cadmium concentrations observed in the general population [[sources/hayashi2024-urinary-cadmium-bmd|4]].

### Cadmium and chronic kidney disease

Satarug (2025) reviewed the challenges of cadmium risk assessment and reported that a meta-analysis-derived BMDL05 for reduced eGFR in the general Thai population was 1.19 micrograms cadmium per gram creatinine, a value lower than the Hayashi et al. estimates from an occupationally or environmentally exposed Japanese cohort. The review noted that tolerable cadmium intake estimates vary across agencies: the Joint FAO/WHO Expert Committee on Food Additives (JECFA) set a tolerable monthly intake of 25 micrograms per kilogram body weight (equivalent to approximately 0.83 micrograms per kilogram body weight per day); EFSA set a tolerable weekly intake of 2.5 micrograms per kilogram body weight (approximately 0.36 micrograms per kilogram body weight per day); and the US Agency for Toxic Substances and Disease Registry set a minimal risk level of 0.1 micrograms per kilogram body weight per day for chronic oral exposure [[sources/satarug2025-cadmium-risk-assessment|3]].

### Dietary cadmium and rice standards

Chen et al. (2026) modeled the health risks of rice cadmium content standards in China using province-level dietary intake data from Jiangsu Province. The study derived a dietary cadmium BMDL05 of 17.1 micrograms per day for chronic kidney disease risk using BMD modeling of blood and urinary cadmium biomarkers. Under this threshold, 39% of rice cadmium content in the surveyed samples exceeded the level needed to keep daily cadmium intake below the BMDL05. Blood cadmium concentrations increased with age, and 48.4% of participants exceeded the BMDL05 for blood cadmium (0.640 micrograms per liter), while 20.6% exceeded the BMDL05 for urinary cadmium (0.120 micrograms per liter) [[sources/chen2026-rice-cadmium-china|7]].

Satarug (2025) additionally reported BMDLs for cadmium effects in animal studies: 0.67, 0.88, 1.00, and 3.08 milligrams cadmium per kilogram feed for retinol-binding protein, N-acetyl-beta-D-glucosaminidase, cadmium-metallothionein, and beta-2-microglobulin respectively [[sources/satarug2025-cadmium-risk-assessment|3]].

## Inorganic arsenic: reference points and benchmark doses

### EFSA 2024 update

EFSA updated its risk assessment of inorganic arsenic in food in 2024, replacing the earlier 2009 BMDL01 range of 0.3 to 8 micrograms inorganic arsenic per kilogram body weight per day for cancers of the skin, bladder, and lung. The 2024 opinion selected a BMDL05 of 0.06 micrograms inorganic arsenic per kilogram body weight per day as the reference point, derived from a study of skin cancer incidence at low-to-moderate exposure (defined as arsenic in drinking water below approximately 150 micrograms per liter, or biomarker concentrations estimated to result from equivalent doses). The BMDL05 corresponds to a 5% relative increase in skin cancer incidence above background after adjustment for confounders [[sources/efsa2024-inorganic-arsenic-update|1]].

Using this reference point, EFSA calculated margins of exposure for European dietary exposure to inorganic arsenic. Across age groups and dietary surveys, margins of exposure for average consumers ranged from 2 to 0.4 (median dietary exposure of 0.03 to 0.15 micrograms inorganic arsenic per kilogram body weight per day), and for high consumers (95th percentile) the margins were smaller still. EFSA concluded that there is a health concern for all age groups at current European dietary exposure levels [[sources/efsa2024-inorganic-arsenic-update|1]].

The 2024 opinion retained the earlier finding that inorganic arsenic may cause cancer of the skin, urinary bladder, and lungs, with BMDL01 values for these endpoints between 0.3 and 8 micrograms per kilogram body weight per day [[sources/efsa2024-inorganic-arsenic-update|1]].

### Organoarsenic species

EFSA assessed complex organoarsenic species in food separately in 2024. For arsenobetaine (the predominant arsenic species in seafood), the panel concluded that current dietary exposure does not raise a health concern. For glycerol arsenosugar (AsSugOH), the panel derived a reference point of 0.85 milligrams arsenic per kilogram body weight per day based on a BMDL10 for cognitive and motor function effects in mice. The highest 95th percentile dietary exposure to AsSugOH (in adult consumers of red seaweed nori and laver) was 0.71 micrograms arsenic per kilogram body weight per day, yielding a margin of exposure greater than 1000, which the panel judged not to raise a health concern [[sources/efsa2024-organoarsenic|8]].

The highest 95th percentile exposure for arsenobetaine was observed in toddlers at 12.5 micrograms arsenic per kilogram body weight per day [[sources/efsa2024-organoarsenic|8]].

## Lead: dose-response evidence

### Lead and hypertension

Yang et al. (2025) conducted a systematic review and dose-response meta-analysis of the relationship between lead exposure and hypertension. The pooled odds ratio across 36 eligible studies was 1.27 (95% confidence interval 1.20 to 1.34, I-squared 91.4%). Subgroup analysis by hypertension type found stronger associations for diastolic hypertension than for systolic hypertension [[sources/yang2025-lead-hypertension|9]].

The dose-response analysis identified a threshold at a blood lead concentration of 0.107 micrograms per deciliter, below which no statistically significant association with hypertension was observed. Above this threshold, the odds ratio increased sharply, reaching 4.85 at a blood lead concentration of 8.435 micrograms per deciliter. The authors recommended including blood lead in hypertension risk assessment and proposed a blood lead action level below 0.107 micrograms per deciliter for high-risk groups to reduce the hypertension burden from lead pollution [[sources/yang2025-lead-hypertension|9]].

The study demonstrated that the relationship between blood lead and hypertension is nonlinear, with the steepest dose-response gradient at low blood lead concentrations, which has implications for the protectiveness of dietary lead limits that aim to minimize population blood lead levels.

## Arsenic and subclinical endpoints

Bian et al. (2026) examined the relationship between arsenic species and lipid metabolism under low-to-moderate arsenic exposure using data from the US National Health and Nutrition Examination Survey (NHANES) and a Chinese adult cohort. The study found that associations between arsenic species and lipid parameters differed by exposure level and population. Under moderate drinking-water arsenic exposure (below 150 micrograms per liter), one prior study reported a positive association between urinary total arsenic and high-density lipoprotein cholesterol, a direction opposite to patterns seen at higher exposure levels. A systematic review cited in the paper indicated that associations between low-to-moderate drinking-water arsenic exposure (below 100 micrograms per liter) and cardiovascular outcomes remain heterogeneous across populations [[sources/bian2026-arsenic-lipids|10]].

These findings illustrate that dose-response relationships for arsenic are not necessarily monotonic across exposure ranges, and that the shape of the curve at low-to-moderate dietary exposure levels relevant to the food supply may differ from the shape observed in highly exposed populations used to derive current reference points.

## Statistical methods for metal mixtures

Dose-response assessment typically evaluates one metal at a time, but dietary exposure involves simultaneous intake of multiple metals. Yin et al. (2026) benchmarked statistical methods for environmental chemical mixtures, comparing prediction accuracy and interaction-detection performance across approaches including Bayesian kernel machine regression, quantile g-computation, and weighted quantile sum regression. In an applied analysis of metals, essential elements, and diabetes, the study found that no single method dominated across all evaluation criteria, and that methods optimized for detecting interactions among mixture components often traded off prediction accuracy [[sources/yin2026-mixture-statistics|11]].

For dose-response assessment at the regulatory level, the single-substance BMD approach remains dominant. The mixture-methods literature is relevant context for interpreting whether single-metal reference points adequately protect against combined exposures but has not yet been adopted into the reference-point derivation workflow by EFSA, JECFA, or the US EPA.

## Margin of exposure

The margin of exposure (MOE) is the ratio of the reference point (typically the BMDL) to the estimated dietary exposure. A large MOE indicates a wide buffer between actual exposure and the dose at which adverse effects are predicted; a small MOE indicates concern. There is no universally agreed safe MOE for genotoxic carcinogens, but the EFSA Scientific Committee has indicated that an MOE of 10,000 or greater based on a BMDL10 from an animal study, or an MOE of the same order based on a BMDL from a human study, would be of low concern [[sources/efsa2024-inorganic-arsenic-update|1]].

For inorganic arsenic, the 2024 EFSA opinion found that margins of exposure based on the BMDL05 of 0.06 micrograms inorganic arsenic per kilogram body weight per day were below 10 for median-exposure consumers in multiple age groups, indicating that current European dietary exposure to inorganic arsenic is a health concern [[sources/efsa2024-inorganic-arsenic-update|1]].

For the organoarsenic species AsSugOH, the MOE exceeded 1000 at the 95th percentile of exposure in the highest exposed group, which the EFSA panel judged not to raise a health concern [[sources/efsa2024-organoarsenic|8]].

## What remains uncertain

The BMDL for inorganic arsenic at low dietary exposure levels is highly sensitive to the choice of BMR, the epidemiological study population, the exposure metric, and the model-averaging strategy. EFSA's 2024 reference point of 0.06 micrograms per kilogram body weight per day is the most protective value derived by a major agency, but it rests on skin cancer data from populations with drinking-water arsenic exposure, not dietary food exposure. Whether dietary arsenic at the same total dose produces the same internal dose and target-organ concentration as waterborne arsenic is not resolved.

Cadmium BMDLs vary by endpoint, population, smoking status, and the form of dose metric (urinary cadmium vs dietary intake). The range from 1.19 to 3.6 micrograms cadmium per gram creatinine for renal effects spans a threefold range depending on the study, and general-population urinary cadmium concentrations overlap the lower end of this range in some surveys.

The nonlinear dose-response curve for lead and hypertension suggests that very low blood lead concentrations (below 0.107 micrograms per deciliter) may still carry risk not captured by the available meta-analytic data. The threshold identified by Yang et al. (2025) is below current US CDC blood lead reference values, but it derives from observational epidemiology with residual confounding.

Dose-response assessment for metal mixtures remains methodologically immature. No regulatory agency has adopted a mixture-based reference point for dietary heavy metals, and the interaction effects among cadmium, lead, arsenic, and mercury at food-relevant exposure levels are poorly characterized.

The organoarsenic reference points are based on animal data (mouse cognitive and motor endpoints for AsSugOH), and species extrapolation introduces uncertainty that the margin-of-exposure approach partially but not fully addresses.

## References

1. EFSA CONTAM Panel (2024). Update of the risk assessment of inorganic arsenic in food. *EFSA Journal*, 22(1):e8488. DOI: [10.2903/j.efsa.2024.8488](https://doi.org/10.2903/j.efsa.2024.8488). A-tier, peer-reviewed. [[sources/efsa2024-inorganic-arsenic-update]]
2. Desai S, Abualdenien A, Graziano J et al. (2024). The Role of Simulation Science in Public Health at the Agency for Toxic Substances and Disease Registry: An Overview and Analysis of the Last Decade. *Toxics*, 12(11):811. DOI: [10.3390/toxics12110811](https://doi.org/10.3390/toxics12110811). A-tier, peer-reviewed. [[sources/desai2024-atsdr-simulation]]
3. Satarug S (2025). Challenges in Toxicological Risk Assessment of Environmental Cadmium Exposure. *Toxics*, 13(5):404. DOI: [10.3390/toxics13050404](https://doi.org/10.3390/toxics13050404). A-tier, peer-reviewed. [[sources/satarug2025-cadmium-risk-assessment]]
4. Hayashi Y, Okubo Y, Nogawa K et al. (2024). Benchmark Dose of Urinary Cadmium for Assessing Renal Tubular and Glomerular Function in a Cadmium-Polluted Area of Japan. *Toxics*, 12(12):836. DOI: [10.3390/toxics12120836](https://doi.org/10.3390/toxics12120836). A-tier, peer-reviewed. [[sources/hayashi2024-urinary-cadmium-bmd]]
5. De Pretis F, Lindgren F (2025). Benchmark dose modeling for epidemiological dose-response assessment using case-control studies. *Risk Analysis*, 45(5). DOI: [10.1111/risa.17671](https://doi.org/10.1111/risa.17671). A-tier, peer-reviewed. [[sources/depretis2025-bmd-case-control]]
6. MAK Commission (2025). Cadmium and its inorganic compounds - Addendum: re-evaluation of the BLW. *The MAK Collection for Occupational Health and Safety*. DOI: [10.34865/bb744043e10_4ad](https://doi.org/10.34865/bb744043e10_4ad). A-tier, peer-reviewed. [[sources/mak2025-cadmium-addendum]]
7. Chen Y, Wang H, Xu J et al. (2026). Assessing the health risks of rice cadmium content standards in China. *Science Advances*, 12(8):eadw4382. DOI: [10.1126/sciadv.adw4382](https://doi.org/10.1126/sciadv.adw4382). A-tier, peer-reviewed. [[sources/chen2026-rice-cadmium-china]]
8. EFSA CONTAM Panel (2024). Risk assessment of complex organoarsenic species in food. *EFSA Journal*, 22(12):e9112. DOI: [10.2903/j.efsa.2024.9112](https://doi.org/10.2903/j.efsa.2024.9112). A-tier, peer-reviewed. [[sources/efsa2024-organoarsenic]]
9. Yang J, Li Y, Zhang X et al. (2025). Relationship between lead exposure and different types of hypertension: systematic review and dose-response meta-analysis. *Frontiers in Public Health*, 13:1706805. DOI: [10.3389/fpubh.2025.1706805](https://doi.org/10.3389/fpubh.2025.1706805). A-tier, peer-reviewed. [[sources/yang2025-lead-hypertension]]
10. Bian Y, Chen L, Wang Z et al. (2026). Arsenic species and lipid metabolism under low-to-moderate arsenic exposure: evidence from NHANES and a Chinese adult population. *Frontiers in Endocrinology*, 17:1919240. DOI: [10.3389/fendo.2026.1919240](https://doi.org/10.3389/fendo.2026.1919240). A-tier, peer-reviewed. [[sources/bian2026-arsenic-lipids]]
11. Yin X, Chen S, Liu J et al. (2026). Benchmarking Statistical Methods for Environmental Chemical Mixtures: Prediction, Interaction Detection, and an Applied Analysis of Metals, Essential Elements and Diabetes. *Stats*, 9(5):96. DOI: [10.3390/stats9050096](https://doi.org/10.3390/stats9050096). A-tier, peer-reviewed. [[sources/yin2026-mixture-statistics]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
<!-- END: hmi-page-history -->
