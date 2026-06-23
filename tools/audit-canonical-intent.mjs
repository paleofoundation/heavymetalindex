#!/usr/bin/env node
// audit-canonical-intent.mjs — anti-cannibalization lint.
//
// THE RULE (Karen, locked)
// ------------------------
// Authority for any one search/answer intent lives on exactly ONE page, so the
// index's pages do not compete with each other (in Google, in answer engines,
// or in a reader's trust). The ownership split:
//
//   metal page       owns the SUBSTANCE intent          ("lead", "what is lead")
//   ingredient page  owns COMMODITY-BY-METAL intent      ("lead in rice")
//   product page     owns the CONSUMER-CATEGORY intent   ("lead in baby food")
//   regulation page  owns the NUMERIC-LIMIT intent       ("FDA lead limit in juice")
//
// Each page declares a `canonical_intent:` frontmatter string. Two pages
// declaring the same intent string is a cannibalization defect → exit 1.
//
// This lint ALSO encodes the ownership rule structurally: a page's declared
// intent must use the prefix that matches its page type, so a product page
// cannot quietly claim a substance ("metal:lead") intent that belongs to the
// metal page. The intent grammar:
//
//   metal:<slug>                     e.g. metal:lead
//   commodity:<ingredient>-<metal>   e.g. commodity:rice-arsenic
//   product:<category>-<metal?>      e.g. product:baby-food-lead  (metal optional)
//   regulation:<jurisdiction>-<metal>-<matrix?>  e.g. regulation:fda-lead-juice
//
// A page whose `canonical_intent` prefix does not match its directory's allowed
// prefix is a misfiled-authority defect → exit 1 (it would let two page types
// claim the same conceptual territory under different strings).
//
// SCOPE / ROLLOUT
// ---------------
// Metals-first: metal pages MUST declare canonical_intent (missing = error once
// --require-metals, which prebuild passes). ingredient/product/regulation pages
// are checked-if-present now and become required as those rollouts land. Pages
// with auto_generated:true or provisional_scaffold:true are exempt (they are
// routing destinations / cross-cuts, not authority pages).
//
// FLAGS
//   default          : exit 1 on any duplicate intent or prefix/type mismatch.
//   --warn-only      : report, always exit 0 (for first introduction before the
//                      metal frontmatter is fully populated).
//   --require-metals : also error if a non-exempt metal page is MISSING
//                      canonical_intent. prebuild passes this.
//
// Output: data/evidence/canonical-intent-audit.csv (one row per page) +
//         a console summary. Conflicts are listed explicitly.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const WARN_ONLY = args.includes("--warn-only")
const REQUIRE_METALS = args.includes("--require-metals")

// dir → { type, allowedPrefixes }. allowedPrefixes is the set of canonical_intent
// prefixes a page in this dir may legitimately own.
const PAGE_TYPES = [
  { dir: "wiki/metals", type: "metal", prefixes: ["metal"] },
  { dir: "wiki/ingredients", type: "ingredient", prefixes: ["commodity"] },
  { dir: "wiki/products", type: "product", prefixes: ["product"] },
  { dir: "wiki/regulations", type: "regulation", prefixes: ["regulation"] },
]

const VALID_PREFIXES = new Set(PAGE_TYPES.flatMap((p) => p.prefixes))

const errors = []
const rows = [] // { intent, type, dir, slug, path }
const intentMap = new Map() // intent → [{type,slug,path}]

