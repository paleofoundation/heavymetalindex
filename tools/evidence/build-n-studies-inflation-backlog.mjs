#!/usr/bin/env node
// C0c — build the n_studies-inflation backlog registry.
//
// THE SIGNATURE this exists to track: `n_studies` changed while the pooled
// values did not. That is the fingerprint of the 2026-05-17 overnight pass
// (`fe6ad96e1`), which raised study counts and confidence across 207 pages
// "without ever re-pooling" — its own corrective commit `8e90aa2b8` says so.
// 372 cells were inflated; 322 are still live and unexamined.
//
// WHY THIS IS A SEPARATE GENERATOR, NOT PART OF THE LINT: detecting the
// *transition* needs git history, and a prebuild step that reads `git log` is
// broken on Vercel — the builder does a shallow clone and sees ~1 commit per
// file, so a history-reading generator silently produces wrong output on every
// deploy. So history is read HERE, once, by hand, and the result is committed.
// The lint then works purely from the committed registry and the current tree.
//
// HOW THE BACKLOG DRAINS, which is the point of recording pooled values too:
// each row stores the cell's n_studies AND its typical_ppb/p95_ppb as the pass
// left them. The lint flags a cell only while it still matches that fingerprint.
// Re-pool the cell — change typical/p95 — and it drains automatically, no list
// to hand-maintain. Change only n_studies and it stays flagged, which is correct:
// editing the count without re-pooling is the exact move that created this.
//
//   node tools/evidence/build-n-studies-inflation-backlog.mjs
//
// Re-run only if the inflating commit's scope is re-scoped. Do NOT wire into
// prebuild.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const PASS = "fe6ad96e1" // the 2026-05-17 overnight refresh
const repoRoot = process.cwd()
const outCsv = path.join(repoRoot, "data/evidence/n-studies-inflation-backlog.csv")
const outMd = path.join(repoRoot, "data/evidence/n-studies-inflation-backlog.md")

const git = (args) => {
  try {
    return execFileSync("git", args, { encoding: "utf8", maxBuffer: 1 << 28 })
  } catch {
    return null
  }
}

/** Parse `contamination_profile` cells out of a page's frontmatter. */
function cells(text) {
  if (text == null) return null
  const out = {}
  let cur = null
  for (const line of text.split("\n")) {
    const m = line.match(/^\s{2}([A-Za-z][A-Za-z0-9-]*):\s*$/)
    if (m) {
      cur = m[1]
      out[cur] = {}
      continue
    }
    if (!cur) continue
    const kv = line.match(/^\s{4}(n_studies|typical_ppb|p95_ppb|confidence|status|last_reviewed):\s*(.+)$/)
    if (kv) out[cur][kv[1]] = kv[2].trim()
    else if (/^\s{0,3}\S/.test(line)) cur = null
  }
  return out
}

const touched = (git(["show", "--name-only", "--format=", PASS]) || "")
  .split("\n")
  .map((s) => s.trim())
  .filter((s) => s.endsWith(".md") && s.startsWith("wiki/"))

const rows = []
for (const p of touched) {
  const before = cells(git(["show", `${PASS}^:${p}`]))
  const after = cells(git(["show", `${PASS}:${p}`]))
  if (!after) continue
  for (const [metal, a] of Object.entries(after)) {
    if (a.n_studies == null) continue
    const nAfter = Number(a.n_studies)
    const nBefore = before?.[metal]?.n_studies == null ? 0 : Number(before[metal].n_studies)
    if (!(nAfter > nBefore)) continue
    rows.push({
      page: p,
      metal,
      n_before: nBefore,
      n_after: nAfter,
      typical_ppb: a.typical_ppb ?? "",
      p95_ppb: a.p95_ppb ?? "",
      confidence: a.confidence ?? "",
      last_reviewed: a.last_reviewed ?? "",
      zero_to_n: nBefore === 0 ? "yes" : "no",
    })
  }
}

rows.sort((x, y) => y.n_after - y.n_before - (x.n_after - x.n_before) || x.page.localeCompare(y.page))

const cols = ["page", "metal", "n_before", "n_after", "typical_ppb", "p95_ppb", "confidence", "last_reviewed", "zero_to_n"]
const esc = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v))
fs.writeFileSync(outCsv, [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n")

const zero = rows.filter((r) => r.zero_to_n === "yes")
const high = rows.filter((r) => r.confidence === "high")
const pages = new Set(rows.map((r) => r.page))
const outsideIngredients = [...pages].filter((p) => !p.startsWith("wiki/ingredients/"))

fs.writeFileSync(
  outMd,
  `---
title: n_studies inflation backlog
date: ${new Date().toISOString().slice(0, 10)}
generated_by: tools/evidence/build-n-studies-inflation-backlog.mjs
---

# n_studies inflation backlog — cells written by ${PASS} and never re-pooled

\`${PASS}\` (2026-05-17, "synthesis: overnight wiki refresh") raised \`n_studies\` and \`confidence\`
across the wiki **without re-pooling the underlying values** — the admission is in its own corrective
commit, \`8e90aa2b8\`. This file is the actionable register of what that pass wrote.

- **Cells inflated:** ${rows.length}
- **Pages affected:** ${pages.size}
- **\`0 → n\` cells** (no studies to some): ${zero.length}
- **\`confidence: high\` cells:** ${high.length}

**What "inflated" means here, precisely:** \`n_studies\` rose at that commit. Given the commit's own
admission that it did not re-pool, that is a strong signal — but it is **not proof any individual count
is wrong**. Some cells may have had genuine sources routed that night. Establishing which requires
reading each cell's cited sources, which is the re-pooling work itself.

**How a row drains:** \`tools/audit-contamination-profile-integrity.mjs\` flags a cell only while its
current \`typical_ppb\`/\`p95_ppb\` still match what this pass left. Re-pool the cell and it drains
automatically. Editing \`n_studies\` alone does **not** drain it — that is the same move that created
this backlog.

**Do not "fix" a row by lowering the count to look plausible.** Re-pool against the cited sources, or
report the cell.

## Worst by magnitude

| page | metal | before → after | confidence | 0→n |
| --- | --- | --- | --- | --- |
${rows
  .slice(0, 25)
  .map((r) => `| \`${r.page.replace("wiki/", "")}\` | ${r.metal} | ${r.n_before} → ${r.n_after} | ${r.confidence} | ${r.zero_to_n} |`)
  .join("\n")}

Full register: [\`n-studies-inflation-backlog.csv\`](n-studies-inflation-backlog.csv)
${outsideIngredients.length ? `\n**Scope note:** ${outsideIngredients.length} affected page(s) sit outside \`wiki/ingredients/\`, which is the only directory the integrity lint scans — those rows are recorded here but will not be reported by the lint until its scan scope widens:\n${outsideIngredients.map((p) => `- \`${p}\``).join("\n")}\n` : ""}
`
)

console.log(`n_studies inflation backlog: ${rows.length} cells across ${pages.size} pages`)
console.log(`  0->n: ${zero.length}   confidence:high: ${high.length}`)
if (outsideIngredients.length) console.log(`  outside wiki/ingredients/ (lint will not see): ${outsideIngredients.length} page(s)`)
console.log(`  wrote ${path.relative(repoRoot, outCsv)} + .md`)
