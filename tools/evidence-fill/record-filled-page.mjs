// Record one filled page in the structure, openings, and thin-with-evidence
// baselines. Other pages stay as they are. This does not run --write-baseline.
//
//   node tools/evidence-fill/record-filled-page.mjs --page wiki/ingredients/<slug>.md
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import matter from "gray-matter"
import { BASELINE_PATH, CHECKS, pageStructureFailures, scanRepo } from "../audit-page-structure.mjs"
import { openingFindings } from "../build-page-openings.mjs"
import { loadEvidenceEntities, pageStillThin } from "../fanout/audit-thin-with-evidence.mjs"

export const OPENINGS_BASELINE = "data/evidence/page-openings-baseline.json"
export const THIN_BASELINE = "data/fanout/thin-with-evidence-baseline.txt"

export function syncStructureBaseline(baseline, pageRel, failures) {
  const failing = new Set(failures)
  let changed = false
  for (const check of CHECKS) {
    const block = baseline.checks?.[check]
    if (!block || !Array.isArray(block.paths)) continue
    const had = block.paths.includes(pageRel)
    const now = failing.has(check)
    if (now && !had) {
      block.paths.push(pageRel)
      block.paths.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      block.pages = block.paths.length
      changed = true
    } else if (!now && had) {
      block.paths = block.paths.filter((rel) => rel !== pageRel)
      block.pages = block.paths.length
      changed = true
    }
  }
  return changed
}

// The scanned page total is one number, so sibling fills that each add a page
// collide on it. Set it from the working tree after this page is recorded.
// Check path lists stay limited to this page.
export function syncCorpusCounts(baseline, scan) {
  let changed = false
  if (baseline.pages_scanned !== scan.pages) {
    baseline.pages_scanned = scan.pages
    changed = true
  }
  if (baseline.stubs_exempt_from_sections !== scan.stubs) {
    baseline.stubs_exempt_from_sections = scan.stubs
    changed = true
  }
  return changed
}

export function removeListedPage(text, pageRel) {
  const eol = text.includes("\r\n") ? "\r\n" : "\n"
  const endsWithNl = text.endsWith("\n")
  const lines = text.split(/\r?\n/)
  const quoted = JSON.stringify(pageRel)
  let removed = false
  const kept = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed === quoted || trimmed === `${quoted},`) {
      removed = true
      continue
    }
    kept.push(line)
  }
  if (!removed) return text
  for (let i = kept.length - 1; i >= 0; i--) {
    const trimmed = kept[i].trim()
    if (!trimmed || trimmed === "}" || trimmed === "}," || trimmed === "]" || trimmed === "],") continue
    const later = kept.slice(i + 1).map((line) => line.trim()).filter(Boolean)
    if (trimmed.endsWith(",") && (later[0] === "]" || later[0] === "],")) {
      kept[i] = kept[i].replace(/,(\s*)$/, "$1")
    }
    break
  }
  let out = kept.join(eol)
  if (endsWithNl && !out.endsWith("\n")) out += eol
  return out
}

export function removeThinEntity(text, entity) {
  const eol = text.includes("\r\n") ? "\r\n" : "\n"
  const endsWithNl = text.endsWith("\n")
  const lines = text.split(/\r?\n/)
  let removed = false
  const kept = lines.filter((line) => {
    const body = line.replace(/#.*/, "").trim()
    if (body === entity) {
      removed = true
      return false
    }
    return true
  })
  if (!removed) return text
  let out = kept.join(eol)
  if (endsWithNl && !out.endsWith("\n")) out += eol
  return out
}

function entityOf(pageRel) {
  return pageRel.replace(/^wiki\//, "").replace(/\.md$/, "")
}

export function pageIsThinWithEvidence(root, pageRel) {
  const abs = path.join(root, pageRel)
  if (!fs.existsSync(abs)) return false
  const markdown = fs.readFileSync(abs, "utf8")
  let frontmatter = {}
  try {
    frontmatter = matter(markdown).data ?? {}
  } catch {
    frontmatter = {}
  }
  if (!pageStillThin(frontmatter, markdown)) return false
  const ids = new Set([entityOf(pageRel)])
  if (frontmatter.category) ids.add(`products/${frontmatter.category}`)
  if (frontmatter.commodity) ids.add(`ingredients/${frontmatter.commodity}`)
  const evidence = loadEvidenceEntities(root)
  return [...ids].some((id) => evidence.has(id))
}

export function recordFilledPage(root, pageRel) {
  const result = { structure: false, openings: false, thin: false }
  const failures = pageStructureFailures(root, pageRel)
  const structurePath = path.join(root, BASELINE_PATH)
  if (fs.existsSync(structurePath)) {
    const baseline = JSON.parse(fs.readFileSync(structurePath, "utf8"))
    let changed = false
    if (Array.isArray(failures)) changed = syncStructureBaseline(baseline, pageRel, failures)
    if (syncCorpusCounts(baseline, scanRepo(root))) changed = true
    if (changed) {
      fs.writeFileSync(structurePath, `${JSON.stringify(baseline, null, 2)}\n`)
      result.structure = true
    }
  }
  const openingsPath = path.join(root, OPENINGS_BASELINE)
  const pageAbs = path.join(root, pageRel)
  if (fs.existsSync(openingsPath) && fs.existsSync(pageAbs)) {
    const findings = openingFindings(pageRel, fs.readFileSync(pageAbs, "utf8"))
    if (findings && findings.length === 0) {
      const before = fs.readFileSync(openingsPath, "utf8")
      const after = removeListedPage(before, pageRel)
      if (after !== before) {
        fs.writeFileSync(openingsPath, after)
        result.openings = true
      }
    }
  }
  const thinPath = path.join(root, THIN_BASELINE)
  if (fs.existsSync(thinPath) && !pageIsThinWithEvidence(root, pageRel)) {
    const before = fs.readFileSync(thinPath, "utf8")
    const after = removeThinEntity(before, entityOf(pageRel))
    if (after !== before) {
      fs.writeFileSync(thinPath, after)
      result.thin = true
    }
  }
  return result
}

function main() {
  const args = process.argv.slice(2)
  const pageFlag = args.indexOf("--page")
  const page = pageFlag >= 0 ? args[pageFlag + 1] : ""
  const rootFlag = args.indexOf("--root")
  const root = rootFlag >= 0 ? args[rootFlag + 1] : process.cwd()
  if (!page) {
    console.error("usage: record-filled-page.mjs --page wiki/<family>/<slug>.md [--root <repo>]")
    process.exit(2)
  }
  const result = recordFilledPage(root, page)
  console.log(JSON.stringify({ page, ...result }))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
