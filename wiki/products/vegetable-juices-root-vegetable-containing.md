---
type: product-category
category: vegetable-juices-root-vegetable-containing
hmtc_category: 5
hmtc_row: 4
label: "Vegetable juices, root-vegetable-containing"
base_taxonomy: vegetable-juices
variant_type: contamination_platform
provenance: category_5_step_0_locked
ingredient_targets: [vegetables, carrots, potatoes]
primary_metals_of_concern: [Pb, Cd]
vulnerable_population: general_population
applicable_regulations: [fda2022_draft_pb_other_juice_20]
evidence_fitness: EF-5
public_evidence_label: Data gap
review_state: draft
hmtc_threshold_status: data_gap
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 0
---

# Vegetable Juices, Root-Vegetable-Containing

This page is HMTc Category 5 row 4 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction started |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |


<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 20 ug/kg Pb. Scope: other single-strength juices and juice blends. Basis: single-strength ready-to-drink juice. | No comparable field-finding row has been promoted yet for this beverage category. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary

<!-- audience: regulator, educator, app -->

> **Schema note (2026-05-08, op `schema`):** This block carries legacy "clean-platform P90 / contaminated-platform P10 (or P20)" target labels that were superseded by the Part 19 clean/dirty subcategory framework. Targets, percentiles, and confidence-readiness labels are placeholders until Phase 3 reclassifies per-analyte and rebuilds the block under p90 (clean) / p30 (dirty), both alongside p100. Do not treat values below as current HMT&C standards-readiness signals.

This row's standards target is **contaminated-platform P10**. No listed metal currently has a publishable aggregate HMTc value at the 80-95% confidence gate. This generated summary does not publish final HMTc limits; it shows whether the evidence pool can support the row-standard percentile under the governing principles.

Per the Part 19 clean/dirty subcategory framework, clean subcategories use aggregate p90 (lenient bar) and dirty subcategories use aggregate p30 (strict bar; market-ratcheting per Part 2), both reported alongside p100. Clean and dirty are per-analyte empirical designations within a parent category, not fixed labels on a subcategory. The earlier "clean-platform P90 / contaminated-platform P10 (or P20)" defaults are superseded by Part 19; the legacy targets and percentiles shown in this generated block are placeholders until Phase 3 rebuilds the block under per-analyte clean/dirty classification. Source-reported percentiles stay source context until admitted into the exact-row aggregate pool, and any final HMT&C value must be no higher than the lowest applicable loaded regulatory cap.

| Metal | Standards target | Evidence pool | Confidence/readiness | Regulatory cap |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | contaminated-platform P10 | 0 sources; 0 distribution sources; 0 summary sources; N not loaded | Not estimable: no structured occurrence pool is loaded. | 20 ug/kg (fda2022_draft_pb_other_juice_20) |
| [[metals/cadmium]] (Cd) | contaminated-platform P10 | 0 sources; 0 distribution sources; 0 summary sources; N not loaded | Not estimable: no structured occurrence pool is loaded. | No loaded cap |

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
