"""Content-route every recovered WHO Cocoa row, preserving every physical row.

This is a scientific working extraction, not a complete source universe/ledger.
The 193 absent older exports are not replaced by these twelve newer files.
"""
from pathlib import Path
import json,re,hashlib,collections
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
j=json.loads((D/'extractions/who-gemsfood-primary-cocoa.json').read_text())
file_hash={r['artifact']:r['sha256'] for r in j['files']}
metals={'Aluminium':'Al','Cadmium':'Cd','Lead':'Pb','Total mercury':'tHg','Mercury':'Hg_unspecified','Tin':'Sn','Arsenic (total)':'tAs','Arsenic (inorganic)':'iAs','Mercury (inorganic)':'iHg'}
rows=[];decisions=[]
for r in j['records']:
    fname=Path(r['artifact']).name;local=r['LocalFoodName'].strip();food=r['FoodName'].strip()
    rid='who-june2026-'+fname.removesuffix('.csv')+'-'+str(r['row'])
    base=dict(id=rid,artifact=r['artifact'],artifact_sha256=file_hash[r['artifact']],
        locator=f'{fname}, CSV row {r["row"]}, original SerialNumber {r["SerialNumber"]}',
        primary_fields=dict(FoodName=food,LocalFoodName=local,FoodCode=r['FoodCode'],RecordType=r['RecordType']))
    exclusion=None
    if food=='Feed':exclusion='Source explicitly classifies this cocoa meal/husk/hull record as animal Feed, not edible human cocoa food.'
    elif re.search(r'\bnon[- ]chocolate\b|other than chocolate',local,re.I):exclusion='Source explicitly identifies non-chocolate confectionery or pudding other than chocolate; substring discovery is a false positive.'
    elif re.search(r'including chocolate\s*/\s*(?:brown|white) sugar',local,re.I):exclusion='The source leaf food is brown/white sugar; cocoa appears only in the parent category label.'
    elif local.lower()=='coffee, tea, cocoa / coffee':exclusion='The source leaf food is coffee; cocoa appears only in the parent category label.'
    elif local.upper()=='COCOA COLA':exclusion='Source food is a cola soft drink, with an apparent misspelling; no identified cocoa ingredient or chocolate food.'
    elif food=='Coffee beans' and local.startswith('GRIZZLY CLAW DARK'):exclusion='Roasted coffee description uses rich/dark chocolate tasting notes; no identified cocoa-containing formulation. Do not attribute coffee measurement to cocoa.'
    if exclusion:
        decisions.append(dict(**base,disposition='out_of_scope',rationale=exclusion));continue
    factor={'mg/kg':1,'ug/kg':.001}[r['UnitName']]
    def limit(k):
        s=r[k].strip();return float(s)*factor if s else None
    lod,loq=limit('LOD'),limit('LOQ');raw=r['ResultText'].strip()
    printed=float(raw)*factor if re.fullmatch(r'\d+(?:\.\d+)?',raw) else None
    if raw=='':
        value=None;lo=hi=None
        status='empty source result; no detection state or concentration bound inferred from the method limits'
    elif raw=='ND' or printed==0:
        # ND can be bounded by its detection limit. A coded zero has no
        # explicit detect/quantify status; use the more conservative LOQ.
        bound=(lod if lod and lod>0 else loq) if raw=='ND' else (loq if loq and loq>0 else lod)
        value=None;lo=0 if bound is not None else None;hi=bound
        status='source ND' if raw=='ND' else 'source numeric zero, measurement absence not established'
    elif loq and printed<loq:
        value=None;lo=lod if lod is not None and lod>0 and printed>=lod else 0;hi=loq
        status='positive source estimate below LOQ; reported numeric text retained, comparison uses source LOD–LOQ identification bounds'
    else:
        value=printed;lo=hi=printed
        status='source positive numerical result'
    typ=r['RecordType'].strip()
    n=1 if typ=='Individual' else None
    statistic='individual source observation' if typ=='Individual' else 'source aggregate; statistic and contributing sample count unspecified' if typ=='Aggregated' else 'source numerical record; sampling unit/statistic unspecified'
    year=r['Year'];year_conflict=bool(re.fullmatch(r'\d{4}',year) and int(year)>2026)
    rows.append(dict(id=rid,analyte=metals[r['ContaminantName']],source_id='who-gemsfood-heavy-metal-contaminants',
        form=food,private_original_food_description=local,
        food_code=r['FoodCode'],market='Source regional reporting label: '+r['RegionName'],
        origin=r['FoodOriginName'] or 'not reported',year='source future-year conflict; unknown collection year' if year_conflict else year,
        reported_year=year,record_type=typ or 'not supplied',n=n,sample_unit='source individual record; physical composition unspecified' if n else 'not identified by source record',
        n_note='One row is not necessarily an independent retail product or independent sampling family. Aggregated/blank record types have no invented N.',
        statistic=statistic,basis=r['ResultBasisName'] or 'unknown',food_state=r['FoodStateName'],portion=r['PortionTypeName'],
        species=r['ContaminantName'],unit='mg/kg',value=value,lower_bound=lo,upper_bound=hi,
        reported=dict(result_text=raw,unit=r['UnitName'],lod=r['LOD'],loq=r['LOQ']),
        censoring=status,analytical_limits_mg_kg=dict(lod=lod,loq=loq),
        positive_below_lod=bool(printed is not None and printed>0 and lod and printed<lod),
        positive_below_loq=bool(printed is not None and printed>0 and loq and printed<loq),
        sampling=r['RepresentativenessName'],lab=r['LabNumber'],analytical_qa=r['AnalyticalQAName'],serial_number=r['SerialNumber'],
        artifact=r['artifact'],artifact_sha256=file_hash[r['artifact']],locator=base['locator'],
        matching_record_locations=r['matching_record_locations'],
        overlap='All physical records retained. Regional roll-ups, infant/full exports and national TDS submissions can overlap. Matching serial/value rows are annotated, not assumed independent or deleted.',
        reference_admission=dict(eligible=False,scientific_reason='Recovered export gives no original sampling-program identifier, submitting country or independently defined study family. RegionName is a reporting roll-up, not study identity. Food descriptions suggest possible national TDS overlap; that is not proof of duplicate observations. Unknown provenance prevents defensible independent-family weighting.',locator=base['locator']),
        limitations='Whole named food and source basis retained; chocolate flavour may not establish actual cocoa composition. Exact source labels are internal because some include private brands. No family/source count, growing-origin ranking, median of aggregates, dry-to-wet conversion or measured zero invented.'))
