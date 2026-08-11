#!/usr/bin/env node
// Translate Heavy Metal Index synthesis pages into target languages via the
// Vercel AI Gateway. Output goes to wiki/synthesis/<lang>/<slug>.md so the
// translated pages render alongside the English original under Quartz.
//
// Per wiki/roadmap.md § Shift 3: source pages stay in English; the synthesis
// layer (the prose readers actually read) is what gets translated.
//
// Activation: AI_GATEWAY_API_KEY must be set in the environment. Karen
// already has it configured for /api/ask. Default model is the same Anthropic
// model that grounds Ask the Index. Override via HMI_TRANSLATE_MODEL.
//
// Usage:
//   node tools/translate-synthesis.mjs --lang=es --slug=organic-certification-not-protective
//   node tools/translate-synthesis.mjs --lang=zh --all
//   node tools/translate-synthesis.mjs --lang=es --all --limit=3
//
// Audit log: data/evidence/migrations/translations-<lang>-<date>.csv
//
// The translated page carries a banner pointing at the canonical English
// original, the translation date, and the model used. This is the
// transparency surface readers need to weigh the translation. Per /licensing,
// translated prose remains CC BY 4.0 with attribution to the Index.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const synthesisDir = path.join(repoRoot, "wiki/synthesis")
const today = new Date().toISOString().slice(0, 10)

const SUPPORTED_LANGUAGES = {
  es: { name: "Spanish", native: "Español" },
  zh: { name: "Chinese (Simplified)", native: "简体中文" },
  pt: { name: "Portuguese", native: "Português" },
  fr: { name: "French", native: "Français" },
  de: { name: "German", native: "Deutsch" },
  ja: { name: "Japanese", native: "日本語" },
  ko: { name: "Korean", native: "한국어" },
}

const args = process.argv.slice(2)
const langArg = args.find((a) => a.startsWith("--lang="))
const slugArg = args.find((a) => a.startsWith("--slug="))
const all = args.includes("--all")
const limitArg = args.find((a) => a.startsWith("--limit="))
const dryRun = args.includes("--dry-run") || !process.env.AI_GATEWAY_API_KEY

if (!langArg) {
  console.error("Usage: node tools/translate-synthesis.mjs --lang=<code> [--slug=<slug> | --all] [--limit=N]")
  console.error(`Supported languages: ${Object.keys(SUPPORTED_LANGUAGES).join(", ")}`)
  process.exit(1)
}
const lang = langArg.split("=")[1]
if (!SUPPORTED_LANGUAGES[lang]) {
  console.error(`Unsupported language: ${lang}. Supported: ${Object.keys(SUPPORTED_LANGUAGES).join(", ")}`)
  process.exit(1)
}
const limit = limitArg ? Number(limitArg.split("=")[1]) : Infinity

const langInfo = SUPPORTED_LANGUAGES[lang]
const outputDir = path.join(synthesisDir, lang)
fs.mkdirSync(outputDir, { recursive: true })

const auditDir = path.join(repoRoot, "data/evidence/migrations")
fs.mkdirSync(auditDir, { recursive: true })
const auditPath = path.join(auditDir, `translations-${lang}-${today}.csv`)
const auditRows = ["source_slug,target_path,model,source_sha256,timestamp"]

// Collect candidates
const candidates = []
if (slugArg) {
  const slug = slugArg.split("=")[1]
  const file = `${slug}.md`
  const filePath = path.join(synthesisDir, file)
  if (!fs.existsSync(filePath)) {
    console.error(`No such synthesis page: ${filePath}`)
    process.exit(1)
  }
  candidates.push({ slug, file })
} else if (all) {
  for (const file of fs.readdirSync(synthesisDir)) {
    if (!file.endsWith(".md") || file === "index.md" || file.startsWith("_")) continue
    if (fs.statSync(path.join(synthesisDir, file)).isDirectory()) continue
    candidates.push({ slug: file.replace(/\.md$/, ""), file })
  }
} else {
  console.error("Specify either --slug=<slug> or --all")
  process.exit(1)
}

const batch = candidates.slice(0, limit === Infinity ? candidates.length : limit)

console.log(`translate-synthesis: ${dryRun ? "DRY-RUN" : "EXECUTING"}`)
console.log(`  language:        ${lang} (${langInfo.name} / ${langInfo.native})`)
console.log(`  candidates:      ${candidates.length}`)
console.log(`  this run:        ${batch.length}`)
console.log(`  output dir:      ${path.relative(repoRoot, outputDir)}`)
if (dryRun && !process.env.AI_GATEWAY_API_KEY) {
  console.log(`\n  (AI_GATEWAY_API_KEY not set; this is a planning report)`)
  console.log(`  To activate: source .env.local (or set AI_GATEWAY_API_KEY in the shell)`)
  console.log(`\n  Candidates:`)
  for (const c of batch.slice(0, 10)) console.log(`    ${c.slug}`)
  if (batch.length > 10) console.log(`    ... and ${batch.length - 10} more`)
  process.exit(0)
}

if (dryRun) {
  console.log("\n  (dry run; no API calls made)")
  for (const c of batch.slice(0, 10)) console.log(`    ${c.slug}`)
  process.exit(0)
}

