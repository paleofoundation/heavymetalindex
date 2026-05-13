---
title: "Water"
type: ingredient
commodity: water
label: "Water"
aliases: [bottled water, still water, carbonated water]
category: water
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 9]
    p95_ppb: 21.6
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0.3]
    p95_ppb: 0.5
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 6
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 176.3
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
    typical_ppb: [0, 0]
    p95_ppb: 3.1
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
used_in_products: [flavored-waters]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 1
---

# Water

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Drinking water does not accumulate heavy metals through the biological mechanisms that apply to plant or animal food matrices. Instead, metals in potable water arise from two distinct source pathways. The first is source-water geochemistry: groundwater in aquifers underlain by arsenic-bearing minerals (sedimentary basins, volcanic tuffs, sulfide ore deposits) can carry naturally elevated iAs concentrations, with some regions of South Asia, South America, and the western United States documented as having groundwater As exceeding 10 ppb ([[sources/epa-arsenic-drinking-water-mcl]]). Uranium in groundwater similarly reflects geological uranium mineralisation. The second pathway, and the dominant one for Pb specifically, is distribution-system infrastructure: lead service lines, lead solder used in older copper plumbing, and lead-bearing brass fittings can release Pb into tap water at points of use, particularly in building with pre-1986 plumbing when water is corrosive or sits stagnant. This is not a property of the water source but of the infrastructure through which treated water travels. The US Lead and Copper Rule targets this pathway through corrosion-control treatment requirements. Cadmium, mercury, and most organic metal species are not major concerns in treated municipal drinking water under normal operating conditions.

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

This node is linked from [[products/flavored-waters]].

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Drinking water arsenic concentrations vary by orders of magnitude depending on geological setting. In regions with naturally elevated groundwater As (parts of Bangladesh, West Bengal, Inner Mongolia, northern Chile, and southwestern United States including parts of Arizona and Nevada), well water can exceed 50 to several hundred ppb iAs ([[sources/efsa-arsenic-contam-2009]]). Treated municipal tap water in most high-income countries is maintained well below the 10 ppb regulatory limit by treatment processes including coagulation, filtration, and adsorption on iron-based media. Lead in tap water shows high within-building variance driven by plumbing age and corrosion-control status; homes with lead service lines can exceed 15 ppb (the US EPA action level) at first-draw samples, while the same source water delivered through modern plastic or copper piping may register below 1 ppb. Bottled water is typically derived from protected springs or purified municipal water and is subject to FDA quality standards comparable to EPA tap-water standards.

## Processing effects

Municipal water treatment is the operative processing step for drinking water. Conventional surface-water treatment (coagulation, flocculation, sedimentation, filtration, chlorination) effectively removes particulate metals and co-precipitates dissolved metals such as As with iron flocs. Advanced treatment technologies including reverse osmosis, activated alumina, and ion exchange reduce dissolved iAs below 2 to 5 ppb when applied. Coagulation-enhanced filtration using ferric salts is the primary technology for achieving the 10 ppb As MCL at scale. These treatments do not address Pb added downstream at the distribution system or building plumbing level; point-of-use filtration (NSF-certified pitcher or tap filters using activated alumina or reverse osmosis) is the most effective intervention for Pb at the household level.

## Ingredient-derivative risk

Drinking water is used as an ingredient or reconstitution medium in a wide range of processed foods: soups, sauces, beverages, infant formula, baby food purees, and bakery products. When water with elevated Pb is used to reconstitute powdered infant formula, the Pb contributed by the water adds to the Pb already present in the formula powder, with the combined level determining infant exposure. This reconstitution pathway is a recognized concern in areas with lead service lines. The infant formula pages ([[products/infant-formula-non-soy-powder]] and related) address the reconstitution calculation. Bottled water and filtered tap water used in food manufacturing typically contribute negligible metal loads to finished products.

## Mitigation options

### Sourcing levers

For community water systems, source-water selection (surface water with low As versus groundwater from As-bearing aquifers) and blending across sources to dilute As concentrations are the primary upstream levers. Bottled-water processors selecting spring sources must characterise source-water As and other metals as part of source approval.

### Agronomic levers

Not applicable to drinking water. Groundwater-fed agriculture in high-As regions constitutes a separate pathway (irrigation water As transferring to irrigated crops) addressed under specific ingredient pages.

### Processing levers

Point-of-use activated alumina, anion exchange, or reverse osmosis filtration is the most effective household-level intervention for iAs in drinking water. At the treatment plant level, coagulation with ferric salts followed by filtration is the standard method for achieving As reduction below 10 ppb. For Pb specifically, corrosion-control treatment (phosphate dosing or pH and alkalinity adjustment) is the primary distribution-system intervention to reduce Pb release from lead service lines and solder.

### Formulation levers

Food manufacturers using municipal tap water in high-As geological regions should characterise source-water As and consider point-of-entry or point-of-use treatment. For infant formula reconstitution, the recommendation to use low-As, low-Pb water (bottled water certified to meet NSF standard 53 for Pb) is the effective formulation lever at the consumer level.

### Testing and QC levers

