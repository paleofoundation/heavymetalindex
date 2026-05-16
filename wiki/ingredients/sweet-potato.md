---
title: "Sweet potato"
type: ingredient
commodity: sweet-potato
label: "Sweet potato"
aliases: [sweet potatoes]
category: root-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 39]
    p95_ppb: 56.9
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1, 32]
    p95_ppb: 42
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 1
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Al:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Sn:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
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
used_in_products: [root-vegetable-purees]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 7
---

# Sweet potato

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Sweet potato (Ipomoea batatas) is a true root tuber that develops entirely within the soil matrix, growing in direct contact with soil solution throughout the entire growth period. This makes sweet potato, like other root vegetables, inherently susceptible to both direct soil uptake and surface adsorption of heavy metals. Cadmium (Cd) uptake proceeds through root absorption driven by the same transporter systems used to acquire essential micronutrients such as zinc, making soil Cd content and bioavailability the primary determinant of Cd in the sweet potato flesh. Lead (Pb) uptake follows a different pattern: Pb is largely immobilized in root tissue and at the root epidermis, with minimal internal translocation to the storage organ under most conditions; however, surface Pb contamination from soil particles adhering to the tuber surface can represent a meaningful fraction of analytical totals, particularly on samples that have not been thoroughly washed and peeled. Sweet potato differs from white potato (Solanum tuberosum) in botanical family and growth habit but shares the soil-contact accumulation pathway. It is among the most commonly fed root vegetables to infants and young children in the United States, which makes the Pb accumulation pathway particularly relevant in the infant food context: FDA's Closer to Zero program identified root vegetables including sweet potato as a priority category for Pb reduction in baby foods, establishing a 20 ppb Pb action level for root vegetable purees in foods intended for babies and young children [[sources/fda-ctz-Pb-babyfood-2025]]. Narrative reviews of US infant food quality have identified sweet potato-based purees among the food categories most frequently flagged for Pb detection [[sources/bair2022-infant-toddler-food-heavy-metals-policy]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | n=1 (in progress) | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | n=1 (in progress) | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | n=1 (in progress) | — | — | — | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from [[products/root-vegetable-purees]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Sweet potato production is distributed globally, with major growing regions in China, Ethiopia, Nigeria, the United States (primarily North Carolina, California, and Louisiana), and other parts of sub-Saharan Africa and Southeast Asia. Soil Cd loading and soil Pb contamination differ substantially across these regions. In North America, legacy soil Pb from agricultural use of lead arsenate pesticides in the pre-1970 era, as well as proximity to former industrial sites, can produce elevated Pb in soils in some production areas. Chinese production data from mining-adjacent regions show elevated Pb, Cd, and Cr in sweet potato tubers; Zhang et al. (2026) report trace metal contamination in sweet potatoes grown around a manganese mining area in Chongqing, China, providing context for elevated contamination under industrial-proximity conditions [[sources/zhang2026-trace-metals-five-crops-chongqing]]. The orange-fleshed varieties dominant in the US market have not been systematically compared to white- or purple-fleshed varieties for Cd uptake efficiency; varietal differences in root permeability and Cd transporter expression exist in other root crop species and may apply to sweet potato as well. Quantitative region-stratified occurrence data for sweet potato Pb and Cd from major US growing regions will be populated as dedicated surveys are ingested.

## Processing effects

The most significant processing step for sweet potato metal content is peeling, which removes the skin and outer flesh layer where surface-bound Pb is concentrated. Thorough mechanical peeling before pureeing is standard in commercial baby food production and reduces Pb content relative to skin-on product. Washing the raw tuber before peeling removes loosely adhered soil particles and surface Pb. Blanching before pureeing leaches some water-soluble metal fractions into the cooking water, which is discarded; the magnitude of this leaching effect depends on the solubility speciation of each metal. Pureeing homogenizes the remaining Pb and Cd uniformly throughout the product. Baking or roasting sweet potato without peeling would retain the skin and its higher surface Pb; this is not standard in commercial baby food production but is relevant for home-prepared infant food. Dehydration (spray-drying or drum-drying) to produce sweet potato powder concentrates all metals proportionally with the moisture reduction factor, typically fivefold to tenfold relative to the puree.

## Ingredient-derivative risk

The primary high-risk derivative context for sweet potato is pureed baby food, where sweet potato puree is a standalone or blend ingredient in products consumed by infants as young as 4 to 6 months of age. The combination of high consumption frequency, large serving size relative to infant body weight, and the Pb detection pattern documented in US infant food surveillance makes sweet potato puree a priority monitoring target under the FDA Closer to Zero program [[sources/fda-ctz-Pb-babyfood-2025]]. Sweet potato powder used in adult snack coatings, chips, and supplement blends concentrates metals tenfold relative to the fresh tuber; at meaningful inclusion levels in products marketed to children or frequent adult consumers, this concentrated form warrants specific assessment. Sweet potato chips (skin-on fried slices) retain surface Pb and also undergo frying-induced moisture concentration; they carry a higher per-gram metal load than boiled or pureed sweet potato.

