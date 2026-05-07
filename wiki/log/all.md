---
title: "Complete Change Log"
type: "log-archive-all"
updated: "2026-05-07"
---
# Complete Change Log

Stable complete archive generated from `data/log/entries.jsonl`.

- Back to [[log|Update History]]
- Ledger SHA-256: `6653850cff012a292bf29526d2d3fc99cf5b6664e37e5ee3011f6445e221932a`

<a id="2026-05-07-synthesis-who-gemsfood-arsenic-page-routing"></a>

## [2026-05-07] synthesis | who-gemsfood-arsenic-page-routing - WHO GEMS/Food arsenic occurrence routed to public pages

Entry ID: `2026-05-07-synthesis-who-gemsfood-arsenic-page-routing`

Pages touched: [[sources/who-gemsfood-heavy-metal-contaminants]], [[metals/arsenic-inorganic]], [[metals/arsenic-total]], [[ingredients/rice]], [[ingredients/algae-seaweed]], [[ingredients/fish]], [[ingredients/seafood]], [[ingredients/bivalve-molluscs]], [[ingredients/fruit-juice]], [[ingredients/water]], [[ingredients/vegetables]], [[ingredients/root-vegetables]], [[ingredients/leafy-greens]], [[ingredients/wild-mushrooms]], [[products/baby-cereals-dry-rice-based]], [[products/mixed-meals-rice-containing]], [[ingredients/index]], [[log]]

Notes: Promoted the cleaned WHO GEMS/Food arsenic occurrence summaries from source-layer evidence into page-level occurrence-context sections. Added a route ledger at `data/evidence/who_gemsfood_arsenic_page_routes.csv` and created a dedicated algae/seaweed ingredient node. The sections preserve species labels and WHO-region scope; they do not infer brand claims, direct regulatory exceedance, or HMTc standards values.

<a id="2026-05-07-synthesis-who-gemsfood-apple-juice-routing"></a>

## [2026-05-07] synthesis | who-gemsfood-apple-juice-routing - WHO GEMS/Food arsenic context routed to apple juice pages

Entry ID: `2026-05-07-synthesis-who-gemsfood-apple-juice-routing`

Pages touched: [[sources/who-gemsfood-heavy-metal-contaminants]], [[ingredients/apple]], [[ingredients/apple-juice]], [[products/fruit-juices-apple-containing]], [[log]]

Notes: Added the missing GEMS/Food arsenic routing for apple juice. The export does not expose an exact Apple juice row, so the routed page sections now carry broad fruit-juice inorganic arsenic rows plus upstream apple-fruit rows as occurrence context only. Public page tables display ppm converted from the GEMS ug/kg summary values; the route ledger preserves source-species, WHO-region scope, sample count, and original ug/kg percentile values. No HMTc standard, brand claim, or direct regulatory exceedance is inferred.

<a id="2026-05-04-lint-2026-05-04-broad-lint-pass"></a>

## [2026-05-04] lint | 2026-05-04-broad-lint-pass - broad mechanical and editorial lint across 455 pages

Entry ID: `2026-05-04-lint-2026-05-04-broad-lint-pass`

Pages touched: [[lint/2026-05-04-broad-lint-pass]]

Notes: First broad lint pass since the 2026-05-03 mitigation and Codex CXC 81-2022 ingest. Findings: 4 stale pending claims about now-ingested Codex CXS 193-1995 and CXC 81-2022 (synthesis.md lines 50 and 54; ingredients/cocoa.md line 74; regulations/jecfa-cadmium-ptmi.md TBD); 543 broken wikilinks resolving to 228 unique missing targets (the majority intentional backlog markers per the 2026-04-27 convention but with three unusually high-frequency missing sources - `sources/fera2014-fsa-metals-infant-foods-formula` at 141 references, `sources/bair2022-heavy-metals-infant-toddler-foods` at 34, `sources/price2023-baby-food-lead-biokinetic-models` at 24 - that warrant cite-key audit and migration); 14 anti-pattern `[[raw/...]]` wikilinks in log entries that should be plain inline references; 2 orphans (methodology/corpus-genesis-2026-04 and sources/efsa-food-safety-research-needs-2030); only log.md missing required frontmatter (correct exemption); zero `contamination_profile` metal sub-blocks populated across all 15 ingredient pages, all on the 8-metal schema. Action priority list with 8 items in the report. Recommended next sources via WebFetch pathway: Codex CXC 49-2001, FDA 2023 apple juice iAs action level, FDA 21 CFR 165.110 bottled water lead, EU 2023/915 (already ingested per log 2026-05-02 - verify), Codex CCCF18 documents.

<a id="2026-05-04-ingest-who-gemsfood-heavy-metal-contaminants"></a>

## [2026-05-04] ingest | who-gemsfood-heavy-metal-contaminants - WHO GEMS/Food heavy-metal contaminant exports

Entry ID: `2026-05-04-ingest-who-gemsfood-heavy-metal-contaminants`

Pages touched: [[sources/who-gemsfood-heavy-metal-contaminants]], [[sources/index]], [[log]]
Notes: Preserved 193 WHO GEMS/Food CSV export files under `raw/reports/gemsfood-contaminants/`; generated 2,109,234 normalized row-level records and 14,027 lower-bound summary rows. Original result text, units, LOD/LOQ, basis, QA, WHO region, food identifiers, and serial numbers are retained; no brand claims, HMTc threshold claims, or regulatory exceedance claims were added.

<a id="2026-05-03-schema-governance-pages-publication"></a>

## [2026-05-03] schema | governance-pages-publication - public methodology and governance layer expanded

Entry ID: `2026-05-03-schema-governance-pages-publication`

Pages touched: [[methodology]], [[methodology/source-inclusion-protocol]], [[methodology/quality-assurance-audit-protocol]], [[editorial-standards]], [[editorial-review-and-sign-off]], [[conflict-of-interest-policy]], [[corrections-policy]], [[dispute-resolution-policy]], [[about]], [[contact]]
Notes: Replaced the most visible public governance gaps with concrete pages for source inclusion, audit design, editorial review and sign-off, conflict handling, corrections, and disputes. The methodology page no longer points readers to future placeholders for the core operating rules; it now links to the current live governance set while still preserving the distinction between preview status and fully published audit results.

<a id="2026-05-03-schema-persistent-wiki-ingest-rule"></a>

## [2026-05-03] schema | persistent-wiki-ingest-rule - compiled-wiki ingest contract for the live build

Entry ID: `2026-05-03-schema-persistent-wiki-ingest-rule`

Pages touched: [[methodology]], [[methodology/persistent-wiki-ingest-rule]], [[methodology/raw-reports-studies-ingest-workflow]], `CLAUDE.md`
Notes: Converted the abstract "LLM wiki" pattern into an explicit Heavy Metal Index ingest rule tied to the current `heavymetalindex.com` build. The new contract makes the evidence register a first-class layer between raw files and public wiki pages, requires stub creation before routed evidence can attach, and defines product-page completion in terms of the standards matrix, measured-values ledger exports, and routing-audit visibility rather than treating local files or source-page stubs as completed ingest.

<a id="2026-05-03-ingest-fda2022-tds-elements-fy2018-fy2020"></a>

## [2026-05-03] ingest | fda2022-tds-elements-fy2018-fy2020 - FDA Total Diet Study FY2018-FY2020 elements dataset

Entry ID: `2026-05-03-ingest-fda2022-tds-elements-fy2018-fy2020`

Pages touched: [[sources/fda2022-tds-elements-fy2018-fy2020]], [[sources/index]], [[ingredients/index]], [[products/fruit-juices-apple-containing]], [[products/fruit-juices-non-apple]], [[products/regulatory-crosswalk-field-findings]], [[lint/2026-05-03-fda-tds-elements-ingest-audit]]

Notes: Preserved the FDA TDS FY2018-FY2020 element-results CSV and analytical-results key PDF outside Git in `raw/reports/`; generated normalized row-level evidence, per-food/per-analyte summaries, and a TDS food-to-ingredient routing table. Created missing ingredient pages and updated existing ingredient pages so every TDS food has a stable wiki destination for future ingests. Reported zero concentrations remain FDA-reported zeroes with reporting limits retained separately; no brand claims, HMTc threshold claims, or regulatory exceedance claims were added.

<a id="2026-05-02-ingest-fda-ctz-lead-final-guidance-provenance"></a>

## [2026-05-02] ingest | fda-ctz-lead-final-guidance-provenance - FDA lead action-level source family and HMTc handling

Entry ID: `2026-05-02-ingest-fda-ctz-lead-final-guidance-provenance`

Pages touched: [[sources/fda-ctz-Pb-babyfood-2025]], [[regulations/fda2025-lead-processed-baby-foods]], [[regulations/fda-closer-to-zero]], [[regulations/fda-ctz-Pb-babyfood-10ppb]], [[regulations/fda-ctz-Pb-rootveg-20ppb]], [[regulations/fda-ctz-Pb-cereal-20ppb]], [[metals/lead]], [[certification]], [[products/regulatory-crosswalk-field-findings]], `raw/reports/INGESTED.md`
Notes: Re-ingested the two FDA January 2025 lead guidance artifacts as one source family: the 19-page full guidance PDF is the copy of record, and the 3-page FDA guidance webpage PDF is the official landing-page/current-status artifact. Created the missing canonical regulation hub `[[regulations/fda2025-lead-processed-baby-foods]]` used by product crosswalk tables, and added explicit handling for "Contains Nonbinding Recommendations": preserve it as legal/regulatory status, do not call the action levels statutory legal limits or HMTc standards, but do treat them as FDA final guidance and enforcement-relevant federal context. The HMTc standards-development implication is now explicit: FDA's nonbinding, lead-only, category-limited, iterative guidance makes a transparent multi-metal certification program more important, not less, provided the wiki remains separate from public certification pass/fail decisions.

<a id="2026-05-02-ingest-eu-2023-915-contaminants-maximum-levels"></a>

## [2026-05-02] ingest | eu-2023-915-contaminants-maximum-levels - EU metal maximum levels wired into crosswalk layer

Entry ID: `2026-05-02-ingest-eu-2023-915-contaminants-maximum-levels`

Pages touched: [[sources/eu-2023-915-contaminants-maximum-levels]], [[regulations/eu2023-contaminants-maximum-levels]], [[regulations/eu-2023-915-cadmium]], [[regulations/eu2023-arsenic-rice-based-drinks]], [[products/regulatory-crosswalk-field-findings]], [[metals/lead]], [[metals/cadmium]], [[metals/arsenic-inorganic]], [[metals/mercury-total]], [[metals/tin]], [[ingredients/rice]], [[ingredients/wheat]], [[ingredients/potatoes]], [[ingredients/spinach]], [[ingredients/sunflower-seeds]], [[ingredients/bivalve-molluscs]], [[ingredients/fish]], [[ingredients/organ-meats]], [[ingredients/wild-mushrooms]], [[ingredients/cocoa]], [[ingredients/chocolate]], [[lint/2026-05-02-raw-reports-studies-ingest-inventory]]

