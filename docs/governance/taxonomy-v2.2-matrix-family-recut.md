# HMTc Taxonomy v2.2 — Matrix-Family Re-Cut

**Status:** Active decision, 2026-06-09 (Karen directive). Extends `taxonomy-reorganization-2026-06.md`
(v2.1) and applies the canned/tin rule in `docs/standards-methodology.md`.
**Nature:** finishes the matrix-family cut the taxonomy started inconsistently. Grains, seafood, meat,
and dairy each got their own category; legumes, nuts/seeds, fungi, oils, sweeteners, condiments, cocoa,
and spices never did — they were crammed into "Fruits, Vegetables, and Produce" (Cat 4) and "Oils,
Condiments, and Specialty Foods" (Cat 7, a junk drawer). This appends the missing categories.
**Guardrail (unchanged):** never renumber. Existing rows retire **in place** (number retained, never
reused) and re-home to a new category; new categories append at 27 and up. Locked-category changes are
dated Step Zero lock events. Shipped standards are carried forward intact, never recomputed by the move.

## Why "new categories," not more cramming

"Never renumber" protects the *identity* the routing layer and orphan-linker depend on. It does **not**
forbid new categories — appending is the additive fix. Mushrooms were jammed into Produce (fungi are
not produce); legumes, nuts, seeds, and seed-butters sit inside "Produce" with no botanical or
contamination-platform coherence; Cat 7 mixes fats, sweeteners, acids, a Cd platform (chocolate), a
Pb/Cr platform (spices), a mineral (salt), grain snacks, a packaging platform (canned), and frozen
dinners. Each of those is a distinct, certifiable matrix family with its own contamination story. They
get their own numbers.

## The new structure

| # | New category | Re-homed from | Rows |
|--:|--------------|---------------|------|
| 27 | Legumes and Pulses | Cat 4 r8–10, r15 | beans/lentils/chickpeas/peas (legumes-pulses-other), soy products, peanuts, peanut butter |
| 28 | Nuts, Seeds, and Their Butters | Cat 4 r11–14, r16 | tree nuts & seeds, cashews, sunflower seeds, nut/seed butters, sunflower-seed butter |
| 29 | Edible Fungi | Cat 4 r17–18 | mushrooms cultivated (clean) / wild & processed-wild (Cd/Hg/Pb/radiocesium) |
| 30 | Culinary Oils and Fats | Cat 7 r1–2 | olive oil, other cooking oils |
| 31 | Sweeteners and Syrups | Cat 7 r4 | honey, maple/agave/molasses syrups |
| 32 | Condiments, Sauces, and Vinegars | Cat 7 r5–6 | vinegar, condiments (hot/soy sauce, mustard, ketchup, mayo, salsa) |
| 33 | Cocoa and Chocolate | Cat 7 r7 | cocoa powder, dark/milk chocolate, chips |
| 34 | Herbs, Spices, Seasonings, and Salt | Cat 7 r8–9 | herbs/spices/dried seasonings, salt |
| 35 | Prepared and Packaged Meals | Cat 7 r12 | frozen dinners, boxed meals, ready-to-eat |

**Reassignments to existing categories (not new numbers):**
- **Butter and ghee** (Cat 7 r3) → **Cat 24 Dairy** (dairy fat belongs with dairy; supersedes the v2.1
  "stays in Cat 7, cross-link" note).
- **Snacks** (Cat 7 r10) → **Cat 3 Grains** (crackers/biscuits/bars/cookies/chips/popcorn are grain or
  produce products; this finally executes the snacks move deferred in v2.1).
- **Canned foods, general** (Cat 7 r11) → distributed by the canned/tin rule (canned produce → Cat 4 /
  Cat 27 matrix rows with a tin flag; mixed/unspecified canned stays a cross-matrix tin-evidence coarse
  node referencing Cat 23). Per `category-7-step0-amendment-1.md`.

**Cat 4 slims to "Fruits and Vegetables"** (rows 1–7: fresh/frozen fruit, dried fruit, fruit snacks,
leafy/green veg, spinach, non-root veg, root/tuber veg). **Cat 7 dissolves** once emptied — its number
is retired, never reused; it becomes a redirect/landing for legacy `hmtc_category: 7` references.

