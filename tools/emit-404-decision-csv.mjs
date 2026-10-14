#!/usr/bin/env node
// Emit data/redirects/404-decisions.csv from the HMI-404 decision records.
//
// Inputs, and only these:
//   data/redirects/*.json
//   the redirects array in vercel.json
//
// One row per distinct path, decision, target, and status code. Paths and
// targets are copied as recorded. This script does not add a path that is
// absent from those files, and it does not change redirects.
//
// Decision labels:
//   redirected  an object with source and destination
//   gone-410    a path in the paths array of a gone-410 JSON file
//   restored    a JSON key or decision field that already says restored
//   removed     a JSON key or decision field that already says removed
//
// gone-410.json `excluded` entries are crawl paths that were kept off the
// 410 list. They are counted in the summary and are not written as rows,
// unless the same path is already a redirect (that row comes from the
// redirect record).
//
// When several files record the same path, decision, target, and status
// code, the CSV keeps one row. source_file lists those files in
// lexicographic order, separated by ";".
//
// Status 410 on a gone-410 row is the status middleware.ts returns for that
// list (renderGone). The JSON stores paths only.
//
// Usage (from the repo root):
//   node tools/emit-404-decision-csv.mjs

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { csvLine, parseCsv } from "./evidence/lib/csv.mjs"

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const redirectDir = path.join(repoRoot, "data/redirects")
const vercelPath = path.join(repoRoot, "vercel.json")
const outPath = path.join(redirectDir, "404-decisions.csv")
const outRel = "data/redirects/404-decisions.csv"

const COLUMNS = ["path", "decision", "target", "status_code", "source_file"]
const DECISIONS = ["redirected", "gone-410", "restored", "removed"]

const KEY_DECISION = {
  paths: "gone-410",
  gone: "gone-410",
  "gone-410": "gone-410",
  gone_410: "gone-410",
  redirects: "redirected",
  redirected: "redirected",
  restored: "restored",
  removed: "removed",
}

function cmp(a, b) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

function relFromRoot(abs) {
  return path.relative(repoRoot, abs).split(path.sep).join("/")
}

function isGoneFile(rel) {
  return /gone[-_]?410|(^|[^0-9])410([^0-9]|$)/i.test(path.basename(rel))
}

function pushRecord(records, record) {
  if (!record.path) return
  if (!DECISIONS.includes(record.decision)) return
  records.push({
    path: record.path,
    decision: record.decision,
    target: record.target ?? "",
    status_code: record.status_code ?? "",
    source_file: record.source_file,
  })
}

function absorbRedirect(records, sourceFile, item) {
  if (!item || typeof item !== "object") return false
  if (typeof item.source !== "string" || typeof item.destination !== "string") return false
  const status = item.statusCode == null ? "" : String(item.statusCode)
  pushRecord(records, {
    path: item.source,
    decision: "redirected",
    target: item.destination,
    status_code: status,
    source_file: sourceFile,
  })
  return true
}

function absorbLabeled(records, sourceFile, decision, item, goneFile) {
  if (typeof item === "string") {
    pushRecord(records, {
      path: item,
      decision,
      target: "",
      status_code: decision === "gone-410" && goneFile ? "410" : "",
      source_file: sourceFile,
    })
    return
  }
  if (!item || typeof item !== "object") return
  if (decision === "redirected" && absorbRedirect(records, sourceFile, item)) return
  const explicit = typeof item.decision === "string" ? item.decision : decision
  if (!DECISIONS.includes(explicit)) return
  const pathValue = typeof item.path === "string" ? item.path : typeof item.source === "string" ? item.source : ""
  const target = typeof item.destination === "string" ? item.destination : typeof item.target === "string" ? item.target : ""
  let status = ""
  if (item.statusCode != null) status = String(item.statusCode)
  else if (item.status_code != null) status = String(item.status_code)
  else if (explicit === "gone-410" && goneFile) status = "410"
  pushRecord(records, {
    path: pathValue,
    decision: explicit,
    target,
    status_code: status,
    source_file: sourceFile,
  })
}