Notes: Ingested Commission Regulation (EU) 2023/915 as a primary regulatory source for binding EU contaminant maximum levels, with local PDF provenance, SHA-256, and EUR-Lex access URL preserved. Added product-facing and ingredient-facing Pb, Cd, inorganic arsenic, total mercury, and inorganic tin limits to the regulation layer, `data/evidence/regulatory_limits.csv`, and `data/evidence/product_regulatory_crosswalk.csv`. Regenerated product-page crosswalk sections so top product pages compare federal/EU limit context against field findings in decision-first language and preserve basis/species blockers instead of displaying percentile-heavy p-value tables in the critical comparison layer. Updated ingredient and metal nodes to replace pending EU ingest notes with concrete matrix-specific values. The raw reports inventory now recognizes this PDF as matched to a public source page and shows no remaining raw report PDFs requiring a source page. Legal note: the local PDF is the original Official Journal text; current enforcement/legal use should check the current consolidated EUR-Lex version because EU contaminant regulations can be amended.

<a id="2026-05-01-ingest-category-5-plant-milk-corpus-pilot"></a>

## [2026-05-01] ingest | category-5-plant-milk-corpus-pilot - Category 5 plant-milk corpus pilot

Entry ID: `2026-05-01-ingest-category-5-plant-milk-corpus-pilot`

Pages touched: [[corpus/index]], [[sources/milani2023-trace-elements-soy-based-beverages]], [[sources/damato2026-inorganic-arsenic-rice-based-beverages]], [[sources/marques2021-trace-elements-milks-plant-based-drinks]], [[regulations/eu2023-arsenic-rice-based-drinks]], [[products/plant-milks-soy-based]], [[products/plant-milks-rice-based]], [[products/plant-milks-non-soy-non-rice]], [[products/regulatory-crosswalk-field-findings]], [[ingredients/plant-milk]], [[ingredients/soy]], [[ingredients/rice]], [[lint/2026-05-01-category-5-plant-milk-corpus-pilot-audit]]

Notes: Promoted the first raw-markdown corpus pilot into the canonical wiki path for Category 5 beverage rows. Added curated source nodes for Milani 2023, D'Amato 2026, and Marques 2021; added plant-milk product pages; added an EU rice-drink inorganic arsenic regulation node; added structured occurrence and regulatory crosswalk data; and added [[products/regulatory-crosswalk-field-findings]] as the critical comparison layer.

<a id="2026-04-30-ingest-ufelle2021-metals-chapter"></a>

## [2026-04-30] ingest | ufelle2021-metals-chapter - chapter-level metals toxicology re-ingest

Entry ID: `2026-04-30-ingest-ufelle2021-metals-chapter`

Pages touched: [[sources/ufelle2021-metals-chapter]], [[metals/arsenic]], [[metals/arsenic-inorganic]], [[metals/arsenic-total]], [[metals/cadmium]], [[metals/chromium]], [[metals/cobalt]], [[metals/copper]], [[metals/iron]], [[metals/lead]], [[metals/magnesium]], [[metals/mercury]], [[metals/mercury-methyl]], [[metals/mercury-total]], [[metals/molybdenum]], [[metals/nickel]], [[metals/zinc]], [[metals/aluminum]], [[metals/antimony]], [[metals/barium]], [[metals/beryllium]], [[metals/cesium]], [[metals/gold]], [[metals/lithium]], [[metals/manganese]], [[metals/palladium]], [[metals/platinum]], [[metals/silver]], [[metals/tellurium]], [[metals/thallium]], [[metals/tin]], [[metals/titanium]], [[metals/uranium]], [[metals/vanadium]]
Notes: Re-ingested Casarett & Doull's Essentials of Toxicology Chapter 23 as a whole-chapter metal toxicology source rather than a cadmium-only corroborating source. The rendered source page now visibly preserves the exact chapter title, exact figure/table titles, chapter section structure, and a metal-node map across existing and newly stubbed wiki metal/species pages, while marking the source as textbook synthesis with no food occurrence values.

<a id="2026-04-29-ingest-lgc2003-nickel-piercing-post-assemblies"></a>

## [2026-04-29] ingest | lgc2003-nickel-piercing-post-assemblies - critical nickel dermal-contact report

Entry ID: `2026-04-29-ingest-lgc2003-nickel-piercing-post-assemblies`

Pages touched: [[sources/lgc2003-nickel-piercing-post-assemblies]], [[metals/nickel]], [[products/piercing-post-assemblies]], [[regulations/eu-nickel-directive-94-27-ec]], [[testing/en-1811-nickel-release]], [[raw/Digest/INGESTED]]
Notes: Critical ingest of `nickel_en.pdf`, preserving the exact paper title and exact source table headings on the rendered source page. Connected the report to nickel, the actual product category, the Nickel Directive, and EN 1811, while explicitly marking it as context-only for Category 1 food occurrence because it measures dermal/contact-material nickel release rather than food concentrations.

<a id="2026-04-29-lint-fda2026-infant-formula-toxic-elements-special-survey"></a>

## [2026-04-29] lint | fda2026-infant-formula-toxic-elements-special-survey - source-table headings surfaced

Entry ID: `2026-04-29-lint-fda2026-infant-formula-toxic-elements-special-survey`

Pages touched: [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
Notes: Added an explicit FDA source-table section so the exact table heading "Analytical Results for Arsenic in Infant Formula (FY2023-2025)" is visible on the rendered page. Added a compact arsenic characterization table showing total arsenic (`tAs`), prepared-for-feeding ppb basis, direct Category 1 rows, context-only rows, and Evidence Fitness treatment.

<a id="2026-04-29-schema-evidence-first-registers"></a>

## [2026-04-29] schema | evidence-first-registers - Evidence Fitness registers and Category 1 governance layer

Entry ID: `2026-04-29-schema-evidence-first-registers`

Pages touched: [[methodology]], [[editorial-standards]], [[sources/_TEMPLATE]], [[products/index]], [[products/infant-formula-powder-non-soy]], [[products/baby-cereals-dry-rice-based]]
Notes: Added the tracked evidence-register architecture for the Heavy Metal Index, including Evidence Fitness verdicts, public evidence labels, two-stage review states, deterministic evidence scripts, and the Category 1 infant/child food pilot register. This change keeps the Index as the public evidence layer and HMT&C as a downstream standards consumer; existing source-backed product pages are preserved while gaining the HMT&C firewall and review-state governance layer.

<a id="2026-04-29-ingest-digest-category-1-source-batch"></a>

## [2026-04-29] ingest | digest-category-1-source-batch - 11 Digest PDFs added as wiki source records

Entry ID: `2026-04-29-ingest-digest-category-1-source-batch`

Pages touched: [[sources/chekri2019-french-infant-toddler-tds-trace-elements]], [[sources/burrell2010-aluminium-in-infant-formulas]], [[sources/chuchu2013-aluminium-in-infant-formulas]], [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]], [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]], [[sources/astolfi2021-italy-powdered-infant-formula-elements]], [[sources/kazi2009-toxic-elements-in-infant-formulae]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula]], [[sources/fda2026-infant-formula-toxic-elements-special-survey]], [[sources/fsa2016-infant-food-formula-metals-survey]], [[sources/index]]
Notes: Added the local `/raw/Digest` batch to the wiki as source records rather than committing raw PDFs. Created nine new source pages covering French infant/toddler TDS trace elements (Chekri 2019), UK infant-formula aluminum surveys (Burrell 2010; Chuchu 2013), Canadian formula Pb/Cd/Al survey (Dabeka 2011), FDA FY2009-FY2024 baby/young-child toxic-elements compliance dataset, Italian powdered-formula 40-element survey (Astolfi 2021), Pakistan milk/soy formula Al/Cd/Pb survey (Kazi 2009), global baby-food/formula scoping review (Collado-Lopez 2025), and FDA FY2023-FY2025 infant-formula toxic-elements special survey. Detected that the two `Multi-element Infant foods_FS102048 final report` PDFs in Digest are byte-identical duplicates of the already-ingested FSA/Fera FS102048 source, so the existing [[sources/fsa2016-infant-food-formula-metals-survey]] page was updated with `raw_digest_paths` and shared SHA-256 instead of creating duplicate citations. The FDA datasets are marked as dataset sources needing structured row extraction before p50/p90/p100 aggregation. Added [[raw/Digest/INGESTED]] tracking for the batch.

<a id="2026-04-29-extract-category-1-formula-digest-values"></a>

## [2026-04-29] extract | category-1-formula-digest-values - FDA formula p-value extraction and Digest paper rows

Entry ID: `2026-04-29-extract-category-1-formula-digest-values`

Pages touched: [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]]
Notes: Added `tools/evidence/extract-digest-formula.ts` and generated `data/evidence/category1_formula_concentration_summary.csv` plus `data/evidence/values.jsonl` machine-extracted records. Parsed the FDA FY2023-FY2025 infant-formula special survey into four product-label subsets mapped to Category 1 rows 1-4: cow-milk powder (n=230), soy powder (n=38), ready-to-feed cow milk-based (n=20), and ready-to-feed soy-based (n=3). For tAs, Pb, Cd, and tHg, extracted nearest-rank p10/p50/p90/p95/p100 values using a disclosed lower-bound substitution rule (`<LOD` = 0). Added these tables to the four formula product pages as source-subset p-value evidence, explicitly not final HMT&C threshold values. Added Digest formula-paper rows from Dabeka 2011, Kazi 2009, Burrell 2010, and Chuchu 2013 as mean/median/max or range-only rows where the source does not report p90. Build, TypeScript check, and tests passed.

<a id="2026-04-29-ingest-category-1-nickel-markdown-pass"></a>

## [2026-04-29] ingest | category-1-nickel-markdown-pass - Desktop markdown nickel evidence added

Entry ID: `2026-04-29-ingest-category-1-nickel-markdown-pass`

Pages touched: [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]], [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]], [[sources/amarh2023-ghana-infant-food-heavy-metals]], [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]], [[products/infant-formula-powder-non-soy]], [[products/fruit-juice-not-canned]], [[sources/index]]
Notes: Searched `/Users/karenpendergrass/Desktop/heavy-metal-index/raw/markdown` for nickel sources relevant to HMTc Category 1. Added four source records from the 23,000-file Markdown corpus: Lutfullah 2014 reports infant-formula nickel mean 27.7 ppb and range 22-32 ppb in Peshawar; Akhtar 2017 reports Pakistan infant formula milk brand nickel range below 1 to 50,903 ppb, flagged for PDF image QA before standards math; Amarh 2023 reports broad Ghana infant food/formula nickel mean 100 ppb and range 65-183 ppb but lacks Category 1 row mapping; Weldegebriel 2025 reports packaged fruit juice nickel range 2.5-80 ppb with fruit-type medians, but includes canned and not-canned packaging. Product pages were updated only where row fit was defensible, with explicit caveats that these rows support occurrence evidence and source-scope maxima rather than final HMT&C p90 values.

<a id="2026-04-29-correction-p90-jurisdiction-logic"></a>

## [2026-04-29] correction | p90-jurisdiction-logic - p90 candidates are not U.S.-required

