#!/usr/bin/env node
// tools/audit-component-redundancy.mjs
//
// Codifies the failure mode found on 2026-08-01: the v3 migration added new
// chrome (the hero, the rail) but left the OLD components it superseded in the
// tree — exported from the barrel with no mount (dead code), or rendered into a
// `display:none` slot (invisible). Both read as "done" to a green build while
// shipping duplicate <nav>/<h1> nodes to crawlers and, in one case, hiding a
// live interactive tool on its own page.
//
// This is a MECHANICAL condition, so it is lintable. Three checks:
//
//   R1  orphaned export — a component the barrel (quartz/components/index.ts)
//       re-exports that NOTHING imports or mounts. Deterministic, source-only,
//       runs here in prebuild. Build-blocking.
//
//   R2  hidden mount — a component rendered into a slot whose wrapper is
//       `display:none` (today: the beforeBody `.page-header`). Needs the built
//       DOM + computed style; runs as a postbuild DOM pass (see check-v3 /
//       audit-page-redundancy, not this file). Spec'd, not yet enforced here.
//
//   R3  duplicate DOM — a shipped page carrying two breadcrumb <nav>s or two
//       <h1>s. Also a postbuild DOM pass. Spec'd, not yet enforced here.
//
// R1 is the one that catches the dead-code half deterministically without a
// build, so it lands first and blocks. R2/R3 are noted so the next session
// wires them against the built site rather than rediscovering the need.
//
// A component is USED if either pattern appears anywhere outside its own file
// and the barrel:
//   (a) `Component.<Name>`            — mounted in a layout / config namespace
//   (b) `from ".../<Name>"`           — imported directly for composition
//
// Usage: node tools/audit-component-redundancy.mjs [--json]

import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname, basename } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const BARREL = join(ROOT, "quartz/components/index.ts")

// Components exported from the barrel that are legitimately unmounted right now
// but retained deliberately. Each MUST carry a reason — an empty allow-list is
// the goal. This is where a "keep it, we'll wire it next sprint" decision is
// recorded honestly instead of the component silently rotting.
const ALLOW = {
  // (empty) — nothing is currently allow-listed.
}

// ── collect the barrel's export list ──────────────────────────────────────
const barrelSrc = readFileSync(BARREL, "utf8")
const exportBlock = barrelSrc.match(/export\s*\{([\s\S]*?)\}/)
if (!exportBlock) {
  console.error("audit-component-redundancy: could not parse the barrel export block")
  process.exit(2)
}
const exported = exportBlock[1]
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
  .map((s) => s.split(/\s+as\s+/)[0].trim())

// ── walk the source tree once ─────────────────────────────────────────────
const SRC_DIRS = ["quartz"]
const SRC_FILES = [join(ROOT, "quartz.layout.ts"), join(ROOT, "quartz.config.ts")]
const files = [...SRC_FILES]
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".git") continue
      walk(p)
    } else if (/\.(ts|tsx)$/.test(name)) {
      files.push(p)
    }
  }
}
for (const d of SRC_DIRS) walk(join(ROOT, d))

const contents = new Map(files.map((f) => [f, readFileSync(f, "utf8")]))

// Quartz mounts a component four ways; a robust "is it used" must resolve all:
//   (1) namespace     — `import * as Component` then `Component.<Name>()`  (layouts)
//   (2) barrel-destr. — `import { <Name> } from ".../components"`          (emitters)
//   (3) direct import — `import <Name> from ".../<Name>"`                  (composition)
//   (4) inline re-impl — a component's markup copied inline (e.g. TopNav's
//       search bar). This one leaves no import of the COMPONENT, so a name
//       used only this way reads as orphaned — correct: the standalone export
//       is dead even though the feature ships. Such a name should be deleted
//       from the barrel or allow-listed with that reason.
//
// Collect every name destructured from a `.../components` barrel import (2),
// once, across the whole tree (excluding the barrel itself).
const barrelDestructured = new Set()
const destructureRe = /import\s*\{([^}]*)\}\s*from\s*["'][^"']*\/components["']/g
for (const [f, src] of contents) {
  if (f === BARREL) continue
  let m
  while ((m = destructureRe.exec(src))) {
    for (const raw of m[1].split(",")) {
      const nm = raw.trim().split(/\s+as\s+/)[0].trim()
      if (nm) barrelDestructured.add(nm)
    }
  }
}