for (const { dir, type, prefixes } of PAGE_TYPES) {
  const abs = path.join(repoRoot, dir)
  if (!fs.existsSync(abs)) continue
  for (const file of fs.readdirSync(abs)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md" || file.startsWith("_")) continue
    const slug = file.replace(/\.md$/, "")
    const rel = path.relative(repoRoot, path.join(abs, file))
    const fm = matter(fs.readFileSync(path.join(abs, file), "utf8")).data

    // Exempt non-authority pages.
    if (fm.auto_generated === true) continue
    if (fm.provisional_scaffold === true) continue

    const intent = fm.canonical_intent ? String(fm.canonical_intent).trim() : ""

    if (!intent) {
      if (type === "metal" && REQUIRE_METALS) {
        errors.push({
          kind: "MISSING_CANONICAL_INTENT",
          path: rel,
          detail: `metal page ${slug} is missing canonical_intent (expected "metal:${slug}").`,
        })
      }
      rows.push({ intent: "", type, dir, slug, path: rel })
      continue
    }

    rows.push({ intent, type, dir, slug, path: rel })

    // Grammar: prefix must exist and be valid.
    const prefix = intent.includes(":") ? intent.slice(0, intent.indexOf(":")) : ""
    if (!VALID_PREFIXES.has(prefix)) {
      errors.push({
        kind: "MALFORMED_INTENT",
        path: rel,
        detail: `canonical_intent "${intent}" has no valid type prefix (one of ${[...VALID_PREFIXES].map((p) => p + ":").join(", ")}).`,
      })
    } else if (!prefixes.includes(prefix)) {
      // Ownership-rule violation: a page claims an intent owned by another type.
      errors.push({
        kind: "INTENT_TYPE_MISMATCH",
        path: rel,
        detail: `${type} page declares "${intent}" (a "${prefix}:" intent). ${type} pages may only own ${prefixes.map((p) => `"${p}:"`).join(" / ")} intents — substance intent belongs to the metal page, commodity-by-metal to the ingredient page, consumer-category to the product page, numeric-limit to the regulation page.`,
      })
    }

    // Metal-specific tightening: metal:<slug> must equal the page slug, so two
    // metal pages can't both claim metal:lead via a typo or alias.
    if (type === "metal" && prefix === "metal") {
      const target = intent.slice("metal:".length)
      if (target !== slug) {
        errors.push({
          kind: "METAL_INTENT_SLUG_MISMATCH",
          path: rel,
          detail: `metal page ${slug} declares "${intent}"; expected "metal:${slug}".`,
        })
      }
    }

    const list = intentMap.get(intent) ?? []
    list.push({ type, slug, path: rel })
    intentMap.set(intent, list)
  }
}

// Duplicate intent across any two pages (the core cannibalization check).
for (const [intent, holders] of intentMap) {
  if (holders.length > 1) {
    errors.push({
      kind: "DUPLICATE_CANONICAL_INTENT",
      path: holders.map((h) => h.path).join(" , "),
      detail: `canonical_intent "${intent}" is claimed by ${holders.length} pages: ${holders.map((h) => `${h.path}`).join(", ")}. Exactly one page may own an intent.`,
    })
  }
}

// ---- write CSV audit -------------------------------------------------------
const outDir = path.join(repoRoot, "data/evidence")
fs.mkdirSync(outDir, { recursive: true })
const csvPath = path.join(outDir, "canonical-intent-audit.csv")
const csv = ["intent,type,slug,path"]
for (const r of rows.sort((a, b) => (a.intent || "~").localeCompare(b.intent || "~"))) {
  csv.push([q(r.intent), r.type, r.slug, q(r.path)].join(","))
}
fs.writeFileSync(csvPath, csv.join("\n") + "\n", "utf8")

// ---- report ----------------------------------------------------------------
console.log("audit-canonical-intent:")
console.log(`  pages with intent: ${rows.filter((r) => r.intent).length} / ${rows.length}`)
console.log(`  conflicts:         ${errors.length}`)
console.log(`  audit: ${path.relative(repoRoot, csvPath)}`)

if (errors.length) {
  console.log("")
  const byKind = {}
  for (const e of errors) (byKind[e.kind] ??= []).push(e)
  for (const [kind, list] of Object.entries(byKind)) {
    console.log(`  ${kind} (${list.length}):`)
    for (const e of list) console.log(`    - ${e.path}\n        ${e.detail}`)
  }
}

if (WARN_ONLY) {
  if (errors.length) console.log(`  (--warn-only: ${errors.length} conflict(s) reported, not failing the build)`)
  process.exit(0)
}
if (errors.length) {
  console.error(`CANONICAL-INTENT LINT FAILED: ${errors.length} conflict(s). Authority for one intent must live on exactly one page.`)
  process.exit(1)
}
process.exit(0)

function q(s) {
  const v = String(s ?? "")
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
}
