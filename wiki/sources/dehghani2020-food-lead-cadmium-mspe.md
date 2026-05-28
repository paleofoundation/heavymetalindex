---
type: source
raw_handle: auto-fetched
cite_key: dehghani2020-food-lead-cadmium-mspe
title: "Magnetic Multi-Walled Carbon Nanotubes Modified with Polythiophene as a Sorbent for Simultaneous Solid Phase Microextraction of Lead and Cadmium from Water and Food Samples"
authors: ["Dehghani Zahra", "Dadfarnia Shayessteh", "Haji Shabani Ali Mohammad", "Ehrampoush Mohammad Hassan"]
year: 2020
publication: "Analytical and Bioanalytical Chemistry Research"
doi: 10.22036/abcr.2020.221731.1465
source_type: peer-reviewed
evidence_tier: B
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/ingested/ing-rice-milk-cd_2020_10-22036-abcr-2020-221731-1465.pdf"
raw_sha256: d179993017498c0a8bcd89530f3f307fd637bac70a09f3ea0c159d756c72e396
near_duplicates:
  - "raw/manual-fetch/seasonal-geographic-variance/ingested/ing-rice-milk-pb_2020_10-22036-abcr-2020-221731-1465.pdf"
  - "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-rice-milk-pb_2020_10-22036-abcr-2020-221731-1465.pdf"
metals: [Pb, Cd]
ingredients: ["[[ingredients/tea]]", "[[ingredients/rice]]", "[[ingredients/infant-formula-powder]]", "[[ingredients/milk-and-dairy]]"]
products: ["[[products/tea-infusions]]", "[[products/rice-bulk-grain]]", "[[products/infant-formula-powder]]"]
matrices: [tea, rice, infant-formula, milk]
jurisdictions: [IR]
sample_n: 5
sample_population: "Black tea, rice, infant dry formula milk, and cow milk samples purchased in Yazd, Iran"
updated: 2026-05-28
---

# Dehghani et al. 2020 - Lead and cadmium in food samples using magnetic SPE

This analytical-method paper applied a magnetic solid-phase microextraction method to water and food samples, including black tea, rice, infant dry formula milk, and cow milk. It is routeable as occurrence context because Table 4 reports unspiked sample concentrations for Pb and Cd.

## Key numbers

- Table 4 reports black tea at Pb 5.62 ug/g (RSD 0.89%) and Cd 0.53 ug/g (RSD 1.88%).
- Rice was non-detect for Pb and had Cd 0.45 ug/g (RSD 2.20%).
- One infant dry formula milk sample had Pb 1.35 ug/g (RSD 2.22%) and Cd 0.03 ug/g (RSD 3.30%).
- A second infant dry formula milk sample had Pb 3.86 ug/g (RSD 2.07%) and Cd 0.02 ug/g (RSD 3.57%).
- Cow milk was reported on a liquid basis: Pb 60.68 ug/L (RSD 2.47%) and Cd 2.55 ug/L (RSD 3.92%).
- Method LODs were 0.54 ug/L for Pb and 0.03 ug/L for Cd; LOQs were 1.82 ug/L for Pb and 0.11 ug/L for Cd.

## Methods

The paper developed polythiophene-coated magnetic multi-walled carbon nanotubes for magnetic solid-phase microextraction, followed by flame atomic absorption spectrometry. Food samples were prepared by acid digestion before extraction and measurement.

## Implications

The source supports method-application occurrence context for Pb and Cd in tea, rice, infant formula powder, and cow milk. Because it is primarily an analytical-method paper with small sample coverage, it should not be treated as a market survey.

## Wiki pages this source may touch

- [[ingredients/tea]]
- [[ingredients/rice]]
- [[ingredients/infant-formula-powder]]
- [[ingredients/milk-and-dairy]]
- [[products/tea-infusions]]
- [[products/rice-bulk-grain]]
- [[products/infant-formula-powder]]
- [[metals/lead]]
- [[metals/cadmium]]

## Verification notes

The source table identifies two infant formula samples by company footnotes; those identifiers were not transcribed. Food solid values are reported as ug/g, while cow milk is reported as ug/L. Table 4 footnote states the values are averages with relative standard deviation of three determinations, so the parenthetical percentages are RSD values rather than concentration standard deviations.

The discovery daemon auto-fetched this paper twice — once against the rice/milk Cd gap (filename suffix `-cd_`) and once against the rice/milk Pb gap (filename suffix `-pb_`). Both files are byte-identical (SHA256 above) and both filenames are recorded in `near_duplicates`. The `-cd_` filename is the primary `raw_path` since it was ingested first; the `-pb_` filename is its duplicate and routes to the same source page.
