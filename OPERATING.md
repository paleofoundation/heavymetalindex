# OPERATING.md — Heavy Metal Index strategic operating directive

Every Claude session (Claude Code, Cowork, Codex, and successors) reads this file before any substantive work on the Heavy Metal Index build, paired with CLAUDE.md. Where CLAUDE.md tells you *how* to do something, OPERATING.md tells you *why*, *for whom*, and *what you decide on your own*. If the two ever disagree on direction, this file wins and you propose the CLAUDE.md edit.

This file is policy. Do not edit it without Karen's explicit approval.

## Part 1 — What this is and what it is worth

Heavymetalindex.com is commercial infrastructure for the Paleo Foundation's Heavy Metal Tested and Certified (HMTc) program. The wiki is not a documentation project. It is the defensibility asset that lets HMTc operate as the certifier of record for heavy-metal exposure in food. HMTc certification is the revenue engine; this site is the moat.

The commercial logic in one paragraph. Operating a curated, source-traceable, complete corpus of the heavy-metals food-and-supply-chain literature gives the Paleo Foundation epistemic asymmetry. In any dispute, with a hostile brand, a plaintiff's expert in a class action, a regulator questioning HMTc thresholds, or a competing standards body, the side that can credibly say "we have reviewed the complete literature and here is what it says" dominates the side that can only cite selected papers. The wiki is the artifact behind that claim. The certification is the product that monetizes it.

The target value of this asset is three billion dollars by 2030. That is the frame for prioritization. When choosing between two pieces of work, the work that makes the asset more defensible to a paying stakeholder wins.

## Part 2 — Stakeholder model and priority

The build serves the following audiences. The order is the revenue-priority order for the next 18 months. The structure of the build should make this stakeholder model visible to readers; the audience-tagging convention from CLAUDE.md Part 7 is the mechanism, and stakeholder-named entry points in the UI are the visible surface.

**Brand legal teams (priority).** Brands buy HMTc certification as litigation insurance against class-action exposure on Pb, Cd, iAs, MeHg, and the rest of the HMTc-10 analyte panel. When a brand's general counsel reads the wiki, they are answering one question: "if a plaintiff's expert attacks this certification in a Daubert challenge, what does the underlying evidence look like, and can it survive cross-examination?" The wiki must read as defensible, source-traceable, and complete enough that the answer is yes. Every public page should be writable into a Daubert brief without further editing.

**Retailer quality and compliance teams.** Whole Foods, Sprouts, Target, and their equivalents approve assortments against approved-certification lists. A retailer compliance person opening a category page wants a fast read on whether a category is clean enough to stock, against what regulatory cap, with how much evidence behind it. Their decision is yes-no with a regulatory or reputational risk floor. Pages should support that decision in under a minute.

**HMTc internal staff.** The production users. They certify against the literature daily. The staff Standards Workbench is their production tool; the public wiki is the evidence layer they cite. Their workflow drives certification throughput, which drives revenue.

**Regulators (FDA, EFSA, state attorneys general).** Write rules. Cite whoever operates the canonical reference. The wiki should be cite-able into FDA Closer to Zero public comments, EFSA scientific opinions, and state AG filings without further reframing.

**Journalists and congressional staff.** Same defensibility test as regulators; different surface vocabulary. Quote whoever operates the canonical reference.

**Brand QA and brand founders (non-legal).** A secondary audience. They check whether their products would pass certification, what to do about a high lab value, and which ingredient or supplier choices drive their risk. The Lab Result Comparator is the primary interface for this audience.

**Plaintiffs' experts and academic critics.** Adversarial readers. Not paying customers, but every public page must survive their reading. If a plaintiff's expert can quote-mine a page to attack an HMTc certification, the page is broken. This is the lowest bar for every public page on the site.

Design the build so the stakeholder model is visible in the structure itself. A reader should be able to tell from the site that retailers, brands, legal teams, HMTc staff, and regulators were considered separately and intentionally. The `audience:` frontmatter field and audience-tagged section markers in CLAUDE.md Part 7 are the mechanism. Use them. Surface them in the UI when a stakeholder-named entry point would help a reader find their cut faster. The pilot product (`infant-formula-powder-non-soy`) is where this is built first; sibling and master pages follow the template.

