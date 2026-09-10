import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { basename } from "node:path"
import test from "node:test"

const META_CONTENT = "sy1JoHaUgb_tWsBU9HY7Ca5T0NtXQGSTpAg0_nmV9eE"
const VERIFY_FILES = ["quartz/static/googlef9d9992d08f1cc58.html"]

test("GSC HTML files keep the exact verification string", async () => {
  for (const path of VERIFY_FILES) {
    const token = basename(path)
    const body = await readFile(path)
    assert.equal(body.length, 53)
    assert.deepEqual(body, Buffer.from(`google-site-verification: ${token}`))
  }
})

test("Head emits the URL-prefix google-site-verification meta", async () => {
  const head = await readFile("quartz/components/Head.tsx", "utf8")
  assert.match(
    head,
    new RegExp(
      `<meta name="google-site-verification" content="${META_CONTENT}" />`,
    ),
  )
})

test("Vercel keeps cleanUrls and rewrites extensionless GSC tokens", async () => {
  const vercel = JSON.parse(await readFile("vercel.json", "utf8"))
  assert.equal(vercel.cleanUrls, true)
  assert.ok(
    vercel.rewrites?.some(
      (rule) =>
        rule.source === "/google:file" && rule.destination === "/google:file.html",
    ),
    "expected a /google:file rewrite that does not disable cleanUrls",
  )
})

test("Static emitter copies root-level google*.html to the site root", async () => {
  const source = await readFile("quartz/plugins/emitters/static.ts", "utf8")
  assert.match(source, /GSC_HTML_VERIFY/)
  assert.match(source, /argv\.output/)
  assert.match(source, /google\[0-9a-f\]\+/)
})
