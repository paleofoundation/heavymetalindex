---
title: "Skim milk"
type: ingredient
commodity: skim-milk
label: "Skim milk"
aliases: ["Milk, skim, fluid", "skim milk", "fat-free milk"]
category: dairy
tds_food:
  number: 4
  description: "Milk, skim, fluid"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fluid-skim-milk-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: fluid-skim-milk-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 27]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fluid-skim-milk-wet-weight
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 10
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: fluid-skim-milk-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: fluid-skim-milk-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [6, 12]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fluid-skim-milk-wet-weight
    speciation: total-Cr-only
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
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 2
---

# Skim milk

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 5/10 HMTc analytes, total n=11 | common tier expects total n>=15; have 11 |
| D2 Regional coverage | below-tier | 1 jurisdictions, top AR 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN | Pb: needs 1 more study(ies); Cd: needs 2 more study(ies); tAs: needs 1 more study(ies); tHg: THIN; Ni: needs 2 more study(ies); Cr: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 6/10 populated cells declare a basis token | 4 populated cell(s) lack a basis token: iAs, Al, Sn, U |
| D8 Provenance integrity | GAP | 31 claims checked, 31 supported; 6 citations, 0 orphan, 5 foreign | 5 foreign citation(s) not naming skim-milk: fda2022-tds-elements-fy2018-fy2020, marques2021-trace-elements-milks-plant-based-drinks, starska2011-noxious-elements-milk-products-poland |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 2 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN; Ni: THIN, needs 2 more study(ies); Cr: THIN, needs 1 more study(ies); basis: 4 populated cell(s) lack a basis token: iAs, Al, Sn, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 4, "Milk, skim, fluid." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Skim milk (also known as fat-free or nonfat milk) is fluid cow milk from which essentially all of the milk fat has been removed by centrifugal separation, typically to a fat content below 0.5 percent by weight. Its heavy metal profile is determined by the same physiological and agricultural factors that govern all fluid dairy: the mammary gland presents a substantial barrier to the transfer of Pb, Cd, Hg, and most other heavy metals from blood circulation into secreted milk, and lactating cows excrete the majority of absorbed metals through urinary and fecal routes rather than through milk. As with reduced-fat milk and semi-skimmed milk, the fat removal step in skim milk production does not alter the metal content of the product because the heavy metals of concern are associated with the aqueous and protein fractions of milk, not with the fat globules. The FDA TDS FY2018-FY2020 composite for skim milk (n=27) reported all seven measured analytes (Pb, Cd, Cr, Ni, U, tAs, and tHg) below their reporting limits across the entire distribution [[sources/fda2022-tds-elements-fy2018-fy2020]]; those below-limit results are carried as left-censored bounds rather than as measured zeros (see the Synthesis basis and censoring treatment section). The detected fluid-milk and skim-milk-specific values from the primary clean-market literature place lead, total arsenic, total mercury, and total chromium at low but non-zero concentrations, consistent with the low metal-transfer efficiency of the mammary gland and the clean supply-chain conditions of commercial fluid dairy, but the values are low rather than zero.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]] |
| Cd | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–27 | low | [[sources/arellano2023-dairy-products-arsenic-argentina\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=3 | 0–2 | low | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 6–12 | low | [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on a fluid skim-milk wet-weight basis, the form in which the ingredient enters the supply chain. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported all seven of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Milk, skim, fluid" (n=27), in which every sample fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 1, Cd 1, tAs 1, tHg 1, Ni 20, Cr 25, U 1 µg/kg). The resynthesis replaces the literal zeros with the FDA reporting limits expressed as left-censored bounds and adds the detected fluid-milk and skim-milk-specific distributions from the primary occurrence literature, in which lead, total arsenic, total mercury, and total chromium are low but non-zero. The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound (reported as "<1", "<20", or "<25"), not a measured zero.

Lead rests on the FDA censored floor (<1 µg/kg across all 27 fluid-skim composites) together with the single skim-milk-specific detection in the literature: the Spanish ICP-MS retail survey ([[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]]) detected lead in non-organic skimmed cow milk at 0.033 in the paper's stated units, below the limit of quantification, with the corresponding organic skimmed milk below detection. The Marques Table 1 header reads µg/kg but the Methods text states the limits of detection in µg/g and the paper's Codex comparison is internally consistent only on a µg/g (= mg/kg) basis, so this skim-milk value is carried as a single corroborating retail anchor rather than as a percentile driver until the unit basis is confirmed with the corresponding author. No clean-market fluid-skim-milk lead distribution with a confirmed unit basis exists in the corpus, so the typical lead range is held as a censored floor of <1 µg/kg with a low non-zero upper bound and the 95th percentile is left uncomputed.

Cadmium rests on the FDA censored floor alone: every fluid-skim composite fell below the 1 µg/kg cadmium reporting limit, and no skim-milk-specific cadmium occurrence value exists in the corpus (Marques et al. did not measure cadmium, and the clean-market raw and aggregate fluid-cow-milk cadmium surveys do not stratify a skim fraction). The honest floor is therefore the FDA reporting limit expressed as a left-censored bound, with no positive value and no upper bound, at low confidence.

Total arsenic rests on the FDA censored floor (<1 µg/kg) and the Argentine dairy survey ([[sources/arellano2023-dairy-products-arsenic-argentina|Arellano et al. 2023]]), which is the only source in the corpus reporting a skim-named total-arsenic value: skimmed powdered milk at a mean of 26.0 ± 2.72 ng/g with a range of <LOD to 38 ng/g. That value is on a powdered (dry, as-sold) basis and is not directly comparable to the fluid skim-milk native basis of this page; it is roughly seven-fold concentrated relative to the reconstituted fluid form, so it is carried as the named skim fraction with an explicit powder-basis caveat rather than as a fluid-skim percentile driver. The same survey reports commercial fluid milk (an unstratified retail aggregate, not skim-specific) at a mean of 26.7 ± 4.78 ng/g (range <LOD to 167 ng/g) on a fluid basis, which establishes that fluid retail dairy in this survey carries detectable total arsenic. The typical total-arsenic range is therefore held as a censored fluid floor of <1 µg/kg with an upper anchor of 27 µg/kg taken from the only skim-named central value; the 95th percentile is left uncomputed because no fluid-skim-milk distribution exists. Total arsenic and inorganic arsenic are kept as distinct analytes; Arellano et al. explicitly do not speciate inorganic arsenic, and no speciated value exists for this ingredient, so iAs remains a reviewed data gap.

Total mercury rests on the FDA censored floor (<1 µg/kg) and the low Polish fluid-milk values from Starska et al. ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]], milk-group mean 1 µg/kg, 90th percentile 2 µg/kg, maximum 10 µg/kg), with Marques et al. reporting mercury below detection in skimmed cow milk. Total mercury is held distinct from methylmercury and is not derived from it; the upper bound of 2 µg/kg and the 95th-percentile anchor of 10 µg/kg are carried from the Starska fluid-milk distribution, which is the closest grounded clean-market fluid-dairy mercury distribution to the skim fraction.

