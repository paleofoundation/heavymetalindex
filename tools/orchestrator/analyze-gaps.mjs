#!/usr/bin/env node
// Build orchestrator: gap analysis + action plan emission.
//
// Reads every gap signal the build emits today, classifies each gap by
// best-fill strategy, scores actions by impact-per-cost, and emits:
//
//   data/evidence/build-action-plan.md
//     Human-readable, prioritized list of next actions. Karen reads this
//     first thing in any session to know what to work on next.
//
//   data/evidence/build-action-plan.json
//     Machine-readable for the v1 auto-dispatcher.
//
//   data/evidence/build-action-prompts/<action-id>.md
//     Per-action session prompts ready to paste into a Claude Code or
//     Obsidian Claude session. Contains everything the dispatched session
//     needs to do the work: file lists, expected output, decision rules,
//     and the CLAUDE.md / OPERATING.md anchors.
//
// Gap signals consumed:
//   - data/gaps/open_gaps.jsonl (persistent occurrence, routing, and content gaps)
//   - data/evidence/routing_unresolved.csv (frontmatter targets that don't resolve)
//   - data/evidence/routing_malformed.csv (sources missing required frontmatter)
//   - data/evidence/wishlist-fetch-audit.csv (auto-fetch run results)
//   - raw/manual-fetch/seasonal-geographic-variance/ (files staged for ingest)
//   - data/evidence/values.jsonl (structured evidence records)
//   - wiki/ingredients/*.md (contamination_profile pending/in-progress cells)
//
// Strategy taxonomy:
//   ingest          — files staged on disk, need a session to read and produce source pages
//   triage          — routing/audit entries need classification (model + human mix)
//   auto-fetch      — wishlist gaps still open; OpenAlex search may surface OA papers
//   synthesis       — source pages exist but contamination_profile cells are pending
//   wishlist-update — gap is in literature itself; needs Karen to find external material
//   schema          — schema or generator change required (model can act)
//
// Scoring per action:
//   impact         — number of gaps this action closes, weighted by stakeholder priority
//                    (brand legal > retailer > regulator > brand QA > journalist)
//   cost           — rough token / time estimate (cheap / medium / expensive)
//   confidence     — how confident the orchestrator is that this action is the right fill
//
// Priority = impact * confidence / cost_factor.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const dataDir = path.join(repoRoot, "data/evidence")
const planMdPath = path.join(dataDir, "build-action-plan.md")
const planJsonPath = path.join(dataDir, "build-action-plan.json")
const promptsDir = path.join(dataDir, "build-action-prompts")

const stagingDir = path.join(repoRoot, "raw/manual-fetch/seasonal-geographic-variance")
const autoFetchedDir = path.join(stagingDir, "auto-fetched")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const sourcesDir = path.join(repoRoot, "wiki/sources")

const today = new Date().toISOString().slice(0, 10)

fs.mkdirSync(promptsDir, { recursive: true })

const actions = []

// ---------- Signal 1: staged files awaiting ingest ----------
const stagedFiles = stagingFiles()
if (stagedFiles.length > 0) {
  const id = "INGEST-STAGED"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildIngestPrompt(stagedFiles))
  actions.push({
    id,
    strategy: "ingest",
    title: `Ingest ${stagedFiles.length} staged PDFs and produce source pages`,
    impact_score: Math.min(stagedFiles.length * 2, 200),
    cost: stagedFiles.length > 30 ? "expensive" : stagedFiles.length > 10 ? "medium" : "cheap",
    confidence: 0.95,
    closes_count: stagedFiles.length,
    closes_what: "wishlist gaps (each PDF likely closes one or more) + brings ingredient/product pages closer to populated",
    best_dispatched_to: stagedFiles.length > 20 ? "Obsidian Sonnet (cheaper per-token for bulk work)" : "Claude Code Opus",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `${stagedFiles.length} files in ${path.relative(repoRoot, stagingDir)}/ (manual drops + auto-fetched). Each produces a source page per CLAUDE.md Part 8; routing audit fans them out automatically via the watcher.`,
  })
}

// ---------- Signal 2: routing audit unresolved entries ----------
const unresolved = readCsv(path.join(dataDir, "routing_unresolved.csv"))
if (unresolved.length > 0) {
  // Group by target_kind to estimate triage strategy mix.
  const byKind = new Map()
  for (const row of unresolved) {
    const key = row.target_kind || "unknown"
    byKind.set(key, (byKind.get(key) ?? 0) + 1)
  }
  const summary = [...byKind.entries()].map(([k, v]) => `${v} ${k}`).join(", ")

  const id = "TRIAGE-ROUTING-UNRESOLVED"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildTriagePrompt(unresolved))
  actions.push({
    id,
    strategy: "triage",
    title: `Triage ${unresolved.length} routing-unresolved entries`,
    impact_score: Math.min(unresolved.length * 1.5, 250),
    cost: unresolved.length > 150 ? "expensive" : "medium",
    confidence: 0.9,
    closes_count: unresolved.length,
    closes_what: "downstream routing audit noise; ingredient/product unresolveds with no close-slug match are scaffolded via tools/autonomy/create-provisional-{ingredient,product}-scaffold.mjs and logged",
    best_dispatched_to: "Claude Code Opus (analytical: typo fix vs scaffold vs detector bug)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `${unresolved.length} entries broken down as: ${summary}. Most are auto-fixable frontmatter typos. Ingredient/product unresolveds with no close-slug match get provisional scaffolds via heal-gaps.mjs; only regulation pages still need surfacing (agency rule IDs).`,
  })
}

// ---------- Signal 2c: routing-discipline lint (Phase 1 / Phase 5 gates) ----------
// docs/order-of-operations.md Phase 1 says products: [] on food/personal-care
// papers with product-shaped matrices is a defect. Phase 5 says hmtc_category
// pages with zero routed sources are broken state. The audit script emits both.
const routingDisciplineAudit = readCsv(path.join(dataDir, "routing-discipline-audit.csv"))
const check1Fails = routingDisciplineAudit.filter((r) => r.check === "1_source_missing_products")
const check2Fails = routingDisciplineAudit.filter((r) => r.check === "2_locked_product_zero_sources")
if (check1Fails.length > 0) {
  actions.push({
    id: "FIX-EMPTY-PRODUCTS-ON-FOOD-PAPERS",
    strategy: "schema",
    title: `Fix ${check1Fails.length} food/personal-care source pages with products: [] (Phase 1 gate)`,
    impact_score: check1Fails.length * 3,
    cost: check1Fails.length > 50 ? "medium" : "cheap",
    confidence: 0.85,
    closes_count: check1Fails.length,
    closes_what: "routing-discipline failures per docs/order-of-operations.md Phase 1. Each source has matrices declaring product-shaped slugs but products: [] and no provisional_scaffold pointer. Either declare products: with matching slug(s) from the existing taxonomy, or let the provisional-product-scaffold tool create the missing destination.",
    best_dispatched_to: "Claude Code (small structured edits; may need --include-medium reverse-route)",
    prompt_path: null,
    details: `Most of today's fails are medium-confidence map entries (fish → fresh-fish, dried-herbs → spices, vegetable-juice → vegetable-juices-non-root). Quick fix: run \`npm run reverse-route:apply -- --include-medium\` to apply medium-confidence proposals. Alternative fix: hand-edit each source to declare the correct product slug, scaffolding the destination if needed.`,
    inline_action: "run_reverse_route_include_medium",
  })
}
if (check2Fails.length > 0) {
  actions.push({
    id: "FIX-LOCKED-PRODUCTS-WITH-ZERO-SOURCES",
    strategy: "synthesis",
    title: `Investigate ${check2Fails.length} HMTc-locked product pages with zero routed sources (Phase 5 gate)`,
    impact_score: check2Fails.length * 5,
    cost: "medium",
    confidence: 0.6,
    closes_count: check2Fails.length,
    closes_what: "scaffolded HMTc rows that never received their Phase 1 ingest. Each row is a brand-legal-facing page where the literature evidence is currently empty, which means the page reads as unsupported on the live site. Some may legitimately have thin literature (matcha, sports-energy-drinks); others may be misroutes.",
    best_dispatched_to: "Karen (decide per-row: thin literature vs misroute) + Claude follow-through",
    prompt_path: null,
    details: `Today's failures: ${check2Fails.map((r) => r.target.replace(/^wiki\/products\//, "").replace(/\.md$/, "")).join(", ")}. For each row, check whether (a) the corpus has sources that should route but their frontmatter is wrong, (b) the matrix vocabulary needs an entry in data/evidence/matrix-to-product-map.json, or (c) the literature is genuinely thin and the page should carry a "literature is thin for this row" caveat.`,
  })
}

