#!/usr/bin/env node
// Local web app for mass-fetching + deduping heavy-metal PDFs by product
// category / subcategory (or freeform topic, e.g. remediation). Node built-in
// http only — no Express — matching tools/standards-workbench/server.mjs.
//
//   npm run fetch-app        # then open http://127.0.0.1:8091
//
// API keys are entered in the UI and stored in tools/fetch-app/keys.local.json
// (gitignored, mode 0600). Environment variables are honored as a fallback.
// Downloads land in raw/Manual Fetch Discovery/fetch-app/ so the existing
// daemon ingest tick picks them up. This app fetches + dedupes only; it never
// ingests, routes, or edits the wiki (CLAUDE.md Part 5b).

import http from "node:http"
import { createReadStream } from "node:fs"
import { stat } from "node:fs/promises"
import { extname, join, normalize, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { KEY_SPECS, loadKeys, saveKeys, maskedKeys } from "./lib/config.mjs"
import { categoryList } from "./lib/taxonomy.mjs"
import { ADAPTERS, ADAPTER_KEY, KEY_REQUIRED } from "./lib/sources.mjs"
import { rebuildCorpusIndex, loadCorpusIndex } from "./lib/dedup.mjs"
import { runFetch } from "./lib/run.mjs"
import { loadGaps } from "./lib/gaps.mjs"

const publicRoot = resolve(fileURLToPath(new URL("./public", import.meta.url)))
const port = Number(process.env.HMI_FETCH_APP_PORT ?? 8091)
const host = process.env.HMI_FETCH_APP_HOST ?? "127.0.0.1"

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
}

// In-memory run registry so the SSE endpoint can attach to a run started by POST.
const runs = new Map() // runId -> { listeners:Set, events:[], done:bool, summary }

function emitTo(runId, event) {
  const run = runs.get(runId)
  if (!run) return
  run.events.push(event)
  if (event.type === "done") {
    run.done = true
    run.summary = event
  }
  for (const res of run.listeners) writeSse(res, event)
  // Close attached streams once the run is done so the browser's EventSource
  // doesn't hang open forever after the final summary.
  if (event.type === "done") {
    for (const res of run.listeners) res.end()
    run.listeners.clear()
    // Drop the finished run from memory after a grace window for late attaches.
    setTimeout(() => runs.delete(run._id), 60_000)
  }
}

function writeSse(res, event) {
  res.write(`data: ${JSON.stringify(event)}\n\n`)
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host}`)

    if (url.pathname === "/api/context" && request.method === "GET") {
      sendJson(response, buildContext())
      return
    }

    if (url.pathname === "/api/gaps" && request.method === "GET") {
      sendJson(response, loadGaps())
      return
    }

    if (url.pathname === "/api/keys" && request.method === "GET") {
      sendJson(response, { keys: maskedKeys(), specs: KEY_SPECS })
      return
    }

    if (url.pathname === "/api/keys" && request.method === "POST") {
      const payload = await readJsonBody(request)
      saveKeys(payload)
      sendJson(response, { ok: true, keys: maskedKeys() })
      return
    }

    if (url.pathname === "/api/rebuild-index" && request.method === "POST") {
      const r = rebuildCorpusIndex()
      sendJson(response, { ok: r.ok, out: r.out, index: indexMeta() })
      return
    }

    if (url.pathname === "/api/run" && request.method === "POST") {
      const payload = await readJsonBody(request)
      const runId = `run-${Date.now()}`
      runs.set(runId, { _id: runId, listeners: new Set(), events: [], done: false, summary: null })
      // Start the run detached; the browser attaches via /api/run/stream.
      startRun(runId, payload).catch((err) => {
        emitTo(runId, { type: "error", msg: String(err?.message || err) })
        emitTo(runId, { type: "done", runId, error: true })
      })
      sendJson(response, { ok: true, runId })
      return
    }

    if (url.pathname === "/api/run/stream" && request.method === "GET") {
      const runId = url.searchParams.get("runId")
      const run = runs.get(runId)
      if (!run) {
        response.writeHead(404, { "content-type": "text/plain" })
        response.end("unknown runId")
        return
      }
      response.writeHead(200, {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-store",
        connection: "keep-alive",
      })
      // Replay buffered events so a late attach still sees the whole run.
      for (const ev of run.events) writeSse(response, ev)
      if (run.done) {
        response.end()
        return
      }
      run.listeners.add(response)
      request.on("close", () => run.listeners.delete(response))
      return
    }

    await serveStatic(url.pathname, response)
  } catch (error) {
    const status = error?.statusCode ?? 500
    response.writeHead(status, { "content-type": "text/plain; charset=utf-8" })
    response.end(error instanceof Error ? error.message : "Internal error")
  }
})

server.listen(port, host, () => {
  console.log(`HMI Fetch App listening at http://${host}:${port}`)
  console.log("Local-only tool: do not expose this port publicly.")
})

async function startRun(runId, payload) {
  const keys = loadKeys()
  const selections = payload.selections || []
  await runFetch(selections, {
    sources: payload.sources,
    threshold: Number(payload.threshold) || 2,
    remediationMode: payload.mode === "remediation",
    dryRun: Boolean(payload.dryRun),
    keys,
    runId,
    stagingDir: payload.stagingDir,
    onEvent: (ev) => emitTo(runId, ev),
  })
}

function indexMeta() {
  const idx = loadCorpusIndex()
  return { builtAt: idx.builtAt, sourceCount: idx.sourceCount, doiCount: idx.byDoi.size }
}

function buildContext() {
  return {
    categories: categoryList(),
    sources: Object.keys(ADAPTERS).map((name) => {
      const keyId = ADAPTER_KEY[name]
      const keySet = keyId ? Boolean(loadKeys()[keyId]) : true
      return {
        name,
        keyId,
        keyRequired: KEY_REQUIRED.has(name), // hard requirement (disables if unset)
        keyOptional: Boolean(keyId) && !KEY_REQUIRED.has(name), // boosts rate limit only
        keySet,
      }
    }),
    keys: maskedKeys(),
    index: indexMeta(),
  }
}

async function serveStatic(pathname, response) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname
  const filePath = normalize(join(publicRoot, requestedPath))
  if (!filePath.startsWith(publicRoot)) {
    response.writeHead(403)
    response.end("Forbidden")
    return
  }
  try {
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) throw new Error("Not a file")
    response.writeHead(200, {
      "content-type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
    })
    createReadStream(filePath).pipe(response)
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
    response.end("Not found")
  }
}

function sendJson(response, value) {
  response.writeHead(200, {
    "cache-control": "no-store",
    "content-type": "application/json; charset=utf-8",
  })
  response.end(`${JSON.stringify(value)}\n`)
}

function readJsonBody(request) {
  return new Promise((res, rej) => {
    let body = ""
    request.on("data", (c) => {
      body += c
      if (body.length > 5_000_000) rej(new Error("body too large"))
    })
    request.on("end", () => {
      try {
        res(body ? JSON.parse(body) : {})
      } catch (e) {
        rej(new Error("invalid JSON body"))
      }
    })
    request.on("error", rej)
  })
}
