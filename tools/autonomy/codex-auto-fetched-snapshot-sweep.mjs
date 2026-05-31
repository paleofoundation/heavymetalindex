#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { spawn } from "node:child_process"

const ROOT = process.cwd()
const args = parseArgs(process.argv.slice(2))
const snapshotPath = args.get("snapshot") || latestSnapshot()
const mode = args.get("mode") || "triage"
const concurrency = Number(args.get("concurrency") || 10)
const includeCodexClaims = args.get("include-codex-claims") === "true"
const now = new Date().toISOString()

const trackerPath = path.join(ROOT, "data/evidence/autonomy/manual-fetch-tracker.csv")
const auditPath = path.join(ROOT, "data/evidence/wishlist-fetch-audit.csv")
const sourceDir = path.join(ROOT, "wiki/sources")
const textDir = path.join(os.tmpdir(), "codex-auto-fetched-text")
fs.mkdirSync(textDir, { recursive: true })

if (!snapshotPath || !fs.existsSync(snapshotPath)) {
  console.error("No snapshot found. Pass --snapshot=/tmp/codex-snapshot-....txt")
  process.exit(1)
}

const snapshot = fs.readFileSync(snapshotPath, "utf8")
  .split(/\r?\n/)
  .map((s) => s.trim())
  .filter(Boolean)

const tracker = loadCsv(trackerPath)
const trackerHeader = tracker.header.length ? tracker.header : ["pdf_path", "handle", "status", "last_tick", "cite_key", "notes"]
const trackedByFilename = new Map()
for (const row of tracker.rows) {
  const pdfPath = row.pdf_path || row[trackerHeader[0]] || ""
  if (pdfPath) trackedByFilename.set(path.basename(pdfPath), row)
}

const claimRows = []
const work = []
for (const rel of snapshot) {
  const filename = path.basename(rel)
  const existing = trackedByFilename.get(filename)
  const status = existing?.status || ""
  if (status.startsWith("ingested")) continue
  if (status.startsWith("claimed") && !(includeCodexClaims && status === "claimed-by-codex")) continue
  const handle = `AUTO_${slugify(path.basename(filename, ".pdf"))}`.slice(0, 96)
  if (!status.startsWith("claimed")) {
    claimRows.push({
      pdf_path: rel,
      handle,
      status: "claimed-by-codex",
      last_tick: now,
      cite_key: "",
      notes: `Codex snapshot claim ${path.basename(snapshotPath)}`,
    })
  }
  work.push({ rel, filename, handle })
}

if (claimRows.length) {
  appendCsv(trackerPath, trackerHeader, claimRows)
}

console.log(JSON.stringify({ snapshot: snapshot.length, claimed: claimRows.length, skippedAlreadyClaimedOrIngested: snapshot.length - work.length, mode }, null, 2))

if (mode === "claim-only") process.exit(0)

const doiIndex = buildDoiIndex()
const existingAudit = loadCsv(auditPath)
const auditHeader = existingAudit.header
const finalAuditNames = new Set(existingAudit.rows
  .filter((r) => r.decision === "ingested" || String(r.decision || "").startsWith("skip:") || String(r.decision || "").startsWith("fail:"))
  .map((r) => path.basename(r.downloaded_path || ""))
  .filter(Boolean))

const results = await mapLimit(work, concurrency, async (item) => triageOne(item, doiIndex, finalAuditNames))
const decisions = results.filter((r) => r && r.decision && r.decision !== "real-ingest")
const real = results.filter((r) => r?.decision === "real-ingest")
const rollups = decisions.filter((r) => r.decision === "ingested")
const skips = decisions.filter((r) => r.decision.startsWith("skip:"))

const newAuditRows = decisions
  .filter((r) => !finalAuditNames.has(r.filename))
  .map((r) => ({
    wishlist_id: idFromFilename(r.filename),
    wishlist_section: sectionFromFilename(r.filename),
    decision: r.decision,
    downloaded_path: r.rel,
    relevance_score: "",
    positive_score: "",
    negative_penalty: "",
    negative_hits: r.reason || "",
    food_hits: r.foodHits || "",
    domain_match: r.domainMatch || "",
    already_indexed: r.existingPage || "",
    title: r.title || "",
    doi: r.doi || "",
    year: r.year || "",
    journal: r.journal || "",
    oa_url: "",
    cited_by_count: "",
    query_terms: r.queryTerms || "",
  }))

