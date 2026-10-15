import type { Root, RootContent, Table } from "mdast"
import { QuartzTransformerPlugin } from "../types"
import {
  METAL_LEGEND_BEGIN,
  METAL_LEGEND_END,
  METAL_PREVIEW_ROWS,
} from "../../../tools/lib/metal-evidence.mjs"

export const MetalEvidencePreview: QuartzTransformerPlugin = () => ({
  name: "MetalEvidencePreview",
  markdownPlugins(ctx) {
    return [() => (tree: Root, file) => {
      const slug = String(file.data.slug ?? "")
      if (file.data.frontmatter?.type !== "metal" || !/^metals\/[^/]+$/.test(slug)) return
      const start = tree.children.findIndex((node) => node.type === "html" && node.value.includes(METAL_LEGEND_BEGIN))
      const end = tree.children.findIndex((node, index) => index > start && node.type === "html" && node.value.includes(METAL_LEGEND_END))
      if (start < 0 || end < start) return
      const table = tree.children.slice(start + 1, end).find((node): node is Table => node.type === "table")
      if (!table || table.children.length < 2) return
      if (!ctx.allSlugs.some((candidate) => candidate === `${slug}/evidence`)) {
        throw new Error(`Missing ${slug}/evidence; run the prebuild metal evidence generator before splitting tables`)
      }
      table.children = table.children.slice(0, METAL_PREVIEW_ROWS + 1)
      const link: RootContent = {
        type: "paragraph",
        children: [
          { type: "text", value: "Recent source records are shown below. Browse the " },
          { type: "link", url: `/${slug}/evidence`, children: [{ type: "text", value: "complete evidence table" }] },
          { type: "text", value: " for all source records and their reported findings." },
        ],
      }
      const tableAt = tree.children.indexOf(table)
      tree.children.splice(tableAt, 0, link)
    }]
  },
})
