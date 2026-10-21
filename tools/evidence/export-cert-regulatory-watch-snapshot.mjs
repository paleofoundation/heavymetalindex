#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { eventsPath, intakesPath, readJsonl, repoRoot } from "./regulatory-watch-common.mjs"

function parseCsv(text) {
  const rows = []
  let row = [], cell = "", quoted = false
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') { cell += '"'; index += 1 }
      else if (char === '"') quoted = false
      else cell += char
    } else if (char === '"') quoted = true
    else if (char === ",") { row.push(cell); cell = "" }
    else if (char === "\n") { row.push(cell); rows.push(row); row = []; cell = "" }
    else if (char !== "\r") cell += char
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  const [header, ...body] = rows.filter((item) => item.some(Boolean))
  return body.map((item) => Object.fromEntries(header.map((key, index) => [key, item[index] || ""])))
}

const args = process.argv.slice(2)
const outIndex = args.indexOf("--out")
const out = outIndex >= 0 ? path.resolve(args[outIndex + 1]) : path.join(repoRoot, "data/regulatory/cert-regulatory-watch-snapshot.json")
const events = readJsonl(eventsPath).map((event) => {
  const exported = {
    event_id: event.event_id,
    intake_id: event.intake_id,
    cluster: event.cluster,
    title: event.title,
    instrument_ids: event.instrument_ids,
    jurisdictions: event.jurisdictions,
    authorities: event.authorities,
    domains: event.domains,
    analytes: event.analytes,
    product_scopes: event.product_scopes,
    event_type: event.event_type,
    status: event.status,
    dates: event.dates,
    official_sources: event.official_sources,
    hmi_routes: event.hmi_routes,
    verification: event.verification,
    disposition: event.disposition,
    article_slugs: event.article_slugs,
    summary: event.summary,
    obligations: event.obligations,
    gaps: event.gaps,
    public_eligible: event.verification.state === "verified-primary",
  }
  if (Array.isArray(event.hub_rows) && event.hub_rows.length) exported.hub_rows = event.hub_rows
  return exported
})
const referencedLimitIds = new Set(events.flatMap((event) => event.hmi_routes.regulatory_limit_ids || []))
const allLimits = parseCsv(fs.readFileSync(path.join(repoRoot, "data/evidence/regulatory_limits.csv"), "utf8"))
const regulatoryLimits = allLimits.filter((row) => referencedLimitIds.has(row.regulatory_limit_id)).map((row) => ({
  regulatory_limit_id: row.regulatory_limit_id,
  jurisdiction: row.jurisdiction,
  authority: row.authority,
  legal_status: row.status,
  analyte: row.metal_species,
  value_ug_kg: Number(row.value_ug_kg),
  basis: row.basis,
  basis_class: row.basis_class || null,
  product_scope: row.product_scope,
  regulation_route: row.regulation_page,
  official_url: row.url || null,
  notes: row.notes,
}))
const snapshot = {
  schema_version: 2,
  generated: new Date().toISOString().slice(0, 10),
  source_repository: "Heavy Metal Index",
  firewall: "Neutral verified facts and evidence links only. No certification impact or threshold recommendation.",
  intakes: readJsonl(intakesPath).map(({ intake_id, intake_date, sha256, cluster_count, fitness_classification }) => ({ intake_id, intake_date, sha256, cluster_count, fitness_classification })),
  event_count: events.length,
  events,
  regulatory_limit_count: regulatoryLimits.length,
  regulatory_limits: regulatoryLimits,
}
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, JSON.stringify(snapshot, null, 2) + "\n")
console.log(`regulatory:watch:export wrote ${events.length} neutral events -> ${out}`)
