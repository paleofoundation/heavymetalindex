#!/usr/bin/env node
// Autonomous narrative-synthesis drainer for the daemon tick.
//
// Per Karen 2026-05-28: "Is there an autonomous system that is handling
// 'awaiting synthesis' sections? Will that run in my sleep?"
//
// Until now: NO. The synthesis writer (populate-contamination-profile.mjs)
// updates the YAML cells in contamination_profile every tick, but the
// per-page NARRATIVE PROSE — the paragraphs explaining "Why this commodity
// accumulates heavy metals", "Mitigation options", "Regulatory limits that
// apply", etc. on each ingredient + product page — was orchestrator-only.
// The mandatory-sections.mjs step inserts `_Pending synthesis. ..._`
// placeholders when an H2 is missing; nothing autonomous replaced them.
//
// This drainer closes the loop. Each tick: pick N pages with the
// placeholder text, spawn claude --print with a synthesis prompt, the
// nested session reads the page + contributing sources, drafts real
// content per CLAUDE.md Part 6 (mandatory sections) and Part 15 (writing
// style), replaces the placeholder, commits.
//
// Bounded per-tick cap (default 2) because each spawn is 5-15 min of
// Opus work reading multiple sources. As placeholders are drained, the
// drainer self-exhausts; new placeholders inserted by mandatory-
// sections.mjs (as new pages get created) are picked up on subsequent
// ticks.
//
// Usage:
//   node tools/autonomy/drain-pending-synthesis.mjs --max=2
//   node tools/autonomy/drain-pending-synthesis.mjs --dry-run
//   node tools/autonomy/drain-pending-synthesis.mjs --slug=infant-formula

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const maxPages = Number(args.get("max") ?? 2)
const slugOverride = args.get("slug") ?? null
const model = args.get("model") ?? "claude-opus-4-7"

const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date().toISOString().slice(0, 10)
const tickTimestamp = new Date().toISOString()

fs.mkdirSync(autonomyDir, { recursive: true })

console.log(`drain-pending-synthesis: max=${maxPages}, model=${model}, dry-run=${dryRun}, slug=${slugOverride || "auto"}`)

// ---------- Find pages with Pending synthesis placeholders ----------

