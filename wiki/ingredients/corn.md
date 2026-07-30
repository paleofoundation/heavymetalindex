---
title: "Corn"
type: ingredient
commodity: corn
label: "Corn"
aliases: ["Corn, frozen, boiled", "corn", maize, Maize, "ingredients/maize"]
category: vegetable-grain
tds_food:
  number: 54
  description: "Corn, frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 60]
    p95_ppb: 130
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-06-11
    basis: corn-grain-as-sold-mixed-wet-and-dry-weight
  Cd:
    status: populated
    typical_ppb: [1.4, 3.5]
    p95_ppb: 3.8
    confidence: high
    n_studies: 18
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 7]
    p95_ppb: 10
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: corn-grain-as-sold-mixed-wet-and-dry-weight
    speciation: total-As-only
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 18
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: corn-grain-as-sold-mixed-wet-and-dry-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, 54.4]
    p95_ppb: 60.1
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 256]
    p95_ppb: 740
    confidence: low
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: corn-grain-as-sold-mixed-wet-and-dry-weight
    speciation: total-Cr-only; no Cr-VI measurement in corpus
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
sources: 53
---

# Corn

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 5/10 HMTc analytes, total n=47 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | OK | 20 jurisdictions, top CN 26% | — |
| D3 Anthropogenic evidence | GAP | 4 soil + 2 agricultural-soil + 1 irrigation-water + 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 7 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd CONFIDENT, tAs THIN, tHg THIN, Ni POOLABLE, Cr THIN | tAs: THIN; tHg: THIN; Cr: THIN |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 4/10 populated cells declare a basis token | 6 populated cell(s) lack a basis token: Cd, iAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 61 claims checked, 61 supported; 13 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming corn: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 2 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 1 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr; pairing 0 paired, 6 single, 0 unpaired | tAs: THIN; tHg: THIN; Cr: THIN; basis: 6 populated cell(s) lack a basis token: Cd, iAs, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 54, "Corn, frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Maize (corn) accumulates cadmium through root uptake from soil, a mechanism that is modulated by soil pH, organic matter content, and the competing presence of zinc. In acidic soils or soils with elevated cadmium from phosphate fertilizer application, maize grain can carry detectable cadmium, though whole-grain corn is generally a lower Cd accumulator than leafy vegetables or root vegetables because the grain is a reproductive structure with some buffering against cadmium translocation from vegetative tissue. [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining]] documented substantially elevated cadmium, chromium, lead, and arsenic in maize grain grown near mining operations in Ecuador, where soil-to-plant transfer is driven by contaminated parent rock and tailings rather than agricultural inputs alone.

