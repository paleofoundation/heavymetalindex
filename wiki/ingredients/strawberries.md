---
title: "Strawberries"
type: ingredient
commodity: strawberries
label: "Strawberries"
aliases: [strawberry, strawberry-pomace]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 11]
    p95_ppb: 32
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-23
    basis: fresh-strawberry-wet-weight
    speciation_note: total-Pb-only; FDA TDS strawberry cell fully censored (all 27 composites below the 4 µg/kg reporting limit), recovered from retail fresh-fruit occurrence literature; roadside allotment values (Sembratowicz 2010, 230-310 ppb) excluded from the central estimate as a non-retail upper tail
  Cd:
    status: populated
    typical_ppb: [2.1, 15]
    p95_ppb: 17.8
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [21.4, 66.3]
    p95_ppb: 75.4
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [0, 5.7]
    p95_ppb: 6.0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fresh-strawberry-wet-weight
    speciation_note: total-Hg-only; no MeHg measurement in corpus; upper anchor is a Polish fresh-berry-subgroup proxy, not strawberry-specific
  Ni:
    status: populated
    typical_ppb: [0, 64]
    p95_ppb: 70.5
    confidence: high
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
    typical_ppb: [6, 32]
    p95_ppb: 56
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: fresh-strawberry-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-23
sources: 9
---

# Strawberries

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 8/10 HMTc analytes, total n=24 | — |
| D2 Regional coverage | OK | 5 jurisdictions, top PL 57% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, iAs THIN, tAs POOLABLE, tHg THIN, Ni CONFIDENT, Al THIN, Cr THIN, Sn THIN, U THIN | iAs: needs 2 more study(ies); tHg: needs 1 more study(ies); Al: needs 2 more study(ies); Cr: needs 1 more study(ies); Sn: needs 2 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 3/10 populated cells declare a basis token | 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 30 claims checked, 30 supported; 6 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming strawberries: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; pairing 0 paired, 10 single, 0 unpaired | iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 1 more study(ies); Al: THIN, needs 2 more study(ies); Cr: THIN, needs 1 more study(ies); Sn: THIN, needs 2 more study(ies); U: THIN, needs 1 more study(ies); basis: 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Strawberries (Fragaria x ananassa and related species) are a low-accumulation fruit for heavy metals under normal agricultural conditions. The aerial fruiting structure of the strawberry plant develops above the soil surface and receives metals primarily through translocation from root to above-ground tissues, rather than through direct soil contact. This distinguishes strawberries from root vegetables and tubers, which grow embedded in soil and accumulate metals much more efficiently. Cadmium (Cd) and lead (Pb) in soil solution are taken up by strawberry roots to a degree proportional to soil metal bioavailability and plant uptake efficiency; however, the translocation factor for both metals from root to berry is low, meaning only a small fraction of the metal absorbed at the root reaches the edible fruit. Pb in particular is largely immobilized at the root surface and in root tissue, with minimal transport to above-ground parts. A secondary contamination pathway specific to soft fruits like strawberries is surface deposition: dust, soil particles, and atmospheric Pb can deposit on the berry surface, particularly in areas with legacy soil Pb contamination from leaded fuel combustion or agricultural Pb arsenate applications. Washing before consumption removes a portion of surface contamination. The FDA TDS FY2018-FY2020 data for strawberries (n=27 composite samples) show Pb below detection in all 27 composites; Cd was detected in most samples with a median of 8.5 ppb and a maximum of 34 ppb; no Pb was detected [[sources/fda2022-tds-elements-fy2018-fy2020]]. The modest Cd values reflect strawberry cultivation in soils that may carry background Cd from agricultural inputs, while Pb non-detection is consistent with the low translocation and surface-bound character of Pb in this matrix.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0–11 | medium | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|3]] |
| Cd | n=4 | 2.1–15 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|3]] |
| iAs | n=1 | 21.4–66.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=3 | 0–5.7 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|3]] |
| tHg | n=2 | 0–2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|2]] |
| Ni | n=3 | 0–64 | high | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Al | n=1 | 236.5–1665 | low | — |
| Cr | n=2 | 6–32 | low | [[sources/reczajska2005-chromium-plant-foods-poland\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|3]] |
| Sn | n=1 | 0–14.1 | low | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| U | n=2 | 0 | high | — |

## Synthesis basis and censoring treatment

The total mercury and chromium cells were resynthesized on 2026-06-11 on a fresh-strawberry wet-weight basis, the form in which the fruit enters the ingredient supply chain and the basis FDA Total Diet Study Food 86 ("Strawberry, raw/frozen") reports.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported total mercury and chromium at typical and 95th-percentile values of zero with high confidence. Those figures were an artifact of the FDA Total Diet Study composites for strawberry, in which every sample fell below the reporting limit and the reported zeros were pooled as literal zeros. For total mercury, FDA reported all 27 composites below the 1 µg/kg reporting limit; for chromium, all 27 below the 50 µg/kg reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). A fully censored cell does not establish that the analyte is absent; it establishes only that the analyte is below the reporting limit in this dataset. The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and recovers the upper distribution from primary fresh-fruit occurrence literature.

