#!/usr/bin/env node
// One-shot: neutralize the 154 `pending-audit-spawn-failed` poison rows that the
// old drain-audit-queue.mjs re-selected and re-burned every cycle (it never wrote
// a failed row's status back — confirmed at drain-audit-queue.mjs:217-219).
//
// What it does:
//   1. Moves every `pending-audit-spawn-failed` row to a TERMINAL status
//      `dead-letter-spawn-failed` (drain selects only {pending,
//      pending-audit-spawn-failed}, so these drop out of rotation permanently).
//   2. Seeds data/evidence/autonomy/audit-attempts.json with those cite_keys at
//      the cap (so the patched drainer won't re-queue them even if status reverts).
//   3. Writes a triage report so NONE are silently lost — some may be transient
//      failures worth re-fetching, not genuine dead ends.
//   4. Backs up the original CSV first; re-emits unchanged rows BYTE-IDENTICALLY
//      (raw-span parser) so the only diff is the 154 status flips + note markers.
//
// Usage:
//   node tools/autonomy/quarantine-spawn-failed.mjs --dry-run   (preview, no writes)
//   node tools/autonomy/quarantine-spawn-failed.mjs             (apply)
//   node tools/autonomy/quarantine-spawn-failed.mjs --out=/tmp/x.csv  (write elsewhere; for tests)

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = new Map(
  process.argv.slice(2).filter((a) => a.startsWith("--")).map((a) => {
    const eq = a.indexOf("=")
    return eq > 0 ? [a.slice(2, eq), a.slice(eq + 1)] : [a.slice(2), "true"]
  })
)
const dryRun = args.get("dry-run") === "true"
const FROM = "pending-audit-spawn-failed"
const TO = "dead-letter-spawn-failed"
const MAX_ATTEMPTS = 5
const today = new Date().toISOString().slice(0, 10)

const csvPath = args.get("in") || path.join(repoRoot, "data/evidence/audit-queue.csv")
const outPath = args.get("out") || csvPath
const attemptsPath = path.join(repoRoot, "data/evidence/autonomy/audit-attempts.json")
const reportPath = path.join(repoRoot, "data/evidence/autonomy", `spawn-failed-quarantine-${today}.md`)

