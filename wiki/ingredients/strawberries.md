---
title: "Strawberries"
dek: "An edible berry sold fresh, frozen and in processed forms. The page covers metal occurrence, measurement bases, processing and uses in food formulations."
rail_highlights:
  - label: Exposure
    text: Cadmium detected in sampled strawberries
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: Strawberry nondetections do not establish zero metal concentrations
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: ingredient
commodity: strawberries
label: "Strawberries"
aliases: [strawberry, strawberry-pomace]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 30
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [2.1, 15]
    p95_ppb: 17.8
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: [{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"FB 0275\",\"Strawberry\",\"iAs\",\"EURO\",\"Raw\",\"dry_weight\",\"2010\",\"2010\"]","role":"context","food_id":"FB 0275","food_name":"Strawberry","metal_species":"iAs","basis":"dry_weight","food_state":"Raw","geography":"EURO","year_min":2010,"year_max":2010,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":5,"p10_ppb":21.4,"p90_ppb":66.32,"p95_ppb":75.36,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"},{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"FB 0275\",\"Strawberry\",\"iAs\",\"EURO\",\"Raw\",\"as_is\",\"2010\",\"2010\"]","role":"context","food_id":"FB 0275","food_name":"Strawberry","metal_species":"iAs","basis":"as_is","food_state":"Raw","geography":"EURO","year_min":2010,"year_max":2010,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":5,"p10_ppb":21.4,"p90_ppb":66.32,"p95_ppb":75.36,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"},{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"FB 0275\",\"Strawberry\",\"iAs\",\"PAHO\",\"\",\"as_is\",\"2014\",\"2014\"]","role":"context","food_id":"FB 0275","food_name":"Strawberry","metal_species":"iAs","basis":"as_is","food_state":"","geography":"PAHO","year_min":2014,"year_max":2014,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":1,"p10_ppb":4.56,"p90_ppb":4.56,"p95_ppb":4.56,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"},{"source_id":"who-gemsfood-heavy-metal-contaminants","evidence_path":"data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv","row_key":"[\"who-gemsfood-heavy-metal-contaminants\",\"FB 0275\",\"Strawberry\",\"iAs\",\"WPRO\",\"Raw\",\"as_is\",\"2022\",\"2022\"]","role":"context","food_id":"FB 0275","food_name":"Strawberry","metal_species":"iAs","basis":"as_is","food_state":"Raw","geography":"WPRO","year_min":2022,"year_max":2022,"period_scope":"record_collection_period","statistic_type":"source_lower_bound_summary","n":1,"p10_ppb":0,"p90_ppb":0,"p95_ppb":0,"censoring":"Recovered WHO lower-bound summary; zero does not establish absence; raw rows require reconciliation"}]
    evidence_note: "The FDA dataset does not measure this food/species pair. The former generic concentration is withdrawn; available evidence is retained by its actual source, matrix and basis."
  tAs:
    status: populated
    typical_ppb: [0, 5.7]
    p95_ppb: 6.0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 3
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 64]
    p95_ppb: 70.5
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [236.5, 1665]
    p95_ppb: 1668
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 32]
    p95_ppb: 56
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [0, 14.1]
    p95_ppb: 14.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 9
hero_image: /static/heroes/berries-grapes-raisins.webp
quick_read:
  summary: "Strawberry metal measurements depend on soil conditions, surface contamination and moisture state, and nondetections do not mean zero concentrations."
  points:
    - label: Metals of concern
      text: "[[metals/cadmium|cadmium]], lead, total arsenic, mercury, nickel and total chromium are among the reported metals."
    - label: Main drivers
      text: "soil bioavailability, root-to-fruit transfer and [[supply-chain/atmospheric-deposition|surface deposition]] influence contamination."
    - label: Practical framing
      text: "washing removes surface lead but not internal cadmium; assess dried powder separately through [[mitigation/testing-and-qc|testing]]."
hero_image_alt: "Blueberries, raspberries, strawberries, grapes and raisins illustrating strawberries ingredient context."
---

# Strawberries

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Strawberry metal measurements depend on soil conditions, surface contamination and moisture state, and nondetections do not mean zero concentrations.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/cadmium">cadmium</a>, lead, total arsenic, mercury, nickel and total chromium are among the reported metals.</li>
    <li><strong>Main drivers:</strong> soil bioavailability, root-to-fruit transfer and <a href="/supply-chain/atmospheric-deposition">surface deposition</a> influence contamination.</li>
    <li><strong>Practical framing:</strong> washing removes surface lead but not internal cadmium; assess dried powder separately through <a href="/mitigation/testing-and-qc">testing</a>.</li>
  </ul>
