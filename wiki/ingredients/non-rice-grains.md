---
title: "Non Rice Grains"
type: ingredient
commodity: non-rice-grains
label: "Non Rice Grains"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 80]
    p95_ppb: 200
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 150]
    p95_ppb: 400
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [5, 30]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 10]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [100, 800]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [500, 5000]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [30, 200]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, 80]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [baby-cereals-dry-non-rice, mixed-meals-non-rice, teething-and-snacks-non-rice]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 20
---

# Non Rice Grains

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=11 | 10–80 | 200 | high | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/ibrahim2024-food-heavy-metals-nigeria\|2]], [[sources/katebe2024-vegetables-lubumbashi\|3]] |
| Cd | n=11 | 20–150 | 400 | high | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/ibrahim2024-food-heavy-metals-nigeria\|2]], [[sources/katebe2024-vegetables-lubumbashi\|3]] |
| iAs | n=4 | 5–30 | — | medium | [[sources/codex-cccf17-2024\|1]], [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|2]], [[sources/efsa-arsenic-contam-2009\|3]] |
| tAs | n=6 | 10–80 | — | medium | [[sources/katebe2024-vegetables-lubumbashi\|1]], [[sources/codex-cccf17-2024\|2]], [[sources/balbo2022-bread-contaminants-poland\|3]] |
| tHg | n=5 | 1–10 | — | medium | [[sources/ibrahim2024-food-heavy-metals-nigeria\|1]], [[sources/codex-cccf17-2024\|2]], [[sources/rubio2023-metals-cereals-madeira-azores\|3]] |
| Ni | n=2 | 100–800 | — | low | [[sources/balbo2022-bread-contaminants-poland\|1]], [[sources/mania2020-nickel-cereal-grains-poland\|2]] |
| Al | n=3 | 500–5000 | — | low | [[sources/balbo2022-bread-contaminants-poland\|1]] |
| Cr | n=4 | 30–200 | — | medium | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/balbo2022-bread-contaminants-poland\|2]], [[sources/getu2022-heavy-metals-cereals-ethiopia\|3]] |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from [[products/baby-cereals-dry-non-rice]], [[products/mixed-meals-non-rice]], [[products/teething-and-snacks-non-rice]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/asaditouranlou2025-bread-iran-montecarlo\|Asadi et al. 2025]]. *Health risk assessment of potentially toxic elements in bread from Iranian markets using Monte Carlo simulation*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cd, tHg, Al, Cr, Ni, Cu, Fe, Zn, Co occurrence in 248 bread samples collected from 11 Iranian provinces during winter 2020; four traditional bread types: lavash (n=69), taftoon... (n=248) |
| 2 | [[sources/asaditouranlou2025-bread-wheat-mashhad\|Asadi et al. 2025]]. *Human health risk assessment of arsenic and potentially toxic elements exposure in bread and wheat flour in Northeast Iran*, PLoS ONE 20(7): e0327652 | 2025 | Peer-reviewed | IR tAs, Al, Cr, Cd, Ni, Pb, tHg, Fe, Zn, Cu, Co, V occurrence in Flour, dough, and bread from 90 bakeries across five city regions (North, South, East, West, Central) in Mashhad,... (n=270) |
| 3 | [[sources/chiutula2025-wastewater-vegetables-malawi\|Chiutula et al. 2025]]. *Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi*, International Journal of Environmental Research and Public Health | 2025 | Peer-reviewed | Measured Cd, Cr, and Pb in amaranth (and other leafy species) irrigated with WWTP effluent in Blantyre, Malawi; routes here because amaranth is classified under non-rice grains in this wiki |
| 4 | [[sources/hbbf2025-rice-arsenic-cadmium-145-samples\|Houlihan et al. 2025]]. *What's in your family's rice? Arsenic, Cadmium, and Lead in Popular Rice Brands - Plus 9 Safer Grains to Try*, Healthy Babies Bright Futures (HBBF) report | 2025 | Government report | US tAs, iAs, Cd, Pb, tHg occurrence in 211 retail grain containers (145 rice samples across 105 brands and 66 alternative-grain samples) purchased in 20 US... (n=211) |
| 5 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | Regulatory context for Pb, Cd, iAs, and Hg limits applicable to non-rice grain matrices under current and emerging Codex standards |
| 6 | [[sources/ibrahim2024-food-heavy-metals-nigeria\|Ibrahim et al. 2024]]. *Correlates of Food Contamination by Heavy Metals in Northwest Nigeria*, Environmental Health Insights | 2024 | Peer-reviewed | Pb, Cd, and tHg by AAS in 361 staple maize, millet, sorghum, rice, cowpea, and soybean samples from 360 households in 4 LGAs of Jigawa State, Nigeria; 97.8% of households had food Hg above 0.02 mg/kg reference |
| 7 | [[sources/katebe2024-vegetables-lubumbashi\|Katebe et al. 2024]]. *Application of soil amendments to reduce the transfer of trace metal elements from contaminated soils of Lubumbashi (Democratic Republic of the Congo) to vegetables*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | Pot trial of Pb, Cd, and tAs transfer from Cu-Co-mining-contaminated Lubumbashi soils to amaranth (classified here as non-rice grain) alongside three other vegetables; tests organocalcareous amendments as a mitigation lever |
| 8 | [[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil\|Toledo et al. 2024]]. *Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment*, International Journal of Environmental Research and Public Health 21(4):381 | 2024 | Peer-reviewed | BR Ag, Al, tAs, iAs, B, Ba, Cd, Co, Cr, Cu, Mn, Ni, Pb, Se, Sr, Zn occurrence in Eighteen Brazilian infant-cereal samples acquired in 2014-2015: 9 rice cereals, 5 multi-grain cereals containing rice, and 4 non-rice-based... (n=18) |
| 9 | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|Gacal et al. 2023]]. *Cadmium and lead content in gluten and gluten-free bread available on Polish market - potential health risk to consumers*, Annales Academiae Medicae Silesiensis | 2023 | Peer-reviewed | Cd and Pb by ET-AAS in 50 Polish-market breads (wheat-rye, wheat, rye, gluten-free); wheat-rye had highest mean Cd (0.072 mg/kg) and gluten-free lowest (0.021), with non-trivial cancer risk for children under 11 from wheat-rye |
| 10 | [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|Oduro et al. 2023]]. *Health risks of potentially toxic metals in cereal-based breakfast meals in the Kumasi Metropolis, Ghana*, Discover Food 3:25 | 2023 | Peer-reviewed | GH tAs, Cd, Cr, Mn, Ni, Pb occurrence in 54 locally produced cereal-based breakfast meals obtained from Kumasi Metropolis markets in December 2021: 31 breakfast cereals, 20... (n=54) |
| 11 | [[sources/rubio2023-metals-cereals-madeira-azores\|Rubio et al. 2023]]. *Dietary Exposure to Toxic Metals (Cd, Pb and Hg) from Cereals Marketed in Madeira and the Azores*, Biological Trace Element Research | 2023 | Peer-reviewed | Cd, Pb, and tHg in oats, rye, wheat, and corn (and rice) marketed in Madeira and the Azores; oats highest Cd at 0.307 mg/kg and rye highest Pb at 0.347 mg/kg, both exceeding EU MLs |
| 12 | [[sources/balbo2022-bread-contaminants-poland\|Balbo et al. 2022]]. *Dietary exposure and risk characterisation of multiple chemical contaminants in rye-wheat bread marketed in Poland*, EFSA Journal | 2022 | Government report | EFSA EU-FORA report — Al, tAs, Cd, Cr, Pb, and Ni by ICP-MS (EN 15763:2009) in 51 rye-wheat refined-flour breads from Warsaw supermarkets; all below EU MLs but Al, Pb, and Ni exposures raised concern for toddlers and children |
| 13 | [[sources/getu2022-heavy-metals-cereals-ethiopia\|Getu et al. 2022]]. *Determination of the Level of Heavy Metals in the Selected Cereals from Debre Markos Local Market, Amhara Region, Ethiopia*, International Journal of Analytical Chemistry | 2022 | Peer-reviewed | Pb, Cd, and Cr by MP-AES in four cereals (barley, tef, wheat, maize) from Debre Markos market, Ethiopia; Pb (e.g., barley 0.49 mg/kg) and Cd above FAO/WHO limits in all four cereals, linked to DAP/urea fertilizer use |
| 14 | [[sources/mania2020-nickel-cereal-grains-poland\|Mania et al. 2020]]. *Assessment of exposure to nickel intake with selected cereal grains and cereal-based products*, Roczniki Panstwowego Zakladu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | Ni by GFAAS in 56 Polish-market cereal-grain and grain-based products (millet, rye, wheat, barley, pasta, flours, groats, flakes, bran); whole grains mean 1.16 mg/kg vs processed 0.61, 95th percentile 1.93 mg/kg, individual values up to 4.80 in millet |
| 15 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | Pb, Cd, Cr, tAs, and tHg in cereal group (wheat, non-rice grains, corn, rice) within 25 Beijing foodstuffs; Hg exceeded limits in millet, and cereals plus vegetables accounted for 91.5% of total dietary Cd intake |
| 16 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | Longitudinal biomarker study including non-rice mixed cereals and oat/barley-based infant foods as iAs/tAs exposure sources during weaning |
| 17 | [[sources/slepecka2017-ecological-cereal-heavy-metals-poland\|Slepecka et al. 2017]]. *Evaluation of cadmium, lead, zinc and copper levels in selected ecological cereal food products and their non-ecological counterparts*, Current Issues in Pharmacy and Medical Sciences 30(3):147-150 | 2017 | Peer-reviewed | Cd and Pb by FAAS in 10 ecological vs 10 conventional Polish cereal products (wheat, rye, spelt, buckwheat, oat, barley flours/brans/flakes); ecological flours had Cd ~100× higher, contradicting the assumption that organic certification lowers cereal Cd or Pb |
| 18 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 19 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | EFSA iAs/tAs risk assessment including non-rice grain occurrence data; establishes that non-rice cereals are a secondary but non-negligible contributor to European iAs exposure |
| 20 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex maximum levels for iAs, Cd, Pb, Sn, and MeHg applicable to cereal and non-rice grain matrices |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Non-rice grains is the aggregate ingredient label for cereal grains other than rice, used as the grain base in non-rice baby cereal formulations and gluten-containing/gluten-free baby cereals. The category includes [[ingredients/oat|oat]], [[ingredients/maize|corn/maize]], wheat, barley, rye, millet, sorghum, and [[ingredients/quinoa|quinoa]] (pseudocereal). Each grain carries its own heavy-metal profile inherited from its cultivation pathway: oat as moderate-Cd accumulator (per the Madeira/Azores cereal survey by [[sources/rubio2023-metals-cereals-madeira-azores|Rubio 2023]] documenting oats at 0.307 mg/kg Cd, exceeding EU MLs); corn as moderate-Pb with low iAs (substantially lower than rice); wheat as moderate-Cd from soil-uptake plus trace Pb from milling-equipment contact (the Polish bread survey by [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland|Gacal 2023]] documents Cd in wheat-rye bread at 0.072 mg/kg with non-trivial cancer-risk implication for children under 11); barley and rye at moderate baselines (Rubio 2023 documents rye at 0.347 mg/kg Pb exceeding EU MLs); millet at elevated Ni per [[sources/mania2020-nickel-cereal-grains-poland|Mania 2020]] up to 4.8 mg/kg; quinoa as documented tAs accumulator from Andean source-region geochemistry.

