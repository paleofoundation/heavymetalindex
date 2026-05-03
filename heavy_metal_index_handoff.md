# Handoff: HeavyMetalIndex Wiki Build
## For: Claude Desktop working with Karen Pendergrass
## From: Claude (web chat), April 2026

---

## How to use this document

You are Claude Desktop, inheriting context from a strategic working session in Claude web chat. Karen is handing you this document because the work ahead requires file system access, MCP tools, and longer execution horizons than web chat provides. Your job is to help Karen build HeavyMetalIndex — a wiki-style curated index of approximately 27,000 heavy metals papers that will become the canonical reference for heavy metals in food, supply chain, remediation, and regulatory findings.

This document gives you the strategic frame and the principles that must govern the build. It does NOT give you current-state details about what already exists in Karen's file system, Victor's pipeline, or her existing taxonomy. Those you will need to discover by examining her working directories, reading her existing WikiBiome conventions, and asking her directly when context is missing.

Read this document completely before beginning any HeavyMetalIndex work. The strategic reasoning matters because it constrains the implementation choices. If you skip to execution without understanding why, you will make locally-reasonable decisions that violate the strategic architecture.

---

## The one-sentence summary

HeavyMetalIndex is the primary strategic asset of the Paleo Foundation, because operating a curated corpus of the complete heavy metals food-and-supply-chain literature gives the Foundation epistemic asymmetry that no competitor or adversary has. The wiki is not documentation of research. It is commercial infrastructure for the HMTc certification business, which is the revenue engine.

Everything below follows from that sentence.

---

## Why the corpus is the primary asset

Context from the session that led to this handoff: Karen has built an extensive portfolio of scientific output — standards documents, clinical frameworks, the Microbiome Signatures Database, microbial metallomics as an emerging field, MBTI validation criteria, the sterol trafficking perspective paper, and more. A strategic question running through all of this was whether to prioritize a peer-reviewed journal (Journal of Food Metallomics) or the corpus index itself. The conclusion: the index is the more valuable asset.

The reasoning:

**Journals are catch-up-able.** Any well-funded competitor (Eurofins, SGS, NSF, USP, AOAC) could launch a competing journal within a year. Editorial boards can be assembled. Papers can be written. Journal prestige takes years to build. It is a necessary credential but not a durable moat.

**A curated corpus is not catch-up-able within the relevant time horizon.** Once 27,000 papers are extracted, structured, quality-controlled, and published, catching up requires either the same years of assembly work or licensing the output. Corpus-based moats compound: every month the index is public and accurate is a month of accruing citations, users, regulatory reference, and positioning that competitors must then overcome.

**The epistemic asymmetry argument.** In any dispute — with a hostile brand, a plaintiff's expert in a class action, a regulator, or a competing standards body — the side that can credibly say "we have reviewed the complete literature and here is what it says" dominates any side that can only cite selected papers. This is the dynamic that gives Cochrane systematic reviews their authority in medicine. HeavyMetalIndex is positioning to be Cochrane for heavy metals in food.

**The defensibility transfer to HMTc certification.** When a class action alleges a brand's product contained heavy metals despite HMTc certification, plaintiff's expert will attack HMTc standards as scientifically thin. Without the corpus, HMTc defense rests on standards documents and their citations. With the corpus, HMTc defense demonstrates that standards were developed against the background of the largest curated reference on heavy metals literature anywhere. The attack surface shifts from "did you consider the science" to "did you interpret it correctly," which is a much harder attack to win.

**The business model implication.** This is not a documentation project. It is commercial infrastructure. The quality, accuracy, and authority of the wiki directly determine the size of brand account Karen can approach for HMTc certification. Small brands (layer one) don't require it. Mid-tier brands (layer two, regulatory affairs teams) do. Enterprise brands and retailer approved-certification lists (layer three) absolutely do.

**The $30M 2026 revenue target is plausible only with this infrastructure in place.** Without HeavyMetalIndex, HMTc caps out at the small-brand market. With it, HMTc can approach Fortune 500 accounts. This is the priority ordering for the next 18 months.

