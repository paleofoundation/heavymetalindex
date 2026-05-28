# Manual-fetch stops — 2026-05-28

## STOP: kabaran2020-health-risk-olive-oil-cyprus (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Is there any potential health risk of heavy metals through dietary intake of olive oil produced in M.pdf`
- **Suggested handle:** `MFK_is-there-any-potential-health-risk-of-heavy-metals`
- **Existing source page:** `wiki/sources/kabaran2020-health-risk-olive-oil-cyprus.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior entry `audited-revised` / verdict `REVISE` on 2026-05-26 (auto-audit subagent; 4 findings applied, 2 rejected)

Per SKILL.md Phase 1, step 1:

> Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed.

All three skip conditions hold. No ingest, no re-audit, no commit on this tick. The wrapper script should advance to the next candidate PDF in `condiment_papers/01_Oils`.

## STOP: ashraf2012-heavy-metals-vegetable-oils-saudi-arabia (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Levels of Selected Heavy Metals in Varieties of Vegetable Oils Collected from Saudi Arabia.pdf`
- **Suggested handle:** `MFK_levels-of-selected-heavy-metals-in-varieties-of-ve`
- **Existing source page:** `wiki/sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + fresh-context audit PROMOTE on 2026-05-26 (per the page's verification notes; two ⚠️ concerns reviewed, one applied — Zn page-2 vs Table-1 contradiction flag — one rejected — `edible-oil` matrices term confirmed in corpus use).

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/01_Oils`.

## STOP: torovic2024-mercury-fish-oil-supplements-serbia (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Mercury Content in Fish Oil Food Supplements and Associated Health Risk.pdf`
- **Suggested handle:** `MFK_mercury-content-in-fish-oil-food-supplements-and-a`
- **Existing source page:** `wiki/sources/torovic2024-mercury-fish-oil-supplements-serbia.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior entry `audited-revised` / verdict `REVISE` on 2026-05-26 (auto-audit subagent; 5 findings applied, 0 rejected — metals trimmed to `[tHg]`, unsupported "EU" qualifier stripped from 0.1 mg/kg max-level, inferred TDA tech-class + "no sample prep" removed from Methods, dose-attribution softened, ±SD restored on exposure percentages)

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/01_Oils`.

## STOP: fsai2016-total-diet-study-ireland-2012-2014 (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Report on a Total Diet Study carried out by the Food Safety Authority of Ireland (FSAI TDS).pdf`
- **Suggested handle:** `MFK_report-on-a-total-diet-study-carried-out-by-the-fo`
- **Existing source page:** `wiki/sources/fsai2016-total-diet-study-ireland-2012-2014.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior entry `audited-revised` / verdict `REVISE` on 2026-05-26 (auto-audit subagent; 4 findings applied — iAs Table 7 MoE attribution corrected to cross-subgroup ranges 2–30 vs BMDL01 0.3 and 57–800 vs BMDL01 8 with endpoint attribution; three dead-wikilink slug fixes (`ingredients/dairy` → `ingredients/milk-and-dairy`, `metals/aluminium` → `metals/aluminum`, `regulations/eu-1881-2006-contaminants` → `regulations/eu-1881-2006-contaminants-superseded`); 3 rejected — FERA attribution verified on source p.12, iAs/tAs order-of-magnitude line is single-source contrast not cross-source synthesis, `ingredients/meat` slug exists on disk despite stale snapshot).
- **Slug spot-check:** all 16 ingredient slugs (`cereals`, `rice`, `white-bread`, `fish`, `canned-tuna`, `tinned-fish`, `vegetables`, `fruit`, `potatoes`, `milk-and-dairy`, `meat`, `olive-oil`, `vegetable-oil`, `chocolate`, `tea`, `coffee`) and the 1 product slug (`canned-fish`) confirmed present on disk.

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/01_Oils`.

## STOP: brodziak-dopierala2023-mercury-oil-supplements-poland (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Mercury Exposure from the Consumption of Dietary Supplements Containing Vegetable Oils, Shark Liver.pdf`
- **Suggested handle:** `MFK_mercury-exposure-from-the-consumption-of-dietary-s`
- **Existing source page:** `wiki/sources/brodziak-dopierala2023-mercury-oil-supplements-poland.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior entry `audited-revised` / verdict `REVISE` on 2026-05-26 (auto-audit subagent; 3 findings applied, 0 rejected — stripped all commercial brand names from Key numbers per Part 12 brand firewall, simultaneously resolving prep-No.-7 brand-label transposition; removed eyeballed Figure-5 wheat-germ ~0.280 estimate not in any verbatim table cell; tightened Certification framing from "low-priority risk classification" to occurrence-data reporting per Part 2)

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/01_Oils`.

