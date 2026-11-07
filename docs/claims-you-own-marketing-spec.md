# "Claims You Own" — Brand Marketing-Copy Spec

**Status: DRAFT v1 for Karen (2026-06-21). Planning artifact; not binding until approved.**

This spec defines the workflow by which the Paleo Foundation writes the *marketing copy a certified brand can own* — the "why this matters to your customers" language a brand cannot write for itself because it does not yet know what the literature says. It is a per-brand instantiation of **Surface 1** in `docs/hmtc-brand-intelligence-spec.md` §2.5 (the public differentiation showcase), delivered as part of the certification proposal package. Precedent for a planning spec living in the HMI repo: CLAUDE.md Part 26, `docs/ask-the-index-spec.md`, `docs/hmtc-brand-intelligence-spec.md`.

---

## 0. The thesis, and the trap inside it

We can write this copy better than any agency, any in-house marketing lead, and any competing certifier, for one reason: we operate the corpus. We know *which metals the rest of the world's regulators are already watching*, *why each one matters to an infant or an adult*, and *how a given ingredient, cultivar, or region actually distributes* across the literature. A brand's marketing team has the voice; we have the substantiation file. That asymmetry is the product.

The trap is the same asymmetry from the other side. **Marketing pressure pushes in exactly the direction CLAUDE.md Part 2 exists to prevent** — toward strengthening a claim past what the literature supports, because a stronger claim sells. The discipline that protects the wiki is therefore the discipline that makes this copy defensible. The copy inherits the wiki's authority *only if it inherits the wiki's honesty*. Stated as a rule we never break:

> **A claim the wiki would not make, the brand cannot own.** Every line of brand copy is provenance-bound to an HMI source page (or a WikiBiome page) that supports it at the strength the copy asserts. If the source supports "the EU is monitoring nickel," the copy says that; it does not say "nickel is dangerous."

This is also why the copy is litigation-safe in the channel where litigation is hottest. The brands we certify are sued, or fear being sued, on advertising claims. A claim footnoted to a version-pinned literature page is the opposite of "self-published on the certifier's website" — it is the strongest substantiation file a defendant can hold.

---

## 1. Firewall placement (non-negotiable)

This is an **HMTc action-layer deliverable**, not wiki content. It obeys the one-way firewall from CLAUDE.md Part 2 and `docs/hmtc-brand-intelligence-spec.md` §0:

