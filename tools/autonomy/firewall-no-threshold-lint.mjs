#!/usr/bin/env node
// Firewall lint — "no derivation token on an index URL" (CLAUDE.md Part 2 / 19,
// web-data-architecture.md §2, plan Part 7 step 2 / 6.J B1+B2).
//
// WHY THIS IS NET-NEW (and distinct from firewall-lint.mjs)
// --------------------------------------------------------
// `firewall-lint.mjs` catches workbench *codenames* (Path A/B, clean-platform,
// MAX_SOURCE_SHARE). It explicitly does NOT flag numbers, because a paper that
// reports "the 97th percentile of measured cadmium was 12 µg/kg" is legitimate
// literature — and reporting the complete literature honestly is the index's
// entire job and the defensibility moat. This lint is the complementary
// structural + derivation-field check the 6.J B2 audit said was still missing.
//
// WHY THERE IS NO BLANKET "any ppb / any percentile" BAN
// ------------------------------------------------------
// The plan headline reads "fail the build if any ppb/percentile/clean-dirty/
// threshold token renders on an index URL." Taken literally that is wrong and
// was NOT implemented, deliberately. The index legitimately reports regulatory
// caps as context (FDA 10 ppb, EU 20 ppb, WA TFCA 1000 ppb) and discusses the
// *concept* of an HMTc threshold without disclosing a derived value, e.g.:
//   products/meat-and-poultry-purees.md:138  "FDA is 10 ppb and EU is 20 ppb …
//     rely on occurrence evidence for any tighter HMTc threshold"
//   regulations/washington-tfca-…-1000ppb.md  "any HMTc threshold tighter than
//     1000 ppb adds value" (1000 = the WA regulatory cap, not an HMTc value)
// Every one of those is literature/regulatory class and must render on the
// index. A blanket numeric ban would flag thousands of legitimate pages and
// corrupt the moat. So the build-blocking signals are the ones with ~zero false
// positives — a *derived* HMTc value never legitimately appears on the index as
// a structural artifact or a workbench frontmatter field:
//
//   ERROR  (structural — build-blocking when not --warn-only)
//     - any page under wiki/dossiers/         (brand-legal "defense dossier" — Part 12)
//     - wiki/for-brands*.md                   (certification-instrument entry point)
//     - static/defense-dossier-index.json     (the de-listed dossier index)
//     - any public page whose frontmatter `type` is a brand/dossier surface
//   NOTE: an `audience`-based detector was tried and removed — product-category
//   pages legitimately carry `audience: [… brand-legal, brand-qa, retailer-
//   compliance]` (365 of them), so audience is not a leak signal. The structural
//   path/type checks above already cover both known B1 vectors with no false
//   positives.
//
//   WARN   (workbench derivation field leaked into a public page's frontmatter —
//           a known drain backlog; promote to ERROR once it reaches zero)
//     - step0_basis / rationale_tag / published_limit_ppb / step0_lock /
//       hmtc_limit / hmtc_standard / percentile_basis / pool_p97 / pool_p45
//       as a frontmatter key on a public page (the honey `step0_basis` leak class)
//
//   INFO   (prose heuristics — review-only, NEVER affects exit code; routed to CSV
//           for human triage; disclaimer- and regulatory-context-excluded)
//     - "clean/dirty subcategory" framed as a standard (not the firewall disclaimer)
//     - a bare P97 / P45 (the HMTc methodology percentiles) outside methodology pages
//     - "HMTc {limit,threshold,standard} … <number> ppb" not deferring to a cap
//
// EXIT CODE / FLAGS
//   default      : exit 1 if any ERROR (structural). WARN/INFO never fail.
//   --warn-only  : report everything, always exit 0. (prebuild uses this until
//                  the dossiers are relocated off the index in plan step 4.)
//   --block-frontmatter : also fail on WARN (use after the step0_basis backlog drains).
//   --html <dir> : ALSO scan rendered .html under <dir> for the same tokens
//                  (belt-and-suspenders / seed for the post-deploy crawler; the
//                  true cross-domain check lives in parent infra, see the spec at
//                  docs/architecture/firewall-postdeploy-crawler.md).
//
// Output: data/evidence/autonomy/firewall-no-threshold-lint-<date>.md
//         data/evidence/autonomy/firewall-no-threshold-violations.csv

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)

const args = process.argv.slice(2)
const WARN_ONLY = args.includes("--warn-only")
const BLOCK_FRONTMATTER = args.includes("--block-frontmatter")
const htmlIdx = args.indexOf("--html")
const HTML_DIR = htmlIdx >= 0 ? args[htmlIdx + 1] : null

