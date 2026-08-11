#!/usr/bin/env node
// Generated homepage sections: most-referenced pages, the recent-change feed,
// the FAQ accordion, and the "how the Index is built" strip.
//
// Separate from build-corpus-counter.mjs because the change feed reads
// wiki/static/change-watch-index.json, which build-change-watch.mjs writes late
// in the prebuild chain — long after the counter runs. Two generators writing
// wiki/index.md is safe: prebuild is a serial `&&` chain and each does its own
// read-modify-write of disjoint marker blocks.
//
// Nothing here is hand-typed. Counts come from the same countMarkdownPages() the
// navigation and the corpus counter use, so the three surfaces cannot quote
// different numbers for the same thing.

import fs from "node:fs"
import path from "node:path"
import { upsertMarkerBlock } from "./lib/upsert-marker-block.mjs"
import { countMarkdownPages, readPageFrontmatter } from "./lib/count-pages.mjs"
import { answerTripsFirewall } from "./lib/faq-firewall-guard.mjs"

const repoRoot = process.cwd()
const wikiRoot = path.join(repoRoot, "wiki")
const homepagePath = path.join(wikiRoot, "index.md")
const changeWatchPath = path.join(wikiRoot, "static/change-watch-index.json")
const faqPath = path.join(repoRoot, "tools/homepage/faq.json")

const M = {
  top: ["<!-- BEGIN: hmi-home-most-referenced -->", "<!-- END: hmi-home-most-referenced -->"],
  feed: ["<!-- BEGIN: hmi-home-changefeed -->", "<!-- END: hmi-home-changefeed -->"],
  faq: ["<!-- BEGIN: hmi-home-faq -->", "<!-- END: hmi-home-faq -->"],
  steps: ["<!-- BEGIN: hmi-home-methodology -->", "<!-- END: hmi-home-methodology -->"],
}

const FEED_ITEMS = 8
const TOP_ITEMS = 6

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

const fmt = (n) => Number(n).toLocaleString("en-US")

// ---------------------------------------------------------------------------
// Live counts
// ---------------------------------------------------------------------------
const counts = {
  metal_pages: countMarkdownPages(path.join(wikiRoot, "metals"), ["index.md"]),
  ingredient_pages: countMarkdownPages(path.join(wikiRoot, "ingredients"), ["index.md"]),
  product_pages: countMarkdownPages(path.join(wikiRoot, "products"), ["index.md"]),
  regulation_pages: countMarkdownPages(path.join(wikiRoot, "regulations"), ["index.md"]),
  source_pages: countMarkdownPages(path.join(wikiRoot, "sources"), ["index.md", "_TEMPLATE.md"]),
}

// ---------------------------------------------------------------------------
// 1. Most-referenced pages
// ---------------------------------------------------------------------------
function topBySources(dir, limit) {
  return [...readPageFrontmatter(path.join(wikiRoot, dir))]
    .map(([slug, fm]) => ({
      slug,
      title: String(fm.title ?? slug).trim(),
      sources: Number(fm.sources ?? 0),
    }))
    .filter((p) => p.sources > 0)
    .sort((a, b) => b.sources - a.sources || a.slug.localeCompare(b.slug))
    .slice(0, limit)
}

function renderTop() {
  const cols = [
    { heading: "Metals", dir: "metals", total: counts.metal_pages, noun: "metals" },
    { heading: "Ingredients", dir: "ingredients", total: counts.ingredient_pages, noun: "ingredients" },
    { heading: "Products", dir: "products", total: counts.product_pages, noun: "product categories" },
  ]
  const rendered = cols
    .map((col) => {
      const rows = topBySources(col.dir, TOP_ITEMS)
        .map(
          (p) =>
            `        <li><a href="${col.dir}/${p.slug}/"><span>${esc(p.title)}</span><span class="hmi-home-top-count">${fmt(p.sources)}</span></a></li>`,
        )
        .join("\n")
      return `      <div class="hmi-home-top-col">
        <h3>${col.heading}</h3>
        <ul>
${rows}
        </ul>
        <a class="hmi-home-top-all" href="${col.dir}/">All ${fmt(col.total)} ${col.noun} →</a>
      </div>`
    })
    .join("\n")

  return `${M.top[0]}
<section class="hmi-band hmi-band--light" data-no-cite>
  <div class="hmi-band-inner">
    <h2>Most-referenced pages</h2>
    <p class="hmi-band-lede">Where the corpus is deepest, by the number of sources contributing to each page.</p>
    <div class="hmi-home-top-grid">
${rendered}
    </div>
  </div>
</section>
${M.top[1]}`
}

