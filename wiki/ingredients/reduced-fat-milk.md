---
title: "Reduced-fat milk"
type: ingredient
commodity: reduced-fat-milk
label: "Reduced-fat milk"
aliases: ["Milk, reduced fat, fluid", "milk, reduced fat"]
category: dairy
tds_food:
  number: 2
  description: "Milk, reduced fat, fluid"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 17]
    p95_ppb: 30
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: fluid-reduced-fat-milk-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 27]
    p95_ppb: 45
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: fluid-reduced-fat-milk-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 43]
    p95_ppb: 80
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: fluid-reduced-fat-milk-wet-weight
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 10
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fluid-reduced-fat-milk-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: fluid-reduced-fat-milk-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [3, 8]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: fluid-reduced-fat-milk-wet-weight
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
sources: 1
---

# Reduced-fat milk

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 2, "Milk, reduced fat, fluid." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Reduced-fat milk is fluid cow milk from which a portion of the milk fat has been removed, typically to achieve a fat content of approximately 2 percent by weight. As a dairy matrix, reduced-fat milk is among the lowest-risk food categories for heavy metal contamination. The mammary gland is not a primary excretion route for most heavy metals; the blood-milk barrier limits transfer of Pb, Cd, Hg, and most other regulated analytes from systemic circulation into milk at detectable levels under normal dietary exposure conditions for the cow. The small amounts of metals that do transfer to milk are primarily associated with the casein protein fraction and to a lesser extent with the whey protein fraction, rather than with the fat fraction. Consequently, removing fat from whole milk does not meaningfully change the metal content of the resulting reduced-fat product: metals remain in the aqueous and protein phases. Pb and Cd in milk reflect the cow's environmental and dietary exposure, which in modern commercial dairy herds under regulated feeding conditions is low. Soil contamination near grazing pastures and the mineral content of feed supplements are the dominant drivers of variation in cow milk metal content; both are tightly managed in most commercial dairy supply chains. The FDA TDS FY2018-FY2020 composite for reduced-fat milk (n=27) reported every measured analyte below its reporting limit except for a single lead observation of 1.7 µg/kg at the maximum; those below-limit results are carried as left-censored bounds rather than as measured zeros, and the detected fluid-milk distributions from the primary clean-market literature show lead, cadmium, total arsenic, total mercury, and chromium present at low but non-zero concentrations (see the Synthesis basis and censoring treatment section) [[sources/fda2022-tds-elements-fy2018-fy2020]]. The concentrations are low rather than zero.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 6 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 6 of 10 populated analytes declare a basis | no wet/dry basis declared: iAs, Al, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–17 | medium | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/salaheldin2025-multimatrix-foods-egypt\|2]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|3]] |
| Cd | n=3 | 0–27 | medium | [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals\|1]], [[sources/salaheldin2025-multimatrix-foods-egypt\|2]], [[sources/starska2011-noxious-elements-milk-products-poland\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 0–43 | medium | [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]], [[sources/salaheldin2025-multimatrix-foods-egypt\|3]] |
| tHg | n=2 | 0–2 | low | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/pankiewicz2012-thg-dairy-products-poland\|2]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 3–8 | low | [[sources/salaheldin2025-multimatrix-foods-egypt\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on a fluid reduced-fat-milk wet-weight basis, the form in which the ingredient enters the supply chain. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported all of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Milk, reduced fat, fluid" (n=27), in which every sample fell below the reporting limit for each metal except for a single lead detection at 1.7 µg/kg, and the below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 1, Cd 1, tAs 1, tHg 1, Ni 20, Cr 25, U 1 µg/kg). The resynthesis replaces the literal zeros with the detected fluid-cow-milk distributions from the primary occurrence literature, in which lead, cadmium, total arsenic, total mercury, and chromium are all low but non-zero. The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound (reported as "<1" or "<20"), not a measured zero.

No published fluid-milk occurrence survey in the current corpus stratifies cow milk by fat fraction except Marques et al. (2021), so the fluid-milk surveys below are used as reduced-fat-milk context on the basis that the regulated heavy metals partition into the aqueous and protein phases rather than the fat phase, making removal of milk fat essentially neutral for metal content. Where a survey reports only an undifferentiated fluid-milk group, that broad attribution is stated and the value is not relabeled as reduced-fat-specific.

Lead rests on European and North-African clean-market fluid-milk surveys and one fraction-matched skimmed-milk anchor: the Polish national monitoring of 75 liquid-milk samples ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]], whole-fluid-milk group mean 8 µg/kg, 90th percentile 17 µg/kg, two of 75 samples above the 20 µg/kg EU limit with a single maximum of 50 µg/kg; reported for the undifferentiated milk group, not split by fat content), the Egyptian retail-milk survey ([[sources/salaheldin2025-multimatrix-foods-egypt|Salahel din et al. 2025]], milk group n=4, mean 20.8 µg/kg, range 12-30 µg/kg, undifferentiated by fat fraction), the Bangladesh raw-and-pasteurized survey ([[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals|Hasan et al. 2022]], pasteurized liquid milk mean 13 µg/kg), and the Spanish retail survey ([[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]]), the only source measuring a fat-fraction-matched value: non-organic skimmed cow milk lead of 0.033 in the paper's stated units. The Marques Table 1 header reads µg/kg but the methods text and the paper's own Codex comparison are internally consistent only on a µg/g (= mg/kg) basis, so the reconciled value of 33 µg/kg is carried as a single corroborating skimmed-fraction retail anchor rather than as a percentile driver until the unit basis is confirmed with the corresponding author. The cadmium central rests on Hasan et al. (raw 32 µg/kg, pasteurized 27 µg/kg, raw range to 45 µg/kg), Salahel din et al. (mean 6.3 µg/kg, range 3-9 µg/kg), and Starska et al. (milk-group mean 1 µg/kg, 90th percentile 3 µg/kg, maximum 7 µg/kg). Total arsenic rests on Hasan et al. (pasteurized mean 43 µg/kg, range to 89 µg/kg; raw mean 53 µg/kg), Starska et al. (milk and liquid-product group mean 5-8 µg/kg, 90th percentile 19 µg/kg, maximum 80 µg/kg), and Salahel din et al. (mean 1.8 µg/kg). Total mercury rests on the low Polish fluid-milk values from Starska et al. (mean 1 µg/kg, 90th percentile 2 µg/kg, maximum 10 µg/kg) and Pankiewicz 2012 ([[sources/pankiewicz2012-thg-dairy-products-poland|Pankiewicz 2012]], fluid milk 0.03-0.06 µg/kg by direct-mercury analyzer).

