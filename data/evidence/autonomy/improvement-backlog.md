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

- [ ] **2026-05-17** — see proposal below

### Audit pool-blocked cells to unblock synthesis workflow

**What:** Build `tools/autonomy/audit-pool-blocked-cells.mjs` to enumerate the 286 pool_blocked_cells by (ingredient, metal) pair, count contributing sources per cell, identify data-extraction vs source-gap blockers, and emit a ranked actionable queue.

**Why this lever now:** The 286 pool_blocked_cells metric is the dominant constraint on synthesis workflow throughput. Most are probably 0–1 sources away from moving from `pending` to `populated` status (Part 9 trigger). The 634 gap_driven_wishlist_queries are exactly the cells that are blocked and waiting for evidence. Transparent blockers feed ingest prioritization directly: "these 40 cells need one more paper; these 20 cells have data that isn't yet extracted."

**Where:** 
- New audit: `tools/autonomy/audit-pool-blocked-cells.mjs`
- Output: `data/evidence/pool-blocked-analysis.jsonl` with one record per blocked cell
- Lint rule: add check to `tools/audit-ingredient-mandatory-sections.mjs` for cells pending >6 months despite routed sources (data-extraction debt)

**How:**
1. Read `wiki/ingredients/*.md` frontmatter; identify all (ingredient, metal) cells currently `status: pending`
2. Cross-check routing audit `product_source_routing_audit.csv` to count sources per cell; classify as `no-sources`, `one-source-only`, or `multi-source-no-data`
3. For multi-source-no-data cells, scan source pages for extraction-blocker tags (censored, qualitative-only, different-basis, methodology-mismatch)
4. Emit `pool-blocked-analysis.jsonl` with (ingredient, metal, blocker-type, source-slugs, next-action) and sort by source-proximity (cells with 1 closely-related source ranked above cells with 0)

**Anchors:** CLAUDE.md Part 5b (routing audit signals synthesis, not model intent), Part 9 (synthesis trigger is second source), Part 18 (lint extends to pool quality), [[project_order_of_operations.md]] Phase 1 (ingest prioritization feeds from gap analysis).

---

- [ ] **2026-05-17** — see proposal below

### **Automate synthesis triggers for cells with routed evidence**

**What:** Build a synthesis-queue audit and batch orchestrator that identifies (ingredient/product, metal) cells with 2+ routed sources but no synthesis entry, then run initial-population synthesis on those cells to move them from blocked → populated state.

**Why this lever now:** The snapshot shows 286 blocked cells against 926 ingested sources. The routing audit is working (sources are being connected to pages), but synthesis—which turns routed evidence into `contamination_profile` entries—is not being triggered automatically. This creates a widening gap between what we've collected and what the wiki surface can express. Unblocking these 286 cells via deterministic synthesis orchestration scales the workflow from ad-hoc (Karen or Claude manually runs synthesis) to threshold-driven per Part 9's own trigger rules. This cascades: synthesis completion unblocks ingredient-page coverage audits (Part 18), enables downstream lint checks, and exposes which cells need source-hunting to stabilize pooling (the 12 sensitivity-unstable cells).

**Where:**
- New audit: `tools/autonomy/audit-synthesis-queue.mjs` — reads `data/evidence/product_source_routing_audit.csv`, cross-references `contamination_profile` entries on each ingredient/product page, emits `data/evidence/autonomy/synthesis-queue-eligible.csv` with [page_slug, page_type, metal, routed_source_count, current_status].
- New orchestrator: `tools/autonomy/run-bulk-synthesis.mjs` — processes eligible rows (2+ sources, no `populated` entry), reads source pages from routing audit, computes initial `typical_ppb`/`p95_ppb`/`confidence: low`, updates page frontmatter, writes event to `data/evidence/review_events.jsonl`, commits batch.

**How:**
1. Run `audit-synthesis-queue.mjs` to enumerate eligible cells.
2. Filter for `current_status: pending` AND `routed_source_count >= 2`.
3. For each row, look up the routed sources via the routing audit, read their `contamination_profile` metal sub-blocks, compute initial-population metrics per Part 9 step 1.
4. Write synthesis entries to the target page's `contamination_profile`, update `last_reviewed` timestamp, commit batch with row counts and any flagged contradictions.

