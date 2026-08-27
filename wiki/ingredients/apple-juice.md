---
title: "Apple juice"
type: ingredient
commodity: apple-juice
label: "Apple juice"
aliases: [apple juice]
category: juice-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.3, 2.5]
    p95_ppb: 2.6
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 1.6]
    p95_ppb: 2.6
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-08-09
  iAs:
    status: populated
    typical_ppb: [0, 3.6]
    p95_ppb: 5.5
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [1.4, 4]
    p95_ppb: 4.2
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 16]
    p95_ppb: 18
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 2560]
    p95_ppb: 2875
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 19]
    p95_ppb: 45
    confidence: low
    n_studies: 5
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [0, 8.9]
    p95_ppb: 9.0
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
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
used_in_products: [fruit-juice-not-canned]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 19
---

# Apple juice

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Apple juice derives its metal content primarily from the apples used in production, with processing steps determining how much of the fruit's metal load reaches the final juice. Lead and arsenic in apples reflect legacy orchard soil contamination from historical lead arsenate pesticide use, combined with ongoing atmospheric deposition on fruit surfaces; when multiple apples are juiced together, metals from each fruit fraction concentrate into the juice volume. The FDA's FY2005-FY2011 arsenic monitoring program found measurable total arsenic in apple juice samples, providing the evidentiary basis for the subsequently established iAs action level ([[sources/fda2011-arsenic-apple-juice-2005-2011|FDA 2011]]). Juice also presents a higher per-serving metal exposure risk than whole fruit because multiple fruit portions contribute to a single serving and because the physical barrier of the skin and flesh is removed by pressing, allowing metals from deeper in the fruit to pass into solution.

Tin (Sn) is a secondary contamination concern specific to canned apple juice, where contact between the acidic juice and tinplate can linings drives Sn dissolution. The magnitude of Sn release depends on juice pH, storage temperature, and can age, as demonstrated by [[sources/tarigan2016-factors-tin-released-canned-beverages|Tarigan et al. 2016]] in a study of canned beverages including juice matrices. The gastrointestinal acute toxicity of inorganic Sn at high concentrations (above approximately 200 mg/kg in the product) was established in early outbreak investigations and underpins the international canned-beverage Sn limits ([[sources/benoy1971-tin-toxicity-canned-fruit-juices|Benoy et al. 1971]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0.3–2.5 | medium | [[sources/paudel2024-packaged-fruit-juices-nepal\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/fda2018-lead-in-juice-fy2005-fy2018\|3]] |
| Cd | n=4 | 0–1.6 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/magdas2012-romanian-apple-juice-isotopic-elemental\|2]], [[sources/paula2015-fruit-juices-elements-portugal\|3]], [[sources/desouza2022-fruit-juice-trace-elements\|4]] |
| iAs | n=4 | 0–3.6 | medium | [[sources/fda2023-ias-apple-juice-guidance\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|3]] |
| tAs | n=5 | 1.4–4 | medium | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|2]], [[sources/fsanz2012-arsenic-apple-pear-juice-australia-nz\|3]] |
| tHg | n=1 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=3 | 0–16 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/magdas2012-romanian-apple-juice-isotopic-elemental\|2]], [[sources/farid2010-fruit-juices-jeddah-trace-elements\|3]] |
| Al | n=1 | 0–2560 | low | — |
| Cr | n=5 | 0–19 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/magdas2012-romanian-apple-juice-isotopic-elemental\|2]], [[sources/farid2010-fruit-juices-jeddah-trace-elements\|3]], [[sources/paula2015-fruit-juices-elements-portugal\|4]], [[sources/desouza2022-fruit-juice-trace-elements\|5]] |
| Sn | n=4 | 0–8.9 | medium | [[sources/tarigan2016-factors-tin-released-canned-beverages\|1]], [[sources/atsdr2005-tin-toxicological-profile\|2]], [[sources/schafer1984-tin-toxic-heavy-metal-review\|3]] |
| U | n=2 | 0 | low | [[sources/magdas2012-romanian-apple-juice-isotopic-elemental\|1]] |

## Synthesis basis and censoring treatment

The earlier profile carried cadmium, total mercury, and chromium at [0, 0] with a p95 of 0. Those zeros were an artifact of the FDA Total Diet Study recording below-limit results as literal zeros. In the FY2018 to FY2020 bottled apple juice set, cadmium and total mercury sat below the 1 ppb reporting limit in all three samples and total chromium below the 25 ppb reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). Each is now treated as left-censored at its reporting limit rather than as a true absence, and values are reported on a single-strength juice basis.

