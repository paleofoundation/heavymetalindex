// Public prose may describe source verification, limitations and corrections.
// Local file handles and agent/session names belong in the preserved editorial
// record. These substitutions retain surrounding scientific claims verbatim.
const PATH = /^(?:\.?\.?\/)?(?:data\/(?:evidence|workbench)|raw(?:\/|$)|tools\/|wiki\/|docs\/)/i
const SCIENTIFIC_RAW = /^raw\/(?:frozen|as-consumed|cooked|uncooked|wet|dry|unprocessed)\b/i
const GENERATED = /<!-- BEGIN: ([^>]+) -->[\s\S]*?<!-- END: \1 -->/g

function pathLabel(value) {
  if (/^raw/i.test(value)) return "the archived source file"
  if (/^(?:\.\.?\/)?wiki\//i.test(value)) return "the linked reference record"
  if (/^(?:\.\.?\/)?(?:tools|docs)\//i.test(value)) return "the editorial record"
  return "the structured evidence record"
}

export function cleanSourcePublicProse(body) {
  const protectedBlocks = []
  let text = body.replace(GENERATED, (block) => {
    const i = protectedBlocks.push(block) - 1
    return `\u0000HMI_GENERATED_${i}\u0000`
  })
  const changes = []
  const replace = (pattern, fn, reason) => {
    text = text.replace(pattern, (...args) => {
      const before = args[0]
      const after = typeof fn === "function" ? fn(...args) : fn
      if (before !== after) changes.push({ before, after, reason })
      return after
    })
  }
  replace(/`([^`\n]+)`/g, (full, value) =>
    PATH.test(value) && !SCIENTIFIC_RAW.test(value) ? pathLabel(value) : full,
  "local artifact reference; original retained in editorial provenance")
  // Unquoted filenames are bounded by known extensions, never by arbitrary
  // prose punctuation. Preserve raw/frozen and raw/as-consumed food labels.
  replace(/\braw\/(?:Manual Fetch[^\n]*?|manual-fetch\/[^\n]*?|Digest\/[^\n]*?|reports\/[^\n]*?|markdown\/[^\n]*?)\.(?:pdf|csv|txt|xlsx|md|json)\b/gi,
    "the archived source file", "unquoted local artifact reference")
  replace(/\b(?:docs|tools|data\/(?:evidence|workbench))\/[A-Za-z0-9_./-]+\.(?:md|mjs|py|ts|jsonl?|csv|ya?ml)\b/g,
    "the editorial record", "unquoted local artifact reference")
  replace(/\bCLAUDE\.md\b/g, "the editorial policy", "local operating manual retained internally")
  replace(/\b(?:Claude\s+)?(?:Opus|Sonnet)\s*\d+(?:\.\d+)*(?:\s+(?:audit\s+)?subagent)?/g,
    "automated editorial review", "model identity retained in editorial provenance")
  replace(/\b(?:Claude Code|Codex (?:agent|session|subagent)|GPT[- ](?:5|6)[\w.-]*)\b/g,
    "automated editorial review", "execution identity retained in editorial provenance")
  replace(/\bKimi(?:-agent(?:'s)?)?\b/gi, "source-retrieval", "retrieval tool identity retained internally")
  replace(/\b(?:FRANK|ELON)\b/g, "editorial workflow", "internal workflow identity retained internally")
  replace(/\bClaude (?:session|general-purpose|verification|audit|ingest)\b/g,
    "editorial review", "execution identity retained internally")
  replace(/\bCodex (?:verification|ingest|audit)\b/g, "editorial review", "execution identity retained internally")
  replace(/\bsubagents?\b/gi, "editorial review", "execution role retained internally")
  replace(/\bfrontmatter\b/gi, "source metadata", "public metadata terminology")
  replace(/^## Wiki pages updated on ingest\s*$/gm, "## Related evidence", "reader-facing section title")
  text = text.replace(/\u0000HMI_GENERATED_(\d+)\u0000/g, (_, i) => protectedBlocks[Number(i)])
  return { body: text, changes }
}

export function findSourceProseLeaks(body) {
  const publicBody = body.replace(GENERATED, "").replace(/<!--[\s\S]*?-->/g, "")
  const findings = []
  publicBody.split("\n").forEach((line, index) => {
    for (const match of line.matchAll(/`([^`\n]+)`/g)) {
      if (PATH.test(match[1]) && !SCIENTIFIC_RAW.test(match[1])) {
        findings.push({ line: index + 1, kind: "local-path", text: match[0] })
      }
    }
    // Case matters: OPUS is also spectroscopy software and Frank is a name.
    const match = line.match(/\b(?:[Kk]imi|FRANK|ELON|CLAUDE\.md|Claude (?:Code|session|general-purpose|verification|audit|ingest)|(?:Claude\s+)?(?:Opus|Sonnet)\s*\d+(?:\.\d+)*|Codex (?:agent|session|subagent|verification|ingest|audit)|[Ss]ubagents?|[Ff]rontmatter)\b/)
    if (match) findings.push({ line: index + 1, kind: "execution-detail", text: match[0] })
  })
  return findings
}
