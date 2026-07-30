---
type: ingredient
commodity: plums
title: "Plums"
label: "Plums"
aliases: [prunus-domestica, european-plum, japanese-plum, prunes, dried-plums]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 250
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: 80
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, atmospheric-deposition, drying-concentration, geography]
lower_risk_variants: ["[[ingredients/fresh-plums]]"]
higher_risk_variants: ["[[ingredients/prunes-dried-plums]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 5
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Plums

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: rare) | GAP | 4/10 HMTc analytes, total n=7 | only 4/10 analytes have evidence |
| D2 Regional coverage | OK | 5 jurisdictions, top RO 25% | — |
| D3 Anthropogenic evidence | GAP | 1 agricultural-soil + 1 irrigation-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 4 drivers, 1 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, Ni THIN, Cr THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 2 more study(ies); Ni: needs 2 more study(ies); Cr: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | OK | 6 claims checked, 6 supported; 2 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | GAP | 0 rule link(s), 0 metal(s) covered | no regulations/ link in section |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, Ni, Cr; pairing 0 paired, 5 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 2 more study(ies); Ni: THIN, needs 2 more study(ies); Cr: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; depth below rare bar |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.50, legal-defensibility 0.50, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


Plums (Prunus domestica, European plum; Prunus salicina, Japanese plum) are stone fruits grown commercially across temperate climates: California (US), China (the world's largest producer), Serbia, Romania, Turkey, France, and Italy. The current corpus loads 2 directly-routed sources: Lee 2023 South Korean fresh fruits 7-metal panel covering plums within the broader survey (n=207 across multiple fruits, [[sources/lee2023-south-korea-fresh-fruits-seven-metals]]) and Sembratowicz 2010 Polish domestic fruits nitrate-Pb-Cd panel covering plums (n=108, [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits]]). Plums sit at the lower-middle of the fresh-fruit category for Pb-and-Cd; dried plums (prunes) carry concentrated metals on a dry-weight basis through the drying step.

## Why this commodity accumulates heavy metals

Plums take metals from soil through root uptake into the fruit-bearing tissue, and atmospheric deposition onto the fruit surface during the growing cycle. Prunus species are moderate Cd accumulators relative to apples and pears; the thicker skin of plums provides some buffering against atmospheric Pb deposition into the consumed flesh, with the skin carrying more Pb than the flesh. The Korean Lee 2023 dataset characterised seven metals (tAs, Sb, Ba, Cd, Cr, Ni, Pb) across 207 fresh-fruit samples including plums and confirmed the moderate-Cd, low-Pb pattern for the category ([[sources/lee2023-south-korea-fresh-fruits-seven-metals]]). The Polish Sembratowicz 2010 Lublin-area dataset covered 108 fruit samples and provided Pb-Cd baseline for European-market plums ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits]]). Drying (the production of prunes / dried plums) concentrates metals on a dry-weight basis by 4-5× through moisture removal; this is a basis change rather than contamination.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 5–100 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|2]] |
| Cd | n=2 | 1–30 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 1–50 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| tHg | data gap | — | — | — |
| Ni | n=1 | 50–500 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 10–200 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Korean Lee 2023 dataset is the largest single-jurisdiction recent fresh-fruit dataset covering plums, with 207 samples across the 7-metal panel and the broader fresh-fruit category ([[sources/lee2023-south-korea-fresh-fruits-seven-metals]]). The Polish Sembratowicz 2010 work (n=108 domestic fruits including plums) provides European-market baseline with the additional nitrate context ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits]]). Origin-country pattern: Chinese, Serbian, US-California, and EU commercial plums carry broadly comparable metal profiles per the routing-layer-accessible corpus. Variety-level pattern: European plums (Prunus domestica, used for prunes and culinary plums) and Japanese plums (Prunus salicina, the dominant fresh-eating commercial variety in the US market) are not separately characterised on heavy metals in the loaded corpus. Prune-specific data (concentrated by drying) is implicit through the dry-weight basis but the loaded corpus does not provide dried-plum-specific values.

