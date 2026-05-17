#!/usr/bin/env node
// Run the Ask-the-Index eval set against the /api/ask endpoint and report
// per-question pass/fail.
//
// Reads tests/ask-the-index-evals.md, parses each question + expected
// citation list, POSTs to the endpoint, parses the `event: meta` SSE envelope
// from the response, and checks whether every expected-required slug appears
// in the chatbot's citations array.
//
// Usage:
//   node tools/run-ask-evals.mjs
//   node tools/run-ask-evals.mjs --endpoint https://heavymetalindex.com/api/ask
//   node tools/run-ask-evals.mjs --endpoint http://localhost:3000/api/ask
//   node tools/run-ask-evals.mjs --filter brand-legal
//   node tools/run-ask-evals.mjs --filter no-evidence
//   node tools/run-ask-evals.mjs --report tests/ask-the-index-evals-report.md
//
// Exit codes:
//   0 — all evals passed (>= 90%)
//   1 — pass rate below threshold
//   2 — endpoint unreachable or returning non-JSON/non-SSE (often Vercel WAF)

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = process.argv.slice(2)

function getArg(name, def = null) {
  const idx = args.indexOf(name)
  if (idx >= 0 && idx + 1 < args.length) return args[idx + 1]
  return def
}

const endpoint = getArg("--endpoint", "https://heavymetalindex.com/api/ask")
const filter = getArg("--filter", null)
const reportPath = getArg("--report", null)
const verbose = args.includes("--verbose")

// ---------- Parse the eval set markdown ----------

const evalsPath = path.join(repoRoot, "tests/ask-the-index-evals.md")
const evalsRaw = fs.readFileSync(evalsPath, "utf8")

const audienceHeaderRe = /^## Audience: (.+)$/gm
const questionHeaderRe = /^### ([A-Z]+-\d+)\. (.+)$/gm

function slugifyAudience(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
}

function extractField(block, fieldLabel) {
  // Match "- **Field:** value" possibly multiline
  const re = new RegExp(`\\*\\*${fieldLabel}:\\*\\*\\s*([^\\n]+(?:\\n(?!\\*\\*|^### )[^\\n]+)*)`, "m")
  const m = block.match(re)
  return m ? m[1].trim() : null
}

function extractCitations(value) {
  if (!value) return []
  // Citations can be wrapped in backticks or appear as bare slugs separated by commas
  const slugs = []
  const re = /`([a-z0-9/_-]+)`/g
  let m
  while ((m = re.exec(value)) !== null) {
    slugs.push(m[1])
  }
  return slugs
}

// Build the parse: walk the markdown, segment into audiences -> questions
const evals = []
const audienceMatches = [...evalsRaw.matchAll(audienceHeaderRe)]
for (let i = 0; i < audienceMatches.length; i++) {
  const audienceLabel = audienceMatches[i][1].trim()
  const audienceSlug = slugifyAudience(audienceLabel)
  const audienceStart = audienceMatches[i].index
  const audienceEnd = i + 1 < audienceMatches.length ? audienceMatches[i + 1].index : evalsRaw.length
  const audienceBlock = evalsRaw.slice(audienceStart, audienceEnd)

  const questionMatches = [...audienceBlock.matchAll(questionHeaderRe)]
  for (let j = 0; j < questionMatches.length; j++) {
    const id = questionMatches[j][1]
    const title = questionMatches[j][2].trim()
    const qStart = questionMatches[j].index
    const qEnd = j + 1 < questionMatches.length ? questionMatches[j + 1].index : audienceBlock.length
    const block = audienceBlock.slice(qStart, qEnd)

    const question = extractField(block, "Question")
    const expectedMode = extractField(block, "Expected mode")
    const expectedRequired = extractCitations(extractField(block, "Expected citations \\(required\\)"))
    const expectedNice = extractCitations(extractField(block, "Expected citations \\(nice-to-have\\)"))
    const expectedBehavior = extractField(block, "Expected behavior")

    if (!question) continue
    evals.push({
      id,
      audience: audienceSlug,
      audienceLabel,
      title,
      question: question.replace(/^["']|["']$/g, ""),
      expectedMode,
      expectedRequired,
      expectedNice,
      expectedBehavior,
    })
  }
}

// Apply filter
const filtered = filter
  ? evals.filter((e) => e.audience.includes(filter) || e.id.toLowerCase().startsWith(filter.toLowerCase()))
  : evals

console.log(`Loaded ${evals.length} evals (${filtered.length} after filter).`)
console.log(`Endpoint: ${endpoint}`)
console.log("")

// ---------- Runner ----------

async function callEndpoint(question) {
  const startedAt = Date.now()
  let response
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: question }),
      signal: AbortSignal.timeout(60_000),
    })
  } catch (err) {
    return { error: `network: ${err.message}`, duration_ms: Date.now() - startedAt }
  }

  const contentType = response.headers.get("content-type") || ""
  if (contentType.includes("text/html")) {
    // Almost certainly Vercel WAF
    return {
      error: "HTML response (likely Vercel bot-protection challenge — exempt /api/ask in Firewall settings)",
      status: response.status,
      duration_ms: Date.now() - startedAt,
    }
  }

  if (contentType.includes("application/json")) {
    const data = await response.json()
    return {
      mode: data.mode,
      citations: (data.citations || []).map((c) => normalizeCitation(c)),
      duration_ms: Date.now() - startedAt,
    }
  }

  if (contentType.includes("text/event-stream") || contentType.includes("text/plain")) {
    const text = await response.text()
    // Parse the first event: meta block
    const metaMatch = text.match(/event:\s*meta\s*\ndata:\s*([^\n]+)/)
    if (!metaMatch) {
      return { error: "SSE response with no meta event", duration_ms: Date.now() - startedAt }
    }
    try {
      const meta = JSON.parse(metaMatch[1])
      return {
        mode: meta.mode,
        citations: (meta.citations || []).map((c) => normalizeCitation(c)),
        duration_ms: Date.now() - startedAt,
      }
    } catch (err) {
      return { error: `meta JSON parse: ${err.message}`, duration_ms: Date.now() - startedAt }
    }
  }

  return { error: `unexpected content-type: ${contentType}`, status: response.status, duration_ms: Date.now() - startedAt }
}

