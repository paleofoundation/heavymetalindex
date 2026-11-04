import fs from "node:fs"
import path from "node:path"
import { citationReviewIssue, isRetiredRecord } from "./source-publication.mjs"

// Pages that receive a 301 (fold targets such as soft-drink-bases) stay indexable whatever
// their stub status: redirected URLs land there (HMI-HELD-TRIAGE-1, Elon 26 Oct 2026 04:18 (5)).
let cachedTargets
export function redirectTargets(root = process.cwd()) {
  if (cachedTargets && cachedTargets.root === root) return cachedTargets.set
  const set = new Set()
  const add = (dest) => {
    const slug = String(dest ?? "").split(/[#?]/)[0].replace(/^\/+|\/+$/g, "")
    if (slug && !/^[a-z]+:/i.test(slug)) set.add(slug)
  }
  try {
    for (const r of JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8")).redirects ?? []) add(r.destination)
  } catch {}
  try {
    for (const dest of Object.values(JSON.parse(fs.readFileSync(path.join(root, "data/redirects/aliases-301.json"), "utf8")).redirects ?? {})) add(dest)
  } catch {}
  cachedTargets = { root, set }
  return set
}

const OPERATIONAL = [
  "audits",
  "sprint-status",
  "roadmap",
  "login",
  "signup",
  "corpus/promotion-queue",
  "app",
  "lint",
]

export function isNoindex(value) {
  return (
    value === true ||
    (typeof value === "string" && ["true", "yes", "1"].includes(value.trim().toLowerCase()))
  )
}

function hasPopulatedProfile(frontmatter) {
  return Object.values(frontmatter.contamination_profile ?? {}).some(
    (cell) =>
      cell?.status === "populated" &&
      (Number(cell.n_studies) > 0 ||
        (Array.isArray(cell.typical_ppb) &&
          cell.typical_ppb.some((value) => typeof value === "number" && Number.isFinite(value)))),
  )
}

function hasPromotedSources(frontmatter, body) {
  // Routing coverage (`sources: N`) and source inventories are not promotion.
  for (const key of ["promoted_sources", "contributing_sources"]) {
    if (
      Array.isArray(frontmatter[key]) &&
      frontmatter[key].some((value) => typeof value === "string" && value.trim())
    )
      return true
  }
  const summaryStart = body.indexOf("<!-- BEGIN: hmi-hmtc-evidence-summary -->")
  const summaryEnd = body.indexOf("<!-- END: hmi-hmtc-evidence-summary -->", summaryStart)
  if (summaryStart >= 0 && summaryEnd > summaryStart) {
    const summary = body.slice(summaryStart, summaryEnd)
    for (const row of summary.split("\n")) {
      const cells = row
        .split(/(?<!\\)\|/)
        .slice(1, -1)
        .map((cell) => cell.trim())
      // The register-backed table separates reported concentrations (column 3)
      // from regulatory caps (column 5), with cited-source coverage in column 6.
      if (
        /^[1-9]\d* cited\b/.test(cells[5] ?? "") &&
        /\d/.test(cells[2] ?? "") &&
        /\bpp[mb]\b|[µμu]g\/(?:kg|g|L)|mg\/(?:kg|L)|ng\/g/i.test(cells[2] ?? "")
      )
        return true
    }
  }
  for (const marker of [
    "hmi-promoted-value-ranges",
    "hmi-cited-measurements",
    "hmi-fda-tds-occurrence",
  ]) {
    const start = body.indexOf(`<!-- BEGIN: ${marker} -->`)
    const end = body.indexOf(`<!-- END: ${marker} -->`, start)
    if (start < 0 || end < start) continue
    const block = body.slice(start, end)
    if (
      /\[\[sources\/[^\]\s|]+/.test(block) &&
      /\d/.test(block) &&
      /\bpp[mb]\b|[µμu]g\/(?:kg|g|L)|mg\/(?:kg|L)|ng\/g/i.test(block)
    )
      return true
  }
  return false
}

function hasCitedEvidence(body) {
  if (/data-occurrence-row|class="hmi-form-group"/.test(body)) return true
  const match = /^##\s+References\s*$/m.exec(body)
  if (!match) return false
  // Only the References section counts. A following Sources inventory is not a citation list.
  const rest = body.slice(match.index + match[0].length)
  const endMarker = rest.search(/<!--\s*END:\s*hmi-page-references\s*-->/)
  const nextHeading = rest.search(/\n##\s+/)
  const cuts = [endMarker, nextHeading].filter((index) => index >= 0)
  const section = cuts.length ? rest.slice(0, Math.min(...cuts)) : rest
  return /\[\[sources\/[^\]\s|]+/.test(section)
}

export function isLowValuePage(frontmatter = {}, slug = "", fileData = {}) {
  const normalized = String(slug)
    .replace(/^\/+|\/+$/g, "")
    .replace(/(?:^|\/)index$/, "")
    .replace(/\/$/, "")
  if (OPERATIONAL.some((prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)))
    return true
  if ((fileData.redirectTargets ?? redirectTargets()).has(normalized)) return false
  if (isRetiredRecord(frontmatter)) return true
  // A product with a taxonomy category is a live index page even when the
  // body is still a scaffold. Products with no category number stay on the
  // evidence rules until they are filed. Retired stubs are excluded above.
  const categoryNumber = frontmatter.hmtc_category
  if (
    String(frontmatter.type) === "product-category" &&
    /^products\/[^/]+$/.test(normalized) &&
    Number.isInteger(categoryNumber)
  )
    return false
  // Bibliographic review flags apply to source records; a regulation or topic page with an
  // unverified title is still a substantive page (#441 follow-up, 26 Oct 2026).
  if (normalized.startsWith("sources/") && citationReviewIssue(frontmatter)) return true

  const body = String(fileData.indexingBody ?? fileData.body ?? fileData.text ?? "")
  const food =
    ["ingredient", "product", "product-category"].includes(String(frontmatter.type)) ||
    (/^(?:ingredients|products)\/[^/]+$/.test(normalized) &&
      !/^(?:ingredients|products)\/categories$/.test(normalized) &&
      !/(?:^|\/)index$/.test(String(slug)))
  // A food page whose body cites source records or renders occurrence rows (the source-first
  // engine and reviewed builds) is substantive, whatever its legacy profile fields say.
  if (food && !hasPopulatedProfile(frontmatter) && !hasPromotedSources(frontmatter, body) && !hasCitedEvidence(body))
    return true

  // Match the generator's active body templates, not historic provenance or
  // ordinary prose discussing scaffolds. Data-bearing replacements lift the rule.
  const article = body
    .replace(/```[^\n]*\n[\s\S]*?```/g, "")
    .replace(
      /<!-- BEGIN: hmi-(?:page-history|page-references|source-legend) -->[\s\S]*?<!-- END: hmi-(?:page-history|page-references|source-legend) -->/g,
      "",
    )
  return /(?:^|\n)\s*(?:>\s*)?(?:\*{1,2})?(?:v\d+(?:\.\d+)*\s+)?(?:Step Zero scaffold\b|Provisional scaffold\b|This page is a (?:Step 0 lock scaffold|scaffolded entry)\b|This is a structural ingredient node\b|This source page is a mechanical bulk-ingest record\b)/i.test(
    article,
  )
}
