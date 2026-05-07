---
title: Vegetables
type: ingredient
commodity: vegetables
aliases: [vegetable puree, vegetable-based meal, green vegetables, mixed vegetables]
category: vegetable
contamination_profile:
  Pb: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cd: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  iAs: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  tHg: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Ni: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Al: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
drivers: [soil-uptake, root-vs-leaf-tissue, geography, processing]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/spinach]]", "[[ingredients/carrots]]", "[[ingredients/potatoes]]"]
used_in_products: ["[[products/non-root-vegetable-purees]]", "[[products/root-vegetable-purees]]", "[[products/mixed-meals-non-rice]]", "[[products/mixed-meals-rice-containing]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
---

# Vegetables

_Stub page. Chekri et al. 2019 reports soups/purees and vegetable-based ready-to-eat meals for French infants and toddlers, but does not split root from non-root vegetables in the main trace-element table. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]_

## Ranges by source, region, and variety

_Pending vegetable-specific extraction. Ingredient-level pages should split root vegetables, leafy vegetables, and mixed vegetables as the evidence becomes source-backed._

<!-- BEGIN: hmi-gemsfood-arsenic-context -->

## WHO GEMS/Food Arsenic Occurrence Context

GEMS/Food vegetable rows are heterogeneous and should be treated as routing context. The strongest arsenic signal within the vegetable category is algae/seaweed, which now has a separate page; terrestrial vegetable rows should be split into root, leafy, fungi, and fruiting-vegetable pages before claims are made.

| Routed GEMS food row | Arsenic species | Region | N | P50 ug/kg | P95 ug/kg | Max ug/kg | Use note |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| Vegetables and vegetable products NES | iAs | EURO | 401 | 12 | 470 | 43,000 | Broad vegetable row; needs subclass routing. |
| Vegetables and vegetable products NES | iAs | WPRO | 280 | 0 | 390.6 | 71,700 | Broad vegetable row; needs subclass routing. |
| Potato | tAs | EURO | 1,016 | 0 | 6.44 | 287 | Routes to [[ingredients/potatoes]]/root vegetables. |
| Carrot | tAs | EURO | 641 | 0 | 21 | 90 | Routes to [[ingredients/carrots]]/root vegetables. |
| Leafy vegetables | tAs | EURO | 623 | 0 | 61.8 | 79,000 | Routes to [[ingredients/leafy-greens]]; review outliers. |
| Mushrooms | tAs | EURO | 821 | 0 | 419 | 19,200 | Routes to [[ingredients/wild-mushrooms]]/mushrooms. |

[[sources/who-gemsfood-heavy-metal-contaminants]]

<!-- END: hmi-gemsfood-arsenic-context -->

## Sources

- [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] — French infant/toddler TDS vegetable and soup/puree category rows.
