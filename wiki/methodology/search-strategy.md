---
title: "Search strategy and database coverage"
description: "The 10 academic databases queried for the Heavy Metal Index corpus, the dedupe protocol, the scoring rubric for auto-fetch, and the inclusion / exclusion criteria. The Cochrane-equivalent search-protocol publication."
audience: [regulator, brand-legal, brand-qa, researcher, journalist]
updated: 2026-05-28
status: living-document
---

# Search strategy and database coverage

This page is the Cochrane-equivalent search-protocol publication for the Heavy Metal Index. It documents which academic and grey-literature databases are queried, how candidate papers are deduped against the existing corpus, the scoring rubric that determines whether a paper is auto-fetched for ingest, and the inclusion / exclusion criteria. A reader auditing the defensibility of the Index — regulator, brand-legal expert, journalist, or competing standards body — should be able to land here and replicate the search.

The page describes the working pipeline as of the date in the frontmatter. The history of the pipeline is in [git](https://github.com/paleofoundation/heavymetalindex), which is the authoritative version record. Substantive changes are noted in [[log|wiki/log.md]].

## Databases queried

The Index runs a continuous, multi-database literature search via the `paper-lookup` tool, which wraps the public REST APIs of ten complementary databases. Coverage is intentionally redundant: a paper that is missed by one source is usually caught by another, and the cross-database dedupe step (below) is the protection against double-counting.

| Database | Scope | Role in the Index | Access |
| --- | --- | --- | --- |
| **PubMed** | Biomedical and life-sciences literature, MEDLINE-indexed | Primary source for toxicology, epidemiology, exposure assessment | NCBI E-utilities API |
| **PMC** (PubMed Central) | Open-access biomedical full text | Used for full-text extraction on a paper-by-paper basis when PMC carries the version of record | NCBI E-utilities API |
| **OpenAlex** | General scholarly works including books, datasets, software | Primary discovery surface for non-MEDLINE journals (Food Chemistry, Science of the Total Environment, EFSA Journal, etc.) | OpenAlex API |
| **Crossref** | DOI registration metadata, ~140M records | Required: DOI dedupe and canonical metadata recovery | Crossref REST API (polite pool) |
| **Semantic Scholar** | Cross-disciplinary citation graph, ~200M papers | Secondary discovery; citation-graph queries for forward and backward citation chains on high-priority papers | Semantic Scholar Academic Graph API |
| **Unpaywall** | Open-access status lookup keyed by DOI | Required: open-access URL discovery for auto-fetch eligibility | Unpaywall API |
| **bioRxiv** | Biology preprints | Used when a topic involves emerging methods or recent surveys not yet through peer review | bioRxiv API |
| **medRxiv** | Health-sciences preprints | Same role as bioRxiv for clinical / epidemiology topics | medRxiv API |
| **arXiv** | Physics, math, computer science, and quantitative biology preprints | Rarely used for the Index's food-and-supply-chain scope; reserved for methods papers (ICP-MS, XRF, sample-prep) | arXiv API |
| **CORE** | Aggregator of open-access repositories | Reserved for topics where the OA URL is needed but Unpaywall does not resolve | CORE API |

The polite-pool identifier for Crossref and Unpaywall is the operator email (`karen@paleofoundation.com`). The user-agent string sent on PDF fetches is `HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)`.

## Search topics

Search topics are derived in three ways.

**Gap-driven (autonomous).** A nightly daemon scans the wiki for ingredient × metal cells with `status: pending` or fewer than 5 contributing sources, derives a topic from the cell (ingredient name + metal + matrix + year window), and runs the search. The daemon-driven flow is OpenAlex-only and lives in `tools/wishlist/`. Audit logs are written to `data/evidence/autonomy/wishlist-*.csv`.

**Topic-driven (operator-triggered).** The operator can run `/discover topic="<free text>"` to fan out across all 10 databases for an explicit topic. The skill is defined in `.claude/skills/discover/SKILL.md` and audit-logs every run to `data/evidence/discovery/discover-<date>.csv`.

**Cell-driven (cross-cut).** The operator can run `/discover gap=<cell-id>` to target a specific ingredient × metal cell listed in `data/evidence/cells-needing-synthesis.csv`. The skill reads the cell, synthesizes a topic, and runs the multi-database search with the same downstream pipeline.

## Dedupe protocol

Every candidate paper from every database is checked against the existing corpus before being scored or fetched. The dedupe index is rebuilt from `wiki/sources/` and `data/evidence/autonomy/manual-fetch-tracker.csv` at the start of every discovery run (`tools/discovery/build-corpus-index.mjs`).

The dedupe rules, applied in order:

1. **DOI exact match** (case-insensitive). If a candidate's DOI matches an existing source page, the candidate is flagged `in_corpus` and not scored.
2. **Normalised title match** (lowercase, alphanumeric-only, whitespace-collapsed). Catches DOI-less preprints and version-of-record duplicates that share a title.
3. **Cite-key match against the manual-fetch tracker.** Catches papers already queued for ingest but not yet promoted to source pages. Flagged `queued_for_ingest`.

Only candidates that pass all three checks proceed to scoring. The audit log records the dedupe status of every candidate so a reviewer can verify that no duplicate was promoted.

## Scoring rubric for auto-fetch

For each novel candidate, the discovery pipeline computes a `recommend_score`:

| Signal | Weight |
| --- | ---: |
| Title contains both a metal term and a food / matrix term | +3 |
| Abstract contains both a metal term and a food / matrix term (and title scored 0) | +2 |
| Open-access URL available (via Unpaywall or CORE) | +1 |
| Publication year ≥ 2020 | +1 |
| Journal in the A-tier list (Food Chemistry, EHP, JAFC, STOTEN, FAC, Nature Food, Lancet, NEJM, JAMA, BMJ, EFSA Journal) | +1 |
| Title or abstract contains a negative keyword (biosensor, perovskite, transgenic, AMR, case report, etc.) | −3 |

Default auto-fetch threshold: **score ≥ 4 AND open-access URL available**. Candidates below threshold or without an OA URL are logged with their score and reason but are not fetched.

A-tier journal list and negative-keyword list are versioned with the discovery tools at `tools/wishlist/find-candidates.mjs` and `.claude/skills/discover/SKILL.md`. Changes to either are tracked in git.

## Inclusion and exclusion criteria

**Included** in the wiki corpus:

- Peer-reviewed primary research on the occurrence, exposure, toxicology, mitigation, or regulation of lead, cadmium, inorganic and total arsenic, methylmercury and total mercury, nickel, aluminium, chromium, hexavalent chromium, tin, antimony, or uranium in food, ingredients, supply-chain inputs (soil, water, fertilisers, equipment, packaging), or directly comparable matrices.
- Government and intergovernmental scientific opinions, risk assessments, regulatory guidance, action levels, total-diet surveys, and Total Diet Study programmes from FDA, EPA, EFSA, JECFA, WHO, Codex Alimentarius, ATSDR, OEHHA, FSANZ, China NHC, Mexico SSA, and equivalent national bodies.
- Systematic reviews, meta-analyses, and review chapters on the included scope.
- Industry, NGO, and consumer-organisation testing reports (Consumer Reports, Healthy Babies Bright Futures, Environmental Working Group, and similar) at category and ingredient level only; brand-level rankings are not reproduced (see [[editorial-standards|wiki/HMTc firewall]]).

**Excluded** from the wiki corpus:

- Clinical metallomics in medicine outside the dietary exposure pathway.
- Occupational exposure in industrial settings.
- Environmental exposure outside the food system (a substantial portion of which lives at [WikiBiome](https://wikibiome.com)).
- Brand-by-brand contamination tables, certificates of analysis, and internal lab data (these belong in the private brand-intelligence build, not the public Index).
- Single-case clinical reports without aggregate occurrence or exposure data.
- News commentary used as primary evidence (admitted only as a lead to verify against a primary source).

## Quality assessment (evidence tiers)

Every source page is assigned an `evidence_tier` (A / B / C) in its frontmatter. Synthesis claims lean A-tier; B-tier and C-tier sources are admitted with explicit attribution.

- **A-tier.** Peer-reviewed primary research and systematic reviews; government and intergovernmental scientific opinions and risk assessments; total-diet surveys and recurring monitoring programmes.
- **B-tier.** Industry white papers; NGO and consumer-organisation reports with disclosed methodology; reputable trade publications.
- **C-tier.** News coverage, blog material, conference abstracts without full text, and other sources used as leads rather than evidence in their own right.

The fine-grained Evidence Fitness layer (EF-1 through EF-X) used inside the structured evidence register is documented separately at [[methodology|wiki/methodology.md § Evidence Fitness]].

## Reproducibility

A reader who wants to reproduce a specific discovery run can:

1. Read the audit log at `data/evidence/discovery/discover-<date>.csv` for the run's full per-candidate decision trail.
2. Re-run the same topic via the `/discover` skill (`.claude/skills/discover/SKILL.md`) — the dedupe index and scoring rubric are deterministic given the same corpus state.
3. For the daemon-driven gap-fill flow, the equivalent logs are at `data/evidence/autonomy/wishlist-*.csv` and the gap-driven query construction is documented in `tools/wishlist/build-targeted-queries.mjs`.

The complete corpus dedupe index is rebuilt from on-disk state on every run (`data/evidence/discovery/corpus-index.json`) so no historical version is required to verify a current dedupe decision.

## What this page does not do

This page documents the search strategy. It does not document:

- The synthesis workflow (how source pages become ingredient and product page claims). See [[CLAUDE|CLAUDE.md § Part 9]].
- The routing layer (how source frontmatter fans out to product, ingredient, metal, and regulation destination pages). See [[CLAUDE|CLAUDE.md § Part 5b]] and the live audit at `data/evidence/product_source_routing_audit.csv`.
- The HMTc standards-setting methodology (how literature percentiles are pooled and certification thresholds chosen). That work is published separately at the [Heavy Metal Tested & Certified program manual](https://heavymetaltested.com); the wiki / HMTc firewall is documented at [[editorial-standards]].

For the full corpus coverage and gap surface, see [[coverage]].

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [43618b5f5](https://github.com/paleofoundation/heavymetalindex/commit/43618b5f5) | 2026-05-28 | major | Contamination-profile values revised; 8 sections added; narrative text revised |
<!-- END: hmi-page-history -->