**Anchors:** Part 9 (synthesis trigger rules: "cell has accumulated a second contributing source") / Part 18 (ingredient coverage asymmetry lint will pass once cells cross `pending` → `populated`) / [[feedback_no_approval_gates]] (synthesis runs without approval; contradictions are flagged, not held for review)

---

- [ ] **2026-05-17** — see proposal below

### Convert synthesis-gap queries into a ranked source-finding priority list

**What:** Create `tools/autonomy/prioritize-synthesis-gaps.mjs` that reads the 634 gap_driven_wishlist_queries from autonomy logs, ranks each (ingredient, metal, product) cell by impact (frequency + downstream product-page dependencies + HMT&C row lock status), and outputs `data/evidence/priority-synthesis-gaps.csv` to feed the next ingest triage.

**Why this lever now:** 286 pool_blocked_cells are the single largest structural blocker on synthesis workflow. They cannot advance past `pending` without evidence. The 634 gap_driven_wishlist_queries are a direct signal of which sources, if found, would unlock synthesis. Currently gaps are logged but not prioritized; systematizing them would focus source discovery on cells with maximum downstream impact (ingredient pages, product pages, HMT&C-locked rows).

**Where:** 
- `tools/autonomy/prioritize-synthesis-gaps.mjs` (new script)
- `data/evidence/priority-synthesis-gaps.csv` (output: slug, metal, product_slug, frequency, impact_score)
- Source log location: verify whether gap queries are in autonomy reports (e.g., `data/evidence/autonomy/healing-report-*.md`) or a structured record like `data/evidence/autonomy/synthesis-gaps.jsonl`

**How:**
1. Audit the current gap-query logging format in autonomy reports (grep for "gap" / "blocked" / "thin" markers in 2026-05-17 autonomy files).
2. Build the prioritization script: read gaps → group by (ingredient_slug, metal, product_slug) → count frequency → multiply by (number of pages in wiki that reference this cell) × (1.5× if cell blocks a `hmtc_row` locked entry) → rank descending.
3. Output CSV with ranked cells; include a "source_type_hint" column (e.g., "infant formula studies," "rice processing studies") inferred from the cell's context.
4. Wire the output into the kickoff triage-manifest generator (Part 11) so the next ingest batch auto-prioritizes P1 sources against this list.

**Anchors:** CLAUDE.md Part 9 (synthesis trigger: blocked cells need evidence), Part 11 (priority ordering), Part 24 (proactive maintenance — surface weak spots), `docs/order-of-operations.md` Phase 2 (source discovery targeting).

---

- [ ] **2026-05-17** — see proposal below

### Drive sourcing by user-query demand signals

**What:** Materialize the 634 gap-driven wishlist queries into a prioritized sourcing manifest that identifies which (ingredient, metal) cells have recorded user demand, then create a lint rule to flag the top 100 demand-signal cells still in pool-blocked state.

**Why this lever now:** The corpus has 286 pool-blocked cells (insufficient evidence for synthesis) and 634 recorded queries for information the wiki cannot fully answer. These two signals together reveal *which* blocked cells matter to downstream users (Ask the Index, courses, HMT&C audits). Sourcing to user demand is more efficient than sourcing to corpus gaps; it directly unblocks real questions and converts diffuse "thinness" into concrete priority signals.

**Where:**
- New file: `data/evidence/query-demand-priorities.csv` (ingredient_slug | metal | query_count_30d | last_query_date | pool_status | sourcing_tier)
- Source: extract from Ask the Index query logs or audit trail of recorded queries that triggered "insufficient evidence" responses
- New lint rule: `tools/audit-demand-pool-alignment.mjs` to flag top-100 high-demand cells still pending/thin

