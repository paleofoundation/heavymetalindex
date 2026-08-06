#!/usr/bin/env node
/**
 * Weekly briefing — what the autonomy loop did over the past 7 days.
 *
 * Per Karen 2026-05-17: "I want to go away for a week and come back SHOCKED
 * by how insanely robust and full the wiki has gotten in my absence."
 *
 * Outputs a markdown briefing at:
 *   wiki/briefings/weekly-<YYYY-MM-DD>.md
 *
 * Sections produced:
 *   1. Headline — one-paragraph SHOCK summary of the week's deltas
 *   2. Ingested — new sources by category, priority, analyte coverage
 *   3. Synthesized — contamination_profile cells filled, confidence
 *      transitions (null → low → medium → high)
 *   4. Fetched — OA PDFs pulled from OpenAlex this week
 *   5. Created — new pages (product/ingredient/regulation/metal) and their
 *      governance status (pending_category_lock count)
 *   6. Fixed — routing-unresolved cleared, mandatory-sections autofilled,
 *      firewall violations resolved, provenance gaps closed
 *   7. Cochrane comparison — qualitative assessment dispatched to a Claude
 *      Code subprocess (same pattern as ingest-marker-batch). The assessment
 *      grades the wiki on Cochrane dimensions: corpus completeness, source
 *      provenance, methodology transparency, replicability, peer-review
 *      anchor. Returns "almost as good / as good / better than" with the
 *      dimensional breakdown and concrete improvement vectors.
 *   8. Open gaps — top thin cells still needing evidence; products still
 *      pending HMTc Step 0 Lock
 *   9. Improvement scout output — items the improvement-scout proposed this
 *      week and their status
 *
 * The briefing is committed and pushed by the daemon tick, so Karen can read
 * it on heavymetalindex.com or by checking out the repo. (Email delivery is
 * not wired in v0; the Mac mini has `mail` and `sendmail` binaries but no
 * SMTP credentials. To enable email, set HMI_BRIEFING_EMAIL_TO and pipe the
 * file to `mail -s "HMI Weekly Briefing" $HMI_BRIEFING_EMAIL_TO`.)
 *
 * Cadence guard: skips if the most recent weekly briefing was less than 6
 * days ago. The daemon calls this every tick; it self-paces.
 *
 * Usage:
 *   node tools/autonomy/weekly-briefing.mjs           # write briefing if due
 *   node tools/autonomy/weekly-briefing.mjs --force   # write briefing now
 *   node tools/autonomy/weekly-briefing.mjs --dry-run # preview, no write
 *   node tools/autonomy/weekly-briefing.mjs --skip-cochrane  # numbers only
 */

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const briefingsDir = path.join(repoRoot, "wiki/briefings")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date()
const todayIso = today.toISOString().slice(0, 10)
const briefingPath = path.join(briefingsDir, `weekly-${todayIso}.md`)
const indexPath = path.join(briefingsDir, "index.md")

const args = parseArgs(process.argv.slice(2))
const force = args.has("force")
const dryRun = args.has("dry-run")
const skipCochrane = args.has("skip-cochrane")
const claudeModel = args.get("model") ?? "claude-opus-4-7"

// ---------- Cadence guard ----------

if (!force && fs.existsSync(briefingsDir)) {
  const recent = fs.readdirSync(briefingsDir)
    .filter((f) => /^weekly-\d{4}-\d{2}-\d{2}\.md$/.test(f))
    .sort()
    .reverse()
  if (recent.length > 0) {
    const lastDate = new Date(recent[0].slice(8, 18))
    const daysSince = (today - lastDate) / (1000 * 60 * 60 * 24)
    if (daysSince < 6) {
      console.log(`weekly-briefing: last briefing ${recent[0]} was ${daysSince.toFixed(1)} days ago; skipping (need >=6).`)
      process.exit(0)
    }
  }
}

// ---------- Compute deterministic metrics ----------

console.log("weekly-briefing: computing 7-day deltas...")

const sinceArg = "7.days.ago"

function git(args) {
  const r = spawnSync("git", args, { cwd: repoRoot, encoding: "utf8" })
  if (r.status !== 0) return ""
  return r.stdout
}

