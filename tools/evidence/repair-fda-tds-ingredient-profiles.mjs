#!/usr/bin/env node
import { contractOwnsPage } from "../contracts/page-owner.mjs"
/** Source-grounded recovery of the FDA TDS ingredient routes and profile defects.
 * Dry-run by default; --apply writes only the routed/affected ingredient pages.
 * Original claims and each admission/exclusion decision are retained in the
 * structured adjudication record. No occurrence value becomes a live limit.
 */
import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import matter from "gray-matter"
import { parseCsv } from "./lib/csv.mjs"
import { regenerate } from "../build-ingredient-contamination-tables.mjs"
import { metalLabel, metalSymbol } from "../lib/metal-names.mjs"
import { FDA_SOURCE, FDA_SUMMARY, WHO_SOURCE, PROFILE_METALS, readProfileEvidence, fdaObservation, whoObservation, numberOrNull } from "./lib/ingredient-profile-evidence.mjs"

const root = process.cwd()
const apply = process.argv.includes("--apply")
const today = new Date().toISOString().slice(0, 10)
const registers = readProfileEvidence(root)
const routes = parseCsv(fs.readFileSync("data/evidence/fda_tds_fy2018_2020_ingredient_routes.csv", "utf8"))
const outPath = "data/evidence/fda_tds_profile_adjudications.json"
const previous = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, "utf8")) : { cells: [] }
const decisions = new Map(previous.cells.map((c) => [`${c.ingredient}::${c.metal}`, c]))
const grouped = new Map()
for (const row of registers.fda.filter((r) => r.metal_species && r.ingredient_slug)) {
  if (!grouped.has(row.ingredient_slug)) grouped.set(row.ingredient_slug, [])
  grouped.get(row.ingredient_slug).push(row)
}
const allPages = new Set([...grouped.keys(), ...fs.readdirSync("wiki/ingredients").filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3))])
const whoFoodNames = {
  cucumber: ["Cucumber"], strawberries: ["Strawberry"], banana: ["Banana"], avocado: ["Avocado"],
  oranges: ["Orange, sweet, sour + orange-like hybrid"], broccoli: ["Broccoli"], pear: ["Pear"],
  potatoes: ["Potato"], peanuts: ["Peanut"], "white-bread": ["Bread & other cooked cereal products"],
  "fish-fingers": ["MARINE FISHES"],
}
const changed = []
const audits = []
const created = []
for (const slug of [...allPages].sort()) {
  const page = `wiki/ingredients/${slug}.md`
  const exists = fs.existsSync(page)
  const rows = grouped.get(slug) || []
  if (!exists && !rows.length) continue
  const original = exists ? fs.readFileSync(page, "utf8") : ""
  let text = original || makeStub(slug)
  if (contractOwnsPage(original)) continue // Compiled by tools/contracts/build-pilot.mjs.
  const parsed = matter(text)
  const profile = parsed.data.contamination_profile
  if (!profile) continue
  const tableSources = perMetalSources(text)
  const changedCells = []
  for (const [metal, cell] of Object.entries(profile)) {
    const pairRows = rows.filter((r) => r.metal_species === metal)
    const cites = tableSources[metal] || []
    const unsupportedFda = cites.includes(FDA_SOURCE) && !pairRows.length
    const exactZero = JSON.stringify(cell.typical_ppb) === "[0,0]" && cell.p95_ppb === 0
    const prior = decisions.get(`${slug}::${metal}`)
    if (!unsupportedFda && !exactZero && !prior) continue
    const before = prior?.previous_profile || JSON.parse(JSON.stringify(cell))
    const priorSources = prior?.previous_table_sources || cites
    const allNonDetect = pairRows.length > 0 && new Set(pairRows.map((r) => r.basis)).size === 1
      && pairRows.every((r) => Number(r.n) > 0 && Number(r.non_detect_n ?? r.reported_zero_n) === Number(r.n) && Number(r.reporting_limit_max_ppb_equivalent) > 0)
    const admitted = allNonDetect && !unsupportedFda
      ? pairRows.map((r) => fdaObservation(r)) : []
    const context = []
    if (!admitted.length) context.push(...pairRows.map((r) => fdaObservation(r, "context")))
    const whoRows = registers.who.filter((r) => r.metal_species === metal && (whoFoodNames[slug] || []).includes(r.food_name))
    if (unsupportedFda || prior?.reason === "unsupported_fda_species") context.push(...whoRows.map((r) => whoObservation(r)))
    const why = prior?.reason || (unsupportedFda ? "unsupported_fda_species" : "undisclosed_zero_censoring")
    const note = admitted.length
      ? "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
      : why === "unsupported_fda_species"
        ? "The FDA dataset does not measure this food/species pair. The former generic concentration is withdrawn; available evidence is retained by its actual source, matrix and basis."
        : "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
    const next = {
      ...cell, status: admitted.length ? "populated" : "in_progress", typical_ppb: [null, null], p95_ppb: null,
      confidence: admitted.length ? "low" : null, n_studies: admitted.length ? 1 : 0, last_reviewed: today,
      value_kind: admitted.length ? "source_non_detect" : "unquantified", evidence: [...admitted, ...context], evidence_note: note,
    }
    // Do not repeatedly advance review dates when the source records did not change.
    if (JSON.stringify({ ...next, last_reviewed: null }) === JSON.stringify({ ...cell, last_reviewed: null })) next.last_reviewed = cell.last_reviewed
    text = replaceCell(text, metal, next)
    const review = {
      ingredient: slug, metal, reason: why, previous_profile: before, previous_table_sources: priorSources,
      disposition: next.value_kind, evidence: next.evidence,
      excluded_source_claims: priorSources.map((source) => ({ source_id: source,
        disposition: source === FDA_SOURCE && !pairRows.length ? "no_food_species_measurement" : source === FDA_SOURCE ? "source_observation_only" : "retained_as_related_literature_not_admitted_to_the_withdrawn_zero_or_range",
      })),
      rationale: note,
    }
    decisions.set(`${slug}::${metal}`, review)
    changedCells.push(review)
  }
  if (!rows.length && !changedCells.length) continue
  if (rows.length) text = replaceBlock(text, "hmi-fda-tds-occurrence", occurrenceBlock(rows))
  if (changedCells.length) text = replaceBlock(text, "hmi-profile-evidence-correction", correctionBlock(changedCells))
  text = regenerate(text)
  if (text === original) continue
  changed.push(page)
  if (!exists) created.push(page)
  if (apply) {
    const backup = path.join("/private/tmp/tds-profile-before", page)
    if (exists && !fs.existsSync(backup)) { fs.mkdirSync(path.dirname(backup), { recursive: true }); fs.writeFileSync(backup, original) }
    fs.writeFileSync(page, text)
    audits.push({ edit_id: crypto.randomUUID(), page, span_id: "fda-tds-occurrence-and-profile-adjudication", source_document: { cite_key: FDA_SOURCE, url: "https://www.fda.gov/food/total-diet-study/total-diet-study-results" }, retrieval_date: today, models_used: ["deterministic/primary-reconciled-profile-recovery"], model_agreement_state: "not_applicable", applied_at: new Date().toISOString(), commit_sha: "pending" })
  }
}
const report = { source_id: FDA_SOURCE, methodology: "Source-specific observations and explicit exclusions; no pooled population estimates or certification limits", cells: [...decisions.values()].sort((a, b) => a.ingredient.localeCompare(b.ingredient) || a.metal.localeCompare(b.metal)) }
if (apply) {
  const serialized = JSON.stringify(report, null, 2) + "\n"
  if (!fs.existsSync(outPath) || fs.readFileSync(outPath, "utf8") !== serialized) fs.writeFileSync(outPath, serialized)
  if (audits.length) fs.appendFileSync("data/evidence/wiki_edit_audit.jsonl", audits.map((r) => JSON.stringify(r)).join("\n") + "\n")
  fs.writeFileSync("/private/tmp/tds-profile-changed-paths.json", JSON.stringify({ changed, created }, null, 2))
}
console.log(JSON.stringify({ apply, changed: changed.length, created: created.length, adjudicated_cells: decisions.size, routes: routes.length, destinations: grouped.size }))