## STOP: fechner2022-bfr-meal-hg-cd-pb-ni-germany (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Results of the BfR MEAL Study_ In Germany, mercury is mostly contained in fish and seafood while cad.pdf`
- **Suggested handle:** `MFK_results-of-the-bfr-meal-study-in-germany-mercury-i`
- **Existing source page:** `wiki/sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** two prior audit cycles — Codex `audited-codex-revised` / `REVISE` on 2026-05-17 (5 findings applied, 0 rejected); auto-audit subagent `audited-revised` / `REVISE` on 2026-05-26 (3 findings applied, 0 rejected — removed `[[metals/mercury-methyl]]` wikilink inconsistent with tHg-only frontmatter; softened HMT&C-certified-products framing in Implications per Part 2; restored Grindomix/Milli-Q/Excel/SPSS vendor names per Part 12 Exception 2).

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/01_Oils`.

## STOP: ozbek2016-mip-oes-turkish-vinegars (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different T.pdf`
- **Suggested handle:** `MFK_a-practical-method-for-the-determination-of-al-b-c`
- **Existing source page:** `wiki/sources/ozbek2016-mip-oes-turkish-vinegars.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + auto-audit subagent verdict REVISE on 2026-05-26 (per the page's verification notes; 2 findings applied — corrected spike-level wording in Key numbers to show analyte-specific Table-2 spike concentrations, removed unsupported balsamic-concentration-mechanism claim from Implications — 1 finding documented but rejected: `wine-vinegar` ingredient routing for "grape vinegar" samples, retained per corpus convention and paper's own fermentation-from-wine framing).

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars`.

## STOP: escp2021-pb-as-balsamic-vinegar-fda-letter (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf`
- **Suggested handle:** `MFK_alarming-lead-arsenic-levels-found-in-popular-vine`
- **Existing source page:** `wiki/sources/escp2021-pb-as-balsamic-vinegar-fda-letter.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + auto-audit subagent verdict REVISE on 2026-05-26 (per the page's verification notes; 3 findings applied — relabeled µg/serving As intake numbers as wiki-derived arithmetic alongside the letter's per-liter water-equivalence framing, reframed HMT&C subcategory-treatment directive in Implications back to occurrence-data reporting per Part 2, removed cross-source Karavoltsos 2020 comparison reserved for Part 9 synthesis — 1 finding documented but rejected: `balsamic-reduction`/`balsamic-glaze` matrices retained as descriptive matrix slugs since the routing audit accepts them and the letter explicitly enumerates reductions/glazes as the highest-magnitude positives).

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars`.

## STOP: filename-content mismatch — "Aluminum Leaching from Cooking Pans and Food Containers into Vinegar.pdf"

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Aluminum Leaching from Cooking Pans and Food Containers into Vinegar.pdf`
- **Suggested handle:** `MFK_aluminum-leaching-from-cooking-pans-and-food-conta`
- **Existing source page:** none (no DOI/handle/cite-key matches in `wiki/sources/`)
- **Stop reason:** Paper-internal data-integrity issue — the PDF filename does not match the PDF content. The file actually contains an entirely different paper:
  - **Actual content:** Shimanoe, Ikari, Shimizu, Yamazoe (2006), "STM observation of SnO2 (1 1 0) thermal-treated under oxidative condition," *Sensors and Actuators B: Chemical* 118(1-2): 90–93. doi:10.1016/j.snb.2006.04.081
  - **Subject:** scanning-tunneling-microscopy imaging of tin-dioxide (1 1 0) surface oxygen adsorption states (O₂⁻, O⁻) for semiconductor gas-sensor research.
  - **HMI scope:** none. No food, no vinegar, no cookware leaching, no heavy-metal dietary-contamination data. The paper concerns surface science of an inorganic gas-sensor material.
- **Why this is a stop, not an ingest:** ingesting this PDF would either (a) produce a source page about SnO₂ surface science under a vinegar/aluminum filename — wildly out of HMI scope and useless for routing — or (b) require fabricating an aluminum-leaching wiki page from a PDF that contains no such data, violating source fidelity. Neither is acceptable.
- **Karen action requested:** locate the correct PDF for the intended paper (likely the Liukkonen-Lilja & Piepponen 1992 study or a similar aluminum-leaching-into-vinegar paper) and replace this file, OR remove it from the manual-fetch queue so the daemon stops re-proposing it. The current file's actual paper (SnO₂ STM) is out of HMI scope and should not be ingested even under a corrected filename.
- **Routing state:** no source page created; no routing impact.
- **Audit-queue state:** no entry written.

Per SKILL.md Stop conditions ("Paper-internal contradiction or data-integrity issue that's not the obvious mirroring pattern"), this is a stop. No ingest, no audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars` (alphabetically next: `Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars...pdf`).

