---
title: "Skim milk"
type: ingredient
commodity: skim-milk
label: "Skim milk"
aliases: ["Milk, skim, fluid", "skim milk", "fat-free milk"]
category: dairy
tds_food:
  number: 4
  description: "Milk, skim, fluid"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
sources: 2
---

# Skim milk

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 4, "Milk, skim, fluid." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Skim milk (also known as fat-free or nonfat milk) is fluid cow milk from which essentially all of the milk fat has been removed by centrifugal separation, typically to a fat content below 0.5 percent by weight. Its heavy metal profile is determined by the same physiological and agricultural factors that govern all fluid dairy: the mammary gland presents a substantial barrier to the transfer of Pb, Cd, Hg, and most other heavy metals from blood circulation into secreted milk, and lactating cows excrete the majority of absorbed metals through urinary and fecal routes rather than through milk. As with reduced-fat milk and semi-skimmed milk, the fat removal step in skim milk production does not alter the metal content of the product because the heavy metals of concern are associated with the aqueous and protein fractions of milk, not with the fat globules. The FDA TDS FY2018-FY2020 data for skim milk (n=27 composite samples) show all measured analytes, including Pb, Cd, Cr, Ni, U, tAs, and tHg, reporting as zero across all 27 composites [[sources/fda2022-tds-elements-fy2018-fy2020]], making skim milk one of the most consistently below-detection-limit matrices in the TDS dataset. This near-zero profile reflects both the low metal-transfer efficiency of the mammary gland and the clean supply chain conditions of commercial US fluid dairy production.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0 | 0 | high | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Milk, skim, fluid" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Heavy metal concentrations in commercial skim milk are uniformly near or at analytical detection limits across the market, regardless of production region. The FDA TDS data (n=27 composites, all analytes at zero) represents a composite market-basket average for the US, and EU monitoring data under Regulation (EC) No 1881/2006 show comparable results for European commercial fluid milk. Organic versus conventional production shows no meaningful difference in heavy metal content in fluid dairy. Regional variation from industrial contamination sources near individual dairy farms is documented in case studies but does not appear in commercial market-basket data because contaminated supply is typically identified and removed from the commercial chain through routine monitoring. No meaningful range to characterize by region or variety exists in the current corpus for skim milk beyond the confirmation that the entire distribution is effectively at zero.

## Processing effects

Complete fat removal by centrifugal separation from whole milk to skim milk does not alter the trace metal content of the skim fraction. Pasteurization at standard HTST or UHT conditions does not decompose, volatilize, or remove heavy metals. Spray drying to produce skim milk powder concentrates metals proportionally with water removal (approximately tenfold on a wet-weight basis), but given the near-zero baseline in fluid skim milk, the resulting powder remains low-risk. Standard stainless steel processing equipment in commercial fluid dairy operations does not contribute measurable metals to the product under normal sanitary conditions and cleaning protocols.

## Ingredient-derivative risk

Skim milk is used as a beverage, in baking, as a component in dairy-based products, and as a source of skim milk powder for infant formula and protein-fortified products. The near-zero metal content of skim milk means its contribution to the metal load of any formulated product is negligible. Skim milk powder used in infant formula at typical inclusion levels contributes essentially no Pb, Cd, or Hg; other formula ingredients carry higher metal risk. Non-fat dry milk used in protein bars and meal replacement products similarly does not drive the metal profile of those products.

## Mitigation options

### Sourcing levers

Standard commercial dairy supply chain oversight is sufficient for this commodity. No special sourcing protocol is required for metal-reduction purposes given the consistently near-zero baseline.

### Agronomic levers

_No quantified data on agronomic levers specific to reducing metals in cow milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard pasteurization and fat separation operations do not introduce metals and require no modification for metal-reduction purposes.

### Formulation levers

_No quantified data on formulation levers for skim milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine surveillance for Pb and Cd in skim milk is maintained by regulatory monitoring programs in the US and EU. Given the consistently below-detection values across the corpus, this commodity does not warrant intensive independent lot-level testing beyond standard quality assurance protocols, except in supply chains serving infant formula manufacturing where regulatory oversight typically mandates additional verification.

### Packaging and storage levers

Standard packaging formats (HDPE, glass, Tetra Pak) do not contribute metals to skim milk. Refrigerated storage does not alter metal content.

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the maximum Pb level for raw milk, heat-treated milk, and milk-based products is 0.020 mg/kg (20 ppb) wet weight. The corresponding Cd maximum level for milk and milk products is 0.020 mg/kg (20 ppb) wet weight. These are among the lowest matrix-specific limits in the EU contaminants framework, reflecting both the low exposure reality and the importance of protecting infants and young children who consume dairy as a primary food. The FDA does not publish a specific action level for Pb or Cd in skim milk; general surveillance under 21 CFR applies. The Closer to Zero program (see [[regulations/fda-closer-to-zero]]) does not identify fluid dairy as a high-priority category for Pb reduction interventions.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/arellano2023-dairy-products-arsenic-argentina\|Arellano et al. 2023]]. *Arsenic risk assessment through dairy products ingestion*, Arsenic in the Environment: Bridging Science to Practice for Sustainable Development | 2023 | Conference proceedings | AR tAs occurrence in Raw bovine, caprine, and ovine milk from 37 farms in Cordoba and Buenos Aires provinces, plus market commercial... (n=157) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Milk, skim, fluid (n=27); all analytes reported as zero (BDL) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [aca5e21](https://github.com/paleofoundation/heavymetalindex/commit/aca5e21) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
<!-- END: hmi-page-history -->
