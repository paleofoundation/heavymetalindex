#!/usr/bin/env python3
"""
dedup_categorize.py — First-pass dedup + rule-based categorization for the
Heavy Metal Tested raw/ ingest pile.

Usage:
    1. Put your 27k PDFs in ~/Desktop/heavy_metal_pile/ (or edit SOURCE_DIR).
    2. Dry run first — writes manifest CSVs but moves nothing:
         python3 dedup_categorize.py --dry-run
    3. Review the CSVs, then run for real:
         python3 dedup_categorize.py

Nothing is deleted. Duplicates go to _duplicates/. Low-confidence files go to
_unsorted/. Potential brand-level lab data (COAs) gets diverted to
_firewall-review/ per the CLAUDE.md hard firewall rule — never into raw/lab-data/.
"""

import argparse
import csv
import hashlib
import re
import shutil
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

# ───────────────────────── CONFIG ─────────────────────────

SOURCE_DIR = Path.home() / "Desktop" / "heavy_metal_pile"   # EDIT ME if needed
DEST_DIR   = Path.home() / "Desktop" / "heavy_metal_sorted" # EDIT ME if needed

# Categories map to the raw/ layout in CLAUDE.md exactly.
CATEGORIES = ["studies", "reports", "industry", "news", "lab-data"]
SPECIAL    = ["_duplicates", "_unsorted", "_firewall-review"]

PAGES_TO_READ  = 2   # text-extraction depth per file
MIN_CONFIDENCE = 2   # below this → _unsorted/

# ────────────────── CATEGORIZATION RULES ──────────────────
# Each rule: (category, pattern, weight, label)
# Patterns are case-insensitive regex. Highest-scoring category wins if it
# clears MIN_CONFIDENCE; ties go to the first-matched category.

RULES = [
    # ── lab-data / COAs → firewall diversion ──
    ("lab-data", r"\bcertificate of analysis\b",       5, "COA-header"),
    ("lab-data", r"\bC\.?O\.?A\.?\b",                  3, "COA-abbrev"),
    ("lab-data", r"\blot\s*#?\s*\d",                   2, "lot-number"),
    ("lab-data", r"\bbatch\s*#?\s*\d",                 2, "batch-number"),
    ("lab-data", r"\b(sample|specimen)\s+id\b",        2, "sample-id"),

    # ── reports: government / agency / NGO ──
    ("reports",  r"\bFDA\b|\bU\.?S\.? Food and Drug",  4, "FDA"),
    ("reports",  r"\bEFSA\b|European Food Safety",     4, "EFSA"),
    ("reports",  r"\bWHO\b|World Health Organization", 4, "WHO"),
    ("reports",  r"\bEPA\b|Environmental Protection",  4, "EPA"),
    ("reports",  r"\bCodex Alimentarius\b",            4, "Codex"),
    ("reports",  r"\bHBBF\b|Healthy Babies Bright",    4, "HBBF"),
    ("reports",  r"Consumer Reports",                  4, "ConsumerReports"),
    ("reports",  r"\bEWG\b|Environmental Working",     3, "EWG"),
    ("reports",  r"\bATSDR\b",                         3, "ATSDR"),
    ("reports",  r"\bJECFA\b",                         3, "JECFA"),
    ("reports",  r"\bCDPH\b|California Department of Public Health", 3, "CDPH"),
    ("reports",  r"Prop(?:osition)?\s*65",             3, "Prop65"),
    ("reports",  r"Closer[-\s]to[-\s]Zero",            4, "CTZ"),
    ("reports",  r"Total Diet Study",                  3, "TDS"),
    ("reports",  r"\btechnical report\b",              2, "tech-report"),
    ("reports",  r"\bguidance (?:document|for industry)\b", 3, "guidance"),

    # ── studies: peer-reviewed ──
    ("studies",  r"\bdoi[:\s]*10\.\d{4,9}/",           5, "DOI"),
    ("studies",  r"\bAbstract\b.{0,200}\bIntroduction\b", 3, "abstract+intro"),
    ("studies",  r"\bMaterials and Methods\b",         3, "mat-methods"),
    ("studies",  r"\bReceived:.*Accepted:",            3, "received-accepted"),
    ("studies",  r"© \d{4} Elsevier|Springer|Wiley|Taylor & Francis", 4, "publisher"),
    ("studies",  r"\bJ\.\s+(?:Agric|Food|Environ|Anal|Toxicol)", 3, "journal-abbrev"),
    ("studies",  r"Environ(?:mental)?\s+Sci(?:ence)?\s*(?:&|and)?\s*Technol", 3, "ES&T"),
    ("studies",  r"Food (?:and )?Chem(?:ical)?\s+Toxicol", 3, "FCT"),
    ("studies",  r"\bmeta[-\s]analysis\b",             2, "meta-analysis"),
    ("studies",  r"\bsystematic review\b",             2, "systematic-review"),
    ("studies",  r"\bPubMed|PMC\d{6,}|PMID",           3, "pubmed"),

    # ── industry: trade / white papers ──
    ("industry", r"\bwhite paper\b",                   3, "whitepaper"),
    ("industry", r"\bpress release\b",                 2, "press-release"),
    ("industry", r"\btrade association\b",             2, "trade-assoc"),
    ("industry", r"\bindustry (?:standard|guideline)", 2, "industry-std"),
    ("industry", r"\b(?:GMA|AHPA|CRN|IFT)\b",          2, "trade-org"),

    # ── news ──
    ("news",     r"\b(?:Reuters|Bloomberg|AP News|Associated Press)\b", 4, "wire"),
    ("news",     r"\b(?:NYT|New York Times|Washington Post|WSJ)\b",     3, "major-paper"),
    ("news",     r"\bFood Navigator\b|FoodNavigator",  3, "FoodNavigator"),
    ("news",     r"\bFood Dive\b",                     3, "FoodDive"),
    ("news",     r"Published:\s*\w+\s+\d+,\s*20\d{2}", 1, "news-date"),
]

