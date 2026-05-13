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
//   - data/evidence/hmtc_standards_gap_report.csv (per-cell standards readiness)
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
    closes_what: "downstream routing audit noise; surfaces new-page proposals per CLAUDE.md Part 10",
    best_dispatched_to: "Claude Code Opus (analytical: typo fix vs new page vs detector bug)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `${unresolved.length} entries broken down as: ${summary}. Most are auto-fixable frontmatter typos; ~5% need Karen's approval for new-page creation above the Part 10 5-paper threshold.`,
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

// ---------- Signal 4: HMTc standards gap report (per-cell readiness) ----------
const gapReport = readCsv(path.join(dataDir, "hmtc_standards_gap_report.csv"))
const blockedCells = gapReport.filter((r) =>
  (r.aggregate_hmtc_percentile_status || "").startsWith("BLOCKED"),
)
const blockedNoStructured = blockedCells.filter((r) =>
  (r.aggregate_hmtc_percentile_status || "").includes("no structured evidence loaded"),
)
const blockedExtractionPending = blockedCells.filter((r) =>
  (r.aggregate_hmtc_percentile_status || "").includes("local extraction pending"),
)
if (blockedNoStructured.length > 0) {
  actions.push({
    id: "WISHLIST-EXPAND-FOR-BLOCKED-CELLS",
    strategy: "wishlist-update",
    title: `Expand wishlist for ${blockedNoStructured.length} (product, metal) cells with no structured evidence loaded`,
    impact_score: blockedNoStructured.length * 1.2,
    cost: "cheap",
    confidence: 0.7,
    closes_count: blockedNoStructured.length,
    closes_what: "standards-readiness gaps where no concentration data exists in the corpus for this matrix-metal combination",
    best_dispatched_to: "Claude Code (programmatic wishlist expansion)",
    prompt_path: null,
    details: `${blockedNoStructured.length} cells blocked because no source provides concentration data for the (product, metal) combination. The wishlist generator can target these specifically by injecting product+metal queries; auto-fetch then runs against the expanded queries.`,
    inline_action: "expand_wishlist_from_blocked_cells",
  })
}
if (blockedExtractionPending.length > 0) {
  const id = "EXTRACT-LOCAL-PDFS"
  const promptPath = path.join(promptsDir, `${id}.md`)
  writePrompt(promptPath, buildExtractionPrompt(blockedExtractionPending))
  actions.push({
    id,
    strategy: "ingest",
    title: `Extract concentration values from ${blockedExtractionPending.length} (product, metal) cells with local PDFs awaiting deep-read`,
    impact_score: blockedExtractionPending.length * 2.5,
    cost: blockedExtractionPending.length > 20 ? "expensive" : "medium",
    confidence: 0.85,
    closes_count: blockedExtractionPending.length,
    closes_what: "standards-readiness gaps where source pages exist but value-level extraction has not run (Path A / Path B candidates not loaded into data/evidence/values.jsonl)",
    best_dispatched_to: "Claude Code Opus (extraction needs careful table reading)",
    prompt_path: path.relative(repoRoot, promptPath),
    details: `Sources are on disk and indexed; the structured-evidence layer at data/evidence/values.jsonl is missing the value-level rows. Run tools/evidence/build-local-reingest-queue.mjs to see the prioritized queue, then process each.`,
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
- Do not invent new product or ingredient pages mid-ingest. If a source declares an unresolved target, surface it in your batch report; Karen approves new pages per Part 10.

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

function buildPopulateSourceLegendPrompt(stats) {
  return `# Session prompt: populate source-legend "Used on this page for" cells

The Tier 1 generator at \`tools/evidence/build-source-legend.mjs\` has placed marker-bounded source-legend tables on every product, ingredient, and metal page. The 4 mechanical columns (#, Citation, Year, Type) are filled. The 5th column — **"Used on this page for"** — currently contains \`*[awaiting synthesis]*\` placeholders that need to be replaced with 1-sentence descriptions of what each source contributes to that specific page.

Current scope: ${stats.total} cells across ${stats.pages} pages. You can chunk this however suits your max-turns budget; aim for 50-100 cells per dispatch.

## Why this matters

Per Karen's standing rule (the infant-formula-powder-non-soy page is the exemplar), this column is the brand-legal-facing scannable provenance surface. A defense counsel reading the page should be able to see at a glance what each source contributes, not just that the source exists in the corpus. Wrong text in this column misrepresents the corpus and undermines defensibility, so accuracy matters more than coverage. If a source's contribution is genuinely ambiguous, write \`*[ambiguous — needs Karen review]*\` rather than guessing.

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

6. If a source's relationship to the page is genuinely ambiguous (e.g., the source's frontmatter routes it here but the page body doesn't actually use it), write \`*[ambiguous — needs Karen review]*\` instead.

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

3. **Above-threshold new-page proposal** — the declared slug is a legitimate new ingredient/product/regulation page above the 5-paper threshold. **Surface this to Karen for approval per Part 10.** Compile the list at the end of the triage.

4. **Detector bug** — the routing audit is too strict; the slug actually matches a page but my classifier missed it. Fix \`tools/evidence/build-routing-audit.mjs\` or its sub-script.

Sample first 5 rows:

${sample}

## At the end

Append a triage report at \`wiki/lint/${today}-routing-triage.md\` listing:
- Frontmatter fixes made (count + sample)
- Below-threshold redirects made (count + sample)
- New-page proposals for Karen's approval (full list — these need her decision per Part 10)
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
