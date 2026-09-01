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
// PDF media: after each live mint, if the page serves a PDF at <url>.pdf the tool
// also registers it as media (MDS Media API — the only way to set the record's
// read-only `contentUrl`) and adds a `formats` entry, so PDF-content-negotiating
// clients (ReadCube preview, PDF crawlers) find the full text. Pages not yet
// deployed at mint time are deferred to tools/datacite-reconcile-media.mjs, the
// idempotent post-deploy backfill (which also fixed the 24 out-of-band-minted
// synthesis DOIs that predate this wiring).
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
import { pdfUrlFor, headIsPdf, registerPdfMedia, ensurePdfFormat, ensureContentUrl } from "./datacite-media.mjs"

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
// Source pages (priority 6) are summaries of THIRD-PARTY papers. Minting HMI DOIs for them would
// register DataCite records asserting our authorship of other scientists' work (see the 2026-08-27
// preflight audit) — a defensibility landmine and a misattribution problem. They are excluded from
// the default run; `--include-sources` re-enables them, and doing so correctly requires deriving
// creators from the page's real `authors` and adding an IsDerivedFrom relatedIdentifier to the
// paper's own DOI (NOT the org-as-creator shape below). Until that lands, sources stay off.
const includeSources = args.includes("--include-sources")
const maxPriority = priorityArg ? Number(priorityArg.split("=")[1]) : (includeSources ? 6 : 5)

const DATACITE_USER = process.env.DATACITE_USER
const DATACITE_PASSWORD = process.env.DATACITE_PASSWORD
const DATACITE_PREFIX = process.env.DATACITE_PREFIX
const DATACITE_MODE = (process.env.DATACITE_MODE || "test").toLowerCase()
const DATACITE_API = DATACITE_MODE === "live" ? "https://api.datacite.org/dois" : "https://api.test.datacite.org/dois"
// draft (no event, reserve) | register (Registered, not yet Findable) | publish (Findable). Default publish.
const state = (args.find((a) => a.startsWith("--state=")) || "--state=publish").split("=")[1]
const TEST_PREFIXES = ["10.5072", "10.82"] // datacite sandbox families (10.5072 retired; test repos get their own)
const isTestPrefix = (doi) => TEST_PREFIXES.some((p) => String(doi).startsWith(p))
const persist = DATACITE_MODE === "live" // never stamp non-resolvable test DOIs into frontmatter
// A DataCite record is permanent + public: screen each candidate title against a brand denylist so
// a third-party paper title (or any brand) never becomes a minted HMI record. A hit aborts.
const BRAND_DENYLIST = ["bobbie", "kasandrinos", "enfamil", "similac", "gerber", "kirkland", "clorox", "purina", "light labs"]
const brandHit = (s) => {
  const hay = String(s || "").toLowerCase()
  return BRAND_DENYLIST.find((b) => new RegExp(`(^|[^a-z0-9])${b}([^a-z0-9]|$)`, "i").test(hay)) || null
}

// ---------- Creator / publisher model (must agree with every other surface) ----------
// The DataCite record's `creators` must match what the page itself declares:
//   Head.tsx  -> citation_author "Pendergrass, Karen" (synthesis + metals)
//   JSON-LD   -> author = Karen Pendergrass (ORCID)   (postbuild-inject-jsonld.mjs)
//   PDF       -> "Pendergrass K. …" cite-as + ORCID byline (tools/pdf/scholarly-pdf.mjs)
//   HeroBand  -> "Author: Karen Pendergrass" + ORCID iD
// A resolved DOI whose creator read "Institute of Contaminant Standards" while
// all of the above name a person is the single loudest "auto-generated, not a
// real report" tell for a regulatory or plaintiff's-expert reviewer. So the
// Index's authored analytical work (synthesis findings, developed metal reviews
// — the set Head.tsx declares a citation_author for) mints with the PERSON as
// creator; institutional compilations (ingredients/products/regulations) keep
// the organization as creator; source pages never mint (third-party papers).
const AUTHORED_DIRS = new Set(["wiki/synthesis", "wiki/metals"])
const isAuthored = (dir) => AUTHORED_DIRS.has(dir)

