export const EXPLORER_CHUNK_ROWS: number
export function chunkCount(rows: number, size?: number): number
export function chunkRows(declared: string | number | null | undefined): number
export function chunkLength(k: number, total: number, size: number): number
export function chunkPosition(index: number, size: number): { chunk: number; offset: number }
