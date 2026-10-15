import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import matter from "gray-matter"
import { metalEvidencePages, metalLegend, metalPageOwnsFolder, METAL_EVIDENCE_ROWS_PER_PAGE } from "./lib/metal-evidence.mjs"
import { buildMetalEvidencePages } from "./build-metal-evidence-pages.mjs"

function body(rows) {
  return `Narrative and limits stay here.\n<!-- BEGIN: hmi-source-legend -->\n## Sources\n\nSources describe reported findings and context.\n\n| # | Citation | Year | Type | Used on this page for |\n| --- | --- | ---: | --- | --- |\n${rows.join("\n")}\n<!-- END: hmi-source-legend -->\nMore findings stay here.\n`
}

test("metal profiles and evidence entries own their route without a duplicate folder page", () => {
  assert.equal(metalPageOwnsFolder("metal", "metals/lead", "metals/lead"), true)
  assert.equal(metalPageOwnsFolder("metal-evidence", "metals/lead/evidence", "metals/lead/evidence"), true)
  assert.equal(metalPageOwnsFolder("metal", "metals/lead", "metals"), false)
  assert.equal(metalPageOwnsFolder("metal", "metals/index", "metals"), false)
  assert.equal(metalPageOwnsFolder("product", "products/example", "products/example"), false)
})

test("all source rows survive pagination verbatim, in order and without duplication", () => {
  const rows = Array.from({ length: METAL_EVIDENCE_ROWS_PER_PAGE + 1 }, (_, i) => `| ${i + 1} | [[sources/example-${i + 1}\\|A source]] | Year | Study | Original value, unit and basis |`)
  const pages = metalEvidencePages({ slug: "metals/lead", title: "Lead", body: body(rows) })
  assert.equal(pages.length, 2)
  assert.equal(pages[0].slug, "metals/lead/evidence")
  assert.equal(pages[1].slug, "metals/lead/evidence/page-2")
  assert.deepEqual(pages.flatMap((page) => page.rows), rows)
  assert.match(pages[0].markdown, /\[Next records\]\(\/metals\/lead\/evidence\/page-2\)/)
  assert.match(pages[1].markdown, /\[Previous records\]\(\/metals\/lead\/evidence\)/)
  assert.match(pages[0].markdown, /\[Lead summary, limits and key findings\]\(\/metals\/lead\)/)
  assert.equal(matter(pages[0].markdown).data.type, "metal-evidence")
  assert.notEqual(matter(pages[0].markdown).data.description, matter(pages[1].markdown).data.description)
})

test("real metal tables are preserved exactly and no other parent prose is copied", () => {
  for (const slug of ["cadmium", "lead", "arsenic-total", "mercury-total", "chromium", "nickel"]) {
    const raw = fs.readFileSync(`wiki/metals/${slug}.md`, "utf8")
    const { data, content } = matter(raw)
    const pages = metalEvidencePages({ slug: `metals/${slug}`, title: data.title, body: content })
    assert.deepEqual(pages.flatMap((page) => page.rows), metalLegend(content).rows, slug)
    assert.ok(pages.every((page) => !page.markdown.includes("## Regulatory limits")), slug)
  }
})

test("unexpected content after the table fails rather than silently disappearing", () => {
  assert.throws(() => metalLegend(body(["| 1 | Source | Year | Type | Findings |", "Unrecognized trailing finding."])), /refusing to drop/)
  assert.deepEqual(metalEvidencePages({ slug: "metals/cobalt", title: "Cobalt", body: "No generated observation table." }), [])
})

test("generation is idempotent, preserves parent bytes and removes only owned stale output", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-metal-evidence-"))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const metalDir = path.join(root, "wiki/metals")
  fs.mkdirSync(metalDir, { recursive: true })
  const raw = `---\ntype: metal\ntitle: Lead\n---\n${body(["| 1 | Source | Year | Type | Finding |"])}`
  fs.writeFileSync(path.join(metalDir, "lead.md"), raw)
  assert.equal(buildMetalEvidencePages(root).written, 1)
  assert.equal(fs.readFileSync(path.join(metalDir, "lead.md"), "utf8"), raw)
  assert.equal(buildMetalEvidencePages(root).written, 0)
  fs.mkdirSync(path.join(metalDir, "lead/evidence"), { recursive: true })
  fs.writeFileSync(path.join(metalDir, "lead/evidence/page-2.md"), "---\ngenerated_by: metal-evidence-pages\n---\nStale generated output")
  fs.writeFileSync(path.join(metalDir, "lead/evidence/notes.md"), "Authored notes")
  assert.equal(buildMetalEvidencePages(root).removed, 1)
  assert.equal(fs.readFileSync(path.join(metalDir, "lead/evidence/notes.md"), "utf8"), "Authored notes")
})

test("an authored page at the generated destination cannot be overwritten", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-metal-authored-"))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  fs.mkdirSync(path.join(root, "wiki/metals/lead"), { recursive: true })
  fs.writeFileSync(path.join(root, "wiki/metals/lead.md"), `---\ntype: metal\ntitle: Lead\n---\n${body(["| 1 | Source | Year | Type | Finding |"])}`)
  fs.writeFileSync(path.join(root, "wiki/metals/lead/evidence.md"), "Authored page")
  assert.throws(() => buildMetalEvidencePages(root), /Refusing to overwrite authored/)
})