Chromium is reported as total chromium at low confidence; no fluid-milk hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. Hexavalent chromium was not detected in any fluid-milk sample in either French speciation study ([[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez et al. 2019]], Cr-VI <LOD at 0.3 µg/kg across 68 milk, dairy and cereal samples; [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france|Saraiva et al. 2021]], Cr-VI not quantified in any milk sample at a 0.049 µg/kg limit of quantification by species-specific isotope dilution), confirming that food-matrix chromium is present essentially as Cr(III) and that any apparent Cr-VI is an analytical artifact. The total-chromium central rests on the Hernandez fluid-milk category (n=3 fluid milk comprising whole, semi-skimmed, and skimmed; mean 9.5 µg/kg, range 6.2 to 12 µg/kg fresh weight); because this is a three-sample fluid-milk aggregate rather than a skim-only distribution, it is carried as the fluid-milk central with the skim fraction included but not separately stratified, and the typical range of 6 to 12 µg/kg is reported at low confidence. The 95th percentile is left uncomputed: the corpus holds no skim-specific fluid-milk chromium distribution from which an upper tail could be derived, so any percentile figure would be an interpolation unsupported by a measured value. Nickel is recorded with only the FDA censored floor of <20 µg/kg: every fluid-skim composite in the FDA Total Diet Study FY2018-FY2020 fell below the 20 µg/kg nickel reporting limit, so the honest floor is that reporting limit expressed as a left-censored bound and no positive occurrence value or upper bound is published for the commodity. Marques et al. also measured nickel by ICP-MS and reported the highest nickel among all milks in non-organic skimmed fresh cow milk, but nickel was detected in only 6 of 32 composites and was excluded from group comparisons for sub-50-percent detection frequency, so no skim-milk-specific nickel concentration is extractable from that source. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and Marques et al. report it below detection in every sample, with no extractable quantitative value, so no distribution is published (the rice-uranium precedent).

