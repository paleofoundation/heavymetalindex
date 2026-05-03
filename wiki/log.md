---
title: Log
description: Append-only chronological log of ingests, queries, lint passes, certification cross-references, and schema changes.
audience: [researcher, regulator]
updated: 2026-05-03
---

This page is an append-only log of substantive changes to the Heavy Metal Index. Each entry names the operation, the handle or citekey involved, and a short note on what changed. Git commit history is the authoritative record; this log is a human-readable index over it.

## [2026-05-03] ingest | fda2022-tds-elements-fy2018-fy2020 - FDA Total Diet Study FY2018-FY2020 elements dataset

Pages touched: [[sources/fda2022-tds-elements-fy2018-fy2020]], [[sources/index]], [[ingredients/index]], [[products/fruit-juice-not-canned]], [[products/fruit-juices-apple-containing]], [[products/fruit-juices-non-apple]], [[products/regulatory-crosswalk-field-findings]], [[lint/2026-05-03-fda-tds-elements-ingest-audit]]

Notes: Preserved the FDA TDS FY2018-FY2020 element-results CSV and analytical-results key PDF in `raw/reports/`; generated normalized row-level evidence, per-food/per-analyte summaries, and a TDS food-to-ingredient routing table. Created 68 new ingredient pages and updated 22 existing ingredient pages so every TDS food has a stable wiki destination for future ingests. Reported zero concentrations remain FDA-reported zeroes with reporting limits retained separately; no brand claims, HMTc threshold claims, or regulatory exceedance claims were added.


## [2026-05-01] schema | category-5-step-0-beverages - locked beverage row architecture

Pages touched: [[products/category-5-beverages]], [[products/index]], [[ingredients/index]], [[lint/2026-05-01-category-5-step-0-beverages-ingest-audit]]

Notes: Promoted the locked Category 5 Step 0 beverage taxonomy from a flat artifact into a wiki hub with sixteen row pages and linked ingredient nodes. Corrected the ingredient-routing rule by creating ingredient pages for product and ingredient-only evidence so values have wiki homes before app use.

## [2026-05-01] ingest | fera2014-fsa-metals-infant-foods-formula - FSA/Fera FS102048 infant-food metals survey

Pages touched: [[sources/fera2014-fsa-metals-infant-foods-formula]], [[sources/index]], [[lint/2026-05-01-fs102048-fsa-infant-foods-ingest-audit]], [[lint/index]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/baby-cereals-dry-non-rice]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/meat-and-poultry-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]], [[products/fruit-juice-not-canned]], [[products/teething-and-snacks-non-rice]], [[products/teething-and-snacks-rice-based]]

Notes: Promoted the FSA/Fera FS102048 PDF from `raw/reports/` and routed its 2013-2014 UK infant formula, infant food, baby drink, snack, and non-infant-specific composite evidence. Preserved product form, soy/non-soy formula status, rice/non-rice split, root/non-root vegetable routing, fish inclusion, as-sold basis, LoD/LoQ flags, and analyte identity. Table 6 non-infant-specific composites were queued for future ingredient/app profiles rather than forced into infant-product row distributions. No HMTc threshold claims, certified-brand claims, current-market claims, or brand rankings were added.

## [2026-05-01] ingest | fda2026-infant-formula-product-testing-results — FDA infant-formula toxic-element workbook

Pages touched: [[sources/fda2026-infant-formula-product-testing-results]], [[sources/index]], [[products/index]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]], [[products/infant-formula-concentrated-liquid-non-soy]], [[products/infant-formula-concentrated-liquid-soy-based]], [[lint/2026-05-01-infant-formula-fda-testing-ingest-audit]]

Notes: Promoted the FDA FY2023-FY2025 infant-formula toxic-element workbook from `raw/reports/` and added the matching PDF as its human-audit companion. Routed powder and ready-to-feed results to the four existing formula rows that match their powder/ready-to-feed and soy/non-soy splits. Preserved concentrated-liquid results in two candidate extension pages rather than merging them into ready-to-feed rows or silently changing the locked sixteen-row taxonomy. Added reciprocal source-page/product-page citation rules so promoted source pages and updated product pages cannot drift apart silently. No HMTc threshold claims, certified-brand claims, or brand rankings were added.

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

## [2026-05-01] ingest | category-5-plant-milk-corpus-pilot - raw markdown corpus pilot for Category 5 plant milks

Pages touched: [[corpus/index]], [[sources/milani2023-trace-elements-soy-based-beverages]], [[sources/damato2026-inorganic-arsenic-rice-based-beverages]], [[sources/marques2021-trace-elements-milks-plant-based-drinks]], [[regulations/eu2023-arsenic-rice-based-drinks]], [[products/plant-milks-soy-based]], [[products/plant-milks-rice-based]], [[products/plant-milks-non-soy-non-rice]], [[products/regulatory-crosswalk-field-findings]], [[ingredients/plant-milk]], [[ingredients/soy]], [[ingredients/rice]], [[lint/2026-05-01-category-5-plant-milk-corpus-pilot-audit]]

Notes: Generated a raw markdown corpus pilot from marker/PyTorch outputs and promoted three Category 5 beverage papers into curated source nodes. Added a direct EU iAs regulatory comparison for rice-based drinks, soy-beverage occurrence evidence with compliance blocked pending direct legal/unit review, and a non-soy/non-rice gap signal. Finished-product values were not copied into ingredient contamination profiles.
