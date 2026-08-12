#!/usr/bin/env node
// One-time firewall remediation: rewrite the certification-methodology prose
// that leaked onto public reference pages (CLAUDE.md Part 2 / Part 19). ~150
// product/ingredient/regulation/certification pages carried scaffold-era prose
// that named the staff Standards Workbench, described the percentile /
// threshold-selection arithmetic, or spelled out how HMTc derives thresholds.
// None of that belongs on the index domain: the wiki reports what the
// literature says; the certification program sets thresholds elsewhere.
//
// This rewrites each known leak template to the current literature-native boundary:
// initial HMTc limits are government-limit-only, Index occurrence evidence never
// selects a value or status, and later tightening uses eligible certified-lot data.
// It is DETERMINISTIC and
// IDEMPOTENT — running it twice is a no-op — so it can also serve as a lint/
// backstop if a leak recurs. Bodies only; frontmatter is never touched.
//
// The generators that emitted this prose have been fixed at source; this pass
// cleans the already-generated pages, which are not regenerated on build.
//
//   node tools/rewrite-workbench-prose.mjs [--apply]

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname, relative } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const APPLY = process.argv.includes("--apply")

// Public reference surfaces the leak reached. Source pages quote arbitrary
// literature and are handled separately; health/methodology bespoke pages are
// hand-edited, not templated, so they are excluded here.
const SCAN_DIRS = [
  "wiki/products",
  "wiki/ingredients",
  "wiki/regulations",
  "wiki/certification",
  "wiki/metals",
  "wiki/methodology",
  "wiki/synthesis",
  "wiki/testing",
  "wiki/mitigation",
]

// Canonical literature-native replacements (kept identical to the fixed
// generators so pages and generators converge on one wording).
const HOW_BODY =
  "This page reports descriptive literature evidence and publishes no certification limits or status decisions. Initial HMTc limits are compiled separately at heavymetalcertified.com from the strictest applicable credible sovereign-government maximum in the product's native basis; Index occurrence evidence does not select the value. Later tightening may use only eligible HMTc certified-lot data under the Standards Ratchet."
const CERT_BOUNDARY =
  "Initial HMT&C limits are compiled separately at heavymetalcertified.com under the government-limit-only method; this public page reports descriptive literature evidence and does not select a certification value or status. Later tightening may use only eligible HMTc certified-lot data under the Standards Ratchet."
const BOUNDARY_PAIR =
  " The occurrence comparison between these rows is descriptive only and assigns no certification role. Initial HMTc limits come from the separate sovereign-government compiler, not from either row's occurrence distribution."

