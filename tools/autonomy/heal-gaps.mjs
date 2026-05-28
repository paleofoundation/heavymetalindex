#!/usr/bin/env node
/**
 * Self-healing gap detector + auto-fixer.
 *
 * Scans the wiki for four recurring gap types Karen has had to fix by
 * hand (or have a Claude session fix). Each detector classifies a
 * gap as either AUTO-FIXABLE (we know the right answer deterministically)
 * or REVIEW (the right answer depends on judgment — surface to Karen).
 *
 * Run with:
 *   node tools/autonomy/heal-gaps.mjs              # detect + auto-fix safe, report rest
 *   node tools/autonomy/heal-gaps.mjs --dry-run    # detect + report, do not write
 *   node tools/autonomy/heal-gaps.mjs --report-only # alias for --dry-run
 *
 * Gap classes handled:
 *   1. Missing primary_metals_of_concern on product pages
 *      Auto-fix: infer from the product's category_label + form factor
 *      using a canonical mapping (fallback: Pb + Cd + iAs as Cat 1 default)
 *   2. Missing Sources section on product/ingredient pages
 *      Auto-fix: trigger the existing source-legend generator
 *   3. Empty contamination_profile when ≥2 sources route to the cell
 *      Auto-fix: defer to synthesis pass (writes a queue entry, doesn't
 *      modify the page autonomously — synthesis judgment is per Part 9)
 *   4. Routing-unresolved entries:
 *      - Look like frontmatter typos (Levenshtein ≤ 2 from a known slug):
 *        write a proposal to data/evidence/autonomy/routing-triage-proposals.csv
 *        for daemon promotion.
 *      - No close match and target_kind ∈ {ingredient, product}: call the
 *        provisional-scaffold tool directly to create the page so the
 *        source can route. Log to provisional-{ingredient,product}-scaffolds.jsonl.
 *      - No close match and target_kind == regulation: surface in the
 *        report (regulations need agency rule IDs we won't guess).
 *
 * Output:
 *   - data/evidence/autonomy/healing-report-<date>.md  (the changelog)
 *   - data/evidence/autonomy/healing-queue.csv        (queued synthesis jobs)
 *   - data/evidence/autonomy/routing-triage-proposals.csv (typo-fix proposals)
 *
 * Per CLAUDE.md Part 10 (2026-05-17 update): provisional ingredient and
 * product scaffolds are created automatically by the scaffold tools
 * when an unresolved routing entry has no close-slug match. Regulation
 * pages still need Karen's input (agency rule IDs). All scaffold
 * creations are logged to data/evidence/provisional-{ingredient,product}-scaffolds.jsonl
 * for after-the-fact second-guessing.
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { execFileSync } from "node:child_process"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const sourcesDir = path.join(repoRoot, "wiki/sources")
const routingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const routingUnresolvedPath = path.join(repoRoot, "data/evidence/routing_unresolved.csv")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")

const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run") || args.has("report-only")
const today = new Date().toISOString().slice(0, 10)

// main() is invoked at the bottom of the file, after every const has been
// initialized. ESM doesn't hoist const declarations.

function main() {
  fs.mkdirSync(autonomyDir, { recursive: true })

  const report = {
    started_at: new Date().toISOString(),
    dry_run: dryRun,
    fixes_applied: [],
    queued_for_synthesis: [],
    routing_typo_proposals: [],
    review_required: [],
    unchanged: 0,
  }

  // Gap 1: missing primary_metals_of_concern on product pages
  healMissingPrimaryMetals(report)

  // Gap 2: missing Sources section
  healMissingSourcesSection(report)

  // Gap 3: pending contamination_profile sub-blocks with available sources
  queueContaminationProfileSynthesis(report)

  // Gap 4: routing-unresolved typo classification
  triageRoutingUnresolved(report)

  // Write report + queue + proposals
  writeReport(report)
  writeQueue(report)
  writeRoutingTriage(report)

  console.log(`\n=== heal-gaps ${dryRun ? "DRY-RUN" : "EXECUTED"} ===`)
  console.log(`Fixes applied: ${report.fixes_applied.length}`)
  console.log(`Synthesis queued: ${report.queued_for_synthesis.length}`)
  console.log(`Routing typo proposals: ${report.routing_typo_proposals.length}`)
  console.log(`Review required: ${report.review_required.length}`)
  console.log(`Report: data/evidence/autonomy/healing-report-${today}.md`)
}

// =========================================================================
// Gap 1: missing primary_metals_of_concern
// =========================================================================

// Canonical analyte defaults per product class. These are the analytes
// every HMTc product row in the named class is expected to have
// occurrence data routed to. Source: CLAUDE.md Part 19 + Governing
// Principles v2.0 — the HMTc-10 panel applies to every food row;
// the defaults below pick the analytes most likely to have data already
// in the corpus for that class, so the pooling engine produces output
// instead of just empty pools.
const PRIMARY_METALS_DEFAULTS = {
  // Infant + child foods (Category 1): full HMTc-10 panel — these are
  // the highest-stakes rows and need every analyte even if some end up
  // as data-gap entries.
  "infant-formula": ["Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "Ni", "Al", "Cr-VI", "Sn"],
  "baby-cereals": ["Pb", "Cd", "iAs", "tAs", "tHg"],
  "baby-puree": ["Pb", "Cd", "iAs", "tAs"],
  "baby-meat": ["Pb", "Cd", "tAs", "tHg"],
  "baby-fish": ["Pb", "Cd", "tAs", "MeHg", "tHg"],
  "baby-mixed-meals": ["Pb", "Cd", "iAs", "tAs"],
  "baby-teething": ["Pb", "Cd", "iAs", "tAs"],
  // Category 5 (beverages): water-borne metals + arsenic dominate
  "juice": ["Pb", "Cd", "iAs", "tAs"],
  "plant-milk": ["Pb", "Cd", "iAs", "tAs", "Ni"],
  "tea": ["Pb", "Cd", "Al", "tAs"],
  "coffee": ["Pb", "Cd", "tAs"],
  "fermented-beverage": ["Pb", "Cd", "tAs"],
  "soft-drink": ["Pb", "Cd", "tAs"],
  "water": ["Pb", "Cd", "iAs", "tAs"],
}

function inferClassForProduct(slug) {
  if (/^infant-formula/.test(slug)) return "infant-formula"
  if (/baby-cereals|infant-cereals/.test(slug)) return "baby-cereals"
  if (/-purees?$/.test(slug)) {
    if (/meat|poultry/.test(slug)) return "baby-meat"
    if (/fish/.test(slug)) return "baby-fish"
    return "baby-puree"
  }
  if (/mixed-meals/.test(slug)) return "baby-mixed-meals"
  if (/teething|snacks/.test(slug)) return "baby-teething"
  if (/juice/.test(slug)) return "juice"
  if (/plant-milk/.test(slug)) return "plant-milk"
  if (/tea|matcha|kombucha|infusion/.test(slug)) return "tea"
  if (/coffee/.test(slug)) return "coffee"
  if (/fermented/.test(slug)) return "fermented-beverage"
  if (/soft-drink|carbonated|sports|energy/.test(slug)) return "soft-drink"
  if (/water/.test(slug)) return "water"
  return null
}

function healMissingPrimaryMetals(report) {
  if (!fs.existsSync(productsDir)) return
  for (const file of fs.readdirSync(productsDir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const filepath = path.join(productsDir, file)
    const text = fs.readFileSync(filepath, "utf8")
    const fm = parseFrontmatter(text)
    if (fm.type !== "product-category") continue

    const existing = arrayField(fm.primary_metals_of_concern)
    if (existing.length > 0) continue

    const slug = String(fm.category || fm.slug || file.replace(/\.md$/, ""))
    const className = inferClassForProduct(slug)
    if (!className) {
      report.review_required.push({
        gap: "missing_primary_metals_of_concern",
        page: `wiki/products/${file}`,
        reason: `no canonical analyte default for slug ${slug}`,
      })
      continue
    }

    const inferred = PRIMARY_METALS_DEFAULTS[className]
    if (!inferred) continue

    if (!dryRun) {
      const newText = setFrontmatterField(text, "primary_metals_of_concern", inferred)
      fs.writeFileSync(filepath, newText, "utf8")
    }

    report.fixes_applied.push({
      gap: "missing_primary_metals_of_concern",
      page: `wiki/products/${file}`,
      slug,
      inferred_class: className,
      analytes_added: inferred,
      dry_run: dryRun,
    })
  }
}

// =========================================================================
// Gap 2: missing Sources section
// =========================================================================

function healMissingSourcesSection(report) {
  // Detect pages declaring `sources: N` in frontmatter but lacking a
  // canonical Sources section in body. The fix is to trigger the
  // existing source-legend generator — but we don't run it here
  // (the daemon's tick script does that). We just log the gap so
  // the daemon knows to run source-legend if any pages fail this check.
  for (const dir of [productsDir, ingredientsDir]) {
    if (!fs.existsSync(dir)) continue
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".md") || file === "index.md") continue
      const filepath = path.join(dir, file)
      const text = fs.readFileSync(filepath, "utf8")
      const hasSourcesHeading = /^##\s+Sources\s*$/m.test(text)
      const hasSourceLegendMarker = /<!--\s*BEGIN:\s*hmi-source-legend/i.test(text)
      if (hasSourcesHeading || hasSourceLegendMarker) continue
      const fm = parseFrontmatter(text)
      const declared = Number(fm.sources)
      if (!Number.isFinite(declared) || declared === 0) continue
      report.queued_for_synthesis.push({
        gap: "missing_sources_section",
        page: `${path.relative(repoRoot, dir)}/${file}`,
        declared_sources: declared,
        fix: "run `npm run evidence:source-legend` to inject the marker-managed Sources block",
      })
    }
  }
}

// =========================================================================
// Gap 3: pending contamination_profile with sources available
// =========================================================================

function queueContaminationProfileSynthesis(report) {
  if (!fs.existsSync(ingredientsDir)) return
  if (!fs.existsSync(routingAuditPath)) return

  // Index routing audit by (ingredient_slug, metal) so we know how many
  // sources route to each ingredient × metal cell.
  const routingRows = parseCsv(fs.readFileSync(routingAuditPath, "utf8"))
  const sourcesPerIngredient = new Map()
  for (const row of routingRows) {
    const target = row.target_slug || row.product_slug
    if (!target) continue
    if (row.target_type !== "ingredient" && !target.includes("/")) {
      // routing audit may not separate types; we accept any target
    }
    const key = target
    sourcesPerIngredient.set(key, (sourcesPerIngredient.get(key) || 0) + 1)
  }

  for (const file of fs.readdirSync(ingredientsDir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const filepath = path.join(ingredientsDir, file)
    const text = fs.readFileSync(filepath, "utf8")
    const fm = parseFrontmatter(text)
    if (fm.type !== "ingredient") continue

    // contamination_profile is nested YAML; check whether any sub-block
    // remains in `status: pending` and how many sources route to this ing.
    const pendingMatches = [...text.matchAll(/^\s+([A-Z][A-Za-z0-9-]+):\s*\n\s+status:\s*pending/gm)]
    if (pendingMatches.length === 0) continue
    const slug = String(fm.commodity || fm.slug || file.replace(/\.md$/, ""))
    const sourceCount = sourcesPerIngredient.get(slug) || 0
    if (sourceCount < 2) continue

    report.queued_for_synthesis.push({
      gap: "pending_contamination_profile_with_sources",
      page: `wiki/ingredients/${file}`,
      slug,
      routed_source_count: sourceCount,
      pending_metals: pendingMatches.map((m) => m[1]),
      fix: "run synthesis pass per CLAUDE.md Part 9 to populate the pending sub-blocks",
    })
  }
}

// =========================================================================
// Gap 4: routing-unresolved triage
// =========================================================================

function triageRoutingUnresolved(report) {
  if (!fs.existsSync(routingUnresolvedPath)) return

  // Build a set of every existing slug we know about so we can detect
  // typos (close-match to existing slug = typo proposal; no close match
  // and not in the known-vocabulary = new-page proposal).
  const knownSlugs = new Set()
  for (const dir of [productsDir, ingredientsDir]) {
    if (!fs.existsSync(dir)) continue
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".md") || file === "index.md") continue
      knownSlugs.add(file.replace(/\.md$/, ""))
    }
  }

  const unresolvedRows = parseCsv(fs.readFileSync(routingUnresolvedPath, "utf8"))
  for (const row of unresolvedRows) {
    const target = row.declared_target || row.target_slug || row.unresolved_target || ""
    const targetKind = row.target_kind || ""
    const sourceId = row.source_id || ""
    if (!target) continue
    const closest = closestSlug(target, knownSlugs)
    if (closest && levenshtein(target, closest) <= 2) {
      // Likely typo — propose a frontmatter fix; daemon promotes idempotently.
      report.routing_typo_proposals.push({
        source_id: sourceId,
        unresolved_target: target,
        closest_known_slug: closest,
        edit_distance: levenshtein(target, closest),
        proposed_action: "frontmatter typo fix",
      })
      continue
    }

    // No close slug match. Either scaffold or surface (regulations only).
    if (targetKind === "ingredient" || targetKind === "product") {
      if (dryRun) {
        report.scaffold_proposals = report.scaffold_proposals || []
        report.scaffold_proposals.push({
          source_id: sourceId,
          target_kind: targetKind,
          slug: target,
          action: "would call create-provisional-" + targetKind + "-scaffold.mjs",
        })
      } else {
        const created = invokeScaffold({ targetKind, slug: target, sourceId })
        if (created) {
          report.scaffolds_created = report.scaffolds_created || []
          report.scaffolds_created.push({ source_id: sourceId, target_kind: targetKind, slug: target })
          knownSlugs.add(target)
        }
      }
    } else if (targetKind === "regulation") {
      report.review_required.push({
        gap: "routing_unresolved_new_regulation",
        source_id: sourceId,
        unresolved_target: target,
        reason: "regulation pages need agency rule ID / official citation; cannot scaffold without it",
      })
    } else {
      report.review_required.push({
        gap: "routing_unresolved_unknown_kind",
        source_id: sourceId,
        unresolved_target: target,
        reason: `target_kind="${targetKind}" not handled by autoscaffold; needs investigation`,
      })
    }
  }
}

// Sanitize a target slug declared in source frontmatter so it passes the
// scaffold validator (lowercase letters/digits/hyphens only). Catches the
// three observed defect modes:
//   - whitespace inside slug ("human milk" → "human-milk")
//   - duplicated kind prefix ("products/infant-cereal" → "infant-cereal")
//   - underscores instead of hyphens ("milk_based" → "milk-based")
// Returns { sanitized, defect } — defect is null if input was already clean.
function sanitizeScaffoldSlug(raw, targetKind) {
  let s = String(raw || "").toLowerCase().trim()
  const original = s
  const dupPrefix = targetKind === "ingredient" ? "ingredients/" : "products/"
  if (s.startsWith(dupPrefix)) s = s.slice(dupPrefix.length)
  s = s.replace(/[\s_]+/g, "-")
  s = s.replace(/[^a-z0-9-]/g, "")
  s = s.replace(/-+/g, "-").replace(/^-|-$/g, "")
  return { sanitized: s, defect: s === original ? null : `original="${original}" sanitized="${s}"` }
}

function invokeScaffold({ targetKind, slug, sourceId }) {
  const tool =
    targetKind === "ingredient"
      ? "tools/autonomy/create-provisional-ingredient-scaffold.mjs"
      : "tools/autonomy/create-provisional-product-scaffold.mjs"
  // Sanitize before invoking the scaffold tool; it rejects anything with
  // spaces, slashes, capital letters, or underscores.
  const { sanitized, defect } = sanitizeScaffoldSlug(slug, targetKind)
  if (!sanitized) {
    console.error(`Skipping scaffold for ${targetKind}/${slug}: slug sanitizes to empty string`)
    return false
  }
  if (defect) {
    console.warn(`heal-gaps: source ${sourceId} declared malformed ${targetKind} slug — ${defect}`)
  }
  slug = sanitized
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
  const reason = `heal-gaps: routing_unresolved entry from source ${sourceId} declared ${targetKind}/${slug}, no close-slug match`
  const args = [
    tool,
    "--slug",
    slug,
    "--title",
    title,
    "--reason",
    reason,
  ]
  if (sourceId) {
    args.push("--source-cite-key", sourceId)
  }
  try {
    execFileSync("node", args, { cwd: repoRoot, stdio: "inherit" })
    return true
  } catch (err) {
    console.error(`Scaffold failed for ${targetKind}/${slug}: ${err.message}`)
    return false
  }
}

function closestSlug(target, knownSlugs) {
  let best = null
  let bestDist = Infinity
  for (const slug of knownSlugs) {
    const d = levenshtein(target, slug)
    if (d < bestDist) {
      bestDist = d
      best = slug
    }
  }
  return best
}

function levenshtein(a, b) {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  const prev = Array(b.length + 1)
  const curr = Array(b.length + 1)
  for (let j = 0; j <= b.length; j++) prev[j] = j
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j]
  }
  return prev[b.length]
}

// =========================================================================
// Report writers
// =========================================================================

function writeReport(report) {
  const reportPath = path.join(autonomyDir, `healing-report-${today}.md`)
  const lines = []
  lines.push(`# Heal-gaps report — ${today}`)
  lines.push("")
  lines.push(`Generated: ${report.started_at}`)
  lines.push(`Mode: ${report.dry_run ? "DRY-RUN" : "EXECUTED"}`)
  lines.push("")
  lines.push(`## Summary`)
  lines.push("")
  lines.push(`- Fixes applied: ${report.fixes_applied.length}`)
  lines.push(`- Queued for synthesis: ${report.queued_for_synthesis.length}`)
  lines.push(`- Routing typo proposals: ${report.routing_typo_proposals.length}`)
  lines.push(`- Provisional scaffolds created: ${(report.scaffolds_created || []).length}`)
  lines.push(`- Items needing surfacing (regulation rule IDs, unknown target_kind): ${report.review_required.length}`)
  lines.push("")
  if (report.fixes_applied.length) {
    lines.push(`## Fixes applied`)
    lines.push("")
    for (const fix of report.fixes_applied) {
      lines.push(`- ${fix.page}: ${fix.gap}; added analytes [${(fix.analytes_added || []).join(", ")}] (inferred from class \`${fix.inferred_class}\`)`)
    }
    lines.push("")
  }
  if (report.queued_for_synthesis.length) {
    lines.push(`## Queued for synthesis (see data/evidence/autonomy/healing-queue.csv)`)
    lines.push("")
    const byGap = {}
    for (const q of report.queued_for_synthesis) {
      byGap[q.gap] = (byGap[q.gap] || 0) + 1
    }
    for (const [g, n] of Object.entries(byGap)) {
      lines.push(`- ${g}: ${n} item(s)`)
    }
    lines.push("")
  }
  if ((report.scaffolds_created || []).length) {
    lines.push(`## Provisional scaffolds created`)
    lines.push("")
    for (const s of report.scaffolds_created) {
      lines.push(`- ${s.target_kind}/\`${s.slug}\` (triggered by source ${s.source_id || "unknown"})`)
    }
    lines.push("")
    lines.push(`See \`data/evidence/provisional-${"{ingredient,product}"}-scaffolds.jsonl\` for the durable audit log.`)
    lines.push("")
  }
  if (report.review_required.length) {
    lines.push(`## Items needing surfacing`)
    lines.push("")
    lines.push(`These are not "pending Karen approval" — they are routing failures the autoscaffold tool cannot resolve on its own (regulation rule IDs, unknown target kinds). Each entry is a request for one specific piece of information, not a yes/no approval.`)
    lines.push("")
    for (const r of report.review_required.slice(0, 20)) {
      lines.push(`- ${r.gap}: \`${r.page || r.source_id || "?"}\` — ${r.reason}`)
    }
    if (report.review_required.length > 20) {
      lines.push(`- ... and ${report.review_required.length - 20} more (see queue file)`)
    }
    lines.push("")
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
}

function writeQueue(report) {
  const queuePath = path.join(autonomyDir, "healing-queue.csv")
  const headers = ["gap", "page", "slug", "routed_source_count", "pending_metals", "fix"]
  const lines = [headers.join(",")]
  for (const q of report.queued_for_synthesis) {
    lines.push(headers.map((h) => csvCell(q[h])).join(","))
  }
  fs.writeFileSync(queuePath, lines.join("\n") + "\n", "utf8")
}

function writeRoutingTriage(report) {
  const triagePath = path.join(autonomyDir, "routing-triage-proposals.csv")
  const headers = ["source_id", "unresolved_target", "closest_known_slug", "edit_distance", "proposed_action", "review_status"]
  const lines = [headers.join(",")]
  for (const p of report.routing_typo_proposals) {
    lines.push(headers.map((h) => csvCell(p[h])).join(","))
  }
  fs.writeFileSync(triagePath, lines.join("\n") + "\n", "utf8")
}

// =========================================================================
// Utilities
// =========================================================================

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    const match = a.match(/^--([^=]+)(?:=(.*))?$/)
    if (match) m.set(match[1], match[2] ?? "true")
  }
  return m
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const line of m[1].split("\n")) {
    const km = line.match(/^([\w-]+):\s*(.*)$/)
    if (!km) continue
    let v = km[2].trim()
    if (v.startsWith("[") && v.endsWith("]")) {
      v = v
        .slice(1, -1)
        .split(",")
        .map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"))
        .filter(Boolean)
    } else if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    fm[km[1]] = v
  }
  return fm
}

function arrayField(v) {
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean)
  if (typeof v === "string") {
    return v
      .replace(/^\[|\]$/g, "")
      .split(/[,;]/)
      .map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"))
      .filter(Boolean)
  }
  return []
}

function setFrontmatterField(text, key, value) {
  const fmEnd = text.indexOf("\n---", 4)
  if (fmEnd < 0) return text
  const fmText = text.slice(4, fmEnd)
  const body = text.slice(fmEnd)
  const valueStr = Array.isArray(value)
    ? `[${value.map((v) => (v.includes(",") || v.includes(":") ? `"${v}"` : v)).join(", ")}]`
    : String(value)
  const lineRe = new RegExp(`^${key}:.*$`, "m")
  let newFm
  if (lineRe.test(fmText)) {
    newFm = fmText.replace(lineRe, `${key}: ${valueStr}`)
  } else {
    // Insert before the closing ---. Keep the trailing newline intact.
    newFm = fmText.trimEnd() + `\n${key}: ${valueStr}`
  }
  return `---\n${newFm}${body}`
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const row = {}
    for (let j = 0; j < headers.length; j++) row[headers[j]] = cells[j] ?? ""
    rows.push(row)
  }
  return rows
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"'
        i++
      } else inQ = !inQ
    } else if (c === "," && !inQ) {
      out.push(cur)
      cur = ""
    } else cur += c
  }
  out.push(cur)
  return out
}

function csvCell(v) {
  if (v === null || v === undefined) return ""
  if (Array.isArray(v)) v = v.join(";")
  const s = String(v)
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

main()
