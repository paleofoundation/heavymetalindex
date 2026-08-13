import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const product = args.get("product") ?? ""
const packetLimit = args.get("packet-limit") ?? args.get("limit") ?? ""
const includeCandidates = args.get("include-candidates") === "true"
const skipPackets = args.get("skip-packets") === "true"
const skipPromote = args.get("skip-promote") === "true"

const runArgs = product ? ["--product", product] : []

runNode("tools/audit-product-source-routing.mjs", [])
runNode("tools/evidence/build-local-reingest-queue.mjs", runArgs)
if (!skipPackets) {
  const packetArgs = [...runArgs]
  if (packetLimit) packetArgs.push("--packet-limit", packetLimit)
  if (includeCandidates) packetArgs.push("--include-candidates", "true")
  runNode("tools/evidence/extract-local-pdf-packets.mjs", packetArgs)
  runNode("tools/evidence/extract-local-gap-candidates.mjs", runArgs)
  if (!skipPromote) {
    runNode("tools/evidence/promote-local-candidate-values.mjs", runArgs)
    runNode("tools/audit-product-source-routing.mjs", [])
    runNode("tools/evidence/build-local-reingest-queue.mjs", runArgs)
  }
}
runNode("tools/evidence/validate-extraction-rows.mjs", runArgs)
runNode("tools/evidence/build-hmtc-aggregate-distributions.mjs", runArgs)
runNode("tools/evidence/build-open-gaps.mjs", [])
runNode("tools/evidence/build-ai-adjudication-queue.mjs", runArgs)

const queueSummary = readJson(path.join(repoRoot, "data/evidence/local_reingest_summary.json"))
const adjudicationSummary = readJson(path.join(repoRoot, "data/evidence/ai_adjudication_summary.json"))
const packetSummaryPath = path.join(
  repoRoot,
  "data/evidence/local_reingest_packets",
  product ? `${product}_packet_summary.json` : "packet_summary.json",
)
const packetSummary = fs.existsSync(packetSummaryPath) ? readJson(packetSummaryPath) : null

console.log("")
console.log("Local-first evidence automation complete.")
console.log(`Product: ${product || "all"}`)
console.log(`Queue rows: ${queueSummary.total_queue_rows ?? "unknown"}`)
console.log(`Open occurrence/routing adjudications: ${adjudicationSummary.total_adjudication_rows ?? "unknown"}`)
if (packetSummary) console.log(`PDF packets: ${packetSummary.packet_count ?? "unknown"}`)
console.log("Outputs:")
console.log("- data/evidence/product_source_routing_audit.csv")
console.log("- data/evidence/local_reingest_queue.csv")
console.log("- data/evidence/local_reingest_summary.json")
console.log("- data/evidence/hmtc_aggregate_distributions.csv")
console.log("- data/gaps/open_gaps.jsonl")
console.log("- data/evidence/ai_adjudication_queue.csv")
console.log("- data/evidence/ai_adjudication_summary.json")
if (!skipPackets) console.log("- data/evidence/local_reingest_packets/")
if (!skipPackets) console.log("- data/evidence/local_reingest_candidate_values.csv")
if (!skipPackets) console.log("- data/evidence/local_reingest_extraction_tasks.csv")
if (!skipPackets && !skipPromote) console.log("- data/evidence/category1_formula_concentration_summary.csv")
if (!skipPackets && !skipPromote) console.log("- data/evidence/values.jsonl")

function runNode(script, scriptArgs) {
  const result = spawnSync(process.execPath, [script, ...scriptArgs], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "inherit",
  })
  if (result.status !== 0) {
    throw new Error(`${script} failed with exit code ${result.status}`)
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"))
}

function parseArgs(argv) {
  const parsed = new Map()
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (!arg.startsWith("--")) continue
    const [key, inlineValue] = arg.slice(2).split("=", 2)
    const value = inlineValue ?? argv[index + 1]
    parsed.set(key, value)
    if (inlineValue === undefined) index += 1
  }
  return parsed
}
