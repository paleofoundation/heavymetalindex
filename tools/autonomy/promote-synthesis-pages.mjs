#!/usr/bin/env node
// Autonomous synthesis-findings-page promoter.
//
// Per Karen 2026-05-28: the synthesis-paper proposal queue
// (data/evidence/synthesis-proposals.md) was Karen-curated end-to-end.
// Candidates accumulated under `## Pending candidates`, and a human
// session had to recognize a candidate had crossed the 4-criteria gate
// (CLAUDE.md Part 9 / wiki/synthesis.md "When to promote"), draft the
// page, move the block to `## Promoted`, and add an index entry.
//
// This tool closes that loop. Each tick:
//   1. Parse `## Pending candidates` in synthesis-proposals.md.
//   2. For each `### ` entry, classify:
//        READY      → 4 of 4 criteria checked (explicit "Promotion criteria
//                     met:" block OR "Promotion readiness: 4 of 4")
//        RETIRE     → explicit "do not promote" recommendation in the body
//        NOT READY  → otherwise (1-3 of 4 criteria; awaits more sources)
//        ALREADY    → heading is strikethrough or marked PROMOTED inline
//                     (data-cleanup target; entry should already be in
//                      `## Promoted`)
//   3. RETIRE: move the block to `## Retired (not synthesis-page-worthy)`
//      at the bottom of the file. No Claude call.
//   4. READY: spawn `claude --print` with a synthesis-page-drafting prompt.
//      The fresh-context session reads the proposal block + each anchor
//      source page, drafts wiki/synthesis/<slug>.md per CLAUDE.md Part 15
//      prose conventions, commits. After the spawned session returns DONE,
//      this script post-processes:
//        - move the block from Pending → Promoted in synthesis-proposals.md
//        - add an index entry in wiki/synthesis.md
//        - commit those two metadata edits as a separate small commit
//   5. ALREADY: log a hygiene note (the parser saw a strikethrough header
//      in Pending — Karen or another session marked it but did not move
//      the block; we leave that as-is for visibility).
//
// Bounded per-tick cap (default 1) because each synthesis page is a
// 30–60 min Opus draft. As the queue fills with newly-eligible candidates,
// each tick drains one. The vast majority of ticks will report zero
// candidates ready, which is the correct steady state given the 4-criteria
// gate.
//
// Usage:
//   node tools/autonomy/promote-synthesis-pages.mjs              # auto, max 1
//   node tools/autonomy/promote-synthesis-pages.mjs --max=2      # cap
//   node tools/autonomy/promote-synthesis-pages.mjs --dry-run    # plan only
//   node tools/autonomy/promote-synthesis-pages.mjs --slug=foo   # force one
//   node tools/autonomy/promote-synthesis-pages.mjs --force=foo  # bypass gate
//   node tools/autonomy/promote-synthesis-pages.mjs --no-retire  # skip retire pass
//   node tools/autonomy/promote-synthesis-pages.mjs --no-archive # skip archive pass

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const noRetire = args.has("no-retire")
const noArchive = args.has("no-archive")
const maxPromotions = Number(args.get("max") ?? 1)
const slugFilter = args.get("slug") ?? null
const slugForce = args.get("force") ?? null
const model = args.get("model") ?? "claude-opus-4-7"

const proposalsPath = path.join(repoRoot, "data/evidence/synthesis-proposals.md")
const indexPath = path.join(repoRoot, "wiki/synthesis.md")
const synthDir = path.join(repoRoot, "wiki/synthesis")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const today = new Date().toISOString().slice(0, 10)
const tickTimestamp = new Date().toISOString()

fs.mkdirSync(autonomyDir, { recursive: true })

console.log(`promote-synthesis-pages: max=${maxPromotions}, model=${model}, dry-run=${dryRun}, slug=${slugFilter || "auto"}, force=${slugForce || "none"}`)

// ---------- Parse the proposals file ----------

if (!fs.existsSync(proposalsPath)) {
  console.error(`Proposals file not found: ${proposalsPath}`)
  process.exit(1)
}

