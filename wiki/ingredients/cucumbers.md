---
type: ingredient
commodity: cucumbers
title: "Cucumbers"
label: "Cucumbers"
aliases: []
category: vegetable-fruit
contamination_profile:
  Pb: { status: populated, typical_ppb: [50, 220], p95_ppb: 220, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [0, 20], p95_ppb: 20, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 4
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Cucumbers

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 50–220 | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|2]] |
| Cd | n=2 | 0–20 | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|2]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cd, tHg, Sn occurrence in 49 samples of canned tomato paste, canned olives, and pickled cucumbers from the 5 most popular brands, purchased... (n=49) |
| 2 | [[sources/shavalig2025-canned-tomato-olives-pickles-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled*, Scientific Reports | 2025 | Peer-reviewed | IR Cd, Cu, tAs, Fe, Pb, Sn, Zn, tHg occurrence in 49 canned samples (tomato paste, olives, pickled cucumbers) from five popular brands in Tehran, Iran (n=49) |
| 3 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | IR Pb, Cd occurrence in Eight vegetable types (parsley, spinach, basil, tomatoes, cucumbers, potatoes, onions, beans) from Babol, Mazandaran Province, northern Iran; 4... (n=32) |
| 4 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | PL Cr occurrence in Fresh fruits, vegetables, wheat grains collected in 2001 from three agricultural regions of Poland; plus commercially purchased juices,... (n=272) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Cucumbers (Cucumis sativus) are a Cucurbitaceae fruit vegetable cultivated globally, consumed fresh, pickled, or in salads. As a fruit vegetable (the consumed portion is the fleshy fruit, not leaves or roots), cucumbers sit at the lower end of the vegetable heavy-metal range relative to leafy greens or root vegetables, but they accumulate trace [[metals/cadmium|Cd]] and [[metals/chromium|Cr]] via soil-uptake at moderate efficiency. The Iranian Babol vegetable survey by [[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour 2023]] documents cucumbers within the broader Iranian vegetable corpus, and the Iranian canned tomato/olive/pickled-cucumber survey by [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-Gilani 2025]] specifically documents heavy-metal levels in pickled cucumber. The Polish plant-food Cr survey by [[sources/reczajska2005-chromium-plant-foods-poland|Reczajska 2005]] documents Cr in cucumber as part of the broader plant-food Cr distribution.

The HMTc panel concerns for cucumbers are low to moderate: trace Cd and Pb at typical soil-uptake levels, with potentially elevated levels in pickled cucumber products if brine or pickling-acid carries metals. Cucumbers are particularly relevant in baby-food and toddler-food formulations as an ingredient in mixed-vegetable purees and in pickled-product applications in adult diet.

## Ranges by source, region, and variety

Variance within cucumbers tracks source-region soil profile (industrial-region or urban production carries elevated metals; commercial agricultural production sits at moderate baseline; greenhouse and hydroponic production sits at lower baseline because of controlled inputs), cultivar (slicing cucumber, pickling cucumber, English/seedless cucumber, Asian cucumber — limited documented per-cultivar metal differences), and growing-system (field-grown vs greenhouse vs hydroponic). The Iranian Babol survey ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour 2023]]) documents elevated levels in some industrial-region production reflecting regional soil contamination.

## Processing effects

Cucumber processing for fresh-market consumption involves washing, sorting, and packing; metal load reflects field-harvest baseline. Pickled cucumber manufacturing involves washing, brining or pickling with vinegar (often with added salt, sugar, and spices), and packaging. Per [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran|Shavali-Gilani 2025]], pickled cucumbers can carry elevated metals from the pickling-brine ingredients (acetic acid, vinegar, salt — each carrying trace metals from upstream production). Canned pickled cucumber introduces Sn migration in tinplate cans. Cucumber juice (a less common product) extracts source-cucumber juice content. Cucumber powder (dehydrated cucumber for seasoning or smoothie applications) concentrates per-mass metals via moisture removal.

## Ingredient-derivative risk

Cucumber derivatives include fresh cucumber, pickled cucumber (gherkins, dill pickles, bread-and-butter pickles, cornichons), cucumber juice, cucumber-flavored beverages (cucumber-water, cucumber-cocktails), and dried/powdered cucumber. Pickled cucumber routes into the broader pickled-vegetable product family and inherits any brine-introduced metals. Cucumber-containing mixed-vegetable products (including baby-food formulations and salad-cup mixes) inherit cucumber metals diluted by other ingredients.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-region soil verification; supplier-audit programs for documented low-soil-Pb/Cd production regions; greenhouse-and-hydroponic production specification where the matrix permits; and contractual Pb/Cd ceiling on incoming cucumber supply.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the cucumber-cultivation stage. Soil pH management; soil amendments (biochar, lime); cultivar selection; greenhouse and hydroponic production systems (limits direct soil uptake and atmospheric deposition).

**Processing levers** ([[mitigation/processing]]) include washing optimization for surface-Pb removal; processing-equipment material specification; brine-and-vinegar quality specification for pickled-cucumber production (the brine ingredients themselves can carry metals that propagate into the finished pickled product).

**Formulation levers** ([[mitigation/formulation]]) include substituting cucumber with other fruit-vegetables where the matrix permits in mixed-vegetable formulations; minimizing the brine fraction in pickled-cucumber products.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, Cr testing on incoming cucumber supply and finished cucumber products including pickles. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned pickled cucumber; glass-jar packaging for pickles eliminates Sn migration.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Cd and Pb in non-root vegetables: Pb 50 ppb, Cd 50 ppb. These apply to cucumbers.
- FDA does not currently set quantitative action levels specific to cucumber; FDA Closer to Zero baby-food framework applies to cucumber-containing infant products.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets non-root-vegetable category limits aligned broadly with EU.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to cucumber products sold in California.
- EU Sn-in-canned-food regulation sets 200 mg/kg for canned vegetables including canned pickled cucumber.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [ca4d875](https://github.com/paleofoundation/heavymetalindex/commit/ca4d875) | 2026-05-17 | build: regenerate audits + routing artifacts after locked-product fix |
<!-- END: hmi-page-history -->
