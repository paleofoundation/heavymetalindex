import { test } from "node:test"
import assert from "node:assert/strict"
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import {
  decideProductionBuild,
  explicitRebuildRequested,
  pathAffectsProduction,
  PRODUCTION_REBUILD_TOKEN,
} from "./production-build-decision.mjs"
import {
  diffNames,
  evaluateIgnore,
  exitCodeFor,
} from "./vercel-ignore-command.mjs"
import { steps } from "../build/pipeline.mjs"

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = join(HERE, "../..")
const HEAD = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
const BASE = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

function git(cwd, args) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8" })
  assert.equal(result.status, 0, result.stderr)
  return result.stdout.trim()
}

function commitFile(cwd, path, body) {
  const full = join(cwd, path)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, body)
  git(cwd, ["add", path])
  git(cwd, ["commit", "-m", path])
  return git(cwd, ["rev-parse", "HEAD"])
}

test("docs, status, and tracking paths do not affect production", () => {
  assert.equal(pathAffectsProduction("docs/ops/last-tip-deploy-trigger.txt"), false)
  assert.equal(pathAffectsProduction("docs/briefs/baby-lotions-oils-powders-number-ledger.csv"), false)
  assert.equal(pathAffectsProduction("wiki/log.md"), false)
  assert.equal(pathAffectsProduction("data/evidence/codex-runs/note.md"), false)
  assert.equal(pathAffectsProduction("data/evidence/outstanding/ledger.jsonl"), false)
  assert.equal(pathAffectsProduction(".github/workflows/ci.yml"), false)
  assert.equal(pathAffectsProduction("tools/deploy/production-build-decision.test.mjs"), false)
})

test("wiki content and build code affect production", () => {
  assert.equal(pathAffectsProduction("wiki/ingredients/rice.md"), true)
  assert.equal(pathAffectsProduction("wiki/sources/example.md"), true)
  assert.equal(pathAffectsProduction("data/evidence/regulatory_limits.csv"), true)
  assert.equal(pathAffectsProduction("data/evidence/contracts/rice/evidence-ledger.json"), true)
  assert.equal(pathAffectsProduction("tools/deploy/vercel-ignore-command.mjs"), true)
  assert.equal(pathAffectsProduction("quartz.config.ts"), true)
  assert.equal(pathAffectsProduction("vercel.json"), true)
  assert.equal(pathAffectsProduction("api/ask.js"), true)
})

test("no change since the last ready deployment skips", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: [],
    deploymentStates: [],
  })
  assert.deepEqual(decision, { action: "skip", reason: "no_change_since_last_ready" })
})

test("docs-only since the last ready deployment skips", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: ["docs/ops/last-tip-deploy-trigger.txt", "wiki/log.md"],
    deploymentStates: [],
  })
  assert.equal(decision.action, "skip")
  assert.equal(decision.reason, "docs_status_tracking_only")
})

test("content or code since the last ready deployment builds", () => {
  const content = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: ["wiki/sources/example.md"],
    deploymentStates: [],
  })
  const code = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: ["api/ask.js"],
    deploymentStates: [],
  })
  assert.equal(content.reason, "production_inputs_changed")
  assert.equal(code.reason, "production_inputs_changed")
  assert.equal(exitCodeFor(content), 1)
  assert.equal(exitCodeFor({ action: "skip" }), 0)
})

test("a docs tip still builds when earlier undeployed content is in the range", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: true,
    paths: [
      "wiki/ingredients/rice.md",
      "docs/ops/last-tip-deploy-trigger.txt",
    ],
    deploymentStates: [],
  })
  assert.equal(decision.action, "build")
  assert.equal(decision.reason, "production_inputs_changed")
})

test("an unresolved range builds instead of using a parent diff", () => {
  const decision = decideProductionBuild({
    headSha: HEAD,
    baseAvailable: false,
    paths: null,
  })
  assert.equal(decision.action, "build")
  assert.equal(decision.reason, "range_unresolved_build")
})

