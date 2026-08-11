---
type: source
raw_handle: MFK_fsanz-23rd-atds
cite_key: fsanz2011-23rd-australian-total-diet-study
title: "The 23rd Australian Total Diet Study"
authors: [Food Standards Australia New Zealand]
year: 2011
publication: "Food Standards Australia New Zealand"
doi: null
no_doi_assigned: true
access_url: null
source_type: gov-report
evidence_tier: A
license: "copyright-australian-government"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Global Heavy Metal Reports/reports/Australia/FSANZ_23rd_ATDS.pdf"
raw_sha256: "f3f75c8bc0571e5db49ee34529a87c6ae92b48cba91e4dab8a21ed968cb74654"
metals: [Al, tAs, iAs, Cd, Pb, tHg, iHg, MeHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/seafood]]", "[[ingredients/shellfish]]", "[[ingredients/canned-tuna]]", "[[ingredients/chocolate]]", "[[ingredients/honey]]", "[[ingredients/potato-chips]]", "[[ingredients/infant-formula-ingredients]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/canned-fish]]", "[[products/shellfish]]", "[[products/chocolate]]", "[[products/honey]]", "[[products/snacks-crackers-biscuits]]", "[[products/infant-formula-powder]]"]
matrices: [total-diet-study, prepared-as-consumed-foods, seafood, fish, canned-tuna, prawns, infant-formula, chocolate-cake, potato-crisps, honey]
jurisdictions: [AU, NZ]
near_duplicates: []
sample_n: 570
sample_population: "Ninety-two Australian foods and beverages, including tap and bottled water, represented by 570 composite samples; each composite used three primary purchases from a state or territory, sampled in January/February 2008 and June/July 2008."
sampling_locations: ["Australian states and territories"]
sampling_year_range: "2008"
updated: 2026-06-09
---

# FSANZ 2011 - 23rd Australian Total Diet Study

## Overview

Food Standards Australia New Zealand's 23rd Australian Total Diet Study measured contaminants, nutrients, and residues in `92` foods and beverages prepared to a table-ready state. The metals chapter is useful as A-tier prepared-food occurrence and exposure context because it measured total arsenic, inorganic arsenic in selected seafoods, cadmium, lead, total mercury, inorganic mercury, and methylmercury. Seafood speciation is kept distinct: total arsenic is not treated as inorganic arsenic, and total mercury is not treated as methylmercury.

## Key numbers

- Study frame: `570` composite samples from `92` foods and beverages; each composite contained three primary purchased samples from a single state or territory.
- Sampling windows: foods were purchased in `January/February 2008` and `June/July 2008`; all foods were prepared to a table-ready state before analysis.
- Aluminum: the food with the highest median aluminum concentration was chocolate cake with icing at `87.9 mg/kg`.
- Total arsenic: seafood carried the highest total-arsenic concentrations, with median total arsenic in seafood between `0.71` and `2.5 mg/kg`.
- Inorganic arsenic: battered fish fillets, frozen fish portions, prawns, and canned tuna were analysed for inorganic arsenic; there were no inorganic-arsenic detections in those sampled seafoods at an LOR of `<0.05 mg/kg`.
- Total-arsenic exposure: estimated 90th-percentile exposures were `1.0` to `2.8 µg/kg bw/day` with non-detects assigned zero, and `1.2-3.2 µg/kg bw/day` with non-detects assigned the LOR.
- Cadmium: the food with the highest median cadmium concentration was potato crisps at `0.11 mg/kg`; root vegetables such as potatoes contributed `21-27%` of cadmium exposure.
- Lead: the food with the highest median lead concentration was honey at `0.04 mg/kg`; Table 4 reported mean lead exposure of `0.27 µg/kg bw/day` for 2-5 year olds, `0.18 µg/kg bw/day` for 6-12 year olds, `0.12 µg/kg bw/day` for 13-16 year olds, and `0.13 µg/kg bw/day` for adults.
- Lead contributors: water or beverages reconstituted with water contributed `14%` of total lead intake for children aged 2-16 years; infant formula contributed `28%` of total lead exposure for 9-month-old infants.
- Total mercury: mercury was detected in all but three foods; the highest median total-mercury concentration was battered fish fillets at `0.14 mg/kg`.
- Methylmercury: median methylmercury concentrations in seafood ranged from `0.014` to `0.11 mg/kg`, from prawns to battered fish fillets.
- Inorganic mercury: median inorganic-mercury concentrations in seafood ranged from `0.011` to `0.020 mg/kg`, from prawns to frozen fish portions.
- Inorganic-mercury exposure: 90th-percentile dietary exposures were below the `4 µg/kg bw` PTWI for all age groups; the highest 90th-percentile exposure was for 9-month-old infants at `25-40%` of the PTWI.

## Methods (brief)

FSANZ coordinated sampling through Australian state and territory food regulatory agencies. Regional foods such as fresh produce, meats, eggs, bread, wine, and dairy were sampled in four to six capital cities; national foods such as breakfast cereals, tea, coffee, soft drink, and canned fruit were sampled in two capital cities. Aluminum, calcium, iron, and potassium used ICP-AES; arsenic, cadmium, lead, strontium, and vanadium used ICP-MS; and total mercury, methylmercury, and inorganic mercury used ion chromatography with ICP-MS.

## Implications

Certification (HMTc): This source contributes A-tier Australian prepared-food occurrence context for seafood arsenic/mercury speciation, potato-crisp cadmium, honey lead, and aluminum-rich baked goods. The seafood records should not be pooled as iAs or MeHg unless the specific species was measured.

Courses: The report is a strong teaching example for why total arsenic in seafood can be high while inorganic arsenic is below the reporting limit, and why total mercury, inorganic mercury, and methylmercury need separate labels.

App: The source can support Australian-market food-category context for prepared seafood, canned tuna, prawns, honey, potato crisps, infant formula exposure contributions, and chocolate-cake aluminum.

## Wiki pages this source may touch

- [[products/seafood]]
- [[products/fresh-fish]]
- [[products/canned-fish]]
- [[products/shellfish]]
- [[products/honey]]
- [[products/chocolate]]
- [[products/snacks-crackers-biscuits]]
- [[metals/arsenic-total]]
- [[metals/arsenic-inorganic]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury-total]]
- [[metals/mercury-methyl]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/hmi_row_1434.txt`; the study design, analytical methods, and metals sections around aluminum, arsenic, cadmium, lead, and mercury were re-read before writing.
- Identity checks before creation: title phrase, raw handle `MFK_fsanz-23rd-atds`, raw SHA-256 `f3f75c8bc0571e5db49ee34529a87c6ae92b48cba91e4dab8a21ed968cb74654`, and cite key `fsanz2011-23rd-australian-total-diet-study` were searched in `wiki/sources/`; no existing source page was found.
- Units and basis are preserved as printed: food concentrations use `mg/kg`; dietary exposure uses `µg/kg bw/day` or PTWI percentages.
- Speciation: seafood total arsenic, inorganic arsenic, total mercury, inorganic mercury, and methylmercury are recorded separately. No total arsenic was promoted to iAs, and no total mercury was promoted to MeHg.
- Brand firewall: this is a government total diet study using food categories and composites; no brand-linked values are reported.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
