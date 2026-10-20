/** Render authored sentence-to-source placements without guessing attribution. */
export function renderSentenceCitations(passage, citationOrder = null) {
  const declared = new Set(passage.source_keys || []);
  const refs = keys => {
    const ordered = [...new Set(keys)];
    if (citationOrder) ordered.sort((a, b) => citationOrder.indexOf(a) - citationOrder.indexOf(b));
    return ordered.map(key => `[[sources/${key}]]`).join(" ");
  };
  if (passage.citation_spans === undefined) {
    const citations = refs([...declared]);
    const punctuation = passage.text.match(/[.!?]$/)?.[0] ?? "";
    return citations ? `${passage.text.slice(0, punctuation ? -1 : undefined)} (${citations})${punctuation}` : passage.text;
  }
  if (!Array.isArray(passage.citation_spans) || (!passage.citation_spans.length && !passage.citation_omission_reason))
    throw Error("Sentence citations require explicit placements or an editorial omission reason");
  let cursor = 0, output = "";
  const used = new Set();
  for (const span of passage.citation_spans) {
    if (typeof span.after !== "string" || !/[.!?][”’\"']?$/.test(span.after) || !Array.isArray(span.source_keys) || !span.source_keys.length)
      throw Error("Sentence citation needs a sentence ending and supporting sources");
    const start = passage.text.indexOf(span.after);
    if (start < cursor || passage.text.indexOf(span.after, start + 1) >= 0)
      throw Error(`Sentence citation anchor is missing, repeated or out of order: ${span.after}`);
    const end = start + span.after.length;
    if (end < passage.text.length && !/\s/.test(passage.text[end]))
      throw Error(`Sentence citation anchor does not end a sentence: ${span.after}`);
    for (const key of span.source_keys) {
      if (!declared.has(key)) throw Error(`Sentence citation source is not declared: ${key}`);
      used.add(key);
    }
    // Use the existing citation-apparatus syntax. The browser compacts this
    // group to superscripts after the sentence punctuation, at this exact point.
    const punctuation = span.after.match(/[.!?][”’\"']?$/)[0];
    output += passage.text.slice(cursor, end - punctuation.length) + ` (${refs(span.source_keys)})` + punctuation;
    cursor = end;
  }
  if ([...declared].some(key => !used.has(key)) && !passage.citation_omission_reason)
    throw Error("Sentence placements must preserve every declared source or explain context-only provenance");
  return output + passage.text.slice(cursor);
}

/** Opted-in syntheses must never silently fall back to paragraph-end groups. */
export function validateSentenceCitationPlacements(synthesis) {
  if (synthesis.citation_placement !== "sentence") return;
  function visit(value) {
    if (!value || typeof value !== "object") return;
    if (typeof value.text === "string" && value.source_keys?.length) {
      if (value.citation_spans === undefined)
        throw Error(`Missing sentence citation placements: ${value.text.slice(0, 80)}`);
      renderSentenceCitations(value);
    }
    for (const child of Object.values(value)) visit(child);
  }
  visit(synthesis);
}
