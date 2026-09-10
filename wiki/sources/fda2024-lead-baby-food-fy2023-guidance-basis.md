---
type: source
cite_key: fda2024-lead-baby-food-fy2023-guidance-basis
title: "Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)"
authors: ["U.S. Food and Drug Administration"]
year: 2024
publication: "FDA analytical results table"
source_type: government_dataset
evidence_tier: A
license: us-government-work
raw_path: "raw/Digest/leadinfood-babiesyoungchildren-fy2023-12302024.pdf"
access_url: "https://www.fda.gov/food/metals-and-your-food/closer-zero-reducing-childhood-exposure-toxic-elements-foods-babies-and-young-children"
doi: null
no_doi_assigned: true
metals: [Pb]
ingredients: []
products: ["[[products/fruit-purees]]", "[[products/root-vegetable-purees]]", "[[products/non-root-vegetable-purees]]", "[[products/baby-cereals-dry-non-rice]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/mixed-meals-non-rice]]", "[[products/mixed-meals-rice-containing]]", "[[products/meat-and-poultry-purees]]", "[[products/infant-and-child-foods-master]]"]
matrices: [baby-food, processed-baby-food, fruit-puree, root-vegetable-puree, infant-cereal, mixed-meal, meat-and-poultry-puree]
jurisdictions: [US]
sample_n_total: 386
sample_n_notes: "386 processed baby-food samples from FY2023, used in the development of the Guidance for Industry: Action Levels for Lead in Processed Food Intended for Babies and Young Children, finalized January 2025. Sample numbers in the published table are non-sequential because unrelated samples (samples not used in the guidance) were collected in the same survey and excluded from the published guidance-basis subset."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-08
---

# FDA 2024 — Lead in Processed Baby Food (FY2023, guidance basis)

## Summary

This FDA analytical results table is the 386-sample dataset that directly supports the January 2025 final guidance for industry on action levels for lead in processed food intended for babies and young children ([[regulations/fda2025-lead-processed-baby-foods]]). Samples were collected in fiscal year 2023 across the locked baby-food categories that the guidance ultimately covers: fruit-based, vegetable-based (root and non-root), grain-based, mixed-ingredient, and meat-bearing infant foods. The dataset is the most recent and most directly guidance-relevant FDA Pb baby-food survey in the loaded corpus and is the empirical foundation for the 10 ppb action level for fruit, vegetable (excluding single-ingredient root vegetables), mixtures including grain- and meat-based mixtures, yogurts, custards/puddings, and single-ingredient meats; and the 20 ppb action level for single-ingredient root vegetables and dry infant cereals. The FY2023 sample numbers are non-sequential in the published table because unrelated FY2023 samples (samples not used in the guidance) were collected in the same survey and excluded from the published subset.

## Key numbers

The 386-sample dataset is sample-level with FDA Sample ID, Fiscal Year, baby-food category mapping, and Lead Concentration per sample. The guidance derived from this dataset (FDA 2025 final guidance) sets the action levels listed above, which should be read as the policy interpretation of this empirical distribution combined with feasibility and consumer-protection considerations. Per-product-row distribution statistics for this dataset would require structured extraction; that extraction has not yet been performed and is a candidate next step that would parallel the existing extractions for the FY2009-FY2024 TEP compliance dataset and the FY2023-FY2025 special infant-formula survey.

## Methods (brief)

Samples were collected by FDA in fiscal year 2023 under surveys of processed food intended for babies and young children. Lead was quantified by FDA EAM method 4.7 per the program's standard protocol. The published table is single-analyte (Pb only) and is the guidance-basis subset of a wider FY2023 baby-food survey.

## Limitations

The published table covers only the samples used in guidance development; the broader FY2023 survey is not fully published in this particular document. Per-product-row aggregation and benchmark-pool admission decisions depend on a per-sample mapping from the FDA category labels to HMTc Category 1 rows; this mapping has not yet been encoded as structured evidence and remains a near-term ingest task.

## Implications

- Certification: Direct primary-evidence basis for the FDA 2025 final guidance and a strong primary-evidence input for HMTc baby-food Pb row distributions. Sample-level admission to benchmark pools is appropriate after per-row mapping. The HMTc row-standard percentile is calculated after benchmark-pool admission, not at the source level; the FDA action levels (10 ppb, 20 ppb) operate as the lowest-loaded regulatory cap and bound the final HMTc value from above per the standards math discipline.
- Courses: This is the canonical example of a regulatory-development dataset feeding directly into a final guidance with traceable empirical basis. Useful for teaching the chain from primary surveillance to action-level policy.

## Related evidence
- [[regulations/fda2025-lead-processed-baby-foods]]
- [[products/fruit-purees]]
- [[products/root-vegetable-purees]]
- [[products/non-root-vegetable-purees]]
- [[products/baby-cereals-dry-non-rice]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/mixed-meals-non-rice]]
- [[products/mixed-meals-rice-containing]]
- [[products/meat-and-poultry-purees]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
| [9d0e44da36](https://github.com/paleofoundation/heavymetalindex/commit/9d0e44da36) | 2026-05-08 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
