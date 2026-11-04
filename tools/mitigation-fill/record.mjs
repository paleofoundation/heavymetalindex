// The reusable DOI map and the coverage report.
// An effect is stored only when it is a quotation of the saved full text.
//
//   node tools/mitigation-fill/record.mjs add --doi 10.1/x --effect-file paper.txt --effect "..." --ingredient olive-oil --metal lead --intervention refining --source sources/key
//   node tools/mitigation-fill/record.mjs coverage --write [--manifest <manifest.json>]
//   node tools/mitigation-fill/record.mjs pr-body --pages ingredients/olive-oil --before-map before.json
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { comparePages, loadPages } from "./pages.mjs"
import { fulltextName, normalizeDoi, quoteInText, unitAmbiguous } from "./search.mjs"

export const MAP_REL = "data/mitigation-map.json"
export const COVERAGE_JSON_REL = "data/mitigation-coverage.json"
export const COVERAGE_MD_REL = "docs/mitigation-coverage.md"

const SUPPLIER = [
  /\bGRN\s*609\b/i,
  /\bGRN\s*788\b/i,
  /\bGRN\s*804\b/i,
  /\bGRN\s*851\b/i,
  new RegExp("Oryz" + "atein", "i"),
  new RegExp("\\bRPN" + "2026\\b"),
  new RegExp("\\bAx" + "iom\\b", "i"),
]

const METAL_NAMES = new Map([
  ["pb", "lead"], ["lead", "lead"],
  ["cd", "cadmium"], ["cadmium", "cadmium"],
  ["tas", "total arsenic"], ["total arsenic", "total arsenic"], ["arsenic", "total arsenic"],
  ["ias", "inorganic arsenic"], ["inorganic arsenic", "inorganic arsenic"],
  ["mehg", "methylmercury"], ["methylmercury", "methylmercury"],
  ["thg", "total mercury"], ["mercury", "total mercury"], ["total mercury", "total mercury"],
  ["ni", "nickel"], ["nickel", "nickel"],
  ["al", "aluminum"], ["aluminum", "aluminum"], ["aluminium", "aluminum"],
  ["cr", "chromium"], ["chromium", "chromium"],
  ["cr-vi", "hexavalent chromium"], ["hexavalent chromium", "hexavalent chromium"],
  ["sn", "tin"], ["tin", "tin"],
  ["sb", "antimony"], ["antimony", "antimony"],
  ["u", "uranium"], ["uranium", "uranium"],
])

export function supplierHit(text) {
  return SUPPLIER.some((pattern) => pattern.test(String(text || "")))
}

export function emptyMap() {
  return {
    version: 1,
    description: "DOI to ingredients, metals, intervention, and the effect as printed in the open-access full text. One paper may name several foods.",
    papers: {},
  }
}

export function readMap(file) {
  if (!fs.existsSync(file)) return emptyMap()
  const parsed = JSON.parse(fs.readFileSync(file, "utf8"))
  if (!parsed.papers || typeof parsed.papers !== "object") parsed.papers = {}
  return parsed
}

export function writeMap(file, map) {
  const papers = {}
  for (const doi of Object.keys(map.papers).sort()) papers[doi] = map.papers[doi]
  const body = { version: 1, description: map.description || emptyMap().description, papers }
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, JSON.stringify(body, null, 2) + "\n")
  return body
}

function slugList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter((item) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item))
}

export function normalizeMetal(value) {
  const key = String(value || "").trim().toLowerCase()
  return METAL_NAMES.get(key) || ""
}

