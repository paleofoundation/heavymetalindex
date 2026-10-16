---
title: "Cheese"
type: product-category
category: dairy-cheese
hmtc_category: 24
hmtc_category_name: "Dairy and Milk Products"
hmtc_row: 4
hmtc_subcategory_name: "Cheese"
hmtc_taxonomy_version: "2.1"
hmtc_taxonomy_version_date: "2026-06-08"
exposure_pathway: "Ingestion (oral)"
regulatory_jurisdiction: "FDA (Grade A PMO, 21 CFR), EU Reg. 2023/915, Codex"
panel_metals: [Pb, iAs, Hg, Cd, Cr, Ni, Sn, Al]
audience: [regulator, educator, brand-legal, brand-qa, retailer-compliance]
products_status: scaffold
splits_locked: false
literature_scope: cited
sources: 3
wiki_doi: null
updated: 2026-10-15
---

# Cheese

> **v2.1 Step Zero scaffold — Category 24 (Dairy and Milk Products), Row 4.** This row is defined in
> the taxonomy and its Step Zero lock (`docs/governance/category-24-step0-lock.md`) but carries
> **no candidate values** yet. It is a routing destination. Sources populate it as ingest proceeds,
> after which a synthesis pass fills the evidence sections.

## Literature scope

Reported measurements from source notes are below. The evidence sections that are still empty have not been synthesized into a population estimate. No certification limit is stated here.

<!-- BEGIN: hmi-cited-measurements -->

## Reported measurements

Erol and colleagues, three Turkish cheeses, n=10 each. Heavy metals in Table 5 are µg/kg. Nickel means (maximum): Aho 154.13 (276.40), Golot 1502.47 (3681.67), Telli 416.06 (664.88). Total arsenic means (maximum): Aho 3.54 (8.90), Golot 2.51 (3.53), Telli 4.71 (6.17). Cadmium means (maximum): Aho 2.08 (7.07), Golot 3.58 (10.66), Telli 3.28 (9.82). Total mercury was not detected in Aho or Golot. Telli mean 154.55, maximum 468.71, detected in 4 of 10 samples. Lead means (maximum): Aho 56.54 (108.25), Golot 241.87 (1788.75), Telli 48.08 (108.00). Total chromium means (maximum): Aho 67.90 (300.76), Golot 78.03 (341.95), Telli 85.43 (274.79). Chromium is not identified as hexavalent chromium. Arsenic is total arsenic. Mercury is total mercury. Aluminum is in mg/kg in Table 2: Aho mean 16.57, maximum 34.63; Golot mean 10.01, maximum 34.55; Telli mean 2.53, maximum 0.70, minimum 0.93. The Telli aluminum maximum is printed below the mean. This page repeats both and does not choose one. [[sources/erol2025-turkish-cheese-metals]]

Ibrahim and colleagues, cheese, mg/kg wet weight, means. Karish: lead 0.34 ± 0.01, cadmium 0.12 ± 0.01, copper 1.53 ± 0.14. Domiati: lead 0.55 ± 0.01, cadmium 0.18 ± 0.01, copper 1.69 ± 0.16. Ras: lead 0.61 ± 0.02, cadmium 0.25 ± 0.01, copper 2.71 ± 0.22. The note says the limit of detection is not stated in the available excerpt. Raw-milk means in the same note are not cheese and are not repeated here. Egyptian milk limits of 0.02 mg/kg lead and 0.05 mg/kg cadmium are the authors' comparators for milk. [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese]]

Arellano and colleagues, total arsenic. Cheese, n=14: mean 20.6 ± 12.3 ng/g, range below the detection limit to 142 ng/g. The detection limit is 10 ng/g. Commercial milk, infant formula, and powdered-milk rows in the same note are not cheese and are not repeated here. The Mercosur 20 ng/g figure the authors cite is stated for milk. [[sources/arellano2023-dairy-products-arsenic-argentina]]

<!-- END: hmi-cited-measurements -->

## Cheese and gut studies that did not use a cheese lot

Cheese is a fermented dairy food. The ripening microbiota belongs to the product. It is not the infant gut, a mouse cecum, or an occupational yogurt trial. The studies below match metals reported for cheese in those other models, including a hexavalent chromium gavage that is not total chromium in cheese.

[[sources/sitarik2020-fetal-postnatal-lead-gut-microbiota|Sitarik et al. 2020]] measured tooth lead and stool microbiota at 1 month and 6 months in 146 maternal-child pairs in the Detroit-area WHEALS cohort. In utero tooth lead was associated with fungal community composition at 1 month. Lead was not associated with overall bacterial community structure. Taxon-level bacterial shifts were higher Collinsella at 1 month, higher Bilophila at 6 months, and lower Bacteroides. The direction is lead exposure toward microbiota composition. Tooth lead is a biomarker, not a concentration in this product.

