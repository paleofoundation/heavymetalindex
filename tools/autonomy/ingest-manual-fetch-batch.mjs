#!/usr/bin/env node
// Autonomous manual-fetch PDF ingester for the daemon tick.
//
// Walks the three manual-fetch folders (raw/Manual Fetch Kimi /,
// raw/Manual Resourcing/, raw/Papers Cube Manual Fetch/), maintains
// a per-PDF tracker, picks N unprocessed PDFs per tick, and invokes
// `claude --print` to run the full Cochrane workflow per PDF:
//
//   1. Read the PDF (with pages parameter as needed for long PDFs)
//   2. Identity-check: DOI grep + raw_handle grep + cite-key grep against wiki/sources/
//   3. NEW path: write a fresh source page per Part 6 template
//      EXISTING path: merge-enhance against the existing page, preserving
//      cite_key/raw_handle/access_url, fixing defects per the verification-
//      checklist (invalid slugs, brand-firewall violations, transposed values,
//      legacy headings, missing exposure numbers, etc.)
//   4. Run routing audit (npm run evidence:source-routes)
//   5. Spawn fresh-context audit subagent via Agent tool
//      (subagent_type: general-purpose) with the 5-check audit prompt
//   6. Verify each ❌ finding independently against the source; apply real
//      ones, push back on false positives with disproving citations
//   7. Commit ingest + audit application
//   8. Append to data/evidence/audit-queue.csv with audited-* status
//
// The wrapper handles candidate selection, claude subprocess invocation,
// tracker updates, and batch reporting. The spawned claude does the full
// per-PDF Cochrane workflow inside one invocation.
//
// Per OPERATING.md Part 3 ("no approval gates") and Karen's 2026-05-17
// directive ("take me out of this equation"), this runs unattended.
// Stop conditions surface in the morning report; they do not block the
// daemon tick.
//
// Usage:
//   node tools/autonomy/ingest-manual-fetch-batch.mjs --max-pdfs=3
//   node tools/autonomy/ingest-manual-fetch-batch.mjs --max-pdfs=1 --folder="06_Infant_Foods_Formula"
//   node tools/autonomy/ingest-manual-fetch-batch.mjs --dry-run
//
// Args:
//   --max-pdfs=N         Maximum PDFs to process this tick (default 3; soft cap)
//   --folder=NAME        Restrict to a specific folder (default: walk all in priority order)
//   --model=NAME         Claude CLI model name (default claude-opus-4-7; this is judgment-heavy work)
//   --dry-run            Identify candidates, do not invoke claude
//   --rebuild-tracker    Rebuild the tracker CSV from scratch by walking folders

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const rebuildTracker = args.has("rebuild-tracker")
const maxPdfs = Number(args.get("max-pdfs") ?? 3)
const folderRestrict = args.get("folder") ?? null
const model = args.get("model") ?? "claude-opus-4-7"

const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const trackerPath = path.join(autonomyDir, "manual-fetch-tracker.csv")
const today = new Date().toISOString().slice(0, 10)
const tickTimestamp = new Date().toISOString()

// Priority order — highest-stakes path patterns first. Walker recurses under
// each ROOT and picks any PDF whose path includes the PRIORITY KEYWORD. Order
// matters: PDFs in earlier-listed priority buckets are processed first.
const MANUAL_FETCH_ROOTS = [
  { root: "raw/Manual Fetch Kimi ", handlePrefix: "MFK" },
  { root: "raw/Papers Cube Manual Fetch", handlePrefix: "PCMF" },
  { root: "raw/Manual Resourcing", handlePrefix: "MR" },
  { root: "raw/Manual Fetch Discovery", handlePrefix: "MFD" },
]

const PRIORITY_KEYWORDS = [
  "06_Infant_Foods_Formula",
  "Children Personal Care",
  "04_Meat_Poultry_Seafood",
  "03_Grains_and_Grain_Products",
  "05_Dairy_Eggs_and_Alternatives",
  "Papers Cube Manual Fetch",
  "01_Fruits_and_Fruit_Products",
  "02_Vegetables_and_Vegetable_Products",
  "07_Processed_Foods_Snacks_Beverages",
  "08_Nuts_Seeds_Legumes_and_Misc",
  "condiment_papers",
  "Manual Resourcing",
  "Manual Fetch Discovery",
  // catch-all bucket for top-level loose PDFs and any others
  "",
]