## STOP: karavoltsos2020-copper-trace-metals-vinegars-greece (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars_ Impact of Organi.pdf`
- **Suggested handle:** `MFK_copper-complexing-capacity-and-trace-metal-content`
- **Existing source page:** `wiki/sources/karavoltsos2020-copper-trace-metals-vinegars-greece.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + auto-audit subagent verdict REVISE on 2026-05-26 (per the page's verification notes; Checks 1, 3, 4, 5 all clean; sole ⚠️ — `fruit-vinegar` matrices slug — documented as a false positive after corpus check confirmed matrices vocabulary is open-vocabulary and the routing audit accepted the source cleanly).

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars`.

## STOP: saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Determination of Lead, Cadmium, Copper, and Zinc Content in Commercial Iranian Vinegars Using Stripp.pdf`
- **Suggested handle:** `MFK_determination-of-lead-cadmium-copper-and-zinc-cont`
- **Existing source page:** `wiki/sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + auto-audit subagent verdict PROMOTE on 2026-05-26 (per the page's verification notes; Checks 2–5 all clean; sole ⚠️ — Codex/Turkish Pb attribution — applied: Pb 1 mg/L restricted to Turkish Food Codex (2002); joint Codex/Turkish attribution reserved for Cu + Zn 10 mg/L).
- **Identity checks:** DOI `10.1007/s12161-011-9303-4` grep → 1 hit (this page); `raw_handle` grep → 1 hit (this page); cite-key grep for `saei` → 1 file (this page). All three identity checks resolve to the same already-ingested page.

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars`.

## STOP: liu2010-mercury-white-vinegar-afs (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Direct determination of mercury in white vinegar by matrix assisted photochemical vapor generation a.pdf`
- **Suggested handle:** `MFK_direct-determination-of-mercury-in-white-vinegar-b`
- **Existing source page:** `wiki/sources/liu2010-mercury-white-vinegar-afs.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + auto-audit subagent verdict REVISE on 2026-05-26 (per the page's verification notes; Checks 2, 3, 4, 5 all clean; sole ⚠️ — sugar-interference threshold wording overstated "as low as 1% v/v" — applied: reworded to "exceeds ±10% on Hg signal at 1% v/v sugar" with the paper's ±5% relative-error tolerance threshold added).
- **Identity checks:** DOI `10.1016/j.sab.2010.06.004` grep → 1 hit (this page); `raw_handle` grep for `MFK_direct-determination-of-mercury-in-white-vinegar-b` → 1 hit (this page); cite-key grep for `liu2010` → 1 file (this page). All three identity checks resolve to the same already-ingested page.

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars`.

