#!/usr/bin/env node
// Derive the v3 acceptance spec FROM THE ARTIFACT.
//
// WHY THIS FILE EXISTS, AND WHY IT IS NOT A HAND-WRITTEN LIST.
//
// The previous gate asserted computed styles on elements that already existed.
// It reported "detail 25/25 passed" on a page that was missing `Connections`,
// `Reuse this page`, `Found an error?`, seven body sections and five of its nine
// rails. A check that only measures present elements CANNOT FAIL FOR AN ABSENCE,
// so every green number it produced was true and meaningless.
//
// The fix is presence assertions, and the block list behind them must not be
// something a session typed from memory — that is the same judgement call the
// gate is supposed to replace. So this script reads
// "Heavy Metal Index v3.dc.html" and extracts, per screen, every section
// heading v3 actually renders. `npm run check:v3` then fails BY NAME for any
// one that is absent from the rendered page.
//
//   node tools/design/extract-v3-acceptance.mjs          # writes v3-acceptance.json
//   node tools/design/extract-v3-acceptance.mjs --print  # dump, write nothing
//
// Re-run it whenever the artifact changes. The JSON is committed so the gate
// runs without the artifact present (it lives outside the repo, on the Desktop).

import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = join(HERE, "v3-acceptance.json")

const ARTIFACT =
  process.env.V3_ARTIFACT ??
  "/Users/karenpendergrass/Desktop/Heavy Metal Index redesign/Heavy Metal Index v3.dc.html"

if (!existsSync(ARTIFACT)) {
  console.error(`v3 artifact not found: ${ARTIFACT}`)
  console.error("Set V3_ARTIFACT to its path. The committed v3-acceptance.json")
  console.error("is what the gate reads, so this is only needed to re-extract.")
  process.exit(2)
}

const lines = readFileSync(ARTIFACT, "utf8").split("\n")

// v3's screens are sibling `sc-if` guards inside the isDetail block. Each
// screen owns the lines from its own guard up to the next guard, which is why
// the boundaries can be read off the file rather than guessed.
const guards = []
lines.forEach((l, i) => {
  const m = l.match(/<sc-if value="\{\{ *(is[A-Z]\w+) *\}\}"/)
  if (m) guards.push({ name: m[1], line: i })
})

// A section heading in v3 is a literal `<h2 style="font-family: Lora, …">Text</h2>`.
// There is no class and no template indirection, so the text is extractable.
const H2 = /<h2[^>]*>([^<]+)<\/h2>/g

function headingsBetween(from, to) {
  const chunk = lines.slice(from, to).join("\n")
  const out = []
  for (const m of chunk.matchAll(H2)) {
    const t = m[1].trim()
    // `{{ … }}` headings are data-driven (e.g. "41 records") and cannot be
    // asserted as a fixed string; skip rather than assert something false.
    if (t && !t.includes("{{")) out.push(t)
  }
  return [...new Set(out)]
}

const screens = {}
for (let i = 0; i < guards.length; i++) {
  const g = guards[i]
  const next = guards[i + 1]?.line ?? lines.length
  const blocks = headingsBetween(g.line, next)
  if (blocks.length) screens[g.name] = blocks
}

// The shared tail (References / Sources / Update history) sits outside every
// screen guard, gated per page by hasRefs / hasSources / hasHistory.
const tailStart = lines.findIndex((l) => l.includes("{{ page.hasRefs }}"))
const railStart = lines.findIndex((l) => l.includes("{{ railAsideSt }}"))
const sharedTail = tailStart > -1 ? headingsBetween(tailStart, railStart) : []

// The right rail's three blocks are not <h2>s — they are styled divs. Read
// their labels out of the rail region rather than hardcoding them.
const railText = lines.slice(railStart, railStart + 30).join("\n")
const railBlocks = [...railText.matchAll(/>([A-Z][^<>{}]{3,30}?)<\/div>/g)]
  .map((m) => m[1].trim())
  .filter((t) => !t.includes("{{"))

const spec = {
  _generated_by: "tools/design/extract-v3-acceptance.mjs",
  _source: "Heavy Metal Index v3.dc.html",
  _note:
    "Presence assertions are extracted from the artifact, not authored. " +
    "A missing block must fail the gate by name.",
  screens,
  sharedTail,
  railBlocks,
}

if (process.argv.includes("--print")) {
  console.log(JSON.stringify(spec, null, 2))
} else {
  writeFileSync(OUT, JSON.stringify(spec, null, 2) + "\n")
  console.log(`wrote ${OUT}`)
  for (const [k, v] of Object.entries(screens)) console.log(`  ${k.padEnd(14)} ${v.length} blocks`)
  console.log(`  ${"sharedTail".padEnd(14)} ${sharedTail.length} blocks`)
  console.log(`  ${"railBlocks".padEnd(14)} ${railBlocks.length} blocks: ${railBlocks.join(", ")}`)
}
