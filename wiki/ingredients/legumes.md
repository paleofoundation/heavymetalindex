---
type: ingredient
commodity: legumes
title: "Legumes"
label: "Legumes"
aliases: [chickpeas, pulses, beans, lentils, peas]
category: legume
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 35]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [4, 42]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 4]
    p95_ppb: 14
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 10
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [800, 3094]
    p95_ppb: 7752
    confidence: medium
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, geography, processing, can-lining]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/beans]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Legumes

Legumes covers pulses, beans, lentils, peas, chickpeas, and related leguminous seed crops as a food category. The category overlaps with [[ingredients/beans]] (whole bean ingredients) and [[ingredients/lentils]] (lentil-specific); where commodity-specific pages exist they take precedence for per-bean or per-pulse values. This page summarizes group-level findings from total diet studies and broad market surveys that report aggregate legume-category occurrence data. Legumes carry an unusual position in the heavy-metal profile of plant foods: among the lowest-iAs categories in dietary surveys but the highest-nickel category in plant-food market surveys, with the Chinese national standard for Ni in plant foods (1 mg/kg) routinely exceeded in commercial bean samples.

## Why this commodity accumulates heavy metals

Legumes accumulate heavy metals through soil uptake driven by the symbiotic nitrogen-fixing root system characteristic of the family. The deep root architecture of many legumes accesses soil layers more thoroughly than most crops, which contributes to elevated uptake of metals correlated with soil nitrogen and organic matter, including nickel. Soybean in particular is documented as a hyperaccumulator of nickel; in the Zhejiang Province dataset, a single soybean sample carried 9.21 mg/kg of Ni, nine times the Chinese national standard ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]). The same uptake biology that gives legumes their nutritional density (high protein, high mineral content) also concentrates metals from soil into the edible seed.

Geographic and soil factors dominate the per-region variation. Soils in mining-impacted regions, soils receiving long-term phosphate fertilization, and soils with elevated background Cd produce legumes with higher metal load than legumes from low-background regions. Processing introduces a second exposure route specific to canned legumes: tin migration from unlacquered or damaged can linings into the cooked bean matrix. The Valizadeh Iranian survey of 90 canned bean samples documented that all samples carried Pb in excess of the Iranian INSO 12968 national standard, with brand-level variability driven by canning process control rather than raw bean sourcing alone ([[sources/valizadeh2023-canned-beans-iran-health-risk|Valizadeh et al. 2023]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable group-level occurrence data was found in the contributing sources.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2 | 5–35 | — | low | [[sources/zhao2022-china-sixth-tds-pb-cd\|2]], [[sources/valizadeh2023-canned-beans-iran-health-risk\|7]] |
| Cd  | n=2 | 4–42 | — | low | [[sources/zhao2022-china-sixth-tds-pb-cd\|2]], [[sources/valizadeh2023-canned-beans-iran-health-risk\|7]] |
| iAs | n=1 | 0–4 | 14 | low | [[sources/cfs2012-hktds-inorganic-arsenic\|6]] |
| tAs | n=1 | 10 | — | low | [[sources/valizadeh2023-canned-beans-iran-health-risk\|7]] |
| tHg | n=1 | <LOD | 10 | low | [[sources/valizadeh2023-canned-beans-iran-health-risk\|7]] |
| Ni  | n=2 | 800–3,094 | 7,752 | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/efsa2015-nickel-food-water\|3]] |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Chinese Sixth Total Diet Study (2016–2019, 24 provincial-level administrative divisions) reports legumes Pb at mean 12.9 ± 15.5 µg/kg with a range of 4.7 to 34.9 µg/kg and Cd at mean 16.8 ± 18.5 µg/kg with a range of 4.5 to 41.9 µg/kg; both analytes were detected in 100 percent of composite samples and all values fell below the Chinese GB 2762-2017 maximum levels ([[sources/zhao2022-china-sixth-tds-pb-cd|Zhao et al. 2022]]).

