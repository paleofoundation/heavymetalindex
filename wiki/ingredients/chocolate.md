---
title: Chocolate
type: ingredient
commodity: chocolate
aliases: [dark chocolate, milk chocolate, chocolate liquor, chocolate bar, chocolate confection, couverture]
category: processed-confectionery
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: 380
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [60, 500]
    p95_ppb: 2200
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Ni:
    status: populated
    typical_ppb: [700, 1900]
    p95_ppb: null
    confidence: low
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
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [30, 150]
    p95_ppb: 200
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: [cocoa-solid-fraction, cocoa-origin, formulation]
lower_risk_variants: ["[[ingredients/milk-chocolate]]", "[[ingredients/white-chocolate]]"]
higher_risk_variants: ["[[ingredients/high-cocoa-dark-chocolate]]", "[[ingredients/baking-chocolate]]", "[[ingredients/cocoa-powder-heavy-confections]]"]
used_in_products: ["[[products/chocolate-bars]]", "[[products/chocolate-confections]]", "[[products/baked-goods]]", "[[products/ice-cream]]", "[[products/chocolate-beverages]]", "[[products/nutritional-supplements]]", "[[products/chocolate-coated-snacks]]"]
audience: [regulator, educator, consumer, app]
sources: 19
wiki_doi: null
updated: 2026-05-16
---

# Chocolate

Chocolate is a processed derivative of [[ingredients/cocoa]] and inherits cadmium from its cocoa-solid fraction; cadmium content scales approximately with cocoa-solid percentage and with cocoa origin.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 10–100 | medium | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate\|3]] |
| Cd | n=15 | 60–500 | high | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/bravo2024-cadmium-cacao-arauca\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 30–150 | medium | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| tHg | data gap | — | — | — |
| Ni | n=2 | 700–1900 | low | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|1]], [[sources/flyvholm1984-nickel-content-food-dietary-intake\|2]] |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Chocolate carries cadmium primarily through its cocoa solids, which concentrate cadmium from the cocoa beans during processing (see [[ingredients/cocoa]] for the upstream story). Cocoa butter, the other principal cocoa-derived ingredient in chocolate, carries relatively little cadmium. As a consequence, dark chocolate (higher cocoa-solid percentage) carries more cadmium per serving than milk chocolate (lower cocoa-solid percentage, higher milk and sugar fractions), and baking or confectionery chocolate made from cocoa powder can be particularly cadmium-heavy. White chocolate, which contains cocoa butter but not cocoa solids, carries minimal cadmium from the cocoa pathway.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 of approximately 140,000 European samples reported a mean cadmium concentration in chocolate of 0.090 mg/kg, which is one-half the mean reported for cocoa (0.178 mg/kg), consistent with the dilution from milk, sugar, and cocoa butter in typical chocolate formulations. Dark-chocolate-specific values are higher; brand and origin variation is substantial and is the subject of Consumer Reports and HBBF published testing that is outside this wiki's brand-level firewall scope._

## Processing effects

_Pending. Formulation (percent cocoa solids, presence of milk, use of cocoa powder versus chocolate liquor) is the dominant processing-level driver of finished-product cadmium. Conching and tempering do not meaningfully alter cadmium content._

## Ingredient-derivative risk

A chocolate-containing ingredient list translates to cadmium exposure primarily through the cocoa-solid fraction. Apps estimating cadmium from ingredient lists should weight the chocolate contribution by approximate percent cocoa solids when that information is available on the label, and default to a representative mid-range cocoa-solid percentage (approximately 35 to 50 percent for most mass-market chocolates) when it is not.

## Mitigation options

_Pending. Upstream cocoa-sourcing decisions are the meaningful mitigation lever for chocolate manufacturers; see [[ingredients/cocoa]]._

## Abt 2018 sample-level occurrence values

[[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]] is the primary FDA U.S.-market occurrence dataset for finished chocolate products. Per-matrix means below; full ranges and stratification by percent cocoa and by Latin America versus Africa origin are in the source page. The 2020 perspective [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]] contextualizes these values within the JECFA-and-Codex regulatory landscape and the JECFA finding that cocoa-and-chocolate consumption can drive 30-69 percent of total Cd intake in high-consumer children.