Total arsenic and inorganic arsenic are kept as distinct analytes; only speciated measurements would populate the inorganic-arsenic cell, and no speciated value exists for this ingredient, so iAs remains a reviewed data gap. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium at low confidence; no fluid-milk hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The total-chromium central rests on Salahel din et al. (mean 5.3 µg/kg, range 3-8 µg/kg); Hasan et al. report markedly higher total chromium in Bangladesh milk (raw mean 548 µg/kg, pasteurized mean 457 µg/kg), which is held as a high South-Asian stratum and not adopted as the central or 95th-percentile value pending corroboration, because a chromium concentration two orders of magnitude above the FDA censored floor in fluid milk is more consistent with a processing-equipment or analytical contribution than with a commodity-wide baseline. The 95th-percentile chromium value is left uncomputed: the only clean-market fluid-milk distribution available is Salahel din et al.'s narrow 3-8 µg/kg range, with no grounded mid-range fluid-milk chromium value between that ceiling and the stratified-out Bangladesh means in the hundreds, so any upper-tail figure would be an unsupported interpolation and the p95 is carried as null. Nickel is recorded with only the FDA censored floor of <20 µg/kg: every reduced-fat-fluid-milk composite in the FDA Total Diet Study FY2018-FY2020 fell below the 20 µg/kg nickel reporting limit, so the honest floor is that reporting limit expressed as a left-censored bound and no positive occurrence value or upper bound is published for the commodity. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and Marques et al. report it below detection in every sample, with no extractable quantitative value, so no distribution is published (the rice-uranium precedent).

Elevated/industrial-region strata are described separately and are not folded into the central estimate: raw cow milk from eastern Turkey carried lead of 190-440 µg/kg and cadmium of 200-380 µg/kg ([[sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus|Yildiz Kucuk and Gokcek 2024]], 10 samples, all above the Turkish raw-milk lead limit and roughly an order of magnitude above every clean-market fluid-cow-milk survey), and Pakistani buffalo milk carried lead to 29 µg/kg, cadmium to 58 µg/kg, total arsenic to 198 µg/kg, and total mercury to 30 µg/kg with feed-category exceedances ([[sources/shahzad2025-buffalo-milk-trace-metals|Shahzad et al. 2025]]). These are contaminated-pasture and non-cow-species outliers, not characteristics of the reduced-fat-cow-milk commodity.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Milk, reduced fat, fluid" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 1.7 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Metal concentrations in reduced-fat milk vary by production region, feed composition, and the mineral content of drinking water available to the herd. European surveys have consistently found fluid milk Pb and Cd concentrations at or near analytical detection limits in commercial samples, with occasional elevated values linked to industrial point sources near grazing areas. US TDS data corroborate this low-level profile. The fat-reduction step itself (centrifugal separation) introduces negligible variation because metals are not preferentially associated with the fat phase. Organic versus conventional production does not substantially change the metal profile of fluid milk. No evidence in the current corpus documents a meaningful varietal or regional difference in reduced-fat milk that would alter the overall low-risk characterization of this commodity.

## Processing effects

Fat removal by centrifugal separation does not alter heavy metal content in reduced-fat milk relative to whole milk. The metals are in the aqueous and protein fractions and are retained regardless of fat content. Pasteurization (HTST or UHT) does not destroy or remove heavy metals; it does not alter metal concentration. Homogenization likewise has no effect on metal content. The only processing context where metal introduction is possible is equipment contact: stainless steel processing equipment is a minor source of Ni and Cr at the parts-per-billion level under some processing conditions, but this is tightly managed through food-contact equipment regulations and routine cleaning protocols. The small Cr observation in the FDA TDS data for some dairy products (see [[ingredients/processed-american-cheese]] for a more notable example) is worth monitoring but is not documented as a systematic issue for fluid milk.

