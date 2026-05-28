---
type: product-crosswalk
title: "Regulatory Crosswalk vs Field Findings"
audience: [standards-development, regulator, retailer, brand, legal]
wiki_doi: null
updated: 2026-05-02
sources: 5
---

# Regulatory Crosswalk vs Field Findings

This page is the critical comparison layer between external regulatory values and observed occurrence findings. It is designed for HMTc standards development, regulatory review, retailer and brand due diligence, and legal review.

Regulatory values are not HMTc standards values. They are external legal or guidance context. HMTc candidate values must still pass the evidence-fitness gate: exact metal species, exact product matrix, known basis, deterministic unit normalization, adequate source tier, and review state.

## How To Read This Table

- "Final guidance" and "regulation" rows may be used as external regulatory context or caps.
- FDA final guidance action levels that contain nonbinding recommendations should be displayed as enforcement-relevant federal context, not as statutory legal limits and not as HMTc standards.
- "Draft guidance" rows must not be presented as final legal limits.
- "No matched value loaded" means the current evidence layer has not identified a product-specific regulatory value for that row.
- Field findings are shown only where a structured extraction exists. Otherwise the comparison is intentionally blocked rather than guessed.
- Formula occurrence values are prepared-for-feeding lower-bound values from the FDA workbook, not dry-powder-as-sold values.

## Crosswalk Surface

The detailed comparison surface is generated on each product page from `data/evidence/product_regulatory_crosswalk.csv`. That CSV is now the source of truth for the row-level crosswalk; the product pages carry the readable table close to the top of the page.

High-signal rows after the EU 2023/915 ingest:

| Product row group | Regulatory values now visible | Current comparison read |
| --- | --- | --- |
| [[products/infant-formula-powder-non-soy]] and [[products/infant-formula-powder-soy-based]] | EU Pb 20 ug/kg; EU Cd 10 or 20 ug/kg by protein source; EU iAs 20 ug/kg | Legal values are visible, but direct comparison is blocked because the FDA 2026 formula occurrence rows are prepared-for-feeding and the EU powder limits are product-as-placed; iAs is also blocked where the source reports total arsenic. |
| [[products/infant-formula-rtf-liquid-non-soy]] and [[products/infant-formula-rtf-liquid-soy-based]] | EU Pb 10 ug/kg; EU Cd 5 or 10 ug/kg by protein source; EU iAs 10 ug/kg | Pb and Cd have direct liquid-basis context from FDA 2026 subsets; iAs remains blocked where the occurrence source reports total arsenic. |
| [[products/baby-cereals-dry-non-rice]] and [[products/baby-cereals-dry-rice-based]] | FDA Pb 20 ug/kg; FDA iAs 100 ug/kg for rice cereal; EU Pb 20 ug/kg; EU Cd 40 ug/kg | Limits are visible, but field-finding comparison remains blocked until structured product-row extraction is complete. |
| Purees and mixed meals | FDA Pb values plus EU Pb 20 ug/kg and EU Cd 40 ug/kg; selected baby-food iAs context | Field-finding comparison remains blocked until puree and meal rows are extracted with matrix, basis, and species preserved. |
| Fruit juices | FDA apple-juice iAs 10 ug/kg, FDA lead guidance/draft rows, EU fruit-juice iAs 20 ug/kg, EU fruit-juice Pb 30 or 50 ug/kg by juice type | Juice rows need apple/non-apple, berry/small-fruit, canned/not-canned, and species splits before exact comparison. |
| [[products/teething-and-snacks-rice-based]] | EU iAs 300 ug/kg for named rice cakes/crackers/wafers/flakes/popped rice products | Useful legal context, but product split is required; do not substitute FDA infant-rice-cereal values for snacks. |
| [[products/plant-milks-rice-based]] | EU iAs 30 ug/kg for non-alcoholic rice-based drinks | Direct comparison is available for D'Amato 2026 because product matrix, species, and unit basis match. |

## Where the structured data lives

The regulatory-cap entries shown on per-product pages are pulled from the staff Standards Workbench and applied by `tools/apply-product-crosswalk-sections.mjs`. The structured occurrence data feeding the field-findings columns lives in the same workbench layer. See the per-product page for the rendered comparison; see the workbench for the underlying tables.

## Source And Regulation Nodes

- [[sources/fda2026-infant-formula-product-testing-results]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[regulations/fda2025-lead-processed-baby-foods]]
- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]
- [[regulations/fda2023-inorganic-arsenic-apple-juice]]
- [[regulations/fda2022-draft-lead-juice]]
- [[regulations/fda2004-juice-haccp-lead]]
- [[regulations/fda-21cfr165110-bottled-water-lead]]
- [[regulations/eu2023-arsenic-rice-based-drinks]]
- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]

## Product-Page Decision Surface

The product pages should be decision-first. Narrative remains useful, but standards reviewers, regulators, retailers, brands, and legal teams need the same compact surface near the top of each row:

| Layer                       | Purpose                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Row identity                | Locked HMTc category, row number, clean or contaminated platform, paired clean counterpart.                |
| External regulatory context | Final rules/guidance, draft guidance, and no-value-loaded cells shown separately.                          |
| Field findings              | N, basis, units, analyte species, censoring policy, decision statistic, and source tier.                   |
| HMTc decision status        | DATA-GROUNDED, PROVISIONAL, HELD TO CLEAN, BLOCKED, or context-only.                                       |
| Legal caveats               | Brand anonymity, non-current-market status, scope mismatch, draft status, and analyte-speciation warnings. |

Regional pooling belongs below this row-level surface, not above it. Pool only after product matrix, analyte species, basis, method, and region fields are comparable.
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

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Per CLAUDE.md Part 12, individual brand recall actions are not enumerated here.

## How standards math uses this page

_The percentile arithmetic that informs HMTc thresholds for this product category lives on the staff Standards Workbench (`data/workbench/standards/<this-slug>.md`). This public page reports literature evidence; the workbench applies the methodology in CLAUDE.md Part 19. The gap between literature evidence and HMTc thresholds is named honestly on the workbench, not hidden._

## Historical recalls and enforcement

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Per CLAUDE.md Part 12, individual brand recall actions are not enumerated here.

## Sources

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8530c3e](https://github.com/paleofoundation/heavymetalindex/commit/8530c3e) | 2026-05-17 | synthesis: 53 product pages — replace placeholder Levers + Historical-recalls intros |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
| [ce0ecb2](https://github.com/paleofoundation/heavymetalindex/commit/ce0ecb2) | 2026-05-16 | sync source counts from live source-page references |
| [ed8e81c](https://github.com/paleofoundation/heavymetalindex/commit/ed8e81c) | 2026-05-14 | autonomy: firewall lint+fix and mandatory-sections audit+autofill |
| [ffcffea](https://github.com/paleofoundation/heavymetalindex/commit/ffcffea) | 2026-05-12 | master pages: firewall posture per OPERATING.md Part 2 |
<!-- END: hmi-page-history -->
