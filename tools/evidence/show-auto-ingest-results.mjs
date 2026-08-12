#!/usr/bin/env node
/** Show current local-ingest, occurrence-gap, and AI-adjudication results. */

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const args = parseArgs(process.argv.slice(2))
const product = args.get("product") ?? ""
const limit = Number(args.get("limit") ?? 25)

const queue = readCsv("data/evidence/local_reingest_queue.csv")
const gaps = readJsonl("data/gaps/open_gaps.jsonl")
const adjudications = readCsv("data/evidence/ai_adjudication_queue.csv")
const filteredQueue = product ? queue.filter((row) => row.product_slug === product) : queue
const filteredGaps = product
  ? gaps.filter((gap) => gap.page === `wiki/products/${product}.md`)
  : gaps
const filteredAdjudications = product
  ? adjudications.filter((row) => row.product_slug === product)
  : adjudications

console.log("\nHeavy Metal Index local ingest results")
console.log("======================================")
console.log(`Product: ${product || "all"}`)
console.log(`Local reingest queue rows: ${filteredQueue.length}`)
console.log(`Persistent open gaps: ${filteredGaps.length}`)
console.log(`AI occurrence/routing adjudications: ${filteredAdjudications.length}`)
console.log("Method boundary: initial HMTc limits are government-limit-only; external occurrence is context only.")

printCounts("Open gaps by reason", filteredGaps, (row) => row.why)
printCounts("Adjudications by task", filteredAdjudications, (row) => row.machine_task)

if (filteredAdjudications.length) {
  console.log("\nNext adjudications")
  for (const row of filteredAdjudications.slice(0, limit)) {
    console.log(`- ${row.priority} ${row.page}${row.metal_species ? ` / ${row.metal_species}` : ""}: ${row.machine_task}`)
  }
}

console.log("\nFiles")
for (const file of [
  "data/evidence/local_reingest_queue.csv",
  "data/evidence/hmtc_aggregate_distributions.csv",
  "data/gaps/open_gaps.jsonl",
  "data/evidence/ai_adjudication_queue.csv",
  "data/evidence/ai_adjudication_summary.json",
]) console.log(`- ${file}`)

function readCsv(rel) {
  const file = path.join(root, rel)
  if (!fs.existsSync(file)) return []
  const lines = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n").trim().split("\n")
  if (lines.length < 2) return []
  const headers = splitCsv(lines[0])
  return lines.slice(1).filter(Boolean).map((line) => {
    const cells = splitCsv(line)
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]))
  })
}

function splitCsv(line) {
  const out = []
  let value = ""
  let quoted = false
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]
    if (quoted && char === '"' && line[index + 1] === '"') { value += '"'; index += 1; continue }
    if (char === '"') { quoted = !quoted; continue }
    if (char === "," && !quoted) { out.push(value); value = ""; continue }
    value += char
  }
  out.push(value)
  return out
}

function readJsonl(rel) {
  const file = path.join(root, rel)
  if (!fs.existsSync(file)) return []
  return fs.readFileSync(file, "utf8").split("\n").filter(Boolean).map((line) => JSON.parse(line))
}

function printCounts(label, rows, keyFn) {
  if (!rows.length) return
  const counts = new Map()
  for (const row of rows) {
    const key = keyFn(row) || "(none)"
    counts.set(key, (counts.get(key) ?? 0) + 1)
  }
  console.log(`\n${label}`)
  for (const [key, count] of [...counts].sort((a, b) => b[1] - a[1])) console.log(`- ${key}: ${count}`)
}

function parseArgs(argv) {
  const parsed = new Map()
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (!arg.startsWith("--")) continue
    const [key, inline] = arg.slice(2).split("=", 2)
    const value = inline ?? argv[index + 1] ?? "true"
    parsed.set(key, value)
    if (inline === undefined && argv[index + 1] && !argv[index + 1].startsWith("--")) index += 1
  }
  return parsed
}
