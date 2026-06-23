#!/usr/bin/env node
/**
 * Content-preservation audit (no-information-loss guard).
 *
 * Reads the committed baseline written by snapshot-information-set.mjs, then
 * re-extracts the current state of every baselined page and enforces the
 * monotonic-superset rule: a redesign may ADD information but must never LOSE
 * it. This is the build-time enforcement of Karen's HARD constraint — "no
 * information loss; collapse via server-rendered details; on-disk [[sources/x]]
 * never rewritten; per-claim provenance preserved." Collapsing into a
 * <details> is allowed precisely because the shared extractor still counts the
 * collapsed text; deleting the text is what this audit catches.
 *
 * Checks (per page, vs baseline):
 *   C0  page-exists         — a baselined page must still exist.
 *   C1  token-count         — current token_count >= baseline (non-decreasing).
 *                             Text inside collapsed <details> counts, so a pure
 *                             collapse does not trip this; a deletion does.
 *   C2  claims-superset     — every baseline (claim, section) multiset entry is
 *                             still present with >= its baseline multiplicity.
 *   C3  cite-edges-superset — every baseline (cite_key, section) edge is still
 *                             present with >= its baseline multiplicity.
 *   C5  distinct-pairs      — distinct (section, cite-key) count non-decreasing.
 *   C6  sections-superset   — every baseline section (level, title) still present.
 *   C7  source-rows         — source_legend_rows non-decreasing.
 *
 * C4 (rendered-HTML preservation over the public build) is stubbed behind
 * --html: it scans a built HTML dir and warns that full DOM-level C4 is not yet
 * implemented. It never affects the exit code. The markdown-side checks above
 * are the load-bearing guard; C4 is the belt-and-suspenders post-render check
 * to be filled in once the Quartz output layout is frozen.
 *
 * (C-numbering intentionally skips C4 inline so the markdown checks keep stable
 * ids as C4 grows.)
 *
 * Output (audit-pattern, matches tools/audit-claim-provenance.mjs):
 *   data/evidence/content-preservation/content-preservation-audit.csv
 *   data/evidence/content-preservation/content-preservation-summary.json
 *
 * Exit code: 1 if any FAIL, unless --warn-only. C4/--html never fails.
 *
 * Usage:
 *   node tools/audit-content-preservation.mjs
 *   node tools/audit-content-preservation.mjs --warn-only
 *   node tools/audit-content-preservation.mjs --json
 *   node tools/audit-content-preservation.mjs --html public   # C4 stub over built HTML
 */

import fs from "node:fs"
import path from "node:path"
import { extractPage, multiset } from "./lib/information-set-extract.mjs"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")
const asJson = args.includes("--json")
const htmlIdx = args.indexOf("--html")
const htmlDir = htmlIdx >= 0 ? args[htmlIdx + 1] : null

const outDir = path.join(repoRoot, "data/evidence/content-preservation")
const baselinePath = path.join(outDir, "baseline-information-set.json")
const csvPath = path.join(outDir, "content-preservation-audit.csv")
const summaryPath = path.join(outDir, "content-preservation-summary.json")

function loadBaseline() {
  if (!fs.existsSync(baselinePath)) {
    console.error(
      `content-preservation: no baseline at ${path.relative(repoRoot, baselinePath)}.`
    )
    console.error("  Run: node tools/snapshot-information-set.mjs   (then commit the baseline)")
    // No baseline is a configuration error, not a content regression. Fail
    // loudly so the prebuild does not silently pass with no guard in place —
    // unless explicitly in warn-only mode (first prebuild insertion).
    process.exit(warnOnly ? 0 : 1)
  }
  return JSON.parse(fs.readFileSync(baselinePath, "utf8"))
}

// One failure row per (page, check, detail). Multiplicity shortfalls and
// missing items are each their own row so the CSV is directly actionable.
const failures = []
const advisories = []

function fail(page, check, detail) {
  failures.push({ page, check, detail })
}

function checkMultisetSuperset(page, check, baseItems, curItems, keyFn, labelFn) {
  const baseMs = multiset(baseItems, keyFn)
  const curMs = multiset(curItems, keyFn)
  for (const [key, baseCount] of baseMs) {
    const curCount = curMs.get(key) || 0
    if (curCount < baseCount) {
      fail(
        page,
        check,
        `${labelFn(key)} — baseline x${baseCount}, current x${curCount} (lost ${baseCount - curCount})`
      )
    }
  }
}

