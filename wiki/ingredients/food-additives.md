---
hero_image: /static/heroes/food-additives.webp
hero_image_alt: "Small glass bowls of white crystals, white powder, red and yellow colouring powders and a clear liquid, with metal measuring spoons."
title: Food additives
type: ingredient
commodity: food-additives
label: Food additives
aliases: []
category: condiment
description: >-
  Lead, total arsenic, inorganic arsenic, cadmium and total mercury in food
  additives: monitoring results, studies, references by additive type and basis,
  EU specification limits, testing and controls.
dek: >-
  Lead, total arsenic, inorganic arsenic, cadmium and total mercury in food
  additives: monitoring results, studies, references by additive type and basis,
  EU specification limits, testing and controls.
contamination_profile:
  Pb:
    status: populated
    typical_ppb:
      - 0
      - 1800
    p95_ppb: 7400
    confidence: low
    n_studies: 1
    last_reviewed: "2026-11-04"
    basis: "dry weight, additive as sold"
    notes: >-
      Range of medians across 17 additives in Belgian market survey (n=109
      samples). Iron oxides (E 172) median 1800 ppb, max 7400 ppb. Most
      organic gums and acids below 100 ppb. Single survey, low confidence.
  tAs:
    status: populated
    typical_ppb:
      - 0
      - 380
    p95_ppb: 1600
    confidence: low
    n_studies: 1
    last_reviewed: "2026-11-04"
    basis: "dry weight, additive as sold"
    notes: >-
      Carrageenan (E 407) median 380 ppb, max 1600 ppb. Calcium carbonate
      (E 170) median 280 ppb. Most organic additives below 200 ppb. Single
      survey, low confidence.
  Cd:
    status: populated
    typical_ppb:
      - 0
      - 19
    p95_ppb: 87
    confidence: low
    n_studies: 1
    last_reviewed: "2026-11-04"
    basis: "dry weight, additive as sold"
    notes: >-
      Mostly below LOQ (3-10 ppb). Highest in carob bean gum (E 410) median
      19 ppb, max 87 ppb; carrageenan (E 407) median 9 ppb. Single survey,
      low confidence.
  MeHg:
    status: pending
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  tHg:
    status: populated
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: "2026-11-04"
    basis: "dry weight, additive as sold"
    notes: >-
      Mercury not detected above LOQ (1-5 ppb) in 109 Belgian market samples
      (all 17 additives) or in approximately 55 E 472 series samples reviewed
      by EFSA. Measurements are non-detects; LOQ varies by additive and
      method. Quantified concentration not established.
  iAs:
    status: populated
    typical_ppb:
      - 0
      - 56
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: "2026-11-04"
    basis: "dry weight, additive as sold"
    notes: >-
      Speciation data limited to carrageenan (E 407): median 56 ppb. All
      other 16 additives tested below iAs LOQ. Single survey, single
      additive with detectable iAs, low confidence.
  Ni:
    status: pending
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Al:
    status: pending
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Cr-VI:
    status: pending
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Sn:
    status: pending
    typical_ppb:
      - null
      - null
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
literature_scope: limited
sources: 6
updated: "2026-11-04"
evidence_scope: populated
audience: [regulator, brand-qa, food-safety, procurement]
quick_read:
  summary: >-
    Lead and total arsenic in food additives vary by additive type, with the highest lead in iron oxides and mineral calcium salts and inorganic arsenic found in carrageenan.
  points:
    - label: Metals of concern
      text: "lead and total arsenic are detected across most additive classes; inorganic arsenic is specific to algal-derived hydrocolloids; cadmium is low in most additives; mercury is not detected"
    - label: Main drivers
      text: "additive raw material source governs contamination: geological deposits drive lead in mineral additives; marine algae drive arsenic accumulation in carrageenan"
    - label: Practical framing
      text: "measured concentrations in 109 Belgian market samples were below EU specification limits; food additives are a minor source of total dietary metal exposure at current use levels"
---

# Food additives

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Lead and total arsenic in food additives vary by additive type, with the highest lead in iron oxides and mineral calcium salts and inorganic arsenic found in carrageenan.</p>
  <ul>
    <li><strong>Metals of concern:</strong> lead and total arsenic are detected across most additive classes; inorganic arsenic is specific to algal-derived hydrocolloids; cadmium is low in most additives; mercury is not detected</li>
    <li><strong>Main drivers:</strong> additive raw material source governs contamination: geological deposits drive lead in mineral additives; marine algae drive arsenic accumulation in carrageenan</li>
    <li><strong>Practical framing:</strong> measured concentrations in 109 Belgian market samples were below EU specification limits; food additives are a minor source of total dietary metal exposure at current use levels</li>
  </ul>
