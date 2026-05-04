#!/usr/bin/env node

import crypto from "node:crypto";
import childProcess from "node:child_process";
import fs from "node:fs";
import https from "node:https";
import path from "node:path";

const PROJECT_ROOT =
  process.env.HMI_WIKI_PROJECT_ROOT ||
  "/Users/karenpendergrass/Documents/Claude/Projects/Heavy Metal Data Index_archive_2026-04-27";
const TODAY = process.env.HMI_DATE || new Date().toISOString().slice(0, 10);
const SOURCE_ID = "who-gemsfood-heavy-metal-contaminants";
const SOURCE_LINK = `[[sources/${SOURCE_ID}]]`;
const GEMS_SEARCH_URL = "https://extranet.who.int/gemsfood/Search.aspx";
const GEMS_ACCESS_URL = "https://extranet.who.int/gemsfood/?DisplayFormat=1";
const WHO_PROGRAM_URL =
  "https://www.who.int/teams/nutrition-and-food-safety/databases/global-environment-monitoring-system-food-contamination";
const GEMS_REGIONS = ["AFRO", "CCNE", "EMRO", "EU", "EURO", "PAHO", "SEARO", "WPRO"];
const DEFAULT_YEAR_START = 1900;
const DEFAULT_YEAR_END = Number(TODAY.slice(0, 4));
const EXTREME_VALUE_REVIEW_UG_KG = 10000000;

const rawDirRel = "raw/reports/gemsfood-contaminants";
const samplesRel = `${rawDirRel}/normalized/who_gemsfood_heavy_metals_samples.csv`;
const summaryRel = "data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv";
const exportsRel = "data/evidence/who_gemsfood_heavy_metals_raw_exports.csv";
const sourcePageRel = `wiki/sources/${SOURCE_ID}.md`;

const HMI_CONTAMINANTS = [
  "Aluminium",
  "Arsenic (inorganic)",
  "Arsenic (organic)",
  "Arsenic (total)",
  "Arsenic (Dimethylarsinic acid)",
  "Arsenic (Monomethylarsonic Acid)",
  "Cadmium",
  "Chromium",
  "Cr",
  "Lead",
  "Mercury",
  "Mercury (inorganic)",
  "Methyl mercury",
  "Total mercury",
  "Nickel",
  "Ni",
  "Tin",
  "Uranium",
];

const BROAD_METAL_CONTAMINANTS = [
  ...HMI_CONTAMINANTS,
  "Antimony",
  "Sb",
  "Barium",
  "Ba",
  "Beryllium",
  "Bismuth",
  "Boron",
  "Cobalt",
  "Co",
  "Copper",
  "Gallium",
  "Germanium",
  "Lanthanum",
  "Lithium",
  "Manganese",
  "Mn",
  "Molybdenum",
  "Selenium",
  "Se",
  "Silver",
  "Strontium",
  "Sr",
  "Tellurium",
  "Thallium",
  "Vanadium",
  "V",
  "Yttrium",
  "Zinc",
];

const CONTAMINANT_META = new Map([
  ["Aluminium", ["Al", "aluminum_total"]],
  ["Arsenic (inorganic)", ["iAs", "inorganic_arsenic"]],
  ["Arsenic (organic)", ["oAs", "organic_arsenic_noncanonical"]],
  ["Arsenic (total)", ["tAs", "total_arsenic"]],
  ["Arsenic (Dimethylarsinic acid)", ["DMA", "arsenic_species_noncanonical"]],
  ["Arsenic (Monomethylarsonic Acid)", ["MMA", "arsenic_species_noncanonical"]],
  ["Cadmium", ["Cd", "cadmium"]],
  ["Chromium", ["Cr", "total_chromium_not_cr_vi"]],
  ["Cr", ["Cr", "total_chromium_not_cr_vi"]],
  ["Lead", ["Pb", "lead"]],
  ["Mercury", ["Hg_unspecified", "mercury_speciation_review"]],
  ["Mercury (inorganic)", ["iHg", "inorganic_mercury_noncanonical"]],
  ["Methyl mercury", ["MeHg", "methylmercury"]],
  ["Total mercury", ["tHg", "total_mercury"]],
  ["Nickel", ["Ni", "nickel"]],
  ["Ni", ["Ni", "nickel"]],
  ["Tin", ["Sn", "tin"]],
  ["Uranium", ["U", "uranium"]],
  ["Antimony", ["Sb", "antimony"]],
  ["Sb", ["Sb", "antimony"]],
  ["Barium", ["Ba", "barium"]],
  ["Ba", ["Ba", "barium"]],
  ["Beryllium", ["Be", "beryllium"]],
  ["Bismuth", ["Bi", "bismuth"]],
  ["Boron", ["B", "boron"]],
  ["Cobalt", ["Co", "cobalt"]],
  ["Co", ["Co", "cobalt"]],
  ["Copper", ["Cu", "copper"]],
  ["Gallium", ["Ga", "gallium"]],
  ["Germanium", ["Ge", "germanium"]],
  ["Lanthanum", ["La", "lanthanum"]],
  ["Lithium", ["Li", "lithium"]],
  ["Manganese", ["Mn", "manganese"]],
  ["Mn", ["Mn", "manganese"]],
  ["Molybdenum", ["Mo", "molybdenum"]],
  ["Selenium", ["Se", "selenium"]],
  ["Se", ["Se", "selenium"]],
  ["Silver", ["Ag", "silver"]],
  ["Strontium", ["Sr", "strontium"]],
  ["Sr", ["Sr", "strontium"]],
  ["Tellurium", ["Te", "tellurium"]],
  ["Thallium", ["Tl", "thallium"]],
  ["Vanadium", ["V", "vanadium"]],
  ["V", ["V", "vanadium"]],
  ["Yttrium", ["Y", "yttrium"]],
  ["Zinc", ["Zn", "zinc"]],
]);

const SAMPLE_HEADERS = [
  "source_id",
  "record_key",
  "raw_export_file",
  "record_type",
  "region_code",
  "region_name",
  "contaminant_name",
  "contaminant_slug",
  "metal_species",
  "metal_review_note",
  "food_category",
  "food_name",
  "food_code",
  "local_food_name",
  "food_state",
  "result_text",
  "result_kind",
  "unit_original",
  "value_original",
  "normalized_value_ug_kg",
  "lower_bound_value_ug_kg",
  "censoring_limit_ug_kg",
  "lod_original",
  "lod_ug_kg",
  "loq_original",
  "loq_ug_kg",
  "year",
  "year_review_state",
  "representativeness",
  "lab_number",
  "food_origin",
  "analytical_qa",
  "result_basis_original",
  "basis",
  "portion_type",
  "serial_number",
  "value_review_state",
  "unit_review_state",
];
const GEMS_CSV_PREFIX = "RecordType,";

