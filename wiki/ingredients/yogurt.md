---
title: "Yogurt"
dek: "A fermented dairy food made from milk and used in desserts, drinks and infant foods. Explore the evidence on measured metals, straining and milk sourcing."
rail_highlights:
  - label: Exposure
    text: Lead detected in surveyed Egyptian yogurt
    source: sources/ibrahim2025-metals-flavored-dairy-egypt
    source_label: Egyptian study
  - label: Key distinction
    text: Yogurt non detects are not measured zeroes
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: ingredient
commodity: yogurt
label: "Yogurt"
aliases: [yoghurt]
category: dairy
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 14.8]
    p95_ppb: 51.1
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 4.3]
    p95_ppb: 5.2
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 11.2]
    p95_ppb: 33.6
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2.4
    confidence: medium
    n_studies: 3
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
    typical_ppb: [0, 1734]
    p95_ppb: 2352
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 200.6]
    p95_ppb: 245.4
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [3, 37]
    p95_ppb: 68
    confidence: low
    n_studies: 2
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
updated: 2026-05-16
sources: 10
hero_image: /static/heroes/fresh-frozen-dairy-desserts.webp
hero_image_alt: "Separate dishes of smooth white fresh dairy, a frozen white swirl and pale ice-cream scoops illustrating yogurt ingredient context."
---

