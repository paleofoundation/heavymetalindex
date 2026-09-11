---
type: "source"
raw_handle: "RPIS_17"
alternate_raw_handles: ["RPMEHG_10-21203-rs-3-rs-4838876-v1"]
cite_key: "cat2024-individual-and-combined-contamination-of-the-heavy-metals"
aliases: ["du2024-petfood-metals-preprint"]
title: "Individual and Combined Contamination of the Heavy Metals in Commercial Cat and Dog Food"
authors: ["Jiaying Du", "Kerui Zhou", "Han Jiang", "Shen Hu", "Wei Zhang", "Qiang Zheng", "Guangteng Zhou", "Niya Zhang"]
year: 2024
publication: "Research Square, version1, posted8September2024"
doi: "10.21203/rs.3.rs-4838876/v1"
access_url: "https://www.researchsquare.com/article/rs-4838876/v1"
retrieval_date: "2026-09-11"
source_type: "preprint"
evidence_tier: "B"
license: "CC BY4.0, stated on preprint cover"
raw_path: "raw/Research Pull Ingredient Sweep/Complete & balanced dry kibble/Cadmium Complete & balanced dry kibble/fba21d7f-31b4-4062-90c1-8c776026991f.pdf"
raw_sha256: "75ff4aad99f41018952d992d74ad6130f67ed89e37a92efef178470de7a4d167"
metals: ["Pb", "Cd", "Cr", "tHg", "tAs"]
ingredients: []
products: ["[[products/pet-food-dry-kibble]]", "[[products/pet-food-canned-wet]]"]
context_only_products: ["[[products/pet-food-dry-kibble]]", "[[products/pet-food-canned-wet]]"]
matrices: ["pet-food"]
jurisdictions: ["CN"]
evidence_fitness: {"supports": ["Qualified version-specific retail pet-food summary occurrence", "Positive-only min/max/mean and reported detection counts by species or product form", "Explicit audit of inconsistent censoring and source-model assumptions"], "does_not_support": ["Independent replication of Du2025 cohort", "Complete-and-balanced row fit without formulation documentation", "Inorganic arsenic, methylmercury or hexavalent chromium concentrations", "Validated pet acute risk or verified legal limits", "Observed health harm, causal processing effects or a general wet/dry safety ranking"]}
ingest_status: "complete"
sample_n: 93
sample_population: "93imported pet foods:45cat48dog;79dry14canned; China retailmarket,2021–2022production; samecohort asDu2025"
audience: ["researcher", "educator", "regulator"]
sources: 0
updated: "2026-09-11"
data_path: "data/evidence/library-drain/batch-01-extractions.json"
audit_path: "data/evidence/library-drain/batch-01-audit.md"
related_sources: ["[[sources/du2025-petfood-china-metals]]"]
cohort_id: "du-petfood-cn-2021-2022-n93"
---

# Du et al. 2024 — Metals in imported cat and dog food: preprint version

This Research Square preprint reports five metals in 93 imported pet foods produced in 2021–2022 and sampled in China. It is an earlier version of [[sources/du2025-petfood-china-metals]], not an independent study. The version-specific summaries are retained because product-form breakdowns and modeled indices changed between versions.

## Key numbers

The sample comprised 45 cat foods and 48 dog foods, with 79 dry and 14 canned products. Production origins were the United States (32), Spain (29), Thailand (17), Germany (10) and New Zealand (5); the sampling market was China. No concentration breakdown by origin was reported.

| Metal | All products: positive N / total N | Positive-only mean | Positive-only range |
| --- | --- | --- | --- |
| Lead | 39 / 93 | 3.63 mg/kg | 2.07–5.80 mg/kg |
| Cadmium | 29 / 93 | 0.138 mg/kg | 0.0200–0.279 mg/kg |
| Chromium, unspeciated | 93 / 93 | 3.47 mg/kg | 0.48–15.47 mg/kg |
| Mercury, total | 91 / 93 | 0.011 mg/kg | 0.001–0.027 mg/kg |
| Arsenic, total | 93 / 93 | 0.21 mg/kg | 0.02–1.89 mg/kg |

These are the preprint's Table 3 values. Its positive classification is internally inconsistent for cadmium: the stated LOQ is 0.20 mg/kg, above some reported positive values and means. No decimal correction or nondetect substitution has been inferred.

| Product form | Pb mean | Cd mean | Cr mean | Total Hg mean | Total As mean |
| --- | --- | --- | --- | --- | --- |
| Dry, N=79 | 3.63 | 0.147 | 3.87 | 0.011 | 0.23 |
| Canned, N=14 | Not reported; no positives | 0.0200 | 1.21 | 0.012 | 0.09 |

Table 5 means are mg/kg among source-defined positives, with each metal's positive denominator preserved in structured evidence. Moisture basis is not explicitly stated. These are not directly comparable dry-mass estimates. The abstract's canned cadmium percentage conflicts with Table 5; the table reports 14.29% canned and 34.18% dry.

The all-product, animal-species and food-form summaries overlap; they describe the same 93 products. The underlying individual measurements are available only on request. The supplement supplies secondary legal comparators, not additional sample-level observations.

## Methods (brief)

Dry foods were ground through a 20-mesh sieve and canned foods homogenized. Pb, Cd, Cr and As samples underwent dry ashing; Hg used microwave digestion. Flame atomic absorption measured Pb, Cd and Cr, and atomic fluorescence measured Hg and As. The preprint reports reagent blanks and calibration standards but no recovery or precision results. Additional quality-control details in the published version are not imported into this version's methods.

The source defines Pb and Cd positives as above their quantitation limits, and Cr, Hg and As positives as above detection limits. Table 1 gives Pb LOQ 2 mg/kg; Cd LOD 0.08 and LOQ 0.20 mg/kg; Cr LOD 150 µg/kg; Hg LOD 0.15 µg/kg; and As LOD 0.010 mg/kg. Unreported limits remain absent. None of the three speciation-sensitive metals was speciated.

## Evidence fitness

Qualified pet-food occurrence summaries and co-occurrence counts are usable with explicit source inconsistencies, product form and China retail market preserved. Nutritional completeness is not documented, so routing to complete-and-balanced product rows is broad product context. The source does not establish ingredient-specific concentrations or contaminant origins.

## Limitations

The paper contributes source-reported summaries for imported pet foods. Positive-only means are not whole-cohort means. Different moisture contents, reporting limits and product mixtures prevent a general safety ranking of dry versus canned foods. No food standards or certification values are derived here.

Its acute hazard indices use mammalian reference doses as substitutes for pet-specific acute values and have unresolved species and body-weight normalization assumptions. They remain unvalidated source-model records, not observed health outcomes. The supplement reproduces formulation-dependent legal comparators; those are secondary citations, not independently verified instruments.

## Related evidence

- [[products/pet-food-dry-kibble]]
- [[products/pet-food-canned-wet]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/mercury]]
- [[metals/arsenic]]

The later [[sources/du2025-petfood-china-metals|published article]] reports the same cohort with revised tables and model results. The preprint and published values require outcome-level reconciliation and must not be pooled as independent studies.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5552206e60](https://github.com/paleofoundation/heavymetalindex/commit/5552206e60) | 2026-09-10 | minor | Narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 2 sections added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added |
| [5f7a7150d0](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d0) | 2026-07-29 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
