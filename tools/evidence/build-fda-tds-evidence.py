#!/usr/bin/env python3
"""Reconcile the complete FDA FY2018–2020 TDS files before publishing extracts.

Uses only the Python standard library. The immutable FDA TSV and XLSX are
independent inputs: every published regular-analyte group must agree on N,
detect/non-detect counts and extrema. Speciation groups are explicitly derived
from the TSV because the supplement does not tabulate them. Legacy percentiles
remain lower-bound estimates (ND=0), with upper bounds and censoring attached.
"""
import argparse
import csv
import hashlib
import io
import json
import math
from pathlib import Path
import re
import statistics
import sys
import xml.etree.ElementTree as ET
import zipfile
from collections import Counter, defaultdict

ROOT = Path(__file__).resolve().parents[2]
SOURCE = "fda2022-tds-elements-fy2018-fy2020"
RAW = "raw/reports/fda-tds-fy2018-2020-recovery-2026-09-10"
INPUTS = {
    "analytical-results.txt": ("e358bdff4203eba66825edb8cc131669cdc3205cce752c2e898b5a2aa9e6c46c", "https://www.fda.gov/media/159750/download?attachment="),
    "summary-of-analytical-results.xlsx": ("f9f35ff6ab3fb9dc2dcd2b403c8279c0794463cf971787a97c393493d48aea19", "https://www.fda.gov/media/159749/download?attachment="),
}
PREFIX = "fda_tds_fy2018_2020_"
EVIDENCE = ROOT / "data/evidence"
SPECIES = {"Lead": "Pb", "Cadmium": "Cd", "Arsenic (total)": "tAs", "Total inorganic arsenic": "iAs", "Mercury": "tHg", "Nickel": "Ni", "Chromium": "Cr", "Uranium": "U", "Antimony": "Sb"}
SPECIATION = {"Total inorganic arsenic", "Dimethylarsinic acid", "Monomethylarsonic acid"}
SAMPLE_COLUMNS = "source_id fiscal_year calendar_year collection tds_food_number tds_food_description ingredient_slug ingredient_label season tds_food_list_type region analyte analyte_slug metal_species units_original concentration_original reporting_limit_original concentration_ppb_equivalent reporting_limit_ppb_equivalent basis censoring_note source_row_number sample_id result_status concentration_lower_bound_ppb concentration_upper_bound_ppb route_disposition".split()
SUMMARY_COLUMNS = "source_id tds_food_number tds_food_description ingredient_slug ingredient_label analyte analyte_slug metal_species units_original normalized_unit n reported_zero_n min_ppb_equivalent p10_ppb_equivalent p50_ppb_equivalent p90_ppb_equivalent p95_ppb_equivalent max_ppb_equivalent reporting_limit_min_ppb_equivalent reporting_limit_max_ppb_equivalent basis review_state notes detected_n non_detect_n censoring statistic_basis mean_lower_bound_ppb sd_lower_bound_ppb mean_upper_bound_ppb sd_upper_bound_ppb min_upper_bound_ppb p10_upper_bound_ppb p50_upper_bound_ppb p90_upper_bound_ppb p95_upper_bound_ppb max_upper_bound_ppb min_detected_ppb max_detected_ppb source_reported_n source_reported_detected_n source_reported_non_detect_n source_reported_mean_original source_reported_sd_original source_reported_min_original source_reported_max_original source_reported_reporting_limit_original source_reported_mean_ppb source_reported_sd_ppb source_summary_xlsx_row source_summary_reconciliation route_disposition".split()


def slug(value):
    if value == "Total inorganic arsenic":
        return "arsenic-inorganic-total"  # Preserve the established analyte identifier.
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def number(value):
    return float(value)


def fmt(value):
    if value is None:
        return ""
    if isinstance(value, float):
        return format(value, ".12g")
    return str(value)


def food_basis(description):
    description = description.lower()
    if "prepared with water" in description:
        return "reconstituted/as-prepared composite; FDA food preparation retained; no dry-basis conversion"
    if re.search(r"\b(cooked|boiled|baked|roasted|prepared|heated)\b", description):
        return "FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion"
    if re.search(r"\b(powder|powdered|flour|breadcrumbs)\b", description) or re.search(r"\bcereal\b.*\bdry$", description):
        return "as-sold dry-product composite; not dry-matter-normalized; no reconstitution conversion"
    return "FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion"


def percentile(values, fraction):
    ordered = sorted(values)
    position = (len(ordered) - 1) * fraction
    left, right = math.floor(position), math.ceil(position)
    return ordered[left] + (ordered[right] - ordered[left]) * (position - left)