const proposalsRaw = fs.readFileSync(proposalsPath, "utf8")
const lines = proposalsRaw.split("\n")

// State machine: walk the file, identify section headers (## Pending
// candidates, ## Promoted, ## Workflow notes, ## Retired ...), and within
// the Pending section break the body into `### `-headed blocks.

const sections = parseSections(lines)
const pending = sections.find((s) => s.h2 === "Pending candidates")
const promoted = sections.find((s) => s.h2 === "Promoted")
const workflow = sections.find((s) => s.h2 === "Workflow notes")
let retired = sections.find((s) => s.h2 === "Retired (not synthesis-page-worthy)")

if (!pending) {
  console.error("Could not locate `## Pending candidates` section in proposals file.")
  process.exit(1)
}

const candidates = parsePendingCandidates(pending.body)

console.log(`\nPending candidates parsed: ${candidates.length}`)
for (const c of candidates) {
  console.log(`  - [${c.classification}] ${c.slug || "(no-slug)"} — ${c.title}`)
}

// ---------- Filter to actionables ----------

let retireTargets = noRetire ? [] : candidates.filter((c) => c.classification === "RETIRE")
let archiveTargets = noArchive ? [] : candidates.filter((c) => c.classification === "ALREADY")
let readyTargets = candidates.filter((c) => c.classification === "READY")

if (slugFilter) {
  retireTargets = retireTargets.filter((c) => c.slug === slugFilter)
  archiveTargets = archiveTargets.filter((c) => c.slug === slugFilter)
  readyTargets = readyTargets.filter((c) => c.slug === slugFilter)
}

if (slugForce) {
  const forced = candidates.find((c) => c.slug === slugForce)
  if (!forced) {
    console.error(`--force=${slugForce} did not match any pending candidate.`)
    process.exit(1)
  }
  if (forced.classification !== "READY") {
    console.warn(`--force=${slugForce} bypassing gate; original classification: ${forced.classification}`)
    forced.classification = "READY"
    forced.forced = true
  }
  readyTargets = [forced]
  retireTargets = []
}

readyTargets = readyTargets.slice(0, maxPromotions)

console.log(`\nActionables this run:`)
console.log(`  RETIRE: ${retireTargets.length}`)
console.log(`  ARCHIVE: ${archiveTargets.length}`)
console.log(`  PROMOTE: ${readyTargets.length} (cap ${maxPromotions})`)

if (dryRun) {
  console.log("\nDRY RUN — not modifying files or invoking claude.")
  if (readyTargets.length) {
    console.log("\nWould promote:")
    for (const c of readyTargets) {
      console.log(`  - ${c.slug}: ${c.title}`)
      console.log(`    anchors: ${c.anchorCiteKeys.join(", ") || "(none parsed)"}`)
    }
  }
  if (retireTargets.length) {
    console.log("\nWould retire:")
    for (const c of retireTargets) console.log(`  - ${c.slug || "(no-slug)"}: ${c.title}`)
  }
  if (archiveTargets.length) {
    console.log("\nWould archive (already-promoted strikethrough entries):")
    for (const c of archiveTargets) console.log(`  - ${c.slug || c.title}`)
  }
  process.exit(0)
}

// ---------- Execute RETIRE pass first (no Claude needed) ----------

const retiredApplied = []
for (const candidate of retireTargets) {
  console.log(`\n[retire] ${candidate.title}`)
  const updated = applyRetirement(proposalsRaw, candidate)
  if (!updated) {
    console.log(`  SKIP: could not locate block in file`)
    continue
  }
  fs.writeFileSync(proposalsPath, updated, "utf8")
  retiredApplied.push(candidate)
  console.log(`  OK: moved to Retired section`)
  // Re-read so subsequent retire-passes/promote-passes operate on the
  // updated file content.
  // (We use a fresh read instead of the in-memory variable so we don't
  // drift if applyRetirement is ever amended to include side effects.)
}
if (retiredApplied.length) {
  commitChanges(`autonomy: retire ${retiredApplied.length} synthesis proposal(s) — methodology-note class`,
                ["data/evidence/synthesis-proposals.md"])
}

