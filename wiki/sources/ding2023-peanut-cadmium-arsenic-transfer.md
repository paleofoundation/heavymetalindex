---
type: source
raw_handle: MFK_agronomy-13-02778
cite_key: ding2023-peanut-cadmium-arsenic-transfer
title: "Characteristics and Mechanisms of Soil Co-Contamination Affecting the Transfer of Cadmium and Arsenic in Peanut (Arachis hypogaea L.)"
authors: [Ding C, Hussain S, Xie X, Zhou Z, Wang X]
year: 2023
publication: "Agronomy"
doi: "10.3390/agronomy13112778"
source_type: peer-reviewed
evidence_tier: B
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/agronomy-13-02778.pdf"
raw_sha256: "95ec9add71bf3bf318a4cfec9b02260532cfcc1f5c2d8fa8821f84af7f5af9eb"
access_url: "https://doi.org/10.3390/agronomy13112778"
metals: [Cd, tAs]
ingredients: ["[[ingredients/peanuts]]"]
products: ["[[products/peanuts]]"]
matrices: [peanuts, soil]
jurisdictions: [CN]
near_duplicates: []
sample_n: 4
sample_population: "Outdoor pot experiment using peanut cultivar Ganhua No. 5 in red soil from China, with four replicate pots per treatment: control, single Cd addition, single As addition, and Cd-As co-contamination."
updated: 2026-06-08
---

# Ding 2023 - Peanut cadmium and arsenic transfer

## Overview

Ding and colleagues studied how cadmium and arsenic co-contamination in soil affected transfer into peanut plants, including edible peanut grains. The source is an experimental outdoor pot study, not a market-basket survey, so its peanut-grain values are supply-chain transfer evidence rather than consumer-market occurrence. Arsenic is reported as total/unspecified As; no inorganic arsenic speciation is reported.

## Key numbers

The experimental soil initially contained total Cd `0.14 mg/kg` and total As `11.78 mg/kg`. Four soil treatments were used: control, single Cd contamination at `0.6 mg/kg`, single As contamination at `40 mg/kg`, and Cd-As co-contamination at `0.6 mg/kg Cd + 40 mg/kg As`. After twelve months of soil aging, available Cd was `0.29 +- 0.03 mg/kg` under Cd-As and `0.21 +- 0.06 mg/kg` under Cd alone; available As was `9.76 +- 0.02 mg/kg` under Cd-As and `8.65 +- 0.03 mg/kg` under As alone.

Table 2 reports Cd and As content in peanut plant parts as mean +- SD, `n = 4`, in `mg/kg`. The edible product-relevant grain values are:

| Treatment | Peanut grain Cd (`mg/kg`) | Peanut grain As (`mg/kg`) |
| --- | --- | --- |
| Control | `0.13 +- 0.04` | `0.13 +- 0.03` |
| Single Cd contamination | `0.77 +- 0.14` | not reported for this treatment |
| Single As contamination | not reported for this treatment | `0.44 +- 0.09` |
| Cd-As co-contamination | `1.26 +- 0.30` | `0.34 +- 0.04` |

The same table reports whole-plant total accumulation amounts of Cd `166 +- 25.0 µg` in control, `1126 +- 189 µg` under Cd, and `1588 +- 334 µg` under Cd-As. Total As accumulation was `49.6 +- 8.11 µg` in control, `153 +- 17.3 µg` under As, and `215 +- 23.0 µg` under Cd-As.

Table 3 reports root-to-grain translocation factors. For Cd, root-grain TF was `0.10 +- 0.03` in control, `0.08 +- 0.00` under Cd, and `0.11 +- 0.01` under Cd-As. For As, root-grain TF was `0.20 +- 0.03` in control, `0.11 +- 0.02` under As, and `0.11 +- 0.01` under Cd-As.

## Methods (brief)

The authors used outdoor pots containing `8 kg` of red soil and aged the amended soils for about twelve months before sowing peanuts in April 2021. Mature plants were harvested at the end of August and separated into roots, shoots, shells, and grains. Dried plant powder (`0.25 g`) was digested with `5 mL` nitric acid and `3 mL` hydrogen peroxide in high-pressure sealed digestion vessels; plant-certified reference materials GSB-23a for Cd and GSB-6a for As were used for quality control, with Cd recovery `95%` to `103%` and As recovery `94-106%`. Available soil Cd and As were measured by ICP-MS after CaCl2 and NH4H2PO4 extraction, respectively.

## Implications

This source provides peanut supply-chain evidence showing that Cd-As soil co-contamination increased measured Cd in peanut grains relative to single-Cd treatment, while measured total As in grains was lower under Cd-As co-contamination than under single-As treatment. The values should not be treated as market-distribution concentrations because the study used experimental soil amendments and four replicate pots per treatment.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; Table 2 and Table 3 values were checked directly in the extracted text.
- DOI `10.3390/agronomy13112778`, raw handle `MFK_agronomy-13-02778`, and cite-key checks found no existing source page before creation.
- Product-routing frontmatter is limited to `peanuts`; soil-only values are retained as supply-chain context and not routed as product occurrence.
- Speciation: arsenic is reported as total/unspecified As. The paper does not report inorganic arsenic.
- Units are preserved as source-reported `mg/kg` and `µg`; no conversion was performed.
- Brand firewall: no product brands were involved.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
