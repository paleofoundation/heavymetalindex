#!/usr/bin/env node
// Autonomous Codex/ChatGPT 5.x ingest driver.
//
// Karen previously ran Codex via an external scheduler that pasted the
// canonical prompt at docs/codex-collaboration/sprint-ingest-prompt.md
// into the Codex chat UI every 25-30 min. The scheduler stalled days ago;
// the drain-to-≤10 stop threshold in the prompt left residuals stuck;
// and there was no programmatic invocation from the daemon side.
//
// This driver closes that loop. The Codex desktop CLI ships at
// /Applications/Codex.app/Contents/Resources/codex and authenticates via
// Karen's ChatGPT Plus subscription (no API billing). Each daemon tick
// spawns one `codex exec` invocation with the sprint-ingest-prompt as
// instructions, sandboxed to repo root, full-trust automation.
//
// Coordination with the Claude daemon path:
//   - Claude/Opus owns raw/Manual Fetch Kimi/, raw/Papers Cube Manual Fetch/,
//     raw/Manual Resourcing/, and (since 2026-05-28) auto-fetched/ residuals
//     at a 3-PDF/tick cap.
//   - Codex/GPT-5.x owns auto-fetched/ as primary consumer. The race-safe
//     claim system in the prompt (status="claimed-by-codex" in
//     data/evidence/autonomy/manual-fetch-tracker.csv) prevents double-
//     ingest with Claude's residual-drain cap.
//
// Cost: runs on Karen's ChatGPT Plus subscription. No per-invocation
// API cost. Wall-clock budgeted to keep the daemon tick bounded.
//
// Usage:
//   node tools/autonomy/ingest-with-codex.mjs
//   node tools/autonomy/ingest-with-codex.mjs --dry-run
//   node tools/autonomy/ingest-with-codex.mjs --timeout-mins=20

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const timeoutMins = Number(args.get("timeout-mins") ?? 18)
const codexBinary = args.get("codex-bin") ?? "/Applications/Codex.app/Contents/Resources/codex"
const promptPath = args.get("prompt-file") ?? path.join(repoRoot, "docs/codex-collaboration/sprint-ingest-prompt.md")

const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const codexRunsDir = path.join(autonomyDir, "codex-runs")
fs.mkdirSync(codexRunsDir, { recursive: true })

const tickTimestamp = new Date().toISOString().replace(/[:.]/g, "-")
const logFile = path.join(codexRunsDir, `codex-sprint-${tickTimestamp}.log`)

console.log(`ingest-with-codex: timeout=${timeoutMins}min, prompt=${path.relative(repoRoot, promptPath)}, dry-run=${dryRun}`)

// ─── Pre-flight checks ─────────────────────────────────────────────────
if (!fs.existsSync(codexBinary)) {
  console.error(`Codex CLI not found at ${codexBinary}. Skipping.`)
  process.exit(0)
}
if (!fs.existsSync(promptPath)) {
  console.error(`Codex sprint prompt not found at ${promptPath}. Skipping.`)
  process.exit(0)
}

// ─── Pause switches ────────────────────────────────────────────────────
// Symmetric with FRANK's ~/.frank.STOP. ~/.frank-codex.STOP pauses just this
// engine; ~/.frank.STOP pauses everything. Gives Karen an on-demand kill switch
// for the Codex loop, which previously had none.
for (const stopName of [".frank.STOP", ".frank-codex.STOP"]) {
  if (fs.existsSync(path.join(os.homedir(), stopName))) {
    console.log(`Pause switch ~/${stopName} present — skipping Codex sprint.`)
    writeCodexHeartbeat(`paused (~/${stopName})`)
    process.exit(0)
  }
}

