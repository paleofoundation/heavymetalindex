import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Element, ElementContent, Root } from "hast"
import { toString } from "hast-util-to-string"
import { visit } from "unist-util-visit"
import { BuildCtx } from "../../util/ctx"
import { QuartzTransformerPlugin } from "../types"

type SourceEntry = {
  href: string
  number: number
  slug: string
  title: string
}

const narrowSourceColumnHeaders = new Set(["citation", "citations", "source", "sources"])
const evidenceLinkColumnHeaders = new Set([
  ...narrowSourceColumnHeaders,
  "caveat",
  "decision read",
  "distribution use",
  "evidence",
  "evidence note",
  "row-fit caveat",
  "use note",
])
const sourceSlugPrefix = "sources/"

function isElement(node: unknown): node is Element {
  return typeof node === "object" && node !== null && (node as Element).type === "element"
}

function makeText(value: string): ElementContent {
  return { type: "text", value }
}

function makeElement(
  tagName: string,
  properties: Element["properties"],
  children: ElementContent[],
): Element {
  return {
    type: "element",
    tagName,
    properties,
    children,
  }
}

function getClasses(node: Element): string[] {
  const raw = node.properties?.className
  if (Array.isArray(raw)) {
    return raw.map(String)
  }

  if (typeof raw === "string") {
    return raw.split(/\s+/).filter(Boolean)
  }

  return []
}

function addClass(node: Element, className: string) {
  const classes = new Set(getClasses(node))
  classes.add(className)
  node.properties = {
    ...node.properties,
    className: [...classes],
  }
}

function directChildrenByTag(node: Element, tagNames: Set<string>): Element[] {
  return node.children.filter(
    (child): child is Element => isElement(child) && tagNames.has(child.tagName),
  )
}

function rowCells(row: Element): Element[] {
  return directChildrenByTag(row, new Set(["td", "th"]))
}

function tableRows(table: Element): Element[] {
  const rows: Element[] = []
  const sections = directChildrenByTag(table, new Set(["thead", "tbody", "tfoot"]))
  for (const section of sections) {
    rows.push(...directChildrenByTag(section, new Set(["tr"])))
  }
  rows.push(...directChildrenByTag(table, new Set(["tr"])))
  return rows
}

function headerRow(table: Element): Element | undefined {
  const thead = directChildrenByTag(table, new Set(["thead"])).at(0)
  return thead ? directChildrenByTag(thead, new Set(["tr"])).at(0) : tableRows(table).at(0)
}

function headerColumnIndexes(table: Element, headers: Set<string>): number[] {
  const header = headerRow(table)
  if (!header) {
    return []
  }

  return rowCells(header)
    .map((cell, index) => ({ index, label: normalizeHeader(toString(cell)) }))
    .filter(({ label }) => headers.has(label))
    .map(({ index }) => index)
}

function columnsAreTrailing(columnIndexes: number[], totalColumns: number): boolean {
  if (columnIndexes.length === 0) {
    return true
  }

  const firstTrailingIndex = totalColumns - columnIndexes.length
  return columnIndexes.every((columnIndex, offset) => columnIndex === firstTrailingIndex + offset)
}

function moveRowCellsToEnd(row: Element, columnIndexes: number[]) {
  const targetColumns = new Set(columnIndexes)
  const kept: ElementContent[] = []
  const moved: ElementContent[] = []
  let cellIndex = 0

  for (const child of row.children) {
    if (isElement(child) && (child.tagName === "td" || child.tagName === "th")) {
      if (targetColumns.has(cellIndex)) {
        moved.push(child)
      } else {
        kept.push(child)
      }
      cellIndex += 1
    } else {
      kept.push(child)
    }
  }

  row.children = [...kept, ...moved]
}

function moveColumnsToEnd(table: Element, columnIndexes: number[]) {
  const header = headerRow(table)
  if (!header) {
    return
  }

  const sortedColumnIndexes = [...columnIndexes].sort((a, b) => a - b)
  if (columnsAreTrailing(sortedColumnIndexes, rowCells(header).length)) {
    return
  }

  tableRows(table).forEach((row) => moveRowCellsToEnd(row, sortedColumnIndexes))
}

function normalizeHeader(value: string): string {
  return value.trim().replace(/\s+/g, " ").toLowerCase()
}

function sourceSlug(link: Element): string | undefined {
  const raw = link.properties?.["data-slug"]
  if (typeof raw !== "string") {
    return undefined
  }

  const slug = raw.replace(/^\/+|\/+$/g, "")
  return slug.startsWith(sourceSlugPrefix) ? slug : undefined
}

function collectSourceLinks(node: ElementContent, links: Element[] = []): Element[] {
  if (!isElement(node)) {
    return links
  }

  if (node.tagName === "a" && sourceSlug(node)) {
    links.push(node)
    return links
  }

  for (const child of node.children) {
    collectSourceLinks(child, links)
  }

  return links
}

function hasChildren(parent: unknown): parent is { children: ElementContent[] } {
  return typeof parent === "object" && parent !== null && Array.isArray((parent as Root).children)
}

