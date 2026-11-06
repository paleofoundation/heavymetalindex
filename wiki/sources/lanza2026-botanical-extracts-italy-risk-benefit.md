---
type: source
cite_key: lanza2026-botanical-extracts-italy-risk-benefit
title: "Essential and toxic elements intake from botanical extracts: a probabilistic risk-benefit evaluation within the Italian dietary context"
authors: [Lanza GT, Varra MO, Husacova L, Piroutkova M, Patocka J, Zanardi E]
year: 2026
publication: "Journal of the Science of Food and Agriculture"
doi: 10.1002/jsfa.70494
no_doi_assigned: false
access_url: "https://doi.org/10.1002/jsfa.70494"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/deposits/HMI-TOPIC-0021/10.1002_jsfa.70494.pdf"
raw_sha256: "90565bf1125fceaa2a203802c6e47b11cf6fd973a69c5f2883f752bdc3fb23e1"
near_duplicates: []
metals: [As, Al, Ni, Pb]
ingredients: ["[[ingredients/herbal-botanicals]]"]
products: []
matrices: [botanical-extract, supplement]
jurisdictions: [IT, EU]
sample_n: 25
sample_population: "25 commercial botanical plant extracts from multiple producers and species; consumed by Italian adults (18-64 years); sampling location Italy"
wiki_doi: null
sampling_locations: []
sampling_year_range: "2026"
updated: 2026-11-06
---

# Lanza et al. 2026: Essential and toxic elements in botanical extracts: probabilistic risk-benefit evaluation, Italy

## Overview

Lanza and colleagues quantitatively assessed exposure levels and potential health impacts of chronic intake of ten essential (calcium, potassium, phosphorus, iron, magnesium, zinc) and potentially toxic (aluminium, arsenic, nickel, lead) elements through the consumption of botanical extracts among Italian adults (18-64 years). Twenty-five commercial botanical products (n = 25) from multiple plant species were analysed. A probabilistic risk-benefit framework with 100,000 Monte Carlo iterations was applied. Results showed that exposure to inorganic arsenic raised health concerns because margin of exposure (MOE) values for skin cancer ranged 0.05-80.50 (5th to 95th percentile), with the MOE falling below the critical threshold of 10 across most of the exposure distribution. Lead and nickel and zinc showed no significant non-carcinogenic risks from botanical consumption alone, but cumulative exposure including the baseline diet produced non-carcinogenic concerns (mean hazard index > 1) for nickel, aluminium, and lead.

## Key numbers

- Sample set: 25 commercial botanical plant products from multiple species and producers sold in Italy (Table 1 of source lists species including Garcinia mangostana, Hippophae rhamnoides, Ligusticum acutifolium, Camellia sinensis, Gingko biloba, Taraxacum officinale, Gymnema sylvestre, Cordyceps sinensis extract, Paullinia cupana, Gurana extract and others).
- Italian adult baseline dietary intakes (mean +/- SD, from 2012-2014 National Total Diet Study and Italian National Food Consumption Survey INRAN-SCAI 2005-06): inorganic arsenic 0.081 +/- 0.030 micrograms/kg body weight/day; nickel 1.55 +/- 0.72 micrograms/kg body weight/day; aluminium 58.2 +/- 25.0 micrograms/kg body weight/day; lead 0.160 +/- 0.081 micrograms/kg body weight/day.
- Reference doses/health-based guidance values (HBGV) used: aluminium EFSA TDI 1 mg/kg body weight/week; nickel EFSA TDI 13 micrograms/kg body weight/day; arsenic BMDL skin cancer 0.06 micrograms/kg body weight/day, BMDL nephrotoxicity 0.63 micrograms/kg body weight/day; lead EFSA BMDL cardiovascular 1.5 micrograms/kg body weight/day, BMDL nephrotoxicity 0.63 micrograms/kg body weight/day (Table 3).
- MOE for inorganic arsenic from botanical extracts (skin cancer endpoint): 5th-95th percentile range 0.05 to 80.50. All values below 10 at the 5th percentile, rising above 10 only at higher percentiles. Authors interpret MOE < 10 as "health concern" for iAs from botanical extracts.
- MOE for lead from botanical extracts: values fell below the critical threshold of 10 for cardiovascular (BMDL 1.5 micrograms/kg body weight/day) and nephrotoxicity (BMDL 0.63) endpoints at lower percentiles.
- Nickel and zinc: no significant non-carcinogenic risks from botanical consumption alone (cumulative %TDI below 100% from botanicals alone). However, cumulative exposure including baseline diet produced non-carcinogenic concerns.
- Lead EU food supplement ML: 3.0 mg/kg applies to food supplements (Table 3 reference); none of the analysed botanical extract samples exceeded this threshold.
- Aluminium: WHO TDI 1 mg/kg body weight/week used. EWI (estimated weekly intake) for aluminium from botanicals calculated and compared with this TWI.
- Probabilistic simulation: Monte Carlo with 100,000 iterations using R 'stats' package; concentration distributions fitted to lognormal (selected on AIC). Italian adult dietary consumption data from EFSA Comprehensive European Food Consumption Database.
- Sensitivity analysis on HQ values: PHE concentration was the most influential variable; ingestion rate had a smaller but notable effect.

## Methods (brief)

25 commercial botanical extract products were purchased from Italian producers and suppliers. Product composition was intentionally diverse, covering multiple plant families and geographical origins including products derived from Europe and China. The elemental composition was measured in laboratories; full analytical method details (instrument type, digestion procedure, LODs/LOQs) are described in a companion or previous publication referenced in the methods as Varra et al. (unpublished citation for Italian total diet arsenic data) and Cubadda F. (2025, unpublished data for lead). Distribution fitting of elemental concentrations used the Akaike Information Criterion (AIC). Daily intakes of elements under three formulated scenarios were computed: (i) baseline dietary intake from the total diet; (ii) additional chronic dietary intake from botanical extracts alone; (iii) total exposure as sum of baseline and botanical extract intakes. The reference scenario characterised average daily intakes of the studied elements among Italian adults. Probabilistic simulation performed in RStudio (version 2024.09.0 + 375, R version 4.3.2).

## Implications

- Certification (HMTc): Botanical extracts and herbal supplements are a category warranting specific heavy metal attention given the MOE findings for inorganic arsenic. The finding that all 25 tested products when considered in combination with baseline diet produced aluminium, lead, and nickel non-carcinogenic concerns (cumulative HI > 1) supports a rationale for tight limits in this product category. For HMTc purposes, botanical extracts as food supplement ingredients would fall under relevant supplement or botanical ingredient categories requiring analyte-specific limits.
- Courses: Demonstrates the risk-benefit analysis framework as applied to food supplements, distinguishing beneficial nutrient intakes (calcium, potassium, magnesium) from potentially hazardous toxic element co-ingestion. The MOE approach for inorganic arsenic and lead, using BMDL values rather than RfD-based HQ, is explicitly illustrated.
- App: Botanical extract contamination data from this source reflect 25 Italian-market products of diverse botanical origin. The wide variability in PHE concentrations among products (Table 4 of source) limits the utility of summary statistics for general contamination profile estimation.
- Microbiome: No microbiome data.

## Related evidence

- [[ingredients/herbal-botanicals]]
- [[metals/arsenic]]
- [[metals/lead]]
- [[metals/aluminium]]
- [[metals/nickel]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
