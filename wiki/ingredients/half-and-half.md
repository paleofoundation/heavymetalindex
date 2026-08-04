---
title: "Half and half"
type: ingredient
commodity: half-and-half
label: "Half and half"
aliases: ["Cream, half and half", "half and half"]
category: dairy
tds_food:
  number: 167
  description: "Cream, half and half"
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

# Half and half

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 167, "Cream, half and half." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Half and half is a dairy cream product consisting of equal parts whole milk and cream. Metals in dairy products reach the consumer primarily through the cow's feed and water supply, following a parallel pathway to that described for whole milk and butter. Cadmium and lead absorbed from feed, pasture, and water are distributed in the cow's body primarily to soft tissues (kidney, liver) and bone; the fraction partitioning into blood and subsequently into milk is small. Within milk itself, metals associate preferentially with the aqueous casein-whey fraction rather than the fat globule membrane. Because half and half is richer in fat than whole milk, the relative dilution of the aqueous protein fraction means that metal concentrations in half and half tend to be at or below those in whole milk on a volume basis. The FDA FY2018-FY2020 Total Diet Study reported all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) below the reporting limit across all 27 samples, which is consistent with the general understanding that dairy fat products are among the lowest-metal food matrices in the food supply [[sources/fda2022-tds-elements-fy2018-fy2020]].

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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cream, half and half" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured half and half as TDS Food 167 with n=27 composite samples and found all seven analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) at or below the reporting limit across the entire distribution, including the minimum and maximum [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. This uniformly non-detectable result is consistent across the US retail market as sampled by the TDS. European survey data for dairy cream products similarly show very low or below-limit concentrations for Pb and Cd. The EU maximum level for Pb in raw milk and heat-treated milk is 0.020 mg/kg (20 ppb); cream and half and half are governed by the general dairy framework, and the empirical data suggest concentrations well below this threshold. Regional variation driven by cattle sourcing or pasture geochemistry is unlikely to produce meaningfully elevated concentrations in this commodity given the low milk-to-fat partitioning ratio.

## Processing effects

Half and half is produced by blending standardized cream with whole milk to achieve a fat content of approximately 10 to 18 percent, followed by pasteurization and homogenization. Pasteurization does not alter metal concentrations in any measurable way. Homogenization physically disrupts fat globules to distribute them uniformly but does not shift metal distribution between aqueous and fat phases in a way that would concentrate metals. Ultra-high-temperature (UHT) processing, used for shelf-stable half and half, also does not affect metal concentration. Storage in plastic or paper-based cartons rather than tin-lined cans means Sn migration is not a relevant pathway for this commodity.

## Ingredient-derivative risk

Half and half is used primarily as a culinary ingredient (in coffee, sauces, and baking) rather than as a base for further concentrated derivatives. Reduction of half and half in cooking concentrates all dissolved constituents, but the starting metal concentrations are so low that even a fivefold reduction would remain far below relevant regulatory limits. Heavy cream and whipping cream, which have higher fat content than half and half, would if anything have even lower metal concentrations because of greater fat-phase dilution of the aqueous fraction.

## Mitigation options

### Sourcing levers

Because cattle feed and water are the primary metal exposure pathways for dairy cattle, sourcing milk from herds with documented low-Cd pasture environments provides the principal risk reduction lever. For a product where all measured analytes are at or below reporting limits, the practical mitigation headroom is already achieved under ordinary US dairy production conditions.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Half and half is itself a formulation of milk and cream; no further formulation lever is applicable within the product definition.

### Testing and QC levers

Routine lot-level testing of half and half for metals is unlikely to yield actionable findings given the uniformly below-detection results in the TDS. Monitoring at the milk-intake level at the farm or collection point provides more cost-effective quality assurance.

### Packaging and storage levers

Half and half is packaged in plastic or paper-based cartons; Sn migration from tin-lined cans is not applicable. Storage temperature and duration affect microbiological quality but not metal concentration.

## Regulatory limits that apply

The EU sets a maximum level of 0.020 mg/kg (20 ppb) for Pb in raw milk, heat-treated milk, and milk for the manufacture of dairy-based products, applied on the wet-weight basis [[regulations/eu2023-contaminants-maximum-levels]]. Cream and half and half are governed under the same general dairy framework. No specific EU maximum level for Cd in milk or cream as a distinct matrix is set; dairy products generally fall below the Cd limits that apply to other food categories. The United States does not set statutory maximum levels for Pb or Cd in milk or dairy cream products in Federal regulation, though FDA's Total Diet Study provides ongoing surveillance. Codex Alimentarius general standards address Pb in milk at 0.020 mg/kg, consistent with the EU position [[regulations/codex-cadmium-mls]].

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Cream, half and half (n=27); all analytes reported as zero (BDL) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
