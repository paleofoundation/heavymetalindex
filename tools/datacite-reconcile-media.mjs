// Reconcile DataCite media (PDF association) for already-minted Index DOIs.
//
// The ordinary REST mint (tools/mint-dois.mjs) registers metadata + the landing
// URL but NOT the full-text PDF, because the REST API's `contentUrl` is
// read-only — it is populated only by the separate MDS Media API. So every DOI
// this program has minted so far reports `contentUrl: null` / `formats: []`
// even though each scholarly page serves a real PDF at <url>.pdf. Tools that
// content-negotiate for the PDF (ReadCube's sidebar first-page preview,
// PDF-preferring crawlers, doi.org `Accept: application/pdf`) therefore find no
// PDF on the record. This tool closes that gap for the live records.
//
// For each record under the prefix it:
//   1. Derives the PDF URL as <landing-url>.pdf and HEADs it — only a URL that
//      actually returns application/pdf is registered (never register a dead
//      contentUrl). Records with no served PDF (reference pages, or a page not
//      yet deployed) are skipped with a note.
//   2. Sets attributes.contentUrl to the PDF via a REST PUT — the mechanism that
//      actually populates the field (the MDS Media API does not, for REST-created
//      DOIs; verified 2026-09-01). The MDS media record is also POSTed, best-effort.
//   3. Ensures attributes.formats includes "application/pdf" (REST PUT).
// Both steps are idempotent: a record whose contentUrl already lists the PDF and
// whose formats already include application/pdf is left untouched.
//
// SAFE BY DEFAULT: dry-run unless `--apply`. Reads are unauthenticated; writes
// require real credentials and are refused (exit 2) when they are missing or
// still the PENDING_* placeholders.
//
// Credentials (PRODUCTION — these are live 10.83376 DOIs):
//   DATACITE_USER, DATACITE_PASSWORD  — the repository account that owns the prefix
// Run:
//   node --env-file=.env.local tools/datacite-reconcile-media.mjs            # dry-run
//   node --env-file=.env.local tools/datacite-reconcile-media.mjs --apply    # write
//
// Prefix and hosts are pinned to production on purpose: this fixes live records.
// Pairs with tools/datacite-reconcile-types.mjs (same shape, different field) and
// is the standing post-deploy PDF-association step for any future mint batch.

import { pdfUrlFor, headIsPdf, registerPdfMedia, ensurePdfFormat, ensureContentUrl } from "./datacite-media.mjs"

const PREFIX = "10.83376"
const API = "https://api.datacite.org/dois"
const apply = process.argv.includes("--apply")

const USER = process.env.DATACITE_USER
const PASSWORD = process.env.DATACITE_PASSWORD
const credsReady =
  USER && PASSWORD && !/PENDING/i.test(USER) && !/PENDING/i.test(PASSWORD)

if (apply && !credsReady) {
  console.error(
    `datacite-reconcile-media: --apply requires real DATACITE_USER/DATACITE_PASSWORD ` +
      `(the repo account that owns ${PREFIX}); found missing or PENDING. Aborting before any write.`,
  )
  process.exit(2)
}

async function listAll() {
  const url = `${API}?prefix=${PREFIX}&page%5Bsize%5D=1000`
  const r = await fetch(url, { headers: { Accept: "application/vnd.api+json" } })
  if (!r.ok) throw new Error(`list failed: ${r.status} ${await r.text()}`)
  const j = await r.json()
  return j.data
}

const hasPdfMedia = (contentUrl, pdfUrl) =>
  Array.isArray(contentUrl) && contentUrl.includes(pdfUrl)
const hasPdfFormat = (formats) =>
  Array.isArray(formats) && formats.includes("application/pdf")

const records = await listAll()
console.log(`datacite-reconcile-media: ${apply ? "APPLY" : "DRY-RUN"} — ${records.length} DOIs under ${PREFIX}\n`)

let needMedia = 0,
  needFormat = 0,
  mediaSet = 0,
  formatSet = 0,
  alreadyOk = 0,
  noPdf = 0,
  failed = 0

for (const rec of records) {
  const a = rec.attributes
  const doi = a.doi
  const landing = a.url
  if (!landing) {
    console.error(`  ? ${doi}: no landing url on record — skipping`)
    noPdf++
    continue
  }
  const pdfUrl = pdfUrlFor(landing)
  const mediaOk = hasPdfMedia(a.contentUrl, pdfUrl)
  const formatOk = hasPdfFormat(a.formats)

  if (mediaOk && formatOk) {
    alreadyOk++
    continue
  }

  // Only associate a PDF that actually serves. HEAD is cheap and authoritative;
  // it also means reference-page DOIs (no PDF) and not-yet-deployed pages fall
  // out here rather than getting a dead contentUrl.
  const head = await headIsPdf(pdfUrl)
  if (!head.ok) {
    console.log(`  – ${doi}: no served PDF at ${pdfUrl} (HTTP ${head.status}, ${head.contentType}) — skipping`)
    noPdf++
    continue
  }

  if (!mediaOk) needMedia++
  if (!formatOk) needFormat++

  const plan = [!mediaOk && "media(contentUrl)", !formatOk && "formats"].filter(Boolean).join(" + ")
  if (!apply) {
    console.log(`  ~ ${doi}\n     set ${plan}  ->  ${pdfUrl}`)
    continue
  }

  try {
    if (!mediaOk) {
      const { contentUrl } = await ensureContentUrl({ doi, pdfUrl, current: a.contentUrl, user: USER, password: PASSWORD })
      mediaSet++
      console.log(`  ✓ ${doi}: contentUrl -> ${JSON.stringify(contentUrl)}`)
      // Belt-and-suspenders: also POST the MDS media record (best-effort). It does
      // NOT populate contentUrl on its own, but some aggregators read /media.
      try { await registerPdfMedia({ doi, pdfUrl, user: USER, password: PASSWORD, live: true }) } catch {}
    }
    if (!formatOk) {
      const { formats } = await ensurePdfFormat({ doi, current: a.formats, user: USER, password: PASSWORD })
      formatSet++
      console.log(`  ✓ ${doi}: formats -> ${JSON.stringify(formats)}`)
    }
  } catch (e) {
    console.error(`  ✗ ${doi}: ${e.message}`)
    failed++
  }
}

console.log(
  `\n  need-media=${needMedia} need-format=${needFormat} ` +
    (apply ? `media-set=${mediaSet} format-set=${formatSet} failed=${failed} ` : "(dry-run) ") +
    `already-ok=${alreadyOk} no-served-pdf=${noPdf}`,
)
if (!apply && (needMedia > 0 || needFormat > 0)) {
  if (!credsReady)
    console.log(
      `\n  To apply: put the real DATACITE_USER/DATACITE_PASSWORD (the repo account that owns ${PREFIX}) ` +
        `in .env.local, then re-run with --apply.`,
    )
  else console.log(`\n  Credentials look present. Re-run with --apply to write.`)
}