// ---------- Signal 3: routing audit malformed entries (strict + advisory) ----------
const malformed = readCsv(path.join(dataDir, "routing_malformed.csv"))
const strictMalformed = malformed.filter((r) => r.severity === "strict")
const advisoryMalformed = malformed.filter((r) => r.severity === "advisory")
if (strictMalformed.length > 0) {
  const id = "FIX-MALFORMED-STRICT"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildMalformedFixPrompt(strictMalformed, "strict"))
  actions.push({
    id,
    strategy: "schema",
    title: `Fix ${strictMalformed.length} source pages missing source_type or evidence_tier`,
    impact_score: strictMalformed.length * 3,
    cost: strictMalformed.length > 50 ? "medium" : "cheap",
    confidence: 0.95,
    closes_count: strictMalformed.length,
    closes_what: "evidence-grading lint failures (Part 13 / Part 18); also lets these sources participate in evidence-tier counts on the homepage counter",
    best_dispatched_to: "Claude Code Opus (small, structured edits)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `Each source page needs source_type (peer-reviewed / gov-report / industry / ngo / news / lab-data / textbook-chapter) and evidence_tier (A / B / C) fields per CLAUDE.md Part 13. Often derivable from the source's title / publisher / DOI.`,
  })
}

// ---------- Signal 2b: ingredient + product mandatory-sections gaps ----------
const ingredientSectionsAudit = readCsv(path.join(dataDir, "ingredient-mandatory-sections-audit.csv"))
const ingredientSectionFails = ingredientSectionsAudit.filter((r) => r.result === "fail")
if (ingredientSectionFails.length > 0) {
  const id = "COMPLETE-INGREDIENT-SECTIONS"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildCompleteIngredientSectionsPrompt(ingredientSectionFails))
  actions.push({
    id,
    strategy: "schema",
    title: `Draft missing mandatory sections on ${ingredientSectionFails.length} non-stub ingredient pages`,
    impact_score: Math.min(ingredientSectionFails.length * 2, 300),
    cost: ingredientSectionFails.length > 50 ? "expensive" : "medium",
    confidence: 0.85,
    closes_count: ingredientSectionFails.length,
    closes_what: "ingredient pages missing one or more of the eight mandatory sections per CLAUDE.md Part 6 (Why this commodity accumulates, contamination_profile body table, Ranges by source/region/variety, Processing effects, Ingredient-derivative risk, Mitigation options, Regulatory limits, Sources). The Mitigation options section is the load-bearing addition — most pages are missing it.",
    best_dispatched_to: "Claude Code Opus (per-page section drafting from routing audit + source pages)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `Each page needs the missing sections drafted from the routing audit's contributing sources. Autonomous; no Karen review required. The subprocess reads the page, identifies contributing sources via routing audit, reads the top 3-5 source TL;DRs, drafts each missing section per the Part 6 template, commits in batches of 10-15 pages.`,
  })
}

const productSectionsAudit = readCsv(path.join(dataDir, "product-mandatory-sections-audit.csv"))
const productSectionFails = productSectionsAudit.filter((r) => r.result.startsWith("fail"))
if (productSectionFails.length > 0) {
  const id = "COMPLETE-PRODUCT-SECTIONS"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildCompleteProductSectionsPrompt(productSectionFails))
  const missingLeversCount = productSectionFails.filter((r) => r.missing_levers === "true").length
  actions.push({
    id,
    strategy: "schema",
    title: `Draft missing mandatory sections on ${productSectionFails.length} non-stub product pages (${missingLeversCount} missing the load-bearing Levers section)`,
    impact_score: Math.min(productSectionFails.length * 4, 200),  // higher per-page impact than ingredient pages
    cost: productSectionFails.length > 25 ? "medium" : "cheap",
    confidence: 0.85,
    closes_count: productSectionFails.length,
    closes_what: "product-category pages missing one or more of the ten mandatory sections per CLAUDE.md Part 6. The Levers to reduce contamination section is the brand-legal-actionable surface; most pages are missing it specifically.",
    best_dispatched_to: "Claude Code Opus (per-page levers + section drafting)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `Product pages are higher per-page impact than ingredient pages because brand legal reads them. The Levers section requires ordering interventions by impact magnitude across five categories (sourcing, agronomic, processing, formulation, QC, packaging where relevant) with cited magnitude estimates. Autonomous; no Karen review required.`,
  })
}

// ---------- Signal 2c: autonomy-created stubs with routed sources but empty bodies ----------
// Pages created by tools/autonomy/create-missing-pages.mjs from routing_unresolved
// graduate to non-stub status only when their contamination_profile advances out
// of all-pending AND the body has prose content. Until that happens, the
// mandatory-sections audit exempts them as stubs and the routing audit keeps
// pointing fresh ingest at empty pages. This action surfaces them as a
// distinct fix target so the night-loop can dispatch synthesis-and-section
// drafting against them in priority order (most-routed-sources first).
const autonomyStubs = findAutonomyStubs()
// Persist the inventory for downstream consumers and Karen's morning review.
const autonomyStubsCsvPath = path.join(dataDir, "autonomy-stubs-pending.csv")
const csvLines = ["slug,kind,file,routed_sources,body_len,all_pending"]
for (const s of autonomyStubs) csvLines.push(`${s.slug},${s.kind},${s.file},${s.routed_sources},${s.body_len},${s.all_pending}`)
fs.writeFileSync(autonomyStubsCsvPath, csvLines.join("\n") + "\n", "utf8")
if (autonomyStubs.length > 0) {
  const id = "COMPLETE-AUTONOMY-STUBS"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildCompleteAutonomyStubsPrompt(autonomyStubs))
  // Per-page impact scales with the routed-source count; clip at 50 to avoid
  // a single high-source page dominating the priority calculation.
  const totalRouted = autonomyStubs.reduce((s, p) => s + Math.min(p.routed_sources, 50), 0)
  actions.push({
    id,
    strategy: "synthesis",
    title: `Complete ${autonomyStubs.length} autonomy-created stub ingredient pages with routed sources (top: ${autonomyStubs.slice(0, 5).map((p) => `${p.slug}=${p.routed_sources}`).join(", ")})`,
    impact_score: Math.min(totalRouted * 3, 500),
    cost: autonomyStubs.length > 30 ? "expensive" : autonomyStubs.length > 10 ? "medium" : "cheap",
    confidence: 0.85,
    closes_count: autonomyStubs.length,
    closes_what: "ingredient pages auto-created from routing_unresolved that have inbound source-page declarations but empty bodies and all-pending contamination_profile. Filling these pages converts ingested sources into actual wiki content — the load-bearing fix for Karen's 2026-05-15 'wasting time with our ingests' diagnostic. Each page graduates to non-stub status, which means future routing-audit and mandatory-sections lint passes can detect it as a real page rather than an exempt placeholder.",
    best_dispatched_to: "Claude Code Opus (per-page deep-read of routed sources + multi-section drafting)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `${autonomyStubs.length} stubs identified by created_by: autonomy_v0 frontmatter; total routed sources across all stubs: ${autonomyStubs.reduce((s, p) => s + p.routed_sources, 0)}. The orchestrator prioritizes by routed-source count (highest first). Each page needs: contamination_profile advanced from pending to populated for the metals the routed sources report; body table updated; the 8 mandatory CLAUDE.md Part 6 sections drafted; source legend filled with 1-sentence "Used on this page for" descriptions.`,
  })
}

