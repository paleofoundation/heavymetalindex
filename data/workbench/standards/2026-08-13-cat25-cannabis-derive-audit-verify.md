# Category 25 (Cannabis, Hemp, and CBD Products) — derive / audit / verify

**Date:** 2026-08-13
**Method:** HMTc Method v2.0 (government-limit default, route-preserving)
**Compiler:** `tools/standards/compile-cat25.mjs` (new; forked from the route-based `compile-cat9.mjs`)
**Config:** `tools/standards/cat25-config.json` (version `cat25-v1.0`)
**Outputs:** `data/workbench/standards/cat25-compiled/*.json` (staff/HMTc content; not public wiki, per CLAUDE.md Part 19)
**Step-0 lock:** `docs/governance/category-25-step0-lock.md`

This document is the audit trail for completing the Category 25 certification standard. Five of the six locked rows are compiled to firm numeric/control cells; the sixth (vape hardware) is left explicitly reserved. It supersedes the earlier five-row compilation that was produced by running the infant-formula food compiler (`compile-cat1.mjs`) against a food-shaped `cat25-config.json`; see "Corrections against the prior compilation" below.

## Scope

Six subcategories are defined by the taxonomy (`data/taxonomy/hmtc-v2.json`, category n=25) and the Step-0 lock. Five are compiled here; the sixth is reserved.

| Row | Slug | Route | Status |
|----:|------|-------|--------|
| 1 | `cannabis-flower` | inhalation | compiled |
| 2 | `cannabis-edibles` | ingestion | compiled |
| 3 | `cannabis-tinctures-oils` | ingestion (oral/sublingual) | compiled |
| 4 | `cannabis-topicals` | dermal | compiled |
| 5 | `cannabis-concentrates` | multi-route | compiled |
| 6 | `cannabis-vape-hardware` | inhaled aerosol | **RESERVED** |

## Method and the route-preservation rule

Cannabis has no uniform federal contaminant limit. Its limits are the heavy-metal action levels set by individual sovereign cannabis programs, and those programs split their limits by route of use. The register (`data/evidence/regulatory_limits.csv`) holds 55 cannabis action-level rows across six sovereigns:

- **California** (DCC 2026, Section 15723) — splits inhalable vs non-inhalable.
- **Colorado** (MED 2022) — splits inhaled/nasal, oral/rectal/vaginal, topical/transdermal.
- **Massachusetts** (CCC 2020) — a general "all uses" level plus a relaxed "ingestion only" level.
- **Maryland** (MCA 2025, Technical Authority Rev. 6.0) — splits inhalation, oral, cutaneous, edible; the only program that sets a total-chromium value.
- **Nevada** (CCB 2020) — a single route-agnostic level.
- **Israel** (IMC-GMP Procedure 152, 2016) — a single route-agnostic level covering inflorescences and cannabis products.

The compiler value for each `(row, analyte)` is the strictest (minimum) sovereign maximum **applicable to that row's route**. The applicable pool is the route-agnostic all-uses rules (MA all-uses, Nevada, Israel) plus the row's own route-specific rules. The load-bearing rule is that **route basis is never conflated**: the very strict inhaled arsenic/cadmium levels (200 µg/kg) are never applied to an edible or a topical, and the permissive topical lead level (10,000 µg/kg, Colorado) is never applied to flower. This is a lookup, not a computation; occurrence data never selects a value.

Every stricter cannabis row that is not selected for a cell must be listed explicitly (by register id) in that cell's `audit_excluded_ids`, with a documented route reason. The compiler's verify pass scans every cannabis register row for each analyte and fails the build if any stricter-than-published row is neither selected nor acknowledged. This makes route exclusion auditable by unambiguous register id rather than by fragile prose-scope matching.

## Results (staff/HMTc — not for the public index)

All values µg/kg (ppb), product-as-tested (as sold), no reconstitution. Provenance tag in brackets; controlling jurisdiction shown.

| Row | Pb | Cd | tAs | tHg | total Cr | Ni / Sn / Al | iAs / MeHg / Cr-VI |
|-----|----|----|-----|-----|----------|--------------|--------------------|
| flower (inhaled) | 500 [RA] CA | 200 [RA] CA | 200 [RA] CA | 100 [RA] CA | 600 [RA] MD | control | control |
| edibles (ingested) | 500 [RA] CA | 500 [RA] CA | 500 [RA] MA | 100 [RA] IL | control | control | control |
| tinctures/oils (oral) | 500 [RA] CA | 500 [RA] CA | 500 [RA] MA | 100 [RA] IL | control | control | control |
| topicals (dermal) | 500 [RA] CA | 500 [RA] CA | 500 [RA] MA | 100 [RA] IL | control | control | control |
| concentrates (multi) | 500 [RA] MA | 500 [RA] MA | 500 [RA] MA | 100 [RA] IL | 600 [read-across] MD | control | control |

`[RA]` = regulatory-alignment (the strictest applicable sovereign maximum binds). `read-across` = a sovereign value from an analogous route, disclosed. `control` = mandatory total-panel surveillance with no protective sovereign maximum (Ni/Sn/Al everywhere; total-Cr on oral/topical rows), or a species control bounded by its total (iAs←tAs, MeHg←tHg, Cr-VI←Cr).

Counts: 22 numeric cells (all regulatory-alignment except one read-across), 33 control cells, across the five compiled rows. Verify pass: **PASS** (every cell resolves to a named sovereign register row or a substantiated control; no unacknowledged stricter limit; provenance vocabulary valid; occurrence selected nothing).

## Provenance vocabulary

