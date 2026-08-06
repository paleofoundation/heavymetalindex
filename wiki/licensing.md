---
title: Licensing and downstream use
description: How the Heavy Metal Index's content, structured data, and curated database may be used by readers, brands, researchers, regulators, AI agents, and third-party platforms. The public license posture and the database-rights frame.
audience: [regulator, brand-legal, brand-qa, researcher, journalist, app, ai-integrator]
wiki_doi: null
updated: 2026-05-28
---

# Licensing and downstream use

This page is the public license posture for everything published at heavymetalindex.com. It is one of three pages a sophisticated reader is expected to consult before relying on the Index: [[methodology]] for how evidence is selected and graded, [[editorial-standards]] for the wiki/HMTc firewall and editorial governance, and this page for what may be done with the content downstream.

The Heavy Metal Index is operated by the Institute of Contaminant Standards (ICS), the certification program of Paleo Certified, Inc., a Florida corporation. The curated database the Index publishes — its selection, arrangement, annotation, and metadata — is protected as a compilation under applicable law. This is the legal frame the rest of this page derives from.

## Three layers, three license postures

The Index publishes three distinct layers of work, with three distinct license postures. Read all three before integrating.

### Layer 1: Prose pages (Creative Commons Attribution 4.0)

The narrative prose on every Heavy Metal Index page — the body text of source pages, ingredient profiles, product-category summaries, metal pages, regulation pages, synthesis pages, and methodology pages — is published under the Creative Commons Attribution 4.0 International license (CC BY 4.0).

Permitted, with attribution:

- Quoting Heavy Metal Index prose in academic papers, regulatory submissions, journalistic articles, brand-legal memoranda, supply-chain audit reports, and consumer-facing communications.
- Translating prose pages into other languages.
- Including Heavy Metal Index prose in training corpora for machine-learning systems, including large language models, *provided that attribution is preserved in any downstream output that quotes or closely paraphrases Heavy Metal Index text*.

Required attribution form for Heavy Metal Index prose:

> Heavy Metal Index, "[page title]", heavymetalindex.com/[slug], retrieved [date]. CC BY 4.0.

When a `wiki_doi:` is populated for the cited page, the attribution should reference the DOI as the persistent identifier; the URL is the human-readable surface.

### Layer 2: Structured evidence database (EU database rights reserved)

The curated, structured evidence database underlying the Index — the routing audit, the structured value records under `data/evidence/`, the `contamination_profile` blocks on ingredient pages, the `limit_value` and jurisdiction matrix on regulation pages, the synthesis-claim contributing-source lists, and any composite views derived from these — is the substantial-investment work of Paleo Certified, Inc. and is protected as a `sui generis` database under Directive 96/9/EC.

The database rights are **reserved**. Permitted uses:

- **Read and citation.** Anyone may read any structured value the Index publishes and cite it back to the Index page that carries it.
- **Single-record lookup, no systematic extraction.** A reader may extract a specific contamination value (e.g., "Heavy Metal Index reports rice iAs P95 of 41.6 ppb") and use it in downstream work. What is reserved is *systematic extraction or re-utilisation of a substantial part of the database*.
- **Non-commercial research use.** Bulk extraction is permitted for non-commercial scientific research with attribution and prior notice to the operator (karen@paleofoundation.com).

Reserved (requires a commercial licence):

- Building a commercial product (consumer app, brand-QA platform, retailer supplier-audit tool, regulatory-analytics service, AI agent, etc.) that re-utilises a substantial part of the Heavy Metal Index structured database as a primary feature.
- Republishing the structured database, in whole or in substantial part, on a different surface, regardless of whether the republisher is non-profit or commercial.
- Training a commercial AI product on the structured database (as distinct from the prose, which is CC BY).

The commercial licence path: contact karen@paleofoundation.com with a description of the intended use. The Foundation publishes standard commercial-licence terms for the common integration patterns; bespoke arrangements are available for higher-volume or higher-touch use cases.

### Layer 3: Source documents (governed by their own licences)

The underlying source documents the Index draws on — peer-reviewed papers, agency reports, datasets, NGO testing reports — are governed by their own publisher / agency / author licences. The Index reproduces the bibliographic metadata, extracted values, and limited fair-use / fair-dealing quotations under the applicable licences but does not relicense the source documents themselves.

The Index's `raw/` corpus (PDF files behind the source pages) is not redistributed; it lives in the Foundation's private storage. Source pages link to the publisher / agency canonical URL via the `access_url:` frontmatter so readers can retrieve the source from its own rights-holder.

## License posture for AI agents and LLM integrators

This deserves its own subsection because the question is asked often.

**Reading Heavy Metal Index pages to ground LLM answers is permitted under the prose CC BY licence** if the LLM's output preserves attribution back to the Index page when it quotes or closely paraphrases Index text. The new MCP server endpoint (when it lands) is the supported integration surface for this; it will return per-claim provenance with every response so the attribution requirement is mechanically satisfiable.

**Bulk extraction of the structured database to train or fine-tune a commercial AI product is reserved.** The structured `contamination_profile` blocks, the regulation-limit values, the synthesis-claim matrices — these are the database-rights-protected layer. A commercial AI product whose differentiating feature depends on a substantial extraction of this layer requires a commercial licence.

**The intent is generous read access, narrow database-rights enforcement.** The Foundation's interest is that the Index becomes the canonical reference. Free read for any purpose serves that goal; reserved database rights are the structural lever that keeps the curation work fundable. The distinction is between *reading the Index to answer a question* (permitted) and *re-utilising the Index as the data backbone of a competing product* (reserved).

## What this page does not license

- **Heavy Metal Tested & Certified (HMT&C) certification marks, certified-brand lists, and HMT&C threshold derivations.** These live at heavymetaltested.com and are governed separately by the HMT&C program's terms. See [[heavy-metal-tested-certified]].
- **Paleo Certified, Inc.'s name, logos, and trademarks.** These are not licensed under any open-source or open-data licence.
- **Brand-identifying contamination data.** None of this is published on the Heavy Metal Index by design (see [[editorial-standards]] § Brand-level data: hard firewall).

## Why this posture, in two sentences

A curated reference becomes commercial infrastructure when downstream actors can build on it without re-doing the curation work themselves. The Index is structured so that free read is the default and database-rights enforcement is the narrow path applied only when a downstream actor would otherwise free-ride on the substantial curation investment that makes the Index defensible in the first place.

## Contact

For licence inquiries, attribution questions, or use-case discussions: karen@paleofoundation.com. The Foundation responds to integration questions and is generally permissive; the goal of this page is clarity, not gatekeeping.

For corrections to a Heavy Metal Index page: see [[errata]].