// Inline clause rewrites. Each removal rule consumes its own leading space so no
// double-space is left behind.
const RULES = [
  {
    name: "evidence-summary-intro",
    re: /Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page\./g,
    to: "Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.",
  },
  {
    name: "methodology-dose-pathway-supplement",
    // Matches with or without the "(per OPERATING.md …)" aside, so it works
    // whether or not the strip pass has already run.
    re: /Cat 2 dose-pathway methodology supplement (?:\(per OPERATING\.md Part 7 initiative 3\.1\) )?is documented at \[\[health\/cat-2-non-ingestion-exposure-pathways\]\]\. That supplement governs how dermal, inhalation, accidental-ingestion, and trans-placental exposure factors apply to this row\./g,
    to: "The non-ingestion exposure pathways relevant to this row (dermal, inhalation, accidental-ingestion, and trans-placental) are documented at [[health/cat-2-non-ingestion-exposure-pathways]].",
  },
  {
    name: "methodology-percentile-clause",
    re: /The percentile(?:-selection)? arithmetic that informs HMTc(?: Cat \d+)? thresholds for this row lives on the staff Standards Workbench; this public page reports literature evidence only\./g,
    to: CERT_BOUNDARY,
  },
  {
    name: "who-internal-staff-routing-hub",
    re: / ?HMTc internal staff use this page as the routing hub between this row's source evidence and the staff Standards Workbench's threshold-selection arithmetic \(which lives in `data\/workbench\/standards\/`, never on this public page\)\./g,
    to: "",
  },
  {
    name: "hmtc-cat-N-certification",
    re: /\bHMTc Cat \d+ certification\b/g,
    to: "HMT&C certification",
  },
  {
    name: "evaluating-cat-N-certification",
    re: /\bevaluating Cat \d+ certification\b/g,
    to: "evaluating HMT&C certification",
  },
  {
    name: "cc-anchor-pair-cat2",
    re: / Cross-row platform coordination per the Cat \d+ Step 0 lock: thresholds for this row are set such that the Standards Workbench's CC anchor for each platform is the same across all rows that share it, but per-row final limits diverge based on exposure-factor differences \([^)]*\)\./g,
    to: BOUNDARY_PAIR,
  },
  {
    name: "cc-anchor-pair-cat4",
    re: / Cross-row platform coordination per the Cat \d+ Step 0 lock: the Standards Workbench's CC anchor for each platform is shared across all rows that share the platform, with per-row final limits diverging based on commercial-product variation\./g,
    to: BOUNDARY_PAIR,
  },
  {
    name: "cc-anchor-whole-row",
    re: / The CC anchor for this row's platform metals is drawn from outside Cat \d+ \([^)]*\) or set by regulatory floor and lab achievability alone in the Standards Workbench Step 1 derivation\./g,
    to: "",
  },
  {
    name: "cc-anchor-overview-summary",
    re: / Cross-row CC anchor: Step 1 defaults to the tighter of [^.]*\./g,
    to: "",
  },
  {
    name: "value-level-tracking",
    re: /; value-level tracking is maintained in the staff Standards Workbench\./g,
    to: ".",
  },
  {
    name: "fda-survey-sample-level-dataset",
    re: / The full sample-level dataset is maintained in the staff Standards Workbench\./g,
    to: "",
  },
  {
    name: "stub-percentile-selection",
    re: /Percentile-selection arithmetic does not appear on this public page \([^)]*firewall\); it lives on the staff Standards Workbench\./g,
    to: CERT_BOUNDARY,
  },
  {
    name: "kombucha-defensible-row-standard",
    re: /before the staff Standards Workbench can compute a defensible row-standard\./g,
    to: "before the descriptive occurrence record is sufficiently complete.",
  },
  {
    name: "kombucha-percentile-selection-tracked",
    re: /Percentile selection and final HMT&C threshold decisions are tracked in the staff Standards Workbench when sufficient evidence is available\./g,
    to: "Certification threshold decisions are made separately under the certification program when sufficient evidence is available and are not published on this public page.",
  },
  {
    name: "scaffold-per-analyte-threshold-numbers",
    re: /; per-analyte threshold numbers come from the staff Standards Workbench(?:, not this page)?\./g,
    to: ".",
  },
  {
    name: "scaffold-percentile-stays-semicolon",
    re: /; percentile arithmetic stays on the staff Standards Workbench\./g,
    to: ".",
  },
  {
    name: "scaffold-percentile-stays-sentence",
    re: / Percentile arithmetic stays on the staff Standards Workbench\./g,
    to: "",
  },
  {
    name: "lead-benchmark-provenance",
    re: /The structured ppb-normalized lead benchmark values that power this page are maintained in the staff Standards Workbench and applied to per-product pages by the lead-benchmark-context generator \(`[^`]*`\)\./g,
    to: "The ppb-normalized lead benchmark values on this page are compiled from the cited literature and applied to per-product pages for like-for-like comparison.",
  },
  {
    name: "crosswalk-provenance",
    re: /The regulatory-cap entries shown on per-product pages are pulled from the staff Standards Workbench and applied by `[^`]*`\. The structured occurrence data feeding the field-findings columns lives in the same workbench layer\. See the per-product page for the rendered comparison; see the workbench for the underlying tables\./g,
    to: "The regulatory-cap entries and the field-finding occurrence data shown on per-product pages are compiled from the cited regulations and source literature. See each per-product page for the rendered comparison.",
  },
  {
    // LLM-drafted synthesis prose (no generator): "The row-standard percentile
    // in the HMT&C staff workbench is derived from …". Tolerates the — vs ;
    // separator and the long/short program-name variant.
    name: "row-standard-percentile-workbench",
    re: /This page documents what the cited sources report\. The row-standard percentile in the (?:Heavy Metal Tested and Certified \(HMT&C\)|HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review\s*[—;]\s*it is not a decoration on any individual source row,? and (?:it )?is not published on this public page\./g,
    to: "This page documents what the cited sources report. The row-standard is an aggregate across all contributing sources after basis adjustment and row-fit review — not a decoration on any individual source row — and is set separately under the certification program, not published on this public page.",
  },
  {
    name: "who-hmtc-staff-standards-workbench",
    re: /This page is for brand legal, retailer-compliance, regulator, and HMTc staff readers who need the current literature record for ([^.]+)\. It is a public evidence surface, not a certification-threshold table\. Brand and retailer readers should use it to see which cited sources actually support this product row, while HMTc staff should use it to keep row fit, market, basis, and analyte species visible before any standards-workbench use\./g,
    to: "This page is for brand legal, retailer-compliance, and regulator readers who need the current literature record for $1. It is a public evidence surface, not a certification-threshold table. Readers should use it to see which cited sources actually support this product row and to keep row fit, market, basis, and analyte species visible.",
  },
  {
    name: "methodology-part6-percentile-workbench",
    re: / Public wiki prose summarizes the literature; percentile math and HMTc candidate limits remain in the staff workbench\./g,
    to: " This page reports the literature; certification thresholds are set separately under the certification program, not on this page.",
  },
  {
    name: "eu-final-min-formula-workbench",
    re: /They are used by the HMTc workbench as the regulatory-cap floor in `final = min\(literature-baseline-percentile, regulatory-cap\)` calculations for any product category whose contributing source evidence pre-dates May 2023 and cites EC 1881\/2006\./g,
    to: "They are the operative regulatory-cap floor for any product category whose contributing source evidence pre-dates May 2023 and cites EC 1881/2006; certification thresholds are set separately under the certification program.",
  },
  {
    name: "taxonomy-row-numbers-workbench",
    re: /The row numbers are permanent identifiers used by the standards workbench, the certification documents, and the source-routing layer\./g,
    to: "The row numbers are permanent identifiers used across the certification program and the source-routing layer.",
  },
  {
    name: "pooled-distributions-workbench",
    re: /; their per-species values feed the pooled distributions used by the standards workbench\./g,
    to: "; their per-species values broaden the literature evidence base.",
  },
  {
    name: "regulation-rationale-staff-workbench",
    re: /HMTc certification setting tighter thresholds than these caps follows the methodology, with the rationale tagged as `literature-baseline`, `regulatory-alignment`, `precautionary`, or `feasibility-driven` per the staff-side workbench\./g,
    to: "Initial HMTc limits come from the strictest applicable credible sovereign-government maximum; later tightening may occur only through the eligible certified-lot Standards Ratchet.",
  },
  {
    name: "stakeholder-guide-internal-staff-block",
    // The "<dt>HMT&amp;C staff (internal)</dt><dd>…Standards Workbench…</dd>"
    // pair inside the hmi-stakeholder-guide block — an internal-audience note on
    // a public page. Remove the whole <div> wrapper.
    re: /\n[ \t]*<div>\n[ \t]*<dt>HMT&amp;C staff \(internal\)<\/dt>\n[ \t]*<dd>The threshold-selection arithmetic[\s\S]*?<\/dd>\n[ \t]*<\/div>/g,
    to: "",
  },
  {
    name: "lab-comparator-disclaimer",
    re: /The comparator does not display HMT&C certification thresholds or threshold-selection percentile arithmetic\. Those values live in the staff Standards Workbench because they are policy choices on top of the literature, not literature evidence in themselves\./g,
    to: "The comparator does not display HMT&C certification thresholds or the calculations behind them, because those are policy choices layered on top of the literature, not literature evidence in themselves.",
  },
  {
    name: "retired-literature-baseline-boundary",
    re: /This page reports what the peer-reviewed and government literature says about heavy-metal concentrations in (?:this product category|this row); it publishes no certification thresholds of its own\. Certification criteria are set separately under the Heavy Metal Tested & Certified program at heavymetalcertified\.com, which reads this page as its literature baseline\. The two are kept apart by design, so this page remains an independent record of the evidence rather than a justification for any threshold\./g,
    to: HOW_BODY,
  },
  {
    name: "retired-threshold-development-boundary",
    re: /HMT&C certification thresholds(?: for products in this row)? (?:continue to be )?(?:are )?developed under the certification program at heavymetalcertified\.com, not on this (?:public )?page(?:; this public page reports literature evidence only)?\./g,
    to: CERT_BOUNDARY,
  },
  {
    name: "retired-threshold-development-boundary-linked",
    re: /HMTc certification thresholds for products in this row continue to be developed under the certification program at \[heavymetalcertified\.com\]\(https:\/\/heavymetalcertified\.com\), not on this public page\./g,
    to: CERT_BOUNDARY,
  },
  {
    name: "retired-shared-evidence-base-staff-note",
    re: /HMT&amp;C certification thresholds for products in this row are developed under the certification program at <a href="https:\/\/heavymetalcertified\.com">heavymetalcertified\.com<\/a>, not on this public page\. The Index and HMT&amp;C operate on the same evidence base but apply different publication rules; see the <a href="\/methodology">methodology<\/a> for the separation\./g,
      to: "Initial HMT&amp;C limits are compiled separately at <a href=\"https://heavymetalcertified.com\">heavymetalcertified.com</a> under the government-limit-only method. Index occurrence evidence is descriptive only and cannot select a certification value or status; later tightening may use only eligible HMTc certified-lot data under the Standards Ratchet.",
  },
  {
    name: "retired-threshold-development-boundary-broad",
    re: /(?:HMT&C|HMTc) certification thresholds(?: for [^.]+?)? (?:continue to be |are )?developed under the certification program at heavymetalcertified\.com, not on this (?:public )?page(?:; this public page reports literature evidence only)?\./g,
    to: CERT_BOUNDARY,
  },
  {
    name: "retired-threshold-development-under-program",
    re: /Certification thresholds are developed under the program at heavymetalcertified\.com, not on this page\. See the \[methodology\]\(\/methodology\) for the wiki\/HMT&C separation\./g,
    to: "Initial HMT&C limits are compiled separately at heavymetalcertified.com under the government-limit-only method; Index occurrence evidence does not select a certification value or status. Later tightening may use only eligible HMTc certified-lot data under the Standards Ratchet. See the [methodology](/methodology) for the Index/HMT&C separation.",
  },
  {
    name: "retired-linked-threshold-development-boundary",
    re: /HMTc certification thresholds for products in this row are developed under the certification program at \[heavymetalcertified\.com\]\(https:\/\/heavymetalcertified\.com\), not on this public page; this page reports literature evidence and the applicable regulatory caps only\./g,
    to: CERT_BOUNDARY,
  },
  {
    name: "retired-row-threshold-development-boundary-linked",
    re: /HMTc thresholds for this row are developed under the certification program at \[heavymetalcertified\.com\]\(https:\/\/heavymetalcertified\.com\)\./g,
    to: "Initial HMTc limits for this row are compiled separately at [heavymetalcertified.com](https://heavymetalcertified.com) under the government-limit-only method; Index occurrence evidence does not select the value.",
  },
  {
    name: "retired-seafood-literature-baseline-boundary",
    re: /This page reports the literature baseline; certification thresholds are set separately under the certification program at heavymetalcertified\.com, not on this page\./g,
    to: HOW_BODY,
  },
  {
    name: "retired-cat2-literature-baseline-boundary",
    re: /HMT&C certification thresholds for Cat 2 children's personal-care products are developed under the certification program at heavymetalcertified\.com, not on this page\. This public page reports the literature baseline; the gap between literature baseline and HMT&C threshold is named on the certification program side, not hidden\./g,
    to: HOW_BODY,
  },
  {
    name: "retired-literature-baseline-tail",
    re: / This public page reports the literature baseline; the gap between literature baseline and HMT&C threshold is named on the certification program side, not hidden\./g,
    to: "",
  },
  {
    name: "retired-generic-threshold-set-separately",
    re: /This page reports the literature; certification thresholds are set separately under the certification program, not on this page\./g,
    to: CERT_BOUNDARY,
  },
]

const HOW_HEADING = "## How standards math uses this page"
// Only rewrite a "How standards math" section whose body actually leaks the
// workbench/derivation machinery. Pages whose section is already the clean
// literature-native boundary statement (e.g. the scaffold-category-rows wording)
// are left untouched — homogenizing clean prose is not this pass's job.
const HOW_LEAK = /Standards Workbench|percentile arithmetic|percentile[- ]selection|OPERATING\.md|<this-slug>/i

// Replace the body of a LEAKING "How standards math uses this page" section with
// HOW_BODY. Line-based so the section boundary (next H2 or generated <!-- -->
// block, or EOF) is unambiguous and the surrounding blank-line structure stays
// valid.
function replaceHowSection(body) {
  const lines = body.split("\n")
  const start = lines.findIndex((l) => l.trim() === HOW_HEADING)
  if (start === -1) return { body, hit: false }
  let end = lines.length
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i]) || /^<!-- /.test(lines[i])) {
      end = i
      break
    }
  }
  const sectionBody = lines.slice(start + 1, end).join("\n")
  if (!HOW_LEAK.test(sectionBody)) return { body, hit: false }
  const before = lines.slice(0, start + 1) // through the heading
  const after = lines.slice(end) // from the next section marker on
  const rebuilt = [...before, "", HOW_BODY, "", ...after].join("\n")
  return { body: rebuilt.replace(/\n{3,}/g, "\n\n"), hit: true }
}