| Matrix | Mean Cd ± SD (mg/kg) | Mean Pb ± SD (mg/kg) |
| --- | ---: | ---: |
| Dark chocolate | 0.27 ± 0.25 | 0.03 ± 0.02 |
| Milk chocolate | 0.06 ± 0.07 | 0.01 ± 0.01 |

The four-fold higher Cd in dark chocolate versus milk chocolate reflects the higher percent cocoa content in dark chocolate; Cd and Pb were both significantly correlated with percent cocoa across the dataset. These values count as one literature evidence primary source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; Abt 2020 is a secondary citation that does not add new primary data.

## Lead in chocolate

Chocolate inherits Pb from its cocoa-solid fraction with the four-fold dark-versus-milk gradient documented in [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]]: dark chocolate mean 0.03 ± 0.02 mg/kg, milk chocolate mean 0.01 ± 0.01 mg/kg, across the 144-sample U.S. retail convenience-sample survey. Pb correlated significantly with percent cocoa solids, mirroring the Cd pattern. The 2020 FDA perspective ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]]) frames chocolate Pb as principally anthropogenic-deposition-driven via the cocoa bean rather than added during chocolate manufacture. The U.S. FDA Pb-in-candy guidance recommends a maximum level of 0.1 mg/kg in candy including chocolate candy; finished chocolate products in the Abt 2018 dataset fall comfortably below the guidance, though high-percent-cocoa dark chocolate has been documented at or above this level in some independent third-party testing not yet in the loaded corpus.

## Nickel in chocolate

Chocolate carries Ni proportional to its cocoa-solid fraction. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] reports bitter (dark) chocolate at 1.9 µg/g (range 1.3 to 2.7 µg/g, n=7) and milk chocolate at 0.7 µg/g (range 0.4 to 1.2 µg/g, n=11) from the post-1969 AAS/PIXE literature. The roughly 3x gap between bitter and milk chocolate maps cleanly onto the cocoa-solid percentage difference, which is consistent with the >9 µg/g concentration in cocoa itself (Flyvholm 1984). [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] subsequently confirmed cocoa among the principal dietary Ni sources and dark chocolate inherits that load. Nickel-sensitized individuals (systemic contact dermatitis-prone, approximately 10 to 15 percent of the European adult population per EFSA) can experience flare-ups from high-cocoa dark chocolate consumption; the EFSA acute LOAEL of 4.3 µg Ni/kg b.w. for eczematous flare-up identifies chocolate-heavy consumers as one of the dietary subgroups at risk. [[sources/pacor2003-nickel-recurrent-aphthous-stomatitis-dbpc|Pacor et al. 2003]] documents cocoa-and-chocolate as the most consistently symptom-aggravating food category in nickel-reactive recurrent aphthous stomatitis (92.6 percent of patients).

## Aluminum in chocolate

Chocolate carries Al from a combination of cocoa-solid uptake (cacao tree root Al accumulation from tropical soils) and any processing-equipment or alkalization-step contribution. [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi|Elsheikh et al. 2020]] reports Al in cocoa sweets in Saudi Arabia (B-tier journal; matrix-specific Al concentrations in cocoa sweets), and biscuit brand 6 in that survey reached a remarkable 291,900 ppb total Al (outlier value that the source page flags for follow-up). Direct U.S. or EU-market chocolate Al concentration distributions are not yet loaded on the wiki. Phase 3b ingest of primary cocoa-and-chocolate Al occurrence work would firm this cell.

## Chromium in chocolate

[[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez et al. 2019]] documents that cocoa-containing finished products consistently show the highest Cr concentrations among the French food categories surveyed: chocolate-containing breakfast cereals 360 to 483 ppb total Cr; a dry chocolate biscuit averaged 103 ppb. The paper measures both total Cr and Cr-VI by speciation; whether the Cr-VI fraction in finished chocolate products is significant requires the underlying Hernandez 2019 speciation tables and additional cross-source confirmation. The total-Cr signal supports flagging chocolate as a Cr-bearing finished-product category; Cr-VI-specific speciation data for chocolate matrices is a documented data gap.

## Other metals of concern

