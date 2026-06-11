---
op: lint
check: prose-frontmatter-consistency-sweep
date: 2026-06-09
model: claude-sonnet-4-6
pages_checked: 13
pages_remaining: 0
stopped_at: yam (final session — all ingredient pages covered)
---

table-mismatch 4 · prose-contradiction 0 · confidence-mismatch 2 · coverage-mismatch 0. Report-only.

**Sweep complete.** All ingredient pages in `wiki/ingredients/` with at least one analyte at `status: populated` or `status: in_progress` have been reviewed across sessions 1–9. Metal pages in `wiki/metals/` confirmed out of scope: none of the 36 metal pages carry a `contamination_profile` frontmatter block (one false positive — arsenic-total.md references the schema concept in body text; frontmatter does not contain the block).

**Clean pages:** vinegar (routing_unresolved with correctly populated body table — substantive intro citing 10 sources; no boilerplate), tomato-soup (TDS stub; body table matches frontmatter), tortilla-chips (TDS stub; body table matches frontmatter), white-sugar (TDS stub; all BDL values; intro accurately describes zero-metal-content of refined sugar; no spurious boilerplate), whole-wheat-bread (TDS stub; body table matches frontmatter; prose substantive).

**Skipped (all-null or all-pending):** vegetable-purees (all 10 analytes status:populated / n_studies:0 / null — structural node, sources:0, body all "data gap"), vegetables-mixed (all analytes status:pending, provisional_scaffold), vitamin-mineral-premix (all 10 analytes status:populated / n_studies:0 / null — same all-null/all-data-gap pattern).

---

**Systemic pattern — blank body table (P1), final count: 15 pages.** New instances this session:
- wine-vinegar (routing_unresolved; Pb n=3 [50,700] p95=1280 in frontmatter; all "—" in body table; sources:5 listed in source legend; intro and Why/Ranges sections substantive)
- tomato-paste (routing_unresolved; Pb n=2 [5,15] p95=75 and Cd n=2 [30,70] p95=280 in frontmatter; all "—" in body table; Why section quotes the Pb 5-15 ppb and Cd 30-70 ppb values verbatim from sources — informationally consistent with frontmatter but rendered as missing in the table)

Running total of blank-table P1 pages across all sessions (1–9): 15. Complete list: black-pepper, bread, cashews, fruit-juice, legumes, milk-and-dairy, parsley, peanut-oil (sessions 1–6); raspberries, soy, shark, sesame-oil (session 7); vegetables (session 8); wine-vinegar, tomato-paste (this session). The vegetables page (sources:110) and milk-and-dairy page (sources:94) remain the richest instances. Two confirmed non-routing_unresolved blank-table pages: soy and vegetables — different cause from the routing_unresolved class.

**New P1 instance — iAs propagation across bread matrices (third occurrence):** wheat-cereal-biscuits has iAs [0,230] p95=260 n=1 confidence:high from sources:1 (fsa2016-infant-food-formula-metals-survey). The exact same values appeared on white-bread ([0,230] p95=260 n=1 high, session 8) and chapattis ([0,230] p95=260 n=1 high, session 2). Three distinct bread/grain matrices carry identical iAs values from the same FSA source, consistent with a single FSA Table 6 composite row applied to multiple ingredient pages during stub generation rather than derived from matrix-specific measurements.

**New P1 instance — Al propagation across bread matrices:** wholemeal-bread carries Al [0,4292] p95=6160 n=1 confidence:high from FSA; wheat-cereal-biscuits carries the same Al [0,4292] p95=6160 n=1 confidence:high. Two distinct bread products with identical Al values from the same FSA source — same propagation pattern as the iAs case above.

**New P1 instance — sources:0 provenance gap:** wholemeal-bread has sources:0 yet 7 analytes are populated (Pb n=1, Cd n=1, iAs n=1, tHg n=1, Al n=1, Sn n=1 — all status:populated with real values; tHg n=1 confidence:medium). The intro attributes values to fsa2016-infant-food-formula-metals-survey but no source page is linked. Running total of sources:0-with-populated-values pages across all sessions: 4 (custard, fromage-frais, root-vegetable-purees, wholemeal-bread).

**Systemic pattern — TDS sources:1/n_studies:2 (P1), continued:** tomato-soup (sources:1, fda2022-tds; all populated analytes n=2) and tortilla-chips (sources:1, fda2022-tds; all populated analytes n=2) follow the established pattern. Not individually rowed; body tables correct; mismatch confined to n_studies:2 from one source document.

**Systemic pattern — FSA stub boilerplate (P2), continued:** yam ("Exact concentration values remain in progress until Table 6 is parsed" while Pb n=1 and Cd n=1 are populated; body table correctly shows these values); water ("Exact concentration values remain in progress until Table 6 is parsed" while sources:52 with 10 analytes populated from entirely non-FSA sources — olowoyo2026, dorevitch2024, levin2024, epa-iris, efsa-nickel etc.; the FSA attribution is doubly wrong because the actual data came from different sources); wheat-cereal-biscuits (same boilerplate; Profile State "in_progress"; data from fsa2016, not from non-FSA sources in this case — attribution is correct but the "in progress" framing is stale). Same pattern as dozens of prior sessions.

