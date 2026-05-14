// Tests for api/ask.js. Run via `npm test` (which calls `tsx --test`).
// These tests exercise the handler's guardrails (brand-name firewall, mode
// routing, recent-queries GET, no-corpus refusal, structured response shape)
// without making real model API calls. Tests requiring a model response are
// run only when the env intentionally enables it; otherwise they fall through
// to retrieval-only mode, which is itself a guardrail worth verifying.

import { test } from "node:test"
import assert from "node:assert/strict"

const importHandler = async () => {
  const mod = await import("../../api/ask.js")
  return mod.default
}

function makeRes() {
  return {
    _h: {},
    _status: 0,
    _body: null,
    setHeader(k, v) {
      this._h[k] = v
    },
    status(s) {
      this._status = s
      return this
    },
    json(b) {
      this._body = b
      return this
    },
    end() {
      return this
    },
  }
}

function makePostReq(body) {
  return {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    url: "/api/ask",
  }
}

function makeGetReq(url) {
  return {
    method: "GET",
    headers: {},
    url,
  }
}

test("GET /api/ask?recent-queries returns the (empty) anonymized buffer", async () => {
  const handler = await importHandler()
  const req = makeGetReq("/api/ask?recent-queries=true")
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 200)
  assert.ok(Array.isArray(res._body?.recent))
})

test("POST without a question rejects with 400", async () => {
  const handler = await importHandler()
  const req = makePostReq({ question: "" })
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 400)
})

test("POST with brand-name query triggers Part 12 firewall refusal", async () => {
  const handler = await importHandler()
  const req = makePostReq({ question: "Is Gerber baby food safe?", audience: "regulatory" })
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 200)
  assert.equal(res._body.mode, "branded_refusal")
  assert.equal(res._body.confidence, "insufficient")
  assert.match(res._body.answer, /does not answer questions about specific brands/i)
  assert.equal(res._body.methodology_trace.refusal_kind, "brand-name")
  assert.equal(res._body.methodology_trace.drift_defense_applied, true)
  assert.deepEqual(res._body.citations, [])
})

test("POST with brand-name detection is case-insensitive", async () => {
  const handler = await importHandler()
  const req = makePostReq({ question: "tell me about HERSHEY chocolate", audience: "regulatory" })
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._body.mode, "branded_refusal")
})

test("POST with no corpus match triggers branded refusal, not silent failure", async () => {
  const handler = await importHandler()
  // A nonsense query that no entity group matches and no keywords resolve.
  const req = makePostReq({
    question: "What is the capital of France?",
    audience: "regulatory",
  })
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 200)
  // Either branded_refusal (no entity match) or retrieval_only depending on
  // whether the corpus has any chunks that match. Both are honest refusals.
  assert.ok(
    res._body.mode === "branded_refusal" || res._body.mode === "retrieval_only",
    `expected branded_refusal or retrieval_only, got ${res._body.mode}`,
  )
  assert.equal(res._body.confidence, "insufficient")
})

test("audience parameter is validated against the allowed set", async () => {
  const handler = await importHandler()
  // Invalid audience should fall back to the default rather than crash.
  const req = makePostReq({ question: "Is Gerber baby food safe?", audience: "executioner" })
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 200)
  // Falls into brand-name refusal because the query names a brand. The audience
  // gets stored in methodology_trace as null for refusal mode.
  assert.equal(res._body.mode, "branded_refusal")
})

test("mode parameter is validated against the allowed set", async () => {
  const handler = await importHandler()
  // Invalid mode should fall back to "ask" rather than crash. The brand-name
  // firewall still fires regardless of mode.
  const req = makePostReq({
    question: "Is Gerber baby food safe?",
    audience: "regulatory",
    mode: "exploit",
  })
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 200)
  assert.equal(res._body.mode, "branded_refusal")
})

test("response payload shape is stable across refusal paths", async () => {
  const handler = await importHandler()
  const req = makePostReq({ question: "Is Gerber baby food safe?", audience: "legal" })
  const res = makeRes()
  await handler(req, res)
  const body = res._body
  assert.ok("answer" in body)
  assert.ok("confidence" in body)
  assert.ok("limits" in body)
  assert.ok("citations" in body)
  assert.ok("methodology_trace" in body)
  assert.ok("hmtc_block" in body)
  assert.ok("audience" in body)
  assert.ok("mode" in body)
})

test("OPTIONS preflight returns 204 with CORS headers", async () => {
  const handler = await importHandler()
  const req = { method: "OPTIONS", headers: {}, url: "/api/ask" }
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 204)
  assert.equal(res._h["Access-Control-Allow-Origin"], "https://heavymetalindex.com")
})

test("non-POST/GET/OPTIONS method returns 405", async () => {
  const handler = await importHandler()
  const req = { method: "DELETE", headers: {}, url: "/api/ask" }
  const res = makeRes()
  await handler(req, res)
  assert.equal(res._status, 405)
})

test("brand-name firewall covers brands from multiple categories", async () => {
  const handler = await importHandler()
  // Pick representative brands from different categories in firewall-brands.json.
  const brands = ["Optimum Nutrition", "Bumble Bee", "Lundberg", "Nature Made"]
  for (const brand of brands) {
    const req = makePostReq({ question: `is ${brand} a safe product?`, audience: "regulatory" })
    const res = makeRes()
    await handler(req, res)
    assert.equal(res._body.mode, "branded_refusal", `expected branded_refusal for ${brand}`)
  }
})
