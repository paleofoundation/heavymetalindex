# Manual-fetch ingest batch report — 2026-05-28

## Tick 2026-05-28T09:30:36.000Z

- Candidates this tick: 15
- Succeeded: 0
- Stopped (need Karen): 15
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Is there any potential health risk of heavy metals through dietary intake of olive oil produced in M.pdf`: kabaran2020-health-risk-olive-oil-cyprus already clean post-2026-05-14
- `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Levels of Selected Heavy Metals in Varieties of Vegetable Oils Collected from Saudi Arabia.pdf`: ashraf2012-heavy-metals-vegetable-oils-saudi-arabia already-ingested, post-2026-05-14 clean, not in malformed
- `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Mercury Content in Fish Oil Food Supplements and Associated Health Risk.pdf`: torovic2024-mercury-fish-oil-supplements-serbia already ingested + audited (page updated 2026-05-26, clean routing, audit-queue audited-revised)
- `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Mercury Exposure from the Consumption of Dietary Supplements Containing Vegetable Oils, Shark Liver.pdf`: brodziak-dopierala2023-mercury-oil-supplements-poland already post-2026-05-14 clean, not in malformed/unresolved, audit-queue=audited-revised on 2026-05-26
- `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Report on a Total Diet Study carried out by the Food Safety Authority of Ireland (FSAI TDS).pdf`: fsai2016-total-diet-study-ireland-2012-2014 already-ingested clean (page updated 2026-05-26, audited-revised, not in malformed/unresolved, all 16 ingredient + 1 product slugs verified on disk)
- `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Results of the BfR MEAL Study_ In Germany, mercury is mostly contained in fish and seafood while cad.pdf`: fechner2022-bfr-meal-hg-cd-pb-ni-germany already ingested clean post-2026-05-14 (page updated 2026-05-26; two prior audit cycles; not in routing_malformed or routing_unresolved)
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different T.pdf`: already-ingested-post-2026-05-14-clean (ozbek2016-mip-oes-turkish-vinegars)
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf`: escp2021-pb-as-balsamic-vinegar-fda-letter already has a clean post-2026-05-14 source page (updated 2026-05-26, not in malformed/unresolved, audited REVISE).
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Aluminum Leaching from Cooking Pans and Food Containers into Vinegar.pdf`: filename-content mismatch — PDF contains Shimanoe 2006 SnO2 STM paper (out of HMI scope), not the aluminum-leaching-into-vinegar study its filename advertises
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars_ Impact of Organi.pdf`: karavoltsos2020-copper-trace-metals-vinegars-greece already-ingested post-2026-05-14 clean
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Determination of Lead, Cadmium, Copper, and Zinc Content in Commercial Iranian Vinegars Using Stripp.pdf`: saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars already-ingested-post-2026-05-14-clean
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (Inductively Coupl.pdf`: filename-content mismatch — actual PDF is Duman & Türkmen 2024 vinegar composition paper, not Tekin 2014 ICP-MS heavy metals thesis; no metals data in the file.
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Determination of lead in vinegar by ICP-MS and GFAAS_ evaluation of different sample preparation pro.pdf`: ndungu2004-lead-vinegar-icpms-gfaas already-ingested post-2026-05-14 clean
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Direct determination of mercury in white vinegar by matrix assisted photochemical vapor generation a.pdf`: liu2010-mercury-white-vinegar-afs already ingested (page updated 2026-05-26, audited-revised, not in malformed/unresolved). Skip per SKILL.md Phase 1 step 1; stop note appended to data/evidence/autonomy/manual-fetch-stops-2026-05-28.md. No commit on this tick.
- `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Levels of Cd, Pb, and Ni in Different Types of Vinegars.pdf`: already-ingested post-2026-05-14 clean (audited PROMOTE 2026-05-26)

## Tick 2026-05-28T09:59:05.048Z

- Candidates this tick: 1
- Succeeded: 0
- Stopped (need Karen): 1
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-meat-poultry-tas_2018_10-3389-fvets-2018-00264.pdf`: kim2018-dry-dog-food-heavy-metals (already-ingested post-2026-05-14 clean; auto-fetched PDF is byte-identical duplicate of existing page's source under a misleading filename)

## Tick 2026-05-28T10:46:05.313Z

- Candidates this tick: 15
- Succeeded: 9
- Stopped (need Karen): 6
- Failed: 0

### Succeeded
- `carey2015-rice-arsenic-percolating-cooking` (raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0007_2015_10-1371-journal-pone-0131608.pdf)
- `mishra2017-rice-arsenic-thiol-complexation` (raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0007_2017_10-1038-srep40522.pdf)
- `troncoso1988-metallic-contaminants-andalusian-vinegars` (raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Metallic Contaminants in Andalusian Vinegars.pdf)
- `bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing` (raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables_ A Case Study Gal.pdf)
- `efsa2022-buffered-vinegar-food-additive-safety` (raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Safety Evaluation of Buffered Vinegar as a Food Additive - EFSA Assessment.pdf)
- `vella2024-malta-olive-cultivars-aas` (raw/Manual Fetch Kimi /condiment_papers/03_Olives_and_Pickles/Investigation on the Concentration of Heavy Metals found in Olives and Olive Mill Waste.pdf)
- `pankavec2019-pickled-mushrooms-poland-minerals` (raw/Manual Fetch Kimi /condiment_papers/03_Olives_and_Pickles/Mineral constituents of conserved white button mushrooms (Agaricus bisporus) - pickled_canned.pdf)
- `karatasli2018-radionuclide-heavy-metal-turkey-olives` (raw/Manual Fetch Kimi /condiment_papers/03_Olives_and_Pickles/Radionuclide and heavy metal content in the table olive (Olea europaea L.) from the Mediterranean region of Turkey.pdf)
- `vaishali2020-tomato-ketchup-delhi-ncr-pb-cd` (raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street V.pdf)

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0007_2017_10-1371-journal-pone-0176923.pdf`: already-ingested duplicate; existing page post-2026-05-14 clean, audited 2026-05-25, byte-identical PDF (sha256 match).
- `raw/Manual Fetch Kimi /condiment_papers/03_Olives_and_Pickles/FDA Total Diet Study Report - Fiscal Years 2018-2020.pdf`: fda-tds-elements-2018-2020 already-ingested, post-2026-05-14 clean (PDF SHA matches existing page's raw_path; processed 2026-05-20 from 01_Fruits_and_Fruit_Products folder; Kimi misfiled the same PDF in 03_Olives_and_Pickles too).
- `raw/Manual Fetch Kimi /condiment_papers/03_Olives_and_Pickles/Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers.pdf`: duplicate-existing-pages-same-DOI shavali-gilani2025
- `raw/Manual Fetch Kimi /condiment_papers/03_Olives_and_Pickles/Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China.pdf`: PDF mislabeled — filename claims "Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China" but the bytes are Messia et al. 2023 "Assessment of Nutritional Value and Maillard Reaction in Different Gluten-Free Pasta" (Foods 12, 1221; DOI 10.3390/foods12061221), zero heavy-metals content. Real Han 2024 Zhejiang nickel paper already ingested at `wiki/sources/han2024-nickel-zhejiang-china.md`. Stop note appended to `data/evidence/autonomy/manual-fetch-stops-2026-05-28.md`.
- `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Assessment of toxic trace metal contamination in food spices sold in Nigerian markets.pdf`: chime2025-nigerian-spices-as-cd-pb already-ingested post-2026-05-14 clean
- `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Cadmium and lead in tomatoes and tomato products from Polish market.pdf`: grochowska-niedworok2020-cadmium-lead-tomatoes-poland (already-ingested, post-2026-05-14 clean; not in routing_unresolved or routing_malformed)

## Tick 2026-05-28T13:24:26.239Z

- Candidates this tick: 15
- Succeeded: 10
- Stopped (need Karen): 5
- Failed: 0

### Succeeded
- `meyer2018-hydrolysed-rice-formula-arsenic` (raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0007_2018_10-1111-pai-12913.pdf)
- `xu2020-uk-rice-ias-hypertension` (raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0007_2020_10-1007-s10653-020-00573-8.pdf)
- `potorti2026-tahini-quality-safety-inorganic-elements` (raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Chemical Composition and Nutritional Quality of Commercial Tahini (Sesamum indicum L.)_ Analytical,.pdf)
- `divis2020-mercury-fish-sauce-dgt-tda-aas` (raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Determination of Mercury in Fish Sauces by Thermal Decomposition Amalgamation Atomic Absorption Spec.pdf)
- `muniz2018-tomato-sauce-packaging-metals` (raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Evaluation of metals in tomato sauces stored in different types of packaging.pdf)
- `he2013-shanghai-cadmium` (raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Exposure assessment of dietary cadmium_ findings from Shanghainese over 40 years, China.pdf)
- `kangre2024-canned-tomato-pb-sn-ghana` (raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Heavy metal migration, exposure, and health risk through canned tomato mix under different marketing.pdf)
- `cfs2012-hktds-inorganic-arsenic` (raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/The First Hong Kong Total Diet Study_ Inorganic Arsenic.pdf)
- `efsa2021-aluminium-food-qa` (raw/Manual Fetch Kimi /condiment_papers/05_PB_Vanilla_Spices/Aluminum in Food (Q&A)_ Sources, Safety and Regulations.pdf)
- `hovanec2004-peanut-butter-arsenic-speciation` (raw/Manual Fetch Kimi /condiment_papers/05_PB_Vanilla_Spices/Arsenic speciation in commercially available peanut butter spread by IC-ICP-MS.pdf)

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/wl-0009_2018_10-1111-pai-12913.pdf`: existing meyer2018-hydrolysed-rice-formula-arsenic page is post-2026-05-14 clean (wl-0009 already recorded as near_duplicate)
- `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Dietary exposure to metals and other elements in the 2006 UK Total Diet Study.pdf`: byte-identical to fera2015-uk-tds-metals
- `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Heavy Metal Contamination of Hot Sauce and Chili Powder.pdf`: spex2023-hot-sauce-chili-powder-metals already ingested, post-2026-05-14 clean (updated 2026-05-17), not in routing_malformed or routing_unresolved, and audit-queue records a 2026-05-17 Codex audit (REVISE, 6/0). Skip per SKILL.md Phase 1 step 1.
- `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers.pdf`: duplicate-page conflict — two source pages on disk for DOI 10.1038/s41598-025-06896-9 (`shavalig2025-canned-tomato-olives-pickles-iran` updated 2026-05-17, full 8-metal frontmatter; `shavali-gilani2025-canned-tomato-olive-pickle-iran` updated 2026-05-13, 4-metal subset, generic raw_handle). Same conflict was stopped on 2026-05-19 and 2026-05-20 for the other two raw/ copies of this paper. Dedup requires coordinated rewrite of 22 cross-references including `review_events.jsonl` and `hmtc_aggregate_distributions.csv` — curatorial decision for Karen.
- `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/The First Hong Kong Total Diet Study_ Metallic Contaminants.pdf`: cfs2013-hktds-metallic-contaminants already-ingested duplicate, post-2026-05-14 clean
