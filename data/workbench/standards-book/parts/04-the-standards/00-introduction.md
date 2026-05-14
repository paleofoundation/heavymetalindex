# Part 3 — The Standards

This Part publishes the per-category HMTc standards for the fifteen product chapters covered by the 2026 Edition. Each chapter is self-contained enough to function as a licensing exhibit detached from the bound volume; when a brand licenses HMTc certification for a specific product, the relevant chapter is attached as an exhibit to the licensing agreement and stands on its own.

## Structure of each chapter

Each Part 3 chapter contains:

- **Master Limit Table** — the ten priority analytes (eight metals plus speciated iAs and MeHg where applicable), each with the HMTc action level, the applicable regulatory cap (FDA / EU / state, lowest applicable), and a basis note clarifying which value binds (literature-baseline / regulatory-alignment / precautionary / feasibility-driven).
- **Methodology summary** — the per-analyte percentile mechanism (P97 clean / P45 dirty per the Governing Principles), the row-pass calibration intent (90% clean platform / 30% dirty platform achieving Status A), and the regulatory-cap-as-ceiling rule.
- **Per-analyte sections** — for the priority metals in this category (those closest to limits or most consequential for the matrix), a focused per-analyte narrative covering: HMTc limit and rationale; cited literature evidence anchoring the limit; toxicology callout (drawn from the canonical metal page on heavymetalindex.com per Part 5.3 Glossary); regulatory cross-reference; and applicable speciation requirement.
- **Adversarial Read for this product** — the categories of attack a plaintiff's expert or hostile reviewer might advance against this specific product's standards, and the program's response on the merits. (Program-level attacks that apply across all categories are addressed in Part 5.2 rather than duplicated per-chapter.)
- **Sources Cited** — chapter-scoped citations resolving to source pages on heavymetalindex.com. Numbered aliases for inline use.
- **Provenance Footer** — chapter-scoped: the pooled-distribution row hash, the briefing-generator commit, and the generation timestamp.

## Chapter list

The fifteen Part 3 chapters appear in document order below. Each chapter follows the structure named above and stands alone as a licensing exhibit when detached from the bound volume.

| # | Chapter |
|---|---|
| 3.1 | Infant Formula, Powder (Non-Soy) |
| 3.2 | Infant Formula, Powder (Soy-Based) |
| 3.3 | Infant Formula, Ready-to-Feed Liquid (Non-Soy) |
| 3.4 | Infant Formula, Ready-to-Feed Liquid (Soy-Based) |
| 3.5 | Baby Cereals, Dry (Rice-Based) |
| 3.6 | Baby Cereals, Dry (Non-Rice) |
| 3.7 | Fruit Purées |
| 3.8 | Non-Root Vegetable Purées |
| 3.9 | Root-Vegetable Purées |
| 3.10 | Meat and Poultry Purées |
| 3.11 | Fish-Containing Baby Foods |
| 3.12 | Mixed Meals (Rice-Containing) |
| 3.13 | Mixed Meals (Non-Rice) |
| 3.14 | Teething and Snacks (Rice-Based) |
| 3.15 | Teething and Snacks (Non-Rice) |

## How the Part 3 chapters were produced

Each chapter is the deterministic output of a Standards Briefing generator (`tools/standards/render-part3-chapter.mjs` in the project repository) that retemplates the underlying Standards Briefing into the bound-manual format. The retemplating applies the Part 2.2 / Part 5.3 toxicology callout references, prunes engine-implementation vocabulary per the wiki/HMTc firewall, and adds chapter-level cross-references to Parts 2, 4, and 5. The substantive content (Master Limit Table values, per-analyte rationale, sources cited, provenance footer) is preserved from the underlying Standards Briefing without modification.

## Cross-references

- Master percentile methodology that produced the limit tables: Part 5.1 (How HMTc Standards Are Set) and Governing Principles.
- Toxicology callouts referenced from each chapter: Part 5.3 (Glossary) with canonical reviews on heavymetalindex.com.
- Program-level adversarial read (counterpart to per-product reads in each chapter): Part 5.2.
- Testing schedule that operationalizes surveillance for each product category: Part 4.
