import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const ledgerPath = path.join(root, "data/log/entries.jsonl")
const manifestPath = path.join(root, "data/log/manifest.json")
const logDir = path.join(root, "wiki/log")
const legacyLogPath = path.join(root, "wiki/log.md")

const validOps = new Set([
  "app",
  "certification",
  "correction",
  "course",
  "extract",
  "ingest",
  "lint",
  "query",
  "scaffold",
  "schema",
  "synthesis",
])

function fail(message) {
  throw new Error(`[log-archives] ${message}`)
}

function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function monthLabel(month) {
  const [year, monthNumber] = month.split("-").map(Number)
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, monthNumber - 1, 1)),
  )
}

function readLedger() {
  if (!fs.existsSync(ledgerPath)) fail(`Missing canonical ledger: ${path.relative(root, ledgerPath)}`)
  const raw = fs.readFileSync(ledgerPath, "utf8").trim()
  if (!raw) fail("Canonical ledger is empty")
  return raw.split(/\n+/).map((line, index) => {
    try {
      return JSON.parse(line)
    } catch (error) {
      fail(`Invalid JSONL at line ${index + 1}: ${error.message}`)
    }
  })
}

function canonicalEntryId(entry) {
  return `${entry.date}-${slugify(entry.op)}-${slugify(entry.handle)}`
}

function validateEntries(entries) {
  const ids = new Set()
  const sequences = new Set()
  for (const [index, entry] of entries.entries()) {
    const line = index + 1
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date ?? "")) fail(`Line ${line} has invalid date`)
    if (!validOps.has(entry.op)) fail(`Line ${line} has unsupported op: ${entry.op}`)
    if (!entry.handle || typeof entry.handle !== "string") fail(`Line ${line} is missing handle`)
    if (!entry.title || typeof entry.title !== "string") fail(`Line ${line} is missing title`)
    if (!entry.body || typeof entry.body !== "string") fail(`Line ${line} is missing body`)
    if (!entry.body.includes("Pages touched:")) fail(`Line ${line} body must include Pages touched:`)
    if (!entry.body.includes("Notes:")) fail(`Line ${line} body must include Notes:`)
    if (!Number.isInteger(entry.sequence) || entry.sequence < 1) fail(`Line ${line} has invalid sequence`)
    if (sequences.has(entry.sequence)) fail(`Duplicate sequence: ${entry.sequence}`)
    sequences.add(entry.sequence)

    const expectedId = canonicalEntryId(entry)
    if (entry.id !== expectedId) fail(`Line ${line} id must be ${expectedId}`)
    if (ids.has(entry.id)) fail(`Duplicate entry id: ${entry.id}`)
    ids.add(entry.id)
  }
}

function sortEntries(entries) {
  return [...entries].sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date)
    return a.sequence - b.sequence
  })
}

function groupBy(entries, getKey) {
  const groups = new Map()
  for (const entry of entries) {
    const key = getKey(entry)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(entry)
  }
  return groups
}

function frontmatter(fields) {
  const lines = ["---"]
  for (const [key, value] of Object.entries(fields)) {
    lines.push(`${key}: ${JSON.stringify(value)}`)
  }
  lines.push("---", "")
  return lines.join("\n")
}

function renderEntry(entry, level = "##") {
  return [
    `<a id="${entry.id}"></a>`,
    "",
    `${level} [${entry.date}] ${entry.op} | ${entry.handle} - ${entry.title}`,
    "",
    `Entry ID: \`${entry.id}\``,
    "",
    entry.body.trim(),
    "",
  ].join("\n")
}

function renderEntryList(entries, level = "##") {
  return entries.map((entry) => renderEntry(entry, level)).join("\n")
}

function link(pathname, label) {
  return `[[${pathname}|${label}]]`
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content.endsWith("\n") ? content : `${content}\n`)
}

function ledgerText(entries) {
  return entries.map((entry) => JSON.stringify(entry)).join("\n") + "\n"
}

