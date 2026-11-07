// Unit ids that already have an evidence-fill pull request.
//
// Open and merged heads count. A closed pull request that was not merged
// does not, so that unit can be tried again. Mitigation branches and
// non-unit heads are ignored.
//
//   node tools/evidence-fill/done-units.mjs --open open.json --merged merged.json
import fs from "node:fs"
import { pathToFileURL } from "node:url"

const UNIT_ID = /^HMI-[A-Z0-9]+(?:-[A-Z0-9]+)*$/

export function unitIdFromHead(head) {
  const name = String(head || "")
  if (!name.startsWith("evidence-fill/")) return ""
  const rest = name.slice("evidence-fill/".length)
  if (rest.startsWith("mitigation")) return ""
  const match = /^(HMI-[A-Z0-9]+(?:-[A-Z0-9]+)*)/i.exec(rest)
  if (!match) return ""
  const id = match[1].toUpperCase()
  return UNIT_ID.test(id) ? id : ""
}

export function unitIdsFromPulls(pulls) {
  const ids = []
  const seen = new Set()
  for (const pr of pulls || []) {
    const state = String(pr?.state || "").toUpperCase()
    if (state && state !== "OPEN" && state !== "MERGED") continue
    const id = unitIdFromHead(pr?.headRefName || pr?.head || "")
    if (!id || seen.has(id)) continue
    seen.add(id)
    ids.push(id)
  }
  return ids
}

function readList(file) {
  if (!file) return []
  const text = fs.readFileSync(file, "utf8").trim()
  if (!text) return []
  const parsed = JSON.parse(text)
  return Array.isArray(parsed) ? parsed : []
}

function flag(args, name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : ""
}

function main() {
  const args = process.argv.slice(2)
  const openFile = flag(args, "--open")
  const mergedFile = flag(args, "--merged")
  if (!openFile && !mergedFile) {
    console.error("usage: done-units.mjs --open <prs.json> --merged <prs.json>")
    process.exit(2)
  }
  const ids = unitIdsFromPulls([...readList(openFile), ...readList(mergedFile)])
  process.stdout.write(ids.join(","))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