1. **Reads HMI one-way.** The copy pipeline consumes HMI's public, version-pinned source/metal/regulation/ingredient pages and WikiBiome pages. It never writes back. No brand name, no brand copy, no brand-specific finding ever lands in `wiki/`. There is no `wiki/brands/` directory (Part 12), and this workflow does not create one.
2. **The system and the outputs live in `paleo-foundation`**, alongside the rest of the brand-intelligence build (spec §1), not in this repo. This file is the *plan*; the generator and the per-brand sheets are built and stored there, behind certification auth, governed by the brand data agreement.
3. **HMT&C-certified brands are still never named in the wiki** (Part 12). Generating Bobbie's or Kasandrinos's copy in the action layer does not license a single mention of either on heavymetalindex.com.
4. **Comparative and provenance claims carry brand-private inputs** (the brand's own confirmatory lot result). Those inputs follow the spec's COA-handling and retention rules (§3.1, §4 of the brand-intelligence spec). They are never literature.

If a session finds itself writing brand copy into `wiki/`, or citing a brand's lot result as a literature value, stop: that is a firewall breach, not a task.

---

## 2. Two archetypes (and why we pick by how the brand already sells)

Karen's two examples are not two brands; they are two *strategies*, and the brand chooses the strategy for us by how it already markets. Step one of every engagement is reading the brand's live positioning (site, PDPs, press, founder interviews, retailer decks) and matching it to the archetype it is already reaching for. We amplify the strategy that fits; we do not impose ours.

### Archetype A — "Ahead of the regulatory curve" (commitment-to-safety)

**Fits brands whose identity is rigor and whose customers are anxious** (infant formula, baby food, prenatal, supplements). Example: **Bobbie**.

- **The claim is the program, not a number.** "We test for eight heavy metals, including the four most labels skip — aluminum, tin, chromium, and nickel." The named metals are the moat (the Non-GMO lesson: specificity is the whole point).
- **Each extra metal is anchored to a real reason, in a parent's language, never to fear.** The reason is that *other governments and standards bodies are already watching it* and the science points to infant harm the US has not yet regulated. That is the future-proofing pitch in consumer voice: "we test for what the rest of the world's regulators are already watching." Honest, current, and defensible.
- **The advantage is a commitment competitors structurally cannot copy:** a brand testing eight analytes with speciation can say so; a brand testing four cannot. This is a C-scope claim (the standard's protectiveness), durable, on-message with the published preprint thesis.
- **Source spine:** HMI metal pages (`metals/aluminum`, `metals/nickel`, `metals/tin`, `metals/organotins`, `metals/chromium-hexavalent`), the regulation pages that document each jurisdiction's action, the infant-formula product pages, and the toxicology callouts on each metal page. WikiBiome adds the mechanism layer where it exists (e.g. `microbiome/nickel-microbial-pathogenesis`).

### Archetype B — "Provenance / cleaner-by-origin" (superiority)

**Fits brands whose identity is a specific origin, cultivar, or supply chain** (single-estate oils, single-origin chocolate, specific-region seafood). Example: **Kasandrinos** (Koroneiki olives, family orchard, Niata, Greece).

- **The claim is comparative:** this origin/cultivar runs lower in specific metals than the same product from other regions, *because the literature says so*, confirmed by the brand's own test sitting inside that distribution.
- **It is a higher litigation bar than Archetype A.** A comparative superiority claim invites FTC/Lanham-Act substantiation scrutiny and a competitor challenge. It is sayable only when **two** things are true together: (a) HMI literature shows the regional/cultivar distribution running cleaner for the named metal, *and* (b) the brand's own confirmatory lot result places its product in that cleaner distribution. Either alone is not enough. The literature claim without the brand test is "olive oil from region X tends to run lower" (true, but generic); the brand test without the literature is an unanchored single data point.
- **Frame as "lower," never "low" or "safe."** Comparative and quantitative, against a named alternative population, not an undefined absolute.
- **Source spine:** HMI ingredient/product pages and the regional/cultivar source set (e.g. `sources/tayeb2025-olive-corn-oil-iran-pb-cd`, `sources/llorent-martinez2014-olive-oil-extraction-metals-fate`, `sources/silva2025-edible-oils-health-sustainability`, the `metals/*` pages for the analytes in play), plus the brand's confirmatory test.

A brand can carry both archetypes (a provenance brand that also tests the extra four metals). The sheet leads with the one its existing positioning already reaches for.

---

## 3. The data-sourcing layer

Three sources, each with a different role and a different defensibility weight.

| Source | Role in the copy | Defensibility |
|---|---|---|
| **Heavy Metal Index** (`wiki/metals`, `wiki/regulations`, `wiki/products`, `wiki/ingredients`, `wiki/synthesis`, `wiki/sources`) | The substantiation spine. Every regulatory anchor and every "why it matters" claim resolves to a source page. | A/B-tier, version-pinned, EU-database-rights-wrapped. The quotable backbone. |
| **WikiBiome** (federated microbiome-and-metals content; canonical home is wikibiome.com) | The mechanism/health layer where a metal's harm runs through the microbiome (e.g. nickel and gut pathogenesis). Adds a "why your gut/your baby's gut" register a parent trusts. | Treat as B-tier; attribute. Federation is one-way per CLAUDE.md Part 3 — we lift draft microbiome content *to* WikiBiome, and we cite WikiBiome as a source, but the brand copy does not turn draft synthesis into a hard claim past what the page supports. |
| **Toxicology callouts** (the health-effect/mechanism sections already on `metals/*` pages and `synthesis/*`) | The "why this metal matters to an infant / an adult" sentence. Dose, population, frequency — never an undefined qualifier. | Only as strong as the cited page. Effect claims about a population must specify dose and frequency (Part 7 consumer-translation rule). |

**Provenance binding (the load-bearing rule).** Every claim template carries a footnote to the specific HMI/WikiBiome page and version that supports it. At generation time the pipeline re-verifies the claim against the live page (the freshness contract from the brand-intelligence spec §5). A regulatory anchor that cannot be resolved to a current source page does not ship — it becomes a gap to fill in the corpus first, not a sentence we write anyway. The illustrative anchors below (Al in AU/NZ infant formula; EU nickel monitoring; tin caps; California Cr-VI speciation) are each flagged *verify-against-source* in the worked examples precisely so the pipeline cannot skip this step.

---

## 4. The deliverable: the "Claims You Own" sheet

A short, beautifully set sheet that rides inside the proposal package. Structure (per claim):

1. **The claim** — the sayable sentence, in three registers (below).
2. **What makes it true** — the specific action or test result that earns it. For program claims (Archetype A) this is "you test analyte X." For comparative claims (Archetype B) this is "literature page Y + your confirmatory result Z."
3. **Where it lives** — can / PDP / press release / retailer deck. Different registers go to different surfaces.
4. **Source footnote** — the HMI/WikiBiome page(s) behind it.

**Three registers, because a marketing lead deploys three lengths:**

- **Can register (~150 ms, ≤5 words):** what fits on the package face. "Tested for 8 heavy metals."
- **PDP/shelf register (one sentence):** "Tested for eight heavy metals, including the four most labels skip — aluminum, tin, chromium, and nickel."
- **Press/retailer register (a paragraph):** the same claim with the regulatory backing spelled out and footnoted, for the press release, the retailer onboarding deck, and the regulatory-affairs Q&A.

**Claim templates, not finished claims.** Any sentence whose truth depends on a result the brand has not yet produced ships as a *template* with the result left blank: *"Non-detect for nickel"* renders only once the brand's four-analyte test fills it in. The language is locked; the number is a blank the test completes. This is also the persuasion mechanism — the brand reads the exact sentence it will be able to finish the moment the last test clears (endowed progress: the claim is two-thirds written; one test finishes it).

---

## 5. The generation pipeline

Six steps, brief in, reviewed sheet out. Built in `paleo-foundation`; this spec defines the contract.

1. **Brand-positioning research.** Read the brand's live marketing (site, PDPs, press, founder interviews, retailer language). Output: the archetype match (A, B, or both) and the brand's existing voice/claims so the copy extends what they already say.
2. **Strategy lock.** Pick the lead archetype and the analytes/origins in play. For Archetype B, confirm a confirmatory lot result exists or name it as the gating test.
3. **Claim mining.** Pull from HMI/WikiBiome the regulatory anchors, the per-metal "why it matters" toxicology sentence, and (for B) the regional/cultivar distribution. Each candidate claim is born with its source footnote attached.
4. **Register drafting.** Write each surviving claim in the three registers. Blanks left for any not-yet-tested result.
5. **Claims lint (the litigation-safety gate).** A string-and-provenance check that ports the relevant HMI lint rules into the copy pipeline. It **blocks** a claim that:
   - asserts safety ("safe," "clean," "non-toxic," "trace") without a quantitative anchor — the no-safety-claims rule (brand-intelligence spec §5; Part 7 consumer-qualifier rule);
   - is not provenance-bound to a current source page, or whose page moved >2× since pinning (freshness contract);
   - states a number for a brand result that has not been produced (no fabricated brand numbers) — these must be templates with blanks;
   - makes a comparative/superiority claim (Archetype B) without both the literature page *and* the brand's confirmatory result (FTC/Lanham substantiation);
   - names or attacks a competing certifier or a named competitor brand (see §6);
   - uses an undefined qualifier without dose/population/frequency.
6. **Human review.** Karen (and, for comparative claims and any new public commercial framing, counsel — the OPERATING.md Part 4 ask-first list). The sheet is not sent until it clears review.

---

## 6. Competitive framing discipline

The contrast is always against *a frame*, never against *a named party*.

- **Never attack the brand's current certifier by name.** A brand proud of its existing mark should feel it is trading up, not that it was duped. The contrast is against "the four-metal frame" and "what most labels test," not against Clean Label Project or any competitor by name. This protects the brand from a tortious-interference/trade-libel exposure it cannot consent away, and it keeps our own posture neutral.
- **Comparative claims (Archetype B) name a *population*, not a *competitor*.** "Olive oil from [other regions] runs higher in [metal]" is a claim about a literature distribution. "Brand X's oil runs higher" is a claim about a competitor and is out of scope.
- **No HMT&C self-reference inside the brand copy beyond the certification fact itself.** The copy sells the brand's testing commitment, not our program's marketing. (The firewall reason: the brand's defensibility, like the wiki's, comes from the claim resting on literature, not on the certifier's say-so.)

---

## 7. Worked examples (illustrative templates — NOT approved copy)

Brackets mark blanks the brand's own test completes. `[verify: page]` marks a regulatory anchor the pipeline must resolve to a current source page before it ships. These are sketches to show the shape; real sheets come out of §5.

### 7a. Archetype A — Bobbie (commitment-to-safety)

| Register | Template | Earns it / source |
|---|---|---|
| **Can** | "Tested for 8 heavy metals." | Program: 8-analyte panel run · `metals/*` |
| **PDP** | "We test for eight heavy metals — including the four most labels skip: aluminum, tin, chromium, and nickel." | Program · `metals/aluminum`, `metals/tin`, `metals/chromium-hexavalent`, `metals/nickel` |
| **Press** | "Most infant-formula testing stops at four metals. We test for eight, including aluminum, tin, hexavalent chromium, and nickel — the metals regulators outside the US are already moving on: the EU is monitoring nickel in food `[verify: regulations + eu-2024-907-nickel-monitoring-recommendation]`, aluminum in infant formula is regulated in Australia and New Zealand `[verify: metals/aluminum + source page]`, tin is capped across multiple food-contact systems `[verify: metals/organotins, yamanaka2025-tinplate-pineapple-cans]`, and California now speciates hexavalent chromium `[verify: metals/chromium-hexavalent]`. We test for what the rest of the world's regulators are already watching, so our families don't wait for US rules to catch up." | Program + regulatory anchors, each footnoted |
| **PDP (template w/ blank)** | "Independently tested to non-detect for nickel `[result pending 4-analyte test]`." | Brand result · ships only when the test fills the blank |

### 7b. Archetype B — Kasandrinos (provenance / cleaner-by-origin)

| Register | Template | Earns it / source |
|---|---|---|
| **Can** | "Single-estate. Tested cleaner." | Provenance + comparative · gated on test |
| **PDP** | "Koroneiki olives from one family orchard in Niata, Greece — a region the literature shows running lower in [metal] than olive oil from [other regions] `[verify: tayeb2025, llorent-martinez2014]` — and our own oil tests at [value] `[brand confirmatory result]`." | Literature distribution **+** brand confirmatory result (both required) |
| **Press** | "[paragraph: the cultivar, the single-origin supply chain, the literature distribution for the region with citations, and the brand's own lot result placing its oil inside that cleaner distribution]" | Same, fully footnoted; counsel-reviewed (comparative claim) |

Note the asymmetry: 7a's program claims are sayable on certification day; 7b's comparative claims are sayable only after the brand's confirmatory result lands inside the literature distribution. The sheet shows the brand exactly which sentences are live now and which one test unlocks.

---

## 8. Governing-principles check

- **P1 drive contamination down** ✔ — the copy rewards (and advertises) testing more analytes, which pulls the category toward broader testing.
- **P2 protect consumers** ✔ — claims specify dose/population/frequency; no "safe"/"trace" without an anchor; consumers get true, specific information.
- **P3 protect brands** ✔ — this is direct, differentiated brand value the brand cannot produce itself, with a substantiation file built in.
- **P4 legally defensible** ✔ — every claim provenance-bound and version-pinned; comparative claims double-gated and counsel-reviewed; no competitor/certifier attack; no fabricated numbers. The earned-copy discipline *is* the defensibility.
- **P5 de facto standard** ✔ — being the party that writes the category's defensible claim language makes the mark primary.

**Part 2 direction check:** this work moves *away from the literature toward commercial use*, which is exactly the drift Part 2 guards. It is permitted only because it is one-way (reads HMI, never writes back) and because the claims-lint enforces literature-honesty at the sentence level — a brand cannot say what the wiki would not. If a future session loosens the lint to let a stronger claim through "because it sells," that is the failure mode; stop and ask Karen.

---

## 9. Open questions for Karen

1. **Baseline credit (blocks the endowed-progress line).** Does a brand's prior testing credit toward the HMTc 3-lot baseline, so the ask is genuinely "one more test"? The §4/§7 "one test finishes the claim" framing is only honest if true.
2. **Where the generator is built.** Confirm `paleo-foundation` (alongside the brand-intelligence build) rather than a standalone tool, so it reuses the HMI API bridge, auth, and the brand data agreement.
3. **Comparative-claim substantiation standard.** What evidentiary bar do we hold Archetype B to — FTC "competent and reliable scientific evidence," plus a named in-house rule for how many literature sources + which brand-test recency counts as "inside the distribution"?
4. **Counsel gate scope.** Confirm all Archetype B (comparative) sheets and any new public commercial framing route to counsel before send, per OPERATING.md Part 4.
5. **WikiBiome usage.** How hard a claim may draft microbiome synthesis support? Proposed default: WikiBiome cited as B-tier context, never the sole basis for a headline health claim.
6. **Pilot brands.** Bobbie (A) and Kasandrinos (B) as the two pilots to validate one sheet per archetype before generalizing the pipeline?

---

*Draft v1 ends. The plan is firewall-placed (action layer, one-way), archetype-driven (matched to how each brand already sells), corpus-sourced with provenance binding, three-register, template-with-blanks for untested results, and gated by a claims-lint that ports the wiki's Part-2 honesty into the copy. Pending Karen's answers in §9, the next step is the Bobbie and Kasandrinos pilot sheets.*
