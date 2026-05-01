import https from "node:https"

const checks = [
  {
    url: "https://heavymetalindex.com/products/plant-milks-rice-based",
    mustContain: "D'Amato 2026",
  },
  {
    url: "https://heavymetalindex.com/products/regulatory-crosswalk-field-findings",
    mustContain: "Regulatory Crosswalk vs Field Findings",
  },
  {
    url: "https://heavymetalindex.com/static/contentIndex.json",
    mustContain: "products/plant-milks-rice-based",
  },
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
