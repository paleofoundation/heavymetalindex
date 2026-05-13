---
title: "Root vegetables"
type: ingredient
commodity: root-vegetables
label: "Root vegetables"
aliases: [carrot, parsnip, potato, sweet potato, yam, beet]
category: vegetable
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
used_in_products: [vegetable-juices-root-vegetable-containing]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 1
---

# Root vegetables

FSA/Fera measured this ingredient or a closely matching non-infant-specific food composite in the FS102048 survey. Exact concentrations remain in progress until Table 6 is parsed into structured ingredient rows with quantitation flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Root vegetables are a broad category of edible plant storage organs that develop entirely within the soil matrix, including carrots (Daucus carota), parsnips (Pastinaca sativa), turnips (Brassica rapa), beets (Beta vulgaris), celeriac (Apium graveolens var. rapaceum), and related crops. Because the edible organ grows in direct contact with soil solution, root vegetables are inherently more susceptible to heavy metal uptake and surface contamination than aerial plant parts such as fruits or leaves. Cadmium (Cd) is the analyte of greatest concern in this category: it is present in most agricultural soils at varying concentrations, has high bioavailability relative to other metals in soil solution, and is actively taken up through the same zinc transporter channels that plants use to acquire the essential nutrient zinc. Soil Cd loading is driven primarily by the historical and ongoing application of phosphate fertilizers derived from phosphate rock containing Cd as a co-contaminant, atmospheric deposition near industrial sources, and naturally elevated geogenic Cd in some soil types. Lead (Pb) accumulation in root vegetables occurs primarily through surface adsorption: soil particles and dissolved Pb adhere to the root surface during growth and post-harvest handling, and internal uptake of Pb is limited by the root epidermis under most soil conditions. However, when Pb-contaminated soil is mechanically worked into the root tissue through damage or when surface contamination is not adequately removed, surface Pb can represent a meaningful contributor to the analytical total. Different root vegetable species show different Cd accumulation efficiencies: leafy root crops and those with more permeable root surfaces tend to accumulate more Cd per unit dry weight than compact, waxy-skinned varieties. Potatoes are separately captured on [[ingredients/potato-chips]] for the snack-product context; sweet potato is separately captured on [[ingredients/sweet-potato]] for the infant-food context.

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

