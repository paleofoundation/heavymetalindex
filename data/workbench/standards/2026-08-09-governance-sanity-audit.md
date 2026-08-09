# Governance sanity-audit of the 2026-08-09 pooler hardening (outstanding item 8)

Staff-side. Re-runs the 6-auditor governance sanity-audit whose prior output (session
dd96cbf1) was truncated and never applied. Six independent read-only auditors reviewed
the five commits of this session (`d0ede9974` exposure gate, `8daf9c9ab` sci-notation,
`1c189c36c` quality_flags, `76e5a576f` MeHg/Cr-VI, plus the item-5 verification) AND
the pre-existing state, along the six mandated dimensions. This doc records their
verdicts and the corrections applied.

## Verdicts

| Dimension | Verdict | Action |
| --- | --- | --- |
| 1. Constitution / firewall (Part 2/12/19) | Firewall **intact** — only one `wiki/` file touched (fechner2022 factual frontmatter), both firewall lints pass. 1 MED false-positive (epa1999). | Fixed epa1999 (below). |
| 2. P97/P45 methodology (Part 19) | **Clean** — percentile math untouched (verified via `git log -L`); gate is occurrence-correct; locked powder pair + Ni/Al caps + ×7 conversion all correct; shibata fully gated. | RTF asymmetry deferred (Step-0, logged). |
| 3. Step-0 clean/dirty locks | **Clean** — `subcategory-roles.json` untouched; RTF designation gap surfaced, not self-applied. | Commit the ledger entries (below). |
| 4. not-material registry | Session work **clean** — Cr-VI correctly reasoned + sourced; MeHg correctly absent. Pre-existing oil/spice conflicts flagged. | Logged pre-existing conflicts. |
| 5. no-ML + exposure-exclusion registries | Marquee behaviour **verified** (keeps concentrations, drops biomarker/HQ/dose siblings). 1 MED FP (epa1999) + false-NEGATIVE leaks (efsa2015, scheer2017). | Fixed all three (below). |
| 6. Grading / new code | **58/58 tests pass**; all Q1–Q5 clean (sci-notation renumbering, quality_flags additive, override wildcards, QC-gate parses by name, determinism). Recall + robustness gaps. | Fixed M1, L3; declined L1's original form (see below). |

## Corrections applied (this commit)

1. **epa1999 false positive (auditor 1 F1 / auditor 5 F1) — FIXED at the class level.**
   `epa1999-mercury-update-fish-advisories` fresh-fish tHg (a whole-fish-tissue
   CONCENTRATION, 0.37 ppm) was dropped because `\bbiomonitor` matched the program
   name "National Contaminant **Biomonitoring** Program". Removed the bare
   `biomonitor`/`biomarker` word-tokens from Rule B; genuine human biomarkers are
   still caught by their matrix word (hair/urine/blood/serum/plasma/nail) and by Rule
   A's source-matrices denylist. Effect: fresh-fish tHg restored 5007 → 3804 ppb.

2. **efsa2015 + scheer2017 exposure-dose leaks (auditor 5 F2, F4) — FIXED via override.**
   Four `efsa2015-nickel-food-water` dietary-exposure-dose rows leaked into the
   infant-formula/infant-food-general Ni pools (their `/kg bw` unit was truncated out
   of `statistic_scope`), and `scheer2017`'s "Al from soil and dust = 6.6% of intake"
   context row leaked into infant-formula Al as 6600 ppb. Both sources are exposure /
   tolerable-intake opinions, not occurrence. Added exclude-overrides to
   `routing-exposure-only.csv`. Effect: infant-formula Ni 3.43 → cap 100;
   infant-formula Al pooled 6600 → cap 500.

3. **Recall + robustness (auditor 6 M1, L3) — FIXED.** Added `weekly intake`,
   `monthly intake`, and the JECFA/EFSA dose acronyms (PTWI/TWI/PTMI/TDI/EDI/EWI) to
   Rule B, and broadened the blood-biomarker token to element symbols (Pb/Cd/Hg/Ni), so
   a dose/biomarker row whose per-bw unit is truncated is still caught. Fixed
   `loadSourceMatrices` to parse block-list YAML `matrices:` (previously inline-only),
   closing a path by which a block-frontmatter risk-model source could evade Rule A.
   Added the `menstrual-*` biomarker matrices to Rule A's denylist (F7).

4. **notes excluded from Rule B (auditor 6 L1) — APPLIED after evidence.** I initially
   kept `notes` in the Rule B haystack. Re-pooling exposed a false positive it caused:
   `hasan2021-bangladesh-dairy-trace-elements` butter/ghee Cd/Pb/Cr/tAs are real
   "butter, as-sold" concentrations, but their `notes` said "back-calculated from
   Table 2 **EDI** values", so the new EDI token matched. Restricted Rule B to
   `statistic_scope` + `basis` (the authoritative statistic descriptors). No leak is
   reintroduced because the efsa2015/scheer2017 cases are now handled by explicit
   overrides. Effect: butter-and-ghee cells restored.

Net pool effect of all item-8 corrections vs. the pre-audit pool: 5 cells changed,
all intended (epa1999 restore, efsa2015/scheer leak removal, a minor tampon row); the
four locked formula rows are unchanged. 62/62 unit tests pass.

## Declined / pushed back

- **commit_sha "pending" (auditor 1 F3).** Not a defect — `wiki_edit_audit.jsonl`
  records `"pending"` by convention (written during pre-commit before the SHA exists;
  every prior entry uses it); git provides the linkage. Left as-is.

## Deferred to the outstanding ledger (governance / pre-existing / out of scope)

- Oil/spice not-material entries whose one-line partitioning rationales conflict with
  live multi-source occurrence pools (cooking-oils-other Cd/tAs, olive-oil tAs, spices
  Al) + the olive-oil tHg no-ML "complete" over-claim (auditor 4 items 1–4, auditor 5
  F6). Pre-existing (dated 2026-06); revoking a not-material or adjudicating pool
  sources is a governance call.
- kim2018 pet-food human-comparator-intake row leaking into the pet-food Cd pool
  (auditor 5 F3) — pet food, out of the food-standards scope.
- RTF clean/dirty pair designation, and the `variant_type=clean_benchmark` public
  frontmatter role signal the pooler falls back to for RTF-non-soy (auditor 2 F3) —
  folded into the already-logged RTF Step-0 decision.
- The Cr-VI pool still computes 34.7 ppb while the QC gate correctly emits
  NOT_MATERIAL (auditor 4 cross-cutting): the not-material designation is applied at
  the gate, not fed back into pool source-admission. Published output is correct; noted
  as an architecture observation.
- Local branch is +4/+5 vs base `aa06ad499`; `main` advanced to `91b7e0c9f` via a
  parallel session (+1). Integration is a small reconcile, not a fast-forward.

## Residual sci-notation risk — affirmatively checked

Auditor 2 asked for proof (not assumption) that no other 10^n artifact hides in a
small Tier-1 pool. The full-corpus dry-run diff done during item 2 is that proof: the
only sci-notation-affected pooled cells were shibata (gated) and cleary MeHg (gated);
every other diff row was a dabeka/rodriguez extraction regression, not sci-notation.