Arsenic in corn is typically low: the FDA TDS FY2018-FY2020 data report total arsenic below the 3 µg/kg reporting limit across all 27 composite samples for frozen boiled corn [[sources/fda2022-tds-elements-fy2018-fy2020]], and the primary corn-grain literature confirms a low but non-zero total-arsenic burden (Beijing retail corn flour 7 µg/kg, Nigerian corn grain at or below 10 µg/kg dry weight), consistent with corn not concentrating arsenic the way flooded-paddy rice does. Nickel shows episodic elevation in the TDS corn data, with a p90 of 54.4 ppb and a maximum of 160 ppb, indicating that some market-basket composites captured nickel from soil or processing sources at levels notably higher than typical. Lead, total mercury, total chromium, and uranium are all below their respective reporting limits across the FDA composites; those below-limit results are carried as left-censored bounds rather than as measured zeros, and the routed primary literature recovers low but non-zero lead, mercury, and chromium in corn grain (see the Synthesis basis and censoring treatment section).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=9 | 0–60 | medium | [[sources/liang2019-beijing-foodstuffs-health-risk\|1]], [[sources/ataee2016-iran-cereals-pb-cd\|2]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|3]] |
| Cd | n=18 | 1.4–3.5 | high | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/hassan2025-cornflakes-lebanon-metals\|2]], [[sources/ibrahim2024-food-heavy-metals-nigeria\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 0–7 | low | [[sources/liang2019-beijing-foodstuffs-health-risk\|1]], [[sources/abatemi-usman2023-corn-cement-nigeria\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=3 | 0–1 | low | [[sources/liang2019-beijing-foodstuffs-health-risk\|1]], [[sources/gu2019-maize-peanut-heavy-metals-guangxi\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=8 | 0–54.4 | medium | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/abatemi-usman2023-corn-cement-nigeria\|3]] |
| Al | data gap | — | — | — |
| Cr | n=5 | 0–256 | low | [[sources/liang2019-beijing-foodstuffs-health-risk\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/pirsaheb2015-iran-kermanshah-cereals-metals\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-arsenic, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11. The native basis for this page is corn grain as sold; FDA Total Diet Study Food 54 reports the matrix as "Corn, frozen, boiled" (whole-kernel corn), while most of the routed primary literature reports corn grain or corn flour on a dry-weight basis. Where dry-weight or corn-flour anchors are pooled against the FDA whole-kernel composite, the basis difference is stated rather than silently harmonized, and the mixed basis is recorded in the cell as `corn-grain-as-sold-mixed-wet-and-dry-weight`. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total arsenic, total mercury, chromium, and uranium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study composite for frozen boiled corn (n=27), in which every sample fell below the reporting limit for each of these five analytes and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, tAs 3, tHg 1, Cr 50, U 1 µg/kg). Cadmium and nickel were not part of this resynthesis: they carry genuine FDA detects (Cd p50 2.6 µg/kg, max 4.8; Ni p90 54.4 µg/kg, max 160) and remain as previously synthesized. The resynthesis replaces the literal zeros for the five censored analytes with a left-censored floor at the FDA reporting limit and recovers the upper distribution from the routed primary corn-grain occurrence literature, in which lead, total arsenic, total mercury, and total chromium are low but non-zero in corn grain.

Lead rests on the FDA censored floor for the low bound and on commercial-market corn anchors for the central and upper distribution. Beijing retail corn flour carried lead at 60 µg/kg ([[sources/liang2019-beijing-foodstuffs-health-risk|Liang et al. 2019]]); Kermanshah retail corn ran 93 to 146 µg/kg dry weight across three markets ([[sources/ataee2016-iran-cereals-pb-cd|Ataee et al. 2016]]); and an industrial-region Chinese cereal survey reported a mean of 45 µg/kg with a maximum of 284 µg/kg ([[sources/wang2023-toxic-metals-daily-diet-ningxia|Wang et al. 2023]]). The clean-platform floor is corroborated by Egyptian freshwater-irrigated maize, which ran below detection to 40 µg/kg at all five Nile-irrigated sites ([[sources/el-hassanin2020-egypt-maize-pb-cd|El-Hassanin et al. 2020]]). The pooled lead typical of [0, 60] takes the FDA censored floor as the low bound and the Beijing retail-flour and Kermanshah lower-market values as the upper central; the 95th-percentile of 130 µg/kg is anchored to the elevated commercial-market tail (Ataee 146 µg/kg, Wang 284 µg/kg maximum). Confidence is held at medium: the pool is deep, but the contributors mix whole-kernel, dry-weight, and corn-flour bases and span commercial markets of differing background burden.

Total arsenic is genuinely low in corn, in contrast to flooded-paddy rice, because corn is not grown under the anaerobic conditions that mobilize arsenite into grain. The honest floor is the FDA 3 µg/kg reporting limit; the central rests on Beijing retail corn flour at 7 µg/kg ([[sources/liang2019-beijing-foodstuffs-health-risk|Liang et al. 2019]]) and on Nigerian cement-vicinity corn grain, in which total arsenic was uniformly at or below 10 µg/kg dry weight across all sites including the contaminated downwind farmlands ([[sources/abatemi-usman2023-corn-cement-nigeria|Abatemi-Usman et al. 2023]]). The pooled typical of [0, 7] and 95th-percentile of 10 µg/kg reflect this narrow low-arsenic band. Confidence is low because only two primary anchors report an extractable positive corn total-arsenic value. Total arsenic is held distinct from inorganic arsenic, which remains a reviewed data gap for this commodity; no speciated corn-arsenic measurement exists in the corpus, and the inorganic fraction is never inferred from total arsenic.

Total mercury rests on the FDA censored floor and two primary anchors. Guangxi maize grain carried total mercury at a mean of about 1 µg/kg with a maximum of 33 µg/kg ([[sources/gu2019-maize-peanut-heavy-metals-guangxi|Gu et al. 2019]]), and Beijing retail corn flour carried total mercury at 18 µg/kg ([[sources/liang2019-beijing-foodstuffs-health-risk|Liang et al. 2019]]). The pooled typical of [0, 1] spans the FDA reporting-limit floor to the Guangxi central; the 95th-percentile of 18 µg/kg is the Beijing retail-flour value, which sits at the top of the ordered pooled set. Confidence is low: only two single-region positive contributors exist. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium only, and no corn hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. Total chromium is the standout analyte in commercial corn-derived products: an independent Lebanese retail survey of 42 cornflake products found chromium at the highest mean concentration of the five metals measured ([[sources/hassan2025-cornflakes-lebanon-metals|Hassan et al. 2025]]). The honest floor is the FDA 50 µg/kg reporting limit; the central and upper distribution rest on Beijing retail corn flour at 76 µg/kg ([[sources/liang2019-beijing-foodstuffs-health-risk|Liang et al. 2019]]), an industrial-region Chinese cereal mean of 256 µg/kg with a maximum of 770 µg/kg ([[sources/wang2023-toxic-metals-daily-diet-ningxia|Wang et al. 2023]]), and Kermanshah retail corn at 740 µg/kg ([[sources/pirsaheb2015-iran-kermanshah-cereals-metals|Pirsaheb et al. 2015]]). The pooled typical of [0, 256] and 95th-percentile of 740 µg/kg span the FDA floor to the Wang and Pirsaheb commercial-market central-to-upper values. Confidence is low because total chromium carries no speciation, the contributors mix whole-kernel and dry-weight bases, and the distribution is wide.

The mining-area, industrial, and wastewater-irrigated corn anchors are deliberately excluded from the headline percentiles above and recorded as a separate contamination stratum. Maize grown adjacent to a Chongqing manganese mining and smelting area, in an oil-industry zone of Khuzestan Province (lead mean 1,840 µg/kg, total arsenic 1,570 µg/kg, chromium 4,920 µg/kg), in the industrialized Chengdu Plain (maize lead mean 290 µg/kg), near the Obajana cement plant (corn lead 230 to 380 µg/kg dry weight downwind, chromium 2,080 to 3,560 µg/kg), and on Egyptian sites irrigated with mixed sewage and industrial effluent (maize lead 260 to 550 µg/kg, 19 to 30-fold above the freshwater-irrigated controls) all carried metal burdens far above commercial-market corn ([[sources/zhang2026-trace-metals-five-crops-chongqing|Zhang et al. 2026]]; [[sources/gholami2025-heavy-metals-corn-iran-khuzestan|Gholami et al. 2025]]; [[sources/liu2022-heavy-metals-rice-maize-chengdu|Liu et al. 2022]]; [[sources/abatemi-usman2023-corn-cement-nigeria|Abatemi-Usman et al. 2023]]; [[sources/el-hassanin2020-egypt-maize-pb-cd|El-Hassanin et al. 2020]]). These define an upper bound for industrially or geologically anomalous origins and are not representative of the general commercial corn supply.

Uranium is recorded as a reviewed data gap. The only corn uranium measurement in the corpus is the fully censored FDA Total Diet Study cell (all 27 frozen-boiled-corn composites below the 1 µg/kg reporting limit), and no routed primary source reports an extractable quantitative corn-grain uranium value. The FDA cornbread composite carries detectable uranium (2.2 to 2.7 µg/kg), but cornbread is a flour-and-leavening derivative, not corn grain, and its value is not relabeled as corn. With no positive corn-grain anchor, no distribution is published, following the rice-uranium precedent.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Corn, frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 1.36 | 2.6 | 3.54 | 3.81 | 4.8 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 54.4 | 60.1 | 160 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 market-basket survey of frozen boiled corn (n=27) shows Cd at a median of 2.6 ppb and a maximum of 4.8 ppb, with Pb and tAs at zero across all samples [[sources/fda2022-tds-elements-fy2018-fy2020]]. This represents the commercial US market baseline for a composite of diverse origin corn. By contrast, [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining]] measured substantially higher metal concentrations in maize grain from agricultural plots adjacent to mining operations in Ecuador, where contamination from ore processing and tailings runoff is the dominant input. This contrast between market-basket and mining-area concentrations reflects the origin dependence that is critical to understanding corn's metal risk profile: under normal US or EU agricultural conditions the risk is low, but sourcing from mining-adjacent or industrially contaminated regions can elevate cadmium, lead, arsenic, chromium, and nickel well above market-basket levels.

Corn variety also influences metal accumulation, though varietal differences are less studied than origin effects. Field corn versus sweet corn versus popcorn varieties have different grain morphologies and growing conditions, and these differences can translate into different metal concentrations per unit of edible tissue. No cross-varietal comparison is yet integrated into this corpus.

## Processing effects

Milling removes the bran and germ fractions of the corn kernel, concentrating the starchy endosperm in refined products (corn flour, masa, starch) and leaving the metal-concentrated outer layers behind. Cadmium in corn grain, like in wheat, tends to partition into the bran and germ rather than the endosperm, so degermination and milling reduce Cd in refined corn products relative to whole-grain corn. Wet milling for corn starch and corn syrup production removes essentially all mineral content, including trace metals, so these highly refined corn derivatives carry negligible metals.

Boiling corn does not meaningfully reduce metal concentrations in the grain, since most metal is structurally bound within the kernel's cell walls and is not water-extractable. The TDS data for frozen boiled corn therefore reflects an as-consumed metal burden that is substantially similar to the raw grain's metal content adjusted for moisture change.

## Ingredient-derivative risk

Corn is processed into a wide range of derivative ingredients with different metal profiles. Whole-grain corn flour and masa harina retain the bran fraction and carry the highest cadmium and mineral content of any corn-derived product. Degerminated corn meal removes the germ and has lower cadmium than whole-grain flour. Corn starch and corn syrup are highly refined and carry negligible metals. Corn oil, extracted from the germ fraction, concentrates any lipid-soluble contaminants present in the germ, though heavy metals are largely hydrophilic and do not preferentially partition into oil; corn oil is therefore a low-risk derivative for the analytes tracked in this wiki. Popcorn, which retains the pericarp and germ, carries a metal burden more similar to whole-grain corn than to degerminated products.

## Mitigation options

### Sourcing levers

Origin selection is the dominant mitigation lever for corn. Avoiding procurement from mining-adjacent regions or areas with documented soil cadmium elevation (for example, from legacy phosphate fertilizer overuse or industrial contamination) is the most effective strategy. [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining]] illustrates the magnitude of the origin effect: mining-area maize carried metals far exceeding the levels in US commercial market-basket corn [[sources/fda2022-tds-elements-fy2018-fy2020]]. Supplier specification requiring origin documentation and soil-cadmium pre-screening is the procurement-side implementation of this lever.

### Agronomic levers

Soil pH management reduces cadmium bioavailability; liming acidic soils to raise pH above 6.5 reduces cadmium uptake by corn. Zinc application competes with cadmium at the same root transporter, potentially reducing cadmium uptake, though excess zinc application carries its own environmental costs. These levers are most relevant for farmers supplying to buyers with contractual metal specifications.

### Processing levers

Degermination and milling to remove bran and germ reduces cadmium in refined corn products. For whole-grain corn products, this lever is not applicable by definition. Washing or blanching corn prior to processing has minimal effect on grain-incorporated metals but may reduce surface-deposited particulate contamination.

### Formulation levers

For food manufacturers concerned about cadmium or nickel, substituting degerminated corn products for whole-grain corn in formulations will reduce the metal burden per serving without eliminating corn as an ingredient.

### Testing and QC levers

Given that nickel in the TDS corn dataset reaches 160 ppb maximum across 27 samples [[sources/fda2022-tds-elements-fy2018-fy2020]], lot-level nickel testing is warranted for brands with high-corn-content products sold to sensitive populations. Cadmium testing at the incoming ingredient level is appropriate for any product using whole-grain corn from origins with uncertain soil histories.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in corn is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union under [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for cadmium in cereals (including corn) of 0.10 mg/kg (100 ppb) wet weight. For lead in cereals, the EU limit is 0.20 mg/kg (200 ppb). Codex Alimentarius (CXS 193-1995 and revisions) sets a maximum level of 0.10 mg/kg for cadmium in grain crops including maize and 0.20 mg/kg for lead. The US TDS market-basket Cd maximum of 4.8 ppb and Pb at zero are well below these regulatory limits for the sampled commercial products. No US federal maximum level for cadmium or lead in corn grain has been finalized for the general food supply as of 2026.

<!-- BEGIN: hmi-page-references -->
## References

The 13 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Romero-Crespo P, Jiménez-Oyola S, Salgado-Almeida B, Zambrano-Anchundia J, Goyburo-Chávez C, González-Valoys A, et al. (2023). *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*. Environmental Geochemistry and Health. [https://doi.org/10.1007/s10653-023-01514-x](https://doi.org/10.1007/s10653-023-01514-x). Peer-reviewed, A-tier. [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining|Source record]]
3. Liang G, Gong W, Li B, Zuo J, Pan L, and Liu X (2019). *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*. International Journal of Environmental Research and Public Health. [https://doi.org/10.3390/ijerph16060909](https://doi.org/10.3390/ijerph16060909). Peer-reviewed, A-tier. [[sources/liang2019-beijing-foodstuffs-health-risk|Source record]]
4. Mari Ataee, Toraj Ahmadi-Jouibari, and Nazir Fattahi (2016). *Application of microwave-assisted dispersive liquid–liquid microextraction and graphite furnace atomic absorption spectrometry for ultra-trace determination of lead and cadmium in cereals and agricultural products*. International Journal of Environmental Analytical Chemistry 96(3):271-283. [https://doi.org/10.1080/03067319.2016.1150464](https://doi.org/10.1080/03067319.2016.1150464). Peer-reviewed, B-tier. [[sources/ataee2016-iran-cereals-pb-cd|Source record]]
5. Wang Y, Cao D, Qin J, Zhao S, Lin J, Zhang X, et al. (2023). *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*. Archives of Environmental Contamination and Toxicology. [https://doi.org/10.1007/s12011-022-03538-3](https://doi.org/10.1007/s12011-022-03538-3). Peer-reviewed, A-tier. [[sources/wang2023-toxic-metals-daily-diet-ningxia|Source record]]
6. Adel S. El-Hassanin, Magdy R. Samak, Gomaa N. Abdel-Rahman, Yahia H. Abu-Sree, and Essam M. Saleh (2020). *Risk assessment of human exposure to lead and cadmium in maize grains cultivated in soils irrigated either with low-quality water or freshwater*. Toxicology Reports 7:10-15. [https://doi.org/10.1016/j.toxrep.2019.11.018](https://doi.org/10.1016/j.toxrep.2019.11.018). Peer-reviewed, B-tier. [[sources/el-hassanin2020-egypt-maize-pb-cd|Source record]]
7. Abatemi-Usman S, Akindele O, Ayanlade A, Perez M, Attahiru I, Norton G, et al. (2023). *Trace elements concentrations in soil contaminate corn in the vicinity of a cement-manufacturing plant: potential health implications*. Journal of Exposure Science & Environmental Epidemiology. [https://doi.org/10.1038/s41370-023-00548-8](https://doi.org/10.1038/s41370-023-00548-8). Peer-reviewed, A-tier. [[sources/abatemi-usman2023-corn-cement-nigeria|Source record]]
8. Gu Q, Yu T, Yang Z, Ji J, Hou Q, Wang L, et al. (2019). *Prediction and risk assessment of five heavy metals in maize and peanut: a case study of Guangxi, China*. Environmental Toxicology and Pharmacology. [https://doi.org/10.1016/j.etap.2019.103199](https://doi.org/10.1016/j.etap.2019.103199). Peer-reviewed, B-tier. [[sources/gu2019-maize-peanut-heavy-metals-guangxi|Source record]]
9. Hassan H, Abdallah M, Khalil N, and Sleiman M (2025). *Cornflakes as a source of dietary metal exposure in Lebanon: Risk assessment and regulatory compliance*. RSC Advances. [https://doi.org/10.1039/d5ra03210k](https://doi.org/10.1039/d5ra03210k). Peer-reviewed, A-tier. [[sources/hassan2025-cornflakes-lebanon-metals|Source record]]
10. Meghdad Pirsaheb, Nazir Fattahi, Kiomars Sharafi, Razieh Khamotian, and Zahra Atafar (2015). *Essential and toxic heavy metals in cereals and agricultural products marketed in Kermanshah, Iran, and human health risk assessment*. Food Additives & Contaminants: Part B, Surveillance. [https://doi.org/10.1080/19393210.2015.1099570](https://doi.org/10.1080/19393210.2015.1099570). Peer-reviewed, B-tier. [[sources/pirsaheb2015-iran-kermanshah-cereals-metals|Source record]]
11. Zhang Y, Li X, and Kong F (2026). *Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China*. Scientific Reports. [https://doi.org/10.1038/s41598-026-37535-6](https://doi.org/10.1038/s41598-026-37535-6). Peer-reviewed, A-tier. [[sources/zhang2026-trace-metals-five-crops-chongqing|Source record]]
12. Gholami Z, Mohammadi Rouzbahani M, Payandeh K, and Sabzalipour S (2025). *Health risk assessment Pb, As and Cr in corn (Zea mays) of Behbahan and Dezful from Khuzestan Province, Iran*. Scientific Reports. [https://doi.org/10.1038/s41598-025-89281-w](https://doi.org/10.1038/s41598-025-89281-w). Peer-reviewed, A-tier. [[sources/gholami2025-heavy-metals-corn-iran-khuzestan|Source record]]
13. Liu Q, Li X, and He L (2022). *Health risk assessment of heavy metals in soils and food crops from a coexist area of heavily industrialized and intensively cropping in the Chengdu Plain, Sichuan, China*. Frontiers in Chemistry. [https://doi.org/10.3389/fchem.2022.988587](https://doi.org/10.3389/fchem.2022.988587). Peer-reviewed, A-tier. [[sources/liu2022-heavy-metals-rice-maize-chengdu|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/zhang2026-trace-metals-five-crops-chongqing\|Zhang et al. 2026]]. *Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China*, Scientific Reports | 2026 | Peer-reviewed | tAs, Pb, Cd, Cr, and Ni in maize grain (n=15) plus four other crops near a Chongqing manganese mining and smelting area, anchoring mining-adjacent grain contamination patterns for the corn page |
| 2 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 3 | [[sources/dragicevic2025-popcorn-essential-minerals\|Dragičević et al. 2025]]. *Essential minerals and their potential bioavailability in popcorn (Zea mays L. subsp. everta (Sturtev.) Zhuk.) kernels and flakes*, Chilean Journal of Agricultural Research 85(2): 277-286 | 2025 | Peer-reviewed | RS Cu, Mn, Zn occurrence in 12 popcorn hybrids grown 2021-2022 at Maize Research Institute Zemun Polje, Belgrade, Serbia; 4 replicates each (n=12) |
| 4 | [[sources/gholami2025-heavy-metals-corn-iran-khuzestan\|Gholami et al. 2025]]. *Health risk assessment Pb, As and Cr in corn (Zea mays) of Behbahan and Dezful from Khuzestan Province, Iran*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, tAs, Cr occurrence in 50 corn (Zea mays) samples and 50 soil samples from 5 farms in Dezful and 5 farms in... (n=100) |
| 5 | [[sources/hassan2025-cornflakes-lebanon-metals\|Hassan et al. 2025]]. *Cornflakes as a source of dietary metal exposure in Lebanon: Risk assessment and regulatory compliance*, RSC Advances | 2025 | Peer-reviewed | Measured tAs, Cd, Cr, tHg, and Pb in 42 commercial cornflake products from Lebanese retail; Cr showed the highest mean concentrations; risk assessment for adult and child consumers |
| 6 | [[sources/liu2025-nanyang-crops-heavy-metals\|Liu et al. 2025]]. *Heavy metal synergistic pollution risk assessment in the soil-crop system of the Nanyang Basin*, Scientific Reports | 2025 | Peer-reviewed | CN tAs, Cd, Cr, tHg, Pb occurrence in 5778 surface soil samples, 185 wheat samples, 75 corn samples, 114 peanut samples, and 374 root soil samples... (n=6252) |
| 7 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 8 | [[sources/ibrahim2024-food-heavy-metals-nigeria\|Ibrahim et al. 2024]]. *Correlates of Food Contamination by Heavy Metals in Northwest Nigeria*, Environmental Health Insights | 2024 | Peer-reviewed | Pb, Cd, and tHg by AAS in 361 raw staple food samples including maize from Jigawa State (Nigeria), with 97.8% of households above the authors' Hg reference threshold of 0.02 mg/kg |
| 9 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 10 | [[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil\|Toledo et al. 2024]]. *Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment*, International Journal of Environmental Research and Public Health 21(4):381 | 2024 | Peer-reviewed | BR Ag, Al, tAs, iAs, B, Ba, Cd, Co, Cr, Cu, Mn, Ni, Pb, Se, Sr, Zn occurrence in Eighteen Brazilian infant-cereal samples acquired in 2014-2015: 9 rice cereals, 5 multi-grain cereals containing rice, and 4 non-rice-based... (n=18) |
| 11 | [[sources/abatemi-usman2023-corn-cement-nigeria\|Abatemi-Usman et al. 2023]]. *Trace elements concentrations in soil contaminate corn in the vicinity of a cement-manufacturing plant: potential health implications*, Journal of Exposure Science & Environmental Epidemiology | 2023 | Peer-reviewed | NG Pb, Cd, tAs, Cr, Ni, Cu occurrence in Corn grain and surface soil from 5 farmlands near Obajana cement plant, Kogi State, Nigeria (n=89) |
| 12 | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|Gacal et al. 2023]]. *Cadmium and lead content in gluten and gluten-free bread available on Polish market - potential health risk to consumers*, Annales Academiae Medicae Silesiensis | 2023 | Peer-reviewed | Cd and Pb in gluten-free breads typically containing maize and rice flour against gluten-containing breads on the Polish market (n=50), with gluten-free at the lowest Cd mean (0.021 mg/kg) and Pb above LOQ in only one wheat sample |
| 13 | [[sources/jakkielska2023-noodles-toxic-metals\|Jakkielska et al. 2023]]. *Risk profiling of exposures to potentially toxic metals PTM(s) through noodles consumption. A case study of human health risk assessment*, Acta Universitatis Cibiniensis Series E: Food Technology | 2023 | Peer-reviewed | PL Pb, Cd, tAs, iAs, tHg occurrence in Twenty commercially available 500 g noodle/pasta products collected from markets in Poland, covering wheat, durum wheat, corn-flour gluten-free,... (n=20) |
| 14 | [[sources/romero-crespo2023-ecuador-mining-crops-metals\|Romero-Crespo et al. 2023]]. *Heavy metals in soils and crops in a mining area of Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | EC As, Cd, Cr, Cu, Ni, Pb, Zn concentrations |
| 15 | [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|Romero-Crespo et al. 2023]]. *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | EC tAs, Cd, Cr, Ni, Pb occurrence in 9 crop samples and 8 farmland soil samples from agricultural orchards in Ponce Enriquez gold mining area, Azuay... (n=17) |
| 16 | [[sources/rubio2023-metals-cereals-madeira-azores\|Rubio et al. 2023]]. *Dietary Exposure to Toxic Metals (Cd, Pb and Hg) from Cereals Marketed in Madeira and the Azores*, Biological Trace Element Research | 2023 | Peer-reviewed | PT Cd, Pb, tHg occurrence in Cereals and cereal derivatives marketed in Madeira and the Azores (Portuguese Atlantic archipelagos); multiple cereal types including rice,... |
| 17 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 18 | [[sources/agarwal2022-heavy-metals-vegetables-east-kolkata\|Agarwal et al. 2022]]. *Seasonal Variations in Bioaccumulation and Translocation of Toxic Heavy Metals in the Dominant Vegetables of East Kolkata Wetlands: a Case Study with Suggestive Ecorestorative Strategies*, Water, Air, & Soil Pollution | 2022 | Peer-reviewed | IN Pb, Cd, Cr, tHg occurrence in Three vegetable species from Dhapa waste dumping site, East Kolkata Wetlands, India; 2016-2017 across three seasons |
| 19 | [[sources/bai2022-arsenic-coal-burning-shaanxi\|Bai et al. 2022]]. *Investigation Into Environmental Selenium and Arsenic Levels and Arseniasis Prevalence in an Arsenic-Affected Coal-Burning Area*, Frontiers in Nutrition | 2022 | Peer-reviewed | CN tAs occurrence in 100 arseniasis patients and 50 healthy controls in coal-burning area of Shaanxi Province, China (n=150) |
| 20 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in corn-based TDS food items (TDS Food varies; n varies by analyte) |
| 21 | [[sources/getu2022-heavy-metals-cereals-ethiopia\|Getu et al. 2022]]. *Determination of the Level of Heavy Metals in the Selected Cereals from Debre Markos Local Market, Amhara Region, Ethiopia*, International Journal of Analytical Chemistry | 2022 | Peer-reviewed | Cr, Cu, Pb, and Cd by MP-AES in maize and three other cereal types from Debre Markos (Ethiopia), with Pb and Cd above FAO/WHO permissible limits in all four cereal types linked to local fertilizer use |
| 22 | [[sources/li2022-guizhou-cd-grains\|Li et al. 2022]]. *Spatial distribution and risk assessment of fluorine and cadmium in rice, corn, and wheat grains in most karst regions of Guizhou province, China*, Frontiers in Nutrition | 2022 | Peer-reviewed | Cadmium in 119 corn grain samples from karst regions of Guizhou (China), with Cd range 0–307 µg/kg and 13.5% of corn samples exceeding the GB 2762-2017 limit of 0.1 mg/kg |
| 23 | [[sources/liu2022-heavy-metals-rice-maize-chengdu\|Liu et al. 2022]]. *Health risk assessment of heavy metals in soils and food crops from a coexist area of heavily industrialized and intensively cropping in the Chengdu Plain, Sichuan, China*, Frontiers in Chemistry | 2022 | Peer-reviewed | tAs, Cd, tHg, and Pb in 10 maize grain samples from an industrialized Chengdu Plain (China) zone, with maize Cd mean 0.26 mg/kg and Pb mean 0.29 mg/kg both exceeding national limits and 78% of all grains failing GB 2762-2017 Cd |
| 24 | [[sources/masite2022-mopane-trace-metals\|Masite et al. 2022]]. *Trace Metals, Crude Protein, and TGA-FTIR Analysis of Evolved Gas Products in the Thermal Decomposition of Roasted Mopane Worms, Sweet Corn, and Peanuts*, International Journal of Food Science | 2022 | Peer-reviewed | tAs, Cd, Co, Cr, Ni, and Pb by ICP-OES in roasted sweet corn purchased from South African markets, with tAs exceeding maximum allowable thresholds in all three product matrices |
| 25 | [[sources/cfia2020-toxic-metals-selected-foods-2018-19\|CFIA 2020]]. *Toxic Metals in Selected Foods – April 1, 2018 to March 31, 2019: Food chemistry – Targeted surveys – Final report*, Canadian Food Inspection Agency | 2020 | Government report | CA tAs, Cd, Pb, tHg occurrence in Retail food samples (bran products, infant formula, meal replacement beverages, protein powders, rice products) collected from 6 Canadian... (n=985) |
| 26 | [[sources/el-hassanin2020-egypt-maize-pb-cd\|El-Hassanin et al. 2020]]. *Risk assessment of human exposure to lead and cadmium in maize grains cultivated in soils irrigated either with low-quality water or freshwater*, Toxicology Reports 7:10-15 | 2020 | Peer-reviewed | EG Pb, Cd occurrence in Soil (0–30 cm), irrigation water, and maize grain composites collected in August 2017 from nine cultivated sites across... (n=27) |
| 27 | [[sources/gu2019-maize-peanut-heavy-metals-guangxi\|Gu et al. 2019]]. *Prediction and risk assessment of five heavy metals in maize and peanut: a case study of Guangxi, China*, Environmental Toxicology and Pharmacology | 2019 | Peer-reviewed | CN Cd, Cu, tHg, Pb, Zn occurrence in Sixty-five maize grain samples and thirty-five peanut grain samples paired with rhizosphere soils from Binyang County and Xingbin... (n=100) |
| 28 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | Pb, Cd, Cr, tAs, and tHg in 25 Beijing foodstuffs including corn within the cereal group (Cr 128 ppb, Cd 20 ppb DW), with cereals and vegetables jointly contributing 91.5% of total dietary Cd and 67.1% of total Pb |
| 29 | [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|Abebe et al. 2017]]. *Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia*, Chemistry International 3(3):268-276 | 2017 | Peer-reviewed | Pb and Cr by F-AAS and GF-AAS in oil-popped popcorn (Pb 0.94 mg/kg) and imported cornflakes (Pb 0.36 mg/kg) from Addis Ababa, both substantially above the EU 2023/915 cereals-as-placed limit of 0.020 mg/kg |
| 30 | [[sources/khalil2017-snacks-peshawar-pakistan-heavy-metals\|Khalil et al. 2017]]. *Heavy Metals Toxicity: Estimation of Heavy Metals in Branded and Local Snacks Available in the Markets of Peshawar, Pakistan*, Professional Medical Journal | 2017 | Peer-reviewed | Pb, Cd, and total Cr by AAS in branded and non-branded corn-based snacks from Peshawar (Pakistan, n=96), with total Cr exceeding permissible limits in all samples and branded products at mean 2.21 mg/kg |
| 31 | [[sources/ataee2016-iran-cereals-pb-cd\|Ataee et al. 2016]]. *Application of microwave-assisted dispersive liquid–liquid microextraction and graphite furnace atomic absorption spectrometry for ultra-trace determination of lead and cadmium in cereals and agricultural products*, International Journal of Environmental Analytical Chemistry 96(3):271-283 | 2016 | Peer-reviewed | IR Pb, Cd occurrence in 21 cereal composites (7 grain types — rice, wheat, barley, peas, beans, corn, lentil — × 3 local... (n=21) |
| 32 | [[sources/dufault2015-blood-mercury-glucose-nhanes\|Dufault et al. 2015]]. *Blood inorganic mercury is directly associated with glucose levels in the human population and may be linked to processed food intake*, Integrative Molecular Medicine | 2015 | Peer-reviewed | NHANES (n=16,232) epidemiological evidence linking blood inorganic Hg to fasting glucose (p<0.001), implicating high-fructose corn syrup manufactured with mercury-cell chlor-alkali processes as a Hg dietary-exposure pathway via corn derivatives |
| 33 | [[sources/islam2015-bangladesh-foods-heavy-metals\|Islam et al. 2015]]. *The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh*, Ecotoxicology and Environmental Safety | 2015 | Peer-reviewed | BD Cr, Ni, Cu, tAs, Cd, Pb occurrence in Commonly consumed meat, egg, fish, milk, vegetable, cereal, and fruit foods collected from agriculture fields, farms, river, and... |
| 34 | [[sources/pirsaheb2015-iran-kermanshah-cereals-metals\|Pirsaheb et al. 2015]]. *Essential and toxic heavy metals in cereals and agricultural products marketed in Kermanshah, Iran, and human health risk assessment*, Food Additives & Contaminants: Part B, Surveillance | 2015 | Peer-reviewed | IR Pb, Cd, Cr, Ni, Zn, Cu occurrence in 150 packed cereal samples representing 7 commodity types (rice, wheat, corn, peas, lentil, bean, split peas) collected from... (n=150) |
| 35 | [[sources/solidum2013-metro-manila-junk-food-metals\|Solidum et al. 2013]]. *Quantitative Analysis of Lead, Cadmium and Chromium in Different Brands of Junk Food Marketed in Metro Manila, Philippines*, Advanced Materials Research | 2013 | Peer-reviewed | PH Pb, Cd, Cr occurrence in Thirty-six junk-food samples randomly selected from sari-sari stores in Metro Manila, Philippines, in June 2012. (n=36) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 1 source added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0ae30c7b4](https://github.com/paleofoundation/heavymetalindex/commit/0ae30c7b4) | 2026-06-11 | correction | 11 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
