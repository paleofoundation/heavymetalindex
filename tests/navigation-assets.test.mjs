import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"
import vm from "node:vm"
import { build } from "esbuild"

// Exercise the bundled router with document/transport doubles. No browser or
// network is needed to check URL resolution across redirects and pushState.
const bundle = await build({
  entryPoints: ["quartz/components/scripts/spa.inline.ts"],
  bundle: true,
  write: false,
  format: "iife",
  plugins: [{
    name: "morph-double",
    setup(build) {
      build.onResolve({ filter: /^micromorph$/ }, () => ({ path: "morph", namespace: "test" }))
      build.onLoad({ filter: /.*/, namespace: "test" }, () => ({ contents: "export default async () => {}" }))
    },
  }],
})

function routerAt(initialUrl) {
  let location = new URL(initialUrl)
  const assigned = []
  let responseUrl
  let responseCss = "../index.test.css"
  const element = () => ({
    dataset: { slug: "index" }, style: {}, textContent: "", appendChild() {},
    contains: () => false, setAttribute() {}, remove() {},
  })
  const link = (href) => ({
    hrefValue: href,
    get href() { return new URL(this.hrefValue, location).href },
    getAttribute() { return this.hrefValue },
    setAttribute(_key, value) { this.hrefValue = value },
  })
  function page(css) {
    const sheet = link(css)
    const script = link("./postscript.js")
    const head = {
      querySelectorAll: (selector) => selector.startsWith("link[") || selector.startsWith("[href") ? [sheet] : selector.startsWith("[src") ? [script] : [],
      appendChild() {},
    }
    return {
      head, body: element(), sheet, script,
      createElement: element, dispatchEvent() {},
      querySelectorAll: (selector) => selector.startsWith("[href") ? [sheet] : [script],
      querySelector: () => ({ textContent: "Article" }), getElementById: () => null,
    }
  }
  const document = page("./index.test.css")
  const window = {
    document,
    get location() {
      return {
        href: location.href, origin: location.origin, pathname: location.pathname,
        hash: location.hash, toString: () => location.href,
        assign: (url) => assigned.push(String(url)),
      }
    },
    addEventListener() {}, scrollTo() {},
  }
  const history = { pushState: (_state, _unused, url) => { location = new URL(url) } }
  const context = vm.createContext({
    window, document, history, URL, console,
    setTimeout: () => 0,
    CustomEvent: class {}, HTMLElement: class {},
    customElements: { get: () => true },
    DOMParser: class { parseFromString() { return page(responseCss) } },
    fetch: async () => ({
      url: responseUrl,
      headers: { get: () => "text/html" },
      text: async () => "<html></html>",
      clone() { return this },
    }),
  })
  vm.runInContext(bundle.outputFiles[0].text, context)
  return {
    document, assigned,
    get url() { return location.href },
    async navigate(request, served, css = "../index.test.css") {
      responseUrl = served
      responseCss = css
      await window.spaNavigate(new URL(request))
    },
  }
}

test("homepage assets remain at the site root after navigating to an article", async () => {
  const router = routerAt("https://heavymetalindex.com/")
  await router.navigate("https://heavymetalindex.com/metals/lead", "https://heavymetalindex.com/metals/lead")
  assert.equal(router.document.sheet.href, "https://heavymetalindex.com/index.test.css")
  assert.equal(router.document.script.href, "https://heavymetalindex.com/postscript.js")
  assert.equal(router.url, "https://heavymetalindex.com/metals/lead")
  assert.deepEqual(router.assigned, [])
})

test("trailing-slash redirects use the served URL for assets and preserve fragments", async () => {
  const router = routerAt("https://heavymetalindex.com/")
  await router.navigate("https://heavymetalindex.com/metals/lead/#summary", "https://heavymetalindex.com/metals/lead")
  assert.equal(router.url, "https://heavymetalindex.com/metals/lead#summary")
  assert.deepEqual(router.assigned, [])
})

test("alias redirects resolve nested assets against their destination", async () => {
  const router = routerAt("https://heavymetalindex.com/")
  await router.navigate("https://heavymetalindex.com/old-link", "https://heavymetalindex.com/methodology/nested/article", "../../index.test.css")
  assert.equal(router.url, "https://heavymetalindex.com/methodology/nested/article")
  assert.deepEqual(router.assigned, [])
})

test("a new deployment still triggers a full load of its matching assets", async () => {
  const router = routerAt("https://heavymetalindex.com/")
  await router.navigate("https://heavymetalindex.com/metals/lead/", "https://heavymetalindex.com/metals/lead", "../index.new-build.css")
  assert.deepEqual(router.assigned, ["https://heavymetalindex.com/metals/lead"])
})

test("direct trailing-slash visits redirect before relative assets are loaded", async () => {
  const config = JSON.parse(await readFile("vercel.json", "utf8"))
  assert.equal(config.cleanUrls, true)
  assert.equal(config.trailingSlash, false)
})
