# Pea protein and rice protein: contract build record (2 November 2026)

Order HMI-PROTEIN-PEA-RICE-1, second instruction: build `/ingredients/pea-protein` and `/ingredients/rice-protein` in the Rice canonical style through `renderContractArticle` and the grouped findings table, with Olives-style superscripts, lower-contamination sourcing comparisons, up to 20 FAQs, a prose-depth acceptance record and a paired desktop/phone comparison with Rice.

**Status (2 November 2026, evening):** the Rice chrome and the page builder now run from this branch, with no overlay. `/ingredients/rice-protein` passes every engine gate (seven evidence gates, presentation, hero) and is installed as the canonical page. `/ingredients/pea-protein` compiles and passes the seven evidence gates and the hero gate, but fails one presentation rule, an occurrence table with no usable comparator, so it stays on its provisional page. See "Port to main" below.

## What is in this commit

| Path | What |
| --- | --- |
| `data/evidence/findings/sources/{fda2013,cfia2020,hosojima2017}-*.json` | Findings records brought from the live workspace (engine-v1 extraction). |
| `data/evidence/findings/sources/{ring2021,horvath2025}-*.json` | Existing records, re-routed. |
| `data/evidence/findings/by-page/ingredients/{pea,rice}-protein.json` | Page index: 32 pea and 84 rice protein findings. |
| `tools/contracts/ingredients/protein-pages/` | Authoring helper and the two authored page records. |
| `data/evidence/syntheses/ingredient-{pea,rice}-protein-authored.json` | Authored synthesis applied over the engine's templated prose. |
| `data/evidence/engine/ingredient/{pea,rice}-protein/` | Compiled candidate, synthesis, question record, FAQ-bank dispositions and comparator admission. |
| `engine-authored-hook.patch` | The generic hook added to `tools/engine/page/page.mjs` in the build runtime. |
| `engine-runtime-overlay.sha256`, `engine-runtime-ops-head.txt` | Exact runtime files used for the build. |

### Routing (material.page, `route_rule: override:HMI-PROTEIN-PEA-RICE-1`)

- Ring 2021 retail samples P2 and P12 (pea) go to `ingredients/pea-protein`.
- FDA 2013 "Protein Beverages (Brown Rice Protein…/Rice Protein…)" (7 samples) and the "Rice Protein Powders (…)" category (12 samples) go to `ingredients/rice-protein`. One of these, "Plant-Based Drink Mix", had been misrouted to `ingredients/fruit-juice` and is corrected here.
- CFIA 2020 "brown rice protein powder" goes to `ingredients/rice-protein`.
- Hosojima 2017 rice endosperm protein goes to `ingredients/rice-protein`.
- Horvath 2025 product 17 (brown rice only) goes to `ingredients/rice-protein`. The pea and rice blends (products 6, 10, 11, 13 and 18) stay on the protein powder route.
- FDA rows are set to basis `as_sold`, form `powder`. FDA footnote 8 multiplies the µg/kg value by grams of powder per serving, so the concentration is in the powder.

### Primary-text checks

- FDA 2013: all 72 routed findings (19 samples × total arsenic, inorganic arsenic, DMA, MMA) matched the "Full Analytical Results - Rice Products" table, parsed from the PDF. LOD/LOQ (Dietary Supplements and Protein Beverages column): total arsenic 10/80 µg/kg, inorganic arsenic 2/12 µg/kg.
- Ring 2021 Table 6: P2 lead 22.2, cadmium 40.6, mercury 4.3 µg/kg; P12 lead 22.5, cadmium 15.4, mercury <0.2 µg/kg. Table 3 gives the labeled servings: P2 30 g, P12 10 g.
- Hosojima 2017 Table 1: cadmium 0.14 ± 0.17 ppm across five batches. The Methods describe four dilute HCl washes.
- CFIA 2020 p. 8: one brown rice protein powder had 0.022 ppm mercury, the survey maximum. Pp. 8 to 9: "rice-based protein powders have the highest levels of metals, especially cadmium", and the fall in mean protein powder cadmium is attributed to fewer rice-based powders.

## Blockers

