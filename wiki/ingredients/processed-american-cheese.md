---
title: "Processed American cheese"
type: ingredient
commodity: processed-american-cheese
label: "Processed American cheese"
aliases: ["Cheese, American, processed", "american cheese", "processed cheese"]
category: dairy
tds_food:
  number: 10
  description: "Cheese, American, processed"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5.0]
    p95_ppb: 5.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [2.4, 3.3]
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
    typical_ppb: [5.9, 10.5]
    p95_ppb: 10.7
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
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::10::mercury","role":"value","food_id":"10","food_name":"Cheese, American, processed","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":3,"non_detect_n":3,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  Ni:
    status: populated
    typical_ppb: [80.4, 90.8]
    p95_ppb: 90.9
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
    typical_ppb: [252, 380]
    p95_ppb: 390
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
    typical_ppb: [24.6, 48.6]
    p95_ppb: 50.8
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
sources: 6
---

# Processed American cheese

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 10, "Cheese, American, processed." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Processed American cheese is a manufactured dairy product consisting of natural cheese combined with emulsifying salts, water, and other permitted additives, then heat-processed to produce a uniform, shelf-stable texture. The dairy base itself is a low-risk matrix for heavy metals: milk and its derivatives accumulate very little Pb, Cd, Hg, or other regulated analytes because lactating animals excrete most absorbed metals through pathways other than milk. Cow milk Cd concentrations are consistently near or below typical analytical detection limits in standard monitoring surveys, and Pb in milk reflects dietary and environmental exposure of the cow but remains low in absolute terms under normal agricultural conditions. The primary metal-introduction pathway specific to processed cheese is the emulsifying salts used in manufacture. Sodium phosphates, polyphosphates, and citrate salts are commonly used as emulsifiers; phosphate salts in particular may carry trace Cd contamination if derived from phosphate rock sources with inadequate purification. This is the same Cd-introduction pathway documented for phosphate fertilizers applied to agricultural soils. Industrial emulsifying salt manufacturers supplying the food industry are generally required to meet purity specifications, but the pathway is recognized and warrants monitoring. The Cr values observed in the FDA TDS FY2018-FY2020 data (median 300 ppb, n=3) are notable for a dairy product and may reflect contribution from processing equipment (stainless steel contact surfaces are a recognized minor Cr source under some processing conditions) or from analytical background; interpretation should be cautious given the small TDS sample size.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 2.4–3.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 5.9–10.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=3 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 80.4–90.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 252–380 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 24.6–48.6 | low | — |

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
| 10: Cheese, American, processed | tAs | 3 | 3 | 5.3–11 | 3 |
| 10: Cheese, American, processed | Cd | 3 | 3 | 2.4–3.5 | 1 |
| 10: Cheese, American, processed | Cr | 3 | 3 | 240–400 | 50 |
| 10: Cheese, American, processed | Pb | 3 | 1 | 6.3 | 4 |
| 10: Cheese, American, processed | tHg | 3 | 0 | ND in all composites | 1 |
| 10: Cheese, American, processed | Ni | 3 | 3 | 78–91 | 40 |
| 10: Cheese, American, processed | U | 3 | 3 | 23–53 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Natural cheese composition, including any trace metals carried into the processed product, varies by the type of cheese used as the base (cheddar, colby, or similar American-style varieties), the milk supply region, and manufacturing practices. However, given the inherently low metal content of dairy, these sources of variability produce small absolute differences in finished product concentrations. The emulsifying salt supplier and the specific phosphate compound used represent the largest potential source of batch-to-batch variation in Cd specifically. Region-level variation in milk metal content reflects regional cow dietary exposure and environmental Pb loadings, which differ between the US, EU, and other production regions, but all are low in absolute terms. The current corpus contains only FDA TDS FY2018-FY2020 composite data (n=3) for this commodity and does not support geographic or supplier-stratified analysis. Quantitative regional ranges will be populated when additional independent surveys are ingested.

## Processing effects

