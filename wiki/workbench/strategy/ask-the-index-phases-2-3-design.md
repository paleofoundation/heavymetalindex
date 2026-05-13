---
title: "Ask the Index — Phase 2 and Phase 3 design"
type: product-design
product: ask-the-index
phase: 2-and-3
status: design-spec
audience: [internal]
noindex: true
updated: 2026-05-14
---

# Ask the Index — Phase 2 and Phase 3 design

Companion to [[workbench/strategy/ask-the-index-spec]]. The strategy spec captured the vision and feature inventory. This document goes build-deep on every Phase 2 and Phase 3 feature: what it does in concrete user terms, what the UX looks like, what the prompt template needs, what data dependencies it has, what edge cases break it, how it launches, and what success looks like.

Sequencing assumption: MVP has shipped (audience-mode prompt; per-claim provenance; methodology footer; branded refusal; "Where HMT&C draws the line" answer block on populated metal-matrix combinations; shareable answer cards; public query log; as-of-date queries). Phase 2 features layer onto that foundation; Phase 3 features assume both prior phases are stable.

A feature labeled "build-ready" means a competent engineer with this spec, CLAUDE.md, and read access to the corpus could begin implementation without further design conversation. Open questions are surfaced explicitly per feature; default working assumptions are noted where the question can be answered later without blocking build.

## Phase 2 — months 0 to 6 post-MVP

Phase 2 features individually warrant press-release-quality launches. The Foundation should not bundle them. The cadence is roughly one feature every three to four weeks, paired with targeted outreach to the audience tier the feature serves.

### Feature 2 — Deposition Preview mode

**What it does.** Legal-audience users see a button on every substantive answer labeled "Show me how this would be questioned at deposition." Clicking it generates a numbered Q&A walkthrough where each Q is a plausible plaintiff's-expert hostile question and each A is the literature-supported response. Every A carries inline provenance (sample size, analytical method, evidence tier, contributing wiki page, last synthesis date). The output is exportable as a PDF formatted for direct handoff to defense counsel's expert witness.

**UX flow.** The user starts in legal audience mode and asks a substantive question (concentration ranges, regulatory thresholds, methodology critique, etc.). The standard answer renders with the methodology footer. Below the footer, a secondary action surface offers three buttons: "Deposition Preview," "Affidavit Format" (Feature 8), and "Verify a Claim" (Feature 9). Clicking Deposition Preview triggers a streaming generation of the Q&A walkthrough in a side panel; the original answer remains visible for cross-reference. The Q&A is structured as numbered pairs with the Q in slightly larger type and the A in body type with citations inline. A header at the top of the walkthrough names the matter scope ("Deposition preview for: Cd in dark chocolate, US jurisdiction, 2026-05") and a footer carries the standard methodology disclosure plus a "This is a literature walkthrough, not legal advice" notice. Export-to-PDF button at the top right; "Share as link" generates a permalink that resolves to the same walkthrough as-of today's commit.

**Prompt template architecture.** A multi-shot template with five sections. Section one frames the role: "You are generating a deposition preview from the Heavy Metal Index corpus. The reader is defense counsel preparing an expert witness." Section two enforces the format: numbered Q&A pairs, no fewer than 8 pairs and no more than 15, covering scope challenges, methodology challenges, sample-size challenges, contradicting-source challenges, jurisdiction challenges, and applicability challenges. Section three injects the retrieved corpus passages with their evidence tiers. Section four enforces refusals: no medical advice in answers; no brand names in either Qs or As; no speculation beyond corpus; when a hostile Q has no corpus-supported answer, the A reads "The wiki acknowledges this question as a genuine gap in the literature; defense counsel should anticipate this line of questioning and prepare with primary-source expert testimony." Section five demands the methodology footer regardless of output mode.

**Data dependencies.** Audience mode set to legal. Retrieval layer must return at least 5 distinct A-tier or B-tier passages for the queried scope before the Deposition Preview button is offered; below that threshold the button is greyed with a tooltip "Insufficient corpus depth for deposition preview." The corpus must have evidence tiers populated on every cited source (CLAUDE.md Part 13). The contradiction-surfacing logic must already be working in the base chatbot.

**Edge cases.** A hostile Q may name a brand or product line the corpus does not cover. The bot answers with the literature for the class, not the brand, and notes the scope mismatch in the A. A hostile Q may attempt to extract speculation ("but isn't it possible that..."); the bot reframes to what the literature supports or refuses. A user may ask for Deposition Preview on a query whose answer was largely a refusal; the bot generates a preview of how the literature gap itself would be questioned, which is itself useful to defense counsel preparing for adversarial questions about what is unknown.

**Launch coordination.** Pre-launch, prepare three reference deposition previews for the most-litigated metal-matrix combinations (Pb in baby food; iAs in infant rice cereal; Cd in dark chocolate). Publish them as a free PDF compendium titled "Deposition Preview Library, Volume 1" simultaneously with the feature launch. Outreach to defense-side product-liability law firms (initial list: 10-15 firms with recent class-action defense work in food and supplements); the pitch is "we built a tool for you; here is the library and the live tool." A LinkedIn post from the Foundation's executive director announces the feature with a screenshot of one Q&A pair from the library. Within 60 days the library expands to a second volume; the cadence becomes quarterly.

**Adjacent product.** The Deposition Preview Library is itself a publication — a quarterly free PDF compendium published under heavymetalindex.com/library. Each volume covers the most-queried legal-audience scopes from the prior quarter; the library compounds with the chatbot's query log and becomes the canonical reference defense counsel pre-prints before depositions. Optional: a "Suggest a topic for the next volume" form on the library page that feeds the gap queue.

**Success metrics.** Quantitative: number of Deposition Preview generations per week; number of unique legal-audience sessions; number of PDF exports; number of "Share as link" permalink clicks. Qualitative: track LinkedIn shares of generated previews; track citations to heavymetalindex.com in court filings via PACER monitoring (build a quarterly script); track inbound emails from defense firms.

### Feature 3 — Hostile Expert Simulator

**What it does.** A narrower companion to Deposition Preview. The user pastes a hostile expert's specific claim and the bot returns a counter-position brief: where the paper(s) cited by the hostile expert sit in the corpus (tier, sample size, geography, methodology); what contradicting or qualifying sources say; what the synthesis position is; what the methodology critique would be; what the recommended counter-evidence is.

