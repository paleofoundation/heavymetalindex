# Triage Manifest Build Report

**Built:** 2026-05-12
**Total rows written:** 23260
**Already-ingested handles:** 4

## Priority Tier Distribution

- P1: 54
- P2: 488
- P3: 18
- P4: 6571
- P5: 16129
- P5_quarantine: 0

## Dedup Clusters
- Clusters (files with identical .md sha256): 130
- Files participating in a cluster: 261

## Quarantined Folders
- Count: 0

## Notes
- Priority tier is best-effort from the first 4000 characters of each .md file.
- Cite-keys are provisional; bulk ingest should verify against paper content.
- Dedup cluster IDs are based on sha256 of the raw .md file bytes.
- Already-ingested status is derived from raw_handle in wiki/sources/*.md frontmatter.
- Single-letter suffixes (-a, -b, …) are appended to resolve cite-key collisions.