function prettifySourceSlug(slug: string): string {
  return slug
    .replace(/^sources\//, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function sourceTitleResolver(ctx: BuildCtx) {
  const cache = new Map<string, string>()
  const contentDir = path.resolve(ctx.argv.directory)

  return (slug: string, fallback: string): string => {
    if (cache.has(slug)) {
      return cache.get(slug)!
    }

    const safeSlug = slug.replace(/^\/+|\/+$/g, "")
    const sourcePath = path.resolve(contentDir, `${safeSlug}.md`)
    const fallbackTitle = fallback.trim() || prettifySourceSlug(safeSlug)

    if (!sourcePath.startsWith(contentDir + path.sep) || !fs.existsSync(sourcePath)) {
      cache.set(slug, fallbackTitle)
      return fallbackTitle
    }

    const parsed = matter(fs.readFileSync(sourcePath, "utf8"))
    const title = typeof parsed.data.title === "string" ? parsed.data.title.trim() : ""
    const resolved = title || fallbackTitle
    cache.set(slug, resolved)
    return resolved
  }
}

function compactSourceLink(link: Element, entry: SourceEntry) {
  addClass(link, "hmi-compact-citation")
  link.properties = {
    ...link.properties,
    "aria-label": `Source ${entry.number}: ${entry.title}`,
    "data-citation-number": String(entry.number),
    "data-no-popover": "true",
    "data-source-title": entry.title,
    title: entry.title,
  }
  link.children = [makeText(`[${entry.number}]`)]
}

function legendLink(entry: SourceEntry): Element {
  return makeElement(
    "a",
    {
      href: entry.href,
      className: ["internal", "hmi-compact-citation"],
      "aria-label": `Source ${entry.number}: ${entry.title}`,
      "data-citation-number": String(entry.number),
      "data-no-popover": "true",
      "data-slug": entry.slug,
      title: entry.title,
    },
    [makeText(`[${entry.number}]`)],
  )
}

function makeLegend(entries: SourceEntry[]): Element {
  const children: ElementContent[] = [
    makeElement("span", { className: ["hmi-table-source-legend__label"] }, [makeText("Sources:")]),
  ]

  entries.forEach((entry, index) => {
    children.push(makeText(index === 0 ? " " : "; "))
    children.push(legendLink(entry))
    children.push(makeText(` ${entry.title}`))
  })

  return makeElement(
    "div",
    {
      className: ["hmi-table-source-legend"],
      role: "note",
      "aria-label": "Table sources",
    },
    children,
  )
}

function processTable(table: Element, getSourceTitle: (slug: string, fallback: string) => string) {
  moveColumnsToEnd(table, headerColumnIndexes(table, narrowSourceColumnHeaders))

  const header = headerRow(table)
  if (!header) {
    return undefined
  }

  const headerCells = rowCells(header)
  const linkColumnIndexes = headerColumnIndexes(table, evidenceLinkColumnHeaders)
  const narrowColumnIndexes = headerColumnIndexes(table, narrowSourceColumnHeaders)

  if (linkColumnIndexes.length === 0) {
    return undefined
  }

  const entriesBySlug = new Map<string, SourceEntry>()
  const sourceCells = new Set<Element>()

  for (const row of tableRows(table).filter((row) => row !== header)) {
    const cells = rowCells(row)
    for (const columnIndex of linkColumnIndexes) {
      const cell = cells[columnIndex]
      if (!cell) {
        continue
      }

      const links = cell.children.flatMap((child) => collectSourceLinks(child))
      if (links.length === 0) {
        continue
      }

      if (narrowColumnIndexes.includes(columnIndex)) {
        sourceCells.add(cell)
      }
      for (const link of links) {
        const slug = sourceSlug(link)
        if (!slug) {
          continue
        }

        let entry = entriesBySlug.get(slug)
        if (!entry) {
          const fallback = toString(link).trim()
          const href =
            typeof link.properties?.href === "string" ? link.properties.href : `${slug}.html`
          entry = {
            href,
            number: entriesBySlug.size + 1,
            slug,
            title: getSourceTitle(slug, fallback),
          }
          entriesBySlug.set(slug, entry)
        }

        compactSourceLink(link, entry)
      }
    }
  }

  if (entriesBySlug.size === 0) {
    return undefined
  }

  addClass(table, "hmi-evidence-table")
  for (const columnIndex of narrowColumnIndexes) {
    const cell = headerCells[columnIndex]
    if (cell) {
      addClass(cell, "hmi-evidence-table__source-header")
    }
  }
  sourceCells.forEach((cell) => addClass(cell, "hmi-evidence-table__source-cell"))

  return makeLegend([...entriesBySlug.values()])
}

export const EvidenceTableCitations: QuartzTransformerPlugin = () => ({
  name: "EvidenceTableCitations",
  htmlPlugins(ctx) {
    const getSourceTitle = sourceTitleResolver(ctx)

    return [
      () => {
        return (tree: Root) => {
          visit(tree, "element", (node, index, parent) => {
            if (node.tagName !== "table" || index === undefined || !hasChildren(parent)) {
              return
            }

            const legend = processTable(node, getSourceTitle)
            if (!legend) {
              return
            }

            parent.children.splice(index + 1, 0, legend)
          })
        }
      },
    ]
  },
})
