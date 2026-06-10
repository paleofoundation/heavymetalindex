---
title: Cocoa
type: ingredient
commodity: cocoa
aliases: [cocoa beans, cacao, cocoa mass, cocoa liquor, cocoa solids, cocoa powder, cocoa butter, cacao nibs]
category: tree-crop
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [30, 110]
    p95_ppb: 380
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
    basis: "as-sold; cocoa powder and finished chocolate; Abt 2018 (n=144 across cocoa powder, nibs, dark chocolate, milk chocolate); Hands 2024 (n=72 dark chocolate and cocoa products, 2014-2022 multi-year)"
    notes: "Cocoa powder mean 110 ppb (Abt 2018); dark chocolate mean ~30 ppb; cocoa nibs ~3 ppb. Pb primarily processing-side (post-harvest, transport, manufacturing) per Abt 2020 mechanism review. Range 0 to 380 ppb across the 144-sample dataset."
  Cd:
    status: populated
    typical_ppb: [200, 990]
    p95_ppb: 3150
    confidence: high
    n_studies: 32
    last_reviewed: 2026-05-16
    basis: "as-sold; cocoa powder and cocoa nibs; Abt 2018 (n=144 US-market); Meter 2019 (LAC review); Thomas 2023 (Peru n=2,194 farms); Hands 2024 (US multi-year); Romero-Estevez 2019 (Ecuador n=9 provinces)"
    notes: "Cocoa powder mean 700 ppb (Abt 2018); 100% cocoa powder mean 990 ppb. LAC-origin product significantly higher than African-origin. Driven by soil geochemistry (Andean volcanic) per Scaccabarozzi 2020 and Barraza 2019 isotope work; not processing-driven. Range 4 to 3150 ppb across primary datasets."
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [10, 35]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [8200, 12000]
    p95_ppb: null
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [5000, 10000]
    p95_ppb: null
    confidence: medium
    n_studies: 5
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
  tAs:
    status: populated
    typical_ppb: [50, 100]
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
    last_reviewed: 2026-05-12
drivers: [soil-uptake, geography, volcanic-soils, variety, processing, fermentation]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/cocoa-powder]]", "[[ingredients/high-cocoa-solid-dark-chocolate]]"]
used_in_products: ["[[products/chocolate]]", "[[products/cocoa-beverages]]", "[[products/cocoa-baked-goods]]", "[[products/confectionery]]", "[[products/baby-food-flavor]]", "[[products/nutritional-supplements]]"]
audience: [regulator, educator, consumer, app]
sources: 40
updated: 2026-05-16
---

# Cocoa

Cocoa is identified by [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] as the specific commodity responsible for a 2019-data-driven upward revision of dietary cadmium exposure estimates for children aged 0.5 to 12, with cocoa-inclusive total dietary exposure reaching 96 percent of the JECFA provisional tolerable monthly intake in that age group. The cocoa-specific Codex Code of Practice ([[sources/codex-cxc-81-2022|CXC 81-2022]]) is the load-bearing primary source for the cocoa-cadmium mitigation pathway and is referenced from the Mitigation options section below.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=11 | 30–110 | high | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/codex-cccf17-2024\|3]] |
| Cd | n=32 | 200–990 | high | [[sources/jaramillo-mazo2026-cacao-cd-bacteria\|1]], [[sources/vega-jara2025-cocoa-cd-mitigation-amf-biochar\|2]], [[sources/garciaporras2025-cadmium-cacao-farmland\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=6 | 50–100 | medium | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/codex-cccf17-2024\|3]] |
| tHg | n=4 | 10–35 | medium | [[sources/codex-cccf17-2024\|1]], [[sources/mancuso2024-food-contamination-cvd\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| Ni | n=8 | 8200–12000 | medium | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]], [[sources/bfr2022-nickel-dietary-intake-germany-meal\|2]], [[sources/efsa-nickel-contam-2020\|3]] |
| Al | n=5 | 5000–10000 | medium | [[sources/efsa2021-aluminium-food-qa\|1]], [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|2]], [[sources/fechner2019-cocoa-origin-al-cd-exposure\|3]] |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Cocoa trees (Theobroma cacao) take up cadmium from soil through their root system. Soil cadmium concentrations in several major cocoa-producing regions, particularly parts of Latin America (Ecuador, Peru, Colombia, the Dominican Republic), are elevated either by natural geology (volcanic soils, cadmium-rich parent materials) or by historical agricultural amendments. Regional variation in finished-cocoa cadmium concentrations is substantial, and the 2019 occurrence data submitted to JECFA showed higher mean cadmium concentrations in cocoa products than had been recognized in the earlier 2013 JECFA assessment, driven in part by broader geographical sampling.

