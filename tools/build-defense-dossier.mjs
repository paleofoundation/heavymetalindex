#!/usr/bin/env node
// Build the Certification Defense Dossier for every locked HMTc product row.
//
// A dossier is the brand-legal deliverable that turns the wiki's per-page
// primitives into one filing-ready package per certification row. It is a
// composition over four artifacts that already exist; this generator does not
// recompute any of them, it joins them:
//
//   1. The product page's own content pin (sha256 + git commit) from
//      wiki/static/evidence-packet-index.json.
//   2. The contributing-source fan-out from the routing audit
//      (data/evidence/product_source_routing_audit.csv) — the canonical map of
//      which sources support this row — each joined back to ITS content pin.
//   3. The applicable regulatory caps the page declares, resolved against
//      wiki/static/regulations.json (limit value, basis, agency, status).
//   4. The claim-to-source defensibility summary from
//      tools/build-defensibility-report.mjs (every numeric claim → its cited
//      sources → audit metadata). The full report is also written to disk.
//
// Output:
//   - data/evidence/defense-dossiers/<slug>.json — one self-contained,
//     deterministic (timestamp-free) dossier per locked product row. These are
//     the committed, citable artifacts.
//   - wiki/static/defense-dossier-index.json — the aggregate the
//     /api/defense-dossier endpoint and the brand surface read. Quartz copies
//     it to public/static/ at build.
//   - data/evidence/defensibility-reports/products/<slug>.md — the full
//     per-page defensibility report (generated here so the dossier links to a
//     real file, not a promise).
//
// Scope: locked HMTc rows only (hmtc_row set, not provisional_scaffold). A
// dossier is a certification-defense artifact; provisional scaffolds have no
// locked row to defend.
//
// Usage:
//   node tools/build-defense-dossier.mjs                 # all locked rows
//   node tools/build-defense-dossier.mjs infant-formula-powder-non-soy
//   npm run dossier

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import yaml from "js-yaml"
import { generateReport } from "./build-defensibility-report.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")
const CANONICAL_BASE = "https://heavymetalindex.com"
const SCHEMA_VERSION = "1.0.0"
const GIT_REMOTE = "https://github.com/paleofoundation/heavymetalindex"

const productsDir = path.join(repoRoot, "wiki/products")
const packetIndexPath = path.join(repoRoot, "wiki/static/evidence-packet-index.json")
const regulationsPath = path.join(repoRoot, "wiki/static/regulations.json")
const routingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const auditLogPath = path.join(repoRoot, "data/evidence/wiki_edit_audit.jsonl")
const dossierDir = path.join(repoRoot, "data/evidence/defense-dossiers")
const reportDir = path.join(repoRoot, "data/evidence/defensibility-reports/products")
const indexOutPath = path.join(repoRoot, "wiki/static/defense-dossier-index.json")

const LICENSE_ENVELOPE = {
  prose: "CC BY 4.0",
  structured_data: "EU database rights reserved — see https://heavymetalindex.com/licensing",
  attribution:
    "Heavy Metal Index (heavymetalindex.com), Institute of Contaminant Standards (ICS). Cite page_url or wiki_doi.",
  contact: "karen@paleofoundation.com",
}

const ATTESTATION = {
  for_use: "Litigation exhibit, Daubert support, regulatory submission, retailer compliance review.",
  what_this_is:
    "A point-in-time defense package for a single Heavy Metal Index product-category page: the page as published (git-pinned and hashed), every literature source the routing layer maps to it (each git-pinned and hashed), the regulatory caps the page declares, and a claim-by-claim provenance summary.",
  verifiable_by:
    "Any party can clone " +
    GIT_REMOTE +
    " at each named commit, hash the body of each named page, and confirm the content_sha256 values below. The contributing-source set is reproducible from data/evidence/product_source_routing_audit.csv at the same commit.",
  not_a_certification:
    "This dossier pins and traces the Heavy Metal Index's published literature evidence. It does not state, endorse, or warrant an HMTc certification threshold or a pass/fail determination. Certification thresholds are policy choices that live in the HMTc program (heavymetaltested.com), not in this evidence base. See /methodology and the wiki/HMTc separation described there.",
  license_terms: "https://heavymetalindex.com/licensing",
}

// ── CSV (matches tools/audit-routing-discipline.mjs parseCsvLine) ─────────────
export function parseCsvLine(line) {
  const out = []
  let cur = ""
  let inQuote = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuote) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"'
          i += 1
        } else {
          inQuote = false
        }
      } else {
        cur += ch
      }
    } else {
      if (ch === '"') inQuote = true
      else if (ch === ",") {
        out.push(cur)
        cur = ""
      } else cur += ch
    }
  }
  out.push(cur)
  return out
}

