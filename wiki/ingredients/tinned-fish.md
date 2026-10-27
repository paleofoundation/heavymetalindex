---
title: "Tinned fish"
dek: "Heat processed canned fish include tuna, salmon, sardines and mackerel. The page covers mercury occurrence, species differences, can migration and regulatory context."
rail_highlights:
  - label: Exposure
    text: Total mercury differs among canned fish species
    source: sources/pawlaczyk2020-mercury-canned-fish-poland
    source_label: Fish study
  - label: Limits
    text: EU mercury maxima vary by fish species
    source: sources/eu-2023-915-contaminants-maximum-levels
    source_label: EU regulation
  - label: Key distinction
    text: Polish canned fish methylmercury estimates were not measured
    source: sources/pawlaczyk2020-mercury-canned-fish-poland
    source_label: Fish study
type: ingredient
commodity: tinned-fish
label: "Tinned fish"
aliases: [canned fish]
category: seafood-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 60]
    p95_ppb: 90.5
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 73.2]
    p95_ppb: 110
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 66.5]
    p95_ppb: 88.8
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 72]
    p95_ppb: 110
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1752]
    p95_ppb: 2617
    confidence: low
    n_studies: 2
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
    typical_ppb: [0, 30.8]
    p95_ppb: 36.6
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [500, 1500]
    p95_ppb: 3000
    confidence: low
    n_studies: 4
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
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-10-15
sources: 21
hero_image: /static/heroes/canned-spaghetti-tuna.webp
quick_read:
  summary: "Tinned fish metals reflect fish species and marine accumulation, alongside tin migration from cans during storage."
  points:
    - label: Metals of concern
      text: "[[metals/mercury-methyl|methylmercury]], total mercury, lead, cadmium and tin are the main concerns described."
    - label: Main drivers
      text: "fish species, size, food web position and [[mitigation/packaging-and-storage|can construction and storage]] shape contamination."
    - label: Practical framing
      text: "canning does not remove tissue mercury; distinguish measured species from estimates and use [[mitigation/testing-and-qc|lot testing]]."
hero_image_alt: "Separate unmarked cans of spaghetti in tomato sauce and pale flaked fish illustrating tinned fish ingredient context."
---

# Tinned fish

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Tinned fish metals reflect fish species and marine accumulation, alongside tin migration from cans during storage.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/mercury-methyl">methylmercury</a>, total mercury, lead, cadmium and tin are the main concerns described.</li>
    <li><strong>Main drivers:</strong> fish species, size, food web position and <a href="/mitigation/packaging-and-storage">can construction and storage</a> shape contamination.</li>
    <li><strong>Practical framing:</strong> canning does not remove tissue mercury; distinguish measured species from estimates and use <a href="/mitigation/testing-and-qc">lot testing</a>.</li>
  </ul>
</div>

This page draws on evidence from [[sources/fsa2016-infant-food-formula-metals-survey|UK Food Standards Agency]], [[sources/epa-iris-methylmercury|EPA IRIS]], [[sources/efsa-mercury-methylmercury-2012|EFSA]], [[sources/jecfa-61st-methylmercury|JECFA]], [[sources/eu-2023-915-contaminants-maximum-levels|European Commission]], and [[sources/fda-epa-fish-consumption-advice|EPA]], together with 6 peer-reviewed studies. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

This page covers the multi-species tinned fish ingredient. Canned tuna measurements are on [[ingredients/canned-tuna|canned tuna]]. This page does not name or rank retail brands.

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Tinned fish is a broad category of heat-processed canned fish products including tuna (Thunnus species), salmon (Oncorhynchus and Salmo species), sardines (Sardina pilchardus and related species), mackerel (Scomber species), and anchovies (Engraulis encrasicolus). The heavy metal contamination profile of canned fish is shaped by two distinct accumulation pathways: bioaccumulation in the fish tissue from the marine environment, and tin (Sn) migration from the can wall into the food. Mercury (Hg), primarily as methylmercury (MeHg), is the predominant toxicological concern in fish-based foods; MeHg is produced by methylation of inorganic Hg in marine sediments by sulfate-reducing bacteria and enters the marine food chain through phytoplankton, progressing through zooplankton, small fish, and ultimately to large predatory fish such as tuna. Because MeHg is lipid-soluble and tightly bound to muscle protein, it is not substantially eliminated by the fish and accumulates with each trophic level; older, larger fish of predatory species therefore carry the highest MeHg concentrations. Species and trophic level are therefore the dominant determinants of Hg in tinned fish: albacore and bigeye tuna carry substantially more Hg than light tuna, skipjack, sardines, anchovies, or mackerel. Lead (Pb) and cadmium (Cd) in fish tissue reflect marine environmental contamination and species-specific accumulation; filter-feeding or bottom-dwelling species may accumulate higher Cd than open-ocean pelagics. The second contamination pathway is Sn migration from the can wall: plain tinplate cans leach Sn into the food over time, particularly in acidic products and under elevated storage temperatures. The EU has established a maximum Sn limit of 200 mg/kg for canned foods to address this pathway. Lacquer-lined (enameled) cans substantially reduce Sn migration by interposing a polymer barrier between the tinplate and the food; the extent of Sn reduction depends on lacquer coverage, film integrity, and product pH.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–60 | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/kosker2023-canned-fish-turkey\|3]] |
| Cd | n=4 | 0–73.2 | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/kosker2023-canned-fish-turkey\|3]] |
| iAs | n=1 | 0–66.5 | low | — |
| tAs | n=4 | 500–1500 | low | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/kosker2023-canned-fish-turkey\|3]] |
| tHg | n=5 | 0–72 | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/blanco2023-mercury-fish-valencia\|3]] |
| Ni | data gap | — | — | — |
| Al | n=2 | 0–1752 | low | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/kosker2023-canned-fish-turkey\|2]] |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–30.8 | low | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]] |
| U | data gap | — | — | — |

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

