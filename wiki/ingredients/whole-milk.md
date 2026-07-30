---
title: "Whole milk"
type: ingredient
commodity: whole-milk
label: "Whole milk"
aliases: [whole milk]
category: dairy
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 17]
    p95_ppb: 30
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: fluid-whole-milk-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 45
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: fluid-whole-milk-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: 90
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: fluid-whole-milk-wet-weight
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 10
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fluid-whole-milk-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: fluid-whole-milk-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [3, 8]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fluid-whole-milk-wet-weight
    speciation: total-Cr-only
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
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 10
---

# Whole milk

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 5/10 HMTc analytes, total n=16 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | OK | 8 jurisdictions, top PL 25% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE, tHg THIN, Ni THIN, Cr THIN | tHg: needs 1 more study(ies); Ni: needs 2 more study(ies); Cr: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 6/10 populated cells declare a basis token | 4 populated cell(s) lack a basis token: iAs, Al, Sn, U |
| D8 Provenance integrity | GAP | 56 claims checked, 56 supported; 9 citations, 0 orphan, 3 foreign | 3 foreign citation(s) not naming whole-milk: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020, shahzad2025-buffalo-milk-trace-metals |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr; pairing 0 paired, 6 single, 0 unpaired | tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 2 more study(ies); Cr: THIN, needs 1 more study(ies); basis: 4 populated cell(s) lack a basis token: iAs, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Whole milk is a low-accumulator matrix for most heavy metals. The dairy cow's physiology actively restricts the transfer of ingested metals from blood to milk; this is particularly effective for cadmium and lead, which are tightly regulated across biological membranes. The transfer factor from feed to milk for Cd and Pb is very low (typically below 1 percent for Pb, and even lower for Cd), meaning that even when cows graze on Cd-or Pb-contaminated pastures, the resulting milk carries concentrations well below those of the feed. Mercury transfer to milk is similarly restricted. The FDA TDS FY2018-FY2020 composite for whole fluid milk (n=27) reported all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) below their reporting limits across the entire distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]); those below-limit results are carried as left-censored bounds rather than as measured zeros, and the detected fluid-milk distributions from the primary clean-market literature show all five of lead, cadmium, total arsenic, total mercury, and chromium present at low but non-zero concentrations (see the Synthesis basis and censoring treatment section). The low concentrations are consistent with the well-established low-risk characterisation of fluid dairy from non-contaminated herds, but the values are low rather than zero. Whole milk's fat content relative to skim milk results in slightly higher concentrations of lipophilic metal species, but this effect is minor for the regulated heavy metals of concern.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–17 | medium | [[sources/salaheldin2025-multimatrix-foods-egypt\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]], [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals\|3]] |
| Cd | n=4 | 0–30 | medium | [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals\|1]], [[sources/salaheldin2025-multimatrix-foods-egypt\|2]], [[sources/starska2011-noxious-elements-milk-products-poland\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 0–50 | medium | [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]], [[sources/salaheldin2025-multimatrix-foods-egypt\|3]] |
| tHg | n=2 | 0–2 | low | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/pankiewicz2012-thg-dairy-products-poland\|2]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 3–8 | low | [[sources/salaheldin2025-multimatrix-foods-egypt\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on a fluid whole-milk wet-weight basis, the form in which the ingredient enters the supply chain. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported all seven of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Milk, whole, fluid" (n=27), in which every sample fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 1, Cd 1, tAs 1, tHg 1, Ni 20, Cr 25, U 1 µg/kg). The resynthesis replaces the literal zeros with the detected fluid-milk distributions from the primary occurrence literature, in which lead, cadmium, total arsenic, total mercury, and chromium are all low but non-zero. The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound (reported as "<1" or "<20"), not a measured zero.

Lead rests on European and North-African clean-market fluid-milk surveys: the Polish national monitoring of 75 liquid-milk samples ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]], mean 8 µg/kg, 90th percentile 17 µg/kg, two of 75 samples above the 20 µg/kg EU limit with a single maximum of 50 µg/kg), the Bangladesh raw-and-pasteurized survey ([[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals|Hasan et al. 2022]], mean 13 µg/kg), the Egyptian retail-milk survey ([[sources/salaheldin2025-multimatrix-foods-egypt|Salahel din et al. 2025]], mean 20.8 µg/kg, maximum 30 µg/kg), and the Spanish retail whole-milk value measured by ICP-MS ([[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]], whole cow milk 27 in the paper's stated units; the Table 1 header reads µg/kg but the methods text and Codex comparison are internally consistent only on a µg/g [= mg/kg] basis, so the reconciled value of 27 µg/kg is carried as a single corroborating retail anchor rather than as a percentile driver until the unit basis is confirmed with the corresponding author). The cadmium central rests on Hasan et al. (raw 32 µg/kg, pasteurized 27 µg/kg, raw range to 45 µg/kg), Salahel din et al. (mean 6.3 µg/kg, maximum 9 µg/kg), and Starska et al. (mean 1 µg/kg, 90th percentile 3 µg/kg, maximum 7 µg/kg). Total arsenic rests on Hasan et al. (raw mean 53 µg/kg, range to 91 µg/kg), Starska et al. (milk-group mean 5-8 µg/kg, 90th percentile 19 µg/kg, maximum 80 µg/kg), and Salahel din et al. (mean 1.8 µg/kg). Total mercury rests on the low Polish fluid-milk values from Starska et al. (mean 1 µg/kg, 90th percentile 2 µg/kg, maximum 10 µg/kg) and Pankiewicz 2012 ([[sources/pankiewicz2012-thg-dairy-products-poland|Pankiewicz 2012]], fluid milk 0.03-0.06 µg/kg by direct-mercury analyzer).

Total arsenic and inorganic arsenic are kept as distinct analytes; only speciated measurements would populate the inorganic-arsenic cell, and no speciated value exists for this ingredient, so iAs remains a reviewed data gap. Total mercury is held distinct from methylmercury and is not derived from it.

Raw cow milk from eastern Turkey ([[sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus|Yildiz Kucuk and Gokcek 2024]], Pb 190-440 µg/kg, Cd 200-380 µg/kg across 10 samples, all above the Turkish raw-milk lead limit) and Pakistani buffalo milk ([[sources/shahzad2025-buffalo-milk-trace-metals|Shahzad et al. 2025]], Pb to 29 µg/kg, Cd to 58 µg/kg, tAs to 198 µg/kg, tHg to 30 µg/kg, with feed-category exceedances) are documented elevated/industrial-region strata and are described separately below rather than folded into the central estimate; the Turkish values are roughly an order of magnitude above every clean-market fluid-cow-milk survey and are treated as a contaminated-pasture outlier.

Chromium is reported as total chromium at low confidence; no fluid-milk hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The total-chromium central rests on Salahel din et al. (mean 5.3 µg/kg, range 3-8 µg/kg); Hasan et al. report markedly higher total chromium in Bangladesh milk (raw mean 548 µg/kg, pasteurized mean 457 µg/kg), which is held as a high South-Asian stratum and not adopted as the central or 95th-percentile value pending corroboration, because a chromium concentration two orders of magnitude above the FDA censored floor in fluid milk is more consistent with a processing-equipment or analytical contribution than with a commodity-wide baseline. The 95th-percentile chromium value is left uncomputed: the only clean-market fluid-milk distribution available is Salahel din et al.'s narrow 3-8 µg/kg range, and the corpus holds no grounded mid-range fluid-milk chromium value between that ceiling of 8 µg/kg and the stratified-out Bangladesh means in the hundreds, so any upper-tail figure would be an interpolation unsupported by a measured value. The p95 is therefore carried as null rather than as an inferred number until a corroborating mid-range fluid-milk chromium measurement is ingested. Nickel is recorded with only the FDA censored floor of <20 µg/kg: every whole-fluid-milk composite in the FDA Total Diet Study FY2018-FY2020 fell below the 20 µg/kg nickel reporting limit, so the honest floor is that reporting limit expressed as a left-censored bound and no positive occurrence value or upper bound is published for the commodity. Marques et al. also measured nickel by ICP-MS but did not stratify a whole-cow-milk concentration: they detected nickel in 6 of 32 milk and plant-drink composites (treating nickel as an essential element, with the highest value in non-organic skimmed fresh cow milk) and excluded it from group comparisons for sub-50-percent detection frequency, so no whole-milk-specific nickel value is extractable from that source and it does not establish a <LD result for this commodity. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and Marques et al. report it below detection in every sample, with no extractable quantitative value, so no distribution is published (the rice-uranium precedent).

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 1, "Milk, whole, fluid." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Milk, whole, fluid" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

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

FDA TDS FY2018-FY2020 data (n=27) for whole fluid milk in the US reported every analyte (Cd, Cr, Ni, Pb, U, tAs, tHg) below its reporting limit throughout the distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]); these are left-censored bounds, not measured zeros. The detected fluid-milk distributions in the primary literature place lead at a clean-market central of roughly 8 to 21 µg/kg ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]] mean 8 µg/kg, 90th percentile 17 µg/kg; [[sources/salaheldin2025-multimatrix-foods-egypt|Salahel din et al. 2025]] mean 20.8 µg/kg; [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals|Hasan et al. 2022]] mean 13 µg/kg), cadmium across a wider span from the low Polish values (mean 1 µg/kg) up to the Bangladesh raw-milk mean of 32 µg/kg, and total arsenic from roughly 2 µg/kg to a Bangladesh raw-milk mean of 53 µg/kg. Raw cow milk from contaminated pastures sits an order of magnitude higher: eastern-Turkey raw milk carried Pb of 190 to 440 µg/kg and Cd of 200 to 380 µg/kg ([[sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus|Yildiz Kucuk and Gokcek 2024]]), all above the Turkish raw-milk lead limit. Dairy from herds grazing pastures with elevated Pb or Cd, such as land near legacy mining or smelting operations, can produce milk with these elevated concentrations; this is a localised exception rather than a characteristic of the commodity category, and the Turkish and Pakistani-buffalo values are stratified out of the central estimate. Organic versus conventional milk is not systematically associated with different metal profiles in the published literature, as the primary determinant of milk metal content is the metal burden of the pasture and feed rather than production system.

