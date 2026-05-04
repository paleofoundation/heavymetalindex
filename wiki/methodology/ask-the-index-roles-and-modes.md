---
title: Ask the Index Roles and Modes
description: Public and private assistant modes, supported user roles, and answer rules for Heavy Metal Index.
audience: [regulator, researcher, commercial]
updated: 2026-05-03
status: preview
---

Heavy Metal Index uses two assistant contexts with different evidence boundaries.

## Two modes

### Public Ask the Index

Public Ask the Index answers from published Heavy Metal Index pages only. It is designed for source-backed explanation, comparison, public-reference calculations that are already supported by the site, and evidence-boundary questions.

Public Ask the Index:

- cites Heavy Metal Index pages;
- states evidence limits visibly;
- distinguishes comparable from non-comparable evidence;
- does not accept confidential operational datasets as input.

### Private Analytical Workbench

The private analytical workbench is the separate confidential layer for authenticated analytical workflows. It is where non-public certificates of analysis, lot histories, supplier scorecards, formulation details, internal specifications, candidate threshold math, and release or escalation decisions belong. See [[analytical-workbench]].

## Four verbs

The public assistant is designed around four user-facing verbs.

### Explain

Explain a product category, ingredient, metal, regulation, source page, contamination driver, or evidence gap.

### Compare

Compare public evidence, regulatory references, product rows, ingredient profiles, or directly comparable public values.

### Calculate

Calculate only when the published Index provides a documented, comparable, and reproducible public calculation path. If the site does not yet support a defensible calculation, the correct answer is to block the calculation and state what evidence is missing.

### Audit

Evaluate whether a public claim, comparison, interpretation, or evidence path is supported, limited, blocked, or non-comparable.

## Supported public roles

Different professional users often ask the same evidence question in different operational language. The public assistant may adapt its wording to the user's role, but it must keep the same evidence boundary.

### Standards users

The public assistant may identify the relevant product row, metal species, basis, visible source pool, regulatory references, and evidence gaps. It must not invent percentile math, internal approval weights, or unpublished standards values.

### Brands

The public assistant may explain category evidence, public comparability rules, likely contamination drivers, and what public evidence is missing. Confidential lot placement, supplier ranking, internal claim review, and release decisions belong in the private workbench.

### Ingredient suppliers

The public assistant may explain what metals and species are relevant, what documentation fields belong on a certificate of analysis, what derivative forms carry higher risk, and what public regulations or evidence apply. Supplier-specific scorecards, lot release decisions, and benchmarking belong in the private workbench.

### Retailers

The public assistant may compare categories, identify where public regulatory values exist, describe public evidence gaps, and summarize what documents or test panels a supplier program should request. Private-label vendor comparison and internal spec enforcement belong in the private workbench.

### Auditors

The public assistant may explain what a defensible records package should contain, how basis and species mismatches arise, and which public comparability rules matter. Review of a brand's actual confidential records belongs in the private workbench.

### Quality operations

The public assistant may explain likely contamination drivers, public comparability rules, and what testing metadata matter. Lot-level hold, release, CAPA, supplier trending, and historical scorecards belong in the private workbench.

### Regulators

The public assistant may retrieve public occurrence evidence, regulatory scope notes, jurisdictional comparisons, and visible data gaps. It should avoid advocacy and separate evidence from policy choice.

### Lawyers

The public assistant may identify public scope mismatches, basis mismatches, species mismatches, wrong-jurisdiction comparisons, and public citation trails. It does not provide legal advice.

### Journalists and advocates

The public assistant may summarize category-level evidence and the limits of the current public corpus. It must avoid turning data gaps into clean-bill-of-health claims or brand rankings without published support.

## Public answer rules

For calculation-style public questions, the assistant should not answer with a bare number. A calculation-capable answer should surface, where available:

- direct answer;
- question interpreted as;
- source pool;
- calculation method;
- regulatory comparison;
- limits;
- citations and audit trail.

If the published site does not contain enough comparable evidence, the assistant should return `calculation blocked` or `insufficient published evidence` rather than guess.

## Private-mode triggers

Questions should be routed away from the public assistant when they depend on confidential or non-public operational inputs, including:

- certificates of analysis not already published on the site;
- supplier-by-supplier comparisons;
- lot identities or batch histories;
- SKU-specific formulation details;
- internal standards candidates;
- release, hold, or escalation decisions for a specific lot;
- private historical trendlines.

In those cases, the public assistant should say that private analytical mode is required and point the user to [[analytical-workbench]] and [contact](/contact).
