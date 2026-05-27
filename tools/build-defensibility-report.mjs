#!/usr/bin/env node
// HMI-26 — Defensibility report generator.
//
// Auto-generates a per-page defensibility report for a single wiki page.
// For every numerical claim on the page, the report joins through to:
//
//   1. The H2 section the claim appears in.
//   2. The `[[sources/<slug>]]` wikilinks cited in that section.
//   3. The `data/evidence/wiki_edit_audit.jsonl` rows that recorded edits
//      to each cited source page (retrieval date, models used, agreement
//      state) — and any audit rows that recorded edits to the page itself.
//
// This is the defensibility deliverable from the HMI-9 brief:
//   "every claim → its sources → retrieval date → model versions used →
//    model agreement state".
//
// Reproducibility contract: given the same inputs, the report is
// byte-identical. The only non-deterministic source is the input log /
// page contents; everything in the generator is sorted and stable.
//
// Output: markdown. v1 prints markdown only; PDF / public rendering and
// cross-page rollups are explicitly out of scope (see HMI-26).
//
// Usage:
//
//   node tools/build-defensibility-report.mjs wiki/products/<page>.md
//   npm run defensibility -- wiki/products/<page>.md
//
//   # Write to a specific path:
//   node tools/build-defensibility-report.mjs <page> --out <path>
//
//   # Print to stdout instead of writing a file:
//   node tools/build-defensibility-report.mjs <page> --stdout
//
//   # Override the inputs (used by tests against fixtures):
//   node tools/build-defensibility-report.mjs <page> \
//     --wiki-root <dir> --audit-log <path> --out <path>

import { createHash } from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { extractClaims, listSections } from "./lib/claim-provenance.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DEFAULT_REPO_ROOT = path.resolve(__dirname, "..")

// ── CLI ──────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { positional: [], flags: {} }
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i]
    if (v === "--stdout") args.flags.stdout = true
    else if (v === "--out") args.flags.out = argv[++i]
    else if (v === "--wiki-root") args.flags.wikiRoot = argv[++i]
    else if (v === "--audit-log") args.flags.auditLog = argv[++i]
    else if (v === "--repo-root") args.flags.repoRoot = argv[++i]
    else if (v.startsWith("--")) throw new Error(`Unknown flag: ${v}`)
    else args.positional.push(v)
  }
  return args
}

function usage() {
  return [
    "Usage: build-defensibility-report.mjs <wiki/path/to/page.md> [options]",
    "",
    "  --out <path>       Write to <path> instead of the default reports dir.",
    "  --stdout           Print report to stdout, write nothing.",
    "  --wiki-root <dir>  Override repo root containing wiki/ and data/ (for tests).",
    "  --audit-log <path> Override path to wiki_edit_audit.jsonl (for tests).",
    "  --repo-root <dir>  Override repo root (combines wiki-root and audit-log).",
  ].join("\n")
}

// ── Pure helpers (no I/O) ────────────────────────────────────────────────────

export function readAuditLog(logPath) {
  if (!fs.existsSync(logPath)) return []
  return fs
    .readFileSync(logPath, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))
}

// The audit log's `page` field sometimes contains multiple paths joined by
// "; " — split before matching so we don't miss multi-page edits.
function auditRowMatchesPage(row, page) {
  if (typeof row.page !== "string") return false
  return row.page.split(";").map((p) => p.trim()).includes(page)
}

export function filterAuditRowsForPage(rows, page) {
  return rows
    .filter((r) => auditRowMatchesPage(r, page))
    .slice()
    .sort((a, b) => compareAuditRows(a, b))
}

function compareAuditRows(a, b) {
  // Deterministic sort: applied_at, then edit_id.
  if (a.applied_at !== b.applied_at) return a.applied_at < b.applied_at ? -1 : 1
  if (a.edit_id !== b.edit_id) return a.edit_id < b.edit_id ? -1 : 1
  return 0
}

// Index all audit rows by the pages they touch. A single row may map to many
// pages (the "; "-joined case). Returns Map<page, row[]>.
export function indexAuditRowsByPage(rows) {
  const idx = new Map()
  for (const r of rows) {
    if (typeof r.page !== "string") continue
    for (const p of r.page.split(";").map((s) => s.trim()).filter(Boolean)) {
      if (!idx.has(p)) idx.set(p, [])
      idx.get(p).push(r)
    }
  }
  for (const arr of idx.values()) arr.sort(compareAuditRows)
  return idx
}

