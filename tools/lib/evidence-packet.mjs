import crypto from "node:crypto"
import yaml from "js-yaml"

export const EVIDENCE_PACKET_SCHEMA = "2.0.0"
export const CONTENT_HASH_SCHEME = "sha256-utf8-authored-markdown-v2"
export const CONTENT_HASH_DESCRIPTION = "Strip leading YAML; remove only generated hmi-page-history and hmi-page-references marker blocks; trim trailing whitespace and append one LF. Other Markdown bytes are preserved."
export const METADATA_HASH_DESCRIPTION = "SHA-256 of recursively key-sorted JSON from parsed YAML, excluding updated and numeric sources (generated display metadata). All other frontmatter fields are included."
export const GIT_REMOTE = "https://github.com/paleofoundation/heavymetalindex"

// Hash the exact UTF-8 Markdown body. Strip only a leading YAML block and its
// closing delimiter's newline; preserve every byte after it, including CRLF.
export function markdownBody(raw) {
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)
  return match ? raw.slice(match[0].length) : raw
}

export function authoredBody(raw) {
  return markdownBody(raw)
    .replace(/<!-- BEGIN: (hmi-page-history|hmi-page-references) -->[\s\S]*?<!-- END: \1 -->/g, "")
    .trimEnd() + "\n"
}

export function parsePage(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  const data = match ? yaml.load(match[1]) || {} : {}
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid page frontmatter")
  return { data, body: markdownBody(raw) }
}

function stable(value) {
  if (value instanceof Date) return value.toJSON()
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]))
  return value
}

export function contentHashes(raw) {
  const publishedBody = markdownBody(raw)
  const body = authoredBody(raw)
  const { data } = parsePage(raw)
  const metadata = { ...data }
  delete metadata.updated
  if (typeof metadata.sources === "number") delete metadata.sources
  const hash = (text) => crypto.createHash("sha256").update(text, "utf8").digest("hex")
  return {
    content_hash_scheme: CONTENT_HASH_SCHEME,
    content_sha256: hash(body),
    content_bytes: Buffer.byteLength(body, "utf8"),
    metadata_sha256: hash(JSON.stringify(stable(metadata))),
    published_body_sha256: hash(publishedBody),
    published_body_bytes: Buffer.byteLength(publishedBody, "utf8"),
    markdown_sha256: hash(raw),
    markdown_bytes: Buffer.byteLength(raw, "utf8"),
  }
}

export function isVerifiedPin(record) {
  return ["verified_git", "preserved_verified_git"].includes(record?.pin_status) &&
    record.content_hash_scheme === CONTENT_HASH_SCHEME &&
    /^[a-f0-9]{40}$/.test(record.git_commit_sha ?? "") &&
    /^[a-f0-9]{64}$/.test(record.content_sha256 ?? "") &&
    /^[a-f0-9]{64}$/.test(record.metadata_sha256 ?? "") &&
    Number.isSafeInteger(record.content_bytes) && record.content_bytes >= 0 &&
    Number.isSafeInteger(record.markdown_bytes) && record.markdown_bytes >= 0
}

export function sameContent(record, hashes) {
  return ["content_hash_scheme", "content_sha256", "content_bytes", "metadata_sha256"]
    .every((key) => record?.[key] === hashes[key])
}

export function isSafePageSlug(slug) {
  return typeof slug === "string" && /^[a-z0-9][a-z0-9_/-]*$/i.test(slug) &&
    !slug.split("/").some((part) => !part || part === "." || part === "..")
}

export function verificationCommand(record) {
  if (!isVerifiedPin(record) || !isSafePageSlug(record.slug)) return null
  return `node tools/verify-evidence-packet.mjs --commit ${record.git_commit_sha} --slug ${record.slug} --sha256 ${record.content_sha256} --metadata-sha256 ${record.metadata_sha256}`
}

export function manifestContentPin(record) {
  const verified = isVerifiedPin(record)
  return {
    status: verified ? record.pin_status : "unpinned",
    reason: verified ? null : (record.pin_reason || "No verified Git revision is available for these bytes."),
    content_hash_scheme: record.content_hash_scheme || "legacy-sha256-utf8-markdown-body-v1",
    content_hash_description: record.content_hash_scheme === CONTENT_HASH_SCHEME ? CONTENT_HASH_DESCRIPTION : "Legacy index checksum over the Markdown body after stripping leading YAML. No verified Git pin is asserted.",
    content_sha256: record.content_sha256,
    content_bytes: record.content_bytes,
    metadata_sha256: record.metadata_sha256 || null,
    metadata_hash_description: METADATA_HASH_DESCRIPTION,
    published_body_sha256: record.published_body_sha256 || null,
    published_body_bytes: record.published_body_bytes ?? null,
    published_checksum_note: "Published-body and full-Markdown checksums describe the build input, including generated display sections. They are not claimed to equal the Git revision's display sections.",
    markdown_sha256: record.markdown_sha256 || null,
    markdown_bytes: record.markdown_bytes ?? null,
    git_commit_sha: verified ? record.git_commit_sha : null,
    last_commit_sha: verified ? record.last_commit_sha || null : null,
    last_commit_date: verified ? record.last_commit_date || null : null,
    git_remote: GIT_REMOTE,
    verify_command: verificationCommand(record),
  }
}
