---
type: source
cite_key: fda2011-apple-juice-arsenic-speciation
title: "Results of Arsenic Analysis in Single-Strength Apple Juice 2011 (ORA Sampling Assignment 2011102701)"
authors: [U.S. Food and Drug Administration]
year: 2011
publication: "U.S. Food and Drug Administration"
source_type: gov-data
evidence_tier: A
access_url: https://www.fda.gov/food/environmental-contaminants-food/results-arsenic-analysis-single-strength-apple-juice-2011-ora-sampling-assignment-2011102701
data_path: data/evidence/category5_apple_juice_arsenic_speciation_samples.csv
summary_path: data/evidence/category5_apple_juice_arsenic_speciation_summary.csv
license: public-domain-us-government
metals: [iAs, tAs]
other_arsenic_species: [DMA, MMA]
products: [fruit-juices-apple-containing, fruit-juice-not-canned]
product_metal_scope:
  fruit-juices-apple-containing: [iAs]
  fruit-juice-not-canned: [iAs]
jurisdictions: [US-FDA]
sample_n: 94
updated: 2026-05-07
---

# FDA 2011 - Apple Juice Arsenic Speciation

## TL;DR

FDA's 2011 ORA apple-juice sampling assignment reports 94 single-strength apple-juice samples with total arsenic, inorganic arsenic, DMA, and MMA results in ppb. The Index routes the inorganic-arsenic rows to [[products/fruit-juices-apple-containing]] as direct species-specific apple-juice evidence and to [[products/fruit-juice-not-canned]] as apple-only subcategory context.

## Structured Extract

- `data/evidence/category5_apple_juice_arsenic_speciation_samples.csv`: sample-level extract with FDA sample IDs, total arsenic, inorganic arsenic, DMA, MMA, original reported values, lower-bound ppb values, and censoring notes.
- `data/evidence/category5_apple_juice_arsenic_speciation_summary.csv`: deterministic lower-bound iAs summary rows for apple-containing juice and broader not-canned juice context.

## Key Numbers

| Scope | N | Lower-bound p50 | Lower-bound p90 | Lower-bound p95 | Max |
| --- | ---: | ---: | ---: | ---: | ---: |
| Inorganic arsenic in single-strength apple juice | 94 | 4.9 ppb | 7.7 ppb | 8.2 ppb | 9.8 ppb |

FDA reports Trace (`TR`) when species results are above the limit of detection and below the limit of quantitation. The generated lower-bound summary treats those `TR` cells as 0 ppb, preserves quantified cells as reported, and records the calculation rule in the evidence register. No total-arsenic value is substituted for inorganic arsenic.

## Evidence Fitness

This is EF-2 reconstructable evidence: the source table provides sample-level values and the lower-bound percentiles are deterministic nearest-rank calculations from the checked sample extract. It is stronger than a narrative or mean-only source, but it remains one historical FDA dataset and should not be published as an HMTc row-standard aggregate by itself.

## Limitations

- The dataset is apple juice only; it does not resolve non-apple fruit juices or full not-canned fruit-juice aggregation.
- The table does not make current-market claims or brand rankings.
- `TR` handling creates a documented lower-bound summary, not a source-reported percentile.
- Total arsenic remains separate from inorganic arsenic, and DMA/MMA are not combined into the iAs value.

## Wiki Pages Updated On Ingest

- [[products/fruit-juices-apple-containing]]
- [[products/fruit-juice-not-canned]]