function auditPage(rel, base) {
  const filePath = path.join(repoRoot, rel)

  // C0: page exists.
  if (!fs.existsSync(filePath)) {
    fail(rel, "C0-page-exists", "baselined page is missing from the working tree")
    return
  }

  const raw = fs.readFileSync(filePath, "utf8")
  const cur = extractPage(raw)

  // C1: token count non-decreasing.
  if (cur.token_count < base.token_count) {
    fail(
      rel,
      "C1-token-count",
      `token_count ${cur.token_count} < baseline ${base.token_count} (lost ${base.token_count - cur.token_count}); collapsed <details> text is counted, so this is real deletion`
    )
  }

  // C2: claims superset (multiset over (claim, section)).
  checkMultisetSuperset(
    rel,
    "C2-claims-superset",
    base.claims,
    cur.claims,
    (c) => `${c.section}␟${c.claim}`,
    (k) => {
      const [section, claim] = k.split("␟")
      return `claim "${claim}" in section "${section}"`
    }
  )

  // C3: cite-edges superset (multiset over (cite_key, section)).
  checkMultisetSuperset(
    rel,
    "C3-cite-edges-superset",
    base.cite_edges,
    cur.cite_edges,
    (e) => `${e.section}␟${e.cite_key}`,
    (k) => {
      const [section, key] = k.split("␟")
      return `cite [[sources/${key}]] in section "${section}"`
    }
  )

  // C5: distinct (section, cite-key) non-decreasing.
  if (cur.distinct_section_cite < base.distinct_section_cite) {
    fail(
      rel,
      "C5-distinct-section-cite",
      `distinct (section,cite) ${cur.distinct_section_cite} < baseline ${base.distinct_section_cite}`
    )
  }

  // C6: sections superset (multiset over (level, title)).
  checkMultisetSuperset(
    rel,
    "C6-sections-superset",
    base.sections,
    cur.sections,
    (s) => `H${s.level}␟${s.title}`,
    (k) => {
      const [lvl, title] = k.split("␟")
      return `section ${lvl} "${title}"`
    }
  )

  // C7: source-legend rows non-decreasing.
  if (cur.source_legend_rows < base.source_legend_rows) {
    fail(
      rel,
      "C7-source-rows",
      `source_legend_rows ${cur.source_legend_rows} < baseline ${base.source_legend_rows} (lost ${base.source_legend_rows - cur.source_legend_rows})`
    )
  }
}

// C4 stub: rendered-HTML preservation over the public build. Not yet
// implemented as a real DOM comparison; reports presence and emits an advisory
// so the gap is visible. NEVER affects the exit code.
function c4HtmlStub(dir) {
  const full = path.resolve(repoRoot, dir)
  if (!fs.existsSync(full)) {
    advisories.push({
      scope: "C4-html",
      note: `--html: ${dir} does not exist; skipping rendered-HTML check`,
    })
    return
  }
  let htmlCount = 0
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) walk(p)
      else if (e.name.endsWith(".html")) htmlCount++
    }
  }
  walk(full)
  advisories.push({
    scope: "C4-html",
    note: `C4 rendered-HTML preservation is a STUB (scanned ${htmlCount} .html under ${dir}). DOM-level superset check is not yet implemented; markdown-side C0-C7 are the active guard.`,
  })
}

function main() {
  const baseline = loadBaseline()
  const pages = baseline.pages || {}
  const pageCount = Object.keys(pages).length

  for (const [rel, base] of Object.entries(pages)) {
    auditPage(rel, base)
  }

  if (htmlDir) c4HtmlStub(htmlDir)

  // CSV (one row per failure).
  const headers = ["page", "check", "detail"]
  const csv = [headers.join(",")]
  for (const f of failures) {
    csv.push(
      headers
        .map((h) => {
          const v = String(f[h] ?? "")
          return /[,"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
        })
        .join(",")
    )
  }
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(csvPath, csv.join("\n") + "\n")

  // Per-check tallies.
  const byCheck = {}
  for (const f of failures) byCheck[f.check] = (byCheck[f.check] || 0) + 1

  const summary = {
    schema: "hmi-content-preservation/1",
    generated_at: new Date().toISOString(),
    baseline_generated_at: baseline.generated_at,
    scope: baseline.scope,
    pages_checked: pageCount,
    failure_count: failures.length,
    by_check: byCheck,
    advisories,
    pass: failures.length === 0,
  }
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n")

  if (asJson) {
    console.log(JSON.stringify({ failures, advisories, summary }, null, 2))
  } else {
    if (failures.length === 0) {
      console.log(
        `content-preservation: PASS (${pageCount} page(s); no information loss vs baseline)`
      )
    } else {
      console.log(`content-preservation: ${failures.length} FAILURE(S) across ${pageCount} page(s)`)
      for (const [check, n] of Object.entries(byCheck)) {
        console.log(`  ${check}: ${n}`)
      }
      for (const f of failures.slice(0, 40)) {
        console.log(`  [${f.check}] ${f.page}`)
        console.log(`      ${f.detail}`)
      }
      if (failures.length > 40) console.log(`  … and ${failures.length - 40} more (see CSV)`)
    }
    for (const a of advisories) console.log(`  (advisory ${a.scope}) ${a.note}`)
    console.log(`Wrote ${path.relative(repoRoot, csvPath)}`)
    console.log(`Wrote ${path.relative(repoRoot, summaryPath)}`)
  }

  if (failures.length > 0 && !warnOnly) process.exit(1)
}

main()
