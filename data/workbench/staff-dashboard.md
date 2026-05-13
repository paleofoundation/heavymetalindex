---
title: Staff Access
description: Restricted staff access entry point for Heavy Metal Index internal review tools.
audience: [internal]
updated: 2026-04-30
noindex: true
---

<div class="hmi-staff-dashboard">
  <div class="hmi-staff-kicker">Restricted access</div>
  <h1>Staff Dashboard</h1>
  <p>Internal Heavy Metal Index review tools are restricted to authorized Paleo Foundation staff and are not part of the public evidence index. This dashboard is the private map for standards work, review queues, and certification-support tooling.</p>

  <div class="hmi-staff-status">
    <div>
      <strong>Access gate</strong>
      <span>Active on Vercel</span>
    </div>
    <div>
      <strong>Standards Workbench</strong>
      <span>Local/private only</span>
    </div>
    <div>
      <strong>Search indexing</strong>
      <span>Noindex</span>
    </div>
  </div>

  <div class="hmi-staff-callout">
    <strong>Important:</strong> the hosted staff area is now protected, but the standards workbench itself still runs locally. Use the workbench link below after starting `npm run workbench` on your machine.
  </div>

  <div class="hmi-staff-actions">
    <a class="hmi-staff-primary" href="/workbench">Open workbench notes</a>
    <a class="hmi-staff-secondary" href="http://127.0.0.1:8090/">Open local workbench</a>
    <a class="hmi-staff-secondary" href="/certification/lab-result-comparator">Lab comparator</a>
    <a class="hmi-staff-secondary" href="/staff/logout">Sign out</a>
  </div>
</div>

<div class="hmi-staff-grid">
  <a class="hmi-staff-card" href="/workbench">
    <span>Internal Tool</span>
    <strong>Standards Workbench</strong>
    <p>Local dashboard for clean/dirty category logic, evidence gaps, regulatory guardrails, and copy/paste research prompts.</p>
  </a>
  <a class="hmi-staff-card" href="/products/infant-formula-powder-non-soy">
    <span>Pilot Product Row</span>
    <strong>Infant Formula, Powder (Non-Soy)</strong>
    <p>Primary pilot page for prepared-formula percentile context, study reconciliation, and certification-method questions.</p>
  </a>
  <a class="hmi-staff-card" href="/certification/lab-result-comparator">
    <span>Brand Pre-Screen</span>
    <strong>Lab Result Comparator</strong>
    <p>Browser-only comparison page for brands checking their own results against currently structured HMI context.</p>
  </a>
  <a class="hmi-staff-card" href="/sources/fda2026-infant-formula-toxic-elements-special-survey">
    <span>Source Extraction</span>
    <strong>FDA 2026 Formula Survey</strong>
    <p>Source page showing derived sample files, summary rows, and current notes for formula evidence extraction.</p>
  </a>
</div>

## What Exists Now

- Public HMI pages: product categories, metals, regulations, sources, methodology, privacy, terms, contact, and citation assistant.
- Staff login: deployed, protected, noindexed, and cookie-based.
- Local workbench: available at `http://127.0.0.1:8090/` when `npm run workbench` is running.
- Structured evidence layer: Category 1 register, value JSONL records, formula and baby-food summary extracts, and percentile context JSON.
- Certification-support page: lab-result comparator for brand pre-screening against structured HMI context.

## What Is Still Local

- The workbench has not been converted into a hosted database-backed app.
- Final standards decisions are not public and should not be published until explicitly approved.
- The local workbench and the public site communicate through repo files, not through a live database yet.

## Next Build Step

The next real internal upgrade is to make the workbench persist finalized candidate values, evidence-source references, unresolved gaps, and reviewer decisions in a structured store. Once that exists, the staff dashboard can show live category status instead of linking to the local-only workbench.