# Yogurt

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Yogurt is a fermented dairy product produced from whole or reduced-fat cow's milk by the action of thermophilic lactic acid bacteria, principally Streptococcus thermophilus and Lactobacillus delbrueckii subsp. bulgaricus, with optional addition of probiotic strains. Because yogurt derives its base metal profile directly from its milk substrate, and because dairy cows are efficient discriminators against heavy metal transfer from feed into milk, yogurt is one of the lowest-risk food categories in the diet for Pb, Cd, and other heavy metals. The bioavailability of heavy metals for transfer from feed into bovine milk is well established to be low: for lead, transfer factors from feed to milk are in the range of 1 to 3 percent of ingested dose per kilogram milk; for cadmium, the transfer factor is even lower. Arsenic in cow's milk is predominantly in the dimethylarsinic acid (DMA) form, an organic species of low toxicological concern, and inorganic arsenic in milk is consistently below analytical reporting limits in market surveillance data. Mercury transfer to milk is also low, as methylmercury preferentially partitions to fatty tissue rather than milk. The fermentation step itself does not concentrate metals or introduce them; the lactic acid bacteria responsible for souring and curdling draw no heavy metals into the curd-forming process, and the whey drained off in some yogurt styles carries a portion of the water-soluble metal load with it, if anything marginally reducing concentrations in the retained curd fraction. The FSA/Fera FS102048 survey measured yogurt as a food composite, and the FDA Closer to Zero final guidance for Pb establishes a 10 ppb action level applicable to yogurt-based products intended for infants and young children, confirming the regulatory expectation that yogurt operates well within low-risk territory for Pb ([[sources/fda-ctz-Pb-babyfood-2025|1]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–14.8 | medium | [[sources/ibrahim2025-metals-flavored-dairy-egypt\|1]], [[sources/sarkis2025-heavy-metals-yogurt-lebanon\|2]], [[sources/fda-ctz-Pb-babyfood-2025\|3]] |
| Cd | n=3 | 0–4.3 | medium | [[sources/ibrahim2025-metals-flavored-dairy-egypt\|1]], [[sources/sarkis2025-heavy-metals-yogurt-lebanon\|2]], [[sources/starska2011-noxious-elements-milk-products-poland\|3]] |
| iAs | n=1 | 0–11.2 | low | — |
| tAs | n=2 | 3–37 | low | [[sources/ibrahim2025-metals-flavored-dairy-egypt\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]] |
| tHg | n=3 | 0–1 | medium | [[sources/ibrahim2025-metals-flavored-dairy-egypt\|1]], [[sources/pankiewicz2012-thg-dairy-products-poland\|2]], [[sources/starska2011-noxious-elements-milk-products-poland\|3]] |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–1734 | low | [[sources/ibrahim2025-metals-flavored-dairy-egypt\|1]] |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–200.6 | low | — |
| U | data gap | — | — | — |

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Yogurt's metal concentrations are consistently low across market surveys and jurisdictions, reflecting the low metal content of its milk base rather than any geography- or variety-specific pathway. Ibrahim et al. 2025 measured Pb, Cd, tAs, tHg, Al, Sb, Ni, and Cr in 180 flavored dairy products from the Egyptian market by ICP-MS, finding that yogurt samples showed metal concentrations that were generally low in absolute terms and below EU regulatory limits, even in an Egyptian market context where the supply chain is distinct from European or North American dairy systems ([[sources/ibrahim2025-metals-flavored-dairy-egypt|2]]). Greek-style yogurt, which concentrates the milk protein and fat fraction by straining out whey, would be expected to carry marginally higher per-gram metal concentrations than conventional stirred yogurt to the extent that metals partition to the curd rather than the whey; however, because baseline concentrations are low, even this concentration effect produces values that remain well within all applicable limits. Full-fat versus reduced-fat yogurt formats do not differ meaningfully in their metal content because the relevant metals (Pb, Cd, iAs) partition primarily to the aqueous phase rather than the fat fraction in dairy matrices. Variation across production regions is expected to be minimal given the uniformly low bioavailability of metals from dairy cow feed to milk.

## Processing effects

The fermentation process in yogurt production does not introduce heavy metals and does not significantly concentrate them. Lactic acid bacteria cultures used in yogurt fermentation (Streptococcus thermophilus and Lactobacillus delbrueckii subsp. bulgaricus) produce lactic acid and modify the protein matrix but do not accumulate metals from their environment into the curd. Some research has investigated the metal-binding capacity of Lactobacillus strains in vitro, finding that certain strains can adsorb Pb and Cd to their cell walls, potentially reducing bioaccessible metal in the finished product; however, the concentrations involved are low in both untreated milk and yogurt, so any bioaccessibility reduction is a marginal effect on an already low baseline. Straining to produce Greek or concentrated yogurt removes the whey phase; metals in dairy are primarily in the aqueous fraction, so whey removal could marginally increase the per-gram concentration in the retentate, but this effect is small relative to the inter-lot variability in raw milk. Heating of milk before fermentation (pasteurization), cooling, inoculation, and incubation steps all occur at temperatures where metals are non-volatile and concentrations are unaffected.

## Ingredient-derivative risk

Yogurt-based infant foods and toddler products represent the derivative category with the most regulatory scrutiny, as these products are consumed by a vulnerable population group. The FDA Closer to Zero 10 ppb Pb action level for yogurt intended for infants and young children establishes the applicable ceiling; market yogurt concentrations are expected to be well below this threshold. Yogurt used as an ingredient in mixed products (smoothies, dips, sauces, frozen desserts) contributes its low metal baseline to the blended product and does not represent a significant metal input. Yogurt powder, produced by spray drying, concentrates metals proportionally to the moisture removal, but because baseline concentrations are low, powdered yogurt metal concentrations remain in the low range in absolute terms. Probiotic-supplemented yogurts where cultures are added at high concentrations do not introduce additional metals from the bacterial biomass at commercially relevant levels.

## Mitigation options

### Sourcing levers

Dairy sourcing from suppliers with documented raw milk monitoring programs provides the baseline assurance for yogurt producers. Because metal concentrations in milk are consistently low and driven by animal feed quality and environmental exposure at the farm level rather than by geographic or geological soil factors in the same way as plant foods, sourcing levers are of lower priority for yogurt than for crop-derived ingredients. Supplier quality programs that include routine raw milk monitoring for Pb and Cd, consistent with EU dairy surveillance expectations, are the standard commercial practice.

### Agronomic levers

At the dairy farm level, feed quality management (ensuring that animal feed does not contain elevated heavy metals from contaminated forage, by-product feeds, or mineral supplements) is the primary lever for controlling milk metal content. Feed contaminants, particularly elevated Cd in phosphate mineral supplements used in dairy rations, represent a potential pathway if not controlled. _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Pasteurization and fermentation do not alter metal concentrations in the yogurt matrix. No processing lever analogous to washing (for vegetables) or milling (for grains) is available or necessary for yogurt given its low baseline concentrations. Greek-style straining removes whey and could marginally concentrate metals in the retentate; this is a minor effect on low baseline values rather than a significant risk.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine surveillance of raw milk and finished yogurt for Pb and Cd at frequencies consistent with applicable dairy monitoring programs provides compliance documentation. For yogurt-based infant food formulations, finished-product testing against the FDA Closer to Zero 10 ppb Pb action level is the relevant compliance benchmark. Third-party verification testing supports claims made in the context of certification programs.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation 2023/915 sets a Pb ML for milk of 0.020 mg/kg (20 ppb) on a wet-weight basis; yogurt, as a processed dairy product derived from milk, falls under this dairy Pb limit. No EU ML exists specifically for Cd in milk or yogurt as of 2026, reflecting the very low Cd concentrations found in dairy matrices. See [[regulations/eu2023-contaminants-maximum-levels]] for the full milk and dairy-products scope. The FDA Closer to Zero final guidance establishes a 10 ppb (0.010 mg/kg) action level for Pb in yogurt and yogurt-based products intended for infants and young children ([[sources/fda-ctz-Pb-babyfood-2025|1]]); this is a voluntary action level rather than a legally binding maximum, but it represents the operative US compliance benchmark for baby yogurt products. For adult yogurt products in the US, no federal Pb or Cd action level applies outside this baby-food context. Codex STAN 193-1995 does not specify a Cd or Pb ML for fluid milk or yogurt, reflecting the broad regulatory consensus that dairy is a low-risk matrix for these analytes. See [[regulations/codex-cadmium-mls]] for the scope of Codex dairy coverage.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 235: Yogurt, lowfat, fruit-flavored | tAs | 3 | 0 | ND in all composites | 3 |
| 235: Yogurt, lowfat, fruit-flavored | Cd | 3 | 0 | ND in all composites | 1 |
| 235: Yogurt, lowfat, fruit-flavored | Cr | 3 | 0 | ND in all composites | 50 |
| 235: Yogurt, lowfat, fruit-flavored | Pb | 3 | 0 | ND in all composites | 4 |
| 235: Yogurt, lowfat, fruit-flavored | tHg | 3 | 0 | ND in all composites | 1 |
| 235: Yogurt, lowfat, fruit-flavored | Ni | 3 | 0 | ND in all composites | 40 |
| 235: Yogurt, lowfat, fruit-flavored | U | 3 | 0 | ND in all composites | 1 |
| 521: Yogurt, lowfat, vanilla | tAs | 3 | 0 | ND in all composites | 3 |
| 521: Yogurt, lowfat, vanilla | Cd | 3 | 0 | ND in all composites | 1 |
| 521: Yogurt, lowfat, vanilla | Cr | 3 | 0 | ND in all composites | 50 |
| 521: Yogurt, lowfat, vanilla | Pb | 3 | 0 | ND in all composites | 4 |
| 521: Yogurt, lowfat, vanilla | tHg | 3 | 0 | ND in all composites | 1 |
| 521: Yogurt, lowfat, vanilla | Ni | 3 | 0 | ND in all composites | 40 |
| 521: Yogurt, lowfat, vanilla | U | 3 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
3. [[sources/ibrahim2025-metals-flavored-dairy-egypt|Dietary Exposure and Health Risk Assessment of Selected Toxic and Essential Metals in Various Flavored Dairy Products]]<span class="hmi-ref-meta">Ibrahim AS, Awaad SS, Shehta HA, and Hegab OW · Biological Trace Element Research · 2025 · [doi.org/10.1007/s12011-025-04676-0](https://doi.org/10.1007/s12011-025-04676-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero final guidance setting 10 ppb Pb action level for yogurt intended for infants and young children; applicable Pb regulatory ceiling for yogurt-based baby foods |
| 2 | [[sources/ibrahim2025-metals-flavored-dairy-egypt\|Ibrahim et al. 2025]]. *Dietary Exposure and Health Risk Assessment of Selected Toxic and Essential Metals in Various Flavored Dairy Products*, Biological Trace Element Research | 2025 | Peer-reviewed | Pb, tAs, Cd, tHg, Al, Sb, Ni, and Cr in 180 flavored dairy products (yogurt, UHT milk, ice cream) from Egypt by ICP-MS; yogurt-specific metal concentrations with risk assessment |
| 3 | [[sources/sarkis2025-heavy-metals-yogurt-lebanon\|Sarkis et al. 2025]]. *Heavy Metal Contamination in Yogurt from Lebanon: Evaluating Lead (Pb) and Cadmium (Cd) Concentrations Across Multiple Regions*, Toxics | 2025 | Peer-reviewed | Pb and Cd in 165 artisanal Lebanese yogurts across 11 regions with regional exceedance rates against EU dairy limits |
| 4 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics 12(5): 325 | 2024 | Peer-reviewed | CN Cr-VI, Cr occurrence in Seven commercially purchased food samples from a local supermarket in Nanjing, China — milk powder, rice flour, whole... (n=7) |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
| 6 | [[sources/mirmahdi2021-dairy-decontamination-probiotics-review\|Mirmahdi et al. 2021]]. *Biodecontamination of milk and dairy products by probiotics: Boon for bane*, Italian Journal of Food Science | 2021 | Review | EG/RS/IQ Pb, Cd, tAs, Cu, Zn, Ni, Fe, tHg occurrence in Narrative review of published literature on heavy metal and mycotoxin contamination in milk and dairy products and on... |
| 7 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 8 | [[sources/abdel-rahman2019-egypt-nonalcoholic-beverages-metals\|Abdel-Rahman et al. 2019]]. *Heavy metals content in some non-alcoholic beverages (carbonated drinks, flavored yogurt drinks, and juice drinks) of the Egyptian markets*, Toxicology Reports | 2019 | Peer-reviewed | EG Cd, Pb, Cr, Ni, Fe, Mn, Cu occurrence in Twelve flavored yogurt drinks, eighteen juice drinks, and twenty-four carbonated drinks collected from Egyptian local markets between January... (n=54) |
| 9 | [[sources/pankiewicz2012-thg-dairy-products-poland\|Pankiewicz 2012]]. *Monitoring of total mercury level in selected dairy products from the south-east regions of Poland*, Ecological Chemistry and Engineering A | 2012 | Peer-reviewed | PL tHg occurrence in 48 dairy products (milk, kefir, natural and flavoured yogurt, cream, cream cheese, cottage cheese, butter, milk powder, buttermilk,... (n=48) |
| 10 | [[sources/starska2011-noxious-elements-milk-products-poland\|Starska et al. 2011]]. *Noxious Elements in Milk and Milk Products in Poland*, Polish Journal of Environmental Studies | 2011 | Peer-reviewed | Polish national monitoring of Pb, Cd, tHg, and tAs in yogurt and other dairy products across all 16 voivodships |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 1 source removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