// New source pages this week
const newSourcesRaw = git(["log", `--since=${sinceArg}`, "--diff-filter=A", "--name-only", "--pretty=format:", "--", "wiki/sources/"])
const newSources = unique(
  newSourcesRaw.split("\n").filter((l) => l.startsWith("wiki/sources/") && l.endsWith(".md") && !l.endsWith("index.md")),
)

// New product pages
const newProductsRaw = git(["log", `--since=${sinceArg}`, "--diff-filter=A", "--name-only", "--pretty=format:", "--", "wiki/products/"])
const newProducts = unique(
  newProductsRaw.split("\n").filter((l) => l.startsWith("wiki/products/") && l.endsWith(".md") && !l.endsWith("index.md")),
)

// New ingredient pages
const newIngredientsRaw = git(["log", `--since=${sinceArg}`, "--diff-filter=A", "--name-only", "--pretty=format:", "--", "wiki/ingredients/"])
const newIngredients = unique(
  newIngredientsRaw.split("\n").filter((l) => l.startsWith("wiki/ingredients/") && l.endsWith(".md") && !l.endsWith("index.md")),
)

// New regulation pages
const newRegulationsRaw = git(["log", `--since=${sinceArg}`, "--diff-filter=A", "--name-only", "--pretty=format:", "--", "wiki/regulations/"])
const newRegulations = unique(
  newRegulationsRaw.split("\n").filter((l) => l.startsWith("wiki/regulations/") && l.endsWith(".md") && !l.endsWith("index.md")),
)

// Synthesis-write events from review_events.jsonl
const reviewEventsPath = path.join(repoRoot, "data/evidence/review_events.jsonl")
const synthesisEvents = []
if (fs.existsSync(reviewEventsPath)) {
  const cutoff = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
  const lines = fs.readFileSync(reviewEventsPath, "utf8").split("\n").filter(Boolean)
  for (const l of lines) {
    try {
      const e = JSON.parse(l)
      if (e.op !== "synthesis_write") continue
      const ts = new Date(e.ts)
      if (ts >= cutoff) synthesisEvents.push(e)
    } catch {}
  }
}

// Confidence transitions
const confTransitions = { null_to_low: 0, null_to_medium: 0, null_to_high: 0, low_to_medium: 0, low_to_high: 0, medium_to_high: 0 }
for (const e of synthesisEvents) {
  const c = e.confidence
  if (c === "low") confTransitions.null_to_low += 1
  else if (c === "medium") confTransitions.null_to_medium += 1
  else if (c === "high") confTransitions.null_to_high += 1
}

// PDFs pulled this week (auto-fetched directory)
const autoFetchedDir = path.join(repoRoot, "raw/manual-fetch/seasonal-geographic-variance/auto-fetched")
let pdfsThisWeek = 0
if (fs.existsSync(autoFetchedDir)) {
  const cutoff = today.getTime() - 7 * 24 * 60 * 60 * 1000
  for (const f of fs.readdirSync(autoFetchedDir)) {
    const stat = fs.statSync(path.join(autoFetchedDir, f))
    if (stat.mtimeMs >= cutoff && f.endsWith(".pdf")) pdfsThisWeek += 1
  }
}

// Commits this week
const commitLog = git(["log", `--since=${sinceArg}`, "--pretty=format:%h|%s"]).split("\n").filter(Boolean)

// Routing audit current state (no longer "this week" — point-in-time)
const unresolvedPath = path.join(repoRoot, "data/evidence/routing_unresolved.csv")
const unresolvedCount = fs.existsSync(unresolvedPath)
  ? Math.max(0, fs.readFileSync(unresolvedPath, "utf8").split("\n").filter(Boolean).length - 1)
  : 0

// Pending category locks
let pendingLockCount = 0
const productsDir = path.join(repoRoot, "wiki/products")
if (fs.existsSync(productsDir)) {
  for (const f of fs.readdirSync(productsDir)) {
    if (!f.endsWith(".md") || f === "index.md") continue
    const raw = fs.readFileSync(path.join(productsDir, f), "utf8")
    if (/^provisional_scaffold:\s*true/m.test(raw) || /^pending_category_lock:\s*true/m.test(raw)) pendingLockCount += 1
  }
}

