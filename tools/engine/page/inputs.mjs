// Page evidence for the generic builder. The findings store (data/evidence/findings/
// by-page/<family>s/<slug>.json) is the source of truth once populated; until then
// the transitional adapter reads each page's existing extraction files and the
// decisions already recorded in its ledger, as data. No ingredient-specific code.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { buildDescriptiveReference } from '../../evidence/build-hmtc-aggregate-distributions.mjs';
import { resolveLibrarySource } from '../../lib/library-root.mjs';
import { parseCSV } from '../../ingredient-source-universe.mjs';
import { root, read, json, exists, sha, shaFile, FAMILIES, GEMS, FDA, BUILD_DATE, wikiPage, notConflict, stubsRedirectingTo, redirectOf } from './common.mjs';
import { LIBRARY_MOUNT } from '../../lib/library-root.mjs';
import { classifyBasis, classifyForm, siteContext, normalizeStatistic } from './classify.mjs';

// ---------------------------------------------------------------- normalized finding
// {id, source_id, analyte, statistic, value, min, max, sd, median_bounds, lod, n,
//  material_text, form_key, scope_material, basis, basis_key, period, years, group, group_kind,
//  site_context, region, sampling, variant, reported_text, unit_original, locator,
//  conversion, censoring, notes, integrity_flag, hold}
const num = v => (v === null || v === undefined || v === '' || !Number.isFinite(Number(v))) ? null : Number(v);
const yearsOf = text => [...String(text ?? '').matchAll(/(?<!\d)(19|20)\d{2}(?!\d)/g)].map(m => +m[0]);
export function periodText(years, studyPeriod) {
  const ys = (years?.filter(Number.isFinite).length ? years.filter(Number.isFinite) : yearsOf(studyPeriod));
  if (!ys.length) return 'Collection date unreported';
  const lo = Math.min(...ys), hi = Math.max(...ys);
  return lo === hi ? String(lo) : `${lo} to ${hi}`;
}
const gemsParts = group => {
  const m = String(group ?? '').match(/WHO region (\w+)(?:;\s*([^;]+))?(?:;\s*(.+))?/);
  if (!m) return {};
  const rep = /random/i.test(m[2] ?? '') ? 'random' : /targeted|selective/i.test(m[2] ?? '') ? 'targeted' : 'unknown';
  return { region: m[1], sampling: rep, variant: (m[3] ?? '').trim() };
};

// ---------------------------------------------------------------- legacy adapter
export function legacyDir(slug) {
  const base = path.join(root, 'data/evidence/contracts');
  const hits = [];
  for (const group of fs.readdirSync(base, { withFileTypes: true }).filter(e => e.isDirectory() && notConflict(e))) {
    const d = path.join(base, group.name, slug);
    if (fs.existsSync(path.join(d, 'extraction')) && fs.existsSync(path.join(d, 'row-parity.json'))) hits.push(d);
  }
  hits.sort((a, b) => fs.statSync(path.join(b, 'row-parity.json')).mtimeMs - fs.statSync(path.join(a, 'row-parity.json')).mtimeMs);
  return hits[0] ? path.relative(root, hits[0]) : null;
}

function primaryCopy(dir, sid, slug) {
  for (const f of [`primary/${sid}.txt`, `primary/${sid}.md`]) if (exists(`${dir}/${f}`)) return `${dir}/${f}`;
  if (sid === GEMS && exists(`${dir}/primary/gemsfood-${slug}-records.csv`)) return `${dir}/primary/gemsfood-${slug}-records.csv`;
  if (sid === FDA && exists(`${dir}/primary/fda-elements.txt`)) return `${dir}/primary/fda-elements.txt`;
  return null;
}

