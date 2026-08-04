#!/usr/bin/env node
// Build public/static/evidence-packet-index.json — a per-page manifest fragment
// that the /api/evidence-packet endpoint serves to brand-legal and regulatory
// readers needing a citable, verifiable record of a page as published.
//
// Each entry pins:
//   slug, title, description, page_type, audience
//   wiki_doi (placeholder until DataCite minting lands)
//   canonical_url
//   content_sha256 (over the raw markdown body, frontmatter stripped — the
//     hash is stable across cosmetic frontmatter edits but changes the
//     moment a substantive claim changes)
//   last_commit (short sha) + last_commit_date (ISO date) — the git pin
//     downstream readers cite against
//   contributing_sources where the frontmatter declares them (synthesis,
//     ingredient contamination profiles, regulation source_refs)
//
// The runtime endpoint adds retrieval_timestamp and the license envelope
// per request; the prebuild artifact is the deterministic core.

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { execSync } from "node:child_process"
import yaml from "js-yaml"

const repoRoot = process.cwd()
const wikiDir = path.join(repoRoot, "wiki")
// Written into wiki/static/ so Quartz's Assets emitter copies it to
// public/static/ at build time. /api/evidence-packet reads from the
// deployed /static/ URL with a bundled local fallback at
// ../wiki/static/evidence-packet-index.json.
const outPath = path.join(repoRoot, "wiki/static/evidence-packet-index.json")
const CANONICAL_BASE = "https://heavymetalindex.com"

// Mirror the public-surface filter the existing public artifacts use.
const PUBLIC_PREFIXES = [
  "ingredients/",
  "products/",
  "metals/",
  "regulations/",
  "synthesis/",
  "sources/",
  "mitigation/",
  "supply-chain/",
  "testing/",
  "microbiome/",
  "health/",
  "methodology",
  "editorial-standards",
  "errata",
  "licensing",
  "curators",
  "roadmap",
  "coverage",
  "about",
  "overview",
  "trust",
  "index",
]
const PRIVATE_PREFIXES = [
  "app/",
  "certification/",
  "courses/",
  "lint/",
  "log",
  "queries/",
  "tags/",
  "staff/",
  "workbench",
  "audits/",
  "batch-reports/",
  "studies/",
]

function isPublic(slug) {
  if (PRIVATE_PREFIXES.some((p) => slug === p || slug.startsWith(p))) return false
  return PUBLIC_PREFIXES.some((p) => slug === p || slug.startsWith(p))
}

function walk(dir, base = "") {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const slugSegment = base ? `${base}/${entry.name}` : entry.name
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...walk(fullPath, slugSegment))
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const slug = slugSegment.replace(/\.md$/, "")
      out.push({ slug, fullPath })
    }
  }
  return out
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) return { data: {}, body: raw }
  let data = {}
  try { data = yaml.load(match[1]) || {} } catch {}
  return { data, body: raw.slice(match[0].length) }
}

function extractContributingSources(frontmatter, body) {
  const out = new Set()
  const arr = frontmatter.contributing_sources || frontmatter.source_refs || frontmatter.sources_ref || []
  if (Array.isArray(arr)) {
    for (const entry of arr) {
      if (typeof entry !== "string") continue
      const m = entry.match(/\[\[(?:sources\/)?([^\]|]+)\]\]/) || entry.match(/^sources\/(.+)$/)
      if (m) out.add(`sources/${m[1].replace(/^sources\//, "")}`)
    }
  }
  // Also catch inline [[sources/x]] wikilinks in the body so synthesis pages
  // that name contributing sources only in prose still surface them. Trailing
  // backslashes happen when the body escapes a pipe (`[[sources/x\|alias]]`)
  // inside a table cell — strip them so the slug is clean.
  const inline = body.match(/\[\[sources\/[^\]|]+/g) || []
  for (const link of inline) {
    const stripped = link.slice(2).replace(/\\+$/, "")
    if (stripped.length > "sources/".length) out.add(stripped)
  }
  return Array.from(out).sort()
}

// Single-pass git log to attribute last commit to every file under wiki/.
//
// GUARDED. `vercel deploy` from the CLI uploads a source tarball WITHOUT `.git`,
// so this exec threw `fatal: not a git repository` and took the entire prebuild
// — and therefore every CLI deploy — down with it. Empirically, not
// theoretically: deployment dpl_CgibHnyhTq5p36yWX1o2s4mCJjQE failed exactly
// this way (docs/findings.md:58).
//
// The guard is a try/catch that degrades to an EMPTY index rather than a
// fallback that fabricates attribution: with no git history there is no honest
// last-commit date, and inventing one would put a wrong date on a provenance
// artifact. Callers already handle a missing entry.
//
// Same family as the shallow-clone trap, but worse: a shallow clone yields one
// commit per file, this yields zero repository at all.
function buildGitIndex() {
  let log
  try {
    log = execSync(
      `git log --name-only --pretty=format:"COMMIT|%h|%ai" -- 'wiki'`,
      { cwd: repoRoot, encoding: "utf8", maxBuffer: 200 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] },
    )
  } catch {
    console.warn(
      "build-evidence-packet-index: no git history available (CLI deploy uploads without .git); " +
        "emitting index with no commit attribution.",
    )
    return new Map()
  }
  const map = new Map()
  let current = null
  for (const line of log.split("\n")) {
    if (line.startsWith("COMMIT|")) {
      const [, sha, isoDate] = line.split("|")
      current = { sha, date: isoDate.slice(0, 10) }
    } else if (line.trim() && current && !map.has(line)) {
      map.set(line, current)
    }
  }
  return map
}

function pickPageType(slug, frontmatter) {
  if (frontmatter.type) return frontmatter.type
  if (slug.startsWith("sources/")) return "source"
  if (slug.startsWith("ingredients/")) return "ingredient"
  if (slug.startsWith("products/")) return "product"
  if (slug.startsWith("metals/")) return "metal"
  if (slug.startsWith("regulations/")) return "regulation"
  if (slug.startsWith("synthesis/")) return "synthesis"
  return "reference"
}

const gitIndex = buildGitIndex()
const pages = walk(wikiDir)
const records = []
let skipped = 0
for (const { slug, fullPath } of pages) {
  if (!isPublic(slug)) { skipped++; continue }
  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, body } = parseFrontmatter(raw)
  const contentSha256 = crypto.createHash("sha256").update(body).digest("hex")
  const repoRelative = path.relative(repoRoot, fullPath)
  const git = gitIndex.get(repoRelative) || null
  records.push({
    slug,
    title: data.title || slug,
    description: data.description || null,
    page_type: pickPageType(slug, data),
    audience: Array.isArray(data.audience) ? data.audience : [],
    wiki_doi: data.wiki_doi || null,
    canonical_url: `${CANONICAL_BASE}/${slug}`,
    content_sha256: contentSha256,
    content_bytes: Buffer.byteLength(body, "utf8"),
    last_commit_sha: git?.sha || null,
    last_commit_date: git?.date || null,
    contributing_sources: extractContributingSources(data, body),
  })
}
records.sort((a, b) => a.slug.localeCompare(b.slug))

const payload = {
  generated_at: new Date().toISOString(),
  schema_version: "1.0.0",
  canonical_base: CANONICAL_BASE,
  record_count: records.length,
  records,
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n", "utf8")

console.error(
  `[evidence-packet-index] wrote ${records.length} records, skipped ${skipped} non-public pages, output ${outPath}`,
)
