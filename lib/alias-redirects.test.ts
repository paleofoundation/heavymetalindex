import test from "node:test"
import assert from "node:assert/strict"
import middleware, { config } from "../middleware"
import registry from "../data/redirects/aliases-301.json"
import gone from "../data/redirects/gone-410.json"
import { normalizePublicPath } from "./gone-410"

test("every generated alias is matched and permanently redirects to its canonical page", async () => {
  const matcher = new RegExp(`^${config.matcher[0]}$`)
  for (const [source, target] of Object.entries(registry.redirects)) {
    assert.ok(matcher.test(source), source)
    for (const pathname of [source, source + "/"]) {
      const response = await middleware(new Request(`https://heavymetalindex.com${encodeURI(pathname)}?retained=yes`))
      assert.equal(response.status, 301, source)
      assert.equal(response.headers.get("location"), new URL(`${encodeURI(target)}?retained=yes`, "https://heavymetalindex.com").href, source)
    }
  }
})

test("every gone path still wins, including the frontmatter human-milk alias", async () => {
  const matcher = new RegExp(`^${config.matcher[0]}$`)
  for (const source of gone.paths) {
    assert.ok(matcher.test(source), source)
    assert.equal(Object.hasOwn(registry.redirects, normalizePublicPath(source)), false, source)
    const response = await middleware(new Request(`https://heavymetalindex.com${encodeURI(source)}`))
    assert.equal(response.status, 410, source)
    assert.equal(response.headers.get("x-robots-tag"), "noindex", source)
  }
})

test("unrelated public paths pass through and protected routes keep their guard", async () => {
  const response = await middleware(new Request("https://heavymetalindex.com/ingredients/corn"))
  assert.equal(response.headers.get("x-middleware-next"), "1")
  const protectedResponse = await middleware(new Request("https://heavymetalindex.com/staff"))
  assert.notEqual(protectedResponse.status, 301)
})
