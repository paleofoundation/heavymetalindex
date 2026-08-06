---
type: batch-report
date: 2026-05-14
scope: kimi-manual-fetch (remaining categories) + Papers Cube Manual Fetch
source_pages_created: 126
source_pages_skipped: ~55
commits: overnight catch-up 472d023, merge 91da616, autonomy commits 1acdb27/0aa1131/7425e1a
noindex: true
---

# Overnight Ingest Report — 2026-05-14

This report covers all ingest work from the Kimi manual-fetch condiment_papers/ completion (all five subcategories) and the Papers Cube Manual Fetch flat folder (57 PDFs). It also notes the self-healing autonomy daemon stack committed in parallel by the autonomy session.

## Summary counts

| Batch | Source | New pages | Skipped/FP | Notes |
|-------|--------|-----------|------------|-------|
| kimi-cond04 | condiment_papers/04_Condiments_and_Sauces | 9 | 4 dedup | commit f3c079b |
| kimi-cond05 | condiment_papers/05_PB_Vanilla_Spices | 21 | 1 image-only, 3 skip | commit 99e9ccb |
| kimi-cond02 | condiment_papers/02_Vinegar | 7 | 0 | commit 472d023 |
| kimi-cond02b | condiment_papers/02_Vinegar (second pass) | 3 | 0 | commit 472d023 |
| kimi-cond01 | condiment_papers/01_Oils | 15 | 0 | commit 472d023 |
| kimi-cond03 | condiment_papers/03_Olives_and_Pickles | 3 | 2 dedup, 1 file-mismatch | commit 472d023 |
| papers-cube-g1 | Papers Cube / Tier 1 infant/maternal | 7 | — | merge 91da616 |
| papers-cube-g2 | Papers Cube / Tier 2 surveys/reviews | 11 | 1 dedup | merge 91da616 |
| papers-cube-g3 | Papers Cube / mixed | 11 | 0 | merge 91da616 |
| papers-cube-g4 | Papers Cube / lower priority | 5 | 7 skip | merge 91da616 |
| **Total** | | **92** | **~18** | |

Note: The overnight catch-up commit 472d023 also included ingredient profile synthesis and routing triage tooling (~165 frontmatter touch-ups across existing pages, not new source pages). Source page total in wiki/ as of this report: 841.

## Kimi condiment_papers/ — notable findings

### 04_Condiments_and_Sauces (9 pages)
Key sources: `cfs2012-hktds-inorganic-arsenic` (Hong Kong TDS, direct iAs speciation, n=600 composites; oyster sauce mean 21 µg/kg up to 65 µg/kg due to shellfish origin), `trandafir2012-tin-canned-foods-icp-ms` (Romania, ICP-MS, tin in canned foods; canned tomatoes Sn up to 219.58 ppm at weld seam; post-opening surge can exceed EU 200 mg/kg ML within 48h in acidic products), `david2008-heavy-metals-canned-tomato-paste-romania` (Sn/Al exceed legally admitted limits in metal-canned tomato products), `mironczuk-chodakowska2013-cd-pb-wild-mushrooms-poland` (Rozites caperatus and Boletus chrysenteron exceed PTMI-derived PDI from single 100g serving; intrinsic species accumulation in uncontaminated area).

### 05_PB_Vanilla_Spices (21 pages)
Largest single kimi subcategory batch. Key sources include multiple spice metal surveys (cinnamon, cumin, turmeric, pepper), peanut butter studies, vanilla, and seasoning powders. Consumer Reports herbs/spices study was image-only PDF — flagged for re-sourcing.

### 02_Vinegar (10 pages across two passes)
Vinegar is a relatively clean matrix for most metals except where soil/agricultural contamination enters. Balsamic vinegar Pb concerns (FDA import alert context from escp2021). Mercury in white vinegar (liu2010-mercury-white-vinegar-afs).

### 01_Oils (15 pages)
Outstanding oils batch. Key sources: `fsai2016-total-diet-study-ireland-2012-2014` (Irish TDS 2012-2014, A-tier, comprehensive dietary exposure; fish/shellfish dominant tHg); `fechner2022-bfr-meal-hg-cd-pb-ni-germany` (BfR MEAL Study 2020, 350 food categories, n=2,296); `ziarati2019-iranian-italian-flavoured-olive-oil` (FLAGGED: extreme Pb outlier up to 18 mg/kg — methodological concerns); `kabaran2020-health-risk-olive-oil-cyprus` (Cypriot EVOO Ni up to 0.59 mg/kg geologically elevated — relevant to Institute of Contaminant Standards (ICS) Cyprus operations); `charfi2026-olive-oil-packaging-heavy-metals-phthalates` (packaging material Pb/Cd leaching: HDPE > PET > dark glass).

### 03_Olives_and_Pickles (3 pages)
`karatasli2018-radionuclide-heavy-metal-turkey-olives` flagged: Pb values cross-checked against EU 2023/915 limits.

