import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { auditDeadInternalHrefs } from "./audit-dead-internal-hrefs.mjs"

const repoRoot = process.cwd()

function fixture(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-hrefs-"))
  for (const [rel, body] of Object.entries(files)) {
    const full = path.join(dir, rel)
    fs.mkdirSync(path.dirname(full), { recursive: true })
    fs.writeFileSync(full, body)
  }
  return dir
}

test("a redirect source is served and a missing page is not", () => {
  const publicDir = fixture({
    "index.html": `<a href="/ingredients/almonds">old</a><a href="/no-such-page">missing</a><a href="/ingredients/almond">live</a><a href="/api/evidence-packet?slug=about&amp;format=json">packet</a>`,
    "ingredients/almond.html": `<a href="../index">home</a>`,
    "sitemap.xml": "<urlset><url><loc>https://heavymetalindex.com/ingredients/almond</loc></url></urlset>",
  })
  const result = auditDeadInternalHrefs({ publicDir, repoRoot })
  assert.deepEqual(
    result.dead.map((item) => item.target),
    ["/no-such-page"],
  )
  assert.deepEqual(result.sitemap, [])
})

test("sitemap locs for redirects and removed pages fail", () => {
  const publicDir = fixture({
    "index.html": `<a href="/">home</a>`,
    "sitemap.xml":
      "<urlset><url><loc>https://heavymetalindex.com/ingredients/almonds</loc></url><url><loc>https://heavymetalindex.com/dossiers/baby-wipes</loc></url></urlset>",
  })
  const result = auditDeadInternalHrefs({ publicDir, repoRoot })
  assert.deepEqual(result.dead, [])
  assert.deepEqual(result.sitemap, ["/ingredients/almonds", "/dossiers/baby-wipes"])
})

test("hash, mailto, and off-site links are ignored", () => {
  const publicDir = fixture({
    "index.html": `<a href="#section">s</a><a href="mailto:karen@paleofoundation.com">m</a><a href="https://example.com/missing">e</a>`,
    "sitemap.xml": "<urlset></urlset>",
  })
  const result = auditDeadInternalHrefs({ publicDir, repoRoot })
  assert.deepEqual(result.dead, [])
  assert.deepEqual(result.sitemap, [])
})

test("aliases and gone paths fail even when corresponding HTML exists", () => {
  const publicDir = fixture({
    "index.html": '<a href="/ingredients/maize">alias</a><a href="/ingredients/human-milk/">gone</a><a href="/dossiers/unlisted">gone prefix</a>',
    "ingredients/maize.html": "alias stub",
    "ingredients/human-milk.html": "old page",
    "dossiers/unlisted.html": "old dossier",
    "sitemap.xml": '<urlset><url><loc>https://heavymetalindex.com/ingredients/maize</loc></url></urlset>',
  })
  const result = auditDeadInternalHrefs({ publicDir, repoRoot })
  assert.equal(result.dead.length, 0)
  assert.deepEqual(result.alias.map((item) => item.target), ["/ingredients/maize"])
  assert.deepEqual(result.gone.map((item) => item.target), ["/ingredients/human-milk", "/dossiers/unlisted"])
  assert.deepEqual(result.sitemap, ["/ingredients/maize"])
})
