---
type: lint-audit
title: "Broad mechanical and editorial lint pass"
updated: 2026-05-04
---

# Broad Mechanical and Editorial Lint Pass

## Scope

This lint pass reviewed 455 public wiki pages after the 2026-05-03 mitigation work and the Codex CXC 81-2022 ingest.

## Findings

- 4 stale pending claims about now-ingested Codex CXS 193-1995 and CXC 81-2022.
- 543 broken wikilinks resolving to 228 unique missing targets. Most are intentional backlog markers under the 2026-04-27 convention.
- Three high-frequency missing source targets require cite-key audit and migration: `sources/fera2014-fsa-metals-infant-foods-formula`, `sources/bair2022-heavy-metals-infant-toddler-foods`, and `sources/price2023-baby-food-lead-biokinetic-models`.
- 14 anti-pattern `[[raw/...]]` wikilinks in log entries should be plain inline references rather than public wikilinks.
- 2 orphan pages were identified: `methodology/corpus-genesis-2026-04` and `sources/efsa-food-safety-research-needs-2030`.
- Only the legacy `log.md` page was missing required frontmatter; this is now resolved by the generated log archive structure.
- Zero `contamination_profile` metal sub-blocks are populated across all 15 ingredient pages that use the 8-metal schema.

## Follow-Up Priority

1. Audit and migrate the three high-frequency missing source keys.
2. Replace raw-path wikilinks in legacy log records with inline references.
3. Resolve or intentionally document the two orphan pages.
4. Populate ingredient `contamination_profile` sub-blocks where evidence is available.
5. Verify the already-ingested EU 2023/915 log and crosswalk outputs against the current archive pages.
6. Prioritize next source ingests: Codex CXC 49-2001, FDA 2023 apple juice inorganic arsenic action level, FDA 21 CFR 165.110 bottled-water lead, and Codex CCCF18 documents.

## Log Link

Recorded in [[log/2026-05]].
