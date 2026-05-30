---
type: ingredient
commodity: walnuts
title: "Walnuts"
label: "Walnuts"
aliases: [juglans-regia, english-walnuts, persian-walnuts, california-walnuts]
category: nut
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: 500
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 200]
    p95_ppb: 500
    confidence: high
    n_studies: 4
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [1000, 5000]
    p95_ppb: 10000
    confidence: medium
    n_studies: 4
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
    typical_ppb: [50, 300]
    p95_ppb: null
    confidence: medium
    n_studies: 2
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
drivers: [tree-nut-nickel-accumulator, soil-uptake, origin-country, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Walnuts

Walnuts (Juglans regia, English/Persian walnut; Juglans nigra, Eastern black walnut) are tree nuts grown commercially in California (which produces ~99% of US commercial walnuts and ~38% of the global supply), China (~50% of global supply), Iran, Turkey, Chile, and Ukraine. The defining heavy-metals feature of walnuts and the broader tree-nut category is nickel accumulation: walnut tissue routinely carries Ni at 1,000-5,000 ppb dry weight, making walnuts among the highest dietary Ni sources alongside other tree nuts (hazelnuts, almonds, cashews), legumes, and certain leafy greens. The BfR MEAL Study identified walnuts and other tree nuts among the dominant nickel dietary contributors in the German diet ([[sources/bfr2022-nickel-dietary-intake-germany-meal]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany]]). The Polish Cwielag-Drabek 2025 dataset (n=69 across almonds, cashews, hazelnuts, peanuts, walnuts) provides the most rigorous within-tree-nut comparison for Cd-Pb-Cr-Ni ([[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland]], [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland]]).

## Why this commodity accumulates heavy metals

Walnut trees take up metals from soil through root uptake into the woody tissue and seed (kernel). The tree-nut nickel-accumulation pattern is driven by physiological demand for nickel as a cofactor in urease and other plant-tissue enzymes; tree nuts efficiently transport Ni from the root zone into the developing kernel. Cadmium uptake follows the standard plant pathway driven by soil Cd-to-Zn ratio; walnut kernels are moderate Cd accumulators, typically carrying 20-200 ppb on a dry-weight basis. Lead in walnuts is generally low because the woody tree tissue acts as a barrier to Pb transport from root zone to kernel, with most Pb in walnut product coming from atmospheric deposition during hulling-and-drying or from post-harvest contact contamination. The Polish Cwielag-Drabek 2025 dataset identified walnuts among the higher-Ni tree nuts within the surveyed five species, with the Ni profile broadly comparable to hazelnut and almond ([[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland]]). The German BfR MEAL Study (n=840 dietary Ni-intake samples, n=869 broader contaminant panel) confirmed walnuts as a meaningful dietary Ni source in the German consumption pattern ([[sources/bfr2022-nickel-dietary-intake-germany-meal]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany]]). Walnut hull (the green outer hull discarded during processing) carries higher metals than the edible kernel and is sometimes used for natural-dye production, providing context but not a direct food-pathway.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 10–200 | medium | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| Cd | n=4 | 20–200 | high | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–5 | low | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]] |
| Ni | n=4 | 1000–5000 | medium | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 50–300 | medium | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The corpus covers walnuts through the German MEAL Study (BfR 2022, two related publications covering 840 and 869 samples across the German diet, [[sources/bfr2022-nickel-dietary-intake-germany-meal]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany]]) and the Polish Cwielag-Drabek 2025 paired publications (n=69 across five tree-nut species, [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland]], [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland]]). Both datasets characterise European-market product (with the Polish data covering EU and Chinese-origin imports). Origin pattern: Chinese-origin walnut product carries similar baseline metals to European and California-origin commercial product; the Polish dataset's CN-origin subset did not show systematic per-origin differences within the surveyed sample. Variety-level pattern: English/Persian walnut (Juglans regia, the dominant commercial species) is the focus of the loaded literature; Eastern black walnut (Juglans nigra) and butternut (Juglans cinerea) are minor commercial species with limited loaded data. Within-Juglans-regia cultivar variance (Chandler, Hartley, Tulare, Vina, Franquette) is not characterised in the loaded corpus. The peeled-kernel-vs-whole-nut distinction is implicit in the analytical work; the kernel is the consumed portion and is what the loaded data report.

## Processing effects

