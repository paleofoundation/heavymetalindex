# 2.7 Data Governance and Integrity

## Narrative

A certification program's credibility ultimately rests on the integrity of its data. The Standards Ratchet (Part 2.10) operates on aggregated lot-testing results across all participating brands; the supplier-intelligence system (Part 2.9) operates on root-cause findings shared across the program; the legal defensibility argument (Parts 1.3, 2.4) rests on a documented improvement record that withstands discovery. Each of these depends on data being structured, auditable, and resistant to manipulation.

Data integrity is therefore not a procedural concern but a structural condition of the program. Falsification, manipulation, selective omission, or unauthorized alteration of test data is a hard-stop violation. This chapter specifies the data-governance regime that operationalizes the program's integrity requirements.

## 8.1 Structured Data Requirement

Brands must permit the Program Operator, in writing, to access the data from their laboratory tests. **Submission of results as PDF documents is not permitted.** All test data must be provided in a structured, machine-readable format that enables trend analysis, statistical evaluation, and population-level aggregation. The specific format requirements are defined by the Program Operator and communicated to all Licensees.

This requirement exists because the Program's ability to demonstrate aggregate improvement over time, which is both the strongest legal defense for individual brands and the strongest proof that the Program achieves its public-health objectives, depends on structured, queryable data. Static PDFs cannot be aggregated, cannot be trend-analyzed, and cannot feed the ratchet trigger. The structured-data requirement is the architectural precondition for the Standards Ratchet to function.

## 8.2 Data Integrity as a Hard-Stop Condition

Falsification, manipulation, selective omission, or unauthorized alteration of test data is a hard-stop violation that triggers immediate suspension (Status D) and likely revocation (Status E). Data integrity violations include but are not limited to:

- Submitting falsified laboratory results.
- Failing to report required test results.
- Using non-accredited laboratories without authorization.
- Breaking chain-of-custody without documentation.
- Undisclosed retesting or lab-shopping (per the no-testing-into-compliance rule in Part 2.6).

The Program Operator will audit data integrity as part of routine oversight and may require random verification testing at designated laboratories.

The consequence calibration is intentional. Status D suspension is reserved for cases where remediation may eventually restore certification; Status E revocation terminates the license agreement and bars re-entry except by full re-application at the Program Operator's discretion. Data integrity violations are treated at the Status D-to-E severity level because, unlike contamination events that may reflect supply-chain or process variability, integrity violations reflect a deliberate choice by the brand to subvert the program's evidence record. The program cannot defend a certification mark whose evidence base is corrupted by participant falsification.

## 8.3 Laboratory Requirements

All testing used for certification decisions must be performed by laboratories accredited to ISO/IEC 17025 [33] for the relevant analytical methods and food matrices. Analytical methods must be fit for purpose, meaning they can reliably quantify target heavy metals at concentrations at or below the applicable HMTc category limits. The laboratory's Limit of Quantitation (LOQ) for each analyte must be at or below the HMTc action level. If an LOQ exceeds the Program limit, a non-detect result is not acceptable proof of compliance.

Laboratories that the Program Operator has reason to question, based on proficiency-test performance, audit findings, or pattern analysis of results across participating brands, may be removed from the list of Program-acceptable laboratories. Licensees using removed laboratories must transition to a Program-acceptable laboratory before their next surveillance cycle. The Program Operator maintains the current list of acceptable laboratories under document control.

## Cross-references

- Decision rules under measurement uncertainty (MU reporting requirements): Part 2.6.
- Chain-of-custody requirements: Part 4 §10.
- Anti-arbitrage rules (related to data presentation manipulation): Part 2.5.
- Standards Ratchet (depends on structured data): Part 2.10.
- Supplier intelligence sharing (depends on structured CAPA root-cause data): Part 2.9.
