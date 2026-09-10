#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import matter from "gray-matter"
import { cleanSourcePublicProse, findSourceProseLeaks } from "./lib/source-public-prose.mjs"
import { isPublicWikiRecord } from "./lib/source-publication.mjs"

const root = process.cwd()
const apply = process.argv.includes("--apply")
const check = process.argv.includes("--check")
const hash = (text) => crypto.createHash("sha256").update(text).digest("hex")
const results = []
const log = path.join(root, "data/evidence/wiki_edit_audit.jsonl")
const prior = fs.existsSync(log) ? fs.readFileSync(log, "utf8") : ""
for (const file of fs.readdirSync(path.join(root, "wiki/sources")).sort()) {
  if (!file.endsWith(".md") || file.startsWith("_") || file === "index.md") continue
  const relative = `wiki/sources/${file}`
  const raw = fs.readFileSync(path.join(root, relative), "utf8")
  const parsed = matter(raw)
  if (parsed.data.type !== "source" || !isPublicWikiRecord(parsed.data)) continue
  const result = cleanSourcePublicProse(parsed.content)
  const residual = findSourceProseLeaks(result.body)
  if (!result.changes.length && !residual.length) continue
  results.push({ page: relative, replacements: result.changes.length, residual })
  if (apply && result.changes.length) {
    const beforeHash = hash(raw)
    const archive = `data/evidence/source_editorial_provenance/${file.replace(/\.md$/, "")}/${beforeHash}.json`
    const archivePath = path.join(root, archive)
    fs.mkdirSync(path.dirname(archivePath), { recursive: true })
    if (!fs.existsSync(archivePath)) {
      fs.writeFileSync(archivePath, JSON.stringify({ schema_version: 1, page: relative,
        source_document: { cite_key: parsed.data.cite_key, url: parsed.data.access_url || parsed.data.doi || null },
        reason: "Public prose repair; scientific statements retained, local execution details preserved here.",
        before_sha256: beforeHash, original_markdown: raw, replacements: result.changes }, null, 2) + "\n")
    }
    const prefix = raw.slice(0, raw.length - parsed.content.length)
    // Append the write-barrier record before the edit. A deterministic id makes
    // retries safe; the full original is committed alongside the changed page.
    const editId = hash(`public-source-prose:${relative}:${beforeHash}`)
    if (!prior.includes(`"edit_id":"${editId}"`)) {
      fs.appendFileSync(log, JSON.stringify({ edit_id: editId, page: relative, span_id: "public-source-prose",
        source_document: `${parsed.data.cite_key || file} | ${parsed.data.access_url || "preserved source metadata"}`,
        retrieval_date: "2026-09-10", models_used: ["gpt-6-astra"], model_agreement_state: "single_model",
        applied_at: new Date().toISOString(), commit_sha: "pending", archive }) + "\n")
    }
    // Do not serialize YAML or alter generator-managed blocks.
    fs.writeFileSync(path.join(root, relative), prefix + result.body)
  }
}
console.log(JSON.stringify({ mode: apply ? "apply" : check ? "check" : "dry-run", pages: results.length,
  replacements: results.reduce((n, r) => n + r.replacements, 0), residual: results.reduce((n, r) => n + r.residual.length, 0),
  sample: results.slice(0, 12) }, null, 2))
if (check && results.length) process.exitCode = 1