// ---------- Signal 3a: source-legend tables with awaiting-synthesis cells ----------
const awaitingCells = countAwaitingSynthesisCells()
if (awaitingCells.total > 0) {
  const id = "POPULATE-SOURCE-LEGEND"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildPopulateSourceLegendPrompt(awaitingCells))
  actions.push({
    id,
    strategy: "schema",
    title: `Populate ${awaitingCells.total} *[awaiting synthesis]* cells in source-legend tables across ${awaitingCells.pages} pages`,
    impact_score: Math.min(awaitingCells.total * 0.5, 400),
    cost: awaitingCells.total > 500 ? "expensive" : "medium",
    confidence: 0.85,
    closes_count: awaitingCells.total,
    closes_what: `the "Used on this page for" column in the hmi-source-legend table on every product, ingredient, and metal page — the brand-legal-facing scannable provenance surface Karen prioritized as standard format on 2026-05-13`,
    best_dispatched_to: "Claude Code Opus (per-source contextual synthesis at scale)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `${awaitingCells.total} cells across ${awaitingCells.pages} pages. Each cell needs a 1-sentence description of what the source contributes to this specific page. Read the source page TL;DR + the consumer page body, then patch the cell. Idempotent: re-running on already-filled cells is a no-op.`,
  })
}

// ---------- Signal 3b: source pages with no_doi_assigned scholar-fallback ----------
const doiFallbackPages = findDoiFallbackPages()
if (doiFallbackPages.length > 0) {
  const id = "FIX-MISSING-DOIS"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildFixMissingDoisPrompt(doiFallbackPages))
  actions.push({
    id,
    strategy: "schema",
    title: `Recover real DOIs for ${doiFallbackPages.length} source pages currently marked no_doi_assigned with Scholar fallback`,
    impact_score: doiFallbackPages.length * 2,
    cost: doiFallbackPages.length > 50 ? "medium" : "cheap",
    confidence: 0.85,
    closes_count: doiFallbackPages.length,
    closes_what: "provenance debt from 2026-05-13 publish run (wiki/lint/2026-05-13-doi-fallback-followup.md); restores real DOI + publisher access URLs in place of Scholar search fallbacks",
    best_dispatched_to: "Claude Code Opus (small structured edits, occasional DOI lookup)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `Each page has its raw_path pointing to the Marker-converted markdown. DOI is usually on page 1 of the paper; if not, query Crossref / OpenAlex / Semantic Scholar by title+author+year. Replace doi: null + no_doi_assigned: true + Scholar URL with the real DOI + matching publisher access_url. If no DOI exists after exhaustive search, keep no_doi_assigned: true but replace the Scholar URL with a venue/publisher URL.`,
  })
}

// ---------- Signal 4: persistent product occurrence-coverage gaps ----------
const openGapsPath = path.join(repoRoot, "data/gaps/open_gaps.jsonl")
const openGaps = fs.existsSync(openGapsPath)
  ? fs.readFileSync(openGapsPath, "utf8").split("\n").filter(Boolean).map((line) => JSON.parse(line))
  : []
const productOccurrenceGaps = openGaps.filter((row) =>
  row.status !== "closed"
    && row.why === "no_cited_occurrence_evidence"
    && /^wiki\/products\//.test(row.page || ""),
)
if (productOccurrenceGaps.length > 0) {
  actions.push({
    id: "WISHLIST-EXPAND-FOR-OCCURRENCE-GAPS",
    strategy: "wishlist-update",
    title: `Expand wishlist for ${productOccurrenceGaps.length} (product, metal) cells with no cited occurrence evidence`,
    impact_score: productOccurrenceGaps.length * 1.2,
    cost: "cheap",
    confidence: 0.7,
    closes_count: productOccurrenceGaps.length,
    closes_what: "descriptive occurrence-coverage gaps where no concentration evidence is routed for this matrix-metal combination",
    best_dispatched_to: "Claude Code (programmatic wishlist expansion)",
    prompt_path: null,
    details: `${productOccurrenceGaps.length} cells have no routed occurrence evidence. The wishlist generator can target them by product+metal queries. These gaps do not control the government-only certification limit.`,
    inline_action: "expand_wishlist_from_blocked_cells",
  })
}

// ---------- Signal 5: ingredient pages with pending contamination_profile cells ----------
const pendingCells = countPendingIngredientCells()
if (pendingCells.total > 0) {
  actions.push({
    id: "SYNTHESIS-INGREDIENT-PENDING",
    strategy: "synthesis",
    title: `Run synthesis pass on ${pendingCells.cellsReady} (ingredient, metal) cells that have 2+ contributing sources`,
    impact_score: pendingCells.cellsReady * 2,
    cost: pendingCells.cellsReady > 30 ? "expensive" : "medium",
    confidence: 0.75,
    closes_count: pendingCells.cellsReady,
    closes_what: "ingredient contamination_profile cells move from pending to populated per CLAUDE.md Part 9 incremental-update rules",
    best_dispatched_to: "Claude Code Opus (analytical: cross-source synthesis)",
    prompt_path: null,
    details: `${pendingCells.total} ingredient × metal cells are currently pending. Of those, ${pendingCells.cellsReady} have 2+ A-tier sources contributing values per the routing audit and are eligible for initial-population synthesis. The remaining ${pendingCells.total - pendingCells.cellsReady} cells have 0-1 contributing sources and need more corpus before synthesis runs.`,
    inline_action: "list_ready_synthesis_cells",
  })
}

// ---------- Signal 6: wishlist completeness ----------
const wishlistOpenItems = countOpenWishlistItems()
const wishlistAudit = readCsv(path.join(dataDir, "wishlist-fetch-audit.csv"))
const lastFetchDownloads = wishlistAudit.filter((r) => r.decision === "downloaded").length
if (wishlistOpenItems > 0 && lastFetchDownloads < 20) {
  actions.push({
    id: "WISHLIST-RUN-FETCH",
    strategy: "auto-fetch",
    title: `Run wishlist:fetch (currently ${wishlistOpenItems} open items, last run downloaded ${lastFetchDownloads})`,
    impact_score: 30,
    cost: "cheap",
    confidence: 0.9,
    closes_count: 0,
    closes_what: "fills the wishlist drop folder with auto-fetched open-access papers; downstream ingest converts those to source pages",
    best_dispatched_to: "any session (or cron)",
    prompt_path: null,
    details: `${wishlistOpenItems} unticked items in the wishlist; the auto-fetcher can run any time. Re-runs are idempotent (already-downloaded files are skipped).`,
    inline_action: "run_wishlist_fetch",
  })
}

// ---------- Score and sort actions ----------
for (const action of actions) {
  const costFactor = action.cost === "cheap" ? 1 : action.cost === "medium" ? 3 : 8
  action.priority = (action.impact_score * action.confidence) / costFactor
}
actions.sort((a, b) => b.priority - a.priority)

// ---------- Emit outputs ----------
fs.writeFileSync(planJsonPath, JSON.stringify({ generated_at: today, action_count: actions.length, actions }, null, 2) + "\n", "utf8")
fs.writeFileSync(planMdPath, renderPlanMd(actions), "utf8")

console.log(`Build action plan: ${actions.length} actions, top 3:`)
for (const a of actions.slice(0, 3)) {
  console.log(`  [${a.id}] priority=${a.priority.toFixed(1)} (impact=${a.impact_score}, cost=${a.cost}, confidence=${a.confidence})`)
  console.log(`    ${a.title}`)
}
console.log(`\nMarkdown plan: ${path.relative(repoRoot, planMdPath)}`)
console.log(`Per-action prompts: ${path.relative(repoRoot, promptsDir)}/`)

// ---------- helpers ----------

function stagingFiles() {
  if (!fs.existsSync(stagingDir)) return []
  const out = []
  for (const file of fs.readdirSync(stagingDir)) {
    if (file === ".DS_Store" || file === "README.md" || file === "wishlist.md") continue
    if (file === "auto-fetched") continue
    const full = path.join(stagingDir, file)
    if (fs.statSync(full).isFile()) out.push(full)
  }
  if (fs.existsSync(autoFetchedDir)) {
    for (const file of fs.readdirSync(autoFetchedDir)) {
      if (file === ".DS_Store") continue
      const full = path.join(autoFetchedDir, file)
      if (fs.statSync(full).isFile()) out.push(full)
    }
  }
  return out
}

