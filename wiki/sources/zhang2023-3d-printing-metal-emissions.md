---
type: source
raw_handle: AUTO_auto-fabric-protectants-tas-product_2023_10-1016-j-scitotenv-2022-160512
cite_key: zhang2023-3d-printing-metal-emissions
title: "Metal compositions of particle emissions from material extrusion 3D printing: Emission sources and indoor exposure modeling"
authors: [Zhang Q, Weber R J, Luxton T P, Peloquin D M, Baumann E J, Black M S]
year: 2023
publication: "Science of the Total Environment"
doi: 10.1016/j.scitotenv.2022.160512
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-fabric-protectants-tas-product_2023_10-1016-j-scitotenv-2022-160512.pdf
metals: [Al, Cr, Cd, tAs, Pb, Ni, Sn, Sb]
ingredients: []
products: []
matrices: [3d-printer-filament, emitted-particles, indoor-air]
jurisdictions: [US]
near_duplicates: []
sample_n: 8
sample_population: "Eight material-extrusion 3D-printing filaments and their emitted particle samples, including PLA, nylon, bronze-filled PLA, stainless-steel-filled filament, and flame-retarded nylon."
updated: 2026-06-09
---

# Zhang et al. 2023 — Metal emissions from material-extrusion 3D printing

## Overview

Zhang and colleagues measured metals in raw 3D-printing filaments and in particles emitted during material-extrusion printing, then modelled indoor exposure scenarios. The paper is routeable as durable-goods exposure and testing-method evidence, not as HMTc product-occurrence evidence for fabric protectants despite the auto-fetch row that retrieved it. Its key contribution is source attribution: some metals came from filaments, while boron, arsenic, manganese, and lead often appeared in emitted particles without being detected in the corresponding raw filament.

## Key numbers

- Study set: 8 filaments and matched emitted-particle samples; filaments included three pure PLA filaments, two composite PLA filaments, two nylon-based composite filaments, and one stainless-steel-containing metal filament.
- Filament metals: bronze PLA3 was 80% by weight bronze, and measured metals accounted for 79.8% of filament weight; the stainless-steel metal filament had measured total metals equal to 95.9% of filament mass.
- Particle detections: silicon was detected in all 8 emitted-particle samples; boron was detected in 7 of 8; magnesium, calcium, manganese, zinc, arsenic, strontium, tin, and lead were each detected in 5 to 6 of 8 emitted-particle samples.
- Emission yields: silicon had the highest elemental yield, 15.3-248 ng/g for PLA-based filaments and 614-2251 ng/g for nylon and metal-composite filaments.
- Reported yields for toxicologically relevant metals included Cr at 5.51 ng/g, Cu at 0.43-1.31 ng/g, tAs at 0.002-0.76 ng/g, Cd at 0.02 ng/g, Sb at 0.24-1.96 ng/g, and Tl at 0.32 ng/g.
- Metal-composite transfer was limited: in metal-composite filaments where metals made up as much as 95.9% of filament weight, metals made up only about 1-2% of emitted-particle weight, or below 0.1% when silicon was excluded.
- Exposure modelling found residential Mn, Cd, and Pb exposure concentrations from 3D printing below most comparison residential PM2.5 literature values, while some Zn, As, Cu, Cr, Co, Sb, and Se scenarios were comparable to or above selected indoor-comparison cases.

## Methods (brief)

The team printed filaments in stainless-steel exposure chambers with one air exchange per hour. Particle number and size distributions were measured with SMPS and OPS instruments, while particle samples and unused filament pieces were microwave-acid-digested and analysed by ICP-MS. The metal yield calculation normalised emitted elemental mass to filament mass consumed; the partition-factor analysis compared element concentrations in emitted particles with raw-filament concentrations. Species were not speciated: arsenic is total arsenic and chromium is total chromium, not Cr-VI.

## Implications

Certification: The paper does not provide a finished HMTc product-row distribution because the wiki currently has no locked 3D-printer-filament or printer-emissions product category. It should not be pooled into fabric-protectant occurrence thresholds.

Courses: Useful for supplier and durable-goods modules on heated polymer processing, additive transfer, and printer-hardware contribution to airborne metal exposure.

App: Supports a context warning that 3D-printing emissions can include Pb, tAs, Cr, Cd, Sb, Sn, and other metals even when the raw filament does not list those metals as formulation components.

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/arsenic]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/aluminum]]
- [[metals/tin]]
- [[testing/icp-ms]]
- [[products/fabric-protectants]]

## Verification notes

- DOI, authors, journal, and publication year were read from the PDF title page and citation block.
- The auto-fetch row labelled the target as `fabric-protectants`; the actual paper is about material-extrusion 3D-printing filaments and emitted particles. The source page therefore leaves `products` empty and lists the fetched product page only as a may-touch/misroute context, not as direct evidence.
- Arsenic and chromium were measured as total elemental concentrations by ICP-MS; no inorganic arsenic or Cr-VI substitution is made.
- Matrix vocabulary note: `indoor-air` is already used in the wiki; `3d-printer-filament` and `emitted-particles` are source-specific matrix descriptors retained so the routing layer does not misclassify this as fabric-protectant occurrence evidence. If a durable-goods 3D-printing category is locked later, these should be normalized into that taxonomy.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [728fe7548](https://github.com/paleofoundation/heavymetalindex/commit/728fe7548) | 2026-06-09 | minor | Narrative text revised |
| [3dd241dfc](https://github.com/paleofoundation/heavymetalindex/commit/3dd241dfc) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
