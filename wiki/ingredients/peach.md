---
title: "Peach"
type: ingredient
commodity: peach
label: "Peach"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  tHg:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
updated: 2026-05-12
sources: 1
---

# Peach

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Why this commodity accumulates heavy metals

Peach (Prunus persica) is a stone fruit grown on tree branches well above the soil surface, and the edible flesh is separated from the environment by a thin skin. The primary pathway for heavy metal accumulation in peach fruit is atmospheric deposition of lead-bearing particulate matter onto the fruit surface, which is then retained in the skin or carried into harvested samples that include skin. Lead does not translocate efficiently from roots through the woody stem and bark to the fruit interior under normal orchard conditions, so interior flesh concentrations are very low. Cadmium accumulation follows a similar pattern: uptake from soil through roots, limited translocation to the fruit, with the result that peach flesh cadmium concentrations are among the lowest observed in monitored food groups.

A distinct historical contamination pathway relevant to peaches is orchard soil legacy contamination from lead arsenate pesticides, which were applied extensively in stone-fruit orchards throughout the first half of the twentieth century across the United States, United Kingdom, and Europe. These applications left residual lead and arsenic in orchard soils that persist for decades, and tree roots in these soils can reflect slightly elevated Pb uptake relative to orchards on uncontaminated soils, even when surface fruit concentrations remain low.

The regulatory relevance of peach in the United States context is driven primarily by its use as a puree in infant food formulations, where FDA's Closer to Zero program has established action levels for Pb in fruit-and-vegetable purees consumed by infants and young children. Even though peach itself is a low-accumulation fruit, the regulatory framework applies because of the vulnerable-population exposure pattern.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | data gap | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | data gap | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

## Routing

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 83, "Peach, raw/frozen." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Peach, raw/frozen" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 1.76 | 2.91 | 3.4 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 57 | 100 | 107 | 110 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.98 | 1.6 | in profile |
| tAs | 27 | 0 | 0 | 3.6 | 8.34 | 9.35 | 12 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Peach metal concentrations vary primarily as a function of orchard soil history and geographic origin rather than cultivar. Orchards on former lead-arsenate-treated land, particularly in eastern US apple and stone-fruit production belts, show higher Pb and As in soil and, to a lesser extent, on fruit surfaces. California and Pacific Northwest peach production, on soils with less lead-arsenate history, tends to show lower surface lead. Clingstone versus freestone peach varieties do not show documented differences in metal accumulation; the primary variance driver is soil provenance. The FDA TDS FY2018-FY2020 dataset, which samples retail product across US purchase locations, reflects the integrated distribution of US commercial production and import ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Processing effects

Peeling or enzymatic skin removal, as used in commercial peach processing for baby food, removes the surface-deposited lead fraction and reduces Pb concentration in the prepared product relative to whole skin-on fruit. Canning in syrup introduces a dilution effect for metals in the fruit flesh. Pureed and homogenized peach for infant food formulations reflects the metal burden of the skinless processed flesh rather than whole-fruit skin-on raw values.

Freezing does not alter metal concentrations. Cooking (heating) does not appreciably reduce heavy metal concentrations in the fruit flesh. The wet-weight basis reporting convention means that any moisture loss during processing (concentration during cooking) would appear to raise concentrations proportionally.

## Ingredient-derivative risk

Fresh and frozen peach are the raw-commodity forms. Canned peach slices in syrup represent a processed derivative where the brine dilutes metals but also where any Sn migration from unlined tin cans applies (Sn is not a primary concern for peach given its near-neutral pH, but applies in principle to all canned acidic or semi-acidic foods). Peach puree, particularly in the single-serve infant food segment, concentrates the regulatory interest because it is a direct infant exposure vector. Peach juice, which removes pulp solids, has a different metal profile from whole-fruit puree; lead and cadmium in juice depend primarily on how much particulate fruit material passes into the juice fraction.

## Mitigation options

### Sourcing levers

Sourcing peaches from orchards with documented soil lead and arsenic below threshold levels, particularly avoiding former lead-arsenate-treated orchards for products destined for infant food formulations, is the highest-impact sourcing lever. Supplier orchard-provenance documentation and periodic soil screening are the verification mechanisms.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling before puree production removes the surface-deposited lead fraction and is the standard commercial practice for infant-grade peach puree. This step also removes any residual pesticide-related surface contamination.

### Formulation levers

Diluting peach puree with other low-metal fruit purees in blended infant food formulations reduces the per-serving contribution from peach. Given that peach is already a low-metal fruit, formulation leverage is primarily relevant when orchard-specific sourcing cannot be guaranteed.

### Testing and QC levers

Lot-level ICP-MS testing of incoming peach puree with Pb acceptance criteria provides assurance for infant food manufacturers. Given the low baseline concentrations typical of peach, most commercial lots will be well below EU and proposed FDA action level thresholds, but periodic testing serves as a supply-chain audit function.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for lead in stone fruit (including peach) is 0.10 mg/kg fresh weight, and for cadmium in stone fruit is 0.050 mg/kg fresh weight. These apply to fresh peach as placed on the market.

For processed peach products intended for infants and young children, the EU applies lower Pb limits under the same regulation for processed cereal-based foods and baby foods. FDA's Closer to Zero program ([[regulations/fda-closer-to-zero]]) has proposed action levels for Pb in fruit purees and juices consumed by infants and young children; the peach category is within scope of this framework. No Codex Alimentarius maximum level for Cd or Pb specifically in stone fruit applies at the same limit values as the EU, but Codex sets guidance levels for fruit generally ([[regulations/codex-cadmium-mls]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