---

## What the wiki must be, at minimum

These are non-negotiable design principles. Every implementation choice must be checked against them.

**The wiki must be accurate.** Sophisticated users — regulatory affairs teams, plaintiff's attorneys, FDA staff, journalists — will check. One high-profile error is more damaging than ten days of delay. Accuracy over speed. Publish partial coverage accurately before pursuing full coverage with errors.

**The wiki must have traceable provenance.** Every data point extracted from a paper must link back to the source paper with sufficient specificity that a hostile reader can verify it in the original. Page numbers, table numbers, quoted passages where appropriate. If the provenance chain breaks, the epistemic asymmetry argument collapses.

**The wiki must use deterministic extraction where possible and AI-assisted extraction where necessary, with clear architectural separation between the two.** Karen has documented Claude failure modes in prior standards work: numeric hallucination, silent regulatory value substitution, citation fabrication. The pipeline must be designed to prevent these by construction, not caught after the fact. Python handles deterministic operations (file parsing, value extraction from structured tables, cross-reference validation). Claude handles interpretive operations (synthesis, relationship identification, categorization ambiguities). The separation must be enforced in code, not just in prose.

**The wiki must publish its methodology.** On launch, HeavyMetalIndex must have a publicly visible methodology page describing: how papers were selected, how extraction was performed, what the QA audit found, what error rates were measured, what types of errors are most likely, how corrections are handled. This is the document that sophisticated users read first. It is also what separates HeavyMetalIndex from every amateur literature compilation that has preceded it.

**The wiki must have a human review layer.** Pure AI extraction at scale has known failure modes that will be exploited if unmanaged. A structured human review process — sampling rates, reviewer qualifications, dispute resolution, correction publication — is not optional. The review process itself is part of the defensibility story.

**The wiki must be findable by Google Scholar.** This is a technical requirement, not a strategic choice. Every wiki entry must have proper metadata tags (Highwire Press citation_title, citation_author, citation_doi, citation_publication_date style tags, or Dublin Core equivalents). Consistent URL structure. XML sitemap. Crawler access. Without these, the wiki's reach is a fraction of what it should be.

**The wiki must protect itself as an asset.** Terms of service that distinguish public research use from commercial bulk access. Access controls that prevent wholesale scraping without detection. A licensing model that monetizes enterprise use while keeping public research access free. Cyprus-based database-rights protection (stronger than US equivalents) is a structural advantage to design around.

---

## What the wiki is NOT

These are anti-patterns to actively reject.

**Not a summary service.** Summarizing 27,000 papers in a form that substitutes for reading them raises fair-use questions and weakens the aggregation defense. Extraction of facts, values, regulatory findings, and citations is defensible. Comprehensive narrative summaries of each paper is not. Stay on the extraction side of the line.

**Not a blog.** Editorial commentary, opinion pieces, and narrative content belong on WikiBiome or on the Paleo Foundation's other channels. HeavyMetalIndex is a reference. It presents what the literature says, not what the Foundation thinks about what it says.

**Not a product catalog.** HMTc-certified brands should not appear in wiki entries. Keeping the wiki editorially separate from the certification business is part of what makes it defensible. Cross-linking between HeavyMetalIndex and heavymetaltested.com is fine at the navigation level, but the wiki content itself must not mention certification status or endorse specific products.

**Not a regulatory arbiter.** The wiki reports what regulators have said and what the literature shows. It does not tell users what is safe or unsafe. The threshold-setting happens in HMTc standards, which are derivative products of the wiki and belong elsewhere in the content architecture.

