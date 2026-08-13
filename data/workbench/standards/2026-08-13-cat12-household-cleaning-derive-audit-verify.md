# Category 12 — Household Cleaning and Dishwashing — derive → audit → verify trail

**Date:** 2026-08-13. **Method:** v2.0 (government-limit default, consumer-chemical form). **Standard version:** 1.0.
**Compiler:** `tools/standards/compile-cat12.mjs` + `tools/standards/cat12-config.json`.
**Compiled output:** `data/workbench/standards/cat12-compiled/*.json` (21 subcategories).
**Step 0 lock:** `docs/governance/category-12-step0-lock.md`.

This is a NON-food category and, unlike Category 9 (contact products), it is **largely unregulated for heavy-metal content**. The taxonomy's regulatory anchors (EPA Safer Choice, Green Seal GS-8, CA SB 258, NY Household Cleaner Disclosure Act) are ingredient-**disclosure** and eco-labeling regimes, not heavy-metal maximum-level limits. Exactly one credible sovereign sets heavy-metal limits directly on the product class: China **GB 14930.1-2022** (National food safety standard — Detergents), which governs detergents that clean food, tableware, and food-contact articles. Because most cells have no sovereign ML, they resolve to **read-across**, **control**, or **not-material** — as Method v2.0 anticipates for an unregulated category, and as instructed for this build. No cell is an occurrence-derived percentile.

## Scope and the subcategory count

The taxonomy (`data/taxonomy/hmtc-v2.json`, category n=12) enumerates **21** subcategories (rows 1–21). The task brief's header said "22 subcategories" but its own enumerated list also contains 21, matching the taxonomy exactly. The taxonomy governs (category directory is taxonomy-driven); **21 subcategories were compiled**. No 22nd subcategory was invented. If a 22nd row is later intended, it is a Step-0 taxonomy amendment, not a compile-time decision.

## Native basis (the load-bearing decision)

**Every Category 12 subcategory's native basis is total heavy-metal content in the product as placed on the market (mg/kg of product).** This is forced by two facts:

1. It is the basis of GB 14930.1 — the only sovereign that directly regulates these products for heavy metals.
2. It is the only basis in which a rinse-off / wipe-off cleaning product can actually be tested: you acid-digest a product sample and measure total metal per kg of product. A "specific migration into food simulant" test (EU 10/2011) does not apply to a rinse-off product — that instrument governs permanent food-contact articles.

Food-contact-**migration** limits (EU 10/2011) are therefore **not** used as numeric ceilings anywhere in this category. Reading a migration SML (e.g. Pb 0.01 mg/kg food) across onto a total-content basis would (a) conflate two non-comparable measured quantities — the exact basis-conflation the Category 9 architecture forbids — and (b) produce an indefensible, unachievable number 100–1000× too strict, the honey-Pb failure mode (a value that would have published 14× the ML, inverted). Migration limits are cited only as the exposure-pathway rationale for the dish-contacting rows.

## Three exposure sub-pathways (never basis-conflated within a row)

| Pathway | Subcategories | Governing logic |
| --- | --- | --- |
| **A — food-contact-cleaning** (3) | dish-soaps-manual, automatic-dishwasher-detergents, rinse-aids | GB 14930.1 directly governs (residue-on-dishes ingestion). tAs binds the Type B species-specific ceiling; Pb/Cd/tHg are bounded by GB 14930.1's grouped heavy-metals ceiling. |
| **B — hard-surface / incidental-dermal** (17) | all-purpose, kitchen/countertop, bathroom/tub/tile, toilet-bowl, window/glass/mirror, floor-cleaners, floor-finishes-strippers, carpet-cleaners, carpet-spot-removers, degreasers, oven/grill/BBQ, appliance, descalers, cleaning-wipes, drain-maintainers, odor-removers, household-specialty-other | No sovereign ML. Toxic panel read across from the nearest coherent statutory consumer-chemical regime (China NMPA 2015 cosmetics), conservative because a cosmetic is prolonged leave-on skin contact and a cleaner is incidental dermal. |
| **C — FIFRA antimicrobial** (1) | disinfectants-sanitizers | EPA-registered antimicrobial pesticides — a distinct testing bucket. Metal-based actives (silver, copper) are declared actives, outside the contaminant panel. Same read-across as B, plus an organotin biocide screen (Sn = control, not not-material). |

## DERIVE — the compiled standard (native basis: total content in product, mg/kg product)

Provenance tally across all **231 cells** (21 subcategories × 11-analyte panel): **12 regulatory-alignment · 72 read-across · 85 control · 62 not-material**. No cell is a pooled percentile; the retired tags (precautionary, feasibility-selected, literature-baseline, occurrence-percentile) do not appear.

### Pathway A — food-contact-cleaning (dish-soaps-manual, automatic-dishwasher-detergents, rinse-aids)

