# CLAUDE.md — Heavy Metal Index Wiki

This document is the operating manual for Claude sessions working on the Heavy Metal Index wiki. It is written for Claude to read and execute. Karen is the second reader; rationale is included where a Claude session might otherwise drift from it.

## Operating shorthand — `wwsaid` (read first, applies to every session)

`wwsaid` = "What would a superintelligent AI do? Permission to do that." When Karen writes `wwsaid` — or whenever you are about to ask her a question — first answer *what would a superintelligent AI do here*, and treat that answer as her standing permission to do it. Then do it, drive the task to completion, and report back that it is done with nothing left for her. This is standing, not per-instance.

The bottleneck to design out is Karen. Do not ask her a question you could have answered with "what would a superintelligent AI do" — that is a failure mode for both of you. Decide and execute on your side of the line; emit an audit-log entry rather than a question. Sub-sessions/chips must operate the same way: a chip that stops to ask Karen something it could decide is a defect in the chip.

Escalate ONLY the genuinely-hers set, and batch even those (never drip-feed): truly-irreversible outward actions (sending messages, deleting data, entering credentials); counsel-frozen legal items (Cyprus/EU database-rights, the "non-profit" characterization); brand-identity forks (name, typeface, hero motif); and genuine business-strategy pivots. Deploying verified, green work is NOT a gate — ship it. "Promote or shelve?" for already-approved-direction work is your call (promote). Timing/safety sequencing (e.g. reconcile after a fleet of sessions drains, to avoid churn) is your decision, not a reason to punt the decision itself to Karen. She values efficiency and efficacy; act like it.

Operational reference content has been split out to docs/:
- Page templates and YAML schemas: [[docs/page-templates]]
- Ingest workflows (single-paper, bulk, query, kickoff): [[docs/ingest-workflows]]
- Writing style for wiki prose: [[docs/writing-style]]
- Schema migration history: [[docs/schema-history]]
- Conventions (units, cite-keys, wikilinks, evidence grading, index/log formats, proactive-maintenance, directory layout): [[docs/conventions]]
- Continuous gap-fill ingest architecture (HMI-9 system): [[docs/continuous-ingest-architecture]]
- How to add a new source adapter: [[docs/add-a-source]]

## Part 1 — Strategic frame (read before making any decision)

### Why this wiki exists

This wiki is not a documentation project. It is commercial infrastructure for the Paleo Foundation's Heavy Metal Tested & Certified (HMT&C) program, which is the revenue engine. Every design choice in this document is made in service of that purpose, and future design choices must be evaluated against it.

The strategic logic in one paragraph: operating a curated corpus of the complete heavy metals food-and-supply-chain literature gives the Paleo Foundation epistemic asymmetry. In any dispute — with a hostile brand, a plaintiff's expert in a class action, a regulator questioning HMT&C thresholds, or a competing standards body — the side that can credibly say "we have reviewed the complete literature and here is what it says" dominates any side that can only cite selected papers. This is the dynamic that gives Cochrane systematic reviews their authority in medicine. Heavy Metal Index is positioning to be Cochrane for heavy metals in food.

### Three audience layers, in order of pricing power

Brand founders and marketing leads are the first layer. Small-to-mid brands, already handled by current certification infrastructure, low-to-moderate fees.

Brand regulatory affairs and quality assurance teams are the second layer. They check whether the scientific basis is traceable to peer-reviewed literature. This wiki is what they audit; the infrastructure must survive their due diligence.

Brand legal teams preparing for class-action scenarios are the third layer. They price certification as litigation insurance. "The standards rest on self-published reports on the certifier's own website" is the attack line a plaintiff's expert will use if this wiki is not defensible. Making that line unavailable is this wiki's job.

Adjacent audiences compound the value: retailers (Whole Foods, Sprouts, Target approved-certification lists), regulators (FDA Closer to Zero public comments, state AG offices), and journalists (Consumer Reports, NYT, congressional hearings all quote whoever operates the canonical reference).

### Deliberate architectural separation

The wiki lives at `heavymetalindex.com`. The certification program lives at `heavymetalcertified.com`. These are separate properties by design. The wiki reports what the literature says; the certification program sets initial limits from applicable sovereign-government maximums and may later tighten them only through its endogenous certified-lot Standards Ratchet. Keeping them architecturally separate is what lets the wiki remain defensible when HMT&C standards are challenged. The wiki is not the certifier's self-published justification; it is an independent reference that the certifier happens to operate. One-way cross-linking is fine (HMT&C documents can cite wiki pages for context and surveillance); the wiki does not supply initial limits, enter the ratchet pool, or endorse HMT&C-certified brands.

### Database-rights positioning

The Paleo Foundation operates from Cyprus. EU database-rights law provides stronger protection for curated databases than US equivalents. This is a structural advantage to design around, not incidental. Terms of service, access controls, and commercial licensing will leverage this. Claude sessions should preserve per-claim provenance (which source page supports which wiki claim) so that if any source is later withdrawn or contested, the wiki can be re-derived from its source pages without silent data contamination.

