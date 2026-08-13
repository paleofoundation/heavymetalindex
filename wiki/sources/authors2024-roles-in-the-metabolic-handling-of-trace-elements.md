---
type: source
raw_handle: RPMEHG_10-1128-msystems-01417-24
cite_key: authors2024-roles-in-the-metabolic-handling-of-trace-elements
title: "roles in the metabolic handling of trace elements (mercury, tungsten, arsenic, etc.) or"
authors: ["Unknown authors"]
year: 2024
publication: "Peer-reviewed article"
doi: 10.1128/msystems.01417-24
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1128/msystems.01417-24"
raw_path: "/Volumes/HMI-Library/research-pulls/metal-deep-dive-mercury-hg/Fish marine non-predatory sardines anchovies salmon cod/Mercury selenoprotein binding/10-1128-msystems-01417-24.pdf"
raw_sha256: "b7443e7cf852b3c7e70184bf25481ed5477c615d6be7bd71c6a19ef0e8064de3"
metals: [MeHg, tHg, tAs, Ni]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-08-03
---

# authors et al. 2024 - roles in the metabolic handling of trace elements (mercury, tungsten, arsenic, e

## Overview

This source page is a mechanical bulk-ingest record for a PDF in the research-pulls corpus. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- at least 50% replacement of Cys by Sec at a selenocysteine insertion position, as well
- collection (5), the prevalence may exceed 99% in proteins such as glycine/sarcosine/
- essential. Lower prevalences of selenocysteine-containing versions, for example, 18% for
- the selenophosphate synthase SelD or 6% for HgcB, suggest the biochemical roles in
- several intriguing examples of two-site selenoproteins. Table 1, shown below, provides
- TABLE 1 Novel selenoprotein families described in this study
- backgrounds), average 72 amino acids in length. The motif UXX-star is conserved in over 97% of family members. By contrast, at the known selenocysteine site
- near the N-terminus of this family (not shown), 63% have U (making them double-selenoproteins) whereas 37% have C. Family NF045501 (protein accession
- tein frequency between 1% and 2%. We named this protein family TrsS (third radical
- of members contain selenocysteine, itself occurs in under 3% of prokaryotic assemblies.
- than 0.3% of the prokaryotic genome assemblies in RefSeq have any Tso protein, with

## Methods (brief)

- containing members were collected by BLAST searches using NCBI’s non-redundant

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/mercury]]
- [[metals/mercury]]
- [[metals/arsenic]]
- [[metals/nickel]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no certification limit, status, or ratchet calculation is stated; any occurrence values remain descriptive only.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [880cf9722](https://github.com/paleofoundation/heavymetalindex/commit/880cf9722) | 2026-08-12 | minor | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sections added |
| [9df161fe2](https://github.com/paleofoundation/heavymetalindex/commit/9df161fe2) | 2026-08-03 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
