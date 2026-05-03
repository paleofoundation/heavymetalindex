import fs from "node:fs";
import https from "node:https";

const baseUrl = process.env.HMI_LIVE_BASE_URL ?? "https://heavymetalindex.com";
const delayMs = Number(process.env.HMI_VERIFY_DELAY_MS ?? 250);

const crosswalkSlugs = [
  ...new Set(
    parseCsv(
      fs.readFileSync("data/evidence/product_regulatory_crosswalk.csv", "utf8"),
    ).map((row) => row.product_slug),
  ),
];

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
];

const productSlugs = [
  ...new Set([...crosswalkSlugs, ...category5Slugs]),
].sort();

const pageChecks = [
  {
    url: `${baseUrl}/products/regulatory-crosswalk-field-findings`,
    mustContain: "Regulatory Crosswalk vs Field Findings",
  },
  ...productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    mustContain: "Standards Evidence Matrix",
  })),
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const request = https
      .get(
        url,
        {
          headers: {
            "user-agent": "HeavyMetalIndex live verifier/1.0",
            accept: "text/html,application/json;q=0.9,*/*;q=0.8",
          },
        },
        (res) => {
          let body = "";
          res.setEncoding("utf8");
          res.on("data", (chunk) => (body += chunk));
          res.on("end", () =>
            resolve({ statusCode: res.statusCode, headers: res.headers, body }),
          );
        },
      )
      .on("error", reject);
    request.setTimeout(15000, () =>
      request.destroy(new Error(`Timed out fetching ${url}`)),
    );
  });
}

let failures = 0;
for (const check of pageChecks) {
  const res = await fetchText(check.url);
  const ok = res.statusCode === 200 && res.body.includes(check.mustContain);
  const mitigation = res.headers["x-vercel-mitigated"]
    ? ` ${res.headers["x-vercel-mitigated"]}`
    : "";
  console.log(
    `${ok ? "PASS" : "FAIL"} ${res.statusCode}${mitigation} ${check.url}`,
  );
  if (!ok) failures++;
  if (delayMs > 0) await sleep(delayMs);
}

const indexUrl = `${baseUrl}/static/contentIndex.json`;
const indexRes = await fetchText(indexUrl);
const missing = productSlugs.filter(
  (slug) => !indexRes.body.includes(`products/${slug}`),
);
const indexOk = indexRes.statusCode === 200 && missing.length === 0;
const indexMitigation = indexRes.headers["x-vercel-mitigated"]
  ? ` ${indexRes.headers["x-vercel-mitigated"]}`
  : "";
console.log(
  `${indexOk ? "PASS" : "FAIL"} ${indexRes.statusCode}${indexMitigation} ${indexUrl}`,
);
if (!indexOk) {
  failures++;
  for (const slug of missing.slice(0, 10))
    console.log(`MISSING products/${slug}`);
  if (missing.length > 10)
    console.log(`MISSING ${missing.length - 10} more product slugs`);
}

if (failures > 0) process.exit(1);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = parseCsvLine(lines.shift());
  return lines.map((line) => {
    const cells = parseCsvLine(line);
    return Object.fromEntries(
      headers.map((header, index) => [header, cells[index] ?? ""]),
    );
  });
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index++) {
    const char = line[index];
    if (quoted) {
      if (char === '"' && line[index + 1] === '"') {
        current += '"';
        index++;
      } else if (char === '"') {
        quoted = false;
      } else {
        current += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  cells.push(current);
  return cells;
}