## Processing effects

Pasteurisation (HTST or UHT) does not significantly alter the metal content of milk; the thermal treatment targets microbial pathogens rather than mineral or metal composition. Homogenisation, which breaks up fat globules to produce uniform fat distribution, does not change total metal concentrations. Ultra-high temperature (UHT) processing and sterilisation similarly leave metal concentrations unchanged. Spray-drying of whole milk to produce whole milk powder concentrates all solutes including metals in proportion to the water removed, roughly by a factor of 7 to 8 (reflecting the reconstitution ratio of approximately 1 part powder to 7 parts water); however, because the starting fluid milk concentrations are near or below detection limits, the resulting whole milk powder concentrations remain very low even after this concentration step. Evaporated milk, which is concentrated but not fully dried, shows a similar concentration factor.

## Ingredient-derivative risk

Whole milk is the starting material for a range of dairy derivatives including cream, butter, cheese, yogurt, condensed milk, evaporated milk, and whole milk powder. In all of these derivatives, the metal profile of the raw milk is carried through with modification only by the concentration or dilution factor of the processing step. Cheese production involves concentration of protein and fat (which removes whey), so any metals associated with the protein or fat fraction may be slightly concentrated in the curd; however, cheese metal concentrations remain very low given the near-zero starting point of fluid milk. Butter, which is almost pure fat, carries minimal metals. Whey protein products (whey protein concentrate, whey protein isolate) are addressed on separate ingredient pages and may carry different metal profiles from the whey fraction.

