#!/usr/bin/env node
// Generate the in-prose autolink vocabulary (term -> slug) from wiki frontmatter,
// emitting quartz/plugins/transformers/autolink-terms.generated.ts, which
// autolink.ts imports and merges under its hand-curated metals map.
//
// WHY: pages link "up" to sources but not "laterally/down" to concepts. In-content
// contextual links are the high-weight signal a "See also" nav block can't give
// (SEO PageRank flow + LLMO/AEO topical authority + navigation). This generator is
// the throughput lever that scales that vocabulary across the whole corpus while
// keeping it in sync with page frontmatter (title + aliases).
//
// PRECISION FIRST — this is a defensibility-grade reference (CLAUDE.md Part 2;
// project_defensibility_landmine_sweep). A wrong link is worse than a missing one:
//   - Single-word terms are EXCLUDED by default. Only an explicit, hand-audited
//     allowlist of clearly-domain words with no ordinary-prose homograph
//     (spinach, cinnamon, turmeric, ...) may become single-word links. Common /
//     ambiguous single words (rice, salt, honey, water, juice, milk, ...) never
//     link on their own; only their multi-word forms (brown rice, sea salt) do.
//   - Multi-word terms auto-derive from title + aliases, minus generic phrases,
//     comma/parenthetical fragments, and over-long titles that never appear in
//     prose verbatim.
//   - A term claimed by two DIFFERENT pages is dropped (ambiguous target).
//   - Regulator abbreviations (FDA, EFSA, ATSDR, ...) are allowed as short terms;
//     ambiguous/too-short ones (EC, bare EPA) are excluded by name.
//   - autolink.ts additionally validates every slug against the real build graph,
//     never self-links, links first-mention-only, and caps links per page.
//
// Modes:
//   node tools/build-autolink-terms.mjs            # write the .ts file
//   node tools/build-autolink-terms.mjs --check     # exit 1 if the file is stale
//   node tools/build-autolink-terms.mjs --report    # write + print a full report

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const wikiDir = path.join(repoRoot, "wiki")
const outPath = path.join(repoRoot, "quartz/plugins/transformers/autolink-terms.generated.ts")

// Topical pages can become destinations as soon as they are published. Source
// records, operational reports and private pages are deliberately not vocabulary.
const CONCEPT_DIRS = [
  "ingredients", "products", "health", "microbiome", "testing",
  "synthesis", "mitigation", "supply-chain", "methodology",
]
const MAX_WORDS = 7 // titles longer than this never appear verbatim in prose
const MAX_CHARS = 60
const MIN_FOOD_CHARS = 4 // a food/product term shorter than this is too collidable
const MIN_ABBR_CHARS = 3 // "FDA", "CDC" — but not "EC"

// Single-word food/product terms allowed to link. Every entry is hand-verified as
// a clearly-domain word with no ordinary-prose homograph. Terms only emit if a
// page actually carries the word as its title or an alias.
const SINGLE_WORD_ALLOWLIST = new Set([
  "asparagus", "avocado", "blueberries", "broccoli", "cantaloupe", "cashews",
  "cauliflower", "cinnamon", "cocoa", "coconut", "cucumber", "cumin", "grapefruit",
  "hazelnuts", "lentils", "lettuce", "molluscs", "mushrooms", "nectarine",
  "oatmeal", "parsley", "parsnips", "pineapple", "quinoa", "raisins", "raspberries",
  "seaweed", "spinach", "strawberries", "swordfish", "turmeric", "walnuts",
  "watermelon", "applesauce", "cornbread", "mayonnaise", "margarine", "ketchup",
  "chapattis", "grapes",
  // Scientific concepts with no common-prose homograph; titles/aliases still
  // have to exist on an eligible page before these can become links.
  "glutathione", "metallothionein", "metallothioneins", "calprotectin",
  "ferroptosis", "ferritinophagy", "mismetallation", "lactoferrin",
  "dysbiosis", "metallomics", "endometriosis", "hepcidin",
])

