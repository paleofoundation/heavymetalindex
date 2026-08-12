#!/usr/bin/env node
// build-key-questions.mjs — derive a "Key questions" accordion from a metal
// page's H2 sections and inject it as a marker-bounded block of server-rendered
// <details> elements.
//
// WHY THIS EXISTS
// ---------------
// The metals-first rollout (Karen, locked) wants every metal page to surface a
// 4–7 item question-framed summary that (a) reads well for a first-time human,
// (b) feeds an FAQPage JSON-LD block in postbuild-inject-jsonld.mjs, and (c) is
// machine-extractable by answer engines. Rather than hand-author Q&A per page,
// this generator derives it deterministically from the page's own H2 sections:
// each eligible section becomes one accordion item whose question is the section
// title reframed as a question and whose visible answer is the section's first
// paragraph verbatim, followed by a "Read full section ↓" anchor to the live H2.
//
// HARD CONSTRAINTS (Karen, locked)
// --------------------------------
//   * No information loss. The accordion is ADDITIVE — it never replaces a
//     section. The source H2 stays exactly where it is. We only insert a new
//     marker-bounded block after the page intro.
//   * On-disk markdown [[sources/x]] wikilinks are NEVER rewritten. The visible
//     answer text strips wikilink *syntax* at render-injection time only, for a
//     clean human/JSON-LD sentence; the underlying section markdown is untouched.
//   * Collapse via server-rendered <details> (CSS, never JS-fetch). The citation
//     transform (rehype-citation, footnotes) only touches <a href="#bib…"> and
//     bibliography nodes, so plain <details>/<summary> pass through intact.
//   * Part 2 / Part 19 firewall: no derived HMTc value, no P-value, no
//     occurrence-comparison-as-certification-standard framing may enter an answer. A section
//     whose first paragraph trips the firewall guard is SKIPPED (not softened),
//     and a NOTE is logged. The honest fix is to leave it off the accordion, not
//     to launder the wording.
//
// ANCHOR CORRECTNESS
// ------------------
// The "Read full section" href must match the id Quartz emits for the H2.
// Quartz slugs headings with rehype-slug, which is github-slugger's slug().
// We import the SAME function so the anchor is guaranteed to resolve.
//
// WIRING: prebuild, after the contamination/scorecard generators and before the
// firewall lint, so the firewall lint also sees the injected block. Idempotent —
// re-runs replace the marker block, never duplicate. Currently scopes to
// wiki/metals/ (metals-first rollout); extend PAGE_DIRS later for products/etc.
//
// Output side-channel: data/evidence/key-questions-audit.json (per-page item
// count + skipped-by-firewall list) for triage.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { slug as ghSlug } from "github-slugger"
import { answerTripsFirewall } from "./lib/faq-firewall-guard.mjs"

const repoRoot = process.cwd()
const PAGE_DIRS = ["wiki/metals"]

const BEGIN_MARKER = "<!-- BEGIN: hmi-key-questions -->"
const END_MARKER = "<!-- END: hmi-key-questions -->"

// Sections that never make sensible standalone Q&A items, or that duplicate the
// intro / are navigational. Matched case-insensitively against the H2 title.
const EXCLUDE_SECTIONS = new Set([
  "overview", // duplicates the intro the accordion sits under
  "at a glance", // already a consumer summary; folding it in would be redundant
  "sources",
  "page history",
  "update history",
  "references",
  "app-layer integration",
  "see also",
])

// Minimum/maximum accordion items. Karen: 4–7. If fewer than MIN eligible
// sections survive the firewall, we still emit what we have (an honest 2–3 is
// better than padding with weak Q&A), but we never exceed MAX.
const MIN_ITEMS = 4
const MAX_ITEMS = 7

// Section-title → question reframing. Deterministic, keyword-driven; falls back
// to a generic "What about {title}?" so a new section never breaks the build.
function questionFor(title) {
  const t = title.trim().replace(/\s+/g, " ")
  const lower = t.toLowerCase()
  const map = [
    [/^toxicology$/, () => `What are the health effects of ${metalName}?`],
    [/exposure routes?/, () => `How are people exposed to ${metalName}?`],
    [/^food sources?$/, () => `Which foods are the main sources of ${metalName}?`],
    [/regulatory limits?/, () => `What are the regulatory limits for ${metalName}?`],
    [/^testing$/, () => `How is ${metalName} tested for?`],
    [/microbiome/, () => `How does ${metalName} affect the gut microbiome?`],
    [/vulnerable populations?/, () => `Who is most vulnerable to ${metalName}?`],
    [/open questions?/, () => `What is still unknown about ${metalName}?`],
    [/historical context/, () => `What is the historical context for ${metalName} exposure?`],
  ]
  for (const [re, fn] of map) if (re.test(lower)) return fn()
  // Generic fallback: turn a noun-phrase H2 into a question.
  return `What should I know about ${t.toLowerCase()} for ${metalName}?`
}

