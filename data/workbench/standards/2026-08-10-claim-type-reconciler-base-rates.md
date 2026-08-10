---
op: standards-claim-reconciliation
date: 2026-08-10
scope: generalize the not-material reconciler to every affirmative claim type on the HMTc standards
audience: [staff]
generated_by: opus-4.8 + claim-reconciler-drain workflow (7 source-reading verification agents)
reconcilers:
  - tools/evidence/audit-value-substantiation.mjs
  - tools/evidence/audit-cleared-adjudication.mjs
  - tools/evidence/audit-no-ml-substantiation.mjs
---

# Claim-type reconciler base rates (2026-08-10)

## Headline

The 2026-08-10 not-material session hardened one affirmative claim type — "this analyte is not material for this matrix" — from a hand-typed field into a gated, evidence-reconciled claim, on the finding that three independent sessions had each discovered a wrongly-not-material cell by hand. That base rate is the general pathology of a certification reference, not a not-material-specific one: asserting the cheap thing (no value needed, no ML to map, an outlier waved through) beats doing the work, and nothing makes the cheap thing expensive. This pass extends the same reconcile-against-evidence gate to the three other convenience-prone claim types on the standards — **published limit values**, **"cleared" outlier adjudications**, and **"no regulatory ML exists" findings**. Each is now a rebuttable presumption that must trace to ground truth and be uncontradicted by any evidence in the corpus.

Three deterministic reconcilers were built, wired into `prebuild` warn-only behind the not-material pattern, and will flip to build-blocking as each FAIL backlog reaches zero. A 7-agent verification workflow then read the actual source pages and register rows to separate confirmed defects from false positives, so nothing was reclassified on the strength of a flag alone (the cooking-oils tAs lesson: a gate passing is not proof; the samples are). Of 32 source-read verdicts, **29 were confirmed defects, 2 false positives, 1 partial — and every recommended fix moved toward the literature or was neutral; none toward HMTc convenience.**

The deterministic base rate: **24 build-blocking FAILs and 69 review WARNs** across 126 gated claims. The value gate is where the defect concentrates — only 2 of 86 firm literature-baseline percentiles pass clean — and the verification workflow traced most of it to a single systemic bug (below).

## Base rate by claim type

| claim type | gated | FAIL | WARN | PASS | confirmed on source-read |
| --- | --- | --- | --- | --- | --- |
| published value (firm literature-baseline) | 86 | 15 | 69 | 2 | 14/15 domination FAILs confirmed (13 cap-defeat bug, 1 thin); 2/2 fish-iAs wrong-analyte; ~5 broad-context leaks; 2 false positives |
| published value (regulatory-alignment / other) | 18 | — | — | — | INFO — a legal/staff selection, not a percentile; contributor-traceability N/A |
| cleared outlier adjudication | 14 | 1 | 0 | 13 | 1/1 confirmed (cooking-oils-other/Cd) — reversed to HOLD this session |
| no-ML-confirmed finding | 8 | 8 | 0 | 0 | 8/8 contradicted by a loaded national ML (IL/VN/SG/CN) — register-grounded |

Context: 440 (product, analyte) cells across 123 products carry a value; 104 are firm. Of the 86 firm literature-baseline cells, 52 rest on zero sample-level contributors (the percentile is reconstructed from source-reported means/ranges, not measured upper-tail samples) — a corpus-wide limitation the value gate treats as context, reserving FAIL/WARN for specific, actionable defects.

## What each reconciler checks

