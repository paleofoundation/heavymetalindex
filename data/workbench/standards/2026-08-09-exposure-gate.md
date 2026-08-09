# Occurrence-vs-exposure gate for the standards pooler (2026-08-09)

Staff-side. Not public wiki. Resumes the baby-formula pooler hardening from crashed
session dd96cbf1 (outstanding item 4: "stop hair-biomarker/model values entering
concentration pools; collapse the tatsuta duplicate").

## Problem

The HMTc per-analyte standard is a food-**concentration** percentile. Three other
kinds of number live in the same `*_ppb` columns and silently poison an occurrence
pool if admitted, because nothing in the pipeline separated them from concentrations:

1. **Biomarkers** — metal measured in a person (hair, urine, blood, serum, nails).
2. **Dietary-intake doses** — mass per kg body weight per day/week (a dose).
3. **Risk-assessment / Monte-Carlo model inputs** — distribution parameters, not
   measured samples.

Two were live, published poisons before this fix:

| Cell | Before | Driver |
| --- | --- | --- |
| `infant-formula-powder` tHg | p97 **1019.87 ppb** (candidate 1019.87, uncapped) | tatsuta2024 **hair THg** 1.05 ppm ≈ 1050 ppb + fsanz2011 dietary-exposure PTWI row |
| `baby-cereals-dry-rice-based` iAs | p97 **2568.74 ppb** (only the 100 ppb cap hid it) | shibata2016 **Monte-Carlo** model inputs (also the sci-notation artifact, item 2) |

The tatsuta value would have published a 1020 ppb "infant-formula mercury standard" —
physically impossible for a food, and indefensible on its face.

## The gate

New module `tools/evidence/exposure-classifier.mjs` (pure logic, unit-tested in
`exposure-classifier.test.mjs`), wired into the pooler
(`build-hmtc-aggregate-distributions.mjs`, `applyExposureGate` in `main()`, applied
to both structured and sample rows before any pooling). Two independent signals:

- **Rule A (source-level).** The source's frontmatter `matrices` are *all* drawn
  from the exposure/model denylist (no food-concentration matrix). Excludes the
  whole source. Catches pure modelling / biomonitoring papers (shibata2016,
  efsa-arsenic-contam-2009, signes-pastor2022 [urine]).
- **Rule B (row-level).** The row's `statistic_scope` / `basis` / `notes` reads as a
  biomarker matrix, a per-body-weight dose, or a model output. Excludes just that
  row, so a mixed source keeps its genuine concentrations. Catches tatsuta's hair
  row while sparing its measured-food MeHg row; catches the "µg/kg bw" intake rows
  inside richly-tagged total-diet studies (fsanz2011, fsai2016, efsa2015).

Every exclusion is written to `data/evidence/standards-exposure-exclusions.csv`
(source_id, metal, slug, phase, rule, reason) and is reversible in
`data/evidence/routing-exposure-only.csv` (`action=keep` force-admits, `action=exclude`
force-drops; blank metal/slug are wildcards). A false positive is a one-line fix, not
a silent data loss.

## Impact (verified diff, all pools, not just formula)

22 rows excluded from 18 sources. 13 pooled cells changed; every change is the removal
of a non-concentration value:

- **Poisons removed:** `infant-formula-powder` tHg 1020 → BLOCKED (no real
  concentration ever existed for that parent row — both contributors were exposure);
  `baby-cereals-dry-rice-based` iAs 2568 → 390 (still capped at 100).
- **Intake/exposure removed (moved toward the true concentration distribution):**
  `infant-formula` Ni 7.36 → 3.43 and `infant-food-general` Ni emptied (efsa2015
  nickel opinion intakes); `infant-formula` Al pooled 18240 → 6600 (scheer2017
  tolerable-intake-for-toys); `infant-cereal` iAs (chiger2017 Monte-Carlo daily iAs);
  `fresh-fish` MeHg / tHg (alsulaiti2023 EWI, epa1999 advisories).
- **Hazard-quotient / ratio artifacts removed (these were never concentrations):**
  `infant-food-general` Pb kept lin2023 breast-milk 6.49 ppb but dropped its Pb
  hazard-quotient row; `pet-food-dry-kibble` Cd **5950 → 544** and Pb **113680 →
  80190** (kim2018 "270× the human daily intake" mis-parsed as 270000 ppb).
- **Genuine concentrations preserved:** lin2023 breast-milk Pb, rodriguez-mendivil2019
  canned-tuna Cd, and all of fechner2022 (see below) stayed in their pools.

The four locked formula rows (`infant-formula-powder-non-soy`, `-soy-based`,
`-rtf-liquid-non-soy`, `-rtf-liquid-soy-based`) are **unchanged** — they pool from
fsa2016 + fda2026 + dabeka2011 etc., none of which the gate touches.

## One false positive found and fixed at root

`fechner2022` (the German BfR MEAL total-diet study, which measures concentrations in
869 pooled prepared-food samples) was tagged `matrices: [dietary-intake]` only, so
Rule A wrongly excluded its real fish tHg concentration (0.100 mg/kg) and inflated
`canned-fish` tHg by 26%. Root-cause fix: its frontmatter now reads
`matrices: [dietary-intake, total-diet-study, ready-to-eat-food]` — matching the
sibling Irish TDS (fsai2016) and reflecting what the study actually measured. After the
fix fechner is fully re-admitted (0 exclusions) and Rule B still catches any true
intake row inside it. Direction check (CLAUDE.md Part 2): restoring real occurrence
data moves the pool **toward the literature**, not toward HMTc convenience.

## tatsuta 3-page duplicate

Already collapsed by the DOI-dedup pass (`aa06ad499`). Only one page remains
(`wiki/sources/tatsuta2024-mehg-duplicate-diet-children-japan.md`); no further dedup
needed.

## Residual notes (not blocking; logged for follow-up)

- A handful of efsa2015 age-group intake rows lack an explicit "bw" token in their
  scope text and are not caught by Rule B; they route to an `undefined`/stranded slug
  and never reach a pool, so they are harmless today. If those ever route to a real
  slug, add them to `routing-exposure-only.csv` or tighten Rule B.
- `canned-fish` Cr-total emptied because its only rows were an intake (fsai2016) and a
  hazard quotient (rodriguez-mendivil2019); the real canned-tuna Cr concentration
  (0.167 mg/kg) is trapped in a Cd-keyed autonomy row (nearest-metal mis-binding) — an
  extraction-quality issue, separate from this gate.
