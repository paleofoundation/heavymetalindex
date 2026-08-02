---
type: source
raw_handle: MFK_estimating-mouthing-exposure-chemicals-childrens
cite_key: aurisano2022-mouthing-exposure-childrens-products
title: "Estimating mouthing exposure to chemicals in children's products"
authors: [Aurisano N, Fantke P, Huang L, Jolliet O]
year: 2022
publication: "Journal of Exposure Science & Environmental Epidemiology 32: 94-102"
doi: 10.1038/s41370-021-00354-0
source_type: peer-reviewed
evidence_tier: A
license: "open-access (Springer Nature; CC license unstated in extracted text)"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/Estimating_mouthing_exposure_to_chemicals_in_children_s_products.pdf"
metals: []
ingredients: []
products: ["[[products/children-personal-care]]"]
matrices: [saliva]
jurisdictions: [DK, US]
near_duplicates: []
sample_n: 437
sample_population: "Harmonized literature dataset of n=437 experimental migration rates into saliva covering n=66 chemical-material combinations (n=60 chemicals, n=5 materials: PVC, PP, EVA, silicone, wood); two age groups (3-<6 months and 2-<3 years)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-17
---

# Aurisano et al. 2022 — High-throughput mouthing exposure model for children's products

## Overview

This JESEE paper develops a high-throughput model for predicting chemical migration from children's product materials into saliva during mouthing, calibrated on 437 measured migration rates spanning 66 chemical-material combinations (phthalate plasticizers, alternative plasticizers, polybrominated diphenyl ethers, parabens, methylsiloxanes, chlorophenols, fragrances). The model adapts the Ernstoff food-packaging migration framework to mouthed plastics. The paper does not include heavy-metal occurrence data; it is a methodology paper for non-metal contaminants.

## Key numbers

- Dataset: n=437 experimental migration rates from 18 published studies; 66 chemical-material combinations (60 chemicals × 5 materials: PVC, polypropylene PP, ethylene-vinyl acetate EVA, silicone, wood).
- Migration rate range (Fig. 1): 1.7 × 10⁻⁶ µg/10 cm²/min for brominated flame retardant BDE-183 in PP to 32.7 µg/10 cm²/min for plasticizer dibutyl phthalate (DBP) in PVC; over 7 orders of magnitude.
- Two age-group exposure scenarios (Table 2): 3-<6 months body weight 7.4 kg; 2-<3 years body weight 13.8 kg. Pacifier average mouthing duration 3.4 min/h (infants), 1.8 min/h (toddlers); 99th-percentile 37.3 / 46.3 min/h. Doll mouthing average 0.5 / 0.4 min/h; 99th-percentile 2.5 / 2.9 min/h.
- Predicted mouthing exposure doses (E_mouthing, µg/kg_bw/d): range 4 × 10⁻⁸ to 252 µg/kg_bw/d. DBP in PVC dolls 21.7-253 µg/kg_bw/d; propylparaben in EVA pacifiers 5.8-224 µg/kg_bw/d.
- Hazard quotients (HQ = E_mouthing / RfD): average scenario 3 of 437 data points exceeded HQ=1 (2,2,4-Trimethyl-1,3-pentanediol diisobutyrate HQ=1.25; diisononyl cyclohexane-1,2-dicarboxylate HQ=1.06 both in PVC dolls; propylparaben HQ=1.39 in EVA pacifiers). Upper-bound mouthing scenario 70 combinations exceeded HQ=1 for 3-<6 mo, 58 for 2-<3 yr.
- Mechanistic model fit R² = 0.85 across all chemical-material combinations.
- Regression-based model (eq. 5): log10 R_mgr = 3.23 + 0.73 log10 D_p + 0.92 log10 C0 - 0.06 log10 K_ow; R² = 0.89.

## Methods (brief)

Systematic literature review of chemical migration rates from children's products into saliva. Migration rates harmonized to µg/10 cm²/min. Two complementary models built: (1) mechanistic material-saliva migration model adapted from Ernstoff food-packaging framework (diffusion-dominated short-term + two-exponential saturation long-term), with two parameters: chemical diffusion coefficient D_p in product (cm²/s) and product-food/saliva partition coefficient K_pf; (2) multiple linear regression model with initial concentration, D_p, K_ms, K_ow, MW as candidate predictors. EtOH equivalency for saliva taken as 20% (no mechanical stimulation) or 50% (in vivo with mechanical agitation, reflecting mouth flesh-saliva). Validation by three-fold cross-validation (excluding chemical group, experiment group, or random tenfold). Limitations stated: only 5 materials in dataset; brominated flame retardants and parabens have order-of-magnitude variability within same chemical-material combination.

## Implications

- Certification (HMTc): Limited direct relevance to heavy-metal threshold work. The model is for organic-chemical migration from polymer matrices; metals would require a separate set of model parameters (ion-exchange and complexation rather than partition coefficient). The exposure-scenario framework (mouthing duration, contact area, body weight by age) is reusable for any HMI mouthing-exposure model on metal-containing children's products.
- Courses: Methodology reference for chemical migration models; pairs with OECD 2024 crafts-and-toys exposure guidance.
- App: Not directly relevant.

## Wiki pages this source may touch

- (None directly; methodology only)

## Verification notes

- No heavy-metal occurrence data. `metals: []` is correct.
- Mouthing-duration values (3.4, 1.8 min/h pacifier average; 37.3, 46.3 min/h 99th percentile) are reusable for any metal-mouthing exposure calculation.
- Audit subagent (2026-05-17) added "in PP" matrix attribution to the BDE-183 lower-bound migration rate per p. 96 col 2 of the source ("for the brominated flame retardant 2,2',3,4,4',5',6-heptabromodiphenyl ether (BDE-183...) in PP to 32.7 µg/10 cm²/min..."). Applied.
- Audit subagent (2026-05-17) flagged the E_mouthing,pred lower bound "4 × 10⁻⁸" as wrong, claiming the source says "8 × 10⁻⁸"; verified against PDF p. 99 col 2 — the source clearly reads "E_mouthing,pred = 4 × 10⁻⁸ to 252 µg/kgBW/d." Finding was a false positive (OCR misread of "4" as "8"). Wiki value retained.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [cabd79869](https://github.com/paleofoundation/heavymetalindex/commit/cabd79869) | 2026-05-17 | minor | Narrative text revised |
| [0d0d0b0a0](https://github.com/paleofoundation/heavymetalindex/commit/0d0d0b0a0) | 2026-05-17 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
