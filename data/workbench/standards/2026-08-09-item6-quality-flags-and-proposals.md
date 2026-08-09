# Pooler quality flags + methodology proposals (outstanding item 6, 2026-08-09)

Staff-side. Resumes crashed session dd96cbf1's "Blocker 12" (proposal written, not
implemented): winsorize single-sample P97 maxima; surface a sample_level==0 quality
flag; collapse the divergent READY/PROVISIONAL/THIN classifiers.

Split by what is a safe additive fix vs. a locked-methodology / Step-0 governance
call that must not be self-applied.

## SHIPPED — additive quality-flags column (safe, zero value change)

`build-hmtc-aggregate-distributions.mjs` now emits a `quality_flags` column
(semicolon-separated), computed only for usable pools, appended last so positional
consumers are unaffected. Verified: 0 candidate/verdict changes vs. the prior pool.

- `no_sample_level_data` — the pool has no raw sample-level contributor; it was
  reconstructed entirely from summary statistics (weaker tail estimation). This is
  the sample_level==0 flag item 6 asked for.
- `single_source_pool` — fewer than 2 distinct sources.
- `single_sample_tail` — single source AND median source-N ≤ 1: the percentile (and
  the P97 max in particular) rests on effectively one sample. This is the exact
  population the winsorization proposal below targets.

Corpus distribution: 445 cells clean, 318 `no_sample_level_data`, 223
`single_source_pool`, 29 `single_sample_tail`. The flag is non-blocking by design —
it grades a usable standard for reviewers without changing its value or the
QC-gate/verdict logic. It also gives the FDA lower-bound-censoring issue (outstanding
item 5, `OI-20260809-fda-summaries-missing-lod-for-midbound-censoring`) a visible
surface: cells dominated by summary-only non-detect data carry `no_sample_level_data`.

## PROPOSE (do NOT self-apply) — winsorize single-sample P97 maxima

Locked methodology (Part 19 percentile rule is system-wide; changing tail handling
moves published values in every category). The `single_sample_tail` flag now
enumerates the 29 candidate cells.

Finding that lowers the urgency: most flagged cells have **p95 ≈ p100 ≈ target**
(they are single-*value* pools — fresh-fish tAs 0.2/0.2/0.2; fruit-purees Cu
862/862/862; leafy-vegetables Cd 38/38/38), so there is no extreme sample to winsorize
— winsorization would change them by ~0. The list is also dominated by nutritional
metals (I, Ca, Cu, Fe, Mn, Se, Zn, Co) outside the HMTc 10-analyte panel. Winsorization
only bites where p100 ≫ p95 from one source, which is rare in the flagged set.

Recommendation: the transparency flag is the real fix; keep winsorization as an
optional, Karen-authorized refinement applied only to flagged cells whose p100/p95
ratio exceeds a threshold. Logged: `OI-20260809-winsorize-single-sample-p97`.

## SURFACE (Step-0 governance) — RTF clean/dirty pair designation

`subcategory-roles.json` contains only the two POWDER rows, both
`authorized_by: Karen Pendergrass` 2026-08-02 (non-soy clean P97 / soy dirty P45).
The two RTF-liquid rows are absent, so they take the documented default (independent
P97). Consequence: the soy siblings are held to different percentiles — powder-soy
P45 (dirty), rtf-soy P97 (independent) — purely because only the powder pair has been
through Step-0. This is a pending governance designation, **not** a bug to auto-fix:
the clean/dirty pairing is a Step-0 lock that only Karen authorizes. Decision needed:
should the RTF soy/non-soy pair be designated a clean/dirty pair mirroring the powder
pair, or deliberately kept independent P97? Logged: `OI-20260809-rtf-formula-clean-dirty-designation`.

## SURFACE (reporting consistency) — gap-report percentile label vs. pooler

`build-standards-gap-report.mjs` labels soy-powder `independent_p97_pooled`, but the
pooler correctly computes it as dirty P45 (from `subcategory-roles.json`, which the
gap report does not read). The pooler is authoritative and correct; the gap-report
label is stale for configured rows. The three status vocabularies (pooler
READY/PROVISIONAL/BLOCKED; gap-report POOLING-ENGINE-PENDING/BLOCKED; row-classifier
DONE/PROVISIONAL/BLOCKED/OUT_OF_SCOPE) are layered by purpose, not truly redundant;
`build-standards-row-classifier.mjs` already reconciles pooler + gap-report into one
verdict. The concrete fix is narrow: have the gap report read `subcategory-roles.json`
for its scope label so it stops mislabelling configured dirty rows as
`independent_p97_pooled`. Safe reporting-only change, but it touches a second
generator — logged for a focused pass rather than bundled here:
`OI-20260809-gap-report-reads-subcategory-roles`.
