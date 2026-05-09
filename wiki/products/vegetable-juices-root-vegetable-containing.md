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
public_evidence_label: Data gap with documented rationale
review_state: phase3_part19
hmtc_threshold_status: data_gap_documented
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
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
## HMTc Evidence Summary (Part 19 — Data gap with documented rationale)

<!-- audience: regulator, educator, app -->

This subcategory has **zero direct in-corpus sources** as of cycle 19 (2026-05-09). Root-vegetable-containing juices are locked as **contamination_platform** variant_type within the vegetable-juice split, paired against vegetable-juices-non-root (cycle 19) as clean_benchmark.

Subcategory scope: carrot juice, beet juice, sweet-potato juice, ginger-juice (ginger is a rhizome but routes here per locked architecture), and blends including these. Root-veg ingredient cascade evidence exists at HMTc Cat 1: **root-vegetable-purees** has FDA 2024 baby-food sample-level data showing Pb p90=15 ppb and Cd p90=22 ppb in sweet-potato baby food. The juice-form should empirically inherit these elevated values (with juicing concentration factor — most root-veg juice is concentrated 10-15× from raw vegetable).

| Metal | Clean/dirty (anticipated empirical) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | **dirty (anticipated; root-veg ingredient cascade)** | 0 | 0 | data gap | **Root vegetables are documented Pb-uptakers**; FDA 2024 baby-food sweet-potato has p90=15 ppb. Closing this row requires direct root-veg-juice survey. |
| [[metals/cadmium]] (Cd) | **dirty (anticipated)** | 0 | 0 | data gap | Root vegetables are documented Cd-uptakers; FDA 2024 baby-food sweet-potato Cd p90=22 ppb. Same closing path. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | data gap (potentially elevated for carrot/beet from contaminated soils) | 0 | 0 | data gap | — |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway. |
| [[metals/nickel]] (Ni) | data gap | 0 | 0 | data gap | — |
| [[metals/aluminum]] (Al) | data gap | 0 | 0 | data gap | — |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | 0 | 0 | data gap | Acidic-aqueous juice matrix. |
| [[metals/tin]] (Sn) | data gap | 0 | 0 | data gap | Modern root-veg juice is bottled/aseptic-pack; canned subset minor. |

**Wishlist priority**: carrot/beet/sweet-potato juice multi-element survey; this row is the highest-priority Cat 5 vegetable-juice gap because the root-veg ingredient cascade strongly predicts elevated Pb/Cd that consumers may not anticipate.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
