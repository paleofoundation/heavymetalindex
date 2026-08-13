# Category 15 — Feminine Care — derive → audit → verify trail

- Method: HMTc Method v2.0 (government-limit default). Compiler: `tools/standards/compile-cat15.mjs` (self-contained). Config persisted to `tools/standards/cat15-config.json`.
- Version: v1.0 (2026-08-13, initial compilation). Category number 15; 10 subcategories.
- Direction (CLAUDE.md Part 2/19): toward the literature. No cell is softened toward HMTc convenience; no cell is strengthened beyond what a sovereign instrument or a routed source supports.
- Firewall (Part 19): staff / HMTc output only. Everything below lives under `data/workbench/standards/`; nothing is written to `wiki/`.

This is a flagship, high-public-salience category, and the whole build is framed around one fact: the exposure route is the vulvovaginal **mucosa** (and, for internal devices, prolonged internal contact). Vaginal mucosa is markedly more permeable and bioavailable than intact skin. The standard is therefore written on a mucosal basis and never on a dermal or dietary basis.

## Two basis families (never conflated — the Cat-9 rule)

A device content limit and a cosmetic content limit are different instruments in the same native basis (total heavy-metal content of the finished article, as placed on market). Neither is a leachate/migration number. The compiler tags every subcategory `device` or `cosmetic` and records an explicit `native_basis` string on every row.

- **Device forms** — menstrual tampons, pads, cups, discs, period underwear, and the case-by-case "other." Regulated as medical devices for biocompatibility (21 CFR Part 884; EU MDR 2017/745; ISO 10993 leachables), but **no government sets a numeric heavy-metal content limit for the finished device in any jurisdiction.** Every panel cell therefore resolves to a mandatory analytical `control` (test-every-lot + published method + escalation, no invented number) or a substantiated `not-material` determination. There is no `regulatory-alignment` cell on a device row because there is no sovereign device content ML to align to.
- **Cosmetic forms** — feminine wipes, feminine deodorants, douches/irrigation solutions, intimate washes. These *are* cosmetics, so sovereign cosmetic contaminant limits apply. Because the route is mucosal, the standard adopts the sovereign **mucosal-contact** cosmetic tier where a government draws one (see below).

## Materiality — occurrence sets materiality, never the number

Occurrence never sets the HMTc value (Method v2.0). It establishes MATERIALITY, and materiality is what forces a metal to `control` rather than `not-material`. The routed corpus for this category:

- **shearston2024** (*Environment International*, doi:10.1016/j.envint.2024.108849) — 16 metal(loid)s by microwave-acid digestion + ICP-MS across 30 tampons (24 brand/line/absorbency combinations, US/EU/UK). Lead detected in 60/60 subsamples (median 173 µg/kg, max 468); cadmium 60/60 (median 9.63); total arsenic 57/60 (median 2.30); nickel, chromium and mercury also measured (Cr and Hg mostly below detection). Product-as-sold content, not exposure.
- **ica2024** — systematic review confirming Pb/Cd/tAs/tHg/Ni/Cr in vaginal tampons.
- **carlin2020** — Pb/Cd/tHg/Cr/tAs/Ni tampon chemistry.
- **nic-corcrain2025** — Pb and total arsenic leached from tampons, pads, cups and period underwear into simulated vaginal fluid.
- **marcelis2024** — full-panel safety screen across tampons, pads, cups and other intimate products; this is the source that additionally establishes **aluminium and tin** presence (and antimony) across the device forms.
- **ellison2026** — lead mass-balance across menstrual-fluid fractions (exposure/bioavailability evidence, not occurrence): of released lead, ~0.22% (≈0.58 ng) potentially permeates vaginal tissue in the baseline scenario. Cited to keep the presence-vs-dose distinction honest, not to set a value.

Consequence: on every device row the occurrence-/pathway-established metals (Pb, Cd, tAs, tHg, Ni, Cr, Sn, Al) are `control`. Marking any of them `not-material` would be contradicted by a routed source and fail the not-material integrity gate. The **only** device `not-material` cell is methylmercury: no biological methylation pathway exists in a cellulose/polymer article, the surveys measured *total* mercury, and the integrity gate is speciation-aware (tHg does not contradict a MeHg not-material cell).

## DERIVE — the compiled standard (native basis; values in µg/kg)

`ctrl` = mandatory analytical control (no sovereign content ML; no number published). `n/m` = substantiated not-material. Numeric cells are sovereign cosmetic contaminant limits.

| Subcategory | Pb | Cd | tAs | iAs | tHg | MeHg | Ni | Cr | Cr-VI | Sn | Al |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Menstrual tampons (device) | ctrl | ctrl | ctrl | ctrl | ctrl | n/m | ctrl | ctrl | ctrl | ctrl | ctrl |
| Menstrual pads (device) | ctrl | ctrl | ctrl | ctrl | ctrl | n/m | ctrl | ctrl | ctrl | ctrl | ctrl |
| Menstrual cups (device) | ctrl | ctrl | ctrl | ctrl | ctrl | n/m | ctrl | ctrl | ctrl | ctrl | ctrl |
| Menstrual discs (device) | ctrl | ctrl | ctrl | ctrl | ctrl | n/m | ctrl | ctrl | ctrl | ctrl | ctrl |
| Period underwear / reusable garments (device) | ctrl | ctrl | ctrl | ctrl | ctrl | n/m | ctrl | ctrl | ctrl | ctrl | ctrl |
| Feminine wipes/towelettes (cosmetic) | 500 | 100 | 500 | ctrl | 100 | n/m | 10000 | ctrl | ctrl | n/m | ctrl |
| Feminine deodorants (cosmetic) | 500 | 100 | 500 | ctrl | 100 | n/m | 10000 | ctrl | ctrl | n/m | ctrl |
| Douches / vaginal irrigation (cosmetic) | 500 | 100 | 500 | ctrl | 100 | n/m | 10000 | ctrl | ctrl | n/m | ctrl |
| Intimate washes/cleansers (cosmetic) | 500 | 100 | 500 | ctrl | 100 | n/m | 10000 | ctrl | ctrl | n/m | ctrl |
| Other menstrual/intimate products (device) | ctrl | ctrl | ctrl | ctrl | ctrl | n/m | ctrl | ctrl | ctrl | ctrl | ctrl |

