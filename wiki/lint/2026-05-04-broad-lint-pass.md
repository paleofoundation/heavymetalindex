---
type: lint-audit
title: "Broad lint pass — 2026-05-04"
audience: [researcher, regulator, app, editorial]
updated: 2026-05-04
sources: 0
---

# Broad lint pass — 2026-05-04

Mechanical and editorial lint pass across all 455 wiki pages. Scope covers contradictions and stale claims (Part 18 item 1 and 2), broken cross-references (item 5), orphans (item 3), missing frontmatter (item 4), evidence-tier and provenance gaps (items 7 and 8), `contamination_profile` data state (item 8 of CLAUDE.md ingredient lint), and recommended next sources (item 13).

## Summary

| Check | Count | Severity |
| --- | ---: | --- |
| Pages scanned | 455 | — |
| Stale "pending" claims about now-ingested sources | 4 sites | high |
| Broken wikilinks (raw count) | 543 | mixed (see categorization) |
| Unique broken targets | 228 | mixed |
| Broken targets that are intentional backlog markers | est. 175+ | low (per convention) |
| Broken targets that should be real pages or fixed cite-keys | est. 50 | high |
| `[[raw/...]]` wikilinks (anti-pattern, never resolves in Obsidian) | 14 | medium |
| Orphans (no inbound wikilinks) | 2 | low |
| Pages missing required frontmatter | 1 (`log.md` only) | low (append-only by design) |
| `contamination_profile` populated metal sub-blocks | 0 of 120 | (informational, not a failure) |

## 1. Stale "pending" claims about now-ingested sources

Pages assert that documents are pending or "not in the corpus" when they were ingested in this session or earlier. These are higher-priority than typical lint because they actively misrepresent the wiki's evidence base to readers.

| File | Line | Stale claim | Fix |
| --- | ---: | --- | --- |
| `synthesis.md` | 50 | "[CXS 193-1995] is not in the current corpus. Until CXS 193-1995 is ingested, the wiki cannot state specific Codex ML values... CXC 81-2022 is also pending ingest." Both are now ingested. | Rewrite paragraph to reflect that both are ingested and cross-link `[[sources/codex-cxs-193-1995]]` and `[[sources/codex-cxc-81-2022]]`. |
| `synthesis.md` | 54 | "Ingest CXC 81-2022 for the Cocoa Beans Code of Practice" listed as a forward action. | Remove (now done) or convert to "Ingested 2026-05-03." |
| `ingredients/cocoa.md` | 74 | Stub-page paragraph ends with "(CXC 81-2022, pending ingest)". | Replace with `[[sources/codex-cxc-81-2022|CXC 81-2022]]`. |
| `regulations/jecfa-cadmium-ptmi.md` | (TBD) | References to CXC 81-2022 as pending — verify and update. | Audit, then wikilink the source. |

