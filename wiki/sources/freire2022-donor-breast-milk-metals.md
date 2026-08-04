---
type: source
raw_handle: AUTO_ing-human-milk-cd-2021-10-1016-j-ijheh-2021-113914
cite_key: freire2022-donor-breast-milk-metals
title: "Concentrations and determinants of lead, mercury, cadmium, and arsenic in pooled donor breast milk in Spain"
authors: ["Freire C", "Iribarne-Durán L M", "Gil F", "Olmedo P", "Serrano-López L", "Peña-Caballero M", "Hurtado J-A", "Alvarado-González N E", "Fernández M F", "Peinado F M", "Artacho-Cordón F", "Olea N"]
year: 2022
publication: "International Journal of Hygiene and Environmental Health"
doi: 10.1016/j.ijheh.2021.113914
source_type: peer-reviewed
evidence_tier: A
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-human-milk-cd_2021_10-1016-j-ijheh-2021-113914.pdf"
metals: [Pb, tHg, Cd, tAs]
ingredients: ["[[ingredients/breastmilk]]"]
products: []
matrices: [donor-breast-milk]
jurisdictions: [ES]
near_duplicates: []
sample_n: 242
sample_population: "242 pooled breast milk samples from 83 human-milk-bank donors in Spain, 2015-2018"
updated: 2026-05-29
---
# Freire et al. 2022 - Lead, mercury, cadmium, and arsenic in donor breast milk in Spain

## Overview

Freire and colleagues measured lead, mercury, cadmium, and arsenic in pooled donor breast milk from a Spanish human milk bank. The study is routeable for human-milk exposure evidence because it reports detection frequencies and median milk concentrations for 242 pooled samples from 83 donors. It also identifies donor and dietary predictors of metal concentrations.

## Key numbers

- Sample frame: 242 pooled breast milk samples from 83 donors, collected in Spain from 2015 to 2018.
- Detection frequencies: As 97.1%, Hg 81.2%, Pb 50.6%, and Cd 38.0%.
- Median breast milk concentrations: As 1.49 µg/L, Hg 0.26 µg/L, Pb 0.14 µg/L, and Cd <0.04 µg/L.
- Hg was higher in donors with greater intake of fatty fish and meat and lower in samples collected later postpartum.
- Cd detection was associated with university education, fried and canned food intake, and more frequent hand-cream use in the authors' model.

## Methods (brief)

Milk samples were microwave-digested in quartz vessels with HNO3 using an Ethos UP system (Milestone, Shelton, CT, USA) and analyzed by inductively coupled plasma mass spectrometry on an Agilent 8900 triple quadrupole ICP-MS. Quality control used certified reference materials NIST SRM 1640a Trace Elements in Natural Water and ERM-BD151 Skimmed milk powder. Limits of detection were 0.10 µg/L for Pb, 0.05 µg/L for Hg, 0.04 µg/L for Cd, and 0.40 µg/L for As. Values below the LOD were imputed by the LOD divided by the square root of 2. The source reports total As and total Hg, not inorganic arsenic or methylmercury. Predictors of Hg and As concentrations were modeled with mixed-effect linear regression; predictors of Pb and Cd detection (above vs. below LOD) were modeled with mixed-effect logistic regression, with donor ID as a random cluster variable.

## Implications

Certification: This source is human-milk exposure context and should not be pooled with infant formula or cow milk.

Courses: Useful for explaining donor-milk exposure, detection frequency, and dietary predictors.

App: Can support infant feeding exposure context where human milk is represented separately from products.

## Wiki pages this source may touch

- [[ingredients/breastmilk]]
- [[metals/lead]]
- [[metals/mercury-total]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]

## Verification notes

The same DOI was fetched under Cd, tAs, and tHg human-milk gaps. This page is canonical for those duplicate paths. Total Hg must not be substituted for methylmercury.

The `matrices: [donor-breast-milk]` token is a descriptive matrix label distinguishing pooled donor milk-bank samples from individual-mother breast milk. It is preserved here because the distinction is exposure-relevant (donor pooling averages across many donors with screened diets and health status); the routing layer fans this source out via the `ingredients/breastmilk` slug. If the matrices controlled vocabulary is later codified, consider adding `donor-breast-milk` as a sibling of `breastmilk`.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [88f087d20](https://github.com/paleofoundation/heavymetalindex/commit/88f087d20) | 2026-06-09 | minor | Narrative text revised |
| [70ae1ccdf](https://github.com/paleofoundation/heavymetalindex/commit/70ae1ccdf) | 2026-05-30 | major | 1 section added |
<!-- END: hmi-page-history -->
