import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { isIntentionallyGone } from "./gone-410.js"

const goneList = JSON.parse(
  readFileSync(new URL("../data/redirects/gone-410.json", import.meta.url), "utf8"),
) as { paths: string[] }
const redirects = JSON.parse(
  readFileSync(new URL("../data/redirects/hmi-404-2026-10-13.json", import.meta.url), "utf8"),
) as { source: string; destination: string; statusCode: number }[]
const vercel = JSON.parse(
  readFileSync(new URL("../vercel.json", import.meta.url), "utf8"),
) as { redirects: { source: string; destination: string; statusCode: number }[] }

const gone = new Set(goneList.paths)

test("dossier prefix and listed removals are gone, including a trailing slash", () => {
  assert.equal(isIntentionallyGone("/dossiers", gone), true)
  assert.equal(isIntentionallyGone("/dossiers/baby-wipes", gone), true)
  assert.equal(isIntentionallyGone("/dossiers/baby-wipes/", gone), true)
  assert.equal(isIntentionallyGone("/__test_barrier__/", gone), true)
  assert.equal(isIntentionallyGone("/ingredients/breast%20milk", gone), true)
  assert.equal(isIntentionallyGone("/ingredients/infant%20formula", gone), true)
})

test("live staff portal and ingredient aliases are not marked gone", () => {
  assert.equal(isIntentionallyGone("/staff", gone), false)
  assert.equal(isIntentionallyGone("/staff/login", gone), false)
  assert.equal(isIntentionallyGone("/ingredients/carrots", gone), false)
  assert.equal(isIntentionallyGone("/ingredients/carrot", gone), false)
  assert.equal(isIntentionallyGone("/sources", gone), false)
})

test("the 186 cleanup redirects are permanent and present in vercel.json", () => {
  assert.equal(redirects.length, 186)
  const deployed = new Map(vercel.redirects.map((entry) => [entry.source, entry]))
  for (const entry of redirects) {
    const match = deployed.get(entry.source)
    assert.ok(match, entry.source)
    assert.equal(match?.destination, entry.destination)
    assert.equal(match?.statusCode, 301)
    assert.equal(entry.statusCode, 301)
  }
  // 188 before HMI-HELD-TRIAGE-1, which added 65 one-hop 301s for held FOLD/REMOVE pages (25 Oct 2026),
  // plus the named HMI-GSC-BUCKETS-1 source rules below (26 Oct 2026).
  assert.equal(vercel.redirects.length, 253 + GSC_SOURCE_RULES.length)
})

// HMI-GSC-BUCKETS-1 step 1: /metals/sources/<id> never existed (relative source links read from a
// trailing-slash URL). Two renamed ids go one hop to their final record; the wildcard covers the rest.
const GSC_SOURCE_RULES = [
  { source: "/metals/sources/fda-iAs-rice-cereal-2020", destination: "/sources/fda2020-ias-infant-rice-cereal-guidance" },
  { source: "/metals/sources/who-gdwq-2022-fourth-edition", destination: "/sources/who2022-guidelines-drinking-water-quality" },
  { source: "/metals/sources/:id", destination: "/sources/:id" },
]

test("the GSC source rules are permanent, named, and the explicit ones come before the wildcard", () => {
  const sources = vercel.redirects.map((entry) => entry.source)
  for (const rule of GSC_SOURCE_RULES) {
    const match = vercel.redirects.find((entry) => entry.source === rule.source)
    assert.ok(match, rule.source)
    assert.equal(match?.destination, rule.destination)
    assert.equal(match?.statusCode, 301)
  }
  const wildcard = sources.indexOf("/metals/sources/:id")
  assert.ok(sources.indexOf(GSC_SOURCE_RULES[0].source) < wildcard)
  assert.ok(sources.indexOf(GSC_SOURCE_RULES[1].source) < wildcard)
})

test("gone paths do not overlap redirect sources", () => {
  const sources = new Set(vercel.redirects.map((entry) => entry.source))
  for (const path of goneList.paths) {
    assert.equal(sources.has(path), false, path)
  }
})
