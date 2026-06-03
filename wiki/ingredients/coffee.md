---
title: "Coffee"
type: ingredient
commodity: coffee
label: "Coffee"
aliases: [ground coffee, instant coffee, brewed coffee]
category: botanical
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: 800
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 200
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [400, 2000]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200, 10000]
    p95_ppb: null
    confidence: low
    n_studies: 4
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [80, 500]
    p95_ppb: null
    confidence: low
    n_studies: 3
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
    typical_ppb: [5, 300]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [1, 10]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [coffee]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 20
---

# Coffee

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=5 | 10–200 | 800 | medium | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|3]] |
| Cd | n=5 | 5–50 | 200 | medium | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|3]] |
| iAs | n=2 | 1–20 | — | low | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| tAs | n=3 | 5–300 | — | low | [[sources/zergui2023-coffee-metals-origin-icp-ms\|1]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| tHg | n=2 | 1–30 | — | low | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Ni | n=4 | 400–2000 | — | low | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/bfr2022-nickel-dietary-intake-germany-meal\|3]] |
| Al | n=4 | 200–10000 | — | low | [[sources/suomi2023-finland-dietary-metals-cumulative\|1]], [[sources/zergui2023-coffee-metals-origin-icp-ms\|2]], [[sources/albals2021-coffee-jordan-icpms\|3]] |
| Cr | n=3 | 80–500 | — | low | [[sources/zergui2023-coffee-metals-origin-icp-ms\|1]], [[sources/albals2021-coffee-jordan-icpms\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| Sn | data gap | — | — | — | — |
| U | n=1 | 1–10 | — | low | [[sources/albals2021-coffee-jordan-icpms\|1]] |

## Routing

This node is linked from [[products/coffee]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/demir2025-coffee-elements-turkiye\|Demir et al. 2025]]. *Determination of Element Contents and Health Risk Assessment of Some Commercial Coffees in Turkiye*, Journal of Tekirdag Agricultural Faculty 22(3) | 2025 | Peer-reviewed | TR Al, Ba, Cr, Ni, Pb, tAs, Cd, Sb occurrence in Ten brewed commercial coffee samples from different product/brand types in Turkiye: classic, milicano, green, gold, decaffeinated, filter, and... (n=10) |
| 2 | [[sources/domagalska2025-instant-coffee-heavy-metals\|Joanna et al. 2025]]. *A quantitative assessment of heavy metal contamination in instant coffee beverages: A comparative analysis of toxic element content and public health risk implications*, Polish Annals of Medicine | 2025 | Peer-reviewed | PL Cd, Pb, Ni, Zn, tAs, Cr occurrence in Instant coffee beverages sold in Poland, including 3-in-1, 2-in-1, and cappuccino products (n=50) |
| 3 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | *[awaiting synthesis]* |
| 5 | [[sources/noor2023-merapi-robusta-coffee-metals\|Noor et al. 2023]]. *Quality Characteristics of Merapi Robusta Coffee Products from the Traditional, Semi Modern, and Modern Process*, Proceedings of the 3rd International Conference on Smart and Innovative Agriculture | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | FI/EU Cd, Pb, iAs, MeHg, Ni, Al occurrence in Finnish adults aged 25–74 years from FinDiet 2012 national dietary survey (48-h recall; 5 geographic areas) (n=1295) |
| 7 | [[sources/zergui2023-coffee-metals-origin-icp-ms\|Zergui et al. 2023]]. *Evaluation of trace metallic element levels in coffee by ICP-MS: a comparative study among different origins, forms, and packaging types and consumer risk assessment*, Biological Trace Element Research | 2023 | Peer-reviewed | Ni, Cr, Pb, Cd, tAs, and Al in 44 coffee samples (instant, ground, capsule) from Algerian market by ICP-MS; multi-origin and form comparison; B-tier caveat on CDI exceedances for Cd |
| 8 | [[sources/abraheem2022-tea-coffee-lead-cadmium\|Mohammad et al. 2022]]. *Determination of Lead and Cadmium Concentration in Different Samples of Tea and Coffee Circulating in the Libyan Market*, International Journal of Science and Research | 2022 | Peer-reviewed | LY Pb, Cd occurrence in Seventeen tea samples and eleven coffee samples circulating in Tripoli, Libya during 2018-2019 (n=28) |
| 9 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | German MEAL Study Ni concentrations for the coffee, cocoa, and tea food group |
| 10 | [[sources/winiarska-mieczan2022-cd-pb-instant-coffee-poland\|Winiarska-Mieczan et al. 2022]]. *Cadmium and Lead Concentration in Drinking Instant Coffee, Instant Coffee Drinks and Coffee Substitutes: Safety and Health Risk Assessment*, Biological Trace Element Research | 2022 | Peer-reviewed | PL Cd, Pb occurrence in 49 instant coffee, instant coffee drink, and coffee-substitute products bought in grocery stores in Chelm, Zamosc, and Lublin,... (n=49) |
| 11 | [[sources/albals2021-coffee-jordan-icpms\|Albals et al. 2021]]. *Multi-element determination of essential and toxic metals in green and roasted coffee beans: A comparative study among different origins using ICP-MS*, Science Progress | 2021 | Peer-reviewed | Pb, Cd, Al, Cr, Ni, and U in green and roasted coffee beans across five origins by ICP-MS, including roasting effects on concentrations |
| 12 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | Cd, Pb, tAs, and tHg in Arabica roasted coffee beans from the Polish market |
| 13 | [[sources/adler2019-selected-metals-coffee-bosnia\|Adler et al. 2019]]. *Concentrations of selected metals (Na, K, Ca, Mg, Fe, Cu, Zn, Al, Ni, Pb, Cd) in coffee*, Zdravstveno Varstvo / Slovenian Journal of Public Health | 2019 | Peer-reviewed | BA Al, Ni, Pb, Cd, Cu, Zn, Fe, Mg occurrence in Two green coffee bean samples and six roasted coffee bean samples purchased in small local stores in Sarajevo,... (n=8) |
| 14 | [[sources/chaiyasut2018-coffee-cosmetic-heavy-metals\|Chaiyasut et al. 2018]]. *Formulation and stability assessment of Arabica and Civet coffee extracts based cosmetic preparations*, Asian Journal of Pharmaceutical and Clinical Research | 2018 | Peer-reviewed | TH Pb, tAs, tHg occurrence in Arabica and civet coffee extract body lotion and hand moisturizing cream formulations after 3 months at 40°C (n=12) |
| 15 | [[sources/dasilva2017-heavy-metals-coffee-brazil\|Silva et al. 2017]]. *Determination of heavy metals in the roasted and ground coffee beans and brew*, African Journal of Agricultural Research | 2017 | Peer-reviewed | BR Cd, Cr, Cu, Mn, Ni, Pb, Zn occurrence in 50 Coffea arabica samples collected from farms and coffee marketing centers in the Alto Paranaiba region, Minas Gerais,... (n=50) |
| 16 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish TDS coffee concentrations and exposure contribution for Al, tAs, iAs, Cd, Cr, Pb, tHg, and Sn |
| 17 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 18 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | *[awaiting synthesis]* |
| 19 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | *[awaiting synthesis]* |
| 20 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Coffee (Coffea arabica and Coffea canephora/robusta) accumulates trace metals from soil through normal plant uptake; cadmium, lead, nickel, and aluminum are all documented in green coffee bean. Coffee plants are grown predominantly in volcanic and high-altitude tropical soils (the "coffee belt" between approximately 25°N and 25°S), and many production regions have elevated soil-Al because volcanic substrate is naturally aluminum-rich. Soil-Cd in coffee follows the same Andean-volcanic high-Cd pattern documented for cocoa (see [[ingredients/cocoa]]); some Latin American coffee origins carry elevated Cd from this geological inheritance.

Post-harvest processing (wet vs dry method, hulling, drying, roasting, grinding) redistributes but does not remove the source-bean metal load. The brewing step (passing hot water through ground coffee) extracts a fraction of the metals into the brew, with the leach fraction depending on metal speciation, brew method, and grind size.

The HMTc panel concerns for coffee are Al, Cd, Pb, and Ni. The brewed-coffee-as-consumed exposure pathway differs from the green-bean or roasted-bean concentration: the metals partition between the brew and the spent grounds, and not all metals partition equally.

## Ranges by source, region, and variety

Latin American coffee origins (Colombia, Brazil, Peru, Costa Rica, Honduras) show the broadest within-region variance, with high-altitude Andean production regions documented at higher Cd than lower-altitude Brazilian production. African coffee origins (Ethiopia, Kenya, Uganda) typically carry lower Cd. Robusta coffee, grown predominantly in Vietnam, Indonesia, and parts of Africa, has a different Cd profile from arabica, partly because of soil-region differences and partly because the species itself differs in metal-uptake efficiency.

Aluminum content in green coffee bean is consistently elevated relative to most other food commodities, reflecting the natural high-Al volcanic soil base of the coffee belt. The aluminum partitions partially into brewed coffee.

## Processing effects

Coffee processing has several steps that affect the final concentration:

**Wet vs dry processing** (the post-harvest fermentation and drying approach) does not substantially shift total metal load but does affect minor metals partitioning between bean fractions.

**Hulling** removes the parchment and silver skin; trace metals partially partition with the husk fraction.

**Roasting** at 180-240°C does not chemically remove heavy metals (they are not volatile at coffee-roasting temperatures); the per-bean mass decreases slightly through water and CO2 loss, so per-mass metal concentration increases marginally.

**Grinding** can introduce trace Pb and Cr from steel grinding-equipment contact; commercial coffee grinders are food-grade specified to minimize this.

**Brewing** is the most consequential step for as-consumed exposure. Espresso and French press brews retain more particulate-bound metals than drip brews where paper filters partially remove ground-coffee particles. Cold-brew methods extract metals at lower rates than hot brews. The brew-method-vs-extraction-rate analysis varies by metal.

## Ingredient-derivative risk

Instant coffee (freeze-dried or spray-dried from brewed concentrate) carries the brewed-coffee metal profile in concentrated form; reconstituted instant coffee approximately matches drip-brew metal content. Decaffeinated coffee carries broadly similar metal profiles to caffeinated coffee from the same source.

Coffee bags and pods (Keurig, Nespresso, Tassimo) deliver consistent serving-size metal content but introduce packaging-contact contamination considerations: aluminum-pod systems (Nespresso) have been studied for Al leaching, with manufacturer specifications and food-contact-substance compliance addressing the migration question.

Mushroom coffee, adaptogen coffee, and similar functional-coffee products sold with Supplement Facts labels route to [[products/supplements-botanicals-herbs|Cat 16 dietary supplements]] rather than Cat 5 beverage coffee.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Origin-region segmentation (low-Al / low-Cd origins favored over high-Al volcanic origins for Al-conscious products) is the largest single brand-side lever. Single-origin sourcing with supplier-provided Cd and Al data per lot is the operational specification for high-quality coffee brands; commodity-blend coffee carries the weighted-average profile of its source-region mix.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the coffee-farm level. Soil pH management can reduce Cd uptake; some farms in high-Cd regions practice liming to manage the regulatory exposure. Cultivar selection between Coffea arabica and Coffea canephora and within arabica varietals (Bourbon, Typica, Caturra, Catuai, Geisha) can shift Cd accumulation. Avoidance of high-Cd phosphate fertilizers is standard.

**Processing levers** ([[mitigation/processing]]) for finished coffee products are limited. Roast level does not change metal content. Grinder specification affects equipment-contact contamination at the trace level.

**Formulation levers** ([[mitigation/formulation]]) include blend composition (substituting low-Cd-origin coffee for high-Cd-origin coffee in a blend can shift the product-mean Cd substantially) and decaffeination process specification (some solvent-decaffeination processes can introduce trace contaminants).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd and Al testing on green-bean shipments, particularly for brands serving infant/young-child markets or California Prop 65 markets where serving-based exposure calculations apply. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include pod-system aluminum-leaching considerations (manufacturer-side, not brand-side) and ground-coffee long-shelf-life packaging integrity.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set a coffee-specific maximum level for Cd or Pb; the general beverage and produce-derived MLs apply where they govern.
- Codex Alimentarius does not maintain a coffee-specific Cd or Pb ML; some national authorities have set national MLs.
- FDA does not maintain a binding action level for Pb or Cd in coffee.
- California Prop 65 ([[regulations/california-prop65]]) applies to coffee sold in California; acrylamide (a separate chemical contaminant formed during roasting, not in the HMTc panel) has been the focus of Prop 65 coffee litigation. Cd MADL applies to coffee as a food product; the serving-based exposure screen governs.
- Aluminum dietary intake reference: the JECFA provisional tolerable weekly intake for aluminum (2 mg/kg b.w./week) and the EFSA tolerable weekly intake (1 mg/kg b.w./week) anchor the dose-response framing for coffee Al intake at population-level consumption.

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
