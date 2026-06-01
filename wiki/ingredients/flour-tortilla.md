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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [20.6, 30.4]
    p95_ppb: 31
    confidence: high
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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [60.8, 98.8]
    p95_ppb: 107
    confidence: high
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
    confidence: high
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
    confidence: high
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

# Flour tortilla

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 63, "Tortilla, flour." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Flour tortillas are made predominantly from refined wheat flour, water, fat, and leavening agents. The primary metal pathway is through the wheat grain, where cadmium is taken up from soil by the plant root system and partitions preferentially into the bran and germ fractions. Refining of wheat to produce white flour removes the bran and germ layers, substantially reducing cadmium relative to whole-wheat products; the endosperm retained in white flour carries a fraction of the cadmium present in whole grain. Lead reaches wheat primarily through soil contact and atmospheric deposition onto grain surfaces; milling and sifting remove surface-adherent dust, reducing Pb somewhat relative to field-collected grain. The fat added to flour tortillas (typically vegetable shortening or lard) introduces negligible additional metal load. Processing aids such as calcium propionate or baking powder contribute no meaningful metals at the concentrations used. The result is a grain product with a cadmium burden that is substantially lower than whole-wheat equivalents but not zero, and with the other analytes at concentrations broadly consistent with those of refined cereal products [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0–2 | 5 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 20.6–30.4 | 31 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 3.3–7.4 | 7.7 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 60.8–98.8 | 107 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0–73 | 92.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 3.8–7.5 | 8.0 | high | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Tortilla, flour" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 17 | 20.6 | 26 | 30.4 | 31 | 31 | in profile |
| Cr | 27 | 0 | 0 | 0 | 73 | 92.8 | 200 | in profile |
| Ni | 27 | 54 | 60.8 | 80 | 98.8 | 107 | 180 | in profile |
| Pb | 27 | 0 | 0 | 0 | 2 | 5 | 17 | in profile |
| U | 27 | 0 | 3.76 | 4.9 | 7.5 | 7.99 | 11 | in profile |
| tAs | 27 | 0 | 3.26 | 4.3 | 7.4 | 7.7 | 8.5 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 3.4 | in profile |

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Tortilla, flour (n=27) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
<!-- END: hmi-page-history -->