Commercial fruit-juice surveys show that these analytes are present at low, detectable levels rather than absent. [[sources/magdas2012-romanian-apple-juice-isotopic-elemental|Magdas et al. 2012]] found cadmium at a regional mean near 0.4 ppb in Romanian apple juice, [[sources/paula2015-fruit-juices-elements-portugal|Paula et al. 2015]] a Portuguese fruit-juice mean of 1.6 ppb, and [[sources/desouza2022-fruit-juice-trace-elements|de Souza et al. 2022]] an apple-juice detect at 2.6 ppb. For total chromium the bulk of the literature is low ([[sources/reczajska2005-chromium-plant-foods-poland|Reczajska et al. 2005]] juices below 1 ppb, Paula 2.8 ppb, [[sources/farid2010-fruit-juices-jeddah-trace-elements|Farid and Enani 2010]] 6.4 ppb, de Souza 3.1 to 18.9 ppb), while Magdas ran higher at a regional mean of 39 to 94 ppb with the authors attributing part of the chromium and nickel signal to processing-contact materials, so that elevated result anchors the upper tail rather than the central value. Mercury was not measured by any of the juice surveys, so its cell remains a single-source censored bound at 1 ppb. All chromium values are total chromium, not Cr-VI.

## Routing

This node is linked from [[products/fruit-juice-not-canned]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 99, "Juice, apple, bottled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Juice, apple, bottled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 20 | in profile |
| Pb | 3 | 0 | 2.7 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 1.1 | 4.4 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 TDS data for bottled apple juice (TDS Food 99, n=3) show Pb with a median of 1.5 ppb and a maximum of 2.7 ppb, and tAs with a median of 2.4 ppb and a maximum of 4.4 ppb; Ni reached a maximum of 20 ppb in that small sample set ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The FDA FY2005-FY2011 compliance program covering 160 apple juice and concentrate samples provides a larger dataset with country-of-origin breakdown, showing variation by source country ([[sources/fda2011-arsenic-apple-juice-2005-2011|FDA 2011]]). The FY2005-FY2018 Pb dataset spanning 1,643 juice samples ([[sources/fda2018-lead-in-juice-fy2005-fy2018|FDA 2018]]) provides the most extensive US distribution data currently in the corpus. Country of origin for apple juice concentrate is a key variance driver: concentrate sourced from regions with documented orchard pesticide legacies or elevated soil arsenic can produce higher-arsenic juice than domestically concentrated US product. Specific per-country quantitative values will be populated when table extraction of these datasets is completed.

## Processing effects

Juicing concentrates metals from the full fruit into the juice volume; metals present in the skin, flesh, and core all contribute to the pressed juice. Filtration removes particulate matter but does not remove dissolved metals in ionic or complexed form. Concentration (reducing juice to concentrate for shipping and later reconstitution) proportionally elevates all metal concentrations by the factor of water removed; a concentrate reconstituted at a 1:6 ratio carries six times the metal concentration of the corresponding single-strength juice as concentrated. Pasteurization does not remove metals. For canned apple juice specifically, Sn leaches from tinplate can linings into the acidic juice during storage, with the rate increasing with storage duration and temperature, as documented by [[sources/tarigan2016-factors-tin-released-canned-beverages|Tarigan et al. 2016]]; glass or carton packaging eliminates this contamination route. The use of fining agents (gelatin, bentonite) in juice clarification may co-precipitate some metals with colloidal matter, but quantified reduction factors are not available in the current corpus.

## Ingredient-derivative risk

Apple juice is itself a derivative of the whole apple ingredient. Its primary downstream derivatives are apple juice concentrate (elevated metal concentration proportional to concentration factor), dehydrated apple juice powder (further elevated), reconstituted apple juice from concentrate (returns to approximately single-strength levels if reconstituted at label ratio), and blended fruit drinks where apple juice is one component. Apple cider (including fermented hard cider) carries through the metal content of the juice into the fermented product; fermentation does not remove metals. Apple juice used as a sweetener or flavor in other processed foods (e.g., dried fruit bars, infant pouches) carries its metal load into those formulations. The iAs regulatory action level ([[sources/fda2023-ias-apple-juice-guidance|FDA 2023]]) applies to juice as placed on the market, not to concentrate or intermediate forms; compliance testing must be performed on the ready-to-drink product.

## Mitigation options

### Sourcing levers

Sourcing apple juice or concentrate from suppliers who can demonstrate orchard origin traceability and low soil Pb or arsenic in production regions reduces background contamination risk. Country-of-origin specification, where possible, allows exclusion of source regions with documented higher arsenic in apple juice ([[sources/fda2011-arsenic-apple-juice-2005-2011|FDA 2011]]). _Quantified magnitude of source-switching effect is not resolved in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Switching from tinplate cans to glass, carton, or polyethylene-lined packaging eliminates the Sn leaching contamination route for canned apple juice. Limiting storage duration and temperature for canned product reduces Sn accumulation during the shelf-life period ([[sources/tarigan2016-factors-tin-released-canned-beverages|Tarigan et al. 2016]]). _Quantified Pb and As reduction from processing steps (fining, filtration) are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Diluting apple juice with low-metal diluents (water) reduces per-serving metal dose but must be disclosed on labeling if the product is marketed as juice. Blending with juices from lower-metal sources can reduce the average concentration of the blend. _Quantified blending effects are not available in the current corpus._

### Testing and QC levers

The FDA iAs action level of 10 ppb for apple juice ([[sources/fda2023-ias-apple-juice-guidance|FDA 2023]]) provides a regulatory compliance testing target. Lot-level iAs testing by ICP-MS with HPLC speciation (or equivalent) before release is the standard QC approach for US market compliance. For Pb, the ongoing FDA compliance program ([[sources/fda2018-lead-in-juice-fy2005-fy2018|FDA 2018]]) provides the evidentiary basis for any future Pb action level development; suppliers should monitor Pb in anticipation of a formal FDA action level under Closer to Zero ([[regulations/fda-closer-to-zero]]).

### Packaging and storage levers

As noted under processing levers, non-metallic packaging eliminates the Sn contamination route specific to canned apple juice. Storage temperature control (cool, consistent temperature) reduces the rate of Sn dissolution from can linings during shelf life ([[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]]).

## Regulatory limits that apply

The FDA has established a final action level of 10 ppb inorganic arsenic (iAs) for apple juice and apple cider, applicable to product as placed on the market (single-strength, ready-to-drink basis) ([[sources/fda2023-ias-apple-juice-guidance|FDA 2023]]). For lead in juice, the FDA's FY2005-FY2018 compliance program data ([[sources/fda2018-lead-in-juice-fy2005-fy2018|FDA 2018]]) underpin ongoing action level development under the Closer to Zero program; the current FDA guidance for juice Pb is the 50 ppb level referenced in the HACCP juice regulation ([[regulations/fda-juice-haccp-lead-50ppb]]), though this is expected to tighten under Closer to Zero. In the European Union, Regulation (EU) 2023/915 sets a Pb ML of 0.050 mg/kg (50 ppb) for fruit juices generally, with a stricter 0.020 mg/kg (20 ppb) ML for fruit juices intended for infants and young children ([[regulations/eu2023-contaminants-maximum-levels]]). The EU also sets a maximum for inorganic tin (Sn) in canned beverages at 100 mg/kg (100,000 ppb) for non-carbonated drinks and 150 mg/kg for carbonated drinks. No specific EU ML for Cd in fruit juice appears in the current corpus as a binding ML; Cd MLs in EU Regulation 2023/915 focus on solid food matrices. Codex Alimentarius maximum levels for contaminants in fruit juices are not yet extracted into the corpus.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2011-arsenic-apple-juice-2005-2011|Arsenic in Apple Juice: Analytical Results from the 2005–2011 Toxic Elements Food and Foodware Program]]<span class="hmi-ref-meta">US Food and Drug Administration · 2011 · [www.fda.gov](https://www.fda.gov/food/environmental-contaminants-food/arsenic-apple-juice-analytical-results-2005-2011-toxic-elements-food-and-foodware-program)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/tarigan2016-factors-tin-released-canned-beverages|Factors are Affecting Tin Released in Canned Beverages]]<span class="hmi-ref-meta">Rida Evalina Tarigan, Jansen Silalahi, and Muchlisyam · International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 · 2016 · [sphinxsai.com](https://sphinxsai.com/2016/ph_vol9_no5/3/(330-333)V9N5PT.pdf)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/benoy1971-tin-toxicity-canned-fruit-juices|The Toxicity of Tin in Canned Fruit Juices and Solid Foods]]<span class="hmi-ref-meta">Christine J. Benoy, Patricia A. Hooper, and R. Schneider · Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 · 1971 · [doi.org/10.1016/0015-6264(71)90152-0](https://doi.org/10.1016/0015-6264(71)90152-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
6. [[sources/magdas2012-romanian-apple-juice-isotopic-elemental|Isotopic and Elemental Determination in Some Romanian Apple Fruit Juices]]<span class="hmi-ref-meta">Magdas DA, Dehelean A, and Puscas R · The Scientific World Journal · 2012 · [doi.org/10.1100/2012/878242](https://doi.org/10.1100/2012/878242)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/paula2015-fruit-juices-elements-portugal|Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices]]<span class="hmi-ref-meta">Paula FJA, Guine RPF, Cruz-Lopes L, Duarte AC, Fragata AOS, and Reis MAL · Czech Journal of Food Sciences · 2015 · [doi.org/10.17221/531/2014-CJFS](https://doi.org/10.17221/531/2014-CJFS)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/desouza2022-fruit-juice-trace-elements|Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS]]<span class="hmi-ref-meta">Max Jose Belo de Souza, Maria Carmen Barciela-Alonso, Manuel Aboal-Somoza, and Pilar Bermejo-Barrera · Brazilian Journal of Analytical Chemistry · 2022 · [doi.org/10.30744/brjac.2179-3425.AR-87-2021](https://doi.org/10.30744/brjac.2179-3425.AR-87-2021)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/reczajska2005-chromium-plant-foods-poland|Determination of Chromium Content of Food and Beverages of Plant Origin]]<span class="hmi-ref-meta">Reczajska W, Jedrzejczak R, and Szteke B · Polish Journal of Food and Nutrition Sciences · 2005</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/farid2010-fruit-juices-jeddah-trace-elements|Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia]]<span class="hmi-ref-meta">Farid SM and Enani MA · Medical Journal of Islamic World Academy of Sciences · 2010</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/fda2018-lead-in-juice-fy2005-fy2018|Analytical Results for Lead in Juice Sampled Under the FDA's Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic Compliance Program (FY2005-FY2018)]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA analytical results table · 2018</span><span class="hmi-ref-tag">Dataset</span>
12. [[sources/fda2023-ias-apple-juice-guidance|Action Level for Inorganic Arsenic in Apple Juice: Guidance for Industry]]<span class="hmi-ref-meta">FDA CFSAN · U.S. Food and Drug Administration, Center for Food Safety and Applied Nutrition · 2023 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-apple-juice)</span><span class="hmi-ref-tag">Guidance</span>
13. [[sources/atsdr2005-tin-toxicological-profile|Toxicological Profile for Tin and Tin Compounds]]<span class="hmi-ref-meta">Carolyn Harper, Fernando Llados, Gary Diamond, Lara L. Chappell, and Agency for Toxic Substances and Disease Registry · U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry · 2005 · [www.atsdr.cdc.gov](https://www.atsdr.cdc.gov/toxprofiles/tp55.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 2 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology 12(3): 158-165 | 2024 | Peer-reviewed | Pb (all below LOD) and essential-element levels in packaged apple juice from the Kathmandu retail market |
| 3 | [[sources/fda2023-ias-apple-juice-guidance\|FDA 2023]]. *Action Level for Inorganic Arsenic in Apple Juice: Guidance for Industry*, U.S. Food and Drug Administration, Center for Food Safety and Applied Nutrition | 2023 | Government guidance | FDA final guidance establishing the 10 ppb iAs action level for apple juice and apple cider; the operative U.S. regulatory limit for iAs in this matrix |
| 4 | [[sources/desouza2022-fruit-juice-trace-elements\|Souza et al. 2022]]. *Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS*, Brazilian Journal of Analytical Chemistry | 2022 | Peer-reviewed | ES/PT Al, tAs, Cd, Co, Cr, Cu, Fe, Mg, Mn, Mo, Ni, Pb, Sb, V, Zn occurrence in 21 fruit juice and nectar samples: 16 commercial fruit juices, 2 commercial nectars, 2 laboratory-squeezed orange juices, and... (n=21) |
| 5 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018-FY2020 multi-element occurrence data for bottled apple juice (TDS Food 99, n=3); provides per-analyte distribution tables for Pb, Cd, tAs, tHg, Ni, Cr, and U on this page |
| 7 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 8 | [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|Kubachka et al. 2019]]. *Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS*, Food Analytical Methods | 2019 | Peer-reviewed | US iAs, tAs occurrence in Multiple fruit juice types (apple, pear, grape, pomegranate, prune, cherry) from commercial sources |
| 9 | [[sources/balalimood2018-fruit-juice-mashhad-pb-as\|Balali-Mood et al. 2018]]. *Arsenic and Lead Contaminations in Commercial Fruit Juices of Markets in Mashhad, Iran*, Iranian Journal of Toxicology | 2018 | Peer-reviewed | IR Pb, tAs occurrence in 50 commercial packaged fruit juice samples from Mashhad, Iran local markets in spring and winter 2016; grape, apple,... (n=50) |
| 10 | [[sources/fda2018-lead-in-juice-fy2005-fy2018\|FDA 2018]]. *Analytical Results for Lead in Juice Sampled Under the FDA's Toxic Elements in Food and Foodware, and Radionuclides in Food – Import and Domestic Compliance Program (FY2005-FY2018)*, FDA analytical results table | 2018 | Government dataset | FDA compliance-program Pb dataset for 1,643 juice samples FY2005-FY2018; primary sample-level evidence base for apple juice Pb distribution and the Closer to Zero juice action level development |
| 11 | [[sources/tarigan2016-factors-tin-released-canned-beverages\|Tarigan et al. 2016]]. *Factors are Affecting Tin Released in Canned Beverages*, International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 | 2016 | Peer-reviewed | Indonesian market study measuring inorganic Sn in canned carbonated, beer, and juice beverages (n=27); demonstrates pH-driven Sn release from can linings relevant to canned apple juice; B-tier source (predatory venue) |
| 12 | [[sources/paula2015-fruit-juices-elements-portugal\|Paula et al. 2015]]. *Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices*, Czech Journal of Food Sciences | 2015 | Peer-reviewed | PT Cd, Cr, Pb, Ni, Zn, Fe occurrence in 62 packs of 100% fruit juices acquired randomly from major supermarkets in Portugal; samples covered multiple fruit species,... (n=62) |
| 13 | [[sources/fsanz2012-arsenic-apple-pear-juice-australia-nz\|Zealand 2012]]. *Survey of total arsenic and inorganic arsenic in apple and pear juice*, Food Standards Australia New Zealand (FSANZ) targeted analytical survey, published February 2013 | 2012 | Government report | Government survey tAs and iAs distribution in 96 Australian and New Zealand apple juices including the 11.3 µg/kg iAs maximum |
| 14 | [[sources/magdas2012-romanian-apple-juice-isotopic-elemental\|Magdas et al. 2012]]. *Isotopic and Elemental Determination in Some Romanian Apple Fruit Juices*, The Scientific World Journal | 2012 | Peer-reviewed | Pb, Cd, tAs, Ni, Cr, and U occurrence by region in 31 organic single-strength Romanian apple juices |
| 15 | [[sources/fda2011-arsenic-apple-juice-2005-2011\|FDA 2011]]. *Arsenic in Apple Juice: Analytical Results from the 2005–2011 Toxic Elements Food and Foodware Program*, US Food and Drug Administration | 2011 | Government dataset | FDA tAs sample-level dataset for 160 apple juice and concentrate samples FY2005-FY2011 with country-of-origin breakdown; underpins the FDA iAs action level rationale for this matrix |
| 16 | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|Farid et al. 2010]]. *Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia*, Medical Journal of Islamic World Academy of Sciences | 2010 | Peer-reviewed | Total Cr and Ni concentrations in 42 commercial apple juice samples from Jeddah by GFAAS |
| 17 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2005 | Government report | ATSDR comprehensive Sn toxicological profile; provides inorganic vs organotin species distinction, MRLs, and canned-juice occurrence context for apple juice Sn risk framing |
| 18 | [[sources/schafer1984-tin-toxic-heavy-metal-review\|Schafer et al. 1984]]. *Tin — A Toxic Heavy Metal? A Review of the Literature*, Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 | 1984 | Peer-reviewed | Foundational European literature review on inorganic vs organotin toxicology; establishes that inorganic Sn from canned food (including fruit juices) acts via gastrointestinal irritation rather than systemic accumulation |
| 19 | [[sources/benoy1971-tin-toxicity-canned-fruit-juices\|Benoy et al. 1971]]. *The Toxicity of Tin in Canned Fruit Juices and Solid Foods*, Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 | 1971 | Peer-reviewed | Outbreak investigation linking a 1967 Kuwait gastrointestinal event to canned orange and apple juice at 250-385 ppm Sn; establishes the gastrointestinal NOAEL/LOAEL thresholds underpinning international canned-beverage Sn limits |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [10bb2e5ec](https://github.com/paleofoundation/heavymetalindex/commit/10bb2e5ec) | 2026-08-09 | correction | 6 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
