---
type: source
cite_key: fda2016-infant-toddler-foods-inorganic-arsenic
title: "Analytical Results from Inorganic Arsenic in Rice Cereals for Infants, Non-Rice Infant Cereal and Other Foods Commonly Eaten by Infants and Toddlers"
authors: [U.S. Food and Drug Administration]
year: 2016
publication: "U.S. Food and Drug Administration"
source_type: gov-data
evidence_tier: A
doi: null
no_doi_assigned: true
access_url: https://www.fda.gov/media/157605/download
data_paths:
  - data/evidence/category1_fda2016_infant_cereal_ias_samples.csv
  - data/evidence/category1_fda2016_infant_cereal_ias_summary.csv
  - data/evidence/category5_grape_juice_inorganic_arsenic_samples.csv
  - data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv
license: public-domain-us-government
metals: [iAs, tAs]
other_arsenic_species: [DMA, MMA]
products: [baby-cereals-dry-rice-based, baby-cereals-dry-non-rice, fruit-juices-non-apple, fruit-juice-not-canned, "[[products/peanut-butter]]", "[[products/dried-fruit]]", "[[products/teething-and-snacks-non-rice]]", "[[products/fresh-fruit]]", "[[products/fruit-purees]]"]
matrices: [infant-rice-cereal, multigrain-cereal-with-rice, non-rice-infant-cereal, oat-ring-cereal, juice-grape, juice-apricot, juice-peach, juice-pear, juice-boxes-and-pouches, peanut-butter, quinoa, raisins, stage-2-toddler-foods, teething-biscuits, toddler-puffs, apples]
product_metal_scope:
  baby-cereals-dry-rice-based: [iAs]
  baby-cereals-dry-non-rice: [iAs]
  fruit-juices-non-apple: [iAs]
  fruit-juice-not-canned: [iAs]
jurisdictions: [US-FDA]
sample_n: 415
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-08
---

# FDA 2016 - Infant/Toddler Foods Inorganic Arsenic

## Overview

FDA's 2016 inorganic-arsenic dataset reports sample-level iAs (with paired total arsenic, DMA, and MMA) across product categories commonly eaten by infants and toddlers. The Index routes the dataset's sample-level subsets to the relevant locked HMTc rows: cereal-rice and multigrain-with-rice samples (n=82 combined) to [[products/baby-cereals-dry-rice-based]]; non-rice infant cereal (n=30, no rice ingredients) to [[products/baby-cereals-dry-non-rice]]; the `Juice - Grape` category (n=61) to [[products/fruit-juices-non-apple]] as grape-category context and to [[products/fruit-juice-not-canned]] as broader juice context. Per the corrected row-fit rule, the rice / non-rice cereal subcategorization is exact on both matrix axis (rice-presence) and format axis (dry infant cereal as sold) because FDA's footnotes 4-6 define each subcategory by ingredient composition.

## Structured Extracts

- `data/evidence/category1_fda2016_infant_cereal_ias_samples.csv`: sample-level iAs for FDA's `Cereal - Infant/Toddler (rice)` (n=76, all rice as only grain), `Cereal - Infant/Toddler (multigrain)` (n=6, contains rice and other grains), and `Cereal - Infant/Toddler (non-rice)` (n=30, oats/corn/wheat/multigrain with no rice). Trace `TR (x.x)` values preserved as reported.
- `data/evidence/category1_fda2016_infant_cereal_ias_summary.csv`: per-row distributional statistics derived from the sample-level extract above, for rice-based and non-rice cereal subcategories.
- `data/evidence/category5_grape_juice_inorganic_arsenic_samples.csv`: sample-level extract for the FDA `Juice - Grape` rows.
- `data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv`: deterministic quantified-cell iAs summary rows for non-apple juice and broader not-canned fruit-juice context.

## Key Numbers

### Cereal subsets (Category 1)

