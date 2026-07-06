/* Central Library — functional port of Central Library.dc.html (Claude Design).
   The mockup used a custom <x-dc> reactive framework (DCLogic/sc-for/sc-if);
   this recreates the same visual output and behavior in plain JS. Inline styles
   are transcribed verbatim from the source so the result is pixel-faithful.

   Events use document-level delegation (data-act / data-input) rather than
   inline onclick=/oninput= attributes, so the buttons work even under a strict
   Content-Security-Policy that blocks inline handlers (preview panels, embeds).
   All data below is the mockup's sample data. */

const CL = {
  state: {
    tab: 'library', build: 'all', q: '', sort: 'recent', selIdx: null,
    unfiled: 312, dupes: 27, toast: null,
    presetGroupId: 'hmi-metals', presetTermIdx: 0, newTerm: '',
    groups: [
      { id: 'hmi-metals', build: 'hmi', callType: 'heavy metal', name: 'Infant & child foods — metals', domainFilter: 'infant formula OR baby cereal OR toddler food OR follow-on formula OR "baby food"', dateMin: '2000', dateMax: '3000', max: 200, serp: true, terms: [
        { label: 'Lead (Pb)', base: 'lead', mesh: 'Lead', syn: 'Pb' },
        { label: 'Cadmium (Cd)', base: 'cadmium', mesh: 'Cadmium', syn: 'Cd' },
        { label: 'Inorganic arsenic (iAs)', base: 'inorganic arsenic', mesh: 'Arsenic', syn: 'iAs' },
        { label: 'Total mercury (tHg)', base: 'mercury', mesh: 'Mercury', syn: 'tHg' },
        { label: 'Nickel (Ni)', base: 'nickel', mesh: 'Nickel', syn: '' },
        { label: 'Aluminium (Al)', base: 'aluminium', mesh: 'Aluminum', syn: 'aluminum' },
      ] },
      { id: 'hmi-cats', build: 'hmi', callType: 'product category', name: 'Product categories — HMTc', domainFilter: 'lead OR cadmium OR arsenic OR mercury OR "heavy metal" OR "trace element"', dateMin: '2000', dateMax: '3000', max: 200, serp: true, terms: [
        { label: 'Infant formula', base: 'infant formula', mesh: 'Infant Formula', syn: 'follow-on formula' },
        { label: 'Rice cereal (dry)', base: 'infant rice cereal', mesh: '', syn: 'rice cereal' },
        { label: 'Dark chocolate', base: 'dark chocolate', mesh: 'Cacao', syn: 'cocoa' },
        { label: 'Teething biscuits', base: 'teething biscuit', mesh: '', syn: 'teething rusk' },
        { label: 'Toddler fruit pouches', base: 'fruit puree pouch', mesh: '', syn: 'baby food pouch' },
        { label: 'Spices', base: 'spice', mesh: 'Spices', syn: 'seasoning' },
      ] },
      { id: 'mmed-cond', build: 'mmed', callType: 'condition', name: 'High-leverage conditions', domainFilter: 'microbiome OR microbiota OR dysbiosis', dateMin: '2000', dateMax: '3000', max: 200, serp: false, terms: [
        { label: 'Endometriosis', base: 'endometriosis', mesh: 'Endometriosis', syn: '' },
        { label: 'Bacterial vaginosis', base: 'bacterial vaginosis', mesh: 'Vaginosis, Bacterial', syn: 'BV' },
        { label: 'Chronic kidney disease', base: 'chronic kidney disease', mesh: 'Renal Insufficiency, Chronic', syn: 'CKD' },
        { label: 'Interstitial cystitis', base: 'interstitial cystitis', mesh: 'Cystitis, Interstitial', syn: 'painful bladder syndrome' },
        { label: 'Rosacea', base: 'rosacea', mesh: 'Rosacea', syn: '' },
        { label: 'Gestational diabetes', base: 'gestational diabetes', mesh: 'Diabetes, Gestational', syn: 'GDM' },
      ] },
      { id: 'wiki-taxa', build: 'wiki', callType: 'condition', name: 'Taxa & broad microbiome', domainFilter: 'microbiome OR microbiota', dateMin: '2000', dateMax: '3000', max: 150, serp: false, terms: [
        { label: 'Fecal microbiota transplant', base: 'fecal microbiota transplantation', mesh: 'Fecal Microbiota Transplantation', syn: 'FMT' },
        { label: 'Short-chain fatty acids', base: 'short-chain fatty acids', mesh: 'Fatty Acids, Volatile', syn: 'SCFA' },
        { label: 'Akkermansia muciniphila', base: 'Akkermansia muciniphila', mesh: '', syn: '' },
      ] },
    ],
  },

  builds: {
    hmi:  { label: 'Heavy Metal Index',   color: '#8B2A4A' },
    mmed: { label: 'Microbiome Medicine', color: '#506168' },
    wiki: { label: 'WikiBiome',           color: '#9A938E' },
  },

  papers: [
    { title: 'Lead exposure from infant formula: a survey of 230 powdered products', authors: 'Ojha S, Warrington J, et al.', journal: 'BMC Public Health', year: 2024, pmid: '38210011', pmcid: 'PMC10987654', doi: '10.1186/s12889-024-11220-8', builds: [['hmi','direct evidence'],['wiki','exposure only']], pdf: 'stored', resolver: 'PMC', bytes: '482 KB', path: '/library/hmi/2024-ojha-38210011.pdf', tags: ['Pb','infant formula','lead'], hasDupe: true, dupeNote: '2 copies merged (HMI + WikiBiome pull)' },
    { title: 'Vaginal microbiota composition in bacterial vaginosis and its recurrence', authors: 'Mendez R, Idris K, et al.', journal: 'Frontiers in Microbiology', year: 2023, pmid: '38119842', pmcid: 'PMC10420011', doi: '10.3389/fmicb.2023.00991', builds: [['mmed','direct evidence'],['wiki','direct evidence']], pdf: 'stored', resolver: 'OA', bytes: '1.2 MB', path: '/library/shared/2023-mendez-38119842.pdf', tags: ['bacterial vaginosis','microbiome'] },
    { title: 'Cadmium and inorganic arsenic in rice-based cereals for infants', authors: 'Kaur T, Singh P, et al.', journal: 'J. Food Composition & Analysis', year: 2022, pmid: '35561200', pmcid: '—', doi: '10.1016/j.jfca.2022.104612', builds: [['hmi','direct evidence']], pdf: 'couldnt', resolver: 'publisher', bytes: '—', path: 'url found · fetch blocked (403)', tags: ['Cd','iAs','rice cereal','arsenic','cadmium'] },
    { title: 'Gut microbiome signatures in chronic kidney disease progression', authors: 'Al-Rashed F, Owusu B, et al.', journal: 'Kidney International', year: 2025, pmid: '39901220', pmcid: 'PMC11720344', doi: '10.1016/j.kint.2025.01.014', builds: [['mmed','direct evidence']], pdf: 'stored', resolver: 'PMC', bytes: '2.0 MB', path: '/library/mmed/2025-alrashed-39901220.pdf', tags: ['CKD','chronic kidney disease','microbiome'] },
    { title: 'Total and methylmercury in commercial canned tuna', authors: 'Nguyen P, Halloran M, et al.', journal: 'Food Control', year: 2023, pmid: '37220145', pmcid: '—', doi: '10.1016/j.foodcont.2023.109733', builds: [['hmi','direct evidence']], pdf: 'stored', resolver: 'OA', bytes: '640 KB', path: '/library/hmi/2023-nguyen-37220145.pdf', tags: ['MeHg','tHg','canned tuna','mercury'] },
    { title: 'Arsenic speciation in dark chocolate and cocoa products', authors: 'Ferreira L, Costa D, et al.', journal: 'J. Agric. & Food Chemistry', year: 2024, pmid: '38640022', pmcid: '—', doi: '10.1021/acs.jafc.4c00219', builds: [['hmi','direct evidence']], pdf: 'stored', resolver: 'publisher', bytes: '910 KB', path: '/library/hmi/2024-ferreira-38640022.pdf', tags: ['iAs','dark chocolate','arsenic'] },
    { title: 'Nickel content of plant-based infant foods', authors: 'Oyelami K, Bergström A, et al.', journal: 'Food Additives & Contaminants', year: 2021, pmid: '34110778', pmcid: '—', doi: '10.1080/19440049.2021.1901990', builds: [['hmi','direct evidence'],['wiki','exposure only']], pdf: 'notfound', resolver: '—', bytes: '—', path: 'no resolver produced a candidate URL', tags: ['Ni','plant-based toddler milk','nickel'] },
    { title: 'Endometriosis and the reproductive tract microbiome: a systematic review', authors: 'Costa M, Vidal J, et al.', journal: 'Human Reproduction Update', year: 2024, pmid: '38550190', pmcid: 'PMC10999233', doi: '10.1093/humupd/dmae009', builds: [['mmed','direct evidence']], pdf: 'stored', resolver: 'PMC', bytes: '1.6 MB', path: '/library/mmed/2024-costa-38550190.pdf', tags: ['endometriosis','microbiome'] },
    { title: 'Lead in ground cinnamon and spice blends: a market survey', authors: 'Patel D, Osei R, et al.', journal: 'J. Food Protection', year: 2023, pmid: '37009912', pmcid: '—', doi: '10.4315/JFP-22-330', builds: [['hmi','direct evidence']], pdf: 'stored', resolver: 'OA', bytes: '520 KB', path: '/library/hmi/2023-patel-37009912.pdf', tags: ['Pb','spices','lead','cinnamon'] },
    { title: 'Fecal microbiota transplantation outcomes across gastrointestinal conditions', authors: 'Ibrahim S, Lund K, et al.', journal: 'Gut Microbes', year: 2022, pmid: '35770021', pmcid: 'PMC9300881', doi: '10.1080/19490976.2022.2077122', builds: [['mmed','broad context'],['wiki','direct evidence']], pdf: 'stored', resolver: 'OA', bytes: '1.1 MB', path: '/library/shared/2022-ibrahim-35770021.pdf', tags: ['FMT','microbiome'] },
    { title: 'Aluminium migration from packaging into infant formula', authors: 'Sato Y, Meunier P, et al.', journal: 'Food Chemistry', year: 2021, pmid: '33882001', pmcid: '—', doi: '10.1016/j.foodchem.2021.129440', builds: [['hmi','direct evidence']], pdf: 'couldnt', resolver: 'publisher', bytes: '—', path: 'url found · paywall', tags: ['Al','infant formula','aluminium'] },
    { title: 'Inorganic arsenic in rice: a global exposure assessment', authors: 'Rahman A, Whitfield C, et al.', journal: 'Environment International', year: 2020, pmid: '32100455', pmcid: 'PMC7000122', doi: '10.1016/j.envint.2020.105512', builds: [['hmi','direct evidence'],['wiki','exposure only']], pdf: 'stored', resolver: 'PMC', bytes: '2.4 MB', path: '/library/shared/2020-rahman-32100455.pdf', tags: ['iAs','rice','arsenic'] },
    { title: 'Teething biscuit heavy-metal content: a pilot study', authors: 'Duman E, Fischer L, et al.', journal: 'medRxiv (preprint)', year: 2025, pmid: '—', pmcid: '—', doi: '10.1101/2025.03.14.25323901', builds: [['hmi','direct evidence']], pdf: 'stored', resolver: 'SERP', bytes: '380 KB', path: '/library/unfiled/2025-duman-preprint.pdf', tags: ['Pb','Cd','teething biscuits'], isNew: true },
    { title: 'Skin microbiome composition in rosacea: a 16S rRNA survey', authors: 'Voss H, Almeida R, et al.', journal: 'Experimental Dermatology', year: 2024, pmid: '38330012', pmcid: '—', doi: '10.1111/exd.15012', builds: [['mmed','direct evidence']], pdf: 'stored', resolver: 'OA', bytes: '720 KB', path: '/library/mmed/2024-voss-38330012.pdf', tags: ['rosacea','skin microbiome'] },
  ],

  // ── helpers (ported) ─────────────────────────────────────────────────────
  esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); },

  pdfStyleFor(status) {
    const m = {
      stored:   { label: 'stored',    color: '#2C6E49', bg: '#E6F0EA' },
      couldnt:  { label: "couldn't",  color: '#9A6A18', bg: '#F6EEDD' },
      notfound: { label: 'not found', color: 'rgba(26,29,36,0.55)', bg: '#F1EFEC' },
    }[status] || { label: status, color: '#33373F', bg: '#F1EFEC' };
    return { ...m, css: `font-size:11px;font-weight:600;color:${m.color};background:${m.bg};border-radius:5px;padding:3px 8px;white-space:nowrap;` };
  },

  buildListFor(p) {
    return p.builds.map(([id, kind]) => {
      const b = this.builds[id];
      return { label: b.label, kind, dotStyle: `width:9px;height:9px;border-radius:2px;background:${b.color};flex:0 0 auto;` };
    });
  },

  resolveTerm(g, t) {
    const cond = `"${t.base}"[Title/Abstract]` + (t.syn ? ` OR "${t.syn}"[Title/Abstract]` : '') + (t.mesh ? ` OR "${t.mesh}"[MeSH Terms]` : '');
    return `(${cond}) AND (${g.domainFilter}) AND ("${g.dateMin}"[PDAT] : "${g.dateMax || '3000'}"[PDAT])`;
  },

  serpQ(g, t) {
    const dom = (g.domainFilter.split(' OR ')[0] || '').replace(/"/g, '');
    return `"${t.base}" ${dom} filetype:pdf`;
  },

  updateGroup(id, patch) {
    this.state.groups = this.state.groups.map(g => g.id === id ? { ...g, ...(typeof patch === 'function' ? patch(g) : patch) } : g);
    this.render();
  },

  toastMsg(msg) { this.state.toast = msg; this.render(); clearTimeout(this._t); this._t = setTimeout(() => { this.state.toast = null; this.render(); }, 3200); },

  setState(patch) { Object.assign(this.state, patch); this.render(); },

  // ── actions (called by the delegated dispatcher) ─────────────────────────
  setTab(id) { this.setState({ tab: id, selIdx: null }); },
  setBuild(id) { this.setState({ build: id }); },
  setQ(v) { this.setState({ q: v }); },
  clearQ() { this.setState({ q: '' }); },
  setSort(id) { this.setState({ sort: id }); },
  chipQ(v) { this.setState({ q: v }); },
  openPaper(idx) { this.setState({ selIdx: Number(idx) }); },
  closeDrawer() { this.setState({ selIdx: null }); },
  ingest() {
    this.state.unfiled += 3; this.state.dupes += 1;
    this.state.toast = '4 files dropped → 3 new to /unfiled, 1 duplicate flagged';
    this.render();
    clearTimeout(this._t); this._t = setTimeout(() => { this.state.toast = null; this.render(); }, 3200);
  },
  setPresetGroup(id) { this.setState({ presetGroupId: id, presetTermIdx: 0 }); },
  setTermIdx(i) { this.setState({ presetTermIdx: Number(i) }); },
  removeTerm(i) {
    const cg = this._cg();
    this.updateGroup(cg.id, g => ({ terms: g.terms.filter((_, j) => j !== Number(i)) }));
    this.state.presetTermIdx = Math.max(0, Math.min(this.state.presetTermIdx, this._cg().terms.length - 1));
    this.render();
  },
  onNewTerm(v) { this.state.newTerm = v; },
  addTerm() {
    const cg = this._cg(); const v = (this.state.newTerm || '').trim(); if (!v) return;
    const nextIdx = cg.terms.length;
    this.updateGroup(cg.id, g => ({ terms: [...g.terms, { label: v, base: v.toLowerCase(), mesh: '', syn: '' }] }));
    this.setState({ newTerm: '', presetTermIdx: nextIdx });
  },
  onDomainFilter(v) { this.updateGroup(this._cg().id, { domainFilter: v }); },
  onDateMin(v) { this.updateGroup(this._cg().id, { dateMin: v }); },
  onMax(v) { this.updateGroup(this._cg().id, { max: v.replace(/[^0-9]/g, '') }); },
  toggleSerp() { const cg = this._cg(); this.updateGroup(cg.id, { serp: !cg.serp }); },
  onSyn(v) { const cg = this._cg(), ti = this._ti(); this.updateGroup(cg.id, g => ({ terms: g.terms.map((tm, j) => j === ti ? { ...tm, syn: v } : tm) })); },
  onMesh(v) { const cg = this._cg(), ti = this._ti(); this.updateGroup(cg.id, g => ({ terms: g.terms.map((tm, j) => j === ti ? { ...tm, mesh: v } : tm) })); },
  runGroup() { const cg = this._cg(); this.toastMsg(`Queued ${cg.terms.length} terms from “${cg.name}” → ${this.builds[cg.build].label}`); },
  runTerm() { const cg = this._cg(), t = this._term(); this.toastMsg(`Running pull: ${t.label} · ${cg.name}`); },
  newGroup() { this.toastMsg('New preset group — creation form opens in the full build-out'); },
  newType() { this.toastMsg('New call type — define a custom pull kind beyond metal / condition / category'); },

  _cg() { return this.state.groups.find(g => g.id === this.state.presetGroupId) || this.state.groups[0]; },
  _ti() { const cg = this._cg(); return Math.max(0, Math.min(this.state.presetTermIdx, cg.terms.length - 1)); },
  _term() { const cg = this._cg(); return cg.terms[this._ti()] || cg.terms[0] || { label: '', base: '', syn: '', mesh: '' }; },

  // ── render ───────────────────────────────────────────────────────────────
  render() {
    const active = document.activeElement;
    const focusId = active && active.id ? active.id : null;
    const selStart = focusId && 'selectionStart' in active ? active.selectionStart : null;
    const selEnd = focusId && 'selectionEnd' in active ? active.selectionEnd : null;

    document.getElementById('root').innerHTML = this.view();

    if (focusId) {
      const el = document.getElementById(focusId);
      if (el) { el.focus(); if (selStart != null) { try { el.setSelectionRange(selStart, selEnd); } catch {} } }
    }
  },

  view() {
    const s = this.state;
    return `<div style="height:100vh;display:flex;flex-direction:column;background:#FDFDFC;overflow:hidden;">
      ${this.appBar()}
      ${s.tab === 'library' ? this.libraryTab() : ''}
      ${s.tab === 'wishlist' ? this.wishlistTab() : ''}
      ${s.tab === 'presets' ? this.presetsTab() : ''}
      ${(s.tab === 'pulls' || s.tab === 'coverage') ? this.otherTab() : ''}
      ${s.selIdx != null ? this.drawer() : ''}
      ${s.toast ? this.toast() : ''}
    </div>`;
  },

  appBar() {
    const s = this.state;
    const tabDef = [['library','Library'],['wishlist','Wishlist'],['pulls','Pulls'],['coverage','Coverage'],['presets','Presets']];
    const tabs = tabDef.map(([id, label]) =>
      `<button data-act="setTab" data-arg="${id}" style="font-size:13px;font-weight:${s.tab===id?600:500};color:${s.tab===id?'#8B2A4A':'rgba(26,29,36,0.55)'};background:${s.tab===id?'#F7F2F4':'transparent'};border:none;padding:7px 13px;border-radius:7px;cursor:pointer;">${label}</button>`
    ).join('');
    return `<div style="display:flex;align-items:center;gap:22px;padding:0 24px;height:60px;border-bottom:1px solid #E7E5E2;background:#fff;flex:0 0 auto;z-index:5;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:600;letter-spacing:.16em;color:#1A1D24;">HEAVY METAL FETCH</div>
      <div style="display:flex;gap:2px;">${tabs}</div>
      <div style="flex:1;"></div>
      <div class="mono" style="font-size:12px;color:rgba(26,29,36,0.5);display:flex;align-items:center;gap:7px;"><span style="width:7px;height:7px;border-radius:50%;background:#5BB85B;"></span>synced 14:02</div>
      <button data-act="setTab" data-arg="presets" style="font-size:13px;font-weight:600;color:#fff;background:#8B2A4A;border:none;padding:9px 16px;border-radius:8px;cursor:pointer;">+ New pull</button>
    </div>`;
  },

  libraryTab() {
    const s = this.state;
    const inBuild = (p, id) => id === 'all' ? true : id === 'unfiled' ? !!p.isNew : p.builds.some(b => b[0] === id);

    const buildDef = [
      ['all','All builds', null, '23,412'],
      ['hmi', this.builds.hmi.label, this.builds.hmi.color, '9,840'],
      ['mmed', this.builds.mmed.label, this.builds.mmed.color, '11,260'],
      ['wiki', this.builds.wiki.label, this.builds.wiki.color, '4,910'],
      ['unfiled','Unfiled / new', '#8B2A4A', '312'],
    ];
    const buildItems = buildDef.map(([id, label, color, count]) => {
      const act = s.build === id, dashed = id === 'unfiled';
      const labelStyle = `color:${act||id==='all'?'#8B2A4A':(id==='unfiled'?'#8B2A4A':'#33373F')};font-weight:${act?600:(id==='all'||id==='unfiled'?500:400)};`;
      const dotStyle = color ? `width:8px;height:8px;border-radius:2px;background:${color};flex:0 0 auto;` : `display:none;`;
      const countStyle = `color:${act||id==='all'||id==='unfiled'?'#8B2A4A':'rgba(26,29,36,0.5)'};`;
      return `<button data-act="setBuild" data-arg="${id}" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 10px;border-radius:7px;cursor:pointer;text-align:left;background:${act?'#F7F2F4':'transparent'};border:${dashed?'1px dashed #E7C6D1':'1px solid transparent'};">
        <span style="display:flex;align-items:center;gap:9px;font-size:13px;${labelStyle}"><span style="${dotStyle}"></span>${label}</span>
        <span class="mono" style="font-size:12px;${countStyle}">${count}</span>
      </button>`;
    }).join('');

    const chipHtml = (label, val, mono) =>
      `<button data-act="chipQ" data-arg="${this.esc(val)}" ${mono?'class="mono" ':''}style="font-size:11px;color:#33373F;background:#F1EFEC;border:none;border-radius:5px;padding:4px 8px;cursor:pointer;">${label}</button>`;
    const metalChips = [['Pb','Pb'],['iAs','iAs'],['Cd','Cd'],['tHg','mercury'],['Ni','Ni'],['Al','Al']].map(([l,v]) => chipHtml(l, v, true)).join('');
    const catChips = ['infant formula','rice cereal','dark chocolate','spices','canned tuna'].map(l => chipHtml(l, l, false)).join('');
    const condChips = ['endometriosis','bacterial vaginosis','CKD','rosacea'].map(l => chipHtml(l, l, false)).join('');

    const sortDef = [['recent','Recent'],['title','A–Z'],['status','Status']];
    const sortItems = sortDef.map(([id, label]) =>
      `<button data-act="setSort" data-arg="${id}" style="font-size:11.5px;font-weight:${s.sort===id?600:500};color:${s.sort===id?'#8B2A4A':'rgba(26,29,36,0.55)'};background:${s.sort===id?'#F7F2F4':'transparent'};border:none;padding:6px 11px;border-radius:6px;cursor:pointer;">${label}</button>`
    ).join('');

    const q = s.q.trim().toLowerCase();
    let rows = this.papers.map((p, idx) => ({ p, idx })).filter(({ p }) => inBuild(p, s.build));
    if (q) rows = rows.filter(({ p }) => (p.title + ' ' + p.authors + ' ' + p.journal + ' ' + p.year + ' ' + p.pmid + ' ' + p.doi + ' ' + p.tags.join(' ')).toLowerCase().includes(q));
    const statusRank = { stored: 0, couldnt: 1, notfound: 2 };
    rows = [...rows].sort((a, b) => {
      if (s.sort === 'title') return a.p.title.localeCompare(b.p.title);
      if (s.sort === 'status') return (statusRank[a.p.pdf] - statusRank[b.p.pdf]) || (b.p.year - a.p.year);
      return b.p.year - a.p.year;
    });

    const rowHtml = rows.map(({ p, idx }, i) => {
      const pdf = this.pdfStyleFor(p.pdf);
      const idShort = p.pmid !== '—' ? p.pmid : (p.pmcid !== '—' ? p.pmcid : 'preprint');
      const dots = this.buildListFor(p).map(bd => `<span title="${this.esc(bd.label)}" style="${bd.dotStyle}"></span>`).join('');
      return `<button data-act="openPaper" data-arg="${idx}" style="display:grid;grid-template-columns:1fr 104px 96px 92px;gap:12px;padding:12px 15px;width:100%;align-items:center;cursor:pointer;border:none;border-bottom:1px solid #F2F0ED;background:${i%2?'#FCFBFA':'#fff'};">
        <div style="min-width:0;">
          <div style="font-size:13px;font-weight:500;line-height:1.35;color:#1A1D24;text-align:left;">${this.esc(p.title)}</div>
          <div class="mono" style="font-size:11px;color:rgba(26,29,36,0.45);margin-top:2px;text-align:left;">${this.esc(p.authors.split(',')[0] + ' · ' + p.journal)}</div>
        </div>
        <div class="mono" style="font-size:12px;color:rgba(26,29,36,0.6);text-align:left;">${p.year}<br><span style="font-size:10px;color:rgba(26,29,36,0.4);">${idShort}</span></div>
        <div style="display:flex;gap:4px;align-items:center;">${dots}</div>
        <div style="text-align:right;"><span style="${pdf.css}">${pdf.label}</span></div>
      </button>`;
    }).join('');

    const resultLabel = rows.length + (rows.length === 1 ? ' paper' : ' papers') + (s.build !== 'all' || q ? ' shown' : '');
    const clearBtn = s.q ? `<button data-act="clearQ" class="mono" style="font-size:11px;color:#8B2A4A;background:none;border:none;cursor:pointer;">clear</button>` : '';
    const hd = 'font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(26,29,36,0.45);';

    return `<div style="flex:1;display:grid;grid-template-columns:238px 1fr 320px;min-height:0;">
      <div class="cl-scroll" style="border-right:1px solid #E7E5E2;padding:22px 18px;overflow-y:auto;background:#FCFBFA;">
        <div style="${hd}margin-bottom:12px;">Reads from this library</div>
        <div style="display:flex;flex-direction:column;gap:2px;margin-bottom:26px;">${buildItems}</div>
        <div style="${hd}margin-bottom:11px;">Filter by heavy metal</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:18px;">${metalChips}</div>
        <div style="${hd}margin-bottom:11px;">Product category</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:18px;">${catChips}</div>
        <div style="${hd}margin-bottom:11px;">Condition</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;">${condChips}</div>
      </div>

      <div class="cl-scroll" style="overflow-y:auto;padding:26px 28px;min-width:0;">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px;">
          <h1 style="font-size:24px;font-weight:700;margin:0;letter-spacing:-0.01em;">Combined corpus</h1>
          <span class="mono" style="font-size:12px;color:rgba(26,29,36,0.5);">deduped by PMID › DOI › title-hash</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#EDEBE8;border:1px solid #EDEBE8;border-radius:9px;overflow:hidden;margin:16px 0 24px;">
          <div style="background:#fff;padding:15px 17px;"><div class="mono" style="font-size:27px;font-weight:600;">23,412</div><div style="font-size:11px;color:rgba(26,29,36,0.55);margin-top:2px;">papers</div></div>
          <div style="background:#fff;padding:15px 17px;"><div class="mono" style="font-size:27px;font-weight:600;">21,097</div><div style="font-size:11px;color:rgba(26,29,36,0.55);margin-top:2px;">unique DOIs</div></div>
          <div style="background:#fff;padding:15px 17px;"><div class="mono" style="font-size:27px;font-weight:600;">18,640</div><div style="font-size:11px;color:rgba(26,29,36,0.55);margin-top:2px;">PDFs stored</div></div>
          <div style="background:#FBF3F5;padding:15px 17px;"><div class="mono" style="font-size:27px;font-weight:600;color:#8B2A4A;">2,315</div><div style="font-size:11px;color:#8B2A4A;margin-top:2px;">duplicates merged</div></div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
          <div style="flex:1;display:flex;align-items:center;gap:9px;border:1px solid #E2DFDB;border-radius:8px;padding:10px 13px;background:#fff;">
            <span style="color:#A8A39C;font-size:14px;">⌕</span>
            <input id="cl-search" class="cl-search" data-input="setQ" placeholder="Search titles, authors, PMID, DOI, tags…" value="${this.esc(s.q)}">
            ${clearBtn}
          </div>
          <div style="display:flex;gap:2px;border:1px solid #E2DFDB;border-radius:8px;padding:2px;background:#fff;">${sortItems}</div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <div style="${hd.replace('.1em','.09em')}">Recent additions · ${resultLabel}</div>
          <div style="font-size:11px;color:rgba(26,29,36,0.45);">click a row for provenance</div>
        </div>
        <div style="border:1px solid #EDEBE8;border-radius:9px;overflow:hidden;">
          <div style="display:grid;grid-template-columns:1fr 104px 96px 92px;gap:12px;padding:9px 15px;background:#FAF8F6;border-bottom:1px solid #EDEBE8;font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:rgba(26,29,36,0.45);">
            <span>Paper</span><span>Year · ID</span><span>Used by</span><span style="text-align:right;">PDF</span>
          </div>
          ${rowHtml}
        </div>
        <div style="font-size:12px;color:rgba(26,29,36,0.45);margin-top:12px;">Colored squares show which builds route each paper. Merging a duplicate keeps one file and links both builds — no re-download.</div>
      </div>

      <div class="cl-scroll" style="border-left:1px solid #E7E5E2;padding:22px 20px;overflow-y:auto;background:#FCFBFA;">
        <div style="${hd}margin-bottom:12px;">Add new files</div>
        <button data-act="ingest" style="width:100%;border:2px dashed #C9A9B4;border-radius:10px;background:#FBF6F8;padding:26px 16px;text-align:center;margin-bottom:14px;cursor:pointer;display:block;">
          <div style="font-size:26px;color:#8B2A4A;margin-bottom:6px;">⤓</div>
          <div style="font-size:13px;font-weight:600;color:#8B2A4A;margin-bottom:4px;">Drop PDFs here</div>
          <div style="font-size:11.5px;color:rgba(26,29,36,0.55);line-height:1.45;">Truly new files land in <span class="mono" style="color:#8B2A4A;">/unfiled</span> for any build to ingest later. Duplicates flagged on drop.</div>
        </button>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:rgba(26,29,36,0.6);padding:9px 0;border-bottom:1px solid #EDEBE8;"><span>Queued to ingest</span><span class="mono" style="color:#8B2A4A;font-weight:600;">${s.unfiled}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:rgba(26,29,36,0.6);padding:9px 0;"><span>Flagged duplicate</span><span class="mono">${s.dupes}</span></div>
        <div style="${hd}margin:24px 0 12px;">Last pull</div>
        <div style="border:1px solid #EDEBE8;border-radius:9px;padding:15px;background:#fff;">
          <div style="font-size:13px;font-weight:600;margin-bottom:2px;">Lead in infant formula</div>
          <div class="mono" style="font-size:11px;color:rgba(26,29,36,0.45);margin-bottom:13px;">heavy metal · HMI · 28 Jun</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:11px;">
            <div><div class="mono" style="font-size:19px;font-weight:600;">142</div><div style="font-size:10px;color:rgba(26,29,36,0.5);">articles</div></div>
            <div><div class="mono" style="font-size:19px;font-weight:600;color:#2C6E49;">104</div><div style="font-size:10px;color:rgba(26,29,36,0.5);">downloaded</div></div>
            <div><div class="mono" style="font-size:19px;font-weight:600;color:#9A6A18;">15</div><div style="font-size:10px;color:rgba(26,29,36,0.5);">couldn't</div></div>
            <div><div class="mono" style="font-size:19px;font-weight:600;color:rgba(26,29,36,0.4);">23</div><div style="font-size:10px;color:rgba(26,29,36,0.5);">not found</div></div>
          </div>
          <button data-act="setTab" data-arg="pulls" style="width:100%;margin-top:13px;font-size:12px;font-weight:600;color:#8B2A4A;background:#F7F2F4;border:none;border-radius:7px;padding:8px;cursor:pointer;">View all pulls →</button>
        </div>
      </div>
    </div>`;
  },

  presetsTab() {
    const s = this.state;
    const hd = 'font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(26,29,36,0.45);';
    const presets = s.realPresets || [];
    const preset = presets.find(p => p.id === s.presetId) || presets[0];
    if (!preset) {
      const body = s.presetsError
        ? `<div style="text-align:center;"><div style="font-size:14px;color:#8B2A4A;margin-bottom:12px;">Couldn't load presets.</div><button data-act="loadPresets" style="font-size:13px;font-weight:600;color:#fff;background:#8B2A4A;border:none;border-radius:8px;padding:9px 16px;cursor:pointer;">Retry</button></div>`
        : `<div style="color:rgba(26,29,36,0.5);">Loading presets…</div>`;
      return `<div style="flex:1;display:flex;align-items:center;justify-content:center;">${body}</div>`;
    }
    const ph = preset.placeholder || '[Condition]';
    const subject = (s.subject || '').trim();
    const totalQ = preset.groups.reduce((n, g) => n + g.queries.length, 0);
    const run = s.run || {};

    // preset-set selector (left)
    const setBtns = presets.map(p => {
      const act = p.id === preset.id;
      const qn = p.groups.reduce((n, g) => n + g.queries.length, 0);
      return `<button data-act="setPresetId" data-arg="${p.id}" style="display:block;width:100%;text-align:left;border:1px solid ${act ? '#E7C6D1' : '#EDEBE8'};background:${act ? '#FCF7F9' : '#fff'};border-radius:9px;padding:12px 13px;cursor:pointer;margin-bottom:8px;">
        <div style="font-size:13px;font-weight:600;color:#1A1D24;margin-bottom:5px;">${this.esc(p.label)}</div>
        <div style="font-size:11px;color:rgba(26,29,36,0.5);">${p.groups.length} groups · ${qn} queries</div>
      </button>`;
    }).join('');

    const canRun = subject && !run.active;
    // Product-category picker (matrix-based presets only): pick an HMTc category →
    // its subcategories become one-click [Matrix] values. Barrel through standards
    // one product category at a time.
    const isMatrix = /matrix/i.test(preset.placeholder || '');
    let matrixPicker = '';
    if (isMatrix && s.matrices && s.matrices.categories && s.matrices.categories.length) {
      const cats = s.matrices.categories;
      const ci = Math.max(0, Math.min(s.matCat || 0, cats.length - 1));
      const catOpts = cats.map((c, i) => `<option value="${i}" ${i === ci ? 'selected' : ''}>${this.esc(c.n + '. ' + c.name)}</option>`).join('');
      const subChips = (cats[ci].subcategories || []).map(sub =>
        `<button data-act="pickMatrix" data-arg="${this.esc(sub.searchTerm)}" title="${this.esc(sub.name)}" style="font-size:11px;color:${subject === sub.searchTerm ? '#fff' : '#33373F'};background:${subject === sub.searchTerm ? '#8B2A4A' : '#F1EFEC'};border:none;border-radius:5px;padding:5px 8px;cursor:pointer;text-align:left;">${this.esc(sub.name.length > 42 ? sub.name.slice(0, 40) + '…' : sub.name)}</button>`
      ).join('');
      matrixPicker = `<div style="margin-bottom:11px;">
        <div style="font-size:10.5px;color:rgba(26,29,36,0.55);margin-bottom:4px;">Pick a product category (${s.matrices.subcategoryCount} across ${s.matrices.categoryCount})</div>
        <select data-input="setMatCat" style="width:100%;font-size:12px;border:1px solid #E2DFDB;border-radius:7px;padding:8px 9px;background:#FCFBFA;margin-bottom:8px;cursor:pointer;">${catOpts}</select>
        <div style="display:flex;flex-direction:column;gap:4px;max-height:190px;overflow-y:auto;">${subChips}</div>
      </div>`;
    }
    const runForm = `<div style="border:1px solid #EDEBE8;border-radius:10px;padding:16px;background:#fff;margin-top:6px;">
      <div style="${hd}margin-bottom:9px;">Run for a ${this.esc(preset.subjectLabel || 'Condition').toLowerCase()}</div>
      ${matrixPicker}
      <input id="cl-subject" data-input="setSubject" value="${this.esc(s.subject || '')}" placeholder="e.g. ${this.esc(preset.example || 'Multiple Sclerosis')}" style="width:100%;font-size:13px;border:1px solid #E2DFDB;border-radius:7px;padding:9px 11px;background:#fff;color:#1A1D24;margin-bottom:10px;">
      <div style="display:flex;gap:9px;margin-bottom:11px;">
        <div style="flex:1;"><div style="font-size:10.5px;color:rgba(26,29,36,0.55);margin-bottom:4px;">From year</div><input id="cl-fromyear" data-input="setFromYear" value="${this.esc(s.fromYear || '2000')}" class="mono" style="width:100%;font-size:12px;border:1px solid #E2DFDB;border-radius:7px;padding:8px 9px;background:#FCFBFA;"></div>
        <div style="flex:1;"><div style="font-size:10.5px;color:rgba(26,29,36,0.55);margin-bottom:4px;">Max / query</div><input id="cl-maxpq" data-input="setMaxPerQuery" value="${this.esc(s.maxPerQuery || '10')}" class="mono" style="width:100%;font-size:12px;border:1px solid #E2DFDB;border-radius:7px;padding:8px 9px;background:#FCFBFA;"></div>
      </div>
      <label style="display:flex;align-items:center;gap:7px;font-size:12px;color:#33373F;margin-bottom:8px;cursor:pointer;"><input type="checkbox" data-act="toggleSerp" ${s.serp ? 'checked' : ''}> Google Scholar (SerpAPI) — more results, costs per search</label>
      <label style="display:flex;align-items:center;gap:7px;font-size:12px;color:#33373F;margin-bottom:12px;cursor:pointer;"><input type="checkbox" data-act="toggleDryRun" ${s.dryRun ? 'checked' : ''}> Dry run (search + dedupe, no download)</label>
      <button data-act="startRun" ${canRun ? '' : 'disabled'} style="width:100%;font-size:13px;font-weight:600;color:#fff;background:${canRun ? '#8B2A4A' : '#CBB8BF'};border:none;border-radius:8px;padding:11px;cursor:${canRun ? 'pointer' : 'not-allowed'};">${run.active ? 'Running…' : `Run ${totalQ} queries →`}</button>
      <div style="font-size:11px;color:rgba(26,29,36,0.45);line-height:1.45;margin-top:9px;">Each query → its own folder of deduped PDFs under<br><span class="mono" style="color:#8B2A4A;">~/Desktop/${this.esc(subject || preset.subjectLabel || 'Condition')}/</span></div>
    </div>`;

    // query groups (right) with live substitution
    const groupsHtml = preset.groups.map(g => {
      const items = g.queries.map(q => {
        const resolved = subject ? q.split(ph).join(subject) : q;
        return `<div class="mono" style="font-size:12px;color:#33373F;background:#F7F5F2;border-radius:6px;padding:6px 10px;word-break:break-word;">${this.esc(resolved)}</div>`;
      }).join('');
      return `<div style="margin-bottom:20px;">
        <div style="${hd}margin-bottom:9px;">${this.esc(g.name)} · ${g.queries.length}</div>
        <div style="display:flex;flex-direction:column;gap:5px;">${items}</div>
      </div>`;
    }).join('');

    return `<div style="flex:1;display:grid;grid-template-columns:320px 1fr;min-height:0;">
      <div class="cl-scroll" style="border-right:1px solid #E7E5E2;padding:22px 18px;overflow-y:auto;background:#FCFBFA;">
        <div style="${hd}margin-bottom:9px;">Preset sets</div>
        ${setBtns}
        ${runForm}
      </div>

      <div class="cl-scroll" style="overflow-y:auto;padding:26px 28px;min-width:0;">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4px;gap:12px;">
          <h1 style="font-size:23px;font-weight:700;margin:0;letter-spacing:-0.01em;">${this.esc(preset.label)}</h1>
          <span class="mono" style="font-size:12px;color:rgba(26,29,36,0.5);">${preset.groups.length} groups · ${totalQ} queries</span>
        </div>
        <p style="font-size:13px;color:rgba(26,29,36,0.6);line-height:1.5;margin:0 0 18px;">${subject ? `Showing the resolved queries for <b>${this.esc(subject)}</b>. Run downloads each into its own folder.` : `Enter a ${this.esc((preset.subjectLabel || 'condition').toLowerCase())} on the left to resolve these query templates and run the pull.`}</p>
        ${this.renderRunPanel()}
        ${groupsHtml}
      </div>
    </div>`;
  },

  renderRunPanel() {
    const run = this.state.run || {};
    if (!run.active && !run.summary && (!run.log || !run.log.length)) return '';
    const pct = run.qTotal ? Math.round((run.qIndex / run.qTotal) * 100) : 0;
    const counter = (n, k, c) => `<div style="text-align:center;padding:6px 14px;"><div class="mono" style="font-size:20px;color:${c || '#1A1D24'};">${n}</div><div style="font-size:10px;color:rgba(26,29,36,0.5);text-transform:uppercase;letter-spacing:.03em;">${k}</div></div>`;
    const logHtml = (run.log || []).slice(0, 40).map(l => `<div style="font-size:11.5px;color:#E4E2DD;padding:1px 0;">${this.esc(l)}</div>`).join('');
    const head = run.active
      ? `Running · query ${run.qIndex}/${run.qTotal}${run.currentQuery ? ' · ' + this.esc(run.currentQuery) : ''}`
      : run.summary ? `Done — ${run.summary.dryRun ? 'dry run' : `saved to ${this.esc(run.summary.outDir)}`}` : 'Run';
    return `<div style="border:1px solid #EDEBE8;border-radius:10px;overflow:hidden;margin-bottom:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 15px;background:#FAF8F6;border-bottom:1px solid #EDEBE8;">
        <span style="font-size:12px;font-weight:600;color:#1A1D24;">${head}</span>
        <div style="display:flex;">${counter(run.downloaded || 0, 'downloaded', '#2C6E49')}${counter(run.skipped || 0, 'skipped')}${counter(run.failed || 0, 'failed', '#8B2A4A')}</div>
      </div>
      <div style="height:3px;background:#EDEBE8;"><div style="height:3px;width:${pct}%;background:#8B2A4A;transition:width .2s;"></div></div>
      <div class="cl-scroll" style="background:#1F2124;padding:12px 15px;max-height:200px;overflow-y:auto;font-family:'IBM Plex Mono',monospace;">${logHtml || '<span style="color:#8FA8AE;font-size:11.5px;">starting…</span>'}</div>
    </div>`;
  },

  loadMatrices() {
    fetch('/api/matrices')
      .then(r => r.json())
      .then(d => { this.state.matrices = d; this.render(); })
      .catch(() => {});
  },
  setMatCat(v) { this.state.matCat = Number(v) || 0; this.render(); },
  pickMatrix(term) { this.state.subject = term; this.render(); },

  // ── real-run actions ─────────────────────────────────────────────────────
  loadPresets() {
    this.state.presetsError = false;
    this.render();
    fetch('/api/presets')
      .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(d => {
        this.state.realPresets = d.presets || [];
        if (!this.state.presetId && this.state.realPresets[0]) this.state.presetId = this.state.realPresets[0].id;
        this.render();
      })
      .catch(() => { this.state.presetsError = true; this.render(); });
  },
  setPresetId(id) { this.setState({ presetId: id }); },
  setSubject(v) { this.setState({ subject: v }); },
  setFromYear(v) { this.state.fromYear = v.replace(/[^0-9]/g, ''); this.render(); },
  setMaxPerQuery(v) { this.state.maxPerQuery = v.replace(/[^0-9]/g, ''); this.render(); },
  toggleDryRun() { this.setState({ dryRun: !this.state.dryRun }); },
  toggleSerp() { this.setState({ serp: !this.state.serp }); },
  startRun() {
    const st = this.state;
    if (!(st.subject || '').trim() || (st.run && st.run.active)) return;
    st.run = { active: true, log: [], downloaded: 0, failed: 0, skipped: 0, qIndex: 0, qTotal: 0, currentQuery: '', summary: null };
    this.render();
    fetch('/api/run', {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        presetId: st.presetId, subject: st.subject.trim(),
        fromYear: Number(st.fromYear) || 2000, maxPerQuery: Number(st.maxPerQuery) || 10,
        dryRun: !!st.dryRun,
        // serp on (default) → omit sources so the engine adds SerpAPI/Serper by
        // key; serp off → academic databases only.
        sources: st.serp ? undefined : ['pubmed', 'openalex', 'crossref', 'semanticscholar'],
      }),
    }).then(async (r) => {
      if (!r.ok) throw new Error((await r.text().catch(() => '')) || ('HTTP ' + r.status));
      return r.json();
    }).then(({ runId }) => {
      if (!runId) throw new Error('server returned no runId');
      const es = new EventSource('/api/run/stream?runId=' + encodeURIComponent(runId));
      es.onmessage = (m) => { const ev = JSON.parse(m.data); this.onRunEvent(ev); if (ev.type === 'done' || ev.type === 'error') es.close(); };
      es.onerror = () => {
        es.close();
        const run = this.state.run;
        if (run && run.active) { run.active = false; run.log.unshift('✖ connection lost — run interrupted'); }
        this.render();
      };
    }).catch((err) => {
      const run = this.state.run;
      if (run) { run.active = false; run.log.unshift('✖ ' + (err && err.message ? err.message : 'run failed to start')); }
      this.render();
    });
  },
  onRunEvent(ev) {
    const run = this.state.run; if (!run) return;
    if (ev.type === 'start') { run.qTotal = ev.queryCount; run.log.unshift(`▶ ${ev.subject} · ${ev.queryCount} queries → ${ev.outDir}`); }
    else if (ev.type === 'query-start') { run.qIndex = ev.index + 1; run.currentQuery = ev.query; }
    else if (ev.type === 'query-candidates') { run.log.unshift(`  ${ev.query}: ${ev.found} hits → ${ev.unique} unique`); }
    else if (ev.type === 'download') { run.downloaded++; run.log.unshift(`↓ ${ev.file}`); }
    else if (ev.type === 'log') { run.log.unshift(`· ${ev.msg}`); }
    else if (ev.type === 'done') { run.active = false; run.summary = ev; run.downloaded = ev.stats.downloaded; run.failed = ev.stats.failed; run.skipped = ev.stats.skipped; run.qIndex = run.qTotal; run.log.unshift(`✓ done — ${ev.stats.downloaded} downloaded, ${ev.stats.failed} failed`); }
    else if (ev.type === 'error') { run.active = false; run.log.unshift(`✖ ${ev.msg}`); }
    if (run.log.length > 60) run.log.length = 60;
    this.render();
  },

  wishlistTab() {
    const s = this.state;
    if (s.wishlist == null && !s.wlLoading) this.loadWishlist();
    const q = (s.wlQ || '').toLowerCase().trim();
    let rows = s.wishlist || [];
    if (q) rows = rows.filter(e => `${e.title||''} ${e.doi||''} ${e.journal||''}`.toLowerCase().includes(q));

    const buildChip = (id, label) => {
      const act = (s.wlBuild || 'all') === id;
      return `<button data-act="wlSetBuild" data-arg="${id}" style="font-size:12px;font-weight:${act?600:500};color:${act?'#8B2A4A':'rgba(26,29,36,0.55)'};background:${act?'#F7F2F4':'transparent'};border:1px solid ${act?'#E7C6D1':'transparent'};padding:6px 12px;border-radius:7px;cursor:pointer;">${label}</button>`;
    };
    const buildChips = [buildChip('all','All'), ...(s.wlAllBuilds||[]).map(b => buildChip(b, (this.builds[b]&&this.builds[b].label)||b))].join('');

    const card = (e) => {
      const badge = (b) => `<span style="font-size:10px;font-weight:600;color:${(this.builds[b]&&this.builds[b].color)||'#8B2A4A'};background:#F7F2F4;border-radius:4px;padding:2px 6px;">${this.esc((this.builds[b]&&this.builds[b].label)||b)}</span>`;
      const seen = (e.surfacing&&e.surfacing[0]) ? `${this.esc(e.surfacing[0].query||'')}` : '';
      const doi = e.doi ? `<button data-act="wlCopy" data-arg="${this.esc(e.doi)}" class="mono" title="copy DOI" style="font-size:11.5px;color:#33373F;background:#F1EFEC;border:none;border-radius:6px;padding:5px 9px;cursor:pointer;">${this.esc(e.doi)} ⧉</button>` : `<span class="mono" style="font-size:11px;color:rgba(26,29,36,0.4);">no DOI — title only</span>`;
      const pub = e.publisher_url ? `<a href="${this.esc(e.publisher_url)}" target="_blank" rel="noopener" style="font-size:11.5px;font-weight:600;color:#8B2A4A;text-decoration:none;">go get it ↗</a>` : '';
      return `<div style="border:1px solid #EDEBE8;border-radius:10px;padding:13px 15px;margin-bottom:9px;background:#fff;">
        <div style="display:flex;align-items:flex-start;gap:12px;">
          <div style="flex-shrink:0;width:42px;height:42px;border-radius:8px;background:#F7F2F4;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:#8B2A4A;" title="relevance">${this.esc(e.relevance_score ?? 0)}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:14px;font-weight:600;line-height:1.35;margin-bottom:3px;">${this.esc(e.title || e.wishlist_id)}</div>
            <div class="mono" style="font-size:11px;color:rgba(26,29,36,0.5);display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              ${e.journal?`<span>${this.esc(e.journal)}</span>`:''}${e.year?`<span>${this.esc(e.year)}</span>`:''}${e.cited_by_count?`<span>${this.esc(e.cited_by_count)} cites</span>`:''}${(e.builds||[]).map(badge).join(' ')}${e.times_seen>1?`<span>· seen ${this.esc(e.times_seen)}×</span>`:''}
            </div>
            ${seen?`<div style="font-size:11px;color:rgba(26,29,36,0.4);margin-top:3px;">surfaced by: ${seen}</div>`:''}
            <div style="display:flex;align-items:center;gap:10px;margin-top:10px;flex-wrap:wrap;">
              ${doi}${pub}
              <div style="flex:1;"></div>
              <button data-act="wlMarkHave" data-arg="${this.esc(e.wishlist_id)}" style="font-size:11.5px;font-weight:600;color:#fff;background:#5A8A5A;border:none;border-radius:6px;padding:6px 11px;cursor:pointer;">✓ I have it</button>
              <button data-act="wlDismiss" data-arg="${this.esc(e.wishlist_id)}" style="font-size:11.5px;color:rgba(26,29,36,0.5);background:none;border:none;cursor:pointer;">dismiss</button>
            </div>
          </div>
        </div>
      </div>`;
    };

    const body = s.wlLoading
      ? `<div style="text-align:center;color:rgba(26,29,36,0.5);padding:60px;">Loading wishlist…</div>`
      : s.wlError
      ? `<div style="text-align:center;color:#8B2A4A;padding:60px;">Couldn't load the wishlist. Is the server running?<br><button data-act="loadWishlist" style="margin-top:12px;font-size:13px;font-weight:600;color:#fff;background:#8B2A4A;border:none;border-radius:8px;padding:9px 16px;cursor:pointer;">Retry</button></div>`
      : !rows.length
      ? `<div style="text-align:center;color:rgba(26,29,36,0.5);padding:60px;">Nothing on the wishlist${q?' matches your search':''}.<br><span style="font-size:12px;">Run a sweep, then <span class="mono">npm run wishlist:harvest</span> to populate it.</span></div>`
      : rows.map(card).join('');

    return `<div class="cl-scroll" style="flex:1;overflow-y:auto;padding:22px 26px;">
      <div style="max-width:860px;margin:0 auto;">
        <div style="margin-bottom:6px;"><h2 style="font-size:22px;font-weight:700;margin:0;">Wishlist</h2></div>
        <p style="font-size:13.5px;line-height:1.55;color:rgba(26,29,36,0.6);margin:0 0 16px;">Papers the fetch tools found but couldn't download (paywalled / no open-access copy), ranked by relevance so you fetch the most valuable ones first. Copy the DOI, grab the PDF, and drop it in your library — it checks itself off.</p>
        <div id="wl-drop" style="border:2px dashed #C9A9B4;border-radius:10px;background:#FBF6F8;padding:15px;text-align:center;margin-bottom:16px;transition:background .15s;">
          <div style="font-size:13px;font-weight:600;color:#8B2A4A;">↓ Drop fetched PDFs here</div>
          <div style="font-size:11.5px;color:rgba(26,29,36,0.55);margin-top:2px;">They check themselves off the wishlist and file into your library as you go.</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
          <div style="display:flex;gap:4px;">${buildChips}</div>
          <div style="flex:1;"></div>
          <input data-input="wlSearch" value="${this.esc(s.wlQ||'')}" placeholder="search title / DOI / journal" style="font-size:12.5px;padding:8px 12px;border:1px solid #E2DFDB;border-radius:8px;width:240px;outline:none;">
          <span class="mono" style="font-size:11.5px;color:rgba(26,29,36,0.5);">${rows.length} of ${s.wlTotal||0}</span>
        </div>
        ${body}
      </div>
    </div>`;
  },

  loadWishlist() {
    this.state.wlLoading = true; this.state.wlError = false;
    const b = this.state.wlBuild || 'all';
    fetch(`/api/wishlist?build=${encodeURIComponent(b)}`)
      .then(r => r.json())
      .then(d => { this.state.wishlist = d.entries || []; this.state.wlTotal = d.total || 0; this.state.wlAllBuilds = d.builds || []; this.state.wlLoading = false; this.render(); })
      .catch(() => { this.state.wishlist = []; this.state.wlLoading = false; this.state.wlError = true; this.render(); });
  },
  wlSetBuild(id) { this.state.wlBuild = id; this.state.wishlist = null; this.render(); },
  wlSearch(v) { this.state.wlQ = v; this.render(); },
  wlCopy(doi) {
    const done = () => this.toastMsg('DOI copied — ' + doi);
    try { navigator.clipboard.writeText(doi).then(done, done); } catch { done(); }
  },
  wlMarkHave(id) {
    fetch('/api/wishlist/mark-have', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ wishlist_id: id }) })
      .then(r => r.json()).then(() => { this.toastMsg('Marked as have ✓'); this.state.wishlist = null; this.render(); })
      .catch(() => this.toastMsg('Could not update — is the server running?'));
  },
  wlDismiss(id) {
    fetch('/api/wishlist/dismiss', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ wishlist_id: id }) })
      .then(r => r.json()).then(() => { this.toastMsg('Dismissed'); this.state.wishlist = null; this.render(); })
      .catch(() => this.toastMsg('Could not update — is the server running?'));
  },
  async wlHandleDrop(files) {
    const pdfs = [...files].filter(f => /\.pdf$/i.test(f.name) || f.type === 'application/pdf');
    if (!pdfs.length) { this.toastMsg('Drop PDF files only.'); return; }
    this.toastMsg(`Processing ${pdfs.length} PDF${pdfs.length > 1 ? 's' : ''}…`);
    let checked = 0, pending = 0, novel = 0, err = 0;
    for (const f of pdfs) {
      try {
        const buf = await f.arrayBuffer();
        const r = await fetch('/api/wishlist/fulfill', { method: 'POST', headers: { 'content-type': 'application/pdf', 'x-filename': f.name }, body: buf });
        const d = await r.json();
        if (d.outcome === 'checked-off') checked++;
        else if (d.outcome === 'pending-confirm') pending++;
        else if (d.outcome === 'novel') novel++;
        else err++;
      } catch { err++; }
    }
    const parts = [];
    if (checked) parts.push(`${checked} checked off ✓`);
    if (pending) parts.push(`${pending} to confirm`);
    if (novel) parts.push(`${novel} filed as new`);
    if (err) parts.push(`${err} failed`);
    this.toastMsg(parts.join('  ·  ') || 'Nothing matched');
    this.state.wishlist = null; this.render();
  },

  otherTab() {
    const s = this.state;
    const other = {
      pulls:    { kicker: 'Direction 1A · next screen', title: 'Pulls console', desc: 'The "+ New pull" composer, live pipeline (esearch → enrich → dedupe → PDF waterfall), the four counters, and recent-run history live here. In the Corpus-first spine this is one click from the Library. Want me to build it out next?' },
      coverage: { kicker: 'Direction 1A · next screen', title: 'Coverage & gaps', desc: 'Per-site status (HMI categories pending evidence, MMed uncharacterized conditions, WikiBiome coverage) plus the category × analyte heatmap and watched-topic alerts. This is the whole of concept 1C, folded in as a tab.' },
    }[s.tab] || {};
    return `<div style="flex:1;display:flex;align-items:center;justify-content:center;padding:40px;">
      <div style="max-width:520px;text-align:center;">
        <div class="mono" style="font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#8B2A4A;margin-bottom:14px;">${this.esc(other.kicker)}</div>
        <h2 style="font-size:26px;font-weight:700;margin:0 0 12px;">${this.esc(other.title)}</h2>
        <p style="font-size:15px;line-height:1.6;color:rgba(26,29,36,0.6);margin:0 0 20px;">${this.esc(other.desc)}</p>
        <button data-act="setTab" data-arg="library" style="font-size:13px;font-weight:600;color:#8B2A4A;background:#F7F2F4;border:1px solid #E7C6D1;border-radius:8px;padding:9px 16px;cursor:pointer;">← Back to Library</button>
      </div>
    </div>`;
  },

  drawer() {
    const p = this.papers[this.state.selIdx];
    const pdf = this.pdfStyleFor(p.pdf);
    const hd = 'font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(26,29,36,0.45);';
    const idCell = (label, val, extra) => `<div style="background:#FCFBFA;padding:10px 12px;"><div style="font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:rgba(26,29,36,0.4);margin-bottom:3px;">${label}</div><div class="mono" style="font-size:12px;${extra||''}">${this.esc(val)}</div></div>`;
    const routed = this.buildListFor(p).map(bd => `<div style="display:flex;align-items:center;justify-content:space-between;border:1px solid #EDEBE8;border-radius:8px;padding:10px 12px;">
      <span style="display:flex;align-items:center;gap:9px;font-size:13px;font-weight:500;"><span style="${bd.dotStyle}"></span>${this.esc(bd.label)}</span>
      <span class="mono" style="font-size:11px;color:rgba(26,29,36,0.5);">${this.esc(bd.kind)}</span>
    </div>`).join('');
    const dupe = p.hasDupe ? `<div style="border:1px solid #E7C6D1;background:#FCF7F9;border-radius:8px;padding:13px 14px;margin-bottom:20px;">
      <div style="font-size:12px;font-weight:600;color:#8B2A4A;margin-bottom:4px;">${this.esc(p.dupeNote)}</div>
      <div style="font-size:11.5px;color:rgba(26,29,36,0.6);line-height:1.5;">Detected via matching DOI across builds. One canonical file is kept; both builds link it.</div>
    </div>` : '';

    return `<div data-act="closeDrawer" style="position:fixed;inset:0;background:rgba(26,20,24,0.32);z-index:40;"></div>
    <div class="cl-scroll" style="position:fixed;top:0;right:0;bottom:0;width:440px;background:#fff;border-left:1px solid #E2DFDB;box-shadow:-16px 0 48px rgba(30,20,25,0.16);z-index:50;overflow-y:auto;animation:clDrawerIn .22s cubic-bezier(0.16,1,0.3,1);">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-bottom:1px solid #EDEBE8;position:sticky;top:0;background:#fff;">
        <span style="${hd}">Paper · provenance</span>
        <button data-act="closeDrawer" style="font-size:18px;color:rgba(26,29,36,0.5);background:none;border:none;cursor:pointer;line-height:1;">✕</button>
      </div>
      <div style="padding:22px;">
        <h2 style="font-size:18px;font-weight:600;line-height:1.3;margin:0 0 8px;">${this.esc(p.title)}</h2>
        <div class="mono" style="font-size:12px;color:rgba(26,29,36,0.55);line-height:1.5;margin-bottom:18px;">${this.esc(p.authors + ' · ' + p.journal + ' · ' + p.year)}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:#EDEBE8;border:1px solid #EDEBE8;border-radius:8px;overflow:hidden;margin-bottom:20px;">
          ${idCell('PMID', p.pmid)}${idCell('PMCID', p.pmcid)}${idCell('DOI', p.doi, 'font-size:11px;word-break:break-all;')}
        </div>
        <div style="${hd}margin-bottom:10px;">Routed to builds</div>
        <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:20px;">${routed}</div>
        <div style="${hd}margin-bottom:10px;">PDF status</div>
        <div style="border:1px solid #EDEBE8;border-radius:8px;padding:14px;margin-bottom:20px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
            <span style="${pdf.css}">${pdf.label}</span>
            <span class="mono" style="font-size:11px;color:rgba(26,29,36,0.5);">resolver: ${this.esc(p.resolver)}</span>
          </div>
          <div class="mono" style="font-size:11px;color:rgba(26,29,36,0.55);line-height:1.6;word-break:break-all;">${this.esc(p.path)}<br>${this.esc(p.bytes)}</div>
        </div>
        ${dupe}
        <div style="display:flex;gap:9px;">
          <button style="flex:1;font-size:13px;font-weight:600;color:#fff;background:#8B2A4A;border:none;border-radius:8px;padding:10px;cursor:pointer;">Open PDF</button>
          <button style="flex:1;font-size:13px;font-weight:600;color:#8B2A4A;background:#F7F2F4;border:1px solid #E7C6D1;border-radius:8px;padding:10px;cursor:pointer;">View on PubMed</button>
        </div>
      </div>
    </div>`;
  },

  toast() {
    return `<div class="mono" style="position:fixed;bottom:22px;left:50%;transform:translateX(-50%);background:#1F2124;color:#F4F2ED;font-size:12.5px;padding:11px 18px;border-radius:9px;box-shadow:0 8px 28px rgba(0,0,0,0.28);z-index:60;animation:clToastIn .2s ease-out;">${this.esc(this.state.toast)}</div>`;
  },
};

