---
title: "Plant milk base"
type: ingredient
commodity: plant-milk
label: "Plant milk base"
aliases: [plant-based milk, plant beverage]
category: beverage-ingredient
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [plant-milks-non-soy-non-rice, plant-milks-rice-based, plant-milks-soy-based]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 3
---

# Plant milk base

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Routing

This node is linked from [[products/plant-milks-non-soy-non-rice]], [[products/plant-milks-rice-based]], [[products/plant-milks-soy-based]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Related Finished-Product Evidence

The promoted Category 5 plant-milk sources are finished-beverage evidence, not ingredient-only evidence:

- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]

Do not copy their values into the machine-readable `contamination_profile` until an ingest confirms that a value is ingredient-only rather than a finished beverage matrix.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/damato2026-inorganic-arsenic-rice-based-beverages\|D'Amato et al. 2026]]. *Inorganic Arsenic in Rice-Based Beverages: Occurrence in Products Available on the Italian Market and Dietary Exposure Assessment*, Foods | 2026 | Peer-reviewed | Measured iAs and tAs in 25 rice-based beverages from the Italian market by HPLC-ICP-MS; primary occurrence data for iAs in rice-based plant milks with EU regulatory comparison |
| 2 | [[sources/milani2023-trace-elements-soy-based-beverages\|Milani et al. 2023]]. *Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | Measured Al, tAs, Cd, Cr, Ni, Pb, Sb, and Sn in 18 soy-based beverages from Brazil; Al ranged 176–1,822 µg/L by soy-source type; bioaccessibility fractions reported |
| 3 | [[sources/walther2022-plantbased-drinks-arsenic\|Walther et al. 2022]]. *Comparison of nutritional composition between plant-based drinks and cow's milk*, Frontiers in Nutrition | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Measured Pb, tHg, Ni, and U in retail cow milk, soy, almond, rice, and oat drinks from Spain; Pb detected in three samples including one oat drink; Hg, U below detection |
<!-- END: hmi-source-legend -->