## Ranges by source, region, and variety

The defining feature of cocoa cadmium is order-of-magnitude geographic variation driven by underlying soil-Cd distribution. West African origins (Ghana, Côte d'Ivoire, Nigeria) cluster at the lower end: typical cocoa-solids Cd in the 100-300 ppb range, documented across multiple market surveys including [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]] of US-market chocolate. Latin American and Caribbean (LAC) origins cluster at the higher end: typical cocoa-solids Cd in the 600-1,500 ppb range, with sub-regional variation driven by altitude, soil pH, and the underlying volcanic and sedimentary substrate. The [[sources/meter2019-cadmium-cacao-lac-review|Meter 2019]] LAC review and the [[sources/thomas2023-peru-cacao-cd-distribution|Thomas 2023]] Peru-specific multi-region dataset (n=2,194 samples across 563 farms in 13 Peruvian departments) establish the within-region segmentation at farm scale: Tumbes, Piura, Amazonas, and Loreto are the primary high-Cd zones in Peru, with high-altitude Ecuadorian and Colombian regions also implicated.

Within a sourcing region, varietal and rootstock differences contribute another fold of variation. The [[sources/sounigo2023-climaloca-cocoa-cadmium|ClimaLOCA project]] documents multi-country germplasm screening that identified low-Cd accessions in Colombia, Ecuador, and Peru, demonstrating that varietal selection can shift bean Cd content by 30-50 percent within a single sourcing region.

Lead in cocoa shows a different geographic pattern. Bean Pb is dominated by post-harvest contamination (drying-yard contact with soil, processing-equipment metal contact, storage and shipping contamination) rather than by soil Pb concentration. The [[synthesis/us-chocolate-lead-temporal-decline|US chocolate Pb temporal decline]] across 2014-2022 reflects industry-wide tightening of post-harvest handling under California Prop 65 enforcement pressure, not a change in source-region selection. The Cd-Pb decoupling means brand QA mitigation strategy differs: Cd is sourcing-driven, Pb is process-driven.

The JECFA 91st meeting monograph aggregates cocoa cadmium across the 17 GEMS/Food cluster diets and establishes the basis for the 2022 upward revision of children's dietary Cd exposure estimates. The cluster-level aggregation in JECFA is appropriate for the international exposure-assessment use case but is coarser than what brand QA needs; per-region and per-farm data come from the underlying primary literature cited above.

## Processing effects

Cocoa processing concentrates or redistributes cadmium between the defatted solids and the cocoa butter fraction. The key transformations:

**Fermentation** (post-harvest, pre-drying) affects cadmium content modestly. Mucilage-draining interventions specified in [[sources/codex-cxc-81-2022|CXC 81-2022]] section 4.3 (12, 24, or 36 hour draining before fermentation) reduce bean Cd without affecting organoleptic quality. *Saccharomyces cerevisiae* inoculation during fermentation has been shown experimentally to absorb cadmium and reduce bean Cd content.

**Drying** does not change bean Cd content meaningfully but introduces Pb exposure risk where beans contact soil. Drying on solid surfaces and to under 8 percent moisture is the operational specification per CXC 81-2022.

**Roasting, winnowing, and grinding** do not change Cd content but redistribute weight. Roasted nibs (post-shell removal) carry the same Cd concentration as the unfermented bean kernel approximately; winnowing removes the cocoa-shell fraction which can carry trace Pb from external contamination.

**Cocoa butter extraction** is the dominant concentration-effect step. Pressing the roasted cocoa liquor separates approximately half the mass as cocoa butter and half as defatted cocoa cake (later ground to cocoa powder). Cadmium concentrates into the cake/powder fraction; cocoa butter is approximately an order of magnitude lower in Cd than the source bean. Cocoa powder therefore carries the highest Cd of any common cocoa derivative.

**Alkalization (Dutching)** does not change Cd content but raises pH of finished cocoa powder for color and dispersibility. Alkalized cocoa powder carries the same Cd as the source nib it was made from.

**Conching and tempering** (chocolate manufacture) do not change Cd content. Finished-chocolate Cd is determined by the cocoa-percentage formulation: dark chocolate at 70+ percent cocoa solids carries more Cd than milk chocolate at 30 percent cocoa solids at equal serving size, with the difference tracking linearly with cocoa-solids fraction.

## Ingredient-derivative risk

Derivative products of cocoa redistribute cadmium between cocoa solids and cocoa butter during processing. Cocoa powder carries the highest cadmium concentration of common cocoa derivatives because the manufacturing process concentrates the cadmium in the defatted solids; cocoa butter, by contrast, carries relatively little. Dark chocolate (high cocoa solids) therefore carries more cadmium than milk chocolate at equal serving size. The JECFA 91st meeting finding that cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg body weight per month in European children aged 7 to 11 reflects this concentration effect.

## Mitigation options

Cocoa cadmium mitigation is structured across all four [[mitigation/index|mitigation classes]] and is the second-highest-salience commodity in the wiki's mitigation coverage after rice arsenic. The [[sources/codex-cxc-81-2022|Codex CXC 81-2022 Code of Practice for the Prevention and Reduction of Cadmium Contamination in Cocoa Beans]] is the foundational regulatory document spanning the agronomic, processing, and formulation strategy classes and is the load-bearing primary source for the cocoa-cadmium content on this page.

The levers below are ordered by impact magnitude on bean-level cadmium concentration. Sourcing geography is the single largest lever because the underlying soil-Cd distribution varies by an order of magnitude across producing regions; agronomic interventions move the needle within a sourcing region but rarely overcome the geographic baseline. Pb mitigation follows a different lever order because Pb is primarily processing-side per the [[synthesis/us-chocolate-lead-temporal-decline|US-chocolate-Pb synthesis]] — sourcing-region change moves Pb less than manufacturer-side process control does.

### Sourcing levers (highest Cd impact)

Origin-region selection is the dominant brand-side cadmium intervention in EU markets given the [[regulations/eu-2023-915-cadmium|EU 2023/915]] cocoa cadmium maximum levels. West-African origins (Ghana, Côte d'Ivoire, Nigeria) are documented at order-of-magnitude lower cadmium than parts of Latin America: African-origin product means cluster in the 100-300 ppb range while LAC-origin means cluster in the 600-1,500 ppb range per [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt 2018]] and the [[sources/meter2019-cadmium-cacao-lac-review|Meter 2019]] LAC review. Within Latin America, [[sources/thomas2023-peru-cacao-cd-distribution|Thomas 2023]] documents that altitude and soil-pH segmentation differentiates lower- and higher-cadmium Peruvian production zones at the farm scale (n=2,194 samples across 563 farms in 13 Peruvian departments); Tumbes, Piura, Amazonas, and Loreto are the primary high-Cd zones. Origin-segmented sourcing combined with batch-level Cd testing at intake is the most effective single brand-side lever for cocoa cadmium reduction; conservative magnitude is a 2-to-5-fold cocoa-solids Cd reduction by replacing typical LAC sourcing with West-African sourcing or low-Cd LAC sub-regions.

### Agronomic levers (moderate Cd impact within a sourcing region)

[[mitigation/agronomic|Agronomic mitigation]] for cocoa is dominated by soil pH management (liming at 3 t/ha/year preferably as dolomite to raise pH above 6 immobilizes cadmium in acidic Latin American volcanic substrate per [[sources/codex-cxc-81-2022|CXC 81-2022]] section 4.2.2), cultivar and rootstock selection (low-Cd-bioaccumulation genotypes used in breeding and as grafting rootstocks per [[sources/codex-cxc-81-2022|CXC 81-2022]]; the [[sources/sounigo2023-climaloca-cocoa-cadmium|ClimaLOCA project]] documents multi-country germplasm screening identifying low-Cd accessions in Colombia, Ecuador, and Peru), zinc supplementation under deficient soils (cadmium and zinc compete for plant uptake; zinc sulphate fertilization), biochar amendment (Cd-uptake reduction comparable to and additive with liming per [[sources/vega-jara2025-cocoa-cd-mitigation-amf-biochar|Vega-Jara 2025]]), and avoidance of high-cadmium phosphate fertilizers and apatite/rock phosphate where Cd content is uncertain. Quantified magnitude varies by intervention and site; CXC 81-2022 reports liming as the single most-effective agronomic lever with documented Cd-uptake reductions in the 30-60 percent range across multiple cited studies.

### Processing levers (moderate Cd impact; primary Pb lever)

[[mitigation/processing|Processing mitigation]] for cocoa Cd is dominated by post-harvest fermentation interventions specified in [[sources/codex-cxc-81-2022|CXC 81-2022]] section 4.3: mucilage draining for 12, 24, or 36 hours reduces cadmium concentrations without affecting organoleptic quality, and *Saccharomyces cerevisiae* inoculation during fermentation absorbs cadmium and reduces bean Cd content per experimental studies cited in the CoP. For Pb, drying surface cleanliness (drying on solid surfaces to less than 8 percent moisture, avoiding soil contamination), storage protection from fuel and exhaust contamination, and manufacturing-equipment metal-contact specifications are the primary processing levers and the load-bearing reason the [[synthesis/us-chocolate-lead-temporal-decline|US chocolate Pb declined 2014-2022]] under Prop 65 enforcement pressure.

### Formulation levers (moderate Cd impact via dilution)

[[mitigation/formulation|Formulation mitigation]] for cocoa-containing products includes cocoa-percentage adjustment (lower-cocoa-solids products have correspondingly less cocoa-derived cadmium following a roughly linear dilution; 50 percent cocoa solids has roughly half the Cd of 100 percent cocoa solids), cocoa-origin sourcing realized at the recipe level (a high-cocoa formulation can still hit Cd targets if origin is selected appropriately), and substitution of cocoa butter for cocoa powder where formulation permits (cocoa butter is approximately one order of magnitude lower in cadmium than the defatted solids because Cd concentrates in the protein-and-fiber fraction during cocoa butter extraction).

### Testing and QC levers (detection and exclusion)

Lot-level ICP-MS at intake (in addition to or instead of spot-check post-receipt) gives detection power for Cd at parts-per-billion sensitivity that distinguishes compliant from non-compliant lots before manufacturing commits the lot to product. Third-party testing rather than supplier-attestation is the brand-legal-defensibility lever; supplier attestation gives the certifying brand no independent provenance to defend in litigation. The [[sources/ramtahal2016-cacao-cadmium-trinidad|Ramtahal 2016]] finding that pod and leaf Cd correlate with bean Cd enables pre-harvest agronomic screening for Cd compliance, which moves the lever upstream into the supplier rather than at intake.

### Packaging and storage levers

Not applicable to cocoa Cd or Pb at meaningful magnitude. Cocoa is not canned in tin (Sn not a relevant contamination route), and aluminum-foil contact does not move bean-level metal load. Storage protection from fuel/exhaust contamination per CXC 81-2022 is captured under processing levers above.

## Abt 2018 sample-level occurrence values

[[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]] is the primary FDA U.S.-market occurrence dataset for Cd and Pb in cocoa products. Key per-matrix means below; full ranges and stratification by percent cocoa and by Latin America versus Africa origin are in the source page. The 2020 perspective [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]] cites these values within the broader JECFA-and-Codex regulatory context.

| Matrix | Mean Cd ± SD (mg/kg) | Mean Pb ± SD (mg/kg) |
| --- | ---: | ---: |
| Cocoa powder | 0.70 ± 0.83 | 0.11 ± 0.10 |
| Cocoa nibs | 0.62 ± 0.38 | 0.003 ± 0.004 |

Cd range across all 144 cocoa-and-chocolate samples: 0.004 to 3.15 mg/kg. Pb range: <LOD to 0.38 mg/kg. The 26 cocoa-powder samples with 100 percent cocoa content had a mean Cd of 0.99 ± 0.87 mg/kg. Cd was significantly higher in Latin American product than in African product. These values count as one literature evidence primary source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; Abt 2020 is a secondary citation that does not add new primary data.

## Lead in cocoa

Cocoa carries measurable but lower Pb than Cd, with the strongest signal in cocoa powder rather than finished chocolate. [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]] reports mean Pb in cocoa powder at 0.11 ± 0.10 mg/kg (range below LOD to 0.38 mg/kg across 144 samples), with cocoa nibs at 0.003 ± 0.004 mg/kg, dark chocolate at 0.03 ± 0.02 mg/kg, and milk chocolate at 0.01 ± 0.01 mg/kg. Pb correlated significantly with percent cocoa solids and showed geographic variation (Latin America somewhat higher than Africa) but with a smaller spread than Cd. The 2020 FDA perspective ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]]) frames cocoa Pb as principally anthropogenic-deposition-driven rather than geogenic, in contrast with the largely soil-Cd-driven Cd signal. The U.S. FDA Pb-in-candy guidance recommends a maximum level of 0.1 mg/kg in candy including chocolate candy.