const SUMMARY_HEADERS = [
  "source_id",
  "contaminant_name",
  "contaminant_slug",
  "metal_species",
  "region_name",
  "food_category",
  "food_name",
  "food_code",
  "food_state",
  "result_basis_original",
  "basis",
  "unit_normalized",
  "n_rows",
  "n_numeric_or_censored",
  "n_non_detect",
  "n_left_censored",
  "n_unit_review",
  "n_value_review",
  "n_year_review",
  "year_min",
  "year_max",
  "p10_lower_bound_ug_kg",
  "p50_lower_bound_ug_kg",
  "p90_lower_bound_ug_kg",
  "p95_lower_bound_ug_kg",
  "max_lower_bound_ug_kg",
  "lod_min_ug_kg",
  "loq_min_ug_kg",
  "loq_max_ug_kg",
  "food_origins",
  "analytical_qa_values",
];

function usage() {
  return `Usage:
  node scripts/ingest-gemsfood-heavy-metals.mjs --input "/path/to/export.csv"
  node scripts/ingest-gemsfood-heavy-metals.mjs --input-dir "/path/to/gems-csvs"
  node scripts/ingest-gemsfood-heavy-metals.mjs --download --profile hmi

Options:
  --project-root <path>       HMI wiki project root. Defaults to HMI_WIKI_PROJECT_ROOT or the local archive path.
  --input <path>              CSV file to ingest. May be repeated.
  --input-dir <path>          Directory of CSV exports to ingest.
  --download                  Download exports from WHO GEMS/Food before ingesting.
  --profile <hmi|broad>       Contaminant download profile. Default: hmi.
  --contaminant <name>        Contaminant query to download. May be repeated.
  --contaminants <a,b,c>      Comma-separated contaminant queries to download.
  --raw-dir <path>            Directory for raw exports. Defaults to project raw/reports/gemsfood-contaminants.
  --max-whole-pages <n>       Whole-contaminant export page threshold before region chunking. Default: 3000.
  --max-chunk-pages <n>       Region export page threshold before region/year chunking. Default: 3000.
  --year-start <yyyy>         First year for region/year fallback. Default: 1900.
  --year-end <yyyy>           Last year for region/year fallback. Default: current year.
  --no-wiki                   Only write raw/data files, not wiki/index/log pages.
  --help                      Show this help.
`;
}

function parseArgs(argv) {
  const args = {
    projectRoot: PROJECT_ROOT,
    inputs: [],
    inputDirs: [],
    download: false,
    profile: "hmi",
    contaminants: [],
    rawDir: null,
    writeWiki: true,
    maxWholePages: 3000,
    maxChunkPages: 3000,
    yearStart: DEFAULT_YEAR_START,
    yearEnd: DEFAULT_YEAR_END,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => {
      i += 1;
      if (i >= argv.length) throw new Error(`Missing value for ${arg}`);
      return argv[i];
    };
    if (arg === "--help" || arg === "-h") {
      console.log(usage());
      process.exit(0);
    } else if (arg === "--project-root") args.projectRoot = next();
    else if (arg === "--input") args.inputs.push(next());
    else if (arg === "--input-dir") args.inputDirs.push(next());
    else if (arg === "--download") args.download = true;
    else if (arg === "--profile") args.profile = next();
    else if (arg === "--contaminant") args.contaminants.push(next());
    else if (arg === "--contaminants") args.contaminants.push(...next().split(",").map((s) => s.trim()).filter(Boolean));
    else if (arg === "--raw-dir") args.rawDir = next();
    else if (arg === "--max-whole-pages") args.maxWholePages = Number(next());
    else if (arg === "--max-chunk-pages") args.maxChunkPages = Number(next());
    else if (arg === "--year-start") args.yearStart = Number(next());
    else if (arg === "--year-end") args.yearEnd = Number(next());
    else if (arg === "--no-wiki") args.writeWiki = false;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (!Number.isInteger(args.maxWholePages) || args.maxWholePages < 1) throw new Error("--max-whole-pages must be a positive integer");
  if (!Number.isInteger(args.maxChunkPages) || args.maxChunkPages < 1) throw new Error("--max-chunk-pages must be a positive integer");
  if (!Number.isInteger(args.yearStart) || !Number.isInteger(args.yearEnd) || args.yearStart > args.yearEnd) {
    throw new Error("--year-start/--year-end must be a valid ascending year range");
  }
  return args;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function fileStartsWith(file, prefix) {
  const fd = fs.openSync(file, "r");
  try {
    const buffer = Buffer.alloc(Buffer.byteLength(prefix));
    fs.readSync(fd, buffer, 0, buffer.length, 0);
    return buffer.toString("utf8") === prefix;
  } finally {
    fs.closeSync(fd);
  }
}

function isNonemptyGemsCsv(file) {
  return fs.existsSync(file) && fs.statSync(file).size > 300 && fileStartsWith(file, GEMS_CSV_PREFIX);
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, `${String(content).replace(/\s+$/u, "")}\n`);
}

function copyFile(source, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(source, dest);
}

function sha256File(file) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(file));
  return hash.digest("hex");
}

function sha256Text(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/gu, " and ")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-|-$/gu, "")
    .replace(/-{2,}/gu, "-");
}

function csvCell(value) {
  const s = value == null ? "" : String(value);
  return /[",\n]/u.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
}

function writeCsv(file, rows, headers) {
  ensureDir(path.dirname(file));
  const fd = fs.openSync(file, "w");
  try {
    fs.writeSync(fd, `${headers.join(",")}\n`);
    for (const row of rows) {
      fs.writeSync(fd, `${headers.map((h) => csvCell(row[h])).join(",")}\n`);
    }
  } finally {
    fs.closeSync(fd);
  }
}

function parseCsv(text) {
  const rows = [];
  let field = "";
  let row = [];
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') quoted = false;
      else field += ch;
      continue;
    }
    if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (ch !== "\r") field += ch;
  }
  if (row.length || field) {
    row.push(field);
    rows.push(row);
  }
  if (!rows.length) return [];
  const headers = rows.shift();
  return rows
    .filter((r) => r.some((v) => String(v).trim() !== ""))
    .map((r) => Object.fromEntries(headers.map((h, i) => [h, r[i] ?? ""])));
}

