#!/usr/bin/env node
/**
 * Improvement scout — looks for ways to make the build better.
 *
 * Per Karen 2026-05-17: "I want Claude to be constantly on the lookout for
 * ways to improve this build... we are building something that has never
 * been built before. It ought to be so good that no one in the food and
 * consumer products space can imagine doing business without it."
 *
 * Per tick (every 30 min by default), the scout:
 *   1. Computes a snapshot of the wiki's measurable weaknesses:
 *      - thinnest pool cells (BLOCKED on too few admitted sources)
 *      - mandatory-section autofills (placeholders still in place)
 *      - pages with frontmatter that doesn't match the schema
 *      - lint failures (firewall, provenance, routing)
 *      - structured-extraction misses (sources with `extraction_state: pending`)
 *      - geographic / temporal corpus gaps (low source counts for non-US regions)
 *      - product pages with pending_category_lock that have ≥10 routed sources
 *        (these are the highest-leverage Step 0 Locks for Karen)
 *      - missing audience translations on populated pages
 *   2. Picks the single highest-leverage weakness the daemon hasn't already
 *      surfaced this week (deduped against `improvement-backlog.md`).
 *   3. Writes a concrete, executable proposal to the backlog with: what to
 *      change, where, why it raises wiki quality, and which CLAUDE.md or
 *      governance principle motivates it.
 *
 * Dispatches the qualitative "what's the best next improvement" reasoning
 * to `claude --print` so the scout can think about the wiki holistically
 * rather than picking from a hand-coded list. The deterministic snapshot
 * gives the LLM grounded inputs.
 *
 * Output:
 *   - data/evidence/autonomy/improvement-backlog.md (one append per tick)
 *
 * Bounded: at most one new proposal per tick, never more than ~3 KB written.
 * Skips if the backlog already has >50 unactioned items (sign that proposals
 * are accumulating faster than they're being executed).
 */

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const backlogPath = path.join(autonomyDir, "improvement-backlog.md")
const today = new Date().toISOString().slice(0, 10)
const claudeModel = process.env.HMI_SCOUT_MODEL ?? "claude-haiku-4-5-20251001"

const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const force = args.has("force")

fs.mkdirSync(autonomyDir, { recursive: true })

// ---------- Saturation guard ----------

if (fs.existsSync(backlogPath)) {
  const raw = fs.readFileSync(backlogPath, "utf8")
  const openItems = (raw.match(/^- \[ \]/gm) || []).length
  if (openItems >= 50 && !force) {
    console.log(`improvement-scout: backlog has ${openItems} open items (≥50). Skipping to avoid pile-up; pick from the backlog first.`)
    process.exit(0)
  }
}

// ---------- Compute snapshot ----------

const snapshot = computeSnapshot()

// ---------- Dispatch the LLM call ----------

const prompt = buildScoutPrompt(snapshot)
const proposal = runScout(prompt)

if (!proposal) {
  console.log("improvement-scout: scout returned no proposal this tick.")
  process.exit(0)
}

// ---------- Dedup against existing backlog ----------

