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

for (const file of sourceFiles) {
  const filePath = path.join(sourceDir, file)
  const { data } = matter.read(filePath)
  const sourceType = String(data.source_type ?? "").trim()
  const doi = data.doi === null || data.doi === undefined ? "" : String(data.doi).trim()
  const accessUrl =
    data.access_url === null || data.access_url === undefined ? "" : String(data.access_url).trim()

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

if (missingDoi.length > 0 || missingAccess.length > 0) {
  process.exit(1)
}

console.log(`DOI audit passed for ${sourceFiles.length} source pages.`)