## Processing effects

Drying fresh plums to prunes concentrates metals on a dry-weight basis by 4-5× through moisture removal (fresh plum ~85% moisture to prune ~30% moisture). Pitting before drying does not change the per-mass load. Some commercial prune production uses sulfur-dioxide treatment for color preservation; this is a non-metal-contamination consideration but worth flagging. Plum jam and plum preserves (concentrated through cooking and sugar addition) carry the parent fruit's metal load at the concentration ratio of the cooking step. Plum juice extracts soluble metals; per-serving exposure tracks the juice-yield ratio.

## Ingredient-derivative risk

Fresh plums (whole or pitted) represent the baseline. Prunes (dried plums) carry the 4-5× concentrated metal load on a dry-weight basis. Prune juice (the liquid extract used for digestive applications) carries soluble metals from the parent fruit. Plum preserves, plum sauce (used in Asian cuisine), and plum-flavoured products carry the parent fruit's metal load proportional to the inclusion ratio. Dried-plum-and-prune-based baby food applications carry the prune metal load directly to infant exposure.

## Mitigation options

### Sourcing levers

Source from production regions with documented soil-and-water screening. Chinese, Serbian, Romanian, US-California, and EU commercial supply chains are broadly equivalent. For brand-controlled-supply operations, single-orchard sourcing enables soil-and-water transparency.

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability. Avoidance of phosphate fertilisers with elevated Cd impurity reduces ongoing Cd loading.

### Processing levers

Pitting and washing do not significantly affect internalised metals. Drying is a basis change, not contamination.

### Formulation levers

For products using plums or prunes as an ingredient, the inclusion ratio caps per-serving exposure. Substitution with other dried fruits (raisins, dates) does not meaningfully change the metal profile.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb fresh-weight), Cd (≤ 1 ppb fresh-weight), and the broader fruit-relevant panel is appropriate.

### Packaging and storage levers

Standard food-grade packaging does not contribute to plum or prune metal load. For canned plum products, modern fully-welded steel cans with food-grade interior coatings are appropriate.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 applies the general fresh-fruit Pb maximum of 0.10 mg/kg fresh weight and Cd at 0.05 mg/kg for fresh fruit (general). The EU Regulation 2023/915 applies the same fresh-fruit Pb limit of 0.10 mg/kg and Cd at 0.020 mg/kg for fresh fruit. For prunes (dried plums), the EU 2023/915 applies a dried-fruit limit framework that allows for the dry-weight basis conversion. The FDA has not set plum-specific action levels.

<!-- BEGIN: hmi-page-references -->
## References

The 2 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Lee J, Hwang I, Park YS, and Lee DY (2023). *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*. Applied Biological Chemistry. [https://doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x). Peer-reviewed, A-tier. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Source record]]
2. Sembratowicz I, Rusinek E, and Ognik K (2010). *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*. Polish Journal of Environmental Studies. Peer-reviewed, A-tier. [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | South Korean fresh-fruit 7-metal panel including plums (n=207) |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 4 | [[sources/rezaei2020-fruits-markazi-essential-elements\|Rezaei et al. 2020]]. *Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study*, Quality Assurance and Safety of Crops & Foods | 2020 | Peer-reviewed | IR Fe, Cu, Zn, Mn, Cr occurrence in Five fruit types (peach, apple, grape, nectarine, and golden plum) plus paired soil and irrigation-water samples collected from... (n=30) |
| 5 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | Polish Lublin-area domestic-fruit Pb-Cd panel including plums (n=108) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [ec90dbf98](https://github.com/paleofoundation/heavymetalindex/commit/ec90dbf98) | 2026-05-16 | major | 2 sources added; contamination-profile values revised; 12 sections added |
<!-- END: hmi-page-history -->
