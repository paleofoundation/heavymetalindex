---
title: Methodology
description: Selection, extraction, quality-assurance audit, error categorization, and correction procedures used in the Heavy Metal Index.
audience: [regulator, educator, researcher]
updated: 2026-05-03
status: stub
---

This page describes how the Heavy Metal Index is built. It is the first page sophisticated readers are expected to consult, and is maintained as a living document. Substantive changes to methodology are logged; the version history in git is the authoritative record.

## Current status

The Heavy Metal Index is in pre-launch development. The methodology described below reflects the intended final state. Sections that remain under construction are marked as such. A publicly verifiable quality-assurance audit with error-rate statistics will precede the move from pre-launch to general availability.

## Scope

Coverage is scoped to lead, cadmium, inorganic and total arsenic, methylmercury and total mercury, nickel, aluminum, chromium, and tin, as these metals occur in food, food ingredients, supply-chain inputs (soil, water, fertilizers, equipment, packaging), remediation approaches, and governing regulatory instruments. Clinical metallomics in medicine, occupational exposure in industrial settings, and environmental exposure outside the food system are out of scope; a substantial portion of that material lives at [WikiBiome](https://wikibiome.com).

## Source selection

The corpus draws primarily from peer-reviewed journal literature (Tier A), supplemented by government and intergovernmental regulatory and scientific documents from the United States Food and Drug Administration, the European Food Safety Authority, the World Health Organization, the United States Environmental Protection Agency, and Codex Alimentarius (also Tier A). Industry white papers, non-governmental organization reports such as those from the Environmental Working Group and Healthy Babies Bright Futures, and reputable trade publications are admitted as Tier B with explicit attribution. News coverage and blog material are treated as Tier C; such material is used as a lead to verify against primary sources, not as evidence in its own right.

A detailed inclusion-and-exclusion protocol with the full search strategy, database coverage, and handling of preprints, retractions, and duplicates is forthcoming and will be published before general availability.

## Evidence Fitness

The Index uses an Evidence Fitness layer between source extraction and public synthesis. Evidence Fitness answers a narrow question: for this exact metal species, matrix, product type, statistic, unit, and source, what can this record support?

Internal records use six verdicts.

| Internal verdict | Public label | Meaning |
| --- | --- | --- |
| EF-1 | Strong occurrence evidence | The source directly reports the relevant occurrence percentile or equivalent concentration statistic for the matching metal species and matrix. |
| EF-2 | Reconstructable dataset | The source provides sample-level or distribution-level data that can be deterministically reconstructed. |
| EF-3 | Modeled or limited evidence | The source provides means, ranges, maxima, medians, source-level summaries, pooled baskets, exposure estimates, or other limited statistics. |
| EF-4 | Context only | The source is relevant but cannot support a concentration finding for the exact cell. |
| EF-5 | Data gap | No usable occurrence evidence is available for the cell currently under review. |
| EF-X | Rejected/unusable | The record is wrong-matrix, wrong-metal, unverifiable, superseded, fabricated, or otherwise unusable. |

The public Index displays the public labels rather than the internal EF codes unless the code itself matters for audit context. A data gap is a real finding. It means the Index has not approved evidence for that metal/product/matrix combination; it does not mean the product type is clean.

## Extraction

Extraction separates deterministic operations from interpretive operations by design. Deterministic work (portable document format parsing, structured table extraction, field population from clearly labelled data, cross-reference validation) is handled programmatically in Python. Interpretive work (synthesis of findings, classification of ambiguous studies, relationship identification) is handled by a human reviewer working with a language model as drafting assistant, under the constraints described below. The architectural separation is enforced in code and reflected in the commit history.

Every extracted data point includes a provenance link to the source document with sufficient specificity that a hostile reader can verify it in the original (page number, table number, or quoted passage as appropriate). Where provenance cannot be established to this standard, the data point is not published.

The structured evidence build is tracked under `data/evidence/`. The private `raw/markdown/` corpus remains excluded from git; tracked evidence records contain source handles, candidate values, review states, public labels, and provenance fields only.

The staged PDF backlog workflow is documented in [[methodology/raw-reports-studies-ingest-workflow]]. It requires `raw/reports` to be inventoried and reconciled before the broader `raw/studies` backlog is promoted.

## Compiled wiki build

The Heavy Metal Index is built as a persistent compiled wiki rather than a query-time retrieval layer. Sources move through four layers: immutable raw corpus, structured evidence register, routed wiki pages, and schema-plus-automation rules. A file is not considered ingested because it is locally present or searchable; it is ingested only when its evidence has been extracted, routed, and attached to the correct persistent wiki surfaces.

The current ingest contract for this build is documented in [[methodology/persistent-wiki-ingest-rule]]. That rule governs source-page creation, stub creation, evidence-register promotion, product-page output regeneration, and the boundary between deterministic extraction and interpretive synthesis.

## Review states and publication

Machine extraction is not publication. The Index distinguishes three important states.

`machine_extracted` records may create internal queues and draft evidence registers.

`approved_for_internal` records may feed the HMT&C standards program, where separate standards methodology determines certification limits.

`approved_for_public` records are required before a newly generated value or claim appears on a public Index page as an affirmative evidence statement.

Existing public pages may contain manually reviewed, source-cited synthesis while value-level JSONL backfill is still in progress. New automation must not use that transitional state to bypass review: machine-extracted concentration values stay out of public prose until promoted.

## HMT&C firewall

The Heavy Metal Index and HMT&C use the same evidence base but do not share publication rules. The Index reports literature, occurrence, regulatory, toxicology, and exposure evidence. HMT&C uses approved evidence downstream to decide certification standards.

HMT&C thresholds are not evidence for public Index claims. They must not be used to prove that a metal concentration is safe, typical, acceptable, or literature-supported. When HMT&C uses the Index, the direction is one-way: HMT&C cites the Index for the evidence baseline, then applies its own standards methodology.

## Category 1 pilot

The first evidence-first pilot is HMTc Category 1, Infant and Child Foods, ages 0-5. The pilot tracks 16 product rows across the following analytes: Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Al, Sn, Cr-total, and Cr-VI.

The pilot register starts as a row-metal coverage map and is updated as source-backed records are reviewed. Missing cells stay visible as data gaps. Partial source evidence, such as ranges, maxima, means, or pooled baskets, may support context or limited evidence labels without becoming a final certification distribution.

A p90 candidate does not need to be U.S.-based. The defensibility requirement is that the selected or aggregated evidence pool is product-fit, analytically comparable, documented by source, and strong enough to support the standards workflow's confidence target, currently 95% confidence. Jurisdiction is retained as metadata and may affect weighting, applicability notes, or later regional variants, but it is not by itself a reason to exclude otherwise valid occurrence evidence from the aggregate pool.

## Quality assurance

A pre-launch audit will sample extracted records at a rate sufficient to produce published error-rate statistics before the site moves to general availability. Audit methodology, sample size, reviewer qualifications, error taxonomy, and threshold for launch are under development and will be documented on this page prior to the audit. Audit results and remediation actions will be public.

After launch, ongoing quality assurance comprises: periodic re-sampling of published records; lint passes across the wiki detecting contradictions, stale claims, orphaned pages, missing cross-references, and evidence-tier imbalances; and a standing correction-reporting channel accessible from every page.

## Corrections and versioning

When an error is identified, the affected pages are corrected and the correction is logged in the [log](/log). The correction appears in the page history (visible in the git commit log for the repository); material corrections are also summarized on the page itself at the foot of the affected section. Published regulatory values are never rounded, harmonized, or silently substituted; the exact value from the cited agency source is preserved, with conversions to comparable units shown explicitly where needed.

## Human review

A human review layer is a non-negotiable part of this project. Pure algorithmic extraction at scale has known failure modes that have been documented during the pipeline's development, including numeric hallucination, silent regulatory value substitution, and citation fabrication. The review process, the reviewer roster, the sign-off protocol, and the dispute-resolution procedure are under development and will be documented prior to launch.

## Licensing and access

The Heavy Metal Index is operated by the Paleo Foundation (Cyprus) and is published for public research access under terms that distinguish non-commercial research use from commercial bulk access. The European Union's database-rights framework applies. The terms of use published at [terms](/terms) govern use of the site and its content. Commercial licensing for bulk access or derivative works is available by arrangement with the Paleo Foundation.