function htmlDecode(s) {
  return String(s)
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function hiddenInputs(html) {
  const params = new URLSearchParams();
  for (const m of html.matchAll(/<input[^>]+type="hidden"[^>]*>/giu)) {
    const tag = m[0];
    const name = tag.match(/\bname="([^"]+)"/iu)?.[1];
    const value = tag.match(/\bvalue="([^"]*)"/iu)?.[1] || "";
    if (name) params.set(name, htmlDecode(value));
  }
  return params;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function httpRequestOnce(url, options = {}, body = null) {
  return new Promise((resolve, reject) => {
    const { timeoutMs = 180000, ...requestOptions } = options;
    const req = https.request(url, requestOptions, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks),
        });
      });
    });
    req.on("error", reject);
    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error(`Request timed out after ${timeoutMs}ms: ${url}`));
    });
    if (body) req.write(body);
    req.end();
  });
}

async function httpRequest(url, options = {}, body = null, attempts = 4) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await httpRequestOnce(url, options, body);
    } catch (error) {
      lastError = error;
      if (attempt === attempts) break;
      await sleep(1000 * attempt);
    }
  }
  throw lastError;
}

function cookieHeader(setCookie) {
  const values = Array.isArray(setCookie) ? setCookie : [setCookie].filter(Boolean);
  return values.map((s) => s.split(";")[0]).join("; ");
}

function searchUrl(contaminant, filter = {}) {
  const params = new URLSearchParams({
    mode: "2",
    searchtype: "0",
    viewtype: "0",
    contaminant,
  });
  if (filter.region) params.set("region", filter.region);
  if (filter.start) params.set("start", String(filter.start));
  if (filter.end) params.set("end", String(filter.end));
  return `${GEMS_SEARCH_URL}?${params.toString()}`;
}

function filterSlug(filter = {}) {
  return [filter.region, filter.start && filter.end ? `${filter.start}-${filter.end}` : ""].filter(Boolean).join("-");
}

function rawExportPath(contaminant, rawDir, filter = {}) {
  const suffix = filterSlug(filter);
  return path.join(rawDir, `who-gemsfood-${slugify(contaminant)}${suffix ? `-${slugify(suffix)}` : ""}-${TODAY}.csv`);
}

function pageCount(html) {
  const text = String(html);
  if (!text.includes('id="ctl00_MainContent_defaultSearchResult_grdResults"')) return 0;
  const match = text.match(/ctl00_MainContent_ctlPager_lblPgCurrent[^>]*>\s*1\s+of\s+([0-9,]+)/iu);
  if (match) return Number(match[1].replaceAll(",", ""));
  return 1;
}

async function getSearch(contaminant, filter = {}) {
  const url = searchUrl(contaminant, filter);
  const get = await httpRequest(url, {
    method: "GET",
    headers: { "User-Agent": "HeavyMetalIndex/1.0 evidence ingest" },
  });
  if (get.statusCode !== 200) throw new Error(`GET failed for ${contaminant}: ${get.statusCode}`);
  return { ...get, url };
}

async function downloadContaminant(contaminant, rawDir, filter = {}) {
  const file = rawExportPath(contaminant, rawDir, filter);
  if (isNonemptyGemsCsv(file)) {
    process.stderr.write(`Using existing GEMS/Food export: ${path.basename(file)}\n`);
    return file;
  }
  const get = await getSearch(contaminant, filter);
  const url = get.url;
  const html = get.body.toString("utf8");
  const params = hiddenInputs(html);
  params.set("__EVENTTARGET", "ctl00$MainContent$btnExport2XLSX");
  params.set("__EVENTARGUMENT", "");
  params.set("ctl00$MainContent$hfSearchMode", "2");
  params.set("ctl00$MainContent$defaultSearchForm$ctlContaminant", contaminant);
  if (filter.region) params.set("ctl00$MainContent$defaultSearchForm$ctlRegion", filter.region);
  if (filter.start) params.set("ctl00$MainContent$defaultSearchForm$ctlStart", String(filter.start));
  if (filter.end) params.set("ctl00$MainContent$defaultSearchForm$ctlEnd", String(filter.end));
  params.set("ctl00$MainContent$ctlPager$ctlPgSize", "20");
  const body = params.toString();
  const post = await httpRequest(
    url,
    {
      method: "POST",
      headers: {
        "User-Agent": "HeavyMetalIndex/1.0 evidence ingest",
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(body),
        Cookie: cookieHeader(get.headers["set-cookie"]),
      },
    },
    body,
  );
  const contentType = String(post.headers["content-type"] || "");
  const text = post.body.toString("utf8");
  if (post.statusCode !== 200 || !contentType.includes("text/csv") || !text.startsWith(GEMS_CSV_PREFIX)) {
    const failure = path.join("/private/tmp", `gemsfood-export-failure-${slugify(contaminant)}-${slugify(filterSlug(filter) || "whole")}.html`);
    write(failure, text);
    throw new Error(
      `CSV export failed for ${contaminant}${filterSlug(filter) ? ` (${filterSlug(filter)})` : ""}: status=${post.statusCode}, content-type=${contentType}; saved ${failure}`,
    );
  }
  write(file, text);
  return file;
}

