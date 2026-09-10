---
title: "Oat ring cereal"
type: ingredient
commodity: oat-ring-cereal
label: "Oat ring cereal"
aliases: ["Cereal, oat ring", "oat ring cereal"]
category: breakfast-cereal
tds_food:
  number: 77
  description: "Cereal, oat ring"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.9, 6]
    p95_ppb: 6.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [16.6, 23.8]
    p95_ppb: 24.4
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
    typical_ppb: [24.8, 33.6]
    p95_ppb: 34.3
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
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::77::mercury","role":"value","food_id":"77","food_name":"Cereal, oat ring","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":3,"non_detect_n":3,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"},{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::513::mercury","role":"value","food_id":"513","food_name":"Cereal, oat ring, honey","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":3,"non_detect_n":3,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  Ni:
    status: populated
    typical_ppb: [2080, 3040]
    p95_ppb: 3120
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
    typical_ppb: [10, 250]
    p95_ppb: 275
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
    typical_ppb: [7.2, 8.8]
    p95_ppb: 9.0
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

# Oat ring cereal

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 77, "Cereal, oat ring." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Oat ring cereal (a ring-shaped extruded breakfast cereal made predominantly from whole oat flour) inherits the metal profile of the oat grain from which it is produced, with modifications introduced by extrusion processing and fortification. Oats are notable among cereal grains for their relatively high nickel (Ni) content: oat grain accumulates Ni from soil through root uptake, and Ni is retained in the grain during milling because it is distributed throughout the endosperm rather than concentrated exclusively in the bran. EFSA's 2020 scientific opinion on nickel in food identifies cereals including oats as one of the major dietary sources of Ni across European populations. Cadmium in oat grain follows the standard cereal-grain pathway: Cd is absorbed from soil via root uptake and partitions into the grain, with higher concentrations in the outer bran layer than in the inner endosperm. Whole-grain oat products therefore carry more Cd than products made from refined or low-extraction oat flour. Lead concentrations in oat grain are generally low because Pb transfer from soil to grain is inefficient, but surface deposition during field growth and dust contamination in grain handling can contribute. Inorganic arsenic is not a significant analyte of concern for oats under typical production conditions; oats are grown on aerobic (non-flooded) soils where iAs mobilization is far lower than in flooded rice paddies.

The FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] for oat ring cereal (TDS Food 77, n=3) confirm detectable concentrations for Ni (median 2,400 ppb, max 3,200 ppb), Cd (median 19 ppb, max 25 ppb), and tAs (median 28 ppb, max 35 ppb), with Pb, tHg, and Cr all at low or below-detection levels in this sample set.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0.9–6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 16.6–23.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 24.8–33.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=6 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 2080–3040 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 10–250 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 7.2–8.8 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 77: Cereal, oat ring | tAs | 3 | 3 | 24–35 | 3 |
| 77: Cereal, oat ring | Cd | 3 | 3 | 16–25 | 1 |
| 77: Cereal, oat ring | Cr | 3 | 2 | 50–300 | 50 |
| 77: Cereal, oat ring | Pb | 3 | 2 | 4.4–6.4 | 4 |
| 77: Cereal, oat ring | tHg | 3 | 0 | ND in all composites | 1 |
| 77: Cereal, oat ring | Ni | 3 | 3 | 2000–3200 | 40 |
| 77: Cereal, oat ring | U | 3 | 3 | 7.1–9.2 | 1 |
| 513: Cereal, oat ring, honey | tAs | 3 | 3 | 17–24 | 3 |
| 513: Cereal, oat ring, honey | Cd | 3 | 3 | 11–16 | 1 |
| 513: Cereal, oat ring, honey | Cr | 3 | 2 | 200 | 50 |
| 513: Cereal, oat ring, honey | Pb | 3 | 3 | 6–6.7 | 4 |
| 513: Cereal, oat ring, honey | tHg | 3 | 0 | ND in all composites | 1 |
| 513: Cereal, oat ring, honey | Ni | 3 | 3 | 1300–2000 | 40 |
| 513: Cereal, oat ring, honey | U | 3 | 3 | 7.8–8.3 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The Ni and Cd concentration range in oat ring cereal reflects the geographic and agronomic variation in oat grain composition. Oats grown in regions with higher soil Ni (certain Scandinavian, Irish, and Scottish growing regions) can produce grain with Ni concentrations at the upper end of the range reported in European dietary exposure assessments. Cd in oat grain varies with soil pH and soil Cd levels; low-pH soils mobilize more Cd for root uptake. The extrusion process used to produce the ring shape does not substantially change the grain's metal profile; the product's metal content therefore primarily tracks the oat grain input. The FDA TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]] provide the current corpus's quantitative anchor for this product in the US retail market (n=3 composites), with Ni ranging from 2,000 to 3,200 ppb across the three samples. Additional geographic breakdown data will be incorporated as further source pages are ingested.

