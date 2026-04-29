---
type: ingredient
commodity: sunflower-seeds
aliases: [sunflower kernels, sunflower meats, sunflower butter, sunflower oil-press residue, sunflower seed protein]
category: oilseed
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
drivers: [soil-uptake, species-efficient-accumulator, phytoremediation-candidate-status]
lower_risk_variants: ["[[ingredients/sunflower-oil]]"]
higher_risk_variants: ["[[ingredients/sunflower-meal]]", "[[ingredients/sunflower-protein]]", "[[ingredients/whole-seed]]", "[[ingredients/seed-butter]]"]
used_in_products: ["[[products/snack-mixes]]", "[[products/granola-bars]]", "[[products/seed-butters]]", "[[products/baked-goods]]", "[[products/sunflower-oil]]", "[[products/protein-powder]]", "[[products/vegan-alternative-products]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Sunflower Seeds

_Stub page. Contamination profile populates on the next ingest wave. Sunflower seeds are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] within the "oilseeds" category, which ranks among the highest-cadmium food categories in the EFSA European occurrence dataset. Sunflower is itself a well-documented efficient cadmium accumulator, to the point of being studied as a phytoremediation candidate for cadmium-contaminated soils._

## Why this commodity accumulates cadmium

Sunflower (Helianthus annuus) is one of several crop species with documented efficient cadmium uptake from soil, sufficiently so that the species has been investigated as a phytoremediation tool for cadmium-contaminated agricultural and industrial soils. The cadmium taken up by the plant partitions preferentially to the seeds, concentrating in the protein-rich seed tissue rather than staying in stems, leaves, or roots. Regional variation in finished-seed cadmium reflects the soil cadmium at the growing site, and cadmium levels in sunflower seeds from cadmium-rich soils can be materially higher than in seeds from lower-cadmium regions.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for oil seeds of 0.227 mg/kg, placing the oilseed category fifth-highest in the EFSA ranking of food commodity means by cadmium concentration. Sunflower-specific values within the oilseed category are expected to be at the upper end given the species' accumulator profile; confirmation requires dedicated commodity-level ingests._

## Processing effects

_Pending. Cadmium in sunflower seeds partitions primarily to the protein fraction rather than to the oil fraction during cold-pressing, so sunflower oil typically carries less cadmium than whole seeds by a substantial factor; the press cake (oilseed meal) concentrates the cadmium remaining after oil extraction and is used in animal feed and in some plant-protein products._

## Ingredient-derivative risk

Sunflower oil is a relatively low-cadmium derivative because cadmium partitions to the protein-rich press cake during oil extraction. Sunflower meal, sunflower protein concentrate, and sunflower butter (which retains the whole seed) carry cadmium at or above the whole-seed concentration. Plant-based protein products using sunflower protein as a primary ingredient deserve per-product characterization; the concentrating effect of protein isolation can produce derivative products with notably elevated cadmium.

## Mitigation options

_Pending. Cultivar selection, soil management, and choice of growing region are the primary mitigation levers on the production side. For downstream processors, sourcing from documented lower-cadmium growing regions and choosing oil over meal in formulation are the primary options._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for oilseeds (pending ingest of CXS 193-1995).
- EU Regulation (EU) 2023/915 Cd MLs for oilseeds (pending ingest).

## Sources

- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
