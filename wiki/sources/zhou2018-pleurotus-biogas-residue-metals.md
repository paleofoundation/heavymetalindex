---
type: source
raw_handle: AUTO_ing-fruit-mixed-Cd
cite_key: zhou2018-pleurotus-biogas-residue-metals
title: "Cultivation of Pleurotus ostreatus, a Potential Candidate for Biogas Residues Degradation"
authors: [Zhou JL, Song S, Huang ZX, Yang L, Jiao AG, Liu Y, Wang SX]
year: 2018
publication: "BioResources 13(3):5432-5449"
doi: 10.15376/biores.13.3.5432-5449
access_url: "https://bioresources.cnr.ncsu.edu/wp-content/uploads/2018/05/Biores_13_3_5432_Zhou_SHYJLW_Cultivation_Pleurotus_ost_Potential_Biogas_Reisdues_Degradation_13877.pdf"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-fruit-mixed-cd_2018_10-15376-biores-13-3-5432-5449.pdf"
sha256: 68f0aafc8d677d999e8c14335acbf4ae873cb548d9ccc46f92821ea7e1b314ad
metals: [Cd, Pb, tHg, tAs]
ingredients: ["[[ingredients/mushrooms]]"]
products: []
matrices: [oyster-mushroom, pleurotus-ostreatus, edible-mushroom, dried-fruiting-body]
jurisdictions: [CN]
sample_n: "Seven substrate treatments, with first-flush Pleurotus ostreatus fruiting bodies analyzed in triplicate for chemical composition and heavy metals."
sample_population: "Cultivated oyster mushroom fruiting bodies grown on cottonseed hull, wheat bran, lime, water, and 0-60% chicken-manure biogas-residue substrate treatments."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-25
---

# Zhou et al. 2018 - Pleurotus Metals on Biogas-Residue Substrates

## Overview

Zhou et al. evaluated whether chicken-manure biogas residue could be used as a substrate component for cultivating edible oyster mushrooms (Pleurotus ostreatus). The study measured cadmium, lead, mercury, and arsenic in the raw materials and in dried first-flush mushroom fruiting bodies across seven substrate treatments.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Highest mushroom Pb | 1.1550 +/- 0.0550 mg/kg dry weight in treatment T1 |
| Lowest mushroom Pb | 0.7850 +/- 0.0350 mg/kg dry weight in treatment T4 |
| Highest mushroom Cd | 0.1400 +/- 0.0100 mg/kg dry weight in treatment T3 |
| Lowest mushroom Cd | 0.0550 +/- 0.0000 mg/kg dry weight in treatment T6 |
| Highest mushroom Hg | 0.0074 +/- 0.0000 mg/kg dry weight in treatment T6 |
| Highest mushroom As | 0.1650 +/- 0.0050 mg/kg dry weight in treatment T6 |
| Raw biogas residue before fermentation | Cd 0.0665 +/- 0.0005 mg/kg; Pb 2.6800 +/- 0.0500; Hg 0.0225 +/- 0.0005; As 0.6800 +/- 0.1000 |
| Raw biogas residue after fermentation | Cd 0.0635 +/- 0.0015 mg/kg; Pb 2.7600 +/- 0.0300; Hg 0.0210 +/- 0.0000; As 0.6550 +/- 0.0050 |

The authors state that Pb, Cd, Hg, and As in all dried Pleurotus fruiting bodies were within China's Green Food edible-mushroom limits for dried mushrooms: Pb 2.0 mg/kg, Cd 1.0 mg/kg, Hg 0.2 mg/kg, and As 1.0 mg/kg.

## Methods (brief)

Pleurotus ostreatus (strain Huimei No. 2) was cultivated on seven substrate formulas using cottonseed hull, wheat bran, lime, water, and increasing fractions of chicken-manure biogas residue (0 to 60%). Three flushes were harvested; chemical composition and heavy metals were measured in dried first-flush fruiting bodies. Heavy metals were analyzed by Pony Testing International Group (Beijing, China); results are reported as dry-weight mg/kg. Differences among treatment means were assessed by Duncan's multiple range test at the 95% confidence level using IBM SPSS Statistics V22.0. The paper does not name the analytical instrument or report LODs, and reports total arsenic and total mercury without speciation.

## Implications

This source contributes cultivated edible-mushroom occurrence context for Pb, Cd, Hg, and total arsenic under experimental substrate conditions. It is useful for ingredient-level mushroom contamination and substrate-transfer context, but it should not be treated as routine retail-market evidence.

## Wiki pages this source may touch

- [[ingredients/mushrooms]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/mercury]]
- [[metals/arsenic]]

## Verification notes

- Batch 3 auto-fetched ingest, 2026-05-25. The wishlist row targeted mixed fruit, but the actual paper measures oyster mushroom fruiting bodies.
- Speciation: arsenic and mercury are total/unspecified measurements; do not treat them as inorganic arsenic or methylmercury.
- Basis: mushroom concentrations are dry-weight values. The authors discuss fresh-mushroom regulatory limits but note the reported mushroom data are dried fruiting-body measurements.
- Mushroom routing: routed to the umbrella [[ingredients/mushrooms]] scaffold. `wild-mushrooms` is reserved for foraged species (porcini, chanterelle, morel, boletus per the alias list); this paper studies cultivated Pleurotus ostreatus and must not aggregate into the wild-mushroom contamination profile.
- Audited 2026-06-08 (autonomous audit): corrected lowest mushroom Pb from a Cd-column transposition (0.0550 mg/kg in T6) to the actual lowest Pb value (0.7850 ± 0.0350 mg/kg in T4); added treatment attribution for highest Cd (T3); dropped misrouted `vegetables` and `wild-mushrooms` ingredients in favor of the umbrella `mushrooms` slug; named the testing laboratory (Pony Testing International Group, Beijing) in Methods.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [05220fd8f](https://github.com/paleofoundation/heavymetalindex/commit/05220fd8f) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [b08c16268](https://github.com/paleofoundation/heavymetalindex/commit/b08c16268) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