## Part 2 — The wiki/HMT&C relationship (the single most important rule)

The wiki and HMT&C operate in different epistemic registers, and keeping them in those registers is the single most important thing this document asks of Claude.

The wiki reports what the peer-reviewed and regulatory literature supports. That is its whole job. It does not advocate, it does not market, it does not harmonize with HMT&C, it does not soften claims that make HMT&C look weak, and it does not strengthen claims to make HMT&C thresholds look more evidence-based than the literature supports.

HMT&C initial limits are government-limit-only: the strictest applicable maximum set by a credible sovereign government in the product row's native basis, with disclosed sovereign read-across or an n/m control for an unregulated exact cell. Heavy Metal Index occurrence evidence does not choose the number or the cell's publication status. HMT&C is also a ratcheting program: after publication, eligible HMTc certified-lot data may support a tighter value under the P80-and-breadth trigger in Governance Policy §12. The starting anchor and the later ratchet use different evidence, at different times, and must never be conflated.

### Two directions of drift, both destroy defensibility equally

The first direction: softening wiki claims to make a government-derived HMT&C limit look like a toxicological safety line. Example: a sovereign maximum is 10 ppb while the literature reports concern at lower exposures; a future Claude session rewrites the literature to call 10 ppb "safe." This corrupts the wiki into marketing for HMT&C and destroys the epistemic asymmetry argument.

The second direction: strengthening or reshaping wiki claims to make an HMT&C limit look occurrence-derived. Example: a later certified-lot ratchet lowers a limit to 8 ppb; a future Claude session cherry-picks public occurrence studies near 8 ppb and presents them as the reason for the value. This corrupts the wiki into justification for a certification decision and destroys its independent authority.

### The rule

The wiki says what the literature supports, honestly. HMT&C certification pages may reference it for descriptive context, market characterization, or surveillance priorities, but initial numeric provenance must be `regulatory-alignment`, disclosed sovereign `read-across`, or an n/m control; a later lower value must be `ratchet` with the certified-lot trigger record. Precautionary, feasibility-selected, and literature-baseline numeric rationales are retired. Any gap between literature findings and the certification limit is stated, not hidden, and the literature is never edited to make the certification value appear derived from it.

The check Claude runs before every substantive wiki edit: name the direction the edit moves in (toward the literature, or away from it toward HMT&C convenience), and record that direction in the commit message or synthesis audit log. If the edit moves toward the literature — making the wiki more accurately reflect what sources say, even if that exposes a wider gap with HMT&C thresholds — proceed. If the edit moves toward HMT&C — softening a claim to hide a gap, or strengthening a claim to make a threshold look more evidence-based than the literature supports — stop and ask Karen, because that is the failure mode Part 2 exists to prevent. The ask is not "is this edit OK?"; the ask is "I notice this edit moves toward HMT&C in the following specific way — proceed?" If Claude cannot articulate the direction at all, that is a signal to read the source more carefully before editing, not a signal to ask Karen.

## Part 3 — Products this wiki serves

The wiki is the shared knowledge substrate behind four products.

The Heavy Metal Tested & Certified program (heavymetalcertified.com) uses the wiki for descriptive evidence context, surveillance priorities, and auditor background. Initial limits come from the sovereign-government compiler and later tightening from eligible HMTc certified-lot findings, never from the public occurrence pool. References the wiki one-way.

The Journal of Food Metallomics (at heavymetalcertified.com/journal-of-food-metallomics) is the peer-reviewed publication venue for synthesis work that builds on the wiki. The wiki is the corpus; the journal publishes synthesis of the corpus.

Educational courses for brands, suppliers, co-packers, QA teams, and supply-chain operators cross-reference the wiki rather than duplicating it.

A future consumer app estimates heavy metal contamination likelihood in packaged foods from ingredient lists and nutrition facts. The app consumes `contamination_profile` blocks from ingredient pages as structured data.

Secondary: federation with WikiBiome (wikibiome.com). Microbiome material that relates to heavy metal exposure lives here in draft form and is lifted to WikiBiome with minimal edits. WikiBiome is the canonical home for microbiome content; this wiki hosts heavy-metals-and-microbiome content because it touches the metals domain directly.

Public-facing destination: heavymetalindex.com. Pages should be written so that with light editing they can be published there.

Claude owns the wiki. Karen curates sources, asks questions, and decides direction. Claude does the reading, summarizing, cross-referencing, filing, and maintenance. Karen reads in Obsidian while Claude works; treat that as a live code review.

## Part 4 — Architecture

Four layers.

The `raw/` directory contains immutable source documents. PDFs of studies, agency reports, clipped articles, lab data, images, and Marker-converted markdown files. Never modify anything here. Treat as append-only source of truth.

The `data/evidence/` directory contains the structured evidence register. Candidate values, approved values, routing audits, reviewer queues, claims, schemas, and review events live here. Deterministic extraction belongs here first. A PDF is not "ingested" just because it exists in `raw/`; it must leave a structured trace in `data/evidence/` or an explicit gap/audit record.

