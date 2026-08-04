---
title: "Pork sausages"
type: ingredient
commodity: pork-sausages
label: "Pork sausages"
aliases: [pork sausage]
category: meat-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 4.4]
    p95_ppb: 4.9
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0.7
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
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
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 1.3]
    p95_ppb: 1.6
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
---

# Pork sausages

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Pork sausages are processed meat products made from a mixture of minced pork meat, fat, flavourings, and typically cereal-based fillers such as wheat rusk or breadcrumbs, encased in natural or collagen casings. The heavy metal profile of pork sausages reflects contributions from three distinct ingredient pathways, each with a different metal source.

The dominant pork meat fraction, which comprises skeletal muscle and fat, contributes very low levels of cadmium and lead because these metals do not bioaccumulate efficiently in mammalian muscle or adipose tissue. However, many commercial sausage formulations include a small proportion of mechanically recovered meat (MRM) or offal trimmings, and sausages containing any liver or kidney fraction carry elevated Cd from those organ tissues, where cadmium concentrates at levels roughly 10 to 100 times higher than skeletal muscle following dietary accumulation in the pig.

The cereal filler fraction (typically wheat rusk) introduces cadmium through the well-documented wheat grain Cd pathway: cadmium is taken up by wheat roots from soil and translocates to grain, and the bran fraction that is often present in rusk carries higher Cd than white flour derived from the endosperm. Wheat-rusk inclusion at levels of 5-15 percent by weight in standard pork sausage formulations represents a meaningful Cd contributor to the finished product.

The casing does not contribute significant metals. Natural casings (cleaned intestine) would carry minimal residual Cd or Pb. Collagen casings do not introduce metals at analytically significant levels. Seasonings and flavourings at typical inclusion levels are negligible metal contributors unless specific flavouring ingredients have known elevated metal profiles.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–4.4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 0 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.3 | low | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Pork sausage metal concentrations vary primarily as a function of formulation (the proportion of organ meat, the type of cereal filler, and the rusk Cd level) rather than geographic production origin. UK sausage formulations, which typically include higher rusk proportions than some continental European equivalents, may carry slightly higher Cd from the wheat filler fraction when UK wheat rusk is derived from higher-Cd durum or harder wheat varieties. The FSA/Fera 2016 survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) includes pork sausages as a UK retail composite, providing one occurrence reference point. No multi-country comparative dataset for pork sausage metal concentrations is available in the current corpus.

The FDA TDS FY2018-FY2020 dataset includes a pork sausage (link/patty, pan-cooked) entry (TDS Food 19, n=27) that shows Pb ranging up to a maximum of 4.9 ppb and Cd predominantly at zero with low-level detection in some market samples, reflecting US market sausages where wheat rusk may not be present in all formulations and organ-meat inclusion is less common than in UK sausages ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Processing effects

Mincing and emulsification homogenise the metal burden across the meat, fat, filler, and any organ-meat fractions; any pocket of higher Cd from an organ-meat inclusion is distributed throughout the product. Cooking (pan-frying, grilling, baking) drives moisture loss, which concentrates metals slightly on a wet-weight basis. Smoking does not add metals at analytically significant levels. The net cooking effect is minor relative to the formulation-driven Cd variance.

## Ingredient-derivative risk

Standard pork sausage is the base form on this page. Cocktail sausages and chipolatas are small-format versions of essentially the same formulation and share the same metal profile drivers. Cooked-in-can sausages are subject to Sn migration from tinplate and would therefore have an additional Sn pathway not present in fresh or chilled sausages. Sausage meat used as an ingredient in composite products contributes proportionally to its inclusion level.

## Mitigation options

### Sourcing levers

Specifying low-organ-meat or organ-meat-free pork sausage formulations for applications where Cd is a concern eliminates the organ-tissue Cd pathway. Sourcing wheat rusk from low-Cd wheat flour rather than whole-grain or bran-containing rusk reduces the cereal-filler Cd contribution. Supplier formulation transparency and filler-specification documentation are the verification mechanisms.

### Agronomic levers

Soil pH management and cultivar selection in the wheat supply chain upstream of rusk manufacture reduce cereal-filler Cd; this lever is at the wheat-growing and rusk-manufacturing stages and is not directly accessible to sausage manufacturers without supplier engagement.

### Processing levers

Using refined white wheat flour rather than bran-containing rusk in sausage formulations reduces the Cd contribution from the cereal fraction. Reducing the total rusk inclusion proportion in the formulation reduces the Cd load proportionally.

### Formulation levers

Replacing wheat rusk with alternative cereal or starch fillers that carry lower Cd (for example, tapioca starch or rice starch from verified low-Cd sources) is a formulation lever available to manufacturers seeking to reduce product Cd. Eliminating organ-meat inclusions from formulations directed at vulnerable populations is a higher-impact lever where organ-meat inclusion is confirmed.

### Testing and QC levers

Lot-level ICP-MS testing of finished pork sausage for Cd provides assurance for markets where EU pork muscle Cd limits or product-specific limits apply. Testing incoming wheat rusk or flour for Cd addresses the primary variable cereal-filler contributor. Given the formulation variability across sausage types, testing should be formulation-specific rather than relying on generic pork sausage reference values.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in processed meat products is governed by the ML for pork muscle meat (0.050 mg/kg) applied to the meat fraction; composite products are assessed proportionally to their meat content. Sausages are regulated as processed meat products under EU food law. For lead in processed meat, the EU ML for meat-based products applies.

No US FDA action level for Cd or Pb in pork sausage applies under the current regulatory framework. FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not list pork sausage as a priority category. Codex Cd ML for meat applies to the meat fraction ([[regulations/codex-cadmium-mls]]).

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 19, "Pork sausage (link/patty), pan-cooked." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Pork sausage (link/patty), pan-cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 1.3 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 43 | in profile |
| Pb | 27 | 0 | 4.9 | in profile |
| U | 27 | 0 | 1.9 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Pork sausage (link/patty), pan-cooked (n=27); detectable concentrations for Cd, Ni, Pb, U |
| 2 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
