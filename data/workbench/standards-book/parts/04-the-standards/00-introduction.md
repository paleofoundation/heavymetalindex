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

| # | Chapter | Source | Status |
|---|---|---|---|
| 3.1 | Infant Formula, Powder (Non-Soy) | `data/workbench/briefings/infant-formula-powder-non-soy.md` | Pending Part 3 retemplate |
| 3.2 | Infant Formula, Powder (Soy-Based) | `data/workbench/briefings/infant-formula-powder-soy-based.md` | Pending Part 3 retemplate |
| 3.3 | Infant Formula, Ready-to-Feed Liquid (Non-Soy) | `data/workbench/briefings/infant-formula-rtf-liquid-non-soy.md` | Pending Part 3 retemplate |
| 3.4 | Infant Formula, Ready-to-Feed Liquid (Soy-Based) | `data/workbench/briefings/infant-formula-rtf-liquid-soy-based.md` | Pending Part 3 retemplate |
| 3.5 | Baby Cereals, Dry (Rice-Based) | `data/workbench/briefings/baby-cereals-dry-rice-based.md` | Pending Part 3 retemplate |
| 3.6 | Baby Cereals, Dry (Non-Rice) | `data/workbench/briefings/baby-cereals-dry-non-rice.md` | Pending Part 3 retemplate |
| 3.7 | Fruit Purées | `data/workbench/briefings/fruit-purees.md` | Pending Part 3 retemplate |
| 3.8 | Non-Root Vegetable Purées | `data/workbench/briefings/non-root-vegetable-purees.md` | Pending Part 3 retemplate |
| 3.9 | Root-Vegetable Purées | `data/workbench/briefings/root-vegetable-purees.md` | Pending Part 3 retemplate |
| 3.10 | Meat and Poultry Purées | `data/workbench/briefings/meat-and-poultry-purees.md` | Pending Part 3 retemplate |
| 3.11 | Fish-Containing Baby Foods | `data/workbench/briefings/fish-containing-baby-foods.md` | Pending Part 3 retemplate |
| 3.12 | Mixed Meals (Rice-Containing) | `data/workbench/briefings/mixed-meals-rice-containing.md` | Pending Part 3 retemplate |
| 3.13 | Mixed Meals (Non-Rice) | `data/workbench/briefings/mixed-meals-non-rice.md` | Pending Part 3 retemplate |
| 3.14 | Teething and Snacks (Rice-Based) | `data/workbench/briefings/teething-and-snacks-rice-based.md` | Pending Part 3 retemplate |
| 3.15 | Teething and Snacks (Non-Rice) | `data/workbench/briefings/teething-and-snacks-non-rice.md` | Pending Part 3 retemplate |

## Editorial note

The fifteen chapters above exist today as Standards Briefings in `data/workbench/briefings/`. Each briefing is a complete, regression-tested document covering the Master Limit Table, per-analyte rationale, adversarial read, anti-circumvention argument, 9-gate pre-publication checklist, sources cited, and provenance footer. The briefings carry the substantive content required for Part 3.

The retemplating work — inserting the toxicology callouts (per Part 2.2 and Part 5.3 Glossary), pruning the workbench-side engine arithmetic (per the wiki/HMTc firewall), aligning section headings to the bound-manual template, and standardizing source citation format — is mechanical work scheduled for the next session in the Program Manual build sequence (see the project plan).

For the v0-pre-audit build of this manual, Part 3 is represented by this introduction and the briefing files referenced above. The v0 build assembles the source material so adversarial-audit work in Pre-work 6 can begin while Part 3 is retemplated in parallel. The audit-strengthened v0 of the bound manual will include the fifteen retemplated chapters in their final form.

## Cross-references

- Master percentile methodology that produced the limit tables: Part 5.1 (How HMTc Standards Are Set) and Governing Principles.
- Toxicology callouts referenced from each chapter: Part 5.3 (Glossary) with canonical reviews on heavymetalindex.com.
- Program-level adversarial read (counterpart to per-product reads in each chapter): Part 5.2.
- Testing schedule that operationalizes surveillance for each product category: Part 4.