Food manufacturers using water as an ingredient should test incoming municipal water for Pb, As, and Cd on a periodic basis, with frequency calibrated to the regulatory status and geological context of the supply. First-draw sampling (after stagnation) provides the worst-case Pb estimate in building plumbing; running-water samples provide the distribution-system estimate. EPA Method 200.8 (ICP-MS) is the reference method for Pb and As in drinking water.

### Packaging and storage levers

Lead service line replacement is the most impactful infrastructure-level intervention for Pb in tap water. Where replacement is not yet complete, phosphate-based corrosion inhibitors added at the water treatment plant reduce Pb release from existing lead service lines and solder. The US EPA Lead and Copper Rule Revisions (2021) mandate accelerated lead service line replacement on a regulated timeline.

## Regulatory limits that apply

In the United States, the EPA Maximum Contaminant Level for arsenic in public drinking water is 10 µg/L (10 ppb) as iAs, established by the 2001 Arsenic Rule ([[sources/epa-arsenic-drinking-water-mcl]]). For lead, the EPA action level is 15 µg/L (15 ppb); any public water system with more than 10 percent of samples exceeding this level must take remedial action under the Lead and Copper Rule. FDA applies equivalent standards to bottled water sold in interstate commerce. The EU Drinking Water Directive (2020/2184) sets a Pb limit of 5 µg/L (5 ppb) for tap water, a standard tighter than the US action level, and an As limit of 10 µg/L. The EU Cd limit in drinking water is 5 µg/L. [[regulations/codex-cadmium-mls]] covers maximum levels for Cd in natural mineral waters.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/epa-iris-inorganic-arsenic-2025\|EPA 2025]]. *IRIS Toxicological Review of Inorganic Arsenic*, EPA/635/R-25/005Fa, U.S. Environmental Protection Agency, Integrated Risk Information System | 2025 | Government report | iAs dose-response reference values and updated cancer slope factors, with drinking water as the primary quantitative exposure route anchoring the 2025 IRIS reassessment |
| 2 | [[sources/ufelle2021-metals-chapter\|Ufelle et al. 2021]]. *Toxic Effects of Metals (Chapter 23), in Casarett & Doull's Essentials of Toxicology, Fourth Edition*, Casarett & Doull's Essentials of Toxicology, Fourth Edition. McGraw Hill Education | 2021 | Textbook chapter | Comprehensive multi-metal toxicology reference covering routes of exposure including water for As, Cd, Pb, Hg, Al, Ni, and other HMI-tracked metals |
| 3 | [[sources/efsa-nickel-contam-2020\|EFSA 2020]]. *Update of the Risk Assessment of Nickel in Food and Drinking Water*, EFSA Journal 2020;18(11):6268 | 2020 | Government report | Ni TDI of 13 µg/kg b.w./day and European Ni occurrence data across food and drinking water, with drinking water identified as a contributing Ni exposure pathway |
| 4 | [[sources/jecfa-82nd-arsenic\|JECFA 2017]]. *Safety Evaluation of Certain Food Additives (Arsenic), 82nd Meeting of JECFA*, WHO Food Additives Series 73 | 2017 | Government report | JECFA arsenic monograph confirming the BMDL01 framework for iAs risk characterization, with drinking water the canonical human exposure route for dose-response anchoring |
| 5 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | European iAs occurrence across 100,000+ data points with water as a significant exposure pathway; European dietary iAs ranges 0.13–0.56 µg/kg b.w./day with children exposed at 2–3× adult per-kg rates |
| 6 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | ATSDR MRL of 1 mg Al/kg/day for chronic oral Al exposure, with water identified as a background Al exposure route alongside infant formula and food |
| 7 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal (2008) 754, 1-34 | 2008 | Government report | EFSA TWI of 1 mg Al/kg b.w./week, noting water as a contributing Al exposure pathway in addition to food additives and infant formula |
| 8 | [[sources/atsdr-arsenic-toxprofile-2007\|ATSDR 2007]]. *Toxicological Profile for Arsenic*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2007 | Government report | Comprehensive iAs toxicology synthesis with MRL derivation, using drinking water as the primary human exposure route for dose-response anchoring |
| 9 | [[sources/epa-arsenic-drinking-water-mcl\|EPA 2001]]. *EPA Drinking Water Arsenic MCL Rule (10 ppb)*, U.S. Environmental Protection Agency | 2001 | Government report | The US EPA MCL of 10 ppb for iAs in drinking water, the operational regulatory limit directly applicable to municipal and bottled water |
| 10 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd, Pb, Hg, and iAs across food and feed matrices, including limits applicable to natural mineral waters |
| 11 | [[sources/epa-iris-cadmium-1989\|EPA 1989]]. *Cadmium (CASRN 7440-43-9) — IRIS Chemical Assessment Summary*, U.S. Environmental Protection Agency, Integrated Risk Information System | 1989 | Government report | EPA IRIS RfD for Cd from drinking water (5×10⁻⁴ mg/kg/day), a route-specific value reflecting higher Cd absorption from water than from food |
<!-- END: hmi-source-legend -->