</div>

This page draws on evidence from [[sources/efsa2026-vegetable-carbon-e153-amendment|EFSA]], together with 1 peer-reviewed study. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Why food additives accumulate heavy metals

Food additives derive toxic element impurities from their raw material sources. The contamination pathway depends on the additive class.

Mineral additives, including calcium carbonate (E 170), calcium phosphate (E 341), calcium silicate (E 552), calcium sulfate (E 516), magnesium carbonate (E 504), magnesium oxide (E 530), and iron oxides and hydroxides (E 172), are manufactured from geological mineral deposits. Trace elements present in those deposits carry through to the finished additive. Lead, total arsenic, and cadmium are present at geological background concentrations in most mineral sources; industrial purification reduces but does not eliminate them entirely [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]].

Plant-derived hydrocolloids, including guar gum (E 412), carob bean gum (E 410), and cellulose (E 460), take up metals through root absorption from agricultural soils. Metal concentrations in the finished gum reflect soil chemistry at the production location, agricultural practices, and the degree of purification.

Marine-derived hydrocolloids, particularly carrageenan (E 407), acquire arsenic from the seawater and substrate in which the source macroalgae grow. Red algae that serve as carrageenan feedstocks, including Kappaphycus alvarezii, accumulate arsenic from marine environments. Inorganic arsenic has been identified in Kappaphycus in the range of 57 to 202 µg/kg [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]]. Carrageenan is the only common food additive among those tested where speciated inorganic arsenic reaches a level of analytical concern.

Synthetic and fermentation-derived additives such as lactic acid (E 270) and xanthan gum (E 415) contain minimal toxic elements because production processes do not introduce geological or biological metal sources and chemical purification is extensive.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates this commodity-analyte combination has been reviewed and no usable occurrence data were found. Confidence is low throughout because available data derive from a single Belgian market survey with four to eight samples per additive.

| Analyte | Coverage | Typical range (ppb) | P95 (ppb) | Confidence | Key source |
|---------|----------|----------------------|-----------|------------|------------|
| Lead | n=109 | 0 to 1800 | 7400 | low | [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]] |
| Total arsenic | n=109 | 0 to 380 | 1600 | low | [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]] |
| Inorganic arsenic | n=109 (speciated) | 0 to 56 | not estimated | low | [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]] |
| Cadmium | n=109 | 0 to 19 | 87 | low | [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]] |
| Total mercury | n=109 | non-detect | not estimated | low | [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]] |
| Nickel | n/a | data gap | data gap | n/a | n/a |
| Aluminum | n/a | data gap | data gap | n/a | n/a |
| Hexavalent chromium | n/a | data gap | data gap | n/a | n/a |
| Tin | n/a | data gap | data gap | n/a | n/a |

The typical range represents the range of median concentrations across the 17 additive classes tested. The category is heterogeneous; the range spans from non-detect values in synthetic organic acids to median values of 1800 ppb in mineral colorants. Additive-specific values are in the evidence section below.

## Ranges by source and additive type

A Belgian market survey measured lead, cadmium, total arsenic, inorganic arsenic, and mercury in 109 commercial samples representing 17 food additives [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]]. Sample counts per additive ranged from four to eight. Concentrations are reported as dry weight, additive as sold.

<!-- BEGIN: hmi-cited-measurements -->

