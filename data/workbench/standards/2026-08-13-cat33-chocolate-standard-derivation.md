# HMTc Category 33 — Chocolate, Cocoa and Confectionery — standard derivation & lineage

**Status:** built 2026-08-13. Government-limit standard, HMTc Method v2.0 (government-limit default).
**Firewall (CLAUDE.md Part 19):** the numeric outputs below are STAFF/HMTc content, not public wiki. They live in `data/workbench/standards/cat33-compiled/`, never on heavymetalindex.com.

## What this is

A per-(subcategory × analyte) certification standard for Cat 33, produced by `tools/standards/compile-cat33.mjs` (derive → audit → verify) over `tools/standards/cat33-config.json`. Every published cell is a government-limit **lookup** against the register `data/evidence/regulatory_limits.csv`; occurrence data never selects a number. The full per-cell table, controlling instruments and audit notes are in the generated report:

- `data/workbench/standards/cat33-compiled/_derivation-report.md` (canonical value table)
- `data/workbench/standards/cat33-compiled/{chocolate,confectionery-candy,gummies-jellies}.json` (machine-readable records)

## Subcategories (taxonomy hmtc-v2.json, Cat 33)

1. `chocolate` — cocoa powder, dark, milk, chips
2. `confectionery-candy` — hard candy, caramels, imported/ethnic sweets
3. `gummies-jellies` — gummies and jelly sweets

Panel: 8 totals (Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr) + species controls (iAs, Cr-VI). MeHg is not-material for every row (no marine-bioaccumulation pathway in a dry confection).

## Controlling instruments (why each number is what it is)

