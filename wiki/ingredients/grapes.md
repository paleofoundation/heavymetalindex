---
title: "Grapes"
type: ingredient
commodity: grapes
label: "Grapes"
aliases: [grape]
category: fruit
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  iAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  tAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
  tHg:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Al:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-03
  Sn:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  U:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-03
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-12
sources: 2
---

# Grapes

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Grapes (Vitis vinifera and related species) are a vine fruit whose metal burden arises from a combination of root uptake from vineyard soils and surface deposition on the thin skin. Grapevines are deep-rooted perennial crops that access subsoil mineral fractions over decades of growth, and vineyard soils accumulate heavy metals through two principal routes: application of copper-based fungicides (copper can co-carry arsenic impurities and displace other metals in soil chemistry), and in some historical viticultural regions, application of lead arsenate as a pesticide before its prohibition. The berry skin is thin relative to citrus rind or apple cuticle, providing less of a barrier to surface-deposited Pb from atmospheric deposition, road traffic, or spray residues. Total arsenic in grapes reflects both soil arsenic uptake through roots and historical pesticide residue patterns in vineyard soils. The dominant arsenic species in grape tissue is expected to be predominantly inorganic, unlike in marine food, because the organoarsenical metabolism pathways in terrestrial plants produce different speciation profiles than marine organisms. The FDA TDS data for seedless red/green grapes (n=27) shows tAs at a median of 3.7 ppb (max 9 ppb) as the most consistently detectable analyte in this matrix, with Ni detected at the 95th percentile [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 (in progress) | — | — | — | — |
| Cd | n=2 (in progress) | — | — | — | — |
| iAs | n=1 (in progress) | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=2 (in progress) | — | — | — | — |
| Ni | n=2 (in progress) | — | — | — | — |
| Al | n=1 (in progress) | — | — | — | — |
| Cr | n=2 (in progress) | — | — | — | — |
| Sn | n=1 (in progress) | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 88, "Grapes, seedless, red/green, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Grapes, seedless, red/green, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 44.1 | 110 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 5.2 | in profile |
| tAs | 27 | 0 | 0 | 3.7 | 7.04 | 8.1 | 9 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Vineyard origin is the primary source of variation in grape metal concentrations. European wine-producing regions with long agricultural histories and documented legacy pesticide use (particularly in France, Italy, and Spain) carry vineyard soils with elevated Cu (from Bordeaux mixture applications) and, in some historically documented areas, elevated Pb and As from lead arsenate use. New World wine-grape growing regions (California, Chile, Australia, New Zealand, South Africa) generally have lower legacy pesticide contamination burdens in soils but may show elevated natural geogenic arsenic in regions with volcanic geology. Table grape production, which is distinct from wine grape production and is more relevant to the frozen or fresh grape market, is concentrated in California, Chile, and South Africa and tends to involve different viticultural practices and soil contexts than Old World wine vineyards. The FDA TDS data (n=27, seedless red/green raw grapes) reflects the US market table grape distribution, which is dominated by California and Chilean production [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Processing effects

Washing fresh grapes before consumption or before commercial processing removes surface-deposited Pb and Cd from the skin, reducing the contribution of atmospheric deposition to the measured metal burden. Drying grapes to produce raisins removes approximately 70 to 75 percent of the fruit's moisture while retaining essentially all of the metals, resulting in a roughly threefold to fourfold concentration of metals per gram dry weight in raisins relative to fresh grapes. This concentration effect is the most important processing-step risk for derivatives of this commodity. Juicing separates juice from skin and seeds; the juice fraction carries the water-soluble metal fraction while skin and seeds retain the protein-bound and particle-associated fraction. Wine production involves fermentation in contact with skins (for red wines) or pressing first (for white wines), then potential fining with bentonite clay (which adsorbs some metal species), which can reduce final wine metal concentrations relative to the grape juice starting material.

## Ingredient-derivative risk

Raisins are the most significant metal-concentrating derivative of grapes. The moisture removal during drying concentrates all metals in proportion to the dry-weight ratio; a raisin with 15 percent moisture versus a fresh grape with 80 percent moisture would carry approximately fivefold higher metal concentration per gram on a wet-weight basis. Raisins used as ingredients in breakfast cereals, trail mixes, granola bars, and baked goods contribute metals proportional to their weight fraction, and their higher concentration per gram relative to fresh grapes makes them a more consequential metal contributor in composite products. Grape juice, wine, grape seed extract, and grape skin extract each partition grape metals differently; grape seed extract concentrates metal-binding tannins and may carry higher metal loads per gram than juice.

## Mitigation options

### Sourcing levers

Specifying table grape origin from producers with documented soil metal testing and from regions without documented legacy lead arsenate application history reduces the expected Pb and As burden. For raisin products specifically, the concentration effect means that sourcing specification has amplified importance: the same soil-level difference in Pb or As translates to a fivefold larger absolute difference per gram in the dried product.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing grapes before drying or juicing reduces surface-deposited metal contamination. For raisin production, washing the fresh grape before drying removes surface Pb and other atmospheric deposits before they are concentrated by moisture loss. The effect magnitude for washing-then-drying is not characterized in the current corpus.

### Formulation levers

In composite food products that include raisins as an ingredient, substituting with lower-metal fruit pieces (apple, pear, lower-risk dried fruits) reduces the metal contribution from the dried fruit fraction if the arsenic or lead burden of the raisin supply is a concern.

### Testing and QC levers

Given the concentration effect in raisins, lot-level ICP-MS testing for Pb, As, and Cd on incoming raisin batches is more productive than testing fresh grapes for most food manufacturing applications. For fresh grape supply chains, testing at the first point of import or first domestic pack-house is the most efficient point of control.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in fresh grapes is 0.10 mg/kg wet weight and for Cd it is 0.050 mg/kg wet weight. For dried grapes (raisins), the applicable limit in the EU food contaminant regulations accounts for the concentration effect by applying limits to the product as sold (which is at raisin moisture content, not fresh grape moisture content); the dry-weight basis distinction is critical when comparing raisin measurements to fresh grape regulatory limits. There are no specific US FDA action levels for metals in fresh or dried grapes.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chen2024-trimodal-hg-food-sensor\|Chen et al. 2024]]. *Design and fabrication of self-calibration colorimetric/fluorescence/SERS tri-modal optical sensor for highly rapid and accurate detection of mercury ions in foods*, Food Chemistry: X | 2024 | Peer-reviewed | tHg sensor validation using spiked grape matrix; no primary occurrence data — analytical-method context confirming tHg detection in grape at method LOQ range |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Grapes, seedless, red/green, raw (n=27); detectable concentrations for Ni, U, tAs |
<!-- END: hmi-source-legend -->

