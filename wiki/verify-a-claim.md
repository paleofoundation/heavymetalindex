---
title: "Verify a marketing claim against the literature"
type: tool
audience: [regulator, journalist, legal]
updated: 2026-05-14
---

# Verify a marketing claim against the literature

Paste a marketing claim about heavy metals in a food product. Heavy Metal Index will check whether the curated literature corpus supports it, contradicts it, or is silent on it. The verification is structured into five sections: the claim as stated, the inferred product-category scope, the literature distribution the corpus actually reports, what substantiation would be required beyond category-level evidence, and an explicit verdict.

This tool is free and intended for retailer compliance teams, brand QA and legal teams evaluating their own materials, journalists checking claims for stories, and regulators reviewing the substantiation landscape. The tool does not name brands. It evaluates claim language against the corpus.

## Paste a claim

<noscript>This tool requires JavaScript. The "Ask the Index" button in the site footer offers a chat-mode alternative.</noscript>

<div class="verify-claim-wrap">
  <form id="verify-claim-form">
    <label for="verify-claim-input">Marketing claim:</label>
    <textarea id="verify-claim-input" rows="3" maxlength="800" placeholder="Example: 'Our infant rice cereal contains the lowest levels of inorganic arsenic available in the category.'"></textarea>
    <div class="verify-claim-actions">
      <button type="submit">Verify against the literature</button>
      <span class="verify-claim-note">No brand names. Strip company identifiers before pasting.</span>
    </div>
  </form>
  <div id="verify-claim-result" aria-live="polite"></div>
</div>

<script type="module">
const form = document.getElementById("verify-claim-form")
const input = document.getElementById("verify-claim-input")
const result = document.getElementById("verify-claim-result")
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]))
}
function renderCitations(citations) {
  if (!Array.isArray(citations) || citations.length === 0) return ""
  const items = citations.map((c) => `<li><a href="${c.url}">[${c.id}] ${escapeHTML(c.title)}</a><p>${escapeHTML(c.excerpt || "")}</p></li>`).join("")
  return `<div class="verify-claim-sources"><div class="verify-claim-sources-title">Sources</div><ol>${items}</ol></div>`
}
form?.addEventListener("submit", async (event) => {
  event.preventDefault()
  const claim = (input?.value || "").trim()
  if (!claim) return
  if (!result) return
  result.innerHTML = "<p><em>Verifying against the corpus…</em></p>"
  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: claim, mode: "verify", audience: "regulatory" }),
    })
    const data = await response.json()
    if (!response.ok || data.error) {
      result.innerHTML = `<p>${escapeHTML(data.error || "Verification could not run.")}</p>`
      return
    }
    const answerHtml = (data.answer || "").split(/\n{2,}/).map((p) => `<p>${escapeHTML(p)}</p>`).join("")
    const citationsHtml = renderCitations(data.citations || [])
    result.innerHTML = `<div class="verify-claim-output">${answerHtml}${citationsHtml}</div>`
  } catch (err) {
    result.innerHTML = "<p>Verification temporarily unavailable. Try again in a moment.</p>"
  }
})
</script>

<style>
.verify-claim-wrap { margin: 1.5rem 0; }
#verify-claim-input { width: 100%; box-sizing: border-box; padding: 0.6rem; border: 1px solid var(--lightgray); border-radius: 6px; font-family: var(--bodyFont); font-size: 0.95rem; }
.verify-claim-actions { display: flex; gap: 1rem; align-items: center; margin-top: 0.6rem; flex-wrap: wrap; }
.verify-claim-actions button { padding: 0.5rem 1rem; background: var(--secondary); color: var(--light); border: none; border-radius: 6px; font-weight: 500; cursor: pointer; }
.verify-claim-actions button:hover { background: color-mix(in srgb, var(--secondary) 85%, var(--dark)); }
.verify-claim-note { font-size: 0.8rem; color: var(--gray); }
#verify-claim-result { margin-top: 1.25rem; }
.verify-claim-output { padding: 0.75rem 1rem; background: color-mix(in srgb, var(--light) 96%, var(--secondary) 3%); border-left: 3px solid var(--secondary); border-radius: 6px; }
.verify-claim-sources { margin-top: 0.6rem; font-size: 0.85rem; }
.verify-claim-sources-title { font-weight: 600; margin-bottom: 0.3rem; color: var(--darkgray); }
.verify-claim-sources ol { padding-left: 1.2rem; }
.verify-claim-sources p { margin: 0.2rem 0 0.6rem; font-size: 0.78rem; color: var(--gray); }
</style>

## What the verdict means

The tool returns one of four verdicts.

**Literature-supported** means the corpus contains evidence that places the claim within what published peer-reviewed and authoritative-regulatory sources report. The claim is consistent with what the literature describes for the product category.

**Literature-conflicting** means the corpus contains evidence that contradicts the claim. The claim, as worded, is not supportable from the published literature; substantiation would require per-product testing that exceeds the category-level distribution the corpus describes.

**Unsupported-but-not-contradicted** means the corpus does not contain evidence sufficient to support the claim, but also does not contradict it. This is the most common outcome for specific superlative claims ("the lowest," "the safest") that depend on per-product testing the wiki does not see.

**Out-of-scope** means the claim falls outside the metals-in-food domain the wiki covers, or names a product category the corpus does not yet cover. The query is logged to the research-gap queue.

## What this tool will not do

It will not evaluate or rank specific brands. The brand-name firewall in the chatbot strips brand names from inputs before processing; if you paste a claim that includes a brand name, the verification will assess the underlying claim language only.

It will not tell you whether a claim is legally substantiable in your jurisdiction. The verification is a literature check, not legal advice. Legal substantiability depends on per-product testing, the regulatory framework in your jurisdiction, and the specific claim language under scrutiny.

It will not certify a product. HMT&C-certified products carry verified per-product positions established through third-party testing per the certification program at [heavymetaltested.com](https://heavymetaltested.com). The wiki does not certify; it references the literature.

## How retailers and brand legal teams use this

Retailer compliance teams paste claims pulled from brand intake materials and use the verdict as one input into category-buyer review. A "literature-conflicting" verdict on a high-volume claim flags the brand for additional substantiation requests; a "literature-supported" verdict closes that line of inquiry quickly.

Brand legal and QA teams reverse-engineer their own marketing language against the tool before campaigns ship. The verdicts that come back tell them which claims they can keep, which need rephrasing, and which need underlying third-party testing data before they can be defended.

Journalists use it to assess whether claims in a story stand up to literature scrutiny. The structured five-section output is designed to be quoted in a piece with the citation chain intact.
