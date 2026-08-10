# Cat 31 / 32 / 33 manual-readiness reconciliation (2026-08-10)

_Workbench evidence document. Not public. Firewall: this file contains percentile
arithmetic and threshold candidates and therefore lives under `data/workbench/`,
never on the index domain (CLAUDE.md Part 2 / Part 19)._

## UPDATE — cap-mapping executed (same session, post-audit reversal)

The body below is the pre-mapping analysis. After an adversarial self-audit
(prompted by Karen), two of my cautions were falsified: (1) the occurrence
pooler is **deterministic** (a no-change re-run is byte-identical), so re-pooling
has no blast radius; (2) binding the **strictest-loaded** sovereign ML can only
move a value *tighter* (the ratchet/safe direction), and non-canonical binding is
already **live precedent** (the cephalopod mercury standard binds India/Paraguay/
Guyana). Deferring the *mapping* was therefore over-caution, not defensibility.

**Executed:** mapped the strictest-loaded sovereign ML ladders into
`product_regulatory_crosswalk.csv`, regenerated gap-report → pooler → QC gate.
Result:

| Cell | Before | After |
|---|---|---|
| honey Pb | firm literature-baseline **1410 ppb** (14× sovereign) | **100** regulatory-alignment PASS (IL/EU) |
| honey Cd | WARN no-cap 89.5 | **89.5** literature-baseline PASS (cap 100 verified, occ binds) |
| honey tAs | WARN no-cap 63.7 | **63.7** literature-baseline PASS (cap 300 verified) |
| honey Al | literature-baseline **151964 ppb** artifact | **NOT_MATERIAL** (registry) |
| chocolate Pb | WARN no-cap 2113 (pending) | **200** regulatory-alignment PASS (PY low-cocoa) |
| chocolate tAs | WARN no-cap 344 | **200** regulatory-alignment PASS |
| chocolate Ni | **HOLD** C9 artifact 7455 | **2500** regulatory-alignment PASS (EU 2024/1987, law-split) |

**Cat 31 (honey) and Cat 33 (chocolate) are now genuinely MANUAL-READY** — the
QC-aware readiness monitor confirms all priority cells resolved AND QC-clean.
honey Ni stays a non-blocking DEMOTE (provisional, n=45, no gov ML). Ledger items
OI-20260810-{cat31-32-33-cap-mapping, chocolate-ni-eu-2024-1987-map,
honey-al-not-material} marked **done**.

**Robustness follow-up (open):** no EU/Codex honey-Pb or chocolate-Pb/tAs ML is
*loaded* in the register (only non-canonical are). The values bound are the
strictest loaded and can only be too-tight, never too-loose — but fetching the
canonical EU/Codex limits would let a future pass confirm nothing stricter exists
and re-cite to a canonical source. Tracked in the cap-mapping ledger note.

**Vinegar (Cat 32) remains NOT ready** — its blocker is data-quality (Pb in the
adjudication/suspect register, tAs at n=26), not cap-mapping; deferred to
OI-20260810-vinegar-pool-recovery.

---

## TL;DR

The category-standards-readiness monitor flagged **Cat 31 (Sweeteners — honey),
Cat 32 (Condiments — vinegar), and Cat 33 (Cocoa — chocolate) as MANUAL-READY**.
They are **not**. The monitor scored rationale-tag / not-material resolution but
never read the **Publication QC Gate** verdicts, so it green-lit three categories
whose priority Tier-1 toxics are held, artifact-flagged, or — most dangerous —
carry a literature-baseline value with **no mapped government cap**, which under
Method v2.0 is an un-completed government-ML lookup, not a defensible standard.

The single worst instance: **honey lead**. Its occurrence pool P97 is **1,410 ppb**
(n=155, sensitivity stable, 9 distinct sources), and no cap is mapped. Because the
pool is large and stable, `classifyCell` grades it *firm*, so a honey Program
Manual built today would **publish a firm HMTc honey-lead threshold of ~1,500 ppb
— roughly 14× the strictest sovereign limit (Israel / EU honey Pb = 100 ppb)**.
That is a Part 2 (loosening-to-hide-the-gap) + Method v2.0 + "cephalopod-EU300"
class defensibility landmine, in a litigation-facing licensing exhibit.

