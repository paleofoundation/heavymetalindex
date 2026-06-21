import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { execFileSync } from "node:child_process"

const here = path.dirname(fileURLToPath(import.meta.url))
const auditScript = path.join(here, "audit-contamination-profile-integrity.mjs")

// Build a throwaway repo root with a wiki/ingredients dir, a data/evidence dir,
// and an optional committed grandfather baseline, then run the audit there. The
// audit resolves all paths from process.cwd(), so a custom cwd fully isolates it.
function runAudit({ ingredients, baseline }) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "cpi-audit-"))
  const ingDir = path.join(root, "wiki/ingredients")
  const evDir = path.join(root, "data/evidence")
  fs.mkdirSync(ingDir, { recursive: true })
  fs.mkdirSync(evDir, { recursive: true })
  for (const [slug, body] of Object.entries(ingredients)) {
    fs.writeFileSync(path.join(ingDir, `${slug}.md`), body)
  }
  if (baseline) {
    fs.writeFileSync(
      path.join(evDir, "contamination-integrity-censored-zero-baseline.json"),
      JSON.stringify(baseline, null, 2) + "\n",
    )
  }
  let stdout = ""
  let code = 0
  try {
    stdout = execFileSync("node", [auditScript, "--json"], {
      cwd: root,
      encoding: "utf8",
    })
  } catch (err) {
    code = err.status ?? 1
    stdout = err.stdout ?? ""
  }
  return { code, result: JSON.parse(stdout), root }
}

// Minimal ingredient page with a single metal cell.
function page(metal, { status = "populated", typical, p95, confidence, nStudies }) {
  return `---
title: fixture
contamination_profile:
  ${metal}:
    status: ${status}
    typical_ppb: [${typical[0]}, ${typical[1]}]
    p95_ppb: ${p95 === null ? "null" : p95}
    confidence: ${confidence}
    n_studies: ${nStudies}
---

body
`
}

function hasFailure(result, slug, metal, signature) {
  return result.failures.some(
    (f) => f.slug === slug && f.metal === metal && f.signature === signature,
  )
}

test("all-zero high-confidence cell fails (signature 2, build-blocking)", () => {
  const { code, result } = runAudit({
    ingredients: {
      allzero: page("Pb", { typical: [0, 0], p95: 0, confidence: "high", nStudies: 8 }),
    },
  })
  assert.equal(code, 1, "audit must exit non-zero")
  assert.ok(hasFailure(result, "allzero", "Pb", "censored-zero-at-high-confidence"))
})

test("[0, X] cell absent from baseline fails the new censored-zero-lower-bound check", () => {
  const { code, result } = runAudit({
    ingredients: {
      newoffender: page("Pb", { typical: [0, 14.8], p95: 30, confidence: "low", nStudies: 3 }),
    },
    baseline: [],
  })
  assert.equal(code, 1, "a new [0, X] offender must block the build")
  assert.ok(hasFailure(result, "newoffender", "Pb", "censored-zero-lower-bound"))
  assert.equal(result.censoredZeroLowerBound.newBlocking, 1)
  assert.equal(result.censoredZeroLowerBound.grandfathered, 0)
})

test("[0, X] cell present in baseline passes (grandfathered, not blocking)", () => {
  const { code, result } = runAudit({
    ingredients: {
      "fromage-frais": page("Pb", {
        typical: [0, 14.8],
        p95: 30,
        confidence: "low",
        nStudies: 3,
      }),
    },
    baseline: ["fromage-frais Pb"],
  })
  assert.equal(code, 0, "a grandfathered [0, X] offender must not block the build")
  assert.equal(result.failures.length, 0)
  assert.equal(result.censoredZeroLowerBound.grandfathered, 1)
  assert.equal(result.censoredZeroLowerBound.newBlocking, 0)
})

test("healthy [2, 40] cell passes", () => {
  const { code, result } = runAudit({
    ingredients: {
      healthy: page("Pb", { typical: [2, 40], p95: 95, confidence: "medium", nStudies: 8 }),
    },
  })
  assert.equal(code, 0)
  assert.equal(result.failures.length, 0)
  assert.equal(result.censoredZeroLowerBound.total, 0)
})

test("[0, X] cell that is also a collapsed tail keeps the degenerate-upper-tail diagnosis", () => {
  // p95 (10) <= typical-max (14.8), n_studies 8 > threshold: degenerate-upper-tail
  // takes precedence over censored-zero-lower-bound, preserving signature 1 blocking.
  const { code, result } = runAudit({
    ingredients: {
      collapsed: page("Pb", { typical: [0, 14.8], p95: 10, confidence: "high", nStudies: 8 }),
    },
    baseline: ["collapsed Pb"], // even though grandfathered for sig 3, sig 1 still blocks
  })
  assert.equal(code, 1)
  assert.ok(hasFailure(result, "collapsed", "Pb", "degenerate-upper-tail"))
  assert.ok(!hasFailure(result, "collapsed", "Pb", "censored-zero-lower-bound"))
})
