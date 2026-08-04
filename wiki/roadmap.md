---
title: Roadmap
description: The 10-year direction for the Heavy Metal Index. What the Index is, what it is becoming, and the architectural disciplines that make the transition possible without sacrificing today's core utility.
audience: [regulator, brand-legal, brand-qa, researcher, journalist, ai-integrator]
wiki_doi: null
updated: 2026-05-28
---

# Roadmap

## Overview

This page is the public 10-year direction for the Heavy Metal Index. It is intentionally direct about what the Index is becoming, because the defensibility argument the Index rests on — that it is the canonical curated reference for heavy metals in food — requires that direction to be visible, not hidden. Brand-legal, regulatory affairs, retailer category-floor programs, the standards-body community, and AI integrators considering building on the Index can read this page and know what they are building on top of.

This page is the public-facing statement of the Index's strategic frame.

## What the Index is today

The Heavy Metal Index is a curated, citation-grounded reference covering heavy metals in food, ingredients, supply-chain inputs, mitigation, and regulation. As of 2026-05-28 it carries:

- Over 1,000 source pages (peer-reviewed papers, agency reports, datasets) with structured frontmatter and per-claim provenance.
- 260+ ingredient profiles with structured `contamination_profile` blocks for the [[heavy-metal-tested-certified|HMTc-10]] analytes.
- 350+ product-category pages organised against the HMTc Comprehensive Testing Category Taxonomy v2.0.
- 36 metal pages covering the HMTc-10 plus aluminium, chromium, hexavalent chromium, tin, antimony, and uranium.
- 55 regulation pages spanning 11 jurisdictions and 11 metals, plus auto-generated [[regulations/by-jurisdiction|cross-jurisdiction]] and [[regulations/timeline|chronological]] views.
- A [[coverage|PRISMA-equivalent coverage page]] and a [[methodology/search-strategy|Cochrane-equivalent search-strategy publication]] documenting the 10-database literature search.
- An [[ask|Ask the Index]] retrieval assistant grounded in cited pages, with no outside knowledge.

