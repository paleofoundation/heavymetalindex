import test from "node:test"
import assert from "node:assert/strict"
import { eventsPath, readJsonl } from "./regulatory-watch-common.mjs"

const events = readJsonl(eventsPath)
const byId = new Map(events.map((event) => [event.event_id, event]))

test("ledger keeps unique event ids and roundup clusters 1-21", () => {
  assert.ok(events.length >= 21)
  assert.equal(new Set(events.map((event) => event.event_id)).size, events.length)
  const roundup = events.filter((event) => event.intake_id === "rw-intake-2026-08-24-worldwide-roundup")
  assert.equal(roundup.length, 21)
  assert.equal(new Set(roundup.map((event) => event.cluster)).size, 21)
})

test("amendments and delayed application preserve legal status", () => {
  const china = byId.get("rw-2026-03-china-gb2762-2025")
  assert.equal(china.status, "in-force")
  assert.equal(china.dates.effective, "2026-09-02")
  assert.equal(china.verification.verified_on, "2026-09-14")
  const nickel = byId.get("rw-2026-02-eu-nickel-deadlines")
  assert.equal(nickel.status, "in-force")
  assert.equal(nickel.dates.transition, "2026-07-01")
  const a1329 = byId.get("rw-2026-22-au-nz-a1329-cd-blacklip")
  assert.equal(a1329.status, "in-force")
  assert.equal(a1329.disposition, "covered-existing")
  assert.equal(a1329.dates.transition, "2028-09-02")
})

test("proposals and unverified claims cannot graduate to full articles", () => {
  for (const event of events.filter((item) => ["proposed", "consultation", "monitor-only"].includes(item.status))) {
    assert.ok(event.dates.next_review)
    if (event.verification.state !== "verified-primary") assert.equal(event.disposition, "unverified-gap")
  }
})

test("multi-instrument, testing-only and non-food events retain their domains", () => {
  assert.equal(byId.get("rw-2026-07-korea-taiwan-hong-kong").instrument_ids.length, 3)
  assert.equal(byId.get("rw-2026-15-california-crvi-water").event_type, "testing-method")
  assert.ok(byId.get("rw-2026-16-eu-packaging-mercury").domains.includes("packaging"))
})

test("neutral ledger contains no certification-impact fields or Cr species conflation", () => {
  for (const event of events) {
    assert.equal(Object.hasOwn(event, "hmtc_impact"), false)
    assert.ok(!(event.analytes.includes("Cr-VI") && event.analytes.includes("Cr-total")))
  }
})