function sha256Hex(text) {
  return createHash("sha256").update(text).digest("hex")
}

// ── Report rendering ─────────────────────────────────────────────────────────

// Build the per-claim citation chain. Returns { targets: [...] }, where each
// target entry has { kind, slug, targetPath, targetPageExists, auditRows }.
// kind ∈ "sources" | "regulations" | "testing".
function buildClaimChain({ claim, wikiRoot, auditRowsByPage }) {
  const targets = claim.citedTargets.map(({ kind, slug }) => {
    const targetPath = `wiki/${kind}/${slug}.md`
    const absPath = path.join(wikiRoot, targetPath)
    const exists = fs.existsSync(absPath)
    const auditRows = auditRowsByPage.get(targetPath) || []
    return { kind, slug, targetPath, targetPageExists: exists, auditRows }
  })
  return { targets }
}

function renderAuditRow(row, indent = "  ") {
  // One line per row, no internal newlines, so multiple rows stack cleanly.
  return [
    `${indent}- \`edit_id=${row.edit_id}\``,
    `retrieval=${row.retrieval_date}`,
    `models=[${(row.models_used || []).join(", ")}]`,
    `agreement=${row.model_agreement_state}`,
    `applied=${row.applied_at}`,
    `span=${row.span_id}`,
  ].join(" · ")
}

function renderTarget(target) {
  const missing = target.targetPageExists ? "" : " (page missing)"
  const head = `- \`${target.targetPath}\`${missing}`
  if (target.auditRows.length === 0) {
    return [head, "  - audit rows: none"].join("\n")
  }
  const lines = [head, `  - audit rows (${target.auditRows.length}):`]
  for (const r of target.auditRows) lines.push(renderAuditRow(r, "    "))
  return lines.join("\n")
}

function renderClaim(claim, chain) {
  const lines = [`#### Claim \`${claim.claim}\``]
  lines.push(`- Context: \`${claim.context.trim()}\``)
  if (chain.targets.length === 0) {
    lines.push("- Cited targets: **none in section** — claim has no traceable provenance")
    return lines.join("\n")
  }
  lines.push(`- Cited targets (${chain.targets.length}):`)
  for (const target of chain.targets) {
    // Indent the target block one level deeper than the bullet.
    const block = renderTarget(target).split("\n").map((l) => `  ${l}`).join("\n")
    lines.push(block)
  }
  return lines.join("\n")
}

function renderUncitedClaim(claim) {
  return `- \`${claim.claim}\` in section _${claim.section}_ — context: \`${claim.context.trim()}\``
}

// Stable per-section grouping in document order.
function groupClaimsBySection(claims, sections) {
  const bySection = new Map()
  for (const s of sections) bySection.set(s.name, [])
  // Claims before the first section land under "(opening)".
  if (!bySection.has("(opening)")) bySection.set("(opening)", [])
  for (const c of claims) {
    if (!bySection.has(c.section)) bySection.set(c.section, [])
    bySection.get(c.section).push(c)
  }
  // Drop empty sections from the rendered output for tidiness.
  return [...bySection.entries()].filter(([, arr]) => arr.length > 0)
}

