#!/usr/bin/env node
// Night-loop: chains orchestrator dispatches until budget or queue is
// exhausted, then emits a morning report.
//
// Usage:
//   npm run night-loop                  # default budgets: 8h, 30 actions, $50
//   node tools/orchestrator/night-loop.mjs --max-actions 5 --max-hours 2 --dry-run
//
// Loop algorithm:
//   1. Run `npm run plan` to refresh the action list.
//   2. Pick the top dispatch-eligible action.
//   3. Dispatch via tools/orchestrator/dispatch.mjs.
//   4. Refresh the routing audit (the dispatch's edits may have changed it).
//   5. Repeat until budget exhausted or no eligible actions remain.
//   6. Emit a morning report summarizing what landed.
//
// Dispatch eligibility (per docs/night-loop-spec.md):
//   - Has a prompt file (excludes inline_action stubs)
//   - best_dispatched_to is not "Karen"
//   - confidence >= 0.7
//   - Synthesis included by default (pass --no-synthesis to exclude)
//
// Outputs:
//   - data/evidence/night-runs/<run-id>.log              per-dispatch logs
//   - data/evidence/night-runs/<run-id>.result.json     per-dispatch summaries
//   - data/evidence/morning-report-<YYYY-MM-DD>.md      session summary
//
// Per OPERATING.md Part 3, the loop decides what to run; Karen wakes up to
// the morning report. New-page proposals and other genuinely Karen-side
// decisions surface in the report but are not executed overnight.

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
// Synthesis runs by default. Pass --no-synthesis to exclude SYNTHESIS-*
// actions for a given run (e.g., when the routing audit is the only thing
// you want refreshed).
const includeSynthesis = !args.includes("--no-synthesis")
const maxActions = parseIntArg(args, "--max-actions", 30)
const maxHours = parseFloatArg(args, "--max-hours", 8)
const maxSpendUsd = parseFloatArg(args, "--max-spend", 50)
// Default model is Opus 4.7 (claude-opus-4-7). Synthesis and section-drafting
// work is analytical and benefits from Opus's stronger reasoning; the price
// premium over Sonnet is the cost of better calls on cross-source synthesis,
// row-fit, and basis-conversion edge cases. Pass --model sonnet to downshift
// for cheaper bulk work where quality is less load-bearing.
const dispatchModel = parseStringArg(args, "--model", "claude-opus-4-7")

const repoRoot = process.cwd()
const planJsonPath = path.join(repoRoot, "data/evidence/build-action-plan.json")
const morningReportPath = path.join(
  repoRoot,
  `data/evidence/morning-report-${new Date().toISOString().slice(0, 10)}.md`,
)

const startedAt = Date.now()
const deadlineMs = startedAt + Math.floor(maxHours * 3600 * 1000)
const completed = []
let totalSpend = 0

// Session-level cooldown: actions that resolved 0 net work the previous time
// they ran. The 2026-05-12 overnight loop burned ~$15 re-dispatching
// TRIAGE-ROUTING-UNRESOLVED 15 extra times after it had already concluded all
// remaining entries were new-page proposals (Karen's call per Part 10).
// Tracked by action.id with the iteration index it was concluded; we skip
// re-dispatching the same id once it has produced no commits.
const concludedActions = new Set()

console.log(`[night-loop] started ${new Date(startedAt).toISOString()}`)
console.log(`[night-loop] budgets: max ${maxActions} actions, ${maxHours}h, $${maxSpendUsd}`)
console.log(`[night-loop] model: ${dispatchModel}, synthesis included: ${includeSynthesis}`)
if (dryRun) console.log(`[night-loop] DRY RUN — no subprocess dispatches`)

