---
type: ingredient
commodity: potatoes
aliases: [white potato, russet potato, yukon gold, red potato, potato flakes, potato starch, dehydrated potato, french fries, potato chips]
category: starchy-root
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
drivers: [soil-uptake, tuber-formation-in-soil, geography, peel-versus-flesh]
lower_risk_variants: [peeled-potato, potato-starch]
higher_risk_variants: [unpeeled-potato, potato-skin, potato-peel-heavy-products]
used_in_products: [baby-food-vegetables, french-fries, potato-chips, mashed-potato-products, potato-starch-containing-baked-goods]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Potatoes

_Stub page. Contamination profile populates on the next ingest wave. Potatoes are identified by [[sources/efsa-cadmium-contam-2009]] as one of the population-level dietary cadmium contributors, placed in a joint "starchy roots and potatoes" category alongside other root vegetables. The commodity is distinct from the root-vegetables-for-babies category that the FDA CTZ Pb guidance treats under a dedicated 20 ppb action level._

## Why this commodity accumulates cadmium

Potatoes are tubers that form and mature in direct soil contact, with cadmium uptake driven by soil cadmium concentration, soil pH, and tuber surface area. Cadmium concentrations tend to be modestly higher in potato peel than in potato flesh, though the gradient is less pronounced than for some other root-crop commodities. Regional variation in finished-potato cadmium reflects soil cadmium in the growing region, with phosphate-fertilizer-amended soils and hotspot areas producing elevated potato cadmium.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration in potatoes of 0.021 mg/kg across European samples, which is at the lower end of the starchy-roots category mean but still meaningful in population-exposure terms given high consumption volume._

## Processing effects

_Pending. Peeling removes a modest fraction of total potato cadmium because cadmium is distributed through the tuber rather than concentrated in the surface layer; peel-containing products (potato-skin-heavy dishes, processed products retaining peel) carry somewhat more cadmium than peeled-flesh products. Frying, baking, and boiling do not remove cadmium from the food._

## Ingredient-derivative risk

Potato-derived products (potato starch, potato flakes, dehydrated potato) inherit the cadmium concentration of the source potatoes. Potato starch, being isolated from flesh rather than from peel, tends to carry cadmium at the flesh-only concentration and therefore slightly below the whole-potato mean.

## Mitigation options

_Pending. Cultivar selection, soil management, and peeling are the primary mitigation levers. Note that peeling is in tension with the nutrient-retention rationale that keeps potato skin on in many modern preparations._

## Other metals of concern

The body of this page focuses on cadmium because the cadmium pilot batch was the first deep ingest wave; the contamination_profile block tracks all six metals the wiki covers and will fill in as subsequent ingest waves complete. Brief commodity-level orientation:

- **Pb**: potato skins can carry Pb from atmospheric deposition and surface soil. <!-- UNCITED --> The FDA Closer to Zero 20 ppb Pb action level for single-ingredient root vegetables in processed baby food covers carrots and sweet potatoes specifically ([[sources/fda-ctz-Pb-babyfood-2025]]; see [[regulations/fda-ctz-Pb-rootveg-20ppb]]); white potatoes are not in the targeted category but the framing is adjacent.
- **iAs**: irrigation-water-driven iAs uptake occurs in some growing regions; <!-- UNCITED --> not a top staple-iAs contributor (rice dominates, [[sources/fda-iAs-rice-cereal-2020]]). See [[metals/arsenic]].
- **tHg**: not a notable concern. <!-- UNCITED -->
- **Ni**: not a top dietary Ni contributor. <!-- UNCITED -->
- **Al**: not a top dietary Al contributor. <!-- UNCITED -->

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for potatoes and starchy roots (pending ingest of CXS 193-1995).
- EU Regulation (EU) 2023/915 Cd MLs for potatoes (pending ingest).
- [[regulations/fda-ctz-Pb-rootveg-20ppb]] — FDA CTZ 20 ppb lead action level for single-ingredient root vegetables in processed baby food covers carrots and sweet potatoes specifically and does not apply to potatoes, but the adjacent framing is worth noting for any future Cd analogue.

## Sources

- [[sources/efsa-cadmium-contam-2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