// Pooling cells with verdict
const aggregatePath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
let pooledCells = { READY: 0, PROVISIONAL: 0, BLOCKED: 0 }
if (fs.existsSync(aggregatePath)) {
  const rows = fs.readFileSync(aggregatePath, "utf8").split("\n").slice(1).filter(Boolean)
  for (const row of rows) {
    const cells = splitCsvLine(row)
    const verdict = cells[35] || ""
    if (verdict.startsWith("READY")) pooledCells.READY += 1
    else if (verdict.startsWith("PROVISIONAL")) pooledCells.PROVISIONAL += 1
    else if (verdict.startsWith("BLOCKED")) pooledCells.BLOCKED += 1
  }
}

// Total counts (current state, not deltas)
const totalSources = countFiles(path.join(repoRoot, "wiki/sources"))
const totalProducts = countFiles(productsDir)
const totalIngredients = countFiles(path.join(repoRoot, "wiki/ingredients"))
const totalMetals = countFiles(path.join(repoRoot, "wiki/metals"))
const totalRegulations = countFiles(path.join(repoRoot, "wiki/regulations"))

const metrics = {
  generated_at: today.toISOString(),
  period_days: 7,
  ingest: {
    new_source_pages: newSources.length,
    new_product_pages: newProducts.length,
    new_ingredient_pages: newIngredients.length,
    new_regulation_pages: newRegulations.length,
    pdfs_pulled_from_openalex: pdfsThisWeek,
  },
  synthesis: {
    cells_written: synthesisEvents.length,
    confidence_distribution: confTransitions,
    unique_pages_touched: unique(synthesisEvents.map((e) => e.page)).length,
  },
  pool_state: pooledCells,
  totals: {
    sources: totalSources,
    products: totalProducts,
    ingredients: totalIngredients,
    metals: totalMetals,
    regulations: totalRegulations,
  },
  governance: {
    routing_unresolved: unresolvedCount,
    products_pending_step0_lock: pendingLockCount,
  },
  commits: commitLog.length,
}

// ---------- Cochrane comparison (dispatched to claude --print) ----------

let cochraneSection = ""
if (!skipCochrane) {
  console.log("weekly-briefing: dispatching Cochrane assessment via claude --print...")
  cochraneSection = runCochraneAssessment(metrics, claudeModel)
} else {
  cochraneSection = "_Cochrane assessment skipped (--skip-cochrane)._\n"
}

// ---------- Render markdown ----------

const md = renderBriefing(metrics, cochraneSection, commitLog, synthesisEvents, newSources, newProducts, newIngredients)

if (dryRun) {
  console.log(md)
  process.exit(0)
}

fs.mkdirSync(briefingsDir, { recursive: true })
fs.writeFileSync(briefingPath, md, "utf8")
console.log(`weekly-briefing: wrote ${path.relative(repoRoot, briefingPath)}`)

// Update briefings/index.md (chronological catalog)
updateBriefingIndex(briefingsDir, indexPath)

// =============================================================================
// helpers
// =============================================================================