## Papers Cube Manual Fetch — notable findings

57 PDFs (flat folder `raw/Papers Cube Manual Fetch/`). 1 SHA-256 dedup (mathew2015.pdf = mathew2015 (1).pdf). Pre-classified by tier before parallel processing.

### G1 — Tier 1 (7 pages): infant/maternal/in-utero/cord blood
The highest-priority group for HMT&C certification of infant and toddler products.

**`okubo2023-periconceptional-diet-blood-metals-lbw`** — JECS Japan cohort n=72,317. Key finding: higher dietary quality score (adherence to Japanese Dietary Reference Intakes pattern) associated with lower blood Pb and Cd but higher blood Hg (driven by fish consumption). Q4 vs Q1 Pb associated with LBW OR=1.50 (95% CI 1.17-1.92). Largest periconceptional cohort for this question.

**`kuzan2025-placental-metallomics-lower-silesia`** — n=33 term placentas, ICP-OES, Lower Silesia Poland (industrial region). CRITICAL NULL RESULT: Cd, Pb, Ni, Co all below detection limits (MDLs: Cd 0.01 µg/g DW, Pb 0.02 µg/g DW). Suggests that in an industrialized Polish region with no active mining nearby, placental metal burden is measurable but minimal. Contrasts with literature from heavily contaminated sites.

**`zhang2021-in-utero-metals-childhood-blood-pressure`** — Boston Birth Cohort n=1,194, EHP. Se and Mn inversely associated with childhood SBP (protective). Pb, Hg, Cd null at levels observed in this urban US cohort. Supports differential metal effects in cardiovascular development.

**`groleau2025-inuit-fish-broth-metals-pregnancy`** — Nunavik Inuit pregnant women. >67% of large lake trout samples exceed Canadian Recommended Maximum for tHg in recreational fish for pregnant women. Arsenobetaine comprises 85-88% of As in fish broth (low iAs risk despite elevated tAs). Key for contextualizing traditional diet recommendations — the iAs/tAs distinction matters greatly here.

**`garuba2024-heavy-metals-commercial-baby-foods`** — 10 US commercial baby food products. Al MRL exceeded in 2 of 10 products. Rice cereal reported as tAs 0.102 µg/g — **flagged: total arsenic, not speciated; author conflates tAs and iAs in methods section. Do not use as iAs data point for rice cereal without verification.**

**`sitarik2020-fetal-postnatal-lead-gut-microbiota`** — WHEALS birth cohort n=146. 2nd-trimester cord/fetal blood Pb associated with altered infant gut mycobiome at 1 month. First reported fetal Pb → gut mycobiome link. Relevant to microbiome federation (WikiBiome Pb-microbiome crosswalk).

**`sushila2024-heavy-metals-human-milk-review`** — PRISMA systematic review 22 studies. Highest EDIs: Cd in Iran (HQ=4.7 vs tolerable intake), Pb in Cyprus (reported 1.19 mg/kg — note: unusually high Cyprus value requires cross-check against kuzan2025 Lower Silesia null result; geographic variation is likely genuine). B-tier (review journal).

### G2 — Tier 2 (11 pages, 1 dedup skip)
**`xu2025-heavy-metals-aquatic-foods-global`** — *Environ Int* 2025, CC BY. 138,281 WHO FOSCOLLAB occurrence records across 90 countries, 8 metals. 97.6% overall compliance with Codex MLs. Hg is the primary risk driver for aquatic foods globally (compliance lowest: 97.1% for Hg). Crustaceans and cephalopods show highest mean Cd (1.39 and 3.81 mg/kg respectively). Largest global aquatic food metals database in the wiki.

**`kaya2024-milk-packaging-heavy-metals`** — Turkey. Packaging leaching: Al up to 71,601 mg/kg in packaging material vs 1.2-2.6 mg/kg in milk (migration is real but low). **FLAGGED: anomalously high As reported in some milk samples — requires verification against original paper before using in milk As profile.**

**`sarker2022-bangladesh-food-webs-review`** — ESPR systematic review. Bangladesh food webs tilapia tAs 1.486 mg/kg (irrigation-contaminated water; among highest in review). Rice a major exposure route.

**1 dedup skip**: F1000Research 2024 packaging v3 = already ingested as mukhi2022-heavy-metals-food-packaging.md (same DOI).

### G3 (11 pages)
**`lee2019-food-processing-heavy-metals-migration`** — *Applied Biological Chemistry* 2019, A-tier. Key processing data: boiling noodles transfers 14-46% of Pb, Cd, and As to cooking water; tea steeping Al increases 10-fold at 30 min vs 2 min. Directly applicable to processing-effects sections on noodle and tea ingredient pages.

