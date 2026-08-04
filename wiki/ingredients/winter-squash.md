---
title: "Winter squash"
type: ingredient
commodity: winter-squash
label: "Winter squash"
aliases: ["Squash, winter, fresh/frozen, boiled", "winter squash"]
category: vegetable
tds_food:
  number: 126
  description: "Squash, winter, fresh/frozen, boiled"
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
    typical_ppb: [1.2, 4.0]
    p95_ppb: 4.3
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
    typical_ppb: [0, 6.2]
    p95_ppb: 8.1
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
    p95_ppb: 254
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
    p95_ppb: 0.8
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

# Winter squash

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 126, "Squash, winter, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Winter squash (Cucurbita maxima and related cucurbit species, including butternut squash, acorn squash, and Hubbard squash) is a lower-risk vegetable category for heavy metal contamination relative to root vegetables and leafy greens, for reasons that are mechanistic rather than incidental. Unlike root vegetables such as carrots, beets, or yams, the edible portion of winter squash develops as an aboveground fruit rather than as an underground storage organ, so direct soil-particle deposition and soil-contact absorption during development are substantially reduced. Cadmium is taken up by the plant root system and translocated upward, but translocation efficiency to fruit tissue in cucurbits is lower than in leafy or root tissues, resulting in Cd concentrations in the edible flesh that are generally well below those observed in leafy greens or root vegetables grown on comparable soils. Lead, whose translocation from root to shoot and fruit is limited in most plant species by chelation and sequestration at the root endodermis, is typically at or near the analytical reporting limit in squash flesh. Nickel and arsenic follow similar patterns of low translocation to cucurbit fruit tissue. The FDA FY2018-FY2020 Total Diet Study confirms this general picture for boiled winter squash sampled from the US retail market, with most analytes at or below detection in the majority of composite samples ([[sources/fda2022-tds-elements-fy2018-fy2020|1]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 1.2–4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–6.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Squash, winter, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 4.4 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 480 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 3.9 | in profile |
| tAs | 27 | 0 | 17 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Within the winter squash category, variation in heavy metal content is driven primarily by soil conditions at the growing site rather than by varietal differences among cucurbit species. Squash grown on soils with elevated Cd from historical phosphate fertilizer application or naturally elevated parent material can accumulate more Cd in fruit tissue than squash grown on low-Cd soils, though the absolute concentrations remain low relative to root vegetables or cereals on equivalent soils. In the FDA FY2018-FY2020 Total Diet Study, Cd in winter squash samples ranged from 0 to 4.4 ppb (median approximately 1.6 ppb, n=27), and total arsenic ranged from 0 to 17 ppb with most samples at or below detection, the upper tail driven by individual composites ([[sources/fda2022-tds-elements-fy2018-fy2020|1]]). These distributions reflect mixed US growing-region origins typical of retail composite sampling. Nickel showed the widest distribution among detectable analytes in that dataset, ranging from 0 to 480 ppb, suggesting that Ni in squash is episodic and origin-dependent. Variety-level data for Cd across butternut, acorn, and Hubbard types are not resolved in the current corpus.

## Processing effects

Common culinary preparations for winter squash, including roasting, steaming, boiling, and pureeing, do not remove or materially reduce heavy metal concentrations in the edible flesh. Boiling in water leaches some water-soluble metals into the cooking water, but the magnitude of this leaching effect for low-baseline vegetables is small and not well characterized in the corpus for this specific commodity. The thick outer rind of winter squash is not consumed and is removed before or after cooking; because the rind may accumulate soil-deposited metals more than the inner flesh, its removal provides some incidental reduction in surface contamination. Freezing and commercial processing into purees or soups do not alter metal concentrations relative to the fresh commodity. Canning adds the potential for Sn introduction from can liner erosion, though this is relevant primarily for tin-plated cans and is a process-contact consideration rather than an agricultural one.

## Ingredient-derivative risk

Winter squash pureed for use in soups, baby food pouches, or baked goods carries the same metal profile as fresh squash. Concentration effects from reduction cooking (reducing a large volume of puree to a thick paste) can elevate per-gram metal concentrations proportionally to the degree of water removal, but because baseline concentrations are low, the absolute values in concentrated derivatives are unlikely to approach regulatory limits. Squash incorporated into mixed vegetable purees for infant foods contributes its low baseline metal profile to the blended product, making it a diluting ingredient relative to higher-risk vegetables in the same formulation.

## Mitigation options

### Sourcing levers

Sourcing from growers with documented soil-screening programs for Cd and Pb provides assurance for products where this commodity is a significant ingredient. Given the generally low baseline contamination of winter squash, sourcing levers are of lower priority here than for higher-accumulation commodities such as leafy greens or root vegetables. Country-of-origin or regional provenance documentation supports traceability for compliance and quality programs.

### Agronomic levers

Soil pH management reduces Cd bioavailability to plants; because winter squash is not a high-Cd-accumulating crop, this lever matters primarily in unusual soil situations (former industrial land, high-phosphate-fertilized sites). _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling and removing the outer rind before consumption eliminates any surface-deposited metals from soil contact or spray drift. Boiling with discard of cooking water provides marginal leaching of water-soluble metals, though the quantitative benefit for this low-baseline commodity is not established in the corpus.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

For finished-product applications where winter squash is a primary ingredient, lot-level testing provides compliance documentation against applicable vegetable limits. Given low baseline concentrations, surveillance testing at standard commercial frequencies is appropriate rather than elevated lot-level frequencies.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation 2023/915 sets maximum levels for vegetables in the fresh, frozen, or dried state. For vegetables generally, the Pb ML is 0.10 mg/kg (100 ppb) on a wet-weight basis. The Cd ML for vegetables other than leafy vegetables, fresh herbs, and fungi is 0.050 mg/kg (50 ppb) wet weight; winter squash falls within this general vegetable category. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/eu-2023-915-cadmium]] for scope and matrix definitions. Codex STAN 193-1995 sets a Cd ML of 0.050 mg/kg for vegetables (fresh weight), consistent with the EU value; see [[regulations/codex-cadmium-mls]]. The US FDA does not maintain a specific action level for Cd or Pb in vegetables outside the Closer to Zero baby-food context; winter squash in pureed infant food applications is subject to the FDA's draft and final guidance values applicable to vegetable-based baby foods rather than to fresh vegetable limits.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Squash, winter, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Ni, U, tAs |
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
