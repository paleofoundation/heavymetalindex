---
type: ingredient
commodity: wine-vinegar
title: "Wine Vinegar"
label: "Wine Vinegar"
aliases: []
category: vinegar
contamination_profile:
  Pb: { status: populated, typical_ppb: [50, 700], p95_ppb: 1280, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [fermentation-substrate, production-method, storage, leaching]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 5
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Wine Vinegar

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | — | — | — | — | — |
| Cd | — | — | — | — | — |
| iAs | — | — | — | — | — |
| tAs | — | — | — | — | — |
| tHg | — | — | — | — | — |
| Ni | — | — | — | — | — |
| Al | — | — | — | — | — |
| Cr | — | — | — | — | — |
| Sn | — | — | — | — | — |
| U | — | — | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|Karavoltsos et al. 2020]]. *Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter*, Molecules | 2020 | Peer-reviewed | GR tAs, Pb, Cd, Al, Cr, Ni, Cu, Fe, Mn, Zn, Co, Ba, Cs, Rb, Sr, V occurrence in 43 vinegars retailed in Greece: 20 balsamic (12 red-grape BR, 5 red-grape with honey BRH, 3 white-grape BW)... (n=43) |
| 2 | [[sources/ozbek2016-mip-oes-turkish-vinegars\|Ozbek et al. 2016]]. *A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different Types of Vinegars by Microwave Induced Plasma Optical Emission Spectrometry*, Food Analytical Methods | 2016 | Peer-reviewed | TR Al, Pb, Cr, Cu, Zn, Fe, Mn, Mg, Co, B occurrence in Commercially produced Turkish vinegars (n=34): 17 grape, 12 apple, 3 balsamic, 1 pomegranate, 1 fig; plus 1 homemade... (n=35) |
| 3 | [[sources/ndungu2004-lead-vinegar-icpms-gfaas\|Ndung'u et al. 2004]]. *Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures*, Talanta | 2004 | Peer-reviewed | US Pb occurrence in 59 commercial vinegars purchased in California: 52 balsamic, 4 wine, 1 apple cider, 1 rice, 1 garlic (n=59) |
| 4 | [[sources/acosta1993-cd-pb-ni-vinegar-types\|Acosta et al. 1993]]. *Levels of Cd, Pb, and Ni in Different Types of Vinegars*, Bulletin of Environmental Contamination and Toxicology | 1993 | Peer-reviewed | ES/DE/GB Cd, Pb, Ni occurrence in 52 bottled vinegars from supermarkets in Tenerife and Gran Canaria (Canary Islands, Spain): 26 wine vinegar, 10 apple... (n=52) |
| 5 | [[sources/troncoso1988-metallic-contaminants-andalusian-vinegars\|Troncoso et al. 1988]]. *Metallic contaminants in Andalusian vinegars*, Die Nahrung | 1988 | Peer-reviewed | ES Pb, tAs, Zn, Cu, Fe occurrence in 16 white wine vinegar samples from Western Andalusia (mainly Sherry/Jerez influence area and El Condado, Huelva), Spain; 13... (n=16) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Wine vinegar is produced by acetic-acid fermentation of wine (which is itself produced from [[ingredients/grape-juice|grape]] fermentation). It inherits the source-wine heavy-metal profile, particularly elevated [[metals/lead|Pb]] from the broader grape-wine production pathway (legacy lead-arsenate vineyard pesticides, trellis-system Pb deposition, and — historically — Pb from wine-cooperage materials). Wine vinegar's high acidity (pH ≈2.5-3.5) makes it especially prone to metal migration from any storage or processing vessel. The Andalusian vinegar metallic-contaminant survey by [[sources/troncoso1988-metallic-contaminants-andalusian-vinegars|Troncoso 1988]], the multi-vinegar-type survey by [[sources/acosta1993-cd-pb-ni-vinegar-types|Acosta 1993]], and the ICP-MS/GFAAS Pb method-validation work by [[sources/ndungu2004-lead-vinegar-icpms-gfaas|Ndung'u 2004]] collectively document Pb in wine vinegar at 50-700 ppb across regional surveys.

The HMTc panel concerns for wine vinegar are dominantly Pb (the source-grape inheritance plus migration-pathway risk in low-pH matrix). Cd, Ni, and other panel metals are present at lower levels with sparse quantitative coverage in the routing audit.

## Ranges by source, region, and variety

Variance within wine vinegar tracks source-wine type (red wine vinegar, white wine vinegar, sherry vinegar, champagne vinegar, rice-wine vinegar — each carrying different source-base profiles), source-grape origin region (Spanish, Italian, French wine production carries the European-vineyard Pb baseline; California, Argentine, Chilean wine production carries different baselines), vinegar-aging time (longer-aged sherry vinegar and balsamic carry concentrated metals via water-evaporation aging), and packaging/storage history (vinegar stored in metal-contact vessels carries elevated migration).

The wide 50-700 ppb Pb range across the three contributing surveys reflects regional and product-type variability; the upper end captures older or poorly-controlled commercial wine vinegar; the lower end captures modern controlled commercial supply.

## Processing effects

Wine vinegar manufacturing involves wine fermentation followed by acetic-acid fermentation (Acetobacter conversion of ethanol to acetic acid). The fermentation step does not appreciably affect heavy metals. Subsequent processing (filtering, optional pasteurization, packaging) similarly does not remove metals; the metal load is the source-wine inheritance.

Balsamic vinegar (made from cooked grape must, aged in wooden barrels) involves additional processing steps that can introduce or concentrate metals depending on barrel construction. Sherry vinegar and aged wine vinegars stored in metal-contact vessels carry elevated migration. Modern stainless-steel and glass storage minimizes this risk.

## Ingredient-derivative risk

Wine vinegar derivatives include red wine vinegar, white wine vinegar, sherry vinegar, champagne vinegar (each from different wine sources), [[ingredients/balsamic-vinegar|balsamic vinegar]] (from cooked grape must, an extended-aging product), and reduction syrups (balsamic glaze, vinegar-based reductions) that concentrate per-mass metals. Wine vinegar is incorporated into salad dressings, marinades, sauces, and culinary applications where it contributes a fraction of the total per-product metal load.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-wine specification favoring documented low-Pb wine producers; supplier-audit programs verifying processing-infrastructure metal-contact; and contractual specification of Pb ceiling on incoming wine vinegar.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-grape vineyard stage; see [[ingredients/grape-juice|grape-juice]] and broader vineyard literature for upstream interventions (vineyard-age and -history specification, trellis-system audit).

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification (stainless-steel-only contact surfaces); avoidance of soldered or lined-metal storage tanks; and fermentation-vessel material specification.

**Formulation levers** ([[mitigation/formulation]]) include alternative-vinegar substitution where the matrix permits (cider vinegar, distilled white vinegar, rice vinegar — each with different source-base metal profiles).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb testing on incoming wine vinegar against EU 30 ppb juice/wine maximum levels and FDA enforcement context. ICP-MS is the standard analytical platform per [[sources/ndungu2004-lead-vinegar-icpms-gfaas|Ndung'u 2004]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include glass-bottle packaging (standard for commercial wine vinegar); avoidance of metal storage for finished product.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb in wine at 100 ppb (the wine-vinegar precursor); wine vinegar inherits via concentration during fermentation/aging.
- Codex Alimentarius CXS 162-1987 (Vinegar) provides composition standards.
- FDA does not currently set a quantitative action level specific to vinegar; general FDA enforcement applies.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to wine vinegar products sold in California; historical Prop 65 enforcement actions on balsamic vinegar and aged wine vinegars are documented.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
<!-- END: hmi-page-history -->
