import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

// Writes the JSON files collected by the ExplorerSidecars transformer.
export const ExplorerSidecarFiles: QuartzEmitterPlugin = () => ({
  name: "ExplorerSidecarFiles",
  async *emit(ctx, content) {
    for (const [, file] of content)
      for (const { slug, content } of file.data.explorerSidecars ?? [])
        yield write({ ctx, slug, ext: ".json", content })
  },
  async *partialEmit(ctx, content, _resources, changeEvents) {
    const changed = new Set(changeEvents.filter((e) => e.type !== "delete").map((e) => e.file?.data.slug))
    for (const [, file] of content) {
      if (!changed.has(file.data.slug)) continue
      for (const { slug, content } of file.data.explorerSidecars ?? [])
        yield write({ ctx, slug, ext: ".json", content })
    }
  },
})
