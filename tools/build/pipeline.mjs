#!/usr/bin/env node
// Ordered prebuild and postbuild steps.
//
// Vercel builders stop at 45 minutes. Read-only audits do not change the
// published HTML, so the Vercel build skips them. CI runs the same steps
// through `node tools/build/pipeline.mjs --only-audits`. Generators and the
// postbuild writers stay on every build, which keeps the page output the same.

import { spawn } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

/** @typedef {{ phase: "prebuild" | "postbuild", audit: boolean, needsPublic?: boolean, run: string[] }} Step */

/** @type {Step[]} */
export const steps = [
  { phase: "prebuild", audit: true, run: ["npm", "run", "contracts:pilot:check"] },
  { phase: "prebuild", audit: true, run: ["npm", "run", "contracts:check"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/scope/check-scope-consistency.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/evidence/check-fda-tds-generated.mjs", "--check-generated"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-autolink-terms.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/evidence/build-routing-audit.mjs"] },
  { phase: "prebuild", audit: false, run: ["tsx", "tools/evidence/build-percentile-context.ts"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-source-dois.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-doi-collisions.mjs", "--warn-only"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-corpus-counter.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/publication/build-state-of-food-report.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-recently-updated.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-homepage-layout.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-public-batch-prose.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-regulation-cross-cuts.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-metal-faq.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/evidence/build-source-legend.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/autonomy/populate-source-legends.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-category-pages.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-ingredient-index.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/sync-source-counts.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-nav-panels.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-index-fanning.mjs", "--min", "3"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-link-integrity.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-routing-discipline.mjs", "--warn-only"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/taxonomy/audit-coverage.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-coverage-page.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-claim-provenance.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-audit-dashboard.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-contamination-dataset.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/evidence/build-lab-comparator-context.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-category-risk-maps.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-regulations-dataset.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-regulator-pages.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-regulator-mandatory-sections.mjs", "--warn-only"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-defense-dossier.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-change-watch.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-synthesis-contradictions.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-peer-review-footers.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-ingredient-contamination-tables.mjs", "--apply"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-contamination-profile-integrity.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-open-data.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/evidence/build-consumption-tiers.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/evidence/build-ingredient-scorecard.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/evidence/audit-ingredient-synthesis-backlog.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-errata-log.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-promoted-value-ranges.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-page-references.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-page-changelogs.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/strip-internal-manual-refs.mjs", "--apply"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-page-history-leaks.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-generators-idempotent.mjs", "--warn-only"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/evidence/audit-not-material-substantiation.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/evidence/audit-not-material-corpus.mjs", "--warn-only"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/evidence/build-standards-qc-gate.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/evidence/audit-not-material-integrity.mjs", "--warn-only"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/autonomy/firewall-no-threshold-lint.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-component-redundancy.mjs"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/clean-source-public-prose.mjs", "--check"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/audit-citation-sentence-start.mjs", "--check"] },
  { phase: "prebuild", audit: true, run: ["node", "tools/evidence/audit-source-contract.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-evidence-packet-index.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/build-metal-evidence-pages.mjs"] },
  { phase: "prebuild", audit: false, run: ["node", "--import", "tsx", "tools/build-alias-redirects.ts"] },
  { phase: "prebuild", audit: false, run: ["node", "tools/sources/build-source-index.mjs"] },

  { phase: "postbuild", audit: false, run: ["node", "tools/release/postbuild-rice-assets.mjs"] },
  { phase: "postbuild", audit: true, needsPublic: true, run: ["node", "tools/audit-html-titles.mjs"] },
  { phase: "postbuild", audit: true, needsPublic: true, run: ["node", "tools/audit-meta-descriptions.mjs"] },
  { phase: "postbuild", audit: true, needsPublic: true, run: ["node", "tools/audit-metal-expansion.mjs"] },
  { phase: "postbuild", audit: false, run: ["node", "tools/postbuild-inject-jsonld.mjs"] },
  { phase: "postbuild", audit: false, run: ["node", "tools/postbuild-open-data.mjs"] },
  { phase: "postbuild", audit: false, run: ["node", "tools/postbuild-inject-breadcrumbs.mjs"] },
  { phase: "postbuild", audit: false, run: ["node", "tools/postbuild-scholarly-sitemap.mjs"] },
  { phase: "postbuild", audit: false, run: ["node", "tools/postbuild-llms-txt.mjs"] },
  { phase: "postbuild", audit: false, run: ["node", "tools/postbuild-synthesis-pdf.mjs"] },
  { phase: "postbuild", audit: false, run: ["node", "tools/postbuild-canonical-links.mjs"] },
  { phase: "postbuild", audit: true, needsPublic: true, run: ["node", "tools/audit-dead-internal-hrefs.mjs"] },
  { phase: "postbuild", audit: true, needsPublic: true, run: ["node", "tools/audit-inbound-links.mjs"] },
  { phase: "postbuild", audit: true, needsPublic: true, run: ["node", "tools/audit-page-weight.mjs"] },
  { phase: "postbuild", audit: true, needsPublic: true, run: ["node", "tools/audit-sitemap-indexability.mjs"] },
]

export function skipAudits(env) {
  return env.VERCEL === "1" || env.HMI_SKIP_BUILD_AUDITS === "1"
}

/**
 * @param {NodeJS.ProcessEnv} env
 * @param {{ phase?: "prebuild" | "postbuild", onlyAudits?: boolean }} [opts]
 */
export function selectSteps(env, opts = {}) {
  const skip = skipAudits(env)
  return steps.filter((step) => {
    if (opts.phase && step.phase !== opts.phase) return false
    if (opts.onlyAudits) return step.audit
    if (skip && step.audit) return false
    return true
  })
}

function spawnStep(step, env) {
  return new Promise((resolve) => {
    const child = spawn(step.run[0], step.run.slice(1), {
      env,
      stdio: "inherit",
    })
    child.on("error", (error) => {
      console.error(error)
      resolve(1)
    })
    child.on("close", (code) => resolve(code ?? 1))
  })
}

async function main() {
  const onlyAudits = process.argv.includes("--only-audits")
  const phaseFlag = process.argv.indexOf("--phase")
  const phase = phaseFlag >= 0 ? process.argv[phaseFlag + 1] : undefined
  if (phase && phase !== "prebuild" && phase !== "postbuild") {
    console.error(`unknown phase ${phase}`)
    process.exit(1)
  }
  const selected = selectSteps(process.env, { phase, onlyAudits })
  const skipped = steps.filter((step) => {
    if (phase && step.phase !== phase) return false
    return !selected.includes(step)
  })
  if (skipAudits(process.env) && skipped.length) {
    console.log(
      `[build] skipping ${skipped.length} read-only audit step(s) on this builder; CI runs them via node tools/build/pipeline.mjs --only-audits`,
    )
  }
  const env = { ...process.env }
  if ((phase === "prebuild" || !phase) && !onlyAudits) {
  const heap = process.env.VERCEL === "1" ? "4096" : process.env.HMI_PREBUILD_HEAP || "8192"
    env.NODE_OPTIONS = `--max-old-space-size=${heap}`
  }
  for (const step of selected) {
    if (step.needsPublic && !fs.existsSync("public")) {
      console.error(`[build] ${step.run.join(" ")} needs the built public/ directory`)
      process.exit(1)
    }
    const label = step.run.join(" ")
    const started = Date.now()
    console.log(`[build] ${label}`)
    const code = await spawnStep(step, env)
    const seconds = ((Date.now() - started) / 1000).toFixed(1)
    console.log(`[build] ${seconds}s ${label}`)
    if (code !== 0) process.exit(code)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main()
}
