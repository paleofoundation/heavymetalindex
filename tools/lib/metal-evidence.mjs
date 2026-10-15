export const METAL_LEGEND_BEGIN = "<!-- BEGIN: hmi-source-legend -->"
export const METAL_LEGEND_END = "<!-- END: hmi-source-legend -->"
export const METAL_PREVIEW_ROWS = 10
export const METAL_EVIDENCE_ROWS_PER_PAGE = 200
export const METAL_EVIDENCE_GENERATOR = "metal-evidence-pages"

export function metalPageOwnsFolder(type, slug, folder) {
  return (type === "metal" || type === "metal-evidence") && slug === folder
}

export function metalLegend(body) {
  const start = body.indexOf(METAL_LEGEND_BEGIN)
  const end = body.indexOf(METAL_LEGEND_END, start)
  if (start < 0 || end < start) return null
  const lines = body.slice(start + METAL_LEGEND_BEGIN.length, end).trim().split("\n")
  const header = lines.findIndex((line) => /^\|\s*#\s*\|/.test(line))
  if (header < 0 || !/^\|\s*-+/.test(lines[header + 1] ?? "")) throw new Error("Metal source legend has no table header")
  const rows = lines.slice(header + 2).filter((line) => /^\|\s*\d+\s*\|/.test(line))
  if (lines.slice(header + 2).some((line) => line.trim() && !/^\|\s*\d+\s*\|/.test(line))) {
    throw new Error("Unexpected content in metal source table; refusing to drop it")
  }
  return { preamble: lines.slice(0, header).join("\n"), header: lines[header], separator: lines[header + 1], rows }
}

export function metalEvidencePages({ slug, title, body }) {
  const legend = metalLegend(body)
  if (!legend?.rows.length) return []
  const chunks = []
  for (let offset = 0; offset < legend.rows.length; offset += METAL_EVIDENCE_ROWS_PER_PAGE) {
    chunks.push(legend.rows.slice(offset, offset + METAL_EVIDENCE_ROWS_PER_PAGE))
  }
  const root = `${slug}/evidence`
  const pageSlug = (index) => index === 0 ? root : `${root}/page-${index + 1}`
  return chunks.map((rows, index) => {
    const first = index * METAL_EVIDENCE_ROWS_PER_PAGE + 1
    const last = first + rows.length - 1
    const pageTitle = index === 0
      ? `${title} evidence table: all cited source records`
      : `${title} evidence table: source records ${first} to ${last}`
    const navigation = [
      `[${title} summary, limits and key findings](/${slug})`,
      ...(index > 0 ? [`[Previous records](/${pageSlug(index - 1)})`] : []),
      ...(index + 1 < chunks.length ? [`[Next records](/${pageSlug(index + 1)})`] : []),
    ].join(" | ")
    const parts = chunks.length > 1
      ? "\n\nTable pages: " + chunks.map((chunk, i) => {
          const start = i * METAL_EVIDENCE_ROWS_PER_PAGE + 1
          return `[${start} to ${start + chunk.length - 1}](/${pageSlug(i)})`
        }).join(" · ")
      : ""
    const description = `${title} source records ${first} to ${last}, with citations and reported findings. See the metal profile for summary, limits and key findings.`
    const preamble = legend.preamble.replace("References above identify works cited in the text.", "References on the metal profile identify works cited in its text.")
    const header = legend.header.replace("Used on this page for", "Used on the metal profile for")
    const markdown = `---
title: ${JSON.stringify(pageTitle)}
type: metal-evidence
generated_by: ${METAL_EVIDENCE_GENERATOR}
parent_metal: ${slug}
description: ${JSON.stringify(description)}
---

# ${pageTitle}

${title}: citations and reported findings from the source records associated with this metal profile. These records include measurements and context; inclusion does not establish that every source reports a food concentration.

${navigation}${parts}

Showing source records ${first} to ${last} of ${legend.rows.length}.

${preamble}

${header}
${legend.separator}
${rows.join("\n")}

${navigation}
`
    return { slug: pageSlug(index), markdown, rows }
  })
}