| Study / location | Material and design | Metal species | Value (ppb, dry weight) | n | Interpretation |
|---|---|---|---|---|---|
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Iron oxides/hydroxides (E 172); 6 commercial samples; ICP-MS/MS | Lead | Median 1800 ppb, max 7400 ppb | 6 | Highest lead concentration among 17 additives tested; below EU specification limit of 10,000 ppb |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Calcium carbonate (E 170); 8 commercial samples; ICP-MS/MS | Lead | Median 270 ppb, max 1800 ppb | 8 | Mineral calcium salt; all samples below EU limit of 3000 ppb |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Magnesium oxide (E 530); 5 commercial samples; ICP-MS/MS | Lead | Median 210 ppb, max 1200 ppb | 5 | Below EU limit of 10,000 ppb |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Guar gum (E 412); 6 commercial samples; ICP-MS/MS | Lead | Median 96 ppb, max 730 ppb | 6 | Plant-derived gum; below EU limit of 2000 ppb |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Lactic acid (E 270); 5 commercial samples; ICP-MS/MS | Lead | Below LOQ (1 to 3 ppb) throughout | 5 | Synthetic organic acid; below detection limit |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Carrageenan (E 407); 6 commercial samples; ICP-MS/MS | Total arsenic | Median 380 ppb, max 1600 ppb | 6 | Highest total arsenic among 17 additives; below EU limit of 3000 ppb |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Carrageenan (E 407); 6 commercial samples; LC-ICP-MS | Inorganic arsenic | Median 56 ppb | 6 | Only additive with detectable inorganic arsenic; speciation not performed for other additives |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | Carob bean gum (E 410); 5 commercial samples; ICP-MS/MS | Cadmium | Median 19 ppb, max 87 ppb | 5 | Highest cadmium concentration among 17 additives; no EU specification limit for cadmium in E 410 |
| [[sources/vansnick2026-food-additives-toxic-elements-belgium\|1]], Belgium | 17 food additives; 109 commercial samples; DMA | Total mercury | Below LOQ (1 to 5 ppb) in all samples | 109 | Mercury not detected above LOQ in any of the 17 additives tested |
| [[sources/efsa2026-vegetable-carbon-e153-amendment\|3]], EU | Vegetable carbon (E 153); 10 EU market samples; ICP-MS | Lead | 210 ppb to 3200 ppb (below LOQ to max) | 10 | All below current EU specification limit of 10,000 ppb and proposed 10,000 ppb limit |
| [[sources/efsa2026-vegetable-carbon-e153-amendment\|3]], EU | Vegetable carbon (E 153); 10 EU market samples; ICP-MS | Total arsenic | Below LOQ to 2100 ppb | 10 | All below current EU limit of 10,000 ppb and proposed 5000 ppb limit |

<!-- END: hmi-cited-measurements -->

Iron oxides and calcium carbonate had the highest lead concentrations among the 17 additives measured in the Belgian survey. Most organic additives, including gums, acids, stabilizers, and potassium chloride, were below 100 ppb for lead. Carrageenan had the highest total arsenic and was the only additive with detectable inorganic arsenic. Cadmium was above the LOQ in carrageenan and carob bean gum; it was below the LOQ in 15 of 17 additives [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]].

For vegetable carbon (E 153), 10 commercial EU market samples showed lead from below the LOQ to 3200 ppb (maximum) and total arsenic from below the LOQ to 2100 ppb (maximum). These values were below both current and proposed revised EU specification limits [[sources/efsa2026-vegetable-carbon-e153-amendment|3]].

## Processing effects

Toxic element concentrations in food additives are determined primarily during the upstream manufacturing process, not by further processing steps in food production. Purification during manufacture is the main lever: acid washing, recrystallization, and activated carbon treatment are used in the production of mineral additives and hydrocolloids to reduce metal impurities. The degree of purification varies by manufacturer and by the geological source of raw materials.

The available studies do not report systematic data on how metal concentrations change across manufacturing lots or purification runs. The EU specification limits in Regulation 231/2012 function as the enforceable post-processing ceiling; individual additive lots may vary within those limits depending on the raw material source and purification conditions. The proposed revisions to E 153 and E 472 series limits are based on data showing that current manufacturing can achieve concentrations well below existing limits [[sources/efsa2026-vegetable-carbon-e153-amendment|3]] [[sources/efsa2025-e472-fatty-acid-esters-specifications|4]].

## Ingredient-derivative risk

Food additives are used at low concentrations relative to the finished food. Typical use levels for most additives range from fractions of a gram to a few grams per kilogram of finished product. The contribution of a food additive's metal content to the finished product's metal content depends on both the additive's metal concentration and its use rate.

A Belgian dietary exposure assessment estimated that food additives contribute less than 1% of total dietary lead exposure, less than 2% of cadmium, less than 5% of inorganic arsenic, and less than 0.5% of mercury for the general Belgian population and for high consumers [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]]. Iron oxides and hydroxides (E 172) contributed the most to lead via food additives; carrageenan contributed the most to inorganic arsenic.

Additives used at higher rates (such as calcium carbonates, phosphates, and silicates in confectionery and supplements, or gums in beverages) contribute proportionally more. Mineral-based additives used in dietary supplements at gram-per-day levels are a higher-exposure pathway than the same additives used at trace levels in processed foods.

