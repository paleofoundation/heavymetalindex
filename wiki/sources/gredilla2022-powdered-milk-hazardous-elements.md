---
type: source
raw_handle: AUTO_gap-infant-formula-powder-non-soy-s12161-022-02267-6
cite_key: gredilla2022-powdered-milk-hazardous-elements
title: "A Rapid Routine Methodology Based on Chemometrics to Evaluate the Toxicity of Commercial Infant Milks Due to Hazardous Elements"
authors: ["Ainara Gredilla", "Silvia Fdez-Ortiz de Vallejuelo", "Gorka Arana", "Alberto de Diego", "Marcos L. S. Oliveira", "Katia da Boit", "Juan Manuel Madariaga", "Luis F. O. Silva"]
year: 2022
publication: "Food Analytical Methods"
doi: "10.1007/s12161-022-02267-6"
source_type: peer-reviewed
evidence_tier: A
raw_path: "raw/manual-fetch/seasonal-geographic-variance/ingested/gap-infant-formula-powder-non-soy-ca_2022_10-1007-s12161-022-02267-6.pdf"
raw_sha256: 5d9da3d21c4b2b6f650a0000d0ee376dbad45bf0d63ad0bc1a1d959807e8cd47
access_url: "https://doi.org/10.1007/s12161-022-02267-6"
metals: [Li, Al, Mg, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, tAs, Se, Cd, Sn, Sb, Ba, tHg, Tl, Pb, Mo]
ingredients: ["[[ingredients/infant-formula-powder]]", "[[ingredients/milk-and-dairy]]"]
products: ["[[products/infant-formula-powder]]", "[[products/infant-formula-powder-non-soy]]", "[[products/infant-formula-dairy]]"]
matrices: [powdered-milk, infant-formula-powder, adult-powdered-milk]
jurisdictions: [BR, CO]
near_duplicates: []
sample_n: 12
sample_population: "Twelve commercial powdered milk formulas purchased in representative cities of Brazil and Colombia: nine child/infant milks and three adult powdered milks, each represented by three boxes combined before analysis."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
---

# Gredilla et al. 2022 - hazardous elements in powdered milks

## Overview

This study measured 27 elements in 12 powdered milk formulas from Brazil and Colombia, including initiation, follow-up, follow-on, and adult powdered milks. It is direct occurrence and risk-assessment context for infant/child powdered milks, although the paper reports some statistics across the whole 12-sample milk set rather than only infant formulas.

## Key numbers

**Sample set (Table 1):**

| Code group | Age/type description | Count |
| --- | --- | ---: |
| A-D | initiation milk, 0-6 months, whole | 4 |
| E-G | follow-up milk, 6-12 months, whole | 3 |
| H-I | follow-on milk, 12-36 months, whole | 2 |
| J-L | adult powdered milk, whole or skimmed | 3 |

**Whole-set concentration dispersion across 12 powdered milk samples (Table 2; mg/kg):**

| Element | Range | SD |
| --- | ---: | ---: |
| Al | 4 | 1 |
| Pb | 0.9 | 0.2 |
| As | 0.09 | 0.03 |
| Cd | 0.003 | 0.001 |
| Hg | 0.0017 | 0.0005 |
| Cr | 0.17 | 0.05 |
| Ni | 0.13 | 0.04 |
| Sn | 0.21 | 0.06 |
| Sb | 0.004 | 0.001 |
| Ba | 2.4 | 0.8 |
| Co | 0.04 | 0.01 |
| V | 0.079 | 0.03 |
| Mn | 1.0 | 0.4 |
| Fe | 124 | 34 |
| Zn | 61 | 17 |
| Mg | 748 | 210 |
| Ca | 6871 | 2414 |

**Risk-assessment conclusions:**

- The paper states that all hazard quotient values were below 1.
- The paper states that all carcinogenic-risk values were below the level the authors considered relevant for concern.
- Among infant milks, anonymized sample H (12-36 month follow-on milk) had high standardized-coefficient values and was identified by the authors as "poor quality"; the same conclusion notes that it did not present carcinogenic risk with respect to the elements considered.
- The authors conclude that children's powdered milks had a larger presence of trace and minor elements than adult milks, and that fortification plus manufacturing were probable metal/metalloid sources.

## Methods (brief)

Thirty-six commercially available milk boxes, three boxes for each of 12 formulas labeled A-L, were purchased in Brazil and Colombia. Replicate boxes for each formula were combined and homogenized. For each sample, 0.5 g milk powder was digested in Teflon vessels with 6 mL nitric acid and 1 mL hydrogen peroxide using a Multiwave 3000 microwave oven, filtered, diluted to 50 mL, and analyzed by ICP-MS using a PerkinElmer NexION 300. The 27-element panel was Li, Al, Na, Mg, K, Ca, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, As, Se, Sr, Mo, Cd, Sn, Sb, Ba, W, Tl, Pb, and Hg. Spike recoveries were 89-105%; all calibration curves had regression coefficients above 0.999.

## Implications

Standards work: This source is useful for broad element-screening context in powdered infant and child milks, especially for identifying which elements vary with formula type and fortification. Because some statistics are pooled across adult and child milks, source-specific extraction should distinguish whole-set dispersion from infant-only conclusions.

Courses: Useful for explaining why chemometric screening can identify suspect formula groups without replacing analyte-by-analyte concentration review.

App: Provides powdered-milk occurrence context and method metadata for a 27-element panel; direct infant-formula fields should preserve the source's child/adult grouping.

Microbiome: Not addressed.

## Wiki pages this source may touch

- [[metals/aluminum]]
- [[metals/arsenic-total]]
- [[metals/barium]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/cobalt]]
- [[metals/copper]]
- [[metals/iron]]
- [[metals/lithium]]
- [[metals/magnesium]]
- [[metals/manganese]]
- [[metals/molybdenum]]
- [[metals/nickel]]
- [[metals/lead]]
- [[metals/antimony]]
- [[metals/tin]]
- [[metals/titanium]]
- [[metals/vanadium]]
- [[metals/zinc]]
- [[ingredients/infant-formula-powder]]
- [[ingredients/milk-and-dairy]]
- [[products/infant-formula-powder]]
- [[products/infant-formula-powder-non-soy]]
- [[products/infant-formula-dairy]]

## Verification notes

- Fresh auto-fetch ingest 2026-05-19 from the gap-driven infant-formula wishlist. The wishlist target metal was Ca, but the paper's useful HMT&C endpoint is the broader hazardous-element panel in powdered infant/child milks.
- Strict brand firewall: the paper anonymizes formulas as A-L. This page preserves only source sample codes and does not name commercial brands.
- The paper reports total As, total Hg, and total Cr only; no arsenic, mercury, or chromium speciation was performed.
- Table 2 ranges/SD values are whole-set statistics across infant, child, and adult powdered milks; the page does not reinterpret them as infant-only distributions.
- Methods vendor/equipment/software names are retained under Part 12 Exception 2.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
