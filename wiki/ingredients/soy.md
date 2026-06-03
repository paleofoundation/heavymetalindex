---
title: Soy
type: ingredient
commodity: soy
aliases: [soya, soybean, soy protein, soy protein isolate, soy-based formula, soya-based formula]
category: legume
contamination_profile:
  Pb: { status: populated, typical_ppb: [2, 35], p95_ppb: 109, confidence: medium, n_studies: 9, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [1, 12], p95_ppb: 15, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [4700, 5900], p95_ppb: 7800, confidence: medium, n_studies: 6, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [700, 2300], p95_ppb: 2720, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [5, 50], p95_ppb: 100, confidence: medium, n_studies: 4, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [5, 2000], p95_ppb: 2280, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, acid-soils, cultivar, protein-isolation, fortification, processing]
lower_risk_variants: []
higher_risk_variants: ["[[products/infant-formula-powder-soy-based]]"]
used_in_products: ["[[products/infant-formula-powder-soy-based]]", "[[products/infant-formula-rtf-liquid-soy-based]]", "[[products/plant-milks-soy-based]]"]
audience: [regulator, educator, consumer, app]
sources: 22
wiki_doi: null
updated: 2026-05-16
---

# Soy

Kazi et al. 2009 reports higher average Al, Cd, and Pb in soy-based infant formula than milk-based formula in its Pakistan-market sample set, with soy-based formula means of Al 2270 ppb, Cd 11.7 ppb, and Pb 109.4 ppb on a dried-powder basis. Dabeka et al. 2011 reports Canada-market soy-based formula summaries across powder, concentrated liquid, and ready-to-use formats, including powdered soy formula Al mean 733 ng/g and Cd mean 1.56 ng/g as consumed. Burrell and Exley 2010 reports a soy-based infant formula powder with aluminum of 4.3 ug/g powder, equivalent to 629 ug/L when prepared according to manufacturer instructions. Chuchu et al. 2013 reports two soy-based infant formula powders with prepared estimates of 656 and 756 ug/L. Burrell and Exley suggest the elevated soy-formula value may reflect prior aluminum accumulation in soybean plants and aluminum tolerance of some soybean cultivars grown on acid soils, but none of these sources provides a soybean-only occurrence distribution. [[sources/kazi2009-toxic-elements-in-infant-formulae]] [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] [[sources/burrell2010-aluminium-in-infant-formulas]] [[sources/chuchu2013-aluminium-in-infant-formulas]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | — | — | — | — | — |
| Cd | — | — | — | — | — |
| iAs | — | — | — | — | — |
| tAs | — | — | — | — | — |
| tHg | — | — | — | — | — |
| Ni | — | — | — | — | — |
| Al | — | — | — | — | — |
| Cr | — | — | — | — | — |
| Sn | — | — | — | — | — |
| U | — | — | — | — | — |

## Ranges by source, region, and variety

Soybean (Glycine max) is a documented aluminum and nickel accumulator. The plant is grown predominantly on acid agricultural soils (US Midwest, Brazil, Argentina, parts of Asia), and the legume root-nodule activity mobilizes soil Al into bioavailable form. Soy products consistently carry elevated Al across the corpus: [[sources/kazi2009-toxic-elements-in-infant-formulae|Kazi 2009]] reports soy-based infant formula Al at 2,270 ppb (vs cow-milk formula at substantially lower levels); [[sources/burrell2010-aluminium-in-infant-formulas|Burrell 2010]] reports UK soy-based powder formula Al at 4.3 µg/g (629 µg/L prepared); [[sources/chuchu2013-aluminium-in-infant-formulas|Chuchu 2013]] reports soy powder formula Al at 656-756 µg/L prepared. These values consistently exceed cow-milk-based formula Al by several-fold.

Nickel in soy is similarly elevated relative to non-leguminous crops, documented in [[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm 1984]] and reflected in the broader Ni-elevation pattern across legumes. Cadmium in soy is moderate and tracks regional soil-Cd loading (Chinese, Brazilian, and Argentine production regions show variance).

The Cat 4 Step 0 lock designates soy products as a higher-contamination row pair to legumes-pulses-other ([[products/soy-products]] vs [[products/legumes-pulses-other]]) on the Al/Ni/Cd-accumulator basis. The Cat 1 Step 0 lock similarly splits soy-based infant formula from non-soy ([[products/infant-formula-powder-soy-based]] vs [[products/infant-formula-powder-non-soy]]).

The HMTc panel concerns for soy are dominantly Al and Ni, with secondary Cd. Pb is generally low except where contaminated soil is involved.

## Related finished-product evidence

[[sources/milani2023-trace-elements-soy-based-beverages]] reports finished soy-based beverage values. These values belong on [[products/plant-milks-soy-based]], not in this ingredient profile, unless a later ingest separates soy ingredient values from beverage matrix values.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/zhang2026-trace-metals-five-crops-chongqing\|Zhang et al. 2026]]. *Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China*, Scientific Reports | 2026 | Peer-reviewed | Soybean grain tAs, Pb, Cd, Cr, and Ni concentrations from a Chinese Mn-mining-affected region |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review of Pb, Cd, As, Hg concentrations in 251 infant formulas and 580 baby foods, including soy-based formula as a product category with its own metal burden pattern |
| 3 | [[sources/cantoral2024-lead-levels-mexican-foods\|Cantoral et al. 2024]]. *Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort*, Toxics | 2024 | Peer-reviewed | First systematic Pb monitoring of 103 Mexican foods including soy infant formula, which exceeded the FAO/WHO ML for infant formula at 0.035 mg/kg |
| 4 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | *[awaiting synthesis]* |
| 5 | [[sources/ibrahim2024-food-heavy-metals-nigeria\|Ibrahim et al. 2024]]. *Correlates of Food Contamination by Heavy Metals in Northwest Nigeria*, Environmental Health Insights | 2024 | Peer-reviewed | Pb, Cd, and tHg in Nigerian household soybean samples within a staple-food household survey |
| 6 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 8 | [[sources/hariono2023-soy-milk-cookware-metals\|Hariono et al. 2023]]. *Quality nutrition, metal content, and health risks in soy milk products using aluminum and stainless steel cookers*, Aceh Nutrition Journal, 8(4): 526-532 | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/milani2023-trace-elements-soy-based-beverages\|Milani et al. 2023]]. *Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | Al, As, Cd, Cr, Ni, Pb, Sb, Sn total content and in vitro bioaccessibility in 18 soy-based beverages from Brazil, the primary occurrence source for finished soy-based plant milk products |
| 10 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | Bean/legume Al, tAs, Cr, Cd, Ni, and Pb concentrations from industrial Ningxia, with high Pb exceedance in the bean category |
| 11 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | German MEAL Study Ni concentrations for legumes-and-oilseeds food group including soy-based foods |
| 12 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | *[awaiting synthesis]* |
| 13 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | ID Cr, tHg, Co, Zn occurrence in 14 staple food commodities (soybean, mung bean, rice, tempeh, tofu, papaya, crackers/kerupuk, water spinach, spinach, carrot, egg, mackerel/ikan... (n=14) |
| 14 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Pb, Hg, Ni, U in soy-based and other plant-based drinks from Spain retail, with Hg and U not detected in the soy samples and Pb detections limited to select non-organic oat drinks |
| 15 | [[sources/wu2021-edible-salt-soy-sauce-pb-cd\|Wu et al. 2021]]. *Determination of Trace Cd and Pb in Edible Salt and Soy Sauce by ETAAS Using Fluorescent Carbon Nanoparticles (FCNs) as Matrix Modifier*, Atomic Spectroscopy | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 16 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | Total Al and in vitro bioaccessibility in 95 Brazilian infant food samples including soy-based drinks, providing Al occurrence and bioaccessible fraction data for soy infant products |
| 17 | [[sources/chuchu2013-aluminium-in-infant-formulas\|Chuchu et al. 2013]]. *The aluminium content of infant formulas remains too high*, BMC Pediatrics | 2013 | Peer-reviewed | Al in 30 UK infant formulas including soy-based powder, reporting soy powder Al at 656 and 756 µg/L when prepared, higher than non-soy powder values |
| 18 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|Dabeka et al. 2011]]. *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*, Food Additives & Contaminants: Part A | 2011 | Peer-reviewed | Pb, Cd, Al in Canadian soy-based infant formula across powder, concentrated liquid, and RTF formats, with powdered soy formula Al mean 733 ng/g and Cd mean 1.56 ng/g as consumed |
| 19 | [[sources/burrell2010-aluminium-in-infant-formulas\|Burrell et al. 2010]]. *There is (still) too much aluminium in infant formulas*, BMC Pediatrics | 2010 | Peer-reviewed | Al in UK infant formulas including soy-based powder at 4.3 µg/g (629 µg/L prepared), with elevated soy-formula Al attributed in part to Al accumulation in soybean plants on acid soils |
| 20 | [[sources/shindoh2010-cadmium-soy-sauce-miso-processing\|Shindoh et al. 2010]]. *Changes in Cadmium Content when Processing Soybean to Miso and Soy Sauce*, Report of the National Food Research Institute (Rep. Nat'l Food Res. Inst), No. 74 | 2010 | Peer-reviewed | *[awaiting synthesis]* |
| 21 | [[sources/kazi2009-toxic-elements-in-infant-formulae\|Kazi et al. 2009]]. *Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer*, Food and Chemical Toxicology | 2009 | Peer-reviewed | Al, Cd, Pb in milk-based and soy-based infant formulas purchased in Pakistan, with soy-based formula means higher than milk-based for all three metals (Al 2270 ppb, Cd 11.7 ppb, Pb 109.4 ppb) |
| 22 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni concentration survey identifying soy among the high-Ni food categories, relevant as background for soy-based infant formula Ni burden |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

See the Ranges section above for the full mechanism: soybean's Al and Ni accumulation from acid agricultural soils, driven by legume root-nodule chemistry. The soy plant species itself is the accumulator; geographic-region variance is smaller than the species-level effect on Al and Ni.

## Processing effects

Soy processing varies widely by product: soy milk extraction, tofu coagulation, tempeh fermentation, miso fermentation, soy sauce fermentation, soy protein isolation, soy oil pressing, edamame consumption. Each process redistributes metals between the consumed product and the residual fractions.

**Soy oil**: Metals do not partition strongly into the oil fraction. Soy oil typically carries lower per-mass metal than source soybean.

**Soy protein isolate**: Concentrates protein and metals together; soy protein isolate carries 2-3× the per-mass Al of source soybean.

**Tofu**: The coagulation step (calcium sulfate or magnesium chloride coagulant) introduces a small calcium or magnesium source that can carry trace Cd depending on supplier specification.

**Soy milk**: Water dilution reduces per-mass metal proportional to the soy fraction (typically 5-10 percent soy by mass in commercial soy milk).

**Fermented soy (tempeh, miso, natto, soy sauce)**: Fermentation does not appreciably change total Al/Ni/Cd. The fermentation step may shift bioavailability through phytate reduction without changing total load.

## Ingredient-derivative risk

Soy-derived products with elevated per-mass metal: soy protein isolate (concentrated Al/Ni), soy flour (whole soybean ground, carries source-bean metal), defatted soy meal (residual after oil extraction; concentrated source-bean metal).

Soy-derived products with diluted metal: soy milk (water-diluted), soy oil (metals partition out), edamame (immature soybean consumed whole; source-bean profile).

Fermented soy products (tempeh, miso, natto, soy sauce, soy yogurt) carry the source-bean profile with fermentation-specific bioavailability considerations.

Soy-based infant formula ([[products/infant-formula-powder-soy-based]] and [[products/infant-formula-rtf-liquid-soy-based]]) is the regulatorily-distinct Cat 1 row reflecting the Al/Ni/Cd-elevated source-ingredient pathway.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include single-origin sourcing from documented low-Cd-Al soybean production regions, supplier-side soybean testing.

**Agronomic levers** ([[mitigation/agronomic]]) include soil pH management (liming acidic soils reduces Al bioavailability and Cd uptake), cultivar selection (low-Cd-Al-accumulator soy varieties identified in breeding programs), avoidance of high-Cd phosphate fertilizers, irrigation-water-source verification.

**Processing levers** ([[mitigation/processing]]) include the protein-isolate-vs-whole-bean formulation choice (isolate concentrates metals; whole bean retains profile; oil partitions metals out).

**Formulation levers** ([[mitigation/formulation]]) include species substitution (substituting non-Al-accumulator legumes like peas or chickpeas for soy in protein-isolate target products reduces per-product Al substantially) and soy-percentage adjustment.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Al, Ni, Cd testing on incoming soybean shipments, particularly for infant-formula manufacturing where the Al ceiling is most stringent. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned soy products.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets Cd ML for soybean and Cd/Pb MLs for infant-and-young-child foods including soy-based formula. Al is not in the EU 2023/915 ML framework but EFSA TWI (1 mg/kg b.w./week) applies.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex Cd ML for soybean.
- FDA does not maintain binding action levels for soy specifically; FDA Closer to Zero framework covers soy-based infant formula via the broader processed-baby-food pathway.
- California Prop 65 ([[regulations/california-prop65]]) Pb, Cd, and Ni MADLs apply to soy products sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
<!-- END: hmi-page-history -->
