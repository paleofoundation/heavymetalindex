---
type: source
raw_handle: AUTO_gap-cashews-cd-2021-10-31083-0003-925x-71-66
cite_key: nkwocha2021-cashew-nuts-metals
title: "Chemical composition of raw cashew (Anacardium occidentale) nuts sourced from Enugu State, South Eastern Nigeria"
authors: [Nkwocha CC, Uchendu NO, Amujiri AN]
year: 2021
publication: "Journal of Food Safety and Food Quality"
doi: 10.2376/0003-925X-71-66
source_type: peer-reviewed
evidence_tier: A
license: "copyrighted"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-cashews-cd_2021_10-31083-0003-925x-71-66.pdf
metals: [Cd, Pb, tHg]
ingredients: ["[[ingredients/cashews]]"]
products: ["[[products/cashews]]"]
matrices: [cashew-nuts]
jurisdictions: [NG]
near_duplicates: []
sample_n: "1 composite (triplicate analytical determinations)"
sample_population: "fresh cashew nut samples from Obukpa-Lejja, Nsukka, Enugu State, Nigeria; collected 2 April 2019"
updated: 2026-06-09
sources: 1
audience: [regulator, educator, consumer, app]
---

# Nkwocha et al. 2021 - metals in raw cashew nuts from Enugu State

Nkwocha and coauthors measured heavy metals, antinutrients, physicochemical properties, and PAHs in raw cashew nuts from Enugu State, Nigeria. The source is routeable to cashews because it reports numeric Cd, Pb, and Hg concentrations in the edible nut matrix. Values are summary-level, not sample-level distributions.

## Key numbers

- Raw cashew nuts contained Cd 0.0703 +/- 0.0096 ppm, Pb 0.0773 +/- 0.0047 ppm, and Hg 0.8013 +/- 0.0785 ppm. Values are mean +/- standard deviation of triplicate analytical determinations of a single composite sample (Table 1, p. 68).
- The same summary reports PAHs and antinutrients, but those are context only for Heavy Metal Index routing.
- The PDF describes frying in vegetable oil for 10 minutes to remove seeds from pods, then oven-drying at 40-60 C, dehulling, and grinding before analysis.

## Methods (brief)

Heavy metals (Hg, Pb, Cd) were analyzed using an AA240 atomic absorption spectrophotometer (Agilent Technologies, USA per equipment list on p. 67; heavy-metal section text reads "variant AA240" - likely a typo for "Varian", whose AAS line Agilent acquired in 2010) following APHA (1995). The paper does not describe a cold-vapor accessory or DMA for Hg, which is unusual for low-level mercury quantification. Reporting basis is ppm for the dehulled, ground nut matrix.

## Implications

Certification: summary-level cashew occurrence evidence for Cd, Pb, and tHg from one Nigerian source. Not distribution-ready - it contributes one composite-sample data point per analyte. Courses: example of processed sample preparation needing basis notes (frying in oil before analysis). App: supports a Nigeria/Enugu context flag for cashew nuts.

## Wiki pages this source may touch

- [[products/cashews]]
- [[ingredients/cashews]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/mercury]]

## Verification notes

The PDF provides numeric heavy-metal values and author/journal/DOI metadata. It does not provide sample-level values or a clear market sample count, so this should not be treated as a distribution-ready source without additional extraction.

Two caveats a hostile reviewer would seize on, both flagged for synthesis pages relying on this source:

1. The Hg value (0.8013 ppm) is roughly 16x the CODEX 1995 reference (0.05 mg/kg) that the paper itself cites in Table 1, yet the paper's Conclusion states results are "within safe limits". The Cd value (0.0703 ppm) also exceeds its cited reference (0.05 mg/kg). The internal contradiction is in the source, not the wiki, but synthesis should not propagate the "within safe limits" framing.
2. Mercury at sub-ppm concentrations is conventionally measured by cold-vapor AAS, direct mercury analyzer (DMA), or ICP-MS. The paper reports flame AAS (no cold-vapor accessory described) for Hg, which is methodologically unusual at this concentration range. The high Hg value may reflect either a real signal or analytical artifact; treat as B-tier evidence for Hg until corroborated by a cold-vapor or DMA method.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [f1d2ac012](https://github.com/paleofoundation/heavymetalindex/commit/f1d2ac012) | 2026-06-09 | audit: nkwocha2021-cashew-nuts-metals revised per autonomous audit |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c6671](https://github.com/paleofoundation/heavymetalindex/commit/8707c6671) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84efb](https://github.com/paleofoundation/heavymetalindex/commit/140e84efb) | 2026-06-03 | refresh manual fetch generated outputs |
<!-- END: hmi-page-history -->
