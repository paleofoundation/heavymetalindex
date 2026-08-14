# Firewall lint — no derivation token on an index URL — 2026-08-14

Generated: 2026-08-14T16:46:01.888Z
Mode: blocking (ERROR + WARN)

## Summary

- Files scanned: 982
- ERROR (structural, build-blocking): 0
- WARN  (workbench frontmatter leak, drain backlog): 0
- INFO  (prose heuristics, review-only): 1

## INFO — prose heuristics (review-only)

### wiki/regulations/washington-tfca-toothpaste-pb-1000ppb.md
- **HMTC_NUMERIC_NEAR_THRESHOLD** — A number sits next to 'HMTc limit/threshold/standard' — confirm it is a regulatory cap (allowed), not a derived HMTc value (leak).
  - line 56: `rative US binding cap and any HMTc threshold tighter than 1000 ppb adds value over state regulation; threshold`
