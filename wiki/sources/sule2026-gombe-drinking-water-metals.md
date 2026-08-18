---
type: source
raw_handle: AUTO_auto-infant-bottles-cd-product-2026-10-64290-bima-v10i1a-1514
cite_key: sule2026-gombe-drinking-water-metals
title: "Assessment of Carcinogenic and Non-carcinogenic Health Risks of Metals in the Drinking Water of Gombe Local Government Area, Nigeria"
authors: [Sule S, Olowolafe E A, Dabi D D]
year: 2026
publication: "Bima Journal of Science and Technology"
doi: 10.64290/bima.v10i1A.1514
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-infant-bottles-cd-product_2026_10-64290-bima-v10i1a-1514.pdf
raw_sha256: decb3a02d801d8233281520352caa79cb48ad8dea14c95563ecd98a8c6c785c2
metals: [Pb, Cd, Cr, Mn, Fe, Cu]
ingredients: [water]
products: [bottled-drinking-water]
matrices: [drinking-water, tap-water, borehole-water, well-water, vendor-water, rainwater, sachet-water, bottled-water]
jurisdictions: [NG]
near_duplicates: [raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-infant-bottles-pb-product_2026_10-64290-bima-v10i1a-1514.pdf]
sample_n: 87
sample_population: "Drinking-water samples from Gombe LGA, Nigeria: tap water (n=10), wells (n=5), water vendors (n=11), harvested rainwater (n=7), sachet-water brands (n=36), bottled-water brands (n=7), plus other ward-level source coverage described by the authors."
updated: 2026-06-02
---

# Sule et al. 2026 - Metals and modeled health risk in Gombe drinking water

## Overview

Sule, Olowolafe, and Dabi assessed Pb, Fe, Cu, Cr, Mn, and Cd in 87 drinking-water samples from Gombe Local Government Area, Nigeria, including tap, borehole, well, vendor, rainwater, sachet-water, and bottled-water sources. The paper reports source-type chronic daily intake, hazard quotient, hazard index, and incremental lifetime cancer risk outputs for adults, children, and infants. It is useful for drinking-water source context in Nigeria and for source-specific risk documentation, but the PDF does not print the underlying AAS concentration table, so the modeled risk outputs should not be used as benchmark concentration values.

## Key numbers

Sample frame and source coverage:

| Water source | Sample count reported |
|---|---:|
| Tap water | 10 |
| Wells | 5 |
| Water vendors | 11 |
| Harvested rainwater | 7 |
| Sachet-water brands | 36 |
| Bottled-water brands | 7 |
| Total water samples | 87 |

Table 3 reports chronic daily intake (CDI) values by age group and water source. The highest source-type mean CDI values were:

| Age group | Highest mean CDI source | Mean CDI | Next highest mean CDI source | Mean CDI |
|---|---|---:|---|---:|
| Adults | Well water | 1.080039 | Sachet water | 0.961911 |
| Children | Well water | 1.019867 | Sachet water | 0.908321 |
| Infants | Well water | 0.554275 | Sachet water | 0.493652 |

Table 4 reports hazard index (HI) values. The source classifies tap, well, and sachet water as high non-cancer risk for all three age groups:

| Age group | Tap HI | Well HI | Sachet HI | Bottled-water HI |
|---|---:|---:|---:|---:|
| Adults | 240.3569 | 353.2654 | 311.6292 | 0.277047 |
| Children | 226.9661 | 333.5847 | 294.268 | 0.261562 |
| Infants | 123.3509 | 181.2968 | 159.9284 | 0.142136 |

Table 5 and the surrounding text report incremental lifetime cancer risk (ILCR) for Cr, Pb, and Cd. Source-reported harmful-risk examples include:

