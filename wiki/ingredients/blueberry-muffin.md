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
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::65::lead","role":"context","food_id":"65","food_name":"Muffin, blueberry","metal_species":"Pb","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":26,"reporting_limit_min_ppb":4,"reporting_limit_max_ppb":4,"min_lower_bound_ppb":0,"max_lower_bound_ppb":5,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
  Cd:
    status: populated
    typical_ppb: [7.3, 10]
    p95_ppb: 10.7
    confidence: low
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
    typical_ppb: [0, 4.3]
    p95_ppb: 4.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::65::mercury","role":"value","food_id":"65","food_name":"Muffin, blueberry","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  Ni:
    status: populated
    typical_ppb: [0, 56.8]
    p95_ppb: 60.8
    confidence: low
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
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::65::chromium","role":"context","food_id":"65","food_name":"Muffin, blueberry","metal_species":"Cr","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":26,"reporting_limit_min_ppb":50,"reporting_limit_max_ppb":50,"min_lower_bound_ppb":0,"max_lower_bound_ppb":56,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0.7, 2.8]
    p95_ppb: 3.4
    confidence: low
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

# Blueberry muffin

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 65, "Muffin, blueberry." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

A blueberry muffin is a composite grain-based product whose metal content reflects the blended contribution of its constituent ingredients: wheat flour, fat (oil or butter), eggs, sugar, blueberries, and leavening agents. No single ingredient dominates the metal profile; rather, the overall contamination profile is a diluted mixture of each ingredient's characteristic burden. Wheat flour contributes trace amounts of Cd and Pb from cereal grain accumulation in soil; blueberries contribute whatever metals they carry from acidic soil uptake; eggs and fats are generally low-metal; sugar and leavening are minor contributors. The result is a lower per-gram metal burden than grain-only products (bread, pasta) because of the dilution by fat and sugar.

The FDA FY2018-FY2020 TDS data for "Muffin, blueberry" (TDS Food 65, n=27) show Cd detectable in all 27 samples with a median of 8.5 ppb and a maximum of 12 ppb; Ni was detectable in the upper distribution (maximum 72 ppb); tAs showed a maximum of 5.3 ppb; U was present with a median of 1.9 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Pb was below detection for most samples (maximum 5 ppb). These distributions are consistent with a grain-based bakery product containing moderate amounts of fruit: Cd primarily from the flour, Ni from the combination of flour and blueberries, tAs from the cereal grain fraction.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | Source context | Not quantified | — | — |
| Cd | n=2 | 7.3–10 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–4.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–56.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | Source context | Not quantified | — | — |
| Sn | data gap | — | — | — |
| U | n=2 | 0.7–2.8 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 65: Muffin, blueberry | tAs | 27 | 12 | 3.3–5.3 | 3 |
| 65: Muffin, blueberry | Cd | 27 | 27 | 6.8–12 | 1 |
| 65: Muffin, blueberry | Cr | 27 | 1 | 56 | 50 |
| 65: Muffin, blueberry | Pb | 27 | 1 | 5 | 4 |
| 65: Muffin, blueberry | tHg | 27 | 0 | ND in all composites | 1 |
| 65: Muffin, blueberry | Ni | 27 | 8 | 45–72 | 40 |
| 65: Muffin, blueberry | U | 27 | 24 | 1.1–4.3 | 1 |
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

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**Pb.** The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

**Cr.** The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Muffin, blueberry (n=27); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
