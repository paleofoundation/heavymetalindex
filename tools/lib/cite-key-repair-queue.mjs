// Cite-key repair queue. The ingest gates (ingest-marker-batch, ingest-manual-
// fetch-batch) call this when a paper would otherwise be minted under a garbage
// cite-key (a section-header / analyte / "unknown" author slot — see
// ./cite-key-validity.mjs). Instead of letting the page land and feed the
// duplicate-DOI treadmill, the paper is recorded here for authoritative repair:
// the wrong-DOI / author-confabulation sweep resolves the real first-author from
// the DOI via Crossref, and the paper is re-ingested under a defensible key.
//
// Queue file: data/evidence/cite-key-repair-queue.csv (one row per raw_handle,
// upserted so repeated ingest runs do not duplicate). This is a deterministic
// evidence-register artifact, not a wiki page.

import fs from "node:fs"
import path from "node:path"

const QUEUE_PATH = path.join(process.cwd(), "data/evidence/cite-key-repair-queue.csv")
const COLUMNS = ["raw_handle", "cite_key", "doi", "source", "reason", "first_seen", "status"]

function csvField(v) {
  const s = v == null ? "" : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (!lines.length) return []
  const header = splitCsvLine(lines[0])
  return lines.slice(1).map((line) => {
    const cells = splitCsvLine(line)
    const row = {}
    header.forEach((h, i) => (row[h] = cells[i] ?? ""))
    return row
  })
}

function splitCsvLine(line) {
  const out = []
  let cur = "", inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQ) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (c === '"') inQ = false
      else cur += c
    } else if (c === '"') inQ = true
    else if (c === ",") { out.push(cur); cur = "" }
    else cur += c
  }
  out.push(cur)
  return out
}

export function loadRepairQueue() {
  if (!fs.existsSync(QUEUE_PATH)) return []
  try {
    return parseCsv(fs.readFileSync(QUEUE_PATH, "utf8"))
  } catch {
    return []
  }
}

// Merge entries into the queue, keyed by raw_handle (or cite_key when no handle).
// Existing rows are preserved (first_seen kept); new keys are appended. Writes the
// file once. Returns the number of newly-added rows.
export function mergeCiteKeyRepairQueue(entries, today = new Date().toISOString().slice(0, 10)) {
  if (!entries || !entries.length) return 0
  const existing = loadRepairQueue()
  const byKey = new Map()
  for (const r of existing) byKey.set(r.raw_handle || r.cite_key, r)
  let added = 0
  for (const e of entries) {
    const key = e.raw_handle || e.cite_key
    if (!key || byKey.has(key)) continue
    byKey.set(key, {
      raw_handle: e.raw_handle || "",
      cite_key: e.cite_key || "",
      doi: e.doi || "",
      source: e.source || "",
      reason: e.reason || "garbage-cite-key",
      first_seen: today,
      status: "open",
    })
    added++
  }
  if (!added) return 0
  fs.mkdirSync(path.dirname(QUEUE_PATH), { recursive: true })
  const rows = [...byKey.values()]
  const out = [COLUMNS.join(","), ...rows.map((r) => COLUMNS.map((c) => csvField(r[c])).join(","))].join("\n") + "\n"
  fs.writeFileSync(QUEUE_PATH, out)
  return added
}

export function recordCiteKeyRepair(entry) {
  return mergeCiteKeyRepairQueue([entry])
}

export { QUEUE_PATH }
