import { mkdir, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { buildCategory1RegisterRows, category1RegisterToCsv } from "./model"

const outputPath = resolve(process.argv[2] ?? "data/evidence/category1_register.csv")
const csv = category1RegisterToCsv(buildCategory1RegisterRows())

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, csv, "utf8")
console.log(`Wrote ${outputPath}`)