Total mercury is recovered at low confidence. No strawberry-specific quantitative mercury value exists in the corpus: the only strawberry-specific measurement is the fully censored FDA cell. The upper anchor is a Polish national-monitoring proxy ([[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]], total mercury by cold-vapor atomic absorption), which reports the fresh-berries-and-small-fruits subgroup — a group the source defines to include strawberries, raspberries, currants, blackberries, gooseberries, cranberries, blueberries, and grapes — at a mean of 0.4 to 2.1 µg/kg fresh weight (lower-to-upper-bound substitution) and a 90th percentile of 1 to 5 µg/kg fresh weight. Because this anchor is a berry-subgroup aggregate and not a strawberry-specific measurement, it is carried as an explicitly labeled proxy and caps confidence at low; the typical upper bound of 2 µg/kg is the subgroup mean upper bound and the published 5 µg/kg figure entered as the p95 anchor is the subgroup 90th percentile (no true 95th percentile is published). Mercury here is total mercury measured by cold-vapor AAS; no methylmercury speciation exists for this matrix, and methylmercury is never inferred from total mercury. Mania's authors note that mercury in fruit is treated as essentially inorganic for exposure modeling, consistent with EFSA's position that organic mercury contributes negligibly outside fish and seafood.

Chromium is recovered at low confidence and is reported as total chromium only; no strawberry hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. The distribution rests on a strawberry-specific Polish survey ([[sources/reczajska2005-chromium-plant-foods-poland|Reczajska et al. 2005]], total chromium by Zeeman electrothermal atomic absorption, n=42), in which strawberries were among the highest-chromium plant commodities measured, with a range of 6 to 134 µg/kg fresh weight, a mean of 32 µg/kg, a median of 28 µg/kg, and a 90th percentile of 56 µg/kg. Regional means within Poland varied roughly twofold, from 21 µg/kg in Lubelskie to 47 µg/kg in Kujawsko-Pomorskie, with the single highest lot of 134 µg/kg in Mazowieckie. The typical band of 6 to 32 µg/kg is anchored to the Reczajska range minimum and mean; the p95 anchor of 56 µg/kg is the Reczajska 90th percentile, with the species maximum of 134 µg/kg noted as the upper tail rather than folded into the headline percentile. The South Korean fresh-fruit survey ([[sources/lee2023-south-korea-fresh-fruits-seven-metals|Lee et al. 2023]]) corroborates the central tendency at the fruit-category level — total chromium was detected in 100 percent of 207 fruit samples at a fruit-wide mean of 30.7 µg/kg fresh weight, with apple highest at 56.7 µg/kg and persimmon lowest at 15.5 µg/kg — but does not report a strawberry-specific chromium mean, so it is carried as fruit-category corroboration rather than as a strawberry anchor. The fully censored FDA cell (all 27 composites below the 50 µg/kg reporting limit) is consistent with the Reczajska distribution, whose median of 28 µg/kg sits well below that reporting limit. A separate strawberry-pomace value of below 0.01 mg/kg total chromium appears in a by-product review ([[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Tsegay et al. 2025]]); it is a processing-fraction (pomace) measurement, not fresh fruit, and is not folded into the fresh-strawberry percentiles.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 86, "Strawberry, raw/frozen." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Strawberry, raw/frozen" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 1.8 | 2.06 | 8.5 | 15 | 17.8 | 34 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 64 | 70.5 | 76 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.77 | 9.5 | in profile |
| tAs | 27 | 0 | 0 | 3.3 | 5.74 | 6.01 | 8.3 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment]]<span class="hmi-ref-meta">Mania M, Rebeniak M, Chabros E, Orshulyak O, and Postupolski J · Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) · 2021 · [doi.org/10.32394/rpzh.2021.0188](https://doi.org/10.32394/rpzh.2021.0188)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/reczajska2005-chromium-plant-foods-poland|Determination of Chromium Content of Food and Beverages of Plant Origin]]<span class="hmi-ref-meta">Reczajska W, Jedrzejczak R, and Szteke B · Polish Journal of Food and Nutrition Sciences · 2005</span><span class="hmi-ref-tag">Review</span>
5. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea]]<span class="hmi-ref-meta">Lee J, Hwang I, Park YS, and Lee DY · Applied Biological Chemistry · 2023 · [doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Toxicological qualities and detoxification trends of fruit by-products for valorization: A review]]<span class="hmi-ref-meta">Tsegay ZT, Smaoui S, and Varzakas T · Open Life Sciences 20:20251105 · 2025 · [doi.org/10.1515/biol-2025-1105](https://doi.org/10.1515/biol-2025-1105)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

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

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | Contamination-profile values revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 5 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
