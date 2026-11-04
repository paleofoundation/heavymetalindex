// Universal left-sidebar rails for ingredient and product pages.
//
// Rice is the reference: Overview, Contamination, Mitigation, Details, Review,
// FAQs, then the apparatus rails References, Sources, and Updates. Snav numbers
// those nine labels. Heading text may stay specific ("Olive oil overview",
// "Levers to reduce contamination"); this module maps each H2 onto one rail.
// A rail with no heading gets an honest stub. Nothing here invents a measurement
// or a citation.

export const RAILS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    stub: "No overview has been written from the corpus yet.",
  },
  {
    id: "contamination",
    label: "Contamination",
    heading: "Contamination",
    stub: "No measured data yet in our corpus.",
  },
  {
    id: "mitigation",
    label: "Mitigation",
    heading: "Mitigation",
    stub: "No mitigation evidence yet in our corpus.",
  },
  {
    id: "details",
    label: "Details",
    heading: "Details",
    stub: "No further detail has been compiled from the corpus yet.",
  },
  {
    id: "review",
    label: "Review",
    heading: "Review",
    stub: "No evidence review yet in our corpus.",
  },
  {
    id: "faqs",
    label: "FAQs",
    heading: "FAQs",
    stub: "No frequently asked questions have been compiled for this page yet.",
  },
  {
    id: "references",
    label: "References",
    heading: "References",
    stub: "No works are cited in this page's text yet.",
    apparatus: true,
  },
  {
    id: "sources",
    label: "Sources",
    heading: "Sources",
    stub: "No source list has been compiled into this section yet.",
    apparatus: true,
  },
  {
    id: "updates",
    label: "Updates",
    heading: "Update history",
    stub: "Version history for this page lives in git.",
    apparatus: true,
  },
]

export const CANONICAL_LABELS = RAILS.map((rail) => rail.label)

// Internal scaffold headings. They stay on the page and do not occupy a rail.
export const HIDDEN_HEADINGS = [
  /^status$/i,
  /^completeness scorecard$/i,
  /^routing$/i,
  /^contamination profile state$/i,
  /^page completeness$/i,
  /scaffold status/i,
  /evidence governance/i,
]

// Checked in order. The first match wins. Unmatched reader headings are Details.
const MATCHERS = [
  {
    id: "overview",
    patterns: [
      /^overview$/i,
      /overview$/i,
      /^what counts as /i,
      /^who this page is for$/i,
      /^methodology$/i,
      /^literature scope$/i,
      /^direct answer$/i,
      /^decision snapshot$/i,
      /^decision summary$/i,
      /^why this /i,
      /^why .+ accumulat/i,
      /^accumulation mechanism$/i,
      /identity and scope$/i,
      /^at a glance$/i,
    ],
  },
  {
    id: "mitigation",
    patterns: [
      /^mitigation\b/i,
      /^trade-offs\b/i,
      /^levers to reduce/i,
      /^regulatory limits/i,
      /^applicable regulations/i,
      /^regulatory framework/i,
      /limits vs field findings/i,
      /^limits applicable/i,
      /remediation/i,
      /^reducing contamination/i,
      /^how to reduce/i,
      /^washing, peeling/i,
      /sourcing and supplier evidence/i,
    ],
  },
  {
    id: "contamination",
    patterns: [
      /^contamination$/i,
      /contamination profile/i,
      /^how metals reach /i,
      /measured lower/i,
      /^processing, cooking/i,
      /contamination pathways/i,
      /^variation by origin/i,
      /^ranges by source/i,
      /^ranges by region/i,
      /^concentration ranges/i,
      /^geographic and varietal variation/i,
      /^processing effects/i,
      /^effects of processing/i,
      /derivative risk/i,
      /^derivatives and concentrates/i,
      /^reported measurements$/i,
      /evidence summary/i,
      /source evidence inventory/i,
      /^occurrence evidence$/i,
      /fda tds/i,
      /^measurements filed/i,
      /^extracted formula/i,
      /french tds/i,
      /^broad product context/i,
      /^ingredient drivers$/i,
      /^distribution context$/i,
      /^measured ranges/i,
      /benchmark context/i,
    ],
  },
  {
    id: "review",
    patterns: [
      /^review$/i,
      /^interpretation of source evidence$/i,
      /evidence review/i,
      /^what remains uncertain$/i,
      /research gaps/i,
      /remaining gaps/i,
      /remaining questions/i,
      /evidence assessment/i,
      /contradiction watch/i,
    ],
  },
  {
    id: "faqs",
    patterns: [/^faqs$/i, /\bfaqs?\b/i, /frequently asked questions/i],
  },
  {
    id: "details",
    patterns: [
      /^details$/i,
      /^testing\b/i,
      /^sampling and testing/i,
      /^buying and verifying/i,
      /^procurement\b/i,
      /^exposure from /i,
      /^finished-product/i,
      /^how standards math/i,
      /recall/i,
      /enforcement/i,
      /^microbiome/i,
    ],
  },
  {
    id: "references",
    patterns: [/^references$/i],
  },
  {
    id: "sources",
    patterns: [/^sources$/i],
  },
  {
    id: "updates",
    patterns: [/^(?:update history|page history)$/i],
  },
]

