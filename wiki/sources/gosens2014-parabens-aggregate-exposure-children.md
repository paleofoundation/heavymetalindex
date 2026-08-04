---
type: source
raw_handle: MFK_aggregate-exposure-parabens-personal-care-children
cite_key: gosens2014-parabens-aggregate-exposure-children
title: "Aggregate exposure approaches for parabens in personal care products: a case assessment for children between 0 and 3 years old"
authors: [Gosens I, Delmaar CJE, ter Burg W, de Heer C, Schuur AG]
year: 2014
publication: "Journal of Exposure Science and Environmental Epidemiology 24: 208-214"
doi: 10.1038/jes.2013.33
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 3.0 Unported (open access; Creative Commons Attribution-NonCommercial-NoDerivs)"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/Aggregate_exposure_approaches_for_parabens_in_personal_care_products_a_case_assessment_for_children.pdf"
metals: []
ingredients: []
products: ["[[products/baby-wipes]]", "[[products/baby-lotion-cream]]", "[[products/baby-shampoo-body-wash]]", "[[products/baby-sunscreen-mineral]]", "[[products/baby-sunscreen-chemical]]", "[[products/toothpaste]]", "[[products/children-personal-care]]"]
matrices: []
jurisdictions: [NL, EU]
near_duplicates: []
sample_n: 28
sample_population: "Modeled population from a pilot survey of Dutch parents of 28 children (13 girls, 15 boys) aged 0-3 years; aggregate-exposure methodology applied to 12 personal-care product types"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-17
---

# Gosens et al. 2014 — Aggregate exposure to parabens in personal-care products for children 0-3 yr

## Overview

This Journal of Exposure Science and Environmental Epidemiology paper compares deterministic (tier 1) and person-oriented probabilistic (tier 2) approaches for aggregating exposure to four parabens (methyl-, ethyl-, propyl-, butylparaben) in young children (0-3 yr) from twelve personal-care product types. The paper is a methodology paper on aggregate exposure assessment; it does not measure heavy metals. It is included in the Heavy Metal Index batch because the dermal-absorption fractions, product-use-frequency inputs, and per-product retention factors are useful infrastructure for HMI's parallel heavy-metal exposure modeling in the same product categories.

## Key numbers

- Modeled product set: 12 personal-care product types — toothpaste, shampoo, two-in-one shampoo, hair lotion, shower/bath soap, body lotion, bath oil, baby wipes, baby salve, sunscreen, aftersun, liquid soap (SI1 Table 1; categories named in Methods, p. 209).
- Body-weight default used in modeling: 11.1 kg (representative 1.5-year-old child) (p. 209).
- Tier 1 deterministic exposure outputs (Table 1, p. 209, mg/kg bw/day external; internal calculated by oral or dermal absorption fraction): methylparaben external 2.32, dermal absorption fraction 36%, internal 1.01 mg/kg bw/day, NOAEL 1000, MoE 991; ethylparaben external 0.36, dermal 55%, internal 0.20, NOAEL 1000, MoE 4966; propylparaben external 1.05, dermal 37%, internal 0.41, NOAEL 3.3, MoE 8; butylparaben external 0.47, dermal 42%, internal 0.20, NOAEL 2, MoE 10.
- Tier 2 probabilistic outputs: percentage of modeled population with exposure probability above the assumed "safe" MoE of 100 was 13% for propylparaben and 7% for butylparaben (Abstract, Results).
- Drivers of butylparaben aggregate exposure (Figure 3d, p. 212): baby wipes the dominant contributor (~60% of total population exposure); body lotion, baby salve, and sunscreen each contribute ~10-20%; remaining product types contribute <10% individually.
- Retention factors used: 0.01 for rinse-off products (shampoo, two-in-one shampoo, liquid soap, shower/bathsoap, bath oil); 1.0 for leave-on products (sunscreen, aftersun, lotion, salve); 0.1 for hair lotion (assumed 1/10 stays on); 0.1 for baby wipes (Engelen et al. assumption that 0.5 ml deposits on skin per event; 2.5 g/day baby-wipe-derived substance on skin) (p. 209).
- ConsExpo default product-application amounts and frequencies sourced from Cosmetics Fact Sheet (Bremmer et al. 2006). Child-vs-adult body-surface scaling factors used to extrapolate adult application amounts to a 1.5-year-old: 0.27 for sunscreen/aftersun/body lotion/shower-bath soap (4800 cm² child body application area / 17,500 cm² adult); 0.66 for hair lotion, shampoo, and two-in-one shampoo (768 cm² child head SA / 1155 cm² adult head); 0.29 for liquid soap (247.2 cm² child hands at 1.5 yr / 857.5 cm² adult hands) (p. 209).

