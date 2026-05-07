---
title: "Update History"
type: "log-index"
updated: "2026-05-07"
---
# Heavy Metal Index Change Log

This is the public archive of Heavy Metal Index ingests, lints, corrections, schema changes, and source-routing work. The readable pages are generated from the canonical JSONL ledger at `data/log/entries.jsonl` so records stay intact while the public archive remains navigable.

Corrections should be added as new correction entries. Existing entries are retained for historical context instead of being silently deleted.

- Total entries: 49
- Ledger SHA-256: `f97c26c8bd6a8f64641c73069cc79398ccf6ec1b1e927112212f42c89cabba23`
- Complete readable archive: [[log/all|all entries]]
- Public machine-readable ledger copy: [[log/records|records JSONL]]

## Archive By Month

- [[log/2026-05|May 2026]] - 9 entries
- [[log/2026-04|April 2026]] - 40 entries

## Archive By Year

- [[log/2026|2026]] - 49 entries

## Latest Entries

<a id="2026-05-07-synthesis-who-gemsfood-arsenic-page-routing"></a>

### [2026-05-07] synthesis | who-gemsfood-arsenic-page-routing - WHO GEMS/Food arsenic occurrence routed to public pages

Entry ID: `2026-05-07-synthesis-who-gemsfood-arsenic-page-routing`

Pages touched: [[sources/who-gemsfood-heavy-metal-contaminants]], [[metals/arsenic-inorganic]], [[metals/arsenic-total]], [[ingredients/rice]], [[ingredients/algae-seaweed]], [[ingredients/fish]], [[ingredients/seafood]], [[ingredients/bivalve-molluscs]], [[ingredients/fruit-juice]], [[ingredients/water]], [[ingredients/vegetables]], [[ingredients/root-vegetables]], [[ingredients/leafy-greens]], [[ingredients/wild-mushrooms]], [[products/baby-cereals-dry-rice-based]], [[products/mixed-meals-rice-containing]], [[ingredients/index]], [[log]]

Notes: Promoted the cleaned WHO GEMS/Food arsenic occurrence summaries from source-layer evidence into page-level occurrence-context sections. Added a route ledger at `data/evidence/who_gemsfood_arsenic_page_routes.csv` and created a dedicated algae/seaweed ingredient node. The sections preserve species labels and WHO-region scope; they do not infer brand claims, direct regulatory exceedance, or HMTc standards values.

<a id="2026-05-04-lint-2026-05-04-broad-lint-pass"></a>

### [2026-05-04] lint | 2026-05-04-broad-lint-pass - broad mechanical and editorial lint across 455 pages

Entry ID: `2026-05-04-lint-2026-05-04-broad-lint-pass`

Pages touched: [[lint/2026-05-04-broad-lint-pass]]

Notes: First broad lint pass since the 2026-05-03 mitigation and Codex CXC 81-2022 ingest. Findings: 4 stale pending claims about now-ingested Codex CXS 193-1995 and CXC 81-2022 (synthesis.md lines 50 and 54; ingredients/cocoa.md line 74; regulations/jecfa-cadmium-ptmi.md TBD); 543 broken wikilinks resolving to 228 unique missing targets (the majority intentional backlog markers per the 2026-04-27 convention but with three unusually high-frequency missing sources - `sources/fera2014-fsa-metals-infant-foods-formula` at 141 references, `sources/bair2022-heavy-metals-infant-toddler-foods` at 34, `sources/price2023-baby-food-lead-biokinetic-models` at 24 - that warrant cite-key audit and migration); 14 anti-pattern `[[raw/...]]` wikilinks in log entries that should be plain inline references; 2 orphans (methodology/corpus-genesis-2026-04 and sources/efsa-food-safety-research-needs-2030); only log.md missing required frontmatter (correct exemption); zero `contamination_profile` metal sub-blocks populated across all 15 ingredient pages, all on the 8-metal schema. Action priority list with 8 items in the report. Recommended next sources via WebFetch pathway: Codex CXC 49-2001, FDA 2023 apple juice iAs action level, FDA 21 CFR 165.110 bottled water lead, EU 2023/915 (already ingested per log 2026-05-02 - verify), Codex CCCF18 documents.

<a id="2026-05-04-ingest-who-gemsfood-heavy-metal-contaminants"></a>

### [2026-05-04] ingest | who-gemsfood-heavy-metal-contaminants - WHO GEMS/Food heavy-metal contaminant exports

Entry ID: `2026-05-04-ingest-who-gemsfood-heavy-metal-contaminants`

Pages touched: [[sources/who-gemsfood-heavy-metal-contaminants]], [[sources/index]], [[log]]
Notes: Preserved 193 WHO GEMS/Food CSV export files under `raw/reports/gemsfood-contaminants/`; generated 2,109,234 normalized row-level records and 14,027 lower-bound summary rows. Original result text, units, LOD/LOQ, basis, QA, WHO region, food identifiers, and serial numbers are retained; no brand claims, HMTc threshold claims, or regulatory exceedance claims were added.

