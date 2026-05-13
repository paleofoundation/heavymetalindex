---
title: "Ask the Index — product specification"
type: product-spec
product: ask-the-index
status: strategy-spec
audience: [internal]
noindex: true
updated: 2026-05-14
---

# Ask the Index — product specification

Internal product strategy and design specification for the Ask the Index conversational interface to heavymetalindex.com.

This document is not public wiki content. It captures the strategic frame, the design principles, the full feature set (nineteen features across three phases), the hard guardrails, the infrastructure dependencies, and the rollout sequencing. It is the authoritative reference for any session working on Ask the Index until superseded.

**Read first if doing build work.** Ask the Index v0 already exists in production at `api/ask.js`, with a frontend widget at `quartz/components/AskIndex.tsx`. See [[workbench/strategy/ask-the-index-current-state-gap]] for the v0-grounded MVP work plan. This strategy spec describes the target; the gap doc describes the path from v0 to the target. The Phase 2 and Phase 3 features (see [[workbench/strategy/ask-the-index-phases-2-3-design]]) depend on the MVP cut shipping per the gap doc's sequencing.

## 1. Strategic frame

Ask the Index is a free, conversational interface that answers questions from the curated heavy-metals-in-food corpus and only from that corpus. It is not a product in the revenue sense. Revenue lives in HMT&C certification fees, the Journal of Food Metallomics, courses, and future expert services. The chatbot is a positioning instrument and a trust ceremony, and every design decision in this document is made in service of four signals.

The first signal is **utility**: the tool actually answers questions stakeholders cannot easily answer elsewhere, with rigor that survives professional scrutiny. The second signal is **trustworthiness**: every claim traces to a peer-reviewed or regulatory source with evidence-tier metadata, contradictions are surfaced rather than averaged, and refusals are first-class outputs when the corpus is silent. The third signal is **HMT&C means business**: the chatbot's voice, refusal posture, methodology transparency, and willingness to label the gap between literature baseline and certification threshold collectively communicate that the Paleo Foundation operates at a higher epistemic standard than competing certifiers. The fourth signal is **defensibility**: every answer is reconstructable in deposition, queryable as-of any historical date via git snapshots, and exportable as audit-grade documentation.

The reach logic of a free tool inverts the optimization target of a paid one. Reach matters more than monetization-per-query. Shareability matters more than retention. Each interaction is a marketing surface, but the style of marketing has to be epistemic-asymmetry-flexing, not promotional. The wiki/HMT&C firewall in CLAUDE.md Part 2 binds the chatbot completely: it is the wiki's voice, not HMT&C's. The fact that the chatbot can credibly do something paid certifier-marketing tools structurally cannot — expose the gap between literature and certification threshold with labeled rationale — is the move that turns transparency into the trust-building feature.

The audience pricing-power hierarchy from CLAUDE.md Part 1 still governs prioritization. Brand legal teams preparing for class-action scenarios are the highest-pricing-power audience and the primary target for the launch feature set. Regulatory and quality-assurance leads are the second tier; they will adopt heavily and become the day-to-day user base. Brand founders and marketing leads are the third tier; they will use the tool but cannot extract the same value from it because their questions are less technical. Adjacent audiences — retailers' compliance teams (Whole Foods, Sprouts, Target buyer-approved-cert reviewers), federal and state regulators, plaintiff and defense experts, journalists writing for Consumer Reports and NYT and congressional hearings — compound the value because they normalize the citation form-of-record.

## 2. Design principles

**Defensibility over helpfulness.** Most 2026 "ask the docs" chatbots optimize for being maximally helpful. Ask the Index optimizes for being maximally defensible. The unit of value is "this answer would survive cross-examination," not "this answer felt useful." When the two diverge, defensibility wins.

**Audience mode is the first thing the bot asks.** A brand QA reader, a plaintiff's expert, a journalist, an educator, and a consumer have categorically different information needs. The same query about cadmium in chocolate returns different density, hedge level, dose framing, and section selection depending on who is asking. Audience tags already exist on every wiki page in frontmatter (`audience: [regulator, educator, consumer, app]`); the chatbot reads them.

**Per-claim provenance returned inline.** Not as footnotes, not as link decorations. The default answer format leads with the evidence: sample size, analytical method, year, evidence tier, contributing wiki page, last synthesis date. The provenance is the product. A regulator or expert witness reading the answer should be able to evaluate the strength of the claim from the answer text itself, without clicking through.