// Terms never allowed, whatever the source. Two groups:
//  (1) the curated metals keys in autolink.ts (kept authoritative there, and
//      double-guarded here so a stray alias can never re-define one), and
//  (2) generic multi-word phrases that are too vague to point at one page.
const HARD_EXCLUDE = new Set([
  // (1) metals — see autolink.ts TERMS
  "inorganic arsenic", "hexavalent chromium", "methylmercury", "molybdenum",
  "manganese", "aluminium", "aluminum", "tellurium", "palladium", "beryllium",
  "vanadium", "chromium", "antimony", "thallium", "cadmium", "arsenic", "uranium",
  "barium", "cesium",
  // (2) generic multi-word phrases
  "other products", "refill materials", "dispensing system", "food products",
  "consumer products", "personal care products", "cleaning products",
  "case-by-case", "by functional use-case",
  // These aliases occur on narrower pages, but the phrase alone does not
  // establish either the packaging material or the formula's product form.
  "formula packaging", "foil pouch", "laminate carton",
  "soy-based formula", "soya-based formula",
])

// Regulator abbreviations that are too short or ambiguous to link.
const ABBR_EXCLUDE = new Set(["ec", "epa"])

function normTerm(raw) {
  return String(raw ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function slugOf(dir, file) {
  return `${dir}/${file.replace(/\.md$/, "")}`
}

function isMultiWord(term) {
  return /\s/.test(term)
}

// Reject multi-word terms that would mis-link or never match prose.
function badMultiWord(term) {
  if (term.length > MAX_CHARS) return true
  if (term.split(/\s+/).length > MAX_WORDS) return true
  if (/[(),]/.test(term)) return true // parenthetical / inverted-index fragments
  if (/[:;]/.test(term)) return true
  return false
}

// Collect candidate (term -> slug) pairs, keyed by lowercased term. Each slug
// carries its best "tier": 0 = the term is that page's own title/name/citation,
// 1 = the term is only an alias of that page. When two pages claim one term we
// prefer the title page over the alias page (so "broccoli" -> ingredients/broccoli,
// not the non-root-vegetables page that merely lists it as an alias), then prefer
// the ingredient (concept) page over a same-named product page, else drop.
const claims = new Map() // termKey -> { display, slugs:Map<slug, tier> }
const dropped = [] // { term, slug, reason } for the report
const unavailableTitles = new Set()

function claim(term, slug, tier) {
  const t = normTerm(term)
  if (!t) return
  const key = t.toLowerCase()
  if (HARD_EXCLUDE.has(key)) {
    dropped.push({ term: t, slug, reason: "hard-exclude" })
    return
  }
  if (!claims.has(key)) claims.set(key, { display: t, slugs: new Map() })
  const rec = claims.get(key)
  const prev = rec.slugs.get(slug)
  if (prev === undefined || tier < prev) rec.slugs.set(slug, tier)
}

function readFm(dir, file) {
  try {
    const raw = fs.readFileSync(path.join(wikiDir, dir, file), "utf8")
    const { data, content } = matter(raw)
    // Mirror TitleHeading: older wiki pages carry their title only in the H1.
    const heading = content.trimStart().match(/^#\s+(.+?)(?:\s+#+)?\s*$/m)?.[1]
    return { ...data, title: data.title || heading }
  } catch (error) {
    throw new Error(`Cannot read autolink destination ${dir}/${file}: ${error.message}`)
  }
}

function eligible(fm) {
  const allowed = fm.draft !== true && fm.draft !== "true" &&
    fm.retired !== true && fm.provisional_scaffold !== true &&
    fm.status !== "tier1-stub" && fm.evidence_tier !== "pending"
  // A missing/unpublished exact concept must not redirect readers into a
  // narrower alias owner, e.g. "mushrooms" → "canned mushrooms".
  if (!allowed && fm.title) unavailableTitles.add(normTerm(fm.title).toLowerCase())
  return allowed
}

function markdownFiles(dir) {
  const abs = path.join(wikiDir, dir)
  if (!fs.existsSync(abs)) return []
  return fs.readdirSync(abs, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.relative(abs, path.join(entry.parentPath ?? entry.path, entry.name)))
    .filter((file) => !file.split(path.sep).some((part) => part.startsWith(".") || part.startsWith("_")) &&
      path.basename(file) !== "index.md")
    .sort()
}

function aliasList(fm) {
  const a = fm.aliases
  if (Array.isArray(a)) return a.map((x) => String(x))
  if (typeof a === "string" && a.trim()) return [a]
  return []
}

// --- topical pages: title + aliases ---------------------------------------
for (const dir of CONCEPT_DIRS) {
  for (const file of markdownFiles(dir)) {
    const fm = readFm(dir, file)
    if (!eligible(fm)) continue
    const slug = slugOf(dir, file)
    // tier 0 = own title, tier 1 = alias.
    const candidates = [
      ...(fm.title ? [[fm.title, 0]] : []),
      ...aliasList(fm).map((a) => [a, 1]),
    ]
    for (const [c, tier] of candidates) {
      const term = normTerm(c)
      if (!term) continue
      const key = term.toLowerCase()
      if (isMultiWord(term)) {
        if (badMultiWord(term)) {
          dropped.push({ term, slug, reason: "generic/long/fragment" })
          continue
        }
        claim(term, slug, tier)
      } else {
        // single word: allowlist only
        if (term.length < MIN_FOOD_CHARS || !SINGLE_WORD_ALLOWLIST.has(key)) {
          dropped.push({ term, slug, reason: "single-word not allowlisted" })
          continue
        }
        claim(term, slug, tier)
      }
    }
  }
}

// --- regulators: abbreviation + name + title (parenthetical stripped) -------
{
  const dir = "regulators"
  const abs = path.join(wikiDir, dir)
  if (fs.existsSync(abs)) {
    for (const file of fs.readdirSync(abs).sort()) {
      if (!file.endsWith(".md") || file === "index.md" || file === "by-metal.md") continue
      const fm = readFm(dir, file)
      if (!eligible(fm) || fm.type !== "regulator") continue
      const slug = slugOf(dir, file)
      const primary = new Set() // tier 0
      const derived = new Set() // tier 1
      // Abbreviation (short acronym) — allowed even single-token, minus excludes.
      const abbr = normTerm(fm.abbreviation)
      if (abbr && abbr.length >= MIN_ABBR_CHARS && !ABBR_EXCLUDE.has(abbr.toLowerCase())) {
        primary.add(abbr)
      }
      // Full name and paren-stripped title (multi-word, unambiguous).
      const name = normTerm(fm.name)
      const titleNoParen = normTerm(String(fm.title ?? "").replace(/\s*\([^)]*\)\s*$/, ""))
      for (const n of [name, titleNoParen]) {
        if (n && isMultiWord(n) && !badMultiWord(n)) {
          primary.add(n)
          // Also the jurisdiction-stripped short form ("Environmental Protection
          // Agency" from "United States Environmental Protection Agency").
          const short = n.replace(/^(United States|California)\s+/, "")
          if (short !== n && isMultiWord(short) && !badMultiWord(short)) derived.add(short)
        }
      }
      for (const t of primary) claim(t, slug, 0)
      for (const t of derived) if (!primary.has(t)) claim(t, slug, 1)
    }
  }
}

// --- regulations: short_title / title, citation-like or named instruments ---
{
  const dir = "regulations"
  const abs = path.join(wikiDir, dir)
  if (fs.existsSync(abs)) {
    for (const file of fs.readdirSync(abs).sort()) {
      if (!file.endsWith(".md") || file === "index.md") continue
      const fm = readFm(dir, file)
      if (!eligible(fm) || fm.type !== "regulation") continue
      const slug = slugOf(dir, file)
      const raw = [fm.short_title, fm.title].filter(Boolean)
      for (const r of raw) {
        // Strip any trailing parenthetical qualifier ("(superseded by ...)").
        let term = normTerm(String(r).replace(/\s*\([^)]*\)\s*/g, " "))
        if (!term || term.length < MIN_FOOD_CHARS) continue
        if (/[(),]/.test(term)) continue
        // Descriptive labels ("ATSDR — minimal risk levels for aluminium") never
        // appear verbatim in prose; keep only citation-style / named instruments.
        if (/[—–]/.test(term)) continue
        if (term.split(/\s+/).length > MAX_WORDS || term.length > MAX_CHARS) continue
        const hasDigit = /\d/.test(term)
        const words = term.split(/\s+/).length
        // Keep only citation-like strings (contain a number) or clearly-named
        // multi-word instruments; skip bare generic titles.
        if (!hasDigit && words < 3) continue
        claim(term, slug, 0)
      }
    }
  }
}

// --- resolve: prefer title over alias, ingredient over product, else drop ---
const finalMap = {}
let ambiguous = 0
for (const [key, rec] of [...claims.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  if (unavailableTitles.has(key) && Math.min(...rec.slugs.values()) > 0) {
    dropped.push({ term: rec.display, slug: [...rec.slugs.keys()].join(" | "), reason: "exact title unavailable" })
    continue
  }
  if (rec.slugs.size === 1) {
    finalMap[key] = [...rec.slugs.keys()][0]
    continue
  }
  const minTier = Math.min(...rec.slugs.values())
  const best = [...rec.slugs.entries()].filter(([, t]) => t === minTier).map(([s]) => s)
  if (best.length === 1) {
    finalMap[key] = best[0]
    continue
  }
  // Still tied: a single ingredient (concept) page beats same-named product page(s).
  const ings = best.filter((s) => s.startsWith("ingredients/"))
  const allIngOrProd = best.every((s) => s.startsWith("ingredients/") || s.startsWith("products/"))
  if (ings.length === 1 && allIngOrProd) {
    finalMap[key] = ings[0]
    continue
  }
  ambiguous += 1
  dropped.push({ term: rec.display, slug: best.join(" | "), reason: "ambiguous (multi-page)" })
}

// --- emit ------------------------------------------------------------------
const byDir = {}
for (const s of Object.values(finalMap)) {
  const d = s.split("/")[0]
  byDir[d] = (byDir[d] ?? 0) + 1
}

const header = `// AUTO-GENERATED by tools/build-autolink-terms.mjs — DO NOT EDIT BY HAND.
// Regenerate: node tools/build-autolink-terms.mjs
//
// Lowercased in-prose term -> target slug, derived from wiki frontmatter
// (topical page title/H1+aliases, regulator name/abbreviation, regulation
// short_title/title). Precision rules live in the generator; see its header and
// CLAUDE.md Part 2. autolink.ts merges this under its curated metals map and
// validates every slug against the real build graph before linking.
`

const entries = Object.keys(finalMap)
  .sort()
  .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(finalMap[k])},`)
  .join("\n")

const body = `${header}
export const GENERATED_TERMS: Record<string, string> = {
${entries}
}

export const GENERATED_TERMS_META = {
  count: ${Object.keys(finalMap).length},
  byDir: ${JSON.stringify(byDir)},
} as const
`

const args = new Set(process.argv.slice(2))

if (args.has("--check")) {
  const current = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : ""
  if (current !== body) {
    console.error(
      "autolink-terms.generated.ts is STALE relative to wiki frontmatter.\n" +
        "Run: node tools/build-autolink-terms.mjs",
    )
    process.exit(1)
  }
  console.log(`autolink terms in sync (${Object.keys(finalMap).length} terms).`)
  process.exit(0)
}

fs.writeFileSync(outPath, body)
console.log(
  `Wrote ${Object.keys(finalMap).length} autolink terms -> ${path.relative(repoRoot, outPath)}`,
)
console.log(`  by dir: ${JSON.stringify(byDir)}  | dropped: ${dropped.length} (ambiguous: ${ambiguous})`)

if (args.has("--report")) {
  const reportPath = path.join(repoRoot, "data/evidence/autolink-terms-report.txt")
  const lines = []
  lines.push("# Autolink terms — generation report\n")
  lines.push(`Emitted: ${Object.keys(finalMap).length}  byDir=${JSON.stringify(byDir)}\n`)
  lines.push("## Emitted terms\n")
  for (const k of Object.keys(finalMap).sort()) lines.push(`  ${k} -> ${finalMap[k]}`)
  lines.push("\n## Dropped (reason)\n")
  const byReason = {}
  for (const d of dropped) (byReason[d.reason] ??= []).push(d)
  for (const reason of Object.keys(byReason).sort()) {
    lines.push(`\n### ${reason} (${byReason[reason].length})`)
    for (const d of byReason[reason].slice(0, 400)) lines.push(`  "${d.term}"  [${d.slug}]`)
  }
  fs.writeFileSync(reportPath, lines.join("\n"))
  console.log(`  report -> ${path.relative(repoRoot, reportPath)}`)
}