## Mitigation options

**Sourcing and supplier qualification.** Lead and arsenic concentrations in mineral additives vary with the geological source of the raw material. Supplier qualification should include specification testing for lead, total arsenic, and cadmium at incoming material receipt, with preference for sources demonstrating consistently low concentrations. The range of EU specification limits provides a ceiling; actual market concentrations are typically well below these limits [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]].

**Specification tightening.** EFSA has evaluated whether current EU limits can be tightened for specific additives. For the E 472 series, proposed limits of 500 ppb lead and 100 ppb arsenic are achievable based on market data and represent a fourfold to tenfold reduction from current limits [[sources/efsa2025-e472-fatty-acid-esters-specifications|4]]. For vegetable carbon (E 153), tightening total arsenic from 10,000 to 5000 ppb has been proposed [[sources/efsa2026-vegetable-carbon-e153-amendment|3]].

**Additive selection.** Where functional equivalents exist, substituting a low-metal additive class (for example, synthetic organic acids over mineral carbonates for a specific application) reduces overall metal load from additives. This is application-specific and must account for the functional role of the additive.

**Testing.** ICP-MS/MS is the appropriate analytical method for lead, cadmium, and total arsenic in mineral additives. For carrageenan and other algal hydrocolloids, LC-ICP-MS speciation for inorganic arsenic is warranted given the documented inorganic arsenic presence in carrageenan. Mercury is best measured by direct mercury analysis (DMA); the Belgian survey found no detectable mercury in any additive tested [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]].

## Regulatory limits that apply

EU Commission Regulation (EC) No 231/2012 sets purity specifications, including maximum levels for lead, arsenic, and mercury, for each individual food additive authorized in the EU. Cadmium limits are absent for most additives in the current regulation. The limits differ by additive class. Selected limits from the available studies [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]] [[sources/efsa2025-e472-fatty-acid-esters-specifications|4]]:

Iron oxides and hydroxides (E 172): lead 10 mg/kg (10,000 ppb). Carrageenan (E 407): lead 5 mg/kg (5000 ppb), arsenic 3 mg/kg (3000 ppb), mercury 1 mg/kg (1000 ppb). Calcium carbonate (E 170): lead 3 mg/kg (3000 ppb), arsenic 3 mg/kg (3000 ppb), mercury 1 mg/kg (1000 ppb). Vegetable carbon (E 153): lead 10 mg/kg (10,000 ppb), arsenic 10 mg/kg (10,000 ppb), cadmium 1 mg/kg (1000 ppb), mercury 1 mg/kg (1000 ppb). Acetic, lactic, tartaric, and diacetyl tartaric acid esters of mono- and diglycerides (E 472a,b,d,e,f): lead 2 mg/kg (2000 ppb), arsenic 1 mg/kg (1000 ppb); no cadmium or mercury limits currently set.

EFSA has proposed tightening or setting new specification limits for several additives based on recent re-evaluation opinions. For vegetable carbon (E 153), EFSA proposed tightening total arsenic from 10 to 5 mg/kg (5000 ppb) [[sources/efsa2026-vegetable-carbon-e153-amendment|3]]. For the E 472 series, the European industry body proposed revised limits of lead 0.5 mg/kg (500 ppb), arsenic 0.1 mg/kg (100 ppb), cadmium 0.05 mg/kg (50 ppb), and mercury 0.05 mg/kg (50 ppb), which EFSA evaluated as achievable and appropriate [[sources/efsa2025-e472-fatty-acid-esters-specifications|4]].

EFSA uses health-based guidance values for toxic element risk characterization in its additive evaluations. For lead, the BMDL01 of 0.50 µg/kg body weight per day is used with no safe exposure threshold recognized. For inorganic arsenic, the BMDL0.5 of 0.3 µg/kg body weight per day for lung cancer is used with no safe threshold recognized. For cadmium, the tolerable weekly intake is 2.5 µg/kg body weight per week. For total mercury, the tolerable weekly intake is 4.0 µg/kg body weight per week [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]] [[sources/efsa2026-vegetable-carbon-e153-amendment|3]].

The Belgian dietary exposure assessment estimated that food additives contribute less than 1% of total dietary lead exposure, less than 2% of cadmium exposure, less than 5% of inorganic arsenic exposure, and less than 0.5% of mercury exposure for the general population and high consumers [[sources/vansnick2026-food-additives-toxic-elements-belgium|1]].

