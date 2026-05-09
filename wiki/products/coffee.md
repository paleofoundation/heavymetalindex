---
type: product-category
category: coffee
hmtc_category: 5
hmtc_row: 13
label: "Coffee"
base_taxonomy: coffee
variant_type: independent_no_split
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern: [Pb, Cd, tAs]
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

# Coffee

This page is HMTc Category 5 row 13 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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

This subcategory has **zero direct in-corpus sources** as of cycle 18 (2026-05-09). Coffee is locked as an **independent_no_split** variant_type — no within-pair partner; standards target is standalone p90 if measurements were available.

Coffee facts from broader literature (not in HMTc corpus):
- Coffee plants take up some metals from volcanic soils; less Al-accumulation than Camellia sinensis (tea).
- Brewed coffee Pb/Cd/As typically lower than ground coffee due to extraction-efficiency limits (most metals stay in spent grounds).
- Robusta vs Arabica varieties show different metal profiles (Robusta higher Cu/Mn).
- Green/raw coffee bean Pb 0.05-0.5 ppm; brewed coffee at typical 50:1 dilution gives 1-10 ppb Pb.
- Acrylamide and ochratoxin A are higher-priority coffee contaminants in regulatory frameworks (not HMT&C analytes).

| Metal | Clean/dirty (anticipated) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd) | clean (anticipated low in brewed; potentially measurable in ground) | 0 | 0 | data gap | Closing requires multi-element coffee survey. Distinguishing brewed vs ground coffee is an axis-axis decision per Part 6. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated low) | 0 | 0 | data gap | Coffee not a known As accumulator. |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway in coffee matrix. |
| [[metals/nickel]] (Ni) | clean/dirty TBD | 0 | 0 | data gap | Coffee Ni is measurable; Robusta higher than Arabica. |
| [[metals/aluminum]] (Al) | clean (vs tea high baseline) | 0 | 0 | data gap | Coffee plants are not Al hyperaccumulators like tea; expected lower. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | 0 | 1 (cascade) | data gap | Brewed coffee is acidic-aqueous (pH 4-5); milk-like Cr(VI)<LOD inference is weaker than for milk-based beverages. |
| [[metals/tin]] (Sn) | data gap (modern); historical canned-RTD-coffee context | 0 | 0 | data gap | Modern coffee is brewed-fresh or single-serve; canned-RTD-coffee is a minor share with potential canned-Sn-leach context. |

**Wishlist priority for closing this row**: multi-element coffee survey distinguishing brewed vs ground; both are commercial-form-axis routes. None in HMTc corpus.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
