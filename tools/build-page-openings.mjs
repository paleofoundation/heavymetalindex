#!/usr/bin/env node
// Canonical Lead-style page opening for metal and ingredient pages.
//
// The opening is the Quick read box (one plain takeaway sentence plus three
// labelled framing points) followed by a one-paragraph "where the information
// comes from" line, placed directly under the H1 and before the first section.
// wiki/metals/lead.md is the reference. docs/content-contract.md section 6
// locks the rule.
//
// Data, not prose generation. The Quick read text lives in frontmatter
// (`quick_read.summary`, `quick_read.points[]`), drafted from the page's own
// body and references and reviewed under the content contract. This generator
// renders it into a marker-bounded block. The sources line is derived
// deterministically from the sources the page body already cites: issuing
// bodies (government and intergovernmental records) are named and linked to
// their source pages, and the remaining cited works are counted. It adds no
// new facts. `quick_read.sources_line` overrides the derived line verbatim
// (used by Lead, whose hand-written line predates this generator).
//
// Usage:
//   node tools/build-page-openings.mjs --apply [files...]   write blocks
//   node tools/build-page-openings.mjs --check              CI lint
// --check fails when an in-scope page outside the baseline lacks a valid,
// in-sync opening, when any in-scope page outside the baseline still has a
// "## Direct answer" section, or when a baseline entry is already compliant
// (ratchet: remove it from data/evidence/page-openings-baseline.json).

import fs from "node:fs"
import { contractOwnsPage } from "./contracts/page-owner.mjs"
import path from "node:path"
import matter from "gray-matter"

const ROOT = process.cwd()
const WIKI = path.join(ROOT, "wiki")
const BASELINE = path.join(ROOT, "data/evidence/page-openings-baseline.json")
const BEGIN = "<!-- BEGIN: hmi-opening -->"
const END = "<!-- END: hmi-opening -->"
export const LABELS = {
  metals: ["Practical framing", "Highest-risk groups", "Food-system focus"],
  ingredients: ["Metals of concern", "Main drivers", "Practical framing"],
  products: ["Metals of concern", "Ingredient drivers", "Practical framing"],
}

// Contract 1.2: minor and essential element metal pages may use this set instead
// of the metals set, only where the body supports it. Priority metal pages and
// their species/analytical pages must use the metals set.
export const MINOR_METAL_LABELS = ["Role", "Main exposure", "Key distinction"]
export const PRIORITY_METALS = new Set([
  "arsenic", "arsenic-inorganic", "arsenic-total", "cadmium", "lead",
  "mercury", "mercury-methyl", "mercury-total",
])
const labelSetsFor = (section, rel) => {
  const sets = [LABELS[section]]
  const slug = path.basename(rel, ".md")
  if (section === "metals" && !PRIORITY_METALS.has(slug)) sets.push(MINOR_METAL_LABELS)
  return sets
}
const REQUIRED = ["metals", "ingredients"]
const AGENCIES = [
  [/Joint FAO\/WHO Expert Committee|\bJECFA\b/i, "JECFA"],
  [/Codex Alimentarius/i, "Codex Alimentarius"],
  [/European Food Safety Authority|\bEFSA\b/, "EFSA"],
  [/Agency for Toxic Substances|\bATSDR\b/, "ATSDR"],
  [/Centers for Disease Control|\bCDC\b/, "CDC"],
  [/Environmental Health Hazard Assessment|\bOEHHA\b/, "OEHHA"],
  [/Integrated Risk Information System|\bIRIS\b/, "EPA IRIS"],
  [/Environmental Protection Agency|\bEPA\b/, "EPA"],
  [/Food and Drug Administration|\bFDA\b/, "FDA"],
  [/International Agency for Research on Cancer|\bIARC\b/, "IARC"],
  [/Food Standards Australia|\bFSANZ\b/, "FSANZ"],
  [/Food Standards Agency/i, "UK Food Standards Agency"],
  [/Health Canada/i, "Health Canada"],
  [/European Commission|Official Journal of the European Union/i, "European Commission"],
  [/\bEDQM\b|European Directorate for the Quality of Medicines/i, "EDQM"],
  [/World Health Organization|\bWHO\b/, "WHO"],
  [/Department of Agriculture|\bUSDA\b/, "USDA"],
]
const DASH = /[\u2013\u2014]/