FILENAME_HINTS = [
    ("lab-data", r"\bCOA\b|certificate[_-]of[_-]analysis", 3, "fname-COA"),
    ("reports",  r"FDA|EFSA|WHO|EPA|Codex|HBBF",           2, "fname-agency"),
    ("studies",  r"\d{4}[_-].*\.pdf$",                     1, "fname-yeared"),
    ("news",     r"news|article|press",                    1, "fname-news"),
]

# ───────────────────── IMPLEMENTATION ─────────────────────

def sha256_file(path: Path, chunk: int = 1024 * 1024) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        while True:
            b = f.read(chunk)
            if not b:
                break
            h.update(b)
    return h.hexdigest()


def extract_first_pages(path: Path, n_pages: int = PAGES_TO_READ) -> str:
    """Extract text from the first n pages. Returns '' on any failure."""
    try:
        from pypdf import PdfReader
    except ImportError:
        print("ERROR: pypdf not installed. See install instructions at the top "
              "of this file, or run: pip install --break-system-packages pypdf",
              file=sys.stderr)
        sys.exit(1)

    try:
        reader = PdfReader(str(path))
        pages = reader.pages[:n_pages]
        return "\n".join((p.extract_text() or "") for p in pages)
    except Exception:
        return ""


def classify(filename: str, text: str) -> tuple[str, int, list[str]]:
    """Return (category, confidence, matched_labels)."""
    scores: dict[str, int] = defaultdict(int)
    hits: dict[str, list[str]] = defaultdict(list)

    haystack = f"{filename}\n{text}"

    for cat, pattern, weight, label in RULES:
        if re.search(pattern, haystack, re.IGNORECASE | re.DOTALL):
            scores[cat] += weight
            hits[cat].append(label)

    for cat, pattern, weight, label in FILENAME_HINTS:
        if re.search(pattern, filename, re.IGNORECASE):
            scores[cat] += weight
            hits[cat].append(label)

    if not scores:
        return ("_unsorted", 0, [])

    best_cat = max(scores, key=scores.get)
    best_score = scores[best_cat]

    if best_score < MIN_CONFIDENCE:
        return ("_unsorted", best_score, hits[best_cat])

    return (best_cat, best_score, hits[best_cat])


def route_category(category: str) -> str:
    """Firewall: lab-data → _firewall-review/ (never public wiki raw/lab-data/)."""
    if category == "lab-data":
        return "_firewall-review"
    return category


def _unique_target(path: Path) -> Path:
    """If path exists, append _1, _2, … before the extension."""
    if not path.exists():
        return path
    stem, suffix = path.stem, path.suffix
    i = 1
    while True:
        candidate = path.with_name(f"{stem}_{i}{suffix}")
        if not candidate.exists():
            return candidate
        i += 1


