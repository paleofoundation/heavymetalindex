import * as React from "react"

// Key→value list — the shared dotted label→value atom used for hero snapshot
// facts, product facts, and source facts. Source of truth:
// quartz/styles/v3-primitives.scss (COMPONENTS §10, .hmi-kv / .hmi-kv-k /
// .hmi-kv-v). Each row is a 2-column grid (Inter label left, IBM Plex Mono
// burgundy value right) under a dotted #f2ece7 rule.

export interface KeyValueRow {
  /** Label — Inter, left. */
  k: string
  /** Value — IBM Plex Mono, burgundy, right. */
  v: string
}

export interface KeyValueListProps {
  rows: KeyValueRow[]
}

export function KeyValueList({ rows }: KeyValueListProps) {
  return (
    <div>
      {rows.map((r, i) => (
        <div className="hmi-kv" key={i}>
          <span className="hmi-kv-k">{r.k}</span>
          <span className="hmi-kv-v">{r.v}</span>
        </div>
      ))}
    </div>
  )
}
