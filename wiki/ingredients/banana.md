---
title: "Banana"
type: ingredient
commodity: banana
label: "Banana"
aliases: [bananas, banana-peel]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 57]
    p95_ppb: 109.9
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [1.5, 13.4]
    p95_ppb: 14.2
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
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
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 6
---

# Banana

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Bananas are tropical monocarpic fruits grown in perennial rhizome-based plants across equatorial regions including Central and South America, the Caribbean, West Africa, Southeast Asia, and the Philippines. The banana fruit is enclosed in a thick peel that provides a significant physical barrier between the edible pulp and the external environment, substantially limiting direct surface deposition of atmospheric metals on the flesh. The primary metal exposure route for the pulp is root uptake through the corm and rhizome from surrounding soil, which delivers metals via the vascular system into the developing fruit.

The FDA FY2018-FY2020 TDS data for raw banana (TDS Food 80, n=27) show that bananas are a low-metal-burden commodity by most measures: Pb, Cd, Cr, U, and tHg were all reported at zero across all or nearly all samples; tAs reached a maximum of 3.2 ppb but had a median of zero; Ni was the only analyte with a meaningful distribution, reaching a maximum of 140 ppb and a p90 of 57 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). This is consistent with the general understanding that thick-skinned tropical fruits present low metal risk to consumers, and is corroborated by [[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]] (open-market banana, Bahir Dar, Northwest Ethiopia), which reported Pb non-detect, Cd 0.130 ± 0.001 mg/kg dry weight (below the FAO/WHO 0.2 mg/kg limit), and Cr 0.773 ± 0.010 mg/kg dry weight in the edible portion — yielding the lowest hazard index (0.02) of the three fruits surveyed at those markets, against mango at 3.69.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/garuba2024-heavy-metals-commercial-baby-foods\|2]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|3]] |
| Cd | n=5 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/garuba2024-heavy-metals-commercial-baby-foods\|2]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|3]] |
| iAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=3 | 0 | medium | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|1]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=3 | 0 | high | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Ni | n=3 | 0–57 | high | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| Al | n=1 | 0 | low | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|1]] |
| Cr | n=4 | 0 | medium | [[sources/mekonnen2024-ethiopia-fruit-metals\|1]], [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Sn | n=1 | 1.5–13.4 | low | — |
| U | n=2 | 0 | high | — |

## Routing

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 80, "Banana, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Banana, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 57 | 109.9 | 140 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 3.2 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data (TDS Food 80, n=27) provide a US retail distribution, representing composite samples purchased across multiple US cities and reflecting the blended origin of retail bananas, predominantly from Ecuador, Guatemala, Costa Rica, Colombia, and Honduras ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). No geographic separation by source country is available in TDS data. The [[sources/mekonnen2024-ethiopia-fruit-metals|Mekonnen et al. 2024]] study from Bahir Dar, Ethiopia, provides an African open-market context (banana n=9 composite from 40 individual samples) reporting Pb non-detect, Cd 0.130 ± 0.001 mg/kg dw, and Cr 0.773 ± 0.010 mg/kg dw on a dry-weight basis — confirming the low-Pb, low-Cd banana profile under different soil and agricultural-input conditions, though the dry-weight basis means direct comparison to FDA wet-weight values requires a moisture-content adjustment that the source does not provide. Variety variation (Cavendish versus plantain versus red banana) may produce different metal distributions, but no varietal comparison appears in the current corpus. The FSA UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) includes banana among measured ingredients with values pending extraction.

## Processing effects

The thick peel is discarded before consumption, removing any metals deposited on the outer surface. This is an effective natural separation step for atmospheric Pb deposition. Processing banana into purée (for baby food) or freeze-dried powder concentrates the pulp fraction; cooking (for banana bread, baked products) does not remove metals. Banana purée for infant food retains the full pulp metal load without the peel's surface fraction. Freeze-drying concentrates metals proportionally to the water removed. Dried banana chips are produced from sliced, sometimes peel-off banana; if the peel is removed before drying, the chip carries only pulp-level metals, but if skin is partially retained in certain products, surface metals carry over.

## Ingredient-derivative risk

The primary derivative forms are baby food purée, banana powder (for sports nutrition and baking), banana chips, and banana in blended fruit pouches. Baby food purées are the highest-priority concern from an infant exposure standpoint, given frequent consumption and the higher metal sensitivity of infants. The low overall metal burden of banana flesh (particularly Pb and Cd near zero in TDS data) makes banana a generally lower-risk ingredient in blended formulations. Banana purée has been examined as part of weaning food arsenate exposure studies ([[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor et al. 2018]] examined weaning foods including fruit-category foods); banana's tAs maximum of 3.2 ppb in TDS data indicates negligible arsenic contribution relative to grain-based ingredients.

## Mitigation options

### Sourcing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peel removal before processing eliminates surface-deposited metals and is standard for all banana purée and derivative production. No additional processing-lever data appear in the current corpus.

### Formulation levers

Banana's low metal burden makes it a favorable ingredient for blending with higher-metal ingredients to dilute the formulation's overall metal concentration; this lever is most relevant for fruit pouch products where banana is combined with cereals, root vegetables, or other higher-burden ingredients.

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 applies the general fresh fruit maximum level to banana: Pb 0.10 mg/kg (100 ppb) and Cd 0.050 mg/kg (50 ppb), wet weight as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). The TDS data showing Pb and Cd at or near detection limits suggest that bananas in US retail would be well within these limits. No US FDA action level for Pb or Cd in fresh banana exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]). For processed banana purée in baby food, applicable action levels would derive from the processed product category. No Codex Alimentarius ML for heavy metals in banana appears in the current corpus.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Heavy Metals Analysis in Selected Commercial Baby Foods for Infant and Toddler: Health Risk Assessment of Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | Pb and Al in commercial banana-containing US baby food purees with Al exceeding the maximum residue limit |
| 2 | [[sources/islam2024-heavy-metals-bangladeshi-fruits-review\|Islam et al. 2024]]. *A Systematic Review on Heavy Metals Contamination in Bangladeshi Fruits and Their Associated Health Risks*, Environmental Health Insights | 2024 | Review | Bangladeshi banana tAs, Cd, Pb, Cr, Ni, and tHg occurrence within a multi-fruit systematic review, with Pb and Cd above WHO/FAO limits for banana |
| 3 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | ET Pb, Cd, Cr occurrence in Commonly consumed fruits (mango, banana, orange) from open markets in Bahir Dar, Northwest Ethiopia (n=120) |
| 4 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Banana, raw (n=27); detectable concentrations for Ni, tAs |
| 5 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | Cr, Ni, Cd, and Pb in banana sampled across 28 Khyber Pakhtunkhwa markets, providing a low-contamination dry-weight baseline |
<!-- END: hmi-source-legend -->

