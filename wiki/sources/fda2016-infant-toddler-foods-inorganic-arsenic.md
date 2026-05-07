---
type: source
cite_key: fda2016-infant-toddler-foods-inorganic-arsenic
title: "Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers"
authors: [U.S. Food and Drug Administration]
year: 2016
publication: "U.S. Food and Drug Administration"
source_type: gov-data
evidence_tier: A
access_url: https://www.fda.gov/media/157605/download
data_path: data/evidence/category5_grape_juice_inorganic_arsenic_samples.csv
summary_path: data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv
license: public-domain-us-government
metals: [iAs, tAs]
other_arsenic_species: [DMA, MMA]
products: [fruit-juices-non-apple, fruit-juice-not-canned]
product_metal_scope:
  fruit-juices-non-apple: [iAs]
  fruit-juice-not-canned: [iAs]
jurisdictions: [US-FDA]
sample_n: 61
updated: 2026-05-07
---

# FDA 2016 - Infant/Toddler Foods Inorganic Arsenic

## TL;DR

FDA's infant/toddler foods arsenic table reports a `Juice - Grape` category with 61 grape and grape-containing juice rows. The Index routes the quantified inorganic-arsenic cells to [[products/fruit-juices-non-apple]] as grape-category species-specific context and to [[products/fruit-juice-not-canned]] as broader juice context.

## Structured Extract

- `data/evidence/category5_grape_juice_inorganic_arsenic_samples.csv`: sample-level extract for the FDA `Juice - Grape` rows, preserving total arsenic, inorganic arsenic, DMA, MMA, serving-size values, NS cells, and blend-scope notes.
- `data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv`: deterministic quantified-cell iAs summary rows for non-apple juice and broader not-canned fruit-juice context.

## Key Numbers

| Scope | Source N | Quantified iAs rows | Quantified-cell p50 | Quantified-cell p90 | Quantified-cell p95 | Max |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| FDA `Juice - Grape` category | 61 | 58 | 11.2 ppb | 22.6 ppb | 25.6 ppb | 49.6 ppb |

FDA's summary table reports a category average of 12.4 ppb for `Juice - Grape`. Three full-table rows are `NS` for inorganic arsenic; the generated percentile summary does not substitute total arsenic for iAs and calculates deterministic nearest-rank percentiles only from the 58 quantified inorganic-arsenic cells.

## Evidence Fitness

This is EF-3 limited/reconstructable evidence. The full analytical table supports deterministic percentiles for quantified iAs cells, but row fit is not clean enough for an HMTc aggregate: FDA's grape category includes grape juice, white grape juice, grape blends, apple-grape blends, cranberry-grape blends, and one white-grape-peach mixed juice that FDA included in grape calculations.

## Limitations

- The dataset is a grape-category FDA table, not a complete non-apple juice market distribution.
- The quantified-cell p90 is a transparent internal occurrence summary, not a source-reported percentile and not an HMTc row-standard aggregate.
- `NS` rows remain not speciated; total arsenic is not substituted for inorganic arsenic.
- Apple-grape and white-grape-peach blend rows remain visible in the sample extract and must not be silently treated as pure non-apple juice.

## Wiki Pages Updated On Ingest

- [[products/fruit-juices-non-apple]]
- [[products/fruit-juice-not-canned]]
