#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { eventsPath, intakesPath, readJsonl, repoRoot } from "./regulatory-watch-common.mjs"

const args = process.argv.slice(2)
const outIndex = args.indexOf("--out")
const out = outIndex >= 0 ? path.resolve(args[outIndex + 1]) : path.join(repoRoot, "data/regulatory/cert-regulatory-watch-snapshot.json")
const events = readJsonl(eventsPath).map((event) => ({
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
  public_eligible: event.verification.state === "verified-primary" || event.verification.state === "partial-primary",
}))
const snapshot = {
  schema_version: 1,
  generated: new Date().toISOString().slice(0, 10),
  source_repository: "Heavy Metal Index",
  firewall: "Neutral verified facts and evidence links only. No certification impact or threshold recommendation.",
  intakes: readJsonl(intakesPath).map(({ intake_id, intake_date, sha256, cluster_count, fitness_classification }) => ({ intake_id, intake_date, sha256, cluster_count, fitness_classification })),
  event_count: events.length,
  events,
}
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, JSON.stringify(snapshot, null, 2) + "\n")
console.log(`regulatory:watch:export wrote ${events.length} neutral events -> ${out}`)