**Disagreement surfaced, never averaged.** When two A-tier sources contradict, the bot names the contradiction, presents both positions, and refuses to harmonize. This is what Cochrane reviews do well and what consumer LLMs do badly. It is also what plaintiff and defense experts need: the wiki's value to legal counsel collapses the moment the bot is caught smoothing over disagreement.

**Refusal is a feature, not an error.** When a question falls outside the corpus, the response is a formal stand-down: "Heavy Metal Index does not speculate beyond its peer-reviewed corpus. As of [last synthesis date for this topic], the literature does not support a claim on this question. This query has been logged to the research-gap queue." The refusal is branded, shareable, and feels like a commitment rather than a deflection. ChatGPT cannot make this move because it has no corpus boundary to honor; that is the differentiation.

**Methodology ceremony on every answer.** Every response carries an expandable "How this was answered" footer naming the retrieval path, contributing sources by tier, last full resynthesis date for any cited contamination-profile cell, contradictions surfaced or suppressed and why, confidence statement, and refusal disclosures (what the bot declined to claim and why). Audit-transparency-as-UX. Each interaction quietly trains regulators and QA teams about how the wiki reasons.

**Show the gap, label the rationale.** Where an HMT&C certification threshold differs from the literature floor, the bot names the gap, names the rationale (precautionary, market-ratcheting, feasibility-driven, regulatory-alignment), and links to the certification page that owns the decision. This is CLAUDE.md Part 2's bidirectional drift defense made user-facing. Counterintuitively, exposing the gap with labeled rationale builds more trust than hiding it.

## 3. Hard guardrails

The chatbot must refuse, in language that is consistent and traceable, to:

- Recommend specific brands. CLAUDE.md Part 12 firewall applies absolutely.
- Mention HMT&C-certified brands by name. Same firewall.
- Provide medical diagnosis, treatment, or individualized health advice. The bot describes mechanisms, exposures, and population-level evidence.
- Speculate beyond the corpus. "Probably," "likely," and "in general" are forbidden when the corpus is silent; the correct response is the branded refusal in §2.
- Treat consumer-audience pediatric queries with adult-population data. Vulnerable-population gating is enforced at the prompt level.
- Average across contradicting A-tier sources. Disagreement is surfaced.
- Soften wiki claims to make HMT&C thresholds look more evidence-based than the literature supports, or strengthen wiki claims for the same reason. CLAUDE.md Part 2 drift defense applies to chatbot output the same way it applies to written pages.
- Return marketing affordances ("learn more about certification," "schedule a consultation"). The bot does not sell. The certification page is one click away from any answer; the wiki does not link inline to HMT&C product pages.

Refusals are themselves a designed surface, not a fallback. Every refusal pattern is reviewed for tone, completeness, and shareability before it ships.

## 4. The nineteen features

Feature numbers correspond to the strategic discussion from 2026-05-14; renumbering would obscure that lineage and is avoided.

### 4.1 Signal: "HMT&C means business"

**Feature 1 — "Where HMT&C draws the line" answer block.** When a user asks whether a concentration of metal in a product category is concerning, the standard answer ends with a structured block: literature floor with sample-weighted range and confidence; FDA threshold; EU threshold; HMT&C threshold with labeled rationale (precautionary, market-ratcheting, feasibility-driven, regulatory-alignment per CLAUDE.md Part 19); gap from literature floor; one-paragraph rationale pulled from the relevant `wiki/certification/` page. This is the single load-bearing feature of the entire product. It operationalizes the Part 2 firewall as a user-facing feature. Competitors — NSF, USP, Clean Label Project, Consumer Reports methodology pages — cannot match it because they do not maintain a literature-baseline-with-labeled-rationale structure underneath their certification programs. Exposing the gap is the trust-building move; hiding it is the failure mode this entire architecture exists to prevent. **Dependency:** `wiki/certification/` pages must carry the deviation rationale field in frontmatter. The threshold-derivation work in CLAUDE.md Part 19 must be at least partially complete for the answer block to render meaningfully for a given metal-matrix combination; for cells where HMT&C has not yet set a threshold, the block returns "HMT&C threshold: in development" and links to the literature baseline.