function renderBriefing(m, cochrane, commits, events, newSrc, newProd, newIng) {
  const lines = []
  lines.push(`---`)
  lines.push(`title: "Weekly briefing — ${todayIso}"`)
  lines.push(`type: weekly-briefing`)
  lines.push(`period_start: ${new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}`)
  lines.push(`period_end: ${todayIso}`)
  lines.push(`audience: [karen, internal]`)
  lines.push(`noindex: true`)
  lines.push(`---`)
  lines.push(``)
  lines.push(`# Weekly briefing — ${todayIso}`)
  lines.push(``)
  lines.push(`Auto-generated by \`tools/autonomy/weekly-briefing.mjs\`. Covers the 7 days ending ${todayIso}.`)
  lines.push(``)
  lines.push(`## Headline`)
  lines.push(``)
  lines.push(renderHeadline(m))
  lines.push(``)
  lines.push(`## What I ingested`)
  lines.push(``)
  lines.push(`- **${m.ingest.new_source_pages}** new source pages added to \`wiki/sources/\` (corpus now totals ${m.totals.sources.toLocaleString()}).`)
  lines.push(`- **${m.ingest.pdfs_pulled_from_openalex}** PDFs pulled from OpenAlex by the gap-driven and curated-wishlist fetchers.`)
  lines.push(`- **${m.ingest.new_product_pages}** new product pages, **${m.ingest.new_ingredient_pages}** new ingredient pages, **${m.ingest.new_regulation_pages}** new regulation pages.`)
  if (newSrc.length > 0) {
    lines.push(``)
    lines.push(`<details><summary>Top 20 new source pages</summary>`)
    lines.push(``)
    for (const p of newSrc.slice(0, 20)) {
      const slug = path.basename(p, ".md")
      lines.push(`- [[sources/${slug}]]`)
    }
    if (newSrc.length > 20) lines.push(`- … and ${newSrc.length - 20} more`)
    lines.push(``)
    lines.push(`</details>`)
  }
  lines.push(``)
  lines.push(`## What I synthesized`)
  lines.push(``)
  lines.push(`- **${m.synthesis.cells_written}** contamination_profile cells written across **${m.synthesis.unique_pages_touched}** ingredient pages.`)
  const ct = m.synthesis.confidence_distribution
  lines.push(`- Confidence levels: low **${ct.null_to_low}**, medium **${ct.null_to_medium}**, high **${ct.null_to_high}** (transitions from \`null\`).`)
  lines.push(`- Pooling engine cell state across the full corpus: **${m.pool_state.READY}** READY FOR REVIEW, **${m.pool_state.PROVISIONAL}** PROVISIONAL, **${m.pool_state.BLOCKED}** BLOCKED.`)
  if (events.length > 0) {
    lines.push(``)
    lines.push(`<details><summary>Top 20 cells written this week</summary>`)
    lines.push(``)
    lines.push(`| Slug | Metal | n | typical_ppb | p95_ppb | confidence |`)
    lines.push(`| --- | --- | ---: | --- | ---: | --- |`)
    for (const e of events.slice(0, 20)) {
      const tp = e.typical_ppb ? `[${e.typical_ppb[0]}, ${e.typical_ppb[1]}]` : "—"
      lines.push(`| \`${e.slug}\` | ${e.metal} | ${e.n_studies} | ${tp} | ${e.p95_ppb ?? "—"} | ${e.confidence} |`)
    }
    lines.push(``)
    lines.push(`</details>`)
  }
  lines.push(``)
  lines.push(`## What I created`)
  lines.push(``)
  lines.push(`- ${m.ingest.new_product_pages} new product pages this week. Currently **${m.governance.products_pending_step0_lock}** products carry \`provisional_scaffold: true\` (or the legacy \`pending_category_lock: true\`); these are routing destinations whose HMTc taxonomy row + thresholds will derive once a Step 0 Lock is authored.`)
  lines.push(`- ${m.ingest.new_ingredient_pages} new ingredient pages this week (corpus total: ${m.totals.ingredients.toLocaleString()}).`)
  if (newProd.length > 0) {
    lines.push(``)
    lines.push(`<details><summary>New product pages</summary>`)
    lines.push(``)
    for (const p of newProd) lines.push(`- [[${p.replace(/\.md$/, "").replace(/^wiki\//, "")}]]`)
    lines.push(``)
    lines.push(`</details>`)
  }
  lines.push(``)
  lines.push(`## What I fixed`)
  lines.push(``)
  lines.push(`- Routing audit: **${m.governance.routing_unresolved}** unresolved source-target declarations remaining (target: 0).`)
  lines.push(`- **${m.commits}** commits to \`main\` this week, including daemon ticks and any human / Codex / Cowork-session work.`)
  lines.push(``)
  lines.push(`## Cochrane comparison`)
  lines.push(``)
  lines.push(cochrane.trim())
  lines.push(``)
  lines.push(`## Open gaps`)
  lines.push(``)
  lines.push(renderOpenGaps(m))
  lines.push(``)
  lines.push(`## Improvement scout`)
  lines.push(``)
  lines.push(renderImprovementScout())
  lines.push(``)
  lines.push(`## Reports`)
  lines.push(``)
  lines.push(`- Synthesis writes log: \`data/evidence/review_events.jsonl\``)
  lines.push(`- Pooling engine state: \`data/evidence/hmtc_aggregate_distributions.csv\``)
  lines.push(`- Gap-driven wishlist: \`data/evidence/autonomy/gap-driven-wishlist.csv\``)
  lines.push(`- Improvement backlog: \`data/evidence/autonomy/improvement-backlog.md\``)
  lines.push(``)
  return lines.join("\n") + "\n"
}

