---
title: Log
description: Append-only chronological log of ingests, queries, lint passes, certification cross-references, and schema changes.
audience: [researcher, regulator]
updated: 2026-04-24
---

This page is an append-only log of substantive changes to the Heavy Metal Index. Each entry names the operation, the handle or citekey involved, and a short note on what changed. Git commit history is the authoritative record; this log is a human-readable index over it.

## [2026-04-28] ingest | category-1-source-promotion-batch-2 — Raw studies promoted for infant-food pages

Pages touched: [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]], [[sources/meli2024-chemical-characterization-baby-food-italy]], [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]], [[sources/index]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/meat-and-poultry-purees]], [[products/fish-containing-baby-foods]]

Notes: Promoted three A-tier studies from the newly copied `raw/studies/` PDF layer and matched converted `raw/markdown/` corpus. Added source-supported claims for infant formula powder, rice cereal, fruit and vegetable purees, meat foods, and fish-containing baby foods. Preserved row-specific caveats where studies used broad dietary categories, total arsenic rather than inorganic arsenic, total mercury rather than methylmercury, or diet-stage samples rather than finished-product rows. No HMTc thresholds, certified-brand claims, or brand rankings were added.

## [2026-04-28] ingest | raw-studies-category-1-candidates — raw/studies PDF ingest and Category 1 candidate queue

Pages touched: [[lint/2026-04-28-raw-studies-category-1-candidate-ingest]]

Notes: Copied 331 PDFs from `/Users/karenpendergrass/Desktop/heavy-metal-index/raw/studies/` into local `raw/studies/` for source availability. Raw PDFs remain ignored by git per repository policy; `raw/studies/INGESTED.md` records the local ingest state. Generated a Category 1 candidate queue for infant and child food source promotion using filename, metadata, and matched converted markdown where available. This is triage only: no new public claims or source citations are promoted from this queue until a human-reviewed `wiki/sources/<cite-key>.md` page exists.

## [2026-04-28] ingest | category-1-source-promotion-batch-1 — First promoted infant-food sources

Pages touched: [[sources/collado-lopez2025-heavy-metals-baby-food-formula]], [[sources/bair2022-heavy-metals-infant-toddler-foods]], [[sources/price2023-baby-food-lead-biokinetic-models]], [[sources/index]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]], [[products/baby-cereals-dry-non-rice]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-rice-containing]], [[products/fruit-juice-not-canned]], [[products/teething-and-snacks-rice-based]]

Notes: Promoted three A-tier source notes from the converted `raw/markdown` corpus and used them to populate only source-supported claims on Category 1 product stubs. Kept powder-vs-ready-to-feed, puree-specific, snack-specific, and row-specific concentration gaps marked with `<!-- UNCITED -->` where the promoted sources do not resolve the exact row. No HMTc threshold claims, certified-brand claims, or brand rankings were added.

## [2026-04-28] ingest | category-1-products-scaffold — HMTc Category 1 product scaffolds

Pages touched: [[lint/2026-04-27-category-1-coverage-matrix]], [[products/index]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]], [[products/baby-cereals-dry-non-rice]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/meat-and-poultry-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]], [[products/fruit-juice-not-canned]], [[products/teething-and-snacks-non-rice]], [[products/teething-and-snacks-rice-based]]

Notes: Created structural product-category scaffolds for the sixteen locked HMTc Category 1 rows, ages 0-5. Source coverage is currently zero because `raw/` contains no usable source files and no Category 1 sources have been promoted to `wiki/sources/`. Pages preserve row metadata, clean-counterpart relationships, audience tags, and inline `<!-- UNCITED -->` markers. No substantive synthesis, regulatory floor values, HMTc threshold claims, brand claims, or source citations were added.

## [2026-04-24] schema | repo-init — Initial Quartz 4 scaffold

Pages touched: [[index]], [[overview]], [[synthesis]], [[methodology]], [[about]], [[terms]], [[contact]], [[metals/lead]], [[metals/cadmium]], [[metals/arsenic-inorganic]], [[metals/arsenic-total]], [[metals/mercury-methyl]], [[metals/mercury-total]], [[metals/nickel]], [[metals/aluminum]], [[metals/chromium]], [[metals/tin]]

Notes: Repository initialized with the directory layout specified in `CLAUDE.md`. Quartz 4 scaffolded with `wiki/` as the content directory. Core stub pages created for landing, overview, synthesis, methodology, about, terms, contact, and the eight in-scope metals. No substantive ingest yet; corpus conversion is in progress and bulk ingest will begin when the converted markdown lands.
