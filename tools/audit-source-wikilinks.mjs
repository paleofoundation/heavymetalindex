#!/usr/bin/env node
// Dead provenance-wikilink detector.
//
// Catches the failure mode the 2026-06-11 Fable5 audit found: wiki pages
// cite `[[sources/<cite-key>]]` (or `[[regulations/...]]`, `[[testing/...]]`)
// where no such target page exists on disk. A reader or expert who clicks
// the citation lands on nothing — the per-claim provenance chain visibly
// breaks. Example: a Gardener 2019 variant cite-key
// (`gardener2019-lead-cadmium-infant-formula-baby-food`) appears under
// quantitative tables on ~11 product pages while the canonical source page
// lives under `gardener2019-pb-cd-us-infant-formula-baby-foods`.
//
// A link is "dead" only if its target slug matches NO existing filename AND
// NO declared alias/cite_key in the target directory. The resolver is
// deliberately conservative: when in doubt, do not flag.
//
// Link forms handled (matching the parsing in audit-claim-provenance.mjs):
//   [[sources/foo]]
//   [[sources/foo|Alias]]            (plain pipe)
//   [[sources/foo\|Alias]]           (escaped pipe, the corpus default)
//   [[sources/foo#heading]]
//   [[sources/foo#heading|Alias]]
// in both body prose and frontmatter list entries. Fenced code blocks and
// HTML comments are stripped before scanning so template/example links do
// not produce false positives.
//
// Output:
//   data/evidence/dead-wikilinks-audit.csv  per-dead-link records
//   (linking_page, link_target, link_kind, line_or_section)
//   plus a printed summary count.
//
// Default mode is report-only (exit 0). Pass --strict to exit 1 when any
// dead link is found (for wiring into a fail-on-error build gate). Keeps CI
// green when wired as --warn-only.
//
// Usage:
//   node tools/audit-source-wikilinks.mjs            # full corpus, exit 0
//   node tools/audit-source-wikilinks.mjs --strict   # exit 1 if dead links
//   node tools/audit-source-wikilinks.mjs --warn-only # explicit report-only

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

// The three provenance-bearing link kinds. Mirrors the provRegex in
// audit-claim-provenance.mjs: sources/ (primary literature), regulations/
// (regulatory limit anchors), testing/ (analytical-method floors).
const LINK_KINDS = ["sources", "regulations", "testing"]

