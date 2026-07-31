---
type: source
raw_handle: FM_4661673
cite_key: shibata2016-arsenic-rice-cereal-risk-assessment-us
title: "Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S."
authors: [Shibata T, Meng C, Umoren J, West H]
year: 2016
publication: "International Journal of Environmental Research and Public Health 13(4):361"
doi: 10.3390/ijerph13040361
access_url: https://doi.org/10.3390/ijerph13040361
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: raw/markdown/FM_4661673/FM_4661673.md
metals: [iAs]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/infant-formula-powder-non-soy]]"]
matrices: [risk-assessment-model, intake-estimate]
jurisdictions: [US]
sample_n: null
sample_population: "Theoretical US infant cohort ages 4–24 months; modeled from EPA Child-Specific Exposure Factors; iAs concentrations sourced from FDA market survey data and published literature"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-08
---

# Shibata et al. 2016 — Arsenic Risk Assessment for US Infant Rice Cereal

Shibata and colleagues (Northern Illinois University; Global Environmental Health LAB, Brooklyn) constructed a probabilistic Monte Carlo risk assessment of inorganic-arsenic exposure for US infants and toddlers ages 4–24 months, drawing concentration inputs for rice cereal from FDA market-survey data and inputs for drinking water, infant formula, and other infant solid foods (purees, 2nd/3rd-stage foods, fruits, vegetables, meats) from EPA and published literature. The objective was to evaluate whether detected iAs concentrations in US-market rice cereal are safe for infant consumption and to derive a candidate maximum contaminant level (MCL) for iAs in rice cereal given overall background exposure. Evidence tier B because the concentration data are modeled inputs rather than independently measured samples.

## Key numbers

**Rice cereal iAs concentration (input, derived from FDA survey [paper refs 15,16]):** Total arsenic in US-market rice cereal 0.050–0.723 mg/kg, with the iAs fraction reported as 63% of total (37% organic forms including MMA and DMA). Derived iAs range 0.023–0.283 mg/kg. Triangular distribution used for Monte Carlo with minimum 2.30 × 10⁻⁵ mg/g, likeliest 9.10 × 10⁻⁵ mg/g, and maximum 2.83 × 10⁻⁴ mg/g.

**Drinking water iAs (input):** Uniform distribution from 0 to 0.010 mg/L (the US EPA NPDWR MCL).

**Infant formula iAs (input, from Jackson et al. 2012 [paper ref 20]):** Normal distribution, mean 7.48 × 10⁻⁶ mg/L and standard deviation 6.12 × 10⁻⁷ mg/L; assumed to be exclusively iAs. The Table 1 units are transcribed as-stated; see Verification notes for a paper-internal inconsistency between this concentration and the modeled ADD values for infant formula in Table 3.

**Other infant solid foods iAs (input):** Normal distribution, mean 4.6 × 10⁻⁶ mg/g and standard deviation 5.6 × 10⁻⁶ mg/g (purees, 2nd/3rd-stage foods, fruits, vegetables, meats combined); assumed 81.5% of total arsenic was iAs.

**Source contributions to total iAs intake (mean across 4–24 months at the 50th percentile):** Rice cereal 55%, other infant solid food 19%, drinking water 18%, infant formula 9%.

**Chronic daily intake (CDI, Table 4):** Rice cereal alone — 5.6 × 10⁻⁵ mg/kg/day at the 25th percentile, 4.0 × 10⁻⁴ at the 50th, and 8.5 × 10⁻⁴ at the 75th. Total dietary sources combined — 1.5 × 10⁻⁴ at the 25th, 7.3 × 10⁻⁴ at the 50th, and 1.6 × 10⁻³ at the 75th.

**Hazard quotients (Table 4):** HQ_acute remained below 1.0 across all percentiles for both rice cereal alone (0.02 at the 25th percentile, 0.10 at the 50th, 0.23 at the 75th) and total sources (0.05 at the 25th, 0.16 at the 50th, 0.37 at the 75th). HQ_chronic exceeded 1.0 at and above the 50th percentile for both rice cereal alone (0.19 at the 25th, 1.33 at the 50th, 2.83 at the 75th) and total sources (0.49 at the 25th, 2.42 at the 50th, 5.17 at the 75th).

**Incremental lifetime cancer risk (ILCR, Table 4):** Rice cereal alone — 2.0 × 10⁻⁶ at the 25th percentile, 1.4 × 10⁻⁵ at the 50th, 3.0 × 10⁻⁵ at the 75th. Total sources — 5.2 × 10⁻⁶ at the 25th, 2.6 × 10⁻⁵ at the 50th, 5.5 × 10⁻⁵ at the 75th. The authors note these are compatible with the WHO acceptable cancer-risk benchmark of 10⁻⁵ and the US EPA range of 10⁻⁶ to 10⁻⁴.

**Computed maximum contaminant levels for iAs in rice cereal:** MCL_rc,acute computed as 4.1 × 10⁻⁴ mg/g (0.4 mg/kg) at the 25th percentile (selected as the more protective reference than the 50th-percentile solution). MCL_rc,chronic returned negative values because HQ_chronic exceeded 1.0 even before accounting for the rice-cereal contribution; the authors report it as 0.0 mg/kg, meaning no headroom exists within ATSDR's chronic MRL once non–rice-cereal exposure is included. The paper compares these to the FAO/WHO Codex–proposed maximum level of 0.2 mg/kg for iAs in polished rice and recommends US regulatory and industry consideration of the 0.2 mg/kg level as a voluntary monitoring target.

