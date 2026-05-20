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

- [ ] **2026-05-18** — see proposal below

### Draft Step 0 Lock templates for categories ready to lock

**What:** Create `tools/autonomy/draft-step0-locks.mjs` to scan all `wiki/products/` pages with `provisional_scaffold: true` and ≥ 4 routed sources, generate pre-filled markdown templates with HMTc category/row/clean-dirty metadata, and write approval-ready blocks to `data/workbench/pending-locks-for-approval.md`.

**Why this lever now:** The 305 pool_blocked_cells are stalled waiting for product-category Step 0 Locks. Baby-food has 4 routed sources but cannot flow to synthesis until the provisional flag clears. Automating template generation (infer HMTc category from slug, pre-populate row assignment, suggest clean/dirty splits based on metal coverage) turns a hand-authored governance bottleneck into a one-click Karen approval flow. As wishlist queries (672) continue to identify priority gaps, this tool keeps lock throughput in sync with source accrual.

**Where:**
- Script: `tools/autonomy/draft-step0-locks.mjs`
- Input: `wiki/products/*.md` with `provisional_scaffold: true`
- Output: `data/workbench/pending-locks-for-approval.md`
- Integrate into morning-report pipeline before `audit-pending-locks.mjs`

**How:**
1. Scan `wiki/products/` for `provisional_scaffold: true` AND `sources_routed >= 4`
2. Map slug to HMTc category (baby-food → "infant-and-child-foods")
3. Pre-populate row name and suggest clean (P97) vs dirty (P45) based on source metal coverage
4. Generate markdown approval block with YAML header + rationale prompts for Karen
5. Log template generation to `data/evidence/review_events.jsonl`

**Anchors:** CLAUDE.md Part 10 (Step 0 Lock mechanics), Part 5b (routing unblocks synthesis), Part 19 (per-row P97/P45 thresholds).

---

- [ ] **2026-05-18** — see proposal below

### Extract heavy-metal values from 40% of unsourced papers

**What:** Audit which of the 959 corpus sources lack structured `contamination_profile` value rows (or have incomplete frontmatter preventing synthesis), then run batched extraction on the backlog to populate them.

**Why this lever now:** Only 557/959 sources (~58%) have extracted values. The 305 pool-blocked cells and 42 thin-pool cells are symptoms: synthesis can't run until a cell has 2+ sources with structured values. Closing the extraction gap directly unlocks ~42 synthesis initializations (→ populated cells with confidence: low), which seed the citation tables that make product pages credible to HMT&C Step 0 Lock decisions. The pending-lock products (baby-food, infant-formula variants) are waiting on exactly this signal.

**Where:**
- Audit script: `tools/autonomy/audit-source-value-completeness.mjs` (new) — iterate `wiki/sources/*.md`, check for `frontmatter.metals` population and `<!-- contamination_profile extracted -->` marker (or equivalent schema field); emit `data/evidence/autonomy/source-extraction-backlog.csv` with sources missing structured values, grouped by metals/analytes missing.
- Extraction runner: feed backlog through existing ingest-skill pipeline or new `tools/autonomy/batch-extract-source-values.mjs` to populate `contamination_profile` blocks on source pages.
- Tracking: log to `data/evidence/autonomy/value-extraction-<YYYY-MM-DD>.md` with before/after pool-cell counts.

**How:**
1. Run audit script to enumerate sources with incomplete frontmatter or missing value extraction.
2. For each source, re-read the PDF to extract per-analyte values (typical ppb, p95 ppb, sample count, study quality) into structured YAML under the source page's `contamination_profile`.
3. Re-run routing audit (auto-triggered by source-page write).
4. Run synthesis on cells that now reach 2+ source threshold.
5. Log cell-unblock count in morning report; flag categories whose pending locks now have routed+synthesized evidence.

**Anchors:** CLAUDE.md Part 9 (synthesis blocked without structured values), Part 5b (routing depends on frontmatter completeness), Part 18 (lint rule: provenance gaps).

---

- [ ] **2026-05-18** — see proposal below

### Extract user-demand signal from gap-driven wishlist to repriorize ingest

**What:** Parse the 666 gap-driven wishlist queries to extract product/ingredient slugs and their ask-frequency, then emit a ranked ingest-priority queue that feeds next-batch prioritization.

**Why this lever now:** The snapshot shows 6 infant-food category scaffolds with zero routed sources; simultaneously, 666 user queries represent unmet demand. These two signals should converge. A user asking "what does the literature say about infant barley cereal?" 12 times is evidence-of-demand that should bump barley-based infant products up the ingest queue, independent of raw source count.

**Where:** 
- Input: `data/evidence/gap-driven-wishlist-2026-05-18.csv` (exists, 666 rows)
- Output: `data/autonomy/wishlist-ingest-priorities.csv` (new)
- Integration point: Part 11 priority-tier logic in next batch report

**How:**
1. Parse the `gap_query` column; extract product/ingredient slugs and metals via pattern-matching (e.g., "lead in infant oat cereal" → `products: infant-cereals`, `ingredients: oats`, `metals: Pb`)
2. Aggregate by slug; compute frequency distribution
3. Emit ranked CSV: `slug | product_type | query_count | top_query_variant | inferred_evidence_gap`
4. Surface the top 20 user-demand entries in the next batch report as "user-demand tier" candidates to justify bumping scaffolds past zero-sources

**Anchors:** 
- CLAUDE.md Part 11 (priority ordering) — adds user-demand as a tier signal alongside P1-P5
- Part 5b (routing layer) — unresolved routes → wishlist queries; wishlist queries → ingest priorities
- Ask the Index product spec (docs/ask-the-index-spec.md) — closes the loop from user questions to ingest work

---

- [ ] **2026-05-18** — see proposal below

### Complete metal coverage on ingredient-source pairs

**What:** Build a structured-extraction completion audit that identifies every (source, ingredient) pair where ingest extracted some but not all ten HMT&C metals, then auto-populate missing metals with explicit "not-reported" markers in source frontmatter so ingredient contamination_profile synthesis can proceed.

**Why this lever now:** 302 blocked cells in the contamination-profile matrix cannot synthesize because ingredient-metal coverage is asymmetric. When a source routes to an ingredient but extracts only 3 of 10 analytes (Pb, Cd, iAs), the cell stays in mixed state (some metals `populated`, others `pending`) and triggers the lint failure in Part 18. Unblocking these cells unblocks the incremental-synthesis pathway and accelerates contamination_profile population across all 245 ingredients.

**Where:** 
- New audit: `tools/audit-extraction-completeness.mjs` (identifies incomplete (source, ingredient, metal) tuples)
- Schema extension: source frontmatter gains `[metal]_coverage: not-reported` fields for metals absent from the source
- Update: `tools/audit-ingredient-metal-coverage.mjs` to treat explicit not-reported markers as valid completion, not gaps

