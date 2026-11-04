#!/usr/bin/env node
// Build public/static/evidence-packet-index.json — a per-page manifest fragment
// that the /api/evidence-packet endpoint serves to brand-legal and regulatory
// readers needing a citable, verifiable record of a page as published.
//
// Each entry pins:
//   slug, title, description, page_type, audience
//   wiki_doi (placeholder until DataCite minting lands)
//   canonical_url
//   content_sha256 (authored Markdown only; exact scheme in shared utility)
//   metadata_sha256 (semantic frontmatter) + exact published-byte checksums
//   git_commit_sha (full verified SHA) + last_commit metadata — the git pin
//     downstream readers cite against
//   contributing_sources where the frontmatter declares them (synthesis,
//     ingredient contamination profiles, regulation source_refs)
//
// The runtime endpoint adds retrieval_timestamp and the license envelope
// per request; the prebuild artifact is the deterministic core.

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"
import { contentHashes, parsePage, sameContent, isVerifiedPin, EVIDENCE_PACKET_SCHEMA } from "./lib/evidence-packet.mjs"
import { isPublicWikiRecord } from "./lib/source-publication.mjs"
import { sourceContract } from "./lib/source-contract.mjs"
import { publicDataDownloads } from "./lib/public-data-downloads.mjs"

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

// Read one immutable Git tree. Canonical hashes ignore generated history and
// references, so normal prebuild decoration cannot invalidate an authored pin.
function buildGitSnapshot(repoRoot) {
  const git = (args, options = {}) => execFileSync("git", args, {
    cwd: repoRoot, encoding: "utf8", maxBuffer: 2 * 1024 * 1024 * 1024,
    stdio: ["pipe", "pipe", "ignore"], ...options,
  })
  let commit
  try { commit = git(["rev-parse", "--verify", "HEAD"]).trim() } catch { return null }
  const entries = git(["ls-tree", "-r", "-z", commit, "--", "wiki"])
    .split("\0").filter(Boolean).map(line => {
      const match = line.match(/^\d+ blob ([a-f0-9]+)\t(.+)$/)
      return match && match[2].endsWith(".md") ? { sha: match[1], file: match[2] } : null
    }).filter(Boolean)
  const blobs = git(["cat-file", "--batch"], { encoding: null, input: entries.map(e => e.sha).join("\n") + "\n" })
  let offset = 0
  const files = new Map()
  for (const entry of entries) {
    const end = blobs.indexOf(10, offset)
    const size = Number(blobs.subarray(offset, end).toString().split(" ")[2])
    offset = end + 1
    files.set(entry.file, blobs.subarray(offset, offset + size).toString("utf8"))
    offset += size + 1
  }
  const lastCommits = new Map()
  let current = null
  for (const line of git(["log", commit, "--name-only", "--pretty=format:COMMIT|%H|%cs", "--", "wiki"]).split("\n")) {
    if (line.startsWith("COMMIT|")) {
      const [, sha, date] = line.split("|")
      current = { sha, date }
    } else if (line && current && !lastCommits.has(line)) lastCommits.set(line, current)
  }
  return { commit, files, lastCommits }
}

function readPrior(outPath) {
  try {
    const payload = JSON.parse(fs.readFileSync(outPath, "utf8"))
    if (payload.schema_version !== EVIDENCE_PACKET_SCHEMA || !Array.isArray(payload.records)) return new Map()
    return new Map(payload.records.map(record => [record.slug, record]))
  } catch { return new Map() }
}

function downloadsFor(data, repoRoot) {
  const entries = publicDataDownloads(data.data_downloads)
  if (data.data_downloads && entries.length !== data.data_downloads.length) throw new Error("Invalid public data_downloads entry")
  return entries.map(entry => {
    const bytes = fs.readFileSync(path.join(repoRoot, "wiki", entry.path))
    return { ...entry, url: `${CANONICAL_BASE}/${entry.path}`, bytes: bytes.length,
      sha256: crypto.createHash("sha256").update(bytes).digest("hex") }
  })
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

export function buildEvidencePacketIndex({ repoRoot = process.cwd(), outPath = path.join(repoRoot, "wiki/static/evidence-packet-index.json"), generatedAt = new Date().toISOString() } = {}) {
  const wikiDir = path.join(repoRoot, "wiki")
  const git = buildGitSnapshot(repoRoot)
  const prior = readPrior(outPath)
  const records = []
  let skipped = 0
  for (const { slug, fullPath } of walk(wikiDir)) {
    if (!isPublic(slug)) { skipped++; continue }
    const raw = fs.readFileSync(fullPath, "utf8")
    const { data, body } = parsePage(raw)
    if (!isPublicWikiRecord(data, slug)) { skipped++; continue }
    const hashes = contentHashes(raw)
    const relative = path.relative(repoRoot, fullPath).split(path.sep).join("/")
    const committedRaw = git?.files.get(relative)
    const committedHashes = committedRaw === undefined ? null : contentHashes(committedRaw)
    const previous = prior.get(slug)
    let pin = { pin_status: "unpinned", pin_reason: git ? "Authored content or semantic metadata differs from the committed Git tree." : "Git history and a matching verified prior manifest are unavailable.", git_commit_sha: null, last_commit_sha: null, last_commit_date: null }
    if (committedHashes && sameContent(committedHashes, hashes)) {
      const last = git.lastCommits.get(relative)
      pin = { pin_status: "verified_git", pin_reason: null, git_commit_sha: git.commit, last_commit_sha: last?.sha || git.commit, last_commit_date: last?.date || null }
    } else if (!git && isVerifiedPin(previous) && sameContent(previous, hashes)) {
      pin = { pin_status: "preserved_verified_git", pin_reason: null, git_commit_sha: previous.git_commit_sha, last_commit_sha: previous.last_commit_sha, last_commit_date: previous.last_commit_date }
    }
    records.push({
      slug, title: data.title || slug, description: data.description || null,
      page_type: pickPageType(slug, data), audience: Array.isArray(data.audience) ? data.audience : [],
      wiki_doi: data.wiki_doi || null, canonical_url: `${CANONICAL_BASE}/${slug}`,
      ...hashes, ...pin, contributing_sources: extractContributingSources(data, body),
      data_downloads: downloadsFor(data, repoRoot),
      ...(pickPageType(slug, data) === "source" ? { ingest_contract: sourceContract(data) } : {}),
    })
  }
  records.sort((a, b) => a.slug.localeCompare(b.slug))
  const payload = { generated_at: generatedAt, schema_version: EVIDENCE_PACKET_SCHEMA,
    canonical_base: CANONICAL_BASE, record_count: records.length, records }
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n", "utf8")
  console.error(`[evidence-packet-index] wrote ${records.length} records (${records.filter(isVerifiedPin).length} verified pins), skipped ${skipped} non-public pages, output ${outPath}`)
  return payload
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) buildEvidencePacketIndex()
