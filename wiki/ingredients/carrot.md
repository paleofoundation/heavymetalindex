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
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 41]
    p95_ppb: 57
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
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
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
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
wiki_doi: null
updated: 2026-05-13
sources: 9
---

# Carrot

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Carrot (Daucus carota) is a root vegetable that grows entirely underground, positioning the edible taproot in direct contact with the soil solution throughout its development. This direct soil-root interface is the primary driver of heavy metal accumulation in carrots, distinguishing root vegetables as a category from above-ground produce. Lead and cadmium dissolved in the soil solution are absorbed across the root epidermis and periderm (the outer skin layer) and may be transported inward into the root cortex and storage tissue, though both metals tend to accumulate at higher concentrations in the outer layers (periderm and immediately sub-periderm cortex) than in the inner core. Soil pH is a key determinant: in acidic soils (below pH 6.0), Pb and Cd become more soluble and bioavailable, increasing root uptake substantially. Soil organic matter content, clay fraction, and cation exchange capacity modulate metal availability alongside pH. El-Batal et al. 2023 measured Ni, Cd, Pb, and Co in carrots irrigated with municipal wastewater in Egypt, finding detectable accumulation from all four metals and demonstrating that selenium nanoparticle treatment reduced accumulation by 30 to 60 percent [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles|El-Batal et al. 2023]]. Tonska et al. 2020 found no significant difference in Pb and Cd between organic and conventional carrots in Poland [[sources/tonska2020-carrots-lead-cadmium-organic|Tonska et al. 2020]], and Rusin et al. 2021 found all tested Polish carrot samples below EU maximum residue levels for both Cd and Pb across 370 samples [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 9.5–27.5 | medium | [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|3]] |
| Cd | n=4 | 0–41 | medium | [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|3]] |
| iAs | n=1 | 3.3–239.4 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–0.9 | high | [[sources/kurniawati2021-jakarta-staple-foods-naa\|1]] |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–1340 | medium | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–67.7 | medium | — |
| U | data gap | — | — | — |

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
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 3 | [[sources/el-batal2023-carrot-wastewater-selenium-nanoparticles\|El-Batal et al. 2023]]. *Effect of selenium nanoparticles on heavy metal accumulation in carrot (Daucus carota) irrigated with wastewater*, Biologia | 2023 | Peer-reviewed | Measured Ni, Cd, Pb, and Co in carrot roots irrigated with municipal wastewater in Egypt; Se nanoparticles reduced accumulation by 30–60%; wastewater-irrigation contamination context |
| 4 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | tAs, Cd, Pb, and Zn in Romanian market-and-amateur-farm carrots with vinegar-washing mitigation effect |
| 5 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr, Ni, Cu, Zn, Fe, Mn, Co occurrence in Narrative review synthesizing previously published occurrence values and toxicology mechanisms for heavy metals in plant-based foods, with worked... |
| 6 | [[sources/kurniawati2021-jakarta-staple-foods-naa\|Kurniawati et al. 2021]]. *Determination of several heavy metals in staple foods from traditional markets in Jakarta using neutron activation analysis*, AIP Conference Proceedings (4th International Seminar on Chemistry) | 2021 | Peer-reviewed | Cr and tHg in carrot from Jakarta traditional markets by neutron activation analysis |
| 7 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | Measured Cd and Pb in 370 fresh, frozen, dried, and processed fruit and vegetable samples from Poland; carrot data across processing states with all samples below EU MRL for fresh |
| 8 | [[sources/tonska2020-carrots-lead-cadmium-organic\|Tonska et al. 2020]]. *Lead and cadmium content in organic and conventional carrots and their dietary risk assessment*, Proceedings of the Nutrition Society | 2020 | Peer-reviewed | Compared Pb and Cd in 18 conventional vs 18 organic carrots from Poland (n=36); no significant organic vs conventional difference found; all below EU MLs |
| 9 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [0863cf8](https://github.com/paleofoundation/heavymetalindex/commit/0863cf8) | 2026-05-20 | autonomy: daemon tick 2026-05-20T04-14-40Z — gap-healing + extraction + pooling + briefings |
<!-- END: hmi-page-history -->
