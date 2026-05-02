import fs from "node:fs"
import https from "node:https"

const baseUrl = process.env.HMI_LIVE_BASE_URL ?? "https://heavymetalindex.com"

const crosswalkSlugs = [
  ...new Set(
    parseCsv(fs.readFileSync("data/evidence/product_regulatory_crosswalk.csv", "utf8")).map((row) => row.product_slug),
  ),
]

const category5Slugs = [
  "fruit-juices-non-apple",
  "fruit-juices-apple-containing",
  "vegetable-juices-non-root",
  "vegetable-juices-root-vegetable-containing",
  "plant-milks-non-soy-non-rice",
  "plant-milks-soy-based",
  "plant-milks-rice-based",
  "flavored-waters",
  "sports-energy-drinks",
  "herbal-botanical-infusions",
  "true-tea-camellia-sinensis",
  "matcha",
  "coffee",
  "soft-drinks-carbonated-beverages",
  "fermented-beverages-non-tea-based",
  "kombucha-tea-based",
]

const productSlugs = [...new Set([...crosswalkSlugs, ...category5Slugs])].sort()

const checks = [
  {
    url: `${baseUrl}/products/regulatory-crosswalk-field-findings`,
    mustContain: "Regulatory Crosswalk vs Field Findings",
  },
  ...productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    mustContain: "Regulatory Crosswalk Vs Field Findings",
  })),
  ...productSlugs.map((slug) => ({
    url: `${baseUrl}/static/contentIndex.json`,
    mustContain: `products/${slug}`,
  })),
]

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = ""
        res.setEncoding("utf8")
        res.on("data", (chunk) => (body += chunk))
        res.on("end", () => resolve({ statusCode: res.statusCode, body }))
      })
      .on("error", reject)
  })
}

let failures = 0
for (const check of checks) {
  const res = await fetchText(check.url)
  const ok = res.statusCode === 200 && res.body.includes(check.mustContain)
  console.log(`${ok ? "PASS" : "FAIL"} ${res.statusCode} ${check.url}`)
  if (!ok) failures++
}

if (failures > 0) process.exit(1)

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/)
  const headers = parseCsvLine(lines.shift())
  return lines.map((line) => {
    const cells = parseCsvLine(line)
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]))
  })
}

function parseCsvLine(line) {
  const cells = []
  let current = ""
  let quoted = false

  for (let index = 0; index < line.length; index++) {
    const char = line[index]
    if (quoted) {
      if (char === "\"" && line[index + 1] === "\"") {
        current += "\""
        index++
      } else if (char === "\"") {
        quoted = false
      } else {
        current += char
      }
    } else if (char === "\"") {
      quoted = true
    } else if (char === ",") {
      cells.push(current)
      current = ""
    } else {
      current += char
    }
  }

  cells.push(current)
  return cells
}
