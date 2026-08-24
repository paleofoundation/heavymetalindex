#!/usr/bin/env node
import { asDate, eventsPath, intakesPath, readJsonl } from "./regulatory-watch-common.mjs"

const args = process.argv.slice(2)
const asOfArg = args.includes("--as-of") ? args[args.indexOf("--as-of") + 1] : new Date().toISOString().slice(0, 10)
const asOf = asDate(asOfArg)
const errors = []
const intakes = readJsonl(intakesPath)
const events = readJsonl(eventsPath)

for (const intake of intakes) {
  const owned = events.filter((event) => event.intake_id === intake.intake_id)
  const clusters = new Set(owned.map((event) => event.cluster))
  if (owned.length !== intake.cluster_count) errors.push(`${intake.intake_id}: expected ${intake.cluster_count} events, found ${owned.length}`)
  for (let i = 1; i <= intake.cluster_count; i++) if (!clusters.has(i)) errors.push(`${intake.intake_id}: cluster ${i} has no disposition`)
}

for (const event of events) {
  const effective = asDate(event.dates?.effective)
  const review = asDate(event.dates?.next_review)
  if (event.status === "adopted-not-effective" && effective && effective <= asOf) errors.push(`${event.event_id}: effective date has passed but status is adopted-not-effective`)
  if (["proposed", "consultation", "litigation", "monitor-only"].includes(event.status) && review && review < asOf) errors.push(`${event.event_id}: next_review ${event.dates.next_review} is overdue`)
  if (event.verification?.state !== "verified-primary" && event.disposition !== "unverified-gap" && !(event.gaps || []).length) errors.push(`${event.event_id}: partial/unverified event needs a documented gap`)
}

if (errors.length) {
  console.error(`regulatory:watch:audit failed (${errors.length}) as of ${asOfArg}`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}
const dispositions = Object.groupBy(events, (event) => event.disposition)
console.log(`regulatory:watch:audit ok as of ${asOfArg}: ${events.length} clusters reconciled`)
for (const key of ["full-article", "hub-only", "covered-existing", "unverified-gap"]) console.log(`  ${key}: ${(dispositions[key] || []).length}`)
