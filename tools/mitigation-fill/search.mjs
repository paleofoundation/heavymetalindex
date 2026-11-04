// Search Europe PMC and OpenAlex for open-access papers that name one food
// and a heavy-metal reduction. Only papers with fetched full text are saved.
// Numbers are not extracted here. The writer copies them from the saved text.
//
//   node tools/mitigation-fill/search.mjs --pages ingredients/olive-oil --out <dir>
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"
import { loadPages, namePattern, searchNames } from "./pages.mjs"

export const MAILTO = "editorial@heavymetalindex.com"
export const USER_AGENT = "HeavyMetalIndexMitigationFill/1.0 (https://github.com/paleofoundation/heavymetalindex)"
const HEADERS = { "user-agent": USER_AGENT, accept: "application/json" }

export function normalizeDoi(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "")
    .replace(/^doi:/i, "")
    .replace(/[.)\],;]+$/g, "")
    .toLowerCase()
}

export function fulltextName(doi) {
  return `${normalizeDoi(doi).replace(/[^a-z0-9.]+/g, "_").replace(/^_|_$/g, "")}.txt`
}

export function europePmcQuery(names) {
  const food = names.slice(0, 4).map((name) => `"${name.replace(/"/g, "")}"`).join(" OR ")
  const metals = ["cadmium", "arsenic", "mercury", "nickel", "chromium", "heavy metal", "heavy metals", "lead content", "lead concentration"]
    .map((term) => `"${term}"`)
    .join(" OR ")
  const actions = ["wash*", "peel*", "refin*", "soak*", "cultivar", "blanch*", "deodori*", "bleach*", "\"soil amendment\""].join(" OR ")
  return `(${food}) AND (${metals}) AND (${actions}) AND OPEN_ACCESS:Y AND HAS_FT:Y`
}

export function openAlexQuery(names) {
  return `${names[0]} heavy metal reduction washing peeling refining soaking cultivar`.slice(0, 180)
}

