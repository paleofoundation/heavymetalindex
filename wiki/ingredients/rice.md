---
title: Rice
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
drivers: [soil-uptake, flooded-paddy, geography, cultivar, processing]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/brown-rice]]", "[[ingredients/rice-bran]]", "[[ingredients/rice-protein-concentrate]]"]
used_in_products: ["[[products/infant-rice-cereal]]", "[[products/rice-milk]]", "[[products/gluten-free-baking]]", "[[products/protein-powder]]", "[[products/crackers]]", "[[products/puffed-rice-snacks]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-03
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

Rice mitigation is structured across all four [[mitigation/index|mitigation classes]], with the strongest evidence base for inorganic arsenic and a partial overlap with cadmium mitigation. The four strategy pages identify the relevant interventions and the priority primary literature for each; per-protocol efficacy data is pending the underlying source promotion.

[[mitigation/agronomic|Agronomic mitigation]] for rice is dominated by water-management regime selection (intermittent flooding, alternate wetting and drying, aerobic cultivation reduce inorganic arsenic uptake but can increase cadmium uptake), cultivar selection (low-As-accumulator and low-Cd-accumulator varieties), and silicon and zinc soil amendment for competitive uptake antagonism. The water-management trade-off between inorganic arsenic and cadmium is the most consequential per-soil decision facing rice growers in HMT&C-relevant supply chains.

[[mitigation/processing|Processing mitigation]] for rice is dominated by polishing (removes the bran where both inorganic arsenic and cadmium concentrate, at the cost of nutrient loss documented in [[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]), parboiling, and rinsing or cooking-water discard (substantial inorganic arsenic reductions in finished consumed rice).

[[mitigation/supply-chain-screening|Supply-chain screening]] for rice is dominated by geographic-risk-segmented sourcing (basmati-India and California rice are documented lower-arsenic origins than typical South-Asian and Southeast-Asian arsenic-rich-aquifer-zone rice) and by irrigation-water arsenic testing in supplier regions.

[[mitigation/formulation|Formulation mitigation]] for rice-containing finished products includes ingredient substitution (oat or almond bases for plant-based beverages, basmati or California rice for unspecified-origin rice in infant cereals) and sorbent co-formulation, documented in the corpus paper FM_12691791 for plant-based beverage applications.

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **iAs**: a major concern for rice — rice is the highest-iAs staple food because flooded-paddy redox chemistry mobilizes soil arsenic into pore water where roots take it up ([[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]]). Brown rice and rice bran carry higher iAs than polished white rice ([[sources/su-2023-arsenic-brown-rice|Su et al. 2023]]). The FDA Closer to Zero inorganic-arsenic action level for infant rice cereal is 100 ppb ([[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]]). See [[metals/arsenic]] and [[sources/navaretnam-2025-rice-as-speciation|Navaretnam et al. 2025]].
- **Baby-food context**: Collado-Lopez et al. 2025 reports rice/rice-mix baby foods with median Pb 0.008 mg/kg and median As 0.048 mg/kg among detected items; this is a review-level signal and not a substitute for primary row-level rice-cereal or snack distributions ([[sources/collado-lopez2025-heavy-metals-baby-food-formula]]).

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for rice (pending ingest of CXS 193-1995).
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum level for rice, quinoa, wheat bran, and wheat gluten is 0.15 mg/kg (150 ug/kg).
- [[regulations/eu2023-contaminants-maximum-levels]] — EU inorganic arsenic maximum levels: 0.10 mg/kg (100 ug/kg) for rice destined for production of food for infants and young children; 0.15 mg/kg (150 ug/kg) for non-parboiled milled rice; 0.25 mg/kg (250 ug/kg) for parboiled rice, husked rice, and rice flour; 0.30 mg/kg (300 ug/kg) for rice waffles, wafers, crackers, cakes, flakes, and popped breakfast rice; 0.030 mg/kg (30 ug/kg) for non-alcoholic rice-based drinks.
- [[regulations/fda-closer-to-zero]] — FDA CTZ inorganic arsenic action level of 100 ppb in infant rice cereal is adjacent but not a cadmium rule.

## Related finished-product evidence

[[sources/damato2026-inorganic-arsenic-rice-based-beverages]] reports inorganic arsenic in finished rice-based beverages. Those values belong on [[products/plant-milks-rice-based]], not in this ingredient profile, unless a later ingest separates rice ingredient values from beverage matrix values.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 50, "Rice, white, enriched, cooked." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] — review-level rice/rice-mix baby-food signal for Pb and As.
- [[sources/eu-2023-915-contaminants-maximum-levels]] — EU 2023/915 rice, rice-product, and rice-drink maximum levels for Cd and iAs.
- See [[metals/cadmium]] for the cross-source synthesis that identifies rice as a population-level contributor.
