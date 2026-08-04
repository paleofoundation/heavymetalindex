---
title: "Reduced-fat milk"
type: ingredient
commodity: reduced-fat-milk
label: "Reduced-fat milk"
aliases: ["Milk, reduced fat, fluid", "milk, reduced fat"]
category: dairy
tds_food:
  number: 2
  description: "Milk, reduced fat, fluid"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
sources: 1
---

# Reduced-fat milk

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 2, "Milk, reduced fat, fluid." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Reduced-fat milk is fluid cow milk from which a portion of the milk fat has been removed, typically to achieve a fat content of approximately 2 percent by weight. As a dairy matrix, reduced-fat milk is among the lowest-risk food categories for heavy metal contamination. The mammary gland is not a primary excretion route for most heavy metals; the blood-milk barrier limits transfer of Pb, Cd, Hg, and most other regulated analytes from systemic circulation into milk at detectable levels under normal dietary exposure conditions for the cow. The small amounts of metals that do transfer to milk are primarily associated with the casein protein fraction and to a lesser extent with the whey protein fraction, rather than with the fat fraction. Consequently, removing fat from whole milk does not meaningfully change the metal content of the resulting reduced-fat product: metals remain in the aqueous and protein phases. Pb and Cd in milk reflect the cow's environmental and dietary exposure, which in modern commercial dairy herds under regulated feeding conditions is low. Soil contamination near grazing pastures and the mineral content of feed supplements are the dominant drivers of variation in cow milk metal content; both are tightly managed in most commercial dairy supply chains. The FDA TDS FY2018-FY2020 data for reduced-fat milk (n=27 composite samples) show concentrations at or below reporting limits for all measured analytes, with a single Pb observation of 1.7 ppb at the maximum and all other analytes reporting as zero across all 27 composites [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Milk, reduced fat, fluid" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | in profile |
| Pb | 27 | 0 | 1.7 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Metal concentrations in reduced-fat milk vary by production region, feed composition, and the mineral content of drinking water available to the herd. European surveys have consistently found fluid milk Pb and Cd concentrations at or near analytical detection limits in commercial samples, with occasional elevated values linked to industrial point sources near grazing areas. US TDS data corroborate this low-level profile. The fat-reduction step itself (centrifugal separation) introduces negligible variation because metals are not preferentially associated with the fat phase. Organic versus conventional production does not substantially change the metal profile of fluid milk. No evidence in the current corpus documents a meaningful varietal or regional difference in reduced-fat milk that would alter the overall low-risk characterization of this commodity.

## Processing effects

Fat removal by centrifugal separation does not alter heavy metal content in reduced-fat milk relative to whole milk. The metals are in the aqueous and protein fractions and are retained regardless of fat content. Pasteurization (HTST or UHT) does not destroy or remove heavy metals; it does not alter metal concentration. Homogenization likewise has no effect on metal content. The only processing context where metal introduction is possible is equipment contact: stainless steel processing equipment is a minor source of Ni and Cr at the parts-per-billion level under some processing conditions, but this is tightly managed through food-contact equipment regulations and routine cleaning protocols. The small Cr observation in the FDA TDS data for some dairy products (see [[ingredients/processed-american-cheese]] for a more notable example) is worth monitoring but is not documented as a systematic issue for fluid milk.

## Ingredient-derivative risk

Reduced-fat milk is a commodity ingredient used in manufactured dairy products, baked goods, beverages, and infant formula. In each of these applications, the metal contribution from the milk fraction is negligible given the near-zero baseline. The highest-concern derivatives are infant formula products that use reduced-fat or nonfat dry milk as a primary protein and mineral source, but the risk in those products comes from other ingredients (vegetable oils, mineral premixes, carbohydrate sources) rather than from the dairy fraction itself. Evaporated reduced-fat milk involves modest concentration through water removal, but given the near-zero baseline, the resulting product remains low-risk.

## Mitigation options

### Sourcing levers

Given the inherently low metal content of reduced-fat milk in commercial supply chains, sourcing levers have limited practical relevance for this commodity. Restricting procurement to herds with documented low environmental Pb and Cd exposure (for example, herds not grazing near industrial sites) is a standard precautionary practice for infant formula manufacturers, but is unlikely to produce measurable differences in metal content for retail reduced-fat milk.

### Agronomic levers

_No quantified data on agronomic levers specific to reducing metals in cow milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

No processing lever specific to fat reduction alters the metal profile. Standard pasteurization, homogenization, and fat separation practices do not introduce or remove metals.

### Formulation levers

_No quantified data on formulation levers for reduced-fat milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine surveillance testing of fluid milk for Pb and Cd by ICP-MS is standard practice in commercial dairy supply chains and regulatory monitoring programs. Given the consistently near-zero values in the current corpus, this commodity is low-priority for intensive lot-level testing unless specific supply-chain risk factors (proximity to industrial contamination, use in infant formula) warrant elevated scrutiny.

### Packaging and storage levers

Packaging does not contribute heavy metals to fluid milk under standard HDPE or Tetra Pak formats. Storage at refrigeration temperatures for the intended shelf life does not alter metal content.

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the maximum Pb level for raw milk, heat-treated milk, and milk-based products is 0.020 mg/kg (20 ppb) wet weight. A Cd maximum of 0.020 mg/kg (20 ppb) applies to milk and milk products. The FDA does not publish a specific action level for Pb or Cd in fluid milk; the general tolerance and surveillance framework under 21 CFR applies, and reduced-fat milk is not specifically addressed in the Closer to Zero guidance documents (see [[regulations/fda-closer-to-zero]]) because dairy is not among the high-priority categories for infant and young child Pb exposure identified in the CTZ program.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Milk, reduced fat, fluid (n=27); detectable concentrations for Pb |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 7 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
