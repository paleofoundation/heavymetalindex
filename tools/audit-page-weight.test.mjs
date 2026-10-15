import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { auditPageWeight, PAGE_WEIGHT_WARN_BYTES, PAGE_WEIGHT_FAIL_BYTES } from "./audit-page-weight.mjs"

test("final HTML byte thresholds are strict and every oversized path is listed", (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-page-weight-"))
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
  fs.mkdirSync(path.join(dir, "metals"))
  fs.writeFileSync(path.join(dir, "metals/at-warning.html"), Buffer.alloc(PAGE_WEIGHT_WARN_BYTES))
  fs.writeFileSync(path.join(dir, "metals/above-warning.html"), Buffer.alloc(PAGE_WEIGHT_WARN_BYTES + 1))
  fs.writeFileSync(path.join(dir, "at-failure.html"), Buffer.alloc(PAGE_WEIGHT_FAIL_BYTES))
  fs.writeFileSync(path.join(dir, "above-failure.html"), Buffer.alloc(PAGE_WEIGHT_FAIL_BYTES + 1))
  fs.writeFileSync(path.join(dir, "unicode.html"), "é".repeat(PAGE_WEIGHT_WARN_BYTES / 2 + 1))
  fs.writeFileSync(path.join(dir, "large.pdf"), Buffer.alloc(PAGE_WEIGHT_FAIL_BYTES + 1))
  const result = auditPageWeight(dir)
  assert.equal(result.pages.length, 5)
  assert.deepEqual(result.failures.map((item) => item.page), ["above-failure.html"])
  assert.deepEqual(new Set(result.warnings.map((item) => item.page)), new Set(["metals/above-warning.html", "at-failure.html", "above-failure.html", "unicode.html"]))
  const command = spawnSync(process.execPath, ["tools/audit-page-weight.mjs"], { env: { ...process.env, HMI_PUBLIC_DIR: dir }, encoding: "utf8" })
  assert.equal(command.status, 1)
  assert.match(command.stdout + command.stderr, /above-failure.html: 1000001 bytes/)
  fs.unlinkSync(path.join(dir, "above-failure.html"))
  assert.equal(spawnSync(process.execPath, ["tools/audit-page-weight.mjs"], { env: { ...process.env, HMI_PUBLIC_DIR: dir } }).status, 0)
})
