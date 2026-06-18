#!/usr/bin/env node
// build-category-manual.mjs --category=6
//
// Parameterized Program Manual assembler. The shared Parts (Front Matter, Part 1
// Why HMTc, Part 2 The Program, Part 4 Lot Testing, Part 5 Methodology) are
// category-agnostic and reused verbatim from the standards-book. Part 3 = the
// category's per-row Standards Briefings, transformed into chapters. Produces a
// per-category master markdown the existing HTML/Typst renderers can bind.
//
// This is the parameterization the Cat-1-hardcoded build-program-manual.mjs lacked;
// it unblocks a Program Manual for every category, not just infant foods.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const BOOK = path.join(repoRoot, "data/workbench/standards-book")
const BRIEFINGS = path.join(repoRoot, "data/workbench/briefings")
const args = new Map(process.argv.slice(2).map((a) => a.replace(/^--/, "").split("=")))
const category = args.get("category") || "6"

// --- per-category config (extend as categories finalize) ---
const CATEGORIES = {
  "24": {
    title: "Butter and Ghee",
    subtitle: "Butter and Ghee (Dairy Fats)",
    chapters: [
      { num: "3.1", slug: "butter-and-ghee", title: "Butter and Ghee" },
    ],
    note: "This volume covers the butter-and-ghee dairy-fat subcategory; other dairy rows publish separately as they finalize.",
  },
  "6": {
    title: "Seafood",
    subtitle: "Seafood (Fish and Shellfish)",
    chapters: [
      { num: "3.1", slug: "fish-marine-predatory", title: "Marine Fish, Predatory (tuna, swordfish, shark, marlin)" },
      { num: "3.2", slug: "fish-marine-non-predatory", title: "Marine Fish, Non-Predatory (cod, herring, sardine, anchovy, mackerel)" },
      { num: "3.3", slug: "fish-freshwater", title: "Freshwater Fish" },
      { num: "3.4", slug: "shellfish", title: "Shellfish (Bivalves and Crustaceans)" },
      { num: "3.5", slug: "seaweed-kelp-foods", title: "Seaweed and Kelp Foods (nori, wakame, kombu, dulse)" },
    ],
    note: "Canned seafood is not a standalone row: per the canned/tin rule, canned forms route to their matrix-native fish or shellfish chapter carrying a tin (Sn) flag handled by the food-contact cans platform.",
  },
}
const cfg = CATEGORIES[category]
if (!cfg) { console.error(`No manual config for category ${category}`); process.exit(1) }

function readDirMd(rel) {
  const dir = path.join(BOOK, rel)
  if (!fs.existsSync(dir)) return ""
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort()
    .map((f) => fs.readFileSync(path.join(dir, f), "utf8")).join("\n\n")
}
function stripSection(md, heading) {
  // remove a "## <heading>..." section up to the next "## " or EOF
  const re = new RegExp(`(^|\\n)##\\s+${heading}[\\s\\S]*?(?=\\n##\\s|$)`, "g")
  return md.replace(re, "\n")
}

function transformBriefingToChapter(ch) {
  const f = path.join(BRIEFINGS, `${ch.slug}.md`)
  let c = fs.readFileSync(f, "utf8")
  c = c.replace(/^---\n[\s\S]*?\n---\n+/, "") // strip frontmatter
  c = c.replace(/^# HMTc Standards Briefing — .+$/m, `# ${ch.num} ${ch.title}`)
  if (!c.includes(`# ${ch.num} ${ch.title}`)) c = `# ${ch.num} ${ch.title}\n\n` + c
  c = stripSection(c, "Anti-Circumvention")
  c = stripSection(c, "Pre-Publication Checklist")
  c = c.replace(/MAX_SOURCE_SHARE\s*=\s*[0-9.]+/g, "the per-source share cap")
  const opener = `\n*One of ${cfg.chapters.length} per-product chapters in Part 3, self-contained as a licensing exhibit. The methodology is in Part 5.1; the certification status framework in Part 2.3; the Standards Ratchet in Part 2.10. Held/withdrawn analytes (e.g. total arsenic in fish and seaweed, which is arsenosugar/arsenobetaine-dominated — inorganic arsenic is the toxic and regulated analyte) are shown as "adjudication pending" and carry no published threshold; the published values are validated by the Publication QC Gate (no value exceeds a regulatory ceiling).*\n`
  c = c.replace(new RegExp(`(# ${ch.num} [^\\n]+)\\n`), `$1\n${opener}`)
  return c
}

// --- front matter, retargeted to the category ---
let front = readDirMd("front-matter")
front = front
  .replace(/Infant and Child Foods/g, cfg.subtitle)
  .replace(/HMTc Infant and Child Foods Program Manual/g, `HMTc ${cfg.title} Program Manual`)

const part3 = [
  `# Part 3 — The Standards`,
  `\nThe HMTc ${cfg.title} standards, one chapter per product row. Each Master Limit Table is the set of published thresholds for that row, in its native basis. ${cfg.note}\n`,
  ...cfg.chapters.map(transformBriefingToChapter),
].join("\n\n---\n\n")

const master = [
  front,
  readDirMd("parts/01-why-hmtc-exists"),
  readDirMd("parts/02-the-hmtc-program"),
  readDirMd("parts/03-using-heavymetalindex-com"),
  part3,
  readDirMd("parts/05-the-lot-testing-schedule"),
  fs.existsSync(path.join(BOOK, "source-documents/lot-testing-schedule.md"))
    ? fs.readFileSync(path.join(BOOK, "source-documents/lot-testing-schedule.md"), "utf8").replace(/^#[^\n]*\n/, "")
    : "",
  readDirMd("parts/06-methodology-and-appendices"),
].join("\n\n---\n\n")

const outDir = path.join(BOOK, "build")
fs.mkdirSync(outDir, { recursive: true })
const out = path.join(outDir, `HMTc-${cfg.title.replace(/\s+/g, "-")}-Program-Manual-2026.md`)
fs.writeFileSync(out, master)
const words = master.split(/\s+/).length
console.log(`Wrote ${path.relative(repoRoot, out)} — ${cfg.chapters.length} standards chapters, ~${Math.round(words / 250)} pages (${words} words)`)
