# 5.7 Colophon

## Edition

**Heavy Metal Tested & Certified (HMTc) Infant and Child Foods Program Manual, 2026 Edition.** First bound publication. The HMTc methodology has evolved through documented revisions since 2024; the current edition reflects refinements to the per-analyte percentile calibration, the addition of the row-pass framework, the operationalization of the Standards Ratchet Mechanism with explicit trigger conditions and step-size caps, and the formalization of the Confidential Remediation Track.

## Author and disclosure

**Karen Pendergrass**, Standards Architect, The Paleo Foundation. ORCID: [pending registration].

Karen Pendergrass is the Standards Architect for the HMTc Program and CEO of The Paleo Foundation. The dual role is disclosed transparently because it is the structurally honest disclosure: the Foundation operates the certification program; the Standards Architect develops the program's methodology; both roles are held by the same person. The operational separation between the two roles is documented in the Foundation's governance bylaws (controlled-document registry). The conflict-of-interest provisions of Part 2.12 §14.4 ensure that certification determinations are made by individuals free from conflicts with the Licensee under review, and the appeals process is structurally independent from CEO authority.

The Program is operated by Paleo Certified, Inc., a Florida corporation doing business as The Paleo Foundation. Corporate governance, financial reporting, and operational continuity are documented in Florida state corporate filings and in the Foundation's controlled-document set.

## Methodology disclosure

The HMTc methodology is described in principle throughout this manual (particularly Part 5.1) and at peer-track depth in three published preprints:

- *The Counterproductive Consequences of Public Exposé Testing.* doi: 10.5281/zenodo.19470572.
- *The Cost of Operating Without Credible Third-Party Heavy-Metal Certification.* doi: 10.5281/zenodo.18903738.
- *Certification as a Framework for Reducing Heavy Metal Exposure in Infant and Child Foods.* doi: 10.5281/zenodo.18905821.

The engine arithmetic that implements the methodology (the source-pooling algorithm, the percentile calculation, the source-level bootstrap, the methodology stability checks, the basis-conversion factors) is held as a trade secret. The principle of standards-setting is public; the implementation is proprietary. This is the wiki/HMTc firewall established by the HMTc Governing Principles (Principle 4) and described in Part 1.5 of this manual.

## Methodology implementation

The deterministic pooling engine and the Standards Briefing generator that produce per-product limit tables and methodology summaries were implemented by Karen Pendergrass with AI assistance from Claude (Anthropic). The engine code is regression-tested for percentile-inversion errors and author-attribution errors per the test suites in `tools/standards/build-standards-briefing.test.mjs`. Pre-publication review of each briefing follows the 9-gate checklist established in the methodology preprint.

This implementation acknowledgment is in the Colophon, not the byline. The byline names the Standards Architect; the implementation methodology is documented here for honest disclosure of tooling used in producing the bound manual.

## Evidence base

Heavymetalindex.com (HMI) is the public curated corpus of the heavy-metals-in-food literature that this Program Manual rests on. HMI is operated by The Paleo Foundation as a property architecturally separate from the HMTc certification program at heavymetaltested.com. Architectural separation and one-way reference (HMTc cites HMI; HMI does not endorse HMTc) establish the evidentiary foundation that the certification program's standards are built on. The corpus is protected under U.S. copyright law and U.S. trade-secret doctrine; a parallel EU corporate structure for HMI is on the roadmap and will add EU Database Directive 96/9/EC sui generis protection once incorporated. See Part 1.5 for the full account.

## Intellectual property

**Trademarks.** "HMTc," "Heavy Metal Tested & Certified," "Heavy Metal Tested and Certified," the HMTc certification seal artwork, and "The Paleo Foundation" are trademarks of The Paleo Foundation. Federal certification mark registration is in process with the United States Patent and Trademark Office under Lanham Act § 1054. Parallel EU trademark filing is in process with the European Union Intellectual Property Office.

**Copyright.** © 2026 The Paleo Foundation. All rights reserved. This manual may be cited in academic, regulatory, and legal contexts using standard citation practice. Direct reproduction of substantial portions requires written permission from The Paleo Foundation. Per-chapter extraction as a licensing exhibit is authorized for executed Licensees per the License Agreement.

**Database rights.** The heavymetalindex.com corpus that this manual references is protected under U.S. copyright law and U.S. trade-secret doctrine. A parallel EU corporate entity for HMI is on the roadmap and will hold EU Database Directive 96/9/EC sui generis protection (15-year term) once incorporated. Substantial extraction or re-utilization of the corpus without authorization is prohibited under either protection regime.

**Trade secret.** The HMTc pooling engine and its associated methodology implementations (source-pooling algorithms, calibration analysis, per-source weighting rules, and related components) are protected as trade secrets under Florida and U.S. federal trade-secret law (Defend Trade Secrets Act, 18 U.S.C. § 1836; Florida Uniform Trade Secrets Act). Authorized disclosure of engine internals occurs only under controlled-terms request to the Program Operator.

## Production credits

**Typesetting and design.** This v0-pre-audit edition is rendered in markdown for review. The audit-strengthened v0 will be typeset using Typst or Quarto evaluated against the full ~135-page document; the typesetting toolchain is selected after content lock. Typefaces (FreightText Pro for display and serif body; Avenir Next Cyr for sans-serif) are licensed for use under standard commercial typeface licenses.

**Build pipeline.** Content lives in markdown under `data/workbench/standards-book/` and is concatenated by `tools/standards/build-program-manual.mjs` (in development). The Program Manual is regenerated by the autonomy daemon whenever the source documents (Governance Policy, Lot Testing Schedule, Governing Principles, or any of the 15 product briefings) change, ensuring the bound manual stays consistent with the current state of the operational documents.

## Contact

The Program Operator can be reached at:

- **Email:** karen@paleofoundation.com
- **Twitter / X:** @MicroMetallomics
- **Program website:** heavymetaltested.com
- **Evidence-base website:** heavymetalindex.com
- **Postal:** Paleo Certified, Inc. dba The Paleo Foundation, 623 Divine Circle, Orlando, Florida 32828, United States

Questions about specific certifications, the licensing process, brand enrollment in the Confidential Remediation Track, methodology audit requests, and regulatory cooperation should be directed to the Program Operator through these channels.

Adversarial reviewers, plaintiff's experts, defense attorneys, journalists, and academic researchers who need program documentation beyond what is reproduced in this manual should also direct inquiries through the same channels; the Program Operator responds to such inquiries on a documented timeline consistent with the Foundation's transparency commitments.

## Version

This is **v0-pre-audit** of the 2026 Edition. The audit-strengthened v0 ships after Pre-work 6 (the adversarial audit of the drafted manual) is complete and the Program-Level Adversarial Read in Part 5.2 is rewritten from the audit findings. The audit-strengthened v0 will be the artifact distributed to early Licensees, regulators, and academic reviewers.

---

*End of Heavy Metal Tested & Certified Infant and Child Foods Program Manual, 2026 Edition.*
