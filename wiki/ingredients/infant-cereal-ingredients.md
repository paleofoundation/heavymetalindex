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
sources: 6
wiki_doi: null
updated: 2026-05-16
---

# Infant Cereal Ingredients

## Overview

Chekri et al. 2019 reports a cereal-based infant-food category and notes high aluminum values in infant biscuits and baby cereal with biscuit and cocoa. Collado-Lopez et al. 2025 reports cereals as the baby-food group with the highest median Cd concentration in the review, but the source does not split rice-based from non-rice cereal products in a way that maps directly to the HMTc rows. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 23–54 | low | — |
| Cd | n=3 | 3–13 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=3 | 3–16 | low | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

Variance in infant cereal ingredients tracks the source grain category. See [[ingredients/rice]] for the rice-ingredient iAs/Cd geographic variance; [[ingredients/wheat]] for wheat-ingredient Cd region-by-region; [[ingredients/oat]] for oat-ingredient profile; [[ingredients/non-rice-grains]] for barley, millet, quinoa, sorghum profiles. Cocoa-flavored infant cereals carry cocoa Cd from the cocoa ingredient (see [[ingredients/cocoa]] for the Andean vs West African Cd variance).

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review (75 studies, 580 baby foods); cereal-based baby foods had highest Cd median among processed-food groups (0.013 mg/kg) with 17% exceedance rate |
| 2 | [[sources/dokhtkkhatibi2024-infant-formula-baby-food-zahedan\|Khatibi et al. 2024]]. *Investigation of heavy metal concentrations and determination of estimated daily intake and health risk index infant formula and baby foods in Zahedan in 2020*, Sigma Journal of Engineering and Natural Sciences 42(2): 614-620 | 2024 | Peer-reviewed | IR Pb, Cd occurrence in 18 brands of powdered infant milk formula and 7 brands of infant cereals/baby foods collected by census from... (n=25) |
| 3 | [[sources/soni2024-additives-contaminants-infant-foods-review\|Soni et al. 2024]]. *Food additives and contaminants in infant foods: a critical review of their health risk, trends and recent developments*, Food Production, Processing and Nutrition | 2024 | Peer-reviewed | US/EU/IN Al occurrence in Narrative review of food additives and contaminants in infant foods; no original measurements. Synthesizes EFSA opinions, US FDA... |
| 4 | [[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil\|Toledo et al. 2024]]. *Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment*, International Journal of Environmental Research and Public Health 21(4):381 | 2024 | Peer-reviewed | BR Ag, Al, tAs, iAs, B, Ba, Cd, Co, Cr, Cu, Mn, Ni, Pb, Se, Sr, Zn occurrence in Eighteen Brazilian infant-cereal samples acquired in 2014-2015: 9 rice cereals, 5 multi-grain cereals containing rice, and 4 non-rice-based... (n=18) |
| 5 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS Al, Sb, tAs, Cd, Cr, Ni, Sn means for cereal-based infant foods (n=17, as-consumed); rice and non-rice combined; Sn data fills gap not covered by FDA TDS |
| 6 | [[sources/bfr2018-infant-food-cadmium-lead\|BfR 2018]]. *EU maximum levels for cadmium in food for infants and young children sufficient - Exposure to lead should fundamentally be reduced to the achievable minimum*, BfR Opinion No. 026/2018 | 2018 | Government report | DE/EU Cd, Pb occurrence in BfR assessment of German Federal Control Plan 2015 and Monitoring 2015 occurrence data for foods for infants and... (n=522) |
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
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
