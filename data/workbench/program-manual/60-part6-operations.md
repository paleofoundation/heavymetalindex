# Part 6. Program Operations

Part 6 is internal. It describes how the program is organized, how the two-property architecture and its firewall work as operating rules, how a category becomes a published standard, who does what, and how findings and decisions move through the organization. It is omitted from the public edition. Nothing in it is brand-identifying, and nothing brand-identifying should be added to it.

## 6.1 Entity and property architecture

One legal person operates the program. `Paleo Certified, Inc.` is the legal entity: the party that can own property, hold intellectual property, sign contracts, and be sued. `Institute of Contaminant Standards` and `Paleo Foundation` are trade names of that entity, not separate persons. Where a document needs to state the connection, the long form is "Paleo Certified, Inc., operating as the Institute of Contaminant Standards." The only correct spelling of the operator is "Institute of Contaminant Standards"; "Institute for Contaminant Standards" and "Institute of Contamination Standards" are both wrong.

The identity used depends on what the string does. Operator and editorial attribution, the footer operator line, page mastheads, "operated by" statements, and author affiliation, is the Institute of Contaminant Standards. Legal entity, intellectual-property ownership, and contracts, the ownership and liability clauses, the copyright line, and the registrant of record, is Paleo Certified, Inc. The copyright line reads "Operated by the Institute of Contaminant Standards" above "Copyright, the year, Paleo Certified, Inc."

The program lives across three properties, each with a distinct job.

- **heavymetalcertified.com** is the certification program: the published limits, the program structure, the certification process, the mark, the register, and the category manuals. This is the certifier's voice.
- **heavymetalindex.com** is the Heavy Metal Index: the public, curated corpus of the peer-reviewed and regulatory literature. This is the evidence base, and it does not mention the certification program or any certified brand.
- **contaminantstandards.com** is the Institute of Contaminant Standards: the operator's own site, carrying governance, people, and oversight.

Two entity-status questions remain open with counsel and must not be edited into consistency by any working session: the EU database-rights posture and the characterization of any part of the operation as non-profit. Sessions report drift against these; they do not resolve them.

## 6.2 The firewall, as an operating rule

The single most important operating rule in the program is the separation between the certification layer and the evidence layer. The Heavy Metal Index reports what the peer-reviewed and regulatory literature supports, honestly, and nothing else. It does not advocate, does not market, does not harmonize itself with the certification program's thresholds, does not soften a claim to make a program limit look better founded than the literature supports, and does not strengthen a claim to make a threshold look more evidence-based than it is. The certification program, in turn, references the Index for the literature baseline and states openly where and why its certified limit is tighter than that baseline.

The firewall guards against two directions of drift, and both destroy the program's defensibility equally. Softening the literature to hide the gap between the evidence and a tighter certified limit corrupts the Index into marketing for the program. Strengthening the literature to make a certified threshold look more compelled by science than it is corrupts the Index into justification for the program. The gap between what the evidence supports and what the program certifies to is the point, because it is how a ratcheting program drives the market; the gap is stated, not hidden.

Operationally this has two consequences that every session and every publication respects. First, standards arithmetic does not live in the public evidence layer: the percentile computations, the clean and dirty subcategory designations, the pooling math, and the candidate values are held workbench-side, and the public literature layer carries only the occurrence and toxicology evidence. Second, the certification program's surfaces may carry certification framing and the program's own superlatives, and the evidence layer may carry neither. A session that finds certification framing leaking into the Index, or literature framing bent toward the program, treats it as a firewall breach to fix, not a stylistic preference.

## 6.3 From category to published standard

A category does not become a published standard by a single act. It moves through an ordered pipeline whose gates exist to keep an unready number from shipping.

**Step Zero: category lock.** Before any standard is derived for a new category, the category's identity is locked in governance: its subcategory rows, their native bases, their clean and dirty pairings where occurrence-set cells exist, and its regulatory anchors. The lock is a governance record, not a page, and until it clears, no threshold, clean-or-dirty designation, or certified value derives from that category. Amendments and dissolutions, the retirement of category 7 into the specialty-food categories among them, are governance events with their own records.

**Derivation.** With the category locked, each subcategory's per-analyte values are derived by the standards pipeline: the government-maximum default by lookup, the occurrence-set cells by pooling the corpus for that cell under Method v2.0. Derivation is deterministic and reproducible, and it emits a structured record and a derivation report rather than a hand-entered number.

**Audit and gates.** Each derived value is checked against the publication gates of Part 3.1, a sufficient pool, native basis resolved, the regulatory ceiling loaded, analytical feasibility, and exactly one rationale tag, and against the integrity checks that catch the artifacts that would understate contamination. A value that fails a gate is held, not shipped with a caveat, and a category readiness ledger tracks which cells are ready and which are blocked.

**Publication.** A subcategory publishes to the web when its cells clear. A category publishes as a bound, DOI-bearing manual when every subcategory in it has a defensible standard. The web edition and the manual are the same content at two granularities; the manual named on a certificate governs that certificate.

