import { QuartzTransformerPlugin } from "../types"
import { Root, RootContent, Element } from "hast"
import { toHtml } from "hast-util-to-html"
import { FullSlug } from "../../util/path"
import { viewSidecar, chunkSidecar } from "../../../tools/contracts/pilot/explorer-payload.mjs"

// Occurrence explorers carry their filter payload and drawer chunks inline so
// that every other transformer (links, citation metadata, public presentation)
// processes them as page content. Registered last, this moves them into JSON
// files beside the page; the browser fetches each one when it is first needed.
export type ExplorerSidecar = { slug: FullSlug; content: string }

const property = (node: Element, name: string) =>
  node.properties?.[name.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] ?? node.properties?.[name]
const text = (node: Element | undefined) =>
  (node?.children ?? []).map((child) => (child.type === "text" ? child.value : "")).join("").trim()

export function extractExplorerSidecars(tree: Root, slug: FullSlug): ExplorerSidecar[] {
  const sidecars: ExplorerSidecar[] = []
  const base = slug.split("/").pop()!
  const detach = (node: Element, name: string, content: string) => {
    sidecars.push({ slug: `${slug}.${name}` as FullSlug, content })
    node.children = []
    node.properties = { ...node.properties, dataSrc: `./${base}.${name}.json` }
  }
  const walk = (node: Root | RootContent, explorer?: string) => {
    if (node.type !== "root" && node.type !== "element") return
    if (node.type === "element") {
      if (property(node, "data-analyte-explorer") !== undefined) explorer = String(node.properties?.id ?? "")
      if (explorer && property(node, "data-src") === undefined) {
        if (node.tagName === "script" && property(node, "data-explorer-payload") !== undefined)
          return detach(node, `${explorer}.view`, viewSidecar(text(node)))
        const chunk = property(node, "data-explorer-chunk")
        if (chunk !== undefined) {
          const children = node.children.filter((child): child is Element => child.type === "element")
          const script = children.find((child) => child.tagName === "script")
          const evidence = children.filter((child) => child !== script).map((child) => toHtml(child))
          return detach(node, `${explorer}.${chunk}`, chunkSidecar(text(script), evidence))
        }
      }
    }
    for (const child of node.children) walk(child, explorer)
  }
  walk(tree)
  return sidecars
}

export const ExplorerSidecars: QuartzTransformerPlugin = () => ({
  name: "ExplorerSidecars",
  htmlPlugins() {
    return [() => (tree: Root, file) => {
      file.data.explorerSidecars = extractExplorerSidecars(tree, file.data.slug!)
    }]
  },
})

declare module "vfile" {
  interface DataMap {
    explorerSidecars: ExplorerSidecar[]
  }
}
