---
op: remediation
auditor: opus-4.8
date: 2026-06-21
audience: [karen]
scope: execution of the 10 highest-return fixes from 2026-06-21-methods-audit-opus48.md
companion: data/workbench/defensibility-audits/2026-06-21-methods-audit-opus48.md
---

# Methods-audit remediation — the 10 next things, done

This records the 10 fixes executed against the methods audit
([[data/workbench/defensibility-audits/2026-06-21-methods-audit-opus48.md]]).
Every change moves toward the literature (CLAUDE.md Part 2): nothing was
softened or strengthened toward HMT&C convenience. **No published point
estimate changed** — the default lognormal pool is byte-identical, so headline
P97/P45 values are untouched; the engine fixes change only the sensitivity band
and the dirty-sibling target selection, and the threshold regeneration that
would apply the latter is left as a separate Karen-reviewed step.

Guiding safety rule: every new gate is **CI-safe** today — report-only or
grandfathered against a committed baseline — so the existing backlog is tracked,
not build-breaking. Each one's flip-to-blocking, after its backlog drains, is
the documented follow-up (mirroring how the 182-cell integrity backlog was
handled).

## The 10

| # | Finding | Fix | Status |
|---|---|---|---|
| 1 | C1/F2 — censored-zero `[0, X]` blind spot | `audit-contamination-profile-integrity.mjs` now detects `typical_ppb[0]==0 && [1]>0`; 368 cells grandfathered, new ones block | done, build green |
| 2 | C2 — fabricated sensitivity analysis | genuine Marsaglia-Tsang **gamma** family added; nonparametric honestly unavailable for summary-moment-only cells; briefing language corrected | done |
| 3 | H4/A3 — missing `basis-conversion.mjs` | created as single source of truth for the 1:7 factor + `convertBasis()`; engine and briefing now import it | done |
| 4 | H3/A6 — silent clean/dirty default | `targetForProduct()` maps `variant_type` explicitly; dirty siblings (`higher-contamination-sibling` ×24, `contaminated-platform`) now get P45 not the silent P97; unknown labels flagged | done (regeneration of staged thresholds pending Karen) |
| 5 | C3 — no Part-2 drift check | `tools/standards/audit-threshold-drift.mjs` built (rationale-tag + literature-vs-final gap + tag/value mismatch). Live: **8** findings | done, `--warn-only` in standards-gaps |
| 6 | H8 — confidence vs n_studies | `tools/audit-ingredient-confidence.mjs`. Live: **381** violations (280 over-confident) | done, `--warn-only` in prebuild |
| 7 | M1/C-F10 — public p95 firewall leak | p95 column stripped from all 4 table generators; **231** ingredient pages regenerated to 5 columns | done |
| 8 | H2/D-F3 — provenance never blocks | `audit-claim-provenance.mjs` gains `--strict` + baseline; now blocks NEW uncited claims (was unable to fail). Current unsupported = 0 | done, `--strict` in prebuild |
| 9 | M3/B-3 — watcher not in `serve` | `serve` now runs the chokidar watcher and kills it on exit | done |
| 10 | Fable5 #4 — dead source wikilinks | `tools/audit-source-wikilinks.mjs`. Live: **650** occurrences / **156** dead targets | done, `--warn-only` in prebuild |

## Backlogs now tracked (drain targets)

These inventories are committed so the work is visible and the gates can be
flipped to blocking once drained:

- `data/evidence/contamination-integrity-censored-zero-backlog.csv` — 368 cells
- `data/evidence/ingredient-confidence-audit.csv` — 381 cells
- `data/evidence/dead-wikilinks-audit.csv` — 156 targets
- `data/evidence/threshold-drift-audit.csv` — 8 rows
- `data/evidence/claim-provenance-baseline.json` — 0 (already clean; strict gate live)

## Tests

87 new/updated unit tests across the engine and the five detector tools, all
passing. Full suite green except two pre-existing live-API smoke tests
(OpenAlex/PubMed) that require network and are unrelated to this work.

## What is deliberately NOT done here (needs Karen)

- **Re-running the pooling engine to apply the P45 dirty-sibling correction.**
  The code is fixed; regenerating the staged standards will tighten ~24
  dirty-sibling rows toward correct (~2x). That is a staff-standards run that
  should be reviewed, not bundled into a methods-fix PR.
- **Governance classification of `whole_row_platform` / `bridge` / `base`.**
  The engine now flags these as `variant_type_recognized:false` and defaults to
  the documented P97 clean-by-default rather than guessing dirty; their true
  clean/dirty status is a Step 0 governance decision.
- **Draining the four backlogs** (censored-zero, confidence, dead links,
  rationale tags) and then flipping each gate from `--warn-only` to blocking.
- **The nonparametric sensitivity variant for summary-moment-only cells.** It is
  honestly reported as unavailable rather than fabricated; giving those cells a
  real nonparametric estimate would require richer extracted distributions.
