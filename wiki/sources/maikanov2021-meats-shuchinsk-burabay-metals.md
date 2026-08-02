---
type: source
raw_handle: AUTO_ing-meat-poultry-Cd
cite_key: maikanov2021-meats-shuchinsk-burabay-metals
title: "Assessment of quality and safety of meats from various animal species in the Shuchinsk-Burabay resort zone, Kazakhstan"
authors: [Maikanov BS, Ismagulova GT, Auteleyeva LT, Kemeshov ZO, Zhanabayeva DK]
year: 2021
publication: "Veterinary World 14(6):1615-1621"
doi: 10.14202/vetworld.2021.1615-1621
access_url: "http://www.veterinaryworld.org/Vol.14/June-2021/27.pdf"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-meat-poultry-cd_2021_10-14202-vetworld-2021-1615-1621.pdf"
sha256: 1b507b58ab2eb44623afcd0433875b03758ce0d356747e3b735f3ebd92d4d585
metals: [tAs, Cd, tHg, Pb]
ingredients: ["[[ingredients/chicken]]", "[[ingredients/beef]]", "[[ingredients/meat]]"]
products: ["[[products/poultry-product]]", "[[products/beef-product]]", "[[products/pork-product]]", "[[products/lamb-mutton]]"]
matrices: [beef, horse-meat, pork, mutton, poultry-meat]
jurisdictions: [KZ]
sample_n: 298
sample_population: "Meat from markets in the Shuchinsk-Burabay resort zone: beef 166, horse 42, pork 67, mutton 8, poultry 15."
wiki_doi: null
sampling_locations: ["Shuchinsk-Burabay resort zone, Akmola region, Kazakhstan"]
sampling_year_range: "2018-2020"
updated: 2026-06-08
---

# Maikanov et al. 2021 - Meat Safety in Shuchinsk-Burabay

## Overview

Maikanov et al. measured arsenic, cadmium, mercury, and lead in multiple meat species from markets in the Shuchinsk-Burabay resort zone, Kazakhstan. For the poultry row, the key result is negative evidence: the table reports poultry values below detection/zero for As, Cd, Hg, and Pb.

## Key numbers

Table 4 (p.1619) reports heavy metal salts in mg/kg. The paper uses the non-standard notation `<0` to mark values below detection, paired with the abstract framing "did not exceed maximum permissible limits." Horse meat had Cd 0.01 +/- 0.0002, Hg 0.02 +/- 0.0001, and Pb 0.1 +/- 0.0003 mg/kg, with As below detection. Beef had Hg 0.03 +/- 0.0263 mg/kg, with As, Cd, and Pb below detection. Mutton had As 0.01 +/- 0.0001, Hg 0.03 +/- 0.0002, and Pb 0.1 +/- 0.00001 mg/kg, with Cd reported as 0. Pork and poultry were below detection for all four analytes. The paper's stated maximum permissible concentrations are As 0.1, Cd 0.05, Hg 0.03, and Pb 0.5 mg/kg; the Conclusion (p.1620) notes that beef and mutton reached the mercury threshold of 0.03 mg/kg.

## Methods (brief)

The study collected 298 meat samples from two markets in the Shuchinsk-Burabay resort zone between March 2018 and May 2020 and analyzed As, Cd, Hg, and Pb by ICP-MS (Agilent Technologies 7700) after pressure mineralization, following SOP IC-SOP-M-E-002 based on BS EN 15763:2009. No arsenic or mercury speciation was performed.

## Implications

This source contributes occurrence data for beef, horse meat, pork, mutton, and poultry in a Kazakh market context. Pork and poultry are useful negative evidence for the four target analytes at this site. The non-US market setting, the small mutton (n=8) and poultry (n=15) cell sizes, and the absence of speciation should remain visible in routing and downstream synthesis.

## Wiki pages this source may touch

- [[products/poultry-product]]
- [[products/beef-product]]
- [[products/pork-product]]
- [[products/lamb-mutton]]
- [[ingredients/chicken]]
- [[ingredients/meat]]
- [[metals/mercury]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic]]

## Verification notes

- Batch 5 auto-fetched ingest, 2026-05-25.
- Total arsenic and total mercury are not speciated iAs or MeHg.
- The paper has an internal contradiction on beef Hg and Pb. The body text on p.1618 states "In beef samples, mercury concentration was 0.01±0.0002 mg/kg and lead 0.1±0.00001 mg/kg," but Table-4 reports beef Hg=0.03±0.0263 and beef Pb=<0. The Conclusion on p.1620 backs Table-4 ("In beef and mutton, a threshold for mercury contents has been set (0.03 mg/kg)"). This page follows Table-4 as the authoritative data table; downstream synthesis should not silently inherit the body-text values.
- The paper also reports Cs-137 radionuclide activity for all species, all below the 200 Bq/kg permissible level. Radionuclides are outside HMI's scope and are not summarised here.
- Generic-pork ingredient routing: no `[[ingredients/pork]]` slug exists; the umbrella `[[ingredients/meat]]` plus `[[products/pork-product]]` carries the routing. `[[ingredients/pork-chop]]` was removed because the paper sampled generic pork from markets, not chops specifically.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [e5076c3ef](https://github.com/paleofoundation/heavymetalindex/commit/e5076c3ef) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [477ff83fb](https://github.com/paleofoundation/heavymetalindex/commit/477ff83fb) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
