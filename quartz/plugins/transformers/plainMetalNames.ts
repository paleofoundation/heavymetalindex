import type { Root } from "hast"
import type { QuartzTransformerPlugin } from "../types"
import { expandArticleMetals } from "../../util/plainMetalNames"
import { isEvidencePilot, normalizeEvidencePilotText } from "../../util/evidencePilot"
import { visit } from "unist-util-visit"
import { toString } from "hast-util-to-string"

export const PlainMetalNames: QuartzTransformerPlugin = () => ({
  name: "PlainMetalNames",
  htmlPlugins() {
    return [
      () => (tree: Root, file) => {
        const headings = expandArticleMetals(tree)
        normalizeEvidencePilotText(tree, String(file.data.slug ?? ""))
        if (isEvidencePilot(String(file.data.slug ?? ""))) {
          visit(tree, "element", (node) => {
            if (/^h[1-6]$/.test(node.tagName) && typeof node.properties.id === "string") {
              headings.set(node.properties.id, toString(node))
            }
          })
        }
        if (file.data.toc) {
          file.data.toc = file.data.toc.map((entry) => ({
            ...entry,
            text: headings.get(entry.slug) ?? entry.text,
          }))
        }
      },
    ]
  },
})
