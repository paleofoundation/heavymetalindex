---
title: "Quinoa"
type: ingredient
commodity: quinoa
label: "Quinoa"
aliases: [Chenopodium quinoa, Andean grain, pseudocereal]
category: pseudocereal
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [andean-soil-geochemistry, mining-impacted-watersheds, irrigation-water, cultivar, altitude]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 6
---

# Quinoa

Quinoa is a pseudocereal indigenous to the Andean highlands of Peru, Bolivia, and Ecuador. It is botanically distinct from true cereals (Poaceae) but functions as a grain in human diets and is regulated alongside cereals in most jurisdictions. The heavy-metal contamination signal for quinoa is dominated by **cadmium**, which it accumulates from Andean soils whose geochemistry is shaped by the same mining-belt minerology that drives Cd in regional cacao (see [[ingredients/cocoa]] for the parallel pattern). Lead and arsenic are secondary concerns, primarily in samples sourced from mining-impacted watersheds (Moquegua, Huancavelica, certain altiplano basins).

The growing global popularity of quinoa as a gluten-free pseudocereal in infant and child foods, energy bars, and breakfast products makes its contamination profile increasingly relevant to certification: a product that substitutes quinoa for rice to lower iAs may simultaneously elevate Cd if the quinoa is sourced from a Cd-rich region. The Peru/Bolivia regional variance is large enough that origin-specific sourcing matters for HMTc Path A threshold setting.

## Routing

Direct evidence for quinoa lands here. Andean-wide multi-crop surveys also touch [[ingredients/cocoa]] and the cereals umbrella. Product-level routing will flow through breakfast cereal and infant cereal pages once Phase 2 ingest connects quinoa-bearing products to this commodity.

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Cd will be the first synthesis target given six contributing source pages already in scope; geographic variance (Peru vs Bolivia vs Ecuador, valley vs altiplano, mining-proximate vs non-proximate) is the principal organizing axis for that synthesis.

## Sources

- [[sources/bedoya-perales2023-moquegua-peru-mining-dataset]] — Multi-element dataset, Moquegua mining region, Peru
- [[sources/ccopi2026-heavy-metals-andean-crops-peru]] — Heavy metals in Andean crops including quinoa
- [[sources/cr-fsasc2014-arsenic-rice-grains]] — As in rice and grains comparison (includes quinoa scope)
- [[sources/gul2024-quinoa-cadmium-lead-stress]] — Quinoa under Cd and Pb stress (mechanistic + ionomic)
- [[sources/roman-ochoa2021-arequipa-grains-health-risk]] — Arequipa grain health-risk assessment
- [[sources/rosales-huamani2023-quinoa-peru-ptes]] — PTEs in Peruvian quinoa (Huacaybamba-Huánuco)