function absorbJson(records, excluded, sourceFile, data) {
  const goneFile = isGoneFile(sourceFile)
  if (Array.isArray(data)) {
    for (const item of data) {
      if (!absorbRedirect(records, sourceFile, item)) {
        const decision = typeof item?.decision === "string" ? item.decision : ""
        if (DECISIONS.includes(decision)) absorbLabeled(records, sourceFile, decision, item, goneFile)
      }
    }
    return
  }
  if (!data || typeof data !== "object") return
  for (const [key, value] of Object.entries(data)) {
    if (key === "excluded" && Array.isArray(value)) {
      for (const item of value) {
        const excludedPath = typeof item === "string" ? item : item?.path
        if (typeof excludedPath === "string" && excludedPath) {
          excluded.push({ path: excludedPath, source_file: sourceFile })
        }
      }
      continue
    }
    const decision = KEY_DECISION[key]
    if (!decision || !Array.isArray(value)) continue
    if (decision === "gone-410" && !goneFile) continue
    for (const item of value) absorbLabeled(records, sourceFile, decision, item, goneFile)
  }
}

export function collectDecisions({ redirectDir: dir, vercelPath: vercelFile }) {
  const records = []
  const excluded = []
  const jsonFiles = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .sort(cmp)
  for (const name of jsonFiles) {
    const abs = path.join(dir, name)
    const data = JSON.parse(fs.readFileSync(abs, "utf8"))
    absorbJson(records, excluded, relFromRoot(abs), data)
  }
  const vercel = JSON.parse(fs.readFileSync(vercelFile, "utf8"))
  const vercelRel = relFromRoot(vercelFile)
  for (const item of vercel.redirects ?? []) absorbRedirect(records, vercelRel, item)

  const bySig = new Map()
  for (const record of records) {
    const sig = [record.path, record.decision, record.target, record.status_code].join("\0")
    let row = bySig.get(sig)
    if (!row) {
      row = {
        path: record.path,
        decision: record.decision,
        target: record.target,
        status_code: record.status_code,
        source_files: [],
      }
      bySig.set(sig, row)
    }
    if (!row.source_files.includes(record.source_file)) row.source_files.push(record.source_file)
  }

  const rows = []
  for (const row of bySig.values()) {
    row.source_files.sort(cmp)
    rows.push({
      path: row.path,
      decision: row.decision,
      target: row.target,
      status_code: row.status_code,
      source_file: row.source_files.join(";"),
      source_files: row.source_files,
    })
  }
  rows.sort((a, b) => cmp(a.path, b.path) || cmp(a.decision, b.decision) || cmp(a.target, b.target) || cmp(a.source_file, b.source_file))

  const byPath = new Map()
  for (const row of rows) {
    if (!byPath.has(row.path)) byPath.set(row.path, [])
    byPath.get(row.path).push(row)
  }

  const conflicts = []
  const redirectAnd410 = []
  for (const [pathValue, group] of byPath) {
    if (group.length > 1) {
      conflicts.push({
        path: pathValue,
        rows: group.map((row) => ({
          decision: row.decision,
          target: row.target,
          status_code: row.status_code,
          source_file: row.source_file,
        })),
      })
    }
    const decisions = new Set(group.map((row) => row.decision))
    if (decisions.has("redirected") && decisions.has("gone-410")) redirectAnd410.push(pathValue)
  }
  conflicts.sort((a, b) => cmp(a.path, b.path))
  redirectAnd410.sort(cmp)

  const agreeing = rows.filter((row) => row.source_files.length > 1)
  const agreeingGroups = new Map()
  for (const row of agreeing) {
    const key = row.source_files.join(";")
    agreeingGroups.set(key, (agreeingGroups.get(key) ?? 0) + 1)
  }

  const counts = Object.fromEntries(DECISIONS.map((decision) => [decision, 0]))
  for (const row of rows) counts[row.decision] += 1

  const redirectPaths = new Set(rows.filter((row) => row.decision === "redirected").map((row) => row.path))
  const gonePaths = new Set(rows.filter((row) => row.decision === "gone-410").map((row) => row.path))
  const excludedAlsoRedirected = []
  const excludedNotEmitted = []
  const excludedAlsoGone = []
  for (const item of excluded) {
    if (redirectPaths.has(item.path)) excludedAlsoRedirected.push(item.path)
    else if (gonePaths.has(item.path)) excludedAlsoGone.push(item.path)
    else excludedNotEmitted.push(item.path)
  }

  return {
    rows,
    summary: {
      total_rows: rows.length,
      counts,
      agreeing_duplicate_rows: agreeing.length,
      agreeing_groups: [...agreeingGroups.entries()].sort((a, b) => cmp(a[0], b[0])),
      conflicts,
      redirect_and_410: redirectAnd410,
      excluded_also_redirected: excludedAlsoRedirected.sort(cmp),
      excluded_not_emitted: excludedNotEmitted.sort(cmp),
      excluded_also_gone: excludedAlsoGone.sort(cmp),
    },
  }
}

