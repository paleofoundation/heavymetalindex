---
title: "Products coverage — v0"
type: methodology
audience: [regulator, educator, brand-legal]
version: v0
updated: 2026-05-17
methodology_doc: "[[docs/products-coverage-methodology]]"
sibling_list: "[[wiki/coverage-priorities]]"
---

# Products coverage — v0

This page enumerates the product-category coverage map across the 23 HMTc category numbers, plus a small Driver B set of non-HMTc consumer categories that belong on the coverage list for public-wiki defensibility reasons. The construction methodology is documented in [[docs/products-coverage-methodology]]; this page is the lint target.

The coverage state of the corpus as of 2026-05-17 is captured in the table below. The dominant finding is straightforward: **292 product pages exist, but only 82 (28 percent) have any routed sources.** The 210-page source gap is concentrated in Cats 9-23. This is not primarily a wiki-build failure — it's the visible surface of HMTc Step 0 Lock progress. Until a Cat is locked, the bulk-ingest cannot reliably populate its rows ([[docs/order-of-operations]] Part 1 Failure Modes 2 and 3).

## Cross-category state

| Cat | Category name | Rows | With sources | Empty | Lock state | Tier |
|----:|---------------|-----:|-------------:|------:|------------|------|
| 1 | Infant and Child Foods | 16 | 16 | 0 | Locked | Tier 1 |
| 2 | Children Personal Care | 17 | 15 | 2 | Locked (2026-04-28) | Tier 1 |
| 3 | Grains, Cereals, and Rice Products | 9 | 7 | 2 | Scaffolded v2.0 (2026-03-30) | Tier 1 |
| 4 | Fruits, Vegetables, and Produce | 16 | 15 | 1 | Scaffolded v2.0 | Tier 1 |
| 5 | (Beverages, per OO doc) | 17 | 13 | 4 | Locked (2026-05-01) | Tier 1 |
| 6 | Seafood | 5 | 2 | 3 | Scaffolded | Tier 1 |
| 7 | Oils, Condiments, and Specialty Foods | 6 | 4 | 2 | Scaffolded | Tier 2 |
| 8 | Water and Water-Based Products | 3 | 1 | 2 | Scaffolded | Tier 1 |
| 9 | Infant and Child Contact Products (0-5) | 6 | 0 | 6 | Scaffolded only | Tier 1 |
| 10 | Infant and Child Durable Goods and Textiles (0-5) | 11 | 0 | 11 | Scaffolded only | Tier 1 |
| 11 | Meat, Poultry, and Eggs | 7 | 6 | 1 | Scaffolded | Tier 1 |
| 12 | Household Cleaning and Dishwashing | 20 | 0 | 20 | Scaffolded only | Tier 2 |
| 13 | Cosmetics and Personal Care — Leave-on | 14 | 0 | 14 | Scaffolded only | Tier 1 |
| 14 | Cosmetics and Personal Care — Rinse-off | 11 | 0 | 11 | Scaffolded only | Tier 2 |
| 15 | Feminine Care | 10 | 0 | 10 | Scaffolded only | Tier 1 |
| 16 | Dietary Supplements (Human) | 21 | 2 | 19 | Scaffolded only | Tier 1 |
| 17 | Pet Foods | 9 | 1 | 8 | Scaffolded only | Tier 2 |
| 18 | Pet Supplements | 7 | 0 | 7 | Scaffolded only | Tier 3 |
| 19 | Laundry and Fabric-Contact Home Products | 13 | 0 | 13 | Scaffolded only | Tier 3 |
| 20 | Oral Care | 9 | 0 | 9 | Scaffolded only | Tier 2 |
| 21 | Children's Toys, Arts, and Crafts | 21 | 0 | 21 | Scaffolded only | Tier 1 |
| 22 | Home Air and Inhalation-Adjacent Products | 15 | 0 | 15 | Scaffolded only | Tier 3 |
| 23 | Food-Contact Consumer Goods and Kitchenware | 29 | 0 | 29 | Scaffolded only | Tier 2 |
| **Total** | | **292** | **82** | **210** | | |

