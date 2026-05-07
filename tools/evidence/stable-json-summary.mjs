import fs from "node:fs"

export function writeStableJsonSummary(filePath, summary) {
  const nextSummary = { ...summary }

  if (fs.existsSync(filePath)) {
    try {
      const previousSummary = JSON.parse(fs.readFileSync(filePath, "utf8"))
      if (sameExceptGeneratedAt(previousSummary, nextSummary)) {
        nextSummary.generated_at = previousSummary.generated_at || nextSummary.generated_at
      }
    } catch {
      // Fall through and rewrite malformed JSON with the current summary.
    }
  }

  const nextText = `${JSON.stringify(nextSummary, null, 2)}\n`
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, "utf8") === nextText) return false

  fs.writeFileSync(filePath, nextText, "utf8")
  return true
}

function sameExceptGeneratedAt(left, right) {
  return JSON.stringify(withoutGeneratedAt(left)) === JSON.stringify(withoutGeneratedAt(right))
}

function withoutGeneratedAt(value) {
  const clone = { ...value }
  delete clone.generated_at
  return clone
}