[[sources/eggers2023-prenatal-lead-exposure-gut-microbiome-childhood|Eggers et al. 2023]], per WikiBiome source summary, DOI 10.3389/fmicb.2023.1193919, followed 123 children in the Mexico City PROGRESS cohort. Maternal blood lead means were 33.6 µg/L in the second trimester and 34.9 µg/L in the third. Stool metagenomes at ages 9 to 11 showed lower Bacteroides caccae with lead exposure. Weighted quantile sum regression gave a negative overall mixture effect (beta = -0.17) in both trimesters. The direction is prenatal lead toward the childhood gut microbiota. The summary does not support a lead concentration in food.

[[sources/liu2023-cadmium-microbiota-metabolome-rats|Liu et al. 2023]], per WikiBiome source summary, DOI 10.3389/fvets.2023.1219729, exposed Sprague-Dawley rats to cadmium chloride for 30 days. The note states lower intestinal ZO-1, higher TNF-alpha and IL-6 in intestine and blood, and Muribaculaceae in blood that was absent in the unexposed group. The note does not print the dose or the number of rats. The direction is cadmium toward gut and blood microbiota and barrier markers.

[[sources/hoen2018-infant-arsenic-gut-microbiome|Hoen et al. 2018]] related urinary total arsenic at 6 weeks to stool microbiota in 204 infants in the New Hampshire Birth Cohort Study. Urinary total arsenic had median 0.4 µg/L and mean 0.63 µg/L. Feeding-stratified means were 0.5 µg/L in exclusively breastfed infants, 0.9 µg/L in mixed-fed infants, and 1.2 µg/L in formula-only infants. Overall composition was marginally associated with natural-log urinary arsenic after adjustment for feeding and urine specific gravity (pseudo-F 1.85, p = 0.05). The clearest association was in formula-fed males (n = 33, pseudo-F 2.30, p = 0.008). Formula-fed females (n = 23) did not show that association. The direction is an early-life arsenic biomarker toward infant gut microbiota. Urinary arsenic is not a concentration in this product.

[[sources/dahan2018-arsenic-alters-microbiome-larval-zebrafish|Dahan et al. 2018]], per WikiBiome source summary, DOI 10.3389/fmicb.2018.01323, exposed larval zebrafish to 10, 50, and 100 ppb arsenic in water for 20 days. Arsenic exposure explained 54.7 percent of the variance in overall bacterial composition. The class 1 integron relative copy number at the highest concentration was 9 times the control value. The note does not state whether the dissolved arsenic was inorganic or total, and it does not give the number of larvae. The direction is arsenic in water toward the larval microbiome. The model is not a human gut, and the summary does not support an arsenic concentration in food.

[[sources/giambo2021-toxic-metal-exposure-gut-microbiota-review|Giambo et al. 2021]], per WikiBiome source summary, DOI 10.3892/wasj.2021.90, screened 600 articles and included 97. For mercury, the note states that methylation and demethylation are a core process in methylmercury metabolism and that microbiota changes have been linked to neurodevelopmental effects in rat offspring. The note does not assign a new sample size to that mercury summary. The direction summarized is microbiota toward methylmercury metabolism, and exposure toward microbiota in the offspring studies. The review does not test this product.

[[sources/xiong2025-prenatal-trace-elements-infant-gut-microbiome|Xiong et al. 2025]], per WikiBiome source summary, DOI 10.1038/s41467-025-60508-8, followed 146 mother-infant pairs, with maternal hair trace elements measured in 119 mothers. Shannon diversity of the infant gut at 3 months correlated positively with selenium and negatively with copper. Bifidobacterium relative abundance increased under high aluminum and high manganese together, so the note does not separate aluminum from manganese. The note states that high copper and arsenic may enrich antibiotic resistance genes. Hair concentrations are not printed. The direction is prenatal trace-element biomarkers toward the infant gut. Hair is not a food sample.

[[sources/mu2023-seaweed-polysaccharide-chromium-gut-microbiome|Mu et al. 2023]] gavaged mice with potassium dichromate at 75 mg/kg for 29 days (n = 60 across three groups). Hexavalent chromium lowered Chao1 diversity from 170.75 ± 15.79 to 87.00 ± 9.55 (p = 0.00029) and Shannon diversity from 4.64 ± 0.68 to 2.64 ± 0.64 (p = 0.0055). Escherichia_Shigella rose from 10.71 percent to 57.75 percent. Seaweed polysaccharide at 200 mg/kg partly reversed the shift. The direction is hexavalent chromium toward gut microbiota. The dose is a gavage dose. It is not a total-chromium concentration in food.

