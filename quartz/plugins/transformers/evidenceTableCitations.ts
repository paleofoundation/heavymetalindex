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
  listedInLibrary: boolean
  number: number
  slug: string
  title: string
}

type SourceRegistry = {
  entries: SourceEntry[]
  entriesBySlug: Map<string, SourceEntry>
  addLink: (link: Element, listedInLibrary?: boolean) => SourceEntry | undefined
}

type SourceSection = {
  end: number
  level: number
  start: number
  type: "library" | "narrative"
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
const sourceLibraryHeadings = new Set(["source library", "sources"])
const narrativeSourceHeadings = new Set([
  "narrative citation key",
  "narrative citation notes",
  "source legend",
])

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

function normalizeHeading(value: string): string {
  return normalizeHeader(value)
}

function headingLevel(node: Element): number | undefined {
  const match = node.tagName.match(/^h([1-6])$/)
  return match ? Number(match[1]) : undefined
}

function setElementText(node: Element, value: string) {
  node.children = [makeText(value)]
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

function transformSourceLinks(
  node: Element,
  transform: (link: Element, slug: string) => void,
) {
  for (const child of node.children) {
    if (!isElement(child)) {
      continue
    }

    const slug = child.tagName === "a" ? sourceSlug(child) : undefined
    if (slug) {
      transform(child, slug)
      continue
    }

    transformSourceLinks(child, transform)
  }
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

function linkHref(link: Element, slug: string): string {
  return typeof link.properties?.href === "string" ? link.properties.href : `${slug}.html`
}

function sourceLabel(entry: SourceEntry): string {
  return `S${entry.number}`
}

function makeSourceRegistry(getSourceTitle: (slug: string, fallback: string) => string): SourceRegistry {
  const entries: SourceEntry[] = []
  const entriesBySlug = new Map<string, SourceEntry>()

  return {
    entries,
    entriesBySlug,
    addLink(link, listedInLibrary = false) {
      const slug = sourceSlug(link)
      if (!slug) {
        return undefined
      }

      const existing = entriesBySlug.get(slug)
      if (existing) {
        existing.listedInLibrary ||= listedInLibrary
        return existing
      }

      const fallback = toString(link).trim()
      const entry: SourceEntry = {
        href: linkHref(link, slug),
        listedInLibrary,
        number: entries.length + 1,
        slug,
        title: getSourceTitle(slug, fallback),
      }
      entries.push(entry)
      entriesBySlug.set(slug, entry)
      return entry
    },
  }
}

function findSourceSections(root: Root): SourceSection[] {
  const sections: SourceSection[] = []

  root.children.forEach((child, index) => {
    if (!isElement(child)) {
      return
    }

    const level = headingLevel(child)
    if (!level) {
      return
    }

    const heading = normalizeHeading(toString(child))
    const type = sourceLibraryHeadings.has(heading)
      ? "library"
      : narrativeSourceHeadings.has(heading)
        ? "narrative"
        : undefined
    if (!type) {
      return
    }

    let end = root.children.length
    for (let nextIndex = index + 1; nextIndex < root.children.length; nextIndex++) {
      const sibling = root.children[nextIndex]
      if (!isElement(sibling)) {
        continue
      }

      const siblingLevel = headingLevel(sibling)
      if (siblingLevel && siblingLevel <= level) {
        end = nextIndex
        break
      }
    }

    sections.push({ end, level, start: index, type })
  })

  return sections
}

function collectLinksFromRootRange(root: Root, start: number, end: number): Element[] {
  const links: Element[] = []

  for (const child of root.children.slice(start, end)) {
    if (isElement(child)) {
      collectSourceLinks(child, links)
    }
  }

  return links
}

function collectAllSourceLinks(root: Root): Element[] {
  const links: Element[] = []

  for (const child of root.children) {
    if (isElement(child)) {
      collectSourceLinks(child, links)
    }
  }

  return links
}

function buildSourceRegistry(
  root: Root,
  sections: SourceSection[],
  getSourceTitle: (slug: string, fallback: string) => string,
): SourceRegistry {
  const registry = makeSourceRegistry(getSourceTitle)

  for (const section of sections.filter((section) => section.type === "library")) {
    for (const link of collectLinksFromRootRange(root, section.start + 1, section.end)) {
      registry.addLink(link, true)
    }
  }

  for (const link of collectAllSourceLinks(root)) {
    registry.addLink(link)
  }

  return registry
}

function sourceBadge(entry: SourceEntry): Element {
  return makeElement(
    "span",
    {
      className: ["hmi-source-id"],
      "aria-hidden": "true",
      "data-source-id": sourceLabel(entry),
    },
    [makeText(sourceLabel(entry))],
  )
}

function sourceTitle(entry: SourceEntry): Element {
  return makeElement("span", { className: ["hmi-source-title"] }, [makeText(entry.title)])
}

function formatSourceLibraryLink(link: Element, entry: SourceEntry) {
  addClass(link, "hmi-source-library-link")
  link.properties = {
    ...link.properties,
    "aria-label": `${sourceLabel(entry)}: ${entry.title}`,
    "data-no-popover": "true",
    "data-source-id": sourceLabel(entry),
    "data-source-title": entry.title,
    title: entry.title,
  }
  link.children = [sourceBadge(entry), sourceTitle(entry)]
}

function compactSourceLink(link: Element, entry: SourceEntry) {
  addClass(link, "hmi-compact-citation")
  link.properties = {
    ...link.properties,
    "aria-label": `${sourceLabel(entry)}: ${entry.title}`,
    "data-citation-number": sourceLabel(entry),
    "data-no-popover": "true",
    "data-source-id": sourceLabel(entry),
    "data-source-title": entry.title,
    title: entry.title,
  }
  link.children = [makeText(sourceLabel(entry))]
}

function legendLink(entry: SourceEntry): Element {
  return makeElement(
    "a",
    {
      href: entry.href,
      className: ["internal", "hmi-compact-citation"],
      "aria-label": `${sourceLabel(entry)}: ${entry.title}`,
      "data-citation-number": sourceLabel(entry),
      "data-no-popover": "true",
      "data-source-id": sourceLabel(entry),
      "data-slug": entry.slug,
      title: entry.title,
    },
    [makeText(sourceLabel(entry))],
  )
}

function makeLegend(entries: SourceEntry[]): Element {
  const children: ElementContent[] = [
    makeElement("span", { className: ["hmi-table-source-legend__label"] }, [
      makeText("Table sources:"),
    ]),
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

function sourceEntryLink(entry: SourceEntry): Element {
  return makeElement(
    "a",
    {
      href: entry.href,
      className: ["internal", "hmi-source-library-link"],
      "aria-label": `${sourceLabel(entry)}: ${entry.title}`,
      "data-no-popover": "true",
      "data-slug": entry.slug,
      "data-source-id": sourceLabel(entry),
      "data-source-title": entry.title,
      title: entry.title,
    },
    [sourceBadge(entry), sourceTitle(entry)],
  )
}

function sourceLibraryList(entries: SourceEntry[], autoGenerated: boolean): Element {
  return makeElement(
    "ul",
    {
      className: autoGenerated
        ? ["hmi-source-library", "hmi-source-library--auto"]
        : ["hmi-source-library"],
    },
    entries.map((entry) =>
      makeElement("li", { className: ["hmi-source-library__item"] }, [sourceEntryLink(entry)]),
    ),
  )
}

function transformSourceSections(root: Root, sections: SourceSection[], registry: SourceRegistry) {
  const sourceEntries = registry.entries
  const librarySections = sections.filter((section) => section.type === "library")

  for (const section of sections) {
    const heading = root.children[section.start]
    if (isElement(heading)) {
      if (section.type === "library") {
        addClass(heading, "hmi-source-library-heading")
        setElementText(heading, "Source Library")
      } else {
        addClass(heading, "hmi-source-notes-heading")
        setElementText(heading, "Narrative Citation Notes")
      }
    }

    for (let index = section.start + 1; index < section.end; index++) {
      const child = root.children[index]
      if (!isElement(child)) {
        continue
      }

      if (section.type === "library") {
        if (child.tagName === "ul" || child.tagName === "ol") {
          child.tagName = "ul"
          addClass(child, "hmi-source-library")
        }
        transformSourceLinks(child, (link, slug) => {
          const entry = registry.entriesBySlug.get(slug)
          if (entry) {
            formatSourceLibraryLink(link, entry)
          }
        })
      } else {
        if (child.tagName === "ol") {
          child.tagName = "ul"
        }
        if (child.tagName === "ul") {
          addClass(child, "hmi-source-notes")
        }
        transformSourceLinks(child, (link, slug) => {
          const entry = registry.entriesBySlug.get(slug)
          if (entry) {
            compactSourceLink(link, entry)
          }
        })
      }
    }
  }

  const missingFromLibrary = sourceEntries.filter((entry) => !entry.listedInLibrary)
  if (librarySections.length > 0 && missingFromLibrary.length > 0) {
    const firstLibrary = librarySections[0]
    root.children.splice(
      firstLibrary.end,
      0,
      makeElement("p", { className: ["hmi-source-library-warning"] }, [
        makeText("Cited on this page but missing from the curated source library:"),
      ]),
      sourceLibraryList(missingFromLibrary, true),
    )
  } else if (librarySections.length === 0 && sourceEntries.length > 0) {
    root.children.push(
      makeElement(
        "h2",
        { className: ["hmi-source-library-heading"], id: "source-library" },
        [makeText("Source Library")],
      ),
      sourceLibraryList(sourceEntries, true),
    )
  }
}

function compactInlineSourceLinks(root: Root, sections: SourceSection[], registry: SourceRegistry) {
  const sectionChildIndexes = new Set<number>()
  for (const section of sections) {
    for (let index = section.start; index < section.end; index++) {
      sectionChildIndexes.add(index)
    }
  }

  root.children.forEach((child, index) => {
    if (!isElement(child) || sectionChildIndexes.has(index) || child.tagName === "table") {
      return
    }

    transformSourceLinks(child, (link, slug) => {
      const entry = registry.entriesBySlug.get(slug)
      if (entry && !getClasses(link).includes("hmi-source-library-link")) {
        compactSourceLink(link, entry)
      }
    })
  })
}

function processTable(table: Element, registry: SourceRegistry) {
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

        const entry = registry.entriesBySlug.get(slug) ?? registry.addLink(link)
        if (entry) {
          entriesBySlug.set(slug, entry)
          compactSourceLink(link, entry)
        }
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
          const sections = findSourceSections(tree)
          const registry = buildSourceRegistry(tree, sections, getSourceTitle)

          transformSourceSections(tree, sections, registry)
          compactInlineSourceLinks(tree, sections, registry)

          visit(tree, "element", (node, index, parent) => {
            if (node.tagName !== "table" || index === undefined || !hasChildren(parent)) {
              return
            }

            const legend = processTable(node, registry)
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
