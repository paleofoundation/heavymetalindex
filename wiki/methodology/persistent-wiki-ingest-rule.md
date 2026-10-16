---
type: methodology
methodology_id: persistent-wiki-ingest-rule
title: Persistent Wiki Ingest Rule
audience: [regulator, researcher, consumer, app]
updated: 2026-09-10
sources: 0
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating methodology persistent wiki ingest rule research context."
---

# Persistent Wiki Ingest Rule

The Heavy Metal Index compiles source evidence into a lasting, cross-linked reference. A stored paper or searchable source record is the beginning of that process. A completed ingest connects the original material, a critical source summary, structured findings, and the pages where those findings belong.

## What a completed ingest contains

A completed ingest preserves the original source and its provenance, records what the source can support, captures its usable findings, and connects them to the relevant evidence pages. The record includes:

1. An identifiable original artifact, its access location, retrieval provenance, file hash, rights information, and evidence tier.
2. A canonical source page describing the study or instrument, methods, key findings, and limitations.
3. An Evidence Fitness assessment stating the uses the source supports and those it does not.
4. Structured values or claims with source location, units, measurement basis, analyte species, statistic type, sample scope, and review status.
5. Documented connections to the appropriate ingredient, product, metal, regulation, testing, health, microbiome, or contextual evidence pages.
6. Updated public summaries and downloads, with checks and a versioned record of the change.

A source that cannot be fully extracted or placed retains an explicit gap or review record. Unresolved evidence is not silently dropped, and a partial source record is not counted as a completed ingest.

## Original evidence and traceability

Original source files are preserved. Normalized values remain traceable to the reported value, its location in the source, and any unit or basis conversion. A source page is a guide to the evidence; it does not replace the paper, dataset, or legal instrument.

Public numeric claims require reviewed evidence. Candidate extraction and pending source records remain outside published findings until their extraction, interpretation, and placement have been reviewed. A higher evidence tier does not remove the need to inspect the particular measurement or claim being used.

## Extraction and adjudication

Extraction records what the source says: sample counts, concentrations, means, medians, ranges, maxima, reporting limits, basis labels, and analyte names. Tables and machine-readable datasets are parsed or transcribed reproducibly wherever possible.

Adjudication determines what those facts can support. It considers product and ingredient fit, species, preparation, measurement basis, censoring, analytical methods, sampling design, geography, and collection period. AI-assisted review resolves routine questions when the source supplies enough information and leaves a trace of each material decision. Missing primary material, low-confidence extraction, conflicting policy, and consequential judgment calls receive exception review.

A concentration and its reporting limit are distinct facts. Reported zeros, non-detects, and values below a reporting limit retain the source's meaning. A non-detect is not evidence that the substance is absent, and a reporting limit is not a measured concentration. When the source cannot distinguish those states, the uncertainty remains explicit.

## Occurrence statistics

Studies need not report a particular percentile to be useful. Extraction preserves sample-level results where available and every reportable summary statistic, including means, medians, ranges, maxima, standard deviations, interquartile ranges, and lower- and upper-bound estimates for censored data.

Summary-only studies remain occurrence evidence. Their reported summaries are retained as summaries. A distribution reconstructed from them is a modelled result, not a set of newly observed samples. Such reconstruction requires disclosed distributional assumptions, the available sample count and dispersion information, and an assessment of fit and sensitivity. Insufficient information for a particular reconstruction is a modelling limitation, not a reason to discard the reported findings.

Source-reported and derived descriptive statistics are distinguished. Each derived percentile or other summary identifies the input data, statistic definition, weighting, censoring treatment, and any conversion. A percentile from a study or a descriptive synthesis is not a certification limit or a compliance determination.

## Combining evidence

Evidence is combined only after defining the relevant product or ingredient, market, collection period, matrix, preparation, basis, species, sampling frame, and method criteria. Material differences between jurisdictions, markets, product forms, or methods are retained through separate summaries or documented sensitivity analyses.

Total arsenic and inorganic arsenic remain distinct, as do total mercury and methylmercury, and total chromium and hexavalent chromium. Wet weight, dry weight, as-sold, prepared, and reconstituted measurements are not silently mixed. Any conversion names its inputs and assumptions. A prepared composite food does not automatically represent an unprepared ingredient or a different commercial formulation.

The Index reports literature and verified regulatory instruments. Regulatory comparisons require the applicable primary instrument and a matching scope, species, and basis. Separate certification decisions do not change what the underlying literature is reported to show.

## Destination pages and coverage gaps

Evidence needs a stable destination before it is published. When a supported ingredient or product has no page, a clearly identified provisional page provides that destination. A provisional page does not imply a completed synthesis, a certification category, or a numeric finding.

A dataset covering many foods is assessed across its full scope. Every usable row or grouped finding receives an appropriate destination or an explicit explanation of why it cannot yet be placed. Publishing one source summary does not complete the ingest of a multi-food dataset.

## Public source, ingredient, and product pages

Source pages present findings, methods, Evidence Fitness, limitations, related evidence, and available data downloads. Verification and correction notes explain changes that matter to a reader, such as a corrected denominator or a clarified measurement basis. Operational work logs remain separate from the public narrative.

Ingredient and product pages summarize their reviewed evidence with traceable sources and visible gaps. Structured downloads, measured-value summaries, and source-coverage records should agree. A citation to a dataset should lead to the relevant downloadable data when redistribution is permitted, not merely to a metadata inventory.

An empty measurement cell is a data gap, not a zero. A source has not established absence simply because it did not measure an analyte. Study counts and confidence descriptions reflect the evidence actually used, and profile values are updated through a documented synthesis of the contributing evidence.

## Review, corrections, and reuse

Maintenance checks look for unplaced findings, missing source provenance, mismatched public tables and downloads, stale regulatory references, conflicting summaries, and pending evidence presented as reviewed. Structural checks establish that records and links exist; scientific review establishes that the source supports the claim and that its interpretation is appropriate.

Questions start from the compiled reference and its structured evidence, returning to original sources for verification or missing extraction. New findings and corrections are incorporated into the persistent pages and version history so later readers can inspect and reuse the result.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [970e09b653](https://github.com/paleofoundation/heavymetalindex/commit/970e09b653) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added |
<!-- END: hmi-page-history -->
