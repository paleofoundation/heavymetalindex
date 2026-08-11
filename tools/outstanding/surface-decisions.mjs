#!/usr/bin/env node
// tools/outstanding/surface-decisions.mjs — print the short "decisions waiting on
// you" list. Used two ways, both deterministic (NO model call):
//   1. SessionStart hook  -> stdout is injected into the new session's context.
//   2. Scheduled routine   -> the routine pushes this text to Karen out-of-session.
// Flags: --brief (counts + ids only) · --auto (also show open auto items, for the drainer digest).

import { pendingDecisions, openItems } from "./lib.mjs"

const argv = process.argv.slice(2)
const brief = argv.includes("--brief")
const showAuto = argv.includes("--auto")

const pending = pendingDecisions()
const autoOpen = openItems().filter((i) => i.scope_class === "auto")

if (pending.length === 0 && !(showAuto && autoOpen.length)) {
  console.log("Outstanding-items ledger: no decisions waiting on you.")
  process.exit(0)
}

const out = []
out.push(`## ${pending.length} decision${pending.length === 1 ? "" : "s"} waiting on you (outstanding-items ledger)`)
out.push("")
for (const i of pending.sort((a, b) => (a.id < b.id ? 1 : -1))) {
  out.push(`- **${i.title}**  \`${i.id}\`  (${i.repo}/${i.type})${i.blocked_on.length ? `  — blocked_on: ${i.blocked_on.join(", ")}` : ""}`)
  if (!brief) {
    if (i.repro) out.push(`  - ${i.repro}`)
    if (i.evidence.length) out.push(`  - evidence: ${i.evidence.join(" · ")}`)
    out.push(`  - yes → \`node tools/outstanding/decide.mjs ${i.id} "APPROVE: ..."\`${i.one_command ? `  (enacts: \`${i.one_command}\`)` : ""}`)
  }
}
if (showAuto && autoOpen.length) {
  out.push("")
  out.push(`## ${autoOpen.length} auto item${autoOpen.length === 1 ? "" : "s"} the drainer will handle (no decision needed)`)
  for (const i of autoOpen.sort((a, b) => (a.id < b.id ? 1 : -1))) {
    out.push(`- ${i.title} \`${i.id}\` (${i.repo})${i.blocked_on.length ? ` — blocked_on: ${i.blocked_on.join(", ")}` : ""}`)
  }
}
console.log(out.join("\n"))