## What remains uncertain

Speciation data for arsenic are available only for carrageenan. The inorganic arsenic fraction in other arsenic-containing additives, including calcium carbonate and magnesium oxide, is not characterized in any available study.

Aluminum concentrations were measured in the Belgian survey using ICP-MS/MS in HMI mode, but study-wide per-additive aluminum medians were not fully tabulated in the published results. Nickel, hexavalent chromium, and tin were not measured in any of the available studies.

The Belgian survey covers 109 commercial samples, four to eight per additive, which limits confidence in upper-tail estimates for any individual additive class. Sampling dates are not reported. The geographic sourcing of raw materials within the Belgian market samples is not documented.

Concentration data reviewed by EFSA for the E 472a,b,d,e,f series [[sources/efsa2025-e472-fatty-acid-esters-specifications|4]] and for rebaudioside M [[sources/efsa2026-rebaudioside-m-enzymatic-safety|2]] came from industry and applicant submissions. Independent occurrence survey data for these additives are not available in the current literature.

<!-- BEGIN: source-legend -->
<!-- END: source-legend -->

## Sources

The following sources are routed to this ingredient page. Sources with direct occurrence evidence are listed above in the contamination profile and evidence sections.

- [[sources/vansnick2026-food-additives-toxic-elements-belgium|Vansnick et al. 2026]] (2026; peer-reviewed)
- [[sources/efsa2026-rebaudioside-m-enzymatic-safety|EFSA FAF Panel 2026, Rebaudioside M]] (2026; government report)
- [[sources/efsa2026-vegetable-carbon-e153-amendment|EFSA FAF Panel 2026, Vegetable carbon E 153]] (2026; government report)
- [[sources/efsa2025-e472-fatty-acid-esters-specifications|EFSA FAF Panel 2025, E 472a,b,d,e,f]] (2025; government report)
- [[sources/efsa2022-glycerol-e422-heavy-metals|EFSA FAF Panel 2022, Glycerol E 422]] (2022; government report)
- [[sources/efsa2022-polyglycerol-esters-e475-heavy-metals|EFSA FAF Panel 2022, Polyglycerol esters E 475]] (2022; government report)

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. Each title links to a source record with bibliographic details, reported findings, and document provenance.

1. [[sources/vansnick2026-food-additives-toxic-elements-belgium|Occurrence of and Dietary Exposure to Toxic Element Impurities in Food Additives: A Probabilistic Exposure Assessment for the Belgian Population]]<span class="hmi-ref-meta">Vansnick L, Vromman V, Leufgen K, Bott A, Baert K, De Backer G, Lachat C, Kolsteren P, Huybrechts I, Sioen I · Foods · 2026 · [doi.org/10.3390/foods15203734](https://doi.org/10.3390/foods15203734)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/efsa2026-rebaudioside-m-enzymatic-safety|Safety evaluation of the food additive rebaudioside M produced via enzymatic conversion of purified steviol glycosides leaf extracts]]<span class="hmi-ref-meta">EFSA Panel on Food Additives and Flavourings (FAF) · EFSA Journal · 2026 · [doi.org/10.2903/j.efsa.2026.10232](https://doi.org/10.2903/j.efsa.2026.10232)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/efsa2026-vegetable-carbon-e153-amendment|Scientific opinion on the amendment of the specifications for vegetable carbon (E 153) as a food additive]]<span class="hmi-ref-meta">EFSA Panel on Food Additives and Flavourings (FAF) · EFSA Journal · 2026 · [doi.org/10.2903/j.efsa.2026.9855](https://doi.org/10.2903/j.efsa.2026.9855)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/efsa2025-e472-fatty-acid-esters-specifications|Scientific opinion as regards the specifications of the food additives E 472a,b,d,e,f]]<span class="hmi-ref-meta">EFSA Panel on Food Additives and Flavourings (FAF) · EFSA Journal · 2025 · [doi.org/10.2903/j.efsa.2025.9602](https://doi.org/10.2903/j.efsa.2025.9602)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

| Date | Change |
|------|--------|
| 2026-11-04 | Evidence fill: 4 papers ingested (HMI-FILL-0005). Contamination profile populated for lead, total arsenic, inorganic arsenic, cadmium, and total mercury. Belgian market survey data added. EU specification limits documented. Provisional scaffold removed. |
| 2026-10-15 | Provisional scaffold created as navigation destination. |
<!-- END: hmi-page-history -->
