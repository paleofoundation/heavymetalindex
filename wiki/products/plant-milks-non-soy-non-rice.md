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

<!-- BEGIN: hmi-product-crosswalk -->
## Regulatory Crosswalk Vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This decision surface mirrors [[products/regulatory-crosswalk-field-findings]]. It puts external regulatory context next to field findings so standards developers, regulators, retailers, brands, and legal teams can see what is comparable, what is blocked, and what must not be treated as an HMTc limit.

| Metal | External regulatory context | Field findings | Comparison status | HMTc use | Sources |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/mercury-total]] (tHg); [[metals/uranium]] (U) | No product-specific value loaded for this row. | Marques 2021 reports Pb detected in one non-organic oat drink and Hg/U non-detected in milks and plant-based drinks; numeric table extraction requires review. | Blocked until source table/PDF extraction is verified. | Gap-prioritization only. | [[sources/marques2021-trace-elements-milks-plant-based-drinks]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured almond, oat, rice, and soy drinks from the Spanish retail market. It supports routing and shows why non-soy/non-rice plant milks cannot simply be assumed clean, but it is not enough to populate thresholds.

## Ingredient Handling

Finished oat or almond beverage values belong on this product row. Ingredient-only almond, oat, coconut, or plant-milk values belong on the linked ingredient pages if those sources are later promoted.

## Sources

- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
