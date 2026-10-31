"""Normalize all eligible trace-element records after original-row reconciliation."""
from pathlib import Path
import json, collections
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
j=json.loads((D/'extractions/fda2022-primary-reconciliation.json').read_text())
metals={'Chromium':'Cr','Copper':'Cu','Iron':'Fe','Manganese':'Mn','Molybdenum':'Mo','Selenium':'Se','Zinc':'Zn','Arsenic (total)':'tAs','Cadmium':'Cd','Lead':'Pb','Mercury':'tHg','Nickel':'Ni','Strontium':'Sr','Uranium':'U','Vanadium':'V'}
rows=[];context=[]
for r in j['records']:
    if r['analyte'] not in metals:
        context.append(dict(index_item_id=r['index_item_id'],locator=r['original_locator'],disposition='context_only',rationale='Macro-element or iodine nutritional composition; retained in original data, outside trace-metal/metalloid contaminant occurrence scope.',analyte=r['analyte']))
        continue
    unit=r['units_original'];assert unit in ['ppm','ppb'],unit
    factor=1 if unit=='ppm' else .001
    raw=float(r['concentration_original']);rl=float(r['reporting_limit_original'])
    detected=r['result_status']=='detected'
    lo=float(r['concentration_lower_bound_ppb'])/1000
    hi=float(r['concentration_upper_bound_ppb'])/1000
    if detected:assert lo==hi and abs(lo-raw*factor)<1e-10
    else:assert lo==0 and abs(hi-rl*factor)<1e-10,(r['result_status'],r)
    metal=metals[r['analyte']]
    rows.append(dict(id=f"fda2022-{r['sample_id']}-{metal}",source_id='fda2022-tds-elements-fy2018-fy2020',
        item_ids=[r['index_item_id']],family_id='fda-tds-fy2018-fy2020',analyte=metal,
        form=r['tds_food_description'],food_code=r['tds_food_number'],market='United States total-diet purchase market; '+r['region'],
        origin='growing or ingredient origin not reported',year=r['calendar_year'],fiscal_year=r['fiscal_year'],season=r['season'],collection=r['collection'],
        n=1,sample_unit='one measured FDA prepared-food composite',
        n_note='Regional/national sampling composites retain physical identity; different analytes on the same composite do not add independent food samples.',
        statistic='individual measured composite concentration' if detected else 'below administrative reporting limit',
        species='total arsenic' if metal=='tAs' else 'mercury, unspecified chemical species' if metal=='tHg' else 'total element',
        basis=r['basis'],reported=dict(value=raw,reporting_limit=rl,unit=unit,result_status=r['result_status']),
        value=lo if detected else None,lower_bound=lo,upper_bound=hi,unit='mg/kg',
        conversion='ppm = mg/kg; ppb ÷1000 = mg/kg. No density, moisture, recipe or species conversion.',
        locator=r['original_locator']+f"; normalized sample table row {r['index_row']}, analyte {r['analyte']}",
        censoring=r['censoring_note']+' Original FDA administrative non-detect code is not an observed zero.' if not detected else r['censoring_note'],
        limitations='Whole named food matrix; mixed milk, confectionery or cake concentrations cannot be attributed solely to the cocoa ingredient. Purchase region is not a growing origin.'))
assert len(rows)==1455,len(rows)
assert len({r['id'] for r in rows})==len(rows)
assert len(context)==582
out=dict(source_id='fda2022-tds-elements-fy2018-fy2020',artifact=j['artifact'],sha256=j['artifact_sha256'],identity_verified=True,completeness_verified=True,
    identity_proof=j['identity_proof'],extraction_complete=True,rows=rows,context_items=context,
    physical_composites=j['physical_composites'],complete_scope='All 15 eligible trace-metal/metalloid analytes for all 97 identified cocoa/chocolate-containing food composites: 1455 records. Six macro/nonmetal nutrient analytes ×97 remain explicit nutritional-context rows. All 2037 physical source records reconciled, none silently sampled.',
    overlap='The same foods/program may reappear in WHO GEMS/Food exports and FDA summary/profile/route representations. Those representations are not independent sampling families. Reconcile program/serial/value identity before reference pooling.')
(D/'extractions/fda2022-tds-elements-fy2018-fy2020.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(dict(rows=len(rows),context=len(context),physical_composites=j['physical_composites'],censoring=dict(collections.Counter(r['statistic'] for r in rows))))
