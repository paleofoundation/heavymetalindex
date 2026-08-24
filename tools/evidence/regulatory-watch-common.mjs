import fs from "node:fs"
import path from "node:path"

export const repoRoot = process.cwd()
export const eventsPath = path.join(repoRoot, "data/evidence/regulatory_watch_events.jsonl")
export const intakesPath = path.join(repoRoot, "data/evidence/regulatory_watch_intakes.jsonl")

export function readJsonl(file) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${path.relative(repoRoot, file)}`)
  return fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line) }
    catch (error) { throw new Error(`${path.relative(repoRoot, file)}:${index + 1}: ${error.message}`) }
  })
}

export function regulatoryLimitIds() {
  const file = path.join(repoRoot, "data/evidence/regulatory_limits.csv")
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean)
  return new Set(lines.slice(1).map((line) => line.match(/^((?:"[^"]*(?:""[^"]*)*"|[^,])*)/u)?.[1]?.replace(/^"|"$/g, "")).filter(Boolean))
}

export const allowed = {
  event_type: new Set(["limit-change", "testing-method", "disclosure", "market-restriction", "enforcement", "litigation", "monitoring", "risk-assessment", "alignment"]),
  status: new Set(["in-force", "adopted-not-effective", "proposed", "consultation", "delayed", "litigation", "repealed", "monitor-only"]),
  disposition: new Set(["full-article", "hub-only", "covered-existing", "unverified-gap"]),
  verification: new Set(["verified-primary", "partial-primary", "unverified"]),
}

export function iso(value) { return value ? /^\d{4}-\d{2}-\d{2}$/.test(value) : true }
export function asDate(value) { return value ? new Date(`${value}T00:00:00Z`) : null }
