---
type: product-category
category: matcha
hmtc_category: 5
hmtc_row: 12
label: "Matcha"
base_taxonomy: tea-taxonomy
variant_type: distinct_exposure_pathway
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

# Matcha

This page is HMTc Category 5 row 12 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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

This subcategory has **zero direct in-corpus sources** as of cycle 18 (2026-05-09). Matcha is locked as a **distinct_exposure_pathway** variant_type within the tea-taxonomy split — the exposure model differs from steeped tea because matcha is **whole-leaf consumption** (powdered tea suspended in water), not water-extraction. The consumer ingests the entire tea leaf, including all elements that would otherwise remain in spent leaf during steeping.

**Critical exposure-model implication for Al**: Steeped tea typically extracts only 5-30% of dry-leaf Al into the brew (per Karak & Bhagat 2010). Matcha consumers ingest 100% of dry-leaf Al via the suspended-powder pathway. If dry tea leaf is 500-30,000 ppm Al, then a 2 g matcha serving delivers 1-60 mg Al per cup — orders of magnitude higher than the 1-10 mg/L Al in steeped tea (which at ~250 mL serving = 0.25-2.5 mg per cup). **Matcha could be the highest single-source dietary Al exposure in any beverage subcategory.** This is a strong Part 19 dirty-designation candidate but no in-corpus measurement exists.

| Metal | Clean/dirty (anticipated empirical) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | dirty (anticipated) | 0 | 0 | data gap | Matcha-specific Pb measurement absent; ceremonial-grade matcha may have different Pb profile than culinary-grade. Closing requires multi-element matcha survey. |
| [[metals/cadmium]] (Cd) | dirty (anticipated, small) | 0 | 0 | data gap | Same gap pattern as Pb. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated) | 0 | 0 | data gap | Tea is not a known As accumulator; expected low. |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway in tea matrix. |
| [[metals/nickel]] (Ni) | dirty (anticipated, small) | 0 | 0 | data gap | Soil-uptake-driven; closing via multi-element matcha survey. |
| [[metals/aluminum]] (Al) | **dirty (mechanistically very high — distinct_exposure_pathway)** | 0 | 0 | **data gap with the highest regulatory pull in Cat 5** | **Whole-leaf consumption pathway delivers 100% of dry-leaf Al; matcha could yield 1-60 mg Al per 2 g serving vs 0.25-2.5 mg per cup steeped tea.** Closing this gap requires direct matcha multi-element analysis (powder + suspension preparation). |
| [[metals/chromium-vi|Cr-VI]] | data gap | 0 | 1 (cascade) | data gap | Matcha suspension is acidic-aqueous (similar to tea pH); Hernandez/Saraiva milk-like inference doesn't fully apply. |
| [[metals/tin]] (Sn) | data gap | 0 | 0 | data gap | Modern matcha is bagged powder; not canned. |

**Wishlist priority for closing this row**: matcha-specific multi-element analysis paper (none in corpus; surveys typically focus on green tea or oolong rather than matcha specifically — high-priority external acquisition target). The Brzezicha-Cirocka 2016 EU tea study includes some matcha samples; could be partial-fit if obtained.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
