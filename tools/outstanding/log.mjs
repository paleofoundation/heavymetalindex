#!/usr/bin/env node
// tools/outstanding/log.mjs — append an item to the outstanding-items ledger.
//
// Usage:
//   node tools/outstanding/log.mjs --json '{"id":"OI-...","title":"...", ...}'
//   node tools/outstanding/log.mjs --id OI-... --title "..." --type code-fix --scope auto --repo cert \
//        --paths "a.mjs,b.md" --repro "..." --accept "cmd exits 0" --one-command "..." --blocked-on OI-x
//
// Deterministic; no model call. Idempotent by (title + target_paths): a duplicate
// capture is skipped unless --force. Also regenerates the findings + decision-queue views.

import { appendRecord, normalize, validate, readLedger, dedupeKey } from "./lib.mjs"
import { execFileSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

const HERE = path.dirname(fileURLToPath(import.meta.url))
const argv = process.argv.slice(2)
const flag = (n) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : undefined }
const has = (n) => argv.includes(n)

let partial
const jsonArg = flag("--json")
if (jsonArg) {
  partial = JSON.parse(jsonArg)
} else {
  partial = {
    id: flag("--id"),
    title: flag("--title"),
    type: flag("--type"),
    scope_class: flag("--scope"),
    status: flag("--status"),
    repo: flag("--repo"),
    target_paths: (flag("--paths") || "").split(",").map((s) => s.trim()).filter(Boolean),
    repro: flag("--repro"),
    acceptance_criteria: (flag("--accept") || "").split("||").map((s) => s.trim()).filter(Boolean),
    blocked_on: (flag("--blocked-on") || "").split(",").map((s) => s.trim()).filter(Boolean),
    one_command: flag("--one-command"),
    evidence: (flag("--evidence") || "").split("||").map((s) => s.trim()).filter(Boolean),
    source_session: flag("--session"),
    notes: flag("--notes"),
  }
}

const rec = normalize(partial)
const { ok, errors } = validate(rec)
if (!ok) {
  console.error(`log.mjs: invalid item — ${errors.join("; ")}`)
  process.exit(1)
}

// idempotency: skip if an open item with the same dedupe key already exists (unless --force)
if (!has("--force")) {
  const key = dedupeKey(rec)
  for (const existing of readLedger().values()) {
    if (["done", "wontfix"].includes(existing.status)) continue
    if (dedupeKey(existing) === key && existing.id !== rec.id) {
      console.log(`log.mjs: duplicate of ${existing.id} (same title+paths) — skipped. Use --force to override.`)
      process.exit(0)
    }
  }
}

appendRecord(rec)
console.log(`log.mjs: ${rec.id} [${rec.scope_class}/${rec.type}/${rec.status}] logged.`)

// regenerate the two views (best-effort; never fail the log on a render error)
for (const script of ["render-findings.mjs", "render-decision-queue.mjs"]) {
  try { execFileSync("node", [path.join(HERE, script)], { stdio: "ignore" }) } catch { /* non-fatal */ }
}