</div>

This page draws on evidence from [[sources/fsa2016-infant-food-formula-metals-survey|UK Food Standards Agency]] and [[sources/fda2022-tds-elements-fy2018-fy2020|FDA]], together with 6 peer-reviewed studies. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Strawberries (Fragaria x ananassa and related species) are a low-accumulation fruit for heavy metals under normal agricultural conditions. The aerial fruiting structure of the strawberry plant develops above the soil surface and receives metals primarily through translocation from root to above-ground tissues, rather than through direct soil contact. This distinguishes strawberries from root vegetables and tubers, which grow embedded in soil and accumulate metals much more efficiently. Cadmium (Cd) and lead (Pb) in soil solution are taken up by strawberry roots to a degree proportional to soil metal bioavailability and plant uptake efficiency; however, the translocation factor for both metals from root to berry is low, meaning only a small fraction of the metal absorbed at the root reaches the edible fruit. Pb in particular is largely immobilized at the root surface and in root tissue, with minimal transport to above-ground parts. A secondary contamination pathway specific to soft fruits like strawberries is surface deposition: dust, soil particles, and atmospheric Pb can deposit on the berry surface, particularly in areas with legacy soil Pb contamination from leaded fuel combustion or agricultural Pb arsenate applications. Washing before consumption removes a portion of surface contamination. The FDA TDS FY2018-FY2020 data for strawberries (n=27 composite samples) show Pb below detection in all 27 composites; Cd was detected in most samples with a median of 8.5 ppb and a maximum of 34 ppb; no Pb was detected [[sources/fda2022-tds-elements-fy2018-fy2020]]. The modest Cd values reflect strawberry cultivation in soils that may carry background Cd from agricultural inputs, while Pb non-detection is consistent with the low translocation and surface-bound character of Pb in this matrix.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0–10 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|2]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|3]], [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|4]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|5]] |
| Cd | n=4 | 2.1–15 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|3]] |
| iAs | Source context | Not quantified | — | — |
| tAs | n=3 | 0–5.7 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|3]] |
| tHg | n=2 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|2]] |
| Ni | n=3 | 0–64 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Al | n=1 | 236.5–1665 | low | — |
| Cr | n=3 | 0–32 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/reczajska2005-chromium-plant-foods-poland\|2]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|3]] |
| Sn | n=1 | 0–14.1 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| U | n=2 | 0 | low | — |

## Synthesis basis and censoring treatment

The earlier profile carried strawberry lead, total mercury, and chromium at [0, 0] with a p95 of 0. Those zeros were an artifact of the FDA Total Diet Study reporting the 27 strawberry samples below their reporting limits (lead below 4 ppb, total mercury below 1 ppb, chromium below 50 ppb) as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Each cell is now treated as left-censored at its reporting limit, with dry-weight sources converted to fresh weight using the strawberry edible fraction of 0.09.

Fresh-weight surveys show these metals are consistently detectable. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Lee et al. 2023]] reported strawberry lead at a mean of 6 ppb, [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]] fresh berries lead at 8 to 17 ppb with a P90 of 26 to 38 and mercury at a middle-bound mean of 0.4 to 2.1 ppb, [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]] Polish fresh strawberry lead at a mean of 9 ppb (max 27), and [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]] Romanian strawberry lead near 10 to 11 ppb. For chromium, [[sources/reczajska2005-chromium-plant-foods-poland|Reczajska et al. 2005]] measured total chromium directly in 42 Polish strawberries at a mean of 32 ppb, median 28, P90 56, and maximum 134 ppb fresh weight, corroborated by the Lee fruit chromium near 31 ppb. Elevated allotment-garden lead from [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Sembratowicz et al. 2010]] is carried as a tail; chromium values are total chromium, not Cr-VI.

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 86, "Strawberry, raw/frozen." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 86: Strawberry, raw/frozen | tAs | 27 | 16 | 3–8.3 | 3 |
| 86: Strawberry, raw/frozen | Cd | 27 | 27 | 1.8–34 | 1 |
| 86: Strawberry, raw/frozen | Cr | 27 | 0 | ND in all composites | 50 |
| 86: Strawberry, raw/frozen | Pb | 27 | 0 | ND in all composites | 4 |
| 86: Strawberry, raw/frozen | tHg | 27 | 0 | ND in all composites | 1 |
| 86: Strawberry, raw/frozen | Ni | 27 | 8 | 42–76 | 40 |
| 86: Strawberry, raw/frozen | U | 27 | 2 | 1.1–9.5 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The Cd content of strawberries varies with soil Cd loading in the production region and with soil pH, which governs Cd bioavailability. Strawberries grown on soils with elevated Cd from historical phosphate fertilizer applications in northern and western Europe show higher Cd than berries grown on lower-Cd soils in North America, southern Europe, or Australia. The FSA/Fera FS102048 survey provides UK market-basket data for strawberries; US market data are available from the FDA TDS FY2018-FY2020 dataset (Cd p50 of 8.5 ppb, max 34 ppb, n=27 composites) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Organic versus conventional production shows minimal difference for Cd (because Cd is soil-derived regardless of agricultural system) but may show modest Pb differences in areas with legacy surface contamination, as organic management may involve less soil disturbance and different irrigation practices. Variety-level differences in Cd accumulation within strawberry species exist but are secondary to soil and management factors in commercial production. Geographic source variation will be more precisely characterized as additional occurrence surveys from European and other international markets are ingested.

