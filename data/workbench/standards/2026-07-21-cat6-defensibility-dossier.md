---
op: category-defensibility-dossier
category: 6
name: Seafood
date: 2026-07-21
audience: [staff]
iteration: 1
native_basis: wet weight, as-sold
artifact: data/workbench/standards/cat6-standards-tables.md
policy: reconciled-with-adjudication-ledger; living DOI'd iteration
---

# Category 6 (Seafood) — defensibility dossier (iteration 1)

The companion to the reconciled master table (`cat6-standards-tables.md`). It records, per
material cell, the published disposition, the support behind it, the §1 fourteen-check gate
result, and — for every pending/blocked cell — the *precise* action that unblocks it. The
honest position: five of six rows are publishable as an honestly-graded **iteration-1**
standard set; the sixth (canned-seafood) is held for a governance decision. This is not a
claim that every cell is firm — it is a claim that every cell is *dispositioned* and no
published number is indefensible.

## How this table is reconciled (the anchor)

`build-category-standards-tables.mjs` now reads the human adjudication ledger
(`standards-outlier-adjudication.csv`) and the not-material list via the shared
`tools/standards/adjudication.mjs` module — the same ledger the reconciliation audit reads,
so the two surfaces cannot drift. Rules applied, deterministically:

- **withdrawn / not-material → no value published** (e.g. total-As, arsenobetaine-dominated).
- **held / hold-provisional / review / not-shippable → "adjudication pending"** — never a firm number.
- **cap-bound cell → firm** on the strength of the government limit (regulatory-alignment).
- **literature-only cell → firm only if sensitivity-stable AND ≥3 distinct direct sources**; otherwise provisional.
- Read-across support (thin-direct cells made defensible by the four-anchor briefing chain) is
  **not visible at this table layer** — those feasibility-anchored values live in the per-row
  Standards Briefings. A "provisional" or "no data" here is a statement about the *direct pool*,
  not a verdict that the cell is undefensible.

The engine-layer reconciliation audit still reports **8 Cat 6 divergences by design** — it
measures engine math vs human judgment, and is the register that proves the reconciliation is
*needed*. The published table *applies* the adjudication, so none of those divergences reach a
reader of the table. Table and ledger agree (§1.12 satisfied); the audit going to zero would
require the pooling engine itself to carry adjudication, which is not the architecture.

## Per-cell disposition ledger (§1 gate applied)

Priority analytes (Tier-1 toxics Pb/Cd/iAs/MeHg) first. Caps per the finalization crosswalk
(EU 2023/915): fish-muscle Pb 300 / Cd 50 / Hg 500 (listed predatory Hg 1000); bivalve
Pb 1500 / Cd 1000. `f` = firm, `p` = provisional.

| Row | Analyte | Published | Basis | Gate | Note / unblock |
|---|---|---|---|---|---|
| freshwater | Pb | **300** f | cap (EU 300) | PASS | value = ML; heavy pooled tail immaterial (cap binds) |
| freshwater | Cd | **50** f | cap (EU 50) | PASS | value = ML |
| freshwater | tHg | **500** f | cap (EU 500) | PASS | Hg ML; MeHg is the toxic fraction (below) |
| freshwater | MeHg | **360** p | lit P97 | PASS-prov | no MeHg ML; rests on pool — confirm ≥3-source |
| freshwater | iAs | **359** p | lit P97 | PASS-prov | no ML; thin direct — read-across candidate |
| freshwater | tAs | withdrawn | — | PASS | arsenobetaine; no tAs standard |
| non-predatory | Pb / Cd | **300 / 50** f | caps | PASS | values = ML |
| non-predatory | iAs | **122** f | lit P97, ≥3-src stable | PASS | firm on direct pool — adversarial-check depth |
| non-predatory | tHg | **454** f | lit < 500 cap, stable | PASS | below Hg ML |
| non-predatory | MeHg | **175** p | lit P97 | PASS-prov | confirm pool depth |
| non-predatory | Ni | **324** p | lit P97, no ML | PASS-prov | corroborate |
| predatory | Pb / Cd | **300 / 50** f | caps | PASS | values = ML |
| predatory | tHg | **1000** f | cap (EU predatory 1000) | PASS | listed higher-Hg group |
| predatory | MeHg | **829** f | lit < 1000 cap, stable | PASS | below the predatory Hg ML |
| predatory | iAs | **107** p | lit P97, no ML | PASS-prov | thin direct |
| predatory | Ni | **147** p | lit P97 | PASS-prov | corroborate |
| predatory | Al | **11961** p | lit P97, no ML | WATCH | 12 ppm — plausible (bioaccum.) but uncapped; confirm not tail-driven |
| shellfish | Pb / Cd | **1500 / 1000** f | bivalve caps | PASS | values = ML |
| shellfish | tHg | **376** f | lit < 500 cap, stable | PASS | below ML |
| shellfish | iAs | **109** p | lit P97 | **CONFLICT** | table 109 vs finalization "≤11 ppb". **Unblock:** re-read munoz1999 (n=11) + schoof2007 speciated iAs, wet wt; resolve the 10× gap before firm |
| shellfish | MeHg | **141** p | lit P97 | PASS-prov | confirm depth |
| shellfish | Ni | **12189** p | lit P97, no ML | WATCH | 12 ppm — plausible but uncapped; corroborate |
| seaweed | Cd | **1874** f | lit P97, stable ≥3-src | PASS | dry-weight stabilized (hwang2010 n=426 + almela2002) |
| seaweed | Pb | **13020** p | lit P97, no ML | WATCH | 13 ppm uncapped. **Unblock:** tail-check (single-source? clean/dirty split?) |
| seaweed | iAs | pending | — | HELD | 4→7-source pool unstable (P97 1829→69934). **Unblock:** source-level adjudication — species (iAs not tAs), wet-vs-dry basis, >10× outliers (hijiki/Sargassum dry-wt contamination); split clean (non-hijiki) vs dirty if warranted |
| seaweed | tAs | withdrawn | — | PASS | arsenosugar-dominated; iAs is the regulated analyte |

