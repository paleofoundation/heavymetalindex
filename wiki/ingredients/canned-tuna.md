---
type: ingredient
commodity: canned-tuna
title: "Canned Tuna"
label: "Canned Tuna"
aliases: [tuna-in-water, tuna-in-oil, albacore-tuna, skipjack-tuna]
category: seafood
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 300
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 150
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [500, 5000]
    p95_ppb: 10000
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: 1500
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [100, 2000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 500]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [methylmercury-bioaccumulation, species, trophic-position, canning-can-leaching, arsenic-speciation]
lower_risk_variants: ["[[ingredients/canned-skipjack-tuna-light]]"]
higher_risk_variants: ["[[ingredients/canned-albacore-tuna-white]]", "[[ingredients/canned-bigeye-tuna]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 25
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Canned Tuna

## Overview

Canned tuna is the dominant retail-market form of tuna globally and the largest single dietary methylmercury source for many Western populations. The defining heavy-metals concern is mercury — specifically methylmercury (MeHg), the bioaccumulated organomercury form that concentrates up the marine food chain from microalgae to small forage fish to predatory tuna. Tuna species sit at differing trophic levels: skipjack tuna (Katsuwonus pelamis, the small "light tuna" species, ~1-2 year lifespan, lower trophic position) carries roughly one-third the methylmercury of albacore tuna (Thunnus alalunga, the "white tuna" species, ~5-15 year lifespan, higher trophic position), and yellowfin and bigeye tuna sit at or above the albacore level. Beyond mercury, canned tuna carries elevated total arsenic (mostly as low-toxicity organoarsenic forms; the iAs fraction is small but should be characterised separately), and the canning step contributes Pb, Sn, and Al from the can interior. The current corpus loads 6 sources spanning Ecuador (Aguilar-Miranda 2024 n=60, [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador]]), global ICP method development (Ali 2025 aluminum-cobalt sensor), Brazil (DeLima 2021 multi-metal n=20, [[sources/delima2021-metals-canned-tuna-sardines-brazil]]), Mexico (Rodriguez-Mendivil 2019 Tijuana n=68, [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana]]), the US (Shim 2004 n=272, [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel]]), and the 36-jurisdiction Ulusoy 2023 multinational comparison (n=222, [[sources/ulusoy2023-canned-tuna-toxic-metals]]).

## Why this commodity accumulates heavy metals

Mercury in canned tuna originates from the marine biogeochemical cycle: atmospheric mercury deposition into ocean waters, methylation to MeHg by marine bacteria and archaea (predominantly in low-oxygen zones), uptake into phytoplankton, then progressive biomagnification up the food chain. Tuna are mid-to-high trophic-level predators, and their tissue mercury concentration is roughly proportional to age and trophic position. Species selection is the dominant variable: skipjack (the "light" canned tuna species) sits at trophic level ~3.5-4.0 with shorter lifespan and lower per-fish mercury; albacore (the "white" canned tuna species) at trophic level ~4.0-4.3 with longer lifespan accumulates 2-4× more MeHg. The Shim 2004 US-market dataset (n=272 canned tuna, salmon, mackerel samples) is the largest single-jurisdiction US dataset and confirms the species-specific pattern ([[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel]]). The Ulusoy 2023 multinational comparison covered 36 jurisdictions and characterised the global within-canned-tuna distribution by species and origin, finding consistent species differentiation across all jurisdictions ([[sources/ulusoy2023-canned-tuna-toxic-metals]]). Cadmium and lead in tuna come from a combination of marine uptake into prey species and post-harvest canning contributions. The canning step adds Pb, Sn, and Al through can-interior contact during the multi-year shelf life typical of commercial canned tuna; the DeLima 2021 Brazilian work and the Ali 2025 aluminum-cobalt sensor development specifically address the canned-product Al pathway ([[sources/delima2021-metals-canned-tuna-sardines-brazil]], [[sources/ali2025-carbon-dots-aluminum-cobalt-canned-food]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 5–100 | medium | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|1]], [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|2]] |
| Cd | n=4 | 5–50 | medium | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|1]], [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|2]] |
| iAs | n=1 | 1–20 | low | — |
| tAs | n=3 | 500–5000 | medium | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|1]] |
| tHg | n=5 | 100–500 | medium | [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador\|1]], [[sources/ec-reg-2022-617-mercury-fishery\|2]], [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|3]] |
| Ni | n=2 | 50–500 | low | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|1]] |
| Al | n=2 | 100–2000 | low | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|1]] |
| Cr | n=3 | 10–200 | low | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|1]], [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|2]] |
| Sn | n=1 | 0–500 | low | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Ulusoy 2023 multinational dataset is the largest single-study cross-jurisdiction comparison at n=222 samples from 36 countries (US, EU member states, Canada, Australia, Japan, Saudi Arabia, North African, Latin American, and Caucasus jurisdictions) ([[sources/ulusoy2023-canned-tuna-toxic-metals]]). The Shim 2004 US-market work (n=272 across canned tuna, salmon, and mackerel) is the largest single-jurisdiction tuna-mercury dataset in the loaded corpus and establishes the species-specific pattern at scale ([[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel]]). The Ecuadorian Aguilar-Miranda 2024 work (n=60 canned tuna in water) characterises the Quito retail-market mercury distribution and identifies meaningful per-can variance suggesting species or origin variability within commercial product ([[sources/aguilar-miranda2024-thg-canned-tuna-ecuador]]). The Mexican Rodriguez-Mendivil 2019 Tijuana work (n=68) provides the Mexican border-market context ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana]]). The Brazilian DeLima 2021 dataset (n=20) provides the multi-metal panel including the rarely-measured Al specifically ([[sources/delima2021-metals-canned-tuna-sardines-brazil]]). Species-level pattern: skipjack ("light tuna") consistently sits at the lower end of the mercury distribution (typical 100-200 ppb tHg); albacore ("white tuna") sits at 300-500 ppb tHg with worst-case-tail above 1,000 ppb; yellowfin and bigeye sit at or above the albacore level. Pacific-origin product can carry slightly higher Hg than Atlantic-origin in some studies. Tuna packed in water versus oil does not produce different per-fish-meat metal loads but does affect serving-size considerations.