const model = process.env.HMI_TRANSLATE_MODEL || "anthropic/claude-opus-4-7"
const GATEWAY_URL = "https://ai-gateway.vercel.sh/v1/chat/completions"

let translated = 0
let skipped = 0
let failed = 0

for (const c of batch) {
  const sourcePath = path.join(synthesisDir, c.file)
  const targetPath = path.join(outputDir, c.file)
  if (fs.existsSync(targetPath)) {
    // Skip if existing translation is newer than the source
    const sourceStat = fs.statSync(sourcePath)
    const targetStat = fs.statSync(targetPath)
    if (targetStat.mtimeMs >= sourceStat.mtimeMs) {
      skipped += 1
      continue
    }
  }

  const raw = fs.readFileSync(sourcePath, "utf8")
  const parsed = matter(raw)
  const sourceBody = parsed.content
  const sourceMeta = parsed.data

  try {
    const translatedBody = await translateBody(sourceBody, lang, langInfo, model)
    const newFm = {
      ...sourceMeta,
      title: sourceMeta.title ? `${sourceMeta.title} — ${langInfo.native}` : c.slug,
      language: lang,
      translated_from: `synthesis/${c.slug}`,
      translation_date: today,
      translation_model: model,
      wiki_doi: null, // translated page gets its own DOI when minting comes online
    }
    const fmYaml = serializeFm(newFm)
    const banner = `> This is a ${langInfo.native} translation of the canonical English [[../${c.slug}|synthesis page]], generated ${today} by ${model} via the Vercel AI Gateway. The English original is the authoritative version; report translation issues via [[../../errata|errata]].\n\n`
    fs.writeFileSync(targetPath, `---\n${fmYaml}---\n\n${banner}${translatedBody}\n`, "utf8")

    auditRows.push([
      c.slug,
      path.relative(repoRoot, targetPath),
      model,
      sha256OfString(raw),
      new Date().toISOString(),
    ].join(","))
    translated += 1
    console.log(`  ✓ ${c.slug}`)
  } catch (err) {
    console.error(`  ✗ ${c.slug}: ${err.message}`)
    failed += 1
  }
}

fs.writeFileSync(auditPath, auditRows.join("\n") + "\n", "utf8")
console.log(`\n  translated: ${translated}`)
console.log(`  skipped (up to date): ${skipped}`)
console.log(`  failed:     ${failed}`)
console.log(`  audit:      ${path.relative(repoRoot, auditPath)}`)

async function translateBody(body, lang, langInfo, model) {
  const systemPrompt = `You are a translator for the Heavy Metal Index, a curated reference on heavy metals in food. Translate the user-provided Markdown text into ${langInfo.name} (${langInfo.native}).

Rules:
- Preserve all Markdown syntax exactly: headings, lists, tables, code blocks, links.
- Preserve all [[wikilinks]] verbatim — do not translate the slugs inside [[...]].
- Preserve all URLs verbatim.
- Preserve all citation markers and source identifiers verbatim (e.g. cite keys like "fda2025-lead-baby-foods").
- Preserve all numeric values, units (ppb, µg/kg, mg/kg-bw/week, etc.), and metal symbols (Pb, Cd, iAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn).
- Preserve all proper nouns (FDA, EFSA, JECFA, Codex, WHO, EPA, Institute of Contaminant Standards (ICS), Heavy Metal Index, Heavy Metal Tested & Certified, HMT&C).
- Translate the prose so it reads naturally in ${langInfo.native} for a regulator, brand-legal, or scientific audience.
- Do not add commentary, do not change the meaning, do not omit any claim.
- Output only the translated Markdown. No preamble, no postscript.`

  const response = await fetch(GATEWAY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AI_GATEWAY_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: body },
      ],
      max_tokens: 4000,
    }),
  })
  if (!response.ok) {
    const errText = await response.text()
    throw new Error(`Gateway returned ${response.status}: ${errText.slice(0, 200)}`)
  }
  const result = await response.json()
  const content = result?.choices?.[0]?.message?.content
  if (!content) throw new Error("Empty translation response")
  return content.trim()
}

function serializeFm(obj) {
  // Minimal YAML serialiser for the subset of fields we emit on translated
  // pages. Avoids dragging in js-yaml when the shape is this controlled.
  const lines = []
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined) { lines.push(`${k}: null`); continue }
    if (typeof v === "string") {
      if (v.includes("\n") || v.includes('"')) {
        lines.push(`${k}: |\n  ${v.replace(/\n/g, "\n  ")}`)
      } else {
        lines.push(`${k}: "${v.replace(/"/g, '\\"')}"`)
      }
      continue
    }
    if (typeof v === "number" || typeof v === "boolean") { lines.push(`${k}: ${v}`); continue }
    if (Array.isArray(v)) {
      lines.push(`${k}: [${v.map((x) => typeof x === "string" ? `"${x}"` : String(x)).join(", ")}]`)
      continue
    }
    if (v instanceof Date) { lines.push(`${k}: ${v.toISOString().slice(0, 10)}`); continue }
    // Fall back to JSON
    lines.push(`${k}: ${JSON.stringify(v)}`)
  }
  return lines.join("\n") + "\n"
}

function sha256OfString(s) {
  const crypto = require("node:crypto")
  return crypto.createHash("sha256").update(s).digest("hex")
}
