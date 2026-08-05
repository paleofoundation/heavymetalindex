---
type: regulation
rule_id: ca-prop65-ab2762-cosmetics
jurisdiction: US-CA
agency: OEHHA (Proposition 65); State of California (AB 2762, Health and Safety Code)
program: Safe Drinking Water and Toxic Enforcement Act of 1986 (Prop 65); California Toxic-Free Cosmetics Act (AB 2762, 2020)
metal: "multiple (Prop 65: Pb, Cd, and others as exposure thresholds; AB 2762: intentionally-added Hg prohibition)"
matrix: cosmetics
limit_value: null
limit_unit: null
status: enforced
effective_date: 2025-01-01
sunset_date: null
source_refs: []
source_url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201920200AB2762"
title: "California Prop 65 / AB 2762 — exposure-based warnings and intentionally-added mercury prohibition; no numeric heavy-metal concentration limit for cosmetics"
audience: [regulator, educator, consumer, brand-legal]
wiki_doi: null
updated: 2026-07-29
---

# California — Proposition 65 and AB 2762 (Toxic-Free Cosmetics Act)

California's two cosmetic-relevant heavy-metal instruments set **no numeric concentration limit** for heavy metals in cosmetic products. Proposition 65 works through **daily-exposure** thresholds (µg/day) that trigger warning duties, not product-content caps. AB 2762 (Health and Safety Code, Chapter 14 (commencing with Section 108980) of Part 3 of Division 104) **prohibits intentionally added** mercury — the only heavy metal among its 24 listed substances — with a technically-unavoidable-trace exception, but sets no ppm value. HMI handling: standards rows governed by these instruments are **ADJUDICATE, not CAP_MAP**. The intake-based Prop 65 values are an excluded cap class in this wiki (dietary-intake values are never loadable as product-matrix caps).

## Proposition 65 — exposure thresholds, not concentration limits

Prop 65 (Health and Safety Code § 25249.5 et seq.) requires warnings before exposure to listed chemicals above safe-harbor levels expressed as **daily intake** (µg/day): No Significant Risk Levels (NSRLs, carcinogens) and Maximum Allowable Daily Levels (MADLs, reproductive toxicants). They do not limit how much of a metal may be present in a product; compliance is judged against exposure from use. Existing wiki pages carry the transcribed values:

- Lead: NSRL 15 µg/day; MADL 0.5 µg/day ([[regulations/oehha-lead-prop65]])
- Cadmium: MADL 4.1 µg/day oral, listing effective 1997-05-01 ([[regulations/oehha-cadmium-prop65]]); cadmium NSRL (carcinogen listing) pending ingest in this wiki
- Arsenic (inorganic): listed carcinogen and reproductive toxicant; value pages pending ingest

Because these are intake values, they are **not registered in `regulatory_limits.csv`** and no standards row becomes CAP_MAP on their account.

## AB 2762 — intentionally-added substance prohibition (mercury)

Effective 2025-01-01, no person or entity shall manufacture, sell, deliver, hold, or offer for sale in commerce any cosmetic product that contains any of 24 intentionally added ingredients. The list — dibutyl phthalate, diethylhexyl phthalate, formaldehyde, paraformaldehyde, methylene glycol, quaternium-15, **mercury (CAS 7439-97-6)**, isobutylparaben, isopropylparaben, m-phenylenediamine and its salts, o-phenylenediamine and its salts, and thirteen per- and polyfluoroalkyl substances (PFAS) — contains **mercury as its only heavy metal**. Lead, cadmium, and arsenic are not listed substances under AB 2762.

The statute carries a technically-unavoidable-trace exception, verbatim:

> If a cosmetic product made through manufacturing processes intended to comply with this chapter contains a technically unavoidable trace quantity of an ingredient listed in subdivision (a) and that trace quantity stems from impurities of natural or synthetic ingredients, the manufacturing process, storage, or migration from packaging, that trace quantity shall not cause the cosmetic product to be in violation of this section.

This mirrors the EU Cosmetics Regulation's Article 17 framework (prohibition plus technically-unavoidable trace, no numeric de minimis) — see [[regulations/eu-cosmetics-1223-2009]]. No numeric threshold defines "trace quantity" in the statute; nothing is inferred here.

## Exact limit and units

**None.** Neither instrument expresses a heavy-metal limit as a product concentration in any unit. Prop 65 safe-harbor levels are µg/day intake values; AB 2762 is an intentionally-added-ingredient prohibition. Any numeric cosmetic heavy-metal limit attributed to California on a concentration basis (other than the federal FDA framework) does not come from these instruments.

## How tested

Not applicable — no concentration limit to test against under these instruments. Prop 65 cosmetics litigation typically proceeds on exposure modelling (µg/day from labelled use) compared against the NSRL/MADL.

## Enforcement posture

Prop 65 is enforced by the Attorney General, district attorneys, and private enforcers (60-day notices); cosmetics have been a steady Prop 65 enforcement category for lead. AB 2762 is enforceable by the state from its 2025-01-01 operative date; the trace exception places the burden on showing technical unavoidability.

## History of changes

- 1986: Proposition 65 enacted by ballot initiative.
- 1987-02-27: lead listed as a carcinogen; 1987-01-01: lead listed for reproductive toxicity (MADL 0.5 µg/day).
- 1997-05-01: cadmium listed as a reproductive toxicant (MADL 4.1 µg/day oral, May 2001 document).
- 2020-09-30: AB 2762 signed (Toxic-Free Cosmetics Act); 2025-01-01: prohibition operative.

## Comparison with other jurisdictions

- **Washington State**: unlike California, Washington's Toxic-Free Cosmetics Act sets a numeric concentration limit — 1000 µg/kg lead in toothpaste ([[regulations/washington-tfca-toothpaste-pb-1000ppb]]).
- **Canada / US FDA / EU**: numeric impurity guidance exists in Canada (Pb 10, As 3, Cd 3, Hg 1, Sb 5 ppm); the US FDA has a draft 10 ppm lead recommendation and a binding <1 ppm mercury trace rule; the EU prohibits Annex II metals with an Article 17 trace allowance and no numeric limit ([[regulations/health-canada-cosmetic-heavy-metal-impurities]], [[regulations/fda-cosmetics-heavy-metals]], [[regulations/eu-cosmetics-1223-2009]]).

## Sources

- AB 2762 (2019-2020), Toxic-Free Cosmetics Act — California Legislative Information: <https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201920200AB2762>
- Proposition 65 safe-harbor levels for lead and cadmium as transcribed on [[regulations/oehha-lead-prop65]] and [[regulations/oehha-cadmium-prop65]] (source documents: OEHHA NSRL/MADL publications, oehha.ca.gov)

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [38cedd111](https://github.com/paleofoundation/heavymetalindex/commit/38cedd111) | 2026-08-04 | major | Contamination-profile values revised; 8 sections added; narrative text revised |
<!-- END: hmi-page-history -->