const RAIL_BY_ID = new Map(RAILS.map((rail) => [rail.id, rail]))

export function classifyHeading(title) {
  const text = String(title ?? "").trim()
  if (!text || HIDDEN_HEADINGS.some((pattern) => pattern.test(text))) return "hidden"
  // Same order as the sidebar parents, then the apparatus rails.
  for (const rail of RAILS) {
    const patterns = MATCHERS.find((matcher) => matcher.id === rail.id)?.patterns ?? []
    if (patterns.some((pattern) => pattern.test(text))) return rail.id
  }
  return "details"
}

export function patternsFor(id) {
  return MATCHERS.find((matcher) => matcher.id === id)?.patterns ?? []
}

// Parents for quartz/content-model.ts. Unmatched headings are absorbed into Details.
export function universalParents() {
  return RAILS.filter((rail) => !rail.apparatus).map((rail) => ({
    id: rail.id,
    label: rail.label,
    defaultOpen: rail.id === "overview",
    direct: rail.id === "review" || rail.id === "faqs",
    children: [{ id: rail.id, patterns: patternsFor(rail.id) }],
  }))
}

export function splitFrontmatter(content) {
  if (!content.startsWith("---\n") && !content.startsWith("---\r\n")) return { fm: "", body: content }
  const end = content.indexOf("\n---", 3)
  if (end < 0) return { fm: "", body: content }
  const lineEnd = content.indexOf("\n", end + 1)
  const fmEnd = lineEnd === -1 ? content.length : lineEnd + 1
  return { fm: content.slice(0, fmEnd), body: content.slice(fmEnd) }
}

