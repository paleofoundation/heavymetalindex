---
op: standards-plan
date: 2026-07-21
audience: [staff]
scope: How the index renders one fully defensible category standard, and how we know it did
inputs:
  - data/workbench/standards/2026-06-16-defensible-standards-status.md
  - data/workbench/standards/2026-06-16-cat6-seafood-finalization.md
  - data/evidence/hmtc_aggregate_distributions_summary.json
  - data/evidence/hmtc_standards_gap_summary.json
  - data/evidence/category-standards-readiness.json
supersedes: none (extends the 2026-06-16 status accounting)
frame: loops → graph → grounded. The anchor is a defensible category standard.
---

# Standards-set execution plan + grounding audit

## §0 — The frame

The index is already a large graph of self-improvement loops: fetch, ingest, extract,
route, pool, synthesize, audit, adjudicate, render. Karen's loops-to-graphs essay names
the failure this architecture is now exposed to. A single loop games its own metric; a
graph of loops fails later and more expensively, **circularly** — audits checking records
against other records, every node green, nothing touching ground. This repo already
contains a live instance of that failure (§3.A) and, encouragingly, a live instance of the
cure (§2, the finalization pass).

This document does two things. It **plans** the pipeline that turns literature into one
category's HMTc standard set, and it **audits that plan** against the only anchor that
matters: can we render a *fully defensible standard for a category* — one that survives a
plaintiff's-expert reading and is reconstructible, cell by cell, back to named source
values. That artifact is the ground-truth test of a properly functioning system. Everything
else in the graph is instrumentation. Instrumentation that cannot produce the anchor is
theater with good attendance.

The governing rule, stated once: **no cell reaches "firm" on the strength of another
generated record. It reaches "firm" only on the strength of source values a hostile reader
can re-derive.** The plan below is built backward from that rule.

## §1 — "Properly executed function," defined so it can be tested

Karen asked us to define proper execution rather than assume it. We define it as a test,
not a feeling. A category standard set is **defensible** — the system functioned — when
every one of the following holds. This is the acceptance gate; it is deliberately strict.

**Per material (row × analyte) cell:**

1. **Provenance / traceable support.** The published value is reconstructible from named
   support a hostile reader can re-derive. That support is **either** a direct pool of
   **≥3 distinct sources**, **or** — where direct data is thin or absent — a documented
   **read-across** (the four-anchor chain: empirical parent-species pool, analytical LOQ
   floor, regulatory exposure framework, inferential matrix chemistry) or explicit priors,
   each anchor independently citable. Thin direct data is **not** a defect; the methodology
   delivers standards from all sources, not from one cell's pool alone. The defect is an
   *unsupported* value: no direct pool **and** no documented read-across **and** no cap.
2. **Species-correct.** iAs is not substituted by tAs; MeHg is not substituted by tHg;
   Cr-VI is not substituted by total Cr. (This is a live failure — see §3.B. Total arsenic
   is arsenobetaine-dominated in seafood and toxicologically meaningless as a limit.)
3. **Basis-correct.** The value is in the row's native basis (powder-as-placed, RTF
   as-consumed, dry-as-sold), with any cross-basis conversion logged, not silent.
4. **Percentile-correct.** Clean/independent = pooled **P97**; dirty = pooled **P45**;
   computed by `build-hmtc-aggregate-distributions.mjs`, never by hand.
5. **Cap-correct.** Final = `min(P97, lowest applicable regulatory cap)` in native basis,
   and the published value **never exceeds the cap** (a rounding bug once did — §3.C).
6. **Tail-adjudicated.** If the pool is bimodal (p97/p50 ≫ 10×, e.g. spices Pb at 8212×),
   the cell is either split clean/dirty with a documented population rationale, or **HELD**
   as "adjudication pending" — never shipped as a single firm number.
7. **Censoring-correct.** Below-LoQ non-detects are left-censored at the reporting limit,
   not coded as literal zero (the artifact that understated 155 cells — §3.D).
8. **Sensitivity-stable.** The P97 does not swing across parametric assumptions
   (log-normal vs gamma). If it does, the cell is graded provisional, not firm.
9. **Rationale-tagged.** One of `literature-baseline`, `regulatory-alignment`,
   `precautionary`, `feasibility-driven`. The literature↔final gap is stated, not hidden.
10. **Honestly graded.** FIRM / THIN-provisional / HELD / BLOCKED is asserted and matches
    the evidence. What is a defect is an *unsupported* value labeled "firm" — one with
    neither an adequate direct pool nor a documented read-across. A thin direct pool carried
    by a sound four-anchor read-across is legitimately firm (tagged `feasibility-driven`).

