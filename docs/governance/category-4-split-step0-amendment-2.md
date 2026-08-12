# Category 4 Split — Step Zero (Amendment 2 + new Cat 27/28/29)

> **Taxonomy history; limit-setting method superseded 2026-08-12.** The re-homing and never-renumber decisions remain active. Any clean/dirty language below is a historical occurrence-comparison label, not a current certification pathway. Initial limits are government-limit-only; later tightening uses eligible certified-lot data.

**Status:** Active, 2026-06-09. Under the authority of `taxonomy-v2.2-matrix-family-recut.md`. This is
both a Cat 4 Step Zero amendment (it slims Cat 4) and the Step Zero lock for the three new categories
born from the split. **Phase A of the re-cut: scaffold-level, no shipped standards involved.**
**Guardrail:** never renumber. Cat 4 rows 8–18 retire **in place** (numbers retained, never reused) and
re-home; Cat 4 rows 1–7 are unchanged.

## What changes

Cat 4 "Fruits, Vegetables, and Produce" had become a dumping ground for every plant food that wasn't a
grain. It slims to **"Fruits and Vegetables"** (produce proper) and the non-produce families move to
their own categories. None of the moved rows carry shipped standards (verified: no `cat4-standards-tables.md`),
so this is a routing/scaffold re-home, fully reversible, no carry-forward math.

**Cat 4 retained — rows 1–7 (Fruits and Vegetables):** fresh/frozen fruit (1), dried fruit (2), fruit
snacks (3), leafy/green vegetables (4), spinach (5), non-root vegetables (6), root/tuber vegetables (7).
The spinach-vs-leafy and produce soil-uptake Cd/Pb splits stay intact.

**Cat 4 retired-in-place and re-homed — rows 8–18:**

| Cat 4 row (retired) | slug | → new home |
|---|---|---|
| 8 | legumes-pulses-other | Cat 27 r1 |
| 9 | soy-products | Cat 27 r2 |
| 10 | peanuts | Cat 27 r3 |
| 15 | peanut-butter | Cat 27 r4 |
| 11 | nuts-seeds-other | Cat 28 r1 |
| 12 | cashews | Cat 28 r2 |
| 13 | sunflower-seeds | Cat 28 r3 |
| 14 | nut-seed-butters-other | Cat 28 r4 |
| 16 | sunflower-seed-butter | Cat 28 r5 |
| 17 | cultivated-mushrooms | Cat 29 r1 |
| 18 | wild-mushrooms | Cat 29 r2 |

## New categories

### Cat 27 — Legumes and Pulses
**Pathway:** Ingestion (oral). **Jurisdiction:** FDA, EU, Codex. **Platform:** Cd/Pb soil uptake; the
peanut Al/Ni platform. Rows: legumes/pulses (beans, lentils, chickpeas, peas) (1), soy products (2),
peanuts (3), peanut butter (4). **Boundary:** peanuts and peanut butter live here, not in Cat 28 —
peanuts are legumes botanically and carry the legume-uptake platform; cross-linked from Cat 28.

### Cat 28 — Nuts, Seeds, and Their Butters
**Pathway:** Ingestion (oral). **Jurisdiction:** FDA, EU, Codex. **Platform:** Cd (sunflower seed,
cashew), Ni (cashew). Rows: tree nuts and seeds (1), cashews (2), sunflower seeds (3), nut and seed
butters, other (4), sunflower-seed butter (5). The within-family clean/dirty splits (cashew-Ni,
sunflower-Cd) carry over. **Boundary:** peanut/peanut-butter route to Cat 27.

### Cat 29 — Edible Fungi
**Pathway:** Ingestion (oral). **Jurisdiction:** FDA, EU, Codex. **Platform:** wild fungi
hyperaccumulate Cd, Hg, Pb, and radiocesium; cultivated (controlled-substrate) are the clean
counterpart. Rows: mushrooms — cultivated (clean) (1), mushrooms — wild and processed-wild (contaminated)
(2). Fungi are a distinct kingdom, not produce; canned/pickled wild mushrooms remain processed-wild
pooling into row 2 with a tin flag (per the canned/tin rule). Supersedes the v2.1 placement of mushrooms
as Cat 4 rows 17/18 (`category-4-step0-amendment-1.md`).

## Execution (Phase A checklist)
1. Taxonomy JSON: append Cat 27/28/29; annotate Cat 4 rows 8–18 `rerouted_to`; bump to v2.2.
2. Re-parent the 11 row pages' frontmatter (`hmtc_category`/`hmtc_row`/`hmtc_category_name`) to the new
   homes; the page slugs are unchanged, so source declarations keep routing to them.
3. Create Cat 27/28/29 master rollup pages.
4. Index: slim the Cat 4 section to rows 1–7; add Cat 27/28/29 sections; update the Cat 4 intro.
5. Routing audit 0-blocking; regen; commit.

## Drift direction
Additive, toward coherence. No shipped standard is touched (none exist for these rows). Reversible.

## Changelog
- 2026-06-09 — Cat 4 split. Rows 8–18 retired-in-place and re-homed to new Cat 27 (Legumes), Cat 28
  (Nuts/Seeds/Butters), Cat 29 (Edible Fungi). Cat 4 slimmed to Fruits and Vegetables (rows 1–7).
  Scaffold-level; no candidate values changed.
