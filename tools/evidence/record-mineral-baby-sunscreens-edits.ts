// Records wiki-edit audit rows for the 2026-09-26 mineral baby sunscreens evidence ingest.
// Usage: npx tsx tools/evidence/record-mineral-baby-sunscreens-edits.ts <span_id> <wiki path>...
import { recordEditOrAbort } from "./wiki-edit.js"

const [spanId, ...pages] = process.argv.slice(2)
if (!spanId || pages.length === 0) {
  console.error("usage: record-mineral-baby-sunscreens-edits.ts <span_id> <wiki path>...")
  process.exit(2)
}

for (const page of pages) {
  const slug = page.replace(/^wiki\//, "").replace(/\.md$/, "").replace(/[^a-z0-9]+/gi, "-")
  await recordEditOrAbort({
    edit_id: `mineral-baby-sunscreens-2026-09-26-${spanId}-${slug}`,
    page,
    span_id: spanId,
    source_document: "papers-mineral-baby-sunscreens archive (35 PDFs, sha256-verified) | raw/studies/mineral-baby-sunscreens-2026-09/",
    retrieval_date: "2026-09-25",
    models_used: ["anthropic/claude-opus-5-5"],
    model_agreement_state: "single_model",
    applied_at: new Date().toISOString(),
    commit_sha: "pending",
  })
}
console.log(`recorded ${pages.length} wiki edit audit rows (${spanId})`)
