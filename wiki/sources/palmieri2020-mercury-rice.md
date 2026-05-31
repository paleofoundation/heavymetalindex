---
type: source
raw_handle: AUTO_gap-mixed-meals-rice-containing-j-jfnm-2020-02-02
cite_key: palmieri2020-mercury-rice
title: "Implications and Significance of Mercury in Rice"
authors: ["James R. Palmieri", "Madeline Grant", "Julia Palermo", "Kiersten Zach", "Cindy Ro", "Hailey Kelly", "Neda J. Yazdanbod", "Amna Al-Bazi", "Anthony R. Hudson", "Oscar R. Chavez", "Jenna White", "Noel Huynh", "Miranda Simmons", "Sandra E. Mayor", "Hannah Hager", "Jeffrey J. Smith", "Julia Taylor", "Manissa Un", "Tomer G. Ben-Ari"]
year: 2020
publication: "Journal of Food Nutrition and Metabolism"
doi: "10.31487/j.jfnm.2020.02.02"
source_type: peer-reviewed
evidence_tier: B
license: "unknown"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-mixed-meals-rice-containing-thg_2020_10-31487-j-jfnm-2020-02-02.pdf"
raw_sha256: 7d4925f84291c040c90d2d5ace3b3d8784f652cb54b49720efa0599c369633ee
access_url: "https://doi.org/10.31487/j.jfnm.2020.02.02"
metals: [tHg]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]"]
matrices: [rice-grain]
jurisdictions: [TH, IN, CN, US]
near_duplicates: []
sample_n: 29
sample_population: "29 rice samples: 12 from Thailand, 6 from India, 6 from China, and 5 United States control samples; colors included white, brown, and other rice types."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
---

# Palmieri et al. 2020 - mercury in rice

This paper reports mercury measurements in 29 rice samples from Thailand, India, China, and the United States. The source frames the exposure concern as methylmercury in rice, but the analytical method description visible in the paper is ICP-MS with results reported as Hg in ng element/g sample, without a separate chromatographic speciation method. This source page therefore routes the occurrence data as total mercury (tHg) and documents the source's methylmercury wording as a limitation.

## Key numbers

**Rice Hg results (Table 1 and results text; ng element/g sample):**

| Result | Value |
| --- | ---: |
| Overall range | 0.18-6.01 |
| Highest sample | 6.01, China, "other" rice color |
| Highest Thailand samples in top ten | 4.47, 4.10, 3.73, 3.16, 2.99, 2.98, 2.95 |
| United States control samples in top ten | 3.71 and 2.84 |
| Lowest sample | 0.18, China, "other" rice color |

The authors state that seven of the top ten samples were from Thailand, two were from the United States control set, and none were from India. Eight of the top ten were white rice, one was brown, and one was "other" color.

## Methods (brief)

The paper states that 29 rice samples were analyzed for mercury using ICP-MS and concentrations were quantified as ng element/g sample. It does not provide a detailed digestion protocol, LOD/LOQ, certified-reference-material recovery, or chromatographic separation for mercury species in the extracted text. The results table labels the measured analyte as Hg.

## Implications

Standards work: This source is a small, exploratory rice Hg occurrence dataset. It is useful as a signal that rice can carry measurable mercury, but it is not strong enough for threshold synthesis without corroborating rice-Hg sources that report method validation and species-specific MeHg data.

Courses: Useful for illustrating the difference between a paper's exposure narrative and the analytical endpoint actually reported. A source can discuss methylmercury while still only supporting total-Hg routing if it does not document speciation.

App: Route as total mercury in rice grain only. Do not use this source as finished-product evidence for rice-containing baby foods; the paper discusses baby rice foods as exposure context but measured bulk rice samples.

Microbiome: Not addressed directly, though the paper references rice methylmercury literature tied to paddy biogeochemistry.

## Wiki pages this source may touch

- [[metals/mercury-total]]
- [[ingredients/rice]]
- [[products/rice-bulk-grain]]

## Verification notes

- Fresh auto-fetch ingest 2026-05-19 from the gap-driven rice-containing mixed-meal total-Hg wishlist. The actual measured matrix is rice grain, so this page routes to rice-bulk-grain rather than mixed meals.
- Speciation discipline: the source repeatedly discusses methylmercury, but the visible method and table support total Hg only. This page uses `tHg` and notes the limitation.
- The paper provides limited method-validation detail; evidence tier set to B.
- Strict brand firewall: no commercial rice brands are reported in this source page.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
