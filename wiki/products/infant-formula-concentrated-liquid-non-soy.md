---
title: Infant Formula, Concentrated Liquid (Non-Soy)
type: product-category
category: infant-formula-concentrated-liquid-non-soy
category_label: Infant and Child Foods
base_taxonomy: infant-formula-concentrated-liquid
variant_type: bridge
primary_metals_of_concern: [tAs, Pb, Cd, tHg, Al]
vulnerable_population: infants-0-12mo
audience: [regulator, educator, consumer, app]
review_state: draft
wiki_doi: null
updated: 2026-04-29
sources: 2
---

# Infant Formula, Concentrated Liquid (Non-Soy)

This bridge node exists for sources that report concentrated liquid milk-based formula, which is not one of the locked HMTc Category 1 rows but is part of the formula evidence graph.
## Who this page is for

This page is written for brand legal and regulatory affairs teams, retailer quality and compliance readers, regulators, and adversarial readers who encounter concentrated liquid non-soy infant formula in evidence graphs or source citations. Concentrated liquid formula occupies a narrow market segment between powdered and ready-to-feed formats. Evidence for this format is thin; the sections below document what the cited sources actually report, the basis caveats, and the format relationship to the locked powdered and RTF rows. Every numeric claim traces to a source page in the Sources block.

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in non-soy (cow milk-based) concentrated liquid infant formula. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Methylmercury (MeHg) and total mercury (tHg) are reported separately for the same reason. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations in formula can be reported on at least three bases: powder as placed on the market, powder prepared for feeding (reconstituted with water at the manufacturer-specified dilution), or formula as consumed by an infant. Values on different bases are not directly comparable. Each table below labels the source basis explicitly. Where a basis conversion is provided, the conversion factor and assumptions are stated alongside the converted value, and the converted value is marked as indicative.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row on two axes: matrix (cow milk-based vs soy-based vs hydrolyzed) and format (powder vs ready-to-feed vs concentrated liquid). Each axis is classified independently as exact, partial, or unknown.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** Certification thresholds are developed under the program at heavymetaltested.com, not on this page. See the [methodology](/methodology) for the wiki/HMT&C separation.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

_Generator-managed section: will be populated when source data is extracted and reviewed for this product row._

<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

_Source evidence inventory pending structured extraction. Occurrence evidence appears in the FDA 2026 Prepared-For-Feeding Context section below._

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

_Generator-managed section: will be populated when the routing audit identifies sources with broader author-stated scope._

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd); [[metals/arsenic-total]] (tAs); [[metals/mercury-total]] (tHg) | No federal product-specific limit loaded in this crosswalk. | tAs: N=8, detected 0.2-0.4 ug/kg; Pb: N=8, detected 0.05-0.4 ug/kg; Cd: N=8, detected 0.08-0.5 ug/kg; tHg: N=8, not detected. FDA formula occurrence evidence is present, but no matched formula action level is loaded here. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/fda2026-infant-formula-product-testing-results]] |

<!-- END: hmi-product-crosswalk -->

## Current Source Links

- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] — Canadian concentrated liquid milk-based formula summary: Al mean 131 ng/g and max 796 ng/g, Cd mean 0.13 ng/g and max 2.03 ng/g, and Pb mean 0.32 ng/g and max 0.85 ng/g, all as consumed.
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]] — FDA FY2023-FY2025 concentrated liquid cow-milk-based formula rows, expressed as prepared for feeding.

## FDA 2026 Prepared-For-Feeding Context

The FDA 2026 special survey includes 8 concentrated liquid cow-milk-based formula samples per analyte. These are retained as bridge context only; they are not assigned to powdered or ready-to-feed locked Category 1 rows.

| Metal | N | Detected | Basis | Highest value in this extraction | Use note |
| --- | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 8 | 8 | prepared for feeding | 0.4 ug/kg | Total arsenic. |
| [[metals/lead|Pb]] | 8 | 8 | prepared for feeding | 0.4 ug/kg | Bridge-context evidence only. |
| [[metals/cadmium|Cd]] | 8 | 4 | prepared for feeding | 0.5 ug/kg | Bridge-context evidence only. |
| [[metals/mercury-total|tHg]] | 8 | 0 | prepared for feeding | 0 ug/kg | Total mercury; not MeHg. |

## Row Mapping

Do not merge these rows into powdered formula or ready-to-feed formula without explicit basis normalization. Use as format-context evidence unless a future taxonomy adds concentrated liquid formula as a certification row.

## Levers to reduce contamination

