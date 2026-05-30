---
title: "Root vegetables"
type: ingredient
commodity: root-vegetables
label: "Root vegetables"
aliases: [carrot, parsnip, potato, "sweet potato", yam, beet, lotus-root, taro, cassava]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [9.5, 27.5]
    p95_ppb: 28.4
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 41]
    p95_ppb: 57
    confidence: high
    n_studies: 13
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [3.3, 239.4]
    p95_ppb: 384.2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0.9]
    p95_ppb: 1.3
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [400, 1600]
    p95_ppb: 24700
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1340]
    p95_ppb: 1468
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [50, 1500]
    p95_ppb: 13500
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 67.7]
    p95_ppb: 73.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 150
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [vegetable-juices-root-vegetable-containing]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 26
---

# Root vegetables

FSA/Fera measured this ingredient or a closely matching non-infant-specific food composite in the FS102048 survey. Exact concentrations remain in progress until Table 6 is parsed into structured ingredient rows with quantitation flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Root vegetables are a broad category of edible plant storage organs that develop entirely within the soil matrix, including carrots (Daucus carota), parsnips (Pastinaca sativa), turnips (Brassica rapa), beets (Beta vulgaris), celeriac (Apium graveolens var. rapaceum), and related crops. Because the edible organ grows in direct contact with soil solution, root vegetables are inherently more susceptible to heavy metal uptake and surface contamination than aerial plant parts such as fruits or leaves. Cadmium (Cd) is the analyte of greatest concern in this category: it is present in most agricultural soils at varying concentrations, has high bioavailability relative to other metals in soil solution, and is actively taken up through the same zinc transporter channels that plants use to acquire the essential nutrient zinc. Soil Cd loading is driven primarily by the historical and ongoing application of phosphate fertilizers derived from phosphate rock containing Cd as a co-contaminant, atmospheric deposition near industrial sources, and naturally elevated geogenic Cd in some soil types. Lead (Pb) accumulation in root vegetables occurs primarily through surface adsorption: soil particles and dissolved Pb adhere to the root surface during growth and post-harvest handling, and internal uptake of Pb is limited by the root epidermis under most soil conditions. However, when Pb-contaminated soil is mechanically worked into the root tissue through damage or when surface contamination is not adequately removed, surface Pb can represent a meaningful contributor to the analytical total. Different root vegetable species show different Cd accumulation efficiencies: leafy root crops and those with more permeable root surfaces tend to accumulate more Cd per unit dry weight than compact, waxy-skinned varieties. Potatoes are separately captured on [[ingredients/potato-chips]] for the snack-product context; sweet potato is separately captured on [[ingredients/sweet-potato]] for the infant-food context.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=10 | 9.5–27.5 | medium | [[sources/albishi2026-cassava-flour-biofortification\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-nd-vegetables-hra\|3]] |
| Cd | n=13 | 0–41 | high | [[sources/albishi2026-cassava-flour-biofortification\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-nd-vegetables-hra\|3]] |
| iAs | n=2 | 3.3–239.4 | low | [[sources/sadee2023-arsenic-speciation-vegetables\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=8 | 5–50 | medium | [[sources/albishi2026-cassava-flour-biofortification\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-nd-vegetables-hra\|3]] |
| tHg | n=5 | 0–0.9 | medium | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|1]], [[sources/saleem2025-nd-vegetables-hra\|2]], [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|3]] |
| Ni | n=6 | 400–1600 | medium | [[sources/imongben2026-kaduna-vegetables-hra\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-nd-vegetables-hra\|3]] |
| Al | n=1 | 0–1340 | medium | [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|1]] |
| Cr | n=7 | 50–1500 | medium | [[sources/imongben2026-kaduna-vegetables-hra\|1]], [[sources/albishi2026-cassava-flour-biofortification\|2]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|3]] |
| Sn | n=2 | 0–67.7 | low | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|1]], [[sources/codex-cxs-193-1995\|2]] |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/vegetable-juices-root-vegetable-containing]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Soil Cd content is the primary driver of between-region variation in root vegetable Cd concentrations. European agricultural soils in Belgium, the Netherlands, and parts of France have historically elevated Cd from long-term phosphate fertilizer application and industrial activity, producing higher Cd in root vegetables grown in these regions than in North American or Australian counterparts with lower soil Cd loads. JECFA's dietary exposure assessments document national-level variation in root vegetable Cd contributions to total dietary Cd intake, reflecting these soil-level differences [[sources/jecfa-91st-cadmium-2022]]. Within a production region, soil pH is the most important modulating variable: acid soils increase Cd bioavailability while neutral-to-alkaline soils reduce it. Varietal differences in Cd accumulation exist within the root vegetable category: carrots accumulate Cd at generally lower rates than leafy variants of the same root crops, while certain beet and celeriac varieties show higher uptake efficiency. For Pb, proximity to former industrial sites, historical use of Pb arsenate pesticides, and contamination from roadway traffic are the dominant geographic risk factors rather than agricultural inputs. The current source corpus contains one A-tier Cd dietary exposure study (JECFA 2022), one canonical toxicology chapter (Nordberg et al. 2015), one EFSA opinion with EU occurrence data (EFSA 2009), and Codex general limits; quantitative median and percentile values for specific root vegetable sub-species will be populated as occurrence surveys are ingested [[sources/efsa-cadmium-contam-2009]] [[sources/nordberg2015-cadmium-chapter]] [[sources/codex-cxs-193-1995]].