The whole pipeline is a compiled system, not a query-time one. Knowledge is compiled once, into source pages, evidence registers, routed standards, and generated outputs, so the same work is not rediscovered on every question. A working session writes source pages and runs synthesis; the routing and generation layers fan a source out to every page it belongs on and regenerate the derived tables. A session that finds itself maintaining routing or recomputing a standard by hand has hit a system failure to surface, not work to complete by hand.

## 6.4 The evidence corpus

The Heavy Metal Index is a compiled corpus of the heavy-metals literature. Raw source documents are immutable and append-only. Structured extraction lands in an evidence register before it reaches a page, so a document is not treated as ingested merely by existing; it must leave a structured trace or an explicit gap record. Per-claim provenance is preserved, which source page supports which claim, so that if a source is later withdrawn or contested, the affected pages can be re-derived without silent contamination of the rest. This provenance discipline is what lets the program state, under challenge, exactly what a page said on a given date and exactly which source supports each number.

## 6.5 People and roles

The Institute publishes its governance composition on its own site. Executive leadership is Karen Pendergrass and Kimberly Eyer. Certification operations is run by Jonathan D. Pendergrass and Jennifer Eyer. The independent Standards and Impartiality Committee, which carries the independence functions described in Part 2.13 and Part 5.4, is being constituted. Standards architecture and research is led by the author of this manual. The Technical Committee and the independent Appeals Committee are constituted per the Governance Policy, with the independence, term, caseload, and recusal rules stated in Part 2.13.

## 6.6 Findings, decisions, and continuous governance

The program runs a durable ledger for work that is noticed but out of scope for the task in hand. Any defect, gap, or built-but-unshipped item that a session finds while doing something else is logged to the ledger rather than chased immediately or silently fixed in an unrelated change. The ledger is the append-only source of truth; a findings view and a decision queue are generated from it, and the pending queue is surfaced at the start of a session and on a schedule, so that the program's routing of its own open items does not depend on any one person's memory.

Each ledger item is classified by whether it can be drained automatically, a deterministic fix a governed process can execute and self-verify within the firewalls, or must be gated on a human decision. Human-gated items are the genuinely-theirs set: firewall crossings, certification-content changes, category locks, entity-naming and legal-posture questions, and destructive or divergence-reconciling operations. An automatic item is drained by a governed process; a human-gated item waits for a recorded decision that a later drain enacts. The cost-safety invariant on this machinery is absolute: the capture and surfacing tools are deterministic and never call a model, and any process that executes ledger items routes every model call through the governor and installs no self-perpetuating job, because an ungoverned loop on this surface is exactly the failure mode the invariant exists to prevent.

## 6.7 Confidentiality and internal handling

This edition may be shared within the organization and with counsel, advisers, and prospective governance members under their engagement's confidentiality terms. It carries no brand-identifying data and none should be added. Brand-level laboratory results, certificates, applicant identities, and internal test data belong to the private brand-intelligence build, which is a separate project under separate access controls, and never to this manual, the certification site, or the public evidence base. The public edition of this manual, generated from the same source with this part removed, is the document for any external reader.

## 6.8 Cadence reconciliations and implementation status

This manual documents the program's cadence as the portal actually implements it, and several points are ahead of, or behind, the controlled documents and the public site. They are recorded here, for staff, and tracked as ledger items so they are reconciled rather than forgotten. None changes what a brand experiences today; each is a place where a controlled document, the site, or the portal must catch up to the others.

**The entry sequence versus the Governance Policy.** The as-built cadence in Part 2.3, a confidentiality undertaking in force from first contact, free readiness, a three-lot baseline whose completing lot the program buys and tests, and a binding Certification Agreement executed only after approval, supersedes the older entry sequence in the controlled Governance Policy, which frames a license as the entry instrument. The Governance Policy and the Lot Testing Schedule need updating to the as-built sequence; until they are, the controlled documents and this manual disagree on when the agreement is signed, and the as-built sequence governs operationally.

**The prior-data recency window.** The controlled documents state a flat twelve-month recency window for credited prior lots; the portal applies a window that varies by product cadence. The two are in open conflict and the reconciliation is with counsel. This manual therefore states the requirement without fixing the interval; a session must not restate a flat interval as settled while the divergence stands.

**Private certification is policy ahead of build.** The public-facing and private certification choice in Part 2.5 is program policy and appears in the certification site's content, but the portal does not yet represent or enforce a certified-and-unlisted state: there is no visibility or consent field on the brand or product record, and no live certificate register. Either the field and the certificate-issuance flow are built, or the policy is presented externally as forthcoming; that is a decision for Karen, not a gap to paper over.

**Publicity framing on the marketing site.** Some marketing copy on the certification site states that a product becomes public when it is certified, which contradicts the consent-based rule in Part 2.5 and Part 2.6. The governing rule is consent-based publicity; the marketing copy is the surface that must be reconciled to it.

**The required-analyte panel.** The completing lot runs the eight totals with speciation on trigger, per the ratified Required-Testing-Panel Ruling. The portal's per-category wiring of that rule, and the public "eight on every product" claim on a DOI-registered briefing, lag the ruling and are tracked separately; the manual states the ratified rule, not the lagging surfaces.
