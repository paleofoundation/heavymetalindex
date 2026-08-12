# Category 4 — Fruits, Vegetables, and Produce — Step Zero Amendment 1

> **Taxonomy history; limit-setting method superseded 2026-08-12.** Mushroom row identities remain part of the record. Any clean/dirty language below is a historical occurrence-comparison label and cannot select a current limit or status. Initial HMTc values are government-limit-only.

**Status:** Active. Amends the Cat 4 Step Zero lock under the authority of
`taxonomy-reorganization-2026-06.md` (v2.1), 2026-06-08. A new Step Zero lock *event*, not an
in-place edit, per the never-renumber identity guardrail.
**Scope:** appends a mushrooms family (cultivated-vs-wild split) at the **end** of the Cat 4 row list.
Existing rows 1–16 are unchanged and not renumbered. **No candidate values** in this pass.

## What is added

Cat 4's live row list ends at row 16 (`sunflower-seed-butter`). Two rows append:

| Row | Name | Slug | Side |
|----:|------|------|------|
| 17 | Mushrooms — cultivated (button, cremini, portobello, oyster) | `cultivated-mushrooms` | clean counterpart |
| 18 | Mushrooms — wild and processed-wild | `wild-mushrooms` | contaminated platform |

## Why a cultivated-vs-wild split

Wild mushrooms are a documented Cd, Hg, Pb, and radiocesium accumulation platform; cultivated button
mushrooms grown on controlled substrate are the clean counterpart. This is the same
contamination-platform split pattern already locked for spinach vs leafy greens
(`docs/standards-methodology.md` §clean/dirty), so it is method-consistent: row 18 is the dirty side,
row 17 the clean side, per analyte.

## Scaffolds resolved

Three provisional scaffolds resolve into this family:
- `wild-mushrooms` → **row 18** (contaminated).
- `canned-mushrooms` → **row 18** (processed-wild defaults to the contaminated side; the canned format
  carries the usual Sn flag, cross-referencing the Cat 23 cans/lids tin mechanism, exactly as any other
  canned produce does — no separate canned row).
- `pickled-mushrooms` → **row 18** (processed-wild).
- A `cultivated-mushrooms` master is created for **row 17**.

## Boundary rules

- Cultivated species grown on controlled substrate route to row 17; foraged/wild species, and any
  processed form (canned, pickled, dried) of a wild species, route to row 18.
- A mushroom product marketed for ages 0-5 routes to Category 1.
- A "mushroom coffee" or mushroom product sold with a Supplement Facts panel routes to Category 16
  (per the existing Cat 5/Cat 16 boundary rule).

## Drift direction

Additive; scaffold only; no thresholds. Resolves three homeless mushroom scaffolds into a
method-consistent clean/dirty pair.

## Changelog
- 2026-06-08 — Amendment 1. Rows 17 (mushrooms cultivated, clean) and 18 (mushrooms wild, contaminated)
  appended; wild/canned/pickled mushroom scaffolds merged to row 18; no candidate values.