// Public content surfaces that render on the index domain. Source pages quote
// arbitrary literature text (percentiles, ppb) and are out of scope here, same
// as firewall-lint.mjs. Operational surfaces (log, batch-reports, briefings,
// lint, queries) are internal and skipped.
const PUBLIC_DIRS = [
  "wiki/products",
  "wiki/ingredients",
  "wiki/metals",
  "wiki/regulations",
  "wiki/methodology",
  "wiki/health",
  "wiki/testing",
  "wiki/mitigation",
  "wiki/supply-chain",
  "wiki/microbiome",
  "wiki/certification",
  "wiki/synthesis",
  "wiki/baselines",
]
const HOMEPAGE = "wiki/index.md"
const SKIP_PATTERNS = [
  /\/index\.md$/,
  /\/batch-reports\//,
  /\/lint\//,
  /\/queries\//,
  /\/log\.md$/,
]

// ---- ERROR: structural leak surfaces (Part 12 / B1) ------------------------
const BRAND_DOSSIER_TYPES = new Set([
  "brand-dossier",
  "defense-dossier",
  "dossier",
  "brand",
])

// ---- WARN: workbench derivation frontmatter fields -------------------------
const WORKBENCH_FRONTMATTER_KEYS = [
  "step0_basis",
  "rationale_tag",
  "published_limit_ppb",
  "step0_lock",
  "hmtc_limit",
  "hmtc_standard",
  "percentile_basis",
  "pool_p97",
  "pool_p45",
  "clean_dirty",
  "subcategory_class",
]

// ---- INFO: prose heuristics (review-only) ----------------------------------
// A line is excluded if it is the firewall disclaimer (it explains that this
// arithmetic does NOT live here) or plainly reports a regulatory cap.
const DISCLAIMER_MARKERS = [
  /local staff Standards Workbench/i,
  /never on this public page/i,
  /CLAUDE\.md Part 19/i,
  /data\/workbench\/standards/i,
  /lives in the (?:certification|workbench)/i,
  /policy choices that live in the certification program/i,
  /does not state an HMTc/i,
]
const PROSE_PATTERNS = [
  {
    pattern: /\b(?:clean|dirty)\s+subcategor\w+\s+standard\b/gi,
    label: "SUBCATEGORY_STANDARD_FRAMING",
    description: "Clean/dirty subcategory framed as a published standard — derivation class.",
  },
  {
    pattern: /\bP(?:97|45)(?![\d.])/g,
    label: "HMTC_METHODOLOGY_PERCENTILE",
    description: "Bare P97/P45 are the HMTc clean/dirty methodology percentiles; verify this is not a derivation disclosure (P97.5 etc. are literature percentiles and excluded).",
  },
  {
    pattern: /\bHMTc\s+(?:limit|threshold|standard)\b[^.\n]{0,60}?\b\d[\d.,]*\s*(?:ppb|µg\/kg|ug\/kg|ppm)\b/gi,
    label: "HMTC_NUMERIC_NEAR_THRESHOLD",
    description: "A number sits next to 'HMTc limit/threshold/standard' — confirm it is a regulatory cap (allowed), not a derived HMTc value (leak).",
  },
]
// Methodology pages explain HMI's own evidence methodology; the P97/P45 INFO
// signal there is expected discussion, not a value disclosure.
const PROSE_DIR_SKIP = [/\/methodology\//]

const errors = []
const warnings = []
const infos = []
const filesScanned = []

// 1) Structural: leak directories / files that should not exist on the index.
function checkStructural() {
  const dossierDir = path.join(repoRoot, "wiki/dossiers")
  if (fs.existsSync(dossierDir)) {
    const n = countMarkdown(dossierDir)
    errors.push({
      file: "wiki/dossiers/",
      label: "DOSSIER_DIR_ON_INDEX",
      description: `${n} brand-legal "defense dossier" pages on the index domain (Part 12). Relocate to the cert/registry plane (plan step 4).`,
      matches: [{ line: 0, snippet: `wiki/dossiers/ contains ${n} markdown pages` }],
    })
  }
  for (const f of ["wiki/for-brands.md", "wiki/for-brands.mdx"]) {
    if (fs.existsSync(path.join(repoRoot, f))) {
      errors.push({
        file: f,
        label: "FOR_BRANDS_ON_INDEX",
        description: "Certification-instrument entry point on the index domain (Part 12). Relocate to the cert plane.",
        matches: [{ line: 1, snippet: "for-brands certification surface present on index" }],
      })
    }
  }
  const staticIdx = path.join(repoRoot, "static/defense-dossier-index.json")
  if (fs.existsSync(staticIdx)) {
    errors.push({
      file: "static/defense-dossier-index.json",
      label: "DEFENSE_DOSSIER_INDEX_PRESENT",
      description: "De-listed dossier index still shipped from the index build. Remove or relocate to the cert plane.",
      matches: [{ line: 0, snippet: "static/defense-dossier-index.json present" }],
    })
  }
}

function countMarkdown(dir) {
  let n = 0
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countMarkdown(path.join(dir, e.name))
    else if (e.name.endsWith(".md")) n += 1
  }
  return n
}

