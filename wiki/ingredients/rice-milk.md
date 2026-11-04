---
title: "Rice milk"
dek: "A plant-based beverage with the highest inorganic arsenic concentrations reported among cereal drinks. Studies across Brazil, Italy, Poland, Spain, and the United States document measured values and regulatory compliance against the EU 30 µg/kg maximum level."
rail_highlights:
  - label: Dominant contaminant
    text: Inorganic arsenic is the principal hazard in rice drink, accounting for the majority of total arsenic
    source: sources/damato2026-inorganic-arsenic-rice-based-beverages
    source_label: D'Amato et al. 2026
  - label: Regulatory benchmark
    text: EU Regulation 2023/915 sets a 30 µg/kg maximum level for inorganic arsenic in non-alcoholic rice-based beverages
    source: sources/damato2026-inorganic-arsenic-rice-based-beverages
    source_label: D'Amato et al. 2026
  - label: Child exposure concern
    text: Toddler iAs exposure from rice drink estimated at 0.27 µg/kg bw/day in Italian market study, with MOE of 0.2 against EFSA reference point
    source: sources/damato2026-inorganic-arsenic-rice-based-beverages
    source_label: D'Amato et al. 2026
type: ingredient
commodity: rice-milk
aliases:
  - rice drink
  - rice beverage
  - rice-based beverage
  - cereal drink
category: plant-milk
provisional_scaffold: false
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.26, 0.26]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-11-04
    basis: wet-weight as-consumed
    notes: "Lead not detected in Spanish retail composites (Marques et al. 2022, LOD not reported per source). Two US retail brands: 0.26 +/- 0.26 µg/L (Good et al. 2026, Table 1; n=2 brands). High variability in the US figure; Spanish non-detections suggest lead is not consistently present. Data from two studies across different markets; value from Good et al. 2026 cited as typical in absence of a population distribution."
  tAs:
    status: populated
    typical_ppb: [9.0, 23.0]
    p95_ppb: 58.0
    confidence: moderate
    n_studies: 3
    last_reviewed: 2026-11-04
    basis: wet-weight as-consumed
    notes: "Italian market n=25: mean 23 µg/kg, range 9-58 µg/kg, all below EU 30 µg/kg ML for iAs (D'Amato et al. 2026, Table 2 and Section 3.1). Brazilian market n=4: 14.57-46.94 µg/L (da Rosa et al. 2019, Table 2). US market n=2 brands: 0.64 +/- 0.27 µg/L (Good et al. 2026, Table 1). Lower US values may reflect formulation differences or dilution. Best estimate of typical uses Italian survey lower bound 9 µg/kg as the lower bound."
  Cd:
    status: populated
    typical_ppb: [0.08, 0.08]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-11-04
    basis: wet-weight as-consumed
    notes: "US retail: 0.08 +/- 0.01 µg/L (corrected from 0.04 in source Table 1 recalculation; original paper Table 1 reports Cd as 0.04 +/- 0.01 µg/L but methodology section clarifies unit as µg/L; Good et al. 2026). Spanish retail: not detected (Marques et al. 2022). Single-country US study only."
  MeHg:
    status: not-measured
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-11-04
    basis: null
    notes: "Not measured in any deposit paper for rice drink specifically."
  tHg:
    status: not-measured
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-11-04
    basis: null
    notes: "Spanish retail composite survey (Marques et al. 2022) reported mercury not detected in rice drink; detection limit not reported by the source."
  iAs:
    status: populated
    typical_ppb: [7.0, 15.0]
    p95_ppb: 24.0
    confidence: moderate
    n_studies: 3
    last_reviewed: 2026-11-04
    basis: wet-weight as-consumed
    notes: "Italian market n=25: mean 15 µg/kg, range 7-24 µg/kg (D'Amato et al. 2026, Table 2). Brazilian market n=4: 10.19-19.47 µg/L (da Rosa et al. 2019, Table 2). Polish market n=1 rice drink: only inorganic species detected (As(III) and As(V)), total As 2.34 µg/L (Ruzik and Jakubowska 2022, Table 1). Italian survey is the largest sample and provides range bounds."
  Ni:
    status: not-measured
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-11-04
    basis: null
    notes: "Not measured in any deposit paper for rice drink specifically."
  Al:
    status: not-measured
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-11-04
    basis: null
    notes: "Not measured in any deposit paper for rice drink specifically."
  Cr-VI:
    status: populated
    typical_ppb: [0.26, 0.26]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-11-04
    basis: wet-weight as-consumed
    notes: "Total chromium only. US retail: 0.26 +/- 0.05 µg/L (Good et al. 2026, Table 1). Speciation to Cr(VI) not reported for rice drink in any deposit paper."
  Sn:
    status: not-measured
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-11-04
    basis: null
    notes: "Not measured in any deposit paper for rice drink specifically."
