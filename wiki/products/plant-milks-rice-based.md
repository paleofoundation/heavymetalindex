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

## Regulatory Crosswalk Vs Field Findings

| Metal |                                                 External value | Field findings                                                                                    | Comparison status                                                         | HMTc use                                                       |
| ----- | -------------------------------------------------------------: | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| iAs   | EU maximum level: 30 ug/kg for non-alcoholic rice-based drinks | D'Amato 2026: N=25, mean 15 ug/kg, median 15 ug/kg, range 7-24 ug/kg; no sample exceeded 30 ug/kg | Direct comparison available because matrix, species, and unit basis match | Data-grounded regulatory context and HMTc prioritization input |
| tAs   |                    No product-specific regulatory value loaded | D'Amato 2026: mean 23 ug/kg, median 22 ug/kg, range 9-58 ug/kg                                    | Context only; tAs is not interchangeable with iAs                         | Speciation support only                                        |
| Cd    |                       No matched product-specific value loaded | No Cd occurrence source promoted for this row yet                                                 | Blocked                                                                   | Gap                                                            |
| Pb    |                       No matched product-specific value loaded | No Pb occurrence source promoted for this row yet                                                 | Blocked                                                                   | Gap                                                            |

## Occurrence Evidence

[[sources/damato2026-inorganic-arsenic-rice-based-beverages]] analyzed 25 Italian-market rice-based beverages collected from April 2022 to March 2023. The study used HPLC-ICP-MS speciation and reported no left-censored iAs values, which makes it unusually useful for comparison-layer work.

The same source reports consumer-only dietary exposure estimates that are important for risk prioritization: toddlers consuming rice drinks averaged 0.27 ug/kg bw/day with MOE 0.2, while other children averaged 0.13 ug/kg bw/day with MOE 0.5. These are exposure-risk context, not product-level compliance values.

## Ingredient Handling

The iAs measurements are finished rice-based beverages. They should not be copied into [[ingredients/rice]] as ingredient-only values. The rice ingredient node can link to this source as related finished-product evidence.

## Sources

- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
