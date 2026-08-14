---
title: "Category 1 Lead Benchmark Context"
type: product-synthesis
category_label: Infant and Child Foods
metal: Pb
audience: [regulator, educator, consumer, app]
evidence_register: data/evidence/category1_lead_benchmark_context.csv
sources: 4
wiki_doi: null
updated: 2026-05-03
---

# Category 1 Lead Benchmark Context

## Overview

HMI normalizes Category 1 lead benchmarks into **ppb** so FDA action levels, EU maximum levels, Prop 65 exposure screens, and observed occurrence data can be compared on one concentration scale. The conversion makes the numbers comparable; it does not make them the same kind of value.

| Value class | ppb view | What it means |
| --- | --- | --- |
| FDA action/guidance level | Stored directly in ppb when established | U.S. regulatory context; often nonbinding guidance that FDA may consider in enforcement |
| EU maximum level | Converted from mg/kg to ppb | Binding EU market-entry ceiling where the product scope matches |
| Prop 65 lead MADL screen | `500 ÷ grams/day` | Exposure-based warning screen derived from 0.5 ug/day lead MADL, not a food-category concentration limit |
| Occurrence data | Stored in ppb | What has actually been measured in products or source datasets |
| HMTc standards use | ppb-normalized but separately typed | Standards input/context only after scope, basis, and evidence fitness review |

## Why this helps HMTc standards

The ppb-normalized view lets HMTc apply a clean standards workflow:

- Regulatory cap check: a proposed HMTc value should not exceed the most protective applicable finalized regulatory ceiling for the same product, metal, and basis.
- Feasibility check: occurrence medians, P90s, P95s, and maxima show whether a stricter value is realistically achievable.
- Scope firewall: formula, dry cereal, fruit puree, juice, and snacks cannot silently borrow each other's regulatory values.
- Basis matching: powder, liquid, as-sold, ready-to-eat, prepared-for-feeding, and serving-based exposure values stay labelled.
- Public claim control: regulatory values, exposure screens, occurrence values, and HMTc thresholds remain separate data objects.

## Why this helps the broader community

The public takeaway is simple: **legal is not the same as low**. A product can be under FDA or EU lead values and still look elevated compared with observed category medians or a Prop 65 serving-based exposure screen. The reverse can also happen for tiny serving sizes, where a Prop 65 ppb equivalent may look high because daily intake is small.

This page therefore shows all lead reference points in ppb, while preserving what each number actually does.

## Category 1 lead crosswalk

| Product row | Current FDA lead ppb view | EU lead ppb view | Prop 65 ppb-equivalent screen | Standards interpretation |
| --- | --- | --- | --- | --- |
| [[products/infant-formula-powder-non-soy|Infant formula, powder (non-soy)]] | Not established | 20 ppb | 5 ppb at 100 g/day powder assumption | No FDA formula-specific lead action level; do not borrow processed-baby-food values. |
| [[products/infant-formula-powder-soy-based|Infant formula, powder (soy-based)]] | Not established | 20 ppb | 5 ppb at 100 g/day powder assumption | Same legal structure as non-soy powder, but occurrence review should stay soy-specific. |
| [[products/infant-formula-rtf-liquid-non-soy|Infant formula, RTF liquid (non-soy)]] | Not established | 10 ppb | 0.625 ppb at 800 g/day liquid assumption | Keep liquid/prepared occurrence data separate from powder data. |
| [[products/infant-formula-rtf-liquid-soy-based|Infant formula, RTF liquid (soy-based)]] | Not established | 10 ppb | 0.625 ppb at 800 g/day liquid assumption | Formula-specific exposure model required before standards use. |
| [[products/baby-cereals-dry-non-rice|Baby cereals and grain products, dry (non-rice)]] | 20 ppb | 20 ppb | 33.3 ppb at 15 g/day | FDA and EU align at 20 ppb for lead; occurrence data decide whether HMTc can go lower. |
| [[products/baby-cereals-dry-rice-based|Baby cereals and grain products, dry (rice-based)]] | 20 ppb | 20 ppb | 33.3 ppb at 15 g/day | Lead limit is the same as non-rice cereal; rice still drives iAs/Cd/Pb occurrence review. |
| [[products/fruit-purees|Fruit purees]] | 10 ppb | 20 ppb | 4.5 ppb at 110 g/day | FDA 10 ppb is the regulatory cap/context; Prop 65 shows why serving size matters. |
| [[products/non-root-vegetable-purees|Non-root vegetable purees]] | 10 ppb | 20 ppb | 4.5 ppb at 110 g/day | Non-root vegetables should not inherit the FDA 20 ppb root-vegetable value. |
| [[products/root-vegetable-purees|Root-vegetable purees]] | 20 ppb if single-ingredient carrot or sweet potato | 20 ppb | 4.5 ppb at 110 g/day | FDA 20 ppb applies only where the root-vegetable scope matches; mixtures can route to 10 ppb. |
| [[products/meat-and-poultry-purees|Meat and poultry purees]] | 10 ppb | 20 ppb | 4.5 ppb at 110 g/day | Use FDA 10 ppb as cap/context, then compare with measured meat/poultry occurrence. |
| [[products/fish-containing-baby-foods|Fish-containing baby foods]] | 10 ppb when covered as a mixture | 20 ppb | 4.5 ppb at 110 g/day | Scope review needed for fish products; lead is not the whole fish-food risk story. |
| [[products/mixed-meals-non-rice|Mixed meals, non-rice]] | 10 ppb | 20 ppb | 4.5 ppb at 110 g/day; 2.9 ppb at 170 g/day toddler meal | Keep rice status and ingredient drivers separate. |
| [[products/mixed-meals-rice-containing|Mixed meals, rice-containing]] | 10 ppb | 20 ppb | 4.5 ppb at 110 g/day; 2.9 ppb at 170 g/day toddler meal | Do not substitute dry-infant-cereal lead values for rice-containing meals. |
| [[products/fruit-juice-not-canned|Fruit juice, not canned]] | 50 ppb current Juice HACCP context | 20 ppb if infant/young-child-labelled drink | 4.2 ppb at 120 g/day | Track 10/20 ppb FDA juice values as draft-only until finalized. |
| [[products/teething-and-snacks-non-rice|Teething and snacks, non-rice]] | Not established | 20 ppb if processed cereal-based infant/young-child food | 71.4 ppb at 7 g/day | FDA snack gap remains visible; do not borrow dry-cereal action levels. |
| [[products/teething-and-snacks-rice-based|Teething and snacks, rice-based]] | Not established | 20 ppb if processed cereal-based infant/young-child food | 71.4 ppb at 7 g/day | Rice snacks remain a priority, but infant-rice-cereal values do not automatically apply. |

