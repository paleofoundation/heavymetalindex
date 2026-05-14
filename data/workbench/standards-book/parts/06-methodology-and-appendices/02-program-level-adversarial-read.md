# 5.2 Program-Level Adversarial Read

This chapter is the program's structured response to the categories of attack that adversarial readers — plaintiff's experts, hostile regulatory reviewers, competing standards bodies — are most likely to advance against HMTc as a whole. Per-product adversarial reads appear in each Part 3 chapter; this chapter addresses program-level attacks that do not sit in any single product's chapter and that need to be answered at the methodology and governance level.

The chapter is **provisional** in this v0-pre-audit edition. The final version of this chapter is written after Pre-work 6 — the adversarial audit of the drafted manual — is complete. Pre-work 6 attacks the drafted manual as a plaintiff's expert and a hostile FDA reviewer would, locates each attack's response in the manual, identifies gaps, and proposes strengthenings. The audit's structured output then becomes the input to the final version of this chapter. In other words: this chapter writes itself from the audit findings.

In the v0-pre-audit edition, this chapter previews the attack categories that the audit will address and signals to readers that the audit and the final chapter version are scheduled in the program's build sequence.

## Attack categories the audit will enumerate

The Pre-work 6 audit attacks the manual across at least the following categories. Each category corresponds to one or more attack vectors that, in adversarial settings, are likely to be advanced against the program.

### Methodology underspecification

Are the percentile values defined precisely enough that an independent analyst could replicate the calibration from the manual alone? Are the pool admission rules, the basis conversion factors, and the regulatory-cap interaction unambiguous? Where the manual references workbench-side engine arithmetic (under the wiki/HMTc firewall), is the cited principle sufficient to defend the methodology, or does the firewall obscure the reasoning?

### Toxicological anchor gaps

Every Tier 1 / Tier 2 classification in Part 2.2 must trace to a specific cited authority. Where the classification traces only to HMTc's own analysis, that is a gap. The audit verifies that every toxicological claim in the manual (the BMDL01 figures, the TWI references, the carcinogenicity classifications, the bioaccumulation half-lives) cites an authoritative source page on heavymetalindex.com that, in turn, cites the underlying agency or peer-reviewed document.

### Chain-of-custody language

Does the Lot Testing Schedule's chain-of-custody section (Part 4 §10) survive cross-examination by a defense expert questioning sample integrity? Specifically: are the documented requirements (personnel identification, collection records, sealing and labeling, laboratory receipt confirmation) consistent with ISO/IEC 17025 expectations and with common-law evidentiary standards for analytical results?

### Ratchet gaming

With the §12 specification in Part 2.10, are there remaining ways a brand or coalition could game the ratchet? Specifically: could a dominant brand withhold its best-performing SKUs from Status A reporting to keep the trigger percentile up? Could a brand exit and re-enter to reset its grandfathering status? Could the breadth-condition be defeated by SKU consolidation? The audit examines each gaming pathway and documents the program's response.

### Conflict-of-interest framings

The Standards Architect is also CEO of the Paleo Foundation. The dual role is disclosed in the Edition page (Part of front matter), the Colophon (Part 5.7), and the conflict-of-interest provisions of Part 2.12. Is the disclosure sufficient against a plaintiff's expert attack on bias? The audit examines whether the disclosure is appropriately prominent, whether the operational separation between Standards Architect responsibilities and CEO responsibilities is documented, and whether the program's appeals process (Part 2.12) is structurally independent from CEO authority.

### Definitional holes

Does every term used in the manual appear in the glossary (Part 5.3)? Does every glossary entry trace to a recognized authority where one exists (ISO/IEC 17025 for analytical-chemistry terms; EFSA, JECFA, FDA for toxicological terms; the Governance Policy for program-operations terms)? Are there terms used inconsistently across the manual that the audit should flag for reconciliation?

### Overclaim risk

Does the manual anywhere claim certification guarantees safety? Per Part 2.5 §6.2, this claim is prohibited; the audit verifies that the manual is consistent with the prohibition and that no chapter slips into language that could be characterized as safety-claiming.

### Citation completeness