## Nickel in cocoa

Cocoa is the single highest-Ni dietary commodity in the food supply. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] reports cocoa mean Ni at 9.8 µg/g (range 8.2 to 12 µg/g, n=7 samples across the post-1969 literature using AAS or PIXE), the highest mean of any food matrix in their 2,221-sample compilation. Soy beans by comparison average 5.2 µg/g and oatmeal 1.76 µg/g; cocoa sits a full order of magnitude above most dietary staples. The high Ni concentration reflects the cacao tree's high root Ni-uptake capacity from tropical soils combined with processing-equipment contact during cocoa-mass and cocoa-powder manufacture. [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] subsequently confirmed cocoa among the principal dietary Ni sources alongside drinking water, nuts, legumes, and cereals, and calibrated its chronic TDI of 13 µg Ni/kg b.w./day against this matrix mix. Ni in cocoa is also clinically relevant for nickel-sensitized individuals (systemic contact dermatitis flare-ups, SNAS); the EFSA 2020 acute LOAEL of 4.3 µg Ni/kg b.w. for eczematous flare-up reactions identifies cocoa-frequent consumers as one of the at-risk dietary subgroups, and [[sources/pacor2003-nickel-recurrent-aphthous-stomatitis-dbpc|Pacor et al. 2003]] independently confirmed cocoa as the food most consistently aggravating oral nickel-related symptoms (92.6 percent of patients identified cocoa as an aggravating food). Sample-level cocoa Ni concentration distributions from modern speciation studies are still sparse; cocoa Ni surveillance is a continuing priority.

