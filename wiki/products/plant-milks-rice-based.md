---
type: product-category
category: plant-milks-rice-based
hmtc_category: 5
hmtc_row: 7
label: "Plant milks, rice-based"
base_taxonomy: plant-milks
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, rice]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: general_population
applicable_regulations: [eu2023_ias_rice_drinks_30]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 2
---

# Plant Milks, Rice-Based

This page is HMTc Category 5 row 7. It now has a usable regulatory-versus-field-finding comparison for inorganic arsenic in finished rice-based drinks.

## Decision Snapshot

| Field                 | Status                                                                  |
| --------------------- | ----------------------------------------------------------------------- |
| Row state             | Species-specific occurrence and regulatory comparison available for iAs |
| Best current source   | [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]           |
| Applicable regulation | [[regulations/eu2023-arsenic-rice-based-drinks]]                        |
| Computation readiness | Data-grounded for EU iAs comparison; Cd and Pb remain evidence gaps     |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/rice]]                        |
| HMTc use              | Strong evidence for iAs prioritization; not an HMTc threshold           |

<!-- BEGIN: hmi-product-crosswalk -->
## Regulatory Crosswalk Vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This decision surface mirrors [[products/regulatory-crosswalk-field-findings]]. It puts external regulatory context next to field findings so standards developers, regulators, retailers, brands, and legal teams can see what is comparable, what is blocked, and what must not be treated as an HMTc limit.

| Metal | External regulatory context | Field findings | Comparison status | HMTc use | Sources |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-arsenic-rice-based-drinks]] (European Commission maximum level): 30 ug/kg iAs (wet weight; non-alcoholic rice-based drinks). | D'Amato 2026: N=25 Italian rice-based beverages; iAs mean=15 ug/kg, median=15 ug/kg, range=7-24 ug/kg; no sample exceeded 30 ug/kg. | Direct comparison available: product matrix, analyte species, and unit basis match. | External regulatory context and HMTc prioritization input; not an HMTc value. | [[regulations/eu2023-arsenic-rice-based-drinks]]; [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |
| [[metals/arsenic-total]] (tAs) | No tAs value loaded for rice-based drinks. | D'Amato 2026: tAs mean=23 ug/kg, median=22 ug/kg, range=9-58 ug/kg. | Context only; tAs is not interchangeable with iAs. | Speciation context only. | [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/damato2026-inorganic-arsenic-rice-based-beverages]] analyzed 25 Italian-market rice-based beverages collected from April 2022 to March 2023. The study used HPLC-ICP-MS speciation and reported no left-censored iAs values, which makes it unusually useful for comparison-layer work.

The same source reports consumer-only dietary exposure estimates that are important for risk prioritization: toddlers consuming rice drinks averaged 0.27 ug/kg bw/day with MOE 0.2, while other children averaged 0.13 ug/kg bw/day with MOE 0.5. These are exposure-risk context, not product-level compliance values.

## Ingredient Handling

The iAs measurements are finished rice-based beverages. They should not be copied into [[ingredients/rice]] as ingredient-only values. The rice ingredient node can link to this source as related finished-product evidence.

## Sources

- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