// Matches [[<kind>/<target>]] with optional #heading and optional |Alias
// (pipe may be escaped as \| per the Obsidian corpus convention). The target
// capture stops at the first of: # (heading), | (alias), \ (escaped pipe),
// or ]] (link end).
const LINK_REGEX = /\[\[(sources|regulations|testing)\/([^\]|#\\]+)/g

function stripCodeBlocks(text) {
  // Fenced code blocks (``` ... ```) hold template/example links. Inline
  // code spans (`...`) hold syntax examples like `[[sources/...]]` in the
  // audit/methodology prose; strip those too so the documented link syntax
  // does not register as a dead citation.
  return text.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "")
}

function stripHtmlComments(text) {
  // HTML comments may carry audience tags or commented-out example links.
  return text.replace(/<!--[\s\S]*?-->/g, "")
}

// Build the set of resolvable slugs for one target directory. A slug
// resolves if it is a real filename (without .md) OR a declared cite_key /
// aliases entry on any page in that directory. cite_key/aliases are read
// conservatively: trailing inline-comment text and a stray ".md" suffix are
// stripped, and only non-empty values are admitted.
function buildResolvableSet(dir) {
  const slugs = new Set()
  if (!fs.existsSync(dir)) return slugs
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"))
  for (const f of files) {
    const base = f.replace(/\.md$/, "")
    // Skip templates: they are not real targets, but they also should never
    // shadow a real slug, so it is safe to just not add their filename.
    if (base === "_TEMPLATE" || base.startsWith("_")) {
      // still read aliases below in case a non-template declares them; but a
      // bare _TEMPLATE file contributes no real slug.
      continue
    }
    slugs.add(base)
    let fm
    try {
      fm = matter(fs.readFileSync(path.join(dir, f), "utf8")).data
    } catch {
      continue
    }
    const ck = normalizeSlug(fm.cite_key)
    if (ck) slugs.add(ck)
    const aliases = fm.aliases
    if (Array.isArray(aliases)) {
      for (const a of aliases) {
        const na = normalizeSlug(a)
        if (na) slugs.add(na)
      }
    } else if (typeof aliases === "string") {
      const na = normalizeSlug(aliases)
      if (na) slugs.add(na)
    }
  }
  return slugs
}

function normalizeSlug(v) {
  if (v == null) return null
  let s = String(v).trim()
  // Drop trailing inline YAML comment fragments (e.g. "slug   # note").
  s = s.replace(/\s+#.*$/, "").trim()
  // Drop a stray .md suffix (seen once in the corpus on a cite_key).
  s = s.replace(/\.md$/, "")
  // Drop a leading kind/ prefix if a cite_key was written with one.
  s = s.replace(/^(sources|regulations|testing)\//, "")
  return s || null
}

// Recursively collect every .md file under the wiki dir.
function walkMarkdown(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...walkMarkdown(full))
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      out.push(full)
    }
  }
  return out
}

function lineNumberAt(text, offset) {
  let line = 1
  for (let i = 0; i < offset && i < text.length; i++) {
    if (text[i] === "\n") line++
  }
  return line
}

function csvCell(v) {
  const s = String(v ?? "")
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function main() {
  const repoRoot = process.cwd()
  const wikiDir = path.join(repoRoot, "wiki")
  const args = process.argv.slice(2)
  const strict = args.includes("--strict")

  // Build resolvable slug sets per kind.
  const resolvable = {}
  for (const kind of LINK_KINDS) {
    resolvable[kind] = buildResolvableSet(path.join(wikiDir, kind))
  }

  const files = walkMarkdown(wikiDir)
  const dead = []

  for (const file of files) {
    const rel = path.relative(repoRoot, file)
    const raw = fs.readFileSync(file, "utf8")
    const scan = stripHtmlComments(stripCodeBlocks(raw))
    let m
    LINK_REGEX.lastIndex = 0
    while ((m = LINK_REGEX.exec(scan)) !== null) {
      const kind = m[1]
      const target = m[2].trim()
      if (!target) continue
      if (resolvable[kind].has(target)) continue
      // A self-link from the index of that kind (e.g. sources/index linking
      // sources/index) is not a real target; "index" is excluded because
      // sources/index.md is a generated listing, not a citation target. But
      // if an index.md file legitimately exists it will already be in the
      // resolvable set, so no special case is needed here.
      dead.push({
        linking_page: rel,
        link_target: `${kind}/${target}`,
        link_kind: kind,
        line_or_section: `line ${lineNumberAt(scan, m.index)}`,
      })
    }
  }

  // Write CSV.
  const headers = ["linking_page", "link_target", "link_kind", "line_or_section"]
  const lines = [headers.join(",")]
  for (const d of dead) {
    lines.push(headers.map(h => csvCell(d[h])).join(","))
  }
  const outPath = path.join(repoRoot, "data/evidence/dead-wikilinks-audit.csv")
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, lines.join("\n") + "\n")

  // Summarize.
  const byKind = {}
  const byTarget = {}
  for (const d of dead) {
    byKind[d.link_kind] = (byKind[d.link_kind] || 0) + 1
    byTarget[d.link_target] = (byTarget[d.link_target] || 0) + 1
  }
  const uniqueTargets = Object.keys(byTarget).length

  console.log("Dead provenance-wikilink audit:")
  console.log(`  markdown pages scanned: ${files.length}`)
  console.log(`  dead links (occurrences): ${dead.length}`)
  console.log(`  distinct dead targets: ${uniqueTargets}`)
  for (const kind of LINK_KINDS) {
    if (byKind[kind]) console.log(`    ${kind}/: ${byKind[kind]}`)
  }
  if (uniqueTargets) {
    const top = Object.entries(byTarget).sort((a, b) => b[1] - a[1]).slice(0, 10)
    console.log("  most-referenced dead targets:")
    for (const [t, n] of top) console.log(`    ${n}x  ${t}`)
  }
  console.log(`Wrote ${path.relative(repoRoot, outPath)}`)

  if (strict && dead.length > 0) {
    process.exitCode = 1
  }
}

// Run only when invoked directly, so the test file can import the helpers.
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { buildResolvableSet, normalizeSlug, LINK_REGEX, stripCodeBlocks, stripHtmlComments }