**How:**
1. Run the audit against all 965 sources to identify (source, ingredient) pairs with < 10 metals extracted
2. For each missing metal, append `al_coverage: not-reported, cr_vi_coverage: not-reported` (etc.) to the source page frontmatter 
3. Commit the frontmatter completions as a single batch (`docs: fix extraction coverage gaps`)
4. Trigger ingredient-synthesis sweep to populate contamination_profile blocks now that all (source, ingredient) pairs are metrically complete

**Anchors:** CLAUDE.md Part 9 (synthesis triggering on population threshold), Part 18 (ingredient coverage-asymmetry lint rule), Part 19 (contamination_profile is prerequisite for standards-setting workbench). Maps to [[feedback_no_hand_curated.md]] — generators should overwrite freely, never skip coverage gaps.

---

- [ ] **2026-05-18** — see proposal below

### Mine the gap wishlist to prioritize source acquisition

**What:** Build a deterministic aggregator that parses the 600 gap-driven-wishlist queries, extracts (ingredient, metal, geography) tuples, ranks them by frequency, and outputs a ranked-by-need summary so future ingest prioritizes the highest-leverage sources first.

**Why this lever now:** The 45 pool_too_thin cells signal that synthesis is bottlenecked on source scarcity, not processing. The 600 gap_driven_wishlist_queries represent explicit, corpus-grounded signals of what the sources themselves are asking for. Aggregating these queries into a ranked acquisition wishlist turns a side effect of ingest into a *prospective priority map*. Karen can then run targeted searches on the top 20 gaps instead of broad queries, and the autonomy loop can tier ingest priorities to unblock high-frequency gaps first.

**Where:** 
- Input: `data/evidence/gap-driven-wishlist-2026-05-18.md` (the corpus of 600 queries)
- New script: `tools/autonomy/analyze-gap-wishlist.mjs`
- Output: `data/evidence/autonomy/gap-analysis-top-needs-2026-05-19.md` with top 20 gaps ranked by query frequency, broken down by ingredient/metal/geography

**How:**
1. Parse `gap-driven-wishlist-2026-05-18.md` to extract (ingredient, metal, matrix, geography) tuples from each query.
2. Aggregate by tuple, count, sort by frequency descending.
3. Cross-reference each top gap against the routing audit to flag: (a) which gap has contributing sources not yet routed, (b) which provisional scaffolds should be locked next because they have enough evidence accumulating.
4. Emit a markdown report ranking the top 20 by frequency, with a "suggested next ingest priority" section for Karen.

**Anchors:** Part 8 (ingest workflows—this informs priority tiers P1-P5); Part 9 (synthesis—identifies which thin cells are source-thin vs other blockers); Part 11 (priority ordering). Maps to the gap_driven_wishlist signal in the snapshot.

---

- [ ] **2026-05-18** — see proposal below

### Ingest gap-driven query signals to prioritize evidence backlog

**What:** Parse the 600 unmatched Ask-the-Index queries to identify which ingredient/metal/product cells the market is actually asking about, then auto-generate an ingest priority queue ranked by question frequency.

**Why this lever now:** The snapshot shows 302 pool_blocked_cells (zero evidence) and 45 pool_too_thin (unstable), while 6 infant-formula product stubs have 0–2 sources. Simultaneously, 600 gap_driven_wishlist_queries represent real demand signals showing where ingesting papers would yield the highest FAQ volume. Data-driven prioritization replaces guesswork and accelerates synthesis on the most-asked cells.

**Where:**
- `data/evidence/gap_driven_wishlist_queries.jsonl` (input query log)
- `tools/autonomy/analyze-query-gaps.mjs` (new script: query → cell mapping)
- `data/evidence/ingest-priority-queue.csv` (output: (ingredient, metal, product) triples ranked by query count)

**How:**
1. Parse each unmatched query to extract the ingredient/metal/product/regulation cells it's asking about (route by keyword match + LLM slot-fill as fallback).
2. Aggregate frequency per (ingredient, metal) pair and (product, metal) pair.
3. Emit `ingest-priority-queue.csv` ranked by frequency descending.
4. Wire into the autonomy loop: future gap-driven ingest phases target the top unmet cells first.

**Anchors:** Part 9 (synthesis gates on evidence density), Part 11 (priority ordering), Part 1 (epistemic asymmetry requires _completeness_), memory [[feedback_data_driven_not_subjective]]

---

- [ ] **2026-05-18** — see proposal below

### Mine gap-wishlist queries to surface thin-cell evidence gaps

**What:** Extract search terms from the 600 gap-driven-wishlist queries, map them to thin-cell (ingredient, metal, matrix) combinations, and output a ranked list of queries to feed to Manual Fetch so the autonomy loop knows which papers would unblock the 6 infant-formula scaffolds (0–2 sources each) and 302 blocked cells.

**Why this lever now:** The corpus has 302 pool-blocked cells that cannot yet generate HMT&C standards, and 6 high-priority infant-product scaffolds starving with 0–2 sources. The gap-wishlist (600 user queries) directly encodes what literature is missing. Bridging them means the next autonomous ingest batch can target high-impact evidence gaps rather than sampling from Manual Fetch blindly. Unblocking 20% of pool-blocked cells would enable 60+ new standards to be set.

**Where:**
- Input: `data/evidence/gap_driven_wishlist_queries.csv` (the 600 queries)
- Output: `data/evidence/autonomy/thin-cell-evidence-gaps.csv` (queries ranked by cell impact)
- Script: `tools/autonomy/map-wishlist-to-thin-cells.mjs` (new)

**How:**
1. Parse each of the 600 wishlist queries for (ingredient, metal, product-category) signals using the existing slug index and regex.
2. Cross-reference each inferred tuple against `data/evidence/product_source_routing_audit.csv` to find cells with source_count ≤ 2.
3. Emit a CSV: `query_term | inferred_ingredient | inferred_metal | product_category | current_source_count | query_frequency | suggested_search_strings`.
4. Hand the ranked output to Manual Fetch curator or query-to-DOI lookup tool to prioritize next batch by evidence impact.

**Anchors:** CLAUDE.md Part 5b (routing as system responsibility), Part 9 (synthesis trigger: "contradiction trigger" and cell population), Part 11 (priority ordering). This is deterministic source-gap discovery, not hand-curation.

---

- [ ] **2026-05-19** — see proposal below

### Unblock 302 pool-cells by extraction audit

**What:** Create `tools/autonomy/audit-blocked-pool-sources.mjs` to identify sources routed to pool-blocked or pool-too-thin (ingredient, metal) cells that either have missing quantitative extractions or contradictory values within the same source.

