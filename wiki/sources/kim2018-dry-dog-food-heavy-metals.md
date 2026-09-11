---
type: "source"
raw_handle: "RPIS_18"
alternate_raw_handles: ["auto-fetched"]
cite_key: "kim2018-dry-dog-food-heavy-metals"
aliases: []
title: "Evaluation of Arsenic, Cadmium, Lead and Mercury Contamination in Over-the-Counter Available Dry Dog Foods With Different Animal Ingredients (Red Meat, Poultry, and Fish)"
authors: ["Hyun-Tae Kim", "John P. Loftus", "Sabine Mann", "Joseph J. Wakshlag"]
year: 2018
publication: "Frontiers in Veterinary Science5:264"
doi: "10.3389/fvets.2018.00264"
access_url: "https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2018.00264/full"
retrieval_date: "2026-09-11"
source_type: "peer-reviewed"
evidence_tier: "A"
license: "CC BY, stated in PDFp8"
raw_path: "raw/Research Pull Ingredient Sweep/Complete & balanced dry kibble/Chromium Complete & balanced dry kibble/10-3389-fvets-2018-00264-full.pdf"
alternate_raw_paths: ["raw/manual-fetch/seasonal-geographic-variance/ingested/ing-meat-poultry-pb_2018_10-3389-fvets-2018-00264.pdf"]
raw_sha256: "0c876a831b4f0eedb7670e7f6088e897e592203162857d022ceeba69f6d2d315"
metals: ["tAs", "Cd", "tHg", "Pb"]
ingredients: []
products: ["[[products/pet-food-dry-kibble]]"]
matrices: ["pet-food"]
jurisdictions: ["US"]
evidence_fitness: {"supports": ["Source-reported per-energy medians and ranges for three dry dog-food formulation groups", "US retail finished-product occurrence with single-lot sampling and method precision described", "Qualified formulation-associated differences"], "does_not_support": ["Inorganic arsenic or methylmercury concentrations", "mg/kg group summaries without individual energy-density data", "Independent measurements of raw fish/meat ingredients", "Lifetime canine safety or causal ingredient/processing attribution", "Current human exposure, legal compliance or pet-specific thresholds"]}
ingest_status: "complete"
sample_n: 51
sample_population: "51US retail maintenance/all-life-stage dry dog-food formulations,17each fish/poultry/red-meat; distinct production lots"
audience: ["researcher", "educator", "regulator"]
sources: 0
updated: "2026-09-11"
data_path: "data/evidence/library-drain/batch-01-extractions.json"
audit_path: "data/evidence/library-drain/batch-01-audit.md"
---

# Kim et al. 2018 — Metals in dry dog foods grouped by animal protein source

This US retail study measured total arsenic, cadmium, lead and total mercury in 51 maintenance or all-life-stage dry dog foods. Each formulation contributed one production lot. The authors report results per unit of food energy and compare three formulation groups, each containing 17 products.

## Key numbers

Table 1 reports medians and ranges in **mg per 1,000 kcal of metabolizable energy (mg/Mcal)**.

| Formulation group | Total As | Cd | Total Hg | Pb |
| --- | --- | --- | --- | --- |
| Poultry, N=17 | 0.054 (0.007–0.133) | 0.015 (0.005–0.063) | 0.0008 (0.0004–0.0023) | 0.037 (0.019–0.305) |
| Red meat, N=17 | 0.037 (0.007–0.134) | 0.013 (0.008–0.047) | 0.0012 (0.0004–0.0064) | 0.091 (0.032–1.621) |
| Fish, N=17 | 0.343 (0.025–1.104) | 0.027 (0.014–0.215) | 0.0082 (0.0010–0.0139) | 0.049 (0.018–0.325) |

Fish-based foods had higher As, Cd and Hg than the other two groups (source-reported p<0.01). For Pb, the results and Figure 4 identify higher red-meat values than poultry; fish differs significantly from neither group. The abstract's broader Pb comparison is not supported by that pairwise result.

## Methods (brief)

Forty-seven foods came from an online retailer, one from a grocery, one from a local pet retailer and two from a veterinary center. Samples were analyzed within a week of acquisition. The source does not give the calendar sampling period. Triplicate 5 g aliquots from each submitted 100 g sample were analyzed; these are analytical replicates, not additional products.

Microwave-assisted nitric-acid digestion and oven drying at 40°C preceded ICP-MS using an Agilent 7500ce and Mira Mist nebulizer in hydrogen mode. The reported quantitation limit was 0.001 mg/kg as fed for all four metals. The authors state that all samples were above detection; they do not give a separate numeric detection limit. Intra-assay CV was below 5%, and inter-assay CV below 7%.

The authors used manufacturer-provided metabolizable energy to express the average of triplicate readings per 1,000 kcal. Product-level energy values are not supplied, so the reported group summaries cannot be reversed into mg/kg group concentrations. Shapiro-Wilk testing was followed by Kruskal-Wallis and Dunn comparisons, with medians and ranges reported.

## Evidence fitness

Supports per-energy occurrence in finished dry dog foods and associations with formulation groups. The four analytes were measured without speciation; total arsenic and total mercury do not establish inorganic arsenic or methylmercury. Formulation labels do not constitute separate measurements of raw fish, poultry or red meat.

## Limitations

One lot per formulation does not characterize batch variability. Ingredient provenance, acquisition dates, individual concentrations and exact graphical quartiles are absent. The study measured foods, not animal health outcomes or contaminant bioavailability. Explanations involving fishmeal, game-meat exposure, processing water or equipment remain hypotheses.

The cited human-intake comparisons use historical studies rather than concurrent controls. The prose arsenic maximum-to-median ratio has an inconsistent denominator. Figure 4's human lead reference line also appears inconsistent with the numeric comparator in Table 1 and the results text. Figure 3's poultry-mercury upper whisker differs from the maximum in both Table 1 and the text; the exact tabulated value is retained here. Neither these comparisons nor cross-species toxicity references establish lifetime pet safety or current regulatory compliance.

## Related evidence

- [[products/pet-food-dry-kibble]]
- [[metals/arsenic]]
- [[metals/cadmium]]
- [[metals/mercury]]
- [[metals/lead]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5552206e60](https://github.com/paleofoundation/heavymetalindex/commit/5552206e60) | 2026-09-10 | minor | Narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