**Per category:**

11. **Completeness ledger.** Every locked row × priority analyte has a disposition. "No
    data" is a disposition; silence is not.
12. **Engine ↔ adjudication reconciliation.** The generated tables and the human
    finalization **agree**. Any cell the finalization withdrew or held must not read "firm"
    in the generated table. (Today they disagree — §3.A. This is the one currently-broken
    anchor, and closing it is the load-bearing task of this plan.)
13. **Adversarial read on record.** The category has an adversarial-audit pass (the
    plaintiff's-expert simulation) with each attack answered by a manual location, in the
    register that Cat 1's `adversarial-audit.md` established.
14. **DOI'd iteration.** Published as a living, versioned iteration with an update note, so
    the state on any date is reconstructible. Provisional is fine; dishonest is not.

If a category passes 1–14, the system worked, and we know it worked because a hostile
reader can check every step. This is the determinant Karen asked for. It is binary and it
is auditable.

## §2 — Where we actually are (measured, not asserted)

From `hmtc_aggregate_distributions_summary.json` (2026-06-19), **784 cells**:

| Bucket | Cells | Reading |
|---|---:|---|
| READY FOR REVIEW (+ cap applies) | 117 | Poolable now; ~15% |
| PROVISIONAL: single-source | 217 | One *direct* source — many carry a defensible read-across |
| PROVISIONAL: sensitivity / disagreement | 46 | Unstable across assumptions |
| BLOCKED: no usable evidence | 384 | ~49% — but see stranding below |
| BLOCKED: pool inconsistent (mixed units) | 9 | Unit-discipline failure, flagged |

Rationale split: 359 `literature-baseline`, 32 `regulatory-alignment`, **393 `no-data`**.

The 49 **locked material cells** across 8 categories are graded honestly in the 2026-06-16
status doc: **23 FIRM · 12 THIN-provisional · 8 HELD (outlier-tail) · 6 BLOCKED**. Cat 6
Seafood is the most complete (5 of 6 rows publishable as iteration 1). The Cat 1 flagship —
the 383-page manual — is stated internally to "rest on incomplete pools, recovery in
progress," and stays on its published edition until recovered. That honesty is the system's
best feature; it is what a defensible operation looks like from the inside.

**The reframe that changes the plan.** The pool-starvation block of the same summary:
`structured_rows_total: 7224`, `stranded_rows_total: 2369` — **33% of structured evidence
never reaches a pooled cell.** Reasons: `no_metal_species: 1798` (arsenic/mercury data
never disambiguated to iAs/tAs, MeHg/tHg), `unmatched_slug: 374`, `empty_slug: 197`. **568
stranded rows already carry a usable statistic.** One slug defect alone strands 305
rice rows (`grain-based-snacks-rice-status-unspecified`). The P0 action queue's top 27
items are overwhelmingly `extract-local-source-values` — the PDFs are already in `raw/`.

So the honest diagnosis of "not enough data": **the index is data-rich and
aggregation-poor.** Half the empty cells are empty because evidence is stranded upstream on
broken connective tissue — species discipline and slug routing — not because the evidence
is absent. Recovering stranded evidence is a higher-yield lever than fetching new papers,
and it is the lever most of the priority categories actually need.

**Caveat (do not over-read the counts).** A thin or empty *direct* cell is not the same as
an undefensible standard. The briefing layer deliberately supports thin cells by read-across
across all sources (the four-anchor chain, §1.1) — e.g. a thin direct iAs pool for a matrix
is still a defensible limit when parent-analyte, regulatory, analytical-floor, and
matrix-chemistry anchors say the expected value is low. So the raw "217 single-source" and
"393 no-data" counts overstate the coverage gap: many of those cells carry a defensible
read-across value the direct-pool counts don't see. Recovery and read-across are
complementary — recovery *sharpens* a cell, read-across *supports* it when direct data is
genuinely thin. The reconciliation audit (§3.A, §5.A) reads the engine's *direct-pool* layer
and is blind to the briefing read-across, so its "thin/no-data" readings must never be read
as "undefensible"; its valid signal is analyte-validity and adjudication conflicts, which
read-across does not rescue.

## §3 — Past failures, classified (grounding vs topology)

Every failure below is drawn from artifacts in the repo. Each is tagged **[G]** grounding
(numbers detached from source reality) or **[T]** topology (process/coordination), because
the fix differs: grounding failures need an anchor to source; topology failures need an
edge repaired or a gate added.

**A. Engine ↔ adjudication disagreement, unreconciled. [G, load-bearing]**
`cat6-standards-tables.md` (engine output) lists `fish-marine-non-predatory tAs = 83,014
µg/kg` as "firm." `2026-06-16-cat6-seafood-finalization.md` (human pass) *withdrew* tAs as
wrong-analyte. Both files persist; nothing reconciles them. `shellfish iAs` reads firm in
the table, HELD-suspect in the finalization. This is the essay's circular graph in one
repo: the generated node stays green after the grounding node flagged it, and a downstream
reader of the table alone inherits the ungrounded number. **Fix:** the finalization
disposition must write back into the generated artifact (or gate its publication); the two
must be one reconciled surface before a category passes §1.12.

**B. Wrong-analyte substitution. [G]** Total arsenic pooled and published where inorganic
arsenic is the toxic fraction; total mercury for methylmercury. Caught by hand in Cat 6;
`no_metal_species: 1798` in the starvation audit says it is also stranding ~1,800 rows
upstream. **Fix:** species is a hard field at extraction; unspeciated As/Hg routes to a
species-resolution queue, never into a pooled cell as if speciated.

**C. Round-up-above-cap. [G]** The Principle-4 increment ladder rounded cap-bound values
*up*, publishing EU fish-muscle Pb 300 as 500 — a maximum-level violation the engine
emitted and only manual review caught. Now clamped in `build-standards-briefing.mjs`.
**Fix (kept):** a published value is clamped to ≤ its regulatory cap, with a test.

**D. Censored-zero and degenerate upper tail. [G]** Below-LoQ non-detects coded as literal
zero, and collapsed tails (`p95 ≤ typical-max`), understated contamination across a
182-cell / 49-page backlog (155 censored-zero + 27 degenerate). Drained 2026-06-11 by
source-grounded resynthesis with left-censoring at the reporting limit; the integrity audit
is now build-blocking in prebuild. **Fix (kept):** left-censor, and block the build on any
new understating cell.

**E. Mixed-unit pooling. [G]** 9 cells flagged "pool internally inconsistent (p95/p10 >
1e4, likely mixed units)" — wet/dry or mg/kg vs µg/kg pooled together, producing
10,000× spreads. Caught by the engine's own consistency check. **Fix (kept):** the
spread-ratio guard; basis/unit normalization before pooling.