export function loadLegacy(page) {
  // Reviewed per-ingredient builds belong to ingredient pages only; a product that shares
  // a slug (honey, spinach) reads its own evidence.
  if (page.family !== 'ingredient') return null;
  const dir = legacyDir(page.slug);
  if (!dir) return null;
  const ledgerPath = `data/evidence/contracts/${page.slug}/evidence-ledger.json`;
  const parity = json(`${dir}/row-parity.json`);
  const parityRows = Array.isArray(parity) ? parity : parity.rows ?? [];
  const old = exists(ledgerPath) ? json(ledgerPath) : null;
  const oldResults = new Map((old?.results ?? []).map(r => [r.id, r]));
  const rowToFinding = new Map(parityRows.map(p => [p.row, p.finding]));
  const findingOld = new Map(parityRows.map(p => [p.finding, { result: oldResults.get(p.row), held: p.held ?? null }]));
  const sources = new Map(), findings = [], seen = new Set();
  for (const f of fs.readdirSync(path.join(root, dir, 'extraction')).filter(f => f.endsWith('.json') && notConflict(f)).sort()) {
    const x = json(`${dir}/extraction/${f}`);
    if (!x.source_id) continue;
    const src = { source_id: x.source_id, disposition: x.disposition, disposition_reason: x.disposition_reason ?? '', disposition_locator: x.disposition_locator ?? '',
      study: x.study ?? {}, text_copy: primaryCopy(dir, x.source_id, page.slug) ?? (x.text_copy && exists(x.text_copy) ? x.text_copy : null),
      sample_values: Array.isArray(x.sample_values) ? x.sample_values : [], file: `${dir}/extraction/${f}` };
    sources.set(x.source_id, src);
    if (x.disposition !== 'occurrence_extracted') continue;
    for (const fd of x.findings ?? []) {
      if (!fd?.id || seen.has(fd.id)) continue;
      seen.add(fd.id);
      const prior = findingOld.get(fd.id), o = prior?.result;
      const g = x.source_id === GEMS ? gemsParts(fd.group) : {};
      const materialText = String(fd.material_text ?? fd.material ?? '');
      const basisKey = o ? classifyBasis(o.basis) : classifyBasis(fd.basis ?? x.study?.basis);
      findings.push({
        id: fd.id, source_id: x.source_id, analyte: fd.analyte, statistic: normalizeStatistic(fd.statistic),
        value: num(fd.value_ug_kg), min: num(fd.min_ug_kg), max: num(fd.max_ug_kg), sd: num(fd.sd_ug_kg), lod: num(fd.lod_ug_kg),
        median_bounds: Array.isArray(fd.median_bounds_ug_kg) ? fd.median_bounds_ug_kg.map(Number) : null,
        n: Number.isInteger(fd.n) ? fd.n : null, years: Array.isArray(fd.years) ? fd.years : null,
        material_text: materialText, form_key: fd.material_key ?? (/^[a-z_]+$/.test(String(fd.material ?? '')) ? fd.material : classifyForm(materialText).key),
        // Recorded scope decisions are carried over as data; new findings use the generic rule.
        scope_material: o?.scope?.material ?? null, basis: o?.basis ?? null, basis_key: basisKey,
        period: o?.year ?? periodText(fd.years, x.study?.collection_period),
        group: String(fd.group ?? 'All samples'), group_kind: fd.group_kind ?? 'all_samples', origin: o?.origin_or_market ?? null,
        site_context: siteContext(fd.site_context ?? x.study?.site_context, x.study?.design, fd.group),
        region: g.region ?? null, sampling: fd.sampling ?? g.sampling ?? null, variant: fd.variant ?? g.variant ?? '',
        reported_text: String(fd.reported?.text ?? ''), reported_value: fd.reported?.value ?? null, unit_original: fd.reported?.unit ?? null,
        locator: String(fd.locator ?? x.disposition_locator ?? 'whole document'), conversion: fd.conversion || 'none',
        censoring: fd.censoring || 'As reported by the source', notes: fd.notes ?? '', integrity_flag: fd.integrity_flag ?? null,
        hold: prior?.held ?? null, sampling_unit: x.study?.sampling_unit || 'samples', method: x.study?.method || 'Not reported',
        detected_n: Number.isInteger(fd.detected_n) ? fd.detected_n : null,
      });
    }
  }
  // Recorded content decisions for every ledger item, with result ownership expressed as findings.
  const decisions = new Map();
  for (const i of old?.items ?? []) decisions.set(i.id, { ...i, result_findings: (i.result_ids ?? []).map(id => rowToFinding.get(id)).filter(Boolean) });
  const gemsRecordsPath = `${dir}/primary/gemsfood-${page.slug}-reference-input.json`;
  const interventions = exists(`${dir}/interventions.json`) ? json(`${dir}/interventions.json`) : null;
  const regulatory = exists(`${dir}/regulatory-${page.slug}.json`) ? json(`${dir}/regulatory-${page.slug}.json`) : null;
  return {
    origin: `legacy:${dir}`, dir, page, sources, findings, decisions, legacy_finding_ids: parityRows.map(p => p.finding),
    gems_records: exists(gemsRecordsPath) ? json(gemsRecordsPath) : [], gems_records_path: exists(gemsRecordsPath) ? gemsRecordsPath : null,
    controls: Array.isArray(interventions) ? interventions : interventions?.records ?? [],
    regulatory: regulatory?.entries ?? [],
  };
}

