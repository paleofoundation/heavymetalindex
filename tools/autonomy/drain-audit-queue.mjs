#!/usr/bin/env node
// Autonomous audit-queue drainer for the daemon tick.
//
// Picks N entries from data/evidence/audit-queue.csv whose status is "pending"
// or "pending-audit-spawn-failed" and spawns `claude --print` per entry to run
// the full 5-check audit workflow (audit subagent → verify findings → apply →
// commit → update queue row). This is the autonomous twin of the human skill
// `/apply-gpt-audit` and the inline audit step inside ingest-manual-fetch-batch.
//
// Why a separate runner: the inline audit during ingest sometimes fails to
// spawn the audit subagent (Anthropic agent-thread limit, transient errors).
// Those rows land in audit-queue.csv as "pending-audit-spawn-failed" and have
// historically sat there until Karen manually drained them. As of 2026-05-28
// there were 5 pending + 33 pending-audit-spawn-failed entries.
//
// Per OPERATING.md Part 3 and Karen's "you are not a step in the loop"
// directive, this runner removes the manual-drain bottleneck. Stops on
// genuine source-not-found / unreadable cases; never blocks on approval.
//
// Usage:
//   node tools/autonomy/drain-audit-queue.mjs --max=3
//   node tools/autonomy/drain-audit-queue.mjs --max=1 --dry-run
//   node tools/autonomy/drain-audit-queue.mjs --cite-key=<key>   (one-off)

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const maxEntries = Number(args.get("max") ?? 3)
const citeKeyOverride = args.get("cite-key") ?? null
const model = args.get("model") ?? "claude-opus-4-7"

// Resolve the claude CLI by absolute path. spawnSync with a bare "claude"
// relies on PATH, which is fragile in non-interactive/background shells and,
// critically, during the overnight Claude Code auto-update window when the
// /opt/homebrew/bin/claude symlink is rebuilt — that caused a run of
// `spawnSync claude ENOENT` failures on 2026-06-09. Prefer an explicit
// override, then the known Homebrew location, then fall back to PATH.
const CLAUDE_BIN = (() => {
  for (const c of [process.env.CLAUDE_BIN, "/opt/homebrew/bin/claude"]) {
    try {
      if (c && fs.existsSync(c)) return c
    } catch {}
  }
  return "claude"
})()

const queuePath = path.join(repoRoot, "data/evidence/audit-queue.csv")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date().toISOString().slice(0, 10)
const tickTimestamp = new Date().toISOString()

if (!fs.existsSync(queuePath)) {
  console.error(`No audit-queue.csv at ${queuePath}`)
  process.exit(1)
}

fs.mkdirSync(autonomyDir, { recursive: true })

console.log(`drain-audit-queue: max=${maxEntries}, model=${model}, dry-run=${dryRun}, cite-key=${citeKeyOverride || "auto"}`)

// ---------- Queue load ----------

const rawLines = fs.readFileSync(queuePath, "utf8").split("\n")
const header = rawLines[0]
const headerCols = parseCsvLine(header)
const colIdx = (name) => headerCols.indexOf(name)
const COL_CITE = colIdx("cite_key")
const COL_FOLDER = colIdx("source_folder")
const COL_HANDLE = colIdx("handle")
const COL_STATUS = colIdx("status")
const COL_VERDICT = colIdx("audit_verdict")
const COL_APPLIED = colIdx("audit_applied_at")
const COL_NOTES = colIdx("notes")

if (COL_CITE < 0 || COL_STATUS < 0) {
  console.error(`audit-queue.csv missing required columns (cite_key, status)`)
  process.exit(1)
}

const rows = rawLines
  .slice(1)
  .filter((l) => l.trim())
  .map((line) => ({ raw: line, cells: parseCsvLine(line) }))

// ---------- Attempts cap (FRANK v2) ----------
// The 2026-06-09 runaway: this script selected {pending, pending-audit-spawn-
// failed} and, on failure, only logged — it never wrote the row's status back,
// so the same 154 rows were re-selected and re-burned every cycle. The cap makes
// that impossible: a cite_key that has failed MAX_AUDIT_ATTEMPTS times is dropped
// from selection (dead-lettered), and the count increments on every failure here.
// Seeded by tools/autonomy/quarantine-spawn-failed.mjs.
const MAX_AUDIT_ATTEMPTS = 5
const attemptsPath = path.join(autonomyDir, "audit-attempts.json")
function loadAttempts() {
  try { return fs.existsSync(attemptsPath) ? JSON.parse(fs.readFileSync(attemptsPath, "utf8")) : {} } catch { return {} }
}
function saveAttempts(a) {
  try { fs.mkdirSync(autonomyDir, { recursive: true }); fs.writeFileSync(attemptsPath, JSON.stringify(a, null, 2) + "\n", "utf8") } catch {}
}
const auditAttempts = loadAttempts()

