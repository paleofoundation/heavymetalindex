---
title: "Lentils"
type: ingredient
commodity: lentils
label: "Lentils"
aliases: [lentil]
category: legume
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [13.8, 46.3]
    p95_ppb: 47.2
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 18.3
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 15
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [400, 1500]
    p95_ppb: 2500
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [4720, 10765]
    p95_ppb: 13200
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [100, 900]
    p95_ppb: 1500
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [12.5, 60.4]
    p95_ppb: 94.6
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, 50]
    p95_ppb: 100
    confidence: low
    n_studies: 6
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 24
---

# Lentils

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Lentils are small pulse legumes (Lens culinaris) with a pronounced capacity to accumulate cadmium from soil relative to cereal grains and many other food crops. The primary accumulation pathway is root uptake from soil: legumes in general tend to accumulate more Cd than grasses because their root architecture, symbiotic nitrogen-fixing bacteria, and organic acid exudates that mobilize soil nutrients also enhance the mobilization and uptake of divalent metal cations including Cd. Cadmium absorbed by the root is transported to the shoot and seed through the plant vascular system; the seed coat (testa) accumulates Cd at higher concentrations than the cotyledon, meaning that whole lentils have higher Cd than dehulled red lentils. Lead in lentils reaches the edible portion primarily through atmospheric deposition on plants during growth and post-harvest contamination; root uptake of Pb is limited because Pb is strongly bound in most soils. Nickel is also bioavailable to legumes and is reported in the range of several hundred ppb in lentils; EFSA's 2020 nickel risk assessment identified legumes including lentils among the principal dietary Ni contributors in Europe [[sources/efsa-nickel-contam-2020]]. The dietary significance of lentil Cd is compounded by high consumption frequency in South Asian, Middle Eastern, and Mediterranean populations, where lentils (dal, mercimek, and related preparations) are a dietary staple consumed multiple times daily. Nordberg et al. document legumes including lentils as dietary Cd contributors and the textbook reference on Cd toxicology identifies vegetarians as an exposure subgroup that can approach or exceed the EU tolerable weekly intake from legume-heavy diets [[sources/nordberg2015-cadmium-chapter]]; [[sources/efsa-cadmium-contam-2009]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=8 | 13.8–46.3 | medium | [[sources/chaura2026-phaseolus-multiomics-ionomics\|1]], [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| Cd | n=11 | 0–10 | high | [[sources/chaura2026-phaseolus-multiomics-ionomics\|1]], [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| iAs | n=2 | 0 | low | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=6 | 10–50 | low | [[sources/chaura2026-phaseolus-multiomics-ionomics\|1]], [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| tHg | n=5 | 0–10 | medium | [[sources/chaura2026-phaseolus-multiomics-ionomics\|1]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|2]], [[sources/ibrahim2024-food-heavy-metals-nigeria\|3]] |
| Ni | n=4 | 400–1500 | low | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|1]], [[sources/galal2021-heavy-metals-pisum-sativum\|2]], [[sources/efsa-nickel-contam-2020\|3]] |
| Al | n=1 | 4720–10765 | low | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|1]] |
| Cr | n=4 | 100–900 | low | [[sources/chaura2026-phaseolus-multiomics-ionomics\|1]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|2]], [[sources/henriksen2023-chromium-nordic-nnr\|3]] |
| Sn | n=4 | 12.5–60.4 | medium | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|1]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|2]], [[sources/valizadeh2023-canned-beans-iran-health-risk\|3]] |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Geographic origin is the dominant driver of Cd variability in lentils. Soils used for lentil cultivation in South Asia (India, Nepal, Bangladesh, Pakistan) and the Middle East vary substantially in Cd content depending on geology, irrigation water quality, and fertilizer history. Canadian and US-grown lentils (the Palouse region of Washington and Idaho, Saskatchewan) are generally from lower-Cd soils and are expected to show lower Cd concentrations than South Asian imports, though direct comparison data are limited in the current corpus. Bandara et al. 2010 documented elevated Cd in pulses including lentils from Sri Lanka's North Central Province and linked them to chronic renal failure in the local population, illustrating the upper end of the geographic Cd range [[sources/bandara2010-cadmium-rice-sri-lanka-crf|6]]. Ventura et al. 2025 measured trace elements in Portuguese TDS samples across food groups and identified legumes and nuts as a contributing dietary group, with lentils implicitly included [[sources/ventura2025-portuguese-total-diet-study-trace-elements|2]]. The seed-coat versus cotyledon distinction creates within-variety variance: red lentils (which are dehulled) have lower Cd than green or brown lentils (whole), because the seed coat carries a disproportionate Cd burden.