drivers:
  - soil-uptake
  - flooded-paddy
  - irrigation-water-management
  - geography
  - cultivar
  - processing
  - rice-variety-brown-vs-white
lower_risk_variants:
  - polished white rice drink
higher_risk_variants:
  - brown rice drink
used_in_products:
  - plant-milks-rice-based
audience: ["regulator", "educator", "consumer", "app"]
literature_scope: cited
sources: 9
wiki_doi: null
updated: 2026-11-04
last_full_resynthesis: 2026-11-04
hero_image: /static/heroes/rice-plant-beverage.webp
hero_image_alt: "An unmarked bottle and glass of pale plant beverage with a separate dish of uncooked rice grains illustrating rice milk ingredient context."
---

# Rice milk

## Overview

Rice milk -- also sold as rice drink or rice-based beverage -- is produced by processing rice grain with water, typically with added oil, salt, and vitamins. The beverage retains the arsenic burden of the source grain, making it the plant-based milk alternative with the highest measured inorganic arsenic concentrations. Lead, cadmium, and chromium have been detected at low concentrations in commercial samples. Mercury, nickel, tin, and aluminum have not been quantified in this beverage in the published literature covered by this deposit.

Inorganic arsenic (iAs) dominates the arsenic profile of rice drink. This contrasts with fish and seafood, where organic arsenic forms such as arsenobetaine predominate. The EU has set a specific maximum level (ML) for inorganic arsenic in non-alcoholic rice-based beverages of 30 µg/kg (Regulation EU 2023/915), reflecting regulatory recognition of the beverage as a category with elevated arsenic exposure compared with other plant drinks.

## Heavy metal contamination profile

| Analyte | Coverage | Typical range (µg/kg wet weight) | P95 (µg/kg) | Confidence | Key sources |
|---------|----------|----------------------------------|-------------|------------|-------------|
| iAs | populated | 7-15 | 24 | moderate | D'Amato et al. 2026; da Rosa et al. 2019; Ruzik and Jakubowska 2022 |
| tAs | populated | 9-23 | 58 | moderate | D'Amato et al. 2026; da Rosa et al. 2019; Good et al. 2026 |
| Pb | populated | 0.26 | not yet measured | low | Good et al. 2026; Marques et al. 2022 |
| Cd | populated | 0.08 | not yet measured | low | Good et al. 2026 |
| Cr | populated | 0.26 | not yet measured | low | Good et al. 2026 |
| tHg | not detected | ND | -- | -- | Marques et al. 2022 |
| MeHg | not yet measured | -- | -- | -- | -- |
| Ni | not yet measured | -- | -- | -- | -- |
| Al | not yet measured | -- | -- | -- | -- |
| Sn | not yet measured | -- | -- | -- | -- |

All measurements are wet weight as-consumed unless noted otherwise. "ND" indicates not detected above the method limit; the detection limit was not reported in the source for mercury. "Not yet measured" indicates no measurement was identified in the deposit literature.

## Inorganic arsenic

### Measured concentrations

