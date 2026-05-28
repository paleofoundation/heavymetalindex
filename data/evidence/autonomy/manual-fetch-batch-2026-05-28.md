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