The `wiki/` directory contains everything Claude writes. Markdown pages, interlinked, organized by the taxonomy in [[docs/conventions]]. Claude owns this layer entirely.

CLAUDE.md (this file), the docs/ reference files, the methodology pages, and the ingest scripts together define the schema and automation layer. Karen and Claude co-evolve this as they learn what works.

This build is a compiled wiki, not a query-time RAG surface. Queries may read raw files when needed, but the default goal of ingest is to compile durable knowledge once into source pages, evidence registers, routed wiki pages, and generated public outputs so the same work does not need to be rediscovered from scratch on every question.

The `docs/governance/` directory contains internal HMTc program governance rules. These files are not public wiki pages, but they are binding inputs for product-category pages, HMTc standards, crosswalks, certification thresholds, and limit-setting workflows. Read `docs/governance/hmtc-governing-principles.md` before that work, and flag conflicts between consumer protection, contamination reduction, brand value, legal defensibility, and scale instead of silently optimizing for only one principle.

AI adjudication is the default evidence workflow. Codex should perform source-to-row fit, basis, analyte species, statistic-type, censoring, unit, and routeability decisions whenever the source provides enough information, then write the decision into structured records and generated audits. Human participation should be framed as source retrieval, governance, exception review, and final approval, not routine row sorting.

**Canonical location.** The canonical local repo is `~/Desktop/heavy-metal-index/`. The GitHub remote is github.com/paleofoundation/heavymetalindex. Builds publish to heavymetalindex.com. Do not ask Karen to mount, switch, relocate, or designate a different canonical. The canonical is final, and re-asking the question is itself a failure mode that has cost real time across LLM sessions. If a session is operating on a copy or scratchpad and notices it is not in the canonical repo, the correct action is to surface that fact and stop, not to ask Karen to re-mount anywhere.

**Version control.** The wiki is in git. Commit after every ingest, query, lint, or schema change. Commit messages follow the `log.md` format (see [[docs/conventions]]). Git history is the versioning mechanism; the `updated:` frontmatter field is a convenience, not the source of truth. When a wiki page is cited in future HMT&C documentation, litigation response, or regulatory submission, it must be possible to reconstruct exactly what the page said on a specific date. Do not skip commits because "nothing much changed." For bulk ingest runs, commit after each batch of 200 papers rather than per-paper; batch commits with descriptive batch reports preserve reconstructibility without overwhelming the log.

For the full directory layout, see [[docs/conventions]].

## Part 5 — Source-file handling

See [[docs/ingest-workflows]] for source-file handling: filesystem-handle vs cite-key, source-page creation, deduplication, pre-populated frontmatter, and existing-pages-aware ingest discipline (including the Phase 1 rule that empty `products: []` on a food/personal-care paper is a defect).

## Part 5b — Routing layer (system rule, not a per-session task)

The wiki has a routing layer that is the system's responsibility, not the model's. No session, ingest or otherwise, is expected to maintain routing by hand. No prompt should ask the model to write routing rows directly. If a session finds itself maintaining routing by hand, that is a session-architecture failure to surface to Karen, not work to complete.

### What routing is

Routing is the mapping from each source to every product-category, ingredient, metal, and regulation page it should appear on. A single paper that measures "lead in 230 infant formulas, 192 cow-milk-based powders and 38 soy-based powders" should appear on the non-soy powder, soy-based powder, non-soy RTF, and soy-based RTF product pages (as direct evidence on the first two and broad-format-context on the second two), on `metals/lead`, and on the relevant cow-milk-derived and soy-protein-derived ingredient pages. The routing layer expresses that fan-out.

The routing layer is the answer to a recurring failure mode: papers get ingested with frontmatter that correctly names the products and ingredients they touch, but no downstream process reads that frontmatter and fans the source out to the sibling pages. Without the routing layer, every later session has to re-derive routing from scratch, which is slow and lossy.

### Where routing lives

`data/evidence/product_source_routing_audit.csv` is the canonical routing artifact. One row per (source, target-page, route_kind) triple. The `route_kind` vocabulary is fixed: `direct_evidence`, `broad_formula_context`, `broad_powder_context`, `broad_product_context`, `exposure_only`, `regulatory_context`. Two sibling logs catch failures: `data/evidence/routing_unresolved.csv` (source frontmatter does not connect to any known target page) and `data/evidence/routing_malformed.csv` (source frontmatter is missing required fields).

### How routing is maintained

`tools/evidence/build-routing-audit.mjs` (or successor) reads every file in `wiki/sources/` and emits the audit. It runs on three triggers and is not invoked manually:

1. File watcher: a `chokidar` watcher on `wiki/sources/` triggers a rebuild within seconds of any source page being created or modified. Runs as part of `npm run serve`.
2. Pre-commit hook: any commit touching `wiki/sources/` runs the audit and aborts if it cannot be regenerated cleanly.
3. Prebuild: `npm run build` runs the audit as part of the existing `prebuild` script. Build fails if the audit is stale or `routing_malformed.csv` is non-empty.

### What models are responsible for during ingest