| Age group | Metal | Water source | ILCR |
|---|---|---|---:|
| Adults | Cr | Sachet water | 2.198e-2 |
| Adults | Cr | Well water | 2.4782e-2 |
| Adults | Cr | Tap water | 1.6992e-2 |
| Adults | Pb | Tap water | 1.81e-4 |
| Adults | Pb | Well water | 2.03e-4 |
| Adults | Pb | Sachet water | 1.75e-4 |
| Adults | Cd | Sachet water | 4.3e-4 |
| Children | Cr | Tap water | 1.6046e-2 |
| Children | Cr | Well water | 2.3402e-2 |
| Children | Cr | Sachet water | 2.0755e-2 |
| Children | Cd | Well water | 5.9e-4 |
| Children | Cd | Vendor water | 2.48e-4 |
| Children | Cd | Sachet water | 4.07e-4 |
| Infants | Cr | Tap water | 8.72e-3 |
| Infants | Cr | Well water | 1.2718e-2 |
| Infants | Cr | Sachet water | 1.128e-2 |
| Infants | Cd | Sachet water | 2.21e-4 |
| Infants | Cd | Well water | 3.21e-4 |

## Methods (brief)

The authors collected drinking-water samples across 11 wards of Gombe LGA using purposive sampling. They report analysis of Pb, Fe, Cu, Cr, Mn, and Cd with air-acetylene flame AAS using element-specific hollow cathode lamps. Health-risk outputs were calculated using chronic daily intake, hazard quotient, hazard index, and incremental lifetime cancer risk equations with USEPA-style exposure parameters for adults, children, and infants.

The paper states that metal concentrations were measured, but the PDF tables visible in the article provide exposure-model parameters and modeled risk outputs rather than a direct concentration table by water source. Treat Cr as total chromium unless a later full data table proves otherwise; the article does not report Cr(VI) speciation. It also does not report arsenic or mercury.

A methodological caveat applies to the Cr ILCR values: Table 2 lists a cancer slope factor of 41.0 mg L⁻¹/day for Cr, which is the USEPA IRIS oral slope factor for Cr(VI). The authors apply this slope factor to total Cr without speciation, which inflates the modeled ILCR for chromium relative to the value that would result from applying the Cr(VI) factor only to the hexavalent fraction. The paper's headline conclusion that "chromium is the main cause of lifetime cancer" rests on that assumption.

## Implications

Certification: Not a candidate benchmark concentration source because raw metal concentrations are not printed in the PDF; use as Nigeria drinking-water context and as a retrieval target for the missing concentration table.

Courses: Useful for explaining how source-type water sampling, metal concentration inputs, and exposure assumptions produce CDI, HQ, HI, and ILCR outputs.

App: Can support a context note that Gombe LGA tap, well, and sachet water were the highest-risk source types in this paper, while bottled water had the lowest modeled HI among the listed source classes.

## Wiki pages this source may touch

- [[ingredients/water]]
- [[products/bottled-drinking-water]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/manganese]]
- [[metals/iron]]
- [[metals/copper]]

## Verification notes

- The auto-fetched filenames referenced infant bottles, but the actual PDF is a drinking-water health-risk paper. It is ingested under the actual byline and DOI.
- The sibling file `auto-infant-bottles-pb-product_2026_10-64290-bima-v10i1a-1514.pdf` is the same DOI and should roll up to this canonical source page rather than create a second source page.
- The abstract states 87 total samples, while the source-count list visible in Methods sums to 76 for the named source categories. The page preserves both facts by using the article's stated total and listing the source counts printed in the Methods section.
- The source reports modeled CDI/HQ/HI/ILCR outputs. Because the underlying concentration table is not printed in the PDF, no HMTc benchmark concentration row should be pooled from this page without a supplemental data table or re-contacted article data.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [bdad52137](https://github.com/paleofoundation/heavymetalindex/commit/bdad52137) | 2026-06-08 | minor | Narrative text revised |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | major | 1 section added |
| [8707c6671](https://github.com/paleofoundation/heavymetalindex/commit/8707c6671) | 2026-06-05 | major | 1 section removed |
<!-- END: hmi-page-history -->