**Not a general wiki.** WikiBiome covers microbiome medicine broadly. HeavyMetalIndex is specifically scoped to heavy metals in food, supply chain, remediation, and regulatory findings. Metallomics in clinical medicine (nickel and endometriosis, copper and Wilson's disease) belongs on WikiBiome, not here. The scope discipline matters because it keeps the authority claim credible.

---

## What you, Claude Desktop, need to find out before building

Before writing any code, schema, or wiki entry, you need current-state context that I (web chat Claude) do not have. Expect to spend real time on discovery before implementation.

**Check the file system for existing work.** Karen has been working on HeavyMetalIndex infrastructure already. Before proposing anything, look for: existing PDF-to-markdown pipeline code (Victor's work), existing extraction schemas or attempts, sample processed papers, existing wiki entries if any drafts exist, and the current state of the 27,000-paper corpus (how many processed, how many queued, what formats they're in).

**Check WikiBiome conventions.** HeavyMetalIndex should visually and structurally mirror WikiBiome where sensible, because users of one will cross over to the other and consistency matters. Find the WikiBiome entry structure: page sections, metadata conventions, citation format, image handling, cross-referencing conventions. Do not invent new conventions for HeavyMetalIndex if WikiBiome already has working patterns.

**Ask Karen about the existing taxonomy.** Karen has existing controlled vocabularies for metals (the HMTc cascading matrix covers Pb, As, Hg, Cd, Cr, Ni, Sn, Al at minimum), for food categories (infant foods, cosmetics, cleaning, supplements, toys, pet foods, and more — the HMTc category list), and for data fields (detection methods, concentration units, regulatory thresholds by jurisdiction). Do not create parallel taxonomies. Find and extend the existing ones.

**Ask Karen about the review workflow.** Who does human review of extracted data? Karen herself? Divine? Kimberly? Giorkos? Umar? Is there an existing sign-off process from her HMTc standards work that should be mirrored here? Review workflow is a human process question that only Karen can answer.

**Ask Karen about the accuracy audit approach.** What sample size for the initial QA audit (1-3% of extracted papers was discussed, meaning roughly 300-900 papers manually verified)? What error rate threshold is acceptable for launch? What happens when an error is found — is there a correction log, a versioning system, a public changelog?

---

## Proposed work sequence (subject to Karen's priorities)

This is an outline, not a commitment. Confirm with Karen which of these apply and in what order before executing.

**Phase 0: Discovery.** Find existing work in the file system. Read WikiBiome conventions. Interview Karen on taxonomy, review workflow, audit approach. Document current state before proposing future state.

**Phase 1: Schema design.** Extract schema specifying what data fields get pulled from each paper. At minimum: paper metadata (title, authors, journal, year, DOI), metal(s) studied, food/substrate category, detection method, concentration values with units and ranges, regulatory threshold comparisons, jurisdictions referenced, study type (primary research, review, regulatory document, meta-analysis), and key findings in structured form. The schema should be version-controlled and published as part of the methodology.

**Phase 2: Pipeline architecture.** Specify the extraction pipeline with architectural separation: Python handles PDF parsing, table extraction, deterministic field population, and cross-reference validation. Claude handles interpretive extraction (categorization of ambiguous studies, synthesis of findings in structured language, relationship identification). Each paper's extraction produces a structured record with provenance links to the source.

**Phase 3: QA audit design.** Specify sample size, reviewer qualifications, reviewer workflow, error categorization, and correction process. Establish acceptable error rate thresholds. Plan the pre-launch audit that will produce publishable accuracy statistics.

**Phase 4: Wiki site architecture.** Specify URL structure, page templates, metadata tag implementation, sitemap, robots.txt, and cross-reference conventions. Coordinate with Victor on implementation.

**Phase 5: Legal and licensing review.** Fair use scope, database rights positioning, terms of service, commercial licensing tier. Attorney consultation before public launch, not after.

**Phase 6: Proof-of-concept launch.** Publish HeavyMetalIndex with 1,000 to 5,000 papers indexed as initial coverage. Methodology page live. QA audit statistics published. Core entries complete. Make it real and visible before it is comprehensive.

**Phase 7: Full corpus expansion.** Continue extraction to full 27,000 papers. Regular QA audits. Published changelog. Ongoing user feedback incorporation.

---

## Constraints on your conduct that Karen has established in prior work

Karen has documented working principles that apply to any Claude collaboration on her projects. These are not optional.

**No em dashes in prose deliverables.** Use commas, semicolons, periods, or parenthetical phrases instead.

**No bullet lists in narrative prose.** Use prose paragraphs. Bullet lists are acceptable when the content is genuinely list-shaped (for example, this document's principles, which ARE a list). Do not default to bullets for everything.

**Two-column tables only, where tables are needed.** Avoid multi-column tables that become illegible on mobile.

**Each terminal command in its own code block.** Never bundle multiple shell commands in one block.

**No sycophancy.** Karen has explicitly said she wants honest disagreement and pushback. Do not affirm work you think is flawed. Do not soften critical analysis. If you think a decision is wrong, say so directly with reasoning.

**Verify numeric claims before repeating them.** Numeric hallucination is a documented Claude failure mode that Karen has specifically flagged. When working with extracted data, double-check values against the source. When citing statistics from the literature, check them against search results before including them. Do not propagate numbers you have not verified.

**No silent regulatory value substitution.** If the literature shows FDA action level for lead in a category is, hypothetically, 100 ppb, do not silently "round" or "standardize" that to 150 ppb because it fits a pattern. Preserve the actual values from the actual sources.

**Flag uncertainty explicitly.** When you do not know something, say so. When you are inferring rather than citing, say so. When a claim rests on limited evidence, say so. The credibility of the wiki depends on calibrated honesty about what the literature actually supports.

---

## Key context from the web chat session (compressed)

These are the strategic conclusions that led to this handoff. You do not need to re-derive them. They are settled decisions.

HeavyMetalIndex is priority number one. Journals are supporting infrastructure on a longer timeline. The sterol trafficking paper was drafted during the session and is being deposited to Zenodo via a separate workflow; it is not in scope for HeavyMetalIndex work.

HMTc certification is the revenue engine. The wiki is infrastructure for that engine. Every design choice is checked against the question: does this strengthen or weaken HMTc's defensibility at the enterprise brand layer?

The three audience layers that drive pricing: brand founder (layer one, handled by current infrastructure), brand regulatory affairs (layer two, needs full scientific apparatus), brand legal teams (layer three, needs defensibility infrastructure). The wiki unlocks layers two and three.

Adjacent audiences the wiki will serve: retailers (approved-certification lists), regulators (FDA Closer to Zero, state AG offices), journalists (quotable scientific source), plaintiff's attorneys (filter which cases get filed at all).

Cyprus-based database rights protection is a structural advantage. Karen is in Cyprus. The Paleo Foundation is a Cyprus entity. EU database-rights law is stronger than US equivalents. Design the terms of service and licensing model around that.

The AI-forward methodology is not a gimmick. It is the operating system of the Foundation's intellectual work. Cross-disciplinary synthesis at a pace and scope that silo-bound humans cannot match. The wiki is an instrument for making that synthesis visible, citable, and defensible.

---

## What Karen will ask you to do first

Likely first request: "Look at the file system and tell me what you find." Be prepared for that. Examine the working directories, identify what's been built, report back without proposing changes until you have the picture.

Second likely request: "Propose the extraction schema." Do not invent. Extend what exists. If nothing exists, draft a minimal schema and ask Karen to iterate rather than presenting a full spec as if you know what she needs.

Third likely request: probably about the pipeline architecture or the first-batch processing run.

Whatever the sequence, stay on the principles above. Accuracy over speed. Provenance always. Honest uncertainty. No invented details. Strategic discipline about what the wiki is and is not.

This is real commercial infrastructure for a business Karen is building to change how consumer safety works in food. Treat it accordingly.

---

## One last thing

If at any point you find yourself producing output that feels fluent but that you have not verified, stop. Ask Karen. The failure mode that would damage this project most is not delay. It is Claude producing plausible-sounding but fabricated content that makes it into the public wiki and gets discovered later by a hostile reviewer. Be slower and correct. Karen will thank you.

Karen is working on something that matters. The wiki is her leverage point. Help her build it right.

— Claude (web chat, April 2026)
