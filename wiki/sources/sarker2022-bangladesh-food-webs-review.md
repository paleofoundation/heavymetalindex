---
type: source
raw_handle: papers-cube
cite_key: sarker2022-bangladesh-food-webs-review
title: "Heavy metals contamination and associated health risks in food webs — a review focuses on food safety and environmental sustainability in Bangladesh"
authors: [Sarker A, Kim JE, Islam ARMT, Bilal M, Rakib MRJ, Nandi R, Rahman MM, Islam T]
year: 2022
publication: "Environmental Science and Pollution Research"
doi: 10.1007/s11356-021-17153-7
source_type: review
evidence_tier: B
license: "unknown"
access_url: "https://doi.org/10.1007/s11356-021-17153-7"
raw_path: "raw/Papers Cube Manual Fetch/sarker2021.pdf"
raw_sha256: b7f4bb2a7b8ec0a0f207fc6c767eecfa8ecd3ceaa26d1a6894ef376636f49d35
metals: [Pb, Cd, tAs, Cr, Ni, Zn, Cu, tHg]
ingredients: ["[[ingredients/rice]]", "[[ingredients/vegetables]]", "[[ingredients/fish]]", "[[ingredients/fruit]]", "[[ingredients/meat]]", "[[ingredients/milk-and-dairy]]"]
products: ["[[products/fresh-fish]]"]
matrices: [rice, fish, drinking-water, soil, dietary-intake]
jurisdictions: [BD]
near_duplicates: []
sample_n: null
sample_population: "Systematic review of published literature on heavy metal contamination in foodstuffs, soil, and water in Bangladesh; first systematic review to explore multi-trophic transfer in Bangladesh food webs"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# Sarker et al. 2022 — Heavy metals in Bangladesh food webs: systematic review (ESPR)

## Overview

This systematic, non-exhaustive review in Environmental Science and Pollution Research synthesizes heavy metal contamination, multi-trophic transfer, and associated health risks in Bangladesh's food webs. The authors surveyed rice, vegetables, fruits, fish, meat, dairy, soil, sediment, groundwater, and surface-water matrices, concluding that several lines of evidence show heavy metals in Bangladesh foodstuffs above WHO/FAO maximum tolerable limits (MTLs), primarily due to poor management of industrial effluents, contaminated irrigation water, improper use of metal-containing pesticides and fertilizers, and weak regulatory enforcement. The review specifically notes that arsenic in Bangladesh is a well-documented groundwater-derived crisis, and that Pb in mango and Cd in tomatoes exceeded WHO/FAO limits in a national survey of 30 agroecological zones. A cited cultured-fish study reported arsenic in tilapia at 1.486 mg/kg, higher than rahu and pangas in that comparison, and described potential carcinogenic and chronic-toxicity concern with continuous consumption in contaminated areas.

## Key numbers

From cited primary studies reviewed:
- Tilapia arsenic: 1.486 mg/kg, highest among rahu, tilapia, and pangas species in the cited cultured-fish study
- Lead in mango: above WHO/FAO MTL (exact value from Shaheen et al. 2016)
- Cadmium in tomato: above WHO/FAO MTL (exact value from Shaheen et al. 2016)
- Bangladesh foodstuffs: review-level statement that several lines of evidence show heavy metals higher than acceptable limits set by WHO/FAO; specific concentrations are distributed across cited primary studies

Heavy metals identified as prominent contaminants in Bangladesh ecosystems and foodstuffs include As, Pb, Cd, Cr, Zn, Cu, Ni, and Hg, with specific element panels varying by cited soil, water, crop, fish, and dairy study.

Multi-trophic transfer was identified as a significant but understudied pathway: heavy metals accumulate progressively from soil to plant to herbivore to higher trophic levels, but quantitative data on the full chain were lacking at time of review.

## Methods (brief)

Systematic and non-exhaustive review (no PRISMA protocol or verified methodology applied); literature bank from Google Scholar, PubMed, Science Direct, Scopas, ResearchGate, Springer, official websites, and offline institutional-library materials. No specific timeline exclusion. Published in ESPR vol. 29 (2022), received July 2021, accepted October 2021. Evidence tier B: peer-reviewed in a major Springer environmental journal with a focused geographic scope and strong primary-study base, but all concentration data are secondary and the authors explicitly did not apply a PRISMA-style selection method. Primary values must be traced to the cited studies before downstream quantitative use. The focus on Bangladesh limits direct transferability to other jurisdictions.

## Implications

**Certification:** Documents review-level evidence that Bangladesh food commodities and environmental matrices can carry elevated heavy metal contamination versus WHO/FAO limits, due to systemic irrigation, industrial, agricultural-input, and regulatory-enforcement factors. Useful as geographic and pathway context for ingredient-origin evidence review, not as a standalone origin rule or threshold source.

**Courses:** Valuable case study for supply-chain contamination module showing how industrial effluent management failures propagate through entire national food systems. Multi-trophic transfer concept is important for seafood module (freshwater fish in contaminated river systems).

**App:** Qualitative geography/pathway context only. The tilapia arsenic datum (1.486 mg/kg) is a cited-study upper-end reference within this review, but primary-study extraction is needed before populating structured contamination_profile values.

## Wiki pages this source may touch

- [[ingredients/rice]]
- [[ingredients/vegetables]]
- [[ingredients/fish]]
- [[ingredients/fruit]]
- [[ingredients/meat]]
- [[ingredients/milk-and-dairy]]
- [[products/fresh-fish]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/zinc]]
- [[metals/copper]]
- [[metals/mercury-total]]

## Verification notes

- Cross-vendor audit (Codex, 2026-05-17) corrected the tilapia arsenic claim from "above safety limits" to the source-supported comparison, expanded metal and ingredient scope to match review tables, replaced nonstandard matrix terms, removed invalid supply-chain/regulation links, and reframed origin-risk language as source-level context.
- The review reports arsenic and mercury without species separation; this page treats them as total arsenic (`tAs`) and total mercury (`tHg`).
- Brand-firewall recheck under the stricter Part 12 reading locked 2026-05-17 (Claude Code, 2026-05-18): zero brand names present in page content. Species names (rahu, tilapia, pangas — `Labeo rohita`, `Oreochromis mossambicus`, `Pangasius pangasius`) are scientific binomials, not brand attributions. The review itself names no brands; it summarises prior studies by river, agroecological zone, and market. `access_url` and `raw_sha256` were added in the same pass.
- Audit subagent (2026-05-18) flagged `[[regulations/codex-cxs-193-1995]]` as a non-existent regulation slug; verified against source — the review references WHO/FAO MTLs generically (and JECFA 2003 in Fig. 3) but never names Codex CXS 193-1995. Bullet removed from "Wiki pages this source may touch."

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
