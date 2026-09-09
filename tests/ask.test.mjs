import test from "node:test"
import assert from "node:assert/strict"
import { buildCorpus, retrieve, loadContentIndex, createCorpusLoader } from "../api/ask.js"

const oliveSummary = "Olive oil receives metals from fruit, processing equipment and packaging. The cited studies distinguish metals retained in pomace from the smaller fraction carried into the oil."
const index = {
  "ingredients/olive-oil": { title: "Olive Oil", content: oliveSummary, aliases: ["extra-virgin-olive-oil", "EVOO"] },
  "products/olive-oil": { title: "Olive oil", content: "This is a scaffolded entry for olive oil. Evidence ingest is in progress. The individual evidence fields on this product page remain incomplete." },
  "ingredients/sunflower-oil": { title: "Sunflower Oil", content: "Sunflower oil is covered by the Index's food evidence pages. The literature distinguishes seed uptake from transfer during processing and packaging." },
  "ingredients/amaranth": { title: "Amaranth", content: "Amaranth has a dedicated literature summary in this Index. Its source pages document the occurrence of metals in the grain under study-specific conditions." },
  "sources/olive-oil-study": { title: "Lead in olive oil packaging", content: oliveSummary },
  "synthesis/metals-microbiome-disease-pathogenesis": { title: "Microbial metal ecology", content: "Microbial metal ecology is discussed in this synthesis. It presents a framework connecting changes in metal availability with microbial interactions and host defenses." },
  "regulators/food-authority": { title: "Food Authority", content: "The Food Authority page lists the government instruments indexed for that regulator, with links to the corresponding source documents and scope descriptions." },
  "metals/lead": { title: "Lead", content: "Lead is covered by the Index. Its effects and occurrence are documented through source-traceable literature; specific commodity findings belong on the relevant food pages." },
}
const corpus = buildCorpus(index)

for (const question of ["olive oil", "Tell me about olive oil", "What do you know about olive oil?", "extra virgin olive oil", "EVOO"]) {
  test(`published topic bypasses the stale domain whitelist: ${question}`, () => {
    const result = retrieve(question, corpus)
    assert.equal(result.context[0]?.slug, "ingredients/olive-oil")
    assert.ok(result.context.some((item) => item.text.includes("cited studies")))
  })
}

test("newly indexed ingredient topics work without code/config changes", () => {
  assert.equal(retrieve("Tell me about amaranth", corpus).context[0]?.slug, "ingredients/amaranth")
  assert.equal(retrieve("sunflower oil", corpus).context[0]?.slug, "ingredients/sunflower-oil")
})

test("new public page families are not excluded by a stale allowlist", () => {
  for (const slug of ["synthesis/metals-microbiome-disease-pathogenesis", "regulators/food-authority"]) {
    assert.ok(corpus.pages.some((page) => page.slug === slug))
    assert.equal(retrieve(index[slug].title, corpus).context[0]?.slug, slug)
  }
})

for (const question of ["How do I treat my pet hamster's stomach issues?", "What's the weather in Cyprus right now?", "How do JavaScript closures work?"]) {
  test(`out-of-corpus question stays empty: ${question}`, () => {
    assert.deepEqual(retrieve(question, corpus).context, [])
  })
}

test("an ingredient is ranked before a same-topic product scaffold", () => {
  const slugs = retrieve("olive oil", corpus).context.map((item) => item.slug)
  assert.ok(slugs.indexOf("ingredients/olive-oil") < slugs.indexOf("products/olive-oil"))
})

test("metal entity requirements still apply to topic matches", () => {
  const isolated = buildCorpus({
    "ingredients/olive-oil": { title: "Olive Oil", content: oliveSummary },
    "sources/lead-olive-oil": { title: "Lead in olive oil", content: `Lead measurements in olive oil are discussed by the cited study. ${oliveSummary}` },
  })
  const result = retrieve("lead in olive oil", isolated)
  assert.ok(result.context.length)
  assert.ok(result.context.every((item) => /\blead\b/i.test(`${item.title} ${item.text}`)))
})

test("full evidence beyond the browser excerpt remains retrievable", () => {
  const body = "General background about the process. ".repeat(120) +
    " Packaging migration is the later-section evidence on olive oil. Its source-specific result must not disappear from Ask just because browser search uses a short lead excerpt."
  const result = retrieve("olive oil packaging migration", buildCorpus({
    "ingredients/olive-oil": { title: "Olive Oil", content: body },
  }))
  assert.ok(result.context.some((item) => item.text.includes("later-section evidence")))
})

