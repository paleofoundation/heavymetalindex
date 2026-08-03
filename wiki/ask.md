---
title: Ask the Index
description: Ask a question about heavy metals in food and get a cited answer from the Heavy Metal Index corpus.
audience: [regulator, educator, consumer, researcher, brand-legal, retailer-compliance, brand-qa]
updated: 2026-05-17
---

<section class="hmi-ask-page" data-ask-endpoint="/api/ask">
  <header class="hmi-ask-intro">
    <div class="hmi-ask-kicker">Ask the Index</div>
    <h1 class="hmi-ask-h1">Ask a question this corpus can actually answer.</h1>
    <p>Ask a question about heavy metals in food. Every answer is grounded in cited Heavy Metal Index pages — no outside knowledge, no hallucination. If the corpus doesn't carry evidence on your question, you'll see a "no evidence loaded" reply rather than a guess.</p>
  </header>

  <form class="hmi-ask-form" autocomplete="off">
    <label for="hmi-ask-input" class="visually-hidden">Your question</label>
    <textarea id="hmi-ask-input" name="q" rows="3" maxlength="800" placeholder="Ask about metals, ingredients, products, regulations, or sources..." aria-label="Your question about heavy metals in food"></textarea>
    <div class="hmi-ask-actions">
      <span class="hmi-ask-note">Answers come only from indexed Heavy Metal Index pages.</span>
      <button type="submit" class="hmi-ask-submit">Ask</button>
    </div>
  </form>

  <div class="hmi-ask-suggestions" aria-label="Example questions">
    <div class="hmi-ask-suggestions-label">Try one of these:</div>
    <button type="button" data-hmi-ask-example="What is the lowest applicable regulatory cap for lead in turmeric, and does the Index show field findings above it?">What is the lowest applicable regulatory cap for lead in turmeric, and does the Index show field findings above it?</button>
    <button type="button" data-hmi-ask-example="Which baby-food categories does FDA Closer to Zero set lead action levels for, and at what ppb?">Which baby-food categories does FDA Closer to Zero set lead action levels for, and at what ppb?</button>
    <button type="button" data-hmi-ask-example="What does the literature say about cadmium in cocoa, and which regions report the highest concentrations?">What does the literature say about cadmium in cocoa, and which regions report the highest concentrations?</button>
    <button type="button" data-hmi-ask-example="How does the EU mercury limit for tuna compare to the US FDA action level?">How does the EU mercury limit for tuna compare to the US FDA action level?</button>
    <button type="button" data-hmi-ask-example="Is brown rice or white rice higher in inorganic arsenic, and why?">Is brown rice or white rice higher in inorganic arsenic, and why?</button>
    <button type="button" data-hmi-ask-example="What testing method should a QA lab use to distinguish total chromium from hexavalent chromium in spices?">What testing method should a QA lab use to distinguish total chromium from hexavalent chromium in spices?</button>
  </div>


  <div class="hmi-ask-conversation" aria-live="polite"></div>
</section>