[[sources/richardson2018-toxic-metals-rat-gut-microbiota|Richardson et al. 2018]], per WikiBiome source summary, DOI 10.1038/s41598-018-24931-w, gavaged Sprague-Dawley rats for 5 days with sodium arsenite, cadmium chloride, sodium dichromate, cobalt chloride, or nickel chloride, 5 rats per cohort. The note does not print the milligram doses. Observed OTUs and Shannon diversity were lower for arsenic, chromium, and nickel (p < 0.05). Differential genera numbered 37 for nickel, 17 for arsenic, 5 for cadmium, and 10 for chromium. Sodium dichromate is a hexavalent chromium salt, so the chromium arm is not a total-chromium result. The direction is short oral exposure toward the rat gut microbiota.

[[sources/yang2023-nickel-gut-microbiome-uric-acid|Yang et al. 2023]] compared 109 occupationally nickel-exposed workers with matched controls. Serum nickel in the exposed group was 5.70 ± 3.21 µg/L, serum uric acid was 355.95 ± 67.87 µmol/L, and uric-acid-lowering bacteria, including Lactobacillus and related taxa, were lower. The direction is occupational nickel toward gut microbiota and then toward a host metabolite. Serum nickel is not a concentration in this product.

[[sources/feng2022-pediococcus-gr1-heavy-metals-gut-microbiota-metabolome|Feng et al. 2022]], per WikiBiome source summary, DOI 10.1038/s41522-022-00326-8, randomized 152 occupationally exposed workers in Pakistan, 76 in each arm, to yogurt with Pediococcus acidilactici GR-1 or to conventional yogurt for 12 weeks. In the probiotic arm, blood copper fell 34.45 percent, from 1,246 ± 20.7 to 817 ± 145.1 µg/L (p < 0.0001), and fecal copper rose. The direction is a microbiota intervention toward copper body burden. The workers were occupationally exposed. The trial is not a test of copper in this product.

### Study table

| Study | Model | Metal and dose | Main finding | Limitation |
| --- | --- | --- | --- | --- |
| Sitarik et al. 2020 | Human infants; tooth lead and stool; n = 146 | Lead; tooth biomarker, not a food dose | Fungal composition at 1 month shifted; overall bacterial structure did not | Not this product |
| Eggers et al. 2023 | Human children, ages 9 to 11; n = 123 | Maternal blood lead; means 33.6 and 34.9 µg/L | Lower Bacteroides caccae; mixture beta = -0.17 | Per WikiBiome source summary; not this product |
| Liu et al. 2023 | Rats; cadmium chloride; 30 days | Cadmium; dose not printed in the source note | Lower intestinal ZO-1; Muribaculaceae appeared in blood | Per WikiBiome source summary; n and dose unstated |
| Hoen et al. 2018 | Human infants at 6 weeks; n = 204 | Urinary total arsenic; mean 0.63 µg/L | Composition associated with urinary arsenic; strongest in formula-fed males (n = 33) | Biomarker study; not a lot concentration |
| Dahan et al. 2018 | Larval zebrafish; water; 20 days | Arsenic; 10, 50, and 100 ppb; species not stated | 54.7 percent of composition variance; class 1 integron 9 times controls at the high dose | Per WikiBiome source summary; not a human gut and not this product |
| Giambo et al. 2021 | Review; 97 of 600 articles | Mercury; no new dose | Methylation and demethylation described as core to methylmercury metabolism; offspring microbiota changes noted | Per WikiBiome source summary; review, not this product |
| Xiong et al. 2025 | Mother-infant cohort; n = 146; hair n = 119 | Hair aluminum, copper, arsenic, manganese, selenium; concentrations not printed | Infant Shannon diversity fell with copper; Bifidobacterium rose with high aluminum and manganese together | Per WikiBiome source summary; hair is not food |
| Mu et al. 2023 | Mice; 29-day gavage; n = 60 | Hexavalent chromium as potassium dichromate; 75 mg/kg | Chao1 and Shannon fell; Escherichia_Shigella rose from 10.71 percent to 57.75 percent | Gavage dose; not total chromium in food |
| Richardson et al. 2018 | Rats; 5-day gavage; 5 per cohort | Arsenite, cadmium chloride, sodium dichromate, nickel chloride; doses not printed | Nickel changed 37 genera; hexavalent chromium changed 10; diversity fell for arsenic, chromium, and nickel | Per WikiBiome source summary; chromium arm is hexavalent |
| Yang et al. 2023 | Human workers; n = 109 | Serum nickel 5.70 ± 3.21 µg/L in the exposed group | Lower uric-acid-lowering bacteria; higher serum uric acid | Occupational exposure; not this product |
| Feng et al. 2022 | Human workers; yogurt; 12 weeks; n = 152 | Occupational copper; not a food concentration | Probiotic arm: blood copper fell 34.45 percent; fecal copper rose | Per WikiBiome source summary; occupational cohort |