## Ingredient-derivative risk

Reduced-fat milk is a commodity ingredient used in manufactured dairy products, baked goods, beverages, and infant formula. In each of these applications, the metal contribution from the milk fraction is negligible given the near-zero baseline. The highest-concern derivatives are infant formula products that use reduced-fat or nonfat dry milk as a primary protein and mineral source, but the risk in those products comes from other ingredients (vegetable oils, mineral premixes, carbohydrate sources) rather than from the dairy fraction itself. Evaporated reduced-fat milk involves modest concentration through water removal, but given the near-zero baseline, the resulting product remains low-risk.

## Mitigation options

### Sourcing levers

Given the inherently low metal content of reduced-fat milk in commercial supply chains, sourcing levers have limited practical relevance for this commodity. Restricting procurement to herds with documented low environmental Pb and Cd exposure (for example, herds not grazing near industrial sites) is a standard precautionary practice for infant formula manufacturers, but is unlikely to produce measurable differences in metal content for retail reduced-fat milk.

### Agronomic levers

_No quantified data on agronomic levers specific to reducing metals in cow milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

No processing lever specific to fat reduction alters the metal profile. Standard pasteurization, homogenization, and fat separation practices do not introduce or remove metals.

### Formulation levers

_No quantified data on formulation levers for reduced-fat milk in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine surveillance testing of fluid milk for Pb and Cd by ICP-MS is standard practice in commercial dairy supply chains and regulatory monitoring programs. Given the consistently near-zero values in the current corpus, this commodity is low-priority for intensive lot-level testing unless specific supply-chain risk factors (proximity to industrial contamination, use in infant formula) warrant elevated scrutiny.

### Packaging and storage levers

Packaging does not contribute heavy metals to fluid milk under standard HDPE or Tetra Pak formats. Storage at refrigeration temperatures for the intended shelf life does not alter metal content.

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the maximum Pb level for raw milk, heat-treated milk, and milk-based products is 0.020 mg/kg (20 ppb) wet weight. A Cd maximum of 0.020 mg/kg (20 ppb) applies to milk and milk products. The FDA does not publish a specific action level for Pb or Cd in fluid milk; the general tolerance and surveillance framework under 21 CFR applies, and reduced-fat milk is not specifically addressed in the Closer to Zero guidance documents (see [[regulations/fda-closer-to-zero]]) because dairy is not among the high-priority categories for infant and young child Pb exposure identified in the CTZ program.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/starska2011-noxious-elements-milk-products-poland|Noxious Elements in Milk and Milk Products in Poland]]<span class="hmi-ref-meta">Starska K, Wojciechowska-Mazurek M, Mania M, Brulinska-Ostrowska E, Biernat U, and Karlowski K · Polish Journal of Environmental Studies · 2011</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/salaheldin2025-multimatrix-foods-egypt|Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety]]<span class="hmi-ref-meta">Salahel din K, Abdalbasit Y, Abbady A, and Saad N · Scientific Reports · 2025 · [doi.org/10.1038/s41598-025-27798-w](https://doi.org/10.1038/s41598-025-27798-w)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals|Determination of heavy metals in raw and pasteurized liquid milk of Bangladesh to assess the potential health risks]]<span class="hmi-ref-meta">Hasan GMM A, Kabir MH, and Miah MAS · Food Research · 2022 · [doi.org/10.26656/fr.2017.6(1).191](https://doi.org/10.26656/fr.2017.6(1).191)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2021 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/pankiewicz2012-thg-dairy-products-poland|Monitoring of total mercury level in selected dairy products from the south-east regions of Poland]]<span class="hmi-ref-meta">Pankiewicz U · Ecological Chemistry and Engineering A · 2012 · [doi.org/10.2428/ecea.2012.19(01)014](https://doi.org/10.2428/ecea.2012.19(01)014)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus|Determination of Some Minerals and Heavy metals in Raw Cow's Milk Collected from Different Regions of Muş Province]]<span class="hmi-ref-meta">Yildiz Kucuk N and Gokcek R · Afyon Kocatepe University – Journal of Science and Engineering (AKU J. Sci. Eng.) · 2024 · [doi.org/10.35414/akufemubid.1391478](https://doi.org/10.35414/akufemubid.1391478)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/shahzad2025-buffalo-milk-trace-metals|Assessment of hazardous trace metals and associated health risk as affected by feed intake in buffalo milk]]<span class="hmi-ref-meta">Samun Shahzad, Kamran Ashraf, Nusrat Ehsan, Khawar Sultan, Asim Abbasi, Sobia Tabassum, et al. · Scientific Reports 15:9841 · 2025 · [doi.org/10.1038/s41598-025-92256-6](https://doi.org/10.1038/s41598-025-92256-6)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Milk, reduced fat, fluid (n=27); single Pb detection at 1.7 µg/kg, all other analytes left-censored; supplies the Ni and U censored floors |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 7 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
