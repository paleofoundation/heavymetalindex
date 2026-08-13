# Category 6 — Seafood — Step Zero Amendment 1 (decision; staged execution)

> **Historical lock event; limit-setting method superseded 2026-08-12.** Taxonomy and row-identity decisions remain part of the record. Any P45/P97, literature-baseline, occurrence-selected, or occurrence-ratchet language below is not current HMTc methodology.

**Status:** Historical decision record, 2026-06-09. Amends `category-6-step0-lock.md` (locked 2026-06-02) under
the authority of `taxonomy-reorganization-2026-06.md` (v2.1) and the canned/tin rule now in
`docs/standards-methodology.md`. This is a new Step Zero lock *event*, not an in-place edit, per the
never-renumber identity guardrail.
**Decided by:** a four-lens design panel (strategic, adversarial-defensibility, execution-cost,
methodology), unanimous on the shape below. **No candidate values change in this amendment.**

## The defect this fixes

Row 6 `canned-seafood` is a `whole_row_platform` that pools every canned fish matrix into one
marginal distribution. That forces a single distribution to serve two incompatible analytes:

- **Methylmercury** — where the fish species drives the value. The shipped Cat 6 table pools canned
  sardines (low-MeHg, non-predatory) with canned tuna (high-MeHg, predatory) into one MeHg sub-block
  (P97 ≈ 30.5 µg/kg), while the marine-predatory row's MeHg is ≈ 829 µg/kg. The Cat 6 lock itself
  calls the predatory/non-predatory split "toxicologically mandated" because methylmercury
  bioaccumulates up the marine food chain — and Row 6 abolishes that axis the moment the fish is
  canned. This is the single most cross-examinable construct in the category and it is **live under
  the locked standard**.
- **Tin** — where the can, not the fish, drives the value. Canning is the correct grouping axis for
  Sn, but it is a packaging platform, not a seafood-matrix property.

Per the canned/tin rule (`standards-methodology.md` §"Packaging and processing format is a flag"), a
packaging-defined matrix row is defective. The same v2.1 version already ratified the corrected
pattern for Cat 4 mushrooms (canned routes to the matrix row with a tin flag, no separate canned
row), so the freestanding `canned-seafood` row is now internally inconsistent with our own rule.

## The decision

1. **Canned fish route to their matrix-native fish row** (freshwater → Row 1; marine non-predatory,
   e.g. sardines/anchovies/salmon/cod → Row 2; marine predatory, e.g. tuna/mackerel → Row 3) and
   carry a `canned` tin flag. Row 6 `canned-seafood` is retired-in-place to a broad-scope routing
   node (number retained, never reused), the same pattern Cat 6 already uses for the `seafood` and
   `fresh-fish` coarse nodes.
2. **The tin flag is the Sn-dirty subcategory of each fish row.** Tin is pooled per fish-row × canned,
   not as one canned-seafood Sn pool, and the cap is `min(percentile, lowest applicable inorganic-tin
   ceiling)` in the row's native basis. The shipped Row 6 Sn literature value is not usable (pooled
   from a single source, `rustemli2026`, verdict BLOCKED ≥2 distinct sources required); the binding
   value was always the regulatory cap. **Carry forward the lowest applicable ceiling, in the correct
   tin species** — Codex CXS 193 is *total* tin (250 mg/kg); EU 2023/915 caps *inorganic* tin lower;
   do not carry total-tin forward unexamined.

## Why this is staged, not executed in this sprint

All four panel lenses independently flagged that the physical retirement must be a deliberate step,
not same-sprint surgery:

- **Defensibility:** retiring a dated, locked Step Zero record one week after shipping it reads as
  instability ("a one-week half-life") to a hostile expert, *unless* the trigger is legible. Doing it
  as a deliberate, evidence-and-rule-grounded amendment — separated from the lock date — reads as
  rigor. The fix itself (de-pool MeHg) is what the literature forces; the retirement timing is a
  presentation choice, and deliberate beats hasty.
- **Execution cost:** `canned-seafood` carries **147 routed sources**, the large majority declared
  broadly (`seafood`/`canned-fish`) with species and MeHg/tHg speciation unresolved. Re-sorting them
  into predatory vs non-predatory is per-source judgment work, not a mechanical move, and must not be
  attempted inside a reorg pass.
- **Routing safety:** the `canned`-flag mechanism must exist in the routing layer before the row is
  retired, or the broad declarations land in `routing_unresolved.csv` and block the build. Sequence:
  define the canned-tin flag mechanism → migrate routing (broad sources fan to Rows 1–3 as
  `broad_product_context`, the mechanism Cat 6 already uses) → retire Row 6. Never the reverse.

## Staged execution checklist (the deliberate next pass)

1. Implement the `canned` tin-flag mechanism in the routing/pooling layer.
2. Migrate routing: `canned-fish`/`canned-seafood` broad declarations fan to Rows 1–3 (predatory/
   non-predatory/freshwater) as broad context; species-resolved sources route to the specific row.
3. Retire Row 6 to a broad-scope node (number retained); add a transparency note on the
   `canned-seafood` page that its single MeHg pool was a known matrix-mixing artifact, linking here.
4. Carry the lowest-applicable inorganic-tin ceiling onto each fish row's canned split; preserve the
   tin species label.
5. Re-derive per-fish-row MeHg and per-fish-row canned-Sn at the next synthesis pass (not before).

## Drift direction

Toward the literature and toward correctness: it unbundles a packaging-format pool that mixed two
distinct MeHg populations, and it tightens (never loosens) the tin treatment by requiring the
lowest-applicable inorganic ceiling. No threshold is loosened by this decision.

## Changelog
- 2026-06-09 — Amendment 1. Decision recorded (matrix-native fish routing + canned tin flag; Row 6
  retired-in-place; tin cap = lowest applicable inorganic ceiling). Physical retirement and the
  147-source species triage staged as a deliberate gated pass; no candidate values changed here.
