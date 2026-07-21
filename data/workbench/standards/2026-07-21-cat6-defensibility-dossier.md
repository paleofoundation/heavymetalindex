---
op: category-defensibility-dossier
category: 6
name: Seafood
date: 2026-07-21
audience: [staff]
iteration: 1
native_basis: wet weight, as-sold (seaweed row: dry, as-sold)
artifact: data/workbench/standards/cat6-standards-tables.md
adversarial_read: applied 2026-07-21 (independent hostile review)
policy: reconciled-with-adjudication-ledger; needs_review-gated; living DOI'd iteration
---

# Category 6 (Seafood) — defensibility dossier (iteration 1)

Companion to the reconciled, hardened master table (`cat6-standards-tables.md`). It records
per material cell the published disposition, the §1 gate result, and the precise unblock
action for every pending item — after an **independent adversarial read** attacked the table
as a plaintiff's expert and its findings were applied. Honest position: the **cap-bound
Tier-1 core (Pb, Cd, predatory Hg on the four fish/shellfish rows) is defensible now**; the
uncapped/thin cells are held or honestly labeled, none absurd; the seaweed row and a handful
of source-quality items remain on a documented punch-list.

## How the table is reconciled AND hardened (the anchors)

`build-category-standards-tables.mjs` reads the human adjudication ledger and not-material
list through the shared `tools/standards/adjudication.mjs` module (the same ledger the
reconciliation audit reads — they cannot drift). Deterministic rules:

- **withdrawn / not-material → no value** (total-As is arsenobetaine, the wrong fraction).
- **held / hold-provisional / review → "adjudication pending"** — never a firm number.
- **`needs_review` sensitivity band (spread >0.50 across parametric assumptions) → HELD**,
  unless a regulatory cap binds. This is the methodology's own "do not ship" gate; enforcing
  it **restores the finalization memo's holds** on shellfish iAs and seaweed Pb.
- **cap-bound → firm** on the government limit (regulatory-alignment).
- **`distinct_sources ≤ 1` → "single-source"** — a point estimate, not a percentile.
- **degenerate tail (p97 ≈ p90, no real spread) → provisional**, flagged "single-value tail".
- otherwise **firm only if sensitivity-stable AND ≥3 distinct direct sources**; else provisional.

The engine-layer reconciliation audit still reports 8 Cat 6 divergences by design (it measures
raw engine math vs human judgment); the published table *applies* the adjudication, so none
reach a reader. Read-across support (thin-direct cells made defensible by the four-anchor
briefing) is not visible at this table layer — a "provisional"/"single-source" here is a
statement about the *direct pool*, not a verdict that the cell is undefensible.

## Supersession note — resolves the doc-contradiction (adversarial finding A)

The adversary's most dangerous finding: the pre-hardening table (2026-07-21) silently reversed
HOLD decisions in the finalization memo (2026-06-16), and the memo and the same-day ledger
disagreed with each other. **This table supersedes the 2026-06-16 memo, per cell, with reason:**

- **shellfish iAs** — memo HELD; ledger "CLEARED 2026-06-16" (same day). The CLEAR was
  premature (the below-LoQ fera2015 composite is still admitted; the dominant recovered source
  schoof2007 is *general-seafood* basis, not shellfish; sens spread 0.574 = needs_review). The
  needs_review gate now **re-holds it** — the memo's hold stands.
- **seaweed Pb** — memo "review, confirm not tail-driven"; now **HELD** via needs_review
  (spread 0.524, p50 1871→p97 13020). Honored.
- **seaweed Cd** — memo HELD (needs_review); ledger CLEARED (stabilized, 5 dry-weight sources,
  sens stable). This reversal **stands** (the pool is genuinely stabilized) but is **flagged**:
  no cap loaded and the value (1874) is ~3.7× the France CSHPF seaweed guidance → governance
  (load cap + hijiki clean/dirty split).
- **non-pred iAs/tHg/MeHg (200/500/200 → 122/454/175), predatory MeHg (1000→829), freshwater
  MeHg (500→360)** — these differ because the **pools evolved** since the memo (more sources),
  not by silent reversal; the table reflects the current pool. non-pred iAs is now
  provisional/single-value-tail. Documented as pool-evolution.

No same-day HELD/CLEARED contradiction is left standing in the published surface.

## Per-cell disposition ledger (hardened; §1 gate applied)

Caps per EU 2023/915: fish-muscle Pb 300 / Cd 50 / Hg 500 (listed predatory Hg 1000); bivalve
Pb 1500 / Cd 1000. `f` firm · `p` provisional · `ss` single-source · `held`.

| Row | Pb | Cd | iAs | tHg | MeHg | Ni | Al | tAs |
|---|---|---|---|---|---|---|---|---|
| **freshwater** | 300 f | 50 f | 359 p | 500 f | 360 p | — | — | withdrawn |
| **non-predatory** | 300 f | 50 f | 122 p* | 454 f | 175 ss | 324 ss | — | withdrawn |
| **predatory** | 300 f | 50 f | 107 p | 1000 f | 829 f | 147 ss | 11961 ss | withdrawn |
| **shellfish** | 1500 f | 1000 f | **held** | 376 f | 141 p | **held** | — | withdrawn |
| **seaweed** | **held** | 1874 f⚑ | **held** | 63 ss | — | — | — | withdrawn |

