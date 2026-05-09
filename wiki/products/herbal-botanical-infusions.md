---
type: product-category
category: herbal-botanical-infusions
hmtc_category: 5
hmtc_row: 10
label: "Herbal/botanical infusions"
base_taxonomy: tea-taxonomy
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern: [Al, Pb, Cd]
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

# Herbal/Botanical Infusions

This page is HMTc Category 5 row 10 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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

This subcategory has **zero direct in-corpus sources** as of cycle 19 (2026-05-09). Herbal/botanical infusions are locked as **clean_benchmark** variant_type within the tea-taxonomy split, paired against true-tea-camellia-sinensis (cycle 18) and matcha (cycle 18) as contamination platforms. Standards target = clean p90.

Herbal infusions encompass chamomile, peppermint, rooibos, hibiscus, ginger, and many other non-Camellia botanicals. Unlike Camellia sinensis (which is a documented Al hyperaccumulator), most herbal botanicals are NOT Al accumulators — chamomile, peppermint, and ginger have Al levels typically <50 mg/kg dry vs Camellia's 500-30,000 mg/kg. **The clean-benchmark architectural intent is empirically supported for Al** (vs the cycle-17 fruit-juice case where it was empirically overridden).

Geographic-soil dependence is the major variance driver: hibiscus from Egyptian/Mexican soils may have different metal profiles than Sudanese or West African origins. Rooibos (Aspalathus linearis, South African) has a documented Mn-uptake profile but generally low Pb/Cd.

| Metal | Clean/dirty (anticipated empirical) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd) | clean (anticipated; soil-dependent variance) | 0 | 0 | data gap | Closing requires multi-element herbal-tea survey covering chamomile/peppermint/rooibos/hibiscus across geographic origins. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated) | 0 | 0 | data gap | — |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway. |
| [[metals/nickel]] (Ni) | clean (anticipated) | 0 | 0 | data gap | — |
| [[metals/aluminum]] (Al) | **clean (architectural intent supported by botany — non-Camellia herbs are not Al accumulators)** | 0 | 0 | data gap | Closing this row's Al cell requires multi-element herbal survey to confirm the clean-vs-Camellia-tea baseline. **High value for the tea-vs-non-tea Part 19 contamination_platform comparison.** |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | 0 | 0 | data gap | Acidic-aqueous infusion matrix. |
| [[metals/tin]] (Sn) | data gap | 0 | 0 | data gap | Modern herbal tea is bagged/loose; not canned. |

**Wishlist priority**: multi-element herbal-tea survey establishing the clean baseline for the Camellia-tea contamination-platform comparison.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
