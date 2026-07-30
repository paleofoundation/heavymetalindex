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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.5, 4.3]
    p95_ppb: 5.1
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
    typical_ppb: [0, 1.1]
    p95_ppb: 1.3
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: fluid-chocolate-reduced-fat-milk-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [47.2, 93.6]
    p95_ppb: 96.7
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
    typical_ppb: [0, 35.4]
    p95_ppb: 39.5
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 1
---

# Chocolate reduced-fat milk

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 5/10 HMTc analytes, total n=11 | common tier expects total n>=15; have 11 |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 2 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 1/10 populated cells declare a basis token | 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 27 claims checked, 27 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming chocolate-reduced-fat-milk: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 4 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 2 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); basis: 9 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, Ni, Al, Cr, Sn, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 3, "Milk, chocolate, reduced fat, fluid." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chocolate reduced-fat milk is a dairy-cocoa composite product whose metal burden reflects the sum of two ingredient streams with very different metal profiles: reduced-fat cow's milk, which is intrinsically very low in heavy metals, and cocoa powder, which carries cadmium, nickel, and other metals from the soil of its growing origin. The dairy base contributes to volume while diluting the cocoa's metals across a large mass of essentially metal-free liquid; this dilution effect is the defining feature of this product's metal profile relative to pure cocoa or chocolate. Nickel is the most consistently detectable metal in chocolate milk: cocoa is one of the highest dietary nickel sources, and the FDA Total Diet Study FY2018-FY2020 found nickel in all 27 composite chocolate milk samples at a median of 62 ppb (minimum 39 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Cadmium was also consistently detectable at a median of 2.2 ppb (range 1.1-7 ppb), reflecting the cocoa-fraction cadmium diluted by the dairy matrix. Lead was detectable in a minority of samples at very low concentrations (median 1.2 ppb, maximum 1.9 ppb). Chromium was detectable at a median of 29 ppb, also consistent with the cocoa contribution.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–1.5 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 1.5–4.3 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–1.1 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 47.2–93.6 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–35.4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The total-mercury and uranium cells were resynthesized on 2026-06-11 on a fluid chocolate reduced-fat milk wet-weight basis, the form in which the ingredient is placed on market. Values below the analytical reporting limit are treated as left-censored bounds, not as measured zeros.

The earlier profile reported both analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Milk, chocolate, reduced fat, fluid" (n=27), in which every sample fell below the reporting limit for mercury and for uranium and the below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limit 1 µg/kg for each). FDA is the only source in the corpus that names this fluid chocolate-milk composite; the cocoa- and chocolate-product literature routed elsewhere in the wiki measures lead, cadmium, nickel, and chromium in cocoa powder and solid chocolate, not mercury or uranium in fluid chocolate milk, so neither analyte has a non-FDA fluid-matrix occurrence value to pool.

Total mercury is therefore carried at the honest FDA censored floor: all 27 composites fell below the 1 µg/kg mercury reporting limit, so the cell is recorded as a left-censored bound at that reporting limit rather than as a measured zero, at n_studies of 1 and low confidence pending a second fluid-chocolate-milk source. Total mercury is held distinct from methylmercury and is not derived from it; no speciated value exists for this matrix. The biological basis for the low result is consistent with the fluid-dairy literature, in which mercury transfer from feed to milk is strongly restricted, and the cocoa fraction is not a recognised mercury source.

Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and no source in the corpus publishes an extractable uranium value for this commodity, so no distribution is published (the rice-uranium and whole-milk-uranium precedent). The cell carries null typical and 95th-percentile values at null confidence rather than an inferred number.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Milk, chocolate, reduced fat, fluid" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 1.1 | 1.5 | 2.2 | 4.28 | 5.1 | 7 | in profile |
| Cr | 27 | 0 | 0 | 29 | 35.4 | 39.5 | 43 | in profile |
| Ni | 27 | 39 | 47.2 | 62 | 93.6 | 96.7 | 120 | in profile |
| Pb | 27 | 0 | 0 | 1.2 | 1.5 | 1.64 | 1.9 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 1.14 | 1.34 | 1.4 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides the primary quantitative reference with 27 composite samples of reduced-fat chocolate milk reporting: nickel median 62 ppb (p90 93.6 ppb, max 120 ppb), cadmium median 2.2 ppb (p90 4.28 ppb, max 7 ppb), lead median 1.2 ppb (p90 1.5 ppb, max 1.9 ppb), chromium median 29 ppb (p90 35.4 ppb, max 43 ppb), and total arsenic detectable at very low levels (p90 1.14 ppb, max 1.4 ppb); uranium and total mercury were below reporting limits across all samples [[sources/fda2022-tds-elements-fy2018-fy2020]]. Variation across brands would be expected primarily from: the cocoa powder percentage in the formulation (higher cocoa content increases Ni, Cd, and Cr proportionally); the geographic origin of the cocoa used (Andean-origin cocoa carries higher Cd than West African); and natural variation in plain milk metal content by herd geography and feed quality (a minor contributor given dairy's very low baseline).

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

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the general EU contaminants framework ([[regulations/eu2023-contaminants-maximum-levels]]) apply limits to cocoa and dairy ingredients separately rather than to chocolate milk as a finished composite product. The dairy lead maximum (0.020 mg/kg for fluid milk) would be the applicable EU limit for the dairy component of chocolate milk. Cocoa cadmium limits under EU 2023/915 apply to the cocoa ingredient; the finished chocolate milk's cadmium is substantially diluted relative to the cocoa ingredient's limit. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides limits for cocoa products and dairy. No specific US FDA action level applies to chocolate reduced-fat milk; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories. For nickel, no specific EU or Codex maximum level applies to chocolate milk as a product category; nickel intake from chocolate milk is monitored under dietary exposure assessments at the population level rather than controlled by individual product limits.

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Milk, chocolate, reduced fat, fluid (n=27); detectable concentrations for Cd, Cr, Ni, Pb, tAs; left-censored floor (<1 µg/kg reporting limit) for tHg and U |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 1 source added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