// 2) Per-file: frontmatter type/audience (ERROR) + workbench fields (WARN) +
//    prose heuristics (INFO).
function scanDir(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      scanDir(full)
      continue
    }
    if (!entry.name.endsWith(".md")) continue
    const rel = path.relative(repoRoot, full)
    if (SKIP_PATTERNS.some((p) => p.test(rel))) continue
    scanMarkdown(full, rel)
  }
}

function parseFrontmatter(text) {
  if (!text.startsWith("---")) return { fm: {}, fmText: "", bodyOffset: 0 }
  const end = text.indexOf("\n---", 3)
  if (end < 0) return { fm: {}, fmText: "", bodyOffset: 0 }
  const fmText = text.slice(3, end)
  const fm = {}
  for (const line of fmText.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
    if (m) fm[m[1]] = m[2].trim()
  }
  return { fm, fmText, bodyOffset: end + 4 }
}

function scanMarkdown(filepath, rel) {
  const text = fs.readFileSync(filepath, "utf8")
  filesScanned.push(rel)
  const { fm } = parseFrontmatter(text)

  // ERROR — frontmatter brand/dossier surface
  const type = stripQuotes(fm.type ?? "")
  if (BRAND_DOSSIER_TYPES.has(type)) {
    errors.push({
      file: rel,
      label: "BRAND_DOSSIER_TYPE",
      description: `Frontmatter type: ${type} — a certification surface on the index domain (Part 12).`,
      matches: [{ line: lineOfKey(text, "type"), snippet: `type: ${type}` }],
    })
  }
  // WARN — workbench derivation frontmatter fields
  for (const key of WORKBENCH_FRONTMATTER_KEYS) {
    const re = new RegExp(`^${key}:\\s*(.*)$`, "m")
    const m = text.match(re)
    if (m) {
      warnings.push({
        file: rel,
        label: "WORKBENCH_FRONTMATTER_FIELD",
        description: `Workbench derivation field "${key}" in a public page's frontmatter. Relocate to data/workbench/.`,
        matches: [{ line: lineNumberAt(text, m.index), snippet: `${key}: ${truncate(m[1], 80)}` }],
      })
    }
  }

  // INFO — prose heuristics (disclaimer/regulatory-context excluded)
  if (!PROSE_DIR_SKIP.some((p) => p.test(rel))) {
    for (const { pattern, label, description } of PROSE_PATTERNS) {
      pattern.lastIndex = 0
      for (const m of text.matchAll(pattern)) {
        const lineText = lineTextAt(text, m.index)
        if (DISCLAIMER_MARKERS.some((d) => d.test(lineText))) continue
        infos.push({
          file: rel,
          label,
          description,
          matches: [{ line: lineNumberAt(text, m.index), snippet: snippetAround(text, m.index) }],
        })
        break // one INFO per (file, pattern) is enough for triage
      }
    }
  }
}

// 3) Optional: rendered-HTML scan (seed for the post-deploy crawler).
function scanHtml(dir) {
  if (!fs.existsSync(dir)) {
    console.warn(`--html: ${dir} does not exist; skipping rendered scan`)
    return
  }
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name)
      if (e.isDirectory()) walk(full)
      else if (e.name.endsWith(".html")) {
        const html = fs.readFileSync(full, "utf8")
        const rel = path.relative(repoRoot, full)
        for (const key of WORKBENCH_FRONTMATTER_KEYS) {
          if (html.includes(`${key}`) && new RegExp(`\\b${key}\\b`).test(html)) {
            warnings.push({
              file: rel,
              label: "WORKBENCH_TOKEN_IN_HTML",
              description: `Workbench field "${key}" appears in rendered HTML.`,
              matches: [{ line: 0, snippet: `${key} in rendered output` }],
            })
          }
        }
      }
    }
  }
  walk(dir)
}