let metalName = "this metal" // set per-page before questionFor() is called

const audit = { generated: new Date().toISOString(), pages: [] }

function splitSections(body) {
  // Returns [{ title, anchor, firstPara }] for each H2. Robust to ATX `## `.
  const lines = body.split("\n")
  const sections = []
  let current = null
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+?)\s*$/)
    if (h2 && !line.startsWith("###")) {
      if (current) sections.push(current)
      current = { title: h2[1].trim(), bodyLines: [] }
    } else if (current) {
      current.bodyLines.push(line)
    }
  }
  if (current) sections.push(current)
  return sections.map((s) => ({
    title: s.title,
    anchor: ghSlug(s.title),
    firstPara: firstParagraph(s.bodyLines),
  }))
}

function firstParagraph(bodyLines) {
  // Skip a leading <!-- audience: … --> comment and blank lines, then collect
  // the first contiguous run of prose. Stop at the first blank line, a sub-
  // heading, a list, a table, or an HTML block.
  const para = []
  let started = false
  for (const raw of bodyLines) {
    const line = raw.replace(/\s+$/, "")
    if (!started) {
      if (line.trim() === "") continue
      if (/^<!--/.test(line.trim())) continue // audience comment
      if (/^[#>\-*|<]/.test(line.trim())) continue // heading/quote/list/table/html
      started = true
    }
    if (started) {
      if (line.trim() === "") break
      if (/^[#>\-*|]/.test(line.trim())) break
      if (/^<\/?(?:details|div|table|ul|ol)\b/i.test(line.trim())) break
      para.push(line.trim())
    }
  }
  return para.join(" ").trim()
}

// Render a section's first paragraph as clean visible text:
//   * [[sources/x|Label]] → Label   ;   [[a/b/c|Label]] → Label   ;
//     [[a/b/c]] → c   (display text only — the on-disk md is NOT touched)
//   * markdown links [text](url) → text
//   * strip leftover emphasis markers
//   * collapse whitespace
// This is render-injection-time text shaping only. The source section markdown
// keeps every wikilink exactly as written.
function toVisibleText(md) {
  return md
    .replace(/\[\[[^\]|]*\|([^\]]+)\]\]/g, "$1") // [[target|Label]] → Label
    .replace(/\[\[([^\]|]+)\]\]/g, (_m, t) => t.split("/").pop()) // [[a/b/c]] → c
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // [text](url) → text
    .replace(/[*_`]+/g, "") // emphasis/code markers
    .replace(/\s+/g, " ")
    .trim()
}

// HTML-escape for safe insertion into <summary>/<p> text nodes.
function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function buildBlock(items, slug) {
  // Server-rendered details elements. data-hmi-faq marks the block for the
  // JSON-LD postbuild pass; data-question / data-anchor carry the structured
  // fields so postbuild reads the SAME verbatim text the human sees.
  const out = []
  out.push(BEGIN_MARKER)
  out.push("")
  out.push('<section class="hmi-key-questions" aria-label="Key questions">')
  out.push('<h2 class="hmi-key-questions-title">Key questions</h2>')
  for (const it of items) {
    out.push(
      `<details class="hmi-faq-item" data-hmi-faq="1" data-anchor="${esc(it.anchor)}" data-question="${esc(it.question)}">`,
    )
    out.push(`<summary>${esc(it.question)}</summary>`)
    out.push('<div class="hmi-faq-answer" data-hmi-faq-answer="1">')
    out.push(`<p>${esc(it.answer)}</p>`)
    out.push(
      `<p class="hmi-faq-readmore"><a href="#${esc(it.anchor)}">Read full section ↓</a></p>`,
    )
    out.push("</div>")
    out.push("</details>")
  }
  out.push("</section>")
  out.push("")
  out.push(END_MARKER)
  return out.join("\n")
}

function injectAfterIntro(text, block) {
  // If a marker block already exists, replace it in place (idempotent).
  const existing = new RegExp(
    `${escapeRe(BEGIN_MARKER)}[\\s\\S]*?${escapeRe(END_MARKER)}`,
  )
  if (existing.test(text)) {
    return text.replace(existing, () => block)
  }
  // Otherwise insert immediately before the first H2 (so it sits after the
  // page intro / quick-read and never above the H1 or frontmatter).
  const lines = text.split("\n")
  let insertAt = lines.length
  let inFrontmatter = false
  let fmDone = false
  for (let i = 0; i < lines.length; i++) {
    if (i === 0 && lines[i].trim() === "---") {
      inFrontmatter = true
      continue
    }
    if (inFrontmatter && lines[i].trim() === "---") {
      inFrontmatter = false
      fmDone = true
      continue
    }
    if (inFrontmatter) continue
    if (fmDone && /^##\s+/.test(lines[i])) {
      insertAt = i
      break
    }
  }
  const before = lines.slice(0, insertAt).join("\n").replace(/\s+$/, "")
  const after = lines.slice(insertAt).join("\n")
  return `${before}\n\n${block}\n\n${after}`
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

let pagesTouched = 0
let pagesUnchanged = 0

for (const dir of PAGE_DIRS) {
  const abs = path.join(repoRoot, dir)
  if (!fs.existsSync(abs)) continue
  for (const file of fs.readdirSync(abs)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md" || file.startsWith("_")) continue
    const slug = file.replace(/\.md$/, "")
    const filePath = path.join(abs, file)
    const raw = fs.readFileSync(filePath, "utf8")
    const parsed = matter(raw)
    const fm = parsed.data
    if (fm.auto_generated === true) continue

    metalName = String(fm.name || fm.title || slug)

    const sections = splitSections(parsed.content)
    const skipped = []
    const items = []
    for (const sec of sections) {
      if (EXCLUDE_SECTIONS.has(sec.title.toLowerCase())) continue
      if (!sec.firstPara) continue
      const answer = toVisibleText(sec.firstPara)
      if (!answer || answer.length < 40) continue // too thin to be useful
      // Firewall guard: skip (do not soften) any section whose answer would
      // leak a derived HMTc value / P-value / clean-dirty-as-standard framing.
      const trip = answerTripsFirewall(answer)
      if (trip) {
        skipped.push({ section: sec.title, reason: trip })
        continue
      }
      items.push({
        question: questionFor(sec.title),
        answer: answer.length > 600 ? answer.slice(0, 597).trimEnd() + "…" : answer,
        anchor: sec.anchor,
      })
      if (items.length >= MAX_ITEMS) break
    }

    audit.pages.push({
      slug: `metals/${slug}`,
      items: items.length,
      skipped_by_firewall: skipped,
      below_min: items.length < MIN_ITEMS,
    })

    if (items.length === 0) {
      // Nothing eligible — strip any stale block so the page is clean.
      const stripped = injectAfterIntro(raw, "").replace(/\n{3,}/g, "\n\n")
      if (stripped !== raw) {
        fs.writeFileSync(filePath, stripped, "utf8")
        pagesTouched += 1
      } else {
        pagesUnchanged += 1
      }
      continue
    }

    const block = buildBlock(items, slug)
    const next = injectAfterIntro(raw, block)
    if (next !== raw) {
      fs.writeFileSync(filePath, next, "utf8")
      pagesTouched += 1
    } else {
      pagesUnchanged += 1
    }
  }
}

const auditPath = path.join(repoRoot, "data/evidence/key-questions-audit.json")
fs.mkdirSync(path.dirname(auditPath), { recursive: true })
fs.writeFileSync(auditPath, JSON.stringify(audit, null, 2) + "\n", "utf8")

console.log("build-key-questions:")
console.log(`  pages updated:   ${pagesTouched}`)
console.log(`  pages unchanged: ${pagesUnchanged}`)
const lowItem = audit.pages.filter((p) => p.below_min && p.items > 0)
if (lowItem.length) {
  console.log(
    `  NOTE: ${lowItem.length} page(s) below the ${MIN_ITEMS}-item target: ` +
      lowItem.map((p) => `${p.slug}(${p.items})`).join(", "),
  )
}
const fwSkips = audit.pages.flatMap((p) => p.skipped_by_firewall.map((s) => `${p.slug}:${s.section}`))
if (fwSkips.length) {
  console.log(`  NOTE: ${fwSkips.length} section(s) skipped by firewall guard: ${fwSkips.join(", ")}`)
}
console.log(`  audit: ${path.relative(repoRoot, auditPath)}`)