def csv_bytes(rows, columns):
    stream = io.StringIO(newline="")
    writer = csv.DictWriter(stream, fieldnames=columns, lineterminator="\n")
    writer.writeheader()
    writer.writerows({key: fmt(row.get(key, "")) for key in columns} for row in rows)
    return stream.getvalue().encode("utf-8")


def verified_input(name):
    file = ROOT / RAW / name
    content = file.read_bytes()
    digest = hashlib.sha256(content).hexdigest()
    if digest != INPUTS[name][0]:
        raise ValueError(f"Raw source SHA mismatch: {file}")
    return content


def read_supplement(content):
    """Read cell values, including FDA's literal N/A and ND, without Excel edits."""
    ns = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    with zipfile.ZipFile(io.BytesIO(content)) as archive:
        strings = ["".join(element.itertext()) for element in ET.fromstring(archive.read("xl/sharedStrings.xml")).findall("m:si", ns)]
        sheet = ET.fromstring(archive.read("xl/worksheets/sheet1.xml"))
    rows = {}
    for element in sheet.findall("m:sheetData/m:row", ns):
        cells = {}
        for cell in element.findall("m:c", ns):
            value_element = cell.find("m:v", ns)
            value = "" if value_element is None else value_element.text
            if cell.get("t") == "s":
                value = strings[int(value)]
            cells[re.sub(r"\d", "", cell.get("r"))] = value
        if not str(cells.get("A", "")).isdigit():
            continue
        analyte = cells["D"].rsplit(", ", 1)[0]
        key = (cells["A"], analyte)
        if key in rows:
            raise ValueError(f"Duplicate supplement group {key}")
        rows[key] = {**cells, "xlsx_row": element.get("r")}
    if len(rows) != 6449:
        raise ValueError(f"Incomplete supplement: {len(rows)} groups, expected 6449")
    return rows


def reconcile(group, published):
    """Validate counts and extrema; report rounded mean/SD differences separately."""
    values = [number(row["Concentration"]) for row in group]
    detects = sum(value != 0 for value in values)
    if len(values) != int(published["C"]) or detects != int(published["E"]) or len(values) - detects != int(published["F"]):
        raise ValueError(f"FDA source count disagreement for food {group[0]['TDSFoodNumber']} {group[0]['Analyte']}")
    for code, value in (("I", min(values)), ("J", max(values))):
        expected = "ND" if value == 0 else published[code]
        if expected == "ND":
            if published[code] != "ND":
                raise ValueError(f"FDA censor/extrema disagreement: {published}")
        elif not math.isclose(value, number(published[code]), rel_tol=0, abs_tol=0.51 if value >= 10 else 0.051):
            raise ValueError(f"FDA extrema disagreement {value} != {published[code]}: {published}")
    return "counts_and_extrema_verified"


