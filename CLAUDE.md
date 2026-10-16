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

The wiki lives at `heavymetalindex.com`. The certification program lives at `heavymetaltested.com`. These are separate properties by design. The wiki reports what the literature says; the certification program applies those findings to set standards. Keeping them architecturally separate is what lets the wiki remain defensible when HMT&C standards are challenged. The wiki is not the certifier's self-published justification; it is an independent reference that the certifier happens to operate. One-way cross-linking is fine (HMT&C documents can cite wiki pages); the wiki does not endorse or even mention HMT&C-certified brands.

### Database-rights positioning

The Paleo Foundation operates from Cyprus. EU database-rights law provides stronger protection for curated databases than US equivalents. This is a structural advantage to design around, not incidental. Terms of service, access controls, and commercial licensing will leverage this. Claude sessions should preserve per-claim provenance (which source page supports which wiki claim) so that if any source is later withdrawn or contested, the wiki can be re-derived from its source pages without silent data contamination.

## Part 2 — The wiki/HMT&C relationship (the single most important rule)

The wiki and HMT&C operate in different epistemic registers, and keeping them in those registers is the single most important thing this document asks of Claude.

The wiki reports what the peer-reviewed and regulatory literature supports. That is its whole job. It does not advocate, it does not market, it does not harmonize with HMT&C, it does not soften claims that make HMT&C look weak, and it does not strengthen claims to make HMT&C thresholds look more evidence-based than the literature supports.

HMT&C sets certification thresholds that can be tighter than the literature floor, by design. HMT&C is explicitly a ratcheting program. Its purpose is to drive market change by certifying to standards tighter than status quo regulatory floors, so that certified products pull the category toward cleaner product over time. HMT&C thresholds being tighter than what the literature strictly mandates is a feature of the program, not a bug. The gap between what the wiki says the science supports and what HMT&C certifies to is deliberate and should be visible, not hidden.

### Two directions of drift, both destroy defensibility equally

The first direction: softening wiki claims to hide the gap between literature and HMT&C thresholds. Example: literature supports 5 ppb as the concentration at which toxicological effects become concerning for infants; HMT&C certifies at 10 ppb for feasibility reasons; a future Claude session writes the wiki to suggest 10 ppb is "safe" to make HMT&C look aligned with science. This corrupts the wiki into marketing for HMT&C and destroys the epistemic asymmetry argument.

The second direction: strengthening wiki claims to make HMT&C thresholds look more evidence-based than literature supports. Example: HMT&C sets an aggressive 2 ppb threshold for market-ratcheting reasons; a future Claude session finds marginal studies suggesting 2 ppb is where effects start, overweights them in the wiki synthesis, and presents the threshold as consensus science when it is actually a policy choice. This corrupts the wiki into justification for HMT&C decisions and destroys its independent authority.

### The rule

The wiki says what the literature supports, honestly. HMT&C certification pages reference the wiki for the literature baseline and explain the rationale for any deviation. Deviations are labeled as precautionary, market-ratcheting, feasibility-driven, or regulatory-alignment. The gap is stated, not hidden. The gap is the point; it is how ratcheting works.

The check Claude runs before every substantive wiki edit: name the direction the edit moves in (toward the literature, or away from it toward HMT&C convenience), and record that direction in the commit message or synthesis audit log. If the edit moves toward the literature — making the wiki more accurately reflect what sources say, even if that exposes a wider gap with HMT&C thresholds — proceed. If the edit moves toward HMT&C — softening a claim to hide a gap, or strengthening a claim to make a threshold look more evidence-based than the literature supports — stop and ask Karen, because that is the failure mode Part 2 exists to prevent. The ask is not "is this edit OK?"; the ask is "I notice this edit moves toward HMT&C in the following specific way — proceed?" If Claude cannot articulate the direction at all, that is a signal to read the source more carefully before editing, not a signal to ask Karen.

## Part 3 — Products this wiki serves