test("another project, a preview, or a stale success cannot suppress a needed build", () => {
  const records = [
    { label: "other project", deploymentStates: [{ sha: HEAD, state: "READY", projectId: "prj_other", target: "production", context: "Vercel – other" }] },
    { label: "preview", deploymentStates: [{ sha: HEAD, state: "READY", projectId: "prj_WXx9CUpbHXciYg2D2xF1ObGo7oq9", target: "preview", context: "Vercel" }] },
    { label: "stale production success", deploymentStates: [{ sha: HEAD, state: "READY", projectId: "prj_WXx9CUpbHXciYg2D2xF1ObGo7oq9", target: "production", context: "Vercel", stale: true }] },
    { label: "context name only", deploymentStates: [{ sha: HEAD, state: "READY", context: "Vercel" }] },
  ]
  for (const record of records) {
    const decision = decideProductionBuild({
      headSha: HEAD,
      baseAvailable: true,
      paths: ["wiki/ingredients/rice.md"],
      deploymentStates: record.deploymentStates,
    })
    assert.equal(decision.action, "build", record.label)
    assert.equal(decision.reason, "production_inputs_changed", record.label)
  }
})

test("the ignore command diffs the last ready SHA and builds a docs tip that still contains content", async () => {
  const cwd = mkdtempSync(join(tmpdir(), "hmi-deploy-guard-"))
  git(cwd, ["init", "-q"])
  git(cwd, ["config", "user.email", "guard@example.com"])
  git(cwd, ["config", "user.name", "guard"])
  const ready = commitFile(cwd, "wiki/log.md", "log\n")
  commitFile(cwd, "wiki/ingredients/rice.md", "rice\n")
  const tip = commitFile(cwd, "docs/ops/last-tip-deploy-trigger.txt", "tip\n")
  const names = diffNames(ready, tip, cwd)
  assert.ok(names.includes("wiki/ingredients/rice.md"))
  assert.ok(names.includes("docs/ops/last-tip-deploy-trigger.txt"))

  const decision = await evaluateIgnore(
    {
      VERCEL_GIT_COMMIT_SHA: tip,
      VERCEL_GIT_PREVIOUS_SHA: ready,
      VERCEL_GIT_REPO_OWNER: "paleofoundation",
      VERCEL_GIT_REPO_SLUG: "heavymetalindex",
    },
    {
      commitExists: (sha) => commitExistsIn(cwd, sha),
      diffNames: (base, head) => diffNames(base, head, cwd),
    },
  )
  assert.equal(decision.action, "build")
  assert.equal(decision.reason, "production_inputs_changed")
})

test("the ignore command skips a docs-only range and a SHA that is already ready", async () => {
  const cwd = mkdtempSync(join(tmpdir(), "hmi-deploy-guard-"))
  git(cwd, ["init", "-q"])
  git(cwd, ["config", "user.email", "guard@example.com"])
  git(cwd, ["config", "user.name", "guard"])
  const ready = commitFile(cwd, "wiki/ingredients/rice.md", "rice\n")
  const tip = commitFile(cwd, "docs/status.md", "status\n")

  const docsOnly = await evaluateIgnore(
    {
      VERCEL_GIT_COMMIT_SHA: tip,
      VERCEL_GIT_PREVIOUS_SHA: ready,
    },
    {
      commitExists: (sha) => commitExistsIn(cwd, sha),
      diffNames: (base, head) => diffNames(base, head, cwd),
    },
  )
  assert.equal(docsOnly.reason, "docs_status_tracking_only")

  const sameSha = await evaluateIgnore(
    {
      VERCEL_GIT_COMMIT_SHA: tip,
      VERCEL_GIT_PREVIOUS_SHA: tip,
      VERCEL_GIT_COMMIT_MESSAGE: "Evidence fill",
    },
    {
      commitExists: () => {
        throw new Error("same sha has no file range")
      },
      diffNames: () => {
        throw new Error("same sha has no file range")
      },
    },
  )
  assert.equal(sameSha.reason, "no_change_since_last_ready")
})

test("a public Vercel success does not skip a content build", async () => {
  const payloads = [
    { label: "other project", context: "Vercel – heavymetalcertified", target_url: "https://vercel.com/team/heavymetalcertified/abc" },
    { label: "preview", context: "Vercel", description: "Preview deployment has completed", target_url: "https://vercel.com/karen-pendergrass-projects/heavymetalindex/preview123" },
    { label: "stale", context: "Vercel", description: "Deployment has completed", updated_at: "2020-01-01T00:00:00Z" },
  ]
  for (const status of payloads) {
    const decision = await evaluateIgnore(
      {
        VERCEL_GIT_COMMIT_SHA: HEAD,
        VERCEL_GIT_PREVIOUS_SHA: BASE,
        HMI_PUBLIC_STATUS: JSON.stringify(status),
      },
      {
        commitExists: () => true,
        diffNames: () => ["wiki/ingredients/rice.md", "data/evidence/regulatory_limits.csv"],
      },
    )
    assert.equal(decision.action, "build", status.label)
    assert.equal(decision.reason, "production_inputs_changed", status.label)
  }
})

