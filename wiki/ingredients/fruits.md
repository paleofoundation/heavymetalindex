---
type: ingredient
commodity: fruits
title: "Fruits"
label: "Fruits"
aliases: []
category: fruit
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 15], p95_ppb: 60, confidence: medium, n_studies: 4, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [1, 10], p95_ppb: 30, confidence: medium, n_studies: 4, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [0, 5], p95_ppb: 88, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 5], p95_ppb: null, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [20, 100], p95_ppb: null, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Fruits

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 1–15 | medium | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/munir2022-heavy-metals-natural-foods-review\|2]], [[sources/afonne2020-heavy-metals-plant-foods\|3]] |
| Cd | n=4 | 1–10 | medium | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/munir2022-heavy-metals-natural-foods-review\|2]], [[sources/afonne2020-heavy-metals-plant-foods\|3]] |
| iAs | n=2 | 0–5 | low | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/cfs2012-hktds-inorganic-arsenic\|2]] |
| tAs | n=3 | 1–5 | medium | [[sources/munir2022-heavy-metals-natural-foods-review\|1]], [[sources/afonne2020-heavy-metals-plant-foods\|2]], [[sources/cfs2012-hktds-inorganic-arsenic\|3]] |
| tHg | data gap | — | — | — |
| Ni | n=3 | 20–100 | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/afonne2020-heavy-metals-plant-foods\|2]], [[sources/cfs2013-hktds-metallic-contaminants\|3]] |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | CN/EU Pb, Cd, iAs, MeHg occurrence in 969 participants from China Health and Nutrition Survey 2018, Chongqing Municipality: 31 preschoolers (3-6 yr), 113 adolescents (7-17... (n=969) |
| 2 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | CN Ni occurrence in Zhejiang Province residents, 11 cities, 2018–2019; n=19,000 in consumption survey (n=2628) |
| 3 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr occurrence in Narrative review synthesizing published literature on heavy metal contamination in plant-based foods globally |
| 4 | [[sources/afonne2020-heavy-metals-plant-foods\|Afonne et al. 2020]]. *Heavy metals risks in plant foods – need to step up precautionary measures*, Current Opinion in Toxicology | 2020 | Review | NG/CN/TZ Pb, Cd, tAs, tHg, Cr, Ni occurrence in Narrative review in Current Opinion in Toxicology covering plant food heavy metal contamination globally, with emphasis on Asia,... |
| 5 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | HK Al, Sb, Cd, Pb, MeHg, Ni, Sn occurrence in Hong Kong general adult population; 150 TDS food items purchased on 4 occasions (March 2010 to February 2011),... (n=1800) |
| 6 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | HK iAs, tAs occurrence in Hong Kong adult population aged 20-84; composite samples from 150 TDS food items collected on four occasions March... (n=600) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This is the aggregate node for fruits (the broader category); see [[ingredients/apple]], [[ingredients/banana]], [[ingredients/grapes]], [[ingredients/strawberries]], [[ingredients/blueberries]], [[ingredients/peach]], [[ingredients/pear]], [[ingredients/mango]], [[ingredients/orange]], [[ingredients/watermelon]], and per-fruit ingredient pages for commodity-specific synthesis. Fruits as a category carry generally low heavy-metal loads compared to leafy greens, root vegetables, or grains. The fruit itself (the seed-bearing structure of flowering plants) is the reproductive organ, and most plants sequester less Cd in fruits than in leaves or roots because the metal would interfere with seed germination.

Lead in fruits is generally low except where fruit was grown in Pb-contaminated soil (historic lead-arsenate-pesticide-treated orchards, urban-adjacent orchards with atmospheric Pb deposition) or where surface deposition contaminates fruit skin (roadside production). Cadmium in fruits is generally low except in some accumulator species. Arsenic in fruits is generally very low except in apple-juice products historically associated with arsenic-pesticide-treated orchards (see [[ingredients/apple-juice]] and [[ingredients/apple]]).

The HMTc panel concerns for the fruits category are dominantly Pb (orchard-soil and atmospheric deposition pathways) and historical iAs in apple juice; Cd, Hg, Ni, Al, Cr, and Sn are generally at trace levels.

## Ranges by source, region, and variety

Per-species: Most table fruits (apples, pears, peaches, pineapple, grapes, melons, citrus) carry low panel-metal loads. Berries (strawberries, raspberries, blueberries) carry slightly higher Cd than tree fruits because berry plants take up more Cd from soil. Apple specifically carries the iAs legacy concern from lead-arsenate-pesticide era orchards; apple juice has specific Pb attention from juicing concentration effects.

Geographic variance tracks regional soil-Pb and orchard-history loading. Apples and pears from regions with historic lead-arsenate pesticide use (parts of the US Pacific Northwest, Northeast, parts of the EU) can carry elevated Pb from soil-persistence of the legacy pesticide. Tropical fruits (banana, mango, pineapple, papaya) from clean-soil tropical regions carry low panel-metal loads.

## Processing effects

Whole-fruit processing for canning, freezing, or pureeing does not change total per-mass metal load meaningfully. Washing fruit removes surface-deposited Pb (relevant for tree fruits grown in atmospheric-Pb regions). Peeling removes the skin where surface contamination concentrates.

Juicing concentrates per-mass solids and metals relative to whole fruit because water is removed; commercial juices typically carry 1.5-3× the per-mass metal of source whole fruit, with the actual ratio dependent on juice yield. Apple juice has specific Pb attention from this concentration effect (see [[ingredients/apple-juice]]).

Drying (raisins, dried apricots, dried mango) concentrates metals per dry mass through water removal; per-serving exposure depends on serving size, which is typically smaller for dried fruit than fresh.

## Ingredient-derivative risk

Fruit derivatives that concentrate metals: dried fruit (per-mass metal concentrated 5-10× the source fresh fruit), fruit juice concentrate (water removed for transport, reconstituted before consumption — final concentration depends on reconstitution ratio), fruit puree concentrates, fruit-pectin extracts, and fruit-derived food coloring (anthocyanin extracts).

Fruit-based dietary supplements (acai, goji, mangosteen, açai-derived antioxidant supplements) carry per-serving metal loads at varying levels depending on source-fruit and processing; they route to [[products/supplements-botanicals-herbs|Cat 16 row 15]].

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include single-origin sourcing from documented low-Pb production regions, avoidance of orchards with documented lead-arsenate-pesticide history, and supplier-soil-Pb verification for high-volume buyers.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the orchard level: soil amendment to immobilize Pb in legacy orchards (limited efficacy; some orchards have been retired from production due to soil-Pb levels), avoidance of contaminated irrigation water.

**Processing levers** ([[mitigation/processing]]) include washing and peeling (removes surface-deposited metals), juice yield management (lower juice-yield processing concentrates metals less), and drying-temperature specification.

**Formulation levers** ([[mitigation/formulation]]) include fruit-species substitution in compounded products and apple-juice vs other-juice formulation decisions for baby-food juice products.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb testing on incoming fruit, particularly for apple-juice and baby-food fruit-puree manufacturing. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned fruit products and aluminum-foil-lined-carton specification for shelf-stable juice products.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in fruits and fruit products. Specific MLs for fruit juice, including infant-and-young-child fruit juice.
- [[regulations/codex-cadmium-mls]] — Codex MLs for Pb and Cd in fruits.
- FDA action level for Pb in fruit juices (including apple juice) and the FDA Closer to Zero program for processed baby foods covering fruit purees.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to fruit-containing products sold in California; the serving-based screen governs.