**Why this lever now:** The snapshot shows 302 pool-blocked and 45 pool-too-thin cells, yet only 557/970 sources (57%) have structured values extracted. Many sources are routed to cells that cannot pool because their quantitative data was never parsed or flagged as contradictory. This is a pure execution bottleneck — the evidence is already ingested; it just needs targeted re-extraction and contradiction-flagging.

**Where:** 
- New script: `tools/autonomy/audit-blocked-pool-sources.mjs`
- Output: `data/evidence/autonomy/blocked-pool-extraction-audit-2026-05-19.csv` (columns: ingredient slug, metal, routed_sources, extraction_status per source, contradiction_flags)
- Governance note in `data/evidence/autonomy/` summarizing which cells are blocked due to missing-data vs. incomparable-values vs. extraction-failure

**How:**
1. Read the routing audit and identify all (ingredient, metal) cells with status `in_progress` or `populated` that have blocking flags
2. For each routed source, check whether it has an entry in `data/evidence/structured-values/` for that (ingredient, metal) pair
3. For sources with existing entries, check for internal contradictions (e.g., same study reports both 2.3 ppb and 8.1 ppb for the same analyte/matrix)
4. Emit the gap report ranked by frequency (cells with most routed-but-unextracted sources first)

**Anchors:** Part 9 (Synthesis requires quantitative pooling), Part 18 (Lint should flag provenance gaps), Part 19 (HMT&C standards derive from percentile pools).

---

- [ ] **2026-05-19** — see proposal below

### Source the infant-food-puree variants from gap-driven queries

**What:** Query the gap_driven_wishlist (600 queries) to identify candidate sources for the eight infant-food-puree variants (puree, fish, fruit, mixed-meat, poultry, vegetable) that were auto-scaffolded with zero sources, then run targeted ingest on top matches to bootstrap those stubs above the source threshold.

**Why this lever now:** The top 10 pending category locks are dominated by infant-food-purees with zero sources (8 of 10 are puree variants). These scaffolds cannot graduate to locked HMTc rows without evidence. The gap_driven_wishlist represents user questions the system couldn't answer—many of these queries likely target exactly these variants. Matching gap queries to sources turns dead scaffolds into routed evidence in a single pass.

**Where:** 
- `data/evidence/gap-driven-wishlist.csv` (600 queries, intersection with "infant food" and "puree" keywords)
- Query job output → candidate sources list
- `tools/autonomy/query-to-sources.mjs` (new script or enhancement to existing query runner)
- `wiki/products/infant-food-puree*.md` (eight target pages)

**How:**
1. Extract queries from gap_driven_wishlist that mention puree, fruit, fish, vegetable, poultry, or meat in infant-food context.
2. For each query cluster, run PubMed search to identify A-tier and B-tier sources that directly answer it.
3. Rank candidate sources by coverage (how many puree variants and how many gap queries each source would resolve).
4. Ingest top 10–15 sources; routing audit auto-fans them to the eight puree variants.
5. Once each variant has ≥2 sources, flag for Step 0 Lock eligibility in `audit-pending-locks.mjs` output.

**Anchors:** CLAUDE.md Part 8 (query-driven ingest workflow), Part 11 (infant foods are P1 priority), Part 10 (scaffolds needing sources). Memory: order-of-operations Phase 3 (bootstrap thin categories). Closes the gap between provisional scaffolds and locked rows.

---

- [ ] **2026-05-19** — see proposal below

### Prioritize query-workflow ingest for high-demand thin cells

**What:** create `tools/autonomy/rank-thin-cells-by-demand.mjs` to intersect gap-driven-wishlist.csv with the 45 pool_too_thin cells, rank by query volume, and emit a prioritized search brief for the query-ingest workflow.

**Why this lever now:** 600 gap-driven queries are unmet demand; pool_too_thin = 45 cells are stuck at 1–2 sources (below synthesis confidence threshold); the top 10 cells likely concentrate 60%+ of demand. The query workflow (CLAUDE.md Part 8) is designed to source papers for specific gaps—it just needs demand-driven prioritization instead of ad-hoc ordering.

**Where:**
- `tools/autonomy/rank-thin-cells-by-demand.mjs` (new) — reads gap-driven-wishlist.csv and synthesis audit; ranks thin cells by query volume
- `data/evidence/gap-driven-wishlist.csv` (read-only) — source of market-demand signal
- `data/evidence/query-workflow-priority.csv` (new output) — top 10 thin cells ranked by query count, with search brief (analytes, matrices, date range, target n_sources=3+) for each

**How:**
1. Parse gap-driven-wishlist.csv; aggregate query count by (ingredient, metal) pair.
2. Load pool_too_thin cell list from the synthesis-readiness audit.
3. Inner-join; compute total query volume per thin cell.
4. Sort by volume descending; select top 10.
5. Emit to query-workflow-priority.csv with search parameters for each cell.

**Anchors:** CLAUDE.md Part 8 (query workflow), Part 9 (synthesis thresholds: 2+ sources to initialize, 3+ for confidence), Part 11 (priority ordering), autonomy-prioritization layer.

---

- [ ] **2026-05-19** — see proposal below

### Audit routed sources missing structured-value extraction

**What:** Create `tools/autonomy/audit-routed-sources-missing-values.mjs` to identify all sources routed to pool-blocked cells and output a prioritized extraction queue ranked by cell-impact and source-tier, surfacing why structured values are absent.

**Why this lever now:** 306 pool_blocked_cells represent routed sources that cannot synthesize because their metal values (typical_ppb, p95_ppb, n) are missing from the evidence register. The 43% extraction rate (557/986 sources) suggests systematic ingest coverage gaps, not random defects. Auditing which routed sources lack values unblocks synthesis directly and surfaces extraction schema mismatches before they accumulate further.

**Where:**
- New script: `tools/autonomy/audit-routed-sources-missing-values.mjs`
- Output: `data/evidence/autonomy/missing-extracted-values-<date>.json` (one row per [source, target_cell] pair, ranked by number_of_blocked_cells × evidence_tier)
- Report rows: cite_key, target_cell, routed_metal_count, extracted_metal_count, evidence_tier, reason_missing (never_attempted | schema_mismatch | source_type_uncovered | manual_only)
- Include in morning-report manifest (`data/evidence/autonomy/`)

**How:**
1. Read routing audit to enumerate all (source, target_cell, route_kind) triples
2. For each source, query evidence register: count metals with extracted values vs metals the cell requires
3. For sources with routed cells but <100% extracted metals: classify reason and compute impact (how many cells waiting on this source)
4. Rank descending by (cells_blocked × evidence_tier), emit queue
5. Backfill the script into the prebuild pipeline so the queue regenerates after each ingest