| Analyte | HMTc limit (mg/kg product) | Provenance | Binds |
| --- | ---: | --- | --- |
| Pb | 1.0 | regulatory-alignment | GB 14930.1 grouped heavy-metals-as-Pb ceiling (≤1.0, conservative per-species bound) |
| tAs | 5.0 | regulatory-alignment | GB 14930.1-2022 Type B (tableware / food-contact-article cleaning) |
| Cd | 1.0 | regulatory-alignment | GB 14930.1 grouped heavy-metals-as-Pb ceiling |
| tHg | 1.0 | regulatory-alignment | GB 14930.1 grouped heavy-metals-as-Pb ceiling |
| Ni, Al, Cr-total, Cr-VI | control | control | measured/plausible; no sovereign ML — method + escalation, no number |
| iAs, MeHg, Sn | not material | not-material | speciation-bounded (iAs←tAs, MeHg←tHg) / no-migration-pathway (Sn) |

The stricter GB 14930.1 **Type A** arsenic ceiling (3.0 mg/kg) governs detergents applied directly to food (washing produce), a different use, and is a same-instrument scope sibling — correctly excluded by the audit safety-net as a deliberate scope choice, not a missed stricter limit.

### Pathway B — hard-surface / incidental-dermal (17 subcategories)

| Analyte | HMTc limit (mg/kg product) | Provenance | Binds |
| --- | ---: | --- | --- |
| Pb | 10 | read-across | China NMPA 2015 mandatory cosmetic Pb limit (conservative dermal analog) |
| tAs | 2 | read-across | China NMPA 2015 mandatory cosmetic tAs limit |
| Cd | 5 | read-across | China NMPA 2015 mandatory cosmetic Cd limit |
| tHg | 1 | read-across | China NMPA 2015 mandatory cosmetic tHg limit |
| Ni, Al, Cr-total, Cr-VI | control | control | measured (Ni/Cr/Cr-VI in ecetoc1992, zhang2010) or functional-ingredient plausible (Al); no sovereign ML |
| iAs, MeHg, Sn | not material | not-material | speciation-bounded / no-migration-pathway |

### Pathway C — FIFRA antimicrobial (disinfectants-sanitizers)

Identical to Pathway B for the toxic panel (Pb 10 / tAs 2 / Cd 5 / tHg 1, read-across) and the Ni/Al/Cr controls, with **Sn = control (organotin biocide screen)** rather than not-material, because antimicrobial products are the one sub-scope with a plausible organotin (biocide) pathway (REACH Annex XVII entry 20). FIFRA context: the Confidential Statement of Formula and the antimicrobial active govern registration; metal-based actives are declared actives, outside the contaminant panel; no FIFRA/FDA instrument sets a heavy-metal contaminant maximum.

## AUDIT — per-cell provenance and basis check

