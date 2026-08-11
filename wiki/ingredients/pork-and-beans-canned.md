---
title: "Canned pork and beans"
type: ingredient
commodity: pork-and-beans-canned
label: "Canned pork and beans"
aliases: ["Pork and beans, canned", "pork and beans"]
category: legume-composite
tds_food:
  number: 39
  description: "Pork and beans, canned"
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
    typical_ppb: [3, 3.3]
    p95_ppb: 3.4
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
    typical_ppb: [512, 560]
    p95_ppb: 565
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
sources: 1
---

# Canned pork and beans

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 39, "Pork and beans, canned." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Canned pork and beans is a composite food product containing cooked white beans (haricot beans, Phaseolus vulgaris) in a sweetened tomato sauce with a small inclusion of pork fat or pork pieces. The heavy metal profile of this product reflects contributions from two distinct ingredient pathways: cadmium from the bean fraction, which enters via soil uptake during legume growth, and tin (Sn) from the can itself through dissolution of the tinplate can wall into the food.

Beans accumulate cadmium through root uptake from soil, consistent with the behaviour of other legumes. White beans grown on soils with elevated cadmium, particularly in European production zones where phosphate-containing fertilizers have raised soil Cd over decades, carry Cd concentrations that contribute to dietary exposure. The pork fraction in this product is a minor contributor to heavy metals because pork muscle tissue is low in cadmium and lead, reflecting the low bioaccumulation factor of these metals in mammalian muscle.

Tin migration from tinplate cans is the most distinctive heavy metal pathway for this product category. Standard tinplate can walls contain a thin layer of metallic Sn over a steel substrate. When acidic or moderately acidic food contents contact the can surface, Sn dissolves electrochemically into the food at rates that are a function of pH, temperature, storage time, and whether the can interior is lacquered. Pork and beans in tomato sauce has a moderately acidic pH (approximately 4.5-5.5), which is sufficient to drive Sn migration over storage periods of months to years. Unlined (un-lacquered) tinplate cans allow the highest Sn migration; lacquered cans dramatically reduce Sn dissolution by physically separating food from metal. EU and Codex regulatory limits for Sn in canned foods are set specifically to manage this migration pathway.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 3–3.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 512–560 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Ranges by source, region, and variety

The Cd concentration in canned pork and beans reflects the Cd burden of the white bean fraction, which varies by growing region. European white bean production, particularly from soils with elevated Cd from phosphate fertilizer accumulation, tends to show higher Cd than beans grown on low-Cd North American soils. The FDA TDS FY2018-FY2020 data (TDS Food 39, n=3) shows Cd at a consistent 3.0-3.4 ppb and Ni at 510-570 ppb in US market canned pork and beans ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The Sn concentration in canned pork and beans is not captured in the TDS multi-element dataset for this food item at the tested analytes; Sn migration varies by can type (lacquered vs unlined) and storage duration, and EU monitoring data show that unlined can Sn can exceed 100 mg/kg in canned tomato-based products stored at ambient temperature.

## Processing effects

Retort sterilisation (high-temperature autoclaving) of the filled can is the critical processing step. High temperatures accelerate Sn dissolution from tinplate walls into the food, with Sn migration rates increasing non-linearly with temperature. This means that the Sn in retorted canned food at the point of sale reflects Sn mobilised during the sterilisation step as well as any ongoing Sn dissolution during storage. Blanching and cooking of beans before canning reduces some of the Cd in brine (if the blanch water is discarded), but this leaching effect is minor relative to the Cd already bound in bean tissue. The low-oxygen headspace maintained in sealed cans retards oxidation but does not affect metal chemistry.

## Ingredient-derivative risk

Canned pork and beans is itself the primary processed form on this page. The pork fat inclusion is a minor ingredient that contributes negligible metals. The tomato-based sauce contributes some background Cd and Pb from tomato, but at concentrations lower than the bean fraction. The total Sn in the canned product is determined by the can technology used (lacquered or unlined) and the storage history, not by the food ingredients themselves.

## Mitigation options

### Sourcing levers

Sourcing white beans from low-Cd growing regions (North America, certain South American origins) and requiring supplier Cd specifications reduces the bean-fraction Cd contribution. For the can itself, specifying BPA-free lacquered cans from qualified can manufacturers is the primary sourcing intervention for Sn control.

### Agronomic levers

Soil pH management in white bean-growing regions (liming above pH 6.5) reduces Cd bioavailability in the crop and is an effective lever in contracted bean supply chains. This applies to the bean ingredient, not to the finished canned product.

### Processing levers

Using lacquered (internally coated) cans instead of unlined tinplate is the single highest-impact processing lever for Sn in canned pork and beans. Lacquering reduces Sn migration by roughly an order of magnitude relative to unlined tinplate. Minimising retort temperature and duration consistent with sterilisation requirements reduces the Sn mobilised during the sterilisation step. Rapid post-retort cooling reduces the duration of high-temperature Sn dissolution.

### Formulation levers

In composite products where pork and beans is an ingredient, the proportion of this ingredient in the recipe determines the Sn and Cd contribution from this component. Reducing bean inclusion and substituting with lower-Cd legumes from documented clean-soil origins reduces the Cd load per serving.

### Testing and QC levers

Lot-level testing of canned pork and beans for Sn is the standard QC approach in markets where the EU 200 mg/kg Sn ML applies (in particular for European export or production). Cd testing of incoming beans provides assurance for the bean-fraction contribution. Testing for Pb and Cd in finished canned product addresses both the ingredient-origin and any can-leach pathways.

### Packaging and storage levers

Specifying lacquered cans is the packaging lever with the greatest impact on Sn. Storing finished canned product at cool ambient temperatures reduces the rate of ongoing Sn migration during shelf life. Monitoring shelf-life and stock rotation practices limits the duration over which Sn can accumulate in stored product. Once a can is opened, the remaining food should be transferred to a non-metal container if not consumed immediately, as dissolved-oxygen contact with the cut can edge accelerates further Sn dissolution.

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for tin in canned solid foods is 200 mg/kg. This limit is set specifically for Sn migration from tinplate cans and is applied to the food as consumed from the can. The parallel EU Cd ML for canned beans falls under the general legume and cereal provisions. Pb limits for canned vegetables apply under the same regulation.

Codex Alimentarius has adopted a maximum level for Sn in canned foods; the Codex Sn ML for canned solid foods is 250 mg/kg ([[regulations/codex-cadmium-mls]]). No US FDA action level for Sn in canned foods applies under the current regulatory framework; FDA has not established a specific Sn ML for canned food in the US, though Sn is regulated as a food additive in the context of preservative use. FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not currently list canned pork and beans as a priority category.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Pork and beans, canned" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 3 | 3.4 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 510 | 570 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Pork and beans, canned (n=3); detectable concentrations for Cd, Ni |
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
