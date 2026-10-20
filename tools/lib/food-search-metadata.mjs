import { fromHtml } from "hast-util-from-html"
import { toString } from "hast-util-to-string"

// Read the final rendered fields so schema never revives stale frontmatter claims.
export function foodStructuredFields(html) {
  let title, description
  function visit(node) {
    if (node.type === "element" && node.tagName === "title")
      title = toString(node)
    if (
      node.type === "element" &&
      node.tagName === "meta" &&
      node.properties.name === "description"
    )
      description = node.properties.content
    for (const child of node.children ?? []) visit(child)
  }
  visit(fromHtml(html))
  if (!title || !description)
    throw new Error("Missing rendered food search metadata")
  return { title, description }
}
