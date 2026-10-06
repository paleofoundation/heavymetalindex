import test from "node:test"
import assert from "node:assert/strict"
import { eventsPath, intakesPath, readJsonl } from "./regulatory-watch-common.mjs"

const events = readJsonl(eventsPath)
const intakes = readJsonl(intakesPath)
const byId = new Map(events.map((event) => [event.event_id, event]))
const roundupId = "rw-intake-2026-08-24-worldwide-roundup"

test("roundup reconciles exactly 21 unique clusters", () => {
  const roundup = events.filter((event) => event.intake_id === roundupId)
  assert.equal(roundup.length, 21)
  assert.equal(new Set(roundup.map((event) => event.event_id)).size, 21)
  assert.equal(new Set(roundup.map((event) => event.cluster)).size, 21)
  assert.deepEqual(roundup.map((event) => event.cluster), Array.from({ length: 21 }, (_, i) => i + 1))
})

test("2026-10-05 Viet Nam MOIT drafts are hub-only consultations with no limit rows", () => {
  const intakeId = "rw-intake-2026-10-05-vn-moit-wto"
  const intake = intakes.find((item) => item.intake_id === intakeId)
  const owned = events.filter((event) => event.intake_id === intakeId)
  assert.equal(intake.cluster_count, 2)
  assert.equal(intake.sha256, "01c4e33b2e7c2688515462d6a45734a1a9e0fe7307b8d07058b3113085928fcd")
  assert.equal(owned.length, 2)
  assert.deepEqual(owned.map((event) => event.cluster), [1, 2])

  const noodles = byId.get("rw-2026-10-05-vnm-451-fresh-rice-noodles")
  const snacks = byId.get("rw-2026-10-05-vnm-452-snack-products")
  for (const event of [noodles, snacks]) {
    assert.equal(event.status, "consultation")
    assert.equal(event.disposition, "hub-only")
    assert.equal(event.verification.state, "verified-primary")
    assert.equal(event.article_slugs.length, 0)
    assert.deepEqual(event.hmi_routes.regulatory_limit_ids, [])
    assert.equal(event.dates.consultation_close, "2026-11-30")
    assert.equal(event.dates.next_review, "2026-12-01")
    assert.equal(event.dates.adopted, null)
    assert.equal(event.dates.effective, null)
    assert.equal(event.dates.published, "2026-10-01")
    const prose = `${event.title}\n${event.summary}\n${event.verification.notes}`.toLowerCase()
    assert.equal(prose.includes("in force"), false, event.event_id)
    assert.equal(prose.includes("effective"), false, event.event_id)
    assert.equal(prose.includes("binding"), false, event.event_id)
    assert.equal(prose.includes("ppb"), false, event.event_id)
    assert.equal(prose.includes("µg/kg"), false, event.event_id)
    assert.equal(prose.includes("hmtc"), false, event.event_id)
    assert.equal(prose.includes("certification"), false, event.event_id)
  }
  assert.deepEqual(noodles.analytes, ["Pb", "As-species-not-stated", "Cd", "Hg-species-not-stated"])
  assert.ok(!noodles.analytes.includes("iAs"))
  assert.ok(!noodles.analytes.includes("tAs"))
  assert.match(noodles.verification.notes, /Asen \(As\) 0,5/)
  assert.match(noodles.verification.notes, /Chì \(Pb\) 0,2/)
  assert.match(noodles.verification.notes, /Thủy ngân \(Hg\) 0,02/)
  assert.deepEqual(snacks.analytes, ["Pb", "tAs", "Cd", "Hg-species-not-stated"])
  assert.ok(!snacks.analytes.includes("iAs"))
  assert.match(snacks.verification.notes, /Asen tổng số \(As\) 0,5/)
})

test("2026-10-06 Korea MOTIR toy draft is one hub-only consultation with no limit rows", () => {
  const intakeId = "rw-intake-2026-10-06-kr-motir-wto"
  const intake = intakes.find((item) => item.intake_id === intakeId)
  const owned = events.filter((event) => event.intake_id === intakeId)
  assert.equal(events.length, 24)
  assert.equal(intake.cluster_count, 1)
  assert.equal(intake.sha256, "01c4e33b2e7c2688515462d6a45734a1a9e0fe7307b8d07058b3113085928fcd")
  assert.equal(owned.length, 1)
  assert.equal(owned[0].cluster, 1)

  const event = byId.get("rw-2026-10-06-kor-1384-toy-safety")
  assert.equal(event.status, "consultation")
  assert.equal(event.disposition, "hub-only")
  assert.equal(event.verification.state, "verified-primary")
  assert.equal(event.article_slugs.length, 0)
  assert.deepEqual(event.hmi_routes.regulatory_limit_ids, [])
  assert.equal(event.dates.published, "2026-10-02")
  assert.equal(event.dates.consultation_close, "2026-12-01")
  assert.equal(event.dates.next_review, "2026-12-02")
  assert.equal(event.dates.adopted, null)
  assert.equal(event.dates.effective, null)
  assert.ok(event.domains.includes("consumer-products"))
  assert.deepEqual(event.analytes, ["Pb", "Al", "Cd", "Hg-species-not-stated", "Cr-VI"])
  assert.ok(!event.analytes.includes("Cr-total"))
  assert.ok(!event.analytes.includes("iAs"))
  assert.ok(!event.analytes.includes("tAs"))
  assert.notEqual(event.event_id, "rw-2026-07-korea-taiwan-hong-kong")
  const prose = `${event.title}\n${event.summary}\n${event.verification.notes}`.toLowerCase()
  assert.equal(prose.includes("in force"), false)
  assert.equal(prose.includes("effective"), false)
  assert.equal(prose.includes("binding"), false)
  assert.equal(prose.includes("ppb"), false)
  assert.equal(prose.includes("µg/kg"), false)
  assert.equal(prose.includes("hmtc"), false)
  assert.equal(prose.includes("certification"), false)
  assert.match(event.verification.notes, /2 250/)
  assert.match(event.verification.notes, /28 130/)
  assert.match(event.verification.notes, /5 625/)
  assert.match(event.verification.notes, /70 000/)
  assert.match(event.verification.notes, /10 ㎎\/㎏ 이하/)
  assert.match(event.verification.notes, /총 합 100 mg\/kg 이하/)
  assert.match(event.verification.notes, /6가 크로뮴 \(Cr \(Ⅵ\)\) 0\.02 \/ 0\.005 \/ 0\.2/)
})

test("amendments and delayed application preserve legal status", () => {
  const china = byId.get("rw-2026-03-china-gb2762-2025")
  assert.equal(china.status, "adopted-not-effective")
  assert.equal(china.dates.effective, "2026-09-02")
  const nickel = byId.get("rw-2026-02-eu-nickel-deadlines")
  assert.equal(nickel.status, "in-force")
  assert.equal(nickel.dates.transition, "2026-07-01")
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
