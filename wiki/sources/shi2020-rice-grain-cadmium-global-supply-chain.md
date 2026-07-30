---
type: source
raw_handle: AUTO_ing-cereal-bars-iAs
cite_key: shi2020-rice-grain-cadmium-global-supply-chain
title: "Rice Grain Cadmium Concentrations in the Global Supply-Chain"
authors: [Shi Z, Carey M, Meharg C, De Silva PMC, Lu Y, Norton GJ, Green AJ, Moreno-Jimenez E, Williams PN, Signes-Pastor AJ, Campbell K, Elliott C, Meharg AA]
year: 2020
publication: "Exposure and Health 12:869-876"
doi: 10.1007/s12403-020-00349-6
access_url: "https://link.springer.com/content/pdf/10.1007/s12403-020-00349-6.pdf"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-cereal-bars-ias_2020_10-1007-s12403-020-00349-6.pdf"
sha256: d91931d503a85f177e2dae076fab15d1561210f092f8c3d41f18ff34067d9a0c
metals: [Cd]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]", "[[products/infant-rice-cereal]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/teething-and-snacks-rice-based]]"]
matrices: [polished-white-rice, rice-grain]
jurisdictions: [GLOBAL]
sample_n: 2270
sample_population: "Global polished white market-rice supply-chain samples purchased from retailers across 32 countries on six continents; country-level n and distribution statistics reported in Table 1."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-25
---

# Shi et al. 2020 - Global Rice Grain Cadmium

Shi et al. compiled and analyzed cadmium concentrations in 2,270 polished white rice samples from the global market supply chain. The source is direct rice-grain occurrence evidence and infant-rice-food context because the authors compare rice-grain cadmium distributions with the EU 40 ug/kg processed-infant-food standard for products that can be nearly all rice.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Global sample size | 2,270 polished white rice samples across 32 countries |
| Global Cd distribution | <4.9 to 3,712 ug/kg; global median 19.0 ug/kg |
| Highest country median | China median 69.3 ug/kg; max 3,712 ug/kg |
| Low country medians | Malawi and Tanzania medians 4.9 ug/kg, at the study's half-LOD value |
| EU rice-grain standard comparison | 5% of the global supply chain exceeded 200 ug/kg |
| China comparison | 17% of Chinese samples exceeded 200 ug/kg |
| Processed infant-food comparison | 25% of rice would not be suitable for pure rice baby foods under the stricter 40 ug/kg standard |
| US sample summary | n=18; median 17.05 ug/kg; max 31.8 ug/kg |
| Italy sample summary | n=205; median 25.7 ug/kg; max 226.2 ug/kg |

The authors emphasize that cadmium and inorganic arsenic risks can co-occur in rice, so source-region selection matters for infant rice foods and other high-rice formulations.

## Methods (brief)

Rice samples were freeze dried and digested, and cadmium was quantified by ICP-MS. The LOD was 9.8 ug/kg, and values below LOD were substituted with half-LOD (4.9 ug/kg) for distribution reporting. The paper reports country-level minimum, 25th percentile, median, 75th percentile, maximum, and range.

## Implications

This source supports rice bulk-grain and rice-based infant-food context for cadmium. It is not a cereal-bar occurrence dataset despite the wishlist filename; routing to cereal bars should be contextual only when rice is a major ingredient. Values must remain country- and market-source aware.

## Wiki pages this source may touch

- [[products/rice-bulk-grain]]
- [[products/infant-rice-cereal]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/teething-and-snacks-rice-based]]
- [[ingredients/rice]]
- [[metals/cadmium]]

## Verification notes

- Batch 2 auto-fetched ingest, 2026-05-25. The wishlist row targeted cereal-bars inorganic arsenic, but the actual paper measures cadmium in global polished rice grain. It is retained because it is a real food-occurrence dataset for rice and rice-based infant-food context.
- Speciation: the measured analyte in this paper is cadmium. Inorganic arsenic appears as contextual comparison only and is not a measured value in this source.
- Basis: concentrations are reported in ug/kg rice grain; do not pool with prepared or wet-basis infant-food values without conversion.
- Matrix scope: the paper measures cadmium in polished white rice grain only. The 40 µg/kg processed-infant-food standard appears as a regulatory comparison point, not a directly-measured matrix; rice-based infant food is therefore listed under routing contexts (the product wikilinks) rather than as a measured matrix.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [0e923e9b3](https://github.com/paleofoundation/heavymetalindex/commit/0e923e9b3) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [db181df75](https://github.com/paleofoundation/heavymetalindex/commit/db181df75) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