## Processing effects

Strawberries in retail commerce are sold fresh or frozen; in processed form they appear as purees, jams, freeze-dried powder, and flavoring ingredients. The key processing effect for metal content is the change in moisture state. Fresh strawberries contain approximately 90 percent water by weight. Freezing does not alter metal content. Producing strawberry puree from fresh or frozen berries does not remove metals; the puree retains the full metal load of the input fruit. Drying or freeze-drying concentrates metals in proportion to water removal: freeze-dried strawberry powder at approximately 5 percent moisture contains approximately eighteen times the metal concentration per gram as the fresh fruit on a wet-weight basis. Jam production involves cooking with added sugar, which dilutes the metal concentration relative to the input fruit fraction; the metal content of jam on a per-gram basis is lower than the input puree in proportion to the sugar dilution factor. Washing fresh strawberries before processing removes surface-deposited dust and Pb, but does not affect internally translocated Cd. Industrial wash steps are standard in processing lines.

## Ingredient-derivative risk

Strawberry puree and concentrate are used extensively in dairy products, beverages, baby food, and confectionery. In baby food formulations incorporating strawberry puree at meaningful inclusion levels, the Cd contribution from the berry fraction is the primary metal of concern from this ingredient, though at typical inclusion levels and the modest Cd values documented in the TDS data, the contribution is small relative to higher-risk ingredients. Freeze-dried strawberry powder used in snack coatings, cereal products, and supplement blends carries a substantially higher per-gram Cd load than fresh fruit due to moisture concentration and merits specific assessment when used at significant inclusion levels in products for children. Strawberry flavoring extracts used at very low inclusion levels do not contribute meaningful metal loads.

## Mitigation options

### Sourcing levers

Specifying strawberry origin from low-Cd-soil production regions reduces Cd in the finished ingredient. For processed strawberry products (puree, freeze-dried powder) used in products marketed to infants or young children, supplier COAs with ICP-MS Cd results provide the necessary lot-level verification. Given the relatively modest Cd values in US market data, sourcing from US growers rather than high-Cd European regions may be a relevant lever for manufacturers seeking to minimize Cd in sensitive products.

### Agronomic levers

Soil pH management (maintaining above 6.5) reduces Cd bioavailability to strawberry plants. Strawberries are typically grown on slightly acidic to neutral soils; liming programs where soil pH is low can reduce Cd uptake. Limiting phosphate fertilizer applications from high-Cd-rock sources is a recognized prevention strategy. _No quantified reduction magnitude data for strawberry Cd from agronomic interventions is available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Thorough washing of fresh strawberries before processing removes surface-bound Pb from atmospheric deposition. This is standard practice and has documented effectiveness for surface contamination but does not affect internally translocated Cd. For products sold as washed fresh strawberries, consumer washing provides a similar benefit.

### Formulation levers

For products targeting infants and young children that use strawberry as a flavoring ingredient, using strawberry extract or flavoring at low inclusion levels rather than puree at high inclusion levels reduces the absolute metal contribution from this ingredient. Diluting freeze-dried strawberry powder in multi-ingredient formulations proportionally reduces its metal contribution.

### Testing and QC levers

