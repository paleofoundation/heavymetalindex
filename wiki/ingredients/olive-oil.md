---
type: ingredient
commodity: olive-oil
title: "Olive Oil"
dek: "Oil extracted from olive fruit, available as virgin, refined and pomace grades. Explore the evidence on measured metals, extraction, flavouring and packaging contact."
rail_highlights:
  - label: Key distinction
    text: Olive oil non detects do not establish zero concentrations
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
label: "Olive Oil"
aliases: [extra-virgin-olive-oil, virgin-olive-oil, olive-pomace-oil]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 200
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: 50
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
  tAs:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0.5]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [100, 1500]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-15
  Cr:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
drivers: [seed-source, extraction-method, refining, packaging, storage]
lower_risk_variants: ["[[ingredients/extra-virgin-olive-oil-glass-bottled]]"]
higher_risk_variants: ["[[ingredients/olive-pomace-oil]]", "[[ingredients/flavoured-olive-oil]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-15
sources: 27
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 11
hero_image: /static/heroes/edible-oils-olives-sunflower-seeds.webp
hero_image_alt: "Unmarked bottles and dishes of golden and amber oils, whole olives and sunflower seeds illustrating olive oil ingredient context."
---

# Olive Oil

## Overview

Olive oil is the pressed liquid fraction of olive (Olea europaea) fruit, available in grades from extra virgin (first cold press) through refined olive oil to olive pomace oil (solvent-extracted from the spent pomace). The heavy-metals profile of olive oil is qualitatively distinct from table olives: most of the soil-derived metal load partitions into the pomace and brine during pressing rather than into the oil itself, so olive oil is generally a lower-Cd, lower-Cr commodity than table olives. The dominant heavy-metals concerns for olive oil are lead and cadmium driven primarily by packaging-and-contact-material migration, with a secondary contribution from soil-Pb and atmospheric Pb deposition on the fruit prior to pressing. The sources discussed here span Iran, Cyprus, Spain, Italy, Saudi Arabia, Ireland, Turkey, Brazil, and Morocco, including two systematic reviews ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]], [[sources/silva2025-edible-oils-health-sustainability]]) covering the global olive-oil literature through 2025.

## Why this commodity accumulates heavy metals

