---
type: source
raw_handle: AUTO_ing-infant-formula-ias_2024_10-1201-9781003317395-91
cite_key: arellano2023-dairy-products-arsenic-argentina
title: "Arsenic risk assessment through dairy products ingestion"
authors: ["F.E. Arellano", "A. Fernandez-Cirelli", "S. Braeuer", "W. Goessler", "A.L. Perez-Carrera"]
year: 2023
publication: "Arsenic in the Environment: Bridging Science to Practice for Sustainable Development"
doi: "10.1201/9781003317395-91"
source_type: conference-proceedings
evidence_tier: B
license: "not stated in PDF"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ing-infant-formula-ias_2024_10-1201-9781003317395-91.pdf
metals: [tAs]
ingredients: ["[[ingredients/cow-milk-infant-formula]]", "[[ingredients/milk-based-infant-formula]]", "[[ingredients/skim-milk]]", "[[ingredients/whole-milk]]"]
products: ["[[products/infant-formula]]", "[[products/infant-formula-powder-dairy]]", "[[products/dairy-milk-cow]]", "[[products/dairy-milk-goat-sheep]]", "[[products/dairy-milk-powders]]", "[[products/dairy-cheese]]"]
matrices: [raw-milk, commercial-fluid-milk, powdered-milk, infant-formula, cheese]
jurisdictions: [AR]
near_duplicates: []
sample_n: 157
sample_population: "Raw bovine, caprine, and ovine milk from 37 farms in Cordoba and Buenos Aires provinces, plus market commercial milk and cheese samples from Argentina."
updated: 2026-06-09
---

# Arellano et al. 2023 - Arsenic in Argentine dairy products and infant formula

## Overview

Arellano and colleagues measured total arsenic in raw milk, commercial milk, powdered milk, infant formula, and cheese from Argentina, then estimated arsenic intake and target risk for infants, children, pregnant consumers, and adults. The chapter is occurrence evidence for total arsenic in dairy matrices and infant formula, but it does not speciate inorganic arsenic separately from total arsenic.

## Key numbers

The study reports a detection limit of `10 ng/g` for arsenic. For raw milk, `9.52%` of bovine milk, `8%` of goat milk, and `7.55%` of sheep milk samples exceeded the Mercosur `20 ng/g` maximum tolerance limit cited by the authors.

Table 1 reports total arsenic concentrations:

| Matrix | N | Mean As | Range |
| --- | ---: | ---: | ---: |
| Goat raw milk | 25 | `< LOD` | `< LOD-70 ng/g` |
| Sheep raw milk | 40 | `< LOD` | `< LOD-80 ng/g` |
| Cow raw milk | 42 | `< LOD` | `< LOD-110 ng/g` |
| Commercial milk | 36 | `26.7 +/- 4.78 ng/g` | `< LOD-167 ng/g` |
| Cheese | 14 | `20.6 +/- 12.3 ng/g` | `< LOD-142 ng/g` |

Table 2 reports total arsenic in powdered dairy and infant formula:

| Matrix | Mean As | Range |
| --- | ---: | ---: |
| Infant formula | `20.50 +/- 6.31 ng/g` | `< LOD-36 ng/g` |
| Skimmed powdered milk | `26.00 +/- 2.72 ng/g` | `< LOD-38 ng/g` |
| Whole powdered milk | `16.30 +/- 3.13 ng/g` | `< LOD-44 ng/g` |

Table 3 reports arsenic daily intake rates through commercial milk and cheese, with infants having the highest median intake. For commercial milk, infant median intake was `0.30` with range `0-2.29`; children were `0.08` with range `0-0.59`; pregnant consumers were `0.03` with range `0-0.27`; adults were `0.02` with range `0-0.14`. For cheese, infant median intake was `0.14` with range `0-1.95`; children were `0.04` with range `0-0.50`; pregnant consumers were `0.02` with range `0-0.23`; adults were `0.01` with range `0-0.12`.

The target-risk figure states that no estimated target risk exceeded `1`, but values for whole powdered milk (`TR = 0.95`), skimmed powdered milk (`TR = 0.92`), and commercial fluid milk (`TR = 0.97`) were close to the threshold.

## Methods (brief)

Raw bovine, caprine, and ovine milk samples came from 37 dairy farms in southeastern Cordoba province and northern Buenos Aires province. The authors also sampled commercial milk (`n = 36`) and cheeses (`n = 14`) from markets in the study areas. Samples were lyophilized and digested in triplicate with `5 mL` nitric acid in a microwave-heated digestor, then diluted to `10% v/v` acidity. Arsenic was measured by ICP-MS on mass `m/z 75` without collision or reaction gas. Statistical analyses used Infostat and risk assessment used @Risk.

## Implications

Certification: This source can support total-arsenic occurrence context for dairy, powdered milk, and dairy infant formula rows in Argentina. It should not be used as inorganic-arsenic evidence unless a later source provides speciation or a documented conversion rule.

Courses: Useful for explaining dairy matrix differences, total-versus-inorganic arsenic limits, and why infant exposure can be higher even when product concentrations are similar.

App: Can inform Argentina-specific dairy and infant-formula arsenic priors, with a speciation caveat.

## Wiki pages this source may touch

- [[products/infant-formula]]
- [[products/infant-formula-powder-dairy]]
- [[products/dairy-milk-cow]]
- [[products/dairy-milk-goat-sheep]]
- [[products/dairy-milk-powders]]
- [[products/dairy-cheese]]
- [[ingredients/cow-milk-infant-formula]]
- [[ingredients/milk-based-infant-formula]]
- [[metals/arsenic-total]]
- [[metals/arsenic]]

## Verification notes

This page was built from the PDF chapter title/byline, abstract, methods, Tables 1-3, Figure 2 caption/text, and conclusions. Frontmatter uses `tAs` because the chapter reports arsenic by ICP-MS and does not provide inorganic arsenic speciation. The raw handle follows the auto-fetched filename, although the filename year is `2024`; the chapter itself is in a 2023 edited volume.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
<!-- END: hmi-page-history -->
