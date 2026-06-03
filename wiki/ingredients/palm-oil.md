---
title: "Palm oil"
type: ingredient
commodity: palm-oil
aliases: []
category: oil
provisional_scaffold: true
provisional_created: 2026-06-02
provisional_reason: "June 2 manual-fetch edible-oil source reports palm oil metal concentrations"
provisional_source: "[[sources/tesfaye2016-edible-oils-essential-metals-ethiopia]]"
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  MeHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Cr-VI:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
literature_scope: thin
sources: 5
updated: 2026-06-02
---

# Palm oil

> **Provisional scaffold.** This page was created automatically on 2026-06-02 so that an ingested source could route to it. Aliases, category, and the contamination profile have not yet been populated. Content below is minimal until a synthesis pass consolidates the literature for this ingredient.
>
> **Reason:** June 2 manual-fetch edible-oil source reports palm oil metal concentrations
>
> **Triggering source:** [[sources/tesfaye2016-edible-oils-essential-metals-ethiopia]]

## Literature scope

The literature corpus for this ingredient is currently thin. Sources route here as ingest proceeds; once enough sources accumulate per the Part 9 synthesis trigger (n_studies ≥ 2 per metal), the synthesis pass will populate the contamination profile.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ntigoroku2025-delta-state-edible-oils-metals\|Ntigoroku et al. 2025]]. *Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria*, Journal of Applied Sciences and Environmental Management | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/enemuor2021-kogi-palm-oil-heavy-metals\|Enemuor et al. 2021]]. *Heavy metals and microbial contamination of palm oil produced and sold at some markets in Kogi East Area, Kogi State, Nigeria*, African Journal of Microbiology Research | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/olafisoye2020-virgin-palm-oil-metals\|Olafisoye et al. 2020]]. *Synthetic antioxidants and metallic elements as additives/contaminants in virgin palm oil*, Asian Journal of Agriculture and Biology | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/samuel2020-palm-oil-metals-nigeria\|Samuel et al. 2020]]. *Variations on the physiochemical, microbiological and selected heavy metals of different palm oil samples sourced from Galadima, Tarauni, Sabon-Gari, Yan-Kura of Kano State and samples from Kogi and Edo States of Nigeria*, Chemical Sciences Journal | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/tesfaye2016-edible-oils-essential-metals-ethiopia\|Tesfaye et al. 2016]]. *Physico-Chemical Characteristics and Level of Some Selected Metal in Edible Oils*, Advances in Chemistry | 2016 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-contradiction-watch -->
## Contradiction watch

The living-review detector has flagged **3** contributing source value(s) that disagree with the current synthesis by more than 2× the tolerance band. A re-synthesis pass for the affected (ingredient, metal) cell(s) is warranted; the synthesis claim is not retracted by this flag.

| Metal | Source | Reported value | Synthesis band | Spread | Direction |
| --- | --- | --- | --- | --- | --- |
| Cd | [[sources/enemuor2021-kogi-palm-oil-heavy-metals]] | 1 ppb | 10 (typical) / 460 (P95) | 10× | below-cohort-median |
| tAs | [[sources/enemuor2021-kogi-palm-oil-heavy-metals]] | 40 ppb | 190 (typical) / 290 (P95) | 4.75× | below-cohort-median |
| Fe | [[sources/enemuor2021-kogi-palm-oil-heavy-metals]] | 1880 ppb | 4660 (typical) / 7340 (P95) | 2.48× | below-cohort-median |

Full per-flag audit at `data/evidence/synthesis-contradictions.csv`. Trigger is documented in [[../CLAUDE|CLAUDE.md § Part 9]].
<!-- END: hmi-contradiction-watch -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [c70fc46](https://github.com/paleofoundation/heavymetalindex/commit/c70fc46) | 2026-06-02 | ingest June 2: tesfaye2016-edible-oils-essential-metals-ethiopia |
<!-- END: hmi-page-history -->
