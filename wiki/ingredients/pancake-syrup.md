---
title: "Pancake syrup"
type: ingredient
commodity: pancake-syrup
label: "Pancake syrup"
aliases: ["Syrup, pancake", "pancake syrup"]
category: sweetener
tds_food:
  number: 170
  description: "Syrup, pancake"
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 1.1]
    p95_ppb: 1.3
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

# Pancake syrup

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 170, "Syrup, pancake." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Commercial pancake syrup is a formulated sweetener, distinct from real maple syrup, that is predominantly composed of high-fructose corn syrup or glucose-fructose syrup, water, artificial flavors, caramel color, and preservatives. The metal profile of this product is determined by the metal content of the corn-derived glucose syrup that constitutes its primary ingredient. Corn starch hydrolysis and glucose syrup refining are multi-step processes involving liquefaction, saccharification, ion-exchange purification, and evaporation; the ion-exchange step in particular removes most metal-containing impurities from the glucose stream, resulting in a refined syrup with very low metal concentrations. Caramel color, produced by controlled heat treatment of sugar solutions, does not introduce significant metals. Artificial flavorings and preservatives contribute negligible metals at the use levels applied in this product. The net result is that pancake syrup has one of the lowest heavy metal profiles of any food product in the current corpus. FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] for pancake syrup (TDS Food 170, n=3) show all analytes at or below detection limits with the sole exception of U, which was detected at trace levels (max 1.4 ppb).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.1 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Syrup, pancake" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 1.4 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Commercial pancake syrup does not exhibit meaningful geographic or variety-based variation in metal content because the product is manufactured from highly refined corn syrup rather than from a primary agricultural commodity that tracks soil conditions. The principal source of any trace metal variability would be the water used in manufacturing (which may contribute trace U and other metals at very low levels depending on source water quality) and equipment used in production. The FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] represent the only quantitative occurrence dataset for this product in the current corpus (n=3 composites) and confirm a uniformly low-metal profile across all analytes tested. Brand-to-brand variation is expected to be minimal.

## Processing effects

The corn-syrup refining process (involving liquefaction, saccharification, ion exchange, and evaporation) is the primary processing pathway that produces this product's low metal profile. The ion-exchange purification step removes most ionic metal species from the glucose stream. Subsequent blending with flavors, color, and preservatives occurs at concentrations too low to introduce metals in detectable quantities. The finished product has not been identified in the literature or monitoring programs as accumulating metals during storage in normal commercial packaging.

## Ingredient-derivative risk

Pancake syrup is itself a finished consumer product rather than an intermediate ingredient; however, it is occasionally listed as an ingredient in confectionery, baked goods, and processed food formulations as a flavored sweetener. In those applications, its uniformly low metal content means it does not drive the heavy metal profile of the composite product. Real maple syrup (a distinct product not covered on this page) has different processing characteristics and may carry higher metal concentrations from tree-xylem uptake and evaporator equipment; that product is not covered here.

## Mitigation options

### Sourcing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Not applicable; pancake syrup is a formulated product based on refined corn syrup, not a directly harvested agricultural commodity.

### Processing levers

Maintaining ion-exchange resin quality and replacement schedules in glucose syrup manufacturing is the primary processing control for ensuring continued low metal content. Monitoring source water quality for U and other trace metals is relevant for manufacturers in regions with elevated groundwater U.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the uniformly below-detection or near-detection levels observed across all analytes in TDS monitoring [[sources/fda2022-tds-elements-fy2018-fy2020]], routine heavy metal testing of pancake syrup is of very low priority for most food safety applications. For manufacturers incorporating this ingredient into infant or young-child products, periodic supplier verification testing provides an appropriate assurance baseline.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

No specific maximum level for Pb, Cd, or other metals applies exclusively to pancake syrup under EU Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] or under Codex CXS 193-1995. The product would fall within the broader sugar and sweetener category for regulatory classification. No US federal maximum level specifically addresses pancake syrup for metal contaminants. General food safety provisions and HACCP frameworks apply.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Syrup, pancake (n=3); detectable concentrations for U |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