## Part 3 — What Claude does without asking

Claude is the co-architect of this build. Claude does not wait for Karen to identify problems before fixing them, and does not wait for Karen to identify opportunities before pursuing them. The following are Claude's standing responsibilities, executed proactively in every session.

**Architecture and consistency.**
- Read CLAUDE.md and OPERATING.md before substantive work. If they contradict each other, OPERATING.md wins on direction; propose a CLAUDE.md edit.
- Find and resolve internal contradictions in CLAUDE.md. Do not wait for Karen to flag them.
- Catch drift in either direction across the wiki/HMTc firewall (CLAUDE.md Part 2). Flag and fix.
- Identify stale, duplicated, or orphaned work across worktrees, branches, and uncommitted piles. Propose a commit grouping and execute the parts Claude is confident about.

**Build quality.**
- Run generators, lint, type-checks, and tests after every change. Commit results when clean.
- Spot stakeholder-readability problems on public pages: internal codenames, repo paths, threshold-selection arithmetic surfacing to public, jargon that fails the brand-legal or plaintiffs'-expert test.
- Catch confidence-misrating (e.g., `n_a_tier=1` labeled "medium").
- Maintain consistency across sibling product pages.

**Ingest and routing.**
- Read the routing audit (when it exists; Part 5b implementation pending) to determine which pages a source affects. Do not re-derive fan-out from memory.
- When the routing layer flags a source-to-page connection, update synthesis content per CLAUDE.md Part 9.
- Do not edit generator-managed regions (the `<!-- BEGIN: ... -->` / `<!-- END: ... -->` markers).
- Do not write to `data/evidence/product_source_routing_audit.csv` by hand; the routing audit generator owns it.

**Design.**
- Mock up UI improvements when a stakeholder-facing surface seems suboptimal. Implement in TSX/SCSS speculatively, show Karen, iterate.
- Propose new stakeholder-named entry points when a public page is serving multiple audiences without disambiguation.
- Propose page splits, merges, and reorganizations when the navigation makes a paying stakeholder's job harder than it needs to be.

**Memory and continuity.**
- Update auto memory with anything load-bearing for future sessions: Karen's role, project context, architectural decisions, contradictions resolved, ongoing strategic direction.

## Part 4 — What Claude asks first

Some operations are not Claude's call regardless of confidence. Always ask before:

- Destructive operations: force-push, `git reset --hard`, large-scale file deletion, removing commits from main, deleting branches or worktrees.
- Naming or surfacing specific brands on any page. CLAUDE.md Part 12, the brand-firewall, applies hard.
- Setting HMTc certification threshold values. Policy choices, not literature claims. They live in HMTc, not the wiki.
- Edits to CLAUDE.md, OPERATING.md, or AGENTS.md themselves. These are policy documents.
- Anything that changes how the wiki and the HMTc certification program relate to each other (CLAUDE.md Part 2 architectural separation).
- Real-user contact. Claude cannot reach out to retailers, brands, regulators, or journalists on Karen's behalf. Karen owns external communication.
- Public commercial framing changes: the $3B-by-2030 goal, the stakeholder priority order, the certification program's positioning.

## Part 5 — Cross-session sync (the multi-Claude problem)

This build has multiple Claude sessions running across multiple tools: Claude Code, Cowork, Codex, and whatever comes next. They cannot talk to each other in real time. The durable artifacts that keep them coherent are:

1. **CLAUDE.md** — operating manual, procedure and template reference.
2. **OPERATING.md** (this file) — strategic frame, stakeholder priority, decision authority.
3. **AGENTS.md** — Codex-specific operating rules, paired with CLAUDE.md.
4. **`data/evidence/product_source_routing_audit.csv`** — once Part 5b's routing layer is built, this is the authoritative map of which sources route to which pages. Sessions do not re-derive this.
5. **Git history** — the only record of who changed what when. Commit discipline is how sessions stay honest with each other.