**UX flow.** Available as a slash command (`/hostile`) inside legal audience mode or as a dedicated entry point at heavymetalindex.com/hostile-expert. Input is a free-text paste of the hostile expert's claim plus optional citation paste. Output is a structured brief with five sections: "Claim as stated," "Corpus position on cited sources," "Contradicting evidence," "Methodology critique," "Recommended counter-evidence." Export-to-PDF and permalink available. The brief is explicitly framed as "drafting input for defense counsel's expert," not as a legal document.

**Prompt template architecture.** Same overall shape as Deposition Preview but with a different structural target. Section one frames role and input: "You are generating a counter-position brief from the Heavy Metal Index corpus in response to a hostile expert's claim." Section two injects the user's claim and any citations they pasted. Section three injects retrieved corpus passages, weighted toward sources that contradict, qualify, or methodologically critique the cited papers. Section four enforces the five-section output structure. Section five demands the methodology footer plus an explicit refusal disclosure ("This is a literature-grounded counter-position, not legal advice or expert testimony").

**Data dependencies.** Audience mode set to legal. Retrieval layer must be able to ingest citation strings (DOI, author-year, full title) and resolve them to corpus source pages where they exist. For papers the user cites that are not in the corpus, the bot must answer honestly: "This paper is not in the Heavy Metal Index corpus; the counter-position is based on adjacent literature." The contradiction-surfacing logic and evidence-tier infrastructure are prerequisites.

