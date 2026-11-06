---
type: source
cite_key: li2026-nanning-rice-heavy-metals-dietary-risk
title: "Dietary risk analysis of heavy metal and metalloid pollution in rice: case study of Nanning City in China"
authors: [Li P, Li S, Zhang J, Cen L, Li Q, Li H]
year: 2026
publication: "Frontiers in Public Health, 14: 1781196"
doi: 10.3389/fpubh.2026.1781196
access_url: https://doi.org/10.3389/fpubh.2026.1781196
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-2
public_evidence_label: "Food contamination data"
review_state: machine_extracted
claim_classes: [food_contamination_measurement, dietary_intake_estimate, health_risk_index, probabilistic_assessment]
raw_path: raw/evidence/HMI-TOPIC-0024/10.3389_fpubh.2026.1781196.pdf
sha256: 54f69ccc64c0b4172bfdaab76f6271f692e8fa607fcfbfc71a9d701eaae1eb12
access_date: 2026-11-04
license: "CC BY"
metals: [Cd, Pb, tHg, iAs]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice, cooked-rice]
jurisdictions: [CN]
superseded_by: null
wiki_doi: null
sampling_locations: [Nanning City, Guangxi, China]
sampling_year_range: [2014, 2020]
updated: 2026-11-06
---

# Li et al. 2026: Dietary risk from heavy metals and metalloids in rice, Nanning City, China

## Summary

This study evaluated heavy metal and metalloid contamination (cadmium, lead, mercury, and inorganic arsenic) and associated health risks from locally grown rice in Nanning City, Guangxi Province, China. A total of 1,844 rice and paddy samples were collected across the period 2014 to 2020. Cadmium was the predominant contaminant, with a maximum concentration of 1.28 mg/kg (6.4 times the national limit of 0.2 mg/kg) and an exceedance rate of 16.36% in recent samples (2019 to 2020). Deterministic assessment (n = 538 recent samples) and Monte Carlo probabilistic assessment (5,000 iterations) were used for noncarcinogenic and carcinogenic risk quantification. The combined total hazard index (HI) for all four elements was 1.13 (greater than 1), indicating a potential noncarcinogenic health concern.

## Key numbers

| Measure | Value | Units | Matrix | Source location |
| --- | --- | --- | --- | --- |
| Samples analyzed (all years) | 1,844 | count | Rice and paddy | Methods |
| Samples analyzed (2019 to 2020) | 538 | count | Rice and paddy | Methods |
| Max Cd concentration | 1.28 | mg/kg | Rice | Abstract |
| Cd exceedance rate (national limit) | 16.36% | percentage | Recent samples | Abstract |
| Mean Pb concentration | 0.073 ± 0.187 | mg/kg | Rice | Table 2 |
| Mean Cd concentration | 0.124 ± 0.137 | mg/kg | Rice | Table 2 |
| Mean iAs concentration | 0.168 ± 0.087 | mg/kg | Rice | Table 2 |
| Mean Hg concentration | 0.008 ± 0.006 | mg/kg | Rice | Table 2 |
| Pb detection rate | 53.90% | percentage | 538 samples | Table 2 |
| Cd detection rate | 99.07% | percentage | 538 samples | Table 2 |
| iAs detection rate | 24.91% | percentage | 538 samples | Table 2 |
| Hg detection rate | 99.81% | percentage | 538 samples | Table 2 |
| Total hazard index (HI), all 4 elements | 1.13 | dimensionless | Nanning adult rice farmers | Results section 3.3 |
| Pb THQ | 0.104 | dimensionless | Local adult diet | Results section 3.3 |
| Cd THQ | 0.898 | dimensionless | Local adult diet | Results section 3.3 |
| iAs THQ | 0.036 | dimensionless | Local adult diet | Results section 3.3 |
| Hg THQ | 0.091 | dimensionless | Local adult diet | Results section 3.3 |
| Cumulative carcinogenic risk (CCR) | 1.75 × 10^-5 | dimensionless | Local adult diet | Results section 3.3 |
| iAs carcinogenic risk (CR) | 1.63 × 10^-5 | dimensionless | Local adult diet | Results section 3.3 |
| Monte Carlo mean THQ, Cd | 0.610 | dimensionless | Simulated population | Results section 3.3 |
| Probability of THQ greater than 1, Cd | 15.8% | percentage | Monte Carlo simulation | Results section 3.3 |

Dietary survey: 300 households surveyed, 524 participants, mean rice intake 227.8 g/person/day (median 231.56 g/person/day). LOD: Pb less than 0.050 mg/kg, Cd less than 0.0030 mg/kg, Hg less than 0.010 mg/kg, iAs greater than 0.2 mg/kg. National limit for Cd in rice (GB 2762-2017): 0.2 mg/kg.

## Methods (brief)

Rice and paddy samples collected from 15 administrative subdivisions including suburban and rural areas of Nanning City, 2014 to 2020. Cd, Pb, and iAs by ICP-MS (0.5 g microwave digestion with concentrated HNO3). Mercury by direct mercury analyzer (DMA-80, Milestone). iAs by HPLC-AFS. Quality control included reagent blanks, duplicate analyses, certified reference materials, and spike recoveries; correlation coefficients R2 greater than 0.999. Probabilistic assessment: Monte Carlo simulation, 5,000 iterations, Latin Hypercube Sampling, lognormal distribution selected by AIC for cadmium. Rice consumption modeled as triangular distribution (Triangular 121.63, 231.56, 308.42 g/person/day).

## Evidence fitness

This is one of the larger single-city rice monitoring datasets from southern China, covering both a long time span (2014 to 2020) and a probabilistic risk layer, which makes it more informative than deterministic-only studies. The cadmium finding, with a maximum of 6.4 times the national limit and a 16.36% exceedance rate, is a food safety signal for rice from cadmium-enriched soils in Guangxi. The combined HI of 1.13 suggests a marginal but non-negligible noncarcinogenic concern when all four analytes are summed, with cadmium contributing most. The CCR of 1.75 × 10^-5 (approximately 17.5 cases per million lifetime) merits attention.

## Limitations

Single city (Nanning), not representative of national Chinese rice supply. The iAs exceedance limit (0.2 mg/kg national standard) may differ from international standards (Codex 0.2 mg/kg polished rice). Half-LOD substitution applied for censored values, which may underestimate true population distribution tails. Rice consumption data from 2010 to 2012 dietary surveys; actual current intakes may differ.

## Related evidence

- [[health/dietary-heavy-metal-exposure]]
- [[ingredients/rice]]
- [[metals/cadmium]]
- [[metals/inorganic-arsenic]]
- [[metals/lead]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| (see git) | 2026-11-06 | major | Initial ingest, Evidence Fill HMI-TOPIC-0024 |
<!-- END: hmi-page-history -->