Olive oil receives metals through four routes: (1) carryover from the fruit during pressing (a small fraction of the fruit's metal load partitions into the oil; most stays with the pomace and brine); (2) contact with steel and aluminium equipment during pressing, decanting, and bottling; (3) migration from the packaging — tin can solder for tinned product, aluminium for cans and lined containers, lead from low-quality glazed ceramic bottle stoppers or vessel coatings, plasticizer phthalates from PET (an associated concern measured alongside metals in [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates]]); and (4) atmospheric and storage-induced trace addition during shelf life. The Spanish packaging-comparison study found significant differences across six packaging types — glass, PET, tin, porcelain, aluminium, cardboard — with the porcelain and aluminium packages contributing more measurable Pb, Cd, Ni, and Cr to the oil than glass and modern PET ([[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates]]). The Iranian-Italian flavoured-oil work documented higher metal loads in flavoured oil variants (fungi-infused, aroma-vegetable-infused, pepper-infused) than in unflavoured baseline, with the infusion ingredient itself the dominant added-load source ([[sources/ziarati2019-iranian-italian-flavoured-olive-oil]]). Refining (the chemical-and-thermal step that converts virgin olive oil to refined olive oil) modestly reduces metal content through filtration; the magnitude depends on the refining protocol.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=11 | 5–100 | high | [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates\|1]], [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|2]], [[sources/silva2025-edible-oils-health-sustainability\|3]] |
| Cd | n=11 | 1–30 | high | [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates\|1]], [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|2]], [[sources/silva2025-edible-oils-health-sustainability\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=8 | 1–50 | medium | [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates\|1]], [[sources/silva2025-edible-oils-health-sustainability\|2]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|3]] |
| tHg | n=2 | 0–0.5 | low | [[sources/scutarasu2023-heavy-metals-foods-beverages\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Ni | n=7 | 10–200 | medium | [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates\|1]], [[sources/silva2025-edible-oils-health-sustainability\|2]], [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|3]] |
| Al | n=2 | 100–1500 | low | [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Cr | n=6 | 5–100 | medium | [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates\|1]], [[sources/silva2025-edible-oils-health-sustainability\|2]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The sources discussed here span producer and consumer markets: producer countries (Spain, Italy, Cyprus, Turkey, Morocco), major consumer countries (Iran, Saudi Arabia, Brazil, Ireland), and two systematic reviews synthesising the global literature. The Iranian commercial-vs-traditional comparison in Gonbad-Kavus found measurable Pb and Cd across both commercial and traditional production with no consistent advantage to either ([[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]). The Cypriot Morphou-Lefka cohort (n=27, single harvest) reported five-metal panels with detection across all five for at least some samples ([[sources/kabaran2020-health-risk-olive-oil-cyprus]]). The Spanish packaging-comparison work (n=18, multi-harvest, six packaging types) is the most analytically rigorous packaging-effect dataset ([[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates]]). The Iranian-Italian flavoured-oil comparison (n=480 across three seasons) is the largest single dataset for the flavoured-vs-unflavoured comparison, finding flavoured product elevation across Pb, Cd, Ni, and tAs ([[sources/ziarati2019-iranian-italian-flavoured-olive-oil]]). The Saudi market survey (n=161 across seven oil types) places olive oil's Pb-Cd profile in context of competing edible oils, finding olive oil broadly comparable to other vegetable oils on Pb and Cd and below the cadmium and lead recommended-daily-intake-derived limits ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]). The two systematic reviews ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]], [[sources/silva2025-edible-oils-health-sustainability]]) consolidate the wider literature without contradicting these primary findings.

## Processing effects

Cold pressing (extra virgin) is the cleanest extraction method for the metal-retention question: most of the soil-derived metal load partitions into the pomace and brine, leaving the oil with a relatively low baseline metal load relative to the parent fruit. Refining (the conversion of virgin oil to refined oil through neutralisation, bleaching, and deodorisation) modestly further reduces Pb and Cd through filtration but can introduce Ni from the bleaching-earth contact step. Olive pomace oil — solvent-extracted from the spent pomace — recovers oil from the fraction that carried most of the parent fruit's metal load, so olive pomace oil typically carries higher Pb, Cd, and Ni than virgin or refined olive oil from the same parent fruit. Flavour infusion is the single largest processing-driven metal-increase pathway in the loaded corpus: the [[sources/ziarati2019-iranian-italian-flavoured-olive-oil]] data shows fungi-, aroma-vegetable-, and pepper-infused olive oils consistently carrying higher Pb, Cd, Ni, and tAs than unflavoured baselines, driven by the infusion ingredient itself. Storage in inappropriate packaging (porcelain, aluminium, certain low-grade tin cans) adds measurable Pb, Cd, and Cr over shelf life as documented in the Spanish packaging-comparison work ([[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates]]).

## Ingredient-derivative risk

Extra virgin olive oil in glass packaging is the baseline-lowest-metal-load form. Refined olive oil in glass adds modest Ni from refining-clay contact but reduces other metals. Olive pomace oil concentrates metals from the parent fruit's pomace fraction and is consistently higher across the metals panel. Flavoured olive oils carry the infusion ingredient's metal load on top of the base oil's; herb-and-spice-infused variants inherit the herb-and-spice-page metal profile ([[ingredients/dried-herbs]], [[ingredients/spices]]). Olive-oil-based cosmetics and dietary supplements draw on the same supply chain and inherit the same packaging-mediated risks. Olive oil sold in PET, aluminium, tin, ceramic, or cardboard containers should be evaluated against the Spanish packaging-comparison data for the relevant container class.

## Mitigation options

### Sourcing levers

Source from producer regions and individual mills with documented heavy-metals screening at harvest and post-pressing. Single-origin (estate-bottled) olive oils provide stronger supply-chain transparency than blended commodity-grade oils. Specifying compliance with Codex Alimentarius Standard 33-1981 (olive oils and pomace oils) heavy-metals provisions and EU Regulation 2023/915 limits at the supplier level is the standard intervention. Avoid sourcing from production regions with known industrial-corridor or leaded-fuel-corridor soil contamination history.

### Agronomic levers

Soil pH management around 6.5–7.0 maintains Pb in poorly-bioavailable forms in the olive grove. Avoidance of phosphate fertilisers with elevated Cd impurity reduces ongoing Cd loading into the grove soil. Irrigation water quality matters where groundwater carries dissolved Cd or Ni. Most agronomic levers are upstream of the brand and require supplier specification rather than direct intervention.

### Processing levers

Cold pressing (extra virgin) is preferred over solvent extraction (pomace oil) for the metal-retention reason above. Refining with food-grade-certified bleaching earth and Ni-screened catalyst supplies reduces the refining-Ni risk. Avoid flavour infusion when the infusion ingredients have not themselves been heavy-metals-screened.

### Formulation levers

For branded blends, specifying maximum inclusion ratios for known higher-metal grades (olive pomace oil, flavour-infused variants) shifts the finished-product metal load.

### Testing and QC levers

Lot-level ICP-MS testing of finished oil with detection floors of ≤ 5 ppb for Pb and ≤ 1 ppb for Cd is the standard intervention; the Spanish packaging-comparison work demonstrates that modern ICP-MS protocols achieve these floors reliably ([[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates]]). Testing should be performed in the finished container (rather than only at fill) when packaging-migration is a concern, particularly for porcelain or aluminium packaged product.

### Packaging and storage levers

Glass packaging is the baseline-cleanest option per the Spanish packaging-comparison data. Modern PET is comparable to glass on the metals panel (though has separate phthalate concerns). Aluminium, porcelain, and certain tin cans showed measurably higher migration of Pb, Cd, Ni, and Cr into the oil over storage in the Spanish data ([[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates]]). Avoid lead-glazed ceramic decanters for consumer-facing service or storage. Verify any ceramic packaging against EU Regulation 84/500/EEC or 21 CFR 173.310 for ceramicware lead leaching.

## Regulatory limits that apply

The Codex Alimentarius Standard for Olive Oils and Olive Pomace Oils (CXS 33-1981, revised 2017) sets specific heavy-metals provisions for olive oils: iron 3.0 mg/kg max, copper 0.1 mg/kg max (virgin oils) / 0.4 mg/kg (refined). EU Regulation 2023/915 sets the lead maximum for "oils and fats" (a category that includes olive oil) at 0.10 mg/kg; the EU lead limit for olive oil specifically aligns with this general fats-and-oils category. For arsenic and cadmium, the EU and Codex apply general-food contaminant limits rather than olive-oil-specific maxima. The FDA has not established an olive-oil-specific action level for the standard heavy-metals panel; FDA's general adulteration framework applies. The Cypriot health-risk study found Pb at Morphou and Lefka olive oils below the EU 0.10 mg/kg fats-and-oils Pb maximum on average but with individual samples approaching the limit ([[sources/kabaran2020-health-risk-olive-oil-cyprus]]); the Iranian Gonbad-Kavus study found similar regulatory-margin compliance for commercial product and somewhat higher exceedance risk for traditional product ([[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]).

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 378: Oil, olive | tAs | 3 | 0 | ND in all composites | 4 |
| 378: Oil, olive | Cd | 3 | 0 | ND in all composites | 2 |
| 378: Oil, olive | Cr | 3 | 0 | ND in all composites | 130 |
| 378: Oil, olive | Pb | 3 | 0 | ND in all composites | 5 |
| 378: Oil, olive | tHg | 3 | 0 | ND in all composites | 1 |
| 378: Oil, olive | Ni | 3 | 0 | ND in all composites | 60 |
| 378: Oil, olive | U | 3 | 0 | ND in all composites | 2 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review|Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils]]<span class="hmi-ref-meta">González-Torres P, Puentes JG, Moya AJ, and La Rubia MD · Applied Sciences · 2023 · [doi.org/10.3390/app13053020](https://doi.org/10.3390/app13053020)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/silva2025-edible-oils-health-sustainability|Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks]]<span class="hmi-ref-meta">Silva VdS, Arias LVA, Usberti FCS, Oliveira RAd, and Fakhouri FM · Lipidology · 2025 · [doi.org/10.3390/lipidology2040021](https://doi.org/10.3390/lipidology2040021)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates|Food safety in the production of olive oils. Presence of heavy metals and phthalic acid esters using different types of packaging]]<span class="hmi-ref-meta">Charfi A, Moya López AJ, and Sánchez Villasclaras S · Journal of Food Science and Technology · 2026 · [doi.org/10.1007/s13197-025-06246-7](https://doi.org/10.1007/s13197-025-06246-7)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/ziarati2019-iranian-italian-flavoured-olive-oil|Determination of Toxic Metals Content in Iranian and Italian Flavoured Olive Oil]]<span class="hmi-ref-meta">Ziarati P, Mirmohammad Makki F, Vambol S, and Vambol V · Acta Technologica Agriculturae · 2019 · [doi.org/10.2478/ata-2019-0012](https://doi.org/10.2478/ata-2019-0012)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/tayeb2025-olive-corn-oil-iran-pb-cd|Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis]]<span class="hmi-ref-meta">Tayeb J and Movassaghghazani M · Toxicology Reports · 2025 · [doi.org/10.1016/j.toxrep.2025.101922](https://doi.org/10.1016/j.toxrep.2025.101922)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/kabaran2020-health-risk-olive-oil-cyprus|Is there any potential health risk of heavy metals through dietary intake of olive oil that produced in Morphou, Cyprus]]<span class="hmi-ref-meta">Kabaran S, Güleç A, and Besler HT · Progress in Nutrition · 2020 · [doi.org/10.23751/pn.v22i3.8098](https://doi.org/10.23751/pn.v22i3.8098)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population]]<span class="hmi-ref-meta">Ashraf MW · Asian Journal of Chemistry (Uncorrected Proof) · 2012</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/charfi2026-olive-oil-packaging-heavy-metals-phthalates\|Charfi et al. 2026]]. *Food safety in the production of olive oils. Presence of heavy metals and phthalic acid esters using different types of packaging*, Journal of Food Science and Technology | 2026 | Peer-reviewed | Spanish packaging-comparison study across six container types (glass, PET, tin, porcelain, aluminium, cardboard); demonstrates packaging-migration as the dominant adjustable lever |
| 2 | [[sources/abedi2025-edible-oils-bleaching-review\|Abedi et al. 2025]]. *Comparison Between Emerging and Conventional Methods for Edible Oils Bleaching*, Food Science & Nutrition | 2025 | Peer-reviewed | Pb, Cd, Ni, Cr, Co, Al, Cu, Fe occurrence in Narrative review of published literature on industrial and emerging bleaching technologies for edible vegetable oils. No primary measurements;... |
| 3 | [[sources/matei2025-vegetable-oils-romania-gfaas\|Matei et al. 2025]]. *Physicochemical Properties, Trace Elements, and Health Risk Assessment of Edible Vegetable Oils Consumed in Romania*, Applied Sciences | 2025 | Peer-reviewed | RO Pb, Cd, Cu, Cr, Co, Mn, Ni occurrence in 24 edible vegetable oil samples (three samples each of eight oil types: sunflower, grapeseed, extra virgin olive, organic... (n=24) |
| 4 | [[sources/ntigoroku2025-delta-state-edible-oils-metals\|Ntigoroku et al. 2025]]. *Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria*, Journal of Applied Sciences and Environmental Management | 2025 | Peer-reviewed | NG Cd, Cr, Pb, Cu occurrence in Twenty edible vegetable oil samples purchased from major markets in Delta State, Nigeria, grouped as sunflower oil, soybean... (n=20) |
| 5 | [[sources/sallam2025-olive-oil-libya-traditional-modern\|Sallam et al. 2025]]. *Traditional vs. Modern Olive Oil Extraction in Libya: A Comparative Study of Fatty Acids and Heavy Metal Contamination*, The North African Journal of Scientific Publishing (NAJSP) | 2025 | Peer-reviewed | LY Pb, Cd, tAs, tHg occurrence in Olive oil and olive mill wastewater (OMWW) collected from one traditional (manual/mechanical pressing, no temperature control or centrifugation)... (n=12) |
| 6 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | Systematic review through September 2025 covering heavy metals and PAHs in 35 edible-oil studies; current global synthesis |
| 7 | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|Tayeb et al. 2025]]. *Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis*, Toxicology Reports | 2025 | Peer-reviewed | Iranian commercial-vs-traditional olive oil Pb and Cd occurrence with intake risk analysis (n=30 olive oil) |
| 8 | [[sources/lin2024-edible-oils-taiwan-12-metals\|S-T et al. 2024]]. *Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan*, JSFA Reports | 2024 | Peer-reviewed | TW tAs, Pb, Cd, Ni, V, Cr, Co, Cu, Fe, Zn, Mn, Ba occurrence in 12 types of refined commercial edible oils (n=25 samples) and 12 types of unrefined (cold-pressed/virgin) commercial edible oils... (n=50) |
| 9 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | Hamadan-province Iranian vegetable oil potentially toxic elements survey including olive oil cross-context |
| 10 | [[sources/bodur2023-olive-oil-inorganic-arsenic-speciation\|Bodur et al. 2023]]. *Spray assisted preconcentration method combined with HPLC - Continuous flow hydride generation - FAAS for inorganic arsenic speciation in olive oil samples*, Journal of Food Composition and Analysis | 2023 | Peer-reviewed | TR iAs occurrence in Two olive oil samples supplied from the local market in Istanbul, Turkiye; real-sample results were non-detect for arsenite/arsenate... (n=2) |
| 11 | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|González-Torres et al. 2023]]. *Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils*, Applied Sciences | 2023 | Peer-reviewed | Systematic review of 35 vegetable oil types from 24 countries (2015-2022 literature); global synthesis of the olive-oil metals profile |
| 12 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 13 | [[sources/saf2023-omw-fractions-uf-nf-agroecological\|Saf et al. 2023]]. *Investigation of the agroecological applications of olive mill wastewater fractions from the ultrafiltration-nanofiltration process*, Journal of Environmental Management | 2023 | Peer-reviewed | MA/FR Fe occurrence in Olive mill wastewater (OMW) collected from a semi-modern three-phase centrifugation mill in Marrakech, Morocco; fractionated by 150 kDa... |
| 14 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | Broad-context heavy-metals-in-foods review; olive oil cited within food-system metals overview |
| 15 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 16 | [[sources/kabaran2020-health-risk-olive-oil-cyprus\|Kabaran et al. 2020]]. *Is there any potential health risk of heavy metals through dietary intake of olive oil that produced in Morphou, Cyprus*, Progress in Nutrition | 2020 | Peer-reviewed | Cypriot Morphou-Lefka olive oil five-metal panel (Pb, Cd, tAs, Ni, Cr); dietary intake survey n=500 |
| 17 | [[sources/liang-yang2019-olive-leaves-cu-zn-stress\|Liang et al. 2019]]. *Effects of Zinc and Copper Stress on Antioxidant System of Olive Leaves*, IOP Conference Series: Earth and Environmental Science | 2019 | Peer-reviewed | CN Cu, Zn occurrence in Annual Olea europaea L. cv. 'Foao' cutting seedlings (plant height ~55-65 cm, soil weight ~3 kg per pot)... (n=50) |
| 18 | [[sources/luka2019-northern-cyprus-olive-oil-metals\|Luka et al. 2019]]. *Investigation of trace metals in different varieties of olive oils from northern Cyprus and their variation in accumulation using ICP-MS and multivariate techniques*, Environmental Earth Sciences | 2019 | Peer-reviewed | CY Cu, Cd, Pb, Cr, tAs, Ni occurrence in Fifteen olive-oil observations from northern Cyprus, including oils from olives harvested from the ground, olives harvested directly from... (n=15) |
| 19 | [[sources/ziarati2019-iranian-italian-flavoured-olive-oil\|Ziarati et al. 2019]]. *Determination of Toxic Metals Content in Iranian and Italian Flavoured Olive Oil*, Acta Technologica Agriculturae | 2019 | Peer-reviewed | Flavoured-vs-unflavoured olive oil Pb, Cd, Ni, tAs comparison across n=480 samples; demonstrates infusion-ingredient as added-load pathway |
| 20 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish total-diet-study olive oil aluminium and broader-eight-metal occurrence in the consumed-food panel |
| 21 | [[sources/llorent-martinez2014-olive-oil-extraction-metals-fate\|Llorent-Martínez et al. 2014]]. *Quantitation of Metals During the Extraction of Virgin Olive Oil from Olives Using ICP-MS after Microwave-assisted Acid Digestion*, Journal of the American Oil Chemists' Society | 2014 | Peer-reviewed | ES/EU Al, V, Cr, Fe, Co, Ni, Cu, tAs, Cd, Sb, Pb occurrence in Picual, Hojiblanca, and Arbequina olive fruits collected January 2012/13 from an irrigated orchard in Jaén (Andalusia), Spain; analyzed... |
| 22 | [[sources/acar2012-vegetable-oils-olives-turkey-etaas\|Acar 2012]]. *Evaluation of cadmium, lead, copper, iron and zinc in Turkish dietary vegetable oils and olives using electrothermal and flame atomic absorption spectrometry*, Grasas y Aceites | 2012 | Peer-reviewed | TR Pb, Cd, Cu, Fe, Zn occurrence in 53 vegetable oil samples (8 soybean, 12 sunflower, 8 flower-seed, 8 nut, 8 corn, 9 olive) and 70... (n=123) |
| 23 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | Saudi market survey across 161 vegetable oil samples including 27 olive oil; positions olive oil in context of competing edible oils |
| 24 | [[sources/zhu2011-edible-vegetable-oils-china-8-metals\|Zhu et al. 2011]]. *Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China*, Food and Chemical Toxicology | 2011 | Peer-reviewed | CN Cu, Zn, Fe, Mn, Cd, Ni, Pb, tAs occurrence in 109 commercial edible vegetable oil samples purchased from Chinese supermarkets during 2009-2010: 13 soybean, 12 corn, 14 peanut,... (n=109) |
| 25 | [[sources/la-pera2010-sicily-olive-oil-metals-selenium\|La et al. 2010]]. *Classification of Sicilian Olive Oils According to Heavy Metal and Selenium Levels Using Canonical Discriminant Analysis (CDA)*, Olives and Olive Oil in Health and Disease Prevention (Elsevier, ISBN 978-0-12-374420-3), Chapter 18, pp. 155–163 | 2010 | Book chapter | IT Pb, Cd, Cu, Zn, Se occurrence in 49 virgin olive oil samples from three Sicilian PDO/PGI cultivars (Nocellara del Belice n=18; Biancolilla n=18; Cerasuola n=13)... (n=49) |
| 26 | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|Pehlivan et al. 2008]]. *Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)*, Grasas y Aceites | 2008 | Peer-reviewed | Turkish vegetable oil ICP-AES heavy-metals data including olive oil; older protocol but representative Turkish market data |
| 27 | [[sources/chen2001-edible-fats-oils-arsenic\|Chen et al. 2001]]. *Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer*, Journal of Food and Drug Analysis | 2001 | Peer-reviewed | TW tAs occurrence in Twenty-one market samples of edible fats and oils in Taiwan, including peanut oil, sesame oil, olive oil, sunflower... (n=21) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [f359bb9365](https://github.com/paleofoundation/heavymetalindex/commit/f359bb9365) | 2026-09-09 | correction | Narrative text revised |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 7 sources removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 7 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
