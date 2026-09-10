// Shared by page filters and public exports. A pending source is a recovery
// record, never public evidence; ingredient destination stubs remain valid.
export function isSourceRecord(frontmatter = {}, slug = "") {
  return frontmatter.type === "source" || Boolean(frontmatter.cite_key) ||
    (/^sources\/[^/]+$/.test(slug) && !/^sources\/(?:index|_TEMPLATE)$/.test(slug))
}

export function isPendingSource(frontmatter = {}) {
  return String(frontmatter.status ?? "").toLowerCase() === "tier1-stub" ||
    String(frontmatter.evidence_tier ?? "").toLowerCase() === "pending"
}

export function isPublicWikiRecord(frontmatter = {}, slug = "") {
  if (frontmatter.draft === true || frontmatter.draft === "true") return false
  return !(isSourceRecord(frontmatter, slug) && isPendingSource(frontmatter))
}
