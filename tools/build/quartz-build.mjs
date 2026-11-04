#!/usr/bin/env node
// Launch the Quartz build. Local and CI keep the single-thread 12 GB heap.
// On Vercel the same single thread is used: a two-thread parse deadlocked
// esbuild on this corpus. The heap is capped to the machine so an 8 GB
// builder does not swap. The time saved is the read-only audits, which the
// Vercel build skips.

import os from "node:os"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { spawn } from "node:child_process"

/**
 * @param {NodeJS.ProcessEnv} env
 * @param {{ totalmem: number, cpus: number }} machine
 */
export function chooseQuartzResources(env, machine) {
  if (env.VERCEL !== "1") {
    return {
      heap: env.HMI_QUARTZ_HEAP || "12288",
      concurrency: env.HMI_QUARTZ_CONCURRENCY || "1",
      workerHeap: "",
    }
  }
  const gb = machine.totalmem / 1024 ** 3
  const parentMb = Math.min(6144, Math.max(2048, Math.floor((gb - 1.5) * 1024)))
  return {
    heap: env.HMI_QUARTZ_HEAP || String(parentMb),
    concurrency: env.HMI_QUARTZ_CONCURRENCY || "1",
    workerHeap: "",
  }
}

function main() {
  const choice = chooseQuartzResources(process.env, {
    totalmem: os.totalmem(),
    cpus: os.availableParallelism(),
  })
  console.log(`[quartz] heap=${choice.heap}MB concurrency=${choice.concurrency}`)
  const child = spawn(
    process.execPath,
    [
      `--max-old-space-size=${choice.heap}`,
      "./quartz/bootstrap-cli.mjs",
      "build",
      "--concurrency",
      choice.concurrency,
      "-d",
      "wiki",
      "-o",
      "public",
    ],
    { stdio: "inherit" },
  )
  child.on("exit", (code) => process.exit(code ?? 1))
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main()