## Processing effects

Peeling root vegetables before consumption or industrial processing removes the skin and outer flesh layer, which carries the highest Pb and Cd concentration due to surface adsorption and the steeper metal concentration gradient near the root surface. The magnitude of the peeling effect on Cd is moderate; internal root tissue also contains Cd absorbed from soil water, so peeling alone does not eliminate Cd exposure. For Pb, peeling and washing are more effective because surface-bound Pb is concentrated in the outer layers. Pureeing root vegetables for baby food production introduces the entire peeled root into the finished product without further differentiation by tissue layer; this results in a homogenized metal concentration rather than surface enrichment. Blanching and boiling in water can leach some water-soluble metal fractions, but the leaching efficiency varies with metal species, cooking time, and water-to-vegetable ratio. Roasting and other dry-heat methods concentrate metals as moisture is lost but do not remove them. Juicing root vegetables concentrates the aqueous metal fraction in the juice while leaving some metals in the fibrous marc; the distribution depends on the metal's association with soluble versus insoluble fractions.

## Ingredient-derivative risk

The highest-risk derivative context for root vegetables in public health terms is pureed or mashed root vegetable in infant and young child feeding products. Baby food purees made from carrots, parsnips, and mixed root vegetables have been identified in multiple regulatory and advocacy surveys as contributors to infant Pb exposure. The pureed format concentrates the root vegetable metal load into a high-moisture product consumed in large servings relative to infant body weight. Carrot juice and root vegetable juice blends are a second high-priority derivative: juicing concentrates the aqueous fraction and eliminates the dilution provided by fiber; Cd and Pb can be disproportionately represented in fresh juice relative to the whole vegetable depending on the metal's speciation. Root vegetable flour and powders (dehydrated carrot, parsnip, or beet powder used in snack coatings, supplements, and processed foods) concentrate metals by a factor of five to ten relative to the fresh vegetable on a wet-weight basis; products using these concentrates at meaningful inclusion levels warrant specific assessment.

## Mitigation options

### Sourcing levers

Sourcing root vegetables from fields with documented low soil Cd and Pb is the highest-impact single lever. Field-level soil testing with Cd and Pb analysis before seasonal contracting allows processors to exclude high-risk parcels. In jurisdictions where field-level soil Cd data are available from regulatory monitoring programs (common in the Netherlands, Belgium, and Germany), suppliers should be required to demonstrate that contracted fields fall below threshold values. Requiring lot-level COAs from growers and testing incoming loads by ICP-MS are standard practices for processors supplying infant food manufacturers.

### Agronomic levers

Soil pH management is the most impactful agronomic lever for Cd: liming acidic soils to maintain pH above 6.5 significantly reduces Cd bioavailability and uptake by root crops. Addition of organic matter to soils reduces Cd bioavailability through chelation and pH buffering. Phytoremediation strategies using high-accumulator crops before root vegetable production have been studied but are slow-acting and not commercially practical as a routine intervention. Irrigation water quality matters when roots are grown in regions where irrigation water contains elevated Cd or Pb; ensuring irrigation water meets agricultural water quality standards is a baseline requirement. _No quantified reduction magnitude from liming specific to root vegetable Cd in the current corpus; see [[metals/cadmium]] for broader agronomic evidence._

### Processing levers

