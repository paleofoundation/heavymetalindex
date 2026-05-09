---
type: product-category
category: kombucha-tea-based
hmtc_category: 5
hmtc_row: 16
label: "Kombucha (tea-based)"
base_taxonomy: kombucha-and-fermented-beverages
variant_type: contamination_platform
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

# Kombucha (Tea-Based)

This page is HMTc Category 5 row 16 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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

This subcategory has **zero direct in-corpus sources** as of cycle 18 (2026-05-09). Kombucha (tea-based fermented beverage) is locked as a **contamination_platform** variant_type within the kombucha-and-fermented-beverages split, paired against fermented-beverages-non-tea-based as the clean_benchmark.

Kombucha facts from broader literature (not in HMTc corpus):
- Kombucha is fermented sweetened tea (true tea or green tea + sugar + SCOBY culture); inherits **all heavy metals from the tea base** including Camellia sinensis Al accumulation.
- Fermentation step at acidic pH 2.5-4.5 can extract additional metals from brewing vessels — historically a Pb concern with crystal/lead-glazed pottery; modern stainless-steel commercial production largely eliminates this.
- Kombucha brewers' Lead Poisoning case reports from home-brewed kombucha in lead-glazed ceramic crocks documented in CDC MMWR 1995 (relevant historical context).
- The acidic kombucha matrix (pH 2.5-4.5) makes Cr(VI) more stable than in neutral matrices — the milk-like Hernandez/Saraiva inference is **weakest** here vs other Cat 5 subcategories.

| Metal | Clean/dirty (anticipated) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | dirty (anticipated; tea-base cascade + historical lead-glaze concern) | 0 | 0 | data gap | Closing requires direct kombucha multi-element survey + commercial vs home-brew distinction. CDC MMWR 1995 lead poisoning case is regulatory context. |
| [[metals/cadmium]] (Cd); [[metals/aluminum]] (Al) | dirty (tea-base cascade) | 0 | 0 | data gap | Inherits Camellia sinensis Al accumulation; fermentation may concentrate or retain. Kombucha-specific Al measurement absent. |
| [[metals/arsenic-total]] (tAs); [[metals/arsenic-inorganic]] (iAs) | clean (anticipated low) | 0 | 0 | data gap | Tea is not a known As accumulator. |
| [[metals/methylmercury]] (MeHg); [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | No methylation pathway in tea/kombucha matrix. |
| [[metals/nickel]] (Ni) | dirty (anticipated, small) | 0 | 0 | data gap | Tea-base cascade. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference WEAK for kombucha) | 0 | 0 | data gap | **Acidic kombucha matrix (pH 2.5-4.5) is where the Hernandez/Saraiva milk-like Cr(VI)<LOD inference applies LEAST.** Direct Cr speciation in kombucha is the highest-value Cr-VI measurement in Cat 5. |
| [[metals/tin]] (Sn) | data gap | 0 | 0 | data gap | Modern kombucha is bottled or canned aluminum can; canned-Sn-leach minor concern. |

**Wishlist priority for closing this row**: kombucha multi-element analysis + Cr speciation (the latter is the highest-value Cr-VI measurement target in Cat 5 because acidic matrix conditions are where Cr(VI) is most stable). None in HMTc corpus.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