Every published number traces to a named source in a stated basis:
- **GB 14930.1 Type B tAs** → `cn_gb14930_2022_detergent_type_b_tas_5000` (register; verified against GB 14930.1-2022 Table 1, `regulations/china-gb14930-1-detergent-arsenic-limits-2022`). Same-instrument Type A (3.0) documented and excluded.
- **GB 14930.1 grouped heavy-metals-as-Pb (≤1.0 mg/kg)** → carried **inline** in the config (like the Category 9 nickel-release limit that does not fit the register's µg/kg species schema), not minted as a species-specific Pb register row, preserving the source page's honest determination that the grouped line is a grouped class and not a lead ML. The grouped ceiling is now documented on the GB 14930.1 regulation and source pages as a grouped ceiling for traceability. Applied as a conservative per-species bound to Pb/Cd/tHg.
- **NMPA 2015 read-across** → `cn_nmpa2015_{pb,tas,cd,thg}_cosmetics_*` (register; China's mandatory Safety and Technical Standards for Cosmetics, 2015). A single coherent statutory regime is read across, not a strictest-per-analyte envelope across regimes (the forbidden element-wise-max).

**Basis non-conflation confirmed by construction.** The compiler never min()s across bases. The audit safety-net (`auditScan`) is basis-aware: for the GB 14930.1 tAs cell it excludes EU 10/2011 specific-migration rows (`audit_exclude_basis: "specific migration|migration into food|mg/kg food"`) because a migration SML (10 µg/kg food) is a stricter *number* in a *non-comparable basis*, not a stricter same-basis limit. After that exclusion the `stricter_unselected` scan is empty for every cell.

**Control cells (no sovereign ML) are honest, not a dodge.** Ni, Cr-total, Cr-VI are *measured* in this product class (zhang2010 Beijing dish-soap ten-metal panel: Pb/Cd/Cr/Ni; ecetoc1992: Ni/Cr/Cr-VI across dish/all-purpose/specialty cleaners), so they are demonstrably material — which is exactly why they are **control** (published method + escalation rule) and never not-material. Al is control because it may be a functional mineral ingredient (alumina abrasives, aluminosilicate builders), so a "no source" not-material claim would be false.

## VERIFY — gates run (2026-08-13)

| Gate | Result |
| --- | --- |
| Compiler (`compile-cat12.mjs`) | 21 records, 0 unresolved cells (exit 0) |
| Not-material substantiation audit (`audit-not-material-substantiation.mjs`, **build-blocking**) | all 62 Category-12 not-material cells **PASS** (0 FAIL, 0 WARN); the 3 corpus WARNs are pre-existing non-Cat-12 rows |
| Not-material integrity (`audit-not-material-integrity.mjs`, warn-only) | no Category-12 flags (the 6 flags are rice/grain cells); the iAs/MeHg/Sn cells are not contradicted by any routed source — the cleaning occurrence corpus measured no arsenic/mercury speciation and no tin |
| Publication QC gate (`build-standards-qc-gate.mjs`) | exit 0, no CRITICAL_FAIL; the occurrence-percentile QC gate does not apply to Category 12 (no cell is a pooled percentile) |
| Firewall no-threshold lint (`firewall-no-threshold-lint.mjs`) | 0 structural ERRORs; Category-12 introduces no derived value on any index URL (all numbers live in `data/workbench/standards/`) |
| Readiness monitor (`build-category-standards-readiness.mjs`) | runs clean; Category 12 is a government-limit/read-across/control category with no occurrence-locked product rows, so it is correctly outside the percentile-readiness monitor (same posture as Category 9) |

### Substantiation of the not-material determinations (rebuttable, evidence-tested)

- **iAs** (all 21 rows) — *speciation-bounded* by tAs. No jurisdiction sets an inorganic-arsenic limit for cleaning products; total arsenic (GB 14930.1 Type B or the NMPA read-across) bounds the inorganic fraction. No routed source speciated arsenic.
- **MeHg** (all 21 rows) — *speciation-bounded* by tHg. No formation/migration pathway in a cleaning formulation; total mercury bounds any organomercury fraction. No routed source speciated mercury.
- **Sn** (20 rows; not disinfectants) — *no-migration-pathway*. No inorganic-tin source in a cleaning formulation; organotin is a distinct species (REACH entry 20) screened separately. No routed source measured tin (zhang2010's ten-metal panel excludes Sn). Disinfectants take Sn = control because a biocidal-organotin pathway is plausible there.

## Firewall (Part 2 / Part 19)

All numeric outputs are STAFF/HMTc workbench content under `data/workbench/standards/cat12-compiled/` — none live inside `wiki/`. The public heavymetalindex product-category pages render only the literature-native / regulatory view. The only `wiki/` edits in this build are to the GB 14930.1 regulation and source pages, adding a **sovereign regulatory limit** (the grouped heavy-metals ceiling) as regulatory context — allowed on the index (regulatory caps are legitimate index context), never an HMTc-derived value.

## Direction-of-drift check (Part 2)

This build moves **toward the literature/regulatory floor**: it publishes the actual sovereign limits where they exist (GB 14930.1) and honestly reports that no sovereign heavy-metal limit exists for the rest of the category (read-across / control), rather than manufacturing occurrence-derived thresholds to make the program look more evidence-based than the law is. The gap between these loose sovereign floors and any future HMTc ratchet is stated, not hidden.

## Version / lineage note

- **v1.0 (2026-08-13)** — initial compilation of all 21 Category-12 subcategories under Method v2.0, government-limit-only, consumer-chemical form. Forked from the Category 9 contact-product compiler (`compile-cat9.mjs`); adds two resolution kinds — `grouped` (inline sovereign grouped ceiling, applied as a conservative per-species bound) and `control` (published analytical method + escalation rule where a metal is material but no sovereign number exists) — and pathway-template expansion so 21 subcategories derive from 3 exposure-pathway templates. Registries emitted idempotently via `--emit-registries`.
- **Ratchet candidates (logged, not adopted).** The Pathway-B/C read-across floors are loose sovereign values (NMPA cosmetics). Stricter guidance exists (Germany BfR: Pb 2.0, Cd 0.1, tHg 0.1, tAs 0.5 mg/kg) but is guidance, not a statutory maximum; it is a **precautionary-ratchet** candidate for a future edition, not the government-limit-default baseline. ALARA and the running control bands on the `control` cells (Ni/Al/Cr) are the post-publication tightening mechanism.
- **Reusable pipeline.** The compiler and the 3-pathway config template are the reusable pattern for other largely-unregulated consumer-chemical categories (e.g. Category 19 Laundry and Fabric-Contact), changing the subcategory→pathway map and the read-across anchor, not the compiler.