**F. Slug-routing strands evidence. [T]** 571 rows stranded on unmatched/empty slugs (305
on one rice slug). Real values that never reach a cell. **Fix:** the routing layer must
report stranded-with-statistic rows as a work queue (it now does — `stranded_rows_carrying_
a_statistic: 568`), and slug fixes/page creation must drain it.

**G. Unsupported "firm." [T→G]** `canned-seafood` shipped firm cells whose only support was
a single direct source *and* no documented read-across — and the row was structurally
defective besides (HELD for dissolution). The defect is *unsupported* firmness, not thinness
as such: a thin direct pool with a sound four-anchor read-across is defensible (§1.1).
**Fix:** confidence encodes traceable support (direct depth **and/or** documented
read-across); the QC gate fails "firm" only when neither is present.

**H. Agent-written extraction corruption ("Kimi," 2026-05-30). [G]** An ingest agent
produced corrupted extraction rows; recovery required a novelty re-scan and refetch
(`kimi-corruption-*.csv`, `extraction_quarantine.csv`). **Fix:** dual-model extraction with
a disagreement barrier (the continuous-ingest design already specifies this); no
single-model extraction promotes to a pooled value without a second read or a human check.
*(Root-cause detail to confirm against the ingest logs before we rely on this summary.)*

**I. Coordination leaks. [T]** FRANK's `git add -A` rides along into interactive commits
(scoped-commit rule now mandates `git commit -- <files>`); stale canonical-path references
(`/private/tmp/...`) misdirected sessions. **Fix (kept):** scoped commits; canonical path
asserted in OPERATING.md.

The pattern: the grounding failures (A–E, H) are all *the same failure* — a number that
stopped corresponding to a source value, surviving because a downstream loop trusted an
upstream record instead of the source. The topology failures (F, G, I) are *edges that
don't connect or gates that don't gate*. §1's test is designed so none of them can pass
silently again.

## §4 — The plan: the pipeline as a graph with an anchor per stage

