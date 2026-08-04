---
title: Raw reports and studies ingest workflow
type: methodology
updated: 2026-05-02
audience: [regulator, researcher, standards]
---

# Raw Reports and Studies Ingest Workflow

## Overview

This workflow governs the staged ingest of `raw/reports` before `raw/studies`.

## Ingest Order

1. Inventory every PDF in `raw/reports` and `raw/studies`, compute SHA-256 hashes, and match each file against existing source pages by `raw_path` and hash.
2. Complete `raw/reports` before beginning the general `raw/studies` backlog, because regulatory, toxicology, and agency reports set the comparison layer used to interpret field findings.
3. Within reports, prioritize FDA, EPA, ATSDR, CDC, EFSA, JECFA, Codex, OEHHA, and convention documents before general context reports.
4. Within studies, prioritize product- or ingredient-occurrence papers before mechanistic, environmental, or biomonitoring background papers.

## Completion Definition

A source is not considered ingested merely because a PDF exists locally or because a source page exists.

A completed ingest requires:

- source metadata with local `raw_path`, SHA-256, source type, evidence tier, license posture, and retrieval/access notes;
- Evidence Fitness classification for what the source can and cannot support;
- routeable values or claims captured in the evidence layer when the source contains concentration, regulatory, toxicology, or exposure data;
- wiki routing to the correct page family: regulatory limits to regulation pages, toxicology reference values to metal/regulation pages, product occurrence to product pages, and ingredient-only findings to ingredient pages;
- explicit basis/species/unit handling for numeric values, including wet/dry/as-sold/reconstituted basis and total vs inorganic/methyl species;
- internal links from affected pages so the source is discoverable through the wiki structure;
- verification with the repository checks before publication.

## Routing Rules

Ingredient-only findings belong on ingredient pages. If an ingredient page does not exist, create it before publishing the finding.

Product category findings belong on product pages only when the study matrix maps to that product category and the data are suitable for public synthesis.

Regulatory limits, action levels, tolerable intakes, MCLs, MADLs, and related comparison points belong in `wiki/regulations/` and may then be cross-linked from product and metal pages.

Mechanistic toxicology and biochemical papers generally update metal, health, microbiome, or source pages, not product occurrence tables, unless they also report routeable occurrence values.

## Public-Use Boundary

Machine extraction can create draft source records, draft values, and reviewer queues. Public pages require reviewed or approved evidence before new affirmative numeric claims are surfaced. Data gaps remain visible and must not be converted into reassurance.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [970e09b65](https://github.com/paleofoundation/heavymetalindex/commit/970e09b65) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [546ff4ac9](https://github.com/paleofoundation/heavymetalindex/commit/546ff4ac9) | 2026-05-02 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
