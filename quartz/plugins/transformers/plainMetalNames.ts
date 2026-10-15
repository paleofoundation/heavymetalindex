import type { Root } from "hast"
import type { QuartzTransformerPlugin } from "../types"
import { expandArticleMetals } from "../../util/plainMetalNames"

export const PlainMetalNames: QuartzTransformerPlugin = () => ({
  name: "PlainMetalNames",
  htmlPlugins() {
    return [
      () => (tree: Root, file) => {
        const headings = expandArticleMetals(tree)
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
