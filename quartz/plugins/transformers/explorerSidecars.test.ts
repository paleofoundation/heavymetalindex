import test from "node:test"
import assert from "node:assert/strict"
import { fromHtml } from "hast-util-from-html"
import { toHtml } from "hast-util-to-html"
import type { Root } from "hast"
import { extractExplorerSidecars } from "./explorerSidecars"
import { FullSlug } from "../../util/path"
// @ts-ignore untyped shared renderer modules
import { renderAnalyteTable } from "../../../tools/contracts/pilot/analyte-table.mjs"
// @ts-ignore
import { occurrenceRows } from "../../../tools/contracts/pilot/observations.mjs"
// @ts-ignore
import { unpackExplorerPayload } from "../../../tools/contracts/pilot/explorer-payload.mjs"
import { chunkRows, chunkPosition } from "../../../tools/contracts/pilot/explorer-chunks.mjs"
// @ts-ignore
import { root } from "../../../tools/contracts/generate.mjs"

test("explorer payload and drawer chunks move beside the page after processing", () => {
  const rows = occurrenceRows("rice", root)
  const tree = fromHtml(`<p>Before</p>${renderAnalyteTable(rows, "test")}`, { fragment: true }) as Root
  const sidecars = extractExplorerSidecars(tree, "ingredients/test" as FullSlug)
  assert.deepEqual(sidecars.map((s) => s.slug), ["ingredients/test.hmi-occurrence-test.view", "ingredients/test.hmi-occurrence-test.0"])
  const html = toHtml(tree)
  // Rows, comparison states and rendered reference markup stay in the page.
  assert.equal(html.match(/data-occurrence-row/g)?.length, 59)
  assert.equal(html.match(/data-comparison-state=/g)?.length, 59)
  assert.doesNotMatch(html, /data-evidence-content/)
  assert.match(html, /<script type="application\/octet-stream" data-explorer-payload="" data-encoding="base64" data-src="\.\/test\.hmi-occurrence-test\.view\.json"><\/script>/)
  assert.match(html, /<div hidden data-explorer-chunk="0" data-src="\.\/test\.hmi-occurrence-test\.0\.json"><\/div>/)
  const view = unpackExplorerPayload(JSON.parse(sidecars[0].content))
  assert.equal(view.length, 59)
  assert.ok(view.every((row: any) => row.variants["::"].comparison_html))
  const chunk = JSON.parse(sidecars[1].content)
  assert.equal(chunk.evidence.length, 59)
  assert.ok(chunk.evidence.every((e: string) => e.startsWith("<div data-evidence-content")))
  assert.equal(unpackExplorerPayload(chunk.details).length, 59)
  // Already-extracted output is left alone on a second pass.
  assert.deepEqual(extractExplorerSidecars(tree, "ingredients/test" as FullSlug), [])
})

test("pages without an occurrence explorer emit no sidecars", () => {
  const tree = fromHtml(`<div data-explorer-chunk="0"><script>x</script></div>`, { fragment: true }) as Root
  assert.deepEqual(extractExplorerSidecars(tree, "ingredients/none" as FullSlug), [])
})

// Regression: cocoa's 2,349 rows in 24 chunks. Inferring the size from the counts
// (ceil(2349 / 24) = 98) opened another row's paper for every row from 98 onward.
test("every row of a large explorer resolves to its own drawer and comparison details", () => {
  const base = occurrenceRows("rice", root), total = 2349
  const rows = Array.from({ length: total }, (_, n) => ({ ...structuredClone(base[n % base.length]), source: `marker-${n}` }))
  const tree = fromHtml(renderAnalyteTable(rows, "big"), { fragment: true }) as Root
  const sidecars = new Map(extractExplorerSidecars(tree, "ingredients/big" as FullSlug).map((s) => [s.slug, JSON.parse(s.content)]))
  const html = toHtml(tree)
  const declared = html.match(/<div hidden data-explorer-details="" data-chunk-rows="(\d+)">/)?.[1]
  assert.equal(declared, "100", "the chunk size survives sidecar extraction")
  const size = chunkRows(declared), chunks = html.match(/data-explorer-chunk="/g)!.length
  assert.equal(chunks, 24)
  assert.notEqual(Math.ceil(total / chunks), size, "fixture must expose a size inferred from the counts")
  // Row order in the page is the order the browser indexes rows by.
  const order = [...html.matchAll(/<tr id="[^"]+" data-occurrence-row="" data-source="([^"]+)"/g)].map((m) => m[1])
  assert.equal(order.length, total)
  order.forEach((source, index) => {
    const { chunk, offset } = chunkPosition(index, size)
    const sidecar = sidecars.get(`ingredients/big.hmi-occurrence-big.${chunk}`)
    assert.ok(sidecar, `chunk ${chunk} exists`)
    assert.match(sidecar.evidence[offset], new RegExp(`sources/${source}"`), `row ${index} opens its own source`)
  })
  // Each detail row stays aligned with its evidence, so ⓘ text is that row's too.
  for (const [slug, sidecar] of sidecars) if (!slug.endsWith(".view")) assert.equal(unpackExplorerPayload(sidecar.details).length, sidecar.evidence.length)
})
