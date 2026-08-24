#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { allowed, eventsPath, intakesPath, iso, readJsonl, regulatoryLimitIds, repoRoot } from "./regulatory-watch-common.mjs"

const errors = []
const intakes = readJsonl(intakesPath)
const events = readJsonl(eventsPath)
const intakeIds = new Set(intakes.map((item) => item.intake_id))
const limitIds = regulatoryLimitIds()
const eventIds = new Set()

for (const intake of intakes) {
  if (!intake.sha256 || !/^[a-f0-9]{64}$/.test(intake.sha256)) errors.push(`${intake.intake_id}: invalid SHA-256`)
  if (!intake.fitness_classification) errors.push(`${intake.intake_id}: missing fitness classification`)
  if (intake.preserved_path && !fs.existsSync(path.join(repoRoot, intake.preserved_path))) errors.push(`${intake.intake_id}: preserved raw intake is missing`)
}

for (const event of events) {
  const p = event.event_id || "(missing event_id)"
  if (eventIds.has(event.event_id)) errors.push(`${p}: duplicate event_id`)
  eventIds.add(event.event_id)
  if (!intakeIds.has(event.intake_id)) errors.push(`${p}: unknown intake_id`)
  for (const field of ["event_type", "status", "disposition"]) if (!allowed[field].has(event[field])) errors.push(`${p}: invalid ${field} ${event[field]}`)
  if (!allowed.verification.has(event.verification?.state)) errors.push(`${p}: invalid verification state`)
  if (!Number.isInteger(event.cluster) || event.cluster < 1) errors.push(`${p}: invalid cluster`)
  if (!Array.isArray(event.analytes) || !event.analytes.length) errors.push(`${p}: analytes required`)
  if (!Array.isArray(event.product_scopes) || !event.product_scopes.length) errors.push(`${p}: product scopes required`)
  if (!event.summary) errors.push(`${p}: neutral summary required`)
  for (const [key, value] of Object.entries(event.dates || {})) if (!iso(value)) errors.push(`${p}: dates.${key} must be YYYY-MM-DD or null`)
  if (event.verification?.state === "verified-primary" && !(event.official_sources || []).length) errors.push(`${p}: verified-primary event lacks official source`)
  if (event.disposition === "full-article" && event.verification?.state !== "verified-primary") errors.push(`${p}: full article requires verified-primary evidence`)
  if (["proposed", "consultation", "litigation", "monitor-only"].includes(event.status) && !event.dates?.next_review) errors.push(`${p}: non-final event requires next_review`)
  for (const source of event.official_sources || []) if (!/^https:\/\//.test(source.url || "")) errors.push(`${p}: invalid official source URL`)
  for (const id of event.hmi_routes?.regulatory_limit_ids || []) if (!limitIds.has(id)) errors.push(`${p}: unknown regulatory_limit_id ${id}`)
  const serialized = JSON.stringify(event).toLowerCase()
  for (const forbidden of ["hmtc impact", "certification impact", "certification threshold", "hmtc threshold"]) if (serialized.includes(forbidden)) errors.push(`${p}: firewall term '${forbidden}' is forbidden in neutral ledger`)
  if (event.analytes.includes("Cr-VI") && event.analytes.includes("Cr-total")) errors.push(`${p}: total chromium and Cr(VI) must be separate events or expressly separated fields`)
}

if (errors.length) {
  console.error(`regulatory:watch:validate failed (${errors.length})`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}
console.log(`regulatory:watch:validate ok: ${intakes.length} intake(s), ${events.length} reconciled event(s)`)
