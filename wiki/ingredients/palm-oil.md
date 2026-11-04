---
title: "Palm oil"
dek: "Lead, cadmium, total arsenic, total mercury, chromium, nickel, and aluminium in palm oil: measurement results from Bangladesh, Indonesia, and China, processing effects, and regulatory limits."
rail_highlights:
  - label: Mercury anomaly
    text: Bangladesh retail palm oil composites averaged 3.4 mg/kg total mercury, exceeding the Codex limit by more than thirty-fold; Indonesia and China refined palm oil found mercury below detection
    source: sources/shaheen2024-bangladesh-soybean-palm-oil-metals
    source_label: Bangladesh study
  - label: Lead and cadmium
    text: Refined palm oil from Indonesia measured lead at 75 µg/kg and cadmium at 15 µg/kg; Chinese commercial palm oil found neither above detection
    source: sources/thompson-morrison2024-elaeis-guineensis-chemical-elements
    source_label: Indonesia study
  - label: Key distinction
    text: Arsenic, cadmium, lead, and mercury results for refined palm oil differ markedly between Bangladesh retail composites and ICP-MS measurements from Indonesia and China
    source: sources/shaheen2024-bangladesh-soybean-palm-oil-metals
    source_label: Oil study
type: ingredient
commodity: palm-oil
aliases: []
category: oil
provisional_scaffold: false
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [24, 75]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-11-04
    basis: wet-weight
    notes: "Bangladesh retail composites (n=21 palm oil pools) mean 23.8 µg/kg; Indonesia refined palm oil (ICP-MS, n=10) mean 75 µg/kg; China commercial refined palm oil (ICP-OES, n=3) not detected. Sources report different markets and processing states. Shaheen 2024 (BD), Thompson-Morrison 2024 (ID), Chang 2026 (CN)."
  tAs:
    status: populated
    typical_ppb: [8, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-11-04
    basis: wet-weight
    notes: "Bangladesh retail composites mean 8.4 µg/kg (AAS); Indonesia refined palm oil below LOQ of 10 µg/kg (ICP-MS); China commercial not measured in elemental panel for As. Total arsenic only; inorganic arsenic not speciated in any study. Shaheen 2024 (BD), Thompson-Morrison 2024 (ID)."
  Cd:
    status: populated
    typical_ppb: [5, 15]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-11-04
    basis: wet-weight
    notes: "Bangladesh retail composites mean 5.3 µg/kg; Indonesia refined palm oil mean 15 µg/kg (ICP-MS); China commercial not detected (ICP-OES, LOD not reported). Shaheen 2024 (BD), Thompson-Morrison 2024 (ID), Chang 2026 (CN)."
  MeHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: "No study in this deposit speciated mercury into methylmercury. All mercury data are total mercury."
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-11-04
    basis: wet-weight
    notes: "Bangladesh retail palm oil composites (n=21) mean 3,400 µg/kg (3.4 mg/kg), range 140 to 23,200 µg/kg; refinery samples crude palm oil mean 1,500 µg/kg, refined 1,800 µg/kg. Indonesia refined palm oil below LOQ of 10 µg/kg. These two results are irreconcilable as a central estimate. The Bangladesh levels are attributed to pre-import contamination; refining did not reduce mercury. Shaheen 2024 (BD), Thompson-Morrison 2024 (ID). Typical ppb set null pending geographic stratification."
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: "Inorganic arsenic not measured in any deposit study. Total arsenic only."
  Ni:
    status: populated
    typical_ppb: [40, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-11-04
    basis: wet-weight
    notes: "Indonesia refined palm oil (ICP-MS) mean 40 µg/kg; China commercial (ICP-OES) not detected. Thompson-Morrison 2024 (ID), Chang 2026 (CN)."
  Al:
    status: populated
    typical_ppb: [159000, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-11-04
    basis: wet-weight
    notes: "Indonesia refined palm oil (ICP-MS) mean 159 mg/kg (159,000 µg/kg). Authors attribute to soil or dust contamination and aluminium-containing clay flocculants during refining. Unusually high relative to prior literature (1.9 to 31 mg/kg). Single study; value should not be treated as a typical estimate. Thompson-Morrison 2024 (ID)."
  Cr-VI:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: "Total chromium only measured. Bangladesh retail composites mean 36.3 µg/kg; Indonesia refined mean 80 µg/kg. Speciation to Cr-VI not performed in any deposit study."
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: "Not measured in any deposit study."
literature_scope: cited
sources: 8
updated: 2026-11-04
hero_image: /static/heroes/golden-oil-unmarked-bottle.webp
hero_image_alt: "Golden edible oil in an unmarked glass bottle and a shallow dish illustrating palm oil ingredient context."
---

# Palm oil

Palm oil is an edible vegetable fat derived from the mesocarp of *Elaeis guineensis* fruit, used globally in food manufacturing, frying, and as a cooking oil. Three studies in this deposit measured heavy metals directly in refined palm oil sold in Bangladesh, Indonesia, and China. Lead, cadmium, and arsenic were low in all three markets. Mercury was anomalously elevated in Bangladesh retail composites but below detection in Indonesian and Chinese samples, a geographic divergence the Bangladesh authors attribute to contamination in imported crude oil before refining.

## What counts as palm oil

This page covers the edible oil extracted from the mesocarp (*Elaeis guineensis*), sold as crude palm oil (CPO), refined palm oil (RPO), or refined bleached deodorized palm oil (RBD palm oil). Palm kernel oil, extracted from the seed endosperm, is a separate ingredient with a different fatty acid profile and is not included here. Fractionated products such as palm olein and palm stearin derive from palm oil but are not separately profiled on this page.

## Why palm oil accumulates metals

Palm oil's lipid-dominant composition limits solubility of ionic metals. Thompson-Morrison et al. 2024 measured bioaccumulation coefficients from plantation soils to mesocarp tissue in Sumatra and found low transfer for lead (BAC 0.001 to 0.003) and moderate transfer for cadmium (0.10 to 0.13).<sup>2</sup> Arsenic was below the LOQ in all fruit tissues, indicating minimal soil-to-fruit transfer. The authors propose that trace elements are not transported by xylem or phloem from leaves to fruit but are synthesised from carbohydrates in situ, further limiting metal content in the harvested mesocarp.

Contamination pathways operating at the processing stage include soil or dust deposition during harvest and milling, and use of aluminium-containing clay flocculants in refining (the probable source of elevated aluminium in the Indonesian refined oil).<sup>2</sup> The review by John Martin et al. 2026 notes that bleaching earths and activated carbon-clay blends used in the refining chain partially adsorb trace metals, alongside polycyclic aromatic hydrocarbons, suggesting that the refining sequence can both introduce metals (via processing additives) and remove them (via adsorption).<sup>4</sup>

The anomalous mercury in Bangladesh retail composites illustrates a supply-chain contamination pathway not attributable to plantation soils or refining: mercury levels in crude and refined palm oil at Bangladeshi refineries were indistinguishable, and the authors conclude contamination entered with imported crude oil before domestic processing began.<sup>1</sup>

<!-- BEGIN: hmi-cited-measurements -->

Shaheen and colleagues measured lead at an average of 23.8 µg/kg (range 10.6 to 48.8 µg/kg) and total mercury at an average of 3,400 µg/kg (range 140 to 23,200 µg/kg) in 21 palm oil retail composites from Bangladesh. Total arsenic averaged 8.4 µg/kg and cadmium 5.3 µg/kg in the same composites. [[sources/shaheen2024-bangladesh-soybean-palm-oil-metals]]

Thompson-Morrison and colleagues measured refined palm oil from an Indonesian commercial product by ICP-MS: lead mean 75 µg/kg, cadmium mean 15 µg/kg, chromium mean 80 µg/kg, nickel mean 40 µg/kg, aluminium mean 159,000 µg/kg (159 mg/kg). Arsenic and mercury were below the LOQ of 10 µg/kg. [[sources/thompson-morrison2024-elaeis-guineensis-chemical-elements]]

Chang and colleagues measured 16 commercial refined vegetable oils in China by ICP-OES; palm oil showed no detectable arsenic, cadmium, or lead. Zinc was detected at 1.78 µg/g (1,780 µg/kg). [[sources/chang2026-perilla-seed-oil-elemental-safety]]

## Heavy metal contamination profile

The three primary measurement studies in this deposit covered different processing states and geographic sources. Concentrations are reported as wet weight in the finished oil as analyzed.

### Lead

Bangladesh retail composites (n = 21 palm oil pools, 1,521 individual samples combined): mean 23.8 µg/kg (0.0238 mg/kg), range 10.6 to 48.8 µg/kg, measured by graphite furnace atomic absorption spectrometry (GFAAS) after microwave digestion.<sup>1</sup>

Indonesian refined palm oil (n = 10 replicate digests of one commercial product): mean 75 µg/kg (0.075 mg/kg), standard error 12 µg/kg, measured by ICP-MS after microwave digestion (EPA Method 3051A).<sup>2</sup>

Chinese commercial refined palm oil (n = 3): lead not detected by ICP-OES. Detection limit not reported.<sup>3</sup>

The Codex Alimentarius general standard for contaminants (CXS 193-1995 as amended) sets a maximum of 100 µg/kg for lead in edible fats and oils; all three datasets are consistent with that limit.

### Cadmium

Bangladesh retail composites: mean 5.3 µg/kg, range 2.3 to 8.5 µg/kg (GFAAS).<sup>1</sup>

Indonesian refined palm oil: mean 15 µg/kg, standard error below 10 µg/kg (ICP-MS, LOQ 10 µg/kg; this value sits near the LOQ).<sup>2</sup>

Chinese commercial refined palm oil: not detected (ICP-OES, LOD not reported).<sup>3</sup>

Codex maximum for cadmium in edible fats and oils is 100 µg/kg. All results are well below that limit.

### Total arsenic

Bangladesh retail composites: mean 8.4 µg/kg, range 6.0 to 14.5 µg/kg (hydride vapor generation AAS).<sup>1</sup>

Indonesian refined palm oil: below LOQ of 10 µg/kg (ICP-MS).<sup>2</sup>

Inorganic arsenic was not speciated in either study. The Codex maximum for arsenic in edible fats and oils is 100 µg/kg; measured total arsenic levels are well below this limit in both datasets. Because inorganic arsenic constitutes only a fraction of total arsenic in edible oils, actual inorganic arsenic exposure is expected to be lower still, though it has not been directly measured in these sources.

### Total mercury

Bangladesh retail composites: mean 3.4 mg/kg (3,400 µg/kg), range 0.14 to 23.2 mg/kg, in 21 palm oil pools; 87.5 percent of unbranded and 92.3 percent of branded palm oil composites exceeded the Bangladesh national limit of 0.25 mg/kg (BSTI) and 100 percent exceeded the Codex maximum of 0.1 mg/kg.<sup>1</sup>

Refinery samples in the same study: crude palm oil (n = 4) mean 1.5 mg/kg, refined palm oil (n = 7) mean 1.8 mg/kg; the refining step did not significantly reduce mercury (p greater than 0.05). The authors conclude contamination originated in imported crude oil before the domestic refining stage.<sup>1</sup>

Indonesian refined palm oil: total mercury below LOQ of 10 µg/kg (ICP-MS).<sup>2</sup>

These two results are irreconcilable as a single population estimate. The Bangladesh data represent a specific contaminated supply chain rather than a global baseline for palm oil mercury. No other study in this deposit measured mercury in palm oil from other markets.

### Chromium (total)

Bangladesh retail composites: mean 36.3 µg/kg, range 12.3 to 64.1 µg/kg (GFAAS).<sup>1</sup> Branded palm oil mean 38.0 µg/kg, unbranded 33.3 µg/kg.

Indonesian refined palm oil: mean 80 µg/kg, standard error 19 µg/kg (ICP-MS).<sup>2</sup>

Both values are for total chromium. Hexavalent chromium (Cr-VI) was not measured in any deposit study.

### Nickel

Indonesian refined palm oil: mean 40 µg/kg, standard error 18 µg/kg (ICP-MS).<sup>2</sup>

Chinese commercial refined palm oil: not detected (ICP-OES, LOD not reported).<sup>3</sup>

### Aluminium

Indonesian refined palm oil: mean 159 mg/kg (159,000 µg/kg), standard error 8.5 mg/kg (ICP-MS).<sup>2</sup> The authors note this exceeds prior literature values of 1.9 to 31 mg/kg from Malaysian kernels and similar products. They attribute the elevated aluminium to soil or dust contamination and to the use of aluminium-containing clay flocculants during refining. At a consumption of 37.1 g/day palm oil, the resulting intake remains below the tolerable weekly intake of 1 mg per kilogram body weight per week.

### Measurement summary

| Metal | Bangladesh retail composites (mean, µg/kg) | Indonesia refined palm oil (mean, µg/kg) | China commercial (n=3) |
| --- | --- | --- | --- |
| Pb | 23.8 | 75 | not detected |
| Cd | 5.3 | 15 | not detected |
| total As | 8.4 | below 10 (LOQ) | not measured |
| total Hg | 3,400 | below 10 (LOQ) | not measured |
| total Cr | 36.3 | 80 | not measured |
| Ni | not measured | 40 | not detected |
| Al | not measured | 159,000 | not measured |

Sources for this table: Shaheen et al. 2024 (Bangladesh);<sup>1</sup> Thompson-Morrison et al. 2024 (Indonesia);<sup>2</sup> Chang et al. 2026 (China).<sup>3</sup>

<!-- END: hmi-cited-measurements -->

## Ranges by source

The largest source of variation in this dataset is geographic. Bangladesh retail composites measured mercury at three to four orders of magnitude above the Indonesian and implied Chinese levels. Lead ranged from 24 µg/kg (Bangladesh) to 75 µg/kg (Indonesia) to not detected (China). These differences likely reflect differences in source origin of the crude oil, refinery practices, and local agricultural or environmental contamination rather than inherent properties of palm oil as a commodity.

## Processing effects

Processing state matters for trace element content. Comparison of crude and refined palm oil at Bangladeshi refineries showed no significant mercury reduction through the refining process, while Thompson-Morrison et al. 2024 show that trace elements in Indonesian mesocarp are substantially higher (dry weight) than in the final refined oil, suggesting effective metal partitioning into the aqueous waste stream during standard refining.<sup>1</sup><sup>2</sup> John Martin et al. 2026 describe bleaching earths and activated carbon-clay blends as partially adsorbing trace metals during the refining sequence.<sup>4</sup> The refining chain (degumming, bleaching, deodorization) can both remove metals via adsorption and introduce them via aluminium-containing clay flocculants.

## Ingredient-derivative risk

Palm oil fractionates into palm olein (the liquid fraction) and palm stearin (the solid fraction). Both are derived from refined palm oil and would carry the same trace element profile as the parent oil unless the fractionation step selectively partitions metals. No deposit study measured metals in palm olein or palm stearin separately. Palm kernel oil, extracted from the seed endosperm, has a different fatty acid composition and is not profiled here; it may carry a different trace element signature because seed tissue has different bioaccumulation characteristics from mesocarp tissue.

## Mitigation options

Selecting refined bleached deodorized (RBD) palm oil over crude or less-processed forms provides the most evidence-based reduction in trace metal exposure, as the bleaching step provides partial metal removal and the full refining sequence partitions metals into aqueous waste. Aluminium contamination may arise from clay flocculants used in some refining processes; sourcing from refiners that use alternative flocculants or that test aluminium in finished oil reduces this risk. For mercury, refining alone did not reduce levels in the Bangladesh supply chain data; mitigation in that context requires upstream control of crude oil sourcing rather than downstream processing.

## Regulatory limits

The Codex Alimentarius general standard for contaminants in food (CXS 193-1995 as amended) sets maximum levels in edible fats and oils of: lead 100 µg/kg, cadmium 100 µg/kg, arsenic 100 µg/kg, mercury 100 µg/kg. The Bangladesh national standard (BSTI) sets lower limits for some metals: arsenic 100 µg/kg, cadmium 1,000 µg/kg, lead 100 µg/kg, mercury 250 µg/kg. All Bangladesh composite values for arsenic, cadmium, and lead were compliant with both Codex and BSTI limits. Mercury was non-compliant in most Bangladesh palm oil composites against both standards.<sup>1</sup>

No Codex or EU maximum level for nickel, aluminium, or total chromium in edible vegetable oils was identified in the deposit literature. Hexavalent chromium is not regulated as a food contaminant in edible oils under the instruments cited in these studies.

## What remains uncertain

Mercury in palm oil lacks a coherent global baseline. The Bangladesh finding of milligram-per-kilogram levels in retail composites is not replicated in Indonesian or Chinese samples in this deposit. It is not known whether the Bangladesh contamination reflects a persistent supply-chain problem in that market or a time-limited episode in 2021. No study speciated mercury into methylmercury, so the organic fraction relevant to neurotoxicity is not established for palm oil.

Inorganic arsenic has not been measured in any deposit study. Total arsenic is low in all three markets, but speciation would be required to characterise the inorganic fraction that drives arsenic-related risk assessments.

Hexavalent chromium was not measured; total chromium data only.

The Indonesia aluminium result of 159 mg/kg is a single-product estimate from one study and should not be treated as a typical value across markets.

Tin has not been measured in any deposit study.

## Microbiome implications

Palm oil as a food matrix has not been directly tested in gut microbiome studies. The microbiome studies linked here used heavy metal exposures via other routes (drinking water, blood, tooth biomarkers, inhalation) rather than edible oil. They are cited as metal-specific mechanistic context, not as evidence about palm oil consumption specifically.

Eggers et al. 2023 [[sources/eggers2023-prenatal-lead-exposure-gut-microbiome-childhood]] followed 123 children in the Mexico City PROGRESS cohort. Maternal blood lead means were 33.6 µg/L in the second trimester and 34.9 µg/L in the third. Stool metagenomes at ages 9 to 11 showed lower Bacteroides caccae with lead exposure. Weighted quantile sum regression gave a negative overall mixture effect (beta = -0.17) in both trimesters.

Sitarik et al. 2020 [[sources/sitarik2020-fetal-postnatal-lead-gut-microbiota]] measured tooth lead and stool microbiota at 1 month and 6 months in 146 maternal-child pairs. In utero tooth lead was associated with fungal community composition at 1 month. Lead was not associated with overall bacterial community structure.

Zhang et al. 2015 [[sources/zhang-2015-cadmium-hepatic-energy-gut-microbiome]] gave mice 10 mg/L cadmium in drinking water for 10 weeks. Firmicutes and gamma-proteobacteria decreased in feces after 4 weeks.

Hoen et al. 2018 [[sources/hoen2018-infant-arsenic-gut-microbiome]] related urinary total arsenic at 6 weeks to stool microbiota in 204 infants. Urinary total arsenic had median 0.4 µg/L. The clearest association was in formula-fed males (n = 33, pseudo-F 2.30, p = 0.008).

Coe et al. 2023 [[sources/coe2023-gut-microbiome-methylmercury-demethylation]] paired a human cohort with gnotobiotic mice colonized with human microbiota. Gut microbes demethylated a fraction of ingested methylmercury, and the resulting inorganic mercury was preferentially excreted in feces rather than absorbed. This is relevant to palm oil only in markets where total mercury in palm oil is elevated (see the Bangladesh data above).

Mu et al. 2023 [[sources/mu2023-seaweed-polysaccharide-chromium-gut-microbiome]] gavaged mice with potassium dichromate at 75 mg/kg for 29 days. Hexavalent chromium lowered Chao1 diversity and Shannon diversity; Escherichia_Shigella rose from 10.71 percent to 57.75 percent. The dose is a gavage dose, not total chromium in food.

Xiong et al. 2025 [[sources/xiong2025-prenatal-trace-elements-infant-gut-microbiome]] followed 146 mother-infant pairs with maternal hair trace elements measured in 119 mothers. Infant Shannon diversity of the gut at 3 months correlated negatively with copper and positively with selenium. Bifidobacterium relative abundance increased under high aluminium and high manganese together. This study does not separate aluminium from manganese effects and uses hair as the biomarker rather than a food concentration.

Yang et al. 2023 [[sources/yang2023-nickel-gut-microbiome-uric-acid]] compared 109 occupationally nickel-exposed workers with matched controls. Serum nickel in the exposed group was 5.70 plus or minus 3.21 µg/L. Uric-acid-lowering bacteria including Lactobacillus were lower in the exposed group.

### What remains uncertain

No study cited here fed palm oil to human subjects or animals. The mercury finding in Bangladesh retail palm oil (average 3.4 mg/kg) is the most toxicologically relevant result for microbiome context, but no published study has examined gut microbiome effects of mercury exposure through palm oil as the vehicle.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory.

1. [[sources/shaheen2024-bangladesh-soybean-palm-oil-metals|Measurement of Heavy Metals in Commercially Available Soybean and Palm Oils and Relevant Health Risk Assessment in Bangladesh]]<span class="hmi-ref-meta">Shaheen N et al. · Journal of Health and Pollution · 2024 · [doi.org/10.1289/jhp1072](https://doi.org/10.1289/jhp1072)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/thompson-morrison2024-elaeis-guineensis-chemical-elements|Chemical elements in Elaeis guineensis materials and derived oil]]<span class="hmi-ref-meta">Thompson-Morrison H et al. · Scientific Reports · 2024 · [doi.org/10.1038/s41598-023-50492-8](https://doi.org/10.1038/s41598-023-50492-8)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/chang2026-perilla-seed-oil-elemental-safety|Systematic Evaluation of the Nutritional Quality, Elemental Safety, and Preventive Effects of Perilla Seed Oil on Hyperlipidemia and Gut Microbiota Dysbiosis in High-Fat Diet-Fed Rats]]<span class="hmi-ref-meta">Chang J et al. · Nutrients · 2026 · [doi.org/10.3390/nu18132149](https://doi.org/10.3390/nu18132149)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/martin2026-palm-oil-review-nutritional-contaminants|Palm oil: a review on nutritional composition, processing, contaminants, and sustainability frameworks in the food system]]<span class="hmi-ref-meta">John Martin JJ et al. · Frontiers in Plant Science · 2026 · [doi.org/10.3389/fpls.2026.1798946](https://doi.org/10.3389/fpls.2026.1798946)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/tesfaye2016-edible-oils-essential-metals-ethiopia|Physico-Chemical Characteristics and Level of Some Selected Metal in Edible Oils]]<span class="hmi-ref-meta">Bereket Tesfaye and Alemayehu Abebaw · Advances in Chemistry · 2016 · [doi.org/10.1155/2016/3480329](https://doi.org/10.1155/2016/3480329)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/chen2001-edible-fats-oils-arsenic|Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer]]<span class="hmi-ref-meta">Syr-Song Chen et al. · Journal of Food and Drug Analysis · 2001 · [doi.org/10.38212/2224-6614.2799](https://doi.org/10.38212/2224-6614.2799)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/enemuor2021-palm-oil-kogi-metals|Heavy metals and microbial contamination of palm oil produced and sold at some markets in Kogi East Area, Kogi State, Nigeria]]<span class="hmi-ref-meta">Enemuor SC et al. · African Journal of Microbiology Research · 2021 · [doi.org/10.5897/AJMR2021.9564](https://doi.org/10.5897/AJMR2021.9564)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/ntigoroku2025-delta-state-edible-oils-metals|Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria]]<span class="hmi-ref-meta">Atarhe Ntigoroku and P. O. Agbaire · Journal of Applied Sciences and Environmental Management · 2025 · [doi.org/10.4314/jasem.v29i10.32](https://doi.org/10.4314/jasem.v29i10.32)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/olafisoye2020-virgin-palm-oil-metals|Synthetic antioxidants and metallic elements as additives/contaminants in virgin palm oil]]<span class="hmi-ref-meta">Olafisoye OB et al. · Asian Journal of Agriculture and Biology · 2020 · [doi.org/10.35495/ajab.2019.06.260](https://doi.org/10.35495/ajab.2019.06.260)</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/samuel2020-palm-oil-metals-nigeria|Variations on the physiochemical, microbiological and selected heavy metals of different palm oil samples sourced from Galadima, Tarauni, Sabon-Gari, Yan-Kura of Kano State and samples from Kogi and Edo States of Nigeria]]<span class="hmi-ref-meta">Samuel E et al. · Chemical Sciences Journal · 2020 · [doi.org/10.37421/CSJ.2020.11.209](https://doi.org/10.37421/CSJ.2020.11.209)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/shaheen2024-bangladesh-soybean-palm-oil-metals\|Shaheen et al. 2024]]. *Measurement of Heavy Metals in Commercially Available Soybean and Palm Oils and Relevant Health Risk Assessment in Bangladesh*, Journal of Health and Pollution | 2024 | Peer-reviewed | BD As, Cd, Cr, Pb, tHg occurrence in retail and refinery palm oil composites (n=21 market composites plus 11 refinery samples) |
| 2 | [[sources/thompson-morrison2024-elaeis-guineensis-chemical-elements\|Thompson-Morrison et al. 2024]]. *Chemical elements in Elaeis guineensis materials and derived oil*, Scientific Reports | 2024 | Peer-reviewed | ID Pb, Cd, As, Hg, Cr, Ni, Al, Na, Zn in refined palm oil (n=10) and E. guineensis plant tissues |
| 3 | [[sources/chang2026-perilla-seed-oil-elemental-safety\|Chang et al. 2026]]. *Systematic Evaluation of the Nutritional Quality, Elemental Safety, and Preventive Effects of Perilla Seed Oil on Hyperlipidemia and Gut Microbiota Dysbiosis in High-Fat Diet-Fed Rats*, Nutrients | 2026 | Peer-reviewed | CN elemental panel (As, Cd, Pb, Zn, Na, Mg) in 16 commercial refined oils including palm oil (n=3) |
| 4 | [[sources/martin2026-palm-oil-review-nutritional-contaminants\|John Martin et al. 2026]]. *Palm oil: a review on nutritional composition, processing, contaminants, and sustainability frameworks in the food system*, Frontiers in Plant Science | 2026 | Peer-reviewed | Processing mechanism context: bleaching earth trace metal removal, refining contaminant mitigation |
| 5 | [[sources/ntigoroku2025-delta-state-edible-oils-metals\|Ntigoroku et al. 2025]]. *Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria*, Journal of Applied Sciences and Environmental Management | 2025 | Peer-reviewed | NG Cd, Cr, Pb, Cu occurrence in edible oils from Delta State markets |
| 6 | [[sources/enemuor2021-palm-oil-kogi-metals\|Enemuor et al. 2021]]. *Heavy metals and microbial contamination of palm oil produced and sold at some markets in Kogi East Area, Kogi State, Nigeria*, African Journal of Microbiology Research | 2021 | Peer-reviewed | NG Cd, Cr, Pb, tAs, Cu, Fe occurrence in 30 palm oils from three Kogi markets |
| 7 | [[sources/olafisoye2020-virgin-palm-oil-metals\|Olafisoye et al. 2020]]. *Synthetic antioxidants and metallic elements as additives/contaminants in virgin palm oil*, Asian Journal of Agriculture and Biology | 2020 | Peer-reviewed | NG Al, Co, Cd, Cr, Cu, Fe, Mn, Ni, Pb, Se, Sn, Zn in 15 virgin palm oil plantation samples |
| 8 | [[sources/samuel2020-palm-oil-metals-nigeria\|Samuel et al. 2020]]. *Variations on the physiochemical, microbiological and selected heavy metals of different palm oil samples sourced from Galadima, Tarauni, Sabon-Gari, Yan-Kura of Kano State and samples from Kogi and Edo States of Nigeria*, Chemical Sciences Journal | 2020 | Peer-reviewed | NG Cd, tAs, tHg, Pb in palm oil samples from Kano, Kogi, and Edo States |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| HMI-FILL-0010 | 2026-11-04 | major | Provisional scaffold replaced with full page; contamination profile populated from 3 primary measurement studies (Bangladesh, Indonesia, China); 3 new source pages added |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