The concentrated liquid format shares the same upstream ingredient and processing levers as powdered and RTF formats. The Sn migration lever is more relevant for concentrated liquid in cans than for powdered formula. Levers are ordered by approximate impact magnitude.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Specify low-metal mineral premix and protein ingredient inputs. Vitamin-mineral premixes are a documented pathway for aluminum and other trace metal contamination in formula; premix supplier specification and batch testing are the primary control. | Premix origin and specification can drive substantial variation in Al and other metal concentrations; quantified magnitude data not yet ingested from cited sources for this specific lever at the formula level. | — |
| 2 | Sourcing | Specify dairy protein (cow milk protein or whey) from suppliers with documented low Cd, Al, and Pb in raw ingredient testing. | _Quantified lever magnitude at the ingredient-specification level not yet ingested from cited sources for this format._ | — |
| 3 | Processing | Specify process water quality: water used for producing concentrated liquid carries its own metal burden, particularly Pb from older plumbing and Al from water treatment. | _Quantified magnitude data not yet ingested from cited sources for water-source contribution to finished formula metal burden._ | — |
| 4 | Processing | Equipment contact surface audit: stainless steel alloys and aluminium processing equipment can contribute Al to the product stream under certain cleaning conditions. | _Quantified magnitude data not yet ingested from cited sources for equipment-contact contribution._ | — |
| 5 | Formulation | Not a primary lever for this format beyond ingredient sourcing. | — | — |
| 6 | Testing and QC | Lot-level ICP-MS on incoming protein ingredients, mineral premix, and finished product. The FDA 2026 survey documents N=8 concentrated liquid cow-milk samples covering tAs, Pb, Cd, and tHg; this small sample size underscores the need for ongoing lot testing. | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| 7 | Packaging and storage | Sn migration from non-lacquered cans is a direct concern for this liquid format. Specify lacquered or non-metallic can lining. The concentrated liquid format is more exposed to Sn migration than powdered formula due to direct liquid-metal contact over the product shelf life. | Sn migration is format-specific (liquid > powder); quantified magnitude data not yet ingested from cited sources for formula-specific Sn migration rates. | — |

Agronomic levers: not applicable to this product category as a direct lever. Agronomic interventions on dairy herds live upstream on the relevant ingredient pages.

Cross-links: [[products/infant-formula-powder-non-soy]]; [[products/infant-formula-rtf-liquid-non-soy]]; relevant mitigation pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

## Historical recalls and enforcement

<!-- audience: regulator, educator -->

_No row-specific regulatory recall or enforcement action has been added to this page. Future entries will be framed as regulatory events, not brand rankings (CLAUDE.md Part 12)._

<!-- BEGIN: hmi-page-references -->
## References

The 2 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Robert Dabeka, Andre Fouquet, Stephane Belisle, and Stephane Turcotte (2011). *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*. Food Additives & Contaminants: Part A. [https://doi.org/10.1080/19393210.2011.571795](https://doi.org/10.1080/19393210.2011.571795). Peer-reviewed, A-tier. [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum|Source record]]
2. U.S. Food and Drug Administration (2026). *Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey*. FDA analytical results table. [www.fda.gov](https://www.fda.gov/media/192124/download?attachment=). Government dataset, A-tier. [[sources/fda2026-infant-formula-toxic-elements-special-survey|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2026-infant-formula-toxic-elements-special-survey\|FDA 2026]]. *Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey*, FDA analytical results table | 2026 | Government dataset | FDA special survey reporting tAs, Pb, Cd, and tHg in 312 infant formula samples (FY2023–FY2025); concentrated-liquid formula included as context (not in the locked row set) prepared-for-feeding basis |
| 2 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|Dabeka et al. 2011]]. *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*, Food Additives & Contaminants: Part A | 2011 | Peer-reviewed | Canadian survey reporting Pb, Cd, and Al in milk-based concentrated liquid formula (n=44; Al mean 131 ng/g, Pb mean 0.32 ng/g); direct as-consumed occurrence data for this format |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [f907793bb](https://github.com/paleofoundation/heavymetalindex/commit/f907793bb) | 2026-05-17 | minor | Narrative text revised |
| [4e2cdd0cc](https://github.com/paleofoundation/heavymetalindex/commit/4e2cdd0cc) | 2026-05-17 | minor | Narrative text revised |
| [a32d2cf5f](https://github.com/paleofoundation/heavymetalindex/commit/a32d2cf5f) | 2026-05-13 | major | 8 sections added; narrative text revised |
<!-- END: hmi-page-history -->