// ---- raw-span CSV parser: each record keeps its exact source bytes ----
function parseCsv(text) {
  const records = []
  let i = 0
  const n = text.length
  while (i < n) {
    const start = i
    const fields = []
    let cur = ""
    let q = false
    while (i < n) {
      const c = text[i]
      if (q) {
        if (c === '"') {
          if (text[i + 1] === '"') { cur += '"'; i += 2; continue }
          q = false; i++; continue
        }
        cur += c; i++; continue
      } else {
        if (c === '"') { q = true; i++; continue }
        if (c === ",") { fields.push(cur); cur = ""; i++; continue }
        if (c === "\n") break
        if (c === "\r") { i++; continue }
        cur += c; i++; continue
      }
    }
    fields.push(cur)
    const raw = text.slice(start, i)
    if (!(raw === "" && i >= n)) records.push({ fields, raw })
    if (i < n && text[i] === "\n") i++
    else break
  }
  // drop a trailing empty record produced by a final newline
  while (records.length && records[records.length - 1].raw === "") records.pop()
  return records
}
function csvField(s) {
  const str = String(s ?? "")
  return /[,"\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str
}
const serializeRecord = (r) => r.fields.map(csvField).join(",")

// ---- load + locate ----
if (!fs.existsSync(csvPath)) {
  console.error(`No audit-queue.csv at ${csvPath}`)
  process.exit(1)
}
const text = fs.readFileSync(csvPath, "utf8")
const records = parseCsv(text)
const header = records[0]
const statusIdx = header.fields.indexOf("status")
const citeIdx = header.fields.indexOf("cite_key")
const folderIdx = header.fields.indexOf("source_folder")
const handleIdx = header.fields.indexOf("handle")
const notesIdx = header.fields.indexOf("notes")
if (statusIdx < 0 || citeIdx < 0) {
  console.error("audit-queue.csv missing required columns (status, cite_key)")
  process.exit(1)
}

const quarantined = []
for (const rec of records.slice(1)) {
  if ((rec.fields[statusIdx] || "").trim() === FROM) {
    rec.fields[statusIdx] = TO
    if (notesIdx >= 0) {
      const marker = `quarantined ${today}: spawn-failed, removed from drain rotation; needs manual triage/re-fetch`
      rec.fields[notesIdx] = rec.fields[notesIdx] ? `${rec.fields[notesIdx]} | ${marker}` : marker
    }
    rec._changed = true
    quarantined.push({
      cite_key: rec.fields[citeIdx],
      folder: folderIdx >= 0 ? rec.fields[folderIdx] : "",
      handle: handleIdx >= 0 ? rec.fields[handleIdx] : "",
    })
  }
}

console.log(`quarantine-spawn-failed: ${quarantined.length} rows with status="${FROM}" → "${TO}" (dry-run=${dryRun})`)
if (quarantined.length === 0) {
  console.log("Nothing to quarantine. (Already clean, or run previously.)")
  process.exit(0)
}

// Re-emit: unchanged rows keep their exact original bytes; changed rows reserialize.
const body = records.map((r) => (r._changed ? serializeRecord(r) : r.raw)).join("\n") + "\n"

if (dryRun) {
  console.log(`DRY RUN — would write ${outPath} (${records.length} rows; ${quarantined.length} changed).`)
  console.log(`Sample of rows that would move:`)
  for (const q of quarantined.slice(0, 8)) console.log(`  - ${q.cite_key}  (${q.folder})`)
  if (quarantined.length > 8) console.log(`  … and ${quarantined.length - 8} more`)
  process.exit(0)
}

// Backup before overwriting in place.
const inPlace = outPath === csvPath
if (inPlace) {
  const backup = `${csvPath}.bak-${today}`
  fs.writeFileSync(backup, text, "utf8")
  console.log(`Backup written: ${path.relative(repoRoot, backup)}`)
}
fs.writeFileSync(outPath, body, "utf8")

if (!inPlace) {
  // --out redirect (test mode): only the CSV emit is exercised; skip the
  // attempts/report side-effects so a copy-test cannot pollute the repo.
  console.log(`Wrote ${outPath} (${quarantined.length} rows quarantined). Side-effects skipped (--out redirect).`)
  process.exit(0)
}

// Seed the attempts cap so the patched drainer won't re-queue these cite_keys.
let attempts = {}
try {
  if (fs.existsSync(attemptsPath)) attempts = JSON.parse(fs.readFileSync(attemptsPath, "utf8"))
} catch {}
for (const q of quarantined) if (q.cite_key) attempts[q.cite_key] = MAX_ATTEMPTS
fs.mkdirSync(path.dirname(attemptsPath), { recursive: true })
fs.writeFileSync(attemptsPath, JSON.stringify(attempts, null, 2) + "\n", "utf8")

// Triage report — nothing silently lost.
const lines = [
  `# Spawn-failed quarantine — ${today}`,
  "",
  `Moved ${quarantined.length} rows from \`${FROM}\` to terminal \`${TO}\` and capped their attempts at ${MAX_ATTEMPTS}.`,
  `These are the rows the old drain-audit-queue.mjs re-burned every cycle (it never wrote a failed row's status back).`,
  `They are removed from the drain rotation but **not** deleted — some may be transient failures worth re-fetching.`,
  "",
  `| cite_key | source_folder | handle |`,
  `|---|---|---|`,
  ...quarantined.map((q) => `| ${q.cite_key} | ${q.folder} | ${q.handle} |`),
  "",
]
fs.writeFileSync(reportPath, lines.join("\n"), "utf8")

console.log(`Wrote ${path.relative(repoRoot, outPath)} (${quarantined.length} rows quarantined).`)
console.log(`Seeded ${path.relative(repoRoot, attemptsPath)} (${quarantined.length} cite_keys at cap ${MAX_ATTEMPTS}).`)
console.log(`Triage report: ${path.relative(repoRoot, reportPath)}`)
