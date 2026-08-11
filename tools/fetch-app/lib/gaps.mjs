// Reads data/evidence/cells-needing-synthesis.csv — the canonical
// ingredient×metal "cells needing attention" list that the /discover gap= skill
// also consumes — and turns it into gap rows the fetch app can render and fetch.
// READ ONLY: this module never writes the wiki or the evidence register; it is a
// view over an existing artifact, consistent with the app's fetch-only mandate
// (CLAUDE.md Part 5b).

import fs from "node:fs"
import path from "node:path"
import { METAL_CODE_TO_CANON } from "./taxonomy.mjs"

const repoRoot = process.cwd()
const gapsPath = path.join(repoRoot, "data/evidence/cells-needing-synthesis.csv")

// Columns: ingredient,metal,n_sources,status,yaml_n,has_typical,reason,sources
// The trailing `sources` column is a semicolon-joined cite-key list (no commas),
// so a plain comma split yields the seven scalar fields; index 7+ is re-joined
// defensively in case a future field ever carries a comma.
export function loadGaps() {
  let text
  try {
    text = fs.readFileSync(gapsPath, "utf8")
  } catch {
    return { path: path.relative(repoRoot, gapsPath), exists: false, gaps: [] }
  }

  const lines = text.split(/\r?\n/).filter((l) => l.trim())
  const gaps = []
  for (const line of lines.slice(1)) {
    // skip header
    const parts = line.split(",")
    if (parts.length < 7) continue
    const ingredient = parts[0].trim()
    const metal = parts[1].trim()
    if (!ingredient || !metal) continue
    const sources = parts.slice(7).join(",")
    gaps.push({
      id: `${ingredient}::${metal}`,
      ingredient,
      metal,
      metalCanon: METAL_CODE_TO_CANON[metal] || "heavy metals",
      nSources: Number(parts[2]) || 0,
      status: parts[3].trim(),
      yamlN: Number(parts[4]) || 0,
      hasTypical: parts[5].trim() === "true",
      reason: parts[6].trim(),
      sourceCount: sources ? sources.split(";").filter(Boolean).length : 0,
    })
  }

  // Highest evidence-on-record first — the cells where re-synthesis has the most
  // to catch up on lead the list.
  gaps.sort((a, b) => b.nSources - a.nSources)
  return { path: path.relative(repoRoot, gapsPath), exists: true, gaps }
}
