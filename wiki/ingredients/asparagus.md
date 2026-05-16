---
title: "Asparagus"
type: ingredient
commodity: asparagus
label: "Asparagus"
aliases: ["Asparagus, fresh/frozen, boiled", "asparagus"]
category: vegetable
tds_food:
  number: 115
  description: "Asparagus, fresh/frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 3.0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [5.7, 39.2]
    p95_ppb: 41.7
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
    typical_ppb: [0, 5.7]
    p95_ppb: 7.6
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
    typical_ppb: [59.8, 204]
    p95_ppb: 210
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 1.2]
    p95_ppb: 1.4
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 1
---

# Asparagus

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 115, "Asparagus, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Asparagus is a perennial vegetable whose edible portion is the young shoot harvested before the fern stage. The shoot grows from a crown embedded in the soil, and metal transfer from soil to the shoot tissue occurs via root uptake through the vascular system. Cadmium is the analyte of greatest concern in asparagus within the FDA TDS FY2018-FY2020 dataset: the TDS data for "Asparagus, fresh/frozen, boiled" (TDS Food 115, n=27) show Cd detectable at all 27 samples with a median of 10 ppb, a p90 of 39.2 ppb, and a maximum of 54 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Nickel is also detectable in most samples, with a median of 130 ppb and a maximum of 240 ppb. These concentrations are consistent with asparagus being a moderate-accumulator vegetable for Cd and Ni under typical soil conditions.

Lead concentrations in asparagus are generally low in the TDS data: the p90 is 0 ppb and only the p95 (3.01 ppb) and maximum (4.3 ppb) indicate any detectable Pb in the dataset ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Total arsenic is detectable at moderate levels, with a median of 3.5 ppb and a maximum of 10 ppb. These patterns are consistent with the general understanding that asparagus occupies an intermediate position among vegetables for metal accumulation: more than fruits, less than leafy greens grown in contaminated soils or root vegetables with high soil contact.

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

The normalized row-level data for this TDS food is stored in the structured evidence layer, with per-food/per-analyte summaries in the structured evidence layer. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Asparagus, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in the structured evidence layer; per-analyte distributions in the structured evidence layer. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 3 | 5.7 | 10 | 39.2 | 41.7 | 54 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 59.8 | 130 | 204 | 210 | 240 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 3.01 | 4.3 | in profile |
| U | 27 | 0 | 0 | 0 | 1.22 | 1.4 | 1.8 | in profile |
| tAs | 27 | 0 | 0 | 3.5 | 5.72 | 7.58 | 10 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 115, n=27) are the sole quantitative occurrence source in the current corpus for asparagus ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The TDS is a US market composite dataset purchased at retail across multiple US cities, so it reflects the blended contribution of domestic (California, Michigan, Washington) and imported (Peru, Mexico) asparagus without geographic separation at the sample level. Asparagus grown in soils with elevated Cd (associated with phosphate fertilizer use or industrial legacy) is expected to show higher Cd concentrations, but source-country breakdown is not available in the TDS data alone. Variety (green versus white asparagus, where white is the etiolated form grown without light) may influence metal distribution, but no varietal comparison data appear in the current corpus. Synthesis of geographic and varietal ranges will be updated when additional occurrence sources are integrated.

## Processing effects

The asparagus in the TDS dataset is reported as "fresh/frozen, boiled," meaning the measured concentrations reflect post-boiling concentrations. Boiling in water leaches water-soluble metal fractions into the cooking liquid, which is typically discarded; this means that concentrations in the cooked, drained asparagus may be lower than in the raw plant tissue for water-soluble metal species. The magnitude of leaching depends on cooking time, water volume, and the speciation of the metal. Freezing prior to cooking does not materially alter metal concentrations. Canning asparagus in tinplate introduces a Sn contamination route, but the TDS data reflect boiled fresh or frozen asparagus rather than canned product. _Quantified leaching reduction factors specific to asparagus are not available in the current corpus; section will be expanded when relevant evidence is ingested._

## Ingredient-derivative risk

Asparagus is consumed primarily as a whole vegetable and has limited downstream derivative forms. Canned asparagus in tinplate introduces Sn from can linings as an additional analyte compared to fresh or frozen. Asparagus in ready meals or soups carries the vegetable's metal load into the composite product. Asparagus extract or asparagus powder, used in dietary supplements, concentrates the metal content of the vegetable material; no occurrence data for these derivatives appear in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing asparagus from regions with documented low soil Cd (avoiding fields with heavy phosphate fertilizer history or industrial contamination) represents the primary lever given Cd's detectability across all TDS samples. Country-of-origin specification, distinguishing domestic US product from imported Peruvian or Mexican asparagus, may reveal different Cd distributions when source-level data become available. _Quantified source-switching reduction factors are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Soil pH management (maintaining pH above 6.5) reduces Cd bioavailability and plant uptake. Phosphate fertilizer selection, preferring cadmium-tested low-Cd phosphate sources, limits ongoing soil Cd accumulation in asparagus beds. _Quantified agronomic-lever effects specific to asparagus are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Boiling and discarding the cooking water removes some water-soluble metal fractions. Avoidance of tinplate canning eliminates the Sn contamination route for canned product. _Quantified reduction from boiling and draining for asparagus are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

Preference for glass, plastic, or retort pouch packaging over tinplate canning eliminates the Sn contamination route applicable to canned asparagus products.

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 establishes maximum levels for Pb and Cd in vegetables. For asparagus, as a fresh vegetable, the applicable Pb ML is 0.10 mg/kg (100 ppb) wet weight and the Cd ML is 0.050 mg/kg (50 ppb) wet weight ([[regulations/eu2023-contaminants-maximum-levels]]). No specific EU ML for asparagus Cd deviating from the general vegetable value appears in the current corpus; some leafy and stem vegetables have higher specific limits. In the United States, no FDA action level for Pb, Cd, or Ni in fresh asparagus exists under current Closer to Zero guidelines ([[regulations/fda-closer-to-zero]]); FDA's Closer to Zero program focuses on processed infant and toddler foods rather than fresh vegetables directly. No Codex Alimentarius ML specifically for asparagus contaminants appears in the current corpus. For canned asparagus, the EU applies an Sn ML of 200 mg/kg for canned solid food under Regulation (EU) 2023/915.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Asparagus, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

