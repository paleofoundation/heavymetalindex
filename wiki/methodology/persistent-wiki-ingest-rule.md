---
type: methodology
methodology_id: persistent-wiki-ingest-rule
title: Persistent Wiki Ingest Rule
audience: [regulator, researcher, standards, app]
updated: 2026-08-12
sources: 0
---

# Persistent Wiki Ingest Rule

## Overview

The Heavy Metal Index is not a query-time file bucket. It is a persistent, compiled wiki that sits between the raw source corpus and every downstream use: public product pages, ingredient pages, metal pages, standards development, retailer review, quality-control operations, legal due diligence, and Ask the Index.

The operating rule is simple: a source is not "ingested" because a PDF exists locally, because a source page exists, or because a language model can retrieve the file later. A source is ingested only when its evidence has been compiled into the Index's persistent structures and routed to the correct wiki destinations.

## Core Build Pattern

The current Heavy Metal Index build has four layers.

1. `raw/` is the immutable source-of-truth corpus. Claude reads from it and never edits it.
2. `data/evidence/` is the structured evidence register. This is where deterministic extraction, routing, candidate values, approved values, review states, gap reports, and audit files live.
3. `wiki/` is the persistent knowledge base and public publishing layer. Source pages, product pages, ingredient pages, regulation pages, metal pages, methodology pages, and query pages all live here.
4. `CLAUDE.md` plus the ingest scripts are the schema and automation layer. They define what the wiki is allowed to say, how evidence is routed, and what completion means.

This means the Index is not run as "upload PDFs and let retrieval rediscover them later." It is run as "compile once, preserve, cross-link, and reuse."

## AI Adjudication Rule

The default actor for routine evidence adjudication is the AI ingest system. When a source reports enough information, Codex must determine product row fit, basis, analyte species, statistic type, units, censoring treatment, and routeability, then record those decisions in structured evidence and audits.

Humans supply missing source material, define governance rules, and review exceptions. They should not be treated as the primary mechanism for routine row sorting, because manual sorting is less reproducible and easier to misapply than logged, repeatable AI adjudication.

## What Counts as an Ingest

A source counts as ingested only when all applicable steps below are complete.

- A canonical source page exists at `wiki/sources/<cite-key>.md`, with provenance, access, hash, license, and evidence-tier metadata.
- The source has been classified for Evidence Fitness, including what it can support and what it cannot support.
- Deterministically extractable values or claims have been written to the evidence register with explicit basis, species, unit, statistic type, and row-fit metadata.
- The evidence has been routed to the correct wiki page family: products, ingredients, regulations, metals, testing, health, microbiome, or context-only source documentation.
- If a required destination page does not yet exist, create the stub before the finding is published. This is mandatory for ingredient pages and expected for product, regulation, and metal pages when the finding needs a public home.
- Any affected generated product outputs have been regenerated.
- The ingest is logged, checked, and committed.

If a source cannot yet be placed cleanly, it still must leave a persistent trace in the system: AI adjudication queue, routing audit, gap report, context disposition, or candidate-only evidence record. Silent drops are not allowed.

## Deterministic Boundary

Numeric extraction should be deterministic wherever the source allows it. Tables, sample sizes, means, medians, maxima, ranges, regulatory thresholds, basis labels, and analyte names should be parsed or transcribed as facts, not guessed by reasoning.

This boundary is not a ban on AI reasoning. It separates two jobs:

- extraction records what the source says and what can be calculated reproducibly;
- adjudication reasons over product fit, basis comparability, analyte species, statistic usability, Evidence Fitness, and occurrence-evidence completeness. Certification-limit completeness is evaluated separately by the sovereign-government compiler.

The reason for the separation is defensibility. A later reviewer should be able to distinguish a copied source value from an AI row-fit decision, inspect both, and reproduce the route without relying on hidden chat context.

Reasoning belongs in a different layer:

- deciding row fit;
- distinguishing direct occurrence evidence from context-only evidence;
- explaining contradictions across sources;
- deciding what belongs on which public page;
- documenting what remains missing.

When a statistic cannot be extracted deterministically, the wiki should say that the value is pending, incomplete, or context-only rather than inventing a polished-looking output.

## Occurrence-Distribution and Certification Boundary

Individual studies are not expected to report any particular percentile. During ingest, capture the source facts: sample-level values when available, sample size, basis, species, units, censoring, geography or market, time period, sample frame, and every source-reported statistic that can be verified. Means, medians, ranges, maxima, IQRs, standard deviations, and lower- or upper-bound censored summaries remain useful evidence. Summary-only sources may contribute to descriptive occurrence distributions through the documented moment-matching method; they are not excluded merely because they lack sample-level values.

Source-level and pooled percentiles are occurrence evidence. They characterize distributions, support category comparisons, help prioritize surveillance and sourcing work, and expose evidence gaps. They do not select an initial HMTc certification value and they do not determine certification status.

The current HMTc initial method is government-limit-only:

