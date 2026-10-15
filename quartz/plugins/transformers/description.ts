import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../types"
import { escapeHTML } from "../../util/escape"
import { buildMetaDescription } from "../../util/metaDescription"

export interface Options {
  descriptionLength: number
  maxDescriptionLength: number
  replaceExternalLinks: boolean
}

const defaultOptions: Options = {
  descriptionLength: 155,
  maxDescriptionLength: 155,
  replaceExternalLinks: true,
}

const urlRegex = new RegExp(
  /(https?:\/\/)?(?<domain>([\da-z\.-]+)\.([a-z\.]{2,6})(:\d+)?)(?<path>[\/\w\.-]*)(\?[\/\w\.=&;-]*)?/,
  "g",
)

export const Description: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let text = escapeHTML(toString(tree))

            if (opts.replaceExternalLinks) {
              text = text.replace(urlRegex, "$<domain>" + "$<path>")
            }

            file.data.description = buildMetaDescription(
              tree,
              file.data.frontmatter ?? {},
              String(file.data.slug ?? ""),
              Math.min(155, opts.descriptionLength, opts.maxDescriptionLength),
            )
            file.data.text = text
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    description: string
    text: string
  }
}
