---
title: "Frankfurter"
dek: "An emulsified processed meat product covered through metal measurements in boiled beef and pork formulations. Explore the evidence on ingredient composition, processing and sourcing."
rail_highlights:
  - label: Exposure
    text: Cadmium was measured in boiled frankfurter composites
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: FDA frankfurter observations describe the boiled product
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: ingredient
commodity: frankfurter
label: "Frankfurter"
aliases: ["Frankfurter (all beef/beef and pork), boiled", "hot dog", "frankfurter"]
category: meat
tds_food:
  number: 28
  description: "Frankfurter (all beef/beef and pork), boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5.1]
    p95_ppb: 6.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.2, 4.6]
    p95_ppb: 4.7
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
    p95_ppb: 2.9
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
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::28::mercury","role":"value","food_id":"28","food_name":"Frankfurter (all beef/beef and pork), boiled","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":22,"non_detect_n":22,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  Ni:
    status: populated
    typical_ppb: [0, 59.4]
    p95_ppb: 73.3
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
    typical_ppb: [0, 47.7]
    p95_ppb: 97.7
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
    typical_ppb: [0, 2.2]
    p95_ppb: 2.4
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
hero_image: /static/heroes/frankfurter-sausages.webp
hero_image_alt: "Plain frankfurter sausages and a cut section showing their pink interior illustrating frankfurter ingredient context."
---

# Frankfurter

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 28, "Frankfurter (all beef/beef and pork), boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Frankfurters are emulsified processed meat products that typically contain a blend of skeletal muscle, mechanically separated meat, and organ meat trimmings from beef and pork. The metal burden of a frankfurter is higher than that of pure skeletal muscle from the same animal species because the organ fractions, particularly kidney and liver, accumulate cadmium and lead at concentrations many times greater than muscle tissue. Animals accumulate cadmium in the kidney cortex over their lifetime through dietary and inhalation exposure; slaughter animals in conventional production carry kidney Cd that reflects both the duration of their feeding period and the Cd content of the feed, which in turn tracks the Cd in the phosphate sources used in feed manufacturing. When kidney and liver trimmings are incorporated into frankfurter emulsion, they elevate the composite Cd and Pb above what the muscle fraction alone would produce. The extent of organ content is formulation-specific; all-beef or all-pork frankfurters labeled with meat species but not specifying organ content may include these high-accumulation tissues up to any legally permitted level of mechanically separated meat. Curing salts (sodium nitrite, sodium chloride) and other preservative additives contribute no meaningful metals at the concentrations used.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–5.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|2]] |
| Cd | n=2 | 1.2–4.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/shaltout2020-meat-products-pb-cd-nitrite-egypt\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=22 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–59.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–47.7 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–2.2 | low | — |

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
| 28: Frankfurter (all beef/beef and pork), boiled | tAs | 22 | 2 | 3.1–4.2 | 3 |
| 28: Frankfurter (all beef/beef and pork), boiled | Cd | 22 | 20 | 1.2–4.8 | 1 |
| 28: Frankfurter (all beef/beef and pork), boiled | Cr | 22 | 3 | 53–100 | 50 |
| 28: Frankfurter (all beef/beef and pork), boiled | Pb | 22 | 7 | 4.4–7.1 | 4 |
| 28: Frankfurter (all beef/beef and pork), boiled | tHg | 22 | 0 | ND in all composites | 1 |
| 28: Frankfurter (all beef/beef and pork), boiled | Ni | 22 | 6 | 42–76 | 40 |
| 28: Frankfurter (all beef/beef and pork), boiled | U | 22 | 14 | 1.1–2.9 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Cadmium concentrations in frankfurters vary substantially with the fraction of organ meat in the formulation and with the Cd burden carried by the livestock at the time of slaughter. Animals older at slaughter accumulate more kidney Cd; feed systems that use high-Cd phosphate mineral supplements result in higher kidney Cd than systems using low-Cd phosphate sources or pasture-based diets. Geographic variation reflects regional phosphate geology and fertilizer sourcing: European beef produced under certain national production systems has been found to carry higher kidney Cd than US counterparts in some surveys, though this is not characterized at the frankfurter product level in the current corpus. Within the US market, the FDA TDS FY2018-FY2020 reports a median Cd of approximately 3.35 ppb and a maximum of 4.8 ppb in frankfurters (n=22, boiled) [[sources/fda2022-tds-elements-fy2018-fy2020]], which is low in absolute terms but above the near-zero Cd values seen in pure skeletal muscle cuts.

## Processing effects

Boiling or grilling of frankfurters does not remove cadmium or lead from the emulsion matrix, as these metals are bound to protein and sulfhydryl groups in the meat. Boiling may result in minor leaching of water-soluble metal fractions into the cooking water; the FDA TDS measurement basis is the boiled product as consumed, which represents the most relevant dietary exposure estimate [[sources/fda2022-tds-elements-fy2018-fy2020]]. The emulsification step that produces the frankfurter texture homogenizes the metal burden of the organic fractions, meaning that any single portion of a frankfurter is representative of the batch average rather than of any specific anatomical fraction. Smoking or adding liquid smoke flavor introduces no additional metal load.

## Ingredient-derivative risk

Frankfurters are a finished consumer product and are not typically used as an intermediate ingredient in further food manufacturing. The primary derivative risk question concerns the organ-meat and mechanically separated meat fractions that are incorporated during manufacture; these fractions, if separated and used independently in other processed meat products (meat pastes, pates, canned meats), carry higher metal concentrations than the frankfurter emulsion as a whole. Pet food manufactured from similar organ-meat trimmings can accumulate substantially more Cd than the human food equivalent and sits outside the scope of this wiki.

## Mitigation options

### Sourcing levers

Specifying lean muscle meat content above a minimum threshold in the frankfurter formulation specification, and restricting or eliminating kidney and liver trimming fractions, is the most effective lever for reducing Cd. For manufacturers purchasing from suppliers under long-term contracts, requiring animal origin and feed documentation reduces uncertainty about the Cd burden coming in with organ fractions.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Adjusting the ratio of skeletal muscle to mechanically separated meat and organ content in the frankfurter recipe is the most direct formulation lever. Products labeled as pure muscle-cut frankfurters (where formulation standards permit such claims) carry lower expected Cd than those relying heavily on organ and mechanically separated fractions.

### Testing and QC levers

Lot-level testing of finished product or incoming organ-meat fractions by ICP-MS for Cd provides actionable QC data. Given the batch-averaging effect of emulsification, finished product testing reflects the compositional outcome of each production run.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in meat and meat products intended for general consumption is 0.10 mg/kg wet weight, and for Cd in muscle meat of bovine animals and pig it is 0.050 mg/kg wet weight. For offal (liver, kidney) from bovine animals and pigs, the EU Cd maximum level is 0.50 mg/kg wet weight, reflecting the known accumulation in these tissues. The frankfurter as a composite product is assessed against the limits for the finished meat product category, not the organ-specific limits, unless organ content is declared and the product is sold as an offal product. In the United States, USDA FSIS has not established action levels for metals in processed meat products analogous to FDA's food contaminant limits; the primary regulatory framework is through feed safety rules that govern the Cd burden in livestock feed, acting upstream of the product.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Frankfurter (all beef/beef and pork), boiled (n=22); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
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