// ---------------------------------------------------------------------------
// 2. Recent changes
// ---------------------------------------------------------------------------
function renderFeed() {
  if (!fs.existsSync(changeWatchPath)) {
    console.error(
      `build-homepage: ${path.relative(repoRoot, changeWatchPath)} is missing.` +
        `\n  Run tools/build-change-watch.mjs first — in prebuild this generator must` +
        `\n  come after it, or the homepage ships a stale or empty change feed.`,
    )
    process.exit(1)
  }
  const data = JSON.parse(fs.readFileSync(changeWatchPath, "utf8"))
  const base = String(data.canonical_base ?? "https://heavymetalindex.com").replace(/\/$/, "")

  const ageDays = data.generated_at
    ? (Date.now() - Date.parse(data.generated_at)) / 86_400_000
    : Infinity
  if (ageDays > 7) {
    console.warn(
      `build-homepage: change-watch index is ${Math.round(ageDays)} days old` +
        ` (generated ${data.generated_at ?? "unknown"}). Run tools/build-change-watch.mjs.`,
    )
  }

  // Round-robin across event kinds rather than taking the head of the list.
  // recent_global is ordered by date, and a single resynthesis pass emits dozens
  // of same-kind events on one day — taking the first eight yields eight
  // near-identical rows, which reads as a stuck feed rather than a live corpus.
  // The kinds that matter most to a reader (a pooled value moving, an evidence
  // base doubling) are exactly the ones a head-of-list slice buries.
  // change-watch details are written for the internal record: they cite the
  // operating manual by part number and print raw `null` for an uncomputed
  // bound. Both are correct in the ledger and wrong on a public page. Cleaned
  // here rather than upstream because other consumers read that field as-is.
  const publicDetail = (raw) => {
    const text = String(raw ?? "")
      .replace(/;\s*resynthesis trigger per Part\s*\d+\.?/i, ".")
      // Percentile arithmetic is staff-side per CLAUDE.md Part 19: a p-value on a
      // heavymetalindex.com URL is what lets an opponent argue the reference and
      // the certification programme are one artefact. The typical range beside it
      // is literature-native and stays.
      .replace(/,?\s*p\d{1,3}\s+[\d.,]+\s*→\s*[\d.,]+/gi, "")
      .replace(/\(\s*\)/g, "")
      .replace(/\s+\)/g, ")")
      .trim()
    // A bound that has not been computed is a bookkeeping state, not a change a
    // reader can act on.
    if (/\bnull\b/.test(text)) return null
    return text
  }

  const byKind = new Map()
  for (const ev of data.recent_global ?? []) {
    const detail = publicDetail(ev.detail)
    if (!detail) continue
    if (!byKind.has(ev.kind)) byKind.set(ev.kind, [])
    byKind.get(ev.kind).push({ ...ev, detail })
  }
  const queues = [...byKind.values()]
  const items = []
  for (let round = 0; items.length < FEED_ITEMS; round += 1) {
    let placed = false
    for (const queue of queues) {
      if (round >= queue.length) continue
      items.push(queue[round])
      placed = true
      if (items.length >= FEED_ITEMS) break
    }
    if (!placed) break
  }

  const rows = items
    .map((ev) => {
      // page_url is absolute in the source data; the homepage links relatively
      // everywhere else, and absolute hrefs break local preview.
      const rel = String(ev.page_url ?? "").startsWith(base)
        ? `${String(ev.page_url).slice(base.length).replace(/^\//, "")}/`
        : ev.page_url
      const detail = esc(ev.detail ?? "")
      const what = rel ? `<a href="${esc(rel)}">${detail}</a>` : detail
      return `      <li>
        <time datetime="${esc(ev.date)}">${esc(ev.date)}</time>
        <span class="hmi-home-feed-what">${what}</span>
      </li>`
    })
    .join("\n")

  return `${M.feed[0]}
<section class="hmi-band hmi-band--shade" data-no-cite>
  <div class="hmi-band-inner">
    <h2>What changed recently</h2>
    <p class="hmi-band-lede">The ${FEED_ITEMS} most recent evidence changes across the corpus, from ${fmt(data.total_events ?? 0)} recorded events. Every page also carries its own update history.</p>
    <ul class="hmi-home-feed">
${rows}
    </ul>
  </div>
</section>
${M.feed[1]}`
}

