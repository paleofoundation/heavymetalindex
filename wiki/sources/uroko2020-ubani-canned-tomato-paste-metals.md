---
type: source
raw_handle: MFK_uroko2019
cite_key: uroko2020-ubani-canned-tomato-paste-metals
title: "Quantification of Heavy Metals in Canned Tomato Paste Sold in Ubani-Umuahia, Nigeria"
authors: [Uroko R I, Okpashi V E, Etim N E, Fidelia A C]
year: 2020
publication: "Journal of Bio-Science"
doi: "10.3329/jbs.v28i0.44705"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/uroko2019.pdf"
raw_sha256: "fc8783ea3d5db1c40bc9442b309dcef7ea78de88ef0a862fb5df28d8e8add870"
access_url: "https://doi.org/10.3329/jbs.v28i0.44705"
metals: [Pb, Ni, Cu, Co, Fe, Cr, Cd, Mn, Zn]
ingredients: ["[[ingredients/tomato-paste]]", "[[ingredients/tomato]]"]
products: ["[[products/tomato-paste]]"]
matrices: [canned-tomato-paste, canned-food]
jurisdictions: [NG]
near_duplicates: []
sample_n: 10
sample_population: "Ten coded canned tomato-paste products purchased from Ubani-Umuahia market, Nigeria."
updated: 2026-06-08
---

# Uroko et al. 2020 — Heavy metals in canned tomato paste from Ubani-Umuahia

Uroko and colleagues measured nine metals in ten canned tomato-paste products sold at Ubani-Umuahia market in Nigeria. Table 1 reports coded sample concentrations in ppm, but this page aggregates the coded rows to avoid attaching values to named consumer products. Lead and nickel were not detected; chromium and cadmium were detected above the paper's comparator values in all tested samples.

## Key numbers

Aggregate Table 1 ranges for canned tomato paste, in `ppm`:

| Metal | Range or detection pattern | Source comparator |
| --- | --- | ---: |
| Pb | ND in all ten samples | 0.200 |
| Ni | ND in all ten samples | 0.200 |
| Cu | 0.059-0.118 | 2.000 |
| Co | 0.036-0.105 | 0.100 |
| Fe | 3.032-7.651 | 40.000 |
| Cr | 0.099-0.268 | 0.050 |
| Cd | 0.047-0.055 | 0.003 |
| Mn | 0.039-0.086 | 0.140 |
| Zn | ND in nine samples; 0.029 in one sample | 6.000 |

The text states that lead and nickel were not detected in all canned tomato pastes, copper, iron, and manganese were detected at low concentrations, and chromium and cadmium were high relative to their respective permissible limits. Daily-intake estimates in Table 2 were below the tolerable values cited by the source. Hazard-index values in Table 3 ranged from 0.0648 to 0.8194. The source's carcinogenic-risk-index calculations for Cd and Cr fell within the EPA-cited acceptable range of 1.0E-6 to 1.0E-4.

## Methods (brief)

Ten canned tomato-paste products were removed from tins, dried in foil in a microwave oven at 70 C, and ground to powder. Each 0.5 g dried sample was digested with concentrated HNO3, HClO4, and HF in a 5:1:1 mixture, filtered, diluted with distilled water, and analyzed by atomic absorption spectrophotometry. The authors calculated daily intake, hazard quotient, hazard index, carcinogenic risk index, and total cancer risk using EPA-style equations and a 62 kg body weight.

## Implications

This source contributes Nigeria-market canned tomato-paste occurrence context for Pb, Ni, Cu, Co, Fe, total Cr, Cd, Mn, and Zn. It is directly relevant to tomato-paste product routing, while the coded sample design and explicit brand list in the methods mean public-facing extraction should remain aggregate unless a later private evidence register needs code-level review. It is not suitable for Cr-VI routing because chromium is reported only as total Cr, and it is not direct evidence for whole canned tomatoes because every sampled product was tomato paste.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the DOI, abstract, methods, Table 1, daily-intake table, hazard-index table, and discussion were readable.
- DOI verified from the first page as `10.3329/jbs.v28i0.44705`; DOI, raw handle `MFK_uroko2019`, and cite-key checks found no existing source page before creation.
- All aggregate ranges in Key numbers were calculated from Table 1 without unit conversion. Units are preserved as `ppm`.
- Speciation: chromium is total Cr. The source does not report Cr-VI.
- Brand firewall: the methods section maps sample codes to named products; this page therefore reports only aggregate ranges and detection patterns, not code-level or brand-level contamination values.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [1b4710498](https://github.com/paleofoundation/heavymetalindex/commit/1b4710498) | 2026-06-09 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [77fbf2429](https://github.com/paleofoundation/heavymetalindex/commit/77fbf2429) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