function splitFrontmatter(text) {
  const m = text.match(/^---\n[\s\S]*?\n---\n/)
  if (!m) return { fm: "", body: text }
  return { fm: m[0], body: text.slice(m[0].length) }
}

const files = []
for (const d of SCAN_DIRS) {
  const abs = join(ROOT, d)
  const walk = (dir) => {
    let entries
    try {
      entries = readdirSync(dir)
    } catch {
      return
    }
    for (const name of entries) {
      const p = join(dir, name)
      if (statSync(p).isDirectory()) walk(p)
      else if (name.endsWith(".md") && name !== "index.md") files.push(p)
    }
  }
  walk(abs)
}

const ruleHits = Object.fromEntries(RULES.map((r) => [r.name, 0]))
ruleHits["how-standards-math-section"] = 0
let changedFiles = 0
const changedList = []

for (const f of files) {
  const src = readFileSync(f, "utf8")
  const { fm, body } = splitFrontmatter(src)
  let nextBody = body

  const sec = replaceHowSection(nextBody)
  if (sec.hit && sec.body !== nextBody) {
    ruleHits["how-standards-math-section"]++
    nextBody = sec.body
  }

  for (const rule of RULES) {
    rule.re.lastIndex = 0
    const matches = nextBody.match(rule.re)
    if (matches) {
      ruleHits[rule.name] += matches.length
      nextBody = nextBody.replace(rule.re, rule.to)
    }
  }

  const next = fm + nextBody
  if (next !== src) {
    changedFiles++
    changedList.push(relative(ROOT, f))
    if (APPLY) writeFileSync(f, next)
  }
}

console.log(`rewrite-workbench-prose (${APPLY ? "APPLY" : "dry-run"}): ${changedFiles} pages changed`)
console.log("Per-rule hit counts:")
for (const [name, n] of Object.entries(ruleHits)) {
  if (n > 0) console.log(`  ${String(n).padStart(4)}  ${name}`)
}
if (!APPLY && changedList.length) {
  console.log(`\nFirst 8 changed files:`)
  for (const c of changedList.slice(0, 8)) console.log(`  ${c}`)
}
