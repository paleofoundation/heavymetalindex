import { QuartzEmitterPlugin } from "../types"
import fs from "node:fs"
import { write } from "./helpers"

function sidecarBody(sidecar: { content: string; spill?: string }) {
  if (!sidecar.spill) return sidecar.content
  const body = fs.readFileSync(sidecar.spill, "utf8")
  fs.unlinkSync(sidecar.spill)
  return body
}

// Writes the JSON files collected by the ExplorerSidecars transformer.
export const ExplorerSidecarFiles: QuartzEmitterPlugin = () => ({
  name: "ExplorerSidecarFiles",
  async *emit(ctx, content) {
    for (const [, file] of content)
      for (const sidecar of file.data.explorerSidecars ?? [])
        yield write({ ctx, slug: sidecar.slug, ext: ".json", content: sidecarBody(sidecar) })
  },
  async *partialEmit(ctx, content, _resources, changeEvents) {
    const changed = new Set(changeEvents.filter((e) => e.type !== "delete").map((e) => e.file?.data.slug))
    for (const [, file] of content) {
      if (!changed.has(file.data.slug)) continue
      for (const sidecar of file.data.explorerSidecars ?? [])
        yield write({ ctx, slug: sidecar.slug, ext: ".json", content: sidecarBody(sidecar) })
    }
  },
})
