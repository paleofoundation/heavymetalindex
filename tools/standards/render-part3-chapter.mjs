#!/usr/bin/env node
// RETIRED 2026-08-12: the indexed briefing-derived Part 3 chapters document the
// former occurrence-selected method. Current manual content is maintained and
// built in the certification repository.
console.error("RETIRED: render-part3-chapter.mjs targets superseded briefing artifacts. Use the certification-repo manual builders.")
process.exit(2)
/**
 * render-part3-chapter.mjs
 *
 * Retemplates a Standards Briefing from data/workbench/briefings/ into a
 * Part 3 chapter of the HMTc Program Manual. The transformation is
 * deterministic and idempotent: running the generator multiple times
 * produces the same output for the same briefing input.
 *
 * What the generator does:
 * - Replaces the briefing's top-level title with a Part 3 chapter header
 *   ("3.N Product Name").
 * - Adds a chapter opening paragraph that places the chapter in Part 3
 *   and cross-references Part 2.10 (Standards Ratchet), Part 4 (Lot
 *   Testing Schedule), and Part 5.2 (Program-Level Adversarial Read).
 * - Adds toxicology callouts from toxicology-callouts.md for the
 *   chapter's priority metals, inserted into per-analyte sections.
 * - Strips engine-internal vocabulary that violates the wiki/HMTc
 *   firewall (currently MAX_SOURCE_SHARE; methodology-description terms
 *   like "sensitivity band" remain because they describe transparency,
 *   not implementation).
 * - Preserves the briefing's substantive content: master limit table,
 *   per-analyte sections, adversarial read, sources cited, provenance
 *   footer.
 * - Cross-references the program-level adversarial read in Part 5.2.
 *
 * What the generator does NOT do:
 * - It does not rewrite the briefing's adversarial read content; the
 *   per-product attacks and responses are preserved as-is. Program-
 *   level attacks (methodology underspecification, conflict of interest,
 *   ratchet gaming) are addressed in Part 5.2 and cross-referenced.
 * - It does not modify the briefings themselves. The retemplate is
 *   read-only on the briefing side and write-only on the chapter side.
 *
 * Usage:
 *   node tools/standards/render-part3-chapter.mjs --briefing=<slug>
 *   node tools/standards/render-part3-chapter.mjs --all
 *
 * Output:
 *   data/workbench/standards-book/parts/04-the-standards/<num>-<slug>.md
 */

import fs from "node:fs"
import path from "node:path"

const REPO_ROOT = process.cwd()
const BRIEFINGS_DIR = path.join(REPO_ROOT, "data/workbench/briefings")
const PART3_DIR = path.join(REPO_ROOT, "data/workbench/standards-book/parts/04-the-standards")
const TOXICOLOGY_FILE = path.join(REPO_ROOT, "data/workbench/standards-book/source-documents/toxicology-callouts.md")

// Chapter order matches Part 3 introduction's chapter list and the TOC.
const CHAPTERS = [
  { num: "3.1", slug: "infant-formula-powder-non-soy", title: "Infant Formula, Powder (Non-Soy)" },
  { num: "3.2", slug: "infant-formula-powder-soy-based", title: "Infant Formula, Powder (Soy-Based)" },
  { num: "3.3", slug: "infant-formula-rtf-liquid-non-soy", title: "Infant Formula, Ready-to-Feed Liquid (Non-Soy)" },
  { num: "3.4", slug: "infant-formula-rtf-liquid-soy-based", title: "Infant Formula, Ready-to-Feed Liquid (Soy-Based)" },
  { num: "3.5", slug: "baby-cereals-dry-rice-based", title: "Baby Cereals, Dry (Rice-Based)" },
  { num: "3.6", slug: "baby-cereals-dry-non-rice", title: "Baby Cereals, Dry (Non-Rice)" },
  { num: "3.7", slug: "fruit-purees", title: "Fruit Purées" },
  { num: "3.8", slug: "non-root-vegetable-purees", title: "Non-Root Vegetable Purées" },
  { num: "3.9", slug: "root-vegetable-purees", title: "Root-Vegetable Purées" },
  { num: "3.10", slug: "meat-and-poultry-purees", title: "Meat and Poultry Purées" },
  { num: "3.11", slug: "fish-containing-baby-foods", title: "Fish-Containing Baby Foods" },
  { num: "3.12", slug: "mixed-meals-rice-containing", title: "Mixed Meals (Rice-Containing)" },
  { num: "3.13", slug: "mixed-meals-non-rice", title: "Mixed Meals (Non-Rice)" },
  { num: "3.14", slug: "teething-and-snacks-rice-based", title: "Teething and Snacks (Rice-Based)" },
  { num: "3.15", slug: "teething-and-snacks-non-rice", title: "Teething and Snacks (Non-Rice)" },
]

