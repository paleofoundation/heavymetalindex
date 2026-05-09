---
type: product-category
category: true-tea-camellia-sinensis
hmtc_category: 5
hmtc_row: 11
label: "True tea (Camellia sinensis)"
base_taxonomy: tea-taxonomy
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

# True Tea (Camellia Sinensis)

This page is HMTc Category 5 row 11 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

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

This subcategory has **zero direct in-corpus sources** as of cycle 18 (2026-05-09). The cells below document data gaps with explicit rationales for what would close each gap, per CLAUDE.md Part 19 framework. True tea (Camellia sinensis) is locked in the Cat 5 architecture as a contamination_platform variant_type paired against herbal-botanical-infusions as the clean_benchmark within the tea-taxonomy split.

True tea's HMT&C-relevant facts from the **broader scientific literature** (not yet in HMTc corpus):

- **Al is the dominant analyte.** Camellia sinensis is a well-documented Al hyperaccumulator: dry tea leaf typically 500-30,000 ppm (mg/kg) Al; steeped tea typically 1-10 mg/L = 1,000-10,000 ppb. Karak & Bhagat 2010 review (Food Research International) estimates ~25% of dietary Al intake in tea-drinking populations comes from tea. **Highest-priority data gap in Cat 5.**
- **Pb** is variable; tea plants take up Pb from contaminated soils. Schwalfenberg 2013 (Toxicology Reports) found 73% of Canadian-market teas had Pb 0-2.4 ppm dry leaf; Brzezicha-Cirocka 2016 (Food Additives & Contaminants) similar pattern in European market.
- **Cd** present in some teas; soil-uptake-driven; subset overlap with the Pb-elevated samples.
- **F (fluoride)** is also elevated in tea from old-leaf harvesting; not an HMT&C analyte but worth noting for the broader exposure picture.

Per Part 19, dirty/clean is per-analyte empirical: Al is empirically dirty in true tea (vs herbal-botanical-infusions clean benchmark, which lacks the Camellia accumulation pathway). Pb and Cd are dirty in some teas (geographic-soil-dependent). Other analytes default to data gap.

| Metal | Clean/dirty (anticipated empirical) | n | n_a_tier | CC eligibility | Closing rationale |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | dirty (anticipated) | 0 | 0 | data gap | Closing requires multi-element tea survey (e.g., Schwalfenberg 2013, Brzezicha-Cirocka 2016, Karak & Bhagat 2010 — all paywalled, on wishlist for next-cycle external acquisition). |
| [[metals/cadmium]] (Cd) | dirty (anticipated, small) | 0 | 0 | data gap | Same survey papers would close. |
| [[metals/arsenic-total]] (tAs) | clean (anticipated low) | 0 | 0 | data gap | Tea is not a known As accumulator; expected low but no measurement. |
| [[metals/arsenic-inorganic]] (iAs) | clean (anticipated low) | 0 | 0 | data gap | Same; closing requires direct iAs speciation. |
| [[metals/methylmercury]] (MeHg) | data gap | 0 | 0 | data gap | No methylation pathway in tea matrix; biologically unexpected. |
| [[metals/mercury-total]] (tHg) | data gap | 0 | 0 | data gap | Closing requires direct measurement to confirm baseline. |
| [[metals/nickel]] (Ni) | dirty (anticipated, small) | 0 | 0 | data gap | Tea has measurable Ni; soil-uptake. Closing via multi-element survey. |
| [[metals/aluminum]] (Al) | **dirty (well-established by broader literature)** | 0 | 0 | **data gap with high regulatory pull** | **Highest-priority Cat 5 data gap.** Camellia sinensis is a documented Al hyperaccumulator (dry leaf 500-30,000 ppm; steeped 1-10 mg/L). Karak & Bhagat 2010 estimates tea contributes ~25% of dietary Al in tea-drinking populations. Closing via tea-Al survey ingest (paywalled, wishlisted). |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | 0 | 1 (cascade) | data gap | Steeped tea is acidic-aqueous (pH 4-6); the milk-like Hernandez/Saraiva Cr(VI)<LOD inference is weaker for tea. Direct Cr speciation in tea absent from corpus. |
| [[metals/tin]] (Sn) | data gap | 0 | 0 | data gap | Modern tea is loose-leaf or bagged; canned-tea-leach Sn-context not applicable. |

**Wishlist priority for closing this row's Al gap**:
1. Karak & Bhagat 2010 "Trace elements in tea leaves, made tea and tea infusion" *Food Research International* (review).
2. Schwalfenberg 2013 "Heavy metals tainting tea" *Toxicology Reports* (Canadian survey).
3. Brzezicha-Cirocka 2016 "Mineral and toxic elements in commercial tea infusions" *Food Additives & Contaminants*.
4. Tea-leaf and steeped-tea multi-element ICP-MS surveys (multiple available; paywalled).

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- Source promotion pending.
