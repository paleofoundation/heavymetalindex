import {PAGE_SIZE,selectSources,renderRows,stateFromURL,updateURL,type SourceCatalogue,type SourceState} from '../../util/sourceIndex.mjs'

async function setupSourceIndex() {
  const candidate=document.querySelector<HTMLElement>('[data-source-index]')
  if(!candidate||candidate.dataset.ready)return
  const root=candidate
  root.dataset.ready='true'
  const abort=new AbortController()
  window.addCleanup(()=>abort.abort())
  const controls=Array.from(root.querySelectorAll<HTMLInputElement|HTMLSelectElement>('[data-source-filter]'))
  const status=root.querySelector<HTMLElement>('[data-source-status]')!
  try {
    const response=await fetch(root.dataset.sourceIndexUrl!,{signal:abort.signal})
    if(!response.ok)throw Error('Source catalogue unavailable')
    const data=await response.json() as SourceCatalogue
    if(data.schema_version!==1||!Array.isArray(data.sources)||!Array.isArray(data.pages))throw Error('Source catalogue format unavailable')
    if(!root.isConnected)return
    let state:SourceState=stateFromURL(location.href)
    const rows=root.querySelector<HTMLElement>('[data-source-rows]')!
    const previous=root.querySelector<HTMLButtonElement>('[data-source-previous]')!
    const next=root.querySelector<HTMLButtonElement>('[data-source-next]')!
    const note=root.querySelector<HTMLElement>('[data-source-topic-note]')!
    const syncControls=()=>controls.forEach(control=>{
      control.value=state[control.dataset.sourceFilter!]||''
      // Unknown values do not masquerade as an active filter.
      if(control instanceof HTMLSelectElement&&control.selectedIndex<0){state[control.dataset.sourceFilter!]='';control.value=''}
    })
    function render(writeURL=true) {
      const result=selectSources(data,state)
      state.p=String(result.page)
      rows.innerHTML=renderRows(result.rows,(result.page-1)*PAGE_SIZE,state.topic)
      status.textContent=`${result.total.toLocaleString()} source records · ${result.total?`showing ${(result.page-1)*PAGE_SIZE+1}–${(result.page-1)*PAGE_SIZE+result.rows.length}`:'no matches'}. Counts are records, not independent studies.`
      const topic=data.pages.find(page=>page.slug===state.topic)
      note.hidden=!topic
      note.textContent=topic?`Relationships shown for ${topic.title}. A source cited elsewhere remains a discovery candidate here until its use on this page is established.`:''
      root.querySelector<HTMLElement>('[data-source-empty]')!.hidden=result.total!==0
      root.querySelector<HTMLElement>('[data-source-pagination]')!.hidden=result.pages<=1
      root.querySelector<HTMLElement>('[data-source-page]')!.textContent=`Page ${result.page} of ${result.pages}`
      previous.disabled=result.page<=1;next.disabled=result.page>=result.pages
      if(writeURL){const url=updateURL(location.href,state);history.replaceState(history.state,'',url.pathname+url.search+url.hash)}
    }
    syncControls();render(false)
    for(const control of controls)control.addEventListener(control instanceof HTMLInputElement?'input':'change',()=>{
      state[control.dataset.sourceFilter!]=control.value;state.p='1';render()
    },{signal:abort.signal})
    root.querySelector('[data-source-reset]')!.addEventListener('click',()=>{state={};syncControls();render()},{signal:abort.signal})
    const turnPage=(direction:number)=>{state.p=String(Number(state.p||1)+direction);render();root.querySelector('table')!.scrollIntoView({block:'start'});status.focus()}
    status.tabIndex=-1
    previous.addEventListener('click',()=>turnPage(-1),{signal:abort.signal})
    next.addEventListener('click',()=>turnPage(1),{signal:abort.signal})
    window.addEventListener('popstate',()=>{state=stateFromURL(location.href);syncControls();render(false)},{signal:abort.signal})
  } catch(error) {
    if(abort.signal.aborted)return
    status.textContent='Search is unavailable. The first 50 records remain visible; download the complete source index below.'
    root.querySelectorAll<HTMLInputElement|HTMLSelectElement|HTMLButtonElement>('input,select,button').forEach(control=>control.disabled=true)
  }
}
document.addEventListener('nav',setupSourceIndex)
