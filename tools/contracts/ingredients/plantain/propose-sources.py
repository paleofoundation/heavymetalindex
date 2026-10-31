"""Write proposed wiki source records for library papers with plantain results and no source record.

Build sessions may not write wiki/sources. These records live in the plantain audit
directory (proposed-sources/) until central adopts them verbatim; the builder overlays
them read-only. Each record states only what the primary text (the library's Marker
conversion, or the PDF where one exists) supports. Their extraction files are copied
from extraction-pending/ into extraction/ so the ledger and table use them.
"""
import json, pathlib, shutil

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/plantain'
out = audit / 'proposed-sources'; out.mkdir(exist_ok=True)

def fm_list(xs): return '[' + ', '.join(json.dumps(x, ensure_ascii=False) for x in xs) + ']'

records = {
 'adjeimensah2021-ghana-mining-home-processing-crops': dict(
  raw_handle='FM_8591352', title='Effect of home processing methods on the levels of heavy metal contaminants in four food crops grown in and around two mining towns in Ghana',
  authors=['Adjei-Mensah R', 'Ofori H', 'Tortoe C', 'Johnson PT', 'Aryee D', 'Frimpong SK'], year=2021, publication='Toxicology Reports 8 (2021) 1830–1838', doi='10.1016/j.toxrep.2021.11.001',
  raw_path='papers-for-claude/hmi-gap-1/10.1016_j.toxrep.2021.11.001.pdf', metals=['Pb', 'Cd', 'tAs', 'tHg'], ingredients=['[[ingredients/plantain]]', '[[ingredients/cassava]]', '[[ingredients/yam]]', '[[ingredients/root-vegetables]]'],
  products=['[[products/fresh-fruit]]'], matrices=['plantain', 'cassava', 'cocoyam', 'yam'], jurisdictions=['GH'], sample_n=40,
  sample_population='Fresh plantain (40 samples) bought from farms along the Birim river (Akwatia, diamond mining) and the Pra and Tano rivers (Obuasi, gold mining), Ghana, March–June 2019; peeled pulp analysed raw and after laboratory boiling, frying and roasting',
  heading='Adjei-Mensah et al. 2021 — Home processing and metals in Ghanaian food crops from mining towns',
  overview='Adjei-Mensah and colleagues bought cassava, cocoyam, plantain and yam from farms beside rivers used for illegal small-scale mining at Akwatia (diamonds) and Obuasi (gold), Ghana, on five occasions between March and June 2019, and from prepared-food sellers in the two towns. Farm samples were washed and peeled, then split into unprocessed, boiled, fried and roasted portions in the laboratory. Lead, cadmium, arsenic and mercury were measured by ICP-MS after microwave digestion (manganese by flame AAS). Table 4 reports plantain results by town and processing method as means ± SD in mg/kg; the basis (fresh or dry) is not stated, and samples were milled without a described drying step.',
  numbers=['Unprocessed peeled plantain pulp: lead 1.02 ± 0.65 mg/kg (Obuasi) and 1.11 ± 0.65 mg/kg (Akwatia); total mercury 0.12 ± 0.07 and 0.13 ± 0.05 mg/kg; total arsenic 0.02 ± 0.01 mg/kg at both towns; cadmium <0.01 mg/kg (Table 4).',
           'Laboratory boiling and frying gave plantain lead of 0.04–0.07 mg/kg; roasting gave 0.13 ± 0.06 mg/kg (Obuasi) and 0.75 ± 0.04 mg/kg (Akwatia) (Table 4; percentage reductions in Table 6).',
           'Mercury fell to 0.04–0.05 mg/kg after boiling or frying of Akwatia plantain but changed little at Obuasi (0.10–0.11 mg/kg) or after roasting (0.11–0.12 mg/kg) (Table 4).',
           'Prepared plantain bought from market sellers is reported only pooled with other crops (Figures 1–2), not as plantain results.'],
  methods='Microwave digestion (HNO3/H2O2) and ICP-MS (Agilent 7700) for Pb, Cd, As and Hg; spike recoveries 89.6–99.8%; no certified reference material reported. The printed detection limit ("0.0000 ppb" for Cd) is not usable, and "<0.01" is not defined as an LOD or LOQ. Per-group sample counts are not stated; Table 1 gives 40 plantain samples overall.',
  fitness='The paired design supports within-study comparisons of processing methods for the same farm samples. Changes are concentration changes on an unstated basis without moisture or mass balance, so they do not show how much metal was removed. The abstract calls boiling the most effective method while Section 3.6 ranks frying first; Akwatia roasted lead (0.75 ± 0.04) carries the same significance letter as Obuasi roasted (0.13 ± 0.06). The intake and hazard tables (Tables 7–8) contain values that do not follow from Table 4. Values were checked against the publisher PDF (HMI-GAP-INGEST-1 batch-01).'),
 'borteysam2015-tarkwa-cassava-plantain-soil-metals': dict(
  raw_handle='FM_4555249', title='Accumulation of Heavy Metals and Metalloid in Foodstuffs from Agricultural Soils around Tarkwa Area in Ghana, and Associated Human Health Risks',
  authors=['Bortey-Sam N', 'Nakayama SMM', 'Akoto O', 'Ikenaka Y', 'Fobil JN', 'Baidoo E', 'Mizukawa H', 'Ishizuka M'], year=2015, publication='International Journal of Environmental Research and Public Health (2015)', doi=None,
  raw_path='raw/markdown/FM_4555249/FM_4555249.md', metals=['Pb', 'Cd', 'tAs', 'tHg', 'Ni', 'Cr'], ingredients=['[[ingredients/plantain]]', '[[ingredients/cassava]]', '[[ingredients/root-vegetables]]'],
  products=['[[products/fresh-fruit]]'], matrices=['plantain', 'cassava', 'soil'], jurisdictions=['GH'], sample_n=32,
  sample_population='32 plantain samples (edible part) from farms in 10 communities around the Tarkwa gold-mining area, Western Region, Ghana, collected June 2012, with paired farm soils',
  heading='Bortey-Sam et al. 2015 — Metals in cassava and plantain from farms around Tarkwa, Ghana',
  overview='Bortey-Sam and colleagues sampled cassava and plantain with the farm soils they grew in, in communities around the Tarkwa gold mines in June 2012. Arsenic, cadmium, chromium, nickel, lead (ICP-MS) and total mercury (thermal decomposition AAS) were measured, and soil-to-crop transfer factors and hazard quotients were calculated by community. Table 1 reports plantain as geometric mean, SD, median, minimum and maximum for all 32 samples; per-community plantain concentrations are not printed.',
  numbers=['Plantain geometric means (Table 1, Section 3.1): lead 0.0070, total arsenic 0.012, cadmium 0.0010, total mercury 0.0010, total chromium 0.025 and nickel 3.6 mg/kg.',
           'Plantain lead ranged 0.0022–0.020 mg/kg and nickel 2.9–4.1 mg/kg (Table 1).',
           'The authors report arsenic, cadmium, chromium and mercury in all foodstuffs below Codex values and attribute arsenic partly to deposition from ore roasting (Section 3.1).'],
  methods='HNO3/H2O2 digestion of 0.5 g dried sample; ICP-MS (Agilent 7700); total mercury by MA-3000. Blanks and duplicates every 10 samples; sediment and tissue reference materials with 80–115% recovery; no food-matrix reference material. Detection limits are printed in ng/g at values that appear to be instrument limits.',
  fitness='The basis is internally inconsistent: Table 1 and Section 3.1 label foodstuff results mg/kg wet weight, while Section 2.3 says results are expressed on a dry-weight basis after drying at 45 °C. The plantain cadmium minimum is "nd" while its geometric mean, SD and median all equal 0.0010 mg/kg. In the library copy (a text conversion with scrambled table digits) several plantain cells cannot be read unambiguously (mercury and arsenic maxima, chromium median and maximum); the geometric means are confirmed by the paper\'s text. The DOI and page numbers are not printed in the library copy.'),
 'orisakwe2012-owerri-food-crops-fruits-metals': dict(
  raw_handle='FM_3567425', title='Heavy metals health risk assessment for population via consumption of food crops and fruits in Owerri, South Eastern, Nigeria',
  authors=['Orisakwe OE', 'Nduka JK', 'Amadi CN', 'Dike DO', 'Bede O'], year=2012, publication='Chemistry Central Journal 2012, 6:77', doi='10.1186/1752-153X-6-77',
  raw_path='raw/studies/FM_3567425_Heavy_metals_health_risk_assessment_for_population_via_consu.pdf', metals=['Pb', 'Cd', 'Ni'], ingredients=['[[ingredients/plantain]]', '[[ingredients/fruit]]', '[[ingredients/vegetables]]'],
  products=['[[products/fresh-fruit]]'], matrices=['plantain', 'food crops', 'fruits', 'soil'], jurisdictions=['NG'], sample_n=None,
  sample_population='Commonly grown food crops and fruits, including plantain (Musa paradisiaca), and farm soils from Ohaji, Umuagwo and Owerri, Imo State, Nigeria; collection dates not reported',
  heading='Orisakwe et al. 2012 — Lead, cadmium and nickel in food crops and fruits, Owerri, Nigeria',
  overview='Orisakwe and colleagues measured lead, cadmium and nickel by flame AAS in food crops, fruits and soils from Ohaji, Umuagwo and Owerri in Imo State, Nigeria, and estimated daily intakes and health-risk indices. Samples were washed, oven-dried at 70–80 °C and powdered before digestion, so results are on a dry-weight basis, although the tables do not label it. Table 1 gives one value per crop.',
  numbers=['Plantain (Musa paradisiaca), edible part: lead not detected, cadmium 0.11 mg/kg, nickel 1.00 mg/kg (Table 1).',
           'Table 5 is a derived daily-intake table (plantain "Nil | 0.0007 | 0.0062"), not concentrations; its unit label does not match the calculation.'],
  methods='Dry ashing and HClO4/HNO3 digestion; flame AAS (Unicam 929). Detection limit 0.001 ppm in solution for each metal; spike recovery performed but recoveries not reported; no certified reference material. The number of plantain samples and the site of each are not stated.',
  fitness='A single pooled value per crop without sample counts or dispersion. Some values for other crops (for example rice lead 61.17 mg/kg) are implausibly high for food analysed by flame AAS, so the study-level analytical quality is uncertain.'),

 'mode2026-calcium-carbide-ripening-climacteric-fruits': dict(
  raw_handle='HMI-GAP-1-batch-01', title='Effects of Chemical Ripening With Calcium Carbide on Nutritional Composition, Antioxidant Capacity and Heavy Metal Accumulation in Climacteric Fruits',
  authors=['Mode AM', 'Magaji UF', 'Babatunde MS', 'Dandare A', 'Dabai IA', 'Dandare SU'], year=2026, publication='International Journal of Food Science 2026:7226409', doi='10.1155/ijfo/7226409',
  raw_path='papers-for-claude/hmi-gap-1/10.1155_ijfo_7226409.pdf', metals=['tAs', 'Cd', 'Pb'], ingredients=['[[ingredients/plantain]]', '[[ingredients/banana]]', '[[ingredients/fruit]]'],
  products=['[[products/fresh-fruit]]'], matrices=['plantain', 'banana', 'mango'], jurisdictions=['NG'], sample_n=15,
  sample_population='Mature green banana, mango and plantain (Musa paradisiaca, voucher UDUH/ANS/0121) bought at Kasuwar Daji Market, Sokoto, Nigeria; five fruits per group ripened naturally or with 10 or 30 g/kg calcium carbide; dates not reported',
  heading='Mode et al. 2026 — Calcium carbide ripening and arsenic, cadmium and lead in banana, mango and plantain, Sokoto, Nigeria',
  overview='Mode and colleagues ripened mature green banana, mango and plantain from one market source in Sokoto, Nigeria, either naturally or with technical calcium carbide at 10 or 30 g per kg of fruit, then measured proximate composition, phytochemicals, antioxidant capacity, minerals and arsenic, cadmium and lead. Metals were determined by AAS after nitric/perchloric digestion of homogenised fruit, in triplicate, with five fruits per group. Table 3 reports means ± SD in mg/kg together with the composition of the carbide itself.',
  numbers=['Plantain total arsenic: 1.640 ± 0.364 mg/kg naturally ripened, 5.930 ± 1.176 with 10 g/kg and 9.940 ± 2.436 mg/kg with 30 g/kg carbide (Table 3, p. 12).',
           'Plantain lead: 0.052 ± 0.021 (control), 0.143 ± 0.038 and 0.183 ± 0.011 mg/kg; cadmium 0.001–0.003 mg/kg (Table 3).',
           'The calcium carbide used contained arsenic 21.75, cadmium 0.052 and lead 0.881 mg/kg (Table 3).'],
  methods='HNO3/HClO4 wet digestion of 0.5 mL homogenate; AAS (PerkinElmer PinAAcle 900H). No detection limit, reference material or recovery is reported for arsenic, cadmium or lead, and the arsenic technique (for example hydride generation) is not described.',
  fitness='A controlled within-study comparison of ripening treatments on fruit from one bunch. Absolute arsenic levels are far above other plantain data, so the size of the levels is uncertain even though the increase with carbide is reported as significant. The plantain control lead is printed identically to the mango control lead (0.052 ± 0.021), so a copying error cannot be excluded. Whether metals were measured on peeled pulp or whole fruit is not stated.'),
}

