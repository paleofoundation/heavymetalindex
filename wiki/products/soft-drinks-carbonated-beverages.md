---
type: product-category
category: soft-drinks-carbonated-beverages
hmtc_category: 5
hmtc_row: 14
label: "Soft drinks/carbonated beverages"
base_taxonomy: soft-drinks-carbonated-beverages
variant_type: independent_no_split
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern: [Pb, Cd]
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-5
public_evidence_label: Data gap with documented rationale
review_state: phase3_part19
hmtc_threshold_status: data_gap_documented
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 0
---

# Soft Drinks/Carbonated Beverages

This page is HMTc Category 5 row 14 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction pending |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |


<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| No loaded row | No federal or product-specific regulatory limit loaded yet | Comparable field finding extraction pending | Evidence-gap tracking only; do not infer a pass/fail status | [[products/regulatory-crosswalk-field-findings]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary (Part 19 — Data gap with documented rationale)

<!-- audience: regulator, educator, app -->

This subcategory has **zero direct in-corpus sources** as of cycle 19 (2026-05-09). Soft drinks/carbonated beverages are locked as **independent_no_split** variant_type — no within-pair partner.

Soft drinks are formulated beverages: treated water + sugar/HFCS/sweetener + acidulant (phosphoric acid in colas; citric acid in citrus sodas) + flavoring + colorant. Heavy-metal exposure pathways are limited because (a) treated municipal water base, (b) syrup/concentrate ingredient sourcing is controlled by major manufacturers, (c) acidic carbonated matrix CAN potentially leach trace metals from packaging (aluminum cans, PET bottles) over storage time.

Notable exposure-pathway: **caramel-color in cola-style soft drinks** historically contained 4-methylimidazole (4-MEI; not an HMT&C analyte but a regulatory benchmark for soft-drink contamination, California Prop 65 listed) — relevant context for the "soft-drink contamination" framing but separate from the 10-analyte panel.

| Metal | Clean/dirty (anticipated) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd) | clean (anticipated; treated water base) | 0 | 0 | data gap | Modern treated-water base is generally low; closing requires direct soft-drink survey. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated) | 0 | 0 | data gap | Treated water + formulated ingredients. |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway. |
| [[metals/nickel]] (Ni) | clean (anticipated; trace from stainless-steel processing) | 0 | 0 | data gap | — |
| [[metals/aluminum]] (Al) | data gap (potential aluminum-can transfer for canned subset) | 0 | 0 | data gap | Aluminum-can packaging context; acidic carbonation can dissolve trace Al from can liners over storage time. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference WEAK for cola pH ~2.5) | 0 | 0 | data gap | **Cola is the most-acidic Cat 5 subcategory matrix (pH 2.5 from phosphoric acid); the milk-like Hernandez/Saraiva Cr(VI)<LOD inference applies LEAST.** Direct cola Cr speciation would test inference boundary. |
| [[metals/tin]] (Sn) | data gap (potential canned-Sn-leach historical) | 0 | 0 | data gap | Canned-soft-drink subset eligible for Tarigan 2016 / Benoy 1971 cascade context; modern aluminum-can dominance has reduced Sn-leach concern. |

**Wishlist priority**: cola/soft-drink Cr speciation (highest Cr-VI value in Cat 5 alongside kombucha for similar acidic-pH-stability reason); multi-element survey distinguishing aluminum-can vs PET vs glass-bottle subsets.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
