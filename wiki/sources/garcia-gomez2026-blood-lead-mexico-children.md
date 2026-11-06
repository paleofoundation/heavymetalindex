---
type: source
raw_handle: HMI-FILL-0091_10-3390-toxics14090744
cite_key: garcia-gomez2026-blood-lead-mexico-children
title: "Blood Lead Levels and Associated Sociodemographic and Occupational Factors in Children from Two Mexican Communities: A Comparative Study"
authors: [Garcia-Gomez J, Rodriguez-Aguirre O H, Ruiz-Romero J A, Scott-Lopez E H, Becerra-Iniguez E J, Espinel-Bermudez M C, Nava-Zavala A H, Aguilar-Lemarroy A, Sarralde-Delgado A, Jave-Suarez L F]
year: 2026
publication: "Toxics"
doi: 10.3390/toxics14090744
pmcid: PMC13611243
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/hmi-fill-0091/10.3390_toxics14090744.pdf
raw_sha256: 6d46334abdd294854c80bd05a6537f1e6ea6d03434db70a2cadf1d4b7266bc0a7
access_date: 2026-11-04
metals: [Pb]
ingredients: []
products: ["[[products/feeding-accessories-child-sized]]"]
matrices: [blood-lead, exposure-survey]
jurisdictions: [MX]
near_duplicates: []
sample_n: 874
sample_population: "874 children aged 0-15 years enrolled at two IMSS clinics in Jalisco, Mexico: UMF No. 93 in Tonala (n=500, traditional pottery-producing municipality) and UMF No. 171 in Zapopan (n=374, urban area without pottery tradition). Enrolled November 2024 through August 2025 (Tonala) and April 2023 through June 2024 (Zapopan)."
updated: 2026-11-05
---

# Garcia-Gomez et al. 2026 -- Blood lead levels in Mexican children, two communities

## Overview

Garcia-Gomez and colleagues enrolled 874 children aged 0 to 15 years at two IMSS clinics in Jalisco, Mexico, and measured blood lead levels by graphite-furnace atomic absorption spectrophotometry with ISO-accredited quality assurance. The study compares a pottery-producing city (Tonala, known for lead-glazed earthenware) with an urban city without pottery tradition (Zapopan). Counterintuitively, Zapopan children had a substantially higher geometric mean blood lead level (2.14 micrograms/dL) than Tonala children (1.22 micrograms/dL). Household use of lead-glazed earthenware (LGE) for cooking and food storage was independently associated with higher blood lead levels at Zapopan in every regression model. Younger children consistently had higher blood lead levels at both sites, consistent with hand-to-mouth behavior. This source is an exposure-pathway study, not a product concentration study. The LGE vessels measured in terms of blood lead impact are bowls, cups, and plates used to serve food to children, which are within the scope of child-sized feeding accessories.

## Key numbers

Blood lead levels by site (p. 4-5, Table 1 and text):

Tonala (n=500):
- Geometric mean BLL: 1.22 micrograms/dL
- Proportion with BLL greater than or equal to 1 micrograms/dL: 59.4%
- Proportion with BLL greater than or equal to 3.5 micrograms/dL (CDC reference value): 6.6%
- Proportion with BLL greater than or equal to 5 micrograms/dL: 3.2%
- Proportion below LOQ (0.82 micrograms/dL): 26.8%

Zapopan (n=374):
- Geometric mean BLL: 2.14 micrograms/dL (higher than pottery-producing Tonala, p less than 0.0001)
- Proportion with BLL greater than or equal to 1 micrograms/dL: 93.6%
- Proportion with BLL greater than or equal to 3.5 micrograms/dL: 16.3%
- Proportion with BLL greater than or equal to 5 micrograms/dL: 6.4%
- Proportion below LOQ: 2.9%

National context cited: ENSANUT survey estimated 21.8% of children aged 1 to 4 years in localities fewer than 100,000 residents had BLL greater than or equal to 5 micrograms/dL; national extrapolation 17.4% (approximately 1.4 million children aged 1 to 4 years).

LGE exposure association: household lead-glazed earthenware use for cooking and food storage was independently associated with higher BLL at Zapopan in every regression model. The specific regression coefficients are not tabulated here; see the paper's Tables 3 and 4.

Age effect: younger children had higher BLL at both sites in every model, consistent with greater hand-to-mouth activity and ingestion of contaminated dust or particles.

Blood lead measurement: graphite furnace AAS (iCE 3500 AA System, Thermo Fisher Scientific; lambda = 283.3 nm); 3 mL venous blood into EDTA tubes; LOD 0.25 micrograms/dL, LOQ 0.82 micrograms/dL; NOM-199-SSA1-2000 method; ISO 17034 and ISO/IEC 17025 QA; CRM: lyophilized human blood, nominal 52 micrograms/L (JRC, European Commission, ID 636), acceptance within 10%.

Regulatory benchmarks: CDC reference value 3.5 micrograms/dL (2021); Mexico NOM-199-SSA1-2000 action level 10 micrograms/dL (the paper recommends alignment with the more protective CDC standard).

## Methods (brief)

Comparative cross-sectional enrollment at two clinics. Blood lead by graphite-furnace AAS with ISO-accredited QA and certified reference material verification. Questionnaire covered household LGE use, parental occupational exposure, proximity (within 500 m) to environmental contamination sources, and sociodemographic variables. Statistical analysis in Python 3.13.3 (pandas, statsmodels); Mann-Whitney U, Pearson chi-square, and multivariable linear and logistic regression. Only lead was measured; other metals not in scope.

## Implications

Certification: This is the largest pediatric blood lead dataset in this evidence unit and directly documents LGE-associated lead exposure in children 0 to 15 years. The surprising finding that Zapopan (non-pottery city) had higher geometric mean BLL than Tonala (pottery city) underscores that LGE use in the household -- not proximity to manufacturing -- drives childhood exposure. Glazed ceramic bowls, cups, and plates used to serve food to children are the primary household exposure mechanism documented here.

Courses: The comparison of two cities with different industrial contexts, but similar or higher LGE use in the non-industrial city, is a compelling illustration of how consumer product exposure can exceed point-source environmental exposure.

App: Does not provide contamination_profile values. Supports a contextual signal for lead risk from glazed ceramic food service vessels used with children.

## Related evidence

- [[products/feeding-accessories-child-sized]]
- [[metals/lead]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| Initial | 2026-11-05 | major | Source page created for HMI-FILL-0091 |
<!-- END: hmi-page-history -->
