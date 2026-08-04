---
type: source
raw_handle: AUTO_gap-infant-formula-powder-non-soy-jmcs-v66i2-1694
cite_key: floresaguilar2022-infant-formula-lead-spe-ce
title: "Selective Pb(II)-Imprinted Polymer for Solid Phase Extraction in the Trace Determination of Lead in Infant Formula by Capillary Electrophoresis"
authors: ["Juan Francisco Flores-Aguilar", "Gabriela Islas", "Jose Antonio Rodriguez", "Maria Elena Paez-Hernandez", "Carlos Andres Galan-Vidal", "Israel Samuel Ibarra"]
year: 2022
publication: "Journal of the Mexican Chemical Society"
doi: "10.29356/jmcs.v66i2.1694"
source_type: peer-reviewed
evidence_tier: A
raw_path: "raw/manual-fetch/seasonal-geographic-variance/ingested/gap-infant-formula-powder-non-soy-ca_2022_10-29356-jmcs-v66i2-1694.pdf"
raw_sha256: c31730d2a213e15d0f0d66d4bf145e8fb16d58a3c1eb1a1e738074babebbe943
access_url: "https://doi.org/10.29356/jmcs.v66i2.1694"
metals: [Pb]
ingredients: ["[[ingredients/infant-formula-powder]]"]
products: ["[[products/infant-formula-powder]]", "[[products/infant-formula-powder-non-soy]]"]
matrices: [infant-formula-powder, reconstituted-infant-formula]
jurisdictions: [MX]
near_duplicates: []
sample_n: 20
sample_population: "Twenty commercial infant formula samples analyzed for Pb after reconstitution according to manufacturer instructions; positive samples are reported only as anonymized sample numbers."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
---

# Flores-Aguilar et al. 2022 - Pb in infant formula by SPE-CE

## Overview

This method-development paper also reports direct Pb occurrence results for 20 commercial infant formula samples. Four of 20 samples were positive for Pb, with SPE-CE and ETAAS results compared on the same positive samples.

## Key numbers

**Lead occurrence in positive infant formula samples (Table 5; ug/kg):**

| Anonymized positive sample | SPE-CE Pb | ETAAS Pb |
| --- | ---: | ---: |
| 1 | 10.26 (RSD 1.47%) | 11.19 (RSD 1.74%) |
| 2 | 13.21 (RSD 0.90%) | 13.77 (RSD 1.14%) |
| 3 | 27.73 (RSD 1.50%) | 28.43 (RSD 2.21%) |
| 4 | 42.59 (RSD 1.51%) | 44.00 (RSD 1.94%) |

**Source-reported summary and method performance:**

- Four of 20 commercial infant formula samples were positive for Pb.
- The abstract reports positive-sample Pb concentrations ranging from 10 to 43 ug/kg.
- The proposed SPE-CE method had an LOD of 0.5 ug/L and LOQ of 1.5 ug/L.
- Intra- and inter-day repeatability were less than 5% RSD.
- Recovery was 104% (RSD 3.5%) at 5 ug/L and 99% (RSD 2.7%) at 15 ug/L.
- ANOVA found no significant difference between SPE-CE and ETAAS results (alpha=0.05).

## Methods (brief)

The paper synthesized a Pb(II)-imprinted polymer using methacrylic acid and 4-vinylpyridine functional monomers with ethylene glycol dimethacrylate as cross-linker. Infant formula was reconstituted as instructed by the manufacturer (4.5 g in 30 mL water), protein was precipitated with 2% acetic acid, and the supernatant was passed through an imprinted-polymer SPE cartridge before capillary electrophoresis. Positive samples were cross-checked by electrothermal AAS after nitric acid/hydrogen peroxide microwave digestion using a CEM MARS 6 system. The capillary-electrophoresis system was a Beckman Coulter P/ACE 5500-DAD; ETAAS used an Agilent/Varian 240FS AA spectrophotometer with GTA 120 graphite tube atomizer.

## Implications

Standards work: This source contributes direct Pb occurrence evidence for commercial infant formula, but the product matrix is tied to a method-validation study and only the four positive samples are numerically tabulated.

Courses: Useful for showing why method-validation papers can still contain usable occurrence values when real commercial samples are analyzed and positive results are reported.

App: Provides Pb occurrence fields for positive infant formula samples. The source does not support product-brand comparison.

Microbiome: Not addressed.

## Wiki pages this source may touch

- [[metals/lead]]
- [[ingredients/infant-formula-powder]]
- [[products/infant-formula-powder]]
- [[products/infant-formula-powder-non-soy]]
- [[regulations/eu-1881-2006-contaminants-superseded]]

## Verification notes

- Fresh auto-fetch ingest 2026-05-19 from the gap-driven infant-formula wishlist. The wishlist target metal was Ca because the paper discussed Ca as an interferent, but the usable occurrence endpoint is Pb.
- Strict brand firewall: the paper reports only anonymized positive sample numbers in the result table. This page does not name or rank commercial brands.
- The "10 to 43 ug/kg" range in the abstract is reconciled with Table 5 values of 10.26-42.59 ug/kg by preserving the exact Table 5 values and noting the abstract's rounded range.
- Methods vendor/equipment names are retained under Part 12 Exception 2.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [aecfcae63](https://github.com/paleofoundation/heavymetalindex/commit/aecfcae63) | 2026-05-19 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
