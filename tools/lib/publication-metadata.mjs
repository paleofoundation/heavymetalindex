import identity from "../../data/researcher-identity.json" with { type: "json" }

// Only original HMI analytical works opt into the legacy named-author default.
// Explicit authors always win; missing/invalid external authors never become Karen.
export function publicationAuthors(frontmatter, { defaultToKaren = false, enrichResearcher = true } = {}) {
  const declared = frontmatter.creators ?? frontmatter.authors ?? frontmatter.author
  const entries = declared === undefined
    ? (defaultToKaren ? [identity.name] : [])
    : (Array.isArray(declared) ? declared : [declared])
  return entries.flatMap((entry) => {
    const object = entry && typeof entry === "object" ? entry : undefined
    const name = typeof entry === "string" ? entry.trim() : String(object?.name ?? "").trim()
    if (!name) return []
    const suppliedOrcid = object?.orcid ?? (entries.length === 1 ? frontmatter.author_orcid : undefined)
    const orcid = typeof suppliedOrcid === "string"
      ? suppliedOrcid.trim().replace(/^https:\/\/orcid\.org\//i, "") : undefined
    const matchesName = [identity.name, identity.citationName].some((n) => n.toLowerCase() === name.toLowerCase())
    if (matchesName && orcid && orcid !== identity.orcid) {
      throw new Error("Karen Pendergrass has a conflicting ORCID in author metadata")
    }
    if (!matchesName && orcid === identity.orcid) {
      throw new Error("A different named author cannot inherit Karen Pendergrass's ORCID")
    }
    const isKaren = enrichResearcher && matchesName
    return [{ name, isKaren, ...(isKaren ? { orcid: identity.orcid } : orcid ? { orcid } : {}) }]
  })
}

// Modification/creation timestamps are not evidence of publication. Accept only
// explicit publication fields and real calendar dates, with year-only precision.
export function citationDate(value) {
  if (value === undefined || value === null || typeof value === "boolean") return undefined
  const raw = value instanceof Date ? (Number.isNaN(value.getTime()) ? "" : value.toISOString().slice(0, 10)) : String(value).trim()
  if (/^\d{4}$/.test(raw)) return raw
  const match = /^(\d{4})[-/](\d{2})[-/](\d{2})$/.exec(raw)
  if (!match) return undefined
  const [, year, month, day] = match
  const date = new Date(`${year}-${month}-${day}T00:00:00.000Z`)
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== `${year}-${month}-${day}`) return undefined
  return `${year}/${month}/${day}`
}
