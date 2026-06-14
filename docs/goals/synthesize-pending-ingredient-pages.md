---
type: goal
purpose: Drive synthesis of the 75 ingredient pages that still carry "_Pending synthesis._" placeholders in their narrative H2 sections
audience: [claude-in-obsidian, cowork, claude-code]
status: active
estimated_pages_remaining: 75
target_completion: rolling, 5-10 pages per session
updated: 2026-05-17
---

# /goal — Synthesize the 75 pending ingredient pages

## What this goal is

75 ingredient pages on the wiki carry the `_Pending synthesis._` placeholder text in one or more of the six narrative H2 sections required by CLAUDE.md Part 6 (`Why this commodity accumulates heavy metals`, `Ranges by source, region, and variety`, `Processing effects`, `Ingredient-derivative risk`, `Mitigation options`, `Regulatory limits that apply`). The contamination_profile YAML and the body table are populated; the narrative sections are not. Brand legal landing on any of these pages sees a structurally complete page with placeholder narrative sections — Cochrane-incomplete.

This goal is to convert each of those pages from placeholder narrative to substantive synthesis, sourced from the contributing source pages already routed to the page.

## The list

The 75 pages are identifiable by running:

```bash
grep -l "_Pending synthesis" wiki/ingredients/*.md
```

The current set (as of 2026-05-17):

baby-cereals-dry, beef, beet, beverages, black-pepper, bread, breastmilk, camellia-sinensis, carrots, cashew-nuts, cashews, cereals, coconut, coffee, cucumbers, fermented-beverage-bases, fish-containing-baby-foods, flavoring, freshwater-fish, fruit-juice-ready-drinks, fruit-juice, fruit-purees, fruits, ground-beef, ham, herbal-botanicals, infant-cereal-ingredients, infant-formula-concentrated-liquid, infant-formula-ingredients, infant-formula-rtf-liquid, ketchup, leafy-greens, legumes, lentils, maize, mango-juice, matcha-powder, meat-and-poultry-purees, meat-and-poultry, melon, milk-and-dairy, mixed-meals, molluscs, non-rice-grains, non-soy-protein-source, onions, organ-meats, parsley, peach, peanut-butter, peanuts, plant-milk, plums, poultry, processed-american-cheese, raisins, raspberries, root-vegetables, salted-fish, sesame-oil, seafood, semi-skimmed-milk, sports-drink-bases, sunflower-seeds, sweet-potato, tinned-fish, tea, tomato-paste, turkey, vegetable-juice, vegetable-purees, vinegar, white-fish, yogurt, walnuts

## How to handle each page

For each pending-synthesis page, the workflow is:

### 1. Read the contributing sources

The page's frontmatter declares `n_studies` per analyte. Find the contributing source pages two ways:

```bash
# Sources that declared this ingredient in their frontmatter
grep -l "ingredients: \[.*<commodity>" wiki/sources/*.md

# Or via the routing audit
awk -F, -v ing="<commodity>" '$1 == ing' data/evidence/product_source_routing_audit.csv
```

Open and read each contributing source page in full. Each source page already has Key numbers and an Implications block; the page-level narrative on the ingredient page is the synthesis across those sources.

### 2. Decide which sections to write

The mandatory six narrative sections for each ingredient page (per CLAUDE.md Part 6):

1. **Why this commodity accumulates heavy metals** — soil/plant-biology/processing/sourcing rationale. Always synthesizable from sources; usually the easiest section.
2. **Ranges by source, region, and variety** — geographic and varietal variance. Synthesizable when ≥ 2 sources report region-specific data.
3. **Processing effects** — polishing/rinsing/parboiling/fermentation/drying/milling/refining. Synthesizable when sources discuss intervention effects.
4. **Ingredient-derivative risk** — how syrups, concentrates, flours, brans, refined fractions concentrate or dilute. Often inferred from the `higher_risk_variants`/`lower_risk_variants` frontmatter.
5. **Mitigation options** — practical interventions ordered by impact magnitude, with cross-links to [[mitigation/agronomic|agronomic]], [[mitigation/processing|processing]], [[mitigation/formulation|formulation]], [[mitigation/supply-chain-screening|supply-chain-screening]], [[mitigation/testing-and-qc|testing-and-qc]], and [[mitigation/packaging-and-storage|packaging-and-storage]] pages. Always synthesizable from the 6 mitigation lever pages plus per-source data.
6. **Regulatory limits that apply** — links to `[[regulations/...]]` pages applicable to the matrix. Look up the matrix in the EU 2023/915, FDA action levels, Codex MLs, Prop 65 MADLs.

If a section genuinely has no synthesizable content from the routed sources, replace `_Pending synthesis._` with a one-line honest framing like "*Not yet synthesizable — the contributing sources do not address this dimension. Synthesis triggered when 2+ A-tier sources report on it.*" — explicit pending-with-criterion rather than vague pending.

### 3. Style discipline (per CLAUDE.md Part 15)

- Default to prose paragraphs. Bullets only when content is genuinely enumerative (3-7 discrete parallel items).
- No em dashes; use commas, semicolons, periods, parentheticals.
- No bolded words for emphasis inside running prose (bold only for explicit labels at start of definitions).
- Every numerical claim must trace to a source via `[[sources/<cite-key>]]` wikilink within the same H2 section OR in the page-level Sources section. The trace-every-claim audit (`tools/audit-claim-provenance.mjs`) verifies this on every prebuild.