For freeze-dried strawberry powder used in products for young children, lot-level Cd testing by ICP-MS is warranted given the concentration effect of drying. For fresh or frozen strawberries in the food service supply chain, periodic surveillance testing is sufficient given the modest and consistent values in market-basket data.

### Packaging and storage levers

_No quantified data on packaging or storage effects on strawberry metal content in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), strawberries fall within the berries and small fruits category. The applicable Pb maximum level is 0.10 mg/kg (100 ppb) wet weight, and the Cd maximum level is 0.050 mg/kg (50 ppb) wet weight. The FDA does not publish a specific action level for Pb or Cd in strawberries; the general tolerance framework under 21 CFR applies. The Closer to Zero program (see [[regulations/fda-closer-to-zero]]) addresses Pb reduction in foods for babies and young children broadly, and strawberry purees used in infant and toddler food formulations fall within scope of the CTZ reduction goals even where no berry-specific numerical limit currently exists.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**iAs.** The FDA dataset does not measure this food/species pair. The former generic concentration is withdrawn; available evidence is retained by its actual source, matrix and basis.

WHO GEMS/Food retains the following distinct records. The ranges are source-scope lower-bound P10–P90 summaries; they are not a pooled typical value for this ingredient. Food-group records remain broader context. Differences in basis, period and geography are preserved. [[sources/who-gemsfood-heavy-metal-contaminants]]

| Food / state | Region | Years | Basis | Records | Source LB P10–P90 (ppb) |
| --- | --- | --- | --- | ---: | --- |
| Strawberry / Raw | EURO | 2010–2010 | dry_weight | 5 | 21.4–66.32 |
| Strawberry / Raw | EURO | 2010–2010 | as_is | 5 | 21.4–66.32 |
| Strawberry / not specified | PAHO | 2014–2014 | as_is | 1 | 4.56–4.56 |
| Strawberry / Raw | WPRO | 2022–2022 | as_is | 1 | 0–0 |

Recovered WHO summaries alone do not resolve incompatible basis labels or establish that zero-coded results were measured zeros.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea]]<span class="hmi-ref-meta">Lee J, Hwang I, Park YS, and Lee DY · Applied Biological Chemistry · 2023 · [doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment]]<span class="hmi-ref-meta">Mania M, Rebeniak M, Chabros E, Orshulyak O, and Postupolski J · Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) · 2021 · [doi.org/10.32394/rpzh.2021.0188](https://doi.org/10.32394/rpzh.2021.0188)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Concentration of cadmium and lead in vegetables and fruits]]<span class="hmi-ref-meta">Rusin M, Domagalska J, Rogala D, Razzaghi M, and Szymala I · Scientific Reports · 2021 · [doi.org/10.1038/s41598-021-91554-z](https://doi.org/10.1038/s41598-021-91554-z)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania]]<span class="hmi-ref-meta">Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. · Horticulturae · 2022 · [doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/reczajska2005-chromium-plant-foods-poland|Determination of Chromium Content of Food and Beverages of Plant Origin]]<span class="hmi-ref-meta">Reczajska W, Jedrzejczak R, and Szteke B · Polish Journal of Food and Nutrition Sciences · 2005</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits]]<span class="hmi-ref-meta">Sembratowicz I, Rusinek E, and Ognik K · Polish Journal of Environmental Studies · 2010</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/who-gemsfood-heavy-metal-contaminants|GEMS/Food Contaminants database heavy-metal exports]]<span class="hmi-ref-meta">World Health Organization · GEMS/Food Contamination Monitoring and Assessment Programme · 2026 · [extranet.who.int](https://extranet.who.int/gemsfood/?DisplayFormat=1)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | South Korean fresh strawberry samples measured for tAs, Cd, Cr, Ni, Pb, and Sb by ICP-MS |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 4 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Strawberry, raw/frozen (n=27); detectable concentrations for Cd, Ni, U, tAs |
| 6 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | Polish national monitoring Pb, Cd, tAs, and tHg means and P90 for fresh and frozen strawberries |
| 7 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 8 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | Lublin allotment-garden strawberry Pb and Cd levels showing soft-berry accumulation above EU limits |
| 9 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | Total Cr range, mean, median, and P90 in Polish strawberries (n=42) by ZETAAS |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 6 sources removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 6 sources added; narrative text revised |
| [10bb2e5ecb](https://github.com/paleofoundation/heavymetalindex/commit/10bb2e5ecb) | 2026-08-09 | correction | 7 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
<!-- END: hmi-page-history -->