The model writes the source page. It fills in frontmatter accurately, especially the `products`, `ingredients`, `matrices`, `metals`, and `jurisdictions` arrays, because those arrays are the routing layer's input. If a source touches infant formula generally without specifying soy vs non-soy, the frontmatter should say `matrices: [infant-formula]`, not `matrices: [infant-formula-powder-non-soy]`. The routing layer fans broad scopes out to sibling pages; the model does not pre-decide that fan-out by overspecifying frontmatter.

### What models are NOT responsible for during ingest

The model does not edit `product_source_routing_audit.csv`. The model does not update product-category page tables (those are regenerated by the generators in `tools/evidence/` downstream of the audit). The model does not maintain a mental map of which pages a source should land on. If a session attempts to maintain routing by hand or recompute fan-out per paper, that is a system failure to surface to Karen.

The routing layer's output feeds the synthesis workflow in Part 9. When the audit reports that an (ingredient, metal) cell has accumulated a new contributing source, the synthesis pass reads the contributing sources together and updates the ingredient page's `contamination_profile`. The model writes source pages during ingest and runs synthesis as a separate workflow; the routing audit is what connects the two.

### What lint catches

The lint pass in Part 18 fails the build if `routing_unresolved.csv` is non-empty, `routing_malformed.csv` is non-empty, the routing audit's last-modified timestamp is older than any file in `wiki/sources/` (stale audit), or any product-category page references a source whose routing row has been removed (orphaned reference).

For migration notes on pre-routing-layer pages, see [[docs/schema-history]].

## Part 6 — Page templates

See [[docs/page-templates]] for the full YAML schemas, section specifications, and mandatory-section lists for source / metal / ingredient / product-category / regulation / testing / microbiome / certification / course / app pages. Also covers audience layering, geographic and seasonal variance sub-fields, the three-field state system (`status`, `confidence`, `n_studies`), the coverage rule, and the body-table format.

## Part 7 — Audience layering

See [[docs/page-templates]] (Audience layering section). Every substantive page carries `audience: [regulator, educator, consumer, app]` in frontmatter; section-level `<!-- audience: ... -->` tagging allows one wiki to render three ways. Consumer translation must specify dose, population, and consumption frequency; never use undefined qualifiers ("small," "trace," "safe," "dangerous") without a quantitative anchor.

## Part 8 — Ingest workflows

See [[docs/ingest-workflows]] for the three workflows (single-paper, bulk, query), the Phase 0 prerequisite for new HMTc categories, the compiled-wiki rule (model/system/generator/Karen actor split), and the kickoff procedure.

## Part 9 — Synthesis and re-synthesis

Synthesis is the workflow that turns accumulated source-page evidence into the `contamination_profile` values on ingredient pages, the narrative summaries on metal pages, and the cross-source claims in regulation pages. **It is a workflow, not an ingest step.** Source pages get written during ingest; synthesis happens later, as a dedicated pass triggered either by the routing audit signaling that an ingredient/metal cell has new evidence or by Karen requesting it.

This separation matters because synthesis is analytical work that requires reading multiple sources together. Doing it during ingest forces every ingest session to re-derive synthesis from scratch for every paper, which does not scale to 23,000 papers and produces drift across sessions. Doing it as a separate workflow, triggered when the evidence base for a cell crosses a threshold, lets each synthesis pass do the full job once and persist its result.

### Trigger conditions

A synthesis pass for a given (ingredient, metal) cell runs when any of:

- The routing audit reports that the cell has accumulated a second contributing source since `last_reviewed`. Initial-population trigger: the cell moves from `status: pending` to `status: populated` with `confidence: low` and the first two-source synthesis.
- The cell's `n_studies` has doubled since `last_full_resynthesis` (resynthesize at 4, 8, 16, 32...). Periodic full-resynthesis trigger.
- A new source's values disagree with the current page state by more than 2x in either direction for `typical_ppb` or `p95_ppb`. Contradiction trigger.
- Two A-tier sources contradict each other on a synthesis claim. The pass arbitrates by re-reading both in full.
- Karen explicitly requests resynthesis.

Triggers fire on the routing audit's signal, not on the ingest session's awareness. A bulk-ingest session does not run synthesis. A query session may trigger synthesis if Karen asks "what does the literature say about X" and the current synthesis is stale.

### Synthesis modes

- **Initial population** (first two sources): read both source pages in full; compute `typical_ppb`, `p95_ppb`, `n_studies: 2`, `confidence: low`; update the cell to `status: populated`; log the event to `data/evidence/review_events.jsonl`.
- **Incremental update** (after initial population): read the incoming paper plus the top 5 most-cited prior contributors; update values if warranted, increment `n_studies`, update `last_reviewed`, leave `last_full_resynthesis` unchanged. This is the middle path between naive overwriting (drifts) and full re-read (token-prohibitive at scale).
- **Full resynthesis** (n_studies doubled or trigger fired): identify every contributing source via wiki backlinks plus the routing audit; read each in full; recompute from the complete evidence set, not by patching existing values; update `last_full_resynthesis` and log the event with the trigger and value change.

