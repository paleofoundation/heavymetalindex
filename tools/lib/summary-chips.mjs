// Retired keyword chips duplicate the summary and render as dangling text.
export function removeSummaryChips(markdown) {
  return markdown.replace(/^[ \t]*<div class="hmi-pill-row">\s*(?:<span class="hmi-pill">[^\n]*<\/span>\s*)+<\/div>\r?\n/gm, "")
}
