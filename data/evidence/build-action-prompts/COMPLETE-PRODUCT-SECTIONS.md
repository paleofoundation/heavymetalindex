# Session prompt: draft missing mandatory sections on product-category pages

CLAUDE.md Part 6 mandates 10 H2 sections on every non-stub product-category page, including a new "Levers to reduce contamination" section. 26 pages currently fail this lint; 26 are missing the load-bearing Levers section specifically.

Brand-legal reads these pages. The Levers section is the brand-legal-actionable surface. Drafting it well is the load-bearing element of this action.

You have full authority to act without asking. Commit in batches of 5-10 pages with descriptive messages.

## The ten mandatory sections (Part 6 order)

1. `## Who this page is for` — stakeholder framing per OPERATING.md Part 2 audience hierarchy.
2. `## Methodology` — speciation, basis-preservation, row-fit, pooling rules.
3. `## Literature Evidence Summary` — generator-managed inside `hmi-hmtc-evidence-summary` markers.
4. `## Source Evidence Inventory` — what each source reports at sample level, hand-curated.
5. `## Broad Product Context: Author-Scope Index` — generator-managed inside `hmi-broad-context-sources` markers.
6. `## Federal/Regulatory Limits vs Field Findings` — generator-managed inside `hmi-product-crosswalk` markers.
7. `## Levers to reduce contamination` — **the load-bearing section. Table or paragraph-per-lever format, ordered by impact magnitude.**
8. `## How standards math uses this page` — explanation of the row-standard percentile as aggregate.
9. `## Historical recalls and enforcement` — public-record events, framed as events not brand rankings.
10. `## Sources` — auto-generated source legend.

## The Levers section format

Five-to-six lever categories, ordered by impact magnitude (highest first):

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | <e.g., switch to non-LAC cocoa origins> | <Cd reduction ~50-80% based on cited evidence> | [[sources/<key>\|N]] |
| 2 | Agronomic | <e.g., soil pH liming for cocoa Cd> | <-20-40% Cd uptake reduction per cited intervention study> | [[sources/<key>\|N]] |
| 3 | Processing | <e.g., parboiling rice for iAs reduction> | <30-50% iAs reduction per cited paper> | [[sources/<key>\|N]] |
| 4 | Formulation | <e.g., substitute or dilute with lower-Cd ingredient> | <linear dilution effect> | <reasoning> |
| 5 | Testing/QC | <e.g., lot-level ICP-MS vs spot-check> | <detection power at given sample size> | [[sources/<key>\|N]] |
| 6 | Packaging/storage | <e.g., move from tin-coated cans for Sn> | <reduces Sn migration ~70-95%> | [[sources/<key>\|N]] |

The table or paragraph format is the page author's choice based on the product category. Tables work well for products with multiple metals; paragraphs work well when one metal dominates the risk profile. The Mitigation options section on the relevant ingredient pages is the upstream source for many of these levers; cross-link to it.

If a category does not apply to the product (e.g., agronomic levers don't apply to a processed beverage), note it explicitly: "Agronomic levers: not applicable to this product category; agronomic interventions live upstream on `[[ingredients/<ingredient>]]`."

If no quantified magnitude is available in the corpus for a lever, write `_Quantified magnitude data not yet ingested; section will be expanded when evidence is available._` rather than fabricating a number.

## Per-page workflow

For each page in scope:

1. Read `wiki/products/<slug>.md` and identify which sections are missing per the audit row.

2. Read `data/evidence/product_source_routing_audit.csv` filtered to this product to identify contributing sources.

3. Read the relevant ingredient page(s)' Mitigation options section (this is the upstream source for sourcing, agronomic, and some processing levers).

4. Read 3-5 contributing source pages' TL;DR + Key Numbers for magnitude data.

5. Draft missing sections in Part 6 order. The Levers section is the priority — draft it first if missing.

6. Commit each batch with a message like `products: draft missing sections on N product pages (focus: Levers)`.

## What NOT to do

- Don't edit inside `<!-- BEGIN: hmi-* -->` generator markers; those regenerate from data.
- Don't draft Levers content without citing a source for the magnitude claim. Fabricated magnitudes destroy brand-legal defensibility, which is the entire purpose of the section.
- Don't restructure existing Methodology, Source Evidence Inventory, or other already-present sections.
- Don't reorder existing sections; insert missing sections in the canonical Part 6 order alongside what's there.

## Pages in scope (26)

  - baby-cereals-dry-non-rice (missing 6, levers: true): who_for;methodology;source_evidence_inventory;regulatory_vs_field;levers;standards_math
  - baby-cereals-dry-rice-based (missing 6, levers: true): who_for;methodology;source_evidence_inventory;regulatory_vs_field;levers;standards_math
  - fish-containing-baby-foods (missing 6, levers: true): who_for;methodology;source_evidence_inventory;regulatory_vs_field;levers;standards_math
  - fruit-juice-not-canned (missing 6, levers: true): who_for;methodology;source_evidence_inventory;regulatory_vs_field;levers;standards_math
  - fruit-juices-apple-containing (missing 8, levers: true): who_for;methodology;source_evidence_inventory;broad_context_index;regulatory_vs_field;levers;standards_math;recalls_enforcement
... and 21 more (see data/evidence/product-mandatory-sections-audit.csv for full list)

## Reference

- CLAUDE.md Part 6 (template, mandatory sections, lever priority order)
- CLAUDE.md Part 15 (writing style)
- CLAUDE.md Part 13 (evidence tiers)
- OPERATING.md Part 2 (brand-legal priority audience)
- OPERATING.md Part 3 (act without asking)
- wiki/synthesis/climate-metals-tradeoffs.md (example of mitigation-relevant synthesis page)
- wiki/synthesis/us-chocolate-lead-temporal-decline.md (example of Pb-Cd mechanistic asymmetry; informs lever selection for chocolate products)

When done, append a log entry to `wiki/log.md` summarizing: how many pages completed, the most common lever categories addressed, any pages where the corpus lacked quantified magnitude data for one or more lever categories.
