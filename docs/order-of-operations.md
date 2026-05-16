---
title: "Order of operations — the build efficiency playbook"
type: runbook
audience: [internal, claude]
created: 2026-05-16
noindex: true
---

# Order of operations — the build efficiency playbook

This file exists because the build has been wasting time. A week of ingests (early-to-mid May 2026) produced ~880 source pages but moved heavymetalindex.com forward almost not at all on product-category pages outside Category 1. The work was done; the work did not land. This playbook names every order-of-operations failure that produced that outcome and prescribes the rules that prevent the next one.

The audit that produced this file is summarized in Part 1 below. The prescriptive rules are in Part 2. Part 3 names what must change in policy documents (CLAUDE.md, OPERATING.md) so future sessions inherit these rules; pending Karen's approval, this file is the working source of truth.

This playbook supersedes any guidance in older session reports or batch reports that conflicts with it. CLAUDE.md and OPERATING.md remain authoritative on everything else; this file is operational, not strategic.

## Part 1 — What the audit found

Six failure modes are described below in order of harm. Each is grounded in counts from the routing audit, the mandatory-sections audit, and a sweep of source-page frontmatter on 2026-05-16.

### Failure mode 1 — Sources don't declare `products:` (dominant, accounts for most lost work)

Of 896 source pages in `wiki/sources/`, **687 (77%) have `products: []` in frontmatter**. Of those, **632 have `matrices: [populated]`** with product-shaped slugs (`dark-chocolate`, `infant-formula-powder`, `canned-tuna`, etc.) but failed to translate any of those into `products:` declarations.

This is the dominant cause of stranded ingests. The routing audit (`tools/evidence/build-routing-audit.mjs`) reads the `products:` field. When `products: []`, the routing audit cannot fan the source to any product page, even when the paper is clearly about a product the wiki tracks. Result: product-category pages stay starved while ingredient pages collect the same sources.

Concrete example: `wiki/sources/abt2018-cadmium-lead-cocoa-chocolate-us-market.md` is a 2018 US-market study of Cd and Pb in chocolate. Its frontmatter declares `matrices: [cocoa-powder, dark-chocolate, milk-chocolate, cocoa-nibs]` and `products: []`. As a result, `wiki/products/chocolate.md` (an auto-created stub) has zero routed sources despite the corpus containing at least two A-tier chocolate-product surveys.

### Failure mode 2 — Sources ingested before destination pages exist