async function downloadContaminantSmart(contaminant, rawDir, args) {
  const get = await getSearch(contaminant);
  const pages = pageCount(get.body.toString("utf8"));
  if (!pages) {
    process.stderr.write(`No GEMS/Food rows visible for ${contaminant}; skipping.\n`);
    return [];
  }
  if (pages <= args.maxWholePages) {
    return [await downloadContaminant(contaminant, rawDir)];
  }

  process.stderr.write(`Chunking ${contaminant}: ${pages.toLocaleString("en-US")} result pages exceed ${args.maxWholePages}.\n`);
  const files = [];
  for (const region of GEMS_REGIONS) {
    const regionGet = await getSearch(contaminant, { region });
    const regionPages = pageCount(regionGet.body.toString("utf8"));
    if (!regionPages) continue;
    if (regionPages <= args.maxChunkPages) {
      process.stderr.write(`Downloading ${contaminant} region ${region}: ${regionPages.toLocaleString("en-US")} pages.\n`);
      files.push(await downloadContaminant(contaminant, rawDir, { region }));
      continue;
    }

    process.stderr.write(`Chunking ${contaminant} region ${region}: ${regionPages.toLocaleString("en-US")} pages.\n`);
    for (let year = args.yearStart; year <= args.yearEnd; year += 1) {
      if ((year - args.yearStart) % 25 === 0) {
        const end = Math.min(args.yearEnd, year + 24);
        process.stderr.write(`Scanning ${contaminant} ${region} years ${year}-${end}.\n`);
      }
      const filter = { region, start: year, end: year };
      const yearGet = await getSearch(contaminant, filter);
      const yearPages = pageCount(yearGet.body.toString("utf8"));
      if (!yearPages) continue;
      process.stderr.write(`Downloading ${contaminant} ${region} ${year}: ${yearPages.toLocaleString("en-US")} pages.\n`);
      files.push(await downloadContaminant(contaminant, rawDir, filter));
    }
  }
  return files;
}

function contaminantList(args) {
  if (args.contaminants.length) return [...new Set(args.contaminants)];
  if (args.profile === "hmi") return HMI_CONTAMINANTS;
  if (args.profile === "broad") return [...new Set(BROAD_METAL_CONTAMINANTS)];
  throw new Error(`Unknown profile ${args.profile}`);
}

function numeric(value) {
  const s = String(value ?? "").trim();
  if (!s) return null;
  const n = Number(s.replaceAll(",", ""));
  return Number.isFinite(n) ? n : null;
}

function parseResult(value) {
  const s = String(value ?? "").trim();
  if (!s) return { kind: "missing", value: null, censoringLimit: null };
  if (/^(ND|N\.D\.|not detected|non-detect)$/iu.test(s)) {
    return { kind: "non_detect", value: null, censoringLimit: null };
  }
  const left = s.match(/^<\s*([0-9]+(?:\.[0-9]+)?(?:e[-+]?\d+)?)$/iu);
  if (left) return { kind: "left_censored", value: null, censoringLimit: Number(left[1]) };
  const le = s.match(/^<=\s*([0-9]+(?:\.[0-9]+)?(?:e[-+]?\d+)?)$/iu);
  if (le) return { kind: "left_censored", value: null, censoringLimit: Number(le[1]) };
  const n = numeric(s);
  if (n != null) return { kind: "numeric", value: n, censoringLimit: null };
  return { kind: "text", value: null, censoringLimit: null };
}

function unitFactorToUgKg(unit) {
  const u = String(unit ?? "").trim().toLowerCase().replaceAll("µ", "u").replace(/\s+/gu, "");
  if (["ug/kg", "mcg/kg", "ppb"].includes(u)) return 1;
  if (["mg/kg", "ppm"].includes(u)) return 1000;
  if (["ng/g"].includes(u)) return 1;
  if (["ug/g", "mcg/g"].includes(u)) return 1000;
  if (["ng/kg"].includes(u)) return 0.001;
  return null;
}

function norm(value, factor) {
  if (value == null || factor == null) return "";
  return fmt(value * factor);
}

function basis(value) {
  const s = String(value ?? "").trim();
  if (!s) return "not_reported";
  if (/as consumed/iu.test(s)) return "as_consumed";
  if (/as is/iu.test(s)) return "as_is";
  if (/dry/iu.test(s)) return "dry_weight";
  if (/wet/iu.test(s)) return "wet_weight";
  if (/reconstit/iu.test(s)) return "reconstituted";
  return slugify(s) || "not_reported";
}

function yearReviewState(year) {
  const n = numeric(year);
  if (n == null) return "missing_year";
  if (n > Number(TODAY.slice(0, 4))) return "future_year_review";
  if (n < 1900) return "pre_1900_review";
  return "ok";
}

function valueReviewState(lowerBound) {
  const n = numeric(lowerBound);
  if (n == null) return "ok";
  return n > EXTREME_VALUE_REVIEW_UG_KG ? "extreme_value_review" : "ok";
}

function metalMeta(contaminant) {
  const exact = CONTAMINANT_META.get(contaminant);
  if (exact) return { metal: exact[0], note: exact[1] };
  return { metal: "", note: "unmapped_contaminant_review" };
}

function rowKey(row) {
  return [
    row.SerialNumber,
    row.ContaminantName,
    row.RegionCode,
    row.FoodCode,
    row.LocalFoodName,
    row.ResultText,
    row.UnitName,
    row.Year,
  ]
    .map((v) => String(v ?? "").trim())
    .join("|");
}

function normalizeRows(files, root) {
  const out = [];
  const seen = new Set();
  const exports = [];
  for (const file of files) {
    const text = read(file);
    if (!text.startsWith(GEMS_CSV_PREFIX)) throw new Error(`Not a GEMS/Food CSV export: ${file}`);
    const rows = parseCsv(text);
    const sha = sha256File(file);
    exports.push({
      source_id: SOURCE_ID,
      contaminant_query: inferContaminantFromRows(rows) || "",
      raw_path: path.relative(root, file).replaceAll(path.sep, "/"),
      rows: rows.length,
      sha256: sha,
      access_url: GEMS_SEARCH_URL,
      access_date: TODAY,
    });
    for (const row of rows) {
      const key = rowKey(row);
      if (seen.has(key)) continue;
      seen.add(key);
      const result = parseResult(row.ResultText);
      const factor = unitFactorToUgKg(row.UnitName);
      const lod = numeric(row.LOD);
      const loq = numeric(row.LOQ);
      const meta = metalMeta(row.ContaminantName);
      const normalizedExact = result.kind === "numeric" ? norm(result.value, factor) : "";
      const censoringLimit = result.censoringLimit != null ? result.censoringLimit : null;
      const normalizedCensor = censoringLimit != null ? norm(censoringLimit, factor) : "";
      const lowerBound =
        factor == null
          ? ""
          : result.kind === "numeric"
            ? norm(result.value, factor)
            : ["non_detect", "left_censored"].includes(result.kind)
              ? "0"
              : "";
      const valueReview = valueReviewState(lowerBound);
      out.push({
        source_id: SOURCE_ID,
        record_key: sha256Text(key).slice(0, 24),
        raw_export_file: path.basename(file),
        record_type: row.RecordType,
        region_code: row.RegionCode,
        region_name: row.RegionName,
        contaminant_name: row.ContaminantName,
        contaminant_slug: slugify(row.ContaminantName),
        metal_species: meta.metal,
        metal_review_note: meta.note,
        food_category: row.FoodCategory,
        food_name: row.FoodName,
        food_code: row.FoodCode,
        local_food_name: row.LocalFoodName,
        food_state: row.FoodStateName,
        result_text: row.ResultText,
        result_kind: result.kind,
        unit_original: row.UnitName,
        value_original: result.value ?? "",
        normalized_value_ug_kg: normalizedExact,
        lower_bound_value_ug_kg: lowerBound,
        censoring_limit_ug_kg: normalizedCensor,
        lod_original: row.LOD,
        lod_ug_kg: norm(lod, factor),
        loq_original: row.LOQ,
        loq_ug_kg: norm(loq, factor),
        year: row.Year,
        year_review_state: yearReviewState(row.Year),
        representativeness: row.RepresentativenessName,
        lab_number: row.LabNumber,
        food_origin: row.FoodOriginName,
        analytical_qa: row.AnalyticalQAName,
        result_basis_original: row.ResultBasisName,
        basis: basis(row.ResultBasisName),
        portion_type: row.PortionTypeName,
        serial_number: row.SerialNumber,
        value_review_state: valueReview,
        unit_review_state: factor == null ? "needs_unit_review" : "normalized",
      });
    }
  }
  out.sort((a, b) =>
    [
      a.contaminant_name.localeCompare(b.contaminant_name),
      a.food_category.localeCompare(b.food_category),
      a.food_name.localeCompare(b.food_name),
      a.region_name.localeCompare(b.region_name),
      String(a.year).localeCompare(String(b.year)),
      a.record_key.localeCompare(b.record_key),
    ].find((v) => v !== 0) || 0,
  );
  return { rows: out, exports };
}

