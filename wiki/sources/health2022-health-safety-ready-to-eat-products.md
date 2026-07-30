---
title: "Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market"
cite_key: health2022-health-safety-ready-to-eat-products
raw_handle: FM_9183086
source_type: peer-reviewed
evidence_tier: A
year: 2022
authors: []
publication: []
doi: []
keywords: [ready-to-eat products, children, Poland, heavy metals, As, Cd, Pb, Hg, risk assessment]

products:
  - infant-food-ready-to-eat
  - infant-food-powder
  - infant-formula

ingredients:
  - cereal-grains
  - fruits
  - vegetables
  - meat-poultry
  - dairy

matrices:
  - infant-food-powder
  - infant-food-jarred
  - infant-food-ready-to-feed-liquid

metals:
  - Pb
  - Cd
  - As
  - Hg

jurisdictions:
  - Poland
  - EU

ingest_method: autonomy_phase1_v0
created_by: autonomy_v0
created: 2026-05-19
status: indexed
confidence: pending-data-extraction
wiki_doi: null
sampling_locations: []
sampling_year_range: null
---

## Overview

This peer-reviewed study assessed heavy metal contamination in ready-to-eat products marketed for children aged 0.5–3 years in Poland. The research measured arsenic (As), cadmium (Cd), lead (Pb), and mercury (Hg) across multiple product categories and compared findings to applicable regulatory limits.

## Scope

**Population:** Ready-to-eat infant/child food products available in the Polish market
**Age group:** Children aged 0.5–3 years
**Analytes:** As (total or speciated—requires confirmation), Cd, Pb, total Hg (tHg) and/or methyl-Hg (MeHg—requires confirmation)
**Sample design:** [Sample sizes, stratification by product type, sampling methodology—requires data extraction from Methods section]
**Jurisdiction:** Poland (comparative data to Polish and EU regulatory limits likely included)

## Key numbers

[**PENDING DATA EXTRACTION FROM RESULTS TABLES**]

This section requires extraction from Tables on pages 7, 9, 10, and 15. Expected structure:

- **Sample counts** by product category (powder, jarred, ready-to-feed liquid; by subcategory as applicable)
- **Concentration data** (As, Cd, Pb, Hg): means, medians, ranges, percentiles (min, p5, p25, p50, p75, p95, max), LOD/LOQ
- **Risk assessment outputs** (likely hazard index, target hazard quotient, or margin of safety calculations by age group and product category)
- **Comparison to regulatory baselines** (Polish limits, EU limits for relevant product categories)

**Data stratification:** Confirm whether results are presented by:
- Product form (powder vs. liquid)
- Product subtype (fruit, vegetable, meat, cereal, etc.)
- Age group (if subcategories within 0.5–3 years)
- Analyte (separate As/Cd/Pb vs. combined hazard index)

## Methods

**Analytical methods:**
- **Sample preparation:** Likely microwave or acid digestion (requires confirmation of specific protocol, acid type, volume, heating parameters)
- **Instrumentation for As, Cd, Pb:** ICP-MS or ICP-OES (requires model, detection limits, internal standards, calibration approach)
- **Instrumentation for Hg:** Cold-vapor AAS or pyrolysis AAS (requires model, detection limits)
- **Quality assurance:** Reference materials, CRM information, spike recovery rates, duplicate analysis details (requires confirmation)
- **Statistical methods:** [Methods for censored data handling, LOD/LOQ treatment, comparative analysis, risk assessment calculation—requires Methods section review]

**Basis:** [Confirm whether reported values are for product as purchased/as consumed for each matrix type. For powders, confirm if reconstitution factors applied.]

## Implications

**Direct evidence on:**
- Baseline contamination in ready-to-eat infant products (Poland market, circa 2022)
- Relative contamination by product type (powder vs. jarred vs. liquid)
- Relative contamination by ingredient composition

**Risk assessment baseline:**
Numerical findings will establish whether risk from these products is driven by single analytes or cumulative hazard, and whether any products approach or exceed regulatory concern thresholds for the 0.5–3 year age group.

**Routing destinations (preliminary—confirm based on data extraction):**
- `products/infant-food-ready-to-eat` (direct evidence)
- `products/infant-formula` (if powders included and measured; direct evidence)
- `products/infant-food-powder` (if measured separately; direct evidence)
- `ingredients/cereals` / `ingredients/fruits` / `ingredients/vegetables` / `ingredients/meat` (broad formula context if stratified)
- `metals/lead`, `metals/cadmium`, `metals/arsenic`, `metals/mercury` (direct evidence)
- `regulations/polish-limits` / `regulations/eu-limits` (regulatory context if limits compared)

## Wiki pages updated on ingest

[Auto-generated during synthesis pass after data extraction. Do not edit by hand.]

---

**Status:** This source page is indexed and awaiting full data extraction from the paper's results tables. The analytical methods, sample design, and regulatory comparison statements can be completed from the Methods and Discussion sections once the full paper text is processed. The Key numbers section will be populated following extraction of numerical results; initial synthesis of this source will trigger once a second contributing source reaches the same (ingredient, metal) cell in the routing audit.

**Next step:** Extract numerical values from Results tables (pages 7, 9, 10, 15) and populate Key numbers section with means, medians, percentiles, LOD/LOQ, and risk assessment findings.
```

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [c725338fb](https://github.com/paleofoundation/heavymetalindex/commit/c725338fb) | 2026-05-19 | major | Contamination-profile values revised; 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
