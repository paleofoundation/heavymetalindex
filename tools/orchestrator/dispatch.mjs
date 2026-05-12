#!/usr/bin/env node
// Dispatches an action from the orchestrator's plan to a Claude subprocess.
//
// Usage:
//   node tools/orchestrator/dispatch.mjs <action-id> [--dry-run] [--model sonnet|opus] [--max-turns N]
//
// Reads the per-action prompt from data/evidence/build-action-prompts/,
// invokes `claude --print` with appropriate permission and tool flags,
// captures the result, and logs to data/evidence/night-runs/<timestamp>.log.
//
// Permission model:
//   - --dangerously-skip-permissions is used so the subprocess can run
//     without prompting. This is the cost of unattended overnight work.
//   - Risk is bounded by: an explicit --disallowedTools list blocks
//     destructive Bash patterns; the .husky/pre-commit hook still runs;
//     and the subprocess operates on its own working-tree snapshot.
//
// Output:
//   - data/evidence/night-runs/<run-id>.log              — subprocess stdout/stderr
//   - data/evidence/night-runs/<run-id>.result.json     — exit code + summary
//
// Exit codes:
//   0 — subprocess exited cleanly
//   1 — dispatch error (action not found, prompt missing, etc.)
//   2 — subprocess exited non-zero

import fs from "node:fs"
import path from "node:path"
import { spawn } from "node:child_process"

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const modelIdx = args.indexOf("--model")
const model = modelIdx >= 0 ? args[modelIdx + 1] : "sonnet"
const maxTurnsIdx = args.indexOf("--max-turns")
const maxTurns = maxTurnsIdx >= 0 ? args[maxTurnsIdx + 1] : "40"
const actionId = args.find((a) => !a.startsWith("--") && a !== model && a !== maxTurns)

if (!actionId) {
  console.error("Usage: dispatch.mjs <action-id> [--dry-run] [--model sonnet|opus] [--max-turns N]")
  process.exit(1)
}

const repoRoot = process.cwd()
const promptPath = path.join(repoRoot, "data/evidence/build-action-prompts", `${actionId}.md`)
const planJsonPath = path.join(repoRoot, "data/evidence/build-action-plan.json")
const logsDir = path.join(repoRoot, "data/evidence/night-runs")
fs.mkdirSync(logsDir, { recursive: true })

if (!fs.existsSync(promptPath)) {
  console.error(`Prompt file not found: ${promptPath}`)
  console.error(`Run \`npm run plan\` first to generate prompts.`)
  process.exit(1)
}

const prompt = fs.readFileSync(promptPath, "utf8")
const runId = `${actionId}-${new Date().toISOString().replace(/[:.]/g, "-")}`
const logPath = path.join(logsDir, `${runId}.log`)
const resultPath = path.join(logsDir, `${runId}.result.json`)

// Tool denylist. Each pattern must be its own argv item per Commander
// variadic-args parsing (claude CLI uses --disallowedTools <tools...>).
// Variadic args consume everything after them until the next flag, so the
// prompt is passed via stdin instead of argv to avoid being consumed.
const disallowedTools = [
  "Bash(rm -rf *)",
  "Bash(git push --force*)",
  "Bash(git reset --hard*)",
  "Bash(git clean -*f*)",
]

// NOTE: --add-dir is intentionally omitted. The subprocess runs with cwd
// set to repoRoot, so it has access to everything under the repo by default.
// Passing --add-dir on directories inside cwd causes Claude Code to enumerate
// them at startup; on this repo, raw/ has 23K+ FM_XXXXX folders and the
// enumeration hangs the subprocess for many minutes before any task output.
const claudeArgs = [
  "--print",
  "--dangerously-skip-permissions",
  "--model", model,
  "--max-turns", String(maxTurns),
  "--disallowedTools", ...disallowedTools,
]

if (dryRun) {
  console.log("Dry run — would invoke (prompt piped via stdin):")
  console.log(`  claude ${claudeArgs.map((a) => (a.includes(" ") ? `"${a}"` : a)).join(" ")}`)
  console.log(`Prompt length: ${prompt.length} chars (first 80: "${prompt.slice(0, 80).replace(/\n/g, " ")}...")`)
  console.log(`Log path: ${logPath}`)
  console.log(`Result path: ${resultPath}`)
  process.exit(0)
}

console.log(`Dispatching ${actionId} (model: ${model}, max-turns: ${maxTurns})`)
console.log(`Log: ${path.relative(repoRoot, logPath)}`)

const startedAt = Date.now()
const child = spawn("/opt/homebrew/bin/claude", claudeArgs, {
  cwd: repoRoot,
  env: process.env,
  stdio: ["pipe", "pipe", "pipe"],
})

// Pipe the prompt through stdin so variadic args don't consume it.
child.stdin.write(prompt)
child.stdin.end()

const logStream = fs.createWriteStream(logPath)
let stdoutBytes = 0
let stderrBytes = 0

child.stdout.on("data", (chunk) => {
  logStream.write(chunk)
  stdoutBytes += chunk.length
  process.stdout.write(".")
})
child.stderr.on("data", (chunk) => {
  logStream.write(`STDERR: ${chunk}`)
  stderrBytes += chunk.length
})

child.on("exit", (code, signal) => {
  logStream.end()
  const durationMs = Date.now() - startedAt
  const result = {
    action_id: actionId,
    run_id: runId,
    model,
    max_turns: maxTurns,
    started_at: new Date(startedAt).toISOString(),
    duration_ms: durationMs,
    duration_human: `${Math.floor(durationMs / 60000)}m ${Math.floor((durationMs % 60000) / 1000)}s`,
    exit_code: code,
    signal,
    stdout_bytes: stdoutBytes,
    stderr_bytes: stderrBytes,
    log_path: path.relative(repoRoot, logPath),
  }
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + "\n", "utf8")
  process.stdout.write("\n")
  console.log(`Subprocess exited code=${code} signal=${signal} duration=${result.duration_human}`)
  console.log(`Result: ${path.relative(repoRoot, resultPath)}`)
  if (code !== 0 && code !== null) {
    process.exit(2)
  }
  process.exit(0)
})

child.on("error", (err) => {
  console.error(`spawn error: ${err.message}`)
  process.exit(1)
})
