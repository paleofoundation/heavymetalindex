---
type: source
raw_handle: AUTO_rice-noodles-pb-product
cite_key: katyal2020-instant-noodles-canada-metals
title: "Analysis of lead, arsenic, and cadmium concentrations in instant noodles within the Canadian market"
authors: [Katyal D, Chen D, Kuo H]
year: 2020
publication: "BCIT Environmental Public Health Journal"
doi: 10.47339/ephj.2020.167
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-rice-noodles-pb-product_2020_10-47339-ephj-2020-167.pdf"
metals: [Pb, Cd, tAs]
ingredients: ["[[ingredients/noodles]]", "[[ingredients/rice]]", "[[ingredients/wheat]]"]
products: ["[[products/rice-noodles]]", "[[products/pasta-wheat-based]]"]
matrices: [instant-noodles-dry, dry-seasoning-pack]
jurisdictions: [CA]
near_duplicates: []
sample_n: 30
sample_population: "Thirty packets of instant noodles from six brands available in large grocery stores in the Canadian market; dry noodles and accompanying dry seasoning packs were ground and analyzed."
updated: 2026-05-31
---

# Katyal et al. 2020 - Lead, arsenic, and cadmium in Canadian instant noodles

Katyal et al. measured lead, arsenic, and cadmium in 30 instant-noodle packets purchased from large grocery stores in Canada. The study is useful for the rice-noodle and wheat-based pasta/noodle rows because it directly compares rice-based and wheat-based instant noodles on a dry-product basis. The authors found that rice noodles had significantly higher lead and arsenic than wheat noodles, while cadmium did not differ significantly by grain base.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Samples | 30 packets of instant noodles from 6 brands available in large Canadian grocery stores |
| Product fractions | Individual packs of noodles and accompanying dry seasoning packs were ground before digestion |
| Metals | Pb, As, Cd |
| Maximum-limit comparator used by authors | Pb 0.1 mg/kg; Cd 0.1 mg/kg; As 0.2 mg/kg |
| Lead range | 0.003 to 0.250 mg/kg in instant noodles |
| Cadmium range | 0.009 to 0.149 mg/kg in instant noodles |
| Arsenic | Present in tested samples; exact text-extractable range not provided in the PDF text layer |
| Rice vs wheat noodles | Rice noodles had significantly higher Pb and As than wheat noodles, p < 0.05; Cd was not significantly different |
| Brand comparison | One-way ANOVA found at least two of six brands differed significantly for Pb, As, and Cd, p < 0.05 |
| Method validation | Reported LODs were Pb 0.01 ug/kg, As 0.002 ug/kg, and Cd 0.004 ug/kg |

Figures 1-3 contain sample-level plots, but the accessible text layer does not expose every plotted value. The source page therefore records the explicit text ranges for Pb and Cd, the source-stated rice-vs-wheat and brand findings, and avoids reconstructing graph-only values by eye.

## Methods (brief)

The study purchased 30 instant-noodle packets from six brands in Canada. The authors ground the dry noodles and seasoning packs, used acid digestion, and analyzed Pb, As, and Cd by ICP-MS/MS. Statistical tests included one-sample t-tests against the source-selected Pb/Cd/As comparator values, independent t-tests for rice-based versus wheat-based noodles, and one-way ANOVA across six brands.

Speciation is total/unspecified arsenic by the study's reporting, not inorganic arsenic. The reported basis is dry instant-noodle product plus seasoning as prepared for digestion, not cooked/as-consumed noodles.

## Implications

For product-category pages, this paper contributes direct Canadian-market occurrence evidence for rice noodles and wheat-based instant noodles/pasta products. It supports a market-specific point that rice-based instant noodles can carry higher Pb and total As than wheat-based instant noodles, while Cd did not separate by grain base in this small sample.

For standards and app work, the paper is source-scope evidence rather than an HMTc benchmark distribution by itself. Its data should stay separate from non-Canadian instant-noodle studies unless a later pooling pass documents market, basis, and product-fit comparability.

## Wiki pages this source may touch

- [[products/rice-noodles]]
- [[products/pasta-wheat-based]]
- [[ingredients/noodles]]
- [[ingredients/rice]]
- [[ingredients/wheat]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]

## Verification notes

- Auto-fetched ingest, 2026-05-31. The filename targeted rice-noodle lead occurrence; the actual PDF covers Pb, total/unspecified As, and Cd in Canadian instant noodles, including both rice-based and wheat-based products.
- Brand firewall: the PDF names consumer brands in keywords and background, but this source page does not reproduce brand-level contamination findings or brand names.
- Speciation: the source reports arsenic as As and does not state inorganic arsenic; route as total/unspecified arsenic only.
- Numerical fidelity: Pb and Cd ranges are taken from the Discussion text. Figure-only values were not manually digitized.
- LOD units as printed: the source's Discussion states LODs as "0.01, 0.002, and 0.004 ug/kg" for Pb, As, and Cd. Those values are implausibly low for ICP-MS/MS in an acid-digested food matrix (typical food-matrix LODs are µg/kg = ppb at numerically larger values, e.g., 0.1 to 1 µg/kg). The wiki transcribes the printed values verbatim; the apparent unit inconsistency lies with the source, not this page.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [07e898192](https://github.com/paleofoundation/heavymetalindex/commit/07e898192) | 2026-06-09 | minor | Narrative text revised |
| [324868f70](https://github.com/paleofoundation/heavymetalindex/commit/324868f70) | 2026-05-31 | major | 1 section added |
| [d47f9951d](https://github.com/paleofoundation/heavymetalindex/commit/d47f9951d) | 2026-05-31 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
