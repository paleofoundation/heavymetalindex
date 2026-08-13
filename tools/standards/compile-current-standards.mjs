#!/usr/bin/env node

import { spawnSync } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import {
  CONDITIONAL_SPECIES_ANALYTES,
  CORE_SPECIES_ANALYTES,
  FULL_PANEL,
  RESOLVED_CELL_TYPES,
  TOTAL_ANALYTES,
  missingCanonicalAnalytes,
} from "./hmtc-analyte-panel.mjs"

const REPO = process.cwd()
const STANDARDS = path.join(REPO, "data/workbench/standards")
const REPORT_JSON = path.join(STANDARDS, "hmtc-category-completion.json")
const REPORT_MD = path.join(STANDARDS, "hmtc-category-completion.md")
const CHECK_ONLY = process.argv.includes("--check")

const jobs = [
  {
    category: 1,
    name: "Infant and Child Foods",
    config: "tools/standards/cat1-config.json",
    outdir: "data/workbench/standards/cat1-compiled",
    compiler: "cat1",
    plannedRows: 14,
    note: "Formula powder and ready-to-feed rows each retain cow/non-soy and soy variants.",
  },
  {
    category: 3,
    name: "Grains, Cereals, and Rice Products",
    config: "tools/standards/cat3-config.json",
    outdir: "data/workbench/standards/cat3-compiled",
    compiler: "cat1",
    plannedRows: 12,
  },
  {
    category: 6,
    name: "Seafood",
    config: "tools/standards/seafood-config.json",
    // Kept in the historical shared directory because downstream certification
    // builders currently consume the Cat-6 records there.
    outdir: "data/workbench/standards/cat1-compiled",
    compiler: "cat1",
    plannedRows: 7,
    note: "Includes the six locked seafood rows plus the separately compiled cephalopod row.",
  },
  {
    category: 7,
    name: "Oils, Condiments, and Specialty Foods",
    config: "tools/standards/cat7-config.json",
    outdir: "data/workbench/standards/cat7-compiled",
    compiler: "cat1",
    plannedRows: 12,
    unresolvedRows: ["condiments-general", "snacks-general", "canned-foods-general", "mixed-meals-prepared-foods"],
    note: "Eight scope-locked rows compile. Four broad rows remain blocked on the taxonomy/product-basis splits recorded in the Step-0 lock.",
  },
  {
    category: 9,
    name: "Infant and Child Contact Products",
    config: "tools/standards/cat9-config.json",
    outdir: "data/workbench/standards/cat9-compiled",
    compiler: "cat9",
    plannedRows: 8,
  },
  {
    category: 24,
    name: "Dairy and Milk Products",
    config: "tools/standards/cat24-config.json",
    outdir: "data/workbench/standards/cat24-compiled",
    compiler: "cat1",
    plannedRows: 8,
  },
  {
    category: 25,
    name: "Cannabis, Hemp, and CBD Products",
    config: "tools/standards/cat25-config.json",
    outdir: "data/workbench/standards/cat25-compiled",
    compiler: "cat1",
    plannedRows: 6,
    unresolvedRows: ["cannabis-vape-hardware"],
    note: "Five route-defined material/product rows compile. Vape hardware remains blocked on the lock's reserved aerosol-release/shared-hardware architecture decision.",
  },
]

const policyBlocked = [
  {
    category: 26,
    name: "Peptides, SARMs, and Research Chemicals",
    plannedRows: 4,
    unresolvedRows: ["peptides-injectable-hormones", "sarms-oral", "aas-injectable", "research-chem-raw-powders"],
    reason: "No lawful product-specific sovereign maximum exists, and the parenteral/oral dose-basis method is not yet governed. Occurrence or a health-based calculation cannot replace the missing government anchor under the current initial-limit rule.",
  },
]

function runCompiler(job, outputDirectory = job.outdir) {
  const args = job.compiler === "cat9"
    ? ["tools/standards/compile-cat9.mjs", `--config=${job.config}`, `--outdir=${outputDirectory}`, "--quiet"]
    : ["tools/standards/compile-cat1.mjs", `--config=${job.config}`, `--outdir=${outputDirectory}`, "--quiet"]
  const result = spawnSync(process.execPath, args, { cwd: REPO, encoding: "utf8" })
  if (result.status !== 0) {
    process.stderr.write(result.stdout || "")
    process.stderr.write(result.stderr || "")
    throw new Error(`compiler failed for Category ${job.category}`)
  }
}