## Aluminum in cocoa

Cocoa is a recognized Al matrix from a combination of plant uptake (cacao tree roots take up Al from acidic tropical soils) and processing-equipment contact (alkalization step in cocoa manufacturing uses alkaline reagents in aluminum-containing vessels in some plants). [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi|Elsheikh et al. 2020]] reports Al in cocoa sweets among the children's-food matrices analyzed in Turabah province, Saudi Arabia (B-tier evidence; Saudi-market specific). Direct sample-level cocoa Al concentration distributions from U.S. or EU markets are not yet loaded on the wiki. The metal warrants a Phase 3b raw/markdown sweep for primary cocoa Al occurrence work.

## Chromium in cocoa

[[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez et al. 2019]] reports that cocoa-containing products consistently show the highest Cr concentrations across the French food categories surveyed: four breakfast cereals containing chocolate ranged 360 to 483 ppb total Cr; a dry chocolate biscuit averaged 103 ppb. The authors note the cocoa-Cr association is "consistent with prior EFSA findings." This is total Cr rather than Cr-VI specifically; the Hernandez paper measures both species, and Cr-VI in cocoa-containing finished products remains a candidate for additional surveillance ingest. The total-Cr signal supports flagging cocoa as a Cr-bearing matrix worth monitoring; whether finished-product Cr-VI fractions are significant requires speciation studies that are not yet loaded.