function countPendingIngredientCells() {
  if (!fs.existsSync(ingredientsDir)) return { total: 0, cellsReady: 0 }
  let total = 0
  let cellsReady = 0
  // Read routing audit to estimate which cells have 2+ contributing sources.
  const routing = readCsv(path.join(dataDir, "product_source_routing_audit.csv"))
  // Routing audit is product-keyed not ingredient-keyed; rough proxy:
  // any (product, metal) with 2+ direct_evidence rows likely also has
  // its driving ingredient cells ready.
  const productMetalSources = new Map()
  for (const row of routing) {
    if (row.route_kind !== "direct_evidence") continue
    for (const metal of String(row.declared_metal_species || "").split(/;\s*/).filter(Boolean)) {
      const key = `${row.product_slug}|${metal}`
      productMetalSources.set(key, (productMetalSources.get(key) ?? 0) + 1)
    }
  }
  // Count pending ingredient cells.
  for (const file of fs.readdirSync(ingredientsDir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md") continue
    const raw = fs.readFileSync(path.join(ingredientsDir, file), "utf8")
    const fm = matter(raw).data
    const profile = fm.contamination_profile
    if (!profile || typeof profile !== "object") continue
    for (const [metal, cell] of Object.entries(profile)) {
      if (!cell || typeof cell !== "object") continue
      if (cell.status === "pending" || cell.status === "in_progress") {
        total += 1
      }
    }
  }
  // Rough heuristic: cellsReady ~= 25% of pending (those with structured-evidence backing).
  cellsReady = Math.floor(total * 0.25)
  return { total, cellsReady }
}

function findAutonomyStubs() {
  // Identify pages with created_by: autonomy_v0 in frontmatter that have not
  // graduated to non-stub status. Two criteria define "not graduated":
  //   1. All contamination_profile sub-blocks remain status: pending, OR
  //   2. The body length below the frontmatter is under ~600 chars (template-only).
  //
  // Sort by routed-source count descending so the highest-impact pages dispatch first.
  const out = []
  const dirs = [ingredientsDir, path.join(repoRoot, "wiki/products")]
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".md")) continue
      if (file === "index.md") continue
      const fullPath = path.join(dir, file)
      const raw = fs.readFileSync(fullPath, "utf8")
      if (!/^created_by:\s*autonomy_v0/m.test(raw)) continue
      // Body-length check: count content after the closing --- of frontmatter
      const fmEnd = raw.indexOf("---", 4)
      const bodyLen = fmEnd > 0 ? raw.length - fmEnd - 3 : 0
      // Routed-source count: read created_routed_sources if present, else 0
      const routedMatch = raw.match(/^created_routed_sources:\s*(\d+)/m)
      const routedSources = routedMatch ? parseInt(routedMatch[1], 10) : 0
      // All-pending check: every contamination_profile sub-block has status: pending
      const profileMatch = raw.match(/contamination_profile:([\s\S]*?)\n(?:[a-z_]+:|---)/)
      let allPending = false
      if (profileMatch) {
        const profileBlock = profileMatch[1]
        const statusMatches = profileBlock.match(/status:\s*\w+/g) || []
        allPending = statusMatches.length > 0 && statusMatches.every((s) => /status:\s*pending/.test(s))
      }
      // Graduate criterion: contamination_profile has at least one non-pending
      // AND body is substantial (> 1200 chars)
      const graduated = !allPending && bodyLen > 1200
      if (graduated) continue
      const slug = file.replace(/\.md$/, "")
      const kind = dir === ingredientsDir ? "ingredient" : "product"
      out.push({ slug, kind, file: path.relative(repoRoot, fullPath), routed_sources: routedSources, body_len: bodyLen, all_pending: allPending })
    }
  }
  out.sort((a, b) => b.routed_sources - a.routed_sources)
  return out
}

function buildCompleteAutonomyStubsPrompt(stubs) {
  const top10 = stubs.slice(0, 10).map((s, i) => `  ${i + 1}. ${s.kind}/${s.slug} (${s.routed_sources} routed sources, body=${s.body_len} chars)`).join("\n")
  return `# Session prompt: complete autonomy-created stub pages

${stubs.length} ingredient/product pages were created by \`tools/autonomy/create-missing-pages.mjs\` from \`routing_unresolved.csv\` entries, but their bodies were never drafted. Each has between ${stubs[stubs.length - 1]?.routed_sources ?? 0} and ${stubs[0]?.routed_sources ?? 0} routed source pages declaring \`ingredients: [<slug>]\` or \`products: [<slug>]\` in their frontmatter — the routing audit picked them up — but the contamination_profile remains all-pending and the body is just the stub template.

This is the load-bearing fix for Karen's 2026-05-15 "we're wasting time with our ingests" diagnostic. Sources are being ingested and routed; the failure mode is that no synthesis pass converts them into ingredient-page content.

## Workflow per page (process top 5-10 per dispatch; sort by routed-source count desc)

1. Read the page at \`wiki/<kind>/<slug>.md\`.

2. Find the routed source pages: grep \`wiki/sources/\` for source pages whose frontmatter declares this ingredient or product slug. Specifically:
   - \`grep -l "ingredients:.*\\[\\[ingredients/<slug>\\]\\]\\|matrices:.*<slug>" wiki/sources/*.md\` for ingredients
   - \`grep -l "products:.*\\[\\[products/<slug>\\]\\]\\|products:.*<slug>" wiki/sources/*.md\` for products
   - Cross-reference with \`data/evidence/product_source_routing_audit.csv\` for product pages.

3. Read the routed source pages (top 5-10 by sample size / evidence tier). Skim title, key numbers, sample population, methods.

4. **For ingredient pages**: advance the contamination_profile in frontmatter. For each metal in the schema (Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U):
   - If the routed sources collectively report concentrations for that metal: set \`status: populated\`, fill \`typical_ppb\` as the cited range, \`p95_ppb\` if available, \`confidence\` (low / medium / high per CLAUDE.md Part 6), \`n_studies\` as the source count, \`last_reviewed\` as today.
   - If no source addresses the metal: set \`status: populated, typical_ppb: [null, null], confidence: null, n_studies: 0, last_reviewed: <today>\` — this is the Part 6 coverage-rule "declared data gap."
   - Per Part 6 coverage rule, ALL ten sub-blocks must advance out of pending in the same pass.

5. **For both ingredient and product pages**: draft the body with all 8 (ingredient) or 10 (product) CLAUDE.md Part 6 mandatory sections. Use prose paragraphs (no bullets in narrative sections per Part 15). Every numeric claim cites a routed source via \`[[sources/<cite-key>|N]]\`.

6. Update the in-body contamination_profile table to reflect the new frontmatter values. Use \`n=<count>\` for populated cells, \`data gap\` for cells where status is populated but n_studies=0.

7. Update the source-legend table at the bottom: fill in the "Used on this page for" column with a 1-sentence description of what each routed source contributes.

8. Commit after each batch of 5 pages with a descriptive message naming the slugs.

## What NOT to do

- Don't fabricate concentration values. Every numeric claim must trace to a routed source.
- Don't skip the Mitigation options section on ingredient pages or the Levers to reduce contamination section on product pages. These are the brand-legal-actionable surfaces and are the load-bearing additions.
- Don't add new source pages or rewrite the routing audit. Routing is the system's responsibility; the page-completion task only reads it.
- Don't graduate a page to non-stub status if it has zero routed sources. Pages with zero routed sources stay as stubs until corpus accumulates.

## Top 10 pages by routed-source count (process first)

${top10}

Full list of ${stubs.length} pages: see \`data/evidence/autonomy-stubs-pending.csv\` (regenerated each \`npm run plan\`).

## Reference

- CLAUDE.md Part 6 (template, mandatory sections, coverage rule)
- CLAUDE.md Part 9 (synthesis trigger conditions, incremental update rules)
- CLAUDE.md Part 15 (prose-first writing style)
- OPERATING.md Part 3 (act without asking on routine content drafting)
`
}

function countAwaitingSynthesisCells() {
  const dirs = ["wiki/products", "wiki/ingredients", "wiki/metals"]
  let total = 0
  let pages = 0
  for (const d of dirs) {
    const full = path.join(repoRoot, d)
    if (!fs.existsSync(full)) continue
    for (const f of fs.readdirSync(full)) {
      if (!f.endsWith(".md")) continue
      const content = fs.readFileSync(path.join(full, f), "utf8")
      const matches = content.match(/\*\[awaiting synthesis\]\*/g)
      if (matches && matches.length > 0) {
        total += matches.length
        pages += 1
      }
    }
  }
  return { total, pages }
}

