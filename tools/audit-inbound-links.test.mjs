import test from "node:test"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import assert from "node:assert/strict"
import { readLinkPage, summarizeInbound } from "./audit-inbound-links.mjs"

const page = (file, body = "", head = "") =>
  readLinkPage(`<html><head><title>Page</title>${head}</head><body>${body}</body></html>`, file)

test("only rendered anchor navigation earns an inbound source; metadata and graphs do not", () => {
  const report = summarizeInbound([
    page(
      "index.html",
      '<a href="/rice">Rice</a><a href="/rice.html?q=1#x">Again</a><script>{"href":"/orphan"}</script><link href="/orphan">',
    ),
    page(
      "rice.html",
      '<a href="#self">Self</a>',
      '<link rel="canonical" href="https://heavymetalindex.com/rice">',
    ),
    page("orphan.html", "", '<link rel="canonical" href="https://heavymetalindex.com/orphan">'),
  ])
  assert.equal(report.pages.find((p) => p.path === "/rice").inbound_count, 1)
  assert.ok(report.zero.some((p) => p.path === "/orphan"))
})

test("relative links, entities, same-site URLs and equivalent folder paths deduplicate", () => {
  const report = summarizeInbound([
    page(
      "folder/index.html",
      '<a href="../target/?q=a&amp;b=c#one">One</a><a href="https://www.heavymetalindex.com/target/index.html#two">Two</a><a href="https://example.com/target">External</a>',
    ),
    page("target/index.html"),
    page("target.html", "", '<link rel="canonical" href="https://heavymetalindex.com/target/">'),
  ])
  assert.equal(report.indexable_pages, 2)
  assert.deepEqual(report.one[0].inbound, ["/folder"])
})

test("hidden and inert trees, refresh aliases, gone pages and nofollow documents do not contribute", () => {
  const registry = { linkTargets: { "/alias": "/target" } }
  const report = summarizeInbound(
    [
      page(
        "index.html",
        '<div hidden><a href="/target">Hidden</a></div><template><a href="/target">Template</a></template><div aria-hidden="true"><a href="/target">Invisible</a></div><div inert><a href="/target">Inert</a></div><div style="display:none"><a href="/target">CSS</a></div><a href="/alias">Alias</a><a href="/gone">Gone</a>',
      ),
      page(
        "alias.html",
        '<a href="/target">Redirect</a>',
        '<meta http-equiv="refresh" content="0;url=/target">',
      ),
      page("gone.html", '<a href="/target">Removed</a>'),
      page(
        "nofollow.html",
        '<a href="/target">No follow</a>',
        '<meta name="robots" content="noindex,nofollow">',
      ),
      page("target.html"),
    ],
    registry,
    new Set(["/gone"]),
  )
  assert.equal(report.invalid.length, 2)
  assert.ok(report.zero.some((p) => p.path === "/target"))
  assert.ok(!report.pages.some((p) => ["/alias", "/gone"].includes(p.path)))
})

test("published noindex follow pages contribute real navigation but are not orphan targets", () => {
  const report = summarizeInbound([
    page(
      "index.html",
      '<a href="/target">Target</a>',
      '<meta name="robots" content="noindex,follow">',
    ),
    page("target.html"),
  ])
  assert.equal(report.indexable_pages, 1)
  assert.deepEqual(report.one[0].inbound, ["/"])
})

test("canonical copies share a source identity while independent documents earn distinct inbound links", () => {
  const report = summarizeInbound([
    page("source.html", '<a href="/target">Target</a>'),
    page("source/index.html", '<a href="/target#part">Target</a>'),
    page("second.html", '<a href="/target?q=1">Target</a>'),
    page("target.html"),
  ])
  assert.deepEqual(report.pages.find((p) => p.path === "/target").inbound, ["/second", "/source"])
})

test("verification payloads with injected structured data are not indexable content", () => {
  const record = readLinkPage(
    'google-site-verification: googleabcdef.html<script type="application/ld+json">{}</script>',
    "static/googleabcdef.html",
  )
  assert.equal(record.indexable, false)
  assert.equal(summarizeInbound([record]).indexable_pages, 0)
})

test("CLI fails on a real orphan and passes only after navigable anchors connect both pages", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-inbound-"))
  try {
    fs.writeFileSync(path.join(directory, "index.html"), "<title>Home</title>")
    fs.writeFileSync(
      path.join(directory, "target.html"),
      '<title>Target</title><a href="/">Home</a>',
    )
    const run = () =>
      spawnSync(
        process.execPath,
        ["tools/audit-inbound-links.mjs", `--dir=${directory}`, "--json"],
        { encoding: "utf8" },
      )
    const before = run()
    assert.equal(before.status, 1, before.stderr)
    assert.deepEqual(
      JSON.parse(before.stdout).zero.map((p) => p.path),
      ["/target"],
    )
    fs.writeFileSync(
      path.join(directory, "index.html"),
      '<title>Home</title><a href="/target">Target</a>',
    )
    const after = run()
    assert.equal(after.status, 0, after.stderr)
    assert.equal(JSON.parse(after.stdout).zero.length, 0)
  } finally {
    fs.rmSync(directory, { recursive: true, force: true })
  }
})

test("permanently hidden home and Ask layout containers cannot supply navigation", () => {
  const report = summarizeInbound([
    page(
      "index.html",
      '<div class="proof-home"><aside class="rail"><a href="/orphan">Hidden</a></aside><main><a href="/target">Visible</a></main></div>',
    ),
    page(
      "ask.html",
      '<div class="proof-ask"><div class="page-footer"><a href="/orphan">Hidden</a></div></div>',
    ),
    page(
      "normal.html",
      '<div class="proof"><div class="page-footer"><a href="/target">Visible</a></div></div>',
    ),
    page("target.html"),
    page("orphan.html"),
  ])
  assert.ok(report.zero.some((p) => p.path === "/orphan"))
  assert.deepEqual(report.pages.find((p) => p.path === "/target").inbound, ["/", "/normal"])
})