fs.mkdirSync(autonomyDir, { recursive: true })

console.log(`ingest-manual-fetch-batch: max-pdfs=${maxPdfs}, model=${model}, dry-run=${dryRun}, folder=${folderRestrict || "all"}`)

// ---------- Tracker management ----------

function loadTracker() {
  if (!fs.existsSync(trackerPath) || rebuildTracker) {
    return new Map()
  }
  const lines = fs.readFileSync(trackerPath, "utf8").split("\n").filter(Boolean)
  const map = new Map()
  for (let i = 1; i < lines.length; i++) {
    const [pdfPath, handle, status, lastTick, citeKey, notes] = parseCsvLine(lines[i])
    map.set(pdfPath, { handle, status, lastTick, citeKey, notes })
  }
  return map
}

function saveTracker(tracker) {
  const header = "pdf_path,handle,status,last_tick,cite_key,notes"
  const rows = []
  for (const [pdfPath, entry] of tracker) {
    rows.push([pdfPath, entry.handle, entry.status, entry.lastTick, entry.citeKey || "", entry.notes || ""].map(csvField).join(","))
  }
  fs.writeFileSync(trackerPath, header + "\n" + rows.join("\n") + "\n", "utf8")
}

// ---------- PDF discovery ----------

function walkPdfsRecursive(dir, handlePrefix, out) {
  if (!fs.existsSync(dir)) return
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkPdfsRecursive(full, handlePrefix, out)
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
      const relPath = path.relative(repoRoot, full)
      const handle = `${handlePrefix}_${slugify(path.basename(entry.name, ".pdf"))}`
      out.push({ pdfPath: relPath, handle, folderName: path.relative(path.join(repoRoot, "raw"), dir) })
    }
  }
}

function walkPdfs() {
  const all = []
  for (const root of MANUAL_FETCH_ROOTS) {
    walkPdfsRecursive(path.join(repoRoot, root.root), root.handlePrefix, all)
  }
  // Filter by folder restriction if set
  const filtered = folderRestrict
    ? all.filter((p) => p.pdfPath.includes(folderRestrict))
    : all
  // Sort by priority keyword order; PDFs matching earlier keywords come first
  filtered.sort((a, b) => priorityRank(a.pdfPath) - priorityRank(b.pdfPath))
  return filtered
}

function priorityRank(pdfPath) {
  for (let i = 0; i < PRIORITY_KEYWORDS.length; i++) {
    const kw = PRIORITY_KEYWORDS[i]
    if (kw === "") return i // catch-all
    if (pdfPath.includes(kw)) return i
  }
  return PRIORITY_KEYWORDS.length
}

// ---------- Per-PDF prompt ----------

