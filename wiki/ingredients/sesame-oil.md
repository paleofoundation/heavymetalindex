---
type: ingredient
commodity: sesame-oil
title: "Sesame Oil"
label: "Sesame Oil"
aliases: [sesame, sesame-seeds, tahini]
category: oil
contamination_profile:
  Pb: { status: populated, typical_ppb: [9, 17], p95_ppb: 17, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [5, 9], p95_ppb: 9, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [18, 91], p95_ppb: 124, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [seed-source, extraction-method, refining, storage]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Sesame Oil

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 9–17 | medium | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/lee2019-food-processing-heavy-metals-migration\|2]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]] |
| Cd | n=3 | 5–9 | medium | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/lee2019-food-processing-heavy-metals-migration\|2]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 18–91 | medium | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/lee2019-food-processing-heavy-metals-migration\|2]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/lee2019-food-processing-heavy-metals-migration\|Lee et al. 2019]]. *Effects of food processing methods on migration of heavy metals to food*, Applied Biology and Chemistry | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Sesame oil is extracted from sesame seeds (Sesamum indicum), an aerial-fruiting oilseed cultivated dominantly in India, Sudan, Ethiopia, Myanmar, China, Tanzania, and Nigeria. Sesame plants are documented Cd accumulators — sesame seeds carry Cd at concentrations multiples higher than most other oilseeds when grown in moderately Cd-contaminated soils, and this profile partially partitions into the oil fraction during extraction. The Iranian Hamadan PTE survey ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes|Mehri 2024]]), Korean food-processing migration study ([[sources/lee2019-food-processing-heavy-metals-migration|Lee 2019]]), and Saudi Arabia vegetable oils survey ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Ashraf 2012]]) collectively document sesame oil at Pb 9-17 ppb, Cd 5-9 ppb, and tAs 18-91 ppb across multiple regional markets.

The HMTc panel concerns for sesame oil are Cd (the sesame-plant accumulation signature), Pb (elevated relative to less-contaminated-region oils), and trace tAs in some emerging-market supply. The wide tAs range (18-91 ppb) reflects the contributing studies' coverage of multiple regional markets with different upstream supply quality.

## Ranges by source, region, and variety

Variance within sesame oil tracks source-sesame origin region (Ethiopian and Sudanese sesame production from regions with documented industrial-deposition or As-affected groundwater carries higher tAs; Indian and Chinese sesame production carries moderate baseline; Mediterranean and Mexican sesame production sits at lower baseline), cultivar choice (some Sesamum indicum cultivars are higher Cd accumulators than others), extraction method (cold-pressed toasted-sesame oil for culinary use vs solvent-extracted refined sesame oil for industrial use), and refining tier. Cold-pressed unrefined toasted sesame oil (the dark amber Asian-cuisine staple) retains more of the source-seed metal load; refined light sesame oil sits at lower levels.

## Processing effects

Sesame oil manufacturing varies by product type. Toasted (dark) sesame oil is made by roasting sesame seeds before cold-pressing; this preserves the source-seed flavor compounds and metal load with minimal refining. Refined (light) sesame oil undergoes standard refining (degumming, neutralization, bleaching, deodorization) that reduces trace metals. The food-processing migration study by [[sources/lee2019-food-processing-heavy-metals-migration|Lee 2019]] documents how processing-method choice affects metal migration in oils including sesame oil; cooking with sesame oil at high temperatures can mobilize trace metals from oil-contact cookware into the oil-and-food matrix.

## Ingredient-derivative risk

Sesame oil routes into culinary applications (Asian cuisine, salad dressings, marinades). Derivatives include tahini ([[ingredients/sesame-oil|sesame paste]]) which is made from whole-ground roasted sesame seeds and carries the full source-seed metal load (not partitioned to lipid fraction); halvah and other sesame-based confectionery; and gomashio and similar sesame-seasoning products. Whole sesame seeds carry the full Cd and tAs load and are nutritionally desirable but heavy-metal-rich; sesame oil is the partitioned-lipid-fraction with lower per-mass metals.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Source-sesame origin specification favoring documented low-soil-Cd production regions; refinery-tier specification (refined for lower metals; cold-pressed for flavor at the cost of higher metals); and contractual specification of Cd ceiling on incoming oil.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the sesame-cultivation stage. Soil pH management (raising pH reduces Cd plant availability); cultivar selection (low-Cd sesame cultivars under agronomic research); and avoidance of high-Cd organic amendments.

**Processing levers** ([[mitigation/processing]]) include refining-stage interventions (bleaching, deodorization, multi-pass refining) that substantially reduce per-mass trace metals; choice of refined vs unrefined product is the practical brand-side lever.

**Formulation levers** ([[mitigation/formulation]]) include alternative-oil substitution where the matrix permits ([[ingredients/peanut-oil|peanut oil]], olive oil for non-Asian applications; toasted [[ingredients/rice-bran-oil|rice bran oil]] as an alternative high-flavor Asian-cuisine oil).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, tAs testing on incoming oil against EU 2023/915 maximum levels. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include lined-container specification; glass or food-grade-lined containers maintain finished-oil quality.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set sesame-oil-specific maximum levels for Pb or Cd; general EU food-safety law applies; oilseed-related contaminant provisions reference [[sources/codex-cxs-193-1995|CXS 193-1995]].
- Codex Alimentarius CXS 210-1999 (Named Vegetable Oils) provides composition standards for sesame oil.
- FDA does not set a quantitative action level specific to sesame oil; general FDA enforcement on toxic-element contamination applies.
- California Prop 65 ([[regulations/california-prop65]]) Pb and Cd MADLs apply to sesame-oil products sold in California; Cd in sesame products has been a subject of California Prop 65 settlements in some cases.


