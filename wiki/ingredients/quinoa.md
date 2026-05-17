---
title: "Quinoa"
type: ingredient
commodity: quinoa
label: "Quinoa"
aliases: [Chenopodium quinoa, Andean grain, pseudocereal]
category: pseudocereal
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [40, 1070]
    p95_ppb: 1540
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 300]
    p95_ppb: 750
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [60, 60]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [andean-soil-geochemistry, mining-impacted-watersheds, irrigation-water, cultivar, altitude]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 7
---

# Quinoa

Quinoa is a pseudocereal indigenous to the Andean highlands of Peru, Bolivia, and Ecuador. It is botanically distinct from true cereals (Poaceae) but functions as a grain in human diets and is regulated alongside cereals in most jurisdictions. The heavy-metal contamination signal for quinoa is dominated by **cadmium**, which it accumulates from Andean soils whose geochemistry is shaped by the same mining-belt minerology that drives Cd in regional cacao (see [[ingredients/cocoa]] for the parallel pattern). Lead and arsenic are secondary concerns, primarily in samples sourced from mining-impacted watersheds (Moquegua, Huancavelica, certain altiplano basins).

The growing global popularity of quinoa as a gluten-free pseudocereal in infant and child foods, energy bars, and breakfast products makes its contamination profile increasingly relevant to certification: a product that substitutes quinoa for rice to lower iAs may simultaneously elevate Cd if the quinoa is sourced from a Cd-rich region. The Peru/Bolivia regional variance is large enough that origin-specific sourcing matters for HMTc literature evidence threshold setting.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 40–1070 | medium | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|1]], [[sources/gul2024-quinoa-cadmium-lead-stress\|2]], [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|3]] |
| Cd | n=5 | 20–300 | medium | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|1]], [[sources/gul2024-quinoa-cadmium-lead-stress\|2]], [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 60 | medium | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|1]], [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|2]], [[sources/rosales-huamani2023-quinoa-peru-ptes\|3]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

Direct evidence for quinoa lands here. Andean-wide multi-crop surveys also touch [[ingredients/cocoa]] and the cereals umbrella. Product-level routing will flow through breakfast cereal and infant cereal pages once Phase 2 ingest connects quinoa-bearing products to this commodity.

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Cd will be the first synthesis target given six contributing source pages already in scope; geographic variance (Peru vs Bolivia vs Ecuador, valley vs altiplano, mining-proximate vs non-proximate) is the principal organizing axis for that synthesis.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ccopi2026-heavy-metals-andean-crops-peru\|Ccopi et al. 2026]]. *Bioaccumulation of heavy metals in high Andean crops of the Peruvian Andes: comparative evaluation between irrigated and dry systems*, Journal of Agriculture and Food Research | 2026 | Peer-reviewed | Measured Cd, Pb, tAs, Cr, and Ni in quinoa grain and soil from Mantaro Valley, Peru (n=218); irrigated vs rainfed comparison with bioaccumulation factor data |
| 2 | [[sources/hbbf2025-rice-arsenic-cadmium-145-samples\|Houlihan et al. 2025]]. *What's in your family's rice? Arsenic, Cadmium, and Lead in Popular Rice Brands - Plus 9 Safer Grains to Try*, Healthy Babies Bright Futures (HBBF) report | 2025 | Government report | *[awaiting synthesis]* |
| 3 | [[sources/gul2024-quinoa-cadmium-lead-stress\|Gül et al. 2024]]. *Effects of cadmium and lead stress on quinoa (Chenopodium quinoa Willd.) plant growth and antioxidant enzyme activities*, Turkish Journal of Nature and Science | 2024 | Peer-reviewed | Greenhouse pot study on Cd and Pb phytotoxicity and tissue accumulation in quinoa under spiked-soil conditions; phytotoxicity framing rather than ambient occurrence |
| 4 | [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|Bedoya-Perales et al. 2023]]. *Dataset of metals and metalloids in food crops and soils sampled across the mining region of Moquegua in Peru*, Scientific Data | 2023 | Peer-reviewed | Open-access occurrence dataset for tAs, Cd, Pb, Cu, and Zn in food crops and soils from Moquegua mining region, Peru (341 sites); includes quinoa samples |
| 5 | [[sources/rosales-huamani2023-quinoa-peru-ptes\|Rosales-Huamani et al. 2023]]. *Determination of Potentially Toxic Elements in Quinoa Crops Located in the Huacaybamba-Huanuco-Peru Area*, International Journal of Membrane Science and Technology | 2023 | Peer-reviewed | Measured tAs, Pb, Cd, Cu, and Zn in 50 agricultural soil samples from a quinoa-producing area in Huancaybamba, Peru; 100% of Cd samples exceeded Peruvian soil quality standards |
| 6 | [[sources/roman-ochoa2021-arequipa-grains-health-risk\|Román-Ochoa et al. 2021]]. *Heavy metal contamination and health risk assessment in grains and grain-based processed food in Arequipa region of Peru*, Chemosphere | 2021 | Peer-reviewed | Measured tAs, Cd, Sn, Pb, and tHg in quinoa and rice grains plus processed grain products from Arequipa, Peru (n=53); Pb dramatically elevated in processed vs raw grain |
| 7 | [[sources/cr-fsasc2014-arsenic-rice-grains\|CR 2014]]. *Analysis of Arsenic in Rice and Other Grains*, Consumer Reports Food Safety and Sustainability Center | 2014 | Industry | 697-sample iAs/tAs dataset covering rice types and alternative grains; quinoa showed significantly lower inorganic arsenic than rice of any type tested |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

_Pending synthesis. The soil, plant biology, processing, or sourcing reasons this commodity carries heavy-metal load will be populated as contributing sources accumulate per CLAUDE.md Part 9._

## Ranges by source, region, and variety

_Pending synthesis. Geographic and varietal variance will be populated from contributing source pages per CLAUDE.md Part 9._

## Processing effects

_Pending synthesis. Polishing, rinsing, fermentation, drying, milling, and refining effects on per-analyte concentration will be populated from contributing sources._

## Ingredient-derivative risk

_Pending synthesis. When this commodity is processed into syrups, concentrates, flours, brans, or other derivatives, the per-derivative concentration shifts will be populated here._

## Mitigation options

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing source pages and cross-linked `mitigation/` pages._

## Regulatory limits that apply

_Pending synthesis. Operative Codex, EU, FDA, and other regulatory limits for this commodity or its derived products will be populated from `regulations/` pages and source evidence._