def derive(raw_rows, supplement, routes):
    groups = defaultdict(list)
    samples = []
    route_gaps = []
    for line, row in enumerate(raw_rows, 2):
        food, analyte = row["TDSFoodNumber"], row["Analyte"]
        route = routes.get(food)
        if not route:
            raise ValueError(f"Missing explicit route/disposition for food {food}")
        if row["Units"] not in {"ppm", "ppb"}:
            raise ValueError(f"Unknown unit: {row['Units']}")
        factor = 1000 if row["Units"] == "ppm" else 1
        concentration = number(row["Concentration"]) * factor
        reporting_limit = number(row["ReportingLimit"]) * factor
        nd = concentration == 0
        identity_fields = [row[key] for key in ["FiscalYear", "CalendarYear", "Collection", "TDSFoodNumber", "Season", "TDSFoodListType", "Region"]]
        identity = "fda-tds-" + hashlib.sha256("|".join(identity_fields).encode()).hexdigest()[:20]
        disposition = route.get("route_disposition") or ("ingredient_destination" if route.get("ingredient_slug") else "source_documented_gap")
        samples.append(dict(zip(SAMPLE_COLUMNS, [
            SOURCE, row["FiscalYear"], row["CalendarYear"], row["Collection"], food, row["TDSFoodDescription"], route.get("ingredient_slug", ""), route.get("ingredient_label", ""), row["Season"], row["TDSFoodListType"], row["Region"], analyte, slug(analyte), SPECIES.get(analyte, ""), row["Units"], row["Concentration"], row["ReportingLimit"], concentration, reporting_limit,
            food_basis(row["TDSFoodDescription"]),
            "FDA zero code = non-detect; lower bound 0; upper bound reporting limit" if nd else "FDA-reported detected concentration; administrative reporting limit retained",
            line, identity, "non_detect" if nd else "detected", concentration, reporting_limit if nd else concentration, disposition,
        ])))
        groups[(food, analyte)].append(row)
    summary_rows = []
    source_statistic_differences = []
    for (food, analyte), group in sorted(groups.items(), key=lambda pair: (int(pair[0][0]), pair[0][1])):
        route = routes[food]
        factor = 1000 if group[0]["Units"] == "ppm" else 1
        values = [number(row["Concentration"]) * factor for row in group]
        limits = [number(row["ReportingLimit"]) * factor for row in group]
        upper = [limit if value == 0 else value for value, limit in zip(values, limits)]
        detects = [value for value in values if value != 0]
        count, nd_count = len(values), len(values) - len(detects)
        published = supplement.get((food, analyte))
        if published is None and analyte not in SPECIATION:
            raise ValueError(f"Missing primary summary for regular-analyte group {(food, analyte)}")
        state = reconcile(group, published) if published else "speciation_not_tabulated_in_supplement"
        censoring = "all_non_detect" if nd_count == count else "partially_censored" if nd_count else "none"
        record = {
            "source_id": SOURCE, "tds_food_number": food, "tds_food_description": group[0]["TDSFoodDescription"], "ingredient_slug": route.get("ingredient_slug", ""), "ingredient_label": route.get("ingredient_label", ""), "analyte": analyte, "analyte_slug": slug(analyte), "metal_species": SPECIES.get(analyte, ""), "units_original": group[0]["Units"], "normalized_unit": "ppb_equivalent", "n": count, "reported_zero_n": nd_count,
            "min_ppb_equivalent": min(values), "max_ppb_equivalent": max(values), "reporting_limit_min_ppb_equivalent": min(limits), "reporting_limit_max_ppb_equivalent": max(limits),
            "basis": food_basis(group[0]["TDSFoodDescription"]),
            "review_state": "primary_reconciled", "notes": "Source-scope occurrence summary; legacy percentile/min/max columns use ND=0 lower-bound substitution, not measured zero. Upper bounds substitute each ND reporting limit. Linear-interpolated descriptive percentiles; not pooled standards. Sample unit is a composite, not an individual brand/lot.",
            "detected_n": len(detects), "non_detect_n": nd_count, "censoring": censoring, "statistic_basis": "source_scope_lower_bound_ND_zero; paired_upper_bound_ND_reporting_limit",
            "mean_lower_bound_ppb": statistics.mean(values), "sd_lower_bound_ppb": statistics.stdev(values) if count > 1 else None, "mean_upper_bound_ppb": statistics.mean(upper), "sd_upper_bound_ppb": statistics.stdev(upper) if count > 1 else None,
            "min_upper_bound_ppb": min(upper), "max_upper_bound_ppb": max(upper), "min_detected_ppb": min(detects) if detects else None, "max_detected_ppb": max(detects) if detects else None,
            "source_summary_reconciliation": state, "route_disposition": route.get("route_disposition") or ("ingredient_destination" if route.get("ingredient_slug") else "source_documented_gap"),
        }
        for percent in [10, 50, 90, 95]:
            record[f"p{percent}_ppb_equivalent"] = percentile(values, percent / 100)
            record[f"p{percent}_upper_bound_ppb"] = percentile(upper, percent / 100)
        if published:
            for target, original in {"n": "C", "detected_n": "E", "non_detect_n": "F", "mean_original": "G", "sd_original": "H", "min_original": "I", "max_original": "J", "reporting_limit_original": "K"}.items():
                record[f"source_reported_{target}"] = published[original]
            record["source_summary_xlsx_row"] = published["xlsx_row"]
            for stat, original in [("mean", "G"), ("sd", "H")]:
                source_value = published[original]
                if source_value not in {"N/A", "ND", ""}:
                    record[f"source_reported_{stat}_ppb"] = number(source_value) * factor
                    computed = record[f"{stat}_lower_bound_ppb"]
                    # FDA rounds >=10 to integer and smaller values to 2 sig figs.
                    raw_computed = computed / factor if computed is not None else None
                    if raw_computed is not None:
                        tolerance = 0.51 if abs(number(source_value)) >= 10 else (10 ** (math.floor(math.log10(abs(number(source_value)))) - 1) / 2 + 1e-9 if number(source_value) else 1e-9)
                        if abs(raw_computed - number(source_value)) > tolerance:
                            source_statistic_differences.append({"source_id": SOURCE, "tds_food_number": food, "analyte": analyte, "statistic": stat, "source_reported_original": source_value, "recomputed_original": fmt(raw_computed), "unit": group[0]["Units"], "source_xlsx_row": published["xlsx_row"], "disposition": "both_retained_source_rounding_or_calculation_difference; source_reported_value_not_overwritten"})
        summary_rows.append(record)
    if set(supplement) - set(groups):
        raise ValueError("Unreconciled FDA supplement groups")
    for food, route in routes.items():
        destination = route.get("ingredient_page", "")
        if not destination or not (ROOT / destination).is_file():
            route_gaps.append({"source_id": SOURCE, "tds_food_number": food, "tds_food_description": route["tds_food_description"], "destination": destination, "disposition": "destination_stub_required" if destination else "source_documented_gap", "reason": route.get("route_rationale") or "Create exact prepared-food destination before route promotion"})
    return samples, summary_rows, route_gaps, source_statistic_differences