function renderReport({
  pagePath,
  pageRelative,
  pageRaw,
  claims,
  sections,
  pageAuditRows,
  auditRowsByPage,
  auditLogRelative,
  wikiRoot,
  totalAuditRowsRead,
}) {
  const total = claims.length
  // "Cited" here means the claim's own H2 section names at least one
  // provenance-bearing wikilink. A page-level Sources block alone is not
  // enough — it would attribute every claim to the entire reference list,
  // which is exactly the over-attribution failure the report should
  // surface, not paper over.
  const isCited = (c) => c.citedTargets.length > 0
  const supported = claims.filter(isCited).length
  const uncited = claims.filter((c) => !isCited(c))
  const distinctTargets = new Map() // `${kind}/${slug}` → { kind, slug, path }
  let chainedAuditRowCount = 0
  for (const c of claims) {
    for (const { kind, slug } of c.citedTargets) {
      const key = `${kind}/${slug}`
      const targetPath = `wiki/${kind}/${slug}.md`
      if (!distinctTargets.has(key)) {
        distinctTargets.set(key, { kind, slug, targetPath })
      }
      const rows = auditRowsByPage.get(targetPath) || []
      chainedAuditRowCount += rows.length
    }
  }
  const distinctSources = [...distinctTargets.values()].filter((t) => t.kind === "sources")

  const pageHash = sha256Hex(pageRaw)
  const lines = []

  lines.push("---")
  lines.push(`source_page: ${pageRelative}`)
  lines.push(`generator: tools/build-defensibility-report.mjs`)
  lines.push(`audit_log: ${auditLogRelative}`)
  lines.push(`source_page_sha256: ${pageHash}`)
  lines.push(`total_claims: ${total}`)
  lines.push(`cited_claims: ${supported}`)
  lines.push(`uncited_claims: ${total - supported}`)
  lines.push(`distinct_cited_targets: ${distinctTargets.size}`)
  lines.push(`distinct_cited_sources: ${distinctSources.length}`)
  lines.push(`audit_rows_for_page: ${pageAuditRows.length}`)
  lines.push(`audit_rows_for_cited_targets: ${chainedAuditRowCount}`)
  lines.push(`audit_log_total_rows: ${totalAuditRowsRead}`)
  lines.push("noindex: true")
  lines.push("---")
  lines.push("")
  lines.push(`# Defensibility report — \`${pageRelative}\``)
  lines.push("")
  lines.push(
    "This report joins every numerical claim on the page to its citation chain " +
      "and the audit metadata recorded in `data/evidence/wiki_edit_audit.jsonl`. " +
      "It is generated by `node tools/build-defensibility-report.mjs <page>` and is " +
      "byte-identical given the same inputs.",
  )
  lines.push("")
  lines.push("## How to read this")
  lines.push("")
  lines.push("- Sections follow the page's own H2 structure.")
  lines.push(
    "- Each claim shows the claim value, the section it appeared in, the cited " +
      "sources in that section, and — when the cited source page itself has audit " +
      "rows — the retrieval date, models used, agreement state, and span id from " +
      "each row.",
  )
  lines.push(
    "- Claims without an in-section citation chain (no `[[sources/...]]`, " +
      "`[[regulations/...]]`, or `[[testing/...]]` link in the same H2 section " +
      "as the claim) are listed at the end as uncited claims. A page-level " +
      "sources block alone is not credited here — it would inherit every " +
      "claim onto every listed source and defeat the report's purpose.",
  )
  lines.push(
    "- This v1 verifies that a citation exists. It does not yet verify that the " +
      "cited source contains the claimed value — that is the v2 PDF-side check.",
  )
  lines.push("")

  lines.push("## Summary")
  lines.push("")
  lines.push("| Field | Value |")
  lines.push("|---|---|")
  lines.push(`| total claims | ${total} |`)
  lines.push(`| cited claims | ${supported} |`)
  lines.push(`| uncited claims | ${total - supported} |`)
  lines.push(`| distinct cited targets | ${distinctTargets.size} |`)
  lines.push(`| distinct cited \`sources/\` pages | ${distinctSources.length} |`)
  lines.push(`| audit rows on this page | ${pageAuditRows.length} |`)
  lines.push(`| audit rows on cited target pages | ${chainedAuditRowCount} |`)
  lines.push(`| audit log rows read | ${totalAuditRowsRead} |`)
  lines.push("")

  lines.push("## Page-level audit rows")
  lines.push("")
  if (pageAuditRows.length === 0) {
    lines.push("_No audit rows reference this page directly._")
    lines.push("")
    lines.push(
      "This is expected for pages whose content was written before the per-edit " +
        "audit-row write barrier (see `docs/continuous-ingest-architecture.md`). " +
        "Defensibility for these pages flows through the audit rows on the source " +
        "pages they cite, listed under each claim below.",
    )
  } else {
    for (const r of pageAuditRows) lines.push(renderAuditRow(r, ""))
  }
  lines.push("")

  lines.push("## Claims by section")
  lines.push("")
  const grouped = groupClaimsBySection(claims, sections)
  if (grouped.length === 0) {
    lines.push("_No numerical claims detected on this page._")
    lines.push("")
  } else {
    for (const [section, sectionClaims] of grouped) {
      lines.push(`### ${section}`)
      lines.push("")
      // Sort claims within section by offset (already in order from extractClaims).
      for (const claim of sectionClaims) {
        const chain = buildClaimChain({ claim, wikiRoot, auditRowsByPage })
        lines.push(renderClaim(claim, chain))
        lines.push("")
      }
    }
  }

  lines.push("## Uncited claims")
  lines.push("")
  if (uncited.length === 0) {
    lines.push("_All claims trace to at least one cited source._")
  } else {
    lines.push(
      "These claims have no `[[sources/...]]`, `[[regulations/...]]`, or " +
        "`[[testing/...]]` link within their own H2 section. They are lint " +
        "failures under Part 18 of CLAUDE.md (provenance gaps).",
    )
    lines.push("")
    for (const c of uncited) lines.push(renderUncitedClaim(c))
  }
  lines.push("")

  lines.push("## Defensibility chain — distinct cited targets")
  lines.push("")
  if (distinctTargets.size === 0) {
    lines.push("_No targets cited on this page._")
  } else {
    lines.push("| Target page | Kind | Audit rows | First retrieval | Latest retrieval |")
    lines.push("|---|---|---|---|---|")
    const sortedTargets = [...distinctTargets.values()].sort((a, b) => {
      if (a.kind !== b.kind) return a.kind < b.kind ? -1 : 1
      return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
    })
    for (const t of sortedTargets) {
      const rows = auditRowsByPage.get(t.targetPath) || []
      const dates = rows
        .map((r) => r.retrieval_date)
        .filter(Boolean)
        .sort()
      const first = dates[0] || "—"
      const last = dates[dates.length - 1] || "—"
      lines.push(`| \`${t.targetPath}\` | ${t.kind} | ${rows.length} | ${first} | ${last} |`)
    }
  }
  lines.push("")

  return lines.join("\n") + "\n"
}