for sid, r in records.items():
    lines = ['---', 'type: source', f"raw_handle: {r['raw_handle']}", f'cite_key: {sid}', f"title: {json.dumps(r['title'], ensure_ascii=False)}",
             f"authors: [{', '.join(r['authors'])}]", f"year: {r['year']}", f"publication: {json.dumps(r['publication'], ensure_ascii=False)}",
             f"doi: {r['doi'] or 'null'}", f"access_url: {('https://doi.org/' + r['doi']) if r['doi'] else 'null'}", 'source_type: peer-reviewed', 'evidence_tier: A',
             'license: "not stated"', f"raw_path: {r['raw_path']}", f"metals: [{', '.join(r['metals'])}]", f"ingredients: {fm_list(r['ingredients'])}",
             f"products: {fm_list(r['products'])}", f"matrices: [{', '.join(r['matrices'])}]", f"jurisdictions: [{', '.join(r['jurisdictions'])}]", 'near_duplicates: []',
             f"sample_n: {r['sample_n'] if r['sample_n'] is not None else 'null'}", f"sample_population: {json.dumps(r['sample_population'], ensure_ascii=False)}",
             'wiki_doi: null', 'sampling_locations: []', 'sampling_year_range: null', 'updated: 2026-10-22', '---', '', f"# {r['heading']}", '', '## Overview', '', r['overview'], '',
             '## Key numbers', '', *[f'- {n}' for n in r['numbers']], '', '## Methods (brief)', '', r['methods'], '', '## Evidence Fitness', '', r['fitness'], '',
             '## Related evidence', '- [[ingredients/plantain]]', *[f'- [[metals/{m}]]' for m in {'Pb': 'lead', 'Cd': 'cadmium', 'tAs': 'arsenic', 'tHg': 'mercury', 'Ni': 'nickel', 'Cr': 'chromium'}.values() if any(k in r['metals'] for k, v in {'Pb': 'lead', 'Cd': 'cadmium', 'tAs': 'arsenic', 'tHg': 'mercury', 'Ni': 'nickel', 'Cr': 'chromium'}.items() if v == m)], '']
    (out / f'{sid}.md').write_text('\n'.join(lines))
    src = audit / 'extraction-pending' / f'{sid}.json'
    if not src.exists():  # extracted directly (HMI-GAP batch papers)
        src = audit / 'extraction' / f'{sid}.json'
    x = json.loads(src.read_text()); x['proposed_record'] = f'proposed-sources/{sid}.md'
    (audit / 'extraction' / f'{sid}.json').write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')
print('proposed', sorted(records))
