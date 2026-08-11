#!/usr/bin/env node
// Extracts the FULL style spec of v3's HOME A straight out of the artifact.
//
// v3 is inline-styled HTML: every element carries its exact intent in a style=
// attribute. So the design's specification is machine-readable, and there is no
// reason for a human (or me) to be hand-picking which properties to assert.
// This emits every element that has literal inline styles, keyed by its visible
// text, so the built page can be diffed against it property by property.
//
// KNOWN LIMITATION. Text matching is ambiguous for short strings: "Search",
// "Metal" and "Sources" each occur in several places on HOME A, and the
// comparator will pair the wrong ones and report phantom mismatches. Confirm
// every reported difference against an explicit selector before acting on it —
// in the first real run, 1 of 11 reported differences was genuine and the other
// 10 were bad pairings. Matching by position within a known section would fix
// this and is the next improvement.
//
// Matching caveat learned the hard way: match LEAF elements only. An earlier
// comparator fell back to matching an ancestor when no leaf matched, which
// reported five section headings as unstyled Inter 16px when the real <h2>s were
// correct Lora 34px. A comparator that guesses is worse than one that reports
// "unmatched" — it sends you chasing defects that do not exist.
//
// Usage: node tools/design/extract-v3-spec.mjs <path-to-v3.dc.html> [startLine endLine]
import fs from "node:fs"

const file = process.argv[2]
const from = Number(process.argv[3] ?? 99)
const to = Number(process.argv[4] ?? 262)
const lines = fs.readFileSync(file, "utf8").split("\n").slice(from - 1, to)
const html = lines.join("\n")

// Elements whose style attribute is a literal (not a {{ binding }}).
const out = []
const re = /<(\w+)([^>]*?)style="([^"]*)"([^>]*)>/g
let m
while ((m = re.exec(html))) {
  const [, tag, pre, style, post] = m
  if (style.includes("{{")) continue
  // visible text: up to the next tag, trimmed
  const after = html.slice(re.lastIndex)
  const text = (after.match(/^([^<]{0,80})/)?.[1] ?? "").replace(/\s+/g, " ").trim()
  const decls = {}
  for (const d of style.split(";")) {
    const i = d.indexOf(":")
    if (i < 0) continue
    decls[d.slice(0, i).trim()] = d.slice(i + 1).trim()
  }
  if (Object.keys(decls).length === 0) continue
  out.push({ tag, text, decls })
}

// Roll up the properties v3 actually uses, so we can see the whole surface.
const propCount = {}
for (const e of out) for (const k of Object.keys(e.decls)) propCount[k] = (propCount[k] ?? 0) + 1

console.log(JSON.stringify({
  elements: out.length,
  withText: out.filter((e) => e.text).length,
  properties: Object.entries(propCount).sort((a, b) => b[1] - a[1]),
  spec: out,
}, null, 1))