const ORG_NAME = "Institute of Contaminant Standards"
const AUTHOR_ORCID = "https://orcid.org/0000-0002-2348-7259"
// Publisher-of-record name on the permanent DOI. Kept as the operating org
// because the ROR (below) identifies the ORGANIZATION, not the publication —
// "Heavy Metal Index" is the publication and is carried in `container` on every
// record (and is the venue in every human-readable citation). To make the
// DataCite `publisher` field literally read "Heavy Metal Index" instead, change
// this one constant (Karen's call — see the DOI-readiness note in the ledger).
const PUBLISHER_NAME = ORG_NAME
// Research Organization Registry ID for the Institute of Contaminant Standards.
// Empty until the ROR is assigned; set HMI_ORG_ROR="https://ror.org/<id>" (same
// env var read by postbuild-inject-jsonld.mjs) and every record below gains the
// ROR on the creator affiliation, the publisher identifier, and the org creator
// — no other change needed. Until then the affiliation/publisher carry name
// only, which is valid DataCite.
const ORG_ROR = process.env.HMI_ORG_ROR || ""

const orgAffiliation = () => {
  const a = { name: ORG_NAME }
  if (ORG_ROR) {
    a.affiliationIdentifier = ORG_ROR
    a.affiliationIdentifierScheme = "ROR"
    a.schemeUri = "https://ror.org"
  }
  return [a]
}
const personCreator = () => ({
  name: "Pendergrass, Karen",
  nameType: "Personal",
  givenName: "Karen",
  familyName: "Pendergrass",
  nameIdentifiers: [
    { nameIdentifier: AUTHOR_ORCID, nameIdentifierScheme: "ORCID", schemeUri: "https://orcid.org" },
  ],
  affiliation: orgAffiliation(),
})
const orgCreator = () => {
  const c = { name: ORG_NAME, nameType: "Organizational" }
  if (ORG_ROR) {
    c.nameIdentifiers = [
      { nameIdentifier: ORG_ROR, nameIdentifierScheme: "ROR", schemeUri: "https://ror.org" },
    ]
  }
  return c
}
// `publisher` is a plain string today (valid, unchanged behaviour); it becomes a
// DataCite 4.5 object only once a ROR exists to attach, so a live mint run today
// sends exactly what it sent before.
const publisherField = () =>
  ORG_ROR
    ? {
        name: PUBLISHER_NAME,
        publisherIdentifier: ORG_ROR,
        publisherIdentifierScheme: "ROR",
        schemeUri: "https://ror.org",
      }
    : PUBLISHER_NAME

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
    // Mintable when the de-quoted value is empty or the literal null (handles "", '', null).
    const dequoted = value.replace(/^['"]|['"]$/g, "")
    if (dequoted && dequoted.toLowerCase() !== "null") continue
    candidates.push({ filePath, dir, priority, raw, fm })
  }
}

candidates.sort((a, b) => a.priority - b.priority || a.filePath.localeCompare(b.filePath))

