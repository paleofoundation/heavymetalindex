#!/usr/bin/env python3
"""
Build raw/manifest/triage-manifest.csv for the Heavy Metal Index FM corpus.
Processes raw/markdown/FM_XXXXXXX/ folders in batches of 500.

Usage: python3 tools/build-triage-manifest.py
Resume: re-running skips already-processed handles found in the existing CSV.
"""

import csv
import hashlib
import json
import os
import re
import sys
import unicodedata
from collections import Counter
from pathlib import Path

# ── Paths ─────────────────────────────────────────────────────────────────────
MARKDOWN_DIR = Path("raw/markdown")
MANIFEST_DIR = Path("raw/manifest")
SOURCES_DIR  = Path("wiki/sources")
MANIFEST_CSV  = MANIFEST_DIR / "triage-manifest.csv"
PROGRESS_JSON = MANIFEST_DIR / "triage-manifest-progress.json"
REPORT_MD     = MANIFEST_DIR / "manifest-build-report.md"

BATCH_SIZE = 500

# Garbage author/lead tokens — the SINGLE SOURCE OF TRUTH is tools/lib/cite-key-words.json
# (also consumed by tools/lib/cite-key-validity.mjs and the JS ingest gates). When the
# author slot resolves to one of these words it is a section header / analyte / structural
# word the OCR grabbed, not a real surname — reject it and emit an honest "unknown" key so
# the ingest gate routes the paper to repair instead of minting e.g. `abstract2021-...`.
_WORDS_JSON = Path(__file__).resolve().parent / "lib" / "cite-key-words.json"
try:
    _NON_AUTHOR = frozenset(json.loads(_WORDS_JSON.read_text())["garbage_lead_words"])
except Exception:
    _NON_AUTHOR = frozenset(["unknown"])

# Known issuing organizations → defensible author-slot slug, used only when no
# personal surname can be extracted (agency reports: FDA TDS, EFSA opinions,
# ATSDR profiles, WHO/FAO/JECFA monographs, EPA, ECHA, EU/EC, Health Canada).
# Conservative: matched against the extracted publication string, never loose text.
_ORG_SLUGS = [
    (r"\bEuropean Food Safety Authority\b|\bEFSA\b", "efsa"),
    (r"\bFood and Drug Administration\b|\bU\.?S\.? FDA\b|\bFDA\b", "fda"),
    (r"\bAgency for Toxic Substances\b|\bATSDR\b", "atsdr"),
    (r"\bWorld Health Organization\b|\bWHO\b", "who"),
    (r"\bFood and Agriculture Organization\b|\bFAO\b", "fao"),
    (r"\bJECFA\b", "jecfa"),
    (r"\bEnvironmental Protection Agency\b|\bU\.?S\.? EPA\b|\bUSEPA\b", "epa"),
    (r"\bEuropean Chemicals Agency\b|\bECHA\b", "echa"),
    (r"\bEuropean Commission\b|\bEuropean Union\b", "ec"),
    (r"\bHealth Canada\b", "healthcanada"),
    (r"\bConsumer Reports\b", "consumerreports"),
    (r"\bCodex Alimentarius\b", "codex"),
]

CSV_COLUMNS = [
    "raw_handle", "cite_key", "already_ingested", "year", "doi",
    "publication", "first_author", "license", "size_bytes", "sha256",
    "text_mined_metals", "text_mined_ingredients", "text_mined_jurisdictions",
    "priority_tier", "dedup_cluster",
]

# ── Regex patterns ─────────────────────────────────────────────────────────────

# Metals: use exact tokens; word-boundary where safe
_METALS_RE = re.compile(
    r'(?<!\w)(?:'
    r'lead|cadmium|arsenic|mercury|methylmercury|nickel|aluminum|aluminium|chromium|tin|antimony|uranium|'
    r'iAs|tAs|MeHg|tHg|Cr-VI|Cr\(VI\)|'
    r'\bPb\b|\bCd\b|\bAs\b|\bHg\b|\bNi\b|\bAl\b|\bCr\b|\bSn\b|\bSb\b|\bU\b'
    r')(?!\w)',
    re.IGNORECASE,
)
_METAL_CANONICAL = {
    "lead": "Pb", "pb": "Pb",
    "cadmium": "Cd", "cd": "Cd",
    "arsenic": "As", "as": "As", "ias": "iAs", "tas": "tAs",
    "mercury": "tHg", "hg": "tHg", "methylmercury": "MeHg", "mehg": "MeHg", "thg": "tHg",
    "nickel": "Ni", "ni": "Ni",
    "aluminum": "Al", "aluminium": "Al", "al": "Al",
    "chromium": "Cr", "cr": "Cr", "cr-vi": "Cr-VI", "cr(vi)": "Cr-VI",
    "tin": "Sn", "sn": "Sn",
    "antimony": "Sb", "sb": "Sb",
    "uranium": "U", "u": "U",
}

