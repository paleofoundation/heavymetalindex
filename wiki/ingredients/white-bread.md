---
title: "White bread"
type: ingredient
commodity: white-bread
label: "White bread"
aliases: [bread white]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5.3]
    p95_ppb: 5.6
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [21, 33.4]
    p95_ppb: 35.4
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 230]
    p95_ppb: 260
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [3.3, 6.8]
    p95_ppb: 7.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [61.6, 104]
    p95_ppb: 117
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 4292]
    p95_ppb: 6160
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 61.6]
    p95_ppb: 68.9
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [0, 67.3]
    p95_ppb: 267
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  U:
    status: populated
    typical_ppb: [1.3, 11]
    p95_ppb: 11.7
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

# White bread

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

White bread is produced from refined wheat flour (typically enriched white flour in the US) that has had the bran and germ fractions removed during milling. This processing step is the defining feature of white bread's metal profile: Cd partitions preferentially to the bran and germ of the wheat kernel, so refined flour carries approximately half the Cd of whole-wheat flour. The endosperm-dominant composition of white flour therefore results in a materially lower Cd content than whole-wheat bread or bran-enriched products made from the same grain. FDA TDS FY2018-FY2020 data (n=27) for enriched white pre-sliced bread confirm this pattern, with Cd showing a median of 29 ppb and a maximum of 37 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Nickel in the same dataset has a median of 79 ppb and a maximum of 120 ppb, consistent with wheat's background Ni contribution even through refining. Lead is near detection limits across the distribution (max = 23 ppb). The primary metal accumulation pathway for all values present is soil uptake by the wheat crop; commercial yeast, salt, and water additives in bread manufacturing contribute negligible metals.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–5.3 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Cd | n=3 | 21–33.4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| iAs | n=2 | 0–230 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| tAs | n=2 | 3.3–6.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| tHg | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Ni | n=3 | 61.6–104 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | n=1 | 0–4292 | low | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|1]] |
| Cr | n=3 | 0–61.6 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Sn | n=1 | 0–67.3 | low | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|1]] |
| U | n=2 | 1.3–11 | low | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 58, "Bread, white, enriched, pre-sliced." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Bread, white, enriched, pre-sliced" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 18 | 37 | in profile |
| Cr | 27 | 0 | 100 | in profile |
| Ni | 27 | 0 | 120 | in profile |
| Pb | 27 | 0 | 23 | in profile |
| U | 27 | 0 | 13 | in profile |
| tAs | 27 | 0 | 9 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=27) for enriched white pre-sliced bread provide the most detailed available US dataset for this matrix ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The Cd distribution ranges from 18 ppb (minimum) to 37 ppb (maximum) with a median of 29 ppb, indicating a relatively narrow and consistent Cd range for a commercially standardised product. Ni ranges from 0 to 120 ppb (median 79 ppb). The FSA/Fera FS102048 UK survey provides a second data point that remains quantitatively unstructured in the current corpus ([[sources/fsa2016-infant-food-formula-metals-survey]]). White bread from different wheat sourcing regions would be expected to vary in Cd concentration in proportion to the wheat grain's Cd, but the refining step that removes the bran compresses the upper end of the distribution relative to whole-wheat products, resulting in a narrower Cd range across brands than is observed for whole-wheat bread.

## Processing effects

The milling step that produces white flour from wheat removes the bran and germ, reducing Cd and Ni content relative to the whole grain. Enrichment of the flour (adding back iron, thiamine, riboflavin, niacin, and folic acid to meet regulatory standards) uses food-grade nutrient forms that do not contribute heavy metals at measurable concentrations. Bread-making itself involves mixing, fermentation by yeast, proofing, and baking at 180 to 220 degrees Celsius. None of these steps remove or add heavy metals. The leavening step (yeast fermentation) produces CO2 and alcohol and alters the bread matrix physically and chemically, but has no established effect on metal concentrations in the finished loaf. Metal concentrations in finished white bread on a dry-weight basis are therefore determined entirely by the metal concentrations in the input flour.

## Ingredient-derivative risk

White bread is one of the lowest-risk positions on the wheat-product metal spectrum because bran removal during milling is the most effective single processing step for reducing Cd in wheat-derived foods. The risk gradient within the bread category runs from white bread (lowest Cd) through mixed-grain breads to whole-wheat bread and bran-enriched breads (highest Cd). White bread used in sandwiches, toast, or as a food-service base product carries the same metal profile as the retail loaf. Breadcrumbs made from white bread are used as coatings in processed products; the breadcrumb fraction contributes its white-bread metal profile proportionally to the finished product by weight.

## Mitigation options

### Sourcing levers

Sourcing refined white flour from wheat varieties and growing regions with lower background Cd is the primary lever. While bran removal already substantially reduces Cd relative to whole grain, flour from lower-Cd wheat grain will produce lower-Cd white bread. Supplier wheat sourcing specifications and periodic commodity testing are the operationalisation of this lever.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

The milling step to white flour is already the most impactful single processing intervention for reducing Cd in wheat products. Further Cd reduction within the white-bread category is limited by the endosperm composition of the grain itself. Using municipal tap water from low-Pb systems (or filtered water) for dough mixing eliminates any Pb contribution from water, though the Pb contribution from process water is negligible under normal conditions.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the consistency of Cd values in the TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]] (18 to 37 ppb range across the US market), routine lot-level Cd testing of white bread specifically is a lower priority than testing for higher-risk wheat products such as whole-wheat bread or bran supplements. Testing incoming flour for Cd at supplier qualification is more efficient than testing finished bread.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets a maximum level for Cd in cereal products of 0.10 mg/kg (100 ppb) under [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]], applicable to white bread as a wheat-based food product. For Pb in cereals, the EU ML is 0.20 mg/kg (200 ppb). The observed Cd values in the TDS data (maximum 37 ppb) are well below the EU ML of 100 ppb. [[regulations/codex-cadmium-mls]] provides the international Codex Cd ML for cereal-based products. In the US, [[regulations/fda-closer-to-zero]] Pb guidance (20 ppb) applies to grain-based baby foods; white bread as an adult or general-population product has no specific FDA Pb or Cd action level.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Bread, white, enriched, pre-sliced (n=27); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
| 2 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 3 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish TDS as-consumed white-bread concentrations and exposure contribution for Al, tAs, iAs, Cd, Cr, Pb, tHg, and Sn |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