**Anchors:** CLAUDE.md Part 4 (deterministic extraction belongs first in evidence register), Part 5b (sources must leave structured traces or explicit gap records), Part 9 (synthesis reads values from evidence layer). This audit surfaces the exact blocking condition and feeds either re-extraction or schema-gap resolution.

---

- [ ] **2026-05-19** — see proposal below

### Rank gap-driven wishlist by thin-cell-recovery potential

**What:** Create a tool that maps the 600 gap-driven wishlist queries to the 45 pool-too-thin cells (sources-per-cell < 2), then ranks wishlist queries by "how many thin cells would this query push over the synthesis threshold."

**Why this lever now:** 45 cells are blocked from synthesis by insufficient source count. The gap-driven wishlist has 600 candidate queries waiting to be executed. Right now there's no signal showing which queries would most efficiently unblock the thin cells. This creates a choose-your-own-adventure problem for the next ingest daemon tick. Ranking the wishlist by recovery impact would let the daemon execute the 10–20 highest-impact queries and systematically push thin cells toward synthesis-readiness.

**Where:** 
- Create `tools/autonomy/rank-wishlist-by-cell-impact.mjs`
- Read `data/evidence/autonomy/gap-driven-wishlist-2026-05-19.md` (infer target ingredient/metal from query text via keyword extraction)
- Read routing audit + ingredient page contamination_profile states to identify which cells have < 2 sources
- Output `data/evidence/autonomy/wishlist-execution-priority-2026-05-19.csv` with columns: query_text, target_ingredient, target_metal, thin_cells_unblocked_if_executed, rank

**How:**
1. Parse each wishlist query for ingredient and metal keywords (e.g., "arsenic rice infant" → ingredient:rice, metal:iAs)
2. Count how many pool-too-thin cells each query would feed (add 1+ sources to)
3. Rank by cell-recovery count descending
4. Emit the ranked list as CSV + log to autonomy report

**Anchors:** Part 9 (synthesis triggered at 2+ sources), Part 11 (priority ordering), and the autonomy architecture (deterministic extraction + audit → ranked queue)

---

- [ ] **2026-05-19** — see proposal below

### Generate wishlist-to-raw prospecting manifest

**What:** Build a deterministic prospector (`tools/autonomy/build-wishlist-prospecting-manifest.mjs`) that reads the 600 gap-driven wishlist queries, searches `raw/` for papers touching those (ingredient, metal) pairs, cross-references ingested sources, and emits a ranked manifest of prospecting hits ordered by pool-cell impact.

**Why this lever now:** The snapshot shows 305 pool_blocked_cells (the standards-setting blocker) and 600 gap-driven_wishlist_queries (the prioritized gaps to fill). Right now, the pathway from "we know what we need" to "here's what to ingest next" is manual. A prospecting manifest closes that gap and turns the wishlist into an executable ingest queue, feeding the next batch.

**Where:** 
- Input: `data/evidence/autonomy/gap-driven-wishlist.csv` (600 rows)
- Input: `raw/` directory (all available source PDFs/markdown)
- Input: `wiki/sources/*.md` frontmatter (cite_keys, to exclude already-ingested)
- Output: `data/evidence/autonomy/wishlist-prospecting-manifest.csv` with columns: `ingredient`, `metal`, `raw_file`, `wishlist_gap_count_filled`, `priority_rank`
- Script: `tools/autonomy/build-wishlist-prospecting-manifest.mjs`

**How:**
1. Read `gap-driven-wishlist.csv`; extract (ingredient, metal) tuples; count how many cells each tuple represents.
2. Grep `raw/` filenames and Marker-converted markdown for mentions of ingredient + metal keywords (fuzzy match on ingredient synonyms; exact on metal symbols: Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U).
3. For each prospecting hit, read its frontmatter cite_key; cross-reference `wiki/sources/*/frontmatter` to exclude already-ingested files.
4. Rank hits by: number of wishlist cells they'd fill (descending), then by source tier (A > B > C), then by recency.
5. Emit manifest as CSV with a `-- ingestible_next` header comment listing the top 20 for the next batch.

**Anchors:** CLAUDE.md Part 9 (Synthesis triggers — cells stay `pending` until sources routed), Part 11 (Priority ordering — prospecting manifest becomes the P-tier input), Part 5b (Routing audit as the automation linchpin — this tool feeds routing discipline by identifying what sources to route next).

---

- [ ] **2026-05-19** — see proposal below

### Build pool-blocks audit and triage

**What:** Create `tools/autonomy/audit-pool-blocks.mjs` that reads the standards workbench pool state and routing audit, identifies which of the 305 blocked cells have a resolvable root cause (basis conversion, metadata gap, tier mismatch, source contradiction), assigns each a resolution path, and outputs `data/evidence/autonomy/pool-blocks-triage-<YYYY-MM-DD>.csv` prioritized by (sources_routed × impact) so autonomy steps or Karen can unblock high-leverage cells first.

**Why this lever now:** The 305 pool_blocked_cells are the single largest friction point between the corpus and publishable HMT&C standards. Per CLAUDE.md Part 19, the locked methodology is sound; the barrier is visibility into *why* cells cannot pool. Naming blocking reasons and resolution paths converts a backlog into actionable work, unblocks the threshold-setting machinery, and feeds deterministic path fixes (basis conversion, metadata extraction) back to autonomy. This multiplies the wiki's downstream usability.

**Where:** 
- Create `tools/autonomy/audit-pool-blocks.mjs` 
- Output: `data/evidence/autonomy/pool-blocks-triage-<YYYY-MM-DD>.csv` with columns: `cell_id | product_slug | metal | blocking_reason | source_count | resolution_path | priority_rank | actionable_by`
- Read: `data/evidence/product_source_routing_audit.csv`, source frontmatter via `wiki/sources/`, and (once workbench pool state is exposable) the standards-workbench pool register
- Blocking reason taxonomy: `basis_conflict`, `tier_mismatch`, `metadata_gap`, `contradiction`, `statistical_instability`
- Resolution path taxonomy: `auto_convert_basis`, `manual_review_contradiction`, `extract_missing_metadata`, `re_tier_after_qa`, `escalate_to_karen`

**How:**
1. Read `docs/standards-methodology.md` pool admission rules and basis-conversion lookup (in `tools/evidence/basis-conversion.mjs`) to define what "valid pool" means
2. For each blocked cell, walk its contributing sources; match each source to its wiki page; extract `evidence_tier`, `basis`, required analyte/statistic metadata
3. Classify blocks: basis mismatch against row's native basis → `basis_conflict`; source tier + pool-composition rule → `tier_mismatch`; missing cite_key or analyte → `metadata_gap`; P>2x disagreement between A-tier sources → `contradiction`
4. Assign resolution paths and priority; write triage CSV; surface in morning report

