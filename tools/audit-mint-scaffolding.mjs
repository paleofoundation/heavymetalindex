#!/usr/bin/env node
// Pre-mint / pre-publish scaffolding lint (ORDER HMI-NO-TODO-MINT-1, CEO lock 2026-09-13).
//
// Any ALL-CAPS TODO or draft scaffolding in a page or PDF that is minted (or about to
// be minted) is a hard FAIL: no DataCite deposit, no DOI write-back, no publish. The
// 2026-09-13 canary was wiki/synthesis/proof-before-the-floor.md, which went live under
// 10.83376/hmi.proof-before-the-floor still carrying three `[EMPIRICAL INPUT NEEDED: …]`
// brackets. This lint makes that state unreachable rather than relying on review.
//
// What FAILS (body text only; frontmatter, fenced code, inline code and HTML comments
// are not rendered prose and are ignored):
//   - EMPIRICAL INPUT NEEDED / AUTHOR DISCLOSURE REQUIRED, anywhere, any case
//   - bare ALL-CAPS PLACEHOLDER / TBD / TODO / FIXME / XXX tokens
//   - a [...] bracket (not a markdown link, not a wikilink) whose text carries a
//     scaffold keyword, matched case-insensitively: [TBD], [todo: cite], [PENDING
//     INVITATION], [Insert value here]
//   - "registration pending" when the page already declares wiki_doi or cert_doi
//   - a "Claims audit" or "Self-critique" draft section heading
//
// Deliberately NOT failing (measured against the corpus before this lint shipped):
// jurisdiction and author arrays such as [US-CA], [GLOBAL], [EFSA]; [RETRACTED];
// [CAS 13977-65-6]; [TL 4-5]; citation brackets such as [WHO 1996]; link text such as
// [TECRID FAQ](https://…).
//
// Surface (default run): every page tools/mint-dois.mjs can ever deposit or has
// deposited, i.e. pages in the minted directories carrying a `wiki_doi:` key (set or
// null), plus every synthesis page (all render to a scholarly PDF). Sources are
// excluded because mint-dois excludes them by default.
//
// Usage:
//   node tools/audit-mint-scaffolding.mjs                    # scan the mint/publish surface
//   node tools/audit-mint-scaffolding.mjs --files a.md b.md  # scan named pages
//   node tools/audit-mint-scaffolding.mjs --pdf x.pdf        # scan rendered PDF text
//   node tools/audit-mint-scaffolding.mjs --pdf-dir public   # scan public/{synthesis,metals}/*.pdf
//   add --json for machine-readable output; --root <dir> to scan another tree.
//
// Exit: 0 clean, 1 scaffolding found, 2 usage error. PDF scanning needs `pdftotext`;
// where it is absent (the Vercel builder) the PDF pass is skipped with a notice, and the
// markdown pass still covers the body every PDF is rendered from.
//
// Wired into: package.json prebuild + postbuild + release:wiki, tools/mint-dois.mjs
// (execute runs refuse), tools/datacite-reconcile-media.mjs (--apply refuses).
// Deterministic; no network; no model call.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"

export const SURFACE_DIRS = ["wiki/synthesis", "wiki/metals", "wiki/ingredients", "wiki/regulations", "wiki/products"]
const PDF_DIRS = ["synthesis", "metals"]

const BRACKET_KEYWORDS = /\b(?:needed|required|pending|missing|insert|placeholder|tbd|todo|fixme|xxx|tk)\b/i

// Blank out spans that never render as prose, keeping newlines so line numbers hold.
const blank = (s) => s.replace(/[^\n]/g, " ")
export function stripNonProse(body) {
  return body
    .replace(/^(```|~~~)[^\n]*\n[\s\S]*?^\1[^\n]*$/gm, blank)
    .replace(/<!--[\s\S]*?-->/g, blank)
    .replace(/`[^`\n]*`/g, blank)
}

export function splitFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!m) return { fm: "", body: raw, bodyLineOffset: 0 }
  return { fm: m[1], body: raw.slice(m[0].length), bodyLineOffset: m[0].split("\n").length - 1 }
}

