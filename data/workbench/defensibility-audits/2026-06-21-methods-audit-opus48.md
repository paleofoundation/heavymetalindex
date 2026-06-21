---
op: audit
auditor: opus-4.8
date: 2026-06-21
audience: [karen, regulator]
scope: build-wide methods audit — standards statistics, evidence pipeline, synthesis/contamination profiles, lint/governance/drift controls
method: four parallel adversarial code-traces (one per methodological pillar), defensibility lens; reconciled against CLAUDE.md, docs/lint.md, docs/standards-methodology.md, governing-principles.md, and the 2026-06-11 Fable5 audit
read_only: true
---

# Build-wide methods audit (Heavy Metal Index)

This audit traces the **methods** of the build end-to-end — not the content — through the defensibility lens CLAUDE.md Part 1 sets: would each method survive a plaintiff's litigation expert, an FDA reviewer, and a brand QA due-diligence read. Four independent code-traces ran in parallel, one per pillar: (A) statistical standards-setting, (B) the evidence pipeline raw→evidence→routing, (C) synthesis and contamination-profile computation, (D) lint/governance/drift controls. No files were edited.

## The one-sentence finding

The build's **documentation describes a rigorous, enforced, reproducible methodology; the code implements a much weaker, mostly-advisory, mostly-hand-authored version of it** — and the gap is itself the largest defensibility liability, because every place the docs claim a control that the code does not implement is a sworn-statement-versus-exhibit contradiction a hostile expert can exploit.

The four traces converged independently on three systemic patterns:

1. **Non-detects are imputed to zero, biasing every published number downward** — confirmed independently in the standards engine (A‑1) and in 381 live ingredient cells (C‑F2), in the exact direction Part 2 forbids (softening toward HMT&C convenience).
2. **Documented controls are not enforced in code** — the Part‑2 drift check does not exist (D‑F1), the "three-parameter sensitivity analysis" is a no-op (A‑2), claim-provenance only checks a citation is *nearby* not that it *supports the number* (B‑5, D‑F3), and most lint checks the docs call build-blocking are advisory or unwired (B‑4, C‑F11, D‑F5/F6/F7).
3. **The published numbers are not reproducible and their revision history is not reconstructable** — values are hand-typed with no recompute path (C‑F1), and `review_events.jsonl` covers ~38% of valued cells under two incompatible schemas (C‑F5), directly undercutting the "reconstruct what the page said on a date" promise (CLAUDE.md Part 4).

Continuity note: the 2026-06-11 Fable5 audit already recommended adding the silent-threshold-deviation lint and stripping percentile leakage from public pages. Both remain unimplemented (D‑F1, C‑F10). These are not new defects; they are **known defects that the build's own controls cannot detect and therefore do not close.**

---

## Consolidated findings, ranked by defensibility damage

Severity is the cross-examination cost, not the engineering effort. `[A/B/C/D-n]` cites the pillar trace.

### CRITICAL

**C1 — Non-detects substituted with zero, lower-bound only, no upper-bound companion. [A‑1, C‑F2]**
The standards engine consumes `numeric_lower_bound_ppb` where every `<LOD`/`ND`/trace is `0` (`build-hmtc-aggregate-distributions.mjs:648`; uniform "treated as 0" rule across `data/evidence/*samples.csv`). It implements only the lower-bound treatment; WHO/JECFA and EFSA — the authorities the code cites for legitimacy — *require* a paired upper-bound (ND=LOD) estimate, which is never computed. The same artifact appears downstream: 381 ingredient cells carry `typical_ppb: [0, X]` with X>0, and the build-blocking integrity audit only catches the all-zero case (`audit-contamination-profile-integrity.mjs:68-73`), so a censored-zero *lower bound* sails through at `confidence: high`, `n=1` (e.g. `fromage-frais` Pb `[0, 14.8]`). *Attack:* "Your threshold is an artifact of how you imputed missing data, biased low in exactly the direction that lets contaminated product pass, using a method your own cited authorities say is incomplete."