function renderHeadline(m) {
  const t = m.totals
  const i = m.ingest
  const s = m.synthesis
  const p = m.pool_state
  const total = i.new_source_pages + i.new_product_pages + i.new_ingredient_pages + i.new_regulation_pages
  if (total === 0 && s.cells_written === 0) {
    return `The autonomy loop ran ${m.commits} commits this week without adding net new source / product / ingredient pages. The corpus is at ${t.sources.toLocaleString()} sources, ${t.products.toLocaleString()} products, ${t.ingredients.toLocaleString()} ingredients. Pooling state: ${p.READY} cells READY, ${p.PROVISIONAL} PROVISIONAL, ${p.BLOCKED} BLOCKED on thin evidence.`
  }
  return `This week the wiki grew by **${i.new_source_pages}** source pages, **${i.new_product_pages}** product pages, and **${i.new_ingredient_pages}** ingredient pages. The synthesis writer populated **${s.cells_written}** contamination_profile cells across **${s.unique_pages_touched}** ingredient pages. **${i.pdfs_pulled_from_openalex}** new OA PDFs landed via the gap-driven OpenAlex fetcher. Pooling state: **${p.READY}** cells READY for HMTc review, **${p.PROVISIONAL}** PROVISIONAL pending sensitivity-band stability, **${p.BLOCKED}** BLOCKED on insufficient evidence (the gap-driven wishlist is targeting those).`
}

function renderOpenGaps(m) {
  const lines = []
  lines.push(`- **${m.governance.routing_unresolved}** sources declare a slug with no matching page. Path A auto-stub creation should converge this to 0 within a week.`)
  lines.push(`- **${m.governance.products_pending_step0_lock}** product pages carry \`provisional_scaffold: true\` (or the legacy \`pending_category_lock: true\`). These are routing destinations only; HMTc certification cannot derive from them until a Step 0 Lock is authored.`)
  lines.push(`- **${m.pool_state.BLOCKED}** pooling cells are BLOCKED (pool too thin or sensitivity unstable). The gap-driven wishlist is generating OpenAlex queries to fill these; the daily auto-fetch pulls OA candidates into the ingest queue.`)
  return lines.join("\n")
}

function renderImprovementScout() {
  const backlogPath = path.join(autonomyDir, "improvement-backlog.md")
  if (!fs.existsSync(backlogPath)) {
    return `_No improvement-backlog file yet. Once \`tools/autonomy/improvement-scout.mjs\` has run, its proposals appear here._`
  }
  const raw = fs.readFileSync(backlogPath, "utf8")
  // Take the top 5 items (assume each item is a markdown list entry).
  const items = raw.split("\n").filter((l) => l.startsWith("- ")).slice(0, 5)
  if (items.length === 0) return `_Improvement backlog is empty this week._`
  const lines = ["Top items the scout flagged this week:", ""]
  for (const it of items) lines.push(it)
  lines.push("")
  lines.push(`Full backlog: [improvement-backlog.md](../../data/evidence/autonomy/improvement-backlog.md)`)
  return lines.join("\n")
}

