# Improvement backlog

Auto-managed by `tools/autonomy/improvement-scout.mjs`. The scout appends one item per tick when it identifies a new wiki-quality lever. Items use `- [ ]` checkboxes; once an item is executed, switch to `- [x]` so the scout dedupes correctly.


- [ ] **2026-05-17** — see proposal below

### Automate synthesis-trigger detection for 324 pooling-blocked cells

**What:** Create `tools/autonomy/identify-synthesis-triggers.mjs` — a tool that reads the routing audit and `review_events.jsonl`, identifies ingredient/metal cells meeting Part 9 trigger conditions, and writes them to `data/evidence/autonomy/synthesis-pending.csv` as a queue for autonomous synthesis execution.

**Why this lever now:** The snapshot shows 286 pool_blocked cells and 38 pool_too_thin cells, indicating synthesis workflows are not flowing automatically despite routing discipline being perfect (0 unresolved). Part 9 defines 4 synthesis triggers (first 2 sources, n_studies doubled, new contradiction, A-tier conflict), but no autonomous system reads those signals. Unblocking synthesis execution flow would allow `contamination_profile` blocks to populate and feed downstream generators (product pages, standards workbench, public app). This is the load-bearing workflow to convert compiled wiki from promise to delivery.

**Where:**
- New: `tools/autonomy/identify-synthesis-triggers.mjs`
- Output: `data/evidence/autonomy/synthesis-pending.csv` (columns: ingredient_slug, metal, trigger_type, n_sources, last_reviewed, recommend_mode)
- Inputs: `data/evidence/product_source_routing_audit.csv` + `wiki/ingredients/*.md` frontmatter + `data/evidence/review_events.jsonl`

**How:**
1. Enumerate all (ingredient, metal) cells from routing audit
2. For each cell, read the ingredient page frontmatter and review events; compute n_studies, status, last_reviewed, last_full_resynthesis
3. Check each against Part 9 triggers: n≥2 ∧ status=pending, or n doubled, or contradiction flag, or A-tier conflict
4. Write queue with trigger type and mode (initial_population / incremental / full_resynthesis)
5. Call from `npm run serve` watcher so queue updates whenever `wiki/sources/` or ingredient pages change

**Anchors:** Part 9 (Synthesis triggers and modes), Part 5b (Routing audit feeds synthesis), Part 4 (compiled wiki model requires synthesis flow), order-of-operations Phase 3–4

---

- [ ] **2026-05-17** — see proposal below

### Rank gap-driven wishlist sources by pool-impact

**What:** Create a script that consumes the 631 gap-driven wishlist entries and ranks each source by how many currently-blocked (pool_blocked_cells) ingredient/metal cells it would unblock, surfacing the highest-impact next batch for autonomy ingest.

**Why this lever now:** 286 blocked cells is the binding constraint on synthesis progression (Part 9). The wishlist identifies 631 sources that could unblock them, but without prioritization, autonomy ingest operates on ad-hoc or manual triage. Deterministic ranking by pool-impact converts waste into a self-steering feed. Unblocking even the top-10 sources by impact likely moves 50–120 cells from blocked → thin → ready-to-synthesize.

**Where:** 
- Input: `data/evidence/gap_driven_wishlist_queries.csv` (extract source cite-keys, matched product/ingredient/metal tuples)
- Script: `tools/autonomy/rank-wishlist-by-pool-impact.mjs` (new)
- Output: `data/evidence/wishlist_ranked_by_pool_impact.csv` (columns: cite_key, target_cells_count, p_tier, impact_rank, rationale)
- Integration: post-routing-audit trigger; autonomy ingest consumes the top N by rank

**How:**
1. Parse the routing audit to identify every (ingredient, metal) cell currently at `status: pending` (blocked).
2. For each wishlist entry, cross-reference its declared `products/ingredients/metals` frontmatter against the routing map to compute how many blocked cells the source would populate.
3. Rank by cells-unblocked descending; secondary sort by evidence-tier (A > B > C).
4. Emit the ranked list with explicit impact counts; autonomy ingest clips the top 10–20 by impact for next batch.

**Anchors:** [[Part 5b routing layer]], [[Part 9 synthesis]], [[Part 11 priority ordering]]. No wiki/HMT&C firewall violation. Aligns with no-hand-curation principle: deterministic, repeatable, emitted to audit log.

---

- [ ] **2026-05-17** — see proposal below

### Rank gap_driven_wishlist_queries to guide targeted source-finding

**What:** Analyze the 631 gap_driven_wishlist_queries to identify the top 50 highest-impact (ingredient, metal) cell combinations, then generate a ranked source-finding priority list for the autonomy ingest orchestrator to consume.

**Why this lever now:** The corpus has 286 blocked cells and 631 gap-driven queries—concrete questions the literature should answer but the corpus doesn't yet contain. The queries represent the direct signal of where to search next. Ranking them by how many blocked cells each unblocks converts the wishlist from a reporting artifact into deterministic input for ingest prioritization, so future sessions know which papers matter most.

