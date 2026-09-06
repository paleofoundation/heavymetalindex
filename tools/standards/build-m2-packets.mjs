#!/usr/bin/env node
// build-m2-packets.mjs — split a compiled dir's M2 queue (written by confidence-run.mjs) into blind packets for
// the verifier agents. Deterministic: packets are chunks of the queue's batches in queue order, at most
// --size batches each (default 6); the queue already carries the runner's canary batches (unmarked). A packet
// is {packet_id, run_id, compiled_dir, batches}; the agent reads only its packet and _m2-protocol.md.
// Usage: node tools/standards/build-m2-packets.mjs --cat=<N|seafood> --tag=<label> [--size=6]
import fs from "node:fs"
import path from "node:path"
const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const cat = args.get("cat"); if (!cat) { console.error("--cat required"); process.exit(2) }
const dir = cat === "seafood" || cat === "6" ? "seafood-compiled" : `cat${cat}-compiled`
const tag = args.get("tag") || new Date().toISOString().slice(0, 10).replace(/-/g, "")
const size = Number(args.get("size") || 6)
const CONF = path.join(REPO, "data/workbench/standards/confidence")
const q = JSON.parse(fs.readFileSync(path.join(CONF, `_m2-queue-${dir}.json`), "utf8"))
const batches = (q.batches || []).filter((b) => b.cells && b.cells.length)
const out = []
for (let i = 0; i < batches.length; i += size) {
  const n = out.length + 1
  const packet = { packet_id: `m2-${tag}-p${n}`, run_id: q.run_id, compiled_dir: dir, batches: batches.slice(i, i + size) }
  fs.writeFileSync(path.join(CONF, "_m2-packets", `${packet.packet_id}.json`), JSON.stringify(packet, null, 2) + "\n")
  out.push(packet)
}
console.log(`build-m2-packets [${dir}]: ${batches.length} batch(es) → ${out.length} packet(s): ${out.map((p) => `${p.packet_id} (${p.batches.length} batches, ${p.batches.reduce((s, b) => s + b.cells.length, 0)} cells)`).join("; ")}`)
