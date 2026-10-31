export { EXPLORER_CHUNK_ROWS, chunkCount } from "./explorer-chunks.mjs"
export function encodeExplorerPayload(payload: unknown): string
export function decodeExplorerPayload(encoded: string): any
export function packExplorerPayload(rows: unknown[]): { version: 1; parts: string[]; fragments: number[][]; rows: unknown[] }
export function unpackExplorerPayload(payload: unknown): any[]
export function viewSidecar(encoded: string): string
export function chunkSidecar(encoded: string, evidence: string[]): string