The walnut processing chain (harvest, hulling, drying, cracking, kernel separation, sorting) does not significantly alter the per-mass metal load on a dry-weight basis. Drying removes residual moisture but is not the major concentration event that drying-from-fresh-to-dried produces for herbs and spices; walnut kernels are harvested already at relatively low moisture content. Roasting and oil-pressing do not change the kernel metal load. Walnut oil (pressed from kernels) carries a small fraction of the parent kernel's metal load because most metals partition with the spent press cake rather than the oil phase. Salting, sugaring, and flavoring do not affect the underlying kernel metal load. Long-term storage in standard packaging does not change the per-mass load.

## Ingredient-derivative risk

Whole shelled walnut kernels are the baseline form. Walnut halves, chopped walnuts, and walnut pieces carry the same per-mass load. Walnut flour (used in gluten-free baking) carries the kernel's full metal load on a dry-weight basis. Walnut oil carries a small fraction of the parent kernel's metals (most metals partition with press cake). Walnut butter and walnut spreads inherit the kernel's metal load directly. Black walnut hull extract (sold for traditional herbal and parasitic-cleanse applications) carries the higher-metal hull rather than the kernel and is qualitatively different from the food category. Walnut milk inherits a fraction of the kernel's metals into the liquid phase. Walnut-containing baked goods (brownies, banana bread, walnut cookies) carry the walnut's metal load at the inclusion ratio.

## Mitigation options

### Sourcing levers

Source from production regions with documented soil-and-water screening. California, Chinese, Iranian, Turkish, and Chilean commercial supply chains are broadly equivalent on heavy metals per the loaded literature; specific-origin specifications add cost without meaningful metal-load shift. For brand-controlled-supply operations, direct relationships with growers enable upstream soil testing and screening.

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability in the orchard. Avoidance of phosphate fertilisers with elevated Cd impurity reduces ongoing Cd loading. For the tree-nut nickel-accumulation pathway, agronomic interventions are limited; Ni-accumulation is a species-level trait of Juglans regia and other tree nuts and is not readily reduced by soil amendment.

### Processing levers

Validate equipment surfaces in shelling, cracking, and sorting operations. Avoid extended atmospheric exposure during hulling, which can contribute surface Pb to the kernel through hulling-area dust.

### Formulation levers

For finished products using walnuts as one ingredient, the inclusion ratio caps per-serving exposure. For Ni-sensitive consumers (a meaningful clinical sub-population with documented nickel-contact dermatitis or oral-nickel-sensitivity reactions), substitution with lower-Ni alternatives (sunflower seeds, pumpkin seeds, coconut) is the dietary intervention.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 5 ppb), and Ni (≤ 50 ppb) is appropriate for tree-nut buyers. The BfR MEAL Study protocol provides a useful population-screening reference ([[sources/bfr2022-nickel-dietary-intake-germany-meal]]).

### Packaging and storage levers

Standard food-grade packaging does not contribute to walnut metal load. Avoid extended storage in unsealed bulk where atmospheric Pb dust can deposit on kernels.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set a walnut-specific maximum but applies general fruit-and-nut limits. The EU Regulation 2023/915 sets a Pb maximum of 0.20 mg/kg for "tree nuts (almonds, hazelnuts, walnuts, brazil nuts, cashew nuts, chestnuts, coconuts, macadamia nuts, pecan nuts, pistachio, pine nuts)" and Cd at 0.10 mg/kg fresh weight for tree nuts. The EU does not set a tree-nut-specific Ni maximum despite the documented high-Ni profile of tree nuts. The FDA has not set walnut-specific action levels. The German MEAL Study findings on dietary Ni from tree nuts contribute to the case for tree-nut-specific Ni regulatory guidance, but no such guidance is currently in effect.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/alatise2025-fruit-nuts-metals\|Alatise et al. 2025]]. *Assessment of natural radioactivity and heavy metal accumulation in selected edible fruit nuts from Lagos and Ogun State markets, Nigeria*, Nigerian Journal of Theoretical and Environmental Physics | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | Polish 5-tree-nut Cd-Pb-Cr-Ni panel including walnuts (n=69) |
| 3 | [[sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | Companion paper on Polish nut health-risk assessment (n=69) |
| 4 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | German MEAL-Study Ni dietary-intake assessment (n=840) identifying walnuts and tree nuts among dominant Ni sources |
| 5 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 6 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | German MEAL-Study broader contaminant panel (n=869) covering walnuts as part of broad-food-spectrum analysis |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