## Processing effects

Soaking lentils in water for several hours before cooking, then discarding the soak water, reduces Cd content in the cooked lentil. Published studies on pulse soaking have reported Cd reductions of approximately 15 to 30 percent relative to unsoaked cooked lentils, with the magnitude depending on soaking duration, water volume, and initial Cd concentration; this range is documented in the general pulse literature but specific quantification for lentils in the current corpus is pending. Boiling lentils and discarding the cooking water provides a further reduction, though the cooking water carries some Cd that would otherwise be consumed. Dehulling (the process used to produce red lentils from whole brown or green lentils) removes the testa, which carries the highest Cd burden in the seed, and is the most effective single processing step for Cd reduction. Sprouting lentils reduces metal content through the biological processes of germination, with some studies reporting Cd reductions of 20 to 40 percent in sprouted versus unsprouted seeds, though this is not standard commercial processing.

## Ingredient-derivative risk

Lentil flour, produced by milling whole or dehulled lentils, concentrates the metals present in the source lentil proportionally; dehulled lentil flour carries less Cd than whole-lentil flour. Lentil protein concentrates and isolates, if produced by aqueous extraction, may partition Cd between the protein-rich and protein-depleted fractions; the metal distribution in lentil protein fractions is not characterized in the current corpus. Canned lentils (lentils packed in brine in tin-lined cans) may carry a Sn migration component from the can; Valizadeh et al. 2023 characterized Sn in canned pinto and fava beans from Iran and documented detectable Sn in samples, which is relevant context for canned pulse products generally [[sources/valizadeh2023-canned-beans-iran-health-risk|3]]. Dal preparations (Indian spiced lentil dishes) involving extended cooking with water, which is then consumed as part of the dish, retain more of the metal burden than preparations where cooking water is discarded.

## Mitigation options

### Sourcing levers

Geographic sourcing from low-Cd soil regions (Canada, northwestern US) provides the most impactful ingredient-level Cd reduction for lentils. Supplier specifications requiring origin documentation and lot-level Cd testing, with certificate-of-conformity requirements, provide a documented basis for risk management. For South Asian origin lentils, Cd variability is high enough that lot-level testing is warranted rather than regional generalization.

### Agronomic levers

Soil liming to maintain pH above 6.5 reduces Cd bioavailability and plant uptake. Selection of lentil varieties with lower intrinsic Cd accumulation capacity, which varies measurably between cultivars, provides an additional lever at the seed level. Irrigation water quality management is relevant in regions where groundwater Cd is elevated.

### Processing levers

Dehulling (producing red lentils) is the most effective single processing lever for Cd reduction. Soaking before cooking and discarding soak water, then discarding cooking water if the dish permits, provide additional but more modest reductions. These processing steps are under consumer or foodservice control rather than manufacturer control for whole lentils sold retail.

### Formulation levers

Substituting a portion of high-Cd-origin lentils with low-Cd-origin lentils or other pulses reduces the per-serving Cd contribution proportionally. Dehulled lentil-based formulations (using red lentil flour or protein) carry lower Cd burdens than whole-lentil equivalents.

### Testing and QC levers

Given the dietary significance of lentil Cd particularly for frequent consumers, lot-level Cd testing by ICP-MS or ICP-OES provides the most reliable quality assurance signal. The EU ML of 0.10 mg/kg for Cd in pulses provides the compliance reference. Ni testing is also warranted given EFSA's identification of legumes as a principal dietary Ni contributor [[sources/efsa-nickel-contam-2020|4]].

### Packaging and storage levers

