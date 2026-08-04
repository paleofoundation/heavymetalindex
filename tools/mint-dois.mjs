#!/usr/bin/env node
// Mint DataCite DOIs for Heavy Metal Index pages.
//
// Reads pages with `wiki_doi: null` in their frontmatter, calls the DataCite
// REST API to mint a DOI, and writes the minted DOI back into the page.
// Idempotent — pages whose `wiki_doi:` is already populated are skipped.
//
// Activation: set the following environment variables before running.
//   DATACITE_USER     — DataCite repository username (e.g. PALEO.HMI)
//   DATACITE_PASSWORD — DataCite repository password
//   DATACITE_PREFIX   — assigned DOI prefix (e.g. 10.71234)
//   DATACITE_MODE     — "test" (api.test.datacite.org) or "live" (api.datacite.org). Default test.
//
// Without those env vars the tool reports a dry-run plan and exits cleanly.
// This means the script can be run today to verify the plan; minting begins
// the day Karen completes the DataCite account setup.
//
// Audit log: one row per minted DOI written to
// data/evidence/migrations/dois-minted-<date>.csv with sha256 of the page
// content at mint time. The audit log is the authoritative record of which
// DOI points at which wiki-page version.
//
// Per-page priority order (mint first when batch-limited):
//   1. Synthesis pages — highest scholarly citation surface
//   2. Metal pages — most-referenced reference pages
//   3. Ingredient pages — second most-referenced
//   4. Regulation pages — frequently cited in policy work
//   5. Product pages — high volume; mint after the others
//   6. Source pages — lowest priority; many already carry the paper's own DOI

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)

const PRIORITY_DIRS = [
  { dir: "wiki/synthesis", priority: 1 },
  { dir: "wiki/metals", priority: 2 },
  { dir: "wiki/ingredients", priority: 3 },
  { dir: "wiki/regulations", priority: 4 },
  { dir: "wiki/products", priority: 5 },
  { dir: "wiki/sources", priority: 6 },
]

const args = process.argv.slice(2)
const user = process.env.DATACITE_USER || ""
const prefix = process.env.DATACITE_PREFIX || ""
// Treat the PENDING_* placeholder sentinels as not-yet-configured, so the
// Vercel-side env-var slots can sit populated with placeholders without
// accidentally triggering a live API call. The script only goes live when
// Karen overwrites the placeholders with real DataCite credentials.
const credentialsReady = user && !user.startsWith("PENDING") && prefix && !prefix.startsWith("PENDING")
const dryRun = args.includes("--dry-run") || !credentialsReady
const limitArg = args.find((a) => a.startsWith("--limit="))
const limit = limitArg ? Number(limitArg.split("=")[1]) : Infinity
const priorityArg = args.find((a) => a.startsWith("--priority="))
const maxPriority = priorityArg ? Number(priorityArg.split("=")[1]) : 6

const DATACITE_USER = process.env.DATACITE_USER
const DATACITE_PASSWORD = process.env.DATACITE_PASSWORD
const DATACITE_PREFIX = process.env.DATACITE_PREFIX
const DATACITE_MODE = (process.env.DATACITE_MODE || "test").toLowerCase()
const DATACITE_API = DATACITE_MODE === "live" ? "https://api.datacite.org/dois" : "https://api.test.datacite.org/dois"

const auditDir = path.join(repoRoot, "data/evidence/migrations")
fs.mkdirSync(auditDir, { recursive: true })
const auditPath = path.join(auditDir, `dois-minted-${today}.csv`)
const auditRows = ["page_path,wiki_doi,sha256_at_mint,mode,timestamp"]