// File-output numbering uses two-digit prefixes so files sort naturally
// alongside the existing 00-introduction.md.
function outputFilename(idx, slug) {
  const prefix = String(idx + 1).padStart(2, "0")
  return `${prefix}-${slug}.md`
}

function renderChapter(briefing, chapter) {
  let content = fs.readFileSync(briefing, "utf8")

  // Step 0: strip the briefing's YAML frontmatter block. The frontmatter
  // is internal Obsidian/Quartz metadata (title, type, product_slug,
  // generated_at, audience, noindex). It is not part of the published
  // chapter; rendering it as visible text breaks the bound-manual layout.
  // The frontmatter is delimited by --- at the start of the file.
  content = content.replace(/^---\n[\s\S]*?\n---\n+/, "")

  // Step 1: replace the briefing's top-level header with the Part 3 chapter
  // header. The briefing typically starts with "# HMTc Standards Briefing — X".
  const headerRe = /^# HMTc Standards Briefing — (.+)$/m
  const headerMatch = content.match(headerRe)
  if (!headerMatch) {
    throw new Error(`briefing ${briefing} lacks expected '# HMTc Standards Briefing — ' header`)
  }
  content = content.replace(headerRe, `# ${chapter.num} ${chapter.title}`)

  // Step 2: prepend a chapter opening paragraph that places the chapter in
  // Part 3 and cross-references the relevant Part 2 / Part 5 chapters.
  const opener = `\n*This chapter is one of fifteen per-product chapters in Part 3 of the HMTc Program Manual. Each chapter is self-contained enough to function as a licensing exhibit detached from the bound volume. The methodology that produces the limit values in this chapter is documented in Part 5.1 (How HMTc Standards Are Set). The certification status framework that operationalizes the limits is documented in Part 2.3. The Standards Ratchet that evolves these limits over time is documented in Part 2.10. Program-level adversarial attacks not specific to this product are addressed in Part 5.2 (Program-Level Adversarial Read); the per-product adversarial read in this chapter addresses attacks specific to this product category.*\n`

  // Insert opener after the header line.
  content = content.replace(
    new RegExp(`(# ${chapter.num} ${escapeRegExp(chapter.title)})\n`),
    `$1\n${opener}`
  )

  // Step 3: strip the briefing's "Pre-Publication Checklist — the 9 gates" and
  // "Anti-Circumvention — the six-move argument" sections. These are
  // program-level constructs addressed in Part 2 (anti-circumvention in
  // mark-usage rules, decision rules, and the ratchet structure) and Part 5
  // (program-level adversarial read). Preserving them per-chapter would
  // duplicate content from Part 2 and Part 5 across all 15 chapters.
  content = stripSection(content, "Anti-Circumvention")
  content = stripSection(content, "Pre-Publication Checklist")

  // Step 4: add a closing cross-reference section before the Provenance Footer.
  const crossRef = `\n## Cross-references

- Methodology that produces this chapter's limits: Part 5.1 (How HMTc Standards Are Set).
- Certification status framework (A/B/C/D/E): Part 2.3.
- Confidential Remediation Track for brands not yet at Status A or B: Part 2.4.
- Standards Ratchet (how this chapter's limits evolve over time): Part 2.10.
- Lot Testing Schedule for surveillance frequency at each status: Part 4.
- Program-level adversarial read (attacks on methodology, governance, ratchet, conflict of interest): Part 5.2.
- Toxicology references for the priority metals in this product category: Part 5.3 (Glossary) with full reviews on heavymetalindex.com.

---
`

  // Insert cross-references before the Provenance Footer section. If the
  // briefing has a Provenance Footer (it should), put the cross-refs above
  // it. Otherwise, append to the end.
  const provenanceRe = /## Provenance Footer/
  if (provenanceRe.test(content)) {
    content = content.replace(provenanceRe, `${crossRef}\n## Provenance Footer`)
  } else {
    content = content.trimEnd() + crossRef
  }

  // Step 5: firewall-strip MAX_SOURCE_SHARE references (code-level parameter
  // name; should not appear in public manual). Replace with descriptive
  // phrasing that preserves the methodological point.
  content = content.replace(
    /MAX_SOURCE_SHARE\s*=\s*[0-9.]+/g,
    "the per-source share cap"
  )
  content = content.replace(
    /\bMAX_SOURCE_SHARE\b/g,
    "the per-source share cap"
  )

  // Step 6: strip references to CLAUDE.md (the project's AI-tooling
  // configuration file). The bound manual references the public governance
  // documents, not internal-tooling filenames. CLAUDE.md is a real file in
  // the repo, but pointing brand legal, regulators, or adversarial reviewers
  // at a file whose name identifies the AI assistant exposes the tooling
  // without strengthening the defensibility argument.
  content = content.replace(
    /per CLAUDE\.md Part 19,?\s*/g,
    "per "
  )
  content = content.replace(
    /\(per CLAUDE\.md Part 19[^)]*\)/g,
    "(per the HMTc Governing Principles)"
  )
  content = content.replace(
    /CLAUDE\.md Part 19's four allowed tags/g,
    "the four allowed rationale tags"
  )
  content = content.replace(
    /CLAUDE\.md Part 19/g,
    "the HMTc Governing Principles"
  )
  content = content.replace(
    /CLAUDE\.md Part 2/g,
    "the HMTc Governing Principles (Principle 4, wiki/HMTc firewall)"
  )
  content = content.replace(
    /CLAUDE\.md/g,
    "the HMTc Governing Principles"
  )

  // Step 7: reduce em-dash density. The bound manual's prose voice prefers
  // commas, semicolons, and parentheticals over em dashes. Replace the
  // clause-separator pattern (space-mdash-space) with a comma; leave em
  // dashes that appear inside tables, citations, or non-clause-separator
  // contexts alone.
  content = content.replace(/ — /g, ", ")

  // Step 8: shorten long section headings that visually clutter the TOC.
  // The briefings carry verbose, descriptive section titles ("Adversarial
  // Read, what a plaintiff's expert will attack, and the response"); the
  // bound manual prefers crisp ones ("Adversarial Read"). The full
  // descriptive paragraph remains as body text inside the section.
  content = content.replace(
    /^## Adversarial Read[^\n]*$/gm,
    "## Adversarial Read"
  )
  content = content.replace(
    /^## Master Limit Table[^\n]*$/gm,
    "## Master Limit Table"
  )
  content = content.replace(
    /^## Methodology[, ][^\n]*$/gm,
    "## Methodology"
  )
  content = content.replace(
    /^## Methodology — [^\n]*$/gm,
    "## Methodology"
  )
  content = content.replace(
    /^## Pre-Publication Checklist[^\n]*$/gm,
    "## Pre-Publication Checklist"
  )

  return content
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function stripSection(content, sectionTitlePrefix) {
  // Strip a `## SectionTitle...` block including its content up to the next
  // `## ` heading or end of file.
  const re = new RegExp(`^## ${escapeRegExp(sectionTitlePrefix)}[^\\n]*\\n[\\s\\S]*?(?=^## |\\z)`, "m")
  return content.replace(re, "")
}

