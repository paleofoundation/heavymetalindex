// Robust RFC-4180 CSV parser shared across evidence generators.
//
// The evidence CSVs (product_source_routing_audit.csv,
// hmtc_aggregate_distributions.csv) carry embedded commas inside quoted
// multi-value cells (declared_products, metal lists) and JSON blobs
// (contribution_log) that can themselves contain commas, quotes, and — in
// principle — newlines. A `cut`/`awk`/split-on-comma approach breaks on these,
// so every consumer must go through this parser.
//
// Handles:
//   - quoted fields with embedded commas
//   - escaped quotes ("" inside a quoted field)
//   - embedded newlines inside a quoted field (CRLF or LF)
//   - a trailing newline at end of file
//
// parseCsv(text)      -> array of row objects keyed by the header row
// parseCsvRows(text)  -> array of string[] (header included as row 0)

export function parseCsvRows(text) {
  const rows = []
  let field = ""
  let row = []
  let inQuotes = false
  let i = 0
  const n = text.length

  while (i < n) {
    const ch = text[i]
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i += 2
          continue
        }
        inQuotes = false
        i++
        continue
      }
      field += ch
      i++
      continue
    }
    if (ch === '"') {
      inQuotes = true
      i++
      continue
    }
    if (ch === ",") {
      row.push(field)
      field = ""
      i++
      continue
    }
    if (ch === "\r") {
      // swallow CR; the following LF (if present) terminates the row
      i++
      continue
    }
    if (ch === "\n") {
      row.push(field)
      rows.push(row)
      field = ""
      row = []
      i++
      continue
    }
    field += ch
    i++
  }
  // flush the final field/row if the file does not end on a newline
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

export function parseCsv(text) {
  const rows = parseCsvRows(text)
  if (rows.length === 0) return []
  const header = rows[0]
  const out = []
  for (let r = 1; r < rows.length; r++) {
    const cells = rows[r]
    // skip fully-blank trailing rows
    if (cells.length === 1 && cells[0] === "") continue
    const o = {}
    for (let c = 0; c < header.length; c++) o[header[c]] = cells[c] ?? ""
    out.push(o)
  }
  return out
}

// CSV-quote a single value for emitting registers.
export function csvCell(value) {
  const s = value === null || value === undefined ? "" : String(value)
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

export function csvLine(values) {
  return values.map(csvCell).join(",")
}