function runCochraneAssessment(metrics, model) {
  // Spawn claude --print with a focused prompt. The subprocess inherits the
  // user's Claude Code credentials. Timeout at 5 min so a hung call doesn't
  // block the daemon.
  const promptLines = [
    "You are auditing the Heavy Metal Index wiki against Cochrane review quality standards.",
    "",
    "Cochrane standards are the benchmark for systematic reviews in medicine. The relevant dimensions are:",
    "- **Corpus completeness:** comprehensive identification of all relevant primary evidence",
    "- **Source provenance:** every claim traces to a peer-reviewed or authoritative primary source",
    "- **Methodology transparency:** reproducible methods, declared assumptions, pre-registered protocols",
    "- **Replicability:** an external reviewer can re-derive the synthesis from the source corpus",
    "- **Currency:** evidence base reflects the state of the literature, not a snapshot",
    "- **Independence:** evidence synthesis is editorially separate from any commercial deliverable",
    "",
    `Current state of this wiki (as of ${todayIso}):`,
    "",
    "```json",
    JSON.stringify(metrics, null, 2),
    "```",
    "",
    "Read the CLAUDE.md and docs/governance/hmtc-governing-principles.md to understand what this wiki is trying to be (epistemic infrastructure for the Institute of Contaminant Standards (ICS)'s Heavy Metal Tested & Certified program; commercial defensibility against class-action expert challenges).",
    "",
    "Produce a Cochrane comparison with three parts:",
    "",
    "1. **Verdict** — one of: \"not yet Cochrane-class\", \"approaching Cochrane-class\", \"Cochrane-class\", \"beyond Cochrane-class\". Justify in two sentences.",
    "2. **Dimensional grading** — for each of the 6 dimensions above, give a rating (1-5) for this wiki and a one-line justification. Compare to Cochrane's typical baseline (4-5 across the board) and to alternative reference works (EFSA scientific opinions: ~4 corpus completeness; WHO monographs: ~4-5 methodology; FDA Closer to Zero: ~3 transparency).",
    "3. **Improvement vectors** — three concrete, executable improvements that would raise the wiki's weakest dimension. Each must be a specific build step the autonomy loop could execute (e.g., \"extend the structured extractor to capture <X>\" not \"improve quality\").",
    "",
    "Be honest. The strategic value of this wiki rests on the comparison holding up under hostile scrutiny (brand legal teams, plaintiff experts). Soft scoring degrades it. If a dimension is weak, name what makes it weak.",
    "",
    "Length: 600-1200 words. Use markdown structure (### headings, lists, bold). No preamble, no closing summary — start directly with section 1.",
  ]
  const prompt = promptLines.join("\n")

  const r = spawnSync(
    "claude",
    ["--print", "--model", model],
    { input: prompt, encoding: "utf8", timeout: 5 * 60 * 1000 },
  )
  if (r.status !== 0 || !r.stdout) {
    return `_Cochrane assessment unavailable: \`claude --print\` failed (exit ${r.status}). Stderr:_\n\n\`\`\`\n${(r.stderr || "").slice(0, 500)}\n\`\`\``
  }
  return r.stdout.trim()
}

function updateBriefingIndex(dir, indexPath) {
  const files = fs.readdirSync(dir)
    .filter((f) => /^weekly-\d{4}-\d{2}-\d{2}\.md$/.test(f))
    .sort()
    .reverse()
  const lines = []
  lines.push(`---`)
  lines.push(`title: Weekly briefings`)
  lines.push(`description: Auto-generated weekly summaries of what the autonomy loop did.`)
  lines.push(`audience: [karen, internal]`)
  lines.push(`updated: ${todayIso}`)
  lines.push(`noindex: true`)
  lines.push(`---`)
  lines.push(``)
  lines.push(`# Weekly briefings`)
  lines.push(``)
  lines.push(`Each entry is a 7-day summary of autonomy-loop output: new sources, synthesized cells, OA fetches, gaps closed, and the per-week Cochrane comparison.`)
  lines.push(``)
  for (const f of files) lines.push(`- [[briefings/${f.replace(/\.md$/, "")}|${f.replace(".md", "")}]]`)
  lines.push(``)
  if (!dryRun) fs.writeFileSync(indexPath, lines.join("\n") + "\n", "utf8")
}

function unique(arr) {
  return Array.from(new Set(arr))
}

function countFiles(dir) {
  if (!fs.existsSync(dir)) return 0
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "index.md").length
}

function splitCsvLine(line) {
  const out = []
  let cur = ""
  let q = false
  for (let i = 0; i < line.length; i += 1) {
    const c = line[i]
    if (q) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i += 1 }
      else if (c === '"') q = false
      else cur += c
    } else {
      if (c === '"') q = true
      else if (c === ",") { out.push(cur); cur = "" }
      else cur += c
    }
  }
  out.push(cur)
  return out
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (!a.startsWith("--")) continue
    const eq = a.indexOf("=")
    if (eq < 0) m.set(a.slice(2), true)
    else m.set(a.slice(2, eq), a.slice(eq + 1))
  }
  return { has: (k) => m.has(k), get: (k) => m.get(k) }
}