**How:**
1. Access the query-log source for the 634 gap-driven queries and parse to extract (ingredient, metal) pairs
2. Aggregate by pair; compute 30-day query volume and most-recent query timestamp
3. Join against the routing audit to tag each pair's current pool_status
4. Sort by query_count DESC; emit CSV with top-100 marked for `sourcing_nominated`
5. Add lint rule: fail if any top-100 demand cell remains blocked without a sourcing ticket logged after 14 days

**Anchors:** Part 11 (priority ordering P1–P5), Part 9 (synthesis thresholds trigger on evidence), Part 18 (lint discipline), Part 5b (routing audit feeds synthesis). Feedback: algorithmic prioritization requires no approval — data-driven sourcing replaces estimation-driven sourcing.

---

- [ ] **2026-05-17** — see proposal below

### Audit pool-blocked cells to expose unblocking strategy

**What:** Run a diagnostic across the 286 pool-blocked (ingredient, metal) cells to identify which pooling rule is preventing synthesis for each, ranked by unblocking difficulty.

**Why this lever now:** The snapshot shows 286 blocked cells—roughly 30% of the synthesis matrix is invisible. These are not missing sources; they're routed sources that cannot be synthesized due to rule violations (basis mismatch, unit-conversion gaps, population stratification needed, censoring conflicts). Classifying which violation type blocks each cell reveals which are fixable in frontmatter vs which require synthesis architecture changes (e.g., stratified pooling). Unblocking even 40% of these cells would dramatically expand synthesis coverage and expose the next bottleneck.

**Where:** 
- Create `tools/evidence/audit-pool-blocked-cells.mjs`
- Emit to `data/evidence/pool-blocked-audit-<date>.csv`: columns `ingredient`, `metal`, `source_count`, `blocking_rule` (basis_mismatch | unit_unresolvable | population_stratification_required | censoring_conflict | a_tier_contradiction | other), `sources_csv`
- Rank by blocking-rule frequency to surface which rule prevents the most syntheses

**How:**
1. For each cell with contributing sources that failed pooling, test each source-pair against pooling rules
2. Classify the blocking violation type
3. Emit ranked audit: which blocking rule affects most cells? Which are easiest to fix (frontmatter)? Which need synthesis redesign?
4. Surface top unblocking targets to synthesis pass or Karen

**Anchors:** CLAUDE.md Part 9 (synthesis modes and triggers), Part 19 (locked pooling methodology), `docs/standards-methodology.md` (pool admission rules). This audit sits between ingest and synthesis, exposing what frontmatter corrections or architecture changes would unblock the next 100+ cells.

---

- [ ] **2026-05-17** — see proposal below

### Synthesize blockers audit to unblock 286 contamination cells

**What:** Create a deterministic audit that categorizes each of the 286 pool_blocked_cells by its specific synthesis blocker (1-source gap, contradiction, basis-mismatch, unit-incompatibility), then generate a prioritized queue for source acquisition and arbitration.

**Why this lever now:** 286 blocked cells represent evidence that's been ingested but synthesis has stalled. Each one is potential knowledge — standards fuel, course content, public answers — waiting on a specific blocker that can be named and resolved. The audit feeds source acquisition: cells needing just 1 more source can be routed to targeted wishlist queries. This directly unblocks the synthesis pipeline that drives HMT&C standards (Part 19) and product-category page rendering.

**Where:** 
- New tool: `tools/evidence/audit-synthesis-blockers.mjs`
- Output: `data/evidence/autonomy/synthesis-blockers-<date>.csv` with columns: ingredient, metal, n_sources, blocker_type (1-source-gap|contradiction|basis-mismatch|unit-incompatible), contributing_sources, blocker_detail
- Integrated into: `npm run lint` output and morning CI report

**How:** 
1. Iterate every contamination_profile cell with sources but status ≠ "final"; for each, classify: n_sources == 1 → blocker_type = "1-source-gap"; n_sources ≥ 2 and p95/typical spread > 2× → "contradiction"; source matrices conflict → "basis-mismatch"; units conflict → "unit-incompatible"
2. For 1-source cells, cross-reference the 634 gap-driven_wishlist_queries to auto-populate "suggested_2nd_source_query: [ingredient]+[metal]"
3. Sort by blocker_type (1-source first), then by citation frequency in corpus
4. Output as: "Synthesis queue: X cells at 1-source gap (Y recommend wishlist pull), Z contradiction (needs arbitration), W basis-mismatch (needs basis-conversion.mjs)"