// ── R1: is each exported component used outside its own file + the barrel? ──
const orphans = []
for (const name of exported) {
  const ownFile = join(ROOT, `quartz/components/${name}.tsx`)
  const ownPageFile = join(ROOT, `quartz/components/pages/${name}.tsx`)
  const nsUse = new RegExp(`Component\\.${name}\\b`) // (1)
  const importUse = new RegExp(`from\\s+["'][^"']*/${name}["']`) // (3)

  let used = barrelDestructured.has(name) // (2)
  if (!used) {
    for (const [f, src] of contents) {
      if (f === BARREL || f === ownFile || f === ownPageFile) continue
      if (nsUse.test(src) || importUse.test(src)) {
        used = true
        break
      }
    }
  }
  if (!used && !(name in ALLOW)) orphans.push(name)
}

// ── baseline ratchet ────────────────────────────────────────────────────────
// The v3 migration left 21 pre-v3 components exported-but-unmounted. Deleting
// all of them in one pass is its own risk (several are generic utilities, not
// superseded UI), so the known set is accepted as a DRAINING BACKLOG, captured
// in redundancy-baseline.json. The build blocks only when a NEW orphan appears
// — i.e. the check stops redundancy from GROWING while the backlog is drained
// deliberately. `--update-baseline` re-accepts the current set (drops resolved
// names, records any intentional new ones). Same ratchet the contamination-
// integrity audit uses. Goal state: an empty baseline, then flip to plain block.
const BASELINE = join(ROOT, "tools/redundancy-baseline.json")
let baseline = []
try {
  baseline = JSON.parse(readFileSync(BASELINE, "utf8")).R1_orphans ?? []
} catch {
  baseline = []
}

if (process.argv.includes("--update-baseline")) {
  const { writeFileSync } = await import("node:fs")
  writeFileSync(
    BASELINE,
    JSON.stringify(
      { note: "Accepted orphaned-component backlog (R1). Drain toward empty; do not grow.", R1_orphans: orphans.sort() },
      null,
      2,
    ) + "\n",
  )
  console.log(`redundancy-baseline.json updated: ${orphans.length} accepted orphans`)
  process.exit(0)
}

const baseSet = new Set(baseline)
const newOrphans = orphans.filter((o) => !baseSet.has(o)) // regressions → block
const resolved = baseline.filter((o) => !orphans.includes(o)) // fixed → shrink baseline

// ── report ─────────────────────────────────────────────────────────────────
const json = process.argv.includes("--json")
if (json) {
  console.log(JSON.stringify({ check: "R1", exported: exported.length, orphans, baseline, newOrphans, resolved }, null, 2))
} else {
  console.log(`component-redundancy R1: ${exported.length} exports, ${orphans.length} orphaned (${baseline.length} in accepted backlog)`)
  for (const o of newOrphans) {
    console.log(`  ✗ NEW ORPHAN  ${o} — exported by the barrel, mounted/imported nowhere. Mount it, delete it, or (last resort) accept via --update-baseline.`)
  }
  if (resolved.length) {
    console.log(`  ✓ resolved since baseline (run --update-baseline to shrink it): ${resolved.join(", ")}`)
  }
  if (newOrphans.length === 0) {
    console.log("  ✓ no NEW orphaned exports beyond the accepted backlog")
  }
  console.log("  (R2 hidden-mount / R3 duplicate-DOM run as a postbuild DOM pass — not enforced here yet)")
}

process.exit(newOrphans.length > 0 ? 1 : 0)
