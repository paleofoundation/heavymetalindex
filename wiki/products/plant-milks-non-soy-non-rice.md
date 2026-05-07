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
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/mercury-total]] (tHg); [[metals/uranium]] (U) | No federal product-specific limit loaded in this crosswalk. | Marques 2021 reports Pb detected in one non-organic oat drink and Hg/U non-detected in milks and plant-based drinks; numeric table extraction requires review. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/marques2021-trace-elements-milks-plant-based-drinks]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured almond, oat, rice, and soy drinks from the Spanish retail market. It supports routing and shows why non-soy/non-rice plant milks cannot simply be assumed clean, but it is not enough to populate thresholds.

## Ingredient Handling

Finished oat or almond beverage values belong on this product row. Ingredient-only almond, oat, coconut, or plant-milk values belong on the linked ingredient pages if those sources are later promoted.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary

<!-- audience: regulator, educator, app -->

This row's standards target is **clean-platform P90**. No listed metal currently has a publishable aggregate HMTc value at the 80-95% confidence gate. This generated summary does not publish final HMTc limits; it shows whether the evidence pool can support the row-standard percentile under the governing principles.

Clean benchmark rows use aggregate P90. Contaminated-platform rows use aggregate P10 by default, or P20 only when explicitly selected. Source-reported percentiles stay source context until admitted into the exact-row aggregate pool, and any final HMTc value must be no higher than the lowest applicable loaded regulatory cap.

| Metal | Standards target | Evidence pool | Confidence/readiness | Regulatory cap |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| [[metals/cadmium]] (Cd) | clean-platform P90 | 0 sources; 0 distribution sources; 0 summary sources; N not loaded | Not estimable: no structured occurrence pool is loaded. | No loaded cap |
| [[metals/arsenic-inorganic]] (iAs) | clean-platform P90 | 0 sources; 0 distribution sources; 0 summary sources; N not loaded | Not estimable: no structured occurrence pool is loaded. | No loaded cap |
| [[metals/mercury-total]] (tHg) | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |
| [[metals/aluminum]] (Al) | clean-platform P90 | 0 sources; 0 distribution sources; 0 summary sources; N not loaded | Not estimable: no structured occurrence pool is loaded. | No loaded cap |
| [[metals/nickel]] (Ni) | clean-platform P90 | 0 sources; 0 distribution sources; 0 summary sources; N not loaded | Blocked: documented sources are context-only for this row. | No loaded cap |
| U | clean-platform P90 | 1 source; 0 distribution sources; 1 summary source; N not loaded | Not estimable from summaries alone; needs sample-level values or the exact target percentile. | No loaded cap |

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