function inferContaminantFromRows(rows) {
  const values = [...new Set(rows.map((r) => r.ContaminantName).filter(Boolean))];
  return values.length === 1 ? values[0] : values.join("; ");
}

function groupKey(row) {
  return [
    row.contaminant_name,
    row.metal_species,
    row.region_name,
    row.food_category,
    row.food_name,
    row.food_code,
    row.food_state,
    row.result_basis_original,
  ].join("|");
}

function summarize(rows) {
  const groups = new Map();
  for (const row of rows) {
    const key = groupKey(row);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }
  const summaries = [];
  for (const groupRows of groups.values()) {
    const first = groupRows[0];
    const statsRows = groupRows.filter((r) => r.value_review_state === "ok");
    const lower = statsRows.map((r) => numeric(r.lower_bound_value_ug_kg)).filter((n) => n != null);
    const lods = groupRows.map((r) => numeric(r.lod_ug_kg)).filter((n) => n != null);
    const loqs = groupRows.map((r) => numeric(r.loq_ug_kg)).filter((n) => n != null);
    const years = groupRows.filter((r) => r.year_review_state === "ok").map((r) => numeric(r.year)).filter((n) => n != null);
    summaries.push({
      source_id: SOURCE_ID,
      contaminant_name: first.contaminant_name,
      contaminant_slug: first.contaminant_slug,
      metal_species: first.metal_species,
      region_name: first.region_name,
      food_category: first.food_category,
      food_name: first.food_name,
      food_code: first.food_code,
      food_state: first.food_state,
      result_basis_original: first.result_basis_original,
      basis: first.basis,
      unit_normalized: lower.length ? "ug/kg" : "",
      n_rows: groupRows.length,
      n_numeric_or_censored: lower.length,
      n_non_detect: groupRows.filter((r) => r.result_kind === "non_detect").length,
      n_left_censored: groupRows.filter((r) => r.result_kind === "left_censored").length,
      n_unit_review: groupRows.filter((r) => r.unit_review_state === "needs_unit_review").length,
      n_value_review: groupRows.filter((r) => r.value_review_state !== "ok").length,
      n_year_review: groupRows.filter((r) => r.year_review_state !== "ok").length,
      year_min: years.length ? minValue(years) : "",
      year_max: years.length ? maxValue(years) : "",
      p10_lower_bound_ug_kg: fmt(quantile(lower, 0.1)),
      p50_lower_bound_ug_kg: fmt(quantile(lower, 0.5)),
      p90_lower_bound_ug_kg: fmt(quantile(lower, 0.9)),
      p95_lower_bound_ug_kg: fmt(quantile(lower, 0.95)),
      max_lower_bound_ug_kg: lower.length ? fmt(maxValue(lower)) : "",
      lod_min_ug_kg: lods.length ? fmt(minValue(lods)) : "",
      loq_min_ug_kg: loqs.length ? fmt(minValue(loqs)) : "",
      loq_max_ug_kg: loqs.length ? fmt(maxValue(loqs)) : "",
      food_origins: compactList(groupRows.map((r) => r.food_origin)),
      analytical_qa_values: compactList(groupRows.map((r) => r.analytical_qa)),
    });
  }
  summaries.sort((a, b) =>
    [
      a.contaminant_name.localeCompare(b.contaminant_name),
      a.food_category.localeCompare(b.food_category),
      a.food_name.localeCompare(b.food_name),
      a.region_name.localeCompare(b.region_name),
      String(b.n_rows).localeCompare(String(a.n_rows)),
    ].find((v) => v !== 0) || 0,
  );
  return summaries;
}

function compactList(values, limit = 8) {
  const uniq = [...new Set(values.map((v) => String(v ?? "").trim()).filter(Boolean))].sort();
  const shown = uniq.slice(0, limit);
  return uniq.length > limit ? `${shown.join("; ")}; +${uniq.length - limit} more` : shown.join("; ");
}

function quantile(values, q) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}

function fmt(value) {
  if (value == null || value === "") return "";
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  if (Math.abs(n) >= 1000) return String(Number(n.toFixed(0)));
  if (Math.abs(n) >= 100) return String(Number(n.toFixed(1)));
  if (Math.abs(n) >= 10) return String(Number(n.toFixed(2)));
  if (Math.abs(n) >= 1) return String(Number(n.toFixed(3)));
  return String(Number(n.toFixed(4)));
}

function minValue(values) {
  let out = null;
  for (const value of values) {
    if (out == null || value < out) out = value;
  }
  return out;
}

function maxValue(values) {
  let out = null;
  for (const value of values) {
    if (out == null || value > out) out = value;
  }
  return out;
}

