import test from "node:test"
import assert from "node:assert/strict"
import { eventsPath, intakesPath, readJsonl } from "./regulatory-watch-common.mjs"

const events = readJsonl(eventsPath)
const intakes = readJsonl(intakesPath)
const byId = new Map(events.map((event) => [event.event_id, event]))
const roundupId = "rw-intake-2026-08-24-worldwide-roundup"
const catchupId = "rw-intake-2026-09-26-catchup-14-26-sep"

test("roundup reconciles exactly 21 unique clusters", () => {
  const roundup = events.filter((event) => event.intake_id === roundupId)
  assert.equal(roundup.length, 21)
  assert.equal(new Set(roundup.map((event) => event.event_id)).size, 21)
  assert.equal(new Set(roundup.map((event) => event.cluster)).size, 21)
  assert.deepEqual(roundup.map((event) => event.cluster), Array.from({ length: 21 }, (_, i) => i + 1))
})

test("14-26 Sep 2026 catch-up is hub-only and keeps leads out of the numeric register", () => {
  const intake = intakes.find((item) => item.intake_id === catchupId)
  const catchup = events.filter((event) => event.intake_id === catchupId)
  assert.equal(intake.cluster_count, 12)
  assert.equal(catchup.length, 12)
  assert.deepEqual(catchup.map((event) => event.cluster), Array.from({ length: 12 }, (_, i) => i + 1))

  const fda = byId.get("rw-2026-22-fda-21cfr-172383")
  assert.equal(fda.status, "in-force")
  assert.equal(fda.disposition, "hub-only")
  assert.equal(fda.verification.state, "verified-primary")
  assert.equal(fda.article_slugs.length, 0)
  assert.equal(fda.dates.effective, "2026-09-25")
  assert.deepEqual(fda.hmi_routes.regulatory_limit_ids, [
    "fda2026_21cfr172383_pb_vitd2_inactive_bakers_yeast_0_5mgkg",
    "fda2026_21cfr172383_tas_vitd2_inactive_bakers_yeast_0_3mgkg",
    "fda2026_21cfr172383_cd_vitd2_inactive_bakers_yeast_0_5mgkg",
    "fda2026_21cfr172383_thg_vitd2_inactive_bakers_yeast_0_1mgkg",
  ])

  const drafts = [
    "rw-2026-23-ukraine-mineral-water-draft",
    "rw-2026-24-tanzania-herbal-face-mask-draft",
    "rw-2026-25-tanzania-magnesium-oxide-draft",
    "rw-2026-26-tanzania-skin-cleanser-draft",
    "rw-2026-27-kenya-dars-2214-wet-wipes-draft",
    "rw-2026-28-eac-deas-1308-toy-balloons-draft",
    "rw-2026-29-rwanda-drs-650-cake-gel-draft",
  ]
  for (const id of drafts) {
    const event = byId.get(id)
    assert.equal(event.status, "consultation")
    assert.equal(event.disposition, "hub-only")
    assert.equal(event.verification.state, "verified-primary")
    assert.ok(event.dates.consultation_close)
    assert.ok(event.dates.next_review)
    assert.ok(event.hmi_routes.regulatory_limit_ids.length > 0)
    assert.equal(event.article_slugs.length, 0)
  }

  const leads = [
    "rw-2026-30-kenya-dars-1590-textiles-lead",
    "rw-2026-31-tanzania-fish-nuggets-lead",
    "rw-2026-32-china-nhc-samr-2026-no6-lead",
    "rw-2026-33-efsa-e962-lead",
  ]
  for (const id of leads) {
    const event = byId.get(id)
    assert.equal(event.disposition, "unverified-gap")
    assert.notEqual(event.verification.state, "verified-primary")
    assert.deepEqual(event.hmi_routes.regulatory_limit_ids, [])
    assert.equal(event.article_slugs.length, 0)
  }

  const nuggets = byId.get("rw-2026-31-tanzania-fish-nuggets-lead")
  assert.equal(nuggets.verification.state, "partial-primary")
  assert.equal(nuggets.status, "consultation")
  assert.equal(nuggets.dates.published, "2026-09-25")
  assert.equal(nuggets.dates.consultation_close, "2026-11-24")
  assert.equal(nuggets.official_sources[0].url, "https://members.wto.org/crnattachments/2026/SPS/TZA/26_05032_00_e.pdf")

  const oxide = byId.get("rw-2026-25-tanzania-magnesium-oxide-draft")
  assert.ok(oxide.analytes.includes("As-as-As2O3"))
  assert.ok(!oxide.analytes.includes("tAs"))
  const balloons = byId.get("rw-2026-28-eac-deas-1308-toy-balloons-draft")
  assert.match(balloons.summary, /basis is recorded as not stated/i)
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