while (true) {
  if (completed.length >= maxActions) {
    console.log(`[night-loop] hit max-actions=${maxActions}; stopping.`)
    break
  }
  if (Date.now() >= deadlineMs) {
    console.log(`[night-loop] hit time budget; stopping.`)
    break
  }
  if (totalSpend >= maxSpendUsd) {
    console.log(`[night-loop] hit spend budget $${maxSpendUsd}; stopping.`)
    break
  }

  // Refresh the action plan.
  console.log(`\n[night-loop] refreshing action plan...`)
  const planRefresh = spawnSync("node", [path.join(repoRoot, "tools/orchestrator/analyze-gaps.mjs")], {
    cwd: repoRoot,
    stdio: ["ignore", "inherit", "inherit"],
  })
  if (planRefresh.status !== 0) {
    console.error(`[night-loop] plan refresh failed; aborting.`)
    break
  }

  // Read the plan.
  const plan = JSON.parse(fs.readFileSync(planJsonPath, "utf8"))
  const eligible = plan.actions.filter((a) => isDispatchEligible(a) && !concludedActions.has(a.id))
  if (eligible.length === 0) {
    console.log(`[night-loop] no dispatch-eligible actions remain; stopping.`)
    if (concludedActions.size > 0) {
      console.log(`[night-loop] concluded this session: ${[...concludedActions].join(", ")}`)
    }
    break
  }

  const next = eligible[0]
  const estimatedCost = estimateCost(next)
  if (totalSpend + estimatedCost > maxSpendUsd) {
    console.log(`[night-loop] next action's estimated cost $${estimatedCost} would exceed budget; stopping.`)
    break
  }

  console.log(`\n[night-loop] dispatching ${next.id} (priority ${next.priority.toFixed(1)}, est cost $${estimatedCost.toFixed(2)})`)
  if (dryRun) {
    console.log(`[night-loop] DRY RUN — would invoke dispatch.mjs ${next.id}`)
    completed.push({ ...next, dispatched: false, duration_ms: 0, exit_code: 0, dry_run: true })
    break // dry-run only shows the first eligible action
  }

  // Capture HEAD before dispatch so we can detect "this action produced no commits"
  const headBefore = readGitHead(repoRoot)

  const dispatchStart = Date.now()
  const dispatchResult = spawnSync(
    "node",
    [
      path.join(repoRoot, "tools/orchestrator/dispatch.mjs"),
      next.id,
      "--model",
      dispatchModel,
      "--max-turns",
      String(estimateMaxTurns(next)),
    ],
    {
      cwd: repoRoot,
      stdio: ["ignore", "inherit", "inherit"],
    },
  )
  const dispatchDurationMs = Date.now() - dispatchStart
  const headAfter = readGitHead(repoRoot)
  const producedCommits = headBefore && headAfter && headBefore !== headAfter

  completed.push({
    ...next,
    dispatched: true,
    duration_ms: dispatchDurationMs,
    exit_code: dispatchResult.status,
    estimated_cost_usd: estimatedCost,
    produced_commits: producedCommits,
  })
  totalSpend += estimatedCost

  // If the dispatch produced no commits, mark this action as concluded for the
  // rest of the session. Prevents the re-dispatch loop that wasted ~$15 on
  // 2026-05-12 when TRIAGE-ROUTING-UNRESOLVED ran 15 times against entries that
  // were all new-page proposals (Karen-side decisions, not actionable).
  if (!producedCommits && dispatchResult.status === 0) {
    concludedActions.add(next.id)
    console.log(`[night-loop] ${next.id} produced no commits; marking concluded for this session.`)
  }

  // Routing audit refresh so the next plan-iteration sees the dispatch's edits.
  console.log(`[night-loop] refreshing routing audit after dispatch...`)
  spawnSync(
    "node",
    [path.join(repoRoot, "tools/evidence/build-routing-audit.mjs")],
    { cwd: repoRoot, stdio: ["ignore", "inherit", "inherit"] },
  )
}

// Emit morning report.
const endedAt = Date.now()
const report = renderMorningReport({ startedAt, endedAt, completed, totalSpend, dryRun })
fs.writeFileSync(morningReportPath, report, "utf8")
console.log(`\n[night-loop] complete. ${completed.length} actions dispatched, total spend ~$${totalSpend.toFixed(2)}.`)
console.log(`[night-loop] morning report: ${path.relative(repoRoot, morningReportPath)}`)

// ---------- helpers ----------

function isDispatchEligible(action) {
  if (!action.prompt_path) return false // requires inline_action implementation
  if (action.best_dispatched_to === "Karen") return false
  if ((action.confidence ?? 0) < 0.7) return false
  if (!includeSynthesis && action.strategy === "synthesis") return false
  if (action.strategy === "schema" && action.id.includes("CLAUDE") || action.id.includes("OPERATING") || action.id.includes("AGENTS")) {
    return false // policy docs are not in the loop's authority
  }
  return true
}

function estimateCost(action) {
  // Crude per-strategy estimates in USD. Refined after the first overnight run.
  const perItemUsd = {
    ingest: 0.15,
    triage: 0.025,
    "auto-fetch": 0.05,
    synthesis: 0.2,
    "wishlist-update": 0.05,
    schema: 0.015,
  }
  const closes = action.closes_count || 1
  const itemCost = perItemUsd[action.strategy] ?? 0.05
  // Cap per action at $10 so a runaway estimate doesn't blow the budget.
  return Math.min(closes * itemCost, 10)
}

function estimateMaxTurns(action) {
  // Subprocess max-turns sized by action complexity. The dispatcher's own
  // max-turns flag caps the subprocess regardless.
  const perStrategy = {
    ingest: 60,
    triage: 80,
    "auto-fetch": 20,
    synthesis: 100,
    "wishlist-update": 30,
    schema: 30,
  }
  return perStrategy[action.strategy] ?? 40
}

