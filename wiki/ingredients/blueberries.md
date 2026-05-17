---
title: "Blueberries"
type: ingredient
commodity: blueberries
label: "Blueberries"
aliases: [blueberry]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 24]
    p95_ppb: 33.5
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 4
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 2.9]
    p95_ppb: 3.2
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 1
---

# Blueberries

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Blueberries are small-berried shrubs (Vaccinium spp.) cultivated in acidic soils across North America, Europe, and increasingly South America. The blueberry fruit is a small, round berry with a relatively thin skin and a high surface-area-to-volume ratio compared to larger fruits. Metal uptake occurs primarily through root absorption from soil, with the acidic soil conditions typical of blueberry production (optimal pH 4.5 to 5.5) being relevant because acidic soil pH increases the bioavailability of Pb, Cd, and Mn. Despite growing in these conditions, blueberries are not identified as a high-accumulator commodity in the current corpus: the FSA/Fera UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) includes blueberries in Table 6, and values are pending quantitative extraction. The acidic soil preference does create a theoretical context for somewhat elevated metal availability relative to crops grown at neutral pH, but commercial blueberry production on managed soils in North America and the EU has not been documented as a high-Pb or high-Cd commodity in the regulatory or peer-reviewed literature at current writing.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–24 | high | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| Cd | n=1 | 0–2 | high | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–2.9 | high | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) is the sole occurrence source in the current corpus. Quantitative values from that source are in progress pending structured extraction of Table 6. Major blueberry production regions include the US Pacific Northwest (Oregon, Washington), Michigan, New Jersey, Georgia, and increasingly Peru and Chile for off-season supply to Northern Hemisphere markets. Soil metal profiles differ substantially across these regions. Wild (lowbush) blueberries, cultivated primarily in Maine and eastern Canada, grow in naturally acidic and often Mn-rich soils; highbush varieties grown on managed plantations with pH-amended soils may show different metal distributions. No varietal or regional breakdown appears in the current corpus; synthesis of ranges will be updated when additional occurrence data are integrated.

## Processing effects

Washing blueberries before consumption or processing removes surface-deposited metals and particulate soil from the berry surface. Freezing, which is the primary commercial processing step for blueberries used as ingredients, does not alter metal content. Processing into purée or dried berries concentrates metals proportionally; freeze-dried blueberry powder represents the highest per-gram metal concentration among common derivatives because of the near-complete water removal. Blueberries incorporated into baked goods (muffins, pancakes) contribute their metal load to the composite product but at diluted concentrations relative to the other ingredients by weight.

## Ingredient-derivative risk

The primary blueberry derivatives are frozen whole berries (unchanged metal load), purée (minor concentration from processing), freeze-dried powder (concentrated), and blueberry inclusions in baked goods and yogurts (diluted). Blueberry purée for infant food is an important downstream form given the berry's use in commercial baby food pouches; the metal burden of the purée reflects the fresh berry concentration without the dilution that occurs in juice or the concentration that occurs in drying. No occurrence data for freeze-dried blueberry powder appear in the current corpus, though the concentration factor relative to fresh berry can be estimated from the weight ratio (approximately 8:1 to 10:1 water removal).

## Mitigation options

### Sourcing levers

Sourcing from managed highbush blueberry operations on limed, pH-managed soils may reduce metal bioavailability compared to wild lowbush production on naturally acidic soils. _Quantified reduction factors for source selection in blueberries are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Soil pH management (liming acidic blueberry soils toward the lower end of the optimal range) reduces Pb and Cd bioavailability, though excessively high pH reduces blueberry yield and quality. The tradeoff between metal-mobility reduction and agronomic performance is a documented tension in acidophile crop management. _Quantified reduction factors specific to blueberries are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing before processing removes surface-deposited metals. Discarding wash water removes the washed-off fraction. _Quantified reduction magnitudes for washing blueberries are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 applies the general fresh fruit maximum levels to blueberries: Pb 0.10 mg/kg (100 ppb) and Cd 0.050 mg/kg (50 ppb), wet weight as placed on the market ([[regulations/eu2023-contaminants-maximum-levels]]). For dried blueberries (as a processed fruit product), the applicable EU ML may differ under specific provisions for dried fruit; the relevant ML should be checked against the current version of Regulation (EU) 2023/915. No US FDA action level for Pb or Cd in fresh or processed blueberries exists under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]). No Codex Alimentarius ML for heavy metals specifically in blueberries appears in the current corpus.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | Polish national monitoring Pb, Cd, tAs, and tHg means and P90 for fresh and frozen blueberries within the soft-berry category |
<!-- END: hmi-source-legend -->