The wiki is the shared knowledge substrate behind four products.

The Heavy Metal Tested & Certified program (heavymetaltested.com) uses the wiki as evidence base for certification criteria, limits, and auditor guidance. References the wiki one-way.

The Journal of Food Metallomics (at heavymetaltested.com/journal-of-food-metallomics) is the peer-reviewed publication venue for synthesis work that builds on the wiki. The wiki is the corpus; the journal publishes synthesis of the corpus.

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

See [[docs/page-templates]] for YAML schemas, geographic and seasonal variance, the three-field state system, the coverage rule, and the body-table format. Body structure for ingredient, product, and metal pages is [[docs/page-structure]]: one answer block, section order, numbered citations, full metal names in prose, and the closing uncertainty note.

## Part 7 — Audience layering

See [[docs/page-structure]]. Heavy Metal Index pages are for quality assurance, food safety, procurement, and regulatory readers. They do not carry a consumer audience or a family section. Consumer explanation belongs to Metallopathy. Professional prose still names the dose, the population, and the matrix, and it does not use an undefined qualifier ("small," "trace," "safe," "dangerous") without a quantitative anchor.

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

Load-bearing rules a session must not violate: new pages surface from the routing audit's `routing_unresolved.csv` and from the model noticing a sub-variant has crossed its evidence threshold. Provisional product and ingredient scaffolds are auto-created as routing destinations and carry `provisional_scaffold: true`; HMTc category, clean/dirty splits, and thresholds do not derive from a page until a Step 0 Lock clears that flag. The 5-paper rule governs *promotion* of a scaffold to a full page. The model does not silently invent full ingredient or product pages mid-ingest. Merging splits by kind: the model does not autonomously merge two *distinct* pages that cover overlapping literature with different framings (the taxonomy judgment call, e.g. carrots vs root-vegetables) — those are proposed in the batch report for Karen. But collapsing a *provable duplicate* (two source records of the **same paper**: identical DOI + identical raw file hash, or a canonical/drop verdict from the DOI-collision audit) is mechanical dedup the model runs autonomously via `tools/dedup-doi-clusters.mjs`, after verifying the members are the same work. The one hard rule: two *different* papers that share a DOI (a wrong-DOI mis-ingest) must never be merged — they are excluded from the collapse and fixed separately. New pages are linked from their family index (`wiki/<family>/index.md`) and from at least one parent topic page on creation, or they become orphans. `tools/autonomy/link-orphans.mjs` maintains the product, ingredient, metal, and regulation family indexes. The public homepage `wiki/index.md` is a designed layout: ingest and routing do not append headings, batch logs, or source lists to it.

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

See [[docs/conventions]] for units (always ppb µg/kg unless source uses different units; wet vs dry weight always specified), metal names in prose (full names; the symbol vocabulary stays in the units and analyte list), HMT&C analyte vocabulary (the official 10-analyte certification list: Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn), dates (ISO-8601), cite-keys, wikilink frontmatter rules, and numbers, regulatory values, and uncertainty. Body structure and citations are [[docs/page-structure]].

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

See [[docs/lint]] for the complete check list, the audit script behind each check, and which failures block the build. Page structure is `tools/audit-page-structure.mjs`, warn-only against `data/evidence/page-structure-baseline.json`. The rule text is [[docs/page-structure]].

