#!/usr/bin/env node
// Static server for the Central Library UI (tools/central-library/public).
// Node built-in http only — mirrors tools/fetch-app/server.mjs. The page is
// self-contained (sample data inline), so it also works by opening
// public/index.html directly; this server is for parity + future data wiring.
//
//   npm run central-library   # then open http://127.0.0.1:8092

import http from "node:http"
import { createReadStream } from "node:fs"
import { stat } from "node:fs/promises"
import { extname, join, normalize, resolve } from "node:path"
import { fileURLToPath } from "node:url"

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

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host}`)
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