**Where:**
- Input: `data/evidence/autonomy/gap-driven-wishlist-queries.jsonl` (the 631 queries)
- Output: `data/evidence/autonomy/priority-source-finding-list.csv` with columns: `priority_rank | ingredient_slug | metal | n_blocked_cells_affected | search_terms | gap_description`

**How:**
1. Parse the 631 queries and map each to the (ingredient, metal) cells it would populate if answered.
2. Count blocked cells per query; rank by cell-unblock impact.
3. For each top-50 query, generate natural-language search terms suitable for literature databases (PubMed, Web of Science, Google Scholar).
4. Emit as CSV; feed to the autonomy orchestrator so the next ingest batch is guided by signal, not guessing.
5. Log the analysis to `data/evidence/autonomy/gap-driven-source-priorities-<date>.md` with summary metrics.

**Anchors:** Part 9 (synthesis cell-population triggers), Part 11 (priority ordering for bulk ingest), deterministic-generator pattern. Gap-driven testing is already capturing signal; this proposal routes that signal into the ingest loop to unblock the 286 cells systematically.

---

- [ ] **2026-05-17** — see proposal below

### Build synthesis-trigger audit to unblock 286 pooling-blocked cells

**What:** Create `tools/audit-synthesis-readiness.mjs` that reads the routing audit and ingredient frontmatter, identifies every (ingredient, metal) cell with sources but stale or missing synthesis, classifies it by readiness state (pending first population, due for resynthesis, blocked), prioritizes by product-tier and evidence count, and writes a deterministic synthesis queue to `data/evidence/synthesis-queue.csv`.

**Why this lever now:** 286 pool_blocked cells is the snapshot's largest weakness. Most blocks are likely synthesis-execution stalls (cells crossed the resynthesis threshold but no pass ran), not unfixable data issues. Making the synthesis backlog explicit unblocks the contamination_profile compilation and operationalizes CLAUDE.md Part 9's trigger-based architecture, which currently exists as a rule but has no instrumentation.

**Where:**
- Create: `tools/audit-synthesis-readiness.mjs`
- Output: `data/evidence/synthesis-queue.csv` (one row per (ingredient, metal, trigger_reason, priority_rank))
- Read from: routing audit, ingredient pages' `contamination_profile.*.last_reviewed` and `n_studies` fields, `review_events.jsonl`

**How:**
1. For each (ingredient, metal) pair in the routing audit with `route_count >= 1`, check the page's frontmatter state: `status`, `n_studies`, `last_reviewed`, `last_full_resynthesis`.
2. Classify: first-synthesis-pending (status: pending, sources >= 2), resynthesis-due (n_studies has doubled since last_full_resynthesis), blocked (contradictions or missing extraction per routing-malformed records), or current (synthesized within 30 days).
3. Rank by product-tier (infant-and-child-foods first), metal-tier (A-metals first), then source count descending.
4. Write queue; mark blocked entries with their specific blocker (malformed frontmatter, contradicting sources, thin-pool threshold).
5. Wire into lint: fail build if queue has unresolved blockers.

**Anchors:** CLAUDE.md Part 9 (synthesis trigger conditions: second source, n_studies doubling, contradictions), Part 18 (lint: ingredient coverage asymmetry), Part 19 (HMT&C thresholds depend on populated ingredient cells).

---

- [ ] **2026-05-17** — see proposal below

### Rank Step 0 Locks by gap-driven user demand

**What:** Parse the 634 gap-driven wishlist queries to identify which provisional product scaffolds users are asking for, then emit a ranked recommendation for Step 0 Lock sequencing to Karen, ordered by (user_queries × blocked_cells_unblocked).

**Why this lever now:** 286 cells are pool-blocked, waiting for product-row locks. The gap-driven wishlist is direct user demand signal from Ask the Index. Step 0 Locks are currently decided by batch ingest order or ad-hoc judgment, not by where unlocking would raise the most value. Aligning lock sequencing to wishlist demand closes the feedback loop between users and governance, and prioritizes the locks that would unblock the most cells and serve the most queries.

**Where:**
- Input: `data/evidence/autonomy/gap-driven-wishlist-2026-05-17.csv`
- Input: `data/evidence/provisional-product-scaffolds.jsonl`
- Output: `data/evidence/autonomy/step0-lock-priority-ranking.csv` with columns: `product_slug`, `user_queries`, `routed_sources`, `blocked_cells_unblockable`, `rank`

**How:**
1. Parse gap-driven wishlist to extract product references and count frequency per category slug
2. Cross-reference against provisional scaffolds to find which user-demanded categories have pending locks
3. For each pending-lock candidate, count how many currently-blocked ingredient/metal cells would become poolable if that row locked
4. Rank by (query_frequency × unblockable_cells) and emit as actionable governance input for Karen's lock decisions

**Anchors:** CLAUDE.md Part 10 (Step 0 Lock governance trigger), Part 9 (synthesis blocked by provisionally-scaffolded rows), project_order_of_operations.md (lock timing), project_ask_the_index.md (user demand surface feeding wishlist)

---
