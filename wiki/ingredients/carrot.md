---
title: "Carrot"
type: ingredient
commodity: carrot
label: "Carrot"
aliases: [carrots]
category: root-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [9.5, 27.5]
    p95_ppb: 28.4
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 41]
    p95_ppb: 57
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [3.3, 239.4]
    p95_ppb: 384.2
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0.9]
    p95_ppb: 1.3
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
    status: populated
    typical_ppb: [0, 1340]
    p95_ppb: 1468
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Sn:
    status: populated
    typical_ppb: [0, 67.7]
    p95_ppb: 73.7
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
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
sources: 5
---

# Carrot

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Carrot (Daucus carota) is a root vegetable that grows entirely underground, positioning the edible taproot in direct contact with the soil solution throughout its development. This direct soil-root interface is the primary driver of heavy metal accumulation in carrots, distinguishing root vegetables as a category from above-ground produce. Lead and cadmium dissolved in the soil solution are absorbed across the root epidermis and periderm (the outer skin layer) and may be transported inward into the root cortex and storage tissue, though both metals tend to accumulate at higher concentrations in the outer layers (periderm and immediately sub-periderm cortex) than in the inner core. Soil pH is a key determinant: in acidic soils (below pH 6.0), Pb and Cd become more soluble and bioavailable, increasing root uptake substantially. Soil organic matter content, clay fraction, and cation exchange capacity modulate metal availability alongside pH. El-Batal et al. 2023 measured Ni, Cd, Pb, and Co in carrots irrigated with municipal wastewater in Egypt, finding detectable accumulation from all four metals and demonstrating that selenium nanoparticle treatment reduced accumulation by 30 to 60 percent [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles|El-Batal et al. 2023]]. Tonska et al. 2020 found no significant difference in Pb and Cd between organic and conventional carrots in Poland [[sources/tonska2020-carrots-lead-cadmium-organic|Tonska et al. 2020]], and Rusin et al. 2021 found all tested Polish carrot samples below EU maximum residue levels for both Cd and Pb across 370 samples [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]].

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

Rusin et al. 2021 measured Cd and Pb in 370 fresh, frozen, dried, and processed fruit and vegetable samples from Poland; carrot samples in this dataset showed all values below EU maximum residue levels [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]]. Tonska et al. 2020 compared Pb and Cd in 18 conventional and 18 organic carrots from Poland, finding no significant difference by production system and all samples below EU MLs for both metals [[sources/tonska2020-carrots-lead-cadmium-organic|Tonska et al. 2020]]. El-Batal et al. 2023 reported carrot root Cd and Pb in Egyptian wastewater-irrigated conditions at elevated concentrations relative to the Polish surveys, illustrating that irrigation source is a major determinant of the metal range [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles|El-Batal et al. 2023]]. Geographic variation therefore spans a wide range from near-detection-limit in clean European agricultural contexts to multi-fold EU ML exceedances in irrigated developing-country settings. Variety-related differences in Cd and Pb accumulation are less studied for carrots than for cereals; the corpus does not currently support varietal breakdown claims.

## Processing effects

Peeling carrots before consumption or processing removes the outer periderm layer, which concentrates Pb and Cd at higher levels than the inner core. Studies on root vegetables generally show that peeling reduces Pb by approximately 30 to 60 percent relative to unpeeled whole roots, because the periderm is the primary site of Pb retention. Cd distribution within the carrot root is less consistently concentrated in the outer layers than Pb; the reduction from peeling for Cd is smaller and more variable. Boiling and processing for puree (baby food production) involves peeling, cooking, and homogenization; the cooking water carries some leached water-soluble metals. Baby food manufacturing standards typically discard cooking water, capturing some additional reduction. Drying and dehydrating carrot (as in dehydrated soup mixes) concentrates metals proportionally to moisture loss.

## Ingredient-derivative risk

Carrot is used widely in baby food purees, vegetable soups, mixed vegetable products, juicing, dehydrated snacks, and ingredient mixes. In baby food applications, carrot is often a primary single-ingredient puree or a dominant component of vegetable blends, making it a significant contributor to dietary heavy metal exposure in infants on solid foods. FDA Closer to Zero action levels for Pb in root vegetable purees for infant food (20 ppb) [[regulations/fda-ctz-Pb-rootveg-20ppb]] directly apply to this derivative use. Carrot juice concentrates metals relative to fresh carrot in proportion to juice yield; cold-pressed carrot juice will carry a similar per-serving metal load to fresh carrot at typical serving sizes. Dehydrated carrot in soup mixes or spice blends concentrates metals in proportion to moisture reduction.

## Mitigation options

### Sourcing levers

