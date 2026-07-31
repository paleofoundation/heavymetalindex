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
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-17
---

# Yun et al. 2022 — In silico pediatric dermal absorption model

This Pharmaceutics paper constructs an age-dependent pediatric dermal absorption model by extending the Dancik et al. 2013 mechanistic skin-permeation model (implemented in MoBi / Open Systems Pharmacology v8.21) with maturation functions for stratum corneum thickness, viable epidermis thickness, dermis thickness, and skin hydration as functions of postnatal age. Predictive performance evaluated against in vitro neonatal-skin permeation of three drugs (buprenorphine, diamorphine, phenobarbital). The paper does not include heavy-metal occurrence data; it is a model-development paper that produces maturation equations relevant to children's dermal exposure modeling.

## Key numbers

- Skin layer thickness maturation parameters (Table 4, p. 10):
  - Stratum corneum thickness reaches adult values at ~1510 days (≈4.1 years; Model 1) or 1604 days (≈4.4 yr; Model 2). Infant SC is ~30% thinner on lower thigh (7.3 ± 1.1 µm vs adult 10.5 ± 2.1 µm; Stamatas et al.); 34% thinner on lower thigh and 18% thinner on upper inner arm (Liu et al.).
  - Epidermis thickness reaches adult values at approximately 4 months (~120 days) postnatal age (body text, p. 8); the sigmoid maturation curve in Table 4 / Figure 2B plateaus near 100-150 days. Infants 3-24 months have thigh epidermis 20% thinner (Stamatas et al.) and 8% thinner (Liu et al.) than adults; Liu et al. additionally measured 22% thinner inner arm.
  - Dermis thickness: child remains ~40% of adult thickness until ~2 years (730 days); reaches adult at ~9883 days (≈27 yr). Scalp dermis 1125 µm at 2 weeks to 1500 µm at 21 yr (max); 850 µm at 2 weeks to 2200 µm at 21 yr (min) (de Viragh).
  - Skin hydration: peaks around 100-1000 days postnatal age (ratio ~1.25 vs adult), declining to 1.0 at 1182 days (≈3.2 yr).
- Validation drugs (Table 1, p. 5): buprenorphine (MW 467.6, Log P 4); diamorphine (MW 369.4, Log P 1.5); phenobarbital (MW 232.2, Log P 1.47).
- Predictive performance (fold error = predicted/observed flux; Table 7, p. 16): diamorphine in full-term neonates 0.55 to 1.4 (abstract and body agree); phenobarbital in neonates 0.93 to 1.26 (abstract value; body text reports 0.96 to 1.26 but Table 7 entries are 0.93, 0.96, 1.22, 1.26); buprenorphine in early-term neonate (37 wk) 1.0 to 1.37, but the model failed to capture a 30-fold flux discrepancy between two full-term samples (40 w-7 h vs 38 w-1 d) attributed by the authors to experimental error (Discussion, p. 17). Preterm-neonate predictions (GA 35-36 wk) had fold errors 0.93 to 1.2 for diamorphine and phenobarbital.
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
- Paper-internal numeric note: the abstract reports phenobarbital fold errors 0.93 to 1.26, but the body text (p. 15) reports 0.96 to 1.26; Table 7 entries (0.93, 0.96, 1.22, 1.26) make the 0.93 to 1.26 range correct. The abstract values are used here.
- Author name in the paper's Tables 2-3 is rendered "Barret et al." but the reference list (entries 29, 30, 87) shows "Barrett, D.A." The reference-list spelling is canonical.
- Funding: NSERC grants 2016-01382 and 2020-547790. No declared conflicts of interest. No HMTc, brand, or industry funding.
- 2026-05-17 enhancement: tightened the buprenorphine predictive-performance summary using Table 7 and the Discussion (the original "acceptable" wording was a faithful abstract restatement but elided the 30-fold sample-pair discrepancy that the authors themselves attribute to experimental error). All other fields preserved (cite_key, raw_handle, raw_path, license, jurisdictions, near_duplicates).
- Audit subagent (2026-05-17) flagged that the prior "epidermis reaches adult values at ~100 days" wording conflated the Table 4 / Figure 2B plateau with the body-text claim of "four months of age" (p. 8); verified against source — corrected to "approximately 4 months (~120 days)" with the curve-plateau range stated separately.
- Audit subagent (2026-05-17) flagged that the prior "8-20% thinner (Stamatas, Liu); 22% thinner inner arm" gloss obscured per-study attribution (p. 8 actually pairs Stamatas with 20% and Liu with 8% on thigh; Liu with 22% on inner arm); verified against source — corrected to per-study attribution.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [025b6b7ce](https://github.com/paleofoundation/heavymetalindex/commit/025b6b7ce) | 2026-05-17 | minor | Narrative text revised |
| [9f4142d74](https://github.com/paleofoundation/heavymetalindex/commit/9f4142d74) | 2026-05-17 | minor | Narrative text revised |
| [0d0d0b0a0](https://github.com/paleofoundation/heavymetalindex/commit/0d0d0b0a0) | 2026-05-17 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