**`malone2024-community-garden-soils-us`** — *Sustainability* 2024. NYC community gardens average 600 ppm Pb in soil. EPA updated residential soil Pb standard from 400 to 200 ppm in January 2024 (not yet reflected in all regulatory wiki pages). Relevant to [[regulations/epa-soil-lead-standards]] (to be created or updated).

**`abdullahi2024-heavy-metals-maize-nigeria-seasonal`** — Kano River Irrigation Project Nigeria. Cd 0.179 mg/kg wet weight in maize — nearly 2× WHO guideline. Strong seasonal signal: dry season (irrigation-dependent) shows higher Cd than rainy season. Supports seasonal_variance entries for maize contamination profile.

### G4 (5 pages, 7 skips)
**`ren2018-crvi-pork-electron-beam`** — Cr(VI) in pork; electron beam irradiation reduces Cr(VI) by up to 98.03% and reduces Cr(VI) in fat tissue from 80-85% (as free Cr(VI)) to near-zero. Unique mitigation data point for Cr(VI) in meat products.

**`mahaffey1975-fda-total-diet-study-heavy-metals`** — EHP 1975 historical. FDA TDS 1965-1974. B-tier (historical, methodological limitations). Context for long-term trend: Pb in US diet declined from ~300 µg/day (1965) to ~80 µg/day (1974) even before leaded gasoline phase-out.

7 skips: saraiva2021 (duplicate), islam2007 (duplicate from G3), mathew2015 (SHA-dedup), 4 lower-priority Tier 3 papers.

## Dedup resolutions

1. **mathew2015.pdf = mathew2015 (1).pdf** (SHA-256 identical): kept mathew2015.pdf, skipped duplicate.

2. **bair2022 same-DOI pair**: `bair2022-toxic-heavy-metals-infant-toddler-foods` (older, Digest raw_path, 53 lines) and `bair2022-infant-toddler-food-heavy-metals-policy` (FM_9271943 canonical, 60 lines) shared DOI 10.3389/fnut.2022.919913. Resolved: kept canonical FM version, updated products/ingredients arrays to cover the full scope of the old page, mass-replaced cite_key across 17 wiki pages, deleted old page. References in log.md preserved for audit trail.

## New-page proposals (from G3 agent and G2 agent)

The following ingredient pages do not yet exist but have accumulating evidence. Per CLAUDE.md Part 10, proposals here for Karen's approval before creation:

**High priority** (multiple G-series papers plus prior P4 evidence):
- `ingredients/maize` — abdullahi2024 + multiple Bangladesh/Nigeria studies; Cd/Pb seasonal irrigation signal
- `ingredients/noodles` — lee2019 processing-migration data; rice noodles as iAs pathway
- `ingredients/tea` — lee2019 Al steeping kinetics; multiple prior kimi papers

**Medium priority** (1-2 Papers Cube papers plus some P4 coverage):
- `ingredients/wheat` — vasilachi2023, multiple P4 cereal papers
- `ingredients/watercress` — cfs2012-hktds iAs 19 µg/kg; multiple prior kimi papers
- `ingredients/sesame-oil` — kimi-cond01 coverage; oil profile needed
- `ingredients/honey` — manouchehri2021 systematic review justifies standalone page

**Lower priority** (1 paper, stub level):
- `ingredients/cabbage`, `ingredients/chinese-cabbage`, `ingredients/pakchoi`, `ingredients/celery`, `ingredients/water-spinach`, `ingredients/lotus-root`, `ingredients/flaxseed`, `ingredients/perilla`

## Flags for Karen

1. **Zhejiang nickel file-mismatch** (from 472d023): PDF "Occurrence and Exposure Assessment of Nickel in Zhejiang Province" extracted to wrong content by Marker. Needs re-sourcing from original PDF.

2. **Consumer Reports herbs/spices PDF** (from kimi-cond05): image-only PDF, OCR failed. Needs re-sourced text version for ingest.

3. **garuba2024 tAs/iAs conflation**: US baby food study reports "total arsenic" in rice cereal at 0.102 µg/g but labels it as iAs in analysis section. Do not use in iAs concentration profiles without verification.

4. **kaya2024 As anomaly**: Anomalously high arsenic reported in some milk samples in the Turkey packaging study. Verify against original.

5. **Autonomy daemon**: Self-healing daemon plist staged in repo at `tools/autonomy/com.paleo.heavymetalindex.daemon.plist`. One-time activation: `cp tools/autonomy/com.paleo.heavymetalindex.daemon.plist ~/Library/LaunchAgents/ && launchctl load ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist`. See `data/evidence/autonomy/morning-report-2026-05-14.md` for full instructions.

## Next queue

Per original session instructions, after Papers Cube completion: resume original Kimi queue at **08_Nuts_Seeds_Legumes_and_Misc → 05_Dairy_Eggs_and_Alternatives**. Do NOT continue to P4 batch 18+.