### Judgment calls (made, not deferred)
- **Peanuts + peanut butter → Legumes (Cat 27), not Nuts.** Peanuts are legumes botanically and carry
  the legume-uptake Al/Ni platform the Cat 4 lock already split them on; cross-linked from Cat 28.
- **Salt → with Spices/Seasonings (Cat 34).** Salt is a mineral, not a botanical spice, but it shares
  the "added in small amounts" use and the seasoning shelf; the mineral distinction is noted on the row.
- **Edible Fungi is a full category (Cat 29) despite being small.** Fungi are a distinct kingdom with a
  distinct hyperaccumulation story; a clean small category beats a wrong cram into Produce.

## Cost asymmetry → two execution phases

Verified 2026-06-09: only **Cat 6 and Cat 7** have shipped standards tables. Cat 4 has none.

- **Phase A — Cat 4 → Cat 27/28/29 (cheap, clean).** The legume/nut/seed/butter/fungi rows are
  locked-scope but carry **no shipped standards**. Re-home is scaffold-level: new category pages + page
  frontmatter re-parenting + routing inheritance + index + a Cat 4 Step Zero Amendment 2. Reversible,
  no number movement, no carry-forward math. Execute first.
- **Phase B — Cat 7 → Cat 30/31/32/33/34 + Cat 24/Cat 3/Cat 35 (careful).** Cat 7 is MANUAL-READY with
  **all 8 rows shipped** (`data/workbench/standards/cat7-standards-tables.md`). Re-homing moves published
  standards, so it follows the canned precedent (`category-6-step0-amendment-1.md`): retire each row in
  place, **carry its shipped per-analyte values forward unchanged** onto the new-category row, dated Cat 7
  Step Zero Amendment, and re-point `cat7-standards-tables.md` lineage. No value is recomputed by the
  move. Execute after Phase A, atomically per row to avoid orphaned-reference lint.

## Relationship to prior decisions (coherent, not contradictory)
- **Supersedes** the v2.1 placement of mushrooms as Cat 4 rows 17/18 (they move to Cat 29) and the v2.1
  "butter/ghee stays Cat 7" note (moves to Cat 24).
- **Builds on** the canned/tin rule: the rule says "canned = flag on the matrix-native row," and this
  re-cut creates the proper matrix categories for canned items to flag into. The Cat 6 canned-seafood
  MeHg decision is unaffected (seafood is untouched).
- The reserved decisions (Cat 27→now used; tobacco as a future number, vape-factoring, the candidate
  rows) renumber accordingly: tobacco, if elected, appends after the highest used number.

## Drift direction (Part 2)
Additive and toward coherence. No threshold is recomputed: Phase A rows carry no shipped values; Phase B
rows carry their shipped values forward **unchanged**. The move reorganizes homes, not numbers.

## Execution checklist
- **Phase A:** new-category Step Zero locks (27/28/29); taxonomy JSON append + Cat 4 rerouted annotations
  (v2.2 bump); new category master pages; re-parent the 11 Cat 4 rows (frontmatter `hmtc_category`/row);
  routing inheritance; index (slim Cat 4, add 27/28/29); Cat 4 Step Zero Amendment 2.
- **Phase B:** new-category Step Zero locks (30–35); re-parent + carry-forward the 9 shipped Cat 7 rows
  (atomic per row); butter/ghee → Cat 24; snacks → Cat 3; mixed-meals → Cat 35; canned per the canned
  amendment; Cat 7 Step Zero dissolution amendment; re-point shipped-standards lineage; routing; index.
- Regenerate + lint green after each phase; routing audit 0-blocking before each commit.

## Changelog
- 2026-06-09 — v2.2 decision. Nine new matrix-family categories (27–35); Cat 4 slimmed to produce; Cat 7
  dissolved; butter/ghee→Dairy, snacks→Grains. Phase A (Cat 4, scaffold) then Phase B (Cat 7, shipped,
  carry-forward). Never renumber; shipped values carried forward unchanged.