_INGREDIENT_KEYWORDS = [
    "infant formula", "baby food", "breast milk", "human milk", "rice cereal",
    "rice flour", "brown rice", "white rice", "rice bran", "rice syrup",
    "cocoa", "chocolate", "spinach", "carrot", "kale", "lettuce",
    "potato", "sweet potato", "wheat", "oat", "soy", "seafood", "fish",
    "tuna", "salmon", "shrimp", "shellfish", "milk", "dairy", "meat",
    "poultry", "chicken", "beef", "liver", "kidney", "fruit", "vegetable",
    "juice", "tea", "coffee", "cereal", "bread", "flour", "protein powder",
    "whey", "supplement", "rice", "formula", "infant cereal",
]
_INGREDIENT_RE = re.compile(
    r'\b(' + '|'.join(re.escape(k) for k in sorted(_INGREDIENT_KEYWORDS, key=len, reverse=True)) + r')\b',
    re.IGNORECASE,
)

_JURISDICTION_MAP = {
    "united states": "US", "u.s.": "US", "usa": "US",
    "fda": "US", "epa": "US", "usda": "US", "cpsc": "US",
    "european union": "EU", "efsa": "EU",
    "united kingdom": "UK", "uk food standards": "UK", "fsa": "UK",
    "canada": "CA", "health canada": "CA",
    "australia": "AU", "fsanz": "AU",
    "china": "CN", "chinese": "CN",
    "japan": "JP", "japanese": "JP",
    "india": "IN", "indian": "IN",
    "brazil": "BR", "brazilian": "BR",
    "who": "WHO", "codex alimentarius": "Codex", "codex": "Codex",
}
_JURISDICTION_RE = re.compile(
    r'(?<!\w)(' + '|'.join(re.escape(k) for k in sorted(_JURISDICTION_MAP, key=len, reverse=True)) + r')(?!\w)',
    re.IGNORECASE,
)

# Priority-tier signals
_CONCENTRATION_RE = re.compile(r'\b(ppb|µg/kg|μg/kg|ng/g|mg/kg|ppm|µg/L|ng/mL|ng/L)\b')
_FOOD_MATRIX_RE   = re.compile(
    r'\b(infant formula|baby food|rice cereal|breast milk|human milk|fruit pur[eé]e|'
    r'vegetable pur[eé]e|infant food|infant cereal|rice flour|toddler food|'
    r'complementary food|formula powder|ready.to.feed)\b',
    re.IGNORECASE,
)
_AGENCY_RE = re.compile(
    r'\b(FDA|EFSA|WHO|EPA|USDA|Codex Alimentarius|FSANZ|Health Canada|ECHA|IARC|ATSDR|NTP)\b'
)
_LOQ_RE = re.compile(
    r'\b(LOQ|LOD|limit of quantification|limit of detection|detection limit|quantification limit)\b',
    re.IGNORECASE,
)

# ── Helpers ───────────────────────────────────────────────────────────────────

def _ascii(text: str) -> str:
    return unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")

_STOP = frozenset([
    "a","an","the","of","in","on","at","to","for","with","and","or","by","from",
    "its","is","are","was","were","be","been","being","as","this","that","these",
    "those","it","via","using","based","study","effects","impact","role",
    "influence","assessment","evaluation","analysis","review","systematic",
    "comprehensive","novel","new","paper","article","between","among","after",
    "before","during","through","under","over","about","their","which","have",
    "has","had","can","will","may","not","does","did","do",
])

def slugify(text: str, max_words: int = 4) -> str:
    if not text:
        return "unknown"
    text = _ascii(text)
    text = re.sub(r"[^\w\s-]", " ", text.lower())
    words = [w for w in text.split() if len(w) > 2 and w not in _STOP]
    return "-".join(words[:max_words]) or "unknown"