window.CL = CL;

// Document-level event delegation — survives #root re-renders and works under a
// strict CSP that would block inline onclick=/oninput= handlers.
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.getAttribute('data-act');
  let arg = el.getAttribute('data-arg');
  if (arg !== null && /^\d+$/.test(arg)) arg = Number(arg);
  if (typeof CL[act] === 'function') CL[act](arg);
});
function delegateInput(e) {
  const el = e.target;
  const act = el.getAttribute && el.getAttribute('data-input');
  if (!act) return;
  if (typeof CL[act] === 'function') CL[act](el.value);
}
document.addEventListener('input', delegateInput);
document.addEventListener('change', delegateInput); // <select> fires change

// Drag-and-drop of PDFs. preventDefault on dragover+drop is what stops the
// browser from just opening the dropped PDF (the "opens in Chrome" bug).
function draggingFiles(e) { return [...(e.dataTransfer && e.dataTransfer.types || [])].includes('Files'); }
document.addEventListener('dragover', (e) => {
  if (!draggingFiles(e)) return;
  e.preventDefault();
  try { e.dataTransfer.dropEffect = 'copy'; } catch {}
  const z = document.getElementById('wl-drop'); if (z) z.style.background = '#F1DCE5';
});
document.addEventListener('dragleave', (e) => {
  const z = document.getElementById('wl-drop');
  if (z && (e.target === z || !e.relatedTarget)) z.style.background = '#FBF6F8';
});
document.addEventListener('drop', (e) => {
  if (!draggingFiles(e)) return;
  e.preventDefault();
  const z = document.getElementById('wl-drop'); if (z) z.style.background = '#FBF6F8';
  const files = [...e.dataTransfer.files];
  if (!files.length) return;
  if (CL.state.tab !== 'wishlist') CL.setTab('wishlist');
  CL.wlHandleDrop(files);
});

// Boot: seed run/preset state, render immediately, then load the real preset
// sets from the server and re-render.
Object.assign(CL.state, {
  realPresets: [], presetId: null, subject: '', presetsError: false,
  wishlist: null, wlBuild: 'all', wlQ: '', wlLoading: false, wlError: false, wlTotal: 0, wlAllBuilds: [],
  matrices: null, matCat: 0,
  fromYear: '2000', maxPerQuery: '10', dryRun: false, serp: true,
  run: { active: false, log: [], downloaded: 0, failed: 0, skipped: 0, qIndex: 0, qTotal: 0, currentQuery: '', summary: null },
});
CL.render();
CL.loadPresets();
CL.loadMatrices();
