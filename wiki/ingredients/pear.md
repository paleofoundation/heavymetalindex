---
title: "Pear"
type: ingredient
commodity: pear
label: "Pear"
aliases: [pears, Pears, "ingredients/pears"]
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 8]
    p95_ppb: 78
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: raw-pear-with-peel-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 1.8]
    p95_ppb: 2.7
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [2, 15]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 7.9]
    p95_ppb: 8.5
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-pear-with-peel-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, 102.8]
    p95_ppb: 117
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-pear-with-peel-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 10
---

# Pear

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Why this commodity accumulates heavy metals

Pear (Pyrus communis and related species) is a pome fruit grown on tree branches, with the edible flesh separated from the environment by a thin skin that accumulates surface-deposited contaminants more readily than the protected interior. The mechanisms governing heavy metal accumulation in pear closely parallel those documented for apple, the other primary commercial pome fruit. Lead accumulates preferentially at the fruit surface through atmospheric deposition and does not translocate efficiently from root tissue through the woody perennial stem into the fruit interior under normal conditions. Cadmium similarly accumulates at low concentrations in pear flesh because its root-to-fruit translocation through woody perennial tissue is restricted.

The historical use of lead arsenate as an orchard pesticide across the United States, United Kingdom, and parts of continental Europe during the pre-regulatory era is directly relevant to pear orchards. Lead arsenate was widely applied in pear and apple orchards from roughly the 1890s through the 1940s, leaving legacy lead and arsenic reservoirs in orchard soils that persist for decades and can still elevate soil Pb and As near the root zone. While translocation from soil Pb to fruit interior remains low, orchard soil contamination history is the primary variable affecting whether surface-deposited Pb from soil resuspension or contact contributes to whole-fruit analytical values.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–8 | low | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Cd | n=2 | 0–1.8 | high | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | n=2 | 2–15 | low | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tAs | n=2 | 0–7.9 | high | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–102.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw pear-with-peel wet-weight basis, the form in which the fruit enters the ingredient supply chain and the basis on which FDA Total Diet Study Food 85 ("Pear, with peel, raw") reports. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total mercury, chromium, and uranium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for pear (n=27), in which every sample fell below the reporting limit for each of these four metals and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]], all 27 composites below the reporting limit: Pb 4, tHg 1, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored bound and, for lead, with the detected European fresh-pear distribution. The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound, not a measured zero.

Lead is recovered from primary European fresh-pear occurrence literature against the FDA censored floor. Polish retail fresh pear ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]], GFAAS, ISO/IEC 17025) reports fresh-pear lead at a mean of 8 µg/kg and a maximum of 17 µg/kg wet weight, the cleanest pear-specific fresh-flesh anchor in the corpus; the pooled lead typical of [0, 8] takes the FDA 4 µg/kg censored floor as the low bound and the Rusin fresh-pear mean as the upper. The 95th-percentile of 78 µg/kg is the Romanian market whole-fruit value from [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]] (Galați County, ICP-MS, fresh-weight basis), which reports washed whole-pear lead of 78.1 µg/kg in market produce and 69.2 µg/kg in amateur-farm produce. The Bora values sit roughly an order of magnitude above the Rusin and FDA anchors and are stratified below as a high-background regional anchor, not as the central tendency; the study itself documents that its market produce ran 67 percent higher in lead than amateur-farm produce, consistent with a contaminated commercial supply-chain context in that county. Lead is held at low confidence: only three contributors exist, two of them fully or partly elevated by whole-fruit or regional-background effects, and the FDA composite is fully censored.

Total mercury, chromium, and uranium rest on the FDA censored floor. Total mercury: no pear-specific positive value exists in the corpus. The FDA pear composite is below the 1 µg/kg reporting limit across all 27 samples, and the Polish fruit monitoring program ([[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]], CVAAS) reports total mercury only for the broad "other fresh fruits" category (mean 0.3 to 1.7 µg/kg middle-bound, 90th-percentile 0.1 to 4 µg/kg) rather than for pear by name; that category aggregate is cited here as broad-fruit upper context only and is not relabeled as a pear value. The total-mercury cell is therefore recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and no upper bound or 95th-percentile, at low confidence and a single pear-specific contributor. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium only. No pear-specific positive chromium value exists in the corpus: the FDA composite is below the 50 µg/kg reporting limit across all 27 samples, and the only other corpus measurement, dried pear in an Iraqi-market survey of Iranian-origin dried fruit ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|Hadi et al. 2025]], AAS), reports pear chromium as not detected. The chromium cell is recorded with the FDA reporting limit as a left-censored low bound ([0, null]) at low confidence and a single contributor. No pear hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred from total chromium.

Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and no other source in the corpus reports an extractable quantitative pear uranium value, so no distribution is published (the rice-uranium precedent). Cadmium, inorganic arsenic, total arsenic, and nickel retain their prior values and were outside the scope of this resynthesis.

The same Iraqi-market dried-fruit survey reports dried pear cadmium at 378 µg/kg dry weight and lead and chromium as not detected ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|Hadi et al. 2025]]); Rusin reports dried pear lead to 38 µg/kg and cadmium to 16 µg/kg on a dry-weight basis. These dried-form values reflect weight-loss concentration and a separate processing stratum and are not folded into the fresh-pear percentiles above.