Entry ID: `2026-04-29-correction-p90-jurisdiction-logic`

Pages touched: [[methodology]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]], [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]], [[sources/kazi2009-toxic-elements-in-infant-formulae]]
Notes: Corrected earlier language that implied p90 candidates needed to be U.S.-based. The governing rule is now explicit: p90 candidates may come from global or mixed-jurisdiction aggregate evidence when the pool is product-fit, analytically comparable, source-documented, and strong enough for the standards workflow's 95% confidence target. Jurisdiction remains metadata for weighting, applicability notes, and possible regional variants; it is not a hard exclusion rule.

<a id="2026-04-29-extract-chekri2019-french-tds-category-1-rows"></a>

## [2026-04-29] extract | chekri2019-french-tds-category-1-rows - French infant TDS table rows mapped

Entry ID: `2026-04-29-extract-chekri2019-french-tds-category-1-rows`

Pages touched: [[sources/chekri2019-french-infant-toddler-tds-trace-elements]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/baby-cereals-dry-non-rice]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/fruit-juice-not-canned]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/meat-and-poultry-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]]
Notes: Upgraded Chekri et al. 2019 from a shallow source stub to a table-level Category 1 source record using the user-provided manuscript text. Added the French TDS category rows for infant formulae, follow-on formulae, growing-up milks, cereal-based foods, fruit purees, fruit juices, soups/purees, vegetable-based ready-to-eat meals, and meat/fish-based ready-to-eat meals. Mapped rows to existing Category 1 product pages with explicit caveats where the French TDS category is broader than the HMTc row: powder/RTF not separated, soy status not separated, rice status not separated, root/non-root vegetable status not separated, fish/meat/poultry not separated, and canned status not separated. No new product stubs were needed.

<a id="2026-04-29-scaffold-chekri2019-ingredient-nodes"></a>

## [2026-04-29] scaffold | chekri2019-ingredient-nodes - French TDS ingredient graph anchors

Entry ID: `2026-04-29-scaffold-chekri2019-ingredient-nodes`

Pages touched: [[sources/chekri2019-french-infant-toddler-tds-trace-elements]], [[ingredients/index]], [[ingredients/carrots]], [[ingredients/fruit]], [[ingredients/fruit-juice]], [[ingredients/infant-cereal-ingredients]], [[ingredients/meat-and-poultry]], [[ingredients/milk-and-dairy]], [[ingredients/vegetables]], [[ingredients/cocoa]], [[ingredients/chocolate]], [[ingredients/fish]], [[ingredients/potatoes]], [[ingredients/rice]], [[ingredients/spinach]], [[ingredients/wheat]]
Notes: Added ingredient-layer graph anchors for the Chekri 2019 French infant/toddler TDS source. Created new stubs for carrots, fruit, fruit juice, infant cereal ingredients, meat and poultry, milk and dairy, and vegetables. Linked existing ingredient nodes for cocoa, chocolate, fish, potatoes, rice, spinach, and wheat from the source page. These stubs are intentionally conservative: they record that Chekri 2019 identifies the ingredient or broad ingredient category as relevant, but they do not synthesize ingredient-specific p90 values where the source only reports broader TDS food-category means.

<a id="2026-04-29-extract-burrell2010-formula-aluminum-rows"></a>

## [2026-04-29] extract | burrell2010-formula-aluminum-rows - formula aluminum tables mapped

Entry ID: `2026-04-29-extract-burrell2010-formula-aluminum-rows`

Pages touched: [[sources/burrell2010-aluminium-in-infant-formulas]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[ingredients/soy]], [[ingredients/infant-formula-ingredients]], [[ingredients/milk-and-dairy]], [[ingredients/index]]
Notes: Upgraded Burrell and Exley 2010 from a shallow Digest source stub to a table-level formula aluminum record. Mapped Table 1 ready-made liquid formulas to non-soy RTF context, Table 2 non-soy powders to non-soy powder context, and Table 2 soy powder to soy powder context. Created ingredient graph anchors for soy and infant formula ingredients, and linked milk-and-dairy. Did not create a ready-to-feed soy product row because the pasted source text does not report a ready-made soy formula.

<a id="2026-04-29-extract-chuchu2013-formula-aluminum-rows"></a>

## [2026-04-29] extract | chuchu2013-formula-aluminum-rows - follow-up formula aluminum tables mapped

Entry ID: `2026-04-29-extract-chuchu2013-formula-aluminum-rows`

Pages touched: [[sources/chuchu2013-aluminium-in-infant-formulas]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[ingredients/soy]], [[ingredients/infant-formula-ingredients]], [[ingredients/milk-and-dairy]], [[supply-chain/aluminum-based-packaging]], [[supply-chain/index]]
Notes: Upgraded Chuchu et al. 2013 from a shallow Digest source stub to a table-level formula aluminum record. Mapped Table 1 ready-to-drink formulas to non-soy RTF context, Table 2 non-soy powders to non-soy powder context, and the two Table 2 soy powders to soy powder context. Added aluminum-based packaging as a supply-chain graph node because the paper discusses foil seals, laminate cartons, foil-lined containers, and foil pouches as plausible contamination routes. Did not create a ready-to-feed soy product row because the pasted source text does not report a ready-to-drink soy formula.

<a id="2026-04-29-extract-astolfi2021-powder-formula-elements"></a>

## [2026-04-29] extract | astolfi2021-powder-formula-elements - Italian powder formula rows mapped

Entry ID: `2026-04-29-extract-astolfi2021-powder-formula-elements`

Pages touched: [[sources/astolfi2021-italy-powdered-infant-formula-elements]], [[products/infant-formula-powder]], [[products/infant-formula-powder-non-soy]], [[products/index]], [[ingredients/infant-formula-ingredients]], [[ingredients/milk-and-dairy]], [[metals/manganese]], [[metals/zinc]], [[metals/index]]
Notes: Upgraded Astolfi et al. 2021 from a shallow source stub to a table-level powdered formula record. Created base [[products/infant-formula-powder]] because the source reports powdered infant formula broadly without separating soy from non-soy. Added source-scope Ni, Cd, Pb, and Sn rows to the non-soy powder page as broad context only, with caveat that soy status is not reported. Al, As, and Cr are retained as detection-limit context because more than 30% of values were below LOD and were excluded from the paper's subsequent analysis. Added Mn and Zn graph stubs because the paper risk-assesses these nutrient elements, while noting they are not HMTc toxic-metal analytes unless separately designated.

<a id="2026-04-29-extract-kazi2009-milk-soy-formula-toxic-elements"></a>

## [2026-04-29] extract | kazi2009-milk-soy-formula-toxic-elements - Pakistan formula rows split by milk and soy

Entry ID: `2026-04-29-extract-kazi2009-milk-soy-formula-toxic-elements`

Pages touched: [[sources/kazi2009-toxic-elements-in-infant-formulae]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[ingredients/soy]], [[ingredients/infant-formula-ingredients]], [[ingredients/milk-and-dairy]]
Notes: Upgraded Kazi et al. 2009 from a shallow Digest source stub to a table-level milk-based versus soy-based formula record for Al, Cd, and Pb. Replaced the prior broad 17-sample non-soy rows with milk-based rows from pasted Table 3: Al mean 1018.5 ppb and max 1520 ppb, Cd mean 7.86 ppb and max 12.3 ppb, and Pb mean 64.2 ppb and max 97 ppb. Added soy-based rows to [[products/infant-formula-powder-soy-based]]: Al mean 2270 ppb and max 2720 ppb, Cd mean 11.7 ppb and max 14.5 ppb, and Pb mean 109.4 ppb and max 119 ppb. Added an explicit source-QA caveat because the pasted methods text describes 11 milk-based and 6 soy-based formulas, while pasted Table 3 lists 13 IMF rows and 4 ISF rows. Rows remain source-scope mean/max evidence, not p90 values.

<a id="2026-04-29-extract-dabeka2011-canada-formula-format-rows"></a>

## [2026-04-29] extract | dabeka2011-canada-formula-format-rows - Canadian formula, electrolyte, and glucose rows mapped

Entry ID: `2026-04-29-extract-dabeka2011-canada-formula-format-rows`

Pages touched: [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]], [[products/infant-formula-concentrated-liquid-non-soy]], [[products/infant-formula-concentrated-liquid-soy-based]], [[products/oral-electrolyte-solutions]], [[products/glucose-solutions]], [[products/index]], [[ingredients/infant-formula-ingredients]], [[ingredients/milk-and-dairy]], [[ingredients/soy]], [[supply-chain/aluminum-based-packaging]]
Notes: Upgraded Dabeka et al. 2011 from a shallow source stub to a table-level Canada-market record with formula format, soy/milk basis, infant-support liquid, and packaging context. Existing locked Category 1 rows already carried the powder and ready-to-use formula summary rows; this pass added concentrated-liquid bridge product pages, oral-electrolyte and 5% glucose solution bridge pages, and source-page tables for all mapped rows. Added the glass-versus-metal packaging comparison to [[supply-chain/aluminum-based-packaging]], with the caveat that the paper does not attribute the aluminum increase to glass alone because most glass-stored electrolyte/glucose solutions were below 8 ng/g Al. All rows remain source-scope mean/median/max evidence, not p90 values.

<a id="2026-04-29-extract-collado-lopez2025-scoping-review-layer"></a>

## [2026-04-29] extract | collado-lopez2025-scoping-review-layer - global baby-food and formula review mapped

Entry ID: `2026-04-29-extract-collado-lopez2025-scoping-review-layer`

Pages touched: [[sources/collado-lopez2025-heavy-metals-baby-food-formula]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/meat-and-poultry-purees]], [[products/mixed-meals-non-rice]], [[products/teething-and-snacks-non-rice]], [[ingredients/infant-cereal-ingredients]], [[ingredients/rice]], [[ingredients/fish]]
Notes: Upgraded Collado-Lopez et al. 2025 from a shallow scoping-review source to a review-layer evidence map. Added review-level detection rates, medians, maximum-level exceedance shares, and health-risk clustering while explicitly preserving the rule that these secondary-review medians are not primary p90/p100 rows. Filled missing Category 1 links for fruit/vegetable, meat/poultry, non-rice mixed-meal, and non-rice snack scaffolds, and added ingredient graph context for cereal ingredients, rice, and fish. Key review signals captured: baby-food detections Pb 69%, Cd 72%, As 73%, Hg 34%; formula detections Pb 74%, Cd 61%, As 63%, Hg 42%; rice/rice-mix median Pb 8 ppb and As 48 ppb; fish/fish-mix median As 165 ppb and Hg 16 ppb; cereal median Cd 13 ppb; stage 1 and stage 2 formula median Pb 15 ppb; soy-based formula Cd detection 91%.

<a id="2026-04-29-extract-fda2024-baby-food-compliance-category-1"></a>

## [2026-04-29] extract | fda2024-baby-food-compliance-category-1 - FDA TEP baby/young-child sample rows mapped

Entry ID: `2026-04-29-extract-fda2024-baby-food-compliance-category-1`