If a Claude session in any tool finds that one of the above is stale, contradictory, or pointing at something that does not exist (for example, `/private/tmp/heavymetalindex-publish/` referenced in workbench docs and old session prompts as the canonical repo path, which it is not), the session's first responsibility is to fix it, not to act on the stale information.

**Canonical repo location.** `~/Desktop/heavy-metal-index/` on Karen's Mac mini. Final. Do not ask to mount or relocate. If a session is operating elsewhere, surface that fact and stop.

## Part 6 — Quality bar

A piece of work is done when:

- It survives a plaintiffs'-expert reading. No quote-mineable internal codenames. No overstated confidence. No silent threshold drift between wiki and HMTc.
- It gives a paying stakeholder a faster path to their decision than the previous version.
- It includes the provenance trail back to source pages.
- It passes lint, type-check, and generator-idempotency tests.
- It is committed to git with a message that names what changed and why.

A piece of work is not done when:

- It exposes the certification line as a wiki claim. HMTc thresholds live in HMTc; the wiki reports what the literature supports.
- It surfaces percentile-selection arithmetic (p10, p30, p50, p90, p95, p100) on a public, brand-facing, or retailer-facing page. Those values live on the staff Standards Workbench.
- It hides the gap between literature evidence and HMTc thresholds. The gap is the point; the wiki names it honestly. See CLAUDE.md Part 2 for both directions of drift.
- It depends on a stakeholder being able to interpret internal-build language to read it.

## Part 7 — Standing initiatives

Ongoing initiatives that Claude actively pushes forward across sessions. Each is broken out so any session knows what is in flight.

1. **Routing layer implementation (CLAUDE.md Part 5b).** Build `tools/evidence/build-routing-audit.mjs`, the `routing_unresolved.csv` and `routing_malformed.csv` sibling logs, the chokidar watcher tied to `npm run serve`, the pre-commit hook on commits that touch `wiki/sources/`, the prebuild gate in `npm run build`, and the one-time recovery pass over the existing `wiki/sources/` tree. This is load-bearing for every subsequent ingest session. Currently: spec in CLAUDE.md, not yet implemented.

2. **CLAUDE.md consistency pass.** Resolve the contradictions named in the cowork audit at `wiki/lint/2026-05-11-claudemd-consistency-audit.md` plus anything Claude finds. A1 (Part 5b vs Part 8 single-paper workflow) is the load-bearing one. Currently: identified, fix queued.

3. **Stakeholder-aware page structure on the pilot product.** Make the audience model visible on `infant-formula-powder-non-soy` as a template, then replicate to sibling and master pages. The mechanism (audience tagging) exists; the UI surface (stakeholder-named entry points, view switcher, brand-legal-friendly framing of the Methodology and Sources blocks) is the missing piece. Currently: tagging convention exists, no UI surface.

4. **Master-page cleanup.** `wiki/products/infant-and-child-foods-master.md`, `wiki/products/category-5-beverages-master.md`, `wiki/products/regulatory-crosswalk-field-findings.md`, and `wiki/products/lead-benchmark-context.md` still carry internal-build language (Part 19, p30/p90 references, repo CSV paths in body text). Per-row product pages were cleaned in the 2026-05-12 refactor. Currently: pending.

5. **Standards Workbench buildout.** The staff production tool. Index page for the 32 generated standards snapshots under `wiki/workbench/standards/`, review-state UI, approval workflow, integration with the routing audit. Currently: snapshots generated, no index, no approval surface.

6. **Master uncommitted state.** Karen's recovery-branch work (AGENTS.md, the second CLAUDE.md edit on the "Four layers" + "Compiled-wiki rule" block, package.json script additions, ~350 tier-1 source stubs, recovery CSVs) is uncommitted on main. Needs a commit plan that respects the tier-1-stub-vs-tier-2-completed distinction.

**Execution order.** 2 first (CLAUDE.md consistency, so the next ingest session does not bake contradictions into more stubs). 1 second (routing layer, so multi-session drift stops). 3 third (stakeholder UI on the pilot). 6 fourth (commit the recovery pile, structured). 4 fifth (master-page cleanup). 5 sixth (workbench buildout). This order is revisable but should be revised explicitly, in this file, not by drift.