Lock states reflect the survey of category-level Step 0 Lock documents named in `docs/order-of-operations.md` plus inferred state from the per-page `created_by` and frontmatter scaffold provenance. The "Scaffolded only" state means product pages exist with `hmtc_category` and `hmtc_row` populated, but the Step 0 Lock document defining clean/dirty splits, contamination platform classification, and certification scope has not yet been authored. Pages in this state can still receive routed sources, but the certification threshold workflow cannot proceed until the lock is authored.

## Tier rationale, per category

**Tier 1 — Locked and vulnerable-population categories.** Cats 1, 2, 5, 6, 8, 11 are Tier 1 on standard public-health and vulnerable-population grounds. Cats 3 and 4 (grains, fruits/vegetables) are Tier 1 because their constituent products are dietary-exposure-significant and overlap heavily with the ingredients coverage list. Cats 9, 10, 13, 15, 16, 21 are Tier 1 because they cover infant-contact products, cosmetics with documented Pb adulteration history, feminine-care products with class-action exposure (talc, body powder), human supplements with class-action and FDA-warning history, and children's toys with persistent Pb and Cd findings. The combined Tier 1 row count is 161.

**Tier 2 — Significant but lower-priority.** Cats 7, 12, 14, 17, 20, 23 cover product groups where heavy-metal exposure is real but the per-product burden is typically lower, the population reach is narrower, or the litigation surface is smaller. Combined Tier 2 row count is 88.

**Tier 3 — Backlog.** Cats 18, 19, 22 are tracked but not lint-enforced. Pet supplements, laundry products, and inhalation-adjacent home products are real categories with real heavy-metal exposure, but their priority sits below the food, infant, cosmetic, and supplement categories. Combined Tier 3 row count is 35.

## Driver B — Public-wiki defensibility additions

The following consumer-product categories are added on Driver B grounds (litigation history, FDA Closer to Zero scope, sustained third-party testing reporting, or state-AG action) even when their HMTc category status alone wouldn't put them on the list. Driver B inclusions are flagged with their qualifying criterion.

| Category | Page | Driver B criterion | Tier |
|----------|------|--------------------|------|
| Dark chocolate | [[products/chocolate]] (to be moved from ingredients/) | Class-action (Consumer Reports 2022 Cd findings → multi-defendant litigation 2023-2024) | Tier 1 |
| Applesauce, single-serve fruit purees | [[products/fruit-purees]] | FDA Closer to Zero + cinnamon-applesauce Pb recall 2023 | Tier 1 |
| Cinnamon (spice category, retail) | (no current product page; see [[ingredients/cinnamon]]) | 2023 recall + state-AG action | Tier 1 |
| Turmeric (spice category, retail) | (no current product page; see [[ingredients/turmeric]]) | Sustained Pb adulteration findings + state-AG enforcement | Tier 1 |
| Tap drinking water | (no current product page; Cat 8 partial coverage) | Lead service line scope + persistent FDA/EPA attention | Tier 1 |
| Herbal supplements (broad) | Cat 16 row(s) | Class-action history + FDA warnings | Tier 1 |
| Protein powders | Cat 16 row(s) | Clean Label Project sustained reporting | Tier 2 |
| Baby food rice cereal | Cat 1 row | FDA Closer to Zero anchor category | Tier 1 (also Driver A) |

Driver B inclusions migrate to Driver A when an HMTc Cat lock brings them into certification scope. Several Driver B entries are already inside locked or scaffolded HMTc cats and are listed here to make the public-wiki rationale explicit alongside the certification rationale.

## Highest-priority coverage gaps

The 210 empty product pages are not equal-priority. The following are the Tier 1 rows with zero routed sources that should be addressed first, ordered by combined vulnerable-population and litigation-exposure proximity:

