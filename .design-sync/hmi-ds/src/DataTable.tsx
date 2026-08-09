import * as React from "react"

// Data table — the standard content table used for regulatory limits, measured
// values, and crosswalks. Source of truth: the v3 table rules in the compiled
// stylesheet, which style any <table> inside .wiki-content. An optional note
// renders as .hmi-table-note above the table (v3-primitives.scss COMPONENTS §10:
// 11.5px, muted). Keep tabular numerics in the value columns.

export interface DataTableProps {
  columns: string[]
  /** Row cells, in column order. */
  rows: (string | number)[][]
  /** Optional caption/source note rendered above the table (.hmi-table-note). */
  note?: string
}

export function DataTable({ columns, rows, note }: DataTableProps) {
  return (
    <div className="wiki-content">
      {note ? <p className="hmi-table-note">{note}</p> : null}
      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
