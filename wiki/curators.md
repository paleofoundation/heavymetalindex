---
title: Curators and conflict-of-interest disclosure
description: Named curators of the Heavy Metal Index, their credentials, and their conflict-of-interest disclosures. The defensibility surface that distinguishes a curated reference from an anonymous compilation.
audience: [regulator, brand-legal, brand-qa, researcher, journalist]
wiki_doi: null
updated: 2026-05-28
status: scaffold
curators:
  - name: "Karen Pendergrass"
    slug: karen-pendergrass
    role: founder-editor-in-chief
    affiliation: "Institute of Contaminant Standards (ICS) (Cyprus)"
    credentials: "Founder and Chief Executive Officer, Institute of Contaminant Standards (ICS). Architect of the Heavy Metal Index and the Heavy Metal Tested & Certified (HMT&C) certification program. Curator of the corpus and editor of substantive synthesis claims."
    domain_expertise: "Heavy metals in food, food certification program design, supply-chain quality assurance, regulatory comparative analysis, standards-setting methodology"
    conflicts_of_interest:
      - "Operates the Heavy Metal Tested & Certified (HMT&C) certification program at heavymetalcertified.com. The wiki/HMT&C editorial firewall is documented in [[editorial-standards]] § Editorial firewall and enforced architecturally (one-way linking, no brand-level data in the wiki, no HMT&C-certified brand mentions, evidence-state separation between public wiki claims and HMT&C internal records)."
      - "Operates additional Institute of Contaminant Standards (ICS) certification programs unrelated to heavy metals. None of those programs interact with Heavy Metal Index editorial decisions."
    contact: "karen@paleofoundation.com"
    recusal_pages: []
external_reviewers:
  - name: "[PENDING INVITATION — food-chemistry / ICP-MS methods]"
    slug: pending-foodchem-1
    role: external-reviewer
    domain_expertise: "Analytical food chemistry, ICP-MS sample preparation, speciation analysis (iAs vs tAs, MeHg vs tHg), inter-laboratory method validation"
    affiliation: "[to be confirmed]"
    invited_for: ["synthesis/organoarsenical-inertness-assumption", "synthesis/cooking-does-not-reduce-mehg", "synthesis/se-hg-molar-ratio-certification-debate"]
    review_log: "data/peer-review/pending-foodchem-1.jsonl"
    conflicts_of_interest: []
  - name: "[PENDING INVITATION — exposure toxicology / dietary epidemiology]"
    slug: pending-toxicology-1
    role: external-reviewer
    domain_expertise: "Dietary exposure assessment, vulnerable-population toxicology (infants, pregnant women, subsistence-fishing communities), BMDL / TWI / PTMI derivation methodology"
    affiliation: "[to be confirmed]"
    invited_for: ["synthesis/combined-exposure-underprotection", "synthesis/subsistence-fishing-mehg-disparity", "synthesis/spice-adulteration-lead-infants"]
    review_log: "data/peer-review/pending-toxicology-1.jsonl"
    conflicts_of_interest: []
  - name: "[PENDING INVITATION — regulatory affairs / standards-setting]"
    slug: pending-regulatory-1
    role: external-reviewer
    domain_expertise: "EU contaminants regulation (1881/2006 → 2023/915 lineage), FDA Closer to Zero process, Codex Alimentarius CCCF deliberations, comparative regulatory analysis"
    affiliation: "[to be confirmed]"
    invited_for: ["synthesis/eu-regulatory-framework-timeline", "synthesis/organic-certification-not-protective"]
    review_log: "data/peer-review/pending-regulatory-1.jsonl"
    conflicts_of_interest: []
  - name: "[PENDING INVITATION — aquaculture / fisheries science]"
    slug: pending-fisheries-1
    role: external-reviewer
    domain_expertise: "Aquaculture vs wild fisheries contamination differentials, mercury bioaccumulation in marine food webs, climate impacts on fish methylmercury"
    affiliation: "[to be confirmed]"
    invited_for: ["synthesis/aquaculture-vs-wild-contamination-differential", "synthesis/climate-fish-mehg-projections", "synthesis/mining-impacted-freshwater-fish", "synthesis/bivalve-cadmium-amplification"]
    review_log: "data/peer-review/pending-fisheries-1.jsonl"
    conflicts_of_interest: []
  - name: "[PENDING INVITATION — cocoa / chocolate / commodity supply-chain]"
    slug: pending-cocoa-1
    role: external-reviewer
    domain_expertise: "Cocoa cadmium agronomy and mitigation (Codex CXC 81-2022), chocolate manufacturing chain-of-custody, US chocolate lead temporal trends"
    affiliation: "[to be confirmed]"
    invited_for: ["synthesis/us-chocolate-lead-temporal-decline", "synthesis/seaweed-cd-as-contamination"]
    review_log: "data/peer-review/pending-cocoa-1.jsonl"
    conflicts_of_interest: []
  - name: "[PENDING INVITATION — climate-and-contamination]"
    slug: pending-climate-1
    role: external-reviewer
    domain_expertise: "Climate change interactions with contaminant fate and transport, paddy-rice biogeochemistry under shifting hydrology, projection-modelling for food-system exposure"
    affiliation: "[to be confirmed]"
    invited_for: ["synthesis/climate-metals-tradeoffs", "synthesis/climate-fish-mehg-projections"]
    review_log: "data/peer-review/pending-climate-1.jsonl"
    conflicts_of_interest: []
