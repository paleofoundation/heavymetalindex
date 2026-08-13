#!/usr/bin/env node
// RETIRED 2026-08-12: this assembler consumes superseded Index-side occurrence briefings.
console.error("RETIRED: build current Program Manuals from frozen government-limit records in the certification repository.")
process.exit(2)
// build-category-manual.mjs --category=6
//
// Parameterized Program Manual assembler. The shared Parts (Front Matter, Part 1
// Why HMTc, Part 2 The Program, Part 4 Lot Testing, Part 5 Methodology) are
// authored for Category 1 (Infant and Child Foods) and reused here. Part 3 = the
// category's per-row Standards Briefings, transformed into chapters. Produces a
// per-category master markdown the existing HTML/Typst renderers can bind.
//
// This is the parameterization the Cat-1-hardcoded build-program-manual.mjs lacked;
// it unblocks a Program Manual for every category, not just infant foods.
//
// DECONTAMINATION (2026-06-18). The shared parts carry Cat-1 examples, scope
// statements, lot-testing product lists, and worked numbers woven through the
// prose (the title page's "Categories covered", the Part 3 table of contents, the
// Part 2 aggregate-exposure argument, the Part 4 risk tiers, "10 ppb lead for
// infant formula powder"). Reusing them verbatim makes every category manual read
// as an infant-foods book with foreign standards bolted into the middle. The fix
// is NOT to edit the shared files (build-program-manual.mjs still needs them
// infant-native for the canonical Cat-1 manual) and NOT a blanket string replace
// (that would corrupt the REAL published-paper titles, e.g. "...Exposure in Infant
// and Child Foods", which are genuine citations). Instead:
//   1. Per-category substitution set in category-substitutions/<category>.json:
//      verified {find, replace} pairs (adversarially checked so no retargeted
//      example cites a number absent from the category's Master Limit Tables).
//   2. The Part 3 table of contents is regenerated from cfg.chapters (single
//      source of truth) so the TOC always matches the chapter headings.
//   3. A build-blocking leak-guard fails the build if any Cat-1 product term
//      survives outside the allowlisted real citations. A future category cannot
//      silently ship the infant wrapper: it must either supply a substitution set
//      or fail loudly.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const BOOK = path.join(repoRoot, "data/workbench/standards-book")
const BRIEFINGS = path.join(repoRoot, "data/workbench/briefings")
const SUBS_DIR = path.join(BOOK, "category-substitutions")
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
  "30": {
    title: "Culinary Oils and Fats",
    subtitle: "Culinary Oils and Fats (Olive and Other Cooking Oils)",
    chapters: [
      { num: "3.1", slug: "olive-oil", title: "Olive Oil" },
      { num: "3.2", slug: "cooking-oils-other", title: "Other Cooking Oils (seed, vegetable, nut)" },
    ],
    note: "Arsenic, cadmium, and mercury do not partition into the extracted lipid fraction and carry no regulatory maximum level for oils; they are recorded as not material. The material analytes for this category are lead (EU-capped), nickel (hydrogenation-catalyst residue), and aluminium.",
  },
  "34": {
    title: "Herbs, Spices, and Salt",
    subtitle: "Herbs, Spices, Seasonings, and Salt",
    chapters: [
      { num: "3.1", slug: "salt", title: "Salt (table, sea, and rock)" },
      { num: "3.2", slug: "spices", title: "Herbs, Spices, and Dried Seasonings" },
    ],
    note: "Aluminium is recorded as not material in both rows (a permitted anti-caking additive in salt; natural soil uptake by accumulator botanicals in spices), carrying no regulatory maximum level as a contaminant. Spice lead publishes at the most-conservative EU botanical tier (fruit-spice, 600 ppb), tighter than the root and bark tiers that turmeric and cinnamon fall under; a high-adulteration-risk sub-split is deferred to a post-publication ratchet because adulteration is a fraud vector caught by lot testing, not by a tighter concentration standard. Spice cadmium is held pending unit normalization of a mixed-unit occurrence pool.",
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
  const opener = `\n*One of ${cfg.chapters.length} per-product chapters in Part 3, self-contained as a licensing exhibit. The methodology is in Part 5.1; the certification status framework in Part 2.3; the Standards Ratchet in Part 2.10. Analytes whose occurrence pool is contaminated, unstable, or analyte-mismatched are shown as "adjudication pending" and carry no published threshold; the published values are validated by the Publication QC Gate (no value exceeds a regulatory ceiling).*\n`
  c = c.replace(new RegExp(`(# ${ch.num} [^\\n]+)\\n`), `$1\n${opener}`)
  return c
}

