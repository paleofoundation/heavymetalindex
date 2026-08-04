---
title: "Turkey"
type: ingredient
commodity: turkey
label: "Turkey"
aliases: []
category: taxonomy-placeholder
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
    typical_ppb: [0, 5.4]
    p95_ppb: 7.5
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
    p95_ppb: 0.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [meat-and-poultry-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 3
---

# Turkey

## Overview

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Why this commodity accumulates heavy metals

Turkey is a warm-blooded terrestrial animal whose muscle meat is a low-accumulator matrix for most heavy metals. Unlike fish, which bioaccumulate methylmercury (MeHg) through aquatic food chains, and unlike plant foods, which take up metals from soil, poultry muscle tissue is metabolically regulated: the bird's kidneys and liver process and excrete most systemic metals before they can accumulate in skeletal muscle. Residual metals in muscle reflect dietary intake from feed and water combined with the bird's metabolic efficiency of excretion. The FDA TDS FY2018-FY2020 data for turkey breast (oven-roasted, n=27) show near-zero concentrations for Cd, Cr, Ni, Pb, and tHg, with only tAs showing any signal in the upper part of the distribution, reaching a maximum of 9.6 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020]]). This tAs signal likely reflects carry-through of feed-borne organic arsenicals from poultry feed, a pathway studied more extensively in broiler chickens but applicable to turkeys raised under comparable commercial conditions. The historical use of roxarsone and nitarsone in poultry feed as growth promoters contributed to elevated As in broiler and turkey tissue; regulatory withdrawal of these compounds in the US (completed by 2015) has reduced but not eliminated this pathway.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–5.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Routing

This node is linked from [[products/meat-and-poultry-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 26, "Turkey breast, oven-roasted." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Turkey breast, oven-roasted" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | in profile |
| Cr | 27 | 0 | 59 | in profile |
| Ni | 27 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 2.4 | in profile |
| tAs | 27 | 0 | 9.6 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data for turkey breast (oven-roasted, n=27) show that Cd, Cr, Ni, Pb, and tHg are at or below detection limits across the full distribution, with only tAs and U showing any non-zero values at the upper tail ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The tAs maximum is 9.6 ppb; the U maximum is 2.4 ppb. Turkey from US commercial supply chains post-2015, when roxarsone was withdrawn from the market, would be expected to show lower tAs than historical data from before that regulatory change. Geographic variation in turkey metal profiles is not well characterised in the current corpus; most available occurrence data originates from the US or European regulatory monitoring programmes.

## Processing effects

Oven roasting, which is the matrix reported in the FDA TDS data, removes free water through evaporation, which would concentrate non-volatile metals by a modest factor relative to raw muscle. Cooking methods that involve water immersion (poaching, boiling) may leach small amounts of metals into the cooking water, slightly reducing the metal content of the cooked meat. Neither effect is large enough to materially shift the risk classification of turkey as a low-accumulator matrix. Processed turkey products (deli slices, ground turkey, turkey sausage) may introduce additional ingredients (preservatives, starch fillers, casings) at low concentrations that contribute negligible additional metal load.

## Ingredient-derivative risk

Turkey muscle meat is used in products including roasted deli slices, ground turkey, turkey meatballs, turkey sausage, and turkey-based baby food purees. The metal profile of the muscle is carried into all of these derivatives without significant amplification or dilution. Organ meats (turkey liver, kidney) are a separate matter: kidneys and liver concentrate Cd systemically, so organ-based products would carry substantially higher Cd than muscle. This page covers turkey muscle only; organ-specific risk belongs on dedicated pages when ingested.

## Mitigation options

### Sourcing levers

Sourcing turkey from flocks fed on verified low-As feed (certified free of arsenical additives) is the primary intervention for the tAs signal. In the US post-2015 regulatory environment, commercial feed is expected to be arsenical-additive-free; however, supplier documentation of this is appropriate for premium or certified product categories.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine Pb and Cd testing of turkey muscle is unlikely to yield detectable values given the consistently near-zero distributions in available surveys. Targeted tAs testing is warranted where feed provenance is uncertain or where products are positioned for infant or toddler markets, given that FDA Closer to Zero applies to baby food purees containing turkey.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets maximum levels for turkey muscle meat under [[regulations/eu2023-contaminants-maximum-levels]]: Pb at 0.10 mg/kg (100 ppb) and Cd at 0.050 mg/kg (50 ppb) for poultry muscle. No Hg or As specific maximum levels apply to poultry muscle under current EU contaminant regulations. In the US, [[regulations/fda-closer-to-zero]] Pb guidance (20 ppb for meat-based baby food purees) applies when turkey is used in products formulated for infants. No general FDA action level for As, Pb, or Cd in poultry muscle meat is currently promulgated for the domestic retail market.

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
| 1 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr concentrations |
| 3 | [[sources/raeeszadeh2021-animal-meat-metals-iran\|Raeeszadeh et al. 2021]]. *Determination of some heavy metals concentration in species animal meat (sheep, beef, turkey, and ostrich) and carcinogenic health risk assessment in Kurdistan province, western Iran*, Research Square | 2021 | Preprint | IR Se, Pb, Cd, tAs, Zn, Ni, Co, Cu, Cr occurrence in Meat samples from Sanandaj distribution centers in Kurdistan province, western Iran: 45 beef, 45 sheep, 40 turkey, and... (n=170) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 4 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
