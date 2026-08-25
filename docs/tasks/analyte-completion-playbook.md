# Analyte-completion playbook (Certification-Readiness Ruling)

Ratified 2026-08-25. This is the per-category procedure for satisfying the
**Certification-Readiness Ruling** (`docs/governance/hmtc-governing-principles.md`
§"Certification-Readiness Ruling"; CLAUDE.md Part 19): **every panel analyte on
every standard must carry a limit-of-record — no empty `control`/`not-material`
null cells.** Worked reference: olive oil (cert `0e6c6d0`, index `8de824930`).

## The rule in one line

Every one of the 11 panel cells (Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Cr-VI, Sn, Al)
resolves to a **firm number**, a **species bounded by its parent total**, or a
**baseline limit-of-record** — never blank. Each carries its true provenance tag;
a read-across is disclosed as a read-across, never as direct governance. Completeness
never licenses fabrication (Part 2 / verify-don't-fabricate).

## Resolution order per empty cell (pick the first that applies)

1. **Government ML for the exact product** → `regulatory-alignment` (the compiler
   already selects this; if a cell is empty it means none exists for the product).
2. **Species bounded by its parent total** — for iAs, MeHg, Cr-VI. If the parent
   total (tAs, tHg, total Cr) carries a value, bound the species to it: it becomes
   `subsumed` (enforced by reflex speciation), which counts as a limit-of-record.
   Config: point the species `read_across.source_id` at the binding parent-total
   register row; the compiler's `reconcileSpeciation` subsumes it. (Cr-VI has no
   automatic reconciliation yet — give it a firm read-across below, kept ≤ total Cr.)
3. **Read-across to the nearest applicable sovereign instrument** on the row's
   native basis → `read-across`, disclosed in the cell `label`. Verify the anchor is
   matrix-appropriate; do not reuse an oil anchor for a menstrual product.
4. **Baseline limit-of-record** — where no ML, no pathway, no occurrence, and no
   analog exist, set a method-LOQ screen ("< LOQ by method X"): a testable number,
   labeled `baseline-screen`, flagged monitor/baseline (not per-lot) where re-testing
   is not meaningful.

## Default anchor library (verify matrix-appropriateness before using)

These are the anchors validated on olive oil for an **ingested plant/food** matrix.
They are a starting point, not a mechanical default — confirm each fits the category's
matrix and that clean product passes / contaminated product fails, then adversarially
verify. All values ppb (µg/kg); all IDs are real rows in
`data/evidence/regulatory_limits.csv`.

| Analyte | Ingested-food anchor | source_id | Notes |
|---|---|---|---|
| iAs | bound by tAs | (parent total) | subsumed when tAs has a value |
| MeHg | bound by tHg | `il_fcs2016_thg_2_fats_oils_and_fat_emulsions_water_in_oil_type_20` or the row's own tHg binding | subsumed; MeHg ≤ tHg by identity |
| Ni | 100 (EU formula-liquid) or matrix-nearest | `eu2024_ni_formula_liquid_100` | fruiting-veg 400 (`eu2024_ni_fruiting_veg_400`) for produce; oilseed rows for seed products |
| Cr (total) | 300 (China GB2762 liquid milk) | `china_gb2762_cr_liquid_milk_300` | only real food total-Cr ML; recheck vs GB2762-2025 after 2026-09-02 |
| Cr-VI | 10 (California drinking-water MCL) | `ca_swrcb_crvi_drinking_water_10` | conservative oral-intake species ceiling; keep ≤ total-Cr |
| Sn | 200000 (EU canned-food inorganic tin) | `eu2023_sn_canned_foods_200000` | tin = packaging-migration pathway |
| Al | 1000 (EU 10/2011 migration limit) | `eu_10_2011_al_sml` | Al = packaging-migration pathway |

**Non-ingested matrices** (cat15 menstrual/intimate, contact products) need different
anchors: Cr-VI → EU toy migration / textile; Sn/Al/Ni → the FCM or textile instrument
that governs skin/mucosal contact. A fully-empty scaffold (all 11 cells blank, e.g.
the cat15 menstrual line) is not a completion job — it needs a real standard derived
from scratch; treat it as such and flag it.

## The pipeline (index → cert → live), from the olive-oil run

1. **Index repo** — edit the category config (`tools/standards/cat<N>-config.json`
   read_across blocks), never hand-edit the generated JSON.
2. Recompile: `node tools/standards/compile-cat<N>.mjs` → verify **0 defects**;
   confirm every panel cell now has a value or a bound.
3. Adversarially verify each new number (nearest-anchor defensible? clean product
   passes / contaminated fails? Cr-VI ≤ total Cr? Daubert?). Use a workflow for a
   whole category the way olive oil did (propose → hostile-refute → consistency).
4. Copy compiled JSONs to cert `data/standards/cat<N>-compiled/`.
5. Cert render: `node tools/build-category-standard-pages.mjs --pages=data/standards/cat<N>-pages.json`
   then `node tools/dedash-content.mjs`, then regenerate exports
   (`build-standards-export.mjs`, `build-standards-finder-context.mjs`).
6. Run the lint battery: `standard-readiness-lint`, `panel-completeness-lint`,
   `panel-coherence-lint`, `method-drift-lint`, `firewall-cert-lint`,
   `claim-discipline-lint`, `dedash-content --check`.
7. Ship to **main** in a worktree off `origin/main` (cert push-to-main = LIVE); do
   not disturb whatever branch the main checkout is parked on.

## Registration (DOI) — the second readiness gate

Analyte-completeness is only gate 1. A category is not certification-ready until its
standards also carry a **production** DataCite DOI (`standard-readiness-lint` REGISTERED
gate) and pass CORRECTED. Production DOIs depend on the DataCite membership being
approved and a live prefix configured (`mint-dois.mjs`, `DATACITE_MODE=live`); the
`10.84435` / `LKPN.SCEVXU` sandbox does not count. Do not present a category as ready
until the readiness manifest says `ready:true`.
