---
title: "Baked potato with peel"
type: ingredient
commodity: baked-potato-with-peel
label: "Baked potato with peel"
aliases: ["Potato, with peel, baked", "baked potato"]
category: root-vegetable
tds_food:
  number: 137
  description: "Potato, with peel, baked"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 6.9]
    p95_ppb: 10.5
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [25, 63.4]
    p95_ppb: 64.7
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 7.8]
    p95_ppb: 9.6
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 87.8]
    p95_ppb: 92
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 38.5
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 3.5]
    p95_ppb: 5.3
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 1
---

# Baked potato with peel

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 137, "Potato, with peel, baked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Potatoes are root-adjacent tubers grown in direct soil contact, and their metal content reflects both root uptake from surrounding soil and surface accumulation on the skin during growth and post-harvest handling. The peel (skin) accumulates higher concentrations of Pb and Cd than the internal flesh because the skin is the interface between the tuber and the soil environment; atmospheric deposition of Pb during crop growth and particulate soil Pb adhering to the skin surface add to this surface burden. When the potato is consumed with the peel, the combined metal load of flesh plus skin is delivered.

The FDA FY2018-FY2020 TDS data for "Potato, with peel, baked" (TDS Food 137, n=27) reflect this pattern: Cd is detectable in all 27 samples with a median of 41 ppb, a p90 of 63.4 ppb, and a maximum of 66 ppb; Pb is detectable in the upper distribution with a p90 of 6.92 ppb and a maximum of 12 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Nickel shows a median of 52 ppb and a maximum of 100 ppb. Total arsenic is present with a median of 3.8 ppb and a maximum of 18 ppb. These values are consistent with the potato's status as a moderate-accumulator root vegetable for Cd and a low-to-moderate accumulator for Pb. Potatoes are a priority matrix for the FDA's Closer to Zero program specifically when processed for baby and toddler food, given the combination of relatively elevated Cd and Pb with widespread infant consumption.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0–6.9 | 10.5 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 25–63.4 | 64.7 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0–7.8 | 9.6 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–87.8 | 92 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0 | 38.5 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0–3.5 | 5.3 | high | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Potato, with peel, baked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 20 | 25 | 41 | 63.4 | 64.7 | 66 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 38.5 | 69 | in profile |
| Ni | 27 | 0 | 0 | 52 | 87.8 | 92 | 100 | in profile |
| Pb | 27 | 0 | 0 | 0 | 6.92 | 10.46 | 12 | in profile |
| U | 27 | 0 | 0 | 1.4 | 3.48 | 5.3 | 8.9 | in profile |
| tAs | 27 | 0 | 0 | 3.8 | 7.76 | 9.58 | 18 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 137, n=27) are the primary quantitative occurrence source in the current corpus ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). These composite retail samples do not provide geographic breakdown by state or country of origin. Potato-growing regions in the United States vary in soil cadmium and lead content; Idaho, Washington, Oregon, and Maine are major production states with differing soil profiles. Variety selection may influence accumulation: russet (the dominant US commercial variety) versus waxy varieties (Yukon Gold, red potatoes) have not been systematically compared for metal accumulation in the current corpus. The TDS data represent potatoes as baked with peel; peeled variants would show materially different distributions, particularly for Pb, which concentrates at the skin surface.

## Processing effects

Baking does not remove metals from the potato matrix; the oven heat-cooking step retains all metals within the tissue. The critical processing variable is whether the peel is retained or removed before consumption. Peeling potatoes removes the skin layer where Pb surface deposition and soil Cd accumulation are concentrated; this is the single most impactful processing lever for Pb reduction in the potato matrix. Boiling peeled potatoes further reduces the metal load by leaching some water-soluble metal fractions into the cooking water, but this effect is secondary to peeling. For commercially processed potato purées (baby food), mashing and processing after peeling effectively combines flesh-level concentrations into the final product without the peel's concentrated surface fraction. For skin-on processed products (skin-on chips, baked potato skin snacks), the peel fraction's higher metal content carries through into the finished product.

## Ingredient-derivative risk

The most important derivatives from a regulatory standpoint are processed root vegetable purées for infant food. The FDA's Closer to Zero program has proposed an action level of 20 ppb Pb for processed foods made with root vegetables (including potato) when intended for babies and young children ([[regulations/fda-ctz-Pb-rootveg-20ppb]]). A baked potato purée with peel retained would carry the combined Pb load of flesh and skin; peeled potato purée would carry primarily the flesh fraction and would likely meet the 20 ppb action level more consistently. Skin-on potato chips represent another high-peel-fraction derivative with elevated Pb and Cd concentrations relative to flesh-only products. French fries (typically without skin) and mashed potato (typically without skin) are lower-risk derivatives from a metal standpoint.

## Mitigation options

### Sourcing levers

Sourcing from potato-growing regions with documented low soil Cd and Pb reduces the baseline metal load in the tuber. Field-level soil testing for Cd and Pb before planting provides a direct sourcing verification lever. _Quantified source-switching reduction factors for potatoes are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Soil pH management (maintaining pH above 6.0) reduces Cd bioavailability and plant uptake. Liming acidic soils in potato-growing fields is a standard agronomic practice with documented effects on Cd uptake in root vegetables. Cultivar selection for lower Cd accumulation is an active area of agricultural research. _Quantified reduction magnitudes specific to potatoes are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling potatoes before cooking or processing is the single most effective processing lever for Pb reduction, as the skin concentrates surface-deposited and soil-contact Pb. For commercial baby food potato purées, peeling before mashing is standard practice and likely brings Pb concentrations materially below the with-peel distribution. _Quantified Pb reduction from peeling in a baby-food-processing context is not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Formulations targeting baby food should specify peeled potato as the ingredient to avoid the skin's concentrated metal load. Substituting some potato content with lower-metal starchy vegetables (sweet potato flesh, squash) is a formulation lever for reducing per-serving Pb exposure in blended baby food products.

### Testing and QC levers

Lot-level Pb testing against the FDA Closer to Zero action level of 20 ppb for root vegetable purées ([[regulations/fda-ctz-Pb-rootveg-20ppb]]) should be part of a QC program for any processor of potato-based infant food. Cd testing against EU MLs for potato provides an additional compliance verification point.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The FDA has proposed an action level of 20 ppb Pb for processed foods containing root vegetables (including potatoes) that are intended for babies and young children under the Closer to Zero program ([[regulations/fda-ctz-Pb-rootveg-20ppb]]). This action level applies to the processed food product rather than to the raw potato ingredient. In the European Union, Regulation (EU) 2023/915 sets a Pb ML of 0.10 mg/kg (100 ppb) and a Cd ML of 0.10 mg/kg (100 ppb) for potatoes (noting that potatoes carry a higher Cd ML than most other vegetables under EU law, reflecting the literature on potato as a moderate Cd accumulator) ([[regulations/eu2023-contaminants-maximum-levels]]). For processed potato products intended for infants and young children, the EU applies stricter Pb limits. No US FDA action level for Cd or tAs in fresh or processed potato exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]). The Codex Alimentarius ML for Cd in potatoes is 0.10 mg/kg (100 ppb), consistent with the EU value ([[regulations/codex-cadmium-mls]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Potato, with peel, baked (n=27); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
<!-- END: hmi-page-history -->
