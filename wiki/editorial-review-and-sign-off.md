---
title: Editorial Review and Sign-Off
description: Role structure and review model for Heavy Metal Index public evidence pages.
audience: [regulator, educator, researcher, commercial]
updated: 2026-05-03
---

# Editorial Review and Sign-Off

This page describes who does what inside the Heavy Metal Index editorial workflow, how public evidence moves from extraction to publication, and which kinds of changes require explicit human review.

## Operating model

The Heavy Metal Index is operated by the Paleo Foundation. The working editorial model is role-based rather than personality-driven: public trust should not depend on a single chat session, a single automation run, or a single reviewer acting alone.

The core roles are:

- corpus and provenance maintenance;
- deterministic extraction and evidence-register maintenance;
- editorial synthesis and routing review;
- public-use approval for numeric and regulatory claims;
- governance review when a change affects the editorial firewall or dispute posture.

## What can be automated

Automation may:

- inventory raw files;
- compute hashes and source-family matches;
- draft source metadata;
- extract deterministic tables and candidate values;
- generate reviewer queues, routing audits, and gap reports;
- regenerate public pages from already approved structured evidence.

Automation may not, by itself, authorize a new public numeric claim. Public use of a newly extracted number requires review and promotion.

## Public sign-off boundary

The following changes require explicit human review before they become the basis of a public claim:

- new structured numeric values promoted to public use;
- new regulatory thresholds or changed regulatory interpretations;
- new routing logic that affects which product or ingredient page receives a source;
- changes to public language that resolve a contradiction or tighten a conclusion;
- new methodology or governance rules.

## Source-page review

Every public source page must satisfy three sign-off questions:

- Is this the correct source and the correct version of that source?
- Does the page accurately summarize what the source does and does not support?
- Are the routeable claims and numbers traceable enough that a skeptical reader could verify them?

## Product- and ingredient-page review

Product and ingredient pages sit closer to synthesis, so they carry additional review duties.

Reviewers check:

- whether the source was routed to the correct product or ingredient family;
- whether basis, species, and matrix fit were preserved;
- whether summary language distinguishes direct evidence from context-only evidence;
- whether gaps remain visible rather than being softened away;
- whether generated exports and tables match the visible page.

## Regulatory-page review

Regulatory pages are checked against the operative agency or intergovernmental document itself, not against derivative summaries. If a value is converted for comparison, the original unit and exact published threshold must still remain visible.

## Escalation

Changes that touch the editorial firewall, conflict posture, disputed interpretations, or high-stakes public comparisons are escalated for governance review rather than being treated as routine page maintenance.

## Version control

All substantive changes are committed in git. The repository history is the authoritative record of when a page changed, and the public [log](/log) summarizes the most important schema, ingest, correction, and methodology events.
