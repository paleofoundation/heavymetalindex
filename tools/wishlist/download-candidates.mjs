#!/usr/bin/env node
// Downloads approved open-access PDFs from the candidates CSV into the
// manual-fetch staging folder. Karen reviews the candidates CSV first and
// fills the `approved` column with "yes" for rows she wants pulled; this
// script reads only those rows.
//
// Input: data/evidence/wishlist-candidates.csv
// Output: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/*.pdf
//
// Duplicates against existing source pages are skipped (the candidates CSV
// marks them as `already_indexed=true`); duplicates against earlier auto-
// fetched files are skipped by filename uniqueness. Failed downloads are
// logged but do not stop the run.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const candidatesPath = path.join(repoRoot, "data/evidence/wishlist-candidates.csv")
const stagingDir = path.join(repoRoot, "raw/manual-fetch/seasonal-geographic-variance/auto-fetched")
const USER_AGENT = "HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)"
const DELAY_MS = 500 // polite rate limit between downloads

if (!fs.existsSync(candidatesPath)) {
  console.error(`No candidates CSV at ${candidatesPath}. Run tools/wishlist/find-candidates.mjs first.`)
  process.exit(1)
}

const rows = parseCsv(fs.readFileSync(candidatesPath, "utf8"))
const approved = rows.filter((r) => /^yes$/i.test(String(r.approved || "").trim()))

if (approved.length === 0) {
  console.log("No rows in the candidates CSV have approved=yes. Open the CSV, mark rows yes/no/skip in the `approved` column, then re-run.")
  process.exit(0)
}

fs.mkdirSync(stagingDir, { recursive: true })

console.log(`Downloading ${approved.length} approved candidate(s) to ${path.relative(repoRoot, stagingDir)}/...\n`)

let downloaded = 0
let skipped = 0
let failed = 0

for (let i = 0; i < approved.length; i += 1) {
  const row = approved[i]
  const filename = candidateFilename(row)
  const target = path.join(stagingDir, filename)
  const label = `[${i + 1}/${approved.length}] ${row.wishlist_id} ${row.title?.slice(0, 60) ?? ""}`

  if (fs.existsSync(target)) {
    console.log(`${label} -> already in staging, skipped`)
    skipped += 1
    continue
  }

  if (!row.oa_url) {
    console.log(`${label} -> no oa_url, skipped`)
    skipped += 1
    continue
  }

  try {
    process.stdout.write(`${label} -> fetching ${row.oa_url} ... `)
    const response = await fetch(row.oa_url, {
      headers: { "User-Agent": USER_AGENT },
      redirect: "follow",
    })
    if (!response.ok) {
      process.stdout.write(`HTTP ${response.status}\n`)
      failed += 1
      continue
    }
    const contentType = response.headers.get("content-type") || ""
    if (!contentType.includes("pdf") && !contentType.includes("octet-stream")) {
      process.stdout.write(`not PDF (content-type: ${contentType}); skipped\n`)
      skipped += 1
      continue
    }
    const buffer = Buffer.from(await response.arrayBuffer())
    fs.writeFileSync(target, buffer)
    process.stdout.write(`${formatBytes(buffer.length)}\n`)
    downloaded += 1
  } catch (err) {
    process.stdout.write(`error: ${err.message}\n`)
    failed += 1
  }

  await new Promise((resolve) => setTimeout(resolve, DELAY_MS))
}

console.log(`\nDownload pass complete.`)
console.log(`  downloaded: ${downloaded}`)
console.log(`  skipped:    ${skipped}`)
console.log(`  failed:     ${failed}`)
console.log(`\nFiles are in ${path.relative(repoRoot, stagingDir)}/. They will be picked up by the next ingest session.`)

function candidateFilename(row) {
  const year = row.year || "0000"
  const doi = (row.doi || "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").slice(0, 60)
  const titleSlug = (row.title || "untitled")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80)
  const wishlist = (row.wishlist_id || "WL-XXXX").toLowerCase()
  if (doi) return `${wishlist}_${year}_${doi}.pdf`
  return `${wishlist}_${year}_${titleSlug}.pdf`
}

function formatBytes(n) {
  if (n > 1024 * 1024) return `${(n / 1024 / 1024).toFixed(1)} MB`
  if (n > 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${n} B`
}

function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n").filter((l) => l.length > 0)
  if (lines.length < 2) return []
  const headers = parseCsvLine(lines[0])
  const rows = []
  for (let i = 1; i < lines.length; i += 1) {
    const cells = parseCsvLine(lines[i])
    const row = {}
    for (let j = 0; j < headers.length; j += 1) row[headers[j]] = cells[j] ?? ""
    rows.push(row)
  }
  return rows
}

function parseCsvLine(line) {
  const cells = []
  let current = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i]
    if (ch === '"' && line[i + 1] === '"') {
      current += '"'
      i += 1
      continue
    }
    if (ch === '"') {
      inQuotes = !inQuotes
      continue
    }
    if (ch === "," && !inQuotes) {
      cells.push(current)
      current = ""
      continue
    }
    current += ch
  }
  cells.push(current)
  return cells
}
