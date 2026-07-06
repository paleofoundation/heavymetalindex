// Minimal RFC-4180 CSV reader (handles quoted fields, embedded commas, and ""
// escapes). Streaming row iterator so large manifests (triage = 23k rows, fetch
// audits) parse without loading a giant array of split()s that mis-count columns
// when a field contains a comma.

import fs from "node:fs"

// Parse a whole CSV string into an array of objects keyed by the header row.
export function parseCsv(text) {
  const rows = parseRows(text)
  if (!rows.length) return []
  const header = rows[0]
  return rows.slice(1).map((r) => {
    const o = {}
    for (let i = 0; i < header.length; i++) o[header[i]] = r[i] ?? ""
    return o
  })
}

export function parseCsvFile(filePath) {
  return parseCsv(fs.readFileSync(filePath, "utf8"))
}

// Low-level: CSV text → array of string[] rows.
export function parseRows(text) {
  const rows = []
  let field = ""
  let row = []
  let inQuotes = false
  const s = String(text)
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') { field += '"'; i++ }
        else inQuotes = false
      } else field += c
    } else if (c === '"') {
      inQuotes = true
    } else if (c === ",") {
      row.push(field); field = ""
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && s[i + 1] === "\n") i++
      row.push(field); field = ""
      // skip blank lines produced by trailing newline
      if (row.length > 1 || row[0] !== "") rows.push(row)
      row = []
    } else {
      field += c
    }
  }
  if (field !== "" || row.length) { row.push(field); if (row.length > 1 || row[0] !== "") rows.push(row) }
  return rows
}
