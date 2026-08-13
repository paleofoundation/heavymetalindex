# Category 25 (Cannabis, Hemp, and CBD Products) — derive / audit / verify

**Started:** 2026-08-13 · **Revised:** 2026-08-14 (`cat25-v1.1`)
**Method:** HMTc Method v2.0 (government-limit default, route-preserving)
**Compiler:** `tools/standards/compile-cat25.mjs` (new; forked from the route-based `compile-cat9.mjs`)
**Config:** `tools/standards/cat25-config.json` (version `cat25-v1.1`)
**Outputs:** `data/workbench/standards/cat25-compiled/*.json` (staff/HMTc content; not public wiki, per CLAUDE.md Part 19)
**Step-0 lock:** `docs/governance/category-25-step0-lock.md`

This document is the audit trail for completing the Category 25 certification standard. It supersedes the earlier five-row compilation produced by the infant-formula food compiler (`compile-cat1.mjs`) against a food-shaped config.

## Scope

Six subcategories are defined by the taxonomy (`data/taxonomy/hmtc-v2.json`, n=25) and the Step-0 lock. The consumable side of every row is compiled; only the vape aerosol-emissions/hardware facet is reserved.

| Row | Slug | Route | Status |
|----:|------|-------|--------|
| 1 | `cannabis-flower` | inhalation | compiled |
| 2 | `cannabis-edibles` | ingestion | compiled |
| 3 | `cannabis-tinctures-oils` | ingestion (oral/sublingual) | compiled |
| 4 | `cannabis-topicals` | dermal | compiled |
| 5 | `cannabis-concentrates` | multi-route | compiled |
| 6a | `cannabis-vape-cartridge-fill` | inhalation (consumable total content) | compiled |
| 6b | `cannabis-vape-hardware` | inhaled aerosol (device emissions) | **RESERVED** |

Row 6 ("Vape cartridges and hardware") is split into its consumable facet — the cartridge fill / vape oil, a finished inhaled cannabis product governed directly by the inhaled-route sovereign limits — which is compiled, and the device/aerosol-emissions facet, which is reserved (see below).

## Method and the route-preservation rule

Cannabis has no uniform federal contaminant limit; its limits are the route-split heavy-metal action levels of six sovereign programs (California DCC 2026, Colorado 2022, Massachusetts 2020, Maryland 2025, Nevada 2020, Israel IMC-GMP 152 2016). The value for each `(row, analyte)` is the strictest (minimum) sovereign maximum **applicable to that row's route** — the route-agnostic all-uses rules (MA all-uses, Nevada, Israel) plus the row's own route-specific rules. Route basis is never conflated: the strict inhaled arsenic/cadmium levels (200 µg/kg) are never applied to an edible or a topical, and the permissive topical lead level (10,000 µg/kg) is never applied to flower. It is a lookup; occurrence never selects a value.

Every stricter cannabis row not selected for a cell is listed by register id in `audit_excluded_ids` with a documented route reason; the compiler's verify pass fails if any stricter-than-published cannabis row is neither selected nor acknowledged.

## Results (staff/HMTc — not for the public index)

All values µg/kg (ppb), product-as-tested (as sold), no reconstitution. Tag in brackets; controlling jurisdiction shown. **Total Cr is a screening ceiling on every row (see chromium note), never a health limit.**

| Row | Pb | Cd | tAs | tHg | total Cr (screen) | Ni / Sn / Al | iAs / MeHg / Cr-VI |
|-----|----|----|-----|-----|-------------------|--------------|--------------------|
| flower (inhaled) | 500 CA | 200 CA | 200 CA | 100 CA | 600 MD | control | control |
| edibles (ingested) | 500 CA | 500 CA | 500 MA | 100 IL | 1,100,000 MD [RA] | control | control |
| tinctures/oils (oral) | 500 CA | 500 CA | 500 MA | 100 IL | 1,100,000 MD | control | control |
| topicals (dermal) | 500 CA | 500 CA | 500 MA | 100 IL | 1,100,000 MD | control | control |
| concentrates (multi) | 500 MA | 500 MA | 500 MA | 100 IL | 600 MD [RA] | control | control |
| vape cartridge fill (inhaled) | 500 CA | 200 CA | 200 CA | 100 CA | 600 MD | control | control |

Pb/Cd/tAs/tHg are `regulatory-alignment` (the strictest applicable sovereign maximum binds). `[RA]` = disclosed read-across. `control` = mandatory total-panel surveillance with no protective sovereign maximum (Ni/Sn/Al everywhere; species controls iAs←tAs, MeHg←tHg, Cr-VI←Cr).

Counts: 30 numeric cells, 36 control cells across the six compiled rows. Verify: **PASS** (every cell resolves to a named sovereign register row or a substantiated control; no unacknowledged stricter limit; provenance vocabulary valid; occurrence selected nothing).

## Chromium: a screening ceiling, not a health limit