**Feature 2 — Deposition Preview mode.** A button at the top of legal-audience answers labeled "Show me how this would be questioned at deposition." Output is a numbered Q&A walkthrough: each Q is a plausible plaintiff's-expert hostile question; each A is the literature-supported response, with every claim carrying sample size, analytical method, evidence tier, and the wiki page that synthesized it. The output is a document defense counsel can hand to their expert witness. It is not speculative; it is a re-rendering of the same evidence in adversarial form, driven by a prompt template that walks the cross-examination structure. **Strategic effect:** defense counsel screenshots one of these and posts it on LinkedIn, and HMT&C's inbound channel materializes.

**Feature 3 — Hostile Expert Simulator.** Narrower companion to Feature 2. The user pastes a hostile expert's claim ("plaintiff's expert in case X is arguing Cd in cocoa is unsafe above 50 ppb based on paper Y") and the bot returns a counter-position brief: where paper Y sits in the corpus (tier, sample size, geography, methodology), what contradicting sources say, what the synthesis position is, what the methodology critique would be. Output is structured for direct incorporation into a defense brief.

**Feature 4 — Methodology ceremony footer.** Every response carries the expandable footer described in §2. This is the trust ceremony repeated on every interaction: retrieval path, contributing sources by tier, last_full_resynthesis date, contradictions surfaced or suppressed, confidence statement, refusal disclosures. The footer is collapsed by default so casual readers are not overwhelmed; expanding it is the move regulators and QA leads will make on every important answer, and the move legal counsel will make on every answer they intend to cite.

**Feature 5 — Branded refusal pattern.** Out-of-corpus queries trigger the formal stand-down: "Heavy Metal Index does not speculate beyond its peer-reviewed corpus. As of [date], the literature does not support a claim on this question. This query has been logged to the research-gap queue; expect coverage when N peer-reviewed sources accumulate." The refusal is exportable as a shareable card (Feature 11) the same way an answer is, because the refusal is itself a credibility statement.

**Feature 6 — Public query log.** A live feed of anonymized questions asked in the last 24 to 72 hours rendered on heavymetalindex.com, paired with the answer's confidence rating and source count. Social proof at industrial scale. Visitors see other professionals asking sophisticated questions and conclude they are in the right room. It surfaces emergent topics — when twelve brand QA teams ask about cadmium in protein powder in a week, the trend becomes visible before the news cycle catches it. The Foundation can publish a quarterly "What the field is asking" digest as a press hook. **Privacy:** queries are anonymized at submission; IP addresses and any identifying metadata are dropped before logging; the user is informed at conversation start that anonymized queries may appear in the public log.

### 4.2 Signal: defensibility

**Feature 7 — As-of-date queries.** "What did the wiki say about lead in baby food on 2026-01-15?" Git already preserves the necessary history; the chatbot needs a retrieval layer that resolves to the commit at the requested date and reads the corpus state from that snapshot. For product-liability defense, the question is almost always "what was the state of the published science when my product was on shelf," not the current state. This is the feature that makes Heavy Metal Index citable in a complaint response. **Dependency:** retrieval infrastructure must support git-snapshot reading; commit discipline per CLAUDE.md Part 4 must remain tight so historical states are coherent.

**Feature 8 — Affidavit Format Generator.** Free version produces a structured affidavit-ready summary of the wiki's current position on a metal-matrix combination, formatted to be adapted by a real defense expert. Example output structure: "As of [date], the peer-reviewed literature on Cd in dark chocolate, reviewed by Heavy Metal Index, comprises N A-tier sources and M B-tier sources reporting concentrations of [range]. Methodological characteristics: [distribution]. Geographic distribution: [breakdown]. Period coverage: [years]." The actual expert witness work is a paid service the Foundation can offer downstream; the format generator is the free, viral surface that brings the work in.

**Feature 9 — Cross-Corpus Claim Verification.** A user pastes a marketing claim — "our product has the lowest lead of any infant cereal" — and the bot returns a verification: "The wiki's literature for infant cereal shows reported lead concentrations of [range across N sources]. Without published third-party testing data placing your product's value in that distribution, this claim is unsupported by peer-reviewed evidence. HMT&C-certified products carry verified positions in this distribution per [[certification/...]]." Retailers' compliance teams will adopt this as an intake shortcut. Brand QA teams will reverse-engineer their claims against it. Within eighteen months, "verified against Heavy Metal Index" becomes phrase-of-record, and HMT&C becomes the only practical mechanism by which a brand can substantively answer it. **Strategic effect:** this feature single-handedly positions the wiki as the arbiter of marketing claims in the category, with HMT&C as the natural verification pathway.

