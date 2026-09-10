import { test } from "node:test"
import assert from "node:assert/strict"
import { isPublicWikiRecord } from "./source-publication.mjs"

test("recovery sources cannot publish through either pending flag", () => {
  assert.equal(isPublicWikiRecord({ type: "source", status: "tier1-stub" }), false)
  assert.equal(isPublicWikiRecord({ type: "source", evidence_tier: "pending" }), false)
  assert.equal(isPublicWikiRecord({ evidence_tier: "pending" }, "sources/malformed"), false)
})

test("reviewed sources and ingredient destination stubs retain their proper visibility", () => {
  assert.equal(isPublicWikiRecord({ type: "source", evidence_tier: "A" }), true)
  assert.equal(isPublicWikiRecord({ type: "ingredient", status: "pending" }, "ingredients/new-food"), true)
  assert.equal(isPublicWikiRecord({ type: "source", draft: "true" }), false)
})
