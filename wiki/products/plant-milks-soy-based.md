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

<!-- BEGIN: hmi-product-crosswalk -->
## Regulatory Crosswalk Vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This decision surface mirrors [[products/regulatory-crosswalk-field-findings]]. It puts external regulatory context next to field findings so standards developers, regulators, retailers, brands, and legal teams can see what is comparable, what is blocked, and what must not be treated as an HMTc limit.

| Metal | External regulatory context | Field findings | Comparison status | HMTc use | Sources |
| --- | --- | --- | --- | --- | --- |
| [[metals/aluminum]] (Al) | No product-specific Al value loaded for soy-based beverages. | Milani 2023: Al means 758, 609, and 176 ug/L by soy source; max range endpoint 1822 ug/L. | Occurrence evidence only; PTWI estimate is not a product limit. | Prioritization input; not a compliance row. | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| [[metals/arsenic-total]] (tAs); [[metals/cadmium]] (Cd); [[metals/lead]] (Pb); [[metals/tin]] (Sn) | Source-cited thresholds mentioned, but direct legal source, units, basis, and species review are still pending. | tAs <38.2 ug/L; Cd <3.8 ug/L; Pb mostly <10.9 ug/L with soybean group mean 2.2 ug/L; Sn <18 ug/L except isolate mean 4.3 ug/L. | Blocked for compliance until direct legal text, unit basis, density conversion, and As species are reviewed. | Context only. | [[sources/milani2023-trace-elements-soy-based-beverages]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/milani2023-trace-elements-soy-based-beverages]] analyzed 18 soy-based beverages from Brazil by ICP-OES. The paper is directly relevant to this product row because it measures finished soy beverages rather than soy ingredient powders or isolated soy raw materials.

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured Spanish retail plant-based drinks and supports the broader row architecture, but it does not resolve the Al/Cd/iAs gaps for this row.

## Ingredient Handling

Ingredient-only values belong on [[ingredients/soy]] or [[ingredients/plant-milk]]. Milani's values are finished beverage values, so they remain here and in the structured occurrence data layer.

## Sources

- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