The non-rice-grains category is the key alternative to rice in infant cereal formulations because rice-cereal iAs is the dominant concern in the rice-cereal commodity. Non-rice baby cereals (oat, multigrain, ancient-grain blends) substantially reduce per-product iAs but carry their own per-grain analyte concerns. The Nigerian household-staple survey by [[sources/ibrahim2024-food-heavy-metals-nigeria|Ibrahim 2024]] (361 samples across maize, millet, sorghum) documents Pb, Cd, and Hg above WHO reference in many emerging-market non-rice grain samples; the Ethiopian Debre Markos market survey by [[sources/getu2022-heavy-metals-cereals-ethiopia|Getu 2022]] documents Pb and Cd above FAO/WHO limits in all four cereals tested, linked to DAP/urea fertilizer use.

## Ranges by source, region, and variety

Variance within non-rice grains tracks the grain-mix composition, source-grain origin region, and processing tier. The [[sources/rubio2023-metals-cereals-madeira-azores|Rubio 2023]] Atlantic-archipelago cereal survey, [[sources/balbo2022-bread-contaminants-poland|Balbo 2022]] EFSA Polish bread survey, and [[sources/slepecka2017-ecological-cereal-heavy-metals-poland|Slepecka 2017]] Polish ecological vs conventional cereal comparison (which found ecological flours carrying 100× higher Cd, contradicting the organic-certification-as-Cd-reducer assumption) collectively establish the European-market baseline. Emerging-market non-rice grains (Nigerian, Ethiopian, broader sub-Saharan African production per [[sources/ibrahim2024-food-heavy-metals-nigeria|Ibrahim 2024]] and [[sources/getu2022-heavy-metals-cereals-ethiopia|Getu 2022]]) carry substantially elevated levels. Beijing dietary-cereal exposure per [[sources/liang2019-beijing-foodstuffs-health-risk|Liang 2019]] documents non-rice grain contribution to Cd intake.

