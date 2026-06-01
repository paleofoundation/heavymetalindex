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
    typical_ppb: [0, 5.4]
    p95_ppb: 7.5
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
    p95_ppb: 0.8
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [meat-and-poultry-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 2
---

# Turkey

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Why this commodity accumulates heavy metals

Turkey is a warm-blooded terrestrial animal whose muscle meat is a low-accumulator matrix for most heavy metals. Unlike fish, which bioaccumulate methylmercury (MeHg) through aquatic food chains, and unlike plant foods, which take up metals from soil, poultry muscle tissue is metabolically regulated: the bird's kidneys and liver process and excrete most systemic metals before they can accumulate in skeletal muscle. Residual metals in muscle reflect dietary intake from feed and water combined with the bird's metabolic efficiency of excretion. The FDA TDS FY2018-FY2020 data for turkey breast (oven-roasted, n=27) show near-zero concentrations for Cd, Cr, Ni, Pb, and tHg, with only tAs showing any signal at the higher percentiles (p95 = 7.47 ppb, max = 9.6 ppb) ([[sources/fda2022-tds-elements-fy2018-fy2020]]). This tAs signal likely reflects carry-through of feed-borne organic arsenicals from poultry feed, a pathway studied more extensively in broiler chickens but applicable to turkeys raised under comparable commercial conditions. The historical use of roxarsone and nitarsone in poultry feed as growth promoters contributed to elevated As in broiler and turkey tissue; regulatory withdrawal of these compounds in the US (completed by 2015) has reduced but not eliminated this pathway.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0–5.4 | 7.5 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0 | 0.8 | high | — |

## Routing

This node is linked from [[products/meat-and-poultry-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 26, "Turkey breast, oven-roasted." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Turkey breast, oven-roasted" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 59 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.77 | 2.4 | in profile |
| tAs | 27 | 0 | 0 | 0 | 5.38 | 7.47 | 9.6 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data for turkey breast (oven-roasted, n=27) show that Cd, Cr, Ni, Pb, and tHg are at or below detection limits across the full distribution, with only tAs and U showing any non-zero values at the upper tail ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The tAs p90 is 5.38 ppb and max is 9.6 ppb; the U p95 is 0.77 ppb and max is 2.4 ppb. Turkey from US commercial supply chains post-2015, when roxarsone was withdrawn from the market, would be expected to show lower tAs than historical data from before that regulatory change. Geographic variation in turkey metal profiles is not well characterised in the current corpus; most available occurrence data originates from the US or European regulatory monitoring programmes.

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr concentrations |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
<!-- END: hmi-page-history -->