This node is linked from [[products/vegetable-juices-root-vegetable-containing]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Soil Cd content is the primary driver of between-region variation in root vegetable Cd concentrations. European agricultural soils in Belgium, the Netherlands, and parts of France have historically elevated Cd from long-term phosphate fertilizer application and industrial activity, producing higher Cd in root vegetables grown in these regions than in North American or Australian counterparts with lower soil Cd loads. JECFA's dietary exposure assessments document national-level variation in root vegetable Cd contributions to total dietary Cd intake, reflecting these soil-level differences [[sources/jecfa-91st-cadmium-2022]]. Within a production region, soil pH is the most important modulating variable: acid soils increase Cd bioavailability while neutral-to-alkaline soils reduce it. Varietal differences in Cd accumulation exist within the root vegetable category: carrots accumulate Cd at generally lower rates than leafy variants of the same root crops, while certain beet and celeriac varieties show higher uptake efficiency. For Pb, proximity to former industrial sites, historical use of Pb arsenate pesticides, and contamination from roadway traffic are the dominant geographic risk factors rather than agricultural inputs. The current source corpus contains one A-tier Cd dietary exposure study (JECFA 2022), one canonical toxicology chapter (Nordberg et al. 2015), one EFSA opinion with EU occurrence data (EFSA 2009), and Codex general limits; quantitative median and percentile values for specific root vegetable sub-species will be populated as occurrence surveys are ingested [[sources/efsa-cadmium-contam-2009]] [[sources/nordberg2015-cadmium-chapter]] [[sources/codex-cxs-193-1995]].

## Processing effects

Peeling root vegetables before consumption or industrial processing removes the skin and outer flesh layer, which carries the highest Pb and Cd concentration due to surface adsorption and the steeper metal concentration gradient near the root surface. The magnitude of the peeling effect on Cd is moderate; internal root tissue also contains Cd absorbed from soil water, so peeling alone does not eliminate Cd exposure. For Pb, peeling and washing are more effective because surface-bound Pb is concentrated in the outer layers. Pureeing root vegetables for baby food production introduces the entire peeled root into the finished product without further differentiation by tissue layer; this results in a homogenized metal concentration rather than surface enrichment. Blanching and boiling in water can leach some water-soluble metal fractions, but the leaching efficiency varies with metal species, cooking time, and water-to-vegetable ratio. Roasting and other dry-heat methods concentrate metals as moisture is lost but do not remove them. Juicing root vegetables concentrates the aqueous metal fraction in the juice while leaving some metals in the fibrous marc; the distribution depends on the metal's association with soluble versus insoluble fractions.

## Ingredient-derivative risk

The highest-risk derivative context for root vegetables in public health terms is pureed or mashed root vegetable in infant and young child feeding products. Baby food purees made from carrots, parsnips, and mixed root vegetables have been identified in multiple regulatory and advocacy surveys as contributors to infant Pb exposure. The pureed format concentrates the root vegetable metal load into a high-moisture product consumed in large servings relative to infant body weight. Carrot juice and root vegetable juice blends are a second high-priority derivative: juicing concentrates the aqueous fraction and eliminates the dilution provided by fiber; Cd and Pb can be disproportionately represented in fresh juice relative to the whole vegetable depending on the metal's speciation. Root vegetable flour and powders (dehydrated carrot, parsnip, or beet powder used in snack coatings, supplements, and processed foods) concentrate metals by a factor of five to ten relative to the fresh vegetable on a wet-weight basis; products using these concentrates at meaningful inclusion levels warrant specific assessment.

## Mitigation options

### Sourcing levers

Sourcing root vegetables from fields with documented low soil Cd and Pb is the highest-impact single lever. Field-level soil testing with Cd and Pb analysis before seasonal contracting allows processors to exclude high-risk parcels. In jurisdictions where field-level soil Cd data are available from regulatory monitoring programs (common in the Netherlands, Belgium, and Germany), suppliers should be required to demonstrate that contracted fields fall below threshold values. Requiring lot-level COAs from growers and testing incoming loads by ICP-MS are standard practices for processors supplying infant food manufacturers.

### Agronomic levers

Soil pH management is the most impactful agronomic lever for Cd: liming acidic soils to maintain pH above 6.5 significantly reduces Cd bioavailability and uptake by root crops. Addition of organic matter to soils reduces Cd bioavailability through chelation and pH buffering. Phytoremediation strategies using high-accumulator crops before root vegetable production have been studied but are slow-acting and not commercially practical as a routine intervention. Irrigation water quality matters when roots are grown in regions where irrigation water contains elevated Cd or Pb; ensuring irrigation water meets agricultural water quality standards is a baseline requirement. _No quantified reduction magnitude from liming specific to root vegetable Cd in the current corpus; see [[metals/cadmium]] for broader agronomic evidence._

### Processing levers

Peeling removes the highest-concentration outer tissue for both Cd and Pb; for baby food production, thorough mechanical peeling is standard practice. Washing in clean water reduces surface-bound Pb. Blanching before pureeing leaches some water-soluble metals; cooking water is discarded after blanching and not incorporated into the finished puree.

### Formulation levers

In multi-vegetable infant food formulations, reducing the proportion of high-Cd root vegetables and increasing lower-risk ingredients (for example, winter squash or legumes) can reduce the weighted average metal load of the finished product. Substituting carrots partially with sweet potato or other root vegetables with different Cd accumulation profiles may provide modest benefits where supply-chain data supports this decision.

### Testing and QC levers

For infant food manufacturers, lot-level ICP-MS testing for Pb and Cd on incoming raw root vegetables is the standard QC lever given FDA's CTZ action levels and the high-priority regulatory focus on this category. Specification limits for incoming ingredients should be set tighter than finished-product action levels to account for concentration during processing.

### Packaging and storage levers

_No quantified data on packaging or storage effects on root vegetable metal content in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

In the United States, FDA's Closer to Zero program has established action levels for Pb in processed foods intended for babies and young children under the age of two. For root vegetable purees in baby food, the applicable Pb action level is 0.020 mg/kg (20 ppb) as served, as finalized in the FDA Closer to Zero guidance (see [[regulations/fda-ctz-Pb-rootveg-20ppb]] and [[regulations/fda-closer-to-zero]]). The EU framework under [[regulations/eu2023-contaminants-maximum-levels]] sets Pb at 0.10 mg/kg (100 ppb) and Cd at 0.10 mg/kg (100 ppb) for root vegetables as placed on market (fresh or processed). Codex Alimentarius maximum levels under [[regulations/codex-cxs-193-1995]] establish additional international reference points for Cd and Pb in vegetable matrices. The [[regulations/eu-2023-915-cadmium]] regulation is the current operative EU Cd standard. No specific iAs limit applies to root vegetables in the EU or US at present, consistent with the literature finding that root vegetables are not significant contributors to dietary iAs exposure.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/sadee2023-arsenic-speciation-vegetables\|Sadee et al. 2023]]. *Toxicity, arsenic speciation and characteristics of hyphenated techniques used for arsenic determination in vegetables. A review*, RSC Advances | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA global Cd dietary exposure assessment; root vegetables (including potatoes and carrots) included in national food-basket contributions |
| 3 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter covering vegetable and root crop Cd accumulation pathways |
| 4 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; root vegetables among the food groups contributing to European dietary Cd exposure, with occurrence data from the EU monitoring dataset |
| 5 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | OEHHA Cd hazard identification supporting Prop 65 reproductive-toxicity listing; includes dietary exposure context mentioning root vegetables and potatoes |
| 6 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex Cd and Pb international maximum levels applicable to root vegetable matrices |
<!-- END: hmi-source-legend -->

