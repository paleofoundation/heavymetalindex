// build-subcategory-v3.mjs — propagate the v3 Subcategory (isProduct) layout to
// the product-category pages whose data supports it.
//
// The v3 SUBCATEGORY screen (Heavy Metal Index v3.dc.html, <sc-if isProduct>)
// is: hero (SUBCATEGORY badge + dek + snapshot) → variant group → category
// framing → ingredient drivers → limits applicable → testing posture. The
// reference implementation is wiki/products/baby-cereals-dry-rice-based.md
// (hand-authored). This generator reproduces that structure from data ONLY:
//
//   - frontmatter (kind/dek/snapshot, cc_relationship, primary_metals_of_concern)
//   - wiki/static/category-risk-maps.json  (ingredient drivers + shares)
//   - the page's own <!-- hmi-product-crosswalk --> block (already-reviewed
//     regulatory limits) → the clean "Limits applicable" table
//
// It invents NO evidence and DELETES no evidence. It replaces only the two
// identifiable scaffold blocks the reference page replaced (the "## Overview"
// scaffold paragraph and the marker-bounded stakeholder guide); if it cannot
// find them it PREPENDS its block after the H1 instead (lossless fallback). Its
// output is wrapped in <!-- BEGIN/END: hmi-subcategory-v3 --> so re-runs replace
// rather than append.
//
// SCOPE: only pages that (a) are type: product-category and (b) have risk-map
// drivers. ~26 category rows today; the ~380 provisional scaffolds have no
// driver data and are skipped (rendering an empty drivers section on them would
// be a worse lie than leaving them). --only=slug,slug limits further.
//
// Usage:
//   node tools/build-subcategory-v3.mjs --dry-run [--only=a,b]   → writes proposals to
//        the dry dir, touches no wiki file, prints a per-page report
//   node tools/build-subcategory-v3.mjs [--only=a,b]             → writes wiki pages

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const ROOT = process.cwd()
const DRY = process.argv.includes("--dry-run")
const onlyArg = process.argv.find((a) => a.startsWith("--only="))
const ONLY = onlyArg ? onlyArg.slice("--only=".length).split(",").map((s) => s.trim()).filter(Boolean) : null
const DRY_DIR = process.env.SUBCAT_DRY_DIR || path.join(ROOT, "..", "subcat-v3-dry")

const PRODUCTS_DIR = path.join(ROOT, "wiki/products")
const REG_DIR = path.join(ROOT, "wiki/regulations")

const METAL = {
  Pb: "Lead", Cd: "Cadmium", iAs: "Inorganic arsenic", tAs: "Total arsenic",
  tHg: "Total mercury", MeHg: "Methylmercury", Ni: "Nickel", Al: "Aluminium",
  Cr: "Chromium", "Cr-VI": "Hexavalent chromium", Sn: "Tin", U: "Uranium", Sb: "Antimony",
}
const metalName = (m) => METAL[m] ?? m