function normalizeCitation(citation) {
  // Accept several shapes: { slug, url, ... } or "ingredients/turmeric" or
  // "[[ingredients/turmeric]]" or full URLs.
  if (typeof citation === "string") {
    return citation.replace(/^\[\[|\]\]$/g, "").replace(/^.*heavymetalindex\.com\//, "").replace(/\.html?$/, "")
  }
  if (citation && typeof citation === "object") {
    const candidate = citation.slug || citation.path || citation.url || ""
    return String(candidate).replace(/^\[\[|\]\]$/g, "").replace(/^.*heavymetalindex\.com\//, "").replace(/\.html?$/, "")
  }
  return String(citation)
}

function evalResult(test, response) {
  if (response.error) {
    return { status: "error", note: response.error }
  }

  // No-evidence questions
  if (test.expectedMode === "no_evidence_loaded") {
    const modeOk = response.mode === "no_evidence_loaded"
    const citationsEmpty = !response.citations || response.citations.length === 0
    if (modeOk && citationsEmpty) return { status: "pass", note: "no_evidence_loaded as expected" }
    return { status: "fail", note: `expected no_evidence_loaded; got mode=${response.mode}, ${response.citations?.length ?? 0} citations` }
  }

  // Normal questions: every required slug must appear in citations
  if (!test.expectedRequired || test.expectedRequired.length === 0) {
    return { status: "skip", note: "no required citations specified" }
  }
  const cites = (response.citations || []).map((c) => c.toLowerCase())
  const missing = test.expectedRequired.filter((req) => !cites.some((c) => c.includes(req.toLowerCase())))
  if (missing.length === 0) return { status: "pass", note: `all ${test.expectedRequired.length} required citations present` }
  return { status: "fail", note: `missing required citations: ${missing.join(", ")}` }
}

// ---------- Run ----------

const results = []
for (const test of filtered) {
  process.stdout.write(`[${test.id}] ${test.title.slice(0, 60)}${test.title.length > 60 ? "..." : ""} `)
  const response = await callEndpoint(test.question)
  const result = evalResult(test, response)
  results.push({ ...test, response, result })
  const symbol = result.status === "pass" ? "✓" : result.status === "fail" ? "✗" : result.status === "skip" ? "○" : "!"
  console.log(`${symbol} ${result.note}`)
  if (verbose && response.citations) {
    console.log(`    citations: ${response.citations.join(", ")}`)
  }
}

// ---------- Report ----------

const total = results.length
const passed = results.filter((r) => r.result.status === "pass").length
const failed = results.filter((r) => r.result.status === "fail").length
const errored = results.filter((r) => r.result.status === "error").length
const skipped = results.filter((r) => r.result.status === "skip").length
const passRate = total > 0 ? (passed / (total - skipped - errored)) : 0

console.log("")
console.log(`Pass: ${passed}/${total} (${(passRate * 100).toFixed(1)}%)`)
console.log(`Fail: ${failed}, Error: ${errored}, Skip: ${skipped}`)

if (reportPath) {
  const lines = [
    `# Ask-the-Index eval report`,
    ``,
    `Generated: ${new Date().toISOString()}`,
    `Endpoint: ${endpoint}`,
    `Total: ${total} | Pass: ${passed} | Fail: ${failed} | Error: ${errored} | Skip: ${skipped}`,
    `Pass rate: ${(passRate * 100).toFixed(1)}%`,
    ``,
    `## Detail`,
    ``,
    ...results.map((r) => {
      const lines = [
        `### ${r.id}: ${r.title}`,
        ``,
        `- Status: **${r.result.status}**`,
        `- Note: ${r.result.note}`,
        `- Audience: ${r.audienceLabel}`,
        `- Question: ${r.question}`,
      ]
      if (r.response.citations) {
        lines.push(`- Actual citations: ${r.response.citations.join(", ") || "(none)"}`)
      }
      if (r.response.error) lines.push(`- Error: ${r.response.error}`)
      lines.push(``)
      return lines.join("\n")
    }),
  ]
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
  console.log(`Report: ${reportPath}`)
}

// Exit code
if (errored === total) process.exit(2)
if (passRate < 0.9 && (total - skipped - errored) > 0) process.exit(1)
process.exit(0)