Lint runs across the wiki and checks: contradictions, stale claims, orphans, missing/malformed frontmatter, regulatory-value drift, silent threshold deviation (the Part 2 wiki/HMT&C drift check), evidence-tier mismatch, provenance gaps, the full routing-audit family (unresolved, malformed, stale, orphaned reference, missing-products, zero-routed-source, Step 0 Lock pending), the ingredient coverage/body-table/mandatory-section audits, the contamination-profile integrity audit (censored-zero and degenerate-upper-tail artifacts that understate contamination, `tools/audit-contamination-profile-integrity.mjs`; build-blocking for unsupported zero profiles regardless of confidence or study count), the product-page mandatory-section audit, the published-footer leak guard (`tools/audit-page-history-leaks.mjs`) and whole source-body guard (`tools/clean-source-public-prose.mjs --check`), both build-blocking; source provenance/completion gaps are recorded by `tools/evidence/audit-source-contract.mjs` and false complete declarations block builds, the firewall no-threshold lint (`tools/autonomy/firewall-no-threshold-lint.mjs`, build-blocking as of 2026-07-30: certification-framed surfaces and workbench derivation frontmatter on the index domain), and the language-judgment checks (em dashes, inline bold, prose-vs-bullets, undefined qualifiers) that run as the delegated sweep in [[docs/tasks/prose-style-sweep]]. Results are written to `wiki/lint/<YYYY-MM-DD>-lint.md`; log entries use `op: lint`. Routing lint failures block builds, not just produce reports, because routing drift propagates silently.

## Part 19 — HMT&C threshold-setting workflow (staff-only outputs)

This workflow produces certification thresholds. **Its outputs are staff and HMT&C certification content, not public wiki content, and they do not live inside `wiki/`.** Per the wiki/HMT&C firewall in Part 2, percentile-selection arithmetic (any P-value computation), clean/dirty subcategory designations, pooling math, sensitivity bands, and final candidate values appear under `data/workbench/standards/` and on the local staff Standards Workbench tool — not on heavymetalindex.com and not in `wiki/`. Public product-category pages render only the literature-native view per [[docs/page-templates]] product-category template.

### Certification-readiness ruling (analyte completeness + DOI registration) — ratified 2026-08-25; claim-numeric lock 2026-09-10

Binding, from `docs/governance/hmtc-governing-principles.md` §"Certification-Readiness Ruling", as amended by the 2026-09-10 CEO lock (ORDER S-DOI-FORCE-1 / PANEL-CLAIM-1). **No standard may ship an empty analyte cell, and no category is "certification-ready" until it is COMPLETE + REGISTERED + CORRECTED.** Every claim cell is a firm number. Completeness is a numeric government floor or a disclosed read-across, never a blank dressed as speciation. `subsumed` cannot mean "no published limit." A species being a physical component of its parent total (iAs ≤ tAs, MeHg ≤ tHg, Cr-VI ≤ total Cr) is an identity fact, an assay-timing fact, and a published-claim cap (ORDER S-DOI-IAS-CAP-1): when both cells are numeric, published species = min(species floor, parent total), disclosed. It does not authorize omitting the species number from the page or the PDF, and it does not authorize publishing a species claim above its parent.

