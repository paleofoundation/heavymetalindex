# Fable 5 task — assemble the per-ingredient consumption dataset

This is the missing input that lights up the scorecard's consumption-weighting (D1 depth
+ D11 readiness ranking), which currently renders `tier-unset` corpus-wide. Single
research-heavy Fable session. Paste below the line into a fresh session in
`~/Desktop/heavy-metal-index`.

---

You are a fresh Claude session in the Heavy Metal Index repo. You run in an isolated
git worktree, so build and commit on your own branch; never commit to `main`, never push.

## Goal
Produce `data/reference/consumption-intake.csv` — a per-capita daily consumption figure
for each ingredient slug in `wiki/ingredients/`, with a cited source — so the existing
binning rule (staple ≥50 g/day · common 5–50 · occasional 0.5–5 · rare <0.5) can derive
the consumption tier deterministically. You assemble the g/day figures; a separate
deterministic assembler does the binning.

## Steps
1. `git checkout -b fable/consumption-intake-2026-06-10`.
2. Enumerate the ingredient slugs from `wiki/ingredients/*.md` (one per file; ~258).
3. For each, find a per-capita daily intake figure (grams/day) from a public dietary
   intake dataset — prefer in this order: USDA WWEIA / FNDDS (US mean per-capita),
   EFSA Comprehensive European Food Consumption Database, FAO Food Balance Sheets / FAO
   GIFT. Use web search/fetch. Map the dataset's food category to the ingredient slug
   honestly (e.g. `chocolate` → cocoa/chocolate confectionery intake; `kumquat` → may
   only resolve to "citrus, other" or have no figure).
4. Write `data/reference/consumption-intake.csv` with columns:
   `ingredient_slug, g_per_day, population, source_dataset, source_ref, note`.
   - `population` = e.g. `US-all`, `EU-adult`, `global`.
   - `source_ref` = dataset table id / URL / citation, so the figure is auditable.
   - If you cannot find a defensible figure, leave `g_per_day` blank and set
     `note=no-figure-found`. **Do NOT guess a number.** A blank is honest; a fabricated
     intake is exactly the failure mode this task exists to avoid.
5. Commit the CSV (and a short header/README note on method + the binning thresholds) to
   your branch.

## Constraints
- No human is routed anywhere; blanks become an autonomous follow-up, not a person's task.
- Every non-blank figure must cite its source. Auditability is the whole point — a
  skeptic must be able to check `kumquat ≈ 0.1 g/day` back to a dataset.
- Coverage need not be 100%. Prioritize the high-consumption staples first (grains, dairy,
  common produce, chocolate, coffee, rice, seafood) — those are where the tier weighting
  matters most; rare/exotic blanks are fine.

When done, print: `DONE: consumption-intake -> <branch> (N of M ingredients with a cited figure)`.
