---
title: Trust Center
description: One-page navigator to every Heavy Metal Index trust artifact — methodology, editorial governance, conflicts of interest, errata, licensing, audits, and version history. The page a sophisticated reader (brand legal, regulator, journalist, peer reviewer) reaches first.
audience: [regulator, brand-legal, brand-qa, researcher, journalist, ai-integrator]
wiki_doi: null
updated: 2026-05-28
---

# Trust Center

## Overview

This page is the single navigator a sophisticated reader can reach to confirm how the Heavy Metal Index is built, who is accountable for it, and what they can do with what they read here. It is intentionally one page and intentionally short. Each section names the canonical artifact and links straight to it; the depth lives on the linked pages, not here.

This page is referenced from [[curators]] as the future hub for editorial governance. Brand legal, regulatory-affairs, retailer compliance, and academic-peer readers should be able to confirm every defensibility claim the Index rests on by reading this page and following one link.

## Why the Index exists, and how it positions

The strategic frame is at [[roadmap]]: what the Index is today, the four shifts that define the mature state (corpus completeness, structured data as the primary product, multi-surface output, authority through citation), and what the Index explicitly does *not* promise. The defensibility argument the Index rests on — that operating a curated, citation-grounded, complete corpus of the heavy-metals food-and-supply-chain literature gives the operator epistemic asymmetry — is the through-line that all of the artifacts below serve.

## How evidence is selected, graded, and rendered

- [[methodology]] — the editorial methodology: how papers are selected, how extraction is performed, how evidence is graded (A / B / C tiers), how synthesis is composed, and how contradictions are flagged.
- [[methodology/search-strategy]] — the Cochrane-equivalent search-strategy publication documenting the 10-database literature search, inclusion criteria, and the discovery pipeline.
- [[coverage]] — the PRISMA-equivalent coverage page: corpus scope, inclusion / exclusion counts, what is and is not yet indexed.
- [[editorial-standards]] — the editorial governance posture, including the wiki / HMTc editorial firewall, the brand-data firewall, and the two-stage review discipline.

## Who is accountable

- [[curators]] — named curators of the Index, their credentials, domain expertise, and conflict-of-interest disclosures. Scaffold state today; the structural slots are in place, named individuals fill in as the curatorial board finalises. Recusal log is on the page.
- The principal conflict — the Paleo Foundation's parallel operation of the [Heavy Metal Tested & Certified](https://heavymetaltested.com) certification program — is disclosed on every editorial page and is the central question the [[editorial-standards|editorial firewall]] answers.

## How errors are handled

- [[errata]] — the public erratum process: how to submit a correction, the three-state workflow (acknowledged within 5 business days; substantive review; external review for synthesis-touching corrections), and the public log of substantiated changes.
- [Submit a correction directly](/contact#corrections-and-editorial) — the form is on the contact page; email at karen@paleofoundation.com is a supported backup channel.

## How a page can be cited and verified

Every public reference page on the Index carries:

- A canonical citation block at the page footer (the "Cite this page" widget).
- A downloadable JSON evidence packet at `/api/evidence-packet?slug=<slug>&download=1` pinning the page to its current git commit, with the SHA-256 of the body and the contributing source list. Designed for use as a litigation exhibit, regulatory submission, or peer-review supplementary record.
- A "Page history" footer rendered on every wiki page listing the last five git commits that touched it, linkable to the public GitHub repository.

The authoritative version history is the [public git repository](https://github.com/paleofoundation/heavymetalindex). The DataCite per-page DOI minting integration is reserved as `wiki_doi:` across page frontmatter; minting is a configuration switch when the integration ships, not a schema migration ([[roadmap]] Shift 4).

## What may be done with the content

- [[licensing]] — the three-layer license posture: CC BY 4.0 prose, EU `sui generis` database rights reserved on the structured evidence database, source documents governed by their own publisher / agency licences. The commercial-licence path for downstream products and AI-agent integrators is named on the page.

## How the data can be queried directly

The roadmap commits to api.heavymetalindex.com as a first-class surface. The currently live endpoints:

- [`/api/contamination`](/api/contamination?ingredient=rice) — per-ingredient contamination profiles in literature-native terms.
- [`/api/regulations`](/api/regulations?metal=Pb) — regulatory thresholds with jurisdiction / metal / matrix / agency / status filters.
- [`/api/evidence-packet?slug=ingredients/turmeric`](/api/evidence-packet?slug=ingredients/turmeric) — citable manifest for a single page.
- [`/api/mcp`](/api/mcp) — MCP (Model Context Protocol) server exposing the Index as a tool surface for AI agents, with per-claim provenance attached to every response. Tools: `contamination_lookup`, `regulation_lookup`, `synthesis_lookup`, `search_evidence`, `coverage_status`, `source_lookup`, `regulation_history`, `product_category_lookup`.
- [`/api/ask`](/ask) — natural-language retrieval over the cited corpus.

## How the wiki and the certification program relate

The [[heavy-metal-tested-certified|Heavy Metal Tested & Certified]] program at heavymetaltested.com is operated by the same organization (the Institute of Contaminant Standards). The two are kept architecturally separate by design. The wiki reports what the literature supports; the certification program applies those findings to set thresholds. The gap between them is stated and intentional — the certification program's thresholds may be tighter than the literature baseline for precautionary, market-ratcheting, feasibility-driven, or regulatory-alignment reasons, and that gap is the mechanism of market ratcheting, not a defect.

The full firewall posture is at [[editorial-standards]].

## Auditable record

- Public git history: [github.com/paleofoundation/heavymetalindex](https://github.com/paleofoundation/heavymetalindex).
- Per-page "Page history" footer on every wiki page.
- Per-page evidence-packet download (above).
- Errata log at [[errata]].
- Coverage page at [[coverage]] and the search-strategy publication at [[methodology/search-strategy]].

## Contact

Editorial corrections, commercial-licensing inquiries, regulatory and legal correspondence, and press inquiries are routed through the channels documented at [[contact]]. The plain-text email backstop is **karen@paleofoundation.com**.
