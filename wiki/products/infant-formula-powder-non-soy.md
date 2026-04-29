---
type: product-category
category: infant-formula-powder-non-soy
hmtc_row: 1
label: "Infant formula, powder (non-soy)"
base_taxonomy: infant-formula-powder
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-powder, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-powder-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-04-28
sources: 5
---

# Infant Formula, Powder (Non-Soy)

This page is a product-category evidence page for HMTc Category 1 row 1. The current corpus contains broad infant-formula, formula-powder, and powdered-milk evidence, but non-soy-specific evidence is still pending.

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: 5 A-tier / 0 B-tier sources.
- Next ingest target: non-soy powdered infant formula datasets that distinguish protein source while measuring [[metals/aluminum|Al]], [[metals/nickel|Ni]], [[metals/cadmium|Cd]], and the full testing panel.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

The current evidence base supports broad infant-formula and formula-powder values, but not a finished non-soy powder distribution. Values below are therefore tagged by product-match strength rather than presented as a final row-specific ppb spread.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | 15 infant formulas without organic brown rice syrup | 2 to 12 ng/g | 2 to 12 ppb | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Broad infant-formula evidence; does not split powder/non-soy/soy. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Reconstituted organic brown-rice-syrup toddler formula, dairy-based | 8 to 9 ug/L | 8 to 9 ppb in liquid formula | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Toddler formula and ingredient-specific evidence, not infant formula row 1. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | Reconstituted organic brown-rice-syrup toddler formula, soy-based | 1.5 to 2.5 times the 10 ug/L drinking-water standard | approximately 15 to 25 ppb in liquid formula | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Soy-based toddler formula; useful for contrast, not row 1 non-soy powder. |
| [[metals/arsenic-total|Total arsenic]] | Formula powder cited in infant arsenic biomarker study | up to 12.6 ug/kg | up to 12.6 ppb | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Secondary citation within biomarker study; does not split soy/non-soy. |
| [[metals/cadmium|Cadmium]] | Infant formula in EFSA-cited Czech infant intake study | median 0.6 ug/kg | 0.6 ppb | [[sources/efsa-cadmium-contam-2009]] | Broad infant-formula value; not split by powder/non-soy. |
| [[metals/lead|Lead]] | Infant formula stage 1 and stage 2 scoping-review grouping | median 0.015 mg/kg | 15 ppb | [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Stage grouping; not split by powder/non-soy. |
| [[metals/cadmium|Cadmium]] | Powdered milk in Italian baby-food analytical study | below LOD in all samples | below 5 ppb LOD | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Powdered milk category; does not split soy/non-soy formula. |
| [[metals/lead|Lead]] | Powdered milk in Italian baby-food analytical study | below LOD in all samples | below 100 ppb LOD | [[sources/meli2024-chemical-characterization-baby-food-italy]] | LOD is too high for many modern infant-food lead benchmarks. |
| [[metals/mercury-total|Total mercury]] | Italian baby-food analytical study | detectable in all samples | concentration table extraction pending | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Study reports total mercury, not methylmercury; product-row concentration still needs table-level extraction. |
| [[metals/nickel|Nickel]] | Powdered milk sample in Italian baby-food analytical study | estimated daily intake 9.43 ug/kg body weight/day | not a concentration ppb value | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Intake estimate, not product concentration; still relevant to row-risk screening. |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-powder-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 73% of cow-based formula items and Cd in 44% of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

A 2012 arsenic speciation study reported total arsenic concentrations of 2 to 12 ng/g in 15 infant formulas without organic brown rice syrup; because 1 ng/g equals 1 ug/kg, this corresponds to approximately 2 to 12 ppb total arsenic in formula powder, though the study does not isolate non-soy formula powder as a row-specific category. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

A 2024 analytical study of European baby foods included powdered milk and reported that cadmium and lead were below the study LOD in all samples, while mercury was detectable in all samples and one powdered-milk sample had the highest estimated nickel intake in the study at 9.43 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy]]

Non-soy-specific risk characterization remains pending. <!-- UNCITED: Need non-soy powdered infant formula sources that measure Al, Ni, Cd, Pb, tAs/iAs, tHg/MeHg, Cr-VI, and Sn while distinguishing non-soy powder from soy-based powder and ready-to-feed liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The promoted powdered-milk analytical study resolves powder format but does not resolve soy versus non-soy formula. [[sources/meli2024-chemical-characterization-baby-food-italy]]

Potential variance drivers for non-soy powdered formula should be documented only after sources distinguish formulation, ingredient inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate non-soy powder from soy-based powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-powder]] and [[ingredients/non-soy-infant-formula]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk pending. <!-- UNCITED: Need formula-specific FDA, EU, Codex, or other agency sources before adding regulatory crosswalk claims for this row. -->

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/efsa-cadmium-contam-2009]]
- [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
