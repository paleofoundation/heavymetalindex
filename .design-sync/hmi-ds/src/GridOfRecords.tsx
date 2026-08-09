import * as React from "react"

// Grid-of-records — a compact registry scanned without table chrome ("what this
// page covers"). Source of truth: quartz/styles/v3-primitives.scss (COMPONENTS
// §8, .hmi-grid-records). The rules are drawn by a 1px gap over a #e8e1db ground
// (var(--line)); each cell sits on #fffdfb (var(--paper-raised)) and shows a
// mono uppercase burgundy key over its value. Use 4 columns for the eight-cell
// grid, 2 for a two-up registry.

export interface GridRecord {
  /** Key — rendered IBM Plex Mono, uppercase, burgundy. */
  k: string
  /** Value — rendered Inter. */
  v: string
}

export interface GridOfRecordsProps {
  records: GridRecord[]
  /** Column count: 4 (default) or 2. Collapses responsively below 900/560px. */
  columns?: 2 | 4
}

export function GridOfRecords({ records, columns = 4 }: GridOfRecordsProps) {
  return (
    <div className={`hmi-grid-records hmi-grid-${columns}`}>
      {records.map((r, i) => (
        <div className="hmi-grid-cell" key={i}>
          <span className="hmi-grid-k">{r.k}</span>
          <span className="hmi-grid-v">{r.v}</span>
        </div>
      ))}
    </div>
  )
}
