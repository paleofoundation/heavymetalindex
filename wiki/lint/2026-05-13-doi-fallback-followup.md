---
type: lint
op: lint
date: 2026-05-13
scope: source-doi-coverage
status: deferred
priority: medium
---

# DOI fallback follow-up — 2026-05-13

89 source pages were marked `no_doi_assigned: true` with a Google Scholar search URL as `access_url` during the 2026-05-13 morning publish run. The marking unblocked the prebuild DOI audit so the night's ingest work could ship to production. The quality cost: many of these pages likely have real DOIs that Crossref title-matching couldn't find with confidence ≥ 0.6.

Most are sensor methodology papers (Cd off-on fluorescence, Pb electrochemical, Cr-VI colorimetric, etc.) from MDPI, ACS, RSC, and Chinese journals — venues that do register DOIs. The Crossref title-match was probably tripped up by author-supplied titles that paraphrase the published title, or by recent (2025-2026) papers not yet indexed at Crossref query time.

## Recommended remediation

The orchestrator should pick this up as a new strategy: **FIX-MISSING-DOIS**. Per-page workflow:

1. Read the source page's `raw_path` (the Marker-converted markdown).
2. Look for a DOI in the raw markdown's first 200 lines (most papers include it on page 1).
3. If found, patch `doi:` and `access_url:` on the source page, remove `no_doi_assigned: true`.
4. If not found, query Crossref with the title + first author + year.
5. If still not found, query OpenAlex and Semantic Scholar.
6. If exhausted, leave the page as-is (the `no_doi_assigned: true` marker stays, but with a venue URL rather than Scholar search).

Estimated work: 89 pages × 1-2 min each = 90-180 minutes. Suitable for a single subprocess dispatch with max-turns ~100.

## Pages affected

See git log entry `8365d7c` for the full list. Categories:

- ~50 sensor methodology papers (electrochemical, colorimetric, fluorescence-based)
- ~20 food-concentration studies from non-English-primary journals
- ~10 dietary exposure / total diet studies
- ~5 review papers
- ~4 dataset papers

Cocoa, infant formula, and rice are over-represented because the night's seasonal-geographic-variance batch focused there. None of the affected pages contribute Path A CC-eligible evidence to HMTc threshold-setting (those are agency and high-n peer-reviewed papers, all with proper DOIs).

## Why this happened

Overnight ingest (both the night-loop's INGEST-STAGED dispatch and Obsidian Claude's parallel P4 + seasonal-geographic-variance batches) did not enforce DOI presence as a hard frontmatter requirement before commit. The husky pre-commit hook checks routing audit cleanliness, not DOI completeness. The DOI audit is only triggered by the build (via the `prebuild` script), so it caught the problem only when the next deploy was attempted.

## System-level fix candidates

1. Add DOI completeness to the husky pre-commit hook (catches at commit time, not deploy time).
2. Add a per-page `doi_lookup_status` field with values `confirmed | pending | no_doi_assigned` so the audit can distinguish "we tried and there is no DOI" from "we haven't looked yet."
3. Bake Crossref + OpenAlex lookup into the ingest path so source pages are created with verified DOI in hand.

Karen to decide which of these to do; all three are reasonable.