1. Identify the strictest applicable maximum set by a credible sovereign government.
2. Preserve product-form, formulation, analyte-species, and native-basis distinctions. The 8:1 powder-to-liquid conversion applies only within infant formula.
3. If no government regulates the exact cell, use a disclosed read-across from the nearest applicable sovereign value, or an `n/m` determination with its control method where the analyte is not material.
4. If none of those routes is defensible, keep the cell in development rather than deriving a limit from occurrence evidence.

After publication, a separate Standards Ratchet may tighten the current value using eligible HMTc certified-lot findings. External HMI occurrence studies do not enter that calculation. The ratchet requires two consecutive annual reviews in which the capped combined Status A and Status B trigger pool has P80 at or below 80% of the current limit and at least 50% of trigger-pool SKUs have qualifying lots at or below 60% of the current limit. No licensee may contribute more than 25% of trigger-pool SKUs. The new limit is the greater of the Status A P80 or 80% of the current limit, so no event reduces a limit by more than 20%; transition is 12–18 months.

## Occurrence Pool Rule

Before calculating any descriptive aggregate, define and record the pool. The definition must state the product row, geography or market, time period, matrix and basis, analyte species, sample frame, method comparability, censoring rule, and inclusion/exclusion criteria.

Occurrence pools are jurisdiction- and market-aware. If the characterization targets the United States, US-market samples are primary unless the analysis explicitly defines another design. If US-market values materially differ from Nigeria, Portugal, the EU, or another market, stratify and document the difference rather than silently averaging markets. Non-target-market evidence can remain useful as context, a prior, a gap signal, or a sensitivity check; cross-market pooling requires an auditable rationale.

## Stub-First Rule

The wiki must always have somewhere stable for new evidence to attach.

- If an ingredient appears in a routeable source and no ingredient page exists, create the ingredient stub first.
- If a product category is directly supported by source evidence and no product page exists, create the product-category stub first.
- Regulations are created on first encounter because the exact rule identifier is itself part of the evidence.
- Source pages are never optional.

This prevents the ingest pipeline from discarding evidence simply because the destination page family was not created yet. Missing pages are backlog markers, not reasons to lose data.

## Product-Page Contract for This Build

Product-category pages in the current build are layered rather than monolithic.

When structured product evidence exists, the page should expose three complementary public surfaces:

1. The standards evidence matrix: a per-metal summary of loaded source values, regulatory reference values, source pages, and remaining follow-up.
2. The measured values ledger: a download-first summary that points to row-level structured values.
3. The routing audit: a downloadable view of sources that are routed to the product but still need extraction, AI row-fit adjudication, promotion, or documentation.

These layers should agree with one another. The download artifacts are not optional sidecars; they are part of the public traceability contract. If the page shows source-backed evidence, the corresponding structured CSV and routing outputs should exist when applicable.

## Ingredient-Page Contract for This Build

Ingredient pages are long-lived synthesis surfaces and app primitives. Each ingredient page must be born with a valid machine-readable stub state rather than as an empty placeholder.

That means:

- `contamination_profile` entries begin in `pending` state with null values;
- `n_studies`, `last_reviewed`, and `last_full_resynthesis` remain explicit;
- data gaps are represented as data gaps, not as absence of evidence;
- source-backed findings can be attached incrementally as new papers arrive.

The app, standards workflow, and future Ask the Index features depend on this stability.

## Query Rule

Queries should start from the compiled layers, not from the raw corpus by default.

The preferred order is:

1. relevant wiki pages;
2. the evidence register and generated exports;
3. source pages;
4. raw source files only when necessary for verification or missing extraction.

Good answers should often be filed back into the wiki as new query or briefing pages so that synthesis compounds rather than disappearing into chat history.

## Lint Rule

Linting is part of ingest maintenance, not a separate polish pass.

Lint should check for:

- source pages with no routed wiki destination;
- routeable values stranded in candidate-only files;
- product pages whose CSV exports do not match the visible page layers;
- ingredient findings with no ingredient stub;
- product-routed sources missing from product matrices or routing audits;
- claims with no source page provenance;
- stale regulatory values;
- contradictions or superseded claims that were not surfaced.

## Automation Target

The intended end state is local-first automation:

- Karen adds source files to the raw corpus;
- the pipeline inventories, hashes, matches, extracts, routes, updates pages, regenerates outputs, and writes any unresolved queues;
- the system tells Karen what remains missing, what needs a better source, and what needs review.

The user should not need to keep handing the same paper back to the system for repeated ad hoc ingest attempts. Re-ingest should be a pipeline repair path, not the normal user workflow.

## Non-Negotiables

- No public numeric claim from `machine_extracted` or candidate-only records without promotion.
- No silent substitution of basis, species, or regulatory value.
- No silent omission of routed sources.
- No source counts as ingested if its evidence is stranded outside the persistent wiki structures.
- No one-off manual product-page fix if the behavior belongs in the central generator.

That is the Heavy Metal Index version of an LLM-maintained wiki: persistent, routed, auditable, and cumulative.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [970e09b65](https://github.com/paleofoundation/heavymetalindex/commit/970e09b65) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
<!-- END: hmi-page-history -->
