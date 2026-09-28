---
title: Audit dashboard
description: Auto-regenerated transparency dashboard. Every dimension of the wiki's Cochrane-level defensibility is scored here, with cross-links to the detail audit files.
audience: [regulator, educator, researcher, brand-legal, brand-qa, journalist, external-reviewer]
updated: 2026-08-11
---

# Audit dashboard

This dashboard is auto-regenerated on every build from the wiki's audit harness. It is the single transparency surface for reading "what is the current Cochrane-level defensibility of the wiki, by dimension." External reviewers, regulatory affairs, and brand legal teams auditing the wiki should land here.

Generated: **2026-08-11**.  Baseline snapshot: [[audits/2026-08-11-baseline|2026-08-11-baseline]].

## Scorecard

| Dimension | Score | Status |
|---|---:|:---:|
| Taxonomy v2.0 coverage (destination pages exist for HMTc rows) | 347 / 356 (97%) | WARN |
| source routing (unresolved source routings) | 8 unresolved | FAIL |
| Routing rows generated | 6443 | — |
| Ingredient mandatory sections (non-stub pages) | 229 / 230 (100%) | PASS |
| Product mandatory sections (non-stub pages) | 255 / 280 (91%) | WARN |
| Routing discipline check 1 (sources with product-shaped matrices but empty products[]) | 42 failures | FAIL |
| Routing discipline check 2 (HMTc-locked products with zero routed sources) | 40 of 388 | INFO |
| Source page DOI completeness | 8 missing | WARN |
| Claim provenance — body-prose numerical claims with traceable citation | 4160/4160 (100%) | PASS |

## Taxonomy v2.0 coverage

Total subcategories defined by HMTc Taxonomy v2.0: **356**.  Pages scaffolded or content-filled: **347** (97%).  Missing: **0**.

- Exact frontmatter declaration (hmtc_category + hmtc_row): 341
- Slug-alias match (frontmatter needs backfill): 6
- Missing destination pages: 0

Detail report: [[data/evidence/taxonomy-coverage-audit|data/evidence/taxonomy-coverage-audit.md]].  Full PRISMA-equivalent: [[coverage]].

## Source catalog
Source pages that name a product are listed on that product page. 6443 source-to-page links are on record.