## Methods (brief)

The paper applies two tiered exposure-assessment frameworks. Tier 1 (deterministic, worst-case): maximum reported paraben weight-fraction in each product × default product use amount × default frequency × retention factor × dermal absorption fraction / body weight. Tier 2 (probabilistic, person-oriented): pilot online survey of 28 Dutch families (21.5% response rate from parents of children 0-3 yr) provided real product use amount and frequency by product type and age/gender; the survey data populated an MS Access database, and exposures were resampled via bootstrap simulation. Survey limitations stated: small sample (28 children); broad-range reporting of use amounts and frequencies introduces uncertainty spanning two orders of magnitude; 14-month-old outlier driver of butylparaben distribution may be a survey-reporting artifact. Dermal absorption set to a distribution 1-55% (lowest unmetabolized methylparaben = 1%; highest ethylparaben from in-vitro human-skin = 55%). Oral absorption = 100%. Paraben concentrations: methyl-, ethyl-, propyl-, butylparaben weight fractions from manufacturer listings and Netherlands Food and Consumer Product Safety Authority (NVWA; the paper text on p. 209 prints "NWWA" but reference 8 credits NVWA) 2006 measurements in 12 product types. R modeling and Access database available from authors.

## Implications

- Certification (HMTc): Not directly relevant to heavy-metal threshold work. The product-use-frequency defaults (g/day applied), age-scaling factors (0.27 body-surface ratio), retention factors per product class (rinse-off 0.01, leave-on 1.0, wipes 0.1), and child body-weight default (11.1 kg) are useful infrastructure for any future HMI dermal/oral aggregate-exposure model that adapts the same product-use survey to metals.
- Courses: Methodology teaching reference for tiered (deterministic vs probabilistic) aggregate exposure assessment; demonstrates how aggregate exposure can produce MoE values an order of magnitude tighter than single-source assessments, and how a few products (baby wipes) can dominate aggregate exposure for the highest-use children.
- App: Not relevant to ingredient contamination_profile. The product-use defaults for shampoo, body lotion, sunscreen, baby wipes, etc. could seed an "expected daily product use by age" annex for a future dermal-route exposure feature.

## Wiki pages this source may touch

- [[products/baby-wipes]]
- [[products/baby-lotion-cream]]
- [[products/baby-shampoo-body-wash]]
- [[products/baby-sunscreen-mineral]]
- [[products/baby-sunscreen-chemical]]
- [[products/toothpaste]]
- [[products/children-personal-care]]

## Verification notes

- This is a parabens (preservative) paper, not a heavy-metals paper. No metals analyte data are reported. Frontmatter `metals: []` reflects this. Included in the batch as a methodological reference for aggregate dermal-exposure modeling of personal-care products.
- The 0.27 body-surface scaling factor (1.5-yr child vs adult) and the per-product retention factors are reusable for heavy-metal exposure modeling on identical product categories.
- "baby-salve" is not in the current product taxonomy; closest existing slug is [[products/baby-lotion-cream]] or [[products/diaper-cream-zno]] / [[products/diaper-cream-non-zno]] depending on intended use. Flagging for Part 10 review.
- 2026-05-17 merge-enhance: corrected license to CC BY-NC-ND 3.0 (paper is open-access per the back-cover Creative Commons notice, not "All rights reserved"); fixed transposed body-surface-area attribution in the scaling-factor bullet (4800 cm² is the child application area, 17,500 cm² is the adult — the prior wording reversed them); replaced "plus a generic leave-on" placeholder with "two-in-one shampoo" (the actual 12th product type per the Methods description on p. 209).
- 2026-05-17 audit pass (fresh-context subagent, PROMOTE verdict with 2 ⚠️ minor concerns): narrowed butylparaben body-lotion contribution from "~15-25%" to "~10-20%" to match Figure 3d more accurately; corrected agency name in Methods from "NWWA" (a typo printed in the paper text on p. 209) to "NVWA" (Netherlands Food and Consumer Product Safety Authority, as credited in reference 8 of the paper), with an inline annotation preserving the source-text discrepancy.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