Pages touched: [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]], [[products/baby-cereals-dry-non-rice]], [[products/baby-cereals-dry-rice-based]], [[products/fruit-purees]], [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]], [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]], [[products/teething-and-snacks-non-rice]], [[products/teething-and-snacks-rice-based]], [[raw/Digest/INGESTED]]
Notes: Properly ingested the FDA FY2009-FY2024 Toxic Elements Program baby/young-child food compliance PDF as a structured Category 1 evidence layer. Added `tools/evidence/extract-digest-baby-food-compliance.ts`, generated `data/evidence/category1_fda_baby_food_compliance_samples.csv` with 1,944 parsed sample/analyte rows, generated `data/evidence/category1_fda_baby_food_compliance_summary.csv` with 39 lower-bound p10/p50/p90/p95/p100 summary rows, and merged 39 machine-extracted value records into `data/evidence/values.jsonl` under prefix `category1-fda-baby-food-compliance-`. Mapping is intentionally conservative: dry infant cereals are split by rice named in the product description; vegetables are split by root-vegetable terms; mixtures are split by rice named; explicit rice-named grain snacks map to row 16 only as a small EF-3 subset; grain-based snacks without rice named are retained as EF-4 context and are not assigned to non-rice snacks. The source page was corrected to exclude formula, fruit juice, fish-containing foods, and meat/poultry rows because they are not present in this PDF. Arsenic is retained as source-reported As / `tAs`, not iAs; mercury is retained as `tHg`, not MeHg. Corrected the Category 1 register row order in `tools/evidence/model.ts` so rows 11-16 match the locked product index, and added a regression test for the 16-row order. Updated the formula extractor to merge value records by prefix instead of overwriting unrelated evidence records.

<a id="2026-04-29-extract-fda2026-formula-special-survey-critical-ingest"></a>

## [2026-04-29] extract | fda2026-formula-special-survey-critical-ingest - FDA infant-formula special survey fully mapped

Entry ID: `2026-04-29-extract-fda2026-formula-special-survey-critical-ingest`

Pages touched: [[sources/fda2026-infant-formula-toxic-elements-special-survey]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]], [[products/infant-formula-rtf-liquid-non-soy]], [[products/infant-formula-rtf-liquid-soy-based]], [[products/infant-formula-concentrated-liquid-non-soy]], [[products/infant-formula-concentrated-liquid-soy-based]], [[raw/Digest/INGESTED]]
Notes: Upgraded the FDA FY2023-FY2025 infant-formula special-survey ingest from a four-label summary into a full sample-level evidence layer. `tools/evidence/extract-digest-formula.ts` now parses all 1,248 FDA sample/analyte rows, generates `data/evidence/category1_formula_special_survey_samples.csv`, expands `data/evidence/category1_formula_concentration_summary.csv` to 45 rows, and merges 45 value records under prefix `category1-formula-digest-`. Direct locked Category 1 formula labels are retained as rows 1-4: cow-milk powder n=230, soy powder n=38, ready-to-feed cow n=20, and ready-to-feed soy n=3 per analyte. Concentrated liquid cow/soy formula and amino-acid-based powder are now explicitly preserved as EF-4 bridge/out-of-scope context instead of being silently discarded or assigned to non-soy/RTF rows. The source page now documents prepared-for-feeding basis, lower-bound `<LOD` handling, total arsenic versus iAs, total mercury versus MeHg, LOQ/LOD ranges, direct p50/p90/p100 summaries, and context-only rows.

<a id="2026-04-26-ingest-gap-fill-and-ingest-tracker"></a>

## [2026-04-26] ingest | gap-fill-and-ingest-tracker - close 5 deferred provenance gaps; establish folder ingest-tracking convention

Entry ID: `2026-04-26-ingest-gap-fill-and-ingest-tracker`

Pages touched: [[sources/epa-iris-cadmium-1989|EPA IRIS Cd 1989]], [[sources/codex-cxs-193-1995|Codex CXS 193-1995]], [[sources/atsdr-aluminum-toxprofile-2008|ATSDR 2008]], [[sources/efsa-cadmium-2011-statement|EFSA Cd 2011]], [[sources/jecfa-73rd-cadmium-2010|JECFA 73rd 2010]], [[sources/davis-2021-salivary-metals-oral-microbiome|Davis 2021]], [[sources/su-2023-arsenic-brown-rice|Su et al. 2023]], [[sources/inoue-2024-rice-nramp5-cadmium|Inoue et al. 2024]], [[sources/navaretnam-2025-rice-as-speciation|Navaretnam et al. 2025]], [[sources/fda-tds-elements-2018-2020|FDA TDS 2018-2020]], [[sources/belgian-lead-factsheet-2024|Belgian Pb 2024]], [[regulations/epa-iris-cadmium-rfd]], [[regulations/atsdr-aluminum-mrls]], [[metals/cadmium]], [[metals/aluminum]], [[metals/lead]], [[index]]
Notes: Closed 5 deferred provenance gaps from the lint check; deep-ingested 4 primary research articles for ingredient profile population and microbiome content; introduced ingest-tracking convention via per-folder INGESTED.md files. Web-fetched values from canonical agency pages for the 3 documents not in raw/: EPA IRIS Cd 1989 chemical assessment summary (water RfD 5 × 10⁻⁴ mg/kg/day, food RfD 1 × 10⁻³ mg/kg/day, NOAEL water 5 × 10⁻³, NOAEL food 1 × 10⁻², UF 10, critical effect significant proteinuria, last revised 1989-10-01); Codex CXS 193-1995 (full Cd ML table 0.05-2.0 mg/kg by matrix, full Pb ML table 0.01-0.4 mg/kg by matrix); ATSDR 2008 Aluminum Toxicological Profile (intermediate and chronic oral MRLs both 1 mg Al/kg/day from Golub 2000 lifetime mouse study with UF 100). Karen subsequently dropped 3 PDFs into raw/reports/ that closed 2 of the deferred items with primary-document SHA-256 provenance: WHO Food Additives Series 64 (9789241660648_eng.pdf, JECFA 73rd meeting 2010 cadmium addendum, replacing the secondary-citation-only source page with primary content); FDA Total Diet Study Elements Report FY 2018-2020 (July 2022); Belgian/Flemish Lead Factsheet (Steunpunt Milieu en Gezondheid, September 2024). Created EFSA 2011 statement source page in secondary-citation-only mode (Wiley 403, primary PDF still pending). Deep-ingested 4 primary research articles for microbiome and rice content: Davis et al. 2021 salivary metals/oral microbiome (Scientific Reports), Su Chiang O'Connor 2023 brown rice arsenic risk-benefit (Frontiers in Nutrition), Inoue et al. 2024 rice Nramp5 Cd uptake engineering (Frontiers in Plant Science), Navaretnam et al. 2025 rice arsenic speciation HPLC-ICP-MS (Environmental Geochemistry and Health). Established ingest-tracking convention: each `raw/<subfolder>/` folder carries an INGESTED.md file (committed via .gitignore negation) documenting last audit date, audit method (SHA-256 cross-reference vs wiki/sources/*.md sha256: frontmatter), and any deliberately excluded files with reasons. Folder ingest-state is always derivable from filesystem state; INGESTED.md adds the deliberate-exclusion list that the SHA cross-reference cannot otherwise infer. raw/reports/ final state: 49 PDFs, 42 ingested, 7 deliberately excluded with documented reasons (severe filename misfires, out-of-scope content, duplicates, deferred drafts).

<a id="2026-04-25-ingest-lead-batch-10-docs"></a>

## [2026-04-25] ingest | lead-batch-10-docs - Pb regulatory and biochem ingest

Entry ID: `2026-04-25-ingest-lead-batch-10-docs`

Pages touched: [[sources/atsdr-lead-toxprofile-2020|ATSDR 2020]], [[sources/cdc-blood-lead-reference-value|CDC BLRV]], [[sources/epa-iris-lead-2004|EPA IRIS Pb 2004]], [[sources/efsa-lead-contam-2010|EFSA Pb 2010]], [[sources/jecfa-72nd-lead-2010|JECFA 72nd 2010]], [[sources/oehha-lead-prop65-listing|OEHHA Prop 65 Pb]], [[sources/tamagno-freeman-2025-pb-glutamate|Tamagno-Freeman 2025]], [[sources/ordemann-austin-2016-pb-zinc-finger|Ordemann & Austin 2016]], [[sources/huang-2020-pb-alad-threshold|Huang et al. 2020]], [[regulations/efsa-lead-contam-2010]], [[regulations/jecfa-lead-ptwi-withdrawn]], [[regulations/oehha-lead-prop65]], [[regulations/epa-iris-lead-rfd]], [[metals/lead]], [[index]]
Notes: Lead batch ingest, 9 new source pages plus 4 new regulation pages. Substantively upgraded wiki/metals/lead.md from stub (1 source) to populated page (8 sources, audience-tagged). Three filename misfires flagged: FDA_CloserToZero_Lead_ActionLevels_2025.pdf is a duplicate of the previously-ingested FDA CTZ Pb 2025 (same docket FDA-2022-D-0278) and was skipped; Biochem_Lead_Amin_2025.pdf has Tamagno and Freeman as actual authors (not Amin); Biochem_Lead_Yeh_2020.pdf has Huang as actual lead author (not Yeh). All flagged in source-page provenance and not propagated. Major findings: JECFA withdrew the 25 µg/kg b.w./week PTWI for Pb in 2010 with no replacement (WHO TRS 959); EFSA 2010 derived BMDLs but does not set a TWI (developmental neurotoxicity dietary BMDL01 0.50 µg/kg b.w./day, CV BMDL01 1.50, CKD BMDL10 0.63); EPA IRIS Pb is qualitative-only since 2004 with no oral RfD derivation; ATSDR 2020 does not derive MRLs because no threshold exists. Operational US action runs through CDC BLRV (3.5 µg/dL, 97.5th percentile NHANES 2015-2018) → FDA IRL (2.2 µg/day children, 8.8 µg/day women of childbearing age) → CTZ matrix-specific action levels. The "no safe level for children" framing is settled across major regulators but is not internationally harmonized into a single reference value.

<a id="2026-04-25-ingest-arsenic-batch-9-docs"></a>

## [2026-04-25] ingest | arsenic-batch-9-docs - As regulatory ingest

Entry ID: `2026-04-25-ingest-arsenic-batch-9-docs`

