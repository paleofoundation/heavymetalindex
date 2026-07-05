#!/usr/bin/env node
// Server for the Central Library UI (tools/central-library/public) + the real
// condition research runner. Node built-in http only — mirrors
// tools/fetch-app/server.mjs (static serving + an SSE run endpoint).
//
//   npm run central-library      # then open http://127.0.0.1:8092
//
// API:
//   GET  /api/presets            list preset sets + their groups/queries
//   POST /api/run                { presetId, subject, sources?, fromYear?,
//                                  toYear?, maxPerQuery?, groups?, limitQueries?,
//                                  dryRun?, outRoot? } → { runId }
//   GET  /api/run/stream?runId   Server-Sent Events of the run's progress

import http from "node:http"
import fs from "node:fs"
import { createReadStream } from "node:fs"
import { stat } from "node:fs/promises"
import { extname, join, normalize, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { runCondition, listPresets, loadPreset } from "./lib/run-condition.mjs"

const publicRoot = resolve(fileURLToPath(new URL("./public", import.meta.url)))
const port = Number(process.env.HMI_CENTRAL_LIBRARY_PORT ?? 8092)
const host = process.env.HMI_CENTRAL_LIBRARY_HOST ?? "127.0.0.1"

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
}

const runs = new Map() // runId -> { _id, listeners:Set, events:[], done }

function emitTo(runId, event) {
  const run = runs.get(runId)
  if (!run) return
  run.events.push(event)
  for (const res of run.listeners) res.write(`data: ${JSON.stringify(event)}\n\n`)
  if (event.type === "done" || event.type === "error") {
    run.done = true
    if (run.expiry) clearTimeout(run.expiry)
    for (const res of run.listeners) res.end()
    run.listeners.clear()
    setTimeout(() => runs.delete(runId), 120_000)
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host}`)

    if (url.pathname === "/api/presets" && request.method === "GET") {
      // Per-item guard: one malformed/unreadable preset must not 404 the list.
      const sets = []
      for (const meta of listPresets()) {
        try { sets.push({ ...loadPreset(meta.id), ...meta }) } catch {}
      }
      sendJson(response, { presets: sets })
      return
    }

    if (url.pathname === "/api/run" && request.method === "POST") {
      const payload = await readJsonBody(request)
      if (!payload.subject || !String(payload.subject).trim()) {
        response.writeHead(400, { "content-type": "text/plain" })
        response.end("subject (condition) is required")
        return
      }
      // One condition run at a time — a full pull is 74 queries × 4 sources;
      // concurrent/double-fired runs would multiply rate-limit pressure.
      for (const r of runs.values()) {
        if (!r.done) {
          response.writeHead(429, { "content-type": "text/plain" })
          response.end("a run is already in progress")
          return
        }
      }
      const runId = `cond-${Date.now()}`
      const run = { _id: runId, listeners: new Set(), events: [], done: false }
      runs.set(runId, run)
      // Absolute expiry so a run that never settles can't leak its Map entry.
      run.expiry = setTimeout(() => runs.delete(runId), 60 * 60 * 1000)
      runCondition({
        subject: payload.subject,
        presetId: payload.presetId || "microbiome-medicine",
        sources: payload.sources,
        fromYear: payload.fromYear ? Number(payload.fromYear) : undefined,
        toYear: payload.toYear ? Number(payload.toYear) : undefined,
        maxPerQuery: payload.maxPerQuery != null ? Number(payload.maxPerQuery) : undefined,
        groups: payload.groups || null,
        limitQueries: payload.limitQueries ? Number(payload.limitQueries) : 0,
        dryRun: Boolean(payload.dryRun),
        outRoot: payload.outRoot,
        runId,
        onEvent: (ev) => emitTo(runId, ev),
      }).catch((err) => {
        emitTo(runId, { type: "error", msg: String(err?.message || err) })
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
      response.on("error", () => run.listeners.delete(response))
      for (const ev of run.events) response.write(`data: ${JSON.stringify(ev)}\n\n`)
      if (run.done) { response.end(); return }
      run.listeners.add(response)
      request.on("close", () => run.listeners.delete(response))
      return
    }

    // static
    const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname
    const filePath = normalize(join(publicRoot, requestedPath))
    if (!filePath.startsWith(publicRoot)) {
      response.writeHead(403)
      response.end("Forbidden")
      return
    }
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
})

server.listen(port, host, () => {
  console.log(`Central Library listening at http://${host}:${port}`)
  console.log("Local-only tool: do not expose this port publicly.")
})

function sendJson(response, value) {
  response.writeHead(200, { "cache-control": "no-store", "content-type": "application/json; charset=utf-8" })
  response.end(JSON.stringify(value))
}

function readJsonBody(request) {
  return new Promise((res, rej) => {
    let body = ""
    request.on("data", (c) => {
      body += c
      if (body.length > 2_000_000) rej(new Error("body too large"))
    })
    request.on("end", () => {
      try { res(body ? JSON.parse(body) : {}) } catch { rej(new Error("invalid JSON body")) }
    })
    request.on("error", rej)
  })
}
