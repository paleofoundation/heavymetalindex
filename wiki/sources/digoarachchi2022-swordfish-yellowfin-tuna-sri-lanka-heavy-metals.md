---
type: source
raw_handle: auto-fetched
cite_key: digoarachchi2022-swordfish-yellowfin-tuna-sri-lanka-heavy-metals
title: "Determination of Geographical and Seasonal Variations of Heavy Metals in Swordfish (Xiphias gladius) and Yellowfin Tuna (Thunnus albacares)"
authors: ["Digoarachchi DASU", "Walpita CN", "Sandamali JD"]
year: 2022
publication: "International Journal of Current Science Research and Review"
doi: 10.47191/ijcsrr/V5-i7-03
source_type: peer-reviewed
evidence_tier: B
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-swordfish-cd_2022_10-47191-ijcsrr-v5-i7-03.pdf"
metals: ["tHg", "Pb", "tAs", "Cd"]
ingredients: ["[[ingredients/swordfish]]", "[[ingredients/fish]]"]
products: ["[[products/seafood]]", "[[products/fish-marine-predatory]]"]
matrices: ["swordfish", "yellowfin-tuna"]
jurisdictions: ["LK"]
sample_population: "Secondary heavy-metal analysis data for swordfish and yellowfin tuna from Sri Lankan export companies, 2015-2017"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-25
---

# Digoarachchi et al. 2022 - Determination of Geographical and Seasonal Variations of Heavy Metals in Swordfish (Xiphias gladius) and Yellowfin Tuna (Thunnus albacares)

## Overview

This study used secondary export-company testing data to map geographical variation in heavy metals in swordfish and yellowfin tuna associated with the Sri Lankan export fish market.

## Key numbers

Source units are ppm/mg/kg as mapped categories unless otherwise stated.

- Hg accumulated in swordfish: n=302, collected June to September 2017.
- Heavy metals in yellowfin tuna: n=33, collected January 2015 to August 2017.
- Cd, As, and Pb were not detected in the fish samples according to the abstract.
- Mercury was the main accumulated metal; mapped swordfish Hg categories were 0.00-0.60, 0.60-0.80, 0.80-1.00, and 1.00-2.00 ppm.
- The highest mercury accumulation was identified at longitudes 64-70 and latitudes 0-8.

## Methods

The study used secondary heavy-metal analysis data supplied by two unnamed Sri Lankan fish-export companies, with export-company testing conducted once per three months over January 2015 to August 2017. The authors then traced log-sheet waypoints to particular catching vessels and used QGIS to map Hg values against fish species, dividing the catch area into four stations (station 1: 64-70°E, 0-8°N; station 2: 76-80°E, 0-8°N; station 3: 88-92°E, 14-18°N; station 4: 82-90°E, 6-14°N). Mercury map color bins were 0.00-0.60 ppm (blue), 0.60-0.80 (green), 0.80-1.00 (yellow), and 1.00-2.00 (red). The paper does not describe any of the underlying analytical chemistry — no instrument (AAS, ICP-MS, CV-AAS), no limit of detection, no certified reference material, and no digestion or sample-preparation procedure is reported. This limits the analytical defensibility of the non-detect claims for Cd, As, and Pb and of the Hg values themselves.

## Implications

The source is useful for geographic/seasonal swordfish mercury context in the Indian Ocean export fishery off Sri Lanka. It provides per-station exceedance proportions against the 1 ppm and 0.8 ppm thresholds (station 1: 40.33% > 1 ppm, 81.93% > 0.8 ppm; station 2: 9.73% > 1 ppm, 29.55% > 0.8 ppm; station 3: 10.81% > 1 ppm, 72.97% > 0.8 ppm) and seasonal exceedance proportions at station 2 across June, July, August, and September 2017. The Cd, As, and Pb non-detect flag should be cited only with the caveat that the source provides no LOD or analytical method, so non-detect cannot be quantified against any specific instrument floor. The mapped categories are not individual sample values.

## Wiki pages this source may touch

- [[ingredients/swordfish]]
- [[ingredients/fish]]
- [[products/seafood]]
- [[metals/mercury-total]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]
- [[metals/lead]]

## Verification notes

- Source identity checked against DOI 10.47191/ijcsrr/V5-i7-03 and the downloaded PDF.
- The paper misspells lead as "Led" in several places; this page records the analyte as Pb.
- No `ingredients/yellowfin-tuna` slug exists in the current taxonomy; the yellowfin tuna n=33 cohort is captured via the `matrices: yellowfin-tuna` field and via the generic `ingredients/fish` and `products/seafood` plus `products/fish-marine-predatory` routing. If a yellowfin-tuna ingredient page is later created, this source should be added to its routing.
- The Results section describes station 2 (76-80°E, 0-8°N) as containing the "highest capture" of swordfish; this refers to harvest density, not the highest Hg concentration. Station-level exceedance percentages and the paper's own abstract and conclusion identify station 1 (64-70°E, 0-8°N) as the area of highest Hg accumulation.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [f4124a397](https://github.com/paleofoundation/heavymetalindex/commit/f4124a397) | 2026-06-09 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [64af12214](https://github.com/paleofoundation/heavymetalindex/commit/64af12214) | 2026-05-25 | minor | Narrative text revised |
| [4123c6387](https://github.com/paleofoundation/heavymetalindex/commit/4123c6387) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