if (newAuditRows.length) appendCsv(auditPath, auditHeader, newAuditRows)

const out = {
  snapshot: snapshot.length,
  processedUnclaimed: work.length,
  auditRowsAppended: newAuditRows.length,
  rollups: rollups.length,
  skips: skips.length,
  realIngestCandidates: real.length,
  realIngestManifest: path.join("data/evidence/autonomy", `codex-real-ingest-candidates-${stamp()}.json`),
}
fs.writeFileSync(path.join(ROOT, out.realIngestManifest), JSON.stringify(real, null, 2) + "\n")
console.log(JSON.stringify(out, null, 2))

async function triageOne(item, doiIndex, finalAuditNames) {
  if (finalAuditNames.has(item.filename)) {
    return { ...item, decision: "skip:already-dispositioned", reason: "filename already has final wishlist-fetch-audit decision" }
  }
  const full = path.join(ROOT, item.rel)
  if (!fs.existsSync(full)) {
    return { ...item, decision: "skip:not-pdf:missing-file", reason: "missing before triage" }
  }
  if (!isPdf(full)) {
    return { ...item, decision: "skip:not-pdf:content-type", reason: "missing PDF header/trailer" }
  }
  const textPath = path.join(textDir, `${item.filename}.txt`)
  const text = await extractText(full, textPath)
  if (!text || text.replace(/\s+/g, "").length < 500) {
    return { ...item, decision: "skip:not-pdf:unreadable-text", reason: "pdftotext produced too little text" }
  }

  const doi = extractDoi(text)
  if (doi && doiIndex.has(normDoi(doi))) {
    const existingPage = doiIndex.get(normDoi(doi))
    return { ...item, decision: "ingested", doi, existingPage, reason: `DOI already indexed at ${existingPage}`, ...metadata(text) }
  }

  const meta = metadata(text)
  const titleText = `${item.filename} ${meta.title} ${text.slice(0, 6000)}`.toLowerCase()
  const hasMetal = /\b(lead|cadmium|arsenic|mercury|chromium|nickel|aluminium|aluminum|antimony|barium|copper|zinc|manganese|iron|pb|cd|hg|as|cr|ni|al|sb|ba)\b/.test(titleText)
  const hasFoodOrCare = /\b(food|foods|edible|diet|dietary|rice|wheat|flour|cereal|coffee|tea|cashew|peanut|spinach|fruit|vegetable|water|formula|infant|toothpaste|cosmetic|beverage|milk|meat|fish|seed|oil|nut|butter)\b/.test(titleText)
  const hasConcentration = /\b(mg\/kg|µg\/kg|ug\/kg|mg kg|µg kg|ug kg|ppm|ppb|ng\/g|µg\/g|ug\/g|mg\/l|µg\/l|ug\/l|concentration|contents?|levels?)\b/.test(titleText)
  const primaryTableSignal = /\b(table|mean|median|range|samples?|n\s*=|icp|aas|atomic absorption|mass spectrometry)\b/.test(titleText)
  const reviewOnly = /\b(systematic review|meta-analysis|narrative review|review article|cochrane|scoping review)\b/.test(titleText)

  if (!hasMetal) return { ...item, decision: "skip:no-heavy-metal-data", reason: "no heavy-metal analyte signal in extracted text", ...meta, doi }
  if (!hasFoodOrCare) return { ...item, decision: "skip:not-target-cell", reason: "no food/personal-care matrix signal in extracted text", ...meta, doi }
  if (reviewOnly && !/\b(we collected|we sampled|samples were collected|determined in|analysed|analyzed)\b/.test(titleText)) {
    return { ...item, decision: "skip:review-only-no-primary-data", reason: "review/meta-analysis without primary occurrence table signal", ...meta, doi }
  }
  if (!hasConcentration || !primaryTableSignal) {
    return { ...item, decision: "skip:not-food-occurrence", reason: "no extractable concentration/statistic signal in first-pass text", ...meta, doi }
  }
  return {
    ...item,
    decision: "real-ingest",
    doi,
    ...meta,
    reason: "metal + target matrix + concentration/statistic signals present; needs source-page ingest",
    text_path: textPath,
    queryTerms: sectionFromFilename(item.filename),
  }
}