function buildPrompt(candidate) {
  return `You are running one cycle of the Heavy Metal Index Cochrane-quality manual-fetch ingest. The Karen-facing slash command for this work is /ingest-next-manual-fetch-pdf, defined at .claude/skills/ingest-next-manual-fetch-pdf/SKILL.md. Read that skill file in full and follow its v2.0 workflow (Phase 1 ingest, Phase 2 audit via Agent subagent, Phase 3 apply findings, Phase 4 stop) for exactly ONE PDF — the one named below. Then exit.

PDF to process: ${candidate.pdfPath}
Suggested handle (you may adjust): ${candidate.handle}
Folder context: ${candidate.folderName}

Process this one PDF end-to-end:
  - Read the PDF (use pages parameter as needed for long PDFs; tables MUST be read).
  - Run three identity checks (DOI grep, raw_handle grep, cite-key grep) against wiki/sources/.
  - If a matching page exists: merge-enhance per the v2 skill's EXISTING path. Preserve cite_key, raw_handle, raw_path, license, access_url, raw_sha256, near_duplicates from the existing page. Fix all defects (invalid slugs, brand-firewall violations, transposed values, legacy headings, missing exposure numbers).
  - If no matching page exists: write a fresh source page per the v2 skill's NEW path.
  - Run npm run evidence:source-routes; confirm 0 unresolved, source not in malformed.
  - Commit the ingest with the per-skill commit-message format.
  - Append the cite-key to data/evidence/audit-queue.csv with status=pending.
  - Spawn a fresh-context audit subagent via the Agent tool (subagent_type: general-purpose) with read-only instructions per the v2 skill's Phase 2.
  - Receive the subagent's structured audit report.
  - For each ❌ definite-error finding: verify independently against the source; apply if correct, push back if false positive (document either way in verification notes).
  - For each ⚠️ concern: verify and apply as judgment dictates.
  - Re-run routing audit if any changes were applied.
  - Commit the audit application (if changes were made).
  - Update data/evidence/audit-queue.csv status to audited-promote / audited-revised / audited-quarantine.

Hard constraints (per CLAUDE.md):
  - Do NOT create new ingredient pages (auto-stub handles ingredients ≥freq-2 separately).
  - Do NOT create new product pages (always Karen's Step 0 Lock).
  - Do NOT run Part 9 synthesis (separate workflow).
  - Do NOT touch wiki/products/, wiki/ingredients/, or other downstream pages directly.
  - Do NOT edit inside <!-- BEGIN --> / <!-- END --> marker blocks.
  - Do NOT modify data/evidence/product_source_routing_audit.csv by hand.
  - Do NOT push to remote (the daemon tick handles the push after all per-PDF work).

If you hit any of the stop conditions defined in the skill (new-page proposal needed, paper-internal contradiction, true duplicate conflict, routing audit fails, Agent tool unavailable, context-budget signal), STOP cleanly — write a note explaining why to data/evidence/autonomy/manual-fetch-stops-${today}.md, do not commit half-finished work.

When done with this one PDF (whether successfully ingested+audited or stopped cleanly), exit. The wrapper script handles the next PDF and the next tick. Print a single final line to stdout: either "DONE: <cite-key>" on success, or "STOP: <reason>" on a stop condition, or "FAIL: <reason>" on an error.`
}

function invokeClaude(prompt, candidate) {
  const args = [
    "--print",
    "--model", model,
    "--add-dir", repoRoot,
    // Comprehensive tool access; the spawned claude needs Read, Edit, Write,
    // Bash, and Agent (for the audit subagent). settings.local.json has
    // bypassPermissions set for this repo.
  ]

  try {
    const res = spawnSync("claude", args, {
      cwd: repoRoot,
      input: prompt,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 25 * 60 * 1000, // 25 min per PDF (ingest + audit + apply is heavier than marker draft)
    })

    if (res.error) return { error: res.error.message }
    if (res.status !== 0) return { error: `exit ${res.status}: ${(res.stderr || "").slice(0, 800)}` }
    const stdout = res.stdout || ""
    const lastLine = stdout.trim().split("\n").slice(-1)[0] || ""
    if (lastLine.startsWith("DONE:")) return { ok: true, citeKey: lastLine.slice(5).trim() }
    if (lastLine.startsWith("STOP:")) return { stop: true, reason: lastLine.slice(5).trim(), stdout }
    if (lastLine.startsWith("FAIL:")) return { error: lastLine.slice(5).trim(), stdout }
    return { error: `unrecognized final line: "${lastLine}"`, stdout }
  } catch (err) {
    return { error: err.message }
  }
}

// ---------- Main loop ----------

const tracker = loadTracker()
const allPdfs = walkPdfs()
console.log(`Discovered ${allPdfs.length} PDFs across ${MANUAL_FETCH_ROOTS.length} roots`)

// Register newly-discovered PDFs in tracker
for (const pdf of allPdfs) {
  if (!tracker.has(pdf.pdfPath)) {
    tracker.set(pdf.pdfPath, { handle: pdf.handle, status: "unprocessed", lastTick: "", citeKey: "", notes: "" })
  }
}

