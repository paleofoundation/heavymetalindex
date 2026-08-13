---
title: Corpus coverage and methodology transparency
description: The wiki's PRISMA-equivalent — papers identified, screened, ingested, and the taxonomy-row coverage report. Auto-regenerated from on-disk data.
audience: [regulator, educator, researcher, brand-legal, brand-qa, journalist]
updated: 2026-08-13
noindex: false
---

# Corpus coverage and methodology transparency

This page is the wiki's PRISMA-equivalent: a single, auto-regenerated transparency surface showing how many papers were identified in the literature search, how many became source pages, how the HMTc Taxonomy v2.0 universe is covered, and where the gaps are. Brand legal teams, regulatory affairs leads, FDA reviewers, and plaintiff/defense experts auditing the wiki's defensibility should land here.

The wiki is built against the locked HMTc Comprehensive Testing Category Taxonomy v2.0 (2026-03-30). Every product page, every routing decision, and every coverage count is reconciled to that taxonomy. The taxonomy itself is published at [[data/taxonomy/hmtc-v2.json|data/taxonomy/hmtc-v2.json]] for reference.

This page was regenerated on **2026-08-13** from the current state of the corpus.

The Cochrane-equivalent search-protocol publication — the 10 academic databases queried, the dedupe protocol, the scoring rubric for auto-fetch, and the inclusion / exclusion criteria — is published at [[methodology/search-strategy]]. Read it alongside this page for the complete defensibility picture.

## Literature search flow (PRISMA-equivalent)

```
 Identification: 23,260 papers triaged from the literature search
 │
 │ Triage tiers (priority bands):
 │ P1: 42
 │ P2: 488
 │ P3: 18
 │ P4: 6,571
 │ P5: 16,141
 ▼
 Screening: Papers triaged for ingest priority
 │
 │ Papers from year ≥ 2020: 14,343
 ▼
 Eligibility: 3066 source pages currently in wiki/sources/
 │
 │ evidence_tier A: 1502
 │ evidence_tier B: 1460
 │ evidence_tier C: 103
 │ evidence_tier unknown: 1
 ▼
 Included: Source pages routed to destination pages
 │
 │ Routing rows in product_source_routing_audit.csv: 6443
 ▼
 Synthesized: Ingredient cells, product rows, metal pages, regulation pages
```

**Of the 23,260 papers identified in the literature search, 3066 have been promoted to source pages — 13.2% of the universe.** The remaining papers are tiered by priority (P1 HMT&C Path A candidates, P2 LOQ source candidates, P3 agency-affiliated, P4 high-evidence peer-reviewed 2020+, P5 everything else); ingest is in priority order.

This is a deliberately small fraction: depth over breadth. The defensibility argument is not 'we ingested 23,000 papers,' it is 'every wiki claim traces to a peer-reviewed source page whose values match the source PDF on audit.' The ingest pipeline is sized to maintain that property.

## Wiki page counts by type

| Page type | Count |
|---|---:|
| Source pages | 3066 |
| Ingredient profiles | 257 |
| Product-category rows (total) | 416 |
| Product-category rows (non-stub, has scaffold or content) | 150 |
| Metal profiles | 36 |
| Regulation pages | 175 |
| Mitigation pages | 7 |
| Microbiome pages | 1 |
| Testing-method pages | 2 |

## HMTc Taxonomy v2.0 coverage

Total subcategories defined by the taxonomy: **356**. Pages scaffolded or content-filled against the taxonomy: **347** (97%).

Of the 347 matched: 341 carry exact hmtc_category + hmtc_row frontmatter (locked under Step 0 scaffolding); 6 are matched by slug-alias to legacy pages (frontmatter needs backfill). Pages still to be created: **0**.

