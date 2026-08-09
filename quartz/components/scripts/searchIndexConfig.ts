import FlexSearch from "flexsearch"

// Shared FlexSearch configuration for the site search.
//
// This module is the single source of truth for how the search index is
// constructed, and it is imported from BOTH ends of the pipeline:
//
//   1. the build-time emitter (plugins/emitters/contentIndex.tsx), which builds
//      the index, serialises it with `.export()`, and writes the shards to
//      static/flexSearchIndex.json, and
//   2. the client (components/scripts/search.inline.ts), which reconstructs the
//      index with `.import()` instead of re-tokenising every page in the browser.
//
// FlexSearch's export/import only serialises the index MAPS, not the runtime
// options. The `encode` function in particular runs at QUERY time to tokenise
// what the user types, so it must be byte-identical to the encoder that produced
// the stored tokens. Any drift between the two ends silently breaks matching:
// the query would be tokenised one way and the index built another. Keeping the
// encoder and the document descriptor here — imported by both ends — is what
// guarantees they can never diverge.

export interface SearchDoc {
  id: number
  slug: string
  title: string
  content: string
  tags: string[]
  [key: string]: any
}

// Whitespace-splitting tokeniser with per-character CJK segmentation. Latin runs
// are emitted as whole lowercased words (FlexSearch's `tokenize: "forward"` then
// expands each into its prefixes); CJK codepoints are emitted individually so
// unspaced scripts still match. Kept deliberately simple and dependency-free so
// it serialises the same in Node (build) and the browser (runtime).
export const encoder = (str: string): string[] => {
  const tokens: string[] = []
  let bufferStart = -1
  let bufferEnd = -1
  const lower = str.toLowerCase()

  let i = 0
  for (const char of lower) {
    const code = char.codePointAt(0)!

    const isCJK =
      (code >= 0x3040 && code <= 0x309f) ||
      (code >= 0x30a0 && code <= 0x30ff) ||
      (code >= 0x4e00 && code <= 0x9fff) ||
      (code >= 0xac00 && code <= 0xd7af) ||
      (code >= 0x20000 && code <= 0x2a6df)

    const isWhitespace = code === 32 || code === 9 || code === 10 || code === 13

    if (isCJK) {
      if (bufferStart !== -1) {
        tokens.push(lower.slice(bufferStart, bufferEnd))
        bufferStart = -1
      }
      tokens.push(char)
    } else if (isWhitespace) {
      if (bufferStart !== -1) {
        tokens.push(lower.slice(bufferStart, bufferEnd))
        bufferStart = -1
      }
    } else {
      if (bufferStart === -1) bufferStart = i
      bufferEnd = i + char.length
    }

    i += char.length
  }

  if (bufferStart !== -1) {
    tokens.push(lower.slice(bufferStart))
  }

  return tokens
}

// The document descriptor. `title`, `content`, and `tags` are the searchable
// fields; `tags` is additionally registered as a tag index so `#tag` filtering
// works. Changing tokenisation here changes both the serialised index shape and
// query behaviour, so the emitter and client stay in lockstep by construction.
// Return type is inferred (the flexsearch default import exposes `Document` as a
// value/constructor but not as a usable type namespace, so an explicit
// `FlexSearch.Document<SearchDoc>` annotation does not resolve).
export function createSearchIndex() {
  return new FlexSearch.Document<SearchDoc>({
    encode: encoder,
    document: {
      id: "id",
      tag: "tags",
      index: [
        {
          field: "title",
          tokenize: "forward",
        },
        {
          field: "content",
          tokenize: "forward",
        },
        {
          field: "tags",
          tokenize: "forward",
        },
      ],
    },
  })
}

// Filename (under static/) of the serialised index the emitter writes and the
// client fetches. Shared so the two ends can never disagree on the name.
export const SEARCH_INDEX_FILENAME = "flexSearchIndex.json"

// Shape of the serialised index file: a flat map of FlexSearch shard-key ->
// shard-payload (each payload is itself a JSON string, exactly as `.export()`
// hands it to us; the client passes each straight back to `.import()`).
export type SerializedSearchIndex = Record<string, string>