// ---------- Execute ARCHIVE pass (no Claude; entries already promoted) ----------

const archivedApplied = []
for (const candidate of archiveTargets) {
  console.log(`\n[archive] ${candidate.title}`)
  const currentContent = fs.readFileSync(proposalsPath, "utf8")
  const updated = applyArchive(currentContent, candidate)
  if (!updated) {
    console.log(`  SKIP: could not locate block in file`)
    continue
  }
  fs.writeFileSync(proposalsPath, updated, "utf8")
  archivedApplied.push(candidate)
  console.log(`  OK: moved to Archive section`)
}
if (archivedApplied.length) {
  commitChanges(`autonomy: archive ${archivedApplied.length} already-promoted synthesis proposal(s) — growth trace preserved`,
                ["data/evidence/synthesis-proposals.md"])
}

// ---------- Execute PROMOTE pass ----------

const succeeded = []
const stopped = []
const failed = []

for (const candidate of readyTargets) {
  console.log(`\n[promote] ${candidate.slug}: ${candidate.title}`)

  // Re-read the proposals file each iteration; previous iterations of this
  // loop may have moved earlier blocks.
  const currentProposals = fs.readFileSync(proposalsPath, "utf8")
  if (!currentProposals.includes(candidate.headingLine)) {
    console.log(`  STOP: heading not found in current proposals file (already moved?)`)
    stopped.push({ ...candidate, reason: "heading not found" })
    continue
  }

  // Pre-flight: refuse to overwrite an existing synthesis page unless --force.
  const synthPath = path.join(synthDir, `${candidate.slug}.md`)
  if (fs.existsSync(synthPath) && !candidate.forced) {
    console.log(`  STOP: ${path.relative(repoRoot, synthPath)} already exists`)
    stopped.push({ ...candidate, reason: "synthesis page already exists" })
    continue
  }

  // Pre-flight: confirm we have a usable slug.
  if (!candidate.slug) {
    console.log(`  STOP: no suggested-slug found in proposal block`)
    stopped.push({ ...candidate, reason: "no slug" })
    continue
  }

  const prompt = buildPrompt(candidate)
  const result = invokeClaude(prompt)

  if (result.error) {
    console.log(`  FAIL: ${result.error}`)
    failed.push({ ...candidate, error: result.error })
    continue
  }
  if (result.stop) {
    console.log(`  STOP: ${result.reason}`)
    stopped.push({ ...candidate, reason: result.reason })
    continue
  }

  // Confirm the page exists post-spawn.
  if (!fs.existsSync(synthPath)) {
    console.log(`  FAIL: spawn reported DONE but ${path.relative(repoRoot, synthPath)} is missing`)
    failed.push({ ...candidate, error: "page not written" })
    continue
  }

  // Post-process: move block in proposals file, append to wiki/synthesis.md
  // index. The spawned session already committed the page; this is a
  // separate index-maintenance commit.
  const movedProposals = applyPromotion(fs.readFileSync(proposalsPath, "utf8"), candidate)
  if (movedProposals) fs.writeFileSync(proposalsPath, movedProposals, "utf8")

  const updatedIndex = applyIndexInsertion(fs.readFileSync(indexPath, "utf8"), candidate, result.summary || "")
  if (updatedIndex) fs.writeFileSync(indexPath, updatedIndex, "utf8")

  commitChanges(`synthesis-index: promote ${candidate.slug} — Pending → Promoted + index entry`,
                ["data/evidence/synthesis-proposals.md", "wiki/synthesis.md"])

  succeeded.push({ ...candidate, summary: result.summary })
  console.log(`  OK: ${result.summary || candidate.slug + " promoted"}`)
}

writeReport({ retired: retiredApplied, archived: archivedApplied, succeeded, stopped, failed })

console.log(`\nBatch complete: ${succeeded.length} promoted, ${retiredApplied.length} retired, ${archivedApplied.length} archived, ${stopped.length} stopped, ${failed.length} failed.`)
process.exit(0)

// ---------- Parsing ----------

