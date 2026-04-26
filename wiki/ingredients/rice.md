---
type: ingredient
commodity: rice
aliases: [rice flour, rice syrup, brown rice syrup, rice protein, rice starch, white rice, brown rice, polished rice, husked rice]
category: grain
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
drivers: [soil-uptake, flooded-paddy, geography, cultivar, processing]
lower_risk_variants: []
higher_risk_variants: [brown-rice, rice-bran, rice-protein-concentrate]
used_in_products: [infant-rice-cereal, rice-milk, gluten-free-baking, protein-powder, crackers, puffed-rice-snacks]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Rice

_Stub page. Contamination profile populates on the next ingest wave. Rice is identified across [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] and [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] as one of the top population-level dietary cadmium contributors worldwide, with variation driven by soil cadmium, cultivar differences, flooded-paddy redox chemistry, and processing (bran contains higher cadmium than endosperm)._

## Why this commodity accumulates cadmium

Rice is grown predominantly in flooded paddy systems where the reducing soil conditions alter the speciation and bioavailability of several metals. For cadmium, rice is a comparatively efficient accumulator from soil, with uptake driven by soil cadmium concentration, soil pH, zinc status, and cultivar-specific root biology. Cadmium concentrates in the bran layer rather than the endosperm, so brown rice and rice bran products carry higher cadmium than polished white rice from the same source. Geographic variation is substantial; regions with phosphate-fertilizer-amended soils, historic mining activity, or naturally cadmium-rich sedimentary rocks produce higher-cadmium rice than regions without these soil characteristics.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence datasets and of Codex Standard CXS 193-1995 (which sets the international Cd ML for rice)._

## Processing effects

_Pending. Polishing reduces cadmium by removing the bran layer; rinsing, parboiling, and cooking-water-discard effects will be characterized when occurrence data are consolidated._

## Ingredient-derivative risk

Derivative products of rice inherit, concentrate, or redistribute the cadmium present in the source grain. Rice bran and brown rice carry higher cadmium than polished white rice. Rice protein concentrates and rice-derived sweeteners (rice syrup, brown rice syrup) can concentrate cadmium from the source grain and deserve separate per-product characterization when the app's recipe-inference pipeline encounters them.

## Mitigation options

_Pending. Literature on cultivar selection, water management, liming, zinc amendment, and post-harvest processing will be synthesized in a dedicated mitigation subsection when ingredient-level ingests complete._

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **iAs**: a major concern for rice — rice is the highest-iAs staple food because flooded-paddy redox chemistry mobilizes soil arsenic into pore water where roots take it up ([[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]]). Brown rice and rice bran carry higher iAs than polished white rice ([[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]). The FDA Closer to Zero inorganic-arsenic action level for infant rice cereal is 100 ppb ([[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]]). See [[metals/arsenic]] and [[sources/navaretnam-2025-rice-as-speciation|Navaretnam et al. 2025]].

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for rice (pending ingest of CXS 193-1995).
- EU Regulation (EU) 2023/915 Cd ML for rice (pending ingest).
- [[regulations/fda-closer-to-zero]] — FDA CTZ inorganic arsenic action level of 100 ppb in infant rice cereal is adjacent but not a cadmium rule.

## Sources

_None directly ingested yet. See [[metals/cadmium]] for the cross-source synthesis that identifies rice as a population-level contributor._
