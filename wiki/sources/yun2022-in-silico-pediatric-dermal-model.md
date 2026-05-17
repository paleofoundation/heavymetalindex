---
type: source
raw_handle: MFK_in-silico-dermal-absorption-model-pediatric
cite_key: yun2022-in-silico-pediatric-dermal-model
title: "Development and Evaluation of an In Silico Dermal Absorption Model Relevant for Children"
authors: [Yun YE, Calderon-Nieva D, Hamadeh A, Edginton AN]
year: 2022
publication: "Pharmaceutics 14: 172"
doi: 10.3390/pharmaceutics14010172
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/Development_and_Evaluation_of_an_In_Silico_Dermal_Absorption_Model_for_Pediatric_Exposures.pdf"
metals: []
ingredients: []
products: []
matrices: []
jurisdictions: [CA]
near_duplicates: []
sample_n: null
sample_population: "In silico model construction with maturation functions fit to literature data on infant/child skin anatomy; predictive performance evaluated against three drugs (buprenorphine, diamorphine, phenobarbital) using in vitro neonatal-skin permeation data from prior published studies"
updated: 2026-05-17
---

# Yun et al. 2022 — In silico pediatric dermal absorption model

This Pharmaceutics paper constructs an age-dependent pediatric dermal absorption model by extending the Dancik et al. 2013 mechanistic skin-permeation model (implemented in MoBi / Open Systems Pharmacology v8.21) with maturation functions for stratum corneum thickness, viable epidermis thickness, dermis thickness, and skin hydration as functions of postnatal age. Predictive performance evaluated against in vitro neonatal-skin permeation of three drugs (buprenorphine, diamorphine, phenobarbital). The paper does not include heavy-metal occurrence data; it is a model-development paper that produces maturation equations relevant to children's dermal exposure modeling.

## Key numbers

- Skin layer thickness maturation parameters (Table 4, p. 10):
  - Stratum corneum thickness reaches adult values at ~1510 days (≈4.1 years; Model 1) or 1604 days (≈4.4 yr; Model 2). Infant SC is ~30% thinner on lower thigh (7.3 ± 1.1 µm vs adult 10.5 ± 2.1 µm; Stamatas et al.); 34% thinner on lower thigh and 18% thinner on upper inner arm (Liu et al.).
  - Epidermis thickness reaches adult values at ~100 days postnatal age. Infants 3-24 months have epidermis 8-20% thinner than adults (Stamatas, Liu); 22% thinner inner arm.
  - Dermis thickness: child remains ~40% of adult thickness until ~2 years (730 days); reaches adult at ~9883 days (≈27 yr). Scalp dermis 1125 µm at 2 weeks to 1500 µm at 21 yr (max); 850 µm at 2 weeks to 2200 µm at 21 yr (min) (de Viragh).
  - Skin hydration: peaks around 100-1000 days postnatal age (ratio ~1.25 vs adult), declining to 1.0 at 1182 days (≈3.2 yr).
- Validation drugs (Table 1, p. 5): buprenorphine (MW 467.6, Log P 4); diamorphine (MW 369.4, Log P 1.5); phenobarbital (MW 232.2, Log P 1.47).
- Predictive performance (Abstract): ratios of predicted:observed flux in neonates - diamorphine 0.55 to 1.40; phenobarbital 0.93 to 1.26; buprenorphine "acceptable" (specific range not given in abstract).
- Maturation equations from Table 4 (p. 10): SC thickness uses polynomial of postnatal age in days (a=2.401e-7, b=2, c=-99.43, d=2.071e-3, e=101.4 for Model 1); epidermis thickness uses sigmoid (b=18.702, c=0.634 base ratio, normalization 5.363); dermis thickness uses sigmoid (b=8.974e3, c=0.407 base ratio); SC hydration uses polynomial peaking at intermediate ages.

## Methods (brief)

Model construction: extension of the Dancik et al. 2013 three-compartment (SC, viable epidermis, dermis) Fick's-law permeation model implemented in MoBi (Open Systems Pharmacology v8.21). Maturation functions developed by literature review (MEDLINE / EMBASE / PubMed) of healthy full-term infant and child skin physiology studies (Stamatas, Liu, Miyauchi, Mogensen, de Viragh, Marcos-Garces, Hughes-Formella). Maturation forms tested: sigmoid, Hill, polynomial; selected by leave-one-out cross-validation (LOOCV) on the ratio of PAi(Age) / Padult. Model evaluation: predicted in vitro permeant flux for buprenorphine, diamorphine, phenobarbital against in vitro neonatal-skin data from Barret et al. 1993 and 1994 and Bonina et al. 1993; fold-error = predicted/observed flux. Local sensitivity analysis on adult (Age = 30 yr) model identified age-sensitive parameters. Monte Carlo sampling for parameter uncertainty propagation. Limitations stated: review excluded pre-term skin (gestational age <37 weeks); evaluation drugs are pharmaceuticals, not metals or other environmental chemicals; the model does not currently include hair-follicle or sweat-duct shunt pathways.

## Implications

- Certification (HMTc): Methodology infrastructure for any future HMI dermal-exposure modeling that needs age-specific skin permeability for heavy-metal-containing children's products (lotions, sunscreens, wipes). The maturation equations let an HMI exposure model adjust adult ABS values for infant/toddler/preschooler skin without re-running primary experiments. Not threshold-anchoring; methodology only.
- Courses: Teaching reference for how pediatric pharmacokinetic models extend adult dermal absorption frameworks to account for skin development.
- App: Not directly relevant to contamination_profile data. The age-dependent skin parameters could feed an exposure-modeling annex if HMI builds dermal-route risk scoring.

## Wiki pages this source may touch

- (None directly; this is a methodology paper)

## Verification notes

- No heavy-metal occurrence data in this paper. `metals: []` is correct.
- Validation against pharmaceutical drugs only (buprenorphine, diamorphine, phenobarbital); the model's predictive accuracy for inorganic metal cations has not been evaluated and is likely lower because metals partition very differently from neutral lipophilic drugs.
- The Dancik et al. 2013 base model is open-source on GitHub (Open-Systems-Pharmacology/Skin-permeation-model) - reusable for future HMI work.