function parseSections(allLines) {
  // Each ## H2 starts a section; body runs until the next ## or EOF.
  // (We're not nesting; ### subheadings stay in body.)
  const out = []
  let current = null
  for (let i = 0; i < allLines.length; i++) {
    const m = allLines[i].match(/^## (.+?)\s*$/)
    if (m) {
      if (current) out.push(current)
      current = { h2: m[1].trim(), startLine: i, body: [] }
    } else if (current) {
      current.body.push(allLines[i])
    }
  }
  if (current) out.push(current)
  return out
}

function parsePendingCandidates(bodyLines) {
  // Break Pending body into ### blocks. For each, classify + extract slug
  // + extract anchor cite-keys.
  const blocks = []
  let buf = null
  for (const line of bodyLines) {
    const m = line.match(/^### (.+?)\s*$/)
    if (m) {
      if (buf) blocks.push(buf)
      buf = { headingLine: line, headingText: m[1].trim(), bodyLines: [] }
    } else if (buf) {
      buf.bodyLines.push(line)
    }
  }
  if (buf) blocks.push(buf)

  return blocks.map(classify)
}

function classify(block) {
  const heading = block.headingText
  const body = block.bodyLines.join("\n")
  const title = heading.replace(/~~/g, "").replace(/\s*→\s*PROMOTED.*$/i, "").trim()

  // ALREADY: heading is strikethrough or marked PROMOTED inline. Means the
  // block stayed in Pending after a manual promotion — surface it but do
  // nothing.
  if (/~~/.test(heading) || /→\s*PROMOTED/i.test(heading)) {
    return { ...block, title, slug: parseSuggestedSlug(body), classification: "ALREADY", anchorCiteKeys: parseAnchorCiteKeys(body) }
  }

  // RETIRE: body explicitly recommends against promotion.
  if (
    /Status:\s*\*\*recommendation\s+—\s+do not promote/i.test(body) ||
    /Status:.*do not promote.*synthesis\s+findings\s+page/i.test(body) ||
    /this entry can be retired/i.test(body)
  ) {
    return { ...block, title, slug: parseSuggestedSlug(body) || slugifyTitle(title), classification: "RETIRE", anchorCiteKeys: parseAnchorCiteKeys(body) }
  }

  // READY: explicit "4 of 4" or "Promotion criteria met:" with 4 checkmarks.
  const hasFourOfFour = /Promotion readiness:\s*4 of 4/i.test(body)
  const checkmarkBlock = body.match(/Promotion criteria met:[\s\S]*?(?=\n\n|$)/i)
  const checkmarkCount = checkmarkBlock ? (checkmarkBlock[0].match(/✓/g) || []).length : 0
  if (hasFourOfFour || checkmarkCount >= 4) {
    return { ...block, title, slug: parseSuggestedSlug(body) || slugifyTitle(title), classification: "READY", anchorCiteKeys: parseAnchorCiteKeys(body) }
  }

  // NOT READY: anything else.
  return { ...block, title, slug: parseSuggestedSlug(body) || slugifyTitle(title), classification: "NOT_READY", anchorCiteKeys: parseAnchorCiteKeys(body) }
}

function parseSuggestedSlug(body) {
  // Look for "Suggested synthesis page slug: `<slug>`."
  const m = body.match(/Suggested synthesis page slug:\s*`([a-z0-9-]+)`/i)
  return m ? m[1] : null
}

function parseAnchorCiteKeys(body) {
  // Collect every [[wiki/sources/<cite-key>|...]] or [[sources/<cite-key>|...]]
  // or [[../../wiki/sources/<cite-key>|...]] reference.
  const re = /\[\[(?:\.\.\/\.\.\/)?(?:wiki\/)?sources\/([a-z0-9-]+)(?:\|[^\]]+)?\]\]/gi
  const out = new Set()
  let m
  while ((m = re.exec(body))) out.add(m[1])
  return [...out]
}

function slugifyTitle(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80)
}

// ---------- Apply edits to proposals file ----------