## Formula

Prop 65 conversion:

```text
lead ppb equivalent = 500 ÷ grams consumed per day
```

The numerator is 500 ng/day, equal to OEHHA's 0.5 ug/day lead MADL. Since 1 ppb equals 1 ng/g, dividing 500 ng/day by grams/day gives the concentration in ppb that would reach the MADL under that intake assumption.

Formula rows use labelled illustrative intake assumptions because infant formula exposure depends on preparation, age, body weight, and daily volume. Those assumptions are not HMTc standards and should be replaced by an approved formula-specific exposure model before threshold decisions.

## Sources

- [[sources/fda-ctz-Pb-babyfood-2025]]
- [[sources/fda2004-juice-haccp-lead]]
- [[sources/fda2022-draft-lead-juice]]
- [[sources/eu2023-915-lead-infant-young-child-foods]]
- [[regulations/oehha-lead-prop65]]
- [[sources/ecfr-21cfr10112-serving-sizes]]

The ppb-normalized lead benchmark values on this page are compiled from the cited literature and applied to per-product pages for like-for-like comparison.
## Who this page is for

_Pending. The brand-legal, retailer-compliance, HMTc-internal, and regulator audiences are listed; this section will frame what each is looking for on this page._

## Methodology

_Pending. This section will state the speciation, basis-preservation, row-fit, and pooling rules that govern downstream sections of this page._

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
_Pending: regenerated by `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` once sources route and the pooling engine emits aggregate rows for this product category._
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

_Hand-curated section. Populated by the synthesis pass as sources contribute._

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
_Pending: regenerated by `tools/evidence/apply-product-broad-context.mjs` once broad-scope sources route to this page._
<!-- END: hmi-broad-context-sources -->

## Federal/Regulatory Limits vs Field Findings

<!-- BEGIN: hmi-product-crosswalk -->
_Pending: regenerated by `tools/apply-product-crosswalk-sections.mjs` once `applicable_regulations` are identified and field-finding evidence is pooled._
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Individual brand recall actions are not enumerated here.

## How standards math uses this page

This page reports what the peer-reviewed and government literature says about heavy-metal concentrations in this product category; it publishes no certification thresholds of its own. Certification criteria are set separately under the Heavy Metal Tested & Certified program at heavymetalcertified.com, which reads this page as its literature baseline. The two are kept apart by design, so this page remains an independent record of the evidence rather than a justification for any threshold.

## Historical recalls and enforcement

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Individual brand recall actions are not enumerated here.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda-tds-elements-2018-2020|Total Diet Study Report: Fiscal Years 2018-2020 Elements Data]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