const candidates = []
for (const { dir, priority } of PRIORITY_DIRS) {
  if (priority > maxPriority) continue
  const absDir = path.join(repoRoot, dir)
  if (!fs.existsSync(absDir)) continue
  for (const file of fs.readdirSync(absDir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md" || file.startsWith("_")) continue
    const filePath = path.join(absDir, file)
    const raw = fs.readFileSync(filePath, "utf8")
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
    if (!fmMatch) continue
    const fm = fmMatch[1]
    if (/^auto_generated:\s*true\b/m.test(fm)) continue
    const wikiDoiMatch = fm.match(/^wiki_doi:\s*(.+)$/m)
    if (!wikiDoiMatch) continue
    const value = wikiDoiMatch[1].trim()
    if (value !== "null" && value !== '""' && value !== "'") continue
    candidates.push({ filePath, dir, priority, raw, fm })
  }
}

candidates.sort((a, b) => a.priority - b.priority || a.filePath.localeCompare(b.filePath))
const batch = candidates.slice(0, limit === Infinity ? candidates.length : limit)

console.log(`mint-dois: ${dryRun ? "DRY-RUN" : "EXECUTING"} (mode=${DATACITE_MODE})`)
console.log(`  candidates total:  ${candidates.length}`)
console.log(`  this run will:     ${batch.length}`)

if (dryRun) {
  if (!credentialsReady) {
    if (!user) {
      console.log(`\n  (no DataCite env vars set; this is a planning report)`)
    } else if (user.startsWith("PENDING") || prefix.startsWith("PENDING")) {
      console.log(`\n  (DataCite env vars set to PENDING_* placeholders; this is a planning report)`)
      console.log(`  Overwrite DATACITE_USER, DATACITE_PASSWORD, DATACITE_PREFIX on the Vercel dashboard`)
      console.log(`  (project: karen-pendergrass-projects/heavymetalindex) with real DataCite credentials,`)
      console.log(`  then run again to mint.`)
    }
  }
  const breakdown = {}
  for (const c of batch) {
    const key = c.dir
    breakdown[key] = (breakdown[key] || 0) + 1
  }
  console.log(`\n  By page type (priority order):`)
  for (const [dir, n] of Object.entries(breakdown)) {
    console.log(`    ${dir}: ${n}`)
  }
  console.log(`\n  Sample (first 5):`)
  for (const c of batch.slice(0, 5)) {
    console.log(`    ${path.relative(repoRoot, c.filePath)} (priority ${c.priority})`)
  }
  process.exit(0)
}

// ---------- Live minting path ----------

if (!DATACITE_PREFIX) {
  console.error("mint-dois: DATACITE_PREFIX is required for live minting.")
  process.exit(1)
}

let minted = 0
let failed = 0

for (const c of batch) {
  const fm = c.fm
  const title = (fm.match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1] || path.basename(c.filePath, ".md")
  const updated = (fm.match(/^updated:\s*(.+)$/m) || [])[1]?.trim() || today
  const slug = path.relative(path.join(repoRoot, "wiki"), c.filePath).replace(/\.md$/, "")
  const url = `https://heavymetalindex.com/${slug}`
  const suffix = generateSuffix(slug)
  const doi = `${DATACITE_PREFIX}/${suffix}`

  const payload = {
    data: {
      type: "dois",
      attributes: {
        doi,
        prefix: DATACITE_PREFIX,
        suffix,
        creators: [{ name: "Paleo Certified, Inc." }],
        titles: [{ title }],
        publisher: "Institute of Contaminant Standards — Heavy Metal Index",
        publicationYear: new Date(updated).getFullYear() || new Date().getFullYear(),
        types: { resourceTypeGeneral: pageTypeToDataCite(c.dir) },
        url,
        event: "publish",
      },
    },
  }

  try {
    const r = await fetch(DATACITE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: `Basic ${Buffer.from(`${DATACITE_USER}:${DATACITE_PASSWORD}`).toString("base64")}`,
      },
      body: JSON.stringify(payload),
    })
    if (!r.ok) {
      const errText = await r.text()
      console.error(`  mint failed for ${slug}: ${r.status} ${errText.slice(0, 200)}`)
      failed += 1
      continue
    }
    const result = await r.json()
    const mintedDoi = result?.data?.attributes?.doi || doi
    // Write back to the page
    const newRaw = c.raw.replace(/^wiki_doi:\s*.+$/m, `wiki_doi: "${mintedDoi}"`)
    fs.writeFileSync(c.filePath, newRaw, "utf8")
    const sha256 = crypto.createHash("sha256").update(newRaw).digest("hex")
    auditRows.push(`${path.relative(repoRoot, c.filePath)},${mintedDoi},${sha256},${DATACITE_MODE},${new Date().toISOString()}`)
    minted += 1
    if (minted % 25 === 0) console.log(`  minted ${minted}/${batch.length}...`)
  } catch (err) {
    console.error(`  mint error for ${slug}: ${err.message}`)
    failed += 1
  }
}

fs.writeFileSync(auditPath, auditRows.join("\n") + "\n", "utf8")
console.log(`\n  minted: ${minted}`)
console.log(`  failed: ${failed}`)
console.log(`  audit:  ${path.relative(repoRoot, auditPath)}`)

function pageTypeToDataCite(dir) {
  // DataCite resourceTypeGeneral controlled vocab
  if (dir.includes("synthesis")) return "JournalArticle" // scholarly synthesis
  if (dir.includes("metals") || dir.includes("ingredients") || dir.includes("products")) return "Text"
  if (dir.includes("regulations")) return "Standard"
  if (dir.includes("sources")) return "Other"
  return "Text"
}

function generateSuffix(slug) {
  // Suffix shape: hmi.<category>.<slug-hash>.<short-hash>
  // Stable, predictable, no collisions across runs because the slug+category is unique.
  const cleaned = slug.replace(/\//g, ".").toLowerCase()
  const hash = crypto.createHash("sha256").update(slug).digest("hex").slice(0, 8)
  return `hmi.${cleaned}.${hash}`
}