Pages touched: [[sources/atsdr-arsenic-toxprofile-2007|ATSDR 2007]], [[sources/epa-iris-inorganic-arsenic-2025|EPA IRIS iAs 2025]], [[sources/efsa-arsenic-contam-2009|EFSA As 2009]], [[sources/jecfa-82nd-arsenic|JECFA 82nd]], [[sources/oehha-arsenic-prop65-listing|OEHHA Prop 65 As]], [[sources/epa-arsenic-drinking-water-mcl|EPA As MCL]], [[sources/fda-iAs-rice-cereal-2020|FDA iAs 2020]], [[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]], [[regulations/efsa-arsenic-contam-2009]], [[regulations/epa-iris-inorganic-arsenic-rfd]], [[regulations/oehha-arsenic-prop65]], [[regulations/epa-arsenic-mcl]], [[regulations/fda-iAs-rice-cereal-100ppb]], [[metals/arsenic]], [[index]]
Notes: Arsenic batch ingest, 8 new source pages plus 5 new regulation pages. Created wiki/metals/arsenic.md as a new populated audience-tagged page (8 sources cited). Major findings: EPA finalized the IRIS inorganic arsenic toxicological review in January 2025 (EPA/635/R-25/005Fa) — newly finalized after decades; full quantitative outputs (oral RfD, cancer slope factor) require detailed extraction from the ~100+ page review and are pending consolidation. EFSA 2009 concluded the JECFA PTWI of 15 µg iAs/kg b.w./week is no longer appropriate because cancer occurs below the PTWI; EFSA reports BMDL01 anchors (cancer 0.3-8 µg iAs/kg/day depending on endpoint) rather than setting a TWI. JECFA's 72nd meeting 2010 withdrew the PTWI; subsequent 82nd-meeting work uses BMDL01 framing. EPA drinking water MCL is 10 ppb (since 2006 compliance, replaced 50 ppb that had been in place since 1942). FDA infant rice cereal iAs action level is 100 ppb (August 2020 final guidance, Docket FDA-2016-D-1099). Joint FDA/EPA fish consumption advice (2017) provides three-tier consumer-facing guidance (Best Choices / Good Choices / Choices to Avoid) primarily driven by methylmercury.

<a id="2026-04-25-ingest-mercury-batch-7-docs"></a>

## [2026-04-25] ingest | mercury-batch-7-docs - Hg regulatory and biochem ingest

Entry ID: `2026-04-25-ingest-mercury-batch-7-docs`

Pages touched: [[sources/atsdr-mercury-toxprofile-2024|ATSDR 2024]], [[sources/epa-iris-mercuric-chloride|EPA IRIS Hg]], [[sources/epa-iris-methylmercury|EPA IRIS MeHg]], [[sources/jecfa-61st-methylmercury|JECFA 61st]], [[sources/efsa-mercury-methylmercury-2012|EFSA Hg 2012]], [[sources/minamata-convention-2013|Minamata Convention 2013]], [[sources/farina-rocha-aschner-2011-mehg-mechanism|Farina et al. 2011]], [[regulations/efsa-methylmercury-twi]], [[regulations/efsa-mercury-twi]], [[regulations/jecfa-methylmercury-ptwi]], [[regulations/epa-iris-mercury-rfd]], [[regulations/epa-iris-methylmercury-rfd]], [[metals/mercury]], [[index]]
Notes: Mercury batch ingest, 7 new source pages plus 5 new regulation pages. Created wiki/metals/mercury.md as new populated audience-tagged page (8 sources cited including the FDA/EPA fish advice from the As batch). Two filename misfires flagged: EPA_IRIS_ElementalMercury_ToxReview.pdf actually contains Mercuric Chloride content (an inorganic mercury salt, not elemental mercury); EPA_IRIS_InorganicMercury_ToxReview.pdf and EPA_IRIS_Methylmercury_ToxReview.pdf appear to be the same methylmercury document with conflicting filenames. One file was excluded from the batch entirely: Biochem_Mercury_Ralston_2008.pdf actually contains an unrelated Mitsuhashi et al. 2008 paper on pyrogallol-induced apoptosis in HEK293T/K562 cells, not a Ralston Hg paper — this is a severe filename-content misfire and the file is left in raw/ without an associated source page until correctly classified. Major findings: methylmercury reference values across EPA IRIS (0.1 µg/kg/day), EFSA TWI (1.3 µg Hg/kg b.w./week, daily ≈ 0.19), and JECFA PTWI (1.6, daily ≈ 0.23) converge to within ~2.3x, all anchored on Faroe Islands + Seychelles developmental neurotoxicity cohort data. EFSA 2012 lowered the EU MeHg TWI from JECFA-aligned 1.6 to 1.3 incorporating n-3 fatty acid protective adjustment. ATSDR 2024 is recently finalized. Minamata Convention is the international policy framework for upstream Hg emissions reduction.

<a id="2026-04-25-ingest-nickel-aluminum-batch-4-docs"></a>

## [2026-04-25] ingest | nickel-aluminum-batch-4-docs - Ni and Al regulatory ingest

Entry ID: `2026-04-25-ingest-nickel-aluminum-batch-4-docs`

Pages touched: [[sources/efsa-nickel-contam-2020|EFSA Ni 2020]], [[sources/ntp-15th-roc-nickel-2021|NTP 15th RoC 2021]], [[sources/epa-eco-ssl-nickel-2007|EPA Eco-SSL Ni 2007]], [[sources/efsa-aluminium-afc-2008|EFSA 2008]], [[regulations/efsa-nickel-tdi]], [[regulations/efsa-aluminium-twi]], [[metals/nickel]], [[metals/aluminum]], [[index]]
Notes: Nickel + Aluminum batch ingest, 4 source pages, 2 regulation pages, 2 new metal pages. Major findings: EFSA 2020 Ni TDI 13 µg/kg/day chronic (BMDL10 1.3 mg/kg/day for post-implantation loss in rats); acute LOAEL 4.3 µg/kg b.w. for systemic contact dermatitis in Ni-sensitized humans, MOE ≥ 30 for low concern. NTP 15th RoC 2021 classifies Ni compounds as known human carcinogens (since 10th RoC, 2002), metallic Ni as reasonably anticipated. EFSA 2008 Al TWI 1 mg/kg b.w./week, replaced JECFA prior PTWI of 7 mg/kg b.w./week (sevenfold reduction); JECFA subsequently aligned. EFSA noted Al TWI is likely exceeded in significant part of European population.

<a id="2026-04-25-schema-studies-bulk-catalog"></a>

## [2026-04-25] schema | studies-bulk-catalog - 329-study primary literature catalog

Entry ID: `2026-04-25-schema-studies-bulk-catalog`