function readRoutingAudit() {
  if (!fs.existsSync(routingAuditPath)) return new Map()
  const raw = fs.readFileSync(routingAuditPath, "utf8")
  const lines = raw.split(/\r?\n/).filter((l) => l.length > 0)
  if (lines.length === 0) return new Map()
  const header = parseCsvLine(lines[0])
  const col = (name) => header.indexOf(name)
  const ci = {
    product: col("product_slug"),
    sourcePage: col("source_page"),
    sourceTitle: col("source_title"),
    routeKind: col("route_kind"),
    routeStatus: col("route_status"),
    valueCount: col("value_record_count"),
    metalSpecies: col("metal_species"),
    declaredMetals: col("declared_metal_species"),
    evidenceUse: col("evidence_use"),
    pageCites: col("product_page_cites_source"),
  }
  const byProduct = new Map()
  for (let i = 1; i < lines.length; i++) {
    const f = parseCsvLine(lines[i])
    const product = f[ci.product]
    if (!product) continue
    const sourcePage = f[ci.sourcePage] || ""
    const sourceSlug = sourcePage.replace(/^wiki\//, "").replace(/\.md$/, "")
    if (!sourceSlug.startsWith("sources/")) continue
    const metalsRaw = (f[ci.metalSpecies] || f[ci.declaredMetals] || "").trim()
    const row = {
      source_slug: sourceSlug,
      source_title: f[ci.sourceTitle] || "",
      route_kind: f[ci.routeKind] || "",
      route_status: f[ci.routeStatus] || "",
      value_record_count: Number(f[ci.valueCount] || 0) || 0,
      metal_species: metalsRaw ? metalsRaw.split(";").map((s) => s.trim()).filter(Boolean) : [],
      evidence_use: f[ci.evidenceUse] || "",
      page_cites_source: (f[ci.pageCites] || "").trim() === "true",
    }
    if (!byProduct.has(product)) byProduct.set(product, new Map())
    const sourceMap = byProduct.get(product)
    // First row wins per (product, source); merge value counts if duplicated.
    if (!sourceMap.has(sourceSlug)) sourceMap.set(sourceSlug, row)
    else sourceMap.get(sourceSlug).value_record_count += row.value_record_count
  }
  return byProduct
}

// ── Frontmatter ──────────────────────────────────────────────────────────────
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) return { data: {}, body: raw }
  let data = {}
  try {
    data = yaml.load(match[1]) || {}
  } catch {
    data = {}
  }
  return { data, body: raw.slice(match[0].length) }
}

// Parse the YAML frontmatter block that generateReport() emits at the top of
// each report, so the dossier reuses the report's own numbers verbatim.
export function parseReportSummary(reportMarkdown) {
  const match = reportMarkdown.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return {}
  try {
    return yaml.load(match[1]) || {}
  } catch {
    return {}
  }
}

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"))
}

function contentPinFromPacket(record) {
  if (!record) return null
  return {
    content_sha256: record.content_sha256,
    content_bytes: record.content_bytes,
    last_commit_sha: record.last_commit_sha,
    last_commit_date: record.last_commit_date,
    git_remote: GIT_REMOTE,
    verify_command: record.last_commit_sha
      ? `git show ${record.last_commit_sha}:wiki/${record.slug}.md | sha256sum`
      : null,
  }
}

export function isLocked(data) {
  if (data.provisional_scaffold === true) return false
  if (data.pending_category_lock === true) return false
  return data.hmtc_row !== undefined && data.hmtc_row !== null && data.hmtc_row !== "pending_taxonomy_review"
}

