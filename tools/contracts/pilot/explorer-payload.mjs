// Repeated selection markup is stored once. The default table and source
// disclosures remain ordinary HTML, so the evidence also works without scripts.
import { Buffer } from "node:buffer";
const isHTML = key => key === "html" || key.endsWith("_html");

// Base64 keeps UTF-8 JSON outside article prose and survives Quartz's JSX
// serializer without raw-script quote escaping or closing-tag injection.
export function encodeExplorerPayload(payload) {
  return Buffer.from(JSON.stringify(payload),"utf8").toString("base64");
}

export function decodeExplorerPayload(encoded) {
  return JSON.parse(Buffer.from(encoded,"base64").toString("utf8"));
}

export function packExplorerPayload(rows) {
  const fragments = [], indices = new Map();
  const pack = (value, html = false) => {
    if (html && typeof value === "string") {
      if (!indices.has(value)) { indices.set(value, fragments.length); fragments.push(value); }
      return indices.get(value);
    }
    if (Array.isArray(value)) return value.map(item => pack(item, html));
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key,item]) => [key,pack(item,html || isHTML(key))]));
    return value;
  };
  const compactRows=pack(rows),parts=[],partIndices=new Map();
  // Distinct result fragments still share icons, tags and table cells. Retain
  // those exact substrings once too, without changing their rendered markup.
  const compactFragments=fragments.map(fragment=>fragment.split(/(?=<)|(?<=>)/u).filter(Boolean).map(part=>{
    if(!partIndices.has(part)){partIndices.set(part,parts.length);parts.push(part);}
    return partIndices.get(part);
  }));
  return { version: 1, parts, fragments:compactFragments, rows:compactRows };
}

export function unpackExplorerPayload(payload) {
  if (payload?.version !== 1 || !Array.isArray(payload.parts) || !Array.isArray(payload.fragments) || !Array.isArray(payload.rows)) throw Error("Invalid explorer payload");
  const fragments=payload.fragments.map(indices=>{
    if(!Array.isArray(indices)||indices.some(i=>!Number.isInteger(i)||typeof payload.parts[i]!=="string"))throw Error("Missing explorer part");
    return indices.map(i=>payload.parts[i]).join("");
  });
  const unpack = (value, html = false) => {
    if (html && typeof value === "number") {
      if (!Number.isInteger(value) || typeof fragments[value] !== "string") throw Error("Missing explorer fragment");
      return fragments[value];
    }
    if (Array.isArray(value)) return value.map(item => unpack(item, html));
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key,item]) => [key,unpack(item,html || isHTML(key))]));
    return value;
  };
  return unpack(payload.rows);
}

// Drawer details travel in fixed-size row chunks. A page build moves each chunk
// and the filter payload into static JSON beside the page; the browser fetches
// a chunk only when one of its drawers or tooltips is opened.
export { EXPLORER_CHUNK_ROWS, chunkCount } from "./explorer-chunks.mjs";

// Sidecar bodies: the decoded filter payload, or a chunk's packed details plus
// its processed evidence markup in row order.
export function viewSidecar(encoded) {
  const payload=decodeExplorerPayload(encoded);unpackExplorerPayload(payload);
  return JSON.stringify(payload);
}
export function chunkSidecar(encoded, evidence) {
  const details=decodeExplorerPayload(encoded),rows=unpackExplorerPayload(details);
  if(!Array.isArray(evidence)||evidence.length!==rows.length||evidence.some(html=>typeof html!=="string"||!html.includes("data-evidence-content")))throw Error("Explorer chunk evidence does not match its details");
  return JSON.stringify({ version: 1, details, evidence });
}