// Extract just the prompt body (the doc has markdown explanation around it).
// The prompt to paste is between ``` fences after the "## The prompt (paste this)"
// heading. We extract that block.
const promptDoc = fs.readFileSync(promptPath, "utf8")
const pasteBlockMatch = promptDoc.match(/## The prompt \(paste this\)\s*\n+```\n([\s\S]+?)\n```/)
if (!pasteBlockMatch) {
  console.error(`Could not extract prompt-paste block from ${promptPath}. Skipping.`)
  process.exit(0)
}
const promptBody = pasteBlockMatch[1].trim()

console.log(`Prompt body extracted: ${promptBody.length} chars`)
console.log(`Log will be written to: ${path.relative(repoRoot, logFile)}`)

// Reasoning effort (see the cliArgs note below). Defined here so the dry-run
// print reflects it accurately.
const reasoningEffort = args.get("reasoning-effort") ?? process.env.CODEX_REASONING_EFFORT ?? "medium"

if (dryRun) {
  console.log("\nDRY RUN — would spawn:")
  console.log(`  ${codexBinary} exec -c model_reasoning_effort="${reasoningEffort}" --dangerously-bypass-approvals-and-sandbox --skip-git-repo-check -C ${repoRoot} --add-dir ${repoRoot} <prompt via stdin>`)
  console.log("\nPrompt preview (first 200 chars):")
  console.log(promptBody.slice(0, 200) + "...")
  process.exit(0)
}

// ─── Fire only when there is actionable work ──────────────────────────
// The auto-fetched folder permanently holds ~491 PDFs that are already
// ingested, claimed, or dispositioned as skips; the files are never removed,
// only marked. Re-firing Codex on that static pile produced a "STOPPED EARLY /
// no unclaimed PDFs" no-op commit (and a push) every 20 min. Mirror the sweep's
// exact eligibility filter and skip the spawn entirely when nothing is
// actionable. FAIL-OPEN: any error in the count ⇒ proceed to spawn, so the gate
// can never suppress a real ingest.
const actionable = actionableAutoFetchedCount()
if (actionable === 0) {
  console.log("No actionable auto-fetched PDFs (all ingested/claimed/dispositioned) — skipping Codex sprint.")
  writeCodexHeartbeat("idle (no actionable auto-fetched PDFs)")
  process.exit(0)
}
console.log(actionable === null
  ? "Eligibility count errored — proceeding to spawn (fail-open)."
  : `${actionable} actionable auto-fetched PDF(s) — proceeding.`)
writeCodexHeartbeat(`firing (${actionable ?? "?"} actionable)`)

// ─── Race-safety: skip if Codex is already running ────────────────────
const codexLockPath = path.join(autonomyDir, "codex-sprint.lock")
if (fs.existsSync(codexLockPath)) {
  try {
    const otherPid = parseInt(fs.readFileSync(codexLockPath, "utf8").trim(), 10)
    if (otherPid && process.kill(otherPid, 0)) {
      console.log(`Another codex sprint is running (PID ${otherPid}). Skipping this tick.`)
      process.exit(0)
    }
  } catch {
    // process.kill(pid, 0) throws if dead; fall through
  }
  console.log("Stale codex sprint lock; clearing and proceeding.")
  try { fs.unlinkSync(codexLockPath) } catch {}
}
fs.writeFileSync(codexLockPath, String(process.pid), "utf8")
const releaseLock = () => { try { fs.unlinkSync(codexLockPath) } catch {} }
process.on("exit", releaseLock)
process.on("SIGINT", () => { releaseLock(); process.exit(1) })
process.on("SIGTERM", () => { releaseLock(); process.exit(1) })

// ─── Spawn Codex ──────────────────────────────────────────────────────
// Reasoning effort: Karen's ~/.codex/config.toml defaults to "xhigh", so
// UNATTENDED fires were inheriting xhigh — deep-reasoning every routine ingest,
// producing ~25k-line sprints that died at the 18-min timeout with ~1 page/6h.
// Codex confirmed `codex exec` has no --reasoning-effort flag but accepts the
// config override `-c model_reasoning_effort="…"` (gpt-5.5 levels: low, medium,
// high, xhigh). Default routine fires to "medium"; reserve xhigh for
// contradiction/audit fires via --reasoning-effort=xhigh or CODEX_REASONING_EFFORT.
// (reasoningEffort is defined above so the dry-run print reflects it.)
const cliArgs = [
  "exec",
  "-c", `model_reasoning_effort="${reasoningEffort}"`,
  "--dangerously-bypass-approvals-and-sandbox",
  "--skip-git-repo-check",
  "-C", repoRoot,
  "--add-dir", repoRoot,
  "--color", "never",
]

console.log(`\nSpawning: ${codexBinary} ${cliArgs.join(" ")}`)
console.log(`Stdin: ${promptBody.length}-char sprint prompt`)
console.log(`Wall-clock budget: ${timeoutMins} min\n`)

const start = Date.now()
const res = spawnSync(codexBinary, cliArgs, {
  cwd: repoRoot,
  input: promptBody,
  encoding: "utf8",
  maxBuffer: 100 * 1024 * 1024,
  timeout: timeoutMins * 60 * 1000,
  // Codex CLI uses ~/.codex/auth.json (ChatGPT login). No API key needed.
})
const elapsed = ((Date.now() - start) / 1000).toFixed(1)

// Persist the full transcript regardless of outcome.
const transcript = [
  `=== Codex sprint run @ ${new Date().toISOString()} ===`,
  `command: ${codexBinary} ${cliArgs.join(" ")}`,
  `wall-clock budget: ${timeoutMins} min`,
  `elapsed: ${elapsed}s`,
  `exit code: ${res.status ?? "(no exit)"}`,
  res.error ? `error: ${res.error.message}` : "",
  ``,
  `=== STDOUT ===`,
  res.stdout || "(empty)",
  ``,
  `=== STDERR ===`,
  res.stderr || "(empty)",
  ``,
].join("\n")
fs.writeFileSync(logFile, transcript, "utf8")

releaseLock()

if (res.error) {
  console.error(`Codex spawn failed: ${res.error.message}`)
  console.error(`Full transcript at ${path.relative(repoRoot, logFile)}`)
  process.exit(1)
}
if (res.status !== 0) {
  console.error(`Codex exited ${res.status} after ${elapsed}s`)
  console.error(`Last 800 chars of stderr: ${(res.stderr || "").slice(-800)}`)
  console.error(`Full transcript at ${path.relative(repoRoot, logFile)}`)
  process.exit(0) // do not fail the daemon tick on Codex errors
}

console.log(`Codex sprint complete in ${elapsed}s. Transcript at ${path.relative(repoRoot, logFile)}`)

// Count auto-fetched PDFs that genuinely need a Codex pass — i.e. the work the
// agent itself would find. A PDF is out of play (already handled) if the tracker
// shows it ingested / claimed / skip (the sprint prompt's STEP 2-3 rule), OR
// wishlist-fetch-audit.csv carries a final disposition (ingested / skip: / fail:)
// for it. Verified 2026-06-05: all 491 auto-fetched PDFs are tracker-dispositioned
// (254 skip + 195 claimed + 42 ingested) ⇒ 0 actionable ⇒ no-op fires. Read-only.
// Returns a count, or null on any error (caller treats null as "proceed", never
// as "skip", so the gate can never suppress a real ingest).
function actionableAutoFetchedCount() {
  try {
    const dir = path.join(repoRoot, "raw/manual-fetch/seasonal-geographic-variance/auto-fetched")
    if (!fs.existsSync(dir)) return 0
    const pdfs = fs.readdirSync(dir).filter((f) => f.endsWith(".pdf"))
    if (pdfs.length === 0) return 0

    const status = new Map() // basename → tracker status
    const trackerPath = path.join(autonomyDir, "manual-fetch-tracker.csv")
    if (fs.existsSync(trackerPath)) {
      const lines = fs.readFileSync(trackerPath, "utf8").split(/\r?\n/).filter(Boolean)
      const header = parseCsvLine(lines[0] || "")
      const iPath = Math.max(0, header.indexOf("pdf_path"))
      const iStatus = header.indexOf("status") >= 0 ? header.indexOf("status") : 2
      for (let i = 1; i < lines.length; i++) {
        const cols = parseCsvLine(lines[i])
        if (!cols[iPath]) continue
        status.set(path.basename(cols[iPath]), cols[iStatus] || "")
      }
    }

    const dispositioned = new Set() // basename → has a final audit decision
    const auditPath = path.join(repoRoot, "data/evidence/wishlist-fetch-audit.csv")
    if (fs.existsSync(auditPath)) {
      const lines = fs.readFileSync(auditPath, "utf8").split(/\r?\n/).filter(Boolean)
      const header = parseCsvLine(lines[0] || "")
      const iPath = header.indexOf("downloaded_path")
      const iDec = header.indexOf("decision")
      for (let i = 1; i < lines.length && iPath >= 0 && iDec >= 0; i++) {
        const cols = parseCsvLine(lines[i])
        const dec = cols[iDec] || ""
        if (!cols[iPath]) continue
        if (dec === "ingested" || dec.startsWith("skip:") || dec.startsWith("fail:")) {
          dispositioned.add(path.basename(cols[iPath]))
        }
      }
    }

    let actionable = 0
    for (const f of pdfs) {
      const st = status.get(f) || ""
      if (st.startsWith("ingested") || st.startsWith("claimed") || st.startsWith("skip")) continue
      if (dispositioned.has(f)) continue
      actionable++
    }
    return actionable
  } catch (e) {
    console.error(`actionable-count failed (${e.message}); proceeding fail-open.`)
    return null
  }
}

// Non-committed liveness signal so an idle (gated-off) Codex loop is still
// visibly alive without the old no-op commit spam. Gitignored.
function writeCodexHeartbeat(state) {
  try {
    fs.writeFileSync(path.join(autonomyDir, "frank-codex.heartbeat"), `${new Date().toISOString()} codex ${state}\n`)
  } catch {}
}

// Minimal CSV field splitter (quote-aware), matching the sweep's parser.
function parseCsvLine(line) {
  const out = []
  let cur = ""
  let q = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (q && c === '"' && line[i + 1] === '"') { cur += '"'; i++; continue }
    if (c === '"') { q = !q; continue }
    if (c === "," && !q) { out.push(cur); cur = ""; continue }
    cur += c
  }
  out.push(cur)
  return out
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
