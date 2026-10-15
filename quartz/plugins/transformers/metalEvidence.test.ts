import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import matter from "gray-matter"
import { VFile } from "vfile"
import type { Root, Table } from "mdast"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"
import { MetalEvidencePreview } from "./metalEvidence"
import { METAL_PREVIEW_ROWS } from "../../../tools/lib/metal-evidence.mjs"

async function preview(raw: string, available = true) {
  const { data, content } = matter(raw)
  const file = new VFile(content)
  file.data.slug = "metals/lead" as FullSlug
  file.data.frontmatter = { title: "Lead", tags: [], ...data }
  const ctx = { allSlugs: available ? ["metals/lead/evidence"] : [] } as unknown as BuildCtx
  const processor = unified().use(remarkParse).use(remarkGfm).use(MetalEvidencePreview().markdownPlugins!(ctx))
  const before = processor.parse(file) as Root
  const original = structuredClone(before)
  const after = await processor.run(before, file) as Root
  return { original, after }
}

test("only the generated source table changes; narrative, limits and other evidence remain", async () => {
  const raw = fs.readFileSync("wiki/metals/lead.md", "utf8")
  const { original, after } = await preview(raw)
  const start = original.children.findIndex((node) => node.type === "html" && node.value.includes("BEGIN: hmi-source-legend"))
  const endBefore = original.children.findIndex((node) => node.type === "html" && node.value.includes("END: hmi-source-legend"))
  const endAfter = after.children.findIndex((node) => node.type === "html" && node.value.includes("END: hmi-source-legend"))
  assert.deepEqual(after.children.slice(0, start), original.children.slice(0, start))
  assert.deepEqual(after.children.slice(endAfter), original.children.slice(endBefore))
  const beforeTable = original.children.slice(start, endBefore).find((node) => node.type === "table") as Table
  const afterTable = after.children.slice(start, endAfter).find((node) => node.type === "table") as Table
  assert.deepEqual(afterTable.children, beforeTable.children.slice(0, METAL_PREVIEW_ROWS + 1))
  assert.ok(after.children.some((node) => node.type === "paragraph" && node.children.some((child) => child.type === "link" && child.url === "/metals/lead/evidence")))
})

test("a missing generated child prevents hiding the complete table", async () => {
  await assert.rejects(preview(fs.readFileSync("wiki/metals/lead.md", "utf8"), false), /run the prebuild metal evidence generator/)
})

test("authored pages without a generated source table are unchanged", async () => {
  const { original, after } = await preview("---\ntype: metal\n---\n## Summary\n\nAuthored findings.\n\n| Limit | Source |\n| --- | --- |\n| Existing limit | Existing source |", false)
  assert.deepEqual(after, original)
})
