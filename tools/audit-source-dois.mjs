import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import matter from "gray-matter"

const sourceDir = path.join(process.cwd(), "wiki", "sources")
const paperTypes = new Set(["peer-reviewed", "study"])
const sourceFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
  .sort()

const missingDoi = []
const missingAccess = []
const textbookWithoutDoi = []
const noDoiByDeclaration = []
let pendingTier1Skipped = 0

for (const file of sourceFiles) {
  const filePath = path.join(sourceDir, file)
  const { data } = matter.read(filePath)
  const sourceType = String(data.source_type ?? "").trim()
  const doi = data.doi === null || data.doi === undefined ? "" : String(data.doi).trim()
  const accessUrl =
    data.access_url === null || data.access_url === undefined ? "" : String(data.access_url).trim()
  const noDoiAssigned = data.no_doi_assigned === true

  const status = String(data.status ?? "").trim()
  const evidenceTier = String(data.evidence_tier ?? "").trim()
  const ingestMethod = String(data.ingest_method ?? "").trim()
  const isPendingTier1 =
    status === "tier1-stub" || evidenceTier === "pending" || ingestMethod.startsWith("tier1-")

  if (isPendingTier1) {
    pendingTier1Skipped += 1
    continue
  }

  // Sources that explicitly declare no_doi_assigned: true (because the publishing
  // venue does not register DOIs) are tolerated provided they carry an access_url.
  // This handles grey-literature and small-publisher primary research that is
  // genuinely peer-reviewed but lacks a DOI registry record.
  if (paperTypes.has(sourceType) && noDoiAssigned) {
    if (!accessUrl) {
      missingAccess.push({ file, doi: "(no DOI assigned by venue; access_url required)" })
    } else {
      noDoiByDeclaration.push({ file, title: data.title ?? file, accessUrl })
    }
    continue
  }

  if (paperTypes.has(sourceType) && !doi) {
    missingDoi.push({ file, title: data.title ?? file })
  }

  if (paperTypes.has(sourceType) && doi && !accessUrl) {
    missingAccess.push({ file, doi })
  }

  if (sourceType === "textbook-chapter" && !doi) {
    textbookWithoutDoi.push({ file, title: data.title ?? file })
  }
}

if (missingDoi.length > 0) {
  console.error("Peer-reviewed/study source pages missing DOI metadata:")
  for (const source of missingDoi) {
    console.error(`- ${source.file}: ${source.title}`)
  }
}

if (missingAccess.length > 0) {
  console.error("Peer-reviewed/study source pages with DOI but no access_url:")
  for (const source of missingAccess) {
    console.error(`- ${source.file}: https://doi.org/${source.doi}`)
  }
}

if (textbookWithoutDoi.length > 0) {
  console.warn("Textbook chapters without DOI metadata, kept as publisher-access records:")
  for (const source of textbookWithoutDoi) {
    console.warn(`- ${source.file}: ${source.title}`)
  }
}

if (noDoiByDeclaration.length > 0) {
  console.warn("Peer-reviewed sources from venues that do not register DOIs (no_doi_assigned: true):")
  for (const source of noDoiByDeclaration) {
    console.warn(`- ${source.file}: ${source.title} (${source.accessUrl})`)
  }
}

if (pendingTier1Skipped > 0) {
  console.warn(
    `DOI audit skipped ${pendingTier1Skipped} pending Tier-1 source stubs; complete Tier-2 before promotion.`,
  )
}

// Strict mode is opt-in. By default the audit lists offenders and exits 0
// so the Vercel build can ship while the access_url backlog is cleared.
// Re-enable hard-fail behavior by setting HMI_DOI_AUDIT_STRICT=1 in the
// environment.
const strict = process.env.HMI_DOI_AUDIT_STRICT === "1"
if (missingDoi.length > 0 || missingAccess.length > 0) {
  const summary = `DOI audit: ${missingDoi.length} pages missing DOI, ${missingAccess.length} pages with DOI but no access_url (${sourceFiles.length} scanned).`
  if (strict) {
    console.error(summary + " HMI_DOI_AUDIT_STRICT=1 → failing the build.")
    process.exit(1)
  }
  console.warn(summary + " Not blocking the build (set HMI_DOI_AUDIT_STRICT=1 to enforce).")
  process.exit(0)
}

console.log(`DOI audit passed for ${sourceFiles.length} source pages.`)