**Feature 10 — Regulator Comment-Period Mode.** When FDA, EFSA, or another regulator opens a public comment period (CTZ updates, EU 2023/915 amendments, Baby Food Safety Act activity), the bot can produce a draft public comment from the current synthesis. Free, professional-grade, fully sourced, ready for the regulatory team to adapt. The compounding effect: regulator inboxes increasingly fill with high-quality comments citing heavymetalindex.com, which is a quiet but powerful form of agenda-setting. The Paleo Foundation already files comments; making the tool available means brand regulatory teams file comments grounded in the same evidence base, multiplying the Foundation's voice without requiring coordination.

### 4.3 Signal: utility and reach

**Feature 11 — Shareable Answer Cards.** Every answer can be exported as a standalone embeddable card: Paleo Foundation mark, the answer text, the citation chain summary, an "answered on YYYY-MM-DD" timestamp, a permalink that resolves to that same answer as-of that date. Journalists tweet them. QA leads paste them into Slack. Regulators include them in internal memos. Each shared card is a free billboard pointing back to heavymetalindex.com. The visual design is restrained and scientific with no marketing affordances; that is what makes it shareable in serious contexts. **Dependency:** permalink resolution must be coupled with the git-snapshot retrieval layer from Feature 7; an answer card from 2026-08-12 should resolve to the same answer when opened in 2027.

**Feature 12 — Weekly Digest.** "What changed at Heavy Metal Index this week" email: new sources ingested by category, synthesis cells whose values moved, regulatory tracking updates, gap-queue topics newly covered. Free subscription, open to anyone. Becomes the canonical heavy-metals-in-food update channel. The Foundation beats the news cycle by being the first to report (with structured rigor) on agency updates. Two years in, this is the publication brand QA leads forward to their VPs every Monday. **Source data:** `data/evidence/review_events.jsonl` already records synthesis events per CLAUDE.md Part 9; the digest is a weekly query against that log plus the ingest log.

**Feature 13 — "What Would Change If" Simulator.** Brand R&D query: "What would happen if I switched from Côte d'Ivoire cocoa to Ecuadorian high-altitude cocoa?" The bot pulls `geographic_breakdown` sub-fields from the ingredient page and shows the projected Cd delta with sources. Free brand R&D-grade tooling. Signals to brand QA that the certifier understands sourcing levers at the operational level they do. Positions HMT&C as the certifier that helps brands improve, not just gatekeeps. **Dependency:** the `geographic_breakdown` and `seasonal_variance` schema additions from CLAUDE.md Part 6 (added 2026-05-12) must be populated for the relevant ingredient pages; sparse coverage at launch is fine and degrades gracefully.

**Feature 14 — "Ask the Index About Us" reverse query.** Brand pastes their product's ingredient list, the bot returns the per-ingredient contamination profile, applicable regulatory limits, and literature ranges. Free brand-readiness assessment. The bot never says "you should get HMT&C certified." The certification page is one click away from the answer. The implication is the conversion engine; the firewall stays intact. **Edge case:** ingredient strings often carry noise ("organic," parenthetical modifiers, country-of-origin tags); the bot uses `wiki/app/ingredient-mapping.md` logic to normalize.

**Feature 15 — Localized Vulnerable-Population Mode.** "I'm pregnant in California. What does the wiki say about my exposure from a typical diet?" Pulls vulnerable-population flags, Prop 65 framework, dietary-pattern data, and returns a population-and-jurisdiction-aware synthesis. This is the consumer-audience hook that gets the chatbot on Reddit, Mumsnet, parenting Facebook groups. Long-tail reach with strict Part 12 firewalls: no brand names, no medical diagnosis, no individualized advice. **Sequencing note:** consumer audience is the lowest-pricing-power tier and should not lead the launch (see §6); this feature ships in Phase 3.