def sha256_of_file(path: Path) -> tuple[str, int]:
    """Return (hex_digest, size_bytes). Reads raw bytes."""
    h = hashlib.sha256()
    try:
        data = path.read_bytes()
        h.update(data)
        return h.hexdigest(), len(data)
    except Exception:
        return "error", 0

def extract_title(text: str) -> str:
    m = re.search(r'^#\s+\*?\*?(.+)', text, re.MULTILINE)
    if m:
        t = m.group(1).strip().strip("*").strip()
        t = re.sub(r"\*+", "", t)
        return t[:200]
    return "unknown"

def extract_year(text: str) -> str | None:
    m = re.search(r'\b(20[0-2]\d|19[6-9]\d)\b', text)
    return m.group(1) if m else None

def extract_doi(text: str) -> str | None:
    m = re.search(r'(?:doi\.org/|doi:|DOI:[ \t]*)(10\.\d{4,}/\S+?)(?:[ \t\n\r,\]\)>]|$)', text)
    if m:
        return m.group(1).rstrip(".,;)")
    return None

def _author_token_ok(token: str) -> bool:
    """A bare token is a plausible first-author surname only if it is alphabetic,
    at least two characters, and NOT a structural / section-header / analyte word."""
    t = _ascii(token).lower()
    return len(t) >= 2 and t.isalpha() and t not in _NON_AUTHOR

def extract_first_author(text: str) -> str:
    # Conservative author extraction: the SAME two patterns the builder has always
    # used, now each validating the candidate against _NON_AUTHOR so a bolded
    # section header / title word / analyte name (the old failure that minted
    # "abstract2021-…", "keywords2019-…", "arsenic2023-…") is rejected rather than
    # written into the key. This can only improve on the prior behaviour: a garbage
    # candidate becomes an honest "unknown" instead of a fake author key.
    #
    # NOTE on scope: regex extraction from heterogeneous OCR cannot reliably tell a
    # real surname from a place name / first name / foreign common word, so a
    # residual low-confidence tail remains (returned as a surname-shaped token or
    # "unknown"). The AUTHORITATIVE repair is DOI→Crossref author verification (the
    # wrong-DOI/confabulation sweep); the ingest gate below routes "unknown"/garbage
    # keys there instead of letting them mint duplicate-prone pages. Do NOT try to
    # out-clever this with looser regex — that launders garbage into plausible-but-
    # wrong keys the gate cannot catch, which is worse for a provenance corpus.

    # 1) "Lastname, F." / "Lastname F." author line (higher precision — try first).
    m = re.search(r'(?:^|\n)\s*([A-Z][a-zA-ZÀ-ÿ\'\-]+)\s*,?\s+[A-Z]\.', text)
    if m and _author_token_ok(m.group(1)):
        return _ascii(m.group(1)).lower()
    # 2) Bold author block: **Lastname Firstname …**, garbage tokens rejected.
    m = re.search(r'\*\*([A-Z][a-zA-ZÀ-ÿ\-]+(?:\s+[A-Z][a-zA-ZÀ-ÿ\-]*){0,2})', text)
    if m:
        tok = m.group(1).split()[0]
        if _author_token_ok(tok):
            return _ascii(tok).lower()
    return "unknown"

def extract_org(publication: str, text: str) -> str | None:
    """Defensible org-author slug when no personal surname is extractable. Matches
    the extracted publication first (low false-positive), then a tight issuer line
    at the very top of the document. Returns None if nothing strong matches."""
    pub = publication or ""
    head = text[:400]
    for pat, slug in _ORG_SLUGS:
        if re.search(pat, pub):
            return slug
    for pat, slug in _ORG_SLUGS:
        if re.search(pat, head):
            return slug
    return None

def extract_publication(text: str) -> str:
    # Italicised journal name near top
    m = re.search(r'\*([A-Z][A-Za-z &\-:]+(?:Journal|Review|Letters|Science|Research|Reports|'
                  r'Toxicology|Nutrition|Medicine|Food|Environmental|Chemistry|'
                  r'Analytical|International|European|Bulletin|Proceedings|Metals|'
                  r'Metallomics|Epidemiology|Exposure|Public Health|Pediatrics))\*',
                  text[:2000])
    if m:
        return m.group(1).strip()[:100]
    # ISSN line
    m = re.search(r'ISSN\s+([\d\-X]+)', text[:1500])
    if m:
        return f"ISSN {m.group(1)}"
    return "unknown"