A Polish canned-fish study reported a canned tuna mean of 79.7 µg/kg total mercury (n=57), species means of 47.8 µg/kg in herring, 16.1 µg/kg in sprat, 11.4 µg/kg in sardine, 53.9 µg/kg in cod, 40.9 µg/kg in mackerel (range 1.7 to 90.5 µg/kg), and 12.6 µg/kg in salmon. The source record states that the study maximum is 351.3 µg/kg in one bonito-in-oil sample while the canned tuna table prints a maximum of 351 µg/kg. Methylmercury in that exposure table is estimated as total mercury divided by 1.12 rather than measured. [[sources/pawlaczyk2020-mercury-canned-fish-poland|2]]

A Ghanaian canned-fish study reported total mercury means of 0.263 +/- 0.006 µg/g in tuna (2 products), 0.126 +/- 0.017 µg/g in mackerel (4 products), and 0.132 +/- 0.012 µg/g in sardine (4 products). Its source record states that one µg/g is equivalent to one mg/kg and 1,000 µg/kg. [[sources/benjamin2023-canned-fish-ghana|3]]

An Egyptian canned-fish study reported that 40 percent of canned tuna samples and 45 percent of canned sardine samples exceeded the EU mercury limit it cites, with a mean mercury estimated daily intake of 0.265 µg/kg body weight/day against a tolerable daily intake of 0.228 µg/kg BW/day. The source record does not print the underlying mercury concentrations. [[sources/hussein2024-toxic-metals-canned-fish-egypt|4]]

Species is the dominant determinant of Hg in tinned fish. Canned albacore (white) tuna carries substantially higher total mercury (tHg) and MeHg than canned light tuna (typically skipjack), reflecting the longer lifespan, larger body size, and higher trophic position of albacore. FDA and EPA dietary guidance for consumers and pregnant women consistently distinguishes these two tuna types. Sardines, anchovies, and mackerel, which occupy lower trophic positions and have shorter lifespans, carry substantially lower Hg than tuna. Geographic fishing region also matters: tuna caught in the Western Pacific may carry different Hg than tuna from the Eastern Atlantic or Indian Ocean, reflecting regional differences in ocean Hg methylation and prey community. Cd in fish tissue varies by species and ocean basin; some tuna species accumulate Cd in the liver (not the muscle), and canned products made from the whole fish (such as some sardine products packed with viscera) carry higher Cd than those using only the muscle. Sn in canned fish varies by can construction: plain tinplate versus lacquer-lined cans, can age, storage temperature, and product pH (acidic products in brine or tomato sauce leach more Sn than oil-packed products). Quantitative species-by-species and region-by-region breakdown will be populated as dedicated occurrence surveys are ingested.

## Processing effects

The retort canning process (heat sterilization at approximately 121 degrees Celsius for a specified duration) does not destroy or remove heavy metals from fish tissue. MeHg in particular is thermally stable and is retained in the muscle at essentially the same concentration as in the fresh fish. Total Hg, Pb, and Cd are similarly unaffected by the retorting process. The packing medium has implications for Sn migration and for analytical detectability: fish packed in oil may partition some fat-soluble analytes between the oil and tissue phases; fish packed in brine (water and salt) retains metals in the muscle tissue. If the packing oil or brine is consumed (for example, in sardines where the oil is typically consumed with the fish), the total dietary exposure includes both the tissue and any metal in the liquid phase. For Sn specifically, the can construction is the primary variable: lacquer-lined (enameled) cans reduce Sn migration substantially compared to plain tinplate. Can age and storage conditions affect Sn migration rates; higher temperatures accelerate Sn dissolution from the can wall.

