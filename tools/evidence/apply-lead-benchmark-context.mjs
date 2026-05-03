import { readFile, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const csvPath = resolve("data/evidence/category1_lead_benchmark_context.csv")
const indexPath = resolve("wiki/products/index.md")

const rows = parseCsv(await readFile(csvPath, "utf8"))
const bySlug = new Map(rows.map((row) => [row.row_slug, row]))

for (const row of rows) {
  const productPath = resolve("wiki/products", `${row.row_slug}.md`)
  const source = await readFile(productPath, "utf8")
  const block = sectionFor(row)
  const next = updateUpdatedDate(upsertSection(source, block))

  if (next !== source) {
    await writeFile(productPath, next, "utf8")
    console.log(`Updated ${productPath}`)
  }
}

const indexSource = await readFile(indexPath, "utf8")
const indexNeedle =
  "These pages report what the evidence says about the product row, source coverage, partial distributions, and data gaps. Technical row architecture and Evidence Fitness notes remain on the detail pages for auditability."
const indexReplacement =
  `${indexNeedle}\n\nLead regulatory, exposure, and occurrence benchmarks are normalized into ppb in [[products/lead-benchmark-context|Category 1 lead benchmark context]]. The ppb view keeps FDA, EU, Prop 65, and occurrence values comparable while preserving each value's legal or evidentiary role.`

if (indexSource.includes(indexNeedle) && !indexSource.includes("[[products/lead-benchmark-context|Category 1 lead benchmark context]]")) {
  await writeFile(indexPath, indexSource.replace(indexNeedle, indexReplacement), "utf8")
  console.log(`Updated ${indexPath}`)
}

function sectionFor(row) {
  return `## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | ${displayFda(row)} | ${row.fda_basis} | ${row.fda_scope} |
| EU 2023/915 | ${displayPpb(row.eu_lead_ppb)} | ${row.eu_basis} | ${row.eu_value_type}. |
| Prop 65 MADL screen | ${displayPpb(row.prop65_ppb_equivalent)} | ${row.prop65_basis} | Derived from the 0.5 ug/day lead MADL using \`500 ÷ grams/day\`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | ${row.ppb_interpretation} | ${row.hmtc_use} |

${row.public_note}

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->
`
}

function upsertSection(source, block) {
  const existing = /^## Lead Benchmark Context\n\n<!-- audience: regulator, educator, consumer, app -->\n<!-- lead-benchmark-context:start -->[\s\S]*?<!-- lead-benchmark-context:end -->\n?/m
  if (existing.test(source)) return source.replace(existing, block)

  const needle = "\n## Scaffold Status"
  if (source.includes(needle)) return source.replace(needle, `\n${block}\n## Scaffold Status`)

  const fallback = "\n## Distribution Context"
  if (source.includes(fallback)) return source.replace(fallback, `\n${block}\n## Distribution Context`)

  return `${source.trimEnd()}\n\n${block}`
}

function updateUpdatedDate(source) {
  return source.replace(/^updated:\s*\d{4}-\d{2}-\d{2}\s*$/m, "updated: 2026-05-03")
}

function displayFda(row) {
  if (row.fda_lead_ppb === "not_established") return "Not established"
  return `${displayPpb(row.fda_lead_ppb)} (${row.fda_value_type})`
}

function displayPpb(value) {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return value
  return `${Number.isInteger(parsed) ? parsed : parsed.toFixed(parsed < 1 ? 3 : 1).replace(/\.0$/, "")} ppb`
}

function parseCsv(input) {
  const lines = input.trim().split(/\r?\n/)
  const headers = parseCsvLine(lines.shift())
  return lines.map((line) => {
    const cells = parseCsvLine(line)
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]))
  })
}

function parseCsvLine(line) {
  const cells = []
  let cell = ""
  let quoted = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    const next = line[i + 1]

    if (char === '"' && quoted && next === '"') {
      cell += '"'
      i++
      continue
    }

    if (char === '"') {
      quoted = !quoted
      continue
    }

    if (char === "," && !quoted) {
      cells.push(cell)
      cell = ""
      continue
    }

    cell += char
  }

  cells.push(cell)
  return cells
}
