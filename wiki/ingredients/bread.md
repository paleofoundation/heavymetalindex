---
type: ingredient
commodity: bread
title: "Bread"
label: "Bread"
aliases: []
category: baked-good
contamination_profile:
  Pb: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [50, 200], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 7
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Bread

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
| Cr | n=2 | 50–200 | low | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|1]], [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|Saraiva et al. 2021]]. *Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | FR/DK/EU Cr, Cr-VI occurrence in Selection of bread and breakfast cereal samples analysed at Anses (France) and Technical University of Denmark; exact n... |
| 2 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal) | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni occurrence in 57 adults (28 men, 29 women, age 19–49) from Baku, Azerbaijan; 18 food items analyzed; blood and hair... (n=57) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Bread inherits its heavy-metal load from its source grains (wheat dominantly; rye, spelt, barley, oats, corn, and rice in respective bread variants) plus contributions from added ingredients (salt, leavening agents, fortifying minerals) and packaging contact. Wheat, the dominant bread grain in Western markets, carries cadmium proportional to soil-Cd and soil-pH in the production region; the bran fraction concentrates Cd, so whole-grain breads carry higher Cd than white-flour breads from the same wheat source. Lead in bread is generally low except where wheat has been grown on Pb-contaminated soils (historic mining areas, lead-arsenate-pesticide-treated orchards converted to grain production) or where added salt or processing aids introduce Pb. Aluminum can appear at moderate concentrations in some bread products from baking-powder or other leavening additives.

The HMTc panel concerns for bread are Pb, Cd, Al (in chemically-leavened products), and Sn (for canned bread varieties such as Boston brown bread, which are uncommon).

## Ranges by source, region, and variety

The dominant axis of variance is whole-grain vs refined-flour. Whole-grain wheat bread carries 1.5-3× the Cd of equivalent white-flour bread because the bran layer (retained in whole-grain milling) concentrates Cd. Rye bread is generally slightly higher in Cd than wheat bread because rye grain is a more efficient Cd accumulator than wheat. Multigrain breads inherit a weighted blend of their source-grain profiles.

Geographic variance tracks the source-grain growing region. Wheat grown in regions with elevated soil-Cd (parts of Australia, some areas of the EU, regions with historic phosphate-fertilizer-driven Cd accumulation) yields bread with higher Cd than wheat from low-Cd regions. The FDA Total Diet Study ([[sources/fda2022-tds-elements-fy2018-fy2020]]) reports per-bread-product Pb, Cd, and other metals as US-market composites.

Variety effects are documented at the bread-type level (sliced sandwich bread vs sourdough vs flatbread vs corn tortilla vs rice cake), and at the flour-percentage level within whole-grain products. Sprouted-grain breads, where the grain is germinated before milling, can have modestly different metal profiles than non-sprouted; the magnitude is small relative to whole-grain-vs-white variance.

## Processing effects

Bread processing redistributes but does not remove heavy metals from the source grain. Milling separates the bran (high-Cd) from the endosperm (low-Cd); white flour is the endosperm-only fraction and carries 40-60 percent less Cd than the whole grain. Whole-wheat flour, retaining the bran, carries the source-grain Cd essentially unchanged. Fermentation (sourdough, leavened breads) does not appreciably alter metal load; some studies report small phytate-reduction effects that could marginally change bioavailability without changing total mass. Baking at typical oven temperatures (180-220°C) does not change heavy-metal content.

Baking pan and surface contact during baking is a minor additional contribution. Aluminum-foil-lined pans, anodized aluminum bakeware, and tin-coated steel pans all contribute trace metals at levels small relative to source-grain inheritance. Bread baked in cast-iron Dutch ovens does not meaningfully shift Fe-as-contamination because iron is not in the HMTc panel.

## Ingredient-derivative risk

Bread crumbs and bread flour (where bread is dried and ground for use as a recipe ingredient) carry the same per-mass heavy-metal load as the source bread. Toast carries slightly higher per-serving metal because toasting removes water, concentrating the metals on a per-mass basis (the same total per-slice). French toast and bread pudding, where bread is mixed with eggs, milk, and sugar, follow standard recipe-dilution arithmetic.

Bread-based ready meals (sandwiches, paninis, pizza on bread base) inherit the bread metal load proportional to the bread fraction in the recipe.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Single-origin wheat sourcing from documented low-Cd growing regions reduces source-grain Cd. Specifying soft white wheat versus hard red wheat (which differ in Cd-accumulation efficiency in some studies) is a secondary lever.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the wheat-production stage rather than the bread-bakery stage. Cd-low cultivar selection, soil pH management (liming acidic wheat soils to reduce Cd bioavailability), and avoidance of high-Cd phosphate fertilizers are standard. These are wheat-producer decisions; bread brands access them via supplier specifications.

**Processing levers** ([[mitigation/processing]]) include the whole-grain vs white-flour decision (white flour carries less Cd but loses the nutritional benefits of bran), milling-equipment specification (food-grade milling to avoid grinding-introduced Pb), and selection of refined salt versus mineral salt (some unrefined salts carry higher metals).

**Formulation levers** ([[mitigation/formulation]]) include leavening choice (yeast-leavened bread carries no Al contribution; some chemically-leavened breads can carry Al from sodium aluminum phosphate or aluminum-containing baking powders), and fortifying-mineral source specification.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level testing of finished bread for Pb and Cd, particularly for infant-and-child-marketed bread products. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not consequential for bread metal load on typical retail shelf-life timescales.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in cereals and cereal products (including bread). Cereal-product-specific Cd ML is distinct from raw cereal grain ML.
- Codex Alimentarius CXS 193-1995 — sets Cd MLs for cereal grains; cereal-product-specific limits derive from national authorities and the EU implementation.
- FDA does not maintain a binding action level for Pb or Cd in bread specifically; the FDA Closer to Zero program covers processed baby foods, not adult bread products.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to bread sold in California, with the serving-based screen driving most enforcement attention.