**Anchors:** CLAUDE.md Part 19 (pool methodology is locked; audit executes it), Part 5b (routing audit is the upstream input), Part 18 (lint extends into standards-derivation layer), docs/standards-methodology.md (pool admission rules)

---

- [ ] **2026-05-19** — see proposal below

### Map gap-driven wishlist queries to blocked synthesis targets

**What:** Parse the 600 gap-driven-wishlist queries, extract their ingredient/metal targets, and create a ranked ingest queue that shows which queries would unblock the most synthesis tasks (the 315 `pool_blocked_cells` and 44 `pool_too_thin` cells).

**Why this lever now:** The 315 blocked cells are the wiki's synthesis bottleneck — they're contamination-profile sub-blocks stuck at n_studies<2 with zero pooled estimates. The 600 gap-driven queries are concrete research leads that could unlock these cells, but they're currently a flat list with no prioritization against the wiki's actual gaps. Mapping the two together creates an actionable ingest queue that shows Karen exactly which queries would unblock synthesis on which ingredients, with downstream impact (how many product pages depend on each ingredient). This turns scattered research suggestions into a targeted unblocking strategy.

**Where:** 
- Input: `data/evidence/gap-driven-wishlist-2026-05-19.md` (600 queries)
- Output: `data/evidence/prioritized-ingest-queue-2026-05-19.md`
- Script: `tools/evidence/map-wishlist-to-blocked-cells.mjs` (new)

**How:**
1. Parse gap-driven-wishlist queries and extract (ingredient, metal, species) targets from each query text/metadata.
2. Cross-reference each target against `wiki/ingredients/*.md` frontmatter to find current n_studies and status for each (ingredient, metal) cell.
3. Rank queries by impact: cells that are `pool_blocked_cells` (n_studies=0–1) score highest; `pool_too_thin` (n_studies=2) score second; stable cells (n_studies≥4) score lowest.
4. For each ingredient, count downstream impact: how many product pages reference it in their `contributing_ingredients` or source routing.
5. Emit a markdown report showing: query rank, target cell, current n_studies, estimated sources-needed-to-stabilize, downstream impact, and a projection ("top 50 queries → unblock 147 cells + stabilize 58 thin cells").

**Anchors:** Part 9 (synthesis triggers, n_studies thresholds); Part 5b (routing layer, fan-out to product pages); docs/order-of-operations.md (Phase 4: synthesis readiness); feedback_no_implication_lists (execute the data mapping, not just suggest it).

---

- [ ] **2026-05-19** — see proposal below

### Rank gap-driven queries by pending-product impact

**What:** Create an audit report that ranks the 600 gap-driven-wishlist queries by how many pool-blocked cells they would unblock, prioritized by the pending product scaffolds with the most routed sources.

**Why this lever now:** 325 pool_blocked_cells (ingredient-metal pairs with <2 sources) block all synthesis and HMT&C standard-setting per Part 9. The autonomy loop already generated 600 specific gap-driven queries (visible in `data/evidence/autonomy/gap-driven-wishlist.csv`), but they lack prioritization. Focusing query-ingest on queries that directly unblock the top pending categories—especially infant-formula-dairy (6 routed sources, governance-ready for Step 0 Lock) and baby-food (2 sources)—would convert the hardest-blocked cells into thin-but-poolable cells, unblocking synthesis for at least the highest-impact products first.

**Where:**
- New audit: `tools/autonomy/rank-gap-queries-by-pending-product.mjs`
- Input: `data/evidence/autonomy/gap-driven-wishlist.csv` + `data/evidence/product_source_routing_audit.csv` + `wiki/products/*/` frontmatter
- Output: `data/evidence/autonomy/gap-query-prioritization-ranked.csv` (columns: query | target_ingredient | target_metal | target_product_slug | routed_sources_in_product | pool_status | impact_rank)

**How:**
1. Load all pending-lock products sorted by `routed_sources` descending (infant-formula-dairy → biscuits)
2. For each product, extract declared ingredients from its scaffold frontmatter
3. For each ingredient, identify pool-blocked cells (0–1 sources) via routing audit
4. Cross-match gap-queries to those cells; score by product-source-count and cell-criticality
5. Sort descending by impact_rank and emit ranked CSV for query-ingest orchestration

**Anchors:** CLAUDE.md Part 9 (synthesis requires ≥2 sources per cell), Part 19 (pooling unblocks HMT&C standard math), Part 10 (pending-lock scaffolds are governance gates), order-of-operations.md Phase 2–3 (query-ingest follows gap identification)

---

- [ ] **2026-05-19** — see proposal below

### Audit pool-blocked cells to prioritize the ingest queue

**What:** Build `tools/autonomy/audit-pool-blocked-cells.mjs` to categorize each of the 326 blocked ingredient/metal cells by root cause (0 sources | 1 source + specific missing analyte | awaiting product Step 0 Lock | source frontmatter incomplete), emit structured CSV, and recommend targeted fixes.

**Why this lever now:** The snapshot shows 326 cells cannot be synthesized, but the breakdown is opaque. Each root cause demands a different action: thin cells need specific papers (ingest task), locked products need governance (Karen task), incomplete frontmatter needs correction (audit task). Without the breakdown, the ingest queue is unfocused. The 600 gap-driven queries exist; we need to know which ones unblock the most cells.

**Where:** 
- New tool: `tools/autonomy/audit-pool-blocked-cells.mjs`
- Output: `data/evidence/autonomy/pool-blocked-cells-audit-<YYYY-MM-DD>.csv` with columns: `ingredient_slug | metal | current_status | source_count | root_cause | recommendation | gap_query_match`
- Morning report log: `data/evidence/autonomy/morning-report-<YYYY-MM-DD>.md` includes summary table

**How:**
1. Query wiki state: for each ingredient and metal, count routed sources from `product_source_routing_audit.csv` and fetch frontmatter from contributing source pages.
2. Classify each cell: `0_sources` | `1_source_missing_<analyte>` | `incomplete_source_frontmatter` | `awaiting_product_lock_<product_slug>` | `populated_confidence_low` (edge case).
3. Emit CSV with recommendation column: e.g., "add Cd data to song2024 source" or "lock infant-formula-dairy Step 0 before synthesis" or "search wishlist for Ni in baby-food-puree sources."
4. Surface top 20 by fix-impact: which single paper or one-step governance action would unblock the most cells.

**Anchors:** CLAUDE.md Part 9 (synthesis trigger conditions: cells move from pending to populated with 2 sources); Part 5b (routing layer connects evidence to synthesis); Part 18 (lint fails on mixed-coverage cells, which this audit operationalizes).

---

- [ ] **2026-05-19** — see proposal below

### Rank pool_too_thin cells by wishlist query density