function build() {
  if (fs.existsSync(legacyLogPath)) {
    fail("Legacy wiki/log.md still exists. Move public log output to wiki/log/index.md and remove wiki/log.md.")
  }

  const entries = readLedger()
  validateEntries(entries)

  const sorted = sortEntries(entries)
  const maxDate = sorted[0].date
  const months = [...groupBy(sorted, (entry) => entry.date.slice(0, 7)).entries()].sort(([a], [b]) =>
    b.localeCompare(a),
  )
  const years = [...groupBy(sorted, (entry) => entry.date.slice(0, 4)).entries()].sort(([a], [b]) =>
    b.localeCompare(a),
  )
  const sha256 = crypto.createHash("sha256").update(ledgerText(entries)).digest("hex")

  const archiveList = months
    .map(([month, monthEntries]) => `- ${link(`log/${month}`, monthLabel(month))} - ${monthEntries.length} entries`)
    .join("\n")
  const yearList = years
    .map(([year, yearEntries]) => `- ${link(`log/${year}`, year)} - ${yearEntries.length} entries`)
    .join("\n")

  writeFile(
    path.join(logDir, "index.md"),
    `${frontmatter({ title: "Update History", type: "log-index", updated: maxDate })}# Heavy Metal Index Change Log

This is the public archive of Heavy Metal Index ingests, lints, corrections, schema changes, and source-routing work. The readable pages are generated from the canonical JSONL ledger at \`data/log/entries.jsonl\` so records stay intact while the public archive remains navigable.

Corrections should be added as new correction entries. Existing entries are retained for historical context instead of being silently deleted.

- Total entries: ${entries.length}
- Ledger SHA-256: \`${sha256}\`
- Complete readable archive: ${link("log/all", "all entries")}
- Public machine-readable ledger copy: ${link("log/records", "records JSONL")}

## Archive By Month

${archiveList}

## Archive By Year

${yearList}

## Latest Entries

${renderEntryList(sorted.slice(0, 10), "###")}`,
  )

  writeFile(
    path.join(logDir, "all.md"),
    `${frontmatter({ title: "Complete Change Log", type: "log-archive-all", updated: maxDate })}# Complete Change Log

Stable complete archive generated from \`data/log/entries.jsonl\`.

- Back to ${link("log", "Update History")}
- Ledger SHA-256: \`${sha256}\`

${renderEntryList(sorted)}`,
  )

  writeFile(
    path.join(logDir, "records.md"),
    `${frontmatter({ title: "Canonical Log Records", type: "log-records", updated: maxDate })}# Canonical Log Records

Public JSONL copy of the canonical log ledger. Each line is one record.

- Back to ${link("log", "Update History")}
- Ledger SHA-256: \`${sha256}\`
- Entries: ${entries.length}

\`\`\`jsonl
${ledgerText(entries)}\`\`\`
`,
  )

  for (const [month, monthEntries] of months) {
    writeFile(
      path.join(logDir, `${month}.md`),
      `${frontmatter({ title: `Change Log - ${monthLabel(month)}`, type: "log-archive-month", updated: monthEntries[0].date })}# Change Log - ${monthLabel(month)}

Stable monthly archive for entries dated ${month}.

- Back to ${link("log", "Update History")}
- Complete archive: ${link("log/all", "all entries")}

${renderEntryList(monthEntries)}`,
    )
  }

  for (const [year, yearEntries] of years) {
    const yearMonths = months.filter(([month]) => month.startsWith(`${year}-`))
    const monthLinks = yearMonths
      .map(([month, monthEntries]) => `- ${link(`log/${month}`, monthLabel(month))} - ${monthEntries.length} entries`)
      .join("\n")
    writeFile(
      path.join(logDir, `${year}.md`),
      `${frontmatter({ title: `Change Log - ${year}`, type: "log-archive-year", updated: yearEntries[0].date })}# Change Log - ${year}

Stable yearly archive for entries dated ${year}.

- Back to ${link("log", "Update History")}
- Complete archive: ${link("log/all", "all entries")}

## Monthly Archives

${monthLinks}

## Entries

${renderEntryList(yearEntries)}`,
    )
  }

  writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        entries: entries.length,
        latest_date: maxDate,
        ledger_sha256: sha256,
        months: Object.fromEntries(months.map(([month, monthEntries]) => [month, monthEntries.length])),
        years: Object.fromEntries(years.map(([year, yearEntries]) => [year, yearEntries.length])),
      },
      null,
      2,
    )}\n`,
  )

  console.log(`log archives generated: ${entries.length} entries, ${months.length} months, ${years.length} years`)
}

build()