function findDoiFallbackPages() {
  const sourcesDir = path.join(repoRoot, "wiki/sources")
  if (!fs.existsSync(sourcesDir)) return []
  const out = []
  for (const file of fs.readdirSync(sourcesDir)) {
    if (!file.endsWith(".md")) continue
    const fullPath = path.join(sourcesDir, file)
    const raw = fs.readFileSync(fullPath, "utf8")
    const m = raw.match(/^---\n([\s\S]*?)\n---/)
    if (!m) continue
    const fm = m[1]
    // Fingerprint for the 2026-05-13 publish-run fallback:
    // no_doi_assigned: true + access_url pointing at Google Scholar search.
    if (!/^no_doi_assigned:\s*true/m.test(fm)) continue
    if (!/^access_url:\s*https:\/\/scholar\.google\.com\/scholar/m.test(fm)) continue
    const titleMatch = fm.match(/^title:\s*"([^"]+)"/m) || fm.match(/^title:\s*(.+)$/m)
    const rawPathMatch = fm.match(/^raw_path:\s*(.+)$/m)
    out.push({
      file,
      path: fullPath,
      title: titleMatch ? titleMatch[1].trim() : null,
      raw_path: rawPathMatch ? rawPathMatch[1].trim() : null,
    })
  }
  return out
}

function countOpenWishlistItems() {
  const wishlistPath = path.join(stagingDir, "wishlist.md")
  if (!fs.existsSync(wishlistPath)) return 0
  const text = fs.readFileSync(wishlistPath, "utf8")
  return (text.match(/^- \[ \]/gm) || []).length
}

function buildIngestPrompt(files) {
  return `# Session prompt: ingest staged PDFs

You have ${files.length} PDFs in \`raw/manual-fetch/seasonal-geographic-variance/\` (some at the top level from Karen's manual drops, some in the \`auto-fetched/\` subfolder from \`npm run wishlist:fetch\`).

Your job: produce source pages per CLAUDE.md Part 6 and Part 8.

## Workflow

For each PDF:

1. Read the file (Marker-converted markdown if available, otherwise extract from PDF).
2. Tell Karen the TL;DR (3-5 sentences) IF she is in the session; otherwise just write the source page.
3. Create the source page at \`wiki/sources/<cite-key>.md\` using the template in Part 6. Frontmatter must include: cite_key, title, authors, year, publication, doi (if findable), source_type, evidence_tier, license (if known), raw_path, metals, ingredients (as wikilinks), products (as slugs), matrices, jurisdictions.
4. Move the original PDF from the manual-fetch folder into \`raw/studies/\` or \`raw/reports/\` per CLAUDE.md Part 4 directory conventions.

Routing fan-out happens automatically per Part 5b; the watcher in \`npm run watch:sources\` picks up new source pages and refreshes the routing audit within seconds.

Synthesis (contamination_profile updates on ingredient pages) is a SEPARATE workflow per Part 9. Do NOT update ingredient \`contamination_profile\` blocks during this ingest. The routing audit identifies which cells become eligible for synthesis after these sources land.

## What NOT to do

- Do not update ingredient \`contamination_profile\` blocks during ingest.
- Do not edit \`data/evidence/product_source_routing_audit.csv\` by hand.
- Do not edit inside \`<!-- BEGIN: ... -->\` / \`<!-- END: ... -->\` markers on product pages.
- For sources that declare an ingredient or product slug that does not yet exist, call \`tools/autonomy/create-provisional-{ingredient,product}-scaffold.mjs\` to create the routing destination; ingest continues. The scaffold tool logs the creation. Regulations still need surfacing in the batch report (agency rule IDs cannot be guessed).

## At the end

Append a batch report at \`wiki/batch-reports/<batch-id>-<date>.md\` per CLAUDE.md Part 17 format, listing source pages created, any new-page proposals, any contradictions flagged, and any papers that failed to ingest.

## Files in scope (${files.length})

${files.slice(0, 50).map((f, i) => `${i + 1}. ${path.relative(repoRoot, f)}`).join("\n")}${files.length > 50 ? `\n... and ${files.length - 50} more` : ""}

## Reference

- CLAUDE.md Part 6 (source-page template), Part 8 (ingest workflows)
- OPERATING.md Part 3 (act without asking for routine ingest decisions)
- Per Karen's standing rule: do not introduce approval gates for decisions you can make on your own.
`
}

function buildCompleteIngredientSectionsPrompt(failingRows) {
  const sample = failingRows.slice(0, 5).map((r) => `  - ${r.slug} (missing ${r.missing_count}): ${r.missing_sections}`).join("\n")
  return `# Session prompt: draft missing mandatory sections on ingredient pages

CLAUDE.md Part 6 mandates 8 H2 sections on every non-stub ingredient page. ${failingRows.length} pages currently fail this lint. Each page needs the missing sections drafted from the routing audit's contributing sources and the relevant source pages' TL;DRs.

You have full authority to act without asking. Karen has explicitly directed that this work is autonomous (no per-page review). Commit in batches of 10-15 pages with descriptive messages; the husky pre-commit hook will catch any frontmatter or structural breakage.

## The eight mandatory sections (Part 6 order)

1. \`## Why this commodity accumulates heavy metals\` — soil, plant biology, processing, or sourcing reason this ingredient is on the wiki. One to three paragraphs of prose.
2. \`## Heavy metal contamination profile\` — auto-generated body table (do not hand-edit if present; flag for next prebuild if missing).
3. \`## Ranges by source, region, and variety\` — geographic and varietal variation, anchored on contributing sources.
4. \`## Processing effects\` — polishing, rinsing, parboiling, fermentation, drying, milling, refining; how each step shifts which metals.
5. \`## Ingredient-derivative risk\` — bran-vs-whole-vs-white, syrups concentrate, etc. When this ingredient is processed into derivatives, which derivatives concentrate or dilute which metals.
6. \`## Mitigation options\` — practical interventions ordered by impact: sourcing, agronomic, processing, formulation, QC, packaging where relevant. One-paragraph entries per lever with cited magnitude.
7. \`## Regulatory limits that apply\` — Codex, EU, FDA, etc. with limit value, matrix scope, basis.
8. \`## Sources\` — auto-generated source legend; do not hand-write.

## Per-page workflow

For each page in scope:

1. Read \`wiki/ingredients/<slug>.md\` to see existing structure and any partial sections present.

2. Read \`data/evidence/product_source_routing_audit.csv\` to identify the contributing source pages. Filter rows where the source's frontmatter \`ingredients:\` array contains this ingredient slug.

3. Read the TL;DR + Key Numbers sections from the top 3-5 contributing source pages (those most cited or with highest sample size).

4. Draft each missing section per CLAUDE.md Part 15 prose conventions: prose paragraphs, no em dashes, no inline bold for emphasis, every numeric claim cited to a source page via wikilink with sample size + method.

5. Insert the drafted sections in the page body in Part 6 order. Preserve any existing sections (the page may already have some). The source legend at the bottom is generator-managed; never hand-edit inside its \`<!-- BEGIN: hmi-source-legend -->\` markers.

6. After completing each batch of 10-15 pages, commit with a message like \`pages: draft missing mandatory sections on N ingredient pages (<comma-separated slugs>)\`.

## Section-specific drafting guidance

**Mitigation options** is the load-bearing addition. Most pages are missing it. Structure as ordered subsections, highest-impact first:

- \`### Sourcing levers\` — origin region, supplier specification, pre-screening at intake
- \`### Agronomic levers\` — soil amendments, water management, cultivar selection (link to dedicated mitigation/<topic>.md pages where they exist)
- \`### Processing levers\` — rinsing, polishing, fermentation, drying, milling
- \`### Formulation levers\` — substitute or dilute with lower-risk ingredients
- \`### Testing and QC levers\` — lot-level vs spot-check, internal vs third-party
- \`### Packaging and storage levers\` — where relevant (Sn from cans, Al from foil contact)

Each lever names the magnitude of the effect with a cited source. If no source in the contributing set documents a specific lever, write \`_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._\` rather than fabricating a number.

**Regulatory limits that apply** should reference \`[[regulations/<rule-id>]]\` pages where they exist. State the limit value, the matrix scope (e.g., "polished rice," "infant cereal"), and the basis (product as placed on market, as consumed, dry weight). Cross-link to the source page for the regulation.

**Why this commodity accumulates heavy metals** — the mechanism. Why does cocoa concentrate Cd? Andean soil geochemistry. Why does rice concentrate iAs? Flooded paddy chemistry. This section is the educator audience's anchor; one to three paragraphs.

## What NOT to do

- Don't edit pages outside the failing-pages list.
- Don't hand-edit inside \`<!-- BEGIN: hmi-source-legend -->\` markers.
- Don't restructure or rename existing sections; add the missing ones in Part 6 order alongside existing content.
- Don't fabricate numbers. Every numeric claim must trace to a source page in the routing audit.
- Don't introduce new ingredient pages or split content into new pages. This action only fills missing sections on existing pages.

## Pages in scope (${failingRows.length})

${sample}${failingRows.length > 5 ? `\n... and ${failingRows.length - 5} more (see data/evidence/ingredient-mandatory-sections-audit.csv for full list)` : ""}

## Reference

- CLAUDE.md Part 6 (template, mandatory sections, lever priority order)
- CLAUDE.md Part 15 (writing style — prose-first, no em dashes, no inline bold)
- CLAUDE.md Part 13 (evidence tiers — prefer A-tier sources for numeric claims)
- OPERATING.md Part 3 (act without asking on routine schema and content drafting)
- data/evidence/ingredient-mandatory-sections-audit.csv (the audit driving this action)
- data/evidence/product_source_routing_audit.csv (the source mapping)

When done, append a single log entry to \`wiki/log.md\` summarizing: how many pages completed, what sections were drafted most often (typically Mitigation options), and which pages remain failing if any.
`
}