## Routing

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 85, "Pear, with peel, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Pear, with peel, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 1.84 | 2.67 | 4 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 55 | 102.8 | 117 | 130 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 5 | 7.9 | 8.48 | 9.3 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Pear Pb and Cd concentrations in the flesh are consistently among the lowest observed in monitored food categories, with most samples below or near analytical detection limits. Geographic variance is primarily a function of orchard soil history and proximity to industrial emission sources; no large multi-region comparative study specifically for pears is available in the current corpus. The FDA TDS FY2018-FY2020 dataset reports pear with peel (TDS Food 85, n=27) with all 27 composites below the reporting limit for Pb (reporting limit 4 µg/kg), total mercury, chromium, and uranium, alongside Ni at a median of 55 ppb (max 130 ppb), Cd at a 90th percentile of 1.84 ppb, and tAs at a median of 5 ppb, reflecting the US retail distribution of commercial pears ([[sources/fda2022-tds-elements-fy2018-fy2020]]); the below-limit results are carried as left-censored bounds rather than as measured zeros. Primary European fresh-pear surveys detect lead at low but non-zero concentrations: Polish retail fresh pear at a mean of 8 µg/kg (max 17 µg/kg wet weight) ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]]), and Romanian market whole pear substantially higher at 78 µg/kg fresh weight in a high-background growing region ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]]). These FDA values represent skin-on fruit, which would carry higher Pb than skin-off preparations.

## Processing effects

Peeling removes the surface-contaminated skin layer and reduces Pb concentrations in the edible portion. Commercial processing of pear into juice, puree, or baby food involves peeling and core removal, effectively eliminating the surface-deposited Pb fraction. Pear juice, produced by pressing and filtering, removes particulate solids and produces a lower-metal extract than whole-fruit puree. Freezing does not alter metal concentrations. Cooking (for compote or sauce) does not appreciably remove metals, but moisture concentration during high-solids evaporation would proportionally increase per-unit-mass values.

## Ingredient-derivative risk

Fresh pear is the primary raw form. Pear juice and pear concentrate are high-volume processing derivatives; pear concentrate is used in infant food beverages and as a natural sweetener, and the concentration step during evaporation would raise metal concentrations in proportion to the concentration ratio relative to fresh juice, though starting concentrations are very low. Pear puree for baby food represents the derivative with the highest regulatory scrutiny because of the infant exposure context; purees are made from peeled, cored pear and therefore reflect flesh-only metal profiles rather than skin-on values.

## Mitigation options

### Sourcing levers

Preferring pears from orchards with documented absence of pre-1940 lead arsenate application history and low soil Pb reduces the risk of elevated surface contamination. For infant food applications, supplier orchard-provenance declarations and periodic soil screening are the chain-of-custody verification mechanism. Given that pear baseline concentrations are already very low, most commercial sourcing is adequate; the sourcing lever is primarily relevant for high-risk provenance scenarios.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling before puree or juice production removes the surface-deposited Pb fraction. This is standard commercial practice for infant-grade pear products. Juice filtration further removes any particulate metal-bearing material that passes the pressing step.

### Formulation levers

Given that pear is already a very low metal commodity, formulation levers are not a primary concern. Blending with other low-metal fruits in infant food formulations does not meaningfully change the metal profile of the final product when pear is the base.

### Testing and QC levers

Lot-level ICP-MS testing of incoming pear puree or concentrate is appropriate for infant food manufacturers as a supply-chain QC step, though most commercial pear lots are expected to be well below regulatory thresholds. Third-party testing provides audit-trail documentation.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for lead in pome fruit (including pear) is 0.10 mg/kg fresh weight, and for cadmium in pome fruit is 0.050 mg/kg fresh weight. These limits apply to fresh pear as placed on the market. For processed pear products in baby food formulations, lower Pb limits apply under the specific baby foods provisions of the same regulation.

FDA's Closer to Zero program ([[regulations/fda-closer-to-zero]]) addresses lead in fruit purees and juices consumed by infants; pear is within scope as a commonly consumed infant fruit. Codex Alimentarius sets guidance levels for contaminants in fruit generally ([[regulations/codex-cadmium-mls]]). The UK post-Brexit Contaminants Regulation applies the same ML values as the EU for pear in domestic commerce.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 10 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Concentration of cadmium and lead in vegetables and fruits]]<span class="hmi-ref-meta">Rusin M, Domagalska J, Rogala D, Razzaghi M, and Szymala I · Scientific Reports · 2021 · [doi.org/10.1038/s41598-021-91554-z](https://doi.org/10.1038/s41598-021-91554-z)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania]]<span class="hmi-ref-meta">Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. · Horticulturae · 2022 · [doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment]]<span class="hmi-ref-meta">Mania M, Rebeniak M, Chabros E, Orshulyak O, and Postupolski J · Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) · 2021 · [doi.org/10.32394/rpzh.2021.0188](https://doi.org/10.32394/rpzh.2021.0188)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/hadi2025-dried-fruits-heavy-metals-iraq|Health Impact of Heavy Metals in Samples of Dried Fruits in Iraq]]<span class="hmi-ref-meta">Hadi QM, Mahdi FA, Hamood FJ, Abbas SH, and Abojassim AA · International Journal of Analytical Chemistry · 2025 · [doi.org/10.1155/ianc/3934929](https://doi.org/10.1155/ianc/3934929)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | US/EU tAs, iAs, Pb, Cd, tHg occurrence in Narrative review synthesizing Congressional Subcommittee findings, FDA testing, and peer-reviewed literature on infant and toddler food |
| 4 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 5 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr concentrations |
| 7 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
| 8 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 9 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 4 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