1. **Hero artwork: cleared (2 Nov 2026).** The stand-ins are replaced by new heroes in the canonical style: `/static/heroes/pea-protein-powder-split-peas-pod.webp` and `/static/heroes/rice-protein-powder-brown-rice-grains.webp`, registered in `data/design/page-hero-images.json` (no `placeholder` flag) and the wiki frontmatter, provenance in `data/design/image-batch-93.json` (common prompt from batches 04/22/27 verbatim, only the scene changed; subjects center-right, dark left half; WebP 2164x721, quality 85). Re-run in a throwaway runtime with the recorded overlay hashes: `compilePage` reports `hero: true` for both pages and `build.mjs` no longer returns `missing_required_input`; it now stops at the isolated preview (authored cross-link between the two pages has no preview destination), as before. Caveat: the generator returns 1280x720 masters, so the 3:1 band is upscaled to 2164x721 rather than cropped from a 2172x724 master; no XMP block is embedded. The owner should still approve the artwork.
Blockers 2 and 3 below are cleared by the port to main; they are kept as written for the record.

2. **Main cannot render the canonical Rice style.**
   - `quartz/components/approvedRiceChrome.tsx`, which emits `data-ingredient-presentation="rice-shared-v1"`, exists only in the live workspace (`~/ops/heavymetalindex`, HEAD in `engine-runtime-ops-head.txt`).
   - Main's `tools/engine/page/page.mjs` imports `pageHeroImage`, which main's `hero-images.mjs` does not export, and `tools/contracts/build-thin-pages-ledger.mjs` is missing.
   - The build therefore ran in a throwaway worktree with the live workspace's engine closure laid over this commit (14 files, hashes recorded). Main's `source-publication.mjs` was kept, because main's Quartz needs `isRetiredRecord`.
   - On a full-site build of this branch, both candidates render. `tools/audit-ingredient-presentation.mjs` (main and live versions) then reports "bypasses the mandatory canonical compiler/presentation gate", because the chrome marker is absent. Main's own `rice.html` also fails that gate, on five Quick Read contextual links.
   - The paired desktop/phone comparison with Rice is therefore not meaningful on main and was not done.
3. **Main's CI lints would reject the compiled pages.**
   - `lint:page-openings` throws "Contract page has no registered compiler owner" (`tools/contracts/page-owner.mjs`).
   - `lint:page-structure` flags `dois_or_author_year`, `section_presence_and_order`, `uncertainty_note` and, for rice, `metal_symbols`. Plantain carries the same checks in the baseline.
   - Shared-component output contains en dashes (period ranges, source titles) and the British spellings "aluminium" and "programme". Only authored text is dash-free and American English.

## Lower-contamination sourcing comparison (per decision-relevant analyte)

| Page | Analyte | Finding | Class |
| --- | --- | --- | --- |
| Pea | Lead | Two powders 22.2 and 22.5 µg/kg; both above the Ring whey median of 8.6 µg/kg (27 whey powders, Index calculation) and below the whey maximum of 88.4 | Lowest observed: tie |
| Pea | Cadmium | P12 15.4 against P2 40.6 µg/kg; P2 exceeds all 26 quantified whey (max 23.2) | Lowest observed in stated comparison; pea above whey tentative |
| Pea | Mercury | P12 <0.2 against P2 4.3 µg/kg | Lowest observed |
| Pea | Arsenic | Not measured | Unresolved: needs lot iAs |
| Pea | Origin (China, Vietnam, USA, Canada) | No origin-linked result; blends by production country are below an unprinted LOD | Unresolved: needs origin-linked lots |
| Rice | Inorganic arsenic | Labeled "rice protein" 25, 30, 47 against "brown rice protein" 37, 53, 99 (+1 ND) µg/kg; FDA protein beverage powders median 42 against rice protein powder category median 50 | Tentatively lower (non-brown), supported by bran localization; not a supported preference |
| Rice | Cadmium | Only endosperm protein mean 0.14 ± 0.17 mg/kg; CFIA statement that rice-based powders are highest | Unresolved for brown rice protein |
| Rice | Mercury | One sample 0.022 ppm | Unresolved |
| Rice | Lead | WHO GEMS/Food PAHO, 22 powders: labeled brown rice protein median 237 µg/kg (110 to 394, n 14) against labeled rice protein median 255 µg/kg (147 to 445, n 8), Index calculations | No lower label; the brown rice direction for inorganic arsenic does not repeat for lead |
| Rice | Origin (China, Vietnam, USA, Canada) | No origin on FDA product rows or CFIA; Hosojima flour origin not stated; GEMS/Food gives the WHO region (PAHO) only, and for 2014 one domestic, one imported, three unknown | Unresolved: needs origin-linked lots |

## Prose-depth acceptance (authored text, drawers closed; rendered check pending)

This is reviewed against the authored records. The rendered check, at matching widths beside Rice, cannot be done until blocker 2 is cleared.

