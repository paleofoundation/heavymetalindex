#!/usr/bin/env node
/**
 * Source-page → structured-CSV extractor (Phase 1 backlog v0).
 *
 * Reads every wiki/sources/*.md page that follows the CLAUDE.md Part 6
 * source-page template, extracts the structured fields (N, mean, median,
 * max, basis, jurisdiction, metal_species), and writes them to a new
 * structured CSV at:
 *
 *   data/evidence/category1_autonomy_extracted_summary.csv
 *
 * That filename matches the `category*_summary.csv` pattern the pooling
 * engine scans, so its output is automatically admitted to the pool the
 * next time `npm run evidence:pooling` runs.
 *
 * Robustness model:
 *   - Each source page is parsed independently. A parse failure on one
 *     page doesn't stop the others.
 *   - For each page we extract every (metal, product_slug, statistic)
 *     tuple we can find with high confidence. Ambiguous values are
 *     skipped, not guessed.
 *   - All extractions are tagged with `extraction_method: autonomy_v0`
 *     so downstream reviewers (and the pooling engine's contribution
 *     log) can see which rows came from this autonomous extractor.
 *   - A separate "unparsed but interesting" log lists pages that had
 *     `## Key numbers` sections but no extractable values, so Karen
 *     can prioritize hand-curation.
 *
 * v0 limitations (acknowledged):
 *   - Only extracts from pages following the Part 6 template's "Key
 *     numbers" section. Pages with hand-written prose throughout will
 *     be skipped.
 *   - Doesn't do speciation reasoning beyond what's stated explicitly
 *     in the page body. Per CLAUDE.md Part 14, speciation is
 *     non-substitutable; if a page says "total Hg" we treat it as tHg
 *     even if the matrix is fish.
 *   - Doesn't handle non-ppb units. Pages that report only µg/L, ng/g,
 *     mg/kg, etc. get unit-converted only when the conversion is
 *     unambiguous (1 ppb = 1 µg/kg = 1 ng/g; ppm/mg/kg = 1000 ppb).
 *
 * Run with:
 *   node tools/autonomy/extract-source-values.mjs [--dry-run] [--limit N]
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const outputPath = path.join(repoRoot, "data/evidence/category1_autonomy_extracted_summary.csv")
const unparseablePath = path.join(repoRoot, "data/evidence/autonomy/extraction-unparseable.csv")
const unitUnresolvedPath = path.join(repoRoot, "data/evidence/autonomy/extraction-unit-unresolved.csv")
const reportPath = path.join(repoRoot, `data/evidence/autonomy/extraction-report-${new Date().toISOString().slice(0, 10)}.md`)

const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const limit = args.has("limit") ? Number(args.get("limit")) : Infinity

// Output schema — matches category1_formula_concentration_summary.csv
const OUTPUT_HEADERS = [
  "source_id",
  "source_page",
  "row_slug",
  "metal_species",
  "product_label",
  "basis",
  "n",
  "mean_ppb",
  "median_ppb",
  "p50_ppb",
  "p90_ppb",
  "p95_ppb",
  "p100_ppb",
  "max_ppb",
  "min_ppb",
  "unit",
  "statistic_scope",
  "evidence_fitness_verdict",
  "review_state",
  "row_fit",
  "jurisdiction",
  "extraction_method",
  "notes",
]

// Metal-name normalization (per CLAUDE.md Part 14)
const METAL_NORMALIZATION = {
  pb: "Pb", lead: "Pb", "Pb": "Pb",
  cd: "Cd", cadmium: "Cd", "Cd": "Cd",
  ias: "iAs", "inorganic as": "iAs", "inorganic arsenic": "iAs", "i-as": "iAs", "iAs": "iAs",
  tas: "tAs", "total as": "tAs", "total arsenic": "tAs", "t-as": "tAs", "tAs": "tAs",
  as: "tAs",   // bare "As" is total arsenic per Part 14 unless speciated
  mehg: "MeHg", methylmercury: "MeHg", "methyl mercury": "MeHg", "MeHg": "MeHg",
  thg: "tHg", "total hg": "tHg", "total mercury": "tHg", "tHg": "tHg",
  hg: "tHg", mercury: "tHg",  // bare Hg is total
  ni: "Ni", nickel: "Ni", "Ni": "Ni",
  al: "Al", aluminum: "Al", aluminium: "Al", "Al": "Al",
  "cr-vi": "Cr-VI", "cr(vi)": "Cr-VI", "chromium-vi": "Cr-VI", "hexavalent chromium": "Cr-VI", "Cr-VI": "Cr-VI",
  cr: "Cr-total", chromium: "Cr-total", "total chromium": "Cr-total",
  sn: "Sn", tin: "Sn", "Sn": "Sn",
  u: "U", uranium: "U",
}

function main() {
  const startTime = Date.now()
  fs.mkdirSync(path.dirname(unparseablePath), { recursive: true })
  fs.mkdirSync(path.dirname(reportPath), { recursive: true })

  if (!fs.existsSync(sourcesDir)) {
    console.error(`No wiki/sources/ directory at ${sourcesDir}`)
    process.exit(1)
  }

  const extractedRows = []
  const unparseable = []
  const unitUnresolved = []
  let processed = 0
  let pagesWithKeyNumbers = 0
  let pagesWithoutKeyNumbers = 0

  const files = fs.readdirSync(sourcesDir).filter((f) => f.endsWith(".md")).slice(0, limit)
  for (const file of files) {
    processed++
    const filepath = path.join(sourcesDir, file)
    const text = fs.readFileSync(filepath, "utf8")
    const fm = parseFrontmatter(text)
    if (fm.type && fm.type !== "source") continue
    const sourceId = String(fm.cite_key || fm.raw_handle || file.replace(/\.md$/, ""))
    const declaredMetals = arrayField(fm.metals)
    const declaredProducts = arrayField(fm.products).map((p) =>
      String(p).replace(/^\[\[products\//, "").replace(/\]\]$/, "").trim(),
    )
    const declaredJurisdictions = arrayField(fm.jurisdictions)
    const sampleN = fm.sample_n ? Number(fm.sample_n) : null
    const sourceType = String(fm.source_type || "")
    const evidenceTier = String(fm.evidence_tier || "")

    // Section: ## Key numbers (the canonical structured-evidence section)
    const keyNumbersBlock = extractSection(text, "Key numbers")
    if (!keyNumbersBlock) {
      pagesWithoutKeyNumbers++
      continue
    }
    pagesWithKeyNumbers++

    // Parse the key numbers block: look for analyte mentions followed by
    // N=X, mean=Y, median=Z, max=W patterns within the same paragraph.
    const { rows: rowsFromPage, unresolved: unresolvedFromPage } = parseKeyNumbersBlock(keyNumbersBlock, {
      sourceId,
      sourcePage: `wiki/sources/${file}`,
      declaredMetals,
      declaredProducts,
      declaredJurisdictions,
      sampleN,
      evidenceTier,
    })

    if (unresolvedFromPage.length > 0) unitUnresolved.push(...unresolvedFromPage)

    if (rowsFromPage.length > 0) {
      extractedRows.push(...rowsFromPage)
    } else if (unresolvedFromPage.length === 0) {
      unparseable.push({
        source_id: sourceId,
        source_page: `wiki/sources/${file}`,
        declared_metals: declaredMetals.join(";"),
        block_preview: keyNumbersBlock.slice(0, 200).replace(/\n/g, " "),
        reason: "Key numbers block present but no parseable (metal, value, basis) tuples extracted",
      })
    }
  }

  // Write outputs
  if (!dryRun) {
    writeCsv(outputPath, extractedRows, OUTPUT_HEADERS)
    writeCsv(unparseablePath, unparseable, ["source_id", "source_page", "declared_metals", "block_preview", "reason"])
    writeCsv(unitUnresolvedPath, unitUnresolved, ["source_id", "source_page", "metals", "statistic", "raw_value", "sentence", "reason"])
  }

  // Report
  const report = [
    `# Source-value extraction report — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `Generated: ${new Date().toISOString()}`,
    `Mode: ${dryRun ? "DRY-RUN" : "EXECUTED"}`,
    `Elapsed: ${Math.round((Date.now() - startTime) / 1000)}s`,
    ``,
    `## Summary`,
    ``,
    `- Source pages processed: ${processed}`,
    `- Pages with \`## Key numbers\` section: ${pagesWithKeyNumbers}`,
    `- Pages without Key numbers section (skipped): ${pagesWithoutKeyNumbers}`,
    `- Structured rows extracted: ${extractedRows.length}`,
    `- Values stranded (unit unresolved — NOT emitted as ppb): ${unitUnresolved.length}`,
    `- Pages with Key numbers but no parseable values: ${unparseable.length}`,
    ``,
    `## Output`,
    ``,
    `- \`${path.relative(repoRoot, outputPath)}\` — pooling engine consumes this on next run`,
    `- \`${path.relative(repoRoot, unitUnresolvedPath)}\` — values whose unit could not be determined; stranded for curation, never guessed as ppb`,
    `- \`${path.relative(repoRoot, unparseablePath)}\` — flagged for human curation`,
    ``,
    `## Coverage by metal_species`,
    ``,
    Object.entries(countBy(extractedRows, (r) => r.metal_species))
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `- ${k}: ${v} rows`)
      .join("\n"),
    ``,
    `## Coverage by row_slug (top 20)`,
    ``,
    Object.entries(countBy(extractedRows, (r) => r.row_slug))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([k, v]) => `- ${k}: ${v} rows`)
      .join("\n"),
    ``,
  ].join("\n")

  fs.writeFileSync(reportPath, report, "utf8")

  console.log(`\n=== extract-source-values ${dryRun ? "DRY-RUN" : "EXECUTED"} ===`)
  console.log(`Pages processed: ${processed}`)
  console.log(`Pages with Key numbers: ${pagesWithKeyNumbers}`)
  console.log(`Rows extracted: ${extractedRows.length}`)
  console.log(`Values stranded (unit unresolved): ${unitUnresolved.length}`)
  console.log(`Pages flagged for human curation: ${unparseable.length}`)
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
}

function extractSection(text, heading) {
  // Look for "## <heading>" and capture until the next "## " or EOF.
  const re = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|\\Z)`, "m")
  const m = text.match(re)
  return m ? m[1].trim() : null
}

function parseKeyNumbersBlock(block, ctx) {
  // Sentence-scoped extraction. v0 ran extractStats() over a whole paragraph for
  // every metal the paragraph merely MENTIONED, so a sentence like "Fe median
  // 68.80 mg/kg in dried fish" got attributed to Pb whenever a different
  // sentence in the same paragraph said "Codex Pb maximum limit" — wrong metal,
  // wrong matrix, ×1000 unit conversion turning it into 68,800 ppb. v1 extracts
  // a value only from a sentence that unambiguously concerns EXACTLY ONE
  // declared metal. Multi-metal sentences (e.g. "Pb 12, Cd 8") are skipped, not
  // guessed — honoring this extractor's stated "ambiguous values are skipped,
  // not guessed" principle, which v0 violated.
  const rows = []
  const unresolved = []
  const lines = block.split(/\n/)
  // A header line ("**Nickel concentrations by food group:**") sets a metal
  // context that the bulleted values beneath it inherit; without this, splitting
  // the header from its bullets severs the metal from its values and loses the
  // whole list. Context resets on a blank line or the next header.
  let contextMetals = []

  // Block-level sole unit (last-resort resolution): if the whole Key numbers
  // block uses exactly one unit scale, a bare value inherits it. If the block
  // mixes scales (or states none), a bare value stays unresolved and is
  // stranded, never guessed as ppb.
  const blockUnits = scanUnits(block)
  const blockScales = new Set(blockUnits.map((u) => unitScale(u.unit)))
  const blockUnit = blockScales.size === 1 ? blockUnits[0].unit : null

  for (const rawLine of lines) {
    const sentence = rawLine.trim()
    if (sentence === "") { contextMetals = []; continue }

    const inLine = metalMentions(sentence, ctx.declaredMetals)
    const uniqInLine = [...new Set(inLine.map((m) => m.canon))]
    const labeled = extractLabeledWithPos(sentence)

    // Header: names metal(s), carries no values, looks like a heading.
    if (labeled.length === 0 && uniqInLine.length >= 1 && isHeaderish(sentence)) {
      contextMetals = uniqInLine
      continue
    }

    // Effective mentions: in-line if present, else an inherited single-metal
    // context (synthetic index -1 means "all stats bind to the context metal").
    let mentions = inLine
    if (mentions.length === 0) {
      if (contextMetals.length !== 1) continue
      mentions = [{ canon: contextMetals[0], index: -1 }]
    }

    if (labeled.length === 0) continue

    // Resolve each labeled value's unit → ppb, or strand it. A value whose unit
    // cannot be determined from adjacency, the sentence, or the block is NOT
    // emitted (the ×1000-low defect came from defaulting exactly these to ppb).
    const sentenceUnits = scanUnits(sentence)
    const resolved = []
    for (const stat of labeled) {
      const r = resolveUnit(stat, labeled, sentenceUnits, blockUnit)
      if (!r) {
        unresolved.push({
          source_id: ctx.sourceId,
          source_page: ctx.sourcePage,
          metals: (uniqInLine.length ? uniqInLine : contextMetals).join(";"),
          statistic: stat.key,
          raw_value: String(stat.rawValue),
          sentence: sentence.slice(0, 200).replace(/\n/g, " "),
          reason: "unit_unresolved — no unit adjacent, forward, sole-in-sentence, or sole-in-block; value not guessed as ppb",
        })
        continue
      }
      resolved.push({
        key: stat.key,
        value: normalizeToPpb(stat.rawValue, r.unit),
        index: stat.index,
        via: r.via,
        unit: r.unit,
      })
    }
    if (resolved.length === 0) continue

    const nMatch = sentence.match(/\b[Nn]\s*=\s*(\d+)|sample size\s*(?:of\s*)?(\d+)/)
    const sentenceN = nMatch ? Number(nMatch[1] || nMatch[2]) : null
    const basis = extractBasis(sentence)
    const jurisdiction = chooseJurisdiction(sentence, ctx.declaredJurisdictions)

    // Group resolved stats by nearest metal. This keeps legitimate multi-metal
    // sentences ("Pb mean 12 ppb, Cd mean 8 ppb" → two correct rows) while fixing
    // cross-metal bleed. When a sentence has one metal, every stat binds to it.
    const byMetal = new Map()
    const viaByMetal = new Map()
    for (const stat of resolved) {
      let nearest = mentions[0]
      let best = Math.abs(stat.index - mentions[0].index)
      for (const m of mentions) {
        const d = Math.abs(stat.index - m.index)
        if (d < best) { best = d; nearest = m }
      }
      if (!byMetal.has(nearest.canon)) { byMetal.set(nearest.canon, {}); viaByMetal.set(nearest.canon, new Set()) }
      const slot = byMetal.get(nearest.canon)
      if (slot[stat.key] == null) slot[stat.key] = stat.value // first wins (closest label of its kind)
      viaByMetal.get(nearest.canon).add(`${stat.key}=${stat.unit}:${stat.via}`)
    }

    for (const [metalCanonical, stats] of byMetal) {
      const productSlug = chooseProduct(sentence, ctx.declaredProducts)
      rows.push({
        source_id: ctx.sourceId,
        source_page: ctx.sourcePage,
        row_slug: productSlug || "",
        metal_species: metalCanonical,
        product_label: productSlug || "",
        basis: basis || "",
        n: sentenceN != null ? String(sentenceN) : (ctx.sampleN != null ? String(ctx.sampleN) : ""),
        mean_ppb: stats.mean != null ? String(stats.mean) : "",
        median_ppb: stats.median != null ? String(stats.median) : "",
        p50_ppb: stats.p50 != null ? String(stats.p50) : (stats.median != null ? String(stats.median) : ""),
        p90_ppb: stats.p90 != null ? String(stats.p90) : "",
        p95_ppb: stats.p95 != null ? String(stats.p95) : "",
        p100_ppb: stats.p100 != null ? String(stats.p100) : (stats.max != null ? String(stats.max) : ""),
        max_ppb: stats.max != null ? String(stats.max) : "",
        min_ppb: stats.min != null ? String(stats.min) : "",
        unit: "ppb", // everything normalized to ppb in the output
        statistic_scope: sentence.slice(0, 200).replace(/\n/g, " "),
        evidence_fitness_verdict: ctx.evidenceTier === "A" ? "EF-2" : "EF-3",
        review_state: "autonomy_v2_extracted",
        row_fit: "literature_summary_row",
        jurisdiction,
        extraction_method: "autonomy_v2_unit_resolved_nearest_metal",
        notes: `Auto-extracted; unit resolved via [${[...viaByMetal.get(metalCanonical)].join("; ")}]; value bound to nearest metal mention. Validate before promotion.`,
      })
    }
  }
  return { rows, unresolved }
}

function metalMentions(sentence, declaredMetals) {
  // Every declared-metal mention with its character index, sorted by position.
  // Bare "arsenic" is deliberately NOT a tAs needle: it is a substring of
  // "inorganic arsenic" and conflating the two violates the non-negotiable
  // iAs/tAs speciation rule (CLAUDE.md Part 14). Only explicit "total arsenic"
  // / "tAs" bind to tAs.
  const longForms = {
    Pb: ["lead"], Cd: ["cadmium"], iAs: ["inorganic arsenic", "inorganic as"],
    tAs: ["total arsenic"], MeHg: ["methylmercury", "methyl mercury"],
    tHg: ["total mercury", "mercury"], Ni: ["nickel"], Al: ["aluminum", "aluminium"],
    "Cr-VI": ["chromium(vi)", "hexavalent chromium", "cr(vi)"], "Cr-total": ["chromium"],
    Sn: ["tin"], U: ["uranium"],
  }
  const mentions = []
  for (const declared of declaredMetals) {
    const canon = normalizeMetal(declared)
    if (!canon) continue
    const needles = new Set(
      [canon, String(declared), ...(longForms[canon] || [])]
        .map((s) => s.toLowerCase())
        .filter(Boolean),
    )
    for (const needle of needles) {
      // Custom word boundary: not flanked by a letter/digit, so "al" matches a
      // standalone "Al" but not "metal"/"also", and "cr" not "across".
      const re = new RegExp(
        `(?<![a-z0-9])${escapeRegex(needle).replace(/\s+/g, "\\s+")}(?![a-z0-9])`,
        "gi",
      )
      let m
      while ((m = re.exec(sentence)) !== null) {
        mentions.push({ canon, index: m.index })
        if (m.index === re.lastIndex) re.lastIndex++ // guard against zero-width loop
      }
    }
  }
  return mentions.sort((a, b) => a.index - b.index)
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// ----- unit resolution (the 2026-06 ×1000-low defect fix) -----
//
// v1 captured a unit only when it sat IMMEDIATELY after the number, so
// "overall mean of 0.119 ± 0.054 mg/kg" lost the mg/kg (it follows the ± SD
// term) and silently recorded 0.119 ppb instead of 119 ppb — a 1000×-low error
// that fed straight into the pool. v2 resolves each value's unit from the
// widest defensible context and, crucially, STRANDS a value whose unit cannot
// be determined rather than defaulting it to ppb.

// [µμ] matches both the micro-sign (U+00B5, ~10k corpus uses) and the Greek
// small-letter mu (U+03BC, ~281 uses); a real corpus mixes them and matching
// only one silently strands the other.
const UNIT_ALTERNATION =
  "[µμ]g/kg|ug/kg|mcg/kg|ng/mL|ng/ml|ng/g|ng/L|ng/l|[µμ]g/g|ug/g|[µμ]g/L|ug/l|mg/kg|mg/L|mg/l|ppb|ppm"
const UNIT_TOKEN_RE = new RegExp(`(?<![A-Za-zµμ])(${UNIT_ALTERNATION})(?![A-Za-z])`, "gi")

function unitScale(unit) {
  // ppb-equivalent multiplier for a mass/volume concentration unit; null if the
  // token isn't a unit we can convert (an unknown unit is unresolved, not ppb).
  if (!unit) return null
  const u = unit.toLowerCase().replace(/\s+/g, "").replace(/μ/g, "µ") // Greek mu → micro-sign
  if (["ppb", "µg/kg", "ug/kg", "mcg/kg", "ng/g", "µg/l", "ug/l", "ng/ml"].includes(u)) return 1
  if (["ppm", "mg/kg", "µg/g", "ug/g", "mg/l"].includes(u)) return 1000
  if (u === "ng/l") return 0.001
  return null
}

function scanUnits(text) {
  // Every convertible unit token in the text, with its character index.
  const out = []
  UNIT_TOKEN_RE.lastIndex = 0
  let m
  while ((m = UNIT_TOKEN_RE.exec(text)) !== null) {
    if (unitScale(m[1]) != null) out.push({ unit: m[1], index: m.index })
  }
  return out
}

function resolveUnit(value, allValues, sentenceUnits, blockUnit) {
  // Resolution ladder, most-local to least, never guessing:
  //   1. adjacent    — unit immediately after the number
  //   2. forward     — nearest unit after this value, before the next labeled
  //                    value (catches "mean 0.119 ± 0.054 mg/kg")
  //   3. sole_sentence — the sentence uses exactly one unit scale
  //   4. block_native  — the whole Key numbers block uses exactly one unit scale
  //   5. (null)      — unresolved: caller strands it, does NOT emit ppb
  if (value.adjacentUnit && unitScale(value.adjacentUnit) != null) {
    return { unit: value.adjacentUnit, via: "adjacent" }
  }
  const later = allValues.filter((v) => v.index > value.index).map((v) => v.index)
  const nextValueIdx = later.length ? Math.min(...later) : Infinity
  const forward = sentenceUnits
    .filter((u) => u.index > value.index && u.index < nextValueIdx)
    .sort((a, b) => a.index - b.index)[0]
  if (forward) return { unit: forward.unit, via: "nearest_forward" }
  const scales = new Set(sentenceUnits.map((u) => unitScale(u.unit)))
  if (scales.size === 1) return { unit: sentenceUnits[0].unit, via: "sole_sentence" }
  if (blockUnit) return { unit: blockUnit, via: "block_native" }
  return null
}

function extractLabeledWithPos(sentence) {
  // [{key, rawValue, index, adjacentUnit}] for each labeled statistic. The unit
  // is NOT applied here; resolution happens in the caller with full sentence +
  // block context so a unit that follows a "± SD" term is still found instead of
  // the value silently defaulting to ppb.
  const out = []
  const labelGroups = {
    mean: ["mean", "average"],
    median: ["median", "p50", "50th percentile"],
    max: ["max", "maximum", "highest"],
    min: ["min", "minimum", "lowest"],
    p90: ["p90", "90th percentile"],
    p95: ["p95", "95th percentile"],
    p100: ["p100", "100th percentile"],
  }
  for (const [key, labels] of Object.entries(labelGroups)) {
    for (const label of labels) {
      const re = new RegExp(
        // Number may carry thousands-separator commas: 1,583 / 1,975. Capture the
        // comma group and strip it before Number(), or it truncates to "1".
        `\\b${label.replace(/\s+/g, "\\s+")}\\b\\s*(?:of\\s+)?(?:=\\s*)?(\\d[\\d,]*(?:\\.\\d+)?)\\s*(${UNIT_ALTERNATION})?`,
        "ig",
      )
      let m
      while ((m = re.exec(sentence)) !== null) {
        const rawValue = Number(m[1].replace(/,/g, ""))
        if (Number.isFinite(rawValue)) {
          out.push({ key, rawValue, index: m.index, adjacentUnit: m[2] || null })
        }
      }
    }
  }
  return out
}

function isHeaderish(line) {
  // A heading that sets metal context for the bullets beneath it: ends with a
  // colon (optionally inside trailing asterisks/bold) or is a fully bold line.
  return /:\**\s*$/.test(line) || /^\*\*[^*]+\*\*:?\s*$/.test(line)
}

function normalizeToPpb(value, unit) {
  // Single source of truth for the ppb-equivalent multiplier. Callers only pass
  // a unit that resolveUnit() already confirmed is convertible (unitScale != null),
  // so an unknown unit here (scale null) is a defensive pass-through, never the
  // silent ppb default that caused the ×1000-low defect.
  const s = unitScale(unit)
  return s == null ? value : value * s
}

function extractBasis(paragraph) {
  const lower = paragraph.toLowerCase()
  if (lower.includes("prepared for feeding") || lower.includes("prepared-for-feeding")) return "prepared_for_feeding"
  if (lower.includes("as consumed") || lower.includes("ready to drink") || lower.includes("rtd ")) return "as_consumed"
  if (lower.includes("as sold") || lower.includes("on the market") || lower.includes("as marketed")) return "as_sold"
  if (lower.includes("dry weight") || lower.includes("dry matter") || lower.includes(" dw") || lower.includes("dry powder")) return "dry_as_sold"
  if (lower.includes("wet weight") || lower.includes("fresh weight") || lower.includes(" fw")) return "as_consumed"
  if (lower.includes("powder")) return "powder_as_placed"
  return ""
}

function chooseProduct(paragraph, declaredProducts) {
  if (declaredProducts.length === 0) return ""
  if (declaredProducts.length === 1) return declaredProducts[0]
  // Pick the declared product whose slug words appear most in the line. When a
  // broad multi-matrix source (e.g. a TDS food-group breakdown) lists a value
  // for a matrix that is NOT one of its declared products, no slug word matches;
  // return "" so the row is stranded into the starvation audit for a proper
  // matrix→product mapping rather than dumped onto declaredProducts[0]. Dumping
  // grains/vegetable/fish values onto the first declared snack slug pollutes a
  // real cell with the wrong matrix.
  let best = ""
  let bestScore = 0
  const para = paragraph.toLowerCase()
  for (const product of declaredProducts) {
    const slug = String(product).toLowerCase()
    const score = slug.split("-").filter((w) => w.length > 3 && para.includes(w)).length
    if (score > bestScore) {
      best = product
      bestScore = score
    }
  }
  return best
}

function chooseJurisdiction(paragraph, declaredJurisdictions) {
  if (declaredJurisdictions.length === 0) return ""
  if (declaredJurisdictions.length === 1) return declaredJurisdictions[0]
  return declaredJurisdictions[0]  // simplest: first declared. Could improve.
}

function normalizeMetal(input) {
  if (!input) return null
  const lower = String(input).trim().toLowerCase()
  return METAL_NORMALIZATION[lower] || (input.length <= 6 ? input : null)
}

// ----- utilities -----

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const line of m[1].split("\n")) {
    const km = line.match(/^([\w-]+):\s*(.*)$/)
    if (!km) continue
    let v = km[2].trim()
    if (v.startsWith("[") && v.endsWith("]")) {
      v = v.slice(1, -1).split(",").map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1")).filter(Boolean)
    } else if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    fm[km[1]] = v
  }
  return fm
}

function arrayField(v) {
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean)
  if (typeof v === "string") {
    return v.replace(/^\[|\]$/g, "").split(/[,;]/).map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1")).filter(Boolean)
  }
  return []
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    const match = a.match(/^--([^=]+)(?:=(.*))?$/)
    if (match) m.set(match[1], match[2] ?? "true")
  }
  return m
}

function writeCsv(filepath, rows, headers) {
  const lines = [headers.join(",")]
  for (const row of rows) {
    lines.push(headers.map((h) => csvCell(row[h] ?? "")).join(","))
  }
  fs.writeFileSync(filepath, lines.join("\n") + "\n", "utf8")
}

function csvCell(v) {
  const s = String(v ?? "")
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function countBy(arr, keyFn) {
  const c = {}
  for (const x of arr) {
    const k = keyFn(x) || "(empty)"
    c[k] = (c[k] || 0) + 1
  }
  return c
}

// Invoked last so all module-level const declarations (UNIT_TOKEN_RE et al.) are
// initialized before main() runs; function declarations above are hoisted.
main()