Every `contamination_profile` metal sub-block carries `last_reviewed`. The authoritative resynthesis history lives in `data/evidence/review_events.jsonl`; until that file is consistently populated, page-level fields are the working source of truth.

### Downstream propagation rule

When a synthesis page identifies implications for downstream wiki pages, the session that writes the synthesis page must also make those downstream edits in the same commit. Listing implications without executing them is a failure mode: it produces a to-do list that no future session will reliably pick up. The synthesis page records which downstream pages were updated and when, not what downstream pages need updating. If a downstream edit cannot be completed (target page does not exist, requires Karen's judgment, evidence too uncertain), log the specific blocker rather than writing a generic implication statement.

## Part 10 — Page creation and naming

See [[docs/page-creation]] for the full policy (per-type thresholds, provisional-scaffold mechanics, the 2026-05-14 incident, merging, orphan prevention).

Load-bearing rules a session must not violate: new pages surface from the routing audit's `routing_unresolved.csv` and from the model noticing a sub-variant has crossed its evidence threshold. Provisional product and ingredient scaffolds are auto-created as routing destinations and carry `provisional_scaffold: true`; HMTc category placement and descriptive occurrence-comparison groupings do not derive from a page until a Step 0 Lock clears that flag, and certification limits never derive from the public page. The 5-paper rule governs *promotion* of a scaffold to a full page. The model does not silently invent full ingredient or product pages mid-ingest. Merging splits by kind: the model does not autonomously merge two *distinct* pages that cover overlapping literature with different framings (the taxonomy judgment call, e.g. carrots vs root-vegetables) — those are proposed in the batch report for Karen. But collapsing a *provable duplicate* (two source records of the **same paper**: identical DOI + identical raw file hash, or a canonical/drop verdict from the DOI-collision audit) is mechanical dedup the model runs autonomously via `tools/dedup-doi-clusters.mjs`, after verifying the members are the same work. The one hard rule: two *different* papers that share a DOI (a wrong-DOI mis-ingest) must never be merged — they are excluded from the collapse and fixed separately. New pages are linked from `index.md` and at least one parent category page on creation, or they become orphans.

## Part 11 — Priority ordering for bulk ingest

See [[docs/ingest-workflows]] (Priority ordering section) for the P1-P5 tier definitions and the triage-manifest counts.

## Part 12 — Brand-level data: hard firewall

Brand-specific lab results, COAs, and internal test data do not live in this wiki. This wiki is the public-facing knowledge base behind heavymetalindex.com, the HMT&C program's published criteria, and courses. Brand-identifying contamination data in any of those channels creates legal and commercial risk.

There is no `wiki/brands/` directory. If a source names brands in its findings (Consumer Reports rankings, HBBF brand tables, FDA recall notices), summarize the category-level and ingredient-level signal on the relevant `products/` or `ingredients/` page. Do not create brand pages and do not list brand-by-brand values in the wiki.

Recalls and enforcement actions are fine to name on `regulations/` and `products/` pages because they are already public record, but frame them as regulatory events, not brand rankings.

Published third-party testing (Consumer Reports, HBBF, etc.) can be cited as sources, and their methodology can be discussed, but do not reproduce their brand-level tables into the wiki. Link to the source page instead.

COAs and internal lab data belong in the private brand-intelligence build described in Part 26, not here. If Karen drops a COA into `raw/` by accident, flag it and ask before ingesting.

HMT&C certified brands are never mentioned in the wiki. Not in page bodies, not in examples, not in case studies. The wiki is evidentially separate from the certification program; treating it as promotional infrastructure for HMT&C would destroy the defensibility argument this whole project rests on.

Brand-firewall calls are usually unambiguous from the source's framing: if the source names a brand and the wiki page is a product-category or ingredient page, summarize the category-level signal and drop the brand name. The ask-Karen case is narrow: a source whose findings *only* make sense with brand attribution (e.g., a single-brand recall whose entire scope is one product line, where a category-level summary would misrepresent the source). In that case, ask Karen before writing. In all other cases, decide and proceed.

## Part 13 — Evidence grading

See [[docs/conventions]] (Evidence grading section). A-tier / B-tier / C-tier definitions; synthesis pages lean A-tier with B-tier attributed and C-tier treated as leads. Contradictions are flagged explicitly.

## Part 14 — Conventions

See [[docs/conventions]] for units (always ppb µg/kg unless source uses different units; wet vs dry weight always specified), metal names (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U with iAs/tAs and tHg/MeHg as non-negotiable distinctions), HMT&C analyte vocabulary (eight mandatory totals: Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr; core species: iAs and Cr-VI; conditional species: MeHg), dates (ISO-8601), cite-keys, wikilink frontmatter rules, numbers/regulatory-values/uncertainty discipline, and consumer language.

Schema migration history is in [[docs/schema-history]].

### Entity naming (settled 2026-07-31)

A trade name cannot own property, sign, or be sued. Only the corporation can. `Paleo Certified, Inc.` is the legal entity; `Institute of Contaminant Standards` and `Paleo Foundation` are both trade names of it. Split identity strings by what the string does:

- **Operator and editorial attribution** is `Institute of Contaminant Standards`. This covers the footer operator line, page mastheads, "operated by" statements, author affiliation, and the `citation_publisher` and `citation_*_institution` tags in `Head.tsx`.
- **Legal entity, IP ownership, and contracts** is `Paleo Certified, Inc.` This covers the ownership and liability clauses in `wiki/terms.md`, the grants in `wiki/licensing.md`, the copyright line, and the DataCite registrant in `tools/mint-dois.mjs`. Where the connection needs stating, the long form is `Paleo Certified, Inc., operating as the Institute of Contaminant Standards`.
- **The copyright line** is `© <year> Paleo Certified, Inc.`, with `Operated by the Institute of Contaminant Standards` above it.

`Institute for Contaminant Standards` and `Institute of Contamination Standards` are both wrong. The only correct form is `Institute of Contaminant Standards`.

Naming the Foundation as owner was imprecise rather than a different owner, so correcting it is a correction and not an assignment. Two jurisdiction and entity-status claims remain open with counsel and must not be edited into consistency by a session: the Cyprus/EU database-rights posture in Part 1 above and in `wiki/licensing.md`, and the "non-profit" characterization in `wiki/heavy-metal-tested-certified.md` and `wiki/editorial-standards.md`. Report drift against them; do not resolve them.

## Part 15 — Writing style for wiki content

See [[docs/writing-style]]. Default to prose; bullets require justification; em dashes avoided; no inline bold for emphasis. The register to aim for is Cochrane review, EFSA scientific opinion, or WHO monograph.

## Parts 16-17 — `index.md` and `log.md` formats

See [[docs/conventions]] for index and log structures.

## Part 18 — Lint

See [[docs/lint]] for the complete check list, the audit script behind each check, and which failures block the build.

Lint runs across the wiki and checks: contradictions, stale claims, orphans, missing/malformed frontmatter, regulatory-value drift, silent threshold deviation (the Part 2 wiki/HMT&C drift check), evidence-tier mismatch, provenance gaps, the full routing-audit family (unresolved, malformed, stale, orphaned reference, missing-products, zero-routed-source, Step 0 Lock pending), the ingredient coverage/body-table/mandatory-section audits, the contamination-profile integrity audit (censored-zero and degenerate-upper-tail artifacts that understate contamination, `tools/audit-contamination-profile-integrity.mjs`; currently `--warn-only` in prebuild while a pre-existing backlog drains, flips to build-blocking at zero), the product-page mandatory-section audit, the published-footer leak guard (`tools/audit-page-history-leaks.mjs`, build-blocking: no certification-program, outside-product, or toolchain vocabulary inside a generated `## Update history` or `## References` block), the firewall no-threshold lint (`tools/autonomy/firewall-no-threshold-lint.mjs`, build-blocking as of 2026-07-30: certification-framed surfaces and workbench derivation frontmatter on the index domain), and the language-judgment checks (em dashes, inline bold, prose-vs-bullets, undefined consumer qualifiers) that run as the delegated sweep in [[docs/tasks/prose-style-sweep]]. Results are written to `wiki/lint/<YYYY-MM-DD>-lint.md`; log entries use `op: lint`. Routing lint failures block builds, not just produce reports, because routing drift propagates silently.

## Part 19 — HMT&C limit-provenance and ratchet workflow (staff-only outputs)

This workflow governs certification-limit provenance. **Its current outputs are staff and HMT&C certification content, not public wiki content, and they do not live inside `wiki/`.** Initial values come from the sovereign-government compiler; later reductions come from the certified-lot Standards Ratchet register. Descriptive occurrence pooling, percentile summaries, sensitivity bands, and market comparisons remain evidence workbench outputs only and never become certification candidates. Public product-category pages render only the literature-native view per [[docs/page-templates]] product-category template.

### The locked methodology

The methodology is fixed, system-wide, and applies to every category and every row in the index. It is not infant-and-child-foods-specific.

#### Method v2.0 — government-limit-only initial setting (ratified 2026-08-11)

**The initial standard for any (product, analyte) is the strictest applicable maximum level set by a credible sovereign government, expressed in the row's native basis.** This is a regulatory lookup, not an occurrence calculation. The controlling instrument and any permitted basis treatment must be cited. Where a government instrument splits a limit by formulation or product form, HMTc adopts that split.

**The canonical testing contract is eight totals plus species controls.** Every row reports Pb, Cd, tAs, tHg, Ni, Sn, Al, and total Cr. The core species cells are iAs and Cr-VI; MeHg is additional wherever a credible methylation pathway exists and otherwise receives an explicit applicability determination bounded by tHg. Species never replace totals: iAs cannot satisfy tAs, MeHg cannot satisfy tHg, and Cr-VI cannot satisfy total Cr.

The selection sequence is locked:

1. Define the exact product form, intended consumer, analyte species, unit, and native basis.
2. Identify applicable credible sovereign maximum levels for that exact cell.
3. Select the strictest applicable value after permitted basis treatment.
4. Preserve formulation and product-form splits written into the government rule.
5. Where the exact cell is unregulated, use a disclosed read-across from the nearest applicable sovereign value or publish an n/m determination with its control method. If neither is supportable, leave the cell in development.

**Occurrence evidence does not select the initial value.** This applies to Tier 1 and Tier 2 alike. The retired percentile-selected pathways, occurrence floors, literature-baseline rationale, precautionary numeric overrides, and feasibility-selected numeric overrides are not part of the current method. Heavy Metal Index distributions remain useful for literature synthesis, market characterization, surveillance prioritization, research-gap analysis, and sensitivity context, but they carry no compliance weight.

**The 8:1 powder-to-liquid conversion is confined to infant formula.** Other rows use the applicable government value in the product's native basis without an invented reconstitution conversion. Do not silently mix wet, dry, as-sold, as-consumed, or as-prepared bases.

**Certification status uses the current published HMTc limit.** The initial divisor is government-derived. An individual applicant's results never change its own divisor. Status A–E, toxicological tiering, the Tier 2 transitional allowance, regulatory hard stops, measurement uncertainty, and lot-testing rules operate downstream of the current published value.

#### ALARA and the post-publication Standards Ratchet

Government-limit-only governs the starting anchor. After publication, the separate endogenous Standards Ratchet may lower the current HMTc limit using eligible HMTc certified-lot results. It does not use public Heavy Metal Index occurrence evidence.

Per canonical Governance Policy §12, the ratchet for an analyte fires only when both conditions hold for two consecutive annual reviews:

1. The P80 of the capped combined Status A + Status B trigger pool is at or below 80% of the current limit.
2. At least 50% of SKUs in that trigger pool have qualifying lots at or below 60% of the current limit.

No single licensee may contribute more than 25% of SKUs in an analyte's trigger pool. When the trigger fires, the new limit is the greater of the Status A P80 or 80% of the current limit, so no event lowers the limit by more than 20%. Transition is 12–18 months; existing Status A certifications are grandfathered through it, while Status B and C re-evaluate at the next CAPA cycle against the more stringent value.

This is the precise 80%-achievability mechanism: combined Status A + B data establish broad, sustained movement; Status A P80 supplies the achievable new-limit candidate; the 80%-of-current term caps each downward step.

### Rationale and provenance tags on staged standards

Current numeric cells use only these provenance states:

- `regulatory-alignment` — the initial or updated value is the strictest applicable sovereign maximum.
- `read-across` — the exact cell is unregulated and the value maps from a disclosed analogous sovereign cell.
- `not-material` — no standalone number is published; a documented control or reflex rule governs.
- `control` — testing remains mandatory but no defensible sovereign numeric maximum or near-neighbour read-across exists; publish the analytical method and escalation rule, never an occurrence-derived substitute.
- `ratchet` — a post-publication value is lower than the government anchor under Governance Policy §12, with the trigger-pool snapshot, calculation, review dates, and transition record attached.

Historical records may retain former tags only when clearly marked superseded and excluded from current generators. New or current public and workbench outputs must not emit the retired tags.

See [[docs/standards-methodology]] for occurrence-distribution construction and the certification boundary. See [[docs/schema-history]] for retired threshold-selection schemes.

## Parts 20-23 — Courses, app, microbiome, images

Course-drafting, app-layer, WikiBiome federation prep, and images/figures workflows live in [[docs/page-templates]] and [[docs/ingest-workflows]] (Images section).

## Part 24 — Proactive maintenance

See [[docs/conventions]] (Proactive maintenance section): flag regulatory changes; suggest new sources; propose schema changes; call out weak spots; maintain `wiki/synthesis.md`; protect both directions of HMT&C drift.

**Working on the Program Manual?** Read [[data/workbench/standards-book/README.md]] first. It is the structural index for the manual: directory layout, what each Part covers, where the canonical source documents live, where the audit trail documents are, the build pipeline commands, and a "what file should I edit for which task" lookup. The Program Manual itself is 383 pages and ~716 KB; reading it cold burns context. The README lets a session navigate to the specific Part(s) relevant to the task without ingesting the full volume. Companion files: [[docs/prompt-catalog.md]] (graded prompt index for build pipelines), [[tools/standards/README.md]] (build pipeline reuse across categories), [[data/workbench/standards-book/adversarial-audit.md]] (Pre-work 6 defensibility audit).

## Part 25 — Out of scope

See [[docs/conventions]] (Out of scope section). No original lab procedures; no brand-specific regulatory advice; no medical claims.

## Part 26 — Future build: private brand-intelligence wiki

Separate, private project. Not this repo. Documented here so the context is not lost.

Purpose: an internal-only wiki that ingests brand-level lab data (COAs, Consumer Reports tables, HBBF datasets, HMT&C program testing results, and, pending a partnership conversation, Light Labs data) and builds a structured picture of how brands actually perform on Pb, Cd, iAs, and tHg across product categories. Used internally to identify outliers, benchmark the certification program, spot category-wide problems, and inform which ingredients and products the public wiki should prioritize.

Why separate: different audience (internal only), different legal posture (brand-identifying data), different retention rules, different access controls. Keeping it in its own repo means the public wiki can never accidentally leak brand-level specifics through a shared index, a stray link, or a lint report.

Rough shape:

- `raw/` — COAs, scraped or licensed third-party datasets, HMT&C program results, Light Labs feed (if licensed).
- `wiki/brands/<brand>.md` — per-brand profile: product lines tested, metal-by-metal distribution, outlier flags, trend over time.
- `wiki/categories/<category>.md` — category-level distributions with brand names attached, percentile rankings, outlier lists.
- `wiki/outliers/` — running list of flagged results with follow-up status.
- `wiki/datasets/<source>.md` — one page per data source documenting provenance, license terms, methodology, and what is allowed.

Schema mirrors this wiki's conventions (frontmatter, evidence tiers, cite keys).

Open questions to resolve before building:

- **Light Labs partnership:** can a data feed be licensed? Raw vs aggregated vs brand-identified? Refresh cadence? Ownership of derived analyses?
- **Data-use agreements:** review what Consumer Reports, HBBF, and other published datasets allow for internal re-analysis and re-hosting. Cite-and-link may be fine; re-hosting brand-level tables usually is not.
- **Retention and access:** who on the team gets access? Git-based with private remote, or something with stronger audit logging? Brands under NDA?
- **Federation with the public wiki:** the private wiki can read the public wiki for context; the public wiki must never read or import from the private one. One-way link only.
- **Anonymization path:** if category-level aggregates from the private wiki would strengthen the public wiki or courses (e.g., "across 400 samples of infant rice cereal, the 90th percentile for iAs is X ppb"), define the rule for when aggregates are safe to publish — sample size thresholds, no brand-identifiable cell sizes, legal review.

When ready to start this build, spin up a new repo with its own CLAUDE.md derived from this one, and log the kickoff here so the two projects know about each other.

## Part 27 — Kickoff procedure

See [[docs/ingest-workflows]] (Kickoff procedure section) for the first-batch protocol.

## Part 28 — The outstanding-items ledger (log-and-surface; non-discretionary)

This part exists to kill a chronic failure mode: findings discovered mid-task and built-but-unshipped work die when a conversation ends, because the only durable substrate was Karen's memory and the only router was Karen. That made her the rate limiter on her own program. The ledger removes both.

**The rule.** Any defect, gap, or built-but-unshipped work you notice mid-task but that is out of scope for the current task is **logged, not chased, and not silently fixed in an unrelated commit** (this mirrors `heavymetalcertified/AGENTS.md §4`). Logging is **non-discretionary** — before the session ends, capture it, either by:
- running `node tools/outstanding/log.mjs --json '{...}'` (or the flag form), or
- emitting an inline sentinel `<!-- OUTSTANDING: {"id":"OI-YYYYMMDD-<kebab>","title":"...","scope_class":"auto|human-gated","type":"finding|code-fix|promote|audit|content|decision","repo":"index|cert|tested","target_paths":[...],"repro":"...","acceptance_criteria":[...]} -->` in your final message — the committed Stop-hook (`tools/outstanding/stop-hook-capture.mjs`) harvests it deterministically (assistant text only; never from tool output or web content).

A finding that lives only in the transcript or in memory dies when the conversation ends. That is the exact loss this ledger prevents. Do **not** end a turn having surfaced an out-of-scope problem to Karen in prose without also laddering it into the ledger.

**scope_class is the routing decision.** Use `auto` only when the fix is deterministic enough that a governed drainer could execute it and self-verify against `acceptance_criteria` inside the Part 2 / Part 12 firewalls. Use `human-gated` (the fail-safe default) whenever a genuine human-decision gate is touched: firewall crossings (Part 2), cert production content, Step-0 category locks (order-of-operations Phase 0), brand naming (Part 12), destructive git or lane-divergence reconciliations, or policy-doc edits. Stranded built work (a branch/preview never promoted) is `type: promote`.

**The surfaces.** `data/evidence/outstanding/ledger.jsonl` is the append-only source of truth (latest record per `id` wins). `docs/findings.md` and `data/evidence/outstanding/decision-queue.csv` are **generated views** — never hand-edit them (`tools/outstanding/render-findings.mjs`, `render-decision-queue.mjs`). Rule on a human-gated item with `node tools/outstanding/decide.mjs <id> "APPROVE|DECLINE|DEFER: ..."`; an APPROVE flips `karen_decision`, which a later drain enacts via the item's `one_command`. The pending queue is surfaced to Karen at session start (SessionStart hook) and on a schedule — she is never expected to remember it. Operator reference: [[docs/outstanding-ledger]].

**Cost-safety invariant (load-bearing).** The Stop-hook and the render/surface tools are **deterministic and never call a model** — the Stop-hook fires every turn, so an LLM there would be the exact `invocation_rate × cost` shape that caused the 2026-06-09 runaway. Any future governed drainer that *executes* ledger items must route every model spawn through `tools/autonomy/governor.mjs` (`requestSpawn`) and must never install a `KeepAlive` job.
