---
title: Data and downloads
description: The Heavy Metal Index open-data surface — machine-readable occurrence distributions and the regulatory-limit corpus as versioned JSON and CSV, with schema, license, provenance, and citation guidance for researchers, QA systems, and AI answer engines.
audience: [regulator, researcher, brand-qa, journalist, app, ai-integrator]
wiki_doi: null
updated: 2026-08-13
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating data and downloads research context."
---

# Data and downloads

## Overview

The Heavy Metal Index publishes its literature-native structured data as a small set of stable, versioned, machine-readable files. This page is the human description of that surface: what each dataset contains, the field schema, the license, how the data is provenanced back to its sources, and how to cite it. The machine index for the same surface is [`/static/data/catalog.json`](/static/data/catalog.json), a schema.org `DataCatalog` document that lists every distribution, its byte size, its version stamp, and its license.

Two datasets are published here. Both are literature-native: they report what the peer-reviewed and regulatory literature measures and mandates. Neither carries any certification threshold. The Heavy Metal Tested & Certified program sets its standards separately and cites this data one way; those certification limits and the methodology that derives them are published on the certification authority's own surface, not here. Keeping the evidence and the standard architecturally separate is what lets each stand on its own (see [[editorial-standards]]).

## The datasets

### Occurrence data — `occurrence.json` / `occurrence.csv`

Measured heavy-metal occurrence per ingredient and analyte, compiled from the corpus. For each ingredient the file reports, per analyte, the typical concentration range, the 95th percentile, the number of contributing studies, a confidence grade, the date the cell was last reviewed, and the list of contributing source pages. Concentrations are in ppb (µg/kg) on the basis each source reported.

- [`/static/data/occurrence.json`](/static/data/occurrence.json) — nested, one object per ingredient with an `analytes` map.
- [`/static/data/occurrence.csv`](/static/data/occurrence.csv) — tidy/long, one row per ingredient × analyte cell.

Analyte panel: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U. A `status` of `populated` means the cell carries reviewed values; `pending` means the commodity–analyte pair has not yet been synthesised; a blank typical range on a populated-page cell paired with `n_studies: 0` records a reviewed data gap (a finding, not a placeholder).

Per-cell field schema (JSON):

| Field | Meaning |
|-------|---------|
| `status` | `populated`, `in_progress`, or `pending` |
| `typical_ppb` | `[low, high]` typical range in ppb, or `null` |
| `p95_ppb` | 95th percentile of the occurrence distribution in ppb, or `null` |
| `confidence` | `low` / `medium` / `high`, reflecting corpus depth |
| `n_studies` | count of contributing studies |
| `last_reviewed` | ISO date of the last synthesis pass on the cell |
| `sources` | contributing source pages, as `sources/<cite-key>` wiki paths |

The CSV carries the same fields, with `typical_ppb` split into `typical_low_ppb` / `typical_high_ppb` and `sources` joined by `; `.

### Regulatory-limit corpus — `regulations.json` / `regulations.csv`

Published maximum-level and regulatory-limit records for heavy metals in food and consumer-product matrices, across jurisdictions. Each record carries the issuing jurisdictions and agency, the program, the metals and matrices covered, the limit value and unit, effective and sunset dates, and the source page documenting the rule.

- [`/static/data/regulations.json`](/static/data/regulations.json)
- [`/static/data/regulations.csv`](/static/data/regulations.csv)

## Versioning and reconstructibility

Every file carries a version stamp in its envelope: `generated_at` (an ISO timestamp) and `generated_commit` (the git commit the build ran from). `catalog.json` repeats these and expresses a per-dataset `version` of the form `YYYY-MM-DD+<commit>`. Because the repository is under version control and every published value traces to the source page that carries it, any snapshot cited by its commit can be reconstructed exactly. Cite the version stamp when a specific snapshot matters.

## Provenance

Every number in the occurrence data is derived from the `contamination_profile` block on the corresponding ingredient page, and every `sources` entry points to the source page that contributes the value. Every regulatory record points to the regulation page documenting the rule. The exports are generated deterministically from those pages on every build, and a build-time check fails the build if an exported number contradicts the value shown on its page. Nothing here is hand-entered.

## License

The prose of Heavy Metal Index pages is published under CC BY 4.0. The structured database — including these files — is protected as a `sui generis` database under EU Directive 96/9/EC, with rights reserved. In short: read freely, cite single records freely, and use the data in non-commercial research with attribution. Systematic or bulk extraction, republication of a substantial part of the database, or building a commercial product on it requires a licence. The full posture, including the AI-integrator case, is on the [[licensing]] page. Licensing contact: karen@paleofoundation.com.

## How to cite

Cite the page that carries a value, or its `wiki_doi` when populated, together with the retrieval date and — when a specific snapshot matters — the `generated_commit`:

> Heavy Metal Index, occurrence data for [ingredient], heavymetalindex.com/ingredients/[slug], retrieved [date]; dataset snapshot [commit]. CC BY 4.0 (prose); database rights reserved.

## Programmatic access

The same occurrence and regulatory data is queryable at runtime through the read-only endpoints `/api/contamination` and `/api/regulations`. The static files on this page are the bulk-download counterpart and the canonical target for schema.org `Dataset` consumers.