assert len(rows)+len(decisions)==j['raw_matched_rows']
assert len({r['id'] for r in rows+decisions})==j['raw_matched_rows']
out=dict(source_id='who-gemsfood-heavy-metal-contaminants',source_export='12 recovered June 2026 raw CSV files',
    files=j['files'],identity_verified=True,completeness_verified=True,extraction_complete=False,
    remaining_extraction=['Reconcile original-family and physical-observation identity, regional/infant/full-export duplicates, and all indexed representations against these original rows. Every physical result is retained; this working extraction does not attest completed WHO universe coverage. Recover the separate 193 missing older manifest exports.'],
    rows=rows,scope_decisions=decisions,
    count_summary=dict(physical_rows=j['raw_matched_rows'],retained_occurrence_records=len(rows),content_excluded_rows=len(decisions),analytes=dict(collections.Counter(r['analyte'] for r in rows)),nonnumeric_or_zero_bound_records=sum(r['value'] is None for r in rows)),
    content_decision_basis='Actual FoodName, LocalFoodName, FoodCode, RecordType and numeric/limit cells. Explicit non-chocolate foods, sugar/coffee parent-category false positives, cola misspelling, coffee tasting notes and animal feed excluded by listed primary field contents.',
    no_completion_claim='No canonical ledger, complete discovery gate, independent-family reference or publication acceptance is asserted by this working raw extraction.')
(D/'extractions/who-gemsfood-concentrations-working.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(out['count_summary'])
