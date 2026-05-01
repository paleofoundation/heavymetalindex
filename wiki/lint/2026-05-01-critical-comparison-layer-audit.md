---
type: lint-audit
title: "Critical comparison layer ingest audit"
updated: 2026-05-01
---

# Critical Comparison Layer Ingest Audit

Created the first regulatory-limit-versus-field-finding comparison layer for HMTc review.

## Added

- Machine-readable regulatory limits: `data/evidence/regulatory_limits.csv`
- Product crosswalk: `data/evidence/product_regulatory_crosswalk.csv`
- FDA formula sample extraction: `data/evidence/category1_formula_special_survey_samples.csv`
- FDA formula summary extraction: `data/evidence/category1_formula_concentration_summary.csv`
- Cross-category wiki hub: [[products/regulatory-crosswalk-field-findings]]
- FDA regulation nodes for processed baby-food lead, infant rice-cereal inorganic arsenic, apple-juice inorganic arsenic, draft juice lead, Juice HACCP lead, and bottled-water lead.

## Handling Rules

- Regulatory values were kept separate from field findings and from HMTc candidate limits.
- Draft FDA juice lead values were marked as draft and not for implementation.
- Formula occurrence findings were not compared to processed-baby-food action levels because no matched FDA formula action level was loaded.
- FSA/Fera product and ingredient occurrence evidence remains comparison-blocked until structured table extraction preserves analyte species, basis, units, LoD/LoQ flags, and matrix routing.
