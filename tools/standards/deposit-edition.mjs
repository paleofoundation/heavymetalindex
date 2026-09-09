#!/usr/bin/env node
// deposit-edition.mjs — assemble the full S-DOI-1c edition evidence bundle and the
// NEUTRAL-DEPOSIT custody adapter (the sibling of the RFC-3161 adapter that already
// lives in freeze-standard-version.mjs).
//
// GATE 1 (which custody mechanism becomes the mint-time seal — RFC-3161 immediate
// tamper evidence, a neutral external deposit, or both) is Karen/counsel's, NOT this
// tool's. So this tool BUILDS the neutral-deposit adapter and packages a deposit
// REQUEST, but never chooses, never mints, and never fabricates a custody receipt: an
// offline / unconfigured run writes the request + marks the receipt "pending", exactly
// as the RFC-3161 adapter marks its timestamp "pending".
//
// It takes a frozen (standard.pdf + manifest.json) snapshot produced by
// freeze-standard-version.mjs and completes the bundle the ORDER specifies:
//   1. canonical compiled JSON used to render the limits            (compiled.json)
//   2. rendered scholarly PDF                                       (standard.pdf, from freeze)
//   3. full-page PNG screenshot of the production route             (screenshot.png, IF supplied)
//   4. deterministic render input sufficient to reproduce the page  (render-input.json)
//   5. bundle-manifest.json: slug, version, effective+capture ts, source commit SHA,
//      deployment URL/SHA, methodology version, EVERY file SHA-256, DOI(s), governing
//      register commit, canonical claim hash, and BOTH custody adapters' metadata.
//   6. a neutral-deposit request + receipt (pending unless a configured deposit is run).
//
// USAGE:
//   node tools/standards/deposit-edition.mjs <slug> --version <v> --edition-dir <dir>
//        [--compiled-dir <dir>] [--history-dir <dir>] [--screenshot <png>]
//        [--deployment-url <url>] [--deployment-sha <sha>]
//        [--methodology-version "<str>"] [--deposit-endpoint <url>] [--offline]
//
// No network is required; --offline (or an unset endpoint) yields a pending receipt.

import { createHash } from "node:crypto"
import { readFileSync, writeFileSync, copyFileSync, existsSync, statSync } from "node:fs"
import { join, dirname, resolve, relative } from "node:path"
import { execSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { claimHash, canonicalClaim } from "./claim-hash.mjs"

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..")
const SCHEMA = "hmtc-edition-bundle/v1"
const TOOL = "tools/standards/deposit-edition.mjs"

function parseArgs(argv) {
  const a = { _: [], flags: {} }
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i]
    if (t.startsWith("--")) {
      const key = t.slice(2)
      const next = argv[i + 1]
      if (next === undefined || next.startsWith("--")) a.flags[key] = true
      else { a.flags[key] = next; i++ }
    } else a._.push(t)
  }
  return a
}

const sha256File = (p) => "sha256:" + createHash("sha256").update(readFileSync(p)).digest("hex")
const sha256Str = (s) => "sha256:" + createHash("sha256").update(s).digest("hex")
const rel = (p) => relative(REPO, p) || p

function gitSha(pathArg) {
  try {
    return execSync(`git log -1 --format=%H -- ${pathArg}`, { cwd: REPO, encoding: "utf8" }).trim() || null
  } catch { return null }
}
function gitHead() {
  try { return execSync("git rev-parse HEAD", { cwd: REPO, encoding: "utf8" }).trim() } catch { return null }
}

