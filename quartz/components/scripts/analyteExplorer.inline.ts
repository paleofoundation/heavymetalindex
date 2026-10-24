// Source summaries are precompiled. The browser only selects a scoped result.
import { comparisonSummary, type ComparisonState } from "../../../tools/lib/occurrence-comparison.mjs";
import { chunkRows, chunkLength, chunkPosition } from "../../../tools/contracts/pilot/explorer-chunks.mjs";
function keepDrawerFocus(event:KeyboardEvent) {
  if(event.key!=="Tab")return;
  const drawer=event.currentTarget as HTMLDialogElement;
  const controls=Array.from(drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), summary, select:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(el=>{
    if(el.tabIndex<0||el.matches(':disabled')||el.closest('[inert]')||getComputedStyle(el).visibility==='hidden'||!el.getClientRects().length)return false;
    // Closed details may retain layout rectangles, but only their first summary
    // participates in native keyboard navigation. Hidden links must not become
    // the last control used to wrap focus back to the close button.
    for(let parent=el.parentElement;parent&&parent!==drawer;parent=parent.parentElement){
      if(parent.tagName==='DETAILS'&&!parent.hasAttribute('open')){
        const summary=Array.from(parent.children).find(child=>child.tagName==='SUMMARY');
        if(!summary?.contains(el))return false;
      }
    }
    return true;
  });
  const first=controls[0],last=controls.at(-1);
  if(!first){event.preventDefault();return;}
  if(event.shiftKey && document.activeElement===first){event.preventDefault();last!.focus();}
  else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
}
type Packed={version:number;parts:string[];fragments:number[][];rows:unknown[]};
// Expand shared markup only after the entire packed payload is valid.
function unpackPayload(compiled:Packed):unknown[] {
  if(compiled?.version!==1||!Array.isArray(compiled.parts)||!Array.isArray(compiled.fragments)||!Array.isArray(compiled.rows))throw Error('Invalid explorer payload');
  const fragments=compiled.fragments.map(indices=>{
    if(!Array.isArray(indices)||indices.some(i=>!Number.isInteger(i)||typeof compiled.parts[i]!=='string'))throw Error('Missing explorer part');
    return indices.map(i=>compiled.parts[i]).join('');
  });
  function unpack(value:unknown,html=false):unknown {
    if(html && typeof value==='number'){
      if(!Number.isInteger(value)||typeof fragments[value]!=='string')throw Error('Missing explorer fragment');
      return fragments[value];
    }
    if(Array.isArray(value))return value.map(item=>unpack(item,html));
    if(value && typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,unpack(item,html||key==='html'||key.endsWith('_html'))]));
    return value;
  }
  return compiled.rows.map(row=>unpack(row));
}
const decodeInline=(encoded:string)=>JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(encoded.trim()),char=>char.charCodeAt(0)))) as Packed;
// A page build moves payloads into JSON beside the page (data-src); unbuilt
// renderer output keeps them inline.
async function readSidecar(el:HTMLElement):Promise<unknown> {
  if(!el.dataset.src)return null;
  const response=await fetch(new URL(el.dataset.src,window.location.href).href);
  if(!response.ok)throw Error(`Explorer data unavailable (${response.status})`);
  return response.json();
}
// Row info buttons without inline text resolve it from the row's drawer chunk.
const infoResolvers=new WeakMap<HTMLElement,(button:HTMLButtonElement)=>Promise<string|undefined>>();
function setupAnalyteExplorers() {
  document.querySelectorAll<HTMLElement>("[data-analyte-explorer]").forEach((root) => {
    if (root.dataset.explorerReady) return;
    const analyte=root.querySelector<HTMLSelectElement>("[data-filter-analyte]")!;
    const region=root.querySelector<HTMLSelectElement>("[data-filter-region]")!;
    const year=root.querySelector<HTMLSelectElement>("[data-filter-year]")!;
    const comparison=root.querySelector<HTMLSelectElement>("[data-filter-comparison]")!;
    const groups=Array.from(root.querySelectorAll<HTMLTableSectionElement>("[data-analyte-group]"));
    const rows=Array.from(root.querySelectorAll<HTMLTableRowElement>("[data-occurrence-row]"));
    const rowIndex=new Map(rows.map((row,index)=>[row,index]));
    const groupRows=new Map(groups.map(group=>[group,rows.filter(row=>row.parentElement===group)]));
    const total=rows.length;
    // Food-form headers group a metal's findings; folded spread figures stay in the
    // table as rows but are read on the mean or median row they joined.
    const formHeads=Array.from(root.querySelectorAll<HTMLTableRowElement>("tr.hmi-form-group"));
    const folded=new Map(rows.filter(row=>row.dataset.foldedInto).map(row=>[row,root.querySelector<HTMLTableRowElement>(`[id="${row.dataset.foldedInto}"]`)]));
    const headOf=new Map<HTMLTableRowElement,HTMLTableRowElement>(),headRows=new Map<HTMLTableRowElement,HTMLTableRowElement[]>();
    {
      const byKey=new Map(formHeads.map(head=>[`${groups.indexOf(head.parentElement as HTMLTableSectionElement)}|${head.dataset.formGroup}`,head]));
      for(const row of rows) {
        const head=byKey.get(`${groups.indexOf(row.parentElement as HTMLTableSectionElement)}|${row.dataset.form}`);
        if(!head||folded.has(row))continue;
        headOf.set(row,head);
        if(!headRows.has(head))headRows.set(head,[]);
        headRows.get(head)!.push(row);
      }
    }
    const openForms=new Set<HTMLTableRowElement>();
    const formSelect=root.querySelector<HTMLSelectElement>("[data-filter-form]");
    const formPasses=(head:HTMLTableRowElement|undefined)=>!head||!formSelect?.value||(formSelect.value.startsWith('family:')?head.dataset.formFamily===formSelect.value.slice(7):head.dataset.formGroup===formSelect.value);
    const shownTotal=total-folded.size;
    const source=root.querySelector<HTMLSelectElement>("[data-filter-source]");
    const comparable=root.querySelector<HTMLInputElement>("[data-filter-comparable]");
    const defaultComparison=comparison.value;
    type Variant={scope_html:string;finding_html:string;summary_text:string;comparison_html:Record<string,string>};
    type DrawerView={scope:string;html:string};
    type Details={info:string;finding_detail_html:Record<string,string>;comparison_detail_html:Record<string,Record<string,string>>;drawer_views:{timelines:Record<string,DrawerView>;regions:Record<string,DrawerView>}};
    type Chunk={details:Details[];evidence:(string|HTMLElement)[]};
    const payloadEl=root.querySelector<HTMLElement>('[data-explorer-payload]');
    const chunkEls=Array.from(root.querySelectorAll<HTMLElement>('[data-explorer-chunk]'));
    // The renderer publishes its chunk size; inferring it from the row and chunk
    // counts maps rows to another row's details whenever they disagree.
    let chunkSize=0;
    try{chunkSize=chunkRows(root.querySelector<HTMLElement>('[data-explorer-details]')?.dataset.chunkRows);}catch{}
    // Pages compiled before drawer chunks keep each drawer in its row and its
    // detail views in the filter payload.
    const legacy=!chunkEls.length;
    if(!payloadEl||(!legacy&&(!chunkSize||chunkEls.length!==Math.ceil(total/chunkSize)||chunkEls.some((el,k)=>el.dataset.explorerChunk!==String(k))))) {
      // Leave every default row readable. One bad explorer must not prevent
      // citations or other page scripts initializing.
      console.error('Unable to initialize the occurrence explorer; retaining the default rows.');
      return;
    }
    // Filter selections load once, on the first non-default selection.
    type LegacyVariant=Variant&{finding_detail_html:string;comparison_detail_html:Record<string,string>};
    type PayloadRow={variants:Record<string,LegacyVariant>;drawer_views?:Details["drawer_views"]};
    let view:Record<string,Variant>[]|null=null,payloadRows:PayloadRow[]=[],viewLoad:Promise<Record<string,Variant>[]>|null=null;
    function loadView() {
      viewLoad??=(async()=>{
        const compiled=(await readSidecar(payloadEl!) ?? decodeInline(payloadEl!.textContent!)) as Packed;
        payloadRows=unpackPayload(compiled) as PayloadRow[];
        if(payloadRows.length!==total||payloadRows.some(row=>!row?.variants?.['::']||(legacy&&!row.drawer_views)))throw Error('Missing explorer row');
        return view=payloadRows.map(row=>row.variants);
      })();
      viewLoad.catch(()=>{viewLoad=null;});
      return viewLoad;
    }
    const chunks=new Map<number,Promise<Chunk>>();
    function loadChunk(k:number) {
      if(!chunks.has(k))chunks.set(k,(async()=>{
        const el=chunkEls[k],remote=await readSidecar(el) as {version:number;details:Packed;evidence:string[]}|null;
        const inline=remote?null:Array.from(el.children).filter(child=>child.tagName!=='SCRIPT') as HTMLElement[];
        const details=unpackPayload(remote?remote.details:decodeInline(el.querySelector('script')!.textContent!)) as Details[];
        const evidence=remote?remote.evidence:inline!;
        if(details.length!==chunkLength(k,total,chunkSize)||details.length!==evidence.length||details.some(d=>!d?.drawer_views))throw Error('Invalid explorer chunk');
        return {details,evidence};
      })().catch(error=>{chunks.delete(k);throw error;}));
      return chunks.get(k)!;
    }
    async function rowDetails(row:HTMLTableRowElement) {
      const index=rowIndex.get(row)!;
      if(legacy) {
        await loadView();
        const {variants,drawer_views}=payloadRows[index],scopes=Object.keys(variants);
        return {evidence:row.querySelector<HTMLElement>('[data-evidence-content]')!,details:{
          info:row.querySelector<HTMLElement>('[data-row-comparison] [data-info-content]')?.dataset.infoContent??'',
          finding_detail_html:Object.fromEntries(scopes.map(scope=>[scope,variants[scope].finding_detail_html])),
          comparison_detail_html:Object.fromEntries(scopes.map(scope=>[scope,variants[scope].comparison_detail_html])),
          drawer_views:drawer_views!,
        } as Details};
      }
      const {chunk:k,offset}=chunkPosition(index,chunkSize),chunk=await loadChunk(k);
      return {details:chunk.details[offset],evidence:chunk.evidence[offset]};
    }
    const controls=root.querySelector<HTMLElement>("[data-explorer-controls]")!;
    const drawer=root.querySelector<HTMLDialogElement>(".hmi-evidence-drawer")!;
    const drawerBody=drawer.querySelector<HTMLElement>("[data-drawer-body]")!;
    let trigger:HTMLElement|null=null;
    let previousOverflow="";
    let overflowLocked=false;
    let opening=0,updating=0;
    const expanded=new Set(groups.slice(0,1));
    // Rendered cells match the default selection until a filter replaces them.
    const defaultStates=rows.map(row=>row.querySelector<HTMLElement>('[data-comparison-state]')?.dataset.comparisonState as ComparisonState["kind"]|undefined);
    const rendered=rows.map(()=>`::|${defaultComparison}`);
    root.dataset.explorerReady="true";
    root.querySelectorAll<HTMLElement>("[data-baseline-fallback]").forEach(el=>el.hidden=true);
    infoResolvers.set(root,async button=>{
      const row=button.closest<HTMLTableRowElement>("[data-occurrence-row]");
      return row&&rowIndex.has(row)?(await rowDetails(row)).details.info:undefined;
    });

    controls.hidden=false;
    const filterPanel=root.querySelector<HTMLDetailsElement>('[data-explorer-filters]');
    if(filterPanel)filterPanel.hidden=false;
    // Keep the authored disclosure usable without JavaScript; enhance its entry
    // point only after the explorer has initialized successfully.
    let contextButton:HTMLButtonElement|null=null;
    const contextSummary=root.querySelector<HTMLElement>('[data-open-context]');
    if(root.dataset.compactIntro==='true' && contextSummary) {
      let heading=root.previousElementSibling;
      while(heading && heading.tagName!=='H2')heading=heading.previousElementSibling;
      if(heading) {
        contextButton=document.createElement('button');
        contextButton.type='button';
        contextButton.className='hmi-profile-info-button';
        contextButton.setAttribute('aria-label','Comparison methods and scope');
        contextButton.setAttribute('aria-haspopup','dialog');
        contextButton.setAttribute('aria-controls',drawer.id);
        contextButton.setAttribute('aria-expanded','false');
        contextButton.title='Comparison methods and scope';
        contextButton.innerHTML='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7.5"/><path d="M10 9v5M10 5.5v1.5"/></svg>';
        contextButton.setAttribute('data-open-context','');
        heading.append(contextButton);
        contextButton.addEventListener('click',openContext);
        root.querySelector<HTMLElement>('[data-explorer-context]')!.hidden=true;
      }
    }
    function openContext() {if(contextButton)openEvidence(contextButton);}

    // Read the state already compiled into each result; do not infer
    // comparisons from displayed numbers.
    function comparisonKind(view:Variant|undefined) {
      return view?.comparison_html[comparison.value]?.match(/data-comparison-state="([a-z]+)"/)?.[1] as ComparisonState["kind"]|undefined;
    }
    const status=root.querySelector<HTMLElement>("[data-explorer-status]")!;
    async function update() {
      const run=++updating,key=`${region.value}::${year.value}`,mode=comparison.value;
      if(!view&&(key!=='::'||mode!==defaultComparison||comparable?.checked||root.dataset.sourceSummaries!=="true")) {
        status.textContent='Loading the selected findings…';
        try{await loadView();}catch(error){console.error(error);if(run===updating)status.textContent='The selected findings could not be loaded. Reset the filters to show the default findings.';return;}
        if(run!==updating)return;
      }
      let matched=0,visibleGroups=0;
      const comparisonStates:Pick<ComparisonState,"kind">[]=[];
      for(const group of groups) {
        const members=groupRows.get(group)!,matches=new Set<HTMLTableRowElement>();
        for(const row of members) {
          const index=rowIndex.get(row)!,variant=view?.[index][key];
          const state=view?comparisonKind(variant):defaultStates[index];
          if(!folded.has(row)&&formPasses(headOf.get(row))&&(!analyte.value||group.dataset.analyteGroup===analyte.value)&&(!source?.value||row.dataset.source===source.value)&&(!view||Boolean(variant))&&(!comparable?.checked||state==='rated'||state==='direct')) {
            matches.add(row);if(state)comparisonStates.push({kind:state});
          }
        }
        group.hidden=matches.size===0;
        if(matches.size)visibleGroups++;
        matched+=matches.size;
        group.querySelector<HTMLButtonElement>("[data-toggle-analyte]")!.setAttribute("aria-expanded",String(expanded.has(group)));
        const foldedIn=members.filter(row=>folded.has(row)&&matches.has(folded.get(row)!)).length;
        group.querySelector<HTMLElement>(".hmi-group-count")!.textContent=`${matches.size.toLocaleString('en-US')} ${matches.size===1?"finding":"findings"}${foldedIn?` · ${foldedIn} spread ${foldedIn===1?'figure':'figures'} folded in`:''}`;
        for(const head of formHeads.filter(head=>head.parentElement===group)) {
          const isOpen=openForms.has(head);
          head.hidden=!expanded.has(group)||!headRows.get(head)?.some(row=>matches.has(row));
          head.classList.toggle('is-open',isOpen);
          head.querySelector('.hmi-form-toggle')?.setAttribute('aria-expanded',String(isOpen));
        }
        for(const row of members) {
          const head=headOf.get(row);
          row.hidden=!matches.has(row)||!expanded.has(group)||Boolean(head&&!openForms.has(head));
          const index=rowIndex.get(row)!,v=view?.[index][key],tag=`${key}|${mode}`;
          // Only visible rows are redrawn; hidden rows catch up when shown.
          if(!v||row.hidden||rendered[index]===tag)continue;
          row.querySelector<HTMLElement>("[data-row-scope]")!.innerHTML=v.scope_html;
          row.querySelector<HTMLElement>("[data-row-finding]")!.innerHTML=v.finding_html;
          row.querySelector<HTMLElement>("[data-row-comparison]")!.innerHTML=v.comparison_html[mode];
          rendered[index]=tag;
        }
      }
      const firstGroup=groups.find(group=>!group.hidden&&expanded.has(group));
      const synopsis=root.querySelector<HTMLElement>('[data-result-synopsis]')!;
      synopsis.hidden=root.dataset.compactIntro==='true'||!firstGroup;
      const shownRows=firstGroup ? groupRows.get(firstGroup)!.filter(row=>!row.hidden) : [];
      root.querySelector<HTMLElement>('[data-result-synopsis-text]')!.textContent=firstGroup
        ? root.dataset.sourceSummaries === "true"
          ? `${firstGroup.dataset.analyteName}: ${shownRows.length} ${shownRows.length===1?"finding":"findings"} from ${new Set(shownRows.map(row=>row.dataset.source)).size} ${new Set(shownRows.map(row=>row.dataset.source)).size===1?"source":"sources"}. Each row retains its statistic and measurement basis.`
          : shownRows.map(row=>view![rowIndex.get(row)!][key].summary_text).join(' ')
        : '';
      status.textContent=`${matched} of ${shownTotal} food/analyte findings match · ${visibleGroups} ${visibleGroups===1?"analyte":"analytes"}`;
      const coverage=root.querySelector<HTMLElement>("[data-comparison-summary]");
      if(coverage)coverage.textContent=comparisonSummary(comparisonStates);
      root.querySelector<HTMLElement>("[data-explorer-empty]")!.hidden=matched!==0;
    }
    function filter(event?:Event) {
      groups.forEach(group=>expanded.add(group));
      // Choosing one food form opens it.
      if(event?.target===formSelect&&formSelect?.value&&!formSelect.value.startsWith('family:'))formHeads.filter(head=>head.dataset.formGroup===formSelect.value).forEach(head=>openForms.add(head));
      update();
    }
    // A form's rating counts open one drawer listing those findings.
    const esc=(value:unknown)=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
    const reasonText:Record<string,[string,string]>=Object.fromEntries(Array.from(root.querySelectorAll<HTMLElement>('[data-form-reasons] [data-reason]')).map(el=>[el.dataset.reason!,[el.dataset.title??'',el.textContent??'']]));
    let formTrigger:HTMLElement|null=null,formDrawerHead:HTMLTableRowElement|null=null;
    function drawerTable(headers:string[],rows:string[][]) {
      return `<div class="hmi-drawer-table"><table><thead><tr>${headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    function tally(items:Record<string,unknown>[],key:string,limit=8) {
      const counts=new Map<string,number>();
      for(const item of items){const k=String(item[key]||'Not reported');counts.set(k,(counts.get(k)??0)+1);}
      return [...counts].sort((a,b)=>b[1]-a[1]).slice(0,limit);
    }
    const plural=(n:number,one:string,many:string)=>`${n.toLocaleString('en-US')} ${n===1?one:many}`;
    const fmt=(v:number)=>v>=100?Math.round(v).toLocaleString('en-US'):Number(v.toPrecision(3)).toLocaleString('en-US');
    function openFormDrawer(head:HTMLTableRowElement,level:string,from:HTMLElement) {
      formTrigger=from;trigger=from;opening++;
      const group=head.parentElement as HTMLElement,form=head.dataset.formLabel??'',buttons=Array.from(head.querySelectorAll<HTMLElement>('[data-open-form-level]'));
      const all=(headRows.get(head)??[]).map(row=>({
        id:row.id,level:row.dataset.level??'none',why:row.dataset.reasonCode??'',value:Number(row.dataset.value),
        finding:row.querySelector('[data-row-finding] .hmi-finding')?.textContent?.trim()??'',
        fold:row.querySelector('[data-row-finding] .hmi-fold-note')?.textContent?.trim()??'',
        src:row.cells[0]?.querySelector('.hmi-row-note')?.textContent?.trim()??'',
        scope:row.cells[1]?.querySelector('strong')?.textContent?.trim()??'',
        period:row.cells[1]?.querySelector('span:not(.hmi-row-note)')?.textContent?.trim()??'',
      }));
      const selected=all.filter(item=>item.level===level),label=buttons.find(b=>b.dataset.openFormLevel===level)?.dataset.levelLabel??level;
      const tabs=`<div class="hmi-form-tabs" role="group" aria-label="Comparison group">${buttons.map(b=>{
        const k=b.dataset.openFormLevel!,icon=b.querySelector('i')?.outerHTML??'';
        return `<button type="button" class="${esc(b.className)}" data-form-tab="${esc(k)}" aria-pressed="${k===level}">${icon}<span>${esc(b.dataset.levelLabel)} · ${esc(b.dataset.count)}</span></button>`;
      }).join('')}</div>`;
      const values=selected.map(item=>item.value).filter(v=>v>0),ref=head.dataset.refRange;
      const lede=['low','moderate','high'].includes(level)
        ? `${plural(selected.length,'finding','findings')} ${level==='low'?'below':level==='high'?'above':'within'} the middle 50% of ${ref?`the HMI ${form.toLowerCase()} reference (${ref})`:'their own HMI reference'}.${values.length?` Reported values ${Math.min(...values)===Math.max(...values)?fmt(values[0]):`${fmt(Math.min(...values))}–${fmt(Math.max(...values))}`} µg/kg${values.length<selected.length?` (${values.length} of ${selected.length} with a single value)`:''}.`:''}`
        : level==='direct'
          ? `${plural(selected.length,'finding','findings')} compared within their own study for the same form, so the direction holds within one study only.`
          : `${plural(selected.length,'finding','findings')} without a Low, Moderate or High position. The reasons are below; a missing rating never means low contamination.`;
      let body=`${tabs}<p class="hmi-form-lede">${esc(lede)}</p>`;
      const section=(title:string)=>`<p class="hmi-drawer-section-title" role="heading" aria-level="3">${esc(title)}</p>`;
      if(level==='none')body+=section('Why these are not rated')+drawerTable(['Reason','Findings'],tally(selected,'why',12).map(([k,n])=>[`<strong>${esc(reasonText[k]?.[0]??k)}</strong><br><span class="hmi-row-note">${esc(reasonText[k]?.[1]??'')}</span>`,String(n)]));
      body+=section('Studies')+drawerTable(['Study','Findings'],tally(selected,'src').map(([k,n])=>[esc(k),String(n)]));
      body+=section('Collection scopes')+drawerTable(['Origin, market or group','Findings'],tally(selected,'scope').map(([k,n])=>[esc(k),String(n)]));
      const ordered=[...selected].sort((a,b)=>(b.value||-1)-(a.value||-1));
      body+=section(`All ${plural(selected.length,'finding','findings')}`)+drawerTable(['Finding','Study and scope',''],ordered.map(item=>[
        `${esc(item.finding)}${item.fold?`<br><span class="hmi-row-note">${esc(item.fold)}</span>`:''}`,
        `${esc(item.src)}<br><span class="hmi-row-note">${esc(item.scope)}${item.period?` · ${esc(item.period)}`:''}</span>`,
        `<button type="button" class="hmi-form-open-row" data-form-open-row="${esc(item.id)}">Open paper</button>`,
      ]));
      const content=document.createElement('div');content.dataset.formDrawer=head.dataset.formGroup;content.innerHTML=body;
      drawerBody.replaceChildren(content);
      formDrawerHead=head;
      showDrawer(`${label} · ${form}`,`${group.dataset.analyteName} · ${plural(selected.length,'finding','findings')} of ${all.length.toLocaleString('en-US')}`);
    }
    function showDrawer(title:string,subtitle:string) {
      drawer.querySelector<HTMLElement>('.hmi-drawer-title')!.textContent=title;
      drawer.querySelector<HTMLElement>("[data-drawer-subtitle]")!.textContent=subtitle;
      if(!drawer.open) {
        previousOverflow=document.body.style.overflow;
        document.body.style.overflow="hidden";
        overflowLocked=true;
        drawer.showModal();
      }
      drawerBody.scrollTop=0;
      drawer.querySelector<HTMLButtonElement>("[data-close-evidence]")!.focus();
    }
    function fill(selected:HTMLElement) {
      selected.querySelector<HTMLElement>('[data-shared-evidence-target]')?.replaceChildren(root.querySelector<HTMLElement>('[data-shared-evidence-content]')!.cloneNode(true));
      for (const target of selected.querySelectorAll<HTMLElement>('[data-baseline-reference]')) {
        const template=Array.from(root.querySelectorAll<HTMLElement>('[data-baseline-reference-template]')).find(t=>t.dataset.baselineReferenceTemplate===target.dataset.baselineReference);
        if(template)target.replaceChildren(...Array.from(template.childNodes).map(node=>node.cloneNode(true)));
      }
      drawerBody.replaceChildren(selected);
    }
    async function openEvidence(summary:HTMLElement) {
      const run=++opening;
      trigger=summary;
      if(summary.hasAttribute('data-open-context')) {
        const subjectSlug=root.id.replace(/^hmi-occurrence-/,''),subjectName=subjectSlug.replace(/-/g,' ').replace(/^./,letter=>letter.toUpperCase());
        fill(root.querySelector<HTMLElement>('[data-explorer-context-content]')!.cloneNode(true) as HTMLElement);
        showDrawer(`${subjectName} comparison methods`,subjectSlug==='rice'?'Rice types, study scope and interpretation':'Source groups, study scope and interpretation');
        contextButton?.setAttribute('aria-expanded','true');
        return;
      }
      const row=summary.closest<HTMLTableRowElement>("[data-occurrence-row]")!;
      const group=row.closest<HTMLElement>('[data-analyte-group]')!;
      const placeholder=document.createElement('p');
      placeholder.setAttribute('role','status');placeholder.textContent='Loading dataset details…';
      drawerBody.replaceChildren(placeholder);
      showDrawer('1 dataset',`${group.dataset.analyteName} (${group.dataset.analyteGroup}) · ${row.cells[0].querySelector('strong')?.textContent??''} · ${row.cells[1].innerText.replace(/\s+/g," ")}`);
      let record:Awaited<ReturnType<typeof rowDetails>>;
      try{record=await rowDetails(row);}catch(error){
        console.error(error);
        if(run===opening&&drawer.open)placeholder.textContent='The dataset details could not be loaded. The source record linked in this row gives the original values and methods.';
        return;
      }
      if(run!==opening||!drawer.open)return;
      const {details,evidence}=record,key=`${region.value}::${year.value}`;
      const selected=typeof evidence==='string'
        ? document.createRange().createContextualFragment(evidence).firstElementChild as HTMLElement
        : evidence.cloneNode(true) as HTMLElement;
      // The drawer reflects the current selection, like the row it opened from.
      const set=(selector:string,html:string|undefined)=>{const el=selected.querySelector<HTMLElement>(selector);if(el&&html!==undefined)el.innerHTML=html;};
      const text=(selector:string,value:string|undefined)=>{const el=selected.querySelector<HTMLElement>(selector);if(el&&value!==undefined)el.textContent=value;};
      set("[data-selected-finding]",details.finding_detail_html[key]);
      set("[data-selected-comparison]",details.comparison_detail_html[key]?.[comparison.value]);
      text("[data-timeline-scope]",details.drawer_views.timelines[region.value]?.scope);
      set("[data-selected-timeline]",details.drawer_views.timelines[region.value]?.html);
      text("[data-regional-scope]",details.drawer_views.regions[year.value]?.scope);
      set("[data-selected-regional]",details.drawer_views.regions[year.value]?.html);
      fill(selected);
      drawerBody.scrollTop=0;
      if(summary.hasAttribute("data-open-comparison")) {
        const target=drawerBody.querySelector<HTMLElement>("[data-selected-comparison]");
        if(target)drawerBody.scrollTop=target.offsetTop-drawerBody.offsetTop-16;
      }
    }
    function closeEvidence() {if(drawer.open)drawer.close();}
    function afterClose() {
      opening++;
      contextButton?.setAttribute('aria-expanded','false');
      if(overflowLocked)document.body.style.overflow=previousOverflow;
      overflowLocked=false;
      // A paper opened from a form's drawer belongs to a collapsed row; focus returns
      // to the count that opened the drawer.
      const back=trigger?.isConnected&&trigger.getClientRects().length?trigger:formTrigger;
      back?.focus();
      trigger=null;formTrigger=null;formDrawerHead=null;
    }
    function drawerClick(event:MouseEvent) {if(event.target===drawer)closeEvidence();}
    function click(event:MouseEvent) {
      const target=event.target as Element;
      const levelButton=target.closest<HTMLElement>("[data-open-form-level]");
      if(levelButton&&root.contains(levelButton)){event.preventDefault();openFormDrawer(levelButton.closest<HTMLTableRowElement>("tr.hmi-form-group")!,levelButton.dataset.openFormLevel!,levelButton);return;}
      const tab=target.closest<HTMLElement>("[data-form-tab]");
      if(tab&&formDrawerHead&&drawer.contains(tab)){openFormDrawer(formDrawerHead,tab.dataset.formTab!,formTrigger??tab);return;}
      const paper=target.closest<HTMLElement>("[data-form-open-row]");
      if(paper&&drawer.contains(paper)){
        const button=root.querySelector<HTMLElement>(`[id="${paper.dataset.formOpenRow}"] [data-open-evidence]`);
        if(button){const back=formTrigger;openEvidence(button);formTrigger=back;}
        return;
      }
      const formHead=target.closest<HTMLElement>(".hmi-form-head");
      if(formHead&&root.contains(formHead)&&!target.closest(".hmi-info-button, .hmi-form-tally button")) {
        const head=formHead.closest<HTMLTableRowElement>("tr.hmi-form-group")!;
        if(openForms.has(head))openForms.delete(head);else openForms.add(head);
        update();return;
      }
      const summary=target.closest<HTMLElement>("[data-open-evidence], [data-open-comparison], [data-open-finding], [data-open-context]");
      if(summary && root.contains(summary)){event.preventDefault();openEvidence(summary);return;}
      const button=target.closest<HTMLButtonElement>("button");if(!button||!root.contains(button))return;
      if(button.hasAttribute("data-close-evidence")){closeEvidence();return;}
      if(button.hasAttribute("data-toggle-analyte")) {
        const group=button.closest<HTMLTableSectionElement>("[data-analyte-group]")!;
        if(expanded.has(group))expanded.delete(group);else expanded.add(group);
      }else if(button.hasAttribute("data-expand-all")){groups.filter(group=>!group.hidden).forEach(group=>expanded.add(group));formHeads.filter(head=>!head.parentElement!.hidden).forEach(head=>openForms.add(head));}
      else if(button.hasAttribute("data-collapse-all")){groups.filter(group=>!group.hidden).forEach(group=>expanded.delete(group));openForms.clear();}
      else if(button.hasAttribute("data-reset-explorer")) {
        analyte.value="";region.value="";year.value="";comparison.value=defaultComparison;if(source)source.value="";if(comparable)comparable.checked=false;if(formSelect)formSelect.value="";openForms.clear();
        expanded.clear();expanded.add(groups[0]);
      }else return;
      update();
    }
    const selects=[analyte,region,year,comparison,...(source?[source]:[]),...(comparable?[comparable]:[]),...(formSelect?[formSelect]:[])];
    selects.forEach(select=>select.addEventListener("change",filter));
    root.addEventListener("click",click);
    drawer.addEventListener("close",afterClose);
    drawer.addEventListener("click",drawerClick);
    drawer.addEventListener("keydown",keepDrawerFocus);
    document.addEventListener("prenav",closeEvidence);
    update();
    window.addCleanup?.(()=>{
      closeEvidence();afterClose();
      selects.forEach(select=>select.removeEventListener("change",filter));
      root.removeEventListener("click",click);
      drawer.removeEventListener("close",afterClose);
      drawer.removeEventListener("click",drawerClick);
      drawer.removeEventListener("keydown",keepDrawerFocus);
      document.removeEventListener("prenav",closeEvidence);
      contextButton?.removeEventListener('click',openContext);
      contextButton?.remove();
      const contextDisclosure=root.querySelector<HTMLElement>('[data-explorer-context]');
      if(contextDisclosure)contextDisclosure.hidden=false;
      infoResolvers.delete(root);
      delete root.dataset.explorerReady;
    });
  });
}
document.addEventListener("nav",setupAnalyteExplorers);
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setupAnalyteExplorers,{once:true});
else setupAnalyteExplorers();

function setupMitigationExplorers() {
  document.querySelectorAll<HTMLElement>('[data-mitigation-explorer]').forEach(root=>{
    if(root.dataset.explorerReady)return;
    const selects=Array.from(root.querySelectorAll<HTMLSelectElement>('[data-mitigation-filter]'));
    const rows=Array.from(root.querySelectorAll<HTMLTableRowElement>('[data-mitigation-row]'));
    const groups=Array.from(root.querySelectorAll<HTMLTableSectionElement>('[data-mitigation-group]'));
    const expanded=new Set(groups);
    const stageGrouped=root.dataset.controlGrouping==='stage';
    const filterPanel=root.querySelector<HTMLDetailsElement>('[data-mitigation-filters]');
    const drawer=root.querySelector<HTMLDialogElement>('dialog')!;
    let trigger:HTMLElement|null=null, previousOverflow='', locked=false;
    function update() {
      let count=0;
      for(const group of groups) {
        const groupRows=rows.filter(row=>row.parentElement===group);
        const matched=groupRows.filter(row=>selects.every(s=>!s.value||(['audience','analyte'].includes(s.dataset.mitigationFilter!)?row.getAttribute(`data-${s.dataset.mitigationFilter}`)?.split(' ').includes(s.value):row.getAttribute(`data-${s.dataset.mitigationFilter}`)===s.value)));
        group.hidden=matched.length===0;count+=matched.length;
        group.querySelector<HTMLButtonElement>('[data-toggle-mitigation]')!.setAttribute('aria-expanded',String(expanded.has(group)));
        group.querySelector<HTMLElement>('.hmi-group-count')!.textContent=`${matched.length} ${stageGrouped?(matched.length===1?'comparison':'comparisons'):(matched.length===1?'finding':'findings')}`;
        groupRows.forEach(row=>row.hidden=!matched.includes(row)||!expanded.has(group));
      }
      root.querySelectorAll<HTMLButtonElement>('[data-mitigation-audience]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mitigationAudience===selects.find(s=>s.dataset.mitigationFilter==='audience')?.value)));
      root.querySelector<HTMLElement>('[data-mitigation-status]')!.textContent=`${count} of ${rows.length} ${stageGrouped?'control comparisons':'outcome findings'} match · linked effects retained`;
      root.querySelector<HTMLElement>('[data-mitigation-empty]')!.hidden=count!==0;
    }
    function close(){if(drawer.open)drawer.close();}
    function restore(){if(locked)document.body.style.overflow=previousOverflow;locked=false;trigger?.focus();trigger=null;}
    function click(event:MouseEvent){
      const target=event.target as Element;
      const summary=target.closest<HTMLElement>('[data-open-mitigation], [data-open-effect]');
      if(summary&&root.contains(summary)) {
        event.preventDefault();trigger=summary;
        const sourceTrigger=!summary.hasAttribute('data-open-mitigation')?summary.closest('[data-mitigation-row]')!.querySelector<HTMLElement>('[data-open-mitigation]')!:summary;
        drawer.querySelector<HTMLElement>('[data-mitigation-drawer-title]')!.textContent=sourceTrigger.dataset.evidenceKind==='guidance'?'1 guidance source':sourceTrigger.dataset.evidenceKind==='context'?'1 context source':'1 intervention dataset';
        const row=summary.closest<HTMLTableRowElement>('[data-mitigation-row]')!;
        drawer.querySelector<HTMLElement>('[data-drawer-body]')!.replaceChildren(row.querySelector<HTMLElement>('[data-evidence-content]')!.cloneNode(true));
        drawer.querySelector<HTMLElement>('[data-drawer-subtitle]')!.textContent=row.cells[0].innerText.replace(/\s+/g,' ');
        previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';locked=true;
        drawer.showModal();drawer.querySelector<HTMLElement>('[data-drawer-body]')!.scrollTop=0;
        drawer.querySelector<HTMLButtonElement>('[data-close-mitigation]')!.focus();return;
      }
      const button=target.closest<HTMLButtonElement>('button');if(!button)return;
      if(button.hasAttribute('data-mitigation-audience')){selects.forEach(s=>s.value=s.dataset.mitigationFilter==='audience'?button.dataset.mitigationAudience!:'');groups.forEach(g=>expanded.add(g));update();return;}
      if(button.hasAttribute('data-close-mitigation')){close();return;}
      if(button.hasAttribute('data-toggle-mitigation')){const group=button.closest<HTMLTableSectionElement>('[data-mitigation-group]')!;if(expanded.has(group))expanded.delete(group);else expanded.add(group);update();}
      if(button.hasAttribute('data-reset-mitigation')){selects.forEach(s=>s.value='');groups.forEach(g=>expanded.add(g));update();}
    }
    function backdrop(event:MouseEvent){if(event.target===drawer)close();}
    function filter(){groups.forEach(g=>expanded.add(g));update();}
    root.addEventListener('click',click);selects.forEach(s=>s.addEventListener('change',filter));
    drawer.addEventListener('close',restore);drawer.addEventListener('click',backdrop);document.addEventListener('prenav',close);
    drawer.addEventListener('keydown',keepDrawerFocus);
    root.querySelector<HTMLElement>('[data-mitigation-controls]')!.hidden=false;
    if(filterPanel)filterPanel.hidden=false;
    root.dataset.explorerReady='true';update();
    window.addCleanup?.(()=>{close();restore();root.removeEventListener('click',click);selects.forEach(s=>s.removeEventListener('change',filter));drawer.removeEventListener('close',restore);drawer.removeEventListener('click',backdrop);drawer.removeEventListener('keydown',keepDrawerFocus);document.removeEventListener('prenav',close);if(filterPanel)filterPanel.hidden=true;delete root.dataset.explorerReady;});
  });
}
document.addEventListener('nav',setupMitigationExplorers);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupMitigationExplorers,{once:true});
else setupMitigationExplorers();

// Keep explanatory cards outside scrollable tables so they remain readable at
// table edges. The same controls open on hover, keyboard focus, or touch/click.
function setupExplorerInfo() {
  document.querySelectorAll<HTMLElement>('.hmi-analyte-explorer').forEach((root,index)=>{
    if(root.dataset.infoReady)return;
    root.dataset.infoReady='true';
    const card=document.createElement('div');
    card.id=`hmi-explorer-info-${index}`;
    card.className='hmi-explorer-tooltip';card.setAttribute('role','tooltip');card.hidden=true;
    document.body.append(card);
    let active:HTMLButtonElement|null=null,pinned=false,timer:ReturnType<typeof setTimeout>|undefined;
    function close(){
      clearTimeout(timer);card.hidden=true;
      active?.setAttribute('aria-expanded','false');active?.removeAttribute('aria-describedby');
      active=null;pinned=false;
    }
    function show(button:HTMLButtonElement){
      clearTimeout(timer);
      if(active!==button){close();active=button;}
      const content=button.dataset.infoContent;
      if(content===undefined) {
        // Occurrence rows fetch their explanation with the row's drawer details.
        const resolve=infoResolvers.get(root);if(!resolve)return;
        place(button,'Loading…');
        resolve(button).then(text=>{
          if(text!==undefined)button.dataset.infoContent=text;
          if(active===button)place(button,text??'No explanation is available for this result.');
        },()=>{if(active===button)place(button,'This explanation could not be loaded.');});
        return;
      }
      place(button,content);
    }
    function place(button:HTMLButtonElement,content:string){
      card.textContent=content;card.hidden=false;
      button.setAttribute('aria-describedby',card.id);button.setAttribute('aria-expanded','true');
      const rect=button.getBoundingClientRect(),box=card.getBoundingClientRect();
      const left=Math.max(12,Math.min(rect.left,window.innerWidth-box.width-12));
      const top=rect.bottom+8+box.height<=window.innerHeight-12?rect.bottom+8:Math.max(12,rect.top-box.height-8);
      card.style.left=`${left}px`;card.style.top=`${top}px`;
    }
    const buttonFrom=(target:EventTarget|null)=>target instanceof Element?target.closest<HTMLButtonElement>('[data-info-content], .hmi-info-button'):null;
    function over(event:PointerEvent){const button=buttonFrom(event.target);if(button && event.pointerType!=='touch' && !pinned)show(button);}
    function out(event:PointerEvent){if(!pinned && buttonFrom(event.target) && !(event.relatedTarget instanceof Node && card.contains(event.relatedTarget)))timer=setTimeout(close,160);}
    function focus(event:FocusEvent){const button=buttonFrom(event.target);if(button)show(button);}
    function blur(event:FocusEvent){if(buttonFrom(event.target) && !(event.relatedTarget instanceof Node && card.contains(event.relatedTarget)))close();}
    function click(event:MouseEvent){const button=buttonFrom(event.target);if(!button)return;if(active===button && pinned)close();else{show(button);pinned=true;}}
    function outside(event:PointerEvent){if(active && event.target instanceof Node && !active.contains(event.target) && !card.contains(event.target))close();}
    function key(event:KeyboardEvent){if(event.key==='Escape' && active){event.preventDefault();close();}}
    function leaveCard(){if(!pinned)timer=setTimeout(close,160);}
    function enterCard(){clearTimeout(timer);}
    function scroll(event:Event){if(event.target!==card)close();}
    root.addEventListener('pointerover',over);root.addEventListener('pointerout',out);
    root.addEventListener('focusin',focus);root.addEventListener('focusout',blur);root.addEventListener('click',click);
    card.addEventListener('pointerenter',enterCard);card.addEventListener('pointerleave',leaveCard);
    document.addEventListener('pointerdown',outside);document.addEventListener('keydown',key);
    document.addEventListener('scroll',scroll,true);window.addEventListener('resize',close);
    window.addCleanup?.(()=>{
      close();card.remove();delete root.dataset.infoReady;
      root.removeEventListener('pointerover',over);root.removeEventListener('pointerout',out);
      root.removeEventListener('focusin',focus);root.removeEventListener('focusout',blur);root.removeEventListener('click',click);
      document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',key);
      document.removeEventListener('scroll',scroll,true);window.removeEventListener('resize',close);
    });
  });
}
document.addEventListener('nav',setupExplorerInfo);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupExplorerInfo,{once:true});
else setupExplorerInfo();