## Ingredient-derivative risk

The primary derivative risk pathway for tinned fish is fish oil supplements, which may concentrate fat-soluble MeHg from fish lipid fractions. High-potency omega-3 fish oil products derived from fatty fish, particularly if not subjected to molecular distillation or other Hg-reduction purification steps, can carry detectable MeHg; this is a recognized regulatory and commercial concern addressed by several national pharmacopeia standards for supplement fish oil. Canned fish used as an ingredient in spreads, pates, pasta sauces, and ready meals contributes its tissue Hg and Pb to the finished product at the inclusion level of the fish fraction. Pet food products using canned tuna or tuna-derived protein carry the same trophic-accumulation Hg risk as the human food product; this is relevant where pets and their owners share food resources or where pet food ingestion is a secondary exposure pathway for children.

## Mitigation options

### Sourcing levers

Specifying lower-Hg species is the most impactful sourcing lever: sourcing sardines, anchovies, or skipjack light tuna instead of albacore tuna reduces MeHg by a factor of two to six or more depending on the species comparison. For manufacturers formulating products for pregnant women or young children, species specification is the primary risk management lever. Specifying fishing regions with lower documented ocean Hg levels provides a secondary lever, though it is operationally more difficult than species specification given the complexity of fish supply chains. For Sn, specifying lacquer-lined cans over plain tinplate is a can-procurement lever; this is a standard quality specification for manufacturers seeking to minimize Sn in the finished product.

### Agronomic levers

_No agronomic levers apply to tinned fish; Hg accumulation is determined by marine biogeochemistry and fish biology, not by terrestrial agricultural practices. Section not applicable._

### Processing levers

Molecular distillation and other purification processes applied to fish oil concentrate can substantially reduce MeHg in the oil fraction; this lever is relevant for fish oil supplements and for products formulated with fish oil as an ingredient. For canned fish as a whole product, no processing step removes tissue Hg once the fish is canned. Using lacquer-lined cans rather than plain tinplate is a packaging-and-processing selection decision that reduces Sn migration throughout the product's shelf life.

### Formulation levers

For products marketed to pregnant women, infants, or young children that incorporate fish, substituting lower-Hg species (sardines, anchovies, wild salmon, skipjack tuna) for higher-Hg species (albacore tuna, king mackerel) is the primary formulation lever for Hg reduction. Reducing the fish fraction in a multi-ingredient product proportionally reduces Hg contribution.

### Testing and QC levers

Lot-level ICP-MS testing for total Hg with speciation for MeHg is the standard QC requirement for canned fish sold in markets with MeHg advisory programs or regulatory limits. Sn testing by ICP-MS or other methods should be included in finished-product QC for plain tinplate canned products, particularly after extended storage. Species authentication testing (DNA barcoding, stable isotope analysis) prevents species substitution that could introduce higher-Hg fish labeled as lower-Hg species.

### Packaging and storage levers

The choice between lacquer-lined (enameled) and plain tinplate cans is the primary packaging lever for Sn reduction. Lacquer-lined cans substantially reduce Sn migration, particularly in acidic products and over extended shelf life. Storage temperature management reduces Sn migration rates; cooler storage conditions slow Sn dissolution. Shelf-life management and FIFO inventory practices ensure that canned fish does not approach or exceed its best-before date under conditions that accelerate Sn migration.

## Regulatory limits that apply

The filed guidance figures do not agree on one safe amount, and this page does not choose among them. The EPA IRIS oral reference dose is 0.1 µg methylmercury/kg b.w./day. [[sources/epa-iris-methylmercury|5]] The EFSA 2012 methylmercury tolerable weekly intake is 1.3 µg mercury/kg b.w./week. [[sources/efsa-mercury-methylmercury-2012|6]] The JECFA provisional tolerable weekly intake is 1.6 µg methylmercury/kg b.w./week. [[sources/jecfa-61st-methylmercury|7]]