- **Cadmium in chocolate — strictest sovereign per form (100 / 200 / 300 µg/kg).** EU Reg. 2023/915 gives the most *granular* cocoa-solids split (milk <30% = 100, <50% = 300, ≥50% = 800, cocoa powder = 600), but it is **not** the strictest for high-cocoa product. MERCOSUR GMC Res. 12/2011 + Paraguay Decreto 1335/2019 cap cadmium at **300 for all ≥40% cocoa** (so dark chocolate and cocoa powder bind 300, not EU's 800/600) and **200 for <40% cocoa**; EU's **100** wins only the very-low-cocoa milk-chocolate bin; FSANZ/Singapore/Israel 500 corroborate (looser). The published Cd form_split is therefore the strictest sovereign per form — **milk chocolate <30% cocoa solids = 100 (EU); <40% cocoa = 200 (MERCOSUR/PY); ≥40% cocoa incl. dark & cocoa powder = 300 (MERCOSUR/PY)** — not the EU values. Adversarial verification caught the original build citing EU 800/600 on this flagship, most litigation-exposed cell; the fix binds the stricter sovereign the standard already relies on for chocolate Pb/tAs. Carried as a `form_split`, never collapsed.
- **Nickel in chocolate** follows the same EU cocoa-solids split (EU Reg. 2024/1987, in force 2025-07-01): milk chocolate <30% = 2500, milk chocolate ≥30% & chocolate = 7000, cocoa powder = 15000 µg/kg. form_split.
- **Lead and total arsenic in chocolate** are unregulated by EU/Codex/FDA; the strictest binding sovereign limit is MERCOSUR GMC Res. 12/2011 (adopted across Argentina/Brazil/Paraguay/Uruguay; Paraguay Decreto 1335/2019 concurs), split by cocoa content (<40% / ≥40%). form_split.
- **Total mercury in chocolate** binds Vietnam QCVN 8-2:2011 (50 µg/kg), the strictest binding sovereign limit for cacao products.
- **Confectionery lead** binds the MERCOSUR GMC 12/2011 + Paraguay binding candy maximum level (100 µg/kg), with the FDA 2006 *Guidance for Industry: Lead in Candy Likely to Be Consumed Frequently by Small Children* (0.1 ppm) as US concurrence (guidance, non-binding). The engine now names the binding ML as the controlling instrument and carries guidance as concurrence. The FDA instrument was added to the register as `fda_candy_pb_guidance_100` during this build.
- **Confectionery / gummy total arsenic** binds the MERCOSUR/Paraguay candy limit (100 µg/kg). Gummies are soft candies, so they bind the candy limits, not the (looser) fruit-jelly-sweet limits.

## Basis / scope traps handled (defensibility)

- 21 CFR 73.x colour-additive purity specs (e.g. "Caramel; food use" Pb 10000) are **additive** specifications, not candy food MLs — excluded by the engine, so confectionery lead is 100, not the caramel-colour 10000.
- Canned/tinplate tin limits (250 mg/kg) apply to cans only — tin is not-material for non-canned chocolate/candy/gummies.
- No occurrence-derived, precautionary-without-basis, or initial-publication ratchet values: unreachable by construction. Allowed provenance tags only: `regulatory-alignment`, `read-across`, `not-material`, `control`.

## Not-material / control substantiation

Not-material determinations are registered in `data/evidence/standards-not-material.csv` and were tested against routed sources by `tools/evidence/audit-not-material-integrity.mjs`. Two chocolate cells were **re-adjudicated from not-material to control** because routed sources had measured the analyte: `chocolate/iAs` (FDA Total Diet Study measured inorganic arsenic) and `chocolate/Cr-VI` (amjad2021 + FDA TDS measured total chromium). They are now reflex-speciation screens bounded by tAs / total Cr. Post-adjudication: **0 Cat 33 contradictions** in the substantiation gate.

## Derive → audit → verify result (2026-08-13)

- Provenance tags: regulatory-alignment = 9, control = 6, not-material = 18.
- Audit: 0 hard defects, 0 gaps, 0 illegal tags, 0 form errors, 0 stricter-unselected warnings.
- Substantiation gate (`audit-not-material-integrity.mjs`): 0 Cat 33 contradictions.
- Publication QC gate (`build-standards-qc-gate.mjs`): exit 0 (gov-limit cells are not occurrence-flagged, as expected for Method v2.0).
- Firewall no-threshold lint: 0 structural errors on these files.

## Independent adversarial verification (2026-08-13)

A fresh-context adversarial verifier re-checked every cell against the register and the actual instruments. Findings applied:
- **BLOCKER — chocolate/Cd (dark ≥50% + cocoa powder):** original build cited EU 800/600; the strictest applicable sovereign is MERCOSUR/PY 300 (same basis) for ≥40% cocoa. Fixed to 300 (and the 30–40% mid-bin to 200 via MERCOSUR <40%). This corrected the category's flagship cell from 2.0–2.7× under-protection.
- **MINOR — confectionery/Pb citation:** was displaying the non-binding FDA guidance as the controlling instrument; the engine now leads with the binding MERCOSUR/PY ML and carries FDA guidance as concurrence.
- **Systemic — audit only compared named ids:** the compiler's stricter-check now scans the *whole register* per form_split cell (not just cited ids), skipping cited instrument pages. A negative-control test confirms it flags the stricter MERCOSUR rows when a loose EU value is deliberately reintroduced. This is the check whose absence let the BLOCKER through.
- Not-material / control determinations, form-split fidelity (EU Cd/Ni structure, MERCOSUR Pb/tAs), and basis/scope-trap exclusions (21 CFR 73 colour additives, canned tin, fresh produce) all verified correct.

## Lineage

- **v1.0 (2026-08-13):** initial government-limit build. Register snapshot: `data/evidence/regulatory_limits.csv` (adds `fda_candy_pb_guidance_100`). Engine: `tools/standards/lib/food-standards-engine.mjs`.
- Supersedes the stalled occurrence-pool attempt at these cells (tracked as ledger item `OI-20260813-cat34-govlimit-supersedes-occurrence-pool`, which covers the Cat 33/34 readiness-path integration).
- Reproduce: `node tools/standards/compile-cat33.mjs` (add `--sync-not-material` to register any new not-material cells).
