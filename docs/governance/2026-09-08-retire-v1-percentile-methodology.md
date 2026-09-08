---
title: "Retirement of the V1 percentile methodology and its calculator"
type: governance-decision
status: ratified
decided_by: Karen Pendergrass
decided_on: 2026-09-08
supersedes:
  - "docs/standards-methodology.md (Method v1.0, ratified 2026-08-03)"
  - "CLAUDE.md Part 19 — the selective occurrence-percentile paragraphs of Method v2.0"
  - "docs/governance/hmtc-governing-principles.md — 'The Locked Standards Math', limit-setting percentile mechanism"
---

# Decision: retire the V1 percentile methodology and its calculator

**Ratified by Karen Pendergrass, 2026-09-08.** Binding, program-wide, effective immediately.

## What is retired

The **V1 limit-setting occurrence-percentile methodology** — the pooling "calculator"
that took a percentile (P10 / P20 / P30 / P45 / P90 / P95 / P97) of a pooled
occurrence distribution to **set** a per-analyte limit — is retired. Specifically:

- The clean/dirty per-analyte percentile uplift (**P97 clean / P45 dirty**, and the
  earlier P10/P20/P30/P90 framings) as a limit-setting rule.
- The **pooling engine** and its pool-admission / moment-matching / sensitivity-band
  machinery, as a source of published limits.
- The **`literature-baseline` rationale tag** (a published value equal to a pooled
  percentile). It is retired; no new cell may carry it.
- Target-market (`--markets`) stratification **as an input to a published percentile**.
- The sample-size gates that only exist to qualify a percentile
  (`minNForPercentile` / `maxSupportablePercentile`, QC-gate C11a/C11b) — moot once no
  limit is percentile-derived.

Method v1.0 as documented in `docs/standards-methodology.md` is **superseded**, not the
live method. That file is retained for the historical and cross-examination record only.

## What is retained (explicitly NOT retired)

- **Method v2.0 — the government-limit default.** Every published limit is the strictest
  applicable government maximum level in the row's native basis; where no government ML
  exists, a **disclosed read-across**, a **species bounded by its parent total**
  (iAs ≤ tAs, MeHg ≤ tHg, Cr-VI ≤ total Cr), or a documented **baseline-screen** / method
  LOQ. Never a computed occurrence percentile.
- **The `precautionary` and `feasibility-driven` staff-judgment tags** (CLAUDE.md Part 19).
  A value set below the government floor is now a documented `precautionary` decision with
  a stated `sovereign_floor`, not a pooled percentile. This is how the program keeps a
  protective number below the law without the retired calculator.
- **The Standards Ratchet trigger** — the **80th percentile of certified Status A lot
  results** (Governing Principles, "Ratchet trigger"). This is a *separate* percentile
  mechanism: it operates *after* publication, on HMTc-internal lot-testing data, to
  *tighten* an existing limit. It is not the limit-setting calculator and is **retained
  unchanged**. (Decision of 2026-09-08: retire only the limit-setting mechanism.)
- **The literature-native display surfaces** — the brand-facing Lab Result Comparator
  (`quartz/components/scripts/productPercentileTool.inline.ts`) and its context builder
  (`tools/evidence/build-percentile-context.ts`) render *reported* concentration ranges
  from cited sources; they do not perform threshold selection and are not the retired
  calculator. Retained.

## Why

1. **Defensibility.** The pooling engine was the one part of the methodology held as a
   trade secret and the natural target of a Daubert / "opaque, unreproducible" attack.
   A government-limit lookup with disclosed derivations is reproducible by anyone with the
   cited instrument in hand. Retiring the calculator removes the attack surface.
2. **No value changes today.** As of the 2026-09-02 completion audit, **zero published
   cells are occurrence-derived** — every live limit is already a government-limit lookup
   or a disclosed derivation. Retirement closes a door; it does not move a number.
3. **Prevent inadvertent use.** The calculator remained wired into the code and named in
   the constitution as a live part of v2.0. A future session could compute a P97 in good
   faith. This decision makes that impossible without a deliberate, audited override.
4. **Protection below the floor is preserved** through the `precautionary` tag and the
   ratchet, which are documented judgment/lot-data mechanisms rather than a contested
   statistical construct.

## Enactment (this change)

**Documentation.** This record is the canonical statement. In addition:

- `CLAUDE.md` Part 19 — "Method v2.0" rewritten to the government-limit / disclosed-
  derivation rule; the selective-occurrence and P97/P45 paragraphs marked retired;
  `literature-baseline` removed from the rationale-tag list.
- `docs/governance/hmtc-governing-principles.md` — "The Locked Standards Math" limit-
  setting percentile subsections banner-marked retired; the ratchet subsection kept;
  version history advanced to 2.8.
- `docs/standards-methodology.md` — top-of-file retirement banner; content kept for the
  record.

**Code (fail-closed, with an audited override `HMTC_ALLOW_RETIRED_V1=1`).** The single
source of truth is `tools/lib/v1-retired.mjs` (`refuseRetiredV1()`). It is called at the
entrypoint of every tool that computes or serves the retired percentile path:

- `tools/evidence/build-hmtc-aggregate-distributions.mjs` — the pooling engine.
- `tools/standards-workbench/server.mjs` — the staff Standards Workbench (where the
  selection arithmetic lives, per Part 19).
- `tools/standards/build-standards-catalog.mjs` — the catalog builder that derived firm
  values from the pooling output; refuses so a retired number can never ship.

Historical occurrence **data** (`data/evidence/hmtc_aggregate_distributions.csv`, the
`category*_summary.csv` corpus, etc.) is left in place, inert. It is evidence and audit
trail, not a live limit source.

## Not done here (follow-ups)

- **The certification repo (`heavymetalcertified`)** carries its own copies of the
  methodology text and tooling and is not on this machine. It needs the same retirement
  applied. Tracked as an open item.
- **The Program Manual and Standards Book** (`data/workbench/program-manual/50-part5-methodology.md`,
  `data/workbench/standards-book/parts/06-methodology-and-appendices/*`,
  and the `standards-book/build/*` volumes) still describe the pooling engine as live.
  They are published references; updating and rebuilding them is a separate pass.
- **Full removal** of the retired code and data (as opposed to fail-closed guarding) is
  deferred; the guards make removal safe to do later without urgency.
- The QC gate (`tools/evidence/build-standards-qc-gate.mjs`) runs in `prebuild` and reads
  the pooling CSV; it is left running (harmless while zero cells are occurrence-derived)
  rather than hard-guarded, so deploys are unaffected. Its percentile-support checks
  (C11a/C11b) pertain to the retired path.