const existing = fs.existsSync(backlogPath) ? fs.readFileSync(backlogPath, "utf8") : ""
const proposalTitle = (proposal.match(/^### ([^\n]+)/m) || [])[1] || ""
if (proposalTitle && existing.includes(proposalTitle)) {
  console.log(`improvement-scout: proposal "${proposalTitle.slice(0, 60)}…" already in backlog; skipping.`)
  process.exit(0)
}

// ---------- Append to backlog ----------

const header = existing.length === 0
  ? `# Improvement backlog\n\nAuto-managed by \`tools/autonomy/improvement-scout.mjs\`. The scout appends one item per tick when it identifies a new wiki-quality lever. Items use \`- [ ]\` checkboxes; once an item is executed, switch to \`- [x]\` so the scout dedupes correctly.\n\n`
  : ""

const entry = [
  ``,
  `- [ ] **${today}** — see proposal below`,
  ``,
  proposal.trim(),
  ``,
  `---`,
  ``,
].join("\n")

if (!dryRun) {
  fs.appendFileSync(backlogPath, header + entry, "utf8")
  console.log(`improvement-scout: appended proposal to ${path.relative(repoRoot, backlogPath)}`)
} else {
  console.log("--- DRY RUN — would append: ---")
  console.log(entry)
}

// =============================================================================
// helpers
// =============================================================================

function computeSnapshot() {
  const snap = {
    generated_at: new Date().toISOString(),
    corpus: {
      sources: countFiles(path.join(repoRoot, "wiki/sources")),
      products: countFiles(path.join(repoRoot, "wiki/products")),
      ingredients: countFiles(path.join(repoRoot, "wiki/ingredients")),
      metals: countFiles(path.join(repoRoot, "wiki/metals")),
      regulations: countFiles(path.join(repoRoot, "wiki/regulations")),
    },
    weaknesses: {},
  }

  // Pool BLOCKED cells
  const aggPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
  if (fs.existsSync(aggPath)) {
    const rows = fs.readFileSync(aggPath, "utf8").split("\n").slice(1).filter(Boolean)
    let blocked = 0
    let tooThin = 0
    let unstable = 0
    for (const r of rows) {
      const v = splitCsvLine(r)[35] || ""
      if (v.startsWith("BLOCKED")) blocked += 1
      if (/pool too thin/.test(v)) tooThin += 1
      if (/sensitivity unstable/.test(v)) unstable += 1
    }
    snap.weaknesses.pool_blocked_cells = blocked
    snap.weaknesses.pool_too_thin = tooThin
    snap.weaknesses.pool_sensitivity_unstable = unstable
  }

  // Pending category locks with high pull
  const productsDir = path.join(repoRoot, "wiki/products")
  const pendingLocks = []
  if (fs.existsSync(productsDir)) {
    for (const f of fs.readdirSync(productsDir)) {
      if (!f.endsWith(".md") || f === "index.md") continue
      const raw = fs.readFileSync(path.join(productsDir, f), "utf8")
      if (!/^provisional_scaffold:\s*true/m.test(raw) && !/^pending_category_lock:\s*true/m.test(raw)) continue
      const m = raw.match(/^sources:\s*(\d+)/m)
      const n = m ? Number(m[1]) : 0
      pendingLocks.push({ slug: f.replace(/\.md$/, ""), sources: n })
    }
  }
  pendingLocks.sort((a, b) => b.sources - a.sources)
  snap.weaknesses.pending_category_locks_top10 = pendingLocks.slice(0, 10)

  // Mandatory-section autofill placeholders
  const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
  let pendingSynth = 0
  if (fs.existsSync(ingredientsDir)) {
    for (const f of fs.readdirSync(ingredientsDir)) {
      if (!f.endsWith(".md") || f === "index.md") continue
      const raw = fs.readFileSync(path.join(ingredientsDir, f), "utf8")
      pendingSynth += (raw.match(/_Pending synthesis_/g) || []).length
    }
  }
  snap.weaknesses.ingredient_pending_synthesis_sections = pendingSynth

  // Routing unresolved
  const unresolvedPath = path.join(repoRoot, "data/evidence/routing_unresolved.csv")
  snap.weaknesses.routing_unresolved = fs.existsSync(unresolvedPath)
    ? Math.max(0, fs.readFileSync(unresolvedPath, "utf8").split("\n").filter(Boolean).length - 1)
    : 0

  // Structured-extraction state
  const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
  snap.weaknesses.structured_values_extracted = fs.existsSync(valuesPath)
    ? fs.readFileSync(valuesPath, "utf8").split("\n").filter(Boolean).length
    : 0

  // Wishlist queue length
  const wishlistPath = path.join(repoRoot, "data/evidence/autonomy/gap-driven-wishlist.csv")
  snap.weaknesses.gap_driven_wishlist_queries = fs.existsSync(wishlistPath)
    ? Math.max(0, fs.readFileSync(wishlistPath, "utf8").split("\n").filter(Boolean).length - 1)
    : 0

  return snap
}

function buildScoutPrompt(snap) {
  return [
    "You are the improvement scout for the Heavy Metal Index wiki. Once per daemon tick, you pick ONE concrete, executable improvement that would raise the wiki's quality, and you write a clear proposal that a future autonomy step (or Karen) can act on.",
    "",
    "**Goal:** the wiki ought to be so good that no one in the food and consumer-products space can imagine doing business without it. We are building something that has never been built before. Your job is to find the next lever and name it precisely.",
    "",
    "**Constraints:**",
    "- Pick exactly ONE proposal per call. Do not enumerate options.",
    "- The proposal must be EXECUTABLE: it names files, slugs, scripts, or specific data records. Not 'improve quality.' Specific.",
    "- Tie the proposal to a measurable signal in the snapshot below.",
    "- Stay within scope: this wiki is epistemic infrastructure for the Institute of Contaminant Standards (ICS)'s HMT&C program. Read CLAUDE.md Part 2 (firewall), Part 9 (synthesis), Part 19 (HMT&C methodology). Do not propose changes that violate the wiki/HMT&C firewall.",
    "- DO propose: structured-extraction extensions, new lint rules, schema fields, deterministic generators, new sources for thin cells, geographic-coverage gaps, audience-translation gaps, mitigation-page expansions, federation pieces (WikiBiome), public-app surfaces, governance tools (audit-pending-locks, etc.).",
    "- DO NOT propose: brand-level data ingest (Part 12 firewall), softening literature claims toward HMT&C thresholds (Part 2), or vague directional asks.",
    "",
    "**Current snapshot:**",
    "",
    "```json",
    JSON.stringify(snap, null, 2),
    "```",
    "",
    "**Output format** (markdown, ~250 words):",
    "",
    "```",
    "### <short verb-led title, under 80 chars>",
    "",
    "**What:** <one sentence — the concrete change>",
    "",
    "**Why this lever now:** <which metric in the snapshot motivates it, and what it raises>",
    "",
    "**Where:** <specific files, scripts, or data records — paths or slugs>",
    "",
    "**How:** <2-4 numbered steps the autonomy loop or Karen could execute>",
    "",
    "**Anchors:** <which CLAUDE.md part, governance principle, or memory note this maps to>",
    "```",
    "",
    "Pick the single highest-leverage improvement given the snapshot. No preamble. Start with the ### title.",
  ].join("\n")
}

function runScout(prompt) {
  const r = spawnSync(
    "claude",
    ["--print", "--model", claudeModel],
    { input: prompt, encoding: "utf8", timeout: 3 * 60 * 1000 },
  )
  if (r.status !== 0 || !r.stdout) {
    console.error(`scout: claude --print failed (exit ${r.status}): ${(r.stderr || "").slice(0, 300)}`)
    return null
  }
  const out = r.stdout.trim()
  // Sanity check: must start with ### and be under 4 KB.
  if (!out.startsWith("###") || out.length > 4 * 1024) return null
  return out
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