## Processing effects

The processing chain from caught fish to retail canned product (heading, gutting, pre-cooking, can-filling, retort-sterilising, sealing) does not change the per-mass mercury or arsenic content of the fish meat itself. The canning step does introduce Pb, Sn, and Al through can-interior contact during the multi-year shelf life; the magnitude of can-derived contributions depends on the interior coating, the pH of the canning medium (water-packed versus oil-packed), and the storage temperature. Pre-cooking and steam-blanching before canning do not affect metal load on a per-mass basis. The product as consumed includes drained meat plus residual liquid; analytical work typically reports concentrations in drained tuna meat, which is the relevant exposure metric for consumer estimation.

## Ingredient-derivative risk

Canned skipjack tuna (light tuna) in water packed in modern fully-welded steel cans with food-grade interior coatings represents the lowest-mercury commercial form. Canned albacore tuna (white tuna) carries 2-4× the methylmercury of skipjack at the same serving size. Canned yellowfin and bigeye carry the highest mercury among commonly canned species. Tuna pouches (used by some brands as alternative to cans) carry the same fish-meat mercury load with negligible packaging-source metal contribution. Tuna salads, tuna casseroles, and prepared tuna dishes inherit the canned tuna's mercury load at the inclusion ratio. Pet-grade tuna (used in cat foods) inherits the same fish-meat profile; this is out of scope for the human-food page but relevant context.

## Mitigation options

### Sourcing levers

Species selection is the single highest-impact lever. Source skipjack ("light tuna") over albacore ("white tuna") for the lowest-mercury commercial form. Specify supplier transparency on species (some brands blend skipjack and albacore; transparency on the blend ratio enables more accurate per-serving mercury estimation). For premium positioning, smaller-fish species (mackerel, sardines, anchovies) consistently sit at lower mercury than even skipjack tuna.

### Agronomic levers

Not applicable to wild-caught seafood. Marine biogeochemistry drives the upstream mercury distribution and is not directly intervenable at the brand level.

### Processing levers

For canners, modern fully-welded steel cans with food-grade interior coatings eliminate the historical lead-soldered-can Pb pathway. Tuna pouches eliminate the can-leaching pathway entirely. Water-packed versus oil-packed does not meaningfully shift the mercury profile.

### Formulation levers

For finished products using tuna as an ingredient (tuna salads, ready-meals, casseroles, dips), the inclusion ratio caps per-serving mercury exposure. Substitution with lower-mercury seafood (canned salmon, canned mackerel, canned sardines) shifts the mercury profile significantly lower.

### Testing and QC levers

