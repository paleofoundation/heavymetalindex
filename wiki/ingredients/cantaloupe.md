---
title: "Cantaloupe"
type: ingredient
commodity: cantaloupe
label: "Cantaloupe"
aliases: ["Cantaloupe, raw/frozen", "cantaloupe"]
category: fruit
tds_food:
  number: 89
  description: "Cantaloupe, raw/frozen"
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
    typical_ppb: [2.5, 14.8]
    p95_ppb: 21.6
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
    typical_ppb: [0, 18]
    p95_ppb: 18.7
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
    typical_ppb: [0, 172]
    p95_ppb: 234
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
updated: 2026-05-13
sources: 1
---

# Cantaloupe

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 89, "Cantaloupe, raw/frozen." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Cantaloupe (Cucumis melo) is a cucurbit fruit with one of the lowest heavy metal accumulation profiles among common food crops. The edible interior flesh is protected by a thick, netted outer rind that physically separates it from direct soil contact, and the plant does not prioritize metal translocation to fruit tissue in the way that leafy vegetables or root crops do. Lead uptake from soil into melon flesh is limited both by physical rind protection and by the low phloem mobility of Pb, which restricts translocation from roots to developing fruit. Cadmium uptake is higher in cucurbits than lead, but cantaloupe flesh still shows Cd well below levels typical of brassica vegetables or root crops in the same soil. The FDA FY2018-FY2020 Total Diet Study confirms this low-accumulation pattern, with Pb, Cr, tHg, and U at or below the reporting limit, and Cd in the single-digit to low-teen ppb range [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel and total arsenic are detectable but at modest concentrations. Cantaloupe is not a canned product in the TDS food assessed (TDS Food 89 is raw/frozen), so tin migration from packaging is not a factor for this commodity.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | data gap | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | data gap | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cantaloupe, raw/frozen" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 2.46 | 7.1 | 14.8 | 21.6 | 36 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 75 | 172 | 234 | 270 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 7 | 18 | 18.7 | 26 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in cantaloupe (raw/frozen) in the range of 0 to 36 ppb (median 7.1 ppb, p90 14.8 ppb, n=27 composites) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 0 to 270 ppb (median 75 ppb, p90 172 ppb), which is unexpectedly high relative to other low-accumulation fruits and may warrant confirmation with independent sources. Total arsenic ranged from 0 to 26 ppb (median 7 ppb). Pb, Cr, tHg, and U were at or below the reporting limit across 27 composites. The Ni values are the most notable finding in the TDS data for this commodity; the corpus currently does not include independent studies to confirm or contextualize the cantaloupe Ni range. Geographic variation is expected to be minimal given the physical protection afforded by the rind; regional soil quality differences that substantially affect root or leafy vegetables have a smaller impact on cucurbit flesh.

## Processing effects

Cantaloupe consumed as fresh or frozen halves or cubes does not involve processing that would alter metal concentrations in the flesh. Washing the outer rind before cutting is a food safety practice (to prevent cross-contamination from the rind surface to the flesh during slicing) that does not directly reduce intrinsic metal content in the flesh. Cantaloupe pureed for smoothies, baby food, or juice processing carries whatever metal load is in the flesh into the final product at concentration determined by the flesh-to-water ratio. Frozen cantaloupe undergoes minimal processing (peeling, cutting, individual quick freezing) that does not alter metal concentrations.

## Ingredient-derivative risk

Cantaloupe is used in fruit salads, smoothies, baby food purees, juices, and dried snack products. Given its very low intrinsic metal load for most analytes, it contributes minimally to product-level metal concentrations even at high inclusion rates. Dried cantaloupe concentrates metals proportionally to moisture loss; a product dried to 10 percent of original moisture would carry approximately 10 times the fresh-weight concentration, but from a very low baseline this remains well within regulatory limits for most analytes. The notable exception to the low-risk profile is the Ni range observed in TDS data (up to 270 ppb), which if confirmed by additional sources would warrant inclusion in product-level Ni exposure estimates for formulations using cantaloupe at high inclusion rates.

## Mitigation options

### Sourcing levers

Standard clean-soil agricultural sourcing is sufficient for most analytes given the low accumulation baseline. If the Ni values observed in TDS data are confirmed by additional surveys as consistently elevated, sourcing from lower-Ni-soil origins would become relevant. Irrigation water quality monitoring (particularly for Cd) provides upstream assurance.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Soil pH management and avoidance of contaminated irrigation water are general best practices applicable here as for other cucurbit crops.

### Processing levers

No processing steps are available to meaningfully reduce the intrinsic metal content of cantaloupe flesh. Washing the exterior rind before slicing prevents surface contamination of the flesh; this is standard practice.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Given the low baseline, formulation substitution is not indicated on metal-safety grounds for most analytes.

### Testing and QC levers

Routine heavy metal testing of cantaloupe is low priority given the consistently low values in TDS data for most analytes. If the Ni range is confirmed as elevated in additional studies, Ni verification on incoming lots would become relevant for products targeting sensitive populations.

### Packaging and storage levers

Packaging and storage conditions are not a material driver of heavy metal load in fresh, frozen, or pureed cantaloupe. No tin migration pathway applies to this commodity in its primary form.

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Pb in fruit of 0.10 mg/kg (100 ppb) wet weight and for Cd in fruit of 0.050 mg/kg (50 ppb) wet weight. Cantaloupe falls under these general fruit limits. The Codex Alimentarius [[regulations/codex-cadmium-mls]] sets analogous Cd limits for fruit. No specific FDA action levels for cantaloupe are currently operative. Under FDA Closer to Zero [[regulations/fda-closer-to-zero]], any cantaloupe puree marketed as a food for young children would fall within the scope of Pb action levels under development for fruit-based baby foods.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|Elbagory et al. 2025]]. *Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin*, Horticulturae | 2025 | Peer-reviewed | IN Cd, Cr, Pb, tAs, Al occurrence in 200 melon fruit samples (50 per variety) of 4 varieties — watermelon (Arka Shyama and Crimson Sweet) and... (n=200) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cantaloupe, raw/frozen (n=27); detectable concentrations for Cd, Ni, tAs |
<!-- END: hmi-source-legend -->

