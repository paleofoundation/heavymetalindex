---
type: product-category
category: plant-milks-non-soy-non-rice
hmtc_category: 5
hmtc_row: 5
label: "Plant milks (almond, oat, coconut, other non-soy/non-rice)"
base_taxonomy: plant-milks
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, almond, oat, coconut]
primary_metals_of_concern: [Al, Ni, Cd, iAs, Pb]
vulnerable_population: general_population
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 1
---

# Plant Milks (Almond, Oat, Coconut, Other Non-Soy/Non-Rice)

This page is HMTc Category 5 row 5. It remains a clean-benchmark candidate, but the current evidence is not strong enough to use it as a clean comparator without more occurrence extraction.

## Decision Snapshot

| Field                 | Status                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| Row state             | Early source coverage only                                                                       |
| Best current source   | [[sources/marques2021-trace-elements-milks-plant-based-drinks]]                                  |
| Computation readiness | Not computation-ready; table values need source review                                           |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/almond]], [[ingredients/oat]], [[ingredients/coconut]] |
| HMTc use              | Hold as clean-benchmark hypothesis, not clean-benchmark evidence                                 |

## Regulatory Crosswalk Vs Field Findings

| Metal           | External value                           | Field findings                                                                                       | Comparison status              | HMTc use                |
| --------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------- |
| Pb              | No matched product-specific value loaded | Marques 2021 reports Pb detected in one non-organic oat drink; numeric table extraction needs review | Blocked until table/PDF review | Gap-prioritization only |
| tHg             | No matched product-specific value loaded | Marques 2021 reports Hg not detected in milks and plant-based drinks                                 | Context only                   | Negative-screen context |
| U               | No matched product-specific value loaded | Marques 2021 reports U not detected in milks and plant-based drinks                                  | Context only                   | Negative-screen context |
| Al, Ni, Cd, iAs | No matched product-specific value loaded | No robust row-specific promoted occurrence source yet                                                | Blocked                        | Priority gap            |

## Occurrence Evidence

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured almond, oat, rice, and soy drinks from the Spanish retail market. It supports routing and shows why non-soy/non-rice plant milks cannot simply be assumed clean, but it is not enough to populate thresholds.

## Ingredient Handling

Finished oat or almond beverage values belong on this product row. Ingredient-only almond, oat, coconut, or plant-milk values belong on the linked ingredient pages if those sources are later promoted.

## Sources

- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