function writeCsv(file, rows) {
  const lines = [COLUMNS.join(",")]
  for (const row of rows) lines.push(csvLine(COLUMNS.map((column) => row[column])))
  fs.writeFileSync(file, `${lines.join("\n")}\n`, "utf8")
}

function assertRoundTrip(file, rows) {
  const parsed = parseCsv(fs.readFileSync(file, "utf8"))
  if (parsed.length !== rows.length) {
    throw new Error(`wrote ${rows.length} rows but reread ${parsed.length}`)
  }
  for (let i = 0; i < rows.length; i++) {
    for (const column of COLUMNS) {
      if ((parsed[i][column] ?? "") !== rows[i][column]) {
        throw new Error(`row ${i + 1} ${column} mismatch`)
      }
    }
  }
}

function printSummary(summary) {
  console.log(`Wrote ${outRel}`)
  console.log(`total rows: ${summary.total_rows}`)
  for (const decision of DECISIONS) {
    console.log(`${decision}: ${summary.counts[decision]}`)
  }
  console.log(`agreeing duplicates: ${summary.agreeing_duplicate_rows}`)
  for (const [sources, count] of summary.agreeing_groups) {
    console.log(`  ${count} rows recorded in ${sources.split(";").join(" and ")}`)
  }
  console.log(`conflicts: ${summary.conflicts.length}`)
  for (const conflict of summary.conflicts) {
    console.log(`  ${conflict.path}`)
    for (const row of conflict.rows) {
      console.log(`    ${row.decision} target=${row.target} status_code=${row.status_code} source_file=${row.source_file}`)
    }
  }
  console.log(`paths in both a redirect and the 410 list: ${summary.redirect_and_410.length}`)
  for (const pathValue of summary.redirect_and_410) console.log(`  ${pathValue}`)
  console.log(`excluded paths already present as redirect rows: ${summary.excluded_also_redirected.length}`)
  for (const pathValue of summary.excluded_also_redirected) console.log(`  ${pathValue}`)
  console.log(`excluded paths with no decision row: ${summary.excluded_not_emitted.length}`)
  for (const pathValue of summary.excluded_not_emitted) console.log(`  ${pathValue}`)
  if (summary.excluded_also_gone.length > 0) {
    console.log(`excluded paths that are also on the 410 list: ${summary.excluded_also_gone.length}`)
    for (const pathValue of summary.excluded_also_gone) console.log(`  ${pathValue}`)
  }
}

function main() {
  const { rows, summary } = collectDecisions({ redirectDir, vercelPath })
  writeCsv(outPath, rows)
  assertRoundTrip(outPath, rows)
  printSummary(summary)
}

const entry = process.argv[1]
if (entry && path.resolve(entry) === fileURLToPath(import.meta.url)) main()