<a id="2026-05-03-schema-governance-pages-publication"></a>

### [2026-05-03] schema | governance-pages-publication - public methodology and governance layer expanded

Entry ID: `2026-05-03-schema-governance-pages-publication`

Pages touched: [[methodology]], [[methodology/source-inclusion-protocol]], [[methodology/quality-assurance-audit-protocol]], [[editorial-standards]], [[editorial-review-and-sign-off]], [[conflict-of-interest-policy]], [[corrections-policy]], [[dispute-resolution-policy]], [[about]], [[contact]]
Notes: Replaced the most visible public governance gaps with concrete pages for source inclusion, audit design, editorial review and sign-off, conflict handling, corrections, and disputes. The methodology page no longer points readers to future placeholders for the core operating rules; it now links to the current live governance set while still preserving the distinction between preview status and fully published audit results.

<a id="2026-05-03-schema-persistent-wiki-ingest-rule"></a>

### [2026-05-03] schema | persistent-wiki-ingest-rule - compiled-wiki ingest contract for the live build

Entry ID: `2026-05-03-schema-persistent-wiki-ingest-rule`

Pages touched: [[methodology]], [[methodology/persistent-wiki-ingest-rule]], [[methodology/raw-reports-studies-ingest-workflow]], `CLAUDE.md`
Notes: Converted the abstract "LLM wiki" pattern into an explicit Heavy Metal Index ingest rule tied to the current `heavymetalindex.com` build. The new contract makes the evidence register a first-class layer between raw files and public wiki pages, requires stub creation before routed evidence can attach, and defines product-page completion in terms of the standards matrix, measured-values ledger exports, and routing-audit visibility rather than treating local files or source-page stubs as completed ingest.

<a id="2026-05-03-ingest-fda2022-tds-elements-fy2018-fy2020"></a>

### [2026-05-03] ingest | fda2022-tds-elements-fy2018-fy2020 - FDA Total Diet Study FY2018-FY2020 elements dataset

Entry ID: `2026-05-03-ingest-fda2022-tds-elements-fy2018-fy2020`

Pages touched: [[sources/fda2022-tds-elements-fy2018-fy2020]], [[sources/index]], [[ingredients/index]], [[products/fruit-juices-apple-containing]], [[products/fruit-juices-non-apple]], [[products/regulatory-crosswalk-field-findings]], [[lint/2026-05-03-fda-tds-elements-ingest-audit]]

Notes: Preserved the FDA TDS FY2018-FY2020 element-results CSV and analytical-results key PDF outside Git in `raw/reports/`; generated normalized row-level evidence, per-food/per-analyte summaries, and a TDS food-to-ingredient routing table. Created missing ingredient pages and updated existing ingredient pages so every TDS food has a stable wiki destination for future ingests. Reported zero concentrations remain FDA-reported zeroes with reporting limits retained separately; no brand claims, HMTc threshold claims, or regulatory exceedance claims were added.

<a id="2026-05-02-ingest-fda-ctz-lead-final-guidance-provenance"></a>

### [2026-05-02] ingest | fda-ctz-lead-final-guidance-provenance - FDA lead action-level source family and HMTc handling

Entry ID: `2026-05-02-ingest-fda-ctz-lead-final-guidance-provenance`

Pages touched: [[sources/fda-ctz-Pb-babyfood-2025]], [[regulations/fda2025-lead-processed-baby-foods]], [[regulations/fda-closer-to-zero]], [[regulations/fda-ctz-Pb-babyfood-10ppb]], [[regulations/fda-ctz-Pb-rootveg-20ppb]], [[regulations/fda-ctz-Pb-cereal-20ppb]], [[metals/lead]], [[certification]], [[products/regulatory-crosswalk-field-findings]], `raw/reports/INGESTED.md`
Notes: Re-ingested the two FDA January 2025 lead guidance artifacts as one source family: the 19-page full guidance PDF is the copy of record, and the 3-page FDA guidance webpage PDF is the official landing-page/current-status artifact. Created the missing canonical regulation hub `[[regulations/fda2025-lead-processed-baby-foods]]` used by product crosswalk tables, and added explicit handling for "Contains Nonbinding Recommendations": preserve it as legal/regulatory status, do not call the action levels statutory legal limits or HMTc standards, but do treat them as FDA final guidance and enforcement-relevant federal context. The HMTc standards-development implication is now explicit: FDA's nonbinding, lead-only, category-limited, iterative guidance makes a transparent multi-metal certification program more important, not less, provided the wiki remains separate from public certification pass/fail decisions.

<a id="2026-05-02-ingest-eu-2023-915-contaminants-maximum-levels"></a>

### [2026-05-02] ingest | eu-2023-915-contaminants-maximum-levels - EU metal maximum levels wired into crosswalk layer

Entry ID: `2026-05-02-ingest-eu-2023-915-contaminants-maximum-levels`