Growing-region soil quality is the primary lever. Sourcing carrots from regions with documented low soil Pb and Cd (pH-managed arable land, distance from industrial contamination, no wastewater irrigation) reduces accumulation at source. Supplier verification of growing-region soil metal surveys, or incoming lot ICP-MS testing with acceptance criteria, operationalizes this lever. The Tonska et al. 2020 finding that organic vs conventional distinction does not drive meaningful Pb or Cd differences in Polish carrots [[sources/tonska2020-carrots-lead-cadmium-organic|Tonska et al. 2020]] indicates that organic certification alone is not a reliable proxy for low metal content; soil quality documentation is the relevant specification.

### Agronomic levers

Soil pH management (liming to maintain pH above 6.5) is the most effective agronomic lever for reducing Cd and Pb bioavailability in carrot-growing soils. Phosphate fertilizer selection matters for Cd: impure phosphate rock-derived fertilizers can contribute Cd to soil over years of application; low-Cd phosphate sources reduce this input. Avoiding wastewater irrigation eliminates the elevated-Pb-and-Cd pathway documented in the El-Batal 2023 Egyptian data [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles|El-Batal et al. 2023]].

### Processing levers

Peeling is the highest-impact processing lever for Pb reduction and provides partial benefit for Cd. Commercial baby food production routinely peels carrots before pureeing, already capturing this effect. Rinsing peeled carrots with clean water before processing removes residual surface contamination. Discarding blanching or cooking water rather than incorporating it into the puree removes water-soluble metals leached during cooking.

### Formulation levers

When carrot is a component in a mixed vegetable puree, blending with lower-metal vegetables (such as peas, corn, or summer squash) dilutes the carrot Pb and Cd contribution proportionally to the carrot fraction. For formulations targeting infant use, carrot inclusion rates can be managed to keep aggregate product metal load within applicable action levels.

_No quantified data on dilution effects for carrot specifically in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level ICP-MS for Pb and Cd on incoming carrots is standard practice for infant food manufacturers supplying the EU or US markets under FDA CTZ [[regulations/fda-closer-to-zero]] and EU [[regulations/eu2023-contaminants-maximum-levels]] frameworks. A composite sampling plan across multiple farm or field lots provides better statistical coverage than single-lot testing. For high-volume carrot users in baby food, a risk-based sampling frequency tied to growing region and supplier history is the appropriate QC design.

### Packaging and storage levers

Packaging and storage conditions are not a material driver of heavy metal load in fresh, frozen, or pureed carrot. No tin migration pathway applies to non-canned carrot products. Aseptic or retort packaging for shelf-stable carrot purees should use materials that do not contribute Pb or Cd from packaging-component migration.

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Pb in root vegetables of 0.10 mg/kg (100 ppb) wet weight and for Cd in root vegetables of 0.10 mg/kg (100 ppb) wet weight (higher than the general vegetable Cd limit of 0.050 mg/kg, reflecting the elevated accumulation pattern in root vegetables). FDA Closer to Zero [[regulations/fda-ctz-Pb-rootveg-20ppb]] sets a 20 ppb (0.020 mg/kg) action level for Pb in root vegetable purees intended for consumption by young children, substantially below the EU limit. The Codex Alimentarius [[regulations/codex-cadmium-mls]] sets a Cd maximum of 0.10 mg/kg for root and tuber vegetables consistent with EU. Rusin et al. 2021 found Polish carrot samples below EU MLs, which at 100 ppb Cd is achievable from clean-soil European growing regions but would be exceeded by wastewater-irrigated growing conditions like those in the El-Batal 2023 study [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]].

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles\|El-Batal et al. 2023]]. *Effect of selenium nanoparticles on heavy metal accumulation in carrot (Daucus carota) irrigated with wastewater*, Biologia | 2023 | Peer-reviewed | Measured Ni, Cd, Pb, and Co in carrot roots irrigated with municipal wastewater in Egypt; Se nanoparticles reduced accumulation by 30–60%; wastewater-irrigation contamination context |
| 2 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galati County, Romania*, Horticulturae | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Cadmium and lead contents in fresh and processed fruit and vegetable products and the resulting dietary risk assessment*, Scientific Reports | 2021 | Peer-reviewed | Measured Cd and Pb in 370 fresh, frozen, dried, and processed fruit and vegetable samples from Poland; carrot data across processing states with all samples below EU MRL for fresh |
| 5 | [[sources/tonska2020-carrots-lead-cadmium-organic\|Tonska et al. 2020]]. *Lead and cadmium content in organic and conventional carrots and their dietary risk assessment*, Proceedings of the Nutrition Society | 2020 | Peer-reviewed | Compared Pb and Cd in 18 conventional vs 18 organic carrots from Poland (n=36); no significant organic vs conventional difference found; all below EU MLs |
<!-- END: hmi-source-legend -->

