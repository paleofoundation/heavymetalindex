import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { buildEvidencePacketIndex } from "../build-evidence-packet-index.mjs"
import { authoredBody, contentHashes, markdownBody, verificationCommand } from "./evidence-packet.mjs"
import { verifyEvidencePacket } from "../verify-evidence-packet.mjs"
import { evidencePacketManifest, createEvidencePacketHandler } from "../../api/evidence-packet.mjs"
import { publicDataDownloads } from "./public-data-downloads.mjs"

const source = `---
type: source
title: A measured food dataset
evidence_tier: A
updated: 2026-09-01
sources: 1
metals: [Pb]
data_downloads:
  - label: Analytical results (CSV)
    path: static/data/example.csv
---
# A measured food dataset

The source reports 12 µg/kg of lead.

<!-- BEGIN: hmi-page-references -->
## References
Old citation display.
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history
Old generated commit description.
<!-- END: hmi-page-history -->
`

function fixture(t) {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-manifest-test-"))
  t.after(() => fs.rmSync(repoRoot, { recursive: true, force: true }))
  fs.mkdirSync(path.join(repoRoot, "wiki/sources"), { recursive: true })
  fs.mkdirSync(path.join(repoRoot, "wiki/static/data"), { recursive: true })
  fs.writeFileSync(path.join(repoRoot, "wiki/static/data/example.csv"), "analyte,value\nPb,12\n")
  const page = path.join(repoRoot, "wiki/sources/example.md")
  fs.writeFileSync(page, source)
  const git = (args) => execFileSync("git", args, { cwd: repoRoot, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] })
  git(["init", "-q"])
  git(["add", "wiki"])
  git(["-c", "user.name=Manifest test", "-c", "user.email=manifest-test@example.invalid", "commit", "-qm", "Commit source"])
  return { repoRoot, page, git, build: () => buildEvidencePacketIndex({ repoRoot, generatedAt: "2026-09-10T00:00:00Z" }) }
}

test("hash schemes preserve scientific prose and distinguish published bytes from generated displays", () => {
  assert.equal(markdownBody("---\r\ntitle: X\r\n---\r\nEvidence\r\n"), "Evidence\r\n")
  const regenerated = source.replace("Old citation display.", "Updated citation display.").replace("Old generated commit description.", "New commit description.")
  assert.equal(contentHashes(source).content_sha256, contentHashes(regenerated).content_sha256)
  assert.notEqual(contentHashes(source).published_body_sha256, contentHashes(regenerated).published_body_sha256)
  assert.notEqual(contentHashes(source).content_sha256, contentHashes(source.replace("12 µg/kg", "13 µg/kg")).content_sha256)
  assert.match(authoredBody(source), /12 µg\/kg/)
  assert.equal(contentHashes(source).metadata_sha256, contentHashes(source.replace("sources: 1", "sources: 2").replace("2026-09-01", "2026-09-10")).metadata_sha256)
  assert.notEqual(contentHashes(source).metadata_sha256, contentHashes(source.replace("metals: [Pb]", "metals: [Cd]")).metadata_sha256)
})

test("emitted verification command reproduces canonical body and metadata from a full Git SHA", (t) => {
  const f = fixture(t)
  const record = f.build().records[0]
  assert.equal(record.pin_status, "verified_git")
  assert.match(record.git_commit_sha, /^[a-f0-9]{40}$/)
  const command = verificationCommand(record).split(" ")
  const cli = fileURLToPath(new URL("../verify-evidence-packet.mjs", import.meta.url))
  const verified = JSON.parse(execFileSync(process.execPath, [cli, ...command.slice(2)], { cwd: f.repoRoot, encoding: "utf8" }))
  assert.equal(verified.verified, true)
  assert.equal(verified.content_sha256, record.content_sha256)
  assert.throws(() => verifyEvidencePacket({ repoRoot: f.repoRoot, commit: record.git_commit_sha, slug: record.slug,
    sha256: "0".repeat(64), metadataSha256: record.metadata_sha256 }), /does not match/)
  assert.equal(record.data_downloads[0].bytes, 20)
  assert.match(record.data_downloads[0].sha256, /^[a-f0-9]{64}$/)
})