// Collision guard: the basename-only suffix scheme (hmi.<basename>) can map two
// pages in different directories to one DOI. That would mint both pages to the
// same identifier, silently. Check the WHOLE mintable set (not just this batch,
// which --limit may truncate). A dry-run reports collisions as warnings so the
// planning report still renders; an EXECUTE run refuses before any network call.
{
  const slugOf = (c) => path.relative(path.join(repoRoot, "wiki"), c.filePath).replace(/\.md$/, "")
  const bySuffix = new Map()
  const collisions = []
  for (const c of candidates) {
    const suf = generateSuffix(slugOf(c))
    if (bySuffix.has(suf)) collisions.push([suf, bySuffix.get(suf), c.filePath])
    else bySuffix.set(suf, c.filePath)
  }
  if (collisions.length) {
    console.error(`mint-dois: ${collisions.length} DOI suffix collision(s) — basename-only suffixes require unique page basenames across all minted dirs:`)
    for (const [suf, a, b] of collisions) {
      console.error(`  "${suf}": ${path.relative(repoRoot, a)}  <->  ${path.relative(repoRoot, b)}`)
    }
    console.error(`  Rename one page (or namespace this suffix) before minting.`)
    if (!dryRun) process.exit(1)
    console.error(`  (dry-run: continuing so the plan renders; an execute run would refuse.)`)
  }
}

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
let mediaSet = 0
let mediaDeferred = 0

for (const c of batch) {
  const fm = c.fm
  const title = (fm.match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1] || path.basename(c.filePath, ".md")
  const brand = brandHit(title)
  if (brand) { console.error(`  SKIP ${path.relative(repoRoot, c.filePath)}: brand/firewall hit "${brand}" in title — not minting.`); failed += 1; continue }
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
        // Creator matches the page's own author declaration (see the model note
        // above): a person for authored analytical work, the organization for
        // institutional compilations. Paleo Certified, Inc. is the DataCite
        // registrant/account, not the metadata creator.
        creators: [isAuthored(c.dir) ? personCreator() : orgCreator()],
        titles: [{ title }],
        publisher: publisherField(),
        publicationYear: new Date(updated).getFullYear() || new Date().getFullYear(),
        types: pageTypeToDataCite(c.dir),
        // "Heavy Metal Index" is the publication these pages appear in — modeled
        // as the container so it is explicit on the record regardless of the
        // publisher-name choice above, and so a resolved DOI reads as an item in
        // a named publication rather than a bare web page.
        container: { type: "Series", title: "Heavy Metal Index" },
        url,
        ...(state === "draft" ? {} : { event: state }),
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
    if (persist) {
      // Never write a non-resolvable sandbox DOI into a page's citation frontmatter.
      if (isTestPrefix(mintedDoi)) { console.error(`  FAIL ${slug}: refusing to persist test-prefix DOI ${mintedDoi}`); failed += 1; continue }
      const newRaw = c.raw.replace(/^wiki_doi:\s*.+$/m, `wiki_doi: "${mintedDoi}"`)
      if (newRaw === c.raw) { console.error(`  ABORT ${slug}: write-back changed nothing — DOI ${mintedDoi} minted but unpersistable. Stopping.`); failed += 1; break }
      fs.writeFileSync(c.filePath, newRaw, "utf8")
      const sha256 = crypto.createHash("sha256").update(newRaw).digest("hex")
      auditRows.push(`${path.relative(repoRoot, c.filePath)},${mintedDoi},${sha256},${DATACITE_MODE},${new Date().toISOString()}`)
    } else {
      // Test mode: verify the round-trip; do not stamp non-resolvable test DOIs into pages.
      auditRows.push(`${path.relative(repoRoot, c.filePath)},${mintedDoi},(test-not-persisted),${DATACITE_MODE},${new Date().toISOString()}`)
    }
    minted += 1

    // Associate the page's PDF with the record via the MDS Media API — this sets
    // the read-only `contentUrl` that the REST mint above cannot, plus a
    // `formats` entry. Without it a record reports contentUrl:null / formats:[]
    // and PDF-content-negotiating clients (ReadCube's first-page preview,
    // PDF-preferring crawlers, doi.org Accept: application/pdf) find no full text.
    // HEAD-gated: only a URL that actually serves application/pdf is registered,
    // so a reference page (no PDF) or a page not yet deployed is simply left for
    // the standing post-deploy step (tools/datacite-reconcile-media.mjs), which
    // is idempotent and safe to re-run. Live mode only — test DOIs and test PDFs
    // do not line up.
    if (persist) {
      try {
        const pdfUrl = pdfUrlFor(url)
        const head = await headIsPdf(pdfUrl)
        if (head.ok) {
          // contentUrl via REST PUT is the field that actually populates (the MDS
          // media POST does not, for REST-created DOIs); formats declares the type;
          // MDS media is a best-effort extra.
          await ensureContentUrl({ doi: mintedDoi, pdfUrl, current: [], user: DATACITE_USER, password: DATACITE_PASSWORD })
          await ensurePdfFormat({ doi: mintedDoi, current: [], user: DATACITE_USER, password: DATACITE_PASSWORD })
          try { await registerPdfMedia({ doi: mintedDoi, pdfUrl, user: DATACITE_USER, password: DATACITE_PASSWORD, live: true }) } catch {}
          mediaSet += 1
        } else {
          mediaDeferred += 1
        }
      } catch (e) {
        console.error(`  media assoc deferred for ${slug}: ${e.message} — run tools/datacite-reconcile-media.mjs after deploy`)
        mediaDeferred += 1
      }
    }

    if (minted % 25 === 0) console.log(`  minted ${minted}/${batch.length}...`)
  } catch (err) {
    console.error(`  mint error for ${slug}: ${err.message}`)
    failed += 1
  }
}

