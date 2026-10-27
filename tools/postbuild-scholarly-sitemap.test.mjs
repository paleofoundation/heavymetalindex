import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import {
  auditPublicSitemaps,
  sitemapLocPaths,
} from "./lib/sitemap-indexability.mjs"

const origin = "https://heavymetalindex.com"
const generator = fileURLToPath(
  new URL("./postbuild-scholarly-sitemap.mjs", import.meta.url),
)
const xml = (paths) =>
  `<urlset>${paths.map((slug) => `<url><loc>${origin}${slug}</loc></url>`).join("")}</urlset>`

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-scholarly-"))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  function write(rel, text) {
    const file = path.join(root, rel)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, text)
  }
  write(
    "vercel.json",
    JSON.stringify({
      redirects: [{ source: "/synthesis/folded", destination: "/metals/lead" }],
    }),
  )
  write(
    "data/redirects/gone-410.json",
    JSON.stringify({ paths: ["/synthesis/gone"] }),
  )
  write("data/redirects/aliases-301.json", JSON.stringify({ linkTargets: {} }))
  const pages = [
    ["index", "", ""],
    ["metals/lead", "type: metal\nupdated: 2026-10-01", ""],
    ["sources/reviewed", "type: source\nauthors: [Verified author]", ""],
    [
      "sources/private",
      "type: source\nnoindex: true",
      '<meta name="robots" content="noindex, follow">',
    ],
    ["sources/pending", "type: source\nevidence_tier: pending", null],
    ["synthesis/draft", "draft: true", null],
    ["synthesis/proof-before-the-floor", "", null],
    ["synthesis/folded", "", ""],
    ["synthesis/gone", "", ""],
    [
      "synthesis/refresh",
      "",
      '<meta http-equiv="refresh" content="0; url=/metals/lead">',
    ],
    ["roadmap", "", '<meta name="robots" content="noindex, follow">'],
  ]
  for (const [slug, metadata, robots] of pages) {
    write(
      `wiki/${slug}.md`,
      `---\ntitle: Reviewed page\n${metadata}\n---\nPublished findings.\n`,
    )
    if (robots !== null) {
      const publicPath = slug === "index" ? "/" : `/${slug}`
      write(
        `public/${slug}.html`,
        `<html><head><link rel="canonical" href="${origin}${publicPath}">${robots}</head><body>Findings.</body></html>`,
      )
    }
  }
  const valid = ["/", "/metals/lead", "/sources/reviewed"]
  write("public/sitemap.xml", xml(valid))
  return { root, write, valid }
}

function run(root) {
  const result = spawnSync(process.execPath, [generator], {
    cwd: root,
    encoding: "utf8",
  })
  assert.equal(result.status, 0, result.stderr)
  return fs.readFileSync(
    path.join(root, "public/sitemap-scholarly.xml"),
    "utf8",
  )
}

test("scholarly output requires main policy membership and successful indexable rendered HTML", (t) => {
  const { root, write, valid } = fixture(t)
  // A stale main sitemap must not make an absent/redirect/noindex page eligible.
  const stale = [
    "/sources/private",
    "/sources/pending",
    "/synthesis/draft",
    "/synthesis/proof-before-the-floor",
    "/synthesis/folded",
    "/synthesis/gone",
    "/synthesis/refresh",
    "/roadmap",
  ]
  write("public/sitemap.xml", xml([...valid, ...stale]))
  assert.deepEqual(
    sitemapLocPaths(run(root)).map((entry) => entry.path),
    valid,
  )
  // Conversely, rendered HTML alone cannot override main publication policy.
  write(
    "public/sitemap.xml",
    xml(valid.filter((slug) => slug !== "/sources/reviewed")),
  )
  assert.deepEqual(
    sitemapLocPaths(run(root)).map((entry) => entry.path),
    ["/", "/metals/lead"],
  )
})

test("both sitemaps reject every noindex, missing, redirect and gone fixture URL", (t) => {
  const { root, write, valid } = fixture(t)
  run(root)
  const check = (result) => {
    assert.deepEqual(result.noindexListed, [])
    assert.deepEqual(result.notIndexable, [])
    assert.deepEqual(result.excludedListed, [])
    assert.deepEqual(result.missing, [])
  }
  const clean = auditPublicSitemaps(path.join(root, "public"), root)
  check(clean.main)
  check(clean.scholarly)
  for (const [file, key] of [
    ["sitemap.xml", "main"],
    ["sitemap-scholarly.xml", "scholarly"],
  ]) {
    for (const bad of [
      "/sources/private",
      "/roadmap",
      "/synthesis/proof-before-the-floor",
      "/synthesis/folded",
      "/synthesis/gone",
      "/synthesis/refresh",
    ]) {
      write(`public/${file}`, xml([...valid, bad]))
      const result = auditPublicSitemaps(path.join(root, "public"), root)[key]
      assert.deepEqual(
        [...result.noindexListed, ...result.notIndexable],
        [`${origin}${bad}`],
        `${file}: ${bad}`,
      )
    }
    write(`public/${file}`, xml(valid))
  }
})

test("missing main sitemap fails without replacing an existing scholarly sitemap", (t) => {
  const { root, write } = fixture(t)
  write("public/sitemap-scholarly.xml", "previous output")
  fs.unlinkSync(path.join(root, "public/sitemap.xml"))
  const result = spawnSync(process.execPath, [generator], {
    cwd: root,
    encoding: "utf8",
  })
  assert.notEqual(result.status, 0)
  assert.equal(
    fs.readFileSync(path.join(root, "public/sitemap-scholarly.xml"), "utf8"),
    "previous output",
  )
})