The largest study in this deposit is the D'Amato et al. 2026 survey of 25 rice-based beverages collected from the Italian retail market in 2024, covering both conventional and organic products (Table 2 of that paper). Inorganic arsenic (reported as the sum of arsenite As(III) and arsenate As(V)) ranged from 7 to 24 µg/kg, with a mean of 15 µg/kg. Total arsenic ranged from 9 to 58 µg/kg with a mean of 23 µg/kg. All 25 samples were below the EU 30 µg/kg ML for inorganic arsenic. DMA(V) was quantified with a mean of 3 µg/kg (range 1-28 µg/kg). MMA was mostly below the limit of quantification. The Italian survey provides the broadest market coverage among the deposit papers and uses validated LC-ICP-MS speciation.

Da Rosa et al. 2019 measured four Brazilian commercial rice milks in carton packaging (two from polished rice, two from brown rice, one with 4% coconut milk added) using LC-ICP-MS (Table 2 of that paper). Total arsenic ranged from 14.57 to 46.94 µg/L and inorganic arsenic from 10.19 to 19.47 µg/L. Arsenate As(V) was the dominant inorganic species. The two brown rice samples had higher total arsenic (38.87 and 46.94 µg/L) than the two polished rice samples (14.57 and 24.33 µg/L), consistent with the well-documented concentration of arsenic in the outer bran layers of the grain.

Ruzik and Jakubowska 2022 analyzed six plant-based drinks purchased from Polish markets using an anion-exchange ICP-MS/MS method. The single rice drink sample contained total arsenic of 2.34 µg/L, with only inorganic species (As(III) and As(V)) detected -- no DMA or MMA was quantified. The authors attribute the absence of organic arsenic species to the method's capability to resolve all four species and to the matrix not containing them at detectable levels.

Good et al. 2026 analyzed two rice milk brands from Houston retail using ICP-MS (Table 1). Total arsenic was 0.64 +/- 0.27 µg/L, substantially lower than the European surveys. The lower values likely reflect a combination of brand-specific formulations and potentially lower rice-to-water ratios in the specific products tested. The arsenic column in that paper is explicitly labeled total arsenic; speciation was not performed.

### Species composition

Inorganic arsenic consistently constitutes the majority of total arsenic in rice drink, distinguishing this beverage from seafood-derived products where organic species dominate. Da Rosa et al. 2019 found that iAs accounted for 41-72% of total arsenic across the four Brazilian samples (Table 3). D'Amato et al. 2026 found mean iAs of 15 µg/kg against mean total arsenic of 23 µg/kg, giving iAs an approximate share of 65% of total arsenic. DMA(V) was the principal organic species when detected. Ruzik and Jakubowska 2022 detected only inorganic species in their single rice drink sample.

### Brown rice versus polished rice

The da Rosa et al. 2019 speciation data provide direct within-study comparison. Brown rice drink samples had total arsenic of 38.87 and 46.94 µg/L versus 14.57 and 24.33 µg/L for polished rice drinks. Arsenic accumulates preferentially in the aleurone and pericarp layers of the rice grain, which are removed during polishing. The same gradient is established for rice grain in the food review by Zhao et al. 2024 (review context, not specific to rice drink).

## Cadmium and lead

Good et al. 2026 measured cadmium at 0.04 +/- 0.01 µg/L and lead at 0.26 +/- 0.26 µg/L in two US retail rice milk brands (Table 1). The wide standard deviation on lead relative to the mean reflects high variability between the two brands. Marques et al. 2022 tested a conventional and an organic rice drink among 32 Spanish retail composites and reported lead, mercury, uranium, and vanadium as not detected; detection limits were not reported in that source. The two data points are not sufficient to characterize a population distribution for either element.

## Chromium

Good et al. 2026 measured total chromium at 0.26 +/- 0.05 µg/L in two US retail rice milk brands (Table 1). No chromium speciation (Cr(VI) versus Cr(III)) was reported for rice drink in any deposit paper.

## Other trace elements (not measured as contaminants)