review_board_status: forming — founder editor seated; six external-reviewer slots open with domain-specific invitation drafts ready
last_review_board_update: 2026-05-28
---

# Curators and conflict-of-interest disclosure

## Overview

This page names the curators of the Heavy Metal Index, lists their relevant credentials and domain expertise, and discloses conflicts of interest. It is the defensibility surface that distinguishes a curated reference from an anonymous compilation — Cochrane has it, EFSA scientific opinions have it, every credible standards body has it. The Heavy Metal Index has one because the [[methodology|methodology]] and [[editorial-standards|editorial-standards]] arguments depend on it.

The page is a **scaffold**. The structural slots are in place; the named individuals will be filled in as the curatorial board is finalised. The placeholders are explicit so a reader can see what is and is not yet named. The placeholders will be replaced (not removed) as the board comes together.

## Editorial board

The editorial board sets the scope, approves substantive methodology changes, and signs off on the synthesis pages before they are graduated to public release. Members are named publicly with their conflicts of interest disclosed.

The current composition is in the page frontmatter under `curators:`. The page is regenerated whenever a curator is added, removed, or their disclosure changes; see [[errata|errata process]] for how to flag a needed update.

## External reviewers

External reviewers are named domain experts who mark synthesis-page claims as endorsed, contested, or recused. Their review log is part of the public corpus (see [[methodology/search-strategy|search strategy]] and [[errata]]). External reviewers do not sit on the editorial board; their role is the visible audit signal Cochrane and EFSA both rely on.

The current composition is in the page frontmatter under `external_reviewers:`. As reviewers are added, their per-reviewer log file (under `data/peer-review/`) becomes the source of truth for which synthesis claims they have evaluated.

## Conflicts of interest, principal disclosure

The Institute of Contaminant Standards (ICS) operates **both** the Heavy Metal Index (this site, heavymetalindex.com) and the Heavy Metal Tested & Certified (HMT&C) program (heavymetalcertified.com). This is the central conflict the Index exists with, and the wiki/HMT&C editorial firewall is the architectural answer to it.

The firewall, as documented in [[editorial-standards|editorial-standards.md]] and:

1. **The Index reports what the literature supports.** It does not soften claims to make HMT&C thresholds look more aligned with the literature than they are, and it does not strengthen claims to make those thresholds look more evidence-based than they are.
2. **HMT&C threshold deviations from the literature baseline are labeled, not hidden.** Where HMT&C certifies to a value tighter than the literature mandates, the rationale is named — precautionary, market-ratcheting, feasibility-driven, or regulatory-alignment.
3. **No brand-level data appears in the Index.** Brand-identifying contamination data lives in a separate private build, never in the public Index. This is enforced architecturally; there is no `wiki/brands/` directory and no path that crosses the firewall.
4. **One-way linking only.** HMT&C documentation may cite the Index as the literature baseline; the Index does not mention HMT&C-certified brands, certification status, or marketing claims.

The wiki/HMT&C firewall is the only conflict-of-interest disclosure that applies to the entire wiki. Per-curator and per-reviewer conflicts (employment, consulting relationships, expert-witness work, advisory positions, equity in regulated entities, etc.) are listed in the frontmatter `conflicts_of_interest:` array for each named individual.

## Recusal practice

When a curator or external reviewer has a conflict that is specific to a particular page, ingredient, or regulation, they recuse from substantive review of that page. Recusals are listed in the frontmatter `recusal_pages:` array per curator. The recusal log is itself public.

The Foundation's bar for recusal is low: when in doubt, the curator recuses and another curator or reviewer takes the page. The defensibility argument requires that a hostile reader can verify the absence of undisclosed conflicts; the recusal log is one of the surfaces that verification happens against.

## Updates to this page

Updates flow through the [[errata|errata process]]. A reader who notices an undisclosed conflict or wants to verify a credential should email karen@paleofoundation.com with the subject line "HMI curator update".

## Schema

The frontmatter shape on this page is the contract; downstream consumers (the Trust Center page, the editorial-standards page rendering, any external accreditation submission) read these structured slots. See [[../docs/schemas/index.md|schema docs]] for the cross-cutting fields. A per-page-type schema doc for `wiki/curators.md` will be added when the page graduates from scaffold to production.