| Cat | Name | Total | Exact | By alias | Missing | Coverage |
|----:|------|------:|------:|---------:|--------:|---------:|
| 1 | Infant and Child Foods (Ages 0-5) | 9 | 9 | 0 | 0 | 100% |
| 2 | Infant and Child Personal Care (Ages 0-5) | 16 | 16 | 0 | 0 | 100% |
| 3 | Grains, Cereals, and Rice Products | 12 | 12 | 0 | 0 | 100% |
| 4 | Fruits, Vegetables, and Produce | 8 | 8 | 0 | 0 | 100% |
| 5 | Beverages | 17 | 17 | 0 | 0 | 100% |
| 6 | Seafood | 6 | 6 | 0 | 0 | 100% |
| 7 | Oils, Condiments, and Specialty Foods | 12 | 0 | 3 | 0 | 25% |
| 8 | Water and Water-Based Products | 4 | 3 | 1 | 0 | 100% |
| 9 | Infant and Child Contact Products (Ages 0-5) | 8 | 8 | 0 | 0 | 100% |
| 10 | Infant and Child Durable Goods and Textiles (Ages 0-5) | 12 | 11 | 1 | 0 | 100% |
| 11 | Meat, Poultry, and Eggs | 9 | 9 | 0 | 0 | 100% |
| 12 | Household Cleaning and Dishwashing | 21 | 21 | 0 | 0 | 100% |
| 13 | Cosmetics and Personal Care — Leave-on | 19 | 19 | 0 | 0 | 100% |
| 14 | Cosmetics and Personal Care — Rinse-off | 12 | 12 | 0 | 0 | 100% |
| 15 | Feminine Care | 10 | 10 | 0 | 0 | 100% |
| 16 | Dietary Supplements (Human) | 24 | 24 | 0 | 0 | 100% |
| 17 | Pet Foods | 10 | 10 | 0 | 0 | 100% |
| 18 | Pet Supplements | 7 | 7 | 0 | 0 | 100% |
| 19 | Laundry and Fabric-Contact Home Products | 13 | 13 | 0 | 0 | 100% |
| 20 | Oral Care | 10 | 10 | 0 | 0 | 100% |
| 21 | Children's Toys, Arts, and Crafts | 21 | 21 | 0 | 0 | 100% |
| 22 | Home Air and Inhalation-Adjacent Products | 15 | 15 | 0 | 0 | 100% |
| 23 | Food-Contact Consumer Goods and Kitchenware | 30 | 29 | 1 | 0 | 100% |
| 24 | Dairy and Milk Products | 9 | 9 | 0 | 0 | 100% |
| 25 | Cannabis, Hemp, and CBD Products | 6 | 6 | 0 | 0 | 100% |
| 26 | Peptides, SARMs, and Research Chemicals | 5 | 5 | 0 | 0 | 100% |
| 27 | Legumes and Pulses | 4 | 4 | 0 | 0 | 100% |
| 28 | Nuts, Seeds, and Their Butters | 5 | 5 | 0 | 0 | 100% |
| 29 | Edible Fungi | 2 | 2 | 0 | 0 | 100% |
| 30 | Culinary Oils and Fats | 2 | 2 | 0 | 0 | 100% |
| 31 | Sweeteners and Syrups | 4 | 4 | 0 | 0 | 100% |
| 32 | Condiments, Sauces and Dressings | 5 | 5 | 0 | 0 | 100% |
| 33 | Chocolate, Cocoa and Confectionery | 3 | 3 | 0 | 0 | 100% |
| 34 | Herbs, Spices, Seasonings and Salt | 4 | 4 | 0 | 0 | 100% |
| 35 | Prepared and Packaged Meals | 2 | 2 | 0 | 0 | 100% |

Every taxonomy subcategory has a destination page on the wiki. Source-page declarations of `products: [<row-slug>]` route to the page they expect to land on; no source is dropped due to a missing destination.

## Why this page matters

Cochrane systematic reviews open with a PRISMA flow diagram because the defensibility of every downstream claim depends on the reader understanding what was searched, what was screened, what was included, and on what grounds. The wiki's defensibility argument rests on the same property: any hostile reader — a plaintiff's expert, a regulatory reviewer, a competing standards body — must be able to see the universe the wiki is accountable to, not just the slice it has published.

Naming the gap is the work. The gap is not the failure mode; the failure mode is the gap being invisible.

## Related methodology pages

- [[methodology]] — full methodology page (source selection, evidence tiers, extraction protocol, HMT&C firewall)
- [[editorial-standards]] — editorial conventions, writing style, audience layering
- [[overview]] — high-level orientation for newcomers
- [[synthesis]] — current best synthesis of the corpus across metals and matrices

## Provenance and reproducibility

This page is auto-regenerated by `tools/build-coverage-page.mjs` from on-disk data. Inputs:

- `raw/manifest/triage-manifest.csv` — the triage universe (immutable record of the literature search)
- `wiki/sources/*.md` — promoted source pages (frontmatter: evidence_tier, source_type)
- `wiki/ingredients/`, `wiki/products/`, `wiki/metals/`, `wiki/regulations/`, `wiki/mitigation/`, `wiki/microbiome/`, `wiki/testing/`
- `data/taxonomy/hmtc-v2.json` — locked HMTc Comprehensive Testing Category Taxonomy v2.0
- `data/evidence/taxonomy-coverage-audit.csv` — output of `tools/taxonomy/audit-coverage.mjs`
- `data/evidence/product_source_routing_audit.csv` — output of `tools/evidence/build-routing-audit.mjs`

No hand-maintained tallies. Every count derives from on-disk frontmatter or structured-evidence files. If a count looks wrong, the underlying data is what changed, not this page's narrative.