| Section | Pea | Rice | Rationale |
| --- | --- | --- | --- |
| Overview | pass | pass | Actual values, the main implication (lead at labeled serving; iAs median and cadmium) and limits |
| Scope | pass | pass | Separates isolate, concentrate, blends, endosperm protein and the FDA category |
| Profile | pass | pass | States the rows, why there is no rating (pea) and what the ratings mean (rice, single FDA family) |
| Pathways | pass | pass | Separates measured findings from inference and cites the market screen and CFIA attribution as such |
| Variation | pass | pass | Lowest observed, tentative and unresolved stated per analyte; origin answered with the evidence needed |
| Processing | pass | pass | Acid wash and milling as described, with no measured effect claimed |
| Mitigation | pass (thin) | pass | Pea has no evaluated control; this is stated, not padded |
| Trade-offs | pass | pass | Pea lead and cadmium divergence; rice water management trade-off; inorganic share 32 to 72 percent |
| Testing | pass | pass | Methods, LOD/LOQ and substituted values explained |
| Procurement | pass | pass | Buyer requests, the Prop 65 per-serving figure and requalification triggers |
| Exposure | pass | pass | Labeled-serving arithmetic labelled as Index calculation; warning status explicitly not assessed |
| Review | pass | pass | Limits by instrument and date; EU lead rows and GB 2762-2025 rows marked not transcribed |
| FAQs | 14, pass | 16, pass | Distinct reader questions; no FAQ holds the only statement of a main finding |

## Port to main (2 November 2026, evening)

Owner instruction: bring the shared Rice layout and the in-sync builder files from the live workspace into the repo, register both pages with main's checks, rebuild and get CI green. The live workspace and main diverged at #219 (ops: 9 commits plus uncommitted work; main: 570 commits), so files were merged one at a time, not copied over.

**Layout and builder (from the live workspace unless noted):**

| File | Change |
| --- | --- |
| `quartz/components/ingredientChrome.mjs`, `.d.mts` | New: binds page facts into the frozen Rice hero and rail markup. |
| `quartz/components/approvedRiceChrome.tsx` | Adds `CanonicalIngredientHero` and `CanonicalIngredientRail`, which emit `data-ingredient-presentation="rice-shared-v1"`. |
| `quartz/components/HeroBand.tsx`, `Rail.tsx` | One line each. Only compiler-owned pages (`page_contract_version`) take the canonical chrome. Main's restored engine pages and Plantain had that marker dropped, so they keep their current band (Oyster's hero is not in the asset registry and would throw). |
| `quartz/plugins/transformers/autolink.ts` | The Quick Read is never auto-linked (AGENTS.md rule). This also clears the five Quick Read errors on main's own `rice.html`. |
| `tools/lib/hero-images.mjs`, `.d.mts` | Adds `pageHeroImage`, which main's `page.mjs` already imported. |
| `tools/contracts/build-thin-pages-ledger.mjs` | New; imported by `build.mjs` and four ingredient tools. |
| `tools/contracts/pilot/analyte-table.mjs` | "Q1–Q3" becomes "Q1 to Q3" in shared notes. |
| `tools/engine/gates/index.mjs`, `tools/audit-ingredient-presentation.mjs` | Withheld-hero handling, paired with `pageHeroImage`. |
| `tools/engine/page/page.mjs` | The authored-synthesis hook (`engine-authored-hook.patch`), now in the repo. |
| `tools/engine/page/preview.mjs` | (This branch.) Stages each metal page's generated `evidence.md`, which main's metal-evidence transformer requires. |
| `tools/engine/page/{inputs,model,prose}.mjs` | (This branch.) Printed ranges use "to" instead of an en dash. |
| `tools/contracts/page-owner.mjs` | Registers `data/evidence/engine/ingredient/rice-protein/synthesis.json` as a compiler owner, so `lint:page-openings` checks the compiled Quick Read. Plantain's route, dropping the marker, renders a second, generic Quick Read above the compiled one. |
| `data/evidence/page-structure-baseline.json` | Rice protein added to `dois_or_author_year`, `metal_symbols` and `uncertainty_note`, as Plantain is. All three come from the shared template. |

The `engine-runtime-overlay.sha256` files from the earlier build are no longer needed to reproduce it.

**New evidence: WHO GEMS/Food lead in rice protein.** On main, the independent discovery scan found 52 rice protein items the ledger did not decide. Main has no GEMS dataset shards; they are 174 MB and untracked even in the live workspace, which misroutes these rows to `ingredients/rice`. `tools/contracts/ingredients/protein-pages/gems-rice-protein.mjs` reads the backup-library CSVs with the scanner's own parser and writes a scoped store subset to `data/evidence/findings/datasets/`:

