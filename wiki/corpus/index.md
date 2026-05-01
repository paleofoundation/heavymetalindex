---
type: corpus-index
title: Raw Markdown Corpus Pilot
updated: 2026-05-01
audience: [researcher, regulator, standards-development]
sources: 0
---

# Raw Markdown Corpus Pilot

This generated pilot indexes the marker/PyTorch markdown extraction layer without promoting every paper into curated source pages. It is the bridge between the 23,260 raw markdown documents and the public wiki source layer.

## Counts

- Raw markdown documents scanned: 23,260.
- Candidate markdown files screened: 2739.
- Machine-tagged food/heavy-metal candidates: 2707.
- Unique candidate FM records after de-duplication: 2596.
- Pilot records emitted: 150.
- Pilot records already promoted to curated source pages: 6.

## How ChatGPT Should Use This Layer

1. Search or filter the corpus catalog to find potentially relevant papers.
2. Treat corpus tags as machine-extracted candidates, not final claims.
3. Promote only load-bearing sources into `wiki/sources/`.
4. Put finished-product values on product pages and ingredient-only values on ingredient pages.
5. Preserve metal species, units, basis, matrix, geography, method, and review state before using values for HMTc standards logic.

## Pilot Indexes

- By metal: [[corpus/by-metal/Al]], [[corpus/by-metal/Cd]], [[corpus/by-metal/Cr]], [[corpus/by-metal/MeHg]], [[corpus/by-metal/Ni]], [[corpus/by-metal/Pb]], [[corpus/by-metal/Sn]], [[corpus/by-metal/U]], [[corpus/by-metal/iAs]], [[corpus/by-metal/tAs]], [[corpus/by-metal/tHg]].
- By product row: [[corpus/by-product/baby-cereals-dry-non-rice]], [[corpus/by-product/baby-cereals-dry-rice-based]], [[corpus/by-product/fruit-purees]], [[corpus/by-product/infant-formula-powder-non-soy]], [[corpus/by-product/infant-formula-powder-soy-based]], [[corpus/by-product/plant-milks-non-soy-non-rice]], [[corpus/by-product/plant-milks-rice-based]], [[corpus/by-product/plant-milks-soy-based]], [[corpus/by-product/root-vegetable-purees]].
- Promotion queue: [[corpus/promotion-queue]].

## Data Files

- `data/corpus/markdown-corpus-pilot-catalog.ndjson`
- `data/corpus/markdown-corpus-pilot-summary.json`
