---
type: source
raw_handle: MFK_11-ijerph-19-04159-2022
cite_key: bernard2022-anses-diaper-risk-reevaluation
title: "Dermal Exposure to Hazardous Chemicals in Baby Diapers: A Re-Evaluation of the Quantitative Health Risk Assessment Conducted by The French Agency for Food, Environmental and Occupational Health and Safety (ANSES)"
authors: ["Bernard, Alfred"]
year: 2022
publication: "International Journal of Environmental Research and Public Health 2022, 19(7), 4159. MDPI. Review article. Received 29 July 2021; accepted 25 September 2021; published 31 March 2022."
doi: 10.3390/ijerph19074159
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0 (Creative Commons Attribution 4.0 International). Open access."
raw_path: "raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_03_Diapers/03_Diapers/11_ijerph-19-04159_2022.pdf"
raw_sha256: e45478f7fffbeb2d3a1cea1ab69a5da57d7415812bd8deb665e2847d578080ec
access_url: https://doi.org/10.3390/ijerph19074159
metals: []
ingredients: []
products: ["[[products/diapers-and-components]]"]
matrices: [diaper]
jurisdictions: [FR, EU, CH, BE]
near_duplicates: ["[[anses2019-baby-diaper-safety-france]]", "[[bfr2019-diaper-substances-anses-commentary]]"]
sample_n: 0
sample_population: "Re-evaluation/critique paper; no primary measurements. Bernard re-analyses the chemical concentration data, exposure assumptions and risk calculations published in the January 2019 ANSES opinion 'Sécurité des couches pour bébé' (see [[anses2019-baby-diaper-safety-france]] for the underlying 23-product sampling frame and methods). The author's critique is built on (i) substitution of ANSES's worst-case exposure parameters with ANSES's own refined-scenario values (skin transfer T = 7% and rewet factor R = 1.32%, both presented as ANSES refinements without separate primary-source citations in Bernard's text) and further substitution of R = 1% (EDANA-recommended) characterised as conservative relative to Dey et al. 2016's measured mean of 0.46%, (ii) recomputation of hazard quotients and excess cancer risks under EDANA scenario 2.1 with R = 1%, (iii) comparison of intakes from diapers with intakes from breast milk for PCDD/Fs, DL-PCBs and PAHs using French breast-milk concentrations of Focant et al. 2013 adjusted to 2017 per a Swedish 10%/yr decline rate (Fång et al. 2013), and (iv) cross-checking ANSES concentrations against a 2019 Swiss Federal Food Safety and Veterinary Office (FSVO) PAH survey of five diaper brands. Funded by EDANA (International Disposables and Nonwovens Association, the diaper industry trade association). The author is Honorary Research Director at the Belgian National Fund for Scientific Research, affiliated with the Institut de Recherche Expérimentale et Clinique (IREC), Université catholique de Louvain, Brussels."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-01
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
hero_image: /static/heroes/diapers-plain-folded.webp
hero_image_alt: "Plain disposable diapers with simple fastening tabs illustrating Bernard 2022 diaper dermal assessment research context."
---

# Bernard 2022 — Dermal exposure to hazardous chemicals in baby diapers: an EDANA-funded re-evaluation of the ANSES 2019 risk assessment

## Overview