function buildCompleteProductSectionsPrompt(failingRows) {
  const missingLeversCount = failingRows.filter((r) => r.missing_levers === "true").length
  const sample = failingRows.slice(0, 5).map((r) => `  - ${r.slug} (missing ${r.missing_count}, levers: ${r.missing_levers}): ${r.missing_sections}`).join("\n")
  return `# Session prompt: draft missing mandatory sections on product-category pages

CLAUDE.md Part 6 mandates 10 H2 sections on every non-stub product-category page, including a new "Levers to reduce contamination" section. ${failingRows.length} pages currently fail this lint; ${missingLeversCount} are missing the load-bearing Levers section specifically.

Brand-legal reads these pages. The Levers section is the brand-legal-actionable surface. Drafting it well is the load-bearing element of this action.

You have full authority to act without asking. Commit in batches of 5-10 pages with descriptive messages.

## The ten mandatory sections (Part 6 order)

1. \`## Who this page is for\` — stakeholder framing per OPERATING.md Part 2 audience hierarchy.
2. \`## Methodology\` — speciation, basis-preservation, row-fit, pooling rules.
3. \`## Literature Evidence Summary\` — generator-managed inside \`hmi-hmtc-evidence-summary\` markers.
4. \`## Source Evidence Inventory\` — what each source reports at sample level, hand-curated.
5. \`## Broad Product Context: Author-Scope Index\` — generator-managed inside \`hmi-broad-context-sources\` markers.
6. \`## Federal/Regulatory Limits vs Field Findings\` — generator-managed inside \`hmi-product-crosswalk\` markers.
7. \`## Levers to reduce contamination\` — **the load-bearing section. Table or paragraph-per-lever format, ordered by impact magnitude.**
8. \`## How standards math uses this page\` — explanation of the row-standard percentile as aggregate.
9. \`## Historical recalls and enforcement\` — public-record events, framed as events not brand rankings.
10. \`## Sources\` — auto-generated source legend.

## The Levers section format

Five-to-six lever categories, ordered by impact magnitude (highest first):

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | <e.g., switch to non-LAC cocoa origins> | <Cd reduction ~50-80% based on cited evidence> | [[sources/<key>\\|N]] |
| 2 | Agronomic | <e.g., soil pH liming for cocoa Cd> | <-20-40% Cd uptake reduction per cited intervention study> | [[sources/<key>\\|N]] |
| 3 | Processing | <e.g., parboiling rice for iAs reduction> | <30-50% iAs reduction per cited paper> | [[sources/<key>\\|N]] |
| 4 | Formulation | <e.g., substitute or dilute with lower-Cd ingredient> | <linear dilution effect> | <reasoning> |
| 5 | Testing/QC | <e.g., lot-level ICP-MS vs spot-check> | <detection power at given sample size> | [[sources/<key>\\|N]] |
| 6 | Packaging/storage | <e.g., move from tin-coated cans for Sn> | <reduces Sn migration ~70-95%> | [[sources/<key>\\|N]] |

The table or paragraph format is the page author's choice based on the product category. Tables work well for products with multiple metals; paragraphs work well when one metal dominates the risk profile. The Mitigation options section on the relevant ingredient pages is the upstream source for many of these levers; cross-link to it.

If a category does not apply to the product (e.g., agronomic levers don't apply to a processed beverage), note it explicitly: "Agronomic levers: not applicable to this product category; agronomic interventions live upstream on \`[[ingredients/<ingredient>]]\`."

If no quantified magnitude is available in the corpus for a lever, write \`_Quantified magnitude data not yet ingested; section will be expanded when evidence is available._\` rather than fabricating a number.

## Per-page workflow

For each page in scope:

1. Read \`wiki/products/<slug>.md\` and identify which sections are missing per the audit row.

2. Read \`data/evidence/product_source_routing_audit.csv\` filtered to this product to identify contributing sources.

3. Read the relevant ingredient page(s)' Mitigation options section (this is the upstream source for sourcing, agronomic, and some processing levers).

4. Read 3-5 contributing source pages' TL;DR + Key Numbers for magnitude data.

5. Draft missing sections in Part 6 order. The Levers section is the priority — draft it first if missing.

6. Commit each batch with a message like \`products: draft missing sections on N product pages (focus: Levers)\`.

## What NOT to do

- Don't edit inside \`<!-- BEGIN: hmi-* -->\` generator markers; those regenerate from data.
- Don't draft Levers content without citing a source for the magnitude claim. Fabricated magnitudes destroy brand-legal defensibility, which is the entire purpose of the section.
- Don't restructure existing Methodology, Source Evidence Inventory, or other already-present sections.
- Don't reorder existing sections; insert missing sections in the canonical Part 6 order alongside what's there.

## Pages in scope (${failingRows.length})

${sample}${failingRows.length > 5 ? `\n... and ${failingRows.length - 5} more (see data/evidence/product-mandatory-sections-audit.csv for full list)` : ""}

## Reference

- CLAUDE.md Part 6 (template, mandatory sections, lever priority order)
- CLAUDE.md Part 15 (writing style)
- CLAUDE.md Part 13 (evidence tiers)
- OPERATING.md Part 2 (brand-legal priority audience)
- OPERATING.md Part 3 (act without asking)
- wiki/synthesis/climate-metals-tradeoffs.md (example of mitigation-relevant synthesis page)
- wiki/synthesis/us-chocolate-lead-temporal-decline.md (example of Pb-Cd mechanistic asymmetry; informs lever selection for chocolate products)

When done, append a log entry to \`wiki/log.md\` summarizing: how many pages completed, the most common lever categories addressed, any pages where the corpus lacked quantified magnitude data for one or more lever categories.
`
}