## Processing effects

Non-rice grain processing for cereal applications involves cleaning, hulling, milling, and optional flake/puff/extrusion processing. Milling fractionation (bran vs germ vs endosperm) affects per-fraction metal load; bran-and-germ fractions concentrate Cd and Pb per [[sources/mania2020-nickel-cereal-grains-poland|Mania 2020]]'s Polish whole-vs-processed cereal grain Ni comparison (whole 1.16 mg/kg vs processed 0.61 mg/kg). Multigrain baby cereal formulations combine multiple non-rice grains, dilution-balancing per-grain analyte concentrations. The [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor 2018]] U.S. infant biomarker work documents the As-exposure profile during weaning with oat- and barley-based non-rice infant foods.

## Ingredient-derivative risk

Non-rice grains route into [[products/baby-cereals-dry-non-rice|baby-cereals-dry-non-rice]] (Cat 1 row for non-rice infant cereals) and into mixed-meals products. Derivatives include single-grain baby cereals (oat-only, barley-only), multigrain baby cereals (oat-quinoa-barley blends, ancient-grain blends), gluten-containing cereals (wheat, barley, rye), and gluten-free cereals (oat, corn, quinoa, millet, sorghum). Bran-rich derivatives concentrate Cd and Pb; refined flour fractions carry lower per-mass loads.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include grain-specific origin specifications (per [[ingredients/oat|oat]], [[ingredients/maize|maize]], [[ingredients/quinoa|quinoa]] sourcing guidance); multi-source diversification to reduce concentration in any single grain; supplier-soil verification for emerging-market grain supply.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the per-grain cultivation stage. The Lubumbashi pot-trial work by [[sources/katebe2024-vegetables-lubumbashi|Katebe 2024]] documents organocalcareous soil amendments as a Cd-and-Pb transfer-reduction lever in contaminated soils. Fertilizer-input audit (DAP/urea use is a documented Pb/Cd source per [[sources/getu2022-heavy-metals-cereals-ethiopia|Getu 2022]]).

