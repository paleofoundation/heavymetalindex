---
title: Standards Workbench
description: Staff-only notes for the Heavy Metal Index standards workbench and certification-support workflow.
audience: [internal]
updated: 2026-04-30
noindex: true
---

<div class="hmi-staff-dashboard">
  <div class="hmi-staff-kicker">Internal workbench</div>
  <h1>Standards Workbench</h1>
  <p>The standards workbench is the private review layer for turning public Heavy Metal Index evidence into certification-support decisions. It is intentionally separate from the public pages.</p>

  <div class="hmi-staff-status">
    <div>
      <strong>Hosting status</strong>
      <span>Local/private</span>
    </div>
    <div>
      <strong>Public status</strong>
      <span>Not published</span>
    </div>
    <div>
      <strong>Data source</strong>
      <span>Repo evidence files</span>
    </div>
  </div>

  <div class="hmi-staff-actions">
    <a class="hmi-staff-primary" href="/workbench/standards/">Browse standards snapshots</a>
    <a class="hmi-staff-secondary" href="http://127.0.0.1:8090/">Open local workbench</a>
    <a class="hmi-staff-secondary" href="/staff">Back to staff dashboard</a>
  </div>
</div>

## Standards Snapshots

The per-product standards snapshots are the staff-side view of the public product pages. They carry the percentile arithmetic (p10 through p100), clean and dirty subcategory designation per Part 19, Path A/B status with n_a_tier, CC eligibility verdict, and next-ingest target. The public pages carry only the literature-native evidence.

Browse the full snapshots index at [[workbench/standards/index|/workbench/standards/]]. Each snapshot links back to its public product page; the two views regenerate together from the same data source on each generator run.

## Start The Local Workbench

Run this from the repo root on Karen's Mac mini:

```bash
cd ~/Desktop/heavy-metal-index
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
npm run workbench
```

Then open:

```txt
http://127.0.0.1:8090/
```

## What It Should Help Us Track

- Which categories are clean categories requiring p90-style qualification logic.
- Which categories are dirty categories requiring p10-style qualification logic.
- Which values are candidate, approved, rejected, or still gap-limited.
- Which evidence paper or agency dataset supports each row.
- Which regulatory limit caps any possible certification threshold.
- Which gaps remain: sample count, matrix basis, units, LOD/LOQ handling, jurisdiction match, method quality, or confidence computation.

## Current Structured Inputs

- `data/evidence/category1_register.csv`
- `data/evidence/category1_formula_concentration_summary.csv`
- `data/evidence/category1_formula_special_survey_samples.csv`
- `data/evidence/category1_fda_baby_food_compliance_summary.csv`
- `data/evidence/category1_fda_baby_food_compliance_samples.csv`
- `data/evidence/values.jsonl`
- `wiki/static/hmi-percentile-context.json`

## Current Pilot Pages

- [[products/infant-formula-powder-non-soy|Infant Formula, Powder (Non-Soy)]]
- [[products/infant-formula-powder-soy-based|Infant Formula, Powder (Soy-Based)]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey|FDA 2026 Infant Formula Toxic Elements Special Survey]]
- [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024|FDA 2024 Baby-Food Compliance Dataset]]
- [[certification/lab-result-comparator|Lab Result Comparator]]

## Decision Rule Reminder

No internal HMT&C threshold should be treated as final until it has a source-backed value, an explicit matrix basis, a regulatory guardrail check, a documented non-detect policy, and a reviewer decision.
