---
title: "Iceberg lettuce"
type: ingredient
commodity: iceberg-lettuce
label: "Iceberg lettuce"
aliases: ["Lettuce, iceberg, raw", "iceberg lettuce"]
category: leafy-green
tds_food:
  number: 109
  description: "Lettuce, iceberg, raw"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [16, 61.2]
    p95_ppb: 64.4
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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 168]
    p95_ppb: 215
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
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
sources: 2
---

# Iceberg lettuce

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 109, "Lettuce, iceberg, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Iceberg lettuce is a head-forming variety of Lactuca sativa with a notably high water content (approximately 95 percent) relative to other leafy vegetables. Like all leafy vegetables, it is capable of accumulating cadmium through root uptake from soil and lead through atmospheric deposition on leaf surfaces. However, several features of iceberg lettuce distinguish its contamination profile from denser leafy greens such as spinach or kale. The tight head structure means that outer wrapper leaves, which are the primary site of atmospheric Pb deposition, largely enclose and protect the inner leaves that reach the consumer; outer leaves are typically removed during harvesting and packing. The high water content dilutes metal concentrations on a fresh-weight basis relative to more concentrated leafy vegetables. Soil Cd is the dominant pathway for the Cd detected in iceberg lettuce, operating through root uptake into the edible leaf tissue; the FDA FY2018-FY2020 TDS data show Cd detectable in all 27 samples, with a median of 27 ppb and a maximum of 73 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. Nickel is also consistently detected, with a median of 90 ppb and a maximum of 250 ppb, reflecting the general tendency of leafy vegetables to accumulate Ni from soil. Lead was below the reporting limit across all 27 TDS samples, confirming that the head-leaf structure and commercial trimming practices effectively limit Pb exposure for the edible product.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 16–61.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–168 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Lettuce, iceberg, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 8.4 | 73 | in profile |
| Cr | 27 | 0 | 100 | in profile |
| Ni | 27 | 0 | 250 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured iceberg lettuce (TDS Food 109, "Lettuce, iceberg, raw") with n=27 composite samples and found Cd ranging from a minimum of 8.4 ppb to a maximum of 73 ppb, with a median of 27 ppb; Ni ranging from 0 to a maximum of 250 ppb with a median of 90 ppb; and Cr with a maximum of 100 ppb [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. Pb, tAs, tHg, and U were below the reporting limit across all samples. The TDS reflects the US retail market, which sources iceberg lettuce predominantly from California and Arizona. Iceberg lettuce grown in regions with elevated soil Cd (associated with certain phosphate-fertilized soils or historically contaminated fields) would be expected to show higher Cd concentrations; California growing regions for iceberg lettuce are generally well-characterized with respect to soil quality, and the TDS median of 27 ppb Cd is consistent with this agricultural context. European data for lettuce (various varieties) generally show Cd in the range of 10 to 100 ppb depending on soil and cultivation conditions.

## Processing effects

Iceberg lettuce is consumed primarily raw after trimming and washing. Removal of outer wrapper leaves, which is standard commercial practice, is the most significant processing step for metal reduction: outer leaves exposed to atmospheric deposition carry more surface-deposited Pb and environmental particulate than protected inner leaves. Washing of cut or whole leaves with potable water removes a portion of surface-deposited metals but does not affect cadmium that has been absorbed through root uptake into leaf tissue. Extended submersion washing removes more surface contamination than brief rinsing; the magnitude of the reduction for Pb is likely meaningful in high-deposition environments, but for Cd — the dominant concern based on TDS data — washing provides minimal benefit because the metal is within the leaf cell rather than on the surface.

## Ingredient-derivative risk

Iceberg lettuce is rarely processed into concentrated derivatives. Salad mixes and pre-washed bags represent the main processing pathway; shredded or chopped iceberg lettuce in foodservice and retail products retains the same metal profile as the intact head because no concentration step is involved. Juice or extraction of iceberg lettuce, which is uncommon, would not concentrate metals beyond what is present in the raw leaf on a juice-equivalent basis.

## Mitigation options

### Sourcing levers

Selecting iceberg lettuce from producers with soil Cd monitoring programs and from regions with documented low soil Cd provides the primary reduction lever for this analyte. USDA Good Agricultural Practices (GAP) certification and equivalent EU frameworks address soil quality monitoring in ways that capture metal risk.

### Agronomic levers

Maintaining soil pH above 6.5 reduces Cd bioavailability and root uptake in leafy vegetables. Avoiding the application of impure phosphate fertilizers with high Cd content on lettuce fields directly reduces soil Cd load accumulation over successive growing seasons.

### Processing levers

Commercial trimming of outer wrapper leaves, which is standard in the iceberg lettuce supply chain, is the most practically significant processing lever. Enhanced washing of cut leaves with acidic or chelating rinse solutions has been studied in experimental contexts but is not standard commercial practice.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given that Cd is consistently detected across the full TDS distribution and ranges up to 73 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]], lot-level or origin-level Cd testing provides a useful quality signal for buyers seeking to minimize dietary Cd contribution from leafy vegetables. Ni testing is also warranted given the high median (90 ppb) and maximum (250 ppb) observed in the TDS data.

### Packaging and storage levers

Iceberg lettuce is not packaged in tin-lined cans; Sn migration is not a relevant concern. Refrigerated storage under modified atmosphere reduces microbial risk and extends shelf life without affecting metal concentration.

## Regulatory limits that apply

EU Regulation 2023/915 sets maximum levels for Pb in leafy vegetables at 0.30 mg/kg fresh weight and for Cd in leafy vegetables at 0.20 mg/kg fresh weight [[regulations/eu2023-contaminants-maximum-levels]]. The FDA TDS maximum for Cd in iceberg lettuce (73 ppb, equivalent to 0.073 mg/kg) is well below the EU Cd limit of 0.20 mg/kg. The EU Cd limit for lettuce specifically under [[regulations/eu-2023-915-cadmium]] is 0.20 mg/kg fresh weight; Cd levels in the TDS distribution are consistent with compliance. The United States does not set a statutory maximum for Pb or Cd in leafy vegetables. Codex Alimentarius does not set a specific ML for Cd or Pb in lettuce as a distinct commodity [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Lettuce, iceberg, raw (n=27); detectable concentrations for Cd, Cr, Ni |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