// Adopted pages compile the same three-point opening as native HTML.
export function hasCompiledOpening(raw) {
  if (!contractOwnsPage(raw)) return false
  const body=matter(raw).content
  const cards=[...body.matchAll(/<section\b[^>]*data-hmi-quick-read[^>]*>([\s\S]*?)<\/section>/g)]
  return cards.length===1 && (cards[0][1].match(/<li\b/g)||[]).length===3 && (body.search(/^## /m)<0 || cards[0].index<body.search(/^## /m))
}

export function inScope(rel) {
  const m = /^wiki\/(metals|ingredients|products)\/([^/]+)\.md$/.exec(rel)
  if (!m || m[2] === "index") return null
  return m[1]
}

// Body text that counts as the page's own prose: generated, marker-bounded
// blocks and the footer apparatus are excluded.
export function proseOf(body) {
  let s = body.replace(/<!-- BEGIN: ([\w-]+) -->[\s\S]*?<!-- END: \1 -->/g, "")
  s = s.replace(/^## (References|Sources|Update history)\b[\s\S]*?(?=^## |\s*$(?![\s\S]))/gm, "")
  return s
}

const citedSlugs = (text) => {
  const out = []
  for (const m of text.matchAll(/\[\[sources\/([a-z0-9-]+)(?:[|#\]\\])/g)) if (!out.includes(m[1])) out.push(m[1])
  for (const m of text.matchAll(/\]\(\/sources\/([a-z0-9-]+)\)/g)) if (!out.includes(m[1])) out.push(m[1])
  return out
}

const srcCache = new Map()
function sourceInfo(slug) {
  if (srcCache.has(slug)) return srcCache.get(slug)
  const f = path.join(WIKI, "sources", `${slug}.md`)
  let info = null
  if (fs.existsSync(f)) {
    const fm = matter(fs.readFileSync(f, "utf8")).data || {}
    const pending = String(fm.status ?? "").toLowerCase() === "tier1-stub" || String(fm.evidence_tier ?? "").toLowerCase() === "pending"
    const publicOk = !(fm.draft === true || fm.draft === "true") && !pending
    const kind = String(fm.source_type ?? "")
    const who = [].concat(fm.authors ?? []).join("; ") + " | " + String(fm.publication ?? "")
    let agency = null
    if (/^gov|intergov|standard|regulat/i.test(kind) || /^(codex|jecfa|efsa|atsdr|cdc|oehha|epa|fda|who|iarc|fsanz)/.test(slug)) {
      for (const [re, name] of AGENCIES) if (re.test(who)) { agency = name; break }
    }
    info = { publicOk, agency, peer: /peer/i.test(kind) }
  }
  srcCache.set(slug, info)
  return info
}

const list = (xs) => xs.length < 3 ? xs.join(" and ") : `${xs.slice(0, -1).join(", ")}, and ${xs.at(-1)}`
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`

export function sourcesLine(body) {
  const slugs = citedSlugs(proseOf(stripOpening(body)))
  const agencies = new Map()
  let peer = 0, other = 0
  for (const slug of slugs) {
    const info = sourceInfo(slug)
    if (!info || !info.publicOk) continue
    if (info.agency) { if (!agencies.has(info.agency)) agencies.set(info.agency, slug) }
    else if (info.peer) peer++
    else other++
  }
  if (!agencies.size && !peer && !other) return ""
  const named = [...agencies].slice(0, 8).map(([name, slug]) => `[[sources/${slug}|${name}]]`)
  const rest = []
  if (peer) rest.push(plural(peer, "peer-reviewed study", "peer-reviewed studies"))
  if (other) rest.push(plural(other, "other cited source", "other cited sources"))
  let lead
  if (named.length && rest.length) lead = `This page draws on evidence from ${list(named)}, together with ${list(rest)}.`
  else if (named.length) lead = `This page draws on evidence from ${list(named)}.`
  else lead = `This page draws on ${list(rest)}.`
  return `${lead} The complete citation list is at the bottom of the page.`
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
function inlineLinks(text, problems, rel) {
  return esc(text).replace(/\[\[([a-z0-9/-]+)\|([^\]]+)\]\]/g, (_, target, label) => {
    if (target.startsWith("sources/")) problems.push(`${rel}: quick_read point links a source page (${target}); use the sources line`)
    const ok = fs.existsSync(path.join(WIKI, `${target}.md`)) || fs.existsSync(path.join(WIKI, target, "index.md"))
    if (!ok) problems.push(`${rel}: quick_read link target does not exist: ${target}`)
    return `<a href="/${target}">${label}</a>`
  })
}

export function validate(rel, section, fm, body, problems) {
  const qr = fm.quick_read
  if (!qr || typeof qr !== "object") { problems.push(`${rel}: missing quick_read`); return false }
  const before = problems.length
  const prose = proseOf(stripOpening(body))
  const nums = new Set(prose.match(/\d+(?:[.,]\d+)*/g) || [])
  const check = (what, s, maxWords) => {
    if (typeof s !== "string" || !s.trim()) { problems.push(`${rel}: ${what} empty`); return }
    const plain = s.replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g, "$1")
    if (DASH.test(s)) problems.push(`${rel}: ${what} has an em or en dash`)
    if (/\bet al\b|doi|https?:|\b(1[89]|20)\d\d\b/i.test(plain)) problems.push(`${rel}: ${what} has a citation, year, DOI or URL`)
    if (/partner/i.test(plain)) problems.push(`${rel}: ${what} uses "partner"`)
    if (plain.split(/\s+/).length > maxWords) problems.push(`${rel}: ${what} longer than ${maxWords} words`)
    for (const n of plain.match(/\d+(?:[.,]\d+)*/g) || []) if (!nums.has(n)) problems.push(`${rel}: ${what} number ${n} not in page body`)
  }
  check("quick_read.summary", qr.summary, 40)
  if (typeof qr.summary === "string" && (qr.summary.match(/[.!?](\s|$)/g) || []).length > 1) problems.push(`${rel}: quick_read.summary must be one sentence`)
  const pts = Array.isArray(qr.points) ? qr.points : []
  if (pts.length !== 3) problems.push(`${rel}: quick_read.points must have exactly 3 items`)
  const sets = labelSetsFor(section, rel)
  const labels = sets.find((set) => set.every((l, i) => pts[i]?.label === l)) || sets[0]
  pts.forEach((p, i) => {
    if (!p || p.label !== labels[i]) problems.push(`${rel}: quick_read.points[${i}].label must be "${sets.map((s) => s[i]).join('" or "')}"`)
    check(`quick_read.points[${i}].text`, p?.text, 30)
  })
  if (qr.sources_line !== undefined && (typeof qr.sources_line !== "string" || DASH.test(qr.sources_line))) problems.push(`${rel}: quick_read.sources_line invalid`)
  return problems.length === before
}

export function render(rel, fm, body, problems = []) {
  const qr = fm.quick_read
  const items = qr.points.map((p) => `    <li><strong>${esc(p.label)}:</strong> ${inlineLinks(p.text, problems, rel)}</li>`).join("\n")
  const line = typeof qr.sources_line === "string" ? qr.sources_line.trim() : sourcesLine(body)
  return [
    BEGIN,
    `<div class="hmi-quick-read">`,
    `  <div class="hmi-quick-read-label">Quick read</div>`,
    `  <p>${inlineLinks(qr.summary, problems, rel)}</p>`,
    `  <ul>`,
    items,
    `  </ul>`,
    `</div>`,
    ...(line ? ["", line] : []),
    END,
  ].join("\n")
}

export function stripOpening(body) {
  const i = body.indexOf(BEGIN), j = body.indexOf(END)
  if (i < 0 || j < i) return body
  return (body.slice(0, i) + body.slice(j + END.length)).replace(/\n{3,}/g, "\n\n")
}

export function place(body, block) {
  const clean = stripOpening(body)
  const h1 = /^# .+$/m.exec(clean)
  if (!h1) return `\n${block}\n\n${clean.replace(/^\n+/, "")}`
  const at = h1.index + h1[0].length
  return `${clean.slice(0, at)}\n\n${block}\n\n${clean.slice(at).replace(/^\n+/, "")}`
}

const hasDirectAnswer = (body) => /^##\s+Direct answer\b/im.test(proseOf(body))

function walk() {
  const out = []
  for (const sec of Object.keys(LABELS)) {
    const dir = path.join(WIKI, sec)
    for (const f of fs.readdirSync(dir)) if (f.endsWith(".md")) out.push(`wiki/${sec}/${f}`)
  }
  return out.filter(inScope).sort()
}

function generated() {
  try { return new Set(Object.keys(JSON.parse(fs.readFileSync(path.join(ROOT, "data/design/generated-page-heroes.json"), "utf8")))) }
  catch { return new Set() }
}

function main() {
  const args = process.argv.slice(2)
  const apply = args.includes("--apply"), checkMode = args.includes("--check")
  const files = args.filter((a) => !a.startsWith("--"))
  const gen = generated()
  const targets = (files.length ? files : walk()).filter((f) => inScope(f) && !gen.has(f))
  const baseline = new Set(fs.existsSync(BASELINE) ? JSON.parse(fs.readFileSync(BASELINE, "utf8")).pages : [])
  const problems = []
  let written = 0, ok = 0
  for (const rel of targets) {
    const section = inScope(rel)
    const raw = fs.readFileSync(path.join(ROOT, rel), "utf8")
    const parsed = matter(raw)
    if (parsed.data.draft === true) continue
    if (contractOwnsPage(raw)) {
      if (hasCompiledOpening(raw)) ok++
      else problems.push(`${rel}: compiled page needs one three-point Quick read before its sections`)
      continue
    }
    const own = []
    const hasQr = parsed.data.quick_read !== undefined
    if (apply && hasQr) {
      if (!validate(rel, section, parsed.data, parsed.content, own)) { problems.push(...own); continue }
      const block = render(rel, parsed.data, parsed.content, own)
      if (own.length) { problems.push(...own); continue }
      const next = place(parsed.content, block)
      if (next !== parsed.content) {
        const close = raw.indexOf("\n---", 4)
        const lead = (parsed.content.match(/^\n*/) || [""])[0]
        fs.writeFileSync(path.join(ROOT, rel), raw.slice(0, close + 4) + "\n" + lead + next.replace(/^\n+/, ""))
        written++
      }
      continue
    }
    if (!checkMode) continue
    const required = REQUIRED.includes(section)
    const findings = []
    if (hasDirectAnswer(parsed.content)) findings.push(`${rel}: still has a "## Direct answer" section; move its numbers into the body as numbered citations and use the opening`)
    if (hasQr) {
      if (validate(rel, section, parsed.data, parsed.content, findings)) {
        const want = render(rel, parsed.data, parsed.content, findings)
        const i = parsed.content.indexOf(BEGIN), j = parsed.content.indexOf(END)
        const have = i >= 0 && j > i ? parsed.content.slice(i, j + END.length) : null
        if (have !== want) findings.push(`${rel}: opening block missing or out of sync; run node tools/build-page-openings.mjs --apply ${rel}`)
        else {
          const firstSection = parsed.content.search(/^## /m)
          if (firstSection >= 0 && firstSection < i) findings.push(`${rel}: opening must come before the first section`)
        }
      }
    } else if (required) findings.push(`${rel}: missing Lead-style opening (quick_read)`)
    if (baseline.has(rel)) {
      if (!findings.length) problems.push(`${rel}: compliant but still listed in page-openings-baseline.json; remove it`)
    } else if (findings.length) problems.push(...findings)
    else ok++
  }
  if (apply) console.log(`page openings: ${written} written`)
  if (checkMode) console.log(`page openings: ${ok} compliant, ${baseline.size} baselined, ${problems.length} problem(s)`)
  for (const p of problems) console.log(`PROBLEM ${p}`)
  process.exit(problems.length ? 1 : 0)
}

if (import.meta.url === `file://${process.argv[1]}`) main()