### What remains uncertain

No study cited here fed cheese and then sequenced the gut. A plate count on a cheese is not a gut result. Dahan and colleagues did not name the arsenic species. Hexavalent chromium gavage is not total chromium in cheese. The mercury review does not speciate cheese mercury. Liu and colleagues do not print the cadmium dose.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to a source record with bibliographic details, reported findings, and document provenance.

1. [[sources/erol2025-turkish-cheese-metals|Safety and Nutritional Profile of Traditional Turkish Cheeses: A Comprehensive Study on Their Mineral Content, Heavy Metal Contamination, and Health Risks of Aho, Golot, and Telli]]<span class="hmi-ref-meta">Erol S and Ürkek B · Food Science & Nutrition · 2025 · [doi.org/10.1002/fsn3.70560](https://doi.org/10.1002/fsn3.70560)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Heavy metals in raw milk and Egyptian cheese types]]<span class="hmi-ref-meta">Ibrahim SA, El-Sohaimy SA, Abd El-Aziz M, and Shehata MG · Open Veterinary Journal · 2024 · [doi.org/10.5455/OVJ.2024.v14.i2.4](https://doi.org/10.5455/OVJ.2024.v14.i2.4)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/arellano2023-dairy-products-arsenic-argentina|Arsenic risk assessment through dairy products ingestion]]<span class="hmi-ref-meta">F.E. Arellano, A. Fernandez-Cirelli, S. Braeuer, W. Goessler, and A.L. Perez-Carrera · Arsenic in the Environment: Bridging Science to Practice for Sustainable Development · 2023 · [doi.org/10.1201/9781003317395-91](https://doi.org/10.1201/9781003317395-91)</span><span class="hmi-ref-tag">Conference</span>
4. [[sources/sitarik2020-fetal-postnatal-lead-gut-microbiota|Fetal and early postnatal lead exposure measured in teeth associates with infant gut microbiota]]<span class="hmi-ref-meta">Sitarik AR, Arora M, Austin C, Bielak LF, Eggers S, Johnson CC, et al. · Environment International · 2020 · [doi.org/10.1016/j.envint.2020.106062](https://doi.org/10.1016/j.envint.2020.106062)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/eggers2023-prenatal-lead-exposure-gut-microbiome-childhood|Prenatal lead exposure is negatively associated with the gut microbiome in childhood]]<span class="hmi-ref-meta">Eggers S, Midya V, Bixby M, Gennings C, Torres-Olascoaga LA, Walker RW, et al. · Frontiers in Microbiology · 2023 · [doi.org/10.3389/fmicb.2023.1193919](https://doi.org/10.3389/fmicb.2023.1193919)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/liu2023-cadmium-microbiota-metabolome-rats|Environmental cadmium exposure alters the internal microbiota and metabolome of Sprague-Dawley rats]]<span class="hmi-ref-meta">Liu S, Deng X, Li Z, Zhou W, Wang G, Zhan J, et al. · Frontiers in Veterinary Science · 2023 · [doi.org/10.3389/fvets.2023.1219729](https://doi.org/10.3389/fvets.2023.1219729)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/hoen2018-infant-arsenic-gut-microbiome|Sex-specific associations of infants' gut microbiome with arsenic exposure]]<span class="hmi-ref-meta">Anne G. Hoen, Juliette C. Madan, Zhigang Li, Modupe Coker, Sara N. Lundgren, Hilary G. Morrison, et al. · Scientific Reports · 2018 · [doi.org/10.1038/s41598-018-30581-9](https://doi.org/10.1038/s41598-018-30581-9)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/dahan2018-arsenic-alters-microbiome-larval-zebrafish|Exposure to arsenic alters the microbiome of larval zebrafish]]<span class="hmi-ref-meta">Dahan D, Jude BA, Lamendella R, Keesing F, and Perron GG · Frontiers in Microbiology · 2018 · [doi.org/10.3389/fmicb.2018.01323](https://doi.org/10.3389/fmicb.2018.01323)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/giambo2021-toxic-metal-exposure-gut-microbiota-review|Influence of toxic metal exposure on the gut microbiota]]<span class="hmi-ref-meta">Giambo F, Italia S, Teodoro M, Briguglio G, Furnari N, Catanoso R, et al. · World Academy of Sciences Journal · 2021 · [doi.org/10.3892/wasj.2021.90](https://doi.org/10.3892/wasj.2021.90)</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/xiong2025-prenatal-trace-elements-infant-gut-microbiome|Prenatal exposure to trace elements impacts mother-infant gut microbiome, metabolome and resistome during the first year of life]]<span class="hmi-ref-meta">Xiong S, Xie B, Yin N, Zhu H, Gao H, Xu X, et al. · Nature Communications · 2025 · [doi.org/10.1038/s41467-025-60508-8](https://doi.org/10.1038/s41467-025-60508-8)</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/mu2023-seaweed-polysaccharide-chromium-gut-microbiome|Seaweed polysaccharide relieves hexavalent chromium-induced gut microbial homeostasis]]<span class="hmi-ref-meta">Mu J, Guo Z, Wang X, Wang X, Fu Y, Li X, et al. · Frontiers in Microbiology · 2023 · [doi.org/10.3389/fmicb.2022.1100988](https://doi.org/10.3389/fmicb.2022.1100988)</span><span class="hmi-ref-tag">Peer-reviewed</span>
12. [[sources/richardson2018-toxic-metals-rat-gut-microbiota|Exposure to toxic metals triggers unique responses from the rat gut microbiota]]<span class="hmi-ref-meta">Richardson JB, Dancy BCR, Horton CL, Lee YS, Madejczyk MS, Xu Z, et al. · Scientific Reports · 2018 · [doi.org/10.1038/s41598-018-24931-w](https://doi.org/10.1038/s41598-018-24931-w)</span><span class="hmi-ref-tag">Peer-reviewed</span>
13. [[sources/yang2023-nickel-gut-microbiome-uric-acid|Nickel exposure induces gut microbiome disorder and serum uric acid elevation]]<span class="hmi-ref-meta">Jinfeng Yang, Pengya Feng, Zhenmin Ling, Aman Khan, Xing Wang, Yanli Chen, et al. · Environmental Pollution, Vol. 324, 121349 · 2023 · [doi.org/10.1016/j.envpol.2023.121349](https://doi.org/10.1016/j.envpol.2023.121349)</span><span class="hmi-ref-tag">Peer-reviewed</span>
14. [[sources/feng2022-pediococcus-gr1-heavy-metals-gut-microbiota-metabolome|Human supplementation with Pediococcus acidilactici GR-1 decreases heavy metal levels through modifying the gut microbiota and metabolome]]<span class="hmi-ref-meta">Feng P, Yang J, Zhao S, Ling Z, Han R, Wu Y, et al. · npj Biofilms and Microbiomes · 2022 · [doi.org/10.1038/s41522-022-00326-8](https://doi.org/10.1038/s41522-022-00326-8)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/erol2025-turkish-cheese-metals\|Erol et al. 2025]]. *Safety and Nutritional Profile of Traditional Turkish Cheeses: A Comprehensive Study on Their Mineral Content, Heavy Metal Contamination, and Health Risks of Aho, Golot, and Telli*, Food Science & Nutrition | 2025 | Peer-reviewed | TR Pb, tHg, Al, tAs, Cd, Ni, Cr occurrence in 10 samples each of three traditional Turkish cheeses (Aho, Golot, Telli) collected from local markets in Trabzon, Turkey... (n=30) |
| 2 | [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese\|Ibrahim et al. 2024]]. *Heavy metals in raw milk and Egyptian cheese types*, Open Veterinary Journal | 2024 | Peer-reviewed | EG Pb, Cd, tHg, tAs, Cu, Fe, Zn occurrence in 100 raw bovine milk samples and 100 Egyptian cheese samples (25 each Karish, Domiati, Ras) collected from Alexandria... (n=200) |
| 3 | [[sources/arellano2023-dairy-products-arsenic-argentina\|Arellano et al. 2023]]. *Arsenic risk assessment through dairy products ingestion*, Arsenic in the Environment: Bridging Science to Practice for Sustainable Development | 2023 | Conference proceedings | AR tAs occurrence in Raw bovine, caprine, and ovine milk from 37 farms in Cordoba and Buenos Aires provinces, plus market commercial... (n=157) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | minor | Narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 section added |
<!-- END: hmi-page-history -->
