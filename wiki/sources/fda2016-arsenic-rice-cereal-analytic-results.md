---
type: source
cite_key: fda2016-arsenic-rice-cereal-analytic-results
title: "Analytical Results: Inorganic Arsenic in Infant/Toddler Foods (2016)"
authors: [US Food and Drug Administration]
year: 2016
publication: "US Food and Drug Administration"
doi: null
no_doi_assigned: true
access_url: "https://www.fda.gov/food/risk-and-safety-assessments-food/arsenic-rice-and-rice-products-risk-assessment"
source_type: gov-data
evidence_tier: A
license: "public-domain-us-government"
raw_path: raw/reports/fda2016-arsenic-rice-cereal-analytic-results.pdf
sha256: 1acf9b643bc7bfc34fe1853315f35f1f1cd0bf883996dd7aae0b73b6c4d16329
access_date: 2026-05-12
metals: [iAs]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]", "[[products/fruit-purees]]", "[[products/fruit-snacks]]"]
matrices: [infant-rice-cereal, infant-multigrain-cereal, infant-non-rice-cereal, toddler-foods, juices, fruit-snacks]
jurisdictions: [US]
sample_n: 547
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# FDA 2016 — Analytical results: inorganic arsenic in infant/toddler foods

## Overview

This is the sample-level analytical results companion dataset to the FDA 2016 Arsenic in Rice and Rice Products Risk Assessment Report, providing individual iAs measurements for 547 infant and toddler food samples across 17 product categories including rice-based cereals, non-rice cereals, multigrain cereals, juices (grape, pear, peach, apricot), oat rings, peanut butter, quinoa, raisins, teething biscuits, toddler puffs, stage 2 toddler foods, and whole fruits. The dataset gives product category, country of origin (often "Not Specified"), and sample description for each row. The 29-page tabular document is the raw data underlying the summary statistics in the risk assessment report, enabling per-sample iAs traceability.

## Key numbers

**Summary averages from the dataset (matching FDA 2016 risk assessment):**

| Product Category | Average iAs (ppb) | Range iAs (ppb) | n |
|---|---|---|---|
| Infant rice cereal (rice only) | 103 | 20.8–176 | 76 |
| Infant multigrain cereal | 30.0 | 22.2–49.6 | 6 |
| Infant non-rice cereal | 13.9 | 3.5–68.3 | 30 |
| Toddler puffs | 53.9 | 16.4–145 | 31 |
| Teething biscuits | 44.4 | 17.0–71.5 | 27 |
| Oat ring cereal | 17.2 | 4.4–59.6 | 30 |
| Raisins | 8.1 | 3.0–22.6 | 23 |
| Quinoa | 7.9 | 0.3–49.0 | 30 |

Brown rice cereal samples: cluster 87–176 ppb iAs (higher end). White rice cereal samples: cluster 75–112 ppb iAs (lower end). Organic brown rice cereal samples: some exceed 120 ppb (range up to 176 ppb in dataset). Non-rice infant cereals: majority report as trace amounts TR(3.5)–TR(28.7), with oatmeal-based samples showing more variation.

Values below detection limit reported as TR (trace, with detected concentration in parentheses) or as <LOD; the risk assessment uses half-LOD substitution for below-detection samples.

## Methods (brief)

ICP-MS with HPLC speciation for inorganic arsenic (iAs = As(III) + As(V)). Samples collected and analyzed as part of FDA's Closer to Zero analytical survey work 2011–2013 and 2015 (two sampling periods). Country of origin listed as "Not Specified" for the majority of rice cereal samples; products purchased from U.S. retail. Analytical results below detection limit recorded as TR (trace) with detected value or as <LOD.

## Limitations

Country of origin of grain is not available for most rice cereal samples (labeled "Not Specified"), preventing geographic breakdown of the iAs distribution. The dataset is cross-sectional over two periods (pre-2013 and 2015) and reflects the market before FDA's 100 ppb action level was finalized (2020). Organic brown rice cereal samples show higher iAs than conventional rice cereal in this dataset — an important finding given market growth of organic rice cereals. "Trace" (TR) values are estimated concentrations between the LOD and LOQ; they have greater analytical uncertainty than fully quantifiable values.

## Implications

- Certification: The row-level data here is the source underlying FDA's 103 ppb average for infant rice cereal. Useful for constructing a full distribution (not just average) of iAs in infant rice cereal. The brown rice / organic brown rice vs white rice split in this dataset is directly relevant to HMT&C infant-cereal subcategory designation.
- Courses: The per-sample tabulation is the most granular public dataset on iAs in U.S. infant food categories; useful for teaching data interpretation and how averages can mask range.
- App: Note only — contamination_profile for rice/infant-rice-cereal. Brown rice infant cereal runs substantially higher iAs than white rice cereal; organic brown rice cereal shows some of the highest individual values (up to 176 ppb iAs).
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[metals/arsenic]]
- [[ingredients/rice]]
- [[products/infant-rice-cereal]]
- [[regulations/fda-ctz-iAs-cereal-100ppb]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [3859dbf11](https://github.com/paleofoundation/heavymetalindex/commit/3859dbf11) | 2026-05-12 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
