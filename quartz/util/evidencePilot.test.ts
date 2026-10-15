import test from "node:test"
import assert from "node:assert/strict"
import { fromHtml } from "hast-util-from-html"
import { toHtml } from "hast-util-to-html"
import { addEvidencePilotContents, normalizeEvidencePilotText } from "./evidencePilot"

const article = '<h2 id="overview">Overview</h2><p>Introduction.</p><h2 id="geographic-evidence">Geographic evidence</h2><p>Findings.</p><h2 id="references">References</h2><p>Reference.</p><h2 id="sources">Sources</h2><p>Sources.</p><h2 id="update-history">Update history</h2><p>History.</p>'

for (const slug of ["ingredients/spinach", "mitigation/remediation-evidence"]) {
  for (const sidebar of [true, false]) {
    test(`${slug}: contents preserve the article with sidebar=${sidebar}`, () => {
      const tree = fromHtml(article, { fragment: true })
      addEvidencePilotContents(tree, slug, sidebar)
      const html = toHtml(tree)
      assert.equal(html.replace(/<nav[\s\S]*?<\/nav>/, ""), article)
      assert.ok(html.indexOf("Introduction.</p>") < html.indexOf("<nav"))
      assert.ok(html.indexOf("</nav>") < html.indexOf('<h2 id="geographic-evidence">'))
      assert.ok(html.includes('href="#geographic-evidence"'))
      assert.equal(html.includes("hmi-article-contents-mobile"), sidebar)
    })
  }
}

test("pilot text uses full metal names and leaves links, IDs, units, values and code intact", () => {
  const tree = fromHtml('<h2 id="rice-cd">Rice × Cd</h2><p>lead (Pb) — Cd: 0.83 mg/kg dry weight; N=27.</p><a href="/sources/cd-study" data-slug="sources/cd-study">Pb study</a><code>Pb</code>', { fragment: true })
  normalizeEvidencePilotText(tree, "ingredients/spinach")
  const html = toHtml(tree)
  assert.ok(html.includes('id="rice-cd">Rice × cadmium'))
  assert.ok(html.includes("lead - cadmium: 0.83 mg/kg dry weight; N=27."))
  assert.ok(html.includes('href="/sources/cd-study" data-slug="sources/cd-study">lead study'))
  assert.ok(html.includes("<code>Pb</code>"))
})

test("other articles retain their original presentation", () => {
  const tree = fromHtml(article + "<p>Cd — Pb.</p>", { fragment: true })
  const before = toHtml(tree)
  addEvidencePilotContents(tree, "ingredients/kale", false)
  normalizeEvidencePilotText(tree, "ingredients/kale")
  assert.equal(toHtml(tree), before)
})

test("FDA occurrence table keeps Name (symbol) analyte labels", () => {
  const tree = fromHtml('<table><thead><tr><th>FDA food and preparation</th><th>Analyte</th></tr></thead><tbody><tr><td>408: Spinach, raw</td><td>Cadmium (Cd)</td></tr><tr><td>408: Spinach, raw</td><td>Total arsenic (tAs)</td></tr><tr><td>408: Spinach, raw</td><td>Total mercury (tHg)</td></tr></tbody></table><p>Cd — lead (Pb).</p>', { fragment: true })
  normalizeEvidencePilotText(tree, "ingredients/spinach")
  const html = toHtml(tree)
  assert.ok(html.includes("Cadmium (Cd)"))
  assert.ok(html.includes("Total arsenic (tAs)"))
  assert.ok(html.includes("Total mercury (tHg)"))
  assert.ok(html.includes("cadmium - lead."))
})

test("pilot text preserves English As and U.S. agency names", () => {
  const tree = fromHtml("<p>As paddy soil develops anaerobic conditions, As concentrations change. U.S. Food and Drug Administration reports Sb and Fe.</p>", { fragment: true })
  normalizeEvidencePilotText(tree, "mitigation/remediation-evidence")
  assert.equal(toHtml(tree), "<p>As paddy soil develops anaerobic conditions, arsenic concentrations change. U.S. Food and Drug Administration reports antimony and iron.</p>")
})