Contaminated-pasture and industrial-region dairy strata documented elsewhere in the corpus (eastern-Turkey raw cow milk with Pb 190-440 µg/kg and Cd 200-380 µg/kg; Pakistani buffalo milk with feed-category exceedances) are raw whole-milk matrices, not skim fractions, and are described on the whole-milk page rather than folded into the skim-milk central estimate. No skim-milk-specific elevated or industrial stratum exists in the current corpus.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Milk, skim, fluid" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Heavy metal concentrations in commercial skim milk are low, near or below analytical reporting limits across the market. The FDA TDS data (n=27 composites) returned every analyte below its reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020]]); these are left-censored bounds, not measured zeros. The skim-milk-specific values that exist in the primary literature are all low but non-zero: the Spanish ICP-MS retail survey detected lead in non-organic skimmed cow milk below the limit of quantification ([[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]]), the Argentine dairy survey measured total arsenic in skimmed powdered milk at a mean of 26 ng/g on a powder basis with commercial fluid milk at a comparable 26.7 ng/g on a fluid basis ([[sources/arellano2023-dairy-products-arsenic-argentina|Arellano et al. 2023]]), the French speciation survey placed total chromium in fluid milk (including a skimmed sample) at 6 to 12 µg/kg with hexavalent chromium undetected ([[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez et al. 2019]]), and Polish national monitoring placed fluid-milk total mercury at a mean of 1 µg/kg with a maximum of 10 µg/kg ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]]). Organic versus conventional production shows no meaningful difference in heavy metal content in fluid dairy; Marques et al. found lead detected only in the non-organic skimmed milk, with the organic counterpart below detection. Regional variation from industrial contamination sources near individual dairy farms is documented in raw whole-milk case studies on the whole-milk page but does not appear in skim-specific commercial market-basket data. No meaningful skim-specific range to characterize by region or variety exists in the current corpus beyond these low, near-censored anchors.

## Processing effects

Complete fat removal by centrifugal separation from whole milk to skim milk does not alter the trace metal content of the skim fraction. Pasteurization at standard HTST or UHT conditions does not decompose, volatilize, or remove heavy metals. Spray drying to produce skim milk powder concentrates metals proportionally with water removal (approximately tenfold on a wet-weight basis), but given the near-zero baseline in fluid skim milk, the resulting powder remains low-risk. Standard stainless steel processing equipment in commercial fluid dairy operations does not contribute measurable metals to the product under normal sanitary conditions and cleaning protocols.

## Ingredient-derivative risk

Skim milk is used as a beverage, in baking, as a component in dairy-based products, and as a source of skim milk powder for infant formula and protein-fortified products. The near-zero metal content of skim milk means its contribution to the metal load of any formulated product is negligible. Skim milk powder used in infant formula at typical inclusion levels contributes essentially no Pb, Cd, or Hg; other formula ingredients carry higher metal risk. Non-fat dry milk used in protein bars and meal replacement products similarly does not drive the metal profile of those products.

## Mitigation options

### Sourcing levers

