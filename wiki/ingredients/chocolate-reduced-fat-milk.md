---
title: "Chocolate reduced-fat milk"
type: ingredient
commodity: chocolate-reduced-fat-milk
label: "Chocolate reduced-fat milk"
aliases: ["Milk, chocolate, reduced fat, fluid", "chocolate milk"]
category: dairy
tds_food:
  number: 3
  description: "Milk, chocolate, reduced fat, fluid"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 1.5]
    p95_ppb: 1.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.5, 4.3]
    p95_ppb: 5.1
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
    typical_ppb: [0, 1.1]
    p95_ppb: 1.3
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
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::3::mercury","role":"value","food_id":"3","food_name":"Milk, chocolate, reduced fat, fluid","metal_species":"tHg","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  Ni:
    status: populated
    typical_ppb: [47.2, 93.6]
    p95_ppb: 96.7
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
    typical_ppb: [0, 35.4]
    p95_ppb: 39.5
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
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::3::uranium","role":"value","food_id":"3","food_name":"Milk, chocolate, reduced fat, fluid","metal_species":"U","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 1
---

# Chocolate reduced-fat milk

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 3, "Milk, chocolate, reduced fat, fluid." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chocolate reduced-fat milk is a dairy-cocoa composite product whose metal burden reflects the sum of two ingredient streams with very different metal profiles: reduced-fat cow's milk, which is intrinsically very low in heavy metals, and cocoa powder, which carries cadmium, nickel, and other metals from the soil of its growing origin. The dairy base contributes to volume while diluting the cocoa's metals across a large mass of essentially metal-free liquid; this dilution effect is the defining feature of this product's metal profile relative to pure cocoa or chocolate. Nickel is the most consistently detectable metal in chocolate milk: cocoa is one of the highest dietary nickel sources, and the FDA Total Diet Study FY2018-FY2020 found nickel in all 27 composite chocolate milk samples at a median of 62 ppb (minimum 39 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Cadmium was also consistently detectable at a median of 2.2 ppb (range 1.1-7 ppb), reflecting the cocoa-fraction cadmium diluted by the dairy matrix. Lead was detectable in a minority of samples at very low concentrations (median 1.2 ppb, maximum 1.9 ppb). Chromium was detectable at a median of 29 ppb, also consistent with the cocoa contribution.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–1.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 1.5–4.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–1.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 47.2–93.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–35.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |

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
| 3: Milk, chocolate, reduced fat, fluid | tAs | 27 | 7 | 1–1.4 | 1 |
| 3: Milk, chocolate, reduced fat, fluid | Cd | 27 | 27 | 1.1–7 | 1 |
| 3: Milk, chocolate, reduced fat, fluid | Cr | 27 | 16 | 26–43 | 25 |
| 3: Milk, chocolate, reduced fat, fluid | Pb | 27 | 21 | 1.1–1.9 | 1 |
| 3: Milk, chocolate, reduced fat, fluid | tHg | 27 | 0 | ND in all composites | 1 |
| 3: Milk, chocolate, reduced fat, fluid | Ni | 27 | 27 | 39–120 | 20 |
| 3: Milk, chocolate, reduced fat, fluid | U | 27 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides the primary quantitative reference with 27 composite samples of reduced-fat chocolate milk reporting: nickel median 62 ppb (max 120 ppb), cadmium median 2.2 ppb (max 7 ppb), lead median 1.2 ppb (max 1.9 ppb), chromium median 29 ppb (max 43 ppb), and total arsenic detectable at very low levels (max 1.4 ppb); uranium and total mercury were below reporting limits across all samples [[sources/fda2022-tds-elements-fy2018-fy2020]]. Variation across brands would be expected primarily from: the cocoa powder percentage in the formulation (higher cocoa content increases Ni, Cd, and Cr proportionally); the geographic origin of the cocoa used (Andean-origin cocoa carries higher Cd than West African); and natural variation in plain milk metal content by herd geography and feed quality (a minor contributor given dairy's very low baseline).

## Processing effects

Chocolate milk is prepared by mixing cocoa powder and sweeteners into fluid milk; no high-temperature processing specific to the cocoa fraction beyond pasteurisation of the fluid milk is applied. Ultra-high temperature (UHT) processing, used for shelf-stable chocolate milk, does not alter metal content. Homogenisation distributes the cocoa solids uniformly and does not affect metal concentrations. Reduction to reduced-fat from whole milk (by partial centrifugal separation of cream) removes a small fraction of lipid-associated metals, but the primary metal burden derives from the cocoa solids rather than the fat fraction; the practical effect on metal concentrations of using reduced-fat versus whole milk is minimal.

## Ingredient-derivative risk

The cocoa fraction is the defining derivative-risk variable. Products with higher cocoa solids concentration (dark chocolate milk versus regular chocolate milk) carry proportionally more Ni, Cd, and Cr per serving. Cocoa-containing dairy powders (chocolate milk powder) concentrate all metals relative to the fluid product in proportion to the reduction in moisture; the metal profile of a reconstituted powder would be similar to the fluid product on a per-serving-as-consumed basis if the reconstitution ratio is equivalent, but the powder itself on a per-gram dry-weight basis carries substantially higher concentrations. Cocoa-containing infant formulas or toddler milks, where cocoa is an ingredient, would carry similar Ni and Cd signals from cocoa, with exposure implications amplified for infant/toddler populations who consume these products as a dietary staple.

## Mitigation options

### Sourcing levers

Sourcing cocoa powder from lower-cadmium origins (West African rather than Andean) is the most impactful lever for reducing cadmium in the finished chocolate milk. For nickel, cocoa generally carries high Ni regardless of origin, so origin selection has less leverage on Ni than on Cd. Specifying cocoa suppliers who provide ICP-MS Cd and Ni certificates of analysis per batch is the appropriate quality control lever.

### Agronomic levers

Agronomic levers apply to the cocoa ingredient fraction; see [[ingredients/cocoa]] for cocoa-specific interventions that reduce cadmium at the farm level. The dairy fraction does not benefit from specific agronomic interventions given its already very low baseline metal content.

### Processing levers

Reducing the percentage of cocoa powder in the formulation reduces Ni, Cd, and Cr proportionally while maintaining the chocolate flavour profile requires compensating with cocoa flavour extracts or increasing sweetener to maintain palatability. The trade-off between metal reduction and product taste is a formulation decision. No processing step applied to the cocoa powder itself (alkalization, roasting) substantially reduces Cd or Ni.

### Formulation levers

Specifying lower-cocoa-solid formulations (pale chocolate milk rather than rich chocolate milk) reduces the metal burden proportionally. Using natural cocoa extract or flavouring at lower total solids loading, supplemented with other flavouring agents, can maintain chocolate character with a reduced cocoa-mass fraction. These levers are particularly relevant for product lines marketed to children or consumed daily at high volumes.

### Testing and QC levers

ICP-MS testing of the cocoa powder ingredient for Cd and Ni per batch is the appropriate quality control point. For products marketed specifically to children, where chronic daily consumption of chocolate milk represents a meaningful nickel and cadmium exposure source, finished-product testing provides a whole-system check. The FDA TDS data showing Ni at a median of 62 ppb across 27 samples indicates that nickel in chocolate milk is consistent and predictable rather than outlier-driven.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the general EU contaminants framework ([[regulations/eu2023-contaminants-maximum-levels]]) apply limits to cocoa and dairy ingredients separately rather than to chocolate milk as a finished composite product. The dairy lead maximum (0.020 mg/kg for fluid milk) would be the applicable EU limit for the dairy component of chocolate milk. Cocoa cadmium limits under EU 2023/915 apply to the cocoa ingredient; the finished chocolate milk's cadmium is substantially diluted relative to the cocoa ingredient's limit. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides limits for cocoa products and dairy. No specific US FDA action level applies to chocolate reduced-fat milk; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories. For nickel, the EU does set maximum levels: Commission Regulation (EU) 2024/1987 inserted nickel as Annex I point 3.6 of Regulation (EU) 2023/915 ([[regulations/eu-2024-1987-nickel-maximum-levels]]), applying from 1 July 2025, including 15 mg/kg for cocoa powder/drinking chocolate (3.6.12.3) and 2.5–7.0 mg/kg for milk chocolate (3.6.12). Ready-to-drink chocolate milk is not itself a listed category, so no single finished-product nickel level applies; the cocoa-fraction limit governs the cocoa ingredient and the finished beverage is handled under Article 3 (ingredient proportions, dilution). Separately, Commission Recommendation (EU) 2024/907 ([[regulations/eu-2024-907-nickel-monitoring]]) directs Member States to monitor nickel in chocolate and cocoa products through 2025–2027. The United States sets no nickel limit in food.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tHg.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

**U.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Milk, chocolate, reduced fat, fluid (n=27); detectable concentrations for Cd, Cr, Ni, Pb, tAs |
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
