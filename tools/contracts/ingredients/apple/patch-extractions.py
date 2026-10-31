"""Reviewed corrections to subagent extraction records, applied reproducibly after re-reading the primary text.

Each correction names the primary locator that supports it. Run after the extraction files are written
and before compose/build. Idempotent.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
ext = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple/extraction'
load = lambda s: json.loads((ext / f'{s}.json').read_text())
def save(s, x): (ext / f'{s}.json').write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')

# FDA 2016 infant/toddler inorganic arsenic survey: ten whole raw apples (Full Analytical Results, PDF p.15
# lines "Apples ... < LOD"; LOD table, last page: tAs LOD 6.1, iAs LOD 1.3–2.2, DMA/MMA LOD 2.9–3.0 ppb).
s = 'fda2016-infant-toddler-foods-inorganic-arsenic'; x = load(s)
apples = [('Organic Red Delicious Apple', 'USA', 6.1), ('Organic Ambrosia Apple', 'USA', None), ('Honey Crisp Apple', 'USA', None), ('Organic Fuji Apple', 'USA', None),
          ('Granny Smith Apple', 'USA', None), ('Envy Apple', 'New Zealand', None), ('Organic Opal Apple', 'USA', None), ('Organic Gala Apple', 'USA', None),
          ('Aurora Apple', 'USA', None), ('Red Delicious Apple', 'USA', 6.4)]
sv = []
for name, origin, tas in apples:
    loc = f'Full Analytical Results PDF p.15, row "{name}" ({origin})'
    sv.append({'sample': name, 'group': f'{name} ({origin})', 'analyte': 'iAs', 'value_ug_kg': None, 'censored': True, 'bound_ug_kg': 2.2, 'locator': loc})
    sv.append({'sample': name, 'group': f'{name} ({origin})', 'analyte': 'tAs', 'value_ug_kg': tas, 'censored': tas is None, 'bound_ug_kg': 6.1, 'locator': loc + ('; trace (TR) value between LOD and LOQ' if tas else '')})
    sv.append({'sample': name, 'group': f'{name} ({origin})', 'analyte': 'DMA', 'value_ug_kg': None, 'censored': True, 'bound_ug_kg': 3.0, 'locator': loc})
x['sample_values'] = sv
for fd in x['findings']:
    if ':DMA_MMA:' in fd['id']:
        fd['analyte'] = 'DMA'; fd['id'] = f'{s}:DMA:apples-all-samples:not_detected'; fd['lod_ug_kg'] = 3.0
        fd['notes'] = (fd.get('notes') or '') + ' MMA, also below LOD in all ten apples, is not a tracked HMI species.'
    if fd['analyte'] == 'iAs' and fd['statistic'] == 'not_detected': fd['lod_ug_kg'] = 2.2
    if fd['analyte'] == 'iAs' and fd['statistic'] == 'mean':
        fd['integrity_flag'] = 'The printed 3.0 ppb average is a placeholder: footnote 1 states that when every result is below the LOD the table lists 3 ppb as the average, and none of the ten apples had detectable inorganic arsenic (summary table PDF p.3, footnotes 1 and 7).'
x.setdefault('notes', []) if isinstance(x.get('notes'), list) else None
save(s, x)

# Hong Kong first TDS metallic contaminants: vanadium is outside the HMI analyte list; keep it in notes only.
s = 'cfs2013-hktds-metallic-contaminants'; x = load(s)
v = [fd for fd in x['findings'] if fd['analyte'] == 'V']
if v:
    x['findings'] = [fd for fd in x['findings'] if fd['analyte'] != 'V']
    note = 'Vanadium in apple (outside the HMI analyte list): ' + '; '.join(f"{fd['statistic']} {fd['reported'].get('text')} ({fd['locator']})" for fd in v)
    x['notes'] = (x['notes'] if isinstance(x.get('notes'), list) else ([x['notes']] if x.get('notes') else [])) + [note]
save(s, x)

# Houlihan 2019 reprints FDA TDS 2014–2017 averages; its inorganic arsenic is computed as 0.80 × total arsenic (Appendix F note), not measured.
s = 'houlihan2019-hbbf-whats-in-baby-food'; x = load(s)
for fd in x['findings']:
    if fd['analyte'] == 'iAs':
        fd['integrity_flag'] = 'Not a measurement: the report derives inorganic arsenic as 0.80 × the FDA total arsenic average (Appendix F, report p.44), so it cannot be compared as an observed inorganic arsenic concentration.'
save(s, x)

# ATSDR 2005 tin profile quotes Biego et al. 1999 (Table 6-3, "Fresh foods", apples n=4); kept as a secondary occurrence result.
print('patched')
