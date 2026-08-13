#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const failures = []

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8")
}

function requireText(rel, pattern, label) {
  const text = read(rel)
  if (!pattern.test(text)) failures.push(`${rel}: missing ${label}`)
}

const canonical = [
  "CLAUDE.md",
  "AGENTS.md",
  "docs/governance/hmtc-governing-principles.md",
  "docs/standards-methodology.md",
  "wiki/methodology/persistent-wiki-ingest-rule.md",
]

for (const rel of canonical) {
  requireText(rel, /government-limit-only/i, "government-limit-only initial-method statement")
  requireText(rel, /certified-lot/i, "certified-lot ratchet boundary")
  requireText(rel, /80% of the current limit/i, "80%-of-current-limit ratchet floor")
}

requireText(
  "data/workbench/standards-book/source-documents/governance-policy.md",
  /combined Status A (?:\+|and) Status B trigger pool/i,
  "combined Status A + Status B trigger pool",
)
requireText(
  "data/workbench/standards-book/source-documents/governance-policy.md",
  /maximum of\*{0,2}:[\s\S]{0,180}80th percentile of certified Status A lot results[\s\S]{0,180}80% of the current limit/i,
  "Status A P80 new-limit formula",
)
requireText(
  "data/workbench/standards-book/source-documents/governance-policy.md",
  /two consecutive annual reviews/i,
  "two-consecutive-review trigger",
)

const retiredGenerators = [
  "tools/standards/build-standards-briefing.mjs",
  "tools/standards/build-standards-catalog.mjs",
  "tools/standards/build-category-standards-tables.mjs",
  "tools/standards/build-government-limit-standard.mjs",
  "tools/standards/build-tightest-global-standard.mjs",
  "tools/standards/build-cert-standard-pages.mjs",
  "tools/standards/render-part3-chapter.mjs",
  "tools/standards/build-program-manual.mjs",
  "tools/standards/build-category-manual.mjs",
  "tools/standards-workbench/server.mjs",
  "tools/evidence/build-standards-qc-gate.mjs",
  "tools/evidence/build-category-standards-readiness.mjs",
  "tools/evidence/build-standards-row-classifier.mjs",
  "tools/evidence/build-standards-gap-report.mjs",
  "tools/evidence/build-standards-action-queue.mjs",
  "tools/evidence/build-standards-recovery-worklist.mjs",
  "tools/evidence/verify-standards-data.mjs",
  "tools/evidence/build-cap-mapping-proposals.mjs",
  "tools/evidence/build-n-deficit-queue.mjs",
  "tools/evidence/apply-product-hmtc-evidence-summaries.mjs",
]

for (const rel of retiredGenerators) {
  const head = read(rel).split("\n").slice(0, 12).join("\n")
  if (!/RETIRED 2026-08-12/.test(head) || !/process\.exit\(2\)/.test(head)) {
    failures.push(`${rel}: retired generator must fail closed at startup`)
  }
}

const aggregateHeader = read("data/evidence/hmtc_aggregate_distributions.csv").split("\n", 1)[0]
for (const forbidden of [
  "pooled_p45",
  "pooled_p97",
  "target_p",
  "target_value",
  "candidate_value_ppb",
  "rationale_tag_auto",
  "lowest_regulatory_cap_ppb",
]) {
  if (aggregateHeader.split(",").includes(forbidden)) {
    failures.push(`data/evidence/hmtc_aggregate_distributions.csv: retired certification selector column ${forbidden}`)
  }
}

const aggregateBuilder = read("tools/evidence/build-hmtc-aggregate-distributions.mjs")
if (!/DESCRIPTIVE_UPPER_TAIL_P\s*=\s*0\.95/.test(aggregateBuilder)) {
  failures.push("tools/evidence/build-hmtc-aggregate-distributions.mjs: missing descriptive P95 boundary")
}
if (!/BASIS_RECONSTITUTION_FACTOR\s*=\s*8/.test(aggregateBuilder) || !/infant-formula/.test(aggregateBuilder)) {
  failures.push("tools/evidence/build-hmtc-aggregate-distributions.mjs: missing 8:1 infant-formula-only conversion guard")
}

if (fs.existsSync(path.join(root, "data/workbench/standards/subcategory-roles.json"))) {
  failures.push("data/workbench/standards/subcategory-roles.json: retired percentile-role configuration must not exist")
}

const occurrenceStrata = read("data/reference/occurrence-market-strata.json")
if (/"(?:role|target_percentile)"\s*:|\bP(?:45|97)\b/i.test(occurrenceStrata)) {
  failures.push("data/reference/occurrence-market-strata.json: occurrence stratification must not contain certification roles or percentile selectors")
}

for (const configRel of [
  "tools/standards/cat1-config.json",
  "tools/standards/cat3-config.json",
  "tools/standards/seafood-config.json",
  "tools/standards/cat7-config.json",
  "tools/standards/cat9-config.json",
  "tools/standards/cat24-config.json",
  "tools/standards/cat25-config.json",
]) {
  const config = JSON.parse(read(configRel))
  const requiredPanel = ["Pb", "Cd", "tAs", "tHg", "Ni", "Sn", "Al", "Cr", "iAs", "Cr-VI", "MeHg"]
  for (const analyte of requiredPanel) {
    if (!config.panel?.includes(analyte)) failures.push(`${configRel}: canonical analyte panel omits ${analyte}`)
  }
  for (const [analyte, resolution] of Object.entries(config.default_read_across ?? {})) {
    if (resolution?.value_ppb != null || ["occurrence", "precautionary"].includes(resolution?.basis)) {
      failures.push(`${configRel}: default ${analyte} contains a retired numeric occurrence/precautionary resolution`)
    }
  }
  for (const [slug, subcategory] of Object.entries(config.subcategories ?? {})) {
    for (const [analyte, resolution] of Object.entries(subcategory.read_across ?? {})) {
      if (resolution?.value_ppb != null || ["occurrence", "precautionary"].includes(resolution?.basis)) {
        failures.push(`${configRel}: ${slug}/${analyte} contains a retired numeric occurrence/precautionary resolution`)
      }
    }
  }
}

