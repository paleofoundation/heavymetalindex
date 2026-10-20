// Source summaries are precompiled. The browser only selects a scoped result.
import { comparisonSummary, type ComparisonState } from "../../../tools/lib/occurrence-comparison.mjs";
function keepDrawerFocus(event:KeyboardEvent) {
  if(event.key!=="Tab")return;
  const drawer=event.currentTarget as HTMLDialogElement;
  const controls=Array.from(drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), summary, select:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(el=>el.getClientRects().length>0);
  const first=controls[0],last=controls.at(-1);
  if(!first){event.preventDefault();return;}
  if(event.shiftKey && document.activeElement===first){event.preventDefault();last!.focus();}
  else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
}
function setupAnalyteExplorers() {
  document.querySelectorAll<HTMLElement>("[data-analyte-explorer]").forEach((root) => {
    if (root.dataset.explorerReady) return;
    const analyte=root.querySelector<HTMLSelectElement>("[data-filter-analyte]")!;
    const region=root.querySelector<HTMLSelectElement>("[data-filter-region]")!;
    const year=root.querySelector<HTMLSelectElement>("[data-filter-year]")!;
    const comparison=root.querySelector<HTMLSelectElement>("[data-filter-comparison]")!;
    const groups=Array.from(root.querySelectorAll<HTMLTableSectionElement>("[data-analyte-group]"));
    const rows=Array.from(root.querySelectorAll<HTMLTableRowElement>("[data-occurrence-row]"));
    const total=rows.length;
    const source=root.querySelector<HTMLSelectElement>("[data-filter-source]");
    const comparable=root.querySelector<HTMLInputElement>("[data-filter-comparable]");
    const defaultComparison=comparison.value;
    type Variant={scope_html:string;finding_html:string;finding_detail_html:string;summary_text:string;comparison_html:Record<string,string>;comparison_detail_html:Record<string,string>;n:number;unit:string};
    type DrawerView={scope:string;html:string};
    type RowPayload={variants:Record<string,Variant>;drawer_views:{timelines:Record<string,DrawerView>;regions:Record<string,DrawerView>}};
    let payloadRows:RowPayload[];
    try {
      const encoded=root.querySelector<HTMLScriptElement>('[data-explorer-payload]')!.textContent!;
      const decoded=new TextDecoder().decode(Uint8Array.from(atob(encoded),char=>char.charCodeAt(0)));
      const compiled=JSON.parse(decoded) as {version:number;parts:string[];fragments:number[][];rows:unknown[]};
      if(compiled.version!==1||!Array.isArray(compiled.parts)||!Array.isArray(compiled.fragments)||!Array.isArray(compiled.rows))throw Error('Invalid explorer payload');
      const fragments=compiled.fragments.map(indices=>{
        if(!Array.isArray(indices)||indices.some(i=>!Number.isInteger(i)||typeof compiled.parts[i]!=='string'))throw Error('Missing explorer part');
        return indices.map(i=>compiled.parts[i]).join('');
      });
      // Expand shared markup only after the entire selection payload is valid.
      function unpack(value:unknown,html=false):unknown {
        if(html && typeof value==='number'){
          if(!Number.isInteger(value)||typeof fragments[value]!=='string')throw Error('Missing explorer fragment');
          return fragments[value];
        }
        if(Array.isArray(value))return value.map(item=>unpack(item,html));
        if(value && typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,unpack(item,html||key==='html'||key.endsWith('_html'))]));
        return value;
      }
      payloadRows=unpack(compiled.rows) as RowPayload[];
      if(rows.some(row=>!payloadRows[Number(row.dataset.occurrenceIndex)]?.variants?.['::']||!payloadRows[Number(row.dataset.occurrenceIndex)]?.drawer_views))throw Error('Missing explorer row');
    } catch(error) {
      // Leave native source disclosures and all default rows usable. One bad
      // payload must not prevent citations or other page scripts initializing.
      console.error('Unable to initialize the occurrence explorer; retaining source disclosures.',error);
      return;
    }
    const variants=new Map(rows.map(row=>[row,payloadRows[Number(row.dataset.occurrenceIndex)].variants]));
    const drawerViews=new Map(rows.map(row=>[row,payloadRows[Number(row.dataset.occurrenceIndex)].drawer_views]));
    const controls=root.querySelector<HTMLElement>("[data-explorer-controls]")!;
    const drawer=root.querySelector<HTMLDialogElement>(".hmi-evidence-drawer")!;
    const drawerBody=drawer.querySelector<HTMLElement>("[data-drawer-body]")!;
    let trigger:HTMLElement|null=null;
    let previousOverflow="";
    let overflowLocked=false;
    const expanded=new Set(groups.slice(0,1));
    root.dataset.explorerReady="true";
    root.querySelectorAll<HTMLElement>("[data-baseline-fallback]").forEach(el=>el.hidden=true);

    controls.hidden=false;
    const filterPanel=root.querySelector<HTMLDetailsElement>('[data-explorer-filters]');
    if(filterPanel)filterPanel.hidden=false;
    // Keep the authored disclosure usable without JavaScript; enhance its entry
    // point only after the explorer payload has initialized successfully.
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

    // Read the state already compiled into each result; do not duplicate it in
    // every region/year payload or infer comparisons from displayed numbers.
    function comparisonKind(view:Variant|undefined) {
      return view?.comparison_html[comparison.value]?.match(/data-comparison-state="([a-z]+)"/)?.[1] as ComparisonState["kind"]|undefined;
    }
    function update() {
      let matched=0,visibleGroups=0;
      const comparisonStates:Pick<ComparisonState,"kind">[]=[];
      const key=`${region.value}::${year.value}`;
      for(const group of groups) {
        const groupRows=Array.from(group.querySelectorAll<HTMLTableRowElement>("[data-occurrence-row]"));
        const matches=groupRows.filter(row=>{
          const view=variants.get(row)?.[key];
          const state=comparisonKind(view);
          return (!analyte.value||group.dataset.analyteGroup===analyte.value)&&(!source?.value||row.dataset.source===source.value)&&Boolean(view)&&(!comparable?.checked||state==='rated'||state==='direct');
        });
        matches.forEach(row=>{
          const state=comparisonKind(variants.get(row)?.[key]);
          if(state)comparisonStates.push({kind:state});
        });
        group.hidden=matches.length===0;
        if(matches.length)visibleGroups++;
        matched+=matches.length;
        group.querySelector<HTMLButtonElement>("[data-toggle-analyte]")!.setAttribute("aria-expanded",String(expanded.has(group)));
        group.querySelector<HTMLElement>(".hmi-group-count")!.textContent=`${matches.length} ${matches.length===1?"finding":"findings"}`;
        for(const row of groupRows) {
          row.hidden=!matches.includes(row)||!expanded.has(group);
          const v=variants.get(row)?.[key];if(!v)continue;
          row.dataset.region=region.value||row.cells[1].textContent||"";
          row.querySelector<HTMLElement>("[data-row-scope]")!.innerHTML=v.scope_html;
          row.querySelector<HTMLElement>("[data-row-finding]")!.innerHTML=v.finding_html;
          row.querySelector<HTMLElement>("[data-row-comparison]")!.innerHTML=v.comparison_html[comparison.value];
          const views=drawerViews.get(row)!;
          row.querySelector<HTMLElement>("[data-timeline-scope]")!.textContent=views.timelines[region.value].scope;
          row.querySelector<HTMLElement>("[data-selected-timeline]")!.innerHTML=views.timelines[region.value].html;
          row.querySelector<HTMLElement>("[data-regional-scope]")!.textContent=views.regions[year.value].scope;
          row.querySelector<HTMLElement>("[data-selected-regional]")!.innerHTML=views.regions[year.value].html;
          row.querySelector<HTMLElement>("[data-evidence-n]")!.textContent=`${v.n} ${v.unit}`;
          row.querySelector<HTMLElement>("[data-selected-finding]")!.innerHTML=v.finding_detail_html;
          row.querySelector<HTMLElement>("[data-selected-comparison]")!.innerHTML=v.comparison_detail_html[comparison.value];
        }
      }
      const firstGroup=groups.find(group=>!group.hidden&&expanded.has(group));
      const synopsis=root.querySelector<HTMLElement>('[data-result-synopsis]')!;
      synopsis.hidden=root.dataset.compactIntro==='true'||!firstGroup;
      const shownRows=firstGroup ? rows.filter(row=>row.parentElement===firstGroup&&!row.hidden) : [];
      root.querySelector<HTMLElement>('[data-result-synopsis-text]')!.textContent=firstGroup
        ? root.dataset.sourceSummaries === "true"
          ? `${firstGroup.dataset.analyteName}: ${shownRows.length} ${shownRows.length===1?"finding":"findings"} from ${new Set(shownRows.map(row=>row.dataset.source)).size} ${new Set(shownRows.map(row=>row.dataset.source)).size===1?"source":"sources"}. Each row retains its statistic and measurement basis.`
          : shownRows.map(row=>variants.get(row)![key].summary_text).join(' ')
        : '';
      root.querySelector<HTMLElement>("[data-explorer-status]")!.textContent=`${matched} of ${total} food/analyte findings match · ${visibleGroups} ${visibleGroups===1?"analyte":"analytes"}`;
      const coverage=root.querySelector<HTMLElement>("[data-comparison-summary]");
      if(coverage)coverage.textContent=comparisonSummary(comparisonStates);
      root.querySelector<HTMLElement>("[data-explorer-empty]")!.hidden=matched!==0;
    }
    function filter() {groups.forEach(group=>expanded.add(group));update();}
    function openEvidence(summary:HTMLElement) {
      const context=summary.hasAttribute('data-open-context');
      const row=summary.closest<HTMLTableRowElement>("[data-occurrence-row]");
      const content=context ? root.querySelector<HTMLElement>('[data-explorer-context-content]')! : row!.querySelector<HTMLElement>("[data-evidence-content]")!;
      trigger=summary;
      const selected=content.cloneNode(true) as HTMLElement;
      selected.querySelector<HTMLElement>('[data-shared-evidence-target]')?.replaceChildren(root.querySelector<HTMLElement>('[data-shared-evidence-content]')!.cloneNode(true));
      for (const target of selected.querySelectorAll<HTMLElement>('[data-baseline-reference]')) {
        const template=Array.from(root.querySelectorAll<HTMLElement>('[data-baseline-reference-template]')).find(t=>t.dataset.baselineReferenceTemplate===target.dataset.baselineReference);
        if(template)target.replaceChildren(...Array.from(template.childNodes).map(node=>node.cloneNode(true)));
      }
      drawerBody.replaceChildren(selected);
      drawer.querySelector<HTMLElement>('.hmi-drawer-title')!.textContent=context?'Rice comparison methods':'1 dataset';
      drawer.querySelector<HTMLElement>("[data-drawer-subtitle]")!.textContent=context?'Rice types, study scope and interpretation':`${row!.dataset.drawerContext} · ${row!.cells[1].innerText.replace(/\s+/g," ")}`;
      previousOverflow=document.body.style.overflow;
      document.body.style.overflow="hidden";
      overflowLocked=true;
      drawer.showModal();
      if(context)contextButton?.setAttribute('aria-expanded','true');
      drawerBody.scrollTop=0;
      if(summary.hasAttribute("data-open-comparison")) {
        const selected=drawerBody.querySelector<HTMLElement>("[data-selected-comparison]")!;
        drawerBody.scrollTop=selected.offsetTop-drawerBody.offsetTop-16;
      }
      drawer.querySelector<HTMLButtonElement>("[data-close-evidence]")!.focus();
    }
    function closeEvidence() {if(drawer.open)drawer.close();}
    function afterClose() {
      contextButton?.setAttribute('aria-expanded','false');
      if(overflowLocked)document.body.style.overflow=previousOverflow;
      overflowLocked=false;
      if(trigger?.isConnected)trigger.focus();
      trigger=null;
    }
    function drawerClick(event:MouseEvent) {if(event.target===drawer)closeEvidence();}
    function click(event:MouseEvent) {
      const target=event.target as Element;
      const summary=target.closest<HTMLElement>("[data-open-evidence], [data-open-comparison], [data-open-finding], [data-open-context]");
      if(summary && root.contains(summary)){event.preventDefault();openEvidence(summary);return;}
      const button=target.closest<HTMLButtonElement>("button");if(!button||!root.contains(button))return;
      if(button.hasAttribute("data-close-evidence")){closeEvidence();return;}
      if(button.hasAttribute("data-toggle-analyte")) {
        const group=button.closest<HTMLTableSectionElement>("[data-analyte-group]")!;
        if(expanded.has(group))expanded.delete(group);else expanded.add(group);
      }else if(button.hasAttribute("data-expand-all"))groups.filter(group=>!group.hidden).forEach(group=>expanded.add(group));
      else if(button.hasAttribute("data-collapse-all"))groups.filter(group=>!group.hidden).forEach(group=>expanded.delete(group));
      else if(button.hasAttribute("data-reset-explorer")) {
        analyte.value="";region.value="";year.value="";comparison.value=defaultComparison;if(source)source.value="";if(comparable)comparable.checked=false;
        expanded.clear();expanded.add(groups[0]);
      }else return;
      update();
    }
    const selects=[analyte,region,year,comparison,...(source?[source]:[]),...(comparable?[comparable]:[])];
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
      card.textContent=button.dataset.infoContent!;card.hidden=false;
      button.setAttribute('aria-describedby',card.id);button.setAttribute('aria-expanded','true');
      const rect=button.getBoundingClientRect(),box=card.getBoundingClientRect();
      const left=Math.max(12,Math.min(rect.left,window.innerWidth-box.width-12));
      const top=rect.bottom+8+box.height<=window.innerHeight-12?rect.bottom+8:Math.max(12,rect.top-box.height-8);
      card.style.left=`${left}px`;card.style.top=`${top}px`;
    }
    const buttonFrom=(target:EventTarget|null)=>target instanceof Element?target.closest<HTMLButtonElement>('[data-info-content]'):null;
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