// ── risk map ────────────────────────────────────────────────────────────────
const rmRaw = JSON.parse(fs.readFileSync(path.join(ROOT, "wiki/static/category-risk-maps.json"), "utf8"))
const rmArr = Array.isArray(rmRaw) ? rmRaw : rmRaw.records || Object.values(rmRaw)
const rmBySlug = new Map(rmArr.map((r) => [(r.category || "").replace(/^products\//, ""), r]))
const hasDrivers = (r) => Object.values(r?.metals || {}).some((x) => x?.drivers?.length)

// cache reg titles for clean instrument labels
const regTitle = (slug) => {
  const p = path.join(REG_DIR, `${slug}.md`)
  if (!fs.existsSync(p)) return null
  try { return matter(fs.readFileSync(p, "utf8")).data?.title ?? null } catch { return null }
}

// read a product page's frontmatter (for variant-group partner lookups)
const fmCache = new Map()
function readFm(slug) {
  if (fmCache.has(slug)) return fmCache.get(slug)
  const p = path.join(PRODUCTS_DIR, `${slug}.md`)
  const fm = fs.existsSync(p) ? matter(fs.readFileSync(p, "utf8")).data : null
  fmCache.set(slug, fm)
  return fm
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// ── 1. dek + snapshot (frontmatter) ──────────────────────────────────────────
const DEK =
  "A category profile assembled from its inputs. It reports what the routed literature says about the ingredients that drive it, not brand-by-brand product tests."

function snapshotRows(fm, rm, limits) {
  const jur = new Set()
  for (const l of limits) if (l.jurisdiction) jur.add(l.jurisdiction)
  const rows = [
    { k: "Corpus sources", v: String(fm.sources ?? fm.n_sources ?? "") },
    { k: "Ingredient inputs", v: String((fm.ingredient_targets || []).length || rm.input_count || "") },
    { k: "Applicable limits", v: String(limits.length || "") },
    { k: "Jurisdictions", v: String(jur.size || "") },
  ]
  return rows.filter((r) => r.v && r.v !== "0")
}

// ── 2. variant group (only where cc_relationship names a partner) ─────────────
function variantGroup(slug, fm, limitsBySlug) {
  const cc = fm.cc_relationship
  const partner = cc?.partners?.[0]?.slug
  if (!partner) return null
  const pfm = readFm(partner)
  if (!pfm) return null
  const base = (fm.base_taxonomy || "").replace(/-/g, " ") || "variant group"
  const diverge = (cc.partners[0].metals || []).map(metalName).join(" · ")
  const selfLabel = (fm.label || fm.title || slug).replace(/^.*\(([^)]+)\)\s*$/, "$1")
  const partnerLabel = (pfm.label || pfm.title || partner).replace(/^.*\(([^)]+)\)\s*$/, "$1")
  // factual grid rows, data-derived (no judgement):
  const rows = [
    { k: "Diverges on", a: diverge || "—", b: diverge || "—" },
    { k: "Corpus depth", a: `${fm.sources ?? "—"} sources`, b: `${pfm.sources ?? "—"} sources` },
  ]
  const grid = rows
    .map(
      (r) =>
        `<div class="hmi-variant-k">${esc(r.k)}</div><div class="hmi-variant-a">${esc(r.a)}</div><div class="hmi-variant-b">${esc(r.b)}</div>`,
    )
    .join("")
  return (
    `<div class="hmi-variant-group"><div class="hmi-variant-head">` +
    `<span class="hmi-variant-kicker">Variant group · ${esc(base)}</span>` +
    `<span class="hmi-variant-tabs"><span class="hmi-variant-tab hmi-variant-tab--active">${esc(selfLabel)}</span>` +
    `<a class="hmi-variant-tab" href="/products/${partner}">${esc(partnerLabel)}</a></span>` +
    `<span class="hmi-variant-note">Same category framing, different contamination profile. Both pages are separately citable.</span>` +
    `</div><div class="hmi-variant-grid">${grid}</div></div>`
  )
}

// ── 3. category framing (factual template from the governing metals) ─────────
function categoryFraming(fm, rm) {
  const metals = (fm.primary_metals_of_concern || rm.metals_ranked || []).map(metalName)
  const lead = metals.slice(0, 3).join(", ").replace(/, ([^,]*)$/, " and $1")
  const body =
    `This is a category risk profile assembled from the ingredients that drive it. ` +
    `It does not test products, name brands, or publish brand-by-brand tables. ` +
    (lead ? `The metals that govern it, in the routed corpus, are ${lead}.` : "")
  return (
    `<div class="hmi-category-framing"><div class="hmi-category-framing-kicker">Category framing</div>` +
    `<p>${esc(body)}</p></div>`
  )
}

// ── 4. ingredient drivers (aggregated from the risk map; factual desc) ────────
function ingredientDrivers(rm) {
  // DEFENSIBLE governing-metal rule: only attribute an ingredient to one of the
  // category's TOP-RANKED metals (the risk map's own importance ordering). This
  // is what stops the share-max artifact — e.g. featuring "Apple → Aluminium
  // (1 source)" on a fruit puree whose actual concern is lead/cadmium/arsenic.
  // A trailing metal an ingredient happens to lead on is not the category story.
  const ranked = Array.isArray(rm.metals_ranked) ? rm.metals_ranked : []
  const topMetals = new Set(ranked.slice(0, 3))
  const byIng = new Map()
  for (const [metal, md] of Object.entries(rm.metals || {})) {
    if (topMetals.size && !topMetals.has(metal)) continue
    for (const d of md.drivers || []) {
      const cur = byIng.get(d.ingredient)
      // prefer the higher-ranked metal on a tie-ish share, else the higher share
      const rankOf = (m) => { const i = ranked.indexOf(m); return i < 0 ? 99 : i }
      const better = !cur || (d.share ?? 0) > cur.share + 0.001 ||
        ((Math.abs((d.share ?? 0) - cur.share) <= 0.001) && rankOf(metal) < rankOf(cur.metal))
      if (better) {
        byIng.set(d.ingredient, {
          title: d.title, url: d.page_url, metal,
          share: d.share ?? 0, p95: d.p95_ppb, n: d.n_studies, conf: d.confidence,
        })
      }
    }
  }
  const list = [...byIng.values()].sort((a, b) => b.share - a.share).slice(0, 6)
  if (!list.length) return null
  const maxShare = Math.max(...list.map((d) => d.share)) || 1
  const cards = list
    .map((d, i) => {
      const rank = Math.min(i + 1, 4)
      const width = Math.max(8, Math.round((d.share / maxShare) * 92))
      const slug = (d.url || "").replace(/^https?:\/\/[^/]+\//, "").replace(/^\//, "")
      const href = slug ? `/${slug}` : "#"
      const facts = []
      if (d.p95 != null) facts.push(`p95 ${d.p95} ppb`)
      if (d.n != null) facts.push(`${d.n} source${d.n === 1 ? "" : "s"}`)
      if (d.conf) facts.push(`${d.conf} confidence`)
      const desc =
        `Leading ${metalName(d.metal).toLowerCase()} driver among this category's routed inputs` +
        (facts.length ? ` — ${facts.join(", ")}.` : ".")
      return (
        `<div class="hmi-driver"><div class="hmi-driver-head">` +
        `<a class="hmi-driver-name" href="${href}">${esc(d.title)}</a>` +
        `<span class="hmi-driver-metal">${esc(metalName(d.metal))}</span></div>` +
        `<div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--${rank}" style="width: ${width}%"></div></div>` +
        `<p class="hmi-driver-desc">${esc(desc)}</p></div>`
      )
    })
    .join("\n\n")
  const intro =
    "The inputs below are ordered by their share of the routed occurrence evidence for the metal each drives; the bar shows relative position within this category, not a comparison against any limit."
  return `## Ingredient drivers\n\n${intro}\n\n${cards}`
}

// ── 5. limits applicable (parsed from the page's own crosswalk block) ─────────
// The crosswalk block is already-reviewed data on the page. We reshape it into
// the v3 4-column table; we do not fetch new numbers. If parsing yields nothing
// usable we return null and leave the crosswalk untouched (no fabricated table).
function limitsTable(raw) {
  const m = raw.match(/<!--\s*BEGIN:\s*hmi-product-crosswalk\s*-->([\s\S]*?)<!--\s*END:\s*hmi-product-crosswalk\s*-->/i)
  if (!m) return { table: null, limits: [] }
  const rows = []
  for (const line of m[1].split("\n")) {
    if (!/^\s*\|/.test(line)) continue
    if (/Federal \/ regulatory limit|:?-{3,}/.test(line)) continue // header/sep
    const cells = line.split("|").slice(1, -1).map((c) => c.trim())
    if (cells.length < 2) continue
    const metalCell = cells[0]
    const limitCell = cells[1]
    const regSlug = (limitCell.match(/\[\[regulations\/([^\]|]+)/) || [])[1]
    if (!regSlug) continue
    const metalSym = (metalCell.match(/\(([^)]+)\)\s*$/) || [])[1] || ""
    const metalLbl = metalSym ? metalName(metalSym.replace(/\s/g, "")) : (metalCell.match(/\[\[metals\/[^\]|]+\|?([^\]]*)\]\]/) || [])[1] || metalCell
    const valM = limitCell.match(/([\d.]+)\s*(ug\/kg|µg\/kg|ppb|mg\/kg|ppm)/i)
    if (!valM) continue
    const unit = valM[2].replace(/^ug\/kg$/i, "µg/kg")
    const value = `${valM[1]} ${unit}`
    let status = "guidance", jur = ""
    if (/maximum level|binding/i.test(limitCell)) { status = "binding" }
    if (/action level|guidance|closer to zero|nonbinding|non-binding/i.test(limitCell)) { status = "guidance" }
    if (/codex|international|jecfa/i.test(limitCell)) { status = "international" }
    if (/\bEU\b|European Commission/i.test(limitCell)) jur = "EU"
    else if (/\bFDA\b|Federal/i.test(limitCell)) jur = "US"
    else if (/codex/i.test(limitCell)) jur = "International"
    const label = regTitle(regSlug) || regSlug.replace(/-/g, " ")
    rows.push({ regSlug, label, metal: metalLbl, value, status, jurisdiction: jur })
  }
  if (!rows.length) return { table: null, limits: [] }
  const body = rows
    .map(
      (r) =>
        `| [[regulations/${r.regSlug}\\|${r.label}]] | ${r.metal} | ${r.value} | <span class="hmi-status hmi-status--${r.status}">${r.status[0].toUpperCase()}${r.status.slice(1)}</span> |`,
    )
    .join("\n")
  const table =
    "## Limits applicable to this category\n\n" +
    "The category inherits the maximum levels and action levels that apply to it. These are regulatory limits, not certification thresholds.\n\n" +
    "| Instrument | Metal | Value | Status |\n| --- | --- | --- | --- |\n" +
    body
  return { table, limits: rows }
}

// ── 6. testing posture (factual template) ────────────────────────────────────
const TESTING =
  "## Testing and verification posture\n\n" +
  "Occurrence values in this category are measured by ICP-MS in the source literature, the same method the FDA Toxic Elements Program uses for the survey data behind its action levels.\n\n" +
  '<div class="hmi-posture-note"><p>Where third-party testing programs are cited as sources, the category-level signal is summarized and the reader is pointed at the original document for anything brand-specific. The Index does not reproduce brand-by-brand tables.</p></div>'

// ── assemble + splice ────────────────────────────────────────────────────────
const BEGIN = "<!-- BEGIN: hmi-subcategory-v3 -->"
const END = "<!-- END: hmi-subcategory-v3 -->"

function buildBlock(slug, fm, raw, rm) {
  const { table, limits } = limitsTable(raw)
  const vg = variantGroup(slug, fm, null)
  // Preserve an existing hmi-quick-read Overview (a real, page-specific summary
  // = the v3 assertion block) rather than deleting it (lossless). Only throwaway
  // scaffold prose ("This page is a structural scaffold…") is dropped in favour
  // of the generic category-framing template.
  const ovBody = (raw.match(/## Overview\n([\s\S]*?)(?=\n## )/) || [])[1] || ""
  const framing = /hmi-quick-read/.test(ovBody) ? ovBody.trim() : categoryFraming(fm, rm)
  const drivers = ingredientDrivers(rm)
  const parts = ["## Overview", "", (vg ? vg + "\n\n" : "") + framing]
  if (drivers) parts.push("", drivers)
  if (table) parts.push("", table)
  parts.push("", TESTING)
  const inner = parts.join("\n")
  return { block: `${BEGIN}\n${inner}\n${END}`, limits }
}

function applyToRaw(raw, block) {
  // idempotent: replace an existing block
  const existing = new RegExp(`${BEGIN}[\\s\\S]*?${END}`)
  if (existing.test(raw)) return raw.replace(existing, block)
  // strip the marker-bounded stakeholder guide wherever it sits, plus its now-
  // orphaned heading. It is Tier-2 audience nav (no citable evidence); the v3
  // subcategory layout drops it, matching the golden page.
  raw = raw.replace(
    /\n?<!--\s*BEGIN:\s*hmi-stakeholder-guide\s*-->[\s\S]*?<!--\s*END:\s*hmi-stakeholder-guide\s*-->\n?/g,
    "\n",
  )
  raw = raw.replace(/\n## Who this page is for[^\n]*\n+/g, "\n")
  // replace the Overview section (any variant) with the v3 block, which re-opens
  // with its own "## Overview" so exactly one survives.
  const ovRe = /## Overview\n[\s\S]*?(?=\n## )/
  if (ovRe.test(raw)) return raw.replace(ovRe, block + "\n")
  // fallback: prepend after the H1 (lossless — deletes nothing)
  const h1 = raw.match(/^#\s.*$/m)
  if (h1) {
    const idx = raw.indexOf(h1[0]) + h1[0].length
    return raw.slice(0, idx) + "\n\n" + block + "\n" + raw.slice(idx)
  }
  return block + "\n\n" + raw
}

// ── run ──────────────────────────────────────────────────────────────────────
// baby-cereals-dry-rice-based is the hand-authored golden exemplar (dccb06a42);
// keep its polished prose rather than regenerating it.
const SKIP = new Set(["baby-cereals-dry-rice-based"])
let targets = [...rmBySlug.entries()].filter(([, r]) => hasDrivers(r)).map(([s]) => s).filter((s) => !SKIP.has(s))
if (ONLY) targets = targets.filter((s) => ONLY.includes(s))

if (DRY) fs.mkdirSync(DRY_DIR, { recursive: true })
const report = []
for (const slug of targets) {
  const p = path.join(PRODUCTS_DIR, `${slug}.md`)
  if (!fs.existsSync(p)) { report.push({ slug, skip: "no page" }); continue }
  const raw = fs.readFileSync(p, "utf8")
  const g = matter(raw)
  if (g.data.type !== "product-category") { report.push({ slug, skip: `type ${g.data.type}` }); continue }
  const rm = rmBySlug.get(slug)
  const { block, limits } = buildBlock(slug, g.data, raw, rm)

  // frontmatter mutation
  const fm = { ...g.data }
  fm.kind = "Subcategory"
  if (!fm.dek) fm.dek = DEK
  fm.snapshot = snapshotRows(fm, rm, limits)

  const newBody = applyToRaw(g.content.replace(/^\n+/, "\n"), block)
  const out = matter.stringify(newBody, fm)

  const nDrivers = (block.match(/hmi-driver-name/g) || []).length
  const hasVG = block.includes("hmi-variant-group")
  const nLimits = limits.length
  report.push({ slug, drivers: nDrivers, variant: hasVG, limits: nLimits, spliced: applyToRaw.length ? (raw !== newBody || true) : true })

  if (DRY) fs.writeFileSync(path.join(DRY_DIR, `${slug}.md`), out)
  else fs.writeFileSync(p, out)
}

console.log(`${DRY ? "[DRY] " : ""}subcategory-v3: processed ${report.length} page(s)`)
for (const r of report) {
  if (r.skip) console.log(`  SKIP  ${r.slug} — ${r.skip}`)
  else console.log(`  ok    ${r.slug}  drivers=${r.drivers} variant=${r.variant ? "y" : "-"} limits=${r.limits}`)
}
if (DRY) console.log(`\n[DRY] proposals written to ${DRY_DIR}`)