Pages touched: [[studies/cadmium-primary-literature]], [[studies/arsenic-primary-literature]], [[studies/mercury-primary-literature]], [[studies/multimetal-primary-literature]], [[index]]
Notes: Bulk-cataloged the 329 primary research articles in raw/studies/ (filename count was 331 with 2 duplicates) into four thematic catalog pages by inferred metal focus from filename keyword scan. Each entry includes filename, extracted DOI (where present in PDF first page), and inferred title from filename. Per-study deep ingestion (full provenance frontmatter, key-numbers extraction, substantive synthesis) is deferred; these catalogs make the corpus citable and indexed without trying to deep-ingest 329 PDFs in one session. Approach is the lightweight bulk-ingest pattern from CLAUDE.md scaled to a primary-literature corpus that exceeds per-document deep-ingest capacity. Categorization split: cadmium 30, arsenic 44, mercury 12, multi-metal/thematic 243. Lead and aluminum and nickel categories had near-zero entries from filename keyword scan and were not produced as separate pages (lead-related primary studies are mostly in the multimetal category because filenames don't reliably contain the metal name; deep ingestion will recategorize). Catalog generation used pdftotext first-page extraction for DOI capture (8 seconds for all 329) plus filename parsing for titles. Each study is now citable via its filename in raw/studies/ and via its DOI where extractable.

<a id="2026-04-25-synthesis-metals-pages-density-upgrade"></a>

## [2026-04-25] synthesis | metals-pages-density-upgrade - Pb, As, Hg, Ni, Al pages match Cd depth

Entry ID: `2026-04-25-synthesis-metals-pages-density-upgrade`

Pages touched: [[metals/lead]], [[metals/arsenic]], [[metals/mercury]], [[metals/nickel]], [[metals/aluminum]]
Notes: Substantively upgraded the five non-cadmium metal pages to match the cadmium synthesis-pass depth and audience-tagged structure. Each now carries: At-a-glance consumer section with three load-bearing facts; expanded Toxicology with mechanistic detail and primary-literature citations; Typical exposure routes with absorption-fraction values and route-specific kinetics; Food sources table with matrix-by-matrix concern profile; "What this means for food choice" consumer subsection with leverage-point ordering; full Regulatory limits comparison table; "What the reference values mean in practice" consumer subsection with body-weight-translated daily numbers; Testing section with method-specific detection limits and biomarker detail; Microbiome effects placeholder; Historical context section (Pb leaded gasoline / As Bangladesh tube wells and 10 ppb MCL / Hg Minamata Bay and the Convention / Al dialysis encephalopathy); Vulnerable populations table; "If you are in one of these groups" consumer subsection with practical implications per population; App-layer integration with structured outputs; Open questions tracking. Page line counts: Cd 244, Pb 203, As 197, Hg 191, Al 177, Ni 165 (Ni and Al thinner because the underlying source corpus is thinner). Build verified green: 93 input files → 190 output files. All metal pages now render with the audience-tagged synthesis depth that the cadmium page established. Mercury page surfaced two open questions (n-3 fatty acid protective adjustment in EFSA 2012 vs JECFA 2003; EPA IRIS reassessment in step 1). Lead page made explicit the "no internationally harmonized reference value" framing. Arsenic page deferred EPA IRIS 2025 quantitative-output extraction to a follow-up pass.

<a id="2026-04-24-schema-kickoff"></a>

## [2026-04-24] schema | kickoff - initial skeleton

Entry ID: `2026-04-24-schema-kickoff`

Pages touched: [[index]], [[log]], [[overview]], [[synthesis]], [[metals/cadmium]], [[regulations/fda-closer-to-zero]], [[regulations/oehha-cadmium-prop65]], [[regulations/epa-iris-cadmium-rfd]], [[regulations/efsa-cadmium-twi]], [[regulations/jecfa-cadmium-ptmi]], [[regulations/atsdr-cadmium-mrls]], [[regulations/codex-cadmium-mls]]
Notes: Created initial stub skeleton ahead of the first ingest batch (8 cadmium-focused regulatory/advisory reports plus three textbook chapters covering cadmium toxicology). Ingest order starts with FDA Closer to Zero to establish the programmatic frame, then the Handbook on the Toxicology of Metals chapter 32 (Nordberg, Nogawa, Nordberg, 2015) to ground the canonical tox science, then EFSA, EPA IRIS, JECFA, ATSDR, paired OEHHA Prop 65 evidence and MADL documents, and Codex CCCF17. Patty's and Casarett & Doull's Essentials chapters enter after the regulatory tox documents.

<a id="2026-04-24-schema-manifest-misfire"></a>

## [2026-04-24] schema | manifest-misfire - trusted filename over contents

Entry ID: `2026-04-24-schema-manifest-misfire`

Pages touched: [[log]], [[regulations/fda-closer-to-zero]], [[regulations/fda-ctz-Pb-babyfood-10ppb]], [[regulations/fda-ctz-Pb-rootveg-20ppb]], [[regulations/fda-ctz-Pb-cereal-20ppb]], [[index]]
Notes: Batch manifest misfired at entry #1. The file `FDA_CloserToZero_ActionPlan.pdf` was treated in the manifest as a program-level Closer to Zero overview; on extraction, the document is actually FDA's final January 2025 guidance setting **lead** action levels for processed baby food (not the program plan, and not a cadmium document). The batch was built to ground the cadmium ingest, and this file's role needed to be re-read after contents were inspected. Restructured in response: `fda-closer-to-zero.md` is now a program-level overview, and three per-rule pages were created for the three action levels the guidance sets (`fda-ctz-Pb-babyfood-10ppb`, `fda-ctz-Pb-rootveg-20ppb`, `fda-ctz-Pb-cereal-20ppb`). Lesson for future bulk ingests: eyeball each PDF's scope before locking priority order; trust contents, not filenames.

<a id="2026-04-24-schema-source-template-extension"></a>

## [2026-04-24] schema | source-template-extension - provenance fields added

Entry ID: `2026-04-24-schema-source-template-extension`

Pages touched: [[sources/_TEMPLATE]], [[raw/README]] (raw/README.md committed via .gitignore negation)
Notes: Extended the source-page template with four provenance fields (`sha256`, `access_date`, `access_url`, `license`) per the hybrid-provenance decision. `raw/` remains gitignored; `raw/README.md` is committed and documents the licensing classes (`us-government-work` / `public-redistribute` / `public-reference-only` / `copyright-licensed-private`) and the auditor access process. Copyrighted textbooks (Patty's, Casarett, Handbook on the Toxicology of Metals) are classified `copyright-licensed-private` and held privately; raw files are never placed in the public repository or in Git LFS. The new template is at `wiki/sources/_TEMPLATE.md`; the first ingest (FDA CTZ Pb guidance) will be recorded in this shape from the start.

<a id="2026-04-24-ingest-fda-ctz-pb-babyfood-2025"></a>

## [2026-04-24] ingest | fda-ctz-Pb-babyfood-2025 - FDA 2025 lead action levels, processed baby food

Entry ID: `2026-04-24-ingest-fda-ctz-pb-babyfood-2025`

Pages touched: [[sources/fda-ctz-Pb-babyfood-2025|FDA CTZ Pb 2025]], [[metals/lead]], [[regulations/fda-closer-to-zero]], [[regulations/fda-ctz-Pb-babyfood-10ppb]], [[regulations/fda-ctz-Pb-rootveg-20ppb]], [[regulations/fda-ctz-Pb-cereal-20ppb]], [[index]]
Notes: First substantive ingest. FDA's January 2025 final guidance under Closer to Zero sets three lead action levels for processed foods intended for babies and young children under two: 10 ppb in fruits, non-root vegetables, mixtures, yogurts, custards, and single-ingredient meats (97 percent achievability, 19 percent exposure reduction at the 90th percentile); 20 ppb in single-ingredient root vegetables (88 percent achievability, 29 percent reduction); 20 ppb in dry infant cereals (91 percent achievability, 24 percent reduction). Non-binding under 21 CFR 109.6(d), framed against FDA's Interim Reference Level of 2.2 µg/day for children (derived from CDC BLRV of 3.5 µg/dL with a 10x safety factor, updated 2022). Achievability measured against 1,452 samples from the FDA Toxic Elements Program and targeted surveys, FY 2009-2024. Source page carries SHA-256 provenance (8d5293...b110) and the `license: us-government-work` classification. Created `wiki/metals/lead.md` as attachment point for the ingest; the page is otherwise stub until a dedicated lead ingest wave begins. The cadmium-pilot batch continues at the EFSA Cd TWI document next.

<a id="2026-04-24-ingest-efsa-cadmium-contam-2009"></a>

## [2026-04-24] ingest | efsa-cadmium-contam-2009 - EFSA 2009 TWI for cadmium, 2.5 µg/kg b.w./week

Entry ID: `2026-04-24-ingest-efsa-cadmium-contam-2009`

Pages touched: [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]], [[metals/cadmium]], [[regulations/efsa-cadmium-twi]], [[synthesis]], [[index]]
Notes: Second substantive ingest. EFSA CONTAM Panel Scientific Opinion "Cadmium in food" (adopted 30 January 2009, EFSA Journal 2009;980:1-139, Question No EFSA-Q-2007-138) establishes the EU tolerable weekly intake for cadmium at 2.5 µg/kg body weight per week, superseding the previous JECFA/SCF PTWI of 7 µg/kg b.w./week. Derivation: group-based BMDL5 of 4 µg U-Cd/g creatinine from a meta-analysis of urinary cadmium versus beta-2-microglobulin, chemical-specific adjustment factor of 3.9 giving reference point 1.0 µg/g creatinine, one-compartment kinetic model fit to non-smoking Swedish women age 58-70 translating the urinary reference point into a daily dietary intake of 0.36 µg/kg b.w. (weekly 2.52, rounded to 2.5). Mean EU adult exposure 2.3 µg/kg b.w./week, vegetarians up to 5.4, children 60 percent higher than adults, bivalve consumers at 4.6. Panel concluded mean EU exposure is close to or slightly exceeding the TWI and population-level reduction is warranted. Surfaced two load-bearing gaps for the synthesis: (1) the EFSA TWI diverges from the JECFA 2010 PTMI (25 µg/kg b.w./month ≈ 5.8/week) by roughly 2.3-fold on overlapping primary literature; EFSA's 2011 reaffirming statement is not in the corpus and is flagged for future ingest. (2) Dietary cadmium carcinogenicity dose-response remains unresolved; IARC Group 1 classification versus EFSA's judgment that the data are insufficient for quantitative cancer-based risk assessment must be handled carefully in the synthesis without overclaiming or underclaiming. License class `public-reference-only` applies: raw PDF held privately, EFSA Journal URL recorded for verification. SHA-256 provenance recorded. Batch continues at the paired OEHHA Prop 65 documents next.

<a id="2026-04-24-ingest-oehha-cadmium-prop65-paired-1996-2001"></a>

## [2026-04-24] ingest | oehha-cadmium-prop65 (paired, 1996 + 2001) - California Prop 65 Cd reproductive toxicity listing and MADL

Entry ID: `2026-04-24-ingest-oehha-cadmium-prop65-paired-1996-2001`

Pages touched: [[sources/oehha-cadmium-prop65-evidence-1996|OEHHA 1996]], [[sources/oehha-cadmium-prop65-madl-2001|OEHHA 2001]], [[regulations/oehha-cadmium-prop65]], [[metals/cadmium]], [[index]]
Notes: Third and fourth substantive ingests, taken as a single Prop 65-Cd reproductive-toxicity event with two source pages. The 1996 OEHHA hazard identification document "Evidence on the Developmental and Reproductive Toxicity of Cadmium" (released October 4, 1996 in draft to the DART ID Committee) compiled the human epidemiological and animal toxicology literature on cadmium's developmental, female reproductive, and male reproductive effects, and served as the scientific basis for the Committee's December 4, 1996 determination that cadmium had been clearly shown to cause developmental and male reproductive toxicity. That determination produced the Prop 65 reproductive-toxicity listing effective May 1, 1997. The 2001 OEHHA MADL document implements the listing with a Maximum Allowable Daily Level of 4.1 µg/day oral, derived from the Ali et al. 1986 rat developmental toxicity study (LOEL 0.706 mg/kg/day, converted to NOEL by dividing by 10 per 22 CCR § 12803(a)(7), multiplied by 58 kg assumed pregnant-woman body weight, divided by 1,000 statutory safety factor per 22 CCR § 12801(b)(1)). Inhalation MADL was indicated as under development in 2001; current status flagged for verification. The 2001 MADL document contains two source-document errors that were flagged in provenance notes but not propagated: the summary describes the pivotal study as "in mice" while the reference title correctly says "in rats," and the document lists the CAS number as "71-43-28" which is benzene's CAS; the correct CAS for cadmium is 7440-43-9. The regulation page flags that cadmium is also listed under Prop 65 as a carcinogen through a separate Committee action with its own No Significant Risk Level, both pending separate ingest. Wove the developmental and male reproductive toxicity endpoint into wiki/metals/cadmium.md alongside the renal/skeletal/carcinogenicity endpoints already captured from EFSA. License class `us-government-work`. Batch continues at the EPA IRIS toxicological review for cadmium next.

<a id="2026-04-24-schema-epa-iris-deferred"></a>

## [2026-04-24] schema | epa-iris-deferred - EPA IRIS Cd file is a 1999 draft, not operative; deferred

Entry ID: `2026-04-24-schema-epa-iris-deferred`

Pages touched: [[log]], [[regulations/epa-iris-cadmium-rfd]], [[synthesis]]
Notes: Second filename-misfire of the batch. File `EPA_IRIS_Cadmium_ToxicologicalReview.pdf` is a March 4, 1999 external review draft marked "EXTERNAL REVIEW DRAFT - DO NOT QUOTE" and "should not at this stage be construed to represent Agency position." It is not the operative IRIS cadmium assessment. The operative EPA IRIS oral RfD values for cadmium remain the 1985 values on IRIS chemical record 0141 (water RfD 5 × 10⁻⁴ mg/kg/day, food RfD 1 × 10⁻³ mg/kg/day, anchored to a kidney-cortex concentration of 200 µg/g); the 1999 draft proposed a reassessment that was apparently never finalized. Decision: defer EPA IRIS ingest from this batch rather than write the regulation page against a draft that misrepresents EPA's operative posture. The regulation page stays stubbed with `source_refs: []` and an explicit "operative 1985 IRIS record pending ingest" note. The 1999 draft is flagged as a historical document worth ingesting in a later wave: it shows EPA revisited the assessment and chose not to adopt a revision, which is citable by regulators or plaintiff's experts and is part of the defensibility record. The 1999 draft is not being ingested this batch, and the raw file in `raw/reports/` is retained for future use. Lesson reinforced: the filename-contents gap warning from the earlier manifest-misfire entry applies equally to documents that sound canonical but are in fact drafts; future Cd ingest waves should eyeball publication status (finalized vs draft vs withdrawn) in addition to title and metal.

<a id="2026-04-24-ingest-jecfa-91st-cadmium-2022"></a>

## [2026-04-24] ingest | jecfa-91st-cadmium-2022 - JECFA 91st meeting Cd dietary exposure assessment

Entry ID: `2026-04-24-ingest-jecfa-91st-cadmium-2022`

Pages touched: [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]], [[regulations/jecfa-cadmium-ptmi]], [[metals/cadmium]], [[synthesis]], [[raw/README]], [[index]]
Notes: Fifth substantive ingest. WHO Food Additives Series No. 82, prepared by JECFA's 91st meeting (online, November 2020; published 2022). Not the PTMI-establishing document as the filename might suggest; this is a dietary exposure assessment update requested by the 13th session of the Codex Committee on Contaminants in Foods, specifically to incorporate new 2019 occurrence data for cadmium in cocoa and cocoa-derived products. The PTMI of 25 µg/kg b.w./month was established at JECFA's 73rd meeting in 2010 (WHO TRS 960, 2011) and is carried forward unchanged by this 91st meeting monograph. The 73rd meeting primary derivation documents are flagged as pending ingest. Key findings captured: national adult mean Cd exposure ranges 9-48 percent of PTMI; European children up to 12 years average 47 percent; high-percentile child exposures in Australia and USA reach 82-88 percent; total exposure including cocoa contributions reaches 96 percent of PTMI for children aged 0.5-12, essentially saturating the international reference value from dietary sources alone. Cocoa powder alone drives a P97.5 of 12 µg/kg b.w./month in European children 7-11. License is CC-BY-NC-SA-3.0-IGO; because the wiki is infrastructure for a commercial certification program the NC clause is not trivially satisfied, so the source page and regulation page use paraphrased factual data rather than verbatim passages or tables. Updated raw/README.md to document that specific CC license strings are used in the `license` field when their restrictions (notably NC) matter beyond the coarse `public-redistribute` category label. Regulation page populated with the PTMI value, the approximate weekly equivalent (≈5.83 µg/kg b.w./week for comparison to EFSA's 2.5), and the EFSA-JECFA divergence framing that the synthesis page tracks. Wove JECFA PTMI value and the cocoa finding into metals/cadmium.md. Flagged cocoa powder, cocoa products, and chocolate as priority ingredient-page stubs for the next ingest wave. Updated synthesis.md with a 91st-meeting-sharpened framing of the EFSA-JECFA divergence: the gap matters most precisely where subpopulation exposure is highest (children), which is the case most relevant to HMT&C infant and child product tiering. Batch continues at the ATSDR toxicological profile next.

<a id="2026-04-24-ingest-atsdr-cadmium-toxprofile-2012"></a>

## [2026-04-24] ingest | atsdr-cadmium-toxprofile-2012 - ATSDR 2012 Cd MRLs

Entry ID: `2026-04-24-ingest-atsdr-cadmium-toxprofile-2012`

Pages touched: [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]], [[regulations/atsdr-cadmium-mrls]], [[metals/cadmium]], [[synthesis]], [[index]]
Notes: Sixth substantive ingest. US ATSDR Toxicological Profile for Cadmium, September 2012, finalized (supersedes 2008 draft-for-public-comment). Prepared under CERCLA Section 104(i) authority. Establishes four Minimal Risk Levels: acute inhalation 0.03 µg Cd/m³ (from NTP 1995, LOAEL 0.088 mg/m³ with UF of 300), chronic inhalation 0.01 µg Cd/m³ (UCDL10 0.5 µg/g creatinine, UF 3 plus MF 3), intermediate oral 0.5 µg Cd/kg/day (from Brzóska 2005d bone-mineral-density BMDL of 0.05 mg/kg/day, UF of 100), and chronic oral 0.1 µg Cd/kg/day (UCDL10 0.5 µg/g creatinine, pharmacokinetic translation to dietary intake 0.33 µg/kg/day in females at age 55, UF of 3 for human variability accounting for exclusion of diabetics from contributing studies). ATSDR did not derive an intermediate inhalation MRL (would not be protective relative to the chronic MRL) or an acute oral MRL (uncertainty at the most sensitive endpoint). The chronic oral MRL is the tightest of the major Cd reference values on a daily per-kg basis: approximately 3.6x tighter than the EFSA TWI and 8.3x tighter than the JECFA PTMI when all are converted to daily equivalents. Synthesis updated to frame the EFSA-versus-JECFA gap as a three-way (soon four-way) divergence in the order ATSDR → EFSA → JECFA → EPA IRIS (from tightest to most permissive). ATSDR's own statement that its chronic oral MRL is below typical US dietary intake (approximately 0.3 µg/kg/day per Choudhury 2001), and that the UCDL10 point of departure is only twofold above the CDC 2011 US adult geometric mean urinary Cd (0.247 µg/g creatinine), is captured as a load-bearing fact for the wiki and for HMT&C defensibility. License us-government-work. Batch continues at Codex CCCF17 next.

