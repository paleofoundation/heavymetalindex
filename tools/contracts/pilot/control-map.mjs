import { escapeHTML as e } from './analyte-table.mjs';

const icons = [
  '<path d="M3 26h26M7 25V15m9 10V9m9 16V15M3 14l4-4 4 4m1-6 4-4 4 4m1 6 4-4 4 4"/>',
  '<path d="M4 27V14l8 4v-7l8 5V5h6v22ZM8 23h3m5 0h3m4 0h1"/>',
  '<path d="M4 17h24c0 8-5 12-12 12S4 25 4 17Zm5-5c-4-4 4-5 0-9m7 9c-4-4 4-5 0-9m7 9c-4-4 4-5 0-9"/>',
];

// A responsive reading map. Claims and sources remain in the same canonical
// answer record as the prose; the visual adds no effect estimate or ranking.
export function renderControlMap(diagram, cite) {
  return `<figure class="hmi-control-map" aria-label="${e(diagram.title)}"><div class="hmi-control-map-stages">${diagram.stages.map((stage,i)=>`<div class="hmi-control-map-stage"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[i]}</svg><a data-no-popover="true" href="#${e(stage.anchor)}">${e(stage.label)}</a><p>${e(stage.text)}</p>${i<diagram.stages.length-1?'<span class="hmi-control-map-arrow" aria-hidden="true">→</span>':''}</div>`).join('')}</div>${diagram.caption ? `<figcaption>\n\n${cite({text:diagram.caption,source_keys:diagram.source_keys})}\n\n</figcaption>` : ""}</figure>\n\n`;
}
