---
title: "Seafood"
type: ingredient
commodity: seafood
label: "Seafood"
aliases: [aquatic-foods, aquatic-vegetables]
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [20, 150]
    p95_ppb: 300
    confidence: high
    n_studies: 28
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: 1500
    confidence: high
    n_studies: 31
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 100
    confidence: high
    n_studies: 18
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [50, 300]
    p95_ppb: 700
    confidence: high
    n_studies: 44
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [100, 1000]
    p95_ppb: null
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [50, 300]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [500, 5000]
    p95_ppb: 10000
    confidence: high
    n_studies: 35
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
used_in_products: [fish-containing-baby-foods]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 100
---

# Seafood

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=28 | 20–150 | 300 | high | [[sources/balzani2026-fish-metals-dalyan-lake\|1]], [[sources/hernandez-montoya2026-heavy-metals-foods-review\|2]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|3]] |
| Cd | n=31 | 50–500 | 1500 | high | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|3]] |
| iAs | n=18 | 5–50 | 100 | high | [[sources/codex-cccf17-2024\|1]], [[sources/mancuso2024-food-contamination-cvd\|2]], [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|3]] |
| tAs | n=35 | 500–5000 | 10000 | high | [[sources/balzani2026-fish-metals-dalyan-lake\|1]], [[sources/hernandez-montoya2026-heavy-metals-foods-review\|2]], [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|3]] |
| tHg | n=44 | 50–300 | 700 | high | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|1]], [[sources/wu2025-climate-meghan-freshwater-fish-china\|2]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|3]] |
| Ni | n=10 | 50–500 | — | medium | [[sources/balzani2026-fish-metals-dalyan-lake\|1]], [[sources/hernandez-montoya2026-heavy-metals-foods-review\|2]], [[sources/olgunoglu2025-scorpionfish-izmir-metals\|3]] |
| Al | n=7 | 100–1000 | — | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/berber2024-crayfish-metal-content-turkey\|2]], [[sources/hussein2023-freshwater-marine-fish-egypt\|3]] |
| Cr | n=6 | 50–300 | — | medium | [[sources/balzani2026-fish-metals-dalyan-lake\|1]], [[sources/olgunoglu2025-scorpionfish-izmir-metals\|2]], [[sources/nour2025-djiboutian-seaweeds-metals\|3]] |
| Sn | n=7 | 100–500 | — | medium | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|1]], [[sources/hussein2024-toxic-metals-canned-fish-egypt\|2]], [[sources/benjamin2023-canned-fish-ghana\|3]] |
| U | data gap | — | — | — | — |

## Routing