**Feature 16 — Academic API.** Free programmatic access for .edu-verified researchers, throttled but unmetered. Lets them run meta-analyses against the corpus. Two-step compounding: it generates citations to heavymetalindex.com in peer-reviewed publications (the gold-standard authority signal); it feeds back into the Journal of Food Metallomics, where API users become authors. The journal becomes self-sourcing. **Strategic effect:** within three years, "cited by N peer-reviewed papers" becomes a press claim the Foundation can make annually, which is structurally unavailable to commercial certifier-marketing chatbots.

### 4.4 Contrarian moves

**Feature 17 — Cite the Index program.** Free badge for any organization that cites heavymetalindex.com in published work: journalists, regulators, NGOs, brand QA teams, retailers. They get a small "[Name] cites Heavy Metal Index" mark for their site with linkback. Within two years the citation form-of-record becomes "per Heavy Metal Index" the way medical claims default to "per Cochrane." Free authority transfer at scale; the Foundation does the curation, everyone else does the distribution.

**Feature 18 — Open-source the system prompt.** Publish the chatbot's full prompt: how it retrieves, how it refuses, how it reasons about disagreement, how it gates audience mode. Position: "We are not hiding how this works because it works through the corpus, not the model." Competitors who copy the prompt discover their corpus is the bottleneck — and the corpus is what is defensible (EU database rights, twenty-three-thousand-paper review, evidence tiers, synthesis history). This is the Cochrane move: published methodology raises the floor of the field and entrenches the leader.

**Feature 19 — Do not ship a consumer mode at launch.** Counterintuitive given that every chatbot launches consumer-first. Heavy Metal Index ships to regulators, legal counsel, brand QA, and journalists first. Lock in the high-trust users as the audience. Consumer adoption follows organically once "the lawyers use it" becomes ambient knowledge. The free-tool framing makes the twelve-month delay affordable, and the credibility-funnel-first sequencing is the move that separates Heavy Metal Index from every consumer-tier "ask my docs" competitor.

## 5. Infrastructure dependencies

Ask the Index is largely a reading surface over architecture that already exists or is in active development per CLAUDE.md. Listing the load-bearing dependencies makes it possible to evaluate readiness before the chatbot ships.

The corpus-side dependencies are: source pages with disciplined frontmatter (cite_key, evidence_tier, year, doi, source_type, metals, ingredients, matrices, jurisdictions, sample_n where available); routing audit at `data/evidence/product_source_routing_audit.csv` kept current by the watcher and prebuild hooks per CLAUDE.md Part 5b; the `contamination_profile` block on ingredient pages with the three-field state system (status, confidence, n_studies) plus `last_reviewed` and `last_full_resynthesis`; the body-level "Heavy metal contamination profile" table on every non-stub ingredient page; the synthesis event log at `data/evidence/review_events.jsonl`; product-category pages with the generator-managed Literature Evidence Summary, Source Evidence Inventory, and Broad Product Context blocks; regulation pages with structured `rule_id`, `limit_value`, `limit_unit`, `agency`, `jurisdiction` frontmatter; audience tags on every page.

The chatbot-side dependencies are: a retrieval layer that can read both current state and git-snapshot state (Features 7 and 11); a prompt template architecture that supports audience modes, the methodology footer, the branded refusal, and the "Where HMT&C draws the line" answer block; a query log with anonymization at submission; a shareable-card renderer (HTML and image) that resolves permalinks to git-snapshot answers; an email digest pipeline backed by review_events.jsonl and the ingest log; an academic-API authentication layer that verifies .edu emails or institutional affiliation.

The HMT&C-side dependencies are: certification pages at `wiki/certification/` with the deviation rationale field for each metal-matrix combination where HMT&C has set a threshold; the staff workbench snapshots at `wiki/workbench/standards/<product-slug>.md` already auto-generated by `tools/evidence/apply-product-hmtc-evidence-summaries.mjs`; the Part 19 threshold-setting workflow producing labeled rationale strings per CLAUDE.md Part 2.

Gaps that block the load-bearing Feature 1 specifically: the certification pages are not yet comprehensively populated with labeled rationale; the threshold-derivation work in Part 19 is in active development; the deviation rationale field is not yet a hardened schema. For the chatbot to launch with Feature 1 functional across the product corpus, the certification-page completion work needs to move ahead of chatbot build start.

## 6. Rollout sequencing

