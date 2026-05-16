---
type: ingredient
commodity: wine-vinegar
title: "Wine Vinegar"
label: "Wine Vinegar"
aliases: [white-wine-vinegar, red-wine-vinegar, sherry-vinegar]
category: vinegar
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 670]
    p95_ppb: 1280
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [12, 35]
    p95_ppb: 245
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [39, 136]
    p95_ppb: 242
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [47, 102]
    p95_ppb: 206
    confidence: low
    n_studies: 1
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
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [grape-source, fermentation-substrate, barrel-aging, production-equipment, regional-vinification]
lower_risk_variants: ["[[ingredients/apple-cider-vinegar]]"]
higher_risk_variants: ["[[ingredients/balsamic-vinegar]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Wine Vinegar

Wine vinegar is produced by acetic acid fermentation of wine, available as white wine vinegar, red wine vinegar, and the geographically protected Sherry vinegar (vinagre de Jerez) from the Andalusian Sherry-producing region. The metal profile is dominated by lead, with mean concentrations across three independent surveys ranging from approximately 50 ppb in California-market commercial wine vinegar to approximately 670 ppb in Spanish Canary Islands market vinegar and 550 ppb in Andalusian Sherry-region wine vinegar. The Pb contamination pathway is partly inherited from the source grapes (which can carry Pb from soil uptake and historical pesticide legacies in vineyards) and partly added during vinification, barrel aging, and production-equipment contact. Wine vinegar sits between apple cider vinegar (lower-Pb, mean approximately 440 ppb in the Acosta dataset) and balsamic vinegar (higher-Pb, up to 307 ppb mean for traditionally aged variants per [[sources/ndungu2004-lead-vinegar-icpms-gfaas|Ndung'u et al. 2004]]) in the vinegar-category metal spectrum.

## Why this commodity accumulates heavy metals

Wine vinegar accumulates heavy metals through three pathways. The first is the source-grape pathway: wine grapes take up Pb, Cd, and other metals from vineyard soils through root uptake, with historical lead-arsenate pesticide use in older vineyards contributing residual Pb to the soil. The metals partition into the must during pressing and into the wine during fermentation, then carry through into vinegar at the acetic acid fermentation step. The [[ingredients/grapes]] page covers the source-grape baseline.

The second pathway is barrel-aging and production-equipment contact. Wood barrels with metal fittings, ceramic vessels with metal glazing, and the metal stills and pipes used in commercial vinegar production all contribute Pb to the finished product, with longer aging proportionally increasing the accumulated load. The Ndung'u 2004 dataset demonstrated this dramatically for balsamic vinegar (traditionally barrel-aged for 25 years reaching 307 µg/L Pb), and the same mechanism applies at smaller scale to wine vinegar.

The third pathway is regional vinification practice. The Acosta 1993 dataset showed that wine vinegar carried materially higher Pb (mean 670 ppb) than apple vinegar (mean 440 ppb), alcohol vinegar (mean 520 ppb), or malt vinegar (mean 600 ppb) from the same supermarket survey ([[sources/acosta1993-cd-pb-ni-vinegar-types|Acosta et al. 1993]]). The higher wine vinegar Pb is attributable to both grape-source factors and production differences from the other vinegar types. Sherry vinegar in particular, with its traditional Solera aging system in barrels, carries the additional aging-related Pb that newer-vinification wine vinegars do not accumulate.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=3 | 50–670 | 1,280 | medium | [[sources/acosta1993-cd-pb-ni-vinegar-types\|2]], [[sources/ndungu2004-lead-vinegar-icpms-gfaas\|1]], [[sources/troncoso1988-metallic-contaminants-andalusian-vinegars\|3]] |
| Cd  | n=1 | 12–35 | 245 | low | [[sources/acosta1993-cd-pb-ni-vinegar-types\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | n=1 | 39–136 | 242 | low | [[sources/troncoso1988-metallic-contaminants-andalusian-vinegars\|3]] |
| tHg | data gap | — | — | — | — |
| Ni  | n=1 | 47–102 | 206 | low | [[sources/acosta1993-cd-pb-ni-vinegar-types\|2]] |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Spanish Canary Islands survey of 52 commercial vinegars from Tenerife and Gran Canaria supermarkets (26 wine vinegar, 10 apple, 10 alcohol, 6 malt) provides the most comprehensive wine-vinegar dataset in the current corpus ([[sources/acosta1993-cd-pb-ni-vinegar-types|Acosta et al. 1993]]). Wine vinegar reported Pb mean 670 ppb with a maximum of 1,280 ppb, Cd mean 35 ppb with a maximum of 245 ppb (27 percent below LOD), and overall vinegar Ni mean 102 ppb across all types. Of the 52 samples surveyed, only three (6 percent) exceeded the Spanish legal limit of 1 ppm for total Pb plus Hg plus As. Wine vinegar Pb was significantly higher than apple vinegar Pb (p < 0.05).

The Spanish Andalusian survey of 16 white wine vinegar samples from the Sherry-region market (Western Andalusia, mainly Jerez and Huelva) reports Pb mean 550 ppb with a range of 200 to 1,210 ppb across 13 bottled and 3 bulk samples ([[sources/troncoso1988-metallic-contaminants-andalusian-vinegars|Troncoso and Guzman 1988]]). Total arsenic ran at mean 136 ppb with a range of 39 to 242 ppb, with no sample exceeding the OIV wine limit of 300 ppb. Two of the 16 samples were aged Sherry vinegars; the Pb in these specifically is not separately tabulated but follows the regional pattern. The methodology (direct-injection AAS without acid digestion for Pb) is dated and may underestimate Pb relative to modern acid-digestion approaches per the cautions documented by [[sources/ndungu2004-lead-vinegar-icpms-gfaas|Ndung'u et al. 2004]].

The California market survey of 59 commercial vinegars (mostly balsamic, plus 4 wine, 1 apple cider, 1 rice, 1 garlic) reports wine vinegar Pb at mean 50 ppb across 4 samples, with a range of 36 to 62 ppb ([[sources/ndungu2004-lead-vinegar-icpms-gfaas|Ndung'u et al. 2004]]). This is materially lower than the Spanish market values, reflecting both the different sourcing (California-market wine vinegar likely sourced from US, Italian, and French producers rather than Spanish Sherry-region) and the modern analytical methodology (ICP-MS with nitric acid digestion and UV photolysis, which the same paper documents as the validated method for vinegar matrices).

## Processing effects

Processing-state effects on wine vinegar metal load are dominated by aging. The Ndung'u 2004 dataset documented the aging-related Pb accumulation pattern for balsamic vinegar (younger balsamic mean 44 ppb, mid-age 85 ppb, traditional 25-year-aged 173 to 307 ppb), and the same mechanism applies to barrel-aged wine vinegars including Sherry vinegar. Modern industrial vinegar production using stainless steel or food-grade plastic equipment produces lower-Pb finished product than traditional wood-barrel aging with metal fittings. The acetic acid fermentation step itself does not concentrate metals from the source wine, but the longer total residence time in production equipment for traditional aged products provides more contact time for metal migration into the acidic liquid. Filtration and clarification steps after fermentation do not remove dissolved metals; the metal load is determined at the source-grape, vinification, and aging stages.

## Ingredient-derivative risk

Wine vinegar produces a narrow set of derivatives in the food-ingredient context. White wine vinegar is the lightest-flavored form used in salad dressings, marinades, and sauces. Red wine vinegar is the medium-flavor form used in similar applications plus reductions. Sherry vinegar (vinagre de Jerez DO) is the geographically protected aged form with a deeper, more concentrated profile and the highest barrel-aging-related Pb load. Champagne vinegar, Moscatel vinegar, and other regional aged wine vinegars follow the Sherry vinegar pattern at smaller scale. Wine vinegar reductions and glazes concentrate the metal load proportionally with the volume reduction. Vinaigrette and dressing formulations containing wine vinegar carry the metal load proportionally to the vinegar percentage.

## Mitigation options

Sourcing levers operate at the brand and producer level. Sourcing wine vinegar from producers using stainless steel or food-grade plastic production equipment, with shorter aging cycles, produces lower-Pb finished product. The California market dataset establishes that mainstream commercial wine vinegar can be produced at mean Pb levels of approximately 50 ppb, well below the Codex 1 mg/kg ceiling and substantially below the Spanish market average. Brand-specific sourcing decisions matter as much as type-level decisions; the Acosta dataset documented brand-level variability exceeding type-level variability for several metals.

Agronomic levers operate on the wine grape producer. Vineyard soil testing to identify and avoid plots with historical lead-arsenate pesticide legacy, soil amendment to manage Cd bioavailability, and selection of low-uptake grape cultivars are the documented practices reviewed in the broader plant-food agronomic literature. These are upstream of brand-level vinegar sourcing and require supplier engagement.

Processing levers are the load-bearing lever for finished wine vinegar contamination. Selecting stainless steel or glass-lined production equipment over copper, brass, or lead-soldered equipment eliminates the production-contact Pb pathway. Reducing barrel-aging time, switching to non-metal-fitted barrels, or using oak chips with stainless tanks (rather than aged wood barrels) reduces aging-related Pb accumulation. The trade-off is a less-complex flavor profile in the finished product.

Formulation levers operate on the brand for products using wine vinegar as an ingredient. Reducing the wine vinegar percentage in a dressing or sauce formulation proportionally reduces the contribution to total metal load. Substituting apple cider vinegar (lower Pb baseline) for a portion of wine vinegar is the standard formulation response where the flavor profile permits.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming wine vinegar against a sourcing specification catches origin- and production-related variability before it enters production. The Ndung'u 2004 methodology (nitric acid digestion with UV photolysis) is the validated approach for vinegar matrices; the older AAS direct-injection methods may underestimate Pb. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for wine vinegar in the current evidence base. Glass bottles dominate the high-quality market; food-grade plastic is acceptable for commodity products. The acidity of vinegar accelerates metal migration from any metal-containing packaging, so non-metal packaging is the de facto standard.

## Regulatory limits that apply

The Codex Alimentarius draft standard for vinegar establishes Pb at 1 mg/kg (1,000 ppb), Cu at 10 mg/kg, Zn at 10 mg/kg, and Fe at 30 mg/kg, the reference used in both Spanish surveys. The Spanish national regulation establishes a 1 ppm total limit for Pb plus Hg plus As in vinegar, with the Acosta and Troncoso surveys both reporting exceedance in approximately 6 to 10 percent of samples. The European Union Regulation (EU) 2023/915 does not specifically address vinegar at the commodity level but applies general Pb maximum levels in fermented beverages where applicable ([[regulations/eu2023-contaminants-maximum-levels]]). The OIV (International Organisation of Vine and Wine) sets total As in wine at 300 ppb, the reference for the Andalusian arsenic finding. The United States Department of Agriculture historical limit for Pb in cider vinegar was 3.5 ppm, materially higher than current Codex; modern US practice tracks the international consensus around 1 mg/kg ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ndungu2004-lead-vinegar-icpms-gfaas\|Ndung'u et al. 2004]]. *Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures*, Talanta | 2004 | Peer-reviewed | Primary Pb occurrence data for California-market wine vinegar (n=4); mean 50 ppb, range 36–62 ppb; documents methodology for vinegar matrix analysis and demonstrates aging-related Pb accumulation pattern via balsamic comparison |
| 2 | [[sources/acosta1993-cd-pb-ni-vinegar-types\|Acosta et al. 1993]]. *Levels of Cd, Pb, and Ni in Different Types of Vinegars*, Bulletin of Environmental Contamination and Toxicology | 1993 | Peer-reviewed | Primary Pb, Cd, Ni occurrence data for Spanish Canary Islands wine vinegar (n=26); Pb mean 670 ppb (max 1,280), Cd mean 35 ppb (max 245), Ni mean 102 ppb across all vinegar types; wine vinegar Pb significantly higher than apple vinegar |
| 3 | [[sources/troncoso1988-metallic-contaminants-andalusian-vinegars\|Troncoso et al. 1988]]. *Metallic contaminants in Andalusian vinegars*, Die Nahrung | 1988 | Peer-reviewed | Primary Pb and tAs occurrence data for Andalusian Sherry-region wine vinegar (n=16); Pb mean 550 ppb, range 200–1,210 ppb; tAs mean 136 ppb, range 39–242 ppb; methodology dated (direct-injection AAS) |
<!-- END: hmi-source-legend -->
