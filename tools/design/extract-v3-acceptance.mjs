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

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = join(HERE, "v3-acceptance.json")

// The artifact lives outside the repo, in a folder that gets RE-DOWNLOADED when
// the design is updated — which appends " (1)" and deletes the old folder. A
// hardcoded path breaks every time that happens (it already did once, silently,
// mid-session). Resolve by search instead: newest matching file wins, so an
// updated export is picked up automatically.
function findArtifact() {
  if (process.env.V3_ARTIFACT) return process.env.V3_ARTIFACT
  const home = process.env.HOME ?? ""
  const roots = [join(home, "Desktop"), home]
  const hits = []
  for (const root of roots) {
    let entries = []
    try {
      entries = readdirSync(root, { withFileTypes: true })
    } catch {
      continue
    }
    for (const e of entries) {
      if (!e.isDirectory()) continue
      const dir = join(root, e.name)
      let inner = []
      try {
        inner = readdirSync(dir)
      } catch {
        continue
      }
      for (const f of inner) {
        if (/^Heavy Metal Index v3.*\.dc\.html$/i.test(f)) {
          const full = join(dir, f)
          try {
            hits.push({ full, mtime: statSync(full).mtimeMs })
          } catch {}
        }
      }
    }
  }
  hits.sort((a, b) => b.mtime - a.mtime)
  return hits[0]?.full ?? ""
}

const ARTIFACT = findArtifact()

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

// v3's per-screen data blocks (artifact ~1790-1930) are keyed by the lowercase
// screen name — `metal:`, `source:`, … — and carry two things the gate needs:
//
//   noRefs / noSources / noHistory  which parts of the shared tail a screen
//                                   suppresses. v3's SOURCE screen sets
//                                   `noRefs: true, noSources: true` (artifact
//                                   1892): a source record cites nothing and
//                                   owns no corpus list, so demanding a
//                                   References section there asserts something
//                                   v3 never rendered.
//   snapshot                        whether the detail hero carries a Page
//                                   snapshot panel. Extracted because the gate
//                                   was asserting `.hero-snapshot` on screens
//                                   without checking whether v3 gives them one.
const tail = {}
const snapshot = {}
for (const [i, l] of lines.entries()) {
  const m = l.match(/^ {6}([a-z]+): \{\s*$/)
  if (!m) continue
  const key = m[1]
  // The block runs to the next same-indent key or the end of the data region.
  let end = lines.length
  for (let j = i + 1; j < lines.length; j++) {
    if (/^ {6}[a-z]+: \{\s*$/.test(lines[j]) || /^ {4}\}/.test(lines[j])) {
      end = j
      break
    }
  }
  const body = lines.slice(i, end).join("\n")
  const sup = []
  if (/noRefs:\s*true/.test(body)) sup.push("References")
  if (/noSources:\s*true/.test(body)) sup.push("Sources")
  if (/noHistory:\s*true/.test(body)) sup.push("Update history")
  tail[key] = sup
  snapshot[key] = /\bsnapshot:\s*\[/.test(body)
}

// CHROME-SPEC §2: "No box-shadow outside the mega-menu panel, modals, and the
// source drawer." The exemption list is DATA, not a constant buried in the
// checker — §1.2 puts it in v3-acceptance.json so the one legitimate shadow in
// the design is written down where the spec can be read against it.
//
// It is emitted here rather than hand-added to the JSON because this script
// rewrites that file wholesale; a hand-added key would survive exactly until
// the next `npm run extract:v3`. Not extracted FROM the artifact, because the
// artifact is where the shadow is — a document cannot be its own exemption.
const shadowExempt = [
  ".search-container",
  "[role='dialog']",
  ".popover",
  ".rail-ld",
  ".cite-drawer",
  ".hmi-nav-panel",
  // The citation hover card is a floating popover, like the mega-menu panel; its
  // drop shadow is v3's (§2 exempts floating surfaces, not the CTA inside it —
  // whose radius still conforms to 2px via v3-primitives.scss).
  ".cite-card",
]

const spec = {
  _generated_by: "tools/design/extract-v3-acceptance.mjs",
  tailSuppressed: tail,
  hasSnapshot: snapshot,
  shadowExempt,
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