// ---------------------------------------------------------------- findings store adapter
// An access-blocked source's searches, as its store record documents them, become dated
// retrieval attempts per channel; a channel the record does not mention stays missing.
// The engine files a dated retrieval request for the primary document.
export function retrievalFrom(x, sid) {
  if (x?.disposition !== 'access_blocked') return null;
  const text = [...(x.unresolved ?? []), x.disposition_reason ?? ''].map(String).join(' ');
  const day = text.match(/\b20\d\d-\d\d-\d\d\b/)?.[0] ?? String(x.extracted_at ?? '').slice(0, 10), date = /^\d{4}-\d\d-\d\d$/.test(day) ? `${day}T00:00:00Z` : null;
  if (!date) return null;
  const attempt = (channel, location, extra = {}) => ({ channel, location, attempted_at: date, outcome: 'primary document not found (per the store record search notes)', ...extra });
  const attempts = [];
  if (/\/Volumes\/HMI-Library(?!-)|mounted library/i.test(text)) attempts.push(attempt('mounted_library', LIBRARY_MOUNT, { mounted: true }));
  if (/HMI-Library-backup|backup/i.test(text)) attempts.push(attempt('backup_library', '~/HMI-Library-backup'));
  if (/ROOT\/raw|\braw\//i.test(text)) attempts.push(attempt('raw', 'raw/'));
  // No store record documents a publisher or open-access attempt (downloads are outside the store brief),
  // so that channel stays missing and the request names any access URL the record gives.
  const url = text.match(/access_url (https?:\/\/\S+)/)?.[1]?.replace(/[),;.]+$/, '');
  return { attempts, request: { request: `Retrieve the primary document for ${sid}${url ? ` from ${url}` : ' from its publisher or an open-access copy'}, or place it in the HMI Library (requested of the findings store and library owner).`, requested_at: `${BUILD_DATE}T00:00:00Z` } };
}

