---
type: product-category-index
category: beverages
hmtc_category: 5
label: "Category 5: Beverages"
raw_path: raw/reports/category5-step-0-output-locked-20260428.md
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-01
sources: 2
---

# Category 5: Beverages

This page is the wiki hub for the locked Category 5 Step 0 beverage row architecture. It preserves the sixteen locked rows and links each row to its product page, ingredient nodes, and affected metal pages. Downstream ingest may append future amendment rows, but these row numbers and names should not be renumbered or silently collapsed.

## Locked Rows

| # | Subcategory | Split From | Variant Type |
| --- | --- | --- | --- |
| 1 | [[products/fruit-juices-non-apple|Fruit juices, non-apple]] | fruit-juices | clean benchmark |
| 2 | [[products/fruit-juices-apple-containing|Fruit juices, apple-containing]] | fruit-juices | higher-contamination row |
| 3 | [[products/vegetable-juices-non-root|Vegetable juices, non-root]] | vegetable-juices | clean benchmark |
| 4 | [[products/vegetable-juices-root-vegetable-containing|Vegetable juices, root-vegetable-containing]] | vegetable-juices | higher-contamination row |
| 5 | [[products/plant-milks-non-soy-non-rice|Plant milks (almond, oat, coconut, other non-soy/non-rice)]] | plant-milks | clean benchmark |
| 6 | [[products/plant-milks-soy-based|Plant milks, soy-based]] | plant-milks | higher-contamination row |
| 7 | [[products/plant-milks-rice-based\|Plant milks, rice-based — RETIRED]] | plant-milks | retired → Category 3 row 10 (Rice beverages); Amendment 1, 2026-04-28 |
| 8 | [[products/flavored-waters|Flavored waters]] | flavored-waters | independent no split |
| 9 | [[products/sports-energy-drinks|Sports/energy drinks]] | sports-energy-drinks | independent no split |
| 10 | [[products/herbal-botanical-infusions|Herbal/botanical infusions]] | tea-taxonomy | clean benchmark |
| 11 | [[products/true-tea-camellia-sinensis|True tea (Camellia sinensis)]] | tea-taxonomy | higher-contamination row |
| 12 | [[products/matcha|Matcha (whole-leaf Camellia sinensis)]] | tea-taxonomy | distinct exposure pathway |
| 13 | [[products/coffee|Coffee (ground, brewed, instant, single-serve)]] | coffee | independent no split |
| 14 | [[products/soft-drinks-carbonated-beverages|Soft drinks/carbonated beverages]] | soft-drinks-carbonated-beverages | independent no split |
| 15 | [[products/fermented-beverages-non-tea-based|Fermented beverages, non-tea-based]] | kombucha-and-fermented-beverages | clean benchmark |
| 16 | [[products/kombucha-tea-based|Kombucha (tea-based fermented beverage)]] | kombucha-and-fermented-beverages | higher-contamination row |

## Platform Links

Apple-containing fruit juice routes through [[ingredients/apple]] and [[metals/lead|Pb]]. Root-vegetable-containing juice routes through [[ingredients/root-vegetables]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]]. Soy plant milk routes through [[ingredients/soy]], [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]]. Rice plant milk routes through [[ingredients/rice]], [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]]. Tea, matcha, and tea-based kombucha route through [[ingredients/camellia-sinensis]], [[metals/aluminum|Al]], and [[metals/lead|Pb]].

## Boundary Rules

Drinking water and mineral water route to the water category, not this beverage category. Tea or coffee with a Supplement Facts panel routes to dietary supplements. Plant-based infant formula routes to Category 1. Sparkling water without flavoring routes to water; sparkling water with flavoring routes to [[products/flavored-waters]].

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [ed8e81c](https://github.com/paleofoundation/heavymetalindex/commit/ed8e81c) | 2026-05-14 | autonomy: firewall lint+fix and mandatory-sections audit+autofill |
| [165949d](https://github.com/paleofoundation/heavymetalindex/commit/165949d) | 2026-05-14 | products: retire Category 5 row 7 (plant-milks-rice-based) → re-route to Category 3 row 10 |
| [48511e9](https://github.com/paleofoundation/heavymetalindex/commit/48511e9) | 2026-05-02 | Add Category 5 plant milk comparison layer |
<!-- END: hmi-page-history -->
## Who this page is for

_Pending. The brand-legal, retailer-compliance, HMTc-internal, and regulator audiences are listed in OPERATING.md Part 2; this section will frame what each is looking for on this page._

## Methodology

_Pending. This section will state the speciation, basis-preservation, row-fit, and pooling rules from CLAUDE.md Part 6 that govern downstream sections of this page._

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
_Pending: regenerated by `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` once sources route and the pooling engine emits aggregate rows for this product category._
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

_Hand-curated section. Populated by the synthesis pass as sources contribute._

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
_Pending: regenerated by `tools/evidence/apply-product-broad-context.mjs` once broad-scope sources route to this page._
<!-- END: hmi-broad-context-sources -->

## Federal/Regulatory Limits vs Field Findings

<!-- BEGIN: hmi-product-crosswalk -->
_Pending: regenerated by `tools/apply-product-crosswalk-sections.mjs` once `applicable_regulations` are identified and field-finding evidence is pooled._
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing ingredient pages' Mitigation options sections and the relevant `mitigation/` pages. The Levers section is the brand-legal-actionable surface of this page._

## How standards math uses this page

_The percentile arithmetic that informs HMTc thresholds for this product category lives on the staff Standards Workbench (`data/workbench/standards/<this-slug>.md`). This public page reports literature evidence; the workbench applies the methodology in CLAUDE.md Part 19. The gap between literature evidence and HMTc thresholds is named honestly on the workbench, not hidden._

## Historical recalls and enforcement

_Pending synthesis. Public-record regulatory events for this product category will be summarized here as the synthesis pass identifies them. Per CLAUDE.md Part 12, recalls are framed as regulatory events, not brand rankings._

## Sources

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->