**What:** Cross-reference the 600 gap-driven wishlist queries against the 45 under-pooled cells to identify which (ingredient, metal) pairs have user demand but are blocked at n=1 source, then emit a prioritized source-acquisition manifest.

**Why this lever now:** 45 cells are stuck at n=1 waiting for a second source to trigger synthesis (Part 9). Meanwhile, 600 wishlist queries signal user demand for content — many likely on these same bottleneck cells. Mapping demand to blocking conditions reveals which cells to prioritize for targeted source acquisition, turning the wishlist from a diagnostic into a ranked ingest roadmap.

**Where:**
- Input: `data/evidence/autonomy/gap-driven-wishlist-2026-05-19.csv` (600 queries)
- Input: `data/evidence/autonomy/pool-too-thin-cells-2026-05-19.csv` (45 cells at n=1)
- New script: `tools/autonomy/rank-wishlist-blocking-cells.mjs`
- Output: `data/evidence/autonomy/wishlist-driven-ingest-manifest-2026-05-20.md`

**How:**
1. Parse the wishlist CSV to extract (ingredient, metal) pairs mentioned in each query
2. Count query frequency per pair
3. Intersect with the 45 pool_too_thin cells
4. Rank by query count descending
5. For top-20, emit: ingredient slug | metal | current sources (n=1) | query frequency | search keywords from wishlist

**Anchors:** CLAUDE.md Part 11 (priority ordering), Part 9 (synthesis gating at n=2), Part 18 (pool_too_thin audit). Supplies ranked input to future bulk-ingest campaigns.

---

- [ ] **2026-05-19** — see proposal below

### Create pool-blocked root-cause audit

**What:** Build a deterministic audit that categorizes each of the 351 pool_blocked_cells by root blocker (missing structured values, insufficient tier, basis mismatch, routing unresolved, etc.), ranks by impact, and emits a prioritized recovery roadmap.

**Why this lever now:** The 351 blocked cells represent evidence trapped downstream of synthesis—they have routed sources but cannot form pools. Without visibility into the breakdown by reason, the autonomy loop cannot allocate extraction work strategically. The audit will answer: do 20 structured-value extractions unblock 80 cells, or is the constraint elsewhere (basis conversion, insufficient tier, routing gaps)?

**Where:**
- New script: `tools/autonomy/audit-pool-blocked-root-causes.mjs`
- Output: `data/evidence/autonomy/pool-blocked-analysis-<date>.md` 
- Ranked summary showing "extract from N sources in category X → unblocks M cells"

**How:**
1. For each of 351 blocked (ingredient, metal) cells, list contributing sources via routing audit
2. Per source: check structured-value completion, evidence tier, basis/matrix/species compatibility
3. Classify the primary blocker (missing_extraction, insufficient_tier, basis_mismatch, matrix_mismatch, routing_unresolved)
4. Group by blocker type, count cells per type, sort by leverage
5. Output a ranked to-do: "Fix source extraction in category X (20 sources) → unlocks 47 cells" etc.

**Anchors:** CLAUDE.md Part 9 (synthesis triggering preconditions), Part 18 (lint-audit pattern), Part 19 (synthesis feeds threshold-setting). Similar architecture to existing `audit-pending-locks.mjs` (Part 10).

---

- [ ] **2026-05-20** — see proposal below

### Emit structured synthesis-block diagnostics to unblock pooling

**What:** Extend the contamination-profile pooling script to emit `data/evidence/synthesis-blocks-audit.csv` — a diagnostic register naming the specific reason each of the 351 blocked cells cannot compute distributions (contradiction, outlier-driven instability, species mismatch, unit-conversion ambiguity, sample-size underflow, etc.).

**Why this lever now:** `pool_blocked_cells: 351` is the largest quality bottleneck in the snapshot, but the blocking reasons are invisible. Without diagnostics, future synthesis passes can't prioritize which blocks to resolve first. The 557 structured values extracted exist; the pooling step knows why it rejects them; that knowledge isn't being captured as a signal for downstream work.

**Where:** 
- `tools/evidence/build-contamination-profile-pooling.mjs` — extend to emit reason codes (e.g., `contradiction`, `outlier_p97_unstable`, `species_mismatch_iAs_vs_tAs`, `unit_basis_ambiguous`, `n_studies_<3`, `censor_rate_>90pct`)
- `data/evidence/synthesis-blocks-audit.csv` — new structured log: `[ingredient_slug, metal, reason_code, contributing_source_cite_keys, notes]`
- `tools/audit-synthesis-blocks.mjs` — new audit script that ranks blocks by impact (product frequency, citation count, coverage-rule violations)

**How:**
1. Add reason-code emit to pooling script; categorize every reject into one of ~12 common block reasons.
2. Run the audit script as part of the morning report to surface which blocks affect the most product pages or source density.
3. Feed the ranked block list into Part 9's synthesis orchestrator so future passes tackle high-impact blocks first (e.g., contradictions in top 10 products before low-frequency ingredient outliers).
4. Add a lint rule: if `synthesis-blocks-audit.csv` is stale (older than any source-page modification), fail the build.

**Anchors:** [[CLAUDE.md Part 9]] (synthesis workflow, trigger conditions), routing-audit pattern, Part 18 (lint layer), `data/evidence/` deterministic-extraction discipline.

---

- [ ] **2026-05-20** — see proposal below

### Route gap-driven-wishlist queries into synthesis prioritization

**What:** Build `tools/autonomy/audit-wishlist-coverage.mjs` to parse the 600 gap-driven-wishlist queries into (ingredient, metal) demand signals, then identify synthesis-backlog cells where demand exceeds evidence.

