---
type: regulation
rule_id: oehha-lead-prop65
jurisdiction: US-CA
agency: OEHHA
program: Proposition 65
metal: Pb
matrix: all-consumer-products
limit_value: multiple
limit_unit: ug/day
status: in-force
effective_date: null
sunset_date: null
source_refs: ["[[sources/oehha-lead-prop65-listing]]"]
title: "California Proposition 65 — Lead and Lead Compounds Listing"
wiki_doi: null
updated: 2026-05-03
audience: [regulator, educator]
---

# California Proposition 65 — Lead and Lead Compounds Listing

## Overview

Lead and lead compounds are listed under California's Proposition 65 in two separate categories: as chemicals known to the state to cause cancer, and as chemicals known to the state to cause reproductive toxicity (developmental, male, and female endpoints) ([[sources/oehha-lead-prop65-listing|OEHHA Prop 65 Pb]]). OEHHA lists an oral No Significant Risk Level (NSRL) of 15 ug/day for cancer and a Maximum Allowable Dose Level (MADL) of 0.5 ug/day for reproductive toxicity. Consumer products sold in California that expose a consumer above the relevant threshold must carry a Prop 65 warning unless another valid safe-harbor or exposure showing applies.

For infant and child foods, HMI uses the 0.5 ug/day lead MADL as the operative screening value because it is far stricter than the oral cancer NSRL. Prop 65 does not set food-category ppb limits, so HMI converts the MADL into a ppb equivalent only when a daily intake assumption is stated.

## Listing categories

Listing status from [[sources/oehha-lead-prop65-listing|OEHHA Prop 65 Pb]]:

| Category | Status / value |
| --- | --- |
| Cancer | Currently listed |
| Reproductive toxicity (developmental) | Currently listed |
| Reproductive toxicity (male) | Currently listed |
| Reproductive toxicity (female) | Currently listed |
| NSRL (cancer, oral) | 15 ug/day |
| MADL (reproductive toxicity) | 0.5 ug/day |

## Food ppb conversion

For food comparisons, HMI uses:

```text
lead ppb equivalent = 500 ÷ grams consumed per day
```

This is a transparent exposure conversion, not a Prop 65 food-category concentration limit. Example: at 110 g/day of puree, the 0.5 ug/day MADL corresponds to about 4.5 ppb lead.

## Sources

- [[sources/oehha-lead-prop65-listing|OEHHA Prop 65 Pb]] — OEHHA. Lead and Lead Compounds, Proposition 65 chemical listing.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/oehha-lead-prop65-listing|Lead and Lead Compounds — Proposition 65 Chemical Listing]]<span class="hmi-ref-meta">California Office of Environmental Health Hazard Assessment · [oehha.ca.gov](https://oehha.ca.gov/proposition-65/chemicals/lead-and-lead-compounds)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [1e18eb986](https://github.com/paleofoundation/heavymetalindex/commit/1e18eb986) | 2026-05-03 | major | 1 section added; narrative text revised |
| [7c4c20f88](https://github.com/paleofoundation/heavymetalindex/commit/7c4c20f88) | 2026-04-25 | minor | Narrative text revised |
| [fe46127e7](https://github.com/paleofoundation/heavymetalindex/commit/fe46127e7) | 2026-04-25 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