// ---------------------------------------------------------------------------
// 3. FAQ
//
// Emits the exact `data-hmi-faq` contract postbuild-inject-jsonld.mjs parses, so
// the FAQPage JSON-LD is extracted from the same visible text a reader sees —
// no second copy that could drift, which is what Google's "answer must be
// visible on the page" rule requires.
// ---------------------------------------------------------------------------
function renderFaq() {
  const faq = JSON.parse(fs.readFileSync(faqPath, "utf8"))
  const kept = []
  const dropped = []

  for (const item of faq.items) {
    const answer = item.a.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      if (!(key in counts)) {
        console.error(`build-homepage: FAQ placeholder {{${key}}} has no matching count.`)
        process.exit(1)
      }
      return fmt(counts[key])
    })
    // Drop, never soften — the same rule build-key-questions.mjs follows.
    if (answerTripsFirewall(answer) || answerTripsFirewall(item.q)) {
      dropped.push(item.anchor)
      continue
    }
    kept.push({ ...item, a: answer })
  }

  if (kept.length < 2) {
    console.error(`build-homepage: only ${kept.length} FAQ item(s) survived the firewall check.`)
    process.exit(1)
  }

  const details = kept
    .map(
      (it) => `    <details class="hmi-faq-item" data-hmi-faq="1" data-anchor="${esc(it.anchor)}" data-question="${esc(it.q)}">
      <summary>${esc(it.q)}</summary>
      <div class="hmi-home-faq-answer" data-hmi-faq-answer="1">
        <p>${esc(it.a)}</p>
      </div>
    </details>`,
    )
    .join("\n")

  return {
    dropped,
    block: `${M.faq[0]}
<section class="hmi-band hmi-band--light" data-no-cite>
  <div class="hmi-band-inner">
    <h2>Common questions</h2>
    <div class="hmi-home-faq">
${details}
    </div>
  </div>
</section>
${M.faq[1]}`,
  }
}

// ---------------------------------------------------------------------------
// 4. How the Index is built
// ---------------------------------------------------------------------------
function renderSteps() {
  const steps = [
    {
      h: "Search the literature",
      p: `A standing search across bibliographic databases and agency publications identifies candidate studies. What was found, and what has been reviewed so far, is reported openly.`,
      href: "methodology/search-strategy/",
      cta: "Search strategy",
    },
    {
      h: "Record the source",
      p: `Each admitted document gets a source page carrying its citation, methods, the values extracted from it, and the file hash of the document those values were read out of. ${fmt(counts.source_pages)} so far.`,
      href: "sources/",
      cta: "Source archive",
    },
    {
      h: "Extract structured values",
      p: `Reported concentrations are normalised to a common unit and basis, with censoring and analyte species preserved rather than flattened, and held as machine-readable records.`,
      href: "methodology/",
      cta: "Methodology",
    },
    {
      h: "Synthesise, and show the gaps",
      p: `Pages are written from the pooled records, with confidence stated and thin evidence marked as thin. Coverage and defensibility audits are published rather than kept internal.`,
      href: "coverage/",
      cta: "Coverage",
    },
  ]
  const rendered = steps
    .map(
      (s) => `      <div class="hmi-home-step">
        <h3>${esc(s.h)}</h3>
        <p>${esc(s.p)}</p>
        <a href="${s.href}">${esc(s.cta)} →</a>
      </div>`,
    )
    .join("\n")

  return `${M.steps[0]}
<section class="hmi-band hmi-band--shade" data-no-cite>
  <div class="hmi-band-inner">
    <h2>How the Index is built</h2>
    <p class="hmi-band-lede">Every page is the end of a traceable chain, and each step of it is documented.</p>
    <div class="hmi-home-steps">
${rendered}
    </div>
  </div>
</section>
${M.steps[1]}`
}

// ---------------------------------------------------------------------------
// Write. Order matters on first install: each block anchors after the previous
// one, so the page assembles top to bottom.
// ---------------------------------------------------------------------------
const COUNTER_END = "<!-- END: hmi-corpus-counter -->"
const faq = renderFaq()

upsertMarkerBlock(homepagePath, ...M.top, renderTop(), { anchorAfter: COUNTER_END })
upsertMarkerBlock(homepagePath, ...M.feed, renderFeed(), { anchorAfter: M.top[1] })
upsertMarkerBlock(homepagePath, ...M.faq, faq.block, { anchorAfter: M.feed[1] })
upsertMarkerBlock(homepagePath, ...M.steps, renderSteps(), { anchorAfter: M.faq[1] })

console.log(
  `build-homepage: most-referenced (${TOP_ITEMS}×3), change feed (${FEED_ITEMS}), FAQ (${
    JSON.parse(fs.readFileSync(faqPath, "utf8")).items.length - faq.dropped.length
  } items${faq.dropped.length ? `, ${faq.dropped.length} dropped by the firewall: ${faq.dropped.join(", ")}` : ""}), methodology strip.`,
)