Every numeric claim, every regulatory reference, every toxicological framing must cite a specific source with section or page. Where citations are missing or insufficiently specific, the audit flags them. The audit also verifies that cited sources resolve correctly to public heavymetalindex.com source pages and that the source pages, in turn, correctly summarize the underlying documents.

### Heavymetalindex.com evidence base claims

The manual asserts that HMI is a public, curated, peer-reviewable corpus and that every limit traces to source pages. The audit verifies that specific limit-source connections work — that following the chain from Part 3 chapter to source citation to source page to underlying document produces a consistent evidentiary trail.

### Regional adaptability mechanism

Part 2.1 §1.6 asserts that HMTc standards can be regionally recalibrated against region-specific evidence bases. The audit verifies that the mechanism for recalibration is specified (not hand-waved), that the "more stringent of (regional, global)" governance rule is operational, and that adversarial readers cannot characterize regional adaptability as ad-hoc.

### Confidential Remediation Track legal-narrative claim

Part 1.3, Part 1.4, and Part 2.4 advance the claim that brands enrolled in the Track generate a documented improvement record that defends against "knew and did nothing" attacks. The audit verifies that the data governance language in Part 2.7 and the CAPA requirements in Part 2.8 actually deliver the timestamped, third-party-verified improvement record that the legal-narrative claim depends on.

### Standards-ratchet step cap

The 20% per-cycle step cap in Part 2.10 §12.4 is the program's structural protection for participating brands. The audit verifies that the cap is unambiguous, that residual-tightening accounting is specified, and that the cap is consistent with the Governing Principle 3 commitment to protect brands who enter the program.

### Aggregate-exposure framing accuracy

The 7.8 µg/day aggregate-exposure calculation in Part 2.2 is the program's most important framing for brand-legal and regulatory audiences. The audit verifies that the calculation is reproducible, that the underlying single-product concentrations are achievable (i.e., the calculation does not depend on values below the FDA action levels for the relevant products), and that the comparison to the FDA Interim Reference Level is correctly stated.

### Supplier intelligence anonymization

The audit verifies that the anonymization in Part 2.9 is operationally sufficient — that supplier-specific alerts cannot be reverse-engineered to identify the reporting brand through correlated metadata (ingredient category + geographic origin + reporting timeline).

### International / Cyprus operating-base claims

Part 2.1 §1.6 and the Edition page reference the Paleo Foundation's Cyprus operating base and the EU Database Directive protections that flow from it. The audit verifies that these claims are operationally accurate and that the legal-protection framework is documented in the controlled-document registry.

## Output of the audit

The Pre-work 6 audit produces a structured document at `data/workbench/standards-book/adversarial-audit.md` enumerating each attack vector, locating the manual's response by chapter and page, documenting any gaps, and proposing specific strengthenings. The strengthenings are applied to the relevant chapters of the manual; this chapter (Part 5.2) is then rewritten to mirror the audit structure with the program's response on each vector documented in narrative form.

## Why this chapter exists in v0-pre-audit form

A reader of the v0-pre-audit manual should understand that the Program-Level Adversarial Read is structurally important — it is the program's anticipatory answer to the categories of attack that a brand legal team needs to know the program has thought through. The provisional version of this chapter in v0-pre-audit signals to readers that:

- The categories of attack have been enumerated;
- The audit work is scheduled and bounded;
- The final chapter version will be available in the audit-strengthened v0;
- The audit and the final chapter are part of the program's build discipline, not an afterthought.

For a reader who needs the program's adversarial responses before the audit-strengthened v0 ships, the per-product adversarial reads in each Part 3 chapter cover product-specific attacks; the program-level attacks not addressed in any Part 3 chapter are listed above with the audit-scheduling commitment. A brand legal team who needs a specific program-level adversarial response sooner can request it from the Program Operator through the channels documented in the Colophon (Part 5.7).

## Cross-references

- Per-product adversarial reads: each Part 3 chapter.
- Pre-work 6 audit specification: project plan at `/Users/karenpendergrass/.claude/plans/users-karenpendergrass-desktop-hmtc-gov-ticklish-reef.md` (internal).
- Audit output destination: `data/workbench/standards-book/adversarial-audit.md`.
