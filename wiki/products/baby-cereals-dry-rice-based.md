---
type: product-category
category: baby-cereals-dry-rice-based
hmtc_row: 6
label: "Baby cereals / grain products, dry (rice-based)"
base_taxonomy: baby-cereals-dry
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: split_from_base
ingredient_targets: [baby-cereals-dry, rice-flour, rice-cereal, vitamin-mineral-premix]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: infants-0-24mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: baby-cereals-dry-non-rice
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [iAs, Cd, Pb]
audience: [regulator, educator, consumer, app]
updated: 2026-04-28
sources: 4
---

# Baby Cereals / Grain Products, Dry (Rice-Based)

This page is a structural scaffold for HMTc Category 1 row 6. Four Category 1 sources have been promoted; dry rice-cereal-specific distributions and arsenic speciation detail remain pending.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: infant cereal datasets for rice-based dry grain products, especially [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

Rice-based cereal has the strongest arsenic signal in Category 1. Values include both rice/rice-mix baby-food evidence and regulatory action levels for infant rice cereal.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA infant rice cereal action level | 100 ppb | 100 ppb | [[sources/fda-iAs-rice-cereal-2020]] | Regulatory action level, not occurrence distribution. |
| [[metals/lead|Lead]] | Rice/rice-mix baby foods in global scoping review | median 0.008 mg/kg | 8 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Broad rice/rice-mix baby-food category. |
| [[metals/arsenic-total|Arsenic]] | Rice/rice-mix baby foods in global scoping review | median 0.048 mg/kg | 48 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Review reports As; speciation may vary by included study. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Rice products commonly eaten during weaning | up to 323 ug/kg | up to 323 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation for baby rice/rice cereals/rice crackers. |
| Dimethylarsenate and other arsenic species | Rice products commonly eaten during weaning | DMA up to 297 ug/kg | up to 297 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Organic arsenic species; not iAs. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK cereal-based infant foods/dishes | 5 to 6 ug/kg | 5 to 6 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based group, not rice-only. |
| [[metals/cadmium|Cadmium]] | UK cereal-based infant foods/dishes | 3 ug/kg | 3 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Cereal-based group, not rice-only. |

## Row Relationship

This row is the contamination-platform counterpart to [[products/baby-cereals-dry-non-rice]] for the row architecture relationship covering [[metals/arsenic-inorganic|iAs]], [[metals/cadmium|Cd]], and [[metals/lead|Pb]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 scoping review reported that rice/rice-mix baby foods had median Pb of 0.008 mg/kg and median As of 0.048 mg/kg among detected items; 31% of detected rice/rice-mix items exceeded the Pb maximum level used by the authors and 30% exceeded the As maximum level. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2022 narrative review describes rice as a key infant-food concern and cites evidence that infant urinary inorganic arsenic metabolites increased 4.5-fold after weaning with rice products. [[sources/bair2022-heavy-metals-infant-toddler-foods]]

A 2018 infant biomarker study found that, among weaning infants, rice cereal intake was associated with the sum of urinary arsenic species (Spearman rho = 0.90, p = 0.03). [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The current promoted sources support rice/rice-mix concern, but they do not yet distinguish rice flour, rice cereal, rice puffs, rice origin, or arsenic speciation for this exact dry-cereal row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] [[sources/bair2022-heavy-metals-infant-toddler-foods]]

Potential variance drivers for rice-based dry baby cereals should be documented only after sources distinguish rice ingredient form, sourcing geography, processing, fortification, and analytical method. <!-- UNCITED: Need comparative infant cereal sources that separate rice-based products from non-rice products and report methods such as [[testing/icp-ms]] and arsenic speciation. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/baby-cereals-dry]], [[ingredients/rice-flour]], and [[ingredients/rice-cereal]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

FDA's 2023 proposed lead action levels, as summarized by Price et al. 2023, included 20 ppb for dry infant cereals. [[sources/price2023-baby-food-lead-biokinetic-models]]

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/fda-iAs-rice-cereal-2020]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/bair2022-heavy-metals-infant-toddler-foods]]
- [[sources/price2023-baby-food-lead-biokinetic-models]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