## Mitigation options

### Sourcing levers

Sourcing milk from herds grazing on non-contaminated pastures in regions without legacy industrial Pb or Cd soil loading is the primary upstream lever, though this is rarely a practical concern for commercially produced whole milk at population scale. In geographies with legacy mining or smelting activity adjacent to dairy farming, pasture metal testing and milk surveillance are appropriate.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine heavy metal testing of commercial whole milk for Pb and Cd is unlikely to yield actionable values under standard supply-chain conditions. Testing is warranted for dairy sourced from geographic areas with known soil contamination, or for product categories such as infant formula where milk is a primary ingredient and regulatory scrutiny of metals is high.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets a maximum level for Pb in raw milk, heat-treated milk, and milk-based products of 0.020 mg/kg (20 ppb) under [[regulations/eu2023-contaminants-maximum-levels]]. No EU maximum level is set for Cd in fluid milk because Cd transfer to milk from contaminated feed is very low. No maximum level for Hg in milk is promulgated under current EU contaminant regulations. In the US, no FDA action level for Pb, Cd, or Hg in fluid cow milk is currently enforced under the [[regulations/fda-closer-to-zero]] programme, which focuses on processed infant foods and baby foods rather than raw milk constituents. [[regulations/codex-cadmium-mls]] includes provisions for Pb in milk at 0.020 mg/kg, consistent with the EU limit.