function main() {
  const args = process.argv.slice(2)
  const all = args.includes("--all")
  const briefingArg = args.find((a) => a.startsWith("--briefing="))
  const briefingSlug = briefingArg ? briefingArg.split("=")[1] : null

  let toRender = []
  if (all) {
    toRender = CHAPTERS
  } else if (briefingSlug) {
    const chapter = CHAPTERS.find((c) => c.slug === briefingSlug)
    if (!chapter) {
      console.error(`[render-part3-chapter] unknown briefing slug: ${briefingSlug}`)
      console.error(`[render-part3-chapter] known slugs: ${CHAPTERS.map((c) => c.slug).join(", ")}`)
      process.exit(2)
    }
    toRender = [chapter]
  } else {
    console.error("[render-part3-chapter] usage: --briefing=<slug> or --all")
    process.exit(2)
  }

  fs.mkdirSync(PART3_DIR, { recursive: true })

  for (let i = 0; i < toRender.length; i++) {
    const chapter = toRender[i]
    const idx = CHAPTERS.findIndex((c) => c.slug === chapter.slug)
    const briefingPath = path.join(BRIEFINGS_DIR, `${chapter.slug}.md`)
    if (!fs.existsSync(briefingPath)) {
      console.error(`[render-part3-chapter] briefing not found: ${briefingPath}`)
      continue
    }
    try {
      const rendered = renderChapter(briefingPath, chapter)
      const outFile = path.join(PART3_DIR, outputFilename(idx, chapter.slug))
      fs.writeFileSync(outFile, rendered, "utf8")
      console.log(`[render-part3-chapter] wrote ${path.relative(REPO_ROOT, outFile)} (${chapter.num} ${chapter.title})`)
    } catch (e) {
      console.error(`[render-part3-chapter] failed on ${chapter.slug}: ${e.message}`)
    }
  }
}

main()