test("an explicit override rebuilds an already-deployed SHA", async () => {
  assert.equal(explicitRebuildRequested({ VERCEL_GIT_COMMIT_MESSAGE: `refresh ${PRODUCTION_REBUILD_TOKEN}` }), true)
  assert.equal(explicitRebuildRequested({ HMI_FORCE_PRODUCTION_BUILD: "1" }), true)
  assert.equal(explicitRebuildRequested({ HMI_FORCE_PRODUCTION_BUILD: "true" }), false)
  assert.equal(explicitRebuildRequested({ VERCEL_GIT_COMMIT_MESSAGE: "Evidence fill" }), false)

  for (const env of [
    { VERCEL_GIT_COMMIT_MESSAGE: `env refresh ${PRODUCTION_REBUILD_TOKEN}` },
    { HMI_FORCE_PRODUCTION_BUILD: "1", VERCEL_GIT_COMMIT_MESSAGE: "Evidence fill" },
  ]) {
    const decision = await evaluateIgnore(
      {
        VERCEL_GIT_COMMIT_SHA: HEAD,
        VERCEL_GIT_PREVIOUS_SHA: HEAD,
        ...env,
      },
      {
        commitExists: () => {
          throw new Error("override does not need a diff")
        },
        diffNames: () => {
          throw new Error("override does not need a diff")
        },
      },
    )
    assert.equal(decision.action, "build")
    assert.equal(decision.reason, "explicit_rebuild_override")
  }
})

test("a missing last-ready SHA builds", async () => {
  const decision = await evaluateIgnore(
    { VERCEL_GIT_COMMIT_SHA: HEAD },
    {
      commitExists: () => false,
      diffNames: () => {
        throw new Error("must not diff")
      },
    },
  )
  assert.equal(decision.reason, "range_unresolved_build")
})

test("the ignore command does not diff HEAD^ or read GitHub statuses", () => {
  const source = readFileSync(join(HERE, "vercel-ignore-command.mjs"), "utf8")
  const decision = readFileSync(join(HERE, "production-build-decision.mjs"), "utf8")
  assert.equal(source.includes("HEAD^"), false)
  assert.equal(source.includes("api.github.com"), false)
  assert.equal(decision.includes("api.github.com"), false)
  assert.equal(source.includes("deploymentStatesFromGithubStatus"), false)
  assert.match(source, /VERCEL_GIT_PREVIOUS_SHA/)
  assert.match(decision, /HMI_FORCE_PRODUCTION_BUILD/)
  assert.match(decision, /\[production rebuild\]/)
})

test("production generators do not read the skipped evidence and docs trees", () => {
  const scripts = new Set([join(REPO, "tools/build/quartz-build.mjs")])
  for (const step of steps) {
    if (step.audit) continue
    const hasScript = step.run.some((part) => part.endsWith(".mjs") || part.endsWith(".ts") || part.endsWith(".js"))
    assert.equal(hasScript, true, `unscanned production step: ${step.run.join(" ")}`)
    for (const part of step.run) {
      if (part.endsWith(".mjs") || part.endsWith(".ts") || part.endsWith(".js")) scripts.add(join(REPO, part))
    }
  }
  function addFiles(dir) {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name)
      if (statSync(full).isDirectory()) addFiles(full)
      else scripts.add(full)
    }
  }
  addFiles(join(REPO, "api"))
  const forbidden = ["codex-runs", "evidence/outstanding", "docs/briefs"]
  for (const file of scripts) {
    const text = readFileSync(file, "utf8")
    for (const needle of forbidden) {
      assert.equal(text.includes(needle), false, `${file} contains ${needle}`)
    }
  }
})

function commitExistsIn(cwd, sha) {
  return spawnSync("git", ["cat-file", "-e", `${sha}^{commit}`], { cwd }).status === 0
}