Append-only artifacts (`log.md`, prior lint reports, `sources/codex-cccf17-2024.md`'s historical-state description) correctly preserve the state at time of writing and do not need updating.

## 2. Broken wikilinks — categorized

543 raw wikilink references resolve to 228 unique missing targets. Per the 2026-04-27 convention, unresolved-target wikilinks in frontmatter and prose are intentional backlog markers, not lint errors. The lint result must therefore separate the intentional-backlog majority from the actually-broken minority.

### 2a. High-impact missing sources (must ingest or fix cite-keys)

The following missing sources have unusually high reference frequency and represent real gaps in evidence coverage rather than backlog markers.

| Missing target | Reference count | Notes |
| --- | ---: | --- |
| `sources/fera2014-fsa-metals-infant-foods-formula` | 141 | Most-referenced missing source in the wiki. Cite-key suggests UK FSA/Fera 2014 multi-element infant foods study. The log shows that an FSA Fera FS102048 study was ingested at `sources/fsa2016-infant-food-formula-metals-survey` — the 141 references may be a stale cite-key that should be migrated to the correct slug, OR a separate 2014 document that needs ingest. Audit required. |
| `sources/bair2022-heavy-metals-infant-toddler-foods` | 34 | Possibly the same paper as `sources/bair2022-heavy-metals-infant-toddler-foods` (cite-key spelling appears correct). May be ingested but with a different file path; audit. |
| `sources/price2023-baby-food-lead-biokinetic-models` | 24 | Same situation; verify cite-key consistency between log entries and corpus references. |
| `testing/icp-ms` | 17 | The principal analytical method for heavy metal quantification; cited from many pages but no dedicated page exists. Should be promoted from stub — this is the single highest-priority `wiki/testing/` page to stand up. |
| `regulations/fda2023-inorganic-arsenic-apple-juice` | 6 | FDA 2023 finalized iAs action level for apple juice; high-salience regulatory page that should exist. |
| `regulations/fda2020-inorganic-arsenic-infant-rice-cereal` | 4 | The 100 ppb infant rice cereal action level is documented in `sources/fda-iAs-rice-cereal-2020` and `regulations/fda-iAs-rice-cereal-100ppb`; the references to `fda2020-inorganic-arsenic-infant-rice-cereal` are cite-key drift. Migrate. |
| `regulations/fda2004-juice-haccp-lead` | 5 | FDA 2004 juice HACCP guidance lead reference; should be ingested or removed. |
| `sources/fda2026-infant-formula-product-testing-results` | 3 | FDA 2026 testing-result document; cite-key consistent with referrers; should be ingested. |
| `regulations/fda-21cfr165110-bottled-water-lead` | 3 | US FDA bottled water lead standard from 21 CFR 165.110; should be ingested. |

The first three (fera2014, bair2022, price2023) account for 199 of the 543 broken wikilinks — about 37 percent. Resolving cite-key drift on those alone would substantially clean the wiki.

### 2b. `[[raw/...]]` wikilinks (anti-pattern)

Wikilinks pointing into the `raw/` tree do not resolve in Obsidian (the wiki vault root is `wiki/`, not the repo root) and cannot be navigated. They appear primarily in `log.md` ingest-tracking entries.

| Target | Count | Locations |
| --- | ---: | --- |
| `raw/README` | 8 | log.md ingest entries |
| `raw/Digest/INGESTED` | 6 | log.md ingest entries |

Recommendation: convert these to plain inline references (e.g., backtick-quoted paths `raw/README.md`) rather than wikilinks. They are tracking artifacts, not navigable wiki pages.

### 2c. Backlog-marker majority

Approximately 175 of the 228 unique broken targets are ingredient pages, product pages, regulation pages, or source pages that don't yet exist but are referenced as future-work markers consistent with the 2026-04-27 convention. Examples include `[[ingredients/drinking-water]]` (11 refs), `[[ingredients/cereals]]` (7 refs), `[[ingredients/leafy-vegetables]]` (4 refs), `[[ingredients/shellfish]]` (4 refs), `[[ingredients/offal]]` (4 refs), `[[products/chocolate]]` (3 refs), `[[ingredients/brown-rice]]` (3 refs), and many singletons.

These are not lint errors per the convention. They surface in Obsidian's graph as dotted nodes and indicate where the wiki is expected to grow next. The 2026-04-27 wikilink-convention note in CLAUDE.md Part 14 documents this expectation.

The lint takeaway: the backlog of intentional unresolved targets is healthy and consistent with the wiki's contamination_profile and ingredient-coverage growth pattern. Periodic prioritization of which backlog markers warrant promotion to real pages is a separate editorial decision.

## 3. Orphans

Two pages have no inbound wikilinks:

| Page | Note |
| --- | --- |
| `methodology/corpus-genesis-2026-04` | Standalone methodology document; should be linked from `methodology.md` or `methodology/index.md` if those exist, or from a relevant lint or batch report. |
| `sources/efsa-food-safety-research-needs-2030` | EFSA-published source; no current page links to it. Either weave a citation from the synthesis or relevant metal page, or it represents a source that was ingested without identifying a downstream consumer page. |

## 4. Missing frontmatter

`log.md` is missing the `updated` field. By project convention, `log.md` is append-only and the entry-level dates carry the temporal information; a single page-level `updated` date is not meaningful for an append-only log. No fix needed; this is a known exemption.

All 454 other pages have valid `updated` frontmatter.

## 5. `contamination_profile` data state

All 15 ingredient pages with profiles share the standardized 8-metal schema (Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn) per the 2026-05-03 schema standardization. All 120 metal sub-blocks (15 pages × 8 metals) currently have `status: pending` with null values.

This is not a lint failure but is the largest single piece of structural deferred work in the wiki: zero ingredient profile values are populated despite substantial source ingest. The data layer at `data/evidence/` is the natural place for the synthesis to draw from, and the highest-priority claim cluster to populate first remains iAs in rice (per the 2026-05-03 architecture discussion). Profile population is blocked on either (a) primary-literature ingest passes that promote occurrence-study source pages with transcribed concentration distributions, or (b) querying `data/evidence/values.jsonl` for the highest-coverage (metal, ingredient) pairs and synthesizing values into the page frontmatter.

## 6. Evidence-tier balance

A spot-check of the cadmium and nickel metal pages shows both rest predominantly on A-tier sources (peer-reviewed government reports, EFSA opinions, ATSDR profiles, NTP listings, JECFA evaluations, Codex standards). No B-tier or C-tier source is currently load-bearing for a synthesis claim on either page. The arsenic and lead metal pages were not deeply audited in this pass; a future evidence-tier audit should compare per-claim provenance against source page frontmatter.

## 7. Suggest next sources (Part 18 item 13)

Based on the broken-wikilink frequencies and known ingest gaps, the following primary regulatory and review documents are the highest-priority promotion candidates. All are reachable via WebFetch from agency websites without requiring `raw/` access (the pathway demonstrated for [[sources/codex-cxc-81-2022|CXC 81-2022]] on 2026-05-03).

| Document | Reason | Pathway |
| --- | --- | --- |
| Audit and resolve `sources/fera2014-fsa-metals-infant-foods-formula` (141 references) | Highest-frequency missing source by an order of magnitude. Either migrate to existing `fsa2016-infant-food-formula-metals-survey` cite-key if it's the same document, or ingest if it's a separate UK FSA / Fera 2014 study. | Internal audit (no fetch needed if cite-key drift) |
| `testing/icp-ms` (17 references) | Principal analytical method underpinning every concentration value in the wiki; foundational testing-method page. | Build from existing source-page method discussions; minimal external fetch |
| Codex CXC 49-2001 (Source Directed Measures CoP) | Referenced from CXC 81-2022 as the parallel framework for general food chemical contamination. Same FAO web pathway. | WebFetch from FAO |
| FDA 2023 finalized inorganic arsenic action level for apple juice | 6 broken-wikilink references; high regulatory salience for the apple-juice product line. | WebFetch from FDA |
| FDA 21 CFR 165.110 bottled water lead standard | 3 broken-wikilink references; high salience for plant-milk and infant-formula water-component analysis. | WebFetch from eCFR |
| EU 2023/915 consolidated contaminants regulation | Referenced from many ingredient and regulation pages; substantial broken-wikilink reduction if ingested. | WebFetch from EUR-Lex |
| Codex CCCF18 documents (cf18_06e.pdf and cf18_06_Add.1x.pdf, May 2025) | Surfaced in the 2026-05-03 WebSearch results for CXC 81-2022; updates the broader cadmium CoP work that extends CXC 81-2022 to additional commodities. | WebFetch from FAO |

## 8. Recommended action priority

1. **High** — Audit and resolve the 141 broken references to `sources/fera2014-fsa-metals-infant-foods-formula`. Cite-key migration may close most of them in one mechanical pass.
2. **High** — Update `synthesis.md` lines 50 and 54 to reflect that CXS 193-1995 and CXC 81-2022 are now ingested.
3. **High** — Update `ingredients/cocoa.md` line 74 to remove the "(CXC 81-2022, pending ingest)" parenthetical and link the source page.
4. **Medium** — Stand up `wiki/testing/icp-ms.md` to close 17 broken references and provide the foundational analytical-method page.
5. **Medium** — Convert `[[raw/README]]` and `[[raw/Digest/INGESTED]]` wikilinks in `log.md` to plain inline backtick references (14 affected lines).
6. **Medium** — Audit `sources/bair2022-heavy-metals-infant-toddler-foods` and `sources/price2023-baby-food-lead-biokinetic-models` cite-keys for consistency between log entries (where they appear ingested) and current wiki references (where they appear missing).
7. **Low** — Add inbound links to `methodology/corpus-genesis-2026-04` and `sources/efsa-food-safety-research-needs-2030` from `methodology.md` and a relevant synthesis section respectively.
8. **Low / informational** — `contamination_profile` value population for the highest-salience (metal, ingredient) claim clusters (iAs in rice; Cd in cocoa; Pb in baby cereals; MeHg in fish) when the data-layer pathway is active.

## Cross-references

- [[lint/index|Lint index]]
- [[CLAUDE|CLAUDE.md]] — Part 18 lint specification
- Prior pass: [[lint/2026-05-03-fda-tds-elements-ingest-audit|FDA TDS FY2018-FY2020 ingest audit]]