| Scope | FDA category | n | mean iAs | p30 | p50 | p90 | p100 (max) | Source range |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Rice-based subcategory pool (rice + multigrain-with-rice) | Cereal - Infant/Toddler (rice) + Cereal - Infant/Toddler (multigrain) | 82 | 97.8 ppb | 90.62 ppb | 99.40 ppb | 124.90 ppb | 176 ppb | 20.8 - 176 ppb |
| FDA `rice` subset alone (rice as only grain) | Cereal - Infant/Toddler (rice) | 76 | 103.1 ppb | 94.55 ppb | 100.50 ppb | 125.50 ppb | 176 ppb | 20.8 - 176 ppb |
| FDA `multigrain` subset alone (rice + other grains) | Cereal - Infant/Toddler (multigrain) | 6 | 30.1 ppb | 26.40 ppb | 26.80 ppb | 39.20 ppb | 49.6 ppb | 22.2 - 49.6 ppb |
| Non-rice subcategory pool (oats/corn/wheat/multigrain with no rice) | Cereal - Infant/Toddler (non-rice) | 30 | 13.9 ppb | 7.21 ppb | 10.35 ppb | 25.71 ppb | 68.3 ppb | 3.5 - 68.3 ppb |

Computed values match FDA's published category averages exactly (rice 103, multigrain 30.0, non-rice 13.9), confirming the sample-level extraction is faithful to the source table. p30, p50, p90, and p100 are computed by linear interpolation between sorted samples; trace `TR (x.x)` values are preserved as the reported numeric (FDA's table convention for trace at value `x.x`).

### Juice subset (Category 5)

| Scope | Source N | Quantified iAs rows | Quantified-cell p50 | Quantified-cell p90 | Quantified-cell p95 | Max |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| FDA `Juice - Grape` category | 61 | 58 | 11.2 ppb | 22.6 ppb | 25.6 ppb | 49.6 ppb |

FDA's summary table reports a category average of 12.4 ppb for `Juice - Grape`. Three full-table rows are `NS` for inorganic arsenic; the generated percentile summary does not substitute total arsenic for iAs and calculates deterministic nearest-rank percentiles only from the 58 quantified inorganic-arsenic cells.

## Evidence Fitness

EF-2 reconstructable A-tier sample-level evidence for the cereal subsets (rice + multigrain-with-rice; non-rice). EF-3 limited/reconstructable for the juice subset (the FDA grape category includes grape juice, white grape juice, grape blends, apple-grape blends, cranberry-grape blends, and one white-grape-peach mixed juice that FDA included in grape calculations).

## Limitations

- The cereal samples were collected during FDA's 2010-2013 surveys leading to the 2016 report; FDA has issued additional surveys since.
- Most non-rice infant cereal samples are at trace (`TR`) levels; the lower-bound percentile treatment retains TR values as numeric per FDA's convention rather than zeroing them.
- The `Juice - Grape` category includes apple-grape and white-grape-peach blends; rows must remain visible in the sample extract and not be silently treated as pure non-apple juice.
- Total arsenic is paired with iAs in the underlying full-results table but is not substituted for iAs anywhere in the structured extract.

## Implications

Certification: Direct A-tier sample-level iAs evidence for the rice-based and non-rice infant cereal subcategories, with adequate sample size and method credibility for HMTc Category 1 standards-setting use. Combined with [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]] (CC-BY peer-reviewed iAs in baby rice and rice cereals; n=29 baby rice + 53 rice cereals), this brings the iAs-in-rice-based-cereal evidence pool to two A-tier sources. The FDA action level of 100 ppb iAs for infant rice cereal ([[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]) is the applicable regulatory cap.

Courses: Strong example for teaching rice-vs-non-rice contamination differentials in infant foods and for the trace-value handling convention in regulatory data tables.

App: Supports rice-cereal vs non-rice-cereal differentiation in the contamination_profile cascade for the rice and non-rice ingredient pages.

Microbiome: No direct microbiome endpoint.

## Wiki Pages Updated On Ingest

- [[products/baby-cereals-dry-rice-based]]
- [[products/baby-cereals-dry-non-rice]]
- [[products/fruit-juices-non-apple]]
- [[products/fruit-juice-not-canned]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