## Other metals of concern

The remaining HMI-tracked metals on cocoa (iAs, tAs, tHg, MeHg, Sn, U) do not have strong cocoa-specific occurrence evidence in the loaded corpus. Cocoa is not a primary arsenic matrix (rice and seafood dominate the dietary As pathway), is not canned in tin (so Sn is not a cocoa-specific exposure route), and does not carry meaningful Hg or U at population level. These metals remain at status: pending on the contamination_profile.

## Regulatory limits that apply

- [[regulations/jecfa-cadmium-ptmi]] — Not a cocoa-specific limit but the health-based reference value Codex cocoa MLs are aligned against; children 0.5 to 12 can reach 96 percent of the PTMI with cocoa included in total dietary intake ([[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]]).
- [[regulations/codex-cadmium-mls]] / [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — International matrix-specific Cd maximum levels: cocoa powder (100 percent cocoa solids on dry matter basis) 2.0 mg/kg; chocolate ≥70 percent cocoa solids 0.9 mg/kg; chocolate 50 to less than 70 percent cocoa solids 0.8 mg/kg; chocolate 30 to less than 50 percent cocoa solids 0.7 mg/kg; chocolate less than 30 percent cocoa solids (including milk chocolate) 0.3 mg/kg.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum level for cocoa powder placed on the market for the final consumer or as an ingredient in sweetened cocoa powder/powdered chocolate is 0.60 mg/kg (600 ug/kg). Chocolate products are regulated separately by cocoa-solid percentage on [[ingredients/chocolate]].
- [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] — Chronic TDI 13 µg Ni/kg b.w./day; acute LOAEL 4.3 µg Ni/kg b.w. for eczematous flare-up in sensitized individuals. No cocoa-specific Ni ML at international level.
- FDA Pb in candy: recommended maximum level 0.1 mg/kg for candy including chocolate candy ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]] cites the FDA guidance).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/jaramillo-mazo2026-cacao-cd-bacteria\|Jaramillo-Mazo et al. 2026]]. *Integrating natural gradients and controlled assays to reveal bacterial responses to cadmium in Theobroma cacao L., soils*, PLoS One | 2026 | Peer-reviewed | Bacterial community responses to Cd in Colombian cacao soils (n=225 rhizosphere samples, 5 farms), identifying Cd-responsive taxa linked to Cd translocation from soil to beans |
| 2 | [[sources/garciaporras2025-cadmium-cacao-farmland\|García et al. 2025]]. *Addressing Cadmium in Cacao Farmland: A Path to Safer, Sustainable Chocolate*, Agriculture | 2025 | Review | Review of Cd sources, soil-plant uptake factors, and mitigation strategies across LAC cacao farmland, including meta-analysis of 785 soil-plant data points (Colombia, Ecuador, Peru, Honduras, Costa Rica) |
| 3 | [[sources/vega-jara2025-cocoa-cd-mitigation-amf-biochar\|Vega-Jara et al. 2025]]. *Mitigation of Cadmium Accumulation in Cocoa Beans Using Arbuscular Mycorrhizal Fungi, Biochar and Callisia repens*, Folia Amazónica | 2025 | Peer-reviewed | Field trial of AMF (40% Cd reduction), Callisia repens (31% reduction), and biochar (no significant effect) for Cd mitigation in cocoa beans from elevated-Cd soils in Huánuco, Peru |
| 4 | [[sources/bravo2024-cadmium-cacao-arauca\|Bravo et al. 2024]]. *Cadmium in cacao crops and artisanal chocolates in the Arauca Department, Colombia*, Environmental Monitoring and Assessment | 2024 | Peer-reviewed | Cd in cacao seeds (mean 0.78 mg/kg, n=14 farms) and artisanal chocolates (mean 1.10 mg/kg, n=6) across 180 farms in Arauca, Colombia, with north-south gradient driven by proximity to the Andes |
| 5 | [[sources/cantoral2024-cadmium-foodstuffs-mexico\|Cantoral et al. 2024]]. *Dietary Risk Assessment of Cadmium Exposure Through Commonly Consumed Foodstuffs in Mexico*, Foods | 2024 | Peer-reviewed | Cd concentrations in 143 Mexican foodstuffs including cocoa powder (0.289 mg/kg, third highest of all matrices); dietary risk assessment showing school-age children exceed EFSA TWI by 53% |
| 6 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | CCCF17 session report — adopted Cd ML for quinoa and initiated new work extending the cocoa Cd Code of Practice model to rice, cereals, vegetables, fish, and seafood |
| 7 | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|Hands et al. 2024]]. *A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA*, Frontiers in Nutrition | 2024 | Peer-reviewed | US Pb, Cd, tAs occurrence in 72 consumer cocoa-containing products (dark chocolate, cocoa powder, and related products) purchased in the US from retail and... (n=72) |
| 8 | [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|Hands et al. 2024]]. *A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA*, Frontiers in Nutrition | 2024 | Peer-reviewed | Pb, Cd, and As in 72 US retail dark chocolate and cocoa products across four cohort years (2014–2022), showing organic products carry higher Cd and Pb and concentrations declining over time |
| 9 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | EU/global Pb, Cd, iAs, tAs, tHg occurrence in null |
| 10 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 11 | [[sources/marincich2023-cadmium-chocolate-poland\|Marincich et al. 2023]]. *Threat or treat: Exposure assessment and risk characterisation of chemical contaminants in soft drinks and chocolate bars in various Polish population age groups*, EFSA Journal | 2023 | Peer-reviewed | PL/EU Cd occurrence in Multiple chocolate bars from different brands purchased in Warsaw supermarkets, 2022–2023; two matrices: milk chocolate and bitter chocolate |
| 12 | [[sources/sounigo2023-climaloca-cocoa-cadmium\|Sounigo et al. 2023]]. *ClimaLOCA project: Fostering innovations for cadmium reduction in cocoa beans in Latin America*, CATIE (Centro Agronómico Tropical de Investigación y Enseñanza) Conference Proceedings | 2023 | Conference proceedings | ClimaLOCA multi-country germplasm screening and breeding initiative identifying low-Cd cacao accessions in Colombia, Ecuador, and Peru — agronomic mitigation pathway |
| 13 | [[sources/thomas2023-peru-cacao-cd-distribution\|Thomas et al. 2023]]. *The distribution of cadmium in soil and cacao beans in Peru*, Science of the Total Environment | 2023 | Peer-reviewed | Nation-wide Cd distribution in soil and cacao beans across 13 Peruvian departments (n=2,194 samples, 563 farms) — northern departments Tumbes, Piura, Amazonas, and Loreto as primary high-Cd zones |
| 14 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | DE/EU Ni occurrence in 840 food pools from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II,... (n=840) |
| 15 | [[sources/blommaert2022-cd-cacao-translocation\|Blommaert et al. 2022]]. *Cadmium translocation from soil to cacao bean: Isotope fractionation as a tool to assess plant compartmentalization and uptake mechanisms*, Frontiers in Plant Science | 2022 | Peer-reviewed | BE Cd occurrence in Greenhouse pot experiment using Theobroma cacao plants; isotope fractionation and XAS analysis of plant compartments |
| 16 | [[sources/codex-cxc-81-2022\|Codex 2022]]. *Code of Practice for the Prevention and Reduction of Cadmium Contamination in Cocoa Beans (CXC 81-2022)*, FAO and WHO, 2023. Codex Alimentarius Code of Practice No. CXC 81-2022. Joint FAO/WHO Food Standards Programme. Rome. | 2022 | Government report | Codex Code of Practice — foundational mitigation document for cocoa Cd across the full supply chain (soil pH liming, fermentation, drying); load-bearing primary source for the mitigation options section |
| 17 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, MeHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 18 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA 91st meeting Cd dietary exposure assessment; 2019 cocoa occurrence data drove upward revision — cocoa contribution can bring children aged 0.5–12 to 96% of the PTMI |
| 19 | [[sources/wade2022-cacao-cadmium-drivers\|Wade et al. 2022]]. *Drivers of cadmium accumulation in Theobroma cacao L. beans: A quantitative synthesis of soil-plant relationships across the Cacao Belt*, PLOS ONE | 2022 | Peer-reviewed | EC/PE/CO Cd occurrence in 489 site-years from 31 studies across 10 cacao-producing countries; 2,127 observations compiled from systematic literature search (n=2127) |
| 20 | [[sources/efsa2021-aluminium-food-qa\|EFSA 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Safety Authority | 2021 | Government report | EU Al occurrence in General population dietary aluminium exposure, EU context |
| 21 | [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate\|Abt et al. 2020]]. *Perspective on Cadmium and Lead in Cocoa and Chocolate*, Journal of Agricultural and Food Chemistry | 2020 | Peer-reviewed | FDA perspective synthesising Cd and Pb occurrence in cocoa and chocolate, attributing Cd to geogenic LAC soils and Pb to anthropogenic deposition, within the JECFA and Codex regulatory context |
| 22 | [[sources/de-paiva-2020-aluminium-infant-foods-bioaccessibility\|Paiva et al. 2020]]. *Aluminium in infant foods: Total content, effect of in vitro digestion on bioaccessible fraction and preliminary exposure assessment*, Journal of Food Composition and Analysis 90:103493 | 2020 | Peer-reviewed | Al in Brazilian infant foods including cocoa-bearing soy-based drink (2,860 µg/kg); bioaccessibility ranged 0.5–48% across matrices, demonstrating total Al overestimates gut absorption |
| 23 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | EFSA Ni risk assessment establishing TDI of 13 µg/kg bw/day and confirming cocoa as one of the principal dietary Ni sources; acute LOAEL of 4.3 µg/kg bw for eczematous flare-up in sensitised individuals |
| 24 | [[sources/scaccabarozzi2020-cacao-soil-cd-peru\|Scaccabarozzi et al. 2020]]. *Soil, Site, and Management Factors Affecting Cadmium Concentrations in Cacao-Growing Soils*, Agronomy | 2020 | Peer-reviewed | Soil Cd in 40 Peruvian cacao-growing sites (1.1–3.2 mg/kg); higher elevation, alluvial sediments, and Leptosols as primary drivers — management factors not significant |
| 25 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | US/EU/AU Cd occurrence in Review of global literature and FDA Total Diet Study 2014–2016 data for cadmium in food and mitigation interventions |
| 26 | [[sources/barraza2019-ecuador-cacao-cadmium-isotope\|Barraza et al. 2019]]. *Cadmium isotope fractionation in the soil–cacao system in Ecuador: a pilot study*, RSC Advances | 2019 | Peer-reviewed | Cd isotope fractionation across the soil-cacao pathway in Ecuador (3 farms) — isotopic fingerprinting distinguishing geogenic volcanic Cd from anthropogenic phosphate fertiliser Cd in beans |
| 27 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant and toddler TDS — multi-element occurrence (Al, Sb, tAs, Cd, Cr, Ni, Sn) in 291 foods including cocoa- and chocolate-containing products |
| 28 | [[sources/fechner2019-cocoa-origin-al-cd-exposure\|Fechner et al. 2019]]. *Dietary exposure assessment of aluminium and cadmium from cocoa in relation to cocoa origin*, PLoS ONE | 2019 | Peer-reviewed | Al and Cd dietary exposure from cocoa by origin using German Food Monitoring data (n=12,482); P95 concentrations contribute 15% of Al TWI and 14% of Cd TWI per kilogram body weight per week |
| 29 | [[sources/meter2019-cadmium-cacao-lac-review\|Meter et al. 2019]]. *Cadmium in Cacao from Latin America and the Caribbean: A Review of Research and Potential Mitigation Solutions*, Bioversity International / CAF Development Bank of Latin America | 2019 | Government report | Comprehensive Bioversity/CAF review of Cd in LAC cacao — occurrence by origin, drivers, and mitigation; establishes that Ecuador, Peru, Honduras, and Trinidad consistently exceed EU Cd thresholds |
| 30 | [[sources/romero-estevez2019-ecuador-cocoa-cd-ni-pb\|Romero-Estevez et al. 2019]]. *Content and the relationship between cadmium, nickel, and lead concentrations in Ecuadorian cocoa beans from nine provinces*, Food Control | 2019 | Peer-reviewed | Cd, Ni, and Pb in Ecuadorean cocoa beans from nine provinces; Ni most abundant in all samples, Cd exceeds EU 0.8 mg/kg limit in 33%, metals do not correlate — remediating one does not predict co-reduction of others |
| 31 | [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market\|Abt et al. 2018]]. *Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market*, Food Additives & Contaminants: Part B Surveillance | 2018 | Peer-reviewed | FDA primary US-market occurrence dataset — Cd and Pb in 144 cocoa powder, nibs, dark chocolate, and milk chocolate samples; cocoa powder mean Cd 0.70 mg/kg, Pb 0.11 mg/kg; Latin America higher Cd than Africa |
| 32 | [[sources/arevalo-gardini2017-peru-cacao-regional-metals\|Arévalo-Gardini et al. 2017]]. *Heavy metal accumulation in leaves and beans of cacao (Theobroma cacao L.) in major cacao growing regions in Peru*, Science of the Total Environment | 2017 | Peer-reviewed | Cd, Pb, Cr, Ni, and other metals in cacao beans and leaves across 70 Peruvian plantations; >57% of beans exceeded EU Cd limit of 0.8 µg/g, with Amazonas, Piura, and Tumbes as primary exceedance regions |
| 33 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, SCHEER Opinion, European Commission | 2017 | Government report | EU Al occurrence in Review of regulatory opinions and dietary exposure data for children and adults |
| 34 | [[sources/ramtahal2016-cacao-cadmium-trinidad\|Ramtahal et al. 2016]]. *Relationships between cadmium in tissues of cacao trees and soils in plantations of Trinidad and Tobago*, Food and Nutrition Sciences | 2016 | Peer-reviewed | Cd in cacao tissues and soils from 45 Trinidad and Tobago plantations; leaf and pod Cd correlate significantly with bean Cd, enabling pre-harvest screening for Cd compliance before harvest |
| 35 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002 | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples from 15 European countries (2003–2012) (n=18885) |
| 36 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical textbook chapter on Cd toxicology covering toxicokinetics, renal endpoint, carcinogenicity, and risk assessment — provides the health-effects framework underlying regulatory limits cited on this page |
| 37 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA 2009 Cd risk assessment establishing TWI of 2.5 µg/kg bw/week; includes cocoa and chocolate in the European dietary Cd exposure model used to derive the EU regulatory framework |
| 38 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex General Standard — sets matrix-specific Cd MLs cited in the regulatory limits section, including 2.0 mg/kg for 100% cocoa powder and graduated limits by cocoa-solid percentage for chocolate |
| 39 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni content dataset (2,221 samples) reporting cocoa mean Ni at 9.8 µg/g (range 8.2–12.0 µg/g), the highest of any food matrix — primary source for the Nickel in cocoa section |
<!-- END: hmi-source-legend -->
