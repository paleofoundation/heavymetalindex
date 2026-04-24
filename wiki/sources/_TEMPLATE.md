---
type: source
cite_key: firstauthor2024-short-slug         # author-year-slug, lowercase, hyphenated, globally unique
title: "Document title exactly as it appears on the source"
authors: [LastName F, LastName G]             # list; for corporate authors use single string like ["U.S. Food and Drug Administration"]
year: 2024
publication: "Journal name or issuing body"
doi: 10.xxxx/xxxxx                            # null if none
source_type: peer-reviewed                    # peer-reviewed | gov-report | industry | ngo | news | lab-data | textbook-chapter
evidence_tier: A                              # A (peer-reviewed/gov) | B (industry/NGO) | C (news/blog)
raw_path: raw/reports/firstauthor2024-short-slug.pdf   # local-only path; raw/ is gitignored
sha256: 0000000000000000000000000000000000000000000000000000000000000000  # 64-char hex digest of the raw PDF; see raw/README.md
access_date: 2026-04-24                       # ISO-8601; date the file in raw/ was obtained
access_url: https://www.example.gov/document.pdf       # canonical URL where a reader can retrieve or verify the document
license: us-government-work                   # us-government-work | public-redistribute | public-reference-only | copyright-licensed-private
metals: [Cd]
ingredients: []
products: []
jurisdictions: [US]
superseded_by: null                           # cite-key of a newer version, if this document has been superseded
updated: 2026-04-24                           # ISO-8601; date this source page was last edited
---

# {{ Author et al. Year }} — {{ Short title }}

## TL;DR

Two to four sentences: what the document is, what it measured or established, what the key finding or threshold is, why it matters for the wiki.

## Key numbers

Pull exact figures with page references. Sample sizes, means, percentiles, limits of detection, action levels, reference values. Do not round. Preserve the units the source uses. If conversion is needed for comparison, show both.

## Methods (brief)

Analytical method, speciation status, sample preparation, LOD/LOQ. Flag limitations and scope restrictions the source itself acknowledges.

## Implications

- Certification: how HMT&C should read this evidence.
- Courses: educator-facing angles worth teaching.
- App: whether this changes any ingredient `contamination_profile` block.
- Microbiome: if the source touches metal-microbiome interactions, note the thread for WikiBiome federation.

## Provenance notes

Anything unusual about retrieval, hash verification, license, or document versioning. If this is a licensed-private document, note the private-hold posture and the auditor access process (see `raw/README.md`). If this source has been superseded or is likely to be, note that here.

## Wiki pages updated on ingest

- [[metals/<metal>]]
- [[ingredients/<commodity>]]
- [[regulations/<rule-id>]]
