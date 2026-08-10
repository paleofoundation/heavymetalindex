---
op: lint
check: prose-frontmatter-consistency-sweep
date: 2026-06-09
model: claude-sonnet-4-6
pages_checked: 20
pages_remaining: ~274
stopped_at: blueberry-muffin
noindex: true
---

table-mismatch 2 · prose-contradiction 1 · confidence-mismatch 7 · coverage-mismatch 3. Report-only.

| Page | Analyte | Frontmatter value | Prose / table claim | Mismatch type | Which looks stale |
|---|---|---|---|---|---|
| [[../ingredients/black-pepper\|black-pepper]] | Pb, Cd, tAs, tHg, Ni, Al, Cr (all) | status: populated; Pb [10,130] p95=370, Cd [20,80] p95=100, tAs [50,200] p95=1700, tHg [1,10], Ni [850,2080] p95=4800, Al [10000,60000] p95=178000, Cr [100,600] p95=2400 | Body table shows "—" for every analyte (Coverage, Typical, p95, Confidence, Key sources all blank) | P1 table≠frontmatter | Body table — frontmatter was populated after the table was generated or the generator never ran for this page |
| [[../ingredients/blueberry-muffin\|blueberry-muffin]] | all populated analytes | frontmatter n_studies: 2; sources: 1; source legend has 1 entry | Body table shows n=2 for all analytes; page note says "These distributions count as one source under...synthesis discipline" | P1 table≠frontmatter | n_studies in frontmatter — page's own prose says TDS = 1 source, but frontmatter and table show n=2 |
| [[../ingredients/beef\|beef]] | Ni | typical_ppb: [50,200]; p95_ppb: 15000; confidence: medium; n_studies: 3 | Prose: "Nickel, aluminum, chromium, and tin in beef are typically at background levels reflecting cattle-feed and environmental-exposure baselines" | P1 prose-contradiction | Prose — p95 of 15,000 ppb (75× the typical upper bound) is not consistent with a "background levels" characterization |
| [[../ingredients/almond\|almond]] | all analytes | status: populated; Pb [10,220], Cd [10,30], tAs [1,10], tHg [1,10], Ni [1000,1500], Cr [100,253] with real values | Prose intro: "Occurrence values remain pending until a source is promoted for this ingredient." Contamination Profile State section: "pending" | P2 confidence-mismatch | Prose — frontmatter was populated by synthesis but the stub boilerplate was not updated |
| [[../ingredients/baked-beans\|baked-beans]] | Pb, tHg, Al, Sn | Pb [0,39] p95=63; tHg [0,1] p95=4.2; Al [1015,3692] p95=3911; Sn [33.6,82.8] p95=85.2 | Prose: "specific quantitative values from that source remain in progress pending table extraction" | P2 confidence-mismatch | Prose — frontmatter has real extracted values; prose describes pre-extraction state |
| [[../ingredients/banana\|banana]] | all analytes | status: populated with multiple analytes having real values | Prose intro: "Exact concentration values remain in progress"; Contamination Profile State: "in_progress" | P2 confidence-mismatch | Prose — frontmatter has populated values; body table shows them correctly |
| [[../ingredients/beef\|beef]] | all analytes | status: populated for Pb, Cd, tAs, tHg, Ni, Al, Cr (n_studies ≥ 3 each) | Contamination Profile State section: "pending" | P2 confidence-mismatch | Prose — 7 analytes are populated in frontmatter; profile state section was not updated after synthesis |
| [[../ingredients/beet\|beet]] | Pb, Cd | Pb: typical [5,35] n_studies=2; Cd: typical [5,15] n_studies=2; both status: populated | Prose intro: "Occurrence values remain pending"; Contamination Profile State: "pending" | P2 confidence-mismatch | Prose — frontmatter has real values from two studies; stub boilerplate not updated |
| [[../ingredients/bivalve-molluscs\|bivalve-molluscs]] | Pb, iAs, tHg, Ni | Pb [100,500] p95=1500; iAs [20,100]; tHg [10,80] p95=150; Ni [200,1500] — all status: populated | "Other metals of concern" section: "_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves_" | P2 confidence-mismatch | Prose — the "pending" section was not removed after those analytes were ingested |
| [[../ingredients/blueberries\|blueberries]] | Pb, Cd, tHg | Pb [0,24] p95=33.5 n=1; Cd [0,2] p95=4 n=1; tHg [0,2.9] p95=3.2 n=1 — all status: populated; body table cites Mania 2021 | Prose intro: "Exact concentration values remain in progress until Table 6 is parsed" (referring to FSA/Fera survey) | P2 confidence-mismatch | Prose intro — values were populated from Mania 2021; intro still describes pending extraction from the FSA/Fera source |
| [[../ingredients/baked-beans\|baked-beans]] | tHg | status: populated; typical [0,1] p95=4.2 n_studies=1 confidence: medium | tHg not mentioned anywhere in prose narrative | P3 coverage-mismatch | Prose — tHg analyte is populated in frontmatter and body table but absent from all prose discussion |
| [[../ingredients/banana\|banana]] | Sn | status: populated; typical [1.5,13.4] p95=14.2 n_studies=1 confidence: low | Sn not mentioned anywhere in prose narrative | P3 coverage-mismatch | Prose — Sn analyte is populated in frontmatter and body table but absent from prose |
| [[../ingredients/blueberries\|blueberries]] | source attribution | body table attributes Pb/Cd/tHg values to Mania 2021; sources: 5 (five entries in legend) | "Ranges" section: "The FSA/Fera UK survey…is the sole occurrence source in the current corpus. Quantitative values from that source are in progress pending structured extraction." | P3 coverage-mismatch | "Ranges" section prose — values came from Mania 2021, not FSA/Fera; the "Ranges" section describes an older state of the page before Mania 2021 was ingested |