// ---------- Candidate selection ----------

let candidates
if (citeKeyOverride) {
  candidates = rows.filter((r) => r.cells[COL_CITE] === citeKeyOverride)
  if (candidates.length === 0) {
    console.error(`No audit-queue row for cite-key=${citeKeyOverride}`)
    process.exit(1)
  }
} else {
  const PENDING_STATUSES = new Set(["pending", "pending-audit-spawn-failed"])
  const eligible = rows.filter((r) => PENDING_STATUSES.has(r.cells[COL_STATUS]))
  const capped = eligible.filter((r) => (auditAttempts[r.cells[COL_CITE]] || 0) >= MAX_AUDIT_ATTEMPTS)
  if (capped.length) {
    console.log(`Skipping ${capped.length} cite-key(s) at the ${MAX_AUDIT_ATTEMPTS}-attempt cap (dead-lettered, will not be re-burned).`)
  }
  candidates = eligible
    .filter((r) => (auditAttempts[r.cells[COL_CITE]] || 0) < MAX_AUDIT_ATTEMPTS)
    .slice(0, maxEntries)
}

if (candidates.length === 0) {
  console.log("No pending audit-queue entries. All audited.")
  process.exit(0)
}

console.log(`\nProcessing ${candidates.length} audit-queue entr${candidates.length === 1 ? "y" : "ies"} this run:`)
for (const c of candidates) console.log(`  - ${c.cells[COL_CITE]} (status=${c.cells[COL_STATUS]})`)

if (dryRun) {
  console.log("\nDRY RUN — not invoking claude.")
  process.exit(0)
}

// ---------- Per-entry prompt ----------

function buildPrompt({ citeKey, sourceFolder, handle }) {
  return `You are running one cycle of the Heavy Metal Index autonomous audit drainer. The cite-key below has a wiki source page that was ingested but never audited (or the audit spawn failed at ingest time). Run the full 5-check audit on it, verify each finding independently, apply real findings, push back on false positives, commit, and update data/evidence/audit-queue.csv.

cite-key: ${citeKey}
wiki source page: wiki/sources/${citeKey}.md
source folder: ${sourceFolder || "(see frontmatter raw_path)"}
handle: ${handle || "(unknown)"}

Reference docs (read for the audit shape, do not duplicate their contents into the prompt):
- docs/gpt-collaboration/audit-prompt.md — the 5-check audit prompt (Numerical fidelity, Slug vocabulary, Speciation/methods, Brand firewall, wiki/HMTc firewall)
- .claude/skills/apply-gpt-audit/SKILL.md — the application workflow (verify each finding independently, apply or push back with citations)

Workflow:
1. Read wiki/sources/${citeKey}.md in full. Note the raw_path frontmatter value.
2. Read the source evidence:
   - FM_ or AUTO_ handles: read raw/markdown/<handle>/<handle>.md if present; otherwise the raw_path file
   - MFK_/MR_/PCMF_/AF_ handles: read the PDF at raw_path directly using Read tool with pages parameter (tables MUST be read)
3. Spawn a fresh-context audit subagent via the Agent tool (subagent_type: general-purpose) with the 5-check audit prompt from docs/gpt-collaboration/audit-prompt.md. Pass the wiki page contents + the source evidence + the taxonomy snapshot from docs/gpt-collaboration/taxonomy-snapshot.md. The subagent produces a structured audit report with ✅/⚠️/❌ per check + a final PROMOTE/REVISE/QUARANTINE verdict.
4. Receive the report. For each ❌ definite-error finding: verify independently against the source. Apply if correct, document false positive with disproving source citation if wrong.
5. For each ⚠️ concern: verify and apply as judgment dictates.
6. While verifying, watch for false negatives (errors the subagent missed). Apply those too, document as "independent verification caught:".
7. Run \`npm run evidence:source-routes\`. Confirm 0 unresolved, source not in malformed.
8. Commit per the apply-gpt-audit skill's commit message format:
   audit: ${citeKey} [promoted|revised|quarantined] per autonomous audit
   <list of findings applied with citations>
   <list of findings rejected with reasoning>
   <list of independent-verification catches>
9. Append a new row to data/evidence/audit-queue.csv (or update the existing pending row) with status=audited-promote / audited-revised / audited-quarantine, the verdict, audit_applied_at=${today}, and notes summarizing applied/rejected/independent findings.

Hard constraints (per CLAUDE.md):
- Do NOT push to remote (the daemon tick handles the push at end of tick).
- Do NOT touch wiki/products/, wiki/ingredients/, or other downstream pages directly during the audit.
- Do NOT run Part 9 synthesis.
- Do NOT modify the source page's cite_key, raw_handle, raw_path, license, access_url, raw_sha256, or near_duplicates frontmatter.
- Do NOT edit inside <!-- BEGIN --> / <!-- END --> marker blocks.

Stop conditions (exit cleanly without committing partial work):
- wiki/sources/${citeKey}.md does not exist
- source evidence (PDF or markdown) is unreadable
- Agent tool unavailable (audit subagent cannot spawn)
- Context-budget signal

When done with this one cite-key (audited or stopped cleanly), exit. Print a single final line to stdout: "DONE: ${citeKey} <verdict>" on success, "STOP: <reason>" on a stop condition, or "FAIL: <reason>" on error.`
}