Standard commercial dairy supply chain oversight is sufficient for this commodity. No special sourcing protocol is required for metal-reduction purposes given the consistently near-zero baseline.

### Agronomic levers

_No quantified data on agronomic levers specific to reducing metals in cow milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard pasteurization and fat separation operations do not introduce metals and require no modification for metal-reduction purposes.

### Formulation levers

_No quantified data on formulation levers for skim milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine surveillance for Pb and Cd in skim milk is maintained by regulatory monitoring programs in the US and EU. Given the consistently below-detection values across the corpus, this commodity does not warrant intensive independent lot-level testing beyond standard quality assurance protocols, except in supply chains serving infant formula manufacturing where regulatory oversight typically mandates additional verification.

### Packaging and storage levers

Standard packaging formats (HDPE, glass, Tetra Pak) do not contribute metals to skim milk. Refrigerated storage does not alter metal content.

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the maximum Pb level for raw milk, heat-treated milk, and milk-based products is 0.020 mg/kg (20 ppb) wet weight. The corresponding Cd maximum level for milk and milk products is 0.020 mg/kg (20 ppb) wet weight. These are among the lowest matrix-specific limits in the EU contaminants framework, reflecting both the low exposure reality and the importance of protecting infants and young children who consume dairy as a primary food. The FDA does not publish a specific action level for Pb or Cd in skim milk; general surveillance under 21 CFR applies. The Closer to Zero program (see [[regulations/fda-closer-to-zero]]) does not identify fluid dairy as a high-priority category for Pb reduction interventions.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2021 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/arellano2023-dairy-products-arsenic-argentina|Arsenic risk assessment through dairy products ingestion]]<span class="hmi-ref-meta">F.E. Arellano, A. Fernandez-Cirelli, S. Braeuer, W. Goessler, and A.L. Perez-Carrera · Arsenic in the Environment: Bridging Science to Practice for Sustainable Development · 2023 · [doi.org/10.1201/9781003317395-91](https://doi.org/10.1201/9781003317395-91)</span><span class="hmi-ref-tag">Conference</span>
4. [[sources/starska2011-noxious-elements-milk-products-poland|Noxious Elements in Milk and Milk Products in Poland]]<span class="hmi-ref-meta">Starska K, Wojciechowska-Mazurek M, Mania M, Brulinska-Ostrowska E, Biernat U, and Karlowski K · Polish Journal of Environmental Studies · 2011</span><span class="hmi-ref-tag">Review</span>
5. [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment]]<span class="hmi-ref-meta">Hernandez F, Bemrah N, Séby F, Noël L, and Guérin T · Food Additives & Contaminants Part B: Surveillance · 2019 · [doi.org/10.1080/19393210.2019.1598506](https://doi.org/10.1080/19393210.2019.1598506)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france|Chromium speciation analysis in raw and cooked milk and meat samples by species-specific isotope dilution and HPLC-ICP-MS]]<span class="hmi-ref-meta">Saraiva M, Chekri R, Guérin T, Sloth JJ, and Jitaru P · Food Additives & Contaminants Part A 38(2):304-314 · 2021 · [doi.org/10.1080/19440049.2020.1859144](https://doi.org/10.1080/19440049.2020.1859144)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/arellano2023-dairy-products-arsenic-argentina\|Arellano et al. 2023]]. *Arsenic risk assessment through dairy products ingestion*, Arsenic in the Environment: Bridging Science to Practice for Sustainable Development | 2023 | Conference proceedings | tAs in skimmed powdered milk (mean 26.0 ± 2.72 ng/g, range <LOD–38 ng/g, powder basis) and commercial fluid milk (mean 26.7 ng/g); the only skim-named total-arsenic value in the corpus; iAs not speciated |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Milk, skim, fluid (n=27); all analytes below reporting limit, carried as left-censored bounds (Pb/Cd/tAs/tHg/U RL 1, Ni RL 20, Cr RL 25 µg/kg) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0b8cc0157](https://github.com/paleofoundation/heavymetalindex/commit/0b8cc0157) | 2026-06-11 | correction | 5 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
