---
type: source
cite_key: marques2021-trace-elements-milks-plant-based-drinks
title: "Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks"
authors: [Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, Domingo JL]
year: 2021
publication: "Biological Trace Element Research"
doi: "10.1007/s12011-021-03021-5"
access_url: "https://doi.org/10.1007/s12011-021-03021-5"
source_type: peer-reviewed
evidence_tier: A
raw_path: raw/markdown/FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan/FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan.md
metals: [Pb, tHg, Ni, U]
ingredients: [plant-milk, soy, almond, rice, oat, whole-milk, milk-and-dairy]
products: [plant-milks-soy-based, plant-milks-rice-based, plant-milks-non-soy-non-rice, infant-formula]
context_only_products: [infant-formula-powder-non-soy]
jurisdictions: [EU, Spain]
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-01
---

# Marques 2021 - Trace Elements In Milks And Plant-Based Drinks


This A-tier peer-reviewed paper is useful Category 5 beverage context because it measured retail cow milk, goat milk, soy drink, almond drink, rice drink, oat drink, and follow-on formula composites from Spain using ICP-MS. It reports that Hg, U, and V were not detected in the milk and plant-based drink samples, while Pb was detected in three samples, including one non-organic oat drink.

## Why this matters

- It connects the locked plant-milk rows to a real finished-beverage occurrence source rather than leaving them as pure taxonomy.
- It distinguishes finished beverage matrices from ingredient-only values, so the values belong on product pages and in occurrence data, not in ingredient `contamination_profile` fields.
- It flags a product-row gap: non-soy/non-rice plant milks need more occurrence studies before the row can be treated as a clean benchmark for HMTc work.

## Key numbers

| Item                  | Source value                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Sampling frame        | Retail milks and plant-based drinks purchased in Reus, Catalonia, Spain in January 2021                           |
| Matrices              | Cow milk, goat milk, soy drink, almond drink, rice drink, oat drink, infant/follow-on formula                     |
| Analytical method     | ICP-MS                                                                                                            |
| Target toxic elements | Hg, Pb, U, V, with Ni included among essential/trace elements                                                     |
| Main toxic finding    | Hg, U, and V not detected; Pb detected in non-organic whole cow milk, skimmed cow milk, and non-organic oat drink |
| Extraction status     | Table 1 marker output is noisy; numeric Pb table cells need source-table review before threshold use              |

## Routing

| Finding scope                      | Heavy Metal Index destination                                                                                      | Handling                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Soy, rice, almond, and oat drinks  | [[products/plant-milks-soy-based]], [[products/plant-milks-rice-based]], [[products/plant-milks-non-soy-non-rice]] | Finished-product occurrence context. Do not write these values into ingredient profiles.            |
| Non-organic oat drink Pb detection | [[products/plant-milks-non-soy-non-rice]]                                                                          | Comparison-blocked until the source table is reviewed against the PDF/table image.                  |
| Infant/follow-on formula rows      | [[products/infant-formula]]                                                                                        | Context only; the formula preparation basis differs from the FDA formula workbook already promoted. |

## Limitations

The study is Spain-specific and based on composites. The marker table extraction is not reliable enough for final numeric threshold comparison. The paper does not measure inorganic arsenic, cadmium, aluminum, or tin as target analytes in the plant-drink panel, so those metals remain gaps for the plant-milk rows.

## Wiki pages updated on ingest

- [[products/plant-milks-soy-based]]
- [[products/plant-milks-rice-based]]
- [[products/plant-milks-non-soy-non-rice]]
- [[products/regulatory-crosswalk-field-findings]]
- [[ingredients/plant-milk]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [b581b4b](https://github.com/paleofoundation/heavymetalindex/commit/b581b4b) | 2026-05-12 | triage: real-action subprocess trial — routing-unresolved 256 → 37 |
<!-- END: hmi-page-history -->