const STORE_BASIS = { fresh: 'fw', as_sold: 'fw', dry: 'dw', unknown: 'unstated' };
const STORE_DISPOSITION = { context: 'context_only', no_numeric_results: 'out_of_scope' };
export function storePath(page) { return `data/evidence/findings/by-page/${FAMILIES[page.family]}/${page.slug}.json`; }
const slugify = x => String(x ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'all';
const medianBounds = rs => {
  const sc = { ingredient: 'x', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  const m = buildDescriptiveReference(rs.map((r, i) => ({ ...sc, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), sc).median;
  return [m.lower, m.upper];
};

// Dataset rows, read once per process: rows routed to each page, where every row went,
// and the rows the store excluded with a reason.
let datasetCache = null;
const normFood = x => String(x ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
function datasetIndex() {
  if (datasetCache) return datasetCache;
  const dir = path.join(root, 'data/evidence/findings/datasets');
  const byPage = new Map(), routedTo = new Map(), excluded = new Map(), labels = new Map(), foodPages = new Map();
  for (const f of fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => /^[a-z0-9-]+--[A-Za-z0-9]+\.jsonl(\.gz)?$/.test(f)).sort() : []) {
    const raw = fs.readFileSync(path.join(dir, f)), buf = f.endsWith('.gz') ? zlib.gunzipSync(raw) : raw;
    // Shards can exceed the largest string; read them line by line from the buffer.
    for (let start = 0; start < buf.length;) {
      let end = buf.indexOf(10, start); if (end < 0) end = buf.length;
      const line = buf.toString('utf8', start, end); start = end + 1;
      if (!line.trim()) continue;
      const r = JSON.parse(line);
      if (/--decisions\./.test(f)) { if (r.item_id && r.decision !== 'kept') excluded.set(r.item_id, r.reason ?? 'Excluded by the findings store.'); continue; }
      // Rows routed to a redirect or retired stub go to the page it points to.
      const pages = [...new Set([r.material?.page, ...(r.material?.pages_also ?? [])].filter(Boolean).map(redirectOf))];
      routedTo.set(r.id, pages);
      labels.set(r.id, r.material?.label_as_printed ?? r.material?.food_name ?? '');
      const c = { id: r.id, dataset_id: r.dataset_id, analyte: r.analyte, label: r.material?.food_name ?? r.material?.label_as_printed ?? '', form: classifyForm(`${r.material?.form ?? r.material?.label_as_printed ?? r.material?.food_name ?? ''} ${r.material?.state ?? ''}`).key, state: r.material?.state ?? null,
        basis: r.basis, censoring: r.censoring, lower: r.lower_ugkg ?? r.value_ugkg, upper: r.upper_ugkg ?? r.value_ugkg, value: r.value_ugkg ?? null, lod: r.lod_ugkg ?? null,
        n: r.n, statistic: r.statistic, group: r.group, group_kind: r.group_kind, region: r.region ?? null, sampling: r.representativeness ?? r.sampling ?? null,
        year: r.calendar_year ?? r.year ?? null, locator: r.locator };
      for (const p of pages) { if (!byPage.has(p)) byPage.set(p, []); byPage.get(p).push(c); }
      // Food-name routing, used for older exports of the same dataset the store did not ingest.
      const key = `${r.dataset_id}|${normFood(c.label)}`;
      if (!foodPages.has(key)) foodPages.set(key, new Set());
      for (const p of pages) foodPages.get(key).add(p);
    }
  }
  return datasetCache = { byPage, routedTo, excluded, labels, foodPages };
}

const physicalCache = new Map();
function physicalPath(file) {
  if (!physicalCache.has(file)) {
    const abs = path.join(root, file);
    const resolved = fs.existsSync(abs) ? abs : resolveLibrarySource(file, { repoRoot: root })?.resolved_path;
    physicalCache.set(file, resolved && fs.existsSync(resolved) ? { artifact: fs.existsSync(abs) ? file : resolved, sha256: shaFile(resolved) } : null);
  }
  return physicalCache.get(file);
}
const csvCache = new Map();
function csvRow(file, loc) {
  if (!csvCache.has(file)) { const p = physicalPath(file); csvCache.set(file, p ? new Map(parseCSV(fs.readFileSync(path.isAbsolute(p.artifact) ? p.artifact : path.join(root, p.artifact), 'utf8')).map(r => [`row ${r.__row}`, r])) : new Map()); }
  return csvCache.get(file).get(loc);
}

// Monitoring rows become page results: composites of one food give one median result per
// analyte with the composites kept as sample values; subgroup statistics give one result
// per reporting region and sampling type.
function datasetFindings(pageRef) {
  const rows = datasetIndex().byPage.get(pageRef) ?? [];
  const findings = [], samples = new Map(), owners = new Map(), gemsRecords = [];
  // Form comes from the store's per-row form, else the label as printed, else the dataset's food name.
  const groups = Map.groupBy(rows.filter(r => Number.isFinite(r.lower) && Number.isFinite(r.upper)), r => [r.dataset_id, r.analyte, r.label, r.form, r.basis, r.group_kind === 'collection' ? 'samples' : `${r.region ?? r.group}|${/random/i.test(r.sampling ?? '') ? 'random' : /target|selective/i.test(r.sampling ?? '') ? 'targeted' : 'unknown'}`].join('|'));
  for (const [key, rs] of groups) {
    // The group is "region|sampling" for subgroup rows, so it takes the rest of the key.
    const [ds, analyte, label, formText, basis, ...g] = key.split('|'), grp = g.join('|');
    const composite = grp === 'samples', form = { key: formText };
    const id = `${ds}:${analyte}:${slugify(label)}${formText !== classifyForm(`${label} ${rs[0].state ?? ''}`).key ? `-${formText}` : ''}:${basis}:${composite ? 'all' : slugify(grp)}:median`;
    const years = rs.map(r => r.year).filter(Number.isFinite);
    const regions = [...new Set(rs.map(r => r.region).filter(Boolean))];
    findings.push({ id, source_id: ds, analyte, statistic: 'median', value: null, min: null, max: null, sd: null, lod: Math.max(0, ...rs.map(r => r.lod ?? 0)) || null,
      median_bounds: medianBounds(rs), n: rs.length, years, material_text: label, form_key: form.key, scope_material: null, basis: null, basis_key: STORE_BASIS[basis] ?? 'unstated',
      period: periodText(years), group: composite ? `${regions.length ? `${regions.length} collection regions` : 'All collections'}` : grp.split('|')[0], group_kind: 'purchase_market', origin: null,
      site_context: 'monitoring', region: composite ? null : grp.split('|')[0], sampling: composite ? null : grp.split('|')[1], variant: '',
      reported_text: `${rs.filter(r => r.censoring === 'none').length} of ${rs.length} detected; HMI median of individual results`, reported_value: null, unit_original: 'µg/kg',
      locator: `${rs.length} dataset rows, for example ${rs[0].locator}`, conversion: 'as recorded in the findings store', censoring: 'Non-detects are intervals from zero to the reporting limit; never a measured zero',
      notes: '', integrity_flag: null, hold: null, sampling_unit: composite ? 'composites' : 'results', method: 'As described by the monitoring programme', detected_n: rs.filter(r => r.censoring === 'none').length });
    for (const r of rs) owners.set(r.id, id);
    // Individual monitoring results of a subgroup are the records its reference units come from.
    if (!composite && ds === GEMS) gemsRecords.push(...rs.map(r => ({ item_id: r.id, owner_id: id, analyte, region: grp.split('|')[0], sampling: grp.split('|')[1], year: r.year, lower_ug_kg: r.lower, upper_ug_kg: r.upper })));
    if (composite) { if (!samples.has(ds)) samples.set(ds, []); samples.get(ds).push(...rs.map(r => ({ sample: r.id, analyte, group: r.group, region: r.region, lower_ug_kg: r.lower, upper_ug_kg: r.upper, locator: r.locator, material: form.key }))); }
  }
  return { findings, samples, owners, rows, gemsRecords };
}

export function loadStore(page) {
  const pageRef = `${FAMILIES[page.family]}/${page.slug}`;
  const p = storePath(page);
  // The page's own store findings, plus those of any redirect or retired stub pointing here.
  const storeList = f => { const x = exists(f) ? json(f) : null; return Array.isArray(x) ? x : x?.findings ?? []; };
  const seenIds = new Set();
  const list = [p, ...stubsRedirectingTo(pageRef).map(ref => `data/evidence/findings/by-page/${ref}.json`)].flatMap(storeList).filter(fd => !seenIds.has(fd.id) && seenIds.add(fd.id));
  const monitoring = datasetFindings(pageRef);
  if (!list.length && !monitoring.findings.length) return null;
  const sources = new Map(), findings = [], decisions = new Map();
  const sourceRecord = sid => {
    if (!sources.has(sid)) {
      const f = `data/evidence/findings/sources/${sid}.json`;
      const x = exists(f) ? json(f) : { source_id: sid, disposition: 'occurrence_extracted', study: {} };
      sources.set(sid, { source_id: sid, disposition: STORE_DISPOSITION[x.disposition] ?? x.disposition, disposition_reason: x.disposition_reason ?? '',
        disposition_locator: x.disposition_locator ?? '', study: x.study ?? {}, text_copy: x.primary_artifact && exists(x.primary_artifact) ? x.primary_artifact : null,
        sample_values: x.sample_values ?? [], controls: x.controls ?? [], file: f, complete: x.extraction_scope === 'complete', retrieval: retrievalFrom(x, sid) });
    }
    return sources.get(sid);
  };
  for (const fd of list) {
    const sid = fd.source_id ?? String(fd.id).split(':')[0];
    const src = sourceRecord(sid);
    const form = classifyForm(fd.material?.form ? `${fd.material.form} ${fd.material.state ?? ''}` : `${fd.material?.label_as_printed ?? ''} ${fd.material?.state ?? ''}`);
    findings.push({
      id: fd.id, source_id: sid, analyte: fd.analyte, statistic: normalizeStatistic(fd.statistic),
      value: num(fd.value_ugkg), min: num(fd.min_ugkg), max: num(fd.max_ugkg), sd: num(fd.sd_ugkg), lod: num(fd.lod_ugkg), median_bounds: null,
      n: fd.n ?? null, years: [src.study?.period?.from, src.study?.period?.to].filter(Number.isFinite),
      material_text: fd.material?.label_as_printed ?? '', form_key: form.key, scope_material: null, basis: null, basis_key: STORE_BASIS[fd.basis] ?? 'unstated',
      period: periodText([src.study?.period?.from, src.study?.period?.to], src.study?.period?.as_reported),
      group: fd.group || 'All samples', group_kind: fd.group_kind || 'all_samples', origin: null,
      site_context: siteContext(fd.site_context ?? src.study?.site_context, src.study?.design, fd.group),
      region: null, sampling: null, variant: '', reported_text: fd.reported ?? '', reported_value: null, unit_original: fd.unit_original ?? null,
      locator: fd.locator || src.disposition_locator || 'whole document', conversion: 'as recorded in the findings store',
      censoring: fd.censoring === 'none' ? 'No censoring reported' : fd.censoring === 'nd' ? 'Not detected' : 'Below the limit of detection',
      notes: fd.notes ?? '', integrity_flag: fd.integrity_flag ?? null, hold: fd.integrity_flag ?? null,
      sampling_unit: src.study?.sampling_unit || 'samples', method: src.study?.method || 'Not reported', detected_n: null,
    });
  }
  for (const f of monitoring.findings) { const src = sourceRecord(f.source_id); findings.push(f); src.disposition = 'occurrence_extracted'; }
  // A source whose findings are routed here was extracted for this page, whatever its
  // disposition for the page that first read it.
  for (const f of findings) { const src = sources.get(f.source_id); if (src.disposition !== 'occurrence_extracted') { src.disposition_reason = `Findings for this page were extracted from the primary text. ${src.disposition_reason}`.trim(); src.disposition = 'occurrence_extracted'; } }
  for (const [ds, smp] of monitoring.samples) sourceRecord(ds).sample_values = smp;
  // Decisions the store supports: dataset rows routed here own their page result; rows
  // routed elsewhere or excluded by the store are out of scope with the store's reason.
  const idx = datasetIndex();
  const rowDecision = (id, item) => {
    const [, file, loc] = String(id).match(/^dataset:(.+?)#(.+)$/) ?? [];
    const physical = file && physicalPath(file);
    if (!physical) return null;
    const locators = [{ artifact: physical.artifact, sha256: physical.sha256, kind: 'cell', location: loc }];
    const decided = (disposition, rationale, result_findings = []) => ({ disposition, rationale, decision_basis: 'primary_text', locators, result_findings });
    if (monitoring.owners.has(id)) return decided('occurrence_extracted', 'Monitoring result routed to this page by the findings store; it contributes to the page result for its analyte and group.', [monitoring.owners.get(id)]);
    if (idx.routedTo.get(id)?.includes(`${FAMILIES[page.family]}/${page.slug}`)) return decided('out_of_scope', 'Routed to this page, but the row reports no numerical value or reporting limit, so it cannot contribute a result.');
    if (idx.routedTo.has(id)) { const to = idx.routedTo.get(id); return decided('out_of_scope', `Routed to ${to.join(', ') || 'no page'}: ${idx.labels.get(id) ?? 'as printed in the dataset'}.`); }
    if (idx.excluded.has(id)) return decided('out_of_scope', idx.excluded.get(id));
    // Older GEMS/Food exports and summaries restate submissions the store decided from the
    // current export; they follow the store's routing of the same food name.
    if (/gemsfood/i.test(file) && sources.has(GEMS)) {
      const row = csvRow(file, loc);
      if (!row) return null;
      const name = row.FoodName ?? row.food_name ?? '', pagesFor = idx.foodPages.get(`${GEMS}|${normFood(name)}`);
      if (!pagesFor) return decided('out_of_scope', `“${name}” is not routed to this page by the findings store.`);
      if (pagesFor.has(`${FAMILIES[page.family]}/${page.slug}`)) return decided(`duplicate_of:source:${GEMS}`, `GEMS/Food row for “${name}” in an earlier export or summary, restating submissions that are decided in this ledger.`);
      return decided('out_of_scope', `Routed to ${[...pagesFor].join(', ')}: ${name}.`);
    }
    // FDA Total Diet Study summary and routing indexes restate composites; they follow their own route.
    if (/fda_tds_[^/]*\.csv$/.test(file)) {
      const row = csvRow(file, loc);
      const target = row?.ingredient_slug || row?.target_page?.replace(/^ingredients\//, '');
      const label = row?.tds_food_description || row?.food_description || row?.food || 'as printed';
      if (!row) return null;
      if (target === page.slug && page.family === 'ingredient' && sources.has(FDA)) return decided(`duplicate_of:source:${FDA}`, `FDA Total Diet Study summary row for “${label}”, restating composites decided in this ledger.`);
      return decided('out_of_scope', `Routed to ${target ? `ingredients/${target}` : 'no page'}: ${label}.`);
    }
    // Any other indexed row is a derived or working index. One that names a source restates
    // that source, whose own decision for this page applies; one that names none is not evidence.
    const sid = item?.source_id;
    if (sid && exists(`wiki/sources/${sid}.md`)) {
      if (!sources.has(sid) && !sourceDecision(sid)) return null;
      return decided(`duplicate_of:source:${sid}`, `Derived working index row in ${file}; its evidence is taken from the primary source ${sid}, whose decision for this page applies.`);
    }
    return decided('out_of_scope', `Internal working index row in ${file}; it names no source record${sid ? ` (“${sid}” has none)` : ''}, so it is not evidence.`);
  };
  // A source read completely for every food decides this page too; a partial read does not.
  const sourceDecision = sid => {
    const f = `data/evidence/findings/sources/${sid}.json`;
    if (!exists(f)) return null;
    const x = json(f);
    if (x.extraction_scope !== 'complete') return null;
    const disposition = x.disposition === 'occurrence_extracted' ? 'out_of_scope' : STORE_DISPOSITION[x.disposition] ?? x.disposition;
    const artifact = x.primary_artifact && exists(x.primary_artifact) ? x.primary_artifact : `wiki/sources/${sid}.md`;
    return { disposition, rationale: x.disposition === 'occurrence_extracted' ? `Every food this source measures was extracted; none is ${page.slug.replace(/-/g, ' ')}.` : x.disposition_reason || 'Decided on its content in the findings store.',
      decision_basis: 'primary_text', locators: [{ artifact, sha256: shaFile(artifact), kind: 'page', location: x.disposition_locator || 'whole document' }], result_findings: [],
      ...(retrievalFrom(x, sid) ? { retrieval_attempts: retrievalFrom(x, sid).attempts, retrieval_request: retrievalFrom(x, sid).request } : {}) };
  };
  return { origin: `store:${p}`, dir: null, page, sources, findings, decisions, rowDecision, sourceDecision, legacy_finding_ids: [], gems_records: monitoring.gemsRecords, gems_records_path: null,
    controls: [...sources.values()].flatMap(s => s.controls ?? []).filter(c => c?.source_id && c?.outcomes), regulatory: [] };
}

// The recorded legacy evidence stays authoritative for a page until the store covers
// every finding it renders today; pages without it read the store.
export function loadPageEvidence(page) {
  const legacy = loadLegacy(page);
  const store = legacy ? null : loadStore(page);
  const evidence = legacy ?? store;
  if (!evidence) return null;
  evidence.wiki = wikiPage(page);
  return evidence;
}
export const contentHash = evidence => sha(JSON.stringify({ origin: evidence.origin, findings: evidence.findings.map(f => f.id) }));
