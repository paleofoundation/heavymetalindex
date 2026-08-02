---
type: source
raw_handle: MFK_bralatei2017
cite_key: bralatei2017-seaweed-inorganic-arsenic-field-method
title: "A field deployable method for a rapid screening analysis of inorganic arsenic in seaweed"
authors: [Bralatei E, Nekrosiute K, Ronan J, Raab A, McGovern E, Stengel DB, Krupp EM, Feldmann J]
year: 2017
publication: "Microchimica Acta"
doi: "10.1007/s00604-017-2151-1"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/bralatei2017.pdf"
raw_sha256: "140f5d17633e1dfb43046781b9f0ff1bbeb27fe2a09ec680ed1f5bc8aaadb3a5"
access_url: "https://doi.org/10.1007/s00604-017-2151-1"
metals: [iAs, tAs]
ingredients: ["[[ingredients/seaweed]]"]
products: ["[[products/seaweed-kelp-foods]]"]
matrices: [seaweed, kelp, dry-weight]
jurisdictions: [GB, JP, CN, KR, IE]
near_duplicates: []
sample_n: 47
sample_population: "Thirteen commercial edible seaweed samples purchased online and from shops/supermarkets around Aberdeen, UK, with packaging origins Japan, China, and Korea, plus thirty-four Irish Laminaria digitata kelp-part samples from western Ireland."
updated: 2026-06-08
---

# Bralatei 2017 - Seaweed inorganic arsenic field method

## Overview

Bralatei and colleagues developed and validated a field-deployable method for screening inorganic arsenic in seaweed, using HPLC-ICP-MS as the comparison method. The study analyzed 13 store-bought edible seaweeds and 34 *Laminaria digitata* kelp-related samples, reporting iAs concentrations on a dry-weight basis. Total arsenic was measured for context, but the routeable occurrence analyte in this source is inorganic arsenic.

## Key numbers

The study analyzed `47` samples: `13` commercial edible seaweeds (`3` Kombu, `4` Nori, `3` Wakame, and `3` Hijiki) plus `34` *Laminaria digitata* samples related to different parts of kelp collected from western Ireland.

Method validation and performance values:

| Finding | Source-reported value |
| --- | --- |
| Field-method recovery during optimization | `80-94%` iAs recovery |
| Average reproducibility/error | `+-19%` |
| HPLC-ICP-MS comparison | slope `1.03`, `R2 = 0.70`, no bias reported |
| Field-method observed LOQ | around `0.05 mg kg−1 (dry weight)` |
| Field-method time | within `1 h` |
| ERM-CD200 total As QC | `53 +- 2.6 mg kg−1`, certified `55 +- 4 mg kg−1` |
| ERM-BCR-211 total As QC | `0.22 +- 0.016 mg kg−1`, certified `0.26 +- 0.013 mg kg−1` |
| ERM-BCR-211 iAs QC | `0.11 mg kg−1`, certified `0.124 +- 0.011 mg kg−1` |

For the 13 commercial edible seaweed samples, total As concentrations varied from `19` to `235 mg kg−1`. HPLC-ICP-MS showed Hijiki samples with iAs concentrations `34-75 mg kg−1`, while all other edible seaweed samples were below `1 mg kg−1`. Field-method triplicates gave Hijiki iAs concentrations from `53 +- 7` to `76 +- 20 mg kg−1`; the lowest field-method iAs concentration reported for the commercial set was `0.3 +- 0.01 mg kg−1`.

For the 34 Irish *Laminaria digitata* kelp-related samples, HPLC-ICP-MS iAs ranged from `2.2-87 mg kg−1` with an average of `29 +- 19 mg kg−1`. The field method gave `3-73 mg kg−1` with an average of `34 +- 18 mg kg−1`. A paired Student's t-test comparing average iAs by field method versus HPLC-ICP-MS reported `p = 0.217`.

## Methods (brief)

Commercial edible seaweeds and Irish kelp samples were air-dried, milled, and analyzed for iAs by a field-deployable Gutzeit-style method: diluted HNO3 extraction, selective volatilization of iAs as arsine, and trapping on HgBr2-impregnated filter paper read by a Wagtech digital Arsenator. HPLC-ICP-MS used an Agilent 1100 HPLC with an Agilent 7500c ICP-MS, a Hamilton PRP-X100 anion-exchange column, carbonate buffer mobile phase, and rhodium internal standard. Total As was measured by ICP-MS after microwave digestion of `200 mg` sample with `2 mL HNO3 (70%)` and `1 mL H2O2 (30%)`.

## Implications

This source provides edible seaweed and kelp iAs evidence with explicit analytical cross-validation against HPLC-ICP-MS. Hijiki and Irish kelp samples are high-iAs context for the seaweed-kelp foods category, while Nori, Wakame, and Kombu in the commercial set were below `1 mg kg−1` iAs in the main text. Total arsenic values should remain context only and not substitute for iAs.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; main-text occurrence and method-validation values were checked in the extracted text.
- DOI `10.1007/s00604-017-2151-1`, raw handle `MFK_bralatei2017`, and cite-key checks found no existing source page before creation.
- The detailed commercial-sample table is in the paper's supplementary information; the source page uses only main-text ranges and examples available in the extracted PDF text.
- Speciation: the source's routeable occurrence values are inorganic arsenic (`iAs`). Total As is included in frontmatter and body only because the paper reports total As context for the same seaweed samples.
- Units are preserved as `mg kg−1` dry weight; no conversion was performed.
- Brand firewall: commercial seaweed samples were purchased retail/online, but no brand names are attached to contamination values here.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [ff6cbad10](https://github.com/paleofoundation/heavymetalindex/commit/ff6cbad10) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
