---
type: product-category
category: plant-milks-soy-based
hmtc_category: 5
hmtc_row: 6
label: "Plant milks, soy-based"
base_taxonomy: plant-milks
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, soy]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: general_population
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 2
---

# Plant Milks, Soy-Based

This page is HMTc Category 5 row 6. It is no longer a pure scaffold: the row has early finished-product occurrence evidence, but the evidence is still insufficient for HMTc threshold-setting.

## Decision Snapshot

| Field                 | Status                                                                             |
| --------------------- | ---------------------------------------------------------------------------------- |
| Row state             | Early occurrence evidence promoted                                                 |
| Best current source   | [[sources/milani2023-trace-elements-soy-based-beverages]]                          |
| Support source        | [[sources/marques2021-trace-elements-milks-plant-based-drinks]]                    |
| Computation readiness | Context-ready for Al, Ni, Pb, Cd, Sn; not threshold-ready                          |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/soy]]                                    |
| HMTc use              | Occurrence prioritization only; no certified-brand, compliance, or threshold claim |

## Regulatory Crosswalk Vs Field Findings

| Metal | External value                                                                                     | Field findings                                                                                                                            | Comparison status                                                               | HMTc use                                       |
| ----- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| Al    | No product-specific regulatory value loaded                                                        | Milani 2023: mean 176-758 ug/L by soy source; max range endpoint 1822 ug/L in isolate-protein beverages                                   | Occurrence evidence only; PTWI risk estimate is not a product limit             | Prioritize Al as a soy-beverage platform metal |
| tAs   | Source-cited Brazilian/MERCOSUR threshold context exists, but direct regulation node is not loaded | <38.2 ug/L across soy-source groups                                                                                                       | Blocked for compliance: total As, unit/basis, and direct legal text need review | Context only                                   |
| Cd    | Source-cited threshold context exists, but direct regulation node is not loaded                    | <3.8 ug/L across soy-source groups                                                                                                        | Blocked for compliance until direct regulation and unit basis are loaded        | Context only                                   |
| Ni    | No matched product-specific value loaded                                                           | <25.7 ug/L in isolate-protein beverages; 4.9 (<25.7-29.4) ug/L in hydrosoluble-extract beverages; 29 (<25.7-46) ug/L in soybean beverages | Occurrence evidence only                                                        | Prioritize as platform metal                   |
| Pb    | Source-cited threshold context exists, but direct regulation node is not loaded                    | <10.9 ug/L in isolate-protein and hydrosoluble-extract beverages; 2.2 (<10.9-13) ug/L in soybean beverages                                | Blocked for compliance until direct regulation and unit basis are loaded        | Context only                                   |
| Sn    | Source-cited threshold context exists, but direct regulation node is not loaded                    | 4.3 (<18-26) ug/L in isolate-protein beverages; <18 ug/L in other groups                                                                  | Blocked for compliance until direct regulation and unit basis are loaded        | Context only                                   |

## Occurrence Evidence

[[sources/milani2023-trace-elements-soy-based-beverages]] analyzed 18 soy-based beverages from Brazil by ICP-OES. The paper is directly relevant to this product row because it measures finished soy beverages rather than soy ingredient powders or isolated soy raw materials.

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured Spanish retail plant-based drinks and supports the broader row architecture, but it does not resolve the Al/Cd/iAs gaps for this row.

## Ingredient Handling

Ingredient-only values belong on [[ingredients/soy]] or [[ingredients/plant-milk]]. Milani's values are finished beverage values, so they remain here and in the structured occurrence data layer.

## Sources

- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
