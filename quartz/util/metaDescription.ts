import type { Root, RootContent } from "hast"
import { toString } from "hast-util-to-string"
import { METAL_NAMES, plainMetalText } from "../../tools/lib/metal-names.mjs"
import { normalizeTitle } from "../../tools/lib/search-snippet.mjs"
import { unescapeHTML } from "./escape"

export const DESCRIPTION_MAX = 155
const INTERNAL =
  /Author metadata needs verification|Step Zero scaffold|bulk-ingest|structural ingredient node|scaffold|\bstub\b|No description provided|No substantive edit history is available in this build/i
const PROCESS =
  /^(?:This (?:source page|page|dashboard) (?:is|makes)|The worker|The following lines|The five most recent substantive edits|Works cited in this page|Source-grounded narrative|Auto-regenerated)/i
const SKIP = new Set([
  "aside",
  "blockquote",
  "table",
  "ul",
  "ol",
  "nav",
  "header",
  "footer",
  "script",
  "style",
  "pre",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
])

export function cleanDescription(
  value: unknown,
  max = DESCRIPTION_MAX,
  expandSymbols = true,
  capitalizeFirst = true,
): string {
  const raw = unescapeHTML(String(value ?? ""))
  let text = normalizeTitle(expandSymbols ? plainMetalText(raw) : raw)
    .replace(
      /^(?:(?:Overview|Scope|Summary|Direct answer|Key (?:findings|numbers)|Literature scope|References|Sources)\b\s*[:.\-]?\s*)+/i,
      "",
    )
    .replace(/(?:\.{3}|…)\s*$/, "")
    .trim()
  if (INTERNAL.test(text)) return ""
  if (text.length > max) {
    const boundary = text.lastIndexOf(" ", max)
    text = boundary >= 0 ? text.slice(0, boundary) : ""
  }
  text = text.replace(/[\s,;:]+$/, "")
  return capitalizeFirst ? text.charAt(0).toUpperCase() + text.slice(1) : text
}