The Zhejiang Province nickel survey provides the most extreme Ni values for legumes in the corpus. Beans (whole legume seeds) sampled across five species showed a mean of 3,094 µg/kg with a range of 1,220 to 9,210 µg/kg; soybean alone reached 9,210 µg/kg, mung bean averaged 1,300 µg/kg, and Ormosia averaged 1,830 µg/kg. All five sampled species exceeded the Chinese GB 2762-2022 standard of 1,000 µg/kg ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]). Vegetable legumes (a separate matrix sampling fresh leguminous vegetables rather than dry seeds) showed lower mean Ni (813 µg/kg) with a range of 161 to 3,350 µg/kg and a 95th percentile of 2,610 µg/kg, with 22.22 percent of samples exceeding the standard. The EFSA CONTAM Panel 2015 opinion on nickel reports legumes, nuts, and oilseeds at mean concentrations of approximately 2 mg/kg across 18,885 European food samples from 15 countries, consistent with the Chinese vegetable-legume figure ([[sources/efsa2015-nickel-food-water|EFSA 2015]]).

The Iranian canned-bean survey of 90 samples (48 pinto beans across 8 brands, 36 fava beans across 4 brands) reports Hg below the 0.01 mg/L LOD across all samples and Cd at a maximum of 4 µg/kg in pinto beans (with fava beans below LOD). All samples exceeded the Iranian INSO 12968 Pb standard (1 mg/kg in some canned product categories), with brand-level variability in Cu, As, Zn, and Sn ([[sources/valizadeh2023-canned-beans-iran-health-risk|Valizadeh et al. 2023]]).

The Hong Kong First Total Diet Study sampled 24 composite samples in the legumes-nuts-seeds group, with 63 percent below the 3 µg/kg LOD for inorganic arsenic, a group mean of 4 µg/kg, and a maximum of 14 µg/kg ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012]]).

## Processing effects

Canning is the dominant processing transformation affecting legume metal load. Tin migration from can linings into the cooked bean matrix over shelf life increases Sn content; product-page evidence at the canned-bean level is sparse in the current corpus, but the Iranian dataset confirms that brand-level variability in canned-bean metal content correlates with canning process control rather than raw bean origin alone. Soaking and cooking water removal (discarding soak water and using fresh cooking water) reduces water-soluble metal load. The EFSA 2015 opinion notes that processed forms of legumes typically carry similar Ni concentrations to raw forms because Ni is bound in protein and starch matrices rather than soluble, so cooking does not substantially reduce the load. Fermentation (tempeh, miso) is not addressed in the contributing sources at the legume-category level.

## Ingredient-derivative risk

Legumes as a category produce several derivatives with distinct metal profiles. Whole dried legumes (lentils, dried beans, chickpeas as sold) carry the metal load of the source soil and crop without processing-related additions. Canned legumes pick up tin from can linings and carry brand-level variability in Pb from processing additives; the Iranian dataset's universal exceedance of the INSO Pb standard in canned products is the load-bearing evidence. Legume protein isolates (pea protein, soy protein) concentrate the metals from the source legume into the protein fraction, similar to the bran/concentrate concentration effect for grains. Legume flours (chickpea flour, lentil flour) preserve the metal load of the source seed without dilution. Fermented soy products (miso, tempeh, soy sauce) follow a separate processing path; CFS 2012 reports soya sauce at the LOD for inorganic arsenic, suggesting fermentation does not concentrate iAs in the finished product.

## Mitigation options

Sourcing levers carry significant weight for legumes given the wide Ni range observed in the Zhejiang dataset (1,220 to 9,210 µg/kg in beans). Avoiding soybean from regions with documented Ni-enriched soils is the highest-leverage single sourcing decision; substituting mung bean (mean 1,300 µg/kg in the same dataset) for soybean reduces Ni load by approximately 7-fold at the ingredient level. Geographic sourcing specifications based on regional soil baselines, supplier soil-test data, and origin certification are the available controls.

Agronomic levers operate on the legume producer. Cultivar selection (low-Ni-uptake varieties), soil amendment to reduce metal bioavailability (lime applications to raise pH for Cd), and avoidance of irrigation water from contaminated sources are documented in the broader plant-food agronomic literature reviewed by [[sources/khan2015-heavy-metals-food-plants-bioaccumulation|Khan et al. 2015]] and [[sources/efsa2015-nickel-food-water|EFSA 2015]]. These require supplier engagement to verify.

Processing levers are limited for whole legumes. Soaking and discarding the soak water removes a portion of water-soluble surface contamination. For canned legumes, lacquered can linings reduce tin migration relative to unlacquered tin-plate containers, and shorter shelf life reduces accumulated tin transfer.

