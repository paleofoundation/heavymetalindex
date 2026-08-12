# Category 7 Dissolution — Step Zero Event (and new Cat 30–35)

> **Historical lock event; limit-setting method superseded 2026-08-12.** The taxonomy dissolution and never-renumber decisions remain in force. Any occurrence-selected standards arithmetic below is retained only as historical context.

**Status:** Active, 2026-06-09. Under the authority of `taxonomy-v2.2-matrix-family-recut.md`,
`docs/standards-methodology.md` (§"Packaging and processing format is a flag"), and the four-lens
food-taxonomy design panel (2026-06-09). Approved by Karen. **Supersedes** `category-7-step0-amendment-1.md`'s
"Cat 7 survives with a reframed canned node" framing: Cat 7 dissolves entirely.
**Guardrail:** never renumber. Cat 7's rows retire **in place** (numbers retained, never reused) and
re-parent to new/existing categories. **Shipped per-analyte values are carried forward VERBATIM — this is
a re-parenting, not a re-derivation.** No threshold moves a digit.

## Why Cat 7 dissolves

"Oils, Condiments, and Specialty Foods" was never a contamination platform — it was a residual bucket
that pooled fats, sweeteners, acids, a Cd platform (chocolate), a Pb/Cr platform (spices), a mineral
(salt), grain snacks, a packaging platform (canned), and frozen meals. The standards math (P97 clean /
P45 dirty of a subcategory's marginal) only computes when a category's rows split clean-vs-dirty on a
**shared analyte axis**; a category pooling disjoint platforms cannot produce a defensible chapter. This
is the same defect already diagnosed in `condiments-general` ("fractured across six incompatible
platforms") and in `canned-seafood` (MeHg-and-Sn in one pool). Dissolving Cat 7 and landing each member
on a coherent platform is the consistent application of the matrix-beats-format rule already applied to
Cat 4 and Cat 6 — **rigor, not instability.** The public gains six intuitive grocery aisles; the standards
engine gains six computable chapters.

## The new categories (each an intuitive aisle whose rows are platform-coherent)

| # | Category | Rows | Clean ↔ dirty axis |
|--:|----------|------|--------------------|
| 30 | **Culinary Oils and Fats** | olive oil; other cooking/seed oils | refined seed oils (clean) ↔ unrefined/origin-specific (dirty); **Pb/Ni** |
| 31 | **Sweeteners and Syrups** | honey; tree/plant syrups (maple, agave, molasses); refined sugar; rice syrup | refined sugar/agave (clean) ↔ honey **Pb/Cd**, maple **Pb/Sn**, rice syrup **iAs**, molasses **Pb/Cd** (dirty) |
| 32 | **Condiments, Sauces and Dressings** | vinegar; soy-sauce/fermented; fish sauce; tomato condiments (ketchup); mustard/mayo/dressings | light vinegars/dressings (clean) ↔ balsamic **Pb/As**, aged soy/fish sauce **Pb/Cd/tHg** (dirty); acid-extraction/fermentation Pb axis |
| 33 | **Chocolate, Cocoa and Confectionery** | cocoa/chocolate; candy/confectionery; gummies/jellies | milk/low-cocoa choc + plain candy (clean) ↔ dark/high-cocoa/origin **Cd**, imported/tamarind/chili candy **Pb** (dirty) |
| 34 | **Herbs, Spices, Seasonings and Salt** | herbs/spices/seasonings; salt; hot/chili sauces | soil-uptake spices (clean) ↔ adulteration-prone turmeric/chili **Pb/Cr** (dirty); salt independent (Codex anchor) |
| 35 | **Prepared and Packaged Meals** | mixed/prepared meals (frozen dinners, boxed, RTE) | composite — inherits component-matrix platforms; no standalone split until component evidence accumulates |

## Re-parenting map (Cat 7 rows → homes; shipped values carried forward)

| Cat 7 row (retired in place) | → home | shipped? |
|---|---|---|
| r1 olive-oil | Cat 30 r1 | yes — carry verbatim |
| r2 cooking-oils-other | Cat 30 r2 | yes — carry verbatim |
| r3 butter-and-ghee | **Cat 24 Dairy** (new butter/ghee row) | yes — carry verbatim |
| r4 honey | Cat 31 r1 | yes — carry verbatim |
| r5 vinegar | Cat 32 r1 | yes — carry verbatim |
| r6 condiments-general | **DECOMPOSE** (see below) | no (provisional) |
| r7 chocolate | Cat 33 r1 | yes — carry verbatim |
| r8 spices | Cat 34 r1 | yes — carry verbatim |
| r9 salt | Cat 34 r2 | yes — carry verbatim |
| r10 snacks-general | **Cat 3 Grains / Cat 4 Produce by matrix** (dissolve) | no |
| r11 canned-foods-general | cross-matrix tin-evidence node (Cat 23 reference) + matrix re-home | no |
| r12 mixed-meals-prepared-foods | Cat 35 r1 | no |

### Condiments decomposition (the per-source work)
`condiments-general` (25 sources, ~11 of them misfiled spice papers) decomposes by dominant platform:
hot sauce / chili sauce → **Cat 34** (chili-borne Pb/Cr = the spice-adulteration platform); ketchup /
tomato condiments → **Cat 32** tomato-condiment row, cross-linked to the Cat 4 tomato matrix; soy sauce →
**Cat 32** fermented row; fish sauce → **Cat 32** fish-sauce row, cross-linked to Cat 6; mustard/mayo/
dressings → **Cat 32** dressings row (provisional). This is per-source judgment work and executes after
the mechanical re-parents.

## Gaps filled in this event (panel "true whitespace")
- **Lipstick → Cat 13 (cosmetics), new "Lip products" row** — 19 homeless sources; the lipstick page is
  retired with a stale "Cat 13 doesn't exist" note. Un-retire and re-home. (Non-food; quick win.)
- **Confectionery/candy → Cat 33** (imported-candy Pb platform).
- **Plant-based meat alternatives → Cat 27 Legumes** (legume-derived; cross-link Cat 11).
- **Pickled/fermented vegetables → Cat 4** (new row).
- **Soups/broths/stocks → Cat 32 or Cat 35** (bone-broth Pb).

## Execution sequence (staged by defensibility cost — cheapest/safest first)
1. **Governance (this doc) + taxonomy JSON** (append Cat 30–35; annotate Cat 7 rows `rerouted_to`; v2.2).
2. **Scaffold Cat 30–35** with NO candidate values; **re-parent the shipped rows** (olive-oil, cooking-oils,
   honey, vinegar, chocolate, spices, salt, butter/ghee) — change only `hmtc_category`/`hmtc_row`, preserve
   every per-analyte value/basis/confidence verbatim. Re-point `cat7-standards-tables.md` lineage.
3. **Snacks → Cat 3/4; mixed-meals → Cat 35; canned per the canned rule.**
4. **Condiments decomposition** (per-source) — last, because it is read-each-source judgment work.
5. **Gap rows** (lipstick first — independent quick win; then plant-meat, pickled-veg, soups).
6. Retire Cat 7 to a redirect/landing node (number retained); routing audit green; index updated.
- Every re-point is **atomic** (inheritance-map target + page state + index in one commit) to avoid the
  orphaned-reference lint blocking the build.

## Drift direction (Part 2)
Additive re-parenting; **zero threshold movement** (shipped values carried verbatim). No claim softened or
strengthened. The move is consistent rule application, framed as rigor.

## Changelog
- 2026-06-09 — Cat 7 dissolved. New Cat 30 Oils & Fats, 31 Sweeteners & Syrups, 32 Condiments/Sauces/
  Dressings, 33 Chocolate/Cocoa/Confectionery, 34 Herbs/Spices/Seasonings/Salt, 35 Prepared & Packaged
  Meals. Shipped rows re-parented verbatim; condiments decomposed; gaps (lipstick, confectionery,
  plant-meat, pickled-veg, soups) opened. Supersedes category-7-step0-amendment-1's "Cat 7 survives" framing.