function yamlArray(values) {
  const uniq = [...new Set(values.filter(Boolean))].sort();
  return `[${uniq.join(", ")}]`;
}

function topLines(summaries) {
  const byMetal = new Map();
  for (const row of summaries) {
    if (!row.metal_species || !row.p95_lower_bound_ug_kg) continue;
    if (!byMetal.has(row.metal_species)) byMetal.set(row.metal_species, []);
    byMetal.get(row.metal_species).push(row);
  }
  const lines = [];
  for (const [metal, rows] of [...byMetal.entries()].sort()) {
    const top = rows
      .sort((a, b) => Number(b.p95_lower_bound_ug_kg || 0) - Number(a.p95_lower_bound_ug_kg || 0))
      .slice(0, 3)
      .map(
        (r) =>
          `${r.food_name}${r.region_name ? ` (${r.region_name}` : ""}${r.region_name ? ")" : ""}: N=${r.n_rows}, P95=${r.p95_lower_bound_ug_kg}, max=${r.max_lower_bound_ug_kg} ug/kg`,
      );
    lines.push([metal, top.join("; ")]);
  }
  return lines;
}

function buildSourcePage(rows, summaries, exports) {
  const contaminants = [...new Set(rows.map((r) => r.contaminant_name))].sort();
  const metals = [...new Set(rows.map((r) => r.metal_species).filter(Boolean))].sort();
  const categories = [...new Set(rows.map((r) => r.food_category).filter(Boolean))].sort();
  const years = rows.filter((r) => r.year_review_state === "ok").map((r) => numeric(r.year)).filter((n) => n != null);
  const unitReviewRows = rows.filter((r) => r.unit_review_state === "needs_unit_review").length;
  const valueReviewRows = rows.filter((r) => r.value_review_state !== "ok").length;
  const yearReviewRows = rows.filter((r) => r.year_review_state !== "ok").length;
  const nonDetectRows = rows.filter((r) => r.result_kind === "non_detect").length;
  const leftCensoredRows = rows.filter((r) => r.result_kind === "left_censored").length;
  const top = topLines(summaries).slice(0, 18);
  return `---
type: source
cite_key: ${SOURCE_ID}
title: "GEMS/Food Contaminants database heavy-metal exports"
authors: [World Health Organization]
year: ${TODAY.slice(0, 4)}
publication: "GEMS/Food Contamination Monitoring and Assessment Programme"
source_type: dataset
evidence_tier: A
license: public-reference-only
access_url: ${GEMS_ACCESS_URL}
program_url: ${WHO_PROGRAM_URL}
raw_path: ${rawDirRel}
data_path: ${samplesRel}
summary_path: ${summaryRel}
export_manifest_path: ${exportsRel}
metals: ${yamlArray(metals)}
jurisdictions: [WHO, Global]
updated: ${TODAY}
---

# WHO GEMS/Food - Heavy-Metal Contaminant Exports

## Summary

The WHO GEMS/Food Contaminants database is an official OPAL-web system for accessing contaminant levels in foods. This ingest preserves ${exports.length} CSV export file${exports.length === 1 ? "" : "s"} from GEMS/Food and normalizes ${rows.length.toLocaleString("en-US")} heavy-metal occurrence rows into \`${samplesRel}\`, with ${summaries.length.toLocaleString("en-US")} grouped food/contaminant summaries in \`${summaryRel}\`.

## Key Numbers

- Contaminants loaded: ${contaminants.length} (${contaminants.join("; ")}).
- Food-category coverage: ${categories.length} GEMS food categories.
- Sample years: ${years.length ? `${minValue(years)}-${maxValue(years)}` : "not reported"}.
- Non-detect rows preserved: ${nonDetectRows.toLocaleString("en-US")}; left-censored rows preserved: ${leftCensoredRows.toLocaleString("en-US")}.
- Unit review rows: ${unitReviewRows.toLocaleString("en-US")} rows were retained but not converted to ug/kg because the unit is not a supported mass-per-mass concentration.
- Year review rows: ${yearReviewRows.toLocaleString("en-US")} rows were retained but excluded from displayed year ranges because their sample year is missing, before 1900, or after ${TODAY.slice(0, 4)}.
- Extreme-value review rows: ${valueReviewRows.toLocaleString("en-US")} rows were retained in the normalized extract but excluded from lower-bound summary statistics because their converted concentration exceeds ${EXTREME_VALUE_REVIEW_UG_KG.toLocaleString("en-US")} ug/kg.

| Metal/species | Highest lower-bound food summaries |
| --- | --- |
${top.map(([metal, line]) => `| ${metal} | ${line} |`).join("\n")}

## Structured Data Extract

- \`${samplesRel}\`: normalized row-level extract. Original result text, unit, LOD, LOQ, WHO region, food identifiers, food state, basis, QA field, and serial number are retained.
- \`${summaryRel}\`: per-contaminant/per-food/per-region lower-bound summaries. Exact numeric rows are used as reported unless flagged for extreme-value review; GEMS \`ND\` and left-censored rows are carried as zero for lower-bound summary statistics while their LOD/LOQ/censoring fields remain separate.
- \`${exportsRel}\`: raw export manifest with row counts, access date, source query, raw path, and SHA-256 hash for each CSV export.

## Methods

The downloader recreates the public GEMS/Food search URL for each contaminant and posts the site's built-in "Export to file (csv)" action. The cleaner keeps the raw CSV files under \`${rawDirRel}\`, deduplicates overlapping symbol/name exports by serial and row content, maps contaminants to HMI metal/species codes, and converts supported mass-per-mass units to ug/kg. It does not infer country, brand, lot, or regulatory compliance from these rows.

## Limitations

GEMS/Food is a contributed global monitoring database, not a harmonized retail audit. Public exports expose WHO region rather than full country in this search view, and the rows can mix years, food states, origins, representativeness classes, and analytical QA status. Generic mercury rows remain flagged for speciation review; chromium rows are total chromium, not chromium VI. Organic arsenic, dimethylarsinic acid, monomethylarsonic acid, inorganic mercury, uranium, and other broader elements are preserved as occurrence evidence but are not all part of the active HMTc Category 1 analyte panel.

## Use Boundaries

This source is strong for screening, source discovery, gap analysis, and cross-region occurrence context. It should not be used for brand claims, product pass/fail claims, HMTc thresholds, or direct regulatory exceedance claims without a separate matrix-specific review.

## Wiki Pages Updated On Ingest

- [[sources/${SOURCE_ID}]]
- [[sources/index]]
- [[log]]
`;
}

function updateSourcesJsonl(root, rows, exports) {
  const file = path.join(root, "data/evidence/sources.jsonl");
  const existing = fs.existsSync(file)
    ? read(file)
        .split(/\r?\n/u)
        .filter(Boolean)
        .map((line) => JSON.parse(line))
        .filter((record) => record.source_id !== SOURCE_ID)
    : [];
  const metals = [...new Set(rows.map((r) => r.metal_species).filter(Boolean))].sort();
  const categories = [...new Set(rows.map((r) => slugify(r.food_category)).filter(Boolean))].sort();
  const years = rows.filter((r) => r.year_review_state === "ok").map((r) => numeric(r.year)).filter((n) => n != null);
  const record = {
    source_id: SOURCE_ID,
    raw_handle: rawDirRel.replace(/^raw\//u, ""),
    raw_path: rawDirRel,
    source_page_path: sourcePageRel,
    cite_key: SOURCE_ID,
    source_title: "GEMS/Food Contaminants database heavy-metal exports",
    source_type: "intergovernmental_dataset",
    evidence_tier: "A",
    license: "public-reference-only",
    access_url: GEMS_ACCESS_URL,
    program_url: WHO_PROGRAM_URL,
    sha256: sha256Text(exports.map((r) => `${r.raw_path}:${r.sha256}`).sort().join("\n")),
    doi: null,
    year: years.length ? maxValue(years) : Number(TODAY.slice(0, 4)),
    metal_mentions: metals,
    matrix_mentions: categories.slice(0, 80),
    statistic_flags: ["sample-level", "lod-loq", "global-monitoring", "who-region", "basis-preserved", "speciation-review"],
    review_state: "machine_extracted",
    extraction_run_id: "gemsfood-heavy-metals-ingest",
    extraction_timestamp: `${TODAY}T00:00:00.000Z`,
  };
  write(file, [...existing, record].map((r) => JSON.stringify(r)).join("\n"));
}

function updateSourcesIndex(root) {
  const file = path.join(root, "wiki/sources/index.md");
  let text = read(file);
  text = text.replace(/updated: \d{4}-\d{2}-\d{2}/u, `updated: ${TODAY}`);
  const line = `- [[sources/${SOURCE_ID}]] - WHO GEMS/Food Contaminants database heavy-metal CSV exports, with normalized row-level and summary evidence files.`;
  if (text.includes(`[[sources/${SOURCE_ID}]]`)) return write(file, text);
  if (text.includes("## WHO / International")) {
    text = text.replace("## WHO / International\n", `## WHO / International\n\n${line}\n`);
  } else if (text.includes("## FDA / U.S. Government")) {
    text = text.replace("## FDA / U.S. Government", `## WHO / International\n\n${line}\n\n## FDA / U.S. Government`);
  } else {
    text = `${text.trimEnd()}\n\n## WHO / International\n\n${line}\n`;
  }
  write(file, text);
}

function updateEvidenceReadme(root) {
  const file = path.join(root, "data/evidence/README.md");
  let text = read(file);
  const section = `- \`who_gemsfood_heavy_metals_summary_by_food_contaminant.csv\`: lower-bound per-food/per-contaminant summaries derived from the normalized GEMS/Food exports.
- \`who_gemsfood_heavy_metals_raw_exports.csv\`: raw export manifest with access dates, row counts, and SHA-256 hashes.`;
  if (!text.includes("who_gemsfood_heavy_metals_summary_by_food_contaminant.csv")) {
    text = text.replace("- `schema/*.json`: JSON Schemas for the tracked JSONL records.", `${section}\n- \`schema/*.json\`: JSON Schemas for the tracked JSONL records.`);
  }
  write(file, text);
}

function updateReportsIngested(root, rows, summaries, exports) {
  const file = path.join(root, "raw/reports/INGESTED.md");
  if (!fs.existsSync(file)) return;
  let text = read(file);
  text = text.replace(/Updated: \d{4}-\d{2}-\d{2}/u, `Updated: ${TODAY}`);
  const header = `## WHO GEMS/Food Contaminants Heavy-Metal Exports`;
  const section = `${header}

These CSV exports are source-data artifacts for ${SOURCE_LINK}. They remain local raw evidence under \`${rawDirRel}/\`; the tracked manifest is \`${exportsRel}\`.

- Exports preserved: ${exports.length.toLocaleString("en-US")} CSV files.
- Normalized rows: ${rows.length.toLocaleString("en-US")} rows in \`${samplesRel}\`.
- Summary rows: ${summaries.length.toLocaleString("en-US")} rows in \`${summaryRel}\`.
- Manifest: \`${exportsRel}\` records query, row count, access date, raw path, and SHA-256 for every export.
`;
  const nextText = text.includes(header) ? text.slice(0, text.indexOf(header)).trimEnd() : text.trimEnd();
  write(file, `${nextText}\n\n${section}`);
}

function appendLog(root, rows, summaries, exports) {
  const canonicalLog = path.join(root, "data/log/entries.jsonl");
  const logBuilder = path.join(root, "tools/logs/build-log-archives.mjs");
  if (fs.existsSync(canonicalLog)) {
    const existing = read(canonicalLog)
      .split(/\r?\n/u)
      .filter(Boolean)
      .map((line) => JSON.parse(line));
    const handle = SOURCE_ID;
    const op = "ingest";
    const id = `${TODAY}-${slugify(op)}-${slugify(handle)}`;
    const sequence = Math.max(0, ...existing.map((entry) => Number(entry.sequence) || 0)) + 1;
    const pages = [`sources/${SOURCE_ID}`, "sources/index", "log"];
    const entry = {
      id,
      sequence,
      date: TODAY,
      op,
      handle,
      title: "WHO GEMS/Food heavy-metal contaminant exports",
      pages_touched: pages,
      body: `Pages touched: [[sources/${SOURCE_ID}]], [[sources/index]], [[log]]
Notes: Preserved ${exports.length} WHO GEMS/Food CSV export file${exports.length === 1 ? "" : "s"} under \`${rawDirRel}/\`; generated ${rows.length.toLocaleString("en-US")} normalized row-level records and ${summaries.length.toLocaleString("en-US")} lower-bound summary rows. Original result text, units, LOD/LOQ, basis, QA, WHO region, food identifiers, and serial numbers are retained; no brand claims, HMTc threshold claims, or regulatory exceedance claims were added.`,
    };
    const index = existing.findIndex((record) => record.id === id);
    if (index >= 0) {
      entry.sequence = existing[index].sequence;
      existing[index] = entry;
    } else {
      existing.push(entry);
    }
    write(canonicalLog, existing.map((record) => JSON.stringify(record)).join("\n"));
    if (fs.existsSync(logBuilder)) {
      const result = childProcess.spawnSync(process.execPath, [logBuilder], { cwd: root, stdio: "inherit" });
      if (result.status !== 0) throw new Error(`Log archive rebuild failed with exit code ${result.status}`);
    }
    return;
  }

  const file = path.join(root, "wiki/log.md");
  if (!fs.existsSync(file)) return;
  let text = read(file);
  const header = `## [${TODAY}] ingest | ${SOURCE_ID} - WHO GEMS/Food heavy-metal contaminant exports`;
  if (text.includes(header)) return;
  const entry = `${header}
Pages touched: [[sources/${SOURCE_ID}]], [[sources/index]], [[log]]
Notes: Preserved ${exports.length} WHO GEMS/Food CSV export file${exports.length === 1 ? "" : "s"} under \`${rawDirRel}/\`; generated ${rows.length.toLocaleString("en-US")} normalized row-level records and ${summaries.length.toLocaleString("en-US")} lower-bound summary rows. Original result text, units, LOD/LOQ, basis, QA, WHO region, food identifiers, and serial numbers are retained; no brand claims, HMTc threshold claims, or regulatory exceedance claims were added.
`;
  const marker = "\n## [";
  const idx = text.indexOf(marker, text.indexOf("---"));
  if (idx === -1) text = `${text.trimEnd()}\n\n${entry}\n`;
  else text = `${text.slice(0, idx).trimEnd()}\n\n${entry}\n${text.slice(idx)}`;
  write(file, text);
}

function collectInputFiles(args, rawDir) {
  const files = [];
  for (const input of args.inputs) files.push(path.resolve(input));
  for (const dir of args.inputDirs) {
    if (!fs.existsSync(dir)) throw new Error(`Input directory does not exist: ${dir}`);
    for (const file of fs.readdirSync(dir).filter((name) => name.toLowerCase().endsWith(".csv")).sort()) {
      files.push(path.join(dir, file));
    }
  }
  if (fs.existsSync(rawDir)) {
    const rawFiles = fs
      .readdirSync(rawDir)
      .filter((name) => name.toLowerCase().endsWith(".csv"))
      .map((name) => ({ name, fullPath: path.join(rawDir, name), info: rawExportNameInfo(name) }))
      .filter((entry) => entry.info && isNonemptyGemsCsv(entry.fullPath));
    const chunkedBases = new Set(rawFiles.filter((entry) => entry.info.isChunk).map((entry) => entry.info.base));
    for (const entry of rawFiles.sort((a, b) => a.name.localeCompare(b.name))) {
      if (!entry.info.isChunk && chunkedBases.has(entry.info.base)) continue;
      files.push(entry.fullPath);
    }
  }
  return [...new Set(files)];
}

function rawExportNameInfo(name) {
  const suffix = `-${TODAY}.csv`;
  if (!name.startsWith("who-gemsfood-") || !name.endsWith(suffix)) return null;
  const stem = name.slice("who-gemsfood-".length, -suffix.length);
  const parts = stem.split("-");
  const regionIndex = parts.findIndex((part) => GEMS_REGIONS.map((r) => r.toLowerCase()).includes(part));
  if (regionIndex > 0) {
    return { base: parts.slice(0, regionIndex).join("-"), isChunk: true };
  }
  return { base: stem, isChunk: false };
}

function preserveInputs(files, rawDir) {
  const preserved = [];
  for (const file of files) {
    if (path.dirname(path.resolve(file)) === path.resolve(rawDir)) {
      preserved.push(path.resolve(file));
      continue;
    }
    const text = read(file);
    const rows = parseCsv(text);
    const contaminant = inferContaminantFromRows(rows) || path.basename(file, ".csv");
    const dest = path.join(rawDir, `who-gemsfood-${slugify(contaminant)}-${TODAY}.csv`);
    if (path.resolve(file) !== path.resolve(dest)) copyFile(file, dest);
    preserved.push(dest);
  }
  return [...new Set(preserved)];
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const root = path.resolve(args.projectRoot);
  const rawDir = path.resolve(args.rawDir || path.join(root, rawDirRel));
  ensureDir(rawDir);

  let inputFiles = collectInputFiles(args, rawDir);
  if (args.download) {
    for (const contaminant of contaminantList(args)) {
      process.stderr.write(`Downloading GEMS/Food export: ${contaminant}\n`);
      const files = await downloadContaminantSmart(contaminant, rawDir, args);
      inputFiles.push(...files);
    }
  }
  if (!inputFiles.length) {
    throw new Error("No input CSV files found. Use --input, --input-dir, or --download.");
  }

  const rawFiles = preserveInputs(inputFiles, rawDir);
  const { rows, exports } = normalizeRows(rawFiles, root);
  const summaries = summarize(rows);

  writeCsv(path.join(root, samplesRel), rows, SAMPLE_HEADERS);
  writeCsv(path.join(root, summaryRel), summaries, SUMMARY_HEADERS);
  writeCsv(path.join(root, exportsRel), exports, [
    "source_id",
    "contaminant_query",
    "raw_path",
    "rows",
    "sha256",
    "access_url",
    "access_date",
  ]);

  if (args.writeWiki) {
    write(path.join(root, sourcePageRel), buildSourcePage(rows, summaries, exports));
    updateSourcesJsonl(root, rows, exports);
    updateSourcesIndex(root);
    updateEvidenceReadme(root);
    updateReportsIngested(root, rows, summaries, exports);
    appendLog(root, rows, summaries, exports);
  }

  const contaminants = [...new Set(rows.map((r) => r.contaminant_name))].sort();
  console.log(
    JSON.stringify(
      {
        source_id: SOURCE_ID,
        raw_exports: exports.length,
        rows: rows.length,
        summaries: summaries.length,
        contaminants,
        samples_path: path.join(root, samplesRel),
        summary_path: path.join(root, summaryRel),
        source_page: args.writeWiki ? path.join(root, sourcePageRel) : null,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
