// Coordinate-based extraction of GB 2762-2025 tables.
//
// Neither pdftotext -raw nor -layout reconstructs these tables: the text layer
// emits each digit as its own run, and the integer/decimal halves of a value can
// land on different output lines ("08(以固态产品计)" with its "0." on the next
// line). Line-oriented parsing therefore cannot recover the numbers.
//
// -bbox-layout gives every word's x/y box. Grouping words by their vertical
// centre reconstructs the true visual row, and sorting by x within the row puts
// the value back together regardless of emission order.

import { execSync } from "node:child_process"
import fs from "node:fs"

const PDF = process.argv[2]
const xml = execSync(`pdftotext -bbox-layout "${PDF}" -`, { encoding: "utf8", maxBuffer: 128 * 1024 * 1024 })

// Parse <page ...> ... <word xMin=".." yMin=".." xMax=".." yMax="..">text</word>
const pages = []
const pageRe = /<page width="([\d.]+)" height="([\d.]+)">([\s\S]*?)<\/page>/g
let pm
while ((pm = pageRe.exec(xml)) !== null) {
  const body = pm[3]
  const words = []
  const wRe = /<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([\s\S]*?)<\/word>/g
  let wm
  while ((wm = wRe.exec(body)) !== null) {
    const text = wm[5]
      .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    if (!text.trim()) continue
    words.push({
      x: parseFloat(wm[1]), y: parseFloat(wm[2]),
      x2: parseFloat(wm[3]), y2: parseFloat(wm[4]),
      cy: (parseFloat(wm[2]) + parseFloat(wm[4])) / 2,
      text,
    })
  }
  pages.push({ page: pages.length + 1, words })
}

// Group a page's words into visual rows by vertical centre.
function rowsOf(page, tol = 3.2) {
  const ws = [...page.words].sort((a, b) => a.cy - b.cy || a.x - b.x)
  const rows = []
  for (const w of ws) {
    const r = rows.find((r) => Math.abs(r.cy - w.cy) <= tol)
    if (r) { r.words.push(w); r.cy = (r.cy * (r.words.length - 1) + w.cy) / r.words.length }
    else rows.push({ cy: w.cy, words: [w] })
  }
  for (const r of rows) r.words.sort((a, b) => a.x - b.x)
  return rows.sort((a, b) => a.cy - b.cy)
}

// Join a row's words, closing gaps between numeric fragments (the per-glyph
// digit emission) while preserving real column separation as a wide gap.
function rowText(r) {
  let out = ""
  for (let i = 0; i < r.words.length; i++) {
    const w = r.words[i], prev = r.words[i - 1]
    if (prev) {
      const gap = w.x - prev.x2
      const numeric = /[\d.]$/.test(prev.text) && /^[\d.]/.test(w.text)
      if (numeric && gap < 6) out += ""            // same number, re-join
      else if (gap > 12) out += "\t"               // column break
      else out += ""                                // adjacent glyphs (CJK)
    }
    out += w.text
  }
  return out
}

const allRows = []
for (const p of pages) for (const r of rowsOf(p)) allRows.push({ page: p.page, text: rowText(r) })

fs.writeFileSync(
  "/private/tmp/claude-501/-Users-karenpendergrass-Desktop-heavy-metal-index/35a4c9ae-43aa-446f-b12a-8d0dcf072d05/scratchpad/gb2762-2025-rows.txt",
  allRows.map((r) => `p${r.page}\t${r.text}`).join("\n"),
)
console.log("pages:", pages.length, "| reconstructed rows:", allRows.length)

// Locate ALL "4.N <name>" section headings so boundaries are correct. Only the
// metal sections are reported, but non-metal sections (4.8 nitrite/nitrate,
// 4.9 benzo[a]pyrene, 4.11 PCBs) MUST bound them — otherwise Table 8's
// nitrite/nitrate columns get misread as chromium values.
const METALS = { "铅": "Pb", "镉": "Cd", "汞": "tHg", "砷": "tAs", "锡": "Sn", "镍": "Ni", "铬": "Cr" }
const secs = []
allRows.forEach((r, i) => {
  const flat = r.text.replace(/\s/g, "")
  const m = flat.match(/^4\.(\d+)([^\d.].*)$/)
  if (!m) return
  const name = m[2]
  // a heading is a bare name, not a sentence (no colon, not a "限量指标" line)
  if (/[:：。]/.test(name) || name.length > 8) return
  secs.push({ i, num: m[1], name, metal: METALS[name] || null })
})
secs.forEach((s, k) => { s.end = k + 1 < secs.length ? secs[k + 1].i : allRows.length })
console.log("all sections:", secs.map((s) => `4.${s.num}${s.name}${s.metal ? "=" + s.metal : ""}`).join("  "))
const metalSecs = secs.filter((s) => s.metal)

const INFANT = /婴幼儿|婴儿配方|较大婴儿|幼儿配方|辅助食品|特殊医学用途婴儿/
const results = []
for (const s of metalSecs) {
  for (let i = s.i; i < s.end; i++) {
    const t = allRows[i].text
    if (!INFANT.test(t)) continue
    const cols = t.split("\t").map((c) => c.trim()).filter(Boolean)
    // value = first column that is a bare number (optionally with a basis note)
    let value = null, note = ""
    for (const c of cols.slice(1)) {
      const m = c.match(/^(\d+(?:\.\d+)?)\s*([a-z])?\s*(\([^)]*\))?$/)
      if (m) { value = Number(m[1]); note = m[3] || ""; break }
    }
    results.push({ metal: s.metal, page: allRows[i].page, category: cols[0] || t, value, note, raw: t.replace(/\t/g, " | ") })
  }
}
fs.writeFileSync(
  "/private/tmp/claude-501/-Users-karenpendergrass-Desktop-heavy-metal-index/35a4c9ae-43aa-446f-b12a-8d0dcf072d05/scratchpad/gb2762-2025-infant.json",
  JSON.stringify(results, null, 2),
)
console.log("infant rows:", results.length, "| with value:", results.filter((r) => r.value !== null).length)
console.log("")
for (const r of results) {
  console.log(`${r.metal.padEnd(4)} p${String(r.page).padEnd(3)} ${(r.value === null ? "—" : String(r.value)).padStart(7)} ${r.note.padEnd(10)} ${r.raw.slice(0, 78)}`)
}