**Anchors:** CLAUDE.md Part 9 (synthesis modes and triggers); Part 18 (lint rules); Part 19 (standards feed); the 286 pool_blocked_cells metric signals the bottleneck. Feeds source acquisition strategy and synthesis arbitration workflow.

---

- [ ] **2026-05-17** — see proposal below

### Run batch deterministic extraction on pool-blocked cell sources

**What:** Identify the 285 sources routed to pool-blocked (ingredient, metal) cells, execute deterministic value extraction on them to populate `typical_ppb`, `p95_ppb`, basis, and uncertainty fields, then regenerate the routing audit.

**Why this lever now:** Pool-blocked cells represent sources already ingested and routed but not yet yielding structured values for synthesis. Extraction is the deterministic step (CLAUDE.md Part 4) that unblocks 285 cells simultaneously—a 2× multiplier on the synthesis pipeline, since 557 values have been extracted from 942 sources, implying the 285 blocked sources are the remaining low-hanging fruit.

**Where:**
- Blocked sources: identifiable from routing audit (routed sources with `extraction_status: pending` or missing `typical_ppb` fields)
- Extraction script: `tools/autonomy/extract-structured-values.mjs` or batch codex pass
- Output records: update source pages + `data/evidence/extracted_values.jsonl`
- Regenerate: `tools/evidence/build-routing-audit.mjs` to recompute pool-ready cell count

**How:**
1. Query the routing audit for (source_cite_key, ingredient, metal) rows where the source lacks populated `typical_ppb` or `p95_ppb` in its page
2. Run deterministic extraction on that batch using a fresh-context subagent (Codex) to decide basis, value type, analyte species, and censoring
3. Write extracted values to source pages and the structured value register
4. Rebuild the routing audit and regenerate lint; pool-blocked count should drop to ~50
5. Synthesis pipeline then triggers for the newly unblocked cells

**Anchors:** CLAUDE.md Part 4 (deterministic extraction as default); Part 9 (synthesis trigger); Part 18 (lint pool-blocked flagging)

---

- [ ] **2026-05-17** — see proposal below

### Create source-seeking workflow for zero-source pending-lock categories

**What:** Build a deterministic script that reads `gap-driven-wishlist.csv`, filters for queries targeting the four zero-source pending-lock categories (infant-formula-dairy, infant-formula-dairy-free, infant-porridges-dairy, infant-porridges-dairy-free), and emits a prioritized research queue ranked by HMT&C category criticality.

**Why this lever now:** Four Tier-1 HMT&C categories (infants are the highest-sensitivity population) exist as provisional scaffolds with zero sources. The 653 gap-driven-wishlist queries have been identified but are not systematically routed to fill the most-critical gaps. Completing these four categories would unblock synthesis on the most-defensible-under-challenge product segment and eliminate the largest single gap in the corpus.

**Where:**
- Input: `data/evidence/autonomy/gap-driven-wishlist.csv`
- Script: `tools/autonomy/prioritize-source-seeking-by-category-impact.mjs` (new)
- Output: `data/evidence/autonomy/source-seeking-priority.csv`

**How:**
1. Read gap-driven-wishlist.csv; filter for rows mentioning infant-formula or infant-porridge (case-insensitive match on target_category or query_text).
2. Assign impact_score: 1.0 for zero-source categories, 0.5 for pool_too_thin categories, 0.1 for others.
3. Sort by [impact_score DESC, target_category ASC, query_text ASC].
4. Emit to source-seeking-priority.csv with columns: [wishlist_query, target_category, impact_score, analyte, research_type, priority_rank].
5. Log creation to log.md with `op: source-seeking-prioritization-workflow`.

