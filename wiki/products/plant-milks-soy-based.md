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
updated: 2026-05-07
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
| Computation readiness | Context-ready for Al, Ni, Pb, Cd, Sn, Cr, Sb; not threshold-ready                  |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/soy]]                                    |
| HMTc use              | Occurrence prioritization only; no certified-brand, compliance, or threshold claim |

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/aluminum]] (Al) | No federal product-specific limit loaded in this crosswalk. | Milani 2023: Al means 758, 609, and 176 ug/L by soy source; max range endpoint 1822 ug/L. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| [[metals/arsenic-total]] (tAs); [[metals/cadmium]] (Cd); [[metals/lead]] (Pb); [[metals/tin]] (Sn) | No federal/product-specific limit loaded yet. Source-cited non-U.S. thresholds require direct legal-source, unit, basis, and species review. | tAs <38.2 ug/L; Cd <3.8 ug/L; Pb mostly <10.9 ug/L with soybean group mean 2.2 ug/L; Sn <18 ug/L except isolate mean 4.3 ug/L. | No compliance read yet. Load the direct legal text before using this row in regulatory or litigation analysis. | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| [[metals/chromium]] (total/unspecified Cr); [[metals/antimony]] (Sb) | No product-specific Cr or Sb value loaded in this crosswalk. | Milani 2023: Cr isolate mean 1.8 ug/L with range <10.9-11.0; hydrosoluble and soybean groups <10.9 ug/L. Sb means 6.2, 2.5, and 12 ug/L with range endpoints up to 61 ug/L. | Occurrence context only. Cr is not species-confirmed Cr-VI, and censored bounds are retained as reported. | [[sources/milani2023-trace-elements-soy-based-beverages]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/milani2023-trace-elements-soy-based-beverages]] analyzed 18 soy-based beverages from Brazil by ICP-OES. The paper is directly relevant to this product row because it measures finished soy beverages rather than soy ingredient powders or isolated soy raw materials.

Milani reports chromium as total/unspecified Cr and antimony as Sb in the finished beverage groups. Those values are useful occurrence context, but they are not Cr-VI evidence, not a compliance determination, and not an HMTc threshold input.

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured Spanish retail plant-based drinks and supports the broader row architecture, but it does not resolve the Al/Cd/iAs gaps for this row.

## Ingredient Handling

Ingredient-only values belong on [[ingredients/soy]] or [[ingredients/plant-milk]]. Milani's values are finished beverage values, so they remain here and in the structured occurrence data layer.

## Sources

- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]