test("very long sentences/tables do not discard their tail when chunked", () => {
  const body = "Lead data ".repeat(700) + " tail sentinel evidence retained."
  const full = buildCorpus({ "ingredients/example": { title: "Example", content: body } })
  assert.ok(full.chunks.length > 3)
  assert.ok(full.chunks.every((chunk) => chunk.text.length <= 1500))
  assert.ok(full.chunks.some((chunk) => chunk.text.includes("tail sentinel evidence retained")))
})

test("internal, pending and retired content never becomes answer evidence", () => {
  const blocked = buildCorpus({
    "queries/olive-oil": { title: "Olive oil", content: oliveSummary },
    "private/olive-oil": { title: "Olive oil", content: oliveSummary },
    "batch-reports/olive-oil": { title: "Olive oil", content: oliveSummary },
    "sources/pending": { title: "Olive oil", content: oliveSummary, evidence_tier: "pending" },
    "sources/tier1": { title: "Olive oil", content: oliveSummary, status: "tier1-stub" },
    "ingredients/retired": { title: "Olive oil", content: oliveSummary, retired: true },
    "ingredients/unlisted": { title: "Olive oil", content: oliveSummary, noindex: true },
  })
  assert.deepEqual(blocked.pages, [])
  assert.deepEqual(retrieve("olive oil", blocked).context, [])
})

test("section index citations use the public canonical URL", () => {
  const pages = buildCorpus({ "ingredients/index": { title: "Ingredients", content: oliveSummary } }).pages
  assert.equal(pages[0].url, "/ingredients")
})

test("API reads the full Ask index and returns olive oil citations without generation", async () => {
  const originalFetch = globalThis.fetch
  const originalKey = process.env.AI_GATEWAY_API_KEY
  const originalDeployment = process.env.VERCEL_URL
  delete process.env.VERCEL_URL
  delete process.env.AI_GATEWAY_API_KEY
  const requested = []
  globalThis.fetch = async (url) => {
    requested.push(String(url))
    return new Response(JSON.stringify(index), { status: 200, headers: { "Content-Type": "application/json" } })
  }
  try {
    const { default: handler } = await import(`../api/ask.js?handler-test=${Date.now()}`)
    let status, payload
    const response = {
      setHeader() {},
      status(value) { status = value; return this },
      json(value) { payload = value },
    }
    await handler({ method: "POST", body: { q: "olive oil" }, headers: { host: "untrusted.example", "x-forwarded-host": "untrusted.example" } }, response)
    assert.ok(requested.every((url) => url === "https://heavymetalindex.com/static/askIndex.json"))
    assert.equal(status, 200)
    assert.equal(payload.mode, "retrieval_only")
    assert.equal(payload.citations[0].slug, "ingredients/olive-oil")
    assert.ok(payload.answer.includes("ingredients/olive-oil"))
  } finally {
    globalThis.fetch = originalFetch
    if (originalDeployment === undefined) delete process.env.VERCEL_URL
    else process.env.VERCEL_URL = originalDeployment
    if (originalKey === undefined) delete process.env.AI_GATEWAY_API_KEY
    else process.env.AI_GATEWAY_API_KEY = originalKey
  }
})


test("loader prefers the bundled full-text index and never self-fetches when it exists", async () => {
  const calls = []
  const loaded = await loadContentIndex(async (url) => {
    calls.push(url.pathname)
    return JSON.stringify(index)
  }, async () => { throw new Error("The bundled artifact must not cause a network fetch") })
  assert.equal(calls.length, 1)
  assert.ok(calls[0].endsWith("/public/static/askIndex.json"))
  assert.deepEqual(loaded, index)
})

test("concurrent cold requests share one corpus construction", async () => {
  let calls = 0
  const load = createCorpusLoader(async () => {
    calls++
    await new Promise((resolve) => setTimeout(resolve, 10))
    return index
  })
  const [first, second] = await Promise.all([load(), load()])
  assert.equal(calls, 1)
  assert.equal(first, second)
  assert.equal(retrieve("olive oil", first).context[0].slug, "ingredients/olive-oil")
})

