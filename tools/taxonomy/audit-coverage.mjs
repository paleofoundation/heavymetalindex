#!/usr/bin/env node
// HMTc Taxonomy v2.0 coverage audit.
//
// Reads `data/taxonomy/hmtc-v2.json` (the structured taxonomy) and audits
// `wiki/products/*.md` against it. For each (category, row) pair, reports
// whether a product page exists.
//
// Match modes:
//   - exact:    a page exists with `hmtc_category: <N>` AND `hmtc_row: <row>`
//   - by_slug:  a page exists at the expected slug, frontmatter may not declare hmtc_row yet
//   - by_alias: page name closely matches subcategory name (substring or known alias)
//   - missing:  no page found
//
// Output:
//   - data/evidence/taxonomy-coverage-audit.csv (machine-readable)
//   - data/evidence/taxonomy-coverage-audit.md  (human-readable summary)
//
// Idempotent. Run any time. Used as input to scaffold-category-rows.mjs.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const taxonomyPath = path.join(repoRoot, "data/taxonomy/hmtc-v2.json")
const productsDir = path.join(repoRoot, "wiki/products")
const outCsv = path.join(repoRoot, "data/evidence/taxonomy-coverage-audit.csv")
const outMd = path.join(repoRoot, "data/evidence/taxonomy-coverage-audit.md")

function loadTaxonomy() {
  return JSON.parse(fs.readFileSync(taxonomyPath, "utf8"))
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const out = {}
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!kv) continue
    out[kv[1]] = kv[2].trim()
  }
  return out
}

function loadProductPages() {
  const files = fs.readdirSync(productsDir).filter(f => f.endsWith(".md") && f !== "index.md")
  const pages = []
  for (const f of files) {
    const slug = f.replace(/\.md$/, "")
    const fm = parseFrontmatter(fs.readFileSync(path.join(productsDir, f), "utf8"))
    pages.push({
      slug,
      file: f,
      hmtc_category: fm.hmtc_category ? Number(fm.hmtc_category) : null,
      hmtc_row: fm.hmtc_row ? Number(fm.hmtc_row) : null,
      title: fm.title || "",
      type: fm.type || "",
      products_status: fm.products_status || "",
    })
  }
  return pages
}