Lot-level ICP-MS testing for Hg (detection floor ≤ 50 ppb), Pb (≤ 5 ppb), and Cd (≤ 1 ppb) is the standard intervention. For mercury, the regulatory-grade testing should include methylmercury speciation by HPLC-ICP-MS for the most accurate exposure assessment, though total Hg is often used as a proxy.

### Packaging and storage levers

Pouches eliminate the can-leaching pathway. Modern fully-welded steel cans with food-grade interior coatings are acceptable. Lead-soldered cans (historical) are the primary packaging risk. Storage temperature and shelf life do not affect mercury content but can affect can-derived metals over multi-year storage.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 sets a methylmercury maximum of 1.2 mg/kg fresh weight for predatory fish including tuna, with the implicit application to canned tuna meat as consumed. The EU Regulation 2023/915 sets a tuna-specific mercury maximum of 1.0 mg/kg fresh weight for tuna and 0.30 mg/kg fresh weight for other fish; this is the EU's tightest fish-mercury cap that explicitly addresses tuna. The FDA Action Level for methylmercury in seafood is 1.0 mg/kg, applied to commercial product. The FDA "Net Effects" Tool and consumer-advice frameworks recommend limiting canned albacore to 1 serving (6 oz) per week for pregnant and nursing women, and canned light tuna to 2-3 servings per week; the underlying mercury data align with the Shim 2004 distribution and the broader literature. The Ulusoy 2023 cross-jurisdiction work found commercial canned tuna generally compliant with the 1.0 mg/kg fresh-weight regulatory limit but with substantial within-product variance ([[sources/ulusoy2023-canned-tuna-toxic-metals]]).

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador|Total mercury exposure through canned tuna in water sold in Quito, Ecuador]]<span class="hmi-ref-meta">Aguilar-Miranda A, Fernández L, Yánez-Jácome GS, Alcoser-Pinto B, Zambrano H, Paz-Suconota F, et al. · Scientific Reports · 2024 · [doi.org/10.1038/s41598-024-79430-y](https://doi.org/10.1038/s41598-024-79430-y)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/delima2021-metals-canned-tuna-sardines-brazil|Data on metals, nonmetal, and metalloid in the samples of the canned tuna and canned sardines sold in Brazil]]<span class="hmi-ref-meta">de Lima NV, de Padua Melo ES, Arakaki DG, Tschinkel PFS, de Souza ID, Ulbrecht MOO, et al. · Data in Brief · 2021 · [doi.org/10.1016/j.dib.2021.106865](https://doi.org/10.1016/j.dib.2021.106865)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico]]<span class="hmi-ref-meta">Rodriguez-Mendivil DD, Garcia-Flores E, Temores-Pena J, and Wakida FT · Health Scope · 2019 · [doi.org/10.5812/jhealthscope.78956](https://doi.org/10.5812/jhealthscope.78956)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel|Mercury and Fatty Acids in Canned Tuna, Salmon, and Mackerel]]<span class="hmi-ref-meta">Shim SM, Dorworth LE, Lasrado JA, and Santerre CR · Journal of Food Science · 2004 · [doi.org/10.1111/j.1365-2621.2004.tb09915.x](https://doi.org/10.1111/j.1365-2621.2004.tb09915.x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/ulusoy2023-canned-tuna-toxic-metals|Determination of toxic metals in canned tuna sold in developed and developing countries: Health risk assessment associated with human consumption]]<span class="hmi-ref-meta">Ulusoy S · Marine Pollution Bulletin · 2023 · [doi.org/10.1016/j.marpolbul.2022.114518](https://doi.org/10.1016/j.marpolbul.2022.114518)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/ali2025-carbon-dots-aluminum-cobalt-canned-food|Carbon Dots Fluorometric Sensor for Simultaneous Detection of Aluminum and Cobalt in Canned Foods]]<span class="hmi-ref-meta">Ali A, Khan S, and Iqbal A · 2025 · [doi.org/10.1039/d5ra00448a](https://doi.org/10.1039/d5ra00448a)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rustemli2026-canned-tuna-mineral-heavy-metal-turkey\|Rüstemli et al. 2026]]. *Mineral and heavy metal content in canned tuna: Implications for veterinary public health and consumer safety*, Veterinary Research Communications | 2026 | Peer-reviewed | TR Mg, Al, Cr, Mn, Fe, Cu, Zn, Co, Ni, tAs, Sn, Ba, tHg, Pb occurrence in 105 canned tuna samples (35 water-packed, 35 oil-packed, 35 sauce-packed) from seven domestic Turkish brands, collected in Van... (n=105) |
| 2 | [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador\|Aguilar-Miranda et al. 2024]]. *Total mercury exposure through canned tuna in water sold in Quito, Ecuador*, Scientific Reports | 2024 | Peer-reviewed | Ecuadorian Quito retail canned-tuna-in-water mercury distribution (n=60) |
| 3 | [[sources/bfr2024-methylmercury-fish-seafood-germany\|BfR 2024]]. *Methylmercury in fish and seafood – health risk assessment of new data from the BfR MEAL study*, BfR Opinion 023/2024 | 2024 | Government report | DE/EU MeHg, tHg occurrence in German population across age groups (infants 0.5–<1 yr through elderly 65–<80 yr); consumption data from KiESEL (n=1,008 children... |
| 4 | [[sources/benjamin2023-canned-fish-ghana\|Benjamin et al. 2023]]. *Levels of Heavy Metals in Selected Canned Fish on Cape Coast Market, Central Region, Ghana*, International Journal of Environment, Agriculture and Biotechnology | 2023 | Peer-reviewed | GH Pb, Zn, Fe, Sn, Mn, tHg occurrence in 10 canned fish products from Cape Coast market, Ghana: 4 mackerel products, 4 sardine products, 2 tuna products (n=10) |
| 5 | [[sources/ulusoy2023-canned-tuna-toxic-metals\|Ulusoy 2023]]. *Determination of toxic metals in canned tuna sold in developed and developing countries: Health risk assessment associated with human consumption*, Marine Pollution Bulletin | 2023 | Peer-reviewed | US/DE/FI Cd, Pb, tHg, tAs occurrence in Two hundred twenty-two canned tuna samples purchased from supermarkets in 36 countries during 2017-2019; samples covered 19 developed... (n=222) |
| 6 | [[sources/ec-reg-2022-617-mercury-fishery\|EC 2022]]. *Commission Regulation (EU) 2022/617 of 12 April 2022 amending Regulation (EC) No 1881/2006 as regards maximum levels of mercury in fish and salt*, Official Journal of the European Union, OJ L 115, 13.4.2022, pp. 60–63 | 2022 | Regulation | EU tHg, MeHg occurrence in Regulatory instrument — establishes binding maximum levels (MLs) for total mercury in fishery products on the EU market |
| 7 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 8 | [[sources/anwar2021-canned-tuna-aceh-metals\|Anwar et al. 2021]]. *Quality of Canned Tuna from Aceh Water Sterilized Using a Pressure Canner*, Jurnal Pascapanen dan Bioteknologi Kelautan dan Perikanan | 2021 | Peer-reviewed | ID Pb, tHg occurrence in Tuna from Aceh waters canned under pressure-canner sterilization treatments |
| 9 | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|de et al. 2021]]. *Data on metals, nonmetal, and metalloid in the samples of the canned tuna and canned sardines sold in Brazil*, Data in Brief | 2021 | Peer-reviewed | Brazilian canned-tuna-and-sardines 6-metal panel including rarely-measured Al (n=20) |
| 10 | [[sources/djedjibegovic2020-bih-commercial-seafood-metals\|Djedjibegovic et al. 2020]]. *Heavy metals in commercial fish and seafood products and risk assessment in adult population in Bosnia and Herzegovina*, Scientific Reports | 2020 | Peer-reviewed | BA/ES/PT Cd, tHg, Pb occurrence in Commercial fish and seafood products purchased from retail in Bosnia and Herzegovina in June 2019, with country-of-origin labels... (n=37) |
| 11 | [[sources/ormaza-gonzalez2020-tuna-canned-eastern-pacific\|Ormaza-Gonzalez et al. 2020]]. *Low mercury, cadmium and lead concentrations in tuna products from the eastern Pacific*, Heliyon | 2020 | Peer-reviewed | EC/EU tHg, Cd, Pb occurrence in Ecuadorean cannery production batches sampled by the National Institute of Fisheries (INP, ISO/IEC 17025) 2009-2016: canned tuna (solid,... (n=2572) |
| 12 | [[sources/pawlaczyk2020-mercury-canned-fish-poland\|Pawlaczyk et al. 2020]]. *Risk of Mercury Ingestion from Canned Fish in Poland*, Molecules | 2020 | Peer-reviewed | PL tHg, MeHg occurrence in Eighty-four canned fish products covering 25 brands from over 14 producers (19 brands of canned fish plus six... (n=84) |
| 13 | [[sources/fsanz2019-25th-australian-total-diet-study\|Zealand 2019]]. *25th Australian Total Diet Study*, Food Standards Australia New Zealand | 2019 | Government report | AU/NZ tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Australian total-diet survey: 88 food types, 508 prepared-food composite samples from all Australian states and territories, sampled May... (n=508) |
| 14 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | Mexican Tijuana retail canned-tuna 4-metal panel with health-risk assessment (n=68) |
| 15 | [[sources/depaiva2017-canned-tuna-metals-sao-paulo\|Lima et al. 2017]]. *Cadmium, lead, tin, total mercury, and methylmercury in canned tuna commercialised in São Paulo, Brazil*, Food Additives & Contaminants: Part B, Vol. 10, No. 3, pp 185–191 | 2017 | Peer-reviewed | BR Cd, Pb, Sn, tHg, MeHg occurrence in Thirty canned-tuna samples from five commercial brands (the most-sold brands in the Campinas, São Paulo region), three batches... (n=30) |
| 16 | [[sources/pappalardo2017-canned-tuna-metals-italy\|Pappalardo et al. 2017]]. *Heavy metal content and molecular species identification in canned tuna: Insights into human food safety*, Molecular Medicine Reports | 2017 | Peer-reviewed | IT Cd, Pb, tHg occurrence in Ten popular brands of canned tuna sold in Italian supermarkets, five in olive oil and five in brine;... (n=10) |
| 17 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | IE/EU Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn occurrence in 141 food samples (1,043 sub-samples) representing the Irish diet, purchased in Dublin in autumn 2012; exposure modelled against... (n=141) |
| 18 | [[sources/efsa-sc2015-fish-seafood-mehg-risk-benefit\|EFSA 2015]]. *Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood*, EFSA Journal 2015;13(1):3982, 36 pp. | 2015 | Government report | EU MeHg, tHg occurrence in Scenario-based risk-benefit assessment across 26 chronic dietary surveys from 17 EU Member States (Belgium, Bulgaria, Cyprus, Czech Republic,... |
| 19 | [[sources/olmedo2013-andalusia-fish-shellfish-metals\|Olmedo et al. 2013]]. *Determination of toxic elements (mercury, cadmium, lead, tin and arsenic) in fish and shellfish samples. Risk assessment for the consumers*, Environment International | 2013 | Peer-reviewed | ES/MA/MR tHg, MeHg, Cd, Pb, Sn, tAs occurrence in Fresh, canned, and frozen fish and shellfish products representing 43 frequently consumed species/products in Andalusia, Spain; samples collected... (n=485) |
| 20 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in 14 canned food products (4 pineapple brands, mandarin oranges, fruit cocktail, small whole carrots, mushrooms, 2 peeled-tomato-in-juice brands,... (n=14) |
| 21 | [[sources/fsanz2011-23rd-australian-total-diet-study\|Zealand 2011]]. *The 23rd Australian Total Diet Study*, Food Standards Australia New Zealand | 2011 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Ninety-two Australian foods and beverages, including tap and bottled water, represented by 570 composite samples; each composite used... (n=570) |
| 22 | [[sources/cot2004-mercury-fish-shellfish\|Committee on Toxicity of 2004]]. *Updated COT statement on a survey of mercury in fish and shellfish*, Advice on fish consumption, Annex 3 | 2004 | Government report | GB tHg, MeHg occurrence in COT/SACN review of the 2002 FSA fish and shellfish mercury survey, 1998 MAFF marine fish/shellfish survey context, and... |
| 23 | [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel\|Shim et al. 2004]]. *Mercury and Fatty Acids in Canned Tuna, Salmon, and Mackerel*, Journal of Food Science | 2004 | Peer-reviewed | US-market canned-tuna-salmon-mackerel mercury distribution (n=272); largest US-jurisdiction tuna-mercury dataset |
| 24 | [[sources/voegborlo1999-libya-canned-tuna-metals\|Voegborlo et al. 1999]]. *Mercury, cadmium and lead content of canned tuna fish*, Food Chemistry | 1999 | Peer-reviewed | LY tHg, Cd, Pb occurrence in Fifty 5 kg cans of tuna fish from the Tuna Canning Factory in Misurata, Libya; tuna were caught... (n=50) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
<!-- END: hmi-page-history -->