**C2 — The "three-parameter sensitivity analysis" is fabricated. [A‑2]**
`sensitivity()` (`build-hmtc-aggregate-distributions.mjs:474-486`) loops `["lognormal","gamma","nonparametric"]`, stamps `_sensitivity_variant`, then runs the **identical lognormal code path** for all three — the variant label is written and never read; only the RNG seed differs. The `sens_band` (stable/provisional/needs_review) therefore measures Monte-Carlo jitter, not distributional robustness. The briefing tells regulators the values are "recomputed under three parametric assumptions" (`build-standards-briefing.mjs:389,454`). *Attack:* a document making a specific, checkable, false claim about its own methods is a Daubert kill-shot for the whole briefing.

**C3 — No automated Part-2 / silent-threshold-deviation check exists. [D‑F1]**
CLAUDE.md Part 2 calls the wiki↔HMT&C two-direction drift rule "the single most important thing this document asks," and `docs/lint.md:17` lists "Silent threshold deviation" as a lint check. **No code implements it.** There is no comparator that loads a certification value, loads the referenced wiki literature value, and flags an unexplained gap or missing rationale tag. The contamination-integrity audit overclaims (its header says it catches "the exact Part 2 drift") but only detects two occurrence-distribution artifacts in one drift direction. The keystone control is prose discipline plus one narrow artifact detector.

**C4 — Published numbers are not reproducible; revision history is not reconstructable. [C‑F1, C‑F5, A‑11]**
`typical_ppb`/`p95_ppb` are hand-authored YAML for everything outside the one-shot TDS/GEMS backfill (`populate_contamination_profiles.py`, not in the build pipeline, `TODAY` hardcoded). No script re-derives a cell from its contributing sources. `review_events.jsonl` — Part 9's "authoritative resynthesis history" — covers 38% of valued cells under two incompatible schemas (`event` vs `op` keys), and no page carries `last_full_resynthesis`. *Attack:* "Show me the computation behind this number and its revision history" cannot be answered for most cells, directly against the Cochrane-authority thesis.

### HIGH

**H1 — Per-claim provenance is mostly routing metadata, not traced values. [B‑1, B‑2]**
2,783 of 2,876 `direct_evidence` routes have zero value records; `values.jsonl` holds 695 value rows for 1,981 source pages, and of those only 53 carry a `page_number` and 149 a `table_number` (locators mostly live in free-text `quote_trace`). By CLAUDE.md Part 4's own definition ("a PDF is not ingested until it leaves a structured trace"), most "ingested" sources are not ingested. The re-derivability promise holds for a minority of the corpus today.

**H2 — Claim-provenance audit checks citation *presence*, not *correctness*, and never blocks. [B‑5, D‑F3]**
`audit-claim-provenance.mjs` marks a number "supported" if any `[[sources/...]]` link appears in the same section (`:68-80`), reports `supported_pct: 100` over 5,178 claims, and has no `process.exit` (`:228`) so it cannot fail the build. A wrong number beside an unrelated citation passes. The only real check (citation-support sweep) is a manual, unscheduled model sweep. This is the metric a regulatory-affairs reviewer leans on, and it overstates real traceability.

**H3 — Clean/dirty (P97 vs P45) is a hand-typed label with no data check and silent fallthroughs. [A‑6]**
The ~2× choice between P45 and P97 is read from the free-text `variant_type` frontmatter string (`build-hmtc-aggregate-distributions.mjs:540-549`). No code computes the parent-category median the methodology doc requires; the doc's per-analyte clean/dirty rule is not implemented (one label per product across all analytes); and several real label values (`higher-contamination-sibling`, `contaminated-platform`) don't match the substrings the code checks and **silently default to the looser P97**. "Who decided this subcategory is dirty, on what statistical basis?" has no answer in code.

**H4 — Basis conversion is inconsistent, possibly wrong-direction, and its canonical file does not exist. [A‑3, A‑4, C‑F4]**
CLAUDE.md Part 19 says the 1:7 reconstitution factor "lives in `tools/evidence/basis-conversion.mjs`" — **that file does not exist**; the constant is copy-pasted into ≥3 files under two different names. Conversion is applied by string-set membership with no per-source verification: for `infant-formula-powder-non-soy`, 193 `as_sold` rows pass through ×1 while 9 `prepared_for_feeding`/`as_consumed` rows get ×7, pooled into one distribution whose P97 is dimensionally incoherent. Most ingredient cells have no `basis` field at all, and nothing lints that a cell's basis matches its sources'.

