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

if (dryRun) {
  console.log("\nDRY RUN — would spawn:")
  console.log(`  ${codexBinary} exec --dangerously-bypass-approvals-and-sandbox --skip-git-repo-check -C ${repoRoot} --add-dir ${repoRoot} <prompt via stdin>`)
  console.log("\nPrompt preview (first 200 chars):")
  console.log(promptBody.slice(0, 200) + "...")
  process.exit(0)
}

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
const reasoningEffort = args.get("reasoning-effort") ?? process.env.CODEX_REASONING_EFFORT ?? "medium"
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