test("failed corpus loads remain retryable instead of caching an evidence gap", async () => {
  let calls = 0
  const load = createCorpusLoader(async () => {
    if (++calls === 1) throw new Error("temporary missing artifact")
    return index
  })
  await assert.rejects(load(), /temporary missing artifact/)
  assert.equal(retrieve("olive oil", await load()).context[0].slug, "ingredients/olive-oil")
  assert.equal(calls, 2)
})

test("expanded metal lists cannot overwhelm the reader's original topic words", () => {
  const expanded = buildCorpus({
    "synthesis/metals-microbiome-disease-pathogenesis": {
      title: "Heavy metal exposure, microbial metal ecology, and disease pathogenesis",
      content: "Microbial metal ecology is the subject of this synthesis. The framework connects metal availability with microbial activity and host defenses, with explicit evidence qualifications.",
    },
    "sources/lead-cadmium-arsenic-mercury-nickel-aluminum-chromium-tin": {
      title: "Lead cadmium arsenic mercury nickel aluminum chromium tin occurrence survey",
      content: "This occurrence survey measures lead cadmium arsenic mercury nickel aluminum chromium tin in fruit, using methods appropriate to each metal and sample.",
    },
  })
  assert.equal(retrieve("Microbial metal ecology", expanded).context[0]?.slug, "synthesis/metals-microbiome-disease-pathogenesis")
})

test("generation streams complete prose, closing links and the upstream stop marker after citation metadata", async () => {
  const originalFetch = globalThis.fetch
  const originalKey = process.env.AI_GATEWAY_API_KEY
  process.env.AI_GATEWAY_API_KEY = "unit-test-key"
  const answer = "Olive oil has source-traceable coverage in the Index. [[ingredients/olive-oil]]\n\nThe cited evidence distinguishes fruit uptake, processing and packaging; missing measurements on one product table do not erase that coverage. [[products/olive-oil]]\n\nSee also: [[ingredients/olive-oil]], [[sources/olive-oil-study]]"
  const upstream = [
    `data: ${JSON.stringify({ choices: [{ delta: { content: answer }, finish_reason: null }] })}\n\n`,
    `data: ${JSON.stringify({ choices: [{ delta: {}, finish_reason: "stop" }] })}\n\n`,
    "data: [DONE]\n\n",
  ].join("")
  let gatewayCalls = 0
  globalThis.fetch = async (url, options) => {
    if (String(url).includes("/static/askIndex.json")) return new Response(JSON.stringify(index))
    assert.equal(String(url), "https://ai-gateway.vercel.sh/v1/chat/completions")
    gatewayCalls++
    const request = JSON.parse(options.body)
    assert.equal(request.stream, true)
    assert.ok(request.messages.some((message) => message.role === "user" && message.content.includes("ingredients/olive-oil")))
    const bytes = new TextEncoder().encode(upstream)
    return new Response(new ReadableStream({
      start(controller) {
        // Providers can divide their stream anywhere, including inside JSON.
        controller.enqueue(bytes.slice(0, 41))
        controller.enqueue(bytes.slice(41, 129))
        controller.enqueue(bytes.slice(129))
        controller.close()
      },
    }), { headers: { "Content-Type": "text/event-stream" } })
  }
  try {
    const { default: handler } = await import(`../api/ask.js?stream-test=${Date.now()}`)
    const headers = new Map()
    let output = "", ended = false
    const response = {
      statusCode: 0,
      setHeader(name, value) { headers.set(name, value) },
      write(chunk) { output += chunk },
      end() { ended = true },
      status() { throw new Error("Expected successful SSE response") },
    }
    await handler({ method: "POST", body: { q: "olive oil" }, headers: {} }, response)
    assert.equal(gatewayCalls, 1)
    assert.equal(response.statusCode, 200)
    assert.equal(headers.get("Content-Type"), "text/event-stream; charset=utf-8")
    assert.ok(output.startsWith("event: meta\ndata: "))
    const boundary = output.indexOf("\n\n")
    const metadata = JSON.parse(output.slice("event: meta\ndata: ".length, boundary))
    assert.equal(metadata.citations[0].slug, "ingredients/olive-oil")
    assert.equal(output.slice(boundary + 2), upstream)
    assert.ok(output.includes('"finish_reason":"stop"'))
    assert.ok(output.endsWith("data: [DONE]\n\n"))
    assert.equal(ended, true)
  } finally {
    globalThis.fetch = originalFetch
    if (originalKey === undefined) delete process.env.AI_GATEWAY_API_KEY
    else process.env.AI_GATEWAY_API_KEY = originalKey
  }
})
