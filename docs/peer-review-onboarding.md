# Peer-review onboarding — how to seed the first review pass

Internal-ops document. Not a public wiki page. Karen reads this, picks one or more reviewers, sends the invitation, and the corresponding `data/peer-review/<slug>.jsonl` file becomes the source of truth.

## What's already in place

- `wiki/curators.md` lists six external-reviewer slots, each scoped to a specific domain (food chemistry, exposure toxicology, regulatory affairs, fisheries, cocoa, climate). Each slot names the synthesis pages it would cover (`invited_for:` field) and the JSONL log path the reviewer's verdicts will land in.
- `data/peer-review/_README.md` documents the event-log schema (one JSON object per line: reviewer, page_slug, verdict, review_date, notes, conflicts_declared, page_sha256_at_review).
- `tools/build-peer-review-footers.mjs` runs on every prebuild. Empty JSONL files render placeholder footers ("no reviews yet"). The moment a single review event is written, the corresponding synthesis page footer flips to show the verdict + reviewer name + date.
- 15 synthesis pages currently carry the placeholder footer.

## Suggested first-pass approach

The defensibility argument the Index rests on (Cochrane-style: curated reference whose synthesis claims have visible external evaluation) doesn't require all six slots filled at once. A credible **two-reviewer minimum** unlocks the audit signal; subsequent reviewers add depth.

**Phase 1: two anchor reviewers.** Pick one from "food chemistry / ICP-MS methods" and one from "exposure toxicology / dietary epidemiology". These two cover the load-bearing methodological and population-health framings; the other four slots can fill on a slower cadence.

**Phase 2: regulatory + commodity-specific.** Add the regulatory-affairs reviewer (the EU/FDA/Codex framings are increasingly cited as Heavy Metal Index gains visibility) and at least one of the commodity-specific reviewers (cocoa is the highest-traffic ingredient page; fisheries is the second-highest).

**Phase 3: rounding out.** The climate-and-contamination slot is the slowest-moving and can sit empty until the climate-related synthesis pages mature further.

## Who to invite — categories, not individuals

I won't name specific researchers because (a) I don't know who's currently active, available, or aligned with the editorial firewall, and (b) Karen has the actual relationships and the better read on fit. Instead, here are the **categories** worth scanning for the two Phase 1 invitations, with the kinds of credentials that read as credible to brand-legal and regulator audiences:

**Food chemistry / ICP-MS:**
- Authors on the EFSA CONTAM panel's heavy-metals scientific opinions (the panel rosters are public; senior members have the analytical credibility brand-legal expects)
- Principal investigators on the FDA Total Diet Study or a national-equivalent monitoring program
- Authors on a recent (2020+) inter-laboratory comparison study for heavy metals in food matrices
- Editorial board members of *Food Chemistry*, *Food Additives & Contaminants*, *Journal of Agricultural and Food Chemistry*

**Exposure toxicology / dietary epidemiology:**
- Authors on JECFA monographs that set or revised PTWI/PTMI values (lead, cadmium, methylmercury)
- Principal investigators on infant- or maternal-cohort studies that linked dietary exposure to biomarker outcomes
- Authors of the EPA IRIS toxicological reviews (the 2025 inorganic arsenic review is the most recent load-bearing one; the lead author or a panel member is a natural candidate)
- Editorial board members of *Environmental Health Perspectives*, *Reproductive Toxicology*, *Pediatrics*

The corpus itself is the best discovery surface: the top-cited authors across the existing source pages are by construction the people the Heavy Metal Index already leans on, and they're the most natural fit. A 10-minute scan of the `authors:` frontmatter on the highest-cited source pages (rice/iAs, cocoa/Cd, infant-formula, fish/MeHg) surfaces the cluster.

## Sample invitation language

A direct, short, no-marketing invitation reads as credible. Drafted below; Karen edits or rewrites as she sees fit before sending.