Commission Regulation (EU) 2023/915 prints total mercury maximum levels of 1.0 mg/kg for muscle meat of listed predatory species including tuna, 0.50 mg/kg for crustaceans, molluscs, and other muscle meat of fish, and 0.30 mg/kg for a listed lower-mercury group. The source record prints those levels with decimal commas. [[sources/eu-2023-915-contaminants-maximum-levels|8]] The FDA and EPA fish advice record places light canned tuna in Good Choices at 1 serving per week and states an avoid threshold of approximately 0.46 ppm methylmercury. [[sources/fda-epa-fish-consumption-advice|9]]

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the applicable Pb maximum level for fish (muscle meat) is 0.30 mg/kg (300 ppb) wet weight. The Cd maximum level for fish muscle is 0.050 mg/kg (50 ppb) wet weight for most species, rising to 0.10 mg/kg (100 ppb) for species such as tuna, anchovies, and bonito that are known Cd accumulators. The total Hg (tHg) maximum level for fish is 0.50 mg/kg (500 ppb) wet weight for most commercial species, with a higher limit of 1.0 mg/kg (1,000 ppb) for predatory species such as marlin, swordfish, and shark. For canned fish products, a specific Sn maximum of 200 mg/kg applies under EU rules, reflecting the can-migration pathway. In the United States, FDA and EPA have established consumption frequency guidance for fish based on Hg content, including specific guidance for pregnant women, nursing mothers, and young children. FDA does not publish a numerical Hg action level for canned fish equivalent to the EU limits, but the consumption guidance is functionally equivalent for high-exposure populations. The broader FDA Closer to Zero program (see [[regulations/fda-closer-to-zero]]) does not specifically address canned fish as a primary category for Pb reduction efforts, given that Hg rather than Pb is the dominant concern for this food type.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/macdonald2025-fss-uk-fishery-contaminants-review\|MacDonald et al. 2025]]. *Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review*, Fera Science Ltd report to Food Standards Scotland (Report FR/002826) | 2025 | Agency report | GB/EU tHg, MeHg, Cd, Pb, tAs, iAs, Ni, Cr occurrence in Narrative + tabular review of chemical contaminants in wild-caught and smoked fish, shellfish, crustaceans, and cephalopods from Scottish... (n=192) |
| 2 | [[sources/chamorro2024-bluefin-tuna-mercury-review\|Chamorro et al. 2024]]. *Atlantic bluefin tuna (Thunnus thynnus): health benefits, contaminants and risk-benefit analysis for human consumption*, Food Reviews International | 2024 | Peer-reviewed | EU tHg, MeHg, Cd, Pb, As occurrence in Review of Atlantic bluefin tuna (Thunnus thynnus) literature on contaminants and nutritional composition |
| 3 | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|Hussein et al. 2024]]. *Risk assessment of some toxic metals in canned fish products retailed in Mansoura, Egypt*, Open Veterinary Journal | 2024 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Al, Sn occurrence in 100 canned fish products (20 each: herring, mackerel, salmon, sardine, tuna) from retail shops in Mansoura, Egypt; collected... (n=100) |
| 4 | [[sources/li2024-global-fisheries-mehg\|Li et al. 2024]]. *Global fishing patterns amplify human exposures to methylmercury*, Proceedings of the National Academy of Sciences | 2024 | Peer-reviewed | global MeHg occurrence in Global fisheries modeling dataset: catch-weighted MeHg concentrations estimated for 1,774 marine species across global exclusive economic zones using... (n=1482) |
| 5 | [[sources/alsulaiti2023-qatar-fish-mehg\|Al-Sulaiti et al. 2023]]. *Health risk assessment of methyl mercury from fish consumption in a sample of adult Qatari residents*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | QA tHg, MeHg occurrence in Adult Qatari residents aged 18+ (n=600 dietary survey respondents; 65 composite fish samples across 7 species) (n=65) |
| 6 | [[sources/bae2023-tuna-heavy-metals-korea\|Bae et al. 2023]]. *Heavy metal concentrations in commercial tuna products in Korea and assessment of health risks*, unknown | 2023 | Peer-reviewed | KR MeHg, tHg, Pb, Cd, tAs occurrence in Commercial tuna products purchased in Korea (n=31) |
| 7 | [[sources/benjamin2023-canned-fish-ghana\|Benjamin et al. 2023]]. *Levels of Heavy Metals in Selected Canned Fish on Cape Coast Market, Central Region, Ghana*, International Journal of Environment, Agriculture and Biotechnology | 2023 | Peer-reviewed | GH Pb, Zn, Fe, Sn, Mn, tHg occurrence in 10 canned fish products from Cape Coast market, Ghana: 4 mackerel products, 4 sardine products, 2 tuna products (n=10) |
| 8 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | ES/EU tHg, MeHg occurrence in Fish samples collected under the Valencian Community food health surveillance programme (Generalitat Valenciana); 560 THg measurements, 206 MeHg... (n=635) |
| 9 | [[sources/kosker2023-canned-fish-turkey\|Kosker et al. 2023]]. *Metal levels of canned fish sold in Türkiye: health risk assessment*, Frontiers in Nutrition | 2023 | Peer-reviewed | TR Pb, Cd, tAs, Al, Cr, Fe, Cu, Zn, Se occurrence in Canned fish products (28 tuna, 3 salmon, 1 mackerel, 1 anchovy) from 13 brands, Turkey 2021 (n=34) |
| 10 | [[sources/ulusoy2023-canned-tuna-toxic-metals\|Ulusoy 2023]]. *Determination of toxic metals in canned tuna sold in developed and developing countries: Health risk assessment associated with human consumption*, Marine Pollution Bulletin | 2023 | Peer-reviewed | US/DE/FI Cd, Pb, tHg, tAs occurrence in Two hundred twenty-two canned tuna samples purchased from supermarkets in 36 countries during 2017-2019; samples covered 19 developed... (n=222) |
| 11 | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|de et al. 2021]]. *Data on metals, nonmetal, and metalloid in the samples of the canned tuna and canned sardines sold in Brazil*, Data in Brief | 2021 | Peer-reviewed | BR Al, tAs, Ba, Cd, Co, Cr, Cu, Fe, Ni, Pb, Zn occurrence in Twenty-six product-code rows from Campo Grande, Mato Grosso do Sul, Brazil: 16 canned-tuna rows (four coded companies across... (n=26) |
| 12 | [[sources/naess2020-norwegian-seafood-metals\|Naess et al. 2020]]. *Mercury, lead, arsenic, and cadmium in Norwegian seafood products and consumer exposure*, Food Additives & Contaminants: Part B | 2020 | Peer-reviewed | NO tHg, Pb, tAs, Cd occurrence in Market-representative commercially available seafood products collected in Norway in 2015, 2017, and 2018; each analytical sample was a... (n=84) |
| 13 | [[sources/pawlaczyk2020-mercury-canned-fish-poland\|Pawlaczyk et al. 2020]]. *Risk of Mercury Ingestion from Canned Fish in Poland*, Molecules | 2020 | Peer-reviewed | PL tHg, MeHg occurrence in Eighty-four canned fish products covering 25 brands from over 14 producers (19 brands of canned fish plus six... (n=84) |
| 14 | [[sources/fsanz2019-25th-australian-total-diet-study\|Zealand 2019]]. *25th Australian Total Diet Study*, Food Standards Australia New Zealand | 2019 | Government report | AU/NZ tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Australian total-diet survey: 88 food types, 508 prepared-food composite samples from all Australian states and territories, sampled May... (n=508) |
| 15 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | MX tHg, Pb, Cd, Cr occurrence in 48 samples of canned tuna (6 samples × 8 brands) and 20 samples of fresh fish (5 samples... (n=68) |
| 16 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | IE/EU Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn occurrence in 141 food samples (1,043 sub-samples) representing the Irish diet, purchased in Dublin in autumn 2012; exposure modelled against... (n=141) |
| 17 | [[sources/gu2014-liaoning-canned-fish-metals\|Gu et al. 2014]]. *Determination and Safety Evaluation of Heavy Metals in Canned Fish from Liaoning Province*, Asian Journal of Chemistry | 2014 | Peer-reviewed | CN Cd, Cr, Cu, Fe, Pb, Sn, Zn occurrence in Seven kinds of canned fish randomly purchased from retail outlets in 14 cities in Liaoning Province, China, January-May... |
| 18 | [[sources/efsa2004-organotins-foodstuffs\|EFSA 2004]]. *Opinion of the Scientific Panel on Contaminants in the Food Chain on a request from the Commission to assess the health risks to consumers associated with exposure to organotins in foodstuffs*, EFSA Journal 2004;102:1-119 | 2004 | Government report | EU/BE/DK Sn occurrence in EU SCOOP Task 3.2.13 occurrence database for organotin compounds in fish and fishery products submitted by Belgium, Denmark,... (n=2110) |
| 19 | [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel\|Shim et al. 2004]]. *Mercury and Fatty Acids in Canned Tuna, Salmon, and Mackerel*, Journal of Food Science | 2004 | Peer-reviewed | US tHg occurrence in 240 canned tuna samples (5 brands × 4 types × 3 lots × 2 composites), 16 canned salmon... (n=272) |
| 20 | [[sources/voegborlo1999-libya-canned-tuna-metals\|Voegborlo et al. 1999]]. *Mercury, cadmium and lead content of canned tuna fish*, Food Chemistry | 1999 | Peer-reviewed | LY tHg, Cd, Pb occurrence in Fifty 5 kg cans of tuna fish from the Tuna Canning Factory in Misurata, Libya; tuna were caught... (n=50) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