function fmValue(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, "m"))
  if (!m) return null
  const v = m[1].trim().replace(/^['"]|['"]$/g, "")
  return v && v.toLowerCase() !== "null" && v !== "~" ? v : null
}

export const hasDoiSet = (fm) => Boolean(fmValue(fm, "wiki_doi") || fmValue(fm, "cert_doi"))

// Core scanner over rendered-prose text. `doiSet` gates the registration-pending rule;
// `headings` is true for markdown (heading syntax) and false for PDF text (line starts).
export function scanText(text, { doiSet = false, headings = true } = {}) {
  const hits = []
  const lineOf = (idx) => text.slice(0, idx).split("\n").length
  const push = (rule, idx, match) =>
    hits.push({ rule, line: lineOf(idx), excerpt: match.replace(/\s+/g, " ").trim().slice(0, 120) })

  for (const m of text.matchAll(/EMPIRICAL\s+INPUT\s+NEEDED/gi)) push("empirical-input-needed", m.index, m[0])
  for (const m of text.matchAll(/AUTHOR\s+DISCLOSURE\s+REQUIRED/gi)) push("author-disclosure-required", m.index, m[0])
  for (const m of text.matchAll(/\b(?:PLACEHOLDER|TBD|TODO|FIXME|XXX)\b/g)) push("all-caps-todo-token", m.index, m[0])

  // Brackets: skip wikilinks ([[...]]), footnotes ([^1]), task boxes ([ ] / [x]) and link
  // text ([text](url) or [text][ref]). Keyword test is case-insensitive, per the ORDER.
  for (const m of text.matchAll(/(?<!\[)\[([^\[\]\n]{1,200})\](?!\(|\[|\])/g)) {
    const inner = m[1]
    if (/^\^/.test(inner) || /^[ xX]$/.test(inner)) continue
    if (!BRACKET_KEYWORDS.test(inner)) continue
    // Already reported by the explicit rules above; avoid a duplicate row.
    if (/EMPIRICAL\s+INPUT\s+NEEDED|AUTHOR\s+DISCLOSURE\s+REQUIRED/i.test(inner)) continue
    push("scaffold-bracket", m.index, m[0])
  }

  if (doiSet) {
    for (const m of text.matchAll(/registration\s+pending|pending\s+registration|DOI\s+pending/gi)) {
      push("registration-pending-with-doi", m.index, m[0])
    }
  }

  const draftSection = headings
    ? /^#{1,6}[ \t]+[^\n]*\b(?:claims?\s+audit|self-?\s?critique)\b[^\n]*$/gim
    : /^[ \t]*(?:\d+(?:\.\d+)*\.?[ \t]+)?(?:claims?\s+audit|self-?\s?critique)\b[^\n]*$/gim
  for (const m of text.matchAll(draftSection)) push("draft-section", m.index, m[0])

  return hits.sort((a, b) => a.line - b.line)
}

export function scanMarkdown(raw) {
  const { fm, body, bodyLineOffset } = splitFrontmatter(raw)
  return scanText(stripNonProse(body), { doiSet: hasDoiSet(fm), headings: true }).map((h) => ({
    ...h,
    line: h.line + bodyLineOffset,
  }))
}

export function collectSurface(root) {
  const files = []
  for (const dir of SURFACE_DIRS) {
    const abs = path.join(root, dir)
    if (!fs.existsSync(abs)) continue
    for (const f of fs.readdirSync(abs)) {
      if (!f.endsWith(".md") || f === "index.md" || f.startsWith("_")) continue
      const p = path.join(abs, f)
      const { fm } = splitFrontmatter(fs.readFileSync(p, "utf8"))
      if (dir === "wiki/synthesis" || /^wiki_doi:/m.test(fm)) files.push(p)
    }
  }
  return files.sort()
}

export function lintMarkdownFiles(files, root = process.cwd()) {
  return files.flatMap((p) =>
    scanMarkdown(fs.readFileSync(p, "utf8")).map((h) => ({ file: path.relative(root, p), ...h })),
  )
}

const havePdftotext = () => {
  try {
    execFileSync("pdftotext", ["-v"], { stdio: "ignore" })
    return true
  } catch {
    return false
  }
}

export function lintPdfFiles(pdfs, root = process.cwd()) {
  if (!pdfs.length) return { hits: [], skipped: false }
  if (!havePdftotext()) return { hits: [], skipped: true }
  const hits = []
  for (const pdf of pdfs) {
    const text = execFileSync("pdftotext", ["-layout", pdf, "-"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
    // A rendered PDF inherits its page's DOI context: public/<type>/<slug>.pdf <- wiki/<type>/<slug>.md
    const rel = path.relative(path.join(root, "public"), pdf)
    const md = path.join(root, "wiki", rel.replace(/\.pdf$/, ".md"))
    const doiSet = !rel.startsWith("..") && fs.existsSync(md) && hasDoiSet(splitFrontmatter(fs.readFileSync(md, "utf8")).fm)
    for (const h of scanText(text, { doiSet, headings: false })) hits.push({ file: path.relative(root, pdf), ...h })
  }
  return { hits, skipped: false }
}

function main(argv) {
  const opt = (name) => {
    const i = argv.indexOf(name)
    return i >= 0 ? argv[i + 1] : undefined
  }
  const listAfter = (name) => {
    const i = argv.indexOf(name)
    if (i < 0) return []
    const out = []
    for (let j = i + 1; j < argv.length && !argv[j].startsWith("--"); j++) out.push(argv[j])
    return out
  }
  const root = path.resolve(opt("--root") || process.cwd())
  const json = argv.includes("--json")

  const mdFiles = argv.includes("--files") ? listAfter("--files").map((f) => path.resolve(root, f)) : []
  let pdfs = argv.includes("--pdf") ? listAfter("--pdf").map((f) => path.resolve(root, f)) : []
  const pdfDir = opt("--pdf-dir")
  if (pdfDir) {
    for (const seg of PDF_DIRS) {
      const d = path.resolve(root, pdfDir, seg)
      if (fs.existsSync(d)) pdfs.push(...fs.readdirSync(d).filter((f) => f.endsWith(".pdf")).map((f) => path.join(d, f)))
    }
  }
  const explicit = argv.includes("--files") || argv.includes("--pdf") || Boolean(pdfDir)
  const targets = explicit ? mdFiles : collectSurface(root)

  const missing = [...targets, ...pdfs].filter((f) => !fs.existsSync(f))
  if (missing.length) {
    console.error(`audit-mint-scaffolding: file(s) not found: ${missing.map((f) => path.relative(root, f)).join(", ")}`)
    return 2
  }

  const mdHits = lintMarkdownFiles(targets, root)
  const pdf = lintPdfFiles(pdfs, root)
  const hits = [...mdHits, ...pdf.hits]

  if (json) {
    console.log(JSON.stringify({ scanned_pages: targets.length, scanned_pdfs: pdf.skipped ? 0 : pdfs.length, pdf_skipped: pdf.skipped, hits }, null, 2))
  } else {
    const pdfNote = pdfs.length ? (pdf.skipped ? `, ${pdfs.length} PDF(s) NOT scanned (pdftotext unavailable)` : `, ${pdfs.length} PDF(s)`) : ""
    if (hits.length) {
      console.error(`audit-mint-scaffolding: FAIL. ${hits.length} scaffolding hit(s) in ${targets.length} page(s)${pdfNote}. No mint, no DOI write-back, no publish until removed:`)
      for (const h of hits) console.error(`  ${h.file}:${h.line}  [${h.rule}]  ${h.excerpt}`)
    } else {
      console.log(`audit-mint-scaffolding: OK. 0 scaffolding hits in ${targets.length} page(s)${pdfNote}.`)
    }
  }
  return hits.length ? 1 : 0
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  process.exit(main(process.argv.slice(2)))
}