The heat treatment applied during processed cheese manufacture does not meaningfully alter the total metal content of the dairy fraction; metals bound to casein proteins and whey proteins remain in the product matrix. The key processing variable is the emulsifying salt formulation: higher-phosphate emulsifiers introduce a greater Cd-introduction risk than citrate-based alternatives, and manufacturers seeking to minimize Cd can substitute with citrate emulsifiers where functionality permits. The water added during processing dilutes the metal concentration relative to natural cheese on a per-gram basis; a processed slice at 50 percent moisture contains proportionally less metal per gram than aged cheddar at lower moisture content. No evidence in the current corpus documents a significant Pb or Cd contribution from the processing equipment itself under sanitary industrial conditions, though the elevated Cr observation in TDS data merits follow-up to determine whether stainless steel contact surfaces contribute under prolonged high-temperature processing.

## Ingredient-derivative risk

Processed American cheese is itself a finished consumer product rather than an ingredient derivative in the conventional sense. Its primary derivative risk lies in its use as a component in further-processed foods such as cheese sauces, dips, and ready-to-eat meals. In those formulations, the cheese contributes its trace metal load at the fraction level (for example, a cheese sauce that is 20 percent processed cheese by weight carries proportionally lower absolute metal content). No evidence in the current corpus identifies processed American cheese as a meaningful contributor to dietary heavy metal exposure relative to other food groups; the dairy fraction remains among the lowest-risk food categories for Pb, Cd, and As in standard dietary exposure assessments.

## Mitigation options

### Sourcing levers

Specifying food-grade emulsifying salts from suppliers that certify Cd content below a defined specification is the most targeted sourcing lever for this product category. Phosphate-sourcing transparency, including country of phosphate rock origin and purification process, reduces uncertainty. Dairy sourcing from low-environmental-Pb regions has a minor but documented effect on milk Pb content.

### Agronomic levers

_No quantified data on agronomic levers for processed American cheese in the current corpus; the dairy fraction is not directly modifiable through farm-level agronomics in the context of this product's primary metal pathway (emulsifying salts). Section will be expanded when relevant evidence is ingested._

### Processing levers

Substitution of phosphate-based emulsifiers with citrate salts where product functionality permits reduces the Cd-introduction pathway associated with phosphate salt impurities. This lever is available to manufacturers reformulating product lines and should be evaluated in combination with routine lot-level Cd testing of emulsifier batches.

### Formulation levers

_No quantified data on formulation levers for processed American cheese in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine lot-level testing of emulsifying salt batches for Cd by ICP-MS is the primary QC lever specific to this product's risk pathway. Finished-product sampling for Cd should confirm that any batch-level variation in emulsifier Cd is captured before product release.

### Packaging and storage levers

Packaging does not contribute heavy metals to processed cheese under standard individually wrapped slice or block packaging conditions. The foil or plastic laminate packaging used for processed cheese slices does not involve direct metal-to-food contact. Storage conditions do not alter metal content.

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the applicable Pb maximum level for processed cheese is 0.020 mg/kg (20 ppb) wet weight, the same limit that applies to raw fluid milk and other dairy products. A Cd maximum level of 0.020 mg/kg (20 ppb) wet weight applies to milk-based dairy products under EU frameworks. The FDA does not publish a specific action level for Pb or Cd in processed cheese; the closest applicable standard is the general tolerance framework under 21 CFR and the broader Closer to Zero program direction (see [[regulations/fda-closer-to-zero]]) for processed foods intended for children, though processed American cheese is not specifically addressed in current CTZ guidance documents.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
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
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cheese, American, processed (n=3); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
| 3 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 4 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | US Al occurrence in Synthesis of peer-reviewed human and animal toxicology, exposure, and environmental-fate data; no original sampling |
| 5 | [[sources/hc2008-aluminum-food-additives-industry-request\|Health Canada Bureau of 2008]]. *ARCHIVED — Health Canada Requests Information from Industry on the Use of Aluminum-Containing Food Additives*, Health Canada, Food Directorate, Bureau of Chemical Safety | 2008 | Regulation | CA Al occurrence in null |
| 6 | [[sources/hc2008-review-dietary-exposure-aluminum\|Health Canada Bureau of 2008]]. *ARCHIVED — Health Canada Review of Dietary Exposure to Aluminum*, Health Canada, Food Directorate, Bureau of Chemical Safety | 2008 | Regulation | CA/GLOBAL Al occurrence in null |
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