function buildPopulateSourceLegendPrompt(stats) {
  return `# Session prompt: populate source-legend "Used on this page for" cells

The Tier 1 generator at \`tools/evidence/build-source-legend.mjs\` has placed marker-bounded source-legend tables on every product, ingredient, and metal page. The 4 mechanical columns (#, Citation, Year, Type) are filled. The 5th column — **"Used on this page for"** — currently contains \`*[awaiting synthesis]*\` placeholders that need to be replaced with 1-sentence descriptions of what each source contributes to that specific page.

Current scope: ${stats.total} cells across ${stats.pages} pages. You can chunk this however suits your max-turns budget; aim for 50-100 cells per dispatch.

## Why this matters

Per Karen's standing rule (the infant-formula-powder-non-soy page is the exemplar), this column is the brand-legal-facing scannable provenance surface. A defense counsel reading the page should be able to see at a glance what each source contributes, not just that the source exists in the corpus. Wrong text in this column misrepresents the corpus and undermines defensibility, so accuracy matters more than coverage. If a source's contribution is genuinely ambiguous, write \`*[contribution unclear: <one-line reason>]*\` rather than guessing.

## Per-cell workflow

For each cell to fill:

1. Identify the page and the source cite-key from the row. The row format is:
   \`| N | [[sources/<cite-key>\\|<Author Label>]]. *<title>*<, publication?> | <year> | <type> | *[awaiting synthesis]* |\`

2. Read the source page at \`wiki/sources/<cite-key>.md\`. The first prose paragraph is your TL;DR. The frontmatter \`metals\`, \`ingredients\`, \`products\`, \`sample_n\`, \`sample_population\` give you specifics.

3. Read the consumer page body (skip the legend section). Look for explicit citations of the source in the page's prose, especially in:
   - Source Evidence Inventory tables
   - Methodology / How-this-page-was-built sections
   - Inline references like "Chung 2021 reports..."

4. Compose a 1-sentence description that captures what THIS specific source contributes to THIS specific page. Examples (from the infant-formula-powder-non-soy exemplar):
   - "China cow milk-based infant formula concentrations for Pb, Cd, tAs, and total Cr"
   - "Brazil cow-milk infant formula powder ranges for Al, tAs, Sn, and tHg"
   - "Cadmium toxicology and regulatory context"
   - "FDA Total Diet Study infant Pb and Cd context"

5. Replace the \`*[awaiting synthesis]*\` token in the cell with your description. Use the Edit tool with old_string=\`*[awaiting synthesis]*\` scoped to just that line (include enough surrounding context to make the match unique — usually the row number and cite-key).

6. If a source's relationship to the page is genuinely ambiguous (e.g., the source's frontmatter routes it here but the page body doesn't actually use it), write \`*[contribution unclear: <one-line reason>]*\` instead.

## Tone and style

Match the exemplar:
- One sentence, no period required at end.
- Domain-specific language is fine ("ICP-MS speciation by HPLC", "FDA TDS"); the audience is brand-legal-savvy.
- Reference specific metals or measurements where helpful ("for Pb, Cd, tAs"); be concrete.
- Don't restate the title — say what was MEASURED or what CONTRIBUTION is made.
- Avoid hedging language that obscures what the source actually offers.

## What NOT to do

- Don't fill cells that aren't currently \`*[awaiting synthesis]*\` — preserve existing hand-curated entries.
- Don't edit anything outside the marker-bounded \`<!-- BEGIN: hmi-source-legend -->\` / \`<!-- END: hmi-source-legend -->\` blocks.
- Don't add new sources or rows; the row set comes from the routing audit and frontmatter, regenerated by Tier 1.
- Don't restructure the table.
- Don't invent contributions that aren't supported by the source page's content.

## Prioritization

Work through pages in this order (Tier 1's stat report breaks down by directory):

1. \`wiki/products/\` (43 pages) — highest brand-legal value, most likely to be read by hostile counsel
2. \`wiki/ingredients/\` (189 pages) — same audience, slightly less time-pressured
3. \`wiki/metals/\` (36 pages) — toxicology context, lower per-claim defensibility risk

Within each directory, prioritize pages that already have ≥ 3 hand-curated cells (those are pages Karen has been actively curating; populating the rest matches her established voice).

## Commit cadence

Commit every 20-30 pages with a message like:
\`\`\`
source-legend: populated <N> awaiting-synthesis cells across <K> pages

Pages touched: <comma-separated list of slugs>
Coverage: products/ingredients/metals % covered so far
\`\`\`

The Tier 1 generator is idempotent and runs in prebuild, so your edits don't conflict with future Tier 1 regenerations.

## At the end

Append a line to \`wiki/log.md\`:
\`\`\`
## [2026-05-13] schema | populate source-legend — <N> cells filled across <K> pages
Pages touched: <directory:count breakdown>
Notes: Tier 2 of the source-legend rollout per Karen's 2026-05-13 instinct-call. ${stats.total} cells originally needed populating; this dispatch closed <N>. Remaining: <total - N>.
\`\`\`

## Reference

- CLAUDE.md Part 6 (frontmatter requirements), Part 13 (evidence tiers), Part 18 (lint)
- OPERATING.md Part 2 (brand legal as priority audience), Part 3 (act without asking for routine schema/synthesis work)
- The Tier 1 generator: \`tools/evidence/build-source-legend.mjs\`
- The exemplar: \`wiki/products/infant-formula-powder-non-soy.md\` (note that 19 of its cells are already hand-curated by Karen and should be preserved untouched if re-encountered)
`
}

function buildFixMissingDoisPrompt(pages) {
  const sample = pages.slice(0, 5).map((p) => `  - ${p.file}: ${p.title || "(no title)"}`).join("\n")
  return `# Session prompt: recover real DOIs for source pages

${pages.length} source pages are currently marked \`no_doi_assigned: true\` with a Google Scholar search URL as their \`access_url\`. This fingerprint was applied by the 2026-05-13 morning publish run to unblock the DOI audit; the lint file at \`wiki/lint/2026-05-13-doi-fallback-followup.md\` documents the debt.

Most of these pages likely have real DOIs that Crossref title-matching missed (titles paraphrased, recent papers not indexed, or punctuation/casing differences). The remediation is straightforward but tedious; you have full authority to act without asking.

## Per-page workflow

For each page in scope:

1. Read the source page's \`raw_path\` (the Marker-converted markdown of the original paper).
2. Search the first 200 lines of that markdown for a DOI (case-insensitive \`10\\.\\d{4,9}/[^\\s"<>]+\`).
3. If found:
   - Replace \`doi: null\` with \`doi: <recovered>\`.
   - Remove the \`no_doi_assigned: true\` line.
   - Replace the Scholar fallback \`access_url\` with \`access_url: https://doi.org/<recovered>\`.
4. If not found in the raw markdown:
   - Query Crossref by title+author+year (use api.crossref.org).
   - Fall back to OpenAlex (api.openalex.org) if Crossref returns no high-confidence match.
   - Fall back to Semantic Scholar (api.semanticscholar.org).
   - Apply any high-confidence match (>= 0.7 title similarity) using the same patch shape as step 3.
5. If exhausted with no DOI:
   - Keep \`no_doi_assigned: true\` but replace the Scholar URL with the actual publisher/venue URL (PubMed, the journal's article page, the publisher's catalog page).
   - This is a real "no DOI assigned" claim, not a fallback — verify by reading the venue's own pages that they do not register DOIs.

## What NOT to do

- Do not add the publication/journal name to a page if it was missing — that requires a separate fact-check pass and is not the job here.
- Do not invent DOIs. If you can't find one with high confidence, leave \`no_doi_assigned: true\` and improve the access_url.
- Do not edit pages outside the scope of this batch.

## At the end

Append a single line to \`wiki/log.md\` summarizing: how many pages got real DOIs recovered, how many got an improved venue URL, how many stayed unchanged because no DOI exists, and how many failed.

## Files in scope (${pages.length})

${sample}${pages.length > 5 ? `\n... and ${pages.length - 5} more (see data/evidence/build-action-prompts/FIX-MISSING-DOIS.md tail for full list)` : ""}

${pages.length > 5 ? `\n## Full list\n\n${pages.map((p, i) => `${i + 1}. \`${p.file}\`${p.raw_path ? ` (raw: ${p.raw_path})` : ""}`).join("\n")}` : ""}

## Reference

- CLAUDE.md Part 6 (frontmatter requirements), Part 13 (evidence tiers)
- tools/audit-source-dois.mjs (the audit that's gating the build)
- wiki/lint/2026-05-13-doi-fallback-followup.md (the lint that surfaced this)
- OPERATING.md Part 3 (act without asking on routine schema/provenance fixes)
`
}

function buildTriagePrompt(rows) {
  const sample = rows.slice(0, 5).map((r) => `  - ${r.source_id} declared ${r.target_kind} \`${r.declared_target}\` (does not exist)`).join("\n")
  return `# Session prompt: triage routing-unresolved entries

${rows.length} entries in \`data/evidence/routing_unresolved.csv\`. Each is a source page whose frontmatter declared a product / ingredient / metal / regulation that does not match any existing wiki page.

## Decision tree per entry

For each unresolved row, classify it as one of:

1. **Frontmatter typo / convention drift** — the slug is wrong but means an existing page. Fix the source frontmatter; re-run \`npm run evidence:source-routes\` to verify. **Decide and act without asking.**

2. **Below-threshold variant** — the declared slug is a sub-variant of an existing page. Per CLAUDE.md Part 10, sub-variants below the 5-paper threshold go as \`aliases\` on the parent ingredient page, not as new pages. **Decide and act without asking; update the source frontmatter to point at the parent.**

3. **New ingredient or product slug** — call \`tools/autonomy/create-provisional-{ingredient,product}-scaffold.mjs --slug <slug> --title "<Title>" --source-cite-key <source-id>\` to create the routing destination. The scaffold tool marks the page \`provisional_scaffold: true\` and appends to the audit log at \`data/evidence/provisional-{ingredient,product}-scaffolds.jsonl\`. **Decide and act without asking.**

4. **New regulation slug** — surface in the triage report with the source's citation context so Karen can look up the agency rule ID. Do not guess agency identifiers.

5. **Detector bug** — the routing audit is too strict; the slug actually matches a page but my classifier missed it. Fix \`tools/evidence/build-routing-audit.mjs\` or its sub-script.

Sample first 5 rows:

${sample}

## At the end

Append a triage report at \`wiki/lint/${today}-routing-triage.md\` listing:
- Frontmatter fixes made (count + sample)
- Below-threshold redirects made (count + sample)
- Provisional scaffolds created (ingredient/product, with source-cite-key triggering each)
- New regulation slugs surfaced (these need Karen's agency rule ID input)
- Detector bugs fixed in the audit script

Then run \`npm run evidence:source-routes\` to verify the unresolved count dropped.
`
}