// --- per-category substitution layer -------------------------------------------------
// Loads category-substitutions/<category>.json and applies each verified {find, replace}
// pair to the assembled master with an exactly-once assertion (so drift in the shared
// files is caught loudly instead of silently skipping a retarget).
function loadSubstitutions(cat) {
  const p = path.join(SUBS_DIR, `${cat}.json`)
  if (!fs.existsSync(p)) return null
  return JSON.parse(fs.readFileSync(p, "utf8"))
}

function applyTocFromChapters(md) {
  // Regenerate the Part 3 table-of-contents listing from cfg.chapters, the single
  // source of truth for chapter numbers/titles. The shared front matter ships the
  // Cat-1 (15-row infant) listing; replace that contiguous block.
  const toc = cfg.chapters.map((c) => `${c.num} ${c.title}`).join("\n")
  const re = /3\.1 Infant Formula, Powder \(Non-Soy\)[\s\S]*?3\.15 Teething and Snacks \(Non-Rice\)/
  if (!re.test(md)) {
    throw new Error("Part 3 TOC anchor not found in front matter — shared table-of-contents.md may have changed; update applyTocFromChapters().")
  }
  return md.replace(re, toc)
}

function applySubstitutions(md, subsDoc) {
  const problems = []
  for (const s of subsDoc.substitutions) {
    const idx = md.indexOf(s.find)
    if (idx === -1) {
      problems.push(`NOT FOUND (anchor drift): [${s._file || "?"} ${s._t || ""}] ${JSON.stringify(s.find.slice(0, 90))}`)
      continue
    }
    if (md.indexOf(s.find, idx + 1) !== -1) {
      problems.push(`NOT UNIQUE (ambiguous anchor): [${s._file || "?"}] ${JSON.stringify(s.find.slice(0, 90))}`)
      continue
    }
    md = md.slice(0, idx) + s.replace + md.slice(idx + s.find.length)
  }
  return { md, problems }
}

