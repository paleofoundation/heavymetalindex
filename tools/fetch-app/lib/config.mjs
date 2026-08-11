// Local key store for the mass-fetch app. Keys live in a gitignored JSON file
// next to the app (tools/fetch-app/keys.local.json) so they never enter git
// history; environment variables are honored as a fallback so existing daemon
// conventions (NCBI_API_KEY etc.) keep working unchanged.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

// config.mjs lives at tools/fetch-app/lib/ ; the app dir is its parent
// (tools/fetch-app). Resolve it explicitly so the key store never drifts up a
// level into tools/ (which is NOT gitignored — a leak risk).
const libDir = path.dirname(fileURLToPath(import.meta.url))
const appDir = path.dirname(libDir)
export const keysPath = path.join(appDir, "keys.local.json")

// key id -> { label, env } ; env is the fallback environment variable.
export const KEY_SPECS = {
  serpapi_key: { label: "SerpAPI key (Google Scholar SERP)", env: "SERPAPI_KEY" },
  serper_key: { label: "Serper.dev key (Google filetype:pdf SERP)", env: "SERPER_API_KEY" },
  ncbi_key: { label: "NCBI API key (PubMed/PMC, optional)", env: "NCBI_API_KEY" },
  s2_key: { label: "Semantic Scholar key (optional)", env: "S2_API_KEY" },
  core_key: { label: "CORE API key", env: "CORE_API_KEY" },
  contact_email: { label: "Contact email (OpenAlex/Crossref/Unpaywall polite pools)", env: "HMI_FETCH_MAILTO" },
}

export function loadKeys() {
  let stored = {}
  try {
    stored = JSON.parse(fs.readFileSync(keysPath, "utf8"))
  } catch {}
  const keys = {}
  for (const [id, spec] of Object.entries(KEY_SPECS)) {
    keys[id] = (stored[id] || process.env[spec.env] || "").trim()
  }
  if (!keys.contact_email) keys.contact_email = "karen@paleofoundation.com"
  return keys
}

export function saveKeys(partial) {
  let stored = {}
  try {
    stored = JSON.parse(fs.readFileSync(keysPath, "utf8"))
  } catch {}
  for (const id of Object.keys(KEY_SPECS)) {
    if (typeof partial[id] === "string") stored[id] = partial[id].trim()
  }
  fs.writeFileSync(keysPath, JSON.stringify(stored, null, 2) + "\n", { mode: 0o600 })
  return loadKeys()
}

// Masked view for the UI: never send full secrets back to the browser.
export function maskedKeys() {
  const keys = loadKeys()
  const out = {}
  for (const [id, spec] of Object.entries(KEY_SPECS)) {
    const v = keys[id]
    out[id] = {
      label: spec.label,
      set: Boolean(v),
      preview: id === "contact_email" ? v : v ? `…${v.slice(-4)}` : "",
    }
  }
  return out
}
