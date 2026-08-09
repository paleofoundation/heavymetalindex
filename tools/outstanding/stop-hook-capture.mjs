#!/usr/bin/env node
// tools/outstanding/stop-hook-capture.mjs — Claude Code Stop hook.
//
// Fires at the end of every turn. Harvests structured outstanding-items the
// assistant emitted, so a finding never dies in the transcript. HARD CONSTRAINTS
// (this is the highest-frequency surface in the system):
//   * NO MODEL CALL. Pure deterministic scan.
//   * Only ASSISTANT-authored text is scanned (a tool result or web page could
//     smuggle a fake <!-- OUTSTANDING --> sentinel; those are NOT trusted).
//   * Honors stop_hook_active to prevent hook recursion.
//   * ALWAYS exits 0 — a capture failure must never block the session.
//
// Recognized emissions (in assistant text only):
//   <!-- OUTSTANDING: {"id":"OI-...","title":"...","scope_class":"...","type":"..."} -->
//   FINDING: <text>      -> a human-gated finding
//   STRANDED: <text>     -> a human-gated promote (built-but-unshipped)
//   TODO(karen): <text>  -> a human-gated decision

import fs from "node:fs"
import { appendRecord, normalize, validate, readLedger, dedupeKey } from "./lib.mjs"

function done() { process.exit(0) }

async function readStdin() {
  return await new Promise((resolve) => {
    let data = ""
    const t = setTimeout(() => resolve(data), 800) // never hang the session
    process.stdin.on("data", (c) => (data += c))
    process.stdin.on("end", () => { clearTimeout(t); resolve(data) })
    process.stdin.on("error", () => { clearTimeout(t); resolve(data) })
  })
}

function assistantTextFrom(rec) {
  // Tolerant extraction of assistant-authored text across transcript schemas.
  const isAssistant =
    rec?.type === "assistant" || rec?.role === "assistant" || rec?.message?.role === "assistant"
  if (!isAssistant) return ""
  const content = rec.message?.content ?? rec.content ?? rec.text
  if (typeof content === "string") return content
  if (Array.isArray(content)) {
    return content.map((c) => (typeof c === "string" ? c : c?.type === "text" ? c.text || "" : "")).join("\n")
  }
  return ""
}

function kebab(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "item"
}
function today() {
  const d = new Date()
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`
}

function harvest(text, out) {
  // 1) explicit sentinels
  const re = /<!--\s*OUTSTANDING:\s*(\{[\s\S]*?\})\s*-->/g
  let m
  while ((m = re.exec(text))) {
    try {
      const obj = JSON.parse(m[1])
      if (obj && obj.title) out.push(normalize(obj))
    } catch { /* skip malformed */ }
  }
  // 2) line prefixes -> human-gated fail-safe
  const map = { "FINDING:": "finding", "STRANDED:": "promote", "TODO(karen):": "decision" }
  for (const line of text.split("\n")) {
    for (const [prefix, type] of Object.entries(map)) {
      if (line.trimStart().startsWith(prefix)) {
        const title = line.trimStart().slice(prefix.length).trim()
        if (title) out.push(normalize({ id: `OI-${today()}-${kebab(title)}`, title, type, scope_class: "human-gated", status: "open", source_session: "stop-hook" }))
      }
    }
  }
}

async function main() {
  let stdin = ""
  try { stdin = await readStdin() } catch { /* ignore */ }
  let payload = {}
  try { payload = JSON.parse(stdin || "{}") } catch { payload = {} }
  if (payload.stop_hook_active === true) done() // prevent recursion

  const tp = payload.transcript_path
  if (!tp || !fs.existsSync(tp)) done()

  let raw = ""
  try { raw = fs.readFileSync(tp, "utf8") } catch { done() }

  const candidates = []
  for (const line of raw.split("\n")) {
    const t = line.trim()
    if (!t) continue
    let rec
    try { rec = JSON.parse(t) } catch { continue }
    const text = assistantTextFrom(rec)
    if (text && (text.includes("OUTSTANDING:") || /(^|\n)\s*(FINDING:|STRANDED:|TODO\(karen\):)/.test(text))) {
      harvest(text, candidates)
    }
  }

  if (!candidates.length) done()

  // dedupe vs the ledger (open items) and within this batch
  const seen = new Set()
  for (const existing of readLedger().values()) {
    if (!["done", "wontfix"].includes(existing.status)) seen.add(dedupeKey(existing))
  }
  let added = 0
  for (const rec of candidates) {
    const { ok } = validate(rec)
    if (!ok) continue
    const k = dedupeKey(rec)
    if (seen.has(k)) continue
    seen.add(k)
    appendRecord(rec)
    added++
  }
  if (added) console.error(`stop-hook-capture: appended ${added} outstanding item(s) to the ledger.`)
  done()
}

main().catch(() => done())