function stripQuotes(s) {
  return s.replace(/^["']|["']$/g, "").trim()
}
function truncate(s, n) {
  return s.length > n ? s.slice(0, n) + "…" : s
}
function lineNumberAt(text, idx) {
  let line = 1
  for (let i = 0; i < idx; i++) if (text[i] === "\n") line += 1
  return line
}
function lineOfKey(text, key) {
  const m = text.match(new RegExp(`^${key}:`, "m"))
  return m ? lineNumberAt(text, m.index) : 0
}
function lineTextAt(text, idx) {
  const start = text.lastIndexOf("\n", idx) + 1
  let end = text.indexOf("\n", idx)
  if (end < 0) end = text.length
  return text.slice(start, end)
}
function snippetAround(text, idx) {
  const start = Math.max(0, idx - 30)
  const end = Math.min(text.length, idx + 80)
  return text.slice(start, end).replace(/\n+/g, " ").trim()
}

// ---- run -------------------------------------------------------------------
checkStructural()
for (const dir of PUBLIC_DIRS) scanDir(path.join(repoRoot, dir))
// The homepage is not under any PUBLIC_DIRS entry, and SKIP_PATTERNS drops
// index.md everywhere. It now carries generated evidence content (change feed,
// FAQ, corpus counts) and is the most-linked public URL on the property, so it
// is scanned explicitly rather than left in the blind spot.
scanMarkdown(path.join(repoRoot, HOMEPAGE), HOMEPAGE)
if (HTML_DIR) scanHtml(path.resolve(repoRoot, HTML_DIR))

// ---- report ----------------------------------------------------------------
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
fs.mkdirSync(autonomyDir, { recursive: true })
const reportPath = path.join(autonomyDir, `firewall-no-threshold-lint-${today}.md`)
const csvPath = path.join(autonomyDir, "firewall-no-threshold-violations.csv")

const lines = [
  `# Firewall lint — no derivation token on an index URL — ${today}`,
  "",
  `Generated: ${new Date().toISOString()}`,
  `Mode: ${WARN_ONLY ? "warn-only (exit 0)" : BLOCK_FRONTMATTER ? "blocking (ERROR + WARN)" : "blocking (ERROR)"}`,
  "",
  "## Summary",
  "",
  `- Files scanned: ${filesScanned.length}`,
  `- ERROR (structural, build-blocking): ${errors.length}`,
  `- WARN  (workbench frontmatter leak, drain backlog): ${warnings.length}`,
  `- INFO  (prose heuristics, review-only): ${infos.length}`,
  "",
]
appendSection(lines, "ERROR — structural leak surfaces", errors)
appendSection(lines, "WARN — workbench derivation frontmatter fields", warnings)
appendSection(lines, "INFO — prose heuristics (review-only)", infos)
fs.writeFileSync(reportPath, lines.join("\n"), "utf8")

const csvLines = ["severity,file,label,line,snippet"]
for (const [sev, list] of [["ERROR", errors], ["WARN", warnings], ["INFO", infos]]) {
  for (const v of list) {
    for (const m of v.matches) {
      csvLines.push([sev, v.file, v.label, m.line, `"${String(m.snippet).replace(/"/g, '""')}"`].join(","))
    }
  }
}
fs.writeFileSync(csvPath, csvLines.join("\n") + "\n", "utf8")

console.log(`Firewall no-threshold lint: scanned ${filesScanned.length} files`)
console.log(`  ERROR (structural):          ${errors.length}`)
console.log(`  WARN  (frontmatter backlog): ${warnings.length}`)
console.log(`  INFO  (prose review):        ${infos.length}`)
console.log(`  Report: ${path.relative(repoRoot, reportPath)}`)
console.log(`  CSV:    ${path.relative(repoRoot, csvPath)}`)

const blockingCount = errors.length + (BLOCK_FRONTMATTER ? warnings.length : 0)
if (WARN_ONLY) {
  if (blockingCount > 0) {
    console.log(`  (--warn-only: ${blockingCount} blocking-eligible violation(s) reported, not failing the build)`)
  }
  process.exit(0)
}
if (blockingCount > 0) {
  console.error(`FIREWALL LINT FAILED: ${blockingCount} build-blocking violation(s). See ${path.relative(repoRoot, reportPath)}`)
  process.exit(1)
}
process.exit(0)

function appendSection(out, title, list) {
  if (!list.length) return
  out.push(`## ${title}`, "")
  const byFile = {}
  for (const v of list) (byFile[v.file] ??= []).push(v)
  for (const [file, vs] of Object.entries(byFile)) {
    out.push(`### ${file}`)
    for (const v of vs) {
      out.push(`- **${v.label}** — ${v.description}`)
      for (const m of v.matches) out.push(`  - line ${m.line}: \`${m.snippet}\``)
    }
    out.push("")
  }
}