**Why this lever now:** Gap-driven-wishlist is 600 queries — a structured demand signal that currently sits orphaned while synthesis runs reactively (new evidence, contradictions, Karen's ask). The wishlist represents what users *want* the wiki to answer. Routing that signal into the synthesis queue focuses evidence work on visible gaps and closes the loop between customer need and knowledge work.

**Where:** 
- Create `tools/autonomy/audit-wishlist-coverage.mjs` 
- Emit `data/evidence/wishlist-synthesis-backlog.csv` (cells where demand > sources AND synthesis is blocked by <2 sources)
- Emit `data/evidence/wishlist-source-gaps.csv` (cells where demand > 0 BUT sources = 0, prioritized for source acquisition)
- Wire into daily cron via existing daemon

**How:**
1. Parse `data/evidence/autonomy/gap-driven-wishlist.csv` to extract ingredient + metal pairs and query frequency
2. Cross-reference routing audit's `product_source_routing_audit.csv` to count sources per (ingredient, metal) cell
3. Rank cells by (query_count / source_count) — high demand, low coverage first
4. Filter for synthesis-backlog: cells with 1 source (next source triggers synthesis) or cells at n_studies boundaries where demand is high enough to justify full re-synthesis

**Anchors:** CLAUDE.md Part 9 (synthesis triggers expand to include demand signal), Part 24 (proactive maintenance: call out weak spots), Part 11 (source priority ordering).

---

- [ ] **2026-05-20** — see proposal below

### Parse gap-driven wishlist into structured ingest priorities

**What:** Extract the 600 gap-driven queries into a ranked CSV of (ingredient, metal) pairs by frequency, then create `data/evidence/ingest-priority-from-gaps.csv` so autonomy workflows know which thin cells to fill first.

**Why this lever now:** The 600 gap-driven queries represent structured, literature-derived demand for sources that don't yet exist in the corpus. Parsing them into ranked (ingredient, metal) pairs would convert this latent signal into executable priorities, directly addressing the 44 pool-too-thin cells and reducing the 351 blocked cells by focusing future ingests on high-impact gaps instead of guessing what to ingest next.

**Where:**
- Input: `data/evidence/gap-driven-wishlist.csv` (the 600 queries)
- New script: `tools/autonomy/parse-gap-wishlist.mjs`
- Output: `data/evidence/ingest-priority-from-gaps.csv` (ranked by frequency)
- Docs: `docs/ingest-workflows.md` (Priority ordering section updated to reference it)

**How:**
1. Build `parse-gap-wishlist.mjs` to parse each query, extract the (ingredient, metal) pair it targets, and count frequencies across all 600 queries
2. Emit `ingest-priority-from-gaps.csv` with columns: `ingredient_slug`, `metal_symbol`, `query_count`, `current_n_studies`, `synthesis_target` (e.g., 4), sorted by `query_count` descending
3. Update the Priority ordering section in `docs/ingest-workflows.md` to note that P1 slots should bias toward (ingredient, metal) pairs with the highest query_count from this CSV
4. Run the parser as a post-lint autonomy step so priorities stay current as the corpus grows

**Anchors:** Part 9 (synthesis triggers), Part 11 (priority ordering), Part 24 (proactive maintenance). Signals corpus maturity: the wishlist is structured enough to extract actionable guidance.

---

- [ ] **2026-05-20** — see proposal below

### Build deterministic cell-value extraction from routed sources

**What:** Create `tools/evidence/extract-cell-values.mjs` that reads the routing audit, identifies all sources routed to each (ingredient, metal) cell, extracts quantitative statistics (`typical_ppb`, `p95_ppb`, `confidence`, study-type distribution) from source-page structured data, and emits `data/evidence/cell-values-registry.jsonl` as the synthesis workflow's input layer.

**Why this lever now:** 351 cells are blocked because evidence exists but structured values are not systematically extracted. The routing audit identifies which sources belong in each cell, but there's no deterministic pipeline pulling statistics from those sources into a form that triggers synthesis (Part 9). This extraction layer is what separates the routing tier from the synthesis tier and unblocks the largest weakness in the snapshot.

**Where:** 
- New script: `tools/evidence/extract-cell-values.mjs`
- Input: `data/evidence/product_source_routing_audit.csv` (source → cell routing) + `wiki/sources/*.md` (structured frontmatter)
- Output: `data/evidence/cell-values-registry.jsonl` (one record per source-cell pair with extracted stats)
- Audit: `tools/evidence/audit-extraction-completeness.mjs` (flags sources declaring a metal but with no quantitative data)

**How:**
1. For each row in the routing audit, match the source file from `wiki/sources/` and parse frontmatter + body tables.
2. Extract `typical_ppb`, `p95_ppb`, `n_studies`, `study_types` from the source's `contamination_profile` blocks (if populated) or compute from raw data if listed.
3. Write extraction records with source cite-key, target cell (ingredient slug + metal), and extracted values.
4. Wire the script into the prebuild pipeline so synthesis can read up-to-date values whenever a new source is routed.

**Anchors:** CLAUDE.md Part 5b (routing is deterministic input), Part 9 (synthesis triggered by routing + values), Part 4 (AI adjudication default), Part 18 (provenance lint requires traceable values).

---

- [ ] **2026-05-20** — see proposal below

### Resolve routing_unresolved by auto-creating missing pages

**What:** Process the 10 entries in `data/evidence/routing_unresolved.csv`, classify each as a product/ingredient slug that needs a page, auto-create those pages via `create-provisional-product-scaffold.mjs` and `create-provisional-ingredient-scaffold.mjs`, and re-run the routing audit to clear the failure.

**Why this lever now:** These 10 entries block the routing audit (a build-time failure per Part 18) and strand sources that have already been ingested. They represent mid-pipeline gaps where sources declared target pages that were never created. Clearing them unblocks synthesis on 10+ product categories and restores the routing audit to clean.

**Where:**
- `data/evidence/routing_unresolved.csv` (input list)
- `tools/autonomy/create-provisional-product-scaffold.mjs` (for product slugs)
- `tools/autonomy/create-provisional-ingredient-scaffold.mjs` (for ingredient slugs)
- `tools/evidence/build-routing-audit.mjs` (verify)

**How:**
1. Read `routing_unresolved.csv` and classify each unresolved target as product vs. ingredient vs. matrix mismatch.
2. For each product slug, invoke `create-provisional-product-scaffold.mjs` with `--scaffold-only`.
3. For each ingredient slug, invoke `create-provisional-ingredient-scaffold.mjs` with `--scaffold-only`.
4. Re-run `build-routing-audit.mjs`; confirm `routing_unresolved.csv` is now empty.

**Anchors:** Part 10 (auto-creation of pages when sources declare unresolved slugs). Part 18 (routing_unresolved.csv non-empty is a build failure). Part 5b (routing audit is the system's responsibility, not the model's — it should auto-heal). The autonomy loop has the page-creation tools; using them here closes a synchronization gap.

---

- [ ] **2026-05-20** — see proposal below

### Audit pooling blockers to unblock synthesis

**What:** Create `tools/autonomy/audit-pooling-blockers.mjs` that diagnoses why each of the 351 blocked cells cannot form a pool, categorizing them by blocker type (insufficient samples, basis mismatch, missing metadata, sensitivity instability) and emitting a diagnostic CSV with remediation signals.

**Why this lever now:** The 351 pool-blocked cells represent synthesis opportunities that are currently dark — sources exist but cannot contribute to contamination-profile summary statistics or HMTc standard-setting. Categorizing blockers reveals which are fixable in autonomy (metadata corrections, basis-annotation rules) vs. which require new sources (thin-cell hunting) vs. which need statistical review (sensitivity instability). This is the single biggest bottleneck between ingest and threshold-setting.

**Where:** 
- Create: `tools/autonomy/audit-pooling-blockers.mjs`
- Output: `data/evidence/pooling-blockers-diagnostic-<YYYY-MM-DD>.csv`
- Input: contamination_profile sub-blocks from every `wiki/ingredients/*.md` where status != "pending" and n_studies >= 1

**How:**
1. Iterate over every ingredient page's metal sub-blocks; for each with sources but no pooled values, determine the blocker via source count, basis consistency, outlier-sensitivity flags, and metadata completeness checks.
2. Emit diagnostic CSV with columns: ingredient_slug, metal, n_studies, blocker_category, blocker_detail, first_contributing_source.
3. Lint should flag if diagnostic is >5 days old OR if 351 blocked count has changed without diagnostic refresh.
4. Route the CSV to the autonomy morning report so the next cycle prioritizes unblocking: metadata-fixable cells → synthesis run → new-source hunts for thin cells → iterative reduction of blocked count.

**Anchors:** Part 9 (Synthesis triggers), Part 18 (Lint), Part 19 (Pooling methodology). Enables autonomy to drive systematic unblocking rather than blind searching.

---

- [ ] **2026-05-20** — see proposal below

### Map gap-driven queries to synthesis priorities

**What:** Parse the 600 gap-driven-wishlist queries to identify which (ingredient, metal) cells have real user demand, then generate a ranked synthesis-priority list for cells that are currently thin or unsynthesized.

**Why this lever now:** The gap-driven-wishlist is direct user signal of what users are looking for. Right now that signal informs ingest triage but not synthesis scheduling. Synthesis currently runs on fixed triggers (n_studies doubled, new source contradicts prior, etc.) and Karen's explicit requests. The 600 queries are a golden source of *demand-driven* prioritization — synthesis passes should flow toward the cells users are actually trying to learn about, not just wherever new evidence lands. This raises both the public app's usefulness and the wiki's utility as the canonical reference.

**Where:** 
- Source: `data/evidence/gap-driven-wishlist.csv` (600 rows from daemon logs)
- Generator script: `tools/autonomy/synthesize-gap-driven-priorities.mjs` (new)
- Output: `data/evidence/autonomy/synthesis-targets-by-user-demand-<YYYY-MM-DD>.csv` 
- Frontmatter target: add `synthesis_demand_score: <float>` to ingredient pages for ranking

**How:**
1. Parse the 600 gap-driven-wishlist rows; extract (ingredient/family, metal/family, product-family) tuples
2. Map each tuple to its wiki cell(s) using the routing audit + ingredient-page index
3. For each cell, read current synthesis status and `n_studies` count
4. Rank cells by: (user_query_frequency DESC, confidence ASC) — high-demand, low-confidence cells float to top
5. Generate the CSV with synthesis target slug, demand score, current n_studies, and suggested synthesis mode (initial, incremental, or full-resynthesis)

**Anchors:** Part 9 (synthesis as a workflow, not an ingest step), Part 18 (lint and gap detection), Part 24 (proactive maintenance — this flags weak spots). Also feeds [[ask-the-index-spec]] public-app design: the app's search hits are strongest when the underlying wiki cells are synthesized and current.

---

- [ ] **2026-05-20** — see proposal below

### Resolve 14 routing-unresolved entries

**What:** Audit the 14 sources logged in `data/evidence/routing_unresolved.csv`, categorize each failure (frontmatter error vs. missing product vs. missing ingredient), fix frontmatter directly, scaffold missing targets via `create-provisional-product-scaffold.mjs` or `create-provisional-ingredient-scaffold.mjs`, and re-run `tools/evidence/build-routing-audit.mjs` to confirm resolution.

**Why this lever now:** 14 sources are declaring products or ingredients that don't route to any page, so their evidence is orphaned and invisible to synthesis. This is a hard blocker on routing completeness; resolving these 14 gets to zero unresolved and clears the build-failure condition that lint already catches (CLAUDE.md Part 18: `routing_unresolved.csv` non-empty). With routing clean, the next pooling phase will see complete evidence fan-out.

**Where:**
- Unresolved entries: `data/evidence/routing_unresolved.csv`
- Source pages to fix: `wiki/sources/<cite_key>.md` (frontmatter corrections)
- Scaffold tools: `tools/autonomy/create-provisional-product-scaffold.mjs`, `create-provisional-ingredient-scaffold.mjs`
- Audit re-run: `tools/evidence/build-routing-audit.mjs`

**How:**
1. Read each of the 14 `routing_unresolved.csv` rows; note the declared slug, source cite-key, and reason code
2. For frontmatter-error rows, open the source page and correct the slug (or remove the erroneous field if it was miscopied)
3. For missing-product/missing-ingredient rows, run the appropriate scaffold tool with the target slug
4. Re-run the routing audit; confirm `routing_unresolved.csv` is empty; if not, surface the edge case (likely a routing-audit logic issue)

**Anchors:** CLAUDE.md Part 5b (routing layer must be maintained by system, not by-hand), Part 10 (scaffold-based new-page creation), Part 18 (lint failure: unresolved CSV non-empty)

---

- [ ] **2026-05-20** — see proposal below

### Rank thin-cell synthesis targets by wishlist demand

**What:** Build a tool (`tools/autonomy/rank-thin-cells-by-demand.mjs`) that crosses the 42 pool_too_thin cells (1–2 sources each) with the 600 gap-driven-wishlist queries to identify which (ingredient, metal) pairs would answer the most unanswered questions if populated with one or two additional sources.

**Why this lever now:** The snapshot shows two disconnected signals: 42 synthesis cells too thin to populate, and 600 unanswered questions in the demand corpus. Linking them produces a ranked list for source-finding workflows: "If we find 2 more papers on iAs in rice, we answer 47 wishlist queries and move that cell to populated. If we find 2 more on Pb in spinach, we answer 3." This directs synthesis effort toward actual demand instead of arbitrary order.

**Where:**
- Input: `data/evidence/pool_too_thin.csv`, `data/evidence/gap_driven_wishlist.csv`
- Output: `data/evidence/thin_cells_ranked_by_demand.csv` with columns `ingredient | metal | current_sources | target_sources_needed | answerable_wishlist_queries | top_3_queries`
- Script location: `tools/autonomy/rank-thin-cells-by-demand.mjs`

**How:**
1. Parse both input CSVs; for each thin cell, count how many wishlist queries mention that (ingredient, metal) pair
2. Sort by answerable-queries descending; tie-break by product rows citing the pair
3. Emit ranked list with top 3 queries per cell so Karen or gap-healing can see what gets answered
4. Integrate into morning report as a synthesis-priority rank

**Anchors:** CLAUDE.md Part 9 (synthesis-trigger thresholds), Part 24 (proactive maintenance: "suggest new sources"), order-of-operations playbook (phases 0–5 source-priority ranking).

---
