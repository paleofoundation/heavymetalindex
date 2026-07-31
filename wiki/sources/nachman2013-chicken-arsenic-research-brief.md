---
type: source
raw_handle: MFK_arsenic-in-chicken-meat-research-brief
cite_key: nachman2013-chicken-arsenic-research-brief
title: "Arsenic in Chicken Meat"
authors: ["Keeve E. Nachman", "Patrick A. Baron", "Georg Raber", "Kevin A. Francesconi", "Ana Navas-Acien", "David C. Love"]
year: 2013
publication: "Johns Hopkins Center for a Livable Future research brief"
source_type: research_brief
doi: null
no_doi_assigned: true
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_may31_cat11_meat_poultry_eggs/cat11_meat_poultry_eggs/Arsenic in Chicken Meat - Research Brief.pdf"
raw_sha256: "4c00d9f91b611952cbe3b4830341a34ea47c57ebdbe34f9779fd219ff635965a"
access_url: "http://ehp.niehs.nih.gov/1206245/"
metals: [iAs, tAs]
ingredients: ["[[ingredients/chicken]]", "[[ingredients/poultry]]", "[[ingredients/meat-and-poultry]]"]
products: ["[[products/poultry-product]]"]
matrices: [chicken-meat, chicken-breast, poultry-meat]
jurisdictions: [US]
near_duplicates: ["lasky2013-arsenic-chicken-correspondence", "10.1289/ehp.1206245"]
sample_n: 142
sample_population: "One hundred forty-two chicken breast samples purchased from 82 stores in 10 US cities, representing 60 unique brands; the brief groups samples as 69 conventional, 36 conventional but antibiotic-free, and 37 USDA Organic. Brand names are omitted from this source page."
updated: 2026-06-09
---

# Nachman et al. 2013 - Chicken arsenic research brief

This Johns Hopkins Center for a Livable Future brief summarizes the Nachman et al. Environmental Health Perspectives study of arsenic species in US chicken meat. It reports a compact occurrence signal for inorganic arsenic in chicken likely raised with roxarsone and describes the underlying market-basket sampling frame. Because the local PDF is a two-page research brief rather than the full peer-reviewed article, this page treats the source as B-tier secondary evidence and flags the full article DOI as a near-duplicate to avoid double counting if the primary paper is later fetched.

## Key numbers

- Sample frame: the brief reports `142` chicken breast samples from `82` stores in `10` US cities, representing `60` unique chicken brands. It groups the samples as `69` conventional, `36` conventional but antibiotic-free, and `37` USDA Organic.
- Inorganic arsenic: the brief reports that chicken likely raised with roxarsone had inorganic arsenic `2.3 micrograms per kilogram of meat`, described as elevated compared with USDA Organic chicken samples. The brief does not print a USDA Organic comparator value.
- Roxarsone detection: the brief reports roxarsone in `45 percent` of tested conventionally grown chicken samples and reports that roxarsone was not detected in the `37` USDA Organic chickens.
- Raw/cooked split: the brief states that half of each chicken breast was tested after cooking and the other half was left raw. It reports that cooking chicken that tested positive for roxarsone decreased roxarsone levels but increased inorganic arsenic in the meat; it does not print the cooked/raw numerical concentrations in the extracted text.
- Analytical scope: the brief states that the University of Graz analyzed each sample for total arsenic, roxarsone, inorganic arsenic, and methylated arsenic species.

## Methods (brief)

The brief describes a US market-basket study of chicken breasts purchased in Seattle, San Francisco, Los Angeles, Flagstaff, Denver, Fayetteville, Austin, Atlanta, Baltimore, New York, and nearby stores in those markets as shown on the brief's map. Each breast was split into raw and cooked portions before arsenic speciation analysis. The local brief does not provide the complete analytical method, LOD/LOQ, or full distribution tables; those details belong to the primary EHP article linked by the source as abstract `1206245`.

## Implications

Certification (HMTc): This source contributes B-tier secondary occurrence context for inorganic arsenic in US chicken meat, with the sample frame and the single reported `2.3 micrograms per kilogram of meat` iAs value preserved exactly. The full Nachman et al. 2013 article should be preferred for any future pooled occurrence extraction.

Courses: The brief is useful for teaching the difference between total arsenic, inorganic arsenic, methylated arsenic species, and an arsenical feed drug residue in the same poultry matrix.

App: The source can support chicken/poultry arsenic-speciation context, especially as a pointer to the full EHP market-basket paper.

## Wiki pages this source may touch

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[ingredients/chicken]]
- [[ingredients/poultry]]
- [[ingredients/meat-and-poultry]]
- [[products/poultry-product]]

## Verification notes

- PDF text was extracted with `pdftotext -layout` to `/tmp/mfk_june8_570.txt`; the title block, Key Findings, Research Summary, map labels, and full-title/abstract-link footer were checked against this page.
- The extracted brief does not print a DOI. DOI `10.1289/ehp.1206245` was checked because it is the primary EHP article linked by abstract identifier `1206245`; no source page for that primary article was found. Existing `wiki/sources/lasky2013-arsenic-chicken-correspondence.md` is a separate correspondence page and was recorded as a near-duplicate context page, not a duplicate of this brief.
- Units are copied exactly as printed: `2.3 micrograms per kilogram of meat`. The brief does not state wet/dry basis beyond "meat," so no basis was inferred or converted.
- Speciation: the reported numeric occurrence value is inorganic arsenic. The brief also says total arsenic and methylated arsenic species were analyzed, but it does not print total arsenic concentration values in the extracted text.
- Brand firewall: the brief states that the sample represented `60` unique chicken brands. This source page omits brand names and reports only category/production-group data.
- Frontmatter slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; `chicken-meat` and `chicken-breast` are matrix descriptors rather than product or ingredient slugs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [c074f53e0](https://github.com/paleofoundation/heavymetalindex/commit/c074f53e0) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