**Systemic pattern — n=1/null anomaly (P1), prior session note:** vegetable-oils (from prior session 9 context, before this read block) carries tHg n_studies:1 with typical_ppb:[null,null] and confidence:null — same systemic pattern documented on rapeseed-oil, soybean-oil, spices, tea, turmeric (sessions 7–8). Body table correctly renders this as n=1 with all-dash cells; issue is frontmatter internal inconsistency.

---

| Page | Analyte | Frontmatter value | Prose / table claim | Mismatch type | Which looks stale |
|---|---|---|---|---|---|
| [[../ingredients/wine-vinegar\|wine-vinegar]] | Pb | status:populated; typical_ppb:[50,700]; p95_ppb:1280; confidence:low; n_studies:3; sources:5 | Body table shows "—" for all 10 analytes including Pb n=3; intro and Why section are substantive and correctly describe 50–700 ppb Pb range from Ndung'u 2004, Acosta 1993, Troncoso 1988 | P1 table≠frontmatter | Body table — routing_unresolved blank-table pattern; 14th blank-table page; notable contrast between substantive prose correctly citing quantitative Pb range and body table presenting every analyte as data gap |
| [[../ingredients/tomato-paste\|tomato-paste]] | Pb, Cd | Pb [5,15] p95=75 n=2 low; Cd [30,70] p95=280 n=2 low; sources:7; routing_unresolved | Body table shows "—" for all 10 analytes; Why section explicitly states "Pb at 5-15 ppb and Cd at 30-70 ppb in commercial canned paste" — verbatim match to frontmatter values, but rendered as data gaps in the table; Ranges section also cites these values | P1 table≠frontmatter | Body table — routing_unresolved blank-table pattern; 15th blank-table page; the Why section reads as though the data is present (it is, in frontmatter), but the table says otherwise — the intra-page contradiction is particularly visible here |
| [[../ingredients/wheat-cereal-biscuits\|wheat-cereal-biscuits]] | iAs | status:populated; typical_ppb:[0,230]; p95_ppb:260; confidence:high; n_studies:1; sources:1 (fsa2016) | Body table correctly renders iAs as n=1 / 0–230 / 260 / high; Key sources "—" (no citation) | P1 table≠frontmatter | Frontmatter — iAs [0,230] p95=260 is identical to white-bread (session 8) and chapattis (session 2); three distinct bread/grain matrices with the same iAs values from the same FSA source; most parsimonious explanation is the FSA Table 6 composite row was applied to all three pages during stub generation; since iAs values should differ materially between white bread (refined), wholemeal-blend, and whole-wheat biscuit, at least two of the three values are incorrect |
| [[../ingredients/wholemeal-bread\|wholemeal-bread]] | Pb, Cd, iAs, tHg, Al, Sn | 7 analytes populated (Pb n=1 low [31.6,65.5] p95=70.8; Cd n=1 low [11,31] p95=35.5; iAs n=1 low [22.6,25] p95=25; tHg n=1 medium [0,1.7] p95=2.1; Al n=1 high [0,4292] p95=6160; Sn n=1 low [0.7,6.0] p95=6.4); sources:0 | Body table correctly renders all values but Key sources "—" for every row; page notes zero sources despite populated values | P1 table≠frontmatter | Frontmatter (sources:0) — 7 analytes populated from FSA/Fera per intro attribution but no source page linked; same sources:0-with-values provenance gap as custard, fromage-frais, root-vegetable-purees. Secondary flag: Al [0,4292] p95=6160 is identical to wheat-cereal-biscuits (above); same propagation concern |
| [[../ingredients/wheat-cereal-biscuits\|wheat-cereal-biscuits]] | Cd, iAs, tHg, Al, Sn | Cd n=1 high; iAs n=1 high; tHg n=1 high; Al n=1 high; Sn n=1 high — all from fsa2016, sole source | Body table renders confidence:high for five n=1 analytes; Key sources "—" for all rows; Profile State "in_progress" | P2 confidence-mismatch | Prose — five analytes show n=1 with confidence:high; per the established pattern (e.g. melon, lentils, chapattis, white-fish), confidence should be low for n=1 regardless of source quality; the FSA survey had many samples per composite food, but n_studies:1 on this page means one source document, not one sample; confidence:high overstates certainty |
| [[../ingredients/white-fish\|white-fish]] | Pb, tHg | Pb n=1 high [0,60] p95=80; tHg n=1 high [4.9,570] p95=900.3; from fsa2016, sources:4 | Body table correctly renders both values with confidence:high; Key sources "—" for all populated rows; Profile State "in_progress" | P2 confidence-mismatch | Prose — Pb and tHg show n=1 with confidence:high; same pattern as wheat-cereal-biscuits; tHg [4.9,570] with a >100× spread between p10 and p90 from a single source is itself a distribution anomaly worth noting (could reflect wild species vs. farmed vs. organ vs. muscle heterogeneity in the FSA composite), but the primary finding is the confidence:high for n=1 |

---

**Sweep complete. All 36 metal pages confirmed out of scope (no contamination_profile frontmatter block in any metal page). All ingredient pages with at least one populated or in_progress analyte have been reviewed across sessions 1–9.**
