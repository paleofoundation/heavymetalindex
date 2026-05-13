---
title: "Blueberry muffin"
type: ingredient
commodity: blueberry-muffin
label: "Blueberry muffin"
aliases: ["Muffin, blueberry", "blueberry muffin"]
category: grain-product
tds_food:
  number: 65
  description: "Muffin, blueberry"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  tHg:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-12
sources: 1
---

# Blueberry muffin

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 65, "Muffin, blueberry." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

A blueberry muffin is a composite grain-based product whose metal content reflects the blended contribution of its constituent ingredients: wheat flour, fat (oil or butter), eggs, sugar, blueberries, and leavening agents. No single ingredient dominates the metal profile; rather, the overall contamination profile is a diluted mixture of each ingredient's characteristic burden. Wheat flour contributes trace amounts of Cd and Pb from cereal grain accumulation in soil; blueberries contribute whatever metals they carry from acidic soil uptake; eggs and fats are generally low-metal; sugar and leavening are minor contributors. The result is a lower per-gram metal burden than grain-only products (bread, pasta) because of the dilution by fat and sugar.

The FDA FY2018-FY2020 TDS data for "Muffin, blueberry" (TDS Food 65, n=27) show Cd detectable in all 27 samples with a median of 8.5 ppb and a maximum of 12 ppb; Ni was detectable in the upper distribution (p90 56.8 ppb, maximum 72 ppb); tAs showed a p90 of 4.34 ppb and a maximum of 5.3 ppb; U was present with a median of 1.9 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Pb was below detection for most samples (maximum 5 ppb). These distributions are consistent with a grain-based bakery product containing moderate amounts of fruit: Cd primarily from the flour, Ni from the combination of flour and blueberries, tAs from the cereal grain fraction.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | data gap | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | data gap | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Muffin, blueberry" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 6.8 | 7.28 | 8.5 | 10 | 10.7 | 12 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 56 | in profile |
| Ni | 27 | 0 | 0 | 0 | 56.8 | 60.8 | 72 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 5 | in profile |
| U | 27 | 0 | 0.66 | 1.9 | 2.82 | 3.42 | 4.3 | in profile |
| tAs | 27 | 0 | 0 | 0 | 4.34 | 4.47 | 5.3 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 65, n=27) are the sole quantitative occurrence source in the current corpus ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). TDS composite samples represent commercial blueberry muffins purchased at retail across multiple US cities, reflecting the blend of ingredient sources used by commercial bakeries at the time of sampling. Variation in the Cd and tAs concentrations of individual muffin batches would be driven primarily by the flour source (wheat grown in higher or lower soil-Cd regions) and the blueberry fraction (which may vary in metal content by season and provenance). The TDS's n=27 samples span multiple purchase periods and likely capture reasonable batch-to-batch variation for US commercial product. No non-US or artisanal-bakery occurrence data appear in the current corpus.

## Processing effects

Baking a muffin does not remove metals; the oven heat-curing step distributes ingredients into a finished baked matrix without reducing metal concentrations in the flour, fat, or fruit components. Chemical leavening (baking powder, baking soda) and heat-treatment do not interact with heavy metals in a way that reduces concentrations. Formulation-level dilution (the ratio of flour to fat to fruit to liquid in the recipe) is the main determinant of the per-gram metal burden in the baked product: muffins with a higher flour fraction relative to total weight carry more Cd and tAs per gram, while muffins with a higher fat-and-sugar fraction dilute the grain-derived metals. Commercial blueberry muffins sold at TDS-sampled retail are standardized formulations; artisanal variants may have significantly different flour-to-total-weight ratios.

## Ingredient-derivative risk

As a finished bakery product, the blueberry muffin itself is a derivative of its ingredients rather than a source for further downstream derivatives. Its relevance to this wiki is as a representative composite grain-and-fruit bakery product in the FDA TDS dataset; the data inform the expected metal burden of grain-based bakery products with modest fruit content relative to, for example, bread (grain-only, higher Cd per gram) or fruit purée (fruit-only, different metal profile). The TDS values for this composite product are used as one data point in understanding the metal exposure from bakery-product consumption patterns in the US diet.

## Mitigation options

### Sourcing levers

Sourcing wheat flour from regions or producers with documented low soil Cd reduces the flour fraction's contribution to Cd in the finished muffin. Selecting low-Cd-accumulating wheat varieties is a grain-level sourcing lever. _Quantified reduction factors for these levers in blueberry muffin production are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Reducing the proportion of wheat flour relative to total weight (substituting with lower-metal ingredients such as oat flour from low-Cd oat varieties, or increasing the fat-and-fruit fraction) would reduce per-gram Cd and tAs in the finished muffin. However, formulation-level changes that affect product texture and functionality require testing to maintain product quality. _Quantified reduction factors for these formulation levers are not available in the current corpus._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

A blueberry muffin is a composite bakery product, and no commodity-specific EU or US regulatory ML is established for blueberry muffins as a product category under current regulations. The applicable regulatory framework derives from the ingredient-level limits: wheat flour is subject to grain Cd MLs under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), and blueberries are subject to fresh fruit Pb and Cd limits. At the finished-product level, the EU general food safety framework (Regulation (EC) No 178/2002) applies, but no specific ML for Pb, Cd, or tAs in muffins is established in the current corpus. In the United States, no FDA action level for Pb, Cd, or tAs in bakery products exists under the Closer to Zero framework ([[regulations/fda-closer-to-zero]]); that program has focused on processed infant and toddler foods rather than general-population bakery products. No Codex Alimentarius ML specific to composite grain bakery products appears in the current corpus.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Muffin, blueberry (n=27); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

