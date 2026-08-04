---
title: "White sugar"
type: ingredient
commodity: white-sugar
label: "White sugar"
aliases: ["Sugar, white, granulated", "white sugar"]
category: sweetener
tds_food:
  number: 169
  description: "Sugar, white, granulated"
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
sources: 3
---

# White sugar

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 169, "Sugar, white, granulated." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

White granulated sugar is among the lowest-risk food matrices on the wiki for heavy metals. The sugar-refining process removes essentially all non-sucrose material from cane or beet juice through a sequence of clarification, evaporation, crystallisation, and centrifugation steps. Heavy metals, which are associated with the plant cell walls, proteins, and other organic matter in the raw juice, are co-removed with the non-sucrose impurities during these purification stages. The final crystallised sucrose product retains only trace quantities of metals, if any are detectable at all. The FDA TDS FY2018-FY2020 data for white granulated sugar (n=3) report zero values for all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) across all samples ([[sources/fda2022-tds-elements-fy2018-fy2020]]), confirming that white sugar is effectively a metal-free matrix under normal manufacturing conditions. The negligible metal content of white sugar means it does not contribute materially to dietary heavy metal exposure even at high consumption volumes.

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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Sugar, white, granulated" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=3) report all seven measured analytes as zero (below detection limits) in white granulated sugar ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The small sample size reflects the expectation that this is a consistently clean matrix rather than a high-priority surveillance target. No geographic or source-crop variation in white sugar metal content is characterised in the current corpus, consistent with the expectation that the refining process eliminates metals regardless of whether the source crop is sugarcane or sugar beet.

## Processing effects

The refining sequence for white sugar is the active mechanism that removes metals. Raw cane juice or beet juice contains dissolved metals derived from soil uptake by the crop. Clarification (addition of lime followed by settling or filtration) removes particulate matter and co-precipitates dissolved metals with calcium and phosphate complexes. Decolourisation (activated carbon or ion-exchange resin treatment) removes remaining coloured impurities and traces of organic material including any metal-organic complexes. Crystallisation from evaporated sugar liquor separates pure sucrose crystals from the molasses mother liquor; heavy metals, being associated with non-sucrose components, partition into the molasses rather than into the crystalline sucrose. Centrifugation separates the crystals from the residual syrup. Each successive crystallisation step progressively concentrates metals in the molasses, with white sugar representing the purest sucrose fraction. The metal-rich molasses is a separate co-product used in animal feed and fermentation; it is not part of the white sugar product pathway.

## Ingredient-derivative risk

White sugar is used as a sweetener across a very large number of processed food products. Because its own metal contribution is effectively zero, its presence in a formulation does not add to the product's metal burden. Impure sugar products, namely raw sugar, turbinado sugar, muscovado, and especially molasses, carry progressively higher metal concentrations as refining stages are reduced or reversed. Icing sugar (powdered white sugar with added starch, typically corn starch or tapioca starch) may introduce trace metals from the starch component, but at the small weight fraction that starch typically represents, this is negligible. Brown sugar (white sugar with molasses added back) occupies an intermediate position: its metal content reflects the molasses fraction's contribution, which can be several times higher than white sugar on a per-gram basis.

## Mitigation options

### Sourcing levers

White sugar requires no specific sourcing-level metal mitigation beyond standard food-grade procurement; the refining process is the operative control. For supply chains that use raw, unrefined, or minimally refined sugar derivatives (e.g. date sugar, coconut sugar, or panela), separate metal characterisation is warranted because those products bypass some or all refining steps.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard multi-stage refining to white granulated sugar is the effective processing lever. Maintaining refinery process conditions (pH control, effective clarification, complete molasses separation) ensures metals remain below detection in the final product.

### Formulation levers

When a sweetener with some retained mineral content is desired for nutritional or sensory reasons (e.g. muscovado in baked goods), the trade-off against higher metal content should be acknowledged for products formulated for infants or high-consumption populations.

### Testing and QC levers

Routine heavy metal testing of white granulated sugar is unlikely to yield actionable signals under standard manufacturing conditions. Testing may be warranted when sourcing from non-standard refineries, from regions with limited regulatory oversight, or when elevated metal concentrations are identified in a finished product and sugar is the only unexplained ingredient.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

No metal-specific maximum levels are promulgated for white granulated sugar under [[regulations/eu2023-contaminants-maximum-levels]] or [[regulations/fda-closer-to-zero]]; the expectation in existing contaminant regulations is that refined sugar is a low-risk matrix. The Codex General Standard for Contaminants (CXS 193-1995, [[regulations/codex-cadmium-mls]]) establishes limits for Pb in sugar (0.5 mg/kg, or 500 ppb) and for certain other metals, but these limits are rarely triggered by commercially refined white sugar. EU food-grade specifications for sugar may set additional purity requirements that implicitly constrain metal content.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Sugar, white, granulated (n=3); all analytes reported as zero (BDL) |
| 2 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 3 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