**Action taken this session:** fixed the readiness monitor to fold in the QC-gate
verdict (the three categories now correctly read NOT MANUAL-READY with named
blockers; genuinely-clean Cat 3 stays ready; shipped categories read BUILT with
documented caveats). **No Cat 31/32/33 manual was built** — building any of them
now ships either an indefensible firm value (honey Pb) or a manual whose flagship
toxic reads "adjudication pending" (chocolate lead), neither of which advances the
program defensibly. The real unblock is cap-mapping + pool recovery, routed to the
ledger below.

## Why the readiness signal was wrong

`tools/evidence/lib/standards-readiness.mjs → classifyCell` intentionally treats a
small-n literature-baseline cell as *provisional-but-shippable* (the butter /
seafood "ship with a label" pattern). That is fine on its own. The defect was that
the **category** monitor never cross-checked the Publication QC Gate
(`data/evidence/standards-qc-gate-report.csv`), so a priority cell that the gate
HOLDs, or a big-4 toxic the gate WARNs as "no mapped cap" (C1b), still counted as
"resolved." Fixed in `build-category-standards-readiness.mjs` (2026-08-10): a
priority cell now blocks manual-readiness when the gate verdict is **HOLD**, or
when it is a **big-4 toxic (Pb/Cd/iAs/tAs/MeHg/tHg) with a literature-baseline
value and no mapped cap** (C1b — the Method v2.0 government-ML lookup that must be
completed before publication). DEMOTE (small-n provisional) alone does **not**
block; that remains shippable-with-a-label.

## Per-category, per-priority-cell state

Values below are pooled P97 candidates from `hmtc_aggregate_distributions.csv`
(2026-08-08) and verdicts from `standards-qc-gate-report.csv` (regenerated
2026-08-10). Government MLs are from `data/evidence/regulatory_limits.csv`.
**Canonical regulators** (per Method v2.0) = EU, Codex, FDA, WHO/JECFA, FSANZ,
Health Canada. Everything else (Paraguay, Mercosur, Israel, Singapore, Mexico,
Uruguay, Vietnam) is a **non-canonical** limit whose binding is a target-market /
regulatory-equivalence judgment, i.e. counsel-gated.

### Cat 33 — Chocolate (priority: Cd, Pb, tAs) — NOT READY (2 blockers)

| Analyte | QC verdict | Candidate (ppb) | Cap mapped? | Government MLs available | Unblock |
|---|---|---|---|---|---|
| Cd | **PASS** regulatory-alignment | 100 (capped from P97 3095) | ✅ EU 2023/915 low-cocoa 100 | EU tiered 100/300/800; canonical | none — firm ✅ |
| Pb | WARN no-cap (renders *pending*, sens=needs_review) | 2113 (n=234) | ❌ | **non-canonical only**: PY/Mercosur choc<40% **200**, >40% 400, cocoa-paste 500; SG cocoa-powder 2000; IL cocoa-powder 1000; MX 1000; UY 1000; VN 2000. **No EU/Codex/FDA chocolate Pb ML loaded.** | fetch canonical (EU general-food Pb / Codex) **or** counsel-approve binding PY/Mercosur tier ladder; then map + re-gate |
| tAs | WARN no-cap (n=55, single-source) | 344 | ❌ | non-canonical only: PY/Mercosur choc<40% **200**, >40% 400; SG/IL cocoa-powder 1000; MX 500. No canonical loaded. | same as Pb |
| Ni | **HOLD** (C9 artifact 7455) | 7455 (n=520, dist=2) | ❌ | **CANONICAL**: EU 2024/1987 — milk-choc-low **2500** / chocolate **7000** / cocoa-powder 15000 (law's own split, in force 2025-07-01) | **clean fix** — map EU 2024/1987 (Tier-2 direct-adopt, law's split); kills the artifact → regulatory-alignment 2500/7000. Ni is not a priority metal so it doesn't block, but this is the one unambiguous canonical mapping in the trio. |
| Al | not-material ✅ | 118651 | — | — | none |
| tHg | data gap (n=0) | — | — | IL cocoa-powder tHg 200 (non-canonical) | optional |

**Read:** chocolate is the litigation flagship precisely for **lead**. A chocolate
manual whose lead limit reads "adjudication pending" is not a credible chocolate
standard. The blocker is the missing canonical Pb/tAs ML (fetch) or a counsel
decision to bind the non-canonical PY/Mercosur tiers.

### Cat 31 — Honey (priority: Pb, Cd, Ni, Cr) — NOT READY (2 blockers)

