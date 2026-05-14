# Part 2, The HMTc Program

## 2.0 Program Flow Diagram

A brand legal team or QA reader who has finished Part 1 understands why the program exists. Part 2 specifies what the program *is*: the operational constitution of HMTc. Before the operational chapters that follow, this single-page diagram shows how a brand and a SKU move through the program from inquiry to ratchet review. The numbered nodes correspond to chapters in Part 2 where each phase is specified.

---

## Lifecycle

```
                ┌─────────────────────────────────────────────┐
                │  Brand inquiry → license agreement signed   │
                └────────────────┬────────────────────────────┘
                                 │
                                 ▼
        ┌───────────────────────────────────────────────────────────┐
        │  Three-Lot Baseline Testing (§2.3, Part 4 §4)             │
        │  • Full 10-analyte panel on 3 distinct production lots    │
        │  • Composite sampling + chain-of-custody                  │
        │  • Speciation per Tier 1 rules (iAs for rice, MeHg fish)  │
        └─────────────────────────────┬─────────────────────────────┘
                                      │
                                      ▼
                ┌──────────────────────────────────────┐
                │  Initial Status Assignment (§2.3)    │
                └──┬──────────────┬──────────────┬─────┘
                   │              │              │
                   ▼              ▼              ▼
           ┌─────────────┐  ┌─────────────┐  ┌────────────────────────────┐
           │  Status A   │  │  Status B   │  │  Status C / Not Eligible   │
           │  Full       │  │  Transit.   │  │  Probation or Confidential │
           │  compliance │  │  Tier 2     │  │  Remediation Track (§2.4)  │
           └──────┬──────┘  └──────┬──────┘  └──────────────┬─────────────┘
                  │                │                        │
                  ▼                ▼                        ▼
        ┌──────────────────────────────────────────────────────────┐
        │  Routine Surveillance (Part 4 §5–7)                      │
        │  • Testing frequency by Status × Risk Tier               │
        │  • Independent sampling per schedule                     │
        │  • Hold-and-release rules per status                     │
        │  • Trend monitoring at 80% PoL internal warning          │
        └──────────────────────┬───────────────────────────────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
        ┌───────────────┐         ┌─────────────────────────────────┐
        │ Reflex events │         │ CAPA triggered (§2.8)           │
        │ (Part 4 §8)   │         │ • Root-cause analysis           │
        │ • Ingredient  │         │ • Corrective + preventive       │
        │ • Water       │         │ • Verification of Effectiveness │
        │ • Equipment   │         └──────────────┬──────────────────┘
        │ • Packaging   │                        │
        │ • Process     │                        ▼
        │ • Supplier    │              ┌─────────────────────┐
        │   alert       │              │ CAPA closure        │
        └───────┬───────┘              │ + supplier intel    │
                │                      │ shared (§2.9)       │
                │                      └──────────┬──────────┘
                └──────────────────────────────────┘
                               │
                               ▼
        ┌──────────────────────────────────────────────────────────┐
        │  Annual Standards Review (§2.10)                         │
        │  • 80th-percentile of certified Status A results checked │
        │  • Breadth threshold (≥50% of SKUs ≤60% PoL) checked     │
        │  • Forward forecast published                            │
        └──────────────────────┬───────────────────────────────────┘
                               │
                  ┌────────────┴────────────┐
                  │                         │
                  ▼                         ▼
       ┌─────────────────────┐   ┌────────────────────────────────┐
       │ Trigger NOT fired:  │   │ Trigger fired (2 consec yrs):  │
       │ Current limits      │   │ • New limit = max(P80, 80% old)│
       │ remain in force     │   │ • 20% step cap applied         │
       │ Forecast updated    │   │ • 12-18 mo transition          │
       └─────────────────────┘   │ • Grandfathering applies       │
                                 └────────────────────────────────┘
```

---

The diagram is the operational map for the rest of Part 2. Brand legal readers can return to it as a reference; each chapter that follows specifies one or more of the nodes shown above. The first operational chapter, Part 2.1, establishes the Program's purpose and core principles. The Confidential Remediation Track for brands whose baseline does not yet qualify for Status A or B is specified in Part 2.4.
