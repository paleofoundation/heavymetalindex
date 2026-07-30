---
type: source
raw_handle: AUTO_gap-infant-formula-powder-non-soy-acsi-2016-2582
cite_key: durovic2017-human-milk-infant-formula-microelements
title: "Determination of Microelements in Human Milk and Infant Formula Without Digestion by ICP-OES"
authors: ["Dijana Durovic", "Branka Milisavljevic", "Mirjana Nedovic-Vukovic", "Branislav Potkonjak", "Snezana Spasic", "Miroslav M. Vrvic"]
year: 2017
publication: "Acta Chimica Slovenica"
doi: "10.17344/acsi.2016.2582"
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-infant-formula-powder-non-soy-cu_2017_10-17344-acsi-2016-2582.pdf"
raw_sha256: e4307901c082bcc6e8ac27a810a21c055e59a7b68afd84fcdbf23f5606b1baa1
access_url: "https://doi.org/10.17344/acsi.2016.2582"
metals: [Zn, Fe, Cu]
ingredients: ["[[ingredients/breastmilk]]", "[[ingredients/infant-formula-powder]]", "[[ingredients/non-soy-infant-formula]]", "[[ingredients/milk-and-dairy]]"]
products: ["[[products/infant-formula-powder]]", "[[products/infant-formula-powder-non-soy]]", "[[products/infant-formula-dairy]]"]
matrices: [breast-milk, infant-formula-powder]
jurisdictions: [ME, RS]
near_duplicates: []
sample_n: 43
sample_population: "28 mature human milk samples from lactating mothers and 15 powdered infant formula units representing five formula products suitable for infants 1-6 months of age; commercial formula products are reported here only as anonymized product groups."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
---

# Durovic et al. 2017 - microelements in human milk and infant formula

This study compares Zn, Fe, and Cu determination in mature human milk and powdered infant formula using dilution-based sample preparation without digestion. The direct HMT&C value is nutrient-metal context for powdered infant formula and human milk, not toxic-contaminant screening. The paper reports measured Zn, Fe, and Cu in five commercial formula products and 28 human milk samples, with certified reference material checks against infant/adult nutritional formula.

## Key numbers

**Human milk (Table 8; mg/L, n=28):**

| Element | Minimum | Maximum | Mean +/- SD |
| --- | ---: | ---: | ---: |
| Zn | 2.22 | 9.91 | 5.35 +/- 2.15 |
| Fe | 0.32 | 5.50 | 0.83 +/- 0.99 |
| Cu | 0.12 | 0.92 | 0.47 +/- 0.20 |

**Powdered infant formula (Tables 6 and 7; mg/100 g powder):**

| Element | ICP-OES product means | FAAS product means |
| --- | ---: | ---: |
| Zn | 3.48-4.75 | 3.09-4.55 |
| Fe | 3.37-4.56 | 3.55-5.05 |
| Cu | 0.26-0.38 | 0.24-0.37 |

**Method validation:**

- ICP-OES LOD/LOQ (Table 2): Zn 1.5/5 ug/L, Fe 1.5/5 ug/L, Cu 3.0/10 ug/L.
- Spiked human-milk recoveries (Table 4): Zn 90-94%, Fe 97-103%, Cu 90-102%.
- NIST SRM 1849 infant/adult nutritional formula recoveries by ICP-OES and FAAS were 91/85% for Zn, 93/100% for Fe, and 99/98% for Cu.
- The authors conclude that ICP-OES was better for Zn, FAAS was better for Fe, and both methods were comparable for Cu.

## Methods (brief)

Human milk samples were stored frozen before analysis. Formula powder samples were purchased in triplicate and prepared with 20 mL of boiling ultrapure water, cooled to room temperature, and diluted 10-fold with ultrapure water. Zn, Fe, and Cu standards were prepared from 1000 mg/L single-element solutions. ICP-OES used axial configuration with Zn 213.857 nm, Fe 238.204 nm, and Cu 327.396 nm lines; FAAS was used as the comparator method. Quality control used NIST SRM 1849 infant/adult nutritional formula, spiked human milk pools, blanks, and a 0.25 mg/L control standard. Statistical analysis used SPSS 17.0.

## Implications

Standards work: This is not a toxic-contaminant occurrence source for Pb, Cd, As, or Hg. It is useful as formula/milk nutrient-metal context and as a method-comparison reference for dilution-based ICP-OES and FAAS work in formula matrices.

Courses: Useful for explaining why nutrient metals in infant formula need to be separated from contaminant metals in HMT&C routing, and why the same analytical platform can support both nutrition labeling and contamination screening.

App: Route Zn, Fe, and Cu as nutrient-metal context for powdered formula and breast milk. Do not use this source to infer toxic-metal compliance.

Microbiome: Not addressed.

## Wiki pages this source may touch

- [[metals/zinc]]
- [[metals/iron]]
- [[metals/copper]]
- [[ingredients/breastmilk]]
- [[ingredients/infant-formula-powder]]
- [[ingredients/non-soy-infant-formula]]
- [[ingredients/milk-and-dairy]]
- [[products/infant-formula-powder]]
- [[products/infant-formula-powder-non-soy]]
- [[products/infant-formula-dairy]]

## Verification notes

- Fresh auto-fetch ingest 2026-05-19 from the gap-driven infant-formula Cu/Fe/Zn wishlist. The same DOI appeared in three downloaded wishlist rows targeting Cu, Fe, and Zn; this page is the canonical source page for those duplicate downloads.
- Strict brand firewall: the source tables identify commercial formula products by brand name, but this page reports only aggregate anonymized product-group values and product-form descriptors.
- Unit discipline: the abstract describes formula ranges in mg/L, while Tables 6 and 7 label the formula measurements as mg/100 g powder. This page uses the table unit for formula values and the Table 8 unit for human milk.
- The paper reports total Zn, Fe, and Cu only; no species-level issue applies.
- Methods vendor/equipment/reference-material names are retained under Part 12 Exception 2.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [d784e29f4](https://github.com/paleofoundation/heavymetalindex/commit/d784e29f4) | 2026-05-19 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
