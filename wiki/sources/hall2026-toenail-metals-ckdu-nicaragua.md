---
type: source
raw_handle: PMC12889388
cite_key: hall2026-toenail-metals-ckdu-nicaragua
title: "Toenail metal concentrations and kidney health among young people at risk of chronic kidney disease of uncertain etiology"
authors: [Hall SM, Henn BC, Brown SV, Amador Velazquez JJ, Lopez MB, Amador Sanchez MR, Amador Sanchez JA, Yuan Y, Fimbres J, Rodgers KM, Jackson BP, Argos M, Carvalho L, Scammell MK, Friedman DJ, Brooks DR, Leibler JH]
year: 2026
publication: "Environmental Epidemiology 10: e461"
doi: 10.1097/ee9.0000000000000461
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "deposits/HMI-FILL-0052/10.1097_ee9.0000000000000461.pdf"
raw_sha256: 664375fef294a79ffbb5d7e208cb6039f821bb82d5859781df16919b79c7e3fc
access_url: https://doi.org/10.1097/ee9.0000000000000461
metals: [tAs, Cd, tHg, Ni, Pb, U]
ingredients: []
products: []
matrices: [biomonitoring-toenail]
jurisdictions: [NI]
near_duplicates: []
sample_n: 297
sample_population: "297 adolescents and young adults aged 14-31 years living in municipalities with high prevalence of chronic kidney disease of uncertain etiology (CKDu) in Nicaragua (Chichigalpa, La Paz Centro, Mina El Limon); data collected in 2023. Approximately 49% female; 19.2% worked in sugarcane or other high-risk agricultural industries."
wiki_doi: null
sampling_locations: [Chichigalpa NI, "La Paz Centro NI", "Mina El Limon NI"]
sampling_year_range: "2023"
updated: 2026-11-05
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating Hall and colleagues 2026 source research context."
---

# Hall et al. 2026 -- Ni and As in toenails associated with reduced eGFR in young Nicaraguan CKDu-region residents

This study measured toenail concentrations of six metals (total arsenic, cadmium, total mercury, nickel, lead, uranium) by inductively coupled plasma mass spectrometry (ICP-MS) in 297 young people aged 14-31 living in regions of Nicaragua with high chronic kidney disease of uncertain etiology (CKDu) prevalence. In multivariable linear regression, the middle tertile of toenail nickel was independently associated with an estimated glomerular filtration rate (eGFR) reduction of 6.92 ml/min/1.73 m2 (95% CI: -10.7, -3.12) relative to the lowest tertile, and the highest tertile of toenail arsenic was associated with an eGFR reduction of 4.25 ml/min/1.73 m2 (95% CI: -8.42, -0.07) relative to the lowest tertile. This study documents among the strongest metal-kidney associations reported to date in the context of CKDu.

## Key numbers

- Toenail concentrations (median, IQR, in micrograms per gram unless noted; Table 2):
  - tAs: 0.19 (IQR 0.14-0.27), mean (SD) 0.19 (1.69); 100% above LOD (LOD 0.003 microg/g)
  - Cd: 0.056 (0.030-0.33), mean 0.056 (0.33); 100% above LOD (LOD 0.056 microg/g)
  - tHg: 0.11 (0.22), mean 0.11; 100% above LOD (LOD 0.003 microg/g)
  - Ni: 11.7 (3.46-28.0), mean 61.1 (256); 100% above LOD (LOD 0.159 microg/g)
  - Pb: 0.56 (0.31-1.27), mean 0.56; 100% above LOD (LOD 0.003 microg/g)
  - U: 0.013 (0.010), mean 0.013; 100% above LOD (LOD 0.0002 microg/g)
- Kidney function: median eGFR 103 ml/min/1.73 m2 (IQR 74.4-133); 18.9% had eGFR 76-90 (n=56); 6.73% had eGFR below or equal to 75 ml/min/1.73 m2 (n=20).
- Regression results for eGFR, most parsimonious model (Model 3; bolded = statistically significant at alpha 0.05):
  - Ni middle tertile: -6.92 ml/min/1.73 m2 (95% CI: -10.7, -3.12)
  - Ni highest tertile: -2.93 (95% CI: -6.74, 0.87) -- non-significant
  - tAs highest tertile: -4.25 (95% CI: -8.42, -0.07)
  - Cd, tHg, Pb, U: not independently associated in Model 3
- Ni concentrations were strikingly elevated: median 11.7 microg/g, 29 times higher than a US adult women's cohort median (0.4 microg/g), 5 times higher than a Bangladeshi youth cohort median (2.76 microg/g), similar to nails from Chicago adolescents in an industrial corridor (median 13.4 microg/g, IQR 35.4).
- Bayesian kernel machine regression (BKMR) of full six-metal mixture did not find evidence of synergistic or higher-order interaction effects on eGFR.
- Spearman correlations between toenail metals: Pb-Cd r=0.49, Pb-As r=0.40, Ni-Hg r=0.11 (Figure 1).

## Methods (brief)

Cross-sectional study design; 297 participants from the Jovenes-Nica study recruited from agricultural laborers and agricultural workers in Chichigalpa, La Paz Centro, and Mina El Limon, Nicaragua in 2023. Toenails collected, cleaned with acetone rinse and deionized water, dried, digested in 2 mL concentrated aqua regia then diluted to 50 mL for ICP-MS analysis (Agilent 7800 ICP-MS). eGFR estimated using the Chronic Kidney Disease Improving Global Outcomes (CKD-EPI) 2021 equation. Statistical models: multivariable linear regression adjusted for sex, age, municipality, occupational risk; generalized additive models (GAMs) with restricted cubic splines to assess linearity; BKMR with 50,000 iterations for mixture analysis. All analyses in R 2024.12.1.

## Evidence fitness

This paper provides toenail biomonitoring data relevant to nickel and arsenic renal toxicity in an occupationally exposed young population. The findings are relevant to the wiki's coverage of nickel and arsenic health effects. The study does not measure metals in food, cosmetics, or consumer products. The CKDu context -- an ongoing epidemic in agricultural communities in Central America linked to heat stress, silica, and agrochemical exposures in addition to heavy metals -- means that metal exposure cannot be attributed solely to diet.

## Limitations

Cross-sectional design prevents causal inference. High nickel concentrations may reflect occupational exposure (sugarcane farming) rather than dietary intake. Arsenic sources in this population include both drinking water (from private wells) and dietary intake; the paper could not fully disentangle these pathways. The study population is young (14-31) and working-age, not generalizable to other populations.

## Related evidence

- [[health/biomonitoring]]
- [[metals/nickel]]
- [[metals/arsenic-total]]
- [[metals/lead]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
