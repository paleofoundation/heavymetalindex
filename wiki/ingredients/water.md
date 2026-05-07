---
title: "Water"
type: ingredient
commodity: water
label: "Water"
aliases: [bottled water, still water, carbonated water]
category: water
contamination_profile:
  Pb:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Cd:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  iAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  tHg:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
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
    n_studies: 1
    last_reviewed: 2026-05-01
  Sn:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [flavored-waters]
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
sources: 1
---

# Water

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fera2014-fsa-metals-infant-foods-formula]]

## Routing

This node is linked from [[products/flavored-waters]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-gemsfood-arsenic-context -->

## WHO GEMS/Food Arsenic Occurrence Context

GEMS/Food has a large water arsenic monitoring footprint. These rows belong here as water-source context for products that use or dilute with water, while bottled-water and tap-water legal interpretation remains jurisdiction-specific.

| Routed GEMS food row | Arsenic species | Region | N | P50 ug/kg | P95 ug/kg | Max ug/kg | Use note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| Tap water | tAs | EURO | 14,098 | 0 | 6 | 470 | Large tap-water monitoring row. |
| Drinking water NES | tAs | EURO | 8,010 | 0 | 7.21 | 346 | General drinking-water row. |
| Bottled water | tAs | EURO | 6,847 | 0 | 4 | 2,590 | Bottled-water row; review outliers before claims. |
| Drinking water NES | tAs | EURO | 5,028 | 1 | 17 | 8,800 | General drinking-water row. |
| Bottled water | iAs | PAHO | 444 | 0.14 | 1.35 | 5 | Speciated bottled-water row. |

[[sources/who-gemsfood-heavy-metal-contaminants]]

<!-- END: hmi-gemsfood-arsenic-context -->

## Sources

- [[sources/fera2014-fsa-metals-infant-foods-formula]]
