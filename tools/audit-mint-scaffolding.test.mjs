import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { scanMarkdown } from "./audit-mint-scaffolding.mjs"

const script = fileURLToPath(new URL("./audit-mint-scaffolding.mjs", import.meta.url))
const fixture = fileURLToPath(new URL("./fixtures/mint-scaffolding/empirical-input-needed.md", import.meta.url))
const repoRoot = path.resolve(path.dirname(script), "..")
const run = (args, cwd = repoRoot) => spawnSync(process.execPath, [script, ...args], { cwd, encoding: "utf8" })
const rules = (raw) => scanMarkdown(raw).map((h) => h.rule)
const page = (body, fm = 'wiki_doi: "10.83376/hmi.x"') => `---\ntitle: t\n${fm}\n---\n${body}\n`

test("deliberate [EMPIRICAL INPUT NEEDED: x] fixture FAILS the lint (exit 1)", () => {
  const r = run(["--files", fixture])
  assert.equal(r.status, 1, r.stdout + r.stderr)
  assert.match(r.stderr, /empirical-input-needed/)
})

test("canary: proof-before-the-floor passes after the strip (exit 0)", (t) => {
  const canary = path.join(repoRoot, "wiki/synthesis/proof-before-the-floor.md")
  if (!fs.existsSync(canary)) return t.skip("canary page not present in this tree")
  const r = run(["--files", canary])
  assert.equal(r.status, 0, r.stdout + r.stderr)
})

test("every ordered pattern fails", () => {
  assert.deepEqual(rules(page("Rate is [EMPIRICAL INPUT NEEDED: volumes].")), ["empirical-input-needed"])
  assert.deepEqual(rules(page("[Author disclosure required]")), ["author-disclosure-required"])
  for (const tok of ["PLACEHOLDER", "TBD", "TODO", "FIXME", "XXX"]) assert.deepEqual(rules(page(`Value ${tok} here.`)), ["all-caps-todo-token"], tok)
  assert.deepEqual(rules(page("Value [tbd] here.")), ["scaffold-bracket"])
  assert.deepEqual(rules(page("Slots are [PENDING INVITATION].")), ["scaffold-bracket"])
  assert.deepEqual(rules(page("DOI registration pending.")), ["registration-pending-with-doi"])
  assert.deepEqual(rules(page("## 9. Claims audit\n\nText.")), ["draft-section"])
  assert.deepEqual(rules(page("### Self-critique\n\nText.")), ["draft-section"])
})

test("registration pending is only a failure once a DOI is set", () => {
  assert.deepEqual(rules(page("DOI registration pending.", "wiki_doi: null")), [])
  assert.deepEqual(rules(page("DOI registration pending.", 'cert_doi: "10.83376/hmtc.y"')), ["registration-pending-with-doi"])
})

test("legitimate corpus brackets, links, code and comments do not fail", () => {
  const clean = [
    "See [TECRID FAQ](https://tecrid.com/faq) and [[metals/lead|lead]].",
    "Jurisdictions `jurisdictions: [US-CA]` and [GLOBAL] scope, [EFSA] authors.",
    "Title [RETRACTED]; carve-out [CAS 13977-65-6]; levels [TL 4-5]; limits [WHO 1996].",
    "A task box [ ] and [x], a footnote[^1], a lowercase todo list word.",
    "```\nTODO: code sample [EMPIRICAL INPUT NEEDED: x]\n```",
    "<!-- audience: regulator TODO -->",
    "The quantity is not estimated here and remains an evaluation requirement.",
  ].join("\n\n")
  assert.deepEqual(scanMarkdown(page(clean)), [])
})

test("hit line numbers point at the source file line", () => {
  const [hit] = scanMarkdown(page("line one\n\nline three TODO"))
  assert.equal(hit.line, 7)
})

test("surface run scans DOI-bearing and synthesis pages, not sources or doi-less pages", (t) => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-mint-scaffold-"))
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }))
  const write = (rel, content) => {
    fs.mkdirSync(path.dirname(path.join(cwd, rel)), { recursive: true })
    fs.writeFileSync(path.join(cwd, rel), content)
  }
  write("wiki/sources/s.md", page("TODO in a source page"))
  write("wiki/products/no-doi.md", "---\ntitle: p\n---\nTBD\n")
  write("wiki/products/minted.md", page("Clean."))
  write("wiki/synthesis/paper.md", "---\ntitle: s\n---\nClean.\n")
  assert.equal(run([], cwd).status, 0)
  write("wiki/synthesis/paper.md", "---\ntitle: s\n---\n[EMPIRICAL INPUT NEEDED: x]\n")
  const r = run(["--json"], cwd)
  assert.equal(r.status, 1)
  const out = JSON.parse(r.stdout)
  assert.equal(out.scanned_pages, 2)
  assert.deepEqual(out.hits.map((h) => h.file), ["wiki/synthesis/paper.md"])
})