function cellSource(cell) {
  return cell.binding_id || cell.source_id || cell.source_page || cell.binding_tHg_source || null
}

function isNumeric(cell) {
  return typeof cell.value_exact === "number" || typeof cell.value === "number"
}

function compactCell(cell) {
  if (!cell) return { display: "GAP", type: "missing", source: null }
  const source = cellSource(cell)
  if (isNumeric(cell)) {
    const value = typeof cell.value_exact === "number" ? cell.value_exact : cell.value
    const unit = cell.unit ? ` ${cell.unit}` : ""
    const suffix = cell.type === "read_across" ? " RA" : cell.type === "special" ? " special" : ""
    return { display: `${value}${unit}${suffix}`, type: cell.type, value, unit: cell.unit || "ug/kg", source }
  }
  if (cell.type === "subsumed") return { display: `bounded by ${cell.subsumed_by}`, type: cell.type, source, bounded_by: cell.subsumed_by }
  if (cell.type === "not_material") return { display: "n/m", type: cell.type, source, bounded_by: cell.bounded_by || null }
  if (cell.type === "control") return { display: "control", type: cell.type, source, bounded_by: cell.bounded_by || null }
  return { display: cell.type, type: cell.type, source }
}

function validateCell({ category, slug, variant, analyte, cell }, defects) {
  const location = `Category ${category} ${slug}/${variant}/${analyte}`
  if (!cell || !RESOLVED_CELL_TYPES.has(cell.type)) {
    defects.push(`${location}: unresolved type ${cell?.type || "missing"}`)
    return
  }
  if (isNumeric(cell) && !cellSource(cell) && cell.type !== "special") {
    defects.push(`${location}: numeric cell has no sovereign source identifier`)
  }
  if (["control", "not_material"].includes(cell.type)) {
    const explanation = cell.control || cell.rationale || cell.label
    if (!explanation) defects.push(`${location}: control determination has no explanation`)
    if (!cell.reference_method) defects.push(`${location}: control determination has no reference method`)
  }
  if ([...CORE_SPECIES_ANALYTES, ...CONDITIONAL_SPECIES_ANALYTES].includes(analyte) && !isNumeric(cell)) {
    const bounded = cell.bounded_by || cell.subsumed_by || cell.control || cell.rationale || cell.label
    if (!bounded) defects.push(`${location}: nonnumeric species cell is not bounded or controlled`)
  }
}

