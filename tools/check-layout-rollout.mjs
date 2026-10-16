// Usage: node tools/check-layout-rollout.mjs <section> <base-url> <output-dir>
// Requires an existing built preview and Puppeteer (a repository dev dependency).
import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
const [section, base = "http://localhost:8791", output = "/tmp/hmi-layout-qa"] =
  process.argv.slice(2);
fs.mkdirSync(output, { recursive: true });
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
}
const candidates =
  section === "misc"
    ? fs
        .readdirSync("public")
        .filter((p) => p.endsWith(".html"))
        .map((p) => `public/${p}`)
    : walk(`public/${section}`);
const html = candidates
  .filter(
    (p) =>
      p.endsWith(".html") &&
      /class="hero-band/.test(fs.readFileSync(p, "utf8")),
  )
  .sort();
const featured = [
  "index",
  "rice",
  "spinach",
  "wheat",
  "cocoa",
  "sunflower-lecithin",
  "pea-protein",
];
const chosen = [
  ...featured
    .map((s) => `public/${section}/${s}.html`)
    .filter((p) => html.includes(p)),
];
for (let i = 0; chosen.length < Math.min(10, html.length); i++) {
  const p =
    html[
      Math.floor((i * (html.length - 1)) / Math.max(1, 10 - chosen.length))
    ] ?? html[i];
  if (p && !chosen.includes(p)) chosen.push(p);
  if (i > html.length * 2) {
    for (const x of html)
      if (!chosen.includes(x)) {
        chosen.push(x);
        break;
      }
  }
}
const browser = await puppeteer.launch({ headless: true });
const checks = [];
try {
  for (const file of chosen) {
    const slug = file.replace(/^public\//, "").replace(/\.html$/, "");
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    for (const width of [1440, 390, 320]) {
      await page.setViewport({ width, height: 900 });
      const response = await page.goto(`${base}/${slug}.html`, {
        waitUntil: "networkidle0",
      });
      const result = await page.evaluate(() => {
        const img = document.querySelector(".hero-background");
        const facts = [...document.querySelectorAll(".hmi-key-facts li a")];
        const main = document
          .querySelector(".hero-main")
          .getBoundingClientRect();
        const sidebar = document
          .querySelector(".hero-sidebar")
          .getBoundingClientRect();
        return {
          overflow: document.documentElement.scrollWidth > innerWidth,
          hero: img?.getAttribute("src"),
          imageLoaded: !!img?.naturalWidth,
          sidebar: !!document.querySelector(
            ".hero-snapshot, .author-affiliations",
          ),
          facts: facts.length,
          factColors: [...new Set(facts.map((a) => getComputedStyle(a).color))],
          brokenFactLinks: facts.filter(
            (a) => !document.getElementById(a.hash.slice(1)),
          ).length,
          stacked: sidebar.top >= main.bottom - 1,
          columns: sidebar.left >= main.right - 1,
        };
      });
      const pass =
        response.status() === 200 &&
        !result.overflow &&
        result.imageLoaded &&
        result.sidebar &&
        result.facts <= 3 &&
        result.factColors.every((color) => color === "rgb(255, 255, 255)") &&
        !result.brokenFactLinks &&
        (width <= 800 ? result.stacked : result.columns);
      checks.push({ slug, width, status: response.status(), ...result, pass });
      if (chosen.indexOf(file) < 2 && width !== 320)
        await page.screenshot({
          path: `${output}/${section}-${chosen.indexOf(file)}-${width}.png`,
          fullPage: false,
        });
    }
    await page.close();
  }
} finally {
  await browser.close();
}
const inventory = html.map((file) => ({
  slug: file.replace(/^public\//, "").replace(/\.html$/, ""),
  placeholder:
    /class="hero-background"[^>]*src="\/static\/heroes\/section-/.test(
      fs.readFileSync(file, "utf8"),
    ),
}));
const report = {
  section,
  pages: html.length,
  placeholder: inventory.filter((p) => p.placeholder).length,
  real: inventory.filter((p) => !p.placeholder).length,
  samplePages: chosen.length,
  checks,
  failed: checks.filter((c) => !c.pass),
};
fs.writeFileSync(
  `${output}/${section}.json`,
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify({ ...report, checks: undefined }));
if (report.failed.length) process.exitCode = 1;