**Edge cases.** A user may paste a claim that is actually well-supported by the corpus; the bot must say so rather than generate a synthetic counter-position. A user may paste claims involving brand names; the bot strips brand references before generating the counter-position. A user may attempt to use the simulator offensively (a plaintiff's expert preparing an attack rather than a defense expert preparing a response); the bot treats both symmetrically — it counters the claim as stated, regardless of which side benefits, because the literature is the same either way. This is acceptable: the Foundation operates an honest wiki, and the symmetric treatment is itself part of the defensibility positioning.

**Launch coordination.** Soft-launch to a small list of defense firms already engaged from Feature 2 outreach. Two weeks of feedback collection. Public launch via a Foundation blog post titled something like "Counter-position briefs from the literature, on demand." LinkedIn carousel post with three example outputs.

**Success metrics.** Number of briefs generated per week; share of briefs that result in PDF exports; inbound emails from defense counsel referencing specific brief outputs; corpus-gap signals from claims that the bot could not adequately counter (these feed the ingest queue).

### Feature 8 — Affidavit Format Generator

**What it does.** Generates a structured affidavit-ready summary of the wiki's current position on a metal-matrix combination, formatted to be adapted by an actual defense expert. Free version produces the format; the actual signed affidavit is downstream paid expert work the Foundation can offer separately.

**UX flow.** Available from the legal-audience answer surface (the same secondary action row as Deposition Preview). Input is the metal-matrix scope plus jurisdiction. Output is a structured document with sections matching standard expert-witness affidavit conventions: "Statement of qualifications" (placeholder for the actual expert to fill); "Statement of materials reviewed" (auto-populated from the corpus sources cited); "Statement of methodology" (the wiki's synthesis methodology summary); "Findings" (the literature-supported position with inline provenance); "Limitations" (corpus boundaries, data gaps, contradictions); "Statement on adversarial scope" (explicit acknowledgment that the affidavit is one-sided as all affidavits are). Export-to-DOCX (not PDF — defense counsel needs to edit) and permalink.

**Prompt template architecture.** Most rigid template in the system; the output must conform to expert-witness conventions. Section one frames role: "You are generating an affidavit format from the Heavy Metal Index corpus. The output will be adapted by a licensed expert witness." Section two specifies the rigid section order and headings. Section three enforces voice: third-person formal, no first-person, no marketing language, no Foundation self-references inside the affidavit body (the Foundation is named only in the materials-reviewed section as the source of the synthesis). Section four enforces refusals: no medical or legal conclusions; no causal claims beyond what the literature supports; no jurisdictional advice; provenance on every numerical claim. Section five attaches the methodology footer outside the affidavit body.

**Data dependencies.** Same as Deposition Preview. Additionally, the bot must know the standard affidavit section order and conventions; this is encoded in the prompt rather than derived from the corpus.

**Edge cases.** The affidavit format requires a coherent, defensible position; if the corpus on the queried scope is too thin or too contradicted, the bot generates a "Statement of insufficient corpus support" rather than a synthetic findings section. Users may attempt to generate affidavits on scopes outside the corpus's reasonable coverage; the bot refuses with the standard branded refusal and notes that affidavit generation requires a populated synthesis.

**Adjacent product.** The Foundation can offer paid expert-witness services that begin with the free affidavit format and end with a signed affidavit from a credentialed expert. This is a high-margin downstream service that the free tool funnels into. The pricing and scope of the paid service is Foundation business, not chatbot product design.

**Launch coordination.** Lower-key launch than Deposition Preview. A Foundation blog post; an email to the list of defense firms from Feature 2 outreach; no broad social media push. The audience for this feature is narrow (defense counsel preparing for trial or summary judgment) and the marketing surface should match.

**Success metrics.** Number of affidavit generations; share that result in DOCX exports; downstream conversions to paid expert-witness engagements (tracked by the Foundation's separate services billing); inbound referrals from previously-engaged defense firms.

### Feature 9 — Cross-Corpus Claim Verification

**What it does.** A user (typically a retailer compliance team or brand QA lead) pastes a marketing claim. The bot returns a verification: where the claim sits relative to the wiki's literature for the relevant product category; what published evidence supports or contradicts the claim; what would need to be true (in testing, in sourcing, in formulation) for the claim to be substantiated; whether the claim conflicts with applicable regulatory frameworks; whether HMT&C-certified products provide a verified position in the relevant distribution.

**UX flow.** Two entry points: (1) a slash command `/verify` inside any chat conversation; (2) a dedicated landing page at heavymetalindex.com/verify-a-claim with a prominent paste box. The output is structured: "Claim as stated"; "Product category scope"; "Literature distribution for this category"; "Required substantiation"; "Regulatory framework"; "Verdict" (one of: literature-supported, literature-conflicting, unsupported-but-not-contradicted, out-of-scope). The Verdict is a single sentence in bold below a colored marker (green / red / amber / grey). Export-to-PDF and permalink. A footnote at the bottom explicitly states: "This verification reflects the literature corpus as of [date]. HMT&C-certified brands carry verified per-product positions; the Foundation does not verify uncertified-brand claims beyond the literature distribution."

**Prompt template architecture.** Section one frames role: "You are verifying a brand marketing claim against the Heavy Metal Index corpus. The reader is a retailer compliance team, a brand QA lead, or a brand legal team evaluating whether the claim is substantiable." Section two ingests the pasted claim and the inferred product category. Section three injects retrieved literature passages weighted toward the product category and any cited supporting evidence. Section four enforces the structured output. Section five enforces refusals: no brand-name analysis (the bot strips brand identifiers from the claim before evaluating); no medical or safety verdicts (the bot evaluates substantiability against literature, not safety); no recommendation to certify with HMT&C (the relationship is shown in the footnote, not pitched).

**Data dependencies.** The product-category page corpus must be reasonably populated for the verification to be useful; for product categories with thin corpus, the bot returns "Insufficient corpus depth for verification" with a gap-queue acknowledgment. The regulation pages must be current for the regulatory-framework section to resolve correctly. The HMT&C certification pages, where the relevant program exists, must carry the certified-product distribution data the verification cites in its footnote.

**Edge cases.** A claim may name a competitor brand ("lower lead than Brand X"); the bot strips the comparative and evaluates the absolute version of the claim against the literature distribution. A claim may be technically true but misleading ("certified lead-free" when the certification's threshold is well above 0); the bot's verdict reads "literature-supported but consumer-misleading per the wiki's definition of lead-free at [[regulations/...]]" or similar. A claim may invoke a metal not in the HMT&C-10 vocabulary (CLAUDE.md Part 14); the bot evaluates against the broader wiki coverage and notes the scope difference.

**Launch coordination.** This is the highest-value Phase 2 feature. Pre-launch outreach (six to eight weeks in advance) to Whole Foods, Sprouts, Target, Erewhon, Thrive Market, and Wegmans compliance teams — initial conversation framed as "we are launching a free tool that will help your brand intake process; here is a preview." The pitch is operational, not promotional: the retailer's compliance reviewer can paste a claim from a brand's marketing material into the verifier and get a sourced verdict in under a minute. Launch is paired with a Foundation press release titled along the lines of "Heavy Metal Index launches free verification of heavy-metals marketing claims" and a coordinated LinkedIn push from the Foundation's leadership. The press release does not name retailers as users (compliance reviewers will not want public attribution), but the press release does cite "retailer compliance teams" as a launch audience. A follow-on Foundation blog post six weeks later publishes anonymized statistics on the first month of usage ("In the first month, the verifier evaluated N claims across M product categories; X% were literature-supported, Y% were literature-conflicting"). The statistics build narrative momentum for the feature.

**Adjacent product — Batch Verification API.** Retailers' compliance teams operate at scale (hundreds of brand intakes per quarter); a per-claim chatbot is too slow. A batch API endpoint that accepts a CSV of claims and returns a CSV of verifications is the natural Phase 2.5 extension. Offered free at modest volumes; pricing tier above a usage threshold. The API tier becomes a Foundation revenue line over time without compromising the free-tool framing of the public chatbot.

**Success metrics.** Number of verifications per week; share resulting in PDF export or permalink share; share of verifications where the verdict is literature-conflicting (a leading indicator of category-wide claim inflation that the Foundation can publish on); inbound from retailers; downstream HMT&C certification inquiries from brands whose claims the verifier flagged as unsupported.

### Feature 12 — Weekly Digest

**What it does.** A free weekly email summarizing what changed at Heavy Metal Index: new sources ingested by category, synthesis cells whose values moved, regulatory tracking updates, gap-queue topics newly covered, notable contradictions surfaced. The digest is the canonical heavy-metals-in-food update channel; the Foundation beats the news cycle by reporting agency updates with structured rigor before they reach trade press.

**UX flow.** Subscription via a single-field form on heavymetalindex.com (email only; no name required). Confirmation email with one-click unsubscribe and a link to view past digests. Digests arrive Monday mornings at 7am Eastern. Each digest is a single-column HTML email with five sections: "Synthesis changes this week" (cells whose values moved, with before/after and reason); "New sources ingested" (counts by category, with three highlighted papers); "Regulatory tracking" (any FDA, EFSA, WHO, Codex updates the Foundation noticed); "Gap-queue coverage" (topics that crossed the corpus-depth threshold this week and are now answerable in the chatbot); "Notable contradictions" (where two A-tier sources newly disagree). Plain-text version included. Archive viewable at heavymetalindex.com/digest with permalinks per issue.

**Prompt template architecture.** Not a per-query template; a weekly batch generation pipeline. The pipeline reads `data/evidence/review_events.jsonl` (synthesis events per CLAUDE.md Part 9), the ingest log, and the regulatory-tracking surface (a new feed the Foundation must build separately, or a manual entry). The generation prompt synthesizes these inputs into the five-section digest format with consistent voice. The Foundation's executive director (or a designated editor) reviews the draft on Friday and approves for Monday send.

**Data dependencies.** `data/evidence/review_events.jsonl` must be reliably populated by the synthesis workflow (CLAUDE.md Part 9). The ingest log must produce per-week summaries. Regulatory tracking is a meta-feed the Foundation maintains; in the absence of automation, an editor manually flags items.

**Edge cases.** Weeks with no synthesis changes (early after MVP, before the synthesis workflow has accumulated trigger fires) result in a thinner digest; the bot generates "This week, the corpus was stable; here is what is in the gap queue and being prioritized for coverage." Slow weeks are themselves a credibility signal — the Foundation is not manufacturing news. Major news weeks (a new FDA guidance, an EFSA opinion) may warrant a special-issue digest sent mid-week; the editor's call.

**Launch coordination.** Soft-launch with internal Foundation distribution and 20-30 hand-picked recipients (regulators, journalists, brand QA leads from existing relationships) two months before public launch. Iterate the format based on feedback. Public launch via a "Subscribe" prompt added to the chatbot's answer-card export surface and a small CTA on heavymetalindex.com. Cross-promote via the Foundation's existing communications channels.

**Success metrics.** Subscriber count; open rate; click-through rate to specific digest links; forward rate (proxied via referral traffic); inbound inquiries citing specific digest issues; coverage in trade press citing the digest as a source.

### Feature 13 — "What Would Change If" Simulator

**What it does.** A brand R&D team types in a formulation or sourcing question ("What would happen to Cd load if I switch cocoa from Côte d'Ivoire to Ecuador?" or "What does the wiki say about Pb load if I substitute brown rice flour for white rice flour?"). The bot pulls the relevant `geographic_breakdown`, `seasonal_variance`, processing-effects, and ingredient-derivative-risk data from the affected ingredient pages and returns a structured comparison.

**UX flow.** Available as a slash command (`/simulate`) inside any chat conversation or as a dedicated entry point at heavymetalindex.com/sourcing-simulator. Input is a free-text formulation question or a structured form (ingredient A → ingredient B; or processing change A → processing change B; or sourcing region A → sourcing region B). Output is a side-by-side comparison: "Current configuration" vs "Proposed configuration," with per-metal expected concentration ranges, sources, confidence levels, and a "Net effect" summary. Caveats are prominent: this is a literature-projected estimate, not a replacement for testing.

**Prompt template architecture.** Section one frames role: "You are projecting heavy-metal concentration changes from a formulation or sourcing change, using only the Heavy Metal Index corpus." Section two parses the user's change into structured before/after states. Section three retrieves the relevant geographic-breakdown, seasonal-variance, processing-effects, and ingredient-derivative-risk passages from the corpus. Section four enforces the side-by-side output structure with explicit confidence labels per metal. Section five enforces refusals: no economic or business advice; no claim that the projected change will result in any specific test outcome; no recommendation that the brand adopt the projected change; explicit notice that lot-level testing is the only authoritative measurement.

**Data dependencies.** The `geographic_breakdown` and `seasonal_variance` sub-fields from CLAUDE.md Part 6 must be populated for the relevant ingredient pages. Processing-effects sections per the Part 6 mandatory ingredient-page structure must be populated. Ingredient-derivative-risk sections similarly. For ingredient pages where this data is thin, the bot returns a partial projection with explicit gap acknowledgment.

**Edge cases.** A user may ask about a sourcing region not in the corpus; the bot acknowledges the gap and returns the closest-available comparison (the country-level data if region-level is missing, the regional data if country-level is missing, etc.) with the scope mismatch noted. A user may ask about a formulation change that involves an ingredient outside the wiki's coverage (an emerging novel-protein, an unusual ingredient); the bot answers what it can about the covered ingredient and acknowledges the gap on the other.

**Launch coordination.** Audience is brand R&D and QA teams. Outreach to a list of mid-size CPG brands (initial list: 30-50 brands with known active R&D programs in product categories the wiki covers heavily — infant cereals, protein powders, dark chocolate, baby food). The pitch is "free sourcing-decision tool grounded in the literature." Pair with a Foundation webinar walking through three real-world simulation examples. Webinar attendance becomes a sales funnel for HMT&C certification.

**Adjacent product — formulation R&D consultation.** Beyond the free chatbot, the Foundation can offer paid R&D consultation engagements that use the simulator as a starting point but go deeper (testing protocol design, supplier audit support, etc.). Same pattern as Feature 8: the free tool funnels into paid downstream services.

**Success metrics.** Number of simulations per week; share involving sourcing changes vs formulation changes vs processing changes; inbound from R&D teams; downstream conversion to HMT&C certification or paid R&D consultation.

### Feature 14 — "Ask the Index About Us" reverse query

**What it does.** A brand pastes its product's ingredient list, the bot returns the per-ingredient contamination profile, applicable regulatory limits, literature ranges, and the gap between the literature distribution and HMT&C thresholds where applicable. Free brand-readiness assessment. The bot does not pitch HMT&C certification; the certification page is one click away.

**UX flow.** A dedicated entry point at heavymetalindex.com/ingredient-list-check. Input is a free-text ingredient list (the bot uses `wiki/app/ingredient-mapping.md` logic to normalize). Output is structured per ingredient: ingredient name (normalized); category; primary metals of concern; literature concentration ranges; applicable regulatory limits; HMT&C threshold gap where the certification covers the ingredient. A summary at the top names the highest-risk ingredients in the list and the metals that are likely to be load-bearing. A footer at the bottom explicitly states: "This is an ingredient-list analysis based on the literature, not a product test. HMT&C certification requires per-product testing per [[certification/...]]."

**Prompt template architecture.** Section one frames role: "You are analyzing a brand's product ingredient list against the Heavy Metal Index corpus to produce a readiness assessment. The reader is a brand QA lead, R&D lead, or founder considering certification or competitive positioning." Section two ingests the pasted ingredient list and normalizes it via the ingredient-mapping logic. Section three retrieves per-ingredient contamination profiles, regulatory limits, and HMT&C threshold data. Section four enforces the structured per-ingredient output plus the summary block. Section five enforces refusals: no brand naming (the bot does not infer or name the user's brand); no certification advice; no testing recommendations beyond the standard footer.

**Data dependencies.** The ingredient-mapping logic in `wiki/app/ingredient-mapping.md` must be operational. The ingredient page corpus must be reasonably populated for common food ingredients (the launch tier is the top 200 ingredients by frequency in CPG product categories). The HMT&C threshold data must exist for product categories where the certification program operates.

**Edge cases.** Ingredient lists from international products may include ingredients not normalized by the wiki's mapping (a non-English ingredient name, an emerging novel-protein); the bot acknowledges the gap. A user may paste a vague or non-product ingredient list (a recipe rather than a CPG product); the bot answers what it can. A user may paste a list that includes a brand-name ingredient (e.g., a proprietary blend named after a brand); the bot strips the brand reference and analyzes the underlying ingredient categories.

**Launch coordination.** Pair with Feature 13 (Sourcing Simulator) in a coordinated launch; both features target brand R&D and QA. Outreach via the same channels. The Foundation webinar on the Sourcing Simulator can include a live demo of the Ingredient List Check. A blog post titled "Check your product against the literature in under 60 seconds" links to both tools.

**Adjacent product — pre-certification consultation.** A brand whose Ingredient List Check returns a high-risk ingredient profile is a natural pre-certification consultation candidate. The Foundation can offer a paid pre-cert engagement that walks the brand through sourcing, formulation, and testing improvements before they enter the certification process formally. Same funnel pattern.

**Success metrics.** Number of ingredient-list analyses per week; share of analyses that flag high-risk ingredients; inbound from brand QA or founders; downstream HMT&C certification inquiries citing the Ingredient List Check as the trigger.

## Phase 3 — months 6 to 18 post-MVP

Phase 3 features assume the Phase 1 and Phase 2 surface is stable, the corpus has accumulated 18 months of synthesis history, and Heavy Metal Index has established a recognizable user base across the four high-pricing-power audiences. Phase 3 features extend the reach into adjacent audiences (consumers, academic researchers, regulators) and lock in the citation-form-of-record positioning.

### Feature 10 — Regulator Comment-Period Mode

**What it does.** When FDA, EFSA, Codex, or another regulator opens a public comment period on a heavy-metals matter (CTZ updates, the Baby Food Safety Act movement, EU 2023/915 amendments, etc.), the bot can produce a draft public comment from the current synthesis. Free, professional-grade, fully sourced, ready for the regulatory team to adapt and submit. The compounding effect: regulator inboxes increasingly fill with high-quality comments citing heavymetalindex.com.

**UX flow.** Available as a slash command (`/comment`) inside regulator audience mode or as a dedicated entry point at heavymetalindex.com/comment-builder. The Foundation maintains a curated list of active comment periods at heavymetalindex.com/active-comment-periods; each entry links into the comment builder pre-loaded with the matter scope. Input is the comment period (matter, agency, docket number, due date) plus the user's organizational identity and position. Output is a structured draft comment with sections matching standard regulatory submission conventions: "Identification of submitting party"; "Summary of comment"; "Background literature review"; "Specific recommendations"; "Citations." Export-to-DOCX. The bot does not submit on behalf of the user; submission is the user's responsibility.

**Prompt template architecture.** Section one frames role: "You are drafting a public comment for the user to adapt and submit to [agency] regarding [matter]." Section two ingests the comment period scope and the user's position. Section three retrieves the corpus literature relevant to the matter. Section four enforces the regulatory-submission structure. Section five enforces refusals: no false attribution to the Foundation (the comment is from the user, not from the wiki); no specific policy advocacy that is not literature-supported; no advocacy for HMT&C as a regulatory standard; explicit notice that the user is responsible for verifying the draft, customizing the organizational identity, and submitting.

**Data dependencies.** A maintained list of active comment periods (the Foundation operates this manually until automation justifies itself). The regulation page corpus must be current (CLAUDE.md Part 18 lint catches regulatory-value drift). Retrieval must support the structured comment-builder output.

**Edge cases.** A comment period may concern a metal-matrix combination thinly covered by the corpus; the bot returns a draft that explicitly notes the literature gap and recommends regulator attention to the gap itself. A user may attempt to use the builder for non-regulatory comments (a brand response to a state AG inquiry, for example); the bot detects the scope mismatch and returns a refusal with redirect to the appropriate tool (Feature 9 or 14). A comment may need to argue against the literature consensus (a user with a heterodox position); the bot generates the user's position with available literature support but does not fabricate support that does not exist.

**Launch coordination.** Pair launch with an active comment period (timing-driven). Pre-launch outreach to regulatory affairs leads at mid-to-large CPG brands. The Foundation publishes a "How to write a literature-grounded regulatory comment" guide simultaneously. Within six months of launch, the Foundation publishes a quarterly review: "Comments submitted to [agency] citing Heavy Metal Index in the prior quarter" with anonymized analysis.

**Adjacent product — comment co-signing.** Where multiple brands or organizations want to co-sign a single comment, the Foundation can host a co-signing surface at heavymetalindex.com/co-sign. A brand drafts a comment using the builder; other brands can co-sign before submission. The Foundation does not lead these efforts but provides infrastructure.

**Success metrics.** Number of comments drafted per active period; number citing heavymetalindex.com that the Foundation can verify via the public regulatory dockets; co-signed comments; coverage in trade and consumer press citing the comment activity.

### Feature 15 — Localized Vulnerable-Population Mode

**What it does.** Consumer audience mode, gated behind a one-time onboarding that asks the user to identify their population context (pregnancy, infant in household, frequent fish consumer, occupational exposure, etc.) and jurisdiction. Subsequent answers are population-and-jurisdiction-aware, returning synthesis that emphasizes the relevant vulnerability profile and the applicable regulatory framework. Long-tail reach into parenting communities, public-health forums, and consumer advocacy networks.

**UX flow.** A dedicated entry point at heavymetalindex.com/for-families (consumer-friendly framing; "consumer audience mode" is the internal label). First-time visitors see a brief onboarding: "Tell us a bit about your situation so we can give you the most relevant answers" with checkboxes for the population profiles. Subsequent questions are answered with the population context implicit. The bot's voice in consumer mode is plain-language, dose-specific, jurisdiction-aware (Prop 65 for California users; FDA frameworks for other US users; EU frameworks for European users; Codex for everyone else). Hard guardrails: no medical advice, no diagnostic language, no brand names. The methodology footer is still present but rendered in plain language.

**Prompt template architecture.** A separate audience mode with its own prompt template family. Section one frames role: "You are answering a consumer's question about heavy metals exposure. The reader has identified their population context as [profile] in jurisdiction [region]." Section two enforces voice: plain language, dose-specific, no jargon without explanation. Section three retrieves population-specific corpus passages and the applicable regulatory framework. Section four enforces consumer-mode guardrails: no individualized advice; no diagnosis; no brand naming; explicit "talk to your doctor" redirect where the question is medical. Section five renders the methodology footer in plain-language form.

**Data dependencies.** Vulnerable-population pages at `wiki/health/` must be populated. The regulation page corpus must have jurisdiction-specific framing per CLAUDE.md Part 6. The consumer audience tag on wiki pages must be reliably applied (CLAUDE.md Part 7).

**Edge cases.** A consumer may ask a question that has no population-specific evidence; the bot answers from the general literature and notes the absence of population-specific data. A consumer may ask a medical or diagnostic question ("could my child's [symptom] be from lead exposure?"); the bot refuses with the standard "talk to your doctor" redirect plus a plain-language summary of what the literature says about the symptom-exposure relationship at the population level. A consumer may ask a brand question; the bot refuses per the Part 12 firewall and offers literature on the product category instead.

**Launch coordination.** Outreach to parenting publications (Romper, Motherly, What To Expect), pregnancy and infant-health Reddit moderators, public-health-oriented NGOs, and consumer advocacy organizations (Environmental Working Group, HBBF, Consumer Reports). The pitch is "we built a tool that answers what the literature actually says, without selling anything." A Foundation blog post titled "Heavy metals in food: what the literature says, for families" launches the consumer mode. The Foundation explicitly does not market this feature to brands or industry; the audience separation is part of the trust positioning.

**Adjacent product — public-health partnerships.** Public-health-oriented NGOs and state health departments may want to embed the consumer mode in their own websites; the Foundation offers a free embed surface (an iframe with the consumer mode bot, customized with the partner's branding alongside heavymetalindex.com attribution). This becomes a distribution channel for the consumer-tier audience without requiring direct marketing.

**Success metrics.** Number of consumer-mode sessions per week; share of sessions from each population profile; coverage in parenting and public-health publications; embed partnerships; share of consumer queries that surface as gap-queue items the Foundation prioritizes for ingest.

### Feature 16 — Academic API

**What it does.** Free programmatic access to the Heavy Metal Index corpus for verified academic researchers. Researchers run meta-analyses, systematic reviews, and original analyses against the corpus. Outputs include citations to heavymetalindex.com in peer-reviewed publications and feedback into the Journal of Food Metallomics where API users become authors.

**UX flow.** API access requires verification: .edu email, institutional affiliation, or peer-review-track credentials. Verification is a manual process for the first 100 researchers; thereafter automated via institution-affiliation services. Researchers receive an API key, rate limits (initially 10,000 queries per month free, with higher tiers via institutional partnership), and documentation. The API exposes: source retrieval by metal/matrix/jurisdiction; full-text search; synthesis retrieval; contradiction surfacing; bibliographic export. A researcher portal at heavymetalindex.com/api shows usage, recent updates to the corpus, and a citation generator.

**Prompt template architecture.** Not chatbot-style; an API surface. The relevant design is the API schema, rate limiting, and abuse detection. The Foundation publishes API documentation including request and response schemas, authentication, rate limits, and citation requirements. The citation requirement: any publication using the API must cite "Heavy Metal Index, Paleo Foundation, accessed [date], heavymetalindex.com" in the methodology section; failure to cite is grounds for revoking access.

**Data dependencies.** A stable API surface over the corpus. The structured-evidence layer at `data/evidence/` (CLAUDE.md Part 4) is the primary data surface; the source pages are secondary. The API must support git-snapshot queries (Feature 7) so researchers can run reproducible analyses.

**Edge cases.** Researchers may attempt to use the API for non-academic purposes (a commercial intelligence company, for example); the Foundation reserves the right to revoke access for terms violations. Researchers may produce work the Foundation disagrees with; the Foundation does not gatekeep based on conclusions, only on methodology and attribution. A researcher may want to license corpus data for non-academic use; that is a separate paid licensing conversation per the Foundation's EU-database-rights positioning (CLAUDE.md Part 1).

**Launch coordination.** Soft-launch with a small list of partner academics (8-12 researchers known to the Foundation, working in heavy-metals-and-food research, agreed in advance). Three to six months of feedback. Public launch via an announcement in the Journal of Food Metallomics editorial and a press release through academic-news channels. Within 12 months, the Foundation publishes "Cited by N peer-reviewed papers using the Heavy Metal Index Academic API" as a press claim.

**Adjacent product — joint publications.** The Foundation actively co-authors publications with academic API users where appropriate. This is a credibility-building exercise: each co-authored peer-reviewed paper deepens the wiki's academic authority and broadens its citation footprint.

**Success metrics.** Number of verified researchers; queries per month; peer-reviewed publications citing the API; co-authored publications; coverage in academic press.

### Feature 17 — Cite the Index program

**What it does.** A free badge program for any organization that cites heavymetalindex.com in published work. Eligible: journalists (named articles citing the wiki), regulators (regulatory documents citing the wiki), NGOs (published reports citing the wiki), brand QA and legal teams (public-facing materials citing the wiki), retailers (compliance materials citing the wiki), academics (peer-reviewed papers citing the wiki). Recipients get a small "[Name] cites Heavy Metal Index" mark for their site or materials, with linkback to heavymetalindex.com. Within two years the citation form-of-record becomes "per Heavy Metal Index" the way medical claims default to "per Cochrane."

**UX flow.** A dedicated page at heavymetalindex.com/cite. The page describes eligibility, the badge format, and the request process. Requesters submit a form with their organization, the published material citing the wiki, the citation context, and the URL or document. The Foundation verifies (manual process initially, automated later) and emails the requester a badge HTML snippet plus high-resolution image files. A public ledger of all badge recipients lives at heavymetalindex.com/cite/who-cites-us; the ledger is itself a social-proof surface.

**Prompt template architecture.** No prompt; this is an operational program. The Foundation maintains the verification workflow, the ledger, the badge format, and the program rules.

**Data dependencies.** None corpus-side. The badge program operates independently of the chatbot.

**Edge cases.** A requester may cite the wiki in a context the Foundation disagrees with (a hostile expert citing the wiki against the Foundation's certification program, for example); the Foundation issues the badge anyway. The wiki's value is precisely that it can be cited by anyone, including critics. A requester may cite the wiki inaccurately (misrepresenting what the wiki says); the Foundation declines the badge and politely notes the misrepresentation; this is the rare exception. A requester may attempt to abuse the program (citing the wiki in a context that is not a real citation); the Foundation verifies and declines.

**Launch coordination.** Soft-launch via direct outreach to the first 30-50 likely badge recipients (journalists who have already cited the wiki; regulators who reference it; brand QA leads from existing relationships). Hand-deliver the badge HTML and image. Public launch via a Foundation blog post and a LinkedIn announcement. Within six months, the ledger should have 100+ entries; within 18 months, 1000+.

**Success metrics.** Number of badge recipients; categories of recipients; visibility of the badge in the wild (search alerts; LinkedIn mentions; press coverage); referral traffic from badge clicks; HMT&C certification inquiries from organizations whose due diligence cited the wiki.

### Feature 18 — Open-source the system prompt

**What it does.** Publish the Ask the Index system prompt in full: how the bot retrieves, how it refuses, how it reasons about disagreement, how it gates audience mode, how it handles brand-name detection, how it constructs the methodology footer. Published at heavymetalindex.com/methodology/system-prompt with version control. Position: "We are not hiding how this works because it works through the corpus, not the model."

**UX flow.** A static page at heavymetalindex.com/methodology/system-prompt. The page renders the full prompt with line numbers and version history. A footer notes the date of each version change and a one-sentence rationale. A "How to read this" preamble explains that the prompt is the operating instructions for the chatbot and that the wiki's defensibility lives in the corpus and the methodology, not the prompt itself. Competitors are explicitly welcome to copy the prompt; the wiki dares them.

**Prompt template architecture.** N/A — the page renders the existing system prompt.

**Data dependencies.** The system prompt itself must be version-controlled in the repository (the spec recommends `tools/ask-the-index/prompts/` per the open question in `docs/ask-the-index-spec.md` §8).

**Edge cases.** Competitors may copy the prompt and attempt to launch competing chatbots. The Foundation's expected response is calm: the prompt is the cheap part; the corpus is the moat. A competitor may attempt to attack the wiki's positioning by citing the open-sourced prompt as evidence of overclaiming; the Foundation's response is that the prompt is the methodology made visible and the methodology is the trust statement. A version change to the prompt may surface a methodological shift; the Foundation publishes the rationale and accepts the scrutiny.

**Launch coordination.** A Foundation blog post titled along the lines of "Why we are publishing our chatbot's instructions" simultaneously with the page launch. Outreach to academic publications interested in AI methodology transparency. The Foundation hosts a webinar walking through the prompt's design choices.

**Success metrics.** Page traffic; citations to the prompt in AI-methodology research; coverage in academic and trade publications; downstream credibility transfer (organizations citing the open prompt as evidence of the wiki's transparency).

### Feature 19 — Sustained non-consumer launch posture

**What it is.** Not a feature; a decision sustained across Phases 1 and 2. Heavy Metal Index does not ship a consumer audience mode at launch (MVP) or in early Phase 2. Consumer adoption follows organically once the high-pricing-power audiences have established the wiki as the citation form-of-record. Feature 15 (Localized Vulnerable-Population Mode) is the consumer-tier launch, and it ships in Phase 3 after credibility is locked in.

**Sustainment.** The decision is upheld through both phases by refusing requests to ship consumer mode early. The Foundation may face pressure from board members, partners, or advisors to launch consumer-tier features first (the conventional wisdom of every chatbot product launch). The decision is to resist that pressure. The strategic logic is in `docs/ask-the-index-spec.md` §6 and CLAUDE.md Part 1: the wiki's value is credibility at the top of the funnel, not user count. Consumer adoption follows from professional adoption, not the other way around.

**End condition.** The decision ends when Feature 15 ships in Phase 3. The Foundation's executive director makes the explicit call to launch consumer mode based on: the corpus is mature enough to support population-and-jurisdiction-aware synthesis; the chatbot has accumulated 12 to 18 months of professional-tier usage; the brand and citation positioning is locked in; the team has bandwidth to handle consumer-tier support volume.

## Phase 2 and Phase 3 dependencies summary

Cross-cutting dependencies that gate multiple features:

The corpus must reach reasonable depth across the product categories where Phase 2 features operate. Specifically: infant formula, infant cereal, baby food, dark chocolate, protein powder, seafood, leafy greens, and root vegetables must have populated `contamination_profile` blocks with synthesis history. Without this, Features 9, 13, and 14 launch degraded.

The HMT&C certification page corpus must be populated with deviation rationale per CLAUDE.md Part 19 for every product category where the certification program operates. Without this, Feature 1 (MVP load-bearing) launches degraded; Features 9 and 14 cannot cite the HMT&C threshold gap.

The structured-evidence layer at `data/evidence/` must be reliably populated with synthesis events, source-routing data, and per-claim provenance. Without this, the methodology footer (MVP) cannot resolve confidently, and Feature 12 cannot generate weekly digests.

The git-snapshot retrieval infrastructure must be operational. Without this, Features 7, 11, and 16 cannot deliver their core value proposition.

The Foundation's editorial operations must be staffed to support: weekly digest review (Feature 12); active comment-period monitoring (Feature 10); academic API verification (Feature 16); badge program verification (Feature 17); ongoing prompt iteration before open-sourcing (Feature 18). This is roughly 0.5 to 0.75 FTE of editorial capacity across Phases 2 and 3 combined. If the Foundation does not staff this, several features ship in degraded form.

## Cross-phase risks specific to Phases 2 and 3

**Marketing surface dilution.** Phase 2 launches one feature every three to four weeks. The risk is press fatigue and message dilution. Mitigation: each feature launch is paired with a distinct audience-tier outreach campaign (defense firms for Features 2 and 3; retailers for Feature 9; brand R&D for Features 13 and 14; subscription audiences for Feature 12); the Foundation's executive director's voice is the consistent thread across all launches.

**Adversarial use compounding.** Features 2, 3, and 17 each enable adversarial use against HMT&C-certified brands or against the Foundation's positioning. The cost-benefit remains acceptable per `docs/ask-the-index-spec.md` §7, but the compounding effect across multiple features warrants explicit monitoring. The Foundation should run a quarterly adversarial-use audit: how is the wiki being used against us, and is that use itself a credibility signal we should acknowledge?

**Capacity strain on Foundation editorial operations.** Phase 2 adds editorial demands (digest review, claim-verification moderation, comment-period monitoring) that compound with Phase 3 (academic API verification, badge program verification, prompt iteration). The Foundation must staff the editorial layer ahead of Phase 2 launch, not in response to it.

**Drift in features that generate adjacent paid services.** Features 8 (Affidavit Format), 13 (Sourcing Simulator), and 14 (Ingredient List Check) each have natural paid-service adjacencies (expert witness, R&D consultation, pre-certification consultation). The risk is that the free chatbot output gets tuned to maximize paid-service conversion rather than to maximize defensibility. Mitigation: the same Part 2 firewall logic applies; the chatbot's output is governed by the literature, the paid services are governed by the engagement scope, and the two are operationally separated. A quarterly review verifies that chatbot outputs have not drifted toward upsell.

**Open-source-prompt backfire.** Feature 18 invites criticism of the prompt's methodology. The Foundation must be prepared to defend the prompt design choices in public. Mitigation: ship Feature 18 only after the prompt has stabilized through nine to twelve months of production use; pair the launch with a webinar that pre-empts likely criticism; treat the criticism that does arise as ongoing methodology refinement.

## Build-time sequencing within Phase 2

The Phase 2 features should ship in this order, optimizing for compounding credibility and audience-tier coverage:

1. **Feature 12 (Weekly Digest)** ships first, roughly 4 weeks post-MVP. Reason: it activates the subscription channel that all subsequent Phase 2 launches use for distribution. Soft-launch period overlaps with MVP launch.
2. **Feature 9 (Cross-Corpus Claim Verification)** ships next, roughly 8 weeks post-MVP. Reason: it is the highest-value Phase 2 feature; retailer outreach takes 6 to 8 weeks of lead time; the launch warrants its own press release and momentum.
3. **Feature 2 (Deposition Preview)** ships at 12 weeks post-MVP. Reason: the Deposition Preview Library Volume 1 needs 4 to 6 weeks of pre-launch curation; legal-firm outreach in parallel.
4. **Feature 14 (Ingredient List Check)** ships at 16 weeks post-MVP. Reason: brand R&D outreach in parallel; pairs with Feature 13.
5. **Feature 13 (Sourcing Simulator)** ships at 18 weeks post-MVP. Reason: pairs with Feature 14; the joint webinar happens at week 18.
6. **Feature 3 (Hostile Expert Simulator)** ships at 22 weeks post-MVP. Reason: refinement of Feature 2 with a narrower audience surface; can launch after Feature 2 has accumulated usage data that informs the design.
7. **Feature 8 (Affidavit Format Generator)** ships at 26 weeks post-MVP. Reason: lowest-volume Phase 2 feature; ships when the legal-tier audience surface is well-established; downstream paid services need to be defined before this launches.

Phase 3 features sequence within months 7 to 18 with looser ordering; the cadence drops to roughly one feature per 8 weeks since each Phase 3 feature requires more sustained operations work.

## Open questions for Phase 2 and Phase 3

**API monetization for Feature 9.** The Batch Verification API adjacent to Feature 9 is the natural Foundation revenue line. At what usage threshold does free tier end and paid tier begin? Default working assumption: 100 verifications per month free; tiered pricing above that, with retailer-specific enterprise agreements.

**Localization for Feature 15.** Consumer audience mode launches in English first. Spanish and other languages are an obvious second tier. What is the localization scope? Default working assumption: launch English-only; Spanish in Phase 3.5 (months 18 to 24); other languages based on demand.

**Academic API gatekeeping for Feature 16.** Who decides which academic users are verified? Default working assumption: the Foundation's editorial team handles the first 100; an automated institution-affiliation service handles the rest.

**Badge program scope for Feature 17.** Should the badge program have tiers (e.g., "Verified Citer" vs "Frequent Citer" vs "Institutional Citer")? Default working assumption: single-tier launch; consider tiers in year two based on adoption patterns.

**Prompt versioning for Feature 18.** When the prompt changes, how is the change announced and explained? Default working assumption: minor changes published silently in the version history; major changes accompanied by a Foundation blog post explaining the rationale.

**Sunset condition for Feature 19.** What is the explicit signal that consumer mode (Feature 15) should ship? Default working assumption: the executive director's call based on credibility-lock-in indicators (citations, retailer adoption, press coverage, peer-reviewed citations); a quantitative bar is not set in advance.

## Coordination with adjacent products

The chatbot's Phase 2 and Phase 3 launches must coordinate with adjacent Foundation products to avoid messaging conflicts or capacity strain.

**HMT&C certification program.** The chatbot's launches drive certification inquiries (Features 9, 13, 14 are explicit funnels). The certification program's intake and processing capacity must scale to absorb the inbound. If the program is bottlenecked, the chatbot's funnel features should soft-launch with reduced marketing surface until intake catches up.

**Journal of Food Metallomics.** Feature 16 (Academic API) and Feature 18 (Open-source prompt) both feed the journal. The journal's editorial cadence must align with the API-user pipeline; co-authored publications take 9 to 18 months from API access to publication.

**Educational courses.** Phase 3 timing overlaps with planned course launches. The chatbot's consumer audience launch (Feature 15) could pair with consumer-oriented courses; the brand R&D launches (Features 13, 14) could pair with brand-QA-oriented courses.

**Future private brand-intelligence wiki.** The wiki/chatbot firewall remains absolute through both phases. The private brand wiki must not feed the public chatbot in any direction. This is monitored in every feature launch.

## Build-time references for Phase 2 and Phase 3

The Phase 1 build-time references in `docs/ask-the-index-spec.md` §10 all apply. Additional references specific to Phase 2 and Phase 3:

- `wiki/app/ingredient-mapping.md` for Feature 14's ingredient normalization
- `wiki/app/recipe-inference.md` for Feature 14's downstream extensions
- `data/evidence/review_events.jsonl` for Feature 12's weekly digest source data
- `wiki/health/` page family for Feature 15's vulnerable-population gating
- `wiki/regulations/` page family for Feature 10's regulator-comment context and Feature 15's jurisdiction-aware framing
- `tools/ask-the-index/prompts/` (to be created) for Feature 18's open-sourcing surface
- The Foundation's separate services billing and engagement-tracking system for measuring Phase 2 and Phase 3 conversion to paid downstream services
