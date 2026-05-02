---
title: Wheat
type: ingredient
commodity: wheat
aliases: [wheat grain, wheat flour, whole wheat flour, wheat bran, wheat germ, semolina, durum wheat, hard red wheat, soft white wheat, wheat protein, vital wheat gluten]
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
drivers: [soil-uptake, cultivar, zinc-status, phosphate-fertilization, geography]
lower_risk_variants: ["[[ingredients/refined-white-flour]]"]
higher_risk_variants: ["[[ingredients/wheat-bran]]", "[[ingredients/wheat-germ]]", "[[ingredients/whole-wheat-flour]]", "[[ingredients/wheat-protein-concentrate]]"]
used_in_products: ["[[products/bread]]", "[[products/pasta]]", "[[products/cereals]]", "[[products/baked-goods]]", "[[products/baby-cereal]]", "[[products/wheat-based-snacks]]", "[[products/crackers]]", "[[products/couscous]]", "[[products/bulgur]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Wheat

_Stub page. Contamination profile populates on the next ingest wave. Wheat is identified across [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] and [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] as one of the top population-level dietary cadmium contributors, with the bran and germ fractions carrying higher cadmium than refined endosperm._

## Why this commodity accumulates cadmium

Wheat takes up cadmium from soil through its root system, with uptake efficiency influenced by soil cadmium concentration, zinc status, soil pH, and cultivar. Durum wheat has been documented as a more efficient cadmium accumulator than common bread wheats, producing elevated cadmium in pasta-grade wheat products. Within the wheat kernel, cadmium partitions preferentially to the bran and germ rather than the endosperm, so refined white flour carries the lowest cadmium among common wheat derivatives and whole-wheat products carry the highest.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for wheat grain and flour of 0.030 mg/kg and for wheat bran and germ of 0.065 mg/kg, reflecting the approximately two-fold bran-over-endosperm concentration factor. Durum wheat, rice bran, and whole-wheat products in cadmium-elevated growing regions carry values above the category mean._

## Processing effects

_Pending. Milling that removes bran and germ lowers the cadmium content of the resulting flour relative to whole grain; fermentation and baking do not remove cadmium. Wheat-protein isolation (vital wheat gluten) concentrates cadmium from the source grain proportionally with protein enrichment._

## Ingredient-derivative risk

Derivative wheat products vary substantially in cadmium content by the fraction of the kernel they represent. Refined white flour, semolina, and pasta made from refined wheat are at or near the endosperm-level mean; whole wheat flour, bran-enriched cereals, wheat bran supplements, and wheat germ products are above the whole-grain mean by the bran-concentration factor. Wheat protein products (vital wheat gluten, seitan) concentrate cadmium from the source grain; per-product characterization is necessary.

## Mitigation options

_Pending. Cultivar selection (non-accumulator lines), zinc amendment of soils (zinc-cadmium antagonism reduces plant cadmium uptake), soil pH management, and milling practices that remove bran and germ are the primary mitigation levers._

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **Pb**: the FDA Closer to Zero 20 ppb Pb action level for dry infant cereals applies to wheat-based infant cereal ([[sources/fda-ctz-Pb-babyfood-2025|FDA CTZ Pb 2025]]; see [[regulations/fda-ctz-Pb-cereal-20ppb]]).

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for cereal grains (pending ingest of CXS 193-1995). The CCCF17 2024 discussion on quinoa (held separate from cereals at 0.15 mg/kg) recorded that one Member delegation cited cereals as a "serious contributor to exposure to cadmium" in their region, consistent with the wiki's cross-source synthesis.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum levels for cereals: 0.10 mg/kg (100 ug/kg) for cereals except listed rows; 0.050 mg/kg (50 ug/kg) for barley and rye; 0.15 mg/kg (150 ug/kg) for rice, quinoa, wheat bran, and wheat gluten; 0.18 mg/kg (180 ug/kg) for durum wheat; 0.20 mg/kg (200 ug/kg) for wheat germ.
- [[regulations/fda-ctz-Pb-cereal-20ppb]] — FDA CTZ 20 ppb lead action level for dry infant cereals is the adjacent Pb rule; any future Cd analogue under the CTZ program would apply similarly to wheat-based infant cereal.

## Sources

- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] — EFSA Panel on Contaminants in the Food Chain, 2009. Scientific Opinion on Cadmium in Food.
- [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] — JECFA 91st meeting, 2020 (published 2022). Cadmium: dietary exposure assessment.