**H5 — Step 0 Lock / `provisional_scaffold` does not gate threshold derivation. [D‑F4]**
The pooling engine computes P97/P45 for any cell with loaded evidence without reading `provisional_scaffold`; the flag's only programmatic effect is to *suppress* routing warnings (`audit-routing-discipline.mjs:98,153`). A threshold can be staged from a page whose taxonomy/clean-dirty designation is not governance-locked — the exact premature-derivation the Lock exists to prevent.

**H6 — Total-As / total-Hg thresholds published as if toxicologically meaningful. [A‑7]**
The pipeline emits e.g. marine non-predatory fish `tAs P97 = 83,014 ppb` tagged `literature-baseline` — a P97 of a distribution dominated by non-toxic arsenobetaine, with no flag that the value is non-toxicological, despite the speciation discipline in CLAUDE.md Part 14. An 83,000 ppb "limit" certifies essentially everything and reads as a meaningless number to a competing standards body.

**H7 — Evidence-tier (A/B/C) grading is self-asserted, never validated. [D‑F2]**
`evidence_tier` is only tallied for a dashboard (`build-audit-dashboard.mjs:133-161`). Nothing checks a synthesis claim isn't carried solely by C-tier sources when A-tier exist, or that the label matches the source type. Part 13's grading — central to the positioning — is honor-system frontmatter.

**H8 — Confidence field violates the schema's own rule on 388 cells, three definitions coexist. [C‑F6]**
`page-templates.md:180` defines high = >10 studies; 388 cells violate it (215 `high` at n≤10, e.g. `fromage-frais` Pb `high` at n=1), while `populate_contamination_profiles.py:143` uses a third rule. Nothing lints confidence against `n_studies`. This is the app's uncertainty signal for vulnerable-population decisions, and the inconsistency is itself an attack line.

**H9 — No structural defense against double-counting or bad values reaching synthesis/standards. [B‑7, B‑8, C‑F7]**
DOI/SHA dedup is detection-only and unwired (`dedup-doi-clusters.mjs` manual; `audit-doi-collisions.mjs --warn-only`); `values.jsonl` already has 77 keys appearing more than once. `validate-extraction-rows.mjs` hard-codes only `category6`/`category7` and runs only on a standards command, not prebuild. The Part 9 doubling trigger fires from no automated signal — `cells-needing-synthesis.csv` has no generator and is stale, showing fish/tHg at routing n=70 vs synthesized n=20. Duplicate papers and impossible values can reach `n_studies` and percentile pooling unchecked.

### MEDIUM

**M1 — Public ingredient pages render the staff-only `p95` column (Part 19 firewall breach). [C‑F10]**
`build-ingredient-contamination-tables.mjs:42` and `sweep-ingredient-coverage.mjs:147` emit a `p95 (ppb)` column; the former runs `--apply` in prebuild. Part 19 and `page-templates.md:219` say p95 does not surface publicly. This is the same firewall leak Fable5 flagged on 2026-06-11 (their Finding 3/7), still live.

**M2 — Documented build-blocking lint is mostly advisory or unwired. [B‑4, C‑F11, D‑F5/F6/F7]**
Of the Part 18 / lint.md:68 family that "block builds," only `build-routing-audit.mjs` (missing-cite_key) and `audit-contamination-profile-integrity.mjs` actually gate prebuild. `routing_unresolved` non-empty, audit staleness (unimplemented — no mtime check anywhere), orphaned-reference, routing-discipline (`--warn-only`), index-fanning (no `--strict`), mandatory-sections (not in prebuild), coverage, contradictions, and stale-claims are report-only, daemon-only under `|| true`, or absent.

**M3 — Watcher not wired into `serve`; routing-drift window wider than documented. [B‑3]**
CLAUDE.md Part 5b and `watch-sources.mjs:7` say the chokidar watcher "runs as part of `npm run serve`"; `package.json:24` `serve` does not invoke it. Drift the doc claims is caught "within seconds" is only caught at pre-commit/prebuild.

**M4 — Contradiction detector compares against the wrong baseline and never reaches ingredient cells. [C‑F9]**
`build-synthesis-contradictions.mjs` flags `values.jsonl` records against their *own cohort* median (mislabeled `synthesis_typical_high`, `:142`), not against the page synthesis value (the Part 9 2× trigger). It keys on product slugs and needs ≥3 records, so the ingredient cells the app consumes get no contradiction watch. A-tier-vs-A-tier arbitration is fully manual.

