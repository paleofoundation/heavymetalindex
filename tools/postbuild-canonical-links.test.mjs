import test from "node:test"
import assert from "node:assert/strict"
import { canonicalLink } from "./lib/canonical-links.mjs"
import { rewriteCanonicalLinks } from "./postbuild-canonical-links.mjs"

const registry = { linkTargets: { "/ingredients/maize": "/ingredients/corn", "/ingredients/human-milk": "/ingredients/breastmilk", "/ambiguous": null } }
const gone = new Set(["/ingredients/human-milk", "/removed"])

test("relative, encoded and same-host absolute aliases retain query and fragment", () => {
  for (const href of ["../ingredients/maize/?a=1#b", "https://www.heavymetalindex.com/ingredients/%6Daize?a=1#b", "//heavymetalindex.com/ingredients/maize.html?a=1#b"]) {
    assert.deepEqual(canonicalLink(href, "/synthesis/review", registry, gone), { source: "/ingredients/maize", kind: "alias", href: "/ingredients/corn?a=1#b" })
  }
  for (const href of ["#local", "mailto:a@example.com", "https://example.com/ingredients/maize"]) assert.equal(canonicalLink(href, "/", registry, gone), null)
})

test("gone paths retarget only with clear frontmatter; unknown and ambiguous links unlink", () => {
  assert.equal(canonicalLink("/ingredients/human-milk", "/", registry, gone).href, "/ingredients/breastmilk")
  for (const href of ["/removed", "/dossiers/unlisted", "/ambiguous"]) assert.equal(canonicalLink(href, "/", registry, gone).href, null)
})

test("generated navigation and article anchors change while text, scripts and HTML bytes survive", () => {
  const html = '<!DOCTYPE html><html><head><script>const x = \'<a href="/removed">script</a>\';</script></head><body>\n<nav><a href="/ingredients/maize?a=1&amp;b=2#c" data-slug="ingredients/maize">Corn <b>evidence</b></a></nav><p><a href="/removed"><i>Removed text</i></a><a href="/ingredients/human-milk">milk</a></p></body></html>'
  const result = rewriteCanonicalLinks(html, "/", registry, gone)
  assert.equal(result.html, html.replace('href="/ingredients/maize?a=1&amp;b=2#c" data-slug="ingredients/maize"', 'href="/ingredients/corn?a=1&amp;b=2#c"').replace('<a href="/removed"><i>Removed text</i></a>', '<i>Removed text</i>').replace('href="/ingredients/human-milk"', 'href="/ingredients/breastmilk"'))
  assert.deepEqual(result.counts, { alias: 1, gone: 2, unlinked: 1 })
  assert.deepEqual(rewriteCanonicalLinks(result.html, "/", registry, gone).counts, { alias: 0, gone: 0, unlinked: 0 })
})