## Processing effects

Extrusion, the process used to shape oat ring cereal, involves high temperature and pressure followed by expansion through a die. Extrusion does not volatilize or remove metals; concentrations in the extruded product track those of the oat flour input on a dry weight basis. The puffing-and-expansion step dilutes concentrations slightly on a volumetric basis but not on a mass basis. Fortification with mineral premixes (iron, zinc, calcium, and vitamins) is standard in commercial oat ring cereals and does not add Pb, Cd, or Ni at levels of concern when food-grade mineral sources are used, though fortification-grade ferrous sulfate and zinc oxide can carry trace amounts of co-contaminants if not specified to pharmaceutical-grade purity. Cooking the cereal in milk or water before consumption does not significantly leach metals from the extruded product in a typical 1 to 5 minute soak.

## Ingredient-derivative risk

Oat flour, the primary ingredient in oat ring cereal, is itself a derivative of whole oats that may show different metal profiles depending on the degree of bran retention: high-bran oat flour carries more Cd than low-bran oat flour. Oat milk produced by aqueous extraction of oat flour or rolled oats carries a different Ni and Cd profile than the intact grain, as the extraction process solubilizes a portion of the water-soluble metal fraction. Oat bran, separated during milling, concentrates Cd relative to the whole grain and warrants separate characterization. These derivative pages (oat-flour, oat-bran, oat-milk) are not yet populated in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing oat grain or oat flour from regions with documented low soil Ni and low soil Cd provides the most material reduction for the primary analytes of concern. Supplier disclosure of grain-level Ni and Cd occurrence data enables lot-level assessment rather than reliance on regional averages.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Selecting oat flour with a reduced bran fraction (lower extraction rate) reduces Cd concentration in the finished product, since Cd concentrates in the outer bran layer. This is a formulation trade-off between nutritional positioning (whole-grain versus refined) and metal content.

### Formulation levers

Blending oat flour with lower-Ni cereal flours (rice flour, tapioca starch) reduces the Ni contribution per serving, though this alters the ingredient composition and the product's whole-grain claims.

### Testing and QC levers

Lot-level ICP-MS testing of incoming oat flour for Ni and Cd is the most reliable quality-control lever given the relatively high and variable Ni concentrations documented in this category. For products marketed to populations with nickel sensitivity (a clinically recognized condition), testing and labeling guidance is particularly relevant.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level of 0.10 mg/kg Cd for processed cereal-based foods (including ready-to-eat breakfast cereals) and 0.20 mg/kg Pb. The EU cadmium limit for cereal-based products including oat-based breakfast cereals is established under [[regulations/eu-2023-915-cadmium]]. No specific EU maximum level for Ni applies to oat ring cereal or oat-based foods generally; Ni exposure is managed through dietary assessment rather than per-food limits in European regulatory practice. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) provides Pb reference levels for cereal products. See [[regulations/eu2023-contaminants-maximum-levels]], [[regulations/eu-2023-915-cadmium]], and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cereal, oat ring (n=3); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
| 3 | [[sources/fda2016-infant-toddler-foods-inorganic-arsenic\|FDA 2016]]. *Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers*, U.S. Food and Drug Administration | 2016 | Government dataset | US-FDA iAs, tAs concentrations (n=415) |
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
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