The Cat 2 (Children's Personal Care, ages 0-5) Step 0 scaffold script (`tools/autonomy/cat2-step0-scaffold.mjs`, committed 2026-05-15 as `a2ca325`) created 13 new product-row pages. Six of those rows had already received source-page ingests during the preceding two weeks (`5843bf4`, `4ed12b1`, `c57f888`, others). Those sources either declared product slugs that didn't exist (entries in `routing_unresolved.csv`) or skipped the `products:` declaration entirely (back to failure mode 1).

The routing audit on 2026-05-16 reports **135 unresolved entries** in `routing_unresolved.csv`. Each is a source whose frontmatter names a product or ingredient page that does not exist. The "Claude in Obsidian skipped over Cat 2 files" pattern Karen described is the visible surface of this failure mode: the model encountered an unfamiliar product slug, had no destination page to attach to, and either invented an auto-stub (creating governance drift) or moved on without recording the connection.

### Failure mode 3 — No category-level Step 0 Lock before ingest begins

Only three HMTc categories have published Step 0 Lock documents and corresponding scaffolded product pages on 2026-05-16:

| Category | Step 0 Lock date | Scaffolded product rows |
|---|---|---|
| Cat 1 — Infant and child foods | (pre-existing) | 16 |
| Cat 2 — Children's personal care, 0-5 | 2026-04-28 (lock); 2026-05-15 (scaffold) | 17 |
| Cat 5 — Beverages | 2026-05-01 (lock + scaffold) | 17 |

Cats 3, 4, 6, 7, 8 (cosmetics, supplements, dental, cleaning, pet foods, toys, etc.) have neither a Step 0 Lock document nor scaffolded product pages. Any current ingest touching those categories will reproduce failure modes 1 and 2 exactly. Most of the corpus is outside Cats 1, 2, 5; until the remaining categories are locked, the bulk-ingest can do nothing useful for them at the product layer.

### Failure mode 4 — Auto-stub creation without governance lock

The autonomy loop's `create-missing-pages.mjs` script auto-creates stub pages when 2 or more sources reference an unresolved slug. This is useful for ingredients (commodities are not governance items; cassava is cassava) but harmful for products (which are HMTc-row units, governance items, requiring a Step 0 Lock to define scope, variant_type, pair, platform_metals, etc.).

The 2026-05-14 autonomy session auto-created `face-paint.md`, `skin-lightening-cream.md`, and `lipstick.md`. The 2026-05-15 Cat 2 scaffold then had to retire those pages (`baf6597`: "master rewrite + advisory + retired-page redirects + source rerouting") and re-create them with the correct Step 0 frontmatter. The auto-created pages were lateral-damage cleanup; the sources they routed had to be re-routed.

### Failure mode 5 — Mandatory-sections audit exempts stubs, hiding the problem

The mandatory-sections lint (`tools/audit-product-mandatory-sections.mjs`) exempts pages with zero routed sources from the section-completeness check. The intent is sensible: a stub with no sources cannot be expected to have a Levers section. The unintended effect: 36 product pages currently sit in this exempt-stub state, including pages where sources clearly exist in the corpus but never landed because of failure mode 1.

The exempt-stub state masks the routing-starvation problem. The pages pass lint; the build deploys cleanly; the underlying gap is invisible until Karen reads the page on the live site and notices it has nothing on it.

### Failure mode 6 — Autonomy stubs without follow-through synthesis

27 ingredient pages remain in the autonomy-stub state (`data/evidence/autonomy-stubs-pending.csv`): they have routed sources, frontmatter is correct, but the body and `contamination_profile` stay empty because no synthesis pass has run. The orchestrator names this as the `COMPLETE-AUTONOMY-STUBS` action, but the work is expensive (8 mandatory sections per page) and gets deferred under priority pressure. Net effect: the page exists, sources route to it, but it reads as empty when a stakeholder opens it.

### Counts at a glance (2026-05-16)

```
Sources (total):                                          896
Sources with products: []:                                687  (77%)
Sources with products: [] AND populated matrices:         632
Routing audit unresolved (slug names a page that doesn't exist):  135
Routing audit malformed advisory (missing optional fields):       755
Routing audit malformed blocking/strict:                  0
Product pages (total):                                    80
Product pages with zero routed sources (exempt stubs):    36  (45%)
Product pages by hmtc_category locked:                    50 (Cat 1: 16; Cat 2: 17; Cat 5: 17)
Product pages outside any HMTc category lock:             30
Autonomy ingredient stubs pending synthesis:              27
Sources with no_doi_assigned (provenance debt):           92
```

## Part 2 — The order of operations (the rules)

The rules below are sequenced. A higher-numbered phase does not begin in a domain until the lower-numbered phases are complete for that domain. The domain unit is the HMTc category. Within an HMTc category, the work proceeds in this order, every time, without exception.

### Phase 0 — Category Step 0 Lock (Karen-side, blocking gate)

No ingest, no auto-stubbing, no synthesis happens in a category until this phase is complete.

1. Karen authors the Step 0 Lock document for the category. It names the locked N-row taxonomy: slug, title, summary, primary metals of concern, variant_type (clean_benchmark / contamination_platform / whole_row_platform / null), platform_metals, pair relationships, hmtc_row number, hmtc_category number, age_range scope where applicable. The Cat 2 doc (`Category2_Clean_vs_Contaminated_Splits.md`, 2026-04-28) is the reference exemplar.
2. A scaffold script (`tools/autonomy/cat<N>-step0-scaffold.mjs`) reads the lock document and writes the N row pages into `wiki/products/`. The Cat 2 scaffold script is the reference exemplar. The script is idempotent: re-running skips already-scaffolded rows.
3. The category section is added to `wiki/products/index.md` so the rows are navigable.
4. The category master rollup page is written (`wiki/products/<category>-master.md` or the equivalent named slug).
5. Any out-of-scope auto-stubs that pre-exist in `wiki/products/` are retired with a redirect banner pointing to the correct Step 0 row, the master, or `wiki/advisory/<topic>.md` where the topic falls outside the category's scope.
6. Karen commits the scaffold, the index update, the master, and any retirements as one logical change (one commit or one merge).
7. The session verifies: every row exists as a page, every row carries `hmtc_row` + `hmtc_category` + `variant_type` + `pair` + `platform_metals` frontmatter, `wiki/products/index.md` lists the category, the master exists.

Until Phase 0 is complete for a category, treat every source touching that category as **deferred until lock**. The source page can be written (the model has read the paper, it would be wasteful to discard that), but its `products:` field must declare a broad-scope token (per the `broadProductScopes` vocabulary in `tools/evidence/build-routing-audit.mjs`) or be left empty deliberately with a `pending_category_lock: <category-number-or-name>` field in frontmatter so a future routing pass can pick it up after the lock lands.

### Phase 1 — Existing-pages-aware ingest (Claude-side, the load-bearing change)

A source ingest session is not a "read paper and write source page" task in isolation. It is a "read paper, identify which existing wiki pages this paper bears on, and declare those pages in frontmatter" task. The model's deliverable is the source page; the source page's frontmatter is the routing input.

The rules:

1. **Read the existing taxonomy first, every time.** Before writing any source page, the session reads `wiki/products/index.md` and `wiki/ingredients/index.md` (or the equivalent generated indexes), or runs a quick `ls wiki/products/*.md wiki/ingredients/*.md` to know what slugs exist. This list is the valid-target vocabulary for the `products:` and `ingredients:` frontmatter fields.
2. **`products:` field is mandatory for food and personal-care papers.** A paper that measures heavy metals in any food product, personal-care product, dietary supplement, cosmetic, or any matrix that maps to a consumer-product category must declare at least one slug in `products:`. The model selects from the existing taxonomy; if the natural match is a category Karen hasn't locked yet, the source declares a broad-scope token (`infant-formula`, `baby-cereals`, etc., per `broadProductScopes`) or sets `pending_category_lock: <name>` with `products: []` and a note in the source page body. **Empty `products:` with no `pending_category_lock` flag on a food/personal-care paper is a lint failure that blocks the commit.**
3. **`matrices:` must produce `products:` candidates.** When `matrices:` includes a slug that matches an existing product page (case-insensitive, alias-aware), the corresponding product slug must be in `products:`. The reverse-routing tool described in Phase 1.5 enforces this mechanically.
4. **`ingredients:` is independent and unaffected.** Ingredient routing already works; this rule does not change it. Sources may declare both `products:` and `ingredients:` and usually should — a chocolate paper is about the chocolate product *and* the cocoa ingredient.
5. **Broad-scope tokens beat invented slugs.** If the paper measures "infant formula" generally without specifying powdered vs RTF vs soy vs non-soy, declare `products: [infant-formula]` (the broad-scope token), not `products: [infant-formula-powder-non-soy]` (the model guessing a row split). The routing audit's `inheritedProductRoutes` map fans broad scopes out to sibling pages with `route_kind: broad_formula_context`. Overspecifying frontmatter is worse than under-specifying.
6. **Unresolved-slug rule.** If the model is convinced the paper bears on a category that doesn't yet have a Step 0 Lock, the session does not invent a slug and does not auto-create a page. The session adds a one-line note to the batch report: "<source-id> bears on category <N> (cosmetics? supplements? <free text>?); waiting on Step 0 Lock before final product routing." Karen reads the batch report, schedules the next Step 0 Lock, and the routing layer picks the source up after that lock lands.
7. **No model-authored product-page creation.** Auto-stub creation for product pages is OFF. The `create-missing-pages.mjs` script must not write into `wiki/products/`; it may continue writing ingredient stubs (commodities are not governance items, the 5-paper threshold from CLAUDE.md Part 10 governs them). This is a behavior change to the autonomy loop; see Part 3 below for the policy-document update needed.

### Phase 1.5 — Pre-commit reverse-routing fix (mechanical, automatic)

A pre-commit hook (or a `tools/autonomy/reverse-route-products.mjs` script run from the daemon) mechanically backfills `products:` from `matrices:` and the paper's text when the model failed to do it. The rules are intentionally conservative:

- If `matrices:` contains a slug that exactly matches an existing product page slug (or an alias on that page), add the product slug to `products:` if not already there.
- If the paper's title or H1 names a product token that maps to an existing page (case-insensitive substring match against `wiki/products/*.md` slugs), surface it as a `routing_unresolved.csv` line for human review rather than auto-adding.
- Never invent a product page. Never write into `wiki/products/`. Only edit the `products:` field on existing source pages.
- Emit a per-run audit at `data/evidence/reverse-route-audit-<date>.csv` so reverse-routing edits are reviewable.

This script also runs in a one-time **historical sweep** mode over the 632 sources that currently have populated `matrices:` and `products: []`. The historical sweep is committed in batches of 50 with a single commit message per batch ("reverse-route: backfill products from matrices for N sources") so git history stays readable.

### Phase 2 — Routing audit fan-out (system-side, automatic)

The routing layer per CLAUDE.md Part 5b runs as designed once Phase 1 produces accurate source-page frontmatter. The relevant triggers are already wired in `package.json`'s `prebuild` script and the chokidar watcher. Phase 2 is not blocked by anything humans do; it is blocked only by Phase 1 doing its job.

The orchestrator's analyze-gaps pass surfaces the routing-driven follow-ups (synthesis, source-legend population, autonomy-stub completion) as actions in `data/evidence/build-action-plan.json`. The night-loop dispatches those actions automatically.

### Phase 3 — Synthesis on populated cells (Claude-side, dispatched by orchestrator)

Synthesis runs per CLAUDE.md Part 9 on (ingredient, metal) cells that have crossed the 2-source threshold. This work is the orchestrator's `SYNTHESIS-INGREDIENT-PENDING` action and is already wired. Phase 3 only produces value when Phase 1 and Phase 2 have delivered correctly-routed sources to the cells that need them.

### Phase 4 — Section completion on graduated pages (Claude-side, dispatched by orchestrator)

The orchestrator's `COMPLETE-AUTONOMY-STUBS`, `COMPLETE-INGREDIENT-SECTIONS`, and `COMPLETE-PRODUCT-SECTIONS` actions cover Phase 4. These run after a page has accumulated enough routed sources to graduate from stub status. Phase 4 should not run on Phase 0-blocked categories: there is nothing to complete on a page that doesn't have its Step 0 Lock yet.

### Phase 5 — Deploy gate (Karen-side, blocking)

Before pushing to production:

- `routing_malformed.csv` blocking and strict severity entries must be zero (current state).
- `routing_unresolved.csv` must not include any entries whose `target_kind` is `product` and whose `declared_target` matches a category that has been locked but not scaffolded (sanity check on Phase 0 completeness).
- The mandatory-sections audits must show no `result: fail` rows for non-stub pages.
- The corpus counter on the homepage and the category-1/category-2/category-5 master rollups must read consistently with the live source counts.
- No product page may carry `hmtc_category: <N>` in frontmatter while reporting `source_count: 0` in the audit. If both are true, the page is a Phase 0 scaffold that never received its Phase 1 ingests; investigate before deploying.

## Part 3 — Policy document updates (Karen-side, pending approval)

These updates would make the rules above part of CLAUDE.md and OPERATING.md so future sessions inherit them automatically. Per OPERATING.md Part 4, edits to those files are Karen's call; the model proposes, Karen approves and applies.

### CLAUDE.md edits to propose

1. **Part 5 (Source-file handling) addition:** add a sub-section "Existing-pages-aware ingest" that codifies Phase 1 rules 1-7 from this playbook. Specifically, the rule that `products: []` is a lint failure on food/personal-care papers unless `pending_category_lock` is set, and the rule that the model selects product slugs from the existing taxonomy rather than inventing them.
2. **Part 8 (Ingest workflows) addition:** add Phase 0 as a prerequisite at the top of every ingest workflow: "Before any ingest into a new HMTc category, verify that the category's Step 0 Lock has been authored, the scaffold script has run, the category section in products/index.md exists, and the master page exists. If any of these are missing, the ingest defers to the broad-scope token rule (Phase 1 rule 6 in `docs/order-of-operations.md`)."
3. **Part 10 (Page creation and naming) tightening:** change the auto-stub rule. Currently the system auto-creates stub pages on frequency >= 2 for any target type. The corrected rule: auto-stubs are allowed for ingredients and regulations only. Product pages are governance units (HMTc rows) and require a Karen-authored Step 0 Lock plus a scaffold-script commit. Sources referencing not-yet-locked products land in `routing_unresolved.csv` and the orchestrator's morning report surfaces them; they do not trigger auto-stub creation.
4. **Part 18 (Lint) additions:** four new lint checks:
   - `Source missing products field on food/personal-care paper`: source has populated `matrices:` with product-shaped slugs but `products: []` and no `pending_category_lock`. Fail commit.
   - `Source declares product page that requires Step 0 Lock`: `routing_unresolved.csv` row whose target_kind is product and whose category is in the known not-yet-locked list. Surface in morning report rather than fail commit; Karen schedules the lock.
   - `Product page has hmtc_category but zero routed sources`: scaffolded but unfed. Surface in morning report.
   - `Auto-stub creation attempted in wiki/products/`: the create-missing-pages script attempted to write a product stub. Block the write; surface to morning report.

### OPERATING.md edits to propose

1. **Part 7 (Standing initiatives) addition:** new standing initiative for "HMTc Category Step 0 Locks (remaining)." Names the categories not yet locked: cosmetics (adult), dietary supplements (adult), dental care (adult and pediatric), household cleaning, pet foods, toys/articles, cookware/kitchenware, jewelry, ceramics. Each entry tracks: lock document drafted (Y/N), scaffold script written (Y/N), product rows scaffolded (count), master page written (Y/N), index updated (Y/N), associated sources reviewed for ingest readiness (Y/N). This initiative is sequenced by Karen's commercial priority; the next category to lock is whichever has the most stranded sources currently waiting on it.
2. **Part 7 standing initiative 1 (Routing layer) update:** the routing layer is now implemented. The remaining sub-task is the **historical reverse-routing sweep** described in Phase 1.5 above, plus the four lint checks in CLAUDE.md Part 18 proposed above. Update the initiative's status accordingly.

## Part 4 — What ships next (this build's outstanding work, in order)

The order below is what an honest application of Part 2's rules to the current state produces. It is not a request for Karen's reordering; it is what falls out mechanically once the rules are accepted.

1. **Reverse-routing sweep over the 632 stranded sources.** Mechanical. Build the script described in Phase 1.5. Run in historical-sweep mode. Commit in batches of 50. Estimated effect: 632 sources × ~2-4 product-page targets each = 1,200-2,500 new routing rows. Many product pages currently sitting at zero routed sources will graduate.
2. **The 36 zero-source product pages re-audit.** After the reverse-routing sweep, re-run the audits. Pages that remain at zero routed sources are either (a) genuinely lacking corpus coverage (legitimate data-gap state, log it), (b) referencing a not-yet-locked category (defer until Karen locks the category), or (c) misnamed (the slug doesn't match what sources call the thing — fix the page slug or add aliases to the page).
3. **Cat 3 Step 0 Lock (cosmetics) or the next-highest-stranded-source category.** Karen's call. The decision input is whichever not-yet-locked category has the most sources currently sitting in `routing_unresolved.csv` or with `pending_category_lock` set, weighted by stakeholder-priority per OPERATING.md Part 2. Without a Phase 0 Lock for the next category, Phase 1 ingests in that category will reproduce the same waste.
4. **The 27 autonomy ingredient stubs.** Already on the orchestrator's plan. Phase 4 work; runs after the reverse-routing sweep so the synthesis has the full source set.
5. **The 92 missing-DOI sources.** Already on the orchestrator's plan. Phase 1 hygiene; not load-bearing for routing but load-bearing for provenance/defensibility.

The combined effect, if executed in this order with the rules from Part 2 in force, is that the build stops wasting ingest time. Sources land where they belong. Product pages graduate. Stakeholders open the live site and find the page they were looking for.

## Part 5 — Definitions and references

**Step 0 Lock**: Karen-authored document naming the locked N-row taxonomy for an HMTc category. The lock fixes slug, title, summary, hmtc_row, hmtc_category, variant_type, platform_metals, and pair relationships for every row in the category. Reference: `Category2_Clean_vs_Contaminated_Splits.md` (2026-04-28).

**Scaffold script**: idempotent script under `tools/autonomy/cat<N>-step0-scaffold.mjs` that reads the Step 0 Lock and writes the row pages into `wiki/products/`. Reference: `tools/autonomy/cat2-step0-scaffold.mjs`.

**Broad-scope token**: a slug that intentionally does not name a specific row, used in `products:` frontmatter when a paper does not resolve the row split. Reference: `broadProductScopes` in `tools/evidence/build-routing-audit.mjs`; `inheritedProductRoutes` map in `tools/audit-product-source-routing.mjs`.

**Routing audit**: `data/evidence/product_source_routing_audit.csv`, regenerated on every prebuild and watcher tick. Reference: CLAUDE.md Part 5b.

**Exempt stub**: a page in `wiki/products/` or `wiki/ingredients/` with zero routed sources, exempted from the mandatory-sections lint per the rules in CLAUDE.md Part 18 and the audit scripts at `tools/audit-product-mandatory-sections.mjs` and `tools/audit-ingredient-mandatory-sections.mjs`.

**Autonomy stub**: a page created by the autonomy loop's `create-missing-pages.mjs` in response to a `routing_unresolved.csv` entry crossing the frequency-2 threshold. Tagged with `created_by: autonomy_v0` and `created_from: routing_unresolved` in frontmatter. Reference: `tools/autonomy/create-missing-pages.mjs`.

**Phase 0 / Phase 1 / Phase 2 / Phase 3 / Phase 4 / Phase 5**: the sequenced order-of-operations stages defined in Part 2 of this document. They are the operational structure; CLAUDE.md's part numbering is the structural structure. The two coexist: Phase 1 of the order-of-operations corresponds to CLAUDE.md Parts 5 and 8, Phase 2 corresponds to Part 5b, Phase 3 corresponds to Part 9, Phase 4 corresponds to the page-completion sections of Part 6, Phase 5 corresponds to Part 18 (lint) and the deploy gates.