1. **Cat 9 (Infant Contact Products) — all 6 rows empty.** Infant-contact products (e.g., pacifiers, teethers, bottle nipples, sippy cups) carry direct oral exposure to materials in vulnerable populations. Cat 9 has no Step 0 Lock; it needs both a lock and a Cat 9 scaffold pass.
2. **Cat 10 (Infant Durable Goods and Textiles) — all 11 rows empty.** Same infant-exposure logic. Strollers, cribs, car seats, baby clothes. Needs Step 0 Lock.
3. **Cat 21 (Children's Toys, Arts, and Crafts) — all 21 rows empty.** Persistent Pb-in-toys history (consumer-product-safety recalls span decades). Needs Step 0 Lock.
4. **Cat 13 (Cosmetics, Leave-on) — all 14 rows empty.** Includes lipstick, eyeliner, foundation, skin-lightening cream. Documented Pb adulteration; the 2026-05-14 incident around face-paint / lipstick / skin-lightening-cream auto-stubs (now retired) is the canonical case for Cat 13 lock urgency.
5. **Cat 16 (Human Supplements) — 19 of 21 empty.** Class-action and FDA-warning history; Clean Label Project and Consumer Reports sustained reporting. Cat 16 Step 0 Lock is the single highest-leverage item.
6. **Cat 15 (Feminine Care) — all 10 rows empty.** Talc and body powder class-action history; tampon heavy-metals reporting 2024.
7. **Cat 5 row gaps (Beverages) — 4 rows empty.** Cat 5 is locked but four rows have no routed sources, which is the canonical Failure Mode 1 (routing starvation despite a locked governance scope).
8. **Cat 6 (Seafood) — 3 of 5 empty.** Seafood is MeHg-dominant and the corpus contains substantial seafood literature; the empty rows are likely a routing-starvation case.

Items 7 and 8 are different in kind from items 1-6: they need routing fixes and ingest passes against the existing corpus, not new Step 0 Locks.

## Coverage-completion targets

For Tier 1 rows with current source coverage (`with sources` count above), the synthesis workflow per Part 9 of CLAUDE.md drives the page to `complete` status. Lint target: 90 percent of Tier 1 rows with at least one source reach `complete` within 60 days.

For Tier 1 rows with zero sources (currently 90 rows across Cats 8, 9, 10, 13, 15, 16, 21 plus the 4 empty Cat 5 rows), the action is either Step 0 Lock authoring (Cats 9, 10, 13, 15, 16, 21) or routing-starvation diagnosis and ingest (Cats 5, 6, 8). Lint target: every Tier 1 row receives at least one routed source within 90 days, conditional on the Step 0 Lock being authored.

For Tier 2 rows, the 180-day completion target applies once Step 0 Locks are authored. The Step 0 Lock authoring itself is the gating item, not page completion.

## Sibling lists and dependencies

This list depends on the ingredients coverage list at [[wiki/coverage-priorities]]. Tier 1 product pages can only be marked `complete` when their primary input ingredients are at least Tier 2 `complete` on the ingredients list. The two coverage lists are reviewed and updated together quarterly; logged in `log.md` with `op: coverage-update`.

The HMTc Step 0 Lock authoring queue is the single biggest unknown affecting product-coverage timelines. The lock cadence is set by HMTc governance ([[docs/governance/hmtc-governing-principles]]) and is outside the wiki's control. This list assumes a steady-state lock cadence of roughly one Cat per month based on the Cat 1 → Cat 2 → Cat 5 progression observed in 2026-Q1 and Q2.

## Lint integration

`tools/audit-products-coverage.mjs` (TBD) reads this page, joins against the actual product-page inventory, the routing audit, the mandatory-sections audit, and the `pending_category_lock` audit, and emits findings in five categories:

1. **Tier 1 missing-or-empty:** Tier 1 row with zero routed sources older than 90 days from scaffold date → build failure.
2. **Tier 1 incomplete:** Tier 1 row with sources but failing the mandatory-sections audit → build failure.
3. **Tier 2 missing-or-empty:** Tier 2 row with zero routed sources older than 180 days → warning.
4. **Stale `pending_category_lock`:** any product page in the auto-stub state older than 60 days → build failure (per [[docs/products-coverage-methodology]] lock-state rule 1).
5. **Routing-starvation flag:** locked product page with zero sources older than 30 days → orchestrator escalation (Failure Mode 1 detection).

The lint runs in the existing prebuild gate.
