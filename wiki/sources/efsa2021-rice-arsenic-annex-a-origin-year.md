---
type: source
cite_key: efsa2021-rice-arsenic-annex-a-origin-year
title: "Rice grain arsenic counts by origin country and sampling year, derived from EFSA 2021 Annex A"
authors: ["European Food Safety Authority"]
year: 2021
publication: "EFSA Journal"
doi: null
no_doi_assigned: true
access_url: "https://doi.org/10.2903/j.efsa.2021.6380"
source_type: gov-report
evidence_tier: A
license: "public-reference-only"
superseded_by: null
raw_path: "data/evidence/rice_as_efsa2021_origin_year.csv"
sha256: 4d83524afe1ddac1fefff9de023ea237c245ae2a180cd3a5c769137ef8a839fb
access_date: 2026-09-26
metals: [iAs, tAs]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]"]
matrices: [rice-grain]
jurisdictions: [EU]
sampling_locations: []
sampling_year_range: null
wiki_doi: null
evidence_fitness:
  supports:
    - "A count of rice-grain result rows by origin code and sampling year for inorganic arsenic and total arsenic."
  does_not_support:
    - "A concentration for any origin-year cell."
    - "A sampling country for origin codes XX, XD, or EU."
    - "The full Annex A occurrence file, which is not stored in this repository."
updated: 2026-09-26
---

# EFSA 2021 rice grain origin-year counts

## Key numbers

The stored table counts rice-grain result rows by origin code and sampling year. Inorganic arsenic and total arsenic stay in separate rows. Known ISO country codes enter the country-year ledger as counts. Origin codes XX and XD, and the label EU, stay in the gap list. No concentration is copied from this table.

The opinion itself is https://doi.org/10.2903/j.efsa.2021.6380. The derived count file is not the 19 MB Annex A workbook. That workbook is not stored here.

## Methods (brief)

Rice grain categories were counted by the origin country reported to EFSA and by sampling year. Parameter codes follow Table 1 of the 2021 opinion. The count is a count of result rows.

## Evidence fitness

The table can support a statement that a given origin and year contributed a stated number of rice-grain result rows. It cannot support a mean, a median, or a maximum for that cell.

## Limitations

Unknown origin and an unspecified EU label are not countries. A later pass would need the Annex A workbook before any concentration could be copied.

## Related evidence

- [[ingredients/rice]]
- [[baselines/rice-arsenic]]
- [[sources/efsa2021-chronic-exposure-iAs]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