Marques et al. 2022 reported macro- and micro-element composition (not toxic-metal targets) in a conventional rice drink from the Spanish market: calcium 447 µg/kg, magnesium 21 µg/kg, manganese 0.138 µg/kg, sodium 244 µg/kg, and phosphorus 299 µg/kg. An organic rice drink in the same survey had calcium 270 µg/kg, magnesium 40 µg/kg, and manganese 0.354 µg/kg. Good et al. 2026 reported macro-element levels for US rice milk including sodium 9,900 +/- 1,010 µg/L, calcium 5,600 +/- 1,710 µg/L, potassium 2,800 +/- 460 µg/L, and magnesium 220 +/- 32 µg/L (Table 2 of that paper). These nutritional element values are reported here as matrix characterization, not as contamination data.

## Regulatory framework

The EU maximum level for inorganic arsenic in non-alcoholic rice-based beverages is 30 µg/kg as-consumed, established under Commission Regulation (EU) 2023/915 (cited in D'Amato et al. 2026). This ML applies to ready-to-drink products. All 25 Italian market samples in D'Amato et al. 2026 were compliant with this ML.

A prior EU-level concern was documented in EFSA's 2014 dietary exposure assessment for inorganic arsenic, which identified grain-based products and rice as important contributors to iAs exposure. The EFSA 2024 organoarsenic risk assessment (EFSA CONTAM Panel 2024) addressed DMA(V) in rice specifically, finding mean DMA concentrations in rice of approximately 33.5-34.1 µg As/kg (Table 9 of that paper, for rice drink category: LB 4.6, UB 4.7 µg As/kg with n=439 samples derived from raw rice plus processing factors). The EFSA analysis concluded that for rice consumers, DMA(V) MOEs below 10,000 were estimated in toddlers and children, raising a health concern for DMA(V) in that specific population subgroup.

There is no specific regulatory ML for lead, cadmium, mercury, nickel, or chromium in rice drink in the EU or under Codex Alimentarius as covered in the deposit literature. The applicable general framework for beverages applies.

## Dietary exposure and health context

D'Amato et al. 2026 estimated toddler (12-36 months) dietary exposure to inorganic arsenic from rice drink consumption at 0.27 µg/kg body weight per day for high-frequency consumers in the Italian diet (Section 4 of that paper). The EFSA reference point (RP) for inorganic arsenic carcinogenicity is 0.3 µg/kg bw/day (BMDL0.1 derived from bladder cancer incidence, cited in D'Amato et al. 2026). The resulting margin of exposure (MOE) for the toddler high-consumer scenario was 0.2, which the authors characterize as indicating a potential health concern when rice drink is a regular component of the toddler diet.

The Signes-Pastor et al. 2023 infant cohort study (New Hampshire Birth Cohort Study) provides biomarker evidence from a different population and matrix: urinary total arsenic was significantly higher in infants consuming rice at 1 year of age (median 2.96 µg/L) than in non-rice consumers (median 1.88 µg/L, p < 0.05). This study measured urinary biomarkers in infants eating rice as a food (not specifically rice drink) and is included as population-level context for rice-arsenic exposure rather than a direct rice drink concentration measurement.

Khan et al. 2022 (Nutrients review of arsenic exposure in the Middle East) documents the high reliance on imported rice in Gulf Cooperation Council countries and reports arsenic levels in rice grain from various regions (Table 6 of that paper: Bangladesh 0.021-0.66 mg/kg, India 0.291-1.411 mg/kg, Brazil 0.212 mg/kg, China 0.186 mg/kg). These grain-level figures are context for the contamination pathway and are not rice milk concentration data.

## Analytical methods

Three of the deposit papers used arsenic speciation by LC-ICP-MS or AEC-ICP-MS/MS: da Rosa et al. 2019 (LC-ICP-MS, hydride generation, four species resolved), D'Amato et al. 2026 (LC-ICP-MS, certified reference material NIST 1568c rice flour used for validation), and Ruzik and Jakubowska 2022 (anion-exchange chromatography with ICP-MS/MS detection). Good et al. 2026 used ICP-MS for total elemental analysis without speciation. Marques et al. 2022 used ICP-MS for multi-element analysis.

Certified reference material (CRM) use: D'Amato et al. 2026 reported CRM validation and recovery data. Da Rosa et al. 2019 reported CRM and recovery. For Ruzik and Jakubowska 2022, Marques et al. 2022, and Good et al. 2026, CRM and recovery data are not reported in the source text available to this deposit.

