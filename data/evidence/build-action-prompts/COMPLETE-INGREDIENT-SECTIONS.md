# Session prompt: draft missing mandatory sections on ingredient pages

CLAUDE.md Part 6 mandates 8 H2 sections on every non-stub ingredient page. 125 pages currently fail this lint. Each page needs the missing sections drafted from the routing audit's contributing sources and the relevant source pages' TL;DRs.

You have full authority to act without asking. Karen has explicitly directed that this work is autonomous (no per-page review). Commit in batches of 10-15 pages with descriptive messages; the husky pre-commit hook will catch any frontmatter or structural breakage.

## The eight mandatory sections (Part 6 order)

1. `## Why this commodity accumulates heavy metals` — soil, plant biology, processing, or sourcing reason this ingredient is on the wiki. One to three paragraphs of prose.
2. `## Heavy metal contamination profile` — auto-generated body table (do not hand-edit if present; flag for next prebuild if missing).
3. `## Ranges by source, region, and variety` — geographic and varietal variation, anchored on contributing sources.
4. `## Processing effects` — polishing, rinsing, parboiling, fermentation, drying, milling, refining; how each step shifts which metals.
5. `## Ingredient-derivative risk` — bran-vs-whole-vs-white, syrups concentrate, etc. When this ingredient is processed into derivatives, which derivatives concentrate or dilute which metals.
6. `## Mitigation options` — practical interventions ordered by impact: sourcing, agronomic, processing, formulation, QC, packaging where relevant. One-paragraph entries per lever with cited magnitude.
7. `## Regulatory limits that apply` — Codex, EU, FDA, etc. with limit value, matrix scope, basis.
8. `## Sources` — auto-generated source legend; do not hand-write.

## Per-page workflow

For each page in scope:

1. Read `wiki/ingredients/<slug>.md` to see existing structure and any partial sections present.

2. Read `data/evidence/product_source_routing_audit.csv` to identify the contributing source pages. Filter rows where the source's frontmatter `ingredients:` array contains this ingredient slug.

3. Read the TL;DR + Key Numbers sections from the top 3-5 contributing source pages (those most cited or with highest sample size).

4. Draft each missing section per CLAUDE.md Part 15 prose conventions: prose paragraphs, no em dashes, no inline bold for emphasis, every numeric claim cited to a source page via wikilink with sample size + method.

5. Insert the drafted sections in the page body in Part 6 order. Preserve any existing sections (the page may already have some). The source legend at the bottom is generator-managed; never hand-edit inside its `<!-- BEGIN: hmi-source-legend -->` markers.

6. After completing each batch of 10-15 pages, commit with a message like `pages: draft missing mandatory sections on N ingredient pages (<comma-separated slugs>)`.

## Section-specific drafting guidance

**Mitigation options** is the load-bearing addition. Most pages are missing it. Structure as ordered subsections, highest-impact first:

- `### Sourcing levers` — origin region, supplier specification, pre-screening at intake
- `### Agronomic levers` — soil amendments, water management, cultivar selection (link to dedicated mitigation/<topic>.md pages where they exist)
- `### Processing levers` — rinsing, polishing, fermentation, drying, milling
- `### Formulation levers` — substitute or dilute with lower-risk ingredients
- `### Testing and QC levers` — lot-level vs spot-check, internal vs third-party
- `### Packaging and storage levers` — where relevant (Sn from cans, Al from foil contact)

Each lever names the magnitude of the effect with a cited source. If no source in the contributing set documents a specific lever, write `_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._` rather than fabricating a number.

**Regulatory limits that apply** should reference `[[regulations/<rule-id>]]` pages where they exist. State the limit value, the matrix scope (e.g., "polished rice," "infant cereal"), and the basis (product as placed on market, as consumed, dry weight). Cross-link to the source page for the regulation.

**Why this commodity accumulates heavy metals** — the mechanism. Why does cocoa concentrate Cd? Andean soil geochemistry. Why does rice concentrate iAs? Flooded paddy chemistry. This section is the educator audience's anchor; one to three paragraphs.

## What NOT to do

- Don't edit pages outside the failing-pages list.
- Don't hand-edit inside `<!-- BEGIN: hmi-source-legend -->` markers.
- Don't restructure or rename existing sections; add the missing ones in Part 6 order alongside existing content.
- Don't fabricate numbers. Every numeric claim must trace to a source page in the routing audit.
- Don't introduce new ingredient pages or split content into new pages. This action only fills missing sections on existing pages.

## Pages in scope (125)

  - almond (missing 6): why_accumulates;ranges_by_source;processing_effects;ingredient_derivative_risk;mitigation_options;regulatory_limits
  - apple-juice (missing 6): why_accumulates;ranges_by_source;processing_effects;ingredient_derivative_risk;mitigation_options;regulatory_limits
  - apple (missing 6): why_accumulates;ranges_by_source;processing_effects;ingredient_derivative_risk;mitigation_options;regulatory_limits
  - applesauce (missing 6): why_accumulates;ranges_by_source;processing_effects;ingredient_derivative_risk;mitigation_options;regulatory_limits
  - asparagus (missing 6): why_accumulates;ranges_by_source;processing_effects;ingredient_derivative_risk;mitigation_options;regulatory_limits
... and 120 more (see data/evidence/ingredient-mandatory-sections-audit.csv for full list)

## Reference

- CLAUDE.md Part 6 (template, mandatory sections, lever priority order)
- CLAUDE.md Part 15 (writing style — prose-first, no em dashes, no inline bold)
- CLAUDE.md Part 13 (evidence tiers — prefer A-tier sources for numeric claims)
- OPERATING.md Part 3 (act without asking on routine schema and content drafting)
- data/evidence/ingredient-mandatory-sections-audit.csv (the audit driving this action)
- data/evidence/product_source_routing_audit.csv (the source mapping)

When done, append a single log entry to `wiki/log.md` summarizing: how many pages completed, what sections were drafted most often (typically Mitigation options), and which pages remain failing if any.
