# Pea protein and rice protein: contract build record (2 November 2026)

Order HMI-PROTEIN-PEA-RICE-1, second instruction: build `/ingredients/pea-protein` and `/ingredients/rice-protein` in the Rice canonical style through `renderContractArticle` and the grouped findings table, with Olives-style superscripts, lower-contamination sourcing comparisons, up to 20 FAQs, a prose-depth acceptance record and a paired desktop/phone comparison with Rice.

**Status: candidates compiled, not presentation-ready, not publishable.** Two blockers are outside this build (see below). The provisional pages from PR #467 remain the committed `wiki/` pages until the blockers are cleared.

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
| Rice | Lead | Non-detect without a printed LOD | Unresolved |
| Rice | Origin (China, Vietnam, USA, Canada) | No origin on FDA product rows or CFIA; Hosojima flour origin not stated | Unresolved: needs origin-linked lots |

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

## Next step

The owner should decide one of the following:

- (a) Port the shared Rice chrome and a coherent engine from the live workspace to main. This is a shared-infrastructure change. After that, register the page owners and baselines and rebuild from main.
- (b) Render and accept these candidates in a copy of the live workspace, which deploys production, for Elon to release.

Either way, the hero artwork needs the owner's approval before release.
