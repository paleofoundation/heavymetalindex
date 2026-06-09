# Category 7 — Oils, Condiments, and Specialty Foods — Step Zero Amendment 1 (decision; staged)

**Status:** Active decision, 2026-06-09. Amends `category-7-step0-lock.md` (locked 2026-06-02) under
the authority of `taxonomy-reorganization-2026-06.md` (v2.1) and the canned/tin rule in
`docs/standards-methodology.md`. New Step Zero lock event, not an in-place edit.
**Decided by:** the four-lens canned/tin design panel. **No candidate values change in this amendment.**

## Scope

Applies the canned/tin rule to Cat 7's canned and snacks rows. Rows 1–9 (the locked oils/condiments/
specialty core) are untouched.

## Canned foods (Row 11, `canned-foods-general`)

Per the canned/tin rule, canned products route to their matrix-native row with a `canned` tin flag;
they do not live in a packaging-defined "canned foods" row in the specialty-foods category.

- **Canned produce migrates to Cat 4 (Produce)** as the tin-dirty flag of its matrix row, following
  the Cat 4 mushrooms precedent (no new Cat 4 rows): canned tomatoes, tomato paste, and tomato sauce
  → the non-root-vegetable row; canned fruit → the fresh/frozen-fruit row; canned vegetables → the
  non-root-vegetable row (legume-specific canned items, e.g. canned beans, → the legumes/pulses row).
  The five canned-produce sub-variant pages (`canned-tomatoes`, `canned-vegetables`, `canned-fruit`,
  `tomato-paste`, `tomato-sauce`) re-point from the Cat 7 parent to their Cat 4 matrix row.
- **`canned-foods-general` is NOT retired.** The execution lens found it carries the richest tin
  evidence in the corpus (≈25 directly routed sources, ~15 reporting Sn, plus ~48 from the aliased
  sub-variants). It is **reframed as the cross-matrix coarse tin-evidence node**: matrix-assignable
  sources migrate to their matrix rows' canned splits; genuinely mixed/unspecified canned-foods
  sources remain here as broad tin context, referencing the canonical tin treatment (Cat 23 /
  `standards-methodology.md`). The "0 loaded" marker on its table is a known extraction-marker
  artifact (Cat 7 lock §"value_record_count"), not missing evidence.

## Snacks (Row 10, `snacks-general`) — deferred, not dissolved

`snacks-general` is a provisional row with no shipped standard and ~1 on-platform source (the rest
off-platform). Dissolving it into Cat 3/Cat 4 now is reorganizing an empty box: it touches the grains
and produce categories for no scaling or defensibility gain. **Decision: leave it in place as a Cat 7
provisional row** (recognition fixed to Cat 7 Row 10 in the v2.1 pass); it resolves when evidence
accumulates. Mixed-meals (Row 12) likewise stays.

## Why the canned-produce migration is staged

The execution lens confirmed the produce re-pointing is the safe, reversible half (routing-map +
redirect-frontmatter + index edits, the redirect pattern already in production for these five pages,
no locked number touched, no Step Zero amendment strictly required). It is staged only to keep it
atomic and correct: the inheritance-map target and the page state must change in the **same commit**,
or the audit emits rows pointing at a dead page and the orphaned-reference lint **blocks the build**
(Part 18). It is the next deliberate action, with the destinations specified above.

## Staged execution checklist (the deliberate next pass)

1. Re-point the five canned-produce inheritance-map entries from `canned-foods-general` to their Cat 4
   matrix rows (with the `canned` tin flag), atomically with the page redirect_target updates.
2. Update `wiki/products/index.md`: move the canned-produce bridge nodes from Cat 7 to Cat 4.
3. Reframe `canned-foods-general` as the cross-matrix coarse tin node; migrate matrix-assignable
   sources; reference the canonical tin treatment.
4. Run the routing audit; confirm `routing_unresolved.csv` / orphaned-reference are clean before commit.

## Drift direction

Additive and toward coherence; no thresholds touched (`canned-foods-general` and `snacks-general`
carry no shipped values).

## Changelog
- 2026-06-09 — Amendment 1. Decision recorded: canned produce → Cat 4 matrix rows with a tin flag;
  `canned-foods-general` reframed as the cross-matrix tin-evidence node (not retired); snacks deferred,
  not dissolved. Physical re-pointing staged as the next atomic pass; no candidate values changed.