Lentils sold dry are not packaged in tin-lined cans; Sn migration is not applicable. Canned lentils, however, are subject to Sn migration from the can, and lacquer-lined can specifications reduce this pathway.

## Regulatory limits that apply

EU Regulation 2023/915 sets a maximum level for Cd in dried legumes (pulses) of 0.10 mg/kg wet weight, applicable to lentils [[regulations/eu-2023-915-cadmium]]. The Pb limit for dried legumes under the EU framework is 0.10 mg/kg wet weight [[regulations/eu2023-contaminants-maximum-levels]]. These limits apply to the product as placed on the market (dry weight basis for dry lentils). Codex Alimentarius sets a maximum of 0.10 mg/kg for Cd in pulses under the General Standard for Contaminants and Toxins [[regulations/codex-cadmium-mls]], consistent with the EU limit. The United States does not set a statutory maximum for Pb or Cd in lentils. EFSA's 2009 Cd opinion established the EU tolerable weekly intake (TWI) of 2.5 µg/kg body weight per week and identified vegetarians, who consume legumes at high frequency, as a population subgroup approaching or exceeding this TWI from dietary sources alone [[sources/efsa-cadmium-contam-2009|7]].

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 24 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/efsa-nickel-contam-2020|Update of the Risk Assessment of Nickel in Food and Drinking Water]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · EFSA Journal 2020;18(11):6268 · 2020 · [doi.org/10.2903/j.efsa.2020.6268](https://doi.org/10.2903/j.efsa.2020.6268)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/nordberg2015-cadmium-chapter|Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals]]<span class="hmi-ref-meta">Nordberg GF, Nogawa K, and Nordberg M · Academic Press / Elsevier, Amsterdam · 2015 · [doi.org/10.1016/B978-0-444-59453-2.00032-9](https://doi.org/10.1016/B978-0-444-59453-2.00032-9)</span><span class="hmi-ref-tag">Textbook</span>
4. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/bandara2010-cadmium-rice-sri-lanka-crf|Chronic Renal Failure in Sri Lanka Caused by Elevated Dietary Cadmium: Trojan Horse of the Green Revolution]]<span class="hmi-ref-meta">Bandara JMRS, Wijewardena HVP, Liyanege J, Upul MA, and Bandara JMUA · Toxicology Letters 198(1):33–39 · 2010 · [doi.org/10.1016/j.toxlet.2010.04.016](https://doi.org/10.1016/j.toxlet.2010.04.016)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/ventura2025-portuguese-total-diet-study-trace-elements|Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach]]<span class="hmi-ref-meta">Ventura M, Rego A, Gueifão S, Delgado I, and Coelho I · Foods · 2025 · [doi.org/10.3390/foods15050838](https://doi.org/10.3390/foods15050838)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/valizadeh2023-canned-beans-iran-health-risk|Health Risk Assessment of Potentially Toxic Elements in Canned Pinto Beans and Fava Beans Distributed in Gilan Province of Iran]]<span class="hmi-ref-meta">Valizadeh Moghadam Jirandehi H, Nourieh N, Yazdanfar N, and Kashi G · Scientific Reports (published 2023; open access) · 2023 · [doi.org/10.1038/s41598-025-34271-1](https://doi.org/10.1038/s41598-025-34271-1)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chaura2026-phaseolus-multiomics-ionomics\|Chaura et al. 2026]]. *Nutritional and Biochemical Diversity in Beans Accessions from Three Phaseolus Species Using Multiomics Characterization*, ACS Nutrition Science | 2026 | Peer-reviewed | Pb, Cd, tAs, Cr, and tHg in 46 Phaseolus bean accessions (P. vulgaris, P. lunatus, P. acutifolius) from 19 countries by ICP-MS; one P. vulgaris outlier at 3,311 ppb Pb; species-level Cd and As differences |
| 2 | [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|Cardini et al. 2025]]. *A novel approach for the identification of cadmium-chelating compounds in plant-based foods using SEC-ICP-MS/MS and SEC-QTOF-MS*, Analytical and Bioanalytical Chemistry | 2025 | Peer-reviewed | Cd occurrence in Seven plant-based food matrices: black-eyed beans, beluga lentils, tigernuts, basmati rice, sweet potato (cooked, dried, ground), beetroot leaves;... (n=7) |
| 3 | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|Uthayarajan et al. 2025]]. *Quality and sources of food and water consumed by people with chronic kidney disease of unknown etiology in Sri Lanka: a systematic review*, Journal of Nephrology | 2025 | Peer-reviewed | LK Cd, Pb, iAs, tAs, Al, Cr, Ni, Sn, tHg occurrence in 57 studies (of 1,067 identified) reporting food and water quality in Sri Lanka CKDu-endemic areas, primarily North Central... (n=57) |
| 4 | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|Ventura et al. 2025]]. *Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach*, Foods | 2025 | Peer-reviewed | tAs, Cd, Pb, and Sn occurrence across 163 pooled retail samples representing 17 food groups in the Portuguese TDS (2014–2016 collection), including the legumes and nuts group; legumes show highest Mo concentrations among all food groups |
| 5 | [[sources/eu-2024-1987-nickel-maximum-levels\|EU 2024]]. *Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs*, Official Journal of the European Union, L series, 2024/1987 (31.7.2024) | 2024 | Regulation | EU Ni concentrations |
| 6 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | EU Ni concentrations |
| 7 | [[sources/ibrahim2024-food-heavy-metals-nigeria\|Ibrahim et al. 2024]]. *Correlates of Food Contamination by Heavy Metals in Northwest Nigeria*, Environmental Health Insights | 2024 | Peer-reviewed | NG Pb, Cd, tHg occurrence in 361 raw food samples from 360 households in 4 local government areas of Jigawa State, northwest Nigeria (Dutse,... (n=361) |
| 8 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | EU/NO/SE Cr occurrence in Scoping review for Nordic Nutrition Recommendations 2023; literature search on chromium in diet, supplementation, and health outcomes; Nordic... |
| 9 | [[sources/sandil2023-arsenic-bean-lettuce\|Sandil et al. 2023]]. *Arsenic uptake and accumulation in bean and lettuce plants at different developmental stages*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | HU tAs occurrence in Bean (Phaseolus vulgaris) and lettuce (Lactuca sativa) grown in controlled chamber conditions, irrigated with As-contaminated water at 0.1,... |
| 10 | [[sources/valizadeh2023-canned-beans-iran-health-risk\|Valizadeh et al. 2023]]. *Health Risk Assessment of Potentially Toxic Elements in Canned Pinto Beans and Fava Beans Distributed in Gilan Province of Iran*, Scientific Reports (published 2023; open access) | 2023 | Peer-reviewed | tAs, Cd, Pb, Sn, and tHg in 90 canned pinto and fava bean samples from 12 brands in Gilan Province, Iran (ICP-OES/EPA 7473); Hg below LOD in all samples, Cd detected in pinto beans only (max 4 ppb wet weight) |
| 11 | [[sources/kumar2022-bangladesh-agricultural-products-lead\|Kumar et al. 2022]]. *Lead (Pb) Contamination in Agricultural Products and Human Health Risk Assessment in Bangladesh*, Water, Air, & Soil Pollution 233:257 | 2022 | Peer-reviewed | BD Pb occurrence in Published Pb concentration data for commonly consumed agricultural foods and food products in Bangladesh. (n=Literature survey covering three cereals, five pulses, ten fruits, and 34 vegetables/other agricultural food items) |
| 12 | [[sources/galal2021-heavy-metals-pisum-sativum\|Galal et al. 2021]]. *Heavy metals uptake by the global economic crop (Pisum sativum L.) grown in contaminated soils and its associated health risks*, PLoS ONE | 2021 | Peer-reviewed | EG Pb, Cd, As, Cr, Ni, Fe, Mn, Zn, Cu, Ag, Co, V occurrence in Pisum sativum (garden pea) plants from 2 non-polluted farms and 2 polluted farms (5 quadrats per farm, 1... (n=20) |
| 13 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 14 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA Ni risk assessment (TDI 13 µg/kg bw/day) drawing on >47,000 European occurrence data points, identifying legumes including lentils among the principal dietary Ni contributors; anchors the acute LOAEL of 4.3 µg/kg bw for Ni-sensitised individuals |
| 15 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 16 | [[sources/tatahmentan2020-rice-grains-elements\|TatahMentan et al. 2020]]. *Toxic and Essential Elements in Rice and Other Grains from the United States and Other Countries*, International Journal of Environmental Research and Public Health | 2020 | Peer-reviewed | US/CA/TH tAs, Pb, Cd, Cu, Fe, Mn, Zn occurrence in Rice and other grains purchased from local stores in Louisiana, USA: 28 white rice samples, 11 brown rice... |
| 17 | [[sources/alam2019-lentil-arsenic-accumulation\|Alam et al. 2019]]. *Arsenic accumulation in lentil (Lens culinaris) genotypes and risk associated with the consumption of grains*, Scientific Reports | 2019 | Peer-reviewed | US tAs occurrence in Controlled greenhouse pot experiment at Washington State University using three lentil genotypes (pardina, red chief, and precoz), three... (n=81) |
| 18 | [[sources/ataee2016-iran-cereals-pb-cd\|Ataee et al. 2016]]. *Application of microwave-assisted dispersive liquid–liquid microextraction and graphite furnace atomic absorption spectrometry for ultra-trace determination of lead and cadmium in cereals and agricultural products*, International Journal of Environmental Analytical Chemistry 96(3):271-283 | 2016 | Peer-reviewed | IR Pb, Cd occurrence in 21 cereal composites (7 grain types — rice, wheat, barley, peas, beans, corn, lentil — × 3 local... (n=21) |
| 19 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical textbook chapter on Cd toxicology (pp. 667–716) covering toxicokinetics, renal tubular endpoint, carcinogenicity, and risk assessment, with food occurrence data for legumes including lentils as dietary Cd contributors |
| 20 | [[sources/pirsaheb2015-iran-kermanshah-cereals-metals\|Pirsaheb et al. 2015]]. *Essential and toxic heavy metals in cereals and agricultural products marketed in Kermanshah, Iran, and human health risk assessment*, Food Additives & Contaminants: Part B, Surveillance | 2015 | Peer-reviewed | IR Pb, Cd, Cr, Ni, Zn, Cu occurrence in 150 packed cereal samples representing 7 commodity types (rice, wheat, corn, peas, lentil, bean, split peas) collected from... (n=150) |
| 21 | [[sources/islam2014-bangladesh-cereals-pulses-metals\|Islam et al. 2014]]. *Heavy Metals in Cereals and Pulses: Health Implications in Bangladesh*, Journal of Agricultural and Food Chemistry | 2014 | Peer-reviewed | BD Cr, Ni, Cu, Zn, tAs, Cd, Pb occurrence in Composite samples of rice, wheat, maize, lentil, and black gram collected from agricultural fields in the Bogra district... (n=144) |
| 22 | [[sources/bandara2010-cadmium-rice-sri-lanka-crf\|JMRS et al. 2010]]. *Chronic Renal Failure in Sri Lanka Caused by Elevated Dietary Cadmium: Trojan Horse of the Green Revolution*, Toxicology Letters 198(1):33–39 | 2010 | Peer-reviewed | Cd in rice, pulses (lentils and other legumes), and fish from Sri Lanka's North Central Province (ICP-AAS; n≈140 samples), establishing the pulse contribution alongside rice in the dietary Cd load linked to an epidemic of chronic renal failure |
| 23 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion establishing the EU TWI of 2.5 µg/kg bw/week and reporting dietary Cd occurrence across European food groups including legumes; identifies vegetarians — high legume consumers — as an exposure subgroup exceeding the TWI by roughly twofold |
| 24 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Ni concentrations in 2,221 food samples from the Danish National Food Institute literature survey (AAS/PIXE, 1969–1982), reporting lentils among the high-Ni foods alongside soy, oats, and cocoa, with a load factor analysis quantifying per-food contribution to total dietary Ni intake |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 4 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
