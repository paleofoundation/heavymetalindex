---
title: "Tinned fish"
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
    confidence: medium
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
    confidence: medium
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
updated: 2026-05-16
sources: 8
---

# Tinned fish

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Tinned fish is a broad category of heat-processed canned fish products including tuna (Thunnus species), salmon (Oncorhynchus and Salmo species), sardines (Sardina pilchardus and related species), mackerel (Scomber species), and anchovies (Engraulis encrasicolus). The heavy metal contamination profile of canned fish is shaped by two distinct accumulation pathways: bioaccumulation in the fish tissue from the marine environment, and tin (Sn) migration from the can wall into the food. Mercury (Hg), primarily as methylmercury (MeHg), is the predominant toxicological concern in fish-based foods; MeHg is produced by methylation of inorganic Hg in marine sediments by sulfate-reducing bacteria and enters the marine food chain through phytoplankton, progressing through zooplankton, small fish, and ultimately to large predatory fish such as tuna. Because MeHg is lipid-soluble and tightly bound to muscle protein, it is not substantially eliminated by the fish and accumulates with each trophic level; older, larger fish of predatory species therefore carry the highest MeHg concentrations. Species and trophic level are therefore the dominant determinants of Hg in tinned fish: albacore and bigeye tuna carry substantially more Hg than light tuna, skipjack, sardines, anchovies, or mackerel. Lead (Pb) and cadmium (Cd) in fish tissue reflect marine environmental contamination and species-specific accumulation; filter-feeding or bottom-dwelling species may accumulate higher Cd than open-ocean pelagics. The second contamination pathway is Sn migration from the can wall: plain tinplate cans leach Sn into the food over time, particularly in acidic products and under elevated storage temperatures. The EU has established a maximum Sn limit of 200 mg/kg for canned foods to address this pathway. Lacquer-lined (enameled) cans substantially reduce Sn migration by interposing a polymer barrier between the tinplate and the food; the extent of Sn reduction depends on lacquer coverage, film integrity, and product pH.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–60 | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/kosker2023-canned-fish-turkey\|3]] |
| Cd | n=4 | 0–73.2 | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/kosker2023-canned-fish-turkey\|3]] |
| iAs | n=1 | 0–66.5 | medium | — |
| tAs | n=4 | 500–1500 | low | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/kosker2023-canned-fish-turkey\|3]] |
| tHg | n=5 | 0–72 | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/chamorro2024-bluefin-tuna-mercury-review\|2]], [[sources/blanco2023-mercury-fish-valencia\|3]] |
| Ni | data gap | — | — | — |
| Al | n=2 | 0–1752 | low | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/kosker2023-canned-fish-turkey\|2]] |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–30.8 | medium | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]] |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

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

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the applicable Pb maximum level for fish (muscle meat) is 0.30 mg/kg (300 ppb) wet weight. The Cd maximum level for fish muscle is 0.050 mg/kg (50 ppb) wet weight for most species, rising to 0.10 mg/kg (100 ppb) for species such as tuna, anchovies, and bonito that are known Cd accumulators. The total Hg (tHg) maximum level for fish is 0.50 mg/kg (500 ppb) wet weight for most commercial species, with a higher limit of 1.0 mg/kg (1,000 ppb) for predatory species such as marlin, swordfish, and shark. For canned fish products, a specific Sn maximum of 200 mg/kg applies under EU rules, reflecting the can-migration pathway. In the United States, FDA and EPA have established consumption frequency guidance for fish based on Hg content, including specific guidance for pregnant women, nursing mothers, and young children. FDA does not publish a numerical Hg action level for canned fish equivalent to the EU limits, but the consumption guidance is functionally equivalent for high-exposure populations. The broader FDA Closer to Zero program (see [[regulations/fda-closer-to-zero]]) does not specifically address canned fish as a primary category for Pb reduction efforts, given that Hg rather than Pb is the dominant concern for this food type.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chamorro2024-bluefin-tuna-mercury-review\|Chamorro et al. 2024]]. *Atlantic bluefin tuna (Thunnus thynnus): health benefits, contaminants and risk-benefit analysis for human consumption*, Food Reviews International | 2024 | Peer-reviewed | EU tHg, MeHg, Cd, Pb, As occurrence in Review of Atlantic bluefin tuna (Thunnus thynnus) literature on contaminants and nutritional composition |
| 2 | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|Hussein et al. 2024]]. *Risk assessment of some toxic metals in canned fish products retailed in Mansoura, Egypt*, Open Veterinary Journal | 2024 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Al, Sn occurrence in 100 canned fish products (20 each: herring, mackerel, salmon, sardine, tuna) from retail shops in Mansoura, Egypt; collected... (n=100) |
| 3 | [[sources/li2024-global-fisheries-mehg\|Li et al. 2024]]. *Global fishing patterns amplify human exposures to methylmercury*, Proceedings of the National Academy of Sciences | 2024 | Peer-reviewed | global MeHg occurrence in Global fisheries modeling dataset: catch-weighted MeHg concentrations estimated for 1,774 marine species across global exclusive economic zones using... (n=1482) |
| 4 | [[sources/alsulaiti2023-qatar-fish-mehg\|Al-Sulaiti et al. 2023]]. *Health risk assessment of methyl mercury from fish consumption in a sample of adult Qatari residents*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | QA tHg, MeHg occurrence in Adult Qatari residents aged 18+ (n=600 dietary survey respondents; 65 composite fish samples across 7 species) (n=65) |
| 5 | [[sources/bae2023-tuna-heavy-metals-korea\|Bae et al. 2023]]. *Heavy metal concentrations in commercial tuna products in Korea and assessment of health risks*, unknown | 2023 | Peer-reviewed | KR MeHg, tHg, Pb, Cd, tAs occurrence in Commercial tuna products purchased in Korea (n=31) |
| 6 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | ES/EU tHg, MeHg occurrence in Fish samples collected under the Valencian Community food health surveillance programme (Generalitat Valenciana); 560 THg measurements, 206 MeHg... (n=635) |
| 7 | [[sources/kosker2023-canned-fish-turkey\|Kosker et al. 2023]]. *Metal levels of canned fish sold in Türkiye: health risk assessment*, Frontiers in Nutrition | 2023 | Peer-reviewed | TR Pb, Cd, tAs, Al, Cr, Fe, Cu, Zn, Se occurrence in Canned fish products (28 tuna, 3 salmon, 1 mackerel, 1 anchovy) from 13 brands, Turkey 2021 (n=34) |
<!-- END: hmi-source-legend -->

