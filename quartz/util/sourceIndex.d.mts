export interface SourceRelation {page:string;title:string;sections?:{title:string;anchor:string}[]}
export interface SourceRecord {id:string;aliases:string[];title:string;author:string;year:number|null;publication:string;doi:string;type:string;metals:string[];metadata_note:string;uses:SourceRelation[];candidates:SourceRelation[]}
export interface SourceCatalogue {schema_version:number;relationship_definition:string;sources:SourceRecord[];pages:{slug:string;title:string}[]}
export type SourceState = Record<string,string>;
export const PAGE_SIZE:number;
export function escape(value:unknown):string;
export function sourceStatus(row:SourceRecord,topic?:string):string;
export function selectSources(data:SourceCatalogue,state?:SourceState):{total:number;page:number;pages:number;rows:SourceRecord[]};
export function renderRows(rows:SourceRecord[],offset?:number,topic?:string):string;
export function stateFromURL(url:string):SourceState;
export function updateURL(url:string,state:SourceState):URL;