**MVP (launch).** The strategic minimum that ships in version one is: audience-mode prompt at conversation start (legal, regulatory-QA, journalist, educator — not consumer); per-claim provenance returned inline; methodology ceremony footer on every response (Feature 4); branded refusal pattern (Feature 5); the "Where HMT&C draws the line" answer block (Feature 1) for the metal-matrix combinations where HMT&C thresholds and rationale exist; shareable answer cards with permalinks (Feature 11); public query log on the marketing site (Feature 6); as-of-date queries via git snapshots (Feature 7). That cut signals seriousness, anchors defensibility, seeds free distribution, and establishes the brand voice. Roughly half the features in this document; all four signals from §1 covered.

**Phase 2 (post-launch, 0 to 6 months).** Deposition Preview mode (Feature 2); Hostile Expert Simulator (Feature 3); Affidavit Format Generator (Feature 8); Cross-Corpus Claim Verification (Feature 9); Weekly Digest (Feature 12); "What Would Change If" Simulator (Feature 13); "Ask the Index About Us" reverse query (Feature 14). Each of these is a press-release-worthy launch in its own right and should be marketed independently. The retailer compliance angle of Feature 9 in particular warrants targeted outreach to Whole Foods, Sprouts, and Target buyer-approved-cert reviewers as a pre-announcement.

**Phase 3 (6 to 18 months).** Regulator Comment-Period Mode (Feature 10); Localized Vulnerable-Population Mode and consumer audience expansion (Feature 15); Academic API (Feature 16); Cite the Index program (Feature 17); open-source the system prompt (Feature 18). Feature 19 (no consumer launch) is a decision sustained across Phases 1 and 2; it ends when Feature 15 ships in Phase 3.

The single deferred decision is whether to ship Feature 18 (open-source the prompt) earlier than Phase 3. The argument for earlier shipping is that the move is most credibility-generative when it accompanies launch; the argument against is that the prompt will need iteration and freezing it publicly too early forecloses changes. Default: ship in Phase 3 once the prompt has stabilized through nine months of production use.

## 7. Risks and failure modes

**Drift in either direction.** The CLAUDE.md Part 2 firewall is the load-bearing constraint. A chatbot session that softens wiki claims to align with HMT&C thresholds, or strengthens wiki claims to justify HMT&C thresholds beyond what literature supports, destroys the epistemic-asymmetry argument the whole product rests on. Mitigation: the system prompt explicitly forbids both directions; the audience-mode prompts include drift-defense language; the methodology ceremony footer surfaces source-tier composition so drift is auditable from any answer.

**Hallucination through the retrieval layer.** Even with strict grounding, RAG systems can synthesize plausible-sounding claims that no source supports. Mitigation: the system prompt requires every claim to be traceable to a returned passage; the methodology footer counts cited passages; an automated lint pass on a sample of production answers checks claim-to-passage attribution post-hoc; refusal is preferred over speculation.

**Brand-naming leakage.** The Part 12 firewall is absolute. A user asking "is Brand X's product safe" must receive a refusal that explains the firewall, not an answer that drops brand names because some source in the corpus happens to. Mitigation: brand-name detection at both query and response time; refusal pattern is the default for any query containing a recognized brand string.

**Adversarial use against HMT&C-certified brands.** A user could query the bot for hostile-expert-style attacks on the literature baseline underneath an HMT&C threshold, then use the output to challenge a certified brand. This is the cost of operating an honest wiki and is acceptable; the alternative (a wiki that hides weaknesses in the evidence base) destroys defensibility entirely. Mitigation: none. This is the trade-off the architecture intentionally accepts.

**Cost explosion from public query log surface.** Feature 6 exposes anonymized queries, which invites both adversarial query injection and inspection probing. Mitigation: rate limits per IP and per session; abuse detection; the query log shows only a curated subset of recent queries, not the live stream; deletion path for any query that surfaces sensitive content.

**Stale synthesis cited as current.** A user queries the bot, the answer cites a `contamination_profile` cell whose `last_full_resynthesis` is two years old, and the user treats the answer as current. Mitigation: the methodology footer surfaces `last_full_resynthesis` per cited cell; the inline provenance shows synthesis age; cells past a configurable freshness threshold trigger a "this synthesis is N months old" advisory in the answer body.

