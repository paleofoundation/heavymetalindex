// tools/outstanding/lib.mjs — shared helpers for the outstanding-items ledger.
//
// The ledger is an append-only JSONL file; each line is a FULL snapshot of one
// item. "Latest record per `id` wins" (the same merge idiom the audited-drafts
// promoter uses), so an update is just a new full record with a fresh `ts`.
// Deterministic only — this module NEVER calls a model.

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"

const HERE = path.dirname(fileURLToPath(import.meta.url))
export const REPO = path.resolve(HERE, "../..")
export const LEDGER = path.join(REPO, "data/evidence/outstanding/ledger.jsonl")
export const DECISION_QUEUE = path.join(REPO, "data/evidence/outstanding/decision-queue.csv")
export const FINDINGS = path.join(REPO, "docs/findings.md")

export const SCOPE_CLASSES = new Set(["auto", "human-gated"])
export const TYPES = new Set(["finding", "code-fix", "promote", "audit", "stage-for-review", "content", "decision"])
export const STATUSES = new Set(["open", "queued", "staged", "blocked", "done", "wontfix"])

export function sha(str) {
  return crypto.createHash("sha256").update(String(str)).digest("hex").slice(0, 16)
}

// dedupe key for a captured item (title + sorted target paths)
export function dedupeKey(rec) {
  return sha(`${(rec.title || "").trim().toLowerCase()}|${[...(rec.target_paths || [])].sort().join(",")}`)
}

export function nowISO() {
  return new Date().toISOString()
}

// Read the ledger and return a Map(id -> latest full record). Tolerates a
// blank/garbled line rather than throwing (a capture surface must never crash).
export function readLedger() {
  const byId = new Map()
  if (!fs.existsSync(LEDGER)) return byId
  const lines = fs.readFileSync(LEDGER, "utf8").split("\n")
  for (const line of lines) {
    const t = line.trim()
    if (!t) continue
    let rec
    try { rec = JSON.parse(t) } catch { continue }
    if (!rec || !rec.id) continue
    byId.set(rec.id, rec) // later line wins (append-only => chronological)
    void 0
  }
  return byId
}

export function allItems() {
  return [...readLedger().values()]
}

export function getItem(id) {
  return readLedger().get(id) || null
}

// Append one full record. Fills ts if absent. Returns the record written.
export function appendRecord(rec) {
  const out = { ts: nowISO(), ...rec }
  fs.mkdirSync(path.dirname(LEDGER), { recursive: true })
  fs.appendFileSync(LEDGER, JSON.stringify(out) + "\n", "utf8")
  return out
}

// Validate a record shape; returns {ok, errors[]}. Lenient on optional fields.
export function validate(rec) {
  const e = []
  if (!rec.id || !/^OI-\d{8}-[a-z0-9-]+$/.test(rec.id)) e.push(`bad id: ${rec.id}`)
  if (!rec.title) e.push("missing title")
  if (!SCOPE_CLASSES.has(rec.scope_class)) e.push(`bad scope_class: ${rec.scope_class}`)
  if (!TYPES.has(rec.type)) e.push(`bad type: ${rec.type}`)
  if (rec.status && !STATUSES.has(rec.status)) e.push(`bad status: ${rec.status}`)
  if (rec.repo && !["index", "cert", "tested"].includes(rec.repo)) e.push(`bad repo: ${rec.repo}`)
  return { ok: e.length === 0, errors: e }
}

// Normalize a partial into a full record with safe defaults.
export function normalize(p) {
  return {
    id: p.id,
    ts: p.ts || nowISO(),
    title: p.title || "",
    scope_class: SCOPE_CLASSES.has(p.scope_class) ? p.scope_class : "human-gated", // fail-safe
    type: TYPES.has(p.type) ? p.type : "finding",
    status: STATUSES.has(p.status) ? p.status : "open",
    repo: p.repo || "index",
    target_paths: Array.isArray(p.target_paths) ? p.target_paths : (p.target_paths ? [p.target_paths] : []),
    repro: p.repro || "",
    acceptance_criteria: Array.isArray(p.acceptance_criteria) ? p.acceptance_criteria : (p.acceptance_criteria ? [p.acceptance_criteria] : []),
    blocked_on: Array.isArray(p.blocked_on) ? p.blocked_on : (p.blocked_on ? [p.blocked_on] : []),
    karen_decision: p.karen_decision ?? null,
    one_command: p.one_command || "",
    evidence: Array.isArray(p.evidence) ? p.evidence : (p.evidence ? [p.evidence] : []),
    source_session: p.source_session || "",
    notes: p.notes || "",
  }
}

export function openItems() {
  return allItems().filter((i) => !["done", "wontfix"].includes(i.status))
}

export function pendingDecisions() {
  return allItems().filter((i) => i.scope_class === "human-gated" && i.karen_decision == null && !["done", "wontfix"].includes(i.status))
}
