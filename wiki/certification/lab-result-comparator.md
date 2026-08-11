---
title: Lab Result Comparator
type: brand-pre-screen-tool
description: A brand-facing pre-screen for comparing finished-product heavy-metal results with the cited literature and applicable regulatory caps.
updated: 2026-05-12
noindex: true
---

## Overview

This page is a literature comparator for finished-product heavy-metal results. It is intended for brand QA leads, retailer assortment reviewers, and analytical-method engineers who want a fast read on whether a single laboratory value sits inside the range reported by cited peer-reviewed and government sources for the relevant product category, and how that value compares to the applicable regulatory ceiling.

## How To Read The Output

The comparator reports literature evidence in literature-native terms. For each of the ten HMT&C analytes, it shows the reported concentration range across cited sources, the cited source count, a confidence rating, and the applicable regulatory cap with its scope and basis. When a brand value is entered, the comparator positions it inside the reported literature range and against the regulatory cap on the same screen, with a basis conversion explicitly shown if one was applied.

The comparator distinguishes two tiers of literature evidence so that no analyte is left as a silent blank. Where finished-product sampling exists for the matrix, the range is drawn from those product-level measurements. Where it does not, the comparator falls back to the ingredient-level literature synthesis for the matrix's defining ingredients and labels the range as indicative context rather than finished-product evidence, with the contributing ingredients named. Where neither finished-product nor ingredient-level literature has characterized an analyte in the matrix, the comparator states that explicitly and explains what to request from the laboratory, rather than rendering an empty cell. The indicative tier is never presented as finished-product evidence and never carries a confidence rating above medium.

The comparator does not display HMT&C certification thresholds or the calculations behind them, because those are policy choices layered on top of the literature, not literature evidence in themselves. Surfacing them here would invite readers to interpret them as either the certification line or a recommended action level, neither of which is the role of this page.

The basis selector controls how the comparator interprets the entered lab value. Pick the basis the laboratory used (commonly powder-as-sold for dry products, or prepared-for-feeding for reconstituted infant formula). If the regulatory cap on the same row is reported on a different basis, the comparator converts the entered value into the regulatory basis using the assumptions stated alongside the converted figure, and labels the comparison as indicative.

## What Still Requires Review

A directional pre-screen on a single value does not replace the certification workflow. HMT&C certification still requires the full required analyte panel, lot and sampling documentation, the original laboratory report, method and accreditation review, LOD and LOQ handling, matrix and basis matching, jurisdiction and row-fit review, and any program rules that sit outside this public Index. Treat this page as a fast literature comparison, not a compliance verdict.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [0b990ef32](https://github.com/paleofoundation/heavymetalindex/commit/0b990ef32) | 2026-05-30 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
