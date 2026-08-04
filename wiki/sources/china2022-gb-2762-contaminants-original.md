---
type: source
raw_handle: raw-regulatory-china-gb-2762-2022
cite_key: china2022-gb-2762-contaminants-original
title: "GB 2762-2022 National Food Safety Standard: Maximum Levels of Contaminants in Foods"
authors: ["National Health Commission of the People's Republic of China", "State Administration for Market Regulation"]
year: 2022
publication: "National Food Safety Standard GB 2762-2022"
doi: null
no_doi_assigned: true
source_type: government-regulation
evidence_tier: A
license: public-law
raw_path: raw/regulatory/cn/china-gb-2762-2022-contaminants.pdf
raw_sha256: "2b8ac45f1314362c92ff1bd3e8fd4806bd7c6c5fbbc4eb592fdb491db31eca2a"
access_url: "https://www.nhc.gov.cn/sps/c100087/202207/9c59b98621c0474d9431dac289080e4c.shtml"
metals: [Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr]
ingredients: ["[[ingredients/rice]]", "[[ingredients/wheat]]", "[[ingredients/fish]]", "[[ingredients/shellfish]]", "[[ingredients/seaweed]]"]
products: ["[[products/infant-formula-powder]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/canned-foods-general]]", "[[products/bottled-drinking-water]]", "[[products/mineral-water]]"]
matrices: [foodstuffs, infant-formula, infant-cereal, rice, cereal-grains, fish, seafood, canned-food, drinking-water]
jurisdictions: [CN]
near_duplicates: ["[[sources/usda-fas2023-china-gb-2762-2022-translation]]"]
sample_n: null
sample_population: null
updated: 2026-08-03
---

# China 2022 - GB 2762 contaminants original text

## Overview

This is the original Chinese-language GB 2762-2022 National Food Safety Standard for maximum levels of contaminants in foods. The wiki already carries [[sources/usda-fas2023-china-gb-2762-2022-translation]], an unofficial English translation; this source page anchors the original raw PDF hash and verifies key HMI-relevant values against the Chinese standard.

## Key numbers

Values are in mg/kg unless a water row is stated as mg/L. Chinese table text was checked against the PDF and harmonized with the existing USDA FAS translation page for English commodity names.

| Table | Contaminant | Food or matrix | Limit |
| --- | --- | --- | ---: |
| Table 1 | Pb | Infant and young-child formula foods, solid-product basis | 0.08 |
| Table 1 | Pb | Infant and young-child complementary foods | 0.2 |
| Table 1 | Pb | Liquid infant and young-child formula foods | converted at 8:1 |
| Table 2 | Cd | Grains excluding paddy rice | 0.1 |
| Table 2 | Cd | Milled grain products excluding brown rice and rice powder | 0.1 |
| Table 2 | Cd | Paddy rice, brown rice, rice powder | 0.2 |
| Table 2 | Cd | Cereal-based complementary foods for infants and young children | 0.06 |
| Table 3 | tHg | Paddy rice, brown rice, rice powder, corn, corn flour, corn grits, wheat, wheat flour | 0.02 |
| Table 3 | tHg | Canned complementary foods for infants and young children | 0.02 |
| Table 4 | iAs | Paddy rice, brown rice basis | 0.35 |
| Table 4 | iAs | Brown rice | 0.35 |
| Table 4 | iAs | Rice powder | 0.2 |
| Table 4 | iAs | Cereal-based complementary foods for infants and young children, excluding products with added algae | 0.2 |
| Table 4 | iAs | Canned complementary foods for infants and young children, excluding aquatic-animal and animal-liver raw materials | 0.1 |
| Table 5 | Sn | Canned foods except beverages, infant formula, and complementary foods | 250 |
| Table 5 | Sn | Canned beverages | 150 |
| Table 5 | Sn | Canned infant formula and complementary foods | 50 |

GB 2762-2022 states that for foods with methylmercury limits, total mercury may be tested first; if total mercury does not exceed the methylmercury limit, methylmercury determination is not required. It gives the analogous screening rule for inorganic arsenic: total arsenic can be tested first, and inorganic arsenic testing is required if total arsenic exceeds the corresponding iAs limit.

## Methods (brief)

This is a regulatory maximum-level standard, not an occurrence dataset. The PDF states that GB 2762-2022 replaces GB 2762-2017 and modifies application principles plus selected Pb, Cd, As, Hg, benzo[a]pyrene, PCB, and packaged-drinking-water method requirements. It adds the 8:1 conversion ratio for liquid infant and young-child formula foods.

## Implications

Certification: The source provides China-market regulatory comparator values and does not set HMTc thresholds.

Courses: It is useful for teaching speciation screening rules for MeHg and iAs and basis conversion for infant formula.

App: It supports China jurisdiction comparator labels for product rows after routing.

Microbiome: No direct microbiome endpoint.

## Wiki pages updated on ingest

- [[regulations/china-gb-2762-2022-contaminants]]
- [[sources/usda-fas2023-china-gb-2762-2022-translation]]
- [[products/infant-formula-powder]]
- [[products/baby-cereals-dry-rice-based]]

## Verification notes

- Ingested from `raw/regulatory` on 2026-08-03.
- Values above were checked against both the Chinese PDF text extraction and the existing USDA FAS translation source page.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [6abef4583](https://github.com/paleofoundation/heavymetalindex/commit/6abef4583) | 2026-08-03 | major | 1 source added; 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