**Anchors:** CLAUDE.md Part 10 (unfunded provisional scaffolds must accumulate evidence before promotion), Part 5b (routing audit identifies unfunded cells), Part 2 (infant defensibility is highest-stakes). Governance: "Tier-1 population gaps block synthesis and certification defensibility."

---

- [ ] **2026-05-18** — see proposal below

### Prioritize source-hunting by pending-lock query volume

**What:** Create an audit script that counts gap-driven wishlist queries against each pending-category-lock, ranking them by urgency so the ingest workflow knows which empty scaffolds to fill first.

**Why this lever now:** The snapshot shows 6 pending locks with zero or near-zero sources (four infant formula variants, four infant porridges), blocking synthesis and standards-setting. The 672 gap-driven wishlist queries are latent demand signals. Correlating these reveals which scaffolds are starving for evidence vs. which are truly low-demand.

**Where:** 
- New script: `tools/autonomy/audit-pending-locks-vs-wishlist.mjs`
- Input: `data/evidence/autonomy/gap-driven-wishlist.csv` (existing, 672 rows)
- Input: `wiki/products/*.md` (all scaffolds with `provisional_scaffold: true`)
- Output: `data/evidence/autonomy/pending-locks-wishlist-priority.csv`
- Optional: wire into `npm run lint` to emit a morning report

**How:**
1. Read wishlist queries; parse `query` and `category_hints` fields for product slug mentions and related keywords (e.g., "lead in infant formula" → matches `infant-formula-dairy`, `infant-formula-dairy-free`)
2. Scan pending-lock product frontmatter for `slug` and `provisional_scaffold: true`; count routed sources via routing audit
3. For each pending lock, count matching wishlist queries (exact slug match + keyword variants)
4. Emit CSV: `slug | routed_sources | wishlist_queries | priority_score` ranked descending by query volume
5. Log to `data/evidence/autonomy/` so the ingest kickoff procedure can read it and target high-signal categories first

**Anchors:** CLAUDE.md Part 10 (provisional scaffolds pending promotion), Part 9 (synthesis trigger conditions), Part 11 (priority ordering). Governance principle: autonomy should route effort toward evidence gaps that queries reveal, not toward arbitrary category assignments. Makes the next ingest batch deterministic and defensible.

---

- [ ] **2026-05-18** — see proposal below

### Audit zero-source scaffolds for deletion or targeted ingest

**What:** Add a lint audit that flags product and ingredient scaffolds with `provisional_scaffold: true` but zero routed sources after 30+ days, and recommends either explicit deletion or targeted source-finding campaigns to justify keeping them.

**Why this lever now:** The pending_category_locks snapshot shows 4 of the top 6 entries have zero sources (infant-formula-dairy, infant-formula-dairy-free, infant-porridges-dairy, infant-porridges-dairy-free). These scaffolds are blocking HMT&C Step 0 Lock review because they have no evidence base. Deleting unjustified scaffolds reduces governance friction; flagging low-evidence scaffolds for targeted source-finding unblocks Lock advancement and focuses ingest on the highest-evidence categories.

**Where:**
- New audit script: `tools/autonomy/audit-zero-source-scaffolds.mjs`
- Audit output: `data/evidence/autonomy/zero-source-scaffolds-<date>.md`
- Runs as part of the pre-commit lint hook and morning report