export function addMapping(map, input) {
  const doi = normalizeDoi(input.doi)
  if (!/^10\.\d{4,9}\/\S+$/.test(doi)) throw new Error(`not a DOI: ${input.doi}`)
  const effect = String(input.effect || "").trim()
  if (supplierHit(effect) || supplierHit(input.title) || supplierHit(input.intervention)) {
    throw new Error("supplier or manufacturer term")
  }
  if (!input.fullText || !quoteInText(effect, input.fullText)) {
    throw new Error("effect is not a quotation of the saved full text")
  }
  const ingredients = slugList(input.ingredients)
  const products = slugList(input.products)
  if (!ingredients.length && !products.length) throw new Error("name at least one ingredient or product slug")
  const metals = String(input.metals || "").split(",").map(normalizeMetal).filter(Boolean)
  if (!metals.length) throw new Error("name at least one metal")
  const intervention = String(input.intervention || "").trim()
  if (!intervention || intervention.length > 80) throw new Error("intervention is required")
  const source = String(input.source || "").trim()
  if (!/^sources\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source)) throw new Error("source must look like sources/<cite-key>")
  const mapping = {
    ingredients,
    products,
    metals: [...new Set(metals)],
    intervention,
    effect_as_printed: effect,
    unit_ambiguous: unitAmbiguous(effect),
  }
  const paper = map.papers[doi] || {
    doi,
    title: String(input.title || "").trim(),
    year: Number(input.year) || null,
    source_page: source,
    mappings: [],
  }
  if (input.title) paper.title = String(input.title).trim()
  if (input.year) paper.year = Number(input.year) || paper.year
  paper.source_page = source
  const fingerprint = JSON.stringify(mapping)
  if (!paper.mappings.some((item) => JSON.stringify(item) === fingerprint)) paper.mappings.push(mapping)
  map.papers[doi] = paper
  return { doi, mapping }
}

export function mappingsFor(map, pageId) {
  const [family, slug] = String(pageId).split("/")
  const field = family === "products" ? "products" : "ingredients"
  const hits = []
  for (const paper of Object.values(map.papers || {})) {
    for (const mapping of paper.mappings || []) {
      if ((mapping[field] || []).includes(slug)) hits.push({ ...mapping, doi: paper.doi, source_page: paper.source_page, title: paper.title })
    }
  }
  return hits
}

export function coverageRows(root, map) {
  return loadPages(root).sort(comparePages).map((page) => {
    const mapped = mappingsFor(map, page.page)
    const metals = [...new Set(mapped.flatMap((item) => item.metals))].sort()
    return {
      page: page.page,
      family: page.family,
      slug: page.slug,
      mitigation_papers: page.citations,
      metals_covered: metals,
      mapped_papers: new Set(mapped.map((item) => item.doi)).size,
    }
  })
}

export function renderCoverageMarkdown(report) {
  const zeros = report.pages.filter((page) => page.mitigation_papers === 0).length
  const lines = [
    "# Mitigation coverage",
    "",
    "Regenerated by `node tools/mitigation-fill/record.mjs coverage --write`. Mitigation papers are distinct source citations in that page's Mitigation section. Metals covered are the metals named on mapped open-access reduction effects in `data/mitigation-map.json`.",
    "",
    `Pages: ${report.pages.length}. Pages with zero mitigation citations: ${zeros}. The fill queue takes zero-citation pages first, with ingredients/olive-oil first among pages that share the lowest count.`,
    "",
    "| Page | Mitigation papers | Metals covered |",
    "| --- | ---: | --- |",
  ]
  for (const page of report.pages) {
    lines.push(`| ${page.page} | ${page.mitigation_papers} | ${page.metals_covered.join(", ")} |`)
  }
  lines.push("")
  return lines.join("\n")
}

export function buildCoverage(root, map, manifest) {
  const pages = coverageRows(root, map)
  return {
    version: 1,
    generated: new Date().toISOString(),
    pages_at_zero: pages.filter((page) => page.mitigation_papers === 0).length,
    last_search: manifest
      ? {
          generated_at: manifest.generated_at || null,
          pages: (manifest.pages || []).map((page) => ({
            page: page.page,
            full_texts: (page.papers || []).length,
            excluded: (page.excluded || []).length,
            errors: page.errors || [],
          })),
        }
      : null,
    pages,
  }
}

export function writeCoverage(root, map, manifest) {
  const report = buildCoverage(root, map, manifest)
  const jsonPath = path.join(root, COVERAGE_JSON_REL)
  const mdPath = path.join(root, COVERAGE_MD_REL)
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true })
  fs.mkdirSync(path.dirname(mdPath), { recursive: true })
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + "\n")
  fs.writeFileSync(mdPath, renderCoverageMarkdown(report))
  return report
}

export function addedPapers(before, after) {
  const prior = new Set(Object.keys((before && before.papers) || {}))
  const added = []
  for (const [doi, paper] of Object.entries((after && after.papers) || {})) {
    if (!prior.has(doi)) added.push(paper)
  }
  return added
}

