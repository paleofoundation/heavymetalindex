---
type: methodology
methodology_id: persistent-wiki-ingest-rule
title: Persistent Wiki Ingest Rule
audience: [regulator, researcher, standards, app]
updated: 2026-05-03
sources: 0
---

# Persistent Wiki Ingest Rule

The Heavy Metal Index is not a query-time file bucket. It is a persistent, compiled wiki that sits between the raw source corpus and every downstream use: public product pages, ingredient pages, metal pages, standards development, retailer review, quality-control operations, legal due diligence, and Ask the Index.

The operating rule is simple: a source is not "ingested" because a PDF exists locally, because a source page exists, or because a language model can retrieve the file later. A source is ingested only when its evidence has been compiled into the Index's persistent structures and routed to the correct wiki destinations.

## Core Build Pattern

The current Heavy Metal Index build has four layers.

1. `raw/` is the immutable source-of-truth corpus. Claude reads from it and never edits it.
2. `data/evidence/` is the structured evidence register. This is where deterministic extraction, routing, candidate values, approved values, review states, gap reports, and audit files live.
3. `wiki/` is the persistent knowledge base and public publishing layer. Source pages, product pages, ingredient pages, regulation pages, metal pages, methodology pages, and query pages all live here.
4. `CLAUDE.md` plus the ingest scripts are the schema and automation layer. They define what the wiki is allowed to say, how evidence is routed, and what completion means.

This means the Index is not run as "upload PDFs and let retrieval rediscover them later." It is run as "compile once, preserve, cross-link, and reuse."

## What Counts as an Ingest

A source counts as ingested only when all applicable steps below are complete.

- A canonical source page exists at `wiki/sources/<cite-key>.md`, with provenance, access, hash, license, and evidence-tier metadata.
- The source has been classified for Evidence Fitness, including what it can support and what it cannot support.
- Deterministically extractable values or claims have been written to the evidence register with explicit basis, species, unit, statistic type, and row-fit metadata.
- The evidence has been routed to the correct wiki page family: products, ingredients, regulations, metals, testing, health, microbiome, or context-only source documentation.
- If a required destination page does not yet exist, create the stub before the finding is published. This is mandatory for ingredient pages and expected for product, regulation, and metal pages when the finding needs a public home.
- Any affected generated product outputs have been regenerated.
- The ingest is logged, checked, and committed.

If a source cannot yet be placed cleanly, it still must leave a persistent trace in the system: reviewer queue, routing audit, gap report, or candidate-only evidence record. Silent drops are not allowed.

## Deterministic Boundary

Numeric extraction should be deterministic wherever the source allows it. Tables, sample sizes, means, medians, maxima, ranges, regulatory thresholds, basis labels, and analyte names should be parsed or transcribed as facts, not guessed by reasoning.

Reasoning belongs in a different layer:

- deciding row fit;
- distinguishing direct occurrence evidence from context-only evidence;
- explaining contradictions across sources;
- deciding what belongs on which public page;
- documenting what remains missing.

When a statistic cannot be extracted deterministically, the wiki should say that the value is pending, incomplete, or context-only rather than inventing a polished-looking output.

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
3. The routing audit: a downloadable view of sources that are routed to the product but still need extraction, row-fit review, promotion, or documentation.

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
