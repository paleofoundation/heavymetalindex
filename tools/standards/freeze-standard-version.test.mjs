// freeze-standard-version.test.mjs — ORDER S-DOI-TAS-1: tAs stays on the claim
// surface; iAs is an additional species row and never substitutes for the parent total.
// Run: node --test tools/standards/freeze-standard-version.test.mjs
import { test } from "node:test"
import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { join, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import {
  TOTAL_ANALYTES,
  TOTAL_CLAIM_ANALYTES,
  claimAnalytesFor,
  assertClaimPanel,
  claimHeaderLine,
  isFirmClaimCell,
  mandatoryIasNumeric,
} from "./hmtc-analyte-panel.mjs"

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, "../..")
const SLUG = "baby-cereals-dry-rice-based"
const COMPILED = join(REPO, "data/workbench/standards/cat1-compiled", `${SLUG}.json`)

const std = () => JSON.parse(readFileSync(COMPILED, "utf8"))

test("TOTAL_CLAIM_ANALYTES is exactly the eight totals and includes tAs, not iAs", () => {
  const keys = TOTAL_CLAIM_ANALYTES.map((a) => a.key)
  assert.deepEqual(keys, TOTAL_ANALYTES)
  assert.ok(keys.includes("tAs"))
  assert.ok(!keys.includes("iAs"), "iAs must not occupy a total slot")
  assert.equal(keys.length, 8)
  const tas = TOTAL_CLAIM_ANALYTES.find((a) => a.key === "tAs")
  assert.match(tas.disp, /Total arsenic/)
  assert.doesNotMatch(tas.disp, /Inorganic/)
})

test("rice-cereal canary publishes tAs then iAs as an additional row", () => {
  const s = std()
  const rows = claimAnalytesFor(s, s.variants.both)
  const keys = rows.map((a) => a.key)
  assert.ok(keys.includes("tAs"))
  assert.ok(keys.includes("iAs"))
  assert.ok(keys.indexOf("tAs") < keys.indexOf("iAs"), "iAs follows tAs; it does not replace it")
  assert.equal(keys.filter((k) => TOTAL_ANALYTES.includes(k)).length, 8)
  const tas = rows.find((a) => a.key === "tAs")
  const ias = rows.find((a) => a.key === "iAs")
  assert.equal(tas.disp, "Total arsenic (tAs)")
  assert.equal(ias.disp, "Inorganic arsenic (iAs)")
  assert.equal(s.variants.both.tAs.value, 50)
  assert.equal(s.variants.both.tAs.binding_jurisdiction, "IN")
  assert.equal(s.variants.both.iAs.value, 50)
  assert.equal(s.variants.both.iAs.binding_jurisdiction, "US")
  assert.equal(s.variants.both.iAs.capped_by_parent, true)
  assert.equal(s.variants.both.iAs.uncapped_species_value, 100)
  assert.ok(s.variants.both.iAs.value <= s.variants.both.tAs.value)
  assert.ok(isFirmClaimCell(s.variants.both.tAs))
  assert.ok(isFirmClaimCell(s.variants.both.iAs))
})

test("header counts eight totals and names iAs as plus, never 8/8-via-substitution", () => {
  const header = claimHeaderLine(std())
  assert.match(header, /8\/8 totals with a published limit/)
  assert.match(header, /plus Inorganic arsenic \(iAs\)/)
  assert.doesNotMatch(header, /9\/9/)
  assert.doesNotMatch(header, /8\/8 analytes/)
})

test("assertClaimPanel accepts the rice-cereal canary", () => {
  assert.doesNotThrow(() => assertClaimPanel(std()))
})

test("freeze fails if any TOTAL_ANALYTES cell is missing", () => {
  const mutated = std()
  delete mutated.variants.both.Pb
  assert.throws(
    () => assertClaimPanel(mutated),
    /missing TOTAL_ANALYTES claim cells: Pb/,
  )
})

test("freeze fails if iAs is published without tAs (species never substitutes)", () => {
  const mutated = std()
  mutated.variants.both.tAs = { type: "subsumed", value: null }
  assert.throws(
    () => assertClaimPanel(mutated),
    /publishes iAs without a firm tAs parent total/,
  )
})

test("rice/infant/baby-cereal without firm iAs fails (mandatory species beside tAs)", () => {
  assert.ok(mandatoryIasNumeric(SLUG, "Baby cereals / grain products, dry (rice-based)"))
  const mutated = std()
  mutated.variants.both.iAs = { type: "subsumed", value: null }
  assert.throws(
    () => assertClaimPanel(mutated),
    /requires firm numeric iAs alongside tAs/,
  )
})

function pdfText(pdf) {
  const which = spawnSync("which", ["pdftotext"], { encoding: "utf8" })
  if (which.status === 0) {
    const r = spawnSync("pdftotext", ["-layout", pdf, "-"], { encoding: "utf8" })
    if (r.status === 0) return r.stdout
  }
  const py = spawnSync("python3", ["-c", "from pypdf import PdfReader; import sys; r=PdfReader(sys.argv[1]); print('\\n'.join((p.extract_text() or '') for p in r.pages))", pdf], { encoding: "utf8" })
  if (py.status === 0) return py.stdout
  return null
}

test("frozen v1.2 PDF prints Total arsenic (tAs) 50 India and Inorganic arsenic (iAs) 100 FDA", (t) => {
  const pdf = join(REPO, "static/standards", SLUG, "v1.2", "standard.pdf")
  if (!existsSync(pdf)) {
    t.skip("v1.2 snapshot not present")
    return
  }
  const text = pdfText(pdf)
  if (text == null) {
    t.skip("pdftotext/pypdf not available")
    return
  }
  assert.match(text, /Total arsenic \(tAs\)/)
  assert.match(text, /Inorganic arsenic \(iAs\)/)
  assert.match(text, /8\/8 totals with a published limit/)
  assert.match(text, /plus Inorganic arsenic \(iAs\)/)
  assert.match(text, /Total arsenic \(tAs\).*50.*India.*gov_floor/s)
  assert.match(text, /Inorganic arsenic \(iAs\).*100.*US-FDA.*gov_floor/s)
  assert.doesNotMatch(text, /8\/8 analytes with a published limit/)
  const iasIndia50 = /Inorganic arsenic \(iAs\)[^\n]*50[^\n]*India/.test(text)
  assert.equal(iasIndia50, false, "India 50 must not be labeled as iAs")
})

test("frozen v1.3 PDF prints tAs 50 India AND iAs 50 FDA with disclosed parent cap", (t) => {
  const pdf = join(REPO, "static/standards", SLUG, "v1.3", "standard.pdf")
  if (!existsSync(pdf)) {
    t.skip("v1.3 snapshot not present")
    return
  }
  const text = pdfText(pdf)
  if (text == null) {
    t.skip("pdftotext/pypdf not available")
    return
  }
  assert.match(text, /Total arsenic \(tAs\)/)
  assert.match(text, /Inorganic arsenic \(iAs\)/)
  assert.match(text, /8\/8 totals with a published limit/)
  assert.match(text, /plus Inorganic arsenic \(iAs\)/)
  assert.match(text, /Total arsenic \(tAs\).*50.*India.*gov_floor/s)
  assert.match(text, /Inorganic arsenic \(iAs\).*50.*US-FDA.*gov_floor/s)
  assert.match(text, /min\(species floor, parent total\)|iAs ≤ tAs|capped by/i)
  assert.doesNotMatch(text, /9\/9/)
  assert.doesNotMatch(text, /8\/8 analytes with a published limit/)
})
