import fs from "node:fs"
import path from "node:path"
import { spawn } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const product = args.get("product") ?? ""
const packetLimit = args.get("packet-limit") ?? args.get("limit") ?? "8"
const watchDirs = ["raw/reports", "raw/studies"].map((dir) => path.join(repoRoot, dir)).filter((dir) => fs.existsSync(dir))

let timer = null
let running = false
let rerun = false

console.log("Watching local evidence folders:")
for (const dir of watchDirs) console.log(`- ${path.relative(repoRoot, dir)}`)
console.log("Drop PDFs into raw/reports or raw/studies; sync runs automatically after changes settle.")
schedule("initial")

for (const dir of watchDirs) {
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (!filename || !String(filename).toLowerCase().endsWith(".pdf")) return
    schedule(`${eventType}: ${filename}`)
  })
}

function schedule(reason) {
  if (timer) clearTimeout(timer)
  console.log(`Queued local evidence sync (${reason})`)
  timer = setTimeout(runSync, 2500)
}

function runSync() {
  timer = null
  if (running) {
    rerun = true
    return
  }
  running = true
  const syncArgs = ["tools/evidence/sync-local-evidence.mjs"]
  if (product) syncArgs.push("--product", product)
  if (packetLimit) syncArgs.push("--packet-limit", packetLimit)

  const child = spawn(process.execPath, syncArgs, {
    cwd: repoRoot,
    stdio: "inherit",
  })
  child.on("exit", (code) => {
    running = false
    if (code !== 0) console.error(`Local evidence sync failed with exit code ${code}`)
    if (rerun) {
      rerun = false
      schedule("changes arrived during previous sync")
    }
  })
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