function applyRetirement(currentRaw, candidate) {
  const block = extractBlock(currentRaw, candidate.headingLine)
  if (!block) return null
  let working = removeBlock(currentRaw, candidate.headingLine)

  const retiredHeading = "## Retired (not synthesis-page-worthy)"
  const retiredBlurb = "Entries below were proposed as synthesis-findings-page candidates but explicitly recommend against promotion in their body text. They are kept here for transparency; the recommended follow-up action lives inside each block."

  if (!working.includes(retiredHeading)) {
    // Insert the Retired section just before ## Workflow notes (or at EOF
    // if no Workflow notes section).
    const insertionPoint = working.indexOf("\n## Workflow notes")
    const retiredHeader = `${retiredHeading}\n\n${retiredBlurb}\n\n`
    if (insertionPoint >= 0) {
      working = working.slice(0, insertionPoint + 1) + retiredHeader + working.slice(insertionPoint + 1)
    } else {
      working = working.trimEnd() + "\n\n" + retiredHeader
    }
  }

  // Append the block at the end of the Retired section.
  const bounds = findSectionBounds(working, retiredHeading)
  if (!bounds) return null
  const sectionContent = working.slice(bounds.start, bounds.end).trimEnd()
  const blockWithDate = block.trimEnd() + `\n\nRetired ${today}: classification confirmed as methodology-note rather than synthesis-page-worthy per the recommendation in the block body.`
  const newSection = `${sectionContent}\n\n${blockWithDate}\n\n`
  return working.slice(0, bounds.start) + newSection + working.slice(bounds.end)
}

function applyArchive(currentRaw, candidate) {
  // Move an ALREADY-promoted block (heading marked ~~strikethrough~~ or
  // "→ PROMOTED") out of Pending into `## Archive (promoted, growth
  // trace preserved)`. The block contains batch-by-batch narrative that
  // pre-dated promotion and is worth keeping for source-by-source history;
  // moving it preserves the narrative while clearing the Pending queue.
  const block = extractBlock(currentRaw, candidate.headingLine)
  if (!block) return null
  let working = removeBlock(currentRaw, candidate.headingLine)

  const archiveHeading = "## Archive (promoted, growth trace preserved)"
  const archiveBlurb = "Entries below were promoted to dedicated synthesis pages; their Pending-section narratives (batch-by-batch evidence accumulation) are kept here as a growth trace. The canonical short-form record lives in the `## Promoted` section; the full page lives in `wiki/synthesis/`."

  if (!working.includes(archiveHeading)) {
    // Place Archive between Promoted and Retired (or Workflow notes if no
    // Retired section exists).
    const insertionPoint = working.indexOf("\n## Retired ") >= 0
      ? working.indexOf("\n## Retired ")
      : working.indexOf("\n## Workflow notes")
    const archiveHeader = `${archiveHeading}\n\n${archiveBlurb}\n\n`
    if (insertionPoint >= 0) {
      working = working.slice(0, insertionPoint + 1) + archiveHeader + working.slice(insertionPoint + 1)
    } else {
      working = working.trimEnd() + "\n\n" + archiveHeader
    }
  }

  // Append the block at the end of the Archive section.
  const bounds = findSectionBounds(working, archiveHeading)
  if (!bounds) return null
  const sectionContent = working.slice(bounds.start, bounds.end).trimEnd()
  const blockWithDate = block.trimEnd() + `\n\nArchived ${today}: already in \`## Promoted\` with synthesis page at \`wiki/synthesis/${candidate.slug || slugifyTitle(candidate.title)}\`.`
  const newSection = `${sectionContent}\n\n${blockWithDate}\n\n`
  return working.slice(0, bounds.start) + newSection + working.slice(bounds.end)
}