function auditJob(job) {
  const config = JSON.parse(fs.readFileSync(path.join(REPO, job.config), "utf8"))
  const missingPanel = missingCanonicalAnalytes(config.panel || [])
  const defects = missingPanel.map((analyte) => `Category ${job.category} config omits canonical analyte ${analyte}`)
  const rows = []
  const typeCounts = {}
  let variantCount = 0
  let totalCells = 0
  let numericTotalCells = 0
  let controlledTotalCells = 0
  let numericSpeciesCells = 0
  let controlledSpeciesCells = 0

  for (const slug of Object.keys(config.subcategories)) {
    const file = path.join(REPO, job.outdir, `${slug}.json`)
    if (!fs.existsSync(file)) {
      defects.push(`Category ${job.category} ${slug}: compiled record missing`)
      continue
    }
    const record = JSON.parse(fs.readFileSync(file, "utf8"))
    const variants = record.variants || { both: record.cells }
    const row = { slug, variants: Object.keys(variants).length, status: "resolved", numeric_total_cells: 0, controlled_total_cells: 0, defects: [], limits: {} }
    variantCount += row.variants
    for (const [variant, cells] of Object.entries(variants)) {
      row.limits[variant] = {}
      for (const analyte of FULL_PANEL) {
        const cell = cells?.[analyte]
        row.limits[variant][analyte] = compactCell(cell)
        const before = defects.length
        validateCell({ category: job.category, slug, variant, analyte, cell }, defects)
        if (defects.length > before) row.defects.push(...defects.slice(before))
        if (!cell) continue
        typeCounts[cell.type] = (typeCounts[cell.type] || 0) + 1
        if (TOTAL_ANALYTES.includes(analyte)) {
          totalCells += 1
          if (isNumeric(cell)) {
            numericTotalCells += 1
            row.numeric_total_cells += 1
          } else {
            controlledTotalCells += 1
            row.controlled_total_cells += 1
          }
        } else if (isNumeric(cell)) numericSpeciesCells += 1
        else controlledSpeciesCells += 1
      }
    }
    if (row.defects.length) row.status = "incomplete"
    else if (row.controlled_total_cells) row.status = "resolved-with-controls"
    else row.status = "numeric-total-panel"
    rows.push(row)
  }

  const compiledRows = rows.length
  const unresolvedRows = job.unresolvedRows || []
  const categoryStatus = defects.length
    ? "incomplete"
    : unresolvedRows.length
      ? "partial-scope-resolved"
      : controlledTotalCells
        ? "all-rows-resolved-with-controls"
        : "all-rows-numeric"

  return {
    category: job.category,
    name: job.name,
    config: job.config,
    output_directory: job.outdir,
    planned_rows: job.plannedRows,
    compiled_rows: compiledRows,
    compiled_variants: variantCount,
    unresolved_rows: unresolvedRows,
    status: categoryStatus,
    total_cells: totalCells,
    numeric_total_cells: numericTotalCells,
    controlled_total_cells: controlledTotalCells,
    numeric_species_cells: numericSpeciesCells,
    controlled_species_cells: controlledSpeciesCells,
    type_counts: typeCounts,
    defects,
    note: job.note || null,
    rows,
  }
}

function markdown(report) {
  const lines = [
    "# HMTc Category Completion Audit",
    "",
    `Generated ${report.generated_on} from the sovereign regulatory register and the current government-limit compilers.`,
    "",
    "## Canonical analyte contract",
    "",
    `Eight totals: ${TOTAL_ANALYTES.join(", ")}. Core species: ${CORE_SPECIES_ANALYTES.join(", ")}. Conditional species: ${CONDITIONAL_SPECIES_ANALYTES.join(", ")}. Species cells are additional controls and never replace their parent total-element result.`,
    "",
    "A **controlled** total cell is deliberately not presented as a numeric government limit: it means the total remains mandatory in the laboratory panel but no defensible sovereign number exists for that exact or near-neighbour cell. Occurrence evidence cannot fill it. A category is publication-ready only after governance accepts its disclosed read-across and control determinations.",
    "",
    "## Compiled categories",
    "",
    "| Category | Rows | Variants | Numeric total cells | Controlled total cells | Defects | Status |",
    "| ---: | ---: | ---: | ---: | ---: | ---: | --- |",
  ]
  for (const c of report.categories) {
    lines.push(`| ${c.category} — ${c.name} | ${c.compiled_rows}/${c.planned_rows} | ${c.compiled_variants} | ${c.numeric_total_cells}/${c.total_cells} | ${c.controlled_total_cells} | ${c.defects.length} | ${c.status} |`)
  }
  lines.push("", "## Deliberately unresolved rows", "")
  for (const c of report.categories.filter((item) => item.unresolved_rows.length)) {
    lines.push(`- Category ${c.category}: ${c.unresolved_rows.map((slug) => `\`${slug}\``).join(", ")}. ${c.note || ""}`)
  }
  for (const c of report.policy_blocked_categories) {
    lines.push(`- Category ${c.category}: ${c.unresolvedRows.map((slug) => `\`${slug}\``).join(", ")}. ${c.reason}`)
  }
  lines.push("", "## Resolution mix", "")
  for (const c of report.categories) {
    const mix = Object.entries(c.type_counts).sort(([a], [b]) => a.localeCompare(b)).map(([type, count]) => `${type} ${count}`).join("; ")
    lines.push(`- Category ${c.category}: ${mix}.`)
  }
  lines.push("", "## Compiled limit matrices", "", "Values are in µg/kg unless a cell prints another unit. `RA` means disclosed sovereign read-across. `control` means mandatory testing with no defensible sovereign numeric maximum. `n/m` is a gated not-material determination.", "")
  for (const c of report.categories) {
    lines.push(`### Category ${c.category} — ${c.name}`, "")
    lines.push("| Row / variant | Pb | Cd | tAs | tHg | Ni | Sn | Al | Cr | iAs | Cr-VI | MeHg |")
    lines.push("| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |")
    for (const row of c.rows) {
      for (const [variant, cells] of Object.entries(row.limits)) {
        const label = variant === "both" ? `\`${row.slug}\`` : `\`${row.slug}\` / ${variant}`
        const ordered = [...TOTAL_ANALYTES, ...CORE_SPECIES_ANALYTES, ...CONDITIONAL_SPECIES_ANALYTES]
        lines.push(`| ${label} | ${ordered.map((analyte) => cells[analyte]?.display || "GAP").join(" | ")} |`)
      }
    }
    if (c.note) lines.push("", c.note)
    lines.push("")
  }
  lines.push("")
  return lines.join("\n")
}