export function h2Headings(body) {
  const lines = body.split("\n")
  const headings = []
  let fence = false
  let offset = 0
  for (const line of lines) {
    if (/^```/.test(line)) fence = !fence
    else if (!fence) {
      const match = /^##[ \t]+(.+?)[ \t]*#*[ \t]*$/.exec(line)
      if (match) headings.push({ text: match[1].trim(), index: offset })
    }
    offset += line.length + 1
  }
  return headings
}

export function missingRailIds(headings) {
  const present = new Set()
  for (const heading of headings) {
    const rail = classifyHeading(heading.text ?? heading)
    if (rail !== "hidden") present.add(rail)
  }
  return RAILS.filter((rail) => !present.has(rail.id)).map((rail) => rail.id)
}

export function pageHasCanonicalRails(content) {
  const { body } = splitFrontmatter(content)
  return missingRailIds(h2Headings(body)).length === 0
}

const REFERENCES_BEGIN = "<!-- BEGIN: hmi-page-references -->"
const REFERENCES_END = "<!-- END: hmi-page-references -->"
const SOURCES_BEGIN = "<!-- BEGIN: hmi-source-legend -->"
const SOURCES_END = "<!-- END: hmi-source-legend -->"
const HISTORY_BEGIN = "<!-- BEGIN: hmi-page-history -->"
const HISTORY_END = "<!-- END: hmi-page-history -->"

function cited(body) {
  return /\[\[sources\//.test(body)
}

export function referencesStub(body = "") {
  const sentence = cited(body)
    ? "Works cited in this page's text do not yet have a numbered reference list in this section."
    : RAIL_BY_ID.get("references").stub
  return `${REFERENCES_BEGIN}\n## References\n\n${sentence}\n${REFERENCES_END}`
}

function sourcesStub() {
  return `${SOURCES_BEGIN}\n## Sources\n\n${RAIL_BY_ID.get("sources").stub}\n${SOURCES_END}`
}

function historyStub() {
  return `${HISTORY_BEGIN}\n## Update history\n\n${RAIL_BY_ID.get("updates").stub}\n${HISTORY_END}`
}

function blockFor(id, body) {
  if (id === "references") return referencesStub(body)
  if (id === "sources") return sourcesStub()
  if (id === "updates") return historyStub()
  const rail = RAIL_BY_ID.get(id)
  return `## ${rail.heading}\n\n${rail.stub}`
}

function retreat(body, index) {
  const lineStart = body.lastIndexOf("\n", Math.max(0, index - 1)) + 1
  const prefix = body.slice(0, lineStart)
  const lines = prefix.split("\n")
  let cut = lines.length
  if (cut > 0 && lines[cut - 1] === "") cut -= 1
  while (cut > 0) {
    const line = lines[cut - 1].trim()
    if (line === "" || /^<!--\s*BEGIN:/.test(line)) {
      cut -= 1
      continue
    }
    break
  }
  if (cut <= 0) return 0
  const kept = lines.slice(0, cut).join("\n")
  return kept.length + 1
}

function orderOf(id) {
  return RAILS.findIndex((rail) => rail.id === id)
}

function insertAt(headings, id) {
  const order = orderOf(id)
  for (const heading of headings) {
    const rail = classifyHeading(heading.text)
    if (rail === "hidden") continue
    if (orderOf(rail) > order) return heading.index
  }
  return null
}

function spliceJobs(body, jobs) {
  // Retreat on the original text, then insert each landing spot once.
  // Two rails often share a spot in front of a footer marker. Inserting them
  // one at a time at the pre-retreat index splits the first block.
  const groups = new Map()
  for (const job of jobs) {
    const at = retreat(body, job.at)
    if (!groups.has(at)) groups.set(at, [])
    groups.get(at).push(job)
  }
  let next = body
  for (const at of [...groups.keys()].sort((a, b) => b - a)) {
    const block = groups
      .get(at)
      .sort((a, b) => a.order - b.order)
      .map((job) => job.text.replace(/\s+$/, ""))
      .join("\n\n")
    const before = next.slice(0, at).replace(/\n+$/, "")
    const after = next.slice(at).replace(/^\n+/, "")
    const prefix = before.length ? `${before}\n\n` : ""
    const suffix = after.length ? `\n\n${after}` : "\n"
    next = `${prefix}${block}${suffix}`
  }
  if (!next.endsWith("\n")) next += "\n"
  return next
}

// Insert only the missing rails. Existing headings, anchors, and prose stay put.
export function ensureCanonicalRails(content) {
  const { fm, body } = splitFrontmatter(content)
  const headings = h2Headings(body)
  const missing = missingRailIds(headings)
  if (missing.length === 0) return { content, inserted: [] }
  const end = body.length
  const jobs = missing.map((id) => ({
    id,
    order: orderOf(id),
    at: insertAt(headings, id) ?? end,
    text: blockFor(id, body),
  }))
  const nextBody = spliceJobs(body, jobs)
  return { content: fm + nextBody, inserted: missing }
}
