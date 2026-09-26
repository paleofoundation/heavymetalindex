import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"

const BATCH = "mineral-baby-sunscreens-2026-09-26"
const values = fs
  .readFileSync("data/evidence/values.jsonl", "utf8")
  .split("\n")
  .filter(Boolean)
  .map((l) => JSON.parse(l))
  .filter((r) => r.promotion_batch === BATCH)

function csv(path) {
  const [head, ...lines] = fs.readFileSync(path, "utf8").trim().split("\n")
  const cols = head.split(",")
  return lines.map((line) => {
    const cells = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map((c) => c.replace(/,$/, "").replace(/^"|"$/g, "").replace(/""/g, '"'))
    return Object.fromEntries(cols.map((c, i) => [c, cells[i] ?? ""]))
  })
}

const flags = csv("data/evidence/mineral-baby-sunscreens-ingest-2026-09-26-flags.csv")
const unresolved = new Set(flags.filter((f) => f.status === "UNRESOLVED").map((f) => f.flag_id))
const ledger = new Map(csv("docs/briefs/mineral-baby-sunscreens-number-ledger.csv").map((r) => [r.row_id, r]))

test("promoted mineral sunscreen rows carry no unresolved flag", () => {
  assert.ok(values.length > 0)
  for (const v of values) {
    const row = ledger.get(v.ledger_row)
    assert.ok(row, v.ledger_row)
    for (const f of row.flag_ids.split(";").filter(Boolean)) assert.ok(!unresolved.has(f), `${v.ledger_row} ${f}`)
  }
})

test("each laboratory test is counted once and no screening or raw-material row is promoted", () => {
  const keys = new Set()
  for (const v of values) {
    assert.match(v.source_id, /^rubin202[56]-/)
    const row = ledger.get(v.ledger_row)
    assert.doesNotMatch(row.matrix, /zinc oxide powder/)
    const sameTest = (row.note.match(/same test as laboratory case (\d+)/) || [])[1]
    const test = sameTest || v.sample_code
    const key = `${test}|${v.metal_species}`
    assert.ok(!keys.has(key), key)
    keys.add(key)
  }
})

test("values are mg/kg total content converted from printed ppb; non-detects are censored, never zero", () => {
  for (const v of values) {
    assert.equal(v.normalized_unit, "mg/kg")
    assert.equal(v.original_unit, "ppb")
    if (v.censoring === "quantified") assert.ok(Math.abs(v.normalized_value * 1000 - v.original_value) < 1e-6)
    else {
      assert.equal(v.normalized_value, null)
      assert.ok(v.censoring_limit > 0)
    }
  }
})