const driftByCategory = new Map()
if (!CHECK_ONLY) {
  for (const job of jobs) runCompiler(job)
} else {
  // Structural validation is not enough: a config can change while an old,
  // otherwise valid compiled JSON remains. Recompile each family in isolation
  // and compare the exact deterministic records without mutating the worktree.
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "hmtc-standards-audit-"))
  try {
    for (const job of jobs) {
      const tempOut = path.join(tempRoot, `cat-${job.category}`)
      runCompiler(job, tempOut)
      const config = JSON.parse(fs.readFileSync(path.join(REPO, job.config), "utf8"))
      const drift = []
      for (const slug of Object.keys(config.subcategories)) {
        const generatedPath = path.join(tempOut, `${slug}.json`)
        const committedPath = path.join(REPO, job.outdir, `${slug}.json`)
        if (!fs.existsSync(committedPath)) continue // auditJob reports the missing record
        if (fs.readFileSync(generatedPath, "utf8") !== fs.readFileSync(committedPath, "utf8")) {
          drift.push(`Category ${job.category} ${slug}: compiled record is stale; run npm run standards:compile`)
        }
      }
      driftByCategory.set(job.category, drift)
    }
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true })
  }
}
const categories = jobs.map(auditJob)
for (const category of categories) {
  const drift = driftByCategory.get(category.category) || []
  if (drift.length) {
    category.defects.push(...drift)
    category.status = "incomplete"
  }
}
const defects = categories.flatMap((category) => category.defects)
const report = {
  generated_on: new Date().toISOString().slice(0, 10),
  method: "HMTc government-limit-only initial standard; exact sovereign maximum, then disclosed sovereign read-across, then explicit control/no-numeric determination",
  canonical_panel: {
    totals: TOTAL_ANALYTES,
    core_species: CORE_SPECIES_ANALYTES,
    conditional_species: CONDITIONAL_SPECIES_ANALYTES,
    compiled_order: FULL_PANEL,
  },
  categories,
  policy_blocked_categories: policyBlocked,
  totals: {
    compiled_categories: categories.length,
    compiled_rows: categories.reduce((sum, category) => sum + category.compiled_rows, 0),
    compiled_variants: categories.reduce((sum, category) => sum + category.compiled_variants, 0),
    numeric_total_cells: categories.reduce((sum, category) => sum + category.numeric_total_cells, 0),
    controlled_total_cells: categories.reduce((sum, category) => sum + category.controlled_total_cells, 0),
    defects: defects.length,
  },
}

if (!CHECK_ONLY) {
  fs.writeFileSync(REPORT_JSON, `${JSON.stringify(report, null, 2)}\n`)
  fs.writeFileSync(REPORT_MD, markdown(report))
}

for (const category of categories) {
  console.log(`Cat ${category.category}: ${category.compiled_rows}/${category.planned_rows} rows; ${category.numeric_total_cells}/${category.total_cells} numeric total cells; ${category.controlled_total_cells} controlled; ${category.defects.length} defects`)
}
console.log(`Total: ${report.totals.compiled_rows} rows / ${report.totals.compiled_variants} variants; ${report.totals.numeric_total_cells} numeric total cells; ${report.totals.controlled_total_cells} controlled; ${defects.length} defects`)

if (defects.length) {
  for (const defect of defects) console.error(`!! ${defect}`)
  process.exit(1)
}
