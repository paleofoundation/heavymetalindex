---
title: Fruit Juice
type: ingredient
commodity: fruit-juice
aliases: ["apple juice", "grape juice", "pear juice", "fruit juice concentrate", "baby juice", lychee-juice, cherry-juice, pineapple-juice]
category: beverage-ingredient
contamination_profile:
  Pb: { status: populated, typical_ppb: [0.5, 5], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 10], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [fruit-source, water-source, concentration, packaging]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/fruit-juice-not-canned]]"]
audience: [regulator, educator, consumer, app]
sources: 4
updated: 2026-05-16
---

# Fruit Juice

_Stub page. Chekri et al. 2019 reports a French infant fruit-juice category with N=4, but does not separate fruit type, concentrate status, or canned status. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]_

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0.5–5 | low | [[sources/fda2022-draft-lead-juice\|1]], [[sources/fda2004-juice-haccp-lead\|2]] |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 1–10 | low | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|1]], [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|2]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

_Pending juice-specific extraction. Current Category 1 values are product-level context for [[products/fruit-juice-not-canned]]._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-draft-lead-juice\|FDA 2022]]. *Draft Guidance for Industry: Action Levels for Lead in Juice*, FDA Draft Guidance for Industry | 2022 | Government guidance | FDA 2022 draft Pb action levels for juice: 10 ppb for single-strength apple juice and 20 ppb for other juices, replacing the older 50 ppb HACCP context |
| 2 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French infant TDS occurrence data for Al, Sb, tAs, Cd, Cr, Ni, and Sn in fruit juice products consumed by infants and toddlers (n=291 total foods) |
| 3 | [[sources/kubachka2019-arsenic-speciation-fruit-juice-fda\|Kubachka et al. 2019]]. *Quantitative Determination of Arsenic Species from Fruit Juices Using Acidic Extraction with HPLC-ICPMS*, Food Analytical Methods | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/fda2004-juice-haccp-lead\|FDA 2004]]. *Juice HACCP Hazards and Controls Guidance, First Edition — Lead in Juice*, FDA Guidance for Industry | 2004 | Government guidance | FDA Juice HACCP guidance establishing 50 ppb Pb as the original hazard threshold for ready-to-drink fruit juices; superseded by the 2022 draft action levels |
<!-- END: hmi-source-legend -->