- Unresolved targets (source frontmatter declares a slug that doesn't exist): **8**
- Malformed sources (missing required frontmatter fields): **2082** (non-blocking)

Detail: [[data/evidence/product_source_routing_audit|data/evidence/product_source_routing_audit.csv]], [[data/evidence/routing_unresolved|data/evidence/routing_unresolved.csv]], [[data/evidence/routing_malformed|data/evidence/routing_malformed.csv]].

## Routing discipline

**Check 1** — sources with product-shaped `matrices:` slugs but empty `products: []` and no `pending_category_lock` flag.  These are sources that should route to a product page but the frontmatter doesn't declare it.

- Sources scanned: 3065
- Sources with product-shaped matrices: 1208
- **Failures: 42**

**Check 2** — HMTc-locked product pages (carrying hmtc_category + hmtc_row) with zero routed sources.  These are scaffolded destinations that haven't received their Phase 1 ingest yet.

- HMTc-locked products: 388
- Products with no routed sources: 40

Check 2 is informational, not a failure: the scaffolded universe (277 taxonomy rows) is larger than the current ingested universe (897 source pages); rows without sources are the priority queue for the next ingest pass, not defects.

Detail: [[data/evidence/routing-discipline-audit|data/evidence/routing-discipline-audit.csv]].

## Ingredient mandatory sections

Non-stub ingredient pages must carry 8 H2 sections per CLAUDE.md Part 6 (Why this commodity accumulates / Heavy metal contamination profile / Ranges by source, region, and variety / Processing effects / Ingredient-derivative risk / Mitigation options / Regulatory limits that apply / Sources). Stubs (untouched pages with all-pending contamination_profile) are exempt.

- Non-stub passing: **229** of 230 (100%)
- Non-stub failing: **1**
- Stubs (exempt): 27

Detail: [[data/evidence/ingredient-mandatory-sections-audit|data/evidence/ingredient-mandatory-sections-audit.csv]].

## Product mandatory sections

Non-stub product-category pages must carry 10 H2 sections per CLAUDE.md Part 6 (Who this page is for / Methodology / Literature Evidence Summary / Source Evidence Inventory / Broad Product Context / Federal/Regulatory Limits / Levers to reduce contamination / How standards math uses this page / Historical recalls and enforcement / Sources). Stubs (scaffolded pages with no routed sources) are exempt.

- Non-stub passing: **255** of 280 (91%)
- Non-stub failing: **25**
- Stubs (exempt): 136

Detail: [[data/evidence/product-mandatory-sections-audit|data/evidence/product-mandatory-sections-audit.csv]].

## Source page corpus

Total source pages in wiki/sources/: **3065**.

By evidence tier:
- A: 1502
- B: 1460
- C: 103

By source type:
- academic-thesis: 1
- agency-report: 5
- agency_database: 1
- application_note: 1
- book-chapter: 6
- conference-abstract: 2
- conference-poster: 1
- conference-proceedings: 5
- dataset: 1
- dissertation: 1
- gov-data: 5
- gov-guidance: 18
- gov-regulation: 3
- gov-report: 87
- government: 5
- government-guidance: 2
- government-policy: 1
- government-regulation: 106
- government-regulatory: 8
- government-report: 46
- government_dataset: 5
- government_documentation: 1
- government_report: 6
- gray-literature: 2
- grey-literature: 1
- industry: 2
- industry-application-note: 3
- industry-guidance: 4
- industry-report: 5
- industry-white-paper: 1
- journal: 1
- journal-article: 3
- legal-filing: 1
- news-article: 2
- news-commentary: 1
- ngo: 1
- ngo-advocacy: 2
- ngo-briefing: 1
- ngo-educational: 1
- ngo-report: 11
- ngo-scoping-report: 1
- nonprofit: 5
- peer-reviewed: 2547
- peer-reviewed-journal: 1
- peer-reviewed-review: 12
- preprint: 10
- regulation: 11
- regulatory: 17
- regulatory-agency-report: 4
- regulatory-consultation-deck: 1
- regulatory-factsheet: 1
- regulatory-guideline: 2
- regulatory-opinion: 2
- regulatory-report: 1
- regulatory-standard: 4
- regulatory-standard-comparison: 1
- regulatory-user-manual: 1
- regulatory_guideline: 1
- regulatory_opinion: 1
- regulatory_report: 2
- research_brief: 1
- review: 63
- review-article: 1
- review-chapter: 1
- study: 1
- textbook-chapter: 3
- thesis: 9
- trade-publication: 2

DOI completeness: 3057 of 3065 sources have a DOI or a `no_doi_assigned: true` marker.  Missing DOI metadata: **8**.

## Claim provenance (trace-every-claim audit v1)

Every numerical claim in body prose on ingredient and product pages — matches the regex `<number> <unit>` where unit is one of ppb, ppm, mg/kg, µg/kg, µg/g, mg/L, µg/L, % — must trace to a citation in the same H2 section (before or after the claim is acceptable; sections are treated as logical units of provenance). Valid citations: `[[sources/...]]`, `[[regulations/...]]` (for regulatory limits), `[[testing/...]]` (for analytical-method floors).

- Total claims scanned: **4160**
- Supported: **4160** (100%)
- Unsupported: **0**

By page type:
- ingredient: 2233/2233 (100%)
- product: 1927/1927 (100%)

Cochrane target: **>95%** supported. Current baseline reports the gap to that target as a follow-up queue. The v1 audit does not yet verify that the cited source actually contains the claimed value (that requires PDF reading per claim) — only that a citation exists. v2 will add PDF-side verification.

Detail: [[data/evidence/claim-provenance-audit|data/evidence/claim-provenance-audit.csv]] (per-claim records with section context).

## What this dashboard does not yet measure

The audits above are the mechanical, automatable dimensions of defensibility. The wiki's Cochrane-level target also requires audits that this dashboard does not yet produce:

- **PDF-side verification.** Trace-every-claim audit v2 should follow each `[[sources/...]]` link to the cited source page, then to the raw PDF in `raw/markdown/<FM_id>/` or `raw/manual-fetch/...`, and verify the claimed value appears in the source. Today's v1 audit only verifies a citation exists; not that the citation is correct.
- **Synthesis reproducibility audit.** Pick 5 populated `contamination_profile` cells. Re-derive the values from contributing sources from scratch (without consulting the existing page). Compare. Target: 100% reconstructible. Not yet automated; requires deep reading of contributing sources.
- **Inter-rater reliability.** Re-ingest 20 source pages with a second extractor blind to the existing pages. Compare values + metadata. Compute κ. Target: κ > 0.7 extraction, > 0.8 inclusion. Not yet operationalized.
- **External peer review.** Three independent reviewers (toxicology academic, brand RA veteran, plaintiff's-side class-action attorney) read the wiki and report defects. The commissioning brief is drafted at [[docs/external-review-brief|docs/external-review-brief]] and is ready for Karen to send; reviewers not yet engaged.

These four audits are the Cochrane-level qualifying audits. They are documented here as gaps in the harness so the audit dashboard does not present a falsely complete picture.

## Audit harness provenance

This dashboard is generated by `tools/build-audit-dashboard.mjs` on every prebuild. Inputs:

- `data/evidence/taxonomy-coverage-audit.csv` (output of `tools/taxonomy/audit-coverage.mjs`)
- `data/evidence/product_source_routing_audit.csv`, `routing_unresolved.csv`, `routing_malformed.csv` (output of `tools/evidence/build-routing-audit.mjs`)
- `data/evidence/routing-discipline-summary.json` (output of `tools/audit-routing-discipline.mjs`)
- Live re-run of `tools/audit-ingredient-mandatory-sections.mjs` and `tools/audit-product-mandatory-sections.mjs`
- Direct read of `wiki/sources/*.md` frontmatter for evidence tier + DOI accounting
