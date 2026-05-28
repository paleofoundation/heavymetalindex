---
title: Infant Cereal Ingredients
type: ingredient
commodity: infant-cereal-ingredients
aliases: [baby cereal, cereal flour, infant biscuit, cereal-based foods, cereal-based infant foods]
category: cereal-ingredient
contamination_profile:
  Pb: { status: populated, typical_ppb: [23, 54], p95_ppb: 125, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [3, 13], p95_ppb: 17, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [3, 16], p95_ppb: 48, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [grain-source, rice-status, cocoa-addition, fortification, processing]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/rice]]", "[[ingredients/cocoa]]", "[[ingredients/chocolate]]"]
used_in_products: ["[[products/baby-cereals-dry-non-rice]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/teething-and-snacks-non-rice]]", "[[products/teething-and-snacks-rice-based]]"]
audience: [regulator, educator, consumer, app]
sources: 4
wiki_doi: null
updated: 2026-05-16
---

# Infant Cereal Ingredients

Chekri et al. 2019 reports a cereal-based infant-food category and notes high aluminum values in infant biscuits and baby cereal with biscuit and cocoa. Collado-Lopez et al. 2025 reports cereals as the baby-food group with the highest median Cd concentration in the review, but the source does not split rice-based from non-rice cereal products in a way that maps directly to the HMTc rows. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 23–54 | low | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/original2020-original-a\|2]] |
| Cd | n=3 | 3–13 | low | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/original2020-original-a\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 3–16 | low | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/original2020-original-a\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

Variance in infant cereal ingredients tracks the source grain category. See [[ingredients/rice]] for the rice-ingredient iAs/Cd geographic variance; [[ingredients/wheat]] for wheat-ingredient Cd region-by-region; [[ingredients/oat]] for oat-ingredient profile; [[ingredients/non-rice-grains]] for barley, millet, quinoa, sorghum profiles. Cocoa-flavored infant cereals carry cocoa Cd from the cocoa ingredient (see [[ingredients/cocoa]] for the Andean vs West African Cd variance).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods); cereal-based baby foods had highest Cd median among processed-food groups (0.013 mg/kg) with 17% exceedance rate |
| 2 | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|Khatibi et al. 2024]]. *Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020*, Sigma Journal of Engineering and Natural Sciences 42(2): 614-620 | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil\|Toledo et al. 2024]]. *Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment*, International Journal of Environmental Research and Public Health 21(4):381 | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for cereal-based infant foods (n=17, as-consumed); rice and non-rice combined; Sn data fills gap not covered by FDA TDS |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Infant cereal ingredients (the source-grain inputs to commercial dry infant cereal products) carry heavy metals through the upstream grain-production pathway: cereal-specific soil-uptake of Cd and Pb, plus iAs in rice specifically. The dominant ingredient categories are rice, wheat, oats, barley, multigrain blends, and (less commonly) corn and quinoa. See [[ingredients/rice]], [[ingredients/wheat]], [[ingredients/oat]], [[ingredients/maize]], and [[ingredients/non-rice-grains]] for the per-grain source synthesis.

The cereal-ingredient stage is upstream of finished baby cereal manufacturing (see [[ingredients/baby-cereals-dry]] for the finished-product synthesis). The dominant supplier-side decisions are origin sourcing, cultivar selection, and post-harvest processing. Vitamin-mineral premix ingredients added downstream at the baby-cereal manufacturer stage are a separate input pathway (covered at [[ingredients/baby-cereals-dry]] and [[ingredients/vitamin-mineral-premix]]).

The HMTc panel concerns for infant cereal ingredients are iAs (rice ingredient), Pb (cereal-supplier-region pathway), and Cd (whole-grain ingredients more than refined-flour ingredients).

## Processing effects

Cereal-ingredient processing prior to baby cereal manufacturing involves milling, fortification, particle-size reduction for fine-flour suitability, and bulk shipping. Milling separates bran from endosperm: refined-flour cereal ingredients carry 40-60 percent less Cd than whole-grain equivalents. For rice specifically, polishing reduces iAs.

Heat treatment (pre-cooking, toasting) at the ingredient-supplier stage does not change panel metals. Cooling and bulk-storage have no metal impact.

## Ingredient-derivative risk

The infant-cereal-ingredient category is itself upstream; its derivative is finished dry infant cereal ([[ingredients/baby-cereals-dry]]). Each source-grain ingredient feeds into the finished baby cereal proportional to recipe fraction.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) operate at the cereal-supplier stage: low-iAs rice origins, low-Cd non-rice-grain origins, supplier-grain lot-level testing.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the upstream grain-production stage (see per-grain ingredient pages: [[ingredients/rice]], [[ingredients/wheat]], [[ingredients/oat]]).

**Processing levers** ([[mitigation/processing]]) include polishing/refining decisions (white-flour vs whole-grain for source ingredient), iAs-rinsing protocols for rice ingredient, and milling-equipment specification.

**Formulation levers** ([[mitigation/formulation]]) at the baby-cereal manufacturer stage include rice-vs-non-rice grain choice (substantial iAs reduction) and grain-blend formulation.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature for infant-cereal-ingredient supply. Supplier-side iAs and Cd testing on shipments is standard.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) apply at the finished-product stage rather than the ingredient stage.

## Regulatory limits that apply

The applicable regulatory framework is the finished-baby-cereal framework at [[ingredients/baby-cereals-dry]]: FDA Closer to Zero iAs 100 ppb action level for infant rice cereal, Pb 20 ppb for dry infant cereal, EU 2023/915 binding MLs for infant cereal-based foods. Ingredient-stage supplier specifications align with the finished-product MLs through supplier-side testing.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [83afba8](https://github.com/paleofoundation/heavymetalindex/commit/83afba8) | 2026-05-18 | autonomy: daemon tick 2026-05-18T20-18-55Z — gap-healing + extraction + pooling + briefings |
| [f97c3e2](https://github.com/paleofoundation/heavymetalindex/commit/f97c3e2) | 2026-05-18 | autonomy: daemon tick 2026-05-18T03-29-36Z — gap-healing + extraction + pooling + briefings |
| [21f4b32](https://github.com/paleofoundation/heavymetalindex/commit/21f4b32) | 2026-05-17 | checkpoint: accumulated multi-agent work + daemon transient-list broaden |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
<!-- END: hmi-page-history -->