function invokeClaude(prompt) {
  const cliArgs = ["--print", "--model", model, "--add-dir", repoRoot]
  try {
    const res = spawnSync(CLAUDE_BIN, cliArgs, {
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

for (const candidate of candidates) {
  const citeKey = candidate.cells[COL_CITE]
  const sourceFolder = candidate.cells[COL_FOLDER]
  const handle = candidate.cells[COL_HANDLE]

  console.log(`\n[${candidates.indexOf(candidate) + 1}/${candidates.length}] ${citeKey}`)

  // Pre-flight: confirm the source page exists. If not, log + skip (don't
  // burn a claude spawn on a missing page).
  const pagePath = path.join(repoRoot, "wiki/sources", `${citeKey}.md`)
  if (!fs.existsSync(pagePath)) {
    console.log(`  STOP (pre-spawn): wiki/sources/${citeKey}.md does not exist`)
    stopped.push({ citeKey, reason: "source page missing" })
    continue
  }

  const prompt = buildPrompt({ citeKey, sourceFolder, handle })
  const result = invokeClaude(prompt)

  if (result.ok) {
    succeeded.push({ citeKey, summary: result.summary })
    console.log(`  OK: ${result.summary}`)
  } else if (result.stop) {
    stopped.push({ citeKey, reason: result.reason })
    console.log(`  STOP: ${result.reason}`)
  } else {
    failed.push({ citeKey, error: result.error })
    auditAttempts[citeKey] = (auditAttempts[citeKey] || 0) + 1
    saveAttempts(auditAttempts)
    const capNote = auditAttempts[citeKey] >= MAX_AUDIT_ATTEMPTS ? " — now dead-lettered from rotation" : ""
    console.log(`  FAIL: ${result.error} (attempt ${auditAttempts[citeKey]}/${MAX_AUDIT_ATTEMPTS}${capNote})`)
  }
}

writeReport(candidates, succeeded, stopped, failed)
console.log(`\nBatch complete: ${succeeded.length} OK, ${stopped.length} stopped, ${failed.length} failed`)
process.exit(0)

// ---------- Helpers ----------

function writeReport(batch, succeeded, stopped, failed) {
  const reportPath = path.join(autonomyDir, `audit-drain-${today}.md`)
  const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Audit-queue drain report — ${today}\n\n`
  const lines = [existing.trimEnd(), "", `## Run ${tickTimestamp}`, ""]
  lines.push(`- Candidates this run: ${batch.length}`)
  lines.push(`- Succeeded (audited and committed): ${succeeded.length}`)
  lines.push(`- Stopped (genuine block, no commit): ${stopped.length}`)
  lines.push(`- Failed (error, no commit): ${failed.length}`)
  lines.push("")
  if (succeeded.length) {
    lines.push("### Succeeded")
    for (const s of succeeded) lines.push(`- \`${s.citeKey}\` — ${s.summary}`)
    lines.push("")
  }
  if (stopped.length) {
    lines.push("### Stopped")
    for (const s of stopped) lines.push(`- \`${s.citeKey}\`: ${s.reason}`)
    lines.push("")
  }
  if (failed.length) {
    lines.push("### Failed")
    for (const f of failed) lines.push(`- \`${f.citeKey}\`: ${f.error}`)
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