export function firstArticleParagraph(tree?: Root): string {
  function find(node: Root | RootContent): string {
    if (node.type !== "element" && node.type !== "root") return ""
    if (node.type === "element") {
      const classes = String(node.properties.className ?? "").split(/[,\s]+/)
      if (
        SKIP.has(node.tagName) ||
        classes.some((name) =>
          ["hmi-publication-note", "hmi-page-history"].includes(name),
        ) ||
        ["update-history", "page-history"].includes(
          String(node.properties.id ?? ""),
        )
      )
        return ""
      if (node.tagName === "p") {
        const text = toString(node).trim()
        return PROCESS.test(text) ? "" : cleanDescription(text)
      }
    }
    let inHistoryBlock = false
    let historyHeadingLevel = 0
    for (const child of node.children) {
      // Generated history is a sibling range, not an article paragraph container.
      if (child.type === "comment") {
        if (child.value.trim() === "BEGIN: hmi-page-history")
          inHistoryBlock = true
        if (child.value.trim() === "END: hmi-page-history") {
          inHistoryBlock = false
          historyHeadingLevel = 0
        }
        continue
      }
      if (child.type === "element" && /^h[1-6]$/.test(child.tagName)) {
        const level = Number(child.tagName.slice(1))
        if (historyHeadingLevel && level <= historyHeadingLevel)
          historyHeadingLevel = 0
        const label = toString(child)
          .replace(/\s*#\s*$/, "")
          .trim()
        if (
          ["update-history", "page-history"].includes(
            String(child.properties.id ?? ""),
          ) ||
          /^(?:Update|Page|Edit) history$/i.test(label)
        )
          historyHeadingLevel = level
      }
      if (inHistoryBlock || historyHeadingLevel) continue
      const text = find(child)
      if (text) return text
    }
    return ""
  }
  return tree ? find(tree) : ""
}

function topicName(frontmatter: Record<string, unknown>, slug: string): string {
  return cleanDescription(
    frontmatter.title || slug.split("/").at(-1)?.replace(/-/g, " "),
    DESCRIPTION_MAX,
    true,
    false,
  )
    .replace(/^heavy metals? in\s+/i, "")
    .replace(/(?:,\s*|\s+)(?:and|or|with|for|of|in|the)$/i, "")
    .replace(/[,:;]+$/, "")
    .trim()
}

function joinNames(names: string[]): string {
  if (names.length < 2) return names[0] ?? ""
  return `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`
}

export function buildMetaDescription(
  tree: Root | undefined,
  frontmatter: Record<string, unknown>,
  slug = "",
  max = DESCRIPTION_MAX,
): string {
  const topic = topicName(frontmatter, slug) || "Heavy metal evidence"
  const type = String(frontmatter.type ?? "")
  if (["ingredient", "product", "product-category"].includes(type)) {
    const profile = frontmatter.contamination_profile as
      | Record<
          string,
          { status?: string; n_studies?: unknown; typical_ppb?: unknown }
        >
      | undefined
    const priority = ["Pb", "Cd", "iAs", "Hg", "tHg", "MeHg"]
    const symbols = [
      ...priority,
      ...Object.keys(METAL_NAMES).filter(
        (symbol) => !priority.includes(symbol),
      ),
    ]
    const names = symbols
      .filter((symbol) => {
        const cell = profile?.[symbol]
        return (
          cell?.status === "populated" &&
          (Number(cell.n_studies) > 0 ||
            (Array.isArray(cell.typical_ppb) &&
              cell.typical_ppb.some(
                (value: unknown) =>
                  typeof value === "number" && Number.isFinite(value),
              )))
        )
      })
      .map((symbol) => METAL_NAMES[symbol])
    const tail = ` levels in ${topic}, with typical ranges, regulatory limits and cited sources.`
    while (names.length > 1 && joinNames(names).length + tail.length > max)
      names.pop()
    if (names.length) {
      const text = joinNames(names) + tail
      return cleanDescription(text.charAt(0).toUpperCase() + text.slice(1), max)
    }
    // A routing destination without populated measurements makes no range claim.
    return cleanDescription(
      `${topic}: heavy metal evidence and source references.`,
      max,
    )
  }

  if (type === "source" || Boolean(frontmatter.cite_key)) {
    const authors = Array.isArray(frontmatter.authors)
      ? frontmatter.authors
      : [frontmatter.authors]
    const usableAuthors = authors.filter(
      (author): author is string =>
        typeof author === "string" &&
        Boolean(author.trim()) &&
        !/^(?:unknown(?:\s+authors?)?|authors?|not\s+(?:mechanically\s+)?resolved|tbd|n\/a|null|undefined)$/i.test(
          author.trim(),
        ),
    )
    const author = usableAuthors[0]?.trim()
    const year = String(frontmatter.year ?? "").trim()
    if (author && /^(?:18|19|20)\d{2}$/.test(year)) {
      const suffix = ` measured by ${author}${usableAuthors.length > 1 ? " et al." : ""} (${year})`
      const shortTopic = cleanDescription(
        topic,
        Math.max(0, max - suffix.length),
      )
      if (shortTopic) return cleanDescription(shortTopic + suffix, max, false)
    }
    return (
      cleanDescription(firstArticleParagraph(tree), max) ||
      cleanDescription(
        `${topic}: source reference and publication details.`,
        max,
      )
    )
  }

  if (slug.startsWith("audits/") && /^Audit dashboard$/i.test(topic)) {
    const updated =
      frontmatter.updated instanceof Date
        ? frontmatter.updated.toISOString().slice(0, 10)
        : String(frontmatter.updated ?? "")
    const date = slug.endsWith("/index")
      ? ""
      : /^\d{4}-\d{2}-\d{2}$/.test(updated)
        ? ` for ${updated}`
        : ""
    return cleanDescription(
      `${topic}${date}: evidence coverage, source traceability and review checks.`,
      max,
    )
  }

  for (const value of [
    frontmatter.socialDescription,
    frontmatter.description,
    firstArticleParagraph(tree),
  ]) {
    const text = cleanDescription(value, max)
    if (text) return text
  }
  return cleanDescription(
    `${topic}: evidence and source references from the Heavy Metal Index.`,
    max,
  )
}
