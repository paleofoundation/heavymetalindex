# Outstanding regulatory documents to pull

Status as of 2026-08-04. Registry: **14/16 verified**. Derived from the registry,
the live evidence table (`data/evidence/regulatory_limits.csv`, 250 rows), and the
2026-08-04 primary-source validation.

Priority is by risk to the standards, not by convenience.

---

## Tier 1 — Deadline-driven or value-affecting

### 1. China GB 2762-2025 — **supersedes GB 2762-2022 on 2026-09-02**
Roughly four weeks out. China contributes **20 rows (15 infant)** to the live table
and is the **sole source** for chromium in formula. When it supersedes, any changed
value silently invalidates those rows.
*Held:* GB 2762-2022 (MAST + MAPAMA English translations), USDA GAIN CH2025-0202.
*Need:* the GB 2762-2025 text (or a reputable English translation) before the
effective date. GB standards are often sold; the USDA GAIN report is the fallback.

### 2. Brazil IN 160/2022 and IN 351/2025 — the actual numeric-limit instruments
**Suspected live defect.** The live table carries Brazil cereal-based infant foods
Pb = **50 µg/kg**. A secondary source indicates **IN 351/2025 cut this to 20 µg/kg**
(0.05 → 0.02 mg/kg). If correct, our value is **2.5× too permissive** on lead in a
Tier-1 category. This has not been confirmed against primary text.
*Held:* RDC 722/2022 (framework text only), IN 88/2021 (English metals tables).
*Need:* IN 160/2022 Anexo I and IN 351/2025 primary text (in.gov.br / DOU).
Brazil contributes **25 infant rows** — the third-largest infant source.

### 3. EU 2023/915 consolidated, including Reg 2024/1987 (nickel) and 2024/1756
The EU is the largest evidence source (**102 rows, 25 infant**). We hold only the
**as-adopted 2023 OJ text** (via the BCZ-CBL mirror); the nickel limits and later
corrections came from 2024 amendments.
*Need:* the current consolidated text. EUR-Lex 202-blocks automated PDF generation —
one browser click gets it.

---

## Tier 2 — Single-jurisdiction dependencies (defensibility thinness)

These are not missing documents so much as **thin evidence**: the standard for the
analyte rests on one country. A single-source limit is the easiest thing for an
opposing expert to attack.

| Analyte | Sole source in the live table | Exposure |
|---|---|---|
| **Aluminium** | AU-NZ only (500 infant formula / 1000 soy) | whole Al standard rests on FSANZ |
| **Chromium** | China only (2000 milk powder / 300 liquid) | and China's text supersedes in 4 weeks |
| **Mercury** | no government ML for formula anywhere checked | `tHg` pick is `null` |

*Action:* either find additional jurisdictions setting these for infant formula, or
document the single-source/absent status explicitly as the rationale. Mercury in
particular needs a stated basis (not-material or occurrence-driven), since no
regulator sets one.

---

## Tier 3 — Provenance gaps (values in use, no source document tracked)

These jurisdictions have rows in the live evidence table but **no registry entry**,
so no source document is traceable. 13 rows total.

| Code | Rows | Infant rows | Note |
|---|---|---|---|
| MX (Mexico) | 9 | 0 | largest untracked block |
| EC (Ecuador) | 1 | 0 | |
| TR (Turkey) | 1 | 0 | |
| US-WA | 1 | 0 | state-level |
| US-CA | 1 | 0 | Cr-VI drinking water — not a food ML |
| "international" | 1 | 0 | unattributed |

None affect Category 1 (all have zero infant rows), but every one is a
"where did this number come from?" exposure in any other category that uses them.
*Action:* create registry entries with source documents, or retire the rows.

---

## Tier 4 — Documents held but evidence not compiled

- **Switzerland VHK (SR 817.022.15)** — we now hold the 2026 text plus the Annex 3
  metals extract, but Switzerland has **0 rows** in the live table. Compiling it adds
  a genuine independent jurisdiction (Swiss Cd formula ≈ 0.010/0.005).
- **Korea Food Code, Article 3** (infant-specific chapter) — never located. Korea has
  only **3 rows** versus China's 20, so Korea is almost certainly under-represented.
  Article 2 (general heavy metals) is confirmed; the infant chapter is not.
- **Japan** — appears to be a genuine *structural* absence (no consolidated
  heavy-metal MRL table for infant formula; Notification 370 moved to the Consumer
  Affairs Agency in 2024). Needs confirming as a documented absence, not a gap.

---

## Tier 5 — Beyond Category 1

The registry is **infant/child-focused**. The program spans 35 categories; manuals
exist for Cat 1 / 6 / 24 / 30 / 34. Every other category needs its own instrument
sweep — the horizontal standards already in the registry (Codex, EU, GB 2762,
FSANZ, FSSAI, ANVISA, GSO) cover all foods and carry over, but category-specific
instruments (seafood MeHg, spice lead, cosmetics, pet food, supplements) do not.

---

## Not gaps — schema artifacts

Two registry entries read as "unverified" but are not missing documents:

- **Health Canada contaminants list** — published only as a live HTML page; no static
  PDF exists. Values confirmed by direct read (Pb infant formula 0.01 ppm; iAs
  rice-based infant foods 0.1 ppm).
- **FDA Closer to Zero action plan** — an umbrella program page, not a limit
  instrument. The actual action levels are in two separate, verified guidances.

*Fix:* add an `evidence_basis` field (`primary-pdf` / `primary-html-confirmed` /
`secondary-summary` / `purchase-required`) so the registry distinguishes "we could
not confirm this" from "this instrument has no PDF to confirm."

---

## Handling note — licensed documents

**GSO 193:2021** is a copyright-protected licensed copy (Order No. GSO#23.3006)
stating that copying and networking are prohibited. It lives in the private corpus
only (`raw/` is gitignored). It must never be committed, republished, or have its
tables reproduced in the public wiki. Only the factual limit values inform the
standards, with citation. Any future purchased standard inherits the same handling.
