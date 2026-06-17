---
op: category-finalization
category: 6
name: Seafood
date: 2026-06-16
audience: [staff]
policy: gated per-subcategory publication (docs/architecture/web-data-architecture.md §6)
---

# Category 6 — Seafood — finalization (iteration 1)

Driven to a defensible, gate-checked state. Every material cell has a disposition; no
published value exceeds a regulatory cap; outliers are adjudicated; suspect cells are held;
the structurally-defective canned row is removed. This is an iteration-1 standard set
(living, DOI-able), not a claim that every cell is firm.

## Per-row dispositions

| Row | Status | Material standards (native basis = wet weight, as-sold) |
|---|---|---|
| **fish-marine-predatory** | **FINALIZED** | Pb 300 · Cd 50 · tHg 1000 (all EU-cap regulatory-alignment) · MeHg 1000 (literature). Hook CLOSED (= EU higher-mercury group; species → Tier 2). |
| **fish-freshwater** | **FINALIZED** | Pb 300 · Cd 50 (caps) · MeHg 500 (literature) · Hg interim-cap 500 (no occurrence yet — disclosed). |
| **fish-marine-non-predatory** | **FINALIZED** | Pb 300 · Cd 50 (caps) · iAs 200 · tHg 500 · MeHg 200 (literature). |
| **shellfish** | **FINALIZED (iAs held)** | Pb 1500 · Cd 1000 (EU bivalve caps). **iAs HELD** (suspect: single below-LoQ source; provisional ceiling ≤11 ppb pending recovery). |
| **seaweed-kelp-foods** | **iAs FINALIZED; tAs/Cd held** | iAs ≈2000 (clean non-hijiki split, firm). **tAs HELD** (red-algae-only pool, brown-algae As not ingested). **Cd HELD** (sensitivity needs_review). Hijiki/Sargassum → separate dirty sub-row (data staged). |
| **canned-seafood** | **HELD — structurally defective** | The freestanding canned row conflates can-driven Sn with fish-driven MeHg (docs/standards-methodology.md canned/tin rule); all cells single-source. **Recommend dissolution** (governance): route Sn to the matrix-native rows as the tin-dirty subcategory; route MeHg/Cd to the matrix-native fish rows. |

## Adjudications applied (recorded in `data/evidence/standards-outlier-adjudication.csv`)

- **Outlier flags CLEARED (cap-immaterial):** `fish-freshwater Pb`, `shellfish Cd` — the
  regulatory cap binds *below* the heavy tail, so the published value is the cap and the
  pooled outlier never reaches the standard.
- **Wrong-analyte tAs WITHDRAWN** on all fish/shellfish/canned rows — total As is
  arsenobetaine-dominated (non-toxic); iAs is the toxic-fraction analyte. No tAs seafood
  standard is published.
- **HELD:** shellfish iAs (suspect), seaweed tAs + Cd (suspect / needs_review), canned-seafood
  Sn/MeHg/Cd (defective row). These render "adjudication pending," never a firm value.

## Program-wide fixes this finalization surfaced (apply beyond Cat 6)

1. **Principle-4 clamp (`build-standards-briefing.mjs`)** — the increment ladder rounded
   *up*, pushing cap-bound values above the cap (EU fish-muscle Pb 300 → published 500, a
   ML violation). Now: a published value is clamped to never exceed its regulatory cap.
2. **Fish-muscle caps mapped** — EU 2023/915 fish-muscle Pb 300 / Cd 50 added to the
   crosswalk for the predatory + non-predatory + freshwater rows (were publishing loose
   literature tails).
3. **CLEARED disposition honored** — the briefing generator now publishes (not holds) a
   flagged cell whose adjudication disposition is CLEARED.

## Gate results (per docs/architecture §6)

- Pairing/hooks: 2 ACTIVE hooks CLOSED with documented rationale (predatory = EU higher-Hg
  group; seaweed iAs = hijiki split). Passive review hooks (freshwater-predatory, oily-vs-
  whitefish, bivalve-vs-crustacean) are Tier-2 deferrals, not blockers.
- Methodology-version: P97/P45 uniform across all seafood rows.
- Per-analyte readiness: needs_review/suspect cells HELD, not shipped.
- Analyte-scope: held cells disclosed per row.
- Completeness ledger: **Seafood — 4 rows fully finalized + seaweed (iAs) ; canned-seafood
  held for dissolution. 5 of 6 rows publishable as iteration 1.**

## What remains for Cat 6

- Recover **shellfish iAs** (speciated, excluding the below-LoQ fera2015 composite).
- Recover **seaweed brown-algae As** (resolves tAs) and **seaweed Cd** sensitivity.
- **Karen decision:** dissolve `canned-seafood` to matrix-native + tin platform (governance).
- Optional: review **seaweed Pb** (literature ≈10,000 ppb, uncapped — confirm not tail-driven).
