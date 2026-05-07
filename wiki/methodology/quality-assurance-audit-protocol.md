---
type: methodology
methodology_id: quality-assurance-audit-protocol
title: Quality Assurance Audit Protocol
audience: [regulator, researcher, standards]
updated: 2026-05-03
sources: 0
---

# Quality Assurance Audit Protocol

This page defines how the Heavy Metal Index audits its own public evidence output before moving from preview into general availability, and how it performs ongoing quality assurance after launch.

## Audit goal

The goal of the audit is not to prove that no mistake can ever occur. The goal is to make error classes visible, quantify their frequency in a reproducible way, and demonstrate that the highest-risk public claim types are being checked against source material rather than trusted because they were machine-generated.

## Audit units

The primary audit units are:

- source pages;
- structured value records promoted to public use;
- public numeric claims on product, ingredient, regulation, and metal pages;
- routing decisions where a source was assigned to a product or ingredient family;
- citation and provenance links.

## Sampling design

The pre-general-availability audit is stratified rather than purely random. High-risk claim classes are oversampled.

The audit strata are:

- regulatory reference values;
- product-page structured values and standards matrices;
- ingredient-page synthesis values and machine-readable contamination profiles;
- source-page summaries and extracted key numbers;
- routing and row-fit decisions for structured product evidence.

Within each stratum, records are sampled across source classes, page families, and analytes so that the audit does not accidentally become a check of only one strong corner of the build.

## Machine adjudication boundary

Routine source-to-row decisions are assigned to the AI adjudication layer, not to a manual clerical workflow. The machine layer is responsible for product row fit, basis, analyte species, units, statistic type, censoring treatment, Evidence Fitness, and routeability when the source provides enough information.

Human participation is reserved for source retrieval, low-confidence exceptions, policy conflicts, and final governance approval of thresholds. Auditors check the machine decision trace against source material; they are not expected to perform first-pass sorting by hand.

## What reviewers check

Every audited record is checked against the underlying source material and the published page or evidence file.

Reviewers verify:

- the cited source is the correct source;
- the quoted or extracted number matches the source;
- the analyte species is correct;
- the basis is correct;
- the unit is correct;
- the matrix and product fit are correctly described;
- the public wording does not claim more than the source supports;
- routing is consistent with the source scope;
- any visible caveat or gap note is present where it should be.

## Error taxonomy

Errors are recorded by severity, not just by count.

### Critical

Errors that could materially mislead a regulator, litigator, brand, or public reader:

- fabricated or miscopied numeric value;
- wrong source attached to claim;
- wrong analyte species;
- wrong regulatory threshold;
- wrong basis where the difference changes interpretation;
- citation or provenance link that points to a different source than the one actually used.

### Major

Errors that do not invent the claim but materially weaken interpretation:

- wrong routing to product or ingredient family;
- omitted caveat where basis, species, period, or row fit is known to be limited;
- misleading summary language that overstates certainty;
- stale value left in place after a known source-family update.

### Minor

Errors that affect polish or discoverability without materially altering interpretation:

- formatting defects;
- typographic issues;
- incomplete but non-misleading metadata;
- non-critical internal-link problems.

## Pre-launch threshold

The Index does not move out of preview until:

- all audited critical errors are remediated;
- the audited major-error pool is remediated or explicitly deferred with visible rationale;
- the published audit report states the observed error counts by stratum and severity;
- any pipeline issue that generated recurring error patterns has a documented remediation step.

The important threshold is not "zero mistakes forever." It is "no unresolved critical error class in the audited public build, and no hidden recurring failure mode."

## Audit publication

The public audit publication includes:

- sampling frame and date range;
- page families and record classes reviewed;
- error taxonomy;
- counts by severity and stratum;
- examples of corrected error classes;
- remediation actions taken;
- any residual limitations still visible in the public build.

## Ongoing quality assurance

After general availability, quality assurance continues through four channels.

1. Targeted re-audits after major pipeline or schema changes.
2. Ongoing lint passes for provenance gaps, stale regulations, missing routing, orphan pages, contradiction flags, and evidence-state drift.
3. Public correction intake through the contact and corrections workflow.
4. Focused review when a source family is updated, contested, or newly promoted from internal to public use.

## Why this matters

The Heavy Metal Index is most valuable when a skeptical reader can see not only the evidence, but also the discipline used to keep the evidence map honest. A public QA protocol is part of that discipline.
