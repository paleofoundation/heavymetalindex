// Shared citation rendering for the two source-facing blocks on every wiki page.
//
// The blocks answer different questions and must not be confused:
//
//   References (build-page-references.mjs) — the works this page's prose actually
//   cites, numbered in the order the superscripts appear, in full citation form.
//   This is the list a regulatory reviewer or a plaintiff's expert follows to
//   check a specific claim.
//
//   Sources (evidence/build-source-legend.mjs) — the full corpus set routed to
//   this page by source-page frontmatter, whether or not the prose cites it yet.
//   This is the coverage record: what the page was built against.
//
// Both render author labels the same way, so the numbering in one is legible
// against the other. That shared logic lives here.

export const KNOWN_ORG_LABELS = {
  fda: "FDA", eu: "EU", efsa: "EFSA", jecfa: "JECFA", who: "WHO",
  epa: "EPA", usda: "USDA", atsdr: "ATSDR", codex: "Codex",
  iarc: "IARC", iom: "IOM", cfia: "CFIA", fsanz: "FSANZ", fsa: "FSA",
  cdc: "CDC", nih: "NIH", ec: "EC", echa: "ECHA", ema: "EMA",
  hpfb: "HPFB", anses: "ANSES", bfr: "BfR", rivm: "RIVM",
  cr: "CR",  // Consumer Reports
  hbbf: "HBBF",
  ewg: "EWG",
  oehha: "OEHHA",
}

// Normalizes the various source_type spellings to a small display vocabulary.
export function displayType(srcType) {
  if (!srcType) return "—"
  const s = String(srcType).toLowerCase().trim().replace(/_/g, "-")
  if (s === "peer-reviewed") return "Peer-reviewed"
  if (s === "regulation" || s === "gov-regulation" || s === "government-regulatory") return "Regulation"
  if (s.startsWith("review") || s === "systematic-review") return "Review"
  if (s.startsWith("gov") && s.includes("data")) return "Government dataset"
  if (s === "dataset") return "Government dataset"
  if (s.startsWith("gov") && s.includes("guidance")) return "Government guidance"
  if (s.startsWith("gov")) return "Government report"
  if (s.startsWith("textbook")) return "Textbook chapter"
  if (s.startsWith("ngo")) return "NGO report"
  if (s === "industry" || s.startsWith("industry")) return "Industry"
  if (s.startsWith("news")) return "News"
  if (s.startsWith("conference")) return "Conference proceedings"
  if (s === "study") return "Study"
  if (s === "database") return "Database"
  // Fallback: capitalize first letter, replace hyphens with spaces
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ")
}

export function renderAuthorLabel(authors, year, citeKey) {
  if (!Array.isArray(authors) || authors.length === 0) {
    return inferOrgLabelFromCiteKey(citeKey, year)
  }
  const first = String(authors[0] || "").trim()
  // Institutional/agency authors — surname extraction doesn't apply.
  if (isInstitutionalAuthor(first)) {
    return inferOrgLabelFromCiteKey(citeKey, year, first)
  }
  const surname = extractSurname(first)
  if (authors.length === 1) {
    return `${surname} ${year ?? ""}`.trim()
  }
  return `${surname} et al. ${year ?? ""}`.trim()
}

export function isInstitutionalAuthor(name) {
  return /\b(Administration|Commission|Agency|Authority|Department|Ministry|Organization|Council|Committee|Service|Centre|Center|Institute|Codex|EFSA|JECFA|WHO|FDA|EPA|USDA|ATSDR|EU|Office|Bureau|CFIA|FSANZ|FSA|CDC|NIH|IARC|IOM)\b/i.test(name)
}

export function inferOrgLabelFromCiteKey(citeKey, year, fallbackName) {
  if (!citeKey) return fallbackName ?? `Source ${year ?? ""}`.trim()
  const head = String(citeKey).split("-")[0]
  const orgKey = head.replace(/\d+$/, "")
  const display =
    KNOWN_ORG_LABELS[orgKey] ||
    (fallbackName ? shortenOrgName(fallbackName) : capitalize(orgKey))
  return `${display} ${year ?? ""}`.trim()
}

// "U.S. Food and Drug Administration" → "FDA" (already in known map)
// "European Commission" → "European Commission"
// "Health Canada" → "Health Canada"
// Last-resort shortening for unknown orgs: keep the original name if short
// enough; otherwise return the first 3-4 words.
export function shortenOrgName(name) {
  const trimmed = String(name).trim()
  if (trimmed.length <= 25) return trimmed
  const words = trimmed.split(/\s+/).slice(0, 4)
  return words.join(" ")
}