// The neutral-deposit adapter. Packages the bundle's file-hash set into a single
// deposit request document and (if a real endpoint is configured and reachable) POSTs
// it, storing whatever custody receipt the neutral third party returns. Offline it
// writes the request and a pending receipt — it NEVER fabricates a custody id or date.
async function neutralDeposit({ dir, requestDoc, endpoint, offline, timeoutMs = 20000 }) {
  const reqPath = join(dir, "deposit-request.json")
  writeFileSync(reqPath, JSON.stringify(requestDoc, null, 2) + "\n")
  const receipt = {
    adapter: "neutral-deposit",
    status: "pending",
    endpoint: endpoint || null,
    custody_id: null,
    deposited_at: null,
    request_file: "deposit-request.json",
    request_sha256: sha256Str(JSON.stringify(requestDoc)),
    note: "GATE 1 not chosen; no deposit provider selected/minted. Re-run with a configured --deposit-endpoint to complete custody. Never fabricates a custody id or date (verify-don't-fabricate).",
  }
  if (endpoint && !offline) {
    try {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), timeoutMs)
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestDoc),
        signal: ctrl.signal,
      })
      clearTimeout(timer)
      if (res.ok) {
        const body = await res.json().catch(() => ({}))
        if (body && (body.custody_id || body.id)) {
          receipt.status = "deposited"
          receipt.custody_id = body.custody_id || body.id
          receipt.deposited_at = body.deposited_at || body.timestamp || null
          receipt.provider_response = body
        } else {
          receipt.note = "endpoint responded without a custody id; kept pending."
        }
      } else {
        receipt.note = `deposit endpoint HTTP ${res.status}; kept pending.`
      }
    } catch (e) {
      receipt.note = `deposit POST failed (${e.name === "AbortError" ? "timeout" : e.message}); kept pending.`
    }
  }
  const receiptPath = join(dir, "deposit-receipt.json")
  writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + "\n")
  return receipt
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const slug = args._[0]
  if (!slug) { console.error(`usage: ${TOOL} <slug> --version <v> --edition-dir <dir>`); process.exit(2) }
  const version = String(args.flags.version || "1").replace(/^v/i, "")
  const editionDir = args.flags["edition-dir"]
  if (!editionDir) { console.error("--edition-dir <dir> is required (the frozen v<version> snapshot dir)"); process.exit(2) }
  const dir = resolve(editionDir)
  const compiledDir = args.flags["compiled-dir"] || join(REPO, "data/workbench/standards/cat1-compiled")
  const compiledSrc = join(compiledDir, `${slug}.json`)
  const freezeManifestPath = join(dir, "manifest.json")
  const pdfPath = join(dir, "standard.pdf")

  for (const [p, what] of [[compiledSrc, "compiled JSON"], [pdfPath, "frozen standard.pdf"], [freezeManifestPath, "freeze manifest.json"]]) {
    if (!existsSync(p)) { console.error(`deposit-edition: missing ${what}: ${rel(p)} (run freeze-standard-version.mjs first)`); process.exit(2) }
  }

  const std = JSON.parse(readFileSync(compiledSrc, "utf8"))
  const freezeManifest = JSON.parse(readFileSync(freezeManifestPath, "utf8"))

  // 1. canonical compiled JSON into the bundle
  const compiledDst = join(dir, "compiled.json")
  copyFileSync(compiledSrc, compiledDst)

  // 4. deterministic render input: the canonical claim + the full compiled std, so the
  //    exact page can be re-rendered byte-for-byte from the bundle alone (HTML-snapshot
  //    substitute when no production render is captured).
  const renderInput = {
    schema: "hmtc-render-input/v1",
    slug, version,
    renderer: "tools/standards/freeze-standard-version.mjs (StandardDocument)",
    compiled: std,
    canonical_claim: canonicalClaim(std),
  }
  const renderInputPath = join(dir, "render-input.json")
  writeFileSync(renderInputPath, JSON.stringify(renderInput, null, 2) + "\n")

  // 3. optional PNG screenshot of the production route (supplemental rendering proof,
  //    never the canonical record). Only included if the caller supplies one.
  let screenshotFile = null
  if (args.flags.screenshot && existsSync(args.flags.screenshot)) {
    const dst = join(dir, "screenshot.png")
    copyFileSync(args.flags.screenshot, dst)
    screenshotFile = "screenshot.png"
  }

  const claim_hash = claimHash(std)
  const captureTs = new Date().toISOString()

  // Hash every file that is part of the bundle (files present in the edition dir we manage).
  const files = {}
  const track = (name) => { const p = join(dir, name); if (existsSync(p)) files[name] = { sha256: sha256File(p), bytes: statSync(p).size } }
  ;["standard.pdf", "standard.pdf.tsq", "standard.pdf.tsr", "tsa-cacert.pem", "compiled.json", "render-input.json", screenshotFile].filter(Boolean).forEach(track)

  // 6. build the neutral-deposit request over the file-hash set + claim hash, then run
  //    the adapter (pending unless a configured endpoint is reachable).
  const depositRequest = {
    schema: "hmtc-neutral-deposit-request/v1",
    slug, version,
    claim_hash,
    files, // name -> {sha256, bytes}
    created_at: captureTs,
    note: "Neutral external custody deposit request for one immutable standard edition. GATE 1 undecided; not minted.",
  }
  const receipt = await neutralDeposit({
    dir,
    requestDoc: depositRequest,
    endpoint: args.flags["deposit-endpoint"] || process.env.HMTC_DEPOSIT_ENDPOINT || null,
    offline: !!args.flags.offline,
  })
  // hash the two deposit files too (after they are written)
  track("deposit-request.json"); track("deposit-receipt.json")

  // 5. the bundle manifest — the single record binding every artifact together.
  const methodologyVersion = args.flags["methodology-version"] ||
    "HMTc Method v2.0 (government-limit default; CEO lock 2026-09-09; occurrence pooling RETIRED)"
  const bundle = {
    schema: SCHEMA,
    slug,
    version,
    effective_timestamp_utc: freezeManifest.effective_date ? `${freezeManifest.effective_date}T00:00:00Z` : null,
    capture_timestamp_utc: captureTs,
    source_commit_sha: gitHead(),
    governing_register_commit: gitSha("data/evidence/regulatory_limits.csv"),
    compiled_source_commit: gitSha(rel(compiledSrc)),
    deployment_url: args.flags["deployment-url"] || null,
    deployment_sha: args.flags["deployment-sha"] || null,
    methodology_version: methodologyVersion,
    canonical_claim_hash: claim_hash,
    doi: { concept: null, version: null },       // never minted here
    files,
    custody: {
      // adapter A — RFC-3161 immediate tamper evidence (from freeze-standard-version.mjs)
      rfc3161: {
        adapter: "rfc3161",
        status: freezeManifest.timestamp_utc && freezeManifest.timestamp_utc !== "pending" ? "sealed" : "pending",
        timestamp_utc: freezeManifest.timestamp_utc || "pending",
        tsa_url: freezeManifest.tsa_url || null,
        tsa_serial: freezeManifest.tsa_serial || null,
        pdf_sha256: freezeManifest.sha256 ? `sha256:${freezeManifest.sha256}` : null,
        token_file: freezeManifest.token_file || null,
        verify_command: freezeManifest.verify_command || null,
      },
      // adapter B — neutral external deposit (this tool)
      neutral_deposit: receipt,
    },
    gate1_decision: "UNDECIDED — Karen/counsel choose RFC-3161, neutral deposit, or both. Not minted.",
    generator: TOOL,
    machine_clock_utc: captureTs,
  }
  const bundlePath = join(dir, "bundle-manifest.json")
  writeFileSync(bundlePath, JSON.stringify(bundle, null, 2) + "\n")

  console.log(`deposit-edition: ${slug} v${version}`)
  console.log(`  bundle dir     ${rel(dir)}`)
  console.log(`  claim hash     ${claim_hash}`)
  console.log(`  files hashed   ${Object.keys(files).length}`)
  console.log(`  rfc3161        ${bundle.custody.rfc3161.status}`)
  console.log(`  neutral-dep    ${receipt.status}`)
  console.log(`  screenshot     ${screenshotFile || "absent (no production render captured)"}`)
  console.log(`  wrote          bundle-manifest.json, compiled.json, render-input.json, deposit-request.json, deposit-receipt.json`)
  console.log(`deposit-edition: DONE (GATE 1 undecided; nothing minted).`)
}

main().catch((e) => { console.error(e); process.exit(1) })