## Methods

Risk-assessment framework with hazard identification, dose–response, exposure assessment, risk characterization, and risk management. Average daily dose (ADD) computed per source and age in months from concentration, intake volume, and body weight; chronic daily intake (CDI) computed as the mean ADD across 4–24 months; lifetime average daily dose (LADD) computed assuming exposure occurs only during 4–24 months distributed over a 70-year (25,550-day) lifetime. Exposure factors for body weight and food and water intake were drawn from the US EPA Child-Specific Exposure Factors Handbook and Fox et al. 2006; ages were stratified into 4–5, 6–8, 9–11, 12–14, 15–18, and 19–24 months. One fluid ounce of reconstituted formula was assumed equivalent to 4.3 g of dry powder; one tablespoon of dry rice cereal was assumed 4.6 g and one cup 73.6 g, based on weighing a popular US-market product. Infants were assumed to begin rice-cereal consumption at four months and hot-rice-cereal consumption between 12 and 24 months. Hazard quotients were computed against ATSDR Minimal Risk Levels: MRL_acute 5.0 × 10⁻³ mg/kg/day and MRL_chronic 3.0 × 10⁻⁴ mg/kg/day (the chronic MRL equals the US EPA Reference Dose for iAs). Incremental lifetime cancer risk was computed using a cancer slope factor of 1.5 (mg/kg/day)⁻¹. Monte Carlo simulations were run one million times per computation in Crystal Ball software (Oracle, Redwood Shores, CA). Concentration inputs are drawn from FDA market-survey data and published literature rather than independently measured samples; evidence tier B reflects the modeled-input basis of the risk characterization.

## Implications

The study estimates that rice cereal contributes roughly 55% of cumulative iAs exposure for US infants and toddlers ages 4–24 months at the median, with other infant solid foods (19%) and drinking water (18%) the next largest contributors and infant formula the smallest (9%). Modeled chronic hazard quotients for rice cereal alone exceed 1.0 at and above the simulated 50th percentile, and the computed acute MCL (0.4 mg/kg) together with the negative chronic MCL solution bracket the FAO/WHO Codex proposed maximum level of 0.2 mg/kg for iAs in polished rice. The 63% iAs fraction in rice cereal and the per-source intake-share decomposition are inputs that downstream analyses on [[products/baby-cereals-dry-rice-based]] and [[metals/arsenic]] can carry forward.

## Verification notes

Enhanced 2026-06-08 (Claude session) from the 2026-05-12 revision after re-reading the MDPI PDF in full (10 pages, including Tables 1–4 and Figure 1). Changes:

- Added Table 4 hazard-quotient, ILCR, and computed-MCL values that were absent from the prior page (HQ_acute and HQ_chronic at the 25th, 50th, and 75th percentiles for both rice cereal alone and total sources; ILCR at all three percentiles; MCL_rc,acute and MCL_rc,chronic with the paper's MCL_chronic-set-to-zero convention).
- Added the source-contribution breakdown (rice cereal 55%, other infant solid food 19%, drinking water 18%, infant formula 9%) from §3 Results.
- Added the FAO/WHO Codex 0.2 mg/kg comparison and the paper's voluntary-monitoring recommendation from §4 Discussion.
- Added the drinking-water and other-infant-solid-food Monte Carlo input distributions from Table 1, which were not previously transcribed.
- Removed a units-conversion error in the prior page that paraphrased the Table 1 infant-formula concentration input (7.48 × 10⁻⁶ mg/L) as "approximately 7.5 µg/L reconstituted." 7.48 × 10⁻⁶ mg/L converts to approximately 0.0075 µg/L (7.5 ng/L), not 7.5 µg/L. The Table 1 value is now transcribed as-stated without editorial re-conversion. There is a paper-internal inconsistency: Table 1 gives the infant-formula iAs input as 7.48 × 10⁻⁶ mg/L, but Table 3 reports ADD_if at the 50th percentile of approximately 1.0 × 10⁻⁴ mg/kg/day for ages 4–18 months, which back-solves to in-product concentrations roughly three orders of magnitude higher than Table 1's stated input. The paper does not address this, and the discrepancy is preserved here for downstream verification rather than silently corrected.
- Removed the legacy "## Wiki pages updated on ingest" heading per current schema convention (Part 5b: routing is system-maintained from frontmatter, not session-maintained in body).
- Preserved cite_key, raw_handle (FM_4661673 Marker handle is the canonical ingest source; the duplicate PDF at raw/Manual Fetch Discovery/shibata2016arsenic-rice-cereal-dietary-infants.pdf was auto-fetched by the discover skill and triggered this merge-enhance pass), raw_path, license, access_url. No frontmatter slug changes.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [5c2ca53f1](https://github.com/paleofoundation/heavymetalindex/commit/5c2ca53f1) | 2026-06-08 | major | 1 section added and 1 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [1e477bf45](https://github.com/paleofoundation/heavymetalindex/commit/1e477bf45) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