## STOP: filename-content mismatch — "Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (Inductively Coupl.pdf"

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (Inductively Coupl.pdf`
- **Suggested handle:** `MFK_determination-of-heavy-metal-contents-of-apple-and`
- **Existing source page:** none (no DOI/handle/cite-key matches in `wiki/sources/`; grep for "apple and grape vinegars" and the handle slug returned 0 hits)
- **Stop reason:** Paper-internal data-integrity issue — the PDF filename does not match the PDF content. The file actually contains an entirely different paper:
  - **Actual content:** Duman AD, Türkmen A (2024), "The determination of chemical composition in some vinegars and compliance with food legislation," *African Journal of Biotechnology* 23(12): 354–360. DOI: 10.5897/AJB2021.17345. Article Number CA5F38672841. CC-BY 4.0.
  - **Subject:** general physicochemical composition of 13 Turkish vinegar samples (6 retail/organic/synthetic apple+grape; 7 spontaneous lab-fermented apple/grape/mandarin/pear/carrot/melon/pomegranate). Measurements: pH, titratable acidity (g/100 mL), density (pycnometric), dry matter (g/L), moisture (%), ash content (g/L gravimetric at 525 °C), water activity, CIE L\*a\*b\* color. No heavy metals analyzed. No ICP-MS used.
  - **HMI scope:** none. Ash content is reported as bulk gravimetric mass (g/L), not as elemental composition. The paper contains zero data on Pb, Cd, As, Hg, Ni, Al, Cr, Sn, Sb, U or any individual metal — neither in tables, figures, nor text. The filename appears to have been copy-pasted from the *Tekin S (2014)* MSc thesis ("Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (inductively coupled plasma-mass spectrometer)," Ankara University) which is cited as a single reference in the bibliography of the actual Duman & Türkmen paper. Kimi (or whichever retrieval step) appears to have grabbed the cited-thesis title as the PDF filename and downloaded a different paper.
- **Why this is a stop, not an ingest:** the actual paper has no metals data, so ingesting it would either (a) produce a source page with no usable Key numbers, no analyte rows, and nothing for routing to land on — defeating the purpose of the source-page layer — or (b) require fabricating heavy-metals content from a vinegar-chemistry paper, violating source fidelity. Neither is acceptable. The paper is also off-corpus on its own merits (Cochrane bar for HMI requires actual metal occurrence data).
- **Karen action requested:** locate the correct Tekin (2014) Ankara University MSc thesis PDF and replace this file, OR remove this entry from the manual-fetch queue so the daemon stops re-proposing it. Note: the Tekin 2014 thesis is a real, citable source — if Karen wants the apple/grape vinegar ICP-MS data in the corpus, a fresh fetch of the actual thesis would be the right move.
- **Routing state:** no source page created; no routing impact.
- **Audit-queue state:** no entry written.

Per SKILL.md Stop conditions ("Paper-internal contradiction or data-integrity issue that's not the obvious mirroring pattern"), this is a stop. No ingest, no audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars` (alphabetically next: `Determination of lead in vinegar by ICP-MS and GFAAS_ evaluation of different sample preparation pro.pdf`).

## STOP: ndungu2004-lead-vinegar-icpms-gfaas (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Determination of lead in vinegar by ICP-MS and GFAAS_ evaluation of different sample preparation pro.pdf`
- **Suggested handle:** `MFK_determination-of-lead-in-vinegar-by-icp-ms-and-gfa`
- **Existing source page:** `wiki/sources/ndungu2004-lead-vinegar-icpms-gfaas.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + auto-audit subagent verdict REVISE on 2026-05-26 (per the page's verification notes; Checks 1, 3, 4, 5 all clean; sole ⚠️ — matrices/ingredients asymmetry for rice-vinegar/garlic-vinegar — documented per Part 10 5-paper-threshold reasoning and kept in matrices, kept out of ingredients; self-caught 2 additional Methods-citation errors during audit-application — 600/1300 °C reattributed to Conclusions p.6 rather than Table 2, and manufacturer max corrected to 400/1400 per §4.3).
- **Identity checks:** DOI `10.1016/j.talanta.2004.02.017` grep → 1 hit (this page); `raw_handle` grep → 1 hit (this page); cite-key grep for `ndung` → 1 file (this page). All three identity checks resolve to the same already-ingested page.

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars`.

## STOP: acosta1993-cd-pb-ni-vinegar-types (already-ingested, post-2026-05-14 clean)

- **PDF:** `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Levels of Cd, Pb, and Ni in Different Types of Vinegars.pdf`
- **Suggested handle:** `MFK_levels-of-cd-pb-and-ni-in-different-types-of-vineg`
- **Existing source page:** `wiki/sources/acosta1993-cd-pb-ni-vinegar-types.md`
- **Page `updated:`** 2026-05-26 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`
- **Audit-queue state:** prior merge-enhance + auto-audit subagent verdict PROMOTE on 2026-05-26 (commit `ea11d89`; filled `products: [products/vinegar]` resolving routing-malformed missing-products flag; removed unsupported FAO/WHO Codex 1982 draft sentence; removed unsupported Student-Newman-Keuls qualifier; added per-type SDs, brand-C/brand-D mean values, spike masses, per-metal precision figures. Auto-audit Checks 1–4 fully clean; sole ⚠️ on Check 5 — Ndung'u 2004 method-comparison reference in Courses bullet — judged scope-guidance for downstream users, not value synthesis; subagent itself flagged as "minor not blocking optional cleanup").
- **Identity checks:** title grep "Levels of Cd, Pb, and Ni" → 1 hit (this page); `raw_handle` "MFK_levels-of-cd-pb-and-ni" → 0 hits (page records `raw_handle: manual-fetch-kimi` per pre-handle-convention era, but `raw_path` points to this exact PDF); cite-key grep `acosta1993` → 1 file (this page). All resolve to the same already-ingested page.

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"), all three skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `condiment_papers/02_Vinegars` (alphabetically next: `Metallic Contaminants in Andalusian Vinegars.pdf`).

## STOP: kim2018-dry-dog-food-heavy-metals (already-ingested, post-2026-05-14 clean; auto-fetched filename misleading)

- **PDF:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-meat-poultry-tas_2018_10-3389-fvets-2018-00264.pdf`
- **Suggested handle:** `AF_ing-meat-poultry-tas-2018-10-3389-fvets-2018-00264`
- **Existing source page:** `wiki/sources/kim2018-dry-dog-food-heavy-metals.md`
- **Page `updated:`** 2026-05-27 (post-2026-05-14 cutoff)
- **Routing state:** not in `routing_unresolved.csv`; appears in `routing_malformed.csv` only at `severity: advisory` for missing optional `ingredients` (1 of 598 corpus-wide advisory rows about optional-field absence — not a real defect)
- **Identity checks:** DOI `10.3389/fvets.2018.00264` grep across `wiki/sources/` → 1 hit (`kim2018-dry-dog-food-heavy-metals.md`); cite-key grep → 1 hit (same page); handle grep `AF_ing-meat-poultry-tas-2018` → 0 hits, but existing page records `raw_handle: auto-fetched` and `raw_path` pointing to the Pb-variant of this same byte-identical PDF in `ingested/`. All three identity checks resolve to one paper.
- **Duplicate-bytes verification:** SHA256 `0c876a831b4f0eedb7670e7f6088e897e592203162857d022ceeba69f6d2d315` matches across six files — the same paper auto-fetched three times under three metal-prefix filename variants (`ing-meat-poultry-pb_…`, `ing-meat-poultry-tas_…`, `ing-meat-poultry-thg_…`) into both `auto-fetched/` and `ingested/`. The Pb variant is the one recorded in the existing wiki page's `raw_path`.
- **Why no merge-enhance:** the existing page's `ingredients: []` is intentional (the paper is about dry dog food with animal-ingredient groupings — fish, poultry, red meat — but per Part 12 must not route to human-food meat/poultry/fish ingredient or product pages; verification notes already record this). Matrices `[pet-food]` is corpus-standard. Key numbers carry medians + ranges for tAs, Cd, Pb, tHg by formulation group with exact mg/Mcal figures from the source tables. Methods document ICP-MS normalization to metabolizable energy. Products correctly routed only to `pet-food-dry-kibble`. Page has no invented slugs, no brand-by-brand listings, no transposed values, no missing tables, no legacy headings, no missing exposure analysis (paper does not estimate human exposure — it is a pet-food contamination paper). No defects exist to fix.
- **Filename mismatch note:** the auto-fetched filenames `ing-meat-poultry-tas_…`, `ing-meat-poultry-thg_…`, `ing-meat-poultry-pb_…` suggest a *human* meat/poultry paper for tAs/tHg/Pb wishlist gaps. The actual paper is about dry dog food with red-meat/poultry/fish formulations. This is a discovery-system labeling artifact (the gap-driven wishlist queries hit a paper whose title mentions "Red Meat, Poultry, and Fish" without recognizing the pet-food context) — not a paper-internal data-integrity issue. The paper itself is fine and already correctly ingested.

Per SKILL.md Phase 1, step 1 ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed") — applied with the standard reading that advisory-only `routing_malformed.csv` rows for intentionally-empty optional fields do not trigger merge-enhance — all skip conditions hold. No ingest, no re-audit, no commit on this tick. Wrapper should advance to the next candidate PDF in `manual-fetch/seasonal-geographic-variance/auto-fetched/` and is free to dispose of the six duplicate PDFs (3 in `auto-fetched/`, 3 in `ingested/`) by collapsing them to a single retained file referenced from the existing page's `raw_path` if a cleanup pass is desired.
