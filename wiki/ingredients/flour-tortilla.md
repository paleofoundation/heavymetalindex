---
title: "Flour tortilla"
type: ingredient
commodity: flour-tortilla
label: "Flour tortilla"
aliases: ["Tortilla, flour", "flour tortilla"]
category: grain-product
tds_food:
  number: 63
  description: "Tortilla, flour"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [20.6, 30.4]
    p95_ppb: 31
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
    typical_ppb: [3.3, 7.4]
    p95_ppb: 7.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::63::mercury","role":"context","food_id":"63","food_name":"Tortilla, flour","metal_species":"tHg","basis":"as-sold dry-product composite; not dry-matter-normalized; no reconstitution conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":26,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":3.4,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
  Ni:
    status: populated
    typical_ppb: [60.8, 98.8]
    p95_ppb: 107
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
    typical_ppb: [0, 73]
    p95_ppb: 92.8
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
    typical_ppb: [3.8, 7.5]
    p95_ppb: 8.0
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
hero_image: /static/heroes/chapattis-flatbread-wheat.webp
hero_image_alt: "Round chapatti flatbreads, a dish of whole-wheat flour and wheat grains illustrating flour tortilla ingredient context."
---

# Flour tortilla

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 63, "Tortilla, flour." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Flour tortillas are made predominantly from refined wheat flour, water, fat, and leavening agents. The primary metal pathway is through the wheat grain, where cadmium is taken up from soil by the plant root system and partitions preferentially into the bran and germ fractions. Refining of wheat to produce white flour removes the bran and germ layers, substantially reducing cadmium relative to whole-wheat products; the endosperm retained in white flour carries a fraction of the cadmium present in whole grain. Lead reaches wheat primarily through soil contact and atmospheric deposition onto grain surfaces; milling and sifting remove surface-adherent dust, reducing Pb somewhat relative to field-collected grain. The fat added to flour tortillas (typically vegetable shortening or lard) introduces negligible additional metal load. Processing aids such as calcium propionate or baking powder contribute no meaningful metals at the concentrations used. The result is a grain product with a cadmium burden that is substantially lower than whole-wheat equivalents but not zero, and with the other analytes at concentrations broadly consistent with those of refined cereal products [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 20.6–30.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 3.3–7.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | Source context | Not quantified | — | — |
| Ni | n=2 | 60.8–98.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–73 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 3.8–7.5 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This ingredient is listed in the ingredient index and in the FDA Total Diet Study source list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 63: Tortilla, flour | tAs | 27 | 25 | 3.2–8.5 | 3 |
| 63: Tortilla, flour | Cd | 27 | 27 | 17–31 | 1 |
| 63: Tortilla, flour | Cr | 27 | 10 | 54–200 | 50 |
| 63: Tortilla, flour | Pb | 27 | 3 | 5–17 | 4 |
| 63: Tortilla, flour | tHg | 27 | 1 | 3.4 | 1 |
| 63: Tortilla, flour | Ni | 27 | 27 | 54–180 | 40 |
| 63: Tortilla, flour | U | 27 | 26 | 2.5–11 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The cadmium content of flour tortillas varies with the origin of the wheat and the degree of milling. Wheat grown in cadmium-enriched soils characteristic of certain phosphate-fertilized growing regions in Europe and North America carries higher intrinsic Cd than wheat grown on naturally low-Cd soils. Within refined white flour, the milling extraction rate is the principal technical driver: lower-extraction flours (70 to 72 percent, predominantly endosperm) carry less Cd than higher-extraction flours (80 to 85 percent, retaining more bran particles). Tortillas produced from masa harina (nixtamalized corn flour) would carry a distinctly different metal profile dominated by the corn grain's metal burden; this page covers wheat flour tortillas only, and corn tortillas are a separate commodity. Regional variation is not yet characterized in the corpus at the flour tortilla product level.

## Processing effects

The nixtamalization used in corn tortilla production (alkaline lime treatment) is not employed in standard wheat flour tortilla production; therefore, the alkali-based arsenic and heavy metal mobilization observed in masa processing does not apply here. Baking at high temperature does not volatilize or otherwise remove cadmium, lead, or other metals; concentrations in the finished tortilla reflect those in the raw flour adjusted for any moisture-loss concentration effect during cooking. The FDA TDS measures the tortilla in its ready-to-eat form (TDS Food 63, "Tortilla, flour"), which represents the consumer exposure basis [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Ingredient-derivative risk

Flour tortillas are used directly as a food wrapper or vehicle rather than as an intermediate ingredient in further refining processes. Tortilla chips, produced by cutting and frying flour tortillas, concentrate metals on a dry-weight basis proportional to the moisture reduction achieved by frying; a chip is roughly half the moisture of an unbaked tortilla, producing approximately twofold concentration per unit dry weight. Tortilla flour can be used in composite baked products, where it contributes metals proportional to its weight fraction.

## Mitigation options

### Sourcing levers

Specifying wheat origin from low-cadmium growing regions or from suppliers with documented grain Cd specifications is the most direct lever for reducing Cd in flour tortillas. European Union regulations for Cd in cereals incentivize suppliers operating in that market to select low-Cd cultivars and growing regions, and US manufacturers sourcing EU-certified wheat benefit from that selection pressure.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Selecting a lower extraction rate (more refined white flour) reduces Cd relative to higher-extraction or whole-wheat formulations. This is an established effect across the cereal literature, though quantitative magnitude varies by source wheat Cd concentration.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level testing of incoming wheat flour for Cd by ICP-MS provides the most actionable signal for manufacturers for whom Cd is the primary concern in this product line. Given that the FDA TDS median Cd in flour tortillas is approximately 26 ppb (n=27) [[sources/fda2022-tds-elements-fy2018-fy2020]], establishing an incoming flour specification of less than 100 ppb Cd (dry weight) would be consistent with delivering finished product below EU cereal maximum levels.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Cd in cereal-based processed foods is 0.10 mg/kg. For Pb in cereal-based processed foods intended for general consumption, the maximum level is 0.20 mg/kg. The flour tortilla as a finished product would be assessed against these limits at the ready-to-eat stage. No specific EU or US FDA maximum level applies to total arsenic in wheat-based products intended for general consumption; the FDA TDS data show tAs in flour tortillas at a median of approximately 4.3 ppb (n=27), well below any regulatory threshold that might be proposed by analogy with cereal-based infant foods [[sources/fda2022-tds-elements-fy2018-fy2020]].

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tHg.** The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Tortilla, flour (n=27) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
