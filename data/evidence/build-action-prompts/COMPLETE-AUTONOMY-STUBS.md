# Session prompt: complete autonomy-created stub pages

46 ingredient/product pages were created by `tools/autonomy/create-missing-pages.mjs` from `routing_unresolved.csv` entries, but their bodies were never drafted. Each has between 2 and 14 routed source pages declaring `ingredients: [<slug>]` or `products: [<slug>]` in their frontmatter — the routing audit picked them up — but the contamination_profile remains all-pending and the body is just the stub template.

This is the load-bearing fix for Karen's 2026-05-15 "we're wasting time with our ingests" diagnostic. Sources are being ingested and routed; the failure mode is that no synthesis pass converts them into ingredient-page content.

## Workflow per page (process top 5-10 per dispatch; sort by routed-source count desc)

1. Read the page at `wiki/<kind>/<slug>.md`.

2. Find the routed source pages: grep `wiki/sources/` for source pages whose frontmatter declares this ingredient or product slug. Specifically:
   - `grep -l "ingredients:.*\[\[ingredients/<slug>\]\]\|matrices:.*<slug>" wiki/sources/*.md` for ingredients
   - `grep -l "products:.*\[\[products/<slug>\]\]\|products:.*<slug>" wiki/sources/*.md` for products
   - Cross-reference with `data/evidence/product_source_routing_audit.csv` for product pages.

3. Read the routed source pages (top 5-10 by sample size / evidence tier). Skim title, key numbers, sample population, methods.

4. **For ingredient pages**: advance the contamination_profile in frontmatter. For each metal in the schema (Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U):
   - If the routed sources collectively report concentrations for that metal: set `status: populated`, fill `typical_ppb` as the cited range, `p95_ppb` if available, `confidence` (low / medium / high per CLAUDE.md Part 6), `n_studies` as the source count, `last_reviewed` as today.
   - If no source addresses the metal: set `status: populated, typical_ppb: [null, null], confidence: null, n_studies: 0, last_reviewed: <today>` — this is the Part 6 coverage-rule "declared data gap."
   - Per Part 6 coverage rule, ALL ten sub-blocks must advance out of pending in the same pass.

5. **For both ingredient and product pages**: draft the body with all 8 (ingredient) or 10 (product) CLAUDE.md Part 6 mandatory sections. Use prose paragraphs (no bullets in narrative sections per Part 15). Every numeric claim cites a routed source via `[[sources/<cite-key>|N]]`.

6. Update the in-body contamination_profile table to reflect the new frontmatter values. Use `n=<count>` for populated cells, `data gap` for cells where status is populated but n_studies=0.

7. Update the source-legend table at the bottom: fill in the "Used on this page for" column with a 1-sentence description of what each routed source contributes.

8. Commit after each batch of 5 pages with a descriptive message naming the slugs.

## What NOT to do

- Don't fabricate concentration values. Every numeric claim must trace to a routed source.
- Don't skip the Mitigation options section on ingredient pages or the Levers to reduce contamination section on product pages. These are the brand-legal-actionable surfaces and are the load-bearing additions.
- Don't add new source pages or rewrite the routing audit. Routing is the system's responsibility; the page-completion task only reads it.
- Don't graduate a page to non-stub status if it has zero routed sources. Pages with zero routed sources stay as stubs until corpus accumulates.

## Top 10 pages by routed-source count (process first)

  1. ingredient/leafy-vegetables (14 routed sources, body=1327 chars)
  2. ingredient/herbs-and-spices (13 routed sources, body=1327 chars)
  3. ingredient/seaweed (10 routed sources, body=1309 chars)
  4. ingredient/tea (10 routed sources, body=1301 chars)
  5. ingredient/vinegar (10 routed sources, body=1309 chars)
  6. ingredient/lettuce (9 routed sources, body=1308 chars)
  7. ingredient/turmeric (9 routed sources, body=1310 chars)
  8. ingredient/sunflower-oil (7 routed sources, body=1320 chars)
  9. ingredient/vegetable-oils (6 routed sources, body=1322 chars)
  10. ingredient/cinnamon (5 routed sources, body=1310 chars)

Full list of 46 pages: see `data/evidence/autonomy-stubs-pending.csv` (regenerated each `npm run plan`).

## Reference

- CLAUDE.md Part 6 (template, mandatory sections, coverage rule)
- CLAUDE.md Part 9 (synthesis trigger conditions, incremental update rules)
- CLAUDE.md Part 15 (prose-first writing style)
- OPERATING.md Part 3 (act without asking on routine content drafting)
