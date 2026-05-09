---
type: product-category
category: flavored-waters
hmtc_category: 5
hmtc_row: 8
label: "Flavored waters"
base_taxonomy: flavored-waters
variant_type: independent_no_split
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern: [Pb]
vulnerable_population: general_population
applicable_regulations: [fda_21cfr165110_pb_bottled_water_5]
evidence_fitness: EF-5
public_evidence_label: Data gap with documented rationale
review_state: phase3_part19
hmtc_threshold_status: data_gap_documented
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 0
---

# Flavored Waters

This page is HMTc Category 5 row 8 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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
| [[metals/lead]] (Pb) | [[regulations/fda-21cfr165110-bottled-water-lead]]: Federal FDA regulatory quality standard: 5 ug/kg Pb. Scope: bottled drinking water. Basis: bottled water. | No comparable field-finding row has been promoted yet for this beverage category. | Use as regulatory context only until product scope is confirmed. | [[regulations/fda-21cfr165110-bottled-water-lead]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary (Part 19 — Data gap with documented rationale)

<!-- audience: regulator, educator, app -->

This subcategory has **zero direct in-corpus sources** as of cycle 19 (2026-05-09). Flavored waters are locked as **independent_no_split** variant_type — no within-pair partner. Boundary rule: unflavored sparkling water routes to the water category (separate from Cat 5); only flavored/sweetened sparkling water + flavored still water + electrolyte-water + functional-water route here.

Heavy-metal exposure: flavored water is treated-water base + flavor (natural or artificial) + minor sweetener (sugar, stevia, etc.) + sometimes carbonation. The base is municipal-treated water (subject to FDA bottled water 5 ppb Pb cap per 21 CFR 165.110). Flavor and sweetener ingredients add minimal heavy-metal load.

The FDA bottled water Pb 5 ppb cap (21 CFR 165.110) is loaded for this subcategory and is the **strictest applicable Pb cap** in Cat 5 — flavored-water Pb threshold is set well below typical fruit-juice (10-50 ppb FDA range) and EU 2023 plant-milk (no specific cap) levels.

| Metal | Clean/dirty (anticipated) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean (FDA cap = 5 ppb loaded) | 0 | 0 | data gap | Closing requires direct flavored-water survey. **Strictest applicable Pb cap in Cat 5** at 5 ppb (21 CFR 165.110 bottled water rule). |
| [[metals/cadmium]] (Cd); [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated; treated water base) | 0 | 0 | data gap | — |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway. |
| [[metals/nickel]] (Ni) | clean (anticipated) | 0 | 0 | data gap | — |
| [[metals/aluminum]] (Al) | data gap (potential aluminum-can transfer for canned subset) | 0 | 0 | data gap | — |
| [[metals/chromium-vi|Cr-VI]] | data gap | 0 | 0 | data gap | Treated water expected to have Cr near tap-water levels (regulated under SDWA at 100 ppb total Cr). |
| [[metals/tin]] (Sn) | data gap (canned-subset eligible) | 0 | 0 | data gap | Canned flavored water (e.g., La Croix-style) eligible for Tarigan 2016 / Benoy 1971 cascade context; modern aluminum-can dominance has reduced Sn-leach concern. |

**Wishlist priority**: flavored-water multi-element survey distinguishing canned vs PET-bottle subsets.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
