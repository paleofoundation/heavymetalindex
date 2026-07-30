---
type: source
raw_handle: FM_12071571
cite_key: wysok2025-sheep-casings-metals-poland
title: "Assessment of Microbial and Heavy Metal Contamination of Natural Sheep Casings from Different Geographic Regions"
authors: ["Beata Wysok", "Adam Dymkowski", "Marta Sołtysiuk", "Aleksandra Kobuszewska"]
year: 2025
publication: "Foods 14(9):1520"
doi: "10.3390/foods14091520"
access_url: "https://doi.org/10.3390/foods14091520"
source_type: peer-reviewed
evidence_tier: A
license: "Creative Commons Attribution License"
raw_path: raw/markdown/FM_12071571/FM_12071571.md
metals: [Pb, Cd, tAs, tHg]
ingredients: ["[[ingredients/meat]]"]
products: ["[[products/processed-meats]]"]
matrices: [meat]
jurisdictions: [TR, IR, CN, MN, PK, NZ, UK, BE]
sample_n: 35
sample_population: "Salted natural sheep casings from Turkey, Iran, China, Mongolia, Pakistan, New Zealand, the United Kingdom, and Belgium."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
ingest_method: marker_manifest_batch
---

# Assessment of Microbial and Heavy Metal Contamination of Natural Sheep Casings from Different Geographic Regions

Marker-corpus ingest from `raw/markdown/FM_12071571/FM_12071571.md`.

## Evidence fitness

Food-matrix occurrence source for heavy metals in salted natural sheep casings. The values are potentially routeable to processed-meat or meat-related pages, but the matrix is a casing ingredient rather than a finished sausage; retain that row-fit distinction during routing.

## Key numbers

- The study tested 35 salted natural sheep-casing samples from eight countries.
- Total mean concentrations were Pb 0.077 +/- 0.045 mg/kg, As 0.036 +/- 0.029 mg/kg, and Cd 0.009 +/- 0.008 mg/kg.
- Mercury was below the LOQ in all samples; the source table reports Hg <0.001 mg/kg.
- Reported LOQs were 0.001 mg/kg for Cd and Hg and 0.01 mg/kg for As and Pb.
- The total observed ranges were Pb 0.017-0.17 mg/kg, Cd <0.001-0.026 mg/kg, As <0.01-0.13 mg/kg, and Hg <0.001 mg/kg.

## Methods

The source reports ICP-MS after microwave digestion of homogenized casing samples with nitric acid and hydrogen peroxide, followed by hydrochloric acid addition and dilution. Trace-element concentrations were expressed in mg/kg on a dry-matter basis.

## Implications

Use this as source-scoped processed-meat/casing occurrence evidence. Do not silently merge the casing matrix with finished sausage or meat-puree benchmark rows without a row-fit note.

## Wiki pages this source may touch

- [[products/processed-meats]]
- [[ingredients/meat]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[metals/mercury-total]]

## Verification notes

- Manifest DOI was malformed by Markdown extraction; the DOI was corrected from the paper citation.
- Table 2 contains an apparent typo in the China arsenic range (`0.14-0.094`); use the narrative/table maxima of 0.13 mg/kg as the upper value unless a later audit resolves the table typo from the PDF.
- Matrix scope is recorded conservatively as `meat`; the paper's actual matrix is salted natural sheep casing used in processed meat production.
- Brand firewall: no sampled consumer brands are reproduced.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [475eaa6a7](https://github.com/paleofoundation/heavymetalindex/commit/475eaa6a7) | 2026-05-25 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
