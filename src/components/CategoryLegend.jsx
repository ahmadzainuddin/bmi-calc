import React from 'react'

export default function CategoryLegend({ active }) {
  const rules = [
    { label: 'Underweight', range: '< 18.5' },
    { label: 'Normal', range: '18.5 – 24.9' },
    { label: 'Overweight', range: '25 – 29.9' },
    { label: 'Obese', range: '≥ 30' }
  ]
  return (
    <div className="card">
      <h2>Kategori WHO</h2>
      <ul className="legend">
        {rules.map((r) => (
          <li key={r.label} className={`legend-item ${active === r.label ? 'active' : ''}`}>
            <span className="legend-name">{r.label}</span>
            <span className="legend-range">{r.range}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}