---
title: "Chicken potpie"
type: ingredient
commodity: chicken-potpie
label: "Chicken potpie"
aliases: ["Chicken potpie, frozen, heated", "chicken potpie"]
category: mixed-food
tds_food:
  number: 152
  description: "Chicken potpie, frozen, heated"
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
    typical_ppb: [6.1, 7.3]
    p95_ppb: 7.4
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
    typical_ppb: [9.4, 55.8]
    p95_ppb: 56.9
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

# Chicken potpie

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 152, "Chicken potpie, frozen, heated." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chicken potpie is a composite baked product whose heavy metal burden reflects the combined contributions of its constituent ingredient streams. The pastry crust, made from wheat flour, carries cadmium derived from wheat grain bran-fraction cadmium, which enters the grain through root uptake from agricultural soil. Vegetables in the filling (peas, carrots, corn, potatoes) contribute cadmium and in some cases nickel through root-uptake pathways specific to each crop. The chicken muscle fraction contributes very little to any of the ten profiled metals; it is the lowest-risk ingredient in the recipe by mass-specific metal content. Gravy and sauce components add minimal metal unless they include concentrated ingredients such as soy-based seasonings or mushroom-derived flavourings. The frozen-and-heated format (as measured in the FDA TDS) does not introduce additional metal from packaging, as the product is typically packaged in a metal pie tin or cardboard sleeve, neither of which is a documented source of significant metal migration. The FDA Total Diet Study FY2018-FY2020 found cadmium (median 6.3 ppb) and nickel (median approximately 47 ppb, max 58 ppb) as the primary detectable metals across 3 composite samples [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 6.1–7.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 9.4–55.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Chicken potpie, frozen, heated" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 6.1 | 7.5 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 58 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides the primary quantitative reference for this food matrix, with 3 composite samples of frozen chicken potpie (heated) reporting cadmium at a median of 6.3 ppb (range 6.1-7.5 ppb), nickel at a median of approximately 47 ppb (range 0-58 ppb), and lead, total arsenic, total mercury, chromium, and uranium below reporting limits [[sources/fda2022-tds-elements-fy2018-fy2020]]. The very small sample size (n=3) substantially limits confidence in the distributional estimates. Variation across brands and product lines would be expected primarily from the wheat-flour content of the pastry crust (which drives Cd), the vegetable composition and origin (which drives Ni and can affect Cd), and the quality of the wheat flour sourced. Products with thicker crust relative to filling would carry proportionally more wheat-derived cadmium per serving.

## Processing effects

Baking the potpie at high temperature does not substantially change the metal content of the ingredients; heavy metals are thermally stable under normal baking conditions and are not volatilised or destroyed. Freezing and reheating, the standard retail format, similarly do not alter the metal content. The crust's baking causes some moisture loss, which concentrates metals in the pastry layer on a per-gram basis relative to unbaked dough; this effect is modest. The filling components are pre-cooked before assembly, and any aqueous leaching of metals during pre-cooking of vegetables is retained within the filling and concentrated by evaporation, so the finished-product metal load from vegetables is not substantially reduced by processing.

## Ingredient-derivative risk

Chicken potpie as measured in the TDS is a finished composite product rather than a raw ingredient; its "derivative risk" is expressed through recipe variation. Products with higher proportions of dark leafy vegetable filling relative to chicken and pastry would carry higher cadmium from the vegetable fraction. Products incorporating mushrooms or legumes in the filling would carry higher nickel. Products with a greater pastry-to-filling ratio would carry more wheat-derived cadmium. These represent the primary formulation variables driving metal load in this product class.

## Mitigation options

### Sourcing levers

Specifying low-cadmium wheat flour for the pastry crust is the most impactful sourcing lever, as the crust fraction drives the cadmium signal. For the vegetable filling, selecting vegetables from regions with low soil cadmium background (particularly for peas and carrots, which are moderate Cd accumulators) reduces the filling's contribution.

### Agronomic levers

Agronomic levers apply to the wheat and vegetable ingredient streams; see [[ingredients/wheat-flour]] and the relevant vegetable ingredient pages for specific levers. The chicken fraction does not benefit from additional agronomic intervention given its already low metal burden.

### Processing levers

Adjusting the pastry-to-filling ratio to reduce the crust fraction per serving reduces the wheat-derived cadmium exposure per serving without changing any individual ingredient's metal content. Vegetable pre-cooking with discard of blanching water can reduce cadmium from vegetable components modestly.

### Formulation levers

Substituting a portion of whole-wheat crust flour with refined (lower-bran) pastry flour reduces cadmium from the crust fraction without substantially affecting the product category. Using peas and corn as the primary vegetables rather than higher-Cd accumulators (such as root vegetables grown in high-Cd soils) reduces the vegetable-fraction contribution. Increasing the chicken fraction relative to pastry and vegetables reduces overall metal load per serving.

### Testing and QC levers

Given the low cadmium concentrations observed in the TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]] (median 6.3 ppb, maximum 7.5 ppb in the finished product), routine lot-level testing for chicken potpie is lower priority than for higher-risk categories such as rice-based products or dark chocolate. For manufacturers sourcing wheat from high-cadmium regions or using vegetable ingredients from known high-Cd growing areas, upstream testing of those ingredients is a more efficient control point.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the general contaminants framework ([[regulations/eu2023-contaminants-maximum-levels]]) do not set a single composite limit for chicken potpie as a finished product; the applicable limits are those for each constituent ingredient category (cereal, poultry, vegetables). No specific US FDA action level applies to frozen potpie; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) similarly addresses ingredient categories. The TDS data showing Cd at a median of 6.3 ppb and all Pb and As measurements below reporting limits in the finished product is consistent with a product well within any applicable limits at the ingredient level.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Chicken potpie, frozen, heated (n=3); detectable concentrations for Cd, Ni |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
