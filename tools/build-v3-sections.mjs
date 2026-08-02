#!/usr/bin/env node
// Emit the v3 body sections the build was missing, from structured data.
//
// These are the sections `check:v3` reported MISSING that no rename could reach,
// because they exist on no page of their type. Unlike the relabel transformer,
// this one WRITES CONTENT — so every value it emits is read from a structured
// source, never invented, and every block is marker-bounded so it regenerates
// rather than drifting (CLAUDE.md Part 5b: generators own marker regions).
//
//   Regulatory tightening over time   metal pages       <- regulations.json
//   Where this page is thin           ingredient pages  <- contamination.json
//   Full register                     regulations index <- regulations.json
//
// NOT emitted here, deliberately:
//   "What the reference values mean in practice" (metal) and "Testing and
//   verification posture" (product) are interpretation, not data. A generator
//   can lay out numbers it is given; it cannot decide what a reference value
//   means in practice. Emitting a heading over auto-generated prose there would
//   put unreviewed interpretation on a public evidence page — worse than the
//   section being absent, which is at least honestly absent.
//
// FIREWALL: no p95, no HMTc thresholds, no percentile arithmetic reaches these
// blocks. They carry occurrence and instrument facts only.

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const WIKI = join(ROOT, "wiki")
const APPLY = process.argv.includes("--apply")

const readJson = (p) => {
  const d = JSON.parse(readFileSync(p, "utf8"))
  return Array.isArray(d) ? d : (d.records ?? [])
}
const regs = readJson(join(WIKI, "static/regulations.json"))
const contam = existsSync(join(WIKI, "static/contamination.json"))
  ? readJson(join(WIKI, "static/contamination.json"))
  : []