| Analyte | QC verdict | Candidate (ppb) | Cap mapped? | Government MLs available | Unblock |
|---|---|---|---|---|---|
| Pb | WARN no-cap — **but grades *firm* (n=155, stable, 9 src) → would PUBLISH ~1500** | 1410 | ❌ | non-canonical: **IL honey Pb 100**, PY/Mercosur 300, VN 2000. **EU 2023/915 sets honey Pb 0.10 mg/kg = 100 in reality but it is NOT loaded** (fetch gap). | **highest priority** — fetch + map canonical EU honey Pb 100 → binds regulatory-alignment 100, killing the 1410 firm-publish landmine. Also likely a non-target-market pool-composition artifact (P97 1410 implies contaminated/industrial honeys in the pool). |
| Cd | WARN no-cap (n=161, provisional) | 89.5 | ❌ | PY/Mercosur honey Cd 100; VN 1000. Verify EU honey Cd. | map cap; occurrence 89.5 < 100 likely binds (tighter) |
| Ni | DEMOTE (provisional, n=45<99) | 1294 | ❌ | none found | not a blocker (provisional-ship); pool recovery to n≥99 to firm it |
| Cr | resolved (n=40, stable) | 1036 | ❌ | none found | not big-4; occurrence governs |
| tAs (non-priority) | WARN no-cap | 63.7 | ❌ | PY/Mercosur honey tAs 300 | 63.7 < 300, tighter; map for completeness |
| Al (non-priority) | **HOLD** (C9 artifact) | 151964 (152 mg/kg) | ❌ | none | **not-material determination needed** (Al ubiquitous, no honey Al contaminant ML) — same treatment as salt/spices Al |
| tHg (non-priority) | HOLD (n=37 beyond-sample) | 74.7 | ❌ | none | pool recovery |

### Cat 32 — Vinegar (priority: Pb, tAs, Cd) — NOT READY (3 blockers)

| Analyte | QC verdict | Candidate (ppb) | Cap mapped? | Government MLs available | Unblock |
|---|---|---|---|---|---|
| Pb | **HOLD** (C6 in adjudication/suspect register + C1b) | 848 (n=253) | ❌ | VN vinegar Pb 500 only (non-canonical) | resolve the adjudication-register hold (why is vinegar Pb suspect?) + map cap |
| tAs | **HOLD** (C11a n=26 beyond-sample + C1b) | 232 | ❌ | VN vinegar tAs 200 only | occurrence-pool recovery (n) + cap |
| Cd | WARN no-cap (n=158, provisional) | 75.6 | ❌ | VN vinegar Cd 1000 | map cap; occurrence binds |
| tHg (non-priority) | HOLD (n=3) | 1.1 | ❌ | VN vinegar tHg 50 | pool recovery |
| Al (non-priority) | HOLD (n=12) | 4837 | ❌ | none | pool recovery / not-material |

**Read:** vinegar is the weakest of the three. Two of three priority toxics are
HELD, the occurrence pools are thin (Pb in the suspect register; tAs at n=26), and
the *only* loaded government MLs are Vietnam's. It needs genuine occurrence-pool
recovery and adjudication resolution, not just cap-mapping — a later tranche.

## Systemic finding — cap-mapping proposal tool blind spot

`tools/evidence/build-cap-mapping-proposals.mjs` only scans rows classified
`BLOCKED / FETCH_INGEST` (no occurrence data). It therefore **cannot** surface the
class demonstrated here: a cell that *has* occurrence data and produces a
literature-baseline standard **looser than an existing-but-unmapped government ML**
(honey Pb = 1410 vs IL/EU 100). This is the higher-severity class — it publishes a
too-loose firm number rather than merely leaving a gap — and the tool is blind to
it. Extending the scan to occurrence-bearing, literature-baseline, big-4-toxic,
no-mapped-cap cells would systematically prevent the honey-Pb landmine class.

## What was and was not done this session

- **Done:** fixed the readiness monitor (QC-gate-aware); regenerated
  `category-standards-readiness.{md,json}`; refreshed `cap-mapping-proposals.csv`;
  authored this reconciliation; logged the blockers to the outstanding ledger.
- **Deliberately not done:** did not build a Cat 31/32/33 manual; did not
  hand-author non-canonical crosswalk cap rows (counsel-gated regulatory-alignment
  + target-market judgment); did not re-run the full occurrence pooler (blast
  radius + a parallel session is building Cat 3).
