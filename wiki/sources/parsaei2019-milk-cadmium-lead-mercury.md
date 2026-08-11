---
type: source
raw_handle: AUTO_ing-human-milk-thg-2019-10-15244-pjoes-94809
cite_key: parsaei2019-milk-cadmium-lead-mercury
title: "Concentrations of Cadmium, Lead and Mercury in Raw Bovine, Ovine, Caprine, Buffalo and Camel Milk"
authors: ["Parsaei P", "Rahimi E", "Shakerian A"]
year: 2019
publication: "Polish Journal of Environmental Studies"
doi: 10.15244/pjoes/94809
source_type: peer-reviewed
evidence_tier: A
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-human-milk-thg_2019_10-15244-pjoes-94809.pdf"
metals: [Cd, Pb, tHg]
ingredients: ["[[ingredients/milk-and-dairy]]"]
products: ["[[products/category-5-beverages]]"]
matrices: [raw-milk]
jurisdictions: [IR]
near_duplicates: []
sample_n: 1100
sample_population: "1100 bovine, ovine, caprine, buffalo, and camel milk samples"
updated: 2026-05-29
---
# Parsaei et al. 2019 - Cadmium, lead, and mercury in raw milk

## Overview

Parsaei and colleagues measured cadmium, lead, and mercury in 1100 raw milk samples from multiple animal species. The study is routeable for milk and dairy occurrence evidence because it reports ppb concentrations by species, age, and season. It found the highest concentrations in raw bovine milk and seasonal elevation in spring.

## Key numbers

- Sample frame: 1100 raw milk samples collected from dairy farms in Isfahan Province, Iran between January 2017 and January 2018, comprising bovine (n=300), ovine (n=250), caprine (n=250), buffalo (n=150), and camel (n=150) milk from 2-5-year-old animals.
- Overall mean concentrations: Cd 3.62 +/- 0.35 ppb, Pb 11.73 +/- 1.09 ppb, and Hg 4.35 +/- 0.42 ppb.
- Overall ranges: Cd 0.06-14.03 ppb, Pb 0.12-33.62 ppb, and Hg 1.03-10.38 ppb.
- Raw bovine milk had the highest reported means: Cd 4.05 +/- 0.38 ppb, Pb 12.36 +/- 1.21 ppb, and Hg 5.76 +/- 0.53 ppb. Raw camel milk had the lowest: Cd 1.22 +/- 0.11 ppb, Pb 3.14 +/- 0.26 ppb, and Hg 2.36 +/- 0.21 ppb.
- Animals at least five years old showed roughly two-fold elevations over the overall species means. Bovine 5≤ animals: Cd 10.33 +/- 1.26 ppb, Pb 23.72 +/- 2.29 ppb, Hg 7.14 +/- 0.68 ppb. Buffalo 5≤ animals: Cd 12.02 +/- 1.04 ppb, Pb 28.61 +/- 1.02 ppb, Hg 8.24 +/- 0.65 ppb (Table 2).
- Spring samples were the highest across all species. Buffalo spring: Cd 12.00 +/- 1.01, Pb 25.59 +/- 2.12, Hg 8.11 +/- 0.60 ppb (Table 3).
- The authors report that overall mean Cd and Hg concentrations were below the standard allowed limits they tabulated, while overall mean Pb concentrations exceeded those limits.

## Methods (brief)

Mercury was determined by cold vapor atomic absorption spectrophotometry using a FIAS 4100 flow injection mercury/hydride analyzer (Perkin Elmer, Foster City, CA, USA) at 253.7 nm. Cadmium and lead were determined by graphite furnace atomic absorption spectrophotometry on a Perkin Elmer 4100 with pyrolytic platform graphite tubes (AS-40), using ascorbic acid and palladium for matrix modification. Accuracy was verified against reference material BCR No 150. Mean recoveries were 88% for Hg, 93% for Cd, and 96% for Pb. Reported detection limits (3xSD) were 0.11, 0.041, and 0.039 mg/L for Hg, Cd, and Pb respectively; see Verification notes regarding the apparent unit inconsistency between these LOD values and the reported sample minima.

## Implications

Certification: Supports raw milk and dairy context, especially seasonal and species variance.

Courses: Useful for teaching seasonal variance and animal-species differences in dairy metals.

App: Can inform dairy ingredient priors with geography and raw-milk caveats.

## Wiki pages this source may touch

- [[products/category-5-beverages]]
- [[ingredients/milk-and-dairy]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury-total]]

## Verification notes

Mercury is total mercury. The source should not be used as methylmercury evidence.

The raw_handle was minted as "AUTO_ing-human-milk-thg-..." by the fetch pipeline, but this paper contains zero human milk data — all 1100 samples are livestock milk (bovine, ovine, caprine, buffalo, camel). The handle is a misnaming artifact of the upstream fetch query; the wiki page is correctly classified as a livestock raw-milk source. Flagged for handle re-mint at the next fetch-pipeline cleanup.

The source reports detection limits in mg/L (0.11 mg/L Hg, 0.041 mg/L Cd, 0.039 mg/L Pb on p. 4312), but the reported sample minima (e.g., Cd 0.06 ppb, Pb 0.12 ppb, Hg 1.03 ppb) are several orders of magnitude below those LODs. Combined with the "values below detection limit set to half that level" sentence in Statistical Analysis, this strongly indicates the source intends µg/L (i.e., 0.11, 0.041, 0.039 ppb LODs), with mg/L printed in error. Downstream synthesis should treat the LODs as µg/L unless contradictory evidence appears.

Source Table 4 ("Standard allowed limit concentrations") prints Pb 0.01 and Hg 0.5 with the column header "Standard allowed limit (ppb)." These figures are clearly unit-confused relative to actual regulatory limits (e.g., Codex/EU lead in raw milk is in the 0.02 mg/kg = 20 ppb range, not 0.01 ppb). Do NOT pull regulatory ceilings from this source's Table 4; consult primary regulatory texts on the regulation pages instead.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [f099999ed](https://github.com/paleofoundation/heavymetalindex/commit/f099999ed) | 2026-06-09 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
