#!/usr/bin/env node
// tools/outstanding/render-decision-queue.mjs — project the human-gated, undecided
// items to data/evidence/outstanding/decision-queue.csv (the short "waiting on you"
// list). Carries the karen_decision column pattern from new-product-proposals-pending.csv.
// Read-only view; Karen writes via decide.mjs. No model call.

import fs from "node:fs"
import { pendingDecisions, DECISION_QUEUE } from "./lib.mjs"

const csvCell = (s) => {
  const v = String(s == null ? "" : s)
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
}

const rows = pendingDecisions().sort((a, b) => (a.id < b.id ? 1 : -1))
const header = ["id", "title", "repo", "type", "blocked_on", "one_command", "repro", "karen_decision"]
const body = rows.map((i) =>
  [i.id, i.title, i.repo, i.type, i.blocked_on.join(" "), i.one_command, i.repro, ""].map(csvCell).join(",")
)
fs.mkdirSync(DECISION_QUEUE.replace(/\/[^/]+$/, ""), { recursive: true })
fs.writeFileSync(DECISION_QUEUE, [header.join(","), ...body].join("\n") + "\n", "utf8")
console.log(`render-decision-queue: ${rows.length} pending decision(s) -> ${DECISION_QUEUE.replace(process.cwd() + "/", "")}`)