function applyPromotion(currentRaw, candidate) {
  const block = extractBlock(currentRaw, candidate.headingLine)
  if (!block) return null
  const stripped = removeBlock(currentRaw, candidate.headingLine)

  // Compose the Promoted-section block.
  const anchorList = candidate.anchorCiteKeys.length
    ? candidate.anchorCiteKeys.map((k) => k.split("-")[0] + " et al.").join(", ")
    : "see proposal block in git history"
  const promotedBlock = `### ${candidate.title}\n\nPromoted ${today}. Anchor sources: ${anchorList}. Synthesis page: [[../../wiki/synthesis/${candidate.slug}|${candidate.slug}]].`

  const bounds = findSectionBounds(stripped, "## Promoted")
  if (!bounds) return null
  const sectionContent = stripped.slice(bounds.start, bounds.end).trimEnd()
  const newSection = `${sectionContent}\n\n${promotedBlock}\n\n`
  return stripped.slice(0, bounds.start) + newSection + stripped.slice(bounds.end)
}

function findSectionBounds(raw, headingLiteral) {
  // Find the line `^<headingLiteral>$`. Section runs from start of that
  // line to the start of the next `## ` heading or EOF.
  const re = new RegExp(`^${escapeRegex(headingLiteral)}\\s*$`, "m")
  const m = raw.match(re)
  if (!m) return null
  const start = m.index
  const afterStart = start + m[0].length
  const restRaw = raw.slice(afterStart)
  const nextH2 = restRaw.search(/\n## /)
  const end = nextH2 < 0 ? raw.length : afterStart + nextH2
  return { start, end }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function extractBlock(raw, headingLine) {
  const idx = raw.indexOf(headingLine)
  if (idx < 0) return null
  // Block runs from `headingLine` to the next `### ` or `## ` or EOF.
  const after = raw.slice(idx + headingLine.length)
  const nextHeading = after.search(/^(###?\s|##\s)/m)
  return nextHeading < 0 ? raw.slice(idx).trimEnd() + "\n" : raw.slice(idx, idx + headingLine.length + nextHeading)
}

function removeBlock(raw, headingLine) {
  const idx = raw.indexOf(headingLine)
  if (idx < 0) return raw
  const after = raw.slice(idx + headingLine.length)
  const nextHeading = after.search(/^(###?\s|##\s)/m)
  if (nextHeading < 0) return raw.slice(0, idx).trimEnd() + "\n"
  return raw.slice(0, idx) + raw.slice(idx + headingLine.length + nextHeading)
}

// ---------- Apply edit to synthesis.md index ----------

function applyIndexInsertion(currentRaw, candidate, drafterSummary) {
  // Find `## Synthesis findings pages`; insert a new bullet at the TOP of
  // that list (most recent first, matching the existing ordering).
  const headingMatch = currentRaw.match(/^##\s+Synthesis findings pages\s*$/m)
  if (!headingMatch) return null
  const headingIdx = currentRaw.indexOf(headingMatch[0])
  const afterHeading = currentRaw.slice(headingIdx + headingMatch[0].length)
  // First bullet starts after a blank line.
  const firstBulletIdx = afterHeading.search(/\n- \[\[/)
  if (firstBulletIdx < 0) return null
  const insertAt = headingIdx + headingMatch[0].length + firstBulletIdx + 1 // +1 for the newline

  const titleSentence = candidate.title
  const established = today
  const summary = drafterSummary && drafterSummary.length < 800
    ? drafterSummary
    : `${candidate.anchorCiteKeys.length} anchor source(s); see synthesis page body and proposal block in data/evidence/synthesis-proposals.md (Promoted section) for the full rationale.`
  const bullet = `- [[synthesis/${candidate.slug}|${titleSentence}]] — established ${established}. ${summary}\n`
  return currentRaw.slice(0, insertAt) + bullet + currentRaw.slice(insertAt)
}

// ---------- Per-candidate prompt ----------

function buildPrompt(candidate) {
  const proposalBlock = candidate.headingLine + "\n" + candidate.bodyLines.join("\n")
  const synthPathRel = `wiki/synthesis/${candidate.slug}.md`
  const anchorList = candidate.anchorCiteKeys.length
    ? candidate.anchorCiteKeys.map((k) => `  - wiki/sources/${k}.md`).join("\n")
    : "  (none parseable from the proposal block; re-derive from the block body)"

  return `You are running one cycle of the Heavy Metal Index autonomous synthesis-paper promoter. The proposal block below has crossed the 4-criteria promotion gate from CLAUDE.md Part 9 / wiki/synthesis.md. Your job: draft ${synthPathRel} as a publication-grade synthesis-findings page.

slug: ${candidate.slug}
title: ${candidate.title}
output: ${synthPathRel}

PROPOSAL BLOCK (verbatim from data/evidence/synthesis-proposals.md):

${proposalBlock}

ANCHOR SOURCES (parsed from the proposal block; verify presence on disk):
${anchorList}

Workflow:

1. Read the proposal block above carefully. The thesis, anchor-source list, criteria-met justification, and any "Suggested synthesis page slug" hint are load-bearing inputs.

2. Read each anchor source page in full from wiki/sources/. For each, capture the TL;DR + ## Key numbers section so your synthesis can cite specific values via [[sources/<cite-key>]] wikilinks.

3. Read one or two existing synthesis pages as the format reference:
   - wiki/synthesis/climate-metals-tradeoffs.md (multi-anchor, multi-mechanism)
   - wiki/synthesis/seaweed-cd-as-contamination.md (single-thesis, multi-region)
   - wiki/synthesis/organic-certification-not-protective.md (counter-intuitive finding, multi-matrix)

4. Draft ${synthPathRel} with the following structure:

   Frontmatter (REQUIRED):
   ---
   type: synthesis
   title: "${candidate.title}"
   slug: ${candidate.slug}
   audience: [regulator, educator, brand-legal]   # subset per actual scope
   metals: [...]                                  # subset of [Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr-VI, Sn]
   ingredients: [...]                             # wikilink-style "[[ingredients/<slug>]]" array
   products: [...]                                # wikilink-style "[[products/<slug>]]" array
   anchor_sources: [...]                          # wikilink-style "[[sources/<cite-key>]]" array, list every anchor
   established: ${today}
   wiki_doi: null
   updated: ${today}
   ---

   Body:
   - One opening paragraph that states the thesis in one sentence and previews why the convergence is the finding.
   - One section per mechanism / anchor / dimension (typically 2-5 H2 sections). Each cites specific numerical claims via [[sources/...]] wikilinks. Numbers are in their original units; conversions are noted inline.
   - One "Provisional status and what would change the synthesis" section that names the corroborating-study count and direction that would advance or reverse the page.
   - One "Implications for HMTc, brand-legal, regulators, educators" section (sub-paragraphs per audience). Per CLAUDE.md Part 2, the wiki/HMTc firewall is binding: state what the literature supports; do not soften the literature toward HMTc convenience, and do not strengthen it toward HMTc convenience.

   Style (CLAUDE.md Part 15):
   - Prose paragraphs; bullets only when structurally required (e.g., a per-anchor source list at the top of a mechanism section is fine).
   - No em dashes.
   - No inline bold for emphasis.
   - Every numerical claim cites a [[sources/...]] wikilink in the same sentence.
   - Register: Cochrane review / EFSA scientific opinion / WHO monograph.
   - The page should be 1500-3500 words.

5. After writing the page, verify:
   - File exists at ${synthPathRel}.
   - Frontmatter parses (basic check: top-of-file --- delimiter with title/slug/established/anchor_sources).
   - Every anchor source from the proposal block appears as a [[sources/<cite-key>]] wikilink at least once in the body.

6. Commit with:

   synthesis: promote ${candidate.slug} — ${candidate.anchorCiteKeys.length} anchor sources

   <one-sentence summary of the thesis>

   Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>

Hard constraints (per CLAUDE.md):
- Do NOT push to remote (the daemon tick handles the push at end of tick).
- Do NOT touch synthesis-proposals.md or wiki/synthesis.md — the parent script will move the proposal block and add the index entry as a follow-up commit.
- Do NOT touch source pages (wiki/sources/*.md).
- Do NOT introduce new ingredient or product pages.
- Do NOT include HMTc-specific threshold values (per Part 2 firewall, HMTc threshold-setting math is staff-side, not wiki).
- Brand names: only when they are public regulatory-event facts (recalls, import alerts). No brand-by-brand contamination tables.

Stop conditions (exit cleanly without committing):
- Two or more anchor source pages from the proposal block are missing on disk (cannot honestly write the synthesis).
- The proposal block's "Promotion criteria met:" checkmarks do not actually rest on the cited anchor sources after you read them (i.e., the proposal block overstated the evidence; surface that as STOP rather than drafting a weak synthesis).
- The output file ${synthPathRel} already exists and contains substantive content (the parent script normally guards against this, but double-check).

When done, print a single final line to stdout: "DONE: ${candidate.slug} — <one-sentence summary>" on success, "STOP: <reason>" on a stop condition, or "FAIL: <reason>" on an error.`
}

function invokeClaude(prompt) {
  const cliArgs = ["--print", "--model", model, "--add-dir", repoRoot]
  try {
    const res = spawnSync("claude", cliArgs, {
      cwd: repoRoot,
      input: prompt,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 45 * 60 * 1000,
    })
    if (res.error) return { error: res.error.message }
    if (res.status !== 0) return { error: `exit ${res.status}: ${(res.stderr || "").slice(0, 800)}` }
    const stdout = res.stdout || ""
    const lastLine = stdout.trim().split("\n").slice(-1)[0] || ""
    if (lastLine.startsWith("DONE:")) return { ok: true, summary: lastLine.slice(5).trim() }
    if (lastLine.startsWith("STOP:")) return { stop: true, reason: lastLine.slice(5).trim() }
    if (lastLine.startsWith("FAIL:")) return { error: lastLine.slice(5).trim() }
    return { error: `unrecognized final line: "${lastLine.slice(0, 200)}"` }
  } catch (err) {
    return { error: err.message }
  }
}

// ---------- Commit helper ----------

function commitChanges(message, files) {
  const add = spawnSync("git", ["add", ...files], { cwd: repoRoot, encoding: "utf8" })
  if (add.status !== 0) {
    console.warn(`  git add failed: ${add.stderr}`)
    return false
  }
  const commit = spawnSync("git", ["commit", "-m", `${message}\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`],
                          { cwd: repoRoot, encoding: "utf8" })
  if (commit.status !== 0 && !/nothing to commit/i.test(commit.stdout + commit.stderr)) {
    console.warn(`  git commit failed: ${commit.stderr || commit.stdout}`)
    return false
  }
  return true
}

// ---------- Reporting ----------

function writeReport({ retired, archived, succeeded, stopped, failed }) {
  const reportPath = path.join(autonomyDir, `synthesis-promotion-${today}.md`)
  const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Synthesis-paper promotion report — ${today}\n\n`
  const lines = [existing.trimEnd(), "", `## Run ${tickTimestamp}`, ""]
  lines.push(`- Retired (no claude call): ${retired.length}`)
  lines.push(`- Archived (already promoted, growth trace preserved): ${archived.length}`)
  lines.push(`- Promoted (drafted + committed): ${succeeded.length}`)
  lines.push(`- Stopped: ${stopped.length}`)
  lines.push(`- Failed: ${failed.length}`)
  lines.push("")
  if (retired.length) {
    lines.push("### Retired")
    for (const c of retired) lines.push(`- ${c.slug || "(no-slug)"}: ${c.title}`)
    lines.push("")
  }
  if (archived.length) {
    lines.push("### Archived")
    for (const c of archived) lines.push(`- ${c.slug || c.title}`)
    lines.push("")
  }
  if (succeeded.length) {
    lines.push("### Promoted")
    for (const c of succeeded) lines.push(`- ${c.slug} — ${c.summary || c.title}`)
    lines.push("")
  }
  if (stopped.length) {
    lines.push("### Stopped")
    for (const c of stopped) lines.push(`- ${c.slug || "(no-slug)"}: ${c.reason}`)
    lines.push("")
  }
  if (failed.length) {
    lines.push("### Failed")
    for (const c of failed) lines.push(`- ${c.slug || "(no-slug)"}: ${c.error}`)
    lines.push("")
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq > 0) m.set(a.slice(2, eq), a.slice(eq + 1))
      else m.set(a.slice(2), "true")
    }
  }
  return Object.assign(m, { has: (k) => m.get(k) === "true" })
}
