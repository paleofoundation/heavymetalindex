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
sources: 88
---

# Root vegetables

FSA/Fera measured this ingredient or a closely matching non-infant-specific food composite in the FS102048 survey. Exact concentrations remain in progress until Table 6 is parsed into structured ingredient rows with quantitation flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Root vegetables are a broad category of edible plant storage organs that develop entirely within the soil matrix, including carrots (Daucus carota), parsnips (Pastinaca sativa), turnips (Brassica rapa), beets (Beta vulgaris), celeriac (Apium graveolens var. rapaceum), and related crops. Because the edible organ grows in direct contact with soil solution, root vegetables are inherently more susceptible to heavy metal uptake and surface contamination than aerial plant parts such as fruits or leaves. Cadmium (Cd) is the analyte of greatest concern in this category: it is present in most agricultural soils at varying concentrations, has high bioavailability relative to other metals in soil solution, and is actively taken up through the same zinc transporter channels that plants use to acquire the essential nutrient zinc. Soil Cd loading is driven primarily by the historical and ongoing application of phosphate fertilizers derived from phosphate rock containing Cd as a co-contaminant, atmospheric deposition near industrial sources, and naturally elevated geogenic Cd in some soil types. Lead (Pb) accumulation in root vegetables occurs primarily through surface adsorption: soil particles and dissolved Pb adhere to the root surface during growth and post-harvest handling, and internal uptake of Pb is limited by the root epidermis under most soil conditions. However, when Pb-contaminated soil is mechanically worked into the root tissue through damage or when surface contamination is not adequately removed, surface Pb can represent a meaningful contributor to the analytical total. Different root vegetable species show different Cd accumulation efficiencies: leafy root crops and those with more permeable root surfaces tend to accumulate more Cd per unit dry weight than compact, waxy-skinned varieties. Potatoes are separately captured on [[ingredients/potato-chips]] for the snack-product context; sweet potato is separately captured on [[ingredients/sweet-potato]] for the infant-food context.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=10 | 9.5–27.5 | medium | [[sources/albishi2026-cassava-flour-biofortification\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|3]] |
| Cd | n=13 | 0–41 | high | [[sources/albishi2026-cassava-flour-biofortification\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|3]] |
| iAs | n=2 | 3.3–239.4 | low | [[sources/sadee2023-arsenic-speciation-vegetables\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=8 | 5–50 | medium | [[sources/albishi2026-cassava-flour-biofortification\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|3]] |
| tHg | n=5 | 0–0.9 | medium | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/li2017-mercury-vegetables-grains-coal-power-china\|3]] |
| Ni | n=6 | 400–1600 | medium | [[sources/imongben2026-kaduna-vegetables-hra\|1]], [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|2]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|3]] |
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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/jecfa-91st-cadmium-2022|Cadmium: dietary exposure assessment]]<span class="hmi-ref-meta">Joint FAO/WHO Expert Committee on Food Additives · WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) · 2022 · [www.who.int](https://www.who.int/publications/i/item/9789240060760)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/nordberg2015-cadmium-chapter|Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals]]<span class="hmi-ref-meta">Nordberg GF, Nogawa K, and Nordberg M · Academic Press / Elsevier, Amsterdam · 2015 · [doi.org/10.1016/B978-0-444-59453-2.00032-9](https://doi.org/10.1016/B978-0-444-59453-2.00032-9)</span><span class="hmi-ref-tag">Textbook</span>
5. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/albishi2026-cassava-flour-biofortification\|Albishi et al. 2026]]. *In vitro evaluation of bio-fortification effects on the nutritional quality, toxicological safety, and antioxidant of cassava (Manihot esculenta) flour, and environmental safety of processing water, using natural additives*, Frontiers in Nutrition | 2026 | Peer-reviewed | Pb, Cd, tAs, and Cr in Nigerian cassava flour under control and 11 biofortification treatments, with control Pb at 61.33 to 68.67 µg/kg DW and all values well below WHO/FAO MPLs |
| 2 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | Cr and Ni in carrots, sweet potatoes, and other vegetables from 5 Kaduna markets (Nigeria) by ED-XRF, with Cr up to 59.1 mg/kg DW in potato and HI exceeding 1 for both age groups |
| 3 | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|Ye et al. 2026]]. *Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China*, Foods | 2026 | Peer-reviewed | Tin in 673 fresh-vegetable samples (including root vegetables) within a 2014-sample Zhejiang Province survey, with fresh-vegetable Sn uniformly low and all inorganic-Sn THQ values below 1 |
| 4 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 5 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 6 | [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | Pb, Cd, tAs, Ni, Cr, and tHg in Hawke's Bay (NZ) root vegetables (sweet potato, radish, beetroot, carrot) post-Cyclone Gabrielle, with organic production independently associated with lower Cd and Ni |
| 7 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 8 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 9 | [[sources/mohammadi2025-iran-carrot-cucumber-metals\|Mohammadi et al. 2025]]. *Health risk assessment of heavy metals in root and fruit vegetables in Iran using Monte Carlo simulation*, Discover Sustainability | 2025 | Peer-reviewed | IR Pb, Cd, Cr, Ni occurrence in Three carrot samples and three cucumber samples from each of seven cities or sampling points in Fars Province,... (n=42) |
| 10 | [[sources/saleem2025-nd-vegetables-hra\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Pb, Cd, tAs, tHg, Ni, Cr occurrence in 82 samples across 13 locally grown vegetable species (potato n=8, onion n=7, tomato n=7, sugar beet n=7, green... (n=82) |
| 11 | [[sources/malone2024-community-garden-soils-us\|Malone et al. 2024]]. *Trace Metal Contamination in Community Garden Soils across the United States*, Sustainability | 2024 | Review | Integrative review of Pb, tAs, Cd in US community garden soils across 52 studies, anchoring the upstream soil-contamination context for root-vegetable uptake and noting the 2024 EPA soil-Pb screening reduction from 400 to 200 ppm |
| 12 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn occurrence in 244 commercially purchased food samples from six supermarkets, six farmers' markets, and one wholesale market across Shanyang and... (n=244) |
| 13 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Cu, Zn, Cd, and Pb in potato and onion among 8 vegetable types from Babol (Iran), with root vegetables within Iran National Standards and below leafy-vegetable concentrations |
| 14 | [[sources/kharkwal2023-cooked-beans-vegetables-metals\|Kharkwal et al. 2023]]. *Non-carcinogenic and carcinogenic health risk assessment of heavy metals in cooked beans and vegetables in Punjab, North India*, Food Science & Nutrition | 2023 | Peer-reviewed | IN tAs, Cd, Pb, tHg occurrence in Cooked beans and cooked vegetable preparations collected from 150 selected households across 30 urban and rural locations in... (n=150) |
| 15 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | IEUBK/ICRP/AALM Pb biokinetic modeling treating root-vegetable purees as one of the consumer baby-food intake categories, with combined food and water contributing under 15% of infant BLL variance vs soil/dust dominance |
| 16 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 17 | [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|Romero-Crespo et al. 2023]]. *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | tAs, Cd, Cr, Ni, Pb in carrots, turnips, and cassava near the Ponce Enriquez gold mining area (Ecuador), with As at 2.55 mg/kg in turnips and Cd at 1.64 mg/kg in turnips both exceeding FAO/WHO MPLs |
| 18 | [[sources/sadee2023-arsenic-speciation-vegetables\|Sadee et al. 2023]]. *Toxicity, arsenic speciation and characteristics of hyphenated techniques used for arsenic determination in vegetables. A review*, RSC Advances | 2023 | Peer-reviewed | global tAs, iAs occurrence in Review paper; no primary samples; synthesizes published arsenic speciation data in vegetables globally |
| 19 | [[sources/sixto2023-potatoes-sweet-potatoes-metals\|Sixto et al. 2023]]. *Inorganic contaminants (As, Cd, Pb) in peeled and whole potatoes and sweet potatoes*, Agrociencia Uruguay | 2023 | Peer-reviewed | UY tAs, Cd, Pb occurrence in Pooled potato and sweet-potato samples from Uruguay's Metropolitan Agrifood Market, collected in February and July-August between 2018 and... (n=22) |
| 20 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 21 | [[sources/bramwell2022-urban-garden-produce-lead\|Bramwell et al. 2022]]. *Determinants of blood and saliva lead concentrations in adult gardeners on urban agricultural sites*, Environmental Geochemistry and Health | 2022 | Peer-reviewed | GB Pb occurrence in 43 adult urban-agriculture-site gardeners and 29 matched controls in Newcastle upon Tyne, UK; environmental sampling included nearly 280... (n=72) |
| 22 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA global Cd dietary exposure assessment; root vegetables (including potatoes and carrots) included in national food-basket contributions |
| 23 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | Cr, Cd, Pb, Ni, Cu, Zn, Fe, Mn in beet, radish, carrot, and turnip from Dhaka's Kawran Bazar market, with one of four root vegetables exceeding HI of 1 versus four of five leafy vegetables |
| 24 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 25 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | tAs uptake by carrot under controlled As(V)-spiked irrigation in Burkina Faso, with carrot edible-part concentration at 3.5 µg/g DW at 500 µg/L As(V) irrigation and cooking with As-free water reducing content by ~39% |
| 26 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 27 | [[sources/fonge2021-cabbage-carrot-metals-cameroon\|Fonge et al. 2021]]. *An assessment of heavy metal exposure risk associated with consumption of cabbage and carrot grown in a tropical Savannah region*, Sustainable Environment | 2021 | Peer-reviewed | CM tAs, Cd, Co, Cr, Cu, Fe, Mn, Ni, Pb, Zn occurrence in Triplicate edible-portion samples from cabbage-head farms and carrot-root farms at four Santa sites in the North West Region,... (n=24) |
| 28 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 29 | [[sources/jiang2020-henan-battery-factory-crops-metals\|Jiang et al. 2020]]. *Compound health risk assessment of cumulative heavy metal exposure: A case study of a village near a battery factory in Henan Province, China*, Environmental Science: Processes & Impacts | 2020 | Peer-reviewed | CN tHg, tAs, Ni, Pb, Cd, Cr, Cu, Zn occurrence in Locally produced wheat, corn, and vegetables collected in SZD village near a battery factory in Xinxiang, Henan Province,... |
| 30 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 31 | [[sources/ahmed2019-irrigation-water-bangladesh-seasonal\|Ahmed et al. 2019]]. *Heavy Metal Contamination of Irrigation Water, Soil, and Vegetables and the Difference between Dry and Wet Seasons Near a Multi-Industry Zone in Bangladesh*, Water | 2019 | Peer-reviewed | BD Pb, Cd, tAs, Cr, Cu, Zn occurrence in Irrigation water, soil, and mixed vegetables from 3 industrial zone areas (Banglabazar, Kashimpur, Chandra) in Gazipur District, Bangladesh.... (n=243) |
| 32 | [[sources/hussain2019-plant-food-heavy-metal-review\|Hussain et al. 2019]]. *Arsenic and Heavy Metal (Cadmium, Lead, Mercury and Nickel) Contamination in Plant-Based Foods*, Plant and Human Health, Volume 2 | 2019 | Book chapter | GLOBAL tAs, Cd, Pb, tHg, Ni occurrence in Review chapter compiling published occurrence ranges for arsenic, cadmium, lead, mercury, and nickel in plant-based foods including cereal... |
| 33 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 34 | [[sources/alimohammadi2018-tehran-supermarket-vegetables\|Alimohammadi et al. 2018]]. *Heavy metal(oid)s concentration in Tehran supermarket vegetables: carcinogenic and non-carcinogenic health risk assessment*, Toxin Reviews | 2018 | Peer-reviewed | IR tAs, Cd, Cr, Cu, Ni, Pb, Zn occurrence in Six vegetable types (lettuce, cabbage, tomato, cucumber, potato, carrot; n=16 each, 96 total) collected from Tehran central fruit... (n=96) |
| 35 | [[sources/ahmed2017-bangladesh-vegetable-arsenic\|Ahmed et al. 2017]]. *Arsenic Contamination of Water-Soil-Crop System in an Industrial Area of Bangladesh*, International Journal of Environment | 2017 | Peer-reviewed | BD tAs occurrence in Vegetables grown in a Gazipur industrial-area water-soil-crop system in Bangladesh (n=27) |
| 36 | [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Vegetables (lettuce, amaranth, water spinach, tomato, eggplant, pepper, cucumber, cowpea), grains (rice, maize), and soils sampled from 6... (n=120) |
| 37 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
| 38 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 39 | [[sources/hossain2016-bangladesh-vegetables-pb-cd-cr\|AMMM et al. 2016]]. *Environmental surveillance of commonly-grown vegetables for investigating potential lead and chromium contamination intensification in Bangladesh*, SpringerPlus | 2016 | Peer-reviewed | BD Pb, Cd, Cr occurrence in Commonly grown vegetables collected across all 64 districts of Bangladesh: white potato, green cabbage, red spinach, white radish,... (n=292) |
| 40 | [[sources/pan2016-zhejiang-vegetables-metals\|X-D et al. 2016]]. *Levels and potential health risk of heavy metals in marketed vegetables in Zhejiang, China*, Scientific Reports | 2016 | Peer-reviewed | CN tAs, Cd, Cr, tHg, Ni, Pb occurrence in Five thousand seven hundred eighty-five vegetable samples of 28 species collected from Zhejiang province, China, from March to... (n=5785) |
| 41 | [[sources/sharma2016-spinach-wastewater-metals\|Sharma et al. 2016]]. *Heavy metals in vegetables: screening health risks involved in cultivation along wastewater drain and irrigating with wastewater*, SpringerPlus | 2016 | Peer-reviewed | IN Cd, Pb, Cu, Co, Fe occurrence in Edible portions of 12 common vegetable types from three Amritsar, Punjab agricultural sites, collected in triplicate per vegetable/site. (n=108) |
| 42 | [[sources/islam2015-bangladesh-foods-heavy-metals\|Islam et al. 2015]]. *The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh*, Ecotoxicology and Environmental Safety | 2015 | Peer-reviewed | BD Cr, Ni, Cu, tAs, Cd, Pb occurrence in Commonly consumed meat, egg, fish, milk, vegetable, cereal, and fruit foods collected from agriculture fields, farms, river, and... |
| 43 | [[sources/iyabo2015-ekiti-staple-foods-metals\|Iyabo et al. 2015]]. *Toxic and Essential Metals in Staple Foods Commonly Consumed by Students in Ekiti State, South West, Nigeria*, International Journal of Chemistry | 2015 | Peer-reviewed | NG Zn, Cu, Cd, Pb occurrence in Thirty listed staple food items identified from a questionnaire of 200 volunteered Ekiti State University students and purchased... (n=30) |
| 44 | [[sources/khan2015-heavy-metals-food-plants-bioaccumulation\|Khan et al. 2015]]. *The uptake and bioaccumulation of heavy metals by food plants, their effects on plants nutrients, and associated health risk: a review*, Environmental Science and Pollution Research | 2015 | Review | Soil-to-plant transfer mechanisms (ZIP/IRT1 for Cd, phosphate transporters for As, aquaporins for Hg) and tuber-level redistribution patterns supporting the upstream uptake logic for Pb, Cd, tAs, tHg, Ni, Al, and Cr in root vegetables |
| 45 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter covering vegetable and root crop Cd accumulation pathways |
| 46 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
| 47 | [[sources/cherfi2014-algeria-fruits-vegetables-metals\|Cherfi et al. 2014]]. *Food survey: Levels and potential health risks of chromium, lead, zinc and copper content in fruits and vegetables consumed in Algeria*, Food and Chemical Toxicology | 2014 | Peer-reviewed | DZ Cr, Pb, Zn, Cu occurrence in Two fruit and thirteen vegetable foodstuffs purchased from two wholesale markets supplying Boumerdes, Algeria, during the first two... (n=15) |
| 48 | [[sources/stasinos2014-heavy-metals-tubers-review\|Stasinos et al. 2014]]. *The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review*, Journal of Food Science | 2014 | Review | GR/LV/US Pb, Cd, tAs, Cr, Ni, Al occurrence in Review of global studies on carrots, onions, and potatoes from polluted irrigation water contexts |
| 49 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 50 | [[sources/elbagermi2012-misurata-fruits-vegetables-metals\|Elbagermi et al. 2012]]. *Monitoring of Heavy Metal Content in Fruits and Vegetables Collected from Production and Market Sites in the Misurata Area of Libya*, ISRN Analytical Chemistry | 2012 | Peer-reviewed | LY Pb, Cd, Zn, Cu, Co, Ni occurrence in Fruit and vegetable produce purchased from several local suppliers and markets in Misurata City, Libya, during 2010. (n=250) |
| 51 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 52 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; root vegetables among the food groups contributing to European dietary Cd exposure, with occurrence data from the EU monitoring dataset |
| 53 | [[sources/jecfa-64th-cadmium-tin-2006\|JECFA 2006]]. *Evaluation of certain food contaminants — Sixty-fourth report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 930 (Sixty-fourth meeting of JECFA, Rome, 8-17 February 2005) | 2006 | Government report | international Cd, Sn occurrence in Cadmium: raw or aggregated occurrence data submitted to GEMS/Food by Australia, Canada, Germany, Japan, New Zealand, Norway, USA,... |
| 54 | [[sources/ec2004-scoop-heavy-metals-dietary-exposure\|EC 2004]]. *Assessment of the dietary exposure to arsenic, cadmium, lead and mercury of the population of the EU Member States*, Reports on tasks for scientific cooperation, SCOOP Task 3.2.11 | 2004 | Government report | EU/BE/DK tAs, Cd, Pb, tHg occurrence in Occurrence, consumption, and intake submissions for arsenic, cadmium, lead, and mercury from EU Member States and Norway under... |
| 55 | [[sources/zhou2000-china-vegetable-heavy-metals-review\|Zhou et al. 2000]]. *Heavy Metal Contamination in Vegetables and Their Control in China*, Food Reviews International | 2000 | Peer-reviewed | CN Pb, Cd, tHg, tAs, Cr, Ni, Cu, Zn occurrence in Secondary review of previously published Chinese city surveys of vegetables and some grains. Tables 2-11 reproduce values from... |
| 56 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | OEHHA Cd hazard identification supporting Prop 65 reproductive-toxicity listing; includes dietary exposure context mentioning root vegetables and potatoes |
| 57 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex Cd and Pb international maximum levels applicable to root vegetable matrices |
| 58 | [[sources/dabeka1995-canadian-food-composites-metals\|Dabeka et al. 1995]]. *Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988*, Journal of AOAC International | 1995 | Peer-reviewed | CA Pb, Cd, Ni, Co occurrence in Five Canadian total-diet composite groups, each with 113 composites and 39 composite subsets, prepared from foods purchased in... (n=760) |
| 59 | [[sources/mahaffey1975-fda-total-diet-study-heavy-metals\|Mahaffey et al. 1975]]. *Heavy Metal Exposure from Foods*, Environmental Health Perspectives | 1975 | Peer-reviewed | US Pb, Cd, tHg, tAs, Zn, Se occurrence in US FDA Total Diet Study (Market Basket Survey), FY 1968–1974. 30 market baskets per year purchased from retail... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 5 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