### 4. Cross-link discipline

- Reference per-metal pages: `[[metals/lead]]`, `[[metals/cadmium]]`, `[[metals/arsenic-inorganic]]`, `[[metals/arsenic-total]]`, `[[metals/mercury-methyl]]`, `[[metals/mercury-total]]`, `[[metals/nickel]]`, `[[metals/aluminum]]`, `[[metals/chromium]]`, `[[metals/chromium-hexavalent]]`, `[[metals/tin]]`, `[[metals/uranium]]`.
- Reference relevant `[[regulations/...]]` pages.
- Reference `[[mitigation/<lever>]]` pages.
- Cross-link to related ingredient and product pages where relationships are documented.

### 5. Commit cadence

One ingredient page per commit. Commit message format:

```
synthesis(<commodity>): 6 narrative sections — Cochrane-level prose with N sources cited
```

Push every 5-10 commits for GitHub backup and multi-agent sync only. Git pushes must not be treated as publish events: Vercel Git auto-deploys are disabled, and production publishing happens through the manual production deploy workflow or an explicitly approved `npm run publish:wiki`. The `tools/audit-claim-provenance.mjs` and `tools/audit-ingredient-mandatory-sections.mjs` audits confirm the page has graduated before any manual publish.

### 6. Priority order

Highest brand-legal-traffic ingredients first. Suggested order (already-done items marked):

- ✓ rice (already populated this session)
- ✓ cocoa (already populated this session)
- ✓ fish (already populated this session)
- ✓ spinach (already populated this session)
- ✓ infant-formula-powder (already populated this session)
- leafy-greens, peanuts, peanut-butter, sunflower-seeds, walnuts (Cat 4 contamination platforms)
- cinnamon (already done via spices), turmeric, black-pepper, parsley (Cat 7 spices)
- bread, cereals, maize, non-rice-grains (Cat 3 grain bases)
- coffee, tea, camellia-sinensis, matcha-powder, fruit-juice (Cat 5 beverages)
- beef, ground-beef, ham, turkey, poultry, organ-meats (Cat 11 meats)
- coconut, plant-milk, semi-skimmed-milk, yogurt, milk-and-dairy, breastmilk (dairy + plant milks)
- legumes, lentils (Cat 4 legumes)
- mango-juice, raisins, raspberries, plums, peach, melon (Cat 4 fruits)
- root-vegetables, sweet-potato, beet, carrots, onions (Cat 4 root vegetables)
- cucumbers, fruits (broader categories)
- freshwater-fish, white-fish, salted-fish, tinned-fish, molluscs, seafood (Cat 6 seafood)
- ketchup, tomato-paste, vinegar, sesame-oil (Cat 7 condiments/oils)
- baby-cereals-dry, fruit-purees, vegetable-purees, infant-cereal-ingredients, infant-formula-ingredients, infant-formula-concentrated-liquid, infant-formula-rtf-liquid (Cat 1 infant)
- mixed-meals, meat-and-poultry, meat-and-poultry-purees, fish-containing-baby-foods (Cat 1 mixed)
- non-soy-protein-source, processed-american-cheese (compound)
- beverages, herbal-botanicals, fermented-beverage-bases, sports-drink-bases, fruit-juice-ready-drinks, vegetable-juice (Cat 5 beverage subcategories)
- flavoring, cashew-nuts, cashews (smaller items)

## What "done" looks like

A page is done when:

- All six narrative H2 sections carry substantive prose (no `_Pending synthesis._`)
- Every numerical claim cites a `[[sources/...]]` / `[[regulations/...]]` / `[[testing/...]]` wikilink
- `tools/audit-ingredient-mandatory-sections.mjs` passes the page
- `tools/audit-claim-provenance.mjs` passes the page
- The page contains the body-level "Heavy metal contamination profile" table aligned to the `contamination_profile` YAML
- The page reads as Cochrane-level reference: authoritative, sourced, no hedging without rationale

## What "not done" looks like — examples to fix

- Section is `_Pending synthesis._` with no further content
- Section has placeholder bullets like "Sourcing levers — *Pending ingest.*" repeated across all 6 levers
- Numerical claim appears with no `[[sources/...]]` link in the same section or in page Sources
- Page body table missing entirely when contamination_profile has any populated analyte

## Stopping rules

- If a contributing source page is itself stub/empty (Key numbers section empty), do not write claims from it. Flag the source page as needing extraction first, then proceed without it.
- If the page has zero contributing sources, do not invent content. The page should remain in scaffolded-stub state and be skipped.
- If a section requires medical/clinical claims (acute toxicity dose, lethal exposure threshold), use only what is in the cited toxicology source pages ([[sources/ufelle2021-metals-chapter]] for general toxicology, ATSDR profile pages for per-metal toxicology, EFSA/JECFA documents for dose-response). Do not invent dose-response claims.

## How this connects to the wiki's defensibility argument

Every page completed under this goal moves the wiki one step closer to "every ingredient that has been opened has been opened to Cochrane standard." Brand legal sampling 10 random ingredient pages will eventually hit only completed pages. The completion is published transparently on [/coverage](https://heavymetalindex.com/coverage) and [/audits](https://heavymetalindex.com/audits); each session's audit-dashboard snapshot anchors the audit trail of progress.
