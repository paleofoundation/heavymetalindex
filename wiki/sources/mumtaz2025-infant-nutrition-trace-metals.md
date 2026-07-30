---
type: source
raw_handle: AUTO_ing-infant-formula-cd-2025-10-54219-fni-03-02-2025-514
cite_key: mumtaz2025-infant-nutrition-trace-metals
title: "Occurrence and Risk Evaluation of Trace Metals in Infant Nutrition Sources in Rural and Urban Multan, Pakistan"
authors: ["Mumtaz A", "Riaz M", "Shafiq H", "Ahmad U"]
year: 2025
publication: "Food and Nutrition Insights"
doi: 10.54219/fni.03.02.2025.514
source_type: peer-reviewed
evidence_tier: A
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-infant-formula-cd_2025_10-54219-fni-03-02-2025-514.pdf"
metals: [Pb, Cd, Ni, Zn, Fe]
ingredients: ["[[ingredients/infant-formula]]", "[[ingredients/breastmilk]]"]
products: ["[[products/infant-formula]]"]
matrices: [infant-formula, breastmilk]
jurisdictions: [PK]
near_duplicates: []
sample_n: null
sample_population: "breast milk from lactating mothers and commercial infant formula samples (all major available brands) collected from rural and urban Multan, Pakistan; infants stratified by age (0–3.5 and 3.6–7 months)"
updated: 2026-05-29
---
# Mumtaz et al. 2025 - Trace metals in infant nutrition sources in Multan

Mumtaz and colleagues measured trace metals in infant nutrition sources from rural and urban Multan, Pakistan and evaluated non-carcinogenic and carcinogenic risk. The study covers two matrices — breast milk from lactating mothers and commercial infant formula collected from local pharmacies and supermarkets — and reports Pb, Cd, Ni, Zn, and Fe concentration summaries and risk indices stratified by rural versus urban dwelling. Concentrations are reported on a liquid basis (mg/L). It should be kept market-specific to Pakistan.

## Key numbers

- Target analytes are Zn, Fe, Ni, Pb, and Cd, quantified by ICP-MS in mg/L.
- Table 1 reports ICP-MS LODs and LOQs (Pb LOD 0.01 mg/L, Cd LOD 0.005 mg/L) and CRM recoveries (Pb 97.9%, Cd 99.7% against NIST SRM 1643f).
- Table 2 summarizes mean concentrations by area. Rural mean Pb 0.0044 ± 0.0057 mg/L vs urban 0.0082 ± 0.0064 mg/L; urban Cd 0.0016 ± 0.0012 mg/L. Urban samples had higher Pb and Cd; rural samples had higher Zn (0.275 ± 0.161 mg/L) and Fe (0.873 ± 0.292 mg/L).
- Table 3 statistical comparison: Pb p = 0.018 (Cohen's d = −0.612, medium); Cd p = 0.0157 (d = −0.628, medium).
- Table 7 risk thresholds: cumulative HI 2.30 ± 2.70 (rural, 54.8% exceeding 1) vs 4.18 ± 3.13 (urban, 90.6% exceeding 1), p = 0.0128. Cumulative TCR 0.00161 (rural) vs 0.00205 (urban); both regions exceed the 10⁻⁴ TCR threshold.
- Table 8 effect sizes: Cd d = 1.05 (large); TCRCd d = 0.88 (large); HI d = 0.72 (medium); Pb d = 0.65 (medium).

## Methods (brief)

Cross-sectional sampling of 62 breast milk samples from lactating mothers plus infant formula samples from all major available brands across rural and urban Multan. Sample powders homogenized, dried 48 h at 60 °C, digested in nitric/perchloric acid (USEPA 1996 protocol), diluted to 25 mL, filtered through 0.45 µm cellulose nitrate membranes. Quantification by PerkinElmer NexION 2000B ICP-MS, calibrated against NIST SRM 1643f (Trace Elements in Water) and NIST SRM 1577c (Bovine Liver), with Rh and Bi internal standards for drift correction. Risk indices (EDI, THQ, HI, TCR) computed per USEPA RAGS Vol. I (2011). Statistics in R 4.5.2 with t-tests, Cohen's d, correlation, and PCA. Results are total element concentrations and should retain rural/urban strata.

## Implications

Contributes Pakistan-market occurrence data for Pb, Cd, Ni, Zn, and Fe in infant formula and breast milk, with rural-urban stratification and aggregate risk indices. Geographic scope is limited to Multan; do not pool with US- or EU-market data without explicit geographic-variance handling.

Useful for course material on rural-urban exposure disparities in infant nutrition matrices in South Asia.

App-relevant only after per-brand or per-product-form extraction, which this paper does not provide (values are aggregated at rural/urban level only).

## Wiki pages this source may touch

- [[products/infant-formula]]
- [[ingredients/infant-formula]]
- [[ingredients/breastmilk]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/nickel]]
- [[metals/zinc]]
- [[metals/iron]]

## Verification notes

The same DOI was fetched under Cd and Ni formula gaps. This page is canonical for those duplicate paths.

Audit 2026-06-09 (autonomous): replaced invented "urban THQ for Pb as 2.33 +/- 18.4" key-number line with the directly-verifiable Pb/Cd/HI/TCR values from Tables 2, 3, 7, and 8; removed invalid `ingredients/formula` slug; added the breast-milk arm (`ingredients/breastmilk`, sample population, methods) which the original ingest had silently dropped; added instrument model (PerkinElmer NexION 2000B), CRMs (NIST SRM 1643f and 1577c), and concentration basis (mg/L). The Table 2 THQ Pb fields ("Rural 12676 ± 16217", "Urban 2.3304 ± 18427") and Table 2 Cd column ("Rural 0.8 ± 0.0014") appear to be PDF rendering artifacts (likely misplaced decimals or merged thousands separators); the Table 3 / Section 3.1 narrative values (Pb 0.0044 / 0.0082 mg/L; Cd 0.0016 mg/L urban; HI 2.30 / 4.18) are internally consistent across the abstract, narrative, and Tables 7 and 8 and are used here as canonical. Audit verdict: REVISE.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [eeb36b218](https://github.com/paleofoundation/heavymetalindex/commit/eeb36b218) | 2026-06-09 | minor | Narrative text revised |
| [70ae1ccdf](https://github.com/paleofoundation/heavymetalindex/commit/70ae1ccdf) | 2026-05-30 | major | 1 section added |
| [0edf3ce78](https://github.com/paleofoundation/heavymetalindex/commit/0edf3ce78) | 2026-05-29 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
