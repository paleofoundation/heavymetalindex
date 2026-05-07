---
title: "Apple juice"
type: ingredient
commodity: apple-juice
label: "Apple juice"
aliases: [apple juice]
category: juice-composite
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
    n_studies: 2
    last_reviewed: 2026-05-07
  tAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 2
    last_reviewed: 2026-05-07
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
used_in_products: [fruit-juices-apple-containing]
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
sources: 3
---

# Apple juice

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## Routing

This node is linked from [[products/fruit-juices-apple-containing]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 99, "Juice, apple, bottled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-gemsfood-arsenic-context -->
## WHO GEMS/Food Arsenic Occurrence Context

GEMS/Food does not expose a clean Apple juice row in this export. The routed rows below are broader fruit-juice or fruit-nectar-adjacent context plus upstream apple-fruit rows; they belong here so apple juice is not left out of the GEMS evidence layer, but they should not be cited as apple-juice-specific distribution evidence without a separate matrix review. Displayed values are ppm, converted from the GEMS ug/kg summary values by dividing by 1,000. [[sources/who-gemsfood-heavy-metal-contaminants]]

| Routed GEMS food row | Arsenic species | Region | N | P50 ppm | P95 ppm | Max ppm | Use note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fruit juice | iAs | PAHO | 619 | 0.00125 | 0.008664 | 0.0555 | Best available juice-context row; GEMS does not label it apple-only. |
| Fruit or vegetable juice NES | iAs | PAHO | 240 | 0.00057 | 0.003036 | 0.01297 | Broader juice row; use as beverage context. |
| Fruit juice | iAs | EURO | 70 | 0 | 0.00555 | 0.03 | Additional fruit-juice iAs context. |
| Fruit juice | tAs | EURO | 1,358 | 0 | 0.013 | 0.382 | Total arsenic; not interchangeable with iAs. |
| Apple | iAs | PAHO | 39 | 0.00071 | 0.01261 | 0.0546 | Upstream apple-fruit row; not a juice matrix. |
| Apple | tAs | EURO | 639 | 0 | 0.02 | 0.102 | Upstream apple-fruit row; not a juice matrix. |
<!-- END: hmi-gemsfood-arsenic-context -->

## Sources


- [[sources/fda2022-tds-elements-fy2018-fy2020]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
- [[sources/who-gemsfood-heavy-metal-contaminants]]