**Processing levers** ([[mitigation/processing]]) include milling-fraction specifications (white-flour vs whole-grain choices for the Cd-concentrating-bran trade-off); equipment material specification.

**Formulation levers** ([[mitigation/formulation]]) are dominant: multigrain formulations dilute per-grain analyte concentrations; non-rice substitution avoids the rice-iAs pathway entirely.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, As, Ni testing on incoming grain supply and finished cereal product. ICP-MS is the standard analytical platform; HPLC-ICP-MS speciation for iAs/tAs distinction.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are minor; standard cereal-product packaging specifications apply.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb, Cd, and iAs in infant-and-young-child cereal-based food: iAs 50 ppb (rice and rice-product), Pb 20 ppb, Cd 40 ppb (dry weight). Non-rice cereals fall under broader cereal-grain provisions with different per-analyte limits.
- FDA Closer to Zero baby-food Pb action level: 20 ppb for dry infant cereal applies to non-rice infant cereals.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets cereal-grain category limits.
- EFSA Scientific Opinion on iAs in food ([[sources/efsa-arsenic-contam-2009|EFSA 2009]]) establishes the non-rice-cereal iAs exposure-pathway context.
- Codex CCCF17 ([[sources/codex-cccf17-2024|Codex 2024]]) initiates new work on Cd in foods including cereal grains.
- California Prop 65 ([[regulations/california-prop65]]) Pb and Cd MADLs apply to non-rice cereal products sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
<!-- END: hmi-page-history -->
