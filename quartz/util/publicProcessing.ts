import { parseFragment } from "parse5"

// Tool attribution belongs in editorial records. These patterns deliberately
// distinguish the food-standards body and scientific abbreviations/initials.
const internalProcessing = /\b(?:Codex\s+(?:AI|compiled|checked|generated)|(?:compiled|generated|checked|verified|verification|processed|reviewed|written|prepared|assessed)\b[^.<>]{0,60}\b(?:by|using|with)\s+Codex\b|ChatGPT|OpenAI|artificial intelligence|generative[- ]AI|(?:by|using|with)\s+AI|AI[- ](?:powered|driven|tools?|software|extraction|verification|review|scope\s+adjudication|compil\w*|generat\w*|assist\w*|adjudicat\w*|integrat\w*|agents?\b|models?\b|products?\b|source\s+verification|primary-source\s+verification|Gateway\b)|scientific review incomplete)\b/i

export function assertPublicProcessingFree(content: string, page: string) {
  if (internalProcessing.test(content)) {
    throw new Error(`Internal processing text cannot be published (${page}): ${content.match(internalProcessing)?.[0]}`)
  }
}

/** Check the complete document, including drawers, metadata and tooltip data. */
export function assertPublicHtmlProcessingFree(html: string, page: string) {
  type Node = { nodeName: string; value?: string; attrs?: { name: string; value: string }[]; childNodes?: Node[]; content?: Node }
  const texts: string[] = []
  function walk(node: Node) {
    if (["script", "style", "#comment"].includes(node.nodeName)) return
    if (node.nodeName === "#text") texts.push(node.value ?? "")
    for (const attr of node.attrs ?? []) {
      if (/^(?:aria-|data-)|^(?:title|alt|content|placeholder)$/i.test(attr.name)) {
        assertPublicProcessingFree(attr.value.replace(/<[^>]*>/g, " "), page)
      }
    }
    for (const child of node.childNodes ?? []) walk(child)
    if (node.content) walk(node.content)
  }
  walk(parseFragment(html) as Node)
  assertPublicProcessingFree(texts.join(" ").replace(/\s+/g, " "), page)
}
