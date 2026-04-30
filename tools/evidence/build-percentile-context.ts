import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"

type CsvRow = Record<string, string>

type PercentileRecord = {
  row_slug: string
  row_label: string
  hmtc_row: number | null
  metal: string
  basis: string
  unit: string
  n: number | null
  detected_n: number | null
  lod_n: number | null
  p10: number | null
  p50: number | null
  p90: number | null
  p95: number | null
  p100: number | null
  source_slug: string
  source_title: string
  source_url: string
  statistic_scope: string
  evidence_fitness: string
  review_state: string
  row_fit: string
  substitution_rule: string
  notes: string
}

type PercentilePartner = {
  slug: string
  role_of_partner: string
}

type PercentileRow = {
  row_slug: string
  row_label: string
  hmtc_row: number | null
  hmtc_category: number | null
  category_label: string
  variant_type: string
  product_url: string
  partners: PercentilePartner[]
}

type PercentileContext = {
  schema: "hmi.percentile-context.v1"
  generated_from: string
  rows: PercentileRow[]
  records: PercentileRecord[]
}

const inputPath = resolve("data/evidence/category1_formula_concentration_summary.csv")
const outputPath = resolve("wiki/static/hmi-percentile-context.json")

async function main() {
  const rows = parseCsv(await readFile(inputPath, "utf8"))
  const records: PercentileRecord[] = []
  const rowSlugs = new Set<string>()

  for (const row of rows) {
    const p10 = numberOrNull(row.p10_ppb)
    const p90 = numberOrNull(row.p90_ppb)
    const p100 = numberOrNull(row.p100_ppb)
    const rowSlug = row.row_slug.trim()

    if (!rowSlug || !row.source_id || row.unit !== "ppb") continue
    if (p10 === null && p90 === null && p100 === null) continue
    rowSlugs.add(rowSlug)

    records.push({
      row_slug: rowSlug,
      row_label: row.product_label,
      hmtc_row: numberOrNull(row.hmtc_row),
      metal: row.metal_species,
      basis: row.basis,
      unit: row.unit,
      n: numberOrNull(row.n),
      detected_n: numberOrNull(row.detected_n),
      lod_n: numberOrNull(row.lod_n),
      p10,
      p50: numberOrNull(row.p50_ppb),
      p90,
      p95: numberOrNull(row.p95_ppb),
      p100,
      source_slug: row.source_id,
      source_title: await sourceTitle(row.source_id),
      source_url: `/sources/${row.source_id}`,
      statistic_scope: row.statistic_scope,
      evidence_fitness: row.evidence_fitness_verdict,
      review_state: row.review_state,
      row_fit: row.row_fit,
      substitution_rule: row.substitution_rule,
      notes: row.notes,
    })
  }

  records.sort((a, b) => {
    return (
      a.row_slug.localeCompare(b.row_slug) ||
      a.basis.localeCompare(b.basis) ||
      a.metal.localeCompare(b.metal) ||
      a.source_slug.localeCompare(b.source_slug)
    )
  })

  const context: PercentileContext = {
    schema: "hmi.percentile-context.v1",
    generated_from: "data/evidence/category1_formula_concentration_summary.csv",
    rows: await percentileRows([...rowSlugs], records),
    records,
  }

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, `${JSON.stringify(context, null, 2)}\n`, "utf8")
  console.log(`Wrote ${records.length} percentile-context records to ${outputPath}`)
}

async function percentileRows(rowSlugs: string[], records: PercentileRecord[]): Promise<PercentileRow[]> {
  const rows = await Promise.all(
    rowSlugs.map(async (rowSlug) => {
      const fallback = records.find((record) => record.row_slug === rowSlug)
      const metadata = await productMetadata(rowSlug)

      return {
        row_slug: rowSlug,
        row_label: metadata.title ?? fallback?.row_label ?? rowSlug,
        hmtc_row: numberOrNull(metadata.hmtc_row),
        hmtc_category: numberOrNull(metadata.hmtc_category),
        category_label: metadata.category_label ?? "",
        variant_type: metadata.variant_type ?? "",
        product_url: `/products/${rowSlug}`,
        partners: metadata.partners,
      }
    }),
  )

  return rows.sort((a, b) => {
    const rowA = a.hmtc_row ?? Number.MAX_SAFE_INTEGER
    const rowB = b.hmtc_row ?? Number.MAX_SAFE_INTEGER
    return rowA - rowB || a.row_label.localeCompare(b.row_label)
  })
}

async function productMetadata(rowSlug: string) {
  const fallback = {
    title: undefined as string | undefined,
    hmtc_row: undefined as string | undefined,
    hmtc_category: undefined as string | undefined,
    category_label: undefined as string | undefined,
    variant_type: undefined as string | undefined,
    partners: [] as PercentilePartner[],
  }

  try {
    const source = await readFile(resolve("wiki/products", `${rowSlug}.md`), "utf8")
    const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1]
    if (!frontmatter) return fallback

    return {
      title: scalar(frontmatter, "title"),
      hmtc_row: scalar(frontmatter, "hmtc_row"),
      hmtc_category: scalar(frontmatter, "hmtc_category"),
      category_label: scalar(frontmatter, "category_label"),
      variant_type: scalar(frontmatter, "variant_type"),
      partners: partnerRows(frontmatter),
    }
  } catch {
    return fallback
  }
}

function scalar(frontmatter: string, key: string): string | undefined {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*"?(.+?)"?\\s*$`, "m"))
  return match?.[1]
}

function partnerRows(frontmatter: string): PercentilePartner[] {
  const partners: PercentilePartner[] = []
  let current: Partial<PercentilePartner> | undefined

  for (const line of frontmatter.split(/\r?\n/)) {
    const slug = line.match(/^\s*-\s+slug:\s*(.+?)\s*$/)?.[1]
    if (slug) {
      if (current?.slug && current.role_of_partner) partners.push(current as PercentilePartner)
      current = { slug }
      continue
    }

    const role = line.match(/^\s+role_of_partner:\s*(.+?)\s*$/)?.[1]
    if (role && current) current.role_of_partner = role
  }

  if (current?.slug && current.role_of_partner) partners.push(current as PercentilePartner)
  return partners
}

function numberOrNull(value: string | undefined): number | null {
  if (!value) return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

async function sourceTitle(sourceSlug: string): Promise<string> {
  const sourcePath = resolve("wiki/sources", `${sourceSlug}.md`)

  try {
    const source = await readFile(sourcePath, "utf8")
    const match = source.match(/^title:\s*"?(.+?)"?\s*$/m)
    return match?.[1] ?? sourceSlug
  } catch {
    return sourceSlug
  }
}

function parseCsv(input: string): CsvRow[] {
  const lines = input.trim().split(/\r?\n/)
  const headers = parseCsvLine(lines[0])

  return lines.slice(1).map((line) => {
    const cells = parseCsvLine(line)
    const row: CsvRow = {}
    headers.forEach((header, index) => {
      row[header] = cells[index] ?? ""
    })
    return row
  })
}

function parseCsvLine(line: string): string[] {
  const values: string[] = []
  let current = ""
  let quoted = false

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]
    const next = line[index + 1]

    if (char === '"' && quoted && next === '"') {
      current += '"'
      index += 1
      continue
    }

    if (char === '"') {
      quoted = !quoted
      continue
    }

    if (char === "," && !quoted) {
      values.push(current)
      current = ""
      continue
    }

    current += char
  }

  values.push(current)
  return values
}

await main()