Total chromium is dominated by benign Cr(III); the health-relevant species is Cr(VI). Every total-Cr cell therefore records the sovereign number as a **screening ceiling** (`screen: true`), never a health limit, and names Cr(VI) as the binding control: **any quantifiable Cr(VI) fails certification**. The recorded number is Maryland's actual sovereign cannabis total-Cr action level for the route — 600 µg/kg for the inhalation route (a meaningful screen), and 1,100,000 µg/kg for the oral and cutaneous routes (a back-calculation from the USP <232> oral chromium PDE, permissive to the point of being non-protective; no product approaches it). Maryland is the only sovereign cannabis program that sets total Cr; for edibles, which Maryland excludes from both its edible-Cr row (omitted) and its oral row ("except edible products"), the oral value is applied as a disclosed read-across. Recording the number keeps the standard method-faithful and lossless; the `screen` flag and the Cr(VI) hard-fail keep it honest and protective.

(This revises the `cat25-v1.0` decision, which dropped the oral/cutaneous total-Cr number to a bare control. Recording the sovereign value as a labelled non-protective screen is method-faithful, loses no data, and is consistent with how total Cr is treated on the other rows.)

## Corrections against the prior food-compiler compilation

1. **Israel omission (understated mercury protection).** The food compiler did not recognise Israel's route-agnostic scope as applicable to edibles/tinctures/topicals, so those rows published tHg = 400 (Nevada) instead of the stricter tHg = **100 (Israel)**, which correctly binds all ingested/topical rows. Moves toward the stricter regulatory floor (firewall direction: toward the literature).
2. **Chromium framing.** The prior run published total Cr = 1,100,000 µg/kg on the oral/topical rows as if it were a firm limit, with no indication it is a non-protective USP-PDE ceiling and no Cr(VI) control named. It is now a labelled screening ceiling with Cr(VI) hard-fail as the binding control.
3. **Food-compiler shape.** The prior JSONs carried `variants.both`, `per_country`, `converted: true`, and a method string reading "8:1 basis" (the infant-formula reconstitution factor). Cannabis is `as_sold`, no reconstitution; all removed. Records are now flat, route-labelled, provenance-tagged.
4. **Vape under-scoping (`cat25-v1.1`).** The vape row was initially reserved in full. The consumable (cartridge fill / vape oil) is a finished inhaled cannabis product directly governed by the inhaled-route limits, so it is now compiled (`cannabis-vape-cartridge-fill`, identical basis to flower). Only the aerosol-emissions/coil-leaching facet — a different measured quantity — remains reserved.

## Gate status

- **QC gate (`build-standards-qc-gate.mjs`)** operates on the occurrence pipeline; cat25 is register-compiled, so it does not appear there. Its C1 invariant (a published value may never exceed its regulatory cap) holds **by construction**: every published Pb/Cd/tAs/tHg value *is* the strictest applicable sovereign cap. Total-Cr cells are screens, not health limits, so C1 is inapplicable to them.
- **Not-material substantiation gate** applies to `not_material` cells; cat25 uses `control` (surveillance) cells, requiring no substantiation registry entry.
- **Route-conflation guard** is embedded in the compiler's verify pass and returned PASS.
- The `readiness-monitor` and `claim-reconcilers` tools referenced in the kickoff brief live on the divergent `codex/methodology-sync` line, not on origin/main (this work's base); their criteria are met by construction here.

## Version / lineage

- `cat25-v1.1` — 2026-08-14. Total Cr recorded as a labelled screening ceiling on every row (Cr(VI) is the binding control); vape consumable compiled (`cannabis-vape-cartridge-fill`, inhaled-route content), only the aerosol/hardware facet reserved. Version bumped from v1.0 after Karen's review.
- `cat25-v1.0` — 2026-08-13. First dedicated route-based cannabis compiler; five rows; oral/topical total Cr dropped to control; vape fully reserved. Corrected the Israel-omission and removed the food-compiler shape.
- Predecessor (superseded): the 2026-08-12 five-row output on `codex/methodology-sync` (d9fc2f9c9), produced by `compile-cat1.mjs` against the food-shaped config.

## Reserved: cannabis-vape-hardware / aerosol emissions (row 6b)

What remains reserved is metal **release into inhaled aerosol** — coil/heating-element leaching of Pb, Ni, Cr, plus the aerosol behaviour of the heated oil — a different measured quantity (mass emitted per puff or per gram aerosolized) that a µg/kg product-content limit cannot express. The aerosol-emissions test architecture, and whether hardware is factored here per-category or under one shared inhalable-hardware treatment with nicotine vapes, is a reserved governance decision (`taxonomy-reorganization-2026-06.md` §4; `category-25-step0-lock.md`). The consumable it heats is already covered by `cannabis-vape-cartridge-fill`.

## Integration note (surfaced, not silently resolved)

This work is based on **origin/main** (which carries the cannabis register, the Step-0 lock, the taxonomy, and the QC/not-material tooling), not the divergent `codex/methodology-sync` line (which still dispatches cat25 through the food compiler and holds the stale food-shaped config/outputs). When those lines are reconciled, the orchestrator's cat25 dispatch must point at `compile-cat25.mjs` and this config + these outputs supersede the codex line's. Logged to the outstanding-items ledger (`OI-20260813-cat25-orchestrator-dispatch`).