Formulation levers are the brand's lever. Substituting a lower-Ni legume (mung bean, lentil) for a higher-Ni legume (soybean) where the formulation permits is the most direct intervention. For canned products, the Iranian dataset suggests that brand selection matters as much as the underlying ingredient.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming legume raw material against a sourcing specification catches origin-related Ni variability before it enters production. Finished-product testing of canned legumes catches process-related Pb and Sn variability. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are critical for canned legumes. Lacquered can linings, modern epoxy-based interior coatings, and avoidance of damaged or dented cans reduce tin migration. Acidic legume products (tomato-based bean preparations) accelerate tin migration and warrant tighter packaging specifications.

## Regulatory limits that apply

The Codex Alimentarius CXS 193-1995 maximum levels, summarized in [[sources/afonne2020-heavy-metals-plant-foods|Afonne and Ifediba 2020]], establish Pb in pulses at 0.2 mg/kg (200 ppb) and Cd in pulses at 0.1 mg/kg (100 ppb). The European Union Regulation (EU) 2023/915 establishes Pb in pulses at 0.20 mg/kg (200 ppb) and Cd in pulses at 0.10 mg/kg (100 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). The Chinese national standard GB 2762-2022 establishes Ni in plant foods at 1 mg/kg (1,000 ppb), the reference used in the Zhejiang Province exceedance analysis ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]). The Iranian national standard INSO 12968 establishes Pb in some canned product categories at 1 mg/kg (1,000 ppb), the reference used in the Iranian canned-bean exceedance finding ([[sources/valizadeh2023-canned-beans-iran-health-risk|Valizadeh et al. 2023]]). The EFSA CONTAM Panel 2015 established a TDI for Ni of 2.8 µg/kg bw/day, with mean dietary exposure across all EU age groups at or above the TDI ([[sources/efsa2015-nickel-food-water|EFSA 2015]]). The United States FDA has no commodity-specific action levels for Pb, Cd, or Ni in whole legumes under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Primary Ni occurrence data for beans (n=5, mean 3,094 µg/kg, range 1,220–9,210 µg/kg) and vegetable-legumes (n=9, mean 813 µg/kg, p95 2,610 µg/kg); all five sampled bean species exceeded GB 2762-2022 1 mg/kg standard |
| 2 | [[sources/zhao2022-china-sixth-tds-pb-cd\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | Primary Pb and Cd occurrence data for legumes in China's Sixth TDS (24 PLADs, 2016–2019); Pb mean 12.9 ppb range 4.7–34.9 ppb, Cd mean 16.8 ppb range 4.5–41.9 ppb, 100 percent detection |
| 3 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002 | 2015 | Government report | European Ni occurrence data (18,885 samples, 15 countries) reporting legumes/nuts/oilseeds at ~2 mg/kg mean; establishes EU TDI 2.8 µg/kg bw/day for Ni |
| 4 | [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|Khan et al. 2015]]. *The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review*, Environmental Science and Pollution Research | 2015 | Review | Background on heavy metal uptake and bioaccumulation mechanisms in food plants including legumes; soil-water-fertilizer-irrigation pathways |
| 5 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | Hong Kong Total Diet Study category-level metallic contaminant data (Al, Sb, Cd, Pb, MeHg, Ni, Sn); legumes-nuts-seeds group context |
| 6 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | Primary iAs occurrence data for legumes-nuts-seeds group (n=24 composites, hydride generation ICP-MS); mean 4 ppb, range ND–14 ppb, 63 percent below LOD |
| 7 | [[sources/valizadeh2023-canned-beans-iran-health-risk\|Valizadeh et al. 2023]]. *Health Risk Assessment of Potentially Toxic Elements in Canned Pinto Beans and Fava Beans Distributed in Gilan Province of Iran*, Scientific Reports | 2023 | Peer-reviewed | Primary multi-element occurrence data for canned legumes (n=90 samples, 12 brands, ICP-OES); Hg <LOD, Cd max 4 ppb pinto, all samples exceeded Iranian INSO 12968 Pb standard |
| 8 | [[sources/cardini2025-cadmium-speciation-plant-foods-sec-icp\|Cardini et al. 2025]]. *Cadmium speciation in plant foods using SEC-ICP*, — | 2025 | Peer-reviewed | Cd speciation methodology in plant-food matrices; provides methodological context for Cd binding-protein analysis in legumes |
| 9 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel content of food and estimation of dietary intake*, — | 1984 | Peer-reviewed | Historical baseline for Ni content in food categories including legumes; provides context for trend comparison with modern occurrence studies |
<!-- END: hmi-source-legend -->