function asList(value) {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

export function abstractFromInvertedIndex(index) {
  if (!index || typeof index !== "object") return ""
  const words = []
  for (const [word, positions] of Object.entries(index)) {
    for (const position of positions || []) words[position] = word
  }
  return words.filter((word) => word != null).join(" ")
}

export function normalizeEuropePmc(record) {
  const urls = asList(record.fullTextUrlList && record.fullTextUrlList.fullTextUrl)
  const pdf = urls.find((item) => /pdf/i.test(`${item.documentStyle || ""} ${item.url || ""}`))
  return {
    doi: normalizeDoi(record.doi),
    title: String(record.title || "").replace(/<[^>]+>/g, ""),
    abstract: String(record.abstractText || "").replace(/<[^>]+>/g, ""),
    year: Number(record.pubYear) || null,
    authors: String(record.authorString || ""),
    venue: String(record.journalTitle || ""),
    pmcid: record.pmcid || "",
    open_access: record.isOpenAccess === "Y" || record.isOpenAccess === true,
    pdf_url: pdf ? pdf.url : "",
    source: "europepmc",
  }
}

export function normalizeOpenAlex(record) {
  const authors = asList(record.authorships).map((item) => item.author && item.author.display_name).filter(Boolean)
  const location = record.primary_location || {}
  const pdf = location.pdf_url || (record.open_access && record.open_access.oa_url) || ""
  return {
    doi: normalizeDoi(record.doi),
    title: String(record.title || ""),
    abstract: abstractFromInvertedIndex(record.abstract_inverted_index),
    year: Number(record.publication_year) || null,
    authors: authors.join(", "),
    venue: (location.source && location.source.display_name) || "",
    pmcid: "",
    open_access: Boolean(record.open_access && record.open_access.is_oa),
    pdf_url: /\.pdf($|\?)/i.test(pdf) ? pdf : "",
    oa_url: (record.open_access && record.open_access.oa_url) || "",
    source: "openalex",
  }
}

const METAL_SOURCE = "heavy metals?|cadmium|arsenic|mercury|methylmercury|nickel|chromium|aluminium|aluminum|lead"
const REDUCTION_WORD = /\b(reduc\w*|remov\w*|mitigat\w*|decreas\w*|lower\w*|declin\w*|fell|fall\w*|drop\w*|wash\w*|peel\w*|refin\w*|soak\w*|blanch\w*|ferment\w*|dehull\w*|polish\w*|rins\w*|deodori\w*|bleach\w*|cultivar\w*|variet\w*)/i
const INTERVENTION_WORD = /\b(wash\w*|peel\w*|refin\w*|soak\w*|blanch\w*|ferment\w*|dehull\w*|polish\w*|rins\w*|deodori\w*|bleach\w*|cultivar\w*|variet\w*|soil amendment)\b/i

function eachMetal(text, visit) {
  const pattern = new RegExp(`\\b(${METAL_SOURCE})\\b`, "gi")
  let match
  while ((match = pattern.exec(text))) {
    if (match[0].toLowerCase() === "lead") {
      const after = text.slice(match.index, match.index + 20)
      if (/^leads?\s+to\b/i.test(after) || /^lead(?:ing)?\s+author\b/i.test(after)) continue
    }
    if (visit(match) === true) return true
  }
  return false
}

export function hasMetal(text) {
  return eachMetal(String(text || ""), () => true)
}

export function mitigationContext(text) {
  const value = String(text || "")
  return eachMetal(value, (match) => {
    const start = Math.max(0, match.index - 160)
    const window = value.slice(start, match.index + match[0].length + 160)
    return REDUCTION_WORD.test(window)
  })
}

export function mechanismOnly(paper) {
  const mechanism = /\b(mechanism|signalling|signaling|transporter|gene expression|oxidative stress|pathway)\b/i.test(paper.title || "")
  const measured = /\d/.test(paper.abstract || "") && /(?:%|µg|ug\/|mg\/|ng\/|ppm|ppb|fold)/i.test(paper.abstract || "")
  return mechanism && !measured
}

export function classifyCandidate(paper, names) {
  if (!paper.doi) return { keep: false, reason: "no_doi" }
  if (!paper.open_access) return { keep: false, reason: "not_open_access" }
  const blob = `${paper.title || ""} ${paper.abstract || ""}`
  if (!names.some((name) => namePattern(name).test(blob))) return { keep: false, reason: "class_level_name_absent" }
  if (mechanismOnly(paper)) return { keep: false, reason: "mechanism_only" }
  if (!hasMetal(blob)) return { keep: false, reason: "no_measured_reduction_context" }
  if (!mitigationContext(blob) && !INTERVENTION_WORD.test(blob)) return { keep: false, reason: "no_measured_reduction_context" }
  return { keep: true, reason: "" }
}

export function xmlToText(xml) {
  return String(xml)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

export function normalizePrinted(text) {
  return String(text || "")
    .replace(/\u00ad/g, "")
    .replace(/[\u2010-\u2015\u2212]/g, "-")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function quoteInText(quote, fullText) {
  const left = normalizePrinted(quote)
  const right = normalizePrinted(fullText)
  if (left.length < 20 || !/\d/.test(left)) return false
  return right.includes(left)
}

const CONCENTRATION = /\b(?:µg|ug|mg|ng|pg)\s*\/\s*(?:kg|g|l)\b|\b(?:ppm|ppb)\b/i
const BASIS = /\b(?:dry|wet|fresh|fw|dw|as[- ]sold|oil basis|fresh weight|dry weight)\b/i

export function unitAmbiguous(quote) {
  if (!CONCENTRATION.test(quote)) return false
  return !BASIS.test(quote)
}

export function isReview(paper) {
  const title = paper.title || ""
  const blob = `${title} ${paper.abstract || ""}`
  return /\b(systematic review|meta-analysis|meta analysis|literature review|scoping review|narrative review)\b/i.test(blob)
    || /\ba review\b/i.test(title)
}

export function rankCandidates(papers, names, index = []) {
  return [...papers].sort((a, b) => {
    const score = (paper) => {
      const title = paper.title || ""
      const blob = `${title} ${paper.abstract || ""}`
      let value = 0
      if (isReview(paper)) value += 30
      value += mentionedPages(blob, index).length * 3
      if (names.some((name) => namePattern(name).test(title))) value += 4
      if (mitigationContext(title)) value += 4
      if (mitigationContext(blob)) value += 2
      return value
    }
    const delta = score(b) - score(a)
    if (delta !== 0) return delta
    return (b.year || 0) - (a.year || 0)
  })
}

function mentionedPages(text, index) {
  const hits = []
  for (const entry of index) {
    if (entry.patterns.some((pattern) => pattern.test(text))) hits.push(entry.page)
  }
  return hits
}

async function getResponse(url, fetchImpl, accept) {
  const response = await fetchImpl(url, {
    headers: { ...HEADERS, accept: accept || HEADERS.accept },
    redirect: "follow",
    signal: AbortSignal.timeout(45000),
  })
  if (response.status === 429) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return fetchImpl(url, {
      headers: { ...HEADERS, accept: accept || HEADERS.accept },
      redirect: "follow",
      signal: AbortSignal.timeout(45000),
    })
  }
  return response
}

async function searchEuropePmc(names, fetchImpl) {
  const query = europePmcQuery(names)
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=50&resultType=core`
  const response = await getResponse(url, fetchImpl, "application/json")
  if (!response.ok) throw new Error(`europepmc ${response.status}`)
  const payload = await response.json()
  const results = asList(payload.resultList && payload.resultList.result)
  return results.map(normalizeEuropePmc)
}

async function searchOpenAlex(names, fetchImpl) {
  const query = openAlexQuery(names)
  const url = `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=is_oa:true&per-page=50&mailto=${encodeURIComponent(MAILTO)}`
  const response = await getResponse(url, fetchImpl, "application/json")
  if (!response.ok) throw new Error(`openalex ${response.status}`)
  const payload = await response.json()
  return asList(payload.results).map(normalizeOpenAlex)
}

function capText(text) {
  const limit = 200000
  if (text.length <= limit) return text
  return `${text.slice(0, limit)}\n\n[truncated by the mitigation fill to the first 200000 characters]\n`
}

async function europePmcXml(pmcid, fetchImpl) {
  if (!pmcid) return ""
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/${encodeURIComponent(pmcid)}/fullTextXML`
  const response = await getResponse(url, fetchImpl, "application/xml, text/xml")
  if (!response.ok) return ""
  const xml = await response.text()
  if (!/<article|<fulltext|<body/i.test(xml)) return ""
  return capText(xmlToText(xml))
}

async function pdfToText(url, fetchImpl) {
  const response = await getResponse(url, fetchImpl, "application/pdf")
  if (!response.ok) throw new Error(`pdf ${response.status}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  if (bytes.length < 100 || bytes.length > 20_000_000) throw new Error("pdf size")
  if (bytes.slice(0, 4).toString() !== "%PDF") throw new Error("not a pdf")
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mitigation-pdf-"))
  const pdfPath = path.join(dir, "paper.pdf")
  const txtPath = path.join(dir, "paper.txt")
  fs.writeFileSync(pdfPath, bytes)
  try {
    execFileSync("pdftotext", ["-layout", "-q", pdfPath, txtPath], { timeout: 60000 })
    return capText(fs.readFileSync(txtPath, "utf8"))
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
}

async function unpaywallPdf(doi, fetchImpl) {
  const url = `https://api.unpaywall.org/v2/${encodeURIComponent(doi)}?email=${encodeURIComponent(MAILTO)}`
  const response = await getResponse(url, fetchImpl, "application/json")
  if (!response.ok) return ""
  const payload = await response.json()
  const location = payload.best_oa_location || {}
  return location.url_for_pdf || ""
}

async function saveFullText(paper, fetchImpl) {
  const xml = await europePmcXml(paper.pmcid, fetchImpl)
  if (xml && xml.length > 400) return xml
  const pdfs = [paper.pdf_url, paper.oa_url].filter((url) => url && /\.pdf($|\?)/i.test(url))
  if (!pdfs.length && paper.doi) {
    try {
      const extra = await unpaywallPdf(paper.doi, fetchImpl)
      if (extra) pdfs.push(extra)
    } catch {
      // Unpaywall is a fallback. A miss is not a failed search.
    }
  }
  for (const url of pdfs) {
    try {
      const text = await pdfToText(url, fetchImpl)
      if (text && text.length > 400) return text
    } catch {
      // Try the next open-access file.
    }
  }
  return ""
}

export async function searchFood(page, { fetchImpl = fetch, perPage = 5, index = [] } = {}) {
  const names = searchNames(page)
  const errors = []
  const found = []
  try {
    found.push(...await searchEuropePmc(names, fetchImpl))
  } catch (error) {
    errors.push(`europepmc: ${error.message}`)
  }
  try {
    found.push(...await searchOpenAlex(names, fetchImpl))
  } catch (error) {
    errors.push(`openalex: ${error.message}`)
  }
  const byDoi = new Map()
  const excluded = []
  for (const paper of found) {
    const verdict = classifyCandidate(paper, names)
    if (!verdict.keep) {
      if (paper.doi || paper.title) excluded.push({ doi: paper.doi, title: paper.title, reason: verdict.reason })
      continue
    }
    const prev = byDoi.get(paper.doi)
    if (!prev) byDoi.set(paper.doi, paper)
    else if (!prev.pmcid && paper.pmcid) byDoi.set(paper.doi, { ...prev, ...paper, abstract: prev.abstract || paper.abstract })
  }
  const ranked = rankCandidates([...byDoi.values()], names, index).slice(0, perPage)
  const papers = []
  for (const paper of ranked) {
    const file = fulltextName(paper.doi)
    let text = ""
    try {
      text = await saveFullText(paper, fetchImpl)
    } catch (error) {
      errors.push(`${paper.doi}: ${error.message}`)
    }
    if (!text) {
      excluded.push({ doi: paper.doi, title: paper.title, reason: "no_full_text" })
      continue
    }
    const blob = `${paper.title} ${paper.abstract}`
    const mentioned = mentionedPages(blob, index)
    papers.push({
      ...paper,
      fulltext_file: file,
      fulltext: text,
      review: isReview(paper),
      foods_named: mentioned.length,
      mentioned_pages: mentioned,
    })
  }
  return { page: page.page, names, query: europePmcQuery(names), papers, excluded, errors }
}

function flag(args, name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : ""
}

async function main() {
  const args = process.argv.slice(2)
  const root = flag(args, "--root") || process.cwd()
  const out = flag(args, "--out")
  const pagesArg = flag(args, "--pages")
  const perPage = Number(flag(args, "--per-page") || 5)
  if (!out || !pagesArg) {
    console.error("usage: search.mjs --pages ingredients/olive-oil,products/rice --out <dir>")
    process.exit(2)
  }
  const wanted = new Set(pagesArg.split(",").map((item) => item.trim()).filter(Boolean))
  const all = loadPages(root)
  const index = all.map((page) => ({ page: page.page, patterns: searchNames(page).map(namePattern) }))
  const selected = all.filter((page) => wanted.has(page.page))
  fs.mkdirSync(out, { recursive: true })
  const manifest = { generated_at: new Date().toISOString(), pages: [] }
  for (const page of selected) {
    const result = await searchFood(page, { perPage, index })
    for (const paper of result.papers) {
      const dest = path.join(out, paper.fulltext_file)
      fs.writeFileSync(dest, paper.fulltext)
      delete paper.fulltext
    }
    manifest.pages.push(result)
    console.log(`${page.page}: ${result.papers.length} full texts, ${result.excluded.length} excluded`)
  }
  fs.writeFileSync(path.join(out, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
  const papers = manifest.pages.reduce((sum, page) => sum + page.papers.length, 0)
  console.log(JSON.stringify({ papers, manifest: path.join(out, "manifest.json") }))
  const output = process.env.GITHUB_OUTPUT
  if (output) fs.appendFileSync(output, `papers=${papers}\nmanifest=${path.join(out, "manifest.json")}\n`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
