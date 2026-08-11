---
cite_key: unknown2016-risk-arsenic-rice-cereal
raw_handle: FM_4847023
source_type: peer-reviewed-journal
title: "Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S."
authors:
  - Shibata, Tomoyuki
  - Meng, Can
  - Umoren, Josephine
  - West, Heidi
year: 2016
publication: "International Journal of Environmental Research and Public Health"
volume: "13"
issue: null
article: "361"
pages: null
license: "CC-BY"
no_doi_assigned: true
products:
  - infant-rice-cereal
  - infant-formula
  - infant-solid-foods-mixed
ingredients:
  - rice
  - rice-cereal
  - cow-milk-infant-formula
  - soy-infant-formula
  - fruits
  - vegetables
  - meats
  - water
matrices:
  - infant-food-powder
  - infant-food-rtf
  - drinking-water
  - solid-food
metals:
  - iAs
jurisdictions:
  - US
sample_size: 1000000
sample_description: "Monte Carlo exposure simulations (1 million iterations) for infants and toddlers 4-24 months old in the U.S., modeled on FDA retail rice cereal survey data (n=116 samples) and dietary intake patterns"
evidence_tier: A
status: published
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-20
---

## Key Numbers

**Inorganic Arsenic Concentrations in Rice Cereal (FDA survey)**
- Range: 0.023–0.283 mg/kg iAs
- Mean: ~0.100 mg/kg iAs
- Rice cereal accounted for approximately 55% of total iAs exposure in infants 4–24 months

**Exposure Assessment (Monte Carlo, n=1,000,000 iterations)**

Infants 4–6 months:
- Mean daily intake: 0.46 μg/kg/day iAs
- 95th percentile: 1.32 μg/kg/day iAs

Infants 7–12 months:
- Mean daily intake: 0.32 μg/kg/day iAs
- 95th percentile: 0.85 μg/kg/day iAs

Toddlers 13–24 months:
- Mean daily intake: 0.28 μg/kg/day iAs
- 95th percentile: 0.75 μg/kg/day iAs

**Hazard Quotient for Chronic Non-Carcinogenic Risk**
- ATSDR chronic MRL: 3.0 × 10⁻⁴ mg/kg/day
- HQ exceeded 1.0 at 50th percentile for 4–6 month-olds
- HQ exceeded 1.0 at 75th percentile for 7–12 month-olds
- HQ remained below 1.0 for 13–24 month-olds at all percentiles

**Incremental Lifetime Cancer Risk (ILCR)**
- EPA cancer slope factor: 1.5 (mg/kg/day)⁻¹
- 4–6 month-olds: ILCR 10⁻⁶ to 10⁻⁵
- 7–12 month-olds: ILCR 10⁻⁶ to 10⁻⁵
- 13–24 month-olds: ILCR below 10⁻⁶ at mean, 10⁻⁶ to 10⁻⁵ at 95th percentile

**Regulatory Reference Values and Proposed MCL**
- ATSDR acute MRL: 5.0 × 10⁻³ mg/kg/day
- ATSDR chronic MRL: 3.0 × 10⁻⁴ mg/kg/day
- EPA oral RfD: 3.0 × 10⁻⁴ mg/kg/day
- FAO/WHO proposed maximum level for polished rice: 0.2 mg/kg
- Derived MCL (chronic exposure at ATSDR MRL, 4–6 month infants): 0.0 mg/kg (practical limit)
- Derived MCL (acute exposure at ATSDR MRL): 0.4 mg/kg

## Methods

**Exposure Assessment Framework**
- Hazard identification: iAs classified as Group 1 carcinogen; dose-response derived from epidemiological and animal studies
- Exposure pathways: rice cereal (primary), other solid foods, drinking water, infant formula
- Body weight and dietary intake: age-stratified (4–6, 7–12, 13–24 months); assumed exclusive rice-cereal consumption for 4–6 month cohort in sensitivity analysis
- Probabilistic modeling: Monte Carlo simulation (1 million iterations) to characterize exposure distribution and percentiles

**Risk Characterization**
- Non-carcinogenic risk: Hazard Quotient (HQ) = exposure ÷ ATSDR MRL; HQ > 1.0 indicates potential for adverse effects
- Carcinogenic risk: ILCR calculated as mean daily intake × cancer slope factor; risk interpreted relative to EPA benchmark of 10⁻⁶

**Data Sources**
- FDA 2012–2013 retail rice cereal survey: 116 samples analyzed for total and inorganic arsenic
- NHANES dietary intake data: age-specific consumption patterns and body weight distributions
- Drinking water: USDA data for iAs in municipal and private well supplies

## Wiki Pages Updated on Ingest

- `metals/arsenic.md` — inorganic arsenic toxicology, dose-response, regulatory values
- `ingredients/rice.md` — iAs contamination in rice and rice cereal; exposure in infant populations
- `ingredients/rice-cereal.md` — if separate page exists, update iAs `contamination_profile`
- `products/infant-rice-cereal.md` — iAs exposure contribution; regulatory context
- `products/infant-formula-cow-milk.md` — iAs as background exposure source in mixed-feeding scenarios
- `products/infant-formula-soy.md` — iAs as background exposure source
- `products/infant-solid-foods.md` — category-level iAs profile; rice cereal dominance
- `regulations/us-fda-closer-to-zero.md` — iAs baseline for infant foods; gap between current survey mean and precautionary levels

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [27d26bb45](https://github.com/paleofoundation/heavymetalindex/commit/27d26bb45) | 2026-05-20 | major | Contamination-profile values revised; 3 sections added; narrative text revised |
<!-- END: hmi-page-history -->
