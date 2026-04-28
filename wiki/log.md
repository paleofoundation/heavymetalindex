---
title: Log
description: Append-only chronological log of ingests, queries, lint passes, certification cross-references, and schema changes.
audience: [researcher, regulator]
updated: 2026-04-24
---

This page is an append-only log of substantive changes to the Heavy Metal Index. Each entry names the operation, the handle or citekey involved, and a short note on what changed. Git commit history is the authoritative record; this log is a human-readable index over it.

## [2026-04-28] ingest | category-1-source-promotion-batch-1 — First promoted infant-food sources

Pages touched: [[sources/collado-lopez2025-heavy-metals-baby-food-formula]], [[sources/bair2022-heavy-metals-infant-toddler-foods]], [[sources/price2023-baby-food-lead-biokinetic-models]], [[sources/index]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]], [[products/baby-cereals-dry-non-rice]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-rice-containing]], [[products/fruit-juice-not-canned]], [[products/teething-and-snacks-rice-based]]

Notes: Promoted three A-tier source notes from the converted `raw/markdown` corpus and used them to populate only source-supported claims on Category 1 product stubs. Kept powder-vs-ready-to-feed, puree-specific, snack-specific, and row-specific concentration gaps marked with `<!-- UNCITED -->` where the promoted sources do not resolve the exact row. No HMTc threshold claims, certified-brand claims, or brand rankings were added.

## [2026-04-28] ingest | category-1-products-scaffold — HMTc Category 1 product scaffolds

Pages touched: [[lint/2026-04-27-category-1-coverage-matrix]], [[products/index]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]], [[products/baby-cereals-dry-non-rice]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/meat-and-poultry-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]], [[products/fruit-juice-not-canned]], [[products/teething-and-snacks-non-rice]], [[products/teething-and-snacks-rice-based]]

Notes: Created structural product-category scaffolds for the sixteen locked HMTc Category 1 rows, ages 0-5. Source coverage is currently zero because `raw/` contains no usable source files and no Category 1 sources have been promoted to `wiki/sources/`. Pages preserve row metadata, clean-counterpart relationships, audience tags, and inline `<!-- UNCITED -->` markers. No substantive synthesis, regulatory floor values, HMTc threshold claims, brand claims, or source citations were added.

## [2026-04-24] schema | repo-init — Initial Quartz 4 scaffold

Pages touched: [[index]], [[overview]], [[synthesis]], [[methodology]], [[about]], [[terms]], [[contact]], [[metals/lead]], [[metals/cadmium]], [[metals/arsenic-inorganic]], [[metals/arsenic-total]], [[metals/mercury-methyl]], [[metals/mercury-total]], [[metals/nickel]], [[metals/aluminum]], [[metals/chromium]], [[metals/tin]]

Notes: Repository initialized with the directory layout specified in `CLAUDE.md`. Quartz 4 scaffolded with `wiki/` as the content directory. Core stub pages created for landing, overview, synthesis, methodology, about, terms, contact, and the eight in-scope metals. No substantive ingest yet; corpus conversion is in progress and bulk ingest will begin when the converted markdown lands.