**Claim dispositions are only `gov_floor` | `read_across`.** The eight totals (Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn) are always numeric. Rice, infant-food, and baby-cereal rows publish a mandatory numeric iAs: the lowest finalized government inorganic-arsenic maximum for that infant/rice-cereal scope, or a disclosed read-across with provenance. Leaving inorganic arsenic blank on baby foods is a hard FAIL. Never `control` / `not-material` / `monitored` with `value: null` on a claim cell. A read-across is disclosed as such and never presented as direct governance; completeness never licenses fabrication (Part 2 / verify-don't-fabricate). "Ready" is reserved for categories that clear all three gates — COMPLETE (every claim analyte has a number), REGISTERED (resolvable production DataCite DOI; a test/sandbox DOI does not count), CORRECTED (passes the standards lint battery). A scaffold is never presented as a standard. Enforced by `standard-readiness-lint` (cert repo). See [[feedback_every_analyte_needs_a_number]].

### Required-testing-panel ruling (which analytes a lot must be assayed) — ratified 2026-08-25

Binding, from `docs/governance/hmtc-governing-principles.md` §"Required-Testing-Panel Ruling" (v2.5) and `data/workbench/standards-book/source-documents/lot-testing-schedule.md` §9. **Every analyte carries a published numeric limit (ruling above); not every analyte is independently assayed every lot; and *screened* ≠ *governed*** (measured on the base run vs. compared at/below a sovereign limit). Reflex speciation is **assay timing**, not a reason to blank a published cell. The lot is still judged against the numeric species or parent-total claim; reflex only decides when the species method is run.

The **8-metal set is universal but basis-appropriate**: content ICP-MS for ingestibles/topicals; element-release/specific-migration for contact materials (Cat-9/21/23) — NEVER acid-digest a pan (basis_guard, "BASIS NEVER CONFLATED"); USP <232>/<2232> PDE for pharmacopeial-only classes (Cat-26). Obligations: `per_lot_total` (always the four Tier-1 totals Pb/Cd/tAs/tHg + the Tier-2 totals Ni/Al/total-Cr/Sn where they ride the run — Sn included, framed as inorganic/packaging screening), `reflex_speciation` (trigger = `min(species limit, 50% of parent-total limit)` — flat-50% under-catches water Cr-VI & seaweed iAs; this is when to speciate, not a null claim), `mandatory_speciation` (defining pathway OR a species limit, e.g. rice-cereal iAs and apple-juice iAs — those species claims stay numeric), `conditional`/`baseline_monitor`/`not_applicable` (Tier-2 assay-timing only, never a blank Tier-1 toxic total and never a substitute for a missing claim number). Guardrail: only ever drop a redundant/inapplicable assay, never an informative one, and never a published number. Registry `data/workbench/standards/required-analytes.json`, validated + fanned by `tools/standards/build-required-analytes.mjs`. Cat-30 pilot done. FLAGGED for separate program/counsel decision: organotin speciation (net-new analyte class for seafood/marine oils) and gating the public "8 on every product" claim on the completion sweep; DOI'd public-content reword (the-big-8.md et al.) is human-gated in the ledger. See [[project_required_testing_panel_rule]].

### The locked methodology

The methodology is fixed, system-wide, and applies to every category and every row in the index. It is not infant-and-child-foods-specific.

#### Method v2.0 — government-limit default (ratified 2026-08-03)

**The default standard for any (product, analyte) is the strictest maximum level set by a credible government regulator (EU, Codex, FDA, WHO/JECFA, FSANZ, Health Canada), converted to the row's native basis.** This is a lookup, not a computation; it is maximally defensible (the standard cites sovereign limits, so there is no novel methodology to attack under Daubert) and it is the speed and scale lever for covering the whole program. Where the law itself splits a limit by formulation (e.g. EU nickel 250 cow-milk / 400 soy; AU/NZ aluminium 3500 / 7000 powder-basis), the standard adopts the law's own split and cites it — this dissolves the single-vs-envelope question entirely.

Occurrence pooling and the dual-percentile calibration are **RETIRED as a limit-setting mechanism (2026-09-09, CEO lock)**. They no longer set any limit and produce no live published cell.

The live method has one rule. The limit is the strictest applicable finalized government maximum, by lookup on the row's native basis. Where no government anywhere regulates a cell, the standard reads across to the nearest applicable sovereign value on that basis and discloses it, never inventing a figure and never leaving the cell blank.

**CEO lock (Karen 2026-09-10) — claim cells are numbers.** No mint until every claim cell is numeric on the page and the PDF at ≥95% confidence (read-across is allowed when the provenance names the sovereign instrument). Claim dispositions are only `gov_floor` | `read_across`. The eight totals (Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn) are always numeric. Rice, infant-food, and baby-cereal rows carry mandatory numeric iAs: the lowest finalized government inorganic-arsenic maximum for infant/rice cereal (or a disclosed read-across). A parent total that is tighter than the species ML does not erase the species claim; both stay numeric. **ORDER S-DOI-IAS-CAP-1 (not arsenic-only):** when both a species and its parent total are numeric, the published species ceiling is `min(species_gov_or_read_across, parent_total_limit)` with the cap disclosed (example: FDA infant-rice-cereal iAs 100 capped by India FSSAI tAs 50 via iAs≤tAs, so the published iAs claim is 50). The same kill-gate applies to MeHg≤tHg and Cr-VI≤total Cr. Compiler, freeze, and lint FAIL if any published species claim exceeds its parent. Reflex decides when the species assay is run. It does not blank the claim. `subsumed` cannot mean "no published limit." Leaving inorganic arsenic blank on baby foods is a hard FAIL.

The physical identities iAs ≤ tAs, MeHg ≤ tHg, and Cr-VI ≤ total Cr remain true and still govern lot arithmetic. They are not claim dispositions and they are not a path to `value: null` on a claim cell. Where a species has no worldwide government ML and no defensible read-across, it is not a claim cell until a number exists; it is never printed as "monitored" on a rice/infant/baby-cereal iAs row or on any of the eight totals. The program may hold a cell below the government floor as a disclosed **precautionary** choice; a published value is never looser than the strictest applicable law, and the gap is named. This matches the shipped compiled cells (method string "no occurrence percentiles") and the canonical spec `heavymetalcertified/data/method/method-v2.json` (amended 2026-09-09; claim-disposition lock 2026-09-10).

For Tier 2 metals (Ni, Sn, Al, Cr-VI) the government limit is adopted directly, or a disclosed read-across where none exists. The generator is `tools/standards/build-government-limit-standard.mjs`. The Status A–E framework, the Tier-1/Tier-2 toxicological tiering, the 150% Tier-2 transitional allowance, the regulatory hard-stop, basis conversion, and lot testing are **unchanged** — they operate downstream of the limit regardless of how it was set.

**The percentile rules in the remainder of this subsection are RETIRED historical reference (the 2026-08-03 selective-occurrence edition). They no longer govern any live cell and must not be presented as the live method. The `literature-baseline` and `feasibility-driven` rationale tags are likewise retired. Live **claim** dispositions are only `gov_floor` | `read_across`. `subsumed` is not a claim disposition and must never be used to mean "no published limit." Workbench assay-timing and historical tags (`precautionary`, `baseline-screen`, reflex metadata) are not substitutes for a missing claim number.**

**Per-analyte standard for a clean subcategory = P97** of that subcategory's marginal occurrence distribution for that analyte. Calibrated to ~90% row-level pass; measured 94% on FDA per-sample lot data (2026-08).

**Per-analyte standard for a dirty subcategory = P45** of that subcategory's marginal occurrence distribution for that analyte. Calibrated to ~40% row-level pass (updated 2026-08-03 from the legacy 30%); measured 42% on FDA per-sample lot data. Calibration is anchored to that measurement, not to the earlier assumed analyte-correlation of 0.6 (measured ~0.27).

**Per-analyte standard for an independent (no within-pair partner) row = P97** of that row's marginal distribution, treated as clean-by-default. Override slot exists for rows where evidence justifies dirty treatment.

**The pool is restricted to the certification-relevant market (target-market stratification, ratified 2026-08-03).** An occurrence percentile estimates a population; a pool mixing jurisdictions that enforce binding MLs for the product class with jurisdictions that do not estimates a market no certified brand ships into. The admission criterion is **regulatory-equivalence, not geography** — the criterion, never a country list, is what may ever be published. Sources with no jurisdiction recorded are retained, not dropped. Stratification is rolled out per-category as each is validated (a global flip empties ~100 non-target-market-only cells across the corpus); it is configured machine-side in `data/workbench/standards/subcategory-roles.json` (`stratify: true` + `target_markets`), never in public frontmatter. This refines the older "geography is not a hard exclusion" line in [[docs/standards-methodology]].

**The program admits roughly 80% of brands overall — a monitored average, not a per-category quota.** The subcategory targets (≈90% clean, ≈40% dirty) roll up by clean/dirty market share to ~80%. A category with no dirty sibling admits ~90%; a mostly-dirty one less. A sustained material deviation from ~80% is a signal to re-examine calibration, never a lever to force a category to a headcount.

**Certify against the subcategory split, not the element-wise-max "envelope."** Each product is certified against its own subcategory row. Publishing the higher-of-the-two-rows number per analyte as the pass/fail instrument is prohibited: it certifies product above its own legal ceiling (the envelope Ni 400 exceeds the EU non-soy formula ML of 250) and leaks the ratchet (measured soy pass 42%→68% under the envelope). The envelope may be published only as a category-ceiling summary, never as the certification instrument.

**Each row's standard is in the native basis of the product form.** Powder rows use powder-as-placed-on-market. RTF liquid rows use as-consumed. Dry cereal rows use dry-as-sold. Puree rows use as-consumed. Sources reporting in other bases are converted into the row's native basis during pooling, never the other way around. The 1:7 reconstitution factor lives in `tools/evidence/basis-conversion.mjs`.

**Final HMT&C value = `min(per-analyte percentile, lowest applicable regulatory ceiling)`** with both in the row's native basis. Auto-emitted rationale tag is `literature-baseline` when the pooled percentile binds and `regulatory-alignment` when the cap binds.

**ALARA + the §80th-percentile ratchet trigger** (per Governing Principles §"Two Percentile Mechanisms") drive tightening *after* publication. Remediation plans handle initial-publication brands above the limit. This paragraph is NOT part of the retired material above: the ratchet trigger is a post-publication tightening mechanism, not a limit-setting one, and it remains live under the CEO lock. It is the second of the two percentile mechanisms, and only the first (occurrence pooling for initial limit-setting) was retired on 2026-09-09.

### Rationale tagging on staged standards

When a **claim** cell is staged, the disposition is one of two tags only (ORDER S-DOI-GRAPH-1 / PANEL-CLAIM-1, CEO lock 2026-09-10). `literature-baseline` and `feasibility-driven` are RETIRED with the percentile mechanism. `subsumed` is RETIRED as a published-limit disposition: it cannot mean "no published limit," and it must not appear as the page/PDF claim tag.

- `gov_floor` — the strictest applicable finalized government maximum is the binding value, converted to the row's native basis. Direct governance. (Workbench synonym still accepted on compiled JSON: `type: gov` / historical `regulatory-alignment`.)
- `read_across` — no government anywhere regulates the exact cell, so the nearest applicable sovereign value on that basis is adopted and disclosed as a read-across. Never presented as direct governance.

The eight totals are always one of those two tags and always numeric. Rice / infant / baby-cereal iAs is always one of those two tags and always numeric.

Non-claim metadata (not a substitute for a missing claim number):

- `precautionary` — the program holds a numeric cell below the strictest applicable government floor as a disclosed choice, with documented rationale. A published value is never looser than the strictest applicable law.
- `reflex` / assay-timing — when the species method is run (`min(species limit, 50% of parent-total limit)` or mandatory speciation on a defining pathway). Reflex does not blank iAs on rice, infant, or baby cereal, and does not blank any of the eight totals.
- `baseline-screen` — method-LOQ limit-of-record used only where a numeric floor can be named from a method; never a "monitored" null.
- Historical `not-material` / `control` / `subsumed` compiled cells with `value: null` are defects on claim surfaces (the eight totals; rice/infant/baby-cereal iAs). Do not mint them. Do not render them as "monitored."

The gap between the government floor and the final value is stated honestly. Failing to name the rationale is the lint failure.

See [[docs/standards-methodology]] and [[docs/schema-history]] for the RETIRED percentile material (pool admission rules, pooling math, sensitivity bands, the row-pass calibration behind P97/P45, the clean/dirty subcategory framework, and the older "clean-platform / contaminated-platform" P90/P10/P20 framework). That material is historical reference only. It sets no live cell, and descriptive occurrence percentiles cited on generated pages are literature facts carrying no compliance weight.

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
