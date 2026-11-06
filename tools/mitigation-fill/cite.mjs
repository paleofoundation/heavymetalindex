// Build the citation markup for one source page and, with --append, add the
// matching line inside an existing references marker.
//
//   node tools/mitigation-fill/cite.mjs --page wiki/ingredients/olive-oil.md --doi 10.1/x
//   node tools/mitigation-fill/cite.mjs --page wiki/ingredients/olive-oil.md --source wiki/sources/key.md --append
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { parseFrontmatter } from "./pages.mjs"
import { normalizeDoi } from "./search.mjs"
import { supplierHit } from "./record.mjs"

function flag(args, name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : ""
}

export function findSourceByDoi(root, doi) {
  const target = normalizeDoi(doi)
  if (!target) return null
  const dir = path.join(root, "wiki", "sources")
  if (!fs.existsSync(dir)) return null
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const head = fs.readFileSync(path.join(dir, file), "utf8").slice(0, 5000)
    const match = /^doi:\s*["']?([^\s"'#]+)/m.exec(head)
    if (match && normalizeDoi(match[1]) === target) return `sources/${file.slice(0, -3)}`
  }
  return null
}

export function existingNumber(pageText, citeKey) {
  const match = new RegExp(`\\[\\[sources/${citeKey}\\|(\\d+)\\]\\]`).exec(pageText)
  return match ? Number(match[1]) : null
}

export function nextCitationNumber(pageText) {
  let max = 0
  for (const match of String(pageText).matchAll(/\|(\d{1,4})\]\]/g)) max = Math.max(max, Number(match[1]))
  return max + 1
}

export function plain(value) {
  return String(value || "")
    .replace(/[\u2012\u2013\u2014\u2015]/g, " - ")
    .replace(/[<>[\]]/g, " ")
    .replace(/\|/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function escapeHtml(value) {
  return plain(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
}

function authorNames(authors) {
  const list = (Array.isArray(authors) ? authors : String(authors || "").split(/,/)).map(plain).filter(Boolean)
  if (list.length === 0) return "Authors"
  if (list.length === 1) return list[0]
  if (list.length === 2) return `${list[0]} and ${list[1]}`
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`
}

export function citationParts({ citeKey, meta, pageText }) {
  if (supplierHit(JSON.stringify(meta)) || supplierHit(citeKey)) throw new Error("supplier or manufacturer term")
  const number = existingNumber(pageText, citeKey) || nextCitationNumber(pageText)
  const title = plain(meta.title)
  const journal = plain(meta.publication || meta.journal || "")
  const year = meta.year || ""
  const doi = normalizeDoi(meta.doi)
  const names = authorNames(meta.authors)
  const cardAuthors = year ? `${names} · ${year}` : names
  const href = `../sources/${citeKey}`
  const compiled = pageText.includes('class="cite"')
  const link = `[[sources/${citeKey}|${number}]]`
  const sup = compiled
    ? `<sup class="cite">${link}<span class="cite-card"><span class="cite-card-head"><span class="cite-card-authors">${escapeHtml(cardAuthors)}</span><a class="cite-card-title" href="${href}">${escapeHtml(title)}</a></span><span class="cite-card-body"><span class="cite-card-journal">${escapeHtml(journal)}</span><a class="cite-card-review" href="${href}">Read source →</a></span></span></sup>`
    : link
  const doiBit = doi ? ` · [doi.org/${doi}](https://doi.org/${doi})` : ""
  const reference = `${number}. [[sources/${citeKey}|${title}]]<span class="hmi-ref-meta">${escapeHtml(names)} · ${escapeHtml(journal)} · ${year}${doiBit}</span><span class="hmi-ref-tag">Peer-reviewed</span>`
  return { citeKey, number, sup, reference, already: existingNumber(pageText, citeKey) != null }
}

export function appendReference(pageText, reference, citeKey) {
  if (!pageText.includes("<!-- BEGIN: hmi-page-references -->")) return { text: pageText, appended: false }
  if (pageText.includes(`[[sources/${citeKey}|`)) return { text: pageText, appended: false }
  const end = "<!-- END: hmi-page-references -->"
  if (!pageText.includes(end)) return { text: pageText, appended: false }
  return { text: pageText.replace(end, `${reference}\n${end}`), appended: true }
}

function main() {
  const args = process.argv.slice(2)
  const root = flag(args, "--root") || process.cwd()
  const pageRel = flag(args, "--page")
  const doi = flag(args, "--doi")
  if (doi && !flag(args, "--source")) {
    const found = findSourceByDoi(root, doi)
    if (!found) {
      console.log(JSON.stringify({ found: false, doi: normalizeDoi(doi) }))
      return
    }
    if (!pageRel) {
      console.log(JSON.stringify({ found: true, source_page: found }))
      return
    }
    const pageText = fs.readFileSync(path.join(root, pageRel), "utf8")
    const meta = parseFrontmatter(fs.readFileSync(path.join(root, "wiki", `${found}.md`), "utf8"))
    const citeKey = found.slice("sources/".length)
    const parts = citationParts({ citeKey, meta, pageText })
    console.log(JSON.stringify({ found: true, source_page: found, ...parts }))
    return
  }
  const sourceRel = flag(args, "--source")
  if (!pageRel || !sourceRel) {
    console.error("usage: cite.mjs --page <wiki page> (--doi <doi> | --source <wiki/sources/key.md>) [--append]")
    process.exit(2)
  }
  const pagePath = path.join(root, pageRel)
  const pageText = fs.readFileSync(pagePath, "utf8")
  const meta = parseFrontmatter(fs.readFileSync(path.join(root, sourceRel), "utf8"))
  const citeKey = path.basename(sourceRel, ".md")
  const parts = citationParts({ citeKey, meta, pageText })
  let appended = false
  if (args.includes("--append")) {
    const update = appendReference(pageText, parts.reference, citeKey)
    if (update.appended) fs.writeFileSync(pagePath, update.text)
    appended = update.appended
  }
  console.log(JSON.stringify({ ...parts, source_page: `sources/${citeKey}`, appended }))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