fs.writeFileSync(auditPath, auditRows.join("\n") + "\n", "utf8")
console.log(`\n  minted: ${minted}`)
console.log(`  failed: ${failed}`)
if (persist) {
  console.log(`  pdf media associated: ${mediaSet}`)
  if (mediaDeferred) {
    console.log(`  pdf media deferred:   ${mediaDeferred} (no served PDF yet)`)
    console.log(`    → after deploy, run: node --env-file=.env.local tools/datacite-reconcile-media.mjs --apply`)
  }
}
console.log(`  audit:  ${path.relative(repoRoot, auditPath)}`)

function pageTypeToDataCite(dir) {
  // DataCite `types`. Authored analytical work — synthesis findings + developed
  // metal reviews, the dirs Head.tsx gives a citation_author and a
  // citation_technical_report_institution — is a **Report**, refined by the
  // free-text resourceType to **"Technical Report"**. That is the one
  // institutional-report label mirrorable across all three target surfaces so
  // they tell ONE story: DataCite resourceTypeGeneral "Report", Google Scholar
  // citation_technical_report_institution, and ORCID work type "report".
  // NOT "Preprint": no journal version is coming (the Journal of Food
  // Metallomics is not currently publishing), and Preprint implies one — it also
  // isn't in Scholar's or ORCID's institutional-report class. Not "JournalArticle".
  // "Standard" must NEVER appear (the Index REPORTS the literature; HMTc SETS
  // standards — Part 2 firewall).
  if (dir.includes("sources")) return { resourceTypeGeneral: "Other" }
  if (AUTHORED_DIRS.has(dir)) return { resourceTypeGeneral: "Report", resourceType: "Technical Report" }
  // Institutional reference compilations (ingredients / products / regulations):
  // encyclopedic reference text, not authored reports.
  return { resourceTypeGeneral: "Text" }
}

function generateSuffix(slug) {
  // Suffix shape: hmi.<page-basename> (lowercased) — the scheme the DOIs already
  // registered under prefix 10.83376 actually use (verified against the live
  // DataCite registry 2026-08-31; e.g. synthesis/aquaculture-vs-wild-… →
  // 10.83376/hmi.aquaculture-vs-wild-…). The earlier hmi.<category>.<slug>.<hash>
  // shape DIVERGED from what was minted, so the tool would have minted a second,
  // differently-shaped DOI for a page that already had one. A page's DOI must be
  // reproducible from its slug so a re-run can recognise and skip an existing
  // mint. Basename-only can collide across directories; the collision guard in
  // the batch loop fails loudly rather than mint two pages to one DOI.
  return `hmi.${slug.split("/").pop().toLowerCase()}`
}