function latestSnapshot() {
  const tmp = os.tmpdir()
  return fs.readdirSync(tmp)
    .filter((f) => f.startsWith("codex-snapshot-") && f.endsWith(".txt"))
    .map((f) => path.join(tmp, f))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0]
}

function buildDoiIndex() {
  const map = new Map()
  for (const file of fs.readdirSync(sourceDir).filter((f) => f.endsWith(".md"))) {
    const p = path.join(sourceDir, file)
    const s = fs.readFileSync(p, "utf8")
    const m = s.match(/^doi:\s*"?([^"\n]+)"?/m)
    if (!m) continue
    const d = normDoi(m[1])
    if (d && d !== "null") map.set(d, `wiki/sources/${file}`)
  }
  return map
}

function extractDoi(text) {
  const m = text.match(/\b10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i)
  return m ? m[0].replace(/[)\].,;]+$/, "") : ""
}

function metadata(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean).slice(0, 80)
  const doi = extractDoi(text)
  const year = (text.match(/\b(20[0-2]\d|19[6-9]\d)\b/) || [])[1] || ""
  const title = lines.find((l) =>
    l.length > 30 &&
    l.length < 220 &&
    /[a-z]/i.test(l) &&
    !/^(journal|doi|abstract|keywords|introduction|article|research article|open access)$/i.test(l) &&
    !/^(vol\.|volume|issn|received|accepted|published)/i.test(l)
  ) || ""
  const journal = lines.find((l) => /\b(journal|food|chemistry|environment|science|pollution|toxicol|water|nutrition|foods)\b/i.test(l) && l.length < 160) || ""
  return { title, year, journal, doi }
}

function isPdf(file) {
  const fd = fs.openSync(file, "r")
  try {
    const head = Buffer.alloc(5)
    fs.readSync(fd, head, 0, 5, 0)
    if (head.toString() !== "%PDF-") return false
    const stat = fs.statSync(file)
    const len = Math.min(4096, stat.size)
    const tail = Buffer.alloc(len)
    fs.readSync(fd, tail, 0, len, stat.size - len)
    return tail.includes(Buffer.from("%%EOF"))
  } finally {
    fs.closeSync(fd)
  }
}

function extractText(pdf, textPath) {
  return new Promise((resolve) => {
    const child = spawn("pdftotext", ["-enc", "UTF-8", "-f", "1", "-l", "16", pdf, textPath], { stdio: "ignore" })
    child.on("close", () => {
      try { resolve(fs.readFileSync(textPath, "utf8")) } catch { resolve("") }
    })
    child.on("error", () => resolve(""))
  })
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length)
  let next = 0
  async function worker() {
    while (next < items.length) {
      const i = next++
      out[i] = await fn(items[i])
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return out
}

function loadCsv(file) {
  if (!fs.existsSync(file)) return { header: [], rows: [] }
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean)
  const header = parseCsvLine(lines[0] || "")
  return { header, rows: lines.slice(1).map((l) => Object.fromEntries(parseCsvLine(l).map((v, i) => [header[i], v]))) }
}

function appendCsv(file, header, rows) {
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) fs.writeFileSync(file, header.join(",") + "\n")
  const lines = rows.map((row) => header.map((h) => csv(row[h] ?? "")).join(",")).join("\n")
  fs.appendFileSync(file, lines + "\n")
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let q = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (q && c === '"' && line[i + 1] === '"') { cur += '"'; i++; continue }
    if (c === '"') { q = !q; continue }
    if (c === "," && !q) { out.push(cur); cur = ""; continue }
    cur += c
  }
  out.push(cur)
  return out
}

function csv(v) {
  const s = String(v)
  return /[",\n\r]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s
}

function normDoi(v) {
  return String(v || "").trim().toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, "").replace(/^doi:\s*/, "").replaceAll(/\s+/g, "")
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

function idFromFilename(filename) {
  return path.basename(filename, ".pdf").split("_")[0]
}

function sectionFromFilename(filename) {
  const stem = path.basename(filename, ".pdf")
  return stem.replace(/_\d{4}_.+$/, "").replace(/^gap-/, "").replace(/^auto-/, "")
}

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, "-")
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (!a.startsWith("--")) continue
    const i = a.indexOf("=")
    if (i === -1) m.set(a.slice(2), "true")
    else m.set(a.slice(2, i), a.slice(i + 1))
  }
  return m
}
