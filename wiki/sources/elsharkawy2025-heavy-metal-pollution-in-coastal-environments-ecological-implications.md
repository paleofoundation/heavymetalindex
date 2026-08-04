---
type: source
raw_handle: HMIRAW_10-3390-su17020701
cite_key: elsharkawy2025-heavy-metal-pollution-in-coastal-environments-ecological-implications
title: "Heavy Metal Pollution in Coastal Environments: Ecological Implications and Management Strategies: A Review"
authors: ["el-sharkawy"]
year: 2025
publication: "Sustainability"
doi: "10.3390/su17020701"
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.3390/su17020701"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/Manual Fetch Kimi /June 8 New Folder With Items 4 2/sustainability-17-00701.pdf"
raw_sha256: "cd976c0a39aa3d8e4b122e15836d9f710de6338e225fed0e4fc6cb663d4d8303"
metals: [Pb]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]", "[[products/shellfish]]"]
matrices: [fish-marine-non-predatory, shellfish]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-30
---

# Heavy Metal Pollution in Coastal Environments: Ecological Implications and Management Strategies: A Review

## Overview

This source page is a mechanical bulk-ingest record for a PDF in the Heavy Metal Index raw corpus. It preserves source-level identity, routeable analyte and product scope, and the exact extracted numeric lines that justify that scope, for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

Author, year, and title are taken from the Crossref record for the DOI, not scraped from the PDF text.

## Key numbers

Each analyte named in `metals:` is listed below with the measurement-bearing lines that caused it to be asserted. Lines are copied from the verified extraction and retain the source units and wording where legible. An analyte with no lines here would not appear in the frontmatter.

### Pb

- Complexation Lead (Pb) at low pH, while Ferrous (93)
- Sorption to Oxides Lead (Pb) directly oxidized by PbO2 (105)

## Methods (brief)

- Analytical method details were not mechanically resolved from extracted text.

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[products/shellfish]]
- [[metals/lead]]

## Verification notes

- Identity check: DOI, raw handle, cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Provenance: first author and publication year resolved from Crossref for DOI `10.3390/su17020701`. PDFs whose DOI does not resolve are skipped, not given a fallback key.
- Full-PDF read: `pdftotext -layout` was run twice and the extraction hashes compared before the page was written.
- Analyte scope: each metal is asserted only where its spelled-out name appears on a line carrying a measurement. Element symbols alone never assert an analyte.
- Brand firewall: the worker skips PDFs whose numeric lines appear brand-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sections added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [1c0b678ac](https://github.com/paleofoundation/heavymetalindex/commit/1c0b678ac) | 2026-07-30 | major | 1 section added |
| [6543561d1](https://github.com/paleofoundation/heavymetalindex/commit/6543561d1) | 2026-07-30 | major | 6 sections added; narrative text revised |
| [04bef2fbd](https://github.com/paleofoundation/heavymetalindex/commit/04bef2fbd) | 2026-07-30 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
