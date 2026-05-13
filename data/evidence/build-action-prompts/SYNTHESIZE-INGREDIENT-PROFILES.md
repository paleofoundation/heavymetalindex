# Session prompt: populate contamination_profile values on ingredient pages

127 ingredient pages have non-pending `contamination_profile` sub-blocks with `typical_ppb: [null, null]` — meaning research has started but no numerical values have been synthesized. This dispatch reads structured evidence and source pages, then populates the frontmatter values that drive the body-level "Heavy metal contamination profile" table.

You have full authority to act without asking. Commit in batches of 15–20 pages.

## Two evidence paths

### Path A — FDA TDS structured data (90 pages)

`data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv` contains per-ingredient, per-analyte summary rows with n, p10, p50, p90, p95, and max values already computed. For ingredient pages whose slug matches a TDS `ingredient_slug`, this CSV is the primary data source.

Column mapping:
- `typical_ppb` ← `[p10_ppb_equivalent, p90_ppb_equivalent]` (the typical range)
- `p95_ppb` ← `p95_ppb_equivalent`
- `n_studies` ← 1 (one FDA TDS study; increment if the page also has other contributing sources)
- `confidence` ← derived from `n` column: n ≥ 10 → `medium`, n ≥ 27 → `high`, n < 10 → `low`
- `status` ← `populated`
- `last_reviewed` ← today's date (2026-05-13)

**Special handling for non-detects:** When both `p10_ppb_equivalent` and `p90_ppb_equivalent` are 0 (or the `reported_zero_n` equals `n`), the analyte was not detected in the TDS. Set `typical_ppb: [0, 0]`, `p95_ppb: 0`, `status: populated`, `confidence` per the n-rule above, and `n_studies: 1`. This is a real finding (below LOQ), not a data gap. The reporting limit columns (`reporting_limit_min_ppb_equivalent`, `reporting_limit_max_ppb_equivalent`) give the LOQ context; note it in the page body if a body section for that metal exists.

**Filter to wiki metals only:** Only process rows where `metal_species` is one of: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U. Ignore rows for Ca, Cu, Fe, Mn, Se, Zn, I, Co, V, and other non-wiki-scope elements.

### Path B — Source-page synthesis (37 pages without TDS data + enrichment for established pages)

For pages without TDS coverage, or for high-source-count pages (≥ 5 contributing sources) where TDS data alone underrepresents the literature:

1. Read the ingredient page frontmatter to identify which metal sub-blocks need values.
2. Find contributing source pages. Two methods:
   - Grep `wiki/sources/*.md` frontmatter for `ingredients:` arrays containing this ingredient slug.
   - Check the source-legend markers on the ingredient page itself for cited sources.
3. Read the **Key numbers** section of up to 5 contributing source pages (prioritize those with largest sample_n and A-tier evidence).
4. Synthesize:
   - `typical_ppb` ← [low end of mean/median range across sources, high end], in ppb
   - `p95_ppb` ← p95 if reported; otherwise estimate from max values across sources
   - `n_studies` ← count of contributing sources with usable concentration data for this metal
   - `confidence` ← low (1–2 sources), medium (3–10), high (>10)
   - `status` ← `populated`

### Combined path (pages with both TDS and other sources)

Pages like `rice` that have TDS data AND multiple other contributing sources: start with TDS values, then check whether the top 3 non-TDS source pages report substantially different ranges. If they do, widen `typical_ppb` to encompass both; if they agree, keep the TDS values and increment `n_studies`.

## Per-page workflow

For each page:

1. Read `wiki/ingredients/<slug>.md` frontmatter. Identify which metal sub-blocks have non-pending status but null `typical_ppb`.

2. Look up the slug in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. If rows exist for this slug and the relevant metals, use Path A.

3. For metals not covered by TDS, or for pages without TDS matches, use Path B.

4. Edit the frontmatter in place. For each metal sub-block being updated, change:
   ```yaml
     status: populated
     typical_ppb: [<low>, <high>]
     p95_ppb: <value>
     confidence: <low|medium|high>
     n_studies: <count>
     last_reviewed: 2026-05-13
   ```

5. Bump the page-level `updated:` field to today.

6. Do NOT edit the body-level table. The `sweep-ingredient-coverage.mjs` tool regenerates it from frontmatter; it will be run after this dispatch completes.

## Priority order

Process in this order:
1. Rice (the page Karen is watching)
2. Pages with ≥ 3 contributing sources (established commodity pages)
3. FDA TDS pages by TDS food number (ascending — lower numbers are more common foods)
4. Remaining pages alphabetically

## What NOT to do

- Don't edit body content, body tables, or source legends — frontmatter only.
- Don't create new pages.
- Don't change `status: pending` sub-blocks — those haven't been researched yet.
- Don't fabricate values. If a source reports a range in dry weight and the page needs wet weight, note the discrepancy rather than converting with an assumed moisture content.
- Don't set `typical_ppb` from intake/exposure data — only from concentration measurements in the food matrix itself.
- Don't change metals that already have non-null `typical_ppb` values (like rice Ni which already shows `[80, 450]`).

## Commit cadence

Commit every 15–20 pages:
```
profiles: populate contamination_profile values on N ingredient pages

Pages: <comma-separated slugs>
Path A (TDS): N pages | Path B (source synthesis): N pages
```

## After all pages are processed

1. Run `node tools/sweep-ingredient-coverage.mjs --apply` to regenerate body tables from the updated frontmatter.
2. Commit the sweep result: `sweep: regenerate ingredient body tables from updated profiles`
3. Append to `wiki/log.md`:
```
## [2026-05-13] schema | synthesize ingredient profiles — N pages populated
Pages touched: N ingredient pages (N via FDA TDS, N via source synthesis)
Notes: First bulk profile synthesis. Rice and N other high-source-count pages used combined TDS + literature values. N metals across N pages now show populated values instead of dashes.
```

## Reference

- CLAUDE.md Part 6 (contamination_profile schema, three-field state system)
- CLAUDE.md Part 9 (synthesis rules, when to trigger full resynthesis)
- CLAUDE.md Part 14 (units — always ppb, wet vs dry weight, iAs/tAs distinction)
- data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv (Path A data)
- tools/sweep-ingredient-coverage.mjs (body table regenerator — run after frontmatter updates)