Cells not listed are honest "no data" (Cr-VI/Sn across the board; Al/Ni where absent). "No
data" is a disposition, not silence: the HMTc mark does not cover an analyte with no evidence.

## Blocked / pending — the precise path to done

1. **canned-seafood row — GOVERNANCE (Karen).** Held for dissolution: the freestanding row
   conflates can-driven Sn with fish-driven MeHg and every cell is single-source (structural
   defect, `docs/standards-methodology.md` canned/tin rule). Decision: dissolve to the
   matrix-native fish rows (route MeHg/Cd) plus the tin platform (route Sn). Not a data
   problem. Until decided, no canned-seafood standard publishes (correctly omitted).
2. **shellfish iAs — SOURCE RE-READ.** Reconcile the table's 109 ppb against the finalization's
   ~≤11 ppb ceiling; the disqualified fera2015 below-LoQ composite must not drive it. Hold at
   provisional until munoz1999/schoof2007 are confirmed speciated + wet-weight.
3. **seaweed iAs — SOURCE ADJUDICATION.** As above; likely a clean(non-hijiki)/dirty(hijiki)
   split — a governance/taxonomy call once the sources are verified.
4. **seaweed Pb, predatory Al, shellfish Ni — TAIL / DEPTH CHECK.** Uncapped high literature
   values; plausible for bioaccumulators but must be confirmed not single-source/tail-driven
   and corroborated to ≥3 sources before any move from provisional to firm.
5. **iAs / MeHg no-cap cells — READ-ACROSS SURFACING.** These rest entirely on the direct pool
   at this layer. Extending the four-anchor read-across automation to iAs (today it is
   MeHg-only) would let genuinely thin cells show their feasibility-anchored support instead of
   provisional/no-data — the honest fix for the apparent thinness, not more fetching.

## §1 fourteen-check gate — Cat 6 result

Per-cell (1–10): **species** PASS (all tAs withdrawn; MeHg/iAs kept distinct); **basis** PASS
(wet-weight as-sold native); **percentile** PASS (P97); **cap** PASS (min applied, no value
exceeds its ML — the round-up bug is fixed); **censoring** relies on the build-blocking
integrity audit; **rationale** PASS (every published cell tagged); **grading** PASS
(corrected — firm = cap-bound or ≥3-source-stable); **tail** partial (seaweed Pb + iAs flagged
/ held). Per-category (11–14): **completeness** PASS (every cell dispositioned);
**reconciliation** PASS (table applies the ledger); **adversarial read** — see below;
**DOI'd iteration** pending (mint iteration-1 after items 1–4 land or are disclosed).

**Verdict:** publishable as an honestly-graded **iteration-1** Cat 6 standard set once the
adversarial read (below) is clean and items 1–4 are either resolved or disclosed as pending.
No cell is indefensible; the pending cells are held, not faked.

## Adversarial read (independent hostile review)

_Pending — an independent reviewer is attacking the table as a plaintiff's expert; findings
fold in here, and any cell judged VULNERABLE moves to pending or gets a documented rebuttal
before iteration-1 is minted._
