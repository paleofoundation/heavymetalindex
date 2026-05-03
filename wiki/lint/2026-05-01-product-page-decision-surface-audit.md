---
type: lint-audit
title: "Product page decision-surface audit"
updated: 2026-05-01
---

# Product Page Decision-Surface Audit

The current product pages are useful as source-backed narrative pages, but they are not yet maximally useful as standards-development work surfaces. The main weakness is that a reviewer must read several prose sections before seeing the three questions that matter most:

1. What external regulatory values apply to this exact row, metal, basis, and product scope?
2. What field findings exist for the same row and are they computation-ready?
3. What can HMTc do with those values: data-grounded, provisional, held-to-clean, blocked, or context-only?

## Recommended Page Shape

Each product page should eventually use this order:

| Section | Function |
|---|---|
| Decision snapshot | One table containing row ID, contamination platform, clean counterpart, data-grounded cells, blocked cells, and urgent gaps. |
| Regulatory crosswalk vs field findings | External values, source status, field finding summary, HMTc use, and legal caveats. |
| Occurrence evidence | Source-by-source findings with N, basis, units, analyte species, censoring, P10/P50/P90/P95, and evidence-fitness verdict. |
| Driver analysis | Ingredients, formulation, geography, packaging, processing, and analytical method drivers. |
| Legal/regulatory notes | Scope caveats, draft/final status, enforcement events, and non-use warnings. |
| Sources | Promoted source pages and regulation pages only. |

## Audience Utility

- Standards team: needs the P90_clean/P10_dirty decision statistic, evidence-fitness verdict, and blocked cells without reading narrative.
- Regulators: need exact source jurisdiction, authority, status, unit, basis, and scope caveats.
- Retailers and brands: need what is actionable now versus what is only context.
- Brand lawyers: need explicit separation of regulatory values, field findings, HMTc standards-development values, draft guidance, and current-market/brand-ranking caveats.

## Regional Pooling

Regional pooling is necessary for ingredients and supply-chain interpretation, but it should not be the default top-line product value. The evidence engine should store separate fields for:

- market_region: where the product was purchased;
- origin_region: where the ingredient or product was grown or made, when known;
- sampling_period: years represented by the samples;
- jurisdiction: authority issuing a regulatory value;
- method_region: lab or program context, where relevant.

Pool only after matching product matrix, analyte species, basis, unit, method, and time window. A UK 2013-2014 market-basket survey and a US FY2023-FY2025 market-basket survey should appear side-by-side first; any pooled global summary should be a secondary synthesis with a conflict flag if source medians or percentiles diverge materially.