for (const dirRel of [
  "data/workbench/standards/cat1-compiled",
  "data/workbench/standards/cat3-compiled",
  "data/workbench/standards/cat7-compiled",
  "data/workbench/standards/cat9-compiled",
  "data/workbench/standards/cat24-compiled",
  "data/workbench/standards/cat25-compiled",
]) {
  for (const name of fs.readdirSync(path.join(root, dirRel)).filter((entry) => entry.endsWith(".json"))) {
    const record = JSON.parse(read(path.join(dirRel, name)))
    for (const [variant, cells] of Object.entries(record.variants ?? {})) {
      for (const [analyte, cell] of Object.entries(cells ?? {})) {
        if (["occurrence", "precautionary"].includes(cell?.basis_kind)) {
          failures.push(`${dirRel}/${name}: ${variant}/${analyte} uses retired ${cell.basis_kind} basis`)
        }
      }
    }
  }
}

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else if (entry.name.endsWith(".md")) out.push(full)
  }
  return out
}

function walkText(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules" && entry.name !== "public") out.push(...walkText(full))
    else if (/\.(?:md|mjs|js|json|tsx?|csv)$/.test(entry.name)) out.push(full)
  }
  return out
}

for (const rel of ["CLAUDE.md", "RECONCILE.md"]) {
  if (/heavymetaltested\.com/i.test(read(rel))) failures.push(`${rel}: retired public domain heavymetaltested.com`)
}
for (const dirRel of ["docs", "tools", "wiki", "quartz", "data/reference", "data/taxonomy"]) {
  for (const full of walkText(path.join(root, dirRel))) {
    if (path.relative(root, full) === "tools/audit-current-hmtc-method.mjs") continue
    if (/heavymetaltested\.com/i.test(fs.readFileSync(full, "utf8"))) {
      failures.push(`${path.relative(root, full)}: retired public domain heavymetaltested.com`)
    }
  }
}

for (const full of walk(path.join(root, "wiki/products"))) {
  const text = fs.readFileSync(full, "utf8")
  if (/\bclean\/dirty\b|\bclean counterpart\b|\bdirty (?:subcategory|row|platform|sibling)\b/i.test(text)) {
    failures.push(`${path.relative(root, full)}: retired clean/dirty certification role on a public product page`)
  }
  if (/^(?:title|hmtc_subcategory_name):.*\b(?:clean|dirty|contaminated)\b/im.test(text)) {
    failures.push(`${path.relative(root, full)}: retired clean/dirty label in public product metadata`)
  }
  if (/The row-standard aggregate is computed from the pooled occurrence distribution/i.test(text)) {
    failures.push(`${path.relative(root, full)}: occurrence pool still presented as a certification selector`)
  }
  for (const [i, line] of text.split("\n").entries()) {
    if (/historical|retired|superseded|former|prior|removed|does not|do not|must not|cannot/i.test(line)) continue
    if (/literature baseline|reads this page|operate on the same evidence base/i.test(line)) {
      failures.push(`${path.relative(root, full)}:${i + 1}: retired literature-as-certification-input framing`)
    }
    if (/certification thresholds?.{0,100}(?:developed under|set separately)/i.test(line)) {
      failures.push(`${path.relative(root, full)}:${i + 1}: certification method is vague or retired; state the government-limit-only compiler boundary`)
    }
  }
}

const allowedHistory = /historical|retired|superseded|former|prior|removed|does not|do not|must not|cannot|not .*input|not .*basis|context|firewall/i
for (const full of walk(path.join(root, "wiki"))) {
  const rel = path.relative(root, full)
  if (rel === "wiki/log.md") continue
  const text = fs.readFileSync(full, "utf8")
  const fileIsHistory = /Historical methodology snapshot/.test(text)
  for (const [i, line] of text.split("\n").entries()) {
    const retiredToken = /P97\/P45|P45\/P97|literature-baseline/i.test(line)
    const occurrenceSelects = /(?:occurrence|literature)(?:\s+(?:evidence|data|distribution|percentiles?))?.{0,45}(?:sets?|selects?|derives?|determines?|tightens?)\s+(?:an?|the)?\s*(?:HMTc|certification)?\s*(?:limits?|thresholds?|standards?|values?)/i.test(line)
      || /(?:HMTc|certification)\s+(?:limits?|thresholds?|standards?|values?).{0,25}(?:are\s+)?(?:set|selected|derived|determined|tightened)\s+(?:by|from|using)\s+(?:the\s+)?(?:occurrence|literature)/i.test(line)
    if ((retiredToken || occurrenceSelects) && !fileIsHistory && !allowedHistory.test(line)) {
      failures.push(`${rel}:${i + 1}: current-looking retired methodology: ${line.trim().slice(0, 180)}`)
    }
    if (/^step0_basis\s*:/.test(line)) {
      failures.push(`${rel}:${i + 1}: private certification-basis metadata leaked into public frontmatter`)
    }
  }
}

if (failures.length) {
  console.error(`Current HMTc method audit failed (${failures.length}):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log("Current HMTc method audit: government-only initial method, certified-lot ratchet, retired-generator guards, and public-wiki drift all verified.")