Peeling removes the highest-concentration outer tissue for both Cd and Pb; for baby food production, thorough mechanical peeling is standard practice. Washing in clean water reduces surface-bound Pb. Blanching before pureeing leaches some water-soluble metals; cooking water is discarded after blanching and not incorporated into the finished puree.

### Formulation levers

In multi-vegetable infant food formulations, reducing the proportion of high-Cd root vegetables and increasing lower-risk ingredients (for example, winter squash or legumes) can reduce the weighted average metal load of the finished product. Substituting carrots partially with sweet potato or other root vegetables with different Cd accumulation profiles may provide modest benefits where supply-chain data supports this decision.

### Testing and QC levers

For infant food manufacturers, lot-level ICP-MS testing for Pb and Cd on incoming raw root vegetables is the standard QC lever given FDA's CTZ action levels and the high-priority regulatory focus on this category. Specification limits for incoming ingredients should be set tighter than finished-product action levels to account for concentration during processing.

### Packaging and storage levers

_No quantified data on packaging or storage effects on root vegetable metal content in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the United States, FDA's Closer to Zero program has established action levels for Pb in processed foods intended for babies and young children under the age of two. For root vegetable purees in baby food, the applicable Pb action level is 0.020 mg/kg (20 ppb) as served, as finalized in the FDA Closer to Zero guidance (see [[regulations/fda-ctz-Pb-rootveg-20ppb]] and [[regulations/fda-closer-to-zero]]). The EU framework under [[regulations/eu2023-contaminants-maximum-levels]] sets Pb at 0.10 mg/kg (100 ppb) and Cd at 0.10 mg/kg (100 ppb) for root vegetables as placed on market (fresh or processed). Codex Alimentarius maximum levels under [[regulations/codex-cxs-193-1995]] establish additional international reference points for Cd and Pb in vegetable matrices. The [[regulations/eu-2023-915-cadmium]] regulation is the current operative EU Cd standard. No specific iAs limit applies to root vegetables in the EU or US at present, consistent with the literature finding that root vegetables are not significant contributors to dietary iAs exposure.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/albishi2026-cassava-flour-biofortification\|Albishi et al. 2026]]. *In vitro evaluation of bio-fortification effects on the nutritional quality, toxicological safety, and antioxidant of cassava (Manihot esculenta) flour, and environmental safety of processing water, using natural additives*, Frontiers in Nutrition | 2026 | Peer-reviewed | Pb, Cd, tAs, and Cr in Nigerian cassava flour under control and 11 biofortification treatments, with control Pb at 61.33 to 68.67 µg/kg DW and all values well below WHO/FAO MPLs |
| 2 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | Cr and Ni in carrots, sweet potatoes, and other vegetables from 5 Kaduna markets (Nigeria) by ED-XRF, with Cr up to 59.1 mg/kg DW in potato and HI exceeding 1 for both age groups |
| 3 | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|Ye et al. 2026]]. *Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China*, Foods | 2026 | Peer-reviewed | Tin in 673 fresh-vegetable samples (including root vegetables) within a 2014-sample Zhejiang Province survey, with fresh-vegetable Sn uniformly low and all inorganic-Sn THQ values below 1 |
| 4 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 5 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 6 | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | Pb, Cd, tAs, Ni, Cr, and tHg in Hawke's Bay (NZ) root vegetables (sweet potato, radish, beetroot, carrot) post-Cyclone Gabrielle, with organic production independently associated with lower Cd and Ni |
| 7 | [[sources/saleem2025-nd-vegetables-hra\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | Pb, Cd, tAs, tHg, Ni, and Cr in potato, onion, and sugar beet samples from a North Dakota farmer's market, with Cd exceeding FAO/WHO MPL in 86% of onion, sugar beet, and potato samples |
| 8 | [[sources/malone2024-community-garden-soils-us\|Malone et al. 2024]]. *Trace Metal Contamination in Community Garden Soils across the United States*, Sustainability | 2024 | Review | Integrative review of Pb, tAs, Cd in US community garden soils across 52 studies, anchoring the upstream soil-contamination context for root-vegetable uptake and noting the 2024 EPA soil-Pb screening reduction from 400 to 200 ppm |
| 9 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Cu, Zn, Cd, and Pb in potato and onion among 8 vegetable types from Babol (Iran), with root vegetables within Iran National Standards and below leafy-vegetable concentrations |
| 10 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | IEUBK/ICRP/AALM Pb biokinetic modeling treating root-vegetable purees as one of the consumer baby-food intake categories, with combined food and water contributing under 15% of infant BLL variance vs soil/dust dominance |
| 11 | [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|Romero-Crespo et al. 2023]]. *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | tAs, Cd, Cr, Ni, Pb in carrots, turnips, and cassava near the Ponce Enriquez gold mining area (Ecuador), with As at 2.55 mg/kg in turnips and Cd at 1.64 mg/kg in turnips both exceeding FAO/WHO MPLs |
| 12 | [[sources/sadee2023-arsenic-speciation-vegetables\|Sadee et al. 2023]]. *Toxicity, arsenic speciation and characteristics of hyphenated techniques used for arsenic determination in vegetables. A review*, RSC Advances | 2023 | Peer-reviewed | global tAs, iAs occurrence in Review paper; no primary samples; synthesizes published arsenic speciation data in vegetables globally |
| 13 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA global Cd dietary exposure assessment; root vegetables (including potatoes and carrots) included in national food-basket contributions |
| 14 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | Cr, Cd, Pb, Ni, Cu, Zn, Fe, Mn in beet, radish, carrot, and turnip from Dhaka's Kawran Bazar market, with one of four root vegetables exceeding HI of 1 versus four of five leafy vegetables |
| 15 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | tAs uptake by carrot under controlled As(V)-spiked irrigation in Burkina Faso, with carrot edible-part concentration at 3.5 µg/g DW at 500 µg/L As(V) irrigation and cooking with As-free water reducing content by ~39% |
| 16 | [[sources/ahmed2019-irrigation-water-bangladesh-seasonal\|Ahmed et al. 2019]]. *Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables and the Difference between Dry and Wet Seasons Near a Multi-Industry Zone in Bangladesh*, Water | 2019 | Peer-reviewed | BD Pb, Cd, tAs, Cr, Cu, Zn occurrence in Irrigation water, soil, and mixed vegetables from 3 industrial zone areas (Banglabazar, Kashimpur, Chandra) in Gazipur District, Bangladesh.... (n=243) |
| 17 | [[sources/ahmed2017-bangladesh-vegetable-arsenic\|Ahmed et al. 2017]]. *Arsenic Contamination of Water-Soil-Crop System in an Industrial Area of Bangladesh*, International Journal of Environment | 2017 | Peer-reviewed | BD tAs occurrence in Vegetables grown in a Gazipur industrial-area water-soil-crop system in Bangladesh (n=27) |
| 18 | [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | Total Hg in root crops and other vegetables near two newly-operational Chinese coal-fired power plants, with atmospheric deposition patterns (leaf-greater-than-root) distinguishing aerial Hg from soil-uptake pathways |
| 19 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 20 | [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|Khan et al. 2015]]. *The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review*, Environmental Science and Pollution Research | 2015 | Review | Soil-to-plant transfer mechanisms (ZIP/IRT1 for Cd, phosphate transporters for As, aquaporins for Hg) and tuber-level redistribution patterns supporting the upstream uptake logic for Pb, Cd, tAs, tHg, Ni, Al, and Cr in root vegetables |
| 21 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter covering vegetable and root crop Cd accumulation pathways |
| 22 | [[sources/stasinos2014-heavy-metals-tubers-review\|Stasinos et al. 2014]]. *The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review*, Journal of Food Science | 2014 | Review | GR/LV/US Pb, Cd, tAs, Cr, Ni, Al occurrence in Review of global studies on carrots, onions, and potatoes from polluted irrigation water contexts |
| 23 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; root vegetables among the food groups contributing to European dietary Cd exposure, with occurrence data from the EU monitoring dataset |
| 24 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | OEHHA Cd hazard identification supporting Prop 65 reproductive-toxicity listing; includes dietary exposure context mentioning root vegetables and potatoes |
| 25 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex Cd and Pb international maximum levels applicable to root vegetable matrices |
| 26 | [[sources/mahaffey1975-fda-total-diet-study-heavy-metals\|Mahaffey et al. 1975]]. *Heavy Metal Exposure from Foods*, Environmental Health Perspectives | 1975 | Peer-reviewed | US Pb, Cd, tHg, tAs, Zn, Se occurrence in US FDA Total Diet Study (Market Basket Survey), FY 1968–1974. 30 market baskets per year purchased from retail... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
