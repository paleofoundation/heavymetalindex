import test from "node:test"
import assert from "node:assert/strict"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import { renderToString } from "preact-render-to-string"
import type { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import type { FilePath } from "../../util/path"
import { liftExplorerHtml, restoreExplorerHtml } from "./rawExplorerHtml"

test("explorer markup is lifted whole, including nested divs", () => {
  const block = `<div class="hmi-analyte-explorer" id="hmi-occurrence-cocoa"><div class="inner">12 ppb</div></div>`
  const page = `---\ntitle: Cocoa\n---\n\n# Cocoa\n\n${block}\n\nAfter.`
  const lifted = liftExplorerHtml(page)
  assert.equal(lifted.includes("12 ppb"), false)
  assert.match(lifted, /<p data-hmi-raw="HMIRAW\d+">HMIRAW\d+<\/p>/)
  assert.match(lifted, /After\./)
  const again = liftExplorerHtml("no explorer here")
  assert.equal(again, "no explorer here")
})

test("rehype-raw keeps the placeholder and the original explorer markup is restored", async () => {
  const block = `<div class="hmi-analyte-explorer" id="x"><div>12 ppb</div></div>`
  const lifted = liftExplorerHtml(`# Title\n\n${block}\n`)
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(() => (tree: Root) => restoreExplorerHtml(tree))
  const tree = await processor.run(processor.parse(lifted))
  const html = renderToString(htmlToJsx("wiki/ingredients/x.md" as FilePath, tree as Root) as never)
  assert.match(html, /class="hmi-analyte-explorer"/)
  assert.match(html, /12 ppb/)
  assert.doesNotMatch(html, /data-hmi-raw/)
})
