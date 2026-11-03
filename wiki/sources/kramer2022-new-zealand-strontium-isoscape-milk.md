---
type: source
cite_key: kramer2022-new-zealand-strontium-isoscape-milk
title: "A bioavailable strontium (87Sr/86Sr) isoscape for Aotearoa New Zealand: Implications for food forensics and biosecurity"
authors: [Kramer RT, Kinaston RL, Holder PW, Armstrong KF, King CL, Sipple WDK, Martin AP, Pradel G, Turnbull RE, Rogers KM, Reid M, Barr D, Wijenayake KG, Buckley HR, Stirling CH, Bataille CP]
year: 2022
publication: "PLoS ONE 17(3): e0264458"
doi: 10.1371/journal.pone.0264458
access_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8926269/
retrieval_date: "2026-11-03"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: /Users/kmfp/hmi-evidence-deposits/deposits/HMI-METAL-STRONTIUM-1/10.1371_journal.pone.0264458.pdf
raw_sha256: "feb9c3e45e9188f4d56176ac89d08d77a57ee2bf41e85f8eaff540a13b416fb6"
metals: [Sr]
ingredients: ["[[ingredients/milk-and-dairy]]"]
products: []
matrices: [plants, topsoil, cow milk]
jurisdictions: [NZ]
near_duplicates: []
sample_n: 33
sample_population: "Plant, topsoil and animal substrate samples across New Zealand; cow milk from 33 farms used for validation"
evidence_fitness:
  supports: [food-origin-verification-by-strontium-isotopes, milk-provenance]
  does_not_support: [strontium-concentrations-in-milk, dietary-exposure, toxicity]
audience: [regulator, researcher, food-safety]
sources: 0
updated: 2026-11-03
ingest: HMI-METAL-INGEST-1
---

# Kramer et al. 2022: A strontium isotope map for New Zealand tested on cow milk

This study built a machine-learning map of bioavailable strontium isotope ratios for New Zealand from plant and soil samples and geospatial data, then tested whether it could recover the farm origin of cow milk. Predictions placed milk close to its true origin in most cases, supporting strontium isotopes as a food-forensics tool.

## Key numbers

- The isoscape explained 53 percent of variation (R squared 0.53, RMSE 0.00098), driven mainly by geology, soil pH and aerosol (dust and sea salt) inputs (Abstract, p. 1).
- For 33 cow milk samples the closest predictions averaged 7.05 km from the true place of origin (Abstract, p. 1; Results, p. 16).
- All but one milk sample fell within the 95 percent confidence interval of the model (Results, p. 16).

## Methods (brief)

Plants (n = 185 collected) and GNS topsoils (n = 71) plus published samples were measured for bioavailable strontium isotope ratios by multi-collector ICP-MS or TIMS; a random forest model with geospatial predictors produced the isoscape; milk ratios were assigned to origin by maximum likelihood.

## Evidence fitness

Supports use of strontium isotope ratios to check the geographic origin of milk and other foods. It reports ratios, not strontium concentrations, and does not support exposure or toxicity statements.

## Limitations

Milk values near the common isotope ratio of 0.708 were hard to assign. Sampling coverage was uneven. Funding came from public research grants and contracts; the authors declare no competing interests.

## Related evidence

- [[metals/strontium]]
- [[ingredients/milk-and-dairy]]