This is a single-author peer-reviewed review article by Alfred Bernard (IREC, UCLouvain, Brussels) published in MDPI's *International Journal of Environmental Research and Public Health* in March 2022 and funded by the International Disposables and Nonwovens Association (EDANA), the European diaper-industry trade association. The paper is a methodological critique of the quantitative health risk assessment (QHRA) reported in the January 2019 ANSES opinion *Sécurité des couches pour bébé* ([[anses2019-baby-diaper-safety-france]]) and the October 2020 ANSES Annex XV restriction dossier to ECHA. Bernard argues that ANSES's exceedances of health reference values for polycyclic aromatic hydrocarbons (PAHs, hazard quotients up to 66 and excess cancer risk up to 10⁻³), dioxins (PCDD/Fs), dioxin-like polychlorinated biphenyls (DL-PCBs, hazard quotient 12 for decreased adult sperm count), formaldehyde and several fragrances are products of (i) overconservative exposure assumptions (skin transfer T = 100% instead of ANSES's own refined 7%; rewet factor R = 100% instead of ANSES's refined 1.32% or the EDANA-recommended 1%, which Bernard characterises as conservative relative to Dey et al. 2016's measured mean of 0.46%; dermal absorption A = 100% retained even for substances known to be poorly absorbed), (ii) PAH concentrations of LOQ/2 (limits of quantification 150 µg/kg) that are two orders of magnitude above the LOQs of methods used for PAHs in foodstuffs (EFSA 2008), and (iii) "illogical and atypical" PCDD/F vs DL-PCB congener patterns under different extraction modes. Bernard's recomputations under scenario 2.1 with R = 1% drop all dioxin/DL-PCB hazard quotients below 1 and bring PAH cancer risks closer to acceptable bands, and his breast-milk-vs-diaper intake ratios (74.8 to 626 times more from breast milk under different scenarios) are presented as evidence that dietary background dose dwarfs the modelled dermal dose. **Heavy metals are not discussed, not measured, and not assessed at any point in this paper.** This page is ingested as out-of-core-scope regulatory-context evidence for the diapers product page — it documents the industry-funded peer-reviewed counter-position to the ANSES 2019 / 2020 regulatory case, providing methodological context (the contested skin-transfer and rewet-factor parameters; the LOQ-as-surrogate-concentration concern; the breast-milk-intake comparator) that any future heavy-metals dermal-exposure model in this product category will have to engage with — alongside its sibling ingest pages [[anses2019-baby-diaper-safety-france]] (the regulatory opinion being critiqued) and [[bfr2019-diaper-substances-anses-commentary]] (the BfR's earlier preliminary commentary on the same ANSES opinion).

## Key numbers

The paper presents no original measurements. All concentration values are reproduced from the ANSES 2019 opinion ([[anses2019-baby-diaper-safety-france]]) or its underlying SCL / INC test data. Bernard's re-analyses change only the exposure parameters (T, R) applied to ANSES's concentrations.

### Dioxins and DL-PCBs — Table 2 (p. 5), ANSES scenarios as published

Concentrations in diapers under three ANSES extraction scenarios (pg TEQ/kg of diaper, WHO 2005 TEF values; intakes computed for an infant aged 0-6 months at 3.9 kg body weight using 7.98 diapers/day at 24 g/diaper; EFSA TDI 0.3 pg TEQ/kg/d; breast-milk intake computed for a 5 kg infant fed 700 mL/day of milk containing 25 g/L lipids, using Focant et al. 2013 French breast-milk data declined annually 10% to 2017 per Fång et al. 2013):

| ANSES extraction scenario | Compound | Concentration (pg TEQ/kg) | Intake from diapers (pg TEQ/kg/d) | Hazard quotient | Intake from breast milk (pg TEQ/kg/d) | Breast milk / diaper intake ratio |
|---|---|---|---|---|---|---|
| Scenario 1 (organic solvent, shredded diapers) | PCDD/Fs | 39.8 | 0.14 | 0.47 | 12.2 | 87.1 |
| Scenario 1 | DL-PCBs | 43.4 | 0.15 | 0.49 | 9.55 | 63.7 |
| Scenario 1 | PCDD/Fs + DL-PCBs | 83.2 | 0.29 | 0.96 | 21.7 | 74.8 |
| Scenario 2.1 (synthetic urine, shredded diapers) | PCDD/Fs | 92.0 | 0.0596 | 0.20 | 12.2 | 205 |
| Scenario 2.1 | DL-PCBs | 7.55 | 0.0049 | 0.02 | 9.55 | 1.953 |
| Scenario 2.1 | PCDD/Fs + DL-PCBs | 99.6 | 0.0645 | 0.22 | 21.7 | 336 |
| Scenario 2.2 (synthetic urine, whole diapers) | PCDD/Fs | 8.84 | 0.43 | 1.45 | 12.2 | 28.4 |
| Scenario 2.2 | DL-PCBs | 63.6 | 3.12 | 10.4 | 9.55 | 3.06 |
| Scenario 2.2 | PCDD/Fs + DL-PCBs | 72.4 | 3.55 | 11.9 | 21.8 | 6.14 |

Bernard's narrative finding (p. 5): in organic-solvent extracts, PCDD/Fs and DL-PCBs contribute almost equally to total TEQ (frequent pattern in environmental matrices, citing Strapácová et al. 2018). In urine-simulant extracts, DL-PCBs account for ~90% of total TEQ in whole diapers but only ~10% in shredded diapers. The inversion under the same extraction conditions is characterised as "illogical and atypical" (p. 5).

### Dioxins and DL-PCBs — Table 3 (p. 7), Bernard's re-evaluation under scenario 2.1 with R = 1%

Bernard recomputes intakes by applying the scenario 2.1 equation (DI = C × W × N × R × A / Bw) with R = 1% (EDANA-recommended; conservative vs. Dey et al. 2016's 0.46% mean range 0.32-0.66%) and A = 100% (retained from ANSES for lipophilic substances):

| ANSES extraction scenario | Compound | Concentration (pg TEQ/kg) | Intake from diapers (pg TEQ/kg/d) | Hazard quotient | Breast milk / diaper intake ratio |
|---|---|---|---|---|---|
| Scenario 1 | PCDD/Fs | 39.8 | 0.020 | 0.065 | 626 |
| Scenario 1 | DL-PCBs | 43.4 | 0.021 | 0.070 | 448 |
| Scenario 1 | PCDD/Fs + DL-PCBs | 83.2 | 0.041 | 0.135 | 531 |
| Scenario 2.1 | PCDD/Fs | 92.0 | 0.045 | 0.152 | 270 |
| Scenario 2.1 | DL-PCBs | 7.55 | 0.0037 | 0.012 | 2.574 |
| Scenario 2.1 | PCDD/Fs + DL-PCBs | 99.6 | 0.049 | 0.163 | 444 |
| Scenario 2.2 | PCDD/Fs | 8.84 | 0.0043 | 0.014 | 2.811 |
| Scenario 2.2 | DL-PCBs | 63.6 | 0.031 | 0.105 | 306 |
| Scenario 2.2 | PCDD/Fs + DL-PCBs | 72.4 | 0.036 | 0.119 | 612 |

Under R = 1%, every HQ falls below 1.

### PAHs — Table 4 (p. 9), ANSES scenario 2.2 as published

Concentrations in diapers extracted from whole diapers with synthetic urine (ANSES scenario 2.2). Intakes calculated for an infant aged 0-6 months (body weight 3.9 kg; 7.98 diapers/day; diaper weight 24 g) assuming fractional dermal and oral absorption of 100%. TEF values per INERIS 2003. EPA oral RfD for benzo[a]pyrene 0.3 µg/kg/d. EPA oral CSF 1 (mg/kg/d)⁻¹. Breast-milk intake for a 5 kg infant fed 700 mL/d of milk with 25 g/L lipids, per Santonicola et al. 2017:

| PAH | Concentration (µg/kg) | Intake from diapers (µg/kg/d) | TEF | Intake from diapers (µg TEQ/kg/d) | EPA oral RfD (µg/kg/d) | Hazard quotient | EPA oral CSF (mg/kg/d)⁻¹ | Excess cancer risk | Intake from breast milk (µg/kg/d) | Breast milk / diaper intake ratio |
|---|---|---|---|---|---|---|---|---|---|---|
| Cyclopenta[c,d]pyrene | 311 | 15.3 | 0.1 | 1.53 | 0.3 | 5.51 | 1 | 1.09 × 10⁻⁴ | — | — |
| Chrysene | 249 | 12.2 | 0.01 | 0.12 | 0.3 | 0.41 | 1 | 8.76 × 10⁻⁶ | 0.12 | 9.8 × 10⁻³ |
| 5-methylchrysene | 311 | 15.3 | 0.01 | 0.15 | 0.3 | — | 1 | 1.09 × 10⁻⁴ | — | — |
| Benzo[b]fluoranthene | 381 | 18.7 | 0.1 | 1.87 | 0.3 | 6.24 | 1 | 1.34 × 10⁻⁴ | 0.11 | 5.9 × 10⁻³ |
| Benzo[k]fluoranthene | 369 | 18.1 | 0.1 | 1.81 | 0.3 | 6.03 | 1 | 1.29 × 10⁻⁴ | 0.88 | 4.9 × 10⁻² |
| Benzo[j]fluoranthene | 369 | 18.1 | 0.1 | 1.81 | 0.3 | 6.03 | 1 | 1.29 × 10⁻⁴ | — | — |
| Benzo[e]pyrene | 598 | 29.4 | 0.01 | 0.29 | — | 0.98 | — | 2.10 × 10⁻⁵ | — | — |
| Benzo[a]pyrene | 405 | 19.9 | 1 | 19.9 | 0.3 | 66.3 | 1 | 1.42 × 10⁻³ | 0.11 | 5.5 × 10⁻³ |
| Dibenzo[a,h]anthracene | 311 | 15.3 | 1 | 15.3 | 0.3 | 51.0 | 1 | 1.09 × 10⁻³ | 0.61 | 4.0 × 10⁻³ |
| Benzo[g,h,i]perylene | 418 | 20.5 | 0.01 | 0.21 | — | 0.68 | — | 1.47 × 10⁻⁵ | — | — |
| Σ PAHs (10 in table) | 3,722 (sum µg/kg) | 182 | — | 33.8 | — | 113 | — | 2.41 × 10⁻³ | 2.56 | 1.4 × 10⁻² |
| Σ 8 PAHs (PAH8, carcinogenic per EFSA) | 2,133 | 104 | — | — | — | — | — | — | 2.56 | 2.5 × 10⁻² |
| Σ 4 PAHs (PAH4, EFSA) | 1,035 | 50.8 | — | — | — | — | — | — | 0.34 | 6.7 × 10⁻³ |

PAH concentrations of 249-598 µg/kg correspond to LOQ/2 of an analytical method with LOQs > 150 µg/kg per individual PAH (p. 9). This is "two orders of magnitude higher than the LODs of methods recommended to measure PAHs in foodstuffs" (EFSA 2008, ref. 14). The atypical concentration pattern showing little variation between individual PAHs (whereas environmental or biological matrices typically vary by factors of 10-100) is characterised as a methodological artefact of the LOQ/2 surrogate. Bernard notes (p. 9) that ANSES's proposed concentration limit for benzo[a]pyrene of 2.7 ng TEQ/kg diaper is "five orders of magnitude lower than the LOD of the analytical method used in the ANSES risk assessment."

### PAHs — Table 5 (p. 11), Bernard's re-evaluation under scenario 2.1 with R = 1%

Same column structure as Table 4 above. Intake from diapers recomputed with the scenario 2.1 equation incorporating R = 1%. Selected high-end values:

- Benzo[a]pyrene: intake from diapers 0.20 µg/kg/d; HQ 0.67; ECR 1.42 × 10⁻⁵; breast-milk/diaper ratio 0.55.
- Dibenzo[a,h]anthracene: intake from diapers 0.15 µg/kg/d; HQ 0.50; ECR 1.09 × 10⁻⁵; breast-milk/diaper ratio 4.07.
- Σ PAHs (10 in table): intake from diapers 1.82 µg/kg/d; intake from diapers as TEQ 0.34 µg TEQ/kg/d; HQ 1.13; ECR 2.41 × 10⁻⁵; breast-milk/diaper ratio 1.41.
- Σ 8 PAHs (PAH8): 1.05 µg/kg/d from diapers vs 2.56 µg/kg/d from breast milk (ratio 2.44).
- Σ 4 PAHs (PAH4, EFSA): 0.51 µg/kg/d from diapers vs 0.34 µg/kg/d from breast milk (ratio 0.67).

Under R = 1%, ΣPAHs HQ falls from 113 to 1.13 (two orders of magnitude lower); benzo[a]pyrene HQ falls from 66.3 to 0.67; cancer risks fall from the 10⁻³ to the 10⁻⁵ band.

### PAHs — Table 6 (p. 12), skin cancer risks via dermal CSF

Dermal cancer slope factor 3.5 (µg/cm²/d)⁻¹ from Knafla et al. 2011 (ref. 11); skin contact area 234 cm² from Boniol et al. 2008 / EPA 2011 Exposure Factors Handbook (refs. 12, 13). Under ANSES scenario 2.2 equation: BaP excess skin cancer risk 8.28 × 10⁻². Under scenario 2.1 with R = 1%: BaP excess skin cancer risk 8.28 × 10⁻⁴. Σ PAHs (sum of all 10 PAHs listed in Table 6) skin cancer risk under scenario 2.1 + R = 1% is 1.79 × 10⁻³. "Even when incorporating the rewet factor of 1%, these estimates are even higher than those based on the oral CSF" (p. 11). Bernard's framing (p. 11): the dermal CSF assumes PAHs cause skin tumours, which is the route-of-administration-appropriate critical effect per animal lifetime bioassays; the oral CSF assumes systemic carcinogenicity, which animal evidence "strongly challenged" for dermally absorbed PAHs.

### PAHs — Table 7 (p. 12), margin of exposure (MOE)

EFSA MOE approach for food-product PAH risk assessment. BMDL10 values from EFSA 2008 (ref. 14); intake from diapers from ANSES scenario 2.2. Bernard reports MOEs under scenario 2.2 and under scenario 2.1 with R = 1%:

| PAH | Intake from diapers (µg/kg/d), scenario 2.2 | BMDL10 (mg/kg/d) | MOE (scenario 2.2) | MOE (scenario 2.1, R = 1%) |
|---|---|---|---|---|
| Benzo[a]pyrene | 19.9 | 0.07 | 3.52 | 352 |
| Σ 4 PAHs (PAH4) | 50.8 | 0.34 | 6.69 | 669 |
| Σ 8 PAHs (PAH8) | 104 | 0.49 | 4.71 | 471 |

EFSA acceptable MOE is 10,000. Bernard's framing (p. 12): even under R = 1%, the MOEs of 352, 471 and 669 are "largely below the acceptable levels," and this cannot be explained by the TEF approach alone (which EFSA considers scientifically invalid for oral PAH carcinogenicity due to lack of data on individual PAHs). The combined effect of an "overconservative scenario 2.2" and LOQ/2 surrogate concentrations from an inadequate analytical method are the proposed explanation. The 2019 Swiss Federal Food Safety and Veterinary Office survey (ref. 33, Dudler 2021 personal communication) is cited as suggesting ANSES PAH concentrations were overestimated by 2-3 orders of magnitude.

### Other compounds at potentially unsafe levels per ANSES — Table 8 (p. 14)

ANSES scenario 1 (organic solvent extraction from shredded diapers) for an infant 0-6 months. Formaldehyde additionally quantified under scenario 2.2 in synthetic urine. 1,2,3-trichlorobenzene, coumarin, limonene, benzyl salicylate, HICC (Lyral®), BPMP (Lilial®), alpha-isomethyl ionone and formaldehyde reported at 25 mg/kg (= LOQ/2 for the fragrances) or specifically quantified for formaldehyde (37.4 mg/kg). Bernard's HQs (with ANSES assumption of 100% dermal absorption):

| Compound | Concentration (mg/kg) | Intake (mg/kg/d) | TDI (mg/kg/d) | Hazard Quotient | NOAEL (mg/kg/d) | MOE | MOEref | MOEref / MOE |
|---|---|---|---|---|---|---|---|---|
| 1,2,3 trichlorobenzene | 0.25 | 8.59 × 10⁻⁴ | 8 × 10⁻³ | 0.107 | — | — | — | — |
| Coumarin | 25 | 8.59 × 10⁻² | 0.1 | 0.86 | — | — | — | — |
| Limonene | 25 | 8.59 × 10⁻² | 0.1 | 0.86 | — | — | — | — |
| Benzyl salicylate | 25 | 8.59 × 10⁻² | — | — | 50 | 582 | 100 | 0.17 |
| HICC (Lyral®) | 25 | 8.59 × 10⁻² | — | — | 15 | 175 | 300 | 1.71 |
| BPMP (Lilial®) | 25 | 8.59 × 10⁻² | — | — | 5 | 58.2 | 100 | 1.72 |
| Alpha-isomethyl ionone | 25 | 8.59 × 10⁻² | — | — | 50 | 582 | 100 | 0.17 |
| Formaldehyde (scenario 1) | 37.4 | 0.13 | 0.15 | 0.86 | — | — | — | — |
| Formaldehyde (scenario 2.2, synthetic urine) | 2.75 | 0.135 | 0.15 | 0.90 | — | — | — | — |

### Other compounds — Table 9 (p. 15), Bernard's re-evaluation accounting for fractional dermal/oral absorption

Bernard substitutes ANSES's 100% dermal absorption with literature-derived percentages for each fragrance (limonene 0.16% per Api et al. 2013; benzyl salicylate 0.031% per Belsito et al. 2007; HICC 14.3% per SCCS 2017 Lyral opinion; BPMP 5.1% per SCCS 2019 Lilial opinion; formaldehyde 0.5% per ATSDR 1999 / SCCS 2014 / Jeffcoat et al. 1983; alpha-isomethyl ionone 100% retained), and adjusts oral NOAELs/TDIs for fractional oral absorption (50% for HICC, BPMP, alpha-isomethyl ionone; 100% for others). Selected values:

- HICC: intake 1.23 × 10⁻² mg/kg/d; MOE 610; MOEref 300; MOEref/MOE 0.49.
- BPMP: intake 4.4 × 10⁻⁴ mg/kg/d; MOE 568; MOEref 100; MOEref/MOE 0.18.
- Alpha-isomethyl ionone: intake 8.59 × 10⁻² mg/kg/d; MOE 291; MOEref 100; MOEref/MOE 0.34.
- Formaldehyde (scenario 1): intake 0.65 × 10⁻³ mg/kg/d; HQ 0.87 × 10⁻² (i.e. ~0.009).
- Limonene: HQ 1.37 × 10⁻³.
- Benzyl salicylate: MOE 1.85 × 10⁶; MOEref/MOE 5.4 × 10⁻⁵.

Under fractional-absorption recomputation, HQ values are largely below 0.1 for limonene and formaldehyde; benzyl salicylate MOE > 10,000. HICC and BPMP retain MOEref/MOE values between 0.1 and 1 (which Bernard notes ANSES might still characterise as "potentially insufficient" protection).

### Breast-milk vs diaper intake comparisons — narrative (p. 8, p. 13)

- Under scenario 1 (ANSES): total TEQ from breast milk is 74.8 times the total TEQ from diapers; under scenario 2.1, 336 times; under scenario 2.2, 6.1 times (Table 2 last column).
- Under Bernard's scenario 2.1 + R = 1%: total TEQ intake from breast milk is more than 400 times the total TEQ intake from diapers (Table 3).
- ANSES's restriction-proposal concentration limit for total TEQ in diapers (0.7 pg TEQ/kg diaper) is 171-342 times lower than concentrations in human milk in nine European countries 2014-2015 (range 120-240 pg TEQ/kg per ref. 15) (p. 8).
- For PAHs under R = 1%: ΣPAHs intake from diapers (Table 5) is "rather similar" to intake from breast milk; under Swiss-revised PAH concentrations (Swiss 2019 survey, 2-3 orders of magnitude lower than ANSES), intake from mother milk would be > 100 times greater than from diapers.

### Reference age-class exposure parameters used (p. 3, p. 5, p. 9)

- Body weight: 3.9 kg (infant aged 0-6 months, per ANSES selection, ref. 7).
- Diapers per day: 7.98 (infant aged 0-6 months, per ANSES).
- Diaper weight: 0.024 kg = 24 g (infant aged 0-6 months, per ANSES).
- Refined scenario 1: T = 7% (ANSES's refined-scenario T value; Bernard adopts ANSES's refinement without an external citation in this paper. The Odio et al. 2000 attribution that appears in the underlying ANSES 2019 opinion Table 1 — see [[anses2019-baby-diaper-safety-france]] — is not carried into Bernard 2022's text).
- Refined scenario 2.1: R = 1.32% is ANSES's refined-scenario value (not Dey's mean). Bernard substitutes R = 1% (EDANA-recommended per ref. 6) and characterises this as conservative relative to Dey et al. 2016 (ref. 4), in which urine-resurfacing-to-top-sheet under pressure averaged 0.46% with a range of 0.32-0.66%.
- Dermal absorption: 100% retained for PAHs, dioxins, DL-PCBs (lipophilic substances), per ANSES; revised to in vivo/in vitro values for substances known to be poorly absorbed (Table 9).
- Skin surface area in contact with diaper for dermal CSF computation: 234 cm² (Boniol et al. 2008 / EPA 2011, refs. 12, 13).

### Critical-effect endpoints (Table 1, p. 4)

- PCDD/Fs and DL-PCBs: reduced sperm count at adult age in humans (used by ANSES, EFSA TDI 0.3 pg TEQ/kg/d) and/or non-cancer systemic effects (used by EPA, RfD 0.7 pg/kg/d for TCDD).
- PAHs: digestive tract tumours in mice (EPA oral CSF 1 (mg/kg/d)⁻¹), neurobehavioural changes in rats exposed during early life (EPA oral RfD 0.3 µg/kg/d), skin cancers in rats (Knafla et al. 2011 dermal CSF 3.5 (µg/cm²/d)⁻¹).
- Other compounds: systemic effects in animals (hepatotoxicity, nephrotoxicity, etc.).

**Heavy metals: not addressed in this paper at any point.** Bernard's re-evaluation is restricted to the substance classes for which ANSES reported HRV exceedances in 2019 (PAHs, PCDD/Fs, DL-PCBs, fragrances, formaldehyde). No metal is named in the introduction, methods, dioxin section (§3), PAH section (§4), other-compounds section (§5), conclusions (§6), or references. See Verification notes.

## Methods (brief)

- **Document type.** Peer-reviewed review article (designated "Review" in the journal masthead, p. 1). Single-author. Academic editor Edward F. Fitzgerald.
- **Source data.** Concentration values, exposure parameters and risk-assessment outputs all reproduced from the ANSES 2019 opinion (ref. 7) and the October 2020 ANSES Annex XV restriction dossier to ECHA (ref. 8). No primary chemical analyses were performed for this re-evaluation.
- **Exposure equations (p. 2).** Bernard reproduces the three ANSES daily-intake (DI) equations: scenario 1 (organic-solvent extraction from shredded diapers or shredded diaper parts) DI = C × W × N × T × A / Bw; scenario 2.1 (synthetic-urine extraction from shredded diapers) DI = C × W × N × R × A / Bw; scenario 2.2 (synthetic-urine extraction from whole diapers) DI = C × W × N × A / Bw; where DI is daily intake, C concentration in diaper, W weight of diaper, N number of diapers used per day, T fraction transferred to skin (%), R rewet factor (%), A fraction absorbed by skin (%), Bw body weight. Bernard's re-evaluations apply T = 7% (ANSES's refined value; Bernard uses but does not separately cite a primary source for the 7% in this paper) and R = 1% (EDANA-recommended per ref. 6; characterised by Bernard as conservative relative to Dey et al. 2016's measured mean of 0.46% with range 0.32-0.66%).
- **Risk-assessment equations (p. 3).** For threshold effects: HQ = D / TDI where D is daily intake and TDI tolerable daily intake (both in pg, µg or mg/kg body weight). For no-threshold (carcinogenic) effects assumed by ANSES for PAHs: ECR = DI × CSF × T × ADAF / 70 where ECR is excess cancer risk, DI daily intake in µg/kg/d, CSF cancer slope factor in (µg/kg/d)⁻¹, T duration of exposure (years), 70 the conventional lifetime duration, and ADAF age-dependent adjustment factor (default 10 for children < 2 years; 3 for age 2-< 16 years per ref. 10 EPA 2017 benzo[a]pyrene tox profile).
- **Comparator: breast-milk intake.** For dioxin/DL-PCB intake from breast milk: French breast-milk concentrations of Focant et al. 2013 (ref. 16) adjusted to 2017 by 10%/yr decline (Fång et al. 2013, ref. 17); 5 kg infant body weight, 700 mL/d milk, 25 g/L lipids. For PAHs from breast milk: Santonicola et al. 2017 (ref. 32) data, same 5 kg / 700 mL / 25 g/L assumptions.
- **Comparator: Swiss FSVO 2019 PAH survey.** Cited as personal communication from V. Dudler, FSVO Bern, 2021 (ref. 33). Five brands of diapers; absorbent-core PAHs < 0.15 to 4.6 µg/kg; benzo[a]pyrene and dibenzo[a,h]anthracene specifically < 0.12 to 1.4 µg/kg. "2-3 orders of magnitude lower than those at the basis of the quantitative health risk assessment performed by ANSES" (p. 9).
- **Reference literature for absorption corrections.** Limonene human in vivo: Api et al. 2013 (ref. 46). Benzyl salicylate human skin in vitro: Belsito et al. 2007 (ref. 47). HICC human skin in vitro: SCCS 2017 (ref. 48). BPMP human skin in vitro: SCCS 2019 (ref. 49). Formaldehyde monkey in vivo: Jeffcoat et al. 1983 (ref. 42) and ATSDR 1999 (ref. 43) and SCCS 2014 (ref. 44).
- **Funding and conflict-of-interest declarations.** Funding: International Disposables and Nonwovens Association (EDANA). Conflict of interest statement (p. 15): "The author declares no conflict of interest. The funder had no role in the design of the study; in the collection, analyses, or interpretation of data; in the writing of the manuscript, or in the decision to publish the results." See Verification notes for HMI's framing of this disclosure.
- **Author affiliation.** Alfred Bernard, Institut de Recherche Expérimentale et Clinique (IREC), Université catholique de Louvain, 1200 Brussels, Belgium; Honorary Research Director of the National Fund for Scientific Research (Belgium).

## Implications

- **Certification (HMTc).** This paper provides no heavy-metal occurrence data and contributes nothing directly to the HMTc 10-analyte panel (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). For Category 9 Row 7 (diapers and diaper components), it is the industry-funded peer-reviewed counter-position to the ANSES 2019 regulatory case ([[anses2019-baby-diaper-safety-france]]), and as such it is an important methodological data point for any future HMI dermal-exposure model in this product category: the contested skin-transfer parameter (T = 100% vs 7%), rewet factor (R = 100% vs 1.32% vs 1%) and dermal-absorption assumptions (100% vs literature-derived fractional values) will all need to be engaged with regardless of analyte class, because the same DED framework applies to metals as to PAHs/dioxins. The breast-milk comparator that Bernard uses for PCDD/Fs and DL-PCBs is potentially reusable for HMI synthesis of dermal-vs-dietary metal exposure (Pb, Cd, MeHg specifically have breast-milk concentration data that could populate a parallel comparator), but the methodological choice to compare dermal-route diaper exposure with oral-route dietary exposure is itself contested in the paper (Bernard does it; ANSES does not). The paper's principal regulatory contribution — the argument that ANSES PAH concentrations were 2-3 orders of magnitude overestimated due to LOQ/2 surrogate concentrations from an analytical method with LOQ > 150 µg/kg whereas food-method LODs are ~1.5 µg/kg — is a generalisable critique of LOQ-as-surrogate-concentration in low-detection-frequency datasets, which directly applies to how HMI should handle below-LOQ metal results in this product class. Useful only as adjacent regulatory/methodological context, never as standards-setting evidence.
- **Courses.** Useful for any HMTc Cat 9 module covering (i) the structure of an industry-funded peer-reviewed counter-position to a national-agency regulatory assessment, (ii) the methodological contest over skin transfer and rewet factor in diaper dermal-exposure modelling, (iii) the LOQ-as-surrogate-concentration problem and how analytical-method LODs affect risk-assessment outputs, and (iv) the breast-milk-intake comparator and its methodological limitations (oral vs dermal route; lifetime accumulation vs lactation transfer).
- **App.** Not directly applicable to the heavy-metals consumer app. Useful as background for a future app explainer on the diaper-safety controversy and the difference between regulatory and industry-funded risk assessments in this product class.
- **Microbiome.** Not addressed.

## Related evidence

- [[products/diapers-and-components]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [c660ae7053](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7053) | 2026-06-01 | major | 1 section added |
<!-- END: hmi-page-history -->