Only the allowed tags appear: `regulatory-alignment`, `read-across`, `control`. `not-material` and `ratchet` are allowed but unused here (cannabis controls are surveillance controls, not not-material determinations, per the Step-0 lock). No retired tags.

## Controlling instruments

Each numeric cell records `controlling_instrument` = the binding row's regulation page:
`regulations/california-dcc-2026-cannabis-heavy-metals-testing`,
`regulations/massachusetts-cannabis-heavy-metal-protocol-2020`,
`regulations/israel-imc-gmp-cannabis-heavy-metal-limits-2016`,
`regulations/maryland-cannabis-heavy-metal-action-limits-2025`.
Each cell also lists the full per-jurisdiction candidate landscape and the jurisdictions concurring at the binding value.

## Corrections against the prior compilation

The earlier five-row output (produced by `compile-cat1.mjs`, the food compiler) carried three problems that this dedicated compiler removes:

1. **Israel omission (understated mercury protection).** The food compiler's scope-string matcher did not recognise Israel's route-agnostic scope ("medical cannabis inflorescences after drying and cannabis products") as applicable to edibles, tinctures, or topicals, so those three rows published tHg = 400 (Nevada) instead of the stricter tHg = **100 (Israel)**. Israel's rule covers cannabis products of all routes and correctly binds all five rows. This edit moves the standard *toward* the stricter literature/regulatory floor (firewall direction: toward the literature — permitted and logged).
2. **Non-protective chromium number.** The food compiler published total Cr = **1,100,000 µg/kg** on the edibles/tinctures/topicals rows as a read-across from Maryland's oral/cutaneous action level. That figure is a back-calculation from the USP <232> oral chromium PDE at an assumed serving mass; it is real but non-protective (no product approaches 1,100 mg/kg Cr) and reads as absurd on a certification standard. Those cells are now **control** (mandatory total-Cr surveillance, Cr(VI) speciation on any anomaly, any quantifiable Cr(VI) fails), with the Maryland value disclosed in the control rationale. The inhaled rows (flower direct, concentrates via route-protective read-across) keep Maryland's protective inhalation total-Cr = 600 µg/kg.
3. **Food-compiler shape.** The prior JSONs carried `variants.both`, `per_country`, `converted: true`, and a method string reading "8:1 basis" (the infant-formula reconstitution factor). Cannabis is `as_sold` with no reconstitution; all of that is removed. The new records are flat, route-labelled, and provenance-tagged.

Both substantive corrections (1 and 2) move the standard toward the more accurate/protective reading of the sovereign literature, which is the permitted firewall direction (CLAUDE.md Part 2); neither softens a claim to suit HMTc convenience.

## Gate status

- **QC gate (`tools/evidence/build-standards-qc-gate.mjs`)** operates on the occurrence pipeline (`hmtc_aggregate_distributions.csv`); cat25 is compiled from the register, so it does not appear there. Its load-bearing invariant — C1, a published value may never exceed its regulatory cap — is satisfied here **by construction**: every published value *is* the strictest applicable sovereign cap, so the value equals its own binding cap and cannot exceed any applicable cap. The compiler's C8-equivalent (rationale honesty) is also satisfied: every cap-binding cell is tagged `regulatory-alignment`.
- **Not-material substantiation gate** applies to `not_material` cells; cat25 uses `control` cells instead (surveillance, per the Step-0 lock), so no substantiation registry entry is required. The `lint:not-material-integrity` pass is unaffected.
- **Route-conflation guard** (the real QC for a route-split government-limit standard) is embedded in the compiler's verify pass and returned PASS.
- The `readiness-monitor` and `claim-reconcilers` tools referenced in the kickoff brief live on the divergent `codex/methodology-sync` line, not on origin/main (this work's base). Their criteria are met by construction for these cells (government-ML lookups + substantiated controls; no occurrence value; no cap exceedance).

## Version / lineage

- `cat25-v1.0` — 2026-08-13. First dedicated route-based cannabis compiler. Five rows compiled (flower, edibles, tinctures/oils, topicals, concentrates); vape hardware reserved. Corrects the Israel-omission and non-protective-chromium defects of the prior food-compiler run and removes the food-compiler shape.
- Predecessor (superseded): the 2026-08-12 five-row output on `codex/methodology-sync` (d9fc2f9c9), produced by `compile-cat1.mjs` against the food-shaped config.

## Reserved: cannabis-vape-hardware (row 6)

Not compiled to a numeric standard, by design. The governing quantity for vape hardware is metal **release into inhaled aerosol** (coil/heating-element leaching of Pb, Ni, Cr), not total product content; a µg/kg content limit would misrepresent the hazard basis. The aerosol-release test architecture — and whether hardware is factored here per-category or under one shared inhalable-hardware treatment with nicotine vapes — is a reserved governance decision for Karen (`docs/governance/taxonomy-reorganization-2026-06.md` §4; `category-25-step0-lock.md`). The reserved record (`cat25-compiled/cannabis-vape-hardware.json`) documents this so the six-row set is complete and the reservation is explicit rather than a silent gap.

## Integration note (surfaced, not silently resolved)

This work is based on **origin/main**, which carries the cannabis register, the Step-0 lock, the taxonomy, and the QC/not-material tooling, but not the divergent `codex/methodology-sync` line's `compile-current-standards.mjs` orchestrator (which currently dispatches cat25 through the food compiler) or its stale `cat25-config.json`/`cat25-compiled` outputs. When those lines are reconciled, the orchestrator's cat25 dispatch must point at `compile-cat25.mjs` (not `compile-cat1.mjs`), and this decontaminated config + these outputs supersede the codex line's. Logged to the outstanding-items ledger.
