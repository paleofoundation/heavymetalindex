---
title: Methodology
description: Selection, extraction, quality-assurance audit, error categorization, and correction procedures used in the Heavy Metal Index.
audience: [regulator, educator, researcher]
updated: 2026-04-24
status: stub
---

This page describes how the Heavy Metal Index is built. It is the first page sophisticated readers are expected to consult, and is maintained as a living document. Substantive changes to methodology are logged; the version history in git is the authoritative record.

## Current status

The Heavy Metal Index is in pre-launch development. The methodology described below reflects the intended final state. Sections that remain under construction are marked as such. A publicly verifiable quality-assurance audit with error-rate statistics will precede the move from pre-launch to general availability.

## Scope

Coverage is scoped to lead, cadmium, inorganic and total arsenic, methylmercury and total mercury, nickel, aluminum, chromium, and tin, as these metals occur in food, food ingredients, supply-chain inputs (soil, water, fertilizers, equipment, packaging), remediation approaches, and governing regulatory instruments. Clinical metallomics in medicine, occupational exposure in industrial settings, and environmental exposure outside the food system are out of scope; a substantial portion of that material lives at [WikiBiome](https://wikibiome.com).

## Source selection

The corpus draws primarily from peer-reviewed journal literature (Tier A), supplemented by government and intergovernmental regulatory and scientific documents from the United States Food and Drug Administration, the European Food Safety Authority, the World Health Organization, the United States Environmental Protection Agency, and Codex Alimentarius (also Tier A). Industry white papers, non-governmental organization reports such as those from the Environmental Working Group and Healthy Babies Bright Futures, and reputable trade publications are admitted as Tier B with explicit attribution. News coverage and blog material are treated as Tier C; such material is used as a lead to verify against primary sources, not as evidence in its own right.

A detailed inclusion-and-exclusion protocol with the full search strategy, database coverage, and handling of preprints, retractions, and duplicates is forthcoming and will be published before general availability.

## Extraction

Extraction separates deterministic operations from interpretive operations by design. Deterministic work (portable document format parsing, structured table extraction, field population from clearly labelled data, cross-reference validation) is handled programmatically in Python. Interpretive work (synthesis of findings, classification of ambiguous studies, relationship identification) is handled by a human reviewer working with a language model as drafting assistant, under the constraints described below. The architectural separation is enforced in code and reflected in the commit history.

Every extracted data point includes a provenance link to the source document with sufficient specificity that a hostile reader can verify it in the original (page number, table number, or quoted passage as appropriate). Where provenance cannot be established to this standard, the data point is not published.

## Quality assurance

A pre-launch audit will sample extracted records at a rate sufficient to produce published error-rate statistics before the site moves to general availability. Audit methodology, sample size, reviewer qualifications, error taxonomy, and threshold for launch are under development and will be documented on this page prior to the audit. Audit results and remediation actions will be public.

After launch, ongoing quality assurance comprises: periodic re-sampling of published records; lint passes across the wiki detecting contradictions, stale claims, orphaned pages, missing cross-references, and evidence-tier imbalances; and a standing correction-reporting channel accessible from every page.

## Corrections and versioning

When an error is identified, the affected pages are corrected and the correction is logged in the [log](/log). The correction appears in the page history (visible in the git commit log for the repository); material corrections are also summarized on the page itself at the foot of the affected section. Published regulatory values are never rounded, harmonized, or silently substituted; the exact value from the cited agency source is preserved, with conversions to comparable units shown explicitly where needed.

## Human review

A human review layer is a non-negotiable part of this project. Pure algorithmic extraction at scale has known failure modes that have been documented during the pipeline's development, including numeric hallucination, silent regulatory value substitution, and citation fabrication. The review process, the reviewer roster, the sign-off protocol, and the dispute-resolution procedure are under development and will be documented prior to launch.

## Licensing and access

The Heavy Metal Index is operated by the Paleo Foundation (Cyprus) and is published for public research access under terms that distinguish non-commercial research use from commercial bulk access. The European Union's database-rights framework applies. The terms of use published at [terms](/terms) govern use of the site and its content. Commercial licensing for bulk access or derivative works is available by arrangement with the Paleo Foundation.
