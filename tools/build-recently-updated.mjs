#!/usr/bin/env node
// Homepage "Recently updated" feed — the examine.com "what's new" pattern, done
// at the PAGE level rather than the raw synthesis-event level.
//
// The change-watch event stream reads like a lab notebook ("iAs in apple
// confidence medium → null", "synthesis moved up 6.8x", "resynthesis trigger per
// Part 9") — true, but internal. A reader wants "which pages changed, and when".
// So this sorts the reader-facing corpus by its frontmatter `updated:` date and
// lists the most recent, each linking to the page, tagged by type. Honest,
// public-facing, and uniform across metals / ingredients / products.
//
// Emits the marker-bounded `hmi-home-recently-updated` block into wiki/index.md.

import fs from "node:fs"
import path from "node:path"
import { readPageFrontmatter } from "./lib/count-pages.mjs"
import { upsertMarkerBlock } from "./lib/upsert-marker-block.mjs"

const repoRoot = process.cwd()
const wikiRoot = path.join(repoRoot, "wiki")
const homepagePath = path.join(wikiRoot, "index.md")

const BEGIN = "<!-- BEGIN: hmi-home-recently-updated -->"
const END = "<!-- END: hmi-home-recently-updated -->"
const ANCHOR_AFTER = "<!-- END: hmi-feature-grid -->"

const N = 9

// Reader-facing page types that carry a `updated:` date and are worth surfacing.
const SECTIONS = [
  { dir: "metals", tag: "Metal", hrefBase: "metals" },
  { dir: "ingredients", tag: "Ingredient", hrefBase: "ingredients" },
  { dir: "products", tag: "Product", hrefBase: "products" },
]

// Product page titles carry internal disambiguation in parentheses / after a
// dash or semicolon ("Antiperspirant (Al-salt, dirty sibling of r9 deodorant)",
// "Bar soap; medicated bars cross-link advisory"). Strip it for the public feed
// — the head noun is the public name.
function cleanTitle(raw) {
  return String(raw ?? "")
    .replace(/\s*[（(].*$/, "")
    .replace(/\s*[—–;:].*$/, "")
    .trim()
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]
function fmtDate(iso) {
  const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (!m) return String(iso)
  return `${+m[3]} ${MONTHS[+m[2] - 1]} ${m[1]}`
}

const rows = []
for (const s of SECTIONS) {
  const fm = readPageFrontmatter(path.join(wikiRoot, s.dir))
  for (const [slug, data] of fm) {
    // YAML parses an unquoted `updated: 2026-05-03` as a Date object; a quoted
    // one as a string. Normalize both to an ISO YYYY-MM-DD.
    let updated = null
    if (data.updated instanceof Date && !isNaN(data.updated)) {
      updated = data.updated.toISOString().slice(0, 10)
    } else if (data.updated) {
      const m = String(data.updated).match(/\d{4}-\d{2}-\d{2}/)
      updated = m ? m[0] : null
    }
    if (!updated) continue
    if (data.auto_generated === true) continue
    rows.push({ title: cleanTitle(data.title ?? slug), updated, tag: s.tag, href: `${s.hrefBase}/${slug}/` })
  }
}

// Many pages share one batch `updated:` date, so a plain date sort yields nine
// alphabetical entries of one type. Round-robin across types (each stream still
// date-sorted) so the feed reads as a metals/ingredients/products mix.
const byTag = new Map()
for (const r of rows) {
  if (!byTag.has(r.tag)) byTag.set(r.tag, [])
  byTag.get(r.tag).push(r)
}
for (const list of byTag.values()) {
  list.sort((a, b) => (a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : a.title.localeCompare(b.title)))
}
const streams = [...byTag.values()]
const recent = []
for (let round = 0; recent.length < N; round += 1) {
  let placed = false
  for (const stream of streams) {
    if (round < stream.length) {
      recent.push(stream[round])
      placed = true
      if (recent.length >= N) break
    }
  }
  if (!placed) break
}

if (recent.length < 3) {
  console.log("build-recently-updated: fewer than 3 dated pages; skipping.")
  process.exit(0)
}

// v3 HOME A lines 244-259: a three-column grid of date / title / kind rows,
// each row itself a 92px | 1fr | auto grid. No <ul>, no lede paragraph.
const items = recent
  .map(
    (r) => `    <div class="hmi-v3-rev-row">
      <time class="hmi-v3-rev-d" datetime="${esc(r.updated)}">${esc(fmtDate(r.updated))}</time>
      <a class="hmi-v3-rev-t" href="${esc(r.href)}">${esc(r.title)}</a>
      <span class="hmi-v3-rev-k">${esc(r.tag)}</span>
    </div>`,
  )
  .join("\n")

const block = `${BEGIN}
<section class="hmi-v3-rev" data-no-cite aria-label="Recently revised">
  <div class="hmi-v3-rev-head">
    <h2>Recently revised</h2>
    <a class="hmi-v3-rev-all" href="audits/">Full update history &rarr;</a>
  </div>
  <div class="hmi-v3-rev-grid">
${items}
  </div>
</section>
${END}`

const result = upsertMarkerBlock(homepagePath, BEGIN, END, block, { anchorAfter: ANCHOR_AFTER })
console.log(`build-recently-updated: ${result} — ${recent.length} pages (newest ${recent[0].updated}).`)