## AUDIT — per-cell provenance and basis

Device rows. Every total (Pb, Cd, tAs, tHg, Ni, Cr, Sn, Al) is `control` with a materiality citation to the routed source(s) that report it and a component-sampling reference method. `iAs` and `Cr-VI` are reflex-speciation controls (HPLC-ICP-MS for inorganic arsenic on an elevated total-As screen; IC-ICP-MS EPA 3060A/6800 for Cr(VI) on an elevated total-Cr screen); no jurisdiction sets a content limit for either species in this category. `MeHg` is `not-material`, `basis_class: speciation-bounded`, bounded by the total-mercury control. Discs and period underwear carry an explicit device-class analogy where direct occurrence is thin (discs → cups; underwear → textile-dyeing pathway + internal-device analogy; nic-corcrain2025 still routes Pb/tAs to both).

Cosmetic rows. Lead reads across the sovereign **mucosal-contact** cosmetic tier — German BVL 2017 toothpaste (500 µg/kg) — chosen over the general-cosmetic lead tier (2000) because vaginal mucosa is more permeable than the oral mucosa the toothpaste limit was written for (`read-across`, `de_bvl2017_pb_toothpaste_500`). Cadmium (100), total arsenic (500) and total mercury (100) bind the strictest general-cosmetic value directly (German BVL 2017); for these three the general and mucosal-contact tiers are identical, so no further adjustment applies (`regulatory-alignment`). Nickel binds the only sovereign cosmetic nickel content limit (Korea MFDS 2025, cosmetic products other than eye/color makeup, 10000; `regulatory-alignment`); a known contact sensitizer, additionally held to ALARA post-publication on the mucosal route. `iAs`, total `Cr` and `Cr-VI` are controls (no cosmetic ML); `Al` is a control governing contaminant aluminium (a product with an intentional aluminium active is evaluated separately for that cell); `Sn` is `not-material`, `basis_class: no-migration-pathway` (no tinplate-contact pathway for a bottled/sachet cosmetic; no routed source reports tin in a feminine cosmetic); `MeHg` is `not-material` as on the device rows.

Audit safety-net (the honey-Pb guard). For every cell the compiler scans the register for a stricter same-form government ML that selection could have missed, and for any government hit against a control/not-material cell. Result: **0 same-form defects, 0 informational warnings** across all 110 cells. Device audit scopes match no register row today (no sovereign regulates device content) and become a live safety-net the day one does; cosmetic audit scopes confirm the German BVL and Korea values are the strictest applicable, with the special-form rows (toothpaste as the lead source, make-up, theater/carnival, clay-powder, eye/color makeup) correctly excluded from selection.

Antimony. Sb was measured by marcelis2024 and leaches from PET (antimony-trioxide polycondensation catalyst). It is recorded as a monitored supplementary leachable on the polymer/PET rows (`supplementary_leachables`) but is **outside** the 10-analyte HMTc certification panel. Whether to add Sb to the panel for polymer intimate devices is a Step-0 panel-governance decision, logged to the outstanding-items ledger.

Component testing. Tampons are sampled and tested per component — absorbent core, withdrawal string, overwrap, and the applicator as a distinct component (a plastic applicator additionally screened for tin/antimony/colorant metals). Pads, cups, discs and underwear likewise carry component sampling in their reference methods.

## VERIFY

- Compiler self-verify (closed provenance vocabulary; positive value + named instrument on numeric cells; rationale + no same-form government hit on control/not-material cells; no unresolved `gap`): **0 defects, 0 warnings** across 10 records / 110 cells.
- Not-material integrity gate (`tools/evidence/audit-not-material-integrity.mjs`, occurrence contradiction, speciation-aware): all 10 Cat-15 rows **OK** — no routed source contradicts any of the 14 not-material cells (6 device MeHg + 4 cosmetic × {MeHg, Sn}). Registry synced via `tools/standards/sync-not-material.mjs`.
- Not-material substantiation gate (`audit-not-material-substantiation.mjs`): all Cat-15 rows **PASS** (an initial run correctly rejected `basis_class: no-pathway` for the cosmetic Sn cells; corrected to the valid `no-migration-pathway`).
- Not-material corpus audit (`audit-not-material-corpus.mjs`): no Cat-15 coverage gaps.

## QC gate

The occurrence Publication QC Gate (`build-standards-qc-gate.mjs`) validates occurrence-derived candidate values. Category 15 is a government-limit / control-method category with no occurrence-derived cell, so it is out of that gate's scope (194 PASS, no Cat-15 rows) — the applicable gates are the not-material integrity and substantiation gates above, both clean.

## Notes / next

- Pre-existing (not this build): the standing not-material integrity lint is red on an unrelated backlog of Cr-VI-vs-total-Cr and Sn cells in grains/legumes/nuts/mushrooms (my sync added only Cat-15 rows, all of which pass). Logged, not chased.
- Downstream: cert-side product-category pages and the not-material registry consume these workbench records; the cert briefing on menstrual/intimate-care metals is authored separately in the certification repository.