`p*` = degenerate single-value tail. `⚑` = firm but governance-flagged. `held`: shellfish iAs
& seaweed Pb (needs_review), shellfish Ni (basis-mixed), seaweed iAs (adjudication). canned-
seafood row omitted entirely (held for dissolution). Cr-VI/Sn: no data on every row.

**Defensible now (concede-and-hold-the-line):** every cap-bound Tier-1 cell — freshwater/
non-pred/predatory **Pb 300, Cd 50, tHg 500/1000**; **shellfish Pb 1500, Cd 1000** — is
`min(pool P97, EU cap)` with the cap binding below a heavy tail, so pool instability is
genuinely immaterial. **Conservative uncapped cells** (predatory MeHg 829, non-pred tHg 454,
shellfish tHg 376) publish *below* their caps — the ratcheting direction. **Withdrawn tAs** on
every row is scientifically correct (arsenobetaine).

## Blocked / pending — the precise path to fully-defensible

| # | Item | Owner | Action |
|---|---|---|---|
| 1 | canned-seafood row | **Karen (gov)** | Dissolve: route Sn→tin platform, MeHg/Cd→matrix-native fish rows |
| 2 | shellfish iAs (held) | source re-read | Re-pool speciated shellfish-only iAs; drop below-LoQ fera2015 composite + general-seafood schoof2007; publish when spread <0.50 |
| 3 | seaweed iAs (held) | source + gov | Species/basis adjudication + hijiki clean/dirty split; **regenerate the stale aggregate** (still shows 4-src p97 1829; real 7-src pool = 69934, needs_review) |
| 4 | shellfish Ni (held) | engine | dry→wet basis conversion in the pool (est. wet p97 ~2200 vs 12189), then re-pool |
| 5 | seaweed Pb (held) | data + gov | Load France/EU seaweed Pb cap (→ cap-bound); tail / clean-dirty check |
| 6 | seaweed Cd (firm⚑) | **Karen (gov)** | Load France/EU seaweed Cd cap; hijiki clean/dirty split |
| 7 | single-source cells (predatory Al, non-pred/predatory Ni, non-pred MeHg, seaweed tHg) | data | Corroborate to ≥3 sources or withdraw; **predatory Al 11961 is a withdrawal candidate** |
| 8 | predatory MeHg 829 (firm) | data | Label/reduce canned-tuna (depaiva2017) dependence; fix harding2018 double-count |
| 9 | edible-seaweed caps | data | Verify + load France CSHPF / EU exact MLs (Pb, Cd, iAs, Hg, Sn) into the crosswalk |
| 10 | canned rows in aggregate | data-hygiene | Retire from `hmtc_aggregate_distributions.csv` (still carry READY-FOR-REVIEW + Codex total-tin cap misuse) so a regen can't resurrect the defective row |
| 11 | iAs speciation provenance | source | Confirm iAs pools are true speciated iAs, not iAs-as-fraction-of-tAs |
| 12 | read-across for iAs | engine | Extend four-anchor automation beyond MeHg so thin iAs cells show feasibility-anchored support |

## §1 fourteen-check gate — Cat 6 result (post-hardening)

**species** PASS (tAs withdrawn; MeHg/iAs distinct; #11 confirms provenance) · **basis** PASS
for fish/shellfish wet rows *except* shellfish Ni now HELD for the dry/wet defect (#4) ·
**percentile** PASS (P97; single-source & degenerate cells relabeled, not passed off as
percentiles) · **cap** PASS (min applied; no value exceeds its ML) · **censoring** relies on
the build-blocking integrity audit; #2 removes the residual below-LoQ admission ·
**sensitivity** PASS (needs_review cells HELD) · **rationale** PASS · **grading** PASS
(hardened) · **completeness** PASS (every cell dispositioned) · **reconciliation** PASS (table
applies the ledger; supersession documented) · **adversarial read** PASS (below) ·
**DOI'd iteration** pending (mint after #1–#6 land or are disclosed).

## Adversarial read (independent hostile review, 2026-07-21) — findings & responses

An independent reviewer attacked the table as a plaintiff's expert. Verdict: the cap-bound
Tier-1 core is defensible; the *pre-hardening* set was not, for (A) the doc contradiction and
(B) a cluster of uncapped absurd/basis-corrupted numbers. Disposition of each must-fix:

1. **Reconcile the two documents** → **DONE** (supersession note above; needs_review gate
   re-holds the reversed cells).
2. **Load France/EU seaweed caps** → **DEFERRED** (#9; but seaweed Pb is HELD by needs_review
   in the meantime, so no absurd value publishes; seaweed Cd flagged).
3. **Fix the wet/dry basis pipeline** → **shellfish Ni HELD** now (#4); freshwater iAs noted;
   the pipeline fix is an engine task.
4. **Enforce the `needs_review` gate** → **DONE** (implemented; catches shellfish iAs 0.574,
   seaweed Pb 0.524).
5. **Suppress single-source / degenerate "P97"s** → **DONE** (relabeled "single-source" /
   "single-value tail"; predatory Al 11961 no longer reads as a firm limit; #7 tracks
   corroborate-or-withdraw).

Net: the process-reproducibility finding and the worst content findings are addressed in the
published surface; the residue (seaweed caps, basis-conversion engine fix, stale-aggregate
regen, canned-row retirement, MeHg source quality) is deferred with named owners. **The
cap-bound Tier-1 core is publishable as iteration-1; nothing absurd or basis-corrupted remains
firm.** Fully-defensible (all 12 punch-list items closed) is the next pass.
