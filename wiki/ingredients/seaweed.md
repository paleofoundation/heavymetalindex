---
type: ingredient
commodity: seaweed
title: "Seaweed"
label: "Seaweed"
aliases: [sea-vegetables, edible-algae, macroalgae, kelp, algae]
category: sea-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 1000]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [200, 3000]
    p95_ppb: 8000
    confidence: high
    n_studies: 7
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [100, 5000]
    p95_ppb: 20000
    confidence: high
    n_studies: 6
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5000, 80000]
    p95_ppb: 150000
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 2000]
    p95_ppb: null
    confidence: low
    n_studies: 3
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
    typical_ppb: [100, 2000]
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
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [bioaccumulation, species, harvest-location, water-arsenic, arsenic-speciation]
lower_risk_variants: ["[[ingredients/nori]]"]
higher_risk_variants: ["[[ingredients/hijiki]]", "[[ingredients/kombu]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 57
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 10
---

# Seaweed

Seaweed (edible macroalgae: nori, wakame, kombu, hijiki, dulse, kelp, sea lettuce, and farmed and wild-harvested species) is among the highest-concentration heavy-metal ingredients in the food system, with cadmium and arsenic the dominant analytes. Marine macroalgae bioaccumulate dissolved seawater metals at concentration factors of 1,000-100,000× relative to ambient seawater, producing tissue concentrations of total arsenic that routinely reach 5-80 mg/kg dry weight, orders of magnitude above any terrestrial-plant matrix. The crucial qualifier for arsenic is speciation: most seaweed arsenic is in organoarsenic forms (arsenosugars, arsenolipids, arsenobetaine, dimethylarsinic acid) rather than inorganic arsenic. Inorganic arsenic (iAs), the regulated and toxicologically dominant form, typically represents 1-10% of total arsenic in seaweed — but the exception is hijiki (Sargassum fusiforme), which carries 30-70% of its arsenic as iAs and accounts for the regulatory bans on hijiki in the EU, UK, Canada, and Australia. The current corpus loads 10 peer-reviewed and government sources, anchored by the EFSA 2023 European dietary exposure assessment (n=2,093 samples) ([[sources/efsa2023-heavy-metals-seaweed]]).

## Why this commodity accumulates heavy metals

Marine macroalgae take metals from seawater through passive diffusion across cell walls and active transport into vacuoles. The bioconcentration factor (BCF), the ratio of tissue concentration to ambient seawater concentration, is genus- and metal-specific but typically 10³ to 10⁵ for Cd and tAs. Brown algae (Phaeophyceae: kelp, kombu, hijiki, wakame, Ecklonia) generally have higher BCFs than red algae (Rhodophyta: nori, dulse) and green algae (Chlorophyta: sea lettuce, ulva). The dominant metals are cadmium and arsenic for nearly all species, with regional variation in lead and mercury depending on coastal pollution sources. The Bantaeng (South Sulawesi) Pb-distribution work in farmed Kappaphycus alvarezii ([[sources/asni2020-pb-seaweed-bantaeng]]) shows seasonal-and-location variability in lead uptake driven by coastal-water Pb concentrations. The arsenic speciation question is critical: marine algae convert inorganic arsenate to organoarsenic forms (arsenosugars, arsenolipids) as a detoxification mechanism, leaving the consumer with predominantly low-toxicity organoarsenic plus a small iAs fraction. The Davydiuk 2023 arsenosugar-methylation work documents the human metabolic handling of dietary arsenosugars and confirms that seaweed-derived total-arsenic concentrations cannot be used as iAs proxies without speciation ([[sources/davydiuk2023-arsenosugars-methylation]]). Hijiki is the species-specific exception: its iAs fraction reaches 30-70% of total arsenic, which is why dedicated hijiki regulatory bans exist.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=6 | 50–1000 | — | medium | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/efsa2023-heavy-metals-seaweed\|2]], [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|3]] |
| Cd | n=7 | 200–3000 | 8000 | high | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/efsa2023-heavy-metals-seaweed\|2]], [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|3]] |
| iAs | n=6 | 100–5000 | 20000 | high | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|2]], [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|3]] |
| tAs | n=9 | 5000–80000 | 150000 | medium | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/raab2024-arsenolipids-chlamydomonas\|2]], [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|3]] |
| tHg | n=5 | 10–100 | — | medium | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/efsa2023-heavy-metals-seaweed\|2]], [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|3]] |
| Ni | n=3 | 200–2000 | — | low | [[sources/hahn2022-salish-seaweed-contaminants\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=3 | 100–2000 | — | low | [[sources/hahn2022-salish-seaweed-contaminants\|1]] |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

## Ranges by source, region, and variety

The corpus spans European farmed-and-wild-harvested macroalgae (the largest single dataset, EFSA 2023 at n=2,093 samples), New Zealand Ecklonia radiata aquaculture (Nepper-Davidsen 2023, n=24 with high spatial and temporal variation), the Salish Sea (Pacific Northwest US-Canada border, Hahn 2022 at n=58 across 6 metals), Djiboutian coastal seaweeds (Nour 2025, n=6), Indonesian farmed Kappaphycus alvarezii (Asni 2020, Indonesian South Sulawesi), and Nunavik traditional Inuit harvests (Groleau 2025, n=140 including fish and country-food matrices). The species-by-species pattern is consistent across studies: hijiki and kombu (brown algae, large fronds, mature life-stage) accumulate the highest Cd and total As; nori (red algae, thin sheet, short harvest cycle) accumulates much lower Cd and arsenic; wakame sits between. The EFSA 2023 assessment ([[sources/efsa2023-heavy-metals-seaweed]]) is the regulatory anchor for European dietary exposure and reports both finished-product and bulk-trade concentrations across the major edible species, with arsenic speciation breakdowns where the underlying primary literature supported them. Spatial variation within a single farm site can be substantial: the Nepper-Davidsen New Zealand data show seasonal variability in Cd and tAs of 2-3× within the same Ecklonia radiata farm across a 12-month cycle ([[sources/nepper-davidsen2023-kelp-biomass-composition-nz]]).

## Processing effects

Drying does not affect the metal load on a dry-weight basis (the standard reporting basis for seaweed). Soaking and rinsing dried seaweed before cooking can leach a fraction of soluble cadmium and arsenosugars into the rinse water; the magnitude depends on soaking time, water-to-seaweed ratio, and seaweed structure. For hijiki specifically, the traditional Japanese soaking protocol (extended soak with multiple water changes) reduces iAs by an estimated 30-60% compared to dry-weight values, but does not eliminate the iAs load, which is why hijiki bans in most western regulatory frameworks were maintained despite the soaking-mitigation argument. Cooking by boiling in water leaches additional soluble arsenic compounds; discarding the cooking water reduces per-serving exposure but is not always culturally or culinarily acceptable. Roasting (used for nori production) drives off moisture but does not change the per-mass metal load on a dry basis. Fermented seaweed products (Korean kelp ferments, kombucha-substrate seaweed extracts) carry the parent species' metal load with negligible processing-driven change.

## Ingredient-derivative risk

Whole-leaf dried seaweed (sheet nori, kombu strips, dried wakame, dulse strips) carries the baseline species-specific metal load. Powdered and granulated seaweed (often sold as nutritional supplement, salt substitute, or seasoning ingredient) carries the same per-mass load but typical serving sizes are smaller, partially offsetting per-meal exposure. Seaweed-based dietary supplements (kelp tablets, kelp powder for thyroid-iodine support) carry the parent kelp species' Cd and tAs at the upper end of the loaded distribution; supplement-grade kelp should always be lot-tested. Alginate, agar, carrageenan, and other seaweed-derived hydrocolloids extracted from macroalgae carry significantly lower metal loads than the parent species because the extraction process leaves most metals in the spent biomass. Seaweed-flour additions to bread and noodle formulations contribute Cd and tAs at the inclusion ratio. Seaweed-extract animal-feed ingredients are out of scope for the human-food page.

## Mitigation options

### Sourcing levers

Species selection is the highest-impact lever. Avoid hijiki (Sargassum fusiforme) entirely for any product targeting iAs compliance; the EU, UK, Canada, and Australia all maintain hijiki-specific bans or advisories. Favour nori (Pyropia/Porphyra species) and dulse (Palmaria palmata) over kombu (Saccharina/Laminaria) and wakame (Undaria pinnatifida) when the Cd budget is the constraint. For arsenic, harvest-region matters: seaweed grown in waters with low ambient dissolved arsenic (most North Atlantic, Pacific Northwest) carries less tAs than seaweed from regions with elevated water-arsenic backgrounds.

### Agronomic levers

For farmed seaweed (kelp aquaculture, nori aquaculture), site selection away from coastal Pb and Cd point sources is the primary control. Mid-water-column harvest (rather than near-bottom) reduces sediment-derived metal pickup for some species. Younger plants (shorter accumulation time) generally carry lower metal loads.

### Processing levers

Soaking and rinsing dried seaweed in water (multiple water changes, sufficient soak time) reduces soluble iAs and Cd by 20-60% depending on species and protocol. The intervention is well-documented for hijiki specifically and applicable in principle to kombu and wakame. Boiling and discarding the cooking water reduces total exposure further. For brand-controlled processing, validated rinse protocols can be specified and verified by post-rinse testing.

### Formulation levers

For seaweed-containing finished products (snacks, condiments, supplements), inclusion-ratio limits are the meaningful brand-side lever. A 1% seaweed inclusion in a finished snack carries 1% of the seaweed's per-mass metal load into the finished product on a linear-mixing basis.

### Testing and QC levers

Lot-level ICP-MS testing for Cd, Pb, and tAs with detection floors ≤ 50 ppb is the standard intervention. For arsenic, total-arsenic alone is not sufficient for compliance assessment; iAs speciation by HPLC-ICP-MS is the regulatory-grade method. The EFSA 2023 dataset reports iAs speciation for the European market product where it was available; the Llorente-Mirandes 2016 analytical review documents the state-of-the-art iAs determination methods for food matrices ([[sources/llorente-mirandes2016-ias-food-analytical-review]]).

### Packaging and storage levers

Packaging is not the dominant metal-load pathway for dry seaweed product. Standard food-grade packaging does not measurably alter the metal load over shelf life. Long-term storage in humid environments can promote microbial spoilage but does not change the metal load.

## Regulatory limits that apply

The EU Regulation 2023/915 sets dedicated maximum levels for "dried seaweed" entries: Cd at 0.50 mg/kg dry weight, Pb at 0.50 mg/kg dry weight, with arsenic addressed under the inorganic-arsenic framework (no general tAs limit on seaweed, but iAs limits apply where the product-as-consumed pathway is established). The EU separately prohibits hijiki in any food product on the basis of its iAs profile. Codex Alimentarius does not currently set seaweed-specific maxima; general seafood limits do not apply to algae. The FDA has issued advisories on hijiki consumption but has not set a federal maximum level. France's ANSES (food safety agency) sets seaweed-specific advisory limits at 3 mg/kg dry weight for tAs and 0.5 mg/kg for iAs in seaweed-as-food. The EFSA 2023 exposure assessment ([[sources/efsa2023-heavy-metals-seaweed]]) found European dietary intakes from seaweed at levels of concern for iAs in high-seaweed-consumption sub-populations and recommended continued monitoring and tighter regulatory clarity.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/sund2026-saccharina-pte-processing\|Sund et al. 2026]]. *Pulsed electric field processing as an alternative to warm water treatment for the reduction of potentially toxic elements in Saccharina latissima*, Journal of Applied Phycology | 2026 | Peer-reviewed | NO tAs, Cd, Pb, tHg occurrence in Unprocessed, pulsed-electric-field processed, and warm-water-treated Saccharina latissima samples, n=3 per treatment (n=15) |
| 2 | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|Groleau et al. 2025]]. *Improving nutritional intakes and reducing metal(loid) exposures from wild fish broth among Inuit pregnant women*, Science of the Total Environment | 2025 | Peer-reviewed | Nunavik traditional-harvest seaweed and country-food metals (n=140 multi-matrix) |
| 3 | [[sources/siregar2025-australian-brown-macroalgae-arsenic\|Siregar et al. 2025]]. *Distribution of Water-Soluble Arsenic Species in the Sub-thallus of Australian Brown Macroalgae*, Exposure and Health 2025, 17:1023–1036 | 2025 | Peer-reviewed | AU tAs, iAs occurrence in Seven wild brown macroalgae (Phaeophyta) taxa collected from Mosquito Bay, an intertidal zone on the south-east coast of... (n=7) |
| 4 | [[sources/zhao2025-sargassum-fusiforme-metals-detoxification\|Zhao et al. 2025]]. *Integration of bioaccumulations, chemical forms and gene expression responses to understand the transformation and detoxification of inorganic arsenic, cadmium and lead in the brown seaweed Sargassum fusiforme*, Ecotoxicology and Environmental Safety 2025, 300:118453 | 2025 | Peer-reviewed | CN tAs, iAs, Cd, Pb occurrence in Cultured Sargassum fusiforme (hijiki) shoots from one batch collected at Wenzhou, Zhejiang, China; controlled laboratory exposure to As(III),... (n=1) |
| 5 | [[sources/efsa2024-organoarsenic-species\|EFSA 2024]]. *Risk assessment of small organoarsenic species in food*, EFSA Journal | 2024 | Government report | EU tAs occurrence in 1,260 analytical results on DMA(V) and 988 on MMA(V) submitted to the EFSA Data Warehouse covering sampling years... (n=2248) |
| 6 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | EU Ni concentrations |
| 7 | [[sources/raab2024-arsenolipids-chlamydomonas.md\|Raab et al. 2024]]. *Arsenolipids in the green microalga Chlamydomonas reinhardtii: first report of arsenosugar phospholipid (AsSugPhytol)*, Metallomics | 2024 | Peer-reviewed | Arsenolipid speciation in green microalga and macroalga Saccharina latissima, evidence that algae partition tAs into lipid-soluble organoarsenicals |
| 8 | [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|Sadee et al. 2024]]. *Recent developments in speciation and determination of arsenic in marine organisms using different analytical techniques. A review*, RSC Advances | 2024 | Peer-reviewed | Marine-organism iAs vs tAs speciation review establishing that seaweed tAs is dominated by low-toxicity organoarsenicals, not iAs |
| 9 | [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|Sim et al. 2024]]. *Determination of inorganic arsenic in seaweed, grain, grass silage, and insect protein by HPLC-ICP-MS using a design of experiments optimization approach*, Food Chemistry | 2024 | Peer-reviewed | Validated HPLC-ICP-MS iAs method applied to Laminaria, Fucus, Saccharina, Asparagopsis, and Porphyra species with iAs fraction of tAs |
| 10 | [[sources/davydiuk2023-arsenosugars-methylation\|Davydiuk et al. 2023]]. *Effects of Dietary Intake of Arsenosugars and Other Organic Arsenic Species on Studies of Arsenic Methylation Efficiency in Humans*, Environmental Health | 2023 | Peer-reviewed | Arsenosugar-and-organoarsenic human-metabolism evidence; confirms seaweed tAs is not iAs proxy |
| 11 | [[sources/diogene2023-rascs-contaminants-seafood\|Diogène et al. 2023]]. *Risk Assessment Strategies for Contaminants in Seafood (RASCS)*, EFSA Supporting Publications 2023:EN-8419 | 2023 | Government report | EU tAs, iAs, Pb, Cd, tHg, MeHg, Ni, Cr, Al occurrence in Strategy/programmatic report from a seven-institution EU consortium (IRTA Spain coordinator, CREDA Spain, IPMA Portugal, ISS Italy, Ghent University... |
| 12 | [[sources/efsa2023-heavy-metals-seaweed\|EFSA 2023]]. *Dietary exposure to heavy metals and iodine intake via consumption of seaweeds and halophytes in the European population*, EFSA Journal | 2023 | Peer-reviewed | European dietary exposure assessment for seaweed Cd, Pb, tAs, iAs, tHg (n=2,093); regulatory anchor |
| 13 | [[sources/kim2023-korea-fishery-products-metals\|Kim et al. 2023]]. *Risk Assessment and Determination of Arsenic and Heavy Metals in Fishery Products in Korea*, Foods | 2023 | Peer-reviewed | KR Pb, Cd, tAs, tHg, MeHg occurrence in Fishery products purchased from grocery stores and markets in Seoul, Incheon, Daejeon, Gangneung, Busan, and Gwangju from January... (n=1186) |
| 14 | [[sources/mosusu2023-edible-seaweeds-japan-metals\|Mosusu 2023]]. *Heavy metal contents in some edible seaweeds (Wakame, Kombu) in Japan*, Hokkaido University Graduate School of Environmental Science (Master's thesis abstract) | 2023 | Thesis | JP/CN/KR Cr, Ni, Cd, Pb, U occurrence in Twenty-two commercial seaweed samples sold in Japan: Wakame (Undaria pinnatifida), Kombu (Laminaria spp.), Hijiki (Hizikia fusiform), and sea... (n=22) |
| 15 | [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|Nepper-Davidsen et al. 2023]]. *High spatial and temporal variation in biomass composition of the novel aquaculture target Ecklonia radiata*, Journal of Applied Phycology | 2023 | Peer-reviewed | New Zealand Ecklonia radiata aquaculture spatial-temporal Cd and tAs variation (n=24) |
| 16 | [[sources/shaughnessy2023-sugar-kelp-new-england-metals\|Shaughnessy et al. 2023]]. *Evidence of elevated heavy metals concentrations in wild and farmed sugar kelp (Saccharina latissima) in New England*, Scientific Reports | 2023 | Peer-reviewed | US tAs, iAs, Cd, Pb, tHg occurrence in Farmed sugar-kelp blades plus wild sugar-kelp sites in Massachusetts and southern New England (n=12) |
| 17 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 18 | [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|Ashley-Martin et al. 2022]]. *Biomonitoring of inorganic arsenic species in pregnancy*, Journal of Exposure Science & Environmental Epidemiology | 2022 | Peer-reviewed | Pregnancy-biomonitoring iAs and tAs context relevant to seaweed-consuming populations |
| 19 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, MeHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 20 | [[sources/hahn2022-salish-seaweed-contaminants\|Hahn et al. 2022]]. *Chemical contaminant levels in edible seaweeds of the Salish Sea and implications for their consumption*, PLOS ONE | 2022 | Peer-reviewed | Pacific-Northwest Salish Sea edible-seaweed Cd, tHg, Pb, tAs, Cr, Ni (n=58) |
| 21 | [[sources/aziz2021-gracilaria-seaweed-bangladesh\|Aziz et al. 2021]]. *Potential of Gracilaria tenuistipitata var. liui grown in Nuniachara, Cox's Bazar, Bangladesh*, Bangladesh Journal of Scientific and Industrial Research | 2021 | Peer-reviewed | BD Pb, tAs, Cr, Cd occurrence in Replicate analyses of Gracilaria tenuistipitata var. liui grown at Nuniachara, Cox's Bazar, Bangladesh and evaluated as seafood/food supplement. (n=3) |
| 22 | [[sources/khandaker2021-malaysian-seaweed-metalloids\|Khandaker et al. 2021]]. *Elevated Concentrations of Metal(loids) in Seaweed and the Concomitant Exposure to Humans*, Foods | 2021 | Peer-reviewed | MY K, Ca, Mg, Pb, Cd, Se, Al, Mn, Cu, Zn, Fe, iAs, Na, Ni, Cr-VI, Ag, Si occurrence in Fresh Eucheuma cottoni seaweed from three Malaysian seaweed-farming locations: Langkawi (LKW, n = 3), Semporna (SPN, n =... (n=8) |
| 23 | [[sources/lin2021-taiwan-seafood-mercury-tds\|Lin et al. 2021]]. *Dietary Exposure of the Taiwan Population to Mercury Content in Various Seafood Assessed by a Total Diet Study*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | TW tHg, MeHg occurrence in Taiwan total-diet-study seafood sample set purchased from fishing harbors, traditional markets, afternoon markets, supermarkets, and discount stores across... (n=140) |
| 24 | [[sources/luvonga2021-seafood-arsenic-speciation\|Luvonga et al. 2021]]. *Determination of total arsenic and hydrophilic arsenic species in seafood*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | US tAs, iAs occurrence in Seven homogenized seafood/seaweed study materials: spirulina powder, Atlantic kelp powder, geoduck clam, wild-caught brown shrimp, aquacultured white-leg shrimp,... (n=7) |
| 25 | [[sources/martinleon2021-edible-seaweeds-canary-metals-nitrates\|Martín-León et al. 2021]]. *Human Exposure to Toxic Metals (Cd, Pb, Hg) and Nitrates (NO3−) from Seaweed Consumption*, Applied Sciences | 2021 | Peer-reviewed | ES/EU/JP Cd, Pb, tHg occurrence in Seventy-two samples of edible algae (green, brown, and red) marketed in Tenerife (Canary Islands, Spain) and acquired from... (n=72) |
| 26 | [[sources/rakib2021-macroalgae-bangladesh-metals\|Jahan et al. 2021]]. *Macroalgae in biomonitoring of metal pollution in the Bay of Bengal coastal waters of Cox's Bazar and surrounding areas*, Scientific Reports | 2021 | Peer-reviewed | BD Pb, tAs, Cr occurrence in Ten macroalgae species collected in triplicate from Cox's Bazar and Saint Martin's Island, Bangladesh (n=10) |
| 27 | [[sources/asni2020-pb-seaweed-bantaeng\|Asni et al. 2020]]. *Pb heavy metal distribution patterns in seaweed (Kappaphycus alvarezii) cultivation locations by season in Bantaeng Waters, South Sulawesi*, IOP Conference Series: Earth and Environmental Science | 2020 | Peer-reviewed | Indonesian farmed-seaweed seasonal Pb-distribution data |
| 28 | [[sources/luvonga2020-organoarsenicals-marine-methods-review\|Luvonga et al. 2020]]. *Analytical Methodologies for the Determination of Organoarsenicals in Edible Marine Species: A Review*, Journal of Agricultural and Food Chemistry 2020, 68, 1910–1934 | 2020 | Review | US tAs, iAs occurrence in Analytical-methods review (NIST authors) of arsenic speciation in edible marine species (seafood and seaweed) — sample handling, extraction,... |
| 29 | [[sources/narukawa2020-hijiki-crm-arsenosugars-interlab\|Narukawa et al. 2020]]. *A New Candidate Reference Material for Inorganic Arsenic and Arsenosugars in Hijiki Seaweed: First Results from an Inter-laboratory Study*, Analytical Sciences 2020, 36, 233–239 | 2020 | Peer-reviewed | JP tAs, iAs occurrence in Two dried hijiki (Hizikia / Sargassum fusiforme) reference materials characterised by a two-laboratory inter-laboratory study: a candidate certified... (n=2) |
| 30 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 31 | [[sources/camurati2019-edible-macroalgae-arsenic-review\|Camurati et al. 2019]]. *Arsenic in edible macroalgae: an integrated approach*, Journal of Toxicology and Environmental Health, Part B: Critical Reviews | 2019 | Review | AR tAs, iAs occurrence in Critical review (literature published up to 2019, SCOPUS search) of arsenic in edible marine macroalgae — speciation, toxicity,... |
| 32 | [[sources/cherry2019-edible-seaweeds-risks-benefits\|Cherry et al. 2019]]. *Risks and benefits of consuming edible seaweeds*, Nutrition Reviews | 2019 | Peer reviewed review | GB/IE/KR iAs, tAs, Cd, Pb, tHg occurrence in Narrative review of edible seaweed nutrition, functional-food evidence, and adverse-effect concerns, including heavy-metal and arsenic-speciation context from cited... |
| 33 | [[sources/ownsworth2019-estuarine-macroalgae-elements\|Ownsworth et al. 2019]]. *Tracing the natural and anthropogenic influence on the trace elemental chemistry of estuarine macroalgae and the implications for human consumption*, Science of the Total Environment | 2019 | Peer-reviewed | GB/JP tAs, iAs, Pb, Cd, Ni, U, Co, Cu, Zn, Ag occurrence in Fifty brown macroalgae samples collected from 25 Forth Estuary/Firth of Forth locations in Scotland, plus four Laminaria japonica... (n=55) |
| 34 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 35 | [[sources/bralatei2017-seaweed-inorganic-arsenic-field-method\|Bralatei et al. 2017]]. *A field deployable method for a rapid screening analysis of inorganic arsenic in seaweed*, Microchimica Acta | 2017 | Peer-reviewed | GB/JP/CN iAs, tAs occurrence in Thirteen commercial edible seaweed samples purchased online and from shops/supermarkets around Aberdeen, UK, with packaging origins Japan, China,... (n=47) |
| 36 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 37 | [[sources/ronan2017-laminaria-ascophyllum-ias-ireland\|Ronan et al. 2017]]. *High proportions of inorganic arsenic in Laminaria digitata but not in Ascophyllum nodosum samples from Ireland*, Chemosphere | 2017 | Peer-reviewed | IE tAs, iAs occurrence in Wild brown macroalgae harvested at Spiddal, Galway Bay, west coast of Ireland (relatively uncontaminated site), October 2015: five... (n=30) |
| 38 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 39 | [[sources/razi-parjikolaei2016-red-macroalgae-metals\|Parjikolaei et al. 2016]]. *Valuable Biomolecules from Nine North Atlantic Red Macroalgae: Amino Acids, Fatty Acids, Carotenoids, Minerals and Metals*, Natural Resources | 2016 | Peer-reviewed | DK tAs, Cd, Pb, Cr, Cu, Zn, Fe, Mn, Mo, Se occurrence in Nine North Atlantic red macroalgae species collected in Denmark, with three replicates per species for the metals figure. (n=27) |
| 40 | [[sources/taylor2016-new-england-seaweed-arsenic\|Taylor et al. 2016]]. *Concentrations and speciation of arsenic in New England seaweed species harvested for food and agriculture*, Chemosphere | 2016 | Peer-reviewed | US tAs, iAs occurrence in Forty-six macroalgae samples spanning 20 distinct species (brown/red/green) from New England, USA — from 7 commercial harvesters in... (n=46) |
| 41 | [[sources/zhao2016-xiamen-seafood-metals\|Zhao et al. 2016]]. *Seafood consumption among Chinese coastal residents and health risk assessment of heavy metals in seafood*, Environmental Science and Pollution Research | 2016 | Peer-reviewed | CN Pb, Cd, Cr, tHg, tAs occurrence in One hundred fifty-six market samples of 14 high-intake seafood types from six district regions of Xiamen, China; consumption... (n=156) |
| 42 | [[sources/efsa2014-dietary-exposure-iAs\|EFSA 2014]]. *Dietary exposure to inorganic arsenic in the European population*, EFSA Journal 2014;12(3):3597 | 2014 | Government report | EU iAs, tAs concentrations (n=103773) |
| 43 | [[sources/lynch2014-inorganic-arsenic-food-review\|Lynch et al. 2014]]. *A comprehensive evaluation of inorganic arsenic in food and considerations for dietary intake analyses*, Science of the Total Environment 496:299–313 | 2014 | Review | US tAs, iAs occurrence in Literature meta-analysis: 134 peer-reviewed and agency studies (published 1995–July 2013) compiled into a database of >6500 inorganic-arsenic data... |
| 44 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 45 | [[sources/fsanz2012-seaweed-inorganic-arsenic-au\|Zealand 2012]]. *Survey of Inorganic Arsenic in Seaweed and Seaweed-Containing Products Available in Australia*, Food Standards Australia New Zealand (FSANZ), Survey report | 2012 | Government report | AU/NZ iAs occurrence in Thirty-eight seaweed and seaweed-containing product samples collected April–May 2010 from retail outlets across all Australian states and territories... (n=38) |
| 46 | [[sources/llorente-mirandes2011-commercial-seaweed-arsenic\|Llorente-Mirandes et al. 2011]]. *Determination of Water-Soluble Arsenic Compounds in Commercial Edible Seaweed by LC-ICPMS*, Journal of Agricultural and Food Chemistry | 2011 | Peer-reviewed | ES tAs, iAs occurrence in Six commercial edible seaweed products grown on the Galician coast (NW Spain) and purchased in retail food markets... (n=6) |
| 47 | [[sources/hwang2010-dried-seaweed-korea-metals\|Hwang et al. 2010]]. *Total arsenic, mercury, lead, and cadmium contents in edible dried seaweed in Korea*, Food Additives & Contaminants: Part B: Surveillance | 2010 | Peer-reviewed | KR tAs, tHg, Pb, Cd occurrence in Dried edible seaweed products sold in Korea in 2007-2008, including laver (n = 125), brown seaweed (n =... (n=426) |
| 48 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | EU iAs, tAs concentrations |
| 49 | [[sources/lorenzana2009-seafood-arsenic-speciation\|Lorenzana et al. 2009]]. *Arsenic in Seafood: Speciation Issues for Human Health Risk Assessment*, Human and Ecological Risk Assessment | 2009 | Review | US/GLOBAL tAs, iAs occurrence in Scholarly review of worldwide literature and U.S. site-assessment data on total and inorganic arsenic in marine, estuarine, freshwater,... |
| 50 | [[sources/pereira2008-ria-aveiro-mercury-review\|Pereira et al. 2008]]. *Mercury pollution in Ria de Aveiro (Portugal): a review of the system assessment*, Environmental Monitoring and Assessment | 2008 | Peer-reviewed | PT tHg occurrence in Review of Ria de Aveiro mercury studies, including Table 3 biotic-compartment summaries for macroalgae, benthic fauna, and fish... |
| 51 | [[sources/rose2007-seaweed-arsenic-forms-uk\|Rose et al. 2007]]. *Arsenic in seaweed—Forms, concentration and dietary exposure*, Food and Chemical Toxicology | 2007 | Peer-reviewed | GB tAs, iAs occurrence in Thirty-one dried seaweed products on UK retail sale (London area, Oct–Dec 2003), spanning five varieties: hijiki (9), kombu... (n=31) |
| 52 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
| 53 | [[sources/park2005-korean-seafood-arsenic-speciation\|Park et al. 2005]]. *Speciation of Six Arsenic Compounds in Korean Seafood Samples by HPLC-ICP-MS*, Key Engineering Materials | 2005 | Peer-reviewed | KR iAs occurrence in Thirty-three Korean seafood samples of seaweed, shrimp, fish, and shellfish plus two certified reference materials, analyzed for six... (n=33) |
| 54 | [[sources/almela2002-algae-food-arsenic-metals\|Almela et al. 2002]]. *Heavy Metal, Total Arsenic, and Inorganic Arsenic Contents of Algae Food Products*, Journal of Agricultural and Food Chemistry | 2002 | Peer-reviewed | ES tAs, iAs, Pb, Cd, tHg occurrence in Eighteen processed edible-algae food products on retail sale in Valencia, Spain: 12 brown-algae products (wakame from Undaria pinnatifida,... (n=18) |
| 55 | [[sources/kaise1988-marine-organisms-arsenic-speciation\|Kaise et al. 1988]]. *Distribution of inorganic arsenic and methylated arsenic in marine organisms*, Applied Organometallic Chemistry | 1988 | Peer-reviewed | Japan tAs, iAs occurrence in Sixty marine-organism specimens collected from the Miura Peninsula and Shimonoseki coasts in Japan, plus some market samples; fish... (n=60) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1ca3eb0](https://github.com/paleofoundation/heavymetalindex/commit/1ca3eb0) | 2026-06-06 | source-legend: drain awaiting-synthesis backlog + wire populator into prebuild |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