- 22 routed rows: PAHO lead results for individual rice protein powders, random sampling, officially accredited labs, dry weight. There are 5 rows for 2014 (0.2164 to 0.4452 mg/kg, LOD 1 µg/kg, LOQ 4 µg/kg) and 17 for 2017 (110.40 to 393.53 µg/kg, no limit printed). Index calculations: median 241 µg/kg, range 110 to 445; labeled brown rice protein n 14, median 237; labeled rice protein n 8, median 255. One local name carried a brand, which is scrubbed to `[brand]`.
- 22 `duplicate_of` decisions: the per-year PAHO files restate the same serials.
- 5 `excluded` decisions: EURO animal feed (rice protein for feed).
- Three source items are decided from the live workspace's complete store records: `efsa2024-organoarsenic-species` (no rice protein among its foods), `scott2025-brown-white-rice-arsenic` (context) and `zhao2023-silicon-cd-rice` (controls, no numeric result).

The authored rice protein record was revised wherever it had said lead was unquantified. The changes cover the overview, profile, variation (lead does not repeat the brown rice direction), testing, procurement, exposure (median 7.2 µg per 30 g scoop, range 3.3 to 13.4 µg, against 0.5 µg/day; Index calculations) and FAQs. The pea FAQ comparing pea with rice now gives the lead contrast, marked indicative.

**Results.**

- `ingredient/rice-protein` passes all seven engine gates, presentation and hero. It has 86 rows, no undecided items and 58 meaningful comparator rows, and thin reasons `decision_analyte_without_comparison` and `no_applicable_cited_control` (thin pages may publish when every gate passes). It is installed as `wiki/ingredients/rice-protein.md` exactly as compiled (`HMI_BUILD_DATE=2026-11-02`, built from the provisional page, so its old heading anchors keep resolving).
- `ingredient/pea-protein` passes gates 1 to 7 and the hero gate. Presentation fails with "Occurrence table has no usable rated or direct comparator". Two Ring 2021 powders cannot form an HMI reference (four units needed). The rules forbid borrowing Ring's whey powders as a comparator and inventing comparisons. No GEMS/Food export holds pea protein. The pea page therefore stays the provisional page from this PR, and its compiled candidate is kept as a record. To publish it, find more pea protein lots with lead and cadmium (and arsenic), such as monitoring programs, total diet studies or retail surveys.
- Because pea protein stays provisional, the rice protein record names the pea protein page in plain text rather than linking it. The preview gate refuses links to provisional pages.
- Full-site build (`quartz build -d wiki`, no prebuild): `inspectIngredientPresentation` reports no errors for `rice-protein.html` (marker present, hero `/static/heroes/rice-protein-powder-brown-rice-grains.webp` loaded at 2164x721) or for `rice.html`.
- CI on the branch: `npm test` 843 pass, 0 fail; `lint:page-structure` baseline holds; `lint:page-openings` 0 problems; `lint:thin-with-evidence` PASS; `npm run check` pass; `contracts:pilot:check` and `contracts:check` pass. Main has no `lint:ingredient-presentation` or `lint:hero-preservation` script; the audit above was run directly.

**Remaining dashes on the rendered rice protein page:** official source titles (CFIA, OEHHA, China GB), which are not edited, and one bounded range ("1.5–2.5 (bounded)") printed by `tools/contracts/pilot/comparisons.mjs`. That file is shared with the hash-pinned Rice pilot.

## Paired visual comparison with Rice

`visual/`: rice protein and Rice at 1440x900 and 375x812 (mobile emulation), from the full-site build served locally. Both pages show the same shell: breadcrumb and Ingredient chip, H1, dek, Cite and Version history buttons, author block, Page snapshot, a Quick Read with three facets, the left contents rail and the right Key evidence rail. Both heroes load at 2164x721 with the same cover fit and 65% 50% focal point. One difference comes from the artwork: at phone width, Rice's photo shows behind the title, but the rice protein crop falls mostly on the new image's dark left half, so the band reads as plain dark. The artwork was not changed.

## Prose-depth acceptance, rendered

Rice protein was rechecked on the rendered page with drawers closed: each section still passes on the table above. Lead is now stated in the overview, profile, variation, exposure and FAQs. Pea protein is unchanged; it is not rendered canonically.

## Next step