Pages touched: [[sources/eu-2023-915-contaminants-maximum-levels]], [[regulations/eu2023-contaminants-maximum-levels]], [[regulations/eu-2023-915-cadmium]], [[regulations/eu2023-arsenic-rice-based-drinks]], [[products/regulatory-crosswalk-field-findings]], [[metals/lead]], [[metals/cadmium]], [[metals/arsenic-inorganic]], [[metals/mercury-total]], [[metals/tin]], [[ingredients/rice]], [[ingredients/wheat]], [[ingredients/potatoes]], [[ingredients/spinach]], [[ingredients/sunflower-seeds]], [[ingredients/bivalve-molluscs]], [[ingredients/fish]], [[ingredients/organ-meats]], [[ingredients/wild-mushrooms]], [[ingredients/cocoa]], [[ingredients/chocolate]], [[lint/2026-05-02-raw-reports-studies-ingest-inventory]]

Notes: Ingested Commission Regulation (EU) 2023/915 as a primary regulatory source for binding EU contaminant maximum levels, with local PDF provenance, SHA-256, and EUR-Lex access URL preserved. Added product-facing and ingredient-facing Pb, Cd, inorganic arsenic, total mercury, and inorganic tin limits to the regulation layer, `data/evidence/regulatory_limits.csv`, and `data/evidence/product_regulatory_crosswalk.csv`. Regenerated product-page crosswalk sections so top product pages compare federal/EU limit context against field findings in decision-first language and preserve basis/species blockers instead of displaying percentile-heavy p-value tables in the critical comparison layer. Updated ingredient and metal nodes to replace pending EU ingest notes with concrete matrix-specific values. The raw reports inventory now recognizes this PDF as matched to a public source page and shows no remaining raw report PDFs requiring a source page. Legal note: the local PDF is the original Official Journal text; current enforcement/legal use should check the current consolidated EUR-Lex version because EU contaminant regulations can be amended.

<a id="2026-05-01-ingest-category-5-plant-milk-corpus-pilot"></a>

### [2026-05-01] ingest | category-5-plant-milk-corpus-pilot - Category 5 plant-milk corpus pilot

Entry ID: `2026-05-01-ingest-category-5-plant-milk-corpus-pilot`

Pages touched: [[corpus/index]], [[sources/milani2023-trace-elements-soy-based-beverages]], [[sources/damato2026-inorganic-arsenic-rice-based-beverages]], [[sources/marques2021-trace-elements-milks-plant-based-drinks]], [[regulations/eu2023-arsenic-rice-based-drinks]], [[products/plant-milks-soy-based]], [[products/plant-milks-rice-based]], [[products/plant-milks-non-soy-non-rice]], [[products/regulatory-crosswalk-field-findings]], [[ingredients/plant-milk]], [[ingredients/soy]], [[ingredients/rice]], [[lint/2026-05-01-category-5-plant-milk-corpus-pilot-audit]]

Notes: Promoted the first raw-markdown corpus pilot into the canonical wiki path for Category 5 beverage rows. Added curated source nodes for Milani 2023, D'Amato 2026, and Marques 2021; added plant-milk product pages; added an EU rice-drink inorganic arsenic regulation node; added structured occurrence and regulatory crosswalk data; and added [[products/regulatory-crosswalk-field-findings]] as the critical comparison layer.

<a id="2026-04-30-ingest-ufelle2021-metals-chapter"></a>

### [2026-04-30] ingest | ufelle2021-metals-chapter - chapter-level metals toxicology re-ingest

Entry ID: `2026-04-30-ingest-ufelle2021-metals-chapter`

Pages touched: [[sources/ufelle2021-metals-chapter]], [[metals/arsenic]], [[metals/arsenic-inorganic]], [[metals/arsenic-total]], [[metals/cadmium]], [[metals/chromium]], [[metals/cobalt]], [[metals/copper]], [[metals/iron]], [[metals/lead]], [[metals/magnesium]], [[metals/mercury]], [[metals/mercury-methyl]], [[metals/mercury-total]], [[metals/molybdenum]], [[metals/nickel]], [[metals/zinc]], [[metals/aluminum]], [[metals/antimony]], [[metals/barium]], [[metals/beryllium]], [[metals/cesium]], [[metals/gold]], [[metals/lithium]], [[metals/manganese]], [[metals/palladium]], [[metals/platinum]], [[metals/silver]], [[metals/tellurium]], [[metals/thallium]], [[metals/tin]], [[metals/titanium]], [[metals/uranium]], [[metals/vanadium]]
Notes: Re-ingested Casarett & Doull's Essentials of Toxicology Chapter 23 as a whole-chapter metal toxicology source rather than a cadmium-only corroborating source. The rendered source page now visibly preserves the exact chapter title, exact figure/table titles, chapter section structure, and a metal-node map across existing and newly stubbed wiki metal/species pages, while marking the source as textbook synthesis with no food occurrence values.
