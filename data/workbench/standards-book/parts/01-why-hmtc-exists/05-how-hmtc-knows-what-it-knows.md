# 1.5 How HMTc Knows What It Knows: heavymetalindex.com

Before this manual specifies a single concentration limit, the reader is owed an answer to the question: where do the numbers come from? Not in general terms — *literature, regulatory authorities, peer-reviewed studies* — but specifically. The 10 ppb lead limit for infant formula powder. The 100 ppb inorganic arsenic action level for infant rice cereal. The methylmercury read-across for non-fish matrices. Where, exactly, is the evidence for each of these, and can an adversarial reader audit it without taking the certifier's word?

The answer is heavymetalindex.com.

## The architectural separation

The Paleo Foundation operates two architecturally separate properties. The certification program — HMTc — lives at heavymetaltested.com. The literature evidence base — Heavy Metal Index, hereafter HMI — lives at heavymetalindex.com. These are separate properties by design, and the separation is structural rather than cosmetic.

HMI is the public, curated wiki of the heavy-metals-in-food literature. It contains source pages for peer-reviewed studies, agency reports (FDA, EFSA, JECFA, EPA, Codex, ATSDR), industry surveillance data, and primary regulatory documents. Each source page summarizes a single document's findings, preserves its numeric claims with full provenance, and links to ingredient pages, metal pages, product-category pages, and regulation pages. The corpus is structured so that a reader can begin with any single concentration claim on any product page and follow the references back through the routing layer to the original source documents.

HMTc references HMI for the literature baseline that informs every certification standard. The reference is **one-way**: HMTc cites HMI; HMI does not endorse HMTc, does not contain percentile arithmetic, does not name HMTc-certified brands, and does not advocate for the certification program. The wiki/HMTc firewall is operative policy, documented in the project's foundational CLAUDE.md governance document and enforced by the program's lint infrastructure. The wiki is the public literature evidence layer; the staff Standards Workbench (and the `data/workbench/` directory) carries the threshold math.

This separation is what gives the standards their authority.

## Why the separation matters

A certifying body that operates its own evidence base has a structural conflict of interest: the body that decides what the literature supports is also the body that decides what to certify. An adversarial reader can attack the evidence base on the grounds that it was selected to justify a pre-determined commercial position. Single-source certifiers — programs where the evidence and the certification live in the same property under the same control — cannot fully defend against this attack because the conflict is real.

The HMI/HMTc separation defeats this attack. HMI is a curated literature wiki published as a public resource. It exists whether HMTc does or does not exist. It will continue to exist when the methodology in this manual is replaced by a future revision. It contains studies whose findings make HMTc thresholds look conservative and studies whose findings make HMTc thresholds look aggressive. It does not adjust its evidence to fit the certification program. The Paleo Foundation operates HMI as a public-good resource because curating the complete literature is the only durable foundation for any defensible standards program built on top.

This is the **Cochrane-for-heavy-metals** positioning. Cochrane systematic reviews are the gold standard in medicine for a single reason: they aggregate the complete relevant literature, not selected papers, and they publish their methodology so that any reviewer can verify their conclusions. HMI is structured on the same principle. Aggregating the complete literature, not selected papers, is what produces durable epistemic authority — and durable epistemic authority is what allows the standards program built on top to withstand adversarial scrutiny.

## Provenance: how a limit in this manual traces to the corpus

Every concentration limit in Part 3 of this manual was derived from a pooled distribution of source pages on HMI for the relevant product-by-metal cell. The pooling math (the per-analyte percentile calculations, the source-level bootstrap, the sensitivity-band analysis) lives workbench-side, per the firewall. But the **inputs** to the pooling — the source pages contributing to each cell — are public.

A reader who wants to audit a specific HMTc limit follows this path:

1. **Locate the product chapter** in Part 3 of this manual. The Master Limit Table gives the HMTc limit, the applicable regulatory cap, and the basis note for each of the ten priority analytes.
2. **Read the chapter's Sources Cited section.** Each citation resolves to a source page on heavymetalindex.com.
3. **Read the source page.** Each source page summarizes the underlying document's findings with concentrations, sample sizes, methods, and basis (as-sold, as-consumed, dry weight). The source page links to the original document where available.
4. **For the routing layer**, the corpus also maintains a structured routing audit at `data/evidence/product_source_routing_audit.csv` that maps every source to every product-category, ingredient, metal, and regulation page it touches. Adversarial readers who suspect a source has been omitted from a cell can check the routing audit directly.
5. **For the pooled distribution itself**, qualified reviewers — regulators with formal inquiries, plaintiff's experts requesting access through counsel, sampling auditors verifying program operation — may request the workbench-side aggregate distribution data under controlled terms. The pooling engine is proprietary; the pool composition is not.

This design preserves the wiki/HMTc firewall (the engine arithmetic stays workbench-side, where it cannot be reverse-engineered by competing certifiers) while making the evidence inputs auditable (every limit traces to public source pages on HMI).

The failure mode this design prevents is the "we set this limit because we said so" attack. HMTc cannot make that argument because the source attribution is public. An adversarial reader who believes a limit is too tight can find the source pages that drove it; an adversarial reader who believes a limit is too loose can find the source pages that justified the floor. The argument moves from *whether the certifier is biased* to *what the literature supports*, which is the right level for the argument to occur.

## What the corpus contains, in scope and structure