// ── Build one dossier ─────────────────────────────────────────────────────────
function buildDossier(slug, data, body, ctx) {
  const { packetBySlug, regulationsBySlug, routingByProduct } = ctx
  const productSlug = `products/${slug}`
  const packet = packetBySlug.get(productSlug)

  // 1. Contributing sources from the routing audit, joined to their pins.
  const sourceMap = routingByProduct.get(slug) || new Map()
  const contributing = [...sourceMap.values()]
    .map((row) => ({
      slug: row.source_slug,
      title: row.source_title,
      route_kind: row.route_kind,
      route_status: row.route_status,
      evidence_use: row.evidence_use,
      value_record_count: row.value_record_count,
      metal_species: row.metal_species,
      canonical_url: `${CANONICAL_BASE}/${row.source_slug}`,
      content_pin: contentPinFromPacket(packetBySlug.get(row.source_slug)),
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug))
  const withValues = contributing.filter((s) => s.value_record_count > 0).length

  // 2. Regulatory caps the page declares, resolved against the dataset.
  const declared = Array.isArray(data.applicable_regulations) ? data.applicable_regulations : []
  const caps = declared
    .map((regId) => {
      const key = regId.startsWith("regulations/") ? regId : `regulations/${regId}`
      const reg = regulationsBySlug.get(key)
      if (!reg) return { slug: key, resolved: false }
      return {
        slug: reg.slug,
        title: reg.title,
        agency: reg.agency,
        program: reg.program || null,
        metals: reg.metals || (reg.metal ? [reg.metal] : []),
        limit_value: reg.limit_value,
        limit_unit: reg.limit_unit,
        status: reg.status,
        effective_date: reg.effective_date,
        matrices: reg.matrices || (reg.matrix ? [reg.matrix] : []),
        page_url: reg.page_url || `${CANONICAL_BASE}/${reg.slug}`,
        resolved: true,
      }
    })
    .sort((a, b) => a.slug.localeCompare(b.slug))

  // 3. Defensibility report — generate, write, and reuse its own summary.
  const pageRelative = `wiki/products/${slug}.md`
  const report = generateReport({ pageRelative, repoRoot, auditLogPath })
  const reportRel = `data/evidence/defensibility-reports/products/${slug}.md`
  fs.mkdirSync(reportDir, { recursive: true })
  fs.writeFileSync(path.join(repoRoot, reportRel), report)
  const sum = parseReportSummary(report)

  return {
    schema_version: SCHEMA_VERSION,
    manifest_kind: "heavy_metal_index_certification_defense_dossier",
    product: {
      slug: productSlug,
      title: data.title || slug,
      hmtc_category: data.hmtc_category ?? null,
      hmtc_row: data.hmtc_row ?? null,
      category_label: data.category_label || null,
      age_range: data.age_range || null,
      label: data.label || data.title || slug,
      primary_metals_of_concern: data.primary_metals_of_concern || [],
      hmtc_tested_metals: data.hmtc_tested_metals || [],
      vulnerable_population: data.vulnerable_population || null,
      evidence_fitness: data.evidence_fitness || null,
      public_evidence_label: data.public_evidence_label || null,
      canonical_url: `${CANONICAL_BASE}/${productSlug}`,
      wiki_doi: data.wiki_doi || null,
      content_pin: contentPinFromPacket(packet),
    },
    evidence_base: {
      contributing_source_count: contributing.length,
      sources_with_structured_values: withValues,
      contributing_sources: contributing,
    },
    regulatory_caps: {
      declared_count: caps.length,
      resolved_count: caps.filter((c) => c.resolved).length,
      caps,
      note:
        caps.length === 0
          ? "This page declares no category-specific regulatory cap. Absence of a numeric federal ceiling for this exact matrix is itself defense-relevant context, not an omission."
          : null,
    },
    defensibility: {
      report_path: reportRel,
      total_claims: sum.total_claims ?? 0,
      cited_claims: sum.cited_claims ?? 0,
      uncited_claims: sum.uncited_claims ?? 0,
      distinct_cited_sources: sum.distinct_cited_sources ?? 0,
      audit_rows_on_cited_targets: sum.audit_rows_for_cited_targets ?? 0,
      provenance_complete: (sum.uncited_claims ?? 0) === 0,
    },
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
function main() {
  const onlySlug = process.argv.slice(2).find((a) => !a.startsWith("--"))

  const packetIndex = loadJson(packetIndexPath)
  const packetBySlug = new Map((packetIndex.records || []).map((r) => [r.slug, r]))

  const regsData = loadJson(regulationsPath)
  const regsArr = regsData.records || regsData
  const regulationsBySlug = new Map(regsArr.map((r) => [r.slug, r]))

  const routingByProduct = readRoutingAudit()
  const ctx = { packetBySlug, regulationsBySlug, routingByProduct }

  const files = fs
    .readdirSync(productsDir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .sort()

  fs.mkdirSync(dossierDir, { recursive: true })
  const records = []
  let skippedProvisional = 0
  let skippedUnlocked = 0
  for (const file of files) {
    const slug = file.replace(/\.md$/, "")
    if (onlySlug && slug !== onlySlug) continue
    const raw = fs.readFileSync(path.join(productsDir, file), "utf8")
    const { data, body } = parseFrontmatter(raw)
    if (!isLocked(data)) {
      if (data.provisional_scaffold === true || data.pending_category_lock === true) skippedProvisional++
      else skippedUnlocked++
      continue
    }
    const dossier = buildDossier(slug, data, body, ctx)
    fs.writeFileSync(
      path.join(dossierDir, `${slug}.json`),
      JSON.stringify(dossier, null, 2) + "\n",
      "utf8",
    )
    records.push(dossier)
  }
  records.sort((a, b) => a.product.slug.localeCompare(b.product.slug))

  const payload = {
    generated_at: new Date().toISOString(),
    schema_version: SCHEMA_VERSION,
    canonical_base: CANONICAL_BASE,
    git_remote: GIT_REMOTE,
    record_count: records.length,
    license: LICENSE_ENVELOPE,
    attestation: ATTESTATION,
    records,
  }
  fs.mkdirSync(path.dirname(indexOutPath), { recursive: true })
  fs.writeFileSync(indexOutPath, JSON.stringify(payload, null, 2) + "\n", "utf8")

  const totalSources = records.reduce((n, r) => n + r.evidence_base.contributing_source_count, 0)
  console.error(
    `[defense-dossier] wrote ${records.length} dossiers ` +
      `(${totalSources} contributing-source links, ` +
      `${records.filter((r) => r.defensibility.provenance_complete).length} provenance-complete), ` +
      `skipped ${skippedProvisional} provisional + ${skippedUnlocked} unlocked. ` +
      `Index → ${path.relative(repoRoot, indexOutPath)}`,
  )
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