// Replace a marker-bounded block, or append one before the apparatus tail.
function upsert(md, marker, body) {
  const open = `<!-- BEGIN: ${marker} -->`
  const close = `<!-- END: ${marker} -->`
  const block = `${open}\n${body}\n${close}`
  const re = new RegExp(`${open}[\\s\\S]*?${close}`)
  if (re.test(md)) return md.replace(re, block)
  // Insert before the apparatus. Prefer a heading; otherwise fall back to the
  // FIRST generated marker, because appending at the end of a page whose tail is
  // generator-owned drops the block INSIDE that generator's region — which is
  // how the register table ended up inside update-history and tripped the leak
  // guard.
  const m = md.match(/\n## (References|Sources|Update history)\b/)
  if (m) return md.slice(0, m.index) + "\n" + block + "\n" + md.slice(m.index)
  const g = md.match(/\n<!-- BEGIN: /)
  if (g) return md.slice(0, g.index) + "\n" + block + "\n" + md.slice(g.index)
  return md.trimEnd() + "\n\n" + block + "\n"
}

const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").trim()
let touched = 0

// ── 1. Regulatory tightening over time — metal pages ───────────────────────
// One row per instrument that sets a limit for this metal and carries a date.
// Sorted oldest first, which is what makes tightening legible at all.
for (const f of readdirSync(join(WIKI, "metals")).filter((x) => x.endsWith(".md") && x !== "index.md")) {
  const p = join(WIKI, "metals", f)
  let md = readFileSync(p, "utf8")
  const name = (md.match(/^title:\s*"?([^"\n]+)"?/m) || [])[1]?.trim() ?? f.replace(/\.md$/, "")
  const sym = (md.match(/^symbol:\s*"?([^"\n]+)"?/m) || [])[1]?.trim()
  const key = f.replace(/\.md$/, "").toLowerCase()

  const rows = regs
    .filter((r) => {
      const hay = [r.metal, ...(r.metals ?? [])].filter(Boolean).map((x) => String(x).toLowerCase())
      return hay.some((h) => h.includes(key) || (sym && h === sym.toLowerCase()))
    })
    .filter((r) => r.effective_date)
    .sort((a, b) => String(a.effective_date).localeCompare(String(b.effective_date)))

  if (rows.length < 2) continue // one date shows no trajectory

  const body = [
    "## Regulatory tightening over time",
    "",
    `Instruments that set a limit for ${name}, oldest first. Dates are the instrument's own effective date.`,
    "",
    "| Year | Body | Instrument | Value as set |",
    "| --- | --- | --- | --- |",
    ...rows.map(
      (r) =>
        `| ${esc(String(r.effective_date).slice(0, 4))} | ${esc(r.agency ?? r.jurisdiction)} | ${esc(r.program ?? r.rule_id)} | ${esc(r.limit_value)}${r.limit_unit ? " " + esc(r.limit_unit) : ""} |`,
    ),
    "",
    `_Values are quoted on the basis stated in each instrument and are not converted to a common basis; a maximum level, an action level and a reference dose are different kinds of number. ${rows.length} dated instruments._`,
  ].join("\n")

  const next = upsert(md, "hmi-v3-tightening", body)
  if (next !== md) {
    touched++
    if (APPLY) writeFileSync(p, next)
  }
}

// ── 2. Where this page is thin — ingredient pages ──────────────────────────
// COMPONENTS.md §9 absent state. The point is that a page with no caveat block
// reads as "no caveats exist", which is a stronger and less true claim than
// "nobody has written this yet".
const byIngredient = new Map(contam.map((r) => [String(r.ingredient ?? r.commodity ?? "").toLowerCase(), r]))
for (const f of readdirSync(join(WIKI, "ingredients")).filter((x) => x.endsWith(".md") && x !== "index.md")) {
  const p = join(WIKI, "ingredients", f)
  let md = readFileSync(p, "utf8")
  const slug = f.replace(/\.md$/, "")
  const rec = byIngredient.get(slug)
  const n = Number(rec?.sources_count ?? 0)
  const metals = Array.isArray(rec?.metals) ? rec.metals.length : 0

  const body = [
    "## Where this page is thin",
    "",
    n === 0
      ? `No source has yet been routed to this page. That is a statement about the corpus, not about the ingredient: absence of routed evidence is not evidence of absence. Nothing here should be read as a finding of low contamination.`
      : `This page rests on ${n} routed source${n === 1 ? "" : "s"}${metals ? ` across ${metals} analyte${metals === 1 ? "" : "s"}` : ""}. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.`,
    "",
    "_Corrections and additions are logged publicly. See the correction route in the page rail._",
  ].join("\n")

  const next = upsert(md, "hmi-v3-thin", body)
  if (next !== md) {
    touched++
    if (APPLY) writeFileSync(p, next)
  }
}

// ── 3. Full register — regulations index ───────────────────────────────────
// Placed DETERMINISTICALLY, not by the shared upsert's heuristic. That heuristic
// looks for an apparatus heading and then for the first generated marker;
// regulations/index.md has neither in an author-owned position, so the block
// twice landed inside <!-- BEGIN: hmi-page-history --> where
// audit-page-history-leaks correctly failed the build on "Codex" — the token in
// "Codex Alimentarius Commission", a public standards body.
//
// The guard is right to be strict and I am not weakening it. The block is now
// anchored explicitly ABOVE the first generated marker on the page, which is the
// end of the author-owned region.
const regIdx = join(WIKI, "regulations/index.md")
if (existsSync(regIdx)) {
  const md = readFileSync(regIdx, "utf8")
  const ANCHOR = "<!-- BEGIN: hmi-auto-linked-stubs -->"
  if (md.includes(ANCHOR)) {
    const sorted = [...regs].sort((a, b) =>
      String(a.jurisdiction ?? "").localeCompare(String(b.jurisdiction ?? "")),
    )
    const body = [
      "## Full register",
      "",
      `Every instrument the Index tracks, ${sorted.length} in total, with the body that set it.`,
      "",
      "| Jurisdiction | Body | Instrument |",
      "| --- | --- | --- |",
      ...sorted.map((r) => `| ${esc(r.jurisdiction)} | ${esc(r.agency)} | ${esc(r.program ?? r.rule_id)} |`),
      "",
      "_An entry means the Index tracks the instrument, not that a limit applies to every matrix. Read each instrument's page for scope._",
    ].join("\n")
    const open = "<!-- BEGIN: hmi-v3-register -->"
    const close = "<!-- END: hmi-v3-register -->"
    const blockText = `${open}\n${body}\n${close}`
    const re = new RegExp(`${open}[\\s\\S]*?${close}`)
    const next = re.test(md)
      ? md.replace(re, blockText)
      : md.replace(ANCHOR, `${blockText}\n\n${ANCHOR}`)
    if (next !== md) {
      touched++
      if (APPLY) writeFileSync(regIdx, next)
    }
  }
}

// ── 4. Ingredient drivers — product-category pages ─────────────────────────
// Which ingredients feed this category, read from the ingredients' own
// `used_in_products` frontmatter (231 pages carry it). This is the reverse of a
// link the corpus already asserts, so nothing is invented.
const drivers = new Map()
for (const f of readdirSync(join(WIKI, "ingredients")).filter((x) => x.endsWith(".md"))) {
  const md = readFileSync(join(WIKI, "ingredients", f), "utf8")
  const fm = md.split(/^---$/m)[1] ?? ""
  // used_in_products is FLOW style on one line -
  //   used_in_products: ["[[products/infant-rice-cereal]]", "[[products/rice-milk]]"]
  // not the block style a first pass assumed. Handle both.
  const flow = fm.match(/used_in_products:\s*\[([^\]]*(?:\][^\]]*)*?)\]\s*$/m)
  const blockStyle = fm.match(/used_in_products:\s*\n((?:\s*-\s*.+\n)+)/)
  const raw = flow ? flow[1] : blockStyle ? blockStyle[1] : null
  if (!raw) continue
  const blk = [null, raw]
  const title = (fm.match(/^title:\s*"?([^"\n]+)"?/m) || [])[1]?.trim() ?? f.replace(/\.md$/, "")
  for (const line of blk[1].split(/[\n,]/)) {
    const t = line.replace(/^\s*-\s*/, "").replace(/\[\[|\]\]/g, "").replace(/"/g, "").trim()
    if (!t) continue
    const slug = t.split("|")[0].split("/").pop()
    if (!slug) continue
    if (!drivers.has(slug)) drivers.set(slug, [])
    drivers.get(slug).push({ title, slug: f.replace(/\.md$/, "") })
  }
}
for (const f of readdirSync(join(WIKI, "products")).filter((x) => x.endsWith(".md") && x !== "index.md")) {
  const slug = f.replace(/\.md$/, "")
  const list = drivers.get(slug)
  if (!list?.length) continue
  const p = join(WIKI, "products", f)
  const md = readFileSync(p, "utf8")
  const seen = new Set()
  const uniq = list.filter((d) => (seen.has(d.slug) ? false : seen.add(d.slug)))
  const body = [
    "## Ingredient drivers",
    "",
    `Ingredients the corpus routes into this category. Contamination in a category is inherited from what goes into it, so these are where an occurrence signal originates.`,
    "",
    ...uniq.slice(0, 12).map((d) => `- [[ingredients/${d.slug}|${d.title}]]`),
    "",
    "_Routed from each ingredient's own declared use. An ingredient listed here is not a finding about this category; read its page for the occurrence evidence._",
  ].join("\n")
  const next = upsert(md, "hmi-v3-drivers", body)
  if (next !== md) {
    touched++
    if (APPLY) writeFileSync(p, next)
  }
}

console.log(`build-v3-sections: ${touched} page(s) ${APPLY ? "written" : "would change (dry run)"}`)