def extract_license(text: str) -> str:
    m = re.search(
        r'(CC\s+BY(?:-NC)?(?:-ND)?(?:-SA)?(?:\s+\d+\.\d+)?|'
        r'Creative Commons Attribution[^\n]{0,60})',
        text, re.IGNORECASE,
    )
    return m.group(1).strip()[:60] if m else "unknown"

def mine_metals(text: str) -> str:
    found: set[str] = set()
    for m in _METALS_RE.finditer(text):
        key = m.group(0).lower()
        canon = _METAL_CANONICAL.get(key)
        if canon:
            found.add(canon)
    return ";".join(sorted(found))

def mine_ingredients(text: str) -> str:
    found: set[str] = set()
    for m in _INGREDIENT_RE.finditer(text):
        found.add(m.group(0).lower())
    return ";".join(sorted(found))

def mine_jurisdictions(text: str) -> str:
    found: set[str] = set()
    for m in _JURISDICTION_RE.finditer(text):
        key = m.group(0).lower()
        jur = _JURISDICTION_MAP.get(key)
        if jur:
            found.add(jur)
    return ";".join(sorted(found))

def priority_tier(text: str, metals: str) -> str:
    if not text:
        return "P5_quarantine"
    # P3: agency report (≥2 distinct agency tokens in first 1500 chars)
    agency_hits = set(m.group(0) for m in _AGENCY_RE.finditer(text[:1500]))
    if len(agency_hits) >= 2:
        return "P3"
    # P2: LOQ/LOD methodology
    if _LOQ_RE.search(text[:3000]):
        return "P2"
    # P1: concentration units + food matrix + at least one metal
    if metals and _CONCENTRATION_RE.search(text) and _FOOD_MATRIX_RE.search(text):
        return "P1"
    # P4: post-2020 with any metal relevance
    year_m = re.search(r'\b(202[0-9])\b', text[:1000])
    if year_m:
        return "P4" if metals else "P4"   # post-2020 regardless
    # P5
    return "P5"

# ── Ingested handles ──────────────────────────────────────────────────────────

def load_ingested_handles() -> set[str]:
    """Return set of FM_XXXXXXX handles that already have a source page.

    raw_handle values in source-page frontmatter may be stored as bare handles
    ("FM_1234567") or as full paths ("raw/markdown/FM_1234567/FM_1234567.md").
    Extract just the FM_XXXXXXX token from either form.
    """
    handles: set[str] = set()
    for f in SOURCES_DIR.glob("*.md"):
        if f.name == "_TEMPLATE.md":
            continue
        try:
            text = f.read_text(encoding="utf-8", errors="replace")
            m = re.search(r'^raw_handle:\s*(\S+)', text, re.MULTILINE)
            if m:
                val = m.group(1).strip().strip('"')
                fm = re.search(r'(FM_\d+)', val)
                if fm:
                    handles.add(fm.group(1))
        except Exception:
            pass
    return handles

# ── Per-folder processing ─────────────────────────────────────────────────────