// Pick candidates: unprocessed first, then audited-revised that aren't recent (re-check stale)
const candidates = []
for (const pdf of allPdfs) {
  const entry = tracker.get(pdf.pdfPath)
  if (entry.status === "unprocessed") candidates.push({ ...pdf, entry })
  if (candidates.length >= maxPdfs) break
}

if (candidates.length === 0) {
  console.log("No unprocessed PDFs in priority order. All tracked PDFs have been ingested at least once.")
  console.log("To re-audit existing pages, use the audit-queue.csv workflow or rebuild the tracker.")
  if (!dryRun) saveTracker(tracker)
  process.exit(0)
}

console.log(`\nProcessing ${candidates.length} PDF(s) this tick:`)
for (const c of candidates) console.log(`  - ${c.pdfPath}`)

if (dryRun) {
  console.log("\nDRY RUN — not invoking claude.")
  process.exit(0)
}

const succeeded = []
const stopped = []
const failed = []

for (const candidate of candidates) {
  console.log(`\n[${candidates.indexOf(candidate) + 1}/${candidates.length}] ${candidate.pdfPath}`)
  console.log(`  handle: ${candidate.handle}`)

  const prompt = buildPrompt(candidate)
  const result = invokeClaude(prompt, candidate)

  const entry = tracker.get(candidate.pdfPath)
  entry.lastTick = tickTimestamp

  if (result.ok) {
    entry.status = "ingested"
    entry.citeKey = result.citeKey
    entry.notes = `Ingested ${tickTimestamp}`
    succeeded.push({ ...candidate, citeKey: result.citeKey })
    console.log(`  OK: ${result.citeKey}`)
  } else if (result.stop) {
    entry.status = "stopped"
    entry.notes = `Stop: ${result.reason}`.slice(0, 200)
    stopped.push({ ...candidate, reason: result.reason })
    console.log(`  STOP: ${result.reason}`)
  } else {
    entry.status = "failed"
    entry.notes = `Fail: ${result.error}`.slice(0, 200)
    failed.push({ ...candidate, error: result.error })
    console.log(`  FAIL: ${result.error}`)
  }

  saveTracker(tracker)
}

writeReport(candidates, succeeded, stopped, failed)

console.log(`\nBatch complete: ${succeeded.length} OK, ${stopped.length} stopped, ${failed.length} failed`)
process.exit(0)

// ---------- Helpers ----------

function writeReport(batch, succeeded, stopped, failed) {
  const reportPath = path.join(autonomyDir, `manual-fetch-batch-${today}.md`)
  const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Manual-fetch ingest batch report — ${today}\n\n`
  const lines = [existing.trimEnd(), "", `## Tick ${tickTimestamp}`, ""]
  lines.push(`- Candidates this tick: ${batch.length}`)
  lines.push(`- Succeeded: ${succeeded.length}`)
  lines.push(`- Stopped (need Karen): ${stopped.length}`)
  lines.push(`- Failed: ${failed.length}`)
  lines.push("")
  if (succeeded.length) {
    lines.push("### Succeeded")
    for (const s of succeeded) lines.push(`- \`${s.citeKey}\` (${s.pdfPath})`)
    lines.push("")
  }
  if (stopped.length) {
    lines.push("### Stopped — needs specific information (not blanket approval)")
    for (const s of stopped) lines.push(`- \`${s.pdfPath}\`: ${s.reason}`)
    lines.push("")
  }
  if (failed.length) {
    lines.push("### Failed")
    for (const f of failed) lines.push(`- \`${f.pdfPath}\`: ${f.error}`)
    lines.push("")
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
}

function slugify(s) {
  return s.toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 50)
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

function parseCsvLine(line) {
  const cells = []
  let cur = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (c === '"') inQuotes = false
      else cur += c
    } else {
      if (c === '"') inQuotes = true
      else if (c === ",") { cells.push(cur); cur = "" }
      else cur += c
    }
  }
  cells.push(cur)
  return cells
}

function csvField(s) {
  const str = String(s ?? "")
  if (/[,"\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`
  return str
}
