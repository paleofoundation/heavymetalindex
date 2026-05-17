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
