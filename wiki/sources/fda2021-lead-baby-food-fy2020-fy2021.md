---
type: source
cite_key: fda2021-lead-baby-food-fy2020-fy2021
title: "Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)"
authors: ["U.S. Food and Drug Administration"]
year: 2021
publication: "FDA analytical results table"
source_type: government_dataset
evidence_tier: A
license: us-government-work
raw_path: "raw/Digest/Analytical-Results-for-Lead-in-Food-Intended-for-Babies-Young-Children-FY2020-FY2021.pdf"
access_url: "https://www.fda.gov/food/metals-and-your-food/lead-food-foodwares-and-dietary-supplements"
doi: null
no_doi_assigned: true
metals: [Pb]
ingredients: []
products: ["[[products/fruit-purees]]", "[[products/root-vegetable-purees]]", "[[products/non-root-vegetable-purees]]", "[[products/baby-cereals-dry-non-rice]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/mixed-meals-non-rice]]", "[[products/mixed-meals-rice-containing]]", "[[products/meat-and-poultry-purees]]", "[[products/infant-and-child-foods-master]]"]
matrices: [baby-food, fruit-puree, root-vegetable-puree, non-root-vegetable-puree, infant-cereal, mixed-meal, meat-and-poultry-puree]
jurisdictions: [US]
sample_n_total: 416
sample_n_notes: "416 baby-food samples from FY2021 in the published table; the FY2020-FY2021 supporting dataset combines into the wider FDA baby-food Pb evidence base later expanded by the FY2009-FY2024 TEP-AsPbCdHg compliance dataset and the FY2023 guidance-development survey."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-08
---

# FDA 2021 — Lead in Food Intended for Babies and Young Children (FY2020-FY2021)

## Summary

This FDA analytical results table reports sample-level lead concentrations for 416 commercially available baby and toddler foods sampled in fiscal year 2021. The dataset is part of the FDA Closer to Zero baby-food program and contributes to the evidence base behind the FDA 2025 final guidance on lead in processed food intended for babies and young children. Sample identifiers, baby-food product names, and lead concentrations are reported per sample; the 416-sample table covers fruit purees, root and non-root vegetable purees, mixed-ingredient infant foods, cereal-based infant foods, and meat-and-poultry-bearing infant foods. The dataset complements the broader FY2009-FY2024 TEP-AsPbCdHg compliance program dataset ([[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]) which extends the same sampling architecture across multiple analytes and a longer time window.

## Key numbers

The 416 samples cover diverse mixed-ingredient baby foods. Sampled product names visible in the dataset include "Zucchini, Apples, Peas, Quinoa, Basil"; "Green Beans, Spinach, Pears"; "Apples, Pumpkin, Carrots"; "Squash, Pears, Apricots"; "Mangoes"; "Apples, Guavas, Beets"; "Bananas, Sweet Potatoes, Papayas"; "Bananas, Plums, Granola"; "Apples, Sweet Potatoes, Granola"; "Apples, Kale, Avocado"; "Root Vegetables, Turkey"; and many others reflecting the typical pouched and jarred multi-ingredient baby-food market. Per-sample lead concentrations are reported in ppb. The dataset is suitable for sample-level benchmark-pool admission after appropriate product-row mapping; mixed-ingredient products require curatorial decisions about which HMTc product row each sample belongs to.

## Methods (brief)

Samples were collected by FDA under the surveys of food intended for babies and young children. Lead was quantified by FDA EAM method 4.7 (ICP-MS after acid digestion) per the program's standard protocol. Concentrations are reported in ppb on the as-sold or as-eaten basis as applicable per product type.

## Limitations

The 416-sample table is FY2021-only and is one slice of a longer FDA baby-food sampling program. Mixed-ingredient products are common in the dataset and do not always map cleanly to a single locked HMTc product row; mapping decisions belong to the curator and the structured-evidence layer rather than to the source page. The published table includes Sample ID, Fiscal Year, Baby Food Name, and Lead Concentration but does not include brand, geographic origin, fortification status, or other matrix metadata that would refine product-row mapping.

## Implications

- Certification: Direct primary-evidence basis for HMTc baby-food lead occurrence rows. The 416 FY2021 samples augment the broader FY2009-FY2024 TEP compliance dataset and improve the temporal coverage of the baby-food Pb evidence pool. Mapping to HMTc product rows requires per-sample ingredient-list parsing for mixed-ingredient products.
- Courses: Useful for teaching how multi-ingredient products complicate the standards-row architecture and why HMTc Category 1 row taxonomy distinguishes single-ingredient (root-vegetable, fruit, non-root-vegetable) from mixed-ingredient (mixed meal, mixed cereal) categories.

## Wiki pages updated on ingest

- [[regulations/fda2025-lead-processed-baby-foods]]
- [[products/fruit-purees]]
- [[products/root-vegetable-purees]]
- [[products/non-root-vegetable-purees]]
- [[products/mixed-meals-non-rice]]
- [[products/baby-cereals-dry-non-rice]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [aca5e21](https://github.com/paleofoundation/heavymetalindex/commit/aca5e21) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
<!-- END: hmi-page-history -->