def process_folder(fm_handle: str, ingested: set[str]) -> dict:
    folder   = MARKDOWN_DIR / fm_handle
    md_path  = folder / f"{fm_handle}.md"

    row: dict = {
        "raw_handle": fm_handle,
        "cite_key": "",
        "already_ingested": fm_handle in ingested,
        "year": "",
        "doi": "",
        "publication": "unknown",
        "first_author": "unknown",
        "license": "unknown",
        "size_bytes": 0,
        "sha256": "",
        "text_mined_metals": "",
        "text_mined_ingredients": "",
        "text_mined_jurisdictions": "",
        "priority_tier": "P5",
        "dedup_cluster": "",
    }

    if not md_path.exists():
        row["priority_tier"] = "P5_quarantine"
        return row

    sha, size = sha256_of_file(md_path)
    row["sha256"] = sha
    row["size_bytes"] = size

    if size == 0:
        row["priority_tier"] = "P5_quarantine"
        return row

    try:
        raw_bytes = md_path.read_bytes()
        text_full = raw_bytes.decode("utf-8", errors="replace")
    except Exception:
        row["priority_tier"] = "P5_quarantine"
        return row

    text = text_full[:4000]

    title       = extract_title(text)
    author      = extract_first_author(text)
    year        = extract_year(text)
    metals      = mine_metals(text)
    publication = extract_publication(text)
    slug        = slugify(title)

    # Reject an author lifted from the title head: when the extracted "author"
    # equals the first title-slug token (e.g. "extending2023-extending-…",
    # "time2007-time-…"), it is the leading title word, not a surname. A real
    # first-author surname is essentially never the lead significant title word.
    if author != "unknown" and (slug == author or slug.startswith(author + "-")):
        author = "unknown"

    # No personal surname? Fall back to a known issuing organization (agency
    # reports) before resorting to "unknown" — never to a title/section word.
    if author == "unknown":
        org = extract_org(publication, text)
        if org:
            author = org

    row["year"]                   = year or ""
    row["doi"]                    = extract_doi(text) or ""
    row["first_author"]           = author
    row["publication"]            = publication
    row["license"]                = extract_license(text)
    row["text_mined_metals"]      = metals
    row["text_mined_ingredients"] = mine_ingredients(text)
    row["text_mined_jurisdictions"] = mine_jurisdictions(text)
    row["priority_tier"]          = priority_tier(text, metals)

    year_str = year or "xxxx"
    row["cite_key"] = f"{author}{year_str}-{slug}"

    return row

# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    MANIFEST_DIR.mkdir(parents=True, exist_ok=True)

    ingested = load_ingested_handles()
    print(f"Already-ingested source handles: {len(ingested)}", flush=True)

    all_folders = sorted(
        d.name for d in MARKDOWN_DIR.iterdir()
        if d.is_dir() and d.name.startswith("FM_")
    )
    total = len(all_folders)
    print(f"Total FM folders: {total}", flush=True)

    # ── Resume detection ──────────────────────────────────────────────────────
    already_done: set[str] = set()
    if MANIFEST_CSV.exists():
        with open(MANIFEST_CSV, newline="", encoding="utf-8") as f:
            for r in csv.DictReader(f):
                already_done.add(r.get("raw_handle", ""))
        print(f"Resuming — {len(already_done)} rows already in manifest", flush=True)

    write_header = not MANIFEST_CSV.exists() or len(already_done) == 0
    if write_header:
        with open(MANIFEST_CSV, "w", newline="", encoding="utf-8") as f:
            csv.DictWriter(f, fieldnames=CSV_COLUMNS).writeheader()

    # ── Process ───────────────────────────────────────────────────────────────
    remaining  = [h for h in all_folders if h not in already_done]
    processed  = len(already_done)
    batch_num  = processed // BATCH_SIZE + 1
    batch_rows: list[dict] = []
    all_rows: list[dict]   = []  # for final dedup pass

    for idx, fm_handle in enumerate(remaining):
        row = process_folder(fm_handle, ingested)
        batch_rows.append(row)
        all_rows.append(row)

        flush_now = (len(batch_rows) >= BATCH_SIZE) or (idx == len(remaining) - 1)
        if flush_now:
            with open(MANIFEST_CSV, "a", newline="", encoding="utf-8") as f:
                w = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
                w.writerows(batch_rows)
            processed += len(batch_rows)
            with open(PROGRESS_JSON, "w", encoding="utf-8") as f:
                json.dump({
                    "batch_number": batch_num,
                    "folders_processed": processed,
                    "folders_remaining": total - processed,
                    "last_handle": batch_rows[-1]["raw_handle"],
                }, f, indent=2)
            pct = processed / total * 100
            print(
                f"  Batch {batch_num:4d} done  [{processed:6d}/{total}  {pct:5.1f}%]  "
                f"last={batch_rows[-1]['raw_handle']}",
                flush=True,
            )
            batch_rows = []
            batch_num += 1

    # ── Dedup pass ────────────────────────────────────────────────────────────
    print("Running dedup pass …", flush=True)
    # Read already-done rows too (if resuming)
    all_rows_full: list[dict] = []
    with open(MANIFEST_CSV, newline="", encoding="utf-8") as f:
        all_rows_full = list(csv.DictReader(f))

    sha_to_handles: dict[str, list[str]] = {}
    for r in all_rows_full:
        sha = r.get("sha256", "")
        if sha and sha not in ("error", ""):
            sha_to_handles.setdefault(sha, []).append(r["raw_handle"])

    dup_clusters = {sha: handles for sha, handles in sha_to_handles.items() if len(handles) > 1}
    handle_to_cluster: dict[str, str] = {}
    for cid, (sha, handles) in enumerate(sorted(dup_clusters.items()), start=1):
        label = f"cluster_{cid:04d}"
        for h in handles:
            handle_to_cluster[h] = label

    for r in all_rows_full:
        r["dedup_cluster"] = handle_to_cluster.get(r["raw_handle"], "")

    # ── Cite-key collision resolution ─────────────────────────────────────────
    print("Resolving cite-key collisions …", flush=True)
    seen_keys: dict[str, int] = {}
    for r in all_rows_full:
        base = r["cite_key"]
        n    = seen_keys.get(base, 0)
        if n > 0:
            suffix = chr(ord("a") + n - 1)
            r["cite_key"] = f"{base}-{suffix}"
            # Also fix the first occurrence retroactively when n==1
        seen_keys[base] = n + 1
    # Second pass to retrofit the first-duplicate's suffix
    seen_keys2: dict[str, int] = {}
    for r in all_rows_full:
        base = r["cite_key"].rsplit("-", 1)[0] if r["cite_key"].endswith(tuple("-abcdefghijklmnopqrstuvwxyz")) else r["cite_key"]
        # Simpler: just collect base keys that appeared more than once and re-label
    # Full simple approach: count base occurrences first
    base_counts: dict[str, int] = Counter(r["cite_key"] for r in all_rows_full)
    collision_bases = {k for k, v in base_counts.items() if v > 1}
    seen_for_suffix: dict[str, int] = {}
    for r in all_rows_full:
        base = r["cite_key"]
        if base in collision_bases:
            n = seen_for_suffix.get(base, 0)
            suffix = chr(ord("a") + n)
            r["cite_key"] = f"{base}-{suffix}"
            seen_for_suffix[base] = n + 1

    # Rewrite full manifest with dedup_cluster and collision-resolved cite_keys
    with open(MANIFEST_CSV, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        w.writeheader()
        w.writerows(all_rows_full)
    print(f"Manifest written: {len(all_rows_full)} rows → {MANIFEST_CSV}", flush=True)

    # ── Build report ──────────────────────────────────────────────────────────
    tier_counts    = Counter(r["priority_tier"] for r in all_rows_full)
    quarantined    = [r["raw_handle"] for r in all_rows_full if r["priority_tier"] == "P5_quarantine"]
    ingested_count = sum(1 for r in all_rows_full if r["already_ingested"] in (True, "True"))
    dup_file_count = sum(len(v) for v in dup_clusters.values())

    lines = [
        "# Triage Manifest Build Report",
        "",
        "**Built:** 2026-05-12",
        f"**Total rows written:** {len(all_rows_full)}",
        f"**Already-ingested handles:** {ingested_count}",
        "",
        "## Priority Tier Distribution",
        "",
    ]
    for tier in ["P1", "P2", "P3", "P4", "P5", "P5_quarantine"]:
        lines.append(f"- {tier}: {tier_counts.get(tier, 0)}")
    lines += [
        "",
        "## Dedup Clusters",
        f"- Clusters (files with identical .md sha256): {len(dup_clusters)}",
        f"- Files participating in a cluster: {dup_file_count}",
        "",
        "## Quarantined Folders",
        f"- Count: {len(quarantined)}",
    ]
    for h in quarantined[:30]:
        lines.append(f"  - {h}")
    if len(quarantined) > 30:
        lines.append(f"  - … and {len(quarantined)-30} more")
    lines += [
        "",
        "## Notes",
        "- Priority tier is best-effort from the first 4000 characters of each .md file.",
        "- Cite-keys are provisional; bulk ingest should verify against paper content.",
        "- Dedup cluster IDs are based on sha256 of the raw .md file bytes.",
        "- Already-ingested status is derived from raw_handle in wiki/sources/*.md frontmatter.",
        "- Single-letter suffixes (-a, -b, …) are appended to resolve cite-key collisions.",
    ]
    REPORT_MD.write_text("\n".join(lines), encoding="utf-8")
    print(f"Report: {REPORT_MD}", flush=True)
    print(f"Tier distribution: {dict(tier_counts)}", flush=True)
    print(f"Dedup clusters: {len(dup_clusters)} ({dup_file_count} files)", flush=True)

if __name__ == "__main__":
    main()