function renderMorningReport({ startedAt, endedAt, completed, totalSpend, dryRun }) {
  const durationMs = endedAt - startedAt
  const durationHuman = `${Math.floor(durationMs / 3600000)}h ${Math.floor((durationMs % 3600000) / 60000)}m`
  const successful = completed.filter((a) => a.exit_code === 0).length
  const failed = completed.length - successful
  const today = new Date().toISOString().slice(0, 10)

  const lines = [
    `---`,
    `title: "Night-loop morning report — ${today}"`,
    `type: night-loop-report`,
    `started_at: ${new Date(startedAt).toISOString()}`,
    `ended_at: ${new Date(endedAt).toISOString()}`,
    `audience: [internal]`,
    `noindex: true`,
    `---`,
    ``,
    `# Night-loop morning report — ${today}`,
    ``,
    `Loop ran ${new Date(startedAt).toLocaleTimeString()} to ${new Date(endedAt).toLocaleTimeString()} (${durationHuman}). Dispatched ${completed.length} action(s); ${successful} succeeded, ${failed} failed. Estimated total API spend: $${totalSpend.toFixed(2)}.`,
    ``,
    dryRun ? `**Note:** this was a dry run; no subprocess dispatches actually occurred.` : ``,
    ``,
    `## Actions dispatched`,
    ``,
  ]

  if (completed.length === 0) {
    lines.push(`No actions were dispatched. Possible reasons: no dispatch-eligible actions in the plan; budget exhausted before any action could start; plan-refresh failed.`)
    return lines.join("\n")
  }

  completed.forEach((a, i) => {
    const status = a.exit_code === 0 ? "✓ succeeded" : `✗ failed (exit ${a.exit_code})`
    const durationHuman = `${Math.floor(a.duration_ms / 60000)}m ${Math.floor((a.duration_ms % 60000) / 1000)}s`
    lines.push(`### ${i + 1}. ${a.title}`)
    lines.push(``)
    lines.push(`- **Action ID:** \`${a.id}\``)
    lines.push(`- **Status:** ${status}`)
    lines.push(`- **Duration:** ${durationHuman}`)
    lines.push(`- **Estimated cost:** $${(a.estimated_cost_usd ?? 0).toFixed(2)}`)
    lines.push(`- **Best dispatched to:** ${a.best_dispatched_to}`)
    lines.push(`- **Closes:** ${a.closes_what || "—"}`)
    lines.push(``)
  })

  lines.push(`## Next steps for Karen`)
  lines.push(``)
  lines.push(`1. Review any new-page proposals or contradictions surfaced by the dispatched actions; those land as commits in the working tree and as entries in \`wiki/lint/\` for triage actions.`)
  lines.push(`2. Run \`npm run plan\` to see the refreshed action plan; the next top action is the one to focus on if you run another loop today.`)
  lines.push(`3. Spot-check at least one of the dispatched actions' commits to confirm the subprocess output matches what the prompt asked for.`)
  lines.push(`4. If estimated costs were close to actual API charges in the Anthropic console, the cost model is calibrated; otherwise update the \`estimateCost\` function in \`tools/orchestrator/night-loop.mjs\`.`)
  lines.push(``)
  lines.push(`## What this loop could not do`)
  lines.push(``)
  lines.push(`- Regulation pages whose agency rule ID is unknown. Provisional ingredient and product scaffolds are created automatically via \`tools/autonomy/create-provisional-{ingredient,product}-scaffold.mjs\` and logged to \`data/evidence/provisional-{ingredient,product}-scaffolds.jsonl\`. Regulation pages need the official citation, which is the one piece of information the loop does not synthesize.`)
  lines.push(`- Edits to CLAUDE.md, OPERATING.md, or AGENTS.md. Policy documents are Karen's authority per OPERATING.md Part 4.`)
  lines.push(`- HMTc category Step 0 Locks (assigning hmtc_category + hmtc_row + clean/contaminated splits + certification thresholds). The provisional scaffold is the routing destination; Step 0 Lock is the governance overlay that promotes it to a locked HMTc row.`)
  return lines.join("\n")
}

function parseIntArg(args, name, defaultValue) {
  const idx = args.indexOf(name)
  if (idx < 0) return defaultValue
  return parseInt(args[idx + 1], 10)
}

function parseFloatArg(args, name, defaultValue) {
  const idx = args.indexOf(name)
  if (idx < 0) return defaultValue
  return parseFloat(args[idx + 1])
}

function parseStringArg(args, name, defaultValue) {
  const idx = args.indexOf(name)
  if (idx < 0) return defaultValue
  return args[idx + 1]
}

function readGitHead(cwd) {
  const r = spawnSync("git", ["rev-parse", "HEAD"], { cwd, encoding: "utf8" })
  if (r.status !== 0) return null
  return r.stdout.trim()
}