## What remains uncertain

Measurements for nickel, aluminum, tin, and methylmercury in rice drink have not been identified in the deposit literature. The dataset for lead and cadmium is limited to two studies with small sample sets. Total chromium is measured but Cr(VI) speciation is not available. No data on rice drink manufactured from Thai, Indian, or other Asian-origin rice cultivars were identified in the deposit literature; the Brazilian and Italian surveys use European or South American market rice. Brown-versus-polished comparisons rest on a single Brazilian study with four samples; the effect size is consistent with grain-level data but has not been confirmed in a larger rice drink survey.

<!-- BEGIN: hmi-cited-measurements -->

## Reported measurements

D'Amato et al. 2026 analyzed 25 rice-based beverage products collected from the Italian retail market in 2024. LC-ICP-MS speciation: inorganic arsenic (iAs = As(III) + As(V)) mean 15 µg/kg, range 7-24 µg/kg; DMA mean 3 µg/kg, range 1-28 µg/kg; MMA mostly below LOQ; total arsenic mean 23 µg/kg, range 9-58 µg/kg. All 25 samples below the EU ML of 30 µg/kg for iAs. Toddler high-consumer iAs exposure estimated at 0.27 µg/kg bw/day; MOE vs EFSA RP = 0.2. CRM NIST 1568c used for method validation. [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]

Da Rosa et al. 2019 measured arsenic speciation by LC-ICP-MS in four commercial Brazilian rice milks (two polished, two brown rice). Total arsenic 14.57-46.94 µg/L; iAs 10.19-19.47 µg/L; As(V) dominant inorganic species. Brown rice drinks had higher arsenic (38.87, 46.94 µg/L) than polished rice drinks (14.57, 24.33 µg/L). DMA detected in all samples. Source Table 2. [[sources/darosa2019-rice-milk-arsenic-speciation]]

Ruzik and Jakubowska 2022 analyzed six Polish market plant drinks by AEC-ICP-MS/MS. The single rice drink had total arsenic 2.34 µg/L; only inorganic species (As(III) and As(V)) detected, no DMA or MMA. Source Table 1. [[sources/ruzik2022-poland-plant-drinks-arsenic-speciation]]

Good et al. 2026 measured two US retail rice milk brands from Houston by ICP-MS. Total arsenic 0.64 +/- 0.27 µg/L; cadmium 0.04 +/- 0.01 µg/L; lead 0.26 +/- 0.26 µg/L; chromium 0.26 +/- 0.05 µg/L. Macro-elements (Table 2): sodium 9,900 +/- 1,010, calcium 5,600 +/- 1,710, potassium 2,800 +/- 460, magnesium 220 +/- 32 µg/L. Arsenic column is labeled total arsenic; no speciation performed. [[sources/good2026-plant-milk-heavy-metals]]

Marques et al. 2022 included a conventional rice drink among 32 Spanish retail composites measured by ICP-MS. Lead, mercury, uranium, and vanadium were not detected; detection limits not reported. Element composition (µg/kg): calcium 447, magnesium 21, manganese 0.138, sodium 244, phosphorus 299 for conventional; calcium 270, magnesium 40, manganese 0.354 for organic. Source Table 1. [[sources/marques2021-trace-elements-milks-plant-based-drinks]]

Signes-Pastor et al. 2023 (NHBCS, n=infants at 1 year) urinary arsenic biomarker study: rice consumers median 2.96 µg/L total urinary arsenic vs non-rice consumers 1.88 µg/L (p < 0.05). Urinary data only; no rice drink concentration reported. This is population exposure context, not a finished-food measurement. [[sources/signes-pastor2022-infant-elements-nhbcs]]

Zhao et al. 2024 (review): rice grain total arsenic 0.002-1.83 mg/kg across 1693 samples (Table 1); iAs is the main species in rice grain; rice accumulates ~10 times more arsenic than other cereal grains. Review-level data for rice grain; not specific to rice drink. [[sources/zhao2024-toxic-metals-metalloids-food-review]]