// ── I/O entry point ──────────────────────────────────────────────────────────

export function generateReport({ pageRelative, repoRoot, auditLogPath } = {}) {
  const wikiRoot = repoRoot
  const pagePath = path.join(wikiRoot, pageRelative)
  if (!fs.existsSync(pagePath)) {
    throw new Error(`Wiki page not found: ${pagePath}`)
  }
  const pageRaw = fs.readFileSync(pagePath, "utf8")
  const claims = extractClaims(pageRaw)
  const sections = listSections(pageRaw)
  const auditRowsAll = readAuditLog(auditLogPath)
  const pageAuditRows = filterAuditRowsForPage(auditRowsAll, pageRelative)
  const auditRowsByPage = indexAuditRowsByPage(auditRowsAll)
  const auditLogRelative = path.relative(repoRoot, auditLogPath) || auditLogPath
  return renderReport({
    pagePath,
    pageRelative,
    pageRaw,
    claims,
    sections,
    pageAuditRows,
    auditRowsByPage,
    auditLogRelative,
    wikiRoot,
    totalAuditRowsRead: auditRowsAll.length,
  })
}

function defaultOutputPath(repoRoot, pageRelative) {
  // wiki/products/foo.md → data/evidence/defensibility-reports/products/foo.md
  const rel = pageRelative.replace(/^wiki\//, "")
  return path.join(repoRoot, "data/evidence/defensibility-reports", rel)
}

function main() {
  let args
  try {
    args = parseArgs(process.argv.slice(2))
  } catch (err) {
    console.error(err.message)
    console.error(usage())
    process.exit(2)
  }

  if (args.positional.length !== 1) {
    console.error(usage())
    process.exit(2)
  }

  const repoRoot = path.resolve(args.flags.repoRoot || args.flags.wikiRoot || DEFAULT_REPO_ROOT)
  const pageRelative = args.positional[0].replace(/^\.\//, "")
  if (!pageRelative.startsWith("wiki/")) {
    console.error(`Page must be under wiki/: got ${pageRelative}`)
    process.exit(2)
  }
  const auditLogPath = path.resolve(
    args.flags.auditLog || path.join(repoRoot, "data/evidence/wiki_edit_audit.jsonl"),
  )

  const report = generateReport({ pageRelative, repoRoot, auditLogPath })

  if (args.flags.stdout) {
    process.stdout.write(report)
    return
  }

  const outPath = args.flags.out
    ? path.resolve(args.flags.out)
    : defaultOutputPath(repoRoot, pageRelative)
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, report)
  console.log(`Wrote ${path.relative(process.cwd(), outPath)}`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
