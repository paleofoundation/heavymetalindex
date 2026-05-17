---
type: ingredient
commodity: mango-juice
title: "Mango Juice"
label: "Mango Juice"
aliases: []
category: juice
contamination_profile:
  Pb: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-14
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Mango Juice

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
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
| 1 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology | 2024 | Peer-reviewed | NP Pb occurrence in 16 commercially packaged fruit juice samples of 4 flavors (orange, apple, mango, lychee) from 4 popular brands sold... (n=16) |
| 2 | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|Sobhanardakani et al. 2017]]. *Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices*, Annals of Military and Health Sciences Research | 2017 | Peer-reviewed | IR Al occurrence in 48 commercially packaged fruit juice samples of 4 types (cherry, mango, orange, pineapple) from 4 popular brands, purchased... (n=48) |
| 3 | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|Farid et al. 2010]]. *Levels of Trace Elements in Commercial Fruit Juices Consumed in Jeddah, Saudi Arabia*, Medical Journal of Islamic World Academy of Sciences | 2010 | Peer-reviewed | SA Cr, Ni occurrence in 129 commercial fruit juice samples (42 apple, 45 orange, 42 mango) of 15 brands purchased from supermarkets in... (n=129) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Mango juice is the liquid extracted or processed from mango fruit (Mangifera indica). Mango cultivation is concentrated in tropical regions (India, Pakistan, Mexico, Brazil, Thailand, Philippines, parts of Africa) where soil-uptake and irrigation-water inheritance drive the per-mass heavy-metal load. Mango is a moderate soil-uptake commodity for [[metals/cadmium|Cd]] and [[metals/lead|Pb]] (less efficient than leafy vegetables, more efficient than fleshy temperate fruits), and the warmer growing climates with documented industrial and agrochemical contamination histories elevate baseline loads relative to temperate fruit juices. The [[sources/farid2010-fruit-juices-jeddah-trace-elements|Farid 2010]] Jeddah Saudi Arabia commercial fruit juice survey documents trace elements in mango juice on the Middle Eastern market; the [[sources/paudel2024-packaged-fruit-juices-nepal|Paudel 2024]] Nepalese packaged juice survey extends the evidence to South Asian product; the [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani 2017]] Iranian commercial juice survey adds Al and Cu data to the regional juice corpus.

The HMTc panel concerns for mango juice are [[metals/aluminum|Al]] (notable in regional surveys from cans-and-foil-packaged products), trace Pb and Cd, and Sn for canned mango juice. Mango juice imported into US, EU, and other developed markets typically reflects the upstream source region's metal profile filtered through importer specification.

## Ranges by source, region, and variety

Variance within mango juice tracks four dimensions: source-fruit origin region (Indian Alphonso, Pakistani Sindhri, Mexican Ataulfo, Thai Nam Dok Mai, Brazilian Tommy Atkins each from different soil-and-water contexts); the variety's natural metal-uptake efficiency (no documented per-cultivar differences in the corpus); processing scale and infrastructure (commodity-scale vs craft production); and packaging (canned mango juice carries Sn; aseptic carton or PET packaging eliminates that pathway).

The Middle Eastern and South Asian commercial juice surveys ([[sources/farid2010-fruit-juices-jeddah-trace-elements|Farid 2010]], [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran|Sobhanardakani 2017]], [[sources/paudel2024-packaged-fruit-juices-nepal|Paudel 2024]]) collectively document elevated Pb, Cd, and Al in some mango-juice products relative to EU and US developed-market baselines, reflecting weaker upstream raw-material quality control in some emerging-market supply chains.

## Processing effects

Mango juice manufacturing involves washing, pulping or pressing, screening, optional enzymatic clarification, pasteurization, optional concentration, and packaging. The pulp-and-skin removal step partitions the source-fruit metal load between juice and solids; mango skin and seed carry the majority of source-fruit Pb and Cd, leaving the juice fraction with reduced per-mass metals relative to the whole fruit. Pasteurization does not affect metals. Concentration via evaporation concentrates per-mass solute including metals. Canned mango juice introduces Sn migration; aseptic carton packaging does not.

## Ingredient-derivative risk

Mango juice routes into the broader fruit-juice product family. Derivatives include mango juice concentrate (primary intermediate for reconstituted juice), mango nectar (typically thicker, may contain pulp; per-mass profile slightly different from clarified juice), mango-flavored beverages, and mango-based smoothie products. Dried mango (mango leather, candied mango) concentrates per-mass metals via moisture removal. Mango chutney and mango-based sauces carry weighted-average metal profiles from mango plus other ingredients.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention for mango juice given the upstream-region variability. Origin-region specification favoring documented low-soil-Pb production areas; supplier audit programs verifying processing infrastructure quality; and contractual specification of Pb/Cd/Al ceiling on incoming juice or concentrate.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the mango-cultivation stage. Soil pH management; avoidance of high-Pb agrochemical inputs (some legacy pesticides and fertilizers in tropical-mango regions carry elevated Pb); and irrigation-water specification.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification (stainless-steel-only contact surfaces); pulp-removal optimization to maximize Pb partitioning to solids; and clarification with bentonite to remove additional trace metals.

**Formulation levers** ([[mitigation/formulation]]) include juice-blend formulations (blending mango with lower-Pb juices in tropical-blend products); juice-to-water dilution in mango-flavored beverage formulations.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Al testing on incoming juice and concentrate against EU 30 ppb Pb juice maximum level and FDA 2022 draft 20 ppb non-apple-juice action level. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned mango juice (BPA-NI epoxy, full lacquering); aseptic carton, glass, or PET packaging eliminates Sn migration entirely; avoidance of aluminum-foil-lined packaging where Al is a concern.

## Regulatory limits that apply

- [[sources/fda2022-draft-lead-juice|FDA 2022]] draft action level of 20 ppb Pb for non-apple juices applies to mango juice in the US market.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb in fruit juice at 30 ppb (general) including mango juice.
- Codex Alimentarius CXS 247-2005 (General Standard for Fruit Juices and Nectars) includes contaminant provisions referencing [[sources/codex-cxs-193-1995|CXS 193-1995]].
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to mango-juice products sold in California.
- EU Sn-in-canned-food regulation sets 100 mg/kg maximum level for canned beverages including mango juice.


