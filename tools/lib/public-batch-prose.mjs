// Public pages must read as a literature reference. Ingest bookkeeping
// (verification notes, routing-audit placeholders, batch-report pointers)
// belongs in wiki/batch-reports/, which Quartz does not publish.

export const PUBLIC_BATCH_PROSE_RULES = [
  { id: "recently-added-library", re: /recently added library evidence/i },
  { id: "sources-added-on", re: /\bsources added on\b/i },
  { id: "added-on-date", re: /\badded on\s+\d{1,2}\s+[A-Za-z]+\s+\d{4}\b/i },
  { id: "listed-from", re: /\bare listed from\b/i },
  { id: "routed-findings", re: /further source-specific findings/i },
  { id: "product-routing", re: /product routing is/i },
  { id: "routing-audit", re: /routing audits?/i },
  { id: "manual-resourcing", re: /manual[- ]resourc/i },
  { id: "batch-report", re: /\bbatch[- ]reports?\b|\[\[batch-reports\//i },
  { id: "ingest-run", re: /\bingest runs?\b/i },
  { id: "cloud-agent", re: /\bcloud agents?\b/i },
  { id: "wiki-pages-ingest", re: /wiki pages (?:updated on ingest|this source may touch)/i },
  { id: "verification-notes", re: /^##\s+verification notes\s*$/im },
  { id: "ingest-log", re: /^##\s+ingest log\s*$/im },
  { id: "direction-toward", re: /direction:\s*toward/i },
  { id: "pull-request", re: /\bpull requests?\b|\bPR\s+#?\d{2,}\b/ },
  { id: "commit-pointer", re: /\b(?:commit(?:ted)?(?:\s+at)?)\s+[0-9a-f]{7,40}\b/i },
  { id: "orchestrator-legend", re: /POPULATE-SOURCE-LEGEND|orchestrator's/i },
  { id: "pending-ingest", re: /pending ingest/i },
  { id: "routing-layer", re: /\brouting layer\b|\broute_kind\b|\bsource-routing layer\b/i },
  { id: "page-promoted", re: /^##\s+how this page was promoted\s*$/im },
  { id: "downstream-updated", re: /^##\s+downstream pages updated\s*$/im },
  { id: "ingest-receipt", re: /ingest receipt/i },
]

// Update history is a designed public record. Its commit links are the
// authoritative version pointer, and tools/audit-page-history-leaks.mjs already
// rejects operational vocabulary inside that block. Other marker blocks are
// published prose and are checked.
const HISTORY_BEGIN = "<!-- BEGIN: hmi-page-history -->"
const HISTORY_END = "<!-- END: hmi-page-history -->"

export function hideUpdateHistory(markdown) {
  const lines = markdown.split("\n")
  let hiding = false
  return lines.map((line) => {
    if (line.includes(HISTORY_BEGIN)) {
      hiding = true
      return ""
    }
    if (hiding) {
      if (line.includes(HISTORY_END)) hiding = false
      return ""
    }
    return line
  }).join("\n")
}

export function bodyAfterFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) return markdown
  const end = markdown.indexOf("\n---\n", 4)
  if (end === -1) return markdown
  return markdown.slice(end + 5)
}

export function publicBatchProseViolations(markdown, relPath = "page.md") {
  const findings = []
  const originalBody = bodyAfterFrontmatter(markdown)
  const frontmatterLines = markdown.length === originalBody.length
    ? 0
    : markdown.slice(0, markdown.length - originalBody.length).split("\n").length - 1
  const blanked = hideUpdateHistory(originalBody).replace(/<!--[\s\S]*?-->/g, (comment) => comment.replace(/[^\n]/g, ""))
  blanked.split("\n").forEach((line, i) => {
    if (!line.trim() || /^\s*<!--/.test(line)) return
    for (const rule of PUBLIC_BATCH_PROSE_RULES) {
      if (!rule.re.test(line)) continue
      findings.push({
        file: relPath,
        line: frontmatterLines + i + 1,
        rule: rule.id,
        snippet: line.trim().slice(0, 180),
      })
      break
    }
  })
  return findings
}

const RELOCATE_HEADING = /^(##)\s+(verification notes|ingest log)\s*$/i
const RENAME_HEADING = /^(##)\s+wiki pages (?:updated on ingest|this source may touch|updated)\s*$/i
const BOUNDARY = /^(##\s+|<!-- BEGIN:)/

const LINK = /\[\[([^\]|#]+)(#[^\]|]+)?(\|[^\]]*)?\]\]/g

export function isOperationalLinkTarget(target) {
  const t = String(target || "").replace(/^\.\.\//, "").replace(/^\//, "")
  return t === "log" || t.startsWith("lint/") || t.startsWith("batch-reports/") ||
    t.startsWith("data/") || t.startsWith("tools/") || t.startsWith("docs/") || t === "CLAUDE"
}

export function relocatePublicBatchProse(markdown, relPath = "page.md") {
  const fmEnd = markdown.startsWith("---\n") ? markdown.indexOf("\n---\n", 4) : -1
  const prefix = fmEnd === -1 ? "" : markdown.slice(0, fmEnd + 5)
  const body = fmEnd === -1 ? markdown : markdown.slice(fmEnd + 5)
  const self = relPath.replace(/^wiki\//, "").replace(/\.md$/, "")
  const lines = body.split("\n")
  const kept = []
  const relocated = []
  const rescued = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const relocate = RELOCATE_HEADING.test(line)
    const rename = RENAME_HEADING.test(line)
    if (!relocate && !rename) {
      kept.push(line)
      i += 1
      continue
    }
    const start = i
    const chunk = []
    i += 1
    while (i < lines.length && !BOUNDARY.test(lines[i])) {
      chunk.push(lines[i])
      i += 1
    }
    const text = chunk.join("\n")
    if (relocate) {
      relocated.push({ file: relPath, line: start + 1, heading: line.replace(/^#+\s+/, ""), body: text.trim() })
      rescued.push(...readerLinks(text, self))
    } else {
      const keptLines = chunk.filter((row) => keepRenamedLine(row, self))
      const links = readerLinks(keptLines.join("\n"), self)
      relocated.push({
        file: relPath,
        line: start + 1,
        heading: line.replace(/^#+\s+/, ""),
        body: "(reader-facing links kept under Related evidence)",
      })
      rescued.push(...links)
    }
  }
  let next = kept.join("\n")
  const present = new Set(readerLinks(next, self).map((link) => link.target))
  const missing = []
  const seen = new Set()
  for (const link of rescued) {
    if (present.has(link.target) || seen.has(link.target)) continue
    seen.add(link.target)
    missing.push(link.raw)
  }
  if (missing.length) next = insertRelated(next, missing)
  next = next.replace(/\n{3,}/g, "\n\n").replace(/[ \t]+\n/g, "\n")
  if (!next.endsWith("\n")) next += "\n"
  return { markdown: prefix + next, relocated }
}

function readerLinks(text, self) {
  const out = []
  for (const match of text.matchAll(LINK)) {
    const target = match[1].trim()
    if (isOperationalLinkTarget(target)) continue
    if (target === self) continue
    out.push({ target, raw: `[[${target}${match[2] || ""}${match[3] || ""}]]` })
  }
  return out
}

function keepRenamedLine(line, self) {
  const links = [...line.matchAll(LINK)]
  if (!links.length) return false
  return links.some((match) => {
    const target = match[1].trim()
    return !isOperationalLinkTarget(target) && target !== self
  })
}

function insertRelated(body, links) {
  const block = ["## Related evidence", "", ...links.map((link) => `- ${link}`), ""]
  const marker = body.indexOf("<!-- BEGIN: hmi-page-history -->")
  if (/^## Related evidence\s*$/m.test(body)) {
    return body.replace(/^## Related evidence\s*$/m, (heading) => `${heading}\n\n${links.map((link) => `- ${link}`).join("\n")}`)
  }
  if (marker !== -1) {
    return `${body.slice(0, marker).trimEnd()}\n\n${block.join("\n")}\n\n${body.slice(marker)}`
  }
  return `${body.trimEnd()}\n\n${block.join("\n")}\n`
}

export const READER_SOURCE_CAPTION =
  '<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>'

export const INTERNAL_SOURCE_CAPTION =
  '<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator\'s POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>'

export const INTERNAL_SOURCE_CAPTION_MD =
  '_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator\'s POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._'

export const READER_SOURCE_CAPTION_MD =
  "_Sources catalogued for this page. The last column says how each source is used here._"

export const READER_EMPTY_SOURCES = "_No sources are catalogued for this page yet._"

export const READER_BROAD_CONTEXT = "_Broader-scope sources for this row will be listed here when they are catalogued._"

const INTERNAL_EMPTY_SOURCES =
  "_No sources currently route to this page. Sources will appear here as ingest fans them into this page via the routing audit (CLAUDE.md Part 5b)._"

const ROUTING_PLACEHOLDERS = [
  "_Generator-managed section: will be populated when the routing audit identifies sources with broader author-stated scope._",
  "_Generator-managed section: will be populated when the routing audit identifies sources whose author-stated scope is broader than this row._",
]

// Sentence-level cleanup for published prose that is not a whole ingest section.
// Measured values are not rewritten; only the operational phrase is.
export function scrubPublicBatchSentences(markdown) {
  let text = markdown.replaceAll(INTERNAL_SOURCE_CAPTION, READER_SOURCE_CAPTION)
  text = text.replaceAll(INTERNAL_SOURCE_CAPTION_MD, READER_SOURCE_CAPTION_MD)
  text = text.replaceAll(INTERNAL_EMPTY_SOURCES, READER_EMPTY_SOURCES)
  for (const placeholder of ROUTING_PLACEHOLDERS) text = text.replaceAll(placeholder, READER_BROAD_CONTEXT)
  text = text.replaceAll("the routing audit,", "the source-routing register,")
  const kept = []
  for (const line of text.split("\n")) {
    if (/\bthe batch report records the gap\b/i.test(line)) continue
    if (/^\s*[-*]\s+.*direction:\s*toward/i.test(line)) continue
    if (/product routing is/i.test(line)) {
      kept.push(line
        .replace(/Product routing is broad because/i, "The closest catalogued product pages are used because")
        .replace(/Product routing is matrix-limited:\s*/i, "Measured material: ")
        .replace(/product routing is/gi, "the product category is"))
      continue
    }
    kept.push(line.replace(/\brouting audits?\b/gi, "source routing"))
  }
  return scrubGeneratorBoilerplate(kept.join("\n"))
}

// Scaffold copy that names scripts, queues, or "source routing" as if the
// reader were operating the build. Reader-facing placeholders stay.
export function scrubGeneratorBoilerplate(markdown) {
  let text = markdown
  const pairs = [
    [
      /\*Pending ingest\. The applicable regulatory jurisdictions for this row are recorded in the page frontmatter; the crosswalk table is generated by tools\/apply-product-crosswalk-sections\.mjs once regulation pages and field-evidence sources are routed to this row with structured limit values\.\*/g,
      "*Regulatory limits for this row will be listed here once they are catalogued.*",
    ],
    [
      /\*Pending ingest\. The Source Legend below is auto-generated by `tools\/evidence\/build-source-legend\.mjs` once source pages declaring `products: \[[^\]]+\]` are added\.\*/g,
      "*Sources for this row will be listed here once they are catalogued.*",
    ],
    [
      /_Broad-context source index will be auto-generated here when the (?:source routing|routing audit) identifies sources whose author-stated scope is broader than this product row\._/g,
      READER_BROAD_CONTEXT,
    ],
    [
      /Sources routing to this page appear in `data\/evidence\/product_source_routing_audit\.csv` once the (?:source routing|routing audit) runs\. The source legend below is auto-generated by `tools\/evidence\/build-source-legend\.mjs` on the next prebuild\./g,
      "Sources for this page are listed below as they are catalogued.",
    ],
    [
      /This node is linked from the ingredient index and the FDA TDS source routing table\./g,
      "This ingredient is listed in the ingredient index and in the FDA Total Diet Study source list.",
    ],
    [
      /This node is linked from the ingredient index and source routing list\./g,
      "This ingredient is listed in the ingredient index.",
    ],
    [
      /This page is an autonomy-created stub\. The (?:source routing|routing audit) identified (\d+) source pages in the corpus declaring `[^`]+` in their frontmatter without a dedicated page existing(?:, so the autonomy loop created this stub to give those sources a defined routing target|\. The autonomy loop created this stub so those sources route to a defined target)\. The synthesis pass fills in the contamination profile as sources accumulate\./g,
      "$1 studies in the corpus report this topic. This page collects them. The concentration profile fills in as those studies are read.",
    ],
    [
      /\*Pending ingest\. The routing layer will surface direct-row-fit sources here as they are added to the corpus with `products: \[[^\]]+\]` in source-page frontmatter\.\*/g,
      "*Sources for this row will be listed here once they are catalogued.*",
    ],
    [
      /\*Pending ingest\. The routing layer populates this section from the source-page set declaring `products: \[[^\]]+\]`\.\*/g,
      "*Sources for this row will be listed here once they are catalogued.*",
    ],
    [
      /\*Pending ingest\. The routing layer surfaces sources whose author-stated scope is broader than this row \(route_kind: broad_product_context\) as they are added\.\*/g,
      READER_BROAD_CONTEXT,
    ],
    [
      /\*Pending ingest\. Regulatory events \(recalls, enforcement actions, import alerts\) relevant to this row will be added as agency records are ingested into the corpus\.\*/g,
      "*Public regulatory events for this row, such as recalls and import alerts, will be listed here as they are catalogued.*",
    ],
    [
      /\*Pending ingest\. The Source Legend is auto-generated by `tools\/evidence\/build-source-legend\.mjs` once source pages declaring `products: \[[^\]]+\]` are added\.\*/g,
      "*Sources for this row will be listed here once they are catalogued.*",
    ],
    [
      /No sources are routed to this row yet\. The corpus will accumulate via the source-routing layer\./g,
      "No sources are catalogued for this row yet.",
    ],
    [
      /Source-grounded narrative on this page is populated incrementally from the routed source pages; the evidence-summary table is regenerated by the source-routing layer as sources accumulate\./g,
      "The narrative and the evidence summary on this page grow as studies are catalogued.",
    ],
    [
      /Evidence ingest into this row is in progress; this page is the routing destination for source-page declarations of `products: \[[^\]]+\]`\. Sections below are populated by the routing layer as sources land\. /g,
      "Studies for this row are still being read. ",
    ],
    [
      /Evidence ingest into this row is in progress\./g,
      "Studies for this row are still being read.",
    ],
    [
      /_Pending ingest of commodity-level occurrence data\. /g,
      "",
    ],
    [
      / \(pending ingest of CXS 193-1995\)/g,
      "",
    ],
    [
      /Routing layer \(CLAUDE\.md Part 5b\) fans source-page declarations of `products: \[<slug>\]` to product-category pages\. (\d+) routing rows in current audit\./g,
      "Source pages that name a product are listed on that product page. $1 source-to-page links are on record.",
    ],
    [
      /\*Pending synthesis\. The routing layer and the HMTc evidence-summary generator populate this section from the source-page set declaring `products: \[[^\]]+\]`\.\*/g,
      "*Sources for this row will be listed here once they are catalogued.*",
    ],
    [
      /\*Pending ingest\.\*/g,
      "*Not yet catalogued.*",
    ],
  ]
  for (const [pattern, replacement] of pairs) text = text.replace(pattern, replacement)
  text = text.replace(/^## source routing\s*$/gim, "## Source catalog")
  return text
}