The corpus draws from the published literature on heavy metals in food; the methodology is at [[methodology]]; the editorial firewall between the Index and the [Heavy Metal Tested & Certified](https://heavymetaltested.com) certification program is at [[editorial-standards]]; the license posture is at [[licensing]]; and the correction process is at [[errata]].

## Where the Index is going

Four shifts define the mature state.

### Shift 1: Corpus completeness

Today's corpus is broad but uneven — rice and cocoa are deep, some commodities are thin. The mature state is genuine completeness for the included scope: every credible paper from approximately 1960 forward that meets the [[methodology/search-strategy|inclusion criteria]], every national Total Diet Study, every regulatory document from every food-safety jurisdiction. The continuous ingest daemon backfills the existing literature while the discovery pipeline captures new publications within days.

The defensibility argument ("we have reviewed the complete literature") only works when "complete" is operationally true. The work of the next several years is making that operationally true.

### Shift 2: Structured data as the primary product

Today the prose is the surface and the structured layer is downstream. The mature state inverts this: the structured layer is the source of truth, and prose pages are *rendered* from it. Every contamination claim is a structured record with metal species, matrix, basis, sampling year, sampling location at sub-national resolution, statistic type, sample size, censoring, evidence tier, and provenance.

This unlocks the surfaces in Shift 3.

### Shift 3: Multi-surface output from one source

Today the Index publishes to one surface (heavymetalindex.com). The mature state publishes the same source data to many surfaces:

- The public reference site, polished and complete.
- A public API at **api.heavymetalindex.com** with versioned schemas. A first skeleton ships with this roadmap; the schema discipline is documented at [[../docs/schemas/index.md|docs/schemas/]].
- An **MCP server** so AI agents (a brand-legal LLM agent, a regulatory analysis agent, a consumer-app agent) can call the Index as a tool with per-claim provenance returned automatically.
- A **consumer app data feed** powering an ingredient-list → estimated-contamination-likelihood pipeline.
- A **brand-legal export bundle** — on-demand PDFs and signed manifests with DOI-pinned page versions, suitable for filing as litigation exhibits.
- A **regulator-facing API** under explicit licence to FDA / EFSA / WHO with provenance attestations.
- A **multilingual synthesis layer.** Source pages stay in English; the synthesis layer (the prose readers actually read) is translated into Chinese, Spanish, Portuguese, Korean, Japanese, French, and German.
- A planned **Journal of Food Metallomics** publication track where vetted synthesis pages can graduate to externally peer-reviewed publications, with the wiki page as supplementary data. The venue is not yet established — no ISSN, editorial board, or completed reviews — and its independence from the certification program is a precondition for launch.
- A **WikiBiome federation feed** sending heavy-metal-microbiome content to [WikiBiome](https://wikibiome.com).

### Shift 4: Authority through citation

Today the Index is a defensible reference that experts could cite if they knew it existed. The mature state is the place this work gets done: EFSA cadmium opinions citing Heavy Metal Index synthesis pages by DOI, FDA Closer-to-Zero working-group memoranda referencing Index pages in their rationale, class-action experts citing the Index in expert reports, Codex CCCF delegate documents referring back to it.

Four enabling pieces:

1. **DOIs on every page.** DataCite integration. The `wiki_doi:` slot is already present in the frontmatter (see [[../docs/schemas/index.md|schema docs]]); minting begins once the DataCite integration is wired.
2. **Scholarly indexability.** PubMed indexes Cochrane protocols; the Index targets equivalent indexing for synthesis pages via JSON-LD `ScholarlyArticle` markup and a sitemap optimised for scholarly crawlers.
3. **Named external peer review.** Domain experts (food chemists, toxicologists, regulatory affairs leads) marking synthesis claims as endorsed, contested, or recused. Not gatekeeping — visible audit signal.
4. **Living-review machinery.** Synthesis pages that auto-flag when new evidence contradicts the current claim by more than the synthesis tolerance band, with the resulting diff visible to readers. Cochrane is moving this direction; the Index can leapfrog by building it native.

## How this differs from where the Index is now

The current Index is a well-built static reference with autonomous ingest. The 10-year version is a **structured-data product** with a static reference as one of its renderings, an API + MCP server as another, a consumer app as another, and an authority position in the broader regulatory and academic ecosystem as the outcome.

The gap is not capability — the building blocks are in place. The gap is **discipline**: treating the data as the product, the API as a first-class surface, DOIs as table-stakes, and the site as one rendering among many.

## What this roadmap does not promise

Worth naming because the gravitational pull toward these is real.

- **Personalised health advice.** "Given your diet, here is your exposure" is the consumer app's job, downstream. The Index stays at population-level evidence.
- **Brand rankings.** Even in 10 years, even with massive demand, the brand-firewall holds. Brand-identifying contamination data lives in a separate private build, never in the public Index.
- **Replacement of regulatory bodies.** The Index is the reference regulators use, not a regulator itself. Standards-setting is the [Heavy Metal Tested & Certified program's](https://heavymetaltested.com) job, kept architecturally separate from the Index (see [[editorial-standards]]).
- **Recommendations.** "Eat this, not that" is not the Index's voice. The Index reports what the literature supports; readers decide what to do with it.

Staying out of these is what keeps the authority position viable.

## Architectural disciplines that pay for this future today

Five disciplines applied to current work so the 10-year transition costs less when it lands. Future readers of this page can read the schema-docs directory ([[../docs/schemas/index.md]]) for the current state of each discipline.

1. **Schema-first edits.** New pages are structured-data pages with prose rendered from the structured data, not free prose that incidentally carries some structured fields.
2. **Stable field names, versioned schema.** Every field name is API-shape from the day it is named; renames are migrations with deprecation periods.
3. **DOI placeholder on every page today.** The `wiki_doi:` slot is reserved across all citable page types. DataCite minting is a configuration switch when the integration ships, not a schema migration.
4. **Geographic + temporal granularity slots from now on.** The `sampling_locations:` and `sampling_year_range:` slots on source pages are reserved for sub-national sampling locations and the sampling-year (distinct from publication-year). Empty slots are infinitely cheaper than retrofitted ones.
5. **Per-page version history surface today.** Every page renders a "Page history" footer summarising recent git commits. When DOI minting comes online, each entry will be a clickable DataCite version-DOI.

## Status of the disciplines as of this commit

- Schema documentation: [[../docs/schemas/index.md]] (initial set covering all citable page types)
- `wiki_doi:` slot: present across source / ingredient / product / metal / regulation / synthesis pages (1,803 pages, migration `tools/migrate-future-slots.mjs`)
- `sampling_locations:` and `sampling_year_range:` slots: present on all source pages (1,083 pages)
- Per-page changelog footer: rendered on every wiki page on every prebuild (`tools/build-page-changelogs.mjs`)
- Public API skeleton: [api/contamination](https://heavymetalindex.com/api/contamination) (read-only contamination-profile query surface)
- **MCP server**: [api/mcp](https://heavymetalindex.com/api/mcp) (Streamable HTTP transport, four tools: contamination_lookup, regulation_lookup, synthesis_lookup, search_evidence)
- **DOI minting integration**: `tools/mint-dois.mjs` — activates when `DATACITE_USER`/`DATACITE_PASSWORD`/`DATACITE_PREFIX` env vars are set; priority order synthesis → metals → ingredients → regulations → products → sources
- JSON-LD ScholarlyArticle markup: emitted on source / ingredient / product / metal / regulation / synthesis pages
- **Scholarly sitemap**: `/sitemap-scholarly.xml` (focused subset for Google Scholar / Semantic Scholar / OpenAlex crawlers) plus an `robots.txt` allowlist for academic + AI-agent bots
- **Curatorial board scaffold**: [[curators]] — structural slots filled, named curators pending
- **External peer-review surface**: per-synthesis-page footer rendered from `data/peer-review/<reviewer>.jsonl`; verdicts: endorsed / contested / recused / pending
- **Living-review contradiction detector**: `tools/build-synthesis-contradictions.mjs` — cohort-based detection of contributing source values that disagree by more than 2×; surfaces "Contradiction watch" footer on affected pages
- **Translation pipeline**: `tools/translate-synthesis.mjs` — synthesis-page translation into Spanish, Chinese, Portuguese, French, German, Japanese, Korean via the Vercel AI Gateway
- Licensing posture: [[licensing]]
- Errata mechanism: [[errata]]

## Status report

This page is the public commitment. The full strategic frame and the wiki/HMTc firewall separation are described in the [[editorial-standards|editorial standards]].

For comments, partnership inquiries, or integration questions: karen@paleofoundation.com.
