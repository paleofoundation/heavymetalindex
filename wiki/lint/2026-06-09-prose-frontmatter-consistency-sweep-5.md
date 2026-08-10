---
op: lint
check: prose-frontmatter-consistency-sweep
date: 2026-06-09
model: claude-sonnet-4-6
pages_checked: 11
pages_remaining: ~210
stopped_at: non-apple-fruit
noindex: true
---

table-mismatch 5 · prose-contradiction 0 · confidence-mismatch 4 · coverage-mismatch 0. Report-only.

**Systemic pattern — TDS "in_progress" boilerplate, continued:** The following new TDS stub pages carry "Contamination Profile State: in_progress for analytes measured in the TDS file" boilerplate despite all analytes being `status: populated` in frontmatter with correct body tables: macaroni-and-cheese, margarine, mayonnaise. Not individually rowed; body tables are correct; mismatch confined to status-section boilerplate. Same systemic pattern as sessions 2, 3, 4.

**Systemic pattern — TDS sources:1/n_studies:2, continued:** macaroni-and-cheese (sources:1), margarine (sources:1), and mayonnaise (sources:1) all follow the same pattern flagged in prior sessions. Individually rowed below as P1.

**New blank-table P1 instances:** legumes and milk-and-dairy both have body tables where every analyte row shows "—" (all dashes) despite populated frontmatter values. milk-and-dairy is a particularly rich page (sources:94, up to n=21 studies per analyte). legumes has Pb n=3, Cd n=3, Ni n=4 in frontmatter. Same pattern as black-pepper, bread, cashews, fruit-juice (prior sessions).

| Page | Analyte | Frontmatter value | Prose / table claim | Mismatch type | Which looks stale |
|---|---|---|---|---|---|
| [[../ingredients/macaroni-and-cheese\|macaroni-and-cheese]] | all populated analytes | n_studies: 2 per analyte (Pb, Cd, tAs, tHg, Ni, Cr, U); sources: 1 (sole source: fda2022-tds-elements-fy2018-fy2020) | Body table shows n=2 for all populated analytes; only 1 source in legend | P1 table≠frontmatter | n_studies in frontmatter — same TDS sources:1/n_studies:2 pattern as prior sessions |
| [[../ingredients/margarine\|margarine]] | all populated analytes | n_studies: 2 per analyte (Pb, Cd, tAs, tHg, Ni, Cr, U); sources: 1 | Body table shows n=2 for all populated analytes; only 1 source in legend | P1 table≠frontmatter | n_studies in frontmatter — same TDS sources:1/n_studies:2 pattern |
| [[../ingredients/mayonnaise\|mayonnaise]] | all populated analytes | n_studies: 2 per analyte (Pb, Cd, tAs, tHg, Ni, Cr, U); sources: 1 | Body table shows n=2 for all populated analytes; only 1 source in legend | P1 table≠frontmatter | n_studies in frontmatter — same TDS sources:1/n_studies:2 pattern |
| [[../ingredients/milk-and-dairy\|milk-and-dairy]] | Pb, Cd, iAs, tHg, Ni, Al, tAs, Cr, Sn (9 analytes) | Pb [1,15] p95=50 n=20 high; Cd [0,3] p95=10 n=21 high; iAs [4,20] n=6 medium; tHg [0,2] n=14 high; Ni [25,50] n=11 high; Al [130,700] p95=1500 n=12 high; tAs [1,5] n=16 high; Cr [10,30] n=9 medium; Sn [0,50] n=5 medium; sources:94 | Body table shows "—" for all 10 analytes (every row blank). "Ranges by source, region, and variety" section: "Pending dairy-specific occurrence extraction" | P1 table≠frontmatter | Body table — generator ran before synthesis; same blank-table pattern as black-pepper, cashews, fruit-juice, legumes |
| [[../ingredients/legumes\|legumes]] | Pb, Cd, Ni | Pb [5,35] p95=35 n=3 medium; Cd [5,42] p95=42 n=3 medium; Ni [813,3094] p95=7752 n=4 medium; sources:30 | Body table shows "—" for all 10 analytes. Intro: "values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources" | P1 table≠frontmatter | Body table — generator ran before synthesis; Pb, Cd, Ni are populated; intro references the (stale) body table as if it shows data gaps |
| [[../ingredients/lentils\|lentils]] | Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn (9 analytes) | Pb [13.8,46.3] p95=47.2 n=8; Cd [0,10] p95=18.3 n=11; tAs [10,50] p95=100 n=6; Ni [400,1500] p95=2500 n=4; Sn [12.5,60.4] p95=94.6 n=4 — all status:populated | Intro: "FSA/Fera measured this ingredient… Exact concentration values remain in progress until Table 6 is parsed"; profile state: "in_progress" | P2 confidence-mismatch | Prose — 9 analytes populated from sources:23; intro and profile state not updated; body table correctly shows values |
| [[../ingredients/melon\|melon]] | Pb, Cd, tHg | Pb [0,4.8] p95=20.7 n=1 high; Cd [0,10] p95=12.6 n=1 high; tHg [0,0.1] p95=0.2 n=1 high | Intro: "Exact concentration values remain in progress until Table 6 is parsed"; profile state: "in_progress" | P2 confidence-mismatch | Prose — 3 analytes populated; intro and profile state not updated after synthesis; body table correct |
| [[../ingredients/milk-and-dairy\|milk-and-dairy]] | all analytes | 9 analytes populated — see P1 row above | "Ranges by source, region, and variety": "Pending dairy-specific occurrence extraction. Formula-specific values remain filed under the relevant product pages." | P2 confidence-mismatch | "Ranges" prose — describes a pre-synthesis state; 9 analytes have been synthesized from up to 21 contributing sources |
| [[../ingredients/non-apple-fruit\|non-apple-fruit]] | Pb, Cd, iAs, tHg, Al, Sn (6 analytes) | Pb [0,13.4] p95=15.6 n=1 low; Cd [0,11.3] p95=17.9 n=1 high; iAs [0,0] p95=0 n=1 medium; tHg [0,1.9] p95=9.4 n=1 high; Al [0,3075] p95=3918 n=1 low; Sn [53.5,32000] p95=32900 n=1 low | Intro: "Exact concentrations remain in progress until Table 6 is parsed"; profile state: "in_progress" | P2 confidence-mismatch | Prose — 6 analytes populated; intro and profile state not updated after synthesis; body table correctly shows values; note Sn [53.5–32000] p95=32900 is an unusually wide range (3 orders of magnitude) from a single FSA/Fera composite — may warrant resynthesis scrutiny |
