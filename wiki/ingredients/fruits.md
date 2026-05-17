---
type: ingredient
commodity: fruits
title: "Fruits"
label: "Fruits"
aliases: []
category: fruit
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 15], p95_ppb: 60, confidence: medium, n_studies: 4, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [1, 10], p95_ppb: 30, confidence: medium, n_studies: 4, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [0, 5], p95_ppb: 88, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 5], p95_ppb: null, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [20, 100], p95_ppb: null, confidence: medium, n_studies: 3, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Fruits

This page is an autonomy-created stub. The routing audit identified 4 source pages in the corpus declaring `ingredients: [fruits]` in their frontmatter without a dedicated page existing. Per OPERATING.md Part 3, the autonomy loop created this stub so those sources route to a defined target. The synthesis pass per CLAUDE.md Part 9 fills in the contamination profile as sources accumulate.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 1–15 | medium | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/munir2022-heavy-metals-natural-foods-review\|2]], [[sources/afonne2020-heavy-metals-plant-foods\|3]] |
| Cd | n=4 | 1–10 | medium | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/munir2022-heavy-metals-natural-foods-review\|2]], [[sources/afonne2020-heavy-metals-plant-foods\|3]] |
| iAs | n=2 | 0–5 | low | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|1]], [[sources/cfs2012-hktds-inorganic-arsenic\|2]] |
| tAs | n=3 | 1–5 | medium | [[sources/munir2022-heavy-metals-natural-foods-review\|1]], [[sources/afonne2020-heavy-metals-plant-foods\|2]], [[sources/cfs2012-hktds-inorganic-arsenic\|3]] |
| tHg | data gap | — | — | — |
| Ni | n=3 | 20–100 | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/afonne2020-heavy-metals-plant-foods\|2]], [[sources/cfs2013-hktds-metallic-contaminants\|3]] |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | *[awaiting synthesis]* |
| 4 | [[sources/afonne2020-heavy-metals-plant-foods\|Afonne et al. 2020]]. *Heavy metals risks in plant foods – need to step up precautionary measures*, Current Opinion in Toxicology | 2020 | Review | *[awaiting synthesis]* |
| 5 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | *[awaiting synthesis]* |
| 6 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

