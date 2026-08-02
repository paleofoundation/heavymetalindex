---
type: source
raw_handle: MFK_hata2014
cite_key: hata2014-wakame-organoarsenic-extraction
title: "Improving the Efficiency of Organoarsenic Extraction from Seaweeds"
authors: [Hata A, Hasegawa M, Kurosawa H, Yamanaka K, Yamano Y, Endo Y, Fujitani N, Endo G]
year: 2014
publication: "Food Safety"
doi: 10.14252/foodsafetyfscj.2014037
access_url: "https://doi.org/10.14252/foodsafetyfscj.2014037"
source_type: peer-reviewed
evidence_tier: B
license: "unknown"
raw_path: "raw/Manual Fetch Kimi /June 8 Inorganic Arsenic Seaweed/hata2014.pdf"
metals: [tAs]
ingredients: ["[[ingredients/seaweed]]"]
products: ["[[products/seaweed-kelp-foods]]"]
matrices: [edible-seaweed, macroalgae, kelp, dry-weight]
jurisdictions: [JP]
near_duplicates: []
sample_n: 1
sample_population: "One commercial dry wakame (Undaria pinnatifida) product harvested from the Sanriku Coast in Japan and purchased from a retail market in Choshi City, Chiba Prefecture; the product had been parboiled, preserved with salt, desalted, and dried before sale."
updated: 2026-06-09
sources: 1
audience: [regulator, educator, app]
---

# Hata et al. 2014 - organoarsenic extraction from dry wakame

## Overview

Hata and colleagues developed an enzymatic plus methanol extraction method for organoarsenic species in wakame. The occurrence-relevant material is a single commercial dry wakame product from Japan; the rest of the paper tests extraction efficiency and speciation preservation. The source reports total arsenic in the dry wakame and method-dependent extractable arsenic peaks, but it does not report measured inorganic arsenic.

## Key numbers

All product concentrations are reported by the source on a dry-wakame basis.

| Matrix | Result | Source-reported value |
|---|---|---:|
| Commercial dry wakame | Total arsenic | 25.50 ± 1.05 mg/kg dry weight (mean ± SD, n = 3) |
| Wakame, alginate lyase + cellulase plus 100% MeOH extraction | Overall arsenic extraction rate | 88.8 ± 8.4% (n = 3, mean ± SD) |
| Wakame, alginate lyase + cellulase pre-treatment supernatant | Arsenic elution rate | 45.5 ± 2.2% (n = 5, mean ± SD) |

Enzymatic pre-treatment elution rates from Table 2:

| Treatment | Elution rate |
|---|---:|
| A(-)C(-), no alginate lyase and no cellulase | 17.2 ± 3.7% |
| A(-)C(+), cellulase only | 22.6 ± 0.6% |
| A(+)C(-), alginate lyase only | 31.2 ± 0.7% |
| A(+)C(+), alginate lyase + cellulase | 45.5 ± 2.2% |

Extraction rates from Table 3:

| MeOH concentration | A(-)C(-) extraction rate | A(+)C(+) extraction rate |
|---|---:|---:|
| 0% | 22.5 ± 1.1% | 48.3 ± 0.5% |
| 50% | 21.8 ± 0.9% | 58.7 ± 4.1% |
| 100% | 28.1 ± 0.2% | 88.8 ± 8.4% |

Arsenic species/peak contents in wakame extracts from Table 4, reported as `mg/kg dry wakame`:

| Extraction condition | Peak a | Peak b (AsSug 482) | Peak c | AsSug 328 | Sum |
|---|---:|---:|---:|---:|---:|
| A(-)C(-), 0% MeOH | 0.68 | 1.32 | 0.57 | 1.51 | 4.07 |
| A(-)C(-), 100% MeOH | 4.53 | 1.38 | 0.63 | 1.43 | 7.97 |
| A(+)C(+), 0% MeOH | 5.09 | 5.94 | 0.61 | 1.57 | 13.22 |
| A(+)C(+), 100% MeOH | 10.46 | 5.48 | 0.61 | 1.49 | 18.04 |

The authors identified AsSug 328 and AsSug 482 in the wakame extracts. Peak a was estimated to correspond to arsenic-hydrocarbon 388 (`C21H46OAs` in the results text) and arsenic-phospholipid 1012 (`C49H95O14PAs` in the results text); peak c was not identified. Neither AsSug 254 nor DMA was detected in this study, which the authors used as evidence that the enzymatic method did not alter the arsenic-compound composition.

## Methods (brief)

A commercial dry wakame product, harvested from the Sanriku Coast and purchased from a retail market in Choshi City, was ground to powder before analysis. Total arsenic was measured by ICP-MS after microwave acid digestion of `100 mg` powdered sample with `2.5 mL` of `HNO3:H2O2 = 5:2` and dilution to `30 mL` with `5% HNO3`. The total-As method was validated with NMIJ CRM `7405-a` Hijiki: certified `35.8 ± 0.9 mg/kg`, measured `35.5 ± 0.4 mg/kg` (mean ± SD, n = 3).

For extraction testing, `100 mg` dry wakame was incubated for `6 hours` at `37 °C` with alginate lyase, cellulase, both enzymes, or no enzyme in `0.1 M` phosphate buffer (`pH 6.0`). Methanol extraction was then tested at `0`, `50`, and `100%` MeOH. Arsenic species/peaks were separated by cation- and anion-exchange HPLC-ICP-MS and identified or tentatively assigned with HPLC-ESI-Q-TOF-MS.

## Implications

This source should be treated as a narrow method-plus-occurrence record for dry wakame. It supports the seaweed/kelp food row by adding a Japanese retail dry-wakame total-arsenic value and showing that extraction conditions strongly affect the recovered organoarsenic profile. Because inorganic arsenic was not reported, this page should not be used as an inorganic-arsenic occurrence value.

## Wiki pages this source may touch

- [[products/seaweed-kelp-foods]]
- [[ingredients/seaweed]]
- [[metals/arsenic-total]]

## Verification notes

- Identity checks before writing found no existing source page for DOI `10.14252/foodsafetyfscj.2014037`, raw handle `MFK_hata2014`, title text, or cite key `hata2014-wakame-organoarsenic-extraction`.
- All Key numbers were rechecked against `/tmp/hmi-seaweed-034.txt`, extracted with `pdftotext -layout`. Tables 2, 3, and 4 were copied directly; the total-arsenic value is from Results section `3-1`.
- Units and bases are preserved as `mg/kg dry weight`, `mg/kg dry wakame`, and `%`; no unit conversion was performed.
- Speciation check: the source reports total arsenic and organoarsenic/arsenosugar peaks. It does not report inorganic arsenic, so frontmatter uses `metals: [tAs]` only and no AsSug/DMA value is promoted to iAs.
- Brand firewall: the source does not identify a consumer brand; the page records only the retail-market dry wakame category and source-described harvest/geographic context.
- Missing-slug check: no missing product or ingredient slug blockers. Exact `wakame` is retained in source text while frontmatter uses broad seaweed/kelp food slugs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [2733855b8](https://github.com/paleofoundation/heavymetalindex/commit/2733855b8) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