HMI's scope is deliberately broad: heavy-metals-in-food literature globally, across all product categories, in all jurisdictions, across regulatory and peer-reviewed sources. The corpus uses three structural layers.

The **source layer** (`wiki/sources/`) is one page per source document, with frontmatter recording the document's identifiers (DOI, raw filesystem handle, cite-key), evidence tier (A for peer-reviewed primary studies and government reports; B for industry white papers and NGO reports; C for news articles and press releases), and routing metadata (which products, ingredients, metals, and jurisdictions the source covers). Every numeric claim in the corpus traces to a source page; the corpus does not contain values not anchored to a source.

The **substrate layer** (`wiki/metals/`, `wiki/ingredients/`, `wiki/products/`, `wiki/regulations/`, `wiki/testing/`, `wiki/health/`, `wiki/microbiome/`) is one page per substantive subject. Metal pages summarize toxicology, exposure routes, regulatory limits, testing methods, and microbiome effects for each of the ten priority analytes and several others. Ingredient pages carry the structured `contamination_profile` block (typical and 95th-percentile concentrations, sample counts, geographic and seasonal variance, regulatory limits) for every commodity in scope. Product-category pages aggregate evidence at the consumer-product level. Regulation pages document each operative rule with exact limit values, units, and effective dates from the original agency source.

The **routing layer** (`data/evidence/product_source_routing_audit.csv`) is the mapping from each source to every page it should appear on. It is regenerated automatically when source pages change. The routing audit's transparency is what guarantees that no source has been silently omitted from a cell.

The corpus also maintains an evidence register (`data/evidence/`) of structured concentration values, regulatory facts, and review events. Bulk ingest of the literature is ongoing; the corpus today is sufficient to support Category 1 (infant and child foods) certification standards, with Category 2 (children's personal care) and additional categories expanding under continuous ingest.

## What this means for adversarial readers

A reader looking to attack an HMTc limit has three structural choices:

1. **Attack the source page.** If the reader believes a specific source has been misread or misrepresented in the corpus, they can compare the source page on HMI to the original document and identify the discrepancy. The Paleo Foundation maintains a public correction process for source-page errors.

2. **Attack a routing decision.** If the reader believes a relevant source has been omitted from a product-by-metal cell (or that an irrelevant source has been included), they can check the routing audit and the source's frontmatter. Routing decisions are deterministic and reproducible from the source pages' metadata.

3. **Attack the methodology.** If the reader believes the per-analyte percentile selection, the pooling math, or the regulatory-cap interaction produces an indefensible result, the methodology in Part 5.1 and the Governing Principles supersede this argument. The methodology is described in this manual; the engine arithmetic is workbench-side but the design is auditable.

What the reader cannot do is argue that HMTc invented its evidence base. The corpus exists publicly. Anyone can verify any source page.

## What this means for brand legal teams

A brand legal team reading this chapter understands that HMTc standards are not opaque. They are calibrated against a public corpus that the brand's own technical experts can review. A brand contemplating certification can ask its toxicology consultant to read the HMI source pages for the relevant product category and confirm that the corpus reflects the state of the literature as the consultant understands it. If the consultant finds gaps, the gaps are flagged through the same public correction process available to any reader.

This is part of what HMTc certification buys for the brand: not just a mark, but **a defensible evidence trail to the certifier's standards-setting methodology**. When a plaintiff's expert in a future deposition asks "why did you trust the HMTc standards?" the brand's answer is "because the evidence base is public, our toxicology team verified it, and the methodology is documented." That answer is much stronger than the answer available to a brand operating against internal standards or marketing-program certifications.

## What this means for regulators

A regulator reading this chapter understands that HMTc operates with public evidence in a way that complements rather than substitutes for federal regulatory action. The HMI corpus is available to FDA, EFSA, state attorneys general, and any other regulatory body that wants to audit how a specific HMTc standard was derived. The structured routing audit allows targeted regulatory inquiries: a reviewer who asks "what does HMI's evidence base say about cadmium in cocoa from Ecuador?" can pull the ingredient page's geographic-variance block and the contributing source pages directly. This is the kind of structured, machine-readable data that the National Academies' 2011 report on targeted transparency identified as the precondition for productive regulatory engagement with industry self-regulation.

## What this means for the rest of this manual

The reader has now encountered the program's foundational claim: every numeric assertion in Part 3 traces to a public corpus that any adversarial reviewer can audit. With that claim established, the operational specification of the program in Part 2, the per-product standards in Part 3, and the testing schedule in Part 4 can be read against the right backdrop. The engine arithmetic that produces each specific limit lives workbench-side; the inputs to that arithmetic are public. The methodology that the engine implements is documented in Part 5.1. The adversarial-read chapter in Part 5.2 enumerates the categories of attack that the program anticipates and answers them on the merits.

This concludes Part 1. The reader who has read all five chapters now understands:

- Why the program exists (the existing enforcement environment fails structurally);
- What the cost of inaction is (large enough that certification is a rational investment under conservative probability assumptions);
- What the program's design principles are (staged compliance, risk-tiered metal classification, exposure-based testing, measurement-uncertainty decision rules, confidential remediation, ratcheting standards, supplier intelligence);
- And where the evidence base lives (heavymetalindex.com, a public curated corpus architecturally separate from the certification program).

The next chapter — Part 2.0 Program Flow Diagram — opens Part 2 with a single-page visualization of the certification lifecycle before the operational chapters specify the program in detail.