## Mitigation options

### Sourcing levers

Sourcing sweet potato from fields with documented low soil Pb and Cd is the highest-impact lever, particularly given the FDA CTZ 20 ppb action level for root vegetable purees in baby food. Field-level soil testing before contracting, with particular attention to Pb in fields with historic agricultural or industrial use, is the standard practice for manufacturers supplying the infant food market. Requiring lot-level COAs with ICP-MS Pb and Cd data from ingredient suppliers is the standard verification step. Processor procurement specifications for infant-food-grade sweet potato should set incoming Pb and Cd limits consistent with achieving finished-product compliance with the CTZ action level after accounting for any concentration during processing.

### Agronomic levers

Soil pH management (liming to neutral to slightly alkaline pH) reduces Cd bioavailability in sweet potato fields, as documented for other root crops. Restricting irrigation to low-metal-content water sources prevents supplemental metal loading from irrigation in regions where groundwater or surface water carries elevated metals. Selecting fields without legacy pesticide contamination (Pb arsenate use history) reduces baseline soil Pb. _No quantified reduction magnitude from specific agronomic interventions in sweet potato fields is currently in the corpus; see [[ingredients/root-vegetables]] and [[metals/lead]] for broader agronomic evidence._

### Processing levers

Thorough mechanical peeling and washing of raw sweet potato before pureeing removes surface-bound Pb and reduces total Pb in the finished puree. Blanching before pureeing provides additional leaching of soluble metal fractions. Both steps are already standard in commercial baby food production; their systematic application is the primary processing lever available to manufacturers.

### Formulation levers

In multi-ingredient puree blends for infant food, reducing the proportion of sweet potato and increasing the proportion of lower-Pb ingredients (for example, winter squash) can reduce the weighted average Pb of the blend. Monitoring finished-product Pb by lot and adjusting blending ratios to achieve compliance with the CTZ 20 ppb action level is the standard formulation-based QC approach.

### Testing and QC levers

Lot-level ICP-MS testing for Pb and Cd at both the incoming ingredient level and the finished baby food level is the standard QC approach for this commodity given FDA's focus on root vegetable purees as a priority category. Incoming specification limits should be set to allow for any processing-step concentration or dilution effects relative to the finished-product action level.

### Packaging and storage levers

_No quantified data on packaging or storage effects on sweet potato metal content in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the United States, FDA has established an action level of 0.020 mg/kg (20 ppb) for Pb in processed food intended for babies and young children, specifically including root vegetable purees such as sweet potato-based baby food, under the Closer to Zero program (see [[regulations/fda-ctz-Pb-rootveg-20ppb]] and the primary source document [[sources/fda-ctz-Pb-babyfood-2025]]). The broader Closer to Zero framework (see [[regulations/fda-closer-to-zero]]) establishes this as part of ongoing regulatory action to reduce Pb exposure in infant and young child foods. Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the applicable Pb maximum level for root vegetables is 0.10 mg/kg (100 ppb) wet weight, and the Cd maximum level is 0.10 mg/kg (100 ppb) wet weight. The FDA CTZ action level of 20 ppb is substantially more stringent than the EU root vegetable Pb limit of 100 ppb, reflecting the FDA's specific focus on vulnerable infant populations rather than the general adult population.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/zhang2026-trace-metals-five-crops-chongqing\|Zhang et al. 2026]]. *Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China*, Scientific Reports | 2026 | Peer-reviewed | Measured tAs, Pb, Cd, Cr, and Ni in sweet potato tubers from a manganese mining area in Chongqing, China (n=15); mining-area contamination context for this crop |
| 2 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero Pb action levels for root-vegetable baby foods including sweet potato-based purees; regulatory Pb limits context |
| 3 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Heavy Metals Analysis in Selected Commercial Baby Foods for Infant and Toddler: Health Risk Assessment of Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | Sweet potato-based US baby food purees measured for Pb, Cd, Al, and tAs |
| 4 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | Narrative review identifying root-vegetable purees including sweet potato as frequently flagged U.S. infant food categories for Pb detection |
| 5 | [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | Root-vegetable baby-food category tAs, Cd, tHg, and Pb concentrations including sweet-potato samples |
| 6 | [[sources/gardener2019-pb-cd-us-infant-formula-baby-foods\|Gardener et al. 2019]]. *Lead and cadmium contamination in a large sample of United States infant formulas and baby foods*, Science of the Total Environment | 2019 | Peer-reviewed | Large-scale US baby food Pb and Cd detection rates with sweet-potato-containing jars and pouches included |
| 7 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | HBBF retail US baby food detection rates for tAs, iAs, Pb, Cd, and tHg with sweet-potato samples in the panel |
<!-- END: hmi-source-legend -->

