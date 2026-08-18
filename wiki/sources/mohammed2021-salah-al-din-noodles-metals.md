---
type: source
raw_handle: MFK_mohammed2021
cite_key: mohammed2021-salah-al-din-noodles-metals
title: "Evaluation of mycotoxins and heavy metals pollution in some types of noodles in local markets"
authors: [Mohammed Jameel Mohammed, Marwa Ibrahem Abd, Saif Ali Khishan]
year: 2021
publication: "Journal of Physics: Conference Series"
doi: "10.1088/1742-6596/1879/2/022006"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 3.0"
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/mohammed2021.pdf"
raw_sha256: "ac214a784e7ed8b0156e215ae0272fbfb4641c80e6ad1c218a0343e428bc3a4f"
access_url: "https://doi.org/10.1088/1742-6596/1879/2/022006"
metals: [Cu, Cd, Pb]
ingredients: ["[[ingredients/noodles]]", "[[ingredients/wheat]]"]
products: ["[[products/pasta-wheat-based]]", "[[products/other-grain-products]]"]
matrices: [instant-noodles, noodles, cereal-grain]
jurisdictions: [IQ]
near_duplicates: []
sample_n: 10
sample_population: "Ten types of noodles collected from markets in Salah Al-din Governorate, Iraq, with three replicates; the heavy-metal method describes analysis of 10 duplicate noodle samples."
updated: 2026-06-09
---

# Mohammed et al. 2021 — Copper, cadmium, and lead in noodles from Salah Al-din markets

## Overview

Mohammed and colleagues measured mycotoxins, fungi, and selected heavy metals in ten noodle types collected from markets in Salah Al-din Governorate, Iraq. The heavy-metal occurrence portion reports per-sample copper and cadmium values in Figures 4 and 5 (n=10) plus the abstracted ranges, and a censored Pb result of less than 0.1 ppm in all ten samples. The paper reports total-element Cu, Cd, and Pb only; it does not report arsenic, mercury, chromium, or metal speciation.

## Key numbers

| Metal | Reported finding | Unit | n | Source location |
| --- | --- | --- | --- | --- |
| Cu | range 0.50 - 1.23; mean approx 0.89; median approx 0.84 | ppm | 10 | Abstract; Section 3.3; Figure 4 |
| Cd | range 0.05 - 0.31; mean approx 0.14; median approx 0.13 | ppm | 10 | Abstract; Section 3.3; Figure 5 |
| Pb | less than 0.1 in all samples | ppm | 10 | Abstract; Section 3.3; Figure 6 |

Per-sample bar values are reported in Figures 4 (Cu), 5 (Cd), and 6 (Pb) and were used to compute the distribution statistics above. The source identifies samples by flavor or product descriptor; one descriptor embeds a brand identifier, so per-sample values are not tabulated against descriptors here (Part 12).

## Methods (brief)

Ten noodle types were collected from Salah Al-din Governorate markets with three replicates. The heavy-metal method says 10 duplicate noodle samples were dried in an electric oven, ashed in a muffle furnace at 600 C to stable weight, taken up in 5 mL of 5% HNO3, filtered through Whatman No. 1, and analyzed for Cd, Cu, and Pb by atomic absorption spectrophotometry using a Shimadzo-6200 instrument. The source reports total elements only and does not give LOD or LOQ values in the extracted text.

## Implications

This source contributes Iraq-market noodle occurrence ranges plus per-sample distribution statistics (n=10) for total Cu and total Cd, and a censored-below-0.1 ppm result for total Pb. It is useful for routing to broad noodle and wheat-based pasta product pages. It is not suitable for iAs, MeHg, or Cr-VI routing because those analytes were not measured.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the title page, DOI, abstract, sampling description, heavy-metal method, and Section 3.3 were readable. Figures 4 (Cu), 5 (Cd), and 6 (Pb) were re-read directly from the PDF for per-sample bar values.
- DOI verified from the page header as `10.1088/1742-6596/1879/2/022006`; DOI, raw handle `MFK_mohammed2021`, and cite-key checks found no existing source page before creation.
- All metal ranges and per-sample distribution statistics in Key numbers were checked against the abstract, Section 3.3, and Figures 4-6. Units are preserved as `ppm`; no conversion to mg/kg or ppb was performed. The figure-derived per-sample values are: Cu 0.82, 0.65, 1.23, 0.80, 1.21, 0.86, 0.76, 0.50, 0.98, 1.08; Cd 0.14, 0.16, 0.19, 0.08, 0.31, 0.09, 0.16, 0.05, 0.12, 0.10; Pb all <0.1 ppm.
- Speciation: Cu, Cd, and Pb are reported as total elements. The paper does not report arsenic, mercury, chromium, or metal speciation.
- Brand firewall: the source's Section 2.1 sample list contains 10 flavor or product descriptors, one of which embeds a brand identifier. The wiki page reports the range and distribution statistics across the 10 samples but does not pair per-sample values with their descriptors, so no brand attribution attaches to any contamination value (Part 12).
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.
- 2026-06-09 autonomous audit: GPT-style 5-check audit returned PROMOTE with one ⚠️ on figure readability. Independent verification confirmed Figures 4-6 do show readable per-sample bar values; Key numbers, Implications, and Verification notes updated to add per-sample distribution statistics for Cu (n=10) and Cd (n=10) and to clarify the Part 12 reasoning for not pairing per-sample values with descriptors. Numerical fidelity, slug vocabulary, speciation/methods, and wiki/HMTc firewall checks all clean.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [3578c74dd](https://github.com/paleofoundation/heavymetalindex/commit/3578c74dd) | 2026-06-09 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
