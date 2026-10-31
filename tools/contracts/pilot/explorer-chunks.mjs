// Drawer details travel in fixed-size row chunks. The renderer publishes the
// chunk size on the explorer's details element and the browser reads it back,
// so the two can never infer different sizes. Browser-safe: no Node imports.
export const EXPLORER_CHUNK_ROWS = 100;
export const chunkCount = (rows, size = EXPLORER_CHUNK_ROWS) => Math.ceil(rows / size);

// The chunk size an explorer was built with. Pages compiled before the size was
// published were all built with the default.
export function chunkRows(declared) {
  if (declared === undefined || declared === null || declared === "") return EXPLORER_CHUNK_ROWS;
  const size = Number(declared);
  if (!Number.isInteger(size) || size < 1) throw Error(`Invalid explorer chunk size: ${declared}`);
  return size;
}
// Rows a given chunk must hold; a loaded chunk of any other length is rejected.
export function chunkLength(k, total, size) {
  return Math.max(0, Math.min(size, total - k * size));
}
// Chunk and offset of a row, in the explorer's row order.
export const chunkPosition = (index, size) => ({ chunk: Math.floor(index / size), offset: index % size });
