---
title: "Honey"
type: ingredient
commodity: honey
label: "Honey"
aliases: ["Honey", "honey"]
category: sweetener
tds_food:
  number: 172
  description: "Honey"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: 190
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-06-11
  Cd:
    status: populated
    typical_ppb: [0, 40]
    p95_ppb: 125
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-06-11
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 60]
    p95_ppb: null
    confidence: medium
    n_studies: 8
    basis: honey-as-sold
    speciation_note: total-As-only; no inorganic-As speciation in corpus (all sources ICP-MS/ICP-OES/XRF/AAS total-As)
    last_reviewed: 2026-06-23
  tHg:
    status: populated
    typical_ppb: [0, 45]
    p95_ppb: 100
    confidence: low
    n_studies: 3
    basis: honey-as-sold
    speciation_note: total-Hg-only; no methylmercury speciation in corpus
    last_reviewed: 2026-06-23
  Ni:
    status: populated
    typical_ppb: [0, 650]
    p95_ppb: 1100
    confidence: low
    n_studies: 5
    last_reviewed: 2026-06-11
  Al:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 160]
    p95_ppb: 900
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-23
sources: 22
---

# Honey

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 172, "Honey." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Honey is unusual among food commodities in that its metal content reflects the surrounding foraging environment of the bee colony rather than any intrinsic biological accumulation by a plant or animal. Honeybees collect nectar, pollen, and water from a foraging radius of approximately two to five kilometers from the hive; metals present in that environment from soil, atmospheric deposition, industrial emissions, vehicle exhaust, or agricultural pesticide residues can enter the hive via contaminated floral sources, pollen, and water. Lead in honey is primarily of atmospheric and soil deposition origin; proximity to high-traffic roads, industrial facilities, or mining operations elevates Pb concentrations in honeybees and hive products. Cadmium enters honey principally through contaminated soils and agricultural inputs, particularly phosphate fertilizers applied to crops within the foraging range. Because honey is a bee-processed concentrate of nectar, it acts as an environmental biomonitor: systematic differences in honey metal concentration across geographic regions reflect differences in environmental contamination rather than commodity-specific physiological accumulation. This biomonitoring character distinguishes honey from virtually all other food commodities on this wiki, and it means that geographic sourcing is the dominant driver of inter-sample variance. Published studies from Italy, Morocco, and other producing regions confirm that Pb in honey can exceed the EU maximum level of 0.10 mg/kg (100 ppb) in apiaries near industrial or high-traffic sites [[sources/naccari2025-honey-toxic-metals-microelements]].

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 4 at 5-14, 4 below 5 | below pooling depth: tHg, Al, Cr, U |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 2 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, Ni, Al, Cr, Sn, U |
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
| Pb | n=9 | 0–50 | medium | [[sources/abeslami2025-moroccan-honey-minerals\|1]], [[sources/wise2025-elevated-metals-us-honeys\|2]], [[sources/naccari2025-honey-toxic-metals-microelements\|3]] |
| Cd | n=9 | 0–40 | medium | [[sources/aghamirlou2015-iranian-honey-metals\|1]], [[sources/tomczyk2020-polish-honey-metal-transfer\|2]], [[sources/abeslami2025-moroccan-honey-minerals\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=8 | 0–60 | medium | [[sources/wise2025-elevated-metals-us-honeys\|1]], [[sources/naccari2025-honey-toxic-metals-microelements\|2]], [[sources/aghamirlou2015-iranian-honey-metals\|3]] |
| tHg | n=3 | 0–45 | low | [[sources/salama2019-libya-honey-metals\|1]], [[sources/gunes2021-yalova-chestnut-honey-metals\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=5 | 0–650 | low | [[sources/aghamirlou2015-iranian-honey-metals\|1]], [[sources/tomczyk2020-polish-honey-metal-transfer\|2]], [[sources/naccari2025-honey-toxic-metals-microelements\|3]] |
| Al | n=3 | 50–500 | low | [[sources/naccari2025-honey-toxic-metals-microelements\|1]], [[sources/wise2025-elevated-metals-us-honeys\|2]], [[sources/manouchehri2021-honey-heavy-metals-review\|3]] |
| Cr | n=4 | 0–160 | low | [[sources/aghamirlou2015-iranian-honey-metals\|1]], [[sources/naccari2025-honey-toxic-metals-microelements\|2]], [[sources/aljedani2017-honeybee-honey-saudi-arabia\|3]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The lead, cadmium, nickel, and chromium cells were resynthesized on 2026-06-11 on a honey-as-sold basis, the form in which honey enters the ingredient supply chain. The primary occurrence literature reports honey concentrations directly on this basis, so no reconstitution or moisture conversion is applied; sources reporting in mg/kg are read as ppb without rebasing.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead, cadmium, nickel, and chromium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study, which measured honey as TDS Food 172 with only three composites, every one of which fell below the reporting limit (lead 4 µg/kg, cadmium 1 µg/kg, nickel 40 µg/kg, chromium 50 µg/kg). With every composite censored, the FDA distribution collapsed into a degenerate tail (p10 equal to p90 equal to p95 equal to zero), and the reported zeros were pooled as literal zeros. The resynthesis records the honest left-censored floor as the reporting limit for each analyte (written `<4`, `<1`, `<40`, and `<50` in the typical-low position) and recomputes the central estimate and upper tail from the detected primary-literature distributions, in which all four metals are low but non-zero, with right tails driven by industrial-proximity, traffic, and mining-region production.

The lead distribution rests on European and North African market surveys. Abeslami et al. 2025 report 130 to 190 µg/kg across seven eastern-Moroccan honey types by ICP-MS ([[sources/abeslami2025-moroccan-honey-minerals|Abeslami et al. 2025]]); Jr et al. 2025 (Wise) report a 28-sample US mean of 178 µg/kg by XRF with the highest single states at 367 to 918 µg/kg ([[sources/wise2025-elevated-metals-us-honeys|Jr et al. 2025]]); Naccari et al. 2025 report Calabrian variety means of 79 to 125 µg/kg, exceeding the EU 100 µg/kg maximum level in the majority of samples ([[sources/naccari2025-honey-toxic-metals-microelements|Naccari et al. 2025]]); Aghamirlou et al. 2015 report an Iranian all-sample mean of 508 µg/kg (117 to 1628 µg/kg) ([[sources/aghamirlou2015-iranian-honey-metals|Aghamirlou et al. 2015]]). The central estimate is anchored to the lower European and US market means and the 95th-percentile to the Abeslami and Wise upper bulk near 190 µg/kg. Documented industrial and artisanal-mining honeys are stratified out of the headline distribution: Salama et al. 2019 report western-Libyan location means of 2,420 to 10,980 µg/kg ([[sources/salama2019-libya-honey-metals|Salama et al. 2019]]) and Teferi et al. 2026 report 18,000 to 21,420 µg/kg from artisanal-gold-mining districts in western Ethiopia ([[sources/teferi2026-honey-ethiopia-kellem-wollega|Teferi et al. 2026]]); these are reported as a separate mining and industrial stratum, not folded into the global percentile.

The cadmium distribution rests on the Iranian all-sample mean of 27.6 µg/kg (1.4 to 125.9 µg/kg) ([[sources/aghamirlou2015-iranian-honey-metals|Aghamirlou et al. 2015]]), Polish variety means of 10 to 40 µg/kg with a sample maximum near 70 µg/kg ([[sources/tomczyk2020-polish-honey-metal-transfer|Tomczyk et al. 2020]]), Moroccan values of 1.7 to 18 µg/kg ([[sources/abeslami2025-moroccan-honey-minerals|Abeslami et al. 2025]]), and Calabrian variety means of 6 to 9 µg/kg ([[sources/naccari2025-honey-toxic-metals-microelements|Naccari et al. 2025]]); the 95th-percentile anchor is set near the Aghamirlou maximum of 126 µg/kg. The industrial and mining stratum is again separated: Salama et al. 2019 report 125 to 150 µg/kg and Teferi et al. 2026 report 1,380 to 2,300 µg/kg, both above the headline distribution.

Nickel and chromium are characterized at low confidence because few honey datasets in the corpus report them and the FDA reporting limits are high (40 and 50 µg/kg). The nickel distribution rests on the Iranian all-sample mean of 652 µg/kg (65 to 1,094 µg/kg) ([[sources/aghamirlou2015-iranian-honey-metals|Aghamirlou et al. 2015]]), Polish variety means of 80 to 720 µg/kg with sample maxima to 1,660 µg/kg ([[sources/tomczyk2020-polish-honey-metal-transfer|Tomczyk et al. 2020]]), and Calabrian variety means of 71 to 108 µg/kg ([[sources/naccari2025-honey-toxic-metals-microelements|Naccari et al. 2025]]); the 95th-percentile is anchored to the Aghamirlou maximum near 1,100 µg/kg. The Teferi mining honeys at 6,050 to 8,850 µg/kg are stratified out. Chromium is reported as total chromium at low confidence; no honey hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. The total-chromium distribution rests on the Iranian all-sample mean of 900 µg/kg (172 to 1,220 µg/kg) ([[sources/aghamirlou2015-iranian-honey-metals|Aghamirlou et al. 2015]]), Calabrian variety means of 11 to 86 µg/kg ([[sources/naccari2025-honey-toxic-metals-microelements|Naccari et al. 2025]]), and the single Saudi Al-Baha detection of 160 µg/kg ([[sources/aljedani2017-honeybee-honey-saudi-arabia|Aljedani 2017]], chromium not detected in the other three regions); the central estimate is anchored near the Aljedani detection and the 95th-percentile to the Aghamirlou all-sample mean near 900 µg/kg, with a single-sample maximum of 1,220 µg/kg.

The total-arsenic and total-mercury cells were resynthesized on 2026-06-23 to remove a censored-zero artifact. The earlier profile reported both analytes at typical and 95th-percentile values of zero, which was an artifact of the FDA Total Diet Study composites, all of which fell below the reporting limit (total arsenic 3 µg/kg, mercury 1 µg/kg). With every FDA composite censored, the distribution collapsed to a degenerate zero, and the reported zeros were pooled as literal zeros. The resynthesis records the honest left-censored floor as the reporting limit and recomputes the central estimate and tail from the detected primary-literature distributions. All arsenic in the corpus is total arsenic; no honey inorganic-arsenic speciation exists, so no iAs value is inferred. All mercury is total mercury; no methylmercury speciation exists.

The total-arsenic distribution rests on Naccari et al. 2025 Calabrian variety means of 3 to 13 µg/kg by ICP-MS ([[sources/naccari2025-honey-toxic-metals-microelements|Naccari et al. 2025]]), Jr et al. 2025 (Wise) US XRF mean of 60 µg/kg across 28 samples ([[sources/wise2025-elevated-metals-us-honeys|Jr et al. 2025]]), Gunes 2021 Turkish chestnut-honey values of 0.03 to 0.95 µg/kg (mean 0.5 µg/kg, n=27) ([[sources/gunes2021-yalova-chestnut-honey-metals|Gunes 2021]]), and Salama et al. 2019 western-Libyan location means of 6 to 18 µg/kg ([[sources/salama2019-libya-honey-metals|Salama et al. 2019]]). Three datasets place total arsenic below their reporting limits: Aghamirlou et al. 2015 report all Iranian regional entries below 11.87 µg/kg ([[sources/aghamirlou2015-iranian-honey-metals|Aghamirlou et al. 2015]]), Limani Bektashi et al. 2021 report arsenic non-detected across five Balkan samples ([[sources/bektashi2021-honey-metals-sugars-balkans|Limani Bektashi et al. 2021]]), and Shukla et al. 2020 report arsenic below 10 µg/kg across fourteen Indian samples ([[sources/shukla2020-honey-prayagraj-metals|Shukla et al. 2020]]). The central estimate is left-censored at zero, with the typical upper bound anchored to the Wise US XRF mean of 60 µg/kg, the highest convergent central value in the pool. No defensible 95th-percentile tail above this upper bound is computable from the corpus, which is uniformly low and partly censored, so p95 is recorded as null.

The total-mercury distribution rests on Salama et al. 2019 western-Libyan location means of 14 to 100 µg/kg by atomic absorption spectroscopy ([[sources/salama2019-libya-honey-metals|Salama et al. 2019]]) and Gunes 2021 Turkish chestnut-honey values of 0.24 to 44.5 µg/kg (mean 21.5 µg/kg, n=27) ([[sources/gunes2021-yalova-chestnut-honey-metals|Gunes 2021]]), against the FDA reporting-limit floor of 1 µg/kg. The central estimate is left-censored at zero, with the typical upper bound near 45 µg/kg (the Gunes maximum and Salama mid-range) and the 95th-percentile anchored to the Salama upper location mean of 100 µg/kg. The Wise et al. 2025 US XRF mercury mean of 3,710 µg/kg (single states to 8,940 µg/kg) is stratified out of the central estimate as a documented analytical artifact: the source page itself flags benchtop XRF as insensitive for mercury and notes these values, roughly thirty-seven times the next-highest credible detection, would require independent ICP-MS confirmation that the authors did not provide. It is retained as a flagged outlier, not folded into the percentile.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Honey" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured honey as TDS Food 172 with n=3 composites and found all seven measured analytes at or below the reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020|4]]. This US retail result contrasts with findings from European producing regions, where industrial and agricultural environmental contexts elevate metal concentrations. Naccari et al. 2025 analyzed 38 honey samples from Calabria, Italy, by ICP-MS and found that Pb exceeded the EU maximum level of 0.10 mg/kg in 80 percent of wildflower samples, with Al means of 4.5 to 6.0 mg/kg across honey types [[sources/naccari2025-honey-toxic-metals-microelements|2]]. Abeslami et al. 2025 measured seven monofloral and multifloral honeys from eastern Morocco and reported Cd concentrations of 0.0017 to 0.018 mg/kg and Pb of 0.13 to 0.19 mg/kg, with botanical-origin differences between honey types [[sources/abeslami2025-moroccan-honey-minerals|1]]. These inter-regional contrasts illustrate the primary driver of honey metal variance: proximity to pollution sources rather than botanical variety, though botanical origin (which determines foraging plant community) provides a secondary modulating effect through differences in plant metal uptake and nectar metal content.

## Processing effects

Honey processing involves extraction from the comb by centrifugation, filtration to remove wax and debris, and in some cases heat treatment for liquefaction or pasteurization. Filtration removes particulate contaminants including some surface-sorbed metals, and the filtered fraction generally shows slightly lower metal concentrations than raw comb honey, though this effect is not large in the current corpus. Creaming (controlled crystallization) does not alter metal concentration. Blending of honeys from different geographic sources is the most significant processing step from a metal-variability perspective: large commercial batches blend honeys from multiple apiaries and potentially multiple countries, and blending from diverse origins can average out both low and high metal concentrations. The Sn pathway does not apply because honey is packaged primarily in glass or food-grade plastic.

## Ingredient-derivative risk

Honey used as an ingredient in processed foods (baked goods, cereals, beverages, confectionery) is present in formulations at relatively low inclusion rates; the contribution of honey's metal content to the finished product is accordingly diluted. Concentrated honey, reduced honey, and honey powders prepared by spray-drying concentrate metals proportionally; a dehydrated honey powder with a water content reduced from 80 percent to 2 percent would concentrate metals by roughly a fourfold factor compared to liquid honey. Mead and other fermented honey products are not characterized in the current corpus.

## Mitigation options

### Sourcing levers

Geographic sourcing is the primary mitigation lever for honey. Apiaries located away from high-traffic roads, industrial facilities, mining operations, and intensively phosphate-fertilized agricultural land consistently show lower metal concentrations. Apiary audits that document the within-radius land use and environmental burden of the foraging zone provide a documented basis for metal-risk sourcing decisions.

### Agronomic levers

Relocating hives away from known contamination sources is the most effective agronomic lever. Planting low-metal-accumulating nectar sources in the foraging radius reduces bees' metal exposure, but controlling foraging targets at scale is not practically feasible. Soil remediation or pH amendment of agricultural land within foraging range reduces cadmium bioavailability in flora but requires cooperation with land managers outside the apiary operator's control.

### Processing levers

Fine filtration of extracted honey removes coarse particulate matter that may carry surface-adsorbed metals; this provides a modest but not transformative reduction in metal content. Blending from multiple low-contamination origins provides dilution and consistency.

### Formulation levers

Substituting honey with alternative sweeteners in formulations where honey's metal load is a concern is an option, though the sensory and marketing properties of honey are generally integral to its use. Including honey at lower inclusion rates achieves proportional dilution.

### Testing and QC levers

Given the demonstrated regional variability and the finding that EU honey Pb exceedances are common near industrial zones, lot-level ICP-MS testing for Pb and Cd provides the most reliable quality assurance. Origin documentation and certificate-of-conformity requirements from suppliers should specify the apiary location and any environmental burden assessment. Testing frequency proportionate to supply-chain geographic diversity is appropriate.

### Packaging and storage levers

Glass packaging avoids any plastic-leachate pathway; Sn migration is not relevant for honey as it is not packaged in tin-lined cans. Storage in cool, dark conditions maintains product quality without affecting metal concentration.

## Regulatory limits that apply

The EU sets a maximum level for Pb in honey of 0.10 mg/kg (100 ppb) wet weight [[regulations/eu2023-contaminants-maximum-levels]]. No EU maximum level for Cd in honey has been set as of the current corpus state. The finding of Naccari et al. 2025 that 80 percent of Italian wildflower honey samples exceeded this Pb limit illustrates that the EU limit is an active regulatory constraint for this commodity, not a comfortable ceiling [[sources/naccari2025-honey-toxic-metals-microelements|2]]. The United States does not set a statutory maximum for Pb or Cd in honey. Codex Alimentarius does not list honey in its specific ML tables for Pb or Cd [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/naccari2025-honey-toxic-metals-microelements|Study of Toxic Metals and Microelements in Honey as a Tool to Support Beekeeping Production and Consumer Safety]]<span class="hmi-ref-meta">Naccari C, Ferrantelli V, Cammilleri G, Barbaccia G, Riolo P, Ferrante MC, et al. · Foods 2025, 14, 1986 · 2025 · [doi.org/10.3390/foods14111986](https://doi.org/10.3390/foods14111986)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/abeslami2025-moroccan-honey-minerals|Mineral Profile and Heavy Metal Content of Seven Monofloral and Multifloral Honeys from Eastern Morocco]]<span class="hmi-ref-meta">Abeslami A, El Farissi H, Cacciola F, Oulad El Majdoub Y, Mondello L, El Bachiri A, et al. · Molecules · 2025 · [doi.org/10.3390/molecules30010150](https://doi.org/10.3390/molecules30010150)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/wise2025-elevated-metals-us-honeys|Elevated Metal Levels in U.S. Honeys: Is There a Concern for Human Health?]]<span class="hmi-ref-meta">Wise JP Jr, Wise RM, Hoffert A, Wise JTF, and Specht AJ · Biological Trace Element Research · 2025 · [doi.org/10.1007/s12011-024-04295-1](https://doi.org/10.1007/s12011-024-04295-1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/aghamirlou2015-iranian-honey-metals|Heavy metals determination in honey samples using inductively coupled plasma-optical emission spectrometry]]<span class="hmi-ref-meta">Aghamirlou HM, Khadem M, Rahmani A, Sadeghian M, Mahvi AH, Akbarzadeh A, et al. · Journal of Environmental Health Science & Engineering · 2015 · [doi.org/10.1186/s40201-015-0189-8](https://doi.org/10.1186/s40201-015-0189-8)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/salama2019-libya-honey-metals|Determination of Physicochemical Properties and Toxic Heavy Metals Levels in Honey Samples from West of Libya]]<span class="hmi-ref-meta">Salama AS, Etorki AM, and Awad MH · Journal of Advanced Chemical Sciences · 2019 · [doi.org/10.30799/jacs.207.19050104](https://doi.org/10.30799/jacs.207.19050104)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/teferi2026-honey-ethiopia-kellem-wollega|Assessment of Heavy Metal Contamination and Associated Health Risks in Honey from Kellem Wollega Zone, Ethiopia]]<span class="hmi-ref-meta">Teferi AN, Dibabe YB, Debalke AG, Beyene TW, Feng W, and Ho C · Toxics · 2026 · [doi.org/10.3390/toxics14030229](https://doi.org/10.3390/toxics14030229)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/tomczyk2020-polish-honey-metal-transfer|Transfer of some toxic metals from soil to honey depending on bee habitat conditions]]<span class="hmi-ref-meta">Tomczyk M, Zagula G, Puchalski C, and Dzugan M · Acta Universitatis Cibiniensis Series E: Food Technology · 2020 · [doi.org/10.2478/aucft-2020-0005](https://doi.org/10.2478/aucft-2020-0005)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/aljedani2017-honeybee-honey-saudi-arabia|Determination of Some Heavy Metals and Elements in Honeybee and Honey Samples from Saudi Arabia]]<span class="hmi-ref-meta">Aljedani DM · Entomology and Applied Science Letters · 2017 · [www.easletters.com](https://www.easletters.com)</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/gunes2021-yalova-chestnut-honey-metals|Chestnut Honey as a Complementary Medicine: Determination of Antibacterial Activity, Heavy Metal Residue and Health Risk Assessment]]<span class="hmi-ref-meta">Gunes ME · Journal of Advances in VetBio Science and Techniques · 2021 · [doi.org/10.31797/vetbio.931144](https://doi.org/10.31797/vetbio.931144)</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/bektashi2021-honey-metals-sugars-balkans|Characterization of honey: determination of metal and sugar content]]<span class="hmi-ref-meta">Limani Bektashi N, Abazi D, Popovska O, Latifi A, and Reka AA · Journal of Agricultural, Food and Environmental Sciences · 2021 · [doi.org/10.55302/JAFES21752037lb](https://doi.org/10.55302/JAFES21752037lb)</span><span class="hmi-ref-tag">Peer-reviewed</span>
12. [[sources/shukla2020-honey-prayagraj-metals|Melissopalynological and physicochemical analysis of honey samples from Prayagraj District, Uttar Pradesh]]<span class="hmi-ref-meta">Shukla V and Kumar A · Acta Palaeobotanica · 2020 · [doi.org/10.35535/acpa-2020-0004](https://doi.org/10.35535/acpa-2020-0004)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/teferi2026-honey-ethiopia-kellem-wollega\|Teferi et al. 2026]]. *Assessment of Heavy Metal Contamination and Associated Health Risks in Honey from Kellem Wollega Zone, Ethiopia*, Toxics | 2026 | Peer-reviewed | Pb, Cd, Ni, and other metals in Ethiopian honey from artisanal-mining-affected districts, with Pb and Cd far exceeding EU and Codex limits |
| 2 | [[sources/abeslami2025-moroccan-honey-minerals\|Abeslami et al. 2025]]. *Mineral Profile and Heavy Metal Content of Seven Monofloral and Multifloral Honeys from Eastern Morocco*, Molecules | 2025 | Peer-reviewed | Measured Cd, Pb, Cr, and Ni in 7 honey types from eastern Morocco by ICP-MS; Cd 0.0017–0.018 mg/kg, Pb 0.13–0.19 mg/kg, botanical-origin and geographic variance data |
| 3 | [[sources/naccari2025-honey-toxic-metals-microelements\|Naccari et al. 2025]]. *Study of Toxic Metals and Microelements in Honey as a Tool to Support Beekeeping Production and Consumer Safety*, Foods 2025, 14, 1986 | 2025 | Peer-reviewed | Measured Pb, Cd, tAs, Al, Ni, and Cr in 38 Calabrian (Italy) honey samples by ICP-MS; Pb exceeded EU MRL (0.1 mg/kg) in 80% of Wildflower samples; Al mean 4.5–6.0 mg/kg |
| 4 | [[sources/wise2025-elevated-metals-us-honeys\|Jr et al. 2025]]. *Elevated Metal Levels in U.S. Honeys: Is There a Concern for Human Health?*, Biological Trace Element Research | 2025 | Peer-reviewed | Twenty-metal XRF survey of 28 US small-beekeeper honeys across 15 states with majority Pb and tHg exceedances of EU MRLs |
| 5 | [[sources/knoll2024-honeybee-cadmium-review\|Knoll et al. 2024]]. *Foraging Activity of Honey Bees (Apis mellifera L., 1758) and Exposure to Cadmium: a Review* | 2024 | Peer-reviewed | EU/global Cd occurrence in Narrative review; no primary samples. Synthesizes studies on Apis mellifera foraging and Cd exposure pathways. |
| 6 | [[sources/margaoan2024-bee-products-heavy-metals\|Margaoan et al. 2024]]. *Environmental pollution effect on honey bees and their derived products: a comprehensive analysis*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | Pb, Cd, Hg, As, Cr, Ni occurrence in Review study; synthesizes literature on heavy metals and other contaminants in honey, pollen, beeswax, and other bee products;... |
| 7 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 8 | [[sources/zhang2024-mip-pb-honey-cyprus\|Zhang 2024]]. *Molecularly imprinted polymer electrochemical sensor for lead detection in honey*, unknown | 2024 | Peer-reviewed | MIP electrochemical sensor development and Pb validation in honey matrix (Cyprus context); analytical method paper, occurrence data require full-paper confirmation |
| 9 | [[sources/aburas2023-libyan-honey-lead-cadmium\|Aburas et al. 2023]]. *Pollution assessment by estimation of Lead and Cadmium concentrations and some physical properties in a number of types of Libyan Honey*, Bani Waleed University Journal of Humanities and Applied Sciences | 2023 | Peer-reviewed | LY Pb, Cd occurrence in Five Libyan honey types or honey-derived samples: thyme, tamarisk/athel, sidr, sugar-solution honey, and black honey (n=5) |
| 10 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 11 | [[sources/sofyan2023-banana-steamed-cake-metals-indonesia\|Sofyan 2023]]. *Uji Cemaran Mikroba Dan Cemaran Logam Bolu Kukus Berbasis Pisang Ambon (Musa acuminta Colla) Sebagai Camilan Alternatif Pada Pasien Hipertensi*, JP: Jurnal Pharmacopoeia, 2(1): 23-32 | 2023 | Peer-reviewed | ID Pb, Cu, Zn, tAs occurrence in Three laboratory-prepared formulations of banana-based steamed sponge cake (bolu kukus pisang ambon) varying the pisang ambon (Musa acuminata... (n=3) |
| 12 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 13 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in honey (TDS Food 172; n=3 per analyte); all analytes at or near reporting limit |
| 14 | [[sources/bektashi2021-honey-metals-sugars-balkans\|Limani et al. 2021]]. *Characterization of honey: determination of metal and sugar content*, Journal of Agricultural, Food and Environmental Sciences | 2021 | Peer-reviewed | MK/RS Pb, Cd, tAs, Fe, Mn, Al, Cu, Zn, Se, Cr, Ni occurrence in Five unprocessed flower-honey samples from Skopje and Kumanovo in North Macedonia and Preshevo in Serbia, including four beekeeper... (n=5) |
| 15 | [[sources/gunes2021-yalova-chestnut-honey-metals\|Gunes 2021]]. *Chestnut Honey as a Complementary Medicine: Determination of Antibacterial Activity, Heavy Metal Residue and Health Risk Assessment*, Journal of Advances in VetBio Science and Techniques | 2021 | Peer-reviewed | TR tAs, Pb, Cd, tHg occurrence in Chestnut honey samples from Yalova Beekeepers Association member beekeepers, Turkey (n=27) |
| 16 | [[sources/manouchehri2021-honey-heavy-metals-review\|Manouchehri et al. 2021]]. *The Possible Effects of Heavy Metals in Honey as Toxic and Carcinogenic Substances on Human Health: A Systematic Review*, Arı Dergisi / Uludag Bee Journal | 2021 | Review | Cross-country review of Pb, Cd, tHg, Cr, Ni, and Al in honey with bee uptake pathways and industrial-proximity contamination patterns |
| 17 | [[sources/shukla2020-honey-prayagraj-metals\|Shukla et al. 2020]]. *Melissopalynological and physicochemical analysis of honey samples from Prayagraj District, Uttar Pradesh*, Acta Palaeobotanica | 2020 | Peer-reviewed | IN Cd, Pb, Cu, tAs occurrence in Honey samples from rural and urban localities of Prayagraj District, Uttar Pradesh (n=14) |
| 18 | [[sources/tomczyk2020-polish-honey-metal-transfer\|Tomczyk et al. 2020]]. *Transfer of some toxic metals from soil to honey depending on bee habitat conditions*, Acta Universitatis Cibiniensis Series E: Food Technology | 2020 | Peer-reviewed | PL Cd, Pb, Al, Mn, Ni occurrence in Honeydew, goldenrod, dandelion, rapeseed, and tilia honeys collected from ten apiary sampling points in Podkarpackie, Poland, split between... (n=50) |
| 19 | [[sources/salama2019-libya-honey-metals\|Salama et al. 2019]]. *Determination of Physicochemical Properties and Toxic Heavy Metals Levels in Honey Samples from West of Libya*, Journal of Advanced Chemical Sciences | 2019 | Peer-reviewed | LY Pb, Cd, tHg, tAs occurrence in Bee honey samples from eight locations in western Libya, three samples per locality (n=24) |
| 20 | [[sources/aljedani2017-honeybee-honey-saudi-arabia\|Aljedani 2017]]. *Determination of Some Heavy Metals and Elements in Honeybee and Honey Samples from Saudi Arabia*, Entomology and Applied Science Letters | 2017 | Peer-reviewed | Pb, Cd, Cr, and Ni in Saudi Arabian honey from four agricultural regions, providing a clean rural-baseline reference distant from industrial sources |
| 21 | [[sources/aghamirlou2015-iranian-honey-metals\|Aghamirlou et al. 2015]]. *Heavy metals determination in honey samples using inductively coupled plasma-optical emission spectrometry*, Journal of Environmental Health Science & Engineering | 2015 | Peer-reviewed | IR tAs, Cd, Cr, Pb, Ni, Zn, Cu occurrence in Multifloral honey samples from four regions of Ardabil province, Iran, collected from individual beekeepers in 2013 (n=25) |
| 22 | [[sources/fsanz2011-23rd-australian-total-diet-study\|Zealand 2011]]. *The 23rd Australian Total Diet Study*, Food Standards Australia New Zealand | 2011 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Ninety-two Australian foods and beverages, including tap and bottled water, represented by 570 composite samples; each composite used... (n=570) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 11 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