function perMetalSources(text) {
  const out = {}
  for (const line of text.split("\n")) {
    const metal = metalSymbol(line.match(/^\|\s*([^|]+)\|/)?.[1])
    if (metal && line.includes("[[sources/")) out[metal] = [...line.matchAll(/\[\[sources\/([^\\|\]]+)/g)].map((x) => x[1])
  }
  return out
}

function replaceCell(text, metal, cell) {
  const fmEnd = text.indexOf("\n---", 4)
  const fm = text.slice(0, fmEnd)
  const rx = new RegExp(`(^  ${metal}:)[^\\n]*(?:\\n(?!  [A-Za-z][A-Za-z0-9-]*:|\\S)[^\\n]*)*`, "m")
  const block = `  ${metal}:\n` + Object.entries(cell).map(([k, v]) => `    ${k}: ${JSON.stringify(v)}`).join("\n")
  if (!rx.test(fm)) throw new Error(`Cannot locate ${metal} block for scoped replacement`)
  return fm.replace(rx, block) + text.slice(fmEnd)
}

function replaceBlock(text, marker, body) {
  const block = `<!-- BEGIN: ${marker} -->\n${body}\n<!-- END: ${marker} -->`
  const rx = new RegExp(`<!-- BEGIN: ${marker} -->[\\s\\S]*?<!-- END: ${marker} -->`)
  if (rx.test(text)) return text.replace(rx, block)
  // Recover a block whose opening marker was absorbed by an older unbounded
  // Sources migration. Its own heading and end marker still identify the span.
  if (marker === "hmi-fda-tds-occurrence" && text.includes(`<!-- END: ${marker} -->`)) {
    const orphan = /## FDA TDS FY2018[–-]FY2020 source observations[\s\S]*?<!-- END: hmi-fda-tds-occurrence -->/
    if (orphan.test(text)) return text.replace(orphan, block)
  }
  const end = text.search(/<!-- BEGIN: hmi-(page-references|source-legend|page-history) -->/)
  return end >= 0 ? text.slice(0, end) + block + "\n\n" + text.slice(end) : text.trimEnd() + "\n\n" + block + "\n"
}

function occurrenceBlock(rows) {
  const lines = ["## FDA TDS FY2018–FY2020 source observations", "", `FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/${FDA_SOURCE}]]`, "", "| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |", "| --- | --- | ---: | ---: | --- | --- |"]
  for (const r of rows) {
    const min = numberOrNull(r.min_detected_ppb), max = numberOrNull(r.max_detected_ppb)
    const detected = Number(r.detected_n ?? Number(r.n) - Number(r.reported_zero_n))
    const value = detected === 0 ? "ND in all composites" : min === max ? String(min) : `${min}–${max}`
    const lo = r.reporting_limit_min_ppb_equivalent, hi = r.reporting_limit_max_ppb_equivalent
    const analyte = r.ingredient_slug === "spinach" ? metalLabel(r.metal_species) : r.metal_species
    lines.push(`| ${r.tds_food_number}: ${r.tds_food_description.replace(/\|/g, "/")} | ${analyte} | ${r.n} | ${detected} | ${value} | ${lo === hi ? hi : `${lo}–${hi}`} |`)
  }
  return lines.join("\n")
}

function correctionBlock(cells) {
  const lines = ["## Interpretation of source evidence", "", "Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.", ""]
  for (const c of cells) {
    lines.push(`**${c.metal}.** ${c.rationale}`)
    const who = c.evidence.filter((e) => e.source_id === WHO_SOURCE)
    if (who.length) {
      lines.push("", `WHO GEMS/Food retains the following distinct records. The ranges are source-scope lower-bound P10–P90 summaries; they are not a pooled typical value for this ingredient. Food-group records remain broader context. Differences in basis, period and geography are preserved. [[sources/${WHO_SOURCE}]]`, "", "| Food / state | Region | Years | Basis | Records | Source LB P10–P90 (ppb) |", "| --- | --- | --- | --- | ---: | --- |")
      for (const e of who) lines.push(`| ${e.food_name} / ${e.food_state || "not specified"} | ${e.geography} | ${e.year_min}–${e.year_max} | ${e.basis} | ${e.n} | ${e.p10_ppb}–${e.p90_ppb} |`)
      lines.push("", "Recovered WHO summaries alone do not resolve incompatible basis labels or establish that zero-coded results were measured zeros.")
    }
    const other = c.previous_table_sources.filter((s) => s !== FDA_SOURCE && s !== WHO_SOURCE)
    if (other.length) lines.push("", `Other previously cited literature is retained as context; it does not establish the withdrawn numerical profile: ${other.map((s) => `[[sources/${s}]]`).join(", ")}.`)
    lines.push("")
  }
  return lines.join("\n").trimEnd()
}

function makeStub(slug) {
  const route = routes.find((r) => r.ingredient_slug === slug)
  const title = route?.ingredient_label || slug.replace(/-/g, " ")
  const cp = Object.fromEntries(PROFILE_METALS.map((m) => [m, { status: "pending", typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }]))
  const data = { title, type: "ingredient", commodity: slug, label: title, category: route?.category || "prepared-food", provisional_scaffold: true, status: "stub", contamination_profile: cp, drivers: [], lower_risk_variants: [], higher_risk_variants: [], used_in_products: [], audience: ["regulator", "educator", "consumer", "app"], updated: today, sources: 1, last_full_resynthesis: null }
  // JSON-valued frontmatter is valid YAML and preserves the empty stub contract.
  return "---\n" + Object.entries(data).map(([k, v]) => k === "contamination_profile" ? `contamination_profile:\n${Object.entries(cp).map(([m, c]) => `  ${m}:\n${Object.entries(c).map(([a, b]) => `    ${a}: ${JSON.stringify(b)}`).join("\n")}`).join("\n")}` : `${k}: ${JSON.stringify(v)}`).join("\n") + `\n---\n\n# ${title}\n\n## Overview\n\nThis provisional ingredient page records source-specific measurements for ${title.toLowerCase()}. Its population contamination profile has not been synthesized. See [[ingredients/index]] for the ingredient inventory.\n\n## Heavy metal contamination profile\n\nThe profile fields remain pending until an evidence synthesis supports a population estimate. Source observations are listed separately below.\n\n<!-- BEGIN: hmi-source-legend -->\n## Sources\n\n- [[sources/${FDA_SOURCE}]]\n<!-- END: hmi-source-legend -->\n`
}
