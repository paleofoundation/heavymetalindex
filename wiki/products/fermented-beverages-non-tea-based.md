---
type: product-category
category: fermented-beverages-non-tea-based
hmtc_category: 5
hmtc_row: 15
label: "Fermented beverages, non-tea-based"
base_taxonomy: kombucha-and-fermented-beverages
variant_type: clean_benchmark
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

# Fermented Beverages, Non-Tea-Based

This page is HMTc Category 5 row 15 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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

This subcategory has **zero direct in-corpus sources** as of cycle 19 (2026-05-09). Non-tea fermented beverages are locked as **clean_benchmark** variant_type within the kombucha-and-fermented-beverages split, paired against kombucha-tea-based (cycle 18) as contamination platform. Standards target = clean p90.

Subcategory scope: water kefir, jun (similar to kombucha but with green tea + honey), beverage-tibet (mineral-water-fermented), fermented coconut water, fermented juices (excluding wine/cider). Excluded from this row per locked-architecture boundary: kombucha (tea-based, separate row), beer/wine/spirits (alcoholic; outside HMT&C scope per CLAUDE.md Part 4 if outside HMTc Cat 5 architecture).

Heavy-metal exposure pathways are similar to kombucha but **without the Camellia sinensis Al-accumulation cascade** — water kefir uses a sugar-water base; jun uses green tea (so partial-Camellia cascade); fermented juices inherit the underlying juice's profile.

| Metal | Clean/dirty (anticipated empirical) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd) | clean (anticipated; water-base or non-tea base) | 0 | 0 | data gap | Closing requires multi-element water-kefir / jun / fermented-juice survey. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated) | 0 | 0 | data gap | — |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway. |
| [[metals/nickel]] (Ni) | clean (anticipated, small) | 0 | 0 | data gap | Stainless-steel fermentation vessels; trace transfer possible. |
| [[metals/aluminum]] (Al) | clean (architectural intent supported — no Camellia accumulator base) | 0 | 0 | data gap | The clean-vs-kombucha (cycle 18) Al comparison would be the highest-value test of Camellia cascade vs no-tea-base differentiation. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial; acidic matrix) | 0 | 0 | data gap | Fermented beverages are acidic (pH 3-4); milk-like inference partial. |
| [[metals/tin]] (Sn) | data gap | 0 | 0 | data gap | Modern home-brew non-tea-fermented is glass/ceramic vessel; commercial is glass/PET; not canned. |

**Wishlist priority**: water-kefir + jun + fermented-juice multi-element survey to establish the clean baseline for the kombucha contamination-platform comparison.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
