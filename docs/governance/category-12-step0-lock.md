# Category 12 — Household Cleaning and Dishwashing — Step 0 Lock

**Locked:** 2026-08-13. **Method:** v2.0 (government-limit default, consumer-chemical form).
**Compiler:** `tools/standards/compile-cat12.mjs` + `tools/standards/cat12-config.json`.
**Derive → audit → verify trail:** `data/workbench/standards/2026-08-13-cat12-household-cleaning-derive-audit-verify.md`.

This lock records the row scope, the basis decision, the exposure-pathway split, and the not-material rules for Category 12 so a later session cannot silently re-derive them.

## Row scope (21 subcategories, taxonomy-driven)

Category 12 locks the 21 subcategories enumerated in `data/taxonomy/hmtc-v2.json` (category n=12, rows 1–21): all-purpose-cleaners, kitchen-countertop-cleaners, bathroom-tub-tile-cleaners, toilet-bowl-cleaners, window-glass-mirror-cleaners, floor-cleaners-hard-surface, floor-finishes-strippers, carpet-cleaners, carpet-spot-removers, degreasers, oven-grill-bbq-cleaners, appliance-cleaners, descalers, dish-soaps-manual, automatic-dishwasher-detergents, rinse-aids, cleaning-wipes-household, drain-maintainers-cleaners, odor-removers-hard-surfaces, household-specialty-cleaners-other, disinfectants-sanitizers.

A brief that says "22 subcategories" is off by one from both the taxonomy and its own enumerated list; the taxonomy governs. A 22nd row would be a taxonomy amendment, not a compile-time invention.

Boundary rules (from the taxonomy): fabric-intended products route to Category 19 (Laundry and Fabric-Contact); dish soaps route here (they contact dishes, not fabric); disinfectants/sanitizers are a distinct EPA-registered-pesticide sub-scope.

## Why Category 12 is not a percentile decision

Household cleaning products are **largely unregulated for heavy-metal content**. The taxonomy's regulatory anchors (EPA Safer Choice, Green Seal GS-8, CA SB 258, NY Household Cleaner Disclosure Act) are ingredient-**disclosure** and eco-labeling regimes, not heavy-metal maximum-level limits. The only credible sovereign that sets heavy-metal limits directly on the product class is China **GB 14930.1-2022** (food-safety standard for detergents that clean food, tableware, and food-contact articles). Method v2.0 is a government-limit lookup; where no sovereign limit exists, the answer is read-across, control, or not-material — **never** an occurrence-derived substitute. The cleaning-product occurrence corpus (zhang2010, ecetoc1992, abulude2007, torres2024) is used only to substantiate not-material claims and to confirm which metals are materially present; it never sets a number.

## Basis is the load-bearing distinction (Method v2.0 adaptation)

**Native basis for every subcategory: total heavy-metal content in the product as placed on the market (mg/kg product).** It is GB 14930.1's own basis and the only basis a rinse-off/wipe product can be tested in.

Food-contact **migration** limits (EU 10/2011) are a different, non-comparable basis (migration into food from a permanent article) and are **never** used as a numeric ceiling here: conflating a migration SML onto a total-content basis is both the forbidden basis-conflation and the honey-Pb over-strict failure mode (a migration Pb limit of 0.01 mg/kg food read as a total-content limit would be 100–1000× too strict and indefensible). Migration limits appear only as exposure-pathway rationale for the dish-contacting rows.