function nameAliasMatch(subName, slug) {
  const norm = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  const sn = norm(subName)
  const sl = norm(slug)
  if (sn === sl) return true
  // Drop parenthetical content for fuzzier match
  const snBase = norm(subName.replace(/\(.+?\)/g, "").trim())
  if (snBase && snBase === sl) return true
  // Slug contained in subcategory name
  if (sl.length >= 4 && sn.includes(sl)) return true
  // Subcategory name first noun in slug
  const firstWord = norm(subName.split(/[ \-\/\(,]/)[0])
  if (firstWord.length >= 5 && sl.startsWith(firstWord)) return true
  return false
}

function main() {
  const tax = loadTaxonomy()
  const pages = loadProductPages()
  const byExact = new Map()
  for (const p of pages) {
    if (p.hmtc_category && p.hmtc_row) {
      byExact.set(`${p.hmtc_category}:${p.hmtc_row}`, p)
    }
  }
  const bySlug = new Map(pages.map(p => [p.slug, p]))

  const rows = []
  let nExact = 0, nBySlug = 0, nByAlias = 0, nMissing = 0
  const perCat = {}

  for (const cat of tax.categories) {
    perCat[cat.n] = { name: cat.name, total: cat.subcategories.length, exact: 0, by_slug: 0, by_alias: 0, missing: 0 }
    for (const sub of cat.subcategories) {
      let match = null
      let mode = ""
      const exactKey = `${cat.n}:${sub.row}`
      if (byExact.has(exactKey)) { match = byExact.get(exactKey); mode = "exact"; nExact++; perCat[cat.n].exact++ }
      else if (bySlug.has(sub.slug)) { match = bySlug.get(sub.slug); mode = "by_slug"; nBySlug++; perCat[cat.n].by_slug++ }
      else {
        // Search for any page whose slug aliases the subcategory name
        for (const p of pages) {
          if (nameAliasMatch(sub.name, p.slug)) { match = p; mode = "by_alias"; break }
        }
        if (match) { nByAlias++; perCat[cat.n].by_alias++ }
        else { mode = "missing"; nMissing++; perCat[cat.n].missing++ }
      }
      rows.push({
        category: cat.n,
        category_name: cat.name,
        row: sub.row,
        subcategory_name: sub.name,
        expected_slug: sub.slug,
        match_mode: mode,
        matched_file: match?.file || "",
        matched_slug: match?.slug || "",
        matched_hmtc_category: match?.hmtc_category ?? "",
        matched_hmtc_row: match?.hmtc_row ?? "",
        matched_status: match?.products_status || "",
      })
    }
  }

  // Write CSV
  const headers = ["category","category_name","row","subcategory_name","expected_slug","match_mode","matched_file","matched_slug","matched_hmtc_category","matched_hmtc_row","matched_status"]
  const csv = [headers.join(",")]
  for (const r of rows) {
    csv.push(headers.map(h => {
      const v = r[h] == null ? "" : String(r[h])
      return /[,"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
    }).join(","))
  }
  fs.writeFileSync(outCsv, csv.join("\n") + "\n")

  // Write Markdown summary
  const md = []
  md.push(`# HMTc Taxonomy v${tax.version} Coverage Audit`)
  md.push("")
  md.push(`Generated: ${new Date().toISOString().slice(0,10)}`)
  md.push("")
  md.push(`Taxonomy version: **${tax.version}** (${tax.version_date})`)
  md.push("")
  const total = rows.length
  const covered = nExact + nBySlug + nByAlias
  md.push(`Total subcategories in taxonomy: **${total}**`)
  md.push(`Product pages with any match: **${covered}** (${Math.round(covered/total*100)}%)`)
  md.push(`  - Exact hmtc_category + hmtc_row frontmatter: ${nExact}`)
  md.push(`  - Slug match (frontmatter not declared): ${nBySlug}`)
  md.push(`  - Name-alias match (slug differs): ${nByAlias}`)
  md.push(`**Missing pages: ${nMissing}**`)
  md.push("")
  md.push("## By category")
  md.push("")
  md.push("| Cat | Name | Total | Exact | By slug | By alias | Missing | Coverage |")
  md.push("|----:|------|------:|------:|--------:|---------:|--------:|---------:|")
  for (const n of Object.keys(perCat)) {
    const c = perCat[n]
    const cov = c.exact + c.by_slug + c.by_alias
    md.push(`| ${n} | ${c.name.replace(/\|/g, "\\|")} | ${c.total} | ${c.exact} | ${c.by_slug} | ${c.by_alias} | ${c.missing} | ${Math.round(cov/c.total*100)}% |`)
  }
  md.push("")
  md.push("## Missing rows by category")
  md.push("")
  for (const cat of tax.categories) {
    const missing = rows.filter(r => r.category === cat.n && r.match_mode === "missing")
    if (missing.length === 0) continue
    md.push(`### Category ${cat.n}: ${cat.name} (${missing.length} missing)`)
    md.push("")
    for (const r of missing) md.push(`- Row ${r.row}: **${r.subcategory_name}** → expected slug: \`${r.expected_slug}\``)
    md.push("")
  }
  fs.writeFileSync(outMd, md.join("\n"))

  console.log(`HMTc Taxonomy v${tax.version} coverage audit:`)
  console.log(`  total subcategories: ${total}`)
  console.log(`  matched: ${covered} (${Math.round(covered/total*100)}%)`)
  console.log(`    exact: ${nExact}, by_slug: ${nBySlug}, by_alias: ${nByAlias}`)
  console.log(`  missing: ${nMissing}`)
  console.log(`Wrote ${outCsv}`)
  console.log(`Wrote ${outMd}`)
}

main()