// Extracts a surname from a single author string. Handles three common forms:
//   - "Lastname F" or "Lastname FI" → first token (e.g. "Chung S" → "Chung")
//   - "Lastname, F." → before-comma (e.g. "Chung, S." → "Chung")
//   - "First M. Last" → last token (e.g. "Rachel C. Thoerig" → "Thoerig")
// Heuristic: if the last whitespace-separated token looks like initials
// (1-3 capital letters, optionally with periods), the first token is the
// surname; otherwise the last token is the surname.
export function extractSurname(author) {
  if (!author) return ""
  const cleaned = String(author).trim()
  if (cleaned.includes(",")) {
    return cleaned.split(",")[0].trim()
  }
  const tokens = cleaned.split(/\s+/)
  if (tokens.length <= 1) return cleaned
  const last = tokens[tokens.length - 1]
  // Initials: like "S", "S.", "SR", "S.R.", "SRC" — 1-3 caps, allow periods
  if (/^[A-Z](\.|[A-Z]\.?){0,2}\.?$/.test(last)) {
    return tokens[0]
  }
  return last
}

export function capitalize(value) {
  const s = String(value ?? "")
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Author list for a full reference entry. Up to six names are listed in full,
// as journals do; beyond that the list is truncated with "et al." so a
// 40-author collaboration paper does not swamp the reference.
function renderAuthorList(authors) {
  if (!Array.isArray(authors) || authors.length === 0) return ""
  const names = authors.map((a) => String(a).trim()).filter(Boolean)
  if (names.length === 0) return ""
  if (names.length === 1) return names[0]
  if (names.length === 2) return `${names[0]} and ${names[1]}`
  if (names.length <= 6) return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`
  return `${names.slice(0, 6).join(", ")}, et al.`
}

/**
 * Full reference entry for the numbered References list.
 *
 * Shape: Authors (Year). *Title*. Publication. DOI/URL. [source page link]
 *
 * The trailing wikilink to the source page is what makes the reference auditable:
 * it leads to the ingest receipt, the raw-file hash, and the extracted values,
 * so a reviewer can check the claim against the paper rather than against the
 * wiki's summary of it.
 *
 * @param {object} fm     source-page frontmatter
 * @param {string} citeKey
 * @returns {string} markdown, no leading list marker
 */
/**
 * Short uppercase source-type tag for the redesigned reference card
 * (the right-aligned label in the References block).
 *
 * IMPORTANT — this reads the REAL `source_type` frontmatter and nothing else.
 * The v3 mock distinguishes "AGENCY OPINION" from "GOVERNMENT" and calls Codex a
 * "STANDARD", but the corpus does not record those distinctions: an EFSA opinion
 * and an ATSDR profile both carry `source_type: gov-report`. Inventing the finer
 * tag from a title keyword would be fabricating a classification the evidence
 * base does not support, and one miscategorised entry is exactly what discredits
 * a reference list under scrutiny. So the tag is derived only from the recorded
 * type. Where the field genuinely says "standard" (regulatory-standard) it reads
 * STANDARD; an EFSA opinion reads GOVERNMENT, honestly.
 *
 * Order matters: the more specific prefix wins before the generic "report".
 */
export function referenceTag(fm) {
  const s = String(fm?.source_type || "").toLowerCase().trim().replace(/[_\s]+/g, "-")
  if (!s) return "Source"
  if (/standard/.test(s)) return "Standard"
  if (/guidance/.test(s)) return "Guidance"
  if (/industry|trade|application-note/.test(s)) return "Industry"
  if (/ngo|non-?profit/.test(s)) return "NGO"
  if (/preprint/.test(s)) return "Preprint"
  // "review" only as a whole type token (review, systematic-review,
  // review-article, peer-reviewed-review) — NOT the substring inside
  // "peer-reviewed", which must fall through to Peer-reviewed below. Without the
  // boundaries this fired first on all ~2,550 peer-reviewed primary studies
  // (cohorts, in-vitro, analytical work) and mislabeled every one of them
  // "Review" in the references blocks and the scholarly PDFs — the exact kind of
  // miscategorised entry that discredits a reference list under expert scrutiny.
  if (/(^|-)review(-|$)/.test(s)) return "Review"
  if (/peer-reviewed|journal|^article|^study$/.test(s)) return "Peer-reviewed"
  if (/textbook|book/.test(s)) return "Textbook"
  if (/thesis|dissertation/.test(s)) return "Thesis"
  if (/conference|proceeding/.test(s)) return "Conference"
  if (/dataset|database|-data\b/.test(s)) return "Dataset"
  // A report FROM a government or agency is GOVERNMENT, before the bare
  // "regulatory" prefix can claim it as a REGULATION.
  if (/report/.test(s) && /gov|government|agency/.test(s)) return "Government"
  if (/regulation|regulatory/.test(s)) return "Regulation"
  if (/gov|government|agency|regulator/.test(s)) return "Government"
  if (/news/.test(s)) return "News"
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ")
}

const stripTrail = (v) => String(v).trim().replace(/\s*\.$/, "")

/**
 * The meta line under a reference title: who · publication · year · DOI.
 *
 * For a paper the "who" is the author list (up to six, then et al.); for an
 * agency document there are no authors, so the publication IS the issuing body
 * and is not repeated. The DOI (or, failing that, the access host) is kept as a
 * link so the primary source is reachable in one hop, not only via the source
 * record — that redundancy is what keeps the short form independently
 * verifiable. Rendered as markdown so Quartz resolves the DOI link; the whole
 * string sits inside an inline <span class="hmi-ref-meta">, whose contents are
 * still parsed as markdown.
 */
// Two org strings are "the same body" when one contains the other once
// punctuation and case are dropped. This is what stops an agency document
// printing its issuer twice — author "Agency for Toxic Substances and Disease
// Registry" beside publication "U.S. Department of Health…, Agency for Toxic
// Substances and Disease Registry" — while still keeping a real journal (EFSA
// Panel … · EFSA Journal), which is not a containment.
function sameBody(a, b) {
  const norm = (v) =>
    String(v)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
  const na = norm(a)
  const nb = norm(b)
  if (!na || !nb) return false
  return na.includes(nb) || nb.includes(na)
}

export function renderReferenceMeta(fm, citeKey) {
  const bits = []
  const authorList = renderAuthorList(fm.authors)
  if (authorList) {
    bits.push(authorList)
    if (fm.publication && !sameBody(authorList, fm.publication)) bits.push(stripTrail(fm.publication))
  } else if (fm.publication) {
    bits.push(stripTrail(fm.publication))
  } else {
    bits.push(inferOrgLabelFromCiteKey(citeKey))
  }
  const year = fm.year
  if (year != null && String(year).trim() && String(year).toLowerCase() !== "n.d.") {
    bits.push(String(year).trim())
  }
  if (fm.doi) {
    const doi = String(fm.doi).replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "")
    bits.push(`[doi.org/${doi}](https://doi.org/${doi})`)
  } else if (fm.access_url) {
    const url = String(fm.access_url).trim()
    const host = url.replace(/^https?:\/\//i, "").split("/")[0]
    bits.push(`[${host}](${url})`)
  }
  return bits.join(" · ")
}

/**
 * One entry in the redesigned (short-form) References list.
 *
 * Shape, as markdown so Quartz resolves the wikilink and stamps its popover
 * metadata:
 *
 *   [[sources/<key>|Title]]<span class="hmi-ref-meta">…</span><span class="hmi-ref-tag">Type</span>
 *
 * The title IS the link to the source record — the auditable anchor that leads
 * to the ingest receipt, the file hash, and the extracted values. The spans
 * carry no whitespace between them so the CSS grid that lays out
 * number / title+meta / tag gets exactly three items and no phantom cells.
 */
export function renderReferenceEntry(fm, citeKey) {
  const rawTitle = stripTrail(String(fm.title || "(untitled)"))
  // The title becomes a wikilink LABEL; strip the three characters that would
  // terminate or malform it. Rare in practice, catastrophic when present.
  const label = rawTitle.replace(/[[\]|]/g, " ").replace(/\s+/g, " ").trim() || "(untitled)"
  const meta = renderReferenceMeta(fm, citeKey)
  const tag = referenceTag(fm)
  return (
    `[[sources/${citeKey}|${label}]]` +
    `<span class="hmi-ref-meta">${meta}</span>` +
    `<span class="hmi-ref-tag">${tag}</span>`
  )
}

export function renderFullCitation(fm, citeKey) {
  const parts = []
  const authorList = renderAuthorList(fm.authors)
  const year = fm.year ?? "n.d."
  parts.push(authorList ? `${authorList} (${year}).` : `${inferOrgLabelFromCiteKey(citeKey, year)}.`)

  const title = String(fm.title || "(untitled)").trim().replace(/\s*\.$/, "")
  parts.push(`*${title}*.`)

  if (fm.publication) parts.push(`${String(fm.publication).trim().replace(/\s*\.$/, "")}.`)

  if (fm.doi) {
    const doi = String(fm.doi).replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "")
    parts.push(`[https://doi.org/${doi}](https://doi.org/${doi}).`)
  } else if (fm.access_url) {
    // Agency documents rarely carry a DOI and their URLs run to 150+ characters.
    // The host is shown as the label so the entry stays readable; the link
    // carries the exact document, and the source record carries the full URL.
    const url = String(fm.access_url).trim()
    const host = url.replace(/^https?:\/\//i, "").split("/")[0]
    parts.push(`[${host}](${url}).`)
  }

  const tier = fm.evidence_tier ? `${String(fm.evidence_tier).toUpperCase()}-tier` : null
  const type = displayType(fm.source_type)
  const descriptors = [type && type !== "—" ? type : null, tier].filter(Boolean).join(", ")
  const trail = descriptors ? ` ${descriptors}. ` : " "

  return `${parts.join(" ")}${trail}[[sources/${citeKey}|Source record]]`
}