**M5 — Conversion-factor provenance captured by a side-effecting loop variable. [A‑5]**
`conversion_factor` logged per source (`build-hmtc-aggregate-distributions.mjs:348-365`) holds whichever factor the *last* sample produced. Coincidentally correct today (one basis per source) but fragile, and it is sold to adversarial readers as per-source provenance.

**M6 — Defense dossier asserts defensibility, doesn't test it. [D‑F8]**
`build-defense-dossier.mjs` self-describes as "no pass/fail determination," joins four pre-existing artifacts, and copies `provenance_complete` from the defensibility report without enforcing it — a dossier can be written with `uncited_claims > 0` and embed `provenance_complete: true` the build never validated.

**M7 — Downstream-propagation rule is honor-system. [C‑F8, B‑6]**
Part 9 requires synthesis edits to land downstream in the same commit; nothing enforces it. `synthesis-proposals.md` exists as exactly the unexecuted to-do list Part 9 warns against. The pre-commit wiki-edit barrier proves an edit was *logged*, not that it was faithful to sources, and is bypassable via `WIKI_EDIT_AUDIT_SKIP=1`.

### LOW / NOTE

- **L1 — `raw/` is gitignored with no committed hash-anchored manifest. [B‑10]** Re-derivability cannot be verified in CI; silent raw-file drift would be undetectable (SHA-256 stored only in narrow cases).
- **L2 — Small-n percentiles collapse onto the maximum. [A‑8]** R-7 interpolation means P97 of any n<34 sample is pinned near the single largest value; only an n≥2-source gate exists, none on effective n behind a percentile.
- **L3 — Naive concatenation pooling ignores study heterogeneity / differing LODs. [A‑9]** No stratification by jurisdiction, year, method, or LOD; only a ≤50% relative-share cap. Not the JECFA TDS method the code claims to follow.
- **L4 — Language-judgment + citation-support sweeps are model-delegated with no scheduler. [D‑F9]** Em-dash, inline-bold, undefined-consumer-qualifier, and the highest-value citation-support check all depend on a human remembering to run a sweep.
- **L5 — Published value is sensitive to unrecorded CLI flags. [A‑11]** `--pseudo-sample-cap`, `--bootstrap-iterations` change the number without appearing in the output; the footer records the git commit but not the invocation.
- **L6 — `n_studies` conflates studies, syntheses, and regulatory texts. [C‑F12]** A multi-year survey and a single regulation each count as "1," and the doubling/confidence math rests on that mixed count.

---

## The five things to fix first (highest defensibility return)

1. **Compute a paired upper-bound (ND=LOD) estimate everywhere a lower-bound (ND=0) estimate is published, and fix the integrity audit to catch `typical_ppb: [0, X]`.** Closes C1 — the single cleanest attack — in both the standards engine and the 381 live cells.
2. **Make the sensitivity analysis real or delete the claim.** Either implement actual gamma/nonparametric reconstructions or strip the "three parametric assumptions" language from every briefing. A false methods claim (C2) is worse than no claim.
3. **Build the Part-2 drift comparator (C3) and the citation-support check (H2), and make them block the build.** These are the two controls the whole defensibility argument is sold on; both are currently prose.
4. **Make clean/dirty and basis data-driven and audited (H3, H4):** compute the parent-category median to justify P45 vs P97, fail on `variant_type` values the code can't interpret, create the missing `basis-conversion.mjs` as the single source of truth, and lint cell-basis against source-basis.
5. **Strip the public `p95` column (M1)** and add a deterministic recompute path of record for `typical_ppb`/`p95_ppb` (C4) so the numbers are reproducible and the firewall holds.

## Scope and limits of this audit

This is a code-and-methods trace, not a content audit; it does not re-verify individual concentration values against source PDFs (`raw/` is not in this checkout). "Reproducible" here means "a deterministic computation of record exists," not "the number is wrong." Where a finding says a control is missing, it was searched for by name and by behavior across `tools/` and `package.json`; absence is reported as absence, not as a claim that it can never be added. The four pillar traces were independent and are individually attributable; where two pillars reached the same conclusion from different code paths (C1, the enforcement gap, reproducibility), the corroboration is noted because it is the strongest signal in the audit.