**How:**
1. Query `data/evidence/product_source_routing_audit.csv` for routed-source counts per target product page.
2. Cross-reference pages in `wiki/products/` with frontmatter `provisional_scaffold: true` AND `created_at > 30 days`.
3. For each zero-source scaffold: output a decision row recommending deletion (with note: "no evidence base") OR a source-finding campaign (with keywords extracted from the scaffold's slug/description).
4. For scaffolds with 1–3 sources: flag as "thin-evidence candidates for acceleration" with a list of which metals/ingredients are covered.
5. Output as markdown so Karen or the autonomy loop can batch-act on recommendations.

**Anchors:** Part 10 (scaffolds are routing destinations, not governance endpoints), Part 5b (routing audit coherence), Part 18 (lint rules), `docs/order-of-operations.md` Phase 0 (scaffold creation tied to source-evidence thresholds).

---

- [ ] **2026-05-18** — see proposal below

### Audit under-routed infant-formula sources to unblock subcategory locks

**What:** Create a routing audit that identifies sources routed to parent product categories (e.g., `infant-formula`) when their content should declare sub-variants (`infant-formula-dairy` vs `infant-formula-dairy-free`); generate a repair manifest listing sources to re-frontmatter and re-route.

**Why this lever now:** Six pending category locks have zero routed sources—notably `infant-formula-dairy` and `infant-formula-dairy-free`, which are core HMT&C categories. This is a routing discipline gap, not a data gap: sources likely exist that distinguish dairy from dairy-free formulae but are being routed only to the parent. Unblocking these routes directly unlocks synthesis for 2+ scaffolds and reduces pool_blocked_cells by enabling pooling on sub-variants. Fixing routing is faster than sourcing new papers.

**Where:** 
- Audit script: `tools/autonomy/audit-under-routed-products.mjs` (new)
- Input: `data/evidence/product_source_routing_audit.csv` (existing routing audit)
- Output: `data/evidence/routing_repair_manifest.csv` (new) — lists (source_cite_key, declared_parent_slug, missing_subvariant_slugs, source_page_ref)

**How:**
1. Scan routing audit for product rows with `provisional_scaffold: true` and `routed_source_count: 0`.
2. For each zero-routed scaffold, identify its parent category (e.g., `infant-formula` is parent of `infant-formula-dairy`).
3. Search parent category's routed sources for ones whose source page body discusses sub-variant distinctions (dairy, dairy-free, soy, etc.) but whose frontmatter declares only the parent.
4. Emit repair manifest with cite-key, parent slug, and correct sub-variant slug; flag as `repair_required: true` for the autonomy loop.

**Anchors:** CLAUDE.md Part 5b (routing layer accountability), Part 18 (lint checks for routing malformed/unresolved), Part 10 (subcategory routing discipline). Memory: [[feedback_no_hand_curated]] — generators should overwrite routing; audit should detect gaps, not require Karen to list them.

---

- [ ] **2026-05-18** — see proposal below

### Audit and unblock pool-blocked cells (305 constraint)

**What:** Run an audit identifying why 305 contamination cells cannot be pooled (missing fields, admission-rule violations, insufficient n, censoring incompatibilities), classify them by blockage reason, and generate a repair plan for extraction or admission-rule tuning.

**Why this lever now:** Pool-blocked cells are the binding constraint preventing synthesis from scaling past the current 957 papers. Every unblocked cell unlocks percentile computation, every percentile feeds threshold-setting, every threshold feeds courses and product positioning. The 305 count represents latent evidence that cannot yet inform HMT&C standards. This is the single highest-leverage constraint on the roadmap.

**Where:** Create `tools/autonomy/audit-pool-blocked-cells.mjs` to iterate `data/evidence/review_events.jsonl`, identify cells flagged `pool_blocked: true`, cross-reference source pages for present/missing fields (analyte, n, method detection limit, censoring, unit, basis, distribution shape), and emit classified blockers to `data/evidence/autonomy/pool-blocked-audit-<date>.csv`.

**How:**
1. Script reads review_events for every cell marked `pool_blocked` and joins against source page frontmatter (`cite_key` → `wiki/sources/<cite_key>.md`).
2. Emit rows with columns: `ingredient`, `metal`, `source_count`, `top_blockers_by_frequency` (e.g., `missing_censoring_type: 47`, `n_too_small: 38`, `mixed_bases_unresolved: 22`), `example_source_slugs`.
3. Summarize by blocker type with repair strategy (backfill extraction field, relax admission threshold, request Karen decision on mixed bases).
4. Commit audit to git with log entry `op: audit, type: pool-blocked-cells` and flag for next synthesis pass.

**Anchors:** CLAUDE.md Part 9 (synthesis triggers), Part 19 (pool admission rules in docs/standards-methodology), and the routing audit's existing classification discipline (Part 5b).

---
