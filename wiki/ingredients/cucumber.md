---
title: "Cucumber"
type: ingredient
commodity: cucumber
label: "Cucumber"
aliases: [cucumber]
category: vegetable
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

# Cucumber

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Cucumber is a cucurbit fruit that is botanically a berry of a vine plant and is consumed as a vegetable in virtually all culinary contexts. It is characterized by a very high water content (approximately 96% water by weight), which substantially dilutes any metal concentration in the edible flesh. Root uptake of cadmium and lead from soil does occur, but the translocation of these metals from root to fruit is limited: cucurbit fruits are physiologically distal from the root system and are not preferred sink tissues for cadmium or lead accumulation under normal soil conditions. The outer skin may carry somewhat more Pb than the interior flesh through atmospheric particle deposition, but the inner flesh is generally the consumed portion when peeled.

The FDA TDS FY2018-FY2020 data for peeled raw cucumber (n=27 composites, TDS Food 123) is consistent with this low-risk characterization: Pb is at zero across all 27 samples, Cr is at zero, U is at zero, and tHg is at zero [[sources/fda2022-tds-elements-fy2018-fy2020]]. Cadmium shows low-level detection in some samples (median 1.6 ppb, maximum 3.2 ppb), and Ni appears in the upper tail (p95 28 ppb, maximum 76 ppb) and tAs is consistently detectable at moderate levels (median 14 ppb, maximum 31 ppb, p90 20 ppb). The total arsenic signal is unexpected given the cucurbit's low-risk general reputation and warrants attention, though without iAs speciation it is not possible to determine the proportion attributable to inorganic versus organic arsenic species in this matrix.

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

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 123, "Cucumber, peeled, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cucumber, peeled, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 1.6 | 2.38 | 2.85 | 3.2 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 28 | 76 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 3.64 | 14 | 20 | 20.7 | 31 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 data for peeled cucumber (n=27) provides the most structured occurrence dataset currently in the corpus for this commodity [[sources/fda2022-tds-elements-fy2018-fy2020]]. The 27-sample US market-basket composites show low cadmium (median 1.6 ppb, max 3.2 ppb) and near-zero lead, chromium, and mercury. The tAs distribution is the most notable feature: a median of 14 ppb and a maximum of 31 ppb across 27 composite samples is consistently detectable, and the FSA/Fera FS102048 survey provides additional data points awaiting structured integration [[sources/fsa2016-infant-food-formula-metals-survey]].

No comprehensive peer-reviewed survey comparing heavy metals in cucumber across different growing regions or cultivation systems (greenhouse vs field, hydroponic vs soil) is currently in the corpus. Cucumber grown in contaminated or mining-adjacent soils would be expected to carry higher Cd and Pb than market-basket composites, but no regional breakdown is available from the current sources.

## Processing effects

Peeling cucumbers removes the outer skin, which carries the highest fraction of atmospheric-deposited lead and any surface-associated metals. The TDS data is for peeled cucumber, so it already reflects this partial decontamination. Slicing and salting cucumber (as in some pickle preparation pre-stages) can draw out moisture but does not meaningfully reduce root-incorporated metals. Cooking cucumber (a less common preparation) would not remove cadmium or arsenic that is structurally incorporated in the flesh tissue.

The high water content of cucumber means that any processing step that concentrates the solid fraction (for example, drying or freeze-drying to produce cucumber powder) would proportionally concentrate metals on a per-gram dry-weight basis.

## Ingredient-derivative risk

Cucumber is consumed primarily as a fresh or fermented (pickled) product. The principal derivative is dill pickles, which is addressed separately on [[ingredients/dill-pickles]]. The pickling process adds an acidic brine, which may extract additional metals from the cucumber matrix or from processing equipment surfaces; this is discussed on the dill pickles page. Cucumber extract used in cosmetics and some functional foods would carry whatever metals are present in the source cucumber, potentially concentrated in the extraction process. No heavy metal data for cucumber extracts or concentrates is in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing cucumbers from agricultural areas with low background soil cadmium and minimal atmospheric lead pollution is the primary mitigation lever for the metal contaminants detected in this matrix. Greenhouse-grown cucumbers, which avoid atmospheric particulate deposition on the fruit surface and are grown in controlled substrate, may carry lower atmospheric Pb than field-grown cucumbers, though this distinction has not been quantified in the current corpus.

### Agronomic levers

_No quantified data on agronomic interventions specifically for cucumber metal accumulation is in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling cucumbers before consumption or further processing removes the surface-deposited metal fraction. Washing cucumber thoroughly before peeling reduces particle transfer from the peel surface during the peeling motion. These are standard food hygiene practices that also provide a marginal metal-reduction benefit for Pb.

### Formulation levers

_No quantified data on formulation substitution effects on cucumber metal content in composite products is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

The tAs signal in the TDS peeled cucumber data (median 14 ppb, max 31 ppb across n=27 composites) [[sources/fda2022-tds-elements-fy2018-fy2020]] is worth monitoring with speciated arsenic testing (iAs vs tAs) to characterize whether the detected arsenic is primarily inorganic or organic. Nickel in the upper tail (max 76 ppb) also warrants periodic testing for commercial cucumber-based products.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in cucumber is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for lead in vegetables (other than leafy vegetables and brassicas) is 0.10 mg/kg (100 ppb) wet weight, and for cadmium in vegetables it is 0.050 mg/kg (50 ppb) wet weight. Cucumber falls within the general vegetable category. The TDS Pb values of zero and Cd maximum of 3.2 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]] are well within these limits. Codex Alimentarius (CXS 193-1995 and revisions) sets a general vegetable lead limit of 0.10 mg/kg. No US federal maximum level for lead or cadmium in cucumbers has been finalized as of 2026.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cucumber, peeled, raw (n=27); detectable concentrations for Cd, Ni, tAs |
<!-- END: hmi-source-legend -->