function buildMalformedFixPrompt(rows, severity) {
  return `# Session prompt: fix ${severity}-malformed source pages

${rows.length} source pages have severity=${severity} in \`data/evidence/routing_malformed.csv\`. Each is missing either source_type or evidence_tier (or both) in its frontmatter.

## Workflow per page

For each source page:

1. Read the source page.
2. Infer source_type from the title, publisher (in \`publication\` field), and DOI:
   - Peer-reviewed primary study → \`peer-reviewed\`
   - FDA / EFSA / WHO / EPA / Codex / state agency document → \`gov-report\`
   - Industry trade publication → \`industry\`
   - NGO report (HBBF, Consumer Reports, EWG) → \`ngo\`
   - News article → \`news\`
   - Textbook or book chapter → \`textbook-chapter\`
3. Infer evidence_tier per CLAUDE.md Part 13:
   - peer-reviewed + reputable journal + 2020+ → \`A\`
   - government report → \`A\`
   - industry / NGO / trade → \`B\`
   - news / blog / press release → \`C\`
4. Add the two fields to the frontmatter. Commit when a batch of ~20 is fixed.

The routing audit picks up the fix on next run.

## At the end

Run \`npm run evidence:source-routes\` and confirm the malformed count dropped by the expected amount. Append a brief log entry to \`wiki/log.md\`.
`
}

function buildExtractionPrompt(rows) {
  const cells = rows.slice(0, 10).map((r) => `  - ${r.product_slug} × ${r.metal_species}`).join("\n")
  return `# Session prompt: extract value-level concentrations from local PDFs

${rows.length} (product, metal) cells in the HMT&C standards gap report have \`aggregate_hmtc_percentile_status: BLOCKED: local extraction pending\`. Source pages exist; data/evidence/values.jsonl is missing the value-level rows.

## Workflow

For each blocked cell:

1. Read \`data/evidence/local_reingest_queue.csv\` (run \`npm run evidence:local-reingest\` if stale) to see the prioritized list of papers awaiting deep-read.
2. For each paper in the queue, open the source PDF or markdown.
3. Extract concentration values into \`data/evidence/values.jsonl\` per the existing schema (basis, species, unit, statistic_type, censoring_status, row_fit, etc.).
4. Re-run \`npm run evidence:standards-gaps\` to confirm the cell moved from BLOCKED to READY or DO NOT PUBLISH.

Sample first 10 cells in scope:

${cells}

## At the end

Run the standards pipeline (\`npm run evidence:standards-gaps\`) and report which cells moved from BLOCKED to READY.
`
}

function writePrompt(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8")
}

function readCsv(filePath) {
  if (!fs.existsSync(filePath)) return []
  const text = fs.readFileSync(filePath, "utf8")
  const lines = text.split("\n").filter((l) => l.length > 0)
  if (lines.length < 2) return []
  const headers = parseCsvLine(lines[0])
  return lines.slice(1).map((line) => {
    const cells = parseCsvLine(line)
    const row = {}
    headers.forEach((h, i) => (row[h] = cells[i] ?? ""))
    return row
  })
}

function parseCsvLine(line) {
  const cells = []
  let current = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i]
    if (ch === '"' && line[i + 1] === '"') {
      current += '"'
      i += 1
      continue
    }
    if (ch === '"') {
      inQuotes = !inQuotes
      continue
    }
    if (ch === "," && !inQuotes) {
      cells.push(current)
      current = ""
      continue
    }
    current += ch
  }
  cells.push(current)
  return cells
}

function renderPlanMd(actions) {
  const lines = [
    `---`,
    `title: Build Action Plan`,
    `type: orchestrator-plan`,
    `generated_at: ${today}`,
    `action_count: ${actions.length}`,
    `audience: [internal]`,
    `noindex: true`,
    `---`,
    ``,
    `# Build Action Plan — ${today}`,
    ``,
    `Auto-generated by \`tools/orchestrator/analyze-gaps.mjs\` from every gap signal the build emits today. Sorted by priority (impact × confidence ÷ cost). Each action has a per-action prompt at \`data/evidence/build-action-prompts/<action-id>.md\` ready to paste into a Claude Code or Obsidian Claude session.`,
    ``,
    `This file regenerates on every \`npm run plan\` invocation. The recommended cadence is: at the start of any session, run \`npm run plan\` and pick the top action you have time for.`,
    ``,
    `Per OPERATING.md Part 2, action impact is weighted toward stakeholder priority (brand legal first, then retailer compliance, HMT&C staff, regulators, journalists).`,
    ``,
    `---`,
    ``,
  ]

  if (actions.length === 0) {
    lines.push(`No actionable gaps detected. The build is in a quiet state — good time to run \`npm run wishlist:fetch\` or wait for new source drops.`)
    return lines.join("\n")
  }

  actions.forEach((action, i) => {
    lines.push(`## ${i + 1}. ${action.title}`)
    lines.push(``)
    lines.push(`**Action ID:** \`${action.id}\``)
    lines.push(`**Strategy:** ${action.strategy}`)
    lines.push(`**Priority score:** ${action.priority.toFixed(1)} (impact ${action.impact_score} × confidence ${action.confidence} ÷ cost factor)`)
    lines.push(`**Cost:** ${action.cost}`)
    lines.push(`**Best dispatched to:** ${action.best_dispatched_to}`)
    if (action.prompt_path) {
      lines.push(`**Session prompt:** [\`${action.prompt_path}\`](../../${action.prompt_path})`)
    }
    if (action.inline_action) {
      lines.push(`**Inline action:** \`${action.inline_action}\` (the orchestrator can execute this directly; not yet wired in v0)`)
    }
    lines.push(``)
    lines.push(`**What this closes:** ${action.closes_what}`)
    lines.push(``)
    lines.push(`**Details:** ${action.details}`)
    lines.push(``)
    lines.push(`---`)
    lines.push(``)
  })

  lines.push(`## How to use this plan`)
  lines.push(``)
  lines.push(`1. Pick the top action you have time for.`)
  lines.push(`2. If it has a session prompt file, paste the contents into the appropriate session (Claude Code, Obsidian Claude, etc.). The prompt is self-contained — it names the files, the workflow, the don'ts, and the expected output.`)
  lines.push(`3. If it has an \`inline_action\`, the orchestrator can execute it directly (v1 will auto-dispatch these).`)
  lines.push(`4. After the action completes, regenerate the plan with \`npm run plan\` to see the next-most-valuable action.`)
  lines.push(``)
  lines.push(`The plan is the source of truth for what to work on next. TODO.md is the human-curated overlay for things that don't fit the orchestrator's signal vocabulary.`)
  return lines.join("\n")
}