export function renderPrBody({ pages, beforeMap, afterMap, coverage }) {
  const selected = pages || []
  const added = addedPapers(beforeMap, afterMap)
  const byId = new Map((coverage.pages || []).map((page) => [page.page, page]))
  const zeros = (coverage.pages || []).filter((page) => page.mitigation_papers === 0)
  const lines = [
    "Automated mitigation evidence. Open-access full text only. Effects are quotations, not calculated reductions.",
    "",
    "Pages touched:",
  ]
  if (!selected.length) lines.push("- none")
  for (const page of selected) {
    const row = byId.get(page)
    const count = row ? row.mitigation_papers : "unknown"
    const metals = row && row.metals_covered.length ? row.metals_covered.join(", ") : "none mapped"
    lines.push(`- \`${page}\`: ${count} mitigation papers; metals covered: ${metals}`)
  }
  lines.push("", "Papers added:")
  if (!added.length) lines.push("- none")
  for (const paper of added) {
    const foods = [...new Set((paper.mappings || []).flatMap((item) => [...(item.ingredients || []), ...(item.products || [])]))]
    const metals = [...new Set((paper.mappings || []).flatMap((item) => item.metals || []))]
    const interventions = [...new Set((paper.mappings || []).map((item) => item.intervention))]
    lines.push(`- ${paper.doi}: ${paper.title || "untitled"} (${foods.join(", ")}; ${metals.join(", ")}; ${interventions.join(", ")})`)
  }
  lines.push(
    "",
    `Pages still at zero mitigation papers: ${zeros.length}.`,
    "",
    "Next in the zero-citation queue:",
  )
  const preview = zeros.slice(0, 15)
  if (!preview.length) lines.push("- none")
  for (const page of preview) lines.push(`- \`${page.page}\``)
  lines.push(
    "",
    "Direction: toward the literature.",
    "",
    "The workflow ran the evidence-fill diff gate, `npm test`, `npm run lint:page-structure`, `npm run lint:page-openings`, `npm run lint:thin-with-evidence`, and `npm run check` before opening this pull request. CI still runs test, build-audits, and content-gate.",
  )
  return lines.join("\n") + "\n"
}

function argValue(args, name) {
  const values = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name && args[i + 1]) values.push(args[++i])
  }
  return values
}

function one(args, name) {
  const values = argValue(args, name)
  return values.length ? values[values.length - 1] : ""
}

function main() {
  const [command, ...args] = process.argv.slice(2)
  const root = one(args, "--root") || process.cwd()
  if (command === "add") {
    const effectFile = one(args, "--effect-file")
    const mapPath = one(args, "--map") || path.join(root, MAP_REL)
    const map = readMap(mapPath)
    const result = addMapping(map, {
      doi: one(args, "--doi"),
      title: one(args, "--title"),
      year: one(args, "--year"),
      ingredients: argValue(args, "--ingredient").concat(one(args, "--ingredients")).join(","),
      products: argValue(args, "--product").concat(one(args, "--products")).join(","),
      metals: argValue(args, "--metal").concat(one(args, "--metals")).join(","),
      intervention: one(args, "--intervention"),
      effect: one(args, "--effect"),
      source: one(args, "--source"),
      fullText: effectFile ? fs.readFileSync(effectFile, "utf8") : "",
    })
    writeMap(mapPath, map)
    const file = effectFile ? path.basename(effectFile) : fulltextName(result.doi)
    console.log(JSON.stringify({ ...result, fulltext_file: file, unit_ambiguous: result.mapping.unit_ambiguous }))
    return
  }
  if (command === "coverage") {
    const map = readMap(one(args, "--map") || path.join(root, MAP_REL))
    const manifestPath = one(args, "--manifest")
    const manifest = manifestPath && fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : null
    const report = writeCoverage(root, map, manifest)
    console.log(`coverage: ${report.pages.length} pages, ${report.pages_at_zero} at zero`)
    return
  }
  if (command === "pr-body") {
    const pages = (one(args, "--pages") || "").split(",").map((item) => item.trim()).filter(Boolean)
    const before = readMap(one(args, "--before-map") || path.join(root, MAP_REL))
    const after = readMap(one(args, "--map") || path.join(root, MAP_REL))
    const coveragePath = path.join(root, COVERAGE_JSON_REL)
    const coverage = fs.existsSync(coveragePath) ? JSON.parse(fs.readFileSync(coveragePath, "utf8")) : { pages: [] }
    process.stdout.write(renderPrBody({ pages, beforeMap: before, afterMap: after, coverage }))
    return
  }
  console.error("usage: record.mjs add|coverage|pr-body")
  process.exit(2)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
