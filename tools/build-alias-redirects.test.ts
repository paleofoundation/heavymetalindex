import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import { aliasPath, buildAliasRegistry, generateAliasRegistry } from "./build-alias-redirects"
import { aliasToSlug } from "../quartz/util/aliasSlugs"

test("alias generation shares Quartz slug and relative-path rules", () => {
  assert.equal(aliasPath(aliasToSlug("Corn & maize"), "ingredients/corn"), "/Corn--and--maize")
  assert.equal(aliasPath("../maize", "ingredients/corn"), "/maize")
  assert.equal(aliasPath("./maize", "ingredients/corn"), "/ingredients/maize")
  assert.equal(aliasPath("ingredients/maize", "ingredients/corn"), "/ingredients/maize")
})

test("legacy, gone, real pages and ambiguous claims win over aliases", () => {
  const registry = buildAliasRegistry([
    { slug: "ingredients/corn", aliases: ["maize", "ingredients/legacy", "ingredients/gone", "ingredients/rice", "shared", "ingredients", "ingredients/index", "index"] },
    { slug: "ingredients/rice", aliases: ["shared"] },
  ], [{ source: "/ingredients/legacy", destination: "/ingredients/rice" }], ["/ingredients/gone"])
  assert.deepEqual(registry.redirects, { "/maize": "/ingredients/corn" })
  assert.equal(registry.linkTargets["/ingredients/legacy"], "/ingredients/rice")
  assert.equal(registry.linkTargets["/ingredients/gone"], "/ingredients/corn")
  assert.equal(registry.linkTargets["/shared"], null)
  assert.equal(registry.linkTargets["/ingredients/rice"], undefined)
  assert.equal(registry.linkTargets["/ingredients/index"], undefined)
  assert.equal(registry.linkTargets["/index"], undefined)
  assert.equal(registry.collisions.length, 7)
})

test("a gone canonical target and protected routes cannot receive alias redirects", () => {
  const registry = buildAliasRegistry([
    { slug: "dossiers/retired", aliases: ["old"] },
    { slug: "ingredients/corn", aliases: ["staff/login", "api/example"] },
  ], [], [])
  assert.deepEqual(registry.redirects, {})
  assert.equal(registry.linkTargets["/old"], null)
  assert.equal(registry.linkTargets["/staff/login"], undefined)
})

test("the committed registry is generated from the current published frontmatter", () => {
  const actual = generateAliasRegistry(process.cwd())
  const committed = JSON.parse(fs.readFileSync("data/redirects/aliases-301.json", "utf8"))
  assert.deepEqual(actual, committed)
  assert.equal(actual.redirects["/ingredients/maize"], "/ingredients/corn")
  assert.equal(actual.redirects["/metals/aluminium"], "/metals/aluminum")
  assert.equal(actual.redirects["/regulations/eu-2023-915"], "/regulations/eu2023-contaminants-maximum-levels")
  assert.equal(actual.redirects["/ingredients/human-milk"], undefined)
})
