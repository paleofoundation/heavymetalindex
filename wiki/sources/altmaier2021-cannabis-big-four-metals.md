---
type: source
raw_handle: MFK_big-four-analysis-cannscitech
cite_key: altmaier2021-cannabis-big-four-metals
title: "The Big Four Heavy Metals in Cannabis: Sample Preparation and Analysis via ICP-MS"
authors: [Altmaier S]
year: 2021
publication: "Cannabis Science and Technology"
doi: null
no_doi_assigned: true
access_url: https://www.cannabissciencetech.com/view/the-big-four-heavy-metals-in-cannabis-sample-preparation-and-analysis-via-icp-ms
source_type: trade-publication
evidence_tier: C
license: "All rights reserved"
raw_path: "raw/Manual Fetch Kimi /June 9/big-four-analysis-cannscitech.pdf"
metals: [tAs, Cd, tHg, Pb, Cr, Ni]
ingredients: ["[[ingredients/herbal-botanicals]]"]
products: ["[[products/supplements-botanicals-herbs]]"]
matrices: [hemp, cannabis, hemp-flowers, dried-buds, plant-parts]
jurisdictions: [DE, EU]
near_duplicates: []
sample_n: 3
sample_population: "Three industrial-hemp flower varieties purchased from a German drugstore (Finola, Felina, Santhica; 25 g dried-bud batches), prepared by multiple milling procedures; Santhica also separated into stems, seeds, and leaves for duplicate plant-part determinations."
updated: 2026-06-09
sources: 1
audience: [regulator, educator, app]
---

# Altmaier 2021 - big-four metals in cannabis flowers

Altmaier describes an ICP-MS workflow for arsenic, cadmium, mercury, and lead in *Cannabis sativa* plant material, using three industrial-hemp flower varieties purchased from a German drugstore. The paper is a trade-publication technical feature rather than a peer-reviewed market survey, but it prints concentration tables for dried hemp flowers and separated plant parts. Chromium and nickel values are also reported as milling-contamination diagnostics, so those values should not be pooled with product occurrence without preserving the milling method.

## Key numbers

Table IV reports heavy-metal content of three cannabis varieties after four grinding procedures. Units are `µg/g`. Arsenic and mercury are not speciated, so this page records them as tAs and tHg.

| Matrix / preparation set | tAs | Cd | tHg | Pb | Cr | Ni |
|---|---:|---:|---:|---:|---:|---:|
| Finola hemp flowers, four preparations | 0.1 µg/g in all four preparations | < 0.1 µg/g in all four preparations | < 0.1 µg/g in all four preparations | 0.6-0.7 µg/g | 0.3-0.4 µg/g by RP/MP; 12 µg/g by both cryo-mill preparations | 0.8-1.1 µg/g by RP/MP; 2.0-2.1 µg/g by cryo-mill preparations |
| Santhica hemp flowers, five preparations | < 0.1 µg/g in all five preparations | < 0.1 µg/g except MP at 0.1 µg/g | < 0.1 µg/g in all five preparations | 0.3-0.5 µg/g | 0.2-0.3 µg/g by RP/MP/KM; 2.5-3.6 µg/g by cryo-mill preparations | 0.4-1.7 µg/g by RP/MP/KM; 0.6-0.7 µg/g by cryo-mill preparations |
| Felina hemp flowers, five preparations | 0.1 µg/g by RP; < 0.1 µg/g by the other four preparations | < 0.1 µg/g in all five preparations | < 0.1 µg/g in all five preparations | 0.5-1.0 µg/g | 0.3-0.6 µg/g by RP/MP/KM; 3.7-4.3 µg/g by cryo-mill preparations | 0.5-0.6 µg/g by RP/MP/KM; 0.7 µg/g by both cryo-mill preparations |

The Results section summarizes the same table by stating that mercury was below LOD in all samples, only one of 14 samples had Cd above the detection limit (`0.1 µg/g`), five samples contained As close to the LOD (`0.1 µg/g`), and detected Pb ranged from `0.3 to 1.0 µg/g`.

Table V reports Santhica plant parts without grinding, in duplicate:

| Santhica plant part | tAs | Cd | tHg | Pb |
|---|---:|---:|---:|---:|
| Stems | < 0.1 / < 0.1 µg/g | < 0.1 / < 0.1 µg/g | < 0.1 / < 0.1 µg/g | 0.4 / 0.4 µg/g |
| Seeds | < 0.1 / < 0.1 µg/g | < 0.1 / < 0.1 µg/g | < 0.1 / < 0.1 µg/g | < 0.1 / < 0.1 µg/g |
| Leaves | < 0.1 / < 0.1 µg/g | < 0.1 / < 0.1 µg/g | < 0.1 / < 0.1 µg/g | 0.4 / 0.4 µg/g |

The paper states that cryo milling used stainless-steel equipment and produced elevated Cr in all cryo-ground samples; elevated Ni relative to rolling-pin and mortar/pestle milling appeared only in the Finola sample. Knife milling used titanium blades and did not affect Cr or Ni content in the same way.

## Methods (brief)

Three *Cannabis sativa* industrial-hemp varieties, Finola, Felina, and Santhica, were sold as dried hemp flowers in 25 g batches under German THC rules (<0.2%). Aliquots were prepared by rolling pin, mortar and pestle, knife mill, and cryo ball mill. A second Santhica experiment manually separated seeds, leaves, and stems and digested them without a preceding grinding step. The method used microwave nitric-acid digestion, indium internal standard, standard-addition calibration with CRM heavy-metal mixes, and ICP-MS. Table II lists the digestion and ICP-MS conditions; Table III reports recovery rates for As, Cd, Hg, and Pb of 90-110% across the three varieties.

## Implications

The paper provides limited occurrence context for dried hemp flowers and plant parts, plus a useful method warning that sample-preparation hardware can inflate Cr and sometimes Ni. The big-four values may inform hemp/cannabis botanical context at C-tier, but Cr and Ni values need milling-method qualifiers before any downstream use.

## Wiki pages this source may touch

- [[products/supplements-botanicals-herbs]]
- [[ingredients/herbal-botanicals]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/mercury-total]]
- [[metals/lead]]
- [[metals/chromium]]
- [[metals/nickel]]

## Verification notes

- Identity checks before writing found no existing source page for the article title, raw handle `MFK_big-four-analysis-cannscitech`, or cite key `altmaier2021-cannabis-big-four-metals`.
- DOI check: no DOI was found in the PDF text or work-list row. The article page and PDF identify it as *Cannabis Science and Technology* 4(2), 24-29 (2021), so `no_doi_assigned: true` is used.
- All Key numbers were rechecked against `/tmp/hmi-june9-081.txt` extracted with `pdftotext -layout`, especially Tables IV and V.
- Speciation check: As and Hg are not speciated; the page uses tAs and tHg. No iAs or MeHg values are inferred.
- Units are preserved as `µg/g`; no conversions were performed.
- Evidence tier: C, because this is a trade-publication technical feature with three hemp-flower varieties, not a peer-reviewed occurrence survey.
- Brand firewall: the source names cultivar/variety labels (Finola, Felina, Santhica), not sampled commercial brands. The German drugstore purchase channel is retained as sample-frame context without naming a retailer.
- Missing slug note: the taxonomy snapshot has no exact hemp/cannabis product or ingredient slug. Frontmatter uses broad `[[ingredients/herbal-botanicals]]` and `[[products/supplements-botanicals-herbs]]`, with hemp/cannabis retained only as matrix descriptors.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [2eb93347f](https://github.com/paleofoundation/heavymetalindex/commit/2eb93347f) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