The GB 14930.1 **grouped heavy-metals-as-Pb ceiling (≤1.0 mg/kg)** is a grouped-basis sovereign limit. It is carried **inline** in the config (the same treatment as the Category 9 nickel-release limit that does not fit the register's µg/kg species schema), applied as a **conservative per-species bound** to Pb/Cd/tHg, and never min()'d against species-specific values in another basis. It was deliberately not minted as a species-specific lead register row, preserving the source page's honest determination that it is a grouped class, not a lead ML; it is documented as a grouped ceiling on the GB 14930.1 regulation and source pages.

## Three exposure sub-pathways (locked)

- **A — food-contact-cleaning** (dish-soaps-manual, automatic-dishwasher-detergents, rinse-aids): GB 14930.1 governs (residue-on-dishes ingestion). tAs = Type B species-specific ceiling (5.0 mg/kg); Pb/Cd/tHg bounded by the grouped ceiling (≤1.0 mg/kg). GB 14930.1 Type A (3.0 mg/kg arsenic, direct food-cleaning) is a same-instrument scope sibling for a different use, documented and not selected.
- **B — hard-surface / incidental-dermal** (the 17 other cleaners): no sovereign ML; the toxic panel is read across from the nearest coherent statutory consumer-chemical regime (China NMPA 2015 mandatory cosmetic trace-metal limits), conservative because a cosmetic is prolonged leave-on skin contact and a cleaner is incidental dermal. Kitchen/countertop cleaners and household surface wipes carry a documented food-preparation-surface residue sub-pathway (GB 14930.1 Type B is a relevant conservative reference for it), but their binding basis remains total content with the dermal read-across.
- **C — FIFRA antimicrobial** (disinfectants-sanitizers): EPA-registered antimicrobial pesticides, a distinct testing bucket. Metal-based actives (silver, copper) are declared actives outside the contaminant panel. Same read-across as B, plus Sn = control (organotin biocide screen, REACH Annex XVII entry 20).

A single coherent statutory read-across regime (NMPA 2015) is used, not a strictest-per-analyte envelope across regimes; the element-wise-max across sources is the forbidden anti-pattern.

## Speciation and not-material rules (why iAs, MeHg, and Sn are not-material here)

A not-material determination is a **rebuttable, evidence-tested** claim (Karen 2026-08-10) recorded in `data/evidence/standards-not-material.csv` and validated by `audit-not-material-substantiation.mjs` (build-blocking):

- **iAs** — speciation-bounded by tAs. No jurisdiction sets an inorganic-arsenic limit for cleaning products; total arsenic bounds the inorganic fraction. Rebutted by a species-specific iAs limit or a routed source speciating iAs (none exists).
- **MeHg** — speciation-bounded by tHg. No formation/migration pathway in a cleaning formulation; total mercury bounds any organomercury fraction. Rebutted by a routed source speciating MeHg (none).
- **Sn** — no-migration-pathway (20 rows). No inorganic-tin source in a cleaning formulation; organotin is a distinct species (REACH entry 20) screened separately. Rebutted by a routed source measuring tin (none; zhang2010's ten-metal panel excludes Sn). **Disinfectants take Sn = control**, not not-material, because a biocidal-organotin pathway is plausible there.

Metals that the occurrence corpus shows are **present** (Pb, Cd, Ni, Cr, Cr-VI — zhang2010, ecetoc1992) are never not-material: they are read-across (Pb/Cd, where a consumer-chemical sovereign analog exists) or control (Ni/Cr-total/Cr-VI, where no sovereign number exists but the metal is material). Aluminium is control because it may be a functional mineral ingredient, so a "no source" claim would be false.

## What waits, and what does not

- **Does not wait:** the 21 subcategories are compiled, QC-clean, and locked at v1.0. The standard publishes on the government-limit-default basis now.
- **Waits (logged, not blocking):** a possible precautionary ratchet from the loose NMPA read-across floors toward stricter guidance (Germany BfR: Pb 2.0, Cd 0.1, tHg 0.1, tAs 0.5 mg/kg) — guidance, not a statutory maximum, so a future-edition precautionary decision, not a government-limit-default value. Post-publication tightening runs through ALARA and the running control bands on the Ni/Al/Cr `control` cells.

## Pending tightening / watch items

- Any jurisdiction that issues a heavy-metal ML for household cleaning products (a real ML in the product's total-content basis) supersedes the corresponding read-across or control cell and should be loaded to the register and re-compiled.
- The EU Detergents Regulation revision and any successor to GB 14930.1 are watch items.

## Change log

- **2026-08-13** — Step 0 lock created; 21 subcategories compiled at v1.0 under Method v2.0 (government-limit default, consumer-chemical form). Forked from the Category 9 compiler; added `grouped` and `control` resolution kinds and 3-pathway template expansion.