def build(check=False):
    raw_content = verified_input("analytical-results.txt")
    supplement_content = verified_input("summary-of-analytical-results.xlsx")
    rows = [{key: value.strip() for key, value in row.items()} for row in csv.DictReader(io.StringIO(raw_content.decode("cp1252")), delimiter="\t")]
    if len(rows) != 68993 or len({row["TDSFoodNumber"] for row in rows}) != 307:
        raise ValueError("FDA source fails official reporting-cycle count reconciliation")
    identities = [(row["FiscalYear"], row["CalendarYear"], row["Collection"], row["TDSFoodNumber"], row["Region"], row["Analyte"]) for row in rows]
    if len(identities) != len(set(identities)):
        raise ValueError("Duplicate FDA analytical identities")
    route_path = EVIDENCE / f"{PREFIX}ingredient_routes.csv"
    route_rows = list(csv.DictReader(route_path.open()))
    routes = {row["tds_food_number"]: row for row in route_rows}
    if len(routes) != len(route_rows) or set(routes) != {row["TDSFoodNumber"] for row in rows}:
        raise ValueError(f"FDA requires exactly one explicit route for each of 307 foods; found {len(routes)}")
    supplement = read_supplement(supplement_content)
    samples, summaries, gaps, differences = derive(rows, supplement, routes)
    outputs = {
        f"{PREFIX}element_results_samples.csv": csv_bytes(samples, SAMPLE_COLUMNS),
        f"{PREFIX}summary_by_food_analyte.csv": csv_bytes(summaries, SUMMARY_COLUMNS),
        f"{PREFIX}routing_gaps.csv": csv_bytes(gaps, "source_id tds_food_number tds_food_description destination disposition reason".split()),
        f"{PREFIX}source_statistic_differences.csv": csv_bytes(differences, "source_id tds_food_number analyte statistic source_reported_original recomputed_original unit source_xlsx_row disposition".split()),
        f"{PREFIX}source_context_dispositions.csv": csv_bytes([{
            "source_id": SOURCE, "companion_source_id": "fda-tds-elements-2018-2020", "tds_food_number": "75", "analyte": "Total inorganic arsenic", "primary_record_values_ppb": "85.8;90.4;103", "n": "3", "companion_location": "FDA narrative report page 20, section 4.1.2", "companion_claim": "range lower endpoint 8.9 ppb", "disposition": "primary_analytical_records_take_precedence; narrative_discrepancy_retained; no_raw_source_altered",
        }], "source_id companion_source_id tds_food_number analyte primary_record_values_ppb n companion_location companion_claim disposition".split()),
    }
    source_records = [{"path": f"{RAW}/{name}", "sha256": checksum, "url": url, "retrieved_date": "2026-09-10", "bytes": len(raw_content if name.endswith("txt") else supplement_content)} for name, (checksum, url) in INPUTS.items()]
    report = {"source_id": SOURCE, "schema_version": 2, "review_state": "primary_reconciled", "raw_sources": source_records, "official_result_rows": 68993, "normalized_result_rows": len(samples), "official_food_count": 307, "routed_food_count": len(routes), "composite_samples": len({row["sample_id"] for row in samples}), "analytes": sorted({row["analyte"] for row in samples}), "summary_groups": len(summaries), "published_supplement_groups_verified": len(supplement), "speciation_results": sum(row["analyte"] in SPECIATION for row in samples), "inorganic_arsenic_results": sum(row["metal_species"] == "iAs" for row in samples), "source_statistic_differences_retained": len(differences), "routing_gap_count": len(gaps), "censoring_counts": dict(sorted(Counter(row["result_status"] for row in samples).items())), "scope": "FY2018-FY2020 US-market prepared-food composites; each food and analyte kept separate", "percentile_method": "linear interpolation (n-1)*p; source-scope lower bound ND=0 and upper bound ND=per-result reporting limit", "artifacts": {name: {"sha256": hashlib.sha256(content).hexdigest(), "bytes": len(content)} for name, content in outputs.items()}}
    route_content = route_path.read_bytes()
    report["artifacts"][route_path.name] = {"sha256": hashlib.sha256(route_content).hexdigest(), "bytes": len(route_content)}
    report["verification_mode"] = "primary_source_reconciliation"
    report["primary_verification_command"] = "python3 tools/evidence/build-fda-tds-evidence.py --check"
    report["generated_verification_command"] = "node tools/evidence/check-fda-tds-generated.mjs --check-generated"
    outputs[f"{PREFIX}reconciliation.json"] = (json.dumps(report, indent=2, ensure_ascii=False) + "\n").encode()
    mismatches = []
    for name, content in outputs.items():
        for directory in [EVIDENCE, ROOT / "wiki/static/data"]:
            target = directory / name
            if check:
                if not target.exists() or target.read_bytes() != content:
                    mismatches.append(str(target.relative_to(ROOT)))
            else:
                directory.mkdir(parents=True, exist_ok=True)
                target.write_bytes(content)
    public_routes = ROOT / "wiki/static/data" / route_path.name
    if check:
        if not public_routes.exists() or public_routes.read_bytes() != route_path.read_bytes():
            mismatches.append(str(public_routes.relative_to(ROOT)))
    else:
        public_routes.write_bytes(route_path.read_bytes())
    if mismatches:
        raise ValueError("FDA generated outputs stale: " + ", ".join(mismatches))
    print(json.dumps({key: report[key] for key in ["normalized_result_rows", "routed_food_count", "composite_samples", "summary_groups", "published_supplement_groups_verified", "inorganic_arsenic_results", "routing_gap_count", "source_statistic_differences_retained"]}, indent=2))
    supersede_heuristics(check)