const placeholderRe = /_Pending synthesis\./g
const candidates = []
const scanDirs = [
  { dir: "wiki/ingredients", kind: "ingredient" },
  { dir: "wiki/products",    kind: "product"    },
]
for (const { dir, kind } of scanDirs) {
  const fullDir = path.join(repoRoot, dir)
  if (!fs.existsSync(fullDir)) continue
  for (const file of fs.readdirSync(fullDir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const fullPath = path.join(fullDir, file)
    const content = fs.readFileSync(fullPath, "utf8")
    const placeholderCount = (content.match(placeholderRe) || []).length
    if (placeholderCount === 0) continue
    const slug = file.replace(/\.md$/, "")
    if (slugOverride && slug !== slugOverride) continue
    candidates.push({ slug, kind, file: path.relative(repoRoot, fullPath), placeholderCount })
  }
}

// Sort: pages with the most placeholders first (highest leverage per spawn).
// Within that, alphabetical for reproducibility.
candidates.sort((a, b) => {
  if (a.placeholderCount !== b.placeholderCount) return b.placeholderCount - a.placeholderCount
  return a.slug.localeCompare(b.slug)
})

const picked = candidates.slice(0, maxPages)

console.log(`\nPlaceholder-bearing pages: ${candidates.length} total (across ingredient + product)`)
if (candidates.length === 0) {
  console.log("Nothing to drain this run. The 'awaiting synthesis' surface is at 0.")
  process.exit(0)
}

console.log(`\nProcessing ${picked.length} page(s) this tick:`)
for (const c of picked) console.log(`  - ${c.file} (${c.placeholderCount} placeholders)`)

if (dryRun) {
  console.log("\nDRY RUN — not invoking claude.")
  process.exit(0)
}

// ---------- Per-page prompt ----------

function buildPrompt({ slug, kind, file, placeholderCount }) {
  const sectionListReminder = kind === "ingredient"
    ? `CLAUDE.md Part 6 mandatory sections for ingredient pages:
1. ## Why this commodity accumulates heavy metals
2. ## Heavy metal contamination profile (auto-generated table — do not hand-edit)
3. ## Ranges by source, region, and variety
4. ## Processing effects
5. ## Ingredient-derivative risk
6. ## Mitigation options (with subsections: Sourcing, Agronomic, Processing, Formulation, Testing & QC, Packaging & storage levers)
7. ## Regulatory limits that apply
8. ## Sources (auto-generated source legend — do not hand-write)`
    : `CLAUDE.md Part 6 mandatory sections for product-category pages:
1. ## Why this product accumulates heavy metals
2. ## Heavy metal contamination profile (auto-generated table — do not hand-edit)
3. ## Distinct product variants and processing
4. ## Geographic and seasonal variance
5. ## Mitigation options (with subsections: Sourcing, Agronomic, Processing, Formulation, Testing & QC, Packaging & storage levers)
6. ## Levers (brand-legal-actionable interventions ordered by impact)
7. ## Regulatory limits that apply
8. ## Recalls and enforcement actions (regulatory events, not brand rankings)
9. ## HMT&C certification context
10. ## Sources (auto-generated source legend — do not hand-write)`

  return `You are running one cycle of the Heavy Metal Index autonomous narrative-synthesis drainer. The page below has ${placeholderCount} \`_Pending synthesis. ..._\` placeholder paragraphs inserted by tools/autonomy/mandatory-sections.mjs when its H2 sections were missing real content. Your job: replace each placeholder paragraph with real synthesis prose drawn from the page's contributing sources.

cite-key / slug: ${slug}
page kind: ${kind}
page file: ${file}

Workflow:

1. Read the page in full: ${file}.
2. Read the routing audit data/evidence/product_source_routing_audit.csv. Filter rows where the target_slug equals "${slug}" (for products) OR where contributing-source frontmatter \`${kind}s:\` contains "${slug}" (for ingredients). These are the contributing source pages.
3. Read the TL;DR + ## Key numbers sections from the top 5-8 contributing source pages (those most cited or with highest sample size).
4. For each \`_Pending synthesis. ..._\` placeholder paragraph in the page body, draft replacement prose per CLAUDE.md Part 15 writing style:
   - Prose paragraphs, no bullets unless a list is structurally required
   - No em dashes
   - No inline bold for emphasis
   - Every numeric claim cites a contributing source via wikilink (e.g. "lead concentrations median 3.2 ppb, p95 12 ppb per [[sources/fda2024-...]] n=84 samples")
   - Plain register: Cochrane review / EFSA scientific opinion / WHO monograph
5. ${sectionListReminder}
6. Preserve everything outside the placeholder paragraphs. Do NOT touch:
   - Frontmatter (cite_key, sources, hmtc_category, contamination_profile, etc.)
   - The "## Heavy metal contamination profile" auto-generated body table
   - The "## Sources" / source-legend section between \`<!-- BEGIN: hmi-source-legend -->\` and \`<!-- END: ... -->\` markers
   - Any non-placeholder paragraphs already drafted
7. Run \`npm run evidence:source-routes\` (the routing audit). Confirm 0 unresolved and ${slug} not in malformed.
8. Commit with message:

   synth: ${slug} replace ${placeholderCount} placeholder paragraph(s)

   Sections drafted: <comma-separated list>
   Contributing sources: <comma-separated cite-keys>

   Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>

Hard constraints (per CLAUDE.md):
- Do NOT push to remote (the daemon tick handles the push at end of tick).
- Do NOT introduce new ingredient or product pages.
- Do NOT touch source pages (wiki/sources/*.md).
- Do NOT run Part 9 synthesis (the contamination_profile cells; that's populate-contamination-profile.mjs's job).
- Do NOT change \`hmtc_category\` or \`hmtc_row\` frontmatter.
- Do NOT modify inside \`<!-- BEGIN: hmi-source-legend -->\` markers.

Stop conditions (exit cleanly without committing partial work):
- ${file} does not exist
- Routing audit fails
- No contributing sources found (cannot draft without evidence; leave placeholders)
- A placeholder paragraph has no clear mapping to a drafted section

When done with this one page (drafted+committed, OR stopped cleanly), exit. Print a single final line to stdout: "DONE: ${slug} <N>placeholders-replaced" on success, "STOP: <reason>" on a stop condition, or "FAIL: <reason>" on an error.`
}

function invokeClaude(prompt) {
  const cliArgs = ["--print", "--model", model, "--add-dir", repoRoot]
  try {
    const res = spawnSync("claude", cliArgs, {
      cwd: repoRoot,
      input: prompt,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 25 * 60 * 1000,
    })
    if (res.error) return { error: res.error.message }
    if (res.status !== 0) return { error: `exit ${res.status}: ${(res.stderr || "").slice(0, 800)}` }
    const stdout = res.stdout || ""
    const lastLine = stdout.trim().split("\n").slice(-1)[0] || ""
    if (lastLine.startsWith("DONE:")) return { ok: true, summary: lastLine.slice(5).trim() }
    if (lastLine.startsWith("STOP:")) return { stop: true, reason: lastLine.slice(5).trim() }
    if (lastLine.startsWith("FAIL:")) return { error: lastLine.slice(5).trim() }
    return { error: `unrecognized final line: "${lastLine.slice(0, 200)}"` }
  } catch (err) {
    return { error: err.message }
  }
}

// ---------- Main loop ----------

const succeeded = []
const stopped = []
const failed = []

for (const candidate of picked) {
  console.log(`\n[${picked.indexOf(candidate) + 1}/${picked.length}] ${candidate.file}`)

  const prompt = buildPrompt(candidate)
  const result = invokeClaude(prompt)

  if (result.ok) {
    succeeded.push({ ...candidate, summary: result.summary })
    console.log(`  OK: ${result.summary}`)
  } else if (result.stop) {
    stopped.push({ ...candidate, reason: result.reason })
    console.log(`  STOP: ${result.reason}`)
  } else {
    failed.push({ ...candidate, error: result.error })
    console.log(`  FAIL: ${result.error}`)
  }
}

writeReport(picked, succeeded, stopped, failed)
console.log(`\nBatch complete: ${succeeded.length} OK, ${stopped.length} stopped, ${failed.length} failed`)
process.exit(0)

// ---------- Helpers ----------

function writeReport(batch, succeeded, stopped, failed) {
  const reportPath = path.join(autonomyDir, `pending-synthesis-drain-${today}.md`)
  const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Pending-synthesis drain report — ${today}\n\n`
  const lines = [existing.trimEnd(), "", `## Run ${tickTimestamp}`, ""]
  lines.push(`- Candidates this run: ${batch.length}`)
  lines.push(`- Succeeded (drafted and committed): ${succeeded.length}`)
  lines.push(`- Stopped (no contributing sources, etc.): ${stopped.length}`)
  lines.push(`- Failed (error, no commit): ${failed.length}`)
  lines.push("")
  if (succeeded.length) {
    lines.push("### Succeeded")
    for (const s of succeeded) lines.push(`- \`${s.slug}\` — ${s.summary}`)
    lines.push("")
  }
  if (stopped.length) {
    lines.push("### Stopped")
    for (const s of stopped) lines.push(`- \`${s.slug}\`: ${s.reason}`)
    lines.push("")
  }
  if (failed.length) {
    lines.push("### Failed")
    for (const f of failed) lines.push(`- \`${f.slug}\`: ${f.error}`)
    lines.push("")
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
}

function parseArgs(argv) {
  const args = new Map()
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq > 0) args.set(a.slice(2, eq), a.slice(eq + 1))
      else args.set(a.slice(2), "true")
    }
  }
  return Object.assign(args, { has: (k) => args.get(k) === "true" })
}