// --- build-blocking leak-guard -------------------------------------------------------
// After substitution, no Cat-1 product term may survive EXCEPT inside an allowlisted
// real citation (the genuine published-paper titles, FDA/MDL/AB-899 references, and the
// author bio, which must stay verbatim). HARD_DENY terms appear only in leaked infant
// scope/product content and must be zero. ALLOWLIST fragments identify the protected
// lines on which an infant token is legitimate. This allowlist is category-agnostic:
// the protected citations are the same in every category manual.
const HARD_DENY = [
  /infant formula/i,
  /baby cereal/i,
  /teething/i,
  /pur[eé]e/i,
  /ready-to-feed/i,
  /mixed meals/i,
  /root[ -]vegetable/i,
  /non-soy/i,
  /soy-based formula/i,
  /fruit juice/i,
]
const ALLOWLIST = [
  "Reducing Heavy Metal Exposure in Infant and Child Foods",
  "Action Levels for Lead in Processed Food Intended for Babies and Young Children",
  "Inorganic Arsenic in Rice Cereals for Infants",
  "California Assembly Bill 899",
  "Baby Food; Health and Safety Code",
  "In re: Baby Food Products Liability Litigation",
  "baby-food heavy-metal product liability",
  "Children's Food Project",
  "infant and children's snack and cereal",
  "Baby Foods Are Tainted",
  "Beech-Nut Voluntary Recall of Rice Cereal",
  "vulnerable populations (infants, young children, pregnant individuals)",
  // Part 5.6 forum-selection rationale: legitimately names the real California legal
  // landscape (the baby-food MDL 3101, AB 899, Prop 65) that grounds why arbitration is
  // California-seated. The case law is baby-food-driven but applies to any heavy-metals
  // dispute; rewriting it to "seafood" would fabricate a legal landscape. Same KEEP the
  // verifier applied to the identical argument in the Part 5.2 adversarial read.
  "Why California-seated arbitration",
]
// Tokens that are legitimate ONLY inside an allowlisted line.
const SOFT_TOKENS = [/infant/i, /\bbaby\b/i, /\bbabies\b/i, /young children/i, /rice cereal/i, /children's food/i]

// Cross-category guard. Adapting one category's substitution set to another can leave
// FOREIGN-category content (e.g. the seafood set keeps "methylmercury speciation for
// fish-containing products", which is wrong for a butter/oils/salt manual and which the
// infant denylist would not catch). These fish/marine terms are hard-denied for every
// category EXCEPT seafood (category 6), where they are the native subject matter. The
// few EU-regulation cross-references that legitimately name fish caps are allowlisted.
// Fish/marine NOUNS are the reliable foreign-category signal. "methylmercury"/"MeHg" are
// NOT denied: they are a legitimate HMTc-10 analyte that appears in every category's
// reference list and tier tables; the fish nouns catch the actual fish-context leaks.
const SEAFOOD_DENY = [/\bfish\b/i, /shellfish/i, /seaweed/i, /\bkelp\b/i, /arsenosugar/i, /arsenobetaine/i, /predatory/i, /\bmarine\b/i, /\bmussel/i, /crustacean/i, /bivalve/i]
const SEAFOOD_ALLOWLIST = [
  // Real reference-list titles that name fish because they are documents about
  // methylmercury (a panel analyte). They appear verbatim in every category manual.
  "Fish Advice: Technical Information",
]

function leakGuard(md, cat) {
  const failures = []
  const denyForeign = cat !== "6" // non-seafood manuals must not contain fish/marine content
  const lines = md.split("\n")
  lines.forEach((line, i) => {
    for (const re of HARD_DENY) {
      if (re.test(line)) failures.push(`L${i + 1} HARD '${re.source}': ${line.trim().slice(0, 120)}`)
    }
    const hasSoft = SOFT_TOKENS.some((re) => re.test(line))
    if (hasSoft) {
      const allowed = ALLOWLIST.some((frag) => line.includes(frag))
      if (!allowed) failures.push(`L${i + 1} UNALLOWLISTED infant token: ${line.trim().slice(0, 120)}`)
    }
    if (denyForeign) {
      for (const re of SEAFOOD_DENY) {
        if (re.test(line) && !SEAFOOD_ALLOWLIST.some((frag) => line.includes(frag)))
          failures.push(`L${i + 1} FOREIGN-category (seafood/fish) term '${re.source}': ${line.trim().slice(0, 120)}`)
      }
    }
  })
  return failures
}

// --- assemble ------------------------------------------------------------------------
let front = readDirMd("front-matter")

const part3 = [
  `# Part 3 — The Standards`,
  `\nThe HMTc ${cfg.title} standards, one chapter per product row. Each Master Limit Table is the set of published thresholds for that row, in its native basis. ${cfg.note}\n`,
  ...cfg.chapters.map(transformBriefingToChapter),
].join("\n\n---\n\n")

let master = [
  front,
  readDirMd("parts/01-why-hmtc-exists"),
  readDirMd("parts/02-the-hmtc-program"),
  readDirMd("parts/03-using-heavymetalindex-com"),
  `<!--PART3-START-->\n${part3}\n<!--PART3-END-->`,
  readDirMd("parts/05-the-lot-testing-schedule"),
  fs.existsSync(path.join(BOOK, "source-documents/lot-testing-schedule.md"))
    ? fs.readFileSync(path.join(BOOK, "source-documents/lot-testing-schedule.md"), "utf8").replace(/^#[^\n]*\n/, "")
    : "",
  readDirMd("parts/06-methodology-and-appendices"),
].join("\n\n---\n\n")

// 1. Regenerate Part 3 TOC from cfg.chapters.
master = applyTocFromChapters(master)

// 2. Apply the per-category substitution set.
const subsDoc = loadSubstitutions(category)
if (subsDoc) {
  const { md, problems } = applySubstitutions(master, subsDoc)
  master = md
  if (problems.length) {
    console.error(`\n[build-category-manual] ${problems.length} substitution problem(s) for category ${category}:`)
    for (const p of problems) console.error("  - " + p)
    console.error("Fix category-substitutions/" + category + ".json (anchors must match the current shared parts exactly once).")
    process.exit(2)
  }
  console.log(`[build-category-manual] applied ${subsDoc.substitutions.length} verified substitutions.`)
} else {
  console.warn(`[build-category-manual] WARNING: no substitution set for category ${category}; the shared parts will leak Cat-1 content. Author category-substitutions/${category}.json.`)
}

// 2b. Per-volume DOI. The shared edition page carries the Cat-1 manual's OWN Zenodo DOI
//     (10.5281/zenodo.20270512). A category manual is a DISTINCT publication and must not
//     claim the infant manual's DOI; it gets its own on Zenodo deposit. Replace the self-DOI
//     with a pending-deposit placeholder. The three preprint reference DOIs (18903738,
//     18905821, 19470572) are real cited works and are left untouched.
master = master
  .replace(/\[10\.5281\/zenodo\.20270512\]\(https:\/\/doi\.org\/10\.5281\/zenodo\.20270512\)/g, "DOI pending (assigned on Zenodo deposit of this volume)")
  .replace(/doi:\s*10\.5281\/zenodo\.20270512/gi, "DOI: pending Zenodo deposit")
  .replace(/10\.5281\/zenodo\.20270512/g, "[DOI pending Zenodo deposit]")

// 3. Build-blocking leak-guard, scoped to the WRAPPER (front matter + Parts 1/2/4/5),
//    which is the domain of the verified substitution set. Part 3 is assembled from the
//    category's own Standards Briefings; any Cat-1 residue there is a briefing-generator
//    defect (build-standards-briefing.mjs hardcodes infant basis prose, the 1:7
//    reconstitution response, and a ÷7 "[prepared]" cross-basis column for every row,
//    none of which apply to an as_sold-native category like seafood). That is a separate,
//    methodology-sensitive pass that must run through the briefing pipeline + QC gate, so
//    it is REPORTED here, not silently shipped as fixed, and not hand-patched into a manual.
const p3start = master.indexOf("<!--PART3-START-->")
const p3end = master.indexOf("<!--PART3-END-->")
const part3Text = p3start !== -1 ? master.slice(p3start, p3end) : ""
const wrapperText = p3start !== -1 ? master.slice(0, p3start) + master.slice(p3end) : master

const leaks = leakGuard(wrapperText, category)
if (leaks.length) {
  console.error(`\n[build-category-manual] WRAPPER LEAK-GUARD FAILED — ${leaks.length} foreign-category term(s) survived outside the allowlisted citations:`)
  for (const l of leaks) console.error("  - " + l)
  console.error("\nEach line above either needs a substitution in category-substitutions/" + category + ".json,")
  console.error("or, if it is a genuine published-paper title / real citation that must stay verbatim, add a fragment of it to ALLOWLIST in this script.")
  process.exit(3)
}
console.log("[build-category-manual] wrapper leak-guard: clean (no Cat-1 leakage outside allowlisted citations).")

const p3residue = leakGuard(part3Text, category)
if (p3residue.length) {
  console.warn(`\n[build-category-manual] NOTE — ${p3residue.length} Cat-1-template residue line(s) in Part 3 (the seafood Standards Briefings), NOT blocking:`)
  const seen = new Set()
  for (const l of p3residue) {
    const key = l.replace(/^L\d+ /, "")
    if (seen.has(key)) continue
    seen.add(key)
    console.warn("  - " + key)
  }
  console.warn("  These come from build-standards-briefing.mjs (hardcoded infant basis prose / 1:7 reconstitution / ÷7 [prepared] column).")
  console.warn("  Fix at the generator + regenerate briefings through the QC gate; not a manual-wrapper edit.")
}

// strip the Part 3 sentinels from the written master
master = master.replace("<!--PART3-START-->\n", "").replace("\n<!--PART3-END-->", "")

const outDir = path.join(BOOK, "build")
fs.mkdirSync(outDir, { recursive: true })
const out = path.join(outDir, `HMTc-${cfg.title.replace(/[,\s]+/g, "-").replace(/-+/g, "-")}-Program-Manual-2026.md`)
fs.writeFileSync(out, master)
const words = master.split(/\s+/).length
console.log(`Wrote ${path.relative(repoRoot, out)} — ${cfg.chapters.length} standards chapters, ~${Math.round(words / 250)} pages (${words} words)`)