def supersede_heuristics(check=False):
    """Retain an audit of obsolete narrative extraction, never duplicate it as data.

    Preserve unrelated CSV records byte-for-byte, including original line endings.
    The complete per-food primary register supersedes prose-derived rows that
    mixed foods, attached dataset-global N, or parsed next-highest as maximum.
    """
    audit_path = EVIDENCE / f"{PREFIX}superseded_heuristic_rows.csv"
    audit_columns = ["source_file", "source_id", "original_record_json", "disposition", "replacement_path"]
    audit = list(csv.DictReader(audit_path.open())) if audit_path.exists() else []
    recorded = {(row["source_file"], row["original_record_json"]) for row in audit}
    for name in ["category1_autonomy_extracted_summary.csv", "category1_autonomy_matrix_routed_summary.csv"]:
        file = EVIDENCE / name
        with file.open(newline="") as handle:
            original = handle.read()
        lines = original.splitlines(keepends=True)
        reader = csv.reader(io.StringIO(original, newline=""))
        headers = next(reader)
        previous = reader.line_num
        retained = lines[:previous]
        removed = 0
        for values in reader:
            segment = lines[previous:reader.line_num]
            previous = reader.line_num
            row = dict(zip(headers, values))
            if row.get("source_id") not in {SOURCE, "fda-tds-elements-2018-2020"}:
                retained.extend(segment)
                continue
            removed += 1
            payload = json.dumps(row, ensure_ascii=False, sort_keys=True)
            if (name, payload) not in recorded:
                audit.append({"source_file": name, "source_id": row["source_id"], "original_record_json": payload, "disposition": "superseded_by_complete_primary_extraction; prose_bound_global_n_and_next_highest_not_admitted", "replacement_path": f"data/evidence/{PREFIX}summary_by_food_analyte.csv"})
                recorded.add((name, payload))
        if check and removed:
            raise ValueError(f"{removed} obsolete FDA heuristic rows regenerated in {name}")
        if not check and removed:
            with file.open("w", newline="") as handle:
                handle.write("".join(retained))
            print(f"Superseded {removed} FDA narrative-derived rows in {name}; original rows retained in audit")
    if not check:
        audit_path.write_bytes(csv_bytes(audit, audit_columns))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Reconcile primary sources and fail on stale outputs without writing")
    options = parser.parse_args()
    try:
        build(check=options.check)
    except (ValueError, OSError) as error:
        print(f"FDA TDS reconciliation failed: {error}", file=sys.stderr)
        sys.exit(1)