This node is linked from [[products/fish-containing-baby-foods]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/balzani2026-fish-metals-dalyan-lake\|Balzani et al. 2026]]. *Metals and Metalloids Accumulation and Biomagnification in Three Commercially Important Fishes from a Turkish Brackish Lake*, Environmental Science and Pollution Research | 2026 | Peer-reviewed | tAs, Pb, Cr, and Ni in dorsal muscle of three commercially fished species from Dalyan Lake, Türkiye (n=27); Cr the only metal showing biomagnification, As and Pb showing trophic dilution |
| 2 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | codex/EU/US Pb, Cd, tAs, tHg, MeHg, Ni occurrence in Scoping review of 121 peer-reviewed studies (Scopus, Web of Science, ScienceDirect, SpringerLink, Wiley Online Library, Google Scholar; published... |
| 3 | [[sources/dietz2025-arctic-mercury-isotopes-greenland\|Dietz et al. 2025]]. *Stable isotopes unveil ocean transport of legacy mercury into Arctic food webs*, Nature Communications | 2025 | Peer-reviewed | GL tHg, MeHg occurrence in Arctic char, shorthorn sculpin, ringed seal, glaucous gull, polar bear, and peat samples across Greenland (Central West, Northwest,... |
| 4 | [[sources/dineshkumar2025-fish-heavy-metals\|Dinesh et al. 2025]]. *Comparative evaluation of heavy metal concentration in three commercially important fish: insights from organ-specific and interspecies variability*, Frontiers in Marine Science | 2025 | Peer-reviewed | IN Cd, Pb, Cr, Ni, Al occurrence in three commercially important fish species assessed by tissue and organ |
| 5 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg, MeHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 6 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 7 | [[sources/nour2025-djiboutian-seaweeds-metals\|Nour et al. 2025]]. *Nutritional and heavy metal composition of seaweeds from the coast of Djibouti*, Food Science and Nutrition | 2025 | Peer-reviewed | Cr, Ni, As, Cd, and Pb in six seaweed species from the Djiboutian coastline; As notably elevated in Turbinaria decurrens (70.2 µg/g DW), one of the first datasets for edible marine algae from the Horn of Africa |
| 8 | [[sources/olgunoglu2025-scorpionfish-izmir-metals\|Olgunoglu et al. 2025]]. *Seasonal Variability and Sex-Specific Accumulation of Trace Metals in Black Scorpionfish (Scorpaena porcus Linnaeus, 1758) from Izmir Bay (Aegean Sea), Türkiye: Implications for Human Health Risk Assessment*, Life | 2025 | Peer-reviewed | TR Cd, Cr, Cu, Fe, Hg, Mn, Ni, Pb, Se, Zn occurrence in Black scorpionfish (Scorpaena porcus) collected seasonally from Izmir Bay, Aegean Sea, Türkiye, 2023–2024; 28 males and 24 females (n=52) |
| 9 | [[sources/scovronick2025-glynn-county-exposure\|Scovronick et al. 2025]]. *Assessment of human exposure to uncommon industrial toxicants in Glynn County, Georgia*, Environmental Pollution | 2025 | Peer-reviewed | Biomonitoring of Pb, Cd, and tHg in 96 adults near Superfund sites in coastal Georgia; seafood consumption a significant predictor of PCB exposure, blood Hg comparable to US general population |
| 10 | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|Ventura et al. 2025]]. *Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach*, Foods | 2025 | Peer-reviewed | Portuguese TDS — tAs, Cd, Pb, and Sn in 163 pooled samples across 17 food groups including fish and seafood; all levels below applicable legal limits for the Portuguese population |
| 11 | [[sources/wu2025-climate-meghan-freshwater-fish-china\|Wu et al. 2025]]. *Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers*, Proceedings of the National Academy of Sciences | 2025 | Peer-reviewed | CN MeHg, tHg occurrence in Freshwater wild and farmed fish, marine wild fish sampled across China (22.5–49.4° N, 85.2–134.6° E, 2005–2020, 164 sampling... (n=13000) |
| 12 | [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador\|Aguilar-Miranda et al. 2024]]. *Total mercury exposure through canned tuna in water sold in Quito, Ecuador*, Scientific Reports | 2024 | Peer-reviewed | EC/EU/US tHg occurrence in Sixty cans of tuna in water purchased from Quito supermarkets, March 2022-March 2023; three anonymized coded product groups... (n=60) |
| 13 | [[sources/atsdr-mercury-toxprofile-2024\|ATSDR 2024]]. *Toxicological Profile for Mercury*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2024 | Government report | ATSDR comprehensive mercury toxicology profile — identifies methylmercury in fish and seafood as the dominant dietary exposure route and derives species-specific MRLs for elemental Hg, inorganic Hg, and MeHg |
| 14 | [[sources/bakhshalizadeh2024-caspian-sturgeon-metals\|Bakhshalizadeh et al. 2024]]. *Trace and heavy metal concentrations in pectoral fin of Acipenser stellatus (stellate sturgeon) from the Caspian Sea*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | IR As, Cd, Hg, Pb, Ni, V occurrence in Stellate sturgeon (Acipenser stellatus) pectoral fin tissue, Caspian Sea, Iran (n=40) |
| 15 | [[sources/berber2024-crayfish-metal-content-turkey\|Berber et al. 2024]]. *Metal content and fatty acid profiles in narrow-clawed crayfish (Pontastacus leptodactylus) from Atikhisar Dam Lake, Turkey: seasonal variation and health risk assessment*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | TR Fe, Zn, Al, Cu, Mn, Se, As, Hg, Cd, Pb occurrence in Pontastacus leptodactylus (narrow-clawed crayfish) from Atikhisar Dam Lake, Çanakkale, Turkey; monthly sampling over 12 months; male and female... |
| 16 | [[sources/bfr2024-methylmercury-fish-seafood-germany\|BfR 2024]]. *Methylmercury in fish and seafood – health risk assessment of new data from the BfR MEAL study*, BfR Opinion 023/2024 | 2024 | Government report | DE/EU MeHg, tHg occurrence in German population across age groups (infants 0.5–<1 yr through elderly 65–<80 yr); consumption data from KiESEL (n=1,008 children... |
| 17 | [[sources/chamorro2024-bluefin-tuna-mercury-review\|Chamorro et al. 2024]]. *Atlantic bluefin tuna (Thunnus thynnus): health benefits, contaminants and risk-benefit analysis for human consumption*, Food Reviews International | 2024 | Peer-reviewed | EU tHg, MeHg, Cd, Pb, As occurrence in Review of Atlantic bluefin tuna (Thunnus thynnus) literature on contaminants and nutritional composition |
| 18 | [[sources/christian2024-caribbean-fish-mercury\|Christian et al. 2024]]. *An evaluation of fish and invertebrate mercury concentrations in the Caribbean Region*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | tHg in >1,600 samples of 108 species from 11 Caribbean countries (2005–2023); 26% exceeded the 0.46 µg/g FDA/EPA guideline, with tHg positively correlated with trophic level and fish length |
| 19 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | CCCF17 session report — initiated new work on a Cd Code of Practice with an annex for fish and seafood, extending the cocoa CoP model to additional food matrices |
| 20 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | CN tAs occurrence in Chongqing city residents; food samples from 39 districts collected 2018-2023 covering 10 food categories; dietary consumption data from... (n=4900) |
| 21 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | CN Ni occurrence in Zhejiang Province residents, 11 cities, 2018–2019; n=19,000 in consumption survey (n=2628) |
| 22 | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|Hussein et al. 2024]]. *Risk assessment of some toxic metals in canned fish products retailed in Mansoura, Egypt*, Open Veterinary Journal | 2024 | Peer-reviewed | Pb, Cd, tAs, tHg, Al, and Sn in 100 canned fish (herring, mackerel, salmon, sardine, tuna) from Egypt; sardine and tuna showed highest EU limit exceedance rates, Hg hazard index >1 for all species |
| 23 | [[sources/li2024-global-fisheries-mehg\|Li et al. 2024]]. *Global fishing patterns amplify human exposures to methylmercury*, Proceedings of the National Academy of Sciences | 2024 | Peer-reviewed | global MeHg occurrence in Global fisheries modeling dataset: catch-weighted MeHg concentrations estimated for 1,774 marine species across global exclusive economic zones using... (n=1482) |
| 24 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | EU/global Pb, Cd, iAs, tAs, tHg occurrence in null |
| 25 | [[sources/raab2024-arsenolipids-chlamydomonas.md\|Raab et al. 2024]]. *Arsenolipids in the green microalga Chlamydomonas reinhardtii: first report of arsenosugar phospholipid (AsSugPhytol)*, Metallomics | 2024 | Peer-reviewed | Freshwater-microalga arsenic speciation showing ~57% of total As bound as arsenolipids (first AsSugPhytol detection in any organism), extending the arsenobetaine/arsenosugar speciation context to algae-derived seafood ingredients |
| 26 | [[sources/rohonczy2024-arctic-foodweb-cd-hg\|Rohonczy et al. 2024]]. *Cadmium and mercury trophic transfer in the Arctic marine food web of Hudson Bay*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | CA Cd, tHg, MeHg occurrence in Multiple Arctic marine species from Hudson Bay, Canada: blue mussel, common eider, sculpin, Arctic cod, ringed seal (n=781) |
| 27 | [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|Sadee et al. 2024]]. *Recent developments in speciation and determination of arsenic in marine organisms using different analytical techniques. A review*, RSC Advances | 2024 | Peer-reviewed | iAs, tAs occurrence in Systematic review of published arsenic occurrence and speciation studies in marine organisms; no single primary cohort |
| 28 | [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|Sim et al. 2024]]. *Determination of inorganic arsenic in seaweed, grain, grass silage, and insect protein by HPLC-ICP-MS using a design of experiments optimization approach*, Food Chemistry | 2024 | Peer-reviewed | EU iAs, tAs, As occurrence in Seaweed species (Laminaria digitata, Fucus spp., Saccharina latissima, Asparagopsis taxiformis, Porphyra spp.), rice, grass silage, and insect proteins;... |
| 29 | [[sources/yamashita2024-laep-oes-hg-tuna-japan\|Yamashita 2024]]. *LAEP-OES validation for total mercury in tuna and fish from Japanese markets*, unknown | 2024 | Peer-reviewed | LAEP-OES method validation for tHg in 102 fish specimens from Japanese markets including tuna; provides both method validation and real tHg occurrence concentrations from commercially available fish |
| 30 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 31 | [[sources/abbas2023-sparus-aurata-egypt-metals\|Abbas 2023]]. *Heavy Metal Levels and Cancer Risk Assessments of the Commercial Denis, Sparus aurata Collected from Bardawil Lake and Private Fish Farm Waters as a Cultured Source, Egypt* | 2023 | Peer-reviewed | EG Pb, Cd, Ni, Fe, Cu, Zn occurrence in Sparus aurata (gilthead seabream); n=40 wild (Bardawil Lake, North Sinai) and n=40 farmed (Ezbet Elborg/Domeitta, Egypt) (n=80) |
| 32 | [[sources/abdel-tawwab2023-cadmium-seabream-yeast\|Abdel-Tawwab et al. 2023]]. *Saccharomyces cerevisiae supplemented diets mitigate the effects of waterborne cadmium toxicity on gilthead seabream (Sparus aurata L.): growth performance, haemato-biochemical, stress biomarkers, and histopathological investigations* | 2023 | Peer-reviewed | EG Cd occurrence in Gilthead seabream (Sparus aurata, 20–24 g) in 3×3 factorial design: three dietary yeast levels × three waterborne Cd... |
| 33 | [[sources/alsulaiti2023-qatar-fish-mehg\|Al-Sulaiti et al. 2023]]. *Health risk assessment of methyl mercury from fish consumption in a sample of adult Qatari residents*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | QA tHg, MeHg occurrence in Adult Qatari residents aged 18+ (n=600 dietary survey respondents; 65 composite fish samples across 7 species) (n=65) |
| 34 | [[sources/bakhshalizadeh2023-mullet-ree-trace-caspian\|Bakhshalizadeh et al. 2023]]. *Bioaccumulation of rare earth elements and trace elements in different tissues of the golden grey mullet (Chelon auratus) in the southern Caspian Sea*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | IR tAs, Cd, tHg, Pb occurrence in Golden grey mullet (Chelon auratus) from southern Caspian Sea, Bandar Anzali coast, Iran; average weight 385±156 g, length... (n=20) |
| 35 | [[sources/benjamin2023-canned-fish-ghana\|Benjamin et al. 2023]]. *Levels of Heavy Metals in Selected Canned Fish on Cape Coast Market, Central Region, Ghana*, International Journal of Environment, Agriculture and Biotechnology | 2023 | Peer-reviewed | GH Pb, Sn, tHg occurrence in 10 canned fish products from Cape Coast market, Ghana: 4 mackerel brands (African Queen, Geisha, Ena Pa, Milano),... (n=10) |
| 36 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | ES/EU tHg, MeHg occurrence in Fish samples collected under the Valencian Community food health surveillance programme (Generalitat Valenciana); 560 THg measurements, 206 MeHg... (n=635) |
| 37 | [[sources/cardoso2023-mercury-portuguese-coast-seafood\|Cardoso et al. 2023]]. *Seasonal characterization of mercury contamination along the Portuguese coast: human health and environmental risk assessment*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | PT/EU tHg occurrence in Seasonal sampling over 1 year at three Portuguese estuaries (Ria de Aveiro, Tagus, Ria Formosa); water, macroalgae, and... |
| 38 | [[sources/coe2023-gut-microbiome-methylmercury-demethylation\|Coe et al. 2023]]. *Assessing the Role of the Gut Microbiome in Methylmercury Demethylation and Elimination in Humans and Gnotobiotic Mice*, Archives of Toxicology, Vol. 97, pp. 2399-2418 | 2023 | Peer-reviewed | Human cohort and gnotobiotic mouse evidence that gut microbiome composition determines MeHg demethylation efficiency — explains inter-individual variability in body burden at equivalent seafood MeHg intake |
| 39 | [[sources/davydiuk2023-arsenosugars-methylation\|Davydiuk et al. 2023]]. *Effects of Dietary Intake of Arsenosugars and Other Organic Arsenic Species on Studies of Arsenic Methylation Efficiency in Humans*, Environmental Health | 2023 | Peer-reviewed | global iAs, tAs occurrence in Critical review of published epidemiological and clinical studies using DMA in urine as arsenic methylation marker; no new... |
| 40 | [[sources/efsa2023-heavy-metals-seaweed\|EFSA 2023]]. *Dietary exposure assessment to heavy metals and iodine from seaweeds and halophytes for the European population*, EFSA Journal | 2023 | Peer-reviewed | EU Cd, Pb, tAs, iAs, tHg occurrence in European population dietary exposure assessment using occurrence data from EFSA's FoodEx2 taxonomy; n varies by analyte: Cd n=2,093,... (n=2093) |
| 41 | [[sources/egbe2023-heavy-metals-tilapia-cameroon\|Egbe et al. 2023]]. *Heavy metal exposure risk associated with ingestion of Oreochromis niloticus and Coptodon kottae harvested from a lacustrine ecosystem*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | CM Pb, Cd, tAs, Cr, Ni occurrence in 10 Oreochromis niloticus and 10 Coptodon kottae (endemic cichlid) sampled from Lake Barombi Kotto, Cameroon, with water and... (n=20) |
| 42 | [[sources/hoy2023-arsenic-speciation-freshwater-fish\|Hoy et al. 2023]]. *Arsenic speciation in freshwater fish: challenges and research needs*, Food Quality and Safety | 2023 | Peer-reviewed | CA/CN/FR iAs, tAs occurrence in Peer-reviewed review of published arsenic-speciation literature for freshwater fish; primary data tables summarize studies from Canada, China, France,... |
| 43 | [[sources/hussein2023-freshwater-marine-fish-egypt\|Hussein et al. 2023]]. *Risk assessment of toxic residues among some freshwater and marine water fish species*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Al occurrence in Freshwater and marine water fish from El-Obour city fish market, Egypt; six species (three freshwater, three marine), 20... (n=120) |
| 44 | [[sources/kosker2023-canned-fish-turkey\|Kosker et al. 2023]]. *Metal levels of canned fish sold in Türkiye: health risk assessment*, Frontiers in Nutrition | 2023 | Peer-reviewed | TR Pb, Cd, tAs, Al, Cr, Fe, Cu, Zn, Se occurrence in Canned fish products (28 tuna, 3 salmon, 1 mackerel, 1 anchovy) from 13 brands, Turkey 2021 (n=34) |
| 45 | [[sources/liu2023-arsenic-seafood-digestion\|Liu et al. 2023]]. *Transformation of arsenic species from seafood consumption during in vitro digestion*, Frontiers in Nutrition | 2023 | Peer-reviewed | CN iAs, tAs occurrence in Laboratory study using crab, scallop, turbot, and flounder seafood samples subjected to in vitro digestion (BARGE UBM method) |
| 46 | [[sources/molina2023-mercury-buenaventura-bay\|Molina et al. 2023]]. *Effect of environmental variables on mercury accumulation in sediments of an anthropogenically impacted tropical estuary (Buenaventura Bay, Colombian Pacific)*, Environmental Monitoring and Assessment | 2023 | Peer-reviewed | CO tHg occurrence in Sediment samples from four areas of Buenaventura Bay, Colombia, collected in dry and rainy seasons of 2015; cores... |
| 47 | [[sources/morshdy2023-heavy-metals-salted-fish-egypt\|AEMA et al. 2023]]. *Heavy metal contents in salted fish retailed in Egypt: Dietary intakes and health risk assessment* | 2023 | Peer-reviewed | EG Pb, Cd, tAs, tHg occurrence in 20 samples each of salted sardine, feseikh (salted mullet), sahlia (keeled mullet), and salted herrings from Zagazig markets,... (n=80) |
| 48 | [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|Nepper-Davidsen et al. 2023]]. *High spatial and temporal variation in biomass composition of the novel aquaculture target Ecklonia radiata*, Journal of Applied Phycology | 2023 | Peer-reviewed | NZ tAs, Cd, Pb, tHg occurrence in 24 homogenised Ecklonia radiata samples (12 spatial sites across North Island NZ + 12 monthly temporal samples at... (n=24) |
| 49 | [[sources/sonke2023-mercury-global-change\|Sonke et al. 2023]]. *Global change effects on biogeochemical mercury cycling*, Ambio | 2023 | Peer-reviewed | tHg, MeHg occurrence in Global synthesis — multiple study populations and monitoring networks |
| 50 | [[sources/wang2023-climate-marine-mercury\|Wang et al. 2023]]. *Climate-driven changes of global marine mercury cycles in 2100*, Proceedings of the National Academy of Sciences | 2023 | Peer-reviewed | tHg, MeHg occurrence in Global coupled climate-biogeochemistry model projections under RCP4.5 and RCP8.5 scenarios to 2100; no new observational data generated |
| 51 | [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|Ashley-Martin et al. 2022]]. *Biomonitoring of inorganic arsenic species in pregnancy*, Journal of Exposure Science & Environmental Epidemiology | 2022 | Peer-reviewed | CA/US/global iAs, tAs occurrence in Systematic review of biomonitoring studies of speciated iAs in pregnancy; covers cohort studies from Bangladesh, Spain, China, Mexico,... |
| 52 | [[sources/cegolon2022-hg-hair-trieste\|Cegolon et al. 2022]]. *Concentration of mercury in human hair and associated factors in residents of the Gulf of Trieste (North-Eastern Italy)*, Environmental Science and Pollution Research | 2022 | Peer-reviewed | IT/EU tHg, MeHg occurrence in General population residents of Friuli Venezia Giulia (FVG) coastal region, Gulf of Trieste, Italy; convenience sample recruited at... (n=301) |
| 53 | [[sources/chavez-capilla2022-arsenolipids-seafood\|Chávez-Capilla 2022]]. *The Need to Unravel Arsenolipid Transformations in Humans*, DNA and Cell Biology | 2022 | Peer-reviewed | AU/NZ/FR tAs, iAs occurrence in Review article synthesizing arsenic speciation data across multiple studies |
| 54 | [[sources/ec-reg-2022-617-mercury-fishery\|EC 2022]]. *Commission Regulation (EU) 2022/617 of 12 April 2022 amending Regulation (EC) No 1881/2006 as regards maximum levels of mercury in fish and salt*, Official Journal of the European Union, OJ L 115, 13.4.2022, pp. 60–63 | 2022 | Regulation | EU tHg, MeHg occurrence in Regulatory instrument — establishes binding maximum levels (MLs) for total mercury in fishery products on the EU market |
| 55 | [[sources/efsa2022-lemna-novel-food\|EFSA 2022]]. *Safety of Lemna minor and Lemna gibba whole plant material as a novel food pursuant to Regulation (EU) 2015/2283*, EFSA Journal | 2022 | Government report | EU tAs, Cd, Pb, tHg occurrence in Ten production batches (five Lemna minor, five Lemna gibba) from a commercial applicant, analyzed by ICP-MS per NEN... (n=10) |
| 56 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 57 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA 91st meeting Cd dietary exposure assessment — identifies seafood (bivalve molluscs, crustaceans, cephalopods) as a significant Cd exposure pathway alongside cereals and vegetables |
| 58 | [[sources/li2022-mercury-isotope-biota-review\|Li et al. 2022]]. *Internal Dynamics and Metabolism of Mercury in Biota: A Review of Insights from Mercury Stable Isotopes*, Environmental Science & Technology | 2022 | Peer-reviewed | tHg, MeHg occurrence in Synthesis of mercury isotope fractionation data across multiple biota studies (review) |
| 59 | [[sources/motta2022-marine-hg-isotopes\|Motta et al. 2022]]. *Mercury isotopic evidence for the importance of particles as a source of mercury to marine organisms*, Proceedings of the National Academy of Sciences | 2022 | Peer-reviewed | tHg, MeHg occurrence in Marine organisms (mesopelagic and bathypelagic fish and zooplankton) and water/particle samples from the North Pacific Ocean |
| 60 | [[sources/vainio2022-baltic-mercury-food-web\|Vainio et al. 2022]]. *Trophic Dynamics of Mercury in the Baltic Archipelago Sea Food Web: The Impact of Ecological and Ecophysiological Traits*, Environmental Science & Technology | 2022 | Peer-reviewed | FI/SE/DK tHg occurrence in 30 species from the Baltic Archipelago Sea (southwestern Finland), sampled 2017–2019 (white-tailed eagle 2013–2019); birds (3 spp.), fish... (n=136) |
| 61 | [[sources/zhao2022-china-tds6-lead-cadmium-exposure\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in 288 composite samples from the 24 provincial-level administrative divisions (PLADs) of the Sixth China Total Diet Study, covering... (n=288) |
| 62 | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|de et al. 2021]]. *Data on metals, nonmetal, and metalloid in the samples of the canned tuna and canned sardines sold in Brazil*, Data in Brief | 2021 | Peer-reviewed | BR Al, tAs, Ba, Cd, Co, Cr, Cu, Fe, Ni, Pb, Zn occurrence in Twenty-six product-code rows from Campo Grande, Mato Grosso do Sul, Brazil: 16 canned-tuna rows (four coded companies across... (n=26) |
| 63 | [[sources/farzan2021-hispanic-urinary-arsenic\|Farzan et al. 2021]]. *Demographic Predictors of Urinary Arsenic in a Low-Income Predominantly Hispanic Pregnancy Cohort in Los Angeles*, Journal of Exposure Science and Environmental Epidemiology | 2021 | Peer-reviewed | US tAs, iAs occurrence in Low-income predominantly Hispanic pregnant women in Los Angeles, California; MADRES cohort (n=241) |
| 64 | [[sources/liu2021-arsenolipids-seafood\|Liu et al. 2021]]. *Discovery and Identification of Arsenolipids Using a Precursor-Finder Strategy and Data-Independent Mass Spectrometry*, Environmental Science and Technology | 2021 | Peer-reviewed | CA tAs occurrence in Krill oil capsules, tuna fillets, hairtail fish heads, and kelp purchased from retail markets in Edmonton (Canada) and... (n=4) |
| 65 | [[sources/melnyk2021-mercury-anadromous-fish-penobscot\|Melnyk et al. 2021]]. *Risks from mercury in anadromous fish collected from Penobscot River, Maine*, Science of the Total Environment | 2021 | Peer-reviewed | US tHg occurrence in Composite samples of 6 anadromous fish species (alewife, American shad, blueback herring, rainbow smelt, striped bass, sea lamprey)... (n=75) |
| 66 | [[sources/raju2021-bivalves-cagayan-philippines\|Raju et al. 2021]]. *Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines*, Scholars Academic Journal of Biosciences 9(10):256-258 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two bivalve species from Cagayan Valley, Philippines: freshwater clam (Corbicula fluminea) and marine mussel (Mytilus edulis); collected with... |
| 67 | [[sources/ufelle2021-metals-chapter\|Ufelle et al. 2021]]. *Toxic Effects of Metals (Chapter 23), in Casarett & Doull's Essentials of Toxicology, Fourth Edition*, Casarett & Doull's Essentials of Toxicology, Fourth Edition. McGraw Hill Education | 2021 | Textbook chapter | Canonical toxicology reference for 29 metals including As, Cd, Hg, Pb, Ni; identifies seafood and rice as primary dietary exposure matrices for multiple metals |
| 68 | [[sources/dibella2020-augusta-meat-milk-seafood-metals\|Di et al. 2020]]. *Heavy Metals and PAHs in Meat, Milk, and Seafood From Augusta Area (Southern Italy): Contamination Levels, Dietary Intake, and Human Exposure Assessment*, Frontiers in Public Health 8:273 | 2020 | Peer-reviewed | IT/EU tAs, Cd, Cr, tHg, Ni, Pb, Zn occurrence in Meat, milk, and seafood from the Augusta-Melilli-Priolo industrial area in Southern Italy; seafood pooled across fish, mollusc, and... (n=Seafood from the Augusta Bay/Sicily study area plus terrestrial animal products from 26 farms: 5 bovine milk, 11 sheep/goat milk, 11 beef, and 3 pork samples.) |
| 69 | [[sources/maikanov2020-fish-products-shuchinsk-burabay-metals\|Maikanov et al. 2020]]. *Quality and safety of fish products in the Shuchinsk-Burabay Resort Zone*, Medycyna Weterynaryjna 76(10):585-588 | 2020 | Peer-reviewed | KZ tAs, Cd, tHg, Pb occurrence in Fish muscle samples from lakes in the Shuchinsk-Burabay resort zone, Kazakhstan. (n=44) |
| 70 | [[sources/sepulveda2020-callista-clam-metals\|Humberto et al. 2020]]. *Trace metals in two wild populations of the squalid callista clam (Megapitaria squalida) in the southeastern Gulf of California, Mexico*, Revista Internacional de Contaminacion Ambiental | 2020 | Peer-reviewed | MX Cu, Cd, Cr, Ni, Pb, Zn, tAs, tHg occurrence in Wild Megapitaria squalida clams from Altata and Agiabampo Bays in the southeastern Gulf of California |
| 71 | [[sources/fsanz2019-25th-australian-total-diet-study\|Zealand 2019]]. *25th Australian Total Diet Study*, Food Standards Australia New Zealand | 2019 | Government report | AU/NZ tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Australian total-diet survey: 88 food types, 508 prepared-food composite samples from all Australian states and territories, sampled May... (n=508) |
| 72 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | MX tHg, Pb, Cd, Cr occurrence in 48 samples of canned tuna (6 samples × 8 brands) and 20 samples of fresh fish (5 samples... (n=68) |
| 73 | [[sources/gongora-gomez2018-pen-shell-seasonal-metals\|Martin et al. 2018]]. *Seasonal levels of heavy metals in soft tissue and muscle of the pen shell Atrina maura from a farm in the southeastern coast of the Gulf of California, Mexico*, Revista Internacional de Contaminacion Ambiental | 2018 | Peer-reviewed | MX Cu, Cr, Cd, Ni, Pb, tAs, Zn, tHg occurrence in Farmed pen shell from the southeastern Gulf of California, sampled seasonally from summer 2011 to summer 2012 |
| 74 | [[sources/harding2018-bay-fundy-methylmercury\|Harding et al. 2018]]. *Bioaccumulation of methylmercury within the marine food web of the outer Bay of Fundy, Gulf of Maine*, PLoS ONE | 2018 | Peer-reviewed | CA/US MeHg, tHg occurrence in Marine food-web organisms from the outer Bay of Fundy and Gulf of Maine |
| 75 | [[sources/fda-epa-fish-consumption-advice\|FDA 2017]]. *Advice About Eating Fish — For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years*, U.S. FDA and U.S. EPA | 2017 | Government report | Joint FDA/EPA consumer guidance classifying fish by MeHg level into Best Choices, Good Choices, and Choices to Avoid — the operative US consumption advice for pregnant and breastfeeding women and children |
| 76 | [[sources/gongora-gomez2017-oysters-gulf-california-metals\|Martin et al. 2017]]. *Heavy-metal contents in oysters (Crassostrea gigas) cultivated on the southeastern coast of the Gulf of California, Mexico*, Hidrobiologica | 2017 | Peer-reviewed | MX Cu, Cr, Cd, Ni, Pb, tAs, Zn, tHg occurrence in Cultivated Pacific oysters from the southeastern Gulf of California, Mexico |
| 77 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 78 | [[sources/jecfa-82nd-arsenic\|JECFA 2017]]. *Safety Evaluation of Certain Food Additives (Arsenic), 82nd Meeting of JECFA*, WHO Food Additives Series 73 | 2017 | Government report | JECFA 82nd meeting arsenic monograph — addresses the iAs/tAs distinction, noting that seafood-derived organoarsenic (arsenobetaine, arsenosugars) is not the toxic species and must not be conflated with iAs |
| 79 | [[sources/smolikova2016-heavy-metals-fish-czech\|Smolikova et al. 2016]]. *Determination of heavy metals in fish products*, MendelNet 2016: Proceedings of International PhD Students Conference, pp. 651-656 | 2016 | Conference proceedings | CZ/EU tHg, Cd, Pb occurrence in 33 species of fish purchased in Brno City (Czech Republic) markets from 17 FAO localities, September 2015–June 2016;... (n=159) |
| 80 | [[sources/bhoyroo2015-scombrids-heavy-metals-mauritius\|Bhoyroo et al. 2015]]. *Detection of heavy metals bio-accumulation in scombrids for the determination of possible health hazard*, African Journal of Food Science and Technology 6(4):098-107 | 2015 | Peer-reviewed | MU Zn, Cu, Ni, Cr, Cd, Pb, tHg, tAs occurrence in Muscle tissue from yellowfin tuna, dogtooth tuna, marlin, and dorado caught in the Mauritian EEZ and sold/consumed as... (n=Four commercially edible pelagic fish species sampled in summer and winter from the Exclusive Economic Zone of Mauritius; per-species replicate counts not extractable from the text layer.) |
| 81 | [[sources/lim2015-korea-kriefs-dietary-exposure-pb-cd-hg\|Lim et al. 2015]]. *Korean research project on the integrated exposure assessment of hazardous substances for food safety*, Environmental Health and Toxicology | 2015 | Peer-reviewed | Korean KRIEFS nationwide dietary exposure to Pb, Cd, and tHg (n=4,867); highest Hg found in fish (46.4 µg/kg median), with Korean fish intake driving higher blood Hg than EU reference populations |
| 82 | [[sources/ralston2014-selenium-hbv-methylmercury-seafood\|Ralston et al. 2014]]. *Selenium Health Benefit Values: Updated Criteria for Mercury Risk Assessments*, Archives of Environmental Contamination and Toxicology | 2014 | Peer-reviewed | Selenium health benefit value (HBVSe) methodology for concurrent MeHg and Se risk assessment in seafood — a positive HBVSe indicates net Se surplus protective against MeHg neurotoxicity |
| 83 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | HK Al, Sb, Cd, Pb, MeHg, Ni, Sn occurrence in Hong Kong general adult population; 150 TDS food items purchased on 4 occasions (March 2010 to February 2011),... (n=1800) |
| 84 | [[sources/he2013-shanghai-cadmium\|He et al. 2013]]. *Exposure assessment of dietary cadmium: findings from shanghainese over 40 years, China*, BMC Public Health | 2013 | Peer-reviewed | CN Cd occurrence in Shanghai adults aged over 40, cross-sectional survey 2008, Baoshan District (n=207) |
| 85 | [[sources/minamata-convention-2013\|Programme 2013]]. *Minamata Convention on Mercury — Text and Annexes (2024 Edition)*, United Nations Environment Programme, Secretariat of the Minamata Convention on Mercury | 2013 | Government report | International Minamata Convention on Mercury — treaty framework regulating anthropogenic Hg releases that affect MeHg bioaccumulation in marine food chains and therefore seafood contamination globally |
| 86 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | HK iAs, tAs occurrence in Hong Kong adult population aged 20-84; composite samples from 150 TDS food items collected on four occasions March... (n=600) |
| 87 | [[sources/efsa-mercury-methylmercury-2012\|EFSA 2012]]. *Scientific Opinion on the Risk for Public Health Related to the Presence of Mercury and Methylmercury in Food*, EFSA Journal 2012;10(12):2985 | 2012 | Government report | EFSA 2012 Hg/MeHg risk assessment — lowered MeHg TWI to 1.3 µg/kg bw/week anchored on Faroe and Seychelles cohort data; confirms high fish consumers substantially exceed TWI |
| 88 | [[sources/farina-rocha-aschner-2011-mehg-mechanism\|Farina et al. 2011]]. *Mechanisms of Methylmercury-Induced Neurotoxicity: Evidence from Experimental Studies*, Life Sciences 89(15-16):555-563 | 2011 | Peer-reviewed | Mechanistic review of MeHg neurotoxicity — blood-brain barrier crossing, glutathione thiol binding, oxidative stress, and calcium disruption; provides molecular basis for the developmental neurotoxicity endpoint |
| 89 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | EFSA 2009 arsenic risk assessment — distinguishes iAs (carcinogenic) from seafood-origin organoarsenic (arsenobetaine, not of health concern); sets the regulatory and exposure context for seafood As |
| 90 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA 2009 Cd risk assessment establishing EU TWI of 2.5 µg/kg bw/week; identifies bivalve molluscs, crustaceans, and cephalopods as high-Cd seafood subcategories contributing to population Cd exposure |
| 91 | [[sources/atsdr-arsenic-toxprofile-2007\|ATSDR 2007]]. *Toxicological Profile for Arsenic*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2007 | Government report | ATSDR 2007 comprehensive arsenic toxicology profile — notes that seafood-derived organoarsenic (arsenobetaine) does not contribute to iAs exposure and must be excluded from dietary iAs calculations |
| 92 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, ATSDR | 2005 | Government report | ATSDR Sn toxicology profile — identifies organotins (tributyltin, triphenyltin) from coastal-water seafood as a distinct and far more toxic Sn exposure pathway than inorganic tin from tinplate cans |
| 93 | [[sources/jecfa-61st-methylmercury\|JECFA 2004]]. *Evaluation of Certain Food Additives and Contaminants (Methylmercury), 61st Meeting of JECFA*, WHO Technical Report Series 922 | 2004 | Government report | JECFA 61st meeting — established the international MeHg PTMI of 1.6 µg/kg bw/week anchored on Faroe and Seychelles cohort data; foundational reference for all regulatory MeHg limits in seafood |
| 94 | [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel\|Shim et al. 2004]]. *Mercury and Fatty Acids in Canned Tuna, Salmon, and Mackerel*, Journal of Food Science | 2004 | Peer-reviewed | US tHg occurrence in 240 canned tuna samples (5 brands × 4 types × 3 lots × 2 composites), 16 canned salmon... (n=272) |
| 95 | [[sources/epa-iris-methylmercury\|EPA 2001]]. *Methylmercury (MeHg) — IRIS Chemical Assessment Summary*, U.S. Environmental Protection Agency, Integrated Risk Information System | 2001 | Government report | EPA IRIS MeHg assessment establishing US oral RfD of 0.1 µg/kg bw/day for developmental neurotoxicity; the basis for FDA/EPA fish consumption advice for pregnant women and children |
| 96 | [[sources/epa1999-mercury-update-fish-advisories\|EPA 1999]]. *Mercury Update: Impact on Fish Advisories*, US EPA Fact Sheet EPA-823-F-99-016 | 1999 | Government report | US tHg, MeHg occurrence in 1,931 state-issued fish-consumption advisories in 40 states as of December 1998; cited fish-tissue mercury data drawn from EPA... (n=1931) |
| 97 | [[sources/epa1997-arsenic-fish-shellfish\|EPA 1997]]. *Arsenic and Fish Consumption*, US EPA Office of Water | 1997 | Government report | US iAs, tAs occurrence in Literature review of fish and shellfish arsenic data; exposure scenarios derived from USDA Continuing Survey of Food Intake... |
| 98 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex General Standard — sets international MeHg, Pb, Cd, and iAs maximum levels applicable to fish, bivalve molluscs, cephalopods, and other seafood categories |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This is the aggregate node for seafood; see [[ingredients/fish]] for fin-fish synthesis, [[ingredients/freshwater-fish]] for freshwater species, [[ingredients/shellfish]] and [[ingredients/bivalve-molluscs]] for crustacean and bivalve detail, [[ingredients/seaweed]] for marine plants, [[ingredients/shark]] for high-trophic predator detail, and [[ingredients/canned-tuna]] for canned tuna specifically. Across the seafood category, the dominant pathway varies by sub-commodity:

**Methylmercury** is the dominant concern in fin-fish and reflects aquatic-food-web biomagnification (see [[ingredients/fish]] and [[metals/mercury-methyl]]). Apex marine predators (shark, swordfish, king mackerel, tilefish, bigeye tuna) carry the highest MeHg loads.

**Cadmium** is the dominant concern in bivalve molluscs (oysters, mussels, clams, scallops). Bivalves filter large volumes of water and concentrate cadmium and other metals from the water column. [[ingredients/bivalve-molluscs]] is the canonical page for this.

**Inorganic arsenic** is elevated in seaweed and kelp (see [[ingredients/seaweed]]); marine algae bioaccumulate arsenic from seawater and partition some of it as inorganic species.

**Total arsenic** in fin-fish is dominated by arsenobetaine, a non-toxic organic form; total arsenic in shellfish carries a mix of arsenobetaine and arsenosugars. See [[metals/arsenic-total]] for the speciation-rule discussion.

The category-wide HMTc panel concerns vary by sub-commodity. The Cat 6 Step 0 lock recognizes this by splitting seafood into rows: freshwater fish, marine non-predatory fish, marine predatory fish, shellfish, seaweed/kelp foods, and canned seafood (with tin flag).

## Ranges by source, region, and variety

Variance within the seafood category is the largest of any food category because the metal-load drivers operate on completely different mechanisms across sub-commodities: trophic-level biomagnification (MeHg in fin-fish), water-column filtration (Cd in bivalves), bio-uptake from seawater (iAs in seaweed). Cross-sub-commodity comparison requires per-sub-commodity context.

See per-sub-commodity ingredient pages for specific range and variance synthesis.

## Processing effects

Seafood processing (cleaning, filleting, freezing, canning, smoking, drying, fermentation) generally does not remove the source-seafood metal load. Methylmercury in fin-fish is bound to muscle protein and is not reduced by cooking, smoking, or canning. Cadmium in bivalves is bound in soft tissue and is not removed by depuration (the water-circulation cleaning step in commercial bivalve operations) at meaningful levels.

Canning concentrates per-mass metal through water loss and introduces standard tinplate-Sn-migration consideration for canned seafood (with-tin-flag designation per Cat 6 Step 0 lock).

Smoking can add trace metals from smoke-source contamination but the contribution is small relative to source-fish methylmercury or source-bivalve cadmium.

## Ingredient-derivative risk

Seafood-derived derivatives concentrate metals: fish flour and fish protein concentrate carry source-fish metals at concentrated per-mass dry-basis levels; fish oil supplements partition methylmercury out but retain lipophilic contaminants (PCBs, dioxins); cod liver oil specifically carries elevated Cd and Pb relative to refined fish oil because liver is the Cd-storage organ.

Bivalve-derived products (oyster supplements, shellfish powders) carry the source bivalve Cd.

Seaweed-derived products (kelp tablets, dulse flakes, kelp granules as salt substitute) carry source-seaweed iAs at concentrated dry-mass levels and route to [[products/supplements-algae-seaweed-based|Cat 16 row 19]] when sold as dietary supplements.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention across seafood sub-commodities. For methylmercury in fin-fish: species selection (low-trophic short-lived species over apex predators) is the largest single intervention. For cadmium in bivalves: production-area selection (bivalve growing areas with documented low-Cd water-column data) reduces source-Cd. For iAs in seaweed: species selection (some seaweed species accumulate iAs less than others) and product-format selection (rinsed vs unrinsed seaweed has different iAs).

**Consumption-pattern levers** apply at the consumer level for fin-fish methylmercury (FDA/EPA tiered consumption advisory) and for bivalves (commercial-Cd-monitored bivalve sources only).

**Processing levers** ([[mitigation/processing]]) are limited for the source-seafood metal load. Cooking and processing don't reduce methylmercury, Cd, or iAs at meaningful levels.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level methylmercury testing for fin-fish (especially predatory species) and lot-level Cd testing for bivalves. Seaweed should be speciation-tested for iAs/tAs split. See [[testing/icp-ms]] and [[testing/arsenic-speciation]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned seafood.

**Agronomic and formulation levers** are not consequential for wild-caught seafood; aquaculture seafood has feed-source levers that operate analogously to terrestrial-animal feed sourcing.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets species-specific Hg maximum levels for fishery products. Pb and Cd MLs for fish and bivalve molluscs are also set.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex Alimentarius General Standard for Contaminants and Toxins covers fish and shellfish.
- FDA action level of 1.0 ppm methylmercury in fish ([[regulations/fda-methylmercury-fish-1-ppm]] when added) is the US enforcement reference.
- FDA/EPA joint fish-consumption advisory categorizes fish into best-choice, good-choice, and avoid tiers for pregnant women and young children.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL and Hg MADL apply to seafood sold in California; serving-based screens govern.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
<!-- END: hmi-page-history -->
