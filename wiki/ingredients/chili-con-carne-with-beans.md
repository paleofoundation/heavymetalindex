---
title: "Chili con carne with beans"
type: ingredient
commodity: chili-con-carne-with-beans
label: "Chili con carne with beans"
aliases: ["Chili con carne with beans, canned", "chili con carne"]
category: mixed-food
tds_food:
  number: 145
  description: "Chili con carne with beans, canned"
  source: fda2022-tds-elements-fy2018-fy2020
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
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-12
sources: 1
---

# Chili con carne with beans

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 145, "Chili con carne with beans, canned." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chili con carne with beans is a composite canned product whose metal burden is driven by the interaction of three distinct contamination pathways. The bean fraction (typically red kidney beans or pinto beans) is the primary cadmium and nickel source: legumes are moderate cadmium accumulators that take up cadmium from soil through root transport mechanisms shared with other dicotyledonous crops, and nickel uptake is similarly elevated in legumes relative to cereal grains. The FDA Total Diet Study FY2018-FY2020 found nickel at a median of 330 ppb across 3 composite samples, which is among the higher values seen in the TDS dataset for this metal, consistent with the legume fraction driving Ni [[sources/fda2022-tds-elements-fy2018-fy2020]]. Ground beef (the "carne" fraction) contributes very little to Pb, Cd, or Ni in muscle meat. Tomato and tomato sauce components are typically low in metals. Total arsenic was detectable at a median of 3.3 ppb and a maximum of 5.3 ppb, likely reflecting contributions from both the beef and legume fractions [[sources/fda2022-tds-elements-fy2018-fy2020]]. The canned format introduces the potential for tin migration, though modern enamel-lined cans substantially limit this; Sn was declared a data gap in the contamination profile, indicating the TDS did not measure Sn for this food item.

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

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Chili con carne with beans, canned" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 3 | 5.4 | 5.58 | 6.3 | 7.1 | 7.2 | 7.3 | in profile |
| Cr | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 3 | 250 | 266 | 330 | 450 | 465 | 480 | in profile |
| Pb | 3 | 0 | 0 | 0 | 5.28 | 5.94 | 6.6 | in profile |
| U | 3 | 0 | 0.22 | 1.1 | 1.18 | 1.19 | 1.2 | in profile |
| tAs | 3 | 3 | 3.06 | 3.3 | 4.9 | 5.1 | 5.3 | in profile |
| tHg | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides the primary quantitative reference, with 3 composite samples of canned chili con carne with beans reporting: nickel at a median of 330 ppb (range 250-480 ppb), cadmium at a median of 6.3 ppb (range 5.4-7.3 ppb), total arsenic at a median of 3.3 ppb (range 3.0-5.3 ppb), lead at a maximum of 6.6 ppb (below reporting limit at the median), and uranium at a median of 1.1 ppb (range 0-1.2 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]. The very small sample size (n=3) substantially limits confidence in these distributional estimates. Variation across brands and formulations would be expected primarily from the bean fraction: different legume species (red kidney, pinto, black, small red) and different geographic origins of beans carry different cadmium and nickel loads. Canned vs homemade chili also differs in that canned products may use enamel-lined cans (affecting Sn) and may include different salt and seasoning blends.

## Processing effects

Canning involves retort sterilisation at high temperature and pressure after sealing, which does not alter metal content of the ingredients but may influence metal migration from can surfaces if enamel integrity is compromised. The acidic environment of tomato-based chili (pH typically 3.5-4.5) promotes tin migration from can interiors more than neutral or alkaline foods; modern enamel linings substantially mitigate this. Soaking and boiling dried beans before incorporation removes a fraction of cadmium and nickel into the soak and cook water; commercial canned products may use pre-cooked beans with varying degrees of water-leaching applied. The tomato fraction (tomato sauce, diced tomato) is processed at high temperature, which concentrates metals slightly relative to fresh tomato as moisture is driven off, but tomato is generally a low-metal ingredient and this effect is small.

## Ingredient-derivative risk

Chili con carne with beans is itself a finished composite product. Its derivatives are primarily variations in recipe and packaging (homemade vs canned, dry-mix vs fully prepared). Bean-only products (canned beans in tomato sauce, refried beans) would carry higher per-serving bean-fraction Ni and Cd without dilution from the beef and tomato components. The "carne only" variant (chili without beans) would eliminate the dominant nickel source and substantially reduce cadmium, leaving a product with a much lower metal burden per serving.

## Mitigation options

### Sourcing levers

Selecting beans from regions with documented low soil cadmium and nickel background is the highest-leverage sourcing decision for this product. Bean-growing regions in the US (North Dakota, Michigan, Nebraska) vary in soil cadmium depending on field history and fertiliser inputs. Supplier specification requiring ICP-MS testing of dried beans for Cd and Ni, with maximum acceptable concentrations, is the most reliable quality control lever at the ingredient level. Specifying enamel-lined cans reduces any tin-migration risk.

### Agronomic levers

Soil pH management (maintaining pH above 6.5) reduces cadmium bioavailability to legume crops. Selecting lower-cadmium-accumulating bean varieties is a documented lever for legumes in European regulatory and breeding programs; varietal data for common chili bean types (red kidney, pinto) is limited in the current corpus. Reducing cadmium-contaminated phosphate fertiliser use on bean-growing fields addresses the primary anthropogenic Cd input.

_No quantified data on nickel-specific agronomic levers for beans in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Soaking dried beans overnight and discarding the soak water before cooking removes a fraction of cadmium and nickel; boiling in multiple changes of water enhances this effect. Commercial processors using pre-washed and pre-soaked beans may have already partially implemented this lever. The magnitude of cadmium reduction through soaking for common bean varieties is not quantified in the current corpus.

### Formulation levers

Reducing the bean fraction relative to beef and tomato reduces per-serving nickel and cadmium from the legume pathway. Substituting lower-accumulating legume varieties for red kidney beans (if lower-Ni species are identified through targeted sourcing) is a formulation-level option. Including lower-metal vegetables (corn, bell pepper) in the recipe does not substantially change the overall metal burden given the dominance of the bean fraction.

### Testing and QC levers

For manufacturers, lot-level ICP-MS testing of the dried bean ingredient for Cd and Ni is the most efficient quality control point, as the bean fraction drives both metals. Testing the finished canned product periodically provides a whole-system check. The TDS median Ni of 330 ppb in the finished product is notable and warrants tracking against any applicable guidance for nickel in composite foods.

### Packaging and storage levers

Enamel-lined cans substantially reduce tin migration. For retorted canned products with high acidity (tomato-heavy chili), verifying enamel lining quality is a standard quality assurance step relevant to tin as well as other metals.

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the general contaminants regulation ([[regulations/eu2023-contaminants-maximum-levels]]) do not set a single composite limit for canned chili as a finished product; applicable limits apply to constituent ingredients (beef muscle, legumes, tomato products, cereal-derived ingredients if applicable). For nickel, no specific EU or Codex maximum level applies to canned composite foods as a category; nickel exposure is monitored under dietary exposure assessments rather than individual product limits. No specific US FDA action level applies to canned chili; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler foods. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides cadmium limits for legumes (pulses): the applicable Codex limit for dried legumes is 0.10 mg/kg, and for canned legumes it is generally addressed under the fresh/dried category limit. For tin in canned foods, the Codex ML is 200 mg/kg and the EU limit is 200 mg/kg for non-beverages.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Chili con carne with beans, canned (n=3); detectable concentrations for Cd, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

