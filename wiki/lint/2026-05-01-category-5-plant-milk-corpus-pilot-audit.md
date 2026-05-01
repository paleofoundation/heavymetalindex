---
type: lint-audit
title: "Category 5 plant-milk corpus pilot audit"
audience: [researcher, regulator, standards-development]
updated: 2026-05-01
sources: 3
---

# Category 5 Plant-Milk Corpus Pilot Audit

## Trigger

The raw marker/PyTorch corpus contains 23,260 markdown documents under `/Users/karenpendergrass/Desktop/heavy-metal-index/raw/markdown`. This pilot tests whether ChatGPT can use the corpus without flattening it into unsourced prose or breaking the wiki structure.

## Corpus Handling

- Raw corpus files remain immutable.
- Machine triage output is generated under [[corpus/index]] and `data/corpus/`.
- Load-bearing papers are promoted to [[sources/index]] before product pages cite them.
- Finished-product beverage values stay on product pages and occurrence tables.
- Ingredient pages receive links and routing notes only unless the values are ingredient-only.

## Sources Promoted

- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]

## Product Pages Updated

- [[products/plant-milks-soy-based]]
- [[products/plant-milks-rice-based]]
- [[products/plant-milks-non-soy-non-rice]]
- [[products/regulatory-crosswalk-field-findings]]

## Critical Comparison Layer

The strongest direct comparison is [[products/plant-milks-rice-based]] for iAs: [[regulations/eu2023-arsenic-rice-based-drinks]] gives 30 ug/kg and [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] reports N=25, mean 15 ug/kg, median 15 ug/kg, range 7-24 ug/kg.

The soy row now has useful field findings from [[sources/milani2023-trace-elements-soy-based-beverages]], but compliance comparisons are blocked until Brazilian/MERCOSUR legal rows are loaded directly and unit/basis conversion is reviewed.

The non-soy/non-rice row remains an evidence gap. [[sources/marques2021-trace-elements-milks-plant-based-drinks]] supports routing and identifies an oat-drink Pb signal, but numeric comparison is blocked pending source-table review.