The remaining HMI-tracked metals on chocolate (iAs, tAs, tHg, MeHg, Sn, U) do not have strong chocolate-specific occurrence evidence in the loaded corpus. Chocolate is not a primary arsenic matrix, is not canned in tin, and does not carry meaningful Hg or U at population level. These metals remain at status: pending on the contamination_profile.

## Regulatory limits that apply

- [[regulations/jecfa-cadmium-ptmi]] — JECFA 91st meeting 2022: cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg b.w./month in European children aged 7 to 11, indicating that chocolate products heavy in cocoa powder warrant particular attention for child consumers.
- [[regulations/codex-cadmium-mls]] / [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — International Cd MLs scaled by cocoa-solid percentage: chocolate less than 30 percent cocoa solids (including milk chocolate) 0.3 mg/kg; 30 to less than 50 percent 0.7 mg/kg; 50 to less than 70 percent 0.8 mg/kg; 70 percent or greater 0.9 mg/kg; cocoa powder (100 percent cocoa solids dry-matter basis) 2.0 mg/kg.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum levels for chocolate products: 0.10 mg/kg (100 ug/kg) for milk chocolate with less than 30 percent total dry cocoa solids; 0.30 mg/kg (300 ug/kg) for chocolate with less than 50 percent total dry cocoa solids and milk chocolate with at least 30 percent total dry cocoa solids; 0.80 mg/kg (800 ug/kg) for chocolate with at least 50 percent total dry cocoa solids.
- FDA Pb in candy: recommended maximum level 0.1 mg/kg for candy including chocolate candy ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]]).
- [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] — Chronic TDI 13 µg Ni/kg b.w./day; acute LOAEL 4.3 µg Ni/kg b.w. for eczematous flare-up in sensitized individuals. No chocolate-specific Ni ML at international level.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/bravo2024-cadmium-cacao-arauca\|Bravo et al. 2024]]. *Cadmium in cacao crops and artisanal chocolates in the Arauca Department, Colombia*, Environmental Monitoring and Assessment | 2024 | Peer-reviewed | CO Cd occurrence in 180 cacao farms surveyed across four municipalities in Arauca Department, Colombia (Arauquita, Fortul, Saravena, Tame); seed subsamples from... (n=20) |
| 2 | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|Hands et al. 2024]]. *A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA*, Frontiers in Nutrition | 2024 | Peer-reviewed | US Pb, Cd, tAs occurrence in 72 consumer cocoa-containing products (dark chocolate, cocoa powder, and related products) purchased in the US from retail and... (n=72) |
| 3 | [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|Hands et al. 2024]]. *A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA*, Frontiers in Nutrition | 2024 | Peer-reviewed | Pb, Cd, As in 72 US dark chocolate and cocoa products across four cohorts (2014–2022), with mean Cd and Pb per serving both exceeding Prop 65 MADLs; organic products showed significantly higher Cd and Pb concentrations |
| 4 | [[sources/marincich2023-cadmium-chocolate-poland\|Marincich et al. 2023]]. *Threat or treat: Exposure assessment and risk characterisation of chemical contaminants in soft drinks and chocolate bars in various Polish population age groups*, EFSA Journal | 2023 | Peer-reviewed | PL/EU Cd occurrence in Multiple chocolate bars from different brands purchased in Warsaw supermarkets, 2022–2023; two matrices: milk chocolate and bitter chocolate |
| 5 | [[sources/blommaert2022-cd-cacao-translocation\|Blommaert et al. 2022]]. *Cadmium translocation from soil to cacao bean: Isotope fractionation as a tool to assess plant compartmentalization and uptake mechanisms*, Frontiers in Plant Science | 2022 | Peer-reviewed | BE Cd occurrence in Greenhouse pot experiment using Theobroma cacao plants; isotope fractionation and XAS analysis of plant compartments |
| 6 | [[sources/codex-cxc-81-2022\|Codex 2022]]. *Code of Practice for the Prevention and Reduction of Cadmium Contamination in Cocoa Beans (CXC 81-2022)*, FAO and WHO, 2023. Codex Alimentarius Code of Practice No. CXC 81-2022. Joint FAO/WHO Food Standards Programme. Rome. | 2022 | Government report | International Codex supply-chain Code of Practice for preventing and reducing Cd in cocoa beans, the upstream guidance underpinning mitigation efforts for chocolate Cd |
| 7 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA 91st meeting finding that cocoa powder alone can drive 97.5th-percentile Cd exposure in European children to 12 µg/kg b.w./month, with chocolate intake scaling with cocoa-solid percentage |
| 8 | [[sources/wade2022-cacao-cadmium-drivers\|Wade et al. 2022]]. *Drivers of cadmium accumulation in Theobroma cacao L. beans: A quantitative synthesis of soil-plant relationships across the Cacao Belt*, PLOS ONE | 2022 | Peer-reviewed | EC/PE/CO Cd occurrence in 489 site-years from 31 studies across 10 cacao-producing countries; 2,127 observations compiled from systematic literature search (n=2127) |
| 9 | [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate\|Abt et al. 2020]]. *Perspective on Cadmium and Lead in Cocoa and Chocolate*, Journal of Agricultural and Food Chemistry | 2020 | Peer-reviewed | FDA perspective synthesizing Cd and Pb occurrence in cocoa and chocolate, documenting geographic origin variation (Latin America vs Africa) and confirming that Cd scales with cocoa-solid percentage and cocoa-product use in chocolate manufacture |
| 10 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Al, Sb, As, Cd, Cr, Co, Ni, Sn, V in 291 French infant and toddler foods, with cocoa-containing breakfast cereals and chocolate-based products among the highest-Cr categories in the survey |
| 11 | [[sources/meter2019-cadmium-cacao-lac-review\|Meter et al. 2019]]. *Cadmium in Cacao from Latin America and the Caribbean: A Review of Research and Potential Mitigation Solutions*, Bioversity International / CAF Development Bank of Latin America | 2019 | Government report | Comprehensive review of Cd in LAC cacao, identifying Ecuador, Peru, Honduras, and Trinidad as consistently high-Cd origins whose beans frequently exceed EU MLs, directly affecting chocolate Cd by cocoa-origin |
| 12 | [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market\|Abt et al. 2018]]. *Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market*, Food Additives & Contaminants: Part B Surveillance | 2018 | Peer-reviewed | FDA 144-sample ICP-MS survey of Cd and Pb in US cocoa powder, cocoa nibs, dark chocolate, and milk chocolate; primary occurrence data for this page, including dark chocolate mean Cd 0.27 mg/kg and Pb 0.03 mg/kg |
| 13 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | IE/EU Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn occurrence in 141 food samples (1,043 sub-samples) representing the Irish diet; adults n=1,500 (NANS, age 18+, 2008–2010) and children n=594... (n=141) |
| 14 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA Cd scientific opinion reporting European mean chocolate Cd of 0.090 mg/kg (vs 0.178 mg/kg for cocoa), establishing the dilution ratio between cocoa and chocolate concentrations used to relate upstream and downstream Cd levels |
| 15 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd in chocolate tiered by cocoa-solid percentage (0.3 to 0.9 mg/kg) and for Cd in cocoa powder at 2.0 mg/kg, the international benchmark for finished chocolate regulation |
| 16 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni concentration data reporting dark (bitter) chocolate at 1.9 µg/g and milk chocolate at 0.7 µg/g, the primary Ni occurrence reference underpinning the chocolate Ni section |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1f72114](https://github.com/paleofoundation/heavymetalindex/commit/1f72114) | 2026-05-20 | autonomy: daemon tick 2026-05-20T14-13-38Z — gap-healing + extraction + pooling + briefings |
| [ca4d875](https://github.com/paleofoundation/heavymetalindex/commit/ca4d875) | 2026-05-17 | build: regenerate audits + routing artifacts after locked-product fix |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
| [c027e29](https://github.com/paleofoundation/heavymetalindex/commit/c027e29) | 2026-05-17 | source-legend: programmatic baseline fill (2026-05-17) |
| [f907793](https://github.com/paleofoundation/heavymetalindex/commit/f907793) | 2026-05-17 | sweep: regenerate body tables and trim stub-marker prose on touched pages |
<!-- END: hmi-page-history -->
