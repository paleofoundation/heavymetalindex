# Session prompt: triage routing-unresolved entries

140 entries in `data/evidence/routing_unresolved.csv`. Each is a source page whose frontmatter declared a product / ingredient / metal / regulation that does not match any existing wiki page.

## Decision tree per entry

For each unresolved row, classify it as one of:

1. **Frontmatter typo / convention drift** — the slug is wrong but means an existing page. Fix the source frontmatter; re-run `npm run evidence:source-routes` to verify. **Decide and act without asking.**

2. **Below-threshold variant** — the declared slug is a sub-variant of an existing page. Per CLAUDE.md Part 10, sub-variants below the 5-paper threshold go as `aliases` on the parent ingredient page, not as new pages. **Decide and act without asking; update the source frontmatter to point at the parent.**

3. **Above-threshold new-page proposal** — the declared slug is a legitimate new ingredient/product/regulation page above the 5-paper threshold. **Surface this to Karen for approval per Part 10.** Compile the list at the end of the triage.

4. **Detector bug** — the routing audit is too strict; the slug actually matches a page but my classifier missed it. Fix `tools/evidence/build-routing-audit.mjs` or its sub-script.

Sample first 5 rows:

  - abebe2017-popcorn-cornflake-metals-ethiopia declared product `cornflakes` (does not exist)
  - abebe2017-popcorn-cornflake-metals-ethiopia declared product `popcorn` (does not exist)
  - afonne2020-heavy-metals-plant-foods declared ingredient `cassava` (does not exist)
  - alzabadi2018-canned-foods-palestine-cd-pb-cu-zn declared product `canned-foods` (does not exist)
  - alzabadi2018-canned-foods-palestine-cd-pb-cu-zn declared ingredient `canned-beans` (does not exist)

## At the end

Append a triage report at `wiki/lint/2026-05-15-routing-triage.md` listing:
- Frontmatter fixes made (count + sample)
- Below-threshold redirects made (count + sample)
- New-page proposals for Karen's approval (full list — these need her decision per Part 10)
- Detector bugs fixed in the audit script

Then run `npm run evidence:source-routes` to verify the unresolved count dropped.
