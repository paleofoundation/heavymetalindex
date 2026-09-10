// Regression coverage for the retired briefing command. It may report stored
// descriptive evidence but must never fabricate a live MeHg fallback or hide
// an analyte because the legacy CSV omitted it. Fixtures prevent npm test from
// overwriting a shared staff briefing or depending on a changing corpus.
import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { buildHistoricalBriefing, renderHistoricalBriefing, LEGACY_ANALYTES } from "./build-standards-briefing.mjs"

const rows = [{ product_slug: "example", metal_species: "tHg", native_basis: "prepared_for_feeding",
  sources_contributing: "2", pooled_n: "8", pooled_p50: "1.234567", pooled_p95: "5", pooled_p97: "100",
  candidate_value_ppb: "0.5", rationale_tag_auto: "feasibility-driven", verdict: "Stored row",
  contribution_log: JSON.stringify([{ admitted: true, source_id: "example2024-monitoring" }]) }]
const render = (overrides = {}) => renderHistoricalBriefing({ productSlug: "example", title: "Example", rows,
  inputHash: "a".repeat(64), generatedAt: "2026-09-10T00:00:00Z", ...overrides })

test("every legacy analyte remains visible when the CSV has no MeHg row", () => {
  const text = render()
  for (const analyte of LEGACY_ANALYTES) assert.ok(text.includes(`| ${analyte} |`), `${analyte} missing`)
  assert.match(text, /\| MeHg \| Missing input row \| — \| — \| — \| — \| — \| — \|/)
  assert.match(text, /Missing input rows:.*MeHg/)
})

test("missing or blocked MeHg cannot become an assumed LOQ/fraction threshold", () => {
  for (const input of [rows, [...rows, { metal_species: "MeHg", verdict: "BLOCKED: no usable evidence", native_basis: "prepared_for_feeding" }]]) {
    const text = render({ rows: input })
    const mehgLine = text.split("\n").find(line => line.startsWith("| MeHg |"))
    assert.doesNotMatch(mehgLine, /0\.5|50|0\.1/)
    assert.match(mehgLine, /Missing input row|BLOCKED: no usable evidence/)
    assert.doesNotMatch(text, /four-anchor read-across|Path B floor|LOQ × 5|1:7 reconstitution/)
    assert.match(text, /derives no MeHg concentration/)
  }
})

test("output is historical-only and preserves stored precision without live-limit claims", () => {
  const text = render()
  assert.match(text, /status: historical-only/)
  assert.match(text, /limit_setting: false/)
  assert.match(text, /not a standard, proposed limit, or certification-readiness statement/)
  assert.match(text, /\| tHg \| Stored row \| prepared_for_feeding \| 2 \| 8 \| 1\.234567 \| 5 \| 100 \|/)
  assert.doesNotMatch(text, /HMTc Threshold \(published\)|brands.*qualify|97% of brands.*meet|standard = pooled P/)
  assert.doesNotMatch(text, /0\.5 ppb/)
})

test("authorship is explicit and implementation acknowledgment stays out of the byline", () => {
  const text = render()
  assert.match(text, /Author: Karen Pendergrass, Standards Architect/)
  for (const name of ["K. Eyer", "D. Aleru", "Victor Eyer", "Oluwatobi Aleru"]) assert.ok(!text.includes(name))
  assert.match(text, /also serves as CEO of the Institute of Contaminant Standards \(ICS\)/)
  assert.doesNotMatch(text.split("## Stored occurrence statistics")[0], /Claude|Codex|Anthropic/)
  assert.match(text, /Automated tooling.*Claude and Codex/)
  assert.match(render({ authors: ["Explicit Contributor"] }), /Author: Explicit Contributor/)
})

test("ambiguous duplicate input rows fail instead of silently selecting one", () => {
  assert.throws(() => render({ rows: [...rows, { ...rows[0], pooled_p97: "999" }] }), /Ambiguous duplicate/)
})

test("CLI uses isolated input/output and refuses a public wiki destination", (t) => {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-historical-briefing-"))
  t.after(() => fs.rmSync(repoRoot, { recursive: true, force: true }))
  fs.mkdirSync(path.join(repoRoot, "wiki/products"), { recursive: true })
  fs.writeFileSync(path.join(repoRoot, "wiki/products/example.md"), "---\ntitle: Example\n---\nEvidence.\n")
  const pooledPath = path.join(repoRoot, "pool.csv")
  fs.writeFileSync(pooledPath, "product_slug,metal_species,native_basis,pooled_p97\nexample,tHg,as_sold,2.123456\n")
  const outDir = path.join(repoRoot, "private-output")
  const generator = fileURLToPath(new URL("./build-standards-briefing.mjs", import.meta.url))
  const cli = spawnSync(process.execPath, [generator, "--product=example", `--pooled=${pooledPath}`, `--outdir=${outDir}`], { cwd: repoRoot, encoding: "utf8" })
  assert.equal(cli.status, 0, cli.stderr)
  assert.match(fs.readFileSync(path.join(outDir, "example.md"), "utf8"), /2\.123456/)
  assert.match(cli.stdout, /no live limits generated/)
  assert.throws(() => buildHistoricalBriefing({ repoRoot, productSlug: "example", pooledPath, outDir: path.join(repoRoot, "wiki/briefings") }), /outside wiki/)
})