**Refusal fatigue.** If the corpus is too thin in a category, the bot refuses too often, and users stop trying. Mitigation: gap-queue prioritization (CLAUDE.md Part 24) means heavily-refused topics rise in ingest priority; the bot reports gap-queue position when refusing ("this topic has been requested N times in the last 30 days; queued for coverage").

**Operational cost.** Free does not mean costless; LLM API calls, hosting, and email infrastructure run real bills. Mitigation: Vercel AI Gateway with provider fallback for cost optimization (per the Vercel platform notes); a daily token budget that throttles gracefully when exceeded; the academic API throttled at a lower rate than the public chat interface.

## 8. Open questions deferred to build time

These are questions that do not need to be answered now but will need to be answered during build.

How is audience mode persisted across a conversation? Sticky for the session, or re-prompted on topic shift? Default working assumption: sticky for the session with an explicit "switch audience" command available.

How are anonymized queries selected for the public query log? Live stream, curated sample, or threshold-based (only queries with confident answers)? Default working assumption: threshold-based — only queries that produced a high-confidence answer or a noteworthy refusal appear, with a manual override for moderation.

How is the "Where HMT&C draws the line" block rendered when HMT&C has not set a threshold for the queried combination? Default working assumption: the block renders with "HMT&C threshold: in development" and links to the literature baseline plus an invitation to subscribe to the weekly digest for threshold-publication announcements.

How does the bot handle queries that touch metals outside the HMT&C-10 analyte vocabulary (per CLAUDE.md Part 14)? Default working assumption: the bot answers from the literature normally; the "Where HMT&C draws the line" block returns "Not in the HMT&C certification analyte vocabulary; the wiki tracks this metal for broader scientific reference per [[metals/...]]."

How is the system prompt versioned and made auditable? Default working assumption: prompts are version-controlled in this repository under `tools/ask-the-index/prompts/`; each production answer footer cites the prompt version that produced it.

What is the licensing posture of the bot's outputs? Default working assumption: outputs are CC BY for non-commercial use with attribution to heavymetalindex.com required; commercial reuse requires a license, leveraging the EU database-rights positioning from CLAUDE.md Part 1. Feature 17 (Cite the Index program) operates within the non-commercial-with-attribution band.

## 9. Adjacent products and federation

Ask the Index does not replace heavymetalindex.com; it adds a conversational entry point. The same corpus continues to power: HMT&C certification at heavymetaltested.com (one-way reference); the Journal of Food Metallomics; educational courses; the future ingredient-list contamination-likelihood app. The chatbot is a fifth product served by the corpus, not a replacement for the others.

WikiBiome federation (CLAUDE.md Part 22) is unaffected. Microbiome material that crosses into metals exposure remains here in draft form and lifts to WikiBiome with minimal edits; the chatbot does not blur the boundary.

The future private brand-intelligence wiki (CLAUDE.md Part 26) is a different system entirely and never feeds Ask the Index. The firewall in that direction is absolute: the chatbot is public-facing, brand-level data is internal, and the public chatbot must never have read access to brand-identifying lab results, COAs, or partner data feeds. One-way link only: the private wiki may consume the public wiki for context; the public chatbot may not consume the private wiki.

## 10. Build-time references

When build work begins, the load-bearing references are:

- CLAUDE.md Part 2 (the wiki/HMT&C firewall) for drift-defense system prompt language
- CLAUDE.md Part 6 (page templates) for the schema fields the retrieval layer relies on
- CLAUDE.md Part 7 (audience layering) for audience-mode design
- CLAUDE.md Part 9 (synthesis and resynthesis) for the freshness signals shown in answers
- CLAUDE.md Part 12 (brand-level data firewall) for brand-name refusal patterns
- CLAUDE.md Part 13 (evidence grading) for tier display in answers
- CLAUDE.md Part 14 (conventions) for unit handling, speciation labeling, and value preservation
- CLAUDE.md Part 18 (lint) for the data quality gates the chatbot relies on
- CLAUDE.md Part 19 (HMT&C threshold-setting workflow) for Feature 1's rationale strings
- `docs/governance/hmtc-governing-principles.md` for the certification-side governance the rationale strings encode
- `docs/seo-indexing-plan-2026-05.md` for the public-site discoverability work that runs in parallel with chatbot launch