<a id="2026-04-24-ingest-codex-cccf17-2024"></a>

## [2026-04-24] ingest | codex-cccf17-2024 - Codex CCCF 17th Session report, Cd quinoa ML + new Cd CoP initiated

Entry ID: `2026-04-24-ingest-codex-cccf17-2024`

Pages touched: [[sources/codex-cccf17-2024|Codex CCCF17 2024]], [[regulations/codex-cadmium-mls]], [[metals/cadmium]], [[synthesis]], [[index]]
Notes: Seventh substantive ingest, closing the cadmium regulatory sub-batch. Codex CCCF 17th Session report (REP24/CF17), Panama City, April 2024, forwarded to the 47th Session of the Codex Alimentarius Commission (November 2024) for adoption. Session is a standards-setting process document, not a toxicological assessment. Cd-specific outputs: (1) new Codex ML for cadmium in quinoa at 0.15 mg/kg whole commodity (CXS 333-2019), forwarded for CAC47 adoption, selected under ALARA from three options (0.10 / 0.15 / no separate ML) as the value producing the lowest worldwide rejection rates; quinoa held separate from cereals as a pseudo-cereal. Notable: paragraph 117 records that one Member State delegation cited the EFSA TWI (not the JECFA PTMI) as exceeded in their region, confirming cross-body CCCF deliberation isn't uniformly PTMI-anchored. (2) new work approved on a broader Code of Practice for the Prevention and Reduction of Cadmium Contamination in Foods, extending CXC 81-2022 (existing cocoa beans CoP) to potential annexes for rice, cereals and cereal products, vegetables, fish, and seafood; EWG chaired by US, first draft due for CCCF18 consideration. The matrix-level operative Codex Cd MLs live in Codex Standard CXS 193-1995 — not in this session report and not in the corpus; regulation page flags CXS 193-1995 plus CXC 81-2022 as pending later ingest. License classified conservatively as `public-reference-only` because the extracted text carries no explicit CC license block; FAO/WHO publications typically carry CC-BY-NC-SA-3.0-IGO and the classification should be upgraded if verified. Synthesis updated with Codex provenance-gap entry (CXS 193-1995 and CXC 81-2022 both pending) and with the paragraph-117 detail that Codex deliberation is not uniformly PTMI-anchored. This closes the cadmium regulatory sub-batch (6 of 7 regulatory files substantively ingested; EPA IRIS deferred to a future historical wave pending the operative 1985 record). Next phase per the forward plan saved in session memory: textbook chapter ingests (Handbook Ch 32 Nordberg, Casarett Essentials Ch 23 Ufelle/Barchowsky, Patty's Ch 7 Jakubowski), then first synthesis pass on metals/cadmium.md, then ingredient stubs for top Cd-accumulating commodities.

<a id="2026-04-24-ingest-nordberg2015-cadmium-chapter"></a>

## [2026-04-24] ingest | nordberg2015-cadmium-chapter - Handbook of Toxicology of Metals, 4th ed., Ch 32

Entry ID: `2026-04-24-ingest-nordberg2015-cadmium-chapter`

Pages touched: [[sources/nordberg2015-cadmium-chapter|Nordberg 2015]], [[metals/cadmium]], [[synthesis]], [[index]]
Notes: Eighth substantive ingest. Chapter 32 "Cadmium" of the Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals (Academic Press/Elsevier 2015, editors Nordberg/Fowler/Nordberg), written by Gunnar F. Nordberg, Koji Nogawa, and Monica Nordberg, print pages 667-716, DOI 10.1016/B978-0-444-59453-2.00032-9. Note: initial page-boundary estimate for Casarett Essentials Ch 23 was off by ~30 pages (grep misidentified a "CHAPTER 24" marker at page 759 that was actually a body-content label; verified Ch 23 spans PDF pages 726-789, with Ch 24 "Toxic Effects of Solvents and Vapors" starting at PDF 790). License `copyright-licensed-private`: the raw PDF is held privately under `raw/textbooks/` (gitignored) and is never placed in a public repository or Git LFS. Source page uses paraphrased factual extraction rather than verbatim reproduction of chapter text, figures, or tables. Chapter is the canonical peer-reviewed textbook synthesis that the regulatory documents (EFSA 2009, JECFA 73rd/91st, ATSDR 2012, OEHHA Prop 65) are derivations and applications of, not independent bases. Substantive upgrades to [[metals/cadmium]]: toxicokinetics section now populated with the half-life detail (20+ years one-compartment estimate; Akerstrom 2013 biopsy-based 21 years at 8 mg/kg renal cortex and 43 years at 23 mg/kg; Suwasono 2009 urinary half-life estimates of 14 to 24 years), the kidney cortex accumulation factor of 1.25x whole kidney, and the Kjellström-Nordberg PBTK model framework with the Choudhury 2001 age-dependent amendments that ATSDR 2012 adopted; toxicology section expanded across renal, skeletal, cardiovascular (noted as plausible but contested), carcinogenicity, reproductive/developmental, and CNS endpoints with mechanistic detail on metallothionein binding and zinc displacement. Added a dedicated "Historical context: itai-itai disease" section capturing the Jinzu River basin cohort (196 recognized patients through 2011, 3 men 193 women; 255 subjects under observation; urinary B2M exceeding 4 mg/L in 71-74% of Jinzu residents aged 50-59 and 91-100% of those 70+; at least 16 non-Jinzu Cd-polluted region cases). Flagged that every modern regulatory Cd reference value ultimately derives from the Jinzu cohort and subsequent environmental-exposure epidemiology synthesized in this chapter, which is the defensibility anchor behind the HMT&C scientific-basis story. Authorship note: the Nordberg/Nogawa/Nordberg trio holds the institutional memory of the field from the 1970s forward, which makes the chapter's interpretive positions heavy-weight in the scientific record. Batch continues at Casarett & Doull's Essentials of Toxicology Ch 23 (Ufelle/Barchowsky 2021) next.

<a id="2026-04-24-ingest-ufelle2021-metals-chapter"></a>

## [2026-04-24] ingest | ufelle2021-metals-chapter - Casarett & Doull's Essentials of Toxicology, 4th ed., Ch 23

Entry ID: `2026-04-24-ingest-ufelle2021-metals-chapter`