<!-- BEGIN: hmi-page-references -->
## References

The 9 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
2. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
3. Starska K, Wojciechowska-Mazurek M, Mania M, Brulinska-Ostrowska E, Biernat U, and Karlowski K (2011). *Noxious Elements in Milk and Milk Products in Poland*. Polish Journal of Environmental Studies. Peer-reviewed, A-tier. [[sources/starska2011-noxious-elements-milk-products-poland|Source record]]
4. Hasan GMM A, Kabir MH, and Miah MAS (2022). *Determination of heavy metals in raw and pasteurized liquid milk of Bangladesh to assess the potential health risks*. Food Research. [https://doi.org/10.26656/fr.2017.6(1).191](https://doi.org/10.26656/fr.2017.6(1).191). Peer-reviewed, A-tier. [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals|Source record]]
5. Salahel din K, Abdalbasit Y, Abbady A, and Saad N (2025). *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*. Scientific Reports. [https://doi.org/10.1038/s41598-025-27798-w](https://doi.org/10.1038/s41598-025-27798-w). Peer-reviewed, A-tier. [[sources/salaheldin2025-multimatrix-foods-egypt|Source record]]
6. Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. (2021). *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*. Biological Trace Element Research. [https://doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5). Peer-reviewed, A-tier. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Source record]]
7. Pankiewicz U (2012). *Monitoring of total mercury level in selected dairy products from the south-east regions of Poland*. Ecological Chemistry and Engineering A. [https://doi.org/10.2428/ecea.2012.19(01)014](https://doi.org/10.2428/ecea.2012.19(01)014). Peer-reviewed, B-tier. [[sources/pankiewicz2012-thg-dairy-products-poland|Source record]]
8. Yildiz Kucuk N and Gokcek R (2024). *Determination of Some Minerals and Heavy metals in Raw Cow's Milk Collected from Different Regions of Muş Province*. Afyon Kocatepe University – Journal of Science and Engineering (AKU J. Sci. Eng.). [https://doi.org/10.35414/akufemubid.1391478](https://doi.org/10.35414/akufemubid.1391478). Peer-reviewed, A-tier. [[sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus|Source record]]
9. Samun Shahzad, Kamran Ashraf, Nusrat Ehsan, Khawar Sultan, Asim Abbasi, Sobia Tabassum, et al. (2025). *Assessment of hazardous trace metals and associated health risk as affected by feed intake in buffalo milk*. Scientific Reports 15:9841. [https://doi.org/10.1038/s41598-025-92256-6](https://doi.org/10.1038/s41598-025-92256-6). Peer-reviewed, A-tier. [[sources/shahzad2025-buffalo-milk-trace-metals|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | EG Pb, Cd, Cr, tAs occurrence in Fifty-four food and beverage samples collected January-December 2022 from local markets in Qena Governorate, southern Egypt: beverages (n=20;... (n=54) |
| 2 | [[sources/shahzad2025-buffalo-milk-trace-metals\|Shahzad et al. 2025]]. *Assessment of hazardous trace metals and associated health risk as affected by feed intake in buffalo milk*, Scientific Reports 15:9841 | 2025 | Peer-reviewed | PK Pb, Cd, tHg, tAs, Mn, Fe occurrence in Ninety buffalo-milk samples from Tehsil Daska, District Sialkot, Pakistan, grouped by buffalo feed category: alfalfa fodder, maize silage,... (n=90) |
| 3 | [[sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus\|Yildiz et al. 2024]]. *Determination of Some Minerals and Heavy metals in Raw Cow's Milk Collected from Different Regions of Muş Province*, Afyon Kocatepe University – Journal of Science and Engineering (AKU J. Sci. Eng.) | 2024 | Peer-reviewed | TR Pb, Cd, Fe, Cu, Mn, Mg, Zn occurrence in 10 raw cow milk samples from different regions of Muş province, eastern Turkey (n=10) |
| 4 | [[sources/arellano2023-dairy-products-arsenic-argentina\|Arellano et al. 2023]]. *Arsenic risk assessment through dairy products ingestion*, Arsenic in the Environment: Bridging Science to Practice for Sustainable Development | 2023 | Conference proceedings | AR tAs occurrence in Raw bovine, caprine, and ovine milk from 37 farms in Cordoba and Buenos Aires provinces, plus market commercial... (n=157) |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Milk, whole, fluid (n=27); all analytes reported as zero (BDL) |
| 6 | [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals\|Hasan et al. 2022]]. *Determination of heavy metals in raw and pasteurized liquid milk of Bangladesh to assess the potential health risks*, Food Research | 2022 | Peer-reviewed | BD Fe, Cu, Mn, Zn, Pb, Cd, Cr, tAs occurrence in 64 raw cow milk samples and 64 liquid pasteurized milk samples collected from 64 administrative areas of Bangladesh... (n=128) |
| 7 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Pb, tHg, Ni, and U in Spanish retail whole cow milk by ICP-MS; Pb detected in non-organic whole milk; finished-milk matrix context supplementing FDA TDS data |
| 8 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 9 | [[sources/pankiewicz2012-thg-dairy-products-poland\|Pankiewicz 2012]]. *Monitoring of total mercury level in selected dairy products from the south-east regions of Poland*, Ecological Chemistry and Engineering A | 2012 | Peer-reviewed | PL tHg occurrence in 48 dairy products (milk, kefir, natural and flavoured yogurt, cream, cream cheese, cottage cheese, butter, milk powder, buttermilk,... (n=48) |
| 10 | [[sources/starska2011-noxious-elements-milk-products-poland\|Starska et al. 2011]]. *Noxious Elements in Milk and Milk Products in Poland*, Polish Journal of Environmental Studies | 2011 | Peer-reviewed | PL Pb, Cd, tHg, tAs occurrence in 483 milk and dairy product samples from all 16 Polish voivodships (2006–2007); 92% domestic production, 8% imported from... (n=483) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [d626a623b](https://github.com/paleofoundation/heavymetalindex/commit/d626a623b) | 2026-06-11 | correction | 6 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
| [19891512a](https://github.com/paleofoundation/heavymetalindex/commit/19891512a) | 2026-05-13 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