def find_pdfs(src: Path, dest: Path) -> list[Path]:
    """Collect PDFs recursively from src, excluding anything already inside dest
    (so re-running the script doesn't re-process its own output)."""
    # dedupe case-insensitive filesystem hits (*.pdf and *.PDF both match the
    # same inode on default macOS APFS)
    seen: set[Path] = set()
    pdfs: list[Path] = []
    for p in src.rglob("*"):
        if not p.is_file():
            continue
        if p.suffix.lower() != ".pdf":
            continue
        # Skip anything inside the dest tree, in case dest is nested in src.
        try:
            p.resolve().relative_to(dest.resolve())
            continue  # is inside dest → skip
        except ValueError:
            pass
        resolved = p.resolve()
        if resolved in seen:
            continue
        seen.add(resolved)
        pdfs.append(p)
    return sorted(pdfs)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    ap.add_argument("--dry-run", action="store_true",
                    help="Report what would happen, don't move files.")
    ap.add_argument("--source", type=Path, default=SOURCE_DIR)
    ap.add_argument("--dest",   type=Path, default=DEST_DIR)
    args = ap.parse_args()

    src: Path  = args.source.expanduser()
    dest: Path = args.dest.expanduser()

    if not src.exists():
        print(f"ERROR: source directory not found: {src}", file=sys.stderr)
        print("Create the folder and move your PDFs into it, or pass "
              "--source /path/to/your/pile", file=sys.stderr)
        sys.exit(1)

    if src.resolve() == Path.home() / "Desktop":
        print("REFUSING to run on your whole Desktop — too risky. "
              "Move the pile into a named subfolder first, e.g.:", file=sys.stderr)
        print("  mkdir -p ~/Desktop/heavy_metal_pile && "
              "mv ~/Desktop/*.pdf ~/Desktop/heavy_metal_pile/", file=sys.stderr)
        sys.exit(1)

    print(f"Scanning {src} for PDFs …")
    pdfs = find_pdfs(src, dest)
    print(f"Found {len(pdfs):,} PDFs.\n")

    if not pdfs:
        print("Nothing to do.")
        return

    # ── Stage 1: hash + dedup ──
    print("Stage 1: hashing files …")
    by_hash: dict[str, list[Path]] = defaultdict(list)
    path_to_hash: dict[Path, str] = {}   # reverse lookup, built once
    for i, p in enumerate(pdfs, 1):
        if i % 500 == 0:
            print(f"  hashed {i:,}/{len(pdfs):,}")
        try:
            h = sha256_file(p)
            by_hash[h].append(p)
            path_to_hash[p] = h
        except Exception as e:
            print(f"  WARN: could not hash {p}: {e}")

    uniques: list[Path] = []
    dup_log: list[dict] = []
    for h, paths in by_hash.items():
        # Keep the one with the shortest path (usually the cleanest name).
        paths_sorted = sorted(paths, key=lambda x: (len(str(x)), str(x)))
        keep = paths_sorted[0]
        uniques.append(keep)
        for d in paths_sorted[1:]:
            dup_log.append({"sha256": h, "kept": str(keep), "duplicate": str(d)})

    print(f"  {len(uniques):,} unique files, {len(dup_log):,} exact duplicates.\n")

    # ── Stage 2: classify ──
    print("Stage 2: classifying unique files …")
    results: list[dict] = []
    for i, p in enumerate(uniques, 1):
        if i % 200 == 0:
            print(f"  classified {i:,}/{len(uniques):,}")
        text = extract_first_pages(p)
        category, confidence, labels = classify(p.name, text)
        routed = route_category(category)
        results.append({
            "path": str(p),
            "filename": p.name,
            "sha256": path_to_hash.get(p, ""),   # O(1) now, not O(n)
            "category_raw": category,
            "category_routed": routed,
            "confidence": confidence,
            "matched": ";".join(labels),
            "text_extracted": bool(text.strip()),
        })

    cat_counts: dict[str, int] = defaultdict(int)
    for r in results:
        cat_counts[r["category_routed"]] += 1
    print("\nClassification summary:")
    for cat in CATEGORIES + SPECIAL:
        if cat_counts.get(cat):
            print(f"  {cat:20s} {cat_counts[cat]:>6,}")

    # ── Manifests ──
    dest.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y-%m-%d_%H%M")

    dup_csv = dest / f"_manifest_duplicates_{stamp}.csv"
    with dup_csv.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["sha256", "kept", "duplicate"])
        w.writeheader()
        w.writerows(dup_log)
    print(f"\nDuplicate manifest: {dup_csv}")

    class_csv = dest / f"_manifest_classification_{stamp}.csv"
    fieldnames = ["path", "filename", "sha256", "category_raw",
                  "category_routed", "confidence", "matched", "text_extracted"]
    with class_csv.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(results)
    print(f"Classification manifest: {class_csv}")

    # ── Move (unless dry run) ──
    if args.dry_run:
        print("\n--dry-run set: no files moved.")
        return

    print("\nMoving files …")
    for cat in CATEGORIES + SPECIAL:
        (dest / cat).mkdir(parents=True, exist_ok=True)

    for row in dup_log:
        dup_path = Path(row["duplicate"])
        if not dup_path.exists():
            continue
        target = _unique_target(dest / "_duplicates" / dup_path.name)
        shutil.move(str(dup_path), str(target))

    for r in results:
        src_path = Path(r["path"])
        if not src_path.exists():
            continue
        target_dir = dest / r["category_routed"]
        target = _unique_target(target_dir / src_path.name)
        shutil.move(str(src_path), str(target))

    print("Done.")


if __name__ == "__main__":
    main()