The pipeline is drawn as loops so each stage's watcher and anchor are explicit. Read the
right-hand columns as the audit (§5) made concrete.

| Stage (loop) | What it optimizes | Watcher (counter-metric) | Anchor to ground | Artifact |
|---|---|---|---|---|
| **1. Gather** | corpus coverage of the row's market | novelty rate vs dup rate | the source PDF in `raw/` | source page |
| **2. Extract** | rows captured per source | dual-model disagreement | the number reads the same off the PDF | `values.jsonl` |
| **3. Route** | cells fed | stranded-with-statistic count | slug resolves to a real locked row | routing audit |
| **4. Pool** | P97/P45 per cell | sensitivity band + spread-ratio guard | ≥3 distinct sources, native basis | aggregate CSV |
| **5. Adjudicate** | firm cells | tail ratio, species, cap, n-sources | a human read of the pooled sources | finalization doc |
| **6. Render** | published tables | firewall lint (no arithmetic in wiki) | equals the adjudication (§1.12) | standards tables |
| **7. Reconcile** | one honest surface | table = finalization diff = ∅ | the adversarial read survives | DOI'd iteration |

**Throughput plan, in priority order (from §2's measurement, not instinct):**

1. **Recover stranded-with-statistic rows first (568 rows).** Species-resolve the
   `no_metal_species` rows for the target category; fix the top unmatched slugs. This is the
   cheapest path from "no usable evidence" to a poolable cell, because the value already
   exists. Highest yield per unit effort.
2. **Drain the local-extraction backlog (142 rows, 27 P0).** The PDFs are in `raw/`; run
   the local-candidate extractors and promote. No fetching required.
3. **Targeted fetch only for genuine gaps.** After 1–2, the residual "no data" cells are
   the real fetch targets. *This* is where the external fetch repo (SERP + PubMed) earns its
   keep: not a blind bulk crawl, but market- and species-specific queries for named cells —
   e.g., "US-market inorganic arsenic in rice breakfast cereal, sample-level." Fetch is the
   last lever, not the first, for already-scoped categories; it is the *first* lever only
   for a genuinely un-gathered category (Cat 3 cereals is the clearest such case).
4. **Pool → adjudicate → reconcile → render** the category to the §1 gate.

## §5 — The audit of the plan (where it goes circular, and the anchors that stop it)

The plan above will produce a green dashboard well before it produces a defensible
standard, unless the following anchors are enforced. Each is a place the graph can confirm
itself without touching ground.

**A. The reconciliation anchor (the currently-broken one).** Right now "readiness" is
computed by a generator (`build-category-standards-readiness.mjs`) reading other generated
files, and it reports Cat 6 as **6/6 rows ready** while the finalization holds 4+ cells and
recommends dissolving an entire row. Readiness is measuring generator agreement, not
defensibility. **Anchor:** redefine "ready" as *reconciled* — a row is ready only when its
generated table equals its adjudication and no held/withdrawn cell reads firm. Until the
write-back exists, readiness must be treated as "poolable," not "defensible," and the two
words must never be conflated in a status doc again.

**B. The provenance anchor.** A cell can accrete `n_studies` through synthesis passes that
read prior *synthesis records* rather than sources — the incremental-update shortcut. Over
iterations, the number drifts from any PDF. **Anchor:** every FIRM cell carries a
source-value list a reviewer can open; the full-resynthesis trigger (n doubled) re-reads
sources, not summaries; provenance-audit is build-blocking.

**C. The species/basis anchor.** The single largest stranding cause is unspeciated data.
The temptation under deadline is to pool total-As as a proxy. **Anchor:** species and basis
are hard fields; a pooled cell with a species mismatch is a build failure, not a warning.

**D. The traceable-support anchor.** "Firm" must be a function of *support a hostile reader
can re-derive*, not of model confidence — and support is direct-pool depth **and/or** a
documented read-across (§1.1), not distinct-source count alone. **Anchor:** the QC gate fails
firm only when a value has neither an adequate direct pool nor a documented four-anchor
read-across nor a binding cap. A thin direct pool with a sound read-across is firm
(`feasibility-driven`); a value with no traceable support at all is not. This is the honest
version of the earlier "n<3 fails firm" rule, which conflated thin with undefensible — the
correction Karen flagged: read-across across all sources is how the index delivers standards
for genuinely under-studied cells.

**E. The frozen-rules anchor.** The methodology constants (P97/P45, reconstitution factor
7, the regulatory caps, the clamp-to-cap rule) are exactly the rules an optimizer under
pressure would be tempted to loosen to make a category "pass." **Anchor:** these live in the
engine and governance docs, are never tuned per-category to hit a pass rate, and a change to
any of them is a governance event with Karen's sign-off, logged.

**F. The human anchor (what the graph cannot supply).** Two judgments are outside the
machinery and must stay with people: which cells are worth publishing at all, and where a
clean/dirty split reflects a real separable population (turmeric lead-adulteration) versus a
statistical artifact. The plan marks these as Karen-decisions, not model-decisions, and the
adversarial read is the periodic contact with a hostile reality that no internal audit
substitutes for.

The test that the audit itself is honest: **run §1's 14 checks against a category and see if
any fail.** If they all pass on inspection but the category still could not be defended in a
Daubert brief, then §1 is the wrong test and we fix the test — that is the outer loop, and
it is owned by the adversarial read, not by any generator.

## §6 — Proper execution (commands, constraints, division of labor)

**Runtime.** This cloud clone cannot run the pipeline as-is: `node_modules` is a dead
symlink to the Mac canonical and `csv-parse` is absent. Execution happens either after
`npm ci` here (to *demonstrate* a category end-to-end in a branch) or on the canonical
(`~/Desktop/heavy-metal-index/`) where FRANK and the watchers run. The plan assumes the
canonical for production; this branch is for the worked proof.

**The deterministic chain** (already wired as npm scripts):

```
npm run evidence:local-candidates && npm run evidence:local-promote   # drain local extraction
npm run evidence:source-routes                                         # re-route, surface stranded
npm run evidence:standards-gaps                                        # → gap report → POOLING ENGINE
#   (this chain ends in build-hmtc-aggregate-distributions → readiness → standards-tables)
node tools/standards/build-program-manual.mjs --category=<N>           # author the manual
node tools/standards/render-manual-typst.mjs --pdf                     # publication artifact
```

**Division of labor (who owns which loop):**

- *System/daemon (FRANK):* gather, extract, route, pool — the mechanical loops. Runs
  continuously; produces the queues.
- *Model (this session and successors):* species-resolution and slug fixes on the target
  category's stranded rows; local extraction; the adjudication read (tail, species, cap,
  n-sources); the reconciliation write-back; the adversarial read draft.