test("Git and no-Git rebuilds preserve valid authored pins through generated history changes", (t) => {
  const f = fixture(t)
  const first = f.build().records[0]
  const changedDisplay = source.replace("Old generated commit description.", "Second generated history.").replace("Old citation display.", "Rebuilt references.").replace("sources: 1", "sources: 2")
  fs.writeFileSync(f.page, changedDisplay)
  const gitRebuilt = f.build().records[0]
  assert.equal(gitRebuilt.pin_status, "verified_git")
  assert.equal(gitRebuilt.git_commit_sha, first.git_commit_sha)
  assert.notEqual(gitRebuilt.markdown_sha256, first.markdown_sha256)
  fs.renameSync(path.join(f.repoRoot, ".git"), path.join(f.repoRoot, ".git-unavailable"))
  fs.writeFileSync(f.page, changedDisplay.replace("Second generated history.", "Third generated history."))
  const noGit = f.build().records[0]
  assert.equal(noGit.pin_status, "preserved_verified_git")
  assert.equal(noGit.git_commit_sha, first.git_commit_sha)
  fs.writeFileSync(f.page, changedDisplay.replace("12 µg/kg", "21 µg/kg"))
  const changedScience = f.build().records[0]
  assert.equal(changedScience.pin_status, "unpinned")
  assert.equal(changedScience.git_commit_sha, null)
  assert.equal(verificationCommand(changedScience), null)
})

test("uncommitted semantic metadata cannot borrow a Git pin; pending records cannot enter the manifest", (t) => {
  const f = fixture(t)
  fs.writeFileSync(f.page, source.replace("metals: [Pb]", "metals: [Cd]"))
  fs.writeFileSync(path.join(f.repoRoot, "wiki/sources/pending.md"), source.replace("evidence_tier: A", "evidence_tier: pending"))
  const result = f.build()
  assert.equal(result.record_count, 1)
  assert.equal(result.records[0].pin_status, "unpinned")
})

test("no-Git legacy indexes do not create an invented revision attestation", (t) => {
  const f = fixture(t)
  const legacy = f.build()
  legacy.schema_version = "1.0.0"
  fs.writeFileSync(path.join(f.repoRoot, "wiki/static/evidence-packet-index.json"), JSON.stringify(legacy))
  fs.renameSync(path.join(f.repoRoot, ".git"), path.join(f.repoRoot, ".git-unavailable"))
  const record = f.build().records[0]
  const manifest = evidencePacketManifest(record, { schema_version: "2.0.0" })
  assert.equal(manifest.content_pin.status, "unpinned")
  assert.equal(manifest.content_pin.verify_command, null)
  assert.match(manifest.attestation.verifiable_by, /no verified Git pin/)
  const old = evidencePacketManifest({ slug: "sources/old", content_sha256: "a".repeat(64), last_commit_sha: "abc1234" }, { schema_version: "1.0.0" })
  assert.equal(old.content_pin.git_commit_sha, null)
  assert.equal(old.content_pin.content_hash_scheme, "legacy-sha256-utf8-markdown-body-v1")
})

test("dataset links reject external and traversal paths", () => {
  const entries = publicDataDownloads([
    { label: "Samples (CSV)", path: "static/data/example.csv" },
    { label: "External", path: "https://example.com/private.csv" },
    { label: "Traversal", path: "static/data/../../private.csv" },
    { label: "Executable", path: "static/data/example.html" },
  ])
  assert.deepEqual(entries, [{ label: "Samples (CSV)", path: "static/data/example.csv" }])
})

test("API returns the requested page's JSON download and refuses unsupported PDF", async () => {
  const handler = createEvidencePacketHandler({ load: async () => ({ schema_version: "2.0.0", records: [{ slug: "sources/example", title: "Example", ...contentHashes(source), pin_status: "unpinned" }] }) })
  const response = () => ({ headers: {}, setHeader(k, v) { this.headers[k] = v }, status(n) { this.statusCode = n; return this }, json(v) { this.body = v }, end(v) { this.body = v && JSON.parse(v) } })
  const res = response()
  await handler({ method: "GET", url: "/api/evidence-packet?slug=sources%2Fexample&format=json&download=1", headers: {} }, res)
  assert.equal(res.statusCode, 200)
  assert.equal(res.body.page.slug, "sources/example")
  assert.equal(res.headers["Content-Disposition"], 'attachment; filename="sources_example.evidence-packet.json"')
  assert.equal(res.body.content_pin.verify_command, null)
  const pdf = response()
  await handler({ method: "GET", url: "/api/evidence-packet?slug=sources/example&format=pdf", headers: {} }, pdf)
  assert.equal(pdf.statusCode, 400)
})
