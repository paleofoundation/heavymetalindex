---
title: "Asparagus"
dek: "A perennial vegetable covered through measurements of boiled fresh or frozen spears. Explore the evidence on metal occurrence, preparation and geographic variation."
rail_highlights:
  - label: Exposure
    text: Cadmium was detected in all tested asparagus composites
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: Asparagus non detections are not measured zeros
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
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
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [5.7, 39.2]
    p95_ppb: 41.7
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
    typical_ppb: [0, 5.7]
    p95_ppb: 7.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::115::mercury","role":"value","food_id":"115","food_name":"Asparagus, fresh/frozen, boiled","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  Ni:
    status: populated
    typical_ppb: [59.8, 204]
    p95_ppb: 210
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
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::115::chromium","role":"value","food_id":"115","food_name":"Asparagus, fresh/frozen, boiled","metal_species":"Cr","basis":"FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":50,"reporting_limit_max_ppb":50,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
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
hero_image: /static/heroes/garden-vegetables-tomato-cucumber-asparagus.webp
hero_image_alt: "Tomato, cucumber, green bell pepper, celery and asparagus illustrating asparagus ingredient context."
---

# Asparagus

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 115, "Asparagus, fresh/frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Asparagus is a perennial vegetable whose edible portion is the young shoot harvested before the fern stage. The shoot grows from a crown embedded in the soil, and metal transfer from soil to the shoot tissue occurs via root uptake through the vascular system. Cadmium is the analyte of greatest concern in asparagus within the FDA TDS FY2018-FY2020 dataset: the TDS data for "Asparagus, fresh/frozen, boiled" (TDS Food 115, n=27) show Cd detectable at all 27 samples with a median of 10 ppb and a maximum of 54 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Nickel is also detectable in most samples, with a median of 130 ppb and a maximum of 240 ppb. These concentrations are consistent with asparagus being a moderate-accumulator vegetable for Cd and Ni under typical soil conditions.

Lead concentrations in asparagus are generally low in the TDS data: most samples were at or below detection, with the maximum reaching 4.3 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Total arsenic is detectable at moderate levels, with a median of 3.5 ppb and a maximum of 10 ppb. These patterns are consistent with the general understanding that asparagus occupies an intermediate position among vegetables for metal accumulation: more than fruits, less than leafy greens grown in contaminated soils or root vegetables with high soil contact.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 5.7–39.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–5.7 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 59.8–204 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 dataset; composites=27 | ND (<50; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.2 | low | — |

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
| 115: Asparagus, fresh/frozen, boiled | tAs | 27 | 15 | 3.4–10 | 3 |
| 115: Asparagus, fresh/frozen, boiled | Cd | 27 | 27 | 3–54 | 1 |
| 115: Asparagus, fresh/frozen, boiled | Cr | 27 | 0 | ND in all composites | 50 |
| 115: Asparagus, fresh/frozen, boiled | Pb | 27 | 2 | 4.3 | 4 |
| 115: Asparagus, fresh/frozen, boiled | tHg | 27 | 0 | ND in all composites | 1 |
| 115: Asparagus, fresh/frozen, boiled | Ni | 27 | 25 | 55–240 | 40 |
| 115: Asparagus, fresh/frozen, boiled | U | 27 | 6 | 1–1.8 | 1 |
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

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

**Cr.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Asparagus, fresh/frozen, boiled (n=27); detectable concentrations for Cd, Ni, Pb, U, tAs |
| 2 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