Pages touched: [[sources/ufelle2021-metals-chapter|Ufelle & Barchowsky 2021]], [[metals/cadmium]], [[synthesis]], [[index]]
Notes: Ninth substantive ingest. Chapter 23 "Toxic Effects of Metals" from Casarett & Doull's Essentials of Toxicology, Fourth Edition (McGraw Hill, 2021), authored by Alexander C. Ufelle and Aaron Barchowsky. Chapter spans PDF pages 726-789 (revised from the initial page-boundary estimate of 726-758, which was off because a grep misidentified a "CHAPTER 24" marker; Ch 24 actually starts at PDF 790). The Cadmium subsection is compact, running approximately PDF pages 770-775 in textbook-summary prose. License `copyright-licensed-private`: raw PDF held privately under `raw/textbooks/`, gitignored, never placed in a public repository. Source page uses paraphrased factual extraction. The chapter's value to the wiki is primarily corroborative: it confirms in a 2021 textbook of record that the field consensus around cadmium toxicology established in the Handbook on the Toxicology of Metals (Nordberg, Nogawa, Nordberg 2015) and in the regulatory documents has not shifted materially in the six years between the two textbooks. Three unique contributions captured: (1) explicit clinical-practice statement that no effective clinical treatment exists for cadmium intoxication and that chelation therapy produces significant adverse effects, which is durable material for HMT&C defensibility because it reinforces the prevention-over-treatment framing as medically grounded rather than as marketing; (2) observation that pregnant women appear to accumulate more cadmium than nonpregnant women, relevant for reproductive-audience app content; (3) notably less-hedged cardiovascular framing versus the 2015 Handbook, describing a "strong association" with peripheral vascular disease and raising the possibility that cadmium partially mediates smoking-related peripheral artery disease effects. Per CLAUDE.md drift-protection rule, both the 2015 "variable" and 2021 "strong" cardiovascular positions are recorded on wiki/metals/cadmium.md without resolution, with a new synthesis.md entry flagging the framing shift as a live open question for the first synthesis pass to resolve by searching the 2015-to-present cardiovascular Cd literature. Also captured minor numeric variance on inhalation absorption (Nordberg 2015: 10-50%; Ufelle 2021: 10-60%) as a provenance note. Added "Clinical treatment" subsection to wiki/metals/cadmium.md capturing the chelation-ineffective point. Batch continues at Patty's Toxicology Ch 7 (Jakubowski 2012) next.

<a id="2026-04-24-ingest-jakubowski2012-zinc-cadmium-chapter"></a>

## [2026-04-24] ingest | jakubowski2012-zinc-cadmium-chapter - Patty's Toxicology, 6th ed., Ch 7 (Cd portion only; Zn deferred)

Entry ID: `2026-04-24-ingest-jakubowski2012-zinc-cadmium-chapter`

Pages touched: [[sources/jakubowski2012-zinc-cadmium-chapter|Jakubowski 2012]], [[metals/cadmium]], [[index]]
Notes: Tenth substantive ingest, closing the initial cadmium batch. Chapter 7 "Zinc and Cadmium Compounds" of Patty's Toxicology, Sixth Edition (John Wiley & Sons, 2012), authored by Marek Jakubowski (Nofer Institute of Occupational Medicine, Lodz, Poland). Combined Zn+Cd chapter structure: zinc occupies sections 1-7, cadmium begins at section 8 with cadmium metal and extends through sections for cadmium compounds (chloride, oxide, sulfide, selenium sulfide). Only the cadmium portion ingested this session; zinc portion deferred. Cite key `jakubowski2012-zinc-cadmium-chapter` is shared and will be extended with zinc-specific content during a future zinc ingest rather than creating a second cite key. License `copyright-licensed-private`: raw PDF held privately, never placed in public repository. Source page uses paraphrased factual extraction. SHA-256 is for the complete Patty's 6-volume set PDF, noted in provenance. Chapter's distinguishing value among wiki Cd sources is its industrial-toxicology lens (occupational hygiene, analytical methods, worker biomonitoring procedures, compound-specific acute and chronic toxicity values, cross-jurisdictional occupational exposure limits) rather than the dietary-exposure focus of the other sources. Substantive captures: detection limits for FAAS (0.8-12.5 µg/L), ICP-OES (0.1-1), GFAAS (0.002-0.02), ICP-MS (0.00001-0.001); NIOSH Method 7048 for air cadmium monitoring with flame AAS at 228.8 nm; industrial cadmium production (77% NiCd batteries, 11% pigments, 8% plating, 4% alloys; declining from ~22,000 MT/yr to ~16,000 MT/yr early 21st century); ambient air Cd ranges (remote 0.1-1 ng/m³ through urban 1-20 ng/m³); compound-specific LC50/LD50 values; urinary B2M upper reference of 300 µg/g creatinine. Light updates to wiki/metals/cadmium.md: industrial-use breakdown and ambient air ranges added to food-sources/environmental context; Testing section substantively upgraded with method-specific detection-limit detail and NIOSH Method 7048 reference; Jakubowski 2012 added to sources list (source count 8→9). Chapter's direct applicability to app and consumer-audience content is limited; primary value will come when the wiki's `testing/` and `supply-chain/` sections are stood up, which the Jakubowski ingest now seeds with substantive factual content.

This closes the initial cadmium regulatory+textbook batch: 10 substantive ingests (FDA CTZ Pb 2025; EFSA 2009; OEHHA Prop 65 paired 1996+2001; JECFA 91st 2022; ATSDR 2012; Codex CCCF17 2024; Nordberg 2015; Ufelle 2021; Jakubowski 2012) plus one deferral (EPA IRIS 1999 draft retained for later historical ingest). `wiki/metals/cadmium.md` now lists nine source pages and has populated content across overview, toxicology, exposure routes with half-life and body-burden accumulation, food sources with industrial context and cocoa, regulatory limits across all major bodies, testing with analytical-method detail, itai-itai historical context, vulnerable populations, clinical treatment, and open questions. `wiki/synthesis.md` tracks five load-bearing gaps: EFSA/JECFA/ATSDR (three-way) reference-value divergence, dietary-Cd carcinogenicity dose-response, Codex standards provenance gap, cardiovascular endpoint framing shift between Nordberg 2015 and Ufelle 2021, and EPA IRIS provenance gap. Next planned steps per the forward plan saved in session memory: first synthesis pass on wiki/metals/cadmium.md with audience-tagged sections for regulator/educator/consumer/app, then ingredient stubs for top Cd-accumulating commodities (rice, cocoa, leafy greens, potatoes, sunflower seeds, organ meats, shellfish). Quartz vendoring and Vercel merge can proceed in parallel.

<a id="2026-04-24-synthesis-metals-cadmium"></a>

## [2026-04-24] synthesis | metals/cadmium - first synthesis pass with audience layering

Entry ID: `2026-04-24-synthesis-metals-cadmium`

Pages touched: [[metals/cadmium]]
Notes: First synthesis pass on wiki/metals/cadmium.md per forward-plan step 8. Restructured the page with explicit audience tags (HTML comments per CLAUDE.md pattern) and added three new audience-layered sections: (1) "At a glance" consumer section after Overview, structured around three facts — cadmium accumulates for decades with no clinical treatment, population-level contributors differ from high-concentration foods, and three vulnerable groups (children 0.5-12, iron-deficient women of reproductive age, smokers) face materially higher risk than reference-value-for-adults summaries suggest. (2) "What this means for food choice" consumer subsection under Food sources, specifying dose-and-population for each high-leverage consumer choice (bivalves, wild mushrooms, organ meats, cocoa, smoking, hotspot food) and explicitly framing consumer decision-making as "total weekly exposure summed across sources relative to the reference values you find most credible" rather than "safe versus dangerous." (3) "What the reference values mean in practice" consumer subsection under Regulatory limits, walking a reader through the four-value divergence (ATSDR 0.1 / EFSA 0.36 / JECFA 0.83 / EPA IRIS ~1.0 µg/kg/day daily equivalents) and recommending which value to calibrate against given the consumer's own exposure profile. (4) "If you are in one of these groups" consumer subsection under Vulnerable populations, with specific practical implications for pregnant/potentially-pregnant women (iron-status correction as cadmium-exposure reduction; OEHHA MADL 4.1 µg/day as directly relevant reference), parents of children under 12 (cocoa-product frequency as highest-leverage dietary variable), and frequent-seafood/mushroom/organ-meat consumers (calibrate to ATSDR rather than EFSA/JECFA). (5) New "App-layer integration" section tagged `audience: app` consolidating machine-readable takeaways: population-level contamination-profile confidence assignments, pediatric intake multipliers (1.6x adult per-kg for 0.5-12, 2.65x for toddlers), four reference-value daily-equivalent scale, absorption-fraction defaults (7.5% GI default, 10% for low-iron/pregnancy flag), biological half-life defaults (20y regulatory convention; 21-43y range for kidney-concentration-dependent handling), peak renal cortex age 55, smoking additive contribution ~2µg per 20 cigarettes. All existing technical sections (Toxicology, Exposure routes, Food sources, Regulatory limits, Testing, Historical context, Vulnerable populations, Open questions) retained and tagged with appropriate audiences. Open questions updated from 2-item to 5-item list reflecting the full batch (reference-value divergence, carcinogenicity dose-response, cardiovascular framing shift, EPA IRIS provenance gap, Codex standards provenance gap). Per CLAUDE.md consumer-audience rule, every consumer subsection specifies dose, population, and consumption frequency with quantitative anchors; no undefined qualifiers ("small," "trace," "safe," "dangerous") used. Per drift-protection rule, both the Nordberg 2015 "variable" and Ufelle 2021 "strong" cardiovascular positions retained without resolution; neither strengthened nor softened to reconcile. Per wiki-to-HMT&C firewall rule, the "reference values differ by a factor of 8 and HMT&C thresholds must name which one they calibrate to and why" framing is explicit in both the regulatory-limits and consumer subsections. Next step per forward plan: ingredient stubs for top Cd-accumulating commodities.

<a id="2026-04-24-schema-ingredient-stubs-cadmium-batch"></a>

## [2026-04-24] schema | ingredient-stubs-cadmium-batch - 10 top Cd-accumulating ingredient stubs

Entry ID: `2026-04-24-schema-ingredient-stubs-cadmium-batch`

Pages touched: [[ingredients/rice]], [[ingredients/wheat]], [[ingredients/cocoa]], [[ingredients/chocolate]], [[ingredients/spinach]], [[ingredients/potatoes]], [[ingredients/sunflower-seeds]], [[ingredients/organ-meats]], [[ingredients/bivalve-molluscs]], [[ingredients/wild-mushrooms]], [[index]]
Notes: Forward-plan step 9. Created 10 ingredient stubs for the top cadmium-accumulating commodities surfaced by the cross-source synthesis on [[metals/cadmium]]. Each stub carries the CLAUDE.md ingredient-page template frontmatter with `contamination_profile` for Pb and Cd (and in some cases iAs, tHg) set to `status: pending`, `confidence: null`, `n_studies: 0`, `last_reviewed: null`, per Karen's forward-plan direction to create stubs rather than populate. Body content beyond the frontmatter provides enough structural spine to make each page meaningful: a brief "Why this commodity accumulates cadmium" section drawing on the source-level findings, placeholder sections for ranges-by-region, processing effects, ingredient-derivative risk, mitigation options, and applicable regulatory limits, and pointers back to the source pages that inform each commodity. Selected commodities span the dominant EFSA and JECFA population-level contributor list (rice, wheat, potatoes, leafy greens, organ meats) and the dominant EFSA high-concentration-food list (bivalve molluscs, wild mushrooms, cocoa, chocolate, oilseeds). EFSA 2009 Table 1 mean values for each commodity are cited in the "Ranges by source, region, and variety" section as context without populating the structured `contamination_profile` fields; the actual population of `typical_ppb`, `p95_ppb`, `n_studies`, `confidence`, and `last_reviewed` requires a dedicated ingredient-level ingest pass. Index updated with a ten-entry Ingredients section. Stubs positioned as attachment points for the next ingest wave per Karen's framing: "Gives the next ingest wave somewhere to attach." Closes forward-plan step 9.
