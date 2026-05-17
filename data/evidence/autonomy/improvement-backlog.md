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
