---
type: product-category
category: vegetable-juices-non-root
hmtc_category: 5
hmtc_row: 3
label: "Vegetable juices, non-root"
base_taxonomy: vegetable-juices
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: [vegetables]
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

# Vegetable Juices, Non-Root

This page is HMTc Category 5 row 3 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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

This subcategory has **zero direct in-corpus sources** as of cycle 19 (2026-05-09). Non-root vegetable juices are locked as **clean_benchmark** variant_type within the vegetable-juice split, paired against vegetable-juices-root-vegetable-containing (cycle 19) as contamination platform. Standards target = clean p90.

Subcategory scope: tomato juice, kale/spinach/leafy-green juices, celery juice, cucumber-based green juices. Excluded: carrot, beet, sweet-potato juices (which route to root-veg-containing). The architectural rationale: leafy and stem vegetables typically have lower soil-Cd/Pb uptake than root tubers (which directly contact contaminated soils). However, leafy greens DO accumulate some metals (Cd in particular concentrates in leaves; spinach is a known Cd-accumulator), so the clean-benchmark designation is variant-specific not absolute.

The HMTc Cat 1 vegetable-purees-non-root subcategory (different category) has Cd p90 from FDA 2024 baby-food data — that ingredient cascade can inform anticipated juice values, but ingredients cooked-or-juiced vs purees have different concentration profiles.

| Metal | Clean/dirty (anticipated empirical) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean (anticipated low) | 0 | 0 | data gap | Closing requires direct multi-element vegetable-juice survey. FDA 2022 draft Pb cap = 20 ppb other-juice (loaded). |
| [[metals/cadmium]] (Cd) | dirty (anticipated for leafy-green subset) | 0 | 0 | data gap | **Leafy-green-juice subset (spinach/kale) is the dirty signal candidate**: spinach is a known Cd-accumulator. Subsetting from broader non-root would surface this. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated) | 0 | 0 | data gap | Non-root vegetables are not As accumulators. |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway. |
| [[metals/nickel]] (Ni) | clean (anticipated, leafy subset slightly higher) | 0 | 0 | data gap | — |
| [[metals/aluminum]] (Al) | data gap | 0 | 0 | data gap | — |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | 0 | 0 | data gap | Acidic-aqueous matrix (tomato juice especially acidic); weaker Hernandez/Saraiva inference. |
| [[metals/tin]] (Sn) | data gap (canned-juice subset eligible) | 0 | 0 | data gap | Canned tomato juice is a major Sn-leach historical concern (Benoy 1971, ATSDR 2005); modern aseptic tetra-pack and glass have largely replaced lined-can. |

**Wishlist priority**: vegetable-juice multi-element survey distinguishing leafy-green from stem subsets; canned tomato juice Sn-leach review.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
