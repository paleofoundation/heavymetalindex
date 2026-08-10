---
op: lint
check: prose-frontmatter-consistency-sweep
date: 2026-06-09
model: claude-sonnet-4-6
pages_checked: 20
pages_remaining: ~254
stopped_at: chicken-noodle-soup
noindex: true
---

table-mismatch 4 · prose-contradiction 0 · confidence-mismatch 7 · coverage-mismatch 0. Report-only.

**Systemic pattern — TDS boilerplate not updated:** Many TDS-stub pages (bologna-luncheon-meat, butter, canned-corn, canned-mushrooms, cauliflower, celery) carry the boilerplate "Contamination Profile State: in_progress for analytes measured in the TDS file" even though those analytes are now `status: populated` with real values in the frontmatter and the body table shows the correct numbers. This is widespread P2 across the TDS stub class; not individually rowed below since the body table is correct and the mismatch is confined to the status-section boilerplate.

| Page | Analyte | Frontmatter value | Prose / table claim | Mismatch type | Which looks stale |
|---|---|---|---|---|---|
| [[../ingredients/bread\|bread]] | Cr | status: populated; typical [50,200] n_studies=2 (all other analytes null) | Body table shows "—" for all 10 analytes including Cr | P1 table≠frontmatter | Body table — generated before or without Cr being populated; same blank-table pattern as black-pepper (session 1) |
| [[../ingredients/cashews\|cashews]] | Pb, Cd, Ni, Cr | Pb [10,32] p95=80; Cd [2,15] p95=30; Ni [4000,6500] p95=9000; Cr [150,250] p95=400 — all status: populated | Body table shows "—" for all 10 analytes | P1 table≠frontmatter | Body table — routing_unresolved page; table not regenerated after synthesis; same pattern as black-pepper (session 1) |
| [[../ingredients/bran-cereal-with-raisins\|bran-cereal-with-raisins]] | all populated analytes | n_studies: 2 per analyte (Pb, Cd, tAs, tHg, Ni, Cr, U); sources: 1 (sole source: fda2022-tds-elements-fy2018-fy2020) | Body table shows n=2 for all populated analytes; only 1 source in legend; the methodology note states TDS counts as 1 source | P1 table≠frontmatter | n_studies in frontmatter — page claims n=2 studies per analyte but only 1 source document (TDS) is listed; same pattern as blueberry-muffin (session 1) |
| [[../ingredients/chicken-noodle-soup\|chicken-noodle-soup]] | all populated analytes | n_studies: 2 per analyte; sources: 1 (sole source: fda2022-tds-elements-fy2018-fy2020) | Body table shows n=2 for all populated analytes; only 1 source in legend | P1 table≠frontmatter | n_studies in frontmatter — same pattern as bran-cereal-with-raisins and blueberry-muffin |
| [[../ingredients/breastmilk\|breastmilk]] | Pb, Cd, tAs, tHg, Al, Cr | Pb n=10 [0.1,13] p95=41; Cd n=9 [0.01,1.4]; tAs n=10 [0.1,2.8]; tHg n=8 [0.04,14]; Al n=3 [9,80]; Cr n=4 [0.6,1.5] — all status: populated | "Contamination Profile State: All ten contamination_profile sub-blocks are `pending`" | P2 confidence-mismatch | Prose — 6 analytes have real data with n=3 to 10 studies each; profile state is factually incorrect |
| [[../ingredients/broccoli\|broccoli]] | Pb, Cd, tAs, tHg, Ni, Cr, U | e.g. Cd [6.7,27.6] p95=37 n_studies=3 status: populated | Intro: "FSA/Fera measured this ingredient... Exact concentration values remain in progress until Table 6 is parsed" | P2 confidence-mismatch | Prose intro — values were populated from multiple sources; stub boilerplate not updated |
| [[../ingredients/butternut-squash\|butternut-squash]] | Pb, Cd, iAs, tHg, Al, Sn | e.g. iAs [5.2,43.2] p95=45.6; Al [0,3215] p95=3478 — all status: populated | Intro: "Exact concentration values remain in progress until Table 6 is parsed" | P2 confidence-mismatch | Prose intro — values exist in frontmatter and body table; stub boilerplate not updated |
| [[../ingredients/camellia-sinensis\|camellia-sinensis]] | Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn (8 analytes) | e.g. Pb [400,1500] p95=5000 n=13; Al [200000,500000] p95=975000 n=6 — all status: populated | "Contamination Profile State: The machine-readable contamination profile is `pending`" | P2 confidence-mismatch | Prose — 8 analytes populated with real multi-study data; profile state unchanged from stub creation |
| [[../ingredients/carrot\|carrot]] | Pb, Cd, iAs, tHg, Al, Sn | e.g. Pb [9.5,27.5] n_studies=4; iAs [3.3,239.4] p95=384.2 n=1 — all status: populated | Intro: "Exact concentration values remain in progress until Table 6 is parsed" | P2 confidence-mismatch | Prose intro — stub boilerplate not updated after synthesis |
| [[../ingredients/chapattis\|chapattis]] | Pb, Cd, iAs, tHg, Al, Sn | e.g. iAs [0,230] p95=260 n=1 confidence: high; Al [0,4292] p95=6160 n=1 — all status: populated | Intro says "remain in progress"; "Ranges" section: "exact chapatti-specific concentration values remain pending structured extraction from Table 6" | P2 confidence-mismatch | Prose — body table has values; both intro and "Ranges" section still describe pre-extraction state |
| [[../ingredients/cheddar-cheese\|cheddar-cheese]] | Pb, Cd, tAs, tHg, Ni, Cr, U | e.g. tHg [0,0] p95=0 n_studies=3; U [0,1.2] p95=1.3 n_studies=2 — all status: populated | Intro: "Exact concentration values remain in progress until Table 6 is parsed" | P2 confidence-mismatch | Prose intro — stub boilerplate not updated; prose body correctly describes values |