- Rice protein: ready for review and release (Elon deploys production; never `--prod` from here). The live workspace still routes the GEMS rice protein lead rows to `ingredients/rice`. If rice protein is released from there, add the routing override, or regenerate the shards from this subset.
- Pea protein: an evidence fetch is needed before a canonical build can publish.

## Order HMI-PROTEIN-REBUILD-1 (3 November 2026)

Evidence pack `~/hmi-protein-evidence-20261103.tgz`, extracted to `~/hmi-protein-evidence-20261103/`. Every SHA256SUMS entry verified OK. The one exception is the pea list's Ring 2021 line, which points to a path outside the pack; Ring 2021 was already on this branch with the same sha256 (`7f2c9910…`).

**Hard exclusion.** The GRAS notice 609 PDF and its 14 June 2018 supplement letter were deleted from the extracted copy before ingest. Neither was read for values, ingested, cited or referenced. A repository-wide search finds no trace of the excluded company or its products. The GEMS/Food script no longer names a brand in code: it withholds every GEMS product label (`label_withheld: brand firewall`) and keeps only the generic food name. The 22 lead rows and their ids are unchanged.

**New sources** (written by `tools/contracts/ingredients/protein-pages/sources-2026-11-03.mjs`):

| Source id | Type | Rows | Pages |
| --- | --- | --- | --- |
| `lopezcalabozo2025-spain-vegetable-protein-concentrates-minerals` | peer reviewed, Table 2 read from Europe PMC full text PMC11816949 (CC BY 4.0; the publisher PDF returns a challenge page) | 8 rice, 8 pea (Ni, Cr, Cd, Pb) | rice protein, pea protein |
| `fda-grn804-pea-protein-manufacturer-batches` | manufacturer batch data, Tables 10 and 11 | 20 | pea protein |
| `fda-grn851-pea-protein-manufacturer-batches` | manufacturer batch data, Tables 4 to 6 | 36 | pea protein |
| `fda-grn788-pea-protein-manufacturer-batches` | manufacturer batch data, Appendix II test report | 4 | pea protein |

- **Brand firewall:** no manufacturer, supplier, trade or product name and no batch code appears in any record. Grades and batches are numbered in notice order.
- **Manufacturer rows:** every GRAS row has `site_context: manufacturer`. The engine therefore labels these rows "Manufacturer test" and never admits them to a reference level.
- **Lopez-Calabozo non-detects:** the cadmium and lead detection-limit footnotes ("< 0.015", "< 0.026") print no unit, so no limit is recorded. The paper does not state a dry or as-sold basis for minerals.
- **GRAS notice 788:** Appendix I's five scanned certificates were not transcribed, because they are illegible. The pack notes this too.

**Already on the branch and kept:** FDA 2013 total and inorganic arsenic per product (19 samples), CFIA 2018-19 (mercury sample), Horvath 2025, Hosojima 2017, and the GEMS/Food lead rows.

**Results.** Both pages were built with `HMI_BUILD_DATE=2026-11-03 node tools/engine/page/build-all.mjs --family ingredient --pages pea-protein,rice-protein`.

- `/ingredients/rice-protein` passes every gate: 94 rows from six sources, 58 rated comparators, and presentation audit errors: none. It is installed in `wiki/ingredients/rice-protein.md`.
- `/ingredients/pea-protein` compiles with 100 rows from five sources and passes gates 1 to 7. Its authored text states that inorganic arsenic has not been measured in any pea protein product.
- **Pea blocker:** the presentation audit still fails "no usable rated or direct comparator", so the provisional page stays live. Three things cause it:
  - A rated reference needs four compatible units. Ring 2021 gives two as-sold units per metal.
  - The Lopez-Calabozo non-detects have no usable limit and no stated basis.
  - Manufacturer rows are excluded from references and same-study contrasts by design.
- **What would clear it:** an owner decision, or two more independent pea results on an as-sold basis with stated limits.

### Owner decision: pea protein installed with the comparator gap (3 November 2026)

Karen Pendergrass instructed "Ship it, accept the gap." The compiled pea protein candidate (100 rows, five sources) is installed at `wiki/ingredients/pea-protein.md`. It passes evidence gates 1 to 7 and the hero check. It still fails one presentation rule: the occurrence table has no rated or direct comparator, because Ring 2021 gives two independent as-sold results (four are needed), the López-Calabozo non-detects print a limit with no unit or basis, and manufacturer rows never enter references. `tools/engine/release/verify-live.mjs` will therefore report `presentation: fail` for this page after deploy; that is expected under this decision. The gap closes when two or more further independent as-sold pea protein results with stated limits are ingested.