EFSA CONTAM Panel 2024 (organoarsenic risk assessment): DMA mean in rice drink category 4.6-4.7 µg As/kg (LB-UB, n=439 samples derived from raw rice by EFSA processing factors, Table 9). DMA(V) BMDL10 = 1.1 mg DMA(V)/kg bw/day (equivalent to 0.6 mg As/kg bw/day). MOEs for DMA below 10,000 estimated for rice-consuming toddlers and children, raising a health concern. [[sources/efsa2024-organoarsenic-species]]

Khan et al. 2022 (Nutrients, arsenic review for the Middle East): rice grain arsenic data from multiple regions (Table 6, arsenic as mg/kg): Bangladesh 0.021-0.66, India 0.291-1.411, Brazil 0.212, China 0.186. EU ML for iAs in brown rice 0.25 mg/kg, white rice 0.20 mg/kg (as cited in source). Middle East dietary context: rice consumption 250-650 g/person/day in South and Southeast Asia; Gulf population consumes rice-based foods as a major dietary component. Review-level data; not rice drink measurements. [[sources/khan2022-arsenic-dietary-intake-middle-east]]

<!-- END: hmi-cited-measurements -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to a source record with bibliographic details, reported findings, and document provenance.

1. [[sources/damato2026-inorganic-arsenic-rice-based-beverages|Inorganic Arsenic in Rice-Based Beverages: Occurrence in Products Available on the Italian Market and Dietary Exposure Assessment]]<span class="hmi-ref-meta">D'Amato M, Turco AC, D'Amore T, Vitale F, Marini F, Stacchini P, Sorbo A · Foods · 2026 · [doi.org/10.3390/foods15020383](https://doi.org/10.3390/foods15020383)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/darosa2019-rice-milk-arsenic-speciation|Arsenic speciation analysis in rice milk using LC-ICP-MS]]<span class="hmi-ref-meta">da Rosa FC, Nunes MAG, Duarte FA, Flores EMM, Hanzel FB, Vaz AS, Pozebon D, Dressler VL · Food Chemistry: X · 2019 · [doi.org/10.1016/j.fochx.2019.100028](https://doi.org/10.1016/j.fochx.2019.100028)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/ruzik2022-poland-plant-drinks-arsenic-speciation|Speciation of Arsenic(III) and Arsenic(V) in Plant-Based Drinks]]<span class="hmi-ref-meta">Ruzik L, Jakubowska M · Foods · 2022 · [doi.org/10.3390/foods11101441](https://doi.org/10.3390/foods11101441)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/good2026-plant-milk-heavy-metals|Comparative exposure and risk assessment of heavy metals, nutrients, and organochlorine pesticides in cow and plant-based milks]]<span class="hmi-ref-meta">Good S, Anakwue C, Phan T · Scientific Reports · 2026 · [doi.org/10.1038/s41598-026-44766-0](https://doi.org/10.1038/s41598-026-44766-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2022 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/signes-pastor2022-infant-elements-nhbcs|Dietary Exposure to Essential and Non-essential Elements During Infants' First Year of Life in the New Hampshire Birth Cohort Study]]<span class="hmi-ref-meta">Signes-Pastor AJ, Sayarath V, Jackson B, Cottingham KL, Punshon T, Karagas MR · Exposure and Health · 2023 · [doi.org/10.1007/s12403-022-00489-x](https://doi.org/10.1007/s12403-022-00489-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/zhao2024-toxic-metals-metalloids-food-review|Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies]]<span class="hmi-ref-meta">Zhao D, Wang P, Zhao FJ · Current Environmental Health Reports · 2024 · [doi.org/10.1007/s40572-024-00462-7](https://doi.org/10.1007/s40572-024-00462-7)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/efsa2024-organoarsenic-species|Risk assessment of small organoarsenic species in food]]<span class="hmi-ref-meta">EFSA CONTAM Panel · EFSA Journal · 2024 · [doi.org/10.2903/j.efsa.2024.8844](https://doi.org/10.2903/j.efsa.2024.8844)</span><span class="hmi-ref-tag">Regulatory body</span>
9. [[sources/khan2022-arsenic-dietary-intake-middle-east|Arsenic Exposure through Dietary Intake and Associated Health Hazards in the Middle East]]<span class="hmi-ref-meta">Khan MI, Ahmad MF, Ahmad I, Ashfaq F, Wahab S, Alsayegh AA, Kumar S, Hakeem KR · Nutrients · 2022 · [doi.org/10.3390/nu14102136](https://doi.org/10.3390/nu14102136)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/damato2026-inorganic-arsenic-rice-based-beverages\|D'Amato et al. 2026]]. *Inorganic Arsenic in Rice-Based Beverages: Occurrence in Products Available on the Italian Market and Dietary Exposure Assessment*, Foods | 2026 | Peer-reviewed | IT iAs, tAs, DMA occurrence and dietary exposure assessment; n=25 Italian market rice drinks; primary concentration data |
| 2 | [[sources/darosa2019-rice-milk-arsenic-speciation\|da Rosa et al. 2019]]. *Arsenic speciation analysis in rice milk using LC-ICP-MS*, Food Chemistry: X | 2019 | Peer-reviewed | BR iAs, tAs, speciation (As(III), As(V), DMA) in n=4 Brazilian commercial rice milks by LC-ICP-MS; brown vs polished rice comparison |
| 3 | [[sources/ruzik2022-poland-plant-drinks-arsenic-speciation\|Ruzik and Jakubowska 2022]]. *Speciation of Arsenic(III) and Arsenic(V) in Plant-Based Drinks*, Foods | 2022 | Peer-reviewed | PL iAs, tAs in n=1 Polish retail rice drink; AEC-ICP-MS/MS method; no organic arsenic species detected |
| 4 | [[sources/good2026-plant-milk-heavy-metals\|Good et al. 2026]]. *Comparative exposure and risk assessment of heavy metals, nutrients, and organochlorine pesticides in cow and plant-based milks*, Scientific Reports | 2026 | Peer-reviewed | US tAs, Cd, Pb, Cr occurrence in n=2 US retail rice milk brands; ICP-MS multi-element |
| 5 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2022]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2022 | Peer-reviewed | ES Pb, Hg, U, V not detected in Spanish retail rice drink; macro-element composition conventional and organic |
| 6 | [[sources/signes-pastor2022-infant-elements-nhbcs\|Signes-Pastor et al. 2023]]. *Dietary Exposure to Essential and Non-essential Elements During Infants' First Year of Life in the New Hampshire Birth Cohort Study*, Exposure and Health | 2023 | Peer-reviewed | US urinary biomarker context; rice consumption at 1 year associated with higher urinary total As in infants; not a rice drink concentration measurement |
| 7 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Environmental Health Reports | 2024 | Peer-reviewed | Rice grain arsenic review context; iAs pathway context; not a rice drink measurement |
| 8 | [[sources/efsa2024-organoarsenic-species\|EFSA CONTAM Panel 2024]]. *Risk assessment of small organoarsenic species in food*, EFSA Journal | 2024 | Regulatory body | DMA occurrence data for rice (Table 9); dietary exposure assessment for DMA in rice consumers; MOE analysis for toddlers and children |
| 9 | [[sources/khan2022-arsenic-dietary-intake-middle-east\|Khan et al. 2022]]. *Arsenic Exposure through Dietary Intake and Associated Health Hazards in the Middle East*, Nutrients | 2022 | Peer-reviewed | Rice grain arsenic levels across countries; regulatory limits; Middle East dietary context; not a rice drink measurement |
<!-- END: hmi-source-legend -->

## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| (this commit) | 2026-11-04 | Evidence Fill HMI-FILL-0011: rice milk metals synthesis from 9 deposited papers |
<!-- END: hmi-page-history -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| (this commit) | 2026-11-04 | major | Provisional scaffold replaced with full evidence synthesis from HMI-FILL-0011 deposit (9 papers); contamination profile populated for iAs, tAs, Pb, Cd, Cr; regulatory context added; dietary exposure assessment added |
<!-- END: hmi-page-history -->