> Subject: Heavy Metal Index — external peer-review invitation
>
> Dear [name],
>
> I'm reaching out because of your work on [specific paper / agency program / synthesis area]. The Paleo Foundation operates the Heavy Metal Index (heavymetalindex.com), a curated reference on heavy metals in food, ingredients, supply-chain inputs, and regulation, built on the same methodological frame as a Cochrane systematic review. The corpus is currently ~1,080 source pages, ~260 ingredients, ~350 product categories, 55 regulations across 11 jurisdictions, and 15 cross-source synthesis pages.
>
> Synthesis pages are the cross-source analytical claims the Index publishes (e.g., "organic certification is not protective against heavy metals", "alkalisation does not reduce cadmium in cocoa"). Each carries a structured peer-review footer; the verdicts are "endorsed", "contested", "recused", or "pending review", and the full review event log is part of the public corpus.
>
> I'd like to invite you as a named external reviewer for the [domain] synthesis pages. The commitment is light: read the synthesis page in full (typically 1–2 pages), verify against the contributing sources listed in the frontmatter, and submit a one-line verdict + short notes. The first invited scope for you would be: [list synthesis page URLs from the `invited_for:` field in wiki/curators.md].
>
> The conflict-of-interest framework is at heavymetalindex.com/curators. The full editorial methodology, including the firewall between the Index and our Heavy Metal Tested & Certified certification program, is at heavymetalindex.com/editorial-standards. The Index does not pay reviewers; the value proposition is the visibility (your verdict appears on the page itself, the cluster of synthesis pages cumulatively becomes a citable scholarly record, and DOIs will be minted on the synthesis pages within the next few months once our DataCite repository registration completes).
>
> If you're open to the role I'd send the first synthesis page and the contributing sources by email and you can return the verdict however suits you (a one-line reply is enough; we structure it on our side). Recusal on any page where you have a conflict is expected and visibly tracked.
>
> Please let me know.
>
> Karen Pendergrass
> Founder, Paleo Foundation
> karen@paleofoundation.com

## What happens when the first reviewer says yes

1. Karen updates `wiki/curators.md`: replaces `[PENDING INVITATION — ...]` with the reviewer's name + affiliation + actual credentials, sets `slug:` to a stable kebab-case identifier (e.g. `lastname-firstinitial`), populates `conflicts_of_interest:` with any disclosures the reviewer names. The rest of the slot structure stays as-is.
2. Karen creates `data/peer-review/<slug>.jsonl` (empty file is fine; first review event populates it).
3. On the next prebuild (or any push to main), the synthesis page footer for the pages in `invited_for:` updates from placeholder to active-but-pending.
4. When the reviewer returns a verdict for a specific page, Karen (or Codex / Claude in a separate session) appends one JSON object to the JSONL file. Schema:

```json
{
  "reviewer": "lastname-firstinitial",
  "page_slug": "synthesis/organic-certification-not-protective",
  "verdict": "endorsed",
  "review_date": "2026-06-10",
  "notes": "Reviewed the contributing sources. The synthesis claim is well-supported; the dissenting source flagged in the page's frontmatter is the correct dissent to name. One small caveat — see comment on the cocoa carve-out — but the headline finding is sound.",
  "conflicts_declared": [],
  "page_sha256_at_review": "a1b2c3..."
}
```

The page_sha256_at_review field is the cryptographic anchor that says "I reviewed THIS version of the page". Future edits don't invalidate the prior review; they just clarify which version the verdict applies to.

5. The next prebuild renders the verdict on the synthesis page. Done — the audit signal is live.

## What this is not

- Not a replacement for journal peer-review. Synthesis pages that graduate to the *Journal of Food Metallomics* will go through the journal's own peer-review separately; the Index's footer is the public living-review surface, the JFM submission is the static-snapshot scholarly publication.
- Not gatekeeping. A "contested" verdict does not retract the synthesis claim; it flags that a named expert disputes part of it. Both the claim and the dispute are part of the public record.
- Not anonymous. Every verdict is signed by a named reviewer with credentials and disclosed conflicts. Anonymous reviewer suggestions get forwarded through the same channel but are not added to the log.

## Open questions for Karen

These are the calls only Karen can make. Listed here so they're visible rather than rolling into the wiki silently.

1. **Honorary curator board?** Would it strengthen the defensibility argument to invite 2–3 senior figures as honorary editorial-board members (no per-page review obligation, just lending credibility and being named publicly)? Names like recent CONTAM panel chairs or former JECFA secretariat members come to mind. Higher-touch invitation, more strategic.
2. **Compensation?** The draft invitation says "the Index does not pay reviewers". Is that the right posture or would a modest honorarium (per-review or annual) make it easier to secure the first reviewers? Honorarium logged transparently in the COI section is one path; pure unpaid is the Cochrane model.
3. **Initial scope.** The draft Phase-1 plan starts with two reviewers covering ~3 synthesis pages each. Karen may have stronger relationships in one of the other domains (fisheries, climate, cocoa) and want to start there instead.
4. **Reviewer slug format.** Suggested `lastname-firstinitial` (e.g. `pendergrass-k`). Alternative: full first-last (e.g. `karen-pendergrass`). Whichever — pick one and document in `data/peer-review/_README.md`.

## TL;DR for the morning

- 6 reviewer slots scaffolded in `wiki/curators.md`, each scoped to a specific domain and named synthesis pages
- Sample invitation drafted above
- The system works the moment you replace one `[PENDING INVITATION — ...]` with a real name and drop an empty JSONL file
- Phase 1 (two reviewers) is enough to unlock the audit signal
