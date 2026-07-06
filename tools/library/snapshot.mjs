#!/usr/bin/env node
// Committed metadata snapshot — the diffable, git-per-date record of corpus
// composition (Part 4 / EU database-rights defensibility). The SQLite DB and any
// extracted full text stay drive-only and gitignored; THIS file is the source of
// truth for "what did the corpus assert it held on date D", reconstructable with
//   git show <date>:data/evidence/library/index-snapshot.jsonl
//
// One paper per line (JSONL), deterministically ordered, so diffs are per-paper.
// An ALLOWLIST serializer emits only bibliographic identity + controlled-vocab
// tags, and a firewall guard aborts if any brand token or numeric-with-unit
// (ppb/µg·kg⁻¹/…) leaked in — the operational index must never carry brand-level
// or threshold data toward a committed/public artifact (Parts 12/19).
//
//   npm run library:snapshot            # write + verify
//   node tools/library/snapshot.mjs --check   # verify committed == regenerated

import fs from "node:fs"
import path from "node:path"
import { openIndex } from "./lib/index-db.mjs"

const repoRoot = process.cwd()
const OUT = path.join(repoRoot, "data/evidence/library/index-snapshot.jsonl")
const CHECK = process.argv.includes("--check")

// Optional brand denylist (Part-12). If the governance list exists, load it; the
// numeric-with-unit guard runs regardless.
function loadBrandDenylist() {
  for (const p of [
    "data/evidence/firewall/brand-denylist.txt",
    "docs/governance/brand-denylist.txt",
  ]) {
    try {
      return fs
        .readFileSync(path.join(repoRoot, p), "utf8")
        .split("\n").map((s) => s.trim().toLowerCase()).filter(Boolean)
    } catch {}
  }
  return []
}
const BRANDS = loadBrandDenylist()
const UNIT_RE = /\b\d+(\.\d+)?\s*(ppb|ppm|mg\/kg|µg\/kg|ug\/kg|mg\/l|µg\/l)\b/i

// Allowlist: exactly these keys leave the operational store for the committed file.
function allowlistRow(r) {
  return {
    sha256: r.sha256 || null,
    cite_key: r.cite_key || null,
    doi: r.doi || null,
    doi_slug: r.doi_slug || null,
    title_key: r.normalized_title || null, // dedup key (bibliographic), not values
    year: r.year ?? null,
    status: r.status,
    ingested: r.ingested ? 1 : 0,
    star: r.star_manual ? 1 : 0,
    builds: safeJson(r.builds),
    tags: safeJson(r.tags_auto), // controlled-vocab slugs only (Phase 3)
  }
}
function safeJson(s) {
  if (!s) return null
  try { return JSON.parse(s) } catch { return null }
}

// Firewall scan: the machine-derived fields (tags, builds) must never carry a
// threshold number or a denylisted brand token — those are the fields a future
// auto-tagger could contaminate. Bibliographic identity (title_key, doi,
// cite_key) is public metadata by nature: a paper genuinely titled "…10 ppb…"
// is fine, so the scan deliberately excludes it (Parts 12/19).
function firewallViolation(row) {
  const sensitive = JSON.stringify({ tags: row.tags, builds: row.builds }).toLowerCase()
  if (UNIT_RE.test(sensitive)) return `numeric-with-unit in tags/builds: ${sensitive.match(UNIT_RE)[0]}`
  for (const b of BRANDS) if (b.length > 2 && sensitive.includes(b)) return `brand token in tags/builds: ${b}`
  return null
}

function serialize() {
  const ix = openIndex({ readonly: true })
  const lines = []
  let violations = 0
  for (const row of ix.snapshotRows()) {
    const out = allowlistRow(row)
    const v = firewallViolation(out)
    if (v) { violations++; if (violations <= 5) console.error(`  firewall: ${v}`) }
    lines.push(JSON.stringify(out))
  }
  ix.close()
  return { body: lines.join("\n") + (lines.length ? "\n" : ""), count: lines.length, violations }
}

const { body, count, violations } = serialize()

if (violations > 0) {
  console.error(`\n✗ snapshot aborted: ${violations} firewall violation(s) — the index must not carry brand/threshold data into a committed artifact.`)
  process.exit(2)
}

if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : ""
  if (current !== body) {
    console.error(`✗ snapshot is STALE: ${OUT} differs from the regenerated index.\n  Run: npm run library:snapshot`)
    process.exit(1)
  }
  console.log(`✓ snapshot up to date (${count} papers)`)
} else {
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, body)
  console.log(`✓ wrote ${count} papers → ${path.relative(repoRoot, OUT)}`)
}
