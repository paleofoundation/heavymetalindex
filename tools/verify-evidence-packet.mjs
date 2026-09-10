#!/usr/bin/env node
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"
import { contentHashes, isSafePageSlug } from "./lib/evidence-packet.mjs"

export function verifyEvidencePacket({ repoRoot = process.cwd(), commit, slug, sha256, metadataSha256 }) {
  if (!/^[a-f0-9]{40}$/.test(commit ?? "") || !isSafePageSlug(slug)) {
    throw new Error("A full Git commit SHA and a valid public page slug are required.")
  }
  if (!/^[a-f0-9]{64}$/.test(sha256 ?? "") || !/^[a-f0-9]{64}$/.test(metadataSha256 ?? "")) {
    throw new Error("Both expected authored-body and semantic-metadata SHA-256 hashes are required.")
  }
  const raw = execFileSync("git", ["show", `${commit}:wiki/${slug}.md`], {
    cwd: repoRoot, encoding: "utf8", maxBuffer: 20 * 1024 * 1024,
  })
  const hashes = contentHashes(raw)
  if (hashes.content_sha256 !== sha256 || hashes.metadata_sha256 !== metadataSha256) {
    throw new Error("Verification failed: the committed Markdown does not match the manifest hashes.")
  }
  return { verified: true, commit, slug, ...hashes }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2)
  const value = (flag) => args[args.indexOf(flag) + 1]
  try {
    console.log(JSON.stringify(verifyEvidencePacket({ commit: value("--commit"), slug: value("--slug"),
      sha256: value("--sha256"), metadataSha256: value("--metadata-sha256") }), null, 2))
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
