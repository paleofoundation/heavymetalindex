#!/usr/bin/env node
// tools/outstanding/decide.mjs — record Karen's ruling on a human-gated item.
//
// Usage: node tools/outstanding/decide.mjs <id> "APPROVE: <what to do>"
//        node tools/outstanding/decide.mjs <id> "DECLINE: <why>"   (-> status wontfix)
//        node tools/outstanding/decide.mjs <id> "DEFER: <note>"    (stays open, decision recorded)
//
// Appends a full updated record with karen_decision set. The next drain sees the
// non-null decision and enacts one_command (deterministically). No model call.

import { getItem, appendRecord } from "./lib.mjs"
import { execFileSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const HERE = path.dirname(fileURLToPath(import.meta.url))
const [id, ...rest] = process.argv.slice(2)
const decision = rest.join(" ").trim()

if (!id || !decision) {
  console.error('Usage: decide.mjs <id> "APPROVE|DECLINE|DEFER: <text>"')
  process.exit(1)
}
const cur = getItem(id)
if (!cur) { console.error(`decide.mjs: no item ${id}`); process.exit(1) }

const verb = decision.split(":")[0].trim().toUpperCase()
let status = cur.status
if (verb === "APPROVE") status = "queued"      // ready for the drain to enact
else if (verb === "DECLINE") status = "wontfix"
// DEFER leaves status unchanged but records the note

appendRecord({ ...cur, karen_decision: decision, status })
console.log(`decide.mjs: ${id} -> ${verb} (status: ${status}). Decision recorded.`)
if (verb === "APPROVE" && cur.one_command) {
  console.log(`  Enactment (run by the next drain, or now): ${cur.one_command}`)
}
try { execFileSync("node", [path.join(HERE, "render-decision-queue.mjs")], { stdio: "ignore" }) } catch { /* non-fatal */ }