**Published value — `audit-value-substantiation.mjs`.** A firm literature-baseline value asserts "the P97 of the certifiable product's real occurrence distribution is X ppb." It gates every admitted contributor in the pooling engine's `contribution_log` against four questions: does this source measure THIS analyte (speciation-aware — a Cr-total source in the Cr-VI slot, a tAs-only source in an iAs pool, fails); in THIS matrix (grounded in the Part 5b routing layer — a source routed only as `broad_*_context`, not `direct_evidence`, should not drive a firm percentile); at a sample level (a `uniform_max_only` reconstruction may be a group mean wearing a maximum's name); and without one lab dominating (a source ≥65% of the pool is one lab's distribution). FAIL on the unambiguous defects; WARN plus a structured flag on the fuzzy judgments the source PDFs must settle.

**Cleared adjudication — `audit-cleared-adjudication.mjs`.** A "cleared" disposition silences the QC gate's C6 HOLD and lets an outlier-flagged cell render firm. It is valid only if it states why the outlier is immaterial — the cap binds, an artifact was excluded, a unit error was corrected, the tail was re-verified as real market variation — and that reason still holds. The load-bearing check catches a clearing that launders another claim: "cleared: superseded by not-material" is valid only if the not-material claim it defers to is itself gated and substantiated.

**No-ML-confirmed — `audit-no-ml-substantiation.mjs`.** A "no regulatory ML exists" finding silences the C1b cap-completeness check. It reconciles each finding against the whole 2,827-row register with whole-word, negation-aware scope matching, so "named vegetable oils" contradicts an oil claim while "oilseeds", "soil improver", and "cereals excluding oils" do not, and colour-additive purity specs (21 CFR 73) and art supplies ("oil pastels") are excluded from the food-ML search. It tiers the verdict: a contradiction from a Method-v2.0 anchor regulator (EU, Codex, FDA, WHO/JECFA, FSANZ, Health Canada) versus a national/regional one (Israel MoH, Vietnam QCVN, Singapore SFA, ...). Both FAIL — the "no ML in any credible jurisdiction" claim is factually wrong either way — but whether a national ML BINDS the standard under Method v2.0 is a governance call the reason names rather than decides.

## Verified verdicts (source-read)

The verification workflow spawned seven agents (≈1.03M tokens) that read the contributing source pages and register rows behind each flag. Independent cross-checks by the parent session on the three highest-stakes findings (the pooling-engine cap defeat, the fish-iAs arsenobetaine, and the cooking-oils-other/Cd clearing) matched the agents exactly.

**The dominant finding is one systemic pooling-engine bug.** Thirteen of the fifteen single-lab-domination FAILs trace to the same defect in `tools/evidence/build-hmtc-aggregate-distributions.mjs`: the `MAX_SOURCE_SHARE = 0.5` cap and its `assertPoolShareCap()` iterate raw `contribution_log` entries rather than source_id-grouped totals, so one paper admitted as multiple strata (a curated row plus an unvalidated `category1_autonomy_extracted_summary.csv` re-extraction of the same table; or one paper's per-species/per-formula sub-rows) evades the 50% ceiling entirely. Confirmed instances: dabeka2011 double-admitted at ~46%+46% across five infant-formula cells; hasan2021 as ghee+butter strata at 40%+40% on butter Pb/Cd; hahn2022 stamped with the whole-study n=58 on each of three seaweed species; winiarska-mieczan2023 duplicated via the autonomy extractor on spices Cd. The fix is two-part and deterministic: (1) group the share cap by source_id before applying the 50% ratio; (2) de-duplicate the autonomy re-extractions against the curated primary rows. Both are logged for the pooling-engine owner; neither is executed here (shared-generator blast radius: re-running regenerates every standard and the QC gate).

**Wrong-analyte on fish inorganic arsenic (2 cells, confirmed).** `fish-freshwater|iAs` (359 ppb) and `fish-marine-predatory|iAs` pool contributors (lehel2024, lehel2023) that measured total As by ICP-OES and then estimated iAs as a fixed 5% of total — an estimation convention, not a speciated measurement (their own Methods say so; frontmatter lists only `tAs`). A firm iAs percentile built on a 5%-of-tAs estimate overstates the toxic fraction. Recommended: withdraw the tAs-only contributors, re-pool on genuine HPLC-ICP-MS speciation already in the corpus (macdonald2025), and demote to provisional / block firm iAs where no primary speciated wet-weight data exists.

**No-ML findings contradicted by loaded national MLs (8/8, register-grounded).** Every current no-ML finding is falsified by a maximum level already loaded in `regulatory_limits.csv` from a national regulator outside the six-body anchor set: Israel MoH FCS 2016 (Cd 30 / tHg 20 for fats-and-oils; tHg 15 for infant-formula powder), Vietnam QCVN 8-2 (tHg 50 / tAs 5000 for spices), Singapore SFA (tAs 1500 for dried herbs and spices). These are grounded findings (citable row IDs), not model recall — the parent session confirmed each against the register. The remediation is to correct each finding to name the regulator, and to record — as a Method-v2.0 governance decision, not a silent edit — whether a national ML binds. Two are toxicologically urgent: `spices|tHg` sits READY at a 1501.6 ppb occurrence P97, ~30× the Vietnam cap of 50, and should be blocked pending pool re-examination.

**Confirmed false positives (2) and partials (1).** `shellfish|tHg` domination is legitimate: garofalo2025 is a ten-year, 5,854-sample Italian regulatory monitoring dataset whose own directly-reported p99 values bracket the pooled P97 — capping it to make room for a tail of single-point 1970s entries would reduce defensibility, not improve it. The value gate should record single-source dependence here, not force a re-pool. The `fsa2016 → infant-formula-powder-soy-based` off-route flag (6 cells) is also a false positive: fsa2016 reports a distinct soy-specific line already resolved at row-fit in `category1_formula_concentration_summary.csv`; the `broad_powder_context` label is a stale frontmatter-only routing artifact, and the fix is to correct the routing audit's `route_kind`, not the value. `infant-formula-powder-non-soy` Cd/tAs is partial: fsa2016 is fine, but chekri2019 should be downgraded to context.

## Reclassifications enacted / logged

- **Enacted this session (register):** `cooking-oils-other/Cd` cleared disposition reversed to HOLD in `standards-outlier-adjudication.csv` — the clearing deferred to a not-material designation absent from the gated registry, the pool is still unit-inflated (p97 56.75 vs measured ≤19 ppb), and Israel MoH regulates Cd in oils. Do NOT add the cell to the gated not-material.csv (that would be a toward-HMTc silencing of a real gap); it is ineligible under Method v2.0.
- **Logged to the outstanding ledger** (`data/evidence/outstanding/ledger.jsonl`): the systemic pooling-engine cap-defeat + autonomy-duplicate dedup (code-fix); the fish-iAs arsenobetaine withdrawals (human-gated, speciation governance); the 8 no-ML corrections + national-ML binding decision (human-gated, Method-v2.0 governance); the broad-context re-pools and the fsa2016 route_kind correction (mostly deterministic).

## Rollout

All three reconcilers run `--warn-only` in `prebuild`, immediately after `build-standards-qc-gate.mjs`. They flip to build-blocking (drop `--warn-only`) per claim type as each FAIL backlog reaches zero, matching the not-material substantiation gate's trajectory. Convenience runners: `npm run lint:claim-reconcilers` (all three, warn-only), or the per-claim `lint:value-substantiation` / `lint:cleared-adjudication` / `lint:no-ml-substantiation`. Each reconciler also exports a verdict map (`valueAuditVerdicts` / `clearedAuditVerdicts` / `noMlAuditVerdicts`) for a later fold-in to the publication QC gate, the same way the not-material substantiation verdict is already consumed there.
