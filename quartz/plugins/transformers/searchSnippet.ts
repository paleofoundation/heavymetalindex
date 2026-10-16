import { QuartzTransformerPlugin } from "../types"
import { isMetalArticle, extractOverview, metalSearchFields } from "../../../tools/lib/search-snippet.mjs"

// Stash each page's Overview prose, then, for metal articles, replace the
// auto description with the metal snippet, capped to the shared metadata budget.
// The markdown pass has to run while file.value is still the source; the
// html pass runs after Description so a hand-written frontmatter description
// does not keep a one-line metal page out of the search index.

export const SearchSnippet: QuartzTransformerPlugin = () => {
  return {
    name: "SearchSnippet",
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            void tree
            const overview = extractOverview(String(file.value ?? ""))
            if (overview) file.data.overviewProse = overview
          }
        },
      ]
    },
    htmlPlugins() {
      return [
        () => {
          return (tree, file) => {
            void tree
            const frontmatter = file.data.frontmatter
            if (!isMetalArticle(file.data.slug, frontmatter?.type)) {
              return
            }
            const fields = metalSearchFields({
              title: frontmatter?.title,
              symbol: frontmatter?.symbol,
              name: frontmatter?.name,
              overview: file.data.overviewProse,
              searchTitle: frontmatter?.search_title,
              searchDescription: frontmatter?.search_description,
            })
            if (fields?.description) file.data.description = fields.description
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    overviewProse: string
  }
}