- *Karen:* the two human anchors (§5.F), the clean/dirty split decisions, the canned-row
  dissolution-style governance calls, and final approval / DOI mint. Per OPERATING.md Part
  4, threshold *values* are hers; the wiki reports the literature baseline only.

**Where the fetch repo plugs in.** Stage 3 of the throughput plan. Its role is *named-cell
gap-filling*: given the residual "no data" cells for the target category after recovery, it
issues market/species-specific queries (SERP for agency datasets and grey literature,
PubMed/NIH for peer-reviewed occurrence studies), returns candidate sources into
`raw/Manual Fetch Discovery/`, and the manual-fetch ingester picks them up. It is a
precision instrument aimed at a gap list, not a bulk crawler — bulk crawling is what
produced the 2,369 stranded rows.

## §7 — The determinant: one category, fully defensible

A single category driven through §1's 14 checks — every material cell reconciled,
species-correct, cap-correct, honestly graded, provenance-traceable, and adversarially
survived — **is** the proof that the system functions. Not the readiness dashboard, not the
gap report trending down, not eight categories marked green. One category that a hostile
expert cannot break. When that exists, the architecture is validated and scale is
repetition; until it exists, every green light is unearned.

The first target should be chosen to *exercise every hard case*, not to be easy. Cat 6
Seafood is the strongest first proof precisely because it already forces species withdrawal,
cap-binding, held-cell honesty, a structural-defect (canned) dissolution, and — above all —
the engine↔adjudication reconciliation that §3.A shows is currently broken. Finishing Cat 6
is mostly *reconciliation and recovery*, not new fetching, and it closes the one anchor that
most threatens every other category. Cat 3 cereals is the complementary proof — the clean
test of the full gather→…→standard loop *including the fetch repo* — and should follow, with
the 305 stranded rice rows recovered before a single new paper is fetched.

## §8 — Open decision for Karen

The pipeline, anchors, and test above are category-independent. The one choice that changes
what executes next is **which category we drive to fully-defensible first**, and **whether to
execute now on this branch or approve the plan and run it on the canonical**. Recommendation:
Cat 6 as the reconciliation/defensibility demonstrator; Cat 3 cereals as the fetch-loop
demonstrator immediately after. Surfaced to Karen in chat.